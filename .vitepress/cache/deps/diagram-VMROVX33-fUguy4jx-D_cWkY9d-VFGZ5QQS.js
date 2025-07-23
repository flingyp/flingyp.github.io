import {
  g
} from "./chunk-YACWEKXT.js";
import {
  i
} from "./chunk-MZGMHC6D.js";
import {
  tt
} from "./chunk-SVWAV6MX.js";
import "./chunk-N2GOZMTB.js";
import {
  $
} from "./chunk-NXGPKSY4.js";
import {
  Iy
} from "./chunk-7MGNJ6NO.js";
import "./chunk-5H7L3GAH.js";
import "./chunk-HFG3CCC5.js";
import "./chunk-CSA5CQKO.js";
import {
  $7,
  Ft,
  HR,
  Hr,
  N6,
  PR,
  RR,
  U6,
  WR,
  _,
  ae,
  jR,
  qR,
  sg,
  tZ,
  ut,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/diagram-VMROVX33-fUguy4jx-D_cWkY9d.js
function be(t2) {
  var a = 0, n = t2.children, r = n && n.length;
  if (!r) a = 1;
  else for (; --r >= 0; ) a += n[r].value;
  t2.value = a;
}
function $e() {
  return this.eachAfter(be);
}
function we(t2, a) {
  let n = -1;
  for (const r of this)
    t2.call(a, r, ++n, this);
  return this;
}
function Le(t2, a) {
  for (var n = this, r = [n], o, s, d = -1; n = r.pop(); )
    if (t2.call(a, n, ++d, this), o = n.children)
      for (s = o.length - 1; s >= 0; --s)
        r.push(o[s]);
  return this;
}
function Te(t2, a) {
  for (var n = this, r = [n], o = [], s, d, h, f = -1; n = r.pop(); )
    if (o.push(n), s = n.children)
      for (d = 0, h = s.length; d < h; ++d)
        r.push(s[d]);
  for (; n = o.pop(); )
    t2.call(a, n, ++f, this);
  return this;
}
function ke(t2, a) {
  let n = -1;
  for (const r of this)
    if (t2.call(a, r, ++n, this))
      return r;
}
function Me(t2) {
  return this.eachAfter(function(a) {
    for (var n = +t2(a.data) || 0, r = a.children, o = r && r.length; --o >= 0; ) n += r[o].value;
    a.value = n;
  });
}
function ze(t2) {
  return this.eachBefore(function(a) {
    a.children && a.children.sort(t2);
  });
}
function Fe(t2) {
  for (var a = this, n = Ae(a, t2), r = [a]; a !== n; )
    a = a.parent, r.push(a);
  for (var o = r.length; t2 !== n; )
    r.splice(o, 0, t2), t2 = t2.parent;
  return r;
}
function Ae(t2, a) {
  if (t2 === a) return t2;
  var n = t2.ancestors(), r = a.ancestors(), o = null;
  for (t2 = n.pop(), a = r.pop(); t2 === a; )
    o = t2, t2 = n.pop(), a = r.pop();
  return o;
}
function Be() {
  for (var t2 = this, a = [t2]; t2 = t2.parent; )
    a.push(t2);
  return a;
}
function Pe() {
  return Array.from(this);
}
function Ne() {
  var t2 = [];
  return this.eachBefore(function(a) {
    a.children || t2.push(a);
  }), t2;
}
function We() {
  var t2 = this, a = [];
  return t2.each(function(n) {
    n !== t2 && a.push({ source: n.parent, target: n });
  }), a;
}
function* De() {
  var t2 = this, a, n = [t2], r, o, s;
  do
    for (a = n.reverse(), n = []; t2 = a.pop(); )
      if (yield t2, r = t2.children)
        for (o = 0, s = r.length; o < s; ++o)
          n.push(r[o]);
  while (n.length);
}
function Z(t2, a) {
  t2 instanceof Map ? (t2 = [void 0, t2], a === void 0 && (a = Re)) : a === void 0 && (a = Ee);
  for (var n = new K(t2), r, o = [n], s, d, h, f; r = o.pop(); )
    if ((d = a(r.data)) && (f = (d = Array.from(d)).length))
      for (r.children = d, h = f - 1; h >= 0; --h)
        o.push(s = d[h] = new K(d[h])), s.parent = r, s.depth = r.depth + 1;
  return n.eachBefore(Ve);
}
function Ie() {
  return Z(this).eachBefore(He);
}
function Ee(t2) {
  return t2.children;
}
function Re(t2) {
  return Array.isArray(t2) ? t2[1] : null;
}
function He(t2) {
  t2.data.value !== void 0 && (t2.value = t2.data.value), t2.data = t2.data.data;
}
function Ve(t2) {
  var a = 0;
  do
    t2.height = a;
  while ((t2 = t2.parent) && t2.height < ++a);
}
function K(t2) {
  this.data = t2, this.depth = this.height = 0, this.parent = null;
}
K.prototype = Z.prototype = {
  constructor: K,
  count: $e,
  each: we,
  eachAfter: Te,
  eachBefore: Le,
  find: ke,
  sum: Me,
  sort: ze,
  path: Fe,
  ancestors: Be,
  descendants: Pe,
  leaves: Ne,
  links: We,
  copy: Ie,
  [Symbol.iterator]: De
};
function _e(t2) {
  if (typeof t2 != "function") throw new Error();
  return t2;
}
function H() {
  return 0;
}
function V(t2) {
  return function() {
    return t2;
  };
}
function je(t2) {
  t2.x0 = Math.round(t2.x0), t2.y0 = Math.round(t2.y0), t2.x1 = Math.round(t2.x1), t2.y1 = Math.round(t2.y1);
}
function Ge(t2, a, n, r, o) {
  for (var s = t2.children, d, h = -1, f = s.length, i2 = t2.value && (r - a) / t2.value; ++h < f; )
    d = s[h], d.y0 = n, d.y1 = o, d.x0 = a, d.x1 = a += d.value * i2;
}
function qe(t2, a, n, r, o) {
  for (var s = t2.children, d, h = -1, f = s.length, i2 = t2.value && (o - n) / t2.value; ++h < f; )
    d = s[h], d.x0 = a, d.x1 = r, d.y0 = n, d.y1 = n += d.value * i2;
}
var Oe = (1 + Math.sqrt(5)) / 2;
function Je(t2, a, n, r, o, s) {
  for (var d = [], h = a.children, f, i2, p = 0, C = 0, l = h.length, v, g2, x = a.value, u, m, A, M, B, W, T; p < l; ) {
    v = o - n, g2 = s - r;
    do
      u = h[C++].value;
    while (!u && C < l);
    for (m = A = u, W = Math.max(g2 / v, v / g2) / (x * t2), T = u * u * W, B = Math.max(A / T, T / m); C < l; ++C) {
      if (u += i2 = h[C].value, i2 < m && (m = i2), i2 > A && (A = i2), T = u * u * W, M = Math.max(A / T, T / m), M > B) {
        u -= i2;
        break;
      }
      B = M;
    }
    d.push(f = { value: u, dice: v < g2, children: h.slice(p, C) }), f.dice ? Ge(f, n, r, o, x ? r += g2 * u / x : s) : qe(f, n, r, x ? n += v * u / x : o, s), x -= u, p = C;
  }
  return d;
}
var Ke = function t(a) {
  function n(r, o, s, d, h) {
    Je(a, r, o, s, d, h);
  }
  return n.ratio = function(r) {
    return t((r = +r) > 1 ? r : 1);
  }, n;
}(Oe);
function Qe() {
  var t2 = Ke, a = false, n = 1, r = 1, o = [0], s = H, d = H, h = H, f = H, i2 = H;
  function p(l) {
    return l.x0 = l.y0 = 0, l.x1 = n, l.y1 = r, l.eachBefore(C), o = [0], a && l.eachBefore(je), l;
  }
  function C(l) {
    var v = o[l.depth], g2 = l.x0 + v, x = l.y0 + v, u = l.x1 - v, m = l.y1 - v;
    u < g2 && (g2 = u = (g2 + u) / 2), m < x && (x = m = (x + m) / 2), l.x0 = g2, l.y0 = x, l.x1 = u, l.y1 = m, l.children && (v = o[l.depth + 1] = s(l) / 2, g2 += i2(l) - v, x += d(l) - v, u -= h(l) - v, m -= f(l) - v, u < g2 && (g2 = u = (g2 + u) / 2), m < x && (x = m = (x + m) / 2), t2(l, g2, x, u, m));
  }
  return p.round = function(l) {
    return arguments.length ? (a = !!l, p) : a;
  }, p.size = function(l) {
    return arguments.length ? (n = +l[0], r = +l[1], p) : [n, r];
  }, p.tile = function(l) {
    return arguments.length ? (t2 = _e(l), p) : t2;
  }, p.padding = function(l) {
    return arguments.length ? p.paddingInner(l).paddingOuter(l) : p.paddingInner();
  }, p.paddingInner = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : V(+l), p) : s;
  }, p.paddingOuter = function(l) {
    return arguments.length ? p.paddingTop(l).paddingRight(l).paddingBottom(l).paddingLeft(l) : p.paddingTop();
  }, p.paddingTop = function(l) {
    return arguments.length ? (d = typeof l == "function" ? l : V(+l), p) : d;
  }, p.paddingRight = function(l) {
    return arguments.length ? (h = typeof l == "function" ? l : V(+l), p) : h;
  }, p.paddingBottom = function(l) {
    return arguments.length ? (f = typeof l == "function" ? l : V(+l), p) : f;
  }, p.paddingLeft = function(l) {
    return arguments.length ? (i2 = typeof l == "function" ? l : V(+l), p) : i2;
  }, p;
}
var U;
var ae2 = (U = class {
  constructor() {
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = qR, this.getAccTitle = RR, this.setDiagramTitle = WR, this.getDiagramTitle = HR, this.getAccDescription = jR, this.setAccDescription = PR;
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    const t2 = N6, a = Hr();
    return sg({
      ...t2.treemap,
      ...a.treemap ?? {}
    });
  }
  addNode(t2, a) {
    this.nodes.push(t2), this.levels.set(t2, a), a === 0 && (this.outerNodes.push(t2), this.root ?? (this.root = t2));
  }
  getRoot() {
    return { name: "", children: this.outerNodes };
  }
  addClass(t2, a) {
    const n = this.classes.get(t2) ?? { id: t2, styles: [], textStyles: [] }, r = a.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    r && r.forEach((o) => {
      $7(o) && ((n == null ? void 0 : n.textStyles) ? n.textStyles.push(o) : n.textStyles = [o]), (n == null ? void 0 : n.styles) ? n.styles.push(o) : n.styles = [o];
    }), this.classes.set(t2, n);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(t2) {
    var _a;
    return ((_a = this.classes.get(t2)) == null ? void 0 : _a.styles) ?? [];
  }
  clear() {
    zR(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, _(U, "TreeMapDB"), U);
function ne(t2) {
  if (!t2.length)
    return [];
  const a = [], n = [];
  return t2.forEach((r) => {
    const o = {
      name: r.name,
      children: r.type === "Leaf" ? void 0 : []
    };
    for (o.classSelector = r == null ? void 0 : r.classSelector, (r == null ? void 0 : r.cssCompiledStyles) && (o.cssCompiledStyles = [r.cssCompiledStyles]), r.type === "Leaf" && r.value !== void 0 && (o.value = r.value); n.length > 0 && n[n.length - 1].level >= r.level; )
      n.pop();
    if (n.length === 0)
      a.push(o);
    else {
      const s = n[n.length - 1].node;
      s.children ? s.children.push(o) : s.children = [o];
    }
    r.type !== "Leaf" && n.push({ node: o, level: r.level });
  }), a;
}
_(ne, "buildHierarchy");
var Ue = _((t2, a) => {
  i(t2, a);
  const n = [];
  for (const s of t2.TreemapRows ?? [])
    s.$type === "ClassDefStatement" && a.addClass(s.className ?? "", s.styleText ?? "");
  for (const s of t2.TreemapRows ?? []) {
    const d = s.item;
    if (!d)
      continue;
    const h = s.indent ? parseInt(s.indent) : 0, f = Xe(d), i2 = d.classSelector ? a.getStylesForClass(d.classSelector) : [], p = i2.length > 0 ? i2.join(";") : void 0, C = {
      level: h,
      name: f,
      type: d.$type,
      value: d.value,
      classSelector: d.classSelector,
      cssCompiledStyles: p
    };
    n.push(C);
  }
  const r = ne(n), o = _((s, d) => {
    for (const h of s)
      a.addNode(h, d), h.children && h.children.length > 0 && o(h.children, d + 1);
  }, "addNodesRecursively");
  o(r, 0);
}, "populate");
var Xe = _((t2) => t2.name ? String(t2.name) : "", "getItemName");
var re = {
  // @ts-expect-error - TreeMapDB is not assignable to DiagramDB
  parser: { yy: void 0 },
  parse: _(async (t2) => {
    var _a;
    try {
      const a = await Iy("treemap", t2);
      ut.debug("Treemap AST:", a);
      const n = (_a = re.parser) == null ? void 0 : _a.yy;
      if (!(n instanceof ae2))
        throw new Error(
          "parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues."
        );
      Ue(a, n);
    } catch (a) {
      throw ut.error("Error parsing treemap:", a), a;
    }
  }, "parse")
};
var Ze = 10;
var N = 10;
var _2 = 25;
var Ye = _((t2, a, n, r) => {
  const o = r.db, s = o.getConfig(), d = s.padding ?? Ze, h = o.getDiagramTitle(), f = o.getRoot(), { themeVariables: i2 } = Hr();
  if (!f)
    return;
  const p = h ? 30 : 0, C = tZ(a), l = s.nodeWidth ? s.nodeWidth * N : 960, v = s.nodeHeight ? s.nodeHeight * N : 500, g2 = l, x = v + p;
  C.attr("viewBox", `0 0 ${g2} ${x}`), U6(C, x, g2, s.useMaxWidth);
  let u;
  try {
    const e = s.valueFormat || ",";
    if (e === "$0,0")
      u = _((c) => "$" + tt(",")(c), "valueFormat");
    else if (e.startsWith("$") && e.includes(",")) {
      const c = /\.\d+/.exec(e), y = c ? c[0] : "";
      u = _((w) => "$" + tt("," + y)(w), "valueFormat");
    } else if (e.startsWith("$")) {
      const c = e.substring(1);
      u = _((y) => "$" + tt(c || "")(y), "valueFormat");
    } else
      u = tt(e);
  } catch (e) {
    ut.error("Error creating format function:", e), u = tt(",");
  }
  const m = g().range([
    "transparent",
    i2.cScale0,
    i2.cScale1,
    i2.cScale2,
    i2.cScale3,
    i2.cScale4,
    i2.cScale5,
    i2.cScale6,
    i2.cScale7,
    i2.cScale8,
    i2.cScale9,
    i2.cScale10,
    i2.cScale11
  ]), A = g().range([
    "transparent",
    i2.cScalePeer0,
    i2.cScalePeer1,
    i2.cScalePeer2,
    i2.cScalePeer3,
    i2.cScalePeer4,
    i2.cScalePeer5,
    i2.cScalePeer6,
    i2.cScalePeer7,
    i2.cScalePeer8,
    i2.cScalePeer9,
    i2.cScalePeer10,
    i2.cScalePeer11
  ]), M = g().range([
    i2.cScaleLabel0,
    i2.cScaleLabel1,
    i2.cScaleLabel2,
    i2.cScaleLabel3,
    i2.cScaleLabel4,
    i2.cScaleLabel5,
    i2.cScaleLabel6,
    i2.cScaleLabel7,
    i2.cScaleLabel8,
    i2.cScaleLabel9,
    i2.cScaleLabel10,
    i2.cScaleLabel11
  ]);
  h && C.append("text").attr("x", g2 / 2).attr("y", p / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(h);
  const B = C.append("g").attr("transform", `translate(0, ${p})`).attr("class", "treemapContainer"), W = Z(f).sum((e) => e.value ?? 0).sort((e, c) => (c.value ?? 0) - (e.value ?? 0)), T = Qe().size([l, v]).paddingTop(
    (e) => e.children && e.children.length > 0 ? _2 + N : 0
  ).paddingInner(d).paddingLeft((e) => e.children && e.children.length > 0 ? N : 0).paddingRight((e) => e.children && e.children.length > 0 ? N : 0).paddingBottom((e) => e.children && e.children.length > 0 ? N : 0).round(true)(W), le = T.descendants().filter((e) => e.children && e.children.length > 0), D = B.selectAll(".treemapSection").data(le).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
  D.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", _2).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", 0.6).attr("stroke-width", 0.6).attr("style", (e) => e.depth === 0 ? "display: none;" : ""), D.append("clipPath").attr("id", (e, c) => `clip-section-${a}-${c}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", _2), D.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, c) => `treemapSection section${c}`).attr("fill", (e) => m(e.data.name)).attr("fill-opacity", 0.6).attr("stroke", (e) => A(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", 0.4).attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const c = Ft({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c.nodeStyles + ";" + c.borderStyles.join(";");
  }), D.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", _2 / 2).attr("dominant-baseline", "middle").text((e) => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const c = "dominant-baseline: middle; font-size: 12px; fill:" + M(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", y = Ft({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c + y.labelStyles.replace("color:", "fill:");
  }).each(function(e) {
    if (e.depth === 0)
      return;
    const c = ae(this), y = e.data.name;
    c.text(y);
    const w = e.x1 - e.x0, z = 6;
    let F;
    s.showValues !== false && e.value ? F = w - 10 - 30 - 10 - z : F = w - z - 6;
    const k = Math.max(15, F), L = c.node();
    if (L.getComputedTextLength() > k) {
      const S = "...";
      let b = y;
      for (; b.length > 0; ) {
        if (b = y.substring(0, b.length - 1), b.length === 0) {
          c.text(S), L.getComputedTextLength() > k && c.text("");
          break;
        }
        if (c.text(b + S), L.getComputedTextLength() <= k)
          break;
      }
    }
  }), s.showValues !== false && D.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", _2 / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? u(e.value) : "").attr("font-style", "italic").attr("style", (e) => {
    if (e.depth === 0)
      return "display: none;";
    const c = "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + M(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", y = Ft({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c + y.labelStyles.replace("color:", "fill:");
  });
  const se = T.leaves(), j = B.selectAll(".treemapLeafGroup").data(se).enter().append("g").attr("class", (e, c) => `treemapNode treemapLeafGroup leaf${c}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
  j.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? m(e.parent.data.name) : m(e.data.name)).attr("style", (e) => Ft({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", 0.3).attr("stroke", (e) => e.parent ? m(e.parent.data.name) : m(e.data.name)).attr("stroke-width", 3), j.append("clipPath").attr("id", (e, c) => `clip-${a}-${c}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), j.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => {
    const c = "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + M(e.data.name) + ";", y = Ft({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c + y.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (e, c) => `url(#clip-${a}-${c})`).text((e) => e.data.name).each(function(e) {
    const c = ae(this), y = e.x1 - e.x0, w = e.y1 - e.y0, z = c.node(), F = 4, k = y - 2 * F, L = w - 2 * F;
    if (k < 10 || L < 10) {
      c.style("display", "none");
      return;
    }
    let S = parseInt(c.style("font-size"), 10);
    const b = 8, I = 28, G = 0.6, E = 6, q = 2;
    for (; z.getComputedTextLength() > k && S > b; )
      S--, c.style("font-size", `${S}px`);
    let O = Math.max(
      E,
      Math.min(I, Math.round(S * G))
    ), Y = S + q + O;
    for (; Y > L && S > b && (S--, O = Math.max(
      E,
      Math.min(I, Math.round(S * G))
    ), !(O < E && S === b)); )
      c.style("font-size", `${S}px`), Y = S + q + O;
    c.style("font-size", `${S}px`), (z.getComputedTextLength() > k || S < b || L < S) && c.style("display", "none");
  }), s.showValues !== false && j.append("text").attr("class", "treemapValue").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", function(e) {
    return (e.y1 - e.y0) / 2;
  }).attr("style", (e) => {
    const c = "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + M(e.data.name) + ";", y = Ft({ cssCompiledStyles: e.data.cssCompiledStyles });
    return c + y.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (e, c) => `url(#clip-${a}-${c})`).text((e) => e.value ? u(e.value) : "").each(function(e) {
    const c = ae(this), y = this.parentNode;
    if (!y) {
      c.style("display", "none");
      return;
    }
    const w = ae(y).select(".treemapLabel");
    if (w.empty() || w.style("display") === "none") {
      c.style("display", "none");
      return;
    }
    const z = parseFloat(w.style("font-size")), F = 28, k = 0.6, L = 6, S = 2, b = Math.max(
      L,
      Math.min(F, Math.round(z * k))
    );
    c.style("font-size", `${b}px`);
    const I = (e.y1 - e.y0) / 2 + z / 2 + S;
    c.attr("y", I);
    const G = e.x1 - e.x0, E = e.y1 - e.y0 - 4, q = G - 2 * 4;
    c.node().getComputedTextLength() > q || I + b > E || b < L ? c.style("display", "none") : c.style("display", null);
  });
  const oe = s.diagramPadding ?? 8;
  $(C, oe, "flowchart", (s == null ? void 0 : s.useMaxWidth) || false);
}, "draw");
var et = _(function(t2, a) {
  return a.db.getClasses();
}, "getClasses");
var tt2 = { draw: Ye, getClasses: et };
var at = {
  sectionStrokeColor: "black",
  sectionStrokeWidth: "1",
  sectionFillColor: "#efefef",
  leafStrokeColor: "black",
  leafStrokeWidth: "1",
  leafFillColor: "#efefef",
  labelColor: "black",
  labelFontSize: "12px",
  valueFontSize: "10px",
  valueColor: "black",
  titleColor: "black",
  titleFontSize: "14px"
};
var nt = _(({
  treemap: t2
} = {}) => {
  const a = sg(at, t2);
  return `
  .treemapNode.section {
    stroke: ${a.sectionStrokeColor};
    stroke-width: ${a.sectionStrokeWidth};
    fill: ${a.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${a.leafStrokeColor};
    stroke-width: ${a.leafStrokeWidth};
    fill: ${a.leafFillColor};
  }
  .treemapLabel {
    fill: ${a.labelColor};
    font-size: ${a.labelFontSize};
  }
  .treemapValue {
    fill: ${a.valueColor};
    font-size: ${a.valueFontSize};
  }
  .treemapTitle {
    fill: ${a.titleColor};
    font-size: ${a.titleFontSize};
  }
  `;
}, "getStyles");
var rt = nt;
var ht = {
  parser: re,
  get db() {
    return new ae2();
  },
  renderer: tt2,
  styles: rt
};
export {
  ht as diagram
};
//# sourceMappingURL=diagram-VMROVX33-fUguy4jx-D_cWkY9d-VFGZ5QQS.js.map
