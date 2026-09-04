export interface QueuedSection {
  id: string;
  sourceUrl: string;
  title: string;
  timestamp: number;
  rawHtml: string;
  sanitizedHtml: string;
  orderIndex: number;
}

export interface CompilerOptions {
  layout: 'single-column' | 'two-column';
  fontFamily: 'times' | 'computer-modern' | 'garamond';
  fontSize: '10pt' | '11pt' | '12pt';
  includeHeaderFooter: boolean;
  paperSize: 'a4' | 'letter';
}

export interface ExtensionMessage {
  type: 'QUEUE_SECTION' | 'GET_QUEUE' | 'REMOVE_SECTION' | 'REORDER_QUEUE' | 'UPDATE_SECTION_TITLE' | 'CLEAR_QUEUE' | 'COMPILE_PDF';
  payload?: any;
}

export interface LegalConsentRecord {
  agreed: boolean;
  timestamp: number;
}
