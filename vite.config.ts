import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    // Vitepress 构建失败：https://github.com/tusen-ai/naive-ui/issues/4641
    noExternal: ['naive-ui'],
  },
});
