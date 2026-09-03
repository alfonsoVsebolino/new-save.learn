import { describe, it, expect, vi, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Content script message handler', () => {
  it('calls sendResponse with extracted payload without TypeError', async () => {
    const dom = new JSDOM(`
      <html>
        <body>
          <main><h1>Chapter 1</h1><p>Content text</p></main>
        </body>
      </html>
    `, { url: 'https://example.com/ch1' });

    vi.stubGlobal('document', dom.window.document);
    vi.stubGlobal('window', dom.window);

    let registeredListener: ((req: any, sender: any, sendResponse: any) => boolean | void) | null = null;
    const fakeChrome = {
      runtime: {
        onMessage: {
          addListener: vi.fn((fn) => {
            registeredListener = fn;
          })
        }
      }
    };
    vi.stubGlobal('chrome', fakeChrome);

    // Import module so it registers listener
    await import('../src/content/contentScript');

    expect(registeredListener).not.toBeNull();

    const sendResponse = vi.fn();
    expect(() => {
      registeredListener!({ action: 'EXTRACT_CURRENT_PAGE' }, {}, sendResponse);
    }).not.toThrow();

    expect(sendResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          title: 'Chapter 1'
        })
      })
    );
  });
});
