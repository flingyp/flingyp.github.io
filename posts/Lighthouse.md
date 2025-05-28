# Chrome Lighthouse

Chrome Lighthouse 是一款由 Google 开发的开源自动化工具，用于评估网页的质量和性能，帮助开发者优化用户体验。它集成在 Chrome 开发者工具中，也可以作为命令行工具或 Node.js 模块使用。

Lighthouse 通过一系列测试（称为“审计”）分析网页的多个关键维度，并生成详细的报告，涵盖以下方面：

1. 性能（Performance）​​

- First Contentful Paint (FCP)：首次内容渲染的时间。
- Largest Contentful Paint (LCP)：最大内容渲染的时间。
- Total Blocking Time (TTFB)：总阻塞时间。
- Cumulative Layout Shift (CLS)：累积布局偏移。
- Speed Index：速度指数。

2. ​无障碍访问（Accessibility）​​

- 检查是否符合 WCAG 标准，确保残障用户可访问（如颜色对比度、ARIA 属性）。

3. ​​最佳实践（Best Practices）​​

- 安全配置（HTTPS）、代码规范（避免过时的 API）、浏览器兼容性等。

4. ​SEO（搜索引擎优化）​​

- 元标签、移动端适配、内容可索引性等。

5. ​​渐进式 Web 应用（PWA）​​

- 检查离线支持、Service Worker 注册、安装 prompt 等 PWA 特性。
