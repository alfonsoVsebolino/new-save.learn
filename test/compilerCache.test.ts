import { describe, it, expect, beforeEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';
import { addSection, clearQueue, getQueue } from '../src/storage/queueStore';

describe('Compiler Stale Cache / Sync Diagnosis', () => {
  beforeEach(async () => {
    await clearQueue();
  });

  it('guarantees compiler re-renders dynamically when queue updates or clears', async () => {
    // Set up DOM
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
      <body>
        <div id="status-msg">Loading...</div>
        <div id="section-count">0 sections</div>
        <div id="doc-metadata"></div>
        <input id="doc-title-input" value="Compiled Academic Notes" />
        <h1 id="doc-main-title"></h1>
        <select id="layout-select"><option value="single-column">Single</option></select>
        <button id="print-btn"></button>
        <div id="doc-content"></div>
      </body>
      </html>
    `, { url: 'chrome-extension://mock-id/src/compiler/compiler.html' });

    // Mock global document & window for compiler
    (global as any).document = dom.window.document;
    (global as any).window = dom.window;

    const { renderDocument } = await import('../src/compiler/compiler');

    // 1. User queues old page
    await addSection({
      sourceUrl: 'https://openlearning.com/old',
      title: 'Old Cached Page',
      rawHtml: '',
      sanitizedHtml: '<div class="old-content">Old Lecture Notes</div>'
    });

    await renderDocument();
    const docContent = dom.window.document.getElementById('doc-content')!;
    expect(docContent.innerHTML).toContain('Old Cached Page');

    // 2. User clears queue and queues new page
    await clearQueue();
    await addSection({
      sourceUrl: 'https://openlearning.com/new',
      title: 'Newly Queued Page',
      rawHtml: '',
      sanitizedHtml: '<div class="new-content">Brand New Topics</div>'
    });

    // 3. Compiler re-renders (triggered by storage onChanged or focus/pageshow)
    await renderDocument();

    // 4. Assert: Old content is purged, new content is present
    expect(docContent.innerHTML).not.toContain('Old Cached Page');
    expect(docContent.innerHTML).toContain('Newly Queued Page');
    expect(dom.window.document.getElementById('section-count')!.textContent).toBe('1 section');

    // 5. Test complete clear
    await clearQueue();
    await renderDocument();
    expect(docContent.innerHTML).toContain('No sections queued yet');
    expect(dom.window.document.getElementById('section-count')!.textContent).toBe('0 sections');
  });
});
