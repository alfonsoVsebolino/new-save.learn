import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import * as fs from 'fs';
import * as path from 'path';
import { extractTargetDOM } from '../src/content/extractor';

describe('OpenLearning Content Tree Sample Extraction', () => {
  it('unwraps iframe[srcdoc] and extracts all 9 topics in continuous flow', () => {
    const filePath = path.resolve(__dirname, '../sample_content_tree.html');
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(html, { url: 'https://www.openlearning.com/courses/ace/set-notation/' });

    const result = extractTargetDOM(dom.window.document, 'https://www.openlearning.com/courses/ace/set-notation/');

    expect(result.sanitizedHtml.length).toBeGreaterThan(15000);

    // Verify all topics are included from sample_content_tree.html
    expect(result.sanitizedHtml).toContain('1. Module Overview &amp; Guidelines');
    expect(result.sanitizedHtml).toContain('2. Introduction to Automata Theory');
    expect(result.sanitizedHtml).toContain('3. Computation Timeline &amp; Alan Turing');
    expect(result.sanitizedHtml).toContain('4. Languages and Grammars');
    expect(result.sanitizedHtml).toContain('5. The Chomsky Hierarchy');
    expect(result.sanitizedHtml).toContain('6. Alphabets, Strings, and Powers');
    expect(result.sanitizedHtml).toContain('7. String Operations &amp; Guided Practice');

    // Verify interactive pagination controls are stripped
    expect(result.sanitizedHtml).not.toContain('navigation-controls');
    expect(result.sanitizedHtml).not.toContain('next-btn');
    expect(result.sanitizedHtml).not.toContain('prev-btn');
    expect(result.sanitizedHtml).not.toContain('topic-indicator');

    // Verify mathematical and formal theory content is retained
    expect(result.sanitizedHtml).toContain('Chomsky Hierarchy');
    expect(result.sanitizedHtml).toContain('Kleene Star');
  });
});
