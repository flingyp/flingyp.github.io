import {
  dn
} from "./chunk-PHHNTA27.js";
import {
  g
} from "./chunk-AJ275QFQ.js";
import "./chunk-MWG22XKG.js";
import {
  i
} from "./chunk-T7N35FBF.js";
import {
  Iy
} from "./chunk-RIYG2OFT.js";
import "./chunk-TB5PDJK3.js";
import "./chunk-ROF5UXLT.js";
import "./chunk-F27AYW2L.js";
import {
  QU,
  R0,
  S,
  TZ,
  To,
  dP,
  fP,
  gP,
  hP,
  hw,
  mP,
  me,
  pP,
  pg,
  pnt,
  tw,
  uP,
  ut
} from "./chunk-G6K7VW2X.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/pieDiagram-NIOCPIFQ-DWO8ZxGq-CGKGI6es.js
function lt(t, a) {
  return a < t ? -1 : a > t ? 1 : a >= t ? 0 : NaN;
}
function st(t) {
  return t;
}
function ot() {
  var t = st, a = lt, l = null, h = To(0), g2 = To(pnt), S2 = To(0);
  function i2(e) {
    var n, o = (e = QU(e)).length, u, $, m = 0, c = new Array(o), r = new Array(o), x = +h.apply(this, arguments), A = Math.min(pnt, Math.max(-pnt, g2.apply(this, arguments) - x)), f, v = Math.min(Math.abs(A) / o, S2.apply(this, arguments)), C = v * (A < 0 ? -1 : 1), d;
    for (n = 0; n < o; ++n)
      (d = r[c[n] = n] = +t(e[n], n, e)) > 0 && (m += d);
    for (a != null ? c.sort(function(y, D) {
      return a(r[y], r[D]);
    }) : l != null && c.sort(function(y, D) {
      return l(e[y], e[D]);
    }), n = 0, $ = m ? (A - o * C) / m : 0; n < o; ++n, x = f)
      u = c[n], d = r[u], f = x + (d > 0 ? d * $ : 0) + C, r[u] = {
        data: e[u],
        index: n,
        value: d,
        startAngle: x,
        endAngle: f,
        padAngle: v
      };
    return r;
  }
  return i2.value = function(e) {
    return arguments.length ? (t = typeof e == "function" ? e : To(+e), i2) : t;
  }, i2.sortValues = function(e) {
    return arguments.length ? (a = e, l = null, i2) : a;
  }, i2.sort = function(e) {
    return arguments.length ? (l = e, a = null, i2) : l;
  }, i2.startAngle = function(e) {
    return arguments.length ? (h = typeof e == "function" ? e : To(+e), i2) : h;
  }, i2.endAngle = function(e) {
    return arguments.length ? (g2 = typeof e == "function" ? e : To(+e), i2) : g2;
  }, i2.padAngle = function(e) {
    return arguments.length ? (S2 = typeof e == "function" ? e : To(+e), i2) : S2;
  }, i2;
}
var ct = tw.pie;
var F = {
  sections: /* @__PURE__ */ new Map(),
  showData: false
};
var M = F.sections;
var N = F.showData;
var pt = structuredClone(ct);
var ut2 = S(() => structuredClone(pt), "getConfig");
var dt = S(() => {
  M = /* @__PURE__ */ new Map(), N = F.showData, hP();
}, "clear");
var gt = S(({ label: t, value: a }) => {
  M.has(t) || (M.set(t, a), ut.debug(`added new section: ${t}, with value: ${a}`));
}, "addSection");
var ft = S(() => M, "getSections");
var ht = S((t) => {
  N = t;
}, "setShowData");
var mt = S(() => N, "getShowData");
var E = {
  getConfig: ut2,
  clear: dt,
  setDiagramTitle: mP,
  getDiagramTitle: gP,
  setAccTitle: uP,
  getAccTitle: dP,
  setAccDescription: pP,
  getAccDescription: fP,
  addSection: gt,
  getSections: ft,
  setShowData: ht,
  getShowData: mt
};
var xt = S((t, a) => {
  i(t, a), a.setShowData(t.showData), t.sections.map(a.addSection);
}, "populateDb");
var yt = {
  parse: S(async (t) => {
    const a = await Iy("pie", t);
    ut.debug(a), xt(a, E);
  }, "parse")
};
var wt = S((t) => `
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
var St = wt;
var $t = S((t) => {
  const a = [...t.entries()].map((l) => ({
    label: l[0],
    value: l[1]
  })).sort((l, h) => h.value - l.value);
  return ot().value(
    (l) => l.value
  )(a);
}, "createPieArcs");
var At = S((t, a, l, h) => {
  ut.debug(`rendering pie chart
` + t);
  const g2 = h.db, S2 = me(), i2 = pg(g2.getConfig(), S2.pie), e = 40, n = 18, o = 4, u = 450, $ = u, m = TZ(a), c = m.append("g");
  c.attr("transform", "translate(" + $ / 2 + "," + u / 2 + ")");
  const { themeVariables: r } = S2;
  let [x] = R0(r.pieOuterStrokeWidth);
  x ?? (x = 2);
  const A = i2.textPosition, f = Math.min($, u) / 2 - e, v = dn().innerRadius(0).outerRadius(f), C = dn().innerRadius(f * A).outerRadius(f * A);
  c.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + x / 2).attr("class", "pieOuterCircle");
  const d = g2.getSections(), y = $t(d), D = [
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
  ], T = g(D);
  c.selectAll("mySlices").data(y).enter().append("path").attr("d", v).attr("fill", (s) => T(s.data.label)).attr("class", "pieCircle");
  let V = 0;
  d.forEach((s) => {
    V += s;
  }), c.selectAll("mySlices").data(y).enter().append("text").text((s) => (s.data.value / V * 100).toFixed(0) + "%").attr("transform", (s) => "translate(" + C.centroid(s) + ")").style("text-anchor", "middle").attr("class", "slice"), c.append("text").text(g2.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  const O = c.selectAll(".legend").data(T.domain()).enter().append("g").attr("class", "legend").attr("transform", (s, b) => {
    const k = n + o, K = k * T.domain().length / 2, L = 12 * n, P = b * k - K;
    return "translate(" + L + "," + P + ")";
  });
  O.append("rect").attr("width", n).attr("height", n).style("fill", T).style("stroke", T), O.data(y).append("text").attr("x", n + o).attr("y", n - o).text((s) => {
    const { label: b, value: k } = s.data;
    return g2.getShowData() ? `${b} [${k}]` : b;
  });
  const G = Math.max(
    ...O.selectAll("text").nodes().map((s) => (s == null ? void 0 : s.getBoundingClientRect().width) ?? 0)
  ), W = $ + e + n + o + G;
  m.attr("viewBox", `0 0 ${W} ${u}`), hw(m, u, W, i2.useMaxWidth);
}, "draw");
var Dt = { draw: At };
var Mt = {
  parser: yt,
  db: E,
  renderer: Dt,
  styles: St
};
export {
  Mt as diagram
};
//# sourceMappingURL=pieDiagram-NIOCPIFQ-DWO8ZxGq-CGKGI6es-AJNGIDQA.js.map
