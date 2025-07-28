import {
  Dj,
  S,
  uc
} from "./chunk-G6K7VW2X.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/chunk-67H74DCK-C-I616jK-ndLlguRH.js
var o = S((s, t) => {
  const r = s.append("rect");
  if (r.attr("x", t.x), r.attr("y", t.y), r.attr("fill", t.fill), r.attr("stroke", t.stroke), r.attr("width", t.width), r.attr("height", t.height), t.name && r.attr("name", t.name), t.rx && r.attr("rx", t.rx), t.ry && r.attr("ry", t.ry), t.attrs !== void 0)
    for (const a in t.attrs)
      r.attr(a, t.attrs[a]);
  return t.class && r.attr("class", t.class), r;
}, "drawRect");
var h = S((s, t) => {
  const r = {
    x: t.startx,
    y: t.starty,
    width: t.stopx - t.startx,
    height: t.stopy - t.starty,
    fill: t.fill,
    stroke: t.stroke,
    class: "rect"
  };
  o(s, r).lower();
}, "drawBackgroundRect");
var d = S((s, t) => {
  const r = t.text.replace(uc, " "), a = s.append("text");
  a.attr("x", t.x), a.attr("y", t.y), a.attr("class", "legend"), a.style("text-anchor", t.anchor), t.class && a.attr("class", t.class);
  const e = a.append("tspan");
  return e.attr("x", t.x + t.textMargin * 2), e.text(r), a;
}, "drawText");
var p = S((s, t, r, a) => {
  const e = s.append("image");
  e.attr("x", t), e.attr("y", r);
  const x = Dj.sanitizeUrl(a);
  e.attr("xlink:href", x);
}, "drawImage");
var y = S((s, t, r, a) => {
  const e = s.append("use");
  e.attr("x", t), e.attr("y", r);
  const x = Dj.sanitizeUrl(a);
  e.attr("xlink:href", `#${x}`);
}, "drawEmbeddedImage");
var g = S(() => ({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fill: "#EDF2AE",
  stroke: "#666",
  anchor: "start",
  rx: 0,
  ry: 0
}), "getNoteRect");
var w = S(() => ({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  "text-anchor": "start",
  style: "#666",
  textMargin: 0,
  rx: 0,
  ry: 0,
  tspan: true
}), "getTextObj");

export {
  o,
  h,
  d,
  p,
  y,
  g,
  w
};
//# sourceMappingURL=chunk-AV67SUOP.js.map
