import { LegalConsentRecord } from '../types';

export const CONSENT_STORAGE_KEY = 'newsave_legal_consent';

function isChromeStorageAvailable(): boolean {
  return typeof chrome !== 'undefined' && !!chrome.storage?.local;
}

let memoryConsent: LegalConsentRecord | null = null;

export async function hasAgreedToLegal(): Promise<boolean> {
  if (isChromeStorageAvailable()) {
    const res = await chrome.storage.local.get([CONSENT_STORAGE_KEY]);
    const record = res[CONSENT_STORAGE_KEY] as LegalConsentRecord | undefined;
    return !!record?.agreed;
  }
  return !!memoryConsent?.agreed;
}

export async function getLegalConsentRecord(): Promise<LegalConsentRecord | null> {
  if (isChromeStorageAvailable()) {
    const res = await chrome.storage.local.get([CONSENT_STORAGE_KEY]);
    return (res[CONSENT_STORAGE_KEY] as LegalConsentRecord) || null;
  }
  return memoryConsent ? { ...memoryConsent } : null;
}

export async function recordLegalConsent(): Promise<LegalConsentRecord> {
  const record: LegalConsentRecord = {
    agreed: true,
    timestamp: Date.now()
  };

  if (isChromeStorageAvailable()) {
    await chrome.storage.local.set({ [CONSENT_STORAGE_KEY]: record });
  } else {
    memoryConsent = { ...record };
  }

  return record;
}

export async function resetLegalConsent(): Promise<void> {
  memoryConsent = null;
  if (isChromeStorageAvailable()) {
    await chrome.storage.local.remove([CONSENT_STORAGE_KEY]);
  }
}
