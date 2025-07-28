import {
  n
} from "./chunk-TB5PDJK3.js";
import {
  V,
  cr,
  er,
  fr,
  ir,
  lr,
  pr as pr2,
  sr,
  vr
} from "./chunk-ROF5UXLT.js";
import {
  A,
  Aa,
  Er,
  I,
  Ia,
  Kr,
  Oa,
  Or,
  R,
  Sa,
  Se,
  Wr,
  Xr,
  _a,
  br,
  ma,
  pr,
  va,
  wa,
  yt
} from "./chunk-F27AYW2L.js";
import {
  B4,
  FX,
  IX,
  TG,
  aX,
  ba,
  c5,
  co,
  dX,
  gc,
  ig,
  nv,
  q0,
  sg,
  uX,
  z0,
  zu
} from "./chunk-G6K7VW2X.js";
import {
  __publicField
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/mermaid-parser.core-B3YmDCTF-BpJhWbpr.js
var Oc = Object.prototype;
var _c = Oc.hasOwnProperty;
var Ae = IX(function(r, e) {
  if (z0(e) || q0(e)) {
    dX(e, A(e), r);
    return;
  }
  for (var t in e)
    _c.call(e, t) && uX(r, t, e[t]);
});
function wl(r, e, t) {
  var n2 = -1, i = r.length;
  e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++n2 < i; )
    s[n2] = r[n2 + e];
  return s;
}
function _r(r) {
  for (var e = -1, t = r == null ? 0 : r.length, n2 = 0, i = []; ++e < t; ) {
    var s = r[e];
    s && (i[n2++] = s);
  }
  return i;
}
function Pc(r, e, t, n2) {
  for (var i = -1, s = r == null ? 0 : r.length; ++i < s; ) {
    var a = r[i];
    e(n2, a, t(a), r);
  }
  return n2;
}
function Mc(r, e, t, n2) {
  return R(r, function(i, s, a) {
    e(n2, i, t(i), a);
  }), n2;
}
function Dc(r, e) {
  return function(t, n2) {
    var i = zu(t) ? Pc : Mc, s = {};
    return i(t, r, Er(n2), s);
  };
}
var Fc = 200;
function Uc(r, e, t, n2) {
  var i = -1, s = Xr, a = true, o = r.length, l = [], u = e.length;
  if (!o)
    return l;
  e.length >= Fc && (s = Or, a = false, e = new I(e));
  e:
    for (; ++i < o; ) {
      var c = r[i], d = c;
      if (c = c !== 0 ? c : 0, a && d === d) {
        for (var f = u; f--; )
          if (e[f] === d)
            continue e;
        l.push(c);
      } else s(e, d, n2) || l.push(c);
    }
  return l;
}
var qn = FX(function(r, e) {
  return TG(r) ? Uc(r, wa(e, 1, TG, true)) : [];
});
function J(r, e, t) {
  var n2 = r == null ? 0 : r.length;
  return n2 ? (e = e === void 0 ? 1 : V(e), wl(r, e < 0 ? 0 : e, n2)) : [];
}
function wr(r, e, t) {
  var n2 = r == null ? 0 : r.length;
  return n2 ? (e = e === void 0 ? 1 : V(e), e = n2 - e, wl(r, 0, e < 0 ? 0 : e)) : [];
}
function Gc(r, e) {
  for (var t = -1, n2 = r == null ? 0 : r.length; ++t < n2; )
    if (!e(r[t], t, r))
      return false;
  return true;
}
function Bc(r, e) {
  var t = true;
  return R(r, function(n2, i, s) {
    return t = !!e(n2, i, s), t;
  }), t;
}
function _e(r, e, t) {
  var n2 = zu(r) ? Gc : Bc;
  return n2(r, Er(e));
}
function Pe(r) {
  return r && r.length ? r[0] : void 0;
}
function Ee(r, e) {
  return wa(lr(r, e));
}
var Kc = Object.prototype;
var Vc = Kc.hasOwnProperty;
var jc = Dc(function(r, e, t) {
  Vc.call(r, t) ? r[t].push(e) : sg(r, t, [e]);
});
var Hc = "[object String]";
function he(r) {
  return typeof r == "string" || !zu(r) && gc(r) && ba(r) == Hc;
}
var Wc = Math.max;
function de(r, e, t, n2) {
  r = q0(r) ? r : ma(r), t = t ? V(t) : 0;
  var i = r.length;
  return t < 0 && (t = Wc(i + t, 0)), he(r) ? t <= i && r.indexOf(e, t) > -1 : !!i && Kr(r, e, t) > -1;
}
function ya(r, e, t) {
  var n2 = r == null ? 0 : r.length;
  if (!n2)
    return -1;
  var i = 0;
  return Kr(r, e, i);
}
var zc = "[object RegExp]";
function Yc(r) {
  return gc(r) && ba(r) == zc;
}
var Ta = B4 && B4.isRegExp;
var Xe = Ta ? aX(Ta) : Yc;
var qc = "Expected a function";
function Xc(r) {
  if (typeof r != "function")
    throw new TypeError(qc);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !r.call(this);
      case 1:
        return !r.call(this, e[0]);
      case 2:
        return !r.call(this, e[0], e[1]);
      case 3:
        return !r.call(this, e[0], e[1], e[2]);
    }
    return !r.apply(this, e);
  };
}
function Me(r, e) {
  if (r == null)
    return {};
  var t = br(yt(r), function(n2) {
    return [n2];
  });
  return e = Er(e), pr2(r, t, function(n2, i) {
    return e(n2, i[0]);
  });
}
function Xn(r, e) {
  var t = zu(r) ? pr : va;
  return t(r, Xc(Er(e)));
}
function Qc(r, e) {
  var t;
  return R(r, function(n2, i, s) {
    return t = e(n2, i, s), !t;
  }), !!t;
}
function Ll(r, e, t) {
  var n2 = zu(r) ? Se : Qc;
  return n2(r, Er(e));
}
function Bs(r) {
  return r && r.length ? Ia(r) : [];
}
function Jc(r, e) {
  return r && r.length ? Ia(r, Er(e)) : [];
}
function ae(r) {
  return typeof r == "object" && r !== null && typeof r.$type == "string";
}
function Ge(r) {
  return typeof r == "object" && r !== null && typeof r.$refText == "string";
}
function Zc(r) {
  return typeof r == "object" && r !== null && typeof r.name == "string" && typeof r.type == "string" && typeof r.path == "string";
}
function dn(r) {
  return typeof r == "object" && r !== null && ae(r.container) && Ge(r.reference) && typeof r.message == "string";
}
var bl = class {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, t) {
    return ae(e) && this.isSubtype(e.$type, t);
  }
  isSubtype(e, t) {
    if (e === t)
      return true;
    let n2 = this.subtypes[e];
    n2 || (n2 = this.subtypes[e] = {});
    const i = n2[t];
    if (i !== void 0)
      return i;
    {
      const s = this.computeIsSubtype(e, t);
      return n2[t] = s, s;
    }
  }
  getAllSubTypes(e) {
    const t = this.allSubtypes[e];
    if (t)
      return t;
    {
      const n2 = this.getAllTypes(), i = [];
      for (const s of n2)
        this.isSubtype(s, e) && i.push(s);
      return this.allSubtypes[e] = i, i;
    }
  }
};
function Lr(r) {
  return typeof r == "object" && r !== null && Array.isArray(r.content);
}
function Ol(r) {
  return typeof r == "object" && r !== null && typeof r.tokenType == "object";
}
function _l(r) {
  return Lr(r) && typeof r.fullText == "string";
}
var Z = class _Z {
  constructor(e, t) {
    this.startFn = e, this.nextFn = t;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let t = 0, n2 = e.next();
    for (; !n2.done; )
      t++, n2 = e.next();
    return t;
  }
  toArray() {
    const e = [], t = this.iterator();
    let n2;
    do
      n2 = t.next(), n2.value !== void 0 && e.push(n2.value);
    while (!n2.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, t) {
    const n2 = this.map((i) => [
      e ? e(i) : i,
      t ? t(i) : i
    ]);
    return new Map(n2);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new _Z(() => ({ first: this.startFn(), firstDone: false, iterator: e[Symbol.iterator]() }), (t) => {
      let n2;
      if (!t.firstDone) {
        do
          if (n2 = this.nextFn(t.first), !n2.done)
            return n2;
        while (!n2.done);
        t.firstDone = true;
      }
      do
        if (n2 = t.iterator.next(), !n2.done)
          return n2;
      while (!n2.done);
      return Re;
    });
  }
  join(e = ",") {
    const t = this.iterator();
    let n2 = "", i, s = false;
    do
      i = t.next(), i.done || (s && (n2 += e), n2 += ed(i.value)), s = true;
    while (!i.done);
    return n2;
  }
  indexOf(e, t = 0) {
    const n2 = this.iterator();
    let i = 0, s = n2.next();
    for (; !s.done; ) {
      if (i >= t && s.value === e)
        return i;
      s = n2.next(), i++;
    }
    return -1;
  }
  every(e) {
    const t = this.iterator();
    let n2 = t.next();
    for (; !n2.done; ) {
      if (!e(n2.value))
        return false;
      n2 = t.next();
    }
    return true;
  }
  some(e) {
    const t = this.iterator();
    let n2 = t.next();
    for (; !n2.done; ) {
      if (e(n2.value))
        return true;
      n2 = t.next();
    }
    return false;
  }
  forEach(e) {
    const t = this.iterator();
    let n2 = 0, i = t.next();
    for (; !i.done; )
      e(i.value, n2), i = t.next(), n2++;
  }
  map(e) {
    return new _Z(this.startFn, (t) => {
      const { done: n2, value: i } = this.nextFn(t);
      return n2 ? Re : { done: false, value: e(i) };
    });
  }
  filter(e) {
    return new _Z(this.startFn, (t) => {
      let n2;
      do
        if (n2 = this.nextFn(t), !n2.done && e(n2.value))
          return n2;
      while (!n2.done);
      return Re;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, t) {
    const n2 = this.iterator();
    let i = t, s = n2.next();
    for (; !s.done; )
      i === void 0 ? i = s.value : i = e(i, s.value), s = n2.next();
    return i;
  }
  reduceRight(e, t) {
    return this.recursiveReduce(this.iterator(), e, t);
  }
  recursiveReduce(e, t, n2) {
    const i = e.next();
    if (i.done)
      return n2;
    const s = this.recursiveReduce(e, t, n2);
    return s === void 0 ? i.value : t(s, i.value);
  }
  find(e) {
    const t = this.iterator();
    let n2 = t.next();
    for (; !n2.done; ) {
      if (e(n2.value))
        return n2.value;
      n2 = t.next();
    }
  }
  findIndex(e) {
    const t = this.iterator();
    let n2 = 0, i = t.next();
    for (; !i.done; ) {
      if (e(i.value))
        return n2;
      i = t.next(), n2++;
    }
    return -1;
  }
  includes(e) {
    const t = this.iterator();
    let n2 = t.next();
    for (; !n2.done; ) {
      if (n2.value === e)
        return true;
      n2 = t.next();
    }
    return false;
  }
  flatMap(e) {
    return new _Z(() => ({ this: this.startFn() }), (t) => {
      do {
        if (t.iterator) {
          const s = t.iterator.next();
          if (s.done)
            t.iterator = void 0;
          else
            return s;
        }
        const { done: n2, value: i } = this.nextFn(t.this);
        if (!n2) {
          const s = e(i);
          if (In(s))
            t.iterator = s[Symbol.iterator]();
          else
            return { done: false, value: s };
        }
      } while (t.iterator);
      return Re;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const t = e > 1 ? this.flat(e - 1) : this;
    return new _Z(() => ({ this: t.startFn() }), (n2) => {
      do {
        if (n2.iterator) {
          const a = n2.iterator.next();
          if (a.done)
            n2.iterator = void 0;
          else
            return a;
        }
        const { done: i, value: s } = t.nextFn(n2.this);
        if (!i)
          if (In(s))
            n2.iterator = s[Symbol.iterator]();
          else
            return { done: false, value: s };
      } while (n2.iterator);
      return Re;
    });
  }
  head() {
    const e = this.iterator().next();
    if (!e.done)
      return e.value;
  }
  tail(e = 1) {
    return new _Z(() => {
      const t = this.startFn();
      for (let n2 = 0; n2 < e; n2++)
        if (this.nextFn(t).done)
          return t;
      return t;
    }, this.nextFn);
  }
  limit(e) {
    return new _Z(() => ({ size: 0, state: this.startFn() }), (t) => (t.size++, t.size > e ? Re : this.nextFn(t.state)));
  }
  distinct(e) {
    return new _Z(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (t) => {
      let n2;
      do
        if (n2 = this.nextFn(t.internalState), !n2.done) {
          const i = e ? e(n2.value) : n2.value;
          if (!t.set.has(i))
            return t.set.add(i), n2;
        }
      while (!n2.done);
      return Re;
    });
  }
  exclude(e, t) {
    const n2 = /* @__PURE__ */ new Set();
    for (const i of e) {
      const s = t ? t(i) : i;
      n2.add(s);
    }
    return this.filter((i) => {
      const s = t ? t(i) : i;
      return !n2.has(s);
    });
  }
};
function ed(r) {
  return typeof r == "string" ? r : typeof r > "u" ? "undefined" : typeof r.toString == "function" ? r.toString() : Object.prototype.toString.call(r);
}
function In(r) {
  return !!r && typeof r[Symbol.iterator] == "function";
}
var td = new Z(() => {
}, () => Re);
var Re = Object.freeze({ done: true, value: void 0 });
function ee(...r) {
  if (r.length === 1) {
    const e = r[0];
    if (e instanceof Z)
      return e;
    if (In(e))
      return new Z(() => e[Symbol.iterator](), (t) => t.next());
    if (typeof e.length == "number")
      return new Z(() => ({ index: 0 }), (t) => t.index < e.length ? { done: false, value: e[t.index++] } : Re);
  }
  return r.length > 1 ? new Z(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const t = e.iterator.next();
        if (!t.done)
          return t;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: false, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < r.length) {
        const t = r[e.collIndex++];
        In(t) ? e.iterator = t[Symbol.iterator]() : t && typeof t.length == "number" && (e.array = t);
      }
    } while (e.iterator || e.array || e.collIndex < r.length);
    return Re;
  }) : td;
}
var Ks = class extends Z {
  constructor(e, t, n2) {
    super(() => ({
      iterators: (n2 == null ? void 0 : n2.includeRoot) ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
      pruned: false
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = false); i.iterators.length > 0; ) {
        const s = i.iterators[i.iterators.length - 1].next();
        if (s.done)
          i.iterators.pop();
        else
          return i.iterators.push(t(s.value)[Symbol.iterator]()), s;
      }
      return Re;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      prune: () => {
        e.state.pruned = true;
      },
      [Symbol.iterator]: () => e
    };
    return e;
  }
};
var rs;
(function(r) {
  function e(s) {
    return s.reduce((a, o) => a + o, 0);
  }
  r.sum = e;
  function t(s) {
    return s.reduce((a, o) => a * o, 0);
  }
  r.product = t;
  function n2(s) {
    return s.reduce((a, o) => Math.min(a, o));
  }
  r.min = n2;
  function i(s) {
    return s.reduce((a, o) => Math.max(a, o));
  }
  r.max = i;
})(rs || (rs = {}));
function ns(r) {
  return new Ks(r, (e) => Lr(e) ? e.content : [], { includeRoot: true });
}
function rd(r, e) {
  for (; r.container; )
    if (r = r.container, r === e)
      return true;
  return false;
}
function is(r) {
  return {
    start: {
      character: r.startColumn - 1,
      line: r.startLine - 1
    },
    end: {
      character: r.endColumn,
      // endColumn uses the correct index
      line: r.endLine - 1
    }
  };
}
function Sn(r) {
  if (!r)
    return;
  const { offset: e, end: t, range: n2 } = r;
  return {
    range: n2,
    offset: e,
    end: t,
    length: t - e
  };
}
var We;
(function(r) {
  r[r.Before = 0] = "Before", r[r.After = 1] = "After", r[r.OverlapFront = 2] = "OverlapFront", r[r.OverlapBack = 3] = "OverlapBack", r[r.Inside = 4] = "Inside", r[r.Outside = 5] = "Outside";
})(We || (We = {}));
function nd(r, e) {
  if (r.end.line < e.start.line || r.end.line === e.start.line && r.end.character <= e.start.character)
    return We.Before;
  if (r.start.line > e.end.line || r.start.line === e.end.line && r.start.character >= e.end.character)
    return We.After;
  const t = r.start.line > e.start.line || r.start.line === e.start.line && r.start.character >= e.start.character, n2 = r.end.line < e.end.line || r.end.line === e.end.line && r.end.character <= e.end.character;
  return t && n2 ? We.Inside : t ? We.OverlapBack : n2 ? We.OverlapFront : We.Outside;
}
function id(r, e) {
  return nd(r, e) > We.After;
}
var sd = /^[\w\p{L}]$/u;
function ad(r, e) {
  if (r) {
    const t = od(r, true);
    if (t && va2(t, e))
      return t;
    if (_l(r)) {
      const n2 = r.content.findIndex((i) => !i.hidden);
      for (let i = n2 - 1; i >= 0; i--) {
        const s = r.content[i];
        if (va2(s, e))
          return s;
      }
    }
  }
}
function va2(r, e) {
  return Ol(r) && e.includes(r.tokenType.name);
}
function od(r, e = true) {
  for (; r.container; ) {
    const t = r.container;
    let n2 = t.content.indexOf(r);
    for (; n2 > 0; ) {
      n2--;
      const i = t.content[n2];
      if (e || !i.hidden)
        return i;
    }
    r = t;
  }
}
var Pl = class extends Error {
  constructor(e, t) {
    super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
  }
};
function Pr(r) {
  throw new Error("Error! The input value was not handled.");
}
var Kr2 = "AbstractRule";
var Vr = "AbstractType";
var fi = "Condition";
var Ra = "TypeDefinition";
var hi = "ValueLiteral";
var zt = "AbstractElement";
function ld(r) {
  return M.isInstance(r, zt);
}
var jr = "ArrayLiteral";
var Hr = "ArrayType";
var Yt = "BooleanLiteral";
function ud(r) {
  return M.isInstance(r, Yt);
}
var qt = "Conjunction";
function cd(r) {
  return M.isInstance(r, qt);
}
var Xt = "Disjunction";
function dd(r) {
  return M.isInstance(r, Xt);
}
var Wr2 = "Grammar";
var pi = "GrammarImport";
var Qt = "InferredType";
function Ml(r) {
  return M.isInstance(r, Qt);
}
var Jt = "Interface";
function Dl(r) {
  return M.isInstance(r, Jt);
}
var mi = "NamedArgument";
var Zt = "Negation";
function fd(r) {
  return M.isInstance(r, Zt);
}
var zr = "NumberLiteral";
var Yr = "Parameter";
var er2 = "ParameterReference";
function hd(r) {
  return M.isInstance(r, er2);
}
var tr = "ParserRule";
function we(r) {
  return M.isInstance(r, tr);
}
var qr = "ReferenceType";
var fn = "ReturnType";
function pd(r) {
  return M.isInstance(r, fn);
}
var rr = "SimpleType";
function md(r) {
  return M.isInstance(r, rr);
}
var Xr2 = "StringLiteral";
var Ct = "TerminalRule";
function Et(r) {
  return M.isInstance(r, Ct);
}
var nr = "Type";
function Fl(r) {
  return M.isInstance(r, nr);
}
var gi = "TypeAttribute";
var Qr = "UnionType";
var ir2 = "Action";
function Qn(r) {
  return M.isInstance(r, ir2);
}
var sr2 = "Alternatives";
function Ul(r) {
  return M.isInstance(r, sr2);
}
var ar = "Assignment";
function mt(r) {
  return M.isInstance(r, ar);
}
var or = "CharacterRange";
function gd(r) {
  return M.isInstance(r, or);
}
var lr2 = "CrossReference";
function Vs(r) {
  return M.isInstance(r, lr2);
}
var ur = "EndOfFile";
function yd(r) {
  return M.isInstance(r, ur);
}
var cr2 = "Group";
function js(r) {
  return M.isInstance(r, cr2);
}
var dr = "Keyword";
function gt(r) {
  return M.isInstance(r, dr);
}
var fr2 = "NegatedToken";
function Td(r) {
  return M.isInstance(r, fr2);
}
var hr = "RegexToken";
function vd(r) {
  return M.isInstance(r, hr);
}
var pr3 = "RuleCall";
function yt2(r) {
  return M.isInstance(r, pr3);
}
var mr = "TerminalAlternatives";
function Rd(r) {
  return M.isInstance(r, mr);
}
var gr = "TerminalGroup";
function $d(r) {
  return M.isInstance(r, gr);
}
var yr = "TerminalRuleCall";
function Ed(r) {
  return M.isInstance(r, yr);
}
var Tr = "UnorderedGroup";
function Gl(r) {
  return M.isInstance(r, Tr);
}
var vr2 = "UntilToken";
function Ad(r) {
  return M.isInstance(r, vr2);
}
var Rr = "Wildcard";
function kd(r) {
  return M.isInstance(r, Rr);
}
var Bl = class extends bl {
  getAllTypes() {
    return [zt, Kr2, Vr, ir2, sr2, jr, Hr, ar, Yt, or, fi, qt, lr2, Xt, ur, Wr2, pi, cr2, Qt, Jt, dr, mi, fr2, Zt, zr, Yr, er2, tr, qr, hr, fn, pr3, rr, Xr2, mr, gr, Ct, yr, nr, gi, Ra, Qr, Tr, vr2, hi, Rr];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case ir2:
      case sr2:
      case ar:
      case or:
      case lr2:
      case ur:
      case cr2:
      case dr:
      case fr2:
      case hr:
      case pr3:
      case mr:
      case gr:
      case yr:
      case Tr:
      case vr2:
      case Rr:
        return this.isSubtype(zt, t);
      case jr:
      case zr:
      case Xr2:
        return this.isSubtype(hi, t);
      case Hr:
      case qr:
      case rr:
      case Qr:
        return this.isSubtype(Ra, t);
      case Yt:
        return this.isSubtype(fi, t) || this.isSubtype(hi, t);
      case qt:
      case Xt:
      case Zt:
      case er2:
        return this.isSubtype(fi, t);
      case Qt:
      case Jt:
      case nr:
        return this.isSubtype(Vr, t);
      case tr:
        return this.isSubtype(Kr2, t) || this.isSubtype(Vr, t);
      case Ct:
        return this.isSubtype(Kr2, t);
      default:
        return false;
    }
  }
  getReferenceType(e) {
    const t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef":
        return Vr;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return Kr2;
      case "Grammar:usedGrammars":
        return Wr2;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return Yr;
      case "TerminalRuleCall:rule":
        return Ct;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case zt:
        return {
          name: zt,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case jr:
        return {
          name: jr,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      case Hr:
        return {
          name: Hr,
          properties: [
            { name: "elementType" }
          ]
        };
      case Yt:
        return {
          name: Yt,
          properties: [
            { name: "true", defaultValue: false }
          ]
        };
      case qt:
        return {
          name: qt,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case Xt:
        return {
          name: Xt,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case Wr2:
        return {
          name: Wr2,
          properties: [
            { name: "definesHiddenTokens", defaultValue: false },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "imports", defaultValue: [] },
            { name: "interfaces", defaultValue: [] },
            { name: "isDeclared", defaultValue: false },
            { name: "name" },
            { name: "rules", defaultValue: [] },
            { name: "types", defaultValue: [] },
            { name: "usedGrammars", defaultValue: [] }
          ]
        };
      case pi:
        return {
          name: pi,
          properties: [
            { name: "path" }
          ]
        };
      case Qt:
        return {
          name: Qt,
          properties: [
            { name: "name" }
          ]
        };
      case Jt:
        return {
          name: Jt,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      case mi:
        return {
          name: mi,
          properties: [
            { name: "calledByName", defaultValue: false },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      case Zt:
        return {
          name: Zt,
          properties: [
            { name: "value" }
          ]
        };
      case zr:
        return {
          name: zr,
          properties: [
            { name: "value" }
          ]
        };
      case Yr:
        return {
          name: Yr,
          properties: [
            { name: "name" }
          ]
        };
      case er2:
        return {
          name: er2,
          properties: [
            { name: "parameter" }
          ]
        };
      case tr:
        return {
          name: tr,
          properties: [
            { name: "dataType" },
            { name: "definesHiddenTokens", defaultValue: false },
            { name: "definition" },
            { name: "entry", defaultValue: false },
            { name: "fragment", defaultValue: false },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "inferredType" },
            { name: "name" },
            { name: "parameters", defaultValue: [] },
            { name: "returnType" },
            { name: "wildcard", defaultValue: false }
          ]
        };
      case qr:
        return {
          name: qr,
          properties: [
            { name: "referenceType" }
          ]
        };
      case fn:
        return {
          name: fn,
          properties: [
            { name: "name" }
          ]
        };
      case rr:
        return {
          name: rr,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      case Xr2:
        return {
          name: Xr2,
          properties: [
            { name: "value" }
          ]
        };
      case Ct:
        return {
          name: Ct,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: false },
            { name: "hidden", defaultValue: false },
            { name: "name" },
            { name: "type" }
          ]
        };
      case nr:
        return {
          name: nr,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      case gi:
        return {
          name: gi,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: false },
            { name: "name" },
            { name: "type" }
          ]
        };
      case Qr:
        return {
          name: Qr,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      case ir2:
        return {
          name: ir2,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      case sr2:
        return {
          name: sr2,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case ar:
        return {
          name: ar,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      case or:
        return {
          name: or,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      case lr2:
        return {
          name: lr2,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: false },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      case ur:
        return {
          name: ur,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case cr2:
        return {
          name: cr2,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      case dr:
        return {
          name: dr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      case fr2:
        return {
          name: fr2,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case hr:
        return {
          name: hr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      case pr3:
        return {
          name: pr3,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case mr:
        return {
          name: mr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case gr:
        return {
          name: gr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case yr:
        return {
          name: yr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case Tr:
        return {
          name: Tr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case vr2:
        return {
          name: vr2,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Rr:
        return {
          name: Rr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
};
var M = new Bl();
function xd(r) {
  for (const [e, t] of Object.entries(r))
    e.startsWith("$") || (Array.isArray(t) ? t.forEach((n2, i) => {
      ae(n2) && (n2.$container = r, n2.$containerProperty = e, n2.$containerIndex = i);
    }) : ae(t) && (t.$container = r, t.$containerProperty = e));
}
function Jn(r, e) {
  let t = r;
  for (; t; ) {
    if (e(t))
      return t;
    t = t.$container;
  }
}
function Ze(r) {
  const e = ss(r).$document;
  if (!e)
    throw new Error("AST node has no document.");
  return e;
}
function ss(r) {
  for (; r.$container; )
    r = r.$container;
  return r;
}
function Hs(r, e) {
  if (!r)
    throw new Error("Node must be an AstNode.");
  const t = e == null ? void 0 : e.range;
  return new Z(() => ({
    keys: Object.keys(r),
    keyIndex: 0,
    arrayIndex: 0
  }), (n2) => {
    for (; n2.keyIndex < n2.keys.length; ) {
      const i = n2.keys[n2.keyIndex];
      if (!i.startsWith("$")) {
        const s = r[i];
        if (ae(s)) {
          if (n2.keyIndex++, $a(s, t))
            return { done: false, value: s };
        } else if (Array.isArray(s)) {
          for (; n2.arrayIndex < s.length; ) {
            const a = n2.arrayIndex++, o = s[a];
            if (ae(o) && $a(o, t))
              return { done: false, value: o };
          }
          n2.arrayIndex = 0;
        }
      }
      n2.keyIndex++;
    }
    return Re;
  });
}
function Mr(r, e) {
  if (!r)
    throw new Error("Root node must be an AstNode.");
  return new Ks(r, (t) => Hs(t, e));
}
function wt(r, e) {
  if (!r)
    throw new Error("Root node must be an AstNode.");
  return new Ks(r, (t) => Hs(t, e), { includeRoot: true });
}
function $a(r, e) {
  var t;
  if (!e)
    return true;
  const n2 = (t = r.$cstNode) === null || t === void 0 ? void 0 : t.range;
  return n2 ? id(n2, e) : false;
}
function Kl(r) {
  return new Z(() => ({
    keys: Object.keys(r),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const t = e.keys[e.keyIndex];
      if (!t.startsWith("$")) {
        const n2 = r[t];
        if (Ge(n2))
          return e.keyIndex++, { done: false, value: { reference: n2, container: r, property: t } };
        if (Array.isArray(n2)) {
          for (; e.arrayIndex < n2.length; ) {
            const i = e.arrayIndex++, s = n2[i];
            if (Ge(s))
              return { done: false, value: { reference: s, container: r, property: t, index: i } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return Re;
  });
}
function Id(r, e) {
  const t = r.getTypeMetaData(e.$type), n2 = e;
  for (const i of t.properties)
    i.defaultValue !== void 0 && n2[i.name] === void 0 && (n2[i.name] = Vl(i.defaultValue));
}
function Vl(r) {
  return Array.isArray(r) ? [...r.map(Vl)] : r;
}
function w(r) {
  return r.charCodeAt(0);
}
function yi(r, e) {
  Array.isArray(r) ? r.forEach(function(t) {
    e.push(t);
  }) : e.push(r);
}
function jt(r, e) {
  if (r[e] === true)
    throw "duplicate flag " + e;
  r[e], r[e] = true;
}
function St(r) {
  if (r === void 0)
    throw Error("Internal Error - Should never get here!");
  return true;
}
function Sd() {
  throw Error("Internal Error - Should never get here!");
}
function Ea(r) {
  return r.type === "Character";
}
var Cn = [];
for (let r = w("0"); r <= w("9"); r++)
  Cn.push(r);
var Nn = [w("_")].concat(Cn);
for (let r = w("a"); r <= w("z"); r++)
  Nn.push(r);
for (let r = w("A"); r <= w("Z"); r++)
  Nn.push(r);
var Aa2 = [
  w(" "),
  w("\f"),
  w(`
`),
  w("\r"),
  w("	"),
  w("\v"),
  w("	"),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w("\u2028"),
  w("\u2029"),
  w(" "),
  w(" "),
  w("　"),
  w("\uFEFF")
];
var Cd = /[0-9a-fA-F]/;
var Jr = /[0-9]/;
var Nd = /[1-9]/;
var jl = class {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const t = this.disjunction();
    this.consumeChar("/");
    const n2 = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: false,
      ignoreCase: false,
      multiLine: false,
      unicode: false,
      sticky: false
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          jt(n2, "global");
          break;
        case "i":
          jt(n2, "ignoreCase");
          break;
        case "m":
          jt(n2, "multiLine");
          break;
        case "u":
          jt(n2, "unicode");
          break;
        case "y":
          jt(n2, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: n2,
      value: t,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], t = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(t) };
  }
  alternative() {
    const e = [], t = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(t) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      case "(":
        this.consumeChar("?");
        let t;
        switch (this.popChar()) {
          case "=":
            t = "Lookahead";
            break;
          case "!":
            t = "NegativeLookahead";
            break;
        }
        St(t);
        const n2 = this.disjunction();
        return this.consumeChar(")"), {
          type: t,
          value: n2,
          loc: this.loc(e)
        };
    }
    return Sd();
  }
  quantifier(e = false) {
    let t;
    const n2 = this.idx;
    switch (this.popChar()) {
      case "*":
        t = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        t = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        t = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            t = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = this.integerIncludingZero(), t = {
              atLeast: i,
              atMost: s
            }) : t = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === true && t === void 0)
          return;
        St(t);
        break;
    }
    if (!(e === true && t === void 0) && St(t))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = false) : t.greedy = true, t.type = "Quantifier", t.loc = this.loc(n2), t;
  }
  atom() {
    let e;
    const t = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), St(e))
      return e.loc = this.loc(t), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: true,
      value: [w(`
`), w("\r"), w("\u2028"), w("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, t = false;
    switch (this.popChar()) {
      case "d":
        e = Cn;
        break;
      case "D":
        e = Cn, t = true;
        break;
      case "s":
        e = Aa2;
        break;
      case "S":
        e = Aa2, t = true;
        break;
      case "w":
        e = Nn;
        break;
      case "W":
        e = Nn, t = true;
        break;
    }
    if (St(e))
      return { type: "Set", value: e, complement: t };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = w("\f");
        break;
      case "n":
        e = w(`
`);
        break;
      case "r":
        e = w("\r");
        break;
      case "t":
        e = w("	");
        break;
      case "v":
        e = w("\v");
        break;
    }
    if (St(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === false)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: w("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: w(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "\\":
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: w(e) };
    }
  }
  characterClass() {
    const e = [];
    let t = false;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = true); this.isClassAtom(); ) {
      const n2 = this.classAtom();
      if (n2.type, Ea(n2) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, Ea(i)) {
          if (i.value < n2.value)
            throw Error("Range out of order in character class");
          e.push({ from: n2.value, to: i.value });
        } else
          yi(n2.value, e), e.push(w("-")), yi(i.value, e);
      } else
        yi(n2.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: t, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "b":
        return this.consumeChar("b"), { type: "Character", value: w("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = true;
    switch (this.consumeChar("("), this.peekChar(0)) {
      case "?":
        this.consumeChar("?"), this.consumeChar(":"), e = false;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const t = this.disjunction();
    this.consumeChar(")");
    const n2 = {
      type: "Group",
      capturing: e,
      value: t
    };
    return e && (n2.idx = this.groupIdx), n2;
  }
  positiveInteger() {
    let e = this.popChar();
    if (Nd.test(e) === false)
      throw Error("Expecting a positive integer");
    for (; Jr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (Jr.test(e) === false)
      throw Error("Expecting an integer");
    for (; Jr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: w(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return true;
      default:
        return false;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return Jr.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return true;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      case "[":
      case "(":
        return true;
      default:
        return false;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return true;
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return true;
          default:
            return false;
        }
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return false;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(true) !== void 0;
    } catch {
      return false;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  parseHexDigits(e) {
    let t = "";
    for (let n2 = 0; n2 < e; n2++) {
      const i = this.popChar();
      if (Cd.test(i) === false)
        throw Error("Expecting a HexDecimal digits");
      t += i;
    }
    return { type: "Character", value: parseInt(t, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
};
var Zn = class {
  visitChildren(e) {
    for (const t in e) {
      const n2 = e[t];
      e.hasOwnProperty(t) && (n2.type !== void 0 ? this.visit(n2) : Array.isArray(n2) && n2.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
};
var wd = /\r?\n/gm;
var Ld = new jl();
var bd = class extends Zn {
  constructor() {
    super(...arguments), this.isStarting = true, this.endRegexpStack = [], this.multiline = false;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = false, this.regex = e, this.startRegexp = "", this.isStarting = true, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = false, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const t = String.fromCharCode(e.value);
    if (!this.multiline && t === `
` && (this.multiline = true), e.quantifier)
      this.isStarting = false, this.endRegexpStack = [];
    else {
      const n2 = ei(t);
      this.endRegexpStack.push(n2), this.isStarting && (this.startRegexp += n2);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const t = this.regex.substring(e.loc.begin, e.loc.end), n2 = new RegExp(t);
      this.multiline = !!`
`.match(n2);
    }
    if (e.quantifier)
      this.isStarting = false, this.endRegexpStack = [];
    else {
      const t = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
};
var Ti = new bd();
function Od(r) {
  try {
    return typeof r == "string" && (r = new RegExp(r)), r = r.toString(), Ti.reset(r), Ti.visit(Ld.pattern(r)), Ti.multiline;
  } catch {
    return false;
  }
}
var _d = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function as(r) {
  const e = typeof r == "string" ? new RegExp(r) : r;
  return _d.some((t) => e.test(t));
}
function ei(r) {
  return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Pd(r) {
  return Array.prototype.map.call(r, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : ei(e)).join("");
}
function Md(r, e) {
  const t = Dd(r), n2 = e.match(t);
  return !!n2 && n2[0].length > 0;
}
function Dd(r) {
  typeof r == "string" && (r = new RegExp(r));
  const e = r, t = r.source;
  let n2 = 0;
  function i() {
    let s = "", a;
    function o(u) {
      s += t.substr(n2, u), n2 += u;
    }
    function l(u) {
      s += "(?:" + t.substr(n2, u) + "|$)", n2 += u;
    }
    for (; n2 < t.length; )
      switch (t[n2]) {
        case "\\":
          switch (t[n2 + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? t[n2 + 2] === "{" ? l(t.indexOf("}", n2) - n2 + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(t.indexOf("}", n2) - n2 + 1) : l(2);
              break;
            case "k":
              l(t.indexOf(">", n2) - n2 + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          a = /\[(?:\\.|.)*?\]/g, a.lastIndex = n2, a = a.exec(t) || [], l(a[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          o(1);
          break;
        case "{":
          a = /\{\d+,?\d*\}/g, a.lastIndex = n2, a = a.exec(t), a ? o(a[0].length) : l(1);
          break;
        case "(":
          if (t[n2 + 1] === "?")
            switch (t[n2 + 2]) {
              case ":":
                s += "(?:", n2 += 3, s += i() + "|$)";
                break;
              case "=":
                s += "(?=", n2 += 3, s += i() + ")";
                break;
              case "!":
                a = n2, n2 += 3, i(), s += t.substr(a, n2 - a);
                break;
              case "<":
                switch (t[n2 + 3]) {
                  case "=":
                  case "!":
                    a = n2, n2 += 4, i(), s += t.substr(a, n2 - a);
                    break;
                  default:
                    o(t.indexOf(">", n2) - n2 + 1), s += i() + "|$)";
                    break;
                }
                break;
            }
          else
            o(1), s += i() + "|$)";
          break;
        case ")":
          return ++n2, s;
        default:
          l(1);
          break;
      }
    return s;
  }
  return new RegExp(i(), r.flags);
}
function Fd(r) {
  return r.rules.find((e) => we(e) && e.entry);
}
function Ud(r) {
  return r.rules.filter((e) => Et(e) && e.hidden);
}
function Hl(r, e) {
  const t = /* @__PURE__ */ new Set(), n2 = Fd(r);
  if (!n2)
    return new Set(r.rules);
  const i = [n2].concat(Ud(r));
  for (const a of i)
    Wl(a, t, e);
  const s = /* @__PURE__ */ new Set();
  for (const a of r.rules)
    (t.has(a.name) || Et(a) && a.hidden) && s.add(a);
  return s;
}
function Wl(r, e, t) {
  e.add(r.name), Mr(r).forEach((n2) => {
    if (yt2(n2) || t) {
      const i = n2.rule.ref;
      i && !e.has(i.name) && Wl(i, e, t);
    }
  });
}
function Gd(r) {
  var _a3;
  if (r.terminal)
    return r.terminal;
  if (r.type.ref)
    return (_a3 = Yl(r.type.ref)) == null ? void 0 : _a3.terminal;
}
function Bd(r) {
  return r.hidden && !as(qs(r));
}
function Kd(r, e) {
  return !r || !e ? [] : Ws(r, e, r.astNode, true);
}
function zl(r, e, t) {
  if (!r || !e)
    return;
  const n2 = Ws(r, e, r.astNode, true);
  if (n2.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, n2.length - 1)) : t = 0, n2[t];
}
function Ws(r, e, t, n2) {
  if (!n2) {
    const i = Jn(r.grammarSource, mt);
    if (i && i.feature === e)
      return [r];
  }
  return Lr(r) && r.astNode === t ? r.content.flatMap((i) => Ws(i, e, t, false)) : [];
}
function Vd(r, e, t) {
  if (!r)
    return;
  const n2 = jd(r, e, r == null ? void 0 : r.astNode);
  if (n2.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, n2.length - 1)) : t = 0, n2[t];
}
function jd(r, e, t) {
  if (r.astNode !== t)
    return [];
  if (gt(r.grammarSource) && r.grammarSource.value === e)
    return [r];
  const n2 = ns(r).iterator();
  let i;
  const s = [];
  do
    if (i = n2.next(), !i.done) {
      const a = i.value;
      a.astNode === t ? gt(a.grammarSource) && a.grammarSource.value === e && s.push(a) : n2.prune();
    }
  while (!i.done);
  return s;
}
function Hd(r) {
  var e;
  const t = r.astNode;
  for (; t === ((e = r.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    const n2 = Jn(r.grammarSource, mt);
    if (n2)
      return n2;
    r = r.container;
  }
}
function Yl(r) {
  let e = r;
  return Ml(e) && (Qn(e.$container) ? e = e.$container.$container : we(e.$container) ? e = e.$container : Pr(e.$container)), ql(r, e, /* @__PURE__ */ new Map());
}
function ql(r, e, t) {
  var n2;
  function i(s, a) {
    let o;
    return Jn(s, mt) || (o = ql(a, a, t)), t.set(r, o), o;
  }
  if (t.has(r))
    return t.get(r);
  t.set(r, void 0);
  for (const s of Mr(e)) {
    if (mt(s) && s.feature.toLowerCase() === "name")
      return t.set(r, s), s;
    if (yt2(s) && we(s.rule.ref))
      return i(s, s.rule.ref);
    if (md(s) && !((n2 = s.typeRef) === null || n2 === void 0) && n2.ref)
      return i(s, s.typeRef.ref);
  }
}
function Xl(r) {
  return Ql(r, /* @__PURE__ */ new Set());
}
function Ql(r, e) {
  if (e.has(r))
    return true;
  e.add(r);
  for (const t of Mr(r))
    if (yt2(t)) {
      if (!t.rule.ref || we(t.rule.ref) && !Ql(t.rule.ref, e))
        return false;
    } else if (mt(t) || Qn(t))
      return false;
  return !!r.definition;
}
function zs(r) {
  if (r.inferredType)
    return r.inferredType.name;
  if (r.dataType)
    return r.dataType;
  if (r.returnType) {
    const e = r.returnType.ref;
    if (e && (we(e) || Dl(e) || Fl(e)))
      return e.name;
  }
}
function Ys(r) {
  var e;
  if (we(r))
    return Xl(r) ? r.name : (e = zs(r)) !== null && e !== void 0 ? e : r.name;
  if (Dl(r) || Fl(r) || pd(r))
    return r.name;
  if (Qn(r)) {
    const t = Wd(r);
    if (t)
      return t;
  } else if (Ml(r))
    return r.name;
  throw new Error("Cannot get name of Unknown Type");
}
function Wd(r) {
  var e;
  if (r.inferredType)
    return r.inferredType.name;
  if (!((e = r.type) === null || e === void 0) && e.ref)
    return Ys(r.type.ref);
}
function zd(r) {
  var e, t, n2;
  return Et(r) ? (t = (e = r.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : (n2 = zs(r)) !== null && n2 !== void 0 ? n2 : r.name;
}
function qs(r) {
  const e = {
    s: false,
    i: false,
    u: false
  }, t = Gt(r.definition, e), n2 = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(t, n2);
}
var Xs = /[\s\S]/.source;
function Gt(r, e) {
  if (Rd(r))
    return Yd(r);
  if ($d(r))
    return qd(r);
  if (gd(r))
    return Jd(r);
  if (Ed(r)) {
    const t = r.rule.ref;
    if (!t)
      throw new Error("Missing rule reference.");
    return Ye(Gt(t.definition), {
      cardinality: r.cardinality,
      lookahead: r.lookahead
    });
  } else {
    if (Td(r))
      return Qd(r);
    if (Ad(r))
      return Xd(r);
    if (vd(r)) {
      const t = r.regex.lastIndexOf("/"), n2 = r.regex.substring(1, t), i = r.regex.substring(t + 1);
      return e && (e.i = i.includes("i"), e.s = i.includes("s"), e.u = i.includes("u")), Ye(n2, {
        cardinality: r.cardinality,
        lookahead: r.lookahead,
        wrap: false
      });
    } else {
      if (kd(r))
        return Ye(Xs, {
          cardinality: r.cardinality,
          lookahead: r.lookahead
        });
      throw new Error(`Invalid terminal element: ${r == null ? void 0 : r.$type}`);
    }
  }
}
function Yd(r) {
  return Ye(r.elements.map((e) => Gt(e)).join("|"), {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
function qd(r) {
  return Ye(r.elements.map((e) => Gt(e)).join(""), {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
function Xd(r) {
  return Ye(`${Xs}*?${Gt(r.terminal)}`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
function Qd(r) {
  return Ye(`(?!${Gt(r.terminal)})${Xs}*?`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
function Jd(r) {
  return r.right ? Ye(`[${vi(r.left)}-${vi(r.right)}]`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead,
    wrap: false
  }) : Ye(vi(r.left), {
    cardinality: r.cardinality,
    lookahead: r.lookahead,
    wrap: false
  });
}
function vi(r) {
  return ei(r.value);
}
function Ye(r, e) {
  var t;
  return (e.wrap !== false || e.lookahead) && (r = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ""}${r})`), e.cardinality ? `${r}${e.cardinality}` : r;
}
function Zd(r) {
  const e = [], t = r.Grammar;
  for (const n2 of t.rules)
    Et(n2) && Bd(n2) && Od(qs(n2)) && e.push(n2.name);
  return {
    multilineCommentRules: e,
    nameRegexp: sd
  };
}
function os(r) {
  console && console.error && console.error(`Error: ${r}`);
}
function Jl(r) {
  console && console.warn && console.warn(`Warning: ${r}`);
}
function Zl(r) {
  const e = (/* @__PURE__ */ new Date()).getTime(), t = r();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: t };
}
function eu(r) {
  function e() {
  }
  e.prototype = r;
  const t = new e();
  function n2() {
    return typeof t.bar;
  }
  return n2(), n2(), r;
}
function ef(r) {
  return tf(r) ? r.LABEL : r.name;
}
function tf(r) {
  return he(r.LABEL) && r.LABEL !== "";
}
var Be = class {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), _a(this.definition, (t) => {
      t.accept(e);
    });
  }
};
var ue = class extends Be {
  constructor(e) {
    super([]), this.idx = 1, Ae(this, Me(e, (t) => t !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
};
var Bt = class extends Be {
  constructor(e) {
    super(e.definition), this.orgText = "", Ae(this, Me(e, (t) => t !== void 0));
  }
};
var pe = class extends Be {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = false, Ae(this, Me(e, (t) => t !== void 0));
  }
};
var re = class extends Be {
  constructor(r) {
    super(r.definition), this.idx = 1, Ae(this, Me(r, (e) => e !== void 0));
  }
};
var xe = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, Ae(this, Me(e, (t) => t !== void 0));
  }
};
var Ie = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, Ae(this, Me(e, (t) => t !== void 0));
  }
};
var j = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, Ae(this, Me(e, (t) => t !== void 0));
  }
};
var me = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, Ae(this, Me(e, (t) => t !== void 0));
  }
};
var ge = class extends Be {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, Ae(this, Me(e, (t) => t !== void 0));
  }
};
var F = class {
  constructor(e) {
    this.idx = 1, Ae(this, Me(e, (t) => t !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
};
function rf(r) {
  return lr(r, hn);
}
function hn(r) {
  function e(t) {
    return lr(t, hn);
  }
  if (r instanceof ue) {
    const t = {
      type: "NonTerminal",
      name: r.nonTerminalName,
      idx: r.idx
    };
    return he(r.label) && (t.label = r.label), t;
  } else {
    if (r instanceof pe)
      return {
        type: "Alternative",
        definition: e(r.definition)
      };
    if (r instanceof re)
      return {
        type: "Option",
        idx: r.idx,
        definition: e(r.definition)
      };
    if (r instanceof xe)
      return {
        type: "RepetitionMandatory",
        idx: r.idx,
        definition: e(r.definition)
      };
    if (r instanceof Ie)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: r.idx,
        separator: hn(new F({ terminalType: r.separator })),
        definition: e(r.definition)
      };
    if (r instanceof me)
      return {
        type: "RepetitionWithSeparator",
        idx: r.idx,
        separator: hn(new F({ terminalType: r.separator })),
        definition: e(r.definition)
      };
    if (r instanceof j)
      return {
        type: "Repetition",
        idx: r.idx,
        definition: e(r.definition)
      };
    if (r instanceof ge)
      return {
        type: "Alternation",
        idx: r.idx,
        definition: e(r.definition)
      };
    if (r instanceof F) {
      const t = {
        type: "Terminal",
        name: r.terminalType.name,
        label: ef(r.terminalType),
        idx: r.idx
      };
      he(r.label) && (t.terminalLabel = r.label);
      const n2 = r.terminalType.PATTERN;
      return r.terminalType.PATTERN && (t.pattern = Xe(n2) ? n2.source : n2), t;
    } else {
      if (r instanceof Bt)
        return {
          type: "Rule",
          name: r.name,
          orgText: r.orgText,
          definition: e(r.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
var Kt = class {
  visit(e) {
    const t = e;
    switch (t.constructor) {
      case ue:
        return this.visitNonTerminal(t);
      case pe:
        return this.visitAlternative(t);
      case re:
        return this.visitOption(t);
      case xe:
        return this.visitRepetitionMandatory(t);
      case Ie:
        return this.visitRepetitionMandatoryWithSeparator(t);
      case me:
        return this.visitRepetitionWithSeparator(t);
      case j:
        return this.visitRepetition(t);
      case ge:
        return this.visitAlternation(t);
      case F:
        return this.visitTerminal(t);
      case Bt:
        return this.visitRule(t);
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
};
function nf(r) {
  return r instanceof pe || r instanceof re || r instanceof j || r instanceof xe || r instanceof Ie || r instanceof me || r instanceof F || r instanceof Bt;
}
function wn(r, e = []) {
  return r instanceof re || r instanceof j || r instanceof me ? true : r instanceof ge ? Ll(r.definition, (t) => wn(t, e)) : r instanceof ue && de(e, r) ? false : r instanceof Be ? (r instanceof ue && e.push(r), _e(r.definition, (t) => wn(t, e))) : false;
}
function sf(r) {
  return r instanceof ge;
}
function Ue(r) {
  if (r instanceof ue)
    return "SUBRULE";
  if (r instanceof re)
    return "OPTION";
  if (r instanceof ge)
    return "OR";
  if (r instanceof xe)
    return "AT_LEAST_ONE";
  if (r instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (r instanceof me)
    return "MANY_SEP";
  if (r instanceof j)
    return "MANY";
  if (r instanceof F)
    return "CONSUME";
  throw Error("non exhaustive match");
}
var ti = class {
  walk(e, t = []) {
    _a(e.definition, (n2, i) => {
      const s = J(e.definition, i + 1);
      if (n2 instanceof ue)
        this.walkProdRef(n2, s, t);
      else if (n2 instanceof F)
        this.walkTerminal(n2, s, t);
      else if (n2 instanceof pe)
        this.walkFlat(n2, s, t);
      else if (n2 instanceof re)
        this.walkOption(n2, s, t);
      else if (n2 instanceof xe)
        this.walkAtLeastOne(n2, s, t);
      else if (n2 instanceof Ie)
        this.walkAtLeastOneSep(n2, s, t);
      else if (n2 instanceof me)
        this.walkManySep(n2, s, t);
      else if (n2 instanceof j)
        this.walkMany(n2, s, t);
      else if (n2 instanceof ge)
        this.walkOr(n2, s, t);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, t, n2) {
  }
  walkProdRef(e, t, n2) {
  }
  walkFlat(e, t, n2) {
    const i = t.concat(n2);
    this.walk(e, i);
  }
  walkOption(e, t, n2) {
    const i = t.concat(n2);
    this.walk(e, i);
  }
  walkAtLeastOne(e, t, n2) {
    const i = [
      new re({ definition: e.definition })
    ].concat(t, n2);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, t, n2) {
    const i = ka(e, t, n2);
    this.walk(e, i);
  }
  walkMany(e, t, n2) {
    const i = [
      new re({ definition: e.definition })
    ].concat(t, n2);
    this.walk(e, i);
  }
  walkManySep(e, t, n2) {
    const i = ka(e, t, n2);
    this.walk(e, i);
  }
  walkOr(e, t, n2) {
    const i = t.concat(n2);
    _a(e.definition, (s) => {
      const a = new pe({ definition: [s] });
      this.walk(a, i);
    });
  }
};
function ka(r, e, t) {
  return [
    new re({
      definition: [
        new F({ terminalType: r.separator })
      ].concat(r.definition)
    })
  ].concat(e, t);
}
function Dr(r) {
  if (r instanceof ue)
    return Dr(r.referencedRule);
  if (r instanceof F)
    return lf(r);
  if (nf(r))
    return af(r);
  if (sf(r))
    return of(r);
  throw Error("non exhaustive match");
}
function af(r) {
  let e = [];
  const t = r.definition;
  let n2 = 0, i = t.length > n2, s, a = true;
  for (; i && a; )
    s = t[n2], a = wn(s), e = e.concat(Dr(s)), n2 = n2 + 1, i = t.length > n2;
  return Bs(e);
}
function of(r) {
  const e = lr(r.definition, (t) => Dr(t));
  return Bs(er(e));
}
function lf(r) {
  return [r.terminalType];
}
var tu = "_~IN~_";
var uf = class extends ti {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, t, n2) {
  }
  walkProdRef(e, t, n2) {
    const i = df(e.referencedRule, e.idx) + this.topProd.name, s = t.concat(n2), a = new pe({ definition: s }), o = Dr(a);
    this.follows[i] = o;
  }
};
function cf(r) {
  const e = {};
  return _a(r, (t) => {
    const n2 = new uf(t).startWalking();
    Ae(e, n2);
  }), e;
}
function df(r, e) {
  return r.name + e + tu;
}
var pn = {};
var ff = new jl();
function ri(r) {
  const e = r.toString();
  if (pn.hasOwnProperty(e))
    return pn[e];
  {
    const t = ff.pattern(e);
    return pn[e] = t, t;
  }
}
function hf() {
  pn = {};
}
var ru = "Complement Sets are not supported for first char optimization";
var Ln = `Unable to use "first char" lexer optimizations:
`;
function pf(r, e = false) {
  try {
    const t = ri(r);
    return ls(t.value, {}, t.flags.ignoreCase);
  } catch (t) {
    if (t.message === ru)
      e && Jl(`${Ln}	Unable to optimize: < ${r.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let n2 = "";
      e && (n2 = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), os(`${Ln}
	Failed parsing: < ${r.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n2);
    }
  }
  return [];
}
function ls(r, e, t) {
  switch (r.type) {
    case "Disjunction":
      for (let i = 0; i < r.value.length; i++)
        ls(r.value[i], e, t);
      break;
    case "Alternative":
      const n2 = r.value;
      for (let i = 0; i < n2.length; i++) {
        const s = n2[i];
        switch (s.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const a = s;
        switch (a.type) {
          case "Character":
            Zr(a.value, e, t);
            break;
          case "Set":
            if (a.complement === true)
              throw Error(ru);
            _a(a.value, (l) => {
              if (typeof l == "number")
                Zr(l, e, t);
              else {
                const u = l;
                if (t === true)
                  for (let c = u.from; c <= u.to; c++)
                    Zr(c, e, t);
                else {
                  for (let c = u.from; c <= u.to && c < Er2; c++)
                    Zr(c, e, t);
                  if (u.to >= Er2) {
                    const c = u.from >= Er2 ? u.from : Er2, d = u.to, f = et(c), h = et(d);
                    for (let m = f; m <= h; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            ls(a.value, e, t);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a.type === "Group" && us(a) === false || // If this term is not a group it may only be optional if it has an optional quantifier
          a.type !== "Group" && o === false
        )
          break;
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return ma(e);
}
function Zr(r, e, t) {
  const n2 = et(r);
  e[n2] = n2, t === true && mf(r, e);
}
function mf(r, e) {
  const t = String.fromCharCode(r), n2 = t.toUpperCase();
  if (n2 !== t) {
    const i = et(n2.charCodeAt(0));
    e[i] = i;
  } else {
    const i = t.toLowerCase();
    if (i !== t) {
      const s = et(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function xa(r, e) {
  return vr(r.value, (t) => {
    if (typeof t == "number")
      return de(e, t);
    {
      const n2 = t;
      return vr(e, (i) => n2.from <= i && i <= n2.to) !== void 0;
    }
  });
}
function us(r) {
  const e = r.quantifier;
  return e && e.atLeast === 0 ? true : r.value ? zu(r.value) ? _e(r.value, us) : us(r.value) : false;
}
var gf = class extends Zn {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = false;
  }
  visitChildren(e) {
    if (this.found !== true) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    de(this.targetCharCodes, e.value) && (this.found = true);
  }
  visitSet(e) {
    e.complement ? xa(e, this.targetCharCodes) === void 0 && (this.found = true) : xa(e, this.targetCharCodes) !== void 0 && (this.found = true);
  }
};
function Qs(r, e) {
  if (e instanceof RegExp) {
    const t = ri(e), n2 = new gf(r);
    return n2.visit(t), n2.found;
  } else
    return vr(e, (t) => de(r, t.charCodeAt(0))) !== void 0;
}
var Tt = "PATTERN";
var $r = "defaultMode";
var en = "modes";
var nu = typeof new RegExp("(?:)").sticky == "boolean";
function yf(r, e) {
  e = ir(e, {
    useSticky: nu,
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: ($, T) => T()
  });
  const t = e.tracer;
  t("initCharCodeToOptimizedIndexMap", () => {
    Gf();
  });
  let n2;
  t("Reject Lexer.NA", () => {
    n2 = Xn(r, ($) => $[Tt] === fe.NA);
  });
  let i = false, s;
  t("Transform Patterns", () => {
    i = false, s = lr(n2, ($) => {
      const T = $[Tt];
      if (Xe(T)) {
        const I2 = T.source;
        return I2.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        I2 !== "^" && I2 !== "$" && I2 !== "." && !T.ignoreCase ? I2 : I2.length === 2 && I2[0] === "\\" && // not a meta character
        !de([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], I2[1]) ? I2[1] : e.useSticky ? Sa2(T) : Ia2(T);
      } else {
        if (ig(T))
          return i = true, { exec: T };
        if (typeof T == "object")
          return i = true, T;
        if (typeof T == "string") {
          if (T.length === 1)
            return T;
          {
            const I2 = T.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), G = new RegExp(I2);
            return e.useSticky ? Sa2(G) : Ia2(G);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a, o, l, u, c;
  t("misc mapping", () => {
    a = lr(n2, ($) => $.tokenTypeIdx), o = lr(n2, ($) => {
      const T = $.GROUP;
      if (T !== fe.SKIPPED) {
        if (he(T))
          return T;
        if (Oa(T))
          return false;
        throw Error("non exhaustive match");
      }
    }), l = lr(n2, ($) => {
      const T = $.LONGER_ALT;
      if (T)
        return zu(T) ? lr(T, (I2) => ya(n2, I2)) : [ya(n2, T)];
    }), u = lr(n2, ($) => $.PUSH_MODE), c = lr(n2, ($) => sr($, "POP_MODE"));
  });
  let d;
  t("Line Terminator Handling", () => {
    const $ = au(e.lineTerminatorCharacters);
    d = lr(n2, (T) => false), e.positionTracking !== "onlyOffset" && (d = lr(n2, (T) => sr(T, "LINE_BREAKS") ? !!T.LINE_BREAKS : su(T, $) === false && Qs($, T.PATTERN)));
  });
  let f, h, m, g;
  t("Misc Mapping #2", () => {
    f = lr(n2, iu), h = lr(s, Df), m = Sa(n2, ($, T) => {
      const I2 = T.GROUP;
      return he(I2) && I2 !== fe.SKIPPED && ($[I2] = []), $;
    }, {}), g = lr(s, ($, T) => ({
      pattern: s[T],
      longerAlt: l[T],
      canLineTerminator: d[T],
      isCustom: f[T],
      short: h[T],
      group: o[T],
      push: u[T],
      pop: c[T],
      tokenTypeIdx: a[T],
      tokenType: n2[T]
    }));
  });
  let k = true, R2 = [];
  return e.safeMode || t("First Char Optimization", () => {
    R2 = Sa(n2, ($, T, I2) => {
      if (typeof T.PATTERN == "string") {
        const G = T.PATTERN.charCodeAt(0), ie = et(G);
        Ri($, ie, g[I2]);
      } else if (zu(T.START_CHARS_HINT)) {
        let G;
        _a(T.START_CHARS_HINT, (ie) => {
          const Le = typeof ie == "string" ? ie.charCodeAt(0) : ie, ye = et(Le);
          G !== ye && (G = ye, Ri($, ye, g[I2]));
        });
      } else if (Xe(T.PATTERN))
        if (T.PATTERN.unicode)
          k = false, e.ensureOptimizations && os(`${Ln}	Unable to analyze < ${T.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const G = pf(T.PATTERN, e.ensureOptimizations);
          c5(G) && (k = false), _a(G, (ie) => {
            Ri($, ie, g[I2]);
          });
        }
      else
        e.ensureOptimizations && os(`${Ln}	TokenType: <${T.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), k = false;
      return $;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: R2,
    hasCustom: i,
    canBeOptimized: k
  };
}
function Tf(r, e) {
  let t = [];
  const n2 = Rf(r);
  t = t.concat(n2.errors);
  const i = $f(n2.valid), s = i.valid;
  return t = t.concat(i.errors), t = t.concat(vf(s)), t = t.concat(Nf(s)), t = t.concat(wf(s, e)), t = t.concat(Lf(s)), t;
}
function vf(r) {
  let e = [];
  const t = Aa(r, (n2) => Xe(n2[Tt]));
  return e = e.concat(Af(t)), e = e.concat(If(t)), e = e.concat(Sf(t)), e = e.concat(Cf(t)), e = e.concat(kf(t)), e;
}
function Rf(r) {
  const e = Aa(r, (i) => !sr(i, Tt)), t = lr(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: H.MISSING_PATTERN,
    tokenTypes: [i]
  })), n2 = qn(r, e);
  return { errors: t, valid: n2 };
}
function $f(r) {
  const e = Aa(r, (i) => {
    const s = i[Tt];
    return !Xe(s) && !ig(s) && !sr(s, "exec") && !he(s);
  }), t = lr(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: H.INVALID_PATTERN,
    tokenTypes: [i]
  })), n2 = qn(r, e);
  return { errors: t, valid: n2 };
}
var Ef = /[^\\][$]/;
function Af(r) {
  class e extends Zn {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitEndAnchor(i) {
      this.found = true;
    }
  }
  const t = Aa(r, (n2) => {
    const i = n2.PATTERN;
    try {
      const s = ri(i), a = new e();
      return a.visit(s), a.found;
    } catch {
      return Ef.test(i.source);
    }
  });
  return lr(t, (n2) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + n2.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: H.EOI_ANCHOR_FOUND,
    tokenTypes: [n2]
  }));
}
function kf(r) {
  const e = Aa(r, (t) => t.PATTERN.test(""));
  return lr(e, (t) => ({
    message: "Token Type: ->" + t.name + "<- static 'PATTERN' must not match an empty string",
    type: H.EMPTY_MATCH_PATTERN,
    tokenTypes: [t]
  }));
}
var xf = /[^\\[][\^]|^\^/;
function If(r) {
  class e extends Zn {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitStartAnchor(i) {
      this.found = true;
    }
  }
  const t = Aa(r, (n2) => {
    const i = n2.PATTERN;
    try {
      const s = ri(i), a = new e();
      return a.visit(s), a.found;
    } catch {
      return xf.test(i.source);
    }
  });
  return lr(t, (n2) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + n2.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: H.SOI_ANCHOR_FOUND,
    tokenTypes: [n2]
  }));
}
function Sf(r) {
  const e = Aa(r, (t) => {
    const n2 = t[Tt];
    return n2 instanceof RegExp && (n2.multiline || n2.global);
  });
  return lr(e, (t) => ({
    message: "Token Type: ->" + t.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: H.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [t]
  }));
}
function Cf(r) {
  const e = [];
  let t = lr(r, (i) => Sa(r, (s, a) => (i.PATTERN.source === a.PATTERN.source && !de(e, a) && a.PATTERN !== fe.NA && (e.push(a), s.push(a)), s), []));
  t = _r(t);
  const n2 = Aa(t, (i) => i.length > 1);
  return lr(n2, (i) => {
    const s = lr(i, (a) => a.name);
    return {
      message: `The same RegExp pattern ->${Pe(i).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,
      type: H.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: i
    };
  });
}
function Nf(r) {
  const e = Aa(r, (t) => {
    if (!sr(t, "GROUP"))
      return false;
    const n2 = t.GROUP;
    return n2 !== fe.SKIPPED && n2 !== fe.NA && !he(n2);
  });
  return lr(e, (t) => ({
    message: "Token Type: ->" + t.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: H.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [t]
  }));
}
function wf(r, e) {
  const t = Aa(r, (n2) => n2.PUSH_MODE !== void 0 && !de(e, n2.PUSH_MODE));
  return lr(t, (n2) => ({
    message: `Token Type: ->${n2.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${n2.PUSH_MODE}<-which does not exist`,
    type: H.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [n2]
  }));
}
function Lf(r) {
  const e = [], t = Sa(r, (n2, i, s) => {
    const a = i.PATTERN;
    return a === fe.NA || (he(a) ? n2.push({ str: a, idx: s, tokenType: i }) : Xe(a) && Of(a) && n2.push({ str: a.source, idx: s, tokenType: i })), n2;
  }, []);
  return _a(r, (n2, i) => {
    _a(t, ({ str: s, idx: a, tokenType: o }) => {
      if (i < a && bf(s, n2.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n2.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: H.UNREACHABLE_PATTERN,
          tokenTypes: [n2, o]
        });
      }
    });
  }), e;
}
function bf(r, e) {
  if (Xe(e)) {
    const t = e.exec(r);
    return t !== null && t.index === 0;
  } else {
    if (ig(e))
      return e(r, 0, [], {});
    if (sr(e, "exec"))
      return e.exec(r, 0, [], {});
    if (typeof e == "string")
      return e === r;
    throw Error("non exhaustive match");
  }
}
function Of(r) {
  return vr([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (e) => r.source.indexOf(e) !== -1) === void 0;
}
function Ia2(r) {
  const e = r.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${r.source})`, e);
}
function Sa2(r) {
  const e = r.ignoreCase ? "iy" : "y";
  return new RegExp(`${r.source}`, e);
}
function _f(r, e, t) {
  const n2 = [];
  return sr(r, $r) || n2.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + $r + `> property in its definition
`,
    type: H.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), sr(r, en) || n2.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + en + `> property in its definition
`,
    type: H.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), sr(r, en) && sr(r, $r) && !sr(r.modes, r.defaultMode) && n2.push({
    message: `A MultiMode Lexer cannot be initialized with a ${$r}: <${r.defaultMode}>which does not exist
`,
    type: H.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), sr(r, en) && _a(r.modes, (i, s) => {
    _a(i, (a, o) => {
      if (Oa(a))
        n2.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,
          type: H.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (sr(a, "LONGER_ALT")) {
        const l = zu(a.LONGER_ALT) ? a.LONGER_ALT : [a.LONGER_ALT];
        _a(l, (u) => {
          !Oa(u) && !de(i, u) && n2.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${a.name}> outside of mode <${s}>
`,
            type: H.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), n2;
}
function Pf(r, e, t) {
  const n2 = [];
  let i = false;
  const s = _r(er(ma(r.modes))), a = Xn(s, (l) => l[Tt] === fe.NA), o = au(t);
  return e && _a(a, (l) => {
    const u = su(l, o);
    if (u !== false) {
      const c = {
        message: Uf(l, u),
        type: u.issue,
        tokenType: l
      };
      n2.push(c);
    } else
      sr(l, "LINE_BREAKS") ? l.LINE_BREAKS === true && (i = true) : Qs(o, l.PATTERN) && (i = true);
  }), e && !i && n2.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: H.NO_LINE_BREAKS_FLAGS
  }), n2;
}
function Mf(r) {
  const e = {}, t = A(r);
  return _a(t, (n2) => {
    const i = r[n2];
    if (zu(i))
      e[n2] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function iu(r) {
  const e = r.PATTERN;
  if (Xe(e))
    return false;
  if (ig(e) || sr(e, "exec"))
    return true;
  if (he(e))
    return false;
  throw Error("non exhaustive match");
}
function Df(r) {
  return he(r) && r.length === 1 ? r.charCodeAt(0) : false;
}
var Ff = {
  // implements /\n|\r\n?/g.test
  test: function(r) {
    const e = r.length;
    for (let t = this.lastIndex; t < e; t++) {
      const n2 = r.charCodeAt(t);
      if (n2 === 10)
        return this.lastIndex = t + 1, true;
      if (n2 === 13)
        return r.charCodeAt(t + 1) === 10 ? this.lastIndex = t + 2 : this.lastIndex = t + 1, true;
    }
    return false;
  },
  lastIndex: 0
};
function su(r, e) {
  if (sr(r, "LINE_BREAKS"))
    return false;
  if (Xe(r.PATTERN)) {
    try {
      Qs(e, r.PATTERN);
    } catch (t) {
      return {
        issue: H.IDENTIFY_TERMINATOR,
        errMsg: t.message
      };
    }
    return false;
  } else {
    if (he(r.PATTERN))
      return false;
    if (iu(r))
      return { issue: H.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function Uf(r, e) {
  if (e.issue === H.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${r.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === H.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${r.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function au(r) {
  return lr(r, (e) => he(e) ? e.charCodeAt(0) : e);
}
function Ri(r, e, t) {
  r[e] === void 0 ? r[e] = [t] : r[e].push(t);
}
var Er2 = 256;
var mn = [];
function et(r) {
  return r < Er2 ? r : mn[r];
}
function Gf() {
  if (c5(mn)) {
    mn = new Array(65536);
    for (let r = 0; r < 65536; r++)
      mn[r] = r > 255 ? 255 + ~~(r / 255) : r;
  }
}
function Fr(r, e) {
  const t = r.tokenTypeIdx;
  return t === e.tokenTypeIdx ? true : e.isParent === true && e.categoryMatchesMap[t] === true;
}
function bn(r, e) {
  return r.tokenTypeIdx === e.tokenTypeIdx;
}
var Ca = 1;
var ou = {};
function Ur(r) {
  const e = Bf(r);
  Kf(e), jf(e), Vf(e), _a(e, (t) => {
    t.isParent = t.categoryMatches.length > 0;
  });
}
function Bf(r) {
  let e = n(r), t = r, n2 = true;
  for (; n2; ) {
    t = _r(er(lr(t, (s) => s.CATEGORIES)));
    const i = qn(t, e);
    e = e.concat(i), c5(i) ? n2 = false : t = i;
  }
  return e;
}
function Kf(r) {
  _a(r, (e) => {
    uu(e) || (ou[Ca] = e, e.tokenTypeIdx = Ca++), Na(e) && !zu(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), Na(e) || (e.CATEGORIES = []), Hf(e) || (e.categoryMatches = []), Wf(e) || (e.categoryMatchesMap = {});
  });
}
function Vf(r) {
  _a(r, (e) => {
    e.categoryMatches = [], _a(e.categoryMatchesMap, (t, n2) => {
      e.categoryMatches.push(ou[n2].tokenTypeIdx);
    });
  });
}
function jf(r) {
  _a(r, (e) => {
    lu([], e);
  });
}
function lu(r, e) {
  _a(r, (t) => {
    e.categoryMatchesMap[t.tokenTypeIdx] = true;
  }), _a(e.CATEGORIES, (t) => {
    const n2 = r.concat(e);
    de(n2, t) || lu(n2, t);
  });
}
function uu(r) {
  return sr(r, "tokenTypeIdx");
}
function Na(r) {
  return sr(r, "CATEGORIES");
}
function Hf(r) {
  return sr(r, "categoryMatches");
}
function Wf(r) {
  return sr(r, "categoryMatchesMap");
}
function zf(r) {
  return sr(r, "tokenTypeIdx");
}
var cs = {
  buildUnableToPopLexerModeMessage(r) {
    return `Unable to pop Lexer Mode after encountering Token ->${r.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(r, e, t, n2, i) {
    return `unexpected character: ->${r.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`;
  }
};
var H;
(function(r) {
  r[r.MISSING_PATTERN = 0] = "MISSING_PATTERN", r[r.INVALID_PATTERN = 1] = "INVALID_PATTERN", r[r.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", r[r.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", r[r.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", r[r.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", r[r.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", r[r.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", r[r.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", r[r.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", r[r.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", r[r.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", r[r.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", r[r.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", r[r.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", r[r.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", r[r.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", r[r.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(H || (H = {}));
var Ar = {
  deferDefinitionErrorsHandling: false,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: false,
  safeMode: false,
  errorMessageProvider: cs,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true
};
Object.freeze(Ar);
var fe = class {
  constructor(e, t = Ar) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        const a = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a}--> <${i}>`);
        const { time: o, value: l } = Zl(s), u = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${a}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return s();
    }, typeof t == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = Ae({}, Ar, t);
    const n2 = this.config.traceInitPerf;
    n2 === true ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = true) : typeof n2 == "number" && (this.traceInitMaxIdent = n2, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Ar.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = Ff;
        else if (this.config.lineTerminatorCharacters === Ar.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t.safeMode && t.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), zu(e) ? i = {
          modes: { defaultMode: n(e) },
          defaultMode: $r
        } : (s = false, i = n(e));
      }), this.config.skipValidations === false && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(_f(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(Pf(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, _a(i.modes, (o, l) => {
        i.modes[l] = Xn(o, (u) => Oa(u));
      });
      const a = A(i.modes);
      if (_a(i.modes, (o, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === false && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Tf(o, a));
          }), c5(this.lexerDefinitionErrors)) {
            Ur(o);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = yf(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: t.positionTracking,
                ensureOptimizations: t.ensureOptimizations,
                safeMode: t.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = u.charCodeToPatternIdxToConfig, this.emptyGroups = Ae({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !c5(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const o = lr(this.lexerDefinitionErrors, (l) => l.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + o);
      }
      _a(this.lexerDefinitionWarning, (o) => {
        Jl(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (nu ? (this.chopInput = nv, this.match = this.matchWithTest) : (this.updateLastIndex = Wr, this.match = this.matchWithExec), s && (this.handleModes = Wr), this.trackStartLines === false && (this.computeNewColumn = nv), this.trackEndLines === false && (this.updateTokenEndLineColumnLocation = Wr), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = Sa(this.canModeBeOptimized, (l, u, c) => (u === false && l.push(c), l), []);
        if (t.ensureOptimizations && !c5(o))
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        hf();
      }), this.TRACE_INIT("toFastProperties", () => {
        eu(this);
      });
    });
  }
  tokenize(e, t = this.defaultMode) {
    if (!c5(this.lexerDefinitionErrors)) {
      const n2 = lr(this.lexerDefinitionErrors, (i) => i.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + n2);
    }
    return this.tokenizeInternal(e, t);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, t) {
    let n2, i, s, a, o, l, u, c, d, f, h, m, g, k, R2;
    const $ = e, T = $.length;
    let I2 = 0, G = 0;
    const ie = this.hasCustom ? 0 : Math.floor(e.length / 10), Le = new Array(ie), ye = [];
    let Fe = this.trackStartLines ? 1 : void 0, Se2 = this.trackStartLines ? 1 : void 0;
    const E = Mf(this.emptyGroups), y = this.trackStartLines, S = this.config.lineTerminatorsPattern;
    let x = 0, O = [], b = [];
    const L = [], Te = [];
    Object.freeze(Te);
    let Y;
    function V2() {
      return O;
    }
    function ct(se) {
      const Ce = et(se), It = b[Ce];
      return It === void 0 ? Te : It;
    }
    const pc = (se) => {
      if (L.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      se.tokenType.PUSH_MODE === void 0) {
        const Ce = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(se);
        ye.push({
          offset: se.startOffset,
          line: se.startLine,
          column: se.startColumn,
          length: se.image.length,
          message: Ce
        });
      } else {
        L.pop();
        const Ce = fr(L);
        O = this.patternIdxToConfig[Ce], b = this.charCodeToPatternIdxToConfig[Ce], x = O.length;
        const It = this.canModeBeOptimized[Ce] && this.config.safeMode === false;
        b && It ? Y = ct : Y = V2;
      }
    };
    function da(se) {
      L.push(se), b = this.charCodeToPatternIdxToConfig[se], O = this.patternIdxToConfig[se], x = O.length, x = O.length;
      const Ce = this.canModeBeOptimized[se] && this.config.safeMode === false;
      b && Ce ? Y = ct : Y = V2;
    }
    da.call(this, t);
    let be;
    const fa = this.config.recoveryEnabled;
    for (; I2 < T; ) {
      l = null;
      const se = $.charCodeAt(I2), Ce = Y(se), It = Ce.length;
      for (n2 = 0; n2 < It; n2++) {
        be = Ce[n2];
        const ve = be.pattern;
        u = null;
        const Ke = be.short;
        if (Ke !== false ? se === Ke && (l = ve) : be.isCustom === true ? (R2 = ve.exec($, I2, Le, E), R2 !== null ? (l = R2[0], R2.payload !== void 0 && (u = R2.payload)) : l = null) : (this.updateLastIndex(ve, I2), l = this.match(ve, e, I2)), l !== null) {
          if (o = be.longerAlt, o !== void 0) {
            const Je = o.length;
            for (s = 0; s < Je; s++) {
              const Ve = O[o[s]], dt = Ve.pattern;
              if (c = null, Ve.isCustom === true ? (R2 = dt.exec($, I2, Le, E), R2 !== null ? (a = R2[0], R2.payload !== void 0 && (c = R2.payload)) : a = null) : (this.updateLastIndex(dt, I2), a = this.match(dt, e, I2)), a && a.length > l.length) {
                l = a, u = c, be = Ve;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (d = l.length, f = be.group, f !== void 0 && (h = be.tokenTypeIdx, m = this.createTokenInstance(l, I2, h, be.tokenType, Fe, Se2, d), this.handlePayload(m, u), f === false ? G = this.addToken(Le, G, m) : E[f].push(m)), e = this.chopInput(e, d), I2 = I2 + d, Se2 = this.computeNewColumn(Se2, d), y === true && be.canLineTerminator === true) {
          let ve = 0, Ke, Je;
          S.lastIndex = 0;
          do
            Ke = S.test(l), Ke === true && (Je = S.lastIndex - 1, ve++);
          while (Ke === true);
          ve !== 0 && (Fe = Fe + ve, Se2 = d - Je, this.updateTokenEndLineColumnLocation(m, f, Je, ve, Fe, Se2, d));
        }
        this.handleModes(be, pc, da, m);
      } else {
        const ve = I2, Ke = Fe, Je = Se2;
        let Ve = fa === false;
        for (; Ve === false && I2 < T; )
          for (e = this.chopInput(e, 1), I2++, i = 0; i < x; i++) {
            const dt = O[i], di = dt.pattern, ha = dt.short;
            if (ha !== false ? $.charCodeAt(I2) === ha && (Ve = true) : dt.isCustom === true ? Ve = di.exec($, I2, Le, E) !== null : (this.updateLastIndex(di, I2), Ve = di.exec(e) !== null), Ve === true)
              break;
          }
        if (g = I2 - ve, Se2 = this.computeNewColumn(Se2, g), k = this.config.errorMessageProvider.buildUnexpectedCharactersMessage($, ve, g, Ke, Je), ye.push({
          offset: ve,
          line: Ke,
          column: Je,
          length: g,
          message: k
        }), fa === false)
          break;
      }
    }
    return this.hasCustom || (Le.length = G), {
      tokens: Le,
      groups: E,
      errors: ye
    };
  }
  handleModes(e, t, n2, i) {
    if (e.pop === true) {
      const s = e.push;
      t(i), s !== void 0 && n2.call(this, s);
    } else e.push !== void 0 && n2.call(this, e.push);
  }
  chopInput(e, t) {
    return e.substring(t);
  }
  updateLastIndex(e, t) {
    e.lastIndex = t;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, t, n2, i, s, a, o) {
    let l, u;
    t !== void 0 && (l = n2 === o - 1, u = l ? -1 : 0, i === 1 && l === true || (e.endLine = s + u, e.endColumn = a - 1 + -u));
  }
  computeNewColumn(e, t) {
    return e + t;
  }
  createOffsetOnlyToken(e, t, n2, i) {
    return {
      image: e,
      startOffset: t,
      tokenTypeIdx: n2,
      tokenType: i
    };
  }
  createStartOnlyToken(e, t, n2, i, s, a) {
    return {
      image: e,
      startOffset: t,
      startLine: s,
      startColumn: a,
      tokenTypeIdx: n2,
      tokenType: i
    };
  }
  createFullToken(e, t, n2, i, s, a, o) {
    return {
      image: e,
      startOffset: t,
      endOffset: t + o - 1,
      startLine: s,
      endLine: s,
      startColumn: a,
      endColumn: a + o - 1,
      tokenTypeIdx: n2,
      tokenType: i
    };
  }
  addTokenUsingPush(e, t, n2) {
    return e.push(n2), t;
  }
  addTokenUsingMemberAccess(e, t, n2) {
    return e[t] = n2, t++, t;
  }
  handlePayloadNoCustom(e, t) {
  }
  handlePayloadWithCustom(e, t) {
    t !== null && (e.payload = t);
  }
  matchWithTest(e, t, n2) {
    return e.test(t) === true ? t.substring(n2, e.lastIndex) : null;
  }
  matchWithExec(e, t) {
    const n2 = e.exec(t);
    return n2 !== null ? n2[0] : null;
  }
};
fe.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
fe.NA = /NOT_APPLICABLE/;
function Lt(r) {
  return cu(r) ? r.LABEL : r.name;
}
function cu(r) {
  return he(r.LABEL) && r.LABEL !== "";
}
var Yf = "parent";
var wa2 = "categories";
var La = "label";
var ba2 = "group";
var Oa2 = "push_mode";
var _a2 = "pop_mode";
var Pa = "longer_alt";
var Ma = "line_breaks";
var Da = "start_chars_hint";
function du(r) {
  return qf(r);
}
function qf(r) {
  const e = r.pattern, t = {};
  if (t.name = r.name, Oa(e) || (t.PATTERN = e), sr(r, Yf))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return sr(r, wa2) && (t.CATEGORIES = r[wa2]), Ur([t]), sr(r, La) && (t.LABEL = r[La]), sr(r, ba2) && (t.GROUP = r[ba2]), sr(r, _a2) && (t.POP_MODE = r[_a2]), sr(r, Oa2) && (t.PUSH_MODE = r[Oa2]), sr(r, Pa) && (t.LONGER_ALT = r[Pa]), sr(r, Ma) && (t.LINE_BREAKS = r[Ma]), sr(r, Da) && (t.START_CHARS_HINT = r[Da]), t;
}
var tt = du({ name: "EOF", pattern: fe.NA });
Ur([tt]);
function Js(r, e, t, n2, i, s, a, o) {
  return {
    image: e,
    startOffset: t,
    endOffset: n2,
    startLine: i,
    endLine: s,
    startColumn: a,
    endColumn: o,
    tokenTypeIdx: r.tokenTypeIdx,
    tokenType: r
  };
}
function fu(r, e) {
  return Fr(r, e);
}
var Nt = {
  buildMismatchTokenMessage({ expected: r, actual: e, previous: t, ruleName: n2 }) {
    return `Expecting ${cu(r) ? `--> ${Lt(r)} <--` : `token of type --> ${r.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: r, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + r.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: r, actual: e, previous: t, customUserDescription: n2, ruleName: i }) {
    const s = "Expecting: ", a = `
but found: '` + Pe(e).image + "'";
    if (n2)
      return s + n2 + a;
    {
      const o = Sa(r, (c, d) => c.concat(d), []), l = lr(o, (c) => `[${lr(c, (d) => Lt(d)).join(", ")}]`), u = `one of these possible Token sequences:
${lr(l, (c, d) => `  ${d + 1}. ${c}`).join(`
`)}`;
      return s + u + a;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: r, actual: e, customUserDescription: t, ruleName: n2 }) {
    const i = "Expecting: ", s = `
but found: '` + Pe(e).image + "'";
    if (t)
      return i + t + s;
    {
      const a = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${lr(r, (o) => `[${lr(o, (l) => Lt(l)).join(",")}]`).join(" ,")}>`;
      return i + a + s;
    }
  }
};
Object.freeze(Nt);
var Xf = {
  buildRuleNotFoundError(r, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + r.name + "<-";
  }
};
var pt = {
  buildDuplicateFoundError(r, e) {
    function t(c) {
      return c instanceof F ? c.terminalType.name : c instanceof ue ? c.nonTerminalName : "";
    }
    const n2 = r.name, i = Pe(e), s = i.idx, a = Ue(i), o = t(i), l = s > 0;
    let u = `->${a}${l ? s : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${n2}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return u = u.replace(/[ \t]+/g, " "), u = u.replace(/\s\s+/g, `
`), u;
  },
  buildNamespaceConflictError(r) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${r.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(r) {
    const e = lr(r.prefixPath, (n2) => Lt(n2)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx;
    return `Ambiguous alternatives: <${r.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(r) {
    const e = lr(r.prefixPath, (i) => Lt(i)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx;
    let n2 = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return n2 = n2 + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n2;
  },
  buildEmptyRepetitionError(r) {
    let e = Ue(r.repetition);
    return r.repetition.idx !== 0 && (e += r.repetition.idx), `The repetition <${e}> within Rule <${r.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(r) {
    return "deprecated";
  },
  buildEmptyAlternationError(r) {
    return `Ambiguous empty alternative: <${r.emptyChoiceIdx + 1}> in <OR${r.alternation.idx}> inside <${r.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(r) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${r.alternation.idx}> inside <${r.topLevelRule.name}> Rule.
 has ${r.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(r) {
    const e = r.topLevelRule.name, t = lr(r.leftRecursionPath, (i) => i.name), n2 = `${e} --> ${t.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n2}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(r) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(r) {
    let e;
    return r.topLevelRule instanceof Bt ? e = r.topLevelRule.name : e = r.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${r.grammarName}<-`;
  }
};
function Qf(r, e) {
  const t = new Jf(r, e);
  return t.resolveRefs(), t.errors;
}
var Jf = class extends Kt {
  constructor(e, t) {
    super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
  }
  resolveRefs() {
    _a(ma(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const t = this.nameToTopRule[e.nonTerminalName];
    if (t)
      e.referencedRule = t;
    else {
      const n2 = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: n2,
        type: ce.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
};
var Zf = class extends ti {
  constructor(e, t) {
    super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = false, this.isAtEndOfPath = false;
  }
  startWalking() {
    if (this.found = false, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = n(this.path.ruleStack).reverse(), this.occurrenceStack = n(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, t = []) {
    this.found || super.walk(e, t);
  }
  walkProdRef(e, t, n2) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = t.concat(n2);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    c5(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = true) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
};
var eh = class extends Zf {
  constructor(e, t) {
    super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, t, n2) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = t.concat(n2), s = new pe({ definition: i });
      this.possibleTokTypes = Dr(s), this.found = true;
    }
  }
};
var ni = class extends ti {
  constructor(e, t) {
    super(), this.topRule = e, this.occurrence = t, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
};
var th = class extends ni {
  walkMany(e, t, n2) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof F && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, t, n2);
  }
};
var Fa = class extends ni {
  walkManySep(e, t, n2) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof F && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, t, n2);
  }
};
var rh = class extends ni {
  walkAtLeastOne(e, t, n2) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof F && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, t, n2);
  }
};
var Ua = class extends ni {
  walkAtLeastOneSep(e, t, n2) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof F && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, t, n2);
  }
};
function ds(r, e, t = []) {
  t = n(t);
  let n2 = [], i = 0;
  function s(o) {
    return o.concat(J(r, i + 1));
  }
  function a(o) {
    const l = ds(s(o), e, t);
    return n2.concat(l);
  }
  for (; t.length < e && i < r.length; ) {
    const o = r[i];
    if (o instanceof pe || o instanceof ue)
      return a(o.definition);
    if (o instanceof re)
      n2 = a(o.definition);
    else if (o instanceof xe) {
      const l = o.definition.concat([
        new j({
          definition: o.definition
        })
      ]);
      return a(l);
    } else if (o instanceof Ie) {
      const l = [
        new pe({ definition: o.definition }),
        new j({
          definition: [new F({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a(l);
    } else if (o instanceof me) {
      const l = o.definition.concat([
        new j({
          definition: [new F({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      n2 = a(l);
    } else if (o instanceof j) {
      const l = o.definition.concat([
        new j({
          definition: o.definition
        })
      ]);
      n2 = a(l);
    } else {
      if (o instanceof ge)
        return _a(o.definition, (l) => {
          c5(l.definition) === false && (n2 = a(l.definition));
        }), n2;
      if (o instanceof F)
        t.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return n2.push({
    partialPath: t,
    suffixDef: J(r, i)
  }), n2;
}
function hu(r, e, t, n2) {
  const i = "EXIT_NONE_TERMINAL", s = [i], a = "EXIT_ALTERNATIVE";
  let o = false;
  const l = e.length, u = l - n2 - 1, c = [], d = [];
  for (d.push({
    idx: -1,
    def: r,
    ruleStack: [],
    occurrenceStack: []
  }); !c5(d); ) {
    const f = d.pop();
    if (f === a) {
      o && fr(d).idx <= u && d.pop();
      continue;
    }
    const h = f.def, m = f.idx, g = f.ruleStack, k = f.occurrenceStack;
    if (c5(h))
      continue;
    const R2 = h[0];
    if (R2 === i) {
      const $ = {
        idx: m,
        def: J(h),
        ruleStack: wr(g),
        occurrenceStack: wr(k)
      };
      d.push($);
    } else if (R2 instanceof F)
      if (m < l - 1) {
        const $ = m + 1, T = e[$];
        if (t(T, R2.terminalType)) {
          const I2 = {
            idx: $,
            def: J(h),
            ruleStack: g,
            occurrenceStack: k
          };
          d.push(I2);
        }
      } else if (m === l - 1)
        c.push({
          nextTokenType: R2.terminalType,
          nextTokenOccurrence: R2.idx,
          ruleStack: g,
          occurrenceStack: k
        }), o = true;
      else
        throw Error("non exhaustive match");
    else if (R2 instanceof ue) {
      const $ = n(g);
      $.push(R2.nonTerminalName);
      const T = n(k);
      T.push(R2.idx);
      const I2 = {
        idx: m,
        def: R2.definition.concat(s, J(h)),
        ruleStack: $,
        occurrenceStack: T
      };
      d.push(I2);
    } else if (R2 instanceof re) {
      const $ = {
        idx: m,
        def: J(h),
        ruleStack: g,
        occurrenceStack: k
      };
      d.push($), d.push(a);
      const T = {
        idx: m,
        def: R2.definition.concat(J(h)),
        ruleStack: g,
        occurrenceStack: k
      };
      d.push(T);
    } else if (R2 instanceof xe) {
      const $ = new j({
        definition: R2.definition,
        idx: R2.idx
      }), T = R2.definition.concat([$], J(h)), I2 = {
        idx: m,
        def: T,
        ruleStack: g,
        occurrenceStack: k
      };
      d.push(I2);
    } else if (R2 instanceof Ie) {
      const $ = new F({
        terminalType: R2.separator
      }), T = new j({
        definition: [$].concat(R2.definition),
        idx: R2.idx
      }), I2 = R2.definition.concat([T], J(h)), G = {
        idx: m,
        def: I2,
        ruleStack: g,
        occurrenceStack: k
      };
      d.push(G);
    } else if (R2 instanceof me) {
      const $ = {
        idx: m,
        def: J(h),
        ruleStack: g,
        occurrenceStack: k
      };
      d.push($), d.push(a);
      const T = new F({
        terminalType: R2.separator
      }), I2 = new j({
        definition: [T].concat(R2.definition),
        idx: R2.idx
      }), G = R2.definition.concat([I2], J(h)), ie = {
        idx: m,
        def: G,
        ruleStack: g,
        occurrenceStack: k
      };
      d.push(ie);
    } else if (R2 instanceof j) {
      const $ = {
        idx: m,
        def: J(h),
        ruleStack: g,
        occurrenceStack: k
      };
      d.push($), d.push(a);
      const T = new j({
        definition: R2.definition,
        idx: R2.idx
      }), I2 = R2.definition.concat([T], J(h)), G = {
        idx: m,
        def: I2,
        ruleStack: g,
        occurrenceStack: k
      };
      d.push(G);
    } else if (R2 instanceof ge)
      for (let $ = R2.definition.length - 1; $ >= 0; $--) {
        const T = R2.definition[$], I2 = {
          idx: m,
          def: T.definition.concat(J(h)),
          ruleStack: g,
          occurrenceStack: k
        };
        d.push(I2), d.push(a);
      }
    else if (R2 instanceof pe)
      d.push({
        idx: m,
        def: R2.definition.concat(J(h)),
        ruleStack: g,
        occurrenceStack: k
      });
    else if (R2 instanceof Bt)
      d.push(nh(R2, m, g, k));
    else
      throw Error("non exhaustive match");
  }
  return c;
}
function nh(r, e, t, n2) {
  const i = n(t);
  i.push(r.name);
  const s = n(n2);
  return s.push(1), {
    idx: e,
    def: r.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var B;
(function(r) {
  r[r.OPTION = 0] = "OPTION", r[r.REPETITION = 1] = "REPETITION", r[r.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", r[r.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", r[r.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", r[r.ALTERNATION = 5] = "ALTERNATION";
})(B || (B = {}));
function Zs(r) {
  if (r instanceof re || r === "Option")
    return B.OPTION;
  if (r instanceof j || r === "Repetition")
    return B.REPETITION;
  if (r instanceof xe || r === "RepetitionMandatory")
    return B.REPETITION_MANDATORY;
  if (r instanceof Ie || r === "RepetitionMandatoryWithSeparator")
    return B.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (r instanceof me || r === "RepetitionWithSeparator")
    return B.REPETITION_WITH_SEPARATOR;
  if (r instanceof ge || r === "Alternation")
    return B.ALTERNATION;
  throw Error("non exhaustive match");
}
function Ga(r) {
  const { occurrence: e, rule: t, prodType: n2, maxLookahead: i } = r, s = Zs(n2);
  return s === B.ALTERNATION ? ii(e, t, i) : si(e, t, s, i);
}
function ih(r, e, t, n2, i, s) {
  const a = ii(r, e, t), o = gu(a) ? bn : Fr;
  return s(a, n2, o, i);
}
function sh(r, e, t, n2, i, s) {
  const a = si(r, e, i, t), o = gu(a) ? bn : Fr;
  return s(a[0], o, n2);
}
function ah(r, e, t, n2) {
  const i = r.length, s = _e(r, (a) => _e(a, (o) => o.length === 1));
  if (e)
    return function(a) {
      const o = lr(a, (l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const u = r[l], c = u.length, d = o[l];
        if (!(d !== void 0 && d.call(this) === false))
          e: for (let f = 0; f < c; f++) {
            const h = u[f], m = h.length;
            for (let g = 0; g < m; g++) {
              const k = this.LA(g + 1);
              if (t(k, h[g]) === false)
                continue e;
            }
            return l;
          }
      }
    };
  if (s && !n2) {
    const a = lr(r, (l) => er(l)), o = Sa(a, (l, u, c) => (_a(u, (d) => {
      sr(l, d.tokenTypeIdx) || (l[d.tokenTypeIdx] = c), _a(d.categoryMatches, (f) => {
        sr(l, f) || (l[f] = c);
      });
    }), l), {});
    return function() {
      const l = this.LA(1);
      return o[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let a = 0; a < i; a++) {
        const o = r[a], l = o.length;
        e: for (let u = 0; u < l; u++) {
          const c = o[u], d = c.length;
          for (let f = 0; f < d; f++) {
            const h = this.LA(f + 1);
            if (t(h, c[f]) === false)
              continue e;
          }
          return a;
        }
      }
    };
}
function oh(r, e, t) {
  const n2 = _e(r, (s) => s.length === 1), i = r.length;
  if (n2 && !t) {
    const s = er(r);
    if (s.length === 1 && c5(s[0].categoryMatches)) {
      const a = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === a;
      };
    } else {
      const a = Sa(s, (o, l, u) => (o[l.tokenTypeIdx] = true, _a(l.categoryMatches, (c) => {
        o[c] = true;
      }), o), []);
      return function() {
        const o = this.LA(1);
        return a[o.tokenTypeIdx] === true;
      };
    }
  } else
    return function() {
      e: for (let s = 0; s < i; s++) {
        const a = r[s], o = a.length;
        for (let l = 0; l < o; l++) {
          const u = this.LA(l + 1);
          if (e(u, a[l]) === false)
            continue e;
        }
        return true;
      }
      return false;
    };
}
var lh = class extends ti {
  constructor(e, t, n2) {
    super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = n2;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, t, n2, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = n2.concat(i), true) : false;
  }
  walkOption(e, t, n2) {
    this.checkIsTarget(e, B.OPTION, t, n2) || super.walkOption(e, t, n2);
  }
  walkAtLeastOne(e, t, n2) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY, t, n2) || super.walkOption(e, t, n2);
  }
  walkAtLeastOneSep(e, t, n2) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t, n2) || super.walkOption(e, t, n2);
  }
  walkMany(e, t, n2) {
    this.checkIsTarget(e, B.REPETITION, t, n2) || super.walkOption(e, t, n2);
  }
  walkManySep(e, t, n2) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR, t, n2) || super.walkOption(e, t, n2);
  }
};
var pu = class extends Kt {
  constructor(e, t, n2) {
    super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = n2, this.result = [];
  }
  checkIsTarget(e, t) {
    e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, B.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, B.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, B.ALTERNATION);
  }
};
function Ba(r) {
  const e = new Array(r);
  for (let t = 0; t < r; t++)
    e[t] = [];
  return e;
}
function $i(r) {
  let e = [""];
  for (let t = 0; t < r.length; t++) {
    const n2 = r[t], i = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      i.push(a + "_" + n2.tokenTypeIdx);
      for (let o = 0; o < n2.categoryMatches.length; o++) {
        const l = "_" + n2.categoryMatches[o];
        i.push(a + l);
      }
    }
    e = i;
  }
  return e;
}
function uh(r, e, t) {
  for (let n2 = 0; n2 < r.length; n2++) {
    if (n2 === t)
      continue;
    const i = r[n2];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (i[a] === true)
        return false;
    }
  }
  return true;
}
function mu(r, e) {
  const t = lr(r, (a) => ds([a], 1)), n2 = Ba(t.length), i = lr(t, (a) => {
    const o = {};
    return _a(a, (l) => {
      const u = $i(l.partialPath);
      _a(u, (c) => {
        o[c] = true;
      });
    }), o;
  });
  let s = t;
  for (let a = 1; a <= e; a++) {
    const o = s;
    s = Ba(o.length);
    for (let l = 0; l < o.length; l++) {
      const u = o[l];
      for (let c = 0; c < u.length; c++) {
        const d = u[c].partialPath, f = u[c].suffixDef, h = $i(d);
        if (uh(i, h, l) || c5(f) || d.length === e) {
          const m = n2[l];
          if (fs(m, d) === false) {
            m.push(d);
            for (let g = 0; g < h.length; g++) {
              const k = h[g];
              i[l][k] = true;
            }
          }
        } else {
          const m = ds(f, a + 1, d);
          s[l] = s[l].concat(m), _a(m, (g) => {
            const k = $i(g.partialPath);
            _a(k, (R2) => {
              i[l][R2] = true;
            });
          });
        }
      }
    }
  }
  return n2;
}
function ii(r, e, t, n2) {
  const i = new pu(r, B.ALTERNATION, n2);
  return e.accept(i), mu(i.result, t);
}
function si(r, e, t, n2) {
  const i = new pu(r, t);
  e.accept(i);
  const s = i.result, a = new lh(e, r, t).startWalking(), o = new pe({ definition: s }), l = new pe({ definition: a });
  return mu([o, l], n2);
}
function fs(r, e) {
  e: for (let t = 0; t < r.length; t++) {
    const n2 = r[t];
    if (n2.length === e.length) {
      for (let i = 0; i < n2.length; i++) {
        const s = e[i], a = n2[i];
        if (!(s === a || a.categoryMatchesMap[s.tokenTypeIdx] !== void 0))
          continue e;
      }
      return true;
    }
  }
  return false;
}
function ch(r, e) {
  return r.length < e.length && _e(r, (t, n2) => {
    const i = e[n2];
    return t === i || i.categoryMatchesMap[t.tokenTypeIdx];
  });
}
function gu(r) {
  return _e(r, (e) => _e(e, (t) => _e(t, (n2) => c5(n2.categoryMatches))));
}
function dh(r) {
  const e = r.lookaheadStrategy.validate({
    rules: r.rules,
    tokenTypes: r.tokenTypes,
    grammarName: r.grammarName
  });
  return lr(e, (t) => Object.assign({ type: ce.CUSTOM_LOOKAHEAD_VALIDATION }, t));
}
function fh(r, e, t, n2) {
  const i = Ee(r, (l) => hh(l, t)), s = xh(r, e, t), a = Ee(r, (l) => $h(l, t)), o = Ee(r, (l) => gh(l, r, n2, t));
  return i.concat(s, a, o);
}
function hh(r, e) {
  const t = new mh();
  r.accept(t);
  const n2 = t.allProductions, i = jc(n2, ph), s = Me(i, (a) => a.length > 1);
  return lr(ma(s), (a) => {
    const o = Pe(a), l = e.buildDuplicateFoundError(r, a), u = Ue(o), c = {
      message: l,
      type: ce.DUPLICATE_PRODUCTIONS,
      ruleName: r.name,
      dslName: u,
      occurrence: o.idx
    }, d = yu(o);
    return d && (c.parameter = d), c;
  });
}
function ph(r) {
  return `${Ue(r)}_#_${r.idx}_#_${yu(r)}`;
}
function yu(r) {
  return r instanceof F ? r.terminalType.name : r instanceof ue ? r.nonTerminalName : "";
}
var mh = class extends Kt {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
};
function gh(r, e, t, n2) {
  const i = [];
  if (Sa(e, (s, a) => a.name === r.name ? s + 1 : s, 0) > 1) {
    const s = n2.buildDuplicateRuleNameError({
      topLevelRule: r,
      grammarName: t
    });
    i.push({
      message: s,
      type: ce.DUPLICATE_RULE_NAME,
      ruleName: r.name
    });
  }
  return i;
}
function yh(r, e, t) {
  const n2 = [];
  let i;
  return de(e, r) || (i = `Invalid rule override, rule: ->${r}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, n2.push({
    message: i,
    type: ce.INVALID_RULE_OVERRIDE,
    ruleName: r
  })), n2;
}
function Tu(r, e, t, n2 = []) {
  const i = [], s = gn(e.definition);
  if (c5(s))
    return [];
  {
    const a = r.name;
    de(s, r) && i.push({
      message: t.buildLeftRecursionError({
        topLevelRule: r,
        leftRecursionPath: n2
      }),
      type: ce.LEFT_RECURSION,
      ruleName: a
    });
    const o = qn(s, n2.concat([r])), l = Ee(o, (u) => {
      const c = n(n2);
      return c.push(u), Tu(r, u, t, c);
    });
    return i.concat(l);
  }
}
function gn(r) {
  let e = [];
  if (c5(r))
    return e;
  const t = Pe(r);
  if (t instanceof ue)
    e.push(t.referencedRule);
  else if (t instanceof pe || t instanceof re || t instanceof xe || t instanceof Ie || t instanceof me || t instanceof j)
    e = e.concat(gn(t.definition));
  else if (t instanceof ge)
    e = er(lr(t.definition, (s) => gn(s.definition)));
  else if (!(t instanceof F)) throw Error("non exhaustive match");
  const n2 = wn(t), i = r.length > 1;
  if (n2 && i) {
    const s = J(r);
    return e.concat(gn(s));
  } else
    return e;
}
var ea = class extends Kt {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
};
function Th(r, e) {
  const t = new ea();
  r.accept(t);
  const n2 = t.alternations;
  return Ee(n2, (i) => {
    const s = wr(i.definition);
    return Ee(s, (a, o) => {
      const l = hu([a], [], Fr, 1);
      return c5(l) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: r,
            alternation: i,
            emptyChoiceIdx: o
          }),
          type: ce.NONE_LAST_EMPTY_ALT,
          ruleName: r.name,
          occurrence: i.idx,
          alternative: o + 1
        }
      ] : [];
    });
  });
}
function vh(r, e, t) {
  const n2 = new ea();
  r.accept(n2);
  let i = n2.alternations;
  return i = Xn(i, (s) => s.ignoreAmbiguities === true), Ee(i, (s) => {
    const a = s.idx, o = s.maxLookahead || e, l = ii(a, r, o, s), u = Ah(l, s, r, t), c = kh(l, s, r, t);
    return u.concat(c);
  });
}
var Rh = class extends Kt {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
};
function $h(r, e) {
  const t = new ea();
  r.accept(t);
  const n2 = t.alternations;
  return Ee(n2, (i) => i.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: r,
        alternation: i
      }),
      type: ce.TOO_MANY_ALTS,
      ruleName: r.name,
      occurrence: i.idx
    }
  ] : []);
}
function Eh(r, e, t) {
  const n2 = [];
  return _a(r, (i) => {
    const s = new Rh();
    i.accept(s);
    const a = s.allProductions;
    _a(a, (o) => {
      const l = Zs(o), u = o.maxLookahead || e, c = o.idx, d = si(c, i, l, u)[0];
      if (c5(er(d))) {
        const f = t.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        n2.push({
          message: f,
          type: ce.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), n2;
}
function Ah(r, e, t, n2) {
  const i = [], s = Sa(r, (a, o, l) => (e.definition[l].ignoreAmbiguities === true || _a(o, (u) => {
    const c = [l];
    _a(r, (d, f) => {
      l !== f && fs(d, u) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[f].ignoreAmbiguities !== true && c.push(f);
    }), c.length > 1 && !fs(i, u) && (i.push(u), a.push({
      alts: c,
      path: u
    }));
  }), a), []);
  return lr(s, (a) => {
    const o = lr(a.alts, (l) => l + 1);
    return {
      message: n2.buildAlternationAmbiguityError({
        topLevelRule: t,
        alternation: e,
        ambiguityIndices: o,
        prefixPath: a.path
      }),
      type: ce.AMBIGUOUS_ALTS,
      ruleName: t.name,
      occurrence: e.idx,
      alternatives: a.alts
    };
  });
}
function kh(r, e, t, n2) {
  const i = Sa(r, (s, a, o) => {
    const l = lr(a, (u) => ({ idx: o, path: u }));
    return s.concat(l);
  }, []);
  return _r(Ee(i, (s) => {
    if (e.definition[s.idx].ignoreAmbiguities === true)
      return [];
    const a = s.idx, o = s.path, l = Aa(i, (u) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[u.idx].ignoreAmbiguities !== true && u.idx < a && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      ch(u.path, o)
    ));
    return lr(l, (u) => {
      const c = [u.idx + 1, a + 1], d = e.idx === 0 ? "" : e.idx;
      return {
        message: n2.buildAlternationPrefixAmbiguityError({
          topLevelRule: t,
          alternation: e,
          ambiguityIndices: c,
          prefixPath: u.path
        }),
        type: ce.AMBIGUOUS_PREFIX_ALTS,
        ruleName: t.name,
        occurrence: d,
        alternatives: c
      };
    });
  }));
}
function xh(r, e, t) {
  const n2 = [], i = lr(e, (s) => s.name);
  return _a(r, (s) => {
    const a = s.name;
    if (de(i, a)) {
      const o = t.buildNamespaceConflictError(s);
      n2.push({
        message: o,
        type: ce.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a
      });
    }
  }), n2;
}
function Ih(r) {
  const e = ir(r, {
    errMsgProvider: Xf
  }), t = {};
  return _a(r.rules, (n2) => {
    t[n2.name] = n2;
  }), Qf(t, e.errMsgProvider);
}
function Sh(r) {
  return r = ir(r, {
    errMsgProvider: pt
  }), fh(r.rules, r.tokenTypes, r.errMsgProvider, r.grammarName);
}
var vu = "MismatchedTokenException";
var Ru = "NoViableAltException";
var $u = "EarlyExitException";
var Eu = "NotAllInputParsedException";
var Au = [
  vu,
  Ru,
  $u,
  Eu
];
Object.freeze(Au);
function On(r) {
  return de(Au, r.name);
}
var ai = class extends Error {
  constructor(e, t) {
    super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
};
var ku = class extends ai {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = vu;
  }
};
var Ch = class extends ai {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = Ru;
  }
};
var Nh = class extends ai {
  constructor(e, t) {
    super(e, t), this.name = Eu;
  }
};
var wh = class extends ai {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = $u;
  }
};
var Ei = {};
var xu = "InRuleRecoveryException";
var Lh = class extends Error {
  constructor(e) {
    super(e), this.name = xu;
  }
};
var bh = class {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = sr(e, "recoveryEnabled") ? e.recoveryEnabled : Qe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = Oh);
  }
  getTokenToInsert(e) {
    const t = Js(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return t.isInsertedInRecovery = true, t;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return true;
  }
  tryInRepetitionRecovery(e, t, n2, i) {
    const s = this.findReSyncTokenType(), a = this.exportLexerState(), o = [];
    let l = false;
    const u = this.LA(1);
    let c = this.LA(1);
    const d = () => {
      const f = this.LA(0), h = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: u,
        previous: f,
        ruleName: this.getCurrRuleFullName()
      }), m = new ku(h, u, this.LA(0));
      m.resyncedTokens = wr(o), this.SAVE_ERROR(m);
    };
    for (; !l; )
      if (this.tokenMatcher(c, i)) {
        d();
        return;
      } else if (n2.call(this)) {
        d(), e.apply(this, t);
        return;
      } else this.tokenMatcher(c, s) ? l = true : (c = this.SKIP_TOKEN(), this.addToResyncTokens(c, o));
    this.importLexerState(a);
  }
  shouldInRepetitionRecoveryBeTried(e, t, n2) {
    return !(n2 === false || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, t) {
    const n2 = this.getCurrentGrammarPath(e, t);
    return this.getNextPossibleTokenTypes(n2);
  }
  tryInRuleRecovery(e, t) {
    if (this.canRecoverWithSingleTokenInsertion(e, t))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const n2 = this.SKIP_TOKEN();
      return this.consumeToken(), n2;
    }
    throw new Lh("sad sad panda");
  }
  canPerformInRuleRecovery(e, t) {
    return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, t) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || c5(t))
      return false;
    const n2 = this.LA(1);
    return vr(t, (i) => this.tokenMatcher(n2, i)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : false;
  }
  isInCurrentRuleReSyncSet(e) {
    const t = this.getCurrFollowKey(), n2 = this.getFollowSetFromFollowKey(t);
    return de(n2, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let t = this.LA(1), n2 = 2;
    for (; ; ) {
      const i = vr(e, (s) => fu(t, s));
      if (i !== void 0)
        return i;
      t = this.LA(n2), n2++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Ei;
    const e = this.getLastExplicitRuleShortName(), t = this.getLastExplicitRuleOccurrenceIndex(), n2 = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: t,
      inRule: this.shortRuleNameToFullName(n2)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
    return lr(e, (n2, i) => i === 0 ? Ei : {
      ruleName: this.shortRuleNameToFullName(n2),
      idxInCallingRule: t[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = lr(this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t));
    return er(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Ei)
      return [tt];
    const t = e.ruleName + e.idxInCallingRule + tu + e.inRule;
    return this.resyncFollows[t];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, t) {
    return this.tokenMatcher(e, tt) || t.push(e), t;
  }
  reSyncTo(e) {
    const t = [];
    let n2 = this.LA(1);
    for (; this.tokenMatcher(n2, e) === false; )
      n2 = this.SKIP_TOKEN(), this.addToResyncTokens(n2, t);
    return wr(t);
  }
  attemptInRepetitionRecovery(e, t, n2, i, s, a, o) {
  }
  getCurrentGrammarPath(e, t) {
    const n2 = this.getHumanReadableRuleStack(), i = n(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: n2,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: t
    };
  }
  getHumanReadableRuleStack() {
    return lr(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
};
function Oh(r, e, t, n2, i, s, a) {
  const o = this.getKeyForAutomaticLookahead(n2, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const f = this.getCurrRuleFullName(), h = this.getGAstProductions()[f];
    l = new s(h, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let u = l.token, c = l.occurrence;
  const d = l.isEndOfRule;
  this.RULE_STACK.length === 1 && d && u === void 0 && (u = tt, c = 1), !(u === void 0 || c === void 0) && this.shouldInRepetitionRecoveryBeTried(u, c, a) && this.tryInRepetitionRecovery(r, e, t, u);
}
var _h = 4;
var it = 8;
var Iu = 1 << it;
var Su = 2 << it;
var hs = 3 << it;
var ps = 4 << it;
var ms = 5 << it;
var yn = 6 << it;
function Ai(r, e, t) {
  return t | e | r;
}
var ta = class {
  constructor(e) {
    var t;
    this.maxLookahead = (t = e == null ? void 0 : e.maxLookahead) !== null && t !== void 0 ? t : Qe.maxLookahead;
  }
  validate(e) {
    const t = this.validateNoLeftRecursion(e.rules);
    if (c5(t)) {
      const n2 = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...t,
        ...n2,
        ...i,
        ...s
      ];
    }
    return t;
  }
  validateNoLeftRecursion(e) {
    return Ee(e, (t) => Tu(t, t, pt));
  }
  validateEmptyOrAlternatives(e) {
    return Ee(e, (t) => Th(t, pt));
  }
  validateAmbiguousAlternationAlternatives(e, t) {
    return Ee(e, (n2) => vh(n2, t, pt));
  }
  validateSomeNonEmptyLookaheadPath(e, t) {
    return Eh(e, t, pt);
  }
  buildLookaheadForAlternation(e) {
    return ih(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, ah);
  }
  buildLookaheadForOptional(e) {
    return sh(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, Zs(e.prodType), oh);
  }
};
var Ph = class {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = sr(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Qe.dynamicTokensEnabled, this.maxLookahead = sr(e, "maxLookahead") ? e.maxLookahead : Qe.maxLookahead, this.lookaheadStrategy = sr(e, "lookaheadStrategy") ? e.lookaheadStrategy : new ta({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    _a(e, (t) => {
      this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
        const { alternation: n2, repetition: i, option: s, repetitionMandatory: a, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = Dh(t);
        _a(n2, (u) => {
          const c = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${Ue(u)}${c}`, () => {
            const d = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: t,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), f = Ai(this.fullRuleNameToShort[t.name], Iu, u.idx);
            this.setLaFuncCache(f, d);
          });
        }), _a(i, (u) => {
          this.computeLookaheadFunc(t, u.idx, hs, "Repetition", u.maxLookahead, Ue(u));
        }), _a(s, (u) => {
          this.computeLookaheadFunc(t, u.idx, Su, "Option", u.maxLookahead, Ue(u));
        }), _a(a, (u) => {
          this.computeLookaheadFunc(t, u.idx, ps, "RepetitionMandatory", u.maxLookahead, Ue(u));
        }), _a(o, (u) => {
          this.computeLookaheadFunc(t, u.idx, yn, "RepetitionMandatoryWithSeparator", u.maxLookahead, Ue(u));
        }), _a(l, (u) => {
          this.computeLookaheadFunc(t, u.idx, ms, "RepetitionWithSeparator", u.maxLookahead, Ue(u));
        });
      });
    });
  }
  computeLookaheadFunc(e, t, n2, i, s, a) {
    this.TRACE_INIT(`${a}${t === 0 ? "" : t}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: t,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), l = Ai(this.fullRuleNameToShort[e.name], n2, t);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, t) {
    const n2 = this.getLastExplicitRuleShortName();
    return Ai(n2, e, t);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, t) {
    this.lookAheadFuncsCache.set(e, t);
  }
};
var Mh = class extends Kt {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
};
var tn = new Mh();
function Dh(r) {
  tn.reset(), r.accept(tn);
  const e = tn.dslMethods;
  return tn.reset(), e;
}
function Ka(r, e) {
  isNaN(r.startOffset) === true ? (r.startOffset = e.startOffset, r.endOffset = e.endOffset) : r.endOffset < e.endOffset && (r.endOffset = e.endOffset);
}
function Va(r, e) {
  isNaN(r.startOffset) === true ? (r.startOffset = e.startOffset, r.startColumn = e.startColumn, r.startLine = e.startLine, r.endOffset = e.endOffset, r.endColumn = e.endColumn, r.endLine = e.endLine) : r.endOffset < e.endOffset && (r.endOffset = e.endOffset, r.endColumn = e.endColumn, r.endLine = e.endLine);
}
function Fh(r, e, t) {
  r.children[t] === void 0 ? r.children[t] = [e] : r.children[t].push(e);
}
function Uh(r, e, t) {
  r.children[e] === void 0 ? r.children[e] = [t] : r.children[e].push(t);
}
var Gh = "name";
function Cu(r, e) {
  Object.defineProperty(r, Gh, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: e
  });
}
function Bh(r, e) {
  const t = A(r), n2 = t.length;
  for (let i = 0; i < n2; i++) {
    const s = t[i], a = r[s], o = a.length;
    for (let l = 0; l < o; l++) {
      const u = a[l];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
function Kh(r, e) {
  const t = function() {
  };
  Cu(t, r + "BaseSemantics");
  const n2 = {
    visit: function(i, s) {
      if (zu(i) && (i = i[0]), !Oa(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = jh(this, e);
      if (!c5(i)) {
        const s = lr(i, (a) => a.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return t.prototype = n2, t.prototype.constructor = t, t._RULE_NAMES = e, t;
}
function Vh(r, e, t) {
  const n2 = function() {
  };
  Cu(n2, r + "BaseSemanticsWithDefaults");
  const i = Object.create(t.prototype);
  return _a(e, (s) => {
    i[s] = Bh;
  }), n2.prototype = i, n2.prototype.constructor = n2, n2;
}
var gs;
(function(r) {
  r[r.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", r[r.MISSING_METHOD = 1] = "MISSING_METHOD";
})(gs || (gs = {}));
function jh(r, e) {
  return Hh(r, e);
}
function Hh(r, e) {
  const t = Aa(e, (i) => ig(r[i]) === false), n2 = lr(t, (i) => ({
    msg: `Missing visitor method: <${i}> on ${r.constructor.name} CST Visitor.`,
    type: gs.MISSING_METHOD,
    methodName: i
  }));
  return _r(n2);
}
var Wh = class {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = sr(e, "nodeLocationTracking") ? e.nodeLocationTracking : Qe.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = Wr, this.cstFinallyStateUpdate = Wr, this.cstPostTerminal = Wr, this.cstPostNonTerminal = Wr, this.cstPostRule = Wr;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Va, this.setNodeLocationFromNode = Va, this.cstPostRule = Wr, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = Wr, this.setNodeLocationFromNode = Wr, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Ka, this.setNodeLocationFromNode = Ka, this.cstPostRule = Wr, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = Wr, this.setNodeLocationFromNode = Wr, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = Wr, this.setNodeLocationFromNode = Wr, this.cstPostRule = Wr, this.setInitialNodeLocation = Wr;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const t = this.LA(1);
    e.location = {
      startOffset: t.startOffset,
      startLine: t.startLine,
      startColumn: t.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const t = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(t), this.CST_STACK.push(t);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const t = this.LA(0), n2 = e.location;
    n2.startOffset <= t.startOffset ? (n2.endOffset = t.endOffset, n2.endLine = t.endLine, n2.endColumn = t.endColumn) : (n2.startOffset = NaN, n2.startLine = NaN, n2.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const t = this.LA(0), n2 = e.location;
    n2.startOffset <= t.startOffset ? n2.endOffset = t.endOffset : n2.startOffset = NaN;
  }
  cstPostTerminal(e, t) {
    const n2 = this.CST_STACK[this.CST_STACK.length - 1];
    Fh(n2, t, e), this.setNodeLocationFromToken(n2.location, t);
  }
  cstPostNonTerminal(e, t) {
    const n2 = this.CST_STACK[this.CST_STACK.length - 1];
    Uh(n2, t, e), this.setNodeLocationFromNode(n2.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (Oa(this.baseCstVisitorConstructor)) {
      const e = Kh(this.className, A(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (Oa(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = Vh(this.className, A(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
};
var zh = class {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== true)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Pn;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const t = this.currIdx + e;
    return t < 0 || this.tokVectorLength <= t ? Pn : this.tokVector[t];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
};
var Yh = class {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, t, n2) {
    return this.consumeInternal(t, e, n2);
  }
  subrule(e, t, n2) {
    return this.subruleInternal(t, e, n2);
  }
  option(e, t) {
    return this.optionInternal(t, e);
  }
  or(e, t) {
    return this.orInternal(t, e);
  }
  many(e, t) {
    return this.manyInternal(e, t);
  }
  atLeastOne(e, t) {
    return this.atLeastOneInternal(e, t);
  }
  CONSUME(e, t) {
    return this.consumeInternal(e, 0, t);
  }
  CONSUME1(e, t) {
    return this.consumeInternal(e, 1, t);
  }
  CONSUME2(e, t) {
    return this.consumeInternal(e, 2, t);
  }
  CONSUME3(e, t) {
    return this.consumeInternal(e, 3, t);
  }
  CONSUME4(e, t) {
    return this.consumeInternal(e, 4, t);
  }
  CONSUME5(e, t) {
    return this.consumeInternal(e, 5, t);
  }
  CONSUME6(e, t) {
    return this.consumeInternal(e, 6, t);
  }
  CONSUME7(e, t) {
    return this.consumeInternal(e, 7, t);
  }
  CONSUME8(e, t) {
    return this.consumeInternal(e, 8, t);
  }
  CONSUME9(e, t) {
    return this.consumeInternal(e, 9, t);
  }
  SUBRULE(e, t) {
    return this.subruleInternal(e, 0, t);
  }
  SUBRULE1(e, t) {
    return this.subruleInternal(e, 1, t);
  }
  SUBRULE2(e, t) {
    return this.subruleInternal(e, 2, t);
  }
  SUBRULE3(e, t) {
    return this.subruleInternal(e, 3, t);
  }
  SUBRULE4(e, t) {
    return this.subruleInternal(e, 4, t);
  }
  SUBRULE5(e, t) {
    return this.subruleInternal(e, 5, t);
  }
  SUBRULE6(e, t) {
    return this.subruleInternal(e, 6, t);
  }
  SUBRULE7(e, t) {
    return this.subruleInternal(e, 7, t);
  }
  SUBRULE8(e, t) {
    return this.subruleInternal(e, 8, t);
  }
  SUBRULE9(e, t) {
    return this.subruleInternal(e, 9, t);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, t, n2 = Mn) {
    if (de(this.definedRulesNames, e)) {
      const s = {
        message: pt.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: ce.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(s);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, t, n2);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, t, n2 = Mn) {
    const i = yh(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const s = this.defineRule(e, t, n2);
    return this[e] = s, s;
  }
  BACKTRACK(e, t) {
    return function() {
      this.isBackTrackingStack.push(1);
      const n2 = this.saveRecogState();
      try {
        return e.apply(this, t), true;
      } catch (i) {
        if (On(i))
          return false;
        throw i;
      } finally {
        this.reloadRecogState(n2), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return rf(ma(this.gastProductionsCache));
  }
};
var qh = class {
  initRecognizerEngine(e, t) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = bn, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, sr(t, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (zu(e)) {
      if (c5(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (zu(e))
      this.tokensMap = Sa(e, (s, a) => (s[a.name] = a, s), {});
    else if (sr(e, "modes") && _e(er(ma(e.modes)), zf)) {
      const s = er(ma(e.modes)), a = Bs(s);
      this.tokensMap = Sa(a, (o, l) => (o[l.name] = l, o), {});
    } else if (co(e))
      this.tokensMap = n(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = tt;
    const n2 = sr(e, "modes") ? er(ma(e.modes)) : ma(e), i = _e(n2, (s) => c5(s.categoryMatches));
    this.tokenMatcher = i ? bn : Fr, Ur(ma(this.tokensMap));
  }
  defineRule(e, t, n2) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = sr(n2, "resyncEnabled") ? n2.resyncEnabled : Mn.resyncEnabled, s = sr(n2, "recoveryValueFunc") ? n2.recoveryValueFunc : Mn.recoveryValueFunc, a = this.ruleShortNameIdx << _h + it;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = e, this.fullRuleNameToShort[e] = a;
    let o;
    return this.outputCst === true ? o = function(...l) {
      try {
        this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, l);
        const u = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(u), u;
      } catch (u) {
        return this.invokeRuleCatch(u, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...l) {
      try {
        return this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, l);
      } catch (u) {
        return this.invokeRuleCatch(u, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o, { ruleName: e, originalGrammarAction: t });
  }
  invokeRuleCatch(e, t, n2) {
    const i = this.RULE_STACK.length === 1, s = t && !this.isBackTracking() && this.recoveryEnabled;
    if (On(e)) {
      const a = e;
      if (s) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (a.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = true, l;
          } else
            return n2(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = true, a.partialCstResult = l;
          }
          throw a;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), n2(e);
        throw a;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, t) {
    const n2 = this.getKeyForAutomaticLookahead(Su, t);
    return this.optionInternalLogic(e, t, n2);
  }
  optionInternalLogic(e, t, n2) {
    let i = this.getLaFuncFromCache(n2), s;
    if (typeof e != "function") {
      s = e.DEF;
      const a = e.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = e;
    if (i.call(this) === true)
      return s.call(this);
  }
  atLeastOneInternal(e, t) {
    const n2 = this.getKeyForAutomaticLookahead(ps, e);
    return this.atLeastOneInternalLogic(e, t, n2);
  }
  atLeastOneInternalLogic(e, t, n2) {
    let i = this.getLaFuncFromCache(n2), s;
    if (typeof t != "function") {
      s = t.DEF;
      const a = t.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = t;
    if (i.call(this) === true) {
      let a = this.doSingleRepetition(s);
      for (; i.call(this) === true && a === true; )
        a = this.doSingleRepetition(s);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY, t.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], i, ps, e, rh);
  }
  atLeastOneSepFirstInternal(e, t) {
    const n2 = this.getKeyForAutomaticLookahead(yn, e);
    this.atLeastOneSepFirstInternalLogic(e, t, n2);
  }
  atLeastOneSepFirstInternalLogic(e, t, n2) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(n2).call(this) === true) {
      i.call(this);
      const a = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === true; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        a,
        i,
        Ua
      ], a, yn, e, Ua);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
  }
  manyInternal(e, t) {
    const n2 = this.getKeyForAutomaticLookahead(hs, e);
    return this.manyInternalLogic(e, t, n2);
  }
  manyInternalLogic(e, t, n2) {
    let i = this.getLaFuncFromCache(n2), s;
    if (typeof t != "function") {
      s = t.DEF;
      const o = t.GATE;
      if (o !== void 0) {
        const l = i;
        i = () => o.call(this) && l.call(this);
      }
    } else
      s = t;
    let a = true;
    for (; i.call(this) === true && a === true; )
      a = this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, t],
      i,
      hs,
      e,
      th,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a
    );
  }
  manySepFirstInternal(e, t) {
    const n2 = this.getKeyForAutomaticLookahead(ms, e);
    this.manySepFirstInternalLogic(e, t, n2);
  }
  manySepFirstInternalLogic(e, t, n2) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(n2).call(this) === true) {
      i.call(this);
      const a = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === true; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        a,
        i,
        Fa
      ], a, ms, e, Fa);
    }
  }
  repetitionSepSecondInternal(e, t, n2, i, s) {
    for (; n2(); )
      this.CONSUME(t), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      t,
      n2,
      i,
      s
    ], n2, yn, e, s);
  }
  doSingleRepetition(e) {
    const t = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > t;
  }
  orInternal(e, t) {
    const n2 = this.getKeyForAutomaticLookahead(Iu, t), i = zu(e) ? e : e.DEF, s = this.getLaFuncFromCache(n2).call(this, i);
    if (s !== void 0)
      return i[s].ALT.call(this);
    this.raiseNoAltException(t, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      const e = this.LA(1), t = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new Nh(t, e));
    }
  }
  subruleInternal(e, t, n2) {
    let i;
    try {
      const s = n2 !== void 0 ? n2.ARGS : void 0;
      return this.subruleIdx = t, i = e.apply(this, s), this.cstPostNonTerminal(i, n2 !== void 0 && n2.LABEL !== void 0 ? n2.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, n2, e.ruleName);
    }
  }
  subruleInternalError(e, t, n2) {
    throw On(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : n2), delete e.partialCstResult), e;
  }
  consumeInternal(e, t, n2) {
    let i;
    try {
      const s = this.LA(1);
      this.tokenMatcher(s, e) === true ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, n2);
    } catch (s) {
      i = this.consumeInternalRecovery(e, t, s);
    }
    return this.cstPostTerminal(n2 !== void 0 && n2.LABEL !== void 0 ? n2.LABEL : e.name, i), i;
  }
  consumeInternalError(e, t, n2) {
    let i;
    const s = this.LA(0);
    throw n2 !== void 0 && n2.ERR_MSG ? i = n2.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: t,
      previous: s,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new ku(i, t, s));
  }
  consumeInternalRecovery(e, t, n2) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    n2.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, t);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === xu ? n2 : s;
      }
    } else
      throw n2;
  }
  saveRecogState() {
    const e = this.errors, t = n(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: t,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, t, n2) {
    this.RULE_OCCURRENCE_STACK.push(n2), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), tt);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
};
var Xh = class {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = sr(e, "errorMessageProvider") ? e.errorMessageProvider : Qe.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (On(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: n(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return n(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, t, n2) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], a = si(e, s, t, this.maxLookahead)[0], o = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      o.push(this.LA(u));
    const l = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: a,
      actual: o,
      previous: this.LA(0),
      customUserDescription: n2,
      ruleName: i
    });
    throw this.SAVE_ERROR(new wh(l, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, t) {
    const n2 = this.getCurrRuleFullName(), i = this.getGAstProductions()[n2], s = ii(e, i, this.maxLookahead), a = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      a.push(this.LA(u));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: a,
      previous: o,
      customUserDescription: t,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new Ch(l, this.LA(1), o));
  }
};
var Qh = class {
  initContentAssist() {
  }
  computeContentAssist(e, t) {
    const n2 = this.gastProductionsCache[e];
    if (Oa(n2))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return hu([n2], t, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const t = Pe(e.ruleStack), n2 = this.getGAstProductions()[t];
    return new eh(n2, e).startWalking();
  }
};
var oi = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(oi);
var ja = true;
var Ha = Math.pow(2, it) - 1;
var Nu = du({ name: "RECORDING_PHASE_TOKEN", pattern: fe.NA });
Ur([Nu]);
var wu = Js(
  Nu,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(wu);
var Jh = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
var Zh = class {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = false;
  }
  enableRecording() {
    this.RECORDING_PHASE = true, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const t = e > 0 ? e : "";
        this[`CONSUME${t}`] = function(n2, i) {
          return this.consumeInternalRecord(n2, e, i);
        }, this[`SUBRULE${t}`] = function(n2, i) {
          return this.subruleInternalRecord(n2, e, i);
        }, this[`OPTION${t}`] = function(n2) {
          return this.optionInternalRecord(n2, e);
        }, this[`OR${t}`] = function(n2) {
          return this.orInternalRecord(n2, e);
        }, this[`MANY${t}`] = function(n2) {
          this.manyInternalRecord(e, n2);
        }, this[`MANY_SEP${t}`] = function(n2) {
          this.manySepFirstInternalRecord(e, n2);
        }, this[`AT_LEAST_ONE${t}`] = function(n2) {
          this.atLeastOneInternalRecord(e, n2);
        }, this[`AT_LEAST_ONE_SEP${t}`] = function(n2) {
          this.atLeastOneSepFirstInternalRecord(e, n2);
        };
      }
      this.consume = function(e, t, n2) {
        return this.consumeInternalRecord(t, e, n2);
      }, this.subrule = function(e, t, n2) {
        return this.subruleInternalRecord(t, e, n2);
      }, this.option = function(e, t) {
        return this.optionInternalRecord(t, e);
      }, this.or = function(e, t) {
        return this.orInternalRecord(t, e);
      }, this.many = function(e, t) {
        this.manyInternalRecord(e, t);
      }, this.atLeastOne = function(e, t) {
        this.atLeastOneInternalRecord(e, t);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = false, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let t = 0; t < 10; t++) {
        const n2 = t > 0 ? t : "";
        delete e[`CONSUME${n2}`], delete e[`SUBRULE${n2}`], delete e[`OPTION${n2}`], delete e[`OR${n2}`], delete e[`MANY${n2}`], delete e[`MANY_SEP${n2}`], delete e[`AT_LEAST_ONE${n2}`], delete e[`AT_LEAST_ONE_SEP${n2}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, t) {
    return () => true;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return Pn;
  }
  topLevelRuleRecord(e, t) {
    try {
      const n2 = new Bt({ definition: [], name: e });
      return n2.name = e, this.recordingProdStack.push(n2), t.call(this), this.recordingProdStack.pop(), n2;
    } catch (n2) {
      if (n2.KNOWN_RECORDER_ERROR !== true)
        try {
          n2.message = n2.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw n2;
        }
      throw n2;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, t) {
    return Ht.call(this, re, e, t);
  }
  atLeastOneInternalRecord(e, t) {
    Ht.call(this, xe, t, e);
  }
  atLeastOneSepFirstInternalRecord(e, t) {
    Ht.call(this, Ie, t, e, ja);
  }
  manyInternalRecord(e, t) {
    Ht.call(this, j, t, e);
  }
  manySepFirstInternalRecord(e, t) {
    Ht.call(this, me, t, e, ja);
  }
  orInternalRecord(e, t) {
    return ep.call(this, e, t);
  }
  subruleInternalRecord(e, t, n2) {
    if (_n(t), !e || sr(e, "ruleName") === false) {
      const o = new Error(`<SUBRULE${Wa(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = true, o;
    }
    const i = fr(this.recordingProdStack), s = e.ruleName, a = new ue({
      idx: t,
      nonTerminalName: s,
      label: n2 == null ? void 0 : n2.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(a), this.outputCst ? Jh : oi;
  }
  consumeInternalRecord(e, t, n2) {
    if (_n(t), !uu(e)) {
      const a = new Error(`<CONSUME${Wa(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a.KNOWN_RECORDER_ERROR = true, a;
    }
    const i = fr(this.recordingProdStack), s = new F({
      idx: t,
      terminalType: e,
      label: n2 == null ? void 0 : n2.LABEL
    });
    return i.definition.push(s), wu;
  }
};
function Ht(r, e, t, n2 = false) {
  _n(t);
  const i = fr(this.recordingProdStack), s = ig(e) ? e : e.DEF, a = new r({ definition: [], idx: t });
  return n2 && (a.separator = e.SEP), sr(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a), s.call(this), i.definition.push(a), this.recordingProdStack.pop(), oi;
}
function ep(r, e) {
  _n(e);
  const t = fr(this.recordingProdStack), n2 = zu(r) === false, i = n2 === false ? r : r.DEF, s = new ge({
    definition: [],
    idx: e,
    ignoreAmbiguities: n2 && r.IGNORE_AMBIGUITIES === true
  });
  sr(r, "MAX_LOOKAHEAD") && (s.maxLookahead = r.MAX_LOOKAHEAD);
  const a = Ll(i, (o) => ig(o.GATE));
  return s.hasPredicates = a, t.definition.push(s), _a(i, (o) => {
    const l = new pe({ definition: [] });
    s.definition.push(l), sr(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : sr(o, "GATE") && (l.ignoreAmbiguities = true), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), oi;
}
function Wa(r) {
  return r === 0 ? "" : `${r}`;
}
function _n(r) {
  if (r < 0 || r > Ha) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${r}>
	Idx value must be a none negative value smaller than ${Ha + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = true, e;
  }
}
var tp = class {
  initPerformanceTracer(e) {
    if (sr(e, "traceInitPerf")) {
      const t = e.traceInitPerf, n2 = typeof t == "number";
      this.traceInitMaxIdent = n2 ? t : 1 / 0, this.traceInitPerf = n2 ? t > 0 : t;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = Qe.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, t) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      const n2 = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n2}--> <${e}>`);
      const { time: i, value: s } = Zl(t), a = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a(`${n2}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return t();
  }
};
function rp(r, e) {
  e.forEach((t) => {
    const n2 = t.prototype;
    Object.getOwnPropertyNames(n2).forEach((i) => {
      if (i === "constructor")
        return;
      const s = Object.getOwnPropertyDescriptor(n2, i);
      s && (s.get || s.set) ? Object.defineProperty(r.prototype, i, s) : r.prototype[i] = t.prototype[i];
    });
  });
}
var Pn = Js(tt, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Pn);
var Qe = Object.freeze({
  recoveryEnabled: false,
  maxLookahead: 3,
  dynamicTokensEnabled: false,
  outputCst: true,
  errorMessageProvider: Nt,
  nodeLocationTracking: "none",
  traceInitPerf: false,
  skipValidations: false
});
var Mn = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: true
});
var ce;
(function(r) {
  r[r.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", r[r.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", r[r.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", r[r.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", r[r.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", r[r.LEFT_RECURSION = 5] = "LEFT_RECURSION", r[r.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", r[r.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", r[r.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", r[r.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", r[r.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", r[r.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", r[r.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", r[r.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ce || (ce = {}));
function za(r = void 0) {
  return function() {
    return r;
  };
}
var Gr = class _Gr {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = true;
      const t = this.className;
      this.TRACE_INIT("toFastProps", () => {
        eu(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), _a(this.definedRulesNames, (i) => {
            const s = this[i].originalGrammarAction;
            let a;
            this.TRACE_INIT(`${i} Rule`, () => {
              a = this.topLevelRuleRecord(i, s);
            }), this.gastProductionsCache[i] = a;
          });
        } finally {
          this.disableRecording();
        }
      });
      let n2 = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        n2 = Ih({
          rules: ma(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(n2);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (c5(n2) && this.skipValidations === false) {
          const i = Sh({
            rules: ma(this.gastProductionsCache),
            tokenTypes: ma(this.tokensMap),
            errMsgProvider: pt,
            grammarName: t
          }), s = dh({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: ma(this.gastProductionsCache),
            tokenTypes: ma(this.tokensMap),
            grammarName: t
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), c5(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = cf(ma(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: ma(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(ma(this.gastProductionsCache));
      })), !_Gr.DEFER_DEFINITION_ERRORS_HANDLING && !c5(this.definitionErrors))
        throw e = lr(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, t) {
    this.definitionErrors = [], this.selfAnalysisDone = false;
    const n2 = this;
    if (n2.initErrorHandler(t), n2.initLexerAdapter(), n2.initLooksAhead(t), n2.initRecognizerEngine(e, t), n2.initRecoverable(t), n2.initTreeBuilder(t), n2.initContentAssist(), n2.initGastRecorder(t), n2.initPerformanceTracer(t), sr(t, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = sr(t, "skipValidations") ? t.skipValidations : Qe.skipValidations;
  }
};
Gr.DEFER_DEFINITION_ERRORS_HANDLING = false;
rp(Gr, [
  bh,
  Ph,
  Wh,
  zh,
  qh,
  Yh,
  Xh,
  Qh,
  Zh,
  tp
]);
var np = class extends Gr {
  constructor(e, t = Qe) {
    const n2 = n(t);
    n2.outputCst = false, super(e, n2);
  }
};
function Pt(r, e, t) {
  return `${r.name}_${e}_${t}`;
}
var rt = 1;
var ip = 2;
var Lu = 4;
var bu = 5;
var Br = 7;
var sp = 8;
var ap = 9;
var op = 10;
var lp = 11;
var Ou = 12;
var ra = class {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return false;
  }
};
var na = class extends ra {
  constructor(e, t) {
    super(e), this.tokenType = t;
  }
};
var _u = class extends ra {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return true;
  }
};
var ia = class extends ra {
  constructor(e, t, n2) {
    super(e), this.rule = t, this.followState = n2;
  }
  isEpsilon() {
    return true;
  }
};
function up(r) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  cp(e, r);
  const t = r.length;
  for (let n2 = 0; n2 < t; n2++) {
    const i = r[n2], s = At(e, i, i);
    s !== void 0 && $p(e, i, s);
  }
  return e;
}
function cp(r, e) {
  const t = e.length;
  for (let n2 = 0; n2 < t; n2++) {
    const i = e[n2], s = X(r, i, void 0, {
      type: ip
    }), a = X(r, i, void 0, {
      type: Br
    });
    s.stop = a, r.ruleToStartState.set(i, s), r.ruleToStopState.set(i, a);
  }
}
function Pu(r, e, t) {
  return t instanceof F ? sa(r, e, t.terminalType, t) : t instanceof ue ? Rp(r, e, t) : t instanceof ge ? mp(r, e, t) : t instanceof re ? gp(r, e, t) : t instanceof j ? dp(r, e, t) : t instanceof me ? fp(r, e, t) : t instanceof xe ? hp(r, e, t) : t instanceof Ie ? pp(r, e, t) : At(r, e, t);
}
function dp(r, e, t) {
  const n2 = X(r, e, t, {
    type: bu
  });
  st(r, n2);
  const i = Vt(r, e, n2, t, At(r, e, t));
  return Du(r, e, t, i);
}
function fp(r, e, t) {
  const n2 = X(r, e, t, {
    type: bu
  });
  st(r, n2);
  const i = Vt(r, e, n2, t, At(r, e, t)), s = sa(r, e, t.separator, t);
  return Du(r, e, t, i, s);
}
function hp(r, e, t) {
  const n2 = X(r, e, t, {
    type: Lu
  });
  st(r, n2);
  const i = Vt(r, e, n2, t, At(r, e, t));
  return Mu(r, e, t, i);
}
function pp(r, e, t) {
  const n2 = X(r, e, t, {
    type: Lu
  });
  st(r, n2);
  const i = Vt(r, e, n2, t, At(r, e, t)), s = sa(r, e, t.separator, t);
  return Mu(r, e, t, i, s);
}
function mp(r, e, t) {
  const n2 = X(r, e, t, {
    type: rt
  });
  st(r, n2);
  const i = lr(t.definition, (s) => Pu(r, e, s));
  return Vt(r, e, n2, t, ...i);
}
function gp(r, e, t) {
  const n2 = X(r, e, t, {
    type: rt
  });
  st(r, n2);
  const i = Vt(r, e, n2, t, At(r, e, t));
  return yp(r, e, t, i);
}
function At(r, e, t) {
  const n2 = Aa(lr(t.definition, (i) => Pu(r, e, i)), (i) => i !== void 0);
  return n2.length === 1 ? n2[0] : n2.length === 0 ? void 0 : vp(r, n2);
}
function Mu(r, e, t, n2, i) {
  const s = n2.left, a = n2.right, o = X(r, e, t, {
    type: lp
  });
  st(r, o);
  const l = X(r, e, t, {
    type: Ou
  });
  return s.loopback = o, l.loopback = o, r.decisionMap[Pt(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = o, W(a, o), i === void 0 ? (W(o, s), W(o, l)) : (W(o, l), W(o, i.left), W(i.right, s)), {
    left: s,
    right: l
  };
}
function Du(r, e, t, n2, i) {
  const s = n2.left, a = n2.right, o = X(r, e, t, {
    type: op
  });
  st(r, o);
  const l = X(r, e, t, {
    type: Ou
  }), u = X(r, e, t, {
    type: ap
  });
  return o.loopback = u, l.loopback = u, W(o, s), W(o, l), W(a, u), i !== void 0 ? (W(u, l), W(u, i.left), W(i.right, s)) : W(u, o), r.decisionMap[Pt(e, i ? "RepetitionWithSeparator" : "Repetition", t.idx)] = o, {
    left: o,
    right: l
  };
}
function yp(r, e, t, n2) {
  const i = n2.left, s = n2.right;
  return W(i, s), r.decisionMap[Pt(e, "Option", t.idx)] = i, n2;
}
function st(r, e) {
  return r.decisionStates.push(e), e.decision = r.decisionStates.length - 1, e.decision;
}
function Vt(r, e, t, n2, ...i) {
  const s = X(r, e, n2, {
    type: sp,
    start: t
  });
  t.end = s;
  for (const o of i)
    o !== void 0 ? (W(t, o.left), W(o.right, s)) : W(t, s);
  const a = {
    left: t,
    right: s
  };
  return r.decisionMap[Pt(e, Tp(n2), n2.idx)] = t, a;
}
function Tp(r) {
  if (r instanceof ge)
    return "Alternation";
  if (r instanceof re)
    return "Option";
  if (r instanceof j)
    return "Repetition";
  if (r instanceof me)
    return "RepetitionWithSeparator";
  if (r instanceof xe)
    return "RepetitionMandatory";
  if (r instanceof Ie)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function vp(r, e) {
  const t = e.length;
  for (let s = 0; s < t - 1; s++) {
    const a = e[s];
    let o;
    a.left.transitions.length === 1 && (o = a.left.transitions[0]);
    const l = o instanceof ia, u = o, c = e[s + 1].left;
    a.left.type === rt && a.right.type === rt && o !== void 0 && (l && u.followState === a.right || o.target === a.right) ? (l ? u.followState = c : o.target = c, Ep(r, a.right)) : W(a.right, c);
  }
  const n2 = e[0], i = e[t - 1];
  return {
    left: n2.left,
    right: i.right
  };
}
function sa(r, e, t, n2) {
  const i = X(r, e, n2, {
    type: rt
  }), s = X(r, e, n2, {
    type: rt
  });
  return aa(i, new na(s, t)), {
    left: i,
    right: s
  };
}
function Rp(r, e, t) {
  const n2 = t.referencedRule, i = r.ruleToStartState.get(n2), s = X(r, e, t, {
    type: rt
  }), a = X(r, e, t, {
    type: rt
  }), o = new ia(i, n2, a);
  return aa(s, o), {
    left: s,
    right: a
  };
}
function $p(r, e, t) {
  const n2 = r.ruleToStartState.get(e);
  W(n2, t.left);
  const i = r.ruleToStopState.get(e);
  return W(t.right, i), {
    left: n2,
    right: i
  };
}
function W(r, e) {
  const t = new _u(e);
  aa(r, t);
}
function X(r, e, t, n2) {
  const i = Object.assign({
    atn: r,
    production: t,
    epsilonOnlyTransitions: false,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: r.states.length
  }, n2);
  return r.states.push(i), i;
}
function aa(r, e) {
  r.transitions.length === 0 && (r.epsilonOnlyTransitions = e.isEpsilon()), r.transitions.push(e);
}
function Ep(r, e) {
  r.states.splice(r.states.indexOf(e), 1);
}
var Dn = {};
var ys = class {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const t = Fu(e);
    t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return lr(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const t in this.map)
      e += t + ":";
    return e;
  }
};
function Fu(r, e = true) {
  return `${e ? `a${r.alt}` : ""}s${r.state.stateNumber}:${r.stack.map((t) => t.stateNumber.toString()).join("_")}`;
}
function Ap(r, e) {
  const t = {};
  return (n2) => {
    const i = n2.toString();
    let s = t[i];
    return s !== void 0 || (s = {
      atnStartState: r,
      decision: e,
      states: {}
    }, t[i] = s), s;
  };
}
var Uu = class {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, t) {
    this.predicates[e] = t;
  }
  toString() {
    let e = "";
    const t = this.predicates.length;
    for (let n2 = 0; n2 < t; n2++)
      e += this.predicates[n2] === true ? "1" : "0";
    return e;
  }
};
var Ya = new Uu();
var kp = class extends ta {
  constructor(e) {
    var t;
    super(), this.logging = (t = e == null ? void 0 : e.logging) !== null && t !== void 0 ? t : (n2) => console.log(n2);
  }
  initialize(e) {
    this.atn = up(e.rules), this.dfas = xp(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: t, rule: n2, hasPredicates: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Pt(n2, "Alternation", t), u = this.atn.decisionMap[l].decision, c = lr(Ga({
      maxLookahead: 1,
      occurrence: t,
      prodType: "Alternation",
      rule: n2
    }), (d) => lr(d, (f) => f[0]));
    if (qa(c, false) && !s) {
      const d = Sa(c, (f, h, m) => (_a(h, (g) => {
        g && (f[g.tokenTypeIdx] = m, _a(g.categoryMatches, (k) => {
          f[k] = m;
        }));
      }), f), {});
      return i ? function(f) {
        var h;
        const m = this.LA(1), g = d[m.tokenTypeIdx];
        if (f !== void 0 && g !== void 0) {
          const k = (h = f[g]) === null || h === void 0 ? void 0 : h.GATE;
          if (k !== void 0 && k.call(this) === false)
            return;
        }
        return g;
      } : function() {
        const f = this.LA(1);
        return d[f.tokenTypeIdx];
      };
    } else return i ? function(d) {
      const f = new Uu(), h = d === void 0 ? 0 : d.length;
      for (let g = 0; g < h; g++) {
        const k = d == null ? void 0 : d[g].GATE;
        f.set(g, k === void 0 || k.call(this));
      }
      const m = ki.call(this, a, u, f, o);
      return typeof m == "number" ? m : void 0;
    } : function() {
      const d = ki.call(this, a, u, Ya, o);
      return typeof d == "number" ? d : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: t, rule: n2, prodType: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Pt(n2, i, t), u = this.atn.decisionMap[l].decision, c = lr(Ga({
      maxLookahead: 1,
      occurrence: t,
      prodType: i,
      rule: n2
    }), (d) => lr(d, (f) => f[0]));
    if (qa(c) && c[0][0] && !s) {
      const d = c[0], f = er(d);
      if (f.length === 1 && c5(f[0].categoryMatches)) {
        const h = f[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === h;
        };
      } else {
        const h = Sa(f, (m, g) => (g !== void 0 && (m[g.tokenTypeIdx] = true, _a(g.categoryMatches, (k) => {
          m[k] = true;
        })), m), {});
        return function() {
          const m = this.LA(1);
          return h[m.tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      const d = ki.call(this, a, u, Ya, o);
      return typeof d == "object" ? false : d === 0;
    };
  }
};
function qa(r, e = true) {
  const t = /* @__PURE__ */ new Set();
  for (const n2 of r) {
    const i = /* @__PURE__ */ new Set();
    for (const s of n2) {
      if (s === void 0) {
        if (e)
          break;
        return false;
      }
      const a = [s.tokenTypeIdx].concat(s.categoryMatches);
      for (const o of a)
        if (t.has(o)) {
          if (!i.has(o))
            return false;
        } else
          t.add(o), i.add(o);
    }
  }
  return true;
}
function xp(r) {
  const e = r.decisionStates.length, t = Array(e);
  for (let n2 = 0; n2 < e; n2++)
    t[n2] = Ap(r.decisionStates[n2], n2);
  return t;
}
function ki(r, e, t, n2) {
  const i = r[e](t);
  let s = i.start;
  if (s === void 0) {
    const a = Mp(i.atnStartState);
    s = Bu(i, Gu(a)), i.start = s;
  }
  return Ip.apply(this, [i, s, t, n2]);
}
function Ip(r, e, t, n2) {
  let i = e, s = 1;
  const a = [];
  let o = this.LA(s++);
  for (; ; ) {
    let l = bp(i, o);
    if (l === void 0 && (l = Sp.apply(this, [r, i, o, s, t, n2])), l === Dn)
      return Lp(a, i, o);
    if (l.isAcceptState === true)
      return l.prediction;
    i = l, a.push(o), o = this.LA(s++);
  }
}
function Sp(r, e, t, n2, i, s) {
  const a = Op(e.configs, t, i);
  if (a.size === 0)
    return Xa(r, e, t, Dn), Dn;
  let o = Gu(a);
  const l = Pp(a, i);
  if (l !== void 0)
    o.isAcceptState = true, o.prediction = l, o.configs.uniqueAlt = l;
  else if (Gp(a)) {
    const u = cr(a.alts);
    o.isAcceptState = true, o.prediction = u, o.configs.uniqueAlt = u, Cp.apply(this, [r, n2, a.alts, s]);
  }
  return o = Xa(r, e, t, o), o;
}
function Cp(r, e, t, n2) {
  const i = [];
  for (let u = 1; u <= e; u++)
    i.push(this.LA(u).tokenType);
  const s = r.atnStartState, a = s.rule, o = s.production, l = Np({
    topLevelRule: a,
    ambiguityIndices: t,
    production: o,
    prefixPath: i
  });
  n2(l);
}
function Np(r) {
  const e = lr(r.prefixPath, (i) => Lt(i)).join(", "), t = r.production.idx === 0 ? "" : r.production.idx;
  let n2 = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(", ")}> in <${wp(r.production)}${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return n2 = n2 + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n2;
}
function wp(r) {
  if (r instanceof ue)
    return "SUBRULE";
  if (r instanceof re)
    return "OPTION";
  if (r instanceof ge)
    return "OR";
  if (r instanceof xe)
    return "AT_LEAST_ONE";
  if (r instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (r instanceof me)
    return "MANY_SEP";
  if (r instanceof j)
    return "MANY";
  if (r instanceof F)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function Lp(r, e, t) {
  const n2 = Ee(e.configs.elements, (s) => s.state.transitions), i = Jc(n2.filter((s) => s instanceof na).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: t,
    possibleTokenTypes: i,
    tokenPath: r
  };
}
function bp(r, e) {
  return r.edges[e.tokenTypeIdx];
}
function Op(r, e, t) {
  const n2 = new ys(), i = [];
  for (const a of r.elements) {
    if (t.is(a.alt) === false)
      continue;
    if (a.state.type === Br) {
      i.push(a);
      continue;
    }
    const o = a.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const u = a.state.transitions[l], c = _p(u, e);
      c !== void 0 && n2.add({
        state: c,
        alt: a.alt,
        stack: a.stack
      });
    }
  }
  let s;
  if (i.length === 0 && n2.size === 1 && (s = n2), s === void 0) {
    s = new ys();
    for (const a of n2.elements)
      Fn(a, s);
  }
  if (i.length > 0 && !Fp(s))
    for (const a of i)
      s.add(a);
  return s;
}
function _p(r, e) {
  if (r instanceof na && fu(e, r.tokenType))
    return r.target;
}
function Pp(r, e) {
  let t;
  for (const n2 of r.elements)
    if (e.is(n2.alt) === true) {
      if (t === void 0)
        t = n2.alt;
      else if (t !== n2.alt)
        return;
    }
  return t;
}
function Gu(r) {
  return {
    configs: r,
    edges: {},
    isAcceptState: false,
    prediction: -1
  };
}
function Xa(r, e, t, n2) {
  return n2 = Bu(r, n2), e.edges[t.tokenTypeIdx] = n2, n2;
}
function Bu(r, e) {
  if (e === Dn)
    return e;
  const t = e.configs.key, n2 = r.states[t];
  return n2 !== void 0 ? n2 : (e.configs.finalize(), r.states[t] = e, e);
}
function Mp(r) {
  const e = new ys(), t = r.transitions.length;
  for (let n2 = 0; n2 < t; n2++) {
    const i = {
      state: r.transitions[n2].target,
      alt: n2,
      stack: []
    };
    Fn(i, e);
  }
  return e;
}
function Fn(r, e) {
  const t = r.state;
  if (t.type === Br) {
    if (r.stack.length > 0) {
      const i = [...r.stack], s = {
        state: i.pop(),
        alt: r.alt,
        stack: i
      };
      Fn(s, e);
    } else
      e.add(r);
    return;
  }
  t.epsilonOnlyTransitions || e.add(r);
  const n2 = t.transitions.length;
  for (let i = 0; i < n2; i++) {
    const s = t.transitions[i], a = Dp(r, s);
    a !== void 0 && Fn(a, e);
  }
}
function Dp(r, e) {
  if (e instanceof _u)
    return {
      state: e.target,
      alt: r.alt,
      stack: r.stack
    };
  if (e instanceof ia) {
    const t = [...r.stack, e.followState];
    return {
      state: e.target,
      alt: r.alt,
      stack: t
    };
  }
}
function Fp(r) {
  for (const e of r.elements)
    if (e.state.type === Br)
      return true;
  return false;
}
function Up(r) {
  for (const e of r.elements)
    if (e.state.type !== Br)
      return false;
  return true;
}
function Gp(r) {
  if (Up(r))
    return true;
  const e = Bp(r.elements);
  return Kp(e) && !Vp(e);
}
function Bp(r) {
  const e = /* @__PURE__ */ new Map();
  for (const t of r) {
    const n2 = Fu(t, false);
    let i = e.get(n2);
    i === void 0 && (i = {}, e.set(n2, i)), i[t.alt] = true;
  }
  return e;
}
function Kp(r) {
  for (const e of Array.from(r.values()))
    if (Object.keys(e).length > 1)
      return true;
  return false;
}
function Vp(r) {
  for (const e of Array.from(r.values()))
    if (Object.keys(e).length === 1)
      return true;
  return false;
}
var Qa;
(function(r) {
  function e(t) {
    return typeof t == "string";
  }
  r.is = e;
})(Qa || (Qa = {}));
var Ts;
(function(r) {
  function e(t) {
    return typeof t == "string";
  }
  r.is = e;
})(Ts || (Ts = {}));
var Ja;
(function(r) {
  r.MIN_VALUE = -2147483648, r.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
  }
  r.is = e;
})(Ja || (Ja = {}));
var Un;
(function(r) {
  r.MIN_VALUE = 0, r.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
  }
  r.is = e;
})(Un || (Un = {}));
var P;
(function(r) {
  function e(n2, i) {
    return n2 === Number.MAX_VALUE && (n2 = Un.MAX_VALUE), i === Number.MAX_VALUE && (i = Un.MAX_VALUE), { line: n2, character: i };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.objectLiteral(i) && p.uinteger(i.line) && p.uinteger(i.character);
  }
  r.is = t;
})(P || (P = {}));
var _;
(function(r) {
  function e(n2, i, s, a) {
    if (p.uinteger(n2) && p.uinteger(i) && p.uinteger(s) && p.uinteger(a))
      return { start: P.create(n2, i), end: P.create(s, a) };
    if (P.is(n2) && P.is(i))
      return { start: n2, end: i };
    throw new Error(`Range#create called with invalid arguments[${n2}, ${i}, ${s}, ${a}]`);
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.objectLiteral(i) && P.is(i.start) && P.is(i.end);
  }
  r.is = t;
})(_ || (_ = {}));
var Gn;
(function(r) {
  function e(n2, i) {
    return { uri: n2, range: i };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.objectLiteral(i) && _.is(i.range) && (p.string(i.uri) || p.undefined(i.uri));
  }
  r.is = t;
})(Gn || (Gn = {}));
var Za;
(function(r) {
  function e(n2, i, s, a) {
    return { targetUri: n2, targetRange: i, targetSelectionRange: s, originSelectionRange: a };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.objectLiteral(i) && _.is(i.targetRange) && p.string(i.targetUri) && _.is(i.targetSelectionRange) && (_.is(i.originSelectionRange) || p.undefined(i.originSelectionRange));
  }
  r.is = t;
})(Za || (Za = {}));
var vs;
(function(r) {
  function e(n2, i, s, a) {
    return {
      red: n2,
      green: i,
      blue: s,
      alpha: a
    };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return p.objectLiteral(i) && p.numberRange(i.red, 0, 1) && p.numberRange(i.green, 0, 1) && p.numberRange(i.blue, 0, 1) && p.numberRange(i.alpha, 0, 1);
  }
  r.is = t;
})(vs || (vs = {}));
var eo;
(function(r) {
  function e(n2, i) {
    return {
      range: n2,
      color: i
    };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return p.objectLiteral(i) && _.is(i.range) && vs.is(i.color);
  }
  r.is = t;
})(eo || (eo = {}));
var to;
(function(r) {
  function e(n2, i, s) {
    return {
      label: n2,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return p.objectLiteral(i) && p.string(i.label) && (p.undefined(i.textEdit) || Dt.is(i)) && (p.undefined(i.additionalTextEdits) || p.typedArray(i.additionalTextEdits, Dt.is));
  }
  r.is = t;
})(to || (to = {}));
var ro;
(function(r) {
  r.Comment = "comment", r.Imports = "imports", r.Region = "region";
})(ro || (ro = {}));
var no;
(function(r) {
  function e(n2, i, s, a, o, l) {
    const u = {
      startLine: n2,
      endLine: i
    };
    return p.defined(s) && (u.startCharacter = s), p.defined(a) && (u.endCharacter = a), p.defined(o) && (u.kind = o), p.defined(l) && (u.collapsedText = l), u;
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return p.objectLiteral(i) && p.uinteger(i.startLine) && p.uinteger(i.startLine) && (p.undefined(i.startCharacter) || p.uinteger(i.startCharacter)) && (p.undefined(i.endCharacter) || p.uinteger(i.endCharacter)) && (p.undefined(i.kind) || p.string(i.kind));
  }
  r.is = t;
})(no || (no = {}));
var Rs;
(function(r) {
  function e(n2, i) {
    return {
      location: n2,
      message: i
    };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && Gn.is(i.location) && p.string(i.message);
  }
  r.is = t;
})(Rs || (Rs = {}));
var io;
(function(r) {
  r.Error = 1, r.Warning = 2, r.Information = 3, r.Hint = 4;
})(io || (io = {}));
var so;
(function(r) {
  r.Unnecessary = 1, r.Deprecated = 2;
})(so || (so = {}));
var ao;
(function(r) {
  function e(t) {
    const n2 = t;
    return p.objectLiteral(n2) && p.string(n2.href);
  }
  r.is = e;
})(ao || (ao = {}));
var Bn;
(function(r) {
  function e(n2, i, s, a, o, l) {
    let u = { range: n2, message: i };
    return p.defined(s) && (u.severity = s), p.defined(a) && (u.code = a), p.defined(o) && (u.source = o), p.defined(l) && (u.relatedInformation = l), u;
  }
  r.create = e;
  function t(n2) {
    var i;
    let s = n2;
    return p.defined(s) && _.is(s.range) && p.string(s.message) && (p.number(s.severity) || p.undefined(s.severity)) && (p.integer(s.code) || p.string(s.code) || p.undefined(s.code)) && (p.undefined(s.codeDescription) || p.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (p.string(s.source) || p.undefined(s.source)) && (p.undefined(s.relatedInformation) || p.typedArray(s.relatedInformation, Rs.is));
  }
  r.is = t;
})(Bn || (Bn = {}));
var Mt;
(function(r) {
  function e(n2, i, ...s) {
    let a = { title: n2, command: i };
    return p.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && p.string(i.title) && p.string(i.command);
  }
  r.is = t;
})(Mt || (Mt = {}));
var Dt;
(function(r) {
  function e(s, a) {
    return { range: s, newText: a };
  }
  r.replace = e;
  function t(s, a) {
    return { range: { start: s, end: s }, newText: a };
  }
  r.insert = t;
  function n2(s) {
    return { range: s, newText: "" };
  }
  r.del = n2;
  function i(s) {
    const a = s;
    return p.objectLiteral(a) && p.string(a.newText) && _.is(a.range);
  }
  r.is = i;
})(Dt || (Dt = {}));
var $s;
(function(r) {
  function e(n2, i, s) {
    const a = { label: n2 };
    return i !== void 0 && (a.needsConfirmation = i), s !== void 0 && (a.description = s), a;
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return p.objectLiteral(i) && p.string(i.label) && (p.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (p.string(i.description) || i.description === void 0);
  }
  r.is = t;
})($s || ($s = {}));
var Ft;
(function(r) {
  function e(t) {
    const n2 = t;
    return p.string(n2);
  }
  r.is = e;
})(Ft || (Ft = {}));
var oo;
(function(r) {
  function e(s, a, o) {
    return { range: s, newText: a, annotationId: o };
  }
  r.replace = e;
  function t(s, a, o) {
    return { range: { start: s, end: s }, newText: a, annotationId: o };
  }
  r.insert = t;
  function n2(s, a) {
    return { range: s, newText: "", annotationId: a };
  }
  r.del = n2;
  function i(s) {
    const a = s;
    return Dt.is(a) && ($s.is(a.annotationId) || Ft.is(a.annotationId));
  }
  r.is = i;
})(oo || (oo = {}));
var Es;
(function(r) {
  function e(n2, i) {
    return { textDocument: n2, edits: i };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && Ss.is(i.textDocument) && Array.isArray(i.edits);
  }
  r.is = t;
})(Es || (Es = {}));
var As;
(function(r) {
  function e(n2, i, s) {
    let a = {
      kind: "create",
      uri: n2
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return i && i.kind === "create" && p.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ft.is(i.annotationId));
  }
  r.is = t;
})(As || (As = {}));
var ks;
(function(r) {
  function e(n2, i, s, a) {
    let o = {
      kind: "rename",
      oldUri: n2,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s), a !== void 0 && (o.annotationId = a), o;
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return i && i.kind === "rename" && p.string(i.oldUri) && p.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ft.is(i.annotationId));
  }
  r.is = t;
})(ks || (ks = {}));
var xs;
(function(r) {
  function e(n2, i, s) {
    let a = {
      kind: "delete",
      uri: n2
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return i && i.kind === "delete" && p.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || p.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || p.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Ft.is(i.annotationId));
  }
  r.is = t;
})(xs || (xs = {}));
var Is;
(function(r) {
  function e(t) {
    let n2 = t;
    return n2 && (n2.changes !== void 0 || n2.documentChanges !== void 0) && (n2.documentChanges === void 0 || n2.documentChanges.every((i) => p.string(i.kind) ? As.is(i) || ks.is(i) || xs.is(i) : Es.is(i)));
  }
  r.is = e;
})(Is || (Is = {}));
var lo;
(function(r) {
  function e(n2) {
    return { uri: n2 };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && p.string(i.uri);
  }
  r.is = t;
})(lo || (lo = {}));
var uo;
(function(r) {
  function e(n2, i) {
    return { uri: n2, version: i };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && p.string(i.uri) && p.integer(i.version);
  }
  r.is = t;
})(uo || (uo = {}));
var Ss;
(function(r) {
  function e(n2, i) {
    return { uri: n2, version: i };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && p.string(i.uri) && (i.version === null || p.integer(i.version));
  }
  r.is = t;
})(Ss || (Ss = {}));
var co2;
(function(r) {
  function e(n2, i, s, a) {
    return { uri: n2, languageId: i, version: s, text: a };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && p.string(i.uri) && p.string(i.languageId) && p.integer(i.version) && p.string(i.text);
  }
  r.is = t;
})(co2 || (co2 = {}));
var Cs;
(function(r) {
  r.PlainText = "plaintext", r.Markdown = "markdown";
  function e(t) {
    const n2 = t;
    return n2 === r.PlainText || n2 === r.Markdown;
  }
  r.is = e;
})(Cs || (Cs = {}));
var br2;
(function(r) {
  function e(t) {
    const n2 = t;
    return p.objectLiteral(t) && Cs.is(n2.kind) && p.string(n2.value);
  }
  r.is = e;
})(br2 || (br2 = {}));
var fo;
(function(r) {
  r.Text = 1, r.Method = 2, r.Function = 3, r.Constructor = 4, r.Field = 5, r.Variable = 6, r.Class = 7, r.Interface = 8, r.Module = 9, r.Property = 10, r.Unit = 11, r.Value = 12, r.Enum = 13, r.Keyword = 14, r.Snippet = 15, r.Color = 16, r.File = 17, r.Reference = 18, r.Folder = 19, r.EnumMember = 20, r.Constant = 21, r.Struct = 22, r.Event = 23, r.Operator = 24, r.TypeParameter = 25;
})(fo || (fo = {}));
var ho;
(function(r) {
  r.PlainText = 1, r.Snippet = 2;
})(ho || (ho = {}));
var po;
(function(r) {
  r.Deprecated = 1;
})(po || (po = {}));
var mo;
(function(r) {
  function e(n2, i, s) {
    return { newText: n2, insert: i, replace: s };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return i && p.string(i.newText) && _.is(i.insert) && _.is(i.replace);
  }
  r.is = t;
})(mo || (mo = {}));
var go;
(function(r) {
  r.asIs = 1, r.adjustIndentation = 2;
})(go || (go = {}));
var yo;
(function(r) {
  function e(t) {
    const n2 = t;
    return n2 && (p.string(n2.detail) || n2.detail === void 0) && (p.string(n2.description) || n2.description === void 0);
  }
  r.is = e;
})(yo || (yo = {}));
var To;
(function(r) {
  function e(t) {
    return { label: t };
  }
  r.create = e;
})(To || (To = {}));
var vo;
(function(r) {
  function e(t, n2) {
    return { items: t || [], isIncomplete: !!n2 };
  }
  r.create = e;
})(vo || (vo = {}));
var Kn;
(function(r) {
  function e(n2) {
    return n2.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  r.fromPlainText = e;
  function t(n2) {
    const i = n2;
    return p.string(i) || p.objectLiteral(i) && p.string(i.language) && p.string(i.value);
  }
  r.is = t;
})(Kn || (Kn = {}));
var Ro;
(function(r) {
  function e(t) {
    let n2 = t;
    return !!n2 && p.objectLiteral(n2) && (br2.is(n2.contents) || Kn.is(n2.contents) || p.typedArray(n2.contents, Kn.is)) && (t.range === void 0 || _.is(t.range));
  }
  r.is = e;
})(Ro || (Ro = {}));
var $o;
(function(r) {
  function e(t, n2) {
    return n2 ? { label: t, documentation: n2 } : { label: t };
  }
  r.create = e;
})($o || ($o = {}));
var Eo;
(function(r) {
  function e(t, n2, ...i) {
    let s = { label: t };
    return p.defined(n2) && (s.documentation = n2), p.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  r.create = e;
})(Eo || (Eo = {}));
var Ao;
(function(r) {
  r.Text = 1, r.Read = 2, r.Write = 3;
})(Ao || (Ao = {}));
var ko;
(function(r) {
  function e(t, n2) {
    let i = { range: t };
    return p.number(n2) && (i.kind = n2), i;
  }
  r.create = e;
})(ko || (ko = {}));
var xo;
(function(r) {
  r.File = 1, r.Module = 2, r.Namespace = 3, r.Package = 4, r.Class = 5, r.Method = 6, r.Property = 7, r.Field = 8, r.Constructor = 9, r.Enum = 10, r.Interface = 11, r.Function = 12, r.Variable = 13, r.Constant = 14, r.String = 15, r.Number = 16, r.Boolean = 17, r.Array = 18, r.Object = 19, r.Key = 20, r.Null = 21, r.EnumMember = 22, r.Struct = 23, r.Event = 24, r.Operator = 25, r.TypeParameter = 26;
})(xo || (xo = {}));
var Io;
(function(r) {
  r.Deprecated = 1;
})(Io || (Io = {}));
var So;
(function(r) {
  function e(t, n2, i, s, a) {
    let o = {
      name: t,
      kind: n2,
      location: { uri: s, range: i }
    };
    return a && (o.containerName = a), o;
  }
  r.create = e;
})(So || (So = {}));
var Co;
(function(r) {
  function e(t, n2, i, s) {
    return s !== void 0 ? { name: t, kind: n2, location: { uri: i, range: s } } : { name: t, kind: n2, location: { uri: i } };
  }
  r.create = e;
})(Co || (Co = {}));
var No;
(function(r) {
  function e(n2, i, s, a, o, l) {
    let u = {
      name: n2,
      detail: i,
      kind: s,
      range: a,
      selectionRange: o
    };
    return l !== void 0 && (u.children = l), u;
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return i && p.string(i.name) && p.number(i.kind) && _.is(i.range) && _.is(i.selectionRange) && (i.detail === void 0 || p.string(i.detail)) && (i.deprecated === void 0 || p.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  r.is = t;
})(No || (No = {}));
var wo;
(function(r) {
  r.Empty = "", r.QuickFix = "quickfix", r.Refactor = "refactor", r.RefactorExtract = "refactor.extract", r.RefactorInline = "refactor.inline", r.RefactorRewrite = "refactor.rewrite", r.Source = "source", r.SourceOrganizeImports = "source.organizeImports", r.SourceFixAll = "source.fixAll";
})(wo || (wo = {}));
var Vn;
(function(r) {
  r.Invoked = 1, r.Automatic = 2;
})(Vn || (Vn = {}));
var Lo;
(function(r) {
  function e(n2, i, s) {
    let a = { diagnostics: n2 };
    return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && p.typedArray(i.diagnostics, Bn.is) && (i.only === void 0 || p.typedArray(i.only, p.string)) && (i.triggerKind === void 0 || i.triggerKind === Vn.Invoked || i.triggerKind === Vn.Automatic);
  }
  r.is = t;
})(Lo || (Lo = {}));
var bo;
(function(r) {
  function e(n2, i, s) {
    let a = { title: n2 }, o = true;
    return typeof i == "string" ? (o = false, a.kind = i) : Mt.is(i) ? a.command = i : a.edit = i, o && s !== void 0 && (a.kind = s), a;
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return i && p.string(i.title) && (i.diagnostics === void 0 || p.typedArray(i.diagnostics, Bn.is)) && (i.kind === void 0 || p.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Mt.is(i.command)) && (i.isPreferred === void 0 || p.boolean(i.isPreferred)) && (i.edit === void 0 || Is.is(i.edit));
  }
  r.is = t;
})(bo || (bo = {}));
var Oo;
(function(r) {
  function e(n2, i) {
    let s = { range: n2 };
    return p.defined(i) && (s.data = i), s;
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && _.is(i.range) && (p.undefined(i.command) || Mt.is(i.command));
  }
  r.is = t;
})(Oo || (Oo = {}));
var _o;
(function(r) {
  function e(n2, i) {
    return { tabSize: n2, insertSpaces: i };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && p.uinteger(i.tabSize) && p.boolean(i.insertSpaces);
  }
  r.is = t;
})(_o || (_o = {}));
var Po;
(function(r) {
  function e(n2, i, s) {
    return { range: n2, target: i, data: s };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.defined(i) && _.is(i.range) && (p.undefined(i.target) || p.string(i.target));
  }
  r.is = t;
})(Po || (Po = {}));
var Mo;
(function(r) {
  function e(n2, i) {
    return { range: n2, parent: i };
  }
  r.create = e;
  function t(n2) {
    let i = n2;
    return p.objectLiteral(i) && _.is(i.range) && (i.parent === void 0 || r.is(i.parent));
  }
  r.is = t;
})(Mo || (Mo = {}));
var Do;
(function(r) {
  r.namespace = "namespace", r.type = "type", r.class = "class", r.enum = "enum", r.interface = "interface", r.struct = "struct", r.typeParameter = "typeParameter", r.parameter = "parameter", r.variable = "variable", r.property = "property", r.enumMember = "enumMember", r.event = "event", r.function = "function", r.method = "method", r.macro = "macro", r.keyword = "keyword", r.modifier = "modifier", r.comment = "comment", r.string = "string", r.number = "number", r.regexp = "regexp", r.operator = "operator", r.decorator = "decorator";
})(Do || (Do = {}));
var Fo;
(function(r) {
  r.declaration = "declaration", r.definition = "definition", r.readonly = "readonly", r.static = "static", r.deprecated = "deprecated", r.abstract = "abstract", r.async = "async", r.modification = "modification", r.documentation = "documentation", r.defaultLibrary = "defaultLibrary";
})(Fo || (Fo = {}));
var Uo;
(function(r) {
  function e(t) {
    const n2 = t;
    return p.objectLiteral(n2) && (n2.resultId === void 0 || typeof n2.resultId == "string") && Array.isArray(n2.data) && (n2.data.length === 0 || typeof n2.data[0] == "number");
  }
  r.is = e;
})(Uo || (Uo = {}));
var Go;
(function(r) {
  function e(n2, i) {
    return { range: n2, text: i };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return i != null && _.is(i.range) && p.string(i.text);
  }
  r.is = t;
})(Go || (Go = {}));
var Bo;
(function(r) {
  function e(n2, i, s) {
    return { range: n2, variableName: i, caseSensitiveLookup: s };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return i != null && _.is(i.range) && p.boolean(i.caseSensitiveLookup) && (p.string(i.variableName) || i.variableName === void 0);
  }
  r.is = t;
})(Bo || (Bo = {}));
var Ko;
(function(r) {
  function e(n2, i) {
    return { range: n2, expression: i };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return i != null && _.is(i.range) && (p.string(i.expression) || i.expression === void 0);
  }
  r.is = t;
})(Ko || (Ko = {}));
var Vo;
(function(r) {
  function e(n2, i) {
    return { frameId: n2, stoppedLocation: i };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return p.defined(i) && _.is(n2.stoppedLocation);
  }
  r.is = t;
})(Vo || (Vo = {}));
var Ns;
(function(r) {
  r.Type = 1, r.Parameter = 2;
  function e(t) {
    return t === 1 || t === 2;
  }
  r.is = e;
})(Ns || (Ns = {}));
var ws;
(function(r) {
  function e(n2) {
    return { value: n2 };
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return p.objectLiteral(i) && (i.tooltip === void 0 || p.string(i.tooltip) || br2.is(i.tooltip)) && (i.location === void 0 || Gn.is(i.location)) && (i.command === void 0 || Mt.is(i.command));
  }
  r.is = t;
})(ws || (ws = {}));
var jo;
(function(r) {
  function e(n2, i, s) {
    const a = { position: n2, label: i };
    return s !== void 0 && (a.kind = s), a;
  }
  r.create = e;
  function t(n2) {
    const i = n2;
    return p.objectLiteral(i) && P.is(i.position) && (p.string(i.label) || p.typedArray(i.label, ws.is)) && (i.kind === void 0 || Ns.is(i.kind)) && i.textEdits === void 0 || p.typedArray(i.textEdits, Dt.is) && (i.tooltip === void 0 || p.string(i.tooltip) || br2.is(i.tooltip)) && (i.paddingLeft === void 0 || p.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || p.boolean(i.paddingRight));
  }
  r.is = t;
})(jo || (jo = {}));
var Ho;
(function(r) {
  function e(t) {
    return { kind: "snippet", value: t };
  }
  r.createSnippet = e;
})(Ho || (Ho = {}));
var Wo;
(function(r) {
  function e(t, n2, i, s) {
    return { insertText: t, filterText: n2, range: i, command: s };
  }
  r.create = e;
})(Wo || (Wo = {}));
var zo;
(function(r) {
  function e(t) {
    return { items: t };
  }
  r.create = e;
})(zo || (zo = {}));
var Yo;
(function(r) {
  r.Invoked = 0, r.Automatic = 1;
})(Yo || (Yo = {}));
var qo;
(function(r) {
  function e(t, n2) {
    return { range: t, text: n2 };
  }
  r.create = e;
})(qo || (qo = {}));
var Xo;
(function(r) {
  function e(t, n2) {
    return { triggerKind: t, selectedCompletionInfo: n2 };
  }
  r.create = e;
})(Xo || (Xo = {}));
var Qo;
(function(r) {
  function e(t) {
    const n2 = t;
    return p.objectLiteral(n2) && Ts.is(n2.uri) && p.string(n2.name);
  }
  r.is = e;
})(Qo || (Qo = {}));
var Jo;
(function(r) {
  function e(s, a, o, l) {
    return new jp(s, a, o, l);
  }
  r.create = e;
  function t(s) {
    let a = s;
    return !!(p.defined(a) && p.string(a.uri) && (p.undefined(a.languageId) || p.string(a.languageId)) && p.uinteger(a.lineCount) && p.func(a.getText) && p.func(a.positionAt) && p.func(a.offsetAt));
  }
  r.is = t;
  function n2(s, a) {
    let o = s.getText(), l = i(a, (c, d) => {
      let f = c.range.start.line - d.range.start.line;
      return f === 0 ? c.range.start.character - d.range.start.character : f;
    }), u = o.length;
    for (let c = l.length - 1; c >= 0; c--) {
      let d = l[c], f = s.offsetAt(d.range.start), h = s.offsetAt(d.range.end);
      if (h <= u)
        o = o.substring(0, f) + d.newText + o.substring(h, o.length);
      else
        throw new Error("Overlapping edit");
      u = f;
    }
    return o;
  }
  r.applyEdits = n2;
  function i(s, a) {
    if (s.length <= 1)
      return s;
    const o = s.length / 2 | 0, l = s.slice(0, o), u = s.slice(o);
    i(l, a), i(u, a);
    let c = 0, d = 0, f = 0;
    for (; c < l.length && d < u.length; )
      a(l[c], u[d]) <= 0 ? s[f++] = l[c++] : s[f++] = u[d++];
    for (; c < l.length; )
      s[f++] = l[c++];
    for (; d < u.length; )
      s[f++] = u[d++];
    return s;
  }
})(Jo || (Jo = {}));
var jp = class {
  constructor(r, e, t, n2) {
    this._uri = r, this._languageId = e, this._version = t, this._content = n2, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(r) {
    if (r) {
      let e = this.offsetAt(r.start), t = this.offsetAt(r.end);
      return this._content.substring(e, t);
    }
    return this._content;
  }
  update(r, e) {
    this._content = r.text, this._version = e, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let r = [], e = this._content, t = true;
      for (let n2 = 0; n2 < e.length; n2++) {
        t && (r.push(n2), t = false);
        let i = e.charAt(n2);
        t = i === "\r" || i === `
`, i === "\r" && n2 + 1 < e.length && e.charAt(n2 + 1) === `
` && n2++;
      }
      t && e.length > 0 && r.push(e.length), this._lineOffsets = r;
    }
    return this._lineOffsets;
  }
  positionAt(r) {
    r = Math.max(Math.min(r, this._content.length), 0);
    let e = this.getLineOffsets(), t = 0, n2 = e.length;
    if (n2 === 0)
      return P.create(0, r);
    for (; t < n2; ) {
      let s = Math.floor((t + n2) / 2);
      e[s] > r ? n2 = s : t = s + 1;
    }
    let i = t - 1;
    return P.create(i, r - e[i]);
  }
  offsetAt(r) {
    let e = this.getLineOffsets();
    if (r.line >= e.length)
      return this._content.length;
    if (r.line < 0)
      return 0;
    let t = e[r.line], n2 = r.line + 1 < e.length ? e[r.line + 1] : this._content.length;
    return Math.max(Math.min(t + r.character, n2), t);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var p;
(function(r) {
  const e = Object.prototype.toString;
  function t(h) {
    return typeof h < "u";
  }
  r.defined = t;
  function n2(h) {
    return typeof h > "u";
  }
  r.undefined = n2;
  function i(h) {
    return h === true || h === false;
  }
  r.boolean = i;
  function s(h) {
    return e.call(h) === "[object String]";
  }
  r.string = s;
  function a(h) {
    return e.call(h) === "[object Number]";
  }
  r.number = a;
  function o(h, m, g) {
    return e.call(h) === "[object Number]" && m <= h && h <= g;
  }
  r.numberRange = o;
  function l(h) {
    return e.call(h) === "[object Number]" && -2147483648 <= h && h <= 2147483647;
  }
  r.integer = l;
  function u(h) {
    return e.call(h) === "[object Number]" && 0 <= h && h <= 2147483647;
  }
  r.uinteger = u;
  function c(h) {
    return e.call(h) === "[object Function]";
  }
  r.func = c;
  function d(h) {
    return h !== null && typeof h == "object";
  }
  r.objectLiteral = d;
  function f(h, m) {
    return Array.isArray(h) && h.every(m);
  }
  r.typedArray = f;
})(p || (p = {}));
var Hp = class {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Vu(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const t = new oa();
    return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
  }
  buildLeafNode(e, t) {
    const n2 = new Ls(e.startOffset, e.image.length, is(e), e.tokenType, !t);
    return n2.grammarSource = t, n2.root = this.rootNode, this.current.content.push(n2), n2;
  }
  removeNode(e) {
    const t = e.container;
    if (t) {
      const n2 = t.content.indexOf(e);
      n2 >= 0 && t.content.splice(n2, 1);
    }
  }
  addHiddenNodes(e) {
    const t = [];
    for (const s of e) {
      const a = new Ls(s.startOffset, s.image.length, is(s), s.tokenType, true);
      a.root = this.rootNode, t.push(a);
    }
    let n2 = this.current, i = false;
    if (n2.content.length > 0) {
      n2.content.push(...t);
      return;
    }
    for (; n2.container; ) {
      const s = n2.container.content.indexOf(n2);
      if (s > 0) {
        n2.container.content.splice(s, 0, ...t), i = true;
        break;
      }
      n2 = n2.container;
    }
    i || this.rootNode.content.unshift(...t);
  }
  construct(e) {
    const t = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = t;
    const n2 = this.nodeStack.pop();
    (n2 == null ? void 0 : n2.content.length) === 0 && this.removeNode(n2);
  }
};
var Ku = class {
  /** @deprecated use `container` instead. */
  get parent() {
    return this.container;
  }
  /** @deprecated use `grammarSource` instead. */
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return false;
  }
  get astNode() {
    var e, t;
    const n2 = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (t = this.container) === null || t === void 0 ? void 0 : t.astNode;
    if (!n2)
      throw new Error("This node has no associated AST element");
    return n2;
  }
  set astNode(e) {
    this._astNode = e;
  }
  /** @deprecated use `astNode` instead. */
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
};
var Ls = class extends Ku {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, t, n2, i, s = false) {
    super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = t, this._range = n2;
  }
};
var oa = class extends Ku {
  constructor() {
    super(...arguments), this.content = new la(this);
  }
  /** @deprecated use `content` instead. */
  get children() {
    return this.content;
  }
  get offset() {
    var e, t;
    return (t = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && t !== void 0 ? t : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e, t;
    return (t = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && t !== void 0 ? t : 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
    if (e && t) {
      if (this._rangeCache === void 0) {
        const { range: n2 } = e, { range: i } = t;
        this._rangeCache = { start: n2.start, end: i.end.line < n2.start.line ? n2.start : i.end };
      }
      return this._rangeCache;
    } else
      return { start: P.create(0, 0), end: P.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const t = this.content[e];
      if (!t.hidden)
        return t;
    }
    return this.content[this.content.length - 1];
  }
};
var la = class _la extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, _la.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, t, ...n2) {
    return this.addParents(n2), super.splice(e, t, ...n2);
  }
  addParents(e) {
    for (const t of e)
      t.container = this.parent;
  }
};
var Vu = class extends oa {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
};
var bs = Symbol("Datatype");
function xi(r) {
  return r.$type === bs;
}
var Zo = "​";
var ju = (r) => r.endsWith(Zo) ? r : r + Zo;
var Hu = class {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const t = this.lexer.definition, n2 = e.LanguageMetaData.mode === "production";
    this.wrapper = new Xp(t, Object.assign(Object.assign({}, e.parser.ParserConfig), { skipValidations: n2, errorMessageProvider: e.parser.ParserErrorMessageProvider }));
  }
  alternatives(e, t) {
    this.wrapper.wrapOr(e, t);
  }
  optional(e, t) {
    this.wrapper.wrapOption(e, t);
  }
  many(e, t) {
    this.wrapper.wrapMany(e, t);
  }
  atLeastOne(e, t) {
    this.wrapper.wrapAtLeastOne(e, t);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
};
var Wp = class extends Hu {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new Hp(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, t) {
    const n2 = this.computeRuleType(e), i = this.wrapper.DEFINE_RULE(ju(e.name), this.startImplementation(n2, t).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment)
      return Xl(e) ? bs : zs(e) ?? e.name;
  }
  parse(e, t = {}) {
    this.nodeBuilder.buildRootNode(e);
    const n2 = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = n2.tokens;
    const i = t.rule ? this.allRules.get(t.rule) : this.mainRule;
    if (!i)
      throw new Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
    const s = i.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(n2.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
      value: s,
      lexerErrors: n2.errors,
      lexerReport: n2.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, t) {
    return (n2) => {
      const i = !this.isRecording() && e !== void 0;
      if (i) {
        const a = { $type: e };
        this.stack.push(a), e === bs && (a.value = "");
      }
      let s;
      try {
        s = t(n2);
      } catch {
        s = void 0;
      }
      return s === void 0 && i && (s = this.construct()), s;
    };
  }
  extractHiddenTokens(e) {
    const t = this.lexerResult.hidden;
    if (!t.length)
      return [];
    const n2 = e.startOffset;
    for (let i = 0; i < t.length; i++)
      if (t[i].startOffset > n2)
        return t.splice(0, i);
    return t.splice(0, t.length);
  }
  consume(e, t, n2) {
    const i = this.wrapper.wrapConsume(e, t);
    if (!this.isRecording() && this.isValidToken(i)) {
      const s = this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(s);
      const a = this.nodeBuilder.buildLeafNode(i, n2), { assignment: o, isCrossRef: l } = this.getAssignment(n2), u = this.current;
      if (o) {
        const c = gt(n2) ? i.image : this.converter.convert(i.image, a);
        this.assign(o.operator, o.feature, c, a, l);
      } else if (xi(u)) {
        let c = i.image;
        gt(n2) || (c = this.converter.convert(c, a).toString()), u.value += c;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, t, n2, i, s) {
    let a;
    !this.isRecording() && !n2 && (a = this.nodeBuilder.buildCompositeNode(i));
    const o = this.wrapper.wrapSubrule(e, t, s);
    !this.isRecording() && a && a.length > 0 && this.performSubruleAssignment(o, i, a);
  }
  performSubruleAssignment(e, t, n2) {
    const { assignment: i, isCrossRef: s } = this.getAssignment(t);
    if (i)
      this.assign(i.operator, i.feature, e, n2, s);
    else if (!i) {
      const a = this.current;
      if (xi(a))
        a.value += e.toString();
      else if (typeof e == "object" && e) {
        const o = this.assignWithoutOverride(e, a);
        this.stack.pop(), this.stack.push(o);
      }
    }
  }
  action(e, t) {
    if (!this.isRecording()) {
      let n2 = this.current;
      if (t.feature && t.operator) {
        n2 = this.construct(), this.nodeBuilder.removeNode(n2.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(n2.$cstNode);
        const i = { $type: e };
        this.stack.push(i), this.assign(t.operator, t.feature, n2, n2.$cstNode, false);
      } else
        n2.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.current;
    return xd(e), this.nodeBuilder.construct(e), this.stack.pop(), xi(e) ? this.converter.convert(e.value, e.$cstNode) : (Id(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const t = Jn(e, mt);
      this.assignmentMap.set(e, {
        assignment: t,
        isCrossRef: t ? Vs(t.terminal) : false
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, t, n2, i, s) {
    const a = this.current;
    let o;
    switch (s && typeof n2 == "string" ? o = this.linker.buildReference(a, t, i, n2) : o = n2, e) {
      case "=": {
        a[t] = o;
        break;
      }
      case "?=": {
        a[t] = true;
        break;
      }
      case "+=":
        Array.isArray(a[t]) || (a[t] = []), a[t].push(o);
    }
  }
  assignWithoutOverride(e, t) {
    for (const [i, s] of Object.entries(t)) {
      const a = e[i];
      a === void 0 ? e[i] = s : Array.isArray(a) && Array.isArray(s) && (s.push(...a), e[i] = s);
    }
    const n2 = e.$cstNode;
    return n2 && (n2.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
};
var zp = class {
  buildMismatchTokenMessage(e) {
    return Nt.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return Nt.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return Nt.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return Nt.buildEarlyExitMessage(e);
  }
};
var Wu = class extends zp {
  buildMismatchTokenMessage({ expected: e, actual: t }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
};
var Yp = class extends Hu {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const t = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = t.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, t) {
    const n2 = this.wrapper.DEFINE_RULE(ju(e.name), this.startImplementation(t).bind(this));
    return this.allRules.set(e.name, n2), e.entry && (this.mainRule = n2), n2;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (t) => {
      const n2 = this.keepStackSize();
      try {
        e(t);
      } finally {
        this.resetStackSize(n2);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, t, n2) {
    this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [...this.elementStack, n2], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, t, n2, i, s) {
    this.before(i), this.wrapper.wrapSubrule(e, t, s), this.after(i);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const t = this.elementStack.lastIndexOf(e);
      t >= 0 && this.elementStack.splice(t);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
};
var qp = {
  recoveryEnabled: true,
  nodeLocationTracking: "full",
  skipValidations: true,
  errorMessageProvider: new Wu()
};
var Xp = class extends np {
  constructor(e, t) {
    const n2 = t && "maxLookahead" in t;
    super(e, Object.assign(Object.assign(Object.assign({}, qp), { lookaheadStrategy: n2 ? new ta({ maxLookahead: t.maxLookahead }) : new kp({
      // If validations are skipped, don't log the lookahead warnings
      logging: t.skipValidations ? () => {
      } : void 0
    }) }), t));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, t) {
    return this.RULE(e, t);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, t) {
    return this.consume(e, t);
  }
  wrapSubrule(e, t, n2) {
    return this.subrule(e, t, {
      ARGS: [n2]
    });
  }
  wrapOr(e, t) {
    this.or(e, t);
  }
  wrapOption(e, t) {
    this.option(e, t);
  }
  wrapMany(e, t) {
    this.many(e, t);
  }
  wrapAtLeastOne(e, t) {
    this.atLeastOne(e, t);
  }
};
function zu2(r, e, t) {
  return Qp({
    parser: e,
    tokens: t,
    ruleNames: /* @__PURE__ */ new Map()
  }, r), e;
}
function Qp(r, e) {
  const t = Hl(e, false), n2 = ee(e.rules).filter(we).filter((i) => t.has(i));
  for (const i of n2) {
    const s = Object.assign(Object.assign({}, r), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    r.parser.rule(i, vt(s, i.definition));
  }
}
function vt(r, e, t = false) {
  let n2;
  if (gt(e))
    n2 = im(r, e);
  else if (Qn(e))
    n2 = Jp(r, e);
  else if (mt(e))
    n2 = vt(r, e.terminal);
  else if (Vs(e))
    n2 = Yu(r, e);
  else if (yt2(e))
    n2 = Zp(r, e);
  else if (Ul(e))
    n2 = tm(r, e);
  else if (Gl(e))
    n2 = rm(r, e);
  else if (js(e))
    n2 = nm(r, e);
  else if (yd(e)) {
    const i = r.consume++;
    n2 = () => r.parser.consume(i, tt, e);
  } else
    throw new Pl(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return qu(r, t ? void 0 : jn(e), n2, e.cardinality);
}
function Jp(r, e) {
  const t = Ys(e);
  return () => r.parser.action(t, e);
}
function Zp(r, e) {
  const t = e.rule.ref;
  if (we(t)) {
    const n2 = r.subrule++, i = t.fragment, s = e.arguments.length > 0 ? em(t, e.arguments) : () => ({});
    return (a) => r.parser.subrule(n2, Xu(r, t), i, e, s(a));
  } else if (Et(t)) {
    const n2 = r.consume++, i = Os(r, t.name);
    return () => r.parser.consume(n2, i, e);
  } else if (t)
    Pr();
  else
    throw new Pl(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function em(r, e) {
  const t = e.map((n2) => ze(n2.value));
  return (n2) => {
    const i = {};
    for (let s = 0; s < t.length; s++) {
      const a = r.parameters[s], o = t[s];
      i[a.name] = o(n2);
    }
    return i;
  };
}
function ze(r) {
  if (dd(r)) {
    const e = ze(r.left), t = ze(r.right);
    return (n2) => e(n2) || t(n2);
  } else if (cd(r)) {
    const e = ze(r.left), t = ze(r.right);
    return (n2) => e(n2) && t(n2);
  } else if (fd(r)) {
    const e = ze(r.value);
    return (t) => !e(t);
  } else if (hd(r)) {
    const e = r.parameter.ref.name;
    return (t) => t !== void 0 && t[e] === true;
  } else if (ud(r)) {
    const e = !!r.true;
    return () => e;
  }
  Pr();
}
function tm(r, e) {
  if (e.elements.length === 1)
    return vt(r, e.elements[0]);
  {
    const t = [];
    for (const i of e.elements) {
      const s = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: vt(r, i, true)
      }, a = jn(i);
      a && (s.GATE = ze(a)), t.push(s);
    }
    const n2 = r.or++;
    return (i) => r.parser.alternatives(n2, t.map((s) => {
      const a = {
        ALT: () => s.ALT(i)
      }, o = s.GATE;
      return o && (a.GATE = () => o(i)), a;
    }));
  }
}
function rm(r, e) {
  if (e.elements.length === 1)
    return vt(r, e.elements[0]);
  const t = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: vt(r, o, true)
    }, u = jn(o);
    u && (l.GATE = ze(u)), t.push(l);
  }
  const n2 = r.or++, i = (o, l) => {
    const u = l.getRuleStack().join("-");
    return `uGroup_${o}_${u}`;
  }, s = (o) => r.parser.alternatives(n2, t.map((l, u) => {
    const c = { ALT: () => true }, d = r.parser;
    c.ALT = () => {
      if (l.ALT(o), !d.isRecording()) {
        const h = i(n2, d);
        d.unorderedGroups.get(h) || d.unorderedGroups.set(h, []);
        const m = d.unorderedGroups.get(h);
        typeof (m == null ? void 0 : m[u]) > "u" && (m[u] = true);
      }
    };
    const f = l.GATE;
    return f ? c.GATE = () => f(o) : c.GATE = () => {
      var _a3;
      return !((_a3 = d.unorderedGroups.get(i(n2, d))) == null ? void 0 : _a3[u]);
    }, c;
  })), a = qu(r, jn(e), s, "*");
  return (o) => {
    a(o), r.parser.isRecording() || r.parser.unorderedGroups.delete(i(n2, r.parser));
  };
}
function nm(r, e) {
  const t = e.elements.map((n2) => vt(r, n2));
  return (n2) => t.forEach((i) => i(n2));
}
function jn(r) {
  if (js(r))
    return r.guardCondition;
}
function Yu(r, e, t = e.terminal) {
  if (t)
    if (yt2(t) && we(t.rule.ref)) {
      const n2 = t.rule.ref, i = r.subrule++;
      return (s) => r.parser.subrule(i, Xu(r, n2), false, e, s);
    } else if (yt2(t) && Et(t.rule.ref)) {
      const n2 = r.consume++, i = Os(r, t.rule.ref.name);
      return () => r.parser.consume(n2, i, e);
    } else if (gt(t)) {
      const n2 = r.consume++, i = Os(r, t.value);
      return () => r.parser.consume(n2, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const n2 = Yl(e.type.ref), i = n2 == null ? void 0 : n2.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Ys(e.type.ref));
    return Yu(r, e, i);
  }
}
function im(r, e) {
  const t = r.consume++, n2 = r.tokens[e.value];
  if (!n2)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => r.parser.consume(t, n2, e);
}
function qu(r, e, t, n2) {
  const i = e && ze(e);
  if (!n2)
    if (i) {
      const s = r.or++;
      return (a) => r.parser.alternatives(s, [
        {
          ALT: () => t(a),
          GATE: () => i(a)
        },
        {
          ALT: za(),
          GATE: () => !i(a)
        }
      ]);
    } else
      return t;
  if (n2 === "*") {
    const s = r.many++;
    return (a) => r.parser.many(s, {
      DEF: () => t(a),
      GATE: i ? () => i(a) : void 0
    });
  } else if (n2 === "+") {
    const s = r.many++;
    if (i) {
      const a = r.or++;
      return (o) => r.parser.alternatives(a, [
        {
          ALT: () => r.parser.atLeastOne(s, {
            DEF: () => t(o)
          }),
          GATE: () => i(o)
        },
        {
          ALT: za(),
          GATE: () => !i(o)
        }
      ]);
    } else
      return (a) => r.parser.atLeastOne(s, {
        DEF: () => t(a)
      });
  } else if (n2 === "?") {
    const s = r.optional++;
    return (a) => r.parser.optional(s, {
      DEF: () => t(a),
      GATE: i ? () => i(a) : void 0
    });
  } else
    Pr();
}
function Xu(r, e) {
  const t = sm(r, e), n2 = r.parser.getRule(t);
  if (!n2)
    throw new Error(`Rule "${t}" not found."`);
  return n2;
}
function sm(r, e) {
  if (we(e))
    return e.name;
  if (r.ruleNames.has(e))
    return r.ruleNames.get(e);
  {
    let t = e, n2 = t.$container, i = e.$type;
    for (; !we(n2); )
      (js(n2) || Ul(n2) || Gl(n2)) && (i = n2.elements.indexOf(t).toString() + ":" + i), t = n2, n2 = n2.$container;
    return i = n2.name + ":" + i, r.ruleNames.set(e, i), i;
  }
}
function Os(r, e) {
  const t = r.tokens[e];
  if (!t)
    throw new Error(`Token "${e}" not found."`);
  return t;
}
function am(r) {
  const e = r.Grammar, t = r.parser.Lexer, n2 = new Yp(r);
  return zu2(e, n2, t.definition), n2.finalize(), n2;
}
function om(r) {
  const e = lm(r);
  return e.finalize(), e;
}
function lm(r) {
  const e = r.Grammar, t = r.parser.Lexer, n2 = new Wp(r);
  return zu2(e, n2, t.definition);
}
var Qu = class {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, t) {
    const n2 = ee(Hl(e, false)), i = this.buildTerminalTokens(n2), s = this.buildKeywordTokens(n2, i, t);
    return i.forEach((a) => {
      const o = a.PATTERN;
      typeof o == "object" && o && "test" in o && as(o) ? s.unshift(a) : s.push(a);
    }), s;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(Et).filter((t) => !t.fragment).map((t) => this.buildTerminalToken(t)).toArray();
  }
  buildTerminalToken(e) {
    const t = qs(e), n2 = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i = {
      name: e.name,
      PATTERN: n2
    };
    return typeof n2 == "function" && (i.LINE_BREAKS = true), e.hidden && (i.GROUP = as(t) ? fe.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? true : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    const t = new RegExp(e, e.flags + "y");
    return (n2, i) => (t.lastIndex = i, t.exec(n2));
  }
  buildKeywordTokens(e, t, n2) {
    return e.filter(we).flatMap((i) => Mr(i).filter(gt)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, t, !!(n2 == null ? void 0 : n2.caseInsensitive)));
  }
  buildKeywordToken(e, t, n2) {
    const i = this.buildKeywordPattern(e, n2), s = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: this.findLongerAlt(e, t)
    };
    return typeof i == "function" && (s.LINE_BREAKS = true), s;
  }
  buildKeywordPattern(e, t) {
    return t ? new RegExp(Pd(e.value)) : e.value;
  }
  findLongerAlt(e, t) {
    return t.reduce((n2, i) => {
      const s = i == null ? void 0 : i.PATTERN;
      return (s == null ? void 0 : s.source) && Md("^" + s.source + "$", e.value) && n2.push(i), n2;
    }, []);
  }
};
var Ju = class {
  convert(e, t) {
    let n2 = t.grammarSource;
    if (Vs(n2) && (n2 = Gd(n2)), yt2(n2)) {
      const i = n2.rule.ref;
      if (!i)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, t);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, t, n2) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return je.convertInt(t);
      case "STRING":
        return je.convertString(t);
      case "ID":
        return je.convertID(t);
    }
    switch ((i = zd(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return je.convertNumber(t);
      case "boolean":
        return je.convertBoolean(t);
      case "bigint":
        return je.convertBigint(t);
      case "date":
        return je.convertDate(t);
      default:
        return t;
    }
  }
};
var je;
(function(r) {
  function e(u) {
    let c = "";
    for (let d = 1; d < u.length - 1; d++) {
      const f = u.charAt(d);
      if (f === "\\") {
        const h = u.charAt(++d);
        c += t(h);
      } else
        c += f;
    }
    return c;
  }
  r.convertString = e;
  function t(u) {
    switch (u) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return u;
    }
  }
  function n2(u) {
    return u.charAt(0) === "^" ? u.substring(1) : u;
  }
  r.convertID = n2;
  function i(u) {
    return parseInt(u);
  }
  r.convertInt = i;
  function s(u) {
    return BigInt(u);
  }
  r.convertBigint = s;
  function a(u) {
    return new Date(u);
  }
  r.convertDate = a;
  function o(u) {
    return Number(u);
  }
  r.convertNumber = o;
  function l(u) {
    return u.toLowerCase() === "true";
  }
  r.convertBoolean = l;
})(je || (je = {}));
var ft = {};
var rn = {};
var el;
function Zu() {
  if (el) return rn;
  el = 1, Object.defineProperty(rn, "__esModule", { value: true });
  let r;
  function e() {
    if (r === void 0)
      throw new Error("No runtime abstraction layer installed");
    return r;
  }
  return function(t) {
    function n2(i) {
      if (i === void 0)
        throw new Error("No runtime abstraction layer provided");
      r = i;
    }
    t.install = n2;
  }(e || (e = {})), rn.default = e, rn;
}
var Q = {};
var tl;
function um() {
  if (tl) return Q;
  tl = 1, Object.defineProperty(Q, "__esModule", { value: true }), Q.stringArray = Q.array = Q.func = Q.error = Q.number = Q.string = Q.boolean = void 0;
  function r(o) {
    return o === true || o === false;
  }
  Q.boolean = r;
  function e(o) {
    return typeof o == "string" || o instanceof String;
  }
  Q.string = e;
  function t(o) {
    return typeof o == "number" || o instanceof Number;
  }
  Q.number = t;
  function n2(o) {
    return o instanceof Error;
  }
  Q.error = n2;
  function i(o) {
    return typeof o == "function";
  }
  Q.func = i;
  function s(o) {
    return Array.isArray(o);
  }
  Q.array = s;
  function a(o) {
    return s(o) && o.every((l) => e(l));
  }
  return Q.stringArray = a, Q;
}
var ht = {};
var rl;
function ec() {
  if (rl) return ht;
  rl = 1, Object.defineProperty(ht, "__esModule", { value: true }), ht.Emitter = ht.Event = void 0;
  const r = Zu();
  var e;
  (function(i) {
    const s = { dispose() {
    } };
    i.None = function() {
      return s;
    };
  })(e || (ht.Event = e = {}));
  class t {
    add(s, a = null, o) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(s), this._contexts.push(a), Array.isArray(o) && o.push({ dispose: () => this.remove(s, a) });
    }
    remove(s, a = null) {
      if (!this._callbacks)
        return;
      let o = false;
      for (let l = 0, u = this._callbacks.length; l < u; l++)
        if (this._callbacks[l] === s)
          if (this._contexts[l] === a) {
            this._callbacks.splice(l, 1), this._contexts.splice(l, 1);
            return;
          } else
            o = true;
      if (o)
        throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...s) {
      if (!this._callbacks)
        return [];
      const a = [], o = this._callbacks.slice(0), l = this._contexts.slice(0);
      for (let u = 0, c = o.length; u < c; u++)
        try {
          a.push(o[u].apply(l[u], s));
        } catch (d) {
          (0, r.default)().console.error(d);
        }
      return a;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }
  class n2 {
    constructor(s) {
      this._options = s;
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
      return this._event || (this._event = (s, a, o) => {
        this._callbacks || (this._callbacks = new t()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(s, a);
        const l = {
          dispose: () => {
            this._callbacks && (this._callbacks.remove(s, a), l.dispose = n2._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
          }
        };
        return Array.isArray(o) && o.push(l), l;
      }), this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(s) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, s);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  }
  return ht.Emitter = n2, n2._noop = function() {
  }, ht;
}
var nl;
function cm() {
  if (nl) return ft;
  nl = 1, Object.defineProperty(ft, "__esModule", { value: true }), ft.CancellationTokenSource = ft.CancellationToken = void 0;
  const r = Zu(), e = um(), t = ec();
  var n2;
  (function(o) {
    o.None = Object.freeze({
      isCancellationRequested: false,
      onCancellationRequested: t.Event.None
    }), o.Cancelled = Object.freeze({
      isCancellationRequested: true,
      onCancellationRequested: t.Event.None
    });
    function l(u) {
      const c = u;
      return c && (c === o.None || c === o.Cancelled || e.boolean(c.isCancellationRequested) && !!c.onCancellationRequested);
    }
    o.is = l;
  })(n2 || (ft.CancellationToken = n2 = {}));
  const i = Object.freeze(function(o, l) {
    const u = (0, r.default)().timer.setTimeout(o.bind(l), 0);
    return { dispose() {
      u.dispose();
    } };
  });
  class s {
    constructor() {
      this._isCancelled = false;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? i : (this._emitter || (this._emitter = new t.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }
  class a {
    get token() {
      return this._token || (this._token = new s()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = n2.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof s && this._token.dispose() : this._token = n2.None;
    }
  }
  return ft.CancellationTokenSource = a, ft;
}
var K = cm();
function dm() {
  return new Promise((r) => {
    typeof setImmediate > "u" ? setTimeout(r, 0) : setImmediate(r);
  });
}
var Tn = 0;
var fm = 10;
function hm() {
  return Tn = performance.now(), new K.CancellationTokenSource();
}
var Hn = Symbol("OperationCancelled");
function li(r) {
  return r === Hn;
}
async function $e(r) {
  if (r === K.CancellationToken.None)
    return;
  const e = performance.now();
  if (e - Tn >= fm && (Tn = e, await dm(), Tn = performance.now()), r.isCancellationRequested)
    throw Hn;
}
var ua = class {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = (n2) => (e(n2), this), this.reject = (n2) => (t(n2), this);
    });
  }
};
var Or2 = class _Or {
  constructor(e, t, n2, i) {
    this._uri = e, this._languageId = t, this._version = n2, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const t = this.offsetAt(e.start), n2 = this.offsetAt(e.end);
      return this._content.substring(t, n2);
    }
    return this._content;
  }
  update(e, t) {
    for (const n2 of e)
      if (_Or.isIncremental(n2)) {
        const i = rc(n2.range), s = this.offsetAt(i.start), a = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + n2.text + this._content.substring(a, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let u = this._lineOffsets;
        const c = il(n2.text, false, s);
        if (l - o === c.length)
          for (let f = 0, h = c.length; f < h; f++)
            u[f + o + 1] = c[f];
        else
          c.length < 1e4 ? u.splice(o + 1, l - o, ...c) : this._lineOffsets = u = u.slice(0, o + 1).concat(c, u.slice(l + 1));
        const d = n2.text.length - (a - s);
        if (d !== 0)
          for (let f = o + 1 + c.length, h = u.length; f < h; f++)
            u[f] = u[f] + d;
      } else if (_Or.isFull(n2))
        this._content = n2.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = t;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = il(this._content, true)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const t = this.getLineOffsets();
    let n2 = 0, i = t.length;
    if (i === 0)
      return { line: 0, character: e };
    for (; n2 < i; ) {
      const a = Math.floor((n2 + i) / 2);
      t[a] > e ? i = a : n2 = a + 1;
    }
    const s = n2 - 1;
    return e = this.ensureBeforeEOL(e, t[s]), { line: s, character: e - t[s] };
  }
  offsetAt(e) {
    const t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const n2 = t[e.line];
    if (e.character <= 0)
      return n2;
    const i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, s = Math.min(n2 + e.character, i);
    return this.ensureBeforeEOL(s, n2);
  }
  ensureBeforeEOL(e, t) {
    for (; e > t && tc(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
  }
  static isFull(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
  }
};
var _s;
(function(r) {
  function e(i, s, a, o) {
    return new Or2(i, s, a, o);
  }
  r.create = e;
  function t(i, s, a) {
    if (i instanceof Or2)
      return i.update(s, a), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  r.update = t;
  function n2(i, s) {
    const a = i.getText(), o = Ps(s.map(pm), (c, d) => {
      const f = c.range.start.line - d.range.start.line;
      return f === 0 ? c.range.start.character - d.range.start.character : f;
    });
    let l = 0;
    const u = [];
    for (const c of o) {
      const d = i.offsetAt(c.range.start);
      if (d < l)
        throw new Error("Overlapping edit");
      d > l && u.push(a.substring(l, d)), c.newText.length && u.push(c.newText), l = i.offsetAt(c.range.end);
    }
    return u.push(a.substr(l)), u.join("");
  }
  r.applyEdits = n2;
})(_s || (_s = {}));
function Ps(r, e) {
  if (r.length <= 1)
    return r;
  const t = r.length / 2 | 0, n2 = r.slice(0, t), i = r.slice(t);
  Ps(n2, e), Ps(i, e);
  let s = 0, a = 0, o = 0;
  for (; s < n2.length && a < i.length; )
    e(n2[s], i[a]) <= 0 ? r[o++] = n2[s++] : r[o++] = i[a++];
  for (; s < n2.length; )
    r[o++] = n2[s++];
  for (; a < i.length; )
    r[o++] = i[a++];
  return r;
}
function il(r, e, t = 0) {
  const n2 = e ? [t] : [];
  for (let i = 0; i < r.length; i++) {
    const s = r.charCodeAt(i);
    tc(s) && (s === 13 && i + 1 < r.length && r.charCodeAt(i + 1) === 10 && i++, n2.push(t + i + 1));
  }
  return n2;
}
function tc(r) {
  return r === 13 || r === 10;
}
function rc(r) {
  const e = r.start, t = r.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? { start: t, end: e } : r;
}
function pm(r) {
  const e = rc(r.range);
  return e !== r.range ? { newText: r.newText, range: e } : r;
}
var nc;
(() => {
  var r = { 470: (i) => {
    function s(l) {
      if (typeof l != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
    }
    function a(l, u) {
      for (var c, d = "", f = 0, h = -1, m = 0, g = 0; g <= l.length; ++g) {
        if (g < l.length) c = l.charCodeAt(g);
        else {
          if (c === 47) break;
          c = 47;
        }
        if (c === 47) {
          if (!(h === g - 1 || m === 1)) if (h !== g - 1 && m === 2) {
            if (d.length < 2 || f !== 2 || d.charCodeAt(d.length - 1) !== 46 || d.charCodeAt(d.length - 2) !== 46) {
              if (d.length > 2) {
                var k = d.lastIndexOf("/");
                if (k !== d.length - 1) {
                  k === -1 ? (d = "", f = 0) : f = (d = d.slice(0, k)).length - 1 - d.lastIndexOf("/"), h = g, m = 0;
                  continue;
                }
              } else if (d.length === 2 || d.length === 1) {
                d = "", f = 0, h = g, m = 0;
                continue;
              }
            }
            u && (d.length > 0 ? d += "/.." : d = "..", f = 2);
          } else d.length > 0 ? d += "/" + l.slice(h + 1, g) : d = l.slice(h + 1, g), f = g - h - 1;
          h = g, m = 0;
        } else c === 46 && m !== -1 ? ++m : m = -1;
      }
      return d;
    }
    var o = { resolve: function() {
      for (var l, u = "", c = false, d = arguments.length - 1; d >= -1 && !c; d--) {
        var f;
        d >= 0 ? f = arguments[d] : (l === void 0 && (l = process.cwd()), f = l), s(f), f.length !== 0 && (u = f + "/" + u, c = f.charCodeAt(0) === 47);
      }
      return u = a(u, !c), c ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
    }, normalize: function(l) {
      if (s(l), l.length === 0) return ".";
      var u = l.charCodeAt(0) === 47, c = l.charCodeAt(l.length - 1) === 47;
      return (l = a(l, !u)).length !== 0 || u || (l = "."), l.length > 0 && c && (l += "/"), u ? "/" + l : l;
    }, isAbsolute: function(l) {
      return s(l), l.length > 0 && l.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var l, u = 0; u < arguments.length; ++u) {
        var c = arguments[u];
        s(c), c.length > 0 && (l === void 0 ? l = c : l += "/" + c);
      }
      return l === void 0 ? "." : o.normalize(l);
    }, relative: function(l, u) {
      if (s(l), s(u), l === u || (l = o.resolve(l)) === (u = o.resolve(u))) return "";
      for (var c = 1; c < l.length && l.charCodeAt(c) === 47; ++c) ;
      for (var d = l.length, f = d - c, h = 1; h < u.length && u.charCodeAt(h) === 47; ++h) ;
      for (var m = u.length - h, g = f < m ? f : m, k = -1, R2 = 0; R2 <= g; ++R2) {
        if (R2 === g) {
          if (m > g) {
            if (u.charCodeAt(h + R2) === 47) return u.slice(h + R2 + 1);
            if (R2 === 0) return u.slice(h + R2);
          } else f > g && (l.charCodeAt(c + R2) === 47 ? k = R2 : R2 === 0 && (k = 0));
          break;
        }
        var $ = l.charCodeAt(c + R2);
        if ($ !== u.charCodeAt(h + R2)) break;
        $ === 47 && (k = R2);
      }
      var T = "";
      for (R2 = c + k + 1; R2 <= d; ++R2) R2 !== d && l.charCodeAt(R2) !== 47 || (T.length === 0 ? T += ".." : T += "/..");
      return T.length > 0 ? T + u.slice(h + k) : (h += k, u.charCodeAt(h) === 47 && ++h, u.slice(h));
    }, _makeLong: function(l) {
      return l;
    }, dirname: function(l) {
      if (s(l), l.length === 0) return ".";
      for (var u = l.charCodeAt(0), c = u === 47, d = -1, f = true, h = l.length - 1; h >= 1; --h) if ((u = l.charCodeAt(h)) === 47) {
        if (!f) {
          d = h;
          break;
        }
      } else f = false;
      return d === -1 ? c ? "/" : "." : c && d === 1 ? "//" : l.slice(0, d);
    }, basename: function(l, u) {
      if (u !== void 0 && typeof u != "string") throw new TypeError('"ext" argument must be a string');
      s(l);
      var c, d = 0, f = -1, h = true;
      if (u !== void 0 && u.length > 0 && u.length <= l.length) {
        if (u.length === l.length && u === l) return "";
        var m = u.length - 1, g = -1;
        for (c = l.length - 1; c >= 0; --c) {
          var k = l.charCodeAt(c);
          if (k === 47) {
            if (!h) {
              d = c + 1;
              break;
            }
          } else g === -1 && (h = false, g = c + 1), m >= 0 && (k === u.charCodeAt(m) ? --m == -1 && (f = c) : (m = -1, f = g));
        }
        return d === f ? f = g : f === -1 && (f = l.length), l.slice(d, f);
      }
      for (c = l.length - 1; c >= 0; --c) if (l.charCodeAt(c) === 47) {
        if (!h) {
          d = c + 1;
          break;
        }
      } else f === -1 && (h = false, f = c + 1);
      return f === -1 ? "" : l.slice(d, f);
    }, extname: function(l) {
      s(l);
      for (var u = -1, c = 0, d = -1, f = true, h = 0, m = l.length - 1; m >= 0; --m) {
        var g = l.charCodeAt(m);
        if (g !== 47) d === -1 && (f = false, d = m + 1), g === 46 ? u === -1 ? u = m : h !== 1 && (h = 1) : u !== -1 && (h = -1);
        else if (!f) {
          c = m + 1;
          break;
        }
      }
      return u === -1 || d === -1 || h === 0 || h === 1 && u === d - 1 && u === c + 1 ? "" : l.slice(u, d);
    }, format: function(l) {
      if (l === null || typeof l != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof l);
      return function(u, c) {
        var d = c.dir || c.root, f = c.base || (c.name || "") + (c.ext || "");
        return d ? d === c.root ? d + f : d + "/" + f : f;
      }(0, l);
    }, parse: function(l) {
      s(l);
      var u = { root: "", dir: "", base: "", ext: "", name: "" };
      if (l.length === 0) return u;
      var c, d = l.charCodeAt(0), f = d === 47;
      f ? (u.root = "/", c = 1) : c = 0;
      for (var h = -1, m = 0, g = -1, k = true, R2 = l.length - 1, $ = 0; R2 >= c; --R2) if ((d = l.charCodeAt(R2)) !== 47) g === -1 && (k = false, g = R2 + 1), d === 46 ? h === -1 ? h = R2 : $ !== 1 && ($ = 1) : h !== -1 && ($ = -1);
      else if (!k) {
        m = R2 + 1;
        break;
      }
      return h === -1 || g === -1 || $ === 0 || $ === 1 && h === g - 1 && h === m + 1 ? g !== -1 && (u.base = u.name = m === 0 && f ? l.slice(1, g) : l.slice(m, g)) : (m === 0 && f ? (u.name = l.slice(1, h), u.base = l.slice(1, g)) : (u.name = l.slice(m, h), u.base = l.slice(m, g)), u.ext = l.slice(h, g)), m > 0 ? u.dir = l.slice(0, m - 1) : f && (u.dir = "/"), u;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    o.posix = o, i.exports = o;
  } }, e = {};
  function t(i) {
    var s = e[i];
    if (s !== void 0) return s.exports;
    var a = e[i] = { exports: {} };
    return r[i](a, a.exports, t), a.exports;
  }
  t.d = (i, s) => {
    for (var a in s) t.o(s, a) && !t.o(i, a) && Object.defineProperty(i, a, { enumerable: true, get: s[a] });
  }, t.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), t.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: true });
  };
  var n2 = {};
  (() => {
    let i;
    t.r(n2), t.d(n2, { URI: () => f, Utils: () => Se2 }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, o = /^\/\//;
    function l(E, y) {
      if (!E.scheme && y) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${E.authority}", path: "${E.path}", query: "${E.query}", fragment: "${E.fragment}"}`);
      if (E.scheme && !s.test(E.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (E.path) {
        if (E.authority) {
          if (!a.test(E.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test(E.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const u = "", c = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class f {
      constructor(y, S, x, O, b, L = false) {
        __publicField(this, "scheme");
        __publicField(this, "authority");
        __publicField(this, "path");
        __publicField(this, "query");
        __publicField(this, "fragment");
        typeof y == "object" ? (this.scheme = y.scheme || u, this.authority = y.authority || u, this.path = y.path || u, this.query = y.query || u, this.fragment = y.fragment || u) : (this.scheme = /* @__PURE__ */ function(Te, Y) {
          return Te || Y ? Te : "file";
        }(y, L), this.authority = S || u, this.path = function(Te, Y) {
          switch (Te) {
            case "https":
            case "http":
            case "file":
              Y ? Y[0] !== c && (Y = c + Y) : Y = c;
          }
          return Y;
        }(this.scheme, x || u), this.query = O || u, this.fragment = b || u, l(this, L));
      }
      static isUri(y) {
        return y instanceof f || !!y && typeof y.authority == "string" && typeof y.fragment == "string" && typeof y.path == "string" && typeof y.query == "string" && typeof y.scheme == "string" && typeof y.fsPath == "string" && typeof y.with == "function" && typeof y.toString == "function";
      }
      get fsPath() {
        return $(this);
      }
      with(y) {
        if (!y) return this;
        let { scheme: S, authority: x, path: O, query: b, fragment: L } = y;
        return S === void 0 ? S = this.scheme : S === null && (S = u), x === void 0 ? x = this.authority : x === null && (x = u), O === void 0 ? O = this.path : O === null && (O = u), b === void 0 ? b = this.query : b === null && (b = u), L === void 0 ? L = this.fragment : L === null && (L = u), S === this.scheme && x === this.authority && O === this.path && b === this.query && L === this.fragment ? this : new m(S, x, O, b, L);
      }
      static parse(y, S = false) {
        const x = d.exec(y);
        return x ? new m(x[2] || u, ie(x[4] || u), ie(x[5] || u), ie(x[7] || u), ie(x[9] || u), S) : new m(u, u, u, u, u);
      }
      static file(y) {
        let S = u;
        if (i && (y = y.replace(/\\/g, c)), y[0] === c && y[1] === c) {
          const x = y.indexOf(c, 2);
          x === -1 ? (S = y.substring(2), y = c) : (S = y.substring(2, x), y = y.substring(x) || c);
        }
        return new m("file", S, y, u, u);
      }
      static from(y) {
        const S = new m(y.scheme, y.authority, y.path, y.query, y.fragment);
        return l(S, true), S;
      }
      toString(y = false) {
        return T(this, y);
      }
      toJSON() {
        return this;
      }
      static revive(y) {
        if (y) {
          if (y instanceof f) return y;
          {
            const S = new m(y);
            return S._formatted = y.external, S._fsPath = y._sep === h ? y.fsPath : null, S;
          }
        }
        return y;
      }
    }
    const h = i ? 1 : void 0;
    class m extends f {
      constructor() {
        super(...arguments);
        __publicField(this, "_formatted", null);
        __publicField(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = $(this)), this._fsPath;
      }
      toString(y = false) {
        return y ? T(this, true) : (this._formatted || (this._formatted = T(this, false)), this._formatted);
      }
      toJSON() {
        const y = { $mid: 1 };
        return this._fsPath && (y.fsPath = this._fsPath, y._sep = h), this._formatted && (y.external = this._formatted), this.path && (y.path = this.path), this.scheme && (y.scheme = this.scheme), this.authority && (y.authority = this.authority), this.query && (y.query = this.query), this.fragment && (y.fragment = this.fragment), y;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function k(E, y, S) {
      let x, O = -1;
      for (let b = 0; b < E.length; b++) {
        const L = E.charCodeAt(b);
        if (L >= 97 && L <= 122 || L >= 65 && L <= 90 || L >= 48 && L <= 57 || L === 45 || L === 46 || L === 95 || L === 126 || y && L === 47 || S && L === 91 || S && L === 93 || S && L === 58) O !== -1 && (x += encodeURIComponent(E.substring(O, b)), O = -1), x !== void 0 && (x += E.charAt(b));
        else {
          x === void 0 && (x = E.substr(0, b));
          const Te = g[L];
          Te !== void 0 ? (O !== -1 && (x += encodeURIComponent(E.substring(O, b)), O = -1), x += Te) : O === -1 && (O = b);
        }
      }
      return O !== -1 && (x += encodeURIComponent(E.substring(O))), x !== void 0 ? x : E;
    }
    function R2(E) {
      let y;
      for (let S = 0; S < E.length; S++) {
        const x = E.charCodeAt(S);
        x === 35 || x === 63 ? (y === void 0 && (y = E.substr(0, S)), y += g[x]) : y !== void 0 && (y += E[S]);
      }
      return y !== void 0 ? y : E;
    }
    function $(E, y) {
      let S;
      return S = E.authority && E.path.length > 1 && E.scheme === "file" ? `//${E.authority}${E.path}` : E.path.charCodeAt(0) === 47 && (E.path.charCodeAt(1) >= 65 && E.path.charCodeAt(1) <= 90 || E.path.charCodeAt(1) >= 97 && E.path.charCodeAt(1) <= 122) && E.path.charCodeAt(2) === 58 ? E.path[1].toLowerCase() + E.path.substr(2) : E.path, i && (S = S.replace(/\//g, "\\")), S;
    }
    function T(E, y) {
      const S = y ? R2 : k;
      let x = "", { scheme: O, authority: b, path: L, query: Te, fragment: Y } = E;
      if (O && (x += O, x += ":"), (b || O === "file") && (x += c, x += c), b) {
        let V2 = b.indexOf("@");
        if (V2 !== -1) {
          const ct = b.substr(0, V2);
          b = b.substr(V2 + 1), V2 = ct.lastIndexOf(":"), V2 === -1 ? x += S(ct, false, false) : (x += S(ct.substr(0, V2), false, false), x += ":", x += S(ct.substr(V2 + 1), false, true)), x += "@";
        }
        b = b.toLowerCase(), V2 = b.lastIndexOf(":"), V2 === -1 ? x += S(b, false, true) : (x += S(b.substr(0, V2), false, true), x += b.substr(V2));
      }
      if (L) {
        if (L.length >= 3 && L.charCodeAt(0) === 47 && L.charCodeAt(2) === 58) {
          const V2 = L.charCodeAt(1);
          V2 >= 65 && V2 <= 90 && (L = `/${String.fromCharCode(V2 + 32)}:${L.substr(3)}`);
        } else if (L.length >= 2 && L.charCodeAt(1) === 58) {
          const V2 = L.charCodeAt(0);
          V2 >= 65 && V2 <= 90 && (L = `${String.fromCharCode(V2 + 32)}:${L.substr(2)}`);
        }
        x += S(L, true, false);
      }
      return Te && (x += "?", x += S(Te, false, false)), Y && (x += "#", x += y ? Y : k(Y, false, false)), x;
    }
    function I2(E) {
      try {
        return decodeURIComponent(E);
      } catch {
        return E.length > 3 ? E.substr(0, 3) + I2(E.substr(3)) : E;
      }
    }
    const G = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function ie(E) {
      return E.match(G) ? E.replace(G, (y) => I2(y)) : E;
    }
    var Le = t(470);
    const ye = Le.posix || Le, Fe = "/";
    var Se2;
    (function(E) {
      E.joinPath = function(y, ...S) {
        return y.with({ path: ye.join(y.path, ...S) });
      }, E.resolvePath = function(y, ...S) {
        let x = y.path, O = false;
        x[0] !== Fe && (x = Fe + x, O = true);
        let b = ye.resolve(x, ...S);
        return O && b[0] === Fe && !y.authority && (b = b.substring(1)), y.with({ path: b });
      }, E.dirname = function(y) {
        if (y.path.length === 0 || y.path === Fe) return y;
        let S = ye.dirname(y.path);
        return S.length === 1 && S.charCodeAt(0) === 46 && (S = ""), y.with({ path: S });
      }, E.basename = function(y) {
        return ye.basename(y.path);
      }, E.extname = function(y) {
        return ye.extname(y.path);
      };
    })(Se2 || (Se2 = {}));
  })(), nc = n2;
})();
var { URI: Rt, Utils: Wt } = nc;
var nt;
(function(r) {
  r.basename = Wt.basename, r.dirname = Wt.dirname, r.extname = Wt.extname, r.joinPath = Wt.joinPath, r.resolvePath = Wt.resolvePath;
  function e(i, s) {
    return (i == null ? void 0 : i.toString()) === (s == null ? void 0 : s.toString());
  }
  r.equals = e;
  function t(i, s) {
    const a = typeof i == "string" ? i : i.path, o = typeof s == "string" ? s : s.path, l = a.split("/").filter((h) => h.length > 0), u = o.split("/").filter((h) => h.length > 0);
    let c = 0;
    for (; c < l.length && l[c] === u[c]; c++)
      ;
    const d = "../".repeat(l.length - c), f = u.slice(c).join("/");
    return d + f;
  }
  r.relative = t;
  function n2(i) {
    return Rt.parse(i.toString()).toString();
  }
  r.normalize = n2;
})(nt || (nt = {}));
var U;
(function(r) {
  r[r.Changed = 0] = "Changed", r[r.Parsed = 1] = "Parsed", r[r.IndexedContent = 2] = "IndexedContent", r[r.ComputedScopes = 3] = "ComputedScopes", r[r.Linked = 4] = "Linked", r[r.IndexedReferences = 5] = "IndexedReferences", r[r.Validated = 6] = "Validated";
})(U || (U = {}));
var mm = class {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, t = K.CancellationToken.None) {
    const n2 = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, n2, t);
  }
  fromTextDocument(e, t, n2) {
    return t = t ?? Rt.parse(e.uri), K.CancellationToken.is(n2) ? this.createAsync(t, e, n2) : this.create(t, e, n2);
  }
  fromString(e, t, n2) {
    return K.CancellationToken.is(n2) ? this.createAsync(t, e, n2) : this.create(t, e, n2);
  }
  fromModel(e, t) {
    return this.create(t, { $model: e });
  }
  create(e, t, n2) {
    if (typeof t == "string") {
      const i = this.parse(e, t, n2);
      return this.createLangiumDocument(i, e, void 0, t);
    } else if ("$model" in t) {
      const i = { value: t.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(i, e);
    } else {
      const i = this.parse(e, t.getText(), n2);
      return this.createLangiumDocument(i, e, t);
    }
  }
  async createAsync(e, t, n2) {
    if (typeof t == "string") {
      const i = await this.parseAsync(e, t, n2);
      return this.createLangiumDocument(i, e, void 0, t);
    } else {
      const i = await this.parseAsync(e, t.getText(), n2);
      return this.createLangiumDocument(i, e, t);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, t, n2, i) {
    let s;
    if (n2)
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        textDocument: n2
      };
    else {
      const a = this.createTextDocumentGetter(t, i);
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        get textDocument() {
          return a();
        }
      };
    }
    return e.value.$document = s, s;
  }
  async update(e, t) {
    var n2, i;
    const s = (n2 = e.parseResult.value.$cstNode) === null || n2 === void 0 ? void 0 : n2.root.fullText, a = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(e.uri.toString()), o = a ? a.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (a)
      Object.defineProperty(e, "textDocument", {
        value: a
      });
    else {
      const l = this.createTextDocumentGetter(e.uri, o);
      Object.defineProperty(e, "textDocument", {
        get: l
      });
    }
    return s !== o && (e.parseResult = await this.parseAsync(e.uri, o, t), e.parseResult.value.$document = e), e.state = U.Parsed, e;
  }
  parse(e, t, n2) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, n2);
  }
  parseAsync(e, t, n2) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, n2);
  }
  createTextDocumentGetter(e, t) {
    const n2 = this.serviceRegistry;
    let i;
    return () => i ?? (i = _s.create(e.toString(), n2.getServices(e).LanguageMetaData.languageId, 0, t ?? ""));
  }
};
var gm = class {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
  }
  get all() {
    return ee(this.documentMap.values());
  }
  addDocument(e) {
    const t = e.uri.toString();
    if (this.documentMap.has(t))
      throw new Error(`A document with the URI '${t}' is already present.`);
    this.documentMap.set(t, e);
  }
  getDocument(e) {
    const t = e.toString();
    return this.documentMap.get(t);
  }
  async getOrCreateDocument(e, t) {
    let n2 = this.getDocument(e);
    return n2 || (n2 = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(n2), n2);
  }
  createDocument(e, t, n2) {
    if (n2)
      return this.langiumDocumentFactory.fromString(t, e, n2).then((i) => (this.addDocument(i), i));
    {
      const i = this.langiumDocumentFactory.fromString(t, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentMap.has(e.toString());
  }
  invalidateDocument(e) {
    const t = e.toString(), n2 = this.documentMap.get(t);
    return n2 && (this.serviceRegistry.getServices(e).references.Linker.unlink(n2), n2.state = U.Changed, n2.precomputedScopes = void 0, n2.diagnostics = void 0), n2;
  }
  deleteDocument(e) {
    const t = e.toString(), n2 = this.documentMap.get(t);
    return n2 && (n2.state = U.Changed, this.documentMap.delete(t)), n2;
  }
};
var Ii = Symbol("ref_resolving");
var ym = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e, t = K.CancellationToken.None) {
    for (const n2 of wt(e.parseResult.value))
      await $e(t), Kl(n2).forEach((i) => this.doLink(i, e));
  }
  doLink(e, t) {
    var n2;
    const i = e.reference;
    if (i._ref === void 0) {
      i._ref = Ii;
      try {
        const s = this.getCandidate(e);
        if (dn(s))
          i._ref = s;
        else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
          const a = this.loadAstNode(s);
          i._ref = a ?? this.createLinkingError(e, s);
        } else
          i._ref = void 0;
      } catch (s) {
        console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
        const a = (n2 = s.message) !== null && n2 !== void 0 ? n2 : String(s);
        i._ref = Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${i.$refText}': ${a}` });
      }
      t.references.push(i);
    }
  }
  unlink(e) {
    for (const t of e.references)
      delete t._ref, delete t._nodeDescription;
    e.references = [];
  }
  getCandidate(e) {
    return this.scopeProvider.getScope(e).getElement(e.reference.$refText) ?? this.createLinkingError(e);
  }
  buildReference(e, t, n2, i) {
    const s = this, a = {
      $refNode: n2,
      $refText: i,
      get ref() {
        var o;
        if (ae(this._ref))
          return this._ref;
        if (Zc(this._nodeDescription)) {
          const l = s.loadAstNode(this._nodeDescription);
          this._ref = l ?? s.createLinkingError({ reference: a, container: e, property: t }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = Ii;
          const l = ss(e).$document, u = s.getLinkedNode({ reference: a, container: e, property: t });
          if (u.error && l && l.state < U.ComputedScopes)
            return this._ref = void 0;
          this._ref = (o = u.node) !== null && o !== void 0 ? o : u.error, this._nodeDescription = u.descr, l == null ? void 0 : l.references.push(this);
        } else if (this._ref === Ii)
          throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${i}')`);
        return ae(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return dn(this._ref) ? this._ref : void 0;
      }
    };
    return a;
  }
  getLinkedNode(e) {
    var t;
    try {
      const n2 = this.getCandidate(e);
      if (dn(n2))
        return { error: n2 };
      const i = this.loadAstNode(n2);
      return i ? { node: i, descr: n2 } : {
        descr: n2,
        error: this.createLinkingError(e, n2)
      };
    } catch (n2) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, n2);
      const i = (t = n2.message) !== null && t !== void 0 ? t : String(n2);
      return {
        error: Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}` })
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const t = this.langiumDocuments().getDocument(e.documentUri);
    if (t)
      return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
  }
  createLinkingError(e, t) {
    const n2 = ss(e.container).$document;
    n2 && n2.state < U.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n2.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return Object.assign(Object.assign({}, e), { message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`, targetDescription: t });
  }
};
function Tm(r) {
  return typeof r.name == "string";
}
var vm = class {
  getName(e) {
    if (Tm(e))
      return e.name;
  }
  getNameNode(e) {
    return zl(e.$cstNode, "name");
  }
};
var Rm = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      const t = Hd(e), n2 = e.astNode;
      if (t && n2) {
        const i = n2[t.feature];
        if (Ge(i))
          return i.ref;
        if (Array.isArray(i)) {
          for (const s of i)
            if (Ge(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end)
              return s.ref;
        }
      }
      if (n2) {
        const i = this.nameProvider.getNameNode(n2);
        if (i && (i === e || rd(e, i)))
          return n2;
      }
    }
  }
  findDeclarationNode(e) {
    const t = this.findDeclaration(e);
    if (t == null ? void 0 : t.$cstNode)
      return this.nameProvider.getNameNode(t) ?? t.$cstNode;
  }
  findReferences(e, t) {
    const n2 = [];
    if (t.includeDeclaration) {
      const s = this.getReferenceToSelf(e);
      s && n2.push(s);
    }
    let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return t.documentUri && (i = i.filter((s) => nt.equals(s.sourceUri, t.documentUri))), n2.push(...i), ee(n2);
  }
  getReferenceToSelf(e) {
    const t = this.nameProvider.getNameNode(e);
    if (t) {
      const n2 = Ze(e), i = this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: n2.uri,
        sourcePath: i,
        targetUri: n2.uri,
        targetPath: i,
        segment: Sn(t),
        local: true
      };
    }
  }
};
var Wn = class {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [t, n2] of e)
        this.add(t, n2);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return rs.sum(ee(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, t) {
    if (t === void 0)
      return this.map.delete(e);
    {
      const n2 = this.map.get(e);
      if (n2) {
        const i = n2.indexOf(t);
        if (i >= 0)
          return n2.length === 1 ? this.map.delete(e) : n2.splice(i, 1), true;
      }
      return false;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    var t;
    return (t = this.map.get(e)) !== null && t !== void 0 ? t : [];
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, t) {
    if (t === void 0)
      return this.map.has(e);
    {
      const n2 = this.map.get(e);
      return n2 ? n2.indexOf(t) >= 0 : false;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, t) {
    return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, t) {
    return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, Array.from(t)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((t, n2) => t.forEach((i) => e(i, n2, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return ee(this.map.entries()).flatMap(([e, t]) => t.map((n2) => [e, n2]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return ee(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return ee(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return ee(this.map.entries());
  }
};
var sl = class {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [t, n2] of e)
        this.set(t, n2);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, t) {
    return this.map.set(e, t), this.inverse.set(t, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const t = this.map.get(e);
    return t !== void 0 ? (this.map.delete(e), this.inverse.delete(t), true) : false;
  }
};
var $m = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e, t = K.CancellationToken.None) {
    return this.computeExportsForNode(e.parseResult.value, e, void 0, t);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async computeExportsForNode(e, t, n2 = Hs, i = K.CancellationToken.None) {
    const s = [];
    this.exportNode(e, s, t);
    for (const a of n2(e))
      await $e(i), this.exportNode(a, s, t);
    return s;
  }
  /**
   * Add a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  exportNode(e, t, n2) {
    const i = this.nameProvider.getName(e);
    i && t.push(this.descriptions.createDescription(e, i, n2));
  }
  async computeLocalScopes(e, t = K.CancellationToken.None) {
    const n2 = e.parseResult.value, i = new Wn();
    for (const s of Mr(n2))
      await $e(t), this.processNode(s, e, i);
    return i;
  }
  /**
   * Process a single node during scopes computation. The default implementation makes the node visible
   * in the subtree of its container (if the node has a name). Override this method to change this,
   * e.g. by increasing the visibility to a higher level in the AST.
   */
  processNode(e, t, n2) {
    const i = e.$container;
    if (i) {
      const s = this.nameProvider.getName(e);
      s && n2.add(i, this.descriptions.createDescription(e, s, t));
    }
  }
};
var al = class {
  constructor(e, t, n2) {
    var i;
    this.elements = e, this.outerScope = t, this.caseInsensitive = (i = n2 == null ? void 0 : n2.caseInsensitive) !== null && i !== void 0 ? i : false;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const t = this.caseInsensitive ? this.elements.find((n2) => n2.name.toLowerCase() === e.toLowerCase()) : this.elements.find((n2) => n2.name === e);
    if (t)
      return t;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
};
var Em = class {
  constructor(e, t, n2) {
    var i;
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i = n2 == null ? void 0 : n2.caseInsensitive) !== null && i !== void 0 ? i : false;
    for (const s of e) {
      const a = this.caseInsensitive ? s.name.toLowerCase() : s.name;
      this.elements.set(a, s);
    }
    this.outerScope = t;
  }
  getElement(e) {
    const t = this.caseInsensitive ? e.toLowerCase() : e, n2 = this.elements.get(t);
    if (n2)
      return n2;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getAllElements() {
    let e = ee(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
};
var ic = class {
  constructor() {
    this.toDispose = [], this.isDisposed = false;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = true, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
};
var Am = class extends ic {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, t) {
    this.throwIfDisposed(), this.cache.set(e, t);
  }
  get(e, t) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (t) {
      const n2 = t();
      return this.cache.set(e, n2), n2;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
};
var km = class extends ic {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((t) => t);
  }
  has(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(t);
  }
  set(e, t, n2) {
    this.throwIfDisposed(), this.cacheForContext(e).set(t, n2);
  }
  get(e, t, n2) {
    this.throwIfDisposed();
    const i = this.cacheForContext(e);
    if (i.has(t))
      return i.get(t);
    if (n2) {
      const s = n2();
      return i.set(t, s), s;
    } else
      return;
  }
  delete(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const t = this.converter(e);
      this.cache.delete(t);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const t = this.converter(e);
    let n2 = this.cache.get(t);
    return n2 || (n2 = /* @__PURE__ */ new Map(), this.cache.set(t, n2)), n2;
  }
};
var xm = class extends Am {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, t) {
    super(), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((n2, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
};
var Im = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new xm(e.shared);
  }
  getScope(e) {
    const t = [], n2 = this.reflection.getReferenceType(e), i = Ze(e.container).precomputedScopes;
    if (i) {
      let a = e.container;
      do {
        const o = i.get(a);
        o.length > 0 && t.push(ee(o).filter((l) => this.reflection.isSubtype(l.type, n2))), a = a.$container;
      } while (a);
    }
    let s = this.getGlobalScope(n2, e);
    for (let a = t.length - 1; a >= 0; a--)
      s = this.createScope(t[a], s);
    return s;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, t, n2) {
    return new al(ee(e), t, n2);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, t, n2) {
    const i = ee(e).map((s) => {
      const a = this.nameProvider.getName(s);
      if (a)
        return this.descriptions.createDescription(s, a);
    }).nonNullable();
    return new al(i, t, n2);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, t) {
    return this.globalScopeCache.get(e, () => new Em(this.indexManager.allElements(e)));
  }
};
function Sm(r) {
  return typeof r.$comment == "string";
}
function ol(r) {
  return typeof r == "object" && !!r && ("$ref" in r || "$error" in r);
}
var Cm = class {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, t) {
    const n2 = t ?? {}, i = t == null ? void 0 : t.replacer, s = (o, l) => this.replacer(o, l, n2), a = i ? (o, l) => i(o, l, s) : s;
    try {
      return this.currentDocument = Ze(e), JSON.stringify(e, a, t == null ? void 0 : t.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, t) {
    const n2 = t ?? {}, i = JSON.parse(e);
    return this.linkNode(i, i, n2), i;
  }
  replacer(e, t, { refText: n2, sourceText: i, textRegions: s, comments: a, uriConverter: o }) {
    var l, u, c, d;
    if (!this.ignoreProperties.has(e))
      if (Ge(t)) {
        const f = t.ref, h = n2 ? t.$refText : void 0;
        if (f) {
          const m = Ze(f);
          let g = "";
          this.currentDocument && this.currentDocument !== m && (o ? g = o(m.uri, t) : g = m.uri.toString());
          const k = this.astNodeLocator.getAstNodePath(f);
          return {
            $ref: `${g}#${k}`,
            $refText: h
          };
        } else
          return {
            $error: (u = (l = t.error) === null || l === void 0 ? void 0 : l.message) !== null && u !== void 0 ? u : "Could not resolve reference",
            $refText: h
          };
      } else if (ae(t)) {
        let f;
        if (s && (f = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, t)), (!e || t.$document) && (f == null ? void 0 : f.$textRegion) && (f.$textRegion.documentURI = (c = this.currentDocument) === null || c === void 0 ? void 0 : c.uri.toString())), i && !e && (f ?? (f = Object.assign({}, t)), f.$sourceText = (d = t.$cstNode) === null || d === void 0 ? void 0 : d.text), a) {
          f ?? (f = Object.assign({}, t));
          const h = this.commentProvider.getComment(t);
          h && (f.$comment = h.replace(/\r/g, ""));
        }
        return f ?? t;
      } else
        return t;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const t = (n2) => ({
      offset: n2.offset,
      end: n2.end,
      length: n2.length,
      range: n2.range
    });
    if (e.$cstNode) {
      const n2 = e.$textRegion = t(e.$cstNode), i = n2.assignments = {};
      return Object.keys(e).filter((s) => !s.startsWith("$")).forEach((s) => {
        const a = Kd(e.$cstNode, s).map(t);
        a.length !== 0 && (i[s] = a);
      }), e;
    }
  }
  linkNode(e, t, n2, i, s, a) {
    for (const [l, u] of Object.entries(e))
      if (Array.isArray(u))
        for (let c = 0; c < u.length; c++) {
          const d = u[c];
          ol(d) ? u[c] = this.reviveReference(e, l, t, d, n2) : ae(d) && this.linkNode(d, t, n2, e, l, c);
        }
      else ol(u) ? e[l] = this.reviveReference(e, l, t, u, n2) : ae(u) && this.linkNode(u, t, n2, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = s, o.$containerIndex = a;
  }
  reviveReference(e, t, n2, i, s) {
    let a = i.$refText, o = i.$error;
    if (i.$ref) {
      const l = this.getRefNode(n2, i.$ref, s.uriConverter);
      if (ae(l))
        return a || (a = this.nameProvider.getName(l)), {
          $refText: a ?? "",
          ref: l
        };
      o = l;
    }
    if (o) {
      const l = {
        $refText: a ?? ""
      };
      return l.error = {
        container: e,
        property: t,
        message: o,
        reference: l
      }, l;
    } else
      return;
  }
  getRefNode(e, t, n2) {
    try {
      const i = t.indexOf("#");
      if (i === 0)
        return this.astNodeLocator.getAstNode(e, t.substring(1)) || "Could not resolve path: " + t;
      if (i < 0) {
        const l = n2 ? n2(t) : Rt.parse(t), u = this.langiumDocuments.getDocument(l);
        return u ? u.parseResult.value : "Could not find document for URI: " + t;
      }
      const s = n2 ? n2(t.substring(0, i)) : Rt.parse(t.substring(0, i)), a = this.langiumDocuments.getDocument(s);
      return a ? i === t.length - 1 ? a.parseResult.value : this.astNodeLocator.getAstNode(a.parseResult.value, t.substring(i + 1)) || "Could not resolve URI: " + t : "Could not find document for URI: " + t;
    } catch (i) {
      return String(i);
    }
  }
};
var Nm = class {
  /**
   * @deprecated Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e == null ? void 0 : e.workspace.TextDocuments;
  }
  register(e) {
    const t = e.LanguageMetaData;
    for (const n2 of t.fileExtensions)
      this.fileExtensionMap.has(n2) && console.warn(`The file extension ${n2} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(n2, e);
    this.languageIdMap.set(t.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
  }
  getServices(e) {
    var t, n2;
    if (this.singleton !== void 0)
      return this.singleton;
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const i = (n2 = (t = this.textDocuments) === null || t === void 0 ? void 0 : t.get(e)) === null || n2 === void 0 ? void 0 : n2.languageId;
    if (i !== void 0) {
      const o = this.languageIdMap.get(i);
      if (o)
        return o;
    }
    const s = nt.extname(e), a = this.fileExtensionMap.get(s);
    if (!a)
      throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
    return a;
  }
  hasServices(e) {
    try {
      return this.getServices(e), true;
    } catch {
      return false;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
};
function kr(r) {
  return { code: r };
}
var zn;
(function(r) {
  r.all = ["fast", "slow", "built-in"];
})(zn || (zn = {}));
var wm = class {
  constructor(e) {
    this.entries = new Wn(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  register(e, t = this, n2 = "fast") {
    if (n2 === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    for (const [i, s] of Object.entries(e)) {
      const a = s;
      if (Array.isArray(a))
        for (const o of a) {
          const l = {
            check: this.wrapValidationException(o, t),
            category: n2
          };
          this.addEntry(i, l);
        }
      else if (typeof a == "function") {
        const o = {
          check: this.wrapValidationException(a, t),
          category: n2
        };
        this.addEntry(i, o);
      } else
        Pr();
    }
  }
  wrapValidationException(e, t) {
    return async (n2, i, s) => {
      await this.handleException(() => e.call(t, n2, i, s), "An error occurred during validation", i, n2);
    };
  }
  async handleException(e, t, n2, i) {
    try {
      await e();
    } catch (s) {
      if (li(s))
        throw s;
      console.error(`${t}:`, s), s instanceof Error && s.stack && console.error(s.stack);
      const a = s instanceof Error ? s.message : String(s);
      n2("error", `${t}: ${a}`, { node: i });
    }
  }
  addEntry(e, t) {
    if (e === "AstNode") {
      this.entries.add("AstNode", t);
      return;
    }
    for (const n2 of this.reflection.getAllSubTypes(e))
      this.entries.add(n2, t);
  }
  getChecks(e, t) {
    let n2 = ee(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return t && (n2 = n2.filter((i) => t.includes(i.category))), n2.map((i) => i.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, t = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, t = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
  }
  wrapPreparationException(e, t, n2) {
    return async (i, s, a, o) => {
      await this.handleException(() => e.call(n2, i, s, a, o), t, s, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
};
var Lm = class {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e, t = {}, n2 = K.CancellationToken.None) {
    const i = e.parseResult, s = [];
    if (await $e(n2), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i, s, t), t.stopAfterLexingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.LexingError;
    }) || (this.processParsingErrors(i, s, t), t.stopAfterParsingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.ParsingError;
    })) || (this.processLinkingErrors(e, s, t), t.stopAfterLinkingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.LinkingError;
    }))))
      return s;
    try {
      s.push(...await this.validateAst(i.value, t, n2));
    } catch (a) {
      if (li(a))
        throw a;
      console.error("An error occurred during validation:", a);
    }
    return await $e(n2), s;
  }
  processLexingErrors(e, t, n2) {
    var i, s, a;
    const o = [...e.lexerErrors, ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []];
    for (const l of o) {
      const u = (a = l.severity) !== null && a !== void 0 ? a : "error", c = {
        severity: Si(u),
        range: {
          start: {
            line: l.line - 1,
            character: l.column - 1
          },
          end: {
            line: l.line - 1,
            character: l.column + l.length - 1
          }
        },
        message: l.message,
        data: Om(u),
        source: this.getSource()
      };
      t.push(c);
    }
  }
  processParsingErrors(e, t, n2) {
    for (const i of e.parserErrors) {
      let s;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          const a = i.previousToken;
          if (isNaN(a.startOffset)) {
            const o = { line: 0, character: 0 };
            s = { start: o, end: o };
          } else {
            const o = { line: a.endLine - 1, character: a.endColumn };
            s = { start: o, end: o };
          }
        }
      } else
        s = is(i.token);
      if (s) {
        const a = {
          severity: Si("error"),
          range: s,
          message: i.message,
          data: kr(Oe.ParsingError),
          source: this.getSource()
        };
        t.push(a);
      }
    }
  }
  processLinkingErrors(e, t, n2) {
    for (const i of e.references) {
      const s = i.error;
      if (s) {
        const a = {
          node: s.container,
          property: s.property,
          index: s.index,
          data: {
            code: Oe.LinkingError,
            containerType: s.container.$type,
            property: s.property,
            refText: s.reference.$refText
          }
        };
        t.push(this.toDiagnostic("error", s.message, a));
      }
    }
  }
  async validateAst(e, t, n2 = K.CancellationToken.None) {
    const i = [], s = (a, o, l) => {
      i.push(this.toDiagnostic(a, o, l));
    };
    return await this.validateAstBefore(e, t, s, n2), await this.validateAstNodes(e, t, s, n2), await this.validateAstAfter(e, t, s, n2), i;
  }
  async validateAstBefore(e, t, n2, i = K.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksBefore;
    for (const o of a)
      await $e(i), await o(e, n2, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, t, n2, i = K.CancellationToken.None) {
    await Promise.all(wt(e).map(async (s) => {
      await $e(i);
      const a = this.validationRegistry.getChecks(s.$type, t.categories);
      for (const o of a)
        await o(s, n2, i);
    }));
  }
  async validateAstAfter(e, t, n2, i = K.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksAfter;
    for (const o of a)
      await $e(i), await o(e, n2, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, t, n2) {
    return {
      message: t,
      range: bm(n2),
      severity: Si(e),
      code: n2.code,
      codeDescription: n2.codeDescription,
      tags: n2.tags,
      relatedInformation: n2.relatedInformation,
      data: n2.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
};
function bm(r) {
  if (r.range)
    return r.range;
  let e;
  return typeof r.property == "string" ? e = zl(r.node.$cstNode, r.property, r.index) : typeof r.keyword == "string" && (e = Vd(r.node.$cstNode, r.keyword, r.index)), e ?? (e = r.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function Si(r) {
  switch (r) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + r);
  }
}
function Om(r) {
  switch (r) {
    case "error":
      return kr(Oe.LexingError);
    case "warning":
      return kr(Oe.LexingWarning);
    case "info":
      return kr(Oe.LexingInfo);
    case "hint":
      return kr(Oe.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + r);
  }
}
var Oe;
(function(r) {
  r.LexingError = "lexing-error", r.LexingWarning = "lexing-warning", r.LexingInfo = "lexing-info", r.LexingHint = "lexing-hint", r.ParsingError = "parsing-error", r.LinkingError = "linking-error";
})(Oe || (Oe = {}));
var _m = class {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, t, n2) {
    const i = n2 ?? Ze(e);
    t ?? (t = this.nameProvider.getName(e));
    const s = this.astNodeLocator.getAstNodePath(e);
    if (!t)
      throw new Error(`Node at path ${s} has no name.`);
    let a;
    const o = () => {
      var l;
      return a ?? (a = Sn((l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    };
    return {
      node: e,
      name: t,
      get nameSegment() {
        return o();
      },
      selectionSegment: Sn(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
};
var Pm = class {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, t = K.CancellationToken.None) {
    const n2 = [], i = e.parseResult.value;
    for (const s of wt(i))
      await $e(t), Kl(s).filter((a) => !dn(a)).forEach((a) => {
        const o = this.createDescription(a);
        o && n2.push(o);
      });
    return n2;
  }
  createDescription(e) {
    const t = e.reference.$nodeDescription, n2 = e.reference.$refNode;
    if (!t || !n2)
      return;
    const i = Ze(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: this.nodeLocator.getAstNodePath(e.container),
      targetUri: t.documentUri,
      targetPath: t.path,
      segment: Sn(n2),
      local: nt.equals(t.documentUri, i)
    };
  }
};
var Mm = class {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const t = this.getAstNodePath(e.$container), n2 = this.getPathSegment(e);
      return t + this.segmentSeparator + n2;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: t }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return t !== void 0 ? e + this.indexSeparator + t : e;
  }
  getAstNode(e, t) {
    return t.split(this.segmentSeparator).reduce((n2, i) => {
      var _a3;
      if (!n2 || i.length === 0)
        return n2;
      const s = i.indexOf(this.indexSeparator);
      if (s > 0) {
        const a = i.substring(0, s), o = parseInt(i.substring(s + 1));
        return (_a3 = n2[a]) == null ? void 0 : _a3[o];
      }
      return n2[i];
    }, e);
  }
};
var Dm = ec();
var Fm = class {
  constructor(e) {
    this._ready = new ua(), this.settings = {}, this.workspaceConfig = false, this.onConfigurationSectionUpdateEmitter = new Dm.Emitter(), this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var t, n2;
    this.workspaceConfig = (n2 = (t = e.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !== null && n2 !== void 0 ? n2 : false;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const t = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: t.map((n2) => this.toSectionName(n2.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const t = this.serviceRegistry.all.map((i) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(i.LanguageMetaData.languageId)
        })), n2 = await e.fetchConfiguration(t);
        t.forEach((i, s) => {
          this.updateSectionConfiguration(i.section, n2[s]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    e.settings && Object.keys(e.settings).forEach((t) => {
      const n2 = e.settings[t];
      this.updateSectionConfiguration(t, n2), this.onConfigurationSectionUpdateEmitter.fire({ section: t, configuration: n2 });
    });
  }
  updateSectionConfiguration(e, t) {
    this.settings[e] = t;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, t) {
    await this.ready;
    const n2 = this.toSectionName(e);
    if (this.settings[n2])
      return this.settings[n2][t];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
};
var Nr;
(function(r) {
  function e(t) {
    return {
      dispose: async () => await t()
    };
  }
  r.create = e;
})(Nr || (Nr = {}));
var Um = class {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new Wn(), this.documentPhaseListeners = new Wn(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = U.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, t = {}, n2 = K.CancellationToken.None) {
    var i, s;
    for (const a of e) {
      const o = a.uri.toString();
      if (a.state === U.Validated) {
        if (typeof t.validation == "boolean" && t.validation)
          a.state = U.IndexedReferences, a.diagnostics = void 0, this.buildState.delete(o);
        else if (typeof t.validation == "object") {
          const l = this.buildState.get(o), u = (i = l == null ? void 0 : l.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (u) {
            const c = ((s = t.validation.categories) !== null && s !== void 0 ? s : zn.all).filter((d) => !u.includes(d));
            c.length > 0 && (this.buildState.set(o, {
              completed: false,
              options: {
                validation: Object.assign(Object.assign({}, t.validation), { categories: c })
              },
              result: l.result
            }), a.state = U.IndexedReferences);
          }
        }
      } else
        this.buildState.delete(o);
    }
    this.currentState = U.Changed, await this.emitUpdate(e.map((a) => a.uri), []), await this.buildDocuments(e, t, n2);
  }
  async update(e, t, n2 = K.CancellationToken.None) {
    this.currentState = U.Changed;
    for (const a of t)
      this.langiumDocuments.deleteDocument(a), this.buildState.delete(a.toString()), this.indexManager.remove(a);
    for (const a of e) {
      if (!this.langiumDocuments.invalidateDocument(a)) {
        const o = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, a);
        o.state = U.Changed, this.langiumDocuments.addDocument(o);
      }
      this.buildState.delete(a.toString());
    }
    const i = ee(e).concat(t).map((a) => a.toString()).toSet();
    this.langiumDocuments.all.filter((a) => !i.has(a.uri.toString()) && this.shouldRelink(a, i)).forEach((a) => {
      this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a), a.state = Math.min(a.state, U.ComputedScopes), a.diagnostics = void 0;
    }), await this.emitUpdate(e, t), await $e(n2);
    const s = this.sortDocuments(this.langiumDocuments.all.filter((a) => {
      var o;
      return a.state < U.Linked || !(!((o = this.buildState.get(a.uri.toString())) === null || o === void 0) && o.completed);
    }).toArray());
    await this.buildDocuments(s, this.updateBuildOptions, n2);
  }
  async emitUpdate(e, t) {
    await Promise.all(this.updateListeners.map((n2) => n2(e, t)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let t = 0, n2 = e.length - 1;
    for (; t < n2; ) {
      for (; t < e.length && this.hasTextDocument(e[t]); )
        t++;
      for (; n2 >= 0 && !this.hasTextDocument(e[n2]); )
        n2--;
      t < n2 && ([e[t], e[n2]] = [e[n2], e[t]]);
    }
    return e;
  }
  hasTextDocument(e) {
    var t;
    return !!(!((t = this.textDocuments) === null || t === void 0) && t.get(e.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, t) {
    return e.references.some((n2) => n2.error !== void 0) ? true : this.indexManager.isAffected(e, t);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), Nr.create(() => {
      const t = this.updateListeners.indexOf(e);
      t >= 0 && this.updateListeners.splice(t, 1);
    });
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, t, n2) {
    this.prepareBuild(e, t), await this.runCancelable(e, U.Parsed, n2, (s) => this.langiumDocumentFactory.update(s, n2)), await this.runCancelable(e, U.IndexedContent, n2, (s) => this.indexManager.updateContent(s, n2)), await this.runCancelable(e, U.ComputedScopes, n2, async (s) => {
      const a = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await a.computeLocalScopes(s, n2);
    }), await this.runCancelable(e, U.Linked, n2, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, n2)), await this.runCancelable(e, U.IndexedReferences, n2, (s) => this.indexManager.updateReferences(s, n2));
    const i = e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, U.Validated, n2, (s) => this.validate(s, n2));
    for (const s of e) {
      const a = this.buildState.get(s.uri.toString());
      a && (a.completed = true);
    }
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, t) {
    for (const n2 of e) {
      const i = n2.uri.toString(), s = this.buildState.get(i);
      (!s || s.completed) && this.buildState.set(i, {
        completed: false,
        options: t,
        result: s == null ? void 0 : s.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, t, n2, i) {
    const s = e.filter((o) => o.state < t);
    for (const o of s)
      await $e(n2), await i(o), o.state = t, await this.notifyDocumentPhase(o, t, n2);
    const a = e.filter((o) => o.state === t);
    await this.notifyBuildPhase(a, t, n2), this.currentState = t;
  }
  onBuildPhase(e, t) {
    return this.buildPhaseListeners.add(e, t), Nr.create(() => {
      this.buildPhaseListeners.delete(e, t);
    });
  }
  onDocumentPhase(e, t) {
    return this.documentPhaseListeners.add(e, t), Nr.create(() => {
      this.documentPhaseListeners.delete(e, t);
    });
  }
  waitUntil(e, t, n2) {
    let i;
    if (t && "path" in t ? i = t : n2 = t, n2 ?? (n2 = K.CancellationToken.None), i) {
      const s = this.langiumDocuments.getDocument(i);
      if (s && s.state > e)
        return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : n2.isCancellationRequested ? Promise.reject(Hn) : new Promise((s, a) => {
      const o = this.onBuildPhase(e, () => {
        if (o.dispose(), l.dispose(), i) {
          const u = this.langiumDocuments.getDocument(i);
          s(u == null ? void 0 : u.uri);
        } else
          s(void 0);
      }), l = n2.onCancellationRequested(() => {
        o.dispose(), l.dispose(), a(Hn);
      });
    });
  }
  async notifyDocumentPhase(e, t, n2) {
    const i = this.documentPhaseListeners.get(t).slice();
    for (const s of i)
      try {
        await s(e, n2);
      } catch (a) {
        if (!li(a))
          throw a;
      }
  }
  async notifyBuildPhase(e, t, n2) {
    if (e.length === 0)
      return;
    const i = this.buildPhaseListeners.get(t).slice();
    for (const s of i)
      await $e(n2), await s(e, n2);
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, t) {
    var n2, i;
    const s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, a = this.getBuildOptions(e).validation, o = typeof a == "object" ? a : void 0, l = await s.validateDocument(e, o, t);
    e.diagnostics ? e.diagnostics.push(...l) : e.diagnostics = l;
    const u = this.buildState.get(e.uri.toString());
    if (u) {
      (n2 = u.result) !== null && n2 !== void 0 || (u.result = {});
      const c = (i = o == null ? void 0 : o.categories) !== null && i !== void 0 ? i : zn.all;
      u.result.validationChecks ? u.result.validationChecks.push(...c) : u.result.validationChecks = [...c];
    }
  }
  getBuildOptions(e) {
    var t, n2;
    return (n2 = (t = this.buildState.get(e.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && n2 !== void 0 ? n2 : {};
  }
};
var Gm = class {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new km(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, t) {
    const n2 = Ze(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((a) => {
        nt.equals(a.targetUri, n2) && a.targetPath === t && i.push(a);
      });
    }), ee(i);
  }
  allElements(e, t) {
    let n2 = ee(this.symbolIndex.keys());
    return t && (n2 = n2.filter((i) => !t || t.has(i))), n2.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, t) {
    var n2;
    return t ? this.symbolByTypeIndex.get(e, t, () => {
      var i;
      return ((i = this.symbolIndex.get(e)) !== null && i !== void 0 ? i : []).filter((s) => this.astReflection.isSubtype(s.type, t));
    }) : (n2 = this.symbolIndex.get(e)) !== null && n2 !== void 0 ? n2 : [];
  }
  remove(e) {
    const t = e.toString();
    this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t);
  }
  async updateContent(e, t = K.CancellationToken.None) {
    const n2 = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, t), i = e.uri.toString();
    this.symbolIndex.set(i, n2), this.symbolByTypeIndex.clear(i);
  }
  async updateReferences(e, t = K.CancellationToken.None) {
    const n2 = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
    this.referenceIndex.set(e.uri.toString(), n2);
  }
  isAffected(e, t) {
    const n2 = this.referenceIndex.get(e.uri.toString());
    return n2 ? n2.some((i) => !i.local && t.has(i.targetUri.toString())) : false;
  }
};
var Bm = class {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new ua(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    var t;
    this.folders = (t = e.workspaceFolders) !== null && t !== void 0 ? t : void 0;
  }
  initialized(e) {
    return this.mutex.write((t) => {
      var n2;
      return this.initializeWorkspace((n2 = this.folders) !== null && n2 !== void 0 ? n2 : [], t);
    });
  }
  async initializeWorkspace(e, t = K.CancellationToken.None) {
    const n2 = await this.performStartup(e);
    await $e(t), await this.documentBuilder.build(n2, this.initialBuildOptions, t);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const t = this.serviceRegistry.all.flatMap((s) => s.LanguageMetaData.fileExtensions), n2 = [], i = (s) => {
      n2.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    };
    return await this.loadAdditionalDocuments(e, i), await Promise.all(e.map((s) => [s, this.getRootFolder(s)]).map(async (s) => this.traverseFolder(...s, t, i))), this._ready.resolve(), n2;
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, t) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return Rt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the collector.
   */
  async traverseFolder(e, t, n2, i) {
    const s = await this.fileSystemProvider.readDirectory(t);
    await Promise.all(s.map(async (a) => {
      if (this.includeEntry(e, a, n2)) {
        if (a.isDirectory)
          await this.traverseFolder(e, a.uri, n2, i);
        else if (a.isFile) {
          const o = await this.langiumDocuments.getOrCreateDocument(a.uri);
          i(o);
        }
      }
    }));
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  includeEntry(e, t, n2) {
    const i = nt.basename(t.uri);
    if (i.startsWith("."))
      return false;
    if (t.isDirectory)
      return i !== "node_modules" && i !== "out";
    if (t.isFile) {
      const s = nt.extname(t.uri);
      return n2.includes(s);
    }
    return false;
  }
};
var Km = class {
  buildUnexpectedCharactersMessage(e, t, n2, i, s) {
    return cs.buildUnexpectedCharactersMessage(e, t, n2, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return cs.buildUnableToPopLexerModeMessage(e);
  }
};
var Vm = { mode: "full" };
var jm = class {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const t = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(t);
    const n2 = ll(t) ? Object.values(t) : t, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new fe(n2, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, t = Vm) {
    var n2, i, s;
    const a = this.chevrotainLexer.tokenize(e);
    return {
      tokens: a.tokens,
      errors: a.errors,
      hidden: (n2 = a.groups.hidden) !== null && n2 !== void 0 ? n2 : [],
      report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if (ll(e))
      return e;
    const t = sc(e) ? Object.values(e.modes).flat() : e, n2 = {};
    return t.forEach((i) => n2[i.name] = i), n2;
  }
};
function Hm(r) {
  return Array.isArray(r) && (r.length === 0 || "name" in r[0]);
}
function sc(r) {
  return r && "modes" in r && "defaultMode" in r;
}
function ll(r) {
  return !Hm(r) && !sc(r);
}
function Wm(r, e, t) {
  let n2, i;
  typeof r == "string" ? (i = e, n2 = t) : (i = r.range.start, n2 = e), i || (i = P.create(0, 0));
  const s = ac(r), a = ca(n2), o = qm({
    lines: s,
    position: i,
    options: a
  });
  return eg({
    index: 0,
    tokens: o,
    position: i
  });
}
function zm(r, e) {
  const t = ca(e), n2 = ac(r);
  if (n2.length === 0)
    return false;
  const i = n2[0], s = n2[n2.length - 1], a = t.start, o = t.end;
  return !!(a == null ? void 0 : a.exec(i)) && !!(o == null ? void 0 : o.exec(s));
}
function ac(r) {
  let e = "";
  return typeof r == "string" ? e = r : e = r.text, e.split(wd);
}
var ul = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy;
var Ym = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function qm(r) {
  var e, t, n2;
  const i = [];
  let s = r.position.line, a = r.position.character;
  for (let o = 0; o < r.lines.length; o++) {
    const l = o === 0, u = o === r.lines.length - 1;
    let c = r.lines[o], d = 0;
    if (l && r.options.start) {
      const f = (e = r.options.start) === null || e === void 0 ? void 0 : e.exec(c);
      f && (d = f.index + f[0].length);
    } else {
      const f = (t = r.options.line) === null || t === void 0 ? void 0 : t.exec(c);
      f && (d = f.index + f[0].length);
    }
    if (u) {
      const f = (n2 = r.options.end) === null || n2 === void 0 ? void 0 : n2.exec(c);
      f && (c = c.substring(0, f.index));
    }
    if (c = c.substring(0, Zm(c)), Ms(c, d) >= c.length) {
      if (i.length > 0) {
        const f = P.create(s, a);
        i.push({
          type: "break",
          content: "",
          range: _.create(f, f)
        });
      }
    } else {
      ul.lastIndex = d;
      const f = ul.exec(c);
      if (f) {
        const h = f[0], m = f[1], g = P.create(s, a + d), k = P.create(s, a + d + h.length);
        i.push({
          type: "tag",
          content: m,
          range: _.create(g, k)
        }), d += h.length, d = Ms(c, d);
      }
      if (d < c.length) {
        const h = c.substring(d), m = Array.from(h.matchAll(Ym));
        i.push(...Xm(m, h, s, a + d));
      }
    }
    s++, a = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
function Xm(r, e, t, n2) {
  const i = [];
  if (r.length === 0) {
    const s = P.create(t, n2), a = P.create(t, n2 + e.length);
    i.push({
      type: "text",
      content: e,
      range: _.create(s, a)
    });
  } else {
    let s = 0;
    for (const o of r) {
      const l = o.index, u = e.substring(s, l);
      u.length > 0 && i.push({
        type: "text",
        content: e.substring(s, l),
        range: _.create(P.create(t, s + n2), P.create(t, l + n2))
      });
      let c = u.length + 1;
      const d = o[1];
      if (i.push({
        type: "inline-tag",
        content: d,
        range: _.create(P.create(t, s + c + n2), P.create(t, s + c + d.length + n2))
      }), c += d.length, o.length === 4) {
        c += o[2].length;
        const f = o[3];
        i.push({
          type: "text",
          content: f,
          range: _.create(P.create(t, s + c + n2), P.create(t, s + c + f.length + n2))
        });
      } else
        i.push({
          type: "text",
          content: "",
          range: _.create(P.create(t, s + c + n2), P.create(t, s + c + n2))
        });
      s = l + o[0].length;
    }
    const a = e.substring(s);
    a.length > 0 && i.push({
      type: "text",
      content: a,
      range: _.create(P.create(t, s + n2), P.create(t, s + n2 + a.length))
    });
  }
  return i;
}
var Qm = /\S/;
var Jm = /\s*$/;
function Ms(r, e) {
  const t = r.substring(e).match(Qm);
  return t ? e + t.index : r.length;
}
function Zm(r) {
  const e = r.match(Jm);
  if (e && typeof e.index == "number")
    return e.index;
}
function eg(r) {
  var e, t, n2, i;
  const s = P.create(r.position.line, r.position.character);
  if (r.tokens.length === 0)
    return new cl([], _.create(s, s));
  const a = [];
  for (; r.index < r.tokens.length; ) {
    const u = tg(r, a[a.length - 1]);
    u && a.push(u);
  }
  const o = (t = (e = a[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0 ? t : s, l = (i = (n2 = a[a.length - 1]) === null || n2 === void 0 ? void 0 : n2.range.end) !== null && i !== void 0 ? i : s;
  return new cl(a, _.create(o, l));
}
function tg(r, e) {
  const t = r.tokens[r.index];
  if (t.type === "tag")
    return lc(r, false);
  if (t.type === "text" || t.type === "inline-tag")
    return oc(r);
  rg(t, e), r.index++;
}
function rg(r, e) {
  if (e) {
    const t = new cc("", r.range);
    "inlines" in e ? e.inlines.push(t) : e.content.inlines.push(t);
  }
}
function oc(r) {
  let e = r.tokens[r.index];
  const t = e;
  let n2 = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(ng(r)), n2 = e, e = r.tokens[r.index];
  return new Ds(i, _.create(t.range.start, n2.range.end));
}
function ng(r) {
  return r.tokens[r.index].type === "inline-tag" ? lc(r, true) : uc(r);
}
function lc(r, e) {
  var _a3;
  const t = r.tokens[r.index++], n2 = t.content.substring(1);
  if (((_a3 = r.tokens[r.index]) == null ? void 0 : _a3.type) === "text")
    if (e) {
      const s = uc(r);
      return new Ni(n2, new Ds([s], s.range), e, _.create(t.range.start, s.range.end));
    } else {
      const s = oc(r);
      return new Ni(n2, s, e, _.create(t.range.start, s.range.end));
    }
  else {
    const s = t.range;
    return new Ni(n2, new Ds([], s), e, s);
  }
}
function uc(r) {
  const e = r.tokens[r.index++];
  return new cc(e.content, e.range);
}
function ca(r) {
  if (!r)
    return ca({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: t, line: n2 } = r;
  return {
    start: Ci(e, true),
    end: Ci(t, false),
    line: Ci(n2, true)
  };
}
function Ci(r, e) {
  if (typeof r == "string" || typeof r == "object") {
    const t = typeof r == "string" ? ei(r) : r.source;
    return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`);
  } else
    return r;
}
var cl = class {
  constructor(e, t) {
    this.elements = e, this.range = t;
  }
  getTag(e) {
    return this.getAllTags().find((t) => t.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((t) => t.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const t of this.elements)
      if (e.length === 0)
        e = t.toString();
      else {
        const n2 = t.toString();
        e += dl(e) + n2;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let t = "";
    for (const n2 of this.elements)
      if (t.length === 0)
        t = n2.toMarkdown(e);
      else {
        const i = n2.toMarkdown(e);
        t += dl(t) + i;
      }
    return t.trim();
  }
};
var Ni = class {
  constructor(e, t, n2, i) {
    this.name = e, this.content = t, this.inline = n2, this.range = i;
  }
  toString() {
    let e = `@${this.name}`;
    const t = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var t, n2;
    return (n2 = (t = e == null ? void 0 : e.renderTag) === null || t === void 0 ? void 0 : t.call(e, this)) !== null && n2 !== void 0 ? n2 : this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const t = this.content.toMarkdown(e);
    if (this.inline) {
      const s = ig2(this.name, t, e ?? {});
      if (typeof s == "string")
        return s;
    }
    let n2 = "";
    (e == null ? void 0 : e.tag) === "italic" || (e == null ? void 0 : e.tag) === void 0 ? n2 = "*" : (e == null ? void 0 : e.tag) === "bold" ? n2 = "**" : (e == null ? void 0 : e.tag) === "bold-italic" && (n2 = "***");
    let i = `${n2}@${this.name}${n2}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${t}` : this.content.inlines.length > 1 && (i = `${i}
${t}`), this.inline ? `{${i}}` : i;
  }
};
function ig2(r, e, t) {
  var n2, i;
  if (r === "linkplain" || r === "linkcode" || r === "link") {
    const s = e.indexOf(" ");
    let a = e;
    if (s > 0) {
      const o = Ms(e, s);
      a = e.substring(o), e = e.substring(0, s);
    }
    return (r === "linkcode" || r === "link" && t.link === "code") && (a = `\`${a}\``), (i = (n2 = t.renderLink) === null || n2 === void 0 ? void 0 : n2.call(t, e, a)) !== null && i !== void 0 ? i : sg2(e, a);
  }
}
function sg2(r, e) {
  try {
    return Rt.parse(r, true), `[${e}](${r})`;
  } catch {
    return r;
  }
}
var Ds = class {
  constructor(e, t) {
    this.inlines = e, this.range = t;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.inlines.length; t++) {
      const n2 = this.inlines[t], i = this.inlines[t + 1];
      e += n2.toString(), i && i.range.start.line > n2.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let t = "";
    for (let n2 = 0; n2 < this.inlines.length; n2++) {
      const i = this.inlines[n2], s = this.inlines[n2 + 1];
      t += i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (t += `
`);
    }
    return t;
  }
};
var cc = class {
  constructor(e, t) {
    this.text = e, this.range = t;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
};
function dl(r) {
  return r.endsWith(`
`) ? `
` : `

`;
}
var ag = class {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const t = this.commentProvider.getComment(e);
    if (t && zm(t))
      return Wm(t).toMarkdown({
        renderLink: (n2, i) => this.documentationLinkRenderer(e, n2, i),
        renderTag: (n2) => this.documentationTagRenderer(e, n2)
      });
  }
  documentationLinkRenderer(e, t, n2) {
    var i;
    const s = (i = this.findNameInPrecomputedScopes(e, t)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, t);
    if (s && s.nameSegment) {
      const a = s.nameSegment.range.start.line + 1, o = s.nameSegment.range.start.character + 1, l = s.documentUri.with({ fragment: `L${a},${o}` });
      return `[${n2}](${l.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, t) {
  }
  findNameInPrecomputedScopes(e, t) {
    const n2 = Ze(e).precomputedScopes;
    if (!n2)
      return;
    let i = e;
    do {
      const s = n2.get(i).find((a) => a.name === t);
      if (s)
        return s;
      i = i.$container;
    } while (i);
  }
  findNameInGlobalScope(e, t) {
    return this.indexManager.allElements().find((n2) => n2.name === t);
  }
};
var og = class {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var t;
    return Sm(e) ? e.$comment : (t = ad(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
  }
};
var lg = class {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, t) {
    return Promise.resolve(this.syncParser.parse(e));
  }
};
var ug = class {
  constructor() {
    this.previousTokenSource = new K.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = true;
  }
  write(e) {
    this.cancelWrite();
    const t = hm();
    return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, t, n2 = K.CancellationToken.None) {
    const i = new ua(), s = {
      action: t,
      deferred: i,
      cancellationToken: n2
    };
    return e.push(s), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = false, await Promise.all(e.map(async ({ action: t, deferred: n2, cancellationToken: i }) => {
      try {
        const s = await Promise.resolve().then(() => t(i));
        n2.resolve(s);
      } catch (s) {
        li(s) ? n2.resolve(void 0) : n2.reject(s);
      }
    })), this.done = true, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
};
var cg = class {
  constructor(e) {
    this.grammarElementIdMap = new sl(), this.tokenTypeIdMap = new sl(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((t) => Object.assign(Object.assign({}, t), { message: t.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const t = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (const i of wt(e))
      t.set(i, {});
    if (e.$cstNode)
      for (const i of ns(e.$cstNode))
        n2.set(i, {});
    return {
      astNodes: t,
      cstNodes: n2
    };
  }
  dehydrateAstNode(e, t) {
    const n2 = t.astNodes.get(e);
    n2.$type = e.$type, n2.$containerIndex = e.$containerIndex, n2.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (n2.$cstNode = this.dehydrateCstNode(e.$cstNode, t));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          n2[i] = a;
          for (const o of s)
            ae(o) ? a.push(this.dehydrateAstNode(o, t)) : Ge(o) ? a.push(this.dehydrateReference(o, t)) : a.push(o);
        } else ae(s) ? n2[i] = this.dehydrateAstNode(s, t) : Ge(s) ? n2[i] = this.dehydrateReference(s, t) : s !== void 0 && (n2[i] = s);
    return n2;
  }
  dehydrateReference(e, t) {
    const n2 = {};
    return n2.$refText = e.$refText, e.$refNode && (n2.$refNode = t.cstNodes.get(e.$refNode)), n2;
  }
  dehydrateCstNode(e, t) {
    const n2 = t.cstNodes.get(e);
    return _l(e) ? n2.fullText = e.fullText : n2.grammarSource = this.getGrammarElementId(e.grammarSource), n2.hidden = e.hidden, n2.astNode = t.astNodes.get(e.astNode), Lr(e) ? n2.content = e.content.map((i) => this.dehydrateCstNode(i, t)) : Ol(e) && (n2.tokenType = e.tokenType.name, n2.offset = e.offset, n2.length = e.length, n2.startLine = e.range.start.line, n2.startColumn = e.range.start.character, n2.endLine = e.range.end.line, n2.endColumn = e.range.end.character), n2;
  }
  hydrate(e) {
    const t = e.value, n2 = this.createHydrationContext(t);
    return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, n2), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(t, n2)
    };
  }
  createHydrationContext(e) {
    const t = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (const s of wt(e))
      t.set(s, {});
    let i;
    if (e.$cstNode)
      for (const s of ns(e.$cstNode)) {
        let a;
        "fullText" in s ? (a = new Vu(s.fullText), i = a) : "content" in s ? a = new oa() : "tokenType" in s && (a = this.hydrateCstLeafNode(s)), a && (n2.set(s, a), a.root = i);
      }
    return {
      astNodes: t,
      cstNodes: n2
    };
  }
  hydrateAstNode(e, t) {
    const n2 = t.astNodes.get(e);
    n2.$type = e.$type, n2.$containerIndex = e.$containerIndex, n2.$containerProperty = e.$containerProperty, e.$cstNode && (n2.$cstNode = t.cstNodes.get(e.$cstNode));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          n2[i] = a;
          for (const o of s)
            ae(o) ? a.push(this.setParent(this.hydrateAstNode(o, t), n2)) : Ge(o) ? a.push(this.hydrateReference(o, n2, i, t)) : a.push(o);
        } else ae(s) ? n2[i] = this.setParent(this.hydrateAstNode(s, t), n2) : Ge(s) ? n2[i] = this.hydrateReference(s, n2, i, t) : s !== void 0 && (n2[i] = s);
    return n2;
  }
  setParent(e, t) {
    return e.$container = t, e;
  }
  hydrateReference(e, t, n2, i) {
    return this.linker.buildReference(t, n2, i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, t, n2 = 0) {
    const i = t.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = t.astNodes.get(e.astNode), Lr(i))
      for (const s of e.content) {
        const a = this.hydrateCstNode(s, t, n2++);
        i.content.push(a);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const t = this.getTokenType(e.tokenType), n2 = e.offset, i = e.length, s = e.startLine, a = e.startColumn, o = e.endLine, l = e.endColumn, u = e.hidden;
    return new Ls(n2, i, {
      start: {
        line: s,
        character: a
      },
      end: {
        line: o,
        character: l
      }
    }, t, u);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const t of wt(this.grammar))
      ld(t) && this.grammarElementIdMap.set(t, e++);
  }
};
function at(r) {
  return {
    documentation: {
      CommentProvider: (e) => new og(e),
      DocumentationProvider: (e) => new ag(e)
    },
    parser: {
      AsyncParser: (e) => new lg(e),
      GrammarConfig: (e) => Zd(e),
      LangiumParser: (e) => om(e),
      CompletionParser: (e) => am(e),
      ValueConverter: () => new Ju(),
      TokenBuilder: () => new Qu(),
      Lexer: (e) => new jm(e),
      ParserErrorMessageProvider: () => new Wu(),
      LexerErrorMessageProvider: () => new Km()
    },
    workspace: {
      AstNodeLocator: () => new Mm(),
      AstNodeDescriptionProvider: (e) => new _m(e),
      ReferenceDescriptionProvider: (e) => new Pm(e)
    },
    references: {
      Linker: (e) => new ym(e),
      NameProvider: () => new vm(),
      ScopeProvider: (e) => new Im(e),
      ScopeComputation: (e) => new $m(e),
      References: (e) => new Rm(e)
    },
    serializer: {
      Hydrator: (e) => new cg(e),
      JsonSerializer: (e) => new Cm(e)
    },
    validation: {
      DocumentValidator: (e) => new Lm(e),
      ValidationRegistry: (e) => new wm(e)
    },
    shared: () => r.shared
  };
}
function ot(r) {
  return {
    ServiceRegistry: (e) => new Nm(e),
    workspace: {
      LangiumDocuments: (e) => new gm(e),
      LangiumDocumentFactory: (e) => new mm(e),
      DocumentBuilder: (e) => new Um(e),
      IndexManager: (e) => new Gm(e),
      WorkspaceManager: (e) => new Bm(e),
      FileSystemProvider: (e) => r.fileSystemProvider(e),
      WorkspaceLock: () => new ug(),
      ConfigurationProvider: (e) => new Fm(e)
    }
  };
}
var fl;
(function(r) {
  r.merge = (e, t) => Yn(Yn({}, e), t);
})(fl || (fl = {}));
function oe(r, e, t, n2, i, s, a, o, l) {
  const u = [r, e, t, n2, i, s, a, o, l].reduce(Yn, {});
  return dc(u);
}
var dg = Symbol("isProxy");
function dc(r, e) {
  const t = new Proxy({}, {
    deleteProperty: () => false,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (n2, i) => i === dg ? true : pl(n2, i, r, e || t),
    getOwnPropertyDescriptor: (n2, i) => (pl(n2, i, r, e || t), Object.getOwnPropertyDescriptor(n2, i)),
    // used by for..in
    has: (n2, i) => i in r,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(r)]
    // used by for..in
  });
  return t;
}
var hl = Symbol();
function pl(r, e, t, n2) {
  if (e in r) {
    if (r[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: r[e] });
    if (r[e] === hl)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return r[e];
  } else if (e in t) {
    const i = t[e];
    r[e] = hl;
    try {
      r[e] = typeof i == "function" ? i(n2) : dc(i, n2);
    } catch (s) {
      throw r[e] = s instanceof Error ? s : void 0, s;
    }
    return r[e];
  } else
    return;
}
function Yn(r, e) {
  if (e) {
    for (const [t, n2] of Object.entries(e))
      if (n2 !== void 0) {
        const i = r[t];
        i !== null && n2 !== null && typeof i == "object" && typeof n2 == "object" ? r[t] = Yn(i, n2) : r[t] = n2;
      }
  }
  return r;
}
var fg = class {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
};
var lt = {
  fileSystemProvider: () => new fg()
};
var hg = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: false,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
};
var pg = {
  AstReflection: () => new Bl()
};
function mg() {
  const r = oe(ot(lt), pg), e = oe(at({ shared: r }), hg);
  return r.ServiceRegistry.register(e), e;
}
function kt(r) {
  var e;
  const t = mg(), n2 = t.serializer.JsonSerializer.deserialize(r);
  return t.shared.workspace.LangiumDocumentFactory.fromModel(n2, Rt.parse(`memory://${(e = n2.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), n2;
}
var gg = Object.defineProperty;
var v = (r, e) => gg(r, "name", { value: e, configurable: true });
var ml = "Statement";
var vn = "Architecture";
function yg(r) {
  return De.isInstance(r, vn);
}
v(yg, "isArchitecture");
var nn = "Axis";
var xr = "Branch";
function Tg(r) {
  return De.isInstance(r, xr);
}
v(Tg, "isBranch");
var sn = "Checkout";
var an = "CherryPicking";
var wi = "ClassDefStatement";
var Ir = "Commit";
function vg(r) {
  return De.isInstance(r, Ir);
}
v(vg, "isCommit");
var Li = "Curve";
var bi = "Edge";
var Oi = "Entry";
var Sr = "GitGraph";
function Rg(r) {
  return De.isInstance(r, Sr);
}
v(Rg, "isGitGraph");
var _i = "Group";
var Rn = "Info";
function $g(r) {
  return De.isInstance(r, Rn);
}
v($g, "isInfo");
var on = "Item";
var Pi = "Junction";
var Cr = "Merge";
function Eg(r) {
  return De.isInstance(r, Cr);
}
v(Eg, "isMerge");
var Mi = "Option";
var $n = "Packet";
function Ag(r) {
  return De.isInstance(r, $n);
}
v(Ag, "isPacket");
var En = "PacketBlock";
function kg(r) {
  return De.isInstance(r, En);
}
v(kg, "isPacketBlock");
var An = "Pie";
function xg(r) {
  return De.isInstance(r, An);
}
v(xg, "isPie");
var kn = "PieSection";
function Ig(r) {
  return De.isInstance(r, kn);
}
v(Ig, "isPieSection");
var Di = "Radar";
var Fi = "Service";
var xn = "Treemap";
function Sg(r) {
  return De.isInstance(r, xn);
}
v(Sg, "isTreemap");
var Ui = "TreemapRow";
var ln = "Direction";
var un = "Leaf";
var cn = "Section";
var Gi;
var fc = (Gi = class extends bl {
  getAllTypes() {
    return [vn, nn, xr, sn, an, wi, Ir, Li, ln, bi, Oi, Sr, _i, Rn, on, Pi, un, Cr, Mi, $n, En, An, kn, Di, cn, Fi, ml, xn, Ui];
  }
  computeIsSubtype(r, e) {
    switch (r) {
      case xr:
      case sn:
      case an:
      case Ir:
      case Cr:
        return this.isSubtype(ml, e);
      case ln:
        return this.isSubtype(Sr, e);
      case un:
      case cn:
        return this.isSubtype(on, e);
      default:
        return false;
    }
  }
  getReferenceType(r) {
    const e = `${r.container.$type}:${r.property}`;
    switch (e) {
      case "Entry:axis":
        return nn;
      default:
        throw new Error(`${e} is not a valid reference id.`);
    }
  }
  getTypeMetaData(r) {
    switch (r) {
      case vn:
        return {
          name: vn,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "edges", defaultValue: [] },
            { name: "groups", defaultValue: [] },
            { name: "junctions", defaultValue: [] },
            { name: "services", defaultValue: [] },
            { name: "title" }
          ]
        };
      case nn:
        return {
          name: nn,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      case xr:
        return {
          name: xr,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      case sn:
        return {
          name: sn,
          properties: [
            { name: "branch" }
          ]
        };
      case an:
        return {
          name: an,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      case wi:
        return {
          name: wi,
          properties: [
            { name: "className" },
            { name: "styleText" }
          ]
        };
      case Ir:
        return {
          name: Ir,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case Li:
        return {
          name: Li,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      case bi:
        return {
          name: bi,
          properties: [
            { name: "lhsDir" },
            { name: "lhsGroup", defaultValue: false },
            { name: "lhsId" },
            { name: "lhsInto", defaultValue: false },
            { name: "rhsDir" },
            { name: "rhsGroup", defaultValue: false },
            { name: "rhsId" },
            { name: "rhsInto", defaultValue: false },
            { name: "title" }
          ]
        };
      case Oi:
        return {
          name: Oi,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      case Sr:
        return {
          name: Sr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case _i:
        return {
          name: _i,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Rn:
        return {
          name: Rn,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case on:
        return {
          name: on,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      case Pi:
        return {
          name: Pi,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      case Cr:
        return {
          name: Cr,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case Mi:
        return {
          name: Mi,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: false }
          ]
        };
      case $n:
        return {
          name: $n,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      case En:
        return {
          name: En,
          properties: [
            { name: "bits" },
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      case An:
        return {
          name: An,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: false },
            { name: "title" }
          ]
        };
      case kn:
        return {
          name: kn,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      case Di:
        return {
          name: Di,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Fi:
        return {
          name: Fi,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case xn:
        return {
          name: xn,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" },
            { name: "TreemapRows", defaultValue: [] }
          ]
        };
      case Ui:
        return {
          name: Ui,
          properties: [
            { name: "indent" },
            { name: "item" }
          ]
        };
      case ln:
        return {
          name: ln,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case un:
        return {
          name: un,
          properties: [
            { name: "classSelector" },
            { name: "name" },
            { name: "value" }
          ]
        };
      case cn:
        return {
          name: cn,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      default:
        return {
          name: r,
          properties: []
        };
    }
  }
}, v(Gi, "MermaidAstReflection"), Gi);
var De = new fc();
var gl;
var Cg = v(() => gl ?? (gl = kt(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "InfoGrammar");
var yl;
var Ng = v(() => yl ?? (yl = kt(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PacketGrammar");
var Tl;
var wg = v(() => Tl ?? (Tl = kt(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PieGrammar");
var vl;
var Lg = v(() => vl ?? (vl = kt(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "ArchitectureGrammar");
var Rl;
var bg = v(() => Rl ?? (Rl = kt(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar");
var $l;
var Og = v(() => $l ?? ($l = kt(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar");
var El;
var _g = v(() => El ?? (El = kt(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammar");
var Pg = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Mg = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Dg = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Fg = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Ug = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Gg = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var Bg = {
  languageId: "treemap",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var xt = {
  AstReflection: v(() => new fc(), "AstReflection")
};
var Kg = {
  Grammar: v(() => Cg(), "Grammar"),
  LanguageMetaData: v(() => Pg, "LanguageMetaData"),
  parser: {}
};
var Vg = {
  Grammar: v(() => Ng(), "Grammar"),
  LanguageMetaData: v(() => Mg, "LanguageMetaData"),
  parser: {}
};
var jg = {
  Grammar: v(() => wg(), "Grammar"),
  LanguageMetaData: v(() => Dg, "LanguageMetaData"),
  parser: {}
};
var Hg = {
  Grammar: v(() => Lg(), "Grammar"),
  LanguageMetaData: v(() => Fg, "LanguageMetaData"),
  parser: {}
};
var Wg = {
  Grammar: v(() => bg(), "Grammar"),
  LanguageMetaData: v(() => Ug, "LanguageMetaData"),
  parser: {}
};
var zg = {
  Grammar: v(() => Og(), "Grammar"),
  LanguageMetaData: v(() => Gg, "LanguageMetaData"),
  parser: {}
};
var Yg = {
  Grammar: v(() => _g(), "Grammar"),
  LanguageMetaData: v(() => Bg, "LanguageMetaData"),
  parser: {}
};
var qg = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/;
var Xg = /accTitle[\t ]*:([^\n\r]*)/;
var Qg = /title([\t ][^\n\r]*|)/;
var Jg = {
  ACC_DESCR: qg,
  ACC_TITLE: Xg,
  TITLE: Qg
};
var Bi;
var ui = (Bi = class extends Ju {
  runConverter(r, e, t) {
    let n2 = this.runCommonConverter(r, e, t);
    return n2 === void 0 && (n2 = this.runCustomConverter(r, e, t)), n2 === void 0 ? super.runConverter(r, e, t) : n2;
  }
  runCommonConverter(r, e, t) {
    const n2 = Jg[r.name];
    if (n2 === void 0)
      return;
    const i = n2.exec(e);
    if (i !== null) {
      if (i[1] !== void 0)
        return i[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (i[2] !== void 0)
        return i[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, v(Bi, "AbstractMermaidValueConverter"), Bi);
var Ki;
var ci = (Ki = class extends ui {
  runCustomConverter(r, e, t) {
  }
}, v(Ki, "CommonValueConverter"), Ki);
var Vi;
var ut = (Vi = class extends Qu {
  constructor(r) {
    super(), this.keywords = new Set(r);
  }
  buildKeywordTokens(r, e, t) {
    const n2 = super.buildKeywordTokens(r, e, t);
    return n2.forEach((i) => {
      this.keywords.has(i.name) && i.PATTERN !== void 0 && (i.PATTERN = new RegExp(i.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), n2;
  }
}, v(Vi, "AbstractMermaidTokenBuilder"), Vi);
var Al;
Al = class extends ut {
}, v(Al, "CommonTokenBuilder");
var ji;
var Zg = (ji = class extends ut {
  constructor() {
    super(["gitGraph"]);
  }
}, v(ji, "GitGraphTokenBuilder"), ji);
var ey = {
  parser: {
    TokenBuilder: v(() => new Zg(), "TokenBuilder"),
    ValueConverter: v(() => new ci(), "ValueConverter")
  }
};
function ty(r = lt) {
  const e = oe(
    ot(r),
    xt
  ), t = oe(
    at({ shared: e }),
    Wg,
    ey
  );
  return e.ServiceRegistry.register(t), { shared: e, GitGraph: t };
}
v(ty, "createGitGraphServices");
var Hi;
var ry = (Hi = class extends ut {
  constructor() {
    super(["info", "showInfo"]);
  }
}, v(Hi, "InfoTokenBuilder"), Hi);
var ny = {
  parser: {
    TokenBuilder: v(() => new ry(), "TokenBuilder"),
    ValueConverter: v(() => new ci(), "ValueConverter")
  }
};
function iy(r = lt) {
  const e = oe(
    ot(r),
    xt
  ), t = oe(
    at({ shared: e }),
    Kg,
    ny
  );
  return e.ServiceRegistry.register(t), { shared: e, Info: t };
}
v(iy, "createInfoServices");
var Wi;
var sy = (Wi = class extends ut {
  constructor() {
    super(["packet"]);
  }
}, v(Wi, "PacketTokenBuilder"), Wi);
var ay = {
  parser: {
    TokenBuilder: v(() => new sy(), "TokenBuilder"),
    ValueConverter: v(() => new ci(), "ValueConverter")
  }
};
function oy(r = lt) {
  const e = oe(
    ot(r),
    xt
  ), t = oe(
    at({ shared: e }),
    Vg,
    ay
  );
  return e.ServiceRegistry.register(t), { shared: e, Packet: t };
}
v(oy, "createPacketServices");
var zi;
var ly = (zi = class extends ut {
  constructor() {
    super(["pie", "showData"]);
  }
}, v(zi, "PieTokenBuilder"), zi);
var Yi;
var uy = (Yi = class extends ui {
  runCustomConverter(r, e, t) {
    if (r.name === "PIE_SECTION_LABEL")
      return e.replace(/"/g, "").trim();
  }
}, v(Yi, "PieValueConverter"), Yi);
var cy = {
  parser: {
    TokenBuilder: v(() => new ly(), "TokenBuilder"),
    ValueConverter: v(() => new uy(), "ValueConverter")
  }
};
function dy(r = lt) {
  const e = oe(
    ot(r),
    xt
  ), t = oe(
    at({ shared: e }),
    jg,
    cy
  );
  return e.ServiceRegistry.register(t), { shared: e, Pie: t };
}
v(dy, "createPieServices");
var qi;
var fy = (qi = class extends ut {
  constructor() {
    super(["architecture"]);
  }
}, v(qi, "ArchitectureTokenBuilder"), qi);
var Xi;
var hy = (Xi = class extends ui {
  runCustomConverter(r, e, t) {
    if (r.name === "ARCH_ICON")
      return e.replace(/[()]/g, "").trim();
    if (r.name === "ARCH_TEXT_ICON")
      return e.replace(/["()]/g, "");
    if (r.name === "ARCH_TITLE")
      return e.replace(/[[\]]/g, "").trim();
  }
}, v(Xi, "ArchitectureValueConverter"), Xi);
var py = {
  parser: {
    TokenBuilder: v(() => new fy(), "TokenBuilder"),
    ValueConverter: v(() => new hy(), "ValueConverter")
  }
};
function my(r = lt) {
  const e = oe(
    ot(r),
    xt
  ), t = oe(
    at({ shared: e }),
    Hg,
    py
  );
  return e.ServiceRegistry.register(t), { shared: e, Architecture: t };
}
v(my, "createArchitectureServices");
var Qi;
var gy = (Qi = class extends ut {
  constructor() {
    super(["radar-beta"]);
  }
}, v(Qi, "RadarTokenBuilder"), Qi);
var yy = {
  parser: {
    TokenBuilder: v(() => new gy(), "TokenBuilder"),
    ValueConverter: v(() => new ci(), "ValueConverter")
  }
};
function Ty(r = lt) {
  const e = oe(
    ot(r),
    xt
  ), t = oe(
    at({ shared: e }),
    zg,
    yy
  );
  return e.ServiceRegistry.register(t), { shared: e, Radar: t };
}
v(Ty, "createRadarServices");
var Ji;
var vy = (Ji = class extends ut {
  constructor() {
    super(["treemap"]);
  }
}, v(Ji, "TreemapTokenBuilder"), Ji);
var Ry = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
var Zi;
var $y = (Zi = class extends ui {
  runCustomConverter(r, e, t) {
    if (r.name === "NUMBER2")
      return parseFloat(e.replace(/,/g, ""));
    if (r.name === "SEPARATOR" || r.name === "STRING2")
      return e.substring(1, e.length - 1);
    if (r.name === "INDENTATION")
      return e.length;
    if (r.name === "ClassDef") {
      if (typeof e != "string")
        return e;
      const n2 = Ry.exec(e);
      if (n2)
        return {
          $type: "ClassDefStatement",
          className: n2[1],
          styleText: n2[2] || void 0
        };
    }
  }
}, v(Zi, "TreemapValueConverter"), Zi);
function hc(r) {
  const e = r.validation.TreemapValidator, t = r.validation.ValidationRegistry;
  if (t) {
    const n2 = {
      Treemap: e.checkSingleRoot.bind(e)
      // Remove unused validation for TreemapRow
    };
    t.register(n2, e);
  }
}
v(hc, "registerValidationChecks");
var es;
var Ey = (es = class {
  /**
   * Validates that a treemap has only one root node.
   * A root node is defined as a node that has no indentation.
   */
  checkSingleRoot(r, e) {
    let t;
    for (const n2 of r.TreemapRows)
      n2.item && (t === void 0 && // Check if this is a root node (no indentation)
      n2.indent === void 0 ? t = 0 : n2.indent === void 0 ? e("error", "Multiple root nodes are not allowed in a treemap.", {
        node: n2,
        property: "item"
      }) : t !== void 0 && t >= parseInt(n2.indent, 10) && e("error", "Multiple root nodes are not allowed in a treemap.", {
        node: n2,
        property: "item"
      }));
  }
}, v(es, "TreemapValidator"), es);
var Ay = {
  parser: {
    TokenBuilder: v(() => new vy(), "TokenBuilder"),
    ValueConverter: v(() => new $y(), "ValueConverter")
  },
  validation: {
    TreemapValidator: v(() => new Ey(), "TreemapValidator")
  }
};
function ky(r = lt) {
  const e = oe(
    ot(r),
    xt
  ), t = oe(
    at({ shared: e }),
    Yg,
    Ay
  );
  return e.ServiceRegistry.register(t), hc(t), { shared: e, Treemap: t };
}
v(ky, "createTreemapServices");
var He = {};
var xy = {
  info: v(async () => {
    const { createInfoServices: r } = await import("./info-63CPKGFF-VFY5j4ot-DuK1vq7x-VLW46HIS.js"), e = r().Info.parser.LangiumParser;
    He.info = e;
  }, "info"),
  packet: v(async () => {
    const { createPacketServices: r } = await import("./packet-HUATNLJX-CY36S4az-C7x5jdbY-AB2UYNUN.js"), e = r().Packet.parser.LangiumParser;
    He.packet = e;
  }, "packet"),
  pie: v(async () => {
    const { createPieServices: r } = await import("./pie-WTHONI2E-BON7bBJZ-nqup7Xu7-ACQDOR43.js"), e = r().Pie.parser.LangiumParser;
    He.pie = e;
  }, "pie"),
  architecture: v(async () => {
    const { createArchitectureServices: r } = await import("./architecture-O4VJ6CD3-B6uDcHvb-B217JgtV-CR25KA2L.js"), e = r().Architecture.parser.LangiumParser;
    He.architecture = e;
  }, "architecture"),
  gitGraph: v(async () => {
    const { createGitGraphServices: r } = await import("./gitGraph-ZV4HHKMB-DJlOTx3Y-Bs-dwZIK-HO5M5FFA.js"), e = r().GitGraph.parser.LangiumParser;
    He.gitGraph = e;
  }, "gitGraph"),
  radar: v(async () => {
    const { createRadarServices: r } = await import("./radar-NJJJXTRR-DR6A_uQm-DUZ1PMjQ-E2CSNRVQ.js"), e = r().Radar.parser.LangiumParser;
    He.radar = e;
  }, "radar"),
  treemap: v(async () => {
    const { createTreemapServices: r } = await import("./treemap-75Q7IDZK-SnVjud3P-WwNA3Y5D-4VZLMKEL.js"), e = r().Treemap.parser.LangiumParser;
    He.treemap = e;
  }, "treemap")
};
async function Iy(r, e) {
  const t = xy[r];
  if (!t)
    throw new Error(`Unknown diagram type: ${r}`);
  He[r] || await t();
  const n2 = He[r].parse(e);
  if (n2.lexerErrors.length > 0 || n2.parserErrors.length > 0)
    throw new Sy(n2);
  return n2.value;
}
v(Iy, "parse");
var ts;
var Sy = (ts = class extends Error {
  constructor(r) {
    const e = r.lexerErrors.map((n2) => n2.message).join(`
`), t = r.parserErrors.map((n2) => n2.message).join(`
`);
    super(`Parsing failed: ${e} ${t}`), this.result = r;
  }
}, v(ts, "MermaidParseError"), ts);

export {
  ey,
  ty,
  ny,
  iy,
  ay,
  oy,
  cy,
  dy,
  py,
  my,
  yy,
  Ty,
  Ay,
  ky,
  Iy
};
//# sourceMappingURL=chunk-RIYG2OFT.js.map
