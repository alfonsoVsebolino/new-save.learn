import { getQueue } from '../storage/queueStore';

async function updateBadge(): Promise<void> {
  try {
    const queue = await getQueue();
    const count = queue.length;
    await chrome.action.setBadgeText({ text: count > 0 ? count.toString() : '' });
    await chrome.action.setBadgeBackgroundColor({ color: '#2563eb' });
  } catch (err) {
    console.error('Failed to update badge:', err);
  }
}

chrome.runtime.onInstalled.addListener(async () => {
  if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
    await chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  }
  await updateBadge();
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.openlearning_queue) {
    updateBadge();
  }
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === 'OPEN_COMPILER') {
    chrome.tabs.create({ url: chrome.runtime.getURL('src/compiler/compiler.html') });
    sendResponse({ success: true });
  }
});
