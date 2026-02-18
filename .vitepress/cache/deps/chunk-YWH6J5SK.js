import {
  $c,
  Aa,
  Ac,
  Ax,
  DY,
  Gg,
  HK,
  Is,
  Ju,
  Lx,
  RK,
  Ta,
  UK,
  UY,
  Vg,
  WK,
  XK,
  _8,
  e0,
  ed,
  g8,
  ho,
  jK,
  p8,
  qY,
  rm,
  sd,
  t0,
  v8,
  w8,
  wtt,
  ys,
  zY
} from "./chunk-FMIKWIBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.2.1_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/_baseUniq-CZHCFN8s-CxpD0JS7.js
var Rr = "[object Symbol]";
function P(r) {
  return typeof r == "symbol" || $c(r) && Ta(r) == Rr;
}
function br(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length, n = Array(a); ++e < a; )
    n[e] = t(r[e], e, r);
  return n;
}
var G = Ju ? Ju.prototype : void 0;
var K = G ? G.toString : void 0;
function vr(r) {
  if (typeof r == "string")
    return r;
  if (e0(r))
    return br(r, vr) + "";
  if (P(r))
    return K ? K.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -1 / 0 ? "-0" : t;
}
function Tr() {
}
function jr(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length; ++e < a && t(r[e], e, r) !== false; )
    ;
  return r;
}
function qr(r, t, e, a) {
  for (var n = r.length, u = e + -1; ++u < n; )
    if (t(r[u], u, r))
      return u;
  return -1;
}
function Gr(r) {
  return r !== r;
}
function Kr(r, t, e) {
  for (var a = e - 1, n = r.length; ++a < n; )
    if (r[a] === t)
      return a;
  return -1;
}
function Xr(r, t, e) {
  return t === t ? Kr(r, t, e) : qr(r, Gr, e);
}
function Hr(r, t) {
  var e = r == null ? 0 : r.length;
  return !!e && Xr(r, t, 0) > -1;
}
function A(r) {
  return sd(r) ? UY(r) : wtt(r);
}
var Yr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Zr = /^\w*$/;
function V(r, t) {
  if (e0(r))
    return false;
  var e = typeof r;
  return e == "number" || e == "symbol" || e == "boolean" || r == null || P(r) ? true : Zr.test(r) || !Yr.test(r) || t != null && r in Object(t);
}
var rt = 500;
function tt(r) {
  var t = Ac(r, function(a) {
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
function yr(r, t) {
  return e0(r) ? r : V(r, t) ? [r] : ut(nt(r));
}
function L(r) {
  if (typeof r == "string" || P(r))
    return r;
  var t = r + "";
  return t == "0" && 1 / r == -1 / 0 ? "-0" : t;
}
function hr(r, t) {
  t = yr(t, r);
  for (var e = 0, a = t.length; r != null && e < a; )
    r = r[L(t[e++])];
  return e && e == a ? r : void 0;
}
function ot(r, t, e) {
  var a = r == null ? void 0 : hr(r, t);
  return a === void 0 ? e : a;
}
function N(r, t) {
  for (var e = -1, a = t.length, n = r.length; ++e < a; )
    r[n + e] = t[e];
  return r;
}
var X = Ju ? Ju.isConcatSpreadable : void 0;
function ct(r) {
  return e0(r) || t0(r) || !!(X && r && r[X]);
}
function wa(r, t, e, a, n) {
  var u = -1, o = r.length;
  for (e || (e = ct), n || (n = []); ++u < o; ) {
    var c = r[u];
    e(c) ? N(n, c) : a || (n[n.length] = c);
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
  return r && qY(t, A(t), r);
}
function it(r, t) {
  return r && qY(t, v8(t), r);
}
function gr(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length, n = 0, u = []; ++e < a; ) {
    var o = r[e];
    t(o, e, r) && (u[n++] = o);
  }
  return u;
}
function pr() {
  return [];
}
var lt = Object.prototype;
var bt = lt.propertyIsEnumerable;
var H = Object.getOwnPropertySymbols;
var W = H ? function(r) {
  return r == null ? [] : (r = Object(r), gr(H(r), function(t) {
    return bt.call(r, t);
  }));
} : pr;
function vt(r, t) {
  return qY(r, W(r), t);
}
var jt = Object.getOwnPropertySymbols;
var dr = jt ? function(r) {
  for (var t = []; r; )
    N(t, W(r)), r = p8(r);
  return t;
} : pr;
function yt(r, t) {
  return qY(r, dr(r), t);
}
function wr(r, t, e) {
  var a = t(r);
  return e0(r) ? a : N(a, e(r));
}
function D(r) {
  return wr(r, A, W);
}
function ht(r) {
  return wr(r, v8, dr);
}
var gt = Object.prototype;
var pt = gt.hasOwnProperty;
function dt(r) {
  var t = r.length, e = new r.constructor(t);
  return t && typeof r[0] == "string" && pt.call(r, "index") && (e.index = r.index, e.input = r.input), e;
}
function wt(r, t) {
  var e = t ? HK(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.byteLength);
}
var _t = /\w*$/;
function At(r) {
  var t = new r.constructor(r.source, _t.exec(r));
  return t.lastIndex = r.lastIndex, t;
}
var Y = Ju ? Ju.prototype : void 0;
var Z = Y ? Y.valueOf : void 0;
function mt(r) {
  return Z ? Object(Z.call(r)) : {};
}
var Ot = "[object Boolean]";
var St = "[object Date]";
var kt = "[object Map]";
var It = "[object Number]";
var Et = "[object RegExp]";
var $t = "[object Set]";
var xt = "[object String]";
var zt = "[object Symbol]";
var Lt = "[object ArrayBuffer]";
var Bt = "[object DataView]";
var Ft = "[object Float32Array]";
var Ut = "[object Float64Array]";
var Ct = "[object Int8Array]";
var Dt = "[object Int16Array]";
var Mt = "[object Int32Array]";
var Pt = "[object Uint8Array]";
var Vt = "[object Uint8ClampedArray]";
var Nt = "[object Uint16Array]";
var Wt = "[object Uint32Array]";
function Jt(r, t, e) {
  var a = r.constructor;
  switch (t) {
    case Lt:
      return HK(r);
    case Ot:
    case St:
      return new a(+r);
    case Bt:
      return wt(r, e);
    case Ft:
    case Ut:
    case Ct:
    case Dt:
    case Mt:
    case Pt:
    case Vt:
    case Nt:
    case Wt:
      return WK(r, e);
    case kt:
      return new a();
    case It:
    case xt:
      return new a(r);
    case Et:
      return At(r);
    case $t:
      return new a();
    case zt:
      return mt(r);
  }
}
var Qt = "[object Map]";
function Rt(r) {
  return $c(r) && Is(r) == Qt;
}
var rr = Lx && Lx.isMap;
var Tt = rr ? DY(rr) : Rt;
var qt = "[object Set]";
function Gt(r) {
  return $c(r) && Is(r) == qt;
}
var tr = Lx && Lx.isSet;
var Kt = tr ? DY(tr) : Gt;
var Xt = 1;
var Ht = 2;
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
var ye = "[object Int8Array]";
var he = "[object Int16Array]";
var ge = "[object Int32Array]";
var pe = "[object Uint8Array]";
var de = "[object Uint8ClampedArray]";
var we = "[object Uint16Array]";
var _e = "[object Uint32Array]";
var i = {};
i[_r] = i[Zt] = i[le] = i[be] = i[re] = i[te] = i[ve] = i[je] = i[ye] = i[he] = i[ge] = i[ue] = i[ne] = i[mr] = i[oe] = i[ce] = i[fe] = i[se] = i[pe] = i[de] = i[we] = i[_e] = true;
i[ee] = i[Ar] = i[ie] = false;
function F(r, t, e, a, n, u) {
  var o, c = t & Xt, f = t & Ht, v = t & Yt;
  if (o !== void 0)
    return o;
  if (!ho(r))
    return r;
  var l = e0(r);
  if (l) {
    if (o = dt(r), !c)
      return UK(r, o);
  } else {
    var s = Is(r), b = s == Ar || s == ae;
    if (Vg(r))
      return jK(r, c);
    if (s == mr || s == _r || b && !n) {
      if (o = f || b ? {} : XK(r), !c)
        return f ? yt(r, it(o, r)) : vt(r, st(o, r));
    } else {
      if (!i[s])
        return n ? r : {};
      o = Jt(r, s, c);
    }
  }
  u || (u = new Aa());
  var d = u.get(r);
  if (d)
    return d;
  u.set(r, o), Kt(r) ? r.forEach(function(j) {
    o.add(F(j, t, e, j, r, u));
  }) : Tt(r) && r.forEach(function(j, y) {
    o.set(y, F(j, t, e, y, r, u));
  });
  var h = v ? f ? ht : D : f ? v8 : A, g = l ? void 0 : h(r);
  return jr(g || r, function(j, y) {
    g && (y = j, j = r[y]), zY(o, y, F(j, t, e, y, r, u));
  }), o;
}
var Ae = "__lodash_hash_undefined__";
function me(r) {
  return this.__data__.set(r, Ae), this;
}
function Oe(r) {
  return this.__data__.has(r);
}
function k(r) {
  var t = -1, e = r == null ? 0 : r.length;
  for (this.__data__ = new ys(); ++t < e; )
    this.add(r[t]);
}
k.prototype.add = k.prototype.push = me;
k.prototype.has = Oe;
function Se(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length; ++e < a; )
    if (t(r[e], e, r))
      return true;
  return false;
}
function Or(r, t) {
  return r.has(t);
}
var ke = 1;
var Ie = 2;
function Sr(r, t, e, a, n, u) {
  var o = e & ke, c = r.length, f = t.length;
  if (c != f && !(o && f > c))
    return false;
  var v = u.get(r), l = u.get(t);
  if (v && l)
    return v == t && l == r;
  var s = -1, b = true, d = e & Ie ? new k() : void 0;
  for (u.set(r, t), u.set(t, r); ++s < c; ) {
    var h = r[s], g = t[s];
    if (a)
      var j = o ? a(g, h, s, t, r, u) : a(h, g, s, r, t, u);
    if (j !== void 0) {
      if (j)
        continue;
      b = false;
      break;
    }
    if (d) {
      if (!Se(t, function(y, _) {
        if (!Or(d, _) && (h === y || n(h, y, e, a, u)))
          return d.push(_);
      })) {
        b = false;
        break;
      }
    } else if (!(h === g || n(h, g, e, a, u))) {
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
function J(r) {
  var t = -1, e = Array(r.size);
  return r.forEach(function(a) {
    e[++t] = a;
  }), e;
}
var $e = 1;
var xe = 2;
var ze = "[object Boolean]";
var Le = "[object Date]";
var Be = "[object Error]";
var Fe = "[object Map]";
var Ue = "[object Number]";
var Ce = "[object RegExp]";
var De = "[object Set]";
var Me = "[object String]";
var Pe = "[object Symbol]";
var Ve = "[object ArrayBuffer]";
var Ne = "[object DataView]";
var er = Ju ? Ju.prototype : void 0;
var U = er ? er.valueOf : void 0;
function We(r, t, e, a, n, u, o) {
  switch (e) {
    case Ne:
      if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset)
        return false;
      r = r.buffer, t = t.buffer;
    case Ve:
      return !(r.byteLength != t.byteLength || !u(new Ax(r), new Ax(t)));
    case ze:
    case Le:
    case Ue:
      return ed(+r, +t);
    case Be:
      return r.name == t.name && r.message == t.message;
    case Ce:
    case Me:
      return r == t + "";
    case Fe:
      var c = Ee;
    case De:
      var f = a & $e;
      if (c || (c = J), r.size != t.size && !f)
        return false;
      var v = o.get(r);
      if (v)
        return v == t;
      a |= xe, o.set(r, t);
      var l = Sr(c(r), c(t), a, n, u, o);
      return o.delete(r), l;
    case Pe:
      if (U)
        return U.call(r) == U.call(t);
  }
  return false;
}
var Je = 1;
var Qe = Object.prototype;
var Re = Qe.hasOwnProperty;
function Te(r, t, e, a, n, u) {
  var o = e & Je, c = D(r), f = c.length, v = D(t), l = v.length;
  if (f != l && !o)
    return false;
  for (var s = f; s--; ) {
    var b = c[s];
    if (!(o ? b in t : Re.call(t, b)))
      return false;
  }
  var d = u.get(r), h = u.get(t);
  if (d && h)
    return d == t && h == r;
  var g = true;
  u.set(r, t), u.set(t, r);
  for (var j = o; ++s < f; ) {
    b = c[s];
    var y = r[b], _ = t[b];
    if (a)
      var T = o ? a(_, y, b, t, r, u) : a(y, _, b, r, t, u);
    if (!(T === void 0 ? y === _ || n(y, _, e, a, u) : T)) {
      g = false;
      break;
    }
    j || (j = b == "constructor");
  }
  if (g && !j) {
    var I = r.constructor, E = t.constructor;
    I != E && "constructor" in r && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof E == "function" && E instanceof E) && (g = false);
  }
  return u.delete(r), u.delete(t), g;
}
var qe = 1;
var ar = "[object Arguments]";
var ur = "[object Array]";
var $ = "[object Object]";
var Ge = Object.prototype;
var nr = Ge.hasOwnProperty;
function Ke(r, t, e, a, n, u) {
  var o = e0(r), c = e0(t), f = o ? ur : Is(r), v = c ? ur : Is(t);
  f = f == ar ? $ : f, v = v == ar ? $ : v;
  var l = f == $, s = v == $, b = f == v;
  if (b && Vg(r)) {
    if (!Vg(t))
      return false;
    o = true, l = false;
  }
  if (b && !l)
    return u || (u = new Aa()), o || Gg(r) ? Sr(r, t, e, a, n, u) : We(r, t, f, e, a, n, u);
  if (!(e & qe)) {
    var d = l && nr.call(r, "__wrapped__"), h = s && nr.call(t, "__wrapped__");
    if (d || h) {
      var g = d ? r.value() : r, j = h ? t.value() : t;
      return u || (u = new Aa()), n(g, j, e, a, u);
    }
  }
  return b ? (u || (u = new Aa()), Te(r, t, e, a, n, u)) : false;
}
function Q(r, t, e, a, n) {
  return r === t ? true : r == null || t == null || !$c(r) && !$c(t) ? r !== r && t !== t : Ke(r, t, e, a, Q, n);
}
var Xe = 1;
var He = 2;
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
      var l = new Aa(), s;
      if (!(s === void 0 ? Q(v, f, Xe | He, a, l) : s))
        return false;
    }
  }
  return true;
}
function kr(r) {
  return r === r && !ho(r);
}
function Ze(r) {
  for (var t = A(r), e = t.length; e--; ) {
    var a = t[e], n = r[a];
    t[e] = [a, n, kr(n)];
  }
  return t;
}
function Ir(r, t) {
  return function(e) {
    return e == null ? false : e[r] === t && (t !== void 0 || r in Object(e));
  };
}
function ra(r) {
  var t = Ze(r);
  return t.length == 1 && t[0][2] ? Ir(t[0][0], t[0][1]) : function(e) {
    return e === r || Ye(e, r, t);
  };
}
function ta(r, t) {
  return r != null && t in Object(r);
}
function ea(r, t, e) {
  t = yr(t, r);
  for (var a = -1, n = t.length, u = false; ++a < n; ) {
    var o = L(t[a]);
    if (!(u = r != null && e(r, o)))
      break;
    r = r[o];
  }
  return u || ++a != n ? u : (n = r == null ? 0 : r.length, !!n && g8(n) && w8(o, n) && (e0(r) || t0(r)));
}
function aa(r, t) {
  return r != null && ea(r, t, ta);
}
var ua = 1;
var na = 2;
function oa(r, t) {
  return V(r) && kr(t) ? Ir(L(r), t) : function(e) {
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
    return hr(t, r);
  };
}
function sa(r) {
  return V(r) ? ca(L(r)) : fa(r);
}
function Er(r) {
  return typeof r == "function" ? r : r == null ? _8 : typeof r == "object" ? e0(r) ? oa(r[0], r[1]) : ra(r) : sa(r);
}
function ia(r, t) {
  return r && RK(r, t, A);
}
function la(r, t) {
  return function(e, a) {
    if (e == null)
      return e;
    if (!sd(e))
      return r(e, a);
    for (var n = e.length, u = -1, o = Object(e); ++u < n && a(o[u], u, o) !== false; )
      ;
    return e;
  };
}
var R = la(ia);
function ba(r) {
  return typeof r == "function" ? r : _8;
}
function _a(r, t) {
  var e = e0(r) ? jr : R;
  return e(r, ba(t));
}
function va(r, t) {
  var e = [];
  return R(r, function(a, n, u) {
    t(a, n, u) && e.push(a);
  }), e;
}
function Aa2(r, t) {
  var e = e0(r) ? gr : va;
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
function ya(r, t, e, a, n) {
  return n(r, function(u, o, c) {
    e = a ? (a = false, u) : t(e, u, o, c);
  }), e;
}
function Sa(r, t, e) {
  var a = e0(r) ? ft : ya, n = arguments.length < 3;
  return a(r, Er(t), e, n, R);
}
var ha = 1 / 0;
var ga = rm && 1 / J(new rm([, -0]))[1] == ha ? function(r) {
  return new rm(r);
} : Tr;
var pa = 200;
function ka(r, t, e) {
  var a = -1, n = Hr, u = r.length, o = true, c = [], f = c;
  if (u >= pa) {
    var v = t ? null : ga(r);
    if (v)
      return J(v);
    o = false, n = Or, f = new k();
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
  P,
  br,
  Tr,
  qr,
  Xr,
  Hr,
  A,
  nt,
  yr,
  L,
  hr,
  wa,
  gr,
  ht,
  F,
  k,
  Se,
  Or,
  ea,
  aa,
  Er,
  ia,
  R,
  ba,
  _a,
  va,
  Aa2 as Aa,
  ma,
  Oa,
  Sa,
  ka
};
//# sourceMappingURL=chunk-YWH6J5SK.js.map
