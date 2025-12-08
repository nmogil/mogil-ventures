import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress files > 1KB
    }),
    // Brotli compression (better compression ratio)
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',

    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Manual chunk splitting strategy
        manualChunks: {
          // Core React vendor bundle
          'vendor-react': [
            'react',
            'react-dom',
            'react-router-dom',
          ],

          // 3D/WebGL libraries - only loaded when needed
          'vendor-3d': [
            'three',
            '@react-three/fiber',
            '@react-three/postprocessing',
            'postprocessing',
          ],

          // OGL for CircularGallery
          'vendor-ogl': ['ogl'],

          // Animation library
          'vendor-animation': ['framer-motion'],

          // Markdown rendering (for blog)
          'vendor-markdown': [
            'react-markdown',
            'remark-gfm',
          ],

          // UI components
          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            'lucide-react',
            'clsx',
            'tailwind-merge',
          ],

          // Cal.com embed
          'vendor-cal': ['@calcom/embed-react'],
        },

        // Customize chunk file names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId || '';
          if (facadeModuleId.includes('pages/')) {
            return 'assets/pages/[name]-[hash].js';
          }
          if (facadeModuleId.includes('components/')) {
            return 'assets/components/[name]-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },

        // Asset file names
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },

        // Entry file names
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Use esbuild for faster minification (default in Vite)
    minify: 'esbuild',

    // Report compressed sizes
    reportCompressedSize: true,
  },
})
