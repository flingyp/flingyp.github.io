import {
  $r,
  A,
  Gr,
  P,
  W,
  br,
  ea,
  hr,
  k,
  wa,
  yr
} from "./chunk-CSA5CQKO.js";
import {
  Fu,
  I0,
  Ik,
  Mu,
  Nk,
  aa,
  cX,
  lX,
  qG,
  zk
} from "./chunk-XXGV6SHG.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/_basePickBy-CWYLlH2g-Ddz4xLdB.js
var k2 = /\s/;
function q(r) {
  for (var t = r.length; t-- && k2.test(r.charAt(t)); )
    ;
  return t;
}
var z = /^\s+/;
function B(r) {
  return r && r.slice(0, q(r) + 1).replace(z, "");
}
var p = NaN;
var D = /^[-+]0x[0-9a-f]+$/i;
var G = /^0b[01]+$/i;
var H = /^0o[0-7]+$/i;
var I = parseInt;
function J(r) {
  if (typeof r == "number")
    return r;
  if (P(r))
    return p;
  if (aa(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = aa(t) ? t + "" : t;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = B(r);
  var a = G.test(r);
  return a || H.test(r) ? I(r.slice(2), a ? 2 : 8) : D.test(r) ? p : +r;
}
var h = 1 / 0;
var K = 17976931348623157e292;
function R(r) {
  if (!r)
    return r === 0 ? r : 0;
  if (r = J(r), r === h || r === -h) {
    var t = r < 0 ? -1 : 1;
    return t * K;
  }
  return r === r ? r : 0;
}
function V(r) {
  var t = R(r), a = t % 1;
  return t === t ? a ? t - a : t : 0;
}
function er(r) {
  var t = r == null ? 0 : r.length;
  return t ? wa(r) : [];
}
var O = Object.prototype;
var W2 = O.hasOwnProperty;
var ir = lX(function(r, t) {
  r = Object(r);
  var a = -1, u = t.length, n = u > 2 ? t[2] : void 0;
  for (n && cX(t[0], t[1], n) && (u = 1); ++a < u; )
    for (var i = t[a], o = Ik(i), e = -1, f = o.length; ++e < f; ) {
      var v = o[e], l = r[v];
      (l === void 0 || Mu(l, O[v]) && !W2.call(r, v)) && (r[v] = i[v]);
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
    if (!Fu(t)) {
      var i = $r(a);
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
  return n < 0 && (n = Z(u + n, 0)), Gr(r, $r(t), n);
}
var vr = X(E);
function F(r, t) {
  var a = -1, u = Fu(r) ? Array(r.length) : [];
  return W(r, function(n, i, o) {
    u[++a] = t(n, i, o);
  }), u;
}
function lr(r, t) {
  var a = I0(r) ? br : F;
  return a(r, $r(t));
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
    if (o != null && (e === void 0 ? o === o && !P(o) : a(o, e)))
      var e = o, f = i;
  }
  return f;
}
function cr(r) {
  return r && r.length ? ar(r, zk, tr) : void 0;
}
function nr(r, t, a, u) {
  if (!aa(r))
    return r;
  t = hr(t, r);
  for (var n = -1, i = t.length, o = i - 1, e = r; e != null && ++n < i; ) {
    var f = k(t[n]), v = a;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return r;
    if (n != o) {
      var l = e[f];
      v = void 0, v === void 0 && (v = aa(l) ? l : Nk(t[n + 1]) ? [] : {});
    }
    qG(e, f, v), e = e[f];
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
  R,
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
//# sourceMappingURL=chunk-HFG3CCC5.js.map
