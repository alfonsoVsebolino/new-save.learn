import { recordLegalConsent, hasAgreedToLegal } from '../storage/consentStore';

document.addEventListener('DOMContentLoaded', async () => {
  const tabTos = document.getElementById('tab-tos') as HTMLButtonElement;
  const tabPrivacy = document.getElementById('tab-privacy') as HTMLButtonElement;
  const contentTos = document.getElementById('content-tos') as HTMLElement;
  const contentPrivacy = document.getElementById('content-privacy') as HTMLElement;
  const btnAgree = document.getElementById('btn-agree') as HTMLButtonElement;
  const btnClose = document.getElementById('btn-close-onboarding') as HTMLButtonElement;
  const promptView = document.getElementById('consent-prompt-view') as HTMLElement;
  const successView = document.getElementById('consent-success-view') as HTMLElement;
  const logoEl = document.getElementById('splash-logo') as HTMLImageElement;

  if (logoEl && typeof chrome !== 'undefined' && chrome.runtime?.getURL) {
    logoEl.src = chrome.runtime.getURL('logos/newSave_128.png');
  }

  function switchTab(target: 'tos' | 'privacy') {
    if (target === 'tos') {
      tabTos.classList.add('active');
      tabTos.setAttribute('aria-selected', 'true');
      tabPrivacy.classList.remove('active');
      tabPrivacy.setAttribute('aria-selected', 'false');

      contentTos.style.display = 'block';
      contentPrivacy.style.display = 'none';
    } else {
      tabPrivacy.classList.add('active');
      tabPrivacy.setAttribute('aria-selected', 'true');
      tabTos.classList.remove('active');
      tabTos.setAttribute('aria-selected', 'false');

      contentTos.style.display = 'none';
      contentPrivacy.style.display = 'block';
    }
  }

  tabTos.addEventListener('click', () => switchTab('tos'));
  tabPrivacy.addEventListener('click', () => switchTab('privacy'));

  // If user already agreed previously, show confirmation state
  const alreadyAgreed = await hasAgreedToLegal();
  if (alreadyAgreed) {
    promptView.style.display = 'none';
    successView.style.display = 'flex';
  }

  btnAgree.addEventListener('click', async () => {
    btnAgree.disabled = true;
    btnAgree.textContent = 'Recording agreement...';

    await recordLegalConsent();

    promptView.style.display = 'none';
    successView.style.display = 'flex';
  });

  btnClose.addEventListener('click', () => {
    window.close();
  });
});
