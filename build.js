import { build } from 'vite';
import { resolve } from 'path';

async function runBuild() {
  // 1. Build main UI and background service worker
  console.log('Building extension UI and service worker...');
  await build({
    configFile: false,
    publicDir: 'public',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          sidepanel: resolve(import.meta.dirname, 'src/sidepanel/sidepanel.html'),
          compiler: resolve(import.meta.dirname, 'src/compiler/compiler.html'),
          onboarding: resolve(import.meta.dirname, 'src/onboarding/onboarding.html'),
          background: resolve(import.meta.dirname, 'src/background/serviceWorker.ts')
        },
        output: {
          entryFileNames: (info) => {
            if (info.name === 'background') return 'background.js';
            return 'assets/[name]-[hash].js';
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
    }
  });

  // 2. Build content script as a standalone IIFE
  console.log('Building standalone content script (IIFE)...');
  await build({
    configFile: false,
    publicDir: false,
    build: {
      outDir: 'dist',
      emptyOutDir: false,
      lib: {
        entry: resolve(import.meta.dirname, 'src/content/contentScript.ts'),
        name: 'ContentScript',
        formats: ['iife'],
        fileName: () => 'contentScript.js'
      }
    }
  });

  console.log('Build complete.');
}

runBuild().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
