import {
  B4,
  GZ,
  Is,
  Kk,
  N0,
  Nu,
  Ou,
  S1,
  T4,
  Xk,
  aX,
  ag,
  bG,
  bX,
  ba,
  co,
  dX,
  ev,
  gG,
  gc,
  gs,
  kG,
  mG,
  mc,
  nv,
  og,
  pG,
  q0,
  tv,
  uX,
  xa,
  yG,
  zu
} from "./chunk-G6K7VW2X.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/_baseUniq-DRFSKfuj-B0UglZZz.js
var Rr = "[object Symbol]";
function M(r) {
  return typeof r == "symbol" || gc(r) && ba(r) == Rr;
}
function br(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length, n = Array(a); ++e < a; )
    n[e] = t(r[e], e, r);
  return n;
}
var H = Nu ? Nu.prototype : void 0;
var T = H ? H.toString : void 0;
function vr(r) {
  if (typeof r == "string")
    return r;
  if (zu(r))
    return br(r, vr) + "";
  if (M(r))
    return T ? T.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -1 / 0 ? "-0" : t;
}
function Wr() {
}
function jr(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length; ++e < a && t(r[e], e, r) !== false; )
    ;
  return r;
}
function Gr(r, t, e, a) {
  for (var n = r.length, u = e + -1; ++u < n; )
    if (t(r[u], u, r))
      return u;
  return -1;
}
function Hr(r) {
  return r !== r;
}
function Tr(r, t, e) {
  for (var a = e - 1, n = r.length; ++a < n; )
    if (r[a] === t)
      return a;
  return -1;
}
function Kr(r, t, e) {
  return t === t ? Tr(r, t, e) : Gr(r, Hr, e);
}
function Xr(r, t) {
  var e = r == null ? 0 : r.length;
  return !!e && Kr(r, t, 0) > -1;
}
function A(r) {
  return q0(r) ? bX(r) : GZ(r);
}
var Yr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Zr = /^\w*$/;
function P(r, t) {
  if (zu(r))
    return false;
  var e = typeof r;
  return e == "number" || e == "symbol" || e == "boolean" || r == null || M(r) ? true : Zr.test(r) || !Yr.test(r) || t != null && r in Object(t);
}
var rt = 500;
function tt(r) {
  var t = mc(r, function(a) {
    return e.size === rt && e.clear(), a;
  }), e = t.cache;
  return t;
}
var et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var at = /\\(\\)?/g;
var ut = tt(function(r) {
  var t = [];
  return r.charCodeAt(0) === 46 && t.push(""), r.replace(et, function(e, a, n, u) {
    t.push(n ? u.replace(at, "$1") : a || e);
  }), t;
});
function nt(r) {
  return r == null ? "" : vr(r);
}
function hr(r, t) {
  return zu(r) ? r : P(r, t) ? [r] : ut(nt(r));
}
function C(r) {
  if (typeof r == "string" || M(r))
    return r;
  var t = r + "";
  return t == "0" && 1 / r == -1 / 0 ? "-0" : t;
}
function yr(r, t) {
  t = hr(t, r);
  for (var e = 0, a = t.length; r != null && e < a; )
    r = r[C(t[e++])];
  return e && e == a ? r : void 0;
}
function ot(r, t, e) {
  var a = r == null ? void 0 : yr(r, t);
  return a === void 0 ? e : a;
}
function q(r, t) {
  for (var e = -1, a = t.length, n = r.length; ++e < a; )
    r[n + e] = t[e];
  return r;
}
var K = Nu ? Nu.isConcatSpreadable : void 0;
function ct(r) {
  return zu(r) || Ou(r) || !!(K && r && r[K]);
}
function wa(r, t, e, a, n) {
  var u = -1, o = r.length;
  for (e || (e = ct), n || (n = []); ++u < o; ) {
    var c = r[u];
    e(c) ? q(n, c) : a || (n[n.length] = c);
  }
  return n;
}
function ft(r, t, e, a) {
  var n = -1, u = r == null ? 0 : r.length;
  for (a && u && (e = r[++n]); ++n < u; )
    e = t(e, r[n], n, r);
  return e;
}
function st(r, t) {
  return r && dX(t, A(t), r);
}
function it(r, t) {
  return r && dX(t, ev(t), r);
}
function pr(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length, n = 0, u = []; ++e < a; ) {
    var o = r[e];
    t(o, e, r) && (u[n++] = o);
  }
  return u;
}
function gr() {
  return [];
}
var lt = Object.prototype;
var bt = lt.propertyIsEnumerable;
var X = Object.getOwnPropertySymbols;
var J = X ? function(r) {
  return r == null ? [] : (r = Object(r), pr(X(r), function(t) {
    return bt.call(r, t);
  }));
} : gr;
function vt(r, t) {
  return dX(r, J(r), t);
}
var jt = Object.getOwnPropertySymbols;
var dr = jt ? function(r) {
  for (var t = []; r; )
    q(t, J(r)), r = Xk(r);
  return t;
} : gr;
function ht(r, t) {
  return dX(r, dr(r), t);
}
function wr(r, t, e) {
  var a = t(r);
  return zu(r) ? a : q(a, e(r));
}
function V(r) {
  return wr(r, A, J);
}
function yt(r) {
  return wr(r, ev, dr);
}
var pt = Object.prototype;
var gt = pt.hasOwnProperty;
function dt(r) {
  var t = r.length, e = new r.constructor(t);
  return t && typeof r[0] == "string" && gt.call(r, "index") && (e.index = r.index, e.input = r.input), e;
}
function wt(r, t) {
  var e = t ? gG(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.byteLength);
}
var _t = /\w*$/;
function At(r) {
  var t = new r.constructor(r.source, _t.exec(r));
  return t.lastIndex = r.lastIndex, t;
}
var Y = Nu ? Nu.prototype : void 0;
var Z = Y ? Y.valueOf : void 0;
function mt(r) {
  return Z ? Object(Z.call(r)) : {};
}
var Ot = "[object Boolean]";
var St = "[object Date]";
var It = "[object Map]";
var $t = "[object Number]";
var Et = "[object RegExp]";
var xt = "[object Set]";
var kt = "[object String]";
var zt = "[object Symbol]";
var Ct = "[object ArrayBuffer]";
var Lt = "[object DataView]";
var Ut = "[object Float32Array]";
var Bt = "[object Float64Array]";
var Ft = "[object Int8Array]";
var Vt = "[object Int16Array]";
var Dt = "[object Int32Array]";
var Mt = "[object Uint8Array]";
var Pt = "[object Uint8ClampedArray]";
var qt = "[object Uint16Array]";
var Jt = "[object Uint32Array]";
function Nt(r, t, e) {
  var a = r.constructor;
  switch (t) {
    case Ct:
      return gG(r);
    case Ot:
    case St:
      return new a(+r);
    case Lt:
      return wt(r, e);
    case Ut:
    case Bt:
    case Ft:
    case Vt:
    case Dt:
    case Mt:
    case Pt:
    case qt:
    case Jt:
      return yG(r, e);
    case It:
      return new a();
    case $t:
    case kt:
      return new a(r);
    case Et:
      return At(r);
    case xt:
      return new a();
    case zt:
      return mt(r);
  }
}
var Qt = "[object Map]";
function Rt(r) {
  return gc(r) && Is(r) == Qt;
}
var rr = B4 && B4.isMap;
var Wt = rr ? aX(rr) : Rt;
var Gt = "[object Set]";
function Ht(r) {
  return gc(r) && Is(r) == Gt;
}
var tr = B4 && B4.isSet;
var Tt = tr ? aX(tr) : Ht;
var Kt = 1;
var Xt = 2;
var Yt = 4;
var _r = "[object Arguments]";
var Zt = "[object Array]";
var re = "[object Boolean]";
var te = "[object Date]";
var ee = "[object Error]";
var Ar = "[object Function]";
var ae = "[object GeneratorFunction]";
var ue = "[object Map]";
var ne = "[object Number]";
var mr = "[object Object]";
var oe = "[object RegExp]";
var ce = "[object Set]";
var fe = "[object String]";
var se = "[object Symbol]";
var ie = "[object WeakMap]";
var le = "[object ArrayBuffer]";
var be = "[object DataView]";
var ve = "[object Float32Array]";
var je = "[object Float64Array]";
var he = "[object Int8Array]";
var ye = "[object Int16Array]";
var pe = "[object Int32Array]";
var ge = "[object Uint8Array]";
var de = "[object Uint8ClampedArray]";
var we = "[object Uint16Array]";
var _e = "[object Uint32Array]";
var i = {};
i[_r] = i[Zt] = i[le] = i[be] = i[re] = i[te] = i[ve] = i[je] = i[he] = i[ye] = i[pe] = i[ue] = i[ne] = i[mr] = i[oe] = i[ce] = i[fe] = i[se] = i[ge] = i[de] = i[we] = i[_e] = true;
i[ee] = i[Ar] = i[ie] = false;
function U(r, t, e, a, n, u) {
  var o, c = t & Kt, f = t & Xt, v = t & Yt;
  if (o !== void 0)
    return o;
  if (!co(r))
    return r;
  var l = zu(r);
  if (l) {
    if (o = dt(r), !c)
      return bG(r, o);
  } else {
    var s = Is(r), b = s == Ar || s == ae;
    if (og(r))
      return mG(r, c);
    if (s == mr || s == _r || b && !n) {
      if (o = f || b ? {} : kG(r), !c)
        return f ? ht(r, it(o, r)) : vt(r, st(o, r));
    } else {
      if (!i[s])
        return n ? r : {};
      o = Nt(r, s, c);
    }
  }
  u || (u = new xa());
  var d = u.get(r);
  if (d)
    return d;
  u.set(r, o), Tt(r) ? r.forEach(function(j) {
    o.add(U(j, t, e, j, r, u));
  }) : Wt(r) && r.forEach(function(j, h) {
    o.set(h, U(j, t, e, h, r, u));
  });
  var y = v ? f ? yt : V : f ? ev : A, p = l ? void 0 : y(r);
  return jr(p || r, function(j, h) {
    p && (h = j, j = r[h]), uX(o, h, U(j, t, e, h, r, u));
  }), o;
}
var Ae = "__lodash_hash_undefined__";
function me(r) {
  return this.__data__.set(r, Ae), this;
}
function Oe(r) {
  return this.__data__.has(r);
}
function I(r) {
  var t = -1, e = r == null ? 0 : r.length;
  for (this.__data__ = new gs(); ++t < e; )
    this.add(r[t]);
}
I.prototype.add = I.prototype.push = me;
I.prototype.has = Oe;
function Se(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length; ++e < a; )
    if (t(r[e], e, r))
      return true;
  return false;
}
function Or(r, t) {
  return r.has(t);
}
var Ie = 1;
var $e = 2;
function Sr(r, t, e, a, n, u) {
  var o = e & Ie, c = r.length, f = t.length;
  if (c != f && !(o && f > c))
    return false;
  var v = u.get(r), l = u.get(t);
  if (v && l)
    return v == t && l == r;
  var s = -1, b = true, d = e & $e ? new I() : void 0;
  for (u.set(r, t), u.set(t, r); ++s < c; ) {
    var y = r[s], p = t[s];
    if (a)
      var j = o ? a(p, y, s, t, r, u) : a(y, p, s, r, t, u);
    if (j !== void 0) {
      if (j)
        continue;
      b = false;
      break;
    }
    if (d) {
      if (!Se(t, function(h, _) {
        if (!Or(d, _) && (y === h || n(y, h, e, a, u)))
          return d.push(_);
      })) {
        b = false;
        break;
      }
    } else if (!(y === p || n(y, p, e, a, u))) {
      b = false;
      break;
    }
  }
  return u.delete(r), u.delete(t), b;
}
function Ee(r) {
  var t = -1, e = Array(r.size);
  return r.forEach(function(a, n) {
    e[++t] = [n, a];
  }), e;
}
function N(r) {
  var t = -1, e = Array(r.size);
  return r.forEach(function(a) {
    e[++t] = a;
  }), e;
}
var xe = 1;
var ke = 2;
var ze = "[object Boolean]";
var Ce = "[object Date]";
var Le = "[object Error]";
var Ue = "[object Map]";
var Be = "[object Number]";
var Fe = "[object RegExp]";
var Ve = "[object Set]";
var De = "[object String]";
var Me = "[object Symbol]";
var Pe = "[object ArrayBuffer]";
var qe = "[object DataView]";
var er = Nu ? Nu.prototype : void 0;
var B = er ? er.valueOf : void 0;
function Je(r, t, e, a, n, u, o) {
  switch (e) {
    case qe:
      if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset)
        return false;
      r = r.buffer, t = t.buffer;
    case Pe:
      return !(r.byteLength != t.byteLength || !u(new T4(r), new T4(t)));
    case ze:
    case Ce:
    case Be:
      return N0(+r, +t);
    case Le:
      return r.name == t.name && r.message == t.message;
    case Fe:
    case De:
      return r == t + "";
    case Ue:
      var c = Ee;
    case Ve:
      var f = a & xe;
      if (c || (c = N), r.size != t.size && !f)
        return false;
      var v = o.get(r);
      if (v)
        return v == t;
      a |= ke, o.set(r, t);
      var l = Sr(c(r), c(t), a, n, u, o);
      return o.delete(r), l;
    case Me:
      if (B)
        return B.call(r) == B.call(t);
  }
  return false;
}
var Ne = 1;
var Qe = Object.prototype;
var Re = Qe.hasOwnProperty;
function We(r, t, e, a, n, u) {
  var o = e & Ne, c = V(r), f = c.length, v = V(t), l = v.length;
  if (f != l && !o)
    return false;
  for (var s = f; s--; ) {
    var b = c[s];
    if (!(o ? b in t : Re.call(t, b)))
      return false;
  }
  var d = u.get(r), y = u.get(t);
  if (d && y)
    return d == t && y == r;
  var p = true;
  u.set(r, t), u.set(t, r);
  for (var j = o; ++s < f; ) {
    b = c[s];
    var h = r[b], _ = t[b];
    if (a)
      var W = o ? a(_, h, b, t, r, u) : a(h, _, b, r, t, u);
    if (!(W === void 0 ? h === _ || n(h, _, e, a, u) : W)) {
      p = false;
      break;
    }
    j || (j = b == "constructor");
  }
  if (p && !j) {
    var $ = r.constructor, E = t.constructor;
    $ != E && "constructor" in r && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof E == "function" && E instanceof E) && (p = false);
  }
  return u.delete(r), u.delete(t), p;
}
var Ge = 1;
var ar = "[object Arguments]";
var ur = "[object Array]";
var x = "[object Object]";
var He = Object.prototype;
var nr = He.hasOwnProperty;
function Te(r, t, e, a, n, u) {
  var o = zu(r), c = zu(t), f = o ? ur : Is(r), v = c ? ur : Is(t);
  f = f == ar ? x : f, v = v == ar ? x : v;
  var l = f == x, s = v == x, b = f == v;
  if (b && og(r)) {
    if (!og(t))
      return false;
    o = true, l = false;
  }
  if (b && !l)
    return u || (u = new xa()), o || ag(r) ? Sr(r, t, e, a, n, u) : Je(r, t, f, e, a, n, u);
  if (!(e & Ge)) {
    var d = l && nr.call(r, "__wrapped__"), y = s && nr.call(t, "__wrapped__");
    if (d || y) {
      var p = d ? r.value() : r, j = y ? t.value() : t;
      return u || (u = new xa()), n(p, j, e, a, u);
    }
  }
  return b ? (u || (u = new xa()), We(r, t, e, a, n, u)) : false;
}
function Q(r, t, e, a, n) {
  return r === t ? true : r == null || t == null || !gc(r) && !gc(t) ? r !== r && t !== t : Te(r, t, e, a, Q, n);
}
var Ke = 1;
var Xe = 2;
function Ye(r, t, e, a) {
  var n = e.length, u = n;
  if (r == null)
    return !u;
  for (r = Object(r); n--; ) {
    var o = e[n];
    if (o[2] ? o[1] !== r[o[0]] : !(o[0] in r))
      return false;
  }
  for (; ++n < u; ) {
    o = e[n];
    var c = o[0], f = r[c], v = o[1];
    if (o[2]) {
      if (f === void 0 && !(c in r))
        return false;
    } else {
      var l = new xa(), s;
      if (!(s === void 0 ? Q(v, f, Ke | Xe, a, l) : s))
        return false;
    }
  }
  return true;
}
function Ir(r) {
  return r === r && !co(r);
}
function Ze(r) {
  for (var t = A(r), e = t.length; e--; ) {
    var a = t[e], n = r[a];
    t[e] = [a, n, Ir(n)];
  }
  return t;
}
function $r(r, t) {
  return function(e) {
    return e == null ? false : e[r] === t && (t !== void 0 || r in Object(e));
  };
}
function ra(r) {
  var t = Ze(r);
  return t.length == 1 && t[0][2] ? $r(t[0][0], t[0][1]) : function(e) {
    return e === r || Ye(e, r, t);
  };
}
function ta(r, t) {
  return r != null && t in Object(r);
}
function ea(r, t, e) {
  t = hr(t, r);
  for (var a = -1, n = t.length, u = false; ++a < n; ) {
    var o = C(t[a]);
    if (!(u = r != null && e(r, o)))
      break;
    r = r[o];
  }
  return u || ++a != n ? u : (n = r == null ? 0 : r.length, !!n && Kk(n) && tv(o, n) && (zu(r) || Ou(r)));
}
function aa(r, t) {
  return r != null && ea(r, t, ta);
}
var ua = 1;
var na = 2;
function oa(r, t) {
  return P(r) && Ir(t) ? $r(C(r), t) : function(e) {
    var a = ot(e, r);
    return a === void 0 && a === t ? aa(e, r) : Q(t, a, ua | na);
  };
}
function ca(r) {
  return function(t) {
    return t == null ? void 0 : t[r];
  };
}
function fa(r) {
  return function(t) {
    return yr(t, r);
  };
}
function sa(r) {
  return P(r) ? ca(C(r)) : fa(r);
}
function Er(r) {
  return typeof r == "function" ? r : r == null ? nv : typeof r == "object" ? zu(r) ? oa(r[0], r[1]) : ra(r) : sa(r);
}
function ia(r, t) {
  return r && pG(r, t, A);
}
function la(r, t) {
  return function(e, a) {
    if (e == null)
      return e;
    if (!q0(e))
      return r(e, a);
    for (var n = e.length, u = -1, o = Object(e); ++u < n && a(o[u], u, o) !== false; )
      ;
    return e;
  };
}
var R = la(ia);
function ba2(r) {
  return typeof r == "function" ? r : nv;
}
function _a(r, t) {
  var e = zu(r) ? jr : R;
  return e(r, ba2(t));
}
function va(r, t) {
  var e = [];
  return R(r, function(a, n, u) {
    t(a, n, u) && e.push(a);
  }), e;
}
function Aa(r, t) {
  var e = zu(r) ? pr : va;
  return e(r, Er(t));
}
function ja(r, t) {
  return br(t, function(e) {
    return r[e];
  });
}
function ma(r) {
  return r == null ? [] : ja(r, A(r));
}
function Oa(r) {
  return r === void 0;
}
function ha(r, t, e, a, n) {
  return n(r, function(u, o, c) {
    e = a ? (a = false, u) : t(e, u, o, c);
  }), e;
}
function Sa(r, t, e) {
  var a = zu(r) ? ft : ha, n = arguments.length < 3;
  return a(r, Er(t), e, n, R);
}
var ya = 1 / 0;
var pa = S1 && 1 / N(new S1([, -0]))[1] == ya ? function(r) {
  return new S1(r);
} : Wr;
var ga = 200;
function Ia(r, t, e) {
  var a = -1, n = Xr, u = r.length, o = true, c = [], f = c;
  if (u >= ga) {
    var v = t ? null : pa(r);
    if (v)
      return N(v);
    o = false, n = Or, f = new I();
  } else
    f = t ? [] : c;
  r:
    for (; ++a < u; ) {
      var l = r[a], s = t ? t(l) : l;
      if (l = l !== 0 ? l : 0, o && s === s) {
        for (var b = f.length; b--; )
          if (f[b] === s)
            continue r;
        t && f.push(s), c.push(l);
      } else n(f, s, e) || (f !== c && f.push(s), c.push(l));
    }
  return c;
}

export {
  M,
  br,
  Wr,
  Gr,
  Kr,
  Xr,
  A,
  nt,
  hr,
  C,
  yr,
  wa,
  pr,
  yt,
  U,
  I,
  Se,
  Or,
  ea,
  aa,
  Er,
  ia,
  R,
  ba2 as ba,
  _a,
  va,
  Aa,
  ma,
  Oa,
  Sa,
  Ia
};
//# sourceMappingURL=chunk-F27AYW2L.js.map
