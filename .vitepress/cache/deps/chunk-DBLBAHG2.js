import {
  S,
  hw,
  ut
} from "./chunk-G6K7VW2X.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/chunk-SKB7J2MH-B8LlLTQ8-DQdYHAt-.js
var $ = S((t, i, e, o) => {
  t.attr("class", e);
  const { width: h, height: r, x: a, y: s } = w(t, i);
  hw(t, r, h, o);
  const n = x(a, s, h, r, i);
  t.attr("viewBox", n), ut.debug(`viewBox configured: ${n} with padding: ${i}`);
}, "setupViewPortForSVG");
var w = S((t, i) => {
  var _a;
  const e = ((_a = t.node()) == null ? void 0 : _a.getBBox()) || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: e.width + i * 2,
    height: e.height + i * 2,
    x: e.x,
    y: e.y
  };
}, "calculateDimensionsWithPadding");
var x = S((t, i, e, o, h) => `${t - h} ${i - h} ${e} ${o}`, "createViewBox");

export {
  $
};
//# sourceMappingURL=chunk-DBLBAHG2.js.map
