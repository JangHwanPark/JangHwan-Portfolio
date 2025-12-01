/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],

  // test.globals 옵션은 테스트 파일의 전역 함수를 import 없이 사용할 수 있게 합니다.
  // test.environment 옵션은 테스트 환경을 지정합니다.
  // test.setupFiles는 테스트 전에 실행될 파일을 지정합니다.
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
