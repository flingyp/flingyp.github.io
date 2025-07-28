import {
  a
} from "./chunk-MWG22XKG.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/ordinal-DfAQgscy-BEJTu10r.js
var o = class extends Map {
  constructor(t, e = p) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), t != null) for (const [r, s] of t) this.set(r, s);
  }
  get(t) {
    return super.get(c(this, t));
  }
  has(t) {
    return super.has(c(this, t));
  }
  set(t, e) {
    return super.set(a2(this, t), e);
  }
  delete(t) {
    return super.delete(h(this, t));
  }
};
function c({ _intern: n, _key: t }, e) {
  const r = t(e);
  return n.has(r) ? n.get(r) : e;
}
function a2({ _intern: n, _key: t }, e) {
  const r = t(e);
  return n.has(r) ? n.get(r) : (n.set(r, e), e);
}
function h({ _intern: n, _key: t }, e) {
  const r = t(e);
  return n.has(r) && (e = n.get(r), n.delete(r)), e;
}
function p(n) {
  return n !== null && typeof n == "object" ? n.valueOf() : n;
}
var f = Symbol("implicit");
function g() {
  var n = new o(), t = [], e = [], r = f;
  function s(u) {
    let i = n.get(u);
    if (i === void 0) {
      if (r !== f) return r;
      n.set(u, i = t.push(u) - 1);
    }
    return e[i % e.length];
  }
  return s.domain = function(u) {
    if (!arguments.length) return t.slice();
    t = [], n = new o();
    for (const i of u)
      n.has(i) || n.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(u) {
    return arguments.length ? (e = Array.from(u), s) : e.slice();
  }, s.unknown = function(u) {
    return arguments.length ? (r = u, s) : r;
  }, s.copy = function() {
    return g(t, e).unknown(r);
  }, a.apply(s, arguments), s;
}

export {
  g
};
//# sourceMappingURL=chunk-AJ275QFQ.js.map
