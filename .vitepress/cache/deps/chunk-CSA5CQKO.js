import {
  Bk,
  D0,
  Ds,
  Ek,
  Fu,
  HV,
  I0,
  Ik,
  Jm,
  Mu,
  N0,
  NG,
  Nk,
  PV,
  Qm,
  RG,
  UV,
  VG,
  VV,
  WV,
  YV,
  aa,
  fc,
  g1,
  go,
  kZ,
  pc,
  ps,
  qG,
  v4,
  y4,
  yo,
  zk
} from "./chunk-XXGV6SHG.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/_baseUniq-CNqCRbrC-BdcmcNSm.js
var Wr = "[object Symbol]";
function P(r) {
  return typeof r == "symbol" || fc(r) && go(r) == Wr;
}
function br(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length, n = Array(a); ++e < a; )
    n[e] = t(r[e], e, r);
  return n;
}
var J = D0 ? D0.prototype : void 0;
var X = J ? J.toString : void 0;
function vr(r) {
  if (typeof r == "string")
    return r;
  if (I0(r))
    return br(r, vr) + "";
  if (P(r))
    return X ? X.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -1 / 0 ? "-0" : t;
}
function qr() {
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
function Jr(r) {
  return r !== r;
}
function Xr(r, t, e) {
  for (var a = e - 1, n = r.length; ++a < n; )
    if (r[a] === t)
      return a;
  return -1;
}
function Hr(r, t, e) {
  return t === t ? Xr(r, t, e) : Gr(r, Jr, e);
}
function Kr(r, t) {
  var e = r == null ? 0 : r.length;
  return !!e && Hr(r, t, 0) > -1;
}
function A(r) {
  return Fu(r) ? VG(r) : kZ(r);
}
var Yr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Zr = /^\w*$/;
function V(r, t) {
  if (I0(r))
    return false;
  var e = typeof r;
  return e == "number" || e == "symbol" || e == "boolean" || r == null || P(r) ? true : Zr.test(r) || !Yr.test(r) || t != null && r in Object(t);
}
var rt = 500;
function tt(r) {
  var t = pc(r, function(a) {
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
  return I0(r) ? r : V(r, t) ? [r] : ut(nt(r));
}
function k(r) {
  if (typeof r == "string" || P(r))
    return r;
  var t = r + "";
  return t == "0" && 1 / r == -1 / 0 ? "-0" : t;
}
function yr(r, t) {
  t = hr(t, r);
  for (var e = 0, a = t.length; r != null && e < a; )
    r = r[k(t[e++])];
  return e && e == a ? r : void 0;
}
function ot(r, t, e) {
  var a = r == null ? void 0 : yr(r, t);
  return a === void 0 ? e : a;
}
function N(r, t) {
  for (var e = -1, a = t.length, n = r.length; ++e < a; )
    r[n + e] = t[e];
  return r;
}
var H = D0 ? D0.isConcatSpreadable : void 0;
function ct(r) {
  return I0(r) || N0(r) || !!(H && r && r[H]);
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
  return r && RG(t, A(t), r);
}
function it(r, t) {
  return r && RG(t, Ik(t), r);
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
var K = Object.getOwnPropertySymbols;
var Q = K ? function(r) {
  return r == null ? [] : (r = Object(r), pr(K(r), function(t) {
    return bt.call(r, t);
  }));
} : gr;
function vt(r, t) {
  return RG(r, Q(r), t);
}
var jt = Object.getOwnPropertySymbols;
var dr = jt ? function(r) {
  for (var t = []; r; )
    N(t, Q(r)), r = Ek(r);
  return t;
} : gr;
function ht(r, t) {
  return RG(r, dr(r), t);
}
function wr(r, t, e) {
  var a = t(r);
  return I0(r) ? a : N(a, e(r));
}
function F(r) {
  return wr(r, A, Q);
}
function yt(r) {
  return wr(r, Ik, dr);
}
var pt = Object.prototype;
var gt = pt.hasOwnProperty;
function dt(r) {
  var t = r.length, e = new r.constructor(t);
  return t && typeof r[0] == "string" && gt.call(r, "index") && (e.index = r.index, e.input = r.input), e;
}
function wt(r, t) {
  var e = t ? HV(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.byteLength);
}
var _t = /\w*$/;
function At(r) {
  var t = new r.constructor(r.source, _t.exec(r));
  return t.lastIndex = r.lastIndex, t;
}
var Y = D0 ? D0.prototype : void 0;
var Z = Y ? Y.valueOf : void 0;
function Ot(r) {
  return Z ? Object(Z.call(r)) : {};
}
var mt = "[object Boolean]";
var St = "[object Date]";
var Ct = "[object Map]";
var It = "[object Number]";
var $t = "[object RegExp]";
var Et = "[object Set]";
var xt = "[object String]";
var Bt = "[object Symbol]";
var kt = "[object ArrayBuffer]";
var zt = "[object DataView]";
var Lt = "[object Float32Array]";
var Ut = "[object Float64Array]";
var Dt = "[object Int8Array]";
var Ft = "[object Int16Array]";
var Mt = "[object Int32Array]";
var Pt = "[object Uint8Array]";
var Vt = "[object Uint8ClampedArray]";
var Nt = "[object Uint16Array]";
var Qt = "[object Uint32Array]";
function Tt(r, t, e) {
  var a = r.constructor;
  switch (t) {
    case kt:
      return HV(r);
    case mt:
    case St:
      return new a(+r);
    case zt:
      return wt(r, e);
    case Lt:
    case Ut:
    case Dt:
    case Ft:
    case Mt:
    case Pt:
    case Vt:
    case Nt:
    case Qt:
      return UV(r, e);
    case Ct:
      return new a();
    case It:
    case xt:
      return new a(r);
    case $t:
      return At(r);
    case Et:
      return new a();
    case Bt:
      return Ot(r);
  }
}
var Rt = "[object Map]";
function Wt(r) {
  return fc(r) && Ds(r) == Rt;
}
var rr = v4 && v4.isMap;
var qt = rr ? NG(rr) : Wt;
var Gt = "[object Set]";
function Jt(r) {
  return fc(r) && Ds(r) == Gt;
}
var tr = v4 && v4.isSet;
var Xt = tr ? NG(tr) : Jt;
var Ht = 1;
var Kt = 2;
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
var Or = "[object Object]";
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
i[_r] = i[Zt] = i[le] = i[be] = i[re] = i[te] = i[ve] = i[je] = i[he] = i[ye] = i[pe] = i[ue] = i[ne] = i[Or] = i[oe] = i[ce] = i[fe] = i[se] = i[ge] = i[de] = i[we] = i[_e] = true;
i[ee] = i[Ar] = i[ie] = false;
function L(r, t, e, a, n, u) {
  var o, c = t & Ht, f = t & Kt, v = t & Yt;
  if (o !== void 0)
    return o;
  if (!aa(r))
    return r;
  var l = I0(r);
  if (l) {
    if (o = dt(r), !c)
      return VV(r, o);
  } else {
    var s = Ds(r), b = s == Ar || s == ae;
    if (Jm(r))
      return WV(r, c);
    if (s == Or || s == _r || b && !n) {
      if (o = f || b ? {} : YV(r), !c)
        return f ? ht(r, it(o, r)) : vt(r, st(o, r));
    } else {
      if (!i[s])
        return n ? r : {};
      o = Tt(r, s, c);
    }
  }
  u || (u = new yo());
  var d = u.get(r);
  if (d)
    return d;
  u.set(r, o), Xt(r) ? r.forEach(function(j) {
    o.add(L(j, t, e, j, r, u));
  }) : qt(r) && r.forEach(function(j, h) {
    o.set(h, L(j, t, e, h, r, u));
  });
  var y = v ? f ? yt : F : f ? Ik : A, p = l ? void 0 : y(r);
  return jr(p || r, function(j, h) {
    p && (h = j, j = r[h]), qG(o, h, L(j, t, e, h, r, u));
  }), o;
}
var Ae = "__lodash_hash_undefined__";
function Oe(r) {
  return this.__data__.set(r, Ae), this;
}
function me(r) {
  return this.__data__.has(r);
}
function C(r) {
  var t = -1, e = r == null ? 0 : r.length;
  for (this.__data__ = new ps(); ++t < e; )
    this.add(r[t]);
}
C.prototype.add = C.prototype.push = Oe;
C.prototype.has = me;
function Se(r, t) {
  for (var e = -1, a = r == null ? 0 : r.length; ++e < a; )
    if (t(r[e], e, r))
      return true;
  return false;
}
function mr(r, t) {
  return r.has(t);
}
var Ce = 1;
var Ie = 2;
function Sr(r, t, e, a, n, u) {
  var o = e & Ce, c = r.length, f = t.length;
  if (c != f && !(o && f > c))
    return false;
  var v = u.get(r), l = u.get(t);
  if (v && l)
    return v == t && l == r;
  var s = -1, b = true, d = e & Ie ? new C() : void 0;
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
        if (!mr(d, _) && (y === h || n(y, h, e, a, u)))
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
function $e(r) {
  var t = -1, e = Array(r.size);
  return r.forEach(function(a, n) {
    e[++t] = [n, a];
  }), e;
}
function T(r) {
  var t = -1, e = Array(r.size);
  return r.forEach(function(a) {
    e[++t] = a;
  }), e;
}
var Ee = 1;
var xe = 2;
var Be = "[object Boolean]";
var ke = "[object Date]";
var ze = "[object Error]";
var Le = "[object Map]";
var Ue = "[object Number]";
var De = "[object RegExp]";
var Fe = "[object Set]";
var Me = "[object String]";
var Pe = "[object Symbol]";
var Ve = "[object ArrayBuffer]";
var Ne = "[object DataView]";
var er = D0 ? D0.prototype : void 0;
var U = er ? er.valueOf : void 0;
function Qe(r, t, e, a, n, u, o) {
  switch (e) {
    case Ne:
      if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset)
        return false;
      r = r.buffer, t = t.buffer;
    case Ve:
      return !(r.byteLength != t.byteLength || !u(new y4(r), new y4(t)));
    case Be:
    case ke:
    case Ue:
      return Mu(+r, +t);
    case ze:
      return r.name == t.name && r.message == t.message;
    case De:
    case Me:
      return r == t + "";
    case Le:
      var c = $e;
    case Fe:
      var f = a & Ee;
      if (c || (c = T), r.size != t.size && !f)
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
var Te = 1;
var Re = Object.prototype;
var We = Re.hasOwnProperty;
function qe(r, t, e, a, n, u) {
  var o = e & Te, c = F(r), f = c.length, v = F(t), l = v.length;
  if (f != l && !o)
    return false;
  for (var s = f; s--; ) {
    var b = c[s];
    if (!(o ? b in t : We.call(t, b)))
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
      var q = o ? a(_, h, b, t, r, u) : a(h, _, b, r, t, u);
    if (!(q === void 0 ? h === _ || n(h, _, e, a, u) : q)) {
      p = false;
      break;
    }
    j || (j = b == "constructor");
  }
  if (p && !j) {
    var I = r.constructor, $ = t.constructor;
    I != $ && "constructor" in r && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof $ == "function" && $ instanceof $) && (p = false);
  }
  return u.delete(r), u.delete(t), p;
}
var Ge = 1;
var ar = "[object Arguments]";
var ur = "[object Array]";
var E = "[object Object]";
var Je = Object.prototype;
var nr = Je.hasOwnProperty;
function Xe(r, t, e, a, n, u) {
  var o = I0(r), c = I0(t), f = o ? ur : Ds(r), v = c ? ur : Ds(t);
  f = f == ar ? E : f, v = v == ar ? E : v;
  var l = f == E, s = v == E, b = f == v;
  if (b && Jm(r)) {
    if (!Jm(t))
      return false;
    o = true, l = false;
  }
  if (b && !l)
    return u || (u = new yo()), o || Qm(r) ? Sr(r, t, e, a, n, u) : Qe(r, t, f, e, a, n, u);
  if (!(e & Ge)) {
    var d = l && nr.call(r, "__wrapped__"), y = s && nr.call(t, "__wrapped__");
    if (d || y) {
      var p = d ? r.value() : r, j = y ? t.value() : t;
      return u || (u = new yo()), n(p, j, e, a, u);
    }
  }
  return b ? (u || (u = new yo()), qe(r, t, e, a, n, u)) : false;
}
function R(r, t, e, a, n) {
  return r === t ? true : r == null || t == null || !fc(r) && !fc(t) ? r !== r && t !== t : Xe(r, t, e, a, R, n);
}
var He = 1;
var Ke = 2;
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
      var l = new yo(), s;
      if (!(s === void 0 ? R(v, f, He | Ke, a, l) : s))
        return false;
    }
  }
  return true;
}
function Cr(r) {
  return r === r && !aa(r);
}
function Ze(r) {
  for (var t = A(r), e = t.length; e--; ) {
    var a = t[e], n = r[a];
    t[e] = [a, n, Cr(n)];
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
  t = hr(t, r);
  for (var a = -1, n = t.length, u = false; ++a < n; ) {
    var o = k(t[a]);
    if (!(u = r != null && e(r, o)))
      break;
    r = r[o];
  }
  return u || ++a != n ? u : (n = r == null ? 0 : r.length, !!n && Bk(n) && Nk(o, n) && (I0(r) || N0(r)));
}
function aa2(r, t) {
  return r != null && ea(r, t, ta);
}
var ua = 1;
var na = 2;
function oa(r, t) {
  return V(r) && Cr(t) ? Ir(k(r), t) : function(e) {
    var a = ot(e, r);
    return a === void 0 && a === t ? aa2(e, r) : R(t, a, ua | na);
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
  return V(r) ? ca(k(r)) : fa(r);
}
function $r(r) {
  return typeof r == "function" ? r : r == null ? zk : typeof r == "object" ? I0(r) ? oa(r[0], r[1]) : ra(r) : sa(r);
}
function ia(r, t) {
  return r && PV(r, t, A);
}
function la(r, t) {
  return function(e, a) {
    if (e == null)
      return e;
    if (!Fu(e))
      return r(e, a);
    for (var n = e.length, u = -1, o = Object(e); ++u < n && a(o[u], u, o) !== false; )
      ;
    return e;
  };
}
var W = la(ia);
function ba(r) {
  return typeof r == "function" ? r : zk;
}
function _a(r, t) {
  var e = I0(r) ? jr : W;
  return e(r, ba(t));
}
function va(r, t) {
  var e = [];
  return W(r, function(a, n, u) {
    t(a, n, u) && e.push(a);
  }), e;
}
function Aa(r, t) {
  var e = I0(r) ? pr : va;
  return e(r, $r(t));
}
function ja(r, t) {
  return br(t, function(e) {
    return r[e];
  });
}
function Oa(r) {
  return r == null ? [] : ja(r, A(r));
}
function ma(r) {
  return r === void 0;
}
function ha(r, t, e, a, n) {
  return n(r, function(u, o, c) {
    e = a ? (a = false, u) : t(e, u, o, c);
  }), e;
}
function Sa(r, t, e) {
  var a = I0(r) ? ft : ha, n = arguments.length < 3;
  return a(r, $r(t), e, n, W);
}
var ya = 1 / 0;
var pa = g1 && 1 / T(new g1([, -0]))[1] == ya ? function(r) {
  return new g1(r);
} : qr;
var ga = 200;
function Ca(r, t, e) {
  var a = -1, n = Kr, u = r.length, o = true, c = [], f = c;
  if (u >= ga) {
    var v = t ? null : pa(r);
    if (v)
      return T(v);
    o = false, n = mr, f = new C();
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
  qr,
  Gr,
  Hr,
  Kr,
  A,
  nt,
  hr,
  k,
  yr,
  wa,
  pr,
  yt,
  L,
  C,
  Se,
  mr,
  ea,
  aa2 as aa,
  $r,
  ia,
  W,
  ba,
  _a,
  va,
  Aa,
  Oa,
  ma,
  Sa,
  Ca
};
//# sourceMappingURL=chunk-CSA5CQKO.js.map
