import {
  I,
  et,
  it,
  ut,
  x
} from "./chunk-3XFQ3PJV.js";
import "./chunk-FNYQFTZX.js";
import {
  a
} from "./chunk-MWG22XKG.js";
import {
  CH,
  Dj,
  Qq,
  S,
  Ur,
  Xm,
  Xn,
  Xq,
  ae,
  ak,
  dP,
  fP,
  fc,
  gP,
  ga,
  hP,
  hk,
  hw,
  mP,
  me,
  pP,
  snt,
  uP,
  ut as ut2
} from "./chunk-G6K7VW2X.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/ganttDiagram-EK5VF46D-Ste5T71w-DbB2gGYT.js
function Kn(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let s of t)
      (s = e(s, ++r, t)) != null && (n < s || n === void 0 && s >= s) && (n = s);
  }
  return n;
}
function Jn(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let s of t)
      (s = e(s, ++r, t)) != null && (n > s || n === void 0 && s >= s) && (n = s);
  }
  return n;
}
function Qn(t) {
  return t;
}
var Nt = 1;
var re = 2;
var he = 3;
var jt = 4;
var He = 1e-6;
function Zn(t) {
  return "translate(" + t + ",0)";
}
function tr(t) {
  return "translate(0," + t + ")";
}
function er(t) {
  return (e) => +t(e);
}
function nr(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function rr() {
  return !this.__axis;
}
function an(t, e) {
  var n = [], r = null, s = null, a2 = 6, o = 6, m = 3, M = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = t === Nt || t === jt ? -1 : 1, y = t === jt || t === re ? "x" : "y", F = t === Nt || t === he ? Zn : tr;
  function b(x2) {
    var R = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), I2 = s ?? (e.tickFormat ? e.tickFormat.apply(e, n) : Qn), D = Math.max(a2, 0) + m, U = e.range(), P = +U[0] + M, E = +U[U.length - 1] + M, j = (e.bandwidth ? nr : er)(e.copy(), M), q = x2.selection ? x2.selection() : x2, w = q.selectAll(".domain").data([null]), O = q.selectAll(".tick").data(R, e).order(), T = O.exit(), $ = O.enter().append("g").attr("class", "tick"), S2 = O.select("line"), _ = O.select("text");
    w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), O = O.merge($), S2 = S2.merge($.append("line").attr("stroke", "currentColor").attr(y + "2", p * a2)), _ = _.merge($.append("text").attr("fill", "currentColor").attr(y, p * D).attr("dy", t === Nt ? "0em" : t === he ? "0.71em" : "0.32em")), x2 !== q && (w = w.transition(x2), O = O.transition(x2), S2 = S2.transition(x2), _ = _.transition(x2), T = T.transition(x2).attr("opacity", He).attr("transform", function(g) {
      return isFinite(g = j(g)) ? F(g + M) : this.getAttribute("transform");
    }), $.attr("opacity", He).attr("transform", function(g) {
      var C = this.parentNode.__axis;
      return F((C && isFinite(C = C(g)) ? C : j(g)) + M);
    })), T.remove(), w.attr("d", t === jt || t === re ? o ? "M" + p * o + "," + P + "H" + M + "V" + E + "H" + p * o : "M" + M + "," + P + "V" + E : o ? "M" + P + "," + p * o + "V" + M + "H" + E + "V" + p * o : "M" + P + "," + M + "H" + E), O.attr("opacity", 1).attr("transform", function(g) {
      return F(j(g) + M);
    }), S2.attr(y + "2", p * a2), _.attr(y, p * D).text(I2), q.filter(rr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === re ? "start" : t === jt ? "end" : "middle"), q.each(function() {
      this.__axis = j;
    });
  }
  return b.scale = function(x2) {
    return arguments.length ? (e = x2, b) : e;
  }, b.ticks = function() {
    return n = Array.from(arguments), b;
  }, b.tickArguments = function(x2) {
    return arguments.length ? (n = x2 == null ? [] : Array.from(x2), b) : n.slice();
  }, b.tickValues = function(x2) {
    return arguments.length ? (r = x2 == null ? null : Array.from(x2), b) : r && r.slice();
  }, b.tickFormat = function(x2) {
    return arguments.length ? (s = x2, b) : s;
  }, b.tickSize = function(x2) {
    return arguments.length ? (a2 = o = +x2, b) : a2;
  }, b.tickSizeInner = function(x2) {
    return arguments.length ? (a2 = +x2, b) : a2;
  }, b.tickSizeOuter = function(x2) {
    return arguments.length ? (o = +x2, b) : o;
  }, b.tickPadding = function(x2) {
    return arguments.length ? (m = +x2, b) : m;
  }, b.offset = function(x2) {
    return arguments.length ? (M = +x2, b) : M;
  }, b;
}
function ir(t) {
  return an(Nt, t);
}
function sr(t) {
  return an(he, t);
}
var ar = Math.PI / 180;
var or = 180 / Math.PI;
var Kt = 18;
var on = 0.96422;
var cn = 1;
var ln = 0.82521;
var un = 4 / 29;
var _t = 6 / 29;
var dn = 3 * _t * _t;
var cr = _t * _t * _t;
function fn(t) {
  if (t instanceof lt) return new lt(t.l, t.a, t.b, t.opacity);
  if (t instanceof dt) return hn(t);
  t instanceof Ur || (t = CH(t));
  var e = oe(t.r), n = oe(t.g), r = oe(t.b), s = ie((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / cn), a2, o;
  return e === n && n === r ? a2 = o = s : (a2 = ie((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / on), o = ie((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / ln)), new lt(116 * s - 16, 500 * (a2 - s), 200 * (s - o), t.opacity);
}
function lr(t, e, n, r) {
  return arguments.length === 1 ? fn(t) : new lt(t, e, n, r ?? 1);
}
function lt(t, e, n, r) {
  this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
}
Xm(lt, lr, ak(fc, {
  brighter(t) {
    return new lt(this.l + Kt * (t ?? 1), this.a, this.b, this.opacity);
  },
  darker(t) {
    return new lt(this.l - Kt * (t ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n = isNaN(this.b) ? t : t - this.b / 200;
    return e = on * se(e), t = cn * se(t), n = ln * se(n), new Ur(
      ae2(3.1338561 * e - 1.6168667 * t - 0.4906146 * n),
      ae2(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
      ae2(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
      this.opacity
    );
  }
}));
function ie(t) {
  return t > cr ? Math.pow(t, 1 / 3) : t / dn + un;
}
function se(t) {
  return t > _t ? t * t * t : dn * (t - un);
}
function ae2(t) {
  return 255 * (t <= 31308e-7 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function oe(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function ur(t) {
  if (t instanceof dt) return new dt(t.h, t.c, t.l, t.opacity);
  if (t instanceof lt || (t = fn(t)), t.a === 0 && t.b === 0) return new dt(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
  var e = Math.atan2(t.b, t.a) * or;
  return new dt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function ge(t, e, n, r) {
  return arguments.length === 1 ? ur(t) : new dt(t, e, n, r ?? 1);
}
function dt(t, e, n, r) {
  this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
}
function hn(t) {
  if (isNaN(t.h)) return new lt(t.l, 0, 0, t.opacity);
  var e = t.h * ar;
  return new lt(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
Xm(dt, ge, ak(fc, {
  brighter(t) {
    return new dt(this.h, this.c, this.l + Kt * (t ?? 1), this.opacity);
  },
  darker(t) {
    return new dt(this.h, this.c, this.l - Kt * (t ?? 1), this.opacity);
  },
  rgb() {
    return hn(this).rgb();
  }
}));
function dr(t) {
  return function(e, n) {
    var r = t((e = ge(e)).h, (n = ge(n)).h), s = hk(e.c, n.c), a2 = hk(e.l, n.l), o = hk(e.opacity, n.opacity);
    return function(m) {
      return e.h = r(m), e.c = s(m), e.l = a2(m), e.opacity = o(m), e + "";
    };
  };
}
var fr = dr(snt);
function hr(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, s = t[n], a2 = t[r], o;
  return a2 < s && (o = n, n = r, r = o, o = s, s = a2, a2 = o), t[n] = e.floor(s), t[r] = e.ceil(a2), t;
}
var ce = /* @__PURE__ */ new Date();
var le = /* @__PURE__ */ new Date();
function Z(t, e, n, r) {
  function s(a2) {
    return t(a2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a2)), a2;
  }
  return s.floor = (a2) => (t(a2 = /* @__PURE__ */ new Date(+a2)), a2), s.ceil = (a2) => (t(a2 = new Date(a2 - 1)), e(a2, 1), t(a2), a2), s.round = (a2) => {
    const o = s(a2), m = s.ceil(a2);
    return a2 - o < m - a2 ? o : m;
  }, s.offset = (a2, o) => (e(a2 = /* @__PURE__ */ new Date(+a2), o == null ? 1 : Math.floor(o)), a2), s.range = (a2, o, m) => {
    const M = [];
    if (a2 = s.ceil(a2), m = m == null ? 1 : Math.floor(m), !(a2 < o) || !(m > 0)) return M;
    let p;
    do
      M.push(p = /* @__PURE__ */ new Date(+a2)), e(a2, m), t(a2);
    while (p < a2 && a2 < o);
    return M;
  }, s.filter = (a2) => Z((o) => {
    if (o >= o) for (; t(o), !a2(o); ) o.setTime(o - 1);
  }, (o, m) => {
    if (o >= o)
      if (m < 0) for (; ++m <= 0; )
        for (; e(o, -1), !a2(o); )
          ;
      else for (; --m >= 0; )
        for (; e(o, 1), !a2(o); )
          ;
  }), n && (s.count = (a2, o) => (ce.setTime(+a2), le.setTime(+o), t(ce), t(le), Math.floor(n(ce, le))), s.every = (a2) => (a2 = Math.floor(a2), !isFinite(a2) || !(a2 > 0) ? null : a2 > 1 ? s.filter(r ? (o) => r(o) % a2 === 0 : (o) => s.count(0, o) % a2 === 0) : s)), s;
}
var $t = Z(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
$t.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? Z((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : $t);
$t.range;
var ft = 1e3;
var st = ft * 60;
var ht = st * 60;
var gt = ht * 24;
var we = gt * 7;
var We = gt * 30;
var ue = gt * 365;
var mt = Z((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * ft);
}, (t, e) => (e - t) / ft, (t) => t.getUTCSeconds());
mt.range;
var It = Z((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * ft);
}, (t, e) => {
  t.setTime(+t + e * st);
}, (t, e) => (e - t) / st, (t) => t.getMinutes());
It.range;
var gr = Z((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * st);
}, (t, e) => (e - t) / st, (t) => t.getUTCMinutes());
gr.range;
var Lt = Z((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * ft - t.getMinutes() * st);
}, (t, e) => {
  t.setTime(+t + e * ht);
}, (t, e) => (e - t) / ht, (t) => t.getHours());
Lt.range;
var yr = Z((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * ht);
}, (t, e) => (e - t) / ht, (t) => t.getUTCHours());
yr.range;
var Tt = Z(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * st) / gt,
  (t) => t.getDate() - 1
);
Tt.range;
var Ce = Z((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / gt, (t) => t.getUTCDate() - 1);
Ce.range;
var mr = Z((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / gt, (t) => Math.floor(t / gt));
mr.range;
function xt(t) {
  return Z((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * st) / we);
}
var Ot = xt(0);
var Ht = xt(1);
var gn = xt(2);
var yn = xt(3);
var vt = xt(4);
var mn = xt(5);
var pn = xt(6);
Ot.range;
Ht.range;
gn.range;
yn.range;
vt.range;
mn.range;
pn.range;
function wt(t) {
  return Z((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / we);
}
var kn = wt(0);
var Jt = wt(1);
var pr = wt(2);
var kr = wt(3);
var Yt = wt(4);
var Tr = wt(5);
var vr = wt(6);
kn.range;
Jt.range;
pr.range;
kr.range;
Yt.range;
Tr.range;
vr.range;
var Wt = Z((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
Wt.range;
var br = Z((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
br.range;
var yt = Z((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
yt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : Z((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
yt.range;
var bt = Z((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
bt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : Z((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
bt.range;
function xr(t, e, n, r, s, a2) {
  const o = [
    [mt, 1, ft],
    [mt, 5, 5 * ft],
    [mt, 15, 15 * ft],
    [mt, 30, 30 * ft],
    [a2, 1, st],
    [a2, 5, 5 * st],
    [a2, 15, 15 * st],
    [a2, 30, 30 * st],
    [s, 1, ht],
    [s, 3, 3 * ht],
    [s, 6, 6 * ht],
    [s, 12, 12 * ht],
    [r, 1, gt],
    [r, 2, 2 * gt],
    [n, 1, we],
    [e, 1, We],
    [e, 3, 3 * We],
    [t, 1, ue]
  ];
  function m(p, y, F) {
    const b = y < p;
    b && ([p, y] = [y, p]);
    const x2 = F && typeof F.range == "function" ? F : M(p, y, F), R = x2 ? x2.range(p, +y + 1) : [];
    return b ? R.reverse() : R;
  }
  function M(p, y, F) {
    const b = Math.abs(y - p) / F, x2 = x(([, , D]) => D).right(o, b);
    if (x2 === o.length) return t.every(I(p / ue, y / ue, F));
    if (x2 === 0) return $t.every(Math.max(I(p, y, F), 1));
    const [R, I2] = o[b / o[x2 - 1][2] < o[x2][2] / b ? x2 - 1 : x2];
    return R.every(I2);
  }
  return [m, M];
}
var [wr, Cr] = xr(yt, Wt, Ot, Tt, Lt, It);
function de(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function fe(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function At(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Dr(t) {
  var e = t.dateTime, n = t.date, r = t.time, s = t.periods, a2 = t.days, o = t.shortDays, m = t.months, M = t.shortMonths, p = Ut(s), y = Et(s), F = Ut(a2), b = Et(a2), x2 = Ut(o), R = Et(o), I2 = Ut(m), D = Et(m), U = Ut(M), P = Et(M), E = {
    a: Y,
    A: i,
    b: v,
    B: l,
    c: null,
    d: Ge,
    e: Ge,
    f: Rr,
    g: ii,
    G: ai,
    H: jr,
    I: Nr,
    j: Xr,
    L: Tn,
    m: qr,
    M: Kr,
    p: L,
    q: A,
    Q: Xe,
    s: Re,
    S: Jr,
    u: Qr,
    U: Zr,
    V: ti,
    w: ei,
    W: ni,
    x: null,
    X: null,
    y: ri,
    Y: si,
    Z: oi,
    "%": Ne
  }, j = {
    a: N,
    A: X,
    b: pt,
    B: K,
    c: null,
    d: je,
    e: je,
    f: di,
    g: bi,
    G: wi,
    H: ci,
    I: li,
    j: ui,
    L: bn,
    m: fi,
    M: hi,
    p: at,
    q: kt,
    Q: Xe,
    s: Re,
    S: gi,
    u: yi,
    U: mi,
    V: pi,
    w: ki,
    W: Ti,
    x: null,
    X: null,
    y: vi,
    Y: xi,
    Z: Ci,
    "%": Ne
  }, q = {
    a: S2,
    A: _,
    b: g,
    B: C,
    c,
    d: Be,
    e: Be,
    f: Pr,
    g: Pe,
    G: ze,
    H: Ve,
    I: Ve,
    j: Hr,
    L: zr,
    m: Lr,
    M: Wr,
    p: $,
    q: Ir,
    Q: Vr,
    s: Gr,
    S: Or,
    u: Yr,
    U: Fr,
    V: Ar,
    w: $r,
    W: Ur2,
    x: h,
    X: f,
    y: Pe,
    Y: ze,
    Z: Er,
    "%": Br
  };
  E.x = w(n, E), E.X = w(r, E), E.c = w(e, E), j.x = w(n, j), j.X = w(r, j), j.c = w(e, j);
  function w(k, H) {
    return function(z) {
      var u = [], B = -1, W = 0, G = k.length, J, tt, ot;
      for (z instanceof Date || (z = /* @__PURE__ */ new Date(+z)); ++B < G; )
        k.charCodeAt(B) === 37 && (u.push(k.slice(W, B)), (tt = Oe[J = k.charAt(++B)]) != null ? J = k.charAt(++B) : tt = J === "e" ? " " : "0", (ot = H[J]) && (J = ot(z, tt)), u.push(J), W = B + 1);
      return u.push(k.slice(W, B)), u.join("");
    };
  }
  function O(k, H) {
    return function(z) {
      var u = At(1900, void 0, 1), B = T(u, k, z += "", 0), W, G;
      if (B != z.length) return null;
      if ("Q" in u) return new Date(u.Q);
      if ("s" in u) return new Date(u.s * 1e3 + ("L" in u ? u.L : 0));
      if (H && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + u.p * 12), u.m === void 0 && (u.m = "q" in u ? u.q : 0), "V" in u) {
        if (u.V < 1 || u.V > 53) return null;
        "w" in u || (u.w = 1), "Z" in u ? (W = fe(At(u.y, 0, 1)), G = W.getUTCDay(), W = G > 4 || G === 0 ? Jt.ceil(W) : Jt(W), W = Ce.offset(W, (u.V - 1) * 7), u.y = W.getUTCFullYear(), u.m = W.getUTCMonth(), u.d = W.getUTCDate() + (u.w + 6) % 7) : (W = de(At(u.y, 0, 1)), G = W.getDay(), W = G > 4 || G === 0 ? Ht.ceil(W) : Ht(W), W = Tt.offset(W, (u.V - 1) * 7), u.y = W.getFullYear(), u.m = W.getMonth(), u.d = W.getDate() + (u.w + 6) % 7);
      } else ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), G = "Z" in u ? fe(At(u.y, 0, 1)).getUTCDay() : de(At(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + u.W * 7 - (G + 5) % 7 : u.w + u.U * 7 - (G + 6) % 7);
      return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, fe(u)) : de(u);
    };
  }
  function T(k, H, z, u) {
    for (var B = 0, W = H.length, G = z.length, J, tt; B < W; ) {
      if (u >= G) return -1;
      if (J = H.charCodeAt(B++), J === 37) {
        if (J = H.charAt(B++), tt = q[J in Oe ? H.charAt(B++) : J], !tt || (u = tt(k, z, u)) < 0) return -1;
      } else if (J != z.charCodeAt(u++))
        return -1;
    }
    return u;
  }
  function $(k, H, z) {
    var u = p.exec(H.slice(z));
    return u ? (k.p = y.get(u[0].toLowerCase()), z + u[0].length) : -1;
  }
  function S2(k, H, z) {
    var u = x2.exec(H.slice(z));
    return u ? (k.w = R.get(u[0].toLowerCase()), z + u[0].length) : -1;
  }
  function _(k, H, z) {
    var u = F.exec(H.slice(z));
    return u ? (k.w = b.get(u[0].toLowerCase()), z + u[0].length) : -1;
  }
  function g(k, H, z) {
    var u = U.exec(H.slice(z));
    return u ? (k.m = P.get(u[0].toLowerCase()), z + u[0].length) : -1;
  }
  function C(k, H, z) {
    var u = I2.exec(H.slice(z));
    return u ? (k.m = D.get(u[0].toLowerCase()), z + u[0].length) : -1;
  }
  function c(k, H, z) {
    return T(k, e, H, z);
  }
  function h(k, H, z) {
    return T(k, n, H, z);
  }
  function f(k, H, z) {
    return T(k, r, H, z);
  }
  function Y(k) {
    return o[k.getDay()];
  }
  function i(k) {
    return a2[k.getDay()];
  }
  function v(k) {
    return M[k.getMonth()];
  }
  function l(k) {
    return m[k.getMonth()];
  }
  function L(k) {
    return s[+(k.getHours() >= 12)];
  }
  function A(k) {
    return 1 + ~~(k.getMonth() / 3);
  }
  function N(k) {
    return o[k.getUTCDay()];
  }
  function X(k) {
    return a2[k.getUTCDay()];
  }
  function pt(k) {
    return M[k.getUTCMonth()];
  }
  function K(k) {
    return m[k.getUTCMonth()];
  }
  function at(k) {
    return s[+(k.getUTCHours() >= 12)];
  }
  function kt(k) {
    return 1 + ~~(k.getUTCMonth() / 3);
  }
  return {
    format: function(k) {
      var H = w(k += "", E);
      return H.toString = function() {
        return k;
      }, H;
    },
    parse: function(k) {
      var H = O(k += "", false);
      return H.toString = function() {
        return k;
      }, H;
    },
    utcFormat: function(k) {
      var H = w(k += "", j);
      return H.toString = function() {
        return k;
      }, H;
    },
    utcParse: function(k) {
      var H = O(k += "", true);
      return H.toString = function() {
        return k;
      }, H;
    }
  };
}
var Oe = { "-": "", _: " ", 0: "0" };
var et2 = /^\s*\d+/;
var Mr = /^%/;
var _r = /[\\^$*+?|[\]().{}]/g;
function V(t, e, n) {
  var r = t < 0 ? "-" : "", s = (r ? -t : t) + "", a2 = s.length;
  return r + (a2 < n ? new Array(n - a2 + 1).join(e) + s : s);
}
function Sr(t) {
  return t.replace(_r, "\\$&");
}
function Ut(t) {
  return new RegExp("^(?:" + t.map(Sr).join("|") + ")", "i");
}
function Et(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function $r(t, e, n) {
  var r = et2.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function Yr(t, e, n) {
  var r = et2.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function Fr(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function Ar(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function Ur2(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function ze(t, e, n) {
  var r = et2.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Pe(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Er(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Ir(t, e, n) {
  var r = et2.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Lr(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function Be(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Hr(t, e, n) {
  var r = et2.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function Ve(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Wr(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function Or(t, e, n) {
  var r = et2.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function zr(t, e, n) {
  var r = et2.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Pr(t, e, n) {
  var r = et2.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Br(t, e, n) {
  var r = Mr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Vr(t, e, n) {
  var r = et2.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function Gr(t, e, n) {
  var r = et2.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function Ge(t, e) {
  return V(t.getDate(), e, 2);
}
function jr(t, e) {
  return V(t.getHours(), e, 2);
}
function Nr(t, e) {
  return V(t.getHours() % 12 || 12, e, 2);
}
function Xr(t, e) {
  return V(1 + Tt.count(yt(t), t), e, 3);
}
function Tn(t, e) {
  return V(t.getMilliseconds(), e, 3);
}
function Rr(t, e) {
  return Tn(t, e) + "000";
}
function qr(t, e) {
  return V(t.getMonth() + 1, e, 2);
}
function Kr(t, e) {
  return V(t.getMinutes(), e, 2);
}
function Jr(t, e) {
  return V(t.getSeconds(), e, 2);
}
function Qr(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function Zr(t, e) {
  return V(Ot.count(yt(t) - 1, t), e, 2);
}
function vn(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? vt(t) : vt.ceil(t);
}
function ti(t, e) {
  return t = vn(t), V(vt.count(yt(t), t) + (yt(t).getDay() === 4), e, 2);
}
function ei(t) {
  return t.getDay();
}
function ni(t, e) {
  return V(Ht.count(yt(t) - 1, t), e, 2);
}
function ri(t, e) {
  return V(t.getFullYear() % 100, e, 2);
}
function ii(t, e) {
  return t = vn(t), V(t.getFullYear() % 100, e, 2);
}
function si(t, e) {
  return V(t.getFullYear() % 1e4, e, 4);
}
function ai(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? vt(t) : vt.ceil(t), V(t.getFullYear() % 1e4, e, 4);
}
function oi(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + V(e / 60 | 0, "0", 2) + V(e % 60, "0", 2);
}
function je(t, e) {
  return V(t.getUTCDate(), e, 2);
}
function ci(t, e) {
  return V(t.getUTCHours(), e, 2);
}
function li(t, e) {
  return V(t.getUTCHours() % 12 || 12, e, 2);
}
function ui(t, e) {
  return V(1 + Ce.count(bt(t), t), e, 3);
}
function bn(t, e) {
  return V(t.getUTCMilliseconds(), e, 3);
}
function di(t, e) {
  return bn(t, e) + "000";
}
function fi(t, e) {
  return V(t.getUTCMonth() + 1, e, 2);
}
function hi(t, e) {
  return V(t.getUTCMinutes(), e, 2);
}
function gi(t, e) {
  return V(t.getUTCSeconds(), e, 2);
}
function yi(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function mi(t, e) {
  return V(kn.count(bt(t) - 1, t), e, 2);
}
function xn(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? Yt(t) : Yt.ceil(t);
}
function pi(t, e) {
  return t = xn(t), V(Yt.count(bt(t), t) + (bt(t).getUTCDay() === 4), e, 2);
}
function ki(t) {
  return t.getUTCDay();
}
function Ti(t, e) {
  return V(Jt.count(bt(t) - 1, t), e, 2);
}
function vi(t, e) {
  return V(t.getUTCFullYear() % 100, e, 2);
}
function bi(t, e) {
  return t = xn(t), V(t.getUTCFullYear() % 100, e, 2);
}
function xi(t, e) {
  return V(t.getUTCFullYear() % 1e4, e, 4);
}
function wi(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? Yt(t) : Yt.ceil(t), V(t.getUTCFullYear() % 1e4, e, 4);
}
function Ci() {
  return "+0000";
}
function Ne() {
  return "%";
}
function Xe(t) {
  return +t;
}
function Re(t) {
  return Math.floor(+t / 1e3);
}
var Dt;
var Qt;
Di({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Di(t) {
  return Dt = Dr(t), Qt = Dt.format, Dt.parse, Dt.utcFormat, Dt.utcParse, Dt;
}
function Mi(t) {
  return new Date(t);
}
function _i(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function wn(t, e, n, r, s, a2, o, m, M, p) {
  var y = ut(), F = y.invert, b = y.domain, x2 = p(".%L"), R = p(":%S"), I2 = p("%I:%M"), D = p("%I %p"), U = p("%a %d"), P = p("%b %d"), E = p("%B"), j = p("%Y");
  function q(w) {
    return (M(w) < w ? x2 : m(w) < w ? R : o(w) < w ? I2 : a2(w) < w ? D : r(w) < w ? s(w) < w ? U : P : n(w) < w ? E : j)(w);
  }
  return y.invert = function(w) {
    return new Date(F(w));
  }, y.domain = function(w) {
    return arguments.length ? b(Array.from(w, _i)) : b().map(Mi);
  }, y.ticks = function(w) {
    var O = b();
    return t(O[0], O[O.length - 1], w ?? 10);
  }, y.tickFormat = function(w, O) {
    return O == null ? q : p(O);
  }, y.nice = function(w) {
    var O = b();
    return (!w || typeof w.range != "function") && (w = e(O[0], O[O.length - 1], w ?? 10)), w ? b(hr(O, w)) : y;
  }, y.copy = function() {
    return et(y, wn(t, e, n, r, s, a2, o, m, M, p));
  }, y;
}
function Si() {
  return a.apply(wn(wr, Cr, yt, Wt, Ot, Tt, Lt, It, mt, Qt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var ye = { exports: {} };
var $i = ye.exports;
var qe;
function Yi() {
  return qe || (qe = 1, function(t, e) {
    (function(n, r) {
      t.exports = r();
    })($i, function() {
      var n = "day";
      return function(r, s, a2) {
        var o = function(p) {
          return p.add(4 - p.isoWeekday(), n);
        }, m = s.prototype;
        m.isoWeekYear = function() {
          return o(this).year();
        }, m.isoWeek = function(p) {
          if (!this.$utils().u(p)) return this.add(7 * (p - this.isoWeek()), n);
          var y, F, b, x2, R = o(this), I2 = (y = this.isoWeekYear(), F = this.$u, b = (F ? a2.utc : a2)().year(y).startOf("year"), x2 = 4 - b.isoWeekday(), b.isoWeekday() > 4 && (x2 += 7), b.add(x2, n));
          return R.diff(I2, "week") + 1;
        }, m.isoWeekday = function(p) {
          return this.$utils().u(p) ? this.day() || 7 : this.day(this.day() % 7 ? p : p - 7);
        };
        var M = m.startOf;
        m.startOf = function(p, y) {
          var F = this.$utils(), b = !!F.u(y) || y;
          return F.p(p) === "isoweek" ? b ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : M.bind(this)(p, y);
        };
      };
    });
  }(ye)), ye.exports;
}
var Fi = Yi();
var Ai = Xq(Fi);
var me2 = { exports: {} };
var Ui = me2.exports;
var Ke;
function Ei() {
  return Ke || (Ke = 1, function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(Ui, function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, a2 = /\d\d/, o = /\d\d?/, m = /\d*[^-_:/,()\s\d]+/, M = {}, p = function(D) {
        return (D = +D) + (D > 68 ? 1900 : 2e3);
      }, y = function(D) {
        return function(U) {
          this[D] = +U;
        };
      }, F = [/[+-]\d\d:?(\d\d)?|Z/, function(D) {
        (this.zone || (this.zone = {})).offset = function(U) {
          if (!U || U === "Z") return 0;
          var P = U.match(/([+-]|\d\d)/g), E = 60 * P[1] + (+P[2] || 0);
          return E === 0 ? 0 : P[0] === "+" ? -E : E;
        }(D);
      }], b = function(D) {
        var U = M[D];
        return U && (U.indexOf ? U : U.s.concat(U.f));
      }, x2 = function(D, U) {
        var P, E = M.meridiem;
        if (E) {
          for (var j = 1; j <= 24; j += 1) if (D.indexOf(E(j, 0, U)) > -1) {
            P = j > 12;
            break;
          }
        } else P = D === (U ? "pm" : "PM");
        return P;
      }, R = { A: [m, function(D) {
        this.afternoon = x2(D, false);
      }], a: [m, function(D) {
        this.afternoon = x2(D, true);
      }], Q: [s, function(D) {
        this.month = 3 * (D - 1) + 1;
      }], S: [s, function(D) {
        this.milliseconds = 100 * +D;
      }], SS: [a2, function(D) {
        this.milliseconds = 10 * +D;
      }], SSS: [/\d{3}/, function(D) {
        this.milliseconds = +D;
      }], s: [o, y("seconds")], ss: [o, y("seconds")], m: [o, y("minutes")], mm: [o, y("minutes")], H: [o, y("hours")], h: [o, y("hours")], HH: [o, y("hours")], hh: [o, y("hours")], D: [o, y("day")], DD: [a2, y("day")], Do: [m, function(D) {
        var U = M.ordinal, P = D.match(/\d+/);
        if (this.day = P[0], U) for (var E = 1; E <= 31; E += 1) U(E).replace(/\[|\]/g, "") === D && (this.day = E);
      }], w: [o, y("week")], ww: [a2, y("week")], M: [o, y("month")], MM: [a2, y("month")], MMM: [m, function(D) {
        var U = b("months"), P = (b("monthsShort") || U.map(function(E) {
          return E.slice(0, 3);
        })).indexOf(D) + 1;
        if (P < 1) throw new Error();
        this.month = P % 12 || P;
      }], MMMM: [m, function(D) {
        var U = b("months").indexOf(D) + 1;
        if (U < 1) throw new Error();
        this.month = U % 12 || U;
      }], Y: [/[+-]?\d+/, y("year")], YY: [a2, function(D) {
        this.year = p(D);
      }], YYYY: [/\d{4}/, y("year")], Z: F, ZZ: F };
      function I2(D) {
        var U, P;
        U = D, P = M && M.formats;
        for (var E = (D = U.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(S2, _, g) {
          var C = g && g.toUpperCase();
          return _ || P[g] || n[g] || P[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(c, h, f) {
            return h || f.slice(1);
          });
        })).match(r), j = E.length, q = 0; q < j; q += 1) {
          var w = E[q], O = R[w], T = O && O[0], $ = O && O[1];
          E[q] = $ ? { regex: T, parser: $ } : w.replace(/^\[|\]$/g, "");
        }
        return function(S2) {
          for (var _ = {}, g = 0, C = 0; g < j; g += 1) {
            var c = E[g];
            if (typeof c == "string") C += c.length;
            else {
              var h = c.regex, f = c.parser, Y = S2.slice(C), i = h.exec(Y)[0];
              f.call(_, i), S2 = S2.replace(i, "");
            }
          }
          return function(v) {
            var l = v.afternoon;
            if (l !== void 0) {
              var L = v.hours;
              l ? L < 12 && (v.hours += 12) : L === 12 && (v.hours = 0), delete v.afternoon;
            }
          }(_), _;
        };
      }
      return function(D, U, P) {
        P.p.customParseFormat = true, D && D.parseTwoDigitYear && (p = D.parseTwoDigitYear);
        var E = U.prototype, j = E.parse;
        E.parse = function(q) {
          var w = q.date, O = q.utc, T = q.args;
          this.$u = O;
          var $ = T[1];
          if (typeof $ == "string") {
            var S2 = T[2] === true, _ = T[3] === true, g = S2 || _, C = T[2];
            _ && (C = T[2]), M = this.$locale(), !S2 && C && (M = P.Ls[C]), this.$d = function(Y, i, v, l) {
              try {
                if (["x", "X"].indexOf(i) > -1) return new Date((i === "X" ? 1e3 : 1) * Y);
                var L = I2(i)(Y), A = L.year, N = L.month, X = L.day, pt = L.hours, K = L.minutes, at = L.seconds, kt = L.milliseconds, k = L.zone, H = L.week, z = /* @__PURE__ */ new Date(), u = X || (A || N ? 1 : z.getDate()), B = A || z.getFullYear(), W = 0;
                A && !N || (W = N > 0 ? N - 1 : z.getMonth());
                var G, J = pt || 0, tt = K || 0, ot = at || 0, rt = kt || 0;
                return k ? new Date(Date.UTC(B, W, u, J, tt, ot, rt + 60 * k.offset * 1e3)) : v ? new Date(Date.UTC(B, W, u, J, tt, ot, rt)) : (G = new Date(B, W, u, J, tt, ot, rt), H && (G = l(G).week(H).toDate()), G);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(w, $, O, P), this.init(), C && C !== true && (this.$L = this.locale(C).$L), g && w != this.format($) && (this.$d = /* @__PURE__ */ new Date("")), M = {};
          } else if ($ instanceof Array) for (var c = $.length, h = 1; h <= c; h += 1) {
            T[1] = $[h - 1];
            var f = P.apply(this, T);
            if (f.isValid()) {
              this.$d = f.$d, this.$L = f.$L, this.init();
              break;
            }
            h === c && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else j.call(this, q);
        };
      };
    });
  }(me2)), me2.exports;
}
var Ii = Ei();
var Li = Xq(Ii);
var pe = { exports: {} };
var Hi = pe.exports;
var Je;
function Wi() {
  return Je || (Je = 1, function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(Hi, function() {
      return function(n, r) {
        var s = r.prototype, a2 = s.format;
        s.format = function(o) {
          var m = this, M = this.$locale();
          if (!this.isValid()) return a2.bind(this)(o);
          var p = this.$utils(), y = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(F) {
            switch (F) {
              case "Q":
                return Math.ceil((m.$M + 1) / 3);
              case "Do":
                return M.ordinal(m.$D);
              case "gggg":
                return m.weekYear();
              case "GGGG":
                return m.isoWeekYear();
              case "wo":
                return M.ordinal(m.week(), "W");
              case "w":
              case "ww":
                return p.s(m.week(), F === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return p.s(m.isoWeek(), F === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return p.s(String(m.$H === 0 ? 24 : m.$H), F === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(m.$d.getTime() / 1e3);
              case "x":
                return m.$d.getTime();
              case "z":
                return "[" + m.offsetName() + "]";
              case "zzz":
                return "[" + m.offsetName("long") + "]";
              default:
                return F;
            }
          });
          return a2.bind(this)(y);
        };
      };
    });
  }(pe)), pe.exports;
}
var Oi = Wi();
var zi = Xq(Oi);
var ke = function() {
  var t = S(function(C, c, h, f) {
    for (h = h || {}, f = C.length; f--; h[C[f]] = c) ;
    return h;
  }, "o"), e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40], n = [1, 26], r = [1, 27], s = [1, 28], a2 = [1, 29], o = [1, 30], m = [1, 31], M = [1, 32], p = [1, 33], y = [1, 34], F = [1, 9], b = [1, 10], x2 = [1, 11], R = [1, 12], I2 = [1, 13], D = [1, 14], U = [1, 15], P = [1, 16], E = [1, 19], j = [1, 20], q = [1, 21], w = [1, 22], O = [1, 23], T = [1, 25], $ = [1, 35], S2 = {
    trace: S(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, gantt: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NL: 10, weekday: 11, weekday_monday: 12, weekday_tuesday: 13, weekday_wednesday: 14, weekday_thursday: 15, weekday_friday: 16, weekday_saturday: 17, weekday_sunday: 18, weekend: 19, weekend_friday: 20, weekend_saturday: 21, dateFormat: 22, inclusiveEndDates: 23, topAxis: 24, axisFormat: 25, tickInterval: 26, excludes: 27, includes: 28, todayMarker: 29, title: 30, acc_title: 31, acc_title_value: 32, acc_descr: 33, acc_descr_value: 34, acc_descr_multiline_value: 35, section: 36, clickStatement: 37, taskTxt: 38, taskData: 39, click: 40, callbackname: 41, callbackargs: 42, href: 43, clickStatementDebug: 44, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "gantt", 6: "EOF", 8: "SPACE", 10: "NL", 12: "weekday_monday", 13: "weekday_tuesday", 14: "weekday_wednesday", 15: "weekday_thursday", 16: "weekday_friday", 17: "weekday_saturday", 18: "weekday_sunday", 20: "weekend_friday", 21: "weekend_saturday", 22: "dateFormat", 23: "inclusiveEndDates", 24: "topAxis", 25: "axisFormat", 26: "tickInterval", 27: "excludes", 28: "includes", 29: "todayMarker", 30: "title", 31: "acc_title", 32: "acc_title_value", 33: "acc_descr", 34: "acc_descr_value", 35: "acc_descr_multiline_value", 36: "section", 38: "taskTxt", 39: "taskData", 40: "click", 41: "callbackname", 42: "callbackargs", 43: "href" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [19, 1], [19, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [37, 2], [37, 3], [37, 3], [37, 4], [37, 3], [37, 4], [37, 2], [44, 2], [44, 3], [44, 3], [44, 4], [44, 3], [44, 4], [44, 2]],
    performAction: S(function(C, c, h, f, Y, i, v) {
      var l = i.length - 1;
      switch (Y) {
        case 1:
          return i[l - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          i[l - 1].push(i[l]), this.$ = i[l - 1];
          break;
        case 4:
        case 5:
          this.$ = i[l];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          f.setWeekday("monday");
          break;
        case 9:
          f.setWeekday("tuesday");
          break;
        case 10:
          f.setWeekday("wednesday");
          break;
        case 11:
          f.setWeekday("thursday");
          break;
        case 12:
          f.setWeekday("friday");
          break;
        case 13:
          f.setWeekday("saturday");
          break;
        case 14:
          f.setWeekday("sunday");
          break;
        case 15:
          f.setWeekend("friday");
          break;
        case 16:
          f.setWeekend("saturday");
          break;
        case 17:
          f.setDateFormat(i[l].substr(11)), this.$ = i[l].substr(11);
          break;
        case 18:
          f.enableInclusiveEndDates(), this.$ = i[l].substr(18);
          break;
        case 19:
          f.TopAxis(), this.$ = i[l].substr(8);
          break;
        case 20:
          f.setAxisFormat(i[l].substr(11)), this.$ = i[l].substr(11);
          break;
        case 21:
          f.setTickInterval(i[l].substr(13)), this.$ = i[l].substr(13);
          break;
        case 22:
          f.setExcludes(i[l].substr(9)), this.$ = i[l].substr(9);
          break;
        case 23:
          f.setIncludes(i[l].substr(9)), this.$ = i[l].substr(9);
          break;
        case 24:
          f.setTodayMarker(i[l].substr(12)), this.$ = i[l].substr(12);
          break;
        case 27:
          f.setDiagramTitle(i[l].substr(6)), this.$ = i[l].substr(6);
          break;
        case 28:
          this.$ = i[l].trim(), f.setAccTitle(this.$);
          break;
        case 29:
        case 30:
          this.$ = i[l].trim(), f.setAccDescription(this.$);
          break;
        case 31:
          f.addSection(i[l].substr(8)), this.$ = i[l].substr(8);
          break;
        case 33:
          f.addTask(i[l - 1], i[l]), this.$ = "task";
          break;
        case 34:
          this.$ = i[l - 1], f.setClickEvent(i[l - 1], i[l], null);
          break;
        case 35:
          this.$ = i[l - 2], f.setClickEvent(i[l - 2], i[l - 1], i[l]);
          break;
        case 36:
          this.$ = i[l - 2], f.setClickEvent(i[l - 2], i[l - 1], null), f.setLink(i[l - 2], i[l]);
          break;
        case 37:
          this.$ = i[l - 3], f.setClickEvent(i[l - 3], i[l - 2], i[l - 1]), f.setLink(i[l - 3], i[l]);
          break;
        case 38:
          this.$ = i[l - 2], f.setClickEvent(i[l - 2], i[l], null), f.setLink(i[l - 2], i[l - 1]);
          break;
        case 39:
          this.$ = i[l - 3], f.setClickEvent(i[l - 3], i[l - 1], i[l]), f.setLink(i[l - 3], i[l - 2]);
          break;
        case 40:
          this.$ = i[l - 1], f.setLink(i[l - 1], i[l]);
          break;
        case 41:
        case 47:
          this.$ = i[l - 1] + " " + i[l];
          break;
        case 42:
        case 43:
        case 45:
          this.$ = i[l - 2] + " " + i[l - 1] + " " + i[l];
          break;
        case 44:
        case 46:
          this.$ = i[l - 3] + " " + i[l - 2] + " " + i[l - 1] + " " + i[l];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: n, 13: r, 14: s, 15: a2, 16: o, 17: m, 18: M, 19: 18, 20: p, 21: y, 22: F, 23: b, 24: x2, 25: R, 26: I2, 27: D, 28: U, 29: P, 30: E, 31: j, 33: q, 35: w, 36: O, 37: 24, 38: T, 40: $ }, t(e, [2, 7], { 1: [2, 1] }), t(e, [2, 3]), { 9: 36, 11: 17, 12: n, 13: r, 14: s, 15: a2, 16: o, 17: m, 18: M, 19: 18, 20: p, 21: y, 22: F, 23: b, 24: x2, 25: R, 26: I2, 27: D, 28: U, 29: P, 30: E, 31: j, 33: q, 35: w, 36: O, 37: 24, 38: T, 40: $ }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 17]), t(e, [2, 18]), t(e, [2, 19]), t(e, [2, 20]), t(e, [2, 21]), t(e, [2, 22]), t(e, [2, 23]), t(e, [2, 24]), t(e, [2, 25]), t(e, [2, 26]), t(e, [2, 27]), { 32: [1, 37] }, { 34: [1, 38] }, t(e, [2, 30]), t(e, [2, 31]), t(e, [2, 32]), { 39: [1, 39] }, t(e, [2, 8]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 11]), t(e, [2, 12]), t(e, [2, 13]), t(e, [2, 14]), t(e, [2, 15]), t(e, [2, 16]), { 41: [1, 40], 43: [1, 41] }, t(e, [2, 4]), t(e, [2, 28]), t(e, [2, 29]), t(e, [2, 33]), t(e, [2, 34], { 42: [1, 42], 43: [1, 43] }), t(e, [2, 40], { 41: [1, 44] }), t(e, [2, 35], { 43: [1, 45] }), t(e, [2, 36]), t(e, [2, 38], { 42: [1, 46] }), t(e, [2, 37]), t(e, [2, 39])],
    defaultActions: {},
    parseError: S(function(C, c) {
      if (c.recoverable)
        this.trace(C);
      else {
        var h = new Error(C);
        throw h.hash = c, h;
      }
    }, "parseError"),
    parse: S(function(C) {
      var c = this, h = [0], f = [], Y = [null], i = [], v = this.table, l = "", L = 0, A = 0, N = 2, X = 1, pt = i.slice.call(arguments, 1), K = Object.create(this.lexer), at = { yy: {} };
      for (var kt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, kt) && (at.yy[kt] = this.yy[kt]);
      K.setInput(C, at.yy), at.yy.lexer = K, at.yy.parser = this, typeof K.yylloc > "u" && (K.yylloc = {});
      var k = K.yylloc;
      i.push(k);
      var H = K.options && K.options.ranges;
      typeof at.yy.parseError == "function" ? this.parseError = at.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function z(it2) {
        h.length = h.length - 2 * it2, Y.length = Y.length - it2, i.length = i.length - it2;
      }
      S(z, "popStack");
      function u() {
        var it2;
        return it2 = f.pop() || K.lex() || X, typeof it2 != "number" && (it2 instanceof Array && (f = it2, it2 = f.pop()), it2 = c.symbols_[it2] || it2), it2;
      }
      S(u, "lex");
      for (var B, W, G, J, tt = {}, ot, rt, Ie, Vt; ; ) {
        if (W = h[h.length - 1], this.defaultActions[W] ? G = this.defaultActions[W] : ((B === null || typeof B > "u") && (B = u()), G = v[W] && v[W][B]), typeof G > "u" || !G.length || !G[0]) {
          var ee = "";
          Vt = [];
          for (ot in v[W])
            this.terminals_[ot] && ot > N && Vt.push("'" + this.terminals_[ot] + "'");
          K.showPosition ? ee = "Parse error on line " + (L + 1) + `:
` + K.showPosition() + `
Expecting ` + Vt.join(", ") + ", got '" + (this.terminals_[B] || B) + "'" : ee = "Parse error on line " + (L + 1) + ": Unexpected " + (B == X ? "end of input" : "'" + (this.terminals_[B] || B) + "'"), this.parseError(ee, {
            text: K.match,
            token: this.terminals_[B] || B,
            line: K.yylineno,
            loc: k,
            expected: Vt
          });
        }
        if (G[0] instanceof Array && G.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + W + ", token: " + B);
        switch (G[0]) {
          case 1:
            h.push(B), Y.push(K.yytext), i.push(K.yylloc), h.push(G[1]), B = null, A = K.yyleng, l = K.yytext, L = K.yylineno, k = K.yylloc;
            break;
          case 2:
            if (rt = this.productions_[G[1]][1], tt.$ = Y[Y.length - rt], tt._$ = {
              first_line: i[i.length - (rt || 1)].first_line,
              last_line: i[i.length - 1].last_line,
              first_column: i[i.length - (rt || 1)].first_column,
              last_column: i[i.length - 1].last_column
            }, H && (tt._$.range = [
              i[i.length - (rt || 1)].range[0],
              i[i.length - 1].range[1]
            ]), J = this.performAction.apply(tt, [
              l,
              A,
              L,
              at.yy,
              G[1],
              Y,
              i
            ].concat(pt)), typeof J < "u")
              return J;
            rt && (h = h.slice(0, -1 * rt * 2), Y = Y.slice(0, -1 * rt), i = i.slice(0, -1 * rt)), h.push(this.productions_[G[1]][0]), Y.push(tt.$), i.push(tt._$), Ie = v[h[h.length - 2]][h[h.length - 1]], h.push(Ie);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, _ = function() {
    var C = {
      EOF: 1,
      parseError: S(function(c, h) {
        if (this.yy.parser)
          this.yy.parser.parseError(c, h);
        else
          throw new Error(c);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: S(function(c, h) {
        return this.yy = h || this.yy || {}, this._input = c, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: S(function() {
        var c = this._input[0];
        this.yytext += c, this.yyleng++, this.offset++, this.match += c, this.matched += c;
        var h = c.match(/(?:\r\n?|\n).*/g);
        return h ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), c;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: S(function(c) {
        var h = c.length, f = c.split(/(?:\r\n?|\n)/g);
        this._input = c + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - h), this.offset -= h;
        var Y = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), f.length - 1 && (this.yylineno -= f.length - 1);
        var i = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: f ? (f.length === Y.length ? this.yylloc.first_column : 0) + Y[Y.length - f.length].length - f[0].length : this.yylloc.first_column - h
        }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - h]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: S(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: S(function() {
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
      less: S(function(c) {
        this.unput(this.match.slice(c));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: S(function() {
        var c = this.matched.substr(0, this.matched.length - this.match.length);
        return (c.length > 20 ? "..." : "") + c.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: S(function() {
        var c = this.match;
        return c.length < 20 && (c += this._input.substr(0, 20 - c.length)), (c.substr(0, 20) + (c.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: S(function() {
        var c = this.pastInput(), h = new Array(c.length + 1).join("-");
        return c + this.upcomingInput() + `
` + h + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: S(function(c, h) {
        var f, Y, i;
        if (this.options.backtrack_lexer && (i = {
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
        }, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), Y = c[0].match(/(?:\r\n?|\n).*/g), Y && (this.yylineno += Y.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: Y ? Y[Y.length - 1].length - Y[Y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
        }, this.yytext += c[0], this.match += c[0], this.matches = c, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(c[0].length), this.matched += c[0], f = this.performAction.call(this, this.yy, this, h, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), f)
          return f;
        if (this._backtrack) {
          for (var v in i)
            this[v] = i[v];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: S(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var c, h, f, Y;
        this._more || (this.yytext = "", this.match = "");
        for (var i = this._currentRules(), v = 0; v < i.length; v++)
          if (f = this._input.match(this.rules[i[v]]), f && (!h || f[0].length > h[0].length)) {
            if (h = f, Y = v, this.options.backtrack_lexer) {
              if (c = this.test_match(f, i[v]), c !== false)
                return c;
              if (this._backtrack) {
                h = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return h ? (c = this.test_match(h, i[Y]), c !== false ? c : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: S(function() {
        var c = this.next();
        return c || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: S(function(c) {
        this.conditionStack.push(c);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: S(function() {
        var c = this.conditionStack.length - 1;
        return c > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: S(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: S(function(c) {
        return c = this.conditionStack.length - 1 - Math.abs(c || 0), c >= 0 ? this.conditionStack[c] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: S(function(c) {
        this.begin(c);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: S(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: S(function(c, h, f, Y) {
        switch (f) {
          case 0:
            return this.begin("open_directive"), "open_directive";
          case 1:
            return this.begin("acc_title"), 31;
          case 2:
            return this.popState(), "acc_title_value";
          case 3:
            return this.begin("acc_descr"), 33;
          case 4:
            return this.popState(), "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 10;
          case 12:
            break;
          case 13:
            break;
          case 14:
            this.begin("href");
            break;
          case 15:
            this.popState();
            break;
          case 16:
            return 43;
          case 17:
            this.begin("callbackname");
            break;
          case 18:
            this.popState();
            break;
          case 19:
            this.popState(), this.begin("callbackargs");
            break;
          case 20:
            return 41;
          case 21:
            this.popState();
            break;
          case 22:
            return 42;
          case 23:
            this.begin("click");
            break;
          case 24:
            this.popState();
            break;
          case 25:
            return 40;
          case 26:
            return 4;
          case 27:
            return 22;
          case 28:
            return 23;
          case 29:
            return 24;
          case 30:
            return 25;
          case 31:
            return 26;
          case 32:
            return 28;
          case 33:
            return 27;
          case 34:
            return 29;
          case 35:
            return 12;
          case 36:
            return 13;
          case 37:
            return 14;
          case 38:
            return 15;
          case 39:
            return 16;
          case 40:
            return 17;
          case 41:
            return 18;
          case 42:
            return 20;
          case 43:
            return 21;
          case 44:
            return "date";
          case 45:
            return 30;
          case 46:
            return "accDescription";
          case 47:
            return 36;
          case 48:
            return 38;
          case 49:
            return 39;
          case 50:
            return ":";
          case 51:
            return 6;
          case 52:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:weekend\s+friday\b)/i, /^(?:weekend\s+saturday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: false }, acc_descr: { rules: [4], inclusive: false }, acc_title: { rules: [2], inclusive: false }, callbackargs: { rules: [21, 22], inclusive: false }, callbackname: { rules: [18, 19, 20], inclusive: false }, href: { rules: [15, 16], inclusive: false }, click: { rules: [24, 25], inclusive: false }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], inclusive: true } }
    };
    return C;
  }();
  S2.lexer = _;
  function g() {
    this.yy = {};
  }
  return S(g, "Parser"), g.prototype = S2, S2.Parser = g, new g();
}();
ke.parser = ke;
var Pi = ke;
Qq.extend(Ai);
Qq.extend(Li);
Qq.extend(zi);
var Qe = { friday: 5, saturday: 6 };
var ct = "";
var De = "";
var Me = void 0;
var _e = "";
var zt = [];
var Pt = [];
var Se = /* @__PURE__ */ new Map();
var $e = [];
var Zt = [];
var Ft = "";
var Ye = "";
var Cn = ["active", "done", "crit", "milestone", "vert"];
var Fe = [];
var Bt = false;
var Ae = false;
var Ue = "sunday";
var te = "saturday";
var Te = 0;
var Bi = S(function() {
  $e = [], Zt = [], Ft = "", Fe = [], Xt = 0, be = void 0, Rt = void 0, Q = [], ct = "", De = "", Ye = "", Me = void 0, _e = "", zt = [], Pt = [], Bt = false, Ae = false, Te = 0, Se = /* @__PURE__ */ new Map(), hP(), Ue = "sunday", te = "saturday";
}, "clear");
var Vi = S(function(t) {
  De = t;
}, "setAxisFormat");
var Gi = S(function() {
  return De;
}, "getAxisFormat");
var ji = S(function(t) {
  Me = t;
}, "setTickInterval");
var Ni = S(function() {
  return Me;
}, "getTickInterval");
var Xi = S(function(t) {
  _e = t;
}, "setTodayMarker");
var Ri = S(function() {
  return _e;
}, "getTodayMarker");
var qi = S(function(t) {
  ct = t;
}, "setDateFormat");
var Ki = S(function() {
  Bt = true;
}, "enableInclusiveEndDates");
var Ji = S(function() {
  return Bt;
}, "endDatesAreInclusive");
var Qi = S(function() {
  Ae = true;
}, "enableTopAxis");
var Zi = S(function() {
  return Ae;
}, "topAxisEnabled");
var ts = S(function(t) {
  Ye = t;
}, "setDisplayMode");
var es = S(function() {
  return Ye;
}, "getDisplayMode");
var ns = S(function() {
  return ct;
}, "getDateFormat");
var rs = S(function(t) {
  zt = t.toLowerCase().split(/[\s,]+/);
}, "setIncludes");
var is = S(function() {
  return zt;
}, "getIncludes");
var ss = S(function(t) {
  Pt = t.toLowerCase().split(/[\s,]+/);
}, "setExcludes");
var as = S(function() {
  return Pt;
}, "getExcludes");
var os = S(function() {
  return Se;
}, "getLinks");
var cs = S(function(t) {
  Ft = t, $e.push(t);
}, "addSection");
var ls = S(function() {
  return $e;
}, "getSections");
var us = S(function() {
  let t = Ze();
  const e = 10;
  let n = 0;
  for (; !t && n < e; )
    t = Ze(), n++;
  return Zt = Q, Zt;
}, "getTasks");
var Dn = S(function(t, e, n, r) {
  return r.includes(t.format(e.trim())) ? false : n.includes("weekends") && (t.isoWeekday() === Qe[te] || t.isoWeekday() === Qe[te] + 1) || n.includes(t.format("dddd").toLowerCase()) ? true : n.includes(t.format(e.trim()));
}, "isInvalidDate");
var ds = S(function(t) {
  Ue = t;
}, "setWeekday");
var fs = S(function() {
  return Ue;
}, "getWeekday");
var hs = S(function(t) {
  te = t;
}, "setWeekend");
var Mn = S(function(t, e, n, r) {
  if (!n.length || t.manualEndTime)
    return;
  let s;
  t.startTime instanceof Date ? s = Qq(t.startTime) : s = Qq(t.startTime, e, true), s = s.add(1, "d");
  let a2;
  t.endTime instanceof Date ? a2 = Qq(t.endTime) : a2 = Qq(t.endTime, e, true);
  const [o, m] = gs(
    s,
    a2,
    e,
    n,
    r
  );
  t.endTime = o.toDate(), t.renderEndTime = m;
}, "checkTaskDates");
var gs = S(function(t, e, n, r, s) {
  let a2 = false, o = null;
  for (; t <= e; )
    a2 || (o = e.toDate()), a2 = Dn(t, n, r, s), a2 && (e = e.add(1, "d")), t = t.add(1, "d");
  return [e, o];
}, "fixTaskDates");
var ve = S(function(t, e, n) {
  n = n.trim();
  const r = /^after\s+(?<ids>[\d\w- ]+)/.exec(n);
  if (r !== null) {
    let a2 = null;
    for (const m of r.groups.ids.split(" ")) {
      let M = Ct(m);
      M !== void 0 && (!a2 || M.endTime > a2.endTime) && (a2 = M);
    }
    if (a2)
      return a2.endTime;
    const o = /* @__PURE__ */ new Date();
    return o.setHours(0, 0, 0, 0), o;
  }
  let s = Qq(n, e.trim(), true);
  if (s.isValid())
    return s.toDate();
  {
    ut2.debug("Invalid date:" + n), ut2.debug("With date format:" + e.trim());
    const a2 = new Date(n);
    if (a2 === void 0 || isNaN(a2.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    a2.getFullYear() < -1e4 || a2.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return a2;
  }
}, "getStartDate");
var _n = S(function(t) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, "parseDuration");
var Sn = S(function(t, e, n, r = false) {
  n = n.trim();
  const s = /^until\s+(?<ids>[\d\w- ]+)/.exec(n);
  if (s !== null) {
    let p = null;
    for (const F of s.groups.ids.split(" ")) {
      let b = Ct(F);
      b !== void 0 && (!p || b.startTime < p.startTime) && (p = b);
    }
    if (p)
      return p.startTime;
    const y = /* @__PURE__ */ new Date();
    return y.setHours(0, 0, 0, 0), y;
  }
  let a2 = Qq(n, e.trim(), true);
  if (a2.isValid())
    return r && (a2 = a2.add(1, "d")), a2.toDate();
  let o = Qq(t);
  const [m, M] = _n(n);
  if (!Number.isNaN(m)) {
    const p = o.add(m, M);
    p.isValid() && (o = p);
  }
  return o.toDate();
}, "getEndDate");
var Xt = 0;
var St = S(function(t) {
  return t === void 0 ? (Xt = Xt + 1, "task" + Xt) : t;
}, "parseId");
var ys = S(function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), s = {};
  Ee(r, s, Cn);
  for (let o = 0; o < r.length; o++)
    r[o] = r[o].trim();
  let a2 = "";
  switch (r.length) {
    case 1:
      s.id = St(), s.startTime = t.endTime, a2 = r[0];
      break;
    case 2:
      s.id = St(), s.startTime = ve(void 0, ct, r[0]), a2 = r[1];
      break;
    case 3:
      s.id = St(r[0]), s.startTime = ve(void 0, ct, r[1]), a2 = r[2];
      break;
  }
  return a2 && (s.endTime = Sn(s.startTime, ct, a2, Bt), s.manualEndTime = Qq(a2, "YYYY-MM-DD", true).isValid(), Mn(s, ct, Pt, zt)), s;
}, "compileData");
var ms = S(function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), s = {};
  Ee(r, s, Cn);
  for (let a2 = 0; a2 < r.length; a2++)
    r[a2] = r[a2].trim();
  switch (r.length) {
    case 1:
      s.id = St(), s.startTime = {
        type: "prevTaskEnd",
        id: t
      }, s.endTime = {
        data: r[0]
      };
      break;
    case 2:
      s.id = St(), s.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, s.endTime = {
        data: r[1]
      };
      break;
    case 3:
      s.id = St(r[0]), s.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, s.endTime = {
        data: r[2]
      };
      break;
  }
  return s;
}, "parseData");
var be;
var Rt;
var Q = [];
var $n = {};
var ps = S(function(t, e) {
  const n = {
    section: Ft,
    type: Ft,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t,
    classes: []
  }, r = ms(Rt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = Rt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.vert = r.vert, n.order = Te, Te++;
  const s = Q.push(n);
  Rt = n.id, $n[n.id] = s - 1;
}, "addTask");
var Ct = S(function(t) {
  const e = $n[t];
  return Q[e];
}, "findTaskById");
var ks = S(function(t, e) {
  const n = {
    section: Ft,
    type: Ft,
    description: t,
    task: t,
    classes: []
  }, r = ys(be, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.vert = r.vert, be = n, Zt.push(n);
}, "addTaskOrg");
var Ze = S(function() {
  const t = S(function(n) {
    const r = Q[n];
    let s = "";
    switch (Q[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const a2 = Ct(r.prevTaskId);
        r.startTime = a2.endTime;
        break;
      }
      case "getStartDate":
        s = ve(void 0, ct, Q[n].raw.startTime.startData), s && (Q[n].startTime = s);
        break;
    }
    return Q[n].startTime && (Q[n].endTime = Sn(
      Q[n].startTime,
      ct,
      Q[n].raw.endTime.data,
      Bt
    ), Q[n].endTime && (Q[n].processed = true, Q[n].manualEndTime = Qq(
      Q[n].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), Mn(Q[n], ct, Pt, zt))), Q[n].processed;
  }, "compileTask");
  let e = true;
  for (const [n, r] of Q.entries())
    t(n), e = e && r.processed;
  return e;
}, "compileTasks");
var Ts = S(function(t, e) {
  let n = e;
  me().securityLevel !== "loose" && (n = Dj.sanitizeUrl(e)), t.split(",").forEach(function(r) {
    Ct(r) !== void 0 && (Fn(r, () => {
      window.open(n, "_self");
    }), Se.set(r, n));
  }), Yn(t, "clickable");
}, "setLink");
var Yn = S(function(t, e) {
  t.split(",").forEach(function(n) {
    let r = Ct(n);
    r !== void 0 && r.classes.push(e);
  });
}, "setClass");
var vs = S(function(t, e, n) {
  if (me().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let s = 0; s < r.length; s++) {
      let a2 = r[s].trim();
      a2.startsWith('"') && a2.endsWith('"') && (a2 = a2.substr(1, a2.length - 2)), r[s] = a2;
    }
  }
  r.length === 0 && r.push(t), Ct(t) !== void 0 && Fn(t, () => {
    Xn.runFunc(e, ...r);
  });
}, "setClickFun");
var Fn = S(function(t, e) {
  Fe.push(
    function() {
      const n = document.querySelector(`[id="${t}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
}, "pushFun");
var bs = S(function(t, e, n) {
  t.split(",").forEach(function(r) {
    vs(r, e, n);
  }), Yn(t, "clickable");
}, "setClickEvent");
var xs = S(function(t) {
  Fe.forEach(function(e) {
    e(t);
  });
}, "bindFunctions");
var ws = {
  getConfig: S(() => me().gantt, "getConfig"),
  clear: Bi,
  setDateFormat: qi,
  getDateFormat: ns,
  enableInclusiveEndDates: Ki,
  endDatesAreInclusive: Ji,
  enableTopAxis: Qi,
  topAxisEnabled: Zi,
  setAxisFormat: Vi,
  getAxisFormat: Gi,
  setTickInterval: ji,
  getTickInterval: Ni,
  setTodayMarker: Xi,
  getTodayMarker: Ri,
  setAccTitle: uP,
  getAccTitle: dP,
  setDiagramTitle: mP,
  getDiagramTitle: gP,
  setDisplayMode: ts,
  getDisplayMode: es,
  setAccDescription: pP,
  getAccDescription: fP,
  addSection: cs,
  getSections: ls,
  getTasks: us,
  addTask: ps,
  findTaskById: Ct,
  addTaskOrg: ks,
  setIncludes: rs,
  getIncludes: is,
  setExcludes: ss,
  getExcludes: as,
  setClickEvent: bs,
  setLink: Ts,
  getLinks: os,
  bindFunctions: xs,
  parseDuration: _n,
  isInvalidDate: Dn,
  setWeekday: ds,
  getWeekday: fs,
  setWeekend: hs
};
function Ee(t, e, n) {
  let r = true;
  for (; r; )
    r = false, n.forEach(function(s) {
      const a2 = "^\\s*" + s + "\\s*$", o = new RegExp(a2);
      t[0].match(o) && (e[s] = true, t.shift(1), r = true);
    });
}
S(Ee, "getTaskTags");
var Cs = S(function() {
  ut2.debug("Something is calling, setConf, remove the call");
}, "setConf");
var tn = {
  monday: Ht,
  tuesday: gn,
  wednesday: yn,
  thursday: vt,
  friday: mn,
  saturday: pn,
  sunday: Ot
};
var Ds = S((t, e) => {
  let n = [...t].map(() => -1 / 0), r = [...t].sort((a2, o) => a2.startTime - o.startTime || a2.order - o.order), s = 0;
  for (const a2 of r)
    for (let o = 0; o < n.length; o++)
      if (a2.startTime >= n[o]) {
        n[o] = a2.endTime, a2.order = o + e, o > s && (s = o);
        break;
      }
  return s;
}, "getMaxIntersections");
var ut3;
var Ms = S(function(t, e, n, r) {
  const s = me().gantt, a2 = me().securityLevel;
  let o;
  a2 === "sandbox" && (o = ae("#i" + e));
  const m = a2 === "sandbox" ? ae(o.nodes()[0].contentDocument.body) : ae("body"), M = a2 === "sandbox" ? o.nodes()[0].contentDocument : document, p = M.getElementById(e);
  ut3 = p.parentElement.offsetWidth, ut3 === void 0 && (ut3 = 1200), s.useWidth !== void 0 && (ut3 = s.useWidth);
  const y = r.db.getTasks();
  let F = [];
  for (const T of y)
    F.push(T.type);
  F = O(F);
  const b = {};
  let x2 = 2 * s.topPadding;
  if (r.db.getDisplayMode() === "compact" || s.displayMode === "compact") {
    const T = {};
    for (const S2 of y)
      T[S2.section] === void 0 ? T[S2.section] = [S2] : T[S2.section].push(S2);
    let $ = 0;
    for (const S2 of Object.keys(T)) {
      const _ = Ds(T[S2], $) + 1;
      $ += _, x2 += _ * (s.barHeight + s.barGap), b[S2] = _;
    }
  } else {
    x2 += y.length * (s.barHeight + s.barGap);
    for (const T of F)
      b[T] = y.filter(($) => $.type === T).length;
  }
  p.setAttribute("viewBox", "0 0 " + ut3 + " " + x2);
  const R = m.select(`[id="${e}"]`), I2 = Si().domain([
    Jn(y, function(T) {
      return T.startTime;
    }),
    Kn(y, function(T) {
      return T.endTime;
    })
  ]).rangeRound([0, ut3 - s.leftPadding - s.rightPadding]);
  function D(T, $) {
    const S2 = T.startTime, _ = $.startTime;
    let g = 0;
    return S2 > _ ? g = 1 : S2 < _ && (g = -1), g;
  }
  S(D, "taskCompare"), y.sort(D), U(y, ut3, x2), hw(R, x2, ut3, s.useMaxWidth), R.append("text").text(r.db.getDiagramTitle()).attr("x", ut3 / 2).attr("y", s.titleTopMargin).attr("class", "titleText");
  function U(T, $, S2) {
    const _ = s.barHeight, g = _ + s.barGap, C = s.topPadding, c = s.leftPadding, h = it().domain([0, F.length]).range(["#00B9FA", "#F95002"]).interpolate(fr);
    E(
      g,
      C,
      c,
      $,
      S2,
      T,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), j(c, C, $, S2), P(T, g, C, c, _, h, $), q(g, C), w(c, C, $, S2);
  }
  S(U, "makeGantt");
  function P(T, $, S2, _, g, C, c) {
    T.sort((i, v) => i.vert === v.vert ? 0 : i.vert ? 1 : -1);
    const h = [...new Set(T.map((i) => i.order))].map((i) => T.find((v) => v.order === i));
    R.append("g").selectAll("rect").data(h).enter().append("rect").attr("x", 0).attr("y", function(i, v) {
      return v = i.order, v * $ + S2 - 2;
    }).attr("width", function() {
      return c - s.rightPadding / 2;
    }).attr("height", $).attr("class", function(i) {
      for (const [v, l] of F.entries())
        if (i.type === l)
          return "section section" + v % s.numberSectionStyles;
      return "section section0";
    }).enter();
    const f = R.append("g").selectAll("rect").data(T).enter(), Y = r.db.getLinks();
    if (f.append("rect").attr("id", function(i) {
      return i.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(i) {
      return i.milestone ? I2(i.startTime) + _ + 0.5 * (I2(i.endTime) - I2(i.startTime)) - 0.5 * g : I2(i.startTime) + _;
    }).attr("y", function(i, v) {
      return v = i.order, i.vert ? s.gridLineStartPadding : v * $ + S2;
    }).attr("width", function(i) {
      return i.milestone ? g : i.vert ? 0.08 * g : I2(i.renderEndTime || i.endTime) - I2(i.startTime);
    }).attr("height", function(i) {
      return i.vert ? y.length * (s.barHeight + s.barGap) + s.barHeight * 2 : g;
    }).attr("transform-origin", function(i, v) {
      return v = i.order, (I2(i.startTime) + _ + 0.5 * (I2(i.endTime) - I2(i.startTime))).toString() + "px " + (v * $ + S2 + 0.5 * g).toString() + "px";
    }).attr("class", function(i) {
      const v = "task";
      let l = "";
      i.classes.length > 0 && (l = i.classes.join(" "));
      let L = 0;
      for (const [N, X] of F.entries())
        i.type === X && (L = N % s.numberSectionStyles);
      let A = "";
      return i.active ? i.crit ? A += " activeCrit" : A = " active" : i.done ? i.crit ? A = " doneCrit" : A = " done" : i.crit && (A += " crit"), A.length === 0 && (A = " task"), i.milestone && (A = " milestone " + A), i.vert && (A = " vert " + A), A += L, A += " " + l, v + A;
    }), f.append("text").attr("id", function(i) {
      return i.id + "-text";
    }).text(function(i) {
      return i.task;
    }).attr("font-size", s.fontSize).attr("x", function(i) {
      let v = I2(i.startTime), l = I2(i.renderEndTime || i.endTime);
      if (i.milestone && (v += 0.5 * (I2(i.endTime) - I2(i.startTime)) - 0.5 * g, l = v + g), i.vert)
        return I2(i.startTime) + _;
      const L = this.getBBox().width;
      return L > l - v ? l + L + 1.5 * s.leftPadding > c ? v + _ - 5 : l + _ + 5 : (l - v) / 2 + v + _;
    }).attr("y", function(i, v) {
      return i.vert ? s.gridLineStartPadding + y.length * (s.barHeight + s.barGap) + 60 : (v = i.order, v * $ + s.barHeight / 2 + (s.fontSize / 2 - 2) + S2);
    }).attr("text-height", g).attr("class", function(i) {
      const v = I2(i.startTime);
      let l = I2(i.endTime);
      i.milestone && (l = v + g);
      const L = this.getBBox().width;
      let A = "";
      i.classes.length > 0 && (A = i.classes.join(" "));
      let N = 0;
      for (const [pt, K] of F.entries())
        i.type === K && (N = pt % s.numberSectionStyles);
      let X = "";
      return i.active && (i.crit ? X = "activeCritText" + N : X = "activeText" + N), i.done ? i.crit ? X = X + " doneCritText" + N : X = X + " doneText" + N : i.crit && (X = X + " critText" + N), i.milestone && (X += " milestoneText"), i.vert && (X += " vertText"), L > l - v ? l + L + 1.5 * s.leftPadding > c ? A + " taskTextOutsideLeft taskTextOutside" + N + " " + X : A + " taskTextOutsideRight taskTextOutside" + N + " " + X + " width-" + L : A + " taskText taskText" + N + " " + X + " width-" + L;
    }), me().securityLevel === "sandbox") {
      let i;
      i = ae("#i" + e);
      const v = i.nodes()[0].contentDocument;
      f.filter(function(l) {
        return Y.has(l.id);
      }).each(function(l) {
        var L = v.querySelector("#" + l.id), A = v.querySelector("#" + l.id + "-text");
        const N = L.parentNode;
        var X = v.createElement("a");
        X.setAttribute("xlink:href", Y.get(l.id)), X.setAttribute("target", "_top"), N.appendChild(X), X.appendChild(L), X.appendChild(A);
      });
    }
  }
  S(P, "drawRects");
  function E(T, $, S2, _, g, C, c, h) {
    if (c.length === 0 && h.length === 0)
      return;
    let f, Y;
    for (const { startTime: A, endTime: N } of C)
      (f === void 0 || A < f) && (f = A), (Y === void 0 || N > Y) && (Y = N);
    if (!f || !Y)
      return;
    if (Qq(Y).diff(Qq(f), "year") > 5) {
      ut2.warn(
        "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
      );
      return;
    }
    const i = r.db.getDateFormat(), v = [];
    let l = null, L = Qq(f);
    for (; L.valueOf() <= Y; )
      r.db.isInvalidDate(L, i, c, h) ? l ? l.end = L : l = {
        start: L,
        end: L
      } : l && (v.push(l), l = null), L = L.add(1, "d");
    R.append("g").selectAll("rect").data(v).enter().append("rect").attr("id", function(A) {
      return "exclude-" + A.start.format("YYYY-MM-DD");
    }).attr("x", function(A) {
      return I2(A.start) + S2;
    }).attr("y", s.gridLineStartPadding).attr("width", function(A) {
      const N = A.end.add(1, "day");
      return I2(N) - I2(A.start);
    }).attr("height", g - $ - s.gridLineStartPadding).attr("transform-origin", function(A, N) {
      return (I2(A.start) + S2 + 0.5 * (I2(A.end) - I2(A.start))).toString() + "px " + (N * T + 0.5 * g).toString() + "px";
    }).attr("class", "exclude-range");
  }
  S(E, "drawExcludeDays");
  function j(T, $, S2, _) {
    let g = sr(I2).tickSize(-_ + $ + s.gridLineStartPadding).tickFormat(Qt(r.db.getAxisFormat() || s.axisFormat || "%Y-%m-%d"));
    const C = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || s.tickInterval
    );
    if (C !== null) {
      const c = C[1], h = C[2], f = r.db.getWeekday() || s.weekday;
      switch (h) {
        case "millisecond":
          g.ticks($t.every(c));
          break;
        case "second":
          g.ticks(mt.every(c));
          break;
        case "minute":
          g.ticks(It.every(c));
          break;
        case "hour":
          g.ticks(Lt.every(c));
          break;
        case "day":
          g.ticks(Tt.every(c));
          break;
        case "week":
          g.ticks(tn[f].every(c));
          break;
        case "month":
          g.ticks(Wt.every(c));
          break;
      }
    }
    if (R.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + (_ - 50) + ")").call(g).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || s.topAxis) {
      let c = ir(I2).tickSize(-_ + $ + s.gridLineStartPadding).tickFormat(Qt(r.db.getAxisFormat() || s.axisFormat || "%Y-%m-%d"));
      if (C !== null) {
        const h = C[1], f = C[2], Y = r.db.getWeekday() || s.weekday;
        switch (f) {
          case "millisecond":
            c.ticks($t.every(h));
            break;
          case "second":
            c.ticks(mt.every(h));
            break;
          case "minute":
            c.ticks(It.every(h));
            break;
          case "hour":
            c.ticks(Lt.every(h));
            break;
          case "day":
            c.ticks(Tt.every(h));
            break;
          case "week":
            c.ticks(tn[Y].every(h));
            break;
          case "month":
            c.ticks(Wt.every(h));
            break;
        }
      }
      R.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + $ + ")").call(c).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  S(j, "makeGrid");
  function q(T, $) {
    let S2 = 0;
    const _ = Object.keys(b).map((g) => [g, b[g]]);
    R.append("g").selectAll("text").data(_).enter().append(function(g) {
      const C = g[0].split(ga.lineBreakRegex), c = -(C.length - 1) / 2, h = M.createElementNS("http://www.w3.org/2000/svg", "text");
      h.setAttribute("dy", c + "em");
      for (const [f, Y] of C.entries()) {
        const i = M.createElementNS("http://www.w3.org/2000/svg", "tspan");
        i.setAttribute("alignment-baseline", "central"), i.setAttribute("x", "10"), f > 0 && i.setAttribute("dy", "1em"), i.textContent = Y, h.appendChild(i);
      }
      return h;
    }).attr("x", 10).attr("y", function(g, C) {
      if (C > 0)
        for (let c = 0; c < C; c++)
          return S2 += _[C - 1][1], g[1] * T / 2 + S2 * T + $;
      else
        return g[1] * T / 2 + $;
    }).attr("font-size", s.sectionFontSize).attr("class", function(g) {
      for (const [C, c] of F.entries())
        if (g[0] === c)
          return "sectionTitle sectionTitle" + C % s.numberSectionStyles;
      return "sectionTitle";
    });
  }
  S(q, "vertLabels");
  function w(T, $, S2, _) {
    const g = r.db.getTodayMarker();
    if (g === "off")
      return;
    const C = R.append("g").attr("class", "today"), c = /* @__PURE__ */ new Date(), h = C.append("line");
    h.attr("x1", I2(c) + T).attr("x2", I2(c) + T).attr("y1", s.titleTopMargin).attr("y2", _ - s.titleTopMargin).attr("class", "today"), g !== "" && h.attr("style", g.replace(/,/g, ";"));
  }
  S(w, "drawToday");
  function O(T) {
    const $ = {}, S2 = [];
    for (let _ = 0, g = T.length; _ < g; ++_)
      Object.prototype.hasOwnProperty.call($, T[_]) || ($[T[_]] = true, S2.push(T[_]));
    return S2;
  }
  S(O, "checkUnique");
}, "draw");
var _s = {
  setConf: Cs,
  draw: Ms
};
var Ss = S((t) => `
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor || t.textColor};
    font-family: ${t.fontFamily};
  }
`, "getStyles");
var $s = Ss;
var Us = {
  parser: Pi,
  db: ws,
  renderer: _s,
  styles: $s
};
export {
  Us as diagram
};
//# sourceMappingURL=ganttDiagram-EK5VF46D-Ste5T71w-DbB2gGYT-4BU7JFVH.js.map
