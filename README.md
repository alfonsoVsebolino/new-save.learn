<p align="center">
  <img src="src/assets/logos/newSave.png" alt="newSave logo" width="120" />
</p>

# newSave: OpenLearning Academic PDF Exporter

A Chrome Manifest V3 extension that extracts, normalizes, and concatenates fragmented OpenLearning course modules into a unified, study-ready academic PDF.

---

## 🎯 Use Case

OpenLearning courses split lessons across multiple sub-topics, dynamic tabs, and embedded iframes, making standard browser printing (`Ctrl + P`) fragmented and cluttered with navigation controls, sidebars, and hidden content.

This extension provides an academic publishing workflow:
- Browse course sections and build a compilation queue via a persistent Chrome Side Panel.
- Automatically unwrap embedded interactive widgets and hidden topics into continuous academic flow.
- Compile into standardized Single-Column (Report) or Two-Column (IEEE/ACM) layouts with running headers and page numbers.

---

## ⚡ Key Features

- **Multi-Topic DOM Unwrapping**:
  - Automatically extracts lessons from embedded `<iframe srcdoc="...">` widgets (`HtmlSnippetWidget`).
  - Auto-expands hidden `.topic-section` modules, preserving all sequential sub-topics in a single pass.
- **Academic Sanitization & Layout**:
  - Strips non-printable widgets: interactive pagination (`#next-btn`, `#prev-btn`), LMS sidebars, quizzes, comments, and tracking scripts.
  - Preserves MathJax LaTeX, MathML, and KaTeX equations.
  - Normalizes inline graphics into centered `<figure>` and `<figcaption>` elements with absolute image URLs.
  - Continuous flow layout: sections are linked sequentially with academic section markers (`§ 1. Section Title`), eliminating orphan blank pages.
- **Persistent Side Panel UI**:
  - Browse across lessons without losing queue context.
  - Drag / Up / Down reordering and inline section title renaming.
  - Live feedback banner with byte-size confirmation and error handling.
- **Reactive Compiler & Print Integration**:
  - Real-time synchronization via `chrome.storage.local` across open tabs.
  - Instant toggle between Single-Column (Report) and Two-Column (IEEE/ACM) styling.
  - Built-in print preview triggering vector-crisp output via `window.print()`.

---

## 📦 Installation Guide

### Prerequisites
- Google Chrome (or Chromium-based browser: Brave, Edge) version 116+ (requires Manifest V3 Side Panel support).
- Node.js 18+ and npm (only required if building from source).

### Option A: Quick Install (Pre-built Release)

1. Download the latest `newSave-v*.zip` from [Releases](https://github.com/alfonsoVsebolino/new-save.learn/releases).
2. Extract the ZIP archive into a directory.
3. Open Google Chrome and navigate to `chrome://extensions/`.
4. Toggle **Developer mode** on (top-right switch).
5. Click **Load unpacked** (top-left button) and select the extracted directory.

### Option B: Build from Source

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/alfonsoVsebolino/new-save.learn.git
   cd new-save.learn
   ```

2. **Install Dependencies & Build**:
   ```bash
   npm install
   npm run build
   ```
   *This compiles all source modules, performs TypeScript typechecks, and outputs production assets into `dist/`.*

3. **Load in Chrome**:
   1. Open Google Chrome and navigate to `chrome://extensions/`.
   2. Toggle **Developer mode** on (top-right switch).
   3. Click **Load unpacked** (top-left button).
   4. Select the `dist/` folder inside the cloned project directory.

---

## 🚀 How to Use

1. **Open the Side Panel**:
   - Navigate to any OpenLearning course page (e.g. Set Notation, Automata Theory).
   - Click the extension icon in your Chrome toolbar to open the **Academic PDF Queue** Side Panel.
2. **Add Pages to Queue**:
   - Click **➕ Add Current Page** in the Side Panel.
   - The extension unwraps the module, extracts all sub-topics, and displays a green confirmation banner:
     `✓ Added: "Set Notation" (29.0 KB)`.
   - Reorder sections or edit titles directly inside the panel as needed.
3. **Compile and Export**:
   - Select your preferred layout: **Single Column (Report)** or **Two Column (IEEE/ACM)**.
   - Click **⚡ Compile PDF**.
   - A compiler tab opens with all queued topics combined sequentially.
   - Click **🖨 Print / Save as PDF** (or press `Ctrl + P`) and select **Save as PDF** as destination.

---

## 🛠 Tech Stack

- **Platform**: Chrome Extensions Manifest V3 (`sidePanel`, `storage`, `scripting`, `activeTab`).
- **Language**: TypeScript + Modern DOM APIs.
- **Bundler**: Vite + Rollup (Multi-target module worker + standalone IIFE content script).
- **Styling**: CSS Paged Media (`@page`, running headers/footers, column layouts).
- **Testing**: Vitest + JSDOM test suite.

---

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

People are free to use, modify, and/or distribute the program's source code as per the MIT License provision.

---

## ⚖️ Legal & Privacy Policies

[![Terms of Service](https://img.shields.io/badge/Terms-ToS-blue.svg)](docs/legal/terms-of-service.md)
[![Privacy Policy](https://img.shields.io/badge/Privacy-Zero%20Data%20Collection-green.svg)](docs/legal/privacy-policy.md)

Use of **newSave** is governed by our legal policies:

- **[Terms of Service](docs/legal/terms-of-service.md)**:
  - **Independent Operation**: Not affiliated with, sponsored by, or endorsed by any academic institution or LMS provider.
  - **Authorized Access Only**: Intended solely for enrolled students with authorized access to their own course modules. Does not bypass authentication or DRM.
  - **Personal & Non-Commercial Use**: For offline study and personal review only. Redistribution or uploading to academic file-sharing platforms is strictly prohibited.
  - **As-Is Disclaimer**: Provided without warranties; users are responsible for compliance with institutional acceptable use policies.

- **[Privacy Policy](docs/legal/privacy-policy.md)**:
  - **Zero Telemetry**: No collection of names, student IDs, IP addresses, credentials, or course content.
  - **100% Client-Side Execution**: All DOM unwrapping, sanitization, and PDF rendering occur locally in memory; no data is ever transmitted to remote servers.
  - **Permissions Scoping**: `activeTab` and `scripting` are used solely to extract learning content from active tabs upon user command.

