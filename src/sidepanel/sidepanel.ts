import {
  getQueue,
  addSection,
  removeSection,
  saveQueue,
  updateSectionTitle,
  clearQueue,
  getCompilerOptions,
  saveCompilerOptions
} from '../storage/queueStore';
import { QueuedSection } from '../types';

const queueListEl = document.getElementById('queue-list') as HTMLElement;
const badgeEl = document.getElementById('queue-badge') as HTMLElement;
const btnAddCurrent = document.getElementById('btn-add-current') as HTMLButtonElement;
const btnClearAll = document.getElementById('btn-clear-all') as HTMLButtonElement;
const btnCompilePdf = document.getElementById('btn-compile-pdf') as HTMLButtonElement;
const layoutSelect = document.getElementById('sidepanel-layout') as HTMLSelectElement;

async function render(): Promise<void> {
  const queue = await getQueue();
  badgeEl.textContent = queue.length.toString();

  if (queue.length === 0) {
    queueListEl.innerHTML = `
      <div class="empty-state">
        <p style="font-size: 13px; font-weight: 600; margin-bottom: 4px;">Queue is empty</p>
        <p style="font-size: 11.5px; line-height: 1.4;">Navigate to any course page and click "Add Current Page" above to append content.</p>
      </div>
    `;
    return;
  }

  queueListEl.innerHTML = '';
  queue.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'queue-card';
    card.dataset.id = item.id;

    let displayUrl = '';
    try {
      displayUrl = new URL(item.sourceUrl).pathname;
    } catch {
      displayUrl = item.sourceUrl;
    }

    card.innerHTML = `
      <div class="queue-card-header">
        <div class="reorder-btns">
          <button class="reorder-btn btn-up" title="Move Up" ${index === 0 ? 'disabled style="opacity:0.3;cursor:default"' : ''}>▲</button>
          <button class="reorder-btn btn-down" title="Move Down" ${index === queue.length - 1 ? 'disabled style="opacity:0.3;cursor:default"' : ''}>▼</button>
        </div>
        <input type="text" class="title-input" value="${item.title.replace(/"/g, '&quot;')}" title="Click to rename section">
        <button class="delete-btn" title="Remove section">✕</button>
      </div>
      <div class="card-meta">
        #${index + 1} • ${displayUrl || 'Local source'}
      </div>
    `;

    const titleInput = card.querySelector('.title-input') as HTMLInputElement;
    titleInput.addEventListener('change', async () => {
      await updateSectionTitle(item.id, titleInput.value);
    });

    const deleteBtn = card.querySelector('.delete-btn') as HTMLButtonElement;
    deleteBtn.addEventListener('click', async () => {
      await removeSection(item.id);
      await render();
    });

    const btnUp = card.querySelector('.btn-up') as HTMLButtonElement;
    btnUp.addEventListener('click', async () => {
      if (index > 0) {
        const temp = queue[index - 1];
        queue[index - 1] = queue[index];
        queue[index] = temp;
        await saveQueue(queue);
        await render();
      }
    });

    const btnDown = card.querySelector('.btn-down') as HTMLButtonElement;
    btnDown.addEventListener('click', async () => {
      if (index < queue.length - 1) {
        const temp = queue[index + 1];
        queue[index + 1] = queue[index];
        queue[index] = temp;
        await saveQueue(queue);
        await render();
      }
    });

    queueListEl.appendChild(card);
  });
}

const statusBannerEl = document.getElementById('status-banner') as HTMLElement;

function showBanner(message: string, type: 'info' | 'success' | 'error', durationMs = 4000): void {
  if (!statusBannerEl) return;
  statusBannerEl.textContent = message;
  statusBannerEl.className = `status-banner banner-${type}`;
  statusBannerEl.style.display = 'block';
  if (durationMs > 0) {
    setTimeout(() => {
      if (statusBannerEl.textContent === message) {
        statusBannerEl.style.display = 'none';
      }
    }, durationMs);
  }
}

async function addCurrentPage(): Promise<void> {
  btnAddCurrent.disabled = true;
  btnAddCurrent.textContent = 'Adding...';
  showBanner('⏳ Extracting content from active tab...', 'info', 0);

  try {
    console.log('[OpenLearning-Ext:SidePanel] Querying active tab...');
    let [activeTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    if (!activeTab?.id) {
      [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    }
    if (!activeTab?.id) {
      throw new Error('No active tab found. Please click on the webpage tab and retry.');
    }
    console.log('[OpenLearning-Ext:SidePanel] Target tab:', { id: activeTab.id, url: activeTab.url, title: activeTab.title });

    let response;
    try {
      console.log('[OpenLearning-Ext:SidePanel] Sending EXTRACT_CURRENT_PAGE to tab:', activeTab.id);
      response = await chrome.tabs.sendMessage(activeTab.id, { action: 'EXTRACT_CURRENT_PAGE' });
    } catch (err: any) {
      console.warn('[OpenLearning-Ext:SidePanel] Direct message failed, attempting script injection:', err?.message);
      try {
        await chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ['contentScript.js']
        });
        await new Promise((r) => setTimeout(r, 150));
        response = await chrome.tabs.sendMessage(activeTab.id, { action: 'EXTRACT_CURRENT_PAGE' });
      } catch (injectErr: any) {
        console.error('[OpenLearning-Ext:SidePanel] Script injection / retry failed:', injectErr);
        throw new Error(`Cannot connect to tab. Please refresh the page tab (F5) and retry. (${injectErr?.message || err?.message})`);
      }
    }

    console.log('[OpenLearning-Ext:SidePanel] Received response from tab:', response);

    if (!response) {
      throw new Error('Received empty response from page. Please refresh the tab (F5) and retry.');
    }
    if (!response.success) {
      throw new Error(response.error || 'Page extraction reported failure.');
    }

    if (response.data) {
      console.log('[OpenLearning-Ext:SidePanel] Storing section:', response.data.title);
      const updatedQueue = await addSection(response.data);
      console.log('[OpenLearning-Ext:SidePanel] Section stored! Total in queue:', updatedQueue.length);
      const sizeKb = (response.data.sanitizedHtml.length / 1024).toFixed(1);
      showBanner(`✓ Added: "${response.data.title}" (${sizeKb} KB)`, 'success', 3500);
    }
  } catch (err: any) {
    console.error('[OpenLearning-Ext:SidePanel] Add current page failed:', err);
    showBanner(`❌ ${err?.message || 'Failed to capture page'}`, 'error', 6000);
  } finally {
    btnAddCurrent.disabled = false;
    btnAddCurrent.innerHTML = '<span>➕</span> Add Current Page';
    await render();
  }
}

btnClearAll.addEventListener('click', async () => {
  if (confirm('Clear all queued sections?')) {
    await clearQueue();
    await render();
  }
});

btnAddCurrent.addEventListener('click', addCurrentPage);

btnCompilePdf.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'OPEN_COMPILER' });
});

layoutSelect.addEventListener('change', async () => {
  await saveCompilerOptions({ layout: layoutSelect.value as 'single-column' | 'two-column' });
});

if (typeof chrome !== 'undefined' && chrome.storage?.onChanged) {
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.openlearning_queue) {
      render();
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const options = await getCompilerOptions();
  if (options.layout) {
    layoutSelect.value = options.layout;
  }
  await render();
});
