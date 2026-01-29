import { resolve } from 'node:path';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.{spec,test}.{ts,tsx}'],
    reporters: ['verbose'],
    environment: 'happy-dom',
    root: './',
    globals: true,
    restoreMocks: true,
    clearMocks: true,
    testTimeout: 10000,
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
    coverage: {
      reportsDirectory: './coverage',
      reporter: ['text', 'html', 'lcov', 'cobertura'],
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: [
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/*.e2e-spec.ts',
        '**/types/**',
        '**/*.d.ts',
        '**/mocks/**',
      ],
      // Metas de cobertura dos testes
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
  plugins: [tsConfigPaths(), react()],
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
    },
  },
});
