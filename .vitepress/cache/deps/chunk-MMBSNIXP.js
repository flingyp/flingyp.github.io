import {
  SU,
  Um,
  a4,
  brt,
  drt,
  frt,
  grt,
  krt,
  mrt,
  o4,
  prt,
  va,
  wrt,
  xrt,
  yrt
} from "./chunk-XXGV6SHG.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/arc-BVZO_xsq-CNZcnQT3.js
function fn(i) {
  return i.innerRadius;
}
function ln(i) {
  return i.outerRadius;
}
function gn(i) {
  return i.startAngle;
}
function pn(i) {
  return i.endAngle;
}
function xn(i) {
  return i && i.padAngle;
}
function mn(i, d, L, E, v, T, q, a) {
  var I = L - i, r = E - d, n = q - v, p = a - T, u = p * I - n * r;
  if (!(u * u < a4))
    return u = (n * (d - T) - p * (i - v)) / u, [i + u * I, d + u * r];
}
function U(i, d, L, E, v, T, q) {
  var a = i - L, I = d - E, r = (q ? T : -T) / brt(a * a + I * I), n = r * I, p = -r * a, u = i + n, s = d + p, e = L + n, f = E + p, D = (u + e) / 2, o = (s + f) / 2, x = e - u, g = f - s, A = x * x + g * g, O = v - T, R = u * f - e * s, P = (g < 0 ? -1 : 1) * brt(mrt(0, O * O * A - R * R)), S = (R * g - x * P) / A, W = (-R * x - g * P) / A, B = (R * g + x * P) / A, m = (-R * x + g * P) / A, h = S - D, t = W - o, c = B - D, H = m - o;
  return h * h + t * t > c * c + H * H && (S = B, W = m), {
    cx: S,
    cy: W,
    x01: -n,
    y01: -p,
    x11: S * (v / O - 1),
    y11: W * (v / O - 1)
  };
}
function dn() {
  var i = fn, d = ln, L = va(0), E = null, v = gn, T = pn, q = xn, a = null, I = SU(r);
  function r() {
    var n, p, u = +i.apply(this, arguments), s = +d.apply(this, arguments), e = v.apply(this, arguments) - o4, f = T.apply(this, arguments) - o4, D = drt(f - e), o = f > e;
    if (a || (a = n = I()), s < u && (p = s, s = u, u = p), !(s > a4)) a.moveTo(0, 0);
    else if (D > xrt - a4)
      a.moveTo(s * frt(e), s * yrt(e)), a.arc(0, 0, s, e, f, !o), u > a4 && (a.moveTo(u * frt(f), u * yrt(f)), a.arc(0, 0, u, f, e, o));
    else {
      var x = e, g = f, A = e, O = f, R = D, P = D, S = q.apply(this, arguments) / 2, W = S > a4 && (E ? +E.apply(this, arguments) : brt(u * u + s * s)), B = grt(drt(s - u) / 2, +L.apply(this, arguments)), m = B, h = B, t, c;
      if (W > a4) {
        var H = krt(W / u * yrt(S)), b = krt(W / s * yrt(S));
        (R -= H * 2) > a4 ? (H *= o ? 1 : -1, A += H, O -= H) : (R = 0, A = O = (e + f) / 2), (P -= b * 2) > a4 ? (b *= o ? 1 : -1, x += b, g -= b) : (P = 0, x = g = (e + f) / 2);
      }
      var k = s * frt(x), z = s * yrt(x), G = u * frt(O), M = u * yrt(O);
      if (B > a4) {
        var N = s * frt(g), Q = s * yrt(g), X = u * frt(A), Z = u * yrt(A), F;
        if (D < Um)
          if (F = mn(k, z, X, Z, N, Q, G, M)) {
            var $ = k - F[0], V = z - F[1], w = N - F[0], J = Q - F[1], nn = 1 / yrt(wrt(($ * w + V * J) / (brt($ * $ + V * V) * brt(w * w + J * J))) / 2), tn = brt(F[0] * F[0] + F[1] * F[1]);
            m = grt(B, (u - tn) / (nn - 1)), h = grt(B, (s - tn) / (nn + 1));
          } else
            m = h = 0;
      }
      P > a4 ? h > a4 ? (t = U(X, Z, k, z, s, h, o), c = U(N, Q, G, M, s, h, o), a.moveTo(t.cx + t.x01, t.cy + t.y01), h < B ? a.arc(t.cx, t.cy, h, prt(t.y01, t.x01), prt(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, h, prt(t.y01, t.x01), prt(t.y11, t.x11), !o), a.arc(0, 0, s, prt(t.cy + t.y11, t.cx + t.x11), prt(c.cy + c.y11, c.cx + c.x11), !o), a.arc(c.cx, c.cy, h, prt(c.y11, c.x11), prt(c.y01, c.x01), !o))) : (a.moveTo(k, z), a.arc(0, 0, s, x, g, !o)) : a.moveTo(k, z), !(u > a4) || !(R > a4) ? a.lineTo(G, M) : m > a4 ? (t = U(G, M, N, Q, u, -m, o), c = U(k, z, X, Z, u, -m, o), a.lineTo(t.cx + t.x01, t.cy + t.y01), m < B ? a.arc(t.cx, t.cy, m, prt(t.y01, t.x01), prt(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, m, prt(t.y01, t.x01), prt(t.y11, t.x11), !o), a.arc(0, 0, u, prt(t.cy + t.y11, t.cx + t.x11), prt(c.cy + c.y11, c.cx + c.x11), o), a.arc(c.cx, c.cy, m, prt(c.y11, c.x11), prt(c.y01, c.x01), !o))) : a.arc(0, 0, u, O, A, o);
    }
    if (a.closePath(), n) return a = null, n + "" || null;
  }
  return r.centroid = function() {
    var n = (+i.apply(this, arguments) + +d.apply(this, arguments)) / 2, p = (+v.apply(this, arguments) + +T.apply(this, arguments)) / 2 - Um / 2;
    return [frt(p) * n, yrt(p) * n];
  }, r.innerRadius = function(n) {
    return arguments.length ? (i = typeof n == "function" ? n : va(+n), r) : i;
  }, r.outerRadius = function(n) {
    return arguments.length ? (d = typeof n == "function" ? n : va(+n), r) : d;
  }, r.cornerRadius = function(n) {
    return arguments.length ? (L = typeof n == "function" ? n : va(+n), r) : L;
  }, r.padRadius = function(n) {
    return arguments.length ? (E = n == null ? null : typeof n == "function" ? n : va(+n), r) : E;
  }, r.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : va(+n), r) : v;
  }, r.endAngle = function(n) {
    return arguments.length ? (T = typeof n == "function" ? n : va(+n), r) : T;
  }, r.padAngle = function(n) {
    return arguments.length ? (q = typeof n == "function" ? n : va(+n), r) : q;
  }, r.context = function(n) {
    return arguments.length ? (a = n ?? null, r) : a;
  }, r;
}

export {
  dn
};
//# sourceMappingURL=chunk-MMBSNIXP.js.map
