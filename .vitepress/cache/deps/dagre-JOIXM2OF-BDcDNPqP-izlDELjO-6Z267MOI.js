import {
  it
} from "./chunk-HUZG2C34.js";
import {
  y
} from "./chunk-VVFIDBJC.js";
import {
  n
} from "./chunk-5H7L3GAH.js";
import {
  lr
} from "./chunk-HFG3CCC5.js";
import {
  ma
} from "./chunk-CSA5CQKO.js";
import {
  $K,
  Art,
  Crt,
  DK,
  Dt,
  EK,
  Om,
  Srt,
  Trt,
  ZK,
  _,
  _rt,
  aK,
  fe,
  j8,
  ut
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/dagre-JOIXM2OF-BDcDNPqP-izlDELjO.js
function w(e) {
  var r = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: _2(e),
    edges: ee(e)
  };
  return ma(e.graph()) || (r.value = n(e.graph())), r;
}
function _2(e) {
  return lr(e.nodes(), function(r) {
    var n2 = e.node(r), o = e.parent(r), i = { v: r };
    return ma(n2) || (i.value = n2), ma(o) || (i.parent = o), i;
  });
}
function ee(e) {
  return lr(e.edges(), function(r) {
    var n2 = e.edge(r), o = { v: r.v, w: r.w };
    return ma(r.name) || (o.name = r.name), ma(n2) || (o.value = n2), o;
  });
}
var s = /* @__PURE__ */ new Map();
var X = /* @__PURE__ */ new Map();
var G = /* @__PURE__ */ new Map();
var ne = _(() => {
  X.clear(), G.clear(), s.clear();
}, "clear");
var I = _((e, r) => {
  const n2 = X.get(r) || [];
  return ut.trace("In isDescendant", r, " ", e, " = ", n2.includes(e)), n2.includes(e);
}, "isDescendant");
var re = _((e, r) => {
  const n2 = X.get(r) || [];
  return ut.info("Descendants of ", r, " is ", n2), ut.info("Edge is ", e), e.v === r || e.w === r ? false : n2 ? n2.includes(e.v) || I(e.v, r) || I(e.w, r) || n2.includes(e.w) : (ut.debug("Tilt, ", r, ",not in descendants"), false);
}, "edgeInCluster");
var P = _((e, r, n2, o) => {
  ut.warn(
    "Copying children of ",
    e,
    "root",
    o,
    "data",
    r.node(e),
    o
  );
  const i = r.children(e) || [];
  e !== o && i.push(e), ut.warn("Copying (nodes) clusterId", e, "nodes", i), i.forEach((d) => {
    if (r.children(d).length > 0)
      P(d, r, n2, o);
    else {
      const c = r.node(d);
      ut.info("cp ", d, " to ", o, " with parent ", e), n2.setNode(d, c), o !== r.parent(d) && (ut.warn("Setting parent", d, r.parent(d)), n2.setParent(d, r.parent(d))), e !== o && d !== e ? (ut.debug("Setting parent", d, e), n2.setParent(d, e)) : (ut.info("In copy ", e, "root", o, "data", r.node(e), o), ut.debug(
        "Not Setting parent for node=",
        d,
        "cluster!==rootId",
        e !== o,
        "node!==clusterId",
        d !== e
      ));
      const g = r.edges(d);
      ut.debug("Copying Edges", g), g.forEach((u) => {
        ut.info("Edge", u);
        const f = r.edge(u.v, u.w, u.name);
        ut.info("Edge data", f, o);
        try {
          re(u, o) ? (ut.info("Copying as ", u.v, u.w, f, u.name), n2.setEdge(u.v, u.w, f, u.name), ut.info("newGraph edges ", n2.edges(), n2.edge(n2.edges()[0]))) : ut.info(
            "Skipping copy of edge ",
            u.v,
            "-->",
            u.w,
            " rootId: ",
            o,
            " clusterId:",
            e
          );
        } catch (m) {
          ut.error(m);
        }
      });
    }
    ut.debug("Removing node", d), r.removeNode(d);
  });
}, "copy");
var R = _((e, r) => {
  const n2 = r.children(e);
  let o = [...n2];
  for (const i of n2)
    G.set(i, e), o = [...o, ...R(i, r)];
  return o;
}, "extractDescendants");
var te = _((e, r, n2) => {
  const o = e.edges().filter((g) => g.v === r || g.w === r), i = e.edges().filter((g) => g.v === n2 || g.w === n2), d = o.map((g) => ({ v: g.v === r ? n2 : g.v, w: g.w === r ? r : g.w })), c = i.map((g) => ({ v: g.v, w: g.w }));
  return d.filter((g) => c.some((u) => g.v === u.v && g.w === u.w));
}, "findCommonEdges");
var C = _((e, r, n2) => {
  const o = r.children(e);
  if (ut.trace("Searching children of id ", e, o), o.length < 1)
    return e;
  let i;
  for (const d of o) {
    const c = C(d, r, n2), g = te(r, n2, c);
    if (c)
      if (g.length > 0)
        i = c;
      else
        return c;
  }
  return i;
}, "findNonClusterChild");
var O = _((e) => !s.has(e) || !s.get(e).externalConnections ? e : s.has(e) ? s.get(e).id : e, "getAnchorId");
var ae = _((e, r) => {
  if (!e || r > 10) {
    ut.debug("Opting out, no graph ");
    return;
  } else
    ut.debug("Opting in, graph ");
  e.nodes().forEach(function(n2) {
    e.children(n2).length > 0 && (ut.warn(
      "Cluster identified",
      n2,
      " Replacement id in edges: ",
      C(n2, e, n2)
    ), X.set(n2, R(n2, e)), s.set(n2, { id: C(n2, e, n2), clusterData: e.node(n2) }));
  }), e.nodes().forEach(function(n2) {
    const o = e.children(n2), i = e.edges();
    o.length > 0 ? (ut.debug("Cluster identified", n2, X), i.forEach((d) => {
      const c = I(d.v, n2), g = I(d.w, n2);
      c ^ g && (ut.warn("Edge: ", d, " leaves cluster ", n2), ut.warn("Descendants of XXX ", n2, ": ", X.get(n2)), s.get(n2).externalConnections = true);
    })) : ut.debug("Not a cluster ", n2, X);
  });
  for (let n2 of s.keys()) {
    const o = s.get(n2).id, i = e.parent(o);
    i !== n2 && s.has(i) && !s.get(i).externalConnections && (s.get(n2).id = i);
  }
  e.edges().forEach(function(n2) {
    const o = e.edge(n2);
    ut.warn("Edge " + n2.v + " -> " + n2.w + ": " + JSON.stringify(n2)), ut.warn("Edge " + n2.v + " -> " + n2.w + ": " + JSON.stringify(e.edge(n2)));
    let i = n2.v, d = n2.w;
    if (ut.warn(
      "Fix XXX",
      s,
      "ids:",
      n2.v,
      n2.w,
      "Translating: ",
      s.get(n2.v),
      " --- ",
      s.get(n2.w)
    ), s.get(n2.v) || s.get(n2.w)) {
      if (ut.warn("Fixing and trying - removing XXX", n2.v, n2.w, n2.name), i = O(n2.v), d = O(n2.w), e.removeEdge(n2.v, n2.w, n2.name), i !== n2.v) {
        const c = e.parent(i);
        s.get(c).externalConnections = true, o.fromCluster = n2.v;
      }
      if (d !== n2.w) {
        const c = e.parent(d);
        s.get(c).externalConnections = true, o.toCluster = n2.w;
      }
      ut.warn("Fix Replacing with XXX", i, d, n2.name), e.setEdge(i, d, o, n2.name);
    }
  }), ut.warn("Adjusted Graph", w(e)), J(e, 0), ut.trace(s);
}, "adjustClustersAndEdges");
var J = _((e, r) => {
  var _a, _b;
  if (ut.warn("extractor - ", r, w(e), e.children("D")), r > 10) {
    ut.error("Bailing out");
    return;
  }
  let n2 = e.nodes(), o = false;
  for (const i of n2) {
    const d = e.children(i);
    o = o || d.length > 0;
  }
  if (!o) {
    ut.debug("Done, no node has children", e.nodes());
    return;
  }
  ut.debug("Nodes = ", n2, r);
  for (const i of n2)
    if (ut.debug(
      "Extracting node",
      i,
      s,
      s.has(i) && !s.get(i).externalConnections,
      !e.parent(i),
      e.node(i),
      e.children("D"),
      " Depth ",
      r
    ), !s.has(i))
      ut.debug("Not a cluster", i, r);
    else if (!s.get(i).externalConnections && e.children(i) && e.children(i).length > 0) {
      ut.warn(
        "Cluster without external connections, without a parent and with children",
        i,
        r
      );
      let d = e.graph().rankdir === "TB" ? "LR" : "TB";
      ((_b = (_a = s.get(i)) == null ? void 0 : _a.clusterData) == null ? void 0 : _b.dir) && (d = s.get(i).clusterData.dir, ut.warn("Fixing dir", s.get(i).clusterData.dir, d));
      const c = new y({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: d,
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      ut.warn("Old graph before copy", w(e)), P(i, e, c, i), e.setNode(i, {
        clusterNode: true,
        id: i,
        clusterData: s.get(i).clusterData,
        label: s.get(i).label,
        graph: c
      }), ut.warn("New graph after copy node: (", i, ")", w(c)), ut.debug("Old graph after copy", w(e));
    } else
      ut.warn(
        "Cluster ** ",
        i,
        " **not meeting the criteria !externalConnections:",
        !s.get(i).externalConnections,
        " no parent: ",
        !e.parent(i),
        " children ",
        e.children(i) && e.children(i).length > 0,
        e.children("D"),
        r
      ), ut.debug(s);
  n2 = e.nodes(), ut.warn("New list of nodes", n2);
  for (const i of n2) {
    const d = e.node(i);
    ut.warn(" Now next level", i, d), (d == null ? void 0 : d.clusterNode) && J(d.graph, r + 1);
  }
}, "extractor");
var B = _((e, r) => {
  if (r.length === 0)
    return [];
  let n2 = Object.assign([], r);
  return r.forEach((o) => {
    const i = e.children(o), d = B(e, i);
    n2 = [...n2, ...d];
  }), n2;
}, "sorter");
var ie = _((e) => B(e, e.children()), "sortNodesByHierarchy");
var A = _(async (e, r, n2, o, i, d) => {
  ut.warn("Graph in recursive render:XAX", w(r), i);
  const c = r.graph().rankdir;
  ut.trace("Dir in recursive render - dir:", c);
  const g = e.insert("g").attr("class", "root");
  r.nodes() ? ut.info("Recursive render XXX", r.nodes()) : ut.info("No nodes found for", r), r.edges().length > 0 && ut.info("Recursive edges", r.edge(r.edges()[0]));
  const u = g.insert("g").attr("class", "clusters"), f = g.insert("g").attr("class", "edgePaths"), m = g.insert("g").attr("class", "edgeLabels"), y2 = g.insert("g").attr("class", "nodes");
  await Promise.all(
    r.nodes().map(async function(l) {
      const t = r.node(l);
      if (i !== void 0) {
        const p = JSON.parse(JSON.stringify(i.clusterData));
        ut.trace(
          `Setting data for parent cluster XXX
 Node.id = `,
          l,
          `
 data=`,
          p.height,
          `
Parent cluster`,
          i.height
        ), r.setNode(i.id, p), r.parent(l) || (ut.trace("Setting parent", l, i.id), r.setParent(l, i.id, p));
      }
      if (ut.info("(Insert) Node XXX" + l + ": " + JSON.stringify(r.node(l))), t == null ? void 0 : t.clusterNode) {
        ut.info("Cluster identified XBX", l, t.width, r.node(l));
        const { ranksep: p, nodesep: E } = r.graph();
        t.graph.setGraph({
          ...t.graph.graph(),
          ranksep: p + 25,
          nodesep: E
        });
        const N = await A(
          y2,
          t.graph,
          n2,
          o,
          r.node(l),
          d
        ), x = N.elem;
        Dt(t, x), t.diff = N.diff || 0, ut.info(
          "New compound node after recursive render XAX",
          l,
          "width",
          // node,
          t.width,
          "height",
          t.height
          // node.x,
          // node.y
        ), _rt(x, t);
      } else
        r.children(l).length > 0 ? (ut.trace(
          "Cluster - the non recursive path XBX",
          l,
          t.id,
          t,
          t.width,
          "Graph:",
          r
        ), ut.trace(C(t.id, r)), s.set(t.id, { id: C(t.id, r), node: t })) : (ut.trace("Node - the non recursive path XAX", l, y2, r.node(l), c), await j8(y2, r.node(l), { config: d, dir: c }));
    })
  ), await _(async () => {
    const l = r.edges().map(async function(t) {
      const p = r.edge(t.v, t.w, t.name);
      ut.info("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(t)), ut.info("Edge " + t.v + " -> " + t.w + ": ", t, " ", JSON.stringify(r.edge(t))), ut.info(
        "Fix",
        s,
        "ids:",
        t.v,
        t.w,
        "Translating: ",
        s.get(t.v),
        s.get(t.w)
      ), await $K(m, p);
    });
    await Promise.all(l);
  }, "processEdges")(), ut.info("Graph before layout:", JSON.stringify(w(r))), ut.info("############################################# XXX"), ut.info("###                Layout                 ### XXX"), ut.info("############################################# XXX"), it(r), ut.info("Graph after layout:", JSON.stringify(w(r)));
  let v = 0, { subGraphTitleTotalMargin: S } = Om(d);
  return await Promise.all(
    ie(r).map(async function(l) {
      var _a;
      const t = r.node(l);
      if (ut.info(
        "Position XBX => " + l + ": (" + t.x,
        "," + t.y,
        ") width: ",
        t.width,
        " height: ",
        t.height
      ), t == null ? void 0 : t.clusterNode)
        t.y += S, ut.info(
          "A tainted cluster node XBX1",
          l,
          t.id,
          t.width,
          t.height,
          t.x,
          t.y,
          r.parent(l)
        ), s.get(t.id).node = t, Art(t);
      else if (r.children(l).length > 0) {
        ut.info(
          "A pure cluster node XBX1",
          l,
          t.id,
          t.x,
          t.y,
          t.width,
          t.height,
          r.parent(l)
        ), t.height += S, r.node(t.parentId);
        const p = (t == null ? void 0 : t.padding) / 2 || 0, E = ((_a = t == null ? void 0 : t.labelBBox) == null ? void 0 : _a.height) || 0, N = E - p || 0;
        ut.debug("OffsetY", N, "labelHeight", E, "halfPadding", p), await aK(u, t), s.get(t.id).node = t;
      } else {
        const p = r.node(t.parentId);
        t.y += S / 2, ut.info(
          "A regular node XBX1 - using the padding",
          t.id,
          "parent",
          t.parentId,
          t.width,
          t.height,
          t.x,
          t.y,
          "offsetY",
          t.offsetY,
          "parent",
          p,
          p == null ? void 0 : p.offsetY,
          t
        ), Art(t);
      }
    })
  ), r.edges().forEach(function(l) {
    const t = r.edge(l);
    ut.info("Edge " + l.v + " -> " + l.w + ": " + JSON.stringify(t), t), t.points.forEach((x) => x.y += S / 2);
    const p = r.node(l.v);
    var E = r.node(l.w);
    const N = DK(f, t, s, n2, p, E, o);
    EK(t, N);
  }), r.nodes().forEach(function(l) {
    const t = r.node(l);
    ut.info(l, t.type, t.diff), t.isGroup && (v = t.diff);
  }), ut.warn("Returning from recursive render XAX", g, v), { elem: g, diff: v };
}, "recursiveRender");
var ue = _(async (e, r) => {
  var _a, _b, _c, _d, _e, _f;
  const n2 = new y({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: e.direction,
    nodesep: ((_a = e.config) == null ? void 0 : _a.nodeSpacing) || ((_c = (_b = e.config) == null ? void 0 : _b.flowchart) == null ? void 0 : _c.nodeSpacing) || e.nodeSpacing,
    ranksep: ((_d = e.config) == null ? void 0 : _d.rankSpacing) || ((_f = (_e = e.config) == null ? void 0 : _e.flowchart) == null ? void 0 : _f.rankSpacing) || e.rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), o = r.select("g");
  ZK(o, e.markers, e.type, e.diagramId), Srt(), Trt(), Crt(), ne(), e.nodes.forEach((d) => {
    n2.setNode(d.id, { ...d }), d.parentId && n2.setParent(d.id, d.parentId);
  }), ut.debug("Edges:", e.edges), e.edges.forEach((d) => {
    if (d.start === d.end) {
      const c = d.start, g = c + "---" + c + "---1", u = c + "---" + c + "---2", f = n2.node(c);
      n2.setNode(g, {
        domId: g,
        id: g,
        parentId: f.parentId,
        labelStyle: "",
        label: "",
        padding: 0,
        shape: "labelRect",
        // shape: 'rect',
        style: "",
        width: 10,
        height: 10
      }), n2.setParent(g, f.parentId), n2.setNode(u, {
        domId: u,
        id: u,
        parentId: f.parentId,
        labelStyle: "",
        padding: 0,
        // shape: 'rect',
        shape: "labelRect",
        label: "",
        style: "",
        width: 10,
        height: 10
      }), n2.setParent(u, f.parentId);
      const m = structuredClone(d), y2 = structuredClone(d), v = structuredClone(d);
      m.label = "", m.arrowTypeEnd = "none", m.id = c + "-cyclic-special-1", y2.arrowTypeStart = "none", y2.arrowTypeEnd = "none", y2.id = c + "-cyclic-special-mid", v.label = "", f.isGroup && (m.fromCluster = c, v.toCluster = c), v.id = c + "-cyclic-special-2", v.arrowTypeStart = "none", n2.setEdge(c, g, m, c + "-cyclic-special-0"), n2.setEdge(g, u, y2, c + "-cyclic-special-1"), n2.setEdge(u, c, v, c + "-cyc<lic-special-2");
    } else
      n2.setEdge(d.start, d.end, { ...d }, d.id);
  }), ut.warn("Graph at first:", JSON.stringify(w(n2))), ae(n2), ut.warn("Graph after XAX:", JSON.stringify(w(n2)));
  const i = fe();
  await A(
    o,
    n2,
    e.type,
    e.diagramId,
    void 0,
    i
  );
}, "render");
export {
  ue as render
};
//# sourceMappingURL=dagre-JOIXM2OF-BDcDNPqP-izlDELjO-6Z267MOI.js.map
