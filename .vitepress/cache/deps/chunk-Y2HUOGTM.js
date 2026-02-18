import {
  $o,
  $ot,
  Bot,
  CX,
  Dot,
  Eot,
  Fot,
  Iot,
  Lot,
  Mot,
  Not,
  Oot,
  gx,
  qg,
  yx
} from "./chunk-FMIKWIBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.2.1_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/arc-aavUJmbb-BU898awq.js
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
function mn(i, d, I, q, v, F, S, a) {
  var L = I - i, r = q - d, n = S - v, p = a - F, u = p * L - n * r;
  if (!(u * u < gx))
    return u = (n * (d - F) - p * (i - v)) / u, [i + u * L, d + u * r];
}
function X(i, d, I, q, v, F, S) {
  var a = i - I, L = d - q, r = (S ? F : -F) / Dot(a * a + L * L), n = r * L, p = -r * a, u = i + n, s = d + p, e = I + n, f = q + p, _ = (u + e) / 2, o = (s + f) / 2, x = e - u, g = f - s, T = x * x + g * g, A = v - F, O = u * f - e * s, P = (g < 0 ? -1 : 1) * Dot(Bot(0, A * A * T - O * O)), W = (O * g - x * P) / T, B = (-O * x - g * P) / T, R = (O * g + x * P) / T, m = (-O * x + g * P) / T, h = W - _, t = B - o, c = R - _, j = m - o;
  return h * h + t * t > c * c + j * j && (W = R, B = m), {
    cx: W,
    cy: B,
    x01: -n,
    y01: -p,
    x11: W * (v / A - 1),
    y11: B * (v / A - 1)
  };
}
function dn() {
  var i = fn, d = ln, I = $o(0), q = null, v = gn, F = pn, S = xn, a = null, L = CX(r);
  function r() {
    var n, p, u = +i.apply(this, arguments), s = +d.apply(this, arguments), e = v.apply(this, arguments) - yx, f = F.apply(this, arguments) - yx, _ = $ot(f - e), o = f > e;
    if (a || (a = n = L()), s < u && (p = s, s = u, u = p), !(s > gx)) a.moveTo(0, 0);
    else if (_ > Not - gx)
      a.moveTo(s * Mot(e), s * Fot(e)), a.arc(0, 0, s, e, f, !o), u > gx && (a.moveTo(u * Mot(f), u * Fot(f)), a.arc(0, 0, u, f, e, o));
    else {
      var x = e, g = f, T = e, A = f, O = _, P = _, W = S.apply(this, arguments) / 2, B = W > gx && (q ? +q.apply(this, arguments) : Dot(u * u + s * s)), R = Lot($ot(s - u) / 2, +I.apply(this, arguments)), m = R, h = R, t, c;
      if (B > gx) {
        var j = Iot(B / u * Fot(W)), b = Iot(B / s * Fot(W));
        (O -= j * 2) > gx ? (j *= o ? 1 : -1, T += j, A -= j) : (O = 0, T = A = (e + f) / 2), (P -= b * 2) > gx ? (b *= o ? 1 : -1, x += b, g -= b) : (P = 0, x = g = (e + f) / 2);
      }
      var G = s * Mot(x), Q = s * Fot(x), k = u * Mot(A), M = u * Fot(A);
      if (R > gx) {
        var N = s * Mot(g), U = s * Fot(g), Y = u * Mot(T), $ = u * Fot(T), H;
        if (_ < qg)
          if (H = mn(G, Q, Y, $, N, U, k, M)) {
            var J = G - H[0], K = Q - H[1], V = N - H[0], w = U - H[1], nn = 1 / Fot(Oot((J * V + K * w) / (Dot(J * J + K * K) * Dot(V * V + w * w))) / 2), tn = Dot(H[0] * H[0] + H[1] * H[1]);
            m = Lot(R, (u - tn) / (nn - 1)), h = Lot(R, (s - tn) / (nn + 1));
          } else
            m = h = 0;
      }
      P > gx ? h > gx ? (t = X(Y, $, G, Q, s, h, o), c = X(N, U, k, M, s, h, o), a.moveTo(t.cx + t.x01, t.cy + t.y01), h < R ? a.arc(t.cx, t.cy, h, Eot(t.y01, t.x01), Eot(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, h, Eot(t.y01, t.x01), Eot(t.y11, t.x11), !o), a.arc(0, 0, s, Eot(t.cy + t.y11, t.cx + t.x11), Eot(c.cy + c.y11, c.cx + c.x11), !o), a.arc(c.cx, c.cy, h, Eot(c.y11, c.x11), Eot(c.y01, c.x01), !o))) : (a.moveTo(G, Q), a.arc(0, 0, s, x, g, !o)) : a.moveTo(G, Q), !(u > gx) || !(O > gx) ? a.lineTo(k, M) : m > gx ? (t = X(k, M, N, U, u, -m, o), c = X(G, Q, Y, $, u, -m, o), a.lineTo(t.cx + t.x01, t.cy + t.y01), m < R ? a.arc(t.cx, t.cy, m, Eot(t.y01, t.x01), Eot(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, m, Eot(t.y01, t.x01), Eot(t.y11, t.x11), !o), a.arc(0, 0, u, Eot(t.cy + t.y11, t.cx + t.x11), Eot(c.cy + c.y11, c.cx + c.x11), o), a.arc(c.cx, c.cy, m, Eot(c.y11, c.x11), Eot(c.y01, c.x01), !o))) : a.arc(0, 0, u, A, T, o);
    }
    if (a.closePath(), n) return a = null, n + "" || null;
  }
  return r.centroid = function() {
    var n = (+i.apply(this, arguments) + +d.apply(this, arguments)) / 2, p = (+v.apply(this, arguments) + +F.apply(this, arguments)) / 2 - qg / 2;
    return [Mot(p) * n, Fot(p) * n];
  }, r.innerRadius = function(n) {
    return arguments.length ? (i = typeof n == "function" ? n : $o(+n), r) : i;
  }, r.outerRadius = function(n) {
    return arguments.length ? (d = typeof n == "function" ? n : $o(+n), r) : d;
  }, r.cornerRadius = function(n) {
    return arguments.length ? (I = typeof n == "function" ? n : $o(+n), r) : I;
  }, r.padRadius = function(n) {
    return arguments.length ? (q = n == null ? null : typeof n == "function" ? n : $o(+n), r) : q;
  }, r.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : $o(+n), r) : v;
  }, r.endAngle = function(n) {
    return arguments.length ? (F = typeof n == "function" ? n : $o(+n), r) : F;
  }, r.padAngle = function(n) {
    return arguments.length ? (S = typeof n == "function" ? n : $o(+n), r) : S;
  }, r.context = function(n) {
    return arguments.length ? (a = n ?? null, r) : a;
  }, r;
}

export {
  dn
};
//# sourceMappingURL=chunk-Y2HUOGTM.js.map
