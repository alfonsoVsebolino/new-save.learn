import { extractTargetDOM } from './extractor';

function showToast(message: string): void {
  const existing = document.getElementById('openlearning-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'openlearning-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #0f172a;
    color: #f8fafc;
    padding: 10px 18px;
    border-radius: 8px;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 13px;
    font-weight: 500;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    z-index: 999999;
    transition: opacity 0.2s ease-in-out;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 200);
  }, 2200);
}

export function handleExtract(): { success: boolean; data?: any; error?: string } {
  console.log('[OpenLearning-Ext:Content] Starting DOM extraction for:', window.location.href);
  try {
    const extracted = extractTargetDOM(document, window.location.href);
    console.log(`[OpenLearning-Ext:Content] Extracted: "${extracted.title}" (${extracted.sanitizedHtml.length} chars)`);
    showToast(`✓ Added to PDF queue: ${extracted.title}`);
    return {
      success: true,
      data: {
        sourceUrl: window.location.href,
        title: extracted.title,
        rawHtml: '',
        sanitizedHtml: extracted.sanitizedHtml
      }
    };
  } catch (err: any) {
    console.error('[OpenLearning-Ext:Content] Extraction failed:', err);
    showToast(`⚠ Extraction failed: ${err?.message || 'unknown error'}`);
    return { success: false, error: err?.message || 'Unknown extraction error' };
  }
}

if (typeof chrome !== 'undefined' && chrome.runtime?.onMessage) {
  console.log('[OpenLearning-Ext:Content] Content script listener initialized.');
  chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    console.log('[OpenLearning-Ext:Content] Received message:', request);
    if (request.action === 'EXTRACT_CURRENT_PAGE') {
      const result = handleExtract();
      console.log('[OpenLearning-Ext:Content] Sending response back to sender:', { success: result.success, title: result.data?.title });
      sendResponse(result);
    }
  });
}
