export interface ExtractedContent {
  title: string;
  rawHtml: string;
  sanitizedHtml: string;
}

const STRIP_SELECTORS = [
  'script',
  'style',
  'noscript',
  'iframe',
  'embed',
  'object',
  'form',
  'input',
  'textarea',
  'button:not(.katex *)',
  'nav',
  'header:not(article header)',
  'footer:not(article footer)',
  '[role="dialog"]',
  '[role="alert"]',
  '[role="banner"]',
  '[role="navigation"]',
  '[class*="quiz"]',
  '[class*="comment"]',
  '[class*="feedback-form"]',
  '[class*="advertisement"]',
  '[class*="share-button"]',
  '.courseNavigationMenu',
  '.react-course-navigation',
  '.courseSidebar',
  '.karma-block',
  '.block-page-bar',
  '.navigation-controls',
  '#prev-btn',
  '#next-btn',
  '#topic-indicator',
  '#page-traversal-mount',
  '#page-comments-mount',
  '#page-options-bar',
  '#page-access-bar',
  'blockpage-footer',
  '.like-status',
  '#DndDescribedBy-1',
  '#DndLiveRegion-1',
  '.no-print'
].join(',');

const CONTAINER_SELECTORS = [
  'block-page-content-and-tags',
  'blockpage-content',
  '.HtmlSnippetWidget',
  '.viewing-block-page',
  '.block-content',
  '.course-page-container-padding',
  '.course-page-container',
  '.course-content',
  '.page-content',
  '.module-content',
  '.learning-content',
  'article',
  'main',
  '[role="main"]',
  '#main-content',
  '#content',
  '.content'
];

export function unwrapIframes(root: Element): void {
  root.querySelectorAll('iframe').forEach((iframe) => {
    let htmlContent = iframe.getAttribute('srcdoc') || (iframe as HTMLIFrameElement).srcdoc;
    if (!htmlContent && (iframe as HTMLIFrameElement).contentDocument?.body) {
      htmlContent = (iframe as HTMLIFrameElement).contentDocument!.body.innerHTML;
    }

    if (htmlContent && htmlContent.trim().length > 0) {
      try {
        const tempDoc = root.ownerDocument.implementation.createHTMLDocument('');
        tempDoc.body.innerHTML = htmlContent;

        // Un-hide all tab/topic sections in embedded lessons
        tempDoc.querySelectorAll('.topic-section').forEach((sec) => {
          sec.classList.add('active');
          sec.removeAttribute('style');
        });

        // Strip embedded interactive navigation controls and scripts
        tempDoc.querySelectorAll('.navigation-controls, #prev-btn, #next-btn, #topic-indicator, script, style').forEach((el) => {
          el.remove();
        });

        const wrapper = root.ownerDocument.createElement('div');
        wrapper.className = 'unwrapped-iframe-content';
        wrapper.innerHTML = tempDoc.body.innerHTML;
        iframe.parentNode?.replaceChild(wrapper, iframe);
      } catch (err) {
        console.warn('Failed to unwrap embedded iframe content:', err);
      }
    }
  });
}

export function autoExpandInteractive(root: Element): void {
  root.querySelectorAll('details').forEach((el) => (el.open = true));
  root.querySelectorAll('[aria-expanded="false"]').forEach((el) => {
    el.setAttribute('aria-expanded', 'true');
    el.removeAttribute('hidden');
  });
  root.querySelectorAll('.topic-section').forEach((sec) => {
    sec.classList.add('active');
    sec.removeAttribute('style');
  });
}

export function normalizeMedia(root: Element, baseUrl: string): void {
  root.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src');
    if (src) {
      try {
        img.src = new URL(src, baseUrl).href;
      } catch {}
    }
    const srcset = img.getAttribute('srcset');
    if (srcset) img.removeAttribute('srcset');

    if (!img.closest('figure')) {
      const figure = img.ownerDocument.createElement('figure');
      figure.className = 'academic-figure';
      img.parentNode?.insertBefore(figure, img);
      figure.appendChild(img);
      const alt = img.getAttribute('alt');
      if (alt && alt.trim().length > 0) {
        const caption = img.ownerDocument.createElement('figcaption');
        caption.className = 'academic-caption';
        caption.textContent = alt.trim();
        figure.appendChild(caption);
      }
    }
  });

  root.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href) {
      try {
        a.href = new URL(href, baseUrl).href;
      } catch {}
    }
  });
}

export function sanitizeDOM(root: Element, baseUrl: string): string {
  const clone = root.cloneNode(true) as Element;
  unwrapIframes(clone);
  autoExpandInteractive(clone);

  clone.querySelectorAll(STRIP_SELECTORS).forEach((el) => el.remove());
  normalizeMedia(clone, baseUrl);

  clone.querySelectorAll('*').forEach((el) => {
    const attrsToRemove: string[] = [];
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i];
      if (
        attr.name.startsWith('on') ||
        attr.name.startsWith('data-tracking') ||
        attr.name === 'style'
      ) {
        attrsToRemove.push(attr.name);
      }
    }
    attrsToRemove.forEach((name) => el.removeAttribute(name));
  });

  return clone.innerHTML.trim();
}

export function extractTargetDOM(doc: Document, baseUrl: string): ExtractedContent {
  let targetNode: Element | null = null;

  for (const selector of CONTAINER_SELECTORS) {
    targetNode = doc.querySelector(selector);
    if (
      targetNode &&
      (targetNode.textContent && targetNode.textContent.trim().length > 50 || targetNode.querySelector('iframe'))
    ) {
      break;
    }
  }

  if (!targetNode) {
    targetNode = doc.body;
  }

  const rawHtml = targetNode.innerHTML;
  const sanitizedHtml = sanitizeDOM(targetNode, baseUrl);

  const TITLE_SELECTORS = [
    '.blockpage-header-title',
    '.page-title',
    'article h1',
    'main h1',
    'main h2',
    'h1',
    'h2'
  ];

  let title = '';
  for (const sel of TITLE_SELECTORS) {
    const el = doc.querySelector(sel);
    const text = el?.textContent?.trim();
    if (text && text.length > 0) {
      title = text;
      break;
    }
  }
  if (!title) {
    title = doc.title ? doc.title.split(' - ')[0].trim() : 'Untitled Section';
  }

  return {
    title,
    rawHtml,
    sanitizedHtml
  };
}
