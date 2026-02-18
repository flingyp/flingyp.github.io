import {
  A,
  Er,
  L,
  P,
  R,
  br,
  ea,
  hr,
  qr,
  wa,
  yr
} from "./chunk-YWH6J5SK.js";
import {
  _8,
  aZ,
  e0,
  ed,
  ho,
  lZ,
  sd,
  v8,
  w8,
  zY
} from "./chunk-FMIKWIBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.2.1_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/_basePickBy-XITLGQxL-4VpGP9n9.js
var P2 = /\s/;
function k(r) {
  for (var t = r.length; t-- && P2.test(r.charAt(t)); )
    ;
  return t;
}
var q = /^\s+/;
function z(r) {
  return r && r.slice(0, k(r) + 1).replace(q, "");
}
var g = NaN;
var B = /^[-+]0x[0-9a-f]+$/i;
var D = /^0b[01]+$/i;
var G = /^0o[0-7]+$/i;
var H = parseInt;
function K(r) {
  if (typeof r == "number")
    return r;
  if (P(r))
    return g;
  if (ho(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = ho(t) ? t + "" : t;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = z(r);
  var a = D.test(r);
  return a || G.test(r) ? H(r.slice(2), a ? 2 : 8) : B.test(r) ? g : +r;
}
var p = 1 / 0;
var M = 17976931348623157e292;
function R2(r) {
  if (!r)
    return r === 0 ? r : 0;
  if (r = K(r), r === p || r === -p) {
    var t = r < 0 ? -1 : 1;
    return t * M;
  }
  return r === r ? r : 0;
}
function U(r) {
  var t = R2(r), a = t % 1;
  return t === t ? a ? t - a : t : 0;
}
function er(r) {
  var t = r == null ? 0 : r.length;
  return t ? wa(r) : [];
}
var O = Object.prototype;
var V = O.hasOwnProperty;
var ir = aZ(function(r, t) {
  r = Object(r);
  var a = -1, u = t.length, n = u > 2 ? t[2] : void 0;
  for (n && lZ(t[0], t[1], n) && (u = 1); ++a < u; )
    for (var i = t[a], o = v8(i), e = -1, v = o.length; ++e < v; ) {
      var f = o[e], l = r[f];
      (l === void 0 || ed(l, O[f]) && !V.call(r, f)) && (r[f] = i[f]);
    }
  return r;
});
function vr(r) {
  var t = r == null ? 0 : r.length;
  return t ? r[t - 1] : void 0;
}
function W(r) {
  return function(t, a, u) {
    var n = Object(t);
    if (!sd(t)) {
      var i = Er(a);
      t = A(t), a = function(e) {
        return i(n[e], e, n);
      };
    }
    var o = r(t, a, u);
    return o > -1 ? n[i ? t[o] : o] : void 0;
  };
}
var X = Math.max;
function Z(r, t, a) {
  var u = r == null ? 0 : r.length;
  if (!u)
    return -1;
  var n = a == null ? 0 : U(a);
  return n < 0 && (n = X(u + n, 0)), qr(r, Er(t), n);
}
var fr = W(Z);
function E(r, t) {
  var a = -1, u = sd(r) ? Array(r.length) : [];
  return R(r, function(n, i, o) {
    u[++a] = t(n, i, o);
  }), u;
}
function lr(r, t) {
  var a = e0(r) ? br : E;
  return a(r, Er(t));
}
var F = Object.prototype;
var T = F.hasOwnProperty;
function rr(r, t) {
  return r != null && T.call(r, t);
}
function cr(r, t) {
  return r != null && ea(r, t, rr);
}
function tr(r, t) {
  return r < t;
}
function ar(r, t, a) {
  for (var u = -1, n = r.length; ++u < n; ) {
    var i = r[u], o = t(i);
    if (o != null && (e === void 0 ? o === o && !P(o) : a(o, e)))
      var e = o, v = i;
  }
  return v;
}
function sr(r) {
  return r && r.length ? ar(r, _8, tr) : void 0;
}
function nr(r, t, a, u) {
  if (!ho(r))
    return r;
  t = yr(t, r);
  for (var n = -1, i = t.length, o = i - 1, e = r; e != null && ++n < i; ) {
    var v = L(t[n]), f = a;
    if (v === "__proto__" || v === "constructor" || v === "prototype")
      return r;
    if (n != o) {
      var l = e[v];
      f = void 0, f === void 0 && (f = ho(l) ? l : w8(t[n + 1]) ? [] : {});
    }
    zY(e, v, f), e = e[v];
  }
  return r;
}
function gr(r, t, a) {
  for (var u = -1, n = t.length, i = {}; ++u < n; ) {
    var o = t[u], e = hr(r, o);
    a(e, o) && nr(i, yr(o, r), e);
  }
  return i;
}

export {
  R2 as R,
  U,
  er,
  ir,
  vr,
  fr,
  E,
  lr,
  cr,
  tr,
  ar,
  sr,
  gr
};
//# sourceMappingURL=chunk-YNSPFRZC.js.map
