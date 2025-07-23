import {
  E,
  K,
  it,
  tt
} from "./chunk-SVWAV6MX.js";
import {
  a
} from "./chunk-N2GOZMTB.js";
import {
  Pm,
  Wl,
  Yi,
  sH,
  t4
} from "./chunk-XXGV6SHG.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/linear-DXhVdCfR-C04MQjhA.js
function g(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function B(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function x(t) {
  let n, u, e;
  t.length !== 2 ? (n = g, u = (i, c) => g(t(i), c), e = (i, c) => t(i) - c) : (n = t === g || t === B ? t : O, u = t, e = t);
  function a2(i, c, r = 0, h = i.length) {
    if (r < h) {
      if (n(c, c) !== 0) return h;
      do {
        const l = r + h >>> 1;
        u(i[l], c) < 0 ? r = l + 1 : h = l;
      } while (r < h);
    }
    return r;
  }
  function f(i, c, r = 0, h = i.length) {
    if (r < h) {
      if (n(c, c) !== 0) return h;
      do {
        const l = r + h >>> 1;
        u(i[l], c) <= 0 ? r = l + 1 : h = l;
      } while (r < h);
    }
    return r;
  }
  function o(i, c, r = 0, h = i.length) {
    const l = a2(i, c, r, h - 1);
    return l > r && e(i[l - 1], c) > -e(i[l], c) ? l - 1 : l;
  }
  return { left: a2, center: o, right: f };
}
function O() {
  return 0;
}
function R(t) {
  return t === null ? NaN : +t;
}
var T = x(g);
var _ = T.right;
x(R).center;
var C = Math.sqrt(50);
var E2 = Math.sqrt(10);
var F = Math.sqrt(2);
function p(t, n, u) {
  const e = (n - t) / Math.max(0, u), a2 = Math.floor(Math.log10(e)), f = e / Math.pow(10, a2), o = f >= C ? 10 : f >= E2 ? 5 : f >= F ? 2 : 1;
  let i, c, r;
  return a2 < 0 ? (r = Math.pow(10, -a2) / o, i = Math.round(t * r), c = Math.round(n * r), i / r < t && ++i, c / r > n && --c, r = -r) : (r = Math.pow(10, a2) * o, i = Math.round(t / r), c = Math.round(n / r), i * r < t && ++i, c * r > n && --c), c < i && 0.5 <= u && u < 2 ? p(t, n, u * 2) : [i, c, r];
}
function G(t, n, u) {
  if (n = +n, t = +t, u = +u, !(u > 0)) return [];
  if (t === n) return [t];
  const e = n < t, [a2, f, o] = e ? p(n, t, u) : p(t, n, u);
  if (!(f >= a2)) return [];
  const i = f - a2 + 1, c = new Array(i);
  if (e)
    if (o < 0) for (let r = 0; r < i; ++r) c[r] = (f - r) / -o;
    else for (let r = 0; r < i; ++r) c[r] = (f - r) * o;
  else if (o < 0) for (let r = 0; r < i; ++r) c[r] = (a2 + r) / -o;
  else for (let r = 0; r < i; ++r) c[r] = (a2 + r) * o;
  return c;
}
function v(t, n, u) {
  return n = +n, t = +t, u = +u, p(t, n, u)[2];
}
function H(t, n, u) {
  n = +n, t = +t, u = +u;
  const e = n < t, a2 = e ? v(n, t, u) : v(t, n, u);
  return (e ? -1 : 1) * (a2 < 0 ? 1 / -a2 : a2);
}
function I(t, n) {
  n || (n = []);
  var u = t ? Math.min(n.length, t.length) : 0, e = n.slice(), a2;
  return function(f) {
    for (a2 = 0; a2 < u; ++a2) e[a2] = t[a2] * (1 - f) + n[a2] * f;
    return e;
  };
}
function K2(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function L(t, n) {
  var u = n ? n.length : 0, e = t ? Math.min(u, t.length) : 0, a2 = new Array(e), f = new Array(u), o;
  for (o = 0; o < e; ++o) a2[o] = w(t[o], n[o]);
  for (; o < u; ++o) f[o] = n[o];
  return function(i) {
    for (o = 0; o < e; ++o) f[o] = a2[o](i);
    return f;
  };
}
function Q(t, n) {
  var u = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(e) {
    return u.setTime(t * (1 - e) + n * e), u;
  };
}
function S(t, n) {
  var u = {}, e = {}, a2;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (a2 in n)
    a2 in t ? u[a2] = w(t[a2], n[a2]) : e[a2] = n[a2];
  return function(f) {
    for (a2 in u) e[a2] = u[a2](f);
    return e;
  };
}
function w(t, n) {
  var u = typeof n, e;
  return n == null || u === "boolean" ? Pm(n) : (u === "number" ? Yi : u === "string" ? (e = Wl(n)) ? (n = e, t4) : sH : n instanceof Wl ? t4 : n instanceof Date ? Q : K2(n) ? I : Array.isArray(n) ? L : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? S : Yi)(t, n);
}
function U(t, n) {
  return t = +t, n = +n, function(u) {
    return Math.round(t * (1 - u) + n * u);
  };
}
function W(t) {
  return Math.max(0, -K(Math.abs(t)));
}
function X(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(K(n) / 3))) * 3 - K(Math.abs(t)));
}
function Y(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, K(n) - K(t)) + 1;
}
function Z(t) {
  return function() {
    return t;
  };
}
function z(t) {
  return +t;
}
var A = [0, 1];
function m(t) {
  return t;
}
function y(t, n) {
  return (n -= t = +t) ? function(u) {
    return (u - t) / n;
  } : Z(isNaN(n) ? NaN : 0.5);
}
function P(t, n) {
  var u;
  return t > n && (u = t, t = n, n = u), function(e) {
    return Math.max(t, Math.min(n, e));
  };
}
function tt2(t, n, u) {
  var e = t[0], a2 = t[1], f = n[0], o = n[1];
  return a2 < e ? (e = y(a2, e), f = u(o, f)) : (e = y(e, a2), f = u(f, o)), function(i) {
    return f(e(i));
  };
}
function nt(t, n, u) {
  var e = Math.min(t.length, n.length) - 1, a2 = new Array(e), f = new Array(e), o = -1;
  for (t[e] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < e; )
    a2[o] = y(t[o], t[o + 1]), f[o] = u(n[o], n[o + 1]);
  return function(i) {
    var c = _(t, i, 1, e) - 1;
    return f[c](a2[c](i));
  };
}
function et(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function rt() {
  var t = A, n = A, u = w, e, a2, f, o = m, i, c, r;
  function h() {
    var s = Math.min(t.length, n.length);
    return o !== m && (o = P(t[0], t[s - 1])), i = s > 2 ? nt : tt2, c = r = null, l;
  }
  function l(s) {
    return s == null || isNaN(s = +s) ? f : (c || (c = i(t.map(e), n, u)))(e(o(s)));
  }
  return l.invert = function(s) {
    return o(a2((r || (r = i(n, t.map(e), Yi)))(s)));
  }, l.domain = function(s) {
    return arguments.length ? (t = Array.from(s, z), h()) : t.slice();
  }, l.range = function(s) {
    return arguments.length ? (n = Array.from(s), h()) : n.slice();
  }, l.rangeRound = function(s) {
    return n = Array.from(s), u = U, h();
  }, l.clamp = function(s) {
    return arguments.length ? (o = s ? true : m, h()) : o !== m;
  }, l.interpolate = function(s) {
    return arguments.length ? (u = s, h()) : u;
  }, l.unknown = function(s) {
    return arguments.length ? (f = s, l) : f;
  }, function(s, k) {
    return e = s, a2 = k, h();
  };
}
function ut() {
  return rt()(m, m);
}
function at(t, n, u, e) {
  var a2 = H(t, n, u), f;
  switch (e = E(e ?? ",f"), e.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return e.precision == null && !isNaN(f = X(a2, o)) && (e.precision = f), it(e, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      e.precision == null && !isNaN(f = Y(a2, Math.max(Math.abs(t), Math.abs(n)))) && (e.precision = f - (e.type === "e"));
      break;
    }
    case "f":
    case "%": {
      e.precision == null && !isNaN(f = W(a2)) && (e.precision = f - (e.type === "%") * 2);
      break;
    }
  }
  return tt(e);
}
function ot(t) {
  var n = t.domain;
  return t.ticks = function(u) {
    var e = n();
    return G(e[0], e[e.length - 1], u ?? 10);
  }, t.tickFormat = function(u, e) {
    var a2 = n();
    return at(a2[0], a2[a2.length - 1], u ?? 10, e);
  }, t.nice = function(u) {
    u == null && (u = 10);
    var e = n(), a2 = 0, f = e.length - 1, o = e[a2], i = e[f], c, r, h = 10;
    for (i < o && (r = o, o = i, i = r, r = a2, a2 = f, f = r); h-- > 0; ) {
      if (r = v(o, i, u), r === c)
        return e[a2] = o, e[f] = i, n(e);
      if (r > 0)
        o = Math.floor(o / r) * r, i = Math.ceil(i / r) * r;
      else if (r < 0)
        o = Math.ceil(o * r) / r, i = Math.floor(i * r) / r;
      else
        break;
      c = r;
    }
    return t;
  }, t;
}
function it2() {
  var t = ut();
  return t.copy = function() {
    return et(t, it2());
  }, a.apply(t, arguments), ot(t);
}

export {
  x,
  H,
  et,
  ut,
  it2 as it
};
//# sourceMappingURL=chunk-MBJGVNY3.js.map
