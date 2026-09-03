import { getQueue, getCompilerOptions, saveCompilerOptions } from '../storage/queueStore';
import { QueuedSection } from '../types';

function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export async function renderDocument(): Promise<void> {
  const queue = await getQueue();
  const options = await getCompilerOptions();

  const metadataEl = document.getElementById('doc-metadata') as HTMLElement | null;
  const countEl = document.getElementById('section-count') as HTMLElement | null;
  const statusMsg = document.getElementById('status-msg') as HTMLElement | null;
  const layoutSelect = document.getElementById('layout-select') as HTMLSelectElement | null;
  const docContent = document.getElementById('doc-content') as HTMLElement | null;

  if (layoutSelect && options.layout) {
    layoutSelect.value = options.layout;
    setLayout(options.layout);
  }

  if (countEl) {
    countEl.textContent = `${queue.length} section${queue.length === 1 ? '' : 's'}`;
  }
  if (metadataEl) {
    metadataEl.textContent = `Generated on ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} • ${queue.length} Sections`;
  }

  if (!docContent || !statusMsg) return;

  if (queue.length === 0) {
    statusMsg.textContent = 'Queue is empty';
    docContent.innerHTML = `
      <div style="text-align: center; padding: 48px 0; color: #64748b;">
        <p style="font-size: 14pt; margin-bottom: 8px;">No sections queued yet.</p>
        <p style="font-size: 10pt;">Navigate to any course page and click "Add Current Page" from the extension side panel.</p>
      </div>
    `;
    return;
  }

  renderSections(queue, docContent);
  statusMsg.textContent = 'Ready to print';
}

export function initCompiler(): void {
  const titleInput = document.getElementById('doc-title-input') as HTMLInputElement | null;
  const mainTitle = document.getElementById('doc-main-title') as HTMLElement | null;
  const layoutSelect = document.getElementById('layout-select') as HTMLSelectElement | null;
  const printBtn = document.getElementById('print-btn') as HTMLButtonElement | null;

  titleInput?.addEventListener('input', () => {
    const val = titleInput.value.trim() || 'Compiled Academic Notes';
    if (mainTitle) mainTitle.textContent = val;
    document.title = `${val} - Academic PDF`;
  });

  layoutSelect?.addEventListener('change', async () => {
    const layout = layoutSelect.value as 'single-column' | 'two-column';
    setLayout(layout);
    await saveCompilerOptions({ layout });
  });

  printBtn?.addEventListener('click', () => {
    window.print();
  });

  renderDocument();
}

function setLayout(layout: 'single-column' | 'two-column'): void {
  document.body.classList.remove('layout-single-column', 'layout-two-column');
  document.body.classList.add(`layout-${layout}`);
}

function renderSections(queue: QueuedSection[], container: HTMLElement): void {
  const htmlParts: string[] = [];

  queue.forEach((section, index) => {
    const secNumber = index + 1;
    htmlParts.push(`
      <section class="academic-section" id="section-${section.id}">
        <div class="academic-divider">
          <span>§ ${secNumber}. ${escapeHtml(section.title)}</span>
        </div>
        <div class="section-body">
          ${section.sanitizedHtml}
        </div>
      </section>
    `);
  });

  container.innerHTML = htmlParts.join('\n');
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCompiler);
  } else {
    initCompiler();
  }

  window.addEventListener('pageshow', () => {
    renderDocument();
  });

  window.addEventListener('focus', () => {
    renderDocument();
  });
}

if (typeof chrome !== 'undefined' && chrome.storage?.onChanged) {
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && (changes.openlearning_queue || changes.openlearning_compiler_options)) {
      renderDocument();
    }
  });
}
