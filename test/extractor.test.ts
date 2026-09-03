import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import { sanitizeDOM, extractTargetDOM, autoExpandInteractive } from '../src/content/extractor';

describe('DOM Extractor & Sanitizer', () => {
  it('strips scripts, styles, forms, and quiz widgets', () => {
    const dom = new JSDOM(`
      <article>
        <h1>Test Title</h1>
        <p>Valid academic paragraph.</p>
        <script>console.log('bad');</script>
        <style>body { color: red; }</style>
        <form><input type="text"><button>Submit</button></form>
        <div class="quiz-container">Quiz Question</div>
        <div role="dialog">Modal overlay</div>
      </article>
    `, { url: 'https://example.com/page1' });

    const article = dom.window.document.querySelector('article')!;
    const sanitized = sanitizeDOM(article, 'https://example.com/page1');

    expect(sanitized).toContain('Test Title');
    expect(sanitized).toContain('Valid academic paragraph.');
    expect(sanitized).not.toContain('<script');
    expect(sanitized).not.toContain('<style');
    expect(sanitized).not.toContain('<form');
    expect(sanitized).not.toContain('quiz-container');
    expect(sanitized).not.toContain('Modal overlay');
  });

  it('expands collapsed details and aria-expanded elements', () => {
    const dom = new JSDOM(`
      <div>
        <details>
          <summary>Read more</summary>
          <p>Hidden details content</p>
        </details>
        <div aria-expanded="false" hidden>Tab panel content</div>
      </div>
    `);

    const div = dom.window.document.querySelector('div')!;
    autoExpandInteractive(div);

    const details = div.querySelector('details')!;
    const tab = div.querySelector('[aria-expanded]')!;
    expect(details.open).toBe(true);
    expect(tab.getAttribute('aria-expanded')).toBe('true');
    expect(tab.hasAttribute('hidden')).toBe(false);
  });

  it('normalizes images to figures with resolved absolute URLs', () => {
    const dom = new JSDOM(`
      <main>
        <img src="/images/chart.png" alt="Figure 1: Performance comparison">
      </main>
    `, { url: 'https://example.com/sub/page' });

    const main = dom.window.document.querySelector('main')!;
    const sanitized = sanitizeDOM(main, 'https://example.com/sub/page');

    expect(sanitized).toContain('figure class="academic-figure"');
    expect(sanitized).toContain('src="https://example.com/images/chart.png"');
    expect(sanitized).toContain('figcaption class="academic-caption">Figure 1: Performance comparison');
  });

  it('preserves math markup intact', () => {
    const dom = new JSDOM(`
      <article>
        <p>Formula: <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></semantics></math></span></span></p>
      </article>
    `, { url: 'https://example.com' });

    const article = dom.window.document.querySelector('article')!;
    const sanitized = sanitizeDOM(article, 'https://example.com');

    expect(sanitized).toContain('katex');
    expect(sanitized).toContain('math');
    expect(sanitized).toContain('<mi>m</mi>');
    expect(sanitized).toContain('<mi>c</mi>');
  });

  it('extracts target DOM using container hierarchy', () => {
    const dom = new JSDOM(`
      <html>
        <head><title>Page Document Title</title></head>
        <body>
          <nav>Nav links</nav>
          <div class="course-content">
            <h1>Lesson 3: Quantum Computing</h1>
            <p>This is the core lesson content spanning multiple detailed sections.</p>
          </div>
          <footer>Footer links</footer>
        </body>
      </html>
    `, { url: 'https://example.com/course' });

    const result = extractTargetDOM(dom.window.document, 'https://example.com/course');
    expect(result.title).toBe('Lesson 3: Quantum Computing');
    expect(result.sanitizedHtml).toContain('Lesson 3: Quantum Computing');
    expect(result.sanitizedHtml).toContain('Quantum Computing');
    expect(result.sanitizedHtml).not.toContain('Nav links');
    expect(result.sanitizedHtml).not.toContain('Footer links');
  });
});
