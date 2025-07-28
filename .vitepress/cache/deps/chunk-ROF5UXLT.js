import {
  A,
  C,
  Er,
  Gr,
  M,
  R,
  br,
  ea,
  hr,
  wa,
  yr
} from "./chunk-F27AYW2L.js";
import {
  FX,
  N0,
  NX,
  co,
  ev,
  nv,
  q0,
  tv,
  uX,
  zu
} from "./chunk-G6K7VW2X.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/_basePickBy-CdA63Yk3-C10GSIx9.js
var P = /\s/;
function U(r) {
  for (var t = r.length; t-- && P.test(r.charAt(t)); )
    ;
  return t;
}
var z = /^\s+/;
function B(r) {
  return r && r.slice(0, U(r) + 1).replace(z, "");
}
var p = NaN;
var C2 = /^[-+]0x[0-9a-f]+$/i;
var D = /^0b[01]+$/i;
var G = /^0o[0-7]+$/i;
var J = parseInt;
function K(r) {
  if (typeof r == "number")
    return r;
  if (M(r))
    return p;
  if (co(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = co(t) ? t + "" : t;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = B(r);
  var a = D.test(r);
  return a || G.test(r) ? J(r.slice(2), a ? 2 : 8) : C2.test(r) ? p : +r;
}
var g = 1 / 0;
var M2 = 17976931348623157e292;
function R2(r) {
  if (!r)
    return r === 0 ? r : 0;
  if (r = K(r), r === g || r === -g) {
    var t = r < 0 ? -1 : 1;
    return t * M2;
  }
  return r === r ? r : 0;
}
function V(r) {
  var t = R2(r), a = t % 1;
  return t === t ? a ? t - a : t : 0;
}
function er(r) {
  var t = r == null ? 0 : r.length;
  return t ? wa(r) : [];
}
var m = Object.prototype;
var W = m.hasOwnProperty;
var ir = FX(function(r, t) {
  r = Object(r);
  var a = -1, u = t.length, n = u > 2 ? t[2] : void 0;
  for (n && NX(t[0], t[1], n) && (u = 1); ++a < u; )
    for (var i = t[a], o = ev(i), e = -1, f = o.length; ++e < f; ) {
      var v = o[e], l = r[v];
      (l === void 0 || N0(l, m[v]) && !W.call(r, v)) && (r[v] = i[v]);
    }
  return r;
});
function fr(r) {
  var t = r == null ? 0 : r.length;
  return t ? r[t - 1] : void 0;
}
function X(r) {
  return function(t, a, u) {
    var n = Object(t);
    if (!q0(t)) {
      var i = Er(a);
      t = A(t), a = function(e) {
        return i(n[e], e, n);
      };
    }
    var o = r(t, a, u);
    return o > -1 ? n[i ? t[o] : o] : void 0;
  };
}
var Z = Math.max;
function E(r, t, a) {
  var u = r == null ? 0 : r.length;
  if (!u)
    return -1;
  var n = a == null ? 0 : V(a);
  return n < 0 && (n = Z(u + n, 0)), Gr(r, Er(t), n);
}
var vr = X(E);
function F(r, t) {
  var a = -1, u = q0(r) ? Array(r.length) : [];
  return R(r, function(n, i, o) {
    u[++a] = t(n, i, o);
  }), u;
}
function lr(r, t) {
  var a = zu(r) ? br : F;
  return a(r, Er(t));
}
var S = Object.prototype;
var T = S.hasOwnProperty;
function rr(r, t) {
  return r != null && T.call(r, t);
}
function sr(r, t) {
  return r != null && ea(r, t, rr);
}
function tr(r, t) {
  return r < t;
}
function ar(r, t, a) {
  for (var u = -1, n = r.length; ++u < n; ) {
    var i = r[u], o = t(i);
    if (o != null && (e === void 0 ? o === o && !M(o) : a(o, e)))
      var e = o, f = i;
  }
  return f;
}
function cr(r) {
  return r && r.length ? ar(r, nv, tr) : void 0;
}
function nr(r, t, a, u) {
  if (!co(r))
    return r;
  t = hr(t, r);
  for (var n = -1, i = t.length, o = i - 1, e = r; e != null && ++n < i; ) {
    var f = C(t[n]), v = a;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return r;
    if (n != o) {
      var l = e[f];
      v = void 0, v === void 0 && (v = co(l) ? l : tv(t[n + 1]) ? [] : {});
    }
    uX(e, f, v), e = e[f];
  }
  return r;
}
function pr(r, t, a) {
  for (var u = -1, n = t.length, i = {}; ++u < n; ) {
    var o = t[u], e = yr(r, o);
    a(e, o) && nr(i, hr(o, r), e);
  }
  return i;
}

export {
  R2 as R,
  V,
  er,
  ir,
  fr,
  vr,
  F,
  lr,
  sr,
  tr,
  ar,
  cr,
  pr
};
//# sourceMappingURL=chunk-ROF5UXLT.js.map
