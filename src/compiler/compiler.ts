import { getQueue, getCompilerOptions, saveCompilerOptions } from '../storage/queueStore';
import { QueuedSection } from '../types';

function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

async function initCompiler(): Promise<void> {
  const queue = await getQueue();
  const options = await getCompilerOptions();

  const titleInput = document.getElementById('doc-title-input') as HTMLInputElement;
  const mainTitle = document.getElementById('doc-main-title') as HTMLElement;
  const metadataEl = document.getElementById('doc-metadata') as HTMLElement;
  const countEl = document.getElementById('section-count') as HTMLElement;
  const statusMsg = document.getElementById('status-msg') as HTMLElement;
  const layoutSelect = document.getElementById('layout-select') as HTMLSelectElement;
  const printBtn = document.getElementById('print-btn') as HTMLButtonElement;
  const docContent = document.getElementById('doc-content') as HTMLElement;

  if (options.layout) {
    layoutSelect.value = options.layout;
    setLayout(options.layout);
  }

  countEl.textContent = `${queue.length} section${queue.length === 1 ? '' : 's'}`;
  metadataEl.textContent = `Generated on ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} • ${queue.length} Sections`;

  titleInput.addEventListener('input', () => {
    const val = titleInput.value.trim() || 'Compiled Academic Notes';
    mainTitle.textContent = val;
    document.title = `${val} - Academic PDF`;
  });

  layoutSelect.addEventListener('change', async () => {
    const layout = layoutSelect.value as 'single-column' | 'two-column';
    setLayout(layout);
    await saveCompilerOptions({ layout });
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });

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

document.addEventListener('DOMContentLoaded', initCompiler);
