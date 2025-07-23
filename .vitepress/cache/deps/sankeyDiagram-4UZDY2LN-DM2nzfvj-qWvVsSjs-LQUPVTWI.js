import {
  g
} from "./chunk-YACWEKXT.js";
import "./chunk-N2GOZMTB.js";
import {
  FR,
  HR,
  PR,
  RR,
  WR,
  _,
  ae,
  fe,
  fo,
  hrt,
  jR,
  qR,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/sankeyDiagram-4UZDY2LN-DM2nzfvj-qWvVsSjs.js
function Pt(t) {
  for (var n = t.length / 6 | 0, r = new Array(n), a = 0; a < n; ) r[a] = "#" + t.slice(a * 6, ++a * 6);
  return r;
}
var Ct = Pt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ct(t, n) {
  let r;
  if (n === void 0)
    for (const a of t)
      a != null && (r < a || r === void 0 && a >= a) && (r = a);
  else {
    let a = -1;
    for (let c of t)
      (c = n(c, ++a, t)) != null && (r < c || r === void 0 && c >= c) && (r = c);
  }
  return r;
}
function dt(t, n) {
  let r;
  if (n === void 0)
    for (const a of t)
      a != null && (r > a || r === void 0 && a >= a) && (r = a);
  else {
    let a = -1;
    for (let c of t)
      (c = n(c, ++a, t)) != null && (r > c || r === void 0 && c >= c) && (r = c);
  }
  return r;
}
function tt(t, n) {
  let r = 0;
  if (n === void 0)
    for (let a of t)
      (a = +a) && (r += a);
  else {
    let a = -1;
    for (let c of t)
      (c = +n(c, ++a, t)) && (r += c);
  }
  return r;
}
function Nt(t) {
  return t.target.depth;
}
function Ot(t) {
  return t.depth;
}
function Dt(t, n) {
  return n - 1 - t.height;
}
function _t(t, n) {
  return t.sourceLinks.length ? t.depth : n - 1;
}
function It(t) {
  return t.targetLinks.length ? t.depth : t.sourceLinks.length ? dt(t.sourceLinks, Nt) - 1 : 0;
}
function B(t) {
  return function() {
    return t;
  };
}
function ht(t, n) {
  return Q(t.source, n.source) || t.index - n.index;
}
function ut(t, n) {
  return Q(t.target, n.target) || t.index - n.index;
}
function Q(t, n) {
  return t.y0 - n.y0;
}
function et(t) {
  return t.value;
}
function $t(t) {
  return t.index;
}
function jt(t) {
  return t.nodes;
}
function zt(t) {
  return t.links;
}
function ft(t, n) {
  const r = t.get(n);
  if (!r) throw new Error("missing: " + n);
  return r;
}
function yt({ nodes: t }) {
  for (const n of t) {
    let r = n.y0, a = r;
    for (const c of n.sourceLinks)
      c.y0 = r + c.width / 2, r += c.width;
    for (const c of n.targetLinks)
      c.y1 = a + c.width / 2, a += c.width;
  }
}
function Ft() {
  let t = 0, n = 0, r = 1, a = 1, c = 24, b = 8, _2, m = $t, i = _t, o, f, p = jt, y = zt, w = 6;
  function k() {
    const e = { nodes: p.apply(null, arguments), links: y.apply(null, arguments) };
    return C(e), A(e), T(e), D(e), N(e), yt(e), e;
  }
  k.update = function(e) {
    return yt(e), e;
  }, k.nodeId = function(e) {
    return arguments.length ? (m = typeof e == "function" ? e : B(e), k) : m;
  }, k.nodeAlign = function(e) {
    return arguments.length ? (i = typeof e == "function" ? e : B(e), k) : i;
  }, k.nodeSort = function(e) {
    return arguments.length ? (o = e, k) : o;
  }, k.nodeWidth = function(e) {
    return arguments.length ? (c = +e, k) : c;
  }, k.nodePadding = function(e) {
    return arguments.length ? (b = _2 = +e, k) : b;
  }, k.nodes = function(e) {
    return arguments.length ? (p = typeof e == "function" ? e : B(e), k) : p;
  }, k.links = function(e) {
    return arguments.length ? (y = typeof e == "function" ? e : B(e), k) : y;
  }, k.linkSort = function(e) {
    return arguments.length ? (f = e, k) : f;
  }, k.size = function(e) {
    return arguments.length ? (t = n = 0, r = +e[0], a = +e[1], k) : [r - t, a - n];
  }, k.extent = function(e) {
    return arguments.length ? (t = +e[0][0], r = +e[1][0], n = +e[0][1], a = +e[1][1], k) : [[t, n], [r, a]];
  }, k.iterations = function(e) {
    return arguments.length ? (w = +e, k) : w;
  };
  function C({ nodes: e, links: u }) {
    for (const [h, s] of e.entries())
      s.index = h, s.sourceLinks = [], s.targetLinks = [];
    const l = new Map(e.map((h, s) => [m(h, s, e), h]));
    for (const [h, s] of u.entries()) {
      s.index = h;
      let { source: x, target: v } = s;
      typeof x != "object" && (x = s.source = ft(l, x)), typeof v != "object" && (v = s.target = ft(l, v)), x.sourceLinks.push(s), v.targetLinks.push(s);
    }
    if (f != null)
      for (const { sourceLinks: h, targetLinks: s } of e)
        h.sort(f), s.sort(f);
  }
  function A({ nodes: e }) {
    for (const u of e)
      u.value = u.fixedValue === void 0 ? Math.max(tt(u.sourceLinks, et), tt(u.targetLinks, et)) : u.fixedValue;
  }
  function T({ nodes: e }) {
    const u = e.length;
    let l = new Set(e), h = /* @__PURE__ */ new Set(), s = 0;
    for (; l.size; ) {
      for (const x of l) {
        x.depth = s;
        for (const { target: v } of x.sourceLinks)
          h.add(v);
      }
      if (++s > u) throw new Error("circular link");
      l = h, h = /* @__PURE__ */ new Set();
    }
  }
  function D({ nodes: e }) {
    const u = e.length;
    let l = new Set(e), h = /* @__PURE__ */ new Set(), s = 0;
    for (; l.size; ) {
      for (const x of l) {
        x.height = s;
        for (const { source: v } of x.targetLinks)
          h.add(v);
      }
      if (++s > u) throw new Error("circular link");
      l = h, h = /* @__PURE__ */ new Set();
    }
  }
  function P({ nodes: e }) {
    const u = ct(e, (s) => s.depth) + 1, l = (r - t - c) / (u - 1), h = new Array(u);
    for (const s of e) {
      const x = Math.max(0, Math.min(u - 1, Math.floor(i.call(null, s, u))));
      s.layer = x, s.x0 = t + x * l, s.x1 = s.x0 + c, h[x] ? h[x].push(s) : h[x] = [s];
    }
    if (o) for (const s of h)
      s.sort(o);
    return h;
  }
  function S(e) {
    const u = dt(e, (l) => (a - n - (l.length - 1) * _2) / tt(l, et));
    for (const l of e) {
      let h = n;
      for (const s of l) {
        s.y0 = h, s.y1 = h + s.value * u, h = s.y1 + _2;
        for (const x of s.sourceLinks)
          x.width = x.value * u;
      }
      h = (a - h + _2) / (l.length + 1);
      for (let s = 0; s < l.length; ++s) {
        const x = l[s];
        x.y0 += h * (s + 1), x.y1 += h * (s + 1);
      }
      $(l);
    }
  }
  function N(e) {
    const u = P(e);
    _2 = Math.min(b, (a - n) / (ct(u, (l) => l.length) - 1)), S(u);
    for (let l = 0; l < w; ++l) {
      const h = Math.pow(0.99, l), s = Math.max(1 - h, (l + 1) / w);
      O(u, h, s), I(u, h, s);
    }
  }
  function I(e, u, l) {
    for (let h = 1, s = e.length; h < s; ++h) {
      const x = e[h];
      for (const v of x) {
        let W = 0, j = 0;
        for (const { source: q, value: H } of v.targetLinks) {
          let X = H * (v.layer - q.layer);
          W += M(q, v) * X, j += X;
        }
        if (!(j > 0)) continue;
        let V = (W / j - v.y0) * u;
        v.y0 += V, v.y1 += V, E(v);
      }
      o === void 0 && x.sort(Q), g2(x, l);
    }
  }
  function O(e, u, l) {
    for (let h = e.length, s = h - 2; s >= 0; --s) {
      const x = e[s];
      for (const v of x) {
        let W = 0, j = 0;
        for (const { target: q, value: H } of v.sourceLinks) {
          let X = H * (q.layer - v.layer);
          W += G(v, q) * X, j += X;
        }
        if (!(j > 0)) continue;
        let V = (W / j - v.y0) * u;
        v.y0 += V, v.y1 += V, E(v);
      }
      o === void 0 && x.sort(Q), g2(x, l);
    }
  }
  function g2(e, u) {
    const l = e.length >> 1, h = e[l];
    U(e, h.y0 - _2, l - 1, u), L(e, h.y1 + _2, l + 1, u), U(e, a, e.length - 1, u), L(e, n, 0, u);
  }
  function L(e, u, l, h) {
    for (; l < e.length; ++l) {
      const s = e[l], x = (u - s.y0) * h;
      x > 1e-6 && (s.y0 += x, s.y1 += x), u = s.y1 + _2;
    }
  }
  function U(e, u, l, h) {
    for (; l >= 0; --l) {
      const s = e[l], x = (s.y1 - u) * h;
      x > 1e-6 && (s.y0 -= x, s.y1 -= x), u = s.y0 - _2;
    }
  }
  function E({ sourceLinks: e, targetLinks: u }) {
    if (f === void 0) {
      for (const { source: { sourceLinks: l } } of u)
        l.sort(ut);
      for (const { target: { targetLinks: l } } of e)
        l.sort(ht);
    }
  }
  function $(e) {
    if (f === void 0)
      for (const { sourceLinks: u, targetLinks: l } of e)
        u.sort(ut), l.sort(ht);
  }
  function M(e, u) {
    let l = e.y0 - (e.sourceLinks.length - 1) * _2 / 2;
    for (const { target: h, width: s } of e.sourceLinks) {
      if (h === u) break;
      l += s + _2;
    }
    for (const { source: h, width: s } of u.targetLinks) {
      if (h === e) break;
      l -= s;
    }
    return l;
  }
  function G(e, u) {
    let l = u.y0 - (u.targetLinks.length - 1) * _2 / 2;
    for (const { source: h, width: s } of u.targetLinks) {
      if (h === e) break;
      l += s + _2;
    }
    for (const { target: h, width: s } of e.sourceLinks) {
      if (h === u) break;
      l -= s;
    }
    return l;
  }
  return k;
}
var rt = Math.PI;
var st = 2 * rt;
var z = 1e-6;
var Ut = st - z;
function ot() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function mt() {
  return new ot();
}
ot.prototype = mt.prototype = {
  constructor: ot,
  moveTo: function(t, n) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(t, n) {
    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
  },
  quadraticCurveTo: function(t, n, r, a) {
    this._ += "Q" + +t + "," + +n + "," + (this._x1 = +r) + "," + (this._y1 = +a);
  },
  bezierCurveTo: function(t, n, r, a, c, b) {
    this._ += "C" + +t + "," + +n + "," + +r + "," + +a + "," + (this._x1 = +c) + "," + (this._y1 = +b);
  },
  arcTo: function(t, n, r, a, c) {
    t = +t, n = +n, r = +r, a = +a, c = +c;
    var b = this._x1, _2 = this._y1, m = r - t, i = a - n, o = b - t, f = _2 - n, p = o * o + f * f;
    if (c < 0) throw new Error("negative radius: " + c);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
    else if (p > z) if (!(Math.abs(f * m - i * o) > z) || !c)
      this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
    else {
      var y = r - b, w = a - _2, k = m * m + i * i, C = y * y + w * w, A = Math.sqrt(k), T = Math.sqrt(p), D = c * Math.tan((rt - Math.acos((k + p - C) / (2 * A * T))) / 2), P = D / T, S = D / A;
      Math.abs(P - 1) > z && (this._ += "L" + (t + P * o) + "," + (n + P * f)), this._ += "A" + c + "," + c + ",0,0," + +(f * y > o * w) + "," + (this._x1 = t + S * m) + "," + (this._y1 = n + S * i);
    }
  },
  arc: function(t, n, r, a, c, b) {
    t = +t, n = +n, r = +r, b = !!b;
    var _2 = r * Math.cos(a), m = r * Math.sin(a), i = t + _2, o = n + m, f = 1 ^ b, p = b ? a - c : c - a;
    if (r < 0) throw new Error("negative radius: " + r);
    this._x1 === null ? this._ += "M" + i + "," + o : (Math.abs(this._x1 - i) > z || Math.abs(this._y1 - o) > z) && (this._ += "L" + i + "," + o), r && (p < 0 && (p = p % st + st), p > Ut ? this._ += "A" + r + "," + r + ",0,1," + f + "," + (t - _2) + "," + (n - m) + "A" + r + "," + r + ",0,1," + f + "," + (this._x1 = i) + "," + (this._y1 = o) : p > z && (this._ += "A" + r + "," + r + ",0," + +(p >= rt) + "," + f + "," + (this._x1 = t + r * Math.cos(c)) + "," + (this._y1 = n + r * Math.sin(c))));
  },
  rect: function(t, n, r, a) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +r + "v" + +a + "h" + -r + "Z";
  },
  toString: function() {
    return this._;
  }
};
function gt(t) {
  return function() {
    return t;
  };
}
function Gt(t) {
  return t[0];
}
function Wt(t) {
  return t[1];
}
var Vt = Array.prototype.slice;
function qt(t) {
  return t.source;
}
function Xt(t) {
  return t.target;
}
function Yt(t) {
  var n = qt, r = Xt, a = Gt, c = Wt, b = null;
  function _2() {
    var m, i = Vt.call(arguments), o = n.apply(this, i), f = r.apply(this, i);
    if (b || (b = m = mt()), t(b, +a.apply(this, (i[0] = o, i)), +c.apply(this, i), +a.apply(this, (i[0] = f, i)), +c.apply(this, i)), m) return b = null, m + "" || null;
  }
  return _2.source = function(m) {
    return arguments.length ? (n = m, _2) : n;
  }, _2.target = function(m) {
    return arguments.length ? (r = m, _2) : r;
  }, _2.x = function(m) {
    return arguments.length ? (a = typeof m == "function" ? m : gt(+m), _2) : a;
  }, _2.y = function(m) {
    return arguments.length ? (c = typeof m == "function" ? m : gt(+m), _2) : c;
  }, _2.context = function(m) {
    return arguments.length ? (b = m ?? null, _2) : b;
  }, _2;
}
function Bt(t, n, r, a, c) {
  t.moveTo(n, r), t.bezierCurveTo(n = (n + a) / 2, r, n, c, a, c);
}
function Qt() {
  return Yt(Bt);
}
function Rt(t) {
  return [t.source.x1, t.y0];
}
function Kt(t) {
  return [t.target.x0, t.y1];
}
function Zt() {
  return Qt().source(Rt).target(Kt);
}
var at = function() {
  var t = _(function(m, i, o, f) {
    for (o = o || {}, f = m.length; f--; o[m[f]] = i) ;
    return o;
  }, "o"), n = [1, 9], r = [1, 10], a = [1, 5, 10, 12], c = {
    trace: _(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, SANKEY: 4, NEWLINE: 5, csv: 6, opt_eof: 7, record: 8, csv_tail: 9, EOF: 10, "field[source]": 11, COMMA: 12, "field[target]": 13, "field[value]": 14, field: 15, escaped: 16, non_escaped: 17, DQUOTE: 18, ESCAPED_TEXT: 19, NON_ESCAPED_TEXT: 20, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SANKEY", 5: "NEWLINE", 10: "EOF", 11: "field[source]", 12: "COMMA", 13: "field[target]", 14: "field[value]", 18: "DQUOTE", 19: "ESCAPED_TEXT", 20: "NON_ESCAPED_TEXT" },
    productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]],
    performAction: _(function(m, i, o, f, p, y, w) {
      var k = y.length - 1;
      switch (p) {
        case 7:
          const C = f.findOrCreateNode(y[k - 4].trim().replaceAll('""', '"')), A = f.findOrCreateNode(y[k - 2].trim().replaceAll('""', '"')), T = parseFloat(y[k].trim());
          f.addLink(C, A, T);
          break;
        case 8:
        case 9:
        case 11:
          this.$ = y[k];
          break;
        case 10:
          this.$ = y[k - 1];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, { 5: [1, 3] }, { 6: 4, 8: 5, 15: 6, 16: 7, 17: 8, 18: n, 20: r }, { 1: [2, 6], 7: 11, 10: [1, 12] }, t(r, [2, 4], { 9: 13, 5: [1, 14] }), { 12: [1, 15] }, t(a, [2, 8]), t(a, [2, 9]), { 19: [1, 16] }, t(a, [2, 11]), { 1: [2, 1] }, { 1: [2, 5] }, t(r, [2, 2]), { 6: 17, 8: 5, 15: 6, 16: 7, 17: 8, 18: n, 20: r }, { 15: 18, 16: 7, 17: 8, 18: n, 20: r }, { 18: [1, 19] }, t(r, [2, 3]), { 12: [1, 20] }, t(a, [2, 10]), { 15: 21, 16: 7, 17: 8, 18: n, 20: r }, t([1, 5, 10], [2, 7])],
    defaultActions: { 11: [2, 1], 12: [2, 5] },
    parseError: _(function(m, i) {
      if (i.recoverable)
        this.trace(m);
      else {
        var o = new Error(m);
        throw o.hash = i, o;
      }
    }, "parseError"),
    parse: _(function(m) {
      var i = this, o = [0], f = [], p = [null], y = [], w = this.table, k = "", C = 0, A = 0, T = 2, D = 1, P = y.slice.call(arguments, 1), S = Object.create(this.lexer), N = { yy: {} };
      for (var I in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, I) && (N.yy[I] = this.yy[I]);
      S.setInput(m, N.yy), N.yy.lexer = S, N.yy.parser = this, typeof S.yylloc > "u" && (S.yylloc = {});
      var O = S.yylloc;
      y.push(O);
      var g2 = S.options && S.options.ranges;
      typeof N.yy.parseError == "function" ? this.parseError = N.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function L(v) {
        o.length = o.length - 2 * v, p.length = p.length - v, y.length = y.length - v;
      }
      _(L, "popStack");
      function U() {
        var v;
        return v = f.pop() || S.lex() || D, typeof v != "number" && (v instanceof Array && (f = v, v = f.pop()), v = i.symbols_[v] || v), v;
      }
      _(U, "lex");
      for (var E, $, M, G, e = {}, u, l, h, s; ; ) {
        if ($ = o[o.length - 1], this.defaultActions[$] ? M = this.defaultActions[$] : ((E === null || typeof E > "u") && (E = U()), M = w[$] && w[$][E]), typeof M > "u" || !M.length || !M[0]) {
          var x = "";
          s = [];
          for (u in w[$])
            this.terminals_[u] && u > T && s.push("'" + this.terminals_[u] + "'");
          S.showPosition ? x = "Parse error on line " + (C + 1) + `:
` + S.showPosition() + `
Expecting ` + s.join(", ") + ", got '" + (this.terminals_[E] || E) + "'" : x = "Parse error on line " + (C + 1) + ": Unexpected " + (E == D ? "end of input" : "'" + (this.terminals_[E] || E) + "'"), this.parseError(x, {
            text: S.match,
            token: this.terminals_[E] || E,
            line: S.yylineno,
            loc: O,
            expected: s
          });
        }
        if (M[0] instanceof Array && M.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + $ + ", token: " + E);
        switch (M[0]) {
          case 1:
            o.push(E), p.push(S.yytext), y.push(S.yylloc), o.push(M[1]), E = null, A = S.yyleng, k = S.yytext, C = S.yylineno, O = S.yylloc;
            break;
          case 2:
            if (l = this.productions_[M[1]][1], e.$ = p[p.length - l], e._$ = {
              first_line: y[y.length - (l || 1)].first_line,
              last_line: y[y.length - 1].last_line,
              first_column: y[y.length - (l || 1)].first_column,
              last_column: y[y.length - 1].last_column
            }, g2 && (e._$.range = [
              y[y.length - (l || 1)].range[0],
              y[y.length - 1].range[1]
            ]), G = this.performAction.apply(e, [
              k,
              A,
              C,
              N.yy,
              M[1],
              p,
              y
            ].concat(P)), typeof G < "u")
              return G;
            l && (o = o.slice(0, -1 * l * 2), p = p.slice(0, -1 * l), y = y.slice(0, -1 * l)), o.push(this.productions_[M[1]][0]), p.push(e.$), y.push(e._$), h = w[o[o.length - 2]][o[o.length - 1]], o.push(h);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, b = function() {
    var m = {
      EOF: 1,
      parseError: _(function(i, o) {
        if (this.yy.parser)
          this.yy.parser.parseError(i, o);
        else
          throw new Error(i);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: _(function(i, o) {
        return this.yy = o || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: _(function() {
        var i = this._input[0];
        this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
        var o = i.match(/(?:\r\n?|\n).*/g);
        return o ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: _(function(i) {
        var o = i.length, f = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - o), this.offset -= o;
        var p = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), f.length - 1 && (this.yylineno -= f.length - 1);
        var y = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: f ? (f.length === p.length ? this.yylloc.first_column : 0) + p[p.length - f.length].length - f[0].length : this.yylloc.first_column - o
        }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - o]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: _(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: _(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: _(function(i) {
        this.unput(this.match.slice(i));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: _(function() {
        var i = this.matched.substr(0, this.matched.length - this.match.length);
        return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: _(function() {
        var i = this.match;
        return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: _(function() {
        var i = this.pastInput(), o = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + o + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: _(function(i, o) {
        var f, p, y;
        if (this.options.backtrack_lexer && (y = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (y.yylloc.range = this.yylloc.range.slice(0))), p = i[0].match(/(?:\r\n?|\n).*/g), p && (this.yylineno += p.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i[0].length), this.matched += i[0], f = this.performAction.call(this, this.yy, this, o, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), f)
          return f;
        if (this._backtrack) {
          for (var w in y)
            this[w] = y[w];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: _(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i, o, f, p;
        this._more || (this.yytext = "", this.match = "");
        for (var y = this._currentRules(), w = 0; w < y.length; w++)
          if (f = this._input.match(this.rules[y[w]]), f && (!o || f[0].length > o[0].length)) {
            if (o = f, p = w, this.options.backtrack_lexer) {
              if (i = this.test_match(f, y[w]), i !== false)
                return i;
              if (this._backtrack) {
                o = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return o ? (i = this.test_match(o, y[p]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: _(function() {
        var i = this.next();
        return i || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: _(function(i) {
        this.conditionStack.push(i);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: _(function() {
        var i = this.conditionStack.length - 1;
        return i > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: _(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: _(function(i) {
        return i = this.conditionStack.length - 1 - Math.abs(i || 0), i >= 0 ? this.conditionStack[i] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: _(function(i) {
        this.begin(i);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: _(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: _(function(i, o, f, p) {
        switch (f) {
          case 0:
            return this.pushState("csv"), 4;
          case 1:
            return 10;
          case 2:
            return 5;
          case 3:
            return 12;
          case 4:
            return this.pushState("escaped_text"), 18;
          case 5:
            return 20;
          case 6:
            return this.popState("escaped_text"), 18;
          case 7:
            return 19;
        }
      }, "anonymous"),
      rules: [/^(?:sankey-beta\b)/i, /^(?:$)/i, /^(?:((\u000D\u000A)|(\u000A)))/i, /^(?:(\u002C))/i, /^(?:(\u0022))/i, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i, /^(?:(\u0022)(?!(\u0022)))/i, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],
      conditions: { csv: { rules: [1, 2, 3, 4, 5, 6, 7], inclusive: false }, escaped_text: { rules: [6, 7], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7], inclusive: true } }
    };
    return m;
  }();
  c.lexer = b;
  function _2() {
    this.yy = {};
  }
  return _(_2, "Parser"), _2.prototype = c, c.Parser = _2, new _2();
}();
at.parser = at;
var R = at;
var Z = [];
var J = [];
var K = /* @__PURE__ */ new Map();
var Jt = _(() => {
  Z = [], J = [], K = /* @__PURE__ */ new Map(), zR();
}, "clear");
var nt;
var Ht = (nt = class {
  constructor(t, n, r = 0) {
    this.source = t, this.target = n, this.value = r;
  }
}, _(nt, "SankeyLink"), nt);
var te = _((t, n, r) => {
  Z.push(new Ht(t, n, r));
}, "addLink");
var it;
var ee = (it = class {
  constructor(t) {
    this.ID = t;
  }
}, _(it, "SankeyNode"), it);
var ne = _((t) => {
  t = fo.sanitizeText(t, fe());
  let n = K.get(t);
  return n === void 0 && (n = new ee(t), K.set(t, n), J.push(n)), n;
}, "findOrCreateNode");
var ie = _(() => J, "getNodes");
var re = _(() => Z, "getLinks");
var se = _(() => ({
  nodes: J.map((t) => ({ id: t.ID })),
  links: Z.map((t) => ({
    source: t.source.ID,
    target: t.target.ID,
    value: t.value
  }))
}), "getGraph");
var oe = {
  nodesMap: K,
  getConfig: _(() => fe().sankey, "getConfig"),
  getNodes: ie,
  getLinks: re,
  getGraph: se,
  addLink: te,
  findOrCreateNode: ne,
  getAccTitle: RR,
  setAccTitle: qR,
  getAccDescription: jR,
  setAccDescription: PR,
  getDiagramTitle: HR,
  setDiagramTitle: WR,
  clear: Jt
};
var F;
var pt = (F = class {
  static next(t) {
    return new F(t + ++F.count);
  }
  constructor(t) {
    this.id = t, this.href = `#${t}`;
  }
  toString() {
    return "url(" + this.href + ")";
  }
}, _(F, "Uid"), F.count = 0, F);
var ae2 = {
  left: Ot,
  right: Dt,
  center: It,
  justify: _t
};
var le = _(function(t, n, r, a) {
  const { securityLevel: c, sankey: b } = fe(), _2 = hrt.sankey;
  let m;
  c === "sandbox" && (m = ae("#i" + n));
  const i = c === "sandbox" ? ae(m.nodes()[0].contentDocument.body) : ae("body"), o = c === "sandbox" ? i.select(`[id="${n}"]`) : ae(`[id="${n}"]`), f = (b == null ? void 0 : b.width) ?? _2.width, p = (b == null ? void 0 : b.height) ?? _2.width, y = (b == null ? void 0 : b.useMaxWidth) ?? _2.useMaxWidth, w = (b == null ? void 0 : b.nodeAlignment) ?? _2.nodeAlignment, k = (b == null ? void 0 : b.prefix) ?? _2.prefix, C = (b == null ? void 0 : b.suffix) ?? _2.suffix, A = (b == null ? void 0 : b.showValues) ?? _2.showValues, T = a.db.getGraph(), D = ae2[w];
  Ft().nodeId((g2) => g2.id).nodeWidth(10).nodePadding(10 + (A ? 15 : 0)).nodeAlign(D).extent([
    [0, 0],
    [f, p]
  ])(T);
  const P = g(Ct);
  o.append("g").attr("class", "nodes").selectAll(".node").data(T.nodes).join("g").attr("class", "node").attr("id", (g2) => (g2.uid = pt.next("node-")).id).attr("transform", function(g2) {
    return "translate(" + g2.x0 + "," + g2.y0 + ")";
  }).attr("x", (g2) => g2.x0).attr("y", (g2) => g2.y0).append("rect").attr("height", (g2) => g2.y1 - g2.y0).attr("width", (g2) => g2.x1 - g2.x0).attr("fill", (g2) => P(g2.id));
  const S = _(({ id: g2, value: L }) => A ? `${g2}
${k}${Math.round(L * 100) / 100}${C}` : g2, "getText");
  o.append("g").attr("class", "node-labels").attr("font-size", 14).selectAll("text").data(T.nodes).join("text").attr("x", (g2) => g2.x0 < f / 2 ? g2.x1 + 6 : g2.x0 - 6).attr("y", (g2) => (g2.y1 + g2.y0) / 2).attr("dy", `${A ? "0" : "0.35"}em`).attr("text-anchor", (g2) => g2.x0 < f / 2 ? "start" : "end").text(S);
  const N = o.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", 0.5).selectAll(".link").data(T.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply"), I = (b == null ? void 0 : b.linkColor) ?? "gradient";
  if (I === "gradient") {
    const g2 = N.append("linearGradient").attr("id", (L) => (L.uid = pt.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (L) => L.source.x1).attr("x2", (L) => L.target.x0);
    g2.append("stop").attr("offset", "0%").attr("stop-color", (L) => P(L.source.id)), g2.append("stop").attr("offset", "100%").attr("stop-color", (L) => P(L.target.id));
  }
  let O;
  switch (I) {
    case "gradient":
      O = _((g2) => g2.uid, "coloring");
      break;
    case "source":
      O = _((g2) => P(g2.source.id), "coloring");
      break;
    case "target":
      O = _((g2) => P(g2.target.id), "coloring");
      break;
    default:
      O = I;
  }
  N.append("path").attr("d", Zt()).attr("stroke", O).attr("stroke-width", (g2) => Math.max(1, g2.width)), FR(void 0, o, 0, y);
}, "draw");
var ce = {
  draw: le
};
var he = _((t) => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, `
`).trim(), "prepareTextForParsing");
var ue = _((t) => `.label {
      font-family: ${t.fontFamily};
    }`, "getStyles");
var fe2 = ue;
var ye = R.parse.bind(R);
R.parse = (t) => ye(he(t));
var de = {
  styles: fe2,
  parser: R,
  db: oe,
  renderer: ce
};
export {
  de as diagram
};
//# sourceMappingURL=sankeyDiagram-4UZDY2LN-DM2nzfvj-qWvVsSjs-LQUPVTWI.js.map
