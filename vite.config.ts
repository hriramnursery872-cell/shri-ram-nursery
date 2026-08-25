import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const rawPort = process.env.PORT ?? '4173';
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? '/';

// Resolve project root reliably in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname);
const outputRoot = path.resolve(projectRoot, 'dist');

const pages = ['index', 'dashboard', 'plant', 'orders', 'admin'];

const staticFiles = [
  'manifest.json',
  'service-worker.js',
  'css/style.css',
  'css/dashboard.css',
  'css/admin.css',
  'js/auth.js',
  'js/dashboard.js',
  'js/plants.js',
  'js/admin.js',
  'js/stock.js',
  'js/ledger.js',
  'js/language.js',
  'data/plants.json',
  'data/stock.json',
  'data/orders.json',
  'data/ledger.json',
  'data/settings.json',
  'assets/icon.svg',
  'assets/logo.png',
  'assets/upi-qr.png',
];

function preserveStaticFoundation() {
  return {
    name: 'preserve-static-foundation',
    closeBundle() {
      for (const file of staticFiles) {
        const source = path.join(projectRoot, file);
        const destination = path.join(outputRoot, file);
        try {
          if (fs.existsSync(source)) {
            fs.mkdirSync(path.dirname(destination), { recursive: true });
            fs.copyFileSync(source, destination);
          }
        } catch (err) {
          // don't fail the build for missing optional assets
          // but log for debugging in dev environments
          // eslint-disable-next-line no-console
          console.warn('preserve-static-foundation failed copying', file, err && err.message);
        }
      }
    },
  };
}

export default defineConfig({
  base: basePath,
  root: projectRoot,
  publicDir: path.resolve(projectRoot, 'public'),
  plugins: [preserveStaticFoundation()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, path.resolve(projectRoot, `${page}.html`)])
      ),
    },
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
