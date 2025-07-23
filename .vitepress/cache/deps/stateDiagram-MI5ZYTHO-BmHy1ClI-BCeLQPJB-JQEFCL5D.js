import {
  Fe,
  We,
  je
} from "./chunk-ZHVTQEQV.js";
import {
  it
} from "./chunk-HUZG2C34.js";
import {
  y
} from "./chunk-VVFIDBJC.js";
import "./chunk-P75ONYRF.js";
import "./chunk-NXGPKSY4.js";
import "./chunk-HFG3CCC5.js";
import "./chunk-CSA5CQKO.js";
import {
  EU,
  H6,
  Nh,
  U6,
  Wn,
  _,
  ae,
  fe,
  fo,
  ut
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/stateDiagram-MI5ZYTHO-BmHy1ClI-BCeLQPJB.js
var W = _((e) => e.append("circle").attr("class", "start-state").attr("r", fe().state.sizeUnit).attr("cx", fe().state.padding + fe().state.sizeUnit).attr("cy", fe().state.padding + fe().state.sizeUnit), "drawStartState");
var F = _((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", fe().state.textHeight).attr("class", "divider").attr("x2", fe().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider");
var J = _((e, n) => {
  const g = e.append("text").attr("x", 2 * fe().state.padding).attr("y", fe().state.textHeight + 2 * fe().state.padding).attr("font-size", fe().state.fontSize).attr("class", "state-title").text(n.id), s = g.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", fe().state.padding).attr("y", fe().state.padding).attr("width", s.width + 2 * fe().state.padding).attr("height", s.height + 2 * fe().state.padding).attr("rx", fe().state.radius), g;
}, "drawSimpleState");
var Y = _((e, n) => {
  const g = _(function(o, u, b) {
    const m = o.append("tspan").attr("x", 2 * fe().state.padding).text(u);
    b || m.attr("dy", fe().state.textHeight);
  }, "addTspan"), s = e.append("text").attr("x", 2 * fe().state.padding).attr("y", fe().state.textHeight + 1.3 * fe().state.padding).attr("font-size", fe().state.fontSize).attr("class", "state-title").text(n.descriptions[0]).node().getBBox(), r = s.height, c = e.append("text").attr("x", fe().state.padding).attr(
    "y",
    r + fe().state.padding * 0.4 + fe().state.dividerMargin + fe().state.textHeight
  ).attr("class", "state-description");
  let l = true, a = true;
  n.descriptions.forEach(function(o) {
    l || (g(c, o, a), a = false), l = false;
  });
  const d = e.append("line").attr("x1", fe().state.padding).attr("y1", fe().state.padding + r + fe().state.dividerMargin / 2).attr("y2", fe().state.padding + r + fe().state.dividerMargin / 2).attr("class", "descr-divider"), x = c.node().getBBox(), h = Math.max(x.width, s.width);
  return d.attr("x2", h + 3 * fe().state.padding), e.insert("rect", ":first-child").attr("x", fe().state.padding).attr("y", fe().state.padding).attr("width", h + 2 * fe().state.padding).attr("height", x.height + r + 2 * fe().state.padding).attr("rx", fe().state.radius), e;
}, "drawDescrState");
var j = _((e, n, g) => {
  const s = fe().state.padding, r = 2 * fe().state.padding, c = e.node().getBBox(), l = c.width, a = c.x, d = e.append("text").attr("x", 0).attr("y", fe().state.titleShift).attr("font-size", fe().state.fontSize).attr("class", "state-title").text(n.id), x = d.node().getBBox().width + r;
  let h = Math.max(x, l);
  h === l && (h = h + r);
  let o;
  const u = e.node().getBBox();
  n.doc, o = a - s, x > l && (o = (l - h) / 2 + s), Math.abs(a - u.x) < s && x > l && (o = a - (x - l) / 2);
  const b = 1 - fe().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", o).attr("y", b).attr("class", g ? "alt-composit" : "composit").attr("width", h).attr(
    "height",
    u.height + fe().state.textHeight + fe().state.titleShift + 1
  ).attr("rx", "0"), d.attr("x", o + s), x <= l && d.attr("x", a + (h - r) / 2 - x / 2 + s), e.insert("rect", ":first-child").attr("x", o).attr(
    "y",
    fe().state.titleShift - fe().state.textHeight - fe().state.padding
  ).attr("width", h).attr("height", fe().state.textHeight * 3).attr("rx", fe().state.radius), e.insert("rect", ":first-child").attr("x", o).attr(
    "y",
    fe().state.titleShift - fe().state.textHeight - fe().state.padding
  ).attr("width", h).attr("height", u.height + 3 + 2 * fe().state.textHeight).attr("rx", fe().state.radius), e;
}, "addTitleAndBox");
var X = _((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", fe().state.sizeUnit + fe().state.miniPadding).attr(
  "cx",
  fe().state.padding + fe().state.sizeUnit + fe().state.miniPadding
).attr(
  "cy",
  fe().state.padding + fe().state.sizeUnit + fe().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", fe().state.sizeUnit).attr("cx", fe().state.padding + fe().state.sizeUnit + 2).attr("cy", fe().state.padding + fe().state.sizeUnit + 2)), "drawEndState");
var q = _((e, n) => {
  let g = fe().state.forkWidth, s = fe().state.forkHeight;
  if (n.parentId) {
    let r = g;
    g = s, s = r;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", g).attr("height", s).attr("x", fe().state.padding).attr("y", fe().state.padding);
}, "drawForkJoinState");
var Z = _((e, n, g, s) => {
  let r = 0;
  const c = s.append("text");
  c.style("text-anchor", "start"), c.attr("class", "noteText");
  let l = e.replace(/\r\n/g, "<br/>");
  l = l.replace(/\n/g, "<br/>");
  const a = l.split(fo.lineBreakRegex);
  let d = 1.25 * fe().state.noteMargin;
  for (const x of a) {
    const h = x.trim();
    if (h.length > 0) {
      const o = c.append("tspan");
      if (o.text(h), d === 0) {
        const u = o.node().getBBox();
        d += u.height;
      }
      r += d, o.attr("x", n + fe().state.noteMargin), o.attr("y", g + r + 1.25 * fe().state.noteMargin);
    }
  }
  return { textWidth: c.node().getBBox().width, textHeight: r };
}, "_drawLongText");
var K = _((e, n) => {
  n.attr("class", "state-note");
  const g = n.append("rect").attr("x", 0).attr("y", fe().state.padding), s = n.append("g"), { textWidth: r, textHeight: c } = Z(e, 0, 0, s);
  return g.attr("height", c + 2 * fe().state.noteMargin), g.attr("width", r + fe().state.noteMargin * 2), g;
}, "drawNote");
var H = _(function(e, n) {
  const g = n.id, s = {
    id: g,
    label: n.id,
    width: 0,
    height: 0
  }, r = e.append("g").attr("id", g).attr("class", "stateGroup");
  n.type === "start" && W(r), n.type === "end" && X(r), (n.type === "fork" || n.type === "join") && q(r, n), n.type === "note" && K(n.note.text, r), n.type === "divider" && F(r), n.type === "default" && n.descriptions.length === 0 && J(r, n), n.type === "default" && n.descriptions.length > 0 && Y(r, n);
  const c = r.node().getBBox();
  return s.width = c.width + 2 * fe().state.padding, s.height = c.height + 2 * fe().state.padding, s;
}, "drawState");
var L = 0;
var Q = _(function(e, n, g) {
  const s = _(function(d) {
    switch (d) {
      case je.relationType.AGGREGATION:
        return "aggregation";
      case je.relationType.EXTENSION:
        return "extension";
      case je.relationType.COMPOSITION:
        return "composition";
      case je.relationType.DEPENDENCY:
        return "dependency";
    }
  }, "getRelationType");
  n.points = n.points.filter((d) => !Number.isNaN(d.y));
  const r = n.points, c = EU().x(function(d) {
    return d.x;
  }).y(function(d) {
    return d.y;
  }).curve(Nh), l = e.append("path").attr("d", c(r)).attr("id", "edge" + L).attr("class", "transition");
  let a = "";
  if (fe().state.arrowMarkerAbsolute && (a = H6(true)), l.attr(
    "marker-end",
    "url(" + a + "#" + s(je.relationType.DEPENDENCY) + "End)"
  ), g.title !== void 0) {
    const d = e.append("g").attr("class", "stateLabel"), { x, y: h } = Wn.calcLabelPosition(n.points), o = fo.getRows(g.title);
    let u = 0;
    const b = [];
    let m = 0, S = 0;
    for (let f = 0; f <= o.length; f++) {
      const p = d.append("text").attr("text-anchor", "middle").text(o[f]).attr("x", x).attr("y", h + u), w = p.node().getBBox();
      m = Math.max(m, w.width), S = Math.min(S, w.x), ut.info(w.x, x, h + u), u === 0 && (u = p.node().getBBox().height, ut.info("Title height", u, h)), b.push(p);
    }
    let N = u * o.length;
    if (o.length > 1) {
      const f = (o.length - 1) * u * 0.5;
      b.forEach((p, w) => p.attr("y", h + w * u - f)), N = u * o.length;
    }
    const i = d.node().getBBox();
    d.insert("rect", ":first-child").attr("class", "box").attr("x", x - m / 2 - fe().state.padding / 2).attr("y", h - N / 2 - fe().state.padding / 2 - 3.5).attr("width", m + fe().state.padding).attr("height", N + fe().state.padding), ut.info(i);
  }
  L++;
}, "drawEdge");
var B;
var T = {};
var V = _(function() {
}, "setConf");
var _2 = _(function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers");
var tt = _(function(e, n, g, s) {
  B = fe().state;
  const r = fe().securityLevel;
  let c;
  r === "sandbox" && (c = ae("#i" + n));
  const l = r === "sandbox" ? ae(c.nodes()[0].contentDocument.body) : ae("body"), a = r === "sandbox" ? c.nodes()[0].contentDocument : document;
  ut.debug("Rendering diagram " + e);
  const d = l.select(`[id='${n}']`);
  _2(d);
  const x = s.db.getRootDoc();
  D(x, d, void 0, false, l, a, s);
  const h = B.padding, o = d.node().getBBox(), u = o.width + h * 2, b = o.height + h * 2, m = u * 1.75;
  U6(d, b, m, B.useMaxWidth), d.attr(
    "viewBox",
    `${o.x - B.padding}  ${o.y - B.padding} ` + u + " " + b
  );
}, "draw");
var et = _((e) => e ? e.length * B.fontSizeFactor : 1, "getLabelWidth");
var D = _((e, n, g, s, r, c, l) => {
  const a = new y({
    compound: true,
    multigraph: true
  });
  let d, x = true;
  for (d = 0; d < e.length; d++)
    if (e[d].stmt === "relation") {
      x = false;
      break;
    }
  g ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: x ? 1 : B.edgeLengthFactor,
    nodeSep: x ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: x ? 1 : B.edgeLengthFactor,
    nodeSep: x ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  });
  const h = l.db.getStates(), o = l.db.getRelations(), u = Object.keys(h);
  for (const i of u) {
    const f = h[i];
    g && (f.parentId = g);
    let p;
    if (f.doc) {
      let w = n.append("g").attr("id", f.id).attr("class", "stateGroup");
      p = D(f.doc, w, f.id, !s, r, c, l);
      {
        w = j(w, f, s);
        let k = w.node().getBBox();
        p.width = k.width, p.height = k.height + B.padding / 2, T[f.id] = { y: B.compositTitleSize };
      }
    } else
      p = H(n, f, a);
    if (f.note) {
      const w = {
        descriptions: [],
        id: f.id + "-note",
        note: f.note,
        type: "note"
      }, k = H(n, w, a);
      f.note.position === "left of" ? (a.setNode(p.id + "-note", k), a.setNode(p.id, p)) : (a.setNode(p.id, p), a.setNode(p.id + "-note", k)), a.setParent(p.id, p.id + "-group"), a.setParent(p.id + "-note", p.id + "-group");
    } else
      a.setNode(p.id, p);
  }
  ut.debug("Count=", a.nodeCount(), a);
  let b = 0;
  o.forEach(function(i) {
    b++, ut.debug("Setting edge", i), a.setEdge(
      i.id1,
      i.id2,
      {
        relation: i,
        width: et(i.title),
        height: B.labelHeight * fo.getRows(i.title).length,
        labelpos: "c"
      },
      "id" + b
    );
  }), it(a), ut.debug("Graph after layout", a.nodes());
  const m = n.node();
  a.nodes().forEach(function(i) {
    i !== void 0 && a.node(i) !== void 0 ? (ut.warn("Node " + i + ": " + JSON.stringify(a.node(i))), r.select("#" + m.id + " #" + i).attr(
      "transform",
      "translate(" + (a.node(i).x - a.node(i).width / 2) + "," + (a.node(i).y + (T[i] ? T[i].y : 0) - a.node(i).height / 2) + " )"
    ), r.select("#" + m.id + " #" + i).attr("data-x-shift", a.node(i).x - a.node(i).width / 2), c.querySelectorAll("#" + m.id + " #" + i + " .divider").forEach((f) => {
      const p = f.parentElement;
      let w = 0, k = 0;
      p && (p.parentElement && (w = p.parentElement.getBBox().width), k = parseInt(p.getAttribute("data-x-shift"), 10), Number.isNaN(k) && (k = 0)), f.setAttribute("x1", 0 - k + 8), f.setAttribute("x2", w - k - 8);
    })) : ut.debug("No Node " + i + ": " + JSON.stringify(a.node(i)));
  });
  let S = m.getBBox();
  a.edges().forEach(function(i) {
    i !== void 0 && a.edge(i) !== void 0 && (ut.debug("Edge " + i.v + " -> " + i.w + ": " + JSON.stringify(a.edge(i))), Q(n, a.edge(i), a.edge(i).relation));
  }), S = m.getBBox();
  const N = {
    id: g || "root",
    label: g || "root",
    width: 0,
    height: 0
  };
  return N.width = S.width + 2 * B.padding, N.height = S.height + 2 * B.padding, ut.debug("Doc rendered", N, a), N;
}, "renderDoc");
var at = {
  setConf: V,
  draw: tt
};
var st = {
  parser: Fe,
  get db() {
    return new je(1);
  },
  renderer: at,
  styles: We,
  init: _((e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
  }, "init")
};
export {
  st as diagram
};
//# sourceMappingURL=stateDiagram-MI5ZYTHO-BmHy1ClI-BCeLQPJB-JQEFCL5D.js.map
