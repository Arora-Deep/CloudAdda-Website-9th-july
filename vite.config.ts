import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

const routesToPrerender = [
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/support",
  "/trainer-adda",
  "/virtual-training-labs",
  "/guides",
  "/blog/training-lab-costs",
  "/blog/call-center-case-study",
  "/blog/daas-shift-2025",
  "/playbook/zero-to-live-lab",
  "/playbook/scaling-1000-students",
  "/playbook/virtual-lab-checklist",
  "/case-study/all",
  "/privacy-policy",
  "/terms-of-service",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && vitePrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: routesToPrerender,
      renderer: {
        renderAfterTime: 3000,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}));
