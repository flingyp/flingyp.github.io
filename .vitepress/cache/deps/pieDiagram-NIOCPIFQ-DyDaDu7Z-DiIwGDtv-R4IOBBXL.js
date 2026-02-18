import {
  dn
} from "./chunk-Y2HUOGTM.js";
import {
  g
} from "./chunk-DRVYDHIA.js";
import "./chunk-EL5ATJGH.js";
import {
  i
} from "./chunk-YYAHTIX3.js";
import {
  Iy
} from "./chunk-N2GLHQJ5.js";
import "./chunk-RJOY2GYM.js";
import "./chunk-YNSPFRZC.js";
import "./chunk-YWH6J5SK.js";
import {
  $o,
  HH,
  IH,
  Mv,
  Not,
  PH,
  QQ,
  Qg,
  RH,
  S,
  SX,
  jH,
  me,
  od,
  qH,
  ut,
  wv,
  zH
} from "./chunk-FMIKWIBS.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.2.1_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/pieDiagram-NIOCPIFQ-DyDaDu7Z-DiIwGDtv.js
function lt(t, a) {
  return a < t ? -1 : a > t ? 1 : a >= t ? 0 : NaN;
}
function st(t) {
  return t;
}
function ot() {
  var t = st, a = lt, l = null, h = $o(0), g2 = $o(Not), S2 = $o(0);
  function i2(e) {
    var n, o = (e = SX(e)).length, u, $, m = 0, c = new Array(o), r = new Array(o), x = +h.apply(this, arguments), b = Math.min(Not, Math.max(-Not, g2.apply(this, arguments) - x)), f, D = Math.min(Math.abs(b) / o, S2.apply(this, arguments)), C = D * (b < 0 ? -1 : 1), d;
    for (n = 0; n < o; ++n)
      (d = r[c[n] = n] = +t(e[n], n, e)) > 0 && (m += d);
    for (a != null ? c.sort(function(y, v) {
      return a(r[y], r[v]);
    }) : l != null && c.sort(function(y, v) {
      return l(e[y], e[v]);
    }), n = 0, $ = m ? (b - o * C) / m : 0; n < o; ++n, x = f)
      u = c[n], d = r[u], f = x + (d > 0 ? d * $ : 0) + C, r[u] = {
        data: e[u],
        index: n,
        value: d,
        startAngle: x,
        endAngle: f,
        padAngle: D
      };
    return r;
  }
  return i2.value = function(e) {
    return arguments.length ? (t = typeof e == "function" ? e : $o(+e), i2) : t;
  }, i2.sortValues = function(e) {
    return arguments.length ? (a = e, l = null, i2) : a;
  }, i2.sort = function(e) {
    return arguments.length ? (l = e, a = null, i2) : l;
  }, i2.startAngle = function(e) {
    return arguments.length ? (h = typeof e == "function" ? e : $o(+e), i2) : h;
  }, i2.endAngle = function(e) {
    return arguments.length ? (g2 = typeof e == "function" ? e : $o(+e), i2) : g2;
  }, i2.padAngle = function(e) {
    return arguments.length ? (S2 = typeof e == "function" ? e : $o(+e), i2) : S2;
  }, i2;
}
var ct = wv.pie;
var F = {
  sections: /* @__PURE__ */ new Map(),
  showData: false
};
var M = F.sections;
var N = F.showData;
var pt = structuredClone(ct);
var ut2 = S(() => structuredClone(pt), "getConfig");
var dt = S(() => {
  M = /* @__PURE__ */ new Map(), N = F.showData, IH();
}, "clear");
var gt = S(({ label: t, value: a }) => {
  M.has(t) || (M.set(t, a), ut.debug(`added new section: ${t}, with value: ${a}`));
}, "addSection");
var ft = S(() => M, "getSections");
var ht = S((t) => {
  N = t;
}, "setShowData");
var mt = S(() => N, "getShowData");
var P = {
  getConfig: ut2,
  clear: dt,
  setDiagramTitle: jH,
  getDiagramTitle: HH,
  setAccTitle: zH,
  getAccTitle: qH,
  setAccDescription: RH,
  getAccDescription: PH,
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
    ut.debug(a), xt(a, P);
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
var bt = S((t, a, l, h) => {
  ut.debug(`rendering pie chart
` + t);
  const g2 = h.db, S2 = me(), i2 = Qg(g2.getConfig(), S2.pie), e = 40, n = 18, o = 4, u = 450, $ = u, m = QQ(a), c = m.append("g");
  c.attr("transform", "translate(" + $ / 2 + "," + u / 2 + ")");
  const { themeVariables: r } = S2;
  let [x] = od(r.pieOuterStrokeWidth);
  x ?? (x = 2);
  const b = i2.textPosition, f = Math.min($, u) / 2 - e, D = dn().innerRadius(0).outerRadius(f), C = dn().innerRadius(f * b).outerRadius(f * b);
  c.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + x / 2).attr("class", "pieOuterCircle");
  const d = g2.getSections(), y = $t(d), v = [
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
  ], A = g(v);
  c.selectAll("mySlices").data(y).enter().append("path").attr("d", D).attr("fill", (s) => A(s.data.label)).attr("class", "pieCircle");
  let W = 0;
  d.forEach((s) => {
    W += s;
  }), c.selectAll("mySlices").data(y).enter().append("text").text((s) => (s.data.value / W * 100).toFixed(0) + "%").attr("transform", (s) => "translate(" + C.centroid(s) + ")").style("text-anchor", "middle").attr("class", "slice"), c.append("text").text(g2.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  const O = c.selectAll(".legend").data(A.domain()).enter().append("g").attr("class", "legend").attr("transform", (s, T) => {
    const k = n + o, L = k * A.domain().length / 2, G = 12 * n, V = T * k - L;
    return "translate(" + G + "," + V + ")";
  });
  O.append("rect").attr("width", n).attr("height", n).style("fill", A).style("stroke", A), O.data(y).append("text").attr("x", n + o).attr("y", n - o).text((s) => {
    const { label: T, value: k } = s.data;
    return g2.getShowData() ? `${T} [${k}]` : T;
  });
  const I = Math.max(
    ...O.selectAll("text").nodes().map((s) => (s == null ? void 0 : s.getBoundingClientRect().width) ?? 0)
  ), B = $ + e + n + o + I;
  m.attr("viewBox", `0 0 ${B} ${u}`), Mv(m, u, B, i2.useMaxWidth);
}, "draw");
var vt = { draw: bt };
var Mt = {
  parser: yt,
  db: P,
  renderer: vt,
  styles: St
};
export {
  Mt as diagram
};
//# sourceMappingURL=pieDiagram-NIOCPIFQ-DyDaDu7Z-DiIwGDtv-R4IOBBXL.js.map
