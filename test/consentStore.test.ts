import { describe, it, expect, beforeEach } from 'vitest';
import {
  hasAgreedToLegal,
  recordLegalConsent,
  resetLegalConsent,
  getLegalConsentRecord
} from '../src/storage/consentStore';

describe('Legal Consent Store', () => {
  beforeEach(async () => {
    await resetLegalConsent();
  });

  it('defaults to not agreed on initial installation', async () => {
    const agreed = await hasAgreedToLegal();
    expect(agreed).toBe(false);
  });

  it('records user consent with timestamp', async () => {
    const record = await recordLegalConsent();
    expect(record.agreed).toBe(true);
    expect(record.timestamp).toBeGreaterThan(0);

    const agreed = await hasAgreedToLegal();
    expect(agreed).toBe(true);

    const retrieved = await getLegalConsentRecord();
    expect(retrieved?.agreed).toBe(true);
    expect(retrieved?.timestamp).toBe(record.timestamp);
  });

  it('resets consent successfully', async () => {
    await recordLegalConsent();
    expect(await hasAgreedToLegal()).toBe(true);

    await resetLegalConsent();
    expect(await hasAgreedToLegal()).toBe(false);
    expect(await getLegalConsentRecord()).toBeNull();
  });
});
