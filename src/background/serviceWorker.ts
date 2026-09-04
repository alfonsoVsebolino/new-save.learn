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

chrome.runtime.onInstalled.addListener(async (details) => {
  if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
    await chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  }
  await updateBadge();
  if (details.reason === 'install') {
    const onboardingUrl = chrome.runtime.getURL('src/onboarding/onboarding.html');
    chrome.tabs.create({ url: onboardingUrl });
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.openlearning_queue) {
    updateBadge();
  }
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === 'OPEN_COMPILER') {
    const compilerUrl = chrome.runtime.getURL('src/compiler/compiler.html');
    chrome.tabs.query({ url: compilerUrl }, (tabs) => {
      if (tabs.length > 0 && tabs[0].id) {
        chrome.tabs.reload(tabs[0].id, () => {
          chrome.tabs.update(tabs[0].id!, { active: true });
        });
      } else {
        chrome.tabs.create({ url: compilerUrl });
      }
      sendResponse({ success: true });
    });
    return true;
  }
});
