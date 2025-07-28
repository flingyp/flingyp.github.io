import {
  Jm,
  To,
  ZU,
  ant,
  cnt,
  dnt,
  fnt,
  g4,
  hnt,
  lnt,
  m4,
  mnt,
  ont,
  pnt,
  unt
} from "./chunk-G6K7VW2X.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/arc-Cn58oiF3-fcc35lCa.js
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
function mn(i, d, L, F, v, $, H, a) {
  var P = L - i, r = F - d, n = H - v, p = a - $, u = p * P - n * r;
  if (!(u * u < m4))
    return u = (n * (d - $) - p * (i - v)) / u, [i + u * P, d + u * r];
}
function V(i, d, L, F, v, $, H) {
  var a = i - L, P = d - F, r = (H ? $ : -$) / dnt(a * a + P * P), n = r * P, p = -r * a, u = i + n, s = d + p, e = L + n, f = F + p, S = (u + e) / 2, o = (s + f) / 2, x = e - u, g = f - s, T = x * x + g * g, A = v - $, O = u * f - e * s, W = (g < 0 ? -1 : 1) * dnt(cnt(0, A * A * T - O * O)), q = (O * g - x * W) / T, B = (-O * x - g * W) / T, R = (O * g + x * W) / T, m = (-O * x + g * W) / T, h = q - S, t = B - o, c = R - S, _ = m - o;
  return h * h + t * t > c * c + _ * _ && (q = R, B = m), {
    cx: q,
    cy: B,
    x01: -n,
    y01: -p,
    x11: q * (v / A - 1),
    y11: B * (v / A - 1)
  };
}
function dn() {
  var i = fn, d = ln, L = To(0), F = null, v = gn, $ = pn, H = xn, a = null, P = ZU(r);
  function r() {
    var n, p, u = +i.apply(this, arguments), s = +d.apply(this, arguments), e = v.apply(this, arguments) - g4, f = $.apply(this, arguments) - g4, S = ont(f - e), o = f > e;
    if (a || (a = n = P()), s < u && (p = s, s = u, u = p), !(s > m4)) a.moveTo(0, 0);
    else if (S > pnt - m4)
      a.moveTo(s * lnt(e), s * unt(e)), a.arc(0, 0, s, e, f, !o), u > m4 && (a.moveTo(u * lnt(f), u * unt(f)), a.arc(0, 0, u, f, e, o));
    else {
      var x = e, g = f, T = e, A = f, O = S, W = S, q = H.apply(this, arguments) / 2, B = q > m4 && (F ? +F.apply(this, arguments) : dnt(u * u + s * s)), R = hnt(ont(s - u) / 2, +L.apply(this, arguments)), m = R, h = R, t, c;
      if (B > m4) {
        var _ = mnt(B / u * unt(q)), G = mnt(B / s * unt(q));
        (O -= _ * 2) > m4 ? (_ *= o ? 1 : -1, T += _, A -= _) : (O = 0, T = A = (e + f) / 2), (W -= G * 2) > m4 ? (G *= o ? 1 : -1, x += G, g -= G) : (W = 0, x = g = (e + f) / 2);
      }
      var j = s * lnt(x), z = s * unt(x), M = u * lnt(A), N = u * unt(A);
      if (R > m4) {
        var Q = s * lnt(g), U = s * unt(g), X = u * lnt(T), Y = u * unt(T), I;
        if (S < Jm)
          if (I = mn(j, z, X, Y, Q, U, M, N)) {
            var Z = j - I[0], J = z - I[1], K = Q - I[0], w = U - I[1], nn = 1 / unt(fnt((Z * K + J * w) / (dnt(Z * Z + J * J) * dnt(K * K + w * w))) / 2), tn = dnt(I[0] * I[0] + I[1] * I[1]);
            m = hnt(R, (u - tn) / (nn - 1)), h = hnt(R, (s - tn) / (nn + 1));
          } else
            m = h = 0;
      }
      W > m4 ? h > m4 ? (t = V(X, Y, j, z, s, h, o), c = V(Q, U, M, N, s, h, o), a.moveTo(t.cx + t.x01, t.cy + t.y01), h < R ? a.arc(t.cx, t.cy, h, ant(t.y01, t.x01), ant(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, h, ant(t.y01, t.x01), ant(t.y11, t.x11), !o), a.arc(0, 0, s, ant(t.cy + t.y11, t.cx + t.x11), ant(c.cy + c.y11, c.cx + c.x11), !o), a.arc(c.cx, c.cy, h, ant(c.y11, c.x11), ant(c.y01, c.x01), !o))) : (a.moveTo(j, z), a.arc(0, 0, s, x, g, !o)) : a.moveTo(j, z), !(u > m4) || !(O > m4) ? a.lineTo(M, N) : m > m4 ? (t = V(M, N, Q, U, u, -m, o), c = V(j, z, X, Y, u, -m, o), a.lineTo(t.cx + t.x01, t.cy + t.y01), m < R ? a.arc(t.cx, t.cy, m, ant(t.y01, t.x01), ant(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, m, ant(t.y01, t.x01), ant(t.y11, t.x11), !o), a.arc(0, 0, u, ant(t.cy + t.y11, t.cx + t.x11), ant(c.cy + c.y11, c.cx + c.x11), o), a.arc(c.cx, c.cy, m, ant(c.y11, c.x11), ant(c.y01, c.x01), !o))) : a.arc(0, 0, u, A, T, o);
    }
    if (a.closePath(), n) return a = null, n + "" || null;
  }
  return r.centroid = function() {
    var n = (+i.apply(this, arguments) + +d.apply(this, arguments)) / 2, p = (+v.apply(this, arguments) + +$.apply(this, arguments)) / 2 - Jm / 2;
    return [lnt(p) * n, unt(p) * n];
  }, r.innerRadius = function(n) {
    return arguments.length ? (i = typeof n == "function" ? n : To(+n), r) : i;
  }, r.outerRadius = function(n) {
    return arguments.length ? (d = typeof n == "function" ? n : To(+n), r) : d;
  }, r.cornerRadius = function(n) {
    return arguments.length ? (L = typeof n == "function" ? n : To(+n), r) : L;
  }, r.padRadius = function(n) {
    return arguments.length ? (F = n == null ? null : typeof n == "function" ? n : To(+n), r) : F;
  }, r.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : To(+n), r) : v;
  }, r.endAngle = function(n) {
    return arguments.length ? ($ = typeof n == "function" ? n : To(+n), r) : $;
  }, r.padAngle = function(n) {
    return arguments.length ? (H = typeof n == "function" ? n : To(+n), r) : H;
  }, r.context = function(n) {
    return arguments.length ? (a = n ?? null, r) : a;
  }, r;
}

export {
  dn
};
//# sourceMappingURL=chunk-PHHNTA27.js.map
