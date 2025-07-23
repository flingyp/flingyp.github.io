import {
  dn
} from "./chunk-MMBSNIXP.js";
import {
  g
} from "./chunk-YACWEKXT.js";
import {
  i
} from "./chunk-MZGMHC6D.js";
import "./chunk-N2GOZMTB.js";
import {
  Iy
} from "./chunk-7MGNJ6NO.js";
import "./chunk-5H7L3GAH.js";
import "./chunk-HFG3CCC5.js";
import "./chunk-CSA5CQKO.js";
import {
  AU,
  HR,
  N6,
  Nu,
  PR,
  RR,
  U6,
  WR,
  _,
  fe,
  jR,
  qR,
  sg,
  tZ,
  ut,
  va,
  xrt,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/pieDiagram-NIOCPIFQ-BXQPy3iQ-BjRivpuL.js
function lt(t, a) {
  return a < t ? -1 : a > t ? 1 : a >= t ? 0 : NaN;
}
function st(t) {
  return t;
}
function ot() {
  var t = st, a = lt, l = null, h = va(0), g2 = va(xrt), w = va(0);
  function i2(e) {
    var n, o = (e = AU(e)).length, u, $, m = 0, c = new Array(o), r = new Array(o), x = +h.apply(this, arguments), v = Math.min(xrt, Math.max(-xrt, g2.apply(this, arguments) - x)), f, C = Math.min(Math.abs(v) / o, w.apply(this, arguments)), D = C * (v < 0 ? -1 : 1), d;
    for (n = 0; n < o; ++n)
      (d = r[c[n] = n] = +t(e[n], n, e)) > 0 && (m += d);
    for (a != null ? c.sort(function(y, A) {
      return a(r[y], r[A]);
    }) : l != null && c.sort(function(y, A) {
      return l(e[y], e[A]);
    }), n = 0, $ = m ? (v - o * D) / m : 0; n < o; ++n, x = f)
      u = c[n], d = r[u], f = x + (d > 0 ? d * $ : 0) + D, r[u] = {
        data: e[u],
        index: n,
        value: d,
        startAngle: x,
        endAngle: f,
        padAngle: C
      };
    return r;
  }
  return i2.value = function(e) {
    return arguments.length ? (t = typeof e == "function" ? e : va(+e), i2) : t;
  }, i2.sortValues = function(e) {
    return arguments.length ? (a = e, l = null, i2) : a;
  }, i2.sort = function(e) {
    return arguments.length ? (l = e, a = null, i2) : l;
  }, i2.startAngle = function(e) {
    return arguments.length ? (h = typeof e == "function" ? e : va(+e), i2) : h;
  }, i2.endAngle = function(e) {
    return arguments.length ? (g2 = typeof e == "function" ? e : va(+e), i2) : g2;
  }, i2.padAngle = function(e) {
    return arguments.length ? (w = typeof e == "function" ? e : va(+e), i2) : w;
  }, i2;
}
var ct = N6.pie;
var N = {
  sections: /* @__PURE__ */ new Map(),
  showData: false
};
var M = N.sections;
var R = N.showData;
var pt = structuredClone(ct);
var ut2 = _(() => structuredClone(pt), "getConfig");
var dt = _(() => {
  M = /* @__PURE__ */ new Map(), R = N.showData, zR();
}, "clear");
var gt = _(({ label: t, value: a }) => {
  M.has(t) || (M.set(t, a), ut.debug(`added new section: ${t}, with value: ${a}`));
}, "addSection");
var ft = _(() => M, "getSections");
var ht = _((t) => {
  R = t;
}, "setShowData");
var mt = _(() => R, "getShowData");
var L = {
  getConfig: ut2,
  clear: dt,
  setDiagramTitle: WR,
  getDiagramTitle: HR,
  setAccTitle: qR,
  getAccTitle: RR,
  setAccDescription: PR,
  getAccDescription: jR,
  addSection: gt,
  getSections: ft,
  setShowData: ht,
  getShowData: mt
};
var xt = _((t, a) => {
  i(t, a), a.setShowData(t.showData), t.sections.map(a.addSection);
}, "populateDb");
var yt = {
  parse: _(async (t) => {
    const a = await Iy("pie", t);
    ut.debug(a), xt(a, L);
  }, "parse")
};
var St = _((t) => `
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`, "getStyles");
var wt = St;
var $t = _((t) => {
  const a = [...t.entries()].map((l) => ({
    label: l[0],
    value: l[1]
  })).sort((l, h) => h.value - l.value);
  return ot().value(
    (l) => l.value
  )(a);
}, "createPieArcs");
var vt = _((t, a, l, h) => {
  ut.debug(`rendering pie chart
` + t);
  const g2 = h.db, w = fe(), i2 = sg(g2.getConfig(), w.pie), e = 40, n = 18, o = 4, u = 450, $ = u, m = tZ(a), c = m.append("g");
  c.attr("transform", "translate(" + $ / 2 + "," + u / 2 + ")");
  const { themeVariables: r } = w;
  let [x] = Nu(r.pieOuterStrokeWidth);
  x ?? (x = 2);
  const v = i2.textPosition, f = Math.min($, u) / 2 - e, C = dn().innerRadius(0).outerRadius(f), D = dn().innerRadius(f * v).outerRadius(f * v);
  c.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + x / 2).attr("class", "pieOuterCircle");
  const d = g2.getSections(), y = $t(d), A = [
    r.pie1,
    r.pie2,
    r.pie3,
    r.pie4,
    r.pie5,
    r.pie6,
    r.pie7,
    r.pie8,
    r.pie9,
    r.pie10,
    r.pie11,
    r.pie12
  ], T = g(A);
  c.selectAll("mySlices").data(y).enter().append("path").attr("d", C).attr("fill", (s) => T(s.data.label)).attr("class", "pieCircle");
  let W = 0;
  d.forEach((s) => {
    W += s;
  }), c.selectAll("mySlices").data(y).enter().append("text").text((s) => (s.data.value / W * 100).toFixed(0) + "%").attr("transform", (s) => "translate(" + D.centroid(s) + ")").style("text-anchor", "middle").attr("class", "slice"), c.append("text").text(g2.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  const O = c.selectAll(".legend").data(T.domain()).enter().append("g").attr("class", "legend").attr("transform", (s, b) => {
    const k = n + o, I = k * T.domain().length / 2, P = 12 * n, V = b * k - I;
    return "translate(" + P + "," + V + ")";
  });
  O.append("rect").attr("width", n).attr("height", n).style("fill", T).style("stroke", T), O.data(y).append("text").attr("x", n + o).attr("y", n - o).text((s) => {
    const { label: b, value: k } = s.data;
    return g2.getShowData() ? `${b} [${k}]` : b;
  });
  const _2 = Math.max(
    ...O.selectAll("text").nodes().map((s) => (s == null ? void 0 : s.getBoundingClientRect().width) ?? 0)
  ), F = $ + e + n + o + _2;
  m.attr("viewBox", `0 0 ${F} ${u}`), U6(m, u, F, i2.useMaxWidth);
}, "draw");
var At = { draw: vt };
var Mt = {
  parser: yt,
  db: L,
  renderer: At,
  styles: wt
};
export {
  Mt as diagram
};
//# sourceMappingURL=pieDiagram-NIOCPIFQ-BXQPy3iQ-BjRivpuL-W2KPMLSG.js.map
