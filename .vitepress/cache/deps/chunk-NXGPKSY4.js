import {
  U6,
  _,
  ut
} from "./chunk-XXGV6SHG.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/chunk-SKB7J2MH-ikoXYwi5-CjfobAwT.js
var $ = _((t, i, e, o) => {
  t.attr("class", e);
  const { width: h, height: r, x: a, y: s } = w(t, i);
  U6(t, r, h, o);
  const n = x(a, s, h, r, i);
  t.attr("viewBox", n), ut.debug(`viewBox configured: ${n} with padding: ${i}`);
}, "setupViewPortForSVG");
var w = _((t, i) => {
  var _a;
  const e = ((_a = t.node()) == null ? void 0 : _a.getBBox()) || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: e.width + i * 2,
    height: e.height + i * 2,
    x: e.x,
    y: e.y
  };
}, "calculateDimensionsWithPadding");
var x = _((t, i, e, o, h) => `${t - h} ${i - h} ${e} ${o}`, "createViewBox");

export {
  $
};
//# sourceMappingURL=chunk-NXGPKSY4.js.map
