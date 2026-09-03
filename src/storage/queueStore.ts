import { QueuedSection, CompilerOptions } from '../types';

const STORAGE_KEY = 'openlearning_queue';
const OPTIONS_KEY = 'openlearning_compiler_options';

export const DEFAULT_COMPILER_OPTIONS: CompilerOptions = {
  layout: 'single-column',
  fontFamily: 'times',
  fontSize: '11pt',
  includeHeaderFooter: true,
  paperSize: 'a4'
};

function isChromeStorageAvailable(): boolean {
  return typeof chrome !== 'undefined' && !!chrome.storage?.local;
}

// Fallback in-memory store for non-extension / testing environments
let memoryQueue: QueuedSection[] = [];
let memoryOptions: CompilerOptions = { ...DEFAULT_COMPILER_OPTIONS };

export async function getQueue(): Promise<QueuedSection[]> {
  if (isChromeStorageAvailable()) {
    const res = await chrome.storage.local.get([STORAGE_KEY]);
    return (res[STORAGE_KEY] as QueuedSection[]) || [];
  }
  return [...memoryQueue];
}

export async function saveQueue(queue: QueuedSection[]): Promise<QueuedSection[]> {
  const normalized = queue.map((item, idx) => ({ ...item, orderIndex: idx }));
  if (isChromeStorageAvailable()) {
    await chrome.storage.local.set({ [STORAGE_KEY]: normalized });
  } else {
    memoryQueue = normalized;
  }
  return normalized;
}

export async function addSection(
  data: Omit<QueuedSection, 'id' | 'timestamp' | 'orderIndex'>
): Promise<QueuedSection[]> {
  const queue = await getQueue();
  const newSection: QueuedSection = {
    ...data,
    id: `sec_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    orderIndex: queue.length
  };
  queue.push(newSection);
  return await saveQueue(queue);
}

export async function removeSection(id: string): Promise<QueuedSection[]> {
  const queue = await getQueue();
  const updated = queue.filter((item) => item.id !== id);
  return await saveQueue(updated);
}

export async function reorderQueue(orderedIds: string[]): Promise<QueuedSection[]> {
  const queue = await getQueue();
  const map = new Map(queue.map((item) => [item.id, item]));
  const reordered: QueuedSection[] = [];

  for (const id of orderedIds) {
    const found = map.get(id);
    if (found) {
      reordered.push(found);
      map.delete(id);
    }
  }
  map.forEach((item) => reordered.push(item));
  return await saveQueue(reordered);
}

export async function updateSectionTitle(id: string, newTitle: string): Promise<QueuedSection[]> {
  const queue = await getQueue();
  const found = queue.find((item) => item.id === id);
  if (found) {
    found.title = newTitle.trim();
  }
  return await saveQueue(queue);
}

export async function clearQueue(): Promise<void> {
  if (isChromeStorageAvailable()) {
    await chrome.storage.local.remove([STORAGE_KEY]);
  } else {
    memoryQueue = [];
  }
}

export async function getCompilerOptions(): Promise<CompilerOptions> {
  if (isChromeStorageAvailable()) {
    const res = await chrome.storage.local.get([OPTIONS_KEY]);
    return { ...DEFAULT_COMPILER_OPTIONS, ...(res[OPTIONS_KEY] || {}) };
  }
  return { ...memoryOptions };
}

export async function saveCompilerOptions(
  options: Partial<CompilerOptions>
): Promise<CompilerOptions> {
  const current = await getCompilerOptions();
  const updated = { ...current, ...options };
  if (isChromeStorageAvailable()) {
    await chrome.storage.local.set({ [OPTIONS_KEY]: updated });
  } else {
    memoryOptions = updated;
  }
  return updated;
}
