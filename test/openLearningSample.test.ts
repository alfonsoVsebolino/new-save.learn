import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import * as fs from 'fs';
import * as path from 'path';
import { extractTargetDOM } from '../src/content/extractor';

describe('OpenLearning Sample DOM Extraction', () => {
  it('extracts real OpenLearning sample page accurately', () => {
    const filePath = path.resolve(__dirname, '../sample_page_set_notation.html');
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(html, { url: 'https://www.openlearning.com/courses/ace/set-notation/' });

    const result = extractTargetDOM(dom.window.document, 'https://www.openlearning.com/courses/ace/set-notation/');

    expect(result.title).toBe('Set Notation');
    expect(result.sanitizedHtml.length).toBeGreaterThan(50);
    expect(result.sanitizedHtml).not.toContain('courseSidebar');
    expect(result.sanitizedHtml).not.toContain('karma-block');
  }, 20000);
});
