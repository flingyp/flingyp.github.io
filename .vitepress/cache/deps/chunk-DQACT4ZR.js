import {
  y
} from "./chunk-WYPDDNJX.js";
import {
  F,
  R,
  ar,
  cr,
  er,
  fr,
  ir,
  lr,
  pr,
  sr,
  tr,
  vr
} from "./chunk-ROF5UXLT.js";
import {
  Aa,
  Er,
  M,
  Oa,
  Sa,
  U,
  _a,
  aa,
  ba,
  br,
  ia,
  ma,
  nt,
  wa,
  yr
} from "./chunk-F27AYW2L.js";
import {
  AX,
  DX,
  FX,
  NX,
  OX,
  TX,
  aX,
  ev,
  nv,
  pG,
  sg,
  uX,
  zu
} from "./chunk-G6K7VW2X.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/layout--clYxbM4-B10Pz2oi.js
function Un(n) {
  return DX(TX(n, void 0, er), n + "");
}
var Zn = 1;
var Wn = 4;
function Xn(n) {
  return U(n, Zn | Wn);
}
function nr(n, r) {
  return n == null ? n : pG(n, ba(r), ev);
}
function rr(n, r) {
  return n && ia(n, ba(r));
}
function er2(n, r) {
  return n > r;
}
function T(n, r) {
  var e = {};
  return r = Er(r), ia(n, function(t, o, i) {
    sg(e, o, r(t, o, i));
  }), e;
}
function y2(n) {
  return n && n.length ? ar(n, nv, er2) : void 0;
}
function J(n, r) {
  return n && n.length ? ar(n, Er(r), tr) : void 0;
}
function tr2(n, r) {
  var e = n.length;
  for (n.sort(r); e--; )
    n[e] = n[e].value;
  return n;
}
function or(n, r) {
  if (n !== r) {
    var e = n !== void 0, t = n === null, o = n === n, i = M(n), a = r !== void 0, u = r === null, d = r === r, c = M(r);
    if (!u && !c && !i && n > r || i && a && d && !u && !c || t && a && d || !e && d || !o)
      return 1;
    if (!t && !i && !c && n < r || c && e && o && !t && !i || u && e && o || !a && o || !d)
      return -1;
  }
  return 0;
}
function ir2(n, r, e) {
  for (var t = -1, o = n.criteria, i = r.criteria, a = o.length, u = e.length; ++t < a; ) {
    var d = or(o[t], i[t]);
    if (d) {
      if (t >= u)
        return d;
      var c = e[t];
      return d * (c == "desc" ? -1 : 1);
    }
  }
  return n.index - r.index;
}
function ar2(n, r, e) {
  r.length ? r = br(r, function(i) {
    return zu(i) ? function(a) {
      return yr(a, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [nv];
  var t = -1;
  r = br(r, aX(Er));
  var o = F(n, function(i, a, u) {
    var d = br(r, function(c) {
      return c(i);
    });
    return { criteria: d, index: ++t, value: i };
  });
  return tr2(o, function(i, a) {
    return ir2(i, a, e);
  });
}
function ur(n, r) {
  return pr(n, r, function(e, t) {
    return aa(n, t);
  });
}
var C = Un(function(n, r) {
  return n == null ? {} : ur(n, r);
});
var dr = Math.ceil;
var cr2 = Math.max;
function sr2(n, r, e, t) {
  for (var o = -1, i = cr2(dr((r - n) / (e || 1)), 0), a = Array(i); i--; )
    a[++o] = n, n += e;
  return a;
}
function fr2(n) {
  return function(r, e, t) {
    return t && typeof t != "number" && NX(r, e, t) && (e = t = void 0), r = R(r), e === void 0 ? (e = r, r = 0) : e = R(e), t = t === void 0 ? r < e ? 1 : -1 : R(t), sr2(r, e, t);
  };
}
var E = fr2();
var R2 = FX(function(n, r) {
  if (n == null)
    return [];
  var e = r.length;
  return e > 1 && NX(n, r[0], r[1]) ? r = [] : e > 2 && NX(r[0], r[1], r[2]) && (r = [r[0]]), ar2(n, wa(r), []);
});
var hr = 0;
function Q(n) {
  var r = ++hr;
  return nt(n) + r;
}
function gr(n, r, e) {
  for (var t = -1, o = n.length, i = r.length, a = {}; ++t < o; ) {
    var u = t < i ? r[t] : void 0;
    e(a, n[t], u);
  }
  return a;
}
function vr2(n, r) {
  return gr(n || [], r || [], uX);
}
var lr2 = class {
  constructor() {
    var r = {};
    r._next = r._prev = r, this._sentinel = r;
  }
  dequeue() {
    var r = this._sentinel, e = r._prev;
    if (e !== r)
      return rn(e), e;
  }
  enqueue(r) {
    var e = this._sentinel;
    r._prev && r._next && rn(r), r._next = e._next, e._next._prev = r, e._next = r, r._prev = e;
  }
  toString() {
    for (var r = [], e = this._sentinel, t = e._prev; t !== e; )
      r.push(JSON.stringify(t, pr2)), t = t._prev;
    return "[" + r.join(", ") + "]";
  }
};
function rn(n) {
  n._prev._next = n._next, n._next._prev = n._prev, delete n._next, delete n._prev;
}
function pr2(n, r) {
  if (n !== "_next" && n !== "_prev")
    return r;
}
var wr = AX(1);
function mr(n, r) {
  if (n.nodeCount() <= 1)
    return [];
  var e = yr2(n, r || wr), t = br2(e.graph, e.buckets, e.zeroIdx);
  return er(
    lr(t, function(o) {
      return n.outEdges(o.v, o.w);
    })
  );
}
function br2(n, r, e) {
  for (var t = [], o = r[r.length - 1], i = r[0], a; n.nodeCount(); ) {
    for (; a = i.dequeue(); )
      B(n, r, e, a);
    for (; a = o.dequeue(); )
      B(n, r, e, a);
    if (n.nodeCount()) {
      for (var u = r.length - 2; u > 0; --u)
        if (a = r[u].dequeue(), a) {
          t = t.concat(B(n, r, e, a, true));
          break;
        }
    }
  }
  return t;
}
function B(n, r, e, t, o) {
  var i = o ? [] : void 0;
  return _a(n.inEdges(t.v), function(a) {
    var u = n.edge(a), d = n.node(a.v);
    o && i.push({ v: a.v, w: a.w }), d.out -= u, D(r, e, d);
  }), _a(n.outEdges(t.v), function(a) {
    var u = n.edge(a), d = a.w, c = n.node(d);
    c.in -= u, D(r, e, c);
  }), n.removeNode(t.v), i;
}
function yr2(n, r) {
  var e = new y(), t = 0, o = 0;
  _a(n.nodes(), function(u) {
    e.setNode(u, { v: u, in: 0, out: 0 });
  }), _a(n.edges(), function(u) {
    var d = e.edge(u.v, u.w) || 0, c = r(u), f = d + c;
    e.setEdge(u.v, u.w, f), o = Math.max(o, e.node(u.v).out += c), t = Math.max(t, e.node(u.w).in += c);
  });
  var i = E(o + t + 3).map(function() {
    return new lr2();
  }), a = t + 1;
  return _a(e.nodes(), function(u) {
    D(i, a, e.node(u));
  }), { graph: e, buckets: i, zeroIdx: a };
}
function D(n, r, e) {
  e.out ? e.in ? n[e.out - e.in + r].enqueue(e) : n[n.length - 1].enqueue(e) : n[0].enqueue(e);
}
function kr(n) {
  var r = n.graph().acyclicer === "greedy" ? mr(n, e(n)) : xr(n);
  _a(r, function(t) {
    var o = n.edge(t);
    n.removeEdge(t), o.forwardName = t.name, o.reversed = true, n.setEdge(t.w, t.v, o, Q("rev"));
  });
  function e(t) {
    return function(o) {
      return t.edge(o).weight;
    };
  }
}
function xr(n) {
  var r = [], e = {}, t = {};
  function o(i) {
    Object.prototype.hasOwnProperty.call(t, i) || (t[i] = true, e[i] = true, _a(n.outEdges(i), function(a) {
      Object.prototype.hasOwnProperty.call(e, a.w) ? r.push(a) : o(a.w);
    }), delete e[i]);
  }
  return _a(n.nodes(), o), r;
}
function Er2(n) {
  _a(n.edges(), function(r) {
    var e = n.edge(r);
    if (e.reversed) {
      n.removeEdge(r);
      var t = e.forwardName;
      delete e.reversed, delete e.forwardName, n.setEdge(r.w, r.v, e, t);
    }
  });
}
function O(n, r, e, t) {
  var o;
  do
    o = Q(t);
  while (n.hasNode(o));
  return e.dummy = r, n.setNode(o, e), o;
}
function Nr(n) {
  var r = new y().setGraph(n.graph());
  return _a(n.nodes(), function(e) {
    r.setNode(e, n.node(e));
  }), _a(n.edges(), function(e) {
    var t = r.edge(e.v, e.w) || { weight: 0, minlen: 1 }, o = n.edge(e);
    r.setEdge(e.v, e.w, {
      weight: t.weight + o.weight,
      minlen: Math.max(t.minlen, o.minlen)
    });
  }), r;
}
function mn(n) {
  var r = new y({ multigraph: n.isMultigraph() }).setGraph(n.graph());
  return _a(n.nodes(), function(e) {
    n.children(e).length || r.setNode(e, n.node(e));
  }), _a(n.edges(), function(e) {
    r.setEdge(e, n.edge(e));
  }), r;
}
function en(n, r) {
  var e = n.x, t = n.y, o = r.x - e, i = r.y - t, a = n.width / 2, u = n.height / 2;
  if (!o && !i)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var d, c;
  return Math.abs(i) * a > Math.abs(o) * u ? (i < 0 && (u = -u), d = u * o / i, c = u) : (o < 0 && (a = -a), d = a, c = a * i / o), { x: e + d, y: t + c };
}
function $(n) {
  var r = lr(E(bn(n) + 1), function() {
    return [];
  });
  return _a(n.nodes(), function(e) {
    var t = n.node(e), o = t.rank;
    Oa(o) || (r[o][t.order] = e);
  }), r;
}
function Or(n) {
  var r = cr(
    lr(n.nodes(), function(e) {
      return n.node(e).rank;
    })
  );
  _a(n.nodes(), function(e) {
    var t = n.node(e);
    sr(t, "rank") && (t.rank -= r);
  });
}
function _r(n) {
  var r = cr(
    lr(n.nodes(), function(i) {
      return n.node(i).rank;
    })
  ), e = [];
  _a(n.nodes(), function(i) {
    var a = n.node(i).rank - r;
    e[a] || (e[a] = []), e[a].push(i);
  });
  var t = 0, o = n.graph().nodeRankFactor;
  _a(e, function(i, a) {
    Oa(i) && a % o !== 0 ? --t : t && _a(i, function(u) {
      n.node(u).rank += t;
    });
  });
}
function tn(n, r, e, t) {
  var o = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (o.rank = e, o.order = t), O(n, "border", o, r);
}
function bn(n) {
  return y2(
    lr(n.nodes(), function(r) {
      var e = n.node(r).rank;
      if (!Oa(e))
        return e;
    })
  );
}
function Ir(n, r) {
  var e = { lhs: [], rhs: [] };
  return _a(n, function(t) {
    r(t) ? e.lhs.push(t) : e.rhs.push(t);
  }), e;
}
function Pr(n, r) {
  return r();
}
function Lr(n) {
  function r(e) {
    var t = n.children(e), o = n.node(e);
    if (t.length && _a(t, r), Object.prototype.hasOwnProperty.call(o, "minRank")) {
      o.borderLeft = [], o.borderRight = [];
      for (var i = o.minRank, a = o.maxRank + 1; i < a; ++i)
        on(n, "borderLeft", "_bl", e, o, i), on(n, "borderRight", "_br", e, o, i);
    }
  }
  _a(n.children(), r);
}
function on(n, r, e, t, o, i) {
  var a = { width: 0, height: 0, rank: i, borderType: r }, u = o[r][i - 1], d = O(n, "border", a, e);
  o[r][i] = d, n.setParent(d, t), u && n.setEdge(u, d, { weight: 1 });
}
function Rr(n) {
  var r = n.graph().rankdir.toLowerCase();
  (r === "lr" || r === "rl") && yn(n);
}
function jr(n) {
  var r = n.graph().rankdir.toLowerCase();
  (r === "bt" || r === "rl") && Cr(n), (r === "lr" || r === "rl") && (Mr(n), yn(n));
}
function yn(n) {
  _a(n.nodes(), function(r) {
    an(n.node(r));
  }), _a(n.edges(), function(r) {
    an(n.edge(r));
  });
}
function an(n) {
  var r = n.width;
  n.width = n.height, n.height = r;
}
function Cr(n) {
  _a(n.nodes(), function(r) {
    F2(n.node(r));
  }), _a(n.edges(), function(r) {
    var e = n.edge(r);
    _a(e.points, F2), Object.prototype.hasOwnProperty.call(e, "y") && F2(e);
  });
}
function F2(n) {
  n.y = -n.y;
}
function Mr(n) {
  _a(n.nodes(), function(r) {
    G(n.node(r));
  }), _a(n.edges(), function(r) {
    var e = n.edge(r);
    _a(e.points, G), Object.prototype.hasOwnProperty.call(e, "x") && G(e);
  });
}
function G(n) {
  var r = n.x;
  n.x = n.y, n.y = r;
}
function Tr(n) {
  n.graph().dummyChains = [], _a(n.edges(), function(r) {
    $r(n, r);
  });
}
function $r(n, r) {
  var e = r.v, t = n.node(e).rank, o = r.w, i = n.node(o).rank, a = r.name, u = n.edge(r), d = u.labelRank;
  if (i !== t + 1) {
    n.removeEdge(r);
    var c = void 0, f, h;
    for (h = 0, ++t; t < i; ++h, ++t)
      u.points = [], c = {
        width: 0,
        height: 0,
        edgeLabel: u,
        edgeObj: r,
        rank: t
      }, f = O(n, "edge", c, "_d"), t === d && (c.width = u.width, c.height = u.height, c.dummy = "edge-label", c.labelpos = u.labelpos), n.setEdge(e, f, { weight: u.weight }, a), h === 0 && n.graph().dummyChains.push(f), e = f;
    n.setEdge(e, o, { weight: u.weight }, a);
  }
}
function Sr(n) {
  _a(n.graph().dummyChains, function(r) {
    var e = n.node(r), t = e.edgeLabel, o;
    for (n.setEdge(e.edgeObj, t); e.dummy; )
      o = n.successors(r)[0], n.removeNode(r), t.points.push({ x: e.x, y: e.y }), e.dummy === "edge-label" && (t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height), r = o, e = n.node(r);
  });
}
function U2(n) {
  var r = {};
  function e(t) {
    var o = n.node(t);
    if (Object.prototype.hasOwnProperty.call(r, t))
      return o.rank;
    r[t] = true;
    var i = cr(
      lr(n.outEdges(t), function(a) {
        return e(a.w) - n.edge(a).minlen;
      })
    );
    return (i === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    i === void 0 || // return value of _.map([]) for Lodash 4
    i === null) && (i = 0), o.rank = i;
  }
  _a(n.sources(), e);
}
function P(n, r) {
  return n.node(r.w).rank - n.node(r.v).rank - n.edge(r).minlen;
}
function kn(n) {
  var r = new y({ directed: false }), e = n.nodes()[0], t = n.nodeCount();
  r.setNode(e, {});
  for (var o, i; Vr(r, n) < t; )
    o = Br(r, n), i = r.hasNode(o.v) ? P(n, o) : -P(n, o), Fr(r, n, i);
  return r;
}
function Vr(n, r) {
  function e(t) {
    _a(r.nodeEdges(t), function(o) {
      var i = o.v, a = t === i ? o.w : i;
      !n.hasNode(a) && !P(r, o) && (n.setNode(a, {}), n.setEdge(t, a, {}), e(a));
    });
  }
  return _a(n.nodes(), e), n.nodeCount();
}
function Br(n, r) {
  return J(r.edges(), function(e) {
    if (n.hasNode(e.v) !== n.hasNode(e.w))
      return P(r, e);
  });
}
function Fr(n, r, e) {
  _a(n.nodes(), function(t) {
    r.node(t).rank += e;
  });
}
function xn(n, r, e) {
  zu(r) || (r = [r]);
  var t = (n.isDirected() ? n.successors : n.neighbors).bind(n), o = [], i = {};
  return _a(r, function(a) {
    if (!n.hasNode(a))
      throw new Error("Graph does not have node: " + a);
    En(n, a, e === "post", i, t, o);
  }), o;
}
function En(n, r, e, t, o, i) {
  Object.prototype.hasOwnProperty.call(t, r) || (t[r] = true, e || i.push(r), _a(o(r), function(a) {
    En(n, a, e, t, o, i);
  }), e && i.push(r));
}
function Gr(n, r) {
  return xn(n, r, "post");
}
function qr(n, r) {
  return xn(n, r, "pre");
}
k.initLowLimValues = W;
k.initCutValues = Z;
k.calcCutValue = Nn;
k.leaveEdge = _n;
k.enterEdge = In;
k.exchangeEdges = Pn;
function k(n) {
  n = Nr(n), U2(n);
  var r = kn(n);
  W(r), Z(r, n);
  for (var e, t; e = _n(r); )
    t = In(r, n, e), Pn(r, n, e, t);
}
function Z(n, r) {
  var e = Gr(n, n.nodes());
  e = e.slice(0, e.length - 1), _a(e, function(t) {
    Yr(n, r, t);
  });
}
function Yr(n, r, e) {
  var t = n.node(e), o = t.parent;
  n.edge(e, o).cutvalue = Nn(n, r, e);
}
function Nn(n, r, e) {
  var t = n.node(e), o = t.parent, i = true, a = r.edge(e, o), u = 0;
  return a || (i = false, a = r.edge(o, e)), u = a.weight, _a(r.nodeEdges(e), function(d) {
    var c = d.v === e, f = c ? d.w : d.v;
    if (f !== o) {
      var h = c === i, g = r.edge(d).weight;
      if (u += h ? g : -g, Ar(n, e, f)) {
        var v = n.edge(e, f).cutvalue;
        u += h ? -v : v;
      }
    }
  }), u;
}
function W(n, r) {
  arguments.length < 2 && (r = n.nodes()[0]), On(n, {}, 1, r);
}
function On(n, r, e, t, o) {
  var i = e, a = n.node(t);
  return r[t] = true, _a(n.neighbors(t), function(u) {
    Object.prototype.hasOwnProperty.call(r, u) || (e = On(n, r, e, u, t));
  }), a.low = i, a.lim = e++, o ? a.parent = o : delete a.parent, e;
}
function _n(n) {
  return vr(n.edges(), function(r) {
    return n.edge(r).cutvalue < 0;
  });
}
function In(n, r, e) {
  var t = e.v, o = e.w;
  r.hasEdge(t, o) || (t = e.w, o = e.v);
  var i = n.node(t), a = n.node(o), u = i, d = false;
  i.lim > a.lim && (u = a, d = true);
  var c = Aa(r.edges(), function(f) {
    return d === un(n, n.node(f.v), u) && d !== un(n, n.node(f.w), u);
  });
  return J(c, function(f) {
    return P(r, f);
  });
}
function Pn(n, r, e, t) {
  var o = e.v, i = e.w;
  n.removeEdge(o, i), n.setEdge(t.v, t.w, {}), W(n), Z(n, r), zr(n, r);
}
function zr(n, r) {
  var e = vr(n.nodes(), function(o) {
    return !r.node(o).parent;
  }), t = qr(n, e);
  t = t.slice(1), _a(t, function(o) {
    var i = n.node(o).parent, a = r.edge(o, i), u = false;
    a || (a = r.edge(i, o), u = true), r.node(o).rank = r.node(i).rank + (u ? a.minlen : -a.minlen);
  });
}
function Ar(n, r, e) {
  return n.hasEdge(r, e);
}
function un(n, r, e) {
  return e.low <= r.lim && r.lim <= e.lim;
}
function Dr(n) {
  switch (n.graph().ranker) {
    case "network-simplex":
      dn(n);
      break;
    case "tight-tree":
      Kr(n);
      break;
    case "longest-path":
      Hr(n);
      break;
    default:
      dn(n);
  }
}
var Hr = U2;
function Kr(n) {
  U2(n), kn(n);
}
function dn(n) {
  k(n);
}
function Jr(n) {
  var r = O(n, "root", {}, "_root"), e = Qr(n), t = y2(ma(e)) - 1, o = 2 * t + 1;
  n.graph().nestingRoot = r, _a(n.edges(), function(a) {
    n.edge(a).minlen *= o;
  });
  var i = Ur(n) + 1;
  _a(n.children(), function(a) {
    Ln(n, r, o, i, t, e, a);
  }), n.graph().nodeRankFactor = o;
}
function Ln(n, r, e, t, o, i, a) {
  var u = n.children(a);
  if (!u.length) {
    a !== r && n.setEdge(r, a, { weight: 0, minlen: e });
    return;
  }
  var d = tn(n, "_bt"), c = tn(n, "_bb"), f = n.node(a);
  n.setParent(d, a), f.borderTop = d, n.setParent(c, a), f.borderBottom = c, _a(u, function(h) {
    Ln(n, r, e, t, o, i, h);
    var g = n.node(h), v = g.borderTop ? g.borderTop : h, l = g.borderBottom ? g.borderBottom : h, w = g.borderTop ? t : 2 * t, _ = v !== l ? 1 : o - i[a] + 1;
    n.setEdge(d, v, {
      weight: w,
      minlen: _,
      nestingEdge: true
    }), n.setEdge(l, c, {
      weight: w,
      minlen: _,
      nestingEdge: true
    });
  }), n.parent(a) || n.setEdge(r, d, { weight: 0, minlen: o + i[a] });
}
function Qr(n) {
  var r = {};
  function e(t, o) {
    var i = n.children(t);
    i && i.length && _a(i, function(a) {
      e(a, o + 1);
    }), r[t] = o;
  }
  return _a(n.children(), function(t) {
    e(t, 1);
  }), r;
}
function Ur(n) {
  return Sa(
    n.edges(),
    function(r, e) {
      return r + n.edge(e).weight;
    },
    0
  );
}
function Zr(n) {
  var r = n.graph();
  n.removeNode(r.nestingRoot), delete r.nestingRoot, _a(n.edges(), function(e) {
    var t = n.edge(e);
    t.nestingEdge && n.removeEdge(e);
  });
}
function Wr(n, r, e) {
  var t = {}, o;
  _a(e, function(i) {
    for (var a = n.parent(i), u, d; a; ) {
      if (u = n.parent(a), u ? (d = t[u], t[u] = a) : (d = o, o = a), d && d !== a) {
        r.setEdge(d, a);
        return;
      }
      a = u;
    }
  });
}
function Xr(n, r, e) {
  var t = ne(n), o = new y({ compound: true }).setGraph({ root: t }).setDefaultNodeLabel(function(i) {
    return n.node(i);
  });
  return _a(n.nodes(), function(i) {
    var a = n.node(i), u = n.parent(i);
    (a.rank === r || a.minRank <= r && r <= a.maxRank) && (o.setNode(i), o.setParent(i, u || t), _a(n[e](i), function(d) {
      var c = d.v === i ? d.w : d.v, f = o.edge(c, i), h = Oa(f) ? 0 : f.weight;
      o.setEdge(c, i, { weight: n.edge(d).weight + h });
    }), Object.prototype.hasOwnProperty.call(a, "minRank") && o.setNode(i, {
      borderLeft: a.borderLeft[r],
      borderRight: a.borderRight[r]
    }));
  }), o;
}
function ne(n) {
  for (var r; n.hasNode(r = Q("_root")); ) ;
  return r;
}
function re(n, r) {
  for (var e = 0, t = 1; t < r.length; ++t)
    e += ee(n, r[t - 1], r[t]);
  return e;
}
function ee(n, r, e) {
  for (var t = vr2(
    e,
    lr(e, function(c, f) {
      return f;
    })
  ), o = er(
    lr(r, function(c) {
      return R2(
        lr(n.outEdges(c), function(f) {
          return { pos: t[f.w], weight: n.edge(f).weight };
        }),
        "pos"
      );
    })
  ), i = 1; i < e.length; ) i <<= 1;
  var a = 2 * i - 1;
  i -= 1;
  var u = lr(new Array(a), function() {
    return 0;
  }), d = 0;
  return _a(
    // @ts-expect-error
    o.forEach(function(c) {
      var f = c.pos + i;
      u[f] += c.weight;
      for (var h = 0; f > 0; )
        f % 2 && (h += u[f + 1]), f = f - 1 >> 1, u[f] += c.weight;
      d += c.weight * h;
    })
  ), d;
}
function te(n) {
  var r = {}, e = Aa(n.nodes(), function(u) {
    return !n.children(u).length;
  }), t = y2(
    lr(e, function(u) {
      return n.node(u).rank;
    })
  ), o = lr(E(t + 1), function() {
    return [];
  });
  function i(u) {
    if (!sr(r, u)) {
      r[u] = true;
      var d = n.node(u);
      o[d.rank].push(u), _a(n.successors(u), i);
    }
  }
  var a = R2(e, function(u) {
    return n.node(u).rank;
  });
  return _a(a, i), o;
}
function oe(n, r) {
  return lr(r, function(e) {
    var t = n.inEdges(e);
    if (t.length) {
      var o = Sa(
        t,
        function(i, a) {
          var u = n.edge(a), d = n.node(a.v);
          return {
            sum: i.sum + u.weight * d.order,
            weight: i.weight + u.weight
          };
        },
        { sum: 0, weight: 0 }
      );
      return {
        v: e,
        barycenter: o.sum / o.weight,
        weight: o.weight
      };
    } else
      return { v: e };
  });
}
function ie(n, r) {
  var e = {};
  _a(n, function(o, i) {
    var a = e[o.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [o.v],
      i
    };
    Oa(o.barycenter) || (a.barycenter = o.barycenter, a.weight = o.weight);
  }), _a(r.edges(), function(o) {
    var i = e[o.v], a = e[o.w];
    !Oa(i) && !Oa(a) && (a.indegree++, i.out.push(e[o.w]));
  });
  var t = Aa(e, function(o) {
    return !o.indegree;
  });
  return ae(t);
}
function ae(n) {
  var r = [];
  function e(i) {
    return function(a) {
      a.merged || (Oa(a.barycenter) || Oa(i.barycenter) || a.barycenter >= i.barycenter) && ue(i, a);
    };
  }
  function t(i) {
    return function(a) {
      a.in.push(i), --a.indegree === 0 && n.push(a);
    };
  }
  for (; n.length; ) {
    var o = n.pop();
    r.push(o), _a(o.in.reverse(), e(o)), _a(o.out, t(o));
  }
  return lr(
    Aa(r, function(i) {
      return !i.merged;
    }),
    function(i) {
      return C(i, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function ue(n, r) {
  var e = 0, t = 0;
  n.weight && (e += n.barycenter * n.weight, t += n.weight), r.weight && (e += r.barycenter * r.weight, t += r.weight), n.vs = r.vs.concat(n.vs), n.barycenter = e / t, n.weight = t, n.i = Math.min(r.i, n.i), r.merged = true;
}
function de(n, r) {
  var e = Ir(n, function(f) {
    return Object.prototype.hasOwnProperty.call(f, "barycenter");
  }), t = e.lhs, o = R2(e.rhs, function(f) {
    return -f.i;
  }), i = [], a = 0, u = 0, d = 0;
  t.sort(ce(!!r)), d = cn(i, o, d), _a(t, function(f) {
    d += f.vs.length, i.push(f.vs), a += f.barycenter * f.weight, u += f.weight, d = cn(i, o, d);
  });
  var c = { vs: er(i) };
  return u && (c.barycenter = a / u, c.weight = u), c;
}
function cn(n, r, e) {
  for (var t; r.length && (t = fr(r)).i <= e; )
    r.pop(), n.push(t.vs), e++;
  return e;
}
function ce(n) {
  return function(r, e) {
    return r.barycenter < e.barycenter ? -1 : r.barycenter > e.barycenter ? 1 : n ? e.i - r.i : r.i - e.i;
  };
}
function Rn(n, r, e, t) {
  var o = n.children(r), i = n.node(r), a = i ? i.borderLeft : void 0, u = i ? i.borderRight : void 0, d = {};
  a && (o = Aa(o, function(l) {
    return l !== a && l !== u;
  }));
  var c = oe(n, o);
  _a(c, function(l) {
    if (n.children(l.v).length) {
      var w = Rn(n, l.v, e, t);
      d[l.v] = w, Object.prototype.hasOwnProperty.call(w, "barycenter") && fe(l, w);
    }
  });
  var f = ie(c, e);
  se(f, d);
  var h = de(f, t);
  if (a && (h.vs = er([a, h.vs, u]), n.predecessors(a).length)) {
    var g = n.node(n.predecessors(a)[0]), v = n.node(n.predecessors(u)[0]);
    Object.prototype.hasOwnProperty.call(h, "barycenter") || (h.barycenter = 0, h.weight = 0), h.barycenter = (h.barycenter * h.weight + g.order + v.order) / (h.weight + 2), h.weight += 2;
  }
  return h;
}
function se(n, r) {
  _a(n, function(e) {
    e.vs = er(
      e.vs.map(function(t) {
        return r[t] ? r[t].vs : t;
      })
    );
  });
}
function fe(n, r) {
  Oa(n.barycenter) ? (n.barycenter = r.barycenter, n.weight = r.weight) : (n.barycenter = (n.barycenter * n.weight + r.barycenter * r.weight) / (n.weight + r.weight), n.weight += r.weight);
}
function he(n) {
  var r = bn(n), e = sn(n, E(1, r + 1), "inEdges"), t = sn(n, E(r - 1, -1, -1), "outEdges"), o = te(n);
  fn(n, o);
  for (var i = Number.POSITIVE_INFINITY, a, u = 0, d = 0; d < 4; ++u, ++d) {
    ge(u % 2 ? e : t, u % 4 >= 2), o = $(n);
    var c = re(n, o);
    c < i && (d = 0, a = Xn(o), i = c);
  }
  fn(n, a);
}
function sn(n, r, e) {
  return lr(r, function(t) {
    return Xr(n, t, e);
  });
}
function ge(n, r) {
  var e = new y();
  _a(n, function(t) {
    var o = t.graph().root, i = Rn(t, o, e, r);
    _a(i.vs, function(a, u) {
      t.node(a).order = u;
    }), Wr(t, e, i.vs);
  });
}
function fn(n, r) {
  _a(r, function(e) {
    _a(e, function(t, o) {
      n.node(t).order = o;
    });
  });
}
function ve(n) {
  var r = pe(n);
  _a(n.graph().dummyChains, function(e) {
    for (var t = n.node(e), o = t.edgeObj, i = le(n, r, o.v, o.w), a = i.path, u = i.lca, d = 0, c = a[d], f = true; e !== o.w; ) {
      if (t = n.node(e), f) {
        for (; (c = a[d]) !== u && n.node(c).maxRank < t.rank; )
          d++;
        c === u && (f = false);
      }
      if (!f) {
        for (; d < a.length - 1 && n.node(c = a[d + 1]).minRank <= t.rank; )
          d++;
        c = a[d];
      }
      n.setParent(e, c), e = n.successors(e)[0];
    }
  });
}
function le(n, r, e, t) {
  var o = [], i = [], a = Math.min(r[e].low, r[t].low), u = Math.max(r[e].lim, r[t].lim), d, c;
  d = e;
  do
    d = n.parent(d), o.push(d);
  while (d && (r[d].low > a || u > r[d].lim));
  for (c = d, d = t; (d = n.parent(d)) !== c; )
    i.push(d);
  return { path: o.concat(i.reverse()), lca: c };
}
function pe(n) {
  var r = {}, e = 0;
  function t(o) {
    var i = e;
    _a(n.children(o), t), r[o] = { low: i, lim: e++ };
  }
  return _a(n.children(), t), r;
}
function we(n, r) {
  var e = {};
  function t(o, i) {
    var a = 0, u = 0, d = o.length, c = fr(i);
    return _a(i, function(f, h) {
      var g = be(n, f), v = g ? n.node(g).order : d;
      (g || f === c) && (_a(i.slice(u, h + 1), function(l) {
        _a(n.predecessors(l), function(w) {
          var _ = n.node(w), X = _.order;
          (X < a || v < X) && !(_.dummy && n.node(l).dummy) && jn(e, w, l);
        });
      }), u = h + 1, a = v);
    }), i;
  }
  return Sa(r, t), e;
}
function me(n, r) {
  var e = {};
  function t(i, a, u, d, c) {
    var f;
    _a(E(a, u), function(h) {
      f = i[h], n.node(f).dummy && _a(n.predecessors(f), function(g) {
        var v = n.node(g);
        v.dummy && (v.order < d || v.order > c) && jn(e, g, f);
      });
    });
  }
  function o(i, a) {
    var u = -1, d, c = 0;
    return _a(a, function(f, h) {
      if (n.node(f).dummy === "border") {
        var g = n.predecessors(f);
        g.length && (d = n.node(g[0]).order, t(a, c, h, u, d), c = h, u = d);
      }
      t(a, c, a.length, d, i.length);
    }), a;
  }
  return Sa(r, o), e;
}
function be(n, r) {
  if (n.node(r).dummy)
    return vr(n.predecessors(r), function(e) {
      return n.node(e).dummy;
    });
}
function jn(n, r, e) {
  if (r > e) {
    var t = r;
    r = e, e = t;
  }
  var o = n[r];
  o || (n[r] = o = {}), o[e] = true;
}
function ye(n, r, e) {
  if (r > e) {
    var t = r;
    r = e, e = t;
  }
  return !!n[r] && Object.prototype.hasOwnProperty.call(n[r], e);
}
function ke(n, r, e, t) {
  var o = {}, i = {}, a = {};
  return _a(r, function(u) {
    _a(u, function(d, c) {
      o[d] = d, i[d] = d, a[d] = c;
    });
  }), _a(r, function(u) {
    var d = -1;
    _a(u, function(c) {
      var f = t(c);
      if (f.length) {
        f = R2(f, function(w) {
          return a[w];
        });
        for (var h = (f.length - 1) / 2, g = Math.floor(h), v = Math.ceil(h); g <= v; ++g) {
          var l = f[g];
          i[c] === c && d < a[l] && !ye(e, c, l) && (i[l] = c, i[c] = o[c] = o[l], d = a[l]);
        }
      }
    });
  }), { root: o, align: i };
}
function xe(n, r, e, t, o) {
  var i = {}, a = Ee(n, r, e, o), u = o ? "borderLeft" : "borderRight";
  function d(h, g) {
    for (var v = a.nodes(), l = v.pop(), w = {}; l; )
      w[l] ? h(l) : (w[l] = true, v.push(l), v = v.concat(g(l))), l = v.pop();
  }
  function c(h) {
    i[h] = a.inEdges(h).reduce(function(g, v) {
      return Math.max(g, i[v.v] + a.edge(v));
    }, 0);
  }
  function f(h) {
    var g = a.outEdges(h).reduce(function(l, w) {
      return Math.min(l, i[w.w] - a.edge(w));
    }, Number.POSITIVE_INFINITY), v = n.node(h);
    g !== Number.POSITIVE_INFINITY && v.borderType !== u && (i[h] = Math.max(i[h], g));
  }
  return d(c, a.predecessors.bind(a)), d(f, a.successors.bind(a)), _a(t, function(h) {
    i[h] = i[e[h]];
  }), i;
}
function Ee(n, r, e, t) {
  var o = new y(), i = n.graph(), a = Pe(i.nodesep, i.edgesep, t);
  return _a(r, function(u) {
    var d;
    _a(u, function(c) {
      var f = e[c];
      if (o.setNode(f), d) {
        var h = e[d], g = o.edge(h, f);
        o.setEdge(h, f, Math.max(a(n, c, d), g || 0));
      }
      d = c;
    });
  }), o;
}
function Ne(n, r) {
  return J(ma(r), function(e) {
    var t = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY;
    return nr(e, function(i, a) {
      var u = Le(n, a) / 2;
      t = Math.max(i + u, t), o = Math.min(i - u, o);
    }), t - o;
  });
}
function Oe(n, r) {
  var e = ma(r), t = cr(e), o = y2(e);
  _a(["u", "d"], function(i) {
    _a(["l", "r"], function(a) {
      var u = i + a, d = n[u], c;
      if (d !== r) {
        var f = ma(d);
        c = a === "l" ? t - cr(f) : o - y2(f), c && (n[u] = T(d, function(h) {
          return h + c;
        }));
      }
    });
  });
}
function _e(n, r) {
  return T(n.ul, function(e, t) {
    if (r)
      return n[r.toLowerCase()][t];
    var o = R2(lr(n, t));
    return (o[1] + o[2]) / 2;
  });
}
function Ie(n) {
  var r = $(n), e = OX(we(n, r), me(n, r)), t = {}, o;
  _a(["u", "d"], function(a) {
    o = a === "u" ? r : ma(r).reverse(), _a(["l", "r"], function(u) {
      u === "r" && (o = lr(o, function(h) {
        return ma(h).reverse();
      }));
      var d = (a === "u" ? n.predecessors : n.successors).bind(n), c = ke(n, o, e, d), f = xe(n, o, c.root, c.align, u === "r");
      u === "r" && (f = T(f, function(h) {
        return -h;
      })), t[a + u] = f;
    });
  });
  var i = Ne(n, t);
  return Oe(t, i), _e(t, n.graph().align);
}
function Pe(n, r, e) {
  return function(t, o, i) {
    var a = t.node(o), u = t.node(i), d = 0, c;
    if (d += a.width / 2, Object.prototype.hasOwnProperty.call(a, "labelpos"))
      switch (a.labelpos.toLowerCase()) {
        case "l":
          c = -a.width / 2;
          break;
        case "r":
          c = a.width / 2;
          break;
      }
    if (c && (d += e ? c : -c), c = 0, d += (a.dummy ? r : n) / 2, d += (u.dummy ? r : n) / 2, d += u.width / 2, Object.prototype.hasOwnProperty.call(u, "labelpos"))
      switch (u.labelpos.toLowerCase()) {
        case "l":
          c = u.width / 2;
          break;
        case "r":
          c = -u.width / 2;
          break;
      }
    return c && (d += e ? c : -c), c = 0, d;
  };
}
function Le(n, r) {
  return n.node(r).width;
}
function Re(n) {
  n = mn(n), je(n), rr(Ie(n), function(r, e) {
    n.node(e).x = r;
  });
}
function je(n) {
  var r = $(n), e = n.graph().ranksep, t = 0;
  _a(r, function(o) {
    var i = y2(
      lr(o, function(a) {
        return n.node(a).height;
      })
    );
    _a(o, function(a) {
      n.node(a).y = t + i / 2;
    }), t += i + e;
  });
}
function it(n, r) {
  var e = Pr;
  e("layout", () => {
    var t = e("  buildLayoutGraph", () => Ye(n));
    e("  runLayout", () => Ce(t, e)), e("  updateInputGraph", () => Me(n, t));
  });
}
function Ce(n, r) {
  r("    makeSpaceForEdgeLabels", () => ze(n)), r("    removeSelfEdges", () => We(n)), r("    acyclic", () => kr(n)), r("    nestingGraph.run", () => Jr(n)), r("    rank", () => Dr(mn(n))), r("    injectEdgeLabelProxies", () => Ae(n)), r("    removeEmptyRanks", () => _r(n)), r("    nestingGraph.cleanup", () => Zr(n)), r("    normalizeRanks", () => Or(n)), r("    assignRankMinMax", () => De(n)), r("    removeEdgeLabelProxies", () => He(n)), r("    normalize.run", () => Tr(n)), r("    parentDummyChains", () => ve(n)), r("    addBorderSegments", () => Lr(n)), r("    order", () => he(n)), r("    insertSelfEdges", () => Xe(n)), r("    adjustCoordinateSystem", () => Rr(n)), r("    position", () => Re(n)), r("    positionSelfEdges", () => nt2(n)), r("    removeBorderNodes", () => Ze(n)), r("    normalize.undo", () => Sr(n)), r("    fixupEdgeLabelCoords", () => Qe(n)), r("    undoCoordinateSystem", () => jr(n)), r("    translateGraph", () => Ke(n)), r("    assignNodeIntersects", () => Je(n)), r("    reversePoints", () => Ue(n)), r("    acyclic.undo", () => Er2(n));
}
function Me(n, r) {
  _a(n.nodes(), function(e) {
    var t = n.node(e), o = r.node(e);
    t && (t.x = o.x, t.y = o.y, r.children(e).length && (t.width = o.width, t.height = o.height));
  }), _a(n.edges(), function(e) {
    var t = n.edge(e), o = r.edge(e);
    t.points = o.points, Object.prototype.hasOwnProperty.call(o, "x") && (t.x = o.x, t.y = o.y);
  }), n.graph().width = r.graph().width, n.graph().height = r.graph().height;
}
var Te = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
var $e = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
var Se = ["acyclicer", "ranker", "rankdir", "align"];
var Ve = ["width", "height"];
var Be = { width: 0, height: 0 };
var Fe = ["minlen", "weight", "width", "height", "labeloffset"];
var Ge = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
};
var qe = ["labelpos"];
function Ye(n) {
  var r = new y({ multigraph: true, compound: true }), e = Y(n.graph());
  return r.setGraph(
    OX({}, $e, q(e, Te), C(e, Se))
  ), _a(n.nodes(), function(t) {
    var o = Y(n.node(t));
    r.setNode(t, ir(q(o, Ve), Be)), r.setParent(t, n.parent(t));
  }), _a(n.edges(), function(t) {
    var o = Y(n.edge(t));
    r.setEdge(
      t,
      OX({}, Ge, q(o, Fe), C(o, qe))
    );
  }), r;
}
function ze(n) {
  var r = n.graph();
  r.ranksep /= 2, _a(n.edges(), function(e) {
    var t = n.edge(e);
    t.minlen *= 2, t.labelpos.toLowerCase() !== "c" && (r.rankdir === "TB" || r.rankdir === "BT" ? t.width += t.labeloffset : t.height += t.labeloffset);
  });
}
function Ae(n) {
  _a(n.edges(), function(r) {
    var e = n.edge(r);
    if (e.width && e.height) {
      var t = n.node(r.v), o = n.node(r.w), i = { rank: (o.rank - t.rank) / 2 + t.rank, e: r };
      O(n, "edge-proxy", i, "_ep");
    }
  });
}
function De(n) {
  var r = 0;
  _a(n.nodes(), function(e) {
    var t = n.node(e);
    t.borderTop && (t.minRank = n.node(t.borderTop).rank, t.maxRank = n.node(t.borderBottom).rank, r = y2(r, t.maxRank));
  }), n.graph().maxRank = r;
}
function He(n) {
  _a(n.nodes(), function(r) {
    var e = n.node(r);
    e.dummy === "edge-proxy" && (n.edge(e.e).labelRank = e.rank, n.removeNode(r));
  });
}
function Ke(n) {
  var r = Number.POSITIVE_INFINITY, e = 0, t = Number.POSITIVE_INFINITY, o = 0, i = n.graph(), a = i.marginx || 0, u = i.marginy || 0;
  function d(c) {
    var f = c.x, h = c.y, g = c.width, v = c.height;
    r = Math.min(r, f - g / 2), e = Math.max(e, f + g / 2), t = Math.min(t, h - v / 2), o = Math.max(o, h + v / 2);
  }
  _a(n.nodes(), function(c) {
    d(n.node(c));
  }), _a(n.edges(), function(c) {
    var f = n.edge(c);
    Object.prototype.hasOwnProperty.call(f, "x") && d(f);
  }), r -= a, t -= u, _a(n.nodes(), function(c) {
    var f = n.node(c);
    f.x -= r, f.y -= t;
  }), _a(n.edges(), function(c) {
    var f = n.edge(c);
    _a(f.points, function(h) {
      h.x -= r, h.y -= t;
    }), Object.prototype.hasOwnProperty.call(f, "x") && (f.x -= r), Object.prototype.hasOwnProperty.call(f, "y") && (f.y -= t);
  }), i.width = e - r + a, i.height = o - t + u;
}
function Je(n) {
  _a(n.edges(), function(r) {
    var e = n.edge(r), t = n.node(r.v), o = n.node(r.w), i, a;
    e.points ? (i = e.points[0], a = e.points[e.points.length - 1]) : (e.points = [], i = o, a = t), e.points.unshift(en(t, i)), e.points.push(en(o, a));
  });
}
function Qe(n) {
  _a(n.edges(), function(r) {
    var e = n.edge(r);
    if (Object.prototype.hasOwnProperty.call(e, "x"))
      switch ((e.labelpos === "l" || e.labelpos === "r") && (e.width -= e.labeloffset), e.labelpos) {
        case "l":
          e.x -= e.width / 2 + e.labeloffset;
          break;
        case "r":
          e.x += e.width / 2 + e.labeloffset;
          break;
      }
  });
}
function Ue(n) {
  _a(n.edges(), function(r) {
    var e = n.edge(r);
    e.reversed && e.points.reverse();
  });
}
function Ze(n) {
  _a(n.nodes(), function(r) {
    if (n.children(r).length) {
      var e = n.node(r), t = n.node(e.borderTop), o = n.node(e.borderBottom), i = n.node(fr(e.borderLeft)), a = n.node(fr(e.borderRight));
      e.width = Math.abs(a.x - i.x), e.height = Math.abs(o.y - t.y), e.x = i.x + e.width / 2, e.y = t.y + e.height / 2;
    }
  }), _a(n.nodes(), function(r) {
    n.node(r).dummy === "border" && n.removeNode(r);
  });
}
function We(n) {
  _a(n.edges(), function(r) {
    if (r.v === r.w) {
      var e = n.node(r.v);
      e.selfEdges || (e.selfEdges = []), e.selfEdges.push({ e: r, label: n.edge(r) }), n.removeEdge(r);
    }
  });
}
function Xe(n) {
  var r = $(n);
  _a(r, function(e) {
    var t = 0;
    _a(e, function(o, i) {
      var a = n.node(o);
      a.order = i + t, _a(a.selfEdges, function(u) {
        O(
          n,
          "selfedge",
          {
            width: u.label.width,
            height: u.label.height,
            rank: a.rank,
            order: i + ++t,
            e: u.e,
            label: u.label
          },
          "_se"
        );
      }), delete a.selfEdges;
    });
  });
}
function nt2(n) {
  _a(n.nodes(), function(r) {
    var e = n.node(r);
    if (e.dummy === "selfedge") {
      var t = n.node(e.e.v), o = t.x + t.width / 2, i = t.y, a = e.x - o, u = t.height / 2;
      n.setEdge(e.e, e.label), n.removeNode(r), e.label.points = [
        { x: o + 2 * a / 3, y: i - u },
        { x: o + 5 * a / 6, y: i - u },
        { x: o + a, y: i },
        { x: o + 5 * a / 6, y: i + u },
        { x: o + 2 * a / 3, y: i + u }
      ], e.label.x = e.x, e.label.y = e.y;
    }
  });
}
function q(n, r) {
  return T(C(n, r), Number);
}
function Y(n) {
  var r = {};
  return _a(n, function(e, t) {
    r[t.toLowerCase()] = e;
  }), r;
}

export {
  it
};
//# sourceMappingURL=chunk-DQACT4ZR.js.map
