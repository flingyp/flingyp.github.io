import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8888,
    https: false,
    open: false,
  },
  ssr: {
    // Vitepress 构建失败：https://github.com/tusen-ai/naive-ui/issues/4641
    noExternal: ['naive-ui'],
  },
});
