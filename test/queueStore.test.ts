import { describe, it, expect, beforeEach } from 'vitest';
import {
  getQueue,
  addSection,
  removeSection,
  reorderQueue,
  updateSectionTitle,
  clearQueue,
  getCompilerOptions,
  saveCompilerOptions
} from '../src/storage/queueStore';

describe('Queue Store Operations', () => {
  beforeEach(async () => {
    await clearQueue();
  });

  it('adds and retrieves queued sections', async () => {
    let queue = await getQueue();
    expect(queue.length).toBe(0);

    queue = await addSection({
      sourceUrl: 'https://example.com/p1',
      title: 'Section 1',
      rawHtml: '<p>Raw 1</p>',
      sanitizedHtml: '<p>Sanitized 1</p>'
    });

    expect(queue.length).toBe(1);
    expect(queue[0].title).toBe('Section 1');
    expect(queue[0].orderIndex).toBe(0);
    expect(queue[0].id).toBeDefined();
  });

  it('removes sections by id', async () => {
    const q = await addSection({
      sourceUrl: 'https://example.com/p1',
      title: 'To Delete',
      rawHtml: '<p>Raw</p>',
      sanitizedHtml: '<p>Sanitized</p>'
    });
    const id = q[0].id;

    const remaining = await removeSection(id);
    expect(remaining.length).toBe(0);
  });

  it('reorders sections correctly', async () => {
    await addSection({
      sourceUrl: 'https://example.com/p1',
      title: 'First',
      rawHtml: '<p>1</p>',
      sanitizedHtml: '<p>1</p>'
    });
    await addSection({
      sourceUrl: 'https://example.com/p2',
      title: 'Second',
      rawHtml: '<p>2</p>',
      sanitizedHtml: '<p>2</p>'
    });

    let current = await getQueue();
    expect(current[0].title).toBe('First');
    expect(current[1].title).toBe('Second');

    const reversedIds = [current[1].id, current[0].id];
    const reordered = await reorderQueue(reversedIds);

    expect(reordered[0].title).toBe('Second');
    expect(reordered[1].title).toBe('First');
    expect(reordered[0].orderIndex).toBe(0);
    expect(reordered[1].orderIndex).toBe(1);
  });

  it('updates section title', async () => {
    const q = await addSection({
      sourceUrl: 'https://example.com/p1',
      title: 'Old Title',
      rawHtml: '<p>1</p>',
      sanitizedHtml: '<p>1</p>'
    });
    const updated = await updateSectionTitle(q[0].id, 'New Title');
    expect(updated[0].title).toBe('New Title');
  });

  it('handles compiler options update', async () => {
    const initial = await getCompilerOptions();
    expect(initial.layout).toBe('single-column');

    const modified = await saveCompilerOptions({ layout: 'two-column' });
    expect(modified.layout).toBe('two-column');
  });
});
