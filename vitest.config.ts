import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: "./vitest.setup.ts", // ✅ vitest 실행 시 `jest-dom`을 자동으로 로드하도록 설정
    environment: "jsdom", // ✅ DOM 환경을 사용할 수 있도록 설정
  },
});