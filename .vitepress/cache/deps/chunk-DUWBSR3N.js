// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/cytoscape.esm-wWJwD64P-C103aMMl.js
function So(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Kd(e) {
  if (Array.isArray(e)) return e;
}
function Zd(e) {
  if (Array.isArray(e)) return So(e);
}
function hn(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Qd(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, Zu(r.key), r);
  }
}
function fn(e, t, n) {
  return t && Qd(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function Pt(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Go(e)) || t) {
      n && (e = n);
      var r = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return r >= e.length ? {
            done: true
          } : {
            done: false,
            value: e[r++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = true, u = false;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return o = l.done, l;
    },
    e: function(l) {
      u = true, i = l;
    },
    f: function() {
      try {
        o || n.return == null || n.return();
      } finally {
        if (u) throw i;
      }
    }
  };
}
function Ku(e, t, n) {
  return (t = Zu(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e;
}
function $d(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Jd(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, o, u = [], l = true, s = false;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = false;
      } else for (; !(l = (r = i.call(n)).done) && (u.push(r.value), u.length !== t); l = true) ;
    } catch (c) {
      s = true, a = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return u;
  }
}
function eh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function th() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Je(e, t) {
  return Kd(e) || Jd(e, t) || Go(e, t) || eh();
}
function ga(e) {
  return Zd(e) || $d(e) || Go(e) || th();
}
function nh(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Zu(e) {
  var t = nh(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tt(e) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tt(e);
}
function Go(e, t) {
  if (e) {
    if (typeof e == "string") return So(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? So(e, t) : void 0;
  }
}
var $e = typeof window > "u" ? null : window;
var Es = $e ? $e.navigator : null;
$e && $e.document;
var rh = tt("");
var Qu = tt({});
var ah = tt(function() {
});
var ih = typeof HTMLElement > "u" ? "undefined" : tt(HTMLElement);
var Mr = function(e) {
  return e && e.instanceString && qe(e.instanceString) ? e.instanceString() : null;
};
var fe = function(e) {
  return e != null && tt(e) == rh;
};
var qe = function(e) {
  return e != null && tt(e) === ah;
};
var Le = function(e) {
  return !St(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
};
var _e = function(e) {
  return e != null && tt(e) === Qu && !Le(e) && e.constructor === Object;
};
var oh = function(e) {
  return e != null && tt(e) === Qu;
};
var ee = function(e) {
  return e != null && tt(e) === tt(1) && !isNaN(e);
};
var sh = function(e) {
  return ee(e) && Math.floor(e) === e;
};
var ya = function(e) {
  if (ih !== "undefined")
    return e != null && e instanceof HTMLElement;
};
var St = function(e) {
  return Ar(e) || $u(e);
};
var Ar = function(e) {
  return Mr(e) === "collection" && e._private.single;
};
var $u = function(e) {
  return Mr(e) === "collection" && !e._private.single;
};
var Ho = function(e) {
  return Mr(e) === "core";
};
var Ju = function(e) {
  return Mr(e) === "stylesheet";
};
var lh = function(e) {
  return Mr(e) === "event";
};
var on = function(e) {
  return e == null ? true : !!(e === "" || e.match(/^\s+$/));
};
var uh = function(e) {
  return typeof HTMLElement > "u" ? false : e instanceof HTMLElement;
};
var ch = function(e) {
  return _e(e) && ee(e.x1) && ee(e.x2) && ee(e.y1) && ee(e.y2);
};
var dh = function(e) {
  return oh(e) && qe(e.then);
};
var hh = function() {
  return Es && Es.userAgent.match(/msie|trident|edge/i);
};
var Kn = function(e, t) {
  t || (t = function() {
    if (arguments.length === 1)
      return arguments[0];
    if (arguments.length === 0)
      return "undefined";
    for (var r = [], a = 0; a < arguments.length; a++)
      r.push(arguments[a]);
    return r.join("$");
  });
  var n = function() {
    var r = this, a = arguments, i, o = t.apply(r, a), u = n.cache;
    return (i = u[o]) || (i = u[o] = e.apply(r, a)), i;
  };
  return n.cache = {}, n;
};
var Ko = Kn(function(e) {
  return e.replace(/([A-Z])/g, function(t) {
    return "-" + t.toLowerCase();
  });
});
var Da = Kn(function(e) {
  return e.replace(/(-\w)/g, function(t) {
    return t[1].toUpperCase();
  });
});
var ec = Kn(function(e, t) {
  return e + t[0].toUpperCase() + t.substring(1);
}, function(e, t) {
  return e + "$" + t;
});
var Ts = function(e) {
  return on(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
};
var tn = function(e, t) {
  return e.slice(-1 * t.length) === t;
};
var et = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))";
var fh = "rgb[a]?\\((" + et + "[%]?)\\s*,\\s*(" + et + "[%]?)\\s*,\\s*(" + et + "[%]?)(?:\\s*,\\s*(" + et + "))?\\)";
var ph = "rgb[a]?\\((?:" + et + "[%]?)\\s*,\\s*(?:" + et + "[%]?)\\s*,\\s*(?:" + et + "[%]?)(?:\\s*,\\s*(?:" + et + "))?\\)";
var vh = "hsl[a]?\\((" + et + ")\\s*,\\s*(" + et + "[%])\\s*,\\s*(" + et + "[%])(?:\\s*,\\s*(" + et + "))?\\)";
var gh = "hsl[a]?\\((?:" + et + ")\\s*,\\s*(?:" + et + "[%])\\s*,\\s*(?:" + et + "[%])(?:\\s*,\\s*(?:" + et + "))?\\)";
var yh = "\\#[0-9a-fA-F]{3}";
var mh = "\\#[0-9a-fA-F]{6}";
var tc = function(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
};
var bh = function(e, t) {
  return -1 * tc(e, t);
};
var ve = Object.assign != null ? Object.assign.bind(Object) : function(e) {
  for (var t = arguments, n = 1; n < t.length; n++) {
    var r = t[n];
    if (r != null)
      for (var a = Object.keys(r), i = 0; i < a.length; i++) {
        var o = a[i];
        e[o] = r[o];
      }
  }
  return e;
};
var xh = function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var t = e.length === 4, n, r, a, i = 16;
    return t ? (n = parseInt(e[1] + e[1], i), r = parseInt(e[2] + e[2], i), a = parseInt(e[3] + e[3], i)) : (n = parseInt(e[1] + e[2], i), r = parseInt(e[3] + e[4], i), a = parseInt(e[5] + e[6], i)), [n, r, a];
  }
};
var wh = function(e) {
  var t, n, r, a, i, o, u, l;
  function s(f, p, g) {
    return g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? f + (p - f) * 6 * g : g < 1 / 2 ? p : g < 2 / 3 ? f + (p - f) * (2 / 3 - g) * 6 : f;
  }
  var c = new RegExp("^" + vh + "$").exec(e);
  if (c) {
    if (n = parseInt(c[1]), n < 0 ? n = (360 - -1 * n % 360) % 360 : n > 360 && (n = n % 360), n /= 360, r = parseFloat(c[2]), r < 0 || r > 100 || (r = r / 100, a = parseFloat(c[3]), a < 0 || a > 100) || (a = a / 100, i = c[4], i !== void 0 && (i = parseFloat(i), i < 0 || i > 1)))
      return;
    if (r === 0)
      o = u = l = Math.round(a * 255);
    else {
      var d = a < 0.5 ? a * (1 + r) : a + r - a * r, h = 2 * a - d;
      o = Math.round(255 * s(h, d, n + 1 / 3)), u = Math.round(255 * s(h, d, n)), l = Math.round(255 * s(h, d, n - 1 / 3));
    }
    t = [o, u, l, i];
  }
  return t;
};
var Eh = function(e) {
  var t, n = new RegExp("^" + fh + "$").exec(e);
  if (n) {
    t = [];
    for (var r = [], a = 1; a <= 3; a++) {
      var i = n[a];
      if (i[i.length - 1] === "%" && (r[a] = true), i = parseFloat(i), r[a] && (i = i / 100 * 255), i < 0 || i > 255)
        return;
      t.push(Math.floor(i));
    }
    var o = r[1] || r[2] || r[3], u = r[1] && r[2] && r[3];
    if (o && !u)
      return;
    var l = n[4];
    if (l !== void 0) {
      if (l = parseFloat(l), l < 0 || l > 1)
        return;
      t.push(l);
    }
  }
  return t;
};
var Th = function(e) {
  return Ch[e.toLowerCase()];
};
var nc = function(e) {
  return (Le(e) ? e : null) || Th(e) || xh(e) || Eh(e) || wh(e);
};
var Ch = {
  // special colour names
  transparent: [0, 0, 0, 0],
  // NB alpha === 0
  // regular colours
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
var rc = function(e) {
  for (var t = e.map, n = e.keys, r = n.length, a = 0; a < r; a++) {
    var i = n[a];
    if (_e(i))
      throw Error("Tried to set map with object key");
    a < n.length - 1 ? (t[i] == null && (t[i] = {}), t = t[i]) : t[i] = e.value;
  }
};
var ac = function(e) {
  for (var t = e.map, n = e.keys, r = n.length, a = 0; a < r; a++) {
    var i = n[a];
    if (_e(i))
      throw Error("Tried to get map with object key");
    if (t = t[i], t == null)
      return t;
  }
  return t;
};
var Gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Za;
var Cs;
function Ir() {
  if (Cs) return Za;
  Cs = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Za = e, Za;
}
var Qa;
var Ps;
function Ph() {
  if (Ps) return Qa;
  Ps = 1;
  var e = typeof Gr == "object" && Gr && Gr.Object === Object && Gr;
  return Qa = e, Qa;
}
var $a;
var Ss;
function Ma() {
  if (Ss) return $a;
  Ss = 1;
  var e = Ph(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return $a = n, $a;
}
var Ja;
var ks;
function Sh() {
  if (ks) return Ja;
  ks = 1;
  var e = Ma(), t = function() {
    return e.Date.now();
  };
  return Ja = t, Ja;
}
var ei;
var _s;
function kh() {
  if (_s) return ei;
  _s = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return ei = t, ei;
}
var ti;
var Bs;
function _h() {
  if (Bs) return ti;
  Bs = 1;
  var e = kh(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return ti = n, ti;
}
var ni;
var Ds;
function Zo() {
  if (Ds) return ni;
  Ds = 1;
  var e = Ma(), t = e.Symbol;
  return ni = t, ni;
}
var ri;
var Ms;
function Bh() {
  if (Ms) return ri;
  Ms = 1;
  var e = Zo(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, a = e ? e.toStringTag : void 0;
  function i(o) {
    var u = n.call(o, a), l = o[a];
    try {
      o[a] = void 0;
      var s = true;
    } catch {
    }
    var c = r.call(o);
    return s && (u ? o[a] = l : delete o[a]), c;
  }
  return ri = i, ri;
}
var ai;
var As;
function Dh() {
  if (As) return ai;
  As = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return ai = n, ai;
}
var ii;
var Rs;
function ic() {
  if (Rs) return ii;
  Rs = 1;
  var e = Zo(), t = Bh(), n = Dh(), r = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? u === void 0 ? a : r : i && i in Object(u) ? t(u) : n(u);
  }
  return ii = o, ii;
}
var oi;
var Is;
function Mh() {
  if (Is) return oi;
  Is = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return oi = e, oi;
}
var si;
var Ns;
function Nr() {
  if (Ns) return si;
  Ns = 1;
  var e = ic(), t = Mh(), n = "[object Symbol]";
  function r(a) {
    return typeof a == "symbol" || t(a) && e(a) == n;
  }
  return si = r, si;
}
var li;
var Ls;
function Ah() {
  if (Ls) return li;
  Ls = 1;
  var e = _h(), t = Ir(), n = Nr(), r = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, u = parseInt;
  function l(s) {
    if (typeof s == "number")
      return s;
    if (n(s))
      return r;
    if (t(s)) {
      var c = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = t(c) ? c + "" : c;
    }
    if (typeof s != "string")
      return s === 0 ? s : +s;
    s = e(s);
    var d = i.test(s);
    return d || o.test(s) ? u(s.slice(2), d ? 2 : 8) : a.test(s) ? r : +s;
  }
  return li = l, li;
}
var ui;
var zs;
function Rh() {
  if (zs) return ui;
  zs = 1;
  var e = Ir(), t = Sh(), n = Ah(), r = "Expected a function", a = Math.max, i = Math.min;
  function o(u, l, s) {
    var c, d, h, f, p, g, m = 0, v = false, y = false, b = true;
    if (typeof u != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(s) && (v = !!s.leading, y = "maxWait" in s, h = y ? a(n(s.maxWait) || 0, l) : h, b = "trailing" in s ? !!s.trailing : b);
    function w(M) {
      var D = c, N = d;
      return c = d = void 0, m = M, f = u.apply(N, D), f;
    }
    function T(M) {
      return m = M, p = setTimeout(_, l), v ? w(M) : f;
    }
    function S(M) {
      var D = M - g, N = M - m, A = l - D;
      return y ? i(A, h - N) : A;
    }
    function x(M) {
      var D = M - g, N = M - m;
      return g === void 0 || D >= l || D < 0 || y && N >= h;
    }
    function _() {
      var M = t();
      if (x(M))
        return P(M);
      p = setTimeout(_, S(M));
    }
    function P(M) {
      return p = void 0, b && c ? w(M) : (c = d = void 0, f);
    }
    function B() {
      p !== void 0 && clearTimeout(p), m = 0, c = g = d = p = void 0;
    }
    function k() {
      return p === void 0 ? f : P(t());
    }
    function C() {
      var M = t(), D = x(M);
      if (c = arguments, d = this, g = M, D) {
        if (p === void 0)
          return T(g);
        if (y)
          return clearTimeout(p), p = setTimeout(_, l), w(g);
      }
      return p === void 0 && (p = setTimeout(_, l)), f;
    }
    return C.cancel = B, C.flush = k, C;
  }
  return ui = o, ui;
}
var Ih = Rh();
var Lr = Rr(Ih);
var ci = $e ? $e.performance : null;
var oc = ci && ci.now ? function() {
  return ci.now();
} : function() {
  return Date.now();
};
var Nh = function() {
  if ($e) {
    if ($e.requestAnimationFrame)
      return function(e) {
        $e.requestAnimationFrame(e);
      };
    if ($e.mozRequestAnimationFrame)
      return function(e) {
        $e.mozRequestAnimationFrame(e);
      };
    if ($e.webkitRequestAnimationFrame)
      return function(e) {
        $e.webkitRequestAnimationFrame(e);
      };
    if ($e.msRequestAnimationFrame)
      return function(e) {
        $e.msRequestAnimationFrame(e);
      };
  }
  return function(e) {
    e && setTimeout(function() {
      e(oc());
    }, 1e3 / 60);
  };
}();
var ma = function(e) {
  return Nh(e);
};
var Gt = oc;
var En = 9261;
var sc = 65599;
var jn = 5381;
var lc = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : En, n = t, r; r = e.next(), !r.done; )
    n = n * sc + r.value | 0;
  return n;
};
var wr = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : En;
  return t * sc + e | 0;
};
var Er = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jn;
  return (t << 5) + t + e | 0;
};
var Lh = function(e, t) {
  return e * 2097152 + t;
};
var $t = function(e) {
  return e[0] * 2097152 + e[1];
};
var Hr = function(e, t) {
  return [wr(e[0], t[0]), Er(e[1], t[1])];
};
var Os = function(e, t) {
  var n = {
    value: 0,
    done: false
  }, r = 0, a = e.length, i = {
    next: function() {
      return r < a ? n.value = e[r++] : n.done = true, n;
    }
  };
  return lc(i, t);
};
var Pn = function(e, t) {
  var n = {
    value: 0,
    done: false
  }, r = 0, a = e.length, i = {
    next: function() {
      return r < a ? n.value = e.charCodeAt(r++) : n.done = true, n;
    }
  };
  return lc(i, t);
};
var uc = function() {
  return zh(arguments);
};
var zh = function(e) {
  for (var t, n = 0; n < e.length; n++) {
    var r = e[n];
    n === 0 ? t = Pn(r) : t = Pn(r, t);
  }
  return t;
};
var Vs = true;
var Oh = console.warn != null;
var Vh = console.trace != null;
var Qo = Number.MAX_SAFE_INTEGER || 9007199254740991;
var cc = function() {
  return true;
};
var ba = function() {
  return false;
};
var Fs = function() {
  return 0;
};
var $o = function() {
};
var Ye = function(e) {
  throw new Error(e);
};
var dc = function(e) {
  if (e !== void 0)
    Vs = !!e;
  else
    return Vs;
};
var Ae = function(e) {
  dc() && (Oh ? console.warn(e) : (console.log(e), Vh && console.trace()));
};
var Fh = function(e) {
  return ve({}, e);
};
var Ft = function(e) {
  return e == null ? e : Le(e) ? e.slice() : _e(e) ? Fh(e) : e;
};
var jh = function(e) {
  return e.slice();
};
var hc = function(e, t) {
  for (
    // loop :)
    t = e = "";
    // b - result , a - numeric letiable
    e++ < 36;
    //
    t += e * 51 & 52 ? (
      //  return a random number or 4
      (e ^ 15 ? (
        // generate a random number from 0 to 15
        8 ^ Math.random() * (e ^ 20 ? 16 : 4)
      ) : 4).toString(16)
    ) : "-"
  ) ;
  return t;
};
var Xh = {};
var fc = function() {
  return Xh;
};
var ct = function(e) {
  var t = Object.keys(e);
  return function(n) {
    for (var r = {}, a = 0; a < t.length; a++) {
      var i = t[a], o = n == null ? void 0 : n[i];
      r[i] = o === void 0 ? e[i] : o;
    }
    return r;
  };
};
var sn = function(e, t, n) {
  for (var r = e.length - 1; r >= 0; r--)
    e[r] === t && e.splice(r, 1);
};
var Jo = function(e) {
  e.splice(0, e.length);
};
var Yh = function(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    e.push(r);
  }
};
var Tt = function(e, t, n) {
  return n && (t = ec(n, t)), e[t];
};
var Ut = function(e, t, n, r) {
  n && (t = ec(n, t)), e[t] = r;
};
var qh = function() {
  function e() {
    hn(this, e), this._obj = {};
  }
  return fn(e, [{
    key: "set",
    value: function(t, n) {
      return this._obj[t] = n, this;
    }
  }, {
    key: "delete",
    value: function(t) {
      return this._obj[t] = void 0, this;
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = {};
    }
  }, {
    key: "has",
    value: function(t) {
      return this._obj[t] !== void 0;
    }
  }, {
    key: "get",
    value: function(t) {
      return this._obj[t];
    }
  }]);
}();
var Wt = typeof Map < "u" ? Map : qh;
var Uh = "undefined";
var Wh = function() {
  function e(t) {
    if (hn(this, e), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, t != null) {
      var n;
      t.instanceString != null && t.instanceString() === this.instanceString() ? n = t.toArray() : n = t;
      for (var r = 0; r < n.length; r++)
        this.add(n[r]);
    }
  }
  return fn(e, [{
    key: "instanceString",
    value: function() {
      return "set";
    }
  }, {
    key: "add",
    value: function(t) {
      var n = this._obj;
      n[t] !== 1 && (n[t] = 1, this.size++);
    }
  }, {
    key: "delete",
    value: function(t) {
      var n = this._obj;
      n[t] === 1 && (n[t] = 0, this.size--);
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = /* @__PURE__ */ Object.create(null);
    }
  }, {
    key: "has",
    value: function(t) {
      return this._obj[t] === 1;
    }
  }, {
    key: "toArray",
    value: function() {
      var t = this;
      return Object.keys(this._obj).filter(function(n) {
        return t.has(n);
      });
    }
  }, {
    key: "forEach",
    value: function(t, n) {
      return this.toArray().forEach(t, n);
    }
  }]);
}();
var er = (typeof Set > "u" ? "undefined" : tt(Set)) !== Uh ? Set : Wh;
var Aa = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (e === void 0 || t === void 0 || !Ho(e)) {
    Ye("An element must have a core reference and parameters set");
    return;
  }
  var r = t.group;
  if (r == null && (t.data && t.data.source != null && t.data.target != null ? r = "edges" : r = "nodes"), r !== "nodes" && r !== "edges") {
    Ye("An element must be of type `nodes` or `edges`; you specified `" + r + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var a = this._private = {
    cy: e,
    single: true,
    // indicates this is an element
    data: t.data || {},
    // data object
    position: t.position || {
      x: 0,
      y: 0
    },
    // (x, y) position pair
    autoWidth: void 0,
    // width and height of nodes calculated by the renderer when set to special 'auto' value
    autoHeight: void 0,
    autoPadding: void 0,
    compoundBoundsClean: false,
    // whether the compound dimensions need to be recalculated the next time dimensions are read
    listeners: [],
    // array of bound listeners
    group: r,
    // string; 'nodes' or 'edges'
    style: {},
    // properties as set by the style
    rstyle: {},
    // properties for style sent from the renderer to the core
    styleCxts: [],
    // applied style contexts from the styler
    styleKeys: {},
    // per-group keys of style property values
    removed: true,
    // whether it's inside the vis; true if removed (set true here since we call restore)
    selected: !!t.selected,
    // whether it's selected
    selectable: t.selectable === void 0 ? true : !!t.selectable,
    // whether it's selectable
    locked: !!t.locked,
    // whether the element is locked (cannot be moved)
    grabbed: false,
    // whether the element is grabbed by the mouse; renderer sets this privately
    grabbable: t.grabbable === void 0 ? true : !!t.grabbable,
    // whether the element can be grabbed
    pannable: t.pannable === void 0 ? r === "edges" : !!t.pannable,
    // whether the element has passthrough panning enabled
    active: false,
    // whether the element is active from user interaction
    classes: new er(),
    // map ( className => true )
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    rscratch: {},
    // object in which the renderer can store information
    scratch: t.scratch || {},
    // scratch objects
    edges: [],
    // array of connected edges
    children: [],
    // array of children
    parent: t.parent && t.parent.isNode() ? t.parent : null,
    // parent ref
    traversalCache: {},
    // cache of output of traversal functions
    backgrounding: false,
    // whether background images are loading
    bbCache: null,
    // cache of the current bounding box
    bbCacheShift: {
      x: 0,
      y: 0
    },
    // shift applied to cached bb to be applied on next get
    bodyBounds: null,
    // bounds cache of element body, w/o overlay
    overlayBounds: null,
    // bounds cache of element body, including overlay
    labelBounds: {
      // bounds cache of labels
      all: null,
      source: null,
      target: null,
      main: null
    },
    arrowBounds: {
      // bounds cache of edge arrows
      source: null,
      target: null,
      "mid-source": null,
      "mid-target": null
    }
  };
  if (a.position.x == null && (a.position.x = 0), a.position.y == null && (a.position.y = 0), t.renderedPosition) {
    var i = t.renderedPosition, o = e.pan(), u = e.zoom();
    a.position = {
      x: (i.x - o.x) / u,
      y: (i.y - o.y) / u
    };
  }
  var l = [];
  Le(t.classes) ? l = t.classes : fe(t.classes) && (l = t.classes.split(/\s+/));
  for (var s = 0, c = l.length; s < c; s++) {
    var d = l[s];
    !d || d === "" || a.classes.add(d);
  }
  this.createEmitter(), (n === void 0 || n) && this.restore();
  var h = t.style || t.css;
  h && (Ae("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(h));
};
var js = function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, function(t, n, r) {
    var a;
    _e(t) && !St(t) && (a = t, t = a.roots || a.root, n = a.visit, r = a.directed), r = arguments.length === 2 && !qe(n) ? n : r, n = qe(n) ? n : function() {
    };
    for (var i = this._private.cy, o = t = fe(t) ? this.filter(t) : t, u = [], l = [], s = {}, c = {}, d = {}, h = 0, f, p = this.byGroup(), g = p.nodes, m = p.edges, v = 0; v < o.length; v++) {
      var y = o[v], b = y.id();
      y.isNode() && (u.unshift(y), e.bfs && (d[b] = true, l.push(y)), c[b] = 0);
    }
    for (var w = function() {
      var B = e.bfs ? u.shift() : u.pop(), k = B.id();
      if (e.dfs) {
        if (d[k])
          return 0;
        d[k] = true, l.push(B);
      }
      var C = c[k], M = s[k], D = M != null ? M.source() : null, N = M != null ? M.target() : null, A = M == null ? void 0 : B.same(D) ? N[0] : D[0], L;
      if (L = n(B, M, A, h++, C), L === true)
        return f = B, 1;
      if (L === false)
        return 1;
      for (var R = B.connectedEdges().filter(function(W) {
        return (!r || W.source().same(B)) && m.has(W);
      }), I = 0; I < R.length; I++) {
        var X = R[I], V = X.connectedNodes().filter(function(W) {
          return !W.same(B) && g.has(W);
        }), Y = V.id();
        V.length !== 0 && !d[Y] && (V = V[0], u.push(V), e.bfs && (d[Y] = true, l.push(V)), s[Y] = X, c[Y] = c[k] + 1);
      }
    }, T; u.length !== 0 && (T = w(), !(T !== 0 && T === 1)); )
      ;
    for (var S = i.collection(), x = 0; x < l.length; x++) {
      var _ = l[x], P = s[_.id()];
      P != null && S.push(P), S.push(_);
    }
    return {
      path: i.collection(S),
      found: i.collection(f)
    };
  };
};
var Tr = {
  breadthFirstSearch: js({
    bfs: true
  }),
  depthFirstSearch: js({
    dfs: true
  })
};
Tr.bfs = Tr.breadthFirstSearch;
Tr.dfs = Tr.depthFirstSearch;
var ko = { exports: {} };
var Gh = ko.exports;
var Xs;
function Hh() {
  return Xs || (Xs = 1, function(e, t) {
    (function() {
      var n, r, a, i, o, u, l, s, c, d, h, f, p, g, m;
      a = Math.floor, d = Math.min, r = function(v, y) {
        return v < y ? -1 : v > y ? 1 : 0;
      }, c = function(v, y, b, w, T) {
        var S;
        if (b == null && (b = 0), T == null && (T = r), b < 0)
          throw new Error("lo must be non-negative");
        for (w == null && (w = v.length); b < w; )
          S = a((b + w) / 2), T(y, v[S]) < 0 ? w = S : b = S + 1;
        return [].splice.apply(v, [b, b - b].concat(y)), y;
      }, u = function(v, y, b) {
        return b == null && (b = r), v.push(y), g(v, 0, v.length - 1, b);
      }, o = function(v, y) {
        var b, w;
        return y == null && (y = r), b = v.pop(), v.length ? (w = v[0], v[0] = b, m(v, 0, y)) : w = b, w;
      }, s = function(v, y, b) {
        var w;
        return b == null && (b = r), w = v[0], v[0] = y, m(v, 0, b), w;
      }, l = function(v, y, b) {
        var w;
        return b == null && (b = r), v.length && b(v[0], y) < 0 && (w = [v[0], y], y = w[0], v[0] = w[1], m(v, 0, b)), y;
      }, i = function(v, y) {
        var b, w, T, S, x, _;
        for (y == null && (y = r), S = (function() {
          _ = [];
          for (var P = 0, B = a(v.length / 2); 0 <= B ? P < B : P > B; 0 <= B ? P++ : P--)
            _.push(P);
          return _;
        }).apply(this).reverse(), x = [], w = 0, T = S.length; w < T; w++)
          b = S[w], x.push(m(v, b, y));
        return x;
      }, p = function(v, y, b) {
        var w;
        if (b == null && (b = r), w = v.indexOf(y), w !== -1)
          return g(v, 0, w, b), m(v, w, b);
      }, h = function(v, y, b) {
        var w, T, S, x, _;
        if (b == null && (b = r), T = v.slice(0, y), !T.length)
          return T;
        for (i(T, b), _ = v.slice(y), S = 0, x = _.length; S < x; S++)
          w = _[S], l(T, w, b);
        return T.sort(b).reverse();
      }, f = function(v, y, b) {
        var w, T, S, x, _, P, B, k, C;
        if (b == null && (b = r), y * 10 <= v.length) {
          if (S = v.slice(0, y).sort(b), !S.length)
            return S;
          for (T = S[S.length - 1], B = v.slice(y), x = 0, P = B.length; x < P; x++)
            w = B[x], b(w, T) < 0 && (c(S, w, 0, null, b), S.pop(), T = S[S.length - 1]);
          return S;
        }
        for (i(v, b), C = [], _ = 0, k = d(y, v.length); 0 <= k ? _ < k : _ > k; 0 <= k ? ++_ : --_)
          C.push(o(v, b));
        return C;
      }, g = function(v, y, b, w) {
        var T, S, x;
        for (w == null && (w = r), T = v[b]; b > y; ) {
          if (x = b - 1 >> 1, S = v[x], w(T, S) < 0) {
            v[b] = S, b = x;
            continue;
          }
          break;
        }
        return v[b] = T;
      }, m = function(v, y, b) {
        var w, T, S, x, _;
        for (b == null && (b = r), T = v.length, _ = y, S = v[y], w = 2 * y + 1; w < T; )
          x = w + 1, x < T && !(b(v[w], v[x]) < 0) && (w = x), v[y] = v[w], y = w, w = 2 * y + 1;
        return v[y] = S, g(v, _, y, b);
      }, n = function() {
        v.push = u, v.pop = o, v.replace = s, v.pushpop = l, v.heapify = i, v.updateItem = p, v.nlargest = h, v.nsmallest = f;
        function v(y) {
          this.cmp = y ?? r, this.nodes = [];
        }
        return v.prototype.push = function(y) {
          return u(this.nodes, y, this.cmp);
        }, v.prototype.pop = function() {
          return o(this.nodes, this.cmp);
        }, v.prototype.peek = function() {
          return this.nodes[0];
        }, v.prototype.contains = function(y) {
          return this.nodes.indexOf(y) !== -1;
        }, v.prototype.replace = function(y) {
          return s(this.nodes, y, this.cmp);
        }, v.prototype.pushpop = function(y) {
          return l(this.nodes, y, this.cmp);
        }, v.prototype.heapify = function() {
          return i(this.nodes, this.cmp);
        }, v.prototype.updateItem = function(y) {
          return p(this.nodes, y, this.cmp);
        }, v.prototype.clear = function() {
          return this.nodes = [];
        }, v.prototype.empty = function() {
          return this.nodes.length === 0;
        }, v.prototype.size = function() {
          return this.nodes.length;
        }, v.prototype.clone = function() {
          var y;
          return y = new v(), y.nodes = this.nodes.slice(0), y;
        }, v.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, v.prototype.insert = v.prototype.push, v.prototype.top = v.prototype.peek, v.prototype.front = v.prototype.peek, v.prototype.has = v.prototype.contains, v.prototype.copy = v.prototype.clone, v;
      }(), function(v, y) {
        return e.exports = y();
      }(this, function() {
        return n;
      });
    }).call(Gh);
  }(ko)), ko.exports;
}
var Ys;
var qs;
function Kh() {
  return qs || (qs = 1, Ys = Hh()), Ys;
}
var Zh = Kh();
var zr = Rr(Zh);
var Qh = ct({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: false
});
var $h = {
  dijkstra: function(e) {
    if (!_e(e)) {
      var t = arguments;
      e = {
        root: t[0],
        weight: t[1],
        directed: t[2]
      };
    }
    var n = Qh(e), r = n.root, a = n.weight, i = n.directed, o = this, u = a, l = fe(r) ? this.filter(r)[0] : r[0], s = {}, c = {}, d = {}, h = this.byGroup(), f = h.nodes, p = h.edges;
    p.unmergeBy(function(D) {
      return D.isLoop();
    });
    for (var g = function(D) {
      return s[D.id()];
    }, m = function(D, N) {
      s[D.id()] = N, v.updateItem(D);
    }, v = new zr(function(D, N) {
      return g(D) - g(N);
    }), y = 0; y < f.length; y++) {
      var b = f[y];
      s[b.id()] = b.same(l) ? 0 : 1 / 0, v.push(b);
    }
    for (var w = function(D, N) {
      for (var A = (i ? D.edgesTo(N) : D.edgesWith(N)).intersect(p), L = 1 / 0, R, I = 0; I < A.length; I++) {
        var X = A[I], V = u(X);
        (V < L || !R) && (L = V, R = X);
      }
      return {
        edge: R,
        dist: L
      };
    }; v.size() > 0; ) {
      var T = v.pop(), S = g(T), x = T.id();
      if (d[x] = S, S !== 1 / 0)
        for (var _ = T.neighborhood().intersect(f), P = 0; P < _.length; P++) {
          var B = _[P], k = B.id(), C = w(T, B), M = S + C.dist;
          M < g(B) && (m(B, M), c[k] = {
            node: T,
            edge: C.edge
          });
        }
    }
    return {
      distanceTo: function(D) {
        var N = fe(D) ? f.filter(D)[0] : D[0];
        return d[N.id()];
      },
      pathTo: function(D) {
        var N = fe(D) ? f.filter(D)[0] : D[0], A = [], L = N, R = L.id();
        if (N.length > 0)
          for (A.unshift(N); c[R]; ) {
            var I = c[R];
            A.unshift(I.edge), A.unshift(I.node), L = I.node, R = L.id();
          }
        return o.spawn(A);
      }
    };
  }
};
var Jh = {
  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function(e) {
    e = e || function(y) {
      return 1;
    };
    for (var t = this.byGroup(), n = t.nodes, r = t.edges, a = n.length, i = new Array(a), o = n, u = function(y) {
      for (var b = 0; b < i.length; b++) {
        var w = i[b];
        if (w.has(y))
          return b;
      }
    }, l = 0; l < a; l++)
      i[l] = this.spawn(n[l]);
    for (var s = r.sort(function(y, b) {
      return e(y) - e(b);
    }), c = 0; c < s.length; c++) {
      var d = s[c], h = d.source()[0], f = d.target()[0], p = u(h), g = u(f), m = i[p], v = i[g];
      p !== g && (o.merge(d), m.merge(v), i.splice(g, 1));
    }
    return o;
  }
};
var ef = ct({
  root: null,
  goal: null,
  weight: function(e) {
    return 1;
  },
  heuristic: function(e) {
    return 0;
  },
  directed: false
});
var tf = {
  // Implemented from pseudocode from wikipedia
  aStar: function(e) {
    var t = this.cy(), n = ef(e), r = n.root, a = n.goal, i = n.heuristic, o = n.directed, u = n.weight;
    r = t.collection(r)[0], a = t.collection(a)[0];
    var l = r.id(), s = a.id(), c = {}, d = {}, h = {}, f = new zr(function(I, X) {
      return d[I.id()] - d[X.id()];
    }), p = new er(), g = {}, m = {}, v = function(I, X) {
      f.push(I), p.add(X);
    }, y, b, w = function() {
      y = f.pop(), b = y.id(), p.delete(b);
    }, T = function(I) {
      return p.has(I);
    };
    v(r, l), c[l] = 0, d[l] = i(r);
    for (var S = 0; f.size() > 0; ) {
      if (w(), S++, b === s) {
        for (var x = [], _ = a, P = s, B = m[P]; x.unshift(_), B != null && x.unshift(B), _ = g[P], _ != null; )
          P = _.id(), B = m[P];
        return {
          found: true,
          distance: c[b],
          path: this.spawn(x),
          steps: S
        };
      }
      h[b] = true;
      for (var k = y._private.edges, C = 0; C < k.length; C++) {
        var M = k[C];
        if (this.hasElementWithId(M.id()) && !(o && M.data("source") !== b)) {
          var D = M.source(), N = M.target(), A = D.id() !== b ? D : N, L = A.id();
          if (this.hasElementWithId(L) && !h[L]) {
            var R = c[b] + u(M);
            if (!T(L)) {
              c[L] = R, d[L] = R + i(A), v(A, L), g[L] = y, m[L] = M;
              continue;
            }
            R < c[L] && (c[L] = R, d[L] = R + i(A), g[L] = y, m[L] = M);
          }
        }
      }
    }
    return {
      found: false,
      distance: void 0,
      path: void 0,
      steps: S
    };
  }
};
var nf = ct({
  weight: function(e) {
    return 1;
  },
  directed: false
});
var rf = {
  // Implemented from pseudocode from wikipedia
  floydWarshall: function(e) {
    for (var t = this.cy(), n = nf(e), r = n.weight, a = n.directed, i = r, o = this.byGroup(), u = o.nodes, l = o.edges, s = u.length, c = s * s, d = function(V) {
      return u.indexOf(V);
    }, h = function(V) {
      return u[V];
    }, f = new Array(c), p = 0; p < c; p++) {
      var g = p % s, m = (p - g) / s;
      m === g ? f[p] = 0 : f[p] = 1 / 0;
    }
    for (var v = new Array(c), y = new Array(c), b = 0; b < l.length; b++) {
      var w = l[b], T = w.source()[0], S = w.target()[0];
      if (T !== S) {
        var x = d(T), _ = d(S), P = x * s + _, B = i(w);
        if (f[P] > B && (f[P] = B, v[P] = _, y[P] = w), !a) {
          var k = _ * s + x;
          !a && f[k] > B && (f[k] = B, v[k] = x, y[k] = w);
        }
      }
    }
    for (var C = 0; C < s; C++)
      for (var M = 0; M < s; M++)
        for (var D = M * s + C, N = 0; N < s; N++) {
          var A = M * s + N, L = C * s + N;
          f[D] + f[L] < f[A] && (f[A] = f[D] + f[L], v[A] = v[D]);
        }
    var R = function(V) {
      return (fe(V) ? t.filter(V) : V)[0];
    }, I = function(V) {
      return d(R(V));
    }, X = {
      distance: function(V, Y) {
        var W = I(V), Q = I(Y);
        return f[W * s + Q];
      },
      path: function(V, Y) {
        var W = I(V), Q = I(Y), J = h(W);
        if (W === Q)
          return J.collection();
        if (v[W * s + Q] == null)
          return t.collection();
        var Z = t.collection(), $ = W, te;
        for (Z.merge(J); W !== Q; )
          $ = W, W = v[W * s + Q], te = y[$ * s + W], Z.merge(te), Z.merge(h(W));
        return Z;
      }
    };
    return X;
  }
  // floydWarshall
};
var af = ct({
  weight: function(e) {
    return 1;
  },
  directed: false,
  root: null
});
var of = {
  // Implemented from pseudocode from wikipedia
  bellmanFord: function(e) {
    var t = this, n = af(e), r = n.weight, a = n.directed, i = n.root, o = r, u = this, l = this.cy(), s = this.byGroup(), c = s.edges, d = s.nodes, h = d.length, f = new Wt(), p = false, g = [];
    i = l.collection(i)[0], c.unmergeBy(function(be) {
      return be.isLoop();
    });
    for (var m = c.length, v = function(be) {
      var Ce = f.get(be.id());
      return Ce || (Ce = {}, f.set(be.id(), Ce)), Ce;
    }, y = function(be) {
      return (fe(be) ? l.$(be) : be)[0];
    }, b = function(be) {
      return v(y(be)).dist;
    }, w = function(be) {
      for (var Ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i, re = y(be), de = [], he = re; ; ) {
        if (he == null)
          return t.spawn();
        var ye = v(he), me = ye.edge, Se = ye.pred;
        if (de.unshift(he[0]), he.same(Ce) && de.length > 0)
          break;
        me != null && de.unshift(me), he = Se;
      }
      return u.spawn(de);
    }, T = 0; T < h; T++) {
      var S = d[T], x = v(S);
      S.same(i) ? x.dist = 0 : x.dist = 1 / 0, x.pred = null, x.edge = null;
    }
    for (var _ = false, P = function(be, Ce, re, de, he, ye) {
      var me = de.dist + ye;
      me < he.dist && !re.same(de.edge) && (he.dist = me, he.pred = be, he.edge = re, _ = true);
    }, B = 1; B < h; B++) {
      _ = false;
      for (var k = 0; k < m; k++) {
        var C = c[k], M = C.source(), D = C.target(), N = o(C), A = v(M), L = v(D);
        P(M, D, C, A, L, N), a || P(D, M, C, L, A, N);
      }
      if (!_)
        break;
    }
    if (_)
      for (var R = [], I = 0; I < m; I++) {
        var X = c[I], V = X.source(), Y = X.target(), W = o(X), Q = v(V).dist, J = v(Y).dist;
        if (Q + W < J || !a && J + W < Q)
          if (p || (Ae("Graph contains a negative weight cycle for Bellman-Ford"), p = true), e.findNegativeWeightCycles !== false) {
            var Z = [];
            Q + W < J && Z.push(V), !a && J + W < Q && Z.push(Y);
            for (var $ = Z.length, te = 0; te < $; te++) {
              var z = Z[te], O = [z];
              O.push(v(z).edge);
              for (var j = v(z).pred; O.indexOf(j) === -1; )
                O.push(j), O.push(v(j).edge), j = v(j).pred;
              O = O.slice(O.indexOf(j));
              for (var H = O[0].id(), ne = 0, oe = 2; oe < O.length; oe += 2)
                O[oe].id() < H && (H = O[oe].id(), ne = oe);
              O = O.slice(ne).concat(O.slice(0, ne)), O.push(O[0]);
              var Re = O.map(function(be) {
                return be.id();
              }).join(",");
              R.indexOf(Re) === -1 && (g.push(u.spawn(O)), R.push(Re));
            }
          } else
            break;
      }
    return {
      distanceTo: b,
      pathTo: w,
      hasNegativeWeightCycle: p,
      negativeWeightCycles: g
    };
  }
  // bellmanFord
};
var sf = Math.sqrt(2);
var lf = function(e, t, n) {
  n.length === 0 && Ye("Karger-Stein must be run on a connected (sub)graph");
  for (var r = n[e], a = r[1], i = r[2], o = t[a], u = t[i], l = n, s = l.length - 1; s >= 0; s--) {
    var c = l[s], d = c[1], h = c[2];
    (t[d] === o && t[h] === u || t[d] === u && t[h] === o) && l.splice(s, 1);
  }
  for (var f = 0; f < l.length; f++) {
    var p = l[f];
    p[1] === u ? (l[f] = p.slice(), l[f][1] = o) : p[2] === u && (l[f] = p.slice(), l[f][2] = o);
  }
  for (var g = 0; g < t.length; g++)
    t[g] === u && (t[g] = o);
  return l;
};
var di = function(e, t, n, r) {
  for (; n > r; ) {
    var a = Math.floor(Math.random() * t.length);
    t = lf(a, e, t), n--;
  }
  return t;
};
var uf = {
  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function() {
    var e = this, t = this.byGroup(), n = t.nodes, r = t.edges;
    r.unmergeBy(function(L) {
      return L.isLoop();
    });
    var a = n.length, i = r.length, o = Math.ceil(Math.pow(Math.log(a) / Math.LN2, 2)), u = Math.floor(a / sf);
    if (a < 2) {
      Ye("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var l = [], s = 0; s < i; s++) {
      var c = r[s];
      l.push([s, n.indexOf(c.source()), n.indexOf(c.target())]);
    }
    for (var d = 1 / 0, h = [], f = new Array(a), p = new Array(a), g = new Array(a), m = function(L, R) {
      for (var I = 0; I < a; I++)
        R[I] = L[I];
    }, v = 0; v <= o; v++) {
      for (var y = 0; y < a; y++)
        p[y] = y;
      var b = di(p, l.slice(), a, u), w = b.slice();
      m(p, g);
      var T = di(p, b, u, 2), S = di(g, w, u, 2);
      T.length <= S.length && T.length < d ? (d = T.length, h = T, m(p, f)) : S.length <= T.length && S.length < d && (d = S.length, h = S, m(g, f));
    }
    for (var x = this.spawn(h.map(function(L) {
      return r[L[0]];
    })), _ = this.spawn(), P = this.spawn(), B = f[0], k = 0; k < f.length; k++) {
      var C = f[k], M = n[k];
      C === B ? _.merge(M) : P.merge(M);
    }
    var D = function(L) {
      var R = e.spawn();
      return L.forEach(function(I) {
        R.merge(I), I.connectedEdges().forEach(function(X) {
          e.contains(X) && !x.contains(X) && R.merge(X);
        });
      }), R;
    }, N = [D(_), D(P)], A = {
      cut: x,
      components: N,
      // n.b. partitions are included to be compatible with the old api spec
      // (could be removed in a future major version)
      partition1: _,
      partition2: P
    };
    return A;
  }
};
var hi;
var cf = function(e) {
  return {
    x: e.x,
    y: e.y
  };
};
var Ra = function(e, t, n) {
  return {
    x: e.x * t + n.x,
    y: e.y * t + n.y
  };
};
var pc = function(e, t, n) {
  return {
    x: (e.x - n.x) / t,
    y: (e.y - n.y) / t
  };
};
var Xn = function(e) {
  return {
    x: e[0],
    y: e[1]
  };
};
var df = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, r = 1 / 0, a = t; a < n; a++) {
    var i = e[a];
    isFinite(i) && (r = Math.min(i, r));
  }
  return r;
};
var hf = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, r = -1 / 0, a = t; a < n; a++) {
    var i = e[a];
    isFinite(i) && (r = Math.max(i, r));
  }
  return r;
};
var ff = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, r = 0, a = 0, i = t; i < n; i++) {
    var o = e[i];
    isFinite(o) && (r += o, a++);
  }
  return r / a;
};
var pf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  r ? e = e.slice(t, n) : (n < e.length && e.splice(n, e.length - n), t > 0 && e.splice(0, t));
  for (var o = 0, u = e.length - 1; u >= 0; u--) {
    var l = e[u];
    i ? isFinite(l) || (e[u] = -1 / 0, o++) : e.splice(u, 1);
  }
  a && e.sort(function(d, h) {
    return d - h;
  });
  var s = e.length, c = Math.floor(s / 2);
  return s % 2 !== 0 ? e[c + 1 + o] : (e[c - 1 + o] + e[c + o]) / 2;
};
var vf = function(e) {
  return Math.PI * e / 180;
};
var Kr = function(e, t) {
  return Math.atan2(t, e) - Math.PI / 2;
};
var es = Math.log2 || function(e) {
  return Math.log(e) / Math.log(2);
};
var ts = function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
};
var Sn = function(e, t) {
  return Math.sqrt(xn(e, t));
};
var xn = function(e, t) {
  var n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
};
var gf = function(e) {
  for (var t = e.length, n = 0, r = 0; r < t; r++)
    n += e[r];
  for (var a = 0; a < t; a++)
    e[a] = e[a] / n;
  return e;
};
var at = function(e, t, n, r) {
  return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * t + r * r * n;
};
var Un = function(e, t, n, r) {
  return {
    x: at(e.x, t.x, n.x, r),
    y: at(e.y, t.y, n.y, r)
  };
};
var yf = function(e, t, n, r) {
  var a = {
    x: t.x - e.x,
    y: t.y - e.y
  }, i = Sn(e, t), o = {
    x: a.x / i,
    y: a.y / i
  };
  return n = n ?? 0, r = r ?? n * i, {
    x: e.x + o.x * r,
    y: e.y + o.y * r
  };
};
var Cr = function(e, t, n) {
  return Math.max(e, Math.min(n, t));
};
var bt = function(e) {
  if (e == null)
    return {
      x1: 1 / 0,
      y1: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
      w: 0,
      h: 0
    };
  if (e.x1 != null && e.y1 != null) {
    if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        w: e.x2 - e.x1,
        h: e.y2 - e.y1
      };
    if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + e.w,
        y2: e.y1 + e.h,
        w: e.w,
        h: e.h
      };
  }
};
var mf = function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
};
var bf = function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
};
var xf = function(e, t) {
  e.x1 = Math.min(e.x1, t.x1), e.x2 = Math.max(e.x2, t.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, t.y1), e.y2 = Math.max(e.y2, t.y2), e.h = e.y2 - e.y1;
};
var vc = function(e, t, n) {
  e.x1 = Math.min(e.x1, t), e.x2 = Math.max(e.x2, t), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, n), e.y2 = Math.max(e.y2, n), e.h = e.y2 - e.y1;
};
var oa = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= t, e.x2 += t, e.y1 -= t, e.y2 += t, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
};
var sa = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], n, r, a, i;
  if (t.length === 1)
    n = r = a = i = t[0];
  else if (t.length === 2)
    n = a = t[0], i = r = t[1];
  else if (t.length === 4) {
    var o = Je(t, 4);
    n = o[0], r = o[1], a = o[2], i = o[3];
  }
  return e.x1 -= i, e.x2 += r, e.y1 -= n, e.y2 += a, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
};
var Us = function(e, t) {
  e.x1 = t.x1, e.y1 = t.y1, e.x2 = t.x2, e.y2 = t.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
};
var ns = function(e, t) {
  return !(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
};
var Zn = function(e, t, n) {
  return e.x1 <= t && t <= e.x2 && e.y1 <= n && n <= e.y2;
};
var wf = function(e, t) {
  return Zn(e, t.x, t.y);
};
var Ef = function(e, t) {
  return Zn(e, t.x1, t.y1) && Zn(e, t.x2, t.y2);
};
var Tf = (hi = Math.hypot) !== null && hi !== void 0 ? hi : function(e, t) {
  return Math.sqrt(e * e + t * t);
};
function Cf(e, t) {
  if (e.length < 3)
    throw new Error("Need at least 3 vertices");
  var n = function(x, _) {
    return {
      x: x.x + _.x,
      y: x.y + _.y
    };
  }, r = function(x, _) {
    return {
      x: x.x - _.x,
      y: x.y - _.y
    };
  }, a = function(x, _) {
    return {
      x: x.x * _,
      y: x.y * _
    };
  }, i = function(x, _) {
    return x.x * _.y - x.y * _.x;
  }, o = function(x) {
    var _ = Tf(x.x, x.y);
    return _ === 0 ? {
      x: 0,
      y: 0
    } : {
      x: x.x / _,
      y: x.y / _
    };
  }, u = function(x) {
    for (var _ = 0, P = 0; P < x.length; P++) {
      var B = x[P], k = x[(P + 1) % x.length];
      _ += B.x * k.y - k.x * B.y;
    }
    return _ / 2;
  }, l = function(x, _, P, B) {
    var k = r(_, x), C = r(B, P), M = i(k, C);
    if (Math.abs(M) < 1e-9)
      return n(x, a(k, 0.5));
    var D = i(r(P, x), C) / M;
    return n(x, a(k, D));
  }, s = e.map(function(x) {
    return {
      x: x.x,
      y: x.y
    };
  });
  u(s) < 0 && s.reverse();
  for (var c = s.length, d = [], h = 0; h < c; h++) {
    var f = s[h], p = s[(h + 1) % c], g = r(p, f), m = o({
      x: g.y,
      y: -g.x
    });
    d.push(m);
  }
  for (var v = d.map(function(x, _) {
    var P = n(s[_], a(x, t)), B = n(s[(_ + 1) % c], a(x, t));
    return {
      p1: P,
      p2: B
    };
  }), y = [], b = 0; b < c; b++) {
    var w = v[(b - 1 + c) % c], T = v[b], S = l(w.p1, w.p2, T.p1, T.p2);
    y.push(S);
  }
  return y;
}
function Pf(e, t, n, r, a, i) {
  var o = If(e, t, n, r, a), u = Cf(o, i), l = bt();
  return u.forEach(function(s) {
    return vc(l, s.x, s.y);
  }), l;
}
var gc = function(e, t, n, r, a, i, o) {
  var u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", l = u === "auto" ? ln(a, i) : u, s = a / 2, c = i / 2;
  l = Math.min(l, s, c);
  var d = l !== s, h = l !== c, f;
  if (d) {
    var p = n - s + l - o, g = r - c - o, m = n + s - l + o, v = g;
    if (f = nn(e, t, n, r, p, g, m, v, false), f.length > 0)
      return f;
  }
  if (h) {
    var y = n + s + o, b = r - c + l - o, w = y, T = r + c - l + o;
    if (f = nn(e, t, n, r, y, b, w, T, false), f.length > 0)
      return f;
  }
  if (d) {
    var S = n - s + l - o, x = r + c + o, _ = n + s - l + o, P = x;
    if (f = nn(e, t, n, r, S, x, _, P, false), f.length > 0)
      return f;
  }
  if (h) {
    var B = n - s - o, k = r - c + l - o, C = B, M = r + c - l + o;
    if (f = nn(e, t, n, r, B, k, C, M, false), f.length > 0)
      return f;
  }
  var D;
  {
    var N = n - s + l, A = r - c + l;
    if (D = vr(e, t, n, r, N, A, l + o), D.length > 0 && D[0] <= N && D[1] <= A)
      return [D[0], D[1]];
  }
  {
    var L = n + s - l, R = r - c + l;
    if (D = vr(e, t, n, r, L, R, l + o), D.length > 0 && D[0] >= L && D[1] <= R)
      return [D[0], D[1]];
  }
  {
    var I = n + s - l, X = r + c - l;
    if (D = vr(e, t, n, r, I, X, l + o), D.length > 0 && D[0] >= I && D[1] >= X)
      return [D[0], D[1]];
  }
  {
    var V = n - s + l, Y = r + c - l;
    if (D = vr(e, t, n, r, V, Y, l + o), D.length > 0 && D[0] <= V && D[1] >= Y)
      return [D[0], D[1]];
  }
  return [];
};
var Sf = function(e, t, n, r, a, i, o) {
  var u = o, l = Math.min(n, a), s = Math.max(n, a), c = Math.min(r, i), d = Math.max(r, i);
  return l - u <= e && e <= s + u && c - u <= t && t <= d + u;
};
var kf = function(e, t, n, r, a, i, o, u, l) {
  var s = {
    x1: Math.min(n, o, a) - l,
    x2: Math.max(n, o, a) + l,
    y1: Math.min(r, u, i) - l,
    y2: Math.max(r, u, i) + l
  };
  return !(e < s.x1 || e > s.x2 || t < s.y1 || t > s.y2);
};
var _f = function(e, t, n, r) {
  n -= r;
  var a = t * t - 4 * e * n;
  if (a < 0)
    return [];
  var i = Math.sqrt(a), o = 2 * e, u = (-t + i) / o, l = (-t - i) / o;
  return [u, l];
};
var Bf = function(e, t, n, r, a) {
  var i = 1e-5;
  e === 0 && (e = i), t /= e, n /= e, r /= e;
  var o, u, l, s, c, d, h, f;
  if (u = (3 * n - t * t) / 9, l = -(27 * r) + t * (9 * n - 2 * (t * t)), l /= 54, o = u * u * u + l * l, a[1] = 0, h = t / 3, o > 0) {
    c = l + Math.sqrt(o), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), d = l - Math.sqrt(o), d = d < 0 ? -Math.pow(-d, 1 / 3) : Math.pow(d, 1 / 3), a[0] = -h + c + d, h += (c + d) / 2, a[4] = a[2] = -h, h = Math.sqrt(3) * (-d + c) / 2, a[3] = h, a[5] = -h;
    return;
  }
  if (a[5] = a[3] = 0, o === 0) {
    f = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), a[0] = -h + 2 * f, a[4] = a[2] = -(f + h);
    return;
  }
  u = -u, s = u * u * u, s = Math.acos(l / Math.sqrt(s)), f = 2 * Math.sqrt(u), a[0] = -h + f * Math.cos(s / 3), a[2] = -h + f * Math.cos((s + 2 * Math.PI) / 3), a[4] = -h + f * Math.cos((s + 4 * Math.PI) / 3);
};
var Df = function(e, t, n, r, a, i, o, u) {
  var l = 1 * n * n - 4 * n * a + 2 * n * o + 4 * a * a - 4 * a * o + o * o + r * r - 4 * r * i + 2 * r * u + 4 * i * i - 4 * i * u + u * u, s = 1 * 9 * n * a - 3 * n * n - 3 * n * o - 6 * a * a + 3 * a * o + 9 * r * i - 3 * r * r - 3 * r * u - 6 * i * i + 3 * i * u, c = 1 * 3 * n * n - 6 * n * a + n * o - n * e + 2 * a * a + 2 * a * e - o * e + 3 * r * r - 6 * r * i + r * u - r * t + 2 * i * i + 2 * i * t - u * t, d = 1 * n * a - n * n + n * e - a * e + r * i - r * r + r * t - i * t, h = [];
  Bf(l, s, c, d, h);
  for (var f = 1e-7, p = [], g = 0; g < 6; g += 2)
    Math.abs(h[g + 1]) < f && h[g] >= 0 && h[g] <= 1 && p.push(h[g]);
  p.push(1), p.push(0);
  for (var m = -1, v, y, b, w = 0; w < p.length; w++)
    v = Math.pow(1 - p[w], 2) * n + 2 * (1 - p[w]) * p[w] * a + p[w] * p[w] * o, y = Math.pow(1 - p[w], 2) * r + 2 * (1 - p[w]) * p[w] * i + p[w] * p[w] * u, b = Math.pow(v - e, 2) + Math.pow(y - t, 2), m >= 0 ? b < m && (m = b) : m = b;
  return m;
};
var Mf = function(e, t, n, r, a, i) {
  var o = [e - n, t - r], u = [a - n, i - r], l = u[0] * u[0] + u[1] * u[1], s = o[0] * o[0] + o[1] * o[1], c = o[0] * u[0] + o[1] * u[1], d = c * c / l;
  return c < 0 ? s : d > l ? (e - a) * (e - a) + (t - i) * (t - i) : s - d;
};
var Ct = function(e, t, n) {
  for (var r, a, i, o, u, l = 0, s = 0; s < n.length / 2; s++)
    if (r = n[s * 2], a = n[s * 2 + 1], s + 1 < n.length / 2 ? (i = n[(s + 1) * 2], o = n[(s + 1) * 2 + 1]) : (i = n[(s + 1 - n.length / 2) * 2], o = n[(s + 1 - n.length / 2) * 2 + 1]), !(r == e && i == e)) if (r >= e && e >= i || r <= e && e <= i)
      u = (e - r) / (i - r) * (o - a) + a, u > t && l++;
    else
      continue;
  return l % 2 !== 0;
};
var Ht = function(e, t, n, r, a, i, o, u, l) {
  var s = new Array(n.length), c;
  u[0] != null ? (c = Math.atan(u[1] / u[0]), u[0] < 0 ? c = c + Math.PI / 2 : c = -c - Math.PI / 2) : c = u;
  for (var d = Math.cos(-c), h = Math.sin(-c), f = 0; f < s.length / 2; f++)
    s[f * 2] = i / 2 * (n[f * 2] * d - n[f * 2 + 1] * h), s[f * 2 + 1] = o / 2 * (n[f * 2 + 1] * d + n[f * 2] * h), s[f * 2] += r, s[f * 2 + 1] += a;
  var p;
  if (l > 0) {
    var g = wa(s, -l);
    p = xa(g);
  } else
    p = s;
  return Ct(e, t, p);
};
var Af = function(e, t, n, r, a, i, o, u) {
  for (var l = new Array(n.length * 2), s = 0; s < u.length; s++) {
    var c = u[s];
    l[s * 4 + 0] = c.startX, l[s * 4 + 1] = c.startY, l[s * 4 + 2] = c.stopX, l[s * 4 + 3] = c.stopY;
    var d = Math.pow(c.cx - e, 2) + Math.pow(c.cy - t, 2);
    if (d <= Math.pow(c.radius, 2))
      return true;
  }
  return Ct(e, t, l);
};
var xa = function(e) {
  for (var t = new Array(e.length / 2), n, r, a, i, o, u, l, s, c = 0; c < e.length / 4; c++) {
    n = e[c * 4], r = e[c * 4 + 1], a = e[c * 4 + 2], i = e[c * 4 + 3], c < e.length / 4 - 1 ? (o = e[(c + 1) * 4], u = e[(c + 1) * 4 + 1], l = e[(c + 1) * 4 + 2], s = e[(c + 1) * 4 + 3]) : (o = e[0], u = e[1], l = e[2], s = e[3]);
    var d = nn(n, r, a, i, o, u, l, s, true);
    t[c * 2] = d[0], t[c * 2 + 1] = d[1];
  }
  return t;
};
var wa = function(e, t) {
  for (var n = new Array(e.length * 2), r, a, i, o, u = 0; u < e.length / 2; u++) {
    r = e[u * 2], a = e[u * 2 + 1], u < e.length / 2 - 1 ? (i = e[(u + 1) * 2], o = e[(u + 1) * 2 + 1]) : (i = e[0], o = e[1]);
    var l = o - a, s = -(i - r), c = Math.sqrt(l * l + s * s), d = l / c, h = s / c;
    n[u * 4] = r + d * t, n[u * 4 + 1] = a + h * t, n[u * 4 + 2] = i + d * t, n[u * 4 + 3] = o + h * t;
  }
  return n;
};
var Rf = function(e, t, n, r, a, i) {
  var o = n - e, u = r - t;
  o /= a, u /= i;
  var l = Math.sqrt(o * o + u * u), s = l - 1;
  if (s < 0)
    return [];
  var c = s / l;
  return [(n - e) * c + e, (r - t) * c + t];
};
var Cn = function(e, t, n, r, a, i, o) {
  return e -= a, t -= i, e /= n / 2 + o, t /= r / 2 + o, e * e + t * t <= 1;
};
var vr = function(e, t, n, r, a, i, o) {
  var u = [n - e, r - t], l = [e - a, t - i], s = u[0] * u[0] + u[1] * u[1], c = 2 * (l[0] * u[0] + l[1] * u[1]), d = l[0] * l[0] + l[1] * l[1] - o * o, h = c * c - 4 * s * d;
  if (h < 0)
    return [];
  var f = (-c + Math.sqrt(h)) / (2 * s), p = (-c - Math.sqrt(h)) / (2 * s), g = Math.min(f, p), m = Math.max(f, p), v = [];
  if (g >= 0 && g <= 1 && v.push(g), m >= 0 && m <= 1 && v.push(m), v.length === 0)
    return [];
  var y = v[0] * u[0] + e, b = v[0] * u[1] + t;
  if (v.length > 1) {
    if (v[0] == v[1])
      return [y, b];
    var w = v[1] * u[0] + e, T = v[1] * u[1] + t;
    return [y, b, w, T];
  } else
    return [y, b];
};
var fi = function(e, t, n) {
  return t <= e && e <= n || n <= e && e <= t ? e : e <= t && t <= n || n <= t && t <= e ? t : n;
};
var nn = function(e, t, n, r, a, i, o, u, l) {
  var s = e - a, c = n - e, d = o - a, h = t - i, f = r - t, p = u - i, g = d * h - p * s, m = c * h - f * s, v = p * c - d * f;
  if (v !== 0) {
    var y = g / v, b = m / v, w = 1e-3, T = 0 - w, S = 1 + w;
    return T <= y && y <= S && T <= b && b <= S ? [e + y * c, t + y * f] : l ? [e + y * c, t + y * f] : [];
  } else
    return g === 0 || m === 0 ? fi(e, n, o) === o ? [o, u] : fi(e, n, a) === a ? [a, i] : fi(a, o, n) === n ? [n, r] : [] : [];
};
var If = function(e, t, n, r, a) {
  var i = [], o = r / 2, u = a / 2, l = t, s = n;
  i.push({
    x: l + o * e[0],
    y: s + u * e[1]
  });
  for (var c = 1; c < e.length / 2; c++)
    i.push({
      x: l + o * e[c * 2],
      y: s + u * e[c * 2 + 1]
    });
  return i;
};
var Pr = function(e, t, n, r, a, i, o, u) {
  var l = [], s, c = new Array(n.length), d = true;
  i == null && (d = false);
  var h;
  if (d) {
    for (var f = 0; f < c.length / 2; f++)
      c[f * 2] = n[f * 2] * i + r, c[f * 2 + 1] = n[f * 2 + 1] * o + a;
    if (u > 0) {
      var p = wa(c, -u);
      h = xa(p);
    } else
      h = c;
  } else
    h = n;
  for (var g, m, v, y, b = 0; b < h.length / 2; b++)
    g = h[b * 2], m = h[b * 2 + 1], b < h.length / 2 - 1 ? (v = h[(b + 1) * 2], y = h[(b + 1) * 2 + 1]) : (v = h[0], y = h[1]), s = nn(e, t, r, a, g, m, v, y), s.length !== 0 && l.push(s[0], s[1]);
  return l;
};
var Nf = function(e, t, n, r, a, i, o, u, l) {
  var s = [], c, d = new Array(n.length * 2);
  l.forEach(function(v, y) {
    y === 0 ? (d[d.length - 2] = v.startX, d[d.length - 1] = v.startY) : (d[y * 4 - 2] = v.startX, d[y * 4 - 1] = v.startY), d[y * 4] = v.stopX, d[y * 4 + 1] = v.stopY, c = vr(e, t, r, a, v.cx, v.cy, v.radius), c.length !== 0 && s.push(c[0], c[1]);
  });
  for (var h = 0; h < d.length / 4; h++)
    c = nn(e, t, r, a, d[h * 4], d[h * 4 + 1], d[h * 4 + 2], d[h * 4 + 3], false), c.length !== 0 && s.push(c[0], c[1]);
  if (s.length > 2) {
    for (var f = [s[0], s[1]], p = Math.pow(f[0] - e, 2) + Math.pow(f[1] - t, 2), g = 1; g < s.length / 2; g++) {
      var m = Math.pow(s[g * 2] - e, 2) + Math.pow(s[g * 2 + 1] - t, 2);
      m <= p && (f[0] = s[g * 2], f[1] = s[g * 2 + 1], p = m);
    }
    return f;
  }
  return s;
};
var Zr = function(e, t, n) {
  var r = [e[0] - t[0], e[1] - t[1]], a = Math.sqrt(r[0] * r[0] + r[1] * r[1]), i = (a - n) / a;
  return i < 0 && (i = 1e-5), [t[0] + i * r[0], t[1] + i * r[1]];
};
var mt = function(e, t) {
  var n = _o(e, t);
  return n = yc(n), n;
};
var yc = function(e) {
  for (var t, n, r = e.length / 2, a = 1 / 0, i = 1 / 0, o = -1 / 0, u = -1 / 0, l = 0; l < r; l++)
    t = e[2 * l], n = e[2 * l + 1], a = Math.min(a, t), o = Math.max(o, t), i = Math.min(i, n), u = Math.max(u, n);
  for (var s = 2 / (o - a), c = 2 / (u - i), d = 0; d < r; d++)
    t = e[2 * d] = e[2 * d] * s, n = e[2 * d + 1] = e[2 * d + 1] * c, a = Math.min(a, t), o = Math.max(o, t), i = Math.min(i, n), u = Math.max(u, n);
  if (i < -1)
    for (var h = 0; h < r; h++)
      n = e[2 * h + 1] = e[2 * h + 1] + (-1 - i);
  return e;
};
var _o = function(e, t) {
  var n = 1 / e * 2 * Math.PI, r = e % 2 === 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
  r += t;
  for (var a = new Array(e * 2), i, o = 0; o < e; o++)
    i = o * n + r, a[2 * o] = Math.cos(i), a[2 * o + 1] = Math.sin(-i);
  return a;
};
var ln = function(e, t) {
  return Math.min(e / 4, t / 4, 8);
};
var mc = function(e, t) {
  return Math.min(e / 10, t / 10, 8);
};
var rs = function() {
  return 8;
};
var Lf = function(e, t, n) {
  return [e - 2 * t + n, 2 * (t - e), e];
};
var Bo = function(e, t) {
  return {
    heightOffset: Math.min(15, 0.05 * t),
    widthOffset: Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
};
function zf(e, t) {
  function n(d) {
    for (var h = [], f = 0; f < d.length; f++) {
      var p = d[f], g = d[(f + 1) % d.length], m = {
        x: g.x - p.x,
        y: g.y - p.y
      }, v = {
        x: -m.y,
        y: m.x
      }, y = Math.sqrt(v.x * v.x + v.y * v.y);
      h.push({
        x: v.x / y,
        y: v.y / y
      });
    }
    return h;
  }
  function r(d, h) {
    var f = 1 / 0, p = -1 / 0, g = Pt(d), m;
    try {
      for (g.s(); !(m = g.n()).done; ) {
        var v = m.value, y = v.x * h.x + v.y * h.y;
        f = Math.min(f, y), p = Math.max(p, y);
      }
    } catch (b) {
      g.e(b);
    } finally {
      g.f();
    }
    return {
      min: f,
      max: p
    };
  }
  function a(d, h) {
    return !(d.max < h.min || h.max < d.min);
  }
  var i = [].concat(ga(n(e)), ga(n(t))), o = Pt(i), u;
  try {
    for (o.s(); !(u = o.n()).done; ) {
      var l = u.value, s = r(e, l), c = r(t, l);
      if (!a(s, c))
        return false;
    }
  } catch (d) {
    o.e(d);
  } finally {
    o.f();
  }
  return true;
}
var Of = ct({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function(e) {
    return 1;
  }
});
var Vf = {
  pageRank: function(e) {
    for (var t = Of(e), n = t.dampingFactor, r = t.precision, a = t.iterations, i = t.weight, o = this._private.cy, u = this.byGroup(), l = u.nodes, s = u.edges, c = l.length, d = c * c, h = s.length, f = new Array(d), p = new Array(c), g = (1 - n) / c, m = 0; m < c; m++) {
      for (var v = 0; v < c; v++) {
        var y = m * c + v;
        f[y] = 0;
      }
      p[m] = 0;
    }
    for (var b = 0; b < h; b++) {
      var w = s[b], T = w.data("source"), S = w.data("target");
      if (T !== S) {
        var x = l.indexOfId(T), _ = l.indexOfId(S), P = i(w), B = _ * c + x;
        f[B] += P, p[x] += P;
      }
    }
    for (var k = 1 / c + g, C = 0; C < c; C++)
      if (p[C] === 0)
        for (var M = 0; M < c; M++) {
          var D = M * c + C;
          f[D] = k;
        }
      else
        for (var N = 0; N < c; N++) {
          var A = N * c + C;
          f[A] = f[A] / p[C] + g;
        }
    for (var L = new Array(c), R = new Array(c), I, X = 0; X < c; X++)
      L[X] = 1;
    for (var V = 0; V < a; V++) {
      for (var Y = 0; Y < c; Y++)
        R[Y] = 0;
      for (var W = 0; W < c; W++)
        for (var Q = 0; Q < c; Q++) {
          var J = W * c + Q;
          R[W] += f[J] * L[Q];
        }
      gf(R), I = L, L = R, R = I;
      for (var Z = 0, $ = 0; $ < c; $++) {
        var te = I[$] - L[$];
        Z += te * te;
      }
      if (Z < r)
        break;
    }
    var z = {
      rank: function(O) {
        return O = o.collection(O)[0], L[l.indexOf(O)];
      }
    };
    return z;
  }
  // pageRank
};
var Ws = ct({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: false,
  alpha: 0
});
var Wn = {
  degreeCentralityNormalized: function(e) {
    e = Ws(e);
    var t = this.cy(), n = this.nodes(), r = n.length;
    if (e.directed) {
      for (var a = {}, i = {}, o = 0, u = 0, l = 0; l < r; l++) {
        var s = n[l], c = s.id();
        e.root = s;
        var d = this.degreeCentrality(e);
        o < d.indegree && (o = d.indegree), u < d.outdegree && (u = d.outdegree), a[c] = d.indegree, i[c] = d.outdegree;
      }
      return {
        indegree: function(v) {
          return o == 0 ? 0 : (fe(v) && (v = t.filter(v)), a[v.id()] / o);
        },
        outdegree: function(v) {
          return u === 0 ? 0 : (fe(v) && (v = t.filter(v)), i[v.id()] / u);
        }
      };
    } else {
      for (var h = {}, f = 0, p = 0; p < r; p++) {
        var g = n[p];
        e.root = g;
        var m = this.degreeCentrality(e);
        f < m.degree && (f = m.degree), h[g.id()] = m.degree;
      }
      return {
        degree: function(v) {
          return f === 0 ? 0 : (fe(v) && (v = t.filter(v)), h[v.id()] / f);
        }
      };
    }
  },
  // degreeCentralityNormalized
  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function(e) {
    e = Ws(e);
    var t = this.cy(), n = this, r = e, a = r.root, i = r.weight, o = r.directed, u = r.alpha;
    if (a = t.collection(a)[0], o) {
      for (var l = a.connectedEdges(), s = l.filter(function(T) {
        return T.target().same(a) && n.has(T);
      }), c = l.filter(function(T) {
        return T.source().same(a) && n.has(T);
      }), d = s.length, h = c.length, f = 0, p = 0, g = 0; g < s.length; g++)
        f += i(s[g]);
      for (var m = 0; m < c.length; m++)
        p += i(c[m]);
      return {
        indegree: Math.pow(d, 1 - u) * Math.pow(f, u),
        outdegree: Math.pow(h, 1 - u) * Math.pow(p, u)
      };
    } else {
      for (var v = a.connectedEdges().intersection(n), y = v.length, b = 0, w = 0; w < v.length; w++)
        b += i(v[w]);
      return {
        degree: Math.pow(y, 1 - u) * Math.pow(b, u)
      };
    }
  }
  // degreeCentrality
};
Wn.dc = Wn.degreeCentrality;
Wn.dcn = Wn.degreeCentralityNormalised = Wn.degreeCentralityNormalized;
var Gs = ct({
  harmonic: true,
  weight: function() {
    return 1;
  },
  directed: false,
  root: null
});
var Gn = {
  closenessCentralityNormalized: function(e) {
    for (var t = Gs(e), n = t.harmonic, r = t.weight, a = t.directed, i = this.cy(), o = {}, u = 0, l = this.nodes(), s = this.floydWarshall({
      weight: r,
      directed: a
    }), c = 0; c < l.length; c++) {
      for (var d = 0, h = l[c], f = 0; f < l.length; f++)
        if (c !== f) {
          var p = s.distance(h, l[f]);
          n ? d += 1 / p : d += p;
        }
      n || (d = 1 / d), u < d && (u = d), o[h.id()] = d;
    }
    return {
      closeness: function(g) {
        return u == 0 ? 0 : (fe(g) ? g = i.filter(g)[0].id() : g = g.id(), o[g] / u);
      }
    };
  },
  // Implemented from pseudocode from wikipedia
  closenessCentrality: function(e) {
    var t = Gs(e), n = t.root, r = t.weight, a = t.directed, i = t.harmonic;
    n = this.filter(n)[0];
    for (var o = this.dijkstra({
      root: n,
      weight: r,
      directed: a
    }), u = 0, l = this.nodes(), s = 0; s < l.length; s++) {
      var c = l[s];
      if (!c.same(n)) {
        var d = o.distanceTo(c);
        i ? u += 1 / d : u += d;
      }
    }
    return i ? u : 1 / u;
  }
  // closenessCentrality
};
Gn.cc = Gn.closenessCentrality;
Gn.ccn = Gn.closenessCentralityNormalised = Gn.closenessCentralityNormalized;
var Ff = ct({
  weight: null,
  directed: false
});
var Do = {
  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function(e) {
    for (var t = Ff(e), n = t.directed, r = t.weight, a = r != null, i = this.cy(), o = this.nodes(), u = {}, l = {}, s = 0, c = {
      set: function(v, y) {
        l[v] = y, y > s && (s = y);
      },
      get: function(v) {
        return l[v];
      }
    }, d = 0; d < o.length; d++) {
      var h = o[d], f = h.id();
      n ? u[f] = h.outgoers().nodes() : u[f] = h.openNeighborhood().nodes(), c.set(f, 0);
    }
    for (var p = function() {
      for (var v = o[g].id(), y = [], b = {}, w = {}, T = {}, S = new zr(function(Y, W) {
        return T[Y] - T[W];
      }), x = 0; x < o.length; x++) {
        var _ = o[x].id();
        b[_] = [], w[_] = 0, T[_] = 1 / 0;
      }
      for (w[v] = 1, T[v] = 0, S.push(v); !S.empty(); ) {
        var P = S.pop();
        if (y.push(P), a)
          for (var B = 0; B < u[P].length; B++) {
            var k = u[P][B], C = i.getElementById(P), M = void 0;
            C.edgesTo(k).length > 0 ? M = C.edgesTo(k)[0] : M = k.edgesTo(C)[0];
            var D = r(M);
            k = k.id(), T[k] > T[P] + D && (T[k] = T[P] + D, S.nodes.indexOf(k) < 0 ? S.push(k) : S.updateItem(k), w[k] = 0, b[k] = []), T[k] == T[P] + D && (w[k] = w[k] + w[P], b[k].push(P));
          }
        else
          for (var N = 0; N < u[P].length; N++) {
            var A = u[P][N].id();
            T[A] == 1 / 0 && (S.push(A), T[A] = T[P] + 1), T[A] == T[P] + 1 && (w[A] = w[A] + w[P], b[A].push(P));
          }
      }
      for (var L = {}, R = 0; R < o.length; R++)
        L[o[R].id()] = 0;
      for (; y.length > 0; ) {
        for (var I = y.pop(), X = 0; X < b[I].length; X++) {
          var V = b[I][X];
          L[V] = L[V] + w[V] / w[I] * (1 + L[I]);
        }
        I != o[g].id() && c.set(I, c.get(I) + L[I]);
      }
    }, g = 0; g < o.length; g++)
      p();
    var m = {
      betweenness: function(v) {
        var y = i.collection(v).id();
        return c.get(y);
      },
      betweennessNormalized: function(v) {
        if (s == 0)
          return 0;
        var y = i.collection(v).id();
        return c.get(y) / s;
      }
    };
    return m.betweennessNormalised = m.betweennessNormalized, m;
  }
  // betweennessCentrality
};
Do.bc = Do.betweennessCentrality;
var jf = ct({
  expandFactor: 2,
  // affects time of computation and cluster granularity to some extent: M * M
  inflateFactor: 2,
  // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
  multFactor: 1,
  // optional self loops for each node. Use a neutral value to improve cluster computations.
  maxIterations: 20,
  // maximum number of iterations of the MCL algorithm in a single run
  attributes: [
    // attributes/features used to group nodes, ie. similarity values between nodes
    function(e) {
      return 1;
    }
  ]
});
var Xf = function(e) {
  return jf(e);
};
var Yf = function(e, t) {
  for (var n = 0, r = 0; r < t.length; r++)
    n += t[r](e);
  return n;
};
var qf = function(e, t, n) {
  for (var r = 0; r < t; r++)
    e[r * t + r] = n;
};
var bc = function(e, t) {
  for (var n, r = 0; r < t; r++) {
    n = 0;
    for (var a = 0; a < t; a++)
      n += e[a * t + r];
    for (var i = 0; i < t; i++)
      e[i * t + r] = e[i * t + r] / n;
  }
};
var Uf = function(e, t, n) {
  for (var r = new Array(n * n), a = 0; a < n; a++) {
    for (var i = 0; i < n; i++)
      r[a * n + i] = 0;
    for (var o = 0; o < n; o++)
      for (var u = 0; u < n; u++)
        r[a * n + u] += e[a * n + o] * t[o * n + u];
  }
  return r;
};
var Wf = function(e, t, n) {
  for (var r = e.slice(0), a = 1; a < n; a++)
    e = Uf(e, r, t);
  return e;
};
var Gf = function(e, t, n) {
  for (var r = new Array(t * t), a = 0; a < t * t; a++)
    r[a] = Math.pow(e[a], n);
  return bc(r, t), r;
};
var Hf = function(e, t, n, r) {
  for (var a = 0; a < n; a++) {
    var i = Math.round(e[a] * Math.pow(10, r)) / Math.pow(10, r), o = Math.round(t[a] * Math.pow(10, r)) / Math.pow(10, r);
    if (i !== o)
      return false;
  }
  return true;
};
var Kf = function(e, t, n, r) {
  for (var a = [], i = 0; i < t; i++) {
    for (var o = [], u = 0; u < t; u++)
      Math.round(e[i * t + u] * 1e3) / 1e3 > 0 && o.push(n[u]);
    o.length !== 0 && a.push(r.collection(o));
  }
  return a;
};
var Zf = function(e, t) {
  for (var n = 0; n < e.length; n++)
    if (!t[n] || e[n].id() !== t[n].id())
      return false;
  return true;
};
var Qf = function(e) {
  for (var t = 0; t < e.length; t++)
    for (var n = 0; n < e.length; n++)
      t != n && Zf(e[t], e[n]) && e.splice(n, 1);
  return e;
};
var Hs = function(e) {
  for (var t = this.nodes(), n = this.edges(), r = this.cy(), a = Xf(e), i = {}, o = 0; o < t.length; o++)
    i[t[o].id()] = o;
  for (var u = t.length, l = u * u, s = new Array(l), c, d = 0; d < l; d++)
    s[d] = 0;
  for (var h = 0; h < n.length; h++) {
    var f = n[h], p = i[f.source().id()], g = i[f.target().id()], m = Yf(f, a.attributes);
    s[p * u + g] += m, s[g * u + p] += m;
  }
  qf(s, u, a.multFactor), bc(s, u);
  for (var v = true, y = 0; v && y < a.maxIterations; )
    v = false, c = Wf(s, u, a.expandFactor), s = Gf(c, u, a.inflateFactor), Hf(s, c, l, 4) || (v = true), y++;
  var b = Kf(s, u, t, r);
  return b = Qf(b), b;
};
var $f = {
  markovClustering: Hs,
  mcl: Hs
};
var Jf = function(e) {
  return e;
};
var xc = function(e, t) {
  return Math.abs(t - e);
};
var Ks = function(e, t, n) {
  return e + xc(t, n);
};
var Zs = function(e, t, n) {
  return e + Math.pow(n - t, 2);
};
var ep = function(e) {
  return Math.sqrt(e);
};
var tp = function(e, t, n) {
  return Math.max(e, xc(t, n));
};
var lr = function(e, t, n, r, a) {
  for (var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Jf, o = r, u, l, s = 0; s < e; s++)
    u = t(s), l = n(s), o = a(o, u, l);
  return i(o);
};
var Qn = {
  euclidean: function(e, t, n) {
    return e >= 2 ? lr(e, t, n, 0, Zs, ep) : lr(e, t, n, 0, Ks);
  },
  squaredEuclidean: function(e, t, n) {
    return lr(e, t, n, 0, Zs);
  },
  manhattan: function(e, t, n) {
    return lr(e, t, n, 0, Ks);
  },
  max: function(e, t, n) {
    return lr(e, t, n, -1 / 0, tp);
  }
};
Qn["squared-euclidean"] = Qn.squaredEuclidean;
Qn.squaredeuclidean = Qn.squaredEuclidean;
function Ia(e, t, n, r, a, i) {
  var o;
  return qe(e) ? o = e : o = Qn[e] || Qn.euclidean, t === 0 && qe(e) ? o(a, i) : o(t, n, r, a, i);
}
var np = ct({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: false,
  testCentroids: null
});
var as = function(e) {
  return np(e);
};
var Ea = function(e, t, n, r, a) {
  var i = a !== "kMedoids", o = i ? function(c) {
    return n[c];
  } : function(c) {
    return r[c](n);
  }, u = function(c) {
    return r[c](t);
  }, l = n, s = t;
  return Ia(e, r.length, o, u, l, s);
};
var pi = function(e, t, n) {
  for (var r = n.length, a = new Array(r), i = new Array(r), o = new Array(t), u = null, l = 0; l < r; l++)
    a[l] = e.min(n[l]).value, i[l] = e.max(n[l]).value;
  for (var s = 0; s < t; s++) {
    u = [];
    for (var c = 0; c < r; c++)
      u[c] = Math.random() * (i[c] - a[c]) + a[c];
    o[s] = u;
  }
  return o;
};
var wc = function(e, t, n, r, a) {
  for (var i = 1 / 0, o = 0, u = 0; u < t.length; u++) {
    var l = Ea(n, e, t[u], r, a);
    l < i && (i = l, o = u);
  }
  return o;
};
var Ec = function(e, t, n) {
  for (var r = [], a = null, i = 0; i < t.length; i++)
    a = t[i], n[a.id()] === e && r.push(a);
  return r;
};
var rp = function(e, t, n) {
  return Math.abs(t - e) <= n;
};
var ap = function(e, t, n) {
  for (var r = 0; r < e.length; r++)
    for (var a = 0; a < e[r].length; a++) {
      var i = Math.abs(e[r][a] - t[r][a]);
      if (i > n)
        return false;
    }
  return true;
};
var ip = function(e, t, n) {
  for (var r = 0; r < n; r++)
    if (e === t[r]) return true;
  return false;
};
var Qs = function(e, t) {
  var n = new Array(t);
  if (e.length < 50)
    for (var r = 0; r < t; r++) {
      for (var a = e[Math.floor(Math.random() * e.length)]; ip(a, n, r); )
        a = e[Math.floor(Math.random() * e.length)];
      n[r] = a;
    }
  else
    for (var i = 0; i < t; i++)
      n[i] = e[Math.floor(Math.random() * e.length)];
  return n;
};
var $s = function(e, t, n) {
  for (var r = 0, a = 0; a < t.length; a++)
    r += Ea("manhattan", t[a], e, n, "kMedoids");
  return r;
};
var op = function(e) {
  var t = this.cy(), n = this.nodes(), r = null, a = as(e), i = new Array(a.k), o = {}, u;
  a.testMode ? typeof a.testCentroids == "number" ? (a.testCentroids, u = pi(n, a.k, a.attributes)) : tt(a.testCentroids) === "object" ? u = a.testCentroids : u = pi(n, a.k, a.attributes) : u = pi(n, a.k, a.attributes);
  for (var l = true, s = 0; l && s < a.maxIterations; ) {
    for (var c = 0; c < n.length; c++)
      r = n[c], o[r.id()] = wc(r, u, a.distance, a.attributes, "kMeans");
    l = false;
    for (var d = 0; d < a.k; d++) {
      var h = Ec(d, n, o);
      if (h.length !== 0) {
        for (var f = a.attributes.length, p = u[d], g = new Array(f), m = new Array(f), v = 0; v < f; v++) {
          m[v] = 0;
          for (var y = 0; y < h.length; y++)
            r = h[y], m[v] += a.attributes[v](r);
          g[v] = m[v] / h.length, rp(g[v], p[v], a.sensitivityThreshold) || (l = true);
        }
        u[d] = g, i[d] = t.collection(h);
      }
    }
    s++;
  }
  return i;
};
var sp = function(e) {
  var t = this.cy(), n = this.nodes(), r = null, a = as(e), i = new Array(a.k), o, u = {}, l, s = new Array(a.k);
  a.testMode ? typeof a.testCentroids == "number" || (tt(a.testCentroids) === "object" ? o = a.testCentroids : o = Qs(n, a.k)) : o = Qs(n, a.k);
  for (var c = true, d = 0; c && d < a.maxIterations; ) {
    for (var h = 0; h < n.length; h++)
      r = n[h], u[r.id()] = wc(r, o, a.distance, a.attributes, "kMedoids");
    c = false;
    for (var f = 0; f < o.length; f++) {
      var p = Ec(f, n, u);
      if (p.length !== 0) {
        s[f] = $s(o[f], p, a.attributes);
        for (var g = 0; g < p.length; g++)
          l = $s(p[g], p, a.attributes), l < s[f] && (s[f] = l, o[f] = p[g], c = true);
        i[f] = t.collection(p);
      }
    }
    d++;
  }
  return i;
};
var lp = function(e, t, n, r, a) {
  for (var i, o, u = 0; u < t.length; u++)
    for (var l = 0; l < e.length; l++)
      r[u][l] = Math.pow(n[u][l], a.m);
  for (var s = 0; s < e.length; s++)
    for (var c = 0; c < a.attributes.length; c++) {
      i = 0, o = 0;
      for (var d = 0; d < t.length; d++)
        i += r[d][s] * a.attributes[c](t[d]), o += r[d][s];
      e[s][c] = i / o;
    }
};
var up = function(e, t, n, r, a) {
  for (var i = 0; i < e.length; i++)
    t[i] = e[i].slice();
  for (var o, u, l, s = 2 / (a.m - 1), c = 0; c < n.length; c++)
    for (var d = 0; d < r.length; d++) {
      o = 0;
      for (var h = 0; h < n.length; h++)
        u = Ea(a.distance, r[d], n[c], a.attributes, "cmeans"), l = Ea(a.distance, r[d], n[h], a.attributes, "cmeans"), o += Math.pow(u / l, s);
      e[d][c] = 1 / o;
    }
};
var cp = function(e, t, n, r) {
  for (var a = new Array(n.k), i = 0; i < a.length; i++)
    a[i] = [];
  for (var o, u, l = 0; l < t.length; l++) {
    o = -1 / 0, u = -1;
    for (var s = 0; s < t[0].length; s++)
      t[l][s] > o && (o = t[l][s], u = s);
    a[u].push(e[l]);
  }
  for (var c = 0; c < a.length; c++)
    a[c] = r.collection(a[c]);
  return a;
};
var Js = function(e) {
  var t = this.cy(), n = this.nodes(), r = as(e), a, i, o, u, l;
  u = new Array(n.length);
  for (var s = 0; s < n.length; s++)
    u[s] = new Array(r.k);
  o = new Array(n.length);
  for (var c = 0; c < n.length; c++)
    o[c] = new Array(r.k);
  for (var d = 0; d < n.length; d++) {
    for (var h = 0, f = 0; f < r.k; f++)
      o[d][f] = Math.random(), h += o[d][f];
    for (var p = 0; p < r.k; p++)
      o[d][p] = o[d][p] / h;
  }
  i = new Array(r.k);
  for (var g = 0; g < r.k; g++)
    i[g] = new Array(r.attributes.length);
  l = new Array(n.length);
  for (var m = 0; m < n.length; m++)
    l[m] = new Array(r.k);
  for (var v = true, y = 0; v && y < r.maxIterations; )
    v = false, lp(i, n, o, l, r), up(o, u, i, n, r), ap(o, u, r.sensitivityThreshold) || (v = true), y++;
  return a = cp(n, o, r, t), {
    clusters: a,
    degreeOfMembership: o
  };
};
var dp = {
  kMeans: op,
  kMedoids: sp,
  fuzzyCMeans: Js,
  fcm: Js
};
var hp = ct({
  distance: "euclidean",
  // distance metric to compare nodes
  linkage: "min",
  // linkage criterion : how to determine the distance between clusters of nodes
  mode: "threshold",
  // mode:'threshold' => clusters must be threshold distance apart
  threshold: 1 / 0,
  // the distance threshold
  // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
  addDendrogram: false,
  // whether to add the dendrogram to the graph for viz
  dendrogramDepth: 0,
  // depth at which dendrogram branches are merged into the returned clusters
  attributes: []
  // array of attr functions
});
var fp = {
  single: "min",
  complete: "max"
};
var pp = function(e) {
  var t = hp(e), n = fp[t.linkage];
  return n != null && (t.linkage = n), t;
};
var el = function(e, t, n, r, a) {
  for (var i = 0, o = 1 / 0, u, l = a.attributes, s = function(x, _) {
    return Ia(a.distance, l.length, function(P) {
      return l[P](x);
    }, function(P) {
      return l[P](_);
    }, x, _);
  }, c = 0; c < e.length; c++) {
    var d = e[c].key, h = n[d][r[d]];
    h < o && (i = d, o = h);
  }
  if (a.mode === "threshold" && o >= a.threshold || a.mode === "dendrogram" && e.length === 1)
    return false;
  var f = t[i], p = t[r[i]], g;
  a.mode === "dendrogram" ? g = {
    left: f,
    right: p,
    key: f.key
  } : g = {
    value: f.value.concat(p.value),
    key: f.key
  }, e[f.index] = g, e.splice(p.index, 1), t[f.key] = g;
  for (var m = 0; m < e.length; m++) {
    var v = e[m];
    f.key === v.key ? u = 1 / 0 : a.linkage === "min" ? (u = n[f.key][v.key], n[f.key][v.key] > n[p.key][v.key] && (u = n[p.key][v.key])) : a.linkage === "max" ? (u = n[f.key][v.key], n[f.key][v.key] < n[p.key][v.key] && (u = n[p.key][v.key])) : a.linkage === "mean" ? u = (n[f.key][v.key] * f.size + n[p.key][v.key] * p.size) / (f.size + p.size) : a.mode === "dendrogram" ? u = s(v.value, f.value) : u = s(v.value[0], f.value[0]), n[f.key][v.key] = n[v.key][f.key] = u;
  }
  for (var y = 0; y < e.length; y++) {
    var b = e[y].key;
    if (r[b] === f.key || r[b] === p.key) {
      for (var w = b, T = 0; T < e.length; T++) {
        var S = e[T].key;
        n[b][S] < n[b][w] && (w = S);
      }
      r[b] = w;
    }
    e[y].index = y;
  }
  return f.key = p.key = f.index = p.index = null, true;
};
var Yn = function(e, t, n) {
  e && (e.value ? t.push(e.value) : (e.left && Yn(e.left, t), e.right && Yn(e.right, t)));
};
var Mo = function(e, t) {
  if (!e) return "";
  if (e.left && e.right) {
    var n = Mo(e.left, t), r = Mo(e.right, t), a = t.add({
      group: "nodes",
      data: {
        id: n + "," + r
      }
    });
    return t.add({
      group: "edges",
      data: {
        source: n,
        target: a.id()
      }
    }), t.add({
      group: "edges",
      data: {
        source: r,
        target: a.id()
      }
    }), a.id();
  } else if (e.value)
    return e.value.id();
};
var Ao = function(e, t, n) {
  if (!e) return [];
  var r = [], a = [], i = [];
  return t === 0 ? (e.left && Yn(e.left, r), e.right && Yn(e.right, a), i = r.concat(a), [n.collection(i)]) : t === 1 ? e.value ? [n.collection(e.value)] : (e.left && Yn(e.left, r), e.right && Yn(e.right, a), [n.collection(r), n.collection(a)]) : e.value ? [n.collection(e.value)] : (e.left && (r = Ao(e.left, t - 1, n)), e.right && (a = Ao(e.right, t - 1, n)), r.concat(a));
};
var tl = function(e) {
  for (var t = this.cy(), n = this.nodes(), r = pp(e), a = r.attributes, i = function(v, y) {
    return Ia(r.distance, a.length, function(b) {
      return a[b](v);
    }, function(b) {
      return a[b](y);
    }, v, y);
  }, o = [], u = [], l = [], s = [], c = 0; c < n.length; c++) {
    var d = {
      value: r.mode === "dendrogram" ? n[c] : [n[c]],
      key: c,
      index: c
    };
    o[c] = d, s[c] = d, u[c] = [], l[c] = 0;
  }
  for (var h = 0; h < o.length; h++)
    for (var f = 0; f <= h; f++) {
      var p = void 0;
      r.mode === "dendrogram" ? p = h === f ? 1 / 0 : i(o[h].value, o[f].value) : p = h === f ? 1 / 0 : i(o[h].value[0], o[f].value[0]), u[h][f] = p, u[f][h] = p, p < u[h][l[h]] && (l[h] = f);
    }
  for (var g = el(o, s, u, l, r); g; )
    g = el(o, s, u, l, r);
  var m;
  return r.mode === "dendrogram" ? (m = Ao(o[0], r.dendrogramDepth, t), r.addDendrogram && Mo(o[0], t)) : (m = new Array(o.length), o.forEach(function(v, y) {
    v.key = v.index = null, m[y] = t.collection(v.value);
  })), m;
};
var vp = {
  hierarchicalClustering: tl,
  hca: tl
};
var gp = ct({
  distance: "euclidean",
  // distance metric to compare attributes between two nodes
  preference: "median",
  // suitability of a data point to serve as an exemplar
  damping: 0.8,
  // damping factor between [0.5, 1)
  maxIterations: 1e3,
  // max number of iterations to run
  minIterations: 100,
  // min number of iterations to run in order for clustering to stop
  attributes: [
    // functions to quantify the similarity between any two points
    // e.g. node => node.data('weight')
  ]
});
var yp = function(e) {
  var t = e.damping, n = e.preference;
  0.5 <= t && t < 1 || Ye("Damping must range on [0.5, 1).  Got: ".concat(t));
  var r = ["median", "mean", "min", "max"];
  return r.some(function(a) {
    return a === n;
  }) || ee(n) || Ye("Preference must be one of [".concat(r.map(function(a) {
    return "'".concat(a, "'");
  }).join(", "), "] or a number.  Got: ").concat(n)), gp(e);
};
var mp = function(e, t, n, r) {
  var a = function(i, o) {
    return r[o](i);
  };
  return -Ia(e, r.length, function(i) {
    return a(t, i);
  }, function(i) {
    return a(n, i);
  }, t, n);
};
var bp = function(e, t) {
  var n = null;
  return t === "median" ? n = pf(e) : t === "mean" ? n = ff(e) : t === "min" ? n = df(e) : t === "max" ? n = hf(e) : n = t, n;
};
var xp = function(e, t, n) {
  for (var r = [], a = 0; a < e; a++)
    t[a * e + a] + n[a * e + a] > 0 && r.push(a);
  return r;
};
var nl = function(e, t, n) {
  for (var r = [], a = 0; a < e; a++) {
    for (var i = -1, o = -1 / 0, u = 0; u < n.length; u++) {
      var l = n[u];
      t[a * e + l] > o && (i = l, o = t[a * e + l]);
    }
    i > 0 && r.push(i);
  }
  for (var s = 0; s < n.length; s++)
    r[n[s]] = n[s];
  return r;
};
var wp = function(e, t, n) {
  for (var r = nl(e, t, n), a = 0; a < n.length; a++) {
    for (var i = [], o = 0; o < r.length; o++)
      r[o] === n[a] && i.push(o);
    for (var u = -1, l = -1 / 0, s = 0; s < i.length; s++) {
      for (var c = 0, d = 0; d < i.length; d++)
        c += t[i[d] * e + i[s]];
      c > l && (u = s, l = c);
    }
    n[a] = i[u];
  }
  return r = nl(e, t, n), r;
};
var rl = function(e) {
  for (var t = this.cy(), n = this.nodes(), r = yp(e), a = {}, i = 0; i < n.length; i++)
    a[n[i].id()] = i;
  var o, u, l, s, c, d;
  o = n.length, u = o * o, l = new Array(u);
  for (var h = 0; h < u; h++)
    l[h] = -1 / 0;
  for (var f = 0; f < o; f++)
    for (var p = 0; p < o; p++)
      f !== p && (l[f * o + p] = mp(r.distance, n[f], n[p], r.attributes));
  s = bp(l, r.preference);
  for (var g = 0; g < o; g++)
    l[g * o + g] = s;
  c = new Array(u);
  for (var m = 0; m < u; m++)
    c[m] = 0;
  d = new Array(u);
  for (var v = 0; v < u; v++)
    d[v] = 0;
  for (var y = new Array(o), b = new Array(o), w = new Array(o), T = 0; T < o; T++)
    y[T] = 0, b[T] = 0, w[T] = 0;
  for (var S = new Array(o * r.minIterations), x = 0; x < S.length; x++)
    S[x] = 0;
  var _;
  for (_ = 0; _ < r.maxIterations; _++) {
    for (var P = 0; P < o; P++) {
      for (var B = -1 / 0, k = -1 / 0, C = -1, M = 0, D = 0; D < o; D++)
        y[D] = c[P * o + D], M = d[P * o + D] + l[P * o + D], M >= B ? (k = B, B = M, C = D) : M > k && (k = M);
      for (var N = 0; N < o; N++)
        c[P * o + N] = (1 - r.damping) * (l[P * o + N] - B) + r.damping * y[N];
      c[P * o + C] = (1 - r.damping) * (l[P * o + C] - k) + r.damping * y[C];
    }
    for (var A = 0; A < o; A++) {
      for (var L = 0, R = 0; R < o; R++)
        y[R] = d[R * o + A], b[R] = Math.max(0, c[R * o + A]), L += b[R];
      L -= b[A], b[A] = c[A * o + A], L += b[A];
      for (var I = 0; I < o; I++)
        d[I * o + A] = (1 - r.damping) * Math.min(0, L - b[I]) + r.damping * y[I];
      d[A * o + A] = (1 - r.damping) * (L - b[A]) + r.damping * y[A];
    }
    for (var X = 0, V = 0; V < o; V++) {
      var Y = d[V * o + V] + c[V * o + V] > 0 ? 1 : 0;
      S[_ % r.minIterations * o + V] = Y, X += Y;
    }
    if (X > 0 && (_ >= r.minIterations - 1 || _ == r.maxIterations - 1)) {
      for (var W = 0, Q = 0; Q < o; Q++) {
        w[Q] = 0;
        for (var J = 0; J < r.minIterations; J++)
          w[Q] += S[J * o + Q];
        (w[Q] === 0 || w[Q] === r.minIterations) && W++;
      }
      if (W === o)
        break;
    }
  }
  for (var Z = xp(o, c, d), $ = wp(o, l, Z), te = {}, z = 0; z < Z.length; z++)
    te[Z[z]] = [];
  for (var O = 0; O < n.length; O++) {
    var j = a[n[O].id()], H = $[j];
    H != null && te[H].push(n[O]);
  }
  for (var ne = new Array(Z.length), oe = 0; oe < Z.length; oe++)
    ne[oe] = t.collection(te[Z[oe]]);
  return ne;
};
var Ep = {
  affinityPropagation: rl,
  ap: rl
};
var Tp = ct({
  root: void 0,
  directed: false
});
var Cp = {
  hierholzer: function(e) {
    if (!_e(e)) {
      var t = arguments;
      e = {
        root: t[0],
        directed: t[1]
      };
    }
    var n = Tp(e), r = n.root, a = n.directed, i = this, o = false, u, l, s;
    r && (s = fe(r) ? this.filter(r)[0].id() : r[0].id());
    var c = {}, d = {};
    a ? i.forEach(function(v) {
      var y = v.id();
      if (v.isNode()) {
        var b = v.indegree(true), w = v.outdegree(true), T = b - w, S = w - b;
        T == 1 ? u ? o = true : u = y : S == 1 ? l ? o = true : l = y : (S > 1 || T > 1) && (o = true), c[y] = [], v.outgoers().forEach(function(x) {
          x.isEdge() && c[y].push(x.id());
        });
      } else
        d[y] = [void 0, v.target().id()];
    }) : i.forEach(function(v) {
      var y = v.id();
      if (v.isNode()) {
        var b = v.degree(true);
        b % 2 && (u ? l ? o = true : l = y : u = y), c[y] = [], v.connectedEdges().forEach(function(w) {
          return c[y].push(w.id());
        });
      } else
        d[y] = [v.source().id(), v.target().id()];
    });
    var h = {
      found: false,
      trail: void 0
    };
    if (o) return h;
    if (l && u)
      if (a) {
        if (s && l != s)
          return h;
        s = l;
      } else {
        if (s && l != s && u != s)
          return h;
        s || (s = l);
      }
    else
      s || (s = i[0].id());
    var f = function(v) {
      for (var y = v, b = [v], w, T, S; c[y].length; )
        w = c[y].shift(), T = d[w][0], S = d[w][1], y != S ? (c[S] = c[S].filter(function(x) {
          return x != w;
        }), y = S) : !a && y != T && (c[T] = c[T].filter(function(x) {
          return x != w;
        }), y = T), b.unshift(w), b.unshift(y);
      return b;
    }, p = [], g = [];
    for (g = f(s); g.length != 1; )
      c[g[0]].length == 0 ? (p.unshift(i.getElementById(g.shift())), p.unshift(i.getElementById(g.shift()))) : g = f(g.shift()).concat(g);
    p.unshift(i.getElementById(g.shift()));
    for (var m in c)
      if (c[m].length)
        return h;
    return h.found = true, h.trail = this.spawn(p, true), h;
  }
};
var Qr = function() {
  var e = this, t = {}, n = 0, r = 0, a = [], i = [], o = {}, u = function(c, d) {
    for (var h = i.length - 1, f = [], p = e.spawn(); i[h].x != c || i[h].y != d; )
      f.push(i.pop().edge), h--;
    f.push(i.pop().edge), f.forEach(function(g) {
      var m = g.connectedNodes().intersection(e);
      p.merge(g), m.forEach(function(v) {
        var y = v.id(), b = v.connectedEdges().intersection(e);
        p.merge(v), t[y].cutVertex ? p.merge(b.filter(function(w) {
          return w.isLoop();
        })) : p.merge(b);
      });
    }), a.push(p);
  }, l = function(c, d, h) {
    c === h && (r += 1), t[d] = {
      id: n,
      low: n++,
      cutVertex: false
    };
    var f = e.getElementById(d).connectedEdges().intersection(e);
    if (f.size() === 0)
      a.push(e.spawn(e.getElementById(d)));
    else {
      var p, g, m, v;
      f.forEach(function(y) {
        p = y.source().id(), g = y.target().id(), m = p === d ? g : p, m !== h && (v = y.id(), o[v] || (o[v] = true, i.push({
          x: d,
          y: m,
          edge: y
        })), m in t ? t[d].low = Math.min(t[d].low, t[m].id) : (l(c, m, d), t[d].low = Math.min(t[d].low, t[m].low), t[d].id <= t[m].low && (t[d].cutVertex = true, u(d, m))));
      });
    }
  };
  e.forEach(function(c) {
    if (c.isNode()) {
      var d = c.id();
      d in t || (r = 0, l(d, d), t[d].cutVertex = r > 1);
    }
  });
  var s = Object.keys(t).filter(function(c) {
    return t[c].cutVertex;
  }).map(function(c) {
    return e.getElementById(c);
  });
  return {
    cut: e.spawn(s),
    components: a
  };
};
var Pp = {
  hopcroftTarjanBiconnected: Qr,
  htbc: Qr,
  htb: Qr,
  hopcroftTarjanBiconnectedComponents: Qr
};
var $r = function() {
  var e = this, t = {}, n = 0, r = [], a = [], i = e.spawn(e), o = function(u) {
    a.push(u), t[u] = {
      index: n,
      low: n++,
      explored: false
    };
    var l = e.getElementById(u).connectedEdges().intersection(e);
    if (l.forEach(function(f) {
      var p = f.target().id();
      p !== u && (p in t || o(p), t[p].explored || (t[u].low = Math.min(t[u].low, t[p].low)));
    }), t[u].index === t[u].low) {
      for (var s = e.spawn(); ; ) {
        var c = a.pop();
        if (s.merge(e.getElementById(c)), t[c].low = t[u].index, t[c].explored = true, c === u)
          break;
      }
      var d = s.edgesWith(s), h = s.merge(d);
      r.push(h), i = i.difference(h);
    }
  };
  return e.forEach(function(u) {
    if (u.isNode()) {
      var l = u.id();
      l in t || o(l);
    }
  }), {
    cut: i,
    components: r
  };
};
var Sp = {
  tarjanStronglyConnected: $r,
  tsc: $r,
  tscc: $r,
  tarjanStronglyConnectedComponents: $r
};
var Tc = {};
[Tr, $h, Jh, tf, rf, of, uf, Vf, Wn, Gn, Do, $f, dp, vp, Ep, Cp, Pp, Sp].forEach(function(e) {
  ve(Tc, e);
});
var Cc = 0;
var Pc = 1;
var Sc = 2;
var Nt = function(e) {
  if (!(this instanceof Nt)) return new Nt(e);
  this.id = "Thenable/1.0.7", this.state = Cc, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: this.then.bind(this)
  }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
Nt.prototype = {
  /*  promise resolving methods  */
  fulfill: function(e) {
    return al(this, Pc, "fulfillValue", e);
  },
  reject: function(e) {
    return al(this, Sc, "rejectReason", e);
  },
  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function(e, t) {
    var n = this, r = new Nt();
    return n.onFulfilled.push(ol(e, r, "fulfill")), n.onRejected.push(ol(t, r, "reject")), kc(n), r.proxy;
  }
};
var al = function(e, t, n, r) {
  return e.state === Cc && (e.state = t, e[n] = r, kc(e)), e;
};
var kc = function(e) {
  e.state === Pc ? il(e, "onFulfilled", e.fulfillValue) : e.state === Sc && il(e, "onRejected", e.rejectReason);
};
var il = function(e, t, n) {
  if (e[t].length !== 0) {
    var r = e[t];
    e[t] = [];
    var a = function() {
      for (var i = 0; i < r.length; i++) r[i](n);
    };
    typeof setImmediate == "function" ? setImmediate(a) : setTimeout(a, 0);
  }
};
var ol = function(e, t, n) {
  return function(r) {
    if (typeof e != "function")
      t[n].call(t, r);
    else {
      var a;
      try {
        a = e(r);
      } catch (i) {
        t.reject(i);
        return;
      }
      _c(t, a);
    }
  };
};
var _c = function(e, t) {
  if (e === t || e.proxy === t) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var n;
  if (tt(t) === "object" && t !== null || typeof t == "function")
    try {
      n = t.then;
    } catch (a) {
      e.reject(a);
      return;
    }
  if (typeof n == "function") {
    var r = false;
    try {
      n.call(
        t,
        /*  resolvePromise  */
        /*  [Promises/A+ 2.3.3.3.1]  */
        function(a) {
          r || (r = true, a === t ? e.reject(new TypeError("circular thenable chain")) : _c(e, a));
        },
        /*  rejectPromise  */
        /*  [Promises/A+ 2.3.3.3.2]  */
        function(a) {
          r || (r = true, e.reject(a));
        }
      );
    } catch (a) {
      r || e.reject(a);
    }
    return;
  }
  e.fulfill(t);
};
Nt.all = function(e) {
  return new Nt(function(t, n) {
    for (var r = new Array(e.length), a = 0, i = function(u, l) {
      r[u] = l, a++, a === e.length && t(r);
    }, o = 0; o < e.length; o++)
      (function(u) {
        var l = e[u], s = l != null && l.then != null;
        if (s)
          l.then(function(d) {
            i(u, d);
          }, function(d) {
            n(d);
          });
        else {
          var c = l;
          i(u, c);
        }
      })(o);
  });
};
Nt.resolve = function(e) {
  return new Nt(function(t, n) {
    t(e);
  });
};
Nt.reject = function(e) {
  return new Nt(function(t, n) {
    n(e);
  });
};
var tr = typeof Promise < "u" ? Promise : Nt;
var Ro = function(e, t, n) {
  var r = Ho(e), a = !r, i = this._private = ve({
    duration: 1e3
  }, t, n);
  if (i.target = e, i.style = i.style || i.css, i.started = false, i.playing = false, i.hooked = false, i.applying = false, i.progress = 0, i.completes = [], i.frames = [], i.complete && qe(i.complete) && i.completes.push(i.complete), a) {
    var o = e.position();
    i.startPosition = i.startPosition || {
      x: o.x,
      y: o.y
    }, i.startStyle = i.startStyle || e.cy().style().getAnimationStartStyle(e, i.style);
  }
  if (r) {
    var u = e.pan();
    i.startPan = {
      x: u.x,
      y: u.y
    }, i.startZoom = e.zoom();
  }
  this.length = 1, this[0] = this;
};
var kn = Ro.prototype;
ve(kn, {
  instanceString: function() {
    return "animation";
  },
  hook: function() {
    var e = this._private;
    if (!e.hooked) {
      var t, n = e.target._private.animation;
      e.queue ? t = n.queue : t = n.current, t.push(this), St(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = true;
    }
    return this;
  },
  play: function() {
    var e = this._private;
    return e.progress === 1 && (e.progress = 0), e.playing = true, e.started = false, e.stopped = false, this.hook(), this;
  },
  playing: function() {
    return this._private.playing;
  },
  apply: function() {
    var e = this._private;
    return e.applying = true, e.started = false, e.stopped = false, this.hook(), this;
  },
  applying: function() {
    return this._private.applying;
  },
  pause: function() {
    var e = this._private;
    return e.playing = false, e.started = false, this;
  },
  stop: function() {
    var e = this._private;
    return e.playing = false, e.started = false, e.stopped = true, this;
  },
  rewind: function() {
    return this.progress(0);
  },
  fastforward: function() {
    return this.progress(1);
  },
  time: function(e) {
    var t = this._private;
    return e === void 0 ? t.progress * t.duration : this.progress(e / t.duration);
  },
  progress: function(e) {
    var t = this._private, n = t.playing;
    return e === void 0 ? t.progress : (n && this.pause(), t.progress = e, t.started = false, n && this.play(), this);
  },
  completed: function() {
    return this._private.progress === 1;
  },
  reverse: function() {
    var e = this._private, t = e.playing;
    t && this.pause(), e.progress = 1 - e.progress, e.started = false;
    var n = function(u, l) {
      var s = e[u];
      s != null && (e[u] = e[l], e[l] = s);
    };
    if (n("zoom", "startZoom"), n("pan", "startPan"), n("position", "startPosition"), e.style)
      for (var r = 0; r < e.style.length; r++) {
        var a = e.style[r], i = a.name, o = e.startStyle[i];
        e.startStyle[i] = a, e.style[r] = o;
      }
    return t && this.play(), this;
  },
  promise: function(e) {
    var t = this._private, n;
    switch (e) {
      case "frame":
        n = t.frames;
        break;
      default:
      case "complete":
      case "completed":
        n = t.completes;
    }
    return new tr(function(r, a) {
      n.push(function() {
        r();
      });
    });
  }
});
kn.complete = kn.completed;
kn.run = kn.play;
kn.running = kn.playing;
var kp = {
  animated: function() {
    return function() {
      var e = this, t = e.length !== void 0, n = t ? e : [e], r = this._private.cy || this;
      if (!r.styleEnabled())
        return false;
      var a = n[0];
      if (a)
        return a._private.animation.current.length > 0;
    };
  },
  // animated
  clearQueue: function() {
    return function() {
      var e = this, t = e.length !== void 0, n = t ? e : [e], r = this._private.cy || this;
      if (!r.styleEnabled())
        return this;
      for (var a = 0; a < n.length; a++) {
        var i = n[a];
        i._private.animation.queue = [];
      }
      return this;
    };
  },
  // clearQueue
  delay: function() {
    return function(e, t) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animate({
        delay: e,
        duration: e,
        complete: t
      }) : this;
    };
  },
  // delay
  delayAnimation: function() {
    return function(e, t) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animation({
        delay: e,
        duration: e,
        complete: t
      }) : this;
    };
  },
  // delay
  animation: function() {
    return function(e, t) {
      var n = this, r = n.length !== void 0, a = r ? n : [n], i = this._private.cy || this, o = !r, u = !o;
      if (!i.styleEnabled())
        return this;
      var l = i.style();
      e = ve({}, e, t);
      var s = Object.keys(e).length === 0;
      if (s)
        return new Ro(a[0], e);
      switch (e.duration === void 0 && (e.duration = 400), e.duration) {
        case "slow":
          e.duration = 600;
          break;
        case "fast":
          e.duration = 200;
          break;
      }
      if (u && (e.style = l.getPropsList(e.style || e.css), e.css = void 0), u && e.renderedPosition != null) {
        var c = e.renderedPosition, d = i.pan(), h = i.zoom();
        e.position = pc(c, h, d);
      }
      if (o && e.panBy != null) {
        var f = e.panBy, p = i.pan();
        e.pan = {
          x: p.x + f.x,
          y: p.y + f.y
        };
      }
      var g = e.center || e.centre;
      if (o && g != null) {
        var m = i.getCenterPan(g.eles, e.zoom);
        m != null && (e.pan = m);
      }
      if (o && e.fit != null) {
        var v = e.fit, y = i.getFitViewport(v.eles || v.boundingBox, v.padding);
        y != null && (e.pan = y.pan, e.zoom = y.zoom);
      }
      if (o && _e(e.zoom)) {
        var b = i.getZoomedViewport(e.zoom);
        b != null ? (b.zoomed && (e.zoom = b.zoom), b.panned && (e.pan = b.pan)) : e.zoom = null;
      }
      return new Ro(a[0], e);
    };
  },
  // animate
  animate: function() {
    return function(e, t) {
      var n = this, r = n.length !== void 0, a = r ? n : [n], i = this._private.cy || this;
      if (!i.styleEnabled())
        return this;
      t && (e = ve({}, e, t));
      for (var o = 0; o < a.length; o++) {
        var u = a[o], l = u.animated() && (e.queue === void 0 || e.queue), s = u.animation(e, l ? {
          queue: true
        } : void 0);
        s.play();
      }
      return this;
    };
  },
  // animate
  stop: function() {
    return function(e, t) {
      var n = this, r = n.length !== void 0, a = r ? n : [n], i = this._private.cy || this;
      if (!i.styleEnabled())
        return this;
      for (var o = 0; o < a.length; o++) {
        for (var u = a[o], l = u._private, s = l.animation.current, c = 0; c < s.length; c++) {
          var d = s[c], h = d._private;
          t && (h.duration = 0);
        }
        e && (l.animation.queue = []), t || (l.animation.current = []);
      }
      return i.notify("draw"), this;
    };
  }
  // stop
};
var vi;
var sl;
function Na() {
  if (sl) return vi;
  sl = 1;
  var e = Array.isArray;
  return vi = e, vi;
}
var gi;
var ll;
function _p() {
  if (ll) return gi;
  ll = 1;
  var e = Na(), t = Nr(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return false;
    var u = typeof i;
    return u == "number" || u == "symbol" || u == "boolean" || i == null || t(i) ? true : r.test(i) || !n.test(i) || o != null && i in Object(o);
  }
  return gi = a, gi;
}
var yi;
var ul;
function Bp() {
  if (ul) return yi;
  ul = 1;
  var e = ic(), t = Ir(), n = "[object AsyncFunction]", r = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return false;
    var l = e(u);
    return l == r || l == a || l == n || l == i;
  }
  return yi = o, yi;
}
var mi;
var cl;
function Dp() {
  if (cl) return mi;
  cl = 1;
  var e = Ma(), t = e["__core-js_shared__"];
  return mi = t, mi;
}
var bi;
var dl;
function Mp() {
  if (dl) return bi;
  dl = 1;
  var e = Dp(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function n(r) {
    return !!t && t in r;
  }
  return bi = n, bi;
}
var xi;
var hl;
function Ap() {
  if (hl) return xi;
  hl = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return xi = n, xi;
}
var wi;
var fl;
function Rp() {
  if (fl) return wi;
  fl = 1;
  var e = Bp(), t = Mp(), n = Ir(), r = Ap(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, l = o.toString, s = u.hasOwnProperty, c = RegExp(
    "^" + l.call(s).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function d(h) {
    if (!n(h) || t(h))
      return false;
    var f = e(h) ? c : i;
    return f.test(r(h));
  }
  return wi = d, wi;
}
var Ei;
var pl;
function Ip() {
  if (pl) return Ei;
  pl = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return Ei = e, Ei;
}
var Ti;
var vl;
function is() {
  if (vl) return Ti;
  vl = 1;
  var e = Rp(), t = Ip();
  function n(r, a) {
    var i = t(r, a);
    return e(i) ? i : void 0;
  }
  return Ti = n, Ti;
}
var Ci;
var gl;
function La() {
  if (gl) return Ci;
  gl = 1;
  var e = is(), t = e(Object, "create");
  return Ci = t, Ci;
}
var Pi;
var yl;
function Np() {
  if (yl) return Pi;
  yl = 1;
  var e = La();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Pi = t, Pi;
}
var Si;
var ml;
function Lp() {
  if (ml) return Si;
  ml = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return Si = e, Si;
}
var ki;
var bl;
function zp() {
  if (bl) return ki;
  bl = 1;
  var e = La(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var u = o[i];
      return u === t ? void 0 : u;
    }
    return r.call(o, i) ? o[i] : void 0;
  }
  return ki = a, ki;
}
var _i;
var xl;
function Op() {
  if (xl) return _i;
  xl = 1;
  var e = La(), t = Object.prototype, n = t.hasOwnProperty;
  function r(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : n.call(i, a);
  }
  return _i = r, _i;
}
var Bi;
var wl;
function Vp() {
  if (wl) return Bi;
  wl = 1;
  var e = La(), t = "__lodash_hash_undefined__";
  function n(r, a) {
    var i = this.__data__;
    return this.size += this.has(r) ? 0 : 1, i[r] = e && a === void 0 ? t : a, this;
  }
  return Bi = n, Bi;
}
var Di;
var El;
function Fp() {
  if (El) return Di;
  El = 1;
  var e = Np(), t = Lp(), n = zp(), r = Op(), a = Vp();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var s = o[u];
      this.set(s[0], s[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = n, i.prototype.has = r, i.prototype.set = a, Di = i, Di;
}
var Mi;
var Tl;
function jp() {
  if (Tl) return Mi;
  Tl = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Mi = e, Mi;
}
var Ai;
var Cl;
function Bc() {
  if (Cl) return Ai;
  Cl = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Ai = e, Ai;
}
var Ri;
var Pl;
function za() {
  if (Pl) return Ri;
  Pl = 1;
  var e = Bc();
  function t(n, r) {
    for (var a = n.length; a--; )
      if (e(n[a][0], r))
        return a;
    return -1;
  }
  return Ri = t, Ri;
}
var Ii;
var Sl;
function Xp() {
  if (Sl) return Ii;
  Sl = 1;
  var e = za(), t = Array.prototype, n = t.splice;
  function r(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return false;
    var u = i.length - 1;
    return o == u ? i.pop() : n.call(i, o, 1), --this.size, true;
  }
  return Ii = r, Ii;
}
var Ni;
var kl;
function Yp() {
  if (kl) return Ni;
  kl = 1;
  var e = za();
  function t(n) {
    var r = this.__data__, a = e(r, n);
    return a < 0 ? void 0 : r[a][1];
  }
  return Ni = t, Ni;
}
var Li;
var _l;
function qp() {
  if (_l) return Li;
  _l = 1;
  var e = za();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Li = t, Li;
}
var zi;
var Bl;
function Up() {
  if (Bl) return zi;
  Bl = 1;
  var e = za();
  function t(n, r) {
    var a = this.__data__, i = e(a, n);
    return i < 0 ? (++this.size, a.push([n, r])) : a[i][1] = r, this;
  }
  return zi = t, zi;
}
var Oi;
var Dl;
function Wp() {
  if (Dl) return Oi;
  Dl = 1;
  var e = jp(), t = Xp(), n = Yp(), r = qp(), a = Up();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var s = o[u];
      this.set(s[0], s[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = n, i.prototype.has = r, i.prototype.set = a, Oi = i, Oi;
}
var Vi;
var Ml;
function Gp() {
  if (Ml) return Vi;
  Ml = 1;
  var e = is(), t = Ma(), n = e(t, "Map");
  return Vi = n, Vi;
}
var Fi;
var Al;
function Hp() {
  if (Al) return Fi;
  Al = 1;
  var e = Fp(), t = Wp(), n = Gp();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return Fi = r, Fi;
}
var ji;
var Rl;
function Kp() {
  if (Rl) return ji;
  Rl = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return ji = e, ji;
}
var Xi;
var Il;
function Oa() {
  if (Il) return Xi;
  Il = 1;
  var e = Kp();
  function t(n, r) {
    var a = n.__data__;
    return e(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
  }
  return Xi = t, Xi;
}
var Yi;
var Nl;
function Zp() {
  if (Nl) return Yi;
  Nl = 1;
  var e = Oa();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Yi = t, Yi;
}
var qi;
var Ll;
function Qp() {
  if (Ll) return qi;
  Ll = 1;
  var e = Oa();
  function t(n) {
    return e(this, n).get(n);
  }
  return qi = t, qi;
}
var Ui;
var zl;
function $p() {
  if (zl) return Ui;
  zl = 1;
  var e = Oa();
  function t(n) {
    return e(this, n).has(n);
  }
  return Ui = t, Ui;
}
var Wi;
var Ol;
function Jp() {
  if (Ol) return Wi;
  Ol = 1;
  var e = Oa();
  function t(n, r) {
    var a = e(this, n), i = a.size;
    return a.set(n, r), this.size += a.size == i ? 0 : 1, this;
  }
  return Wi = t, Wi;
}
var Gi;
var Vl;
function ev() {
  if (Vl) return Gi;
  Vl = 1;
  var e = Hp(), t = Zp(), n = Qp(), r = $p(), a = Jp();
  function i(o) {
    var u = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++u < l; ) {
      var s = o[u];
      this.set(s[0], s[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = n, i.prototype.has = r, i.prototype.set = a, Gi = i, Gi;
}
var Hi;
var Fl;
function tv() {
  if (Fl) return Hi;
  Fl = 1;
  var e = ev(), t = "Expected a function";
  function n(r, a) {
    if (typeof r != "function" || a != null && typeof a != "function")
      throw new TypeError(t);
    var i = function() {
      var o = arguments, u = a ? a.apply(this, o) : o[0], l = i.cache;
      if (l.has(u))
        return l.get(u);
      var s = r.apply(this, o);
      return i.cache = l.set(u, s) || l, s;
    };
    return i.cache = new (n.Cache || e)(), i;
  }
  return n.Cache = e, Hi = n, Hi;
}
var Ki;
var jl;
function nv() {
  if (jl) return Ki;
  jl = 1;
  var e = tv(), t = 500;
  function n(r) {
    var a = e(r, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return Ki = n, Ki;
}
var Zi;
var Xl;
function Dc() {
  if (Xl) return Zi;
  Xl = 1;
  var e = nv(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, u, l, s) {
      i.push(l ? s.replace(n, "$1") : u || o);
    }), i;
  });
  return Zi = r, Zi;
}
var Qi;
var Yl;
function Mc() {
  if (Yl) return Qi;
  Yl = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length, i = Array(a); ++r < a; )
      i[r] = n(t[r], r, t);
    return i;
  }
  return Qi = e, Qi;
}
var $i;
var ql;
function rv() {
  if (ql) return $i;
  ql = 1;
  var e = Zo(), t = Mc(), n = Na(), r = Nr(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
  function o(u) {
    if (typeof u == "string")
      return u;
    if (n(u))
      return t(u, o) + "";
    if (r(u))
      return i ? i.call(u) : "";
    var l = u + "";
    return l == "0" && 1 / u == -1 / 0 ? "-0" : l;
  }
  return $i = o, $i;
}
var Ji;
var Ul;
function Ac() {
  if (Ul) return Ji;
  Ul = 1;
  var e = rv();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Ji = t, Ji;
}
var eo;
var Wl;
function Rc() {
  if (Wl) return eo;
  Wl = 1;
  var e = Na(), t = _p(), n = Dc(), r = Ac();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : n(r(i));
  }
  return eo = a, eo;
}
var to;
var Gl;
function os() {
  if (Gl) return to;
  Gl = 1;
  var e = Nr();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return to = t, to;
}
var no;
var Hl;
function av() {
  if (Hl) return no;
  Hl = 1;
  var e = Rc(), t = os();
  function n(r, a) {
    a = e(a, r);
    for (var i = 0, o = a.length; r != null && i < o; )
      r = r[t(a[i++])];
    return i && i == o ? r : void 0;
  }
  return no = n, no;
}
var ro;
var Kl;
function iv() {
  if (Kl) return ro;
  Kl = 1;
  var e = av();
  function t(n, r, a) {
    var i = n == null ? void 0 : e(n, r);
    return i === void 0 ? a : i;
  }
  return ro = t, ro;
}
var ov = iv();
var sv = Rr(ov);
var ao;
var Zl;
function lv() {
  if (Zl) return ao;
  Zl = 1;
  var e = is(), t = function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  }();
  return ao = t, ao;
}
var io;
var Ql;
function uv() {
  if (Ql) return io;
  Ql = 1;
  var e = lv();
  function t(n, r, a) {
    r == "__proto__" && e ? e(n, r, {
      configurable: true,
      enumerable: true,
      value: a,
      writable: true
    }) : n[r] = a;
  }
  return io = t, io;
}
var oo;
var $l;
function cv() {
  if ($l) return oo;
  $l = 1;
  var e = uv(), t = Bc(), n = Object.prototype, r = n.hasOwnProperty;
  function a(i, o, u) {
    var l = i[o];
    (!(r.call(i, o) && t(l, u)) || u === void 0 && !(o in i)) && e(i, o, u);
  }
  return oo = a, oo;
}
var so;
var Jl;
function dv() {
  if (Jl) return so;
  Jl = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, a) {
    var i = typeof r;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < a;
  }
  return so = n, so;
}
var lo;
var eu;
function hv() {
  if (eu) return lo;
  eu = 1;
  var e = cv(), t = Rc(), n = dv(), r = Ir(), a = os();
  function i(o, u, l, s) {
    if (!r(o))
      return o;
    u = t(u, o);
    for (var c = -1, d = u.length, h = d - 1, f = o; f != null && ++c < d; ) {
      var p = a(u[c]), g = l;
      if (p === "__proto__" || p === "constructor" || p === "prototype")
        return o;
      if (c != h) {
        var m = f[p];
        g = s ? s(m, p, f) : void 0, g === void 0 && (g = r(m) ? m : n(u[c + 1]) ? [] : {});
      }
      e(f, p, g), f = f[p];
    }
    return o;
  }
  return lo = i, lo;
}
var uo;
var tu;
function fv() {
  if (tu) return uo;
  tu = 1;
  var e = hv();
  function t(n, r, a) {
    return n == null ? n : e(n, r, a);
  }
  return uo = t, uo;
}
var pv = fv();
var vv = Rr(pv);
var co;
var nu;
function gv() {
  if (nu) return co;
  nu = 1;
  function e(t, n) {
    var r = -1, a = t.length;
    for (n || (n = Array(a)); ++r < a; )
      n[r] = t[r];
    return n;
  }
  return co = e, co;
}
var ho;
var ru;
function yv() {
  if (ru) return ho;
  ru = 1;
  var e = Mc(), t = gv(), n = Na(), r = Nr(), a = Dc(), i = os(), o = Ac();
  function u(l) {
    return n(l) ? e(l, i) : r(l) ? [l] : t(a(o(l)));
  }
  return ho = u, ho;
}
var mv = yv();
var bv = Rr(mv);
var xv = {
  // access data field
  data: function(e) {
    var t = {
      field: "data",
      bindingEvent: "data",
      allowBinding: false,
      allowSetting: false,
      allowGetting: false,
      settingEvent: "data",
      settingTriggersEvent: false,
      triggerFnName: "trigger",
      immutableKeys: {},
      // key => true if immutable
      updateStyle: false,
      beforeGet: function(n) {
      },
      beforeSet: function(n, r) {
      },
      onSet: function(n) {
      },
      canSet: function(n) {
        return true;
      }
    };
    return e = ve({}, t, e), function(n, r) {
      var a = e, i = this, o = i.length !== void 0, u = o ? i : [i], l = o ? i[0] : i;
      if (fe(n)) {
        var s = n.indexOf(".") !== -1, c = s && bv(n);
        if (a.allowGetting && r === void 0) {
          var d;
          return l && (a.beforeGet(l), c && l._private[a.field][n] === void 0 ? d = sv(l._private[a.field], c) : d = l._private[a.field][n]), d;
        } else if (a.allowSetting && r !== void 0) {
          var h = !a.immutableKeys[n];
          if (h) {
            var f = Ku({}, n, r);
            a.beforeSet(i, f);
            for (var p = 0, g = u.length; p < g; p++) {
              var m = u[p];
              a.canSet(m) && (c && l._private[a.field][n] === void 0 ? vv(m._private[a.field], c, r) : m._private[a.field][n] = r);
            }
            a.updateStyle && i.updateStyle(), a.onSet(i), a.settingTriggersEvent && i[a.triggerFnName](a.settingEvent);
          }
        }
      } else if (a.allowSetting && _e(n)) {
        var v = n, y, b, w = Object.keys(v);
        a.beforeSet(i, v);
        for (var T = 0; T < w.length; T++) {
          y = w[T], b = v[y];
          var S = !a.immutableKeys[y];
          if (S)
            for (var x = 0; x < u.length; x++) {
              var _ = u[x];
              a.canSet(_) && (_._private[a.field][y] = b);
            }
        }
        a.updateStyle && i.updateStyle(), a.onSet(i), a.settingTriggersEvent && i[a.triggerFnName](a.settingEvent);
      } else if (a.allowBinding && qe(n)) {
        var P = n;
        i.on(a.bindingEvent, P);
      } else if (a.allowGetting && n === void 0) {
        var B;
        return l && (a.beforeGet(l), B = l._private[a.field]), B;
      }
      return i;
    };
  },
  // data
  // remove data field
  removeData: function(e) {
    var t = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: false,
      immutableKeys: {}
      // key => true if immutable
    };
    return e = ve({}, t, e), function(n) {
      var r = e, a = this, i = a.length !== void 0, o = i ? a : [a];
      if (fe(n)) {
        for (var u = n.split(/\s+/), l = u.length, s = 0; s < l; s++) {
          var c = u[s];
          if (!on(c)) {
            var d = !r.immutableKeys[c];
            if (d)
              for (var h = 0, f = o.length; h < f; h++)
                o[h]._private[r.field][c] = void 0;
          }
        }
        r.triggerEvent && a[r.triggerFnName](r.event);
      } else if (n === void 0) {
        for (var p = 0, g = o.length; p < g; p++)
          for (var m = o[p]._private[r.field], v = Object.keys(m), y = 0; y < v.length; y++) {
            var b = v[y], w = !r.immutableKeys[b];
            w && (m[b] = void 0);
          }
        r.triggerEvent && a[r.triggerFnName](r.event);
      }
      return a;
    };
  }
  // removeData
};
var wv = {
  eventAliasesOn: function(e) {
    var t = e;
    t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(n, r) {
      var a = this, i = Array.prototype.slice.call(arguments, 0);
      return new tr(function(o, u) {
        var l = function(d) {
          a.off.apply(a, c), o(d);
        }, s = i.concat([l]), c = s.concat([]);
        a.on.apply(a, s);
      });
    };
  }
};
var Me = {};
[kp, xv, wv].forEach(function(e) {
  ve(Me, e);
});
var Ev = {
  animate: Me.animate(),
  animation: Me.animation(),
  animated: Me.animated(),
  clearQueue: Me.clearQueue(),
  delay: Me.delay(),
  delayAnimation: Me.delayAnimation(),
  stop: Me.stop()
};
var la = {
  classes: function(e) {
    var t = this;
    if (e === void 0) {
      var n = [];
      return t[0]._private.classes.forEach(function(f) {
        return n.push(f);
      }), n;
    } else Le(e) || (e = (e || "").match(/\S+/g) || []);
    for (var r = [], a = new er(e), i = 0; i < t.length; i++) {
      for (var o = t[i], u = o._private, l = u.classes, s = false, c = 0; c < e.length; c++) {
        var d = e[c], h = l.has(d);
        if (!h) {
          s = true;
          break;
        }
      }
      s || (s = l.size !== e.length), s && (u.classes = a, r.push(o));
    }
    return r.length > 0 && this.spawn(r).updateStyle().emit("class"), t;
  },
  addClass: function(e) {
    return this.toggleClass(e, true);
  },
  hasClass: function(e) {
    var t = this[0];
    return t != null && t._private.classes.has(e);
  },
  toggleClass: function(e, t) {
    Le(e) || (e = e.match(/\S+/g) || []);
    for (var n = this, r = t === void 0, a = [], i = 0, o = n.length; i < o; i++)
      for (var u = n[i], l = u._private.classes, s = false, c = 0; c < e.length; c++) {
        var d = e[c], h = l.has(d), f = false;
        t || r && !h ? (l.add(d), f = true) : (!t || r && h) && (l.delete(d), f = true), !s && f && (a.push(u), s = true);
      }
    return a.length > 0 && this.spawn(a).updateStyle().emit("class"), n;
  },
  removeClass: function(e) {
    return this.toggleClass(e, false);
  },
  flashClass: function(e, t) {
    var n = this;
    if (t == null)
      t = 250;
    else if (t === 0)
      return n;
    return n.addClass(e), setTimeout(function() {
      n.removeClass(e);
    }, t), n;
  }
};
la.className = la.classNames = la.classes;
var ke = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  // chars we need to escape in let names, etc
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  // binary comparison op (used in data selectors)
  boolOp: "\\?|\\!|\\^",
  // boolean (unary) operators (used in data selectors)
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  // string literals (used in data selectors) -- doublequotes | singlequotes
  number: et,
  // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
  meta: "degree|indegree|outdegree",
  // allowed metadata fields (i.e. allowed functions to use from Collection)
  separator: "\\s*,\\s*",
  // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
ke.variable = "(?:[\\w-.]|(?:\\\\" + ke.metaChar + "))+";
ke.className = "(?:[\\w-]|(?:\\\\" + ke.metaChar + "))+";
ke.value = ke.string + "|" + ke.number;
ke.id = ke.variable;
(function() {
  var e, t, n;
  for (e = ke.comparatorOp.split("|"), n = 0; n < e.length; n++)
    t = e[n], ke.comparatorOp += "|@" + t;
  for (e = ke.comparatorOp.split("|"), n = 0; n < e.length; n++)
    t = e[n], !(t.indexOf("!") >= 0) && t !== "=" && (ke.comparatorOp += "|\\!" + t);
})();
var Ne = function() {
  return {
    checks: []
  };
};
var ie = {
  /** E.g. node */
  GROUP: 0,
  /** A collection of elements */
  COLLECTION: 1,
  /** A filter(ele) function */
  FILTER: 2,
  /** E.g. [foo > 1] */
  DATA_COMPARE: 3,
  /** E.g. [foo] */
  DATA_EXIST: 4,
  /** E.g. [?foo] */
  DATA_BOOL: 5,
  /** E.g. [[degree > 2]] */
  META_COMPARE: 6,
  /** E.g. :selected */
  STATE: 7,
  /** E.g. #foo */
  ID: 8,
  /** E.g. .foo */
  CLASS: 9,
  /** E.g. #foo <-> #bar */
  UNDIRECTED_EDGE: 10,
  /** E.g. #foo -> #bar */
  DIRECTED_EDGE: 11,
  /** E.g. $#foo -> #bar */
  NODE_SOURCE: 12,
  /** E.g. #foo -> $#bar */
  NODE_TARGET: 13,
  /** E.g. $#foo <-> #bar */
  NODE_NEIGHBOR: 14,
  /** E.g. #foo > #bar */
  CHILD: 15,
  /** E.g. #foo #bar */
  DESCENDANT: 16,
  /** E.g. $#foo > #bar */
  PARENT: 17,
  /** E.g. $#foo #bar */
  ANCESTOR: 18,
  /** E.g. #foo > $bar > #baz */
  COMPOUND_SPLIT: 19,
  /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
  TRUE: 20
};
var Io = [{
  selector: ":selected",
  matches: function(e) {
    return e.selected();
  }
}, {
  selector: ":unselected",
  matches: function(e) {
    return !e.selected();
  }
}, {
  selector: ":selectable",
  matches: function(e) {
    return e.selectable();
  }
}, {
  selector: ":unselectable",
  matches: function(e) {
    return !e.selectable();
  }
}, {
  selector: ":locked",
  matches: function(e) {
    return e.locked();
  }
}, {
  selector: ":unlocked",
  matches: function(e) {
    return !e.locked();
  }
}, {
  selector: ":visible",
  matches: function(e) {
    return e.visible();
  }
}, {
  selector: ":hidden",
  matches: function(e) {
    return !e.visible();
  }
}, {
  selector: ":transparent",
  matches: function(e) {
    return e.transparent();
  }
}, {
  selector: ":grabbed",
  matches: function(e) {
    return e.grabbed();
  }
}, {
  selector: ":free",
  matches: function(e) {
    return !e.grabbed();
  }
}, {
  selector: ":removed",
  matches: function(e) {
    return e.removed();
  }
}, {
  selector: ":inside",
  matches: function(e) {
    return !e.removed();
  }
}, {
  selector: ":grabbable",
  matches: function(e) {
    return e.grabbable();
  }
}, {
  selector: ":ungrabbable",
  matches: function(e) {
    return !e.grabbable();
  }
}, {
  selector: ":animated",
  matches: function(e) {
    return e.animated();
  }
}, {
  selector: ":unanimated",
  matches: function(e) {
    return !e.animated();
  }
}, {
  selector: ":parent",
  matches: function(e) {
    return e.isParent();
  }
}, {
  selector: ":childless",
  matches: function(e) {
    return e.isChildless();
  }
}, {
  selector: ":child",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":orphan",
  matches: function(e) {
    return e.isOrphan();
  }
}, {
  selector: ":nonorphan",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":compound",
  matches: function(e) {
    return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
  }
}, {
  selector: ":loop",
  matches: function(e) {
    return e.isLoop();
  }
}, {
  selector: ":simple",
  matches: function(e) {
    return e.isSimple();
  }
}, {
  selector: ":active",
  matches: function(e) {
    return e.active();
  }
}, {
  selector: ":inactive",
  matches: function(e) {
    return !e.active();
  }
}, {
  selector: ":backgrounding",
  matches: function(e) {
    return e.backgrounding();
  }
}, {
  selector: ":nonbackgrounding",
  matches: function(e) {
    return !e.backgrounding();
  }
}].sort(function(e, t) {
  return bh(e.selector, t.selector);
});
var Tv = function() {
  for (var e = {}, t, n = 0; n < Io.length; n++)
    t = Io[n], e[t.selector] = t.matches;
  return e;
}();
var Cv = function(e, t) {
  return Tv[e](t);
};
var Pv = "(" + Io.map(function(e) {
  return e.selector;
}).join("|") + ")";
var Rn = function(e) {
  return e.replace(new RegExp("\\\\(" + ke.metaChar + ")", "g"), function(t, n) {
    return n;
  });
};
var Jt = function(e, t, n) {
  e[e.length - 1] = n;
};
var No = [{
  name: "group",
  // just used for identifying when debugging
  query: true,
  regex: "(" + ke.group + ")",
  populate: function(e, t, n) {
    var r = Je(n, 1), a = r[0];
    t.checks.push({
      type: ie.GROUP,
      value: a === "*" ? a : a + "s"
    });
  }
}, {
  name: "state",
  query: true,
  regex: Pv,
  populate: function(e, t, n) {
    var r = Je(n, 1), a = r[0];
    t.checks.push({
      type: ie.STATE,
      value: a
    });
  }
}, {
  name: "id",
  query: true,
  regex: "\\#(" + ke.id + ")",
  populate: function(e, t, n) {
    var r = Je(n, 1), a = r[0];
    t.checks.push({
      type: ie.ID,
      value: Rn(a)
    });
  }
}, {
  name: "className",
  query: true,
  regex: "\\.(" + ke.className + ")",
  populate: function(e, t, n) {
    var r = Je(n, 1), a = r[0];
    t.checks.push({
      type: ie.CLASS,
      value: Rn(a)
    });
  }
}, {
  name: "dataExists",
  query: true,
  regex: "\\[\\s*(" + ke.variable + ")\\s*\\]",
  populate: function(e, t, n) {
    var r = Je(n, 1), a = r[0];
    t.checks.push({
      type: ie.DATA_EXIST,
      field: Rn(a)
    });
  }
}, {
  name: "dataCompare",
  query: true,
  regex: "\\[\\s*(" + ke.variable + ")\\s*(" + ke.comparatorOp + ")\\s*(" + ke.value + ")\\s*\\]",
  populate: function(e, t, n) {
    var r = Je(n, 3), a = r[0], i = r[1], o = r[2], u = new RegExp("^" + ke.string + "$").exec(o) != null;
    u ? o = o.substring(1, o.length - 1) : o = parseFloat(o), t.checks.push({
      type: ie.DATA_COMPARE,
      field: Rn(a),
      operator: i,
      value: o
    });
  }
}, {
  name: "dataBool",
  query: true,
  regex: "\\[\\s*(" + ke.boolOp + ")\\s*(" + ke.variable + ")\\s*\\]",
  populate: function(e, t, n) {
    var r = Je(n, 2), a = r[0], i = r[1];
    t.checks.push({
      type: ie.DATA_BOOL,
      field: Rn(i),
      operator: a
    });
  }
}, {
  name: "metaCompare",
  query: true,
  regex: "\\[\\[\\s*(" + ke.meta + ")\\s*(" + ke.comparatorOp + ")\\s*(" + ke.number + ")\\s*\\]\\]",
  populate: function(e, t, n) {
    var r = Je(n, 3), a = r[0], i = r[1], o = r[2];
    t.checks.push({
      type: ie.META_COMPARE,
      field: Rn(a),
      operator: i,
      value: parseFloat(o)
    });
  }
}, {
  name: "nextQuery",
  separator: true,
  regex: ke.separator,
  populate: function(e, t) {
    var n = e.currentSubject, r = e.edgeCount, a = e.compoundCount, i = e[e.length - 1];
    n != null && (i.subject = n, e.currentSubject = null), i.edgeCount = r, i.compoundCount = a, e.edgeCount = 0, e.compoundCount = 0;
    var o = e[e.length++] = Ne();
    return o;
  }
}, {
  name: "directedEdge",
  separator: true,
  regex: ke.directedEdge,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var n = Ne(), r = t, a = Ne();
      return n.checks.push({
        type: ie.DIRECTED_EDGE,
        source: r,
        target: a
      }), Jt(e, t, n), e.edgeCount++, a;
    } else {
      var i = Ne(), o = t, u = Ne();
      return i.checks.push({
        type: ie.NODE_SOURCE,
        source: o,
        target: u
      }), Jt(e, t, i), e.edgeCount++, u;
    }
  }
}, {
  name: "undirectedEdge",
  separator: true,
  regex: ke.undirectedEdge,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var n = Ne(), r = t, a = Ne();
      return n.checks.push({
        type: ie.UNDIRECTED_EDGE,
        nodes: [r, a]
      }), Jt(e, t, n), e.edgeCount++, a;
    } else {
      var i = Ne(), o = t, u = Ne();
      return i.checks.push({
        type: ie.NODE_NEIGHBOR,
        node: o,
        neighbor: u
      }), Jt(e, t, i), u;
    }
  }
}, {
  name: "child",
  separator: true,
  regex: ke.child,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var n = Ne(), r = Ne(), a = e[e.length - 1];
      return n.checks.push({
        type: ie.CHILD,
        parent: a,
        child: r
      }), Jt(e, t, n), e.compoundCount++, r;
    } else if (e.currentSubject === t) {
      var i = Ne(), o = e[e.length - 1], u = Ne(), l = Ne(), s = Ne(), c = Ne();
      return i.checks.push({
        type: ie.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = t.checks, t.checks = [{
        type: ie.TRUE
      }], c.checks.push({
        type: ie.TRUE
      }), u.checks.push({
        type: ie.PARENT,
        // type is swapped on right side queries
        parent: c,
        child: s
        // empty for now
      }), Jt(e, o, i), e.currentSubject = l, e.compoundCount++, s;
    } else {
      var d = Ne(), h = Ne(), f = [{
        type: ie.PARENT,
        parent: d,
        child: h
      }];
      return d.checks = t.checks, t.checks = f, e.compoundCount++, h;
    }
  }
}, {
  name: "descendant",
  separator: true,
  regex: ke.descendant,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var n = Ne(), r = Ne(), a = e[e.length - 1];
      return n.checks.push({
        type: ie.DESCENDANT,
        ancestor: a,
        descendant: r
      }), Jt(e, t, n), e.compoundCount++, r;
    } else if (e.currentSubject === t) {
      var i = Ne(), o = e[e.length - 1], u = Ne(), l = Ne(), s = Ne(), c = Ne();
      return i.checks.push({
        type: ie.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = t.checks, t.checks = [{
        type: ie.TRUE
      }], c.checks.push({
        type: ie.TRUE
      }), u.checks.push({
        type: ie.ANCESTOR,
        // type is swapped on right side queries
        ancestor: c,
        descendant: s
        // empty for now
      }), Jt(e, o, i), e.currentSubject = l, e.compoundCount++, s;
    } else {
      var d = Ne(), h = Ne(), f = [{
        type: ie.ANCESTOR,
        ancestor: d,
        descendant: h
      }];
      return d.checks = t.checks, t.checks = f, e.compoundCount++, h;
    }
  }
}, {
  name: "subject",
  modifier: true,
  regex: ke.subject,
  populate: function(e, t) {
    if (e.currentSubject != null && e.currentSubject !== t)
      return Ae("Redefinition of subject in selector `" + e.toString() + "`"), false;
    e.currentSubject = t;
    var n = e[e.length - 1], r = n.checks[0], a = r == null ? null : r.type;
    a === ie.DIRECTED_EDGE ? r.type = ie.NODE_TARGET : a === ie.UNDIRECTED_EDGE && (r.type = ie.NODE_NEIGHBOR, r.node = r.nodes[1], r.neighbor = r.nodes[0], r.nodes = null);
  }
}];
No.forEach(function(e) {
  return e.regexObj = new RegExp("^" + e.regex);
});
var Sv = function(e) {
  for (var t, n, r, a = 0; a < No.length; a++) {
    var i = No[a], o = i.name, u = e.match(i.regexObj);
    if (u != null) {
      n = u, t = i, r = o;
      var l = u[0];
      e = e.substring(l.length);
      break;
    }
  }
  return {
    expr: t,
    match: n,
    name: r,
    remaining: e
  };
};
var kv = function(e) {
  var t = e.match(/^\s+/);
  if (t) {
    var n = t[0];
    e = e.substring(n.length);
  }
  return e;
};
var _v = function(e) {
  var t = this, n = t.inputText = e, r = t[0] = Ne();
  for (t.length = 1, n = kv(n); ; ) {
    var a = Sv(n);
    if (a.expr == null)
      return Ae("The selector `" + e + "`is invalid"), false;
    var i = a.match.slice(1), o = a.expr.populate(t, r, i);
    if (o === false)
      return false;
    if (o != null && (r = o), n = a.remaining, n.match(/^\s*$/))
      break;
  }
  var u = t[t.length - 1];
  t.currentSubject != null && (u.subject = t.currentSubject), u.edgeCount = t.edgeCount, u.compoundCount = t.compoundCount;
  for (var l = 0; l < t.length; l++) {
    var s = t[l];
    if (s.compoundCount > 0 && s.edgeCount > 0)
      return Ae("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), false;
    if (s.edgeCount > 1)
      return Ae("The selector `" + e + "` is invalid because it uses multiple edge selectors"), false;
    s.edgeCount === 1 && Ae("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return true;
};
var Bv = function() {
  if (this.toStringCache != null)
    return this.toStringCache;
  for (var e = function(l) {
    return l ?? "";
  }, t = function(l) {
    return fe(l) ? '"' + l + '"' : e(l);
  }, n = function(l) {
    return " " + l + " ";
  }, r = function(l, s) {
    var c = l.type, d = l.value;
    switch (c) {
      case ie.GROUP: {
        var h = e(d);
        return h.substring(0, h.length - 1);
      }
      case ie.DATA_COMPARE: {
        var f = l.field, p = l.operator;
        return "[" + f + n(e(p)) + t(d) + "]";
      }
      case ie.DATA_BOOL: {
        var g = l.operator, m = l.field;
        return "[" + e(g) + m + "]";
      }
      case ie.DATA_EXIST: {
        var v = l.field;
        return "[" + v + "]";
      }
      case ie.META_COMPARE: {
        var y = l.operator, b = l.field;
        return "[[" + b + n(e(y)) + t(d) + "]]";
      }
      case ie.STATE:
        return d;
      case ie.ID:
        return "#" + d;
      case ie.CLASS:
        return "." + d;
      case ie.PARENT:
      case ie.CHILD:
        return a(l.parent, s) + n(">") + a(l.child, s);
      case ie.ANCESTOR:
      case ie.DESCENDANT:
        return a(l.ancestor, s) + " " + a(l.descendant, s);
      case ie.COMPOUND_SPLIT: {
        var w = a(l.left, s), T = a(l.subject, s), S = a(l.right, s);
        return w + (w.length > 0 ? " " : "") + T + S;
      }
      case ie.TRUE:
        return "";
    }
  }, a = function(l, s) {
    return l.checks.reduce(function(c, d, h) {
      return c + (s === l && h === 0 ? "$" : "") + r(d, s);
    }, "");
  }, i = "", o = 0; o < this.length; o++) {
    var u = this[o];
    i += a(u, u.subject), this.length > 1 && o < this.length - 1 && (i += ", ");
  }
  return this.toStringCache = i, i;
};
var Dv = {
  parse: _v,
  toString: Bv
};
var Ic = function(e, t, n) {
  var r, a = fe(e), i = ee(e), o = fe(n), u, l, s = false, c = false, d = false;
  switch (t.indexOf("!") >= 0 && (t = t.replace("!", ""), c = true), t.indexOf("@") >= 0 && (t = t.replace("@", ""), s = true), (a || o || s) && (u = !a && !i ? "" : "" + e, l = "" + n), s && (e = u = u.toLowerCase(), n = l = l.toLowerCase()), t) {
    case "*=":
      r = u.indexOf(l) >= 0;
      break;
    case "$=":
      r = u.indexOf(l, u.length - l.length) >= 0;
      break;
    case "^=":
      r = u.indexOf(l) === 0;
      break;
    case "=":
      r = e === n;
      break;
    case ">":
      d = true, r = e > n;
      break;
    case ">=":
      d = true, r = e >= n;
      break;
    case "<":
      d = true, r = e < n;
      break;
    case "<=":
      d = true, r = e <= n;
      break;
    default:
      r = false;
      break;
  }
  return c && (e != null || !d) && (r = !r), r;
};
var Mv = function(e, t) {
  switch (t) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
};
var Av = function(e) {
  return e !== void 0;
};
var ss = function(e, t) {
  return e.data(t);
};
var Rv = function(e, t) {
  return e[t]();
};
var We = [];
var Ve = function(e, t) {
  return e.checks.every(function(n) {
    return We[n.type](n, t);
  });
};
We[ie.GROUP] = function(e, t) {
  var n = e.value;
  return n === "*" || n === t.group();
};
We[ie.STATE] = function(e, t) {
  var n = e.value;
  return Cv(n, t);
};
We[ie.ID] = function(e, t) {
  var n = e.value;
  return t.id() === n;
};
We[ie.CLASS] = function(e, t) {
  var n = e.value;
  return t.hasClass(n);
};
We[ie.META_COMPARE] = function(e, t) {
  var n = e.field, r = e.operator, a = e.value;
  return Ic(Rv(t, n), r, a);
};
We[ie.DATA_COMPARE] = function(e, t) {
  var n = e.field, r = e.operator, a = e.value;
  return Ic(ss(t, n), r, a);
};
We[ie.DATA_BOOL] = function(e, t) {
  var n = e.field, r = e.operator;
  return Mv(ss(t, n), r);
};
We[ie.DATA_EXIST] = function(e, t) {
  var n = e.field;
  return e.operator, Av(ss(t, n));
};
We[ie.UNDIRECTED_EDGE] = function(e, t) {
  var n = e.nodes[0], r = e.nodes[1], a = t.source(), i = t.target();
  return Ve(n, a) && Ve(r, i) || Ve(r, a) && Ve(n, i);
};
We[ie.NODE_NEIGHBOR] = function(e, t) {
  return Ve(e.node, t) && t.neighborhood().some(function(n) {
    return n.isNode() && Ve(e.neighbor, n);
  });
};
We[ie.DIRECTED_EDGE] = function(e, t) {
  return Ve(e.source, t.source()) && Ve(e.target, t.target());
};
We[ie.NODE_SOURCE] = function(e, t) {
  return Ve(e.source, t) && t.outgoers().some(function(n) {
    return n.isNode() && Ve(e.target, n);
  });
};
We[ie.NODE_TARGET] = function(e, t) {
  return Ve(e.target, t) && t.incomers().some(function(n) {
    return n.isNode() && Ve(e.source, n);
  });
};
We[ie.CHILD] = function(e, t) {
  return Ve(e.child, t) && Ve(e.parent, t.parent());
};
We[ie.PARENT] = function(e, t) {
  return Ve(e.parent, t) && t.children().some(function(n) {
    return Ve(e.child, n);
  });
};
We[ie.DESCENDANT] = function(e, t) {
  return Ve(e.descendant, t) && t.ancestors().some(function(n) {
    return Ve(e.ancestor, n);
  });
};
We[ie.ANCESTOR] = function(e, t) {
  return Ve(e.ancestor, t) && t.descendants().some(function(n) {
    return Ve(e.descendant, n);
  });
};
We[ie.COMPOUND_SPLIT] = function(e, t) {
  return Ve(e.subject, t) && Ve(e.left, t) && Ve(e.right, t);
};
We[ie.TRUE] = function() {
  return true;
};
We[ie.COLLECTION] = function(e, t) {
  var n = e.value;
  return n.has(t);
};
We[ie.FILTER] = function(e, t) {
  var n = e.value;
  return n(t);
};
var Iv = function(e) {
  var t = this;
  if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === ie.ID)
    return e.getElementById(t[0].checks[0].value).collection();
  var n = function(r) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      if (Ve(i, r))
        return true;
    }
    return false;
  };
  return t.text() == null && (n = function() {
    return true;
  }), e.filter(n);
};
var Nv = function(e) {
  for (var t = this, n = 0; n < t.length; n++) {
    var r = t[n];
    if (Ve(r, e))
      return true;
  }
  return false;
};
var Lv = {
  matches: Nv,
  filter: Iv
};
var un = function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || fe(e) && e.match(/^\s*$/) || (St(e) ? this.addQuery({
    checks: [{
      type: ie.COLLECTION,
      value: e.collection()
    }]
  }) : qe(e) ? this.addQuery({
    checks: [{
      type: ie.FILTER,
      value: e
    }]
  }) : fe(e) ? this.parse(e) || (this.invalid = true) : Ye("A selector must be created from a string; found "));
};
var cn = un.prototype;
[Dv, Lv].forEach(function(e) {
  return ve(cn, e);
});
cn.text = function() {
  return this.inputText;
};
cn.size = function() {
  return this.length;
};
cn.eq = function(e) {
  return this[e];
};
cn.sameText = function(e) {
  return !this.invalid && !e.invalid && this.text() === e.text();
};
cn.addQuery = function(e) {
  this[this.length++] = e;
};
cn.selector = cn.toString;
var rn = {
  allAre: function(e) {
    var t = new un(e);
    return this.every(function(n) {
      return t.matches(n);
    });
  },
  is: function(e) {
    var t = new un(e);
    return this.some(function(n) {
      return t.matches(n);
    });
  },
  some: function(e, t) {
    for (var n = 0; n < this.length; n++) {
      var r = t ? e.apply(t, [this[n], n, this]) : e(this[n], n, this);
      if (r)
        return true;
    }
    return false;
  },
  every: function(e, t) {
    for (var n = 0; n < this.length; n++) {
      var r = t ? e.apply(t, [this[n], n, this]) : e(this[n], n, this);
      if (!r)
        return false;
    }
    return true;
  },
  same: function(e) {
    if (this === e)
      return true;
    e = this.cy().collection(e);
    var t = this.length, n = e.length;
    return t !== n ? false : t === 1 ? this[0] === e[0] : this.every(function(r) {
      return e.hasElementWithId(r.id());
    });
  },
  anySame: function(e) {
    return e = this.cy().collection(e), this.some(function(t) {
      return e.hasElementWithId(t.id());
    });
  },
  allAreNeighbors: function(e) {
    e = this.cy().collection(e);
    var t = this.neighborhood();
    return e.every(function(n) {
      return t.hasElementWithId(n.id());
    });
  },
  contains: function(e) {
    e = this.cy().collection(e);
    var t = this;
    return e.every(function(n) {
      return t.hasElementWithId(n.id());
    });
  }
};
rn.allAreNeighbours = rn.allAreNeighbors;
rn.has = rn.contains;
rn.equal = rn.equals = rn.same;
var Dt = function(e, t) {
  return function(n, r, a, i) {
    var o = n, u = this, l;
    if (o == null ? l = "" : St(o) && o.length === 1 && (l = o.id()), u.length === 1 && l) {
      var s = u[0]._private, c = s.traversalCache = s.traversalCache || {}, d = c[t] = c[t] || [], h = Pn(l), f = d[h];
      return f || (d[h] = e.call(u, n, r, a, i));
    } else
      return e.call(u, n, r, a, i);
  };
};
var $n = {
  parent: function(e) {
    var t = [];
    if (this.length === 1) {
      var n = this[0]._private.parent;
      if (n)
        return n;
    }
    for (var r = 0; r < this.length; r++) {
      var a = this[r], i = a._private.parent;
      i && t.push(i);
    }
    return this.spawn(t, true).filter(e);
  },
  parents: function(e) {
    for (var t = [], n = this.parent(); n.nonempty(); ) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        t.push(a);
      }
      n = n.parent();
    }
    return this.spawn(t, true).filter(e);
  },
  commonAncestors: function(e) {
    for (var t, n = 0; n < this.length; n++) {
      var r = this[n], a = r.parents();
      t = t || a, t = t.intersect(a);
    }
    return t.filter(e);
  },
  orphans: function(e) {
    return this.stdFilter(function(t) {
      return t.isOrphan();
    }).filter(e);
  },
  nonorphans: function(e) {
    return this.stdFilter(function(t) {
      return t.isChild();
    }).filter(e);
  },
  children: Dt(function(e) {
    for (var t = [], n = 0; n < this.length; n++)
      for (var r = this[n], a = r._private.children, i = 0; i < a.length; i++)
        t.push(a[i]);
    return this.spawn(t, true).filter(e);
  }, "children"),
  siblings: function(e) {
    return this.parent().children().not(this).filter(e);
  },
  isParent: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length !== 0;
  },
  isChildless: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length === 0;
  },
  isChild: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent != null;
  },
  isOrphan: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent == null;
  },
  descendants: function(e) {
    var t = [];
    function n(r) {
      for (var a = 0; a < r.length; a++) {
        var i = r[a];
        t.push(i), i.children().nonempty() && n(i.children());
      }
    }
    return n(this.children()), this.spawn(t, true).filter(e);
  }
};
function ls(e, t, n, r) {
  for (var a = [], i = new er(), o = e.cy(), u = o.hasCompoundNodes(), l = 0; l < e.length; l++) {
    var s = e[l];
    n ? a.push(s) : u && r(a, i, s);
  }
  for (; a.length > 0; ) {
    var c = a.shift();
    t(c), i.add(c.id()), u && r(a, i, c);
  }
  return e;
}
function Nc(e, t, n) {
  if (n.isParent())
    for (var r = n._private.children, a = 0; a < r.length; a++) {
      var i = r[a];
      t.has(i.id()) || e.push(i);
    }
}
$n.forEachDown = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return ls(this, e, t, Nc);
};
function Lc(e, t, n) {
  if (n.isChild()) {
    var r = n._private.parent;
    t.has(r.id()) || e.push(r);
  }
}
$n.forEachUp = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return ls(this, e, t, Lc);
};
function zv(e, t, n) {
  Lc(e, t, n), Nc(e, t, n);
}
$n.forEachUpAndDown = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return ls(this, e, t, zv);
};
$n.ancestors = $n.parents;
var Sr;
var zc;
Sr = zc = {
  data: Me.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "data",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    immutableKeys: {
      id: true,
      source: true,
      target: true,
      parent: true
    },
    updateStyle: true
  }),
  removeData: Me.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: true,
    immutableKeys: {
      id: true,
      source: true,
      target: true,
      parent: true
    },
    updateStyle: true
  }),
  scratch: Me.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "scratch",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeScratch: Me.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  }),
  rscratch: Me.data({
    field: "rscratch",
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: true
  }),
  removeRscratch: Me.removeData({
    field: "rscratch",
    triggerEvent: false
  }),
  id: function() {
    var e = this[0];
    if (e)
      return e._private.data.id;
  }
};
Sr.attr = Sr.data;
Sr.removeAttr = Sr.removeData;
var Ov = zc;
var Va = {};
function fo(e) {
  return function(t) {
    var n = this;
    if (t === void 0 && (t = true), n.length !== 0)
      if (n.isNode() && !n.removed()) {
        for (var r = 0, a = n[0], i = a._private.edges, o = 0; o < i.length; o++) {
          var u = i[o];
          !t && u.isLoop() || (r += e(a, u));
        }
        return r;
      } else
        return;
  };
}
ve(Va, {
  degree: fo(function(e, t) {
    return t.source().same(t.target()) ? 2 : 1;
  }),
  indegree: fo(function(e, t) {
    return t.target().same(e) ? 1 : 0;
  }),
  outdegree: fo(function(e, t) {
    return t.source().same(e) ? 1 : 0;
  })
});
function In(e, t) {
  return function(n) {
    for (var r, a = this.nodes(), i = 0; i < a.length; i++) {
      var o = a[i], u = o[e](n);
      u !== void 0 && (r === void 0 || t(u, r)) && (r = u);
    }
    return r;
  };
}
ve(Va, {
  minDegree: In("degree", function(e, t) {
    return e < t;
  }),
  maxDegree: In("degree", function(e, t) {
    return e > t;
  }),
  minIndegree: In("indegree", function(e, t) {
    return e < t;
  }),
  maxIndegree: In("indegree", function(e, t) {
    return e > t;
  }),
  minOutdegree: In("outdegree", function(e, t) {
    return e < t;
  }),
  maxOutdegree: In("outdegree", function(e, t) {
    return e > t;
  })
});
ve(Va, {
  totalDegree: function(e) {
    for (var t = 0, n = this.nodes(), r = 0; r < n.length; r++)
      t += n[r].degree(e);
    return t;
  }
});
var It;
var Oc;
var Vc = function(e, t, n) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    if (!a.locked()) {
      var i = a._private.position, o = {
        x: t.x != null ? t.x - i.x : 0,
        y: t.y != null ? t.y - i.y : 0
      };
      a.isParent() && !(o.x === 0 && o.y === 0) && a.children().shift(o, n), a.dirtyBoundingBoxCache();
    }
  }
};
var au = {
  field: "position",
  bindingEvent: "position",
  allowBinding: true,
  allowSetting: true,
  settingEvent: "position",
  settingTriggersEvent: true,
  triggerFnName: "emitAndNotify",
  allowGetting: true,
  validKeys: ["x", "y"],
  beforeGet: function(e) {
    e.updateCompoundBounds();
  },
  beforeSet: function(e, t) {
    Vc(e, t, false);
  },
  onSet: function(e) {
    e.dirtyCompoundBoundsCache();
  },
  canSet: function(e) {
    return !e.locked();
  }
};
It = Oc = {
  position: Me.data(au),
  // position but no notification to renderer
  silentPosition: Me.data(ve({}, au, {
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: false,
    beforeSet: function(e, t) {
      Vc(e, t, true);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    }
  })),
  positions: function(e, t) {
    if (_e(e))
      t ? this.silentPosition(e) : this.position(e);
    else if (qe(e)) {
      var n = e, r = this.cy();
      r.startBatch();
      for (var a = 0; a < this.length; a++) {
        var i = this[a], o = void 0;
        (o = n(i, a)) && (t ? i.silentPosition(o) : i.position(o));
      }
      r.endBatch();
    }
    return this;
  },
  silentPositions: function(e) {
    return this.positions(e, true);
  },
  shift: function(e, t, n) {
    var r;
    if (_e(e) ? (r = {
      x: ee(e.x) ? e.x : 0,
      y: ee(e.y) ? e.y : 0
    }, n = t) : fe(e) && ee(t) && (r = {
      x: 0,
      y: 0
    }, r[e] = t), r != null) {
      var a = this.cy();
      a.startBatch();
      for (var i = 0; i < this.length; i++) {
        var o = this[i];
        if (!(a.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
          var u = o.position(), l = {
            x: u.x + r.x,
            y: u.y + r.y
          };
          n ? o.silentPosition(l) : o.position(l);
        }
      }
      a.endBatch();
    }
    return this;
  },
  silentShift: function(e, t) {
    return _e(e) ? this.shift(e, true) : fe(e) && ee(t) && this.shift(e, t, true), this;
  },
  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function(e, t) {
    var n = this[0], r = this.cy(), a = r.zoom(), i = r.pan(), o = _e(e) ? e : void 0, u = o !== void 0 || t !== void 0 && fe(e);
    if (n && n.isNode())
      if (u)
        for (var l = 0; l < this.length; l++) {
          var s = this[l];
          t !== void 0 ? s.position(e, (t - i[e]) / a) : o !== void 0 && s.position(pc(o, a, i));
        }
      else {
        var c = n.position();
        return o = Ra(c, a, i), e === void 0 ? o : o[e];
      }
    else if (!u)
      return;
    return this;
  },
  // get/set the position relative to the parent
  relativePosition: function(e, t) {
    var n = this[0], r = this.cy(), a = _e(e) ? e : void 0, i = a !== void 0 || t !== void 0 && fe(e), o = r.hasCompoundNodes();
    if (n && n.isNode())
      if (i)
        for (var u = 0; u < this.length; u++) {
          var l = this[u], s = o ? l.parent() : null, c = s && s.length > 0, d = c;
          c && (s = s[0]);
          var h = d ? s.position() : {
            x: 0,
            y: 0
          };
          t !== void 0 ? l.position(e, t + h[e]) : a !== void 0 && l.position({
            x: a.x + h.x,
            y: a.y + h.y
          });
        }
      else {
        var f = n.position(), p = o ? n.parent() : null, g = p && p.length > 0, m = g;
        g && (p = p[0]);
        var v = m ? p.position() : {
          x: 0,
          y: 0
        };
        return a = {
          x: f.x - v.x,
          y: f.y - v.y
        }, e === void 0 ? a : a[e];
      }
    else if (!i)
      return;
    return this;
  }
};
It.modelPosition = It.point = It.position;
It.modelPositions = It.points = It.positions;
It.renderedPoint = It.renderedPosition;
It.relativePoint = It.relativePosition;
var Vv = Oc;
var Hn;
var pn;
Hn = pn = {};
pn.renderedBoundingBox = function(e) {
  var t = this.boundingBox(e), n = this.cy(), r = n.zoom(), a = n.pan(), i = t.x1 * r + a.x, o = t.x2 * r + a.x, u = t.y1 * r + a.y, l = t.y2 * r + a.y;
  return {
    x1: i,
    x2: o,
    y1: u,
    y2: l,
    w: o - i,
    h: l - u
  };
};
pn.dirtyCompoundBoundsCache = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, t = this.cy();
  return !t.styleEnabled() || !t.hasCompoundNodes() ? this : (this.forEachUp(function(n) {
    if (n.isParent()) {
      var r = n._private;
      r.compoundBoundsClean = false, r.bbCache = null, e || n.emitAndNotify("bounds");
    }
  }), this);
};
pn.updateCompoundBounds = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, t = this.cy();
  if (!t.styleEnabled() || !t.hasCompoundNodes())
    return this;
  if (!e && t.batching())
    return this;
  function n(o) {
    if (!o.isParent())
      return;
    var u = o._private, l = o.children(), s = o.pstyle("compound-sizing-wrt-labels").value === "include", c = {
      width: {
        val: o.pstyle("min-width").pfValue,
        left: o.pstyle("min-width-bias-left"),
        right: o.pstyle("min-width-bias-right")
      },
      height: {
        val: o.pstyle("min-height").pfValue,
        top: o.pstyle("min-height-bias-top"),
        bottom: o.pstyle("min-height-bias-bottom")
      }
    }, d = l.boundingBox({
      includeLabels: s,
      includeOverlays: false,
      // updating the compound bounds happens outside of the regular
      // cache cycle (i.e. before fired events)
      useCache: false
    }), h = u.position;
    (d.w === 0 || d.h === 0) && (d = {
      w: o.pstyle("width").pfValue,
      h: o.pstyle("height").pfValue
    }, d.x1 = h.x - d.w / 2, d.x2 = h.x + d.w / 2, d.y1 = h.y - d.h / 2, d.y2 = h.y + d.h / 2);
    function f(P, B, k) {
      var C = 0, M = 0, D = B + k;
      return P > 0 && D > 0 && (C = B / D * P, M = k / D * P), {
        biasDiff: C,
        biasComplementDiff: M
      };
    }
    function p(P, B, k, C) {
      if (k.units === "%")
        switch (C) {
          case "width":
            return P > 0 ? k.pfValue * P : 0;
          case "height":
            return B > 0 ? k.pfValue * B : 0;
          case "average":
            return P > 0 && B > 0 ? k.pfValue * (P + B) / 2 : 0;
          case "min":
            return P > 0 && B > 0 ? P > B ? k.pfValue * B : k.pfValue * P : 0;
          case "max":
            return P > 0 && B > 0 ? P > B ? k.pfValue * P : k.pfValue * B : 0;
          default:
            return 0;
        }
      else return k.units === "px" ? k.pfValue : 0;
    }
    var g = c.width.left.value;
    c.width.left.units === "px" && c.width.val > 0 && (g = g * 100 / c.width.val);
    var m = c.width.right.value;
    c.width.right.units === "px" && c.width.val > 0 && (m = m * 100 / c.width.val);
    var v = c.height.top.value;
    c.height.top.units === "px" && c.height.val > 0 && (v = v * 100 / c.height.val);
    var y = c.height.bottom.value;
    c.height.bottom.units === "px" && c.height.val > 0 && (y = y * 100 / c.height.val);
    var b = f(c.width.val - d.w, g, m), w = b.biasDiff, T = b.biasComplementDiff, S = f(c.height.val - d.h, v, y), x = S.biasDiff, _ = S.biasComplementDiff;
    u.autoPadding = p(d.w, d.h, o.pstyle("padding"), o.pstyle("padding-relative-to").value), u.autoWidth = Math.max(d.w, c.width.val), h.x = (-w + d.x1 + d.x2 + T) / 2, u.autoHeight = Math.max(d.h, c.height.val), h.y = (-x + d.y1 + d.y2 + _) / 2;
  }
  for (var r = 0; r < this.length; r++) {
    var a = this[r], i = a._private;
    (!i.compoundBoundsClean || e) && (n(a), t.batching() || (i.compoundBoundsClean = true));
  }
  return this;
};
var Bt = function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
};
var Rt = function(e, t, n, r, a) {
  r - t === 0 || a - n === 0 || t == null || n == null || r == null || a == null || (e.x1 = t < e.x1 ? t : e.x1, e.x2 = r > e.x2 ? r : e.x2, e.y1 = n < e.y1 ? n : e.y1, e.y2 = a > e.y2 ? a : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
};
var en = function(e, t) {
  return t == null ? e : Rt(e, t.x1, t.y1, t.x2, t.y2);
};
var ur = function(e, t, n) {
  return Tt(e, t, n);
};
var Jr = function(e, t, n) {
  if (!t.cy().headless()) {
    var r = t._private, a = r.rstyle, i = a.arrowWidth / 2, o = t.pstyle(n + "-arrow-shape").value, u, l;
    if (o !== "none") {
      n === "source" ? (u = a.srcX, l = a.srcY) : n === "target" ? (u = a.tgtX, l = a.tgtY) : (u = a.midX, l = a.midY);
      var s = r.arrowBounds = r.arrowBounds || {}, c = s[n] = s[n] || {};
      c.x1 = u - i, c.y1 = l - i, c.x2 = u + i, c.y2 = l + i, c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, oa(c, 1), Rt(e, c.x1, c.y1, c.x2, c.y2);
    }
  }
};
var po = function(e, t, n) {
  if (!t.cy().headless()) {
    var r;
    n ? r = n + "-" : r = "";
    var a = t._private, i = a.rstyle, o = t.pstyle(r + "label").strValue;
    if (o) {
      var u = t.pstyle("text-halign"), l = t.pstyle("text-valign"), s = ur(i, "labelWidth", n), c = ur(i, "labelHeight", n), d = ur(i, "labelX", n), h = ur(i, "labelY", n), f = t.pstyle(r + "text-margin-x").pfValue, p = t.pstyle(r + "text-margin-y").pfValue, g = t.isEdge(), m = t.pstyle(r + "text-rotation"), v = t.pstyle("text-outline-width").pfValue, y = t.pstyle("text-border-width").pfValue, b = y / 2, w = t.pstyle("text-background-padding").pfValue, T = 2, S = c, x = s, _ = x / 2, P = S / 2, B, k, C, M;
      if (g)
        B = d - _, k = d + _, C = h - P, M = h + P;
      else {
        switch (u.value) {
          case "left":
            B = d - x, k = d;
            break;
          case "center":
            B = d - _, k = d + _;
            break;
          case "right":
            B = d, k = d + x;
            break;
        }
        switch (l.value) {
          case "top":
            C = h - S, M = h;
            break;
          case "center":
            C = h - P, M = h + P;
            break;
          case "bottom":
            C = h, M = h + S;
            break;
        }
      }
      var D = f - Math.max(v, b) - w - T, N = f + Math.max(v, b) + w + T, A = p - Math.max(v, b) - w - T, L = p + Math.max(v, b) + w + T;
      B += D, k += N, C += A, M += L;
      var R = n || "main", I = a.labelBounds, X = I[R] = I[R] || {};
      X.x1 = B, X.y1 = C, X.x2 = k, X.y2 = M, X.w = k - B, X.h = M - C, X.leftPad = D, X.rightPad = N, X.topPad = A, X.botPad = L;
      var V = g && m.strValue === "autorotate", Y = m.pfValue != null && m.pfValue !== 0;
      if (V || Y) {
        var W = V ? ur(a.rstyle, "labelAngle", n) : m.pfValue, Q = Math.cos(W), J = Math.sin(W), Z = (B + k) / 2, $ = (C + M) / 2;
        if (!g) {
          switch (u.value) {
            case "left":
              Z = k;
              break;
            case "right":
              Z = B;
              break;
          }
          switch (l.value) {
            case "top":
              $ = M;
              break;
            case "bottom":
              $ = C;
              break;
          }
        }
        var te = function(Re, be) {
          return Re = Re - Z, be = be - $, {
            x: Re * Q - be * J + Z,
            y: Re * J + be * Q + $
          };
        }, z = te(B, C), O = te(B, M), j = te(k, C), H = te(k, M);
        B = Math.min(z.x, O.x, j.x, H.x), k = Math.max(z.x, O.x, j.x, H.x), C = Math.min(z.y, O.y, j.y, H.y), M = Math.max(z.y, O.y, j.y, H.y);
      }
      var ne = R + "Rot", oe = I[ne] = I[ne] || {};
      oe.x1 = B, oe.y1 = C, oe.x2 = k, oe.y2 = M, oe.w = k - B, oe.h = M - C, Rt(e, B, C, k, M), Rt(a.labelBounds.all, B, C, k, M);
    }
    return e;
  }
};
var iu = function(e, t) {
  if (!t.cy().headless()) {
    var n = t.pstyle("outline-opacity").value, r = t.pstyle("outline-width").value, a = t.pstyle("outline-offset").value, i = r + a;
    Fc(e, t, n, i, "outside", i / 2);
  }
};
var Fc = function(e, t, n, r, a, i) {
  if (!(n === 0 || r <= 0 || a === "inside")) {
    var o = t.cy(), u = t.pstyle("shape").value, l = o.renderer().nodeShapes[u], s = t.position(), c = s.x, d = s.y, h = t.width(), f = t.height();
    if (l.hasMiterBounds) {
      a === "center" && (r /= 2);
      var p = l.miterBounds(c, d, h, f, r);
      en(e, p);
    } else i != null && i > 0 && sa(e, [i, i, i, i]);
  }
};
var Fv = function(e, t) {
  if (!t.cy().headless()) {
    var n = t.pstyle("border-opacity").value, r = t.pstyle("border-width").pfValue, a = t.pstyle("border-position").value;
    Fc(e, t, n, r, a);
  }
};
var jv = function(e, t) {
  var n = e._private.cy, r = n.styleEnabled(), a = n.headless(), i = bt(), o = e._private, u = e.isNode(), l = e.isEdge(), s, c, d, h, f, p, g = o.rstyle, m = u && r ? e.pstyle("bounds-expansion").pfValue : [0], v = function(oe) {
    return oe.pstyle("display").value !== "none";
  }, y = !r || v(e) && (!l || v(e.source()) && v(e.target()));
  if (y) {
    var b = 0, w = 0;
    r && t.includeOverlays && (b = e.pstyle("overlay-opacity").value, b !== 0 && (w = e.pstyle("overlay-padding").value));
    var T = 0, S = 0;
    r && t.includeUnderlays && (T = e.pstyle("underlay-opacity").value, T !== 0 && (S = e.pstyle("underlay-padding").value));
    var x = Math.max(w, S), _ = 0, P = 0;
    if (r && (_ = e.pstyle("width").pfValue, P = _ / 2), u && t.includeNodes) {
      var B = e.position();
      f = B.x, p = B.y;
      var k = e.outerWidth(), C = k / 2, M = e.outerHeight(), D = M / 2;
      s = f - C, c = f + C, d = p - D, h = p + D, Rt(i, s, d, c, h), r && iu(i, e), r && t.includeOutlines && !a && iu(i, e), r && Fv(i, e);
    } else if (l && t.includeEdges)
      if (r && !a) {
        var N = e.pstyle("curve-style").strValue;
        if (s = Math.min(g.srcX, g.midX, g.tgtX), c = Math.max(g.srcX, g.midX, g.tgtX), d = Math.min(g.srcY, g.midY, g.tgtY), h = Math.max(g.srcY, g.midY, g.tgtY), s -= P, c += P, d -= P, h += P, Rt(i, s, d, c, h), N === "haystack") {
          var A = g.haystackPts;
          if (A && A.length === 2) {
            if (s = A[0].x, d = A[0].y, c = A[1].x, h = A[1].y, s > c) {
              var L = s;
              s = c, c = L;
            }
            if (d > h) {
              var R = d;
              d = h, h = R;
            }
            Rt(i, s - P, d - P, c + P, h + P);
          }
        } else if (N === "bezier" || N === "unbundled-bezier" || tn(N, "segments") || tn(N, "taxi")) {
          var I;
          switch (N) {
            case "bezier":
            case "unbundled-bezier":
              I = g.bezierPts;
              break;
            case "segments":
            case "taxi":
            case "round-segments":
            case "round-taxi":
              I = g.linePts;
              break;
          }
          if (I != null)
            for (var X = 0; X < I.length; X++) {
              var V = I[X];
              s = V.x - P, c = V.x + P, d = V.y - P, h = V.y + P, Rt(i, s, d, c, h);
            }
        }
      } else {
        var Y = e.source(), W = Y.position(), Q = e.target(), J = Q.position();
        if (s = W.x, c = J.x, d = W.y, h = J.y, s > c) {
          var Z = s;
          s = c, c = Z;
        }
        if (d > h) {
          var $ = d;
          d = h, h = $;
        }
        s -= P, c += P, d -= P, h += P, Rt(i, s, d, c, h);
      }
    if (r && t.includeEdges && l && (Jr(i, e, "mid-source"), Jr(i, e, "mid-target"), Jr(i, e, "source"), Jr(i, e, "target")), r) {
      var te = e.pstyle("ghost").value === "yes";
      if (te) {
        var z = e.pstyle("ghost-offset-x").pfValue, O = e.pstyle("ghost-offset-y").pfValue;
        Rt(i, i.x1 + z, i.y1 + O, i.x2 + z, i.y2 + O);
      }
    }
    var j = o.bodyBounds = o.bodyBounds || {};
    Us(j, i), sa(j, m), oa(j, 1), r && (s = i.x1, c = i.x2, d = i.y1, h = i.y2, Rt(i, s - x, d - x, c + x, h + x));
    var H = o.overlayBounds = o.overlayBounds || {};
    Us(H, i), sa(H, m), oa(H, 1);
    var ne = o.labelBounds = o.labelBounds || {};
    ne.all != null ? bf(ne.all) : ne.all = bt(), r && t.includeLabels && (t.includeMainLabels && po(i, e, null), l && (t.includeSourceLabels && po(i, e, "source"), t.includeTargetLabels && po(i, e, "target")));
  }
  return i.x1 = Bt(i.x1), i.y1 = Bt(i.y1), i.x2 = Bt(i.x2), i.y2 = Bt(i.y2), i.w = Bt(i.x2 - i.x1), i.h = Bt(i.y2 - i.y1), i.w > 0 && i.h > 0 && y && (sa(i, m), oa(i, 1)), i;
};
var jc = function(e) {
  var t = 0, n = function(a) {
    return (a ? 1 : 0) << t++;
  }, r = 0;
  return r += n(e.incudeNodes), r += n(e.includeEdges), r += n(e.includeLabels), r += n(e.includeMainLabels), r += n(e.includeSourceLabels), r += n(e.includeTargetLabels), r += n(e.includeOverlays), r += n(e.includeOutlines), r;
};
var Xc = function(e) {
  var t = function(i) {
    return Math.round(i);
  };
  if (e.isEdge()) {
    var n = e.source().position(), r = e.target().position();
    return Os([t(n.x), t(n.y), t(r.x), t(r.y)]);
  } else {
    var a = e.position();
    return Os([t(a.x), t(a.y)]);
  }
};
var ou = function(e, t) {
  var n = e._private, r, a = e.isEdge(), i = t == null ? su : jc(t), o = i === su;
  if (n.bbCache == null ? (r = jv(e, kr), n.bbCache = r, n.bbCachePosKey = Xc(e)) : r = n.bbCache, !o) {
    var u = e.isNode();
    r = bt(), (t.includeNodes && u || t.includeEdges && !u) && (t.includeOverlays ? en(r, n.overlayBounds) : en(r, n.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!a || t.includeSourceLabels && t.includeTargetLabels) ? en(r, n.labelBounds.all) : (t.includeMainLabels && en(r, n.labelBounds.mainRot), t.includeSourceLabels && en(r, n.labelBounds.sourceRot), t.includeTargetLabels && en(r, n.labelBounds.targetRot))), r.w = r.x2 - r.x1, r.h = r.y2 - r.y1;
  }
  return r;
};
var kr = {
  includeNodes: true,
  includeEdges: true,
  includeLabels: true,
  includeMainLabels: true,
  includeSourceLabels: true,
  includeTargetLabels: true,
  includeOverlays: true,
  includeUnderlays: true,
  includeOutlines: true,
  useCache: true
};
var su = jc(kr);
var lu = ct(kr);
pn.boundingBox = function(e) {
  var t, n = e === void 0 || e.useCache === void 0 || e.useCache === true, r = Kn(function(c) {
    var d = c._private;
    return d.bbCache == null || d.styleDirty || d.bbCachePosKey !== Xc(c);
  }, function(c) {
    return c.id();
  });
  if (n && this.length === 1 && !r(this[0]))
    e === void 0 ? e = kr : e = lu(e), t = ou(this[0], e);
  else {
    t = bt(), e = e || kr;
    var a = lu(e), i = this, o = i.cy(), u = o.styleEnabled();
    this.edges().forEach(r), this.nodes().forEach(r), u && this.recalculateRenderedStyle(n), this.updateCompoundBounds(!n);
    for (var l = 0; l < i.length; l++) {
      var s = i[l];
      r(s) && s.dirtyBoundingBoxCache(), en(t, ou(s, a));
    }
  }
  return t.x1 = Bt(t.x1), t.y1 = Bt(t.y1), t.x2 = Bt(t.x2), t.y2 = Bt(t.y2), t.w = Bt(t.x2 - t.x1), t.h = Bt(t.y2 - t.y1), t;
};
pn.dirtyBoundingBoxCache = function() {
  for (var e = 0; e < this.length; e++) {
    var t = this[e]._private;
    t.bbCache = null, t.bbCachePosKey = null, t.bodyBounds = null, t.overlayBounds = null, t.labelBounds.all = null, t.labelBounds.source = null, t.labelBounds.target = null, t.labelBounds.main = null, t.labelBounds.sourceRot = null, t.labelBounds.targetRot = null, t.labelBounds.mainRot = null, t.arrowBounds.source = null, t.arrowBounds.target = null, t.arrowBounds["mid-source"] = null, t.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
pn.boundingBoxAt = function(e) {
  var t = this.nodes(), n = this.cy(), r = n.hasCompoundNodes(), a = n.collection();
  if (r && (a = t.filter(function(s) {
    return s.isParent();
  }), t = t.not(a)), _e(e)) {
    var i = e;
    e = function() {
      return i;
    };
  }
  var o = function(s, c) {
    return s._private.bbAtOldPos = e(s, c);
  }, u = function(s) {
    return s._private.bbAtOldPos;
  };
  n.startBatch(), t.forEach(o).silentPositions(e), r && (a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), a.updateCompoundBounds(true));
  var l = mf(this.boundingBox({
    useCache: false
  }));
  return t.silentPositions(u), r && (a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), a.updateCompoundBounds(true)), n.endBatch(), l;
};
Hn.boundingbox = Hn.bb = Hn.boundingBox;
Hn.renderedBoundingbox = Hn.renderedBoundingBox;
var Xv = pn;
var gr;
var Or;
gr = Or = {};
var Yc = function(e) {
  e.uppercaseName = Ts(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = Ts(e.outerName), gr[e.name] = function() {
    var t = this[0], n = t._private, r = n.cy, a = r._private.styleEnabled;
    if (t)
      if (a) {
        if (t.isParent())
          return t.updateCompoundBounds(), n[e.autoName] || 0;
        var i = t.pstyle(e.name);
        switch (i.strValue) {
          case "label":
            return t.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
          default:
            return i.pfValue;
        }
      } else
        return 1;
  }, gr["outer" + e.uppercaseName] = function() {
    var t = this[0], n = t._private, r = n.cy, a = r._private.styleEnabled;
    if (t)
      if (a) {
        var i = t[e.name](), o = t.pstyle("border-position").value, u;
        o === "center" ? u = t.pstyle("border-width").pfValue : o === "outside" ? u = 2 * t.pstyle("border-width").pfValue : u = 0;
        var l = 2 * t.padding();
        return i + u + l;
      } else
        return 1;
  }, gr["rendered" + e.uppercaseName] = function() {
    var t = this[0];
    if (t) {
      var n = t[e.name]();
      return n * this.cy().zoom();
    }
  }, gr["rendered" + e.uppercaseOuterName] = function() {
    var t = this[0];
    if (t) {
      var n = t[e.outerName]();
      return n * this.cy().zoom();
    }
  };
};
Yc({
  name: "width"
});
Yc({
  name: "height"
});
Or.padding = function() {
  var e = this[0], t = e._private;
  return e.isParent() ? (e.updateCompoundBounds(), t.autoPadding !== void 0 ? t.autoPadding : e.pstyle("padding").pfValue) : e.pstyle("padding").pfValue;
};
Or.paddedHeight = function() {
  var e = this[0];
  return e.height() + 2 * e.padding();
};
Or.paddedWidth = function() {
  var e = this[0];
  return e.width() + 2 * e.padding();
};
var Yv = Or;
var qv = function(e, t) {
  if (e.isEdge() && e.takesUpSpace())
    return t(e);
};
var Uv = function(e, t) {
  if (e.isEdge() && e.takesUpSpace()) {
    var n = e.cy();
    return Ra(t(e), n.zoom(), n.pan());
  }
};
var Wv = function(e, t) {
  if (e.isEdge() && e.takesUpSpace()) {
    var n = e.cy(), r = n.pan(), a = n.zoom();
    return t(e).map(function(i) {
      return Ra(i, a, r);
    });
  }
};
var Gv = function(e) {
  return e.renderer().getControlPoints(e);
};
var Hv = function(e) {
  return e.renderer().getSegmentPoints(e);
};
var Kv = function(e) {
  return e.renderer().getSourceEndpoint(e);
};
var Zv = function(e) {
  return e.renderer().getTargetEndpoint(e);
};
var Qv = function(e) {
  return e.renderer().getEdgeMidpoint(e);
};
var uu = {
  controlPoints: {
    get: Gv,
    mult: true
  },
  segmentPoints: {
    get: Hv,
    mult: true
  },
  sourceEndpoint: {
    get: Kv
  },
  targetEndpoint: {
    get: Zv
  },
  midpoint: {
    get: Qv
  }
};
var $v = function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
};
var Jv = Object.keys(uu).reduce(function(e, t) {
  var n = uu[t], r = $v(t);
  return e[t] = function() {
    return qv(this, n.get);
  }, n.mult ? e[r] = function() {
    return Wv(this, n.get);
  } : e[r] = function() {
    return Uv(this, n.get);
  }, e;
}, {});
var eg = ve({}, Vv, Xv, Yv, Jv);
var qc = function(e, t) {
  this.recycle(e, t);
};
function cr() {
  return false;
}
function ea() {
  return true;
}
qc.prototype = {
  instanceString: function() {
    return "event";
  },
  recycle: function(e, t) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = cr, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? ea : cr) : e != null && e.type ? t = e : this.type = e, t != null && (this.originalEvent = t.originalEvent, this.type = t.type != null ? t.type : this.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var n = this.position, r = this.cy.zoom(), a = this.cy.pan();
      this.renderedPosition = {
        x: n.x * r + a.x,
        y: n.y * r + a.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  },
  preventDefault: function() {
    this.isDefaultPrevented = ea;
    var e = this.originalEvent;
    e && e.preventDefault && e.preventDefault();
  },
  stopPropagation: function() {
    this.isPropagationStopped = ea;
    var e = this.originalEvent;
    e && e.stopPropagation && e.stopPropagation();
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = ea, this.stopPropagation();
  },
  isDefaultPrevented: cr,
  isPropagationStopped: cr,
  isImmediatePropagationStopped: cr
};
var Uc = /^([^.]+)(\.(?:[^.]+))?$/;
var tg = ".*";
var Wc = {
  qualifierCompare: function(e, t) {
    return e === t;
  },
  eventMatches: function() {
    return true;
  },
  addEventFields: function() {
  },
  callbackContext: function(e) {
    return e;
  },
  beforeEmit: function() {
  },
  afterEmit: function() {
  },
  bubble: function() {
    return false;
  },
  parent: function() {
    return null;
  },
  context: null
};
var cu = Object.keys(Wc);
var ng = {};
function Fa() {
  for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ng, t = arguments.length > 1 ? arguments[1] : void 0, n = 0; n < cu.length; n++) {
    var r = cu[n];
    this[r] = e[r] || Wc[r];
  }
  this.context = t || this.context, this.listeners = [], this.emitting = 0;
}
var dn = Fa.prototype;
var Gc = function(e, t, n, r, a, i, o) {
  qe(r) && (a = r, r = null), o && (i == null ? i = o : i = ve({}, i, o));
  for (var u = Le(n) ? n : n.split(/\s+/), l = 0; l < u.length; l++) {
    var s = u[l];
    if (!on(s)) {
      var c = s.match(Uc);
      if (c) {
        var d = c[1], h = c[2] ? c[2] : null, f = t(e, s, d, h, r, a, i);
        if (f === false)
          break;
      }
    }
  }
};
var du = function(e, t) {
  return e.addEventFields(e.context, t), new qc(t.type, t);
};
var rg = function(e, t, n) {
  if (lh(n)) {
    t(e, n);
    return;
  } else if (_e(n)) {
    t(e, du(e, n));
    return;
  }
  for (var r = Le(n) ? n : n.split(/\s+/), a = 0; a < r.length; a++) {
    var i = r[a];
    if (!on(i)) {
      var o = i.match(Uc);
      if (o) {
        var u = o[1], l = o[2] ? o[2] : null, s = du(e, {
          type: u,
          namespace: l,
          target: e.context
        });
        t(e, s);
      }
    }
  }
};
dn.on = dn.addListener = function(e, t, n, r, a) {
  return Gc(this, function(i, o, u, l, s, c, d) {
    qe(c) && i.listeners.push({
      event: o,
      // full event string
      callback: c,
      // callback to run
      type: u,
      // the event type (e.g. 'click')
      namespace: l,
      // the event namespace (e.g. ".foo")
      qualifier: s,
      // a restriction on whether to match this emitter
      conf: d
      // additional configuration
    });
  }, e, t, n, r, a), this;
};
dn.one = function(e, t, n, r) {
  return this.on(e, t, n, r, {
    one: true
  });
};
dn.removeListener = dn.off = function(e, t, n, r) {
  var a = this;
  this.emitting !== 0 && (this.listeners = jh(this.listeners));
  for (var i = this.listeners, o = function(l) {
    var s = i[l];
    Gc(a, function(c, d, h, f, p, g) {
      if ((s.type === h || e === "*") && (!f && s.namespace !== ".*" || s.namespace === f) && (!p || c.qualifierCompare(s.qualifier, p)) && (!g || s.callback === g))
        return i.splice(l, 1), false;
    }, e, t, n, r);
  }, u = i.length - 1; u >= 0; u--)
    o(u);
  return this;
};
dn.removeAllListeners = function() {
  return this.removeListener("*");
};
dn.emit = dn.trigger = function(e, t, n) {
  var r = this.listeners, a = r.length;
  return this.emitting++, Le(t) || (t = [t]), rg(this, function(i, o) {
    n != null && (r = [{
      event: o.event,
      type: o.type,
      namespace: o.namespace,
      callback: n
    }], a = r.length);
    for (var u = function() {
      var s = r[l];
      if (s.type === o.type && (!s.namespace || s.namespace === o.namespace || s.namespace === tg) && i.eventMatches(i.context, s, o)) {
        var c = [o];
        t != null && Yh(c, t), i.beforeEmit(i.context, s, o), s.conf && s.conf.one && (i.listeners = i.listeners.filter(function(f) {
          return f !== s;
        }));
        var d = i.callbackContext(i.context, s, o), h = s.callback.apply(d, c);
        i.afterEmit(i.context, s, o), h === false && (o.stopPropagation(), o.preventDefault());
      }
    }, l = 0; l < a; l++)
      u();
    i.bubble(i.context) && !o.isPropagationStopped() && i.parent(i.context).emit(o, t);
  }, e), this.emitting--, this;
};
var ag = {
  qualifierCompare: function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  },
  eventMatches: function(e, t, n) {
    var r = t.qualifier;
    return r != null ? e !== n.target && Ar(n.target) && r.matches(n.target) : true;
  },
  addEventFields: function(e, t) {
    t.cy = e.cy(), t.target = e;
  },
  callbackContext: function(e, t, n) {
    return t.qualifier != null ? n.target : e;
  },
  beforeEmit: function(e, t) {
    t.conf && t.conf.once && t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
  },
  bubble: function() {
    return true;
  },
  parent: function(e) {
    return e.isChild() ? e.parent() : e.cy();
  }
};
var ta = function(e) {
  return fe(e) ? new un(e) : e;
};
var Hc = {
  createEmitter: function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e], n = t._private;
      n.emitter || (n.emitter = new Fa(ag, t));
    }
    return this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, t, n) {
    for (var r = ta(t), a = 0; a < this.length; a++) {
      var i = this[a];
      i.emitter().on(e, r, n);
    }
    return this;
  },
  removeListener: function(e, t, n) {
    for (var r = ta(t), a = 0; a < this.length; a++) {
      var i = this[a];
      i.emitter().removeListener(e, r, n);
    }
    return this;
  },
  removeAllListeners: function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e];
      t.emitter().removeAllListeners();
    }
    return this;
  },
  one: function(e, t, n) {
    for (var r = ta(t), a = 0; a < this.length; a++) {
      var i = this[a];
      i.emitter().one(e, r, n);
    }
    return this;
  },
  once: function(e, t, n) {
    for (var r = ta(t), a = 0; a < this.length; a++) {
      var i = this[a];
      i.emitter().on(e, r, n, {
        once: true,
        onceCollection: this
      });
    }
  },
  emit: function(e, t) {
    for (var n = 0; n < this.length; n++) {
      var r = this[n];
      r.emitter().emit(e, t);
    }
    return this;
  },
  emitAndNotify: function(e, t) {
    if (this.length !== 0)
      return this.cy().notify(e, this), this.emit(e, t), this;
  }
};
Me.eventAliasesOn(Hc);
var Kc = {
  nodes: function(e) {
    return this.filter(function(t) {
      return t.isNode();
    }).filter(e);
  },
  edges: function(e) {
    return this.filter(function(t) {
      return t.isEdge();
    }).filter(e);
  },
  // internal helper to get nodes and edges as separate collections with single iteration over elements
  byGroup: function() {
    for (var e = this.spawn(), t = this.spawn(), n = 0; n < this.length; n++) {
      var r = this[n];
      r.isNode() ? e.push(r) : t.push(r);
    }
    return {
      nodes: e,
      edges: t
    };
  },
  filter: function(e, t) {
    if (e === void 0)
      return this;
    if (fe(e) || St(e))
      return new un(e).filter(this);
    if (qe(e)) {
      for (var n = this.spawn(), r = this, a = 0; a < r.length; a++) {
        var i = r[a], o = t ? e.apply(t, [i, a, r]) : e(i, a, r);
        o && n.push(i);
      }
      return n;
    }
    return this.spawn();
  },
  not: function(e) {
    if (e) {
      fe(e) && (e = this.filter(e));
      for (var t = this.spawn(), n = 0; n < this.length; n++) {
        var r = this[n], a = e.has(r);
        a || t.push(r);
      }
      return t;
    } else
      return this;
  },
  absoluteComplement: function() {
    var e = this.cy();
    return e.mutableElements().not(this);
  },
  intersect: function(e) {
    if (fe(e)) {
      var t = e;
      return this.filter(t);
    }
    for (var n = this.spawn(), r = this, a = e, i = this.length < e.length, o = i ? r : a, u = i ? a : r, l = 0; l < o.length; l++) {
      var s = o[l];
      u.has(s) && n.push(s);
    }
    return n;
  },
  xor: function(e) {
    var t = this._private.cy;
    fe(e) && (e = t.$(e));
    var n = this.spawn(), r = this, a = e, i = function(o, u) {
      for (var l = 0; l < o.length; l++) {
        var s = o[l], c = s._private.data.id, d = u.hasElementWithId(c);
        d || n.push(s);
      }
    };
    return i(r, a), i(a, r), n;
  },
  diff: function(e) {
    var t = this._private.cy;
    fe(e) && (e = t.$(e));
    var n = this.spawn(), r = this.spawn(), a = this.spawn(), i = this, o = e, u = function(l, s, c) {
      for (var d = 0; d < l.length; d++) {
        var h = l[d], f = h._private.data.id, p = s.hasElementWithId(f);
        p ? a.merge(h) : c.push(h);
      }
    };
    return u(i, o, n), u(o, i, r), {
      left: n,
      right: r,
      both: a
    };
  },
  add: function(e) {
    var t = this._private.cy;
    if (!e)
      return this;
    if (fe(e)) {
      var n = e;
      e = t.mutableElements().filter(n);
    }
    for (var r = this.spawnSelf(), a = 0; a < e.length; a++) {
      var i = e[a], o = !this.has(i);
      o && r.push(i);
    }
    return r;
  },
  // in place merge on calling collection
  merge: function(e) {
    var t = this._private, n = t.cy;
    if (!e)
      return this;
    if (e && fe(e)) {
      var r = e;
      e = n.mutableElements().filter(r);
    }
    for (var a = t.map, i = 0; i < e.length; i++) {
      var o = e[i], u = o._private.data.id, l = !a.has(u);
      if (l) {
        var s = this.length++;
        this[s] = o, a.set(u, {
          ele: o,
          index: s
        });
      }
    }
    return this;
  },
  unmergeAt: function(e) {
    var t = this[e], n = t.id(), r = this._private, a = r.map;
    this[e] = void 0, a.delete(n);
    var i = e === this.length - 1;
    if (this.length > 1 && !i) {
      var o = this.length - 1, u = this[o], l = u._private.data.id;
      this[o] = void 0, this[e] = u, a.set(l, {
        ele: u,
        index: e
      });
    }
    return this.length--, this;
  },
  // remove single ele in place in calling collection
  unmergeOne: function(e) {
    e = e[0];
    var t = this._private, n = e._private.data.id, r = t.map, a = r.get(n);
    if (!a)
      return this;
    var i = a.index;
    return this.unmergeAt(i), this;
  },
  // remove eles in place on calling collection
  unmerge: function(e) {
    var t = this._private.cy;
    if (!e)
      return this;
    if (e && fe(e)) {
      var n = e;
      e = t.mutableElements().filter(n);
    }
    for (var r = 0; r < e.length; r++)
      this.unmergeOne(e[r]);
    return this;
  },
  unmergeBy: function(e) {
    for (var t = this.length - 1; t >= 0; t--) {
      var n = this[t];
      e(n) && this.unmergeAt(t);
    }
    return this;
  },
  map: function(e, t) {
    for (var n = [], r = this, a = 0; a < r.length; a++) {
      var i = r[a], o = t ? e.apply(t, [i, a, r]) : e(i, a, r);
      n.push(o);
    }
    return n;
  },
  reduce: function(e, t) {
    for (var n = t, r = this, a = 0; a < r.length; a++)
      n = e(n, r[a], a, r);
    return n;
  },
  max: function(e, t) {
    for (var n = -1 / 0, r, a = this, i = 0; i < a.length; i++) {
      var o = a[i], u = t ? e.apply(t, [o, i, a]) : e(o, i, a);
      u > n && (n = u, r = o);
    }
    return {
      value: n,
      ele: r
    };
  },
  min: function(e, t) {
    for (var n = 1 / 0, r, a = this, i = 0; i < a.length; i++) {
      var o = a[i], u = t ? e.apply(t, [o, i, a]) : e(o, i, a);
      u < n && (n = u, r = o);
    }
    return {
      value: n,
      ele: r
    };
  }
};
var Be = Kc;
Be.u = Be["|"] = Be["+"] = Be.union = Be.or = Be.add;
Be["\\"] = Be["!"] = Be["-"] = Be.difference = Be.relativeComplement = Be.subtract = Be.not;
Be.n = Be["&"] = Be["."] = Be.and = Be.intersection = Be.intersect;
Be["^"] = Be["(+)"] = Be["(-)"] = Be.symmetricDifference = Be.symdiff = Be.xor;
Be.fnFilter = Be.filterFn = Be.stdFilter = Be.filter;
Be.complement = Be.abscomp = Be.absoluteComplement;
var ig = {
  isNode: function() {
    return this.group() === "nodes";
  },
  isEdge: function() {
    return this.group() === "edges";
  },
  isLoop: function() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  },
  isSimple: function() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },
  group: function() {
    var e = this[0];
    if (e)
      return e._private.group;
  }
};
var Zc = function(e, t) {
  var n = e.cy(), r = n.hasCompoundNodes();
  function a(s) {
    var c = s.pstyle("z-compound-depth");
    return c.value === "auto" ? r ? s.zDepth() : 0 : c.value === "bottom" ? -1 : c.value === "top" ? Qo : 0;
  }
  var i = a(e) - a(t);
  if (i !== 0)
    return i;
  function o(s) {
    var c = s.pstyle("z-index-compare");
    return c.value === "auto" && s.isNode() ? 1 : 0;
  }
  var u = o(e) - o(t);
  if (u !== 0)
    return u;
  var l = e.pstyle("z-index").value - t.pstyle("z-index").value;
  return l !== 0 ? l : e.poolIndex() - t.poolIndex();
};
var Ta = {
  forEach: function(e, t) {
    if (qe(e))
      for (var n = this.length, r = 0; r < n; r++) {
        var a = this[r], i = t ? e.apply(t, [a, r, this]) : e(a, r, this);
        if (i === false)
          break;
      }
    return this;
  },
  toArray: function() {
    for (var e = [], t = 0; t < this.length; t++)
      e.push(this[t]);
    return e;
  },
  slice: function(e, t) {
    var n = [], r = this.length;
    t == null && (t = r), e == null && (e = 0), e < 0 && (e = r + e), t < 0 && (t = r + t);
    for (var a = e; a >= 0 && a < t && a < r; a++)
      n.push(this[a]);
    return this.spawn(n);
  },
  size: function() {
    return this.length;
  },
  eq: function(e) {
    return this[e] || this.spawn();
  },
  first: function() {
    return this[0] || this.spawn();
  },
  last: function() {
    return this[this.length - 1] || this.spawn();
  },
  empty: function() {
    return this.length === 0;
  },
  nonempty: function() {
    return !this.empty();
  },
  sort: function(e) {
    if (!qe(e))
      return this;
    var t = this.toArray().sort(e);
    return this.spawn(t);
  },
  sortByZIndex: function() {
    return this.sort(Zc);
  },
  zDepth: function() {
    var e = this[0];
    if (e) {
      var t = e._private, n = t.group;
      if (n === "nodes") {
        var r = t.data.parent ? e.parents().size() : 0;
        return e.isParent() ? r : Qo - 1;
      } else {
        var a = t.source, i = t.target, o = a.zDepth(), u = i.zDepth();
        return Math.max(o, u, 0);
      }
    }
  }
};
Ta.each = Ta.forEach;
var og = function() {
  var e = "undefined", t = (typeof Symbol > "u" ? "undefined" : tt(Symbol)) != e && tt(Symbol.iterator) != e;
  t && (Ta[Symbol.iterator] = function() {
    var n = this, r = {
      value: void 0,
      done: false
    }, a = 0, i = this.length;
    return Ku({
      next: function() {
        return a < i ? r.value = n[a++] : (r.value = void 0, r.done = true), r;
      }
    }, Symbol.iterator, function() {
      return this;
    });
  });
};
og();
var sg = ct({
  nodeDimensionsIncludeLabels: false
});
var ua = {
  // Calculates and returns node dimensions { x, y } based on options given
  layoutDimensions: function(e) {
    e = sg(e);
    var t;
    if (!this.takesUpSpace())
      t = {
        w: 0,
        h: 0
      };
    else if (e.nodeDimensionsIncludeLabels) {
      var n = this.boundingBox();
      t = {
        w: n.w,
        h: n.h
      };
    } else
      t = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
    return (t.w === 0 || t.h === 0) && (t.w = t.h = 1), t;
  },
  // using standard layout options, apply position function (w/ or w/o animation)
  layoutPositions: function(e, t, n) {
    var r = this.nodes().filter(function(w) {
      return !w.isParent();
    }), a = this.cy(), i = t.eles, o = function(w) {
      return w.id();
    }, u = Kn(n, o);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var l = function(w, T, S) {
      var x = {
        x: T.x1 + T.w / 2,
        y: T.y1 + T.h / 2
      }, _ = {
        // scale from center of bounding box (not necessarily 0,0)
        x: (S.x - x.x) * w,
        y: (S.y - x.y) * w
      };
      return {
        x: x.x + _.x,
        y: x.y + _.y
      };
    }, s = t.spacingFactor && t.spacingFactor !== 1, c = function() {
      if (!s)
        return null;
      for (var w = bt(), T = 0; T < r.length; T++) {
        var S = r[T], x = u(S, T);
        vc(w, x.x, x.y);
      }
      return w;
    }, d = c(), h = Kn(function(w, T) {
      var S = u(w, T);
      if (s) {
        var x = Math.abs(t.spacingFactor);
        S = l(x, d, S);
      }
      return t.transform != null && (S = t.transform(w, S)), S;
    }, o);
    if (t.animate) {
      for (var f = 0; f < r.length; f++) {
        var p = r[f], g = h(p, f), m = t.animateFilter == null || t.animateFilter(p, f);
        if (m) {
          var v = p.animation({
            position: g,
            duration: t.animationDuration,
            easing: t.animationEasing
          });
          e.animations.push(v);
        } else
          p.position(g);
      }
      if (t.fit) {
        var y = a.animation({
          fit: {
            boundingBox: i.boundingBoxAt(h),
            padding: t.padding
          },
          duration: t.animationDuration,
          easing: t.animationEasing
        });
        e.animations.push(y);
      } else if (t.zoom !== void 0 && t.pan !== void 0) {
        var b = a.animation({
          zoom: t.zoom,
          pan: t.pan,
          duration: t.animationDuration,
          easing: t.animationEasing
        });
        e.animations.push(b);
      }
      e.animations.forEach(function(w) {
        return w.play();
      }), e.one("layoutready", t.ready), e.emit({
        type: "layoutready",
        layout: e
      }), tr.all(e.animations.map(function(w) {
        return w.promise();
      })).then(function() {
        e.one("layoutstop", t.stop), e.emit({
          type: "layoutstop",
          layout: e
        });
      });
    } else
      r.positions(h), t.fit && a.fit(t.eles, t.padding), t.zoom != null && a.zoom(t.zoom), t.pan && a.pan(t.pan), e.one("layoutready", t.ready), e.emit({
        type: "layoutready",
        layout: e
      }), e.one("layoutstop", t.stop), e.emit({
        type: "layoutstop",
        layout: e
      });
    return this;
  },
  layout: function(e) {
    var t = this.cy();
    return t.makeLayout(ve({}, e, {
      eles: this
    }));
  }
};
ua.createLayout = ua.makeLayout = ua.layout;
function Qc(e, t, n) {
  var r = n._private, a = r.styleCache = r.styleCache || [], i;
  return (i = a[e]) != null || (i = a[e] = t(n)), i;
}
function ja(e, t) {
  return e = Pn(e), function(n) {
    return Qc(e, t, n);
  };
}
function Xa(e, t) {
  e = Pn(e);
  var n = function(r) {
    return t.call(r);
  };
  return function() {
    var r = this[0];
    if (r)
      return Qc(e, n, r);
  };
}
var lt = {
  recalculateRenderedStyle: function(e) {
    var t = this.cy(), n = t.renderer(), r = t.styleEnabled();
    return n && r && n.recalculateRenderedStyle(this, e), this;
  },
  dirtyStyleCache: function() {
    var e = this.cy(), t = function(r) {
      return r._private.styleCache = null;
    };
    if (e.hasCompoundNodes()) {
      var n;
      n = this.spawnSelf().merge(this.descendants()).merge(this.parents()), n.merge(n.connectedEdges()), n.forEach(t);
    } else
      this.forEach(function(r) {
        t(r), r.connectedEdges().forEach(t);
      });
    return this;
  },
  // fully updates (recalculates) the style for the elements
  updateStyle: function(e) {
    var t = this._private.cy;
    if (!t.styleEnabled())
      return this;
    if (t.batching()) {
      var n = t._private.batchStyleEles;
      return n.merge(this), this;
    }
    var r = t.hasCompoundNodes(), a = this;
    e = !!(e || e === void 0), r && (a = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
    var i = a;
    return e ? i.emitAndNotify("style") : i.emit("style"), a.forEach(function(o) {
      return o._private.styleDirty = true;
    }), this;
  },
  // private: clears dirty flag and recalculates style
  cleanStyle: function() {
    var e = this.cy();
    if (e.styleEnabled())
      for (var t = 0; t < this.length; t++) {
        var n = this[t];
        n._private.styleDirty && (n._private.styleDirty = false, e.style().apply(n));
      }
  },
  // get the internal parsed style object for the specified property
  parsedStyle: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n = this[0], r = n.cy();
    if (r.styleEnabled() && n) {
      n._private.styleDirty && (n._private.styleDirty = false, r.style().apply(n));
      var a = n._private.style[e];
      return a ?? (t ? r.style().getDefaultProperty(e) : null);
    }
  },
  numericStyle: function(e) {
    var t = this[0];
    if (t.cy().styleEnabled() && t) {
      var n = t.pstyle(e);
      return n.pfValue !== void 0 ? n.pfValue : n.value;
    }
  },
  numericStyleUnits: function(e) {
    var t = this[0];
    if (t.cy().styleEnabled() && t)
      return t.pstyle(e).units;
  },
  // get the specified css property as a rendered value (i.e. on-screen value)
  // or get the whole rendered style if no property specified (NB doesn't allow setting)
  renderedStyle: function(e) {
    var t = this.cy();
    if (!t.styleEnabled())
      return this;
    var n = this[0];
    if (n)
      return t.style().getRenderedStyle(n, e);
  },
  // read the calculated css style of the element or override the style (via a bypass)
  style: function(e, t) {
    var n = this.cy();
    if (!n.styleEnabled())
      return this;
    var r = false, a = n.style();
    if (_e(e)) {
      var i = e;
      a.applyBypass(this, i, r), this.emitAndNotify("style");
    } else if (fe(e))
      if (t === void 0) {
        var o = this[0];
        return o ? a.getStylePropertyValue(o, e) : void 0;
      } else
        a.applyBypass(this, e, t, r), this.emitAndNotify("style");
    else if (e === void 0) {
      var u = this[0];
      return u ? a.getRawStyle(u) : void 0;
    }
    return this;
  },
  removeStyle: function(e) {
    var t = this.cy();
    if (!t.styleEnabled())
      return this;
    var n = false, r = t.style(), a = this;
    if (e === void 0)
      for (var i = 0; i < a.length; i++) {
        var o = a[i];
        r.removeAllBypasses(o, n);
      }
    else {
      e = e.split(/\s+/);
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        r.removeBypasses(l, e, n);
      }
    }
    return this.emitAndNotify("style"), this;
  },
  show: function() {
    return this.css("display", "element"), this;
  },
  hide: function() {
    return this.css("display", "none"), this;
  },
  effectiveOpacity: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return 1;
    var t = e.hasCompoundNodes(), n = this[0];
    if (n) {
      var r = n._private, a = n.pstyle("opacity").value;
      if (!t)
        return a;
      var i = r.data.parent ? n.parents() : null;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var u = i[o], l = u.pstyle("opacity").value;
          a = l * a;
        }
      return a;
    }
  },
  transparent: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return false;
    var t = this[0], n = t.cy().hasCompoundNodes();
    if (t)
      return n ? t.effectiveOpacity() === 0 : t.pstyle("opacity").value === 0;
  },
  backgrounding: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return false;
    var t = this[0];
    return !!t._private.backgrounding;
  }
};
function vo(e, t) {
  var n = e._private, r = n.data.parent ? e.parents() : null;
  if (r)
    for (var a = 0; a < r.length; a++) {
      var i = r[a];
      if (!t(i))
        return false;
    }
  return true;
}
function us(e) {
  var t = e.ok, n = e.edgeOkViaNode || e.ok, r = e.parentOk || e.ok;
  return function() {
    var a = this.cy();
    if (!a.styleEnabled())
      return true;
    var i = this[0], o = a.hasCompoundNodes();
    if (i) {
      var u = i._private;
      if (!t(i))
        return false;
      if (i.isNode())
        return !o || vo(i, r);
      var l = u.source, s = u.target;
      return n(l) && (!o || vo(l, n)) && (l === s || n(s) && (!o || vo(s, n)));
    }
  };
}
var nr = ja("eleTakesUpSpace", function(e) {
  return e.pstyle("display").value === "element" && e.width() !== 0 && (e.isNode() ? e.height() !== 0 : true);
});
lt.takesUpSpace = Xa("takesUpSpace", us({
  ok: nr
}));
var lg = ja("eleInteractive", function(e) {
  return e.pstyle("events").value === "yes" && e.pstyle("visibility").value === "visible" && nr(e);
});
var ug = ja("parentInteractive", function(e) {
  return e.pstyle("visibility").value === "visible" && nr(e);
});
lt.interactive = Xa("interactive", us({
  ok: lg,
  parentOk: ug,
  edgeOkViaNode: nr
}));
lt.noninteractive = function() {
  var e = this[0];
  if (e)
    return !e.interactive();
};
var cg = ja("eleVisible", function(e) {
  return e.pstyle("visibility").value === "visible" && e.pstyle("opacity").pfValue !== 0 && nr(e);
});
var dg = nr;
lt.visible = Xa("visible", us({
  ok: cg,
  edgeOkViaNode: dg
}));
lt.hidden = function() {
  var e = this[0];
  if (e)
    return !e.visible();
};
lt.isBundledBezier = Xa("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : false;
});
lt.bypass = lt.css = lt.style;
lt.renderedCss = lt.renderedStyle;
lt.removeBypass = lt.removeCss = lt.removeStyle;
lt.pstyle = lt.parsedStyle;
var an = {};
function hu(e) {
  return function() {
    var t = arguments, n = [];
    if (t.length === 2) {
      var r = t[0], a = t[1];
      this.on(e.event, r, a);
    } else if (t.length === 1 && qe(t[0])) {
      var i = t[0];
      this.on(e.event, i);
    } else if (t.length === 0 || t.length === 1 && Le(t[0])) {
      for (var o = t.length === 1 ? t[0] : null, u = 0; u < this.length; u++) {
        var l = this[u], s = !e.ableField || l._private[e.ableField], c = l._private[e.field] != e.value;
        if (e.overrideAble) {
          var d = e.overrideAble(l);
          if (d !== void 0 && (s = d, !d))
            return this;
        }
        s && (l._private[e.field] = e.value, c && n.push(l));
      }
      var h = this.spawn(n);
      h.updateStyle(), h.emit(e.event), o && h.emit(o);
    }
    return this;
  };
}
function rr(e) {
  an[e.field] = function() {
    var t = this[0];
    if (t) {
      if (e.overrideField) {
        var n = e.overrideField(t);
        if (n !== void 0)
          return n;
      }
      return t._private[e.field];
    }
  }, an[e.on] = hu({
    event: e.on,
    field: e.field,
    ableField: e.ableField,
    overrideAble: e.overrideAble,
    value: true
  }), an[e.off] = hu({
    event: e.off,
    field: e.field,
    ableField: e.ableField,
    overrideAble: e.overrideAble,
    value: false
  });
}
rr({
  field: "locked",
  overrideField: function(e) {
    return e.cy().autolock() ? true : void 0;
  },
  on: "lock",
  off: "unlock"
});
rr({
  field: "grabbable",
  overrideField: function(e) {
    return e.cy().autoungrabify() || e.pannable() ? false : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
rr({
  field: "selected",
  ableField: "selectable",
  overrideAble: function(e) {
    return e.cy().autounselectify() ? false : void 0;
  },
  on: "select",
  off: "unselect"
});
rr({
  field: "selectable",
  overrideField: function(e) {
    return e.cy().autounselectify() ? false : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
an.deselect = an.unselect;
an.grabbed = function() {
  var e = this[0];
  if (e)
    return e._private.grabbed;
};
rr({
  field: "active",
  on: "activate",
  off: "unactivate"
});
rr({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
an.inactive = function() {
  var e = this[0];
  if (e)
    return !e._private.active;
};
var ft = {};
var fu = function(e) {
  return function(t) {
    for (var n = this, r = [], a = 0; a < n.length; a++) {
      var i = n[a];
      if (i.isNode()) {
        for (var o = false, u = i.connectedEdges(), l = 0; l < u.length; l++) {
          var s = u[l], c = s.source(), d = s.target();
          if (e.noIncomingEdges && d === i && c !== i || e.noOutgoingEdges && c === i && d !== i) {
            o = true;
            break;
          }
        }
        o || r.push(i);
      }
    }
    return this.spawn(r, true).filter(t);
  };
};
var pu = function(e) {
  return function(t) {
    for (var n = this, r = [], a = 0; a < n.length; a++) {
      var i = n[a];
      if (i.isNode())
        for (var o = i.connectedEdges(), u = 0; u < o.length; u++) {
          var l = o[u], s = l.source(), c = l.target();
          e.outgoing && s === i ? (r.push(l), r.push(c)) : e.incoming && c === i && (r.push(l), r.push(s));
        }
    }
    return this.spawn(r, true).filter(t);
  };
};
var vu = function(e) {
  return function(t) {
    for (var n = this, r = [], a = {}; ; ) {
      var i = e.outgoing ? n.outgoers() : n.incomers();
      if (i.length === 0)
        break;
      for (var o = false, u = 0; u < i.length; u++) {
        var l = i[u], s = l.id();
        a[s] || (a[s] = true, r.push(l), o = true);
      }
      if (!o)
        break;
      n = i;
    }
    return this.spawn(r, true).filter(t);
  };
};
ft.clearTraversalCache = function() {
  for (var e = 0; e < this.length; e++)
    this[e]._private.traversalCache = null;
};
ve(ft, {
  // get the root nodes in the DAG
  roots: fu({
    noIncomingEdges: true
  }),
  // get the leaf nodes in the DAG
  leaves: fu({
    noOutgoingEdges: true
  }),
  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: Dt(pu({
    outgoing: true
  }), "outgoers"),
  // aka DAG descendants
  successors: vu({
    outgoing: true
  }),
  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: Dt(pu({
    incoming: true
  }), "incomers"),
  // aka DAG ancestors
  predecessors: vu({})
});
ve(ft, {
  neighborhood: Dt(function(e) {
    for (var t = [], n = this.nodes(), r = 0; r < n.length; r++)
      for (var a = n[r], i = a.connectedEdges(), o = 0; o < i.length; o++) {
        var u = i[o], l = u.source(), s = u.target(), c = a === l ? s : l;
        c.length > 0 && t.push(c[0]), t.push(u[0]);
      }
    return this.spawn(t, true).filter(e);
  }, "neighborhood"),
  closedNeighborhood: function(e) {
    return this.neighborhood().add(this).filter(e);
  },
  openNeighborhood: function(e) {
    return this.neighborhood(e);
  }
});
ft.neighbourhood = ft.neighborhood;
ft.closedNeighbourhood = ft.closedNeighborhood;
ft.openNeighbourhood = ft.openNeighborhood;
ve(ft, {
  source: Dt(function(e) {
    var t = this[0], n;
    return t && (n = t._private.source || t.cy().collection()), n && e ? n.filter(e) : n;
  }, "source"),
  target: Dt(function(e) {
    var t = this[0], n;
    return t && (n = t._private.target || t.cy().collection()), n && e ? n.filter(e) : n;
  }, "target"),
  sources: gu({
    attr: "source"
  }),
  targets: gu({
    attr: "target"
  })
});
function gu(e) {
  return function(t) {
    for (var n = [], r = 0; r < this.length; r++) {
      var a = this[r], i = a._private[e.attr];
      i && n.push(i);
    }
    return this.spawn(n, true).filter(t);
  };
}
ve(ft, {
  edgesWith: Dt(yu(), "edgesWith"),
  edgesTo: Dt(yu({
    thisIsSrc: true
  }), "edgesTo")
});
function yu(e) {
  return function(t) {
    var n = [], r = this._private.cy, a = e || {};
    fe(t) && (t = r.$(t));
    for (var i = 0; i < t.length; i++)
      for (var o = t[i]._private.edges, u = 0; u < o.length; u++) {
        var l = o[u], s = l._private.data, c = this.hasElementWithId(s.source) && t.hasElementWithId(s.target), d = t.hasElementWithId(s.source) && this.hasElementWithId(s.target), h = c || d;
        h && ((a.thisIsSrc || a.thisIsTgt) && (a.thisIsSrc && !c || a.thisIsTgt && !d) || n.push(l));
      }
    return this.spawn(n, true);
  };
}
ve(ft, {
  connectedEdges: Dt(function(e) {
    for (var t = [], n = this, r = 0; r < n.length; r++) {
      var a = n[r];
      if (a.isNode())
        for (var i = a._private.edges, o = 0; o < i.length; o++) {
          var u = i[o];
          t.push(u);
        }
    }
    return this.spawn(t, true).filter(e);
  }, "connectedEdges"),
  connectedNodes: Dt(function(e) {
    for (var t = [], n = this, r = 0; r < n.length; r++) {
      var a = n[r];
      a.isEdge() && (t.push(a.source()[0]), t.push(a.target()[0]));
    }
    return this.spawn(t, true).filter(e);
  }, "connectedNodes"),
  parallelEdges: Dt(mu(), "parallelEdges"),
  codirectedEdges: Dt(mu({
    codirected: true
  }), "codirectedEdges")
});
function mu(e) {
  var t = {
    codirected: false
  };
  return e = ve({}, t, e), function(n) {
    for (var r = [], a = this.edges(), i = e, o = 0; o < a.length; o++)
      for (var u = a[o], l = u._private, s = l.source, c = s._private.data.id, d = l.data.target, h = s._private.edges, f = 0; f < h.length; f++) {
        var p = h[f], g = p._private.data, m = g.target, v = g.source, y = m === d && v === c, b = c === m && d === v;
        (i.codirected && y || !i.codirected && (y || b)) && r.push(p);
      }
    return this.spawn(r, true).filter(n);
  };
}
ve(ft, {
  components: function(e) {
    var t = this, n = t.cy(), r = n.collection(), a = e == null ? t.nodes() : e.nodes(), i = [];
    e != null && a.empty() && (a = e.sources());
    var o = function(l, s) {
      r.merge(l), a.unmerge(l), s.merge(l);
    };
    if (a.empty())
      return t.spawn();
    var u = function() {
      var l = n.collection();
      i.push(l);
      var s = a[0];
      o(s, l), t.bfs({
        directed: false,
        roots: s,
        visit: function(c) {
          return o(c, l);
        }
      }), l.forEach(function(c) {
        c.connectedEdges().forEach(function(d) {
          t.has(d) && l.has(d.source()) && l.has(d.target()) && l.merge(d);
        });
      });
    };
    do
      u();
    while (a.length > 0);
    return i;
  },
  component: function() {
    var e = this[0];
    return e.cy().mutableElements().components(e)[0];
  }
});
ft.componentsOf = ft.components;
var ut = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (e === void 0) {
    Ye("A collection must have a reference to the core");
    return;
  }
  var a = new Wt(), i = false;
  if (!t)
    t = [];
  else if (t.length > 0 && _e(t[0]) && !Ar(t[0])) {
    i = true;
    for (var o = [], u = new er(), l = 0, s = t.length; l < s; l++) {
      var c = t[l];
      c.data == null && (c.data = {});
      var d = c.data;
      if (d.id == null)
        d.id = hc();
      else if (e.hasElementWithId(d.id) || u.has(d.id))
        continue;
      var h = new Aa(e, c, false);
      o.push(h), u.add(d.id);
    }
    t = o;
  }
  this.length = 0;
  for (var f = 0, p = t.length; f < p; f++) {
    var g = t[f][0];
    if (g != null) {
      var m = g._private.data.id;
      (!n || !a.has(m)) && (n && a.set(m, {
        index: this.length,
        ele: g
      }), this[this.length] = g, this.length++);
    }
  }
  this._private = {
    eles: this,
    cy: e,
    get map() {
      return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
    },
    set map(v) {
      this.lazyMap = v;
    },
    rebuildMap: function() {
      for (var v = this.lazyMap = new Wt(), y = this.eles, b = 0; b < y.length; b++) {
        var w = y[b];
        v.set(w.id(), {
          index: b,
          ele: w
        });
      }
    }
  }, n && (this._private.map = a), i && !r && this.restore();
};
var Oe = Aa.prototype = ut.prototype = Object.create(Array.prototype);
Oe.instanceString = function() {
  return "collection";
};
Oe.spawn = function(e, t) {
  return new ut(this.cy(), e, t);
};
Oe.spawnSelf = function() {
  return this.spawn(this);
};
Oe.cy = function() {
  return this._private.cy;
};
Oe.renderer = function() {
  return this._private.cy.renderer();
};
Oe.element = function() {
  return this[0];
};
Oe.collection = function() {
  return $u(this) ? this : new ut(this._private.cy, [this]);
};
Oe.unique = function() {
  return new ut(this._private.cy, this, true);
};
Oe.hasElementWithId = function(e) {
  return e = "" + e, this._private.map.has(e);
};
Oe.getElementById = function(e) {
  e = "" + e;
  var t = this._private.cy, n = this._private.map.get(e);
  return n ? n.ele : new ut(t);
};
Oe.$id = Oe.getElementById;
Oe.poolIndex = function() {
  var e = this._private.cy, t = e._private.elements, n = this[0]._private.data.id;
  return t._private.map.get(n).index;
};
Oe.indexOf = function(e) {
  var t = e[0]._private.data.id;
  return this._private.map.get(t).index;
};
Oe.indexOfId = function(e) {
  return e = "" + e, this._private.map.get(e).index;
};
Oe.json = function(e) {
  var t = this.element(), n = this.cy();
  if (t == null && e)
    return this;
  if (t != null) {
    var r = t._private;
    if (_e(e)) {
      if (n.startBatch(), e.data) {
        t.data(e.data);
        var a = r.data;
        if (t.isEdge()) {
          var i = false, o = {}, u = e.data.source, l = e.data.target;
          u != null && u != a.source && (o.source = "" + u, i = true), l != null && l != a.target && (o.target = "" + l, i = true), i && (t = t.move(o));
        } else {
          var s = "parent" in e.data, c = e.data.parent;
          s && (c != null || a.parent != null) && c != a.parent && (c === void 0 && (c = null), c != null && (c = "" + c), t = t.move({
            parent: c
          }));
        }
      }
      e.position && t.position(e.position);
      var d = function(p, g, m) {
        var v = e[p];
        v != null && v !== r[p] && (v ? t[g]() : t[m]());
      };
      return d("removed", "remove", "restore"), d("selected", "select", "unselect"), d("selectable", "selectify", "unselectify"), d("locked", "lock", "unlock"), d("grabbable", "grabify", "ungrabify"), d("pannable", "panify", "unpanify"), e.classes != null && t.classes(e.classes), n.endBatch(), this;
    } else if (e === void 0) {
      var h = {
        data: Ft(r.data),
        position: Ft(r.position),
        group: r.group,
        removed: r.removed,
        selected: r.selected,
        selectable: r.selectable,
        locked: r.locked,
        grabbable: r.grabbable,
        pannable: r.pannable,
        classes: null
      };
      h.classes = "";
      var f = 0;
      return r.classes.forEach(function(p) {
        return h.classes += f++ === 0 ? p : " " + p;
      }), h;
    }
  }
};
Oe.jsons = function() {
  for (var e = [], t = 0; t < this.length; t++) {
    var n = this[t], r = n.json();
    e.push(r);
  }
  return e;
};
Oe.clone = function() {
  for (var e = this.cy(), t = [], n = 0; n < this.length; n++) {
    var r = this[n], a = r.json(), i = new Aa(e, a, false);
    t.push(i);
  }
  return new ut(e, t);
};
Oe.copy = Oe.clone;
Oe.restore = function() {
  for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n = this, r = n.cy(), a = r._private, i = [], o = [], u, l = 0, s = n.length; l < s; l++) {
    var c = n[l];
    t && !c.removed() || (c.isNode() ? i.push(c) : o.push(c));
  }
  u = i.concat(o);
  var d, h = function() {
    u.splice(d, 1), d--;
  };
  for (d = 0; d < u.length; d++) {
    var f = u[d], p = f._private, g = p.data;
    if (f.clearTraversalCache(), !(!t && !p.removed)) {
      if (g.id === void 0)
        g.id = hc();
      else if (ee(g.id))
        g.id = "" + g.id;
      else if (on(g.id) || !fe(g.id)) {
        Ye("Can not create element with invalid string ID `" + g.id + "`"), h();
        continue;
      } else if (r.hasElementWithId(g.id)) {
        Ye("Can not create second element with ID `" + g.id + "`"), h();
        continue;
      }
    }
    var m = g.id;
    if (f.isNode()) {
      var v = p.position;
      v.x == null && (v.x = 0), v.y == null && (v.y = 0);
    }
    if (f.isEdge()) {
      for (var y = f, b = ["source", "target"], w = b.length, T = false, S = 0; S < w; S++) {
        var x = b[S], _ = g[x];
        ee(_) && (_ = g[x] = "" + g[x]), _ == null || _ === "" ? (Ye("Can not create edge `" + m + "` with unspecified " + x), T = true) : r.hasElementWithId(_) || (Ye("Can not create edge `" + m + "` with nonexistant " + x + " `" + _ + "`"), T = true);
      }
      if (T) {
        h();
        continue;
      }
      var P = r.getElementById(g.source), B = r.getElementById(g.target);
      P.same(B) ? P._private.edges.push(y) : (P._private.edges.push(y), B._private.edges.push(y)), y._private.source = P, y._private.target = B;
    }
    p.map = new Wt(), p.map.set(m, {
      ele: f,
      index: 0
    }), p.removed = false, t && r.addToPool(f);
  }
  for (var k = 0; k < i.length; k++) {
    var C = i[k], M = C._private.data;
    ee(M.parent) && (M.parent = "" + M.parent);
    var D = M.parent, N = D != null;
    if (N || C._private.parent) {
      var A = C._private.parent ? r.collection().merge(C._private.parent) : r.getElementById(D);
      if (A.empty())
        M.parent = void 0;
      else if (A[0].removed())
        Ae("Node added with missing parent, reference to parent removed"), M.parent = void 0, C._private.parent = null;
      else {
        for (var L = false, R = A; !R.empty(); ) {
          if (C.same(R)) {
            L = true, M.parent = void 0;
            break;
          }
          R = R.parent();
        }
        L || (A[0]._private.children.push(C), C._private.parent = A[0], a.hasCompoundNodes = true);
      }
    }
  }
  if (u.length > 0) {
    for (var I = u.length === n.length ? n : new ut(r, u), X = 0; X < I.length; X++) {
      var V = I[X];
      V.isNode() || (V.parallelEdges().clearTraversalCache(), V.source().clearTraversalCache(), V.target().clearTraversalCache());
    }
    var Y;
    a.hasCompoundNodes ? Y = r.collection().merge(I).merge(I.connectedNodes()).merge(I.parent()) : Y = I, Y.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(e), e ? I.emitAndNotify("add") : t && I.emit("add");
  }
  return n;
};
Oe.removed = function() {
  var e = this[0];
  return e && e._private.removed;
};
Oe.inside = function() {
  var e = this[0];
  return e && !e._private.removed;
};
Oe.remove = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n = this, r = [], a = {}, i = n._private.cy;
  function o(D) {
    for (var N = D._private.edges, A = 0; A < N.length; A++)
      l(N[A]);
  }
  function u(D) {
    for (var N = D._private.children, A = 0; A < N.length; A++)
      l(N[A]);
  }
  function l(D) {
    var N = a[D.id()];
    t && D.removed() || N || (a[D.id()] = true, D.isNode() ? (r.push(D), o(D), u(D)) : r.unshift(D));
  }
  for (var s = 0, c = n.length; s < c; s++) {
    var d = n[s];
    l(d);
  }
  function h(D, N) {
    var A = D._private.edges;
    sn(A, N), D.clearTraversalCache();
  }
  function f(D) {
    D.clearTraversalCache();
  }
  var p = [];
  p.ids = {};
  function g(D, N) {
    N = N[0], D = D[0];
    var A = D._private.children, L = D.id();
    sn(A, N), N._private.parent = null, p.ids[L] || (p.ids[L] = true, p.push(D));
  }
  n.dirtyCompoundBoundsCache(), t && i.removeFromPool(r);
  for (var m = 0; m < r.length; m++) {
    var v = r[m];
    if (v.isEdge()) {
      var y = v.source()[0], b = v.target()[0];
      h(y, v), h(b, v);
      for (var w = v.parallelEdges(), T = 0; T < w.length; T++) {
        var S = w[T];
        f(S), S.isBundledBezier() && S.dirtyBoundingBoxCache();
      }
    } else {
      var x = v.parent();
      x.length !== 0 && g(x, v);
    }
    t && (v._private.removed = true);
  }
  var _ = i._private.elements;
  i._private.hasCompoundNodes = false;
  for (var P = 0; P < _.length; P++) {
    var B = _[P];
    if (B.isParent()) {
      i._private.hasCompoundNodes = true;
      break;
    }
  }
  var k = new ut(this.cy(), r);
  k.size() > 0 && (e ? k.emitAndNotify("remove") : t && k.emit("remove"));
  for (var C = 0; C < p.length; C++) {
    var M = p[C];
    (!t || !M.removed()) && M.updateStyle();
  }
  return k;
};
Oe.move = function(e) {
  var t = this._private.cy, n = this, r = false, a = false, i = function(f) {
    return f == null ? f : "" + f;
  };
  if (e.source !== void 0 || e.target !== void 0) {
    var o = i(e.source), u = i(e.target), l = o != null && t.hasElementWithId(o), s = u != null && t.hasElementWithId(u);
    (l || s) && (t.batch(function() {
      n.remove(r, a), n.emitAndNotify("moveout");
      for (var f = 0; f < n.length; f++) {
        var p = n[f], g = p._private.data;
        p.isEdge() && (l && (g.source = o), s && (g.target = u));
      }
      n.restore(r, a);
    }), n.emitAndNotify("move"));
  } else if (e.parent !== void 0) {
    var c = i(e.parent), d = c === null || t.hasElementWithId(c);
    if (d) {
      var h = c === null ? void 0 : c;
      t.batch(function() {
        var f = n.remove(r, a);
        f.emitAndNotify("moveout");
        for (var p = 0; p < n.length; p++) {
          var g = n[p], m = g._private.data;
          g.isNode() && (m.parent = h);
        }
        f.restore(r, a);
      }), n.emitAndNotify("move");
    }
  }
  return this;
};
[Tc, Ev, la, rn, $n, Ov, Va, eg, Hc, Kc, ig, Ta, ua, lt, an, ft].forEach(function(e) {
  ve(Oe, e);
});
var hg = {
  add: function(e) {
    var t, n = this;
    if (St(e)) {
      var r = e;
      if (r._private.cy === n)
        t = r.restore();
      else {
        for (var a = [], i = 0; i < r.length; i++) {
          var o = r[i];
          a.push(o.json());
        }
        t = new ut(n, a);
      }
    } else if (Le(e)) {
      var u = e;
      t = new ut(n, u);
    } else if (_e(e) && (Le(e.nodes) || Le(e.edges))) {
      for (var l = e, s = [], c = ["nodes", "edges"], d = 0, h = c.length; d < h; d++) {
        var f = c[d], p = l[f];
        if (Le(p))
          for (var g = 0, m = p.length; g < m; g++) {
            var v = ve({
              group: f
            }, p[g]);
            s.push(v);
          }
      }
      t = new ut(n, s);
    } else {
      var y = e;
      t = new Aa(n, y).collection();
    }
    return t;
  },
  remove: function(e) {
    if (!St(e) && fe(e)) {
      var t = e;
      e = this.$(t);
    }
    return e.remove();
  }
};
function fg(e, t, n, r) {
  var a = 4, i = 1e-3, o = 1e-7, u = 10, l = 11, s = 1 / (l - 1), c = typeof Float32Array < "u";
  if (arguments.length !== 4)
    return false;
  for (var d = 0; d < 4; ++d)
    if (typeof arguments[d] != "number" || isNaN(arguments[d]) || !isFinite(arguments[d]))
      return false;
  e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
  var h = c ? new Float32Array(l) : new Array(l);
  function f(B, k) {
    return 1 - 3 * k + 3 * B;
  }
  function p(B, k) {
    return 3 * k - 6 * B;
  }
  function g(B) {
    return 3 * B;
  }
  function m(B, k, C) {
    return ((f(k, C) * B + p(k, C)) * B + g(k)) * B;
  }
  function v(B, k, C) {
    return 3 * f(k, C) * B * B + 2 * p(k, C) * B + g(k);
  }
  function y(B, k) {
    for (var C = 0; C < a; ++C) {
      var M = v(k, e, n);
      if (M === 0)
        return k;
      var D = m(k, e, n) - B;
      k -= D / M;
    }
    return k;
  }
  function b() {
    for (var B = 0; B < l; ++B)
      h[B] = m(B * s, e, n);
  }
  function w(B, k, C) {
    var M, D, N = 0;
    do
      D = k + (C - k) / 2, M = m(D, e, n) - B, M > 0 ? C = D : k = D;
    while (Math.abs(M) > o && ++N < u);
    return D;
  }
  function T(B) {
    for (var k = 0, C = 1, M = l - 1; C !== M && h[C] <= B; ++C)
      k += s;
    --C;
    var D = (B - h[C]) / (h[C + 1] - h[C]), N = k + D * s, A = v(N, e, n);
    return A >= i ? y(B, N) : A === 0 ? N : w(B, k, k + s);
  }
  var S = false;
  function x() {
    S = true, (e !== t || n !== r) && b();
  }
  var _ = function(B) {
    return S || x(), e === t && n === r ? B : B === 0 ? 0 : B === 1 ? 1 : m(T(B), t, r);
  };
  _.getControlPoints = function() {
    return [{
      x: e,
      y: t
    }, {
      x: n,
      y: r
    }];
  };
  var P = "generateBezier(" + [e, t, n, r] + ")";
  return _.toString = function() {
    return P;
  }, _;
}
var pg = /* @__PURE__ */ function() {
  function e(r) {
    return -r.tension * r.x - r.friction * r.v;
  }
  function t(r, a, i) {
    var o = {
      x: r.x + i.dx * a,
      v: r.v + i.dv * a,
      tension: r.tension,
      friction: r.friction
    };
    return {
      dx: o.v,
      dv: e(o)
    };
  }
  function n(r, a) {
    var i = {
      dx: r.v,
      dv: e(r)
    }, o = t(r, a * 0.5, i), u = t(r, a * 0.5, o), l = t(r, a, u), s = 1 / 6 * (i.dx + 2 * (o.dx + u.dx) + l.dx), c = 1 / 6 * (i.dv + 2 * (o.dv + u.dv) + l.dv);
    return r.x = r.x + s * a, r.v = r.v + c * a, r;
  }
  return function r(a, i, o) {
    var u = {
      x: -1,
      v: 0,
      tension: null,
      friction: null
    }, l = [0], s = 0, c = 1 / 1e4, d = 16 / 1e3, h, f, p;
    for (a = parseFloat(a) || 500, i = parseFloat(i) || 20, o = o || null, u.tension = a, u.friction = i, h = o !== null, h ? (s = r(a, i), f = s / o * d) : f = d; p = n(p || u, f), l.push(1 + p.x), s += 16, Math.abs(p.x) > c && Math.abs(p.v) > c; )
      ;
    return h ? function(g) {
      return l[g * (l.length - 1) | 0];
    } : s;
  };
}();
var ze = function(e, t, n, r) {
  var a = fg(e, t, n, r);
  return function(i, o, u) {
    return i + (o - i) * a(u);
  };
};
var ca = {
  linear: function(e, t, n) {
    return e + (t - e) * n;
  },
  // default easings
  ease: ze(0.25, 0.1, 0.25, 1),
  "ease-in": ze(0.42, 0, 1, 1),
  "ease-out": ze(0, 0, 0.58, 1),
  "ease-in-out": ze(0.42, 0, 0.58, 1),
  // sine
  "ease-in-sine": ze(0.47, 0, 0.745, 0.715),
  "ease-out-sine": ze(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": ze(0.445, 0.05, 0.55, 0.95),
  // quad
  "ease-in-quad": ze(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": ze(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": ze(0.455, 0.03, 0.515, 0.955),
  // cubic
  "ease-in-cubic": ze(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": ze(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": ze(0.645, 0.045, 0.355, 1),
  // quart
  "ease-in-quart": ze(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": ze(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": ze(0.77, 0, 0.175, 1),
  // quint
  "ease-in-quint": ze(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": ze(0.23, 1, 0.32, 1),
  "ease-in-out-quint": ze(0.86, 0, 0.07, 1),
  // expo
  "ease-in-expo": ze(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": ze(0.19, 1, 0.22, 1),
  "ease-in-out-expo": ze(1, 0, 0, 1),
  // circ
  "ease-in-circ": ze(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": ze(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": ze(0.785, 0.135, 0.15, 0.86),
  // user param easings...
  spring: function(e, t, n) {
    if (n === 0)
      return ca.linear;
    var r = pg(e, t, n);
    return function(a, i, o) {
      return a + (i - a) * r(o);
    };
  },
  "cubic-bezier": ze
};
function bu(e, t, n, r, a) {
  if (r === 1 || t === n)
    return n;
  var i = a(t, n, r);
  return e == null || ((e.roundValue || e.color) && (i = Math.round(i)), e.min !== void 0 && (i = Math.max(i, e.min)), e.max !== void 0 && (i = Math.min(i, e.max))), i;
}
function xu(e, t) {
  return e.pfValue != null || e.value != null ? e.pfValue != null && (t == null || t.type.units !== "%") ? e.pfValue : e.value : e;
}
function Nn(e, t, n, r, a) {
  var i = a != null ? a.type : null;
  n < 0 ? n = 0 : n > 1 && (n = 1);
  var o = xu(e, a), u = xu(t, a);
  if (ee(o) && ee(u))
    return bu(i, o, u, n, r);
  if (Le(o) && Le(u)) {
    for (var l = [], s = 0; s < u.length; s++) {
      var c = o[s], d = u[s];
      if (c != null && d != null) {
        var h = bu(i, c, d, n, r);
        l.push(h);
      } else
        l.push(d);
    }
    return l;
  }
}
function vg(e, t, n, r) {
  var a = !r, i = e._private, o = t._private, u = o.easing, l = o.startTime, s = r ? e : e.cy(), c = s.style();
  if (!o.easingImpl)
    if (u == null)
      o.easingImpl = ca.linear;
    else {
      var d;
      if (fe(u)) {
        var h = c.parse("transition-timing-function", u);
        d = h.value;
      } else
        d = u;
      var f, p;
      fe(d) ? (f = d, p = []) : (f = d[1], p = d.slice(2).map(function(I) {
        return +I;
      })), p.length > 0 ? (f === "spring" && p.push(o.duration), o.easingImpl = ca[f].apply(null, p)) : o.easingImpl = ca[f];
    }
  var g = o.easingImpl, m;
  if (o.duration === 0 ? m = 1 : m = (n - l) / o.duration, o.applying && (m = o.progress), m < 0 ? m = 0 : m > 1 && (m = 1), o.delay == null) {
    var v = o.startPosition, y = o.position;
    if (y && a && !e.locked()) {
      var b = {};
      dr(v.x, y.x) && (b.x = Nn(v.x, y.x, m, g)), dr(v.y, y.y) && (b.y = Nn(v.y, y.y, m, g)), e.position(b);
    }
    var w = o.startPan, T = o.pan, S = i.pan, x = T != null && r;
    x && (dr(w.x, T.x) && (S.x = Nn(w.x, T.x, m, g)), dr(w.y, T.y) && (S.y = Nn(w.y, T.y, m, g)), e.emit("pan"));
    var _ = o.startZoom, P = o.zoom, B = P != null && r;
    B && (dr(_, P) && (i.zoom = Cr(i.minZoom, Nn(_, P, m, g), i.maxZoom)), e.emit("zoom")), (x || B) && e.emit("viewport");
    var k = o.style;
    if (k && k.length > 0 && a) {
      for (var C = 0; C < k.length; C++) {
        var M = k[C], D = M.name, N = M, A = o.startStyle[D], L = c.properties[A.name], R = Nn(A, N, m, g, L);
        c.overrideBypass(e, D, R);
      }
      e.emit("style");
    }
  }
  return o.progress = m, m;
}
function dr(e, t) {
  return e == null || t == null ? false : ee(e) && ee(t) ? true : !!(e && t);
}
function gg(e, t, n, r) {
  var a = t._private;
  a.started = true, a.startTime = n - a.progress * a.duration;
}
function wu(e, t) {
  var n = t._private.aniEles, r = [];
  function a(c, d) {
    var h = c._private, f = h.animation.current, p = h.animation.queue, g = false;
    if (f.length === 0) {
      var m = p.shift();
      m && f.push(m);
    }
    for (var v = function(T) {
      for (var S = T.length - 1; S >= 0; S--) {
        var x = T[S];
        x();
      }
      T.splice(0, T.length);
    }, y = f.length - 1; y >= 0; y--) {
      var b = f[y], w = b._private;
      if (w.stopped) {
        f.splice(y, 1), w.hooked = false, w.playing = false, w.started = false, v(w.frames);
        continue;
      }
      !w.playing && !w.applying || (w.playing && w.applying && (w.applying = false), w.started || gg(c, b, e), vg(c, b, e, d), w.applying && (w.applying = false), v(w.frames), w.step != null && w.step(e), b.completed() && (f.splice(y, 1), w.hooked = false, w.playing = false, w.started = false, v(w.completes)), g = true);
    }
    return !d && f.length === 0 && p.length === 0 && r.push(c), g;
  }
  for (var i = false, o = 0; o < n.length; o++) {
    var u = n[o], l = a(u);
    i = i || l;
  }
  var s = a(t, true);
  (i || s) && (n.length > 0 ? t.notify("draw", n) : t.notify("draw")), n.unmerge(r), t.emit("step");
}
var yg = {
  // pull in animation functions
  animate: Me.animate(),
  animation: Me.animation(),
  animated: Me.animated(),
  clearQueue: Me.clearQueue(),
  delay: Me.delay(),
  delayAnimation: Me.delayAnimation(),
  stop: Me.stop(),
  addToAnimationPool: function(e) {
    var t = this;
    t.styleEnabled() && t._private.aniEles.merge(e);
  },
  stopAnimationLoop: function() {
    this._private.animationsRunning = false;
  },
  startAnimationLoop: function() {
    var e = this;
    if (e._private.animationsRunning = true, !e.styleEnabled())
      return;
    function t() {
      e._private.animationsRunning && ma(function(r) {
        wu(r, e), t();
      });
    }
    var n = e.renderer();
    n && n.beforeRender ? n.beforeRender(function(r, a) {
      wu(a, e);
    }, n.beforeRenderPriorities.animations) : t();
  }
};
var mg = {
  qualifierCompare: function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  },
  eventMatches: function(e, t, n) {
    var r = t.qualifier;
    return r != null ? e !== n.target && Ar(n.target) && r.matches(n.target) : true;
  },
  addEventFields: function(e, t) {
    t.cy = e, t.target = e;
  },
  callbackContext: function(e, t, n) {
    return t.qualifier != null ? n.target : e;
  }
};
var na = function(e) {
  return fe(e) ? new un(e) : e;
};
var $c = {
  createEmitter: function() {
    var e = this._private;
    return e.emitter || (e.emitter = new Fa(mg, this)), this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, t, n) {
    return this.emitter().on(e, na(t), n), this;
  },
  removeListener: function(e, t, n) {
    return this.emitter().removeListener(e, na(t), n), this;
  },
  removeAllListeners: function() {
    return this.emitter().removeAllListeners(), this;
  },
  one: function(e, t, n) {
    return this.emitter().one(e, na(t), n), this;
  },
  once: function(e, t, n) {
    return this.emitter().one(e, na(t), n), this;
  },
  emit: function(e, t) {
    return this.emitter().emit(e, t), this;
  },
  emitAndNotify: function(e, t) {
    return this.emit(e), this.notify(e, t), this;
  }
};
Me.eventAliasesOn($c);
var Lo = {
  png: function(e) {
    var t = this._private.renderer;
    return e = e || {}, t.png(e);
  },
  jpg: function(e) {
    var t = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", t.jpg(e);
  }
};
Lo.jpeg = Lo.jpg;
var da = {
  layout: function(e) {
    var t = this;
    if (e == null) {
      Ye("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      Ye("A `name` must be specified to make a layout");
      return;
    }
    var n = e.name, r = t.extension("layout", n);
    if (r == null) {
      Ye("No such layout `" + n + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var a;
    fe(e.eles) ? a = t.$(e.eles) : a = e.eles != null ? e.eles : t.$();
    var i = new r(ve({}, e, {
      cy: t,
      eles: a
    }));
    return i;
  }
};
da.createLayout = da.makeLayout = da.layout;
var bg = {
  notify: function(e, t) {
    var n = this._private;
    if (this.batching()) {
      n.batchNotifications = n.batchNotifications || {};
      var r = n.batchNotifications[e] = n.batchNotifications[e] || this.collection();
      t != null && r.merge(t);
      return;
    }
    if (n.notificationsEnabled) {
      var a = this.renderer();
      this.destroyed() || !a || a.notify(e, t);
    }
  },
  notifications: function(e) {
    var t = this._private;
    return e === void 0 ? t.notificationsEnabled : (t.notificationsEnabled = !!e, this);
  },
  noNotifications: function(e) {
    this.notifications(false), e(), this.notifications(true);
  },
  batching: function() {
    return this._private.batchCount > 0;
  },
  startBatch: function() {
    var e = this._private;
    return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
  },
  endBatch: function() {
    var e = this._private;
    if (e.batchCount === 0)
      return this;
    if (e.batchCount--, e.batchCount === 0) {
      e.batchStyleEles.updateStyle();
      var t = this.renderer();
      Object.keys(e.batchNotifications).forEach(function(n) {
        var r = e.batchNotifications[n];
        r.empty() ? t.notify(n) : t.notify(n, r);
      });
    }
    return this;
  },
  batch: function(e) {
    return this.startBatch(), e(), this.endBatch(), this;
  },
  // for backwards compatibility
  batchData: function(e) {
    var t = this;
    return this.batch(function() {
      for (var n = Object.keys(e), r = 0; r < n.length; r++) {
        var a = n[r], i = e[a], o = t.getElementById(a);
        o.data(i);
      }
    });
  }
};
var xg = ct({
  hideEdgesOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: false,
  showFps: false,
  // webgl options
  webgl: false,
  webglDebug: false,
  webglDebugShowAtlases: false,
  // defaults good for mobile
  webglTexSize: 2048,
  webglTexRows: 36,
  webglTexRowsNodes: 18,
  webglBatchSize: 2048,
  webglTexPerBatch: 14,
  webglBgColor: [255, 255, 255]
});
var zo = {
  renderTo: function(e, t, n, r) {
    var a = this._private.renderer;
    return a.renderTo(e, t, n, r), this;
  },
  renderer: function() {
    return this._private.renderer;
  },
  forceRender: function() {
    return this.notify("draw"), this;
  },
  resize: function() {
    return this.invalidateSize(), this.emitAndNotify("resize"), this;
  },
  initRenderer: function(e) {
    var t = this, n = t.extension("renderer", e.name);
    if (n == null) {
      Ye("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Ae("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var r = xg(e);
    r.cy = t, t._private.renderer = new n(r), this.notify("init");
  },
  destroyRenderer: function() {
    var e = this;
    e.notify("destroy");
    var t = e.container();
    if (t)
      for (t._cyreg = null; t.childNodes.length > 0; )
        t.removeChild(t.childNodes[0]);
    e._private.renderer = null, e.mutableElements().forEach(function(n) {
      var r = n._private;
      r.rscratch = {}, r.rstyle = {}, r.animation.current = [], r.animation.queue = [];
    });
  },
  onRender: function(e) {
    return this.on("render", e);
  },
  offRender: function(e) {
    return this.off("render", e);
  }
};
zo.invalidateDimensions = zo.resize;
var ha = {
  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function(e, t) {
    return fe(e) ? this.$(e) : St(e) ? e.collection() : Le(e) ? (t || (t = {}), new ut(this, e, t.unique, t.removed)) : new ut(this);
  },
  nodes: function(e) {
    var t = this.$(function(n) {
      return n.isNode();
    });
    return e ? t.filter(e) : t;
  },
  edges: function(e) {
    var t = this.$(function(n) {
      return n.isEdge();
    });
    return e ? t.filter(e) : t;
  },
  // search the graph like jQuery
  $: function(e) {
    var t = this._private.elements;
    return e ? t.filter(e) : t.spawnSelf();
  },
  mutableElements: function() {
    return this._private.elements;
  }
};
ha.elements = ha.filter = ha.$;
var ot = {};
var mr = "t";
var wg = "f";
ot.apply = function(e) {
  for (var t = this, n = t._private, r = n.cy, a = r.collection(), i = 0; i < e.length; i++) {
    var o = e[i], u = t.getContextMeta(o);
    if (!u.empty) {
      var l = t.getContextStyle(u), s = t.applyContextStyle(u, l, o);
      o._private.appliedInitStyle ? t.updateTransitions(o, s.diffProps) : o._private.appliedInitStyle = true;
      var c = t.updateStyleHints(o);
      c && a.push(o);
    }
  }
  return a;
};
ot.getPropertiesDiff = function(e, t) {
  var n = this, r = n._private.propDiffs = n._private.propDiffs || {}, a = e + "-" + t, i = r[a];
  if (i)
    return i;
  for (var o = [], u = {}, l = 0; l < n.length; l++) {
    var s = n[l], c = e[l] === mr, d = t[l] === mr, h = c !== d, f = s.mappedProperties.length > 0;
    if (h || d && f) {
      var p = void 0;
      h && f || h ? p = s.properties : f && (p = s.mappedProperties);
      for (var g = 0; g < p.length; g++) {
        for (var m = p[g], v = m.name, y = false, b = l + 1; b < n.length; b++) {
          var w = n[b], T = t[b] === mr;
          if (T && (y = w.properties[m.name] != null, y))
            break;
        }
        !u[v] && !y && (u[v] = true, o.push(v));
      }
    }
  }
  return r[a] = o, o;
};
ot.getContextMeta = function(e) {
  for (var t = this, n = "", r, a = e._private.styleCxtKey || "", i = 0; i < t.length; i++) {
    var o = t[i], u = o.selector && o.selector.matches(e);
    u ? n += mr : n += wg;
  }
  return r = t.getPropertiesDiff(a, n), e._private.styleCxtKey = n, {
    key: n,
    diffPropNames: r,
    empty: r.length === 0
  };
};
ot.getContextStyle = function(e) {
  var t = e.key, n = this, r = this._private.contextStyles = this._private.contextStyles || {};
  if (r[t])
    return r[t];
  for (var a = {
    _private: {
      key: t
    }
  }, i = 0; i < n.length; i++) {
    var o = n[i], u = t[i] === mr;
    if (u)
      for (var l = 0; l < o.properties.length; l++) {
        var s = o.properties[l];
        a[s.name] = s;
      }
  }
  return r[t] = a, a;
};
ot.applyContextStyle = function(e, t, n) {
  for (var r = this, a = e.diffPropNames, i = {}, o = r.types, u = 0; u < a.length; u++) {
    var l = a[u], s = t[l], c = n.pstyle(l);
    if (!s)
      if (c)
        c.bypass ? s = {
          name: l,
          deleteBypassed: true
        } : s = {
          name: l,
          delete: true
        };
      else continue;
    if (c !== s) {
      if (s.mapped === o.fn && c != null && c.mapping != null && c.mapping.value === s.value) {
        var d = c.mapping, h = d.fnValue = s.value(n);
        if (h === d.prevFnValue)
          continue;
      }
      var f = i[l] = {
        prev: c
      };
      r.applyParsedProperty(n, s), f.next = n.pstyle(l), f.next && f.next.bypass && (f.next = f.next.bypassed);
    }
  }
  return {
    diffProps: i
  };
};
ot.updateStyleHints = function(e) {
  var t = e._private, n = this, r = n.propertyGroupNames, a = n.propertyGroupKeys, i = function(j, H, ne) {
    return n.getPropertiesHash(j, H, ne);
  }, o = t.styleKey;
  if (e.removed())
    return false;
  var u = t.group === "nodes", l = e._private.style;
  r = Object.keys(l);
  for (var s = 0; s < a.length; s++) {
    var c = a[s];
    t.styleKeys[c] = [En, jn];
  }
  for (var d = function(j, H) {
    return t.styleKeys[H][0] = wr(j, t.styleKeys[H][0]);
  }, h = function(j, H) {
    return t.styleKeys[H][1] = Er(j, t.styleKeys[H][1]);
  }, f = function(j, H) {
    d(j, H), h(j, H);
  }, p = function(j, H) {
    for (var ne = 0; ne < j.length; ne++) {
      var oe = j.charCodeAt(ne);
      d(oe, H), h(oe, H);
    }
  }, g = 2e9, m = function(j) {
    return -128 < j && j < 128 && Math.floor(j) !== j ? g - (j * 1024 | 0) : j;
  }, v = 0; v < r.length; v++) {
    var y = r[v], b = l[y];
    if (b != null) {
      var w = this.properties[y], T = w.type, S = w.groupKey, x = void 0;
      w.hashOverride != null ? x = w.hashOverride(e, b) : b.pfValue != null && (x = b.pfValue);
      var _ = w.enums == null ? b.value : null, P = x != null, B = _ != null, k = P || B, C = b.units;
      if (T.number && k && !T.multiple) {
        var M = P ? x : _;
        f(m(M), S), !P && C != null && p(C, S);
      } else
        p(b.strValue, S);
    }
  }
  for (var D = [En, jn], N = 0; N < a.length; N++) {
    var A = a[N], L = t.styleKeys[A];
    D[0] = wr(L[0], D[0]), D[1] = Er(L[1], D[1]);
  }
  t.styleKey = Lh(D[0], D[1]);
  var R = t.styleKeys;
  t.labelDimsKey = $t(R.labelDimensions);
  var I = i(e, ["label"], R.labelDimensions);
  if (t.labelKey = $t(I), t.labelStyleKey = $t(Hr(R.commonLabel, I)), !u) {
    var X = i(e, ["source-label"], R.labelDimensions);
    t.sourceLabelKey = $t(X), t.sourceLabelStyleKey = $t(Hr(R.commonLabel, X));
    var V = i(e, ["target-label"], R.labelDimensions);
    t.targetLabelKey = $t(V), t.targetLabelStyleKey = $t(Hr(R.commonLabel, V));
  }
  if (u) {
    var Y = t.styleKeys, W = Y.nodeBody, Q = Y.nodeBorder, J = Y.nodeOutline, Z = Y.backgroundImage, $ = Y.compound, te = Y.pie, z = Y.stripe, O = [W, Q, J, Z, $, te, z].filter(function(j) {
      return j != null;
    }).reduce(Hr, [En, jn]);
    t.nodeKey = $t(O), t.hasPie = te != null && te[0] !== En && te[1] !== jn, t.hasStripe = z != null && z[0] !== En && z[1] !== jn;
  }
  return o !== t.styleKey;
};
ot.clearStyleHints = function(e) {
  var t = e._private;
  t.styleCxtKey = "", t.styleKeys = {}, t.styleKey = null, t.labelKey = null, t.labelStyleKey = null, t.sourceLabelKey = null, t.sourceLabelStyleKey = null, t.targetLabelKey = null, t.targetLabelStyleKey = null, t.nodeKey = null, t.hasPie = null, t.hasStripe = null;
};
ot.applyParsedProperty = function(e, t) {
  var n = this, r = t, a = e._private.style, i, o = n.types, u = n.properties[r.name].type, l = r.bypass, s = a[r.name], c = s && s.bypass, d = e._private, h = "mapping", f = function(Y) {
    return Y == null ? null : Y.pfValue != null ? Y.pfValue : Y.value;
  }, p = function() {
    var Y = f(s), W = f(r);
    n.checkTriggers(e, r.name, Y, W);
  };
  if (t.name === "curve-style" && e.isEdge() && // loops must be bundled beziers
  (t.value !== "bezier" && e.isLoop() || // edges connected to compound nodes can not be haystacks
  t.value === "haystack" && (e.source().isParent() || e.target().isParent())) && (r = t = this.parse(t.name, "bezier", l)), r.delete)
    return a[r.name] = void 0, p(), true;
  if (r.deleteBypassed)
    return s ? s.bypass ? (s.bypassed = void 0, p(), true) : false : (p(), true);
  if (r.deleteBypass)
    return s ? s.bypass ? (a[r.name] = s.bypassed, p(), true) : false : (p(), true);
  var g = function() {
    Ae("Do not assign mappings to elements without corresponding data (i.e. ele `" + e.id() + "` has no mapping for property `" + r.name + "` with data field `" + r.field + "`); try a `[" + r.field + "]` selector to limit scope to elements with `" + r.field + "` defined");
  };
  switch (r.mapped) {
    case o.mapData: {
      for (var m = r.field.split("."), v = d.data, y = 0; y < m.length && v; y++) {
        var b = m[y];
        v = v[b];
      }
      if (v == null)
        return g(), false;
      var w;
      if (ee(v)) {
        var T = r.fieldMax - r.fieldMin;
        T === 0 ? w = 0 : w = (v - r.fieldMin) / T;
      } else
        return Ae("Do not use continuous mappers without specifying numeric data (i.e. `" + r.field + ": " + v + "` for `" + e.id() + "` is non-numeric)"), false;
      if (w < 0 ? w = 0 : w > 1 && (w = 1), u.color) {
        var S = r.valueMin[0], x = r.valueMax[0], _ = r.valueMin[1], P = r.valueMax[1], B = r.valueMin[2], k = r.valueMax[2], C = r.valueMin[3] == null ? 1 : r.valueMin[3], M = r.valueMax[3] == null ? 1 : r.valueMax[3], D = [Math.round(S + (x - S) * w), Math.round(_ + (P - _) * w), Math.round(B + (k - B) * w), Math.round(C + (M - C) * w)];
        i = {
          // colours are simple, so just create the flat property instead of expensive string parsing
          bypass: r.bypass,
          // we're a bypass if the mapping property is a bypass
          name: r.name,
          value: D,
          strValue: "rgb(" + D[0] + ", " + D[1] + ", " + D[2] + ")"
        };
      } else if (u.number) {
        var N = r.valueMin + (r.valueMax - r.valueMin) * w;
        i = this.parse(r.name, N, r.bypass, h);
      } else
        return false;
      if (!i)
        return g(), false;
      i.mapping = r, r = i;
      break;
    }
    case o.data: {
      for (var A = r.field.split("."), L = d.data, R = 0; R < A.length && L; R++) {
        var I = A[R];
        L = L[I];
      }
      if (L != null && (i = this.parse(r.name, L, r.bypass, h)), !i)
        return g(), false;
      i.mapping = r, r = i;
      break;
    }
    case o.fn: {
      var X = r.value, V = r.fnValue != null ? r.fnValue : X(e);
      if (r.prevFnValue = V, V == null)
        return Ae("Custom function mappers may not return null (i.e. `" + r.name + "` for ele `" + e.id() + "` is null)"), false;
      if (i = this.parse(r.name, V, r.bypass, h), !i)
        return Ae("Custom function mappers may not return invalid values for the property type (i.e. `" + r.name + "` for ele `" + e.id() + "` is invalid)"), false;
      i.mapping = Ft(r), r = i;
      break;
    }
    case void 0:
      break;
    default:
      return false;
  }
  return l ? (c ? r.bypassed = s.bypassed : r.bypassed = s, a[r.name] = r) : c ? s.bypassed = r : a[r.name] = r, p(), true;
};
ot.cleanElements = function(e, t) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    if (this.clearStyleHints(r), r.dirtyCompoundBoundsCache(), r.dirtyBoundingBoxCache(), !t)
      r._private.style = {};
    else
      for (var a = r._private.style, i = Object.keys(a), o = 0; o < i.length; o++) {
        var u = i[o], l = a[u];
        l != null && (l.bypass ? l.bypassed = null : a[u] = null);
      }
  }
};
ot.update = function() {
  var e = this._private.cy, t = e.mutableElements();
  t.updateStyle();
};
ot.updateTransitions = function(e, t) {
  var n = this, r = e._private, a = e.pstyle("transition-property").value, i = e.pstyle("transition-duration").pfValue, o = e.pstyle("transition-delay").pfValue;
  if (a.length > 0 && i > 0) {
    for (var u = {}, l = false, s = 0; s < a.length; s++) {
      var c = a[s], d = e.pstyle(c), h = t[c];
      if (h) {
        var f = h.prev, p = f, g = h.next != null ? h.next : d, m = false, v = void 0, y = 1e-6;
        p && (ee(p.pfValue) && ee(g.pfValue) ? (m = g.pfValue - p.pfValue, v = p.pfValue + y * m) : ee(p.value) && ee(g.value) ? (m = g.value - p.value, v = p.value + y * m) : Le(p.value) && Le(g.value) && (m = p.value[0] !== g.value[0] || p.value[1] !== g.value[1] || p.value[2] !== g.value[2], v = p.strValue), m && (u[c] = g.strValue, this.applyBypass(e, c, v), l = true));
      }
    }
    if (!l)
      return;
    r.transitioning = true, new tr(function(b) {
      o > 0 ? e.delayAnimation(o).play().promise().then(b) : b();
    }).then(function() {
      return e.animation({
        style: u,
        duration: i,
        easing: e.pstyle("transition-timing-function").value,
        queue: false
      }).play().promise();
    }).then(function() {
      n.removeBypasses(e, a), e.emitAndNotify("style"), r.transitioning = false;
    });
  } else r.transitioning && (this.removeBypasses(e, a), e.emitAndNotify("style"), r.transitioning = false);
};
ot.checkTrigger = function(e, t, n, r, a, i) {
  var o = this.properties[t], u = a(o);
  e.removed() || u != null && u(n, r, e) && i(o);
};
ot.checkZOrderTrigger = function(e, t, n, r) {
  var a = this;
  this.checkTrigger(e, t, n, r, function(i) {
    return i.triggersZOrder;
  }, function() {
    a._private.cy.notify("zorder", e);
  });
};
ot.checkBoundsTrigger = function(e, t, n, r) {
  this.checkTrigger(e, t, n, r, function(a) {
    return a.triggersBounds;
  }, function(a) {
    e.dirtyCompoundBoundsCache(), e.dirtyBoundingBoxCache();
  });
};
ot.checkConnectedEdgesBoundsTrigger = function(e, t, n, r) {
  this.checkTrigger(e, t, n, r, function(a) {
    return a.triggersBoundsOfConnectedEdges;
  }, function(a) {
    e.connectedEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
ot.checkParallelEdgesBoundsTrigger = function(e, t, n, r) {
  this.checkTrigger(e, t, n, r, function(a) {
    return a.triggersBoundsOfParallelEdges;
  }, function(a) {
    e.parallelEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
ot.checkTriggers = function(e, t, n, r) {
  e.dirtyStyleCache(), this.checkZOrderTrigger(e, t, n, r), this.checkBoundsTrigger(e, t, n, r), this.checkConnectedEdgesBoundsTrigger(e, t, n, r), this.checkParallelEdgesBoundsTrigger(e, t, n, r);
};
var Vr = {};
Vr.applyBypass = function(e, t, n, r) {
  var a = this, i = [], o = true;
  if (t === "*" || t === "**") {
    if (n !== void 0)
      for (var u = 0; u < a.properties.length; u++) {
        var l = a.properties[u], s = l.name, c = this.parse(s, n, true);
        c && i.push(c);
      }
  } else if (fe(t)) {
    var d = this.parse(t, n, true);
    d && i.push(d);
  } else if (_e(t)) {
    var h = t;
    r = n;
    for (var f = Object.keys(h), p = 0; p < f.length; p++) {
      var g = f[p], m = h[g];
      if (m === void 0 && (m = h[Da(g)]), m !== void 0) {
        var v = this.parse(g, m, true);
        v && i.push(v);
      }
    }
  } else
    return false;
  if (i.length === 0)
    return false;
  for (var y = false, b = 0; b < e.length; b++) {
    for (var w = e[b], T = {}, S = void 0, x = 0; x < i.length; x++) {
      var _ = i[x];
      if (r) {
        var P = w.pstyle(_.name);
        S = T[_.name] = {
          prev: P
        };
      }
      y = this.applyParsedProperty(w, Ft(_)) || y, r && (S.next = w.pstyle(_.name));
    }
    y && this.updateStyleHints(w), r && this.updateTransitions(w, T, o);
  }
  return y;
};
Vr.overrideBypass = function(e, t, n) {
  t = Ko(t);
  for (var r = 0; r < e.length; r++) {
    var a = e[r], i = a._private.style[t], o = this.properties[t].type, u = o.color, l = o.mutiple, s = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(a, t, n) : (i.value = n, i.pfValue != null && (i.pfValue = n), u ? i.strValue = "rgb(" + n.join(",") + ")" : l ? i.strValue = n.join(" ") : i.strValue = "" + n, this.updateStyleHints(a)), this.checkTriggers(a, t, s, n);
  }
};
Vr.removeAllBypasses = function(e, t) {
  return this.removeBypasses(e, this.propertyNames, t);
};
Vr.removeBypasses = function(e, t, n) {
  for (var r = true, a = 0; a < e.length; a++) {
    for (var i = e[a], o = {}, u = 0; u < t.length; u++) {
      var l = t[u], s = this.properties[l], c = i.pstyle(s.name);
      if (!(!c || !c.bypass)) {
        var d = "", h = this.parse(l, d, true), f = o[s.name] = {
          prev: c
        };
        this.applyParsedProperty(i, h), f.next = i.pstyle(s.name);
      }
    }
    this.updateStyleHints(i), n && this.updateTransitions(i, o, r);
  }
};
var cs = {};
cs.getEmSizeInPixels = function() {
  var e = this.containerCss("font-size");
  return e != null ? parseFloat(e) : 1;
};
cs.containerCss = function(e) {
  var t = this._private.cy, n = t.container(), r = t.window();
  if (r && n && r.getComputedStyle)
    return r.getComputedStyle(n).getPropertyValue(e);
};
var jt = {};
jt.getRenderedStyle = function(e, t) {
  return t ? this.getStylePropertyValue(e, t, true) : this.getRawStyle(e, true);
};
jt.getRawStyle = function(e, t) {
  var n = this;
  if (e = e[0], e) {
    for (var r = {}, a = 0; a < n.properties.length; a++) {
      var i = n.properties[a], o = n.getStylePropertyValue(e, i.name, t);
      o != null && (r[i.name] = o, r[Da(i.name)] = o);
    }
    return r;
  }
};
jt.getIndexedStyle = function(e, t, n, r) {
  var a = e.pstyle(t)[n][r];
  return a ?? e.cy().style().getDefaultProperty(t)[n][0];
};
jt.getStylePropertyValue = function(e, t, n) {
  var r = this;
  if (e = e[0], e) {
    var a = r.properties[t];
    a.alias && (a = a.pointsTo);
    var i = a.type, o = e.pstyle(a.name);
    if (o) {
      var u = o.value, l = o.units, s = o.strValue;
      if (n && i.number && u != null && ee(u)) {
        var c = e.cy().zoom(), d = function(g) {
          return g * c;
        }, h = function(g, m) {
          return d(g) + m;
        }, f = Le(u), p = f ? l.every(function(g) {
          return g != null;
        }) : l != null;
        return p ? f ? u.map(function(g, m) {
          return h(g, l[m]);
        }).join(" ") : h(u, l) : f ? u.map(function(g) {
          return fe(g) ? g : "" + d(g);
        }).join(" ") : "" + d(u);
      } else if (s != null)
        return s;
    }
    return null;
  }
};
jt.getAnimationStartStyle = function(e, t) {
  for (var n = {}, r = 0; r < t.length; r++) {
    var a = t[r], i = a.name, o = e.pstyle(i);
    o !== void 0 && (_e(o) ? o = this.parse(i, o.strValue) : o = this.parse(i, o)), o && (n[i] = o);
  }
  return n;
};
jt.getPropsList = function(e) {
  var t = this, n = [], r = e, a = t.properties;
  if (r)
    for (var i = Object.keys(r), o = 0; o < i.length; o++) {
      var u = i[o], l = r[u], s = a[u] || a[Ko(u)], c = this.parse(s.name, l);
      c && n.push(c);
    }
  return n;
};
jt.getNonDefaultPropertiesHash = function(e, t, n) {
  var r = n.slice(), a, i, o, u, l, s;
  for (l = 0; l < t.length; l++)
    if (a = t[l], i = e.pstyle(a, false), i != null)
      if (i.pfValue != null)
        r[0] = wr(u, r[0]), r[1] = Er(u, r[1]);
      else
        for (o = i.strValue, s = 0; s < o.length; s++)
          u = o.charCodeAt(s), r[0] = wr(u, r[0]), r[1] = Er(u, r[1]);
  return r;
};
jt.getPropertiesHash = jt.getNonDefaultPropertiesHash;
var Ya = {};
Ya.appendFromJson = function(e) {
  for (var t = this, n = 0; n < e.length; n++) {
    var r = e[n], a = r.selector, i = r.style || r.css, o = Object.keys(i);
    t.selector(a);
    for (var u = 0; u < o.length; u++) {
      var l = o[u], s = i[l];
      t.css(l, s);
    }
  }
  return t;
};
Ya.fromJson = function(e) {
  var t = this;
  return t.resetToDefault(), t.appendFromJson(e), t;
};
Ya.json = function() {
  for (var e = [], t = this.defaultLength; t < this.length; t++) {
    for (var n = this[t], r = n.selector, a = n.properties, i = {}, o = 0; o < a.length; o++) {
      var u = a[o];
      i[u.name] = u.strValue;
    }
    e.push({
      selector: r ? r.toString() : "core",
      style: i
    });
  }
  return e;
};
var ds = {};
ds.appendFromString = function(e) {
  var t = this, n = this, r = "" + e, a, i, o;
  r = r.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function u() {
    r.length > a.length ? r = r.substr(a.length) : r = "";
  }
  function l() {
    i.length > o.length ? i = i.substr(o.length) : i = "";
  }
  for (; ; ) {
    var s = r.match(/^\s*$/);
    if (s)
      break;
    var c = r.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!c) {
      Ae("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + r);
      break;
    }
    a = c[0];
    var d = c[1];
    if (d !== "core") {
      var h = new un(d);
      if (h.invalid) {
        Ae("Skipping parsing of block: Invalid selector found in string stylesheet: " + d), u();
        continue;
      }
    }
    var f = c[2], p = false;
    i = f;
    for (var g = []; ; ) {
      var m = i.match(/^\s*$/);
      if (m)
        break;
      var v = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!v) {
        Ae("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + f), p = true;
        break;
      }
      o = v[0];
      var y = v[1], b = v[2], w = t.properties[y];
      if (!w) {
        Ae("Skipping property: Invalid property name in: " + o), l();
        continue;
      }
      var T = n.parse(y, b);
      if (!T) {
        Ae("Skipping property: Invalid property definition in: " + o), l();
        continue;
      }
      g.push({
        name: y,
        val: b
      }), l();
    }
    if (p) {
      u();
      break;
    }
    n.selector(d);
    for (var S = 0; S < g.length; S++) {
      var x = g[S];
      n.css(x.name, x.val);
    }
    u();
  }
  return n;
};
ds.fromString = function(e) {
  var t = this;
  return t.resetToDefault(), t.appendFromString(e), t;
};
var Qe = {};
(function() {
  var e = et, t = ph, n = gh, r = yh, a = mh, i = function(O) {
    return "^" + O + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, o = function(O) {
    var j = e + "|\\w+|" + t + "|" + n + "|" + r + "|" + a;
    return "^" + O + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + e + ")\\s*\\,\\s*(" + e + ")\\s*,\\s*(" + j + ")\\s*\\,\\s*(" + j + ")\\)$";
  }, u = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  Qe.types = {
    time: {
      number: true,
      min: 0,
      units: "s|ms",
      implicitUnits: "ms"
    },
    percent: {
      number: true,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%"
    },
    percentages: {
      number: true,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%",
      multiple: true
    },
    zeroOneNumber: {
      number: true,
      min: 0,
      max: 1,
      unitless: true
    },
    zeroOneNumbers: {
      number: true,
      min: 0,
      max: 1,
      unitless: true,
      multiple: true
    },
    nOneOneNumber: {
      number: true,
      min: -1,
      max: 1,
      unitless: true
    },
    nonNegativeInt: {
      number: true,
      min: 0,
      integer: true,
      unitless: true
    },
    nonNegativeNumber: {
      number: true,
      min: 0,
      unitless: true
    },
    position: {
      enums: ["parent", "origin"]
    },
    nodeSize: {
      number: true,
      min: 0,
      enums: ["label"]
    },
    number: {
      number: true,
      unitless: true
    },
    numbers: {
      number: true,
      unitless: true,
      multiple: true
    },
    positiveNumber: {
      number: true,
      unitless: true,
      min: 0,
      strictMin: true
    },
    size: {
      number: true,
      min: 0
    },
    bidirectionalSize: {
      number: true
    },
    // allows negative
    bidirectionalSizeMaybePercent: {
      number: true,
      allowPercent: true
    },
    // allows negative
    bidirectionalSizes: {
      number: true,
      multiple: true
    },
    // allows negative
    sizeMaybePercent: {
      number: true,
      min: 0,
      allowPercent: true
    },
    axisDirection: {
      enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
    },
    axisDirectionExplicit: {
      enums: ["leftward", "rightward", "upward", "downward"]
    },
    axisDirectionPrimary: {
      enums: ["horizontal", "vertical"]
    },
    paddingRelativeTo: {
      enums: ["width", "height", "average", "min", "max"]
    },
    bgWH: {
      number: true,
      min: 0,
      allowPercent: true,
      enums: ["auto"],
      multiple: true
    },
    bgPos: {
      number: true,
      allowPercent: true,
      multiple: true
    },
    bgRelativeTo: {
      enums: ["inner", "include-padding"],
      multiple: true
    },
    bgRepeat: {
      enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      multiple: true
    },
    bgFit: {
      enums: ["none", "contain", "cover"],
      multiple: true
    },
    bgCrossOrigin: {
      enums: ["anonymous", "use-credentials", "null"],
      multiple: true
    },
    bgClip: {
      enums: ["none", "node"],
      multiple: true
    },
    bgContainment: {
      enums: ["inside", "over"],
      multiple: true
    },
    color: {
      color: true
    },
    colors: {
      color: true,
      multiple: true
    },
    fill: {
      enums: ["solid", "linear-gradient", "radial-gradient"]
    },
    bool: {
      enums: ["yes", "no"]
    },
    bools: {
      enums: ["yes", "no"],
      multiple: true
    },
    lineStyle: {
      enums: ["solid", "dotted", "dashed"]
    },
    lineCap: {
      enums: ["butt", "round", "square"]
    },
    linePosition: {
      enums: ["center", "inside", "outside"]
    },
    lineJoin: {
      enums: ["round", "bevel", "miter"]
    },
    borderStyle: {
      enums: ["solid", "dotted", "dashed", "double"]
    },
    curveStyle: {
      enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi", "round-segments", "round-taxi"]
    },
    radiusType: {
      enums: ["arc-radius", "influence-radius"],
      multiple: true
    },
    fontFamily: {
      regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
    },
    fontStyle: {
      enums: ["italic", "normal", "oblique"]
    },
    fontWeight: {
      enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textDecoration: {
      enums: ["none", "underline", "overline", "line-through"]
    },
    textTransform: {
      enums: ["none", "uppercase", "lowercase"]
    },
    textWrap: {
      enums: ["none", "wrap", "ellipsis"]
    },
    textOverflowWrap: {
      enums: ["whitespace", "anywhere"]
    },
    textBackgroundShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle"]
    },
    nodeShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
    },
    overlayShape: {
      enums: ["roundrectangle", "round-rectangle", "ellipse"]
    },
    cornerRadius: {
      number: true,
      min: 0,
      units: "px|em",
      implicitUnits: "px",
      enums: ["auto"]
    },
    compoundIncludeLabels: {
      enums: ["include", "exclude"]
    },
    arrowShape: {
      enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
    },
    arrowFill: {
      enums: ["filled", "hollow"]
    },
    arrowWidth: {
      number: true,
      units: "%|px|em",
      implicitUnits: "px",
      enums: ["match-line"]
    },
    display: {
      enums: ["element", "none"]
    },
    visibility: {
      enums: ["hidden", "visible"]
    },
    zCompoundDepth: {
      enums: ["bottom", "orphan", "auto", "top"]
    },
    zIndexCompare: {
      enums: ["auto", "manual"]
    },
    valign: {
      enums: ["top", "center", "bottom"]
    },
    halign: {
      enums: ["left", "center", "right"]
    },
    justification: {
      enums: ["left", "center", "right", "auto"]
    },
    text: {
      string: true
    },
    data: {
      mapping: true,
      regex: i("data")
    },
    layoutData: {
      mapping: true,
      regex: i("layoutData")
    },
    scratch: {
      mapping: true,
      regex: i("scratch")
    },
    mapData: {
      mapping: true,
      regex: o("mapData")
    },
    mapLayoutData: {
      mapping: true,
      regex: o("mapLayoutData")
    },
    mapScratch: {
      mapping: true,
      regex: o("mapScratch")
    },
    fn: {
      mapping: true,
      fn: true
    },
    url: {
      regexes: u,
      singleRegexMatchValue: true
    },
    urls: {
      regexes: u,
      singleRegexMatchValue: true,
      multiple: true
    },
    propList: {
      propList: true
    },
    angle: {
      number: true,
      units: "deg|rad",
      implicitUnits: "rad"
    },
    textRotation: {
      number: true,
      units: "deg|rad",
      implicitUnits: "rad",
      enums: ["none", "autorotate"]
    },
    polygonPointList: {
      number: true,
      multiple: true,
      evenMultiple: true,
      min: -1,
      max: 1,
      unitless: true
    },
    edgeDistances: {
      enums: ["intersection", "node-position", "endpoints"]
    },
    edgeEndpoint: {
      number: true,
      multiple: true,
      units: "%|px|em|deg|rad",
      implicitUnits: "px",
      enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
      singleEnum: true,
      validate: function(O, j) {
        switch (O.length) {
          case 2:
            return j[0] !== "deg" && j[0] !== "rad" && j[1] !== "deg" && j[1] !== "rad";
          case 1:
            return fe(O[0]) || j[0] === "deg" || j[0] === "rad";
          default:
            return false;
        }
      }
    },
    easing: {
      regexes: ["^(spring)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$"],
      enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
    },
    gradientDirection: {
      enums: [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
        "to-right-bottom",
        "to-left-bottom",
        "to-right-top",
        "to-left-top"
        // different order
      ]
    },
    boundsExpansion: {
      number: true,
      multiple: true,
      min: 0,
      validate: function(O) {
        var j = O.length;
        return j === 1 || j === 2 || j === 4;
      }
    }
  };
  var l = {
    zeroNonZero: function(O, j) {
      return (O == null || j == null) && O !== j || O == 0 && j != 0 ? true : O != 0 && j == 0;
    },
    any: function(O, j) {
      return O != j;
    },
    emptyNonEmpty: function(O, j) {
      var H = on(O), ne = on(j);
      return H && !ne || !H && ne;
    }
  }, s = Qe.types, c = [{
    name: "label",
    type: s.text,
    triggersBounds: l.any,
    triggersZOrder: l.emptyNonEmpty
  }, {
    name: "text-rotation",
    type: s.textRotation,
    triggersBounds: l.any
  }, {
    name: "text-margin-x",
    type: s.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "text-margin-y",
    type: s.bidirectionalSize,
    triggersBounds: l.any
  }], d = [{
    name: "source-label",
    type: s.text,
    triggersBounds: l.any
  }, {
    name: "source-text-rotation",
    type: s.textRotation,
    triggersBounds: l.any
  }, {
    name: "source-text-margin-x",
    type: s.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "source-text-margin-y",
    type: s.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "source-text-offset",
    type: s.size,
    triggersBounds: l.any
  }], h = [{
    name: "target-label",
    type: s.text,
    triggersBounds: l.any
  }, {
    name: "target-text-rotation",
    type: s.textRotation,
    triggersBounds: l.any
  }, {
    name: "target-text-margin-x",
    type: s.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "target-text-margin-y",
    type: s.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "target-text-offset",
    type: s.size,
    triggersBounds: l.any
  }], f = [{
    name: "font-family",
    type: s.fontFamily,
    triggersBounds: l.any
  }, {
    name: "font-style",
    type: s.fontStyle,
    triggersBounds: l.any
  }, {
    name: "font-weight",
    type: s.fontWeight,
    triggersBounds: l.any
  }, {
    name: "font-size",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "text-transform",
    type: s.textTransform,
    triggersBounds: l.any
  }, {
    name: "text-wrap",
    type: s.textWrap,
    triggersBounds: l.any
  }, {
    name: "text-overflow-wrap",
    type: s.textOverflowWrap,
    triggersBounds: l.any
  }, {
    name: "text-max-width",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "text-outline-width",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "line-height",
    type: s.positiveNumber,
    triggersBounds: l.any
  }], p = [{
    name: "text-valign",
    type: s.valign,
    triggersBounds: l.any
  }, {
    name: "text-halign",
    type: s.halign,
    triggersBounds: l.any
  }, {
    name: "color",
    type: s.color
  }, {
    name: "text-outline-color",
    type: s.color
  }, {
    name: "text-outline-opacity",
    type: s.zeroOneNumber
  }, {
    name: "text-background-color",
    type: s.color
  }, {
    name: "text-background-opacity",
    type: s.zeroOneNumber
  }, {
    name: "text-background-padding",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "text-border-opacity",
    type: s.zeroOneNumber
  }, {
    name: "text-border-color",
    type: s.color
  }, {
    name: "text-border-width",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "text-border-style",
    type: s.borderStyle,
    triggersBounds: l.any
  }, {
    name: "text-background-shape",
    type: s.textBackgroundShape,
    triggersBounds: l.any
  }, {
    name: "text-justification",
    type: s.justification
  }, {
    name: "box-select-labels",
    type: s.bool,
    triggersBounds: l.any
  }], g = [{
    name: "events",
    type: s.bool,
    triggersZOrder: l.any
  }, {
    name: "text-events",
    type: s.bool,
    triggersZOrder: l.any
  }], m = [{
    name: "display",
    type: s.display,
    triggersZOrder: l.any,
    triggersBounds: l.any,
    triggersBoundsOfConnectedEdges: l.any,
    triggersBoundsOfParallelEdges: function(O, j, H) {
      return O === j ? false : H.pstyle("curve-style").value === "bezier";
    }
  }, {
    name: "visibility",
    type: s.visibility,
    triggersZOrder: l.any
  }, {
    name: "opacity",
    type: s.zeroOneNumber,
    triggersZOrder: l.zeroNonZero
  }, {
    name: "text-opacity",
    type: s.zeroOneNumber
  }, {
    name: "min-zoomed-font-size",
    type: s.size
  }, {
    name: "z-compound-depth",
    type: s.zCompoundDepth,
    triggersZOrder: l.any
  }, {
    name: "z-index-compare",
    type: s.zIndexCompare,
    triggersZOrder: l.any
  }, {
    name: "z-index",
    type: s.number,
    triggersZOrder: l.any
  }], v = [{
    name: "overlay-padding",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "overlay-color",
    type: s.color
  }, {
    name: "overlay-opacity",
    type: s.zeroOneNumber,
    triggersBounds: l.zeroNonZero
  }, {
    name: "overlay-shape",
    type: s.overlayShape,
    triggersBounds: l.any
  }, {
    name: "overlay-corner-radius",
    type: s.cornerRadius
  }], y = [{
    name: "underlay-padding",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "underlay-color",
    type: s.color
  }, {
    name: "underlay-opacity",
    type: s.zeroOneNumber,
    triggersBounds: l.zeroNonZero
  }, {
    name: "underlay-shape",
    type: s.overlayShape,
    triggersBounds: l.any
  }, {
    name: "underlay-corner-radius",
    type: s.cornerRadius
  }], b = [{
    name: "transition-property",
    type: s.propList
  }, {
    name: "transition-duration",
    type: s.time
  }, {
    name: "transition-delay",
    type: s.time
  }, {
    name: "transition-timing-function",
    type: s.easing
  }], w = function(O, j) {
    return j.value === "label" ? -O.poolIndex() : j.pfValue;
  }, T = [{
    name: "height",
    type: s.nodeSize,
    triggersBounds: l.any,
    hashOverride: w
  }, {
    name: "width",
    type: s.nodeSize,
    triggersBounds: l.any,
    hashOverride: w
  }, {
    name: "shape",
    type: s.nodeShape,
    triggersBounds: l.any
  }, {
    name: "shape-polygon-points",
    type: s.polygonPointList,
    triggersBounds: l.any
  }, {
    name: "corner-radius",
    type: s.cornerRadius
  }, {
    name: "background-color",
    type: s.color
  }, {
    name: "background-fill",
    type: s.fill
  }, {
    name: "background-opacity",
    type: s.zeroOneNumber
  }, {
    name: "background-blacken",
    type: s.nOneOneNumber
  }, {
    name: "background-gradient-stop-colors",
    type: s.colors
  }, {
    name: "background-gradient-stop-positions",
    type: s.percentages
  }, {
    name: "background-gradient-direction",
    type: s.gradientDirection
  }, {
    name: "padding",
    type: s.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "padding-relative-to",
    type: s.paddingRelativeTo,
    triggersBounds: l.any
  }, {
    name: "bounds-expansion",
    type: s.boundsExpansion,
    triggersBounds: l.any
  }], S = [{
    name: "border-color",
    type: s.color
  }, {
    name: "border-opacity",
    type: s.zeroOneNumber
  }, {
    name: "border-width",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "border-style",
    type: s.borderStyle
  }, {
    name: "border-cap",
    type: s.lineCap
  }, {
    name: "border-join",
    type: s.lineJoin
  }, {
    name: "border-dash-pattern",
    type: s.numbers
  }, {
    name: "border-dash-offset",
    type: s.number
  }, {
    name: "border-position",
    type: s.linePosition
  }], x = [{
    name: "outline-color",
    type: s.color
  }, {
    name: "outline-opacity",
    type: s.zeroOneNumber
  }, {
    name: "outline-width",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "outline-style",
    type: s.borderStyle
  }, {
    name: "outline-offset",
    type: s.size,
    triggersBounds: l.any
  }], _ = [{
    name: "background-image",
    type: s.urls
  }, {
    name: "background-image-crossorigin",
    type: s.bgCrossOrigin
  }, {
    name: "background-image-opacity",
    type: s.zeroOneNumbers
  }, {
    name: "background-image-containment",
    type: s.bgContainment
  }, {
    name: "background-image-smoothing",
    type: s.bools
  }, {
    name: "background-position-x",
    type: s.bgPos
  }, {
    name: "background-position-y",
    type: s.bgPos
  }, {
    name: "background-width-relative-to",
    type: s.bgRelativeTo
  }, {
    name: "background-height-relative-to",
    type: s.bgRelativeTo
  }, {
    name: "background-repeat",
    type: s.bgRepeat
  }, {
    name: "background-fit",
    type: s.bgFit
  }, {
    name: "background-clip",
    type: s.bgClip
  }, {
    name: "background-width",
    type: s.bgWH
  }, {
    name: "background-height",
    type: s.bgWH
  }, {
    name: "background-offset-x",
    type: s.bgPos
  }, {
    name: "background-offset-y",
    type: s.bgPos
  }], P = [{
    name: "position",
    type: s.position,
    triggersBounds: l.any
  }, {
    name: "compound-sizing-wrt-labels",
    type: s.compoundIncludeLabels,
    triggersBounds: l.any
  }, {
    name: "min-width",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "min-width-bias-left",
    type: s.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-width-bias-right",
    type: s.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-height",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "min-height-bias-top",
    type: s.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-height-bias-bottom",
    type: s.sizeMaybePercent,
    triggersBounds: l.any
  }], B = [{
    name: "line-style",
    type: s.lineStyle
  }, {
    name: "line-color",
    type: s.color
  }, {
    name: "line-fill",
    type: s.fill
  }, {
    name: "line-cap",
    type: s.lineCap
  }, {
    name: "line-opacity",
    type: s.zeroOneNumber
  }, {
    name: "line-dash-pattern",
    type: s.numbers
  }, {
    name: "line-dash-offset",
    type: s.number
  }, {
    name: "line-outline-width",
    type: s.size
  }, {
    name: "line-outline-color",
    type: s.color
  }, {
    name: "line-gradient-stop-colors",
    type: s.colors
  }, {
    name: "line-gradient-stop-positions",
    type: s.percentages
  }, {
    name: "curve-style",
    type: s.curveStyle,
    triggersBounds: l.any,
    triggersBoundsOfParallelEdges: function(O, j) {
      return O === j ? false : O === "bezier" || // remove from bundle
      j === "bezier";
    }
  }, {
    name: "haystack-radius",
    type: s.zeroOneNumber,
    triggersBounds: l.any
  }, {
    name: "source-endpoint",
    type: s.edgeEndpoint,
    triggersBounds: l.any
  }, {
    name: "target-endpoint",
    type: s.edgeEndpoint,
    triggersBounds: l.any
  }, {
    name: "control-point-step-size",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "control-point-distances",
    type: s.bidirectionalSizes,
    triggersBounds: l.any
  }, {
    name: "control-point-weights",
    type: s.numbers,
    triggersBounds: l.any
  }, {
    name: "segment-distances",
    type: s.bidirectionalSizes,
    triggersBounds: l.any
  }, {
    name: "segment-weights",
    type: s.numbers,
    triggersBounds: l.any
  }, {
    name: "segment-radii",
    type: s.numbers,
    triggersBounds: l.any
  }, {
    name: "radius-type",
    type: s.radiusType,
    triggersBounds: l.any
  }, {
    name: "taxi-turn",
    type: s.bidirectionalSizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "taxi-turn-min-distance",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "taxi-direction",
    type: s.axisDirection,
    triggersBounds: l.any
  }, {
    name: "taxi-radius",
    type: s.number,
    triggersBounds: l.any
  }, {
    name: "edge-distances",
    type: s.edgeDistances,
    triggersBounds: l.any
  }, {
    name: "arrow-scale",
    type: s.positiveNumber,
    triggersBounds: l.any
  }, {
    name: "loop-direction",
    type: s.angle,
    triggersBounds: l.any
  }, {
    name: "loop-sweep",
    type: s.angle,
    triggersBounds: l.any
  }, {
    name: "source-distance-from-node",
    type: s.size,
    triggersBounds: l.any
  }, {
    name: "target-distance-from-node",
    type: s.size,
    triggersBounds: l.any
  }], k = [{
    name: "ghost",
    type: s.bool,
    triggersBounds: l.any
  }, {
    name: "ghost-offset-x",
    type: s.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "ghost-offset-y",
    type: s.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "ghost-opacity",
    type: s.zeroOneNumber
  }], C = [{
    name: "selection-box-color",
    type: s.color
  }, {
    name: "selection-box-opacity",
    type: s.zeroOneNumber
  }, {
    name: "selection-box-border-color",
    type: s.color
  }, {
    name: "selection-box-border-width",
    type: s.size
  }, {
    name: "active-bg-color",
    type: s.color
  }, {
    name: "active-bg-opacity",
    type: s.zeroOneNumber
  }, {
    name: "active-bg-size",
    type: s.size
  }, {
    name: "outside-texture-bg-color",
    type: s.color
  }, {
    name: "outside-texture-bg-opacity",
    type: s.zeroOneNumber
  }], M = [];
  Qe.pieBackgroundN = 16, M.push({
    name: "pie-size",
    type: s.sizeMaybePercent
  }), M.push({
    name: "pie-hole",
    type: s.sizeMaybePercent
  }), M.push({
    name: "pie-start-angle",
    type: s.angle
  });
  for (var D = 1; D <= Qe.pieBackgroundN; D++)
    M.push({
      name: "pie-" + D + "-background-color",
      type: s.color
    }), M.push({
      name: "pie-" + D + "-background-size",
      type: s.percent
    }), M.push({
      name: "pie-" + D + "-background-opacity",
      type: s.zeroOneNumber
    });
  var N = [];
  Qe.stripeBackgroundN = 16, N.push({
    name: "stripe-size",
    type: s.sizeMaybePercent
  }), N.push({
    name: "stripe-direction",
    type: s.axisDirectionPrimary
  });
  for (var A = 1; A <= Qe.stripeBackgroundN; A++)
    N.push({
      name: "stripe-" + A + "-background-color",
      type: s.color
    }), N.push({
      name: "stripe-" + A + "-background-size",
      type: s.percent
    }), N.push({
      name: "stripe-" + A + "-background-opacity",
      type: s.zeroOneNumber
    });
  var L = [], R = Qe.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
  [{
    name: "arrow-shape",
    type: s.arrowShape,
    triggersBounds: l.any
  }, {
    name: "arrow-color",
    type: s.color
  }, {
    name: "arrow-fill",
    type: s.arrowFill
  }, {
    name: "arrow-width",
    type: s.arrowWidth
  }].forEach(function(O) {
    R.forEach(function(j) {
      var H = j + "-" + O.name, ne = O.type, oe = O.triggersBounds;
      L.push({
        name: H,
        type: ne,
        triggersBounds: oe
      });
    });
  }, {});
  var I = Qe.properties = [].concat(g, b, m, v, y, k, p, f, c, d, h, T, S, x, _, M, N, P, B, L, C), X = Qe.propertyGroups = {
    // common to all eles
    behavior: g,
    transition: b,
    visibility: m,
    overlay: v,
    underlay: y,
    ghost: k,
    // labels
    commonLabel: p,
    labelDimensions: f,
    mainLabel: c,
    sourceLabel: d,
    targetLabel: h,
    // node props
    nodeBody: T,
    nodeBorder: S,
    nodeOutline: x,
    backgroundImage: _,
    pie: M,
    stripe: N,
    compound: P,
    // edge props
    edgeLine: B,
    edgeArrow: L,
    core: C
  }, V = Qe.propertyGroupNames = {}, Y = Qe.propertyGroupKeys = Object.keys(X);
  Y.forEach(function(O) {
    V[O] = X[O].map(function(j) {
      return j.name;
    }), X[O].forEach(function(j) {
      return j.groupKey = O;
    });
  });
  var W = Qe.aliases = [{
    name: "content",
    pointsTo: "label"
  }, {
    name: "control-point-distance",
    pointsTo: "control-point-distances"
  }, {
    name: "control-point-weight",
    pointsTo: "control-point-weights"
  }, {
    name: "segment-distance",
    pointsTo: "segment-distances"
  }, {
    name: "segment-weight",
    pointsTo: "segment-weights"
  }, {
    name: "segment-radius",
    pointsTo: "segment-radii"
  }, {
    name: "edge-text-rotation",
    pointsTo: "text-rotation"
  }, {
    name: "padding-left",
    pointsTo: "padding"
  }, {
    name: "padding-right",
    pointsTo: "padding"
  }, {
    name: "padding-top",
    pointsTo: "padding"
  }, {
    name: "padding-bottom",
    pointsTo: "padding"
  }];
  Qe.propertyNames = I.map(function(O) {
    return O.name;
  });
  for (var Q = 0; Q < I.length; Q++) {
    var J = I[Q];
    I[J.name] = J;
  }
  for (var Z = 0; Z < W.length; Z++) {
    var $ = W[Z], te = I[$.pointsTo], z = {
      name: $.name,
      alias: true,
      pointsTo: te
    };
    I.push(z), I[$.name] = z;
  }
})();
Qe.getDefaultProperty = function(e) {
  return this.getDefaultProperties()[e];
};
Qe.getDefaultProperties = function() {
  var e = this._private;
  if (e.defaultProperties != null)
    return e.defaultProperties;
  for (var t = ve({
    // core props
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
    // common node/edge props
    events: "yes",
    "text-events": "no",
    "text-valign": "top",
    "text-halign": "center",
    "text-justification": "auto",
    "line-height": 1,
    color: "#000",
    "text-outline-color": "#000",
    "text-outline-width": 0,
    "text-outline-opacity": 1,
    "text-opacity": 1,
    "text-decoration": "none",
    "text-transform": "none",
    "text-wrap": "none",
    "text-overflow-wrap": "whitespace",
    "text-max-width": 9999,
    "text-background-color": "#000",
    "text-background-opacity": 0,
    "text-background-shape": "rectangle",
    "text-background-padding": 0,
    "text-border-opacity": 0,
    "text-border-width": 0,
    "text-border-style": "solid",
    "text-border-color": "#000",
    "font-family": "Helvetica Neue, Helvetica, sans-serif",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": 16,
    "min-zoomed-font-size": 0,
    "text-rotation": "none",
    "source-text-rotation": "none",
    "target-text-rotation": "none",
    visibility: "visible",
    display: "element",
    opacity: 1,
    "z-compound-depth": "auto",
    "z-index-compare": "auto",
    "z-index": 0,
    label: "",
    "text-margin-x": 0,
    "text-margin-y": 0,
    "source-label": "",
    "source-text-offset": 0,
    "source-text-margin-x": 0,
    "source-text-margin-y": 0,
    "target-label": "",
    "target-text-offset": 0,
    "target-text-margin-x": 0,
    "target-text-margin-y": 0,
    "overlay-opacity": 0,
    "overlay-color": "#000",
    "overlay-padding": 10,
    "overlay-shape": "round-rectangle",
    "overlay-corner-radius": "auto",
    "underlay-opacity": 0,
    "underlay-color": "#000",
    "underlay-padding": 10,
    "underlay-shape": "round-rectangle",
    "underlay-corner-radius": "auto",
    "transition-property": "none",
    "transition-duration": 0,
    "transition-delay": 0,
    "transition-timing-function": "linear",
    "box-select-labels": "no",
    // node props
    "background-blacken": 0,
    "background-color": "#999",
    "background-fill": "solid",
    "background-opacity": 1,
    "background-image": "none",
    "background-image-crossorigin": "anonymous",
    "background-image-opacity": 1,
    "background-image-containment": "inside",
    "background-image-smoothing": "yes",
    "background-position-x": "50%",
    "background-position-y": "50%",
    "background-offset-x": 0,
    "background-offset-y": 0,
    "background-width-relative-to": "include-padding",
    "background-height-relative-to": "include-padding",
    "background-repeat": "no-repeat",
    "background-fit": "none",
    "background-clip": "node",
    "background-width": "auto",
    "background-height": "auto",
    "border-color": "#000",
    "border-opacity": 1,
    "border-width": 0,
    "border-style": "solid",
    "border-dash-pattern": [4, 2],
    "border-dash-offset": 0,
    "border-cap": "butt",
    "border-join": "miter",
    "border-position": "center",
    "outline-color": "#999",
    "outline-opacity": 1,
    "outline-width": 0,
    "outline-offset": 0,
    "outline-style": "solid",
    height: 30,
    width: 30,
    shape: "ellipse",
    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
    "corner-radius": "auto",
    "bounds-expansion": 0,
    // node gradient
    "background-gradient-direction": "to-bottom",
    "background-gradient-stop-colors": "#999",
    "background-gradient-stop-positions": "0%",
    // ghost props
    ghost: "no",
    "ghost-offset-y": 0,
    "ghost-offset-x": 0,
    "ghost-opacity": 0,
    // compound props
    padding: 0,
    "padding-relative-to": "width",
    position: "origin",
    "compound-sizing-wrt-labels": "include",
    "min-width": 0,
    "min-width-bias-left": 0,
    "min-width-bias-right": 0,
    "min-height": 0,
    "min-height-bias-top": 0,
    "min-height-bias-bottom": 0
  }, {
    // node pie bg
    "pie-size": "100%",
    "pie-hole": 0,
    "pie-start-angle": "0deg"
  }, [{
    name: "pie-{{i}}-background-color",
    value: "black"
  }, {
    name: "pie-{{i}}-background-size",
    value: "0%"
  }, {
    name: "pie-{{i}}-background-opacity",
    value: 1
  }].reduce(function(l, s) {
    for (var c = 1; c <= Qe.pieBackgroundN; c++) {
      var d = s.name.replace("{{i}}", c), h = s.value;
      l[d] = h;
    }
    return l;
  }, {}), {
    // node stripes bg
    "stripe-size": "100%",
    "stripe-direction": "horizontal"
  }, [{
    name: "stripe-{{i}}-background-color",
    value: "black"
  }, {
    name: "stripe-{{i}}-background-size",
    value: "0%"
  }, {
    name: "stripe-{{i}}-background-opacity",
    value: 1
  }].reduce(function(l, s) {
    for (var c = 1; c <= Qe.stripeBackgroundN; c++) {
      var d = s.name.replace("{{i}}", c), h = s.value;
      l[d] = h;
    }
    return l;
  }, {}), {
    // edge props
    "line-style": "solid",
    "line-color": "#999",
    "line-fill": "solid",
    "line-cap": "butt",
    "line-opacity": 1,
    "line-outline-width": 0,
    "line-outline-color": "#000",
    "line-gradient-stop-colors": "#999",
    "line-gradient-stop-positions": "0%",
    "control-point-step-size": 40,
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
    "segment-distances": 20,
    "segment-radii": 15,
    "radius-type": "arc-radius",
    "taxi-turn": "50%",
    "taxi-radius": 15,
    "taxi-turn-min-distance": 10,
    "taxi-direction": "auto",
    "edge-distances": "intersection",
    "curve-style": "haystack",
    "haystack-radius": 0,
    "arrow-scale": 1,
    "loop-direction": "-45deg",
    "loop-sweep": "-90deg",
    "source-distance-from-node": 0,
    "target-distance-from-node": 0,
    "source-endpoint": "outside-to-node",
    "target-endpoint": "outside-to-node",
    "line-dash-pattern": [6, 3],
    "line-dash-offset": 0
  }, [{
    name: "arrow-shape",
    value: "none"
  }, {
    name: "arrow-color",
    value: "#999"
  }, {
    name: "arrow-fill",
    value: "filled"
  }, {
    name: "arrow-width",
    value: 1
  }].reduce(function(l, s) {
    return Qe.arrowPrefixes.forEach(function(c) {
      var d = c + "-" + s.name, h = s.value;
      l[d] = h;
    }), l;
  }, {})), n = {}, r = 0; r < this.properties.length; r++) {
    var a = this.properties[r];
    if (!a.pointsTo) {
      var i = a.name, o = t[i], u = this.parse(i, o);
      n[i] = u;
    }
  }
  return e.defaultProperties = n, e.defaultProperties;
};
Qe.addDefaultStylesheet = function() {
  this.selector(":parent").css({
    shape: "rectangle",
    padding: 10,
    "background-color": "#eee",
    "border-color": "#ccc",
    "border-width": 1
  }).selector("edge").css({
    width: 3
  }).selector(":loop").css({
    "curve-style": "bezier"
  }).selector("edge:compound").css({
    "curve-style": "bezier",
    "source-endpoint": "outside-to-line",
    "target-endpoint": "outside-to-line"
  }).selector(":selected").css({
    "background-color": "#0169D9",
    "line-color": "#0169D9",
    "source-arrow-color": "#0169D9",
    "target-arrow-color": "#0169D9",
    "mid-source-arrow-color": "#0169D9",
    "mid-target-arrow-color": "#0169D9"
  }).selector(":parent:selected").css({
    "background-color": "#CCE1F9",
    "border-color": "#aec8e5"
  }).selector(":active").css({
    "overlay-color": "black",
    "overlay-padding": 10,
    "overlay-opacity": 0.25
  }), this.defaultLength = this.length;
};
var qa = {};
qa.parse = function(e, t, n, r) {
  var a = this;
  if (qe(t))
    return a.parseImplWarn(e, t, n, r);
  var i = r === "mapping" || r === true || r === false || r == null ? "dontcare" : r, o = n ? "t" : "f", u = "" + t, l = uc(e, u, o, i), s = a.propCache = a.propCache || [], c;
  return (c = s[l]) || (c = s[l] = a.parseImplWarn(e, t, n, r)), (n || r === "mapping") && (c = Ft(c), c && (c.value = Ft(c.value))), c;
};
qa.parseImplWarn = function(e, t, n, r) {
  var a = this.parseImpl(e, t, n, r);
  return !a && t != null && Ae("The style property `".concat(e, ": ").concat(t, "` is invalid")), a && (a.name === "width" || a.name === "height") && t === "label" && Ae("The style value of `label` is deprecated for `" + a.name + "`"), a;
};
qa.parseImpl = function(e, t, n, r) {
  var a = this;
  e = Ko(e);
  var i = a.properties[e], o = t, u = a.types;
  if (!i || t === void 0)
    return null;
  i.alias && (i = i.pointsTo, e = i.name);
  var l = fe(t);
  l && (t = t.trim());
  var s = i.type;
  if (!s)
    return null;
  if (n && (t === "" || t === null))
    return {
      name: e,
      value: t,
      bypass: true,
      deleteBypass: true
    };
  if (qe(t))
    return {
      name: e,
      value: t,
      strValue: "fn",
      mapped: u.fn,
      bypass: n
    };
  var c, d;
  if (!(!l || r || t.length < 7 || t[1] !== "a")) {
    if (t.length >= 7 && t[0] === "d" && (c = new RegExp(u.data.regex).exec(t))) {
      if (n)
        return false;
      var h = u.data;
      return {
        name: e,
        value: c,
        strValue: "" + t,
        mapped: h,
        field: c[1],
        bypass: n
      };
    } else if (t.length >= 10 && t[0] === "m" && (d = new RegExp(u.mapData.regex).exec(t))) {
      if (n || s.multiple)
        return false;
      var f = u.mapData;
      if (!(s.color || s.number))
        return false;
      var p = this.parse(e, d[4]);
      if (!p || p.mapped)
        return false;
      var g = this.parse(e, d[5]);
      if (!g || g.mapped)
        return false;
      if (p.pfValue === g.pfValue || p.strValue === g.strValue)
        return Ae("`" + e + ": " + t + "` is not a valid mapper because the output range is zero; converting to `" + e + ": " + p.strValue + "`"), this.parse(e, p.strValue);
      if (s.color) {
        var m = p.value, v = g.value, y = m[0] === v[0] && m[1] === v[1] && m[2] === v[2] && // optional alpha
        (m[3] === v[3] || (m[3] == null || m[3] === 1) && (v[3] == null || v[3] === 1));
        if (y)
          return false;
      }
      return {
        name: e,
        value: d,
        strValue: "" + t,
        mapped: f,
        field: d[1],
        fieldMin: parseFloat(d[2]),
        // min & max are numeric
        fieldMax: parseFloat(d[3]),
        valueMin: p.value,
        valueMax: g.value,
        bypass: n
      };
    }
  }
  if (s.multiple && r !== "multiple") {
    var b;
    if (l ? b = t.split(/\s+/) : Le(t) ? b = t : b = [t], s.evenMultiple && b.length % 2 !== 0)
      return null;
    for (var w = [], T = [], S = [], x = "", _ = false, P = 0; P < b.length; P++) {
      var B = a.parse(e, b[P], n, "multiple");
      _ = _ || fe(B.value), w.push(B.value), S.push(B.pfValue != null ? B.pfValue : B.value), T.push(B.units), x += (P > 0 ? " " : "") + B.strValue;
    }
    return s.validate && !s.validate(w, T) ? null : s.singleEnum && _ ? w.length === 1 && fe(w[0]) ? {
      name: e,
      value: w[0],
      strValue: w[0],
      bypass: n
    } : null : {
      name: e,
      value: w,
      pfValue: S,
      strValue: x,
      bypass: n,
      units: T
    };
  }
  var k = function() {
    for (var te = 0; te < s.enums.length; te++) {
      var z = s.enums[te];
      if (z === t)
        return {
          name: e,
          value: t,
          strValue: "" + t,
          bypass: n
        };
    }
    return null;
  };
  if (s.number) {
    var C, M = "px";
    if (s.units && (C = s.units), s.implicitUnits && (M = s.implicitUnits), !s.unitless)
      if (l) {
        var D = "px|em" + (s.allowPercent ? "|\\%" : "");
        C && (D = C);
        var N = t.match("^(" + et + ")(" + D + ")?$");
        N && (t = N[1], C = N[2] || M);
      } else (!C || s.implicitUnits) && (C = M);
    if (t = parseFloat(t), isNaN(t) && s.enums === void 0)
      return null;
    if (isNaN(t) && s.enums !== void 0)
      return t = o, k();
    if (s.integer && !sh(t) || s.min !== void 0 && (t < s.min || s.strictMin && t === s.min) || s.max !== void 0 && (t > s.max || s.strictMax && t === s.max))
      return null;
    var A = {
      name: e,
      value: t,
      strValue: "" + t + (C || ""),
      units: C,
      bypass: n
    };
    return s.unitless || C !== "px" && C !== "em" ? A.pfValue = t : A.pfValue = C === "px" || !C ? t : this.getEmSizeInPixels() * t, (C === "ms" || C === "s") && (A.pfValue = C === "ms" ? t : 1e3 * t), (C === "deg" || C === "rad") && (A.pfValue = C === "rad" ? t : vf(t)), C === "%" && (A.pfValue = t / 100), A;
  } else if (s.propList) {
    var L = [], R = "" + t;
    if (R !== "none") {
      for (var I = R.split(/\s*,\s*|\s+/), X = 0; X < I.length; X++) {
        var V = I[X].trim();
        a.properties[V] ? L.push(V) : Ae("`" + V + "` is not a valid property name");
      }
      if (L.length === 0)
        return null;
    }
    return {
      name: e,
      value: L,
      strValue: L.length === 0 ? "none" : L.join(" "),
      bypass: n
    };
  } else if (s.color) {
    var Y = nc(t);
    return Y ? {
      name: e,
      value: Y,
      pfValue: Y,
      strValue: "rgb(" + Y[0] + "," + Y[1] + "," + Y[2] + ")",
      // n.b. no spaces b/c of multiple support
      bypass: n
    } : null;
  } else if (s.regex || s.regexes) {
    if (s.enums) {
      var W = k();
      if (W)
        return W;
    }
    for (var Q = s.regexes ? s.regexes : [s.regex], J = 0; J < Q.length; J++) {
      var Z = new RegExp(Q[J]), $ = Z.exec(t);
      if ($)
        return {
          name: e,
          value: s.singleRegexMatchValue ? $[1] : $,
          strValue: "" + t,
          bypass: n
        };
    }
    return null;
  } else return s.string ? {
    name: e,
    value: "" + t,
    strValue: "" + t,
    bypass: n
  } : s.enums ? k() : null;
};
var it = function(e) {
  if (!(this instanceof it))
    return new it(e);
  if (!Ho(e)) {
    Ye("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
};
var pt = it.prototype;
pt.instanceString = function() {
  return "style";
};
pt.clear = function() {
  for (var e = this._private, t = e.cy, n = t.elements(), r = 0; r < this.length; r++)
    this[r] = void 0;
  return this.length = 0, e.contextStyles = {}, e.propDiffs = {}, this.cleanElements(n, true), n.forEach(function(a) {
    var i = a[0]._private;
    i.styleDirty = true, i.appliedInitStyle = false;
  }), this;
};
pt.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
pt.core = function(e) {
  return this._private.coreStyle[e] || this.getDefaultProperty(e);
};
pt.selector = function(e) {
  var t = e === "core" ? null : new un(e), n = this.length++;
  return this[n] = {
    selector: t,
    properties: [],
    mappedProperties: [],
    index: n
  }, this;
};
pt.css = function() {
  var e = this, t = arguments;
  if (t.length === 1)
    for (var n = t[0], r = 0; r < e.properties.length; r++) {
      var a = e.properties[r], i = n[a.name];
      i === void 0 && (i = n[Da(a.name)]), i !== void 0 && this.cssRule(a.name, i);
    }
  else t.length === 2 && this.cssRule(t[0], t[1]);
  return this;
};
pt.style = pt.css;
pt.cssRule = function(e, t) {
  var n = this.parse(e, t);
  if (n) {
    var r = this.length - 1;
    this[r].properties.push(n), this[r].properties[n.name] = n, n.name.match(/pie-(\d+)-background-size/) && n.value && (this._private.hasPie = true), n.name.match(/stripe-(\d+)-background-size/) && n.value && (this._private.hasStripe = true), n.mapped && this[r].mappedProperties.push(n);
    var a = !this[r].selector;
    a && (this._private.coreStyle[n.name] = n);
  }
  return this;
};
pt.append = function(e) {
  return Ju(e) ? e.appendToStyle(this) : Le(e) ? this.appendFromJson(e) : fe(e) && this.appendFromString(e), this;
};
it.fromJson = function(e, t) {
  var n = new it(e);
  return n.fromJson(t), n;
};
it.fromString = function(e, t) {
  return new it(e).fromString(t);
};
[ot, Vr, cs, jt, Ya, ds, Qe, qa].forEach(function(e) {
  ve(pt, e);
});
it.types = pt.types;
it.properties = pt.properties;
it.propertyGroups = pt.propertyGroups;
it.propertyGroupNames = pt.propertyGroupNames;
it.propertyGroupKeys = pt.propertyGroupKeys;
var Eg = {
  style: function(e) {
    if (e) {
      var t = this.setStyle(e);
      t.update();
    }
    return this._private.style;
  },
  setStyle: function(e) {
    var t = this._private;
    return Ju(e) ? t.style = e.generateStyle(this) : Le(e) ? t.style = it.fromJson(this, e) : fe(e) ? t.style = it.fromString(this, e) : t.style = it(this), t.style;
  },
  // e.g. cy.data() changed => recalc ele mappers
  updateStyle: function() {
    this.mutableElements().updateStyle();
  }
};
var Tg = "single";
var _n = {
  autolock: function(e) {
    if (e !== void 0)
      this._private.autolock = !!e;
    else
      return this._private.autolock;
    return this;
  },
  autoungrabify: function(e) {
    if (e !== void 0)
      this._private.autoungrabify = !!e;
    else
      return this._private.autoungrabify;
    return this;
  },
  autounselectify: function(e) {
    if (e !== void 0)
      this._private.autounselectify = !!e;
    else
      return this._private.autounselectify;
    return this;
  },
  selectionType: function(e) {
    var t = this._private;
    if (t.selectionType == null && (t.selectionType = Tg), e !== void 0)
      (e === "additive" || e === "single") && (t.selectionType = e);
    else
      return t.selectionType;
    return this;
  },
  panningEnabled: function(e) {
    if (e !== void 0)
      this._private.panningEnabled = !!e;
    else
      return this._private.panningEnabled;
    return this;
  },
  userPanningEnabled: function(e) {
    if (e !== void 0)
      this._private.userPanningEnabled = !!e;
    else
      return this._private.userPanningEnabled;
    return this;
  },
  zoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.zoomingEnabled = !!e;
    else
      return this._private.zoomingEnabled;
    return this;
  },
  userZoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.userZoomingEnabled = !!e;
    else
      return this._private.userZoomingEnabled;
    return this;
  },
  boxSelectionEnabled: function(e) {
    if (e !== void 0)
      this._private.boxSelectionEnabled = !!e;
    else
      return this._private.boxSelectionEnabled;
    return this;
  },
  pan: function() {
    var e = arguments, t = this._private.pan, n, r, a, i, o;
    switch (e.length) {
      case 0:
        return t;
      case 1:
        if (fe(e[0]))
          return n = e[0], t[n];
        if (_e(e[0])) {
          if (!this._private.panningEnabled)
            return this;
          a = e[0], i = a.x, o = a.y, ee(i) && (t.x = i), ee(o) && (t.y = o), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled)
          return this;
        n = e[0], r = e[1], (n === "x" || n === "y") && ee(r) && (t[n] = r), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  panBy: function(e, t) {
    var n = arguments, r = this._private.pan, a, i, o, u, l;
    if (!this._private.panningEnabled)
      return this;
    switch (n.length) {
      case 1:
        _e(e) && (o = n[0], u = o.x, l = o.y, ee(u) && (r.x += u), ee(l) && (r.y += l), this.emit("pan viewport"));
        break;
      case 2:
        a = e, i = t, (a === "x" || a === "y") && ee(i) && (r[a] += i), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  gc: function() {
    this.notify("gc");
  },
  fit: function(e, t) {
    var n = this.getFitViewport(e, t);
    if (n) {
      var r = this._private;
      r.zoom = n.zoom, r.pan = n.pan, this.emit("pan zoom viewport"), this.notify("viewport");
    }
    return this;
  },
  getFitViewport: function(e, t) {
    if (ee(e) && t === void 0 && (t = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var n;
      if (fe(e)) {
        var r = e;
        e = this.$(r);
      } else if (ch(e)) {
        var a = e;
        n = {
          x1: a.x1,
          y1: a.y1,
          x2: a.x2,
          y2: a.y2
        }, n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
      } else St(e) || (e = this.mutableElements());
      if (!(St(e) && e.empty())) {
        n = n || e.boundingBox();
        var i = this.width(), o = this.height(), u;
        if (t = ee(t) ? t : 0, !isNaN(i) && !isNaN(o) && i > 0 && o > 0 && !isNaN(n.w) && !isNaN(n.h) && n.w > 0 && n.h > 0) {
          u = Math.min((i - 2 * t) / n.w, (o - 2 * t) / n.h), u = u > this._private.maxZoom ? this._private.maxZoom : u, u = u < this._private.minZoom ? this._private.minZoom : u;
          var l = {
            // now pan to middle
            x: (i - u * (n.x1 + n.x2)) / 2,
            y: (o - u * (n.y1 + n.y2)) / 2
          };
          return {
            zoom: u,
            pan: l
          };
        }
      }
    }
  },
  zoomRange: function(e, t) {
    var n = this._private;
    if (t == null) {
      var r = e;
      e = r.min, t = r.max;
    }
    return ee(e) && ee(t) && e <= t ? (n.minZoom = e, n.maxZoom = t) : ee(e) && t === void 0 && e <= n.maxZoom ? n.minZoom = e : ee(t) && e === void 0 && t >= n.minZoom && (n.maxZoom = t), this;
  },
  minZoom: function(e) {
    return e === void 0 ? this._private.minZoom : this.zoomRange({
      min: e
    });
  },
  maxZoom: function(e) {
    return e === void 0 ? this._private.maxZoom : this.zoomRange({
      max: e
    });
  },
  getZoomedViewport: function(e) {
    var t = this._private, n = t.pan, r = t.zoom, a, i, o = false;
    if (t.zoomingEnabled || (o = true), ee(e) ? i = e : _e(e) && (i = e.level, e.position != null ? a = Ra(e.position, r, n) : e.renderedPosition != null && (a = e.renderedPosition), a != null && !t.panningEnabled && (o = true)), i = i > t.maxZoom ? t.maxZoom : i, i = i < t.minZoom ? t.minZoom : i, o || !ee(i) || i === r || a != null && (!ee(a.x) || !ee(a.y)))
      return null;
    if (a != null) {
      var u = n, l = r, s = i, c = {
        x: -s / l * (a.x - u.x) + a.x,
        y: -s / l * (a.y - u.y) + a.y
      };
      return {
        zoomed: true,
        panned: true,
        zoom: s,
        pan: c
      };
    } else
      return {
        zoomed: true,
        panned: false,
        zoom: i,
        pan: n
      };
  },
  zoom: function(e) {
    if (e === void 0)
      return this._private.zoom;
    var t = this.getZoomedViewport(e), n = this._private;
    return t == null || !t.zoomed ? this : (n.zoom = t.zoom, t.panned && (n.pan.x = t.pan.x, n.pan.y = t.pan.y), this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
  },
  viewport: function(e) {
    var t = this._private, n = true, r = true, a = [], i = false, o = false;
    if (!e)
      return this;
    if (ee(e.zoom) || (n = false), _e(e.pan) || (r = false), !n && !r)
      return this;
    if (n) {
      var u = e.zoom;
      u < t.minZoom || u > t.maxZoom || !t.zoomingEnabled ? i = true : (t.zoom = u, a.push("zoom"));
    }
    if (r && (!i || !e.cancelOnFailedZoom) && t.panningEnabled) {
      var l = e.pan;
      ee(l.x) && (t.pan.x = l.x, o = false), ee(l.y) && (t.pan.y = l.y, o = false), o || a.push("pan");
    }
    return a.length > 0 && (a.push("viewport"), this.emit(a.join(" ")), this.notify("viewport")), this;
  },
  center: function(e) {
    var t = this.getCenterPan(e);
    return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
  },
  getCenterPan: function(e, t) {
    if (this._private.panningEnabled) {
      if (fe(e)) {
        var n = e;
        e = this.mutableElements().filter(n);
      } else St(e) || (e = this.mutableElements());
      if (e.length !== 0) {
        var r = e.boundingBox(), a = this.width(), i = this.height();
        t = t === void 0 ? this._private.zoom : t;
        var o = {
          // middle
          x: (a - t * (r.x1 + r.x2)) / 2,
          y: (i - t * (r.y1 + r.y2)) / 2
        };
        return o;
      }
    }
  },
  reset: function() {
    return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    }), this);
  },
  invalidateSize: function() {
    this._private.sizeCache = null;
  },
  size: function() {
    var e = this._private, t = e.container, n = this;
    return e.sizeCache = e.sizeCache || (t ? function() {
      var r = n.window().getComputedStyle(t), a = function(i) {
        return parseFloat(r.getPropertyValue(i));
      };
      return {
        width: t.clientWidth - a("padding-left") - a("padding-right"),
        height: t.clientHeight - a("padding-top") - a("padding-bottom")
      };
    }() : {
      // fallback if no container (not 0 b/c can be used for dividing etc)
      width: 1,
      height: 1
    });
  },
  width: function() {
    return this.size().width;
  },
  height: function() {
    return this.size().height;
  },
  extent: function() {
    var e = this._private.pan, t = this._private.zoom, n = this.renderedExtent(), r = {
      x1: (n.x1 - e.x) / t,
      x2: (n.x2 - e.x) / t,
      y1: (n.y1 - e.y) / t,
      y2: (n.y2 - e.y) / t
    };
    return r.w = r.x2 - r.x1, r.h = r.y2 - r.y1, r;
  },
  renderedExtent: function() {
    var e = this.width(), t = this.height();
    return {
      x1: 0,
      y1: 0,
      x2: e,
      y2: t,
      w: e,
      h: t
    };
  },
  multiClickDebounceTime: function(e) {
    if (e) this._private.multiClickDebounceTime = e;
    else return this._private.multiClickDebounceTime;
    return this;
  }
};
_n.centre = _n.center;
_n.autolockNodes = _n.autolock;
_n.autoungrabifyNodes = _n.autoungrabify;
var _r = {
  data: Me.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "data",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeData: Me.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  }),
  scratch: Me.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "scratch",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeScratch: Me.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  })
};
_r.attr = _r.data;
_r.removeAttr = _r.removeData;
var Br = function(e) {
  var t = this;
  e = ve({}, e);
  var n = e.container;
  n && !ya(n) && ya(n[0]) && (n = n[0]);
  var r = n ? n._cyreg : null;
  r = r || {}, r && r.cy && (r.cy.destroy(), r = {});
  var a = r.readies = r.readies || [];
  n && (n._cyreg = r), r.cy = t;
  var i = $e !== void 0 && n !== void 0 && !e.headless, o = e;
  o.layout = ve({
    name: i ? "grid" : "null"
  }, o.layout), o.renderer = ve({
    name: i ? "canvas" : "null"
  }, o.renderer);
  var u = function(h, f, p) {
    return f !== void 0 ? f : p !== void 0 ? p : h;
  }, l = this._private = {
    container: n,
    // html dom ele container
    ready: false,
    // whether ready has been triggered
    options: o,
    // cached options
    elements: new ut(this),
    // elements in the graph
    listeners: [],
    // list of listeners
    aniEles: new ut(this),
    // elements being animated
    data: o.data || {},
    // data for the core
    scratch: {},
    // scratch object for core
    layout: null,
    renderer: null,
    destroyed: false,
    // whether destroy was called
    notificationsEnabled: true,
    // whether notifications are sent to the renderer
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: u(true, o.zoomingEnabled),
    userZoomingEnabled: u(true, o.userZoomingEnabled),
    panningEnabled: u(true, o.panningEnabled),
    userPanningEnabled: u(true, o.userPanningEnabled),
    boxSelectionEnabled: u(true, o.boxSelectionEnabled),
    autolock: u(false, o.autolock, o.autolockNodes),
    autoungrabify: u(false, o.autoungrabify, o.autoungrabifyNodes),
    autounselectify: u(false, o.autounselectify),
    styleEnabled: o.styleEnabled === void 0 ? i : o.styleEnabled,
    zoom: ee(o.zoom) ? o.zoom : 1,
    pan: {
      x: _e(o.pan) && ee(o.pan.x) ? o.pan.x : 0,
      y: _e(o.pan) && ee(o.pan.y) ? o.pan.y : 0
    },
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    hasCompoundNodes: false,
    multiClickDebounceTime: u(250, o.multiClickDebounceTime)
  };
  this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
    min: o.minZoom,
    max: o.maxZoom
  });
  var s = function(h, f) {
    var p = h.some(dh);
    if (p)
      return tr.all(h).then(f);
    f(h);
  };
  l.styleEnabled && t.setStyle([]);
  var c = ve({}, o, o.renderer);
  t.initRenderer(c);
  var d = function(h, f, p) {
    t.notifications(false);
    var g = t.mutableElements();
    g.length > 0 && g.remove(), h != null && (_e(h) || Le(h)) && t.add(h), t.one("layoutready", function(v) {
      t.notifications(true), t.emit(v), t.one("load", f), t.emitAndNotify("load");
    }).one("layoutstop", function() {
      t.one("done", p), t.emit("done");
    });
    var m = ve({}, t._private.options.layout);
    m.eles = t.elements(), t.layout(m).run();
  };
  s([o.style, o.elements], function(h) {
    var f = h[0], p = h[1];
    l.styleEnabled && t.style().append(f), d(p, function() {
      t.startAnimationLoop(), l.ready = true, qe(o.ready) && t.on("ready", o.ready);
      for (var g = 0; g < a.length; g++) {
        var m = a[g];
        t.on("ready", m);
      }
      r && (r.readies = []), t.emit("ready");
    }, o.done);
  });
};
var Ca = Br.prototype;
ve(Ca, {
  instanceString: function() {
    return "core";
  },
  isReady: function() {
    return this._private.ready;
  },
  destroyed: function() {
    return this._private.destroyed;
  },
  ready: function(e) {
    return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
  },
  destroy: function() {
    var e = this;
    if (!e.destroyed())
      return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = true, e;
  },
  hasElementWithId: function(e) {
    return this._private.elements.hasElementWithId(e);
  },
  getElementById: function(e) {
    return this._private.elements.getElementById(e);
  },
  hasCompoundNodes: function() {
    return this._private.hasCompoundNodes;
  },
  headless: function() {
    return this._private.renderer.isHeadless();
  },
  styleEnabled: function() {
    return this._private.styleEnabled;
  },
  addToPool: function(e) {
    return this._private.elements.merge(e), this;
  },
  removeFromPool: function(e) {
    return this._private.elements.unmerge(e), this;
  },
  container: function() {
    return this._private.container || null;
  },
  window: function() {
    var e = this._private.container;
    if (e == null) return $e;
    var t = this._private.container.ownerDocument;
    return t === void 0 || t == null ? $e : t.defaultView || $e;
  },
  mount: function(e) {
    if (e != null) {
      var t = this, n = t._private, r = n.options;
      return !ya(e) && ya(e[0]) && (e = e[0]), t.stopAnimationLoop(), t.destroyRenderer(), n.container = e, n.styleEnabled = true, t.invalidateSize(), t.initRenderer(ve({}, r, r.renderer, {
        // allow custom renderer name to be re-used, otherwise use canvas
        name: r.renderer.name === "null" ? "canvas" : r.renderer.name
      })), t.startAnimationLoop(), t.style(r.style), t.emit("mount"), t;
    }
  },
  unmount: function() {
    var e = this;
    return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
      name: "null"
    }), e.emit("unmount"), e;
  },
  options: function() {
    return Ft(this._private.options);
  },
  json: function(e) {
    var t = this, n = t._private, r = t.mutableElements(), a = function(y) {
      return t.getElementById(y.id());
    };
    if (_e(e)) {
      if (t.startBatch(), e.elements) {
        var i = {}, o = function(y, b) {
          for (var w = [], T = [], S = 0; S < y.length; S++) {
            var x = y[S];
            if (!x.data.id) {
              Ae("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var _ = "" + x.data.id, P = t.getElementById(_);
            i[_] = true, P.length !== 0 ? T.push({
              ele: P,
              json: x
            }) : (b && (x.group = b), w.push(x));
          }
          t.add(w);
          for (var B = 0; B < T.length; B++) {
            var k = T[B], C = k.ele, M = k.json;
            C.json(M);
          }
        };
        if (Le(e.elements))
          o(e.elements);
        else
          for (var u = ["nodes", "edges"], l = 0; l < u.length; l++) {
            var s = u[l], c = e.elements[s];
            Le(c) && o(c, s);
          }
        var d = t.collection();
        r.filter(function(y) {
          return !i[y.id()];
        }).forEach(function(y) {
          y.isParent() ? d.merge(y) : y.remove();
        }), d.forEach(function(y) {
          return y.children().move({
            parent: null
          });
        }), d.forEach(function(y) {
          return a(y).remove();
        });
      }
      e.style && t.style(e.style), e.zoom != null && e.zoom !== n.zoom && t.zoom(e.zoom), e.pan && (e.pan.x !== n.pan.x || e.pan.y !== n.pan.y) && t.pan(e.pan), e.data && t.data(e.data);
      for (var h = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], f = 0; f < h.length; f++) {
        var p = h[f];
        e[p] != null && t[p](e[p]);
      }
      return t.endBatch(), this;
    } else {
      var g = !!e, m = {};
      g ? m.elements = this.elements().map(function(y) {
        return y.json();
      }) : (m.elements = {}, r.forEach(function(y) {
        var b = y.group();
        m.elements[b] || (m.elements[b] = []), m.elements[b].push(y.json());
      })), this._private.styleEnabled && (m.style = t.style().json()), m.data = Ft(t.data());
      var v = n.options;
      return m.zoomingEnabled = n.zoomingEnabled, m.userZoomingEnabled = n.userZoomingEnabled, m.zoom = n.zoom, m.minZoom = n.minZoom, m.maxZoom = n.maxZoom, m.panningEnabled = n.panningEnabled, m.userPanningEnabled = n.userPanningEnabled, m.pan = Ft(n.pan), m.boxSelectionEnabled = n.boxSelectionEnabled, m.renderer = Ft(v.renderer), m.hideEdgesOnViewport = v.hideEdgesOnViewport, m.textureOnViewport = v.textureOnViewport, m.wheelSensitivity = v.wheelSensitivity, m.motionBlur = v.motionBlur, m.multiClickDebounceTime = v.multiClickDebounceTime, m;
    }
  }
});
Ca.$id = Ca.getElementById;
[hg, yg, $c, Lo, da, bg, zo, ha, Eg, _n, _r].forEach(function(e) {
  ve(Ca, e);
});
var Cg = {
  fit: true,
  // whether to fit the viewport to the graph
  directed: false,
  // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30,
  // padding on fit
  circle: false,
  // put depths in concentric circles if true, put depths top down if false
  grid: false,
  // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75,
  // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: false,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: void 0,
  // the roots of the trees
  depthSort: void 0,
  // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled,
  animateFilter: function(e, t) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
var Pg = {
  maximal: false,
  // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only); setting acyclic to true sets maximal to true also
  acyclic: false
  // whether the tree is acyclic and thus a node could be shifted (due to the maximal option) multiple times without causing an infinite loop; setting to true sets maximal to true also; if you are uncertain whether a tree is acyclic, set to false to avoid potential infinite loops
};
var Ln = function(e) {
  return e.scratch("breadthfirst");
};
var Eu = function(e, t) {
  return e.scratch("breadthfirst", t);
};
function Jc(e) {
  this.options = ve({}, Cg, Pg, e);
}
Jc.prototype.run = function() {
  var e = this.options, t = e.cy, n = e.eles, r = n.nodes().filter(function(re) {
    return re.isChildless();
  }), a = n, i = e.directed, o = e.acyclic || e.maximal || e.maximalAdjustments > 0, u = !!e.boundingBox, l = t.extent(), s = bt(u ? e.boundingBox : {
    x1: l.x1,
    y1: l.y1,
    w: l.w,
    h: l.h
  }), c;
  if (St(e.roots))
    c = e.roots;
  else if (Le(e.roots)) {
    for (var d = [], h = 0; h < e.roots.length; h++) {
      var f = e.roots[h], p = t.getElementById(f);
      d.push(p);
    }
    c = t.collection(d);
  } else if (fe(e.roots))
    c = t.$(e.roots);
  else if (i)
    c = r.roots();
  else {
    var g = n.components();
    c = t.collection();
    for (var m = function() {
      var re = g[v], de = re.maxDegree(false), he = re.filter(function(ye) {
        return ye.degree(false) === de;
      });
      c = c.add(he);
    }, v = 0; v < g.length; v++)
      m();
  }
  var y = [], b = {}, w = function(re, de) {
    y[de] == null && (y[de] = []);
    var he = y[de].length;
    y[de].push(re), Eu(re, {
      index: he,
      depth: de
    });
  }, T = function(re, de) {
    var he = Ln(re), ye = he.depth, me = he.index;
    y[ye][me] = null, re.isChildless() && w(re, de);
  };
  a.bfs({
    roots: c,
    directed: e.directed,
    visit: function(re, de, he, ye, me) {
      var Se = re[0], Pe = Se.id();
      Se.isChildless() && w(Se, me), b[Pe] = true;
    }
  });
  for (var S = [], x = 0; x < r.length; x++) {
    var _ = r[x];
    b[_.id()] || S.push(_);
  }
  var P = function(re) {
    for (var de = y[re], he = 0; he < de.length; he++) {
      var ye = de[he];
      if (ye == null) {
        de.splice(he, 1), he--;
        continue;
      }
      Eu(ye, {
        depth: re,
        index: he
      });
    }
  }, B = function(re, de) {
    for (var he = Ln(re), ye = re.incomers().filter(function(Fe) {
      return Fe.isNode() && n.has(Fe);
    }), me = -1, Se = re.id(), Pe = 0; Pe < ye.length; Pe++) {
      var Ie = ye[Pe], Ge = Ln(Ie);
      me = Math.max(me, Ge.depth);
    }
    if (he.depth <= me) {
      if (!e.acyclic && de[Se])
        return null;
      var Xe = me + 1;
      return T(re, Xe), de[Se] = Xe, true;
    }
    return false;
  };
  if (i && o) {
    var k = [], C = {}, M = function(re) {
      return k.push(re);
    }, D = function() {
      return k.shift();
    };
    for (r.forEach(function(re) {
      return k.push(re);
    }); k.length > 0; ) {
      var N = D(), A = B(N, C);
      if (A)
        N.outgoers().filter(function(re) {
          return re.isNode() && n.has(re);
        }).forEach(M);
      else if (A === null) {
        Ae("Detected double maximal shift for node `" + N.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  var L = 0;
  if (e.avoidOverlap)
    for (var R = 0; R < r.length; R++) {
      var I = r[R], X = I.layoutDimensions(e), V = X.w, Y = X.h;
      L = Math.max(L, V, Y);
    }
  var W = {}, Q = function(re) {
    if (W[re.id()])
      return W[re.id()];
    for (var de = Ln(re).depth, he = re.neighborhood(), ye = 0, me = 0, Se = 0; Se < he.length; Se++) {
      var Pe = he[Se];
      if (!(Pe.isEdge() || Pe.isParent() || !r.has(Pe))) {
        var Ie = Ln(Pe);
        if (Ie != null) {
          var Ge = Ie.index, Xe = Ie.depth;
          if (!(Ge == null || Xe == null)) {
            var Fe = y[Xe].length;
            Xe < de && (ye += Ge / Fe, me++);
          }
        }
      }
    }
    return me = Math.max(1, me), ye = ye / me, me === 0 && (ye = 0), W[re.id()] = ye, ye;
  }, J = function(re, de) {
    var he = Q(re), ye = Q(de), me = he - ye;
    return me === 0 ? tc(re.id(), de.id()) : me;
  };
  e.depthSort !== void 0 && (J = e.depthSort);
  for (var Z = y.length, $ = 0; $ < Z; $++)
    y[$].sort(J), P($);
  for (var te = [], z = 0; z < S.length; z++)
    te.push(S[z]);
  var O = function() {
    for (var re = 0; re < Z; re++)
      P(re);
  };
  te.length && (y.unshift(te), Z = y.length, O());
  for (var j = 0, H = 0; H < Z; H++)
    j = Math.max(y[H].length, j);
  var ne = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, oe = r.reduce(function(re, de) {
    return function(he) {
      return {
        w: re.w === -1 ? he.w : (re.w + he.w) / 2,
        h: re.h === -1 ? he.h : (re.h + he.h) / 2
      };
    }(de.boundingBox({
      includeLabels: e.nodeDimensionsIncludeLabels
    }));
  }, {
    w: -1,
    h: -1
  }), Re = Math.max(
    // only one depth
    Z === 1 ? 0 : (
      // inside a bounding box, no need for top & bottom padding
      u ? (s.h - e.padding * 2 - oe.h) / (Z - 1) : (s.h - e.padding * 2 - oe.h) / (Z + 1)
    ),
    L
  ), be = y.reduce(function(re, de) {
    return Math.max(re, de.length);
  }, 0), Ce = function(re) {
    var de = Ln(re), he = de.depth, ye = de.index;
    if (e.circle) {
      var me = Math.min(s.w / 2 / Z, s.h / 2 / Z);
      me = Math.max(me, L);
      var Se = me * he + me - (Z > 0 && y[0].length <= 3 ? me / 2 : 0), Pe = 2 * Math.PI / y[he].length * ye;
      return he === 0 && y[0].length === 1 && (Se = 1), {
        x: ne.x + Se * Math.cos(Pe),
        y: ne.y + Se * Math.sin(Pe)
      };
    } else {
      var Ie = y[he].length, Ge = Math.max(
        // only one depth
        Ie === 1 ? 0 : (
          // inside a bounding box, no need for left & right padding
          u ? (s.w - e.padding * 2 - oe.w) / ((e.grid ? be : Ie) - 1) : (s.w - e.padding * 2 - oe.w) / ((e.grid ? be : Ie) + 1)
        ),
        L
      ), Xe = {
        x: ne.x + (ye + 1 - (Ie + 1) / 2) * Ge,
        y: ne.y + (he + 1 - (Z + 1) / 2) * Re
      };
      return Xe;
    }
  };
  return n.nodes().layoutPositions(this, e, Ce), this;
};
var Sg = {
  fit: true,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true,
  // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: false,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  radius: void 0,
  // the radius of the circle
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function ed(e) {
  this.options = ve({}, Sg, e);
}
ed.prototype.run = function() {
  var e = this.options, t = e, n = e.cy, r = t.eles, a = t.counterclockwise !== void 0 ? !t.counterclockwise : t.clockwise, i = r.nodes().not(":parent");
  t.sort && (i = i.sort(t.sort));
  for (var o = bt(t.boundingBox ? t.boundingBox : {
    x1: 0,
    y1: 0,
    w: n.width(),
    h: n.height()
  }), u = {
    x: o.x1 + o.w / 2,
    y: o.y1 + o.h / 2
  }, l = t.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : t.sweep, s = l / Math.max(1, i.length - 1), c, d = 0, h = 0; h < i.length; h++) {
    var f = i[h], p = f.layoutDimensions(t), g = p.w, m = p.h;
    d = Math.max(d, g, m);
  }
  if (ee(t.radius) ? c = t.radius : i.length <= 1 ? c = 0 : c = Math.min(o.h, o.w) / 2 - d, i.length > 1 && t.avoidOverlap) {
    d *= 1.75;
    var v = Math.cos(s) - Math.cos(0), y = Math.sin(s) - Math.sin(0), b = Math.sqrt(d * d / (v * v + y * y));
    c = Math.max(b, c);
  }
  var w = function(T, S) {
    var x = t.startAngle + S * s * (a ? 1 : -1), _ = c * Math.cos(x), P = c * Math.sin(x), B = {
      x: u.x + _,
      y: u.y + P
    };
    return B;
  };
  return r.nodes().layoutPositions(this, t, w), this;
};
var kg = {
  fit: true,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: false,
  // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10,
  // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: false,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  height: void 0,
  // height of layout area (overrides container height)
  width: void 0,
  // width of layout area (overrides container width)
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  concentric: function(e) {
    return e.degree();
  },
  levelWidth: function(e) {
    return e.maxDegree() / 4;
  },
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function td(e) {
  this.options = ve({}, kg, e);
}
td.prototype.run = function() {
  for (var e = this.options, t = e, n = t.counterclockwise !== void 0 ? !t.counterclockwise : t.clockwise, r = e.cy, a = t.eles, i = a.nodes().not(":parent"), o = bt(t.boundingBox ? t.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  }), u = {
    x: o.x1 + o.w / 2,
    y: o.y1 + o.h / 2
  }, l = [], s = 0, c = 0; c < i.length; c++) {
    var d = i[c], h = void 0;
    h = t.concentric(d), l.push({
      value: h,
      node: d
    }), d._private.scratch.concentric = h;
  }
  i.updateStyle();
  for (var f = 0; f < i.length; f++) {
    var p = i[f], g = p.layoutDimensions(t);
    s = Math.max(s, g.w, g.h);
  }
  l.sort(function(oe, Re) {
    return Re.value - oe.value;
  });
  for (var m = t.levelWidth(i), v = [[]], y = v[0], b = 0; b < l.length; b++) {
    var w = l[b];
    if (y.length > 0) {
      var T = Math.abs(y[0].value - w.value);
      T >= m && (y = [], v.push(y));
    }
    y.push(w);
  }
  var S = s + t.minNodeSpacing;
  if (!t.avoidOverlap) {
    var x = v.length > 0 && v[0].length > 1, _ = Math.min(o.w, o.h) / 2 - S, P = _ / (v.length + x ? 1 : 0);
    S = Math.min(S, P);
  }
  for (var B = 0, k = 0; k < v.length; k++) {
    var C = v[k], M = t.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / C.length : t.sweep, D = C.dTheta = M / Math.max(1, C.length - 1);
    if (C.length > 1 && t.avoidOverlap) {
      var N = Math.cos(D) - Math.cos(0), A = Math.sin(D) - Math.sin(0), L = Math.sqrt(S * S / (N * N + A * A));
      B = Math.max(L, B);
    }
    C.r = B, B += S;
  }
  if (t.equidistant) {
    for (var R = 0, I = 0, X = 0; X < v.length; X++) {
      var V = v[X], Y = V.r - I;
      R = Math.max(R, Y);
    }
    I = 0;
    for (var W = 0; W < v.length; W++) {
      var Q = v[W];
      W === 0 && (I = Q.r), Q.r = I, I += R;
    }
  }
  for (var J = {}, Z = 0; Z < v.length; Z++)
    for (var $ = v[Z], te = $.dTheta, z = $.r, O = 0; O < $.length; O++) {
      var j = $[O], H = t.startAngle + (n ? 1 : -1) * te * O, ne = {
        x: u.x + z * Math.cos(H),
        y: u.y + z * Math.sin(H)
      };
      J[j.node.id()] = ne;
    }
  return a.nodes().layoutPositions(this, t, function(oe) {
    var Re = oe.id();
    return J[Re];
  }), this;
};
var go;
var _g = {
  // Called on `layoutready`
  ready: function() {
  },
  // Called on `layoutstop`
  stop: function() {
  },
  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: true,
  // Easing of the animation for animate:'end'
  animationEasing: void 0,
  // The duration of the animation for animate:'end'
  animationDuration: void 0,
  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter: function(e, t) {
    return true;
  },
  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 250,
  // Number of iterations between consecutive screen positions update
  refresh: 20,
  // Whether to fit the network view after when done
  fit: true,
  // Padding on fit
  padding: 30,
  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: void 0,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: false,
  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: false,
  // Extra spacing between components in non-compound graphs
  componentSpacing: 40,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function(e) {
    return 2048;
  },
  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,
  // Ideal edge (non nested) length
  idealEdgeLength: function(e) {
    return 32;
  },
  // Divisor to compute edge forces
  edgeElasticity: function(e) {
    return 32;
  },
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,
  // Gravity force (constant)
  gravity: 1,
  // Maximum number of iterations to perform
  numIter: 1e3,
  // Initial temperature (maximum node displacement)
  initialTemp: 1e3,
  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,
  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1
};
function Ua(e) {
  this.options = ve({}, _g, e), this.options.layout = this;
  var t = this.options.eles.nodes(), n = this.options.eles.edges(), r = n.filter(function(a) {
    var i = a.source().data("id"), o = a.target().data("id"), u = t.some(function(s) {
      return s.data("id") === i;
    }), l = t.some(function(s) {
      return s.data("id") === o;
    });
    return !u || !l;
  });
  this.options.eles = this.options.eles.not(r);
}
Ua.prototype.run = function() {
  var e = this.options, t = e.cy, n = this;
  n.stopped = false, (e.animate === true || e.animate === false) && n.emit({
    type: "layoutstart",
    layout: n
  }), e.debug === true ? go = true : go = false;
  var r = Bg(t, n, e);
  go && Mg(r), e.randomize && Ag(r);
  var a = Gt(), i = function() {
    Rg(r, t, e), e.fit === true && t.fit(e.padding);
  }, o = function(d) {
    return !(n.stopped || d >= e.numIter || (Ig(r, e), r.temperature = r.temperature * e.coolingFactor, r.temperature < e.minTemp));
  }, u = function() {
    if (e.animate === true || e.animate === false)
      i(), n.one("layoutstop", e.stop), n.emit({
        type: "layoutstop",
        layout: n
      });
    else {
      var d = e.eles.nodes(), h = rd(r, e, d);
      d.layoutPositions(n, e, h);
    }
  }, l = 0, s = true;
  if (e.animate === true) {
    var c = function() {
      for (var d = 0; s && d < e.refresh; )
        s = o(l), l++, d++;
      if (!s)
        Cu(r, e), u();
      else {
        var h = Gt();
        h - a >= e.animationThreshold && i(), ma(c);
      }
    };
    c();
  } else {
    for (; s; )
      s = o(l), l++;
    Cu(r, e), u();
  }
  return this;
};
Ua.prototype.stop = function() {
  return this.stopped = true, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
Ua.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var Bg = function(e, t, n) {
  for (var r = n.eles.edges(), a = n.eles.nodes(), i = bt(n.boundingBox ? n.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), o = {
    isCompound: e.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: a.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: r.size(),
    temperature: n.initialTemp,
    clientWidth: i.w,
    clientHeight: i.h,
    boundingBox: i
  }, u = n.eles.components(), l = {}, s = 0; s < u.length; s++)
    for (var c = u[s], d = 0; d < c.length; d++) {
      var h = c[d];
      l[h.id()] = s;
    }
  for (var s = 0; s < o.nodeSize; s++) {
    var f = a[s], p = f.layoutDimensions(n), g = {};
    g.isLocked = f.locked(), g.id = f.data("id"), g.parentId = f.data("parent"), g.cmptId = l[f.id()], g.children = [], g.positionX = f.position("x"), g.positionY = f.position("y"), g.offsetX = 0, g.offsetY = 0, g.height = p.w, g.width = p.h, g.maxX = g.positionX + g.width / 2, g.minX = g.positionX - g.width / 2, g.maxY = g.positionY + g.height / 2, g.minY = g.positionY - g.height / 2, g.padLeft = parseFloat(f.style("padding")), g.padRight = parseFloat(f.style("padding")), g.padTop = parseFloat(f.style("padding")), g.padBottom = parseFloat(f.style("padding")), g.nodeRepulsion = qe(n.nodeRepulsion) ? n.nodeRepulsion(f) : n.nodeRepulsion, o.layoutNodes.push(g), o.idToIndex[g.id] = s;
  }
  for (var m = [], v = 0, y = -1, b = [], s = 0; s < o.nodeSize; s++) {
    var f = o.layoutNodes[s], w = f.parentId;
    w != null ? o.layoutNodes[o.idToIndex[w]].children.push(f.id) : (m[++y] = f.id, b.push(f.id));
  }
  for (o.graphSet.push(b); v <= y; ) {
    var T = m[v++], S = o.idToIndex[T], h = o.layoutNodes[S], x = h.children;
    if (x.length > 0) {
      o.graphSet.push(x);
      for (var s = 0; s < x.length; s++)
        m[++y] = x[s];
    }
  }
  for (var s = 0; s < o.graphSet.length; s++)
    for (var _ = o.graphSet[s], d = 0; d < _.length; d++) {
      var P = o.idToIndex[_[d]];
      o.indexToGraph[P] = s;
    }
  for (var s = 0; s < o.edgeSize; s++) {
    var B = r[s], k = {};
    k.id = B.data("id"), k.sourceId = B.data("source"), k.targetId = B.data("target");
    var C = qe(n.idealEdgeLength) ? n.idealEdgeLength(B) : n.idealEdgeLength, M = qe(n.edgeElasticity) ? n.edgeElasticity(B) : n.edgeElasticity, D = o.idToIndex[k.sourceId], N = o.idToIndex[k.targetId], A = o.indexToGraph[D], L = o.indexToGraph[N];
    if (A != L) {
      for (var R = Dg(k.sourceId, k.targetId, o), I = o.graphSet[R], X = 0, g = o.layoutNodes[D]; I.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], X++;
      for (g = o.layoutNodes[N]; I.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], X++;
      C *= X * n.nestingFactor;
    }
    k.idealLength = C, k.elasticity = M, o.layoutEdges.push(k);
  }
  return o;
};
var Dg = function(e, t, n) {
  var r = nd(e, t, 0, n);
  return 2 > r.count ? 0 : r.graph;
};
var nd = function(e, t, n, r) {
  var a = r.graphSet[n];
  if (-1 < a.indexOf(e) && -1 < a.indexOf(t))
    return {
      count: 2,
      graph: n
    };
  for (var i = 0, o = 0; o < a.length; o++) {
    var u = a[o], l = r.idToIndex[u], s = r.layoutNodes[l].children;
    if (s.length !== 0) {
      var c = r.indexToGraph[r.idToIndex[s[0]]], d = nd(e, t, c, r);
      if (d.count !== 0)
        if (d.count === 1) {
          if (i++, i === 2)
            break;
        } else
          return d;
    }
  }
  return {
    count: i,
    graph: n
  };
};
var Mg;
var Ag = function(e, t) {
  for (var n = e.clientWidth, r = e.clientHeight, a = 0; a < e.nodeSize; a++) {
    var i = e.layoutNodes[a];
    i.children.length === 0 && !i.isLocked && (i.positionX = Math.random() * n, i.positionY = Math.random() * r);
  }
};
var rd = function(e, t, n) {
  var r = e.boundingBox, a = {
    x1: 1 / 0,
    x2: -1 / 0,
    y1: 1 / 0,
    y2: -1 / 0
  };
  return t.boundingBox && (n.forEach(function(i) {
    var o = e.layoutNodes[e.idToIndex[i.data("id")]];
    a.x1 = Math.min(a.x1, o.positionX), a.x2 = Math.max(a.x2, o.positionX), a.y1 = Math.min(a.y1, o.positionY), a.y2 = Math.max(a.y2, o.positionY);
  }), a.w = a.x2 - a.x1, a.h = a.y2 - a.y1), function(i, o) {
    var u = e.layoutNodes[e.idToIndex[i.data("id")]];
    if (t.boundingBox) {
      var l = (u.positionX - a.x1) / a.w, s = (u.positionY - a.y1) / a.h;
      return {
        x: r.x1 + l * r.w,
        y: r.y1 + s * r.h
      };
    } else
      return {
        x: u.positionX,
        y: u.positionY
      };
  };
};
var Rg = function(e, t, n) {
  var r = n.layout, a = n.eles.nodes(), i = rd(e, n, a);
  a.positions(i), e.ready !== true && (e.ready = true, r.one("layoutready", n.ready), r.emit({
    type: "layoutready",
    layout: this
  }));
};
var Ig = function(e, t, n) {
  Ng(e, t), Og(e), Vg(e, t), Fg(e), jg(e);
};
var Ng = function(e, t) {
  for (var n = 0; n < e.graphSet.length; n++)
    for (var r = e.graphSet[n], a = r.length, i = 0; i < a; i++)
      for (var o = e.layoutNodes[e.idToIndex[r[i]]], u = i + 1; u < a; u++) {
        var l = e.layoutNodes[e.idToIndex[r[u]]];
        Lg(o, l, e, t);
      }
};
var Tu = function(e) {
  return -1 + 2 * e * Math.random();
};
var Lg = function(e, t, n, r) {
  var a = e.cmptId, i = t.cmptId;
  if (!(a !== i && !n.isCompound)) {
    var o = t.positionX - e.positionX, u = t.positionY - e.positionY, l = 1;
    o === 0 && u === 0 && (o = Tu(l), u = Tu(l));
    var s = zg(e, t, o, u);
    if (s > 0)
      var m = r.nodeOverlap * s, g = Math.sqrt(o * o + u * u), v = m * o / g, y = m * u / g;
    else
      var c = Pa(e, o, u), d = Pa(t, -1 * o, -1 * u), h = d.x - c.x, f = d.y - c.y, p = h * h + f * f, g = Math.sqrt(p), m = (e.nodeRepulsion + t.nodeRepulsion) / p, v = m * h / g, y = m * f / g;
    e.isLocked || (e.offsetX -= v, e.offsetY -= y), t.isLocked || (t.offsetX += v, t.offsetY += y);
  }
};
var zg = function(e, t, n, r) {
  if (n > 0)
    var a = e.maxX - t.minX;
  else
    var a = t.maxX - e.minX;
  if (r > 0)
    var i = e.maxY - t.minY;
  else
    var i = t.maxY - e.minY;
  return a >= 0 && i >= 0 ? Math.sqrt(a * a + i * i) : 0;
};
var Pa = function(e, t, n) {
  var r = e.positionX, a = e.positionY, i = e.height || 1, o = e.width || 1, u = n / t, l = i / o, s = {};
  return t === 0 && 0 < n || t === 0 && 0 > n ? (s.x = r, s.y = a + i / 2, s) : 0 < t && -1 * l <= u && u <= l ? (s.x = r + o / 2, s.y = a + o * n / 2 / t, s) : 0 > t && -1 * l <= u && u <= l ? (s.x = r - o / 2, s.y = a - o * n / 2 / t, s) : 0 < n && (u <= -1 * l || u >= l) ? (s.x = r + i * t / 2 / n, s.y = a + i / 2, s) : (0 > n && (u <= -1 * l || u >= l) && (s.x = r - i * t / 2 / n, s.y = a - i / 2), s);
};
var Og = function(e, t) {
  for (var n = 0; n < e.edgeSize; n++) {
    var r = e.layoutEdges[n], a = e.idToIndex[r.sourceId], i = e.layoutNodes[a], o = e.idToIndex[r.targetId], u = e.layoutNodes[o], l = u.positionX - i.positionX, s = u.positionY - i.positionY;
    if (!(l === 0 && s === 0)) {
      var c = Pa(i, l, s), d = Pa(u, -1 * l, -1 * s), h = d.x - c.x, f = d.y - c.y, p = Math.sqrt(h * h + f * f), g = Math.pow(r.idealLength - p, 2) / r.elasticity;
      if (p !== 0)
        var m = g * h / p, v = g * f / p;
      else
        var m = 0, v = 0;
      i.isLocked || (i.offsetX += m, i.offsetY += v), u.isLocked || (u.offsetX -= m, u.offsetY -= v);
    }
  }
};
var Vg = function(e, t) {
  if (t.gravity !== 0)
    for (var n = 1, r = 0; r < e.graphSet.length; r++) {
      var a = e.graphSet[r], i = a.length;
      if (r === 0)
        var l = e.clientHeight / 2, s = e.clientWidth / 2;
      else
        var o = e.layoutNodes[e.idToIndex[a[0]]], u = e.layoutNodes[e.idToIndex[o.parentId]], l = u.positionX, s = u.positionY;
      for (var c = 0; c < i; c++) {
        var d = e.layoutNodes[e.idToIndex[a[c]]];
        if (!d.isLocked) {
          var h = l - d.positionX, f = s - d.positionY, p = Math.sqrt(h * h + f * f);
          if (p > n) {
            var g = t.gravity * h / p, m = t.gravity * f / p;
            d.offsetX += g, d.offsetY += m;
          }
        }
      }
    }
};
var Fg = function(e, t) {
  var n = [], r = 0, a = -1;
  for (n.push.apply(n, e.graphSet[0]), a += e.graphSet[0].length; r <= a; ) {
    var i = n[r++], o = e.idToIndex[i], u = e.layoutNodes[o], l = u.children;
    if (0 < l.length && !u.isLocked) {
      for (var s = u.offsetX, c = u.offsetY, d = 0; d < l.length; d++) {
        var h = e.layoutNodes[e.idToIndex[l[d]]];
        h.offsetX += s, h.offsetY += c, n[++a] = l[d];
      }
      u.offsetX = 0, u.offsetY = 0;
    }
  }
};
var jg = function(e, t) {
  for (var n = 0; n < e.nodeSize; n++) {
    var r = e.layoutNodes[n];
    0 < r.children.length && (r.maxX = void 0, r.minX = void 0, r.maxY = void 0, r.minY = void 0);
  }
  for (var n = 0; n < e.nodeSize; n++) {
    var r = e.layoutNodes[n];
    if (!(0 < r.children.length || r.isLocked)) {
      var a = Xg(r.offsetX, r.offsetY, e.temperature);
      r.positionX += a.x, r.positionY += a.y, r.offsetX = 0, r.offsetY = 0, r.minX = r.positionX - r.width, r.maxX = r.positionX + r.width, r.minY = r.positionY - r.height, r.maxY = r.positionY + r.height, ad(r, e);
    }
  }
  for (var n = 0; n < e.nodeSize; n++) {
    var r = e.layoutNodes[n];
    0 < r.children.length && !r.isLocked && (r.positionX = (r.maxX + r.minX) / 2, r.positionY = (r.maxY + r.minY) / 2, r.width = r.maxX - r.minX, r.height = r.maxY - r.minY);
  }
};
var Xg = function(e, t, n) {
  var r = Math.sqrt(e * e + t * t);
  if (r > n)
    var a = {
      x: n * e / r,
      y: n * t / r
    };
  else
    var a = {
      x: e,
      y: t
    };
  return a;
};
var ad = function(e, t) {
  var n = e.parentId;
  if (n != null) {
    var r = t.layoutNodes[t.idToIndex[n]], a = false;
    if ((r.maxX == null || e.maxX + r.padRight > r.maxX) && (r.maxX = e.maxX + r.padRight, a = true), (r.minX == null || e.minX - r.padLeft < r.minX) && (r.minX = e.minX - r.padLeft, a = true), (r.maxY == null || e.maxY + r.padBottom > r.maxY) && (r.maxY = e.maxY + r.padBottom, a = true), (r.minY == null || e.minY - r.padTop < r.minY) && (r.minY = e.minY - r.padTop, a = true), a)
      return ad(r, t);
  }
};
var Cu = function(e, t) {
  for (var n = e.layoutNodes, r = [], a = 0; a < n.length; a++) {
    var i = n[a], o = i.cmptId, u = r[o] = r[o] || [];
    u.push(i);
  }
  for (var l = 0, a = 0; a < r.length; a++) {
    var s = r[a];
    if (s) {
      s.x1 = 1 / 0, s.x2 = -1 / 0, s.y1 = 1 / 0, s.y2 = -1 / 0;
      for (var c = 0; c < s.length; c++) {
        var d = s[c];
        s.x1 = Math.min(s.x1, d.positionX - d.width / 2), s.x2 = Math.max(s.x2, d.positionX + d.width / 2), s.y1 = Math.min(s.y1, d.positionY - d.height / 2), s.y2 = Math.max(s.y2, d.positionY + d.height / 2);
      }
      s.w = s.x2 - s.x1, s.h = s.y2 - s.y1, l += s.w * s.h;
    }
  }
  r.sort(function(v, y) {
    return y.w * y.h - v.w * v.h;
  });
  for (var h = 0, f = 0, p = 0, g = 0, m = Math.sqrt(l) * e.clientWidth / e.clientHeight, a = 0; a < r.length; a++) {
    var s = r[a];
    if (s) {
      for (var c = 0; c < s.length; c++) {
        var d = s[c];
        d.isLocked || (d.positionX += h - s.x1, d.positionY += f - s.y1);
      }
      h += s.w + t.componentSpacing, p += s.w + t.componentSpacing, g = Math.max(g, s.h), p > m && (f += g + t.componentSpacing, h = 0, p = 0, g = 0);
    }
  }
};
var Yg = {
  fit: true,
  // whether to fit the viewport to the graph
  padding: 30,
  // padding used on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true,
  // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10,
  // extra spacing around nodes when avoidOverlap: true
  nodeDimensionsIncludeLabels: false,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  condense: false,
  // uses all available space on false, uses minimal space on true
  rows: void 0,
  // force num of rows in the grid
  cols: void 0,
  // force num of columns in the grid
  position: function(e) {
  },
  // returns { row, col } for element
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function id(e) {
  this.options = ve({}, Yg, e);
}
id.prototype.run = function() {
  var e = this.options, t = e, n = e.cy, r = t.eles, a = r.nodes().not(":parent");
  t.sort && (a = a.sort(t.sort));
  var i = bt(t.boundingBox ? t.boundingBox : {
    x1: 0,
    y1: 0,
    w: n.width(),
    h: n.height()
  });
  if (i.h === 0 || i.w === 0)
    r.nodes().layoutPositions(this, t, function(W) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
  else {
    var o = a.size(), u = Math.sqrt(o * i.h / i.w), l = Math.round(u), s = Math.round(i.w / i.h * u), c = function(W) {
      if (W == null)
        return Math.min(l, s);
      var Q = Math.min(l, s);
      Q == l ? l = W : s = W;
    }, d = function(W) {
      if (W == null)
        return Math.max(l, s);
      var Q = Math.max(l, s);
      Q == l ? l = W : s = W;
    }, h = t.rows, f = t.cols != null ? t.cols : t.columns;
    if (h != null && f != null)
      l = h, s = f;
    else if (h != null && f == null)
      l = h, s = Math.ceil(o / l);
    else if (h == null && f != null)
      s = f, l = Math.ceil(o / s);
    else if (s * l > o) {
      var p = c(), g = d();
      (p - 1) * g >= o ? c(p - 1) : (g - 1) * p >= o && d(g - 1);
    } else
      for (; s * l < o; ) {
        var m = c(), v = d();
        (v + 1) * m >= o ? d(v + 1) : c(m + 1);
      }
    var y = i.w / s, b = i.h / l;
    if (t.condense && (y = 0, b = 0), t.avoidOverlap)
      for (var w = 0; w < a.length; w++) {
        var T = a[w], S = T._private.position;
        (S.x == null || S.y == null) && (S.x = 0, S.y = 0);
        var x = T.layoutDimensions(t), _ = t.avoidOverlapPadding, P = x.w + _, B = x.h + _;
        y = Math.max(y, P), b = Math.max(b, B);
      }
    for (var k = {}, C = function(W, Q) {
      return !!k["c-" + W + "-" + Q];
    }, M = function(W, Q) {
      k["c-" + W + "-" + Q] = true;
    }, D = 0, N = 0, A = function() {
      N++, N >= s && (N = 0, D++);
    }, L = {}, R = 0; R < a.length; R++) {
      var I = a[R], X = t.position(I);
      if (X && (X.row !== void 0 || X.col !== void 0)) {
        var V = {
          row: X.row,
          col: X.col
        };
        if (V.col === void 0)
          for (V.col = 0; C(V.row, V.col); )
            V.col++;
        else if (V.row === void 0)
          for (V.row = 0; C(V.row, V.col); )
            V.row++;
        L[I.id()] = V, M(V.row, V.col);
      }
    }
    var Y = function(W, Q) {
      var J, Z;
      if (W.locked() || W.isParent())
        return false;
      var $ = L[W.id()];
      if ($)
        J = $.col * y + y / 2 + i.x1, Z = $.row * b + b / 2 + i.y1;
      else {
        for (; C(D, N); )
          A();
        J = N * y + y / 2 + i.x1, Z = D * b + b / 2 + i.y1, M(D, N), A();
      }
      return {
        x: J,
        y: Z
      };
    };
    a.layoutPositions(this, t, Y);
  }
  return this;
};
var qg = {
  ready: function() {
  },
  // on layoutready
  stop: function() {
  }
  // on layoutstop
};
function hs(e) {
  this.options = ve({}, qg, e);
}
hs.prototype.run = function() {
  var e = this.options, t = e.eles, n = this;
  return e.cy, n.emit("layoutstart"), t.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), n.one("layoutready", e.ready), n.emit("layoutready"), n.one("layoutstop", e.stop), n.emit("layoutstop"), this;
};
hs.prototype.stop = function() {
  return this;
};
var Ug = {
  positions: void 0,
  // map of (node id) => (position obj); or function(node){ return somPos; }
  zoom: void 0,
  // the zoom level to set (prob want fit = false if set)
  pan: void 0,
  // the pan level to set (prob want fit = false if set)
  fit: true,
  // whether to fit to viewport
  padding: 30,
  // padding on fit
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function od(e) {
  this.options = ve({}, Ug, e);
}
od.prototype.run = function() {
  var e = this.options, t = e.eles, n = t.nodes(), r = qe(e.positions);
  function a(i) {
    if (e.positions == null)
      return cf(i.position());
    if (r)
      return e.positions(i);
    var o = e.positions[i._private.data.id];
    return o ?? null;
  }
  return n.layoutPositions(this, e, function(i, o) {
    var u = a(i);
    return i.locked() || u == null ? false : u;
  }), this;
};
var Wg = {
  fit: true,
  // whether to fit to viewport
  padding: 30,
  // fit padding
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function sd(e) {
  this.options = ve({}, Wg, e);
}
sd.prototype.run = function() {
  var e = this.options, t = e.cy, n = e.eles, r = bt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: t.width(),
    h: t.height()
  }), a = function(i, o) {
    return {
      x: r.x1 + Math.round(Math.random() * r.w),
      y: r.y1 + Math.round(Math.random() * r.h)
    };
  };
  return n.nodes().layoutPositions(this, e, a), this;
};
var Gg = [{
  name: "breadthfirst",
  impl: Jc
}, {
  name: "circle",
  impl: ed
}, {
  name: "concentric",
  impl: td
}, {
  name: "cose",
  impl: Ua
}, {
  name: "grid",
  impl: id
}, {
  name: "null",
  impl: hs
}, {
  name: "preset",
  impl: od
}, {
  name: "random",
  impl: sd
}];
function ld(e) {
  this.options = e, this.notifications = 0;
}
var Pu = function() {
};
var Su = function() {
  throw new Error("A headless instance can not render images");
};
ld.prototype = {
  recalculateRenderedStyle: Pu,
  notify: function() {
    this.notifications++;
  },
  init: Pu,
  isHeadless: function() {
    return true;
  },
  png: Su,
  jpg: Su
};
var fs = {};
fs.arrowShapeWidth = 0.3;
fs.registerArrowShapes = function() {
  var e = this.arrowShapes = {}, t = this, n = function(l, s, c, d, h, f, p) {
    var g = h.x - c / 2 - p, m = h.x + c / 2 + p, v = h.y - c / 2 - p, y = h.y + c / 2 + p, b = g <= l && l <= m && v <= s && s <= y;
    return b;
  }, r = function(l, s, c, d, h) {
    var f = l * Math.cos(d) - s * Math.sin(d), p = l * Math.sin(d) + s * Math.cos(d), g = f * c, m = p * c, v = g + h.x, y = m + h.y;
    return {
      x: v,
      y
    };
  }, a = function(l, s, c, d) {
    for (var h = [], f = 0; f < l.length; f += 2) {
      var p = l[f], g = l[f + 1];
      h.push(r(p, g, s, c, d));
    }
    return h;
  }, i = function(l) {
    for (var s = [], c = 0; c < l.length; c++) {
      var d = l[c];
      s.push(d.x, d.y);
    }
    return s;
  }, o = function(l) {
    return l.pstyle("width").pfValue * l.pstyle("arrow-scale").pfValue * 2;
  }, u = function(l, s) {
    fe(s) && (s = e[s]), e[l] = ve({
      name: l,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function(c, d, h, f, p, g) {
        var m = i(a(this.points, h + 2 * g, f, p)), v = Ct(c, d, m);
        return v;
      },
      roughCollide: n,
      draw: function(c, d, h, f) {
        var p = a(this.points, d, h, f);
        t.arrowShapeImpl("polygon")(c, p);
      },
      spacing: function(c) {
        return 0;
      },
      gap: o
    }, s);
  };
  u("none", {
    collide: ba,
    roughCollide: ba,
    draw: $o,
    spacing: Fs,
    gap: Fs
  }), u("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  }), u("arrow", "triangle"), u("triangle-backcurve", {
    points: e.triangle.points,
    controlPoint: [0, -0.15],
    roughCollide: n,
    draw: function(l, s, c, d, h) {
      var f = a(this.points, s, c, d), p = this.controlPoint, g = r(p[0], p[1], s, c, d);
      t.arrowShapeImpl(this.name)(l, f, g);
    },
    gap: function(l) {
      return o(l) * 0.8;
    }
  }), u("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function(l, s, c, d, h, f, p) {
      var g = i(a(this.points, c + 2 * p, d, h)), m = i(a(this.pointsTee, c + 2 * p, d, h)), v = Ct(l, s, g) || Ct(l, s, m);
      return v;
    },
    draw: function(l, s, c, d, h) {
      var f = a(this.points, s, c, d), p = a(this.pointsTee, s, c, d);
      t.arrowShapeImpl(this.name)(l, f, p);
    }
  }), u("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function(l, s, c, d, h, f, p) {
      var g = h, m = Math.pow(g.x - l, 2) + Math.pow(g.y - s, 2) <= Math.pow((c + 2 * p) * this.radius, 2), v = i(a(this.points, c + 2 * p, d, h));
      return Ct(l, s, v) || m;
    },
    draw: function(l, s, c, d, h) {
      var f = a(this.pointsTr, s, c, d);
      t.arrowShapeImpl(this.name)(l, f, d.x, d.y, this.radius * s);
    },
    spacing: function(l) {
      return t.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
    }
  }), u("triangle-cross", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    baseCrossLinePts: [
      -0.15,
      -0.4,
      // first half of the rectangle
      -0.15,
      -0.4,
      0.15,
      -0.4,
      // second half of the rectangle
      0.15,
      -0.4
    ],
    crossLinePts: function(l, s) {
      var c = this.baseCrossLinePts.slice(), d = s / l, h = 3, f = 5;
      return c[h] = c[h] - d, c[f] = c[f] - d, c;
    },
    collide: function(l, s, c, d, h, f, p) {
      var g = i(a(this.points, c + 2 * p, d, h)), m = i(a(this.crossLinePts(c, f), c + 2 * p, d, h)), v = Ct(l, s, g) || Ct(l, s, m);
      return v;
    },
    draw: function(l, s, c, d, h) {
      var f = a(this.points, s, c, d), p = a(this.crossLinePts(s, h), s, c, d);
      t.arrowShapeImpl(this.name)(l, f, p);
    }
  }), u("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function(l) {
      return o(l) * 0.525;
    }
  }), u("circle", {
    radius: 0.15,
    collide: function(l, s, c, d, h, f, p) {
      var g = h, m = Math.pow(g.x - l, 2) + Math.pow(g.y - s, 2) <= Math.pow((c + 2 * p) * this.radius, 2);
      return m;
    },
    draw: function(l, s, c, d, h) {
      t.arrowShapeImpl(this.name)(l, d.x, d.y, this.radius * s);
    },
    spacing: function(l) {
      return t.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
    }
  }), u("tee", {
    points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
    spacing: function(l) {
      return 1;
    },
    gap: function(l) {
      return 1;
    }
  }), u("square", {
    points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
  }), u("diamond", {
    points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
    gap: function(l) {
      return l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
    }
  }), u("chevron", {
    points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
    gap: function(l) {
      return 0.95 * l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
    }
  });
};
var Dn = {};
Dn.projectIntoViewport = function(e, t) {
  var n = this.cy, r = this.findContainerClientCoords(), a = r[0], i = r[1], o = r[4], u = n.pan(), l = n.zoom(), s = ((e - a) / o - u.x) / l, c = ((t - i) / o - u.y) / l;
  return [s, c];
};
Dn.findContainerClientCoords = function() {
  if (this.containerBB)
    return this.containerBB;
  var e = this.container, t = e.getBoundingClientRect(), n = this.cy.window().getComputedStyle(e), r = function(m) {
    return parseFloat(n.getPropertyValue(m));
  }, a = {
    left: r("padding-left"),
    right: r("padding-right"),
    top: r("padding-top"),
    bottom: r("padding-bottom")
  }, i = {
    left: r("border-left-width"),
    right: r("border-right-width"),
    top: r("border-top-width"),
    bottom: r("border-bottom-width")
  }, o = e.clientWidth, u = e.clientHeight, l = a.left + a.right, s = a.top + a.bottom, c = i.left + i.right, d = t.width / (o + c), h = o - l, f = u - s, p = t.left + a.left + i.left, g = t.top + a.top + i.top;
  return this.containerBB = [p, g, h, f, d];
};
Dn.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
Dn.findNearestElement = function(e, t, n, r) {
  return this.findNearestElements(e, t, n, r)[0];
};
Dn.findNearestElements = function(e, t, n, r) {
  var a = this, i = this, o = i.getCachedZSortedEles(), u = [], l = i.cy.zoom(), s = i.cy.hasCompoundNodes(), c = (r ? 24 : 8) / l, d = (r ? 8 : 2) / l, h = (r ? 8 : 2) / l, f = 1 / 0, p, g;
  n && (o = o.interactive);
  function m(x, _) {
    if (x.isNode()) {
      if (g)
        return;
      g = x, u.push(x);
    }
    if (x.isEdge() && (_ == null || _ < f))
      if (p) {
        if (p.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value && p.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value) {
          for (var P = 0; P < u.length; P++)
            if (u[P].isEdge()) {
              u[P] = x, p = x, f = _ ?? f;
              break;
            }
        }
      } else
        u.push(x), p = x, f = _ ?? f;
  }
  function v(x) {
    var _ = x.outerWidth() + 2 * d, P = x.outerHeight() + 2 * d, B = _ / 2, k = P / 2, C = x.position(), M = x.pstyle("corner-radius").value === "auto" ? "auto" : x.pstyle("corner-radius").pfValue, D = x._private.rscratch;
    if (C.x - B <= e && e <= C.x + B && C.y - k <= t && t <= C.y + k) {
      var N = i.nodeShapes[a.getNodeShape(x)];
      if (N.checkPoint(e, t, 0, _, P, C.x, C.y, M, D))
        return m(x, 0), true;
    }
  }
  function y(x) {
    var _ = x._private, P = _.rscratch, B = x.pstyle("width").pfValue, k = x.pstyle("arrow-scale").value, C = B / 2 + c, M = C * C, D = C * 2, N = _.source, A = _.target, L;
    if (P.edgeType === "segments" || P.edgeType === "straight" || P.edgeType === "haystack") {
      for (var R = P.allpts, I = 0; I + 3 < R.length; I += 2)
        if (Sf(e, t, R[I], R[I + 1], R[I + 2], R[I + 3], D) && M > (L = Mf(e, t, R[I], R[I + 1], R[I + 2], R[I + 3])))
          return m(x, L), true;
    } else if (P.edgeType === "bezier" || P.edgeType === "multibezier" || P.edgeType === "self" || P.edgeType === "compound") {
      for (var R = P.allpts, I = 0; I + 5 < P.allpts.length; I += 4)
        if (kf(e, t, R[I], R[I + 1], R[I + 2], R[I + 3], R[I + 4], R[I + 5], D) && M > (L = Df(e, t, R[I], R[I + 1], R[I + 2], R[I + 3], R[I + 4], R[I + 5])))
          return m(x, L), true;
    }
    for (var N = N || _.source, A = A || _.target, X = a.getArrowWidth(B, k), V = [{
      name: "source",
      x: P.arrowStartX,
      y: P.arrowStartY,
      angle: P.srcArrowAngle
    }, {
      name: "target",
      x: P.arrowEndX,
      y: P.arrowEndY,
      angle: P.tgtArrowAngle
    }, {
      name: "mid-source",
      x: P.midX,
      y: P.midY,
      angle: P.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: P.midX,
      y: P.midY,
      angle: P.midtgtArrowAngle
    }], I = 0; I < V.length; I++) {
      var Y = V[I], W = i.arrowShapes[x.pstyle(Y.name + "-arrow-shape").value], Q = x.pstyle("width").pfValue;
      if (W.roughCollide(e, t, X, Y.angle, {
        x: Y.x,
        y: Y.y
      }, Q, c) && W.collide(e, t, X, Y.angle, {
        x: Y.x,
        y: Y.y
      }, Q, c))
        return m(x), true;
    }
    s && u.length > 0 && (v(N), v(A));
  }
  function b(x, _, P) {
    return Tt(x, _, P);
  }
  function w(x, _) {
    var P = x._private, B = h, k;
    _ ? k = _ + "-" : k = "", x.boundingBox();
    var C = P.labelBounds[_ || "main"], M = x.pstyle(k + "label").value, D = x.pstyle("text-events").strValue === "yes";
    if (!(!D || !M)) {
      var N = b(P.rscratch, "labelX", _), A = b(P.rscratch, "labelY", _), L = b(P.rscratch, "labelAngle", _), R = x.pstyle(k + "text-margin-x").pfValue, I = x.pstyle(k + "text-margin-y").pfValue, X = C.x1 - B - R, V = C.x2 + B - R, Y = C.y1 - B - I, W = C.y2 + B - I;
      if (L) {
        var Q = Math.cos(L), J = Math.sin(L), Z = function(H, ne) {
          return H = H - N, ne = ne - A, {
            x: H * Q - ne * J + N,
            y: H * J + ne * Q + A
          };
        }, $ = Z(X, Y), te = Z(X, W), z = Z(V, Y), O = Z(V, W), j = [
          // with the margin added after the rotation is applied
          $.x + R,
          $.y + I,
          z.x + R,
          z.y + I,
          O.x + R,
          O.y + I,
          te.x + R,
          te.y + I
        ];
        if (Ct(e, t, j))
          return m(x), true;
      } else if (Zn(C, e, t))
        return m(x), true;
    }
  }
  for (var T = o.length - 1; T >= 0; T--) {
    var S = o[T];
    S.isNode() ? v(S) || w(S) : y(S) || w(S) || w(S, "source") || w(S, "target");
  }
  return u;
};
Dn.getAllInBox = function(e, t, n, r) {
  var a = this.getCachedZSortedEles().interactive, i = this.cy.zoom(), o = 2 / i, u = [], l = Math.min(e, n), s = Math.max(e, n), c = Math.min(t, r), d = Math.max(t, r);
  e = l, n = s, t = c, r = d;
  var h = bt({
    x1: e,
    y1: t,
    x2: n,
    y2: r
  });
  function f(M, D, N) {
    return Tt(M, D, N);
  }
  function p(M, D) {
    var N = M._private, A = o, L = "";
    M.boundingBox();
    var R = N.labelBounds.main;
    if (!R)
      return null;
    var I = f(N.rscratch, "labelX", D), X = f(N.rscratch, "labelY", D), V = f(N.rscratch, "labelAngle", D), Y = M.pstyle(L + "text-margin-x").pfValue, W = M.pstyle(L + "text-margin-y").pfValue, Q = R.x1 - A - Y, J = R.x2 + A - Y, Z = R.y1 - A - W, $ = R.y2 + A - W;
    if (V) {
      var te = Math.cos(V), z = Math.sin(V), O = function(j, H) {
        return j = j - I, H = H - X, {
          x: j * te - H * z + I,
          y: j * z + H * te + X
        };
      };
      return [O(Q, Z), O(J, Z), O(J, $), O(Q, $)];
    } else
      return [{
        x: Q,
        y: Z
      }, {
        x: J,
        y: Z
      }, {
        x: J,
        y: $
      }, {
        x: Q,
        y: $
      }];
  }
  for (var g = 0; g < a.length; g++) {
    var m = a[g];
    if (m.isNode()) {
      var v = m, y = v.pstyle("text-events").strValue === "yes", b = v.pstyle("box-select-labels").strValue === "yes", w = v.boundingBox({
        includeNodes: true,
        includeEdges: false,
        includeLabels: b && y
      });
      if (ns(h, w)) {
        var T = p(v), S = [{
          x: h.x1,
          y: h.y1
        }, {
          x: h.x2,
          y: h.y1
        }, {
          x: h.x2,
          y: h.y2
        }, {
          x: h.x1,
          y: h.y2
        }];
        (!T || zf(T, S)) && u.push(v);
      }
    } else {
      var x = m, _ = x._private, P = _.rscratch;
      if (P.startX != null && P.startY != null && !Zn(h, P.startX, P.startY) || P.endX != null && P.endY != null && !Zn(h, P.endX, P.endY))
        continue;
      if (P.edgeType === "bezier" || P.edgeType === "multibezier" || P.edgeType === "self" || P.edgeType === "compound" || P.edgeType === "segments" || P.edgeType === "haystack") {
        for (var B = _.rstyle.bezierPts || _.rstyle.linePts || _.rstyle.haystackPts, k = true, C = 0; C < B.length; C++)
          if (!wf(h, B[C])) {
            k = false;
            break;
          }
        k && u.push(x);
      } else (P.edgeType === "haystack" || P.edgeType === "straight") && u.push(x);
    }
  }
  return u;
};
var Sa = {};
Sa.calculateArrowAngles = function(e) {
  var t = e._private.rscratch, n = t.edgeType === "haystack", r = t.edgeType === "bezier", a = t.edgeType === "multibezier", i = t.edgeType === "segments", o = t.edgeType === "compound", u = t.edgeType === "self", l, s, c, d, h, f, v, y;
  if (n ? (c = t.haystackPts[0], d = t.haystackPts[1], h = t.haystackPts[2], f = t.haystackPts[3]) : (c = t.arrowStartX, d = t.arrowStartY, h = t.arrowEndX, f = t.arrowEndY), v = t.midX, y = t.midY, i)
    l = c - t.segpts[0], s = d - t.segpts[1];
  else if (a || o || u || r) {
    var p = t.allpts, g = at(p[0], p[2], p[4], 0.1), m = at(p[1], p[3], p[5], 0.1);
    l = c - g, s = d - m;
  } else
    l = c - v, s = d - y;
  t.srcArrowAngle = Kr(l, s);
  var v = t.midX, y = t.midY;
  if (n && (v = (c + h) / 2, y = (d + f) / 2), l = h - c, s = f - d, i) {
    var p = t.allpts;
    if (p.length / 2 % 2 === 0) {
      var b = p.length / 2, w = b - 2;
      l = p[b] - p[w], s = p[b + 1] - p[w + 1];
    } else if (t.isRound)
      l = t.midVector[1], s = -t.midVector[0];
    else {
      var b = p.length / 2 - 1, w = b - 2;
      l = p[b] - p[w], s = p[b + 1] - p[w + 1];
    }
  } else if (a || o || u) {
    var p = t.allpts, T = t.ctrlpts, S, x, _, P;
    if (T.length / 2 % 2 === 0) {
      var B = p.length / 2 - 1, k = B + 2, C = k + 2;
      S = at(p[B], p[k], p[C], 0), x = at(p[B + 1], p[k + 1], p[C + 1], 0), _ = at(p[B], p[k], p[C], 1e-4), P = at(p[B + 1], p[k + 1], p[C + 1], 1e-4);
    } else {
      var k = p.length / 2 - 1, B = k - 2, C = k + 2;
      S = at(p[B], p[k], p[C], 0.4999), x = at(p[B + 1], p[k + 1], p[C + 1], 0.4999), _ = at(p[B], p[k], p[C], 0.5), P = at(p[B + 1], p[k + 1], p[C + 1], 0.5);
    }
    l = _ - S, s = P - x;
  }
  if (t.midtgtArrowAngle = Kr(l, s), t.midDispX = l, t.midDispY = s, l *= -1, s *= -1, i) {
    var p = t.allpts;
    if (p.length / 2 % 2 !== 0 && !t.isRound) {
      var b = p.length / 2 - 1, M = b + 2;
      l = -(p[M] - p[b]), s = -(p[M + 1] - p[b + 1]);
    }
  }
  if (t.midsrcArrowAngle = Kr(l, s), i)
    l = h - t.segpts[t.segpts.length - 2], s = f - t.segpts[t.segpts.length - 1];
  else if (a || o || u || r) {
    var p = t.allpts, D = p.length, g = at(p[D - 6], p[D - 4], p[D - 2], 0.9), m = at(p[D - 5], p[D - 3], p[D - 1], 0.9);
    l = h - g, s = f - m;
  } else
    l = h - v, s = f - y;
  t.tgtArrowAngle = Kr(l, s);
};
Sa.getArrowWidth = Sa.getArrowHeight = function(e, t) {
  var n = this.arrowWidthCache = this.arrowWidthCache || {}, r = n[e + ", " + t];
  return r || (r = Math.max(Math.pow(e * 13.37, 0.9), 29) * t, n[e + ", " + t] = r, r);
};
var Oo;
var Vo;
var Vt = {};
var _t = {};
var ku;
var _u;
var Tn;
var fa;
var qt;
var mn;
var wn;
var zt;
var zn;
var ra;
var ud;
var cd;
var Fo;
var jo;
var Bu;
var Du = function(e, t, n) {
  n.x = t.x - e.x, n.y = t.y - e.y, n.len = Math.sqrt(n.x * n.x + n.y * n.y), n.nx = n.x / n.len, n.ny = n.y / n.len, n.ang = Math.atan2(n.ny, n.nx);
};
var Hg = function(e, t) {
  t.x = e.x * -1, t.y = e.y * -1, t.nx = e.nx * -1, t.ny = e.ny * -1, t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
};
var Kg = function(e, t, n, r, a) {
  if (e !== Bu ? Du(t, e, Vt) : Hg(_t, Vt), Du(t, n, _t), ku = Vt.nx * _t.ny - Vt.ny * _t.nx, _u = Vt.nx * _t.nx - Vt.ny * -_t.ny, qt = Math.asin(Math.max(-1, Math.min(1, ku))), Math.abs(qt) < 1e-6) {
    Oo = t.x, Vo = t.y, wn = zn = 0;
    return;
  }
  Tn = 1, fa = false, _u < 0 ? qt < 0 ? qt = Math.PI + qt : (qt = Math.PI - qt, Tn = -1, fa = true) : qt > 0 && (Tn = -1, fa = true), t.radius !== void 0 ? zn = t.radius : zn = r, mn = qt / 2, ra = Math.min(Vt.len / 2, _t.len / 2), a ? (zt = Math.abs(Math.cos(mn) * zn / Math.sin(mn)), zt > ra ? (zt = ra, wn = Math.abs(zt * Math.sin(mn) / Math.cos(mn))) : wn = zn) : (zt = Math.min(ra, zn), wn = Math.abs(zt * Math.sin(mn) / Math.cos(mn))), Fo = t.x + _t.nx * zt, jo = t.y + _t.ny * zt, Oo = Fo - _t.ny * wn * Tn, Vo = jo + _t.nx * wn * Tn, ud = t.x + Vt.nx * zt, cd = t.y + Vt.ny * zt, Bu = t;
};
function dd(e, t) {
  t.radius === 0 ? e.lineTo(t.cx, t.cy) : e.arc(t.cx, t.cy, t.radius, t.startAngle, t.endAngle, t.counterClockwise);
}
function ps(e, t, n, r) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  return r === 0 || t.radius === 0 ? {
    cx: t.x,
    cy: t.y,
    radius: 0,
    startX: t.x,
    startY: t.y,
    stopX: t.x,
    stopY: t.y,
    startAngle: void 0,
    endAngle: void 0,
    counterClockwise: void 0
  } : (Kg(e, t, n, r, a), {
    cx: Oo,
    cy: Vo,
    radius: wn,
    startX: ud,
    startY: cd,
    stopX: Fo,
    stopY: jo,
    startAngle: Vt.ang + Math.PI / 2 * Tn,
    endAngle: _t.ang - Math.PI / 2 * Tn,
    counterClockwise: fa
  });
}
var Dr = 0.01;
var Zg = Math.sqrt(2 * Dr);
var vt = {};
vt.findMidptPtsEtc = function(e, t) {
  var n = t.posPts, r = t.intersectionPts, a = t.vectorNormInverse, i, o = e.pstyle("source-endpoint"), u = e.pstyle("target-endpoint"), l = o.units != null && u.units != null, s = function(w, T, S, x) {
    var _ = x - T, P = S - w, B = Math.sqrt(P * P + _ * _);
    return {
      x: -_ / B,
      y: P / B
    };
  }, c = e.pstyle("edge-distances").value;
  switch (c) {
    case "node-position":
      i = n;
      break;
    case "intersection":
      i = r;
      break;
    case "endpoints": {
      if (l) {
        var d = this.manualEndptToPx(e.source()[0], o), h = Je(d, 2), f = h[0], p = h[1], g = this.manualEndptToPx(e.target()[0], u), m = Je(g, 2), v = m[0], y = m[1], b = {
          x1: f,
          y1: p,
          x2: v,
          y2: y
        };
        a = s(f, p, v, y), i = b;
      } else
        Ae("Edge ".concat(e.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = r;
      break;
    }
  }
  return {
    midptPts: i,
    vectorNormInverse: a
  };
};
vt.findHaystackPoints = function(e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t], r = n._private, a = r.rscratch;
    if (!a.haystack) {
      var i = Math.random() * 2 * Math.PI;
      a.source = {
        x: Math.cos(i),
        y: Math.sin(i)
      }, i = Math.random() * 2 * Math.PI, a.target = {
        x: Math.cos(i),
        y: Math.sin(i)
      };
    }
    var o = r.source, u = r.target, l = o.position(), s = u.position(), c = o.width(), d = u.width(), h = o.height(), f = u.height(), p = n.pstyle("haystack-radius").value, g = p / 2;
    a.haystackPts = a.allpts = [a.source.x * c * g + l.x, a.source.y * h * g + l.y, a.target.x * d * g + s.x, a.target.y * f * g + s.y], a.midX = (a.allpts[0] + a.allpts[2]) / 2, a.midY = (a.allpts[1] + a.allpts[3]) / 2, a.edgeType = "haystack", a.haystack = true, this.storeEdgeProjections(n), this.calculateArrowAngles(n), this.recalculateEdgeLabelProjections(n), this.calculateLabelAngles(n);
  }
};
vt.findSegmentsPoints = function(e, t) {
  var n = e._private.rscratch, r = e.pstyle("segment-weights"), a = e.pstyle("segment-distances"), i = e.pstyle("segment-radii"), o = e.pstyle("radius-type"), u = Math.min(r.pfValue.length, a.pfValue.length), l = i.pfValue[i.pfValue.length - 1], s = o.pfValue[o.pfValue.length - 1];
  n.edgeType = "segments", n.segpts = [], n.radii = [], n.isArcRadius = [];
  for (var c = 0; c < u; c++) {
    var d = r.pfValue[c], h = a.pfValue[c], f = 1 - d, p = d, g = this.findMidptPtsEtc(e, t), m = g.midptPts, v = g.vectorNormInverse, y = {
      x: m.x1 * f + m.x2 * p,
      y: m.y1 * f + m.y2 * p
    };
    n.segpts.push(y.x + v.x * h, y.y + v.y * h), n.radii.push(i.pfValue[c] !== void 0 ? i.pfValue[c] : l), n.isArcRadius.push((o.pfValue[c] !== void 0 ? o.pfValue[c] : s) === "arc-radius");
  }
};
vt.findLoopPoints = function(e, t, n, r) {
  var a = e._private.rscratch, i = t.dirCounts, o = t.srcPos, u = e.pstyle("control-point-distances"), l = u ? u.pfValue[0] : void 0, s = e.pstyle("loop-direction").pfValue, c = e.pstyle("loop-sweep").pfValue, d = e.pstyle("control-point-step-size").pfValue;
  a.edgeType = "self";
  var h = n, f = d;
  r && (h = 0, f = l);
  var p = s - Math.PI / 2, g = p - c / 2, m = p + c / 2, v = s + "_" + c;
  h = i[v] === void 0 ? i[v] = 0 : ++i[v], a.ctrlpts = [o.x + Math.cos(g) * 1.4 * f * (h / 3 + 1), o.y + Math.sin(g) * 1.4 * f * (h / 3 + 1), o.x + Math.cos(m) * 1.4 * f * (h / 3 + 1), o.y + Math.sin(m) * 1.4 * f * (h / 3 + 1)];
};
vt.findCompoundLoopPoints = function(e, t, n, r) {
  var a = e._private.rscratch;
  a.edgeType = "compound";
  var i = t.srcPos, o = t.tgtPos, u = t.srcW, l = t.srcH, s = t.tgtW, c = t.tgtH, d = e.pstyle("control-point-step-size").pfValue, h = e.pstyle("control-point-distances"), f = h ? h.pfValue[0] : void 0, p = n, g = d;
  r && (p = 0, g = f);
  var m = 50, v = {
    x: i.x - u / 2,
    y: i.y - l / 2
  }, y = {
    x: o.x - s / 2,
    y: o.y - c / 2
  }, b = {
    x: Math.min(v.x, y.x),
    y: Math.min(v.y, y.y)
  }, w = 0.5, T = Math.max(w, Math.log(u * Dr)), S = Math.max(w, Math.log(s * Dr));
  a.ctrlpts = [b.x, b.y - (1 + Math.pow(m, 1.12) / 100) * g * (p / 3 + 1) * T, b.x - (1 + Math.pow(m, 1.12) / 100) * g * (p / 3 + 1) * S, b.y];
};
vt.findStraightEdgePoints = function(e) {
  e._private.rscratch.edgeType = "straight";
};
vt.findBezierPoints = function(e, t, n, r, a) {
  var i = e._private.rscratch, o = e.pstyle("control-point-step-size").pfValue, u = e.pstyle("control-point-distances"), l = e.pstyle("control-point-weights"), s = u && l ? Math.min(u.value.length, l.value.length) : 1, c = u ? u.pfValue[0] : void 0, d = l.value[0], h = r;
  i.edgeType = h ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var f = 0; f < s; f++) {
    var p = (0.5 - t.eles.length / 2 + n) * o * (a ? -1 : 1), g = void 0, m = ts(p);
    h && (c = u ? u.pfValue[f] : o, d = l.value[f]), r ? g = c : g = c !== void 0 ? m * c : void 0;
    var v = g !== void 0 ? g : p, y = 1 - d, b = d, w = this.findMidptPtsEtc(e, t), T = w.midptPts, S = w.vectorNormInverse, x = {
      x: T.x1 * y + T.x2 * b,
      y: T.y1 * y + T.y2 * b
    };
    i.ctrlpts.push(x.x + S.x * v, x.y + S.y * v);
  }
};
vt.findTaxiPoints = function(e, t) {
  var n = e._private.rscratch;
  n.edgeType = "segments";
  var r = "vertical", a = "horizontal", i = "leftward", o = "rightward", u = "downward", l = "upward", s = "auto", c = t.posPts, d = t.srcW, h = t.srcH, f = t.tgtW, p = t.tgtH, g = e.pstyle("edge-distances").value, m = g !== "node-position", v = e.pstyle("taxi-direction").value, y = v, b = e.pstyle("taxi-turn"), w = b.units === "%", T = b.pfValue, S = T < 0, x = e.pstyle("taxi-turn-min-distance").pfValue, _ = m ? (d + f) / 2 : 0, P = m ? (h + p) / 2 : 0, B = c.x2 - c.x1, k = c.y2 - c.y1, C = function(E, F) {
    return E > 0 ? Math.max(E - F, 0) : Math.min(E + F, 0);
  }, M = C(B, _), D = C(k, P), N = false;
  y === s ? v = Math.abs(M) > Math.abs(D) ? a : r : y === l || y === u ? (v = r, N = true) : (y === i || y === o) && (v = a, N = true);
  var A = v === r, L = A ? D : M, R = A ? k : B, I = ts(R), X = false;
  !(N && (w || S)) && (y === u && R < 0 || y === l && R > 0 || y === i && R > 0 || y === o && R < 0) && (I *= -1, L = I * Math.abs(L), X = true);
  var V;
  if (w) {
    var Y = T < 0 ? 1 + T : T;
    V = Y * L;
  } else {
    var W = T < 0 ? L : 0;
    V = W + T * I;
  }
  var Q = function(E) {
    return Math.abs(E) < x || Math.abs(E) >= Math.abs(L);
  }, J = Q(V), Z = Q(Math.abs(L) - Math.abs(V)), $ = J || Z;
  if ($ && !X)
    if (A) {
      var te = Math.abs(R) <= h / 2, z = Math.abs(B) <= f / 2;
      if (te) {
        var O = (c.x1 + c.x2) / 2, j = c.y1, H = c.y2;
        n.segpts = [O, j, O, H];
      } else if (z) {
        var ne = (c.y1 + c.y2) / 2, oe = c.x1, Re = c.x2;
        n.segpts = [oe, ne, Re, ne];
      } else
        n.segpts = [c.x1, c.y2];
    } else {
      var be = Math.abs(R) <= d / 2, Ce = Math.abs(k) <= p / 2;
      if (be) {
        var re = (c.y1 + c.y2) / 2, de = c.x1, he = c.x2;
        n.segpts = [de, re, he, re];
      } else if (Ce) {
        var ye = (c.x1 + c.x2) / 2, me = c.y1, Se = c.y2;
        n.segpts = [ye, me, ye, Se];
      } else
        n.segpts = [c.x2, c.y1];
    }
  else if (A) {
    var Pe = c.y1 + V + (m ? h / 2 * I : 0), Ie = c.x1, Ge = c.x2;
    n.segpts = [Ie, Pe, Ge, Pe];
  } else {
    var Xe = c.x1 + V + (m ? d / 2 * I : 0), Fe = c.y1, je = c.y2;
    n.segpts = [Xe, Fe, Xe, je];
  }
  if (n.isRound) {
    var se = e.pstyle("taxi-radius").value, ge = e.pstyle("radius-type").value[0] === "arc-radius";
    n.radii = new Array(n.segpts.length / 2).fill(se), n.isArcRadius = new Array(n.segpts.length / 2).fill(ge);
  }
};
vt.tryToCorrectInvalidPoints = function(e, t) {
  var n = e._private.rscratch;
  if (n.edgeType === "bezier") {
    var r = t.srcPos, a = t.tgtPos, i = t.srcW, o = t.srcH, u = t.tgtW, l = t.tgtH, s = t.srcShape, c = t.tgtShape, d = t.srcCornerRadius, h = t.tgtCornerRadius, f = t.srcRs, p = t.tgtRs, g = !ee(n.startX) || !ee(n.startY), m = !ee(n.arrowStartX) || !ee(n.arrowStartY), v = !ee(n.endX) || !ee(n.endY), y = !ee(n.arrowEndX) || !ee(n.arrowEndY), b = 3, w = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth, T = b * w, S = Sn({
      x: n.ctrlpts[0],
      y: n.ctrlpts[1]
    }, {
      x: n.startX,
      y: n.startY
    }), x = S < T, _ = Sn({
      x: n.ctrlpts[0],
      y: n.ctrlpts[1]
    }, {
      x: n.endX,
      y: n.endY
    }), P = _ < T, B = false;
    if (g || m || x) {
      B = true;
      var k = {
        // delta
        x: n.ctrlpts[0] - r.x,
        y: n.ctrlpts[1] - r.y
      }, C = Math.sqrt(k.x * k.x + k.y * k.y), M = {
        // normalised delta
        x: k.x / C,
        y: k.y / C
      }, D = Math.max(i, o), N = {
        // *2 radius guarantees outside shape
        x: n.ctrlpts[0] + M.x * 2 * D,
        y: n.ctrlpts[1] + M.y * 2 * D
      }, A = s.intersectLine(r.x, r.y, i, o, N.x, N.y, 0, d, f);
      x ? (n.ctrlpts[0] = n.ctrlpts[0] + M.x * (T - S), n.ctrlpts[1] = n.ctrlpts[1] + M.y * (T - S)) : (n.ctrlpts[0] = A[0] + M.x * T, n.ctrlpts[1] = A[1] + M.y * T);
    }
    if (v || y || P) {
      B = true;
      var L = {
        // delta
        x: n.ctrlpts[0] - a.x,
        y: n.ctrlpts[1] - a.y
      }, R = Math.sqrt(L.x * L.x + L.y * L.y), I = {
        // normalised delta
        x: L.x / R,
        y: L.y / R
      }, X = Math.max(i, o), V = {
        // *2 radius guarantees outside shape
        x: n.ctrlpts[0] + I.x * 2 * X,
        y: n.ctrlpts[1] + I.y * 2 * X
      }, Y = c.intersectLine(a.x, a.y, u, l, V.x, V.y, 0, h, p);
      P ? (n.ctrlpts[0] = n.ctrlpts[0] + I.x * (T - _), n.ctrlpts[1] = n.ctrlpts[1] + I.y * (T - _)) : (n.ctrlpts[0] = Y[0] + I.x * T, n.ctrlpts[1] = Y[1] + I.y * T);
    }
    B && this.findEndpoints(e);
  }
};
vt.storeAllpts = function(e) {
  var t = e._private.rscratch;
  if (t.edgeType === "multibezier" || t.edgeType === "bezier" || t.edgeType === "self" || t.edgeType === "compound") {
    t.allpts = [], t.allpts.push(t.startX, t.startY);
    for (var n = 0; n + 1 < t.ctrlpts.length; n += 2)
      t.allpts.push(t.ctrlpts[n], t.ctrlpts[n + 1]), n + 3 < t.ctrlpts.length && t.allpts.push((t.ctrlpts[n] + t.ctrlpts[n + 2]) / 2, (t.ctrlpts[n + 1] + t.ctrlpts[n + 3]) / 2);
    t.allpts.push(t.endX, t.endY);
    var r, a;
    t.ctrlpts.length / 2 % 2 === 0 ? (r = t.allpts.length / 2 - 1, t.midX = t.allpts[r], t.midY = t.allpts[r + 1]) : (r = t.allpts.length / 2 - 3, a = 0.5, t.midX = at(t.allpts[r], t.allpts[r + 2], t.allpts[r + 4], a), t.midY = at(t.allpts[r + 1], t.allpts[r + 3], t.allpts[r + 5], a));
  } else if (t.edgeType === "straight")
    t.allpts = [t.startX, t.startY, t.endX, t.endY], t.midX = (t.startX + t.endX + t.arrowStartX + t.arrowEndX) / 4, t.midY = (t.startY + t.endY + t.arrowStartY + t.arrowEndY) / 4;
  else if (t.edgeType === "segments") {
    if (t.allpts = [], t.allpts.push(t.startX, t.startY), t.allpts.push.apply(t.allpts, t.segpts), t.allpts.push(t.endX, t.endY), t.isRound) {
      t.roundCorners = [];
      for (var i = 2; i + 3 < t.allpts.length; i += 2) {
        var o = t.radii[i / 2 - 1], u = t.isArcRadius[i / 2 - 1];
        t.roundCorners.push(ps({
          x: t.allpts[i - 2],
          y: t.allpts[i - 1]
        }, {
          x: t.allpts[i],
          y: t.allpts[i + 1],
          radius: o
        }, {
          x: t.allpts[i + 2],
          y: t.allpts[i + 3]
        }, o, u));
      }
    }
    if (t.segpts.length % 4 === 0) {
      var l = t.segpts.length / 2, s = l - 2;
      t.midX = (t.segpts[s] + t.segpts[l]) / 2, t.midY = (t.segpts[s + 1] + t.segpts[l + 1]) / 2;
    } else {
      var c = t.segpts.length / 2 - 1;
      if (!t.isRound)
        t.midX = t.segpts[c], t.midY = t.segpts[c + 1];
      else {
        var d = {
          x: t.segpts[c],
          y: t.segpts[c + 1]
        }, h = t.roundCorners[c / 2];
        if (h.radius === 0) {
          var f = {
            x: t.segpts[c + 2],
            y: t.segpts[c + 3]
          };
          t.midX = d.x, t.midY = d.y, t.midVector = [d.y - f.y, f.x - d.x];
        } else {
          var p = [d.x - h.cx, d.y - h.cy], g = h.radius / Math.sqrt(Math.pow(p[0], 2) + Math.pow(p[1], 2));
          p = p.map(function(m) {
            return m * g;
          }), t.midX = h.cx + p[0], t.midY = h.cy + p[1], t.midVector = p;
        }
      }
    }
  }
};
vt.checkForInvalidEdgeWarning = function(e) {
  var t = e[0]._private.rscratch;
  t.nodesOverlap || ee(t.startX) && ee(t.startY) && ee(t.endX) && ee(t.endY) ? t.loggedErr = false : t.loggedErr || (t.loggedErr = true, Ae("Edge `" + e.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
vt.findEdgeControlPoints = function(e) {
  var t = this;
  if (!(!e || e.length === 0)) {
    for (var n = this, r = n.cy, a = r.hasCompoundNodes(), i = new Wt(), o = function(_, P) {
      return [].concat(ga(_), [P ? 1 : 0]).join("-");
    }, u = [], l = [], s = 0; s < e.length; s++) {
      var c = e[s], d = c._private, h = c.pstyle("curve-style").value;
      if (!(c.removed() || !c.takesUpSpace())) {
        if (h === "haystack") {
          l.push(c);
          continue;
        }
        var f = h === "unbundled-bezier" || tn(h, "segments") || h === "straight" || h === "straight-triangle" || tn(h, "taxi"), p = h === "unbundled-bezier" || h === "bezier", g = d.source, m = d.target, v = g.poolIndex(), y = m.poolIndex(), b = [v, y].sort(), w = o(b, f), T = i.get(w);
        T == null && (T = {
          eles: []
        }, u.push({
          pairId: b,
          edgeIsUnbundled: f
        }), i.set(w, T)), T.eles.push(c), f && (T.hasUnbundled = true), p && (T.hasBezier = true);
      }
    }
    for (var S = function() {
      var _ = u[x], P = _.pairId, B = _.edgeIsUnbundled, k = o(P, B), C = i.get(k), M;
      if (!C.hasUnbundled) {
        var D = C.eles[0].parallelEdges().filter(function(se) {
          return se.isBundledBezier();
        });
        Jo(C.eles), D.forEach(function(se) {
          return C.eles.push(se);
        }), C.eles.sort(function(se, ge) {
          return se.poolIndex() - ge.poolIndex();
        });
      }
      var N = C.eles[0], A = N.source(), L = N.target();
      if (A.poolIndex() > L.poolIndex()) {
        var R = A;
        A = L, L = R;
      }
      var I = C.srcPos = A.position(), X = C.tgtPos = L.position(), V = C.srcW = A.outerWidth(), Y = C.srcH = A.outerHeight(), W = C.tgtW = L.outerWidth(), Q = C.tgtH = L.outerHeight(), J = C.srcShape = n.nodeShapes[t.getNodeShape(A)], Z = C.tgtShape = n.nodeShapes[t.getNodeShape(L)], $ = C.srcCornerRadius = A.pstyle("corner-radius").value === "auto" ? "auto" : A.pstyle("corner-radius").pfValue, te = C.tgtCornerRadius = L.pstyle("corner-radius").value === "auto" ? "auto" : L.pstyle("corner-radius").pfValue, z = C.tgtRs = L._private.rscratch, O = C.srcRs = A._private.rscratch;
      C.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var j = 0; j < C.eles.length; j++) {
        var H = C.eles[j], ne = H[0]._private.rscratch, oe = H.pstyle("curve-style").value, Re = oe === "unbundled-bezier" || tn(oe, "segments") || tn(oe, "taxi"), be = !A.same(H.source());
        if (!C.calculatedIntersection && A !== L && (C.hasBezier || C.hasUnbundled)) {
          C.calculatedIntersection = true;
          var Ce = J.intersectLine(I.x, I.y, V, Y, X.x, X.y, 0, $, O), re = C.srcIntn = Ce, de = Z.intersectLine(X.x, X.y, W, Q, I.x, I.y, 0, te, z), he = C.tgtIntn = de, ye = C.intersectionPts = {
            x1: Ce[0],
            x2: de[0],
            y1: Ce[1],
            y2: de[1]
          }, me = C.posPts = {
            x1: I.x,
            x2: X.x,
            y1: I.y,
            y2: X.y
          }, Se = de[1] - Ce[1], Pe = de[0] - Ce[0], Ie = Math.sqrt(Pe * Pe + Se * Se);
          ee(Ie) && Ie >= Zg || (Ie = Math.sqrt(Math.max(Pe * Pe, Dr) + Math.max(Se * Se, Dr)));
          var Ge = C.vector = {
            x: Pe,
            y: Se
          }, Xe = C.vectorNorm = {
            x: Ge.x / Ie,
            y: Ge.y / Ie
          }, Fe = {
            x: -Xe.y,
            y: Xe.x
          };
          C.nodesOverlap = !ee(Ie) || Z.checkPoint(Ce[0], Ce[1], 0, W, Q, X.x, X.y, te, z) || J.checkPoint(de[0], de[1], 0, V, Y, I.x, I.y, $, O), C.vectorNormInverse = Fe, M = {
            nodesOverlap: C.nodesOverlap,
            dirCounts: C.dirCounts,
            calculatedIntersection: true,
            hasBezier: C.hasBezier,
            hasUnbundled: C.hasUnbundled,
            eles: C.eles,
            srcPos: X,
            srcRs: z,
            tgtPos: I,
            tgtRs: O,
            srcW: W,
            srcH: Q,
            tgtW: V,
            tgtH: Y,
            srcIntn: he,
            tgtIntn: re,
            srcShape: Z,
            tgtShape: J,
            posPts: {
              x1: me.x2,
              y1: me.y2,
              x2: me.x1,
              y2: me.y1
            },
            intersectionPts: {
              x1: ye.x2,
              y1: ye.y2,
              x2: ye.x1,
              y2: ye.y1
            },
            vector: {
              x: -Ge.x,
              y: -Ge.y
            },
            vectorNorm: {
              x: -Xe.x,
              y: -Xe.y
            },
            vectorNormInverse: {
              x: -Fe.x,
              y: -Fe.y
            }
          };
        }
        var je = be ? M : C;
        ne.nodesOverlap = je.nodesOverlap, ne.srcIntn = je.srcIntn, ne.tgtIntn = je.tgtIntn, ne.isRound = oe.startsWith("round"), a && (A.isParent() || A.isChild() || L.isParent() || L.isChild()) && (A.parents().anySame(L) || L.parents().anySame(A) || A.same(L) && A.isParent()) ? t.findCompoundLoopPoints(H, je, j, Re) : A === L ? t.findLoopPoints(H, je, j, Re) : oe.endsWith("segments") ? t.findSegmentsPoints(H, je) : oe.endsWith("taxi") ? t.findTaxiPoints(H, je) : oe === "straight" || !Re && C.eles.length % 2 === 1 && j === Math.floor(C.eles.length / 2) ? t.findStraightEdgePoints(H) : t.findBezierPoints(H, je, j, Re, be), t.findEndpoints(H), t.tryToCorrectInvalidPoints(H, je), t.checkForInvalidEdgeWarning(H), t.storeAllpts(H), t.storeEdgeProjections(H), t.calculateArrowAngles(H), t.recalculateEdgeLabelProjections(H), t.calculateLabelAngles(H);
      }
    }, x = 0; x < u.length; x++)
      S();
    this.findHaystackPoints(l);
  }
};
function hd(e) {
  var t = [];
  if (e != null) {
    for (var n = 0; n < e.length; n += 2) {
      var r = e[n], a = e[n + 1];
      t.push({
        x: r,
        y: a
      });
    }
    return t;
  }
}
vt.getSegmentPoints = function(e) {
  var t = e[0]._private.rscratch;
  this.recalculateRenderedStyle(e);
  var n = t.edgeType;
  if (n === "segments")
    return hd(t.segpts);
};
vt.getControlPoints = function(e) {
  var t = e[0]._private.rscratch;
  this.recalculateRenderedStyle(e);
  var n = t.edgeType;
  if (n === "bezier" || n === "multibezier" || n === "self" || n === "compound")
    return hd(t.ctrlpts);
};
vt.getEdgeMidpoint = function(e) {
  var t = e[0]._private.rscratch;
  return this.recalculateRenderedStyle(e), {
    x: t.midX,
    y: t.midY
  };
};
var Fr = {};
Fr.manualEndptToPx = function(e, t) {
  var n = this, r = e.position(), a = e.outerWidth(), i = e.outerHeight(), o = e._private.rscratch;
  if (t.value.length === 2) {
    var u = [t.pfValue[0], t.pfValue[1]];
    return t.units[0] === "%" && (u[0] = u[0] * a), t.units[1] === "%" && (u[1] = u[1] * i), u[0] += r.x, u[1] += r.y, u;
  } else {
    var l = t.pfValue[0];
    l = -Math.PI / 2 + l;
    var s = 2 * Math.max(a, i), c = [r.x + Math.cos(l) * s, r.y + Math.sin(l) * s];
    return n.nodeShapes[this.getNodeShape(e)].intersectLine(r.x, r.y, a, i, c[0], c[1], 0, e.pstyle("corner-radius").value === "auto" ? "auto" : e.pstyle("corner-radius").pfValue, o);
  }
};
Fr.findEndpoints = function(e) {
  var t, n, r, a, i = this, o, u = e.source()[0], l = e.target()[0], s = u.position(), c = l.position(), d = e.pstyle("target-arrow-shape").value, h = e.pstyle("source-arrow-shape").value, f = e.pstyle("target-distance-from-node").pfValue, p = e.pstyle("source-distance-from-node").pfValue, g = u._private.rscratch, m = l._private.rscratch, v = e.pstyle("curve-style").value, y = e._private.rscratch, b = y.edgeType, w = tn(v, "taxi"), T = b === "self" || b === "compound", S = b === "bezier" || b === "multibezier" || T, x = b !== "bezier", _ = b === "straight" || b === "segments", P = b === "segments", B = S || x || _, k = T || w, C = e.pstyle("source-endpoint"), M = k ? "outside-to-node" : C.value, D = u.pstyle("corner-radius").value === "auto" ? "auto" : u.pstyle("corner-radius").pfValue, N = e.pstyle("target-endpoint"), A = k ? "outside-to-node" : N.value, L = l.pstyle("corner-radius").value === "auto" ? "auto" : l.pstyle("corner-radius").pfValue;
  y.srcManEndpt = C, y.tgtManEndpt = N;
  var R, I, X, V, Y = (t = (N == null || (n = N.pfValue) === null || n === void 0 ? void 0 : n.length) === 2 ? N.pfValue : null) !== null && t !== void 0 ? t : [0, 0], W = (r = (C == null || (a = C.pfValue) === null || a === void 0 ? void 0 : a.length) === 2 ? C.pfValue : null) !== null && r !== void 0 ? r : [0, 0];
  if (S) {
    var Q = [y.ctrlpts[0], y.ctrlpts[1]], J = x ? [y.ctrlpts[y.ctrlpts.length - 2], y.ctrlpts[y.ctrlpts.length - 1]] : Q;
    R = J, I = Q;
  } else if (_) {
    var Z = P ? y.segpts.slice(0, 2) : [c.x + Y[0], c.y + Y[1]], $ = P ? y.segpts.slice(y.segpts.length - 2) : [s.x + W[0], s.y + W[1]];
    R = $, I = Z;
  }
  if (A === "inside-to-node")
    o = [c.x, c.y];
  else if (N.units)
    o = this.manualEndptToPx(l, N);
  else if (A === "outside-to-line")
    o = y.tgtIntn;
  else if (A === "outside-to-node" || A === "outside-to-node-or-label" ? X = R : (A === "outside-to-line" || A === "outside-to-line-or-label") && (X = [s.x, s.y]), o = i.nodeShapes[this.getNodeShape(l)].intersectLine(c.x, c.y, l.outerWidth(), l.outerHeight(), X[0], X[1], 0, L, m), A === "outside-to-node-or-label" || A === "outside-to-line-or-label") {
    var te = l._private.rscratch, z = te.labelWidth, O = te.labelHeight, j = te.labelX, H = te.labelY, ne = z / 2, oe = O / 2, Re = l.pstyle("text-valign").value;
    Re === "top" ? H -= oe : Re === "bottom" && (H += oe);
    var be = l.pstyle("text-halign").value;
    be === "left" ? j -= ne : be === "right" && (j += ne);
    var Ce = Pr(X[0], X[1], [j - ne, H - oe, j + ne, H - oe, j + ne, H + oe, j - ne, H + oe], c.x, c.y);
    if (Ce.length > 0) {
      var re = s, de = xn(re, Xn(o)), he = xn(re, Xn(Ce)), ye = de;
      if (he < de && (o = Ce, ye = he), Ce.length > 2) {
        var me = xn(re, {
          x: Ce[2],
          y: Ce[3]
        });
        me < ye && (o = [Ce[2], Ce[3]]);
      }
    }
  }
  var Se = Zr(o, R, i.arrowShapes[d].spacing(e) + f), Pe = Zr(o, R, i.arrowShapes[d].gap(e) + f);
  if (y.endX = Pe[0], y.endY = Pe[1], y.arrowEndX = Se[0], y.arrowEndY = Se[1], M === "inside-to-node")
    o = [s.x, s.y];
  else if (C.units)
    o = this.manualEndptToPx(u, C);
  else if (M === "outside-to-line")
    o = y.srcIntn;
  else if (M === "outside-to-node" || M === "outside-to-node-or-label" ? V = I : (M === "outside-to-line" || M === "outside-to-line-or-label") && (V = [c.x, c.y]), o = i.nodeShapes[this.getNodeShape(u)].intersectLine(s.x, s.y, u.outerWidth(), u.outerHeight(), V[0], V[1], 0, D, g), M === "outside-to-node-or-label" || M === "outside-to-line-or-label") {
    var Ie = u._private.rscratch, Ge = Ie.labelWidth, Xe = Ie.labelHeight, Fe = Ie.labelX, je = Ie.labelY, se = Ge / 2, ge = Xe / 2, E = u.pstyle("text-valign").value;
    E === "top" ? je -= ge : E === "bottom" && (je += ge);
    var F = u.pstyle("text-halign").value;
    F === "left" ? Fe -= se : F === "right" && (Fe += se);
    var q = Pr(V[0], V[1], [Fe - se, je - ge, Fe + se, je - ge, Fe + se, je + ge, Fe - se, je + ge], s.x, s.y);
    if (q.length > 0) {
      var U = c, G = xn(U, Xn(o)), ae = xn(U, Xn(q)), K = G;
      if (ae < G && (o = [q[0], q[1]], K = ae), q.length > 2) {
        var ue = xn(U, {
          x: q[2],
          y: q[3]
        });
        ue < K && (o = [q[2], q[3]]);
      }
    }
  }
  var le = Zr(o, I, i.arrowShapes[h].spacing(e) + p), pe = Zr(o, I, i.arrowShapes[h].gap(e) + p);
  y.startX = pe[0], y.startY = pe[1], y.arrowStartX = le[0], y.arrowStartY = le[1], B && (!ee(y.startX) || !ee(y.startY) || !ee(y.endX) || !ee(y.endY) ? y.badLine = true : y.badLine = false);
};
Fr.getSourceEndpoint = function(e) {
  var t = e[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(e), t.edgeType) {
    case "haystack":
      return {
        x: t.haystackPts[0],
        y: t.haystackPts[1]
      };
    default:
      return {
        x: t.arrowStartX,
        y: t.arrowStartY
      };
  }
};
Fr.getTargetEndpoint = function(e) {
  var t = e[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(e), t.edgeType) {
    case "haystack":
      return {
        x: t.haystackPts[2],
        y: t.haystackPts[3]
      };
    default:
      return {
        x: t.arrowEndX,
        y: t.arrowEndY
      };
  }
};
var vs = {};
function Qg(e, t, n) {
  for (var r = function(l, s, c, d) {
    return at(l, s, c, d);
  }, a = t._private, i = a.rstyle.bezierPts, o = 0; o < e.bezierProjPcts.length; o++) {
    var u = e.bezierProjPcts[o];
    i.push({
      x: r(n[0], n[2], n[4], u),
      y: r(n[1], n[3], n[5], u)
    });
  }
}
vs.storeEdgeProjections = function(e) {
  var t = e._private, n = t.rscratch, r = n.edgeType;
  if (t.rstyle.bezierPts = null, t.rstyle.linePts = null, t.rstyle.haystackPts = null, r === "multibezier" || r === "bezier" || r === "self" || r === "compound") {
    t.rstyle.bezierPts = [];
    for (var a = 0; a + 5 < n.allpts.length; a += 4)
      Qg(this, e, n.allpts.slice(a, a + 6));
  } else if (r === "segments")
    for (var i = t.rstyle.linePts = [], a = 0; a + 1 < n.allpts.length; a += 2)
      i.push({
        x: n.allpts[a],
        y: n.allpts[a + 1]
      });
  else if (r === "haystack") {
    var o = n.haystackPts;
    t.rstyle.haystackPts = [{
      x: o[0],
      y: o[1]
    }, {
      x: o[2],
      y: o[3]
    }];
  }
  t.rstyle.arrowWidth = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
vs.recalculateEdgeProjections = function(e) {
  this.findEdgeControlPoints(e);
};
var Xt = {};
Xt.recalculateNodeLabelProjection = function(e) {
  var t = e.pstyle("label").strValue;
  if (!on(t)) {
    var n, r, a = e._private, i = e.width(), o = e.height(), u = e.padding(), l = e.position(), s = e.pstyle("text-halign").strValue, c = e.pstyle("text-valign").strValue, d = a.rscratch, h = a.rstyle;
    switch (s) {
      case "left":
        n = l.x - i / 2 - u;
        break;
      case "right":
        n = l.x + i / 2 + u;
        break;
      default:
        n = l.x;
    }
    switch (c) {
      case "top":
        r = l.y - o / 2 - u;
        break;
      case "bottom":
        r = l.y + o / 2 + u;
        break;
      default:
        r = l.y;
    }
    d.labelX = n, d.labelY = r, h.labelX = n, h.labelY = r, this.calculateLabelAngles(e), this.applyLabelDimensions(e);
  }
};
var fd = function(e, t) {
  var n = Math.atan(t / e);
  return e === 0 && n < 0 && (n = n * -1), n;
};
var pd = function(e, t) {
  var n = t.x - e.x, r = t.y - e.y;
  return fd(n, r);
};
var $g = function(e, t, n, r) {
  var a = Cr(0, r - 1e-3, 1), i = Cr(0, r + 1e-3, 1), o = Un(e, t, n, a), u = Un(e, t, n, i);
  return pd(o, u);
};
Xt.recalculateEdgeLabelProjections = function(e) {
  var t, n = e._private, r = n.rscratch, a = this, i = {
    mid: e.pstyle("label").strValue,
    source: e.pstyle("source-label").strValue,
    target: e.pstyle("target-label").strValue
  };
  if (i.mid || i.source || i.target) {
    t = {
      x: r.midX,
      y: r.midY
    };
    var o = function(c, d, h) {
      Ut(n.rscratch, c, d, h), Ut(n.rstyle, c, d, h);
    };
    o("labelX", null, t.x), o("labelY", null, t.y);
    var u = fd(r.midDispX, r.midDispY);
    o("labelAutoAngle", null, u);
    var l = function() {
      if (l.cache)
        return l.cache;
      for (var c = [], d = 0; d + 5 < r.allpts.length; d += 4) {
        var h = {
          x: r.allpts[d],
          y: r.allpts[d + 1]
        }, f = {
          x: r.allpts[d + 2],
          y: r.allpts[d + 3]
        }, p = {
          x: r.allpts[d + 4],
          y: r.allpts[d + 5]
        };
        c.push({
          p0: h,
          p1: f,
          p2: p,
          startDist: 0,
          length: 0,
          segments: []
        });
      }
      var g = n.rstyle.bezierPts, m = a.bezierProjPcts.length;
      function v(S, x, _, P, B) {
        var k = Sn(x, _), C = S.segments[S.segments.length - 1], M = {
          p0: x,
          p1: _,
          t0: P,
          t1: B,
          startDist: C ? C.startDist + C.length : 0,
          length: k
        };
        S.segments.push(M), S.length += k;
      }
      for (var y = 0; y < c.length; y++) {
        var b = c[y], w = c[y - 1];
        w && (b.startDist = w.startDist + w.length), v(b, b.p0, g[y * m], 0, a.bezierProjPcts[0]);
        for (var T = 0; T < m - 1; T++)
          v(b, g[y * m + T], g[y * m + T + 1], a.bezierProjPcts[T], a.bezierProjPcts[T + 1]);
        v(b, g[y * m + m - 1], b.p2, a.bezierProjPcts[m - 1], 1);
      }
      return l.cache = c;
    }, s = function(c) {
      var d, h = c === "source";
      if (i[c]) {
        var f = e.pstyle(c + "-text-offset").pfValue;
        switch (r.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var p = l(), g, m = 0, v = 0, y = 0; y < p.length; y++) {
              for (var b = p[h ? y : p.length - 1 - y], w = 0; w < b.segments.length; w++) {
                var T = b.segments[h ? w : b.segments.length - 1 - w], S = y === p.length - 1 && w === b.segments.length - 1;
                if (m = v, v += T.length, v >= f || S) {
                  g = {
                    cp: b,
                    segment: T
                  };
                  break;
                }
              }
              if (g)
                break;
            }
            var x = g.cp, _ = g.segment, P = (f - m) / _.length, B = _.t1 - _.t0, k = h ? _.t0 + B * P : _.t1 - B * P;
            k = Cr(0, k, 1), t = Un(x.p0, x.p1, x.p2, k), d = $g(x.p0, x.p1, x.p2, k);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var C = 0, M, D, N, A, L = r.allpts.length, R = 0; R + 3 < L && (h ? (N = {
              x: r.allpts[R],
              y: r.allpts[R + 1]
            }, A = {
              x: r.allpts[R + 2],
              y: r.allpts[R + 3]
            }) : (N = {
              x: r.allpts[L - 2 - R],
              y: r.allpts[L - 1 - R]
            }, A = {
              x: r.allpts[L - 4 - R],
              y: r.allpts[L - 3 - R]
            }), M = Sn(N, A), D = C, C += M, !(C >= f)); R += 2)
              ;
            var I = f - D, X = I / M;
            X = Cr(0, X, 1), t = yf(N, A, X), d = pd(N, A);
            break;
          }
        }
        o("labelX", c, t.x), o("labelY", c, t.y), o("labelAutoAngle", c, d);
      }
    };
    s("source"), s("target"), this.applyLabelDimensions(e);
  }
};
Xt.applyLabelDimensions = function(e) {
  this.applyPrefixedLabelDimensions(e), e.isEdge() && (this.applyPrefixedLabelDimensions(e, "source"), this.applyPrefixedLabelDimensions(e, "target"));
};
Xt.applyPrefixedLabelDimensions = function(e, t) {
  var n = e._private, r = this.getLabelText(e, t), a = Pn(r, e._private.labelDimsKey);
  if (Tt(n.rscratch, "prefixedLabelDimsKey", t) !== a) {
    Ut(n.rscratch, "prefixedLabelDimsKey", t, a);
    var i = this.calculateLabelDimensions(e, r), o = e.pstyle("line-height").pfValue, u = e.pstyle("text-wrap").strValue, l = Tt(n.rscratch, "labelWrapCachedLines", t) || [], s = u !== "wrap" ? 1 : Math.max(l.length, 1), c = i.height / s, d = c * o, h = i.width, f = i.height + (s - 1) * (o - 1) * c;
    Ut(n.rstyle, "labelWidth", t, h), Ut(n.rscratch, "labelWidth", t, h), Ut(n.rstyle, "labelHeight", t, f), Ut(n.rscratch, "labelHeight", t, f), Ut(n.rscratch, "labelLineHeight", t, d);
  }
};
Xt.getLabelText = function(e, t) {
  var n = e._private, r = t ? t + "-" : "", a = e.pstyle(r + "label").strValue, i = e.pstyle("text-transform").value, o = function(Y, W) {
    return W ? (Ut(n.rscratch, Y, t, W), W) : Tt(n.rscratch, Y, t);
  };
  if (!a)
    return "";
  i == "none" || (i == "uppercase" ? a = a.toUpperCase() : i == "lowercase" && (a = a.toLowerCase()));
  var u = e.pstyle("text-wrap").value;
  if (u === "wrap") {
    var l = o("labelKey");
    if (l != null && o("labelWrapKey") === l)
      return o("labelWrapCachedText");
    for (var s = "​", c = a.split(`
`), d = e.pstyle("text-max-width").pfValue, h = e.pstyle("text-overflow-wrap").value, f = h === "anywhere", p = [], g = /[\s\u200b]+|$/g, m = 0; m < c.length; m++) {
      var v = c[m], y = this.calculateLabelDimensions(e, v), b = y.width;
      if (f) {
        var w = v.split("").join(s);
        v = w;
      }
      if (b > d) {
        var T = v.matchAll(g), S = "", x = 0, _ = Pt(T), P;
        try {
          for (_.s(); !(P = _.n()).done; ) {
            var B = P.value, k = B[0], C = v.substring(x, B.index);
            x = B.index + k.length;
            var M = S.length === 0 ? C : S + C + k, D = this.calculateLabelDimensions(e, M), N = D.width;
            N <= d ? S += C + k : (S && p.push(S), S = C + k);
          }
        } catch (Y) {
          _.e(Y);
        } finally {
          _.f();
        }
        S.match(/^[\s\u200b]+$/) || p.push(S);
      } else
        p.push(v);
    }
    o("labelWrapCachedLines", p), a = o("labelWrapCachedText", p.join(`
`)), o("labelWrapKey", l);
  } else if (u === "ellipsis") {
    var A = e.pstyle("text-max-width").pfValue, L = "", R = "…", I = false;
    if (this.calculateLabelDimensions(e, a).width < A)
      return a;
    for (var X = 0; X < a.length; X++) {
      var V = this.calculateLabelDimensions(e, L + a[X] + R).width;
      if (V > A)
        break;
      L += a[X], X === a.length - 1 && (I = true);
    }
    return I || (L += R), L;
  }
  return a;
};
Xt.getLabelJustification = function(e) {
  var t = e.pstyle("text-justification").strValue, n = e.pstyle("text-halign").strValue;
  if (t === "auto")
    if (e.isNode())
      switch (n) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return "center";
      }
    else
      return "center";
  else
    return t;
};
Xt.calculateLabelDimensions = function(e, t) {
  var n = this, r = n.cy.window(), a = r.document, i = 0, o = e.pstyle("font-style").strValue, u = e.pstyle("font-size").pfValue, l = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, c = this.labelCalcCanvas, d = this.labelCalcCanvasContext;
  if (!c) {
    c = this.labelCalcCanvas = a.createElement("canvas"), d = this.labelCalcCanvasContext = c.getContext("2d");
    var h = c.style;
    h.position = "absolute", h.left = "-9999px", h.top = "-9999px", h.zIndex = "-1", h.visibility = "hidden", h.pointerEvents = "none";
  }
  d.font = "".concat(o, " ").concat(s, " ").concat(u, "px ").concat(l);
  for (var f = 0, p = 0, g = t.split(`
`), m = 0; m < g.length; m++) {
    var v = g[m], y = d.measureText(v), b = Math.ceil(y.width), w = u;
    f = Math.max(b, f), p += w;
  }
  return f += i, p += i, {
    width: f,
    height: p
  };
};
Xt.calculateLabelAngle = function(e, t) {
  var n = e._private, r = n.rscratch, a = e.isEdge(), i = t ? t + "-" : "", o = e.pstyle(i + "text-rotation"), u = o.strValue;
  return u === "none" ? 0 : a && u === "autorotate" ? r.labelAutoAngle : u === "autorotate" ? 0 : o.pfValue;
};
Xt.calculateLabelAngles = function(e) {
  var t = this, n = e.isEdge(), r = e._private, a = r.rscratch;
  a.labelAngle = t.calculateLabelAngle(e), n && (a.sourceLabelAngle = t.calculateLabelAngle(e, "source"), a.targetLabelAngle = t.calculateLabelAngle(e, "target"));
};
var vd = {};
var Mu = 28;
var Au = false;
vd.getNodeShape = function(e) {
  var t = this, n = e.pstyle("shape").value;
  if (n === "cutrectangle" && (e.width() < Mu || e.height() < Mu))
    return Au || (Ae("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Au = true), "rectangle";
  if (e.isParent())
    return n === "rectangle" || n === "roundrectangle" || n === "round-rectangle" || n === "cutrectangle" || n === "cut-rectangle" || n === "barrel" ? n : "rectangle";
  if (n === "polygon") {
    var r = e.pstyle("shape-polygon-points").value;
    return t.nodeShapes.makePolygon(r).name;
  }
  return n;
};
var Wa = {};
Wa.registerCalculationListeners = function() {
  var e = this.cy, t = e.collection(), n = this, r = function(i) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (t.merge(i), o)
      for (var u = 0; u < i.length; u++) {
        var l = i[u], s = l._private, c = s.rstyle;
        c.clean = false, c.cleanConnected = false;
      }
  };
  n.binder(e).on("bounds.* dirty.*", function(i) {
    var o = i.target;
    r(o);
  }).on("style.* background.*", function(i) {
    var o = i.target;
    r(o, false);
  });
  var a = function(i) {
    if (i) {
      var o = n.onUpdateEleCalcsFns;
      t.cleanStyle();
      for (var u = 0; u < t.length; u++) {
        var l = t[u], s = l._private.rstyle;
        l.isNode() && !s.cleanConnected && (r(l.connectedEdges()), s.cleanConnected = true);
      }
      if (o)
        for (var c = 0; c < o.length; c++) {
          var d = o[c];
          d(i, t);
        }
      n.recalculateRenderedStyle(t), t = e.collection();
    }
  };
  n.flushRenderedStyleQueue = function() {
    a(true);
  }, n.beforeRender(a, n.beforeRenderPriorities.eleCalcs);
};
Wa.onUpdateEleCalcs = function(e) {
  var t = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  t.push(e);
};
Wa.recalculateRenderedStyle = function(e, t) {
  var n = function(b) {
    return b._private.rstyle.cleanConnected;
  };
  if (e.length !== 0) {
    var r = [], a = [];
    if (!this.destroyed) {
      t === void 0 && (t = true);
      for (var i = 0; i < e.length; i++) {
        var o = e[i], u = o._private, l = u.rstyle;
        o.isEdge() && (!n(o.source()) || !n(o.target())) && (l.clean = false), o.isEdge() && o.isBundledBezier() && o.parallelEdges().some(function(b) {
          return !b._private.rstyle.clean && b.isBundledBezier();
        }) && (l.clean = false), !(t && l.clean || o.removed()) && o.pstyle("display").value !== "none" && (u.group === "nodes" ? a.push(o) : r.push(o), l.clean = true);
      }
      for (var s = 0; s < a.length; s++) {
        var c = a[s], d = c._private, h = d.rstyle, f = c.position();
        this.recalculateNodeLabelProjection(c), h.nodeX = f.x, h.nodeY = f.y, h.nodeW = c.pstyle("width").pfValue, h.nodeH = c.pstyle("height").pfValue;
      }
      this.recalculateEdgeProjections(r);
      for (var p = 0; p < r.length; p++) {
        var g = r[p], m = g._private, v = m.rstyle, y = m.rscratch;
        v.srcX = y.arrowStartX, v.srcY = y.arrowStartY, v.tgtX = y.arrowEndX, v.tgtY = y.arrowEndY, v.midX = y.midX, v.midY = y.midY, v.labelAngle = y.labelAngle, v.sourceLabelAngle = y.sourceLabelAngle, v.targetLabelAngle = y.targetLabelAngle;
      }
    }
  }
};
var Ga = {};
Ga.updateCachedGrabbedEles = function() {
  var e = this.cachedZSortedEles;
  if (e) {
    e.drag = [], e.nondrag = [];
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n], a = r._private.rscratch;
      r.grabbed() && !r.isParent() ? t.push(r) : a.inDragLayer ? e.drag.push(r) : e.nondrag.push(r);
    }
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      e.drag.push(r);
    }
  }
};
Ga.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
Ga.getCachedZSortedEles = function(e) {
  if (e || !this.cachedZSortedEles) {
    var t = this.cy.mutableElements().toArray();
    t.sort(Zc), t.interactive = t.filter(function(n) {
      return n.interactive();
    }), this.cachedZSortedEles = t, this.updateCachedGrabbedEles();
  } else
    t = this.cachedZSortedEles;
  return t;
};
var gd = {};
[Dn, Sa, vt, Fr, vs, Xt, vd, Wa, Ga].forEach(function(e) {
  ve(gd, e);
});
var yd = {};
yd.getCachedImage = function(e, t, n) {
  var r = this, a = r.imageCache = r.imageCache || {}, i = a[e];
  if (i)
    return i.image.complete || i.image.addEventListener("load", n), i.image;
  i = a[e] = a[e] || {};
  var o = i.image = new Image();
  o.addEventListener("load", n), o.addEventListener("error", function() {
    o.error = true;
  });
  var u = "data:", l = e.substring(0, u.length).toLowerCase() === u;
  return l || (t = t === "null" ? null : t, o.crossOrigin = t), o.src = e, o;
};
var ar = {};
ar.registerBinding = function(e, t, n, r) {
  var a = Array.prototype.slice.apply(arguments, [1]);
  if (Array.isArray(e)) {
    for (var i = [], o = 0; o < e.length; o++) {
      var u = e[o];
      if (u !== void 0) {
        var l = this.binder(u);
        i.push(l.on.apply(l, a));
      }
    }
    return i;
  }
  var l = this.binder(e);
  return l.on.apply(l, a);
};
ar.binder = function(e) {
  var t = this, n = t.cy.window(), r = e === n || e === n.document || e === n.document.body || uh(e);
  if (t.supportsPassiveEvents == null) {
    var a = false;
    try {
      var i = Object.defineProperty({}, "passive", {
        get: function() {
          return a = true, true;
        }
      });
      n.addEventListener("test", null, i);
    } catch {
    }
    t.supportsPassiveEvents = a;
  }
  var o = function(u, l, s) {
    var c = Array.prototype.slice.call(arguments);
    return r && t.supportsPassiveEvents && (c[2] = {
      capture: s ?? false,
      passive: false,
      once: false
    }), t.bindings.push({
      target: e,
      args: c
    }), (e.addEventListener || e.on).apply(e, c), this;
  };
  return {
    on: o,
    addEventListener: o,
    addListener: o,
    bind: o
  };
};
ar.nodeIsDraggable = function(e) {
  return e && e.isNode() && !e.locked() && e.grabbable();
};
ar.nodeIsGrabbable = function(e) {
  return this.nodeIsDraggable(e) && e.interactive();
};
ar.load = function() {
  var e = this, t = e.cy.window(), n = function(E) {
    return E.selected();
  }, r = function(E) {
    var F = E.getRootNode();
    if (F && F.nodeType === 11 && F.host !== void 0)
      return F;
  }, a = function(E, F, q, U) {
    E == null && (E = e.cy);
    for (var G = 0; G < F.length; G++) {
      var ae = F[G];
      E.emit({
        originalEvent: q,
        type: ae,
        position: U
      });
    }
  }, i = function(E) {
    return E.shiftKey || E.metaKey || E.ctrlKey;
  }, o = function(E, F) {
    var q = true;
    if (e.cy.hasCompoundNodes() && E && E.pannable())
      for (var U = 0; F && U < F.length; U++) {
        var E = F[U];
        if (E.isNode() && E.isParent() && !E.pannable()) {
          q = false;
          break;
        }
      }
    else
      q = true;
    return q;
  }, u = function(E) {
    E[0]._private.grabbed = true;
  }, l = function(E) {
    E[0]._private.grabbed = false;
  }, s = function(E) {
    E[0]._private.rscratch.inDragLayer = true;
  }, c = function(E) {
    E[0]._private.rscratch.inDragLayer = false;
  }, d = function(E) {
    E[0]._private.rscratch.isGrabTarget = true;
  }, h = function(E) {
    E[0]._private.rscratch.isGrabTarget = false;
  }, f = function(E, F) {
    var q = F.addToList, U = q.has(E);
    !U && E.grabbable() && !E.locked() && (q.merge(E), u(E));
  }, p = function(E, F) {
    if (E.cy().hasCompoundNodes() && !(F.inDragLayer == null && F.addToList == null)) {
      var q = E.descendants();
      F.inDragLayer && (q.forEach(s), q.connectedEdges().forEach(s)), F.addToList && f(q, F);
    }
  }, g = function(E, F) {
    F = F || {};
    var q = E.cy().hasCompoundNodes();
    F.inDragLayer && (E.forEach(s), E.neighborhood().stdFilter(function(U) {
      return !q || U.isEdge();
    }).forEach(s)), F.addToList && E.forEach(function(U) {
      f(U, F);
    }), p(E, F), y(E, {
      inDragLayer: F.inDragLayer
    }), e.updateCachedGrabbedEles();
  }, m = g, v = function(E) {
    E && (e.getCachedZSortedEles().forEach(function(F) {
      l(F), c(F), h(F);
    }), e.updateCachedGrabbedEles());
  }, y = function(E, F) {
    if (!(F.inDragLayer == null && F.addToList == null) && E.cy().hasCompoundNodes()) {
      var q = E.ancestors().orphans();
      if (!q.same(E)) {
        var U = q.descendants().spawnSelf().merge(q).unmerge(E).unmerge(E.descendants()), G = U.connectedEdges();
        F.inDragLayer && (G.forEach(s), U.forEach(s)), F.addToList && U.forEach(function(ae) {
          f(ae, F);
        });
      }
    }
  }, b = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, w = typeof MutationObserver < "u", T = typeof ResizeObserver < "u";
  w ? (e.removeObserver = new MutationObserver(function(E) {
    for (var F = 0; F < E.length; F++) {
      var q = E[F], U = q.removedNodes;
      if (U)
        for (var G = 0; G < U.length; G++) {
          var ae = U[G];
          if (ae === e.container) {
            e.destroy();
            break;
          }
        }
    }
  }), e.container.parentNode && e.removeObserver.observe(e.container.parentNode, {
    childList: true
  })) : e.registerBinding(e.container, "DOMNodeRemoved", function(E) {
    e.destroy();
  });
  var S = Lr(function() {
    e.cy.resize();
  }, 100);
  w && (e.styleObserver = new MutationObserver(S), e.styleObserver.observe(e.container, {
    attributes: true
  })), e.registerBinding(t, "resize", S), T && (e.resizeObserver = new ResizeObserver(S), e.resizeObserver.observe(e.container));
  var x = function(E, F) {
    for (; E != null; )
      F(E), E = E.parentNode;
  }, _ = function() {
    e.invalidateContainerClientCoordsCache();
  };
  x(e.container, function(E) {
    e.registerBinding(E, "transitionend", _), e.registerBinding(E, "animationend", _), e.registerBinding(E, "scroll", _);
  }), e.registerBinding(e.container, "contextmenu", function(E) {
    E.preventDefault();
  });
  var P = function() {
    return e.selection[4] !== 0;
  }, B = function(E) {
    for (var F = e.findContainerClientCoords(), q = F[0], U = F[1], G = F[2], ae = F[3], K = E.touches ? E.touches : [E], ue = false, le = 0; le < K.length; le++) {
      var pe = K[le];
      if (q <= pe.clientX && pe.clientX <= q + G && U <= pe.clientY && pe.clientY <= U + ae) {
        ue = true;
        break;
      }
    }
    if (!ue)
      return false;
    for (var Te = e.container, xe = E.target, ce = xe.parentNode, we = false; ce; ) {
      if (ce === Te) {
        we = true;
        break;
      }
      ce = ce.parentNode;
    }
    return !!we;
  };
  e.registerBinding(e.container, "mousedown", function(E) {
    if (B(E) && !(e.hoverData.which === 1 && E.which !== 1)) {
      E.preventDefault(), b(), e.hoverData.capture = true, e.hoverData.which = E.which;
      var F = e.cy, q = [E.clientX, E.clientY], U = e.projectIntoViewport(q[0], q[1]), G = e.selection, ae = e.findNearestElements(U[0], U[1], true, false), K = ae[0], ue = e.dragData.possibleDragElements;
      e.hoverData.mdownPos = U, e.hoverData.mdownGPos = q;
      var le = function(we) {
        return {
          originalEvent: E,
          type: we,
          position: {
            x: U[0],
            y: U[1]
          }
        };
      }, pe = function() {
        e.hoverData.tapholdCancelled = false, clearTimeout(e.hoverData.tapholdTimeout), e.hoverData.tapholdTimeout = setTimeout(function() {
          if (!e.hoverData.tapholdCancelled) {
            var we = e.hoverData.down;
            we ? we.emit(le("taphold")) : F.emit(le("taphold"));
          }
        }, e.tapholdDuration);
      };
      if (E.which == 3) {
        e.hoverData.cxtStarted = true;
        var Te = {
          originalEvent: E,
          type: "cxttapstart",
          position: {
            x: U[0],
            y: U[1]
          }
        };
        K ? (K.activate(), K.emit(Te), e.hoverData.down = K) : F.emit(Te), e.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), e.hoverData.cxtDragged = false;
      } else if (E.which == 1) {
        K && K.activate();
        {
          if (K != null && e.nodeIsGrabbable(K)) {
            var xe = function(we) {
              we.emit(le("grab"));
            };
            if (d(K), !K.selected())
              ue = e.dragData.possibleDragElements = F.collection(), m(K, {
                addToList: ue
              }), K.emit(le("grabon")).emit(le("grab"));
            else {
              ue = e.dragData.possibleDragElements = F.collection();
              var ce = F.$(function(we) {
                return we.isNode() && we.selected() && e.nodeIsGrabbable(we);
              });
              g(ce, {
                addToList: ue
              }), K.emit(le("grabon")), ce.forEach(xe);
            }
            e.redrawHint("eles", true), e.redrawHint("drag", true);
          }
          e.hoverData.down = K, e.hoverData.downs = ae, e.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
        }
        a(K, ["mousedown", "tapstart", "vmousedown"], E, {
          x: U[0],
          y: U[1]
        }), K == null ? (G[4] = 1, e.data.bgActivePosistion = {
          x: U[0],
          y: U[1]
        }, e.redrawHint("select", true), e.redraw()) : K.pannable() && (G[4] = 1), pe();
      }
      G[0] = G[2] = U[0], G[1] = G[3] = U[1];
    }
  }, false);
  var k = r(e.container);
  e.registerBinding([t, k], "mousemove", function(E) {
    var F = e.hoverData.capture;
    if (!(!F && !B(E))) {
      var q = false, U = e.cy, G = U.zoom(), ae = [E.clientX, E.clientY], K = e.projectIntoViewport(ae[0], ae[1]), ue = e.hoverData.mdownPos, le = e.hoverData.mdownGPos, pe = e.selection, Te = null;
      !e.hoverData.draggingEles && !e.hoverData.dragging && !e.hoverData.selecting && (Te = e.findNearestElement(K[0], K[1], true, false));
      var xe = e.hoverData.last, ce = e.hoverData.down, we = [K[0] - pe[2], K[1] - pe[3]], De = e.dragData.possibleDragElements, Ue;
      if (le) {
        var st = ae[0] - le[0], gt = st * st, He = ae[1] - le[1], rt = He * He, Ke = gt + rt;
        e.hoverData.isOverThresholdDrag = Ue = Ke >= e.desktopTapThreshold2;
      }
      var yt = i(E);
      Ue && (e.hoverData.tapholdCancelled = true);
      var Qt = function() {
        var Lt = e.hoverData.dragDelta = e.hoverData.dragDelta || [];
        Lt.length === 0 ? (Lt.push(we[0]), Lt.push(we[1])) : (Lt[0] += we[0], Lt[1] += we[1]);
      };
      q = true, a(Te, ["mousemove", "vmousemove", "tapdrag"], E, {
        x: K[0],
        y: K[1]
      });
      var Ze = function(Lt) {
        return {
          originalEvent: E,
          type: Lt,
          position: {
            x: K[0],
            y: K[1]
          }
        };
      }, kt = function() {
        e.data.bgActivePosistion = void 0, e.hoverData.selecting || U.emit(Ze("boxstart")), pe[4] = 1, e.hoverData.selecting = true, e.redrawHint("select", true), e.redraw();
      };
      if (e.hoverData.which === 3) {
        if (Ue) {
          var Yr = Ze("cxtdrag");
          ce ? ce.emit(Yr) : U.emit(Yr), e.hoverData.cxtDragged = true, (!e.hoverData.cxtOver || Te !== e.hoverData.cxtOver) && (e.hoverData.cxtOver && e.hoverData.cxtOver.emit(Ze("cxtdragout")), e.hoverData.cxtOver = Te, Te && Te.emit(Ze("cxtdragover")));
        }
      } else if (e.hoverData.dragging) {
        if (q = true, U.panningEnabled() && U.userPanningEnabled()) {
          var An;
          if (e.hoverData.justStartedPan) {
            var qr = e.hoverData.mdownPos;
            An = {
              x: (K[0] - qr[0]) * G,
              y: (K[1] - qr[1]) * G
            }, e.hoverData.justStartedPan = false;
          } else
            An = {
              x: we[0] * G,
              y: we[1] * G
            };
          U.panBy(An), U.emit(Ze("dragpan")), e.hoverData.dragged = true;
        }
        K = e.projectIntoViewport(E.clientX, E.clientY);
      } else if (pe[4] == 1 && (ce == null || ce.pannable())) {
        if (Ue) {
          if (!e.hoverData.dragging && U.boxSelectionEnabled() && (yt || !U.panningEnabled() || !U.userPanningEnabled()))
            kt();
          else if (!e.hoverData.selecting && U.panningEnabled() && U.userPanningEnabled()) {
            var yn = o(ce, e.hoverData.downs);
            yn && (e.hoverData.dragging = true, e.hoverData.justStartedPan = true, pe[4] = 0, e.data.bgActivePosistion = Xn(ue), e.redrawHint("select", true), e.redraw());
          }
          ce && ce.pannable() && ce.active() && ce.unactivate();
        }
      } else {
        if (ce && ce.pannable() && ce.active() && ce.unactivate(), (!ce || !ce.grabbed()) && Te != xe && (xe && a(xe, ["mouseout", "tapdragout"], E, {
          x: K[0],
          y: K[1]
        }), Te && a(Te, ["mouseover", "tapdragover"], E, {
          x: K[0],
          y: K[1]
        }), e.hoverData.last = Te), ce)
          if (Ue) {
            if (U.boxSelectionEnabled() && yt)
              ce && ce.grabbed() && (v(De), ce.emit(Ze("freeon")), De.emit(Ze("free")), e.dragData.didDrag && (ce.emit(Ze("dragfreeon")), De.emit(Ze("dragfree")))), kt();
            else if (ce && ce.grabbed() && e.nodeIsDraggable(ce)) {
              var wt = !e.dragData.didDrag;
              wt && e.redrawHint("eles", true), e.dragData.didDrag = true, e.hoverData.draggingEles || g(De, {
                inDragLayer: true
              });
              var ht = {
                x: 0,
                y: 0
              };
              if (ee(we[0]) && ee(we[1]) && (ht.x += we[0], ht.y += we[1], wt)) {
                var Et = e.hoverData.dragDelta;
                Et && ee(Et[0]) && ee(Et[1]) && (ht.x += Et[0], ht.y += Et[1]);
              }
              e.hoverData.draggingEles = true, De.silentShift(ht).emit(Ze("position")).emit(Ze("drag")), e.redrawHint("drag", true), e.redraw();
            }
          } else
            Qt();
        q = true;
      }
      if (pe[2] = K[0], pe[3] = K[1], q)
        return E.stopPropagation && E.stopPropagation(), E.preventDefault && E.preventDefault(), false;
    }
  }, false);
  var C, M, D;
  e.registerBinding(t, "mouseup", function(E) {
    if (!(e.hoverData.which === 1 && E.which !== 1 && e.hoverData.capture)) {
      var F = e.hoverData.capture;
      if (F) {
        e.hoverData.capture = false;
        var q = e.cy, U = e.projectIntoViewport(E.clientX, E.clientY), G = e.selection, ae = e.findNearestElement(U[0], U[1], true, false), K = e.dragData.possibleDragElements, ue = e.hoverData.down, le = i(E);
        e.data.bgActivePosistion && (e.redrawHint("select", true), e.redraw()), e.hoverData.tapholdCancelled = true, e.data.bgActivePosistion = void 0, ue && ue.unactivate();
        var pe = function(Ue) {
          return {
            originalEvent: E,
            type: Ue,
            position: {
              x: U[0],
              y: U[1]
            }
          };
        };
        if (e.hoverData.which === 3) {
          var Te = pe("cxttapend");
          if (ue ? ue.emit(Te) : q.emit(Te), !e.hoverData.cxtDragged) {
            var xe = pe("cxttap");
            ue ? ue.emit(xe) : q.emit(xe);
          }
          e.hoverData.cxtDragged = false, e.hoverData.which = null;
        } else if (e.hoverData.which === 1) {
          if (a(ae, ["mouseup", "tapend", "vmouseup"], E, {
            x: U[0],
            y: U[1]
          }), !e.dragData.didDrag && // didn't move a node around
          !e.hoverData.dragged && // didn't pan
          !e.hoverData.selecting && // not box selection
          !e.hoverData.isOverThresholdDrag && (a(ue, ["click", "tap", "vclick"], E, {
            x: U[0],
            y: U[1]
          }), M = false, E.timeStamp - D <= q.multiClickDebounceTime() ? (C && clearTimeout(C), M = true, D = null, a(ue, ["dblclick", "dbltap", "vdblclick"], E, {
            x: U[0],
            y: U[1]
          })) : (C = setTimeout(function() {
            M || a(ue, ["oneclick", "onetap", "voneclick"], E, {
              x: U[0],
              y: U[1]
            });
          }, q.multiClickDebounceTime()), D = E.timeStamp)), ue == null && !e.dragData.didDrag && !e.hoverData.selecting && !e.hoverData.dragged && !i(E) && (q.$(n).unselect(["tapunselect"]), K.length > 0 && e.redrawHint("eles", true), e.dragData.possibleDragElements = K = q.collection()), ae == ue && !e.dragData.didDrag && !e.hoverData.selecting && ae != null && ae._private.selectable && (e.hoverData.dragging || (q.selectionType() === "additive" || le ? ae.selected() ? ae.unselect(["tapunselect"]) : ae.select(["tapselect"]) : le || (q.$(n).unmerge(ae).unselect(["tapunselect"]), ae.select(["tapselect"]))), e.redrawHint("eles", true)), e.hoverData.selecting) {
            var ce = q.collection(e.getAllInBox(G[0], G[1], G[2], G[3]));
            e.redrawHint("select", true), ce.length > 0 && e.redrawHint("eles", true), q.emit(pe("boxend"));
            var we = function(Ue) {
              return Ue.selectable() && !Ue.selected();
            };
            q.selectionType() === "additive" || le || q.$(n).unmerge(ce).unselect(), ce.emit(pe("box")).stdFilter(we).select().emit(pe("boxselect")), e.redraw();
          }
          if (e.hoverData.dragging && (e.hoverData.dragging = false, e.redrawHint("select", true), e.redrawHint("eles", true), e.redraw()), !G[4]) {
            e.redrawHint("drag", true), e.redrawHint("eles", true);
            var De = ue && ue.grabbed();
            v(K), De && (ue.emit(pe("freeon")), K.emit(pe("free")), e.dragData.didDrag && (ue.emit(pe("dragfreeon")), K.emit(pe("dragfree"))));
          }
        }
        G[4] = 0, e.hoverData.down = null, e.hoverData.cxtStarted = false, e.hoverData.draggingEles = false, e.hoverData.selecting = false, e.hoverData.isOverThresholdDrag = false, e.dragData.didDrag = false, e.hoverData.dragged = false, e.hoverData.dragDelta = [], e.hoverData.mdownPos = null, e.hoverData.mdownGPos = null, e.hoverData.which = null;
      }
    }
  }, false);
  var N = [], A = 4, L, R = 1e5, I = function(E, F) {
    for (var q = 0; q < E.length; q++)
      if (E[q] % F !== 0)
        return false;
    return true;
  }, X = function(E) {
    for (var F = Math.abs(E[0]), q = 1; q < E.length; q++)
      if (Math.abs(E[q]) !== F)
        return false;
    return true;
  }, V = function(E) {
    var F = false, q = E.deltaY;
    if (q == null && (E.wheelDeltaY != null ? q = E.wheelDeltaY / 4 : E.wheelDelta != null && (q = E.wheelDelta / 4)), L == null)
      if (N.length >= A) {
        var U = N;
        if (L = I(U, 5), !L) {
          var G = Math.abs(U[0]);
          L = X(U) && G > 5;
        }
        if (L)
          for (var ae = 0; ae < U.length; ae++)
            R = Math.min(Math.abs(U[ae]), R);
      } else
        N.push(q), F = true;
    else L && (R = Math.min(Math.abs(q), R));
    if (!e.scrollingPage) {
      var K = e.cy, ue = K.zoom(), le = K.pan(), pe = e.projectIntoViewport(E.clientX, E.clientY), Te = [pe[0] * ue + le.x, pe[1] * ue + le.y];
      if (e.hoverData.draggingEles || e.hoverData.dragging || e.hoverData.cxtStarted || P()) {
        E.preventDefault();
        return;
      }
      if (K.panningEnabled() && K.userPanningEnabled() && K.zoomingEnabled() && K.userZoomingEnabled()) {
        E.preventDefault(), e.data.wheelZooming = true, clearTimeout(e.data.wheelTimeout), e.data.wheelTimeout = setTimeout(function() {
          e.data.wheelZooming = false, e.redrawHint("eles", true), e.redraw();
        }, 150);
        var xe;
        F && Math.abs(q) > 5 && (q = ts(q) * 5), xe = q / -250, L && (xe /= R, xe *= 3), xe = xe * e.wheelSensitivity;
        var ce = E.deltaMode === 1;
        ce && (xe *= 33);
        var we = K.zoom() * Math.pow(10, xe);
        E.type === "gesturechange" && (we = e.gestureStartZoom * E.scale), K.zoom({
          level: we,
          renderedPosition: {
            x: Te[0],
            y: Te[1]
          }
        }), K.emit({
          type: E.type === "gesturechange" ? "pinchzoom" : "scrollzoom",
          originalEvent: E,
          position: {
            x: pe[0],
            y: pe[1]
          }
        });
      }
    }
  };
  e.registerBinding(e.container, "wheel", V, true), e.registerBinding(t, "scroll", function(E) {
    e.scrollingPage = true, clearTimeout(e.scrollingPageTimeout), e.scrollingPageTimeout = setTimeout(function() {
      e.scrollingPage = false;
    }, 250);
  }, true), e.registerBinding(e.container, "gesturestart", function(E) {
    e.gestureStartZoom = e.cy.zoom(), e.hasTouchStarted || E.preventDefault();
  }, true), e.registerBinding(e.container, "gesturechange", function(E) {
    e.hasTouchStarted || V(E);
  }, true), e.registerBinding(e.container, "mouseout", function(E) {
    var F = e.projectIntoViewport(E.clientX, E.clientY);
    e.cy.emit({
      originalEvent: E,
      type: "mouseout",
      position: {
        x: F[0],
        y: F[1]
      }
    });
  }, false), e.registerBinding(e.container, "mouseover", function(E) {
    var F = e.projectIntoViewport(E.clientX, E.clientY);
    e.cy.emit({
      originalEvent: E,
      type: "mouseover",
      position: {
        x: F[0],
        y: F[1]
      }
    });
  }, false);
  var Y, W, Q, J, Z, $, te, z, O, j, H, ne, oe, Re = function(E, F, q, U) {
    return Math.sqrt((q - E) * (q - E) + (U - F) * (U - F));
  }, be = function(E, F, q, U) {
    return (q - E) * (q - E) + (U - F) * (U - F);
  }, Ce;
  e.registerBinding(e.container, "touchstart", Ce = function(E) {
    if (e.hasTouchStarted = true, !!B(E)) {
      b(), e.touchData.capture = true, e.data.bgActivePosistion = void 0;
      var F = e.cy, q = e.touchData.now, U = e.touchData.earlier;
      if (E.touches[0]) {
        var G = e.projectIntoViewport(E.touches[0].clientX, E.touches[0].clientY);
        q[0] = G[0], q[1] = G[1];
      }
      if (E.touches[1]) {
        var G = e.projectIntoViewport(E.touches[1].clientX, E.touches[1].clientY);
        q[2] = G[0], q[3] = G[1];
      }
      if (E.touches[2]) {
        var G = e.projectIntoViewport(E.touches[2].clientX, E.touches[2].clientY);
        q[4] = G[0], q[5] = G[1];
      }
      var ae = function(Ke) {
        return {
          originalEvent: E,
          type: Ke,
          position: {
            x: q[0],
            y: q[1]
          }
        };
      };
      if (E.touches[1]) {
        e.touchData.singleTouchMoved = true, v(e.dragData.touchDragEles);
        var K = e.findContainerClientCoords();
        O = K[0], j = K[1], H = K[2], ne = K[3], Y = E.touches[0].clientX - O, W = E.touches[0].clientY - j, Q = E.touches[1].clientX - O, J = E.touches[1].clientY - j, oe = 0 <= Y && Y <= H && 0 <= Q && Q <= H && 0 <= W && W <= ne && 0 <= J && J <= ne;
        var ue = F.pan(), le = F.zoom();
        Z = Re(Y, W, Q, J), $ = be(Y, W, Q, J), te = [(Y + Q) / 2, (W + J) / 2], z = [(te[0] - ue.x) / le, (te[1] - ue.y) / le];
        var pe = 200, Te = pe * pe;
        if ($ < Te && !E.touches[2]) {
          var xe = e.findNearestElement(q[0], q[1], true, true), ce = e.findNearestElement(q[2], q[3], true, true);
          xe && xe.isNode() ? (xe.activate().emit(ae("cxttapstart")), e.touchData.start = xe) : ce && ce.isNode() ? (ce.activate().emit(ae("cxttapstart")), e.touchData.start = ce) : F.emit(ae("cxttapstart")), e.touchData.start && (e.touchData.start._private.grabbed = false), e.touchData.cxt = true, e.touchData.cxtDragged = false, e.data.bgActivePosistion = void 0, e.redraw();
          return;
        }
      }
      if (E.touches[2])
        F.boxSelectionEnabled() && E.preventDefault();
      else if (!E.touches[1] && E.touches[0]) {
        var we = e.findNearestElements(q[0], q[1], true, true), De = we[0];
        if (De != null && (De.activate(), e.touchData.start = De, e.touchData.starts = we, e.nodeIsGrabbable(De))) {
          var Ue = e.dragData.touchDragEles = F.collection(), st = null;
          e.redrawHint("eles", true), e.redrawHint("drag", true), De.selected() ? (st = F.$(function(Ke) {
            return Ke.selected() && e.nodeIsGrabbable(Ke);
          }), g(st, {
            addToList: Ue
          })) : m(De, {
            addToList: Ue
          }), d(De), De.emit(ae("grabon")), st ? st.forEach(function(Ke) {
            Ke.emit(ae("grab"));
          }) : De.emit(ae("grab"));
        }
        a(De, ["touchstart", "tapstart", "vmousedown"], E, {
          x: q[0],
          y: q[1]
        }), De == null && (e.data.bgActivePosistion = {
          x: G[0],
          y: G[1]
        }, e.redrawHint("select", true), e.redraw()), e.touchData.singleTouchMoved = false, e.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(e.touchData.tapholdTimeout), e.touchData.tapholdTimeout = setTimeout(function() {
          e.touchData.singleTouchMoved === false && !e.pinching && !e.touchData.selecting && a(e.touchData.start, ["taphold"], E, {
            x: q[0],
            y: q[1]
          });
        }, e.tapholdDuration);
      }
      if (E.touches.length >= 1) {
        for (var gt = e.touchData.startPosition = [null, null, null, null, null, null], He = 0; He < q.length; He++)
          gt[He] = U[He] = q[He];
        var rt = E.touches[0];
        e.touchData.startGPosition = [rt.clientX, rt.clientY];
      }
    }
  }, false);
  var re;
  e.registerBinding(t, "touchmove", re = function(E) {
    var F = e.touchData.capture;
    if (!(!F && !B(E))) {
      var q = e.selection, U = e.cy, G = e.touchData.now, ae = e.touchData.earlier, K = U.zoom();
      if (E.touches[0]) {
        var ue = e.projectIntoViewport(E.touches[0].clientX, E.touches[0].clientY);
        G[0] = ue[0], G[1] = ue[1];
      }
      if (E.touches[1]) {
        var ue = e.projectIntoViewport(E.touches[1].clientX, E.touches[1].clientY);
        G[2] = ue[0], G[3] = ue[1];
      }
      if (E.touches[2]) {
        var ue = e.projectIntoViewport(E.touches[2].clientX, E.touches[2].clientY);
        G[4] = ue[0], G[5] = ue[1];
      }
      var le = function(Hd) {
        return {
          originalEvent: E,
          type: Hd,
          position: {
            x: G[0],
            y: G[1]
          }
        };
      }, pe = e.touchData.startGPosition, Te;
      if (F && E.touches[0] && pe) {
        for (var xe = [], ce = 0; ce < G.length; ce++)
          xe[ce] = G[ce] - ae[ce];
        var we = E.touches[0].clientX - pe[0], De = we * we, Ue = E.touches[0].clientY - pe[1], st = Ue * Ue, gt = De + st;
        Te = gt >= e.touchTapThreshold2;
      }
      if (F && e.touchData.cxt) {
        E.preventDefault();
        var He = E.touches[0].clientX - O, rt = E.touches[0].clientY - j, Ke = E.touches[1].clientX - O, yt = E.touches[1].clientY - j, Qt = be(He, rt, Ke, yt), Ze = Qt / $, kt = 150, Yr = kt * kt, An = 1.5, qr = An * An;
        if (Ze >= qr || Qt >= Yr) {
          e.touchData.cxt = false, e.data.bgActivePosistion = void 0, e.redrawHint("select", true);
          var yn = le("cxttapend");
          e.touchData.start ? (e.touchData.start.unactivate().emit(yn), e.touchData.start = null) : U.emit(yn);
        }
      }
      if (F && e.touchData.cxt) {
        var yn = le("cxtdrag");
        e.data.bgActivePosistion = void 0, e.redrawHint("select", true), e.touchData.start ? e.touchData.start.emit(yn) : U.emit(yn), e.touchData.start && (e.touchData.start._private.grabbed = false), e.touchData.cxtDragged = true;
        var wt = e.findNearestElement(G[0], G[1], true, true);
        (!e.touchData.cxtOver || wt !== e.touchData.cxtOver) && (e.touchData.cxtOver && e.touchData.cxtOver.emit(le("cxtdragout")), e.touchData.cxtOver = wt, wt && wt.emit(le("cxtdragover")));
      } else if (F && E.touches[2] && U.boxSelectionEnabled())
        E.preventDefault(), e.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), e.touchData.selecting || U.emit(le("boxstart")), e.touchData.selecting = true, e.touchData.didSelect = true, q[4] = 1, !q || q.length === 0 || q[0] === void 0 ? (q[0] = (G[0] + G[2] + G[4]) / 3, q[1] = (G[1] + G[3] + G[5]) / 3, q[2] = (G[0] + G[2] + G[4]) / 3 + 1, q[3] = (G[1] + G[3] + G[5]) / 3 + 1) : (q[2] = (G[0] + G[2] + G[4]) / 3, q[3] = (G[1] + G[3] + G[5]) / 3), e.redrawHint("select", true), e.redraw();
      else if (F && E.touches[1] && !e.touchData.didSelect && U.zoomingEnabled() && U.panningEnabled() && U.userZoomingEnabled() && U.userPanningEnabled()) {
        E.preventDefault(), e.data.bgActivePosistion = void 0, e.redrawHint("select", true);
        var ht = e.dragData.touchDragEles;
        if (ht) {
          e.redrawHint("drag", true);
          for (var Et = 0; Et < ht.length; Et++) {
            var Lt = ht[Et]._private;
            Lt.grabbed = false, Lt.rscratch.inDragLayer = false;
          }
        }
        var Ur = e.touchData.start, He = E.touches[0].clientX - O, rt = E.touches[0].clientY - j, Ke = E.touches[1].clientX - O, yt = E.touches[1].clientY - j, ms = Re(He, rt, Ke, yt), Vd = ms / Z;
        if (oe) {
          var Fd = He - Y, jd = rt - W, Xd = Ke - Q, Yd = yt - J, qd = (Fd + Xd) / 2, Ud = (jd + Yd) / 2, or = U.zoom(), Ha = or * Vd, Wr = U.pan(), bs = z[0] * or + Wr.x, xs = z[1] * or + Wr.y, Wd = {
            x: -Ha / or * (bs - Wr.x - qd) + bs,
            y: -Ha / or * (xs - Wr.y - Ud) + xs
          };
          if (Ur && Ur.active()) {
            var ht = e.dragData.touchDragEles;
            v(ht), e.redrawHint("drag", true), e.redrawHint("eles", true), Ur.unactivate().emit(le("freeon")), ht.emit(le("free")), e.dragData.didDrag && (Ur.emit(le("dragfreeon")), ht.emit(le("dragfree")));
          }
          U.viewport({
            zoom: Ha,
            pan: Wd,
            cancelOnFailedZoom: true
          }), U.emit(le("pinchzoom")), Z = ms, Y = He, W = rt, Q = Ke, J = yt, e.pinching = true;
        }
        if (E.touches[0]) {
          var ue = e.projectIntoViewport(E.touches[0].clientX, E.touches[0].clientY);
          G[0] = ue[0], G[1] = ue[1];
        }
        if (E.touches[1]) {
          var ue = e.projectIntoViewport(E.touches[1].clientX, E.touches[1].clientY);
          G[2] = ue[0], G[3] = ue[1];
        }
        if (E.touches[2]) {
          var ue = e.projectIntoViewport(E.touches[2].clientX, E.touches[2].clientY);
          G[4] = ue[0], G[5] = ue[1];
        }
      } else if (E.touches[0] && !e.touchData.didSelect) {
        var Mt = e.touchData.start, Ka = e.touchData.last, wt;
        if (!e.hoverData.draggingEles && !e.swipePanning && (wt = e.findNearestElement(G[0], G[1], true, true)), F && Mt != null && E.preventDefault(), F && Mt != null && e.nodeIsDraggable(Mt))
          if (Te) {
            var ht = e.dragData.touchDragEles, ws = !e.dragData.didDrag;
            ws && g(ht, {
              inDragLayer: true
            }), e.dragData.didDrag = true;
            var sr = {
              x: 0,
              y: 0
            };
            if (ee(xe[0]) && ee(xe[1]) && (sr.x += xe[0], sr.y += xe[1], ws)) {
              e.redrawHint("eles", true);
              var At = e.touchData.dragDelta;
              At && ee(At[0]) && ee(At[1]) && (sr.x += At[0], sr.y += At[1]);
            }
            e.hoverData.draggingEles = true, ht.silentShift(sr).emit(le("position")).emit(le("drag")), e.redrawHint("drag", true), e.touchData.startPosition[0] == ae[0] && e.touchData.startPosition[1] == ae[1] && e.redrawHint("eles", true), e.redraw();
          } else {
            var At = e.touchData.dragDelta = e.touchData.dragDelta || [];
            At.length === 0 ? (At.push(xe[0]), At.push(xe[1])) : (At[0] += xe[0], At[1] += xe[1]);
          }
        if (a(Mt || wt, ["touchmove", "tapdrag", "vmousemove"], E, {
          x: G[0],
          y: G[1]
        }), (!Mt || !Mt.grabbed()) && wt != Ka && (Ka && Ka.emit(le("tapdragout")), wt && wt.emit(le("tapdragover"))), e.touchData.last = wt, F)
          for (var Et = 0; Et < G.length; Et++)
            G[Et] && e.touchData.startPosition[Et] && Te && (e.touchData.singleTouchMoved = true);
        if (F && (Mt == null || Mt.pannable()) && U.panningEnabled() && U.userPanningEnabled()) {
          var Gd = o(Mt, e.touchData.starts);
          Gd && (E.preventDefault(), e.data.bgActivePosistion || (e.data.bgActivePosistion = Xn(e.touchData.startPosition)), e.swipePanning ? (U.panBy({
            x: xe[0] * K,
            y: xe[1] * K
          }), U.emit(le("dragpan"))) : Te && (e.swipePanning = true, U.panBy({
            x: we * K,
            y: Ue * K
          }), U.emit(le("dragpan")), Mt && (Mt.unactivate(), e.redrawHint("select", true), e.touchData.start = null)));
          var ue = e.projectIntoViewport(E.touches[0].clientX, E.touches[0].clientY);
          G[0] = ue[0], G[1] = ue[1];
        }
      }
      for (var ce = 0; ce < G.length; ce++)
        ae[ce] = G[ce];
      F && E.touches.length > 0 && !e.hoverData.draggingEles && !e.swipePanning && e.data.bgActivePosistion != null && (e.data.bgActivePosistion = void 0, e.redrawHint("select", true), e.redraw());
    }
  }, false);
  var de;
  e.registerBinding(t, "touchcancel", de = function(E) {
    var F = e.touchData.start;
    e.touchData.capture = false, F && F.unactivate();
  });
  var he, ye, me, Se;
  if (e.registerBinding(t, "touchend", he = function(E) {
    var F = e.touchData.start, q = e.touchData.capture;
    if (q)
      E.touches.length === 0 && (e.touchData.capture = false), E.preventDefault();
    else
      return;
    var U = e.selection;
    e.swipePanning = false, e.hoverData.draggingEles = false;
    var G = e.cy, ae = G.zoom(), K = e.touchData.now, ue = e.touchData.earlier;
    if (E.touches[0]) {
      var le = e.projectIntoViewport(E.touches[0].clientX, E.touches[0].clientY);
      K[0] = le[0], K[1] = le[1];
    }
    if (E.touches[1]) {
      var le = e.projectIntoViewport(E.touches[1].clientX, E.touches[1].clientY);
      K[2] = le[0], K[3] = le[1];
    }
    if (E.touches[2]) {
      var le = e.projectIntoViewport(E.touches[2].clientX, E.touches[2].clientY);
      K[4] = le[0], K[5] = le[1];
    }
    var pe = function(kt) {
      return {
        originalEvent: E,
        type: kt,
        position: {
          x: K[0],
          y: K[1]
        }
      };
    };
    F && F.unactivate();
    var Te;
    if (e.touchData.cxt) {
      if (Te = pe("cxttapend"), F ? F.emit(Te) : G.emit(Te), !e.touchData.cxtDragged) {
        var xe = pe("cxttap");
        F ? F.emit(xe) : G.emit(xe);
      }
      e.touchData.start && (e.touchData.start._private.grabbed = false), e.touchData.cxt = false, e.touchData.start = null, e.redraw();
      return;
    }
    if (!E.touches[2] && G.boxSelectionEnabled() && e.touchData.selecting) {
      e.touchData.selecting = false;
      var ce = G.collection(e.getAllInBox(U[0], U[1], U[2], U[3]));
      U[0] = void 0, U[1] = void 0, U[2] = void 0, U[3] = void 0, U[4] = 0, e.redrawHint("select", true), G.emit(pe("boxend"));
      var we = function(kt) {
        return kt.selectable() && !kt.selected();
      };
      ce.emit(pe("box")).stdFilter(we).select().emit(pe("boxselect")), ce.nonempty() && e.redrawHint("eles", true), e.redraw();
    }
    if (F == null ? void 0 : F.unactivate(), E.touches[2])
      e.data.bgActivePosistion = void 0, e.redrawHint("select", true);
    else if (!E.touches[1] && !E.touches[0] && !E.touches[0]) {
      e.data.bgActivePosistion = void 0, e.redrawHint("select", true);
      var De = e.dragData.touchDragEles;
      if (F != null) {
        var Ue = F._private.grabbed;
        v(De), e.redrawHint("drag", true), e.redrawHint("eles", true), Ue && (F.emit(pe("freeon")), De.emit(pe("free")), e.dragData.didDrag && (F.emit(pe("dragfreeon")), De.emit(pe("dragfree")))), a(F, ["touchend", "tapend", "vmouseup", "tapdragout"], E, {
          x: K[0],
          y: K[1]
        }), F.unactivate(), e.touchData.start = null;
      } else {
        var st = e.findNearestElement(K[0], K[1], true, true);
        a(st, ["touchend", "tapend", "vmouseup", "tapdragout"], E, {
          x: K[0],
          y: K[1]
        });
      }
      var gt = e.touchData.startPosition[0] - K[0], He = gt * gt, rt = e.touchData.startPosition[1] - K[1], Ke = rt * rt, yt = He + Ke, Qt = yt * ae * ae;
      e.touchData.singleTouchMoved || (F || G.$(":selected").unselect(["tapunselect"]), a(F, ["tap", "vclick"], E, {
        x: K[0],
        y: K[1]
      }), ye = false, E.timeStamp - Se <= G.multiClickDebounceTime() ? (me && clearTimeout(me), ye = true, Se = null, a(F, ["dbltap", "vdblclick"], E, {
        x: K[0],
        y: K[1]
      })) : (me = setTimeout(function() {
        ye || a(F, ["onetap", "voneclick"], E, {
          x: K[0],
          y: K[1]
        });
      }, G.multiClickDebounceTime()), Se = E.timeStamp)), F != null && !e.dragData.didDrag && F._private.selectable && Qt < e.touchTapThreshold2 && !e.pinching && (G.selectionType() === "single" ? (G.$(n).unmerge(F).unselect(["tapunselect"]), F.select(["tapselect"])) : F.selected() ? F.unselect(["tapunselect"]) : F.select(["tapselect"]), e.redrawHint("eles", true)), e.touchData.singleTouchMoved = true;
    }
    for (var Ze = 0; Ze < K.length; Ze++)
      ue[Ze] = K[Ze];
    e.dragData.didDrag = false, E.touches.length === 0 && (e.touchData.dragDelta = [], e.touchData.startPosition = [null, null, null, null, null, null], e.touchData.startGPosition = null, e.touchData.didSelect = false), E.touches.length < 2 && (E.touches.length === 1 && (e.touchData.startGPosition = [E.touches[0].clientX, E.touches[0].clientY]), e.pinching = false, e.redrawHint("eles", true), e.redraw());
  }, false), typeof TouchEvent > "u") {
    var Pe = [], Ie = function(E) {
      return {
        clientX: E.clientX,
        clientY: E.clientY,
        force: 1,
        identifier: E.pointerId,
        pageX: E.pageX,
        pageY: E.pageY,
        radiusX: E.width / 2,
        radiusY: E.height / 2,
        screenX: E.screenX,
        screenY: E.screenY,
        target: E.target
      };
    }, Ge = function(E) {
      return {
        event: E,
        touch: Ie(E)
      };
    }, Xe = function(E) {
      Pe.push(Ge(E));
    }, Fe = function(E) {
      for (var F = 0; F < Pe.length; F++) {
        var q = Pe[F];
        if (q.event.pointerId === E.pointerId) {
          Pe.splice(F, 1);
          return;
        }
      }
    }, je = function(E) {
      var F = Pe.filter(function(q) {
        return q.event.pointerId === E.pointerId;
      })[0];
      F.event = E, F.touch = Ie(E);
    }, se = function(E) {
      E.touches = Pe.map(function(F) {
        return F.touch;
      });
    }, ge = function(E) {
      return E.pointerType === "mouse" || E.pointerType === 4;
    };
    e.registerBinding(e.container, "pointerdown", function(E) {
      ge(E) || (E.preventDefault(), Xe(E), se(E), Ce(E));
    }), e.registerBinding(e.container, "pointerup", function(E) {
      ge(E) || (Fe(E), se(E), he(E));
    }), e.registerBinding(e.container, "pointercancel", function(E) {
      ge(E) || (Fe(E), se(E), de(E));
    }), e.registerBinding(e.container, "pointermove", function(E) {
      ge(E) || (E.preventDefault(), je(E), se(E), re(E));
    });
  }
};
var Kt = {};
Kt.generatePolygon = function(e, t) {
  return this.nodeShapes[e] = {
    renderer: this,
    name: e,
    points: t,
    draw: function(n, r, a, i, o, u) {
      this.renderer.nodeShapeImpl("polygon", n, r, a, i, o, this.points);
    },
    intersectLine: function(n, r, a, i, o, u, l, s) {
      return Pr(o, u, this.points, n, r, a / 2, i / 2, l);
    },
    checkPoint: function(n, r, a, i, o, u, l, s) {
      return Ht(n, r, this.points, u, l, i, o, [0, -1], a);
    },
    hasMiterBounds: e !== "rectangle",
    miterBounds: function(n, r, a, i, o, u) {
      return Pf(this.points, n, r, a, i, o);
    }
  };
};
Kt.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: function(e, t, n, r, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
    },
    intersectLine: function(e, t, n, r, a, i, o, u) {
      return Rf(a, i, e, t, n / 2 + o, r / 2 + o);
    },
    checkPoint: function(e, t, n, r, a, i, o, u) {
      return Cn(e, t, r, a, i, o, n);
    }
  };
};
Kt.generateRoundPolygon = function(e, t) {
  return this.nodeShapes[e] = {
    renderer: this,
    name: e,
    points: t,
    getOrCreateCorners: function(n, r, a, i, o, u, l) {
      if (u[l] !== void 0 && u[l + "-cx"] === n && u[l + "-cy"] === r)
        return u[l];
      u[l] = new Array(t.length / 2), u[l + "-cx"] = n, u[l + "-cy"] = r;
      var s = a / 2, c = i / 2;
      o = o === "auto" ? mc(a, i) : o;
      for (var d = new Array(t.length / 2), h = 0; h < t.length / 2; h++)
        d[h] = {
          x: n + s * t[h * 2],
          y: r + c * t[h * 2 + 1]
        };
      var f, p, g, m, v = d.length;
      for (p = d[v - 1], f = 0; f < v; f++)
        g = d[f % v], m = d[(f + 1) % v], u[l][f] = ps(p, g, m, o), p = g, g = m;
      return u[l];
    },
    draw: function(n, r, a, i, o, u, l) {
      this.renderer.nodeShapeImpl("round-polygon", n, r, a, i, o, this.points, this.getOrCreateCorners(r, a, i, o, u, l, "drawCorners"));
    },
    intersectLine: function(n, r, a, i, o, u, l, s, c) {
      return Nf(o, u, this.points, n, r, a, i, l, this.getOrCreateCorners(n, r, a, i, s, c, "corners"));
    },
    checkPoint: function(n, r, a, i, o, u, l, s, c) {
      return Af(n, r, this.points, u, l, i, o, this.getOrCreateCorners(u, l, i, o, s, c, "corners"));
    }
  };
};
Kt.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: mt(4, 0),
    draw: function(e, t, n, r, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, this.points, i);
    },
    intersectLine: function(e, t, n, r, a, i, o, u) {
      return gc(a, i, e, t, n, r, o, u);
    },
    checkPoint: function(e, t, n, r, a, i, o, u) {
      var l = r / 2, s = a / 2;
      u = u === "auto" ? ln(r, a) : u, u = Math.min(l, s, u);
      var c = u * 2;
      return !!(Ht(e, t, this.points, i, o, r, a - c, [0, -1], n) || Ht(e, t, this.points, i, o, r - c, a, [0, -1], n) || Cn(e, t, c, c, i - l + u, o - s + u, n) || Cn(e, t, c, c, i + l - u, o - s + u, n) || Cn(e, t, c, c, i + l - u, o + s - u, n) || Cn(e, t, c, c, i - l + u, o + s - u, n));
    }
  };
};
Kt.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: rs(),
    points: mt(4, 0),
    draw: function(e, t, n, r, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, null, i);
    },
    generateCutTrianglePts: function(e, t, n, r, a) {
      var i = a === "auto" ? this.cornerLength : a, o = t / 2, u = e / 2, l = n - u, s = n + u, c = r - o, d = r + o;
      return {
        topLeft: [l, c + i, l + i, c, l + i, c + i],
        topRight: [s - i, c, s, c + i, s - i, c + i],
        bottomRight: [s, d - i, s - i, d, s - i, d - i],
        bottomLeft: [l + i, d, l, d - i, l + i, d - i]
      };
    },
    intersectLine: function(e, t, n, r, a, i, o, u) {
      var l = this.generateCutTrianglePts(n + 2 * o, r + 2 * o, e, t, u), s = [].concat.apply([], [l.topLeft.splice(0, 4), l.topRight.splice(0, 4), l.bottomRight.splice(0, 4), l.bottomLeft.splice(0, 4)]);
      return Pr(a, i, s, e, t);
    },
    checkPoint: function(e, t, n, r, a, i, o, u) {
      var l = u === "auto" ? this.cornerLength : u;
      if (Ht(e, t, this.points, i, o, r, a - 2 * l, [0, -1], n) || Ht(e, t, this.points, i, o, r - 2 * l, a, [0, -1], n))
        return true;
      var s = this.generateCutTrianglePts(r, a, i, o);
      return Ct(e, t, s.topLeft) || Ct(e, t, s.topRight) || Ct(e, t, s.bottomRight) || Ct(e, t, s.bottomLeft);
    }
  };
};
Kt.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: mt(4, 0),
    draw: function(e, t, n, r, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
    },
    intersectLine: function(e, t, n, r, a, i, o, u) {
      var l = 0.15, s = 0.5, c = 0.85, d = this.generateBarrelBezierPts(n + 2 * o, r + 2 * o, e, t), h = function(p) {
        var g = Un({
          x: p[0],
          y: p[1]
        }, {
          x: p[2],
          y: p[3]
        }, {
          x: p[4],
          y: p[5]
        }, l), m = Un({
          x: p[0],
          y: p[1]
        }, {
          x: p[2],
          y: p[3]
        }, {
          x: p[4],
          y: p[5]
        }, s), v = Un({
          x: p[0],
          y: p[1]
        }, {
          x: p[2],
          y: p[3]
        }, {
          x: p[4],
          y: p[5]
        }, c);
        return [p[0], p[1], g.x, g.y, m.x, m.y, v.x, v.y, p[4], p[5]];
      }, f = [].concat(h(d.topLeft), h(d.topRight), h(d.bottomRight), h(d.bottomLeft));
      return Pr(a, i, f, e, t);
    },
    generateBarrelBezierPts: function(e, t, n, r) {
      var a = t / 2, i = e / 2, o = n - i, u = n + i, l = r - a, s = r + a, c = Bo(e, t), d = c.heightOffset, h = c.widthOffset, f = c.ctrlPtOffsetPct * e, p = {
        topLeft: [o, l + d, o + f, l, o + h, l],
        topRight: [u - h, l, u - f, l, u, l + d],
        bottomRight: [u, s - d, u - f, s, u - h, s],
        bottomLeft: [o + h, s, o + f, s, o, s - d]
      };
      return p.topLeft.isTop = true, p.topRight.isTop = true, p.bottomLeft.isBottom = true, p.bottomRight.isBottom = true, p;
    },
    checkPoint: function(e, t, n, r, a, i, o, u) {
      var l = Bo(r, a), s = l.heightOffset, c = l.widthOffset;
      if (Ht(e, t, this.points, i, o, r, a - 2 * s, [0, -1], n) || Ht(e, t, this.points, i, o, r - 2 * c, a, [0, -1], n))
        return true;
      for (var d = this.generateBarrelBezierPts(r, a, i, o), h = function(S, x, _) {
        var P = _[4], B = _[2], k = _[0], C = _[5], M = _[1], D = Math.min(P, k), N = Math.max(P, k), A = Math.min(C, M), L = Math.max(C, M);
        if (D <= S && S <= N && A <= x && x <= L) {
          var R = Lf(P, B, k), I = _f(R[0], R[1], R[2], S), X = I.filter(function(V) {
            return 0 <= V && V <= 1;
          });
          if (X.length > 0)
            return X[0];
        }
        return null;
      }, f = Object.keys(d), p = 0; p < f.length; p++) {
        var g = f[p], m = d[g], v = h(e, t, m);
        if (v != null) {
          var y = m[5], b = m[3], w = m[1], T = at(y, b, w, v);
          if (m.isTop && T <= t || m.isBottom && t <= T)
            return true;
        }
      }
      return false;
    }
  };
};
Kt.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: mt(4, 0),
    draw: function(e, t, n, r, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, this.points, i);
    },
    intersectLine: function(e, t, n, r, a, i, o, u) {
      var l = e - (n / 2 + o), s = t - (r / 2 + o), c = s, d = e + (n / 2 + o), h = nn(a, i, e, t, l, s, d, c, false);
      return h.length > 0 ? h : gc(a, i, e, t, n, r, o, u);
    },
    checkPoint: function(e, t, n, r, a, i, o, u) {
      u = u === "auto" ? ln(r, a) : u;
      var l = 2 * u;
      if (Ht(e, t, this.points, i, o, r, a - l, [0, -1], n) || Ht(e, t, this.points, i, o, r - l, a, [0, -1], n))
        return true;
      var s = r / 2 + 2 * n, c = a / 2 + 2 * n, d = [i - s, o - c, i - s, o, i + s, o, i + s, o - c];
      return !!(Ct(e, t, d) || Cn(e, t, l, l, i + r / 2 - u, o + a / 2 - u, n) || Cn(e, t, l, l, i - r / 2 + u, o + a / 2 - u, n));
    }
  };
};
Kt.registerNodeShapes = function() {
  var e = this.nodeShapes = {}, t = this;
  this.generateEllipse(), this.generatePolygon("triangle", mt(3, 0)), this.generateRoundPolygon("round-triangle", mt(3, 0)), this.generatePolygon("rectangle", mt(4, 0)), e.square = e.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  {
    var n = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", n), this.generateRoundPolygon("round-diamond", n);
  }
  this.generatePolygon("pentagon", mt(5, 0)), this.generateRoundPolygon("round-pentagon", mt(5, 0)), this.generatePolygon("hexagon", mt(6, 0)), this.generateRoundPolygon("round-hexagon", mt(6, 0)), this.generatePolygon("heptagon", mt(7, 0)), this.generateRoundPolygon("round-heptagon", mt(7, 0)), this.generatePolygon("octagon", mt(8, 0)), this.generateRoundPolygon("round-octagon", mt(8, 0));
  var r = new Array(20);
  {
    var a = _o(5, 0), i = _o(5, Math.PI / 5), o = 0.5 * (3 - Math.sqrt(5));
    o *= 1.57;
    for (var u = 0; u < i.length / 2; u++)
      i[u * 2] *= o, i[u * 2 + 1] *= o;
    for (var u = 0; u < 20 / 4; u++)
      r[u * 4] = a[u * 2], r[u * 4 + 1] = a[u * 2 + 1], r[u * 4 + 2] = i[u * 2], r[u * 4 + 3] = i[u * 2 + 1];
  }
  r = yc(r), this.generatePolygon("star", r), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var l = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l);
  }
  e.makePolygon = function(s) {
    var c = s.join("$"), d = "polygon-" + c, h;
    return (h = this[d]) ? h : t.generatePolygon(d, s);
  };
};
var jr = {};
jr.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
jr.redraw = function(e) {
  e = e || fc();
  var t = this;
  t.averageRedrawTime === void 0 && (t.averageRedrawTime = 0), t.lastRedrawTime === void 0 && (t.lastRedrawTime = 0), t.lastDrawTime === void 0 && (t.lastDrawTime = 0), t.requestedFrame = true, t.renderOptions = e;
};
jr.beforeRender = function(e, t) {
  if (!this.destroyed) {
    t == null && Ye("Priority is not optional for beforeRender");
    var n = this.beforeRenderCallbacks;
    n.push({
      fn: e,
      priority: t
    }), n.sort(function(r, a) {
      return a.priority - r.priority;
    });
  }
};
var Ru = function(e, t, n) {
  for (var r = e.beforeRenderCallbacks, a = 0; a < r.length; a++)
    r[a].fn(t, n);
};
jr.startRenderLoop = function() {
  var e = this, t = e.cy;
  if (!e.renderLoopStarted) {
    e.renderLoopStarted = true;
    var n = function(r) {
      if (!e.destroyed) {
        if (!t.batching()) if (e.requestedFrame && !e.skipFrame) {
          Ru(e, true, r);
          var a = Gt();
          e.render(e.renderOptions);
          var i = e.lastDrawTime = Gt();
          e.averageRedrawTime === void 0 && (e.averageRedrawTime = i - a), e.redrawCount === void 0 && (e.redrawCount = 0), e.redrawCount++, e.redrawTotalTime === void 0 && (e.redrawTotalTime = 0);
          var o = i - a;
          e.redrawTotalTime += o, e.lastRedrawTime = o, e.averageRedrawTime = e.averageRedrawTime / 2 + o / 2, e.requestedFrame = false;
        } else
          Ru(e, false, r);
        e.skipFrame = false, ma(n);
      }
    };
    ma(n);
  }
};
var Jg = function(e) {
  this.init(e);
};
var md = Jg;
var ir = md.prototype;
ir.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
ir.init = function(e) {
  var t = this;
  t.options = e, t.cy = e.cy;
  var n = t.container = e.cy.container(), r = t.cy.window();
  if (r) {
    var a = r.document, i = a.head, o = "__________cytoscape_stylesheet", u = "__________cytoscape_container", l = a.getElementById(o) != null;
    if (n.className.indexOf(u) < 0 && (n.className = (n.className || "") + " " + u), !l) {
      var s = a.createElement("style");
      s.id = o, s.textContent = "." + u + " { position: relative; }", i.insertBefore(s, i.children[0]);
    }
    var c = r.getComputedStyle(n), d = c.getPropertyValue("position");
    d === "static" && Ae("A Cytoscape container has style position:static and so can not use UI extensions properly");
  }
  t.selection = [void 0, void 0, void 0, void 0, 0], t.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], t.hoverData = {
    down: null,
    last: null,
    downTime: null,
    triggerMode: null,
    dragging: false,
    initialPan: [null, null],
    capture: false
  }, t.dragData = {
    possibleDragElements: []
  }, t.touchData = {
    start: null,
    capture: false,
    // These 3 fields related to tap, taphold events
    startPosition: [null, null, null, null, null, null],
    singleTouchStartTime: null,
    singleTouchMoved: true,
    now: [null, null, null, null, null, null],
    earlier: [null, null, null, null, null, null]
  }, t.redraws = 0, t.showFps = e.showFps, t.debug = e.debug, t.webgl = e.webgl, t.hideEdgesOnViewport = e.hideEdgesOnViewport, t.textureOnViewport = e.textureOnViewport, t.wheelSensitivity = e.wheelSensitivity, t.motionBlurEnabled = e.motionBlur, t.forcedPixelRatio = ee(e.pixelRatio) ? e.pixelRatio : null, t.motionBlur = e.motionBlur, t.motionBlurOpacity = e.motionBlurOpacity, t.motionBlurTransparency = 1 - t.motionBlurOpacity, t.motionBlurPxRatio = 1, t.mbPxRBlurry = 1, t.minMbLowQualFrames = 4, t.fullQualityMb = false, t.clearedForMotionBlur = [], t.desktopTapThreshold = e.desktopTapThreshold, t.desktopTapThreshold2 = e.desktopTapThreshold * e.desktopTapThreshold, t.touchTapThreshold = e.touchTapThreshold, t.touchTapThreshold2 = e.touchTapThreshold * e.touchTapThreshold, t.tapholdDuration = 500, t.bindings = [], t.beforeRenderCallbacks = [], t.beforeRenderPriorities = {
    // higher priority execs before lower one
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, t.registerNodeShapes(), t.registerArrowShapes(), t.registerCalculationListeners();
};
ir.notify = function(e, t) {
  var n = this, r = n.cy;
  if (!this.destroyed) {
    if (e === "init") {
      n.load();
      return;
    }
    if (e === "destroy") {
      n.destroy();
      return;
    }
    (e === "add" || e === "remove" || e === "move" && r.hasCompoundNodes() || e === "load" || e === "zorder" || e === "mount") && n.invalidateCachedZSortedEles(), e === "viewport" && n.redrawHint("select", true), e === "gc" && n.redrawHint("gc", true), (e === "load" || e === "resize" || e === "mount") && (n.invalidateContainerClientCoordsCache(), n.matchCanvasSize(n.container)), n.redrawHint("eles", true), n.redrawHint("drag", true), this.startRenderLoop(), this.redraw();
  }
};
ir.destroy = function() {
  var e = this;
  e.destroyed = true, e.cy.stopAnimationLoop();
  for (var t = 0; t < e.bindings.length; t++) {
    var n = e.bindings[t], r = n, a = r.target;
    (a.off || a.removeEventListener).apply(a, r.args);
  }
  if (e.bindings = [], e.beforeRenderCallbacks = [], e.onUpdateEleCalcsFns = [], e.removeObserver && e.removeObserver.disconnect(), e.styleObserver && e.styleObserver.disconnect(), e.resizeObserver && e.resizeObserver.disconnect(), e.labelCalcDiv)
    try {
      document.body.removeChild(e.labelCalcDiv);
    } catch {
    }
};
ir.isHeadless = function() {
  return false;
};
[fs, gd, yd, ar, Kt, jr].forEach(function(e) {
  ve(ir, e);
});
var yo = 1e3 / 60;
var bd = {
  setupDequeueing: function(e) {
    return function() {
      var t = this, n = this.renderer;
      if (!t.dequeueingSetup) {
        t.dequeueingSetup = true;
        var r = Lr(function() {
          n.redrawHint("eles", true), n.redrawHint("drag", true), n.redraw();
        }, e.deqRedrawThreshold), a = function(o, u) {
          var l = Gt(), s = n.averageRedrawTime, c = n.lastRedrawTime, d = [], h = n.cy.extent(), f = n.getPixelRatio();
          for (o || n.flushRenderedStyleQueue(); ; ) {
            var p = Gt(), g = p - l, m = p - u;
            if (c < yo) {
              var v = yo - (o ? s : 0);
              if (m >= e.deqFastCost * v)
                break;
            } else if (o) {
              if (g >= e.deqCost * c || g >= e.deqAvgCost * s)
                break;
            } else if (m >= e.deqNoDrawCost * yo)
              break;
            var y = e.deq(t, f, h);
            if (y.length > 0)
              for (var b = 0; b < y.length; b++)
                d.push(y[b]);
            else
              break;
          }
          d.length > 0 && (e.onDeqd(t, d), !o && e.shouldRedraw(t, d, f, h) && r());
        }, i = e.priority || $o;
        n.beforeRender(a, i(t));
      }
    };
  }
};
var ey = function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ba;
    hn(this, e), this.idsByKey = new Wt(), this.keyForId = new Wt(), this.cachesByLvl = new Wt(), this.lvls = [], this.getKey = t, this.doesEleInvalidateKey = n;
  }
  return fn(e, [{
    key: "getIdsFor",
    value: function(t) {
      t == null && Ye("Can not get id list for null key");
      var n = this.idsByKey, r = this.idsByKey.get(t);
      return r || (r = new er(), n.set(t, r)), r;
    }
  }, {
    key: "addIdForKey",
    value: function(t, n) {
      t != null && this.getIdsFor(t).add(n);
    }
  }, {
    key: "deleteIdForKey",
    value: function(t, n) {
      t != null && this.getIdsFor(t).delete(n);
    }
  }, {
    key: "getNumberOfIdsForKey",
    value: function(t) {
      return t == null ? 0 : this.getIdsFor(t).size;
    }
  }, {
    key: "updateKeyMappingFor",
    value: function(t) {
      var n = t.id(), r = this.keyForId.get(n), a = this.getKey(t);
      this.deleteIdForKey(r, n), this.addIdForKey(a, n), this.keyForId.set(n, a);
    }
  }, {
    key: "deleteKeyMappingFor",
    value: function(t) {
      var n = t.id(), r = this.keyForId.get(n);
      this.deleteIdForKey(r, n), this.keyForId.delete(n);
    }
  }, {
    key: "keyHasChangedFor",
    value: function(t) {
      var n = t.id(), r = this.keyForId.get(n), a = this.getKey(t);
      return r !== a;
    }
  }, {
    key: "isInvalid",
    value: function(t) {
      return this.keyHasChangedFor(t) || this.doesEleInvalidateKey(t);
    }
  }, {
    key: "getCachesAt",
    value: function(t) {
      var n = this.cachesByLvl, r = this.lvls, a = n.get(t);
      return a || (a = new Wt(), n.set(t, a), r.push(t)), a;
    }
  }, {
    key: "getCache",
    value: function(t, n) {
      return this.getCachesAt(n).get(t);
    }
  }, {
    key: "get",
    value: function(t, n) {
      var r = this.getKey(t), a = this.getCache(r, n);
      return a != null && this.updateKeyMappingFor(t), a;
    }
  }, {
    key: "getForCachedKey",
    value: function(t, n) {
      var r = this.keyForId.get(t.id()), a = this.getCache(r, n);
      return a;
    }
  }, {
    key: "hasCache",
    value: function(t, n) {
      return this.getCachesAt(n).has(t);
    }
  }, {
    key: "has",
    value: function(t, n) {
      var r = this.getKey(t);
      return this.hasCache(r, n);
    }
  }, {
    key: "setCache",
    value: function(t, n, r) {
      r.key = t, this.getCachesAt(n).set(t, r);
    }
  }, {
    key: "set",
    value: function(t, n, r) {
      var a = this.getKey(t);
      this.setCache(a, n, r), this.updateKeyMappingFor(t);
    }
  }, {
    key: "deleteCache",
    value: function(t, n) {
      this.getCachesAt(n).delete(t);
    }
  }, {
    key: "delete",
    value: function(t, n) {
      var r = this.getKey(t);
      this.deleteCache(r, n);
    }
  }, {
    key: "invalidateKey",
    value: function(t) {
      var n = this;
      this.lvls.forEach(function(r) {
        return n.deleteCache(t, r);
      });
    }
    // returns true if no other eles reference the invalidated cache (n.b. other eles may need the cache with the same key)
  }, {
    key: "invalidate",
    value: function(t) {
      var n = t.id(), r = this.keyForId.get(n);
      this.deleteKeyMappingFor(t);
      var a = this.doesEleInvalidateKey(t);
      return a && this.invalidateKey(r), a || this.getNumberOfIdsForKey(r) === 0;
    }
  }]);
}();
var Iu = 25;
var aa = 50;
var pa = -4;
var Xo = 3;
var xd = 7.99;
var ty = 8;
var ny = 1024;
var ry = 1024;
var ay = 1024;
var iy = 0.2;
var oy = 0.8;
var sy = 10;
var ly = 0.15;
var uy = 0.1;
var cy = 0.9;
var dy = 0.9;
var hy = 100;
var fy = 1;
var qn = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
};
var py = ct({
  getKey: null,
  doesEleInvalidateKey: ba,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: cc,
  allowEdgeTxrCaching: true,
  allowParentTxrCaching: true
});
var yr = function(e, t) {
  var n = this;
  n.renderer = e, n.onDequeues = [];
  var r = py(t);
  ve(n, r), n.lookup = new ey(r.getKey, r.doesEleInvalidateKey), n.setupDequeueing();
};
var nt = yr.prototype;
nt.reasons = qn;
nt.getTextureQueue = function(e) {
  var t = this;
  return t.eleImgCaches = t.eleImgCaches || {}, t.eleImgCaches[e] = t.eleImgCaches[e] || [];
};
nt.getRetiredTextureQueue = function(e) {
  var t = this, n = t.eleImgCaches.retired = t.eleImgCaches.retired || {}, r = n[e] = n[e] || [];
  return r;
};
nt.getElementQueue = function() {
  var e = this, t = e.eleCacheQueue = e.eleCacheQueue || new zr(function(n, r) {
    return r.reqs - n.reqs;
  });
  return t;
};
nt.getElementKeyToQueue = function() {
  var e = this, t = e.eleKeyToCacheQueue = e.eleKeyToCacheQueue || {};
  return t;
};
nt.getElement = function(e, t, n, r, a) {
  var i = this, o = this.renderer, u = o.cy.zoom(), l = this.lookup;
  if (!t || t.w === 0 || t.h === 0 || isNaN(t.w) || isNaN(t.h) || !e.visible() || e.removed() || !i.allowEdgeTxrCaching && e.isEdge() || !i.allowParentTxrCaching && e.isParent())
    return null;
  if (r == null && (r = Math.ceil(es(u * n))), r < pa)
    r = pa;
  else if (u >= xd || r > Xo)
    return null;
  var s = Math.pow(2, r), c = t.h * s, d = t.w * s, h = o.eleTextBiggerThanMin(e, s);
  if (!this.isVisible(e, h))
    return null;
  var f = l.get(e, r);
  if (f && f.invalidated && (f.invalidated = false, f.texture.invalidatedWidth -= f.width), f)
    return f;
  var p;
  if (c <= Iu ? p = Iu : c <= aa ? p = aa : p = Math.ceil(c / aa) * aa, c > ay || d > ry)
    return null;
  var g = i.getTextureQueue(p), m = g[g.length - 2], v = function() {
    return i.recycleTexture(p, d) || i.addTexture(p, d);
  };
  m || (m = g[g.length - 1]), m || (m = v()), m.width - m.usedWidth < d && (m = v());
  for (var y = function(N) {
    return N && N.scaledLabelShown === h;
  }, b = a && a === qn.dequeue, w = a && a === qn.highQuality, T = a && a === qn.downscale, S, x = r + 1; x <= Xo; x++) {
    var _ = l.get(e, x);
    if (_) {
      S = _;
      break;
    }
  }
  var P = S && S.level === r + 1 ? S : null, B = function() {
    m.context.drawImage(P.texture.canvas, P.x, 0, P.width, P.height, m.usedWidth, 0, d, c);
  };
  if (m.context.setTransform(1, 0, 0, 1, 0, 0), m.context.clearRect(m.usedWidth, 0, d, p), y(P))
    B();
  else if (y(S))
    if (w) {
      for (var k = S.level; k > r; k--)
        P = i.getElement(e, t, n, k, qn.downscale);
      B();
    } else
      return i.queueElement(e, S.level - 1), S;
  else {
    var C;
    if (!b && !w && !T)
      for (var M = r - 1; M >= pa; M--) {
        var D = l.get(e, M);
        if (D) {
          C = D;
          break;
        }
      }
    if (y(C))
      return i.queueElement(e, r), C;
    m.context.translate(m.usedWidth, 0), m.context.scale(s, s), this.drawElement(m.context, e, t, h, false), m.context.scale(1 / s, 1 / s), m.context.translate(-m.usedWidth, 0);
  }
  return f = {
    x: m.usedWidth,
    texture: m,
    level: r,
    scale: s,
    width: d,
    height: c,
    scaledLabelShown: h
  }, m.usedWidth += Math.ceil(d + ty), m.eleCaches.push(f), l.set(e, r, f), i.checkTextureFullness(m), f;
};
nt.invalidateElements = function(e) {
  for (var t = 0; t < e.length; t++)
    this.invalidateElement(e[t]);
};
nt.invalidateElement = function(e) {
  var t = this, n = t.lookup, r = [], a = n.isInvalid(e);
  if (a) {
    for (var i = pa; i <= Xo; i++) {
      var o = n.getForCachedKey(e, i);
      o && r.push(o);
    }
    var u = n.invalidate(e);
    if (u)
      for (var l = 0; l < r.length; l++) {
        var s = r[l], c = s.texture;
        c.invalidatedWidth += s.width, s.invalidated = true, t.checkTextureUtility(c);
      }
    t.removeFromQueue(e);
  }
};
nt.checkTextureUtility = function(e) {
  e.invalidatedWidth >= iy * e.width && this.retireTexture(e);
};
nt.checkTextureFullness = function(e) {
  var t = this, n = t.getTextureQueue(e.height);
  e.usedWidth / e.width > oy && e.fullnessChecks >= sy ? sn(n, e) : e.fullnessChecks++;
};
nt.retireTexture = function(e) {
  var t = this, n = e.height, r = t.getTextureQueue(n), a = this.lookup;
  sn(r, e), e.retired = true;
  for (var i = e.eleCaches, o = 0; o < i.length; o++) {
    var u = i[o];
    a.deleteCache(u.key, u.level);
  }
  Jo(i);
  var l = t.getRetiredTextureQueue(n);
  l.push(e);
};
nt.addTexture = function(e, t) {
  var n = this, r = n.getTextureQueue(e), a = {};
  return r.push(a), a.eleCaches = [], a.height = e, a.width = Math.max(ny, t), a.usedWidth = 0, a.invalidatedWidth = 0, a.fullnessChecks = 0, a.canvas = n.renderer.makeOffscreenCanvas(a.width, a.height), a.context = a.canvas.getContext("2d"), a;
};
nt.recycleTexture = function(e, t) {
  for (var n = this, r = n.getTextureQueue(e), a = n.getRetiredTextureQueue(e), i = 0; i < a.length; i++) {
    var o = a[i];
    if (o.width >= t)
      return o.retired = false, o.usedWidth = 0, o.invalidatedWidth = 0, o.fullnessChecks = 0, Jo(o.eleCaches), o.context.setTransform(1, 0, 0, 1, 0, 0), o.context.clearRect(0, 0, o.width, o.height), sn(a, o), r.push(o), o;
  }
};
nt.queueElement = function(e, t) {
  var n = this, r = n.getElementQueue(), a = n.getElementKeyToQueue(), i = this.getKey(e), o = a[i];
  if (o)
    o.level = Math.max(o.level, t), o.eles.merge(e), o.reqs++, r.updateItem(o);
  else {
    var u = {
      eles: e.spawn().merge(e),
      level: t,
      reqs: 1,
      key: i
    };
    r.push(u), a[i] = u;
  }
};
nt.dequeue = function(e) {
  for (var t = this, n = t.getElementQueue(), r = t.getElementKeyToQueue(), a = [], i = t.lookup, o = 0; o < fy && n.size() > 0; o++) {
    var u = n.pop(), l = u.key, s = u.eles[0], c = i.hasCache(s, u.level);
    if (r[l] = null, !c) {
      a.push(u);
      var d = t.getBoundingBox(s);
      t.getElement(s, d, e, u.level, qn.dequeue);
    }
  }
  return a;
};
nt.removeFromQueue = function(e) {
  var t = this, n = t.getElementQueue(), r = t.getElementKeyToQueue(), a = this.getKey(e), i = r[a];
  i != null && (i.eles.length === 1 ? (i.reqs = Qo, n.updateItem(i), n.pop(), r[a] = null) : i.eles.unmerge(e));
};
nt.onDequeue = function(e) {
  this.onDequeues.push(e);
};
nt.offDequeue = function(e) {
  sn(this.onDequeues, e);
};
nt.setupDequeueing = bd.setupDequeueing({
  deqRedrawThreshold: hy,
  deqCost: ly,
  deqAvgCost: uy,
  deqNoDrawCost: cy,
  deqFastCost: dy,
  deq: function(e, t, n) {
    return e.dequeue(t, n);
  },
  onDeqd: function(e, t) {
    for (var n = 0; n < e.onDequeues.length; n++) {
      var r = e.onDequeues[n];
      r(t);
    }
  },
  shouldRedraw: function(e, t, n, r) {
    for (var a = 0; a < t.length; a++)
      for (var i = t[a].eles, o = 0; o < i.length; o++) {
        var u = i[o].boundingBox();
        if (ns(u, r))
          return true;
      }
    return false;
  },
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var vy = 1;
var br = -4;
var ka = 2;
var gy = 3.99;
var yy = 50;
var my = 50;
var by = 0.15;
var xy = 0.1;
var wy = 0.9;
var Ey = 0.9;
var Ty = 1;
var Nu = 250;
var Cy = 4e3 * 4e3;
var Lu = 32767;
var Py = true;
var wd = function(e) {
  var t = this, n = t.renderer = e, r = n.cy;
  t.layersByLevel = {}, t.firstGet = true, t.lastInvalidationTime = Gt() - 2 * Nu, t.skipping = false, t.eleTxrDeqs = r.collection(), t.scheduleElementRefinement = Lr(function() {
    t.refineElementTextures(t.eleTxrDeqs), t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
  }, my), n.beforeRender(function(i, o) {
    o - t.lastInvalidationTime <= Nu ? t.skipping = true : t.skipping = false;
  }, n.beforeRenderPriorities.lyrTxrSkip);
  var a = function(i, o) {
    return o.reqs - i.reqs;
  };
  t.layersQueue = new zr(a), t.setupDequeueing();
};
var dt = wd.prototype;
var zu = 0;
var Sy = Math.pow(2, 53) - 1;
dt.makeLayer = function(e, t) {
  var n = Math.pow(2, t), r = Math.ceil(e.w * n), a = Math.ceil(e.h * n), i = this.renderer.makeOffscreenCanvas(r, a), o = {
    id: zu = ++zu % Sy,
    bb: e,
    level: t,
    width: r,
    height: a,
    canvas: i,
    context: i.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  }, u = o.context, l = -o.bb.x1, s = -o.bb.y1;
  return u.scale(n, n), u.translate(l, s), o;
};
dt.getLayers = function(e, t, n) {
  var r = this, a = r.renderer, i = a.cy, o = i.zoom(), u = r.firstGet;
  if (r.firstGet = false, n == null) {
    if (n = Math.ceil(es(o * t)), n < br)
      n = br;
    else if (o >= gy || n > ka)
      return null;
  }
  r.validateLayersElesOrdering(n, e);
  var l = r.layersByLevel, s = Math.pow(2, n), c = l[n] = l[n] || [], d, h = r.levelIsComplete(n, e), f, p = function() {
    var P = function(M) {
      if (r.validateLayersElesOrdering(M, e), r.levelIsComplete(M, e))
        return f = l[M], true;
    }, B = function(M) {
      if (!f)
        for (var D = n + M; br <= D && D <= ka && !P(D); D += M)
          ;
    };
    B(1), B(-1);
    for (var k = c.length - 1; k >= 0; k--) {
      var C = c[k];
      C.invalid && sn(c, C);
    }
  };
  if (!h)
    p();
  else
    return c;
  var g = function() {
    if (!d) {
      d = bt();
      for (var P = 0; P < e.length; P++)
        xf(d, e[P].boundingBox());
    }
    return d;
  }, m = function(P) {
    P = P || {};
    var B = P.after;
    g();
    var k = Math.ceil(d.w * s), C = Math.ceil(d.h * s);
    if (k > Lu || C > Lu)
      return null;
    var M = k * C;
    if (M > Cy)
      return null;
    var D = r.makeLayer(d, n);
    if (B != null) {
      var N = c.indexOf(B) + 1;
      c.splice(N, 0, D);
    } else (P.insert === void 0 || P.insert) && c.unshift(D);
    return D;
  };
  if (r.skipping && !u)
    return null;
  for (var v = null, y = e.length / vy, b = !u, w = 0; w < e.length; w++) {
    var T = e[w], S = T._private.rscratch, x = S.imgLayerCaches = S.imgLayerCaches || {}, _ = x[n];
    if (_) {
      v = _;
      continue;
    }
    if ((!v || v.eles.length >= y || !Ef(v.bb, T.boundingBox())) && (v = m({
      insert: true,
      after: v
    }), !v))
      return null;
    f || b ? r.queueLayer(v, T) : r.drawEleInLayer(v, T, n, t), v.eles.push(T), x[n] = v;
  }
  return f || (b ? null : c);
};
dt.getEleLevelForLayerLevel = function(e, t) {
  return e;
};
dt.drawEleInLayer = function(e, t, n, r) {
  var a = this, i = this.renderer, o = e.context, u = t.boundingBox();
  u.w === 0 || u.h === 0 || !t.visible() || (n = a.getEleLevelForLayerLevel(n, r), i.setImgSmoothing(o, false), i.drawCachedElement(o, t, null, null, n, Py), i.setImgSmoothing(o, true));
};
dt.levelIsComplete = function(e, t) {
  var n = this, r = n.layersByLevel[e];
  if (!r || r.length === 0)
    return false;
  for (var a = 0, i = 0; i < r.length; i++) {
    var o = r[i];
    if (o.reqs > 0 || o.invalid)
      return false;
    a += o.eles.length;
  }
  return a === t.length;
};
dt.validateLayersElesOrdering = function(e, t) {
  var n = this.layersByLevel[e];
  if (n)
    for (var r = 0; r < n.length; r++) {
      for (var a = n[r], i = -1, o = 0; o < t.length; o++)
        if (a.eles[0] === t[o]) {
          i = o;
          break;
        }
      if (i < 0) {
        this.invalidateLayer(a);
        continue;
      }
      for (var u = i, o = 0; o < a.eles.length; o++)
        if (a.eles[o] !== t[u + o]) {
          this.invalidateLayer(a);
          break;
        }
    }
};
dt.updateElementsInLayers = function(e, t) {
  for (var n = this, r = Ar(e[0]), a = 0; a < e.length; a++)
    for (var i = r ? null : e[a], o = r ? e[a] : e[a].ele, u = o._private.rscratch, l = u.imgLayerCaches = u.imgLayerCaches || {}, s = br; s <= ka; s++) {
      var c = l[s];
      c && (i && n.getEleLevelForLayerLevel(c.level) !== i.level || t(c, o, i));
    }
};
dt.haveLayers = function() {
  for (var e = this, t = false, n = br; n <= ka; n++) {
    var r = e.layersByLevel[n];
    if (r && r.length > 0) {
      t = true;
      break;
    }
  }
  return t;
};
dt.invalidateElements = function(e) {
  var t = this;
  e.length !== 0 && (t.lastInvalidationTime = Gt(), !(e.length === 0 || !t.haveLayers()) && t.updateElementsInLayers(e, function(n, r, a) {
    t.invalidateLayer(n);
  }));
};
dt.invalidateLayer = function(e) {
  if (this.lastInvalidationTime = Gt(), !e.invalid) {
    var t = e.level, n = e.eles, r = this.layersByLevel[t];
    sn(r, e), e.elesQueue = [], e.invalid = true, e.replacement && (e.replacement.invalid = true);
    for (var a = 0; a < n.length; a++) {
      var i = n[a]._private.rscratch.imgLayerCaches;
      i && (i[t] = null);
    }
  }
};
dt.refineElementTextures = function(e) {
  var t = this;
  t.updateElementsInLayers(e, function(n, r, a) {
    var i = n.replacement;
    if (i || (i = n.replacement = t.makeLayer(n.bb, n.level), i.replaces = n, i.eles = n.eles), !i.reqs)
      for (var o = 0; o < i.eles.length; o++)
        t.queueLayer(i, i.eles[o]);
  });
};
dt.enqueueElementRefinement = function(e) {
  this.eleTxrDeqs.merge(e), this.scheduleElementRefinement();
};
dt.queueLayer = function(e, t) {
  var n = this, r = n.layersQueue, a = e.elesQueue, i = a.hasId = a.hasId || {};
  if (!e.replacement) {
    if (t) {
      if (i[t.id()])
        return;
      a.push(t), i[t.id()] = true;
    }
    e.reqs ? (e.reqs++, r.updateItem(e)) : (e.reqs = 1, r.push(e));
  }
};
dt.dequeue = function(e) {
  for (var t = this, n = t.layersQueue, r = [], a = 0; a < Ty && n.size() !== 0; ) {
    var i = n.peek();
    if (i.replacement) {
      n.pop();
      continue;
    }
    if (i.replaces && i !== i.replaces.replacement) {
      n.pop();
      continue;
    }
    if (i.invalid) {
      n.pop();
      continue;
    }
    var o = i.elesQueue.shift();
    o && (t.drawEleInLayer(i, o, i.level, e), a++), r.length === 0 && r.push(true), i.elesQueue.length === 0 && (n.pop(), i.reqs = 0, i.replaces && t.applyLayerReplacement(i), t.requestRedraw());
  }
  return r;
};
dt.applyLayerReplacement = function(e) {
  var t = this, n = t.layersByLevel[e.level], r = e.replaces, a = n.indexOf(r);
  if (!(a < 0 || r.invalid)) {
    n[a] = e;
    for (var i = 0; i < e.eles.length; i++) {
      var o = e.eles[i]._private, u = o.imgLayerCaches = o.imgLayerCaches || {};
      u && (u[e.level] = e);
    }
    t.requestRedraw();
  }
};
dt.requestRedraw = Lr(function() {
  var e = this.renderer;
  e.redrawHint("eles", true), e.redrawHint("drag", true), e.redraw();
}, 100);
dt.setupDequeueing = bd.setupDequeueing({
  deqRedrawThreshold: yy,
  deqCost: by,
  deqAvgCost: xy,
  deqNoDrawCost: wy,
  deqFastCost: Ey,
  deq: function(e, t) {
    return e.dequeue(t);
  },
  onDeqd: $o,
  shouldRedraw: cc,
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var Ed = {};
var Ou;
function ky(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    e.lineTo(r.x, r.y);
  }
}
function _y(e, t, n) {
  for (var r, a = 0; a < t.length; a++) {
    var i = t[a];
    a === 0 && (r = i), e.lineTo(i.x, i.y);
  }
  e.quadraticCurveTo(n.x, n.y, r.x, r.y);
}
function Vu(e, t, n) {
  e.beginPath && e.beginPath();
  for (var r = t, a = 0; a < r.length; a++) {
    var i = r[a];
    e.lineTo(i.x, i.y);
  }
  var o = n, u = n[0];
  e.moveTo(u.x, u.y);
  for (var a = 1; a < o.length; a++) {
    var i = o[a];
    e.lineTo(i.x, i.y);
  }
  e.closePath && e.closePath();
}
function By(e, t, n, r, a) {
  e.beginPath && e.beginPath(), e.arc(n, r, a, 0, Math.PI * 2, false);
  var i = t, o = i[0];
  e.moveTo(o.x, o.y);
  for (var u = 0; u < i.length; u++) {
    var l = i[u];
    e.lineTo(l.x, l.y);
  }
  e.closePath && e.closePath();
}
function Dy(e, t, n, r) {
  e.arc(t, n, r, 0, Math.PI * 2, false);
}
Ed.arrowShapeImpl = function(e) {
  return (Ou || (Ou = {
    polygon: ky,
    "triangle-backcurve": _y,
    "triangle-tee": Vu,
    "circle-triangle": By,
    "triangle-cross": Vu,
    circle: Dy
  }))[e];
};
var Yt = {};
Yt.drawElement = function(e, t, n, r, a, i) {
  var o = this;
  t.isNode() ? o.drawNode(e, t, n, r, a, i) : o.drawEdge(e, t, n, r, a, i);
};
Yt.drawElementOverlay = function(e, t) {
  var n = this;
  t.isNode() ? n.drawNodeOverlay(e, t) : n.drawEdgeOverlay(e, t);
};
Yt.drawElementUnderlay = function(e, t) {
  var n = this;
  t.isNode() ? n.drawNodeUnderlay(e, t) : n.drawEdgeUnderlay(e, t);
};
Yt.drawCachedElementPortion = function(e, t, n, r, a, i, o, u) {
  var l = this, s = n.getBoundingBox(t);
  if (!(s.w === 0 || s.h === 0)) {
    var c = n.getElement(t, s, r, a, i);
    if (c != null) {
      var d = u(l, t);
      if (d === 0)
        return;
      var h = o(l, t), f = s.x1, p = s.y1, g = s.w, m = s.h, v, y, b, w, T;
      if (h !== 0) {
        var S = n.getRotationPoint(t);
        b = S.x, w = S.y, e.translate(b, w), e.rotate(h), T = l.getImgSmoothing(e), T || l.setImgSmoothing(e, true);
        var x = n.getRotationOffset(t);
        v = x.x, y = x.y;
      } else
        v = f, y = p;
      var _;
      d !== 1 && (_ = e.globalAlpha, e.globalAlpha = _ * d), e.drawImage(c.texture.canvas, c.x, 0, c.width, c.height, v, y, g, m), d !== 1 && (e.globalAlpha = _), h !== 0 && (e.rotate(-h), e.translate(-b, -w), T || l.setImgSmoothing(e, false));
    } else
      n.drawElement(e, t);
  }
};
var My = function() {
  return 0;
};
var Ay = function(e, t) {
  return e.getTextAngle(t, null);
};
var Ry = function(e, t) {
  return e.getTextAngle(t, "source");
};
var Iy = function(e, t) {
  return e.getTextAngle(t, "target");
};
var Ny = function(e, t) {
  return t.effectiveOpacity();
};
var mo = function(e, t) {
  return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
};
Yt.drawCachedElement = function(e, t, n, r, a, i) {
  var o = this, u = o.data, l = u.eleTxrCache, s = u.lblTxrCache, c = u.slbTxrCache, d = u.tlbTxrCache, h = t.boundingBox(), f = i === true ? l.reasons.highQuality : null;
  if (!(h.w === 0 || h.h === 0 || !t.visible()) && (!r || ns(h, r))) {
    var p = t.isEdge(), g = t.element()._private.rscratch.badLine;
    o.drawElementUnderlay(e, t), o.drawCachedElementPortion(e, t, l, n, a, f, My, Ny), (!p || !g) && o.drawCachedElementPortion(e, t, s, n, a, f, Ay, mo), p && !g && (o.drawCachedElementPortion(e, t, c, n, a, f, Ry, mo), o.drawCachedElementPortion(e, t, d, n, a, f, Iy, mo)), o.drawElementOverlay(e, t);
  }
};
Yt.drawElements = function(e, t) {
  for (var n = this, r = 0; r < t.length; r++) {
    var a = t[r];
    n.drawElement(e, a);
  }
};
Yt.drawCachedElements = function(e, t, n, r) {
  for (var a = this, i = 0; i < t.length; i++) {
    var o = t[i];
    a.drawCachedElement(e, o, n, r);
  }
};
Yt.drawCachedNodes = function(e, t, n, r) {
  for (var a = this, i = 0; i < t.length; i++) {
    var o = t[i];
    o.isNode() && a.drawCachedElement(e, o, n, r);
  }
};
Yt.drawLayeredElements = function(e, t, n, r) {
  var a = this, i = a.data.lyrTxrCache.getLayers(t, n);
  if (i)
    for (var o = 0; o < i.length; o++) {
      var u = i[o], l = u.bb;
      l.w === 0 || l.h === 0 || e.drawImage(u.canvas, l.x1, l.y1, l.w, l.h);
    }
  else
    a.drawCachedElements(e, t, n, r);
};
var Zt = {};
Zt.drawEdge = function(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, o = this, u = t._private.rscratch;
  if (!(i && !t.visible()) && !(u.badLine || u.allpts == null || isNaN(u.allpts[0]))) {
    var l;
    n && (l = n, e.translate(-l.x1, -l.y1));
    var s = i ? t.pstyle("opacity").value : 1, c = i ? t.pstyle("line-opacity").value : 1, d = t.pstyle("curve-style").value, h = t.pstyle("line-style").value, f = t.pstyle("width").pfValue, p = t.pstyle("line-cap").value, g = t.pstyle("line-outline-width").value, m = t.pstyle("line-outline-color").value, v = s * c, y = s * c, b = function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v;
      d === "straight-triangle" ? (o.eleStrokeStyle(e, t, D), o.drawEdgeTrianglePath(t, e, u.allpts)) : (e.lineWidth = f, e.lineCap = p, o.eleStrokeStyle(e, t, D), o.drawEdgePath(t, e, u.allpts, h), e.lineCap = "butt");
    }, w = function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v;
      if (e.lineWidth = f + g, e.lineCap = p, g > 0)
        o.colorStrokeStyle(e, m[0], m[1], m[2], D);
      else {
        e.lineCap = "butt";
        return;
      }
      d === "straight-triangle" ? o.drawEdgeTrianglePath(t, e, u.allpts) : (o.drawEdgePath(t, e, u.allpts, h), e.lineCap = "butt");
    }, T = function() {
      a && o.drawEdgeOverlay(e, t);
    }, S = function() {
      a && o.drawEdgeUnderlay(e, t);
    }, x = function() {
      var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
      o.drawArrowheads(e, t, D);
    }, _ = function() {
      o.drawElementText(e, t, null, r);
    };
    e.lineJoin = "round";
    var P = t.pstyle("ghost").value === "yes";
    if (P) {
      var B = t.pstyle("ghost-offset-x").pfValue, k = t.pstyle("ghost-offset-y").pfValue, C = t.pstyle("ghost-opacity").value, M = v * C;
      e.translate(B, k), b(M), x(M), e.translate(-B, -k);
    } else
      w();
    S(), b(), x(), T(), _(), n && e.translate(l.x1, l.y1);
  }
};
var Td = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(t, n) {
    if (n.visible()) {
      var r = n.pstyle("".concat(e, "-opacity")).value;
      if (r !== 0) {
        var a = this, i = a.usePaths(), o = n._private.rscratch, u = n.pstyle("".concat(e, "-padding")).pfValue, l = 2 * u, s = n.pstyle("".concat(e, "-color")).value;
        t.lineWidth = l, o.edgeType === "self" && !i ? t.lineCap = "butt" : t.lineCap = "round", a.colorStrokeStyle(t, s[0], s[1], s[2], r), a.drawEdgePath(n, t, o.allpts, "solid");
      }
    }
  };
};
Zt.drawEdgeOverlay = Td("overlay");
Zt.drawEdgeUnderlay = Td("underlay");
Zt.drawEdgePath = function(e, t, n, r) {
  var a = e._private.rscratch, i = t, o, u = false, l = this.usePaths(), s = e.pstyle("line-dash-pattern").pfValue, c = e.pstyle("line-dash-offset").pfValue;
  if (l) {
    var d = n.join("$"), h = a.pathCacheKey && a.pathCacheKey === d;
    h ? (o = t = a.pathCache, u = true) : (o = t = new Path2D(), a.pathCacheKey = d, a.pathCache = o);
  }
  if (i.setLineDash)
    switch (r) {
      case "dotted":
        i.setLineDash([1, 1]);
        break;
      case "dashed":
        i.setLineDash(s), i.lineDashOffset = c;
        break;
      case "solid":
        i.setLineDash([]);
        break;
    }
  if (!u && !a.badLine)
    switch (t.beginPath && t.beginPath(), t.moveTo(n[0], n[1]), a.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var f = 2; f + 3 < n.length; f += 4)
          t.quadraticCurveTo(n[f], n[f + 1], n[f + 2], n[f + 3]);
        break;
      case "straight":
      case "haystack":
        for (var p = 2; p + 1 < n.length; p += 2)
          t.lineTo(n[p], n[p + 1]);
        break;
      case "segments":
        if (a.isRound) {
          var g = Pt(a.roundCorners), m;
          try {
            for (g.s(); !(m = g.n()).done; ) {
              var v = m.value;
              dd(t, v);
            }
          } catch (b) {
            g.e(b);
          } finally {
            g.f();
          }
          t.lineTo(n[n.length - 2], n[n.length - 1]);
        } else
          for (var y = 2; y + 1 < n.length; y += 2)
            t.lineTo(n[y], n[y + 1]);
        break;
    }
  t = i, l ? t.stroke(o) : t.stroke(), t.setLineDash && t.setLineDash([]);
};
Zt.drawEdgeTrianglePath = function(e, t, n) {
  t.fillStyle = t.strokeStyle;
  for (var r = e.pstyle("width").pfValue, a = 0; a + 1 < n.length; a += 2) {
    var i = [n[a + 2] - n[a], n[a + 3] - n[a + 1]], o = Math.sqrt(i[0] * i[0] + i[1] * i[1]), u = [i[1] / o, -i[0] / o], l = [u[0] * r / 2, u[1] * r / 2];
    t.beginPath(), t.moveTo(n[a] - l[0], n[a + 1] - l[1]), t.lineTo(n[a] + l[0], n[a + 1] + l[1]), t.lineTo(n[a + 2], n[a + 3]), t.closePath(), t.fill();
  }
};
Zt.drawArrowheads = function(e, t, n) {
  var r = t._private.rscratch, a = r.edgeType === "haystack";
  a || this.drawArrowhead(e, t, "source", r.arrowStartX, r.arrowStartY, r.srcArrowAngle, n), this.drawArrowhead(e, t, "mid-target", r.midX, r.midY, r.midtgtArrowAngle, n), this.drawArrowhead(e, t, "mid-source", r.midX, r.midY, r.midsrcArrowAngle, n), a || this.drawArrowhead(e, t, "target", r.arrowEndX, r.arrowEndY, r.tgtArrowAngle, n);
};
Zt.drawArrowhead = function(e, t, n, r, a, i, o) {
  if (!(isNaN(r) || r == null || isNaN(a) || a == null || isNaN(i) || i == null)) {
    var u = this, l = t.pstyle(n + "-arrow-shape").value;
    if (l !== "none") {
      var s = t.pstyle(n + "-arrow-fill").value === "hollow" ? "both" : "filled", c = t.pstyle(n + "-arrow-fill").value, d = t.pstyle("width").pfValue, h = t.pstyle(n + "-arrow-width"), f = h.value === "match-line" ? d : h.pfValue;
      h.units === "%" && (f *= d);
      var p = t.pstyle("opacity").value;
      o === void 0 && (o = p);
      var g = e.globalCompositeOperation;
      (o !== 1 || c === "hollow") && (e.globalCompositeOperation = "destination-out", u.colorFillStyle(e, 255, 255, 255, 1), u.colorStrokeStyle(e, 255, 255, 255, 1), u.drawArrowShape(t, e, s, d, l, f, r, a, i), e.globalCompositeOperation = g);
      var m = t.pstyle(n + "-arrow-color").value;
      u.colorFillStyle(e, m[0], m[1], m[2], o), u.colorStrokeStyle(e, m[0], m[1], m[2], o), u.drawArrowShape(t, e, c, d, l, f, r, a, i);
    }
  }
};
Zt.drawArrowShape = function(e, t, n, r, a, i, o, u, l) {
  var s = this, c = this.usePaths() && a !== "triangle-cross", d = false, h, f = t, p = {
    x: o,
    y: u
  }, g = e.pstyle("arrow-scale").value, m = this.getArrowWidth(r, g), v = s.arrowShapes[a];
  if (c) {
    var y = s.arrowPathCache = s.arrowPathCache || [], b = Pn(a), w = y[b];
    w != null ? (h = t = w, d = true) : (h = t = new Path2D(), y[b] = h);
  }
  d || (t.beginPath && t.beginPath(), c ? v.draw(t, 1, 0, {
    x: 0,
    y: 0
  }, 1) : v.draw(t, m, l, p, r), t.closePath && t.closePath()), t = f, c && (t.translate(o, u), t.rotate(l), t.scale(m, m)), (n === "filled" || n === "both") && (c ? t.fill(h) : t.fill()), (n === "hollow" || n === "both") && (t.lineWidth = i / (c ? m : 1), t.lineJoin = "miter", c ? t.stroke(h) : t.stroke()), c && (t.scale(1 / m, 1 / m), t.rotate(-l), t.translate(-o, -u));
};
var gs = {};
gs.safeDrawImage = function(e, t, n, r, a, i, o, u, l, s) {
  if (!(a <= 0 || i <= 0 || l <= 0 || s <= 0))
    try {
      e.drawImage(t, n, r, a, i, o, u, l, s);
    } catch (c) {
      Ae(c);
    }
};
gs.drawInscribedImage = function(e, t, n, r, a) {
  var i = this, o = n.position(), u = o.x, l = o.y, s = n.cy().style(), c = s.getIndexedStyle.bind(s), d = c(n, "background-fit", "value", r), h = c(n, "background-repeat", "value", r), f = n.width(), p = n.height(), g = n.padding() * 2, m = f + (c(n, "background-width-relative-to", "value", r) === "inner" ? 0 : g), v = p + (c(n, "background-height-relative-to", "value", r) === "inner" ? 0 : g), y = n._private.rscratch, b = c(n, "background-clip", "value", r), w = b === "node", T = c(n, "background-image-opacity", "value", r) * a, S = c(n, "background-image-smoothing", "value", r), x = n.pstyle("corner-radius").value;
  x !== "auto" && (x = n.pstyle("corner-radius").pfValue);
  var _ = t.width || t.cachedW, P = t.height || t.cachedH;
  (_ == null || P == null) && (document.body.appendChild(t), _ = t.cachedW = t.width || t.offsetWidth, P = t.cachedH = t.height || t.offsetHeight, document.body.removeChild(t));
  var B = _, k = P;
  if (c(n, "background-width", "value", r) !== "auto" && (c(n, "background-width", "units", r) === "%" ? B = c(n, "background-width", "pfValue", r) * m : B = c(n, "background-width", "pfValue", r)), c(n, "background-height", "value", r) !== "auto" && (c(n, "background-height", "units", r) === "%" ? k = c(n, "background-height", "pfValue", r) * v : k = c(n, "background-height", "pfValue", r)), !(B === 0 || k === 0)) {
    if (d === "contain") {
      var C = Math.min(m / B, v / k);
      B *= C, k *= C;
    } else if (d === "cover") {
      var C = Math.max(m / B, v / k);
      B *= C, k *= C;
    }
    var M = u - m / 2, D = c(n, "background-position-x", "units", r), N = c(n, "background-position-x", "pfValue", r);
    D === "%" ? M += (m - B) * N : M += N;
    var A = c(n, "background-offset-x", "units", r), L = c(n, "background-offset-x", "pfValue", r);
    A === "%" ? M += (m - B) * L : M += L;
    var R = l - v / 2, I = c(n, "background-position-y", "units", r), X = c(n, "background-position-y", "pfValue", r);
    I === "%" ? R += (v - k) * X : R += X;
    var V = c(n, "background-offset-y", "units", r), Y = c(n, "background-offset-y", "pfValue", r);
    V === "%" ? R += (v - k) * Y : R += Y, y.pathCache && (M -= u, R -= l, u = 0, l = 0);
    var W = e.globalAlpha;
    e.globalAlpha = T;
    var Q = i.getImgSmoothing(e), J = false;
    if (S === "no" && Q ? (i.setImgSmoothing(e, false), J = true) : S === "yes" && !Q && (i.setImgSmoothing(e, true), J = true), h === "no-repeat")
      w && (e.save(), y.pathCache ? e.clip(y.pathCache) : (i.nodeShapes[i.getNodeShape(n)].draw(e, u, l, m, v, x, y), e.clip())), i.safeDrawImage(e, t, 0, 0, _, P, M, R, B, k), w && e.restore();
    else {
      var Z = e.createPattern(t, h);
      e.fillStyle = Z, i.nodeShapes[i.getNodeShape(n)].draw(e, u, l, m, v, x, y), e.translate(M, R), e.fill(), e.translate(-M, -R);
    }
    e.globalAlpha = W, J && i.setImgSmoothing(e, Q);
  }
};
var Mn = {};
Mn.eleTextBiggerThanMin = function(e, t) {
  if (!t) {
    var n = e.cy().zoom(), r = this.getPixelRatio(), a = Math.ceil(es(n * r));
    t = Math.pow(2, a);
  }
  var i = e.pstyle("font-size").pfValue * t, o = e.pstyle("min-zoomed-font-size").pfValue;
  return !(i < o);
};
Mn.drawElementText = function(e, t, n, r, a) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, o = this;
  if (r == null) {
    if (i && !o.eleTextBiggerThanMin(t))
      return;
  } else if (r === false)
    return;
  if (t.isNode()) {
    var u = t.pstyle("label");
    if (!u || !u.value)
      return;
    var l = o.getLabelJustification(t);
    e.textAlign = l, e.textBaseline = "bottom";
  } else {
    var s = t.element()._private.rscratch.badLine, c = t.pstyle("label"), d = t.pstyle("source-label"), h = t.pstyle("target-label");
    if (s || (!c || !c.value) && (!d || !d.value) && (!h || !h.value))
      return;
    e.textAlign = "center", e.textBaseline = "bottom";
  }
  var f = !n, p;
  n && (p = n, e.translate(-p.x1, -p.y1)), a == null ? (o.drawText(e, t, null, f, i), t.isEdge() && (o.drawText(e, t, "source", f, i), o.drawText(e, t, "target", f, i))) : o.drawText(e, t, a, f, i), n && e.translate(p.x1, p.y1);
};
Mn.getFontCache = function(e) {
  var t;
  this.fontCaches = this.fontCaches || [];
  for (var n = 0; n < this.fontCaches.length; n++)
    if (t = this.fontCaches[n], t.context === e)
      return t;
  return t = {
    context: e
  }, this.fontCaches.push(t), t;
};
Mn.setupTextStyle = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, r = t.pstyle("font-style").strValue, a = t.pstyle("font-size").pfValue + "px", i = t.pstyle("font-family").strValue, o = t.pstyle("font-weight").strValue, u = n ? t.effectiveOpacity() * t.pstyle("text-opacity").value : 1, l = t.pstyle("text-outline-opacity").value * u, s = t.pstyle("color").value, c = t.pstyle("text-outline-color").value;
  e.font = r + " " + o + " " + a + " " + i, e.lineJoin = "round", this.colorFillStyle(e, s[0], s[1], s[2], u), this.colorStrokeStyle(e, c[0], c[1], c[2], l);
};
function bo(e, t, n, r, a) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, o = arguments.length > 6 ? arguments[6] : void 0;
  e.beginPath(), e.moveTo(t + i, n), e.lineTo(t + r - i, n), e.quadraticCurveTo(t + r, n, t + r, n + i), e.lineTo(t + r, n + a - i), e.quadraticCurveTo(t + r, n + a, t + r - i, n + a), e.lineTo(t + i, n + a), e.quadraticCurveTo(t, n + a, t, n + a - i), e.lineTo(t, n + i), e.quadraticCurveTo(t, n, t + i, n), e.closePath(), o ? e.stroke() : e.fill();
}
Mn.getTextAngle = function(e, t) {
  var n, r = e._private, a = r.rscratch, i = t ? t + "-" : "", o = e.pstyle(i + "text-rotation");
  if (o.strValue === "autorotate") {
    var u = Tt(a, "labelAngle", t);
    n = e.isEdge() ? u : 0;
  } else o.strValue === "none" ? n = 0 : n = o.pfValue;
  return n;
};
Mn.drawText = function(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = t._private, o = i.rscratch, u = a ? t.effectiveOpacity() : 1;
  if (!(a && (u === 0 || t.pstyle("text-opacity").value === 0))) {
    n === "main" && (n = null);
    var l = Tt(o, "labelX", n), s = Tt(o, "labelY", n), c, d, h = this.getLabelText(t, n);
    if (h != null && h !== "" && !isNaN(l) && !isNaN(s)) {
      this.setupTextStyle(e, t, a);
      var f = n ? n + "-" : "", p = Tt(o, "labelWidth", n), g = Tt(o, "labelHeight", n), m = t.pstyle(f + "text-margin-x").pfValue, v = t.pstyle(f + "text-margin-y").pfValue, y = t.isEdge(), b = t.pstyle("text-halign").value, w = t.pstyle("text-valign").value;
      y && (b = "center", w = "center"), l += m, s += v;
      var T;
      switch (r ? T = this.getTextAngle(t, n) : T = 0, T !== 0 && (c = l, d = s, e.translate(c, d), e.rotate(T), l = 0, s = 0), w) {
        case "top":
          break;
        case "center":
          s += g / 2;
          break;
        case "bottom":
          s += g;
          break;
      }
      var S = t.pstyle("text-background-opacity").value, x = t.pstyle("text-border-opacity").value, _ = t.pstyle("text-border-width").pfValue, P = t.pstyle("text-background-padding").pfValue, B = t.pstyle("text-background-shape").strValue, k = B.indexOf("round") === 0, C = 2;
      if (S > 0 || _ > 0 && x > 0) {
        var M = l - P;
        switch (b) {
          case "left":
            M -= p;
            break;
          case "center":
            M -= p / 2;
            break;
        }
        var D = s - g - P, N = p + 2 * P, A = g + 2 * P;
        if (S > 0) {
          var L = e.fillStyle, R = t.pstyle("text-background-color").value;
          e.fillStyle = "rgba(" + R[0] + "," + R[1] + "," + R[2] + "," + S * u + ")", k ? bo(e, M, D, N, A, C) : e.fillRect(M, D, N, A), e.fillStyle = L;
        }
        if (_ > 0 && x > 0) {
          var I = e.strokeStyle, X = e.lineWidth, V = t.pstyle("text-border-color").value, Y = t.pstyle("text-border-style").value;
          if (e.strokeStyle = "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + x * u + ")", e.lineWidth = _, e.setLineDash)
            switch (Y) {
              case "dotted":
                e.setLineDash([1, 1]);
                break;
              case "dashed":
                e.setLineDash([4, 2]);
                break;
              case "double":
                e.lineWidth = _ / 4, e.setLineDash([]);
                break;
              case "solid":
                e.setLineDash([]);
                break;
            }
          if (k ? bo(e, M, D, N, A, C, "stroke") : e.strokeRect(M, D, N, A), Y === "double") {
            var W = _ / 2;
            k ? bo(e, M + W, D + W, N - W * 2, A - W * 2, C, "stroke") : e.strokeRect(M + W, D + W, N - W * 2, A - W * 2);
          }
          e.setLineDash && e.setLineDash([]), e.lineWidth = X, e.strokeStyle = I;
        }
      }
      var Q = 2 * t.pstyle("text-outline-width").pfValue;
      if (Q > 0 && (e.lineWidth = Q), t.pstyle("text-wrap").value === "wrap") {
        var J = Tt(o, "labelWrapCachedLines", n), Z = Tt(o, "labelLineHeight", n), $ = p / 2, te = this.getLabelJustification(t);
        switch (te === "auto" || (b === "left" ? te === "left" ? l += -p : te === "center" && (l += -$) : b === "center" ? te === "left" ? l += -$ : te === "right" && (l += $) : b === "right" && (te === "center" ? l += $ : te === "right" && (l += p))), w) {
          case "top":
            s -= (J.length - 1) * Z;
            break;
          case "center":
          case "bottom":
            s -= (J.length - 1) * Z;
            break;
        }
        for (var z = 0; z < J.length; z++)
          Q > 0 && e.strokeText(J[z], l, s), e.fillText(J[z], l, s), s += Z;
      } else
        Q > 0 && e.strokeText(h, l, s), e.fillText(h, l, s);
      T !== 0 && (e.rotate(-T), e.translate(-c, -d));
    }
  }
};
var vn = {};
vn.drawNode = function(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, o = this, u, l, s = t._private, c = s.rscratch, d = t.position();
  if (!(!ee(d.x) || !ee(d.y)) && !(i && !t.visible())) {
    var h = i ? t.effectiveOpacity() : 1, f = o.usePaths(), p, g = false, m = t.padding();
    u = t.width() + 2 * m, l = t.height() + 2 * m;
    var v;
    n && (v = n, e.translate(-v.x1, -v.y1));
    for (var y = t.pstyle("background-image"), b = y.value, w = new Array(b.length), T = new Array(b.length), S = 0, x = 0; x < b.length; x++) {
      var _ = b[x], P = w[x] = _ != null && _ !== "none";
      if (P) {
        var B = t.cy().style().getIndexedStyle(t, "background-image-crossorigin", "value", x);
        S++, T[x] = o.getCachedImage(_, B, function() {
          s.backgroundTimestamp = Date.now(), t.emitAndNotify("background");
        });
      }
    }
    var k = t.pstyle("background-blacken").value, C = t.pstyle("border-width").pfValue, M = t.pstyle("background-opacity").value * h, D = t.pstyle("border-color").value, N = t.pstyle("border-style").value, A = t.pstyle("border-join").value, L = t.pstyle("border-cap").value, R = t.pstyle("border-position").value, I = t.pstyle("border-dash-pattern").pfValue, X = t.pstyle("border-dash-offset").pfValue, V = t.pstyle("border-opacity").value * h, Y = t.pstyle("outline-width").pfValue, W = t.pstyle("outline-color").value, Q = t.pstyle("outline-style").value, J = t.pstyle("outline-opacity").value * h, Z = t.pstyle("outline-offset").value, $ = t.pstyle("corner-radius").value;
    $ !== "auto" && ($ = t.pstyle("corner-radius").pfValue);
    var te = function() {
      var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M;
      o.eleFillStyle(e, t, se);
    }, z = function() {
      var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : V;
      o.colorStrokeStyle(e, D[0], D[1], D[2], se);
    }, O = function() {
      var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : J;
      o.colorStrokeStyle(e, W[0], W[1], W[2], se);
    }, j = function(se, ge, E, F) {
      var q = o.nodePathCache = o.nodePathCache || [], U = uc(E === "polygon" ? E + "," + F.join(",") : E, "" + ge, "" + se, "" + $), G = q[U], ae, K = false;
      return G != null ? (ae = G, K = true, c.pathCache = ae) : (ae = new Path2D(), q[U] = c.pathCache = ae), {
        path: ae,
        cacheHit: K
      };
    }, H = t.pstyle("shape").strValue, ne = t.pstyle("shape-polygon-points").pfValue;
    if (f) {
      e.translate(d.x, d.y);
      var oe = j(u, l, H, ne);
      p = oe.path, g = oe.cacheHit;
    }
    var Re = function() {
      if (!g) {
        var se = d;
        f && (se = {
          x: 0,
          y: 0
        }), o.nodeShapes[o.getNodeShape(t)].draw(p || e, se.x, se.y, u, l, $, c);
      }
      f ? e.fill(p) : e.fill();
    }, be = function() {
      for (var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : h, ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, E = s.backgrounding, F = 0, q = 0; q < T.length; q++) {
        var U = t.cy().style().getIndexedStyle(t, "background-image-containment", "value", q);
        if (ge && U === "over" || !ge && U === "inside") {
          F++;
          continue;
        }
        w[q] && T[q].complete && !T[q].error && (F++, o.drawInscribedImage(e, T[q], t, q, se));
      }
      s.backgrounding = F !== S, E !== s.backgrounding && t.updateStyle(false);
    }, Ce = function() {
      var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h;
      o.hasPie(t) && (o.drawPie(e, t, ge), se && (f || o.nodeShapes[o.getNodeShape(t)].draw(e, d.x, d.y, u, l, $, c)));
    }, re = function() {
      var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h;
      o.hasStripe(t) && (e.save(), f ? e.clip(c.pathCache) : (o.nodeShapes[o.getNodeShape(t)].draw(e, d.x, d.y, u, l, $, c), e.clip()), o.drawStripe(e, t, ge), e.restore(), se && (f || o.nodeShapes[o.getNodeShape(t)].draw(e, d.x, d.y, u, l, $, c)));
    }, de = function() {
      var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : h, ge = (k > 0 ? k : -k) * se, E = k > 0 ? 0 : 255;
      k !== 0 && (o.colorFillStyle(e, E, E, E, ge), f ? e.fill(p) : e.fill());
    }, he = function() {
      if (C > 0) {
        if (e.lineWidth = C, e.lineCap = L, e.lineJoin = A, e.setLineDash)
          switch (N) {
            case "dotted":
              e.setLineDash([1, 1]);
              break;
            case "dashed":
              e.setLineDash(I), e.lineDashOffset = X;
              break;
            case "solid":
            case "double":
              e.setLineDash([]);
              break;
          }
        if (R !== "center") {
          if (e.save(), e.lineWidth *= 2, R === "inside")
            f ? e.clip(p) : e.clip();
          else {
            var se = new Path2D();
            se.rect(-u / 2 - C, -l / 2 - C, u + 2 * C, l + 2 * C), se.addPath(p), e.clip(se, "evenodd");
          }
          f ? e.stroke(p) : e.stroke(), e.restore();
        } else
          f ? e.stroke(p) : e.stroke();
        if (N === "double") {
          e.lineWidth = C / 3;
          var ge = e.globalCompositeOperation;
          e.globalCompositeOperation = "destination-out", f ? e.stroke(p) : e.stroke(), e.globalCompositeOperation = ge;
        }
        e.setLineDash && e.setLineDash([]);
      }
    }, ye = function() {
      if (Y > 0) {
        if (e.lineWidth = Y, e.lineCap = "butt", e.setLineDash)
          switch (Q) {
            case "dotted":
              e.setLineDash([1, 1]);
              break;
            case "dashed":
              e.setLineDash([4, 2]);
              break;
            case "solid":
            case "double":
              e.setLineDash([]);
              break;
          }
        var se = d;
        f && (se = {
          x: 0,
          y: 0
        });
        var ge = o.getNodeShape(t), E = C;
        R === "inside" && (E = 0), R === "outside" && (E *= 2);
        var F = (u + E + (Y + Z)) / u, q = (l + E + (Y + Z)) / l, U = u * F, G = l * q, ae = o.nodeShapes[ge].points, K;
        if (f) {
          var ue = j(U, G, ge, ae);
          K = ue.path;
        }
        if (ge === "ellipse")
          o.drawEllipsePath(K || e, se.x, se.y, U, G);
        else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(ge)) {
          var le = 0, pe = 0, Te = 0;
          ge === "round-diamond" ? le = (E + Z + Y) * 1.4 : ge === "round-heptagon" ? (le = (E + Z + Y) * 1.075, Te = -(E / 2 + Z + Y) / 35) : ge === "round-hexagon" ? le = (E + Z + Y) * 1.12 : ge === "round-pentagon" ? (le = (E + Z + Y) * 1.13, Te = -(E / 2 + Z + Y) / 15) : ge === "round-tag" ? (le = (E + Z + Y) * 1.12, pe = (E / 2 + Y + Z) * 0.07) : ge === "round-triangle" && (le = (E + Z + Y) * (Math.PI / 2), Te = -(E + Z / 2 + Y) / Math.PI), le !== 0 && (F = (u + le) / u, U = u * F, ["round-hexagon", "round-tag"].includes(ge) || (q = (l + le) / l, G = l * q)), $ = $ === "auto" ? mc(U, G) : $;
          for (var xe = U / 2, ce = G / 2, we = $ + (E + Y + Z) / 2, De = new Array(ae.length / 2), Ue = new Array(ae.length / 2), st = 0; st < ae.length / 2; st++)
            De[st] = {
              x: se.x + pe + xe * ae[st * 2],
              y: se.y + Te + ce * ae[st * 2 + 1]
            };
          var gt, He, rt, Ke, yt = De.length;
          for (He = De[yt - 1], gt = 0; gt < yt; gt++)
            rt = De[gt % yt], Ke = De[(gt + 1) % yt], Ue[gt] = ps(He, rt, Ke, we), He = rt, rt = Ke;
          o.drawRoundPolygonPath(K || e, se.x + pe, se.y + Te, u * F, l * q, ae, Ue);
        } else if (["roundrectangle", "round-rectangle"].includes(ge))
          $ = $ === "auto" ? ln(U, G) : $, o.drawRoundRectanglePath(K || e, se.x, se.y, U, G, $ + (E + Y + Z) / 2);
        else if (["cutrectangle", "cut-rectangle"].includes(ge))
          $ = $ === "auto" ? rs() : $, o.drawCutRectanglePath(K || e, se.x, se.y, U, G, null, $ + (E + Y + Z) / 4);
        else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(ge))
          $ = $ === "auto" ? ln(U, G) : $, o.drawBottomRoundRectanglePath(K || e, se.x, se.y, U, G, $ + (E + Y + Z) / 2);
        else if (ge === "barrel")
          o.drawBarrelPath(K || e, se.x, se.y, U, G);
        else if (ge.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(ge)) {
          var Qt = (E + Y + Z) / u;
          ae = xa(wa(ae, Qt)), o.drawPolygonPath(K || e, se.x, se.y, u, l, ae);
        } else {
          var Ze = (E + Y + Z) / u;
          ae = xa(wa(ae, -Ze)), o.drawPolygonPath(K || e, se.x, se.y, u, l, ae);
        }
        if (f ? e.stroke(K) : e.stroke(), Q === "double") {
          e.lineWidth = E / 3;
          var kt = e.globalCompositeOperation;
          e.globalCompositeOperation = "destination-out", f ? e.stroke(K) : e.stroke(), e.globalCompositeOperation = kt;
        }
        e.setLineDash && e.setLineDash([]);
      }
    }, me = function() {
      a && o.drawNodeOverlay(e, t, d, u, l);
    }, Se = function() {
      a && o.drawNodeUnderlay(e, t, d, u, l);
    }, Pe = function() {
      o.drawElementText(e, t, null, r);
    }, Ie = t.pstyle("ghost").value === "yes";
    if (Ie) {
      var Ge = t.pstyle("ghost-offset-x").pfValue, Xe = t.pstyle("ghost-offset-y").pfValue, Fe = t.pstyle("ghost-opacity").value, je = Fe * h;
      e.translate(Ge, Xe), O(), ye(), te(Fe * M), Re(), be(je, true), z(Fe * V), he(), Ce(k !== 0 || C !== 0), re(k !== 0 || C !== 0), be(je, false), de(je), e.translate(-Ge, -Xe);
    }
    f && e.translate(-d.x, -d.y), Se(), f && e.translate(d.x, d.y), O(), ye(), te(), Re(), be(h, true), z(), he(), Ce(k !== 0 || C !== 0), re(k !== 0 || C !== 0), be(h, false), de(), f && e.translate(-d.x, -d.y), Pe(), me(), n && e.translate(v.x1, v.y1);
  }
};
var Cd = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(t, n, r, a, i) {
    var o = this;
    if (n.visible()) {
      var u = n.pstyle("".concat(e, "-padding")).pfValue, l = n.pstyle("".concat(e, "-opacity")).value, s = n.pstyle("".concat(e, "-color")).value, c = n.pstyle("".concat(e, "-shape")).value, d = n.pstyle("".concat(e, "-corner-radius")).value;
      if (l > 0) {
        if (r = r || n.position(), a == null || i == null) {
          var h = n.padding();
          a = n.width() + 2 * h, i = n.height() + 2 * h;
        }
        o.colorFillStyle(t, s[0], s[1], s[2], l), o.nodeShapes[c].draw(t, r.x, r.y, a + u * 2, i + u * 2, d), t.fill();
      }
    }
  };
};
vn.drawNodeOverlay = Cd("overlay");
vn.drawNodeUnderlay = Cd("underlay");
vn.hasPie = function(e) {
  return e = e[0], e._private.hasPie;
};
vn.hasStripe = function(e) {
  return e = e[0], e._private.hasStripe;
};
vn.drawPie = function(e, t, n, r) {
  t = t[0], r = r || t.position();
  var a = t.cy().style(), i = t.pstyle("pie-size"), o = t.pstyle("pie-hole"), u = t.pstyle("pie-start-angle").pfValue, l = r.x, s = r.y, c = t.width(), d = t.height(), h = Math.min(c, d) / 2, f, p = 0, g = this.usePaths();
  if (g && (l = 0, s = 0), i.units === "%" ? h = h * i.pfValue : i.pfValue !== void 0 && (h = i.pfValue / 2), o.units === "%" ? f = h * o.pfValue : o.pfValue !== void 0 && (f = o.pfValue / 2), !(f >= h))
    for (var m = 1; m <= a.pieBackgroundN; m++) {
      var v = t.pstyle("pie-" + m + "-background-size").value, y = t.pstyle("pie-" + m + "-background-color").value, b = t.pstyle("pie-" + m + "-background-opacity").value * n, w = v / 100;
      w + p > 1 && (w = 1 - p);
      var T = 1.5 * Math.PI + 2 * Math.PI * p;
      T += u;
      var S = 2 * Math.PI * w, x = T + S;
      v === 0 || p >= 1 || p + w > 1 || (f === 0 ? (e.beginPath(), e.moveTo(l, s), e.arc(l, s, h, T, x), e.closePath()) : (e.beginPath(), e.arc(l, s, h, T, x), e.arc(l, s, f, x, T, true), e.closePath()), this.colorFillStyle(e, y[0], y[1], y[2], b), e.fill(), p += w);
    }
};
vn.drawStripe = function(e, t, n, r) {
  t = t[0], r = r || t.position();
  var a = t.cy().style(), i = r.x, o = r.y, u = t.width(), l = t.height(), s = 0, c = this.usePaths();
  e.save();
  var d = t.pstyle("stripe-direction").value, h = t.pstyle("stripe-size");
  switch (d) {
    case "vertical":
      break;
    case "righward":
      e.rotate(-Math.PI / 2);
      break;
  }
  var f = u, p = l;
  h.units === "%" ? (f = f * h.pfValue, p = p * h.pfValue) : h.pfValue !== void 0 && (f = h.pfValue, p = h.pfValue), c && (i = 0, o = 0), o -= f / 2, i -= p / 2;
  for (var g = 1; g <= a.stripeBackgroundN; g++) {
    var m = t.pstyle("stripe-" + g + "-background-size").value, v = t.pstyle("stripe-" + g + "-background-color").value, y = t.pstyle("stripe-" + g + "-background-opacity").value * n, b = m / 100;
    b + s > 1 && (b = 1 - s), !(m === 0 || s >= 1 || s + b > 1) && (e.beginPath(), e.rect(i, o + p * s, f, p * b), e.closePath(), this.colorFillStyle(e, v[0], v[1], v[2], y), e.fill(), s += b);
  }
  e.restore();
};
var xt = {};
var Ly = 100;
xt.getPixelRatio = function() {
  var e = this.data.contexts[0];
  if (this.forcedPixelRatio != null)
    return this.forcedPixelRatio;
  var t = this.cy.window(), n = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
  return (t.devicePixelRatio || 1) / n;
};
xt.paintCache = function(e) {
  for (var t = this.paintCaches = this.paintCaches || [], n = true, r, a = 0; a < t.length; a++)
    if (r = t[a], r.context === e) {
      n = false;
      break;
    }
  return n && (r = {
    context: e
  }, t.push(r)), r;
};
xt.createGradientStyleFor = function(e, t, n, r, a) {
  var i, o = this.usePaths(), u = n.pstyle(t + "-gradient-stop-colors").value, l = n.pstyle(t + "-gradient-stop-positions").pfValue;
  if (r === "radial-gradient")
    if (n.isEdge()) {
      var s = n.sourceEndpoint(), c = n.targetEndpoint(), d = n.midpoint(), h = Sn(s, d), f = Sn(c, d);
      i = e.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(h, f));
    } else {
      var p = o ? {
        x: 0,
        y: 0
      } : n.position(), g = n.paddedWidth(), m = n.paddedHeight();
      i = e.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(g, m));
    }
  else if (n.isEdge()) {
    var v = n.sourceEndpoint(), y = n.targetEndpoint();
    i = e.createLinearGradient(v.x, v.y, y.x, y.y);
  } else {
    var b = o ? {
      x: 0,
      y: 0
    } : n.position(), w = n.paddedWidth(), T = n.paddedHeight(), S = w / 2, x = T / 2, _ = n.pstyle("background-gradient-direction").value;
    switch (_) {
      case "to-bottom":
        i = e.createLinearGradient(b.x, b.y - x, b.x, b.y + x);
        break;
      case "to-top":
        i = e.createLinearGradient(b.x, b.y + x, b.x, b.y - x);
        break;
      case "to-left":
        i = e.createLinearGradient(b.x + S, b.y, b.x - S, b.y);
        break;
      case "to-right":
        i = e.createLinearGradient(b.x - S, b.y, b.x + S, b.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = e.createLinearGradient(b.x - S, b.y - x, b.x + S, b.y + x);
        break;
      case "to-top-right":
      case "to-right-top":
        i = e.createLinearGradient(b.x - S, b.y + x, b.x + S, b.y - x);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = e.createLinearGradient(b.x + S, b.y - x, b.x - S, b.y + x);
        break;
      case "to-top-left":
      case "to-left-top":
        i = e.createLinearGradient(b.x + S, b.y + x, b.x - S, b.y - x);
        break;
    }
  }
  if (!i) return null;
  for (var P = l.length === u.length, B = u.length, k = 0; k < B; k++)
    i.addColorStop(P ? l[k] : k / (B - 1), "rgba(" + u[k][0] + "," + u[k][1] + "," + u[k][2] + "," + a + ")");
  return i;
};
xt.gradientFillStyle = function(e, t, n, r) {
  var a = this.createGradientStyleFor(e, "background", t, n, r);
  if (!a) return null;
  e.fillStyle = a;
};
xt.colorFillStyle = function(e, t, n, r, a) {
  e.fillStyle = "rgba(" + t + "," + n + "," + r + "," + a + ")";
};
xt.eleFillStyle = function(e, t, n) {
  var r = t.pstyle("background-fill").value;
  if (r === "linear-gradient" || r === "radial-gradient")
    this.gradientFillStyle(e, t, r, n);
  else {
    var a = t.pstyle("background-color").value;
    this.colorFillStyle(e, a[0], a[1], a[2], n);
  }
};
xt.gradientStrokeStyle = function(e, t, n, r) {
  var a = this.createGradientStyleFor(e, "line", t, n, r);
  if (!a) return null;
  e.strokeStyle = a;
};
xt.colorStrokeStyle = function(e, t, n, r, a) {
  e.strokeStyle = "rgba(" + t + "," + n + "," + r + "," + a + ")";
};
xt.eleStrokeStyle = function(e, t, n) {
  var r = t.pstyle("line-fill").value;
  if (r === "linear-gradient" || r === "radial-gradient")
    this.gradientStrokeStyle(e, t, r, n);
  else {
    var a = t.pstyle("line-color").value;
    this.colorStrokeStyle(e, a[0], a[1], a[2], n);
  }
};
xt.matchCanvasSize = function(e) {
  var t = this, n = t.data, r = t.findContainerClientCoords(), a = r[2], i = r[3], o = t.getPixelRatio(), u = t.motionBlurPxRatio;
  (e === t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE] || e === t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG]) && (o = u);
  var l = a * o, s = i * o, c;
  if (!(l === t.canvasWidth && s === t.canvasHeight)) {
    t.fontCaches = null;
    var d = n.canvasContainer;
    d.style.width = a + "px", d.style.height = i + "px";
    for (var h = 0; h < t.CANVAS_LAYERS; h++)
      c = n.canvases[h], c.width = l, c.height = s, c.style.width = a + "px", c.style.height = i + "px";
    for (var h = 0; h < t.BUFFER_COUNT; h++)
      c = n.bufferCanvases[h], c.width = l, c.height = s, c.style.width = a + "px", c.style.height = i + "px";
    t.textureMult = 1, o <= 1 && (c = n.bufferCanvases[t.TEXTURE_BUFFER], t.textureMult = 2, c.width = l * t.textureMult, c.height = s * t.textureMult), t.canvasWidth = l, t.canvasHeight = s, t.pixelRatio = o;
  }
};
xt.renderTo = function(e, t, n, r) {
  this.render({
    forcedContext: e,
    forcedZoom: t,
    forcedPan: n,
    drawAllLayers: true,
    forcedPxRatio: r
  });
};
xt.clearCanvas = function() {
  var e = this, t = e.data;
  function n(r) {
    r.clearRect(0, 0, e.canvasWidth, e.canvasHeight);
  }
  n(t.contexts[e.NODE]), n(t.contexts[e.DRAG]);
};
xt.render = function(e) {
  var t = this;
  e = e || fc();
  var n = t.cy, r = e.forcedContext, a = e.drawAllLayers, i = e.drawOnlyNodeLayer, o = e.forcedZoom, u = e.forcedPan, l = e.forcedPxRatio === void 0 ? this.getPixelRatio() : e.forcedPxRatio, s = t.data, c = s.canvasNeedsRedraw, d = t.textureOnViewport && !r && (t.pinching || t.hoverData.dragging || t.swipePanning || t.data.wheelZooming), h = e.motionBlur !== void 0 ? e.motionBlur : t.motionBlur, f = t.motionBlurPxRatio, p = n.hasCompoundNodes(), g = t.hoverData.draggingEles, m = !!(t.hoverData.selecting || t.touchData.selecting);
  h = h && !r && t.motionBlurEnabled && !m;
  var v = h;
  r || (t.prevPxRatio !== l && (t.invalidateContainerClientCoordsCache(), t.matchCanvasSize(t.container), t.redrawHint("eles", true), t.redrawHint("drag", true)), t.prevPxRatio = l), !r && t.motionBlurTimeout && clearTimeout(t.motionBlurTimeout), h && (t.mbFrames == null && (t.mbFrames = 0), t.mbFrames++, t.mbFrames < 3 && (v = false), t.mbFrames > t.minMbLowQualFrames && (t.motionBlurPxRatio = t.mbPxRBlurry)), t.clearingMotionBlur && (t.motionBlurPxRatio = 1), t.textureDrawLastFrame && !d && (c[t.NODE] = true, c[t.SELECT_BOX] = true);
  var y = n.style(), b = n.zoom(), w = o !== void 0 ? o : b, T = n.pan(), S = {
    x: T.x,
    y: T.y
  }, x = {
    zoom: b,
    pan: {
      x: T.x,
      y: T.y
    }
  }, _ = t.prevViewport, P = _ === void 0 || x.zoom !== _.zoom || x.pan.x !== _.pan.x || x.pan.y !== _.pan.y;
  !P && !(g && !p) && (t.motionBlurPxRatio = 1), u && (S = u), w *= l, S.x *= l, S.y *= l;
  var B = t.getCachedZSortedEles();
  function k(z, O, j, H, ne) {
    var oe = z.globalCompositeOperation;
    z.globalCompositeOperation = "destination-out", t.colorFillStyle(z, 255, 255, 255, t.motionBlurTransparency), z.fillRect(O, j, H, ne), z.globalCompositeOperation = oe;
  }
  function C(z, O) {
    var j, H, ne, oe;
    !t.clearingMotionBlur && (z === s.bufferContexts[t.MOTIONBLUR_BUFFER_NODE] || z === s.bufferContexts[t.MOTIONBLUR_BUFFER_DRAG]) ? (j = {
      x: T.x * f,
      y: T.y * f
    }, H = b * f, ne = t.canvasWidth * f, oe = t.canvasHeight * f) : (j = S, H = w, ne = t.canvasWidth, oe = t.canvasHeight), z.setTransform(1, 0, 0, 1, 0, 0), O === "motionBlur" ? k(z, 0, 0, ne, oe) : !r && (O === void 0 || O) && z.clearRect(0, 0, ne, oe), a || (z.translate(j.x, j.y), z.scale(H, H)), u && z.translate(u.x, u.y), o && z.scale(o, o);
  }
  if (d || (t.textureDrawLastFrame = false), d) {
    if (t.textureDrawLastFrame = true, !t.textureCache) {
      t.textureCache = {}, t.textureCache.bb = n.mutableElements().boundingBox(), t.textureCache.texture = t.data.bufferCanvases[t.TEXTURE_BUFFER];
      var M = t.data.bufferContexts[t.TEXTURE_BUFFER];
      M.setTransform(1, 0, 0, 1, 0, 0), M.clearRect(0, 0, t.canvasWidth * t.textureMult, t.canvasHeight * t.textureMult), t.render({
        forcedContext: M,
        drawOnlyNodeLayer: true,
        forcedPxRatio: l * t.textureMult
      });
      var x = t.textureCache.viewport = {
        zoom: n.zoom(),
        pan: n.pan(),
        width: t.canvasWidth,
        height: t.canvasHeight
      };
      x.mpan = {
        x: (0 - x.pan.x) / x.zoom,
        y: (0 - x.pan.y) / x.zoom
      };
    }
    c[t.DRAG] = false, c[t.NODE] = false;
    var D = s.contexts[t.NODE], N = t.textureCache.texture, x = t.textureCache.viewport;
    D.setTransform(1, 0, 0, 1, 0, 0), h ? k(D, 0, 0, x.width, x.height) : D.clearRect(0, 0, x.width, x.height);
    var A = y.core("outside-texture-bg-color").value, L = y.core("outside-texture-bg-opacity").value;
    t.colorFillStyle(D, A[0], A[1], A[2], L), D.fillRect(0, 0, x.width, x.height);
    var b = n.zoom();
    C(D, false), D.clearRect(x.mpan.x, x.mpan.y, x.width / x.zoom / l, x.height / x.zoom / l), D.drawImage(N, x.mpan.x, x.mpan.y, x.width / x.zoom / l, x.height / x.zoom / l);
  } else t.textureOnViewport && !r && (t.textureCache = null);
  var R = n.extent(), I = t.pinching || t.hoverData.dragging || t.swipePanning || t.data.wheelZooming || t.hoverData.draggingEles || t.cy.animated(), X = t.hideEdgesOnViewport && I, V = [];
  if (V[t.NODE] = !c[t.NODE] && h && !t.clearedForMotionBlur[t.NODE] || t.clearingMotionBlur, V[t.NODE] && (t.clearedForMotionBlur[t.NODE] = true), V[t.DRAG] = !c[t.DRAG] && h && !t.clearedForMotionBlur[t.DRAG] || t.clearingMotionBlur, V[t.DRAG] && (t.clearedForMotionBlur[t.DRAG] = true), c[t.NODE] || a || i || V[t.NODE]) {
    var Y = h && !V[t.NODE] && f !== 1, D = r || (Y ? t.data.bufferContexts[t.MOTIONBLUR_BUFFER_NODE] : s.contexts[t.NODE]), W = h && !Y ? "motionBlur" : void 0;
    C(D, W), X ? t.drawCachedNodes(D, B.nondrag, l, R) : t.drawLayeredElements(D, B.nondrag, l, R), t.debug && t.drawDebugPoints(D, B.nondrag), !a && !h && (c[t.NODE] = false);
  }
  if (!i && (c[t.DRAG] || a || V[t.DRAG])) {
    var Y = h && !V[t.DRAG] && f !== 1, D = r || (Y ? t.data.bufferContexts[t.MOTIONBLUR_BUFFER_DRAG] : s.contexts[t.DRAG]);
    C(D, h && !Y ? "motionBlur" : void 0), X ? t.drawCachedNodes(D, B.drag, l, R) : t.drawCachedElements(D, B.drag, l, R), t.debug && t.drawDebugPoints(D, B.drag), !a && !h && (c[t.DRAG] = false);
  }
  if (this.drawSelectionRectangle(e, C), h && f !== 1) {
    var Q = s.contexts[t.NODE], J = t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE], Z = s.contexts[t.DRAG], $ = t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG], te = function(z, O, j) {
      z.setTransform(1, 0, 0, 1, 0, 0), j || !v ? z.clearRect(0, 0, t.canvasWidth, t.canvasHeight) : k(z, 0, 0, t.canvasWidth, t.canvasHeight);
      var H = f;
      z.drawImage(
        O,
        // img
        0,
        0,
        // sx, sy
        t.canvasWidth * H,
        t.canvasHeight * H,
        // sw, sh
        0,
        0,
        // x, y
        t.canvasWidth,
        t.canvasHeight
        // w, h
      );
    };
    (c[t.NODE] || V[t.NODE]) && (te(Q, J, V[t.NODE]), c[t.NODE] = false), (c[t.DRAG] || V[t.DRAG]) && (te(Z, $, V[t.DRAG]), c[t.DRAG] = false);
  }
  t.prevViewport = x, t.clearingMotionBlur && (t.clearingMotionBlur = false, t.motionBlurCleared = true, t.motionBlur = true), h && (t.motionBlurTimeout = setTimeout(function() {
    t.motionBlurTimeout = null, t.clearedForMotionBlur[t.NODE] = false, t.clearedForMotionBlur[t.DRAG] = false, t.motionBlur = false, t.clearingMotionBlur = !d, t.mbFrames = 0, c[t.NODE] = true, c[t.DRAG] = true, t.redraw();
  }, Ly)), r || n.emit("render");
};
var hr;
xt.drawSelectionRectangle = function(e, t) {
  var n = this, r = n.cy, a = n.data, i = r.style(), o = e.drawOnlyNodeLayer, u = e.drawAllLayers, l = a.canvasNeedsRedraw, s = e.forcedContext;
  if (n.showFps || !o && l[n.SELECT_BOX] && !u) {
    var c = s || a.contexts[n.SELECT_BOX];
    if (t(c), n.selection[4] == 1 && (n.hoverData.selecting || n.touchData.selecting)) {
      var d = n.cy.zoom(), h = i.core("selection-box-border-width").value / d;
      c.lineWidth = h, c.fillStyle = "rgba(" + i.core("selection-box-color").value[0] + "," + i.core("selection-box-color").value[1] + "," + i.core("selection-box-color").value[2] + "," + i.core("selection-box-opacity").value + ")", c.fillRect(n.selection[0], n.selection[1], n.selection[2] - n.selection[0], n.selection[3] - n.selection[1]), h > 0 && (c.strokeStyle = "rgba(" + i.core("selection-box-border-color").value[0] + "," + i.core("selection-box-border-color").value[1] + "," + i.core("selection-box-border-color").value[2] + "," + i.core("selection-box-opacity").value + ")", c.strokeRect(n.selection[0], n.selection[1], n.selection[2] - n.selection[0], n.selection[3] - n.selection[1]));
    }
    if (a.bgActivePosistion && !n.hoverData.selecting) {
      var d = n.cy.zoom(), f = a.bgActivePosistion;
      c.fillStyle = "rgba(" + i.core("active-bg-color").value[0] + "," + i.core("active-bg-color").value[1] + "," + i.core("active-bg-color").value[2] + "," + i.core("active-bg-opacity").value + ")", c.beginPath(), c.arc(f.x, f.y, i.core("active-bg-size").pfValue / d, 0, 2 * Math.PI), c.fill();
    }
    var p = n.lastRedrawTime;
    if (n.showFps && p) {
      p = Math.round(p);
      var g = Math.round(1e3 / p), m = "1 frame = " + p + " ms = " + g + " fps";
      if (c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "rgba(255, 0, 0, 0.75)", c.strokeStyle = "rgba(255, 0, 0, 0.75)", c.font = "30px Arial", !hr) {
        var v = c.measureText(m);
        hr = v.actualBoundingBoxAscent;
      }
      c.fillText(m, 0, hr);
      var y = 60;
      c.strokeRect(0, hr + 10, 250, 20), c.fillRect(0, hr + 10, 250 * Math.min(g / y, 1), 20);
    }
    u || (l[n.SELECT_BOX] = false);
  }
};
function Fu(e, t, n) {
  var r = e.createShader(t);
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS))
    throw new Error(e.getShaderInfoLog(r));
  return r;
}
function zy(e, t, n) {
  var r = Fu(e, e.VERTEX_SHADER, t), a = Fu(e, e.FRAGMENT_SHADER, n), i = e.createProgram();
  if (e.attachShader(i, r), e.attachShader(i, a), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS))
    throw new Error("Could not initialize shaders");
  return i;
}
function Oy(e, t, n) {
  n === void 0 && (n = t);
  var r = e.makeOffscreenCanvas(t, n), a = r.context = r.getContext("2d");
  return r.clear = function() {
    return a.clearRect(0, 0, r.width, r.height);
  }, r.clear(), r;
}
function ys(e) {
  var t = e.pixelRatio, n = e.cy.zoom(), r = e.cy.pan();
  return {
    zoom: n * t,
    pan: {
      x: r.x * t,
      y: r.y * t
    }
  };
}
function Vy(e) {
  var t = e.pixelRatio, n = e.cy.zoom();
  return n * t;
}
function Fy(e, t, n, r, a) {
  var i = r * n + t.x, o = a * n + t.y;
  return o = Math.round(e.canvasHeight - o), [i, o];
}
function jy(e) {
  return e.pstyle("background-fill").value !== "solid" || e.pstyle("background-image").strValue !== "none" ? false : e.pstyle("border-width").value === 0 || e.pstyle("border-opacity").value === 0 ? true : e.pstyle("border-style").value === "solid";
}
function Xy(e, t) {
  if (e.length !== t.length)
    return false;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return false;
  return true;
}
function bn(e, t, n) {
  var r = e[0] / 255, a = e[1] / 255, i = e[2] / 255, o = t, u = n || new Array(4);
  return u[0] = r * o, u[1] = a * o, u[2] = i * o, u[3] = o, u;
}
function On(e, t) {
  var n = t || new Array(4);
  return n[0] = (e >> 0 & 255) / 255, n[1] = (e >> 8 & 255) / 255, n[2] = (e >> 16 & 255) / 255, n[3] = (e >> 24 & 255) / 255, n;
}
function Yy(e) {
  return e[0] + (e[1] << 8) + (e[2] << 16) + (e[3] << 24);
}
function qy(e, t) {
  var n = e.createTexture();
  return n.buffer = function(r) {
    e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r), e.generateMipmap(e.TEXTURE_2D), e.bindTexture(e.TEXTURE_2D, null);
  }, n.deleteTexture = function() {
    e.deleteTexture(n);
  }, n;
}
function Pd(e, t) {
  switch (t) {
    case "float":
      return [1, e.FLOAT, 4];
    case "vec2":
      return [2, e.FLOAT, 4];
    case "vec3":
      return [3, e.FLOAT, 4];
    case "vec4":
      return [4, e.FLOAT, 4];
    case "int":
      return [1, e.INT, 4];
    case "ivec2":
      return [2, e.INT, 4];
  }
}
function Sd(e, t, n) {
  switch (t) {
    case e.FLOAT:
      return new Float32Array(n);
    case e.INT:
      return new Int32Array(n);
  }
}
function Uy(e, t, n, r, a, i) {
  switch (t) {
    case e.FLOAT:
      return new Float32Array(n.buffer, i * r, a);
    case e.INT:
      return new Int32Array(n.buffer, i * r, a);
  }
}
function Wy(e, t, n, r) {
  var a = Pd(e, t), i = Je(a, 2), o = i[0], u = i[1], l = Sd(e, u, r), s = e.createBuffer();
  return e.bindBuffer(e.ARRAY_BUFFER, s), e.bufferData(e.ARRAY_BUFFER, l, e.STATIC_DRAW), u === e.FLOAT ? e.vertexAttribPointer(n, o, u, false, 0, 0) : u === e.INT && e.vertexAttribIPointer(n, o, u, 0, 0), e.enableVertexAttribArray(n), e.bindBuffer(e.ARRAY_BUFFER, null), s;
}
function Ot(e, t, n, r) {
  var a = Pd(e, n), i = Je(a, 3), o = i[0], u = i[1], l = i[2], s = Sd(e, u, t * o), c = o * l, d = e.createBuffer();
  e.bindBuffer(e.ARRAY_BUFFER, d), e.bufferData(e.ARRAY_BUFFER, t * c, e.DYNAMIC_DRAW), e.enableVertexAttribArray(r), u === e.FLOAT ? e.vertexAttribPointer(r, o, u, false, c, 0) : u === e.INT && e.vertexAttribIPointer(r, o, u, c, 0), e.vertexAttribDivisor(r, 1), e.bindBuffer(e.ARRAY_BUFFER, null);
  for (var h = new Array(t), f = 0; f < t; f++)
    h[f] = Uy(e, u, s, c, o, f);
  return d.dataArray = s, d.stride = c, d.size = o, d.getView = function(p) {
    return h[p];
  }, d.setPoint = function(p, g, m) {
    var v = h[p];
    v[0] = g, v[1] = m;
  }, d.bufferSubData = function(p) {
    e.bindBuffer(e.ARRAY_BUFFER, d), p ? e.bufferSubData(e.ARRAY_BUFFER, 0, s, 0, p * o) : e.bufferSubData(e.ARRAY_BUFFER, 0, s);
  }, d;
}
function Gy(e, t, n) {
  for (var r = 9, a = new Float32Array(t * r), i = new Array(t), o = 0; o < t; o++) {
    var u = o * r * 4;
    i[o] = new Float32Array(a.buffer, u, r);
  }
  var l = e.createBuffer();
  e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, a.byteLength, e.DYNAMIC_DRAW);
  for (var s = 0; s < 3; s++) {
    var c = n + s;
    e.enableVertexAttribArray(c), e.vertexAttribPointer(c, 3, e.FLOAT, false, 3 * 12, s * 12), e.vertexAttribDivisor(c, 1);
  }
  return e.bindBuffer(e.ARRAY_BUFFER, null), l.getMatrixView = function(d) {
    return i[d];
  }, l.setData = function(d, h) {
    i[h].set(d, 0);
  }, l.bufferSubData = function() {
    e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferSubData(e.ARRAY_BUFFER, 0, a);
  }, l;
}
function Hy(e) {
  var t = e.createFramebuffer();
  e.bindFramebuffer(e.FRAMEBUFFER, t);
  var n = e.createTexture();
  return e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0), e.bindFramebuffer(e.FRAMEBUFFER, null), t.setFramebufferAttachmentSizes = function(r, a) {
    e.bindTexture(e.TEXTURE_2D, n), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r, a, 0, e.RGBA, e.UNSIGNED_BYTE, null);
  }, t;
}
var ju = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; )
    e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function xo() {
  var e = new ju(9);
  return ju != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e;
}
function Xu(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
}
function Ky(e, t, n) {
  var r = t[0], a = t[1], i = t[2], o = t[3], u = t[4], l = t[5], s = t[6], c = t[7], d = t[8], h = n[0], f = n[1], p = n[2], g = n[3], m = n[4], v = n[5], y = n[6], b = n[7], w = n[8];
  return e[0] = h * r + f * o + p * s, e[1] = h * a + f * u + p * c, e[2] = h * i + f * l + p * d, e[3] = g * r + m * o + v * s, e[4] = g * a + m * u + v * c, e[5] = g * i + m * l + v * d, e[6] = y * r + b * o + w * s, e[7] = y * a + b * u + w * c, e[8] = y * i + b * l + w * d, e;
}
function va(e, t, n) {
  var r = t[0], a = t[1], i = t[2], o = t[3], u = t[4], l = t[5], s = t[6], c = t[7], d = t[8], h = n[0], f = n[1];
  return e[0] = r, e[1] = a, e[2] = i, e[3] = o, e[4] = u, e[5] = l, e[6] = h * r + f * o + s, e[7] = h * a + f * u + c, e[8] = h * i + f * l + d, e;
}
function Yu(e, t, n) {
  var r = t[0], a = t[1], i = t[2], o = t[3], u = t[4], l = t[5], s = t[6], c = t[7], d = t[8], h = Math.sin(n), f = Math.cos(n);
  return e[0] = f * r + h * o, e[1] = f * a + h * u, e[2] = f * i + h * l, e[3] = f * o - h * r, e[4] = f * u - h * a, e[5] = f * l - h * i, e[6] = s, e[7] = c, e[8] = d, e;
}
function Yo(e, t, n) {
  var r = n[0], a = n[1];
  return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = a * t[3], e[4] = a * t[4], e[5] = a * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
}
function Zy(e, t, n) {
  return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / n, e[5] = 0, e[6] = -1, e[7] = 1, e[8] = 1, e;
}
var Qy = function() {
  function e(t, n, r, a) {
    hn(this, e), this.debugID = Math.floor(Math.random() * 1e4), this.r = t, this.texSize = n, this.texRows = r, this.texHeight = Math.floor(n / r), this.enableWrapping = true, this.locked = false, this.texture = null, this.needsBuffer = true, this.freePointer = {
      x: 0,
      row: 0
    }, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = a(t, n, n), this.scratch = a(t, n, this.texHeight, "scratch");
  }
  return fn(e, [{
    key: "lock",
    value: function() {
      this.locked = true;
    }
  }, {
    key: "getKeys",
    value: function() {
      return new Set(this.keyToLocation.keys());
    }
  }, {
    key: "getScale",
    value: function(t) {
      var n = t.w, r = t.h, a = this.texHeight, i = this.texSize, o = a / r, u = n * o, l = r * o;
      return u > i && (o = i / n, u = n * o, l = r * o), {
        scale: o,
        texW: u,
        texH: l
      };
    }
  }, {
    key: "draw",
    value: function(t, n, r) {
      var a = this;
      if (this.locked) throw new Error("can't draw, atlas is locked");
      var i = this.texSize, o = this.texRows, u = this.texHeight, l = this.getScale(n), s = l.scale, c = l.texW, d = l.texH, h = function(v, y) {
        if (r && y) {
          var b = y.context, w = v.x, T = v.row, S = w, x = u * T;
          b.save(), b.translate(S, x), b.scale(s, s), r(b, n), b.restore();
        }
      }, f = [null, null], p = function() {
        h(a.freePointer, a.canvas), f[0] = {
          x: a.freePointer.x,
          y: a.freePointer.row * u,
          w: c,
          h: d
        }, f[1] = {
          // create a second location with a width of 0, for convenience
          x: a.freePointer.x + c,
          y: a.freePointer.row * u,
          w: 0,
          h: d
        }, a.freePointer.x += c, a.freePointer.x == i && (a.freePointer.x = 0, a.freePointer.row++);
      }, g = function() {
        var v = a.scratch, y = a.canvas;
        v.clear(), h({
          x: 0,
          row: 0
        }, v);
        var b = i - a.freePointer.x, w = c - b, T = u;
        {
          var S = a.freePointer.x, x = a.freePointer.row * u, _ = b;
          y.context.drawImage(v, 0, 0, _, T, S, x, _, T), f[0] = {
            x: S,
            y: x,
            w: _,
            h: d
          };
        }
        {
          var P = b, B = (a.freePointer.row + 1) * u, k = w;
          y && y.context.drawImage(v, P, 0, k, T, 0, B, k, T), f[1] = {
            x: 0,
            y: B,
            w: k,
            h: d
          };
        }
        a.freePointer.x = w, a.freePointer.row++;
      }, m = function() {
        a.freePointer.x = 0, a.freePointer.row++;
      };
      if (this.freePointer.x + c <= i)
        p();
      else {
        if (this.freePointer.row >= o - 1)
          return false;
        this.freePointer.x === i ? (m(), p()) : this.enableWrapping ? g() : (m(), p());
      }
      return this.keyToLocation.set(t, f), this.needsBuffer = true, f;
    }
  }, {
    key: "getOffsets",
    value: function(t) {
      return this.keyToLocation.get(t);
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.freePointer.x === 0 && this.freePointer.row === 0;
    }
  }, {
    key: "canFit",
    value: function(t) {
      if (this.locked) return false;
      var n = this.texSize, r = this.texRows, a = this.getScale(t), i = a.texW;
      return this.freePointer.x + i > n ? this.freePointer.row < r - 1 : true;
    }
    // called on every frame
  }, {
    key: "bufferIfNeeded",
    value: function(t) {
      this.texture || (this.texture = qy(t, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = false, this.locked && (this.canvas = null, this.scratch = null));
    }
  }, {
    key: "dispose",
    value: function() {
      this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = true;
    }
  }]);
}();
var $y = function() {
  function e(t, n, r, a) {
    hn(this, e), this.r = t, this.texSize = n, this.texRows = r, this.createTextureCanvas = a, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
  }
  return fn(e, [{
    key: "getKeys",
    value: function() {
      return new Set(this.styleKeyToAtlas.keys());
    }
  }, {
    key: "_createAtlas",
    value: function() {
      var t = this.r, n = this.texSize, r = this.texRows, a = this.createTextureCanvas;
      return new Qy(t, n, r, a);
    }
  }, {
    key: "_getScratchCanvas",
    value: function() {
      if (!this.scratch) {
        var t = this.r, n = this.texSize, r = this.texRows, a = this.createTextureCanvas, i = Math.floor(n / r);
        this.scratch = a(t, n, i, "scratch");
      }
      return this.scratch;
    }
  }, {
    key: "draw",
    value: function(t, n, r) {
      var a = this.styleKeyToAtlas.get(t);
      return a || (a = this.atlases[this.atlases.length - 1], (!a || !a.canFit(n)) && (a && a.lock(), a = this._createAtlas(), this.atlases.push(a)), a.draw(t, n, r), this.styleKeyToAtlas.set(t, a)), a;
    }
  }, {
    key: "getAtlas",
    value: function(t) {
      return this.styleKeyToAtlas.get(t);
    }
  }, {
    key: "hasAtlas",
    value: function(t) {
      return this.styleKeyToAtlas.has(t);
    }
  }, {
    key: "markKeyForGC",
    value: function(t) {
      this.markedKeys.add(t);
    }
  }, {
    key: "gc",
    value: function() {
      var t = this, n = this.markedKeys;
      if (n.size === 0) {
        console.log("nothing to garbage collect");
        return;
      }
      var r = [], a = /* @__PURE__ */ new Map(), i = null, o = Pt(this.atlases), u;
      try {
        var l = function() {
          var s = u.value, c = s.getKeys(), d = Jy(n, c);
          if (d.size === 0)
            return r.push(s), c.forEach(function(b) {
              return a.set(b, s);
            }), 1;
          i || (i = t._createAtlas(), r.push(i));
          var h = Pt(c), f;
          try {
            for (h.s(); !(f = h.n()).done; ) {
              var p = f.value;
              if (!d.has(p)) {
                var g = s.getOffsets(p), m = Je(g, 2), v = m[0], y = m[1];
                i.canFit({
                  w: v.w + y.w,
                  h: v.h
                }) || (i.lock(), i = t._createAtlas(), r.push(i)), s.canvas && (t._copyTextureToNewAtlas(p, s, i), a.set(p, i));
              }
            }
          } catch (b) {
            h.e(b);
          } finally {
            h.f();
          }
          s.dispose();
        };
        for (o.s(); !(u = o.n()).done; )
          l();
      } catch (s) {
        o.e(s);
      } finally {
        o.f();
      }
      this.atlases = r, this.styleKeyToAtlas = a, this.markedKeys = /* @__PURE__ */ new Set();
    }
  }, {
    key: "_copyTextureToNewAtlas",
    value: function(t, n, r) {
      var a = n.getOffsets(t), i = Je(a, 2), o = i[0], u = i[1];
      if (u.w === 0)
        r.draw(t, o, function(d) {
          d.drawImage(n.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h);
        });
      else {
        var l = this._getScratchCanvas();
        l.clear(), l.context.drawImage(n.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h), l.context.drawImage(n.canvas, u.x, u.y, u.w, u.h, o.w, 0, u.w, u.h);
        var s = o.w + u.w, c = o.h;
        r.draw(t, {
          w: s,
          h: c
        }, function(d) {
          d.drawImage(
            l,
            0,
            0,
            s,
            c,
            0,
            0,
            s,
            c
            // the destination context has already been translated to the correct position
          );
        });
      }
    }
  }, {
    key: "getCounts",
    value: function() {
      return {
        keyCount: this.styleKeyToAtlas.size,
        atlasCount: new Set(this.styleKeyToAtlas.values()).size
      };
    }
  }]);
}();
function Jy(e, t) {
  return e.intersection ? e.intersection(t) : new Set(ga(e).filter(function(n) {
    return t.has(n);
  }));
}
var em = function() {
  function e(t, n) {
    hn(this, e), this.r = t, this.globalOptions = n, this.atlasSize = n.webglTexSize, this.maxAtlasesPerBatch = n.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map();
  }
  return fn(e, [{
    key: "getAtlasSize",
    value: function() {
      return this.atlasSize;
    }
  }, {
    key: "addAtlasCollection",
    value: function(t, n) {
      var r = this.globalOptions, a = r.webglTexSize, i = r.createTextureCanvas, o = n.texRows, u = this._cacheScratchCanvas(i), l = new $y(this.r, a, o, u);
      this.collections.set(t, l);
    }
  }, {
    key: "addRenderType",
    value: function(t, n) {
      var r = n.collection;
      if (!this.collections.has(r)) throw new Error("invalid atlas collection name '".concat(r, "'"));
      var a = this.collections.get(r), i = ve({
        type: t,
        atlasCollection: a
      }, n);
      this.renderTypes.set(t, i);
    }
  }, {
    key: "getRenderTypeOpts",
    value: function(t) {
      return this.renderTypes.get(t);
    }
  }, {
    key: "getAtlasCollection",
    value: function(t) {
      return this.collections.get(t);
    }
  }, {
    key: "_cacheScratchCanvas",
    value: function(t) {
      var n = -1, r = -1, a = null;
      return function(i, o, u, l) {
        return l ? ((!a || o != n || u != r) && (n = o, r = u, a = t(i, o, u)), a) : t(i, o, u);
      };
    }
  }, {
    key: "_key",
    value: function(t, n) {
      return "".concat(t, "-").concat(n);
    }
    /** Marks textues associated with the element for garbage collection. */
  }, {
    key: "invalidate",
    value: function(t) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.forceRedraw, i = a === void 0 ? false : a, o = r.filterEle, u = o === void 0 ? function() {
        return true;
      } : o, l = r.filterType, s = l === void 0 ? function() {
        return true;
      } : l, c = false, d = false, h = Pt(t), f;
      try {
        for (h.s(); !(f = h.n()).done; ) {
          var p = f.value;
          if (u(p)) {
            var g = Pt(this.renderTypes.values()), m;
            try {
              var v = function() {
                var y = m.value, b = y.type;
                if (s(b)) {
                  var w = n.collections.get(y.collection), T = y.getKey(p), S = Array.isArray(T) ? T : [T];
                  if (i)
                    S.forEach(function(B) {
                      return w.markKeyForGC(B);
                    }), d = true;
                  else {
                    var x = y.getID ? y.getID(p) : p.id(), _ = n._key(b, x), P = n.typeAndIdToKey.get(_);
                    P !== void 0 && !Xy(S, P) && (c = true, n.typeAndIdToKey.delete(_), P.forEach(function(B) {
                      return w.markKeyForGC(B);
                    }));
                  }
                }
              };
              for (g.s(); !(m = g.n()).done; )
                v();
            } catch (y) {
              g.e(y);
            } finally {
              g.f();
            }
          }
        }
      } catch (y) {
        h.e(y);
      } finally {
        h.f();
      }
      return d && (this.gc(), c = false), c;
    }
    /** Garbage collect */
  }, {
    key: "gc",
    value: function() {
      var t = Pt(this.collections.values()), n;
      try {
        for (t.s(); !(n = t.n()).done; ) {
          var r = n.value;
          r.gc();
        }
      } catch (a) {
        t.e(a);
      } finally {
        t.f();
      }
    }
  }, {
    key: "getOrCreateAtlas",
    value: function(t, n, r, a) {
      var i = this.renderTypes.get(n), o = this.collections.get(i.collection), u = false, l = o.draw(a, r, function(d) {
        i.drawClipped ? (d.save(), d.beginPath(), d.rect(0, 0, r.w, r.h), d.clip(), i.drawElement(d, t, r, true, true), d.restore()) : i.drawElement(d, t, r, true, true), u = true;
      });
      if (u) {
        var s = i.getID ? i.getID(t) : t.id(), c = this._key(n, s);
        this.typeAndIdToKey.has(c) ? this.typeAndIdToKey.get(c).push(a) : this.typeAndIdToKey.set(c, [a]);
      }
      return l;
    }
  }, {
    key: "getAtlasInfo",
    value: function(t, n) {
      var r = this, a = this.renderTypes.get(n), i = a.getKey(t), o = Array.isArray(i) ? i : [i];
      return o.map(function(u) {
        var l = a.getBoundingBox(t, u), s = r.getOrCreateAtlas(t, n, l, u), c = s.getOffsets(u), d = Je(c, 2), h = d[0], f = d[1];
        return {
          atlas: s,
          tex: h,
          tex1: h,
          tex2: f,
          bb: l
        };
      });
    }
  }, {
    key: "getDebugInfo",
    value: function() {
      var t = [], n = Pt(this.collections), r;
      try {
        for (n.s(); !(r = n.n()).done; ) {
          var a = Je(r.value, 2), i = a[0], o = a[1], u = o.getCounts(), l = u.keyCount, s = u.atlasCount;
          t.push({
            type: i,
            keyCount: l,
            atlasCount: s
          });
        }
      } catch (c) {
        n.e(c);
      } finally {
        n.f();
      }
      return t;
    }
  }]);
}();
var tm = function() {
  function e(t) {
    hn(this, e), this.globalOptions = t, this.atlasSize = t.webglTexSize, this.maxAtlasesPerBatch = t.webglTexPerBatch, this.batchAtlases = [];
  }
  return fn(e, [{
    key: "getMaxAtlasesPerBatch",
    value: function() {
      return this.maxAtlasesPerBatch;
    }
  }, {
    key: "getAtlasSize",
    value: function() {
      return this.atlasSize;
    }
  }, {
    key: "getIndexArray",
    value: function() {
      return Array.from({
        length: this.maxAtlasesPerBatch
      }, function(t, n) {
        return n;
      });
    }
  }, {
    key: "startBatch",
    value: function() {
      this.batchAtlases = [];
    }
  }, {
    key: "getAtlasCount",
    value: function() {
      return this.batchAtlases.length;
    }
  }, {
    key: "getAtlases",
    value: function() {
      return this.batchAtlases;
    }
  }, {
    key: "canAddToCurrentBatch",
    value: function(t) {
      return this.batchAtlases.length === this.maxAtlasesPerBatch ? this.batchAtlases.includes(t) : true;
    }
  }, {
    key: "getAtlasIndexForBatch",
    value: function(t) {
      var n = this.batchAtlases.indexOf(t);
      if (n < 0) {
        if (this.batchAtlases.length === this.maxAtlasesPerBatch)
          throw new Error("cannot add more atlases to batch");
        this.batchAtlases.push(t), n = this.batchAtlases.length - 1;
      }
      return n;
    }
  }]);
}();
var nm = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`;
var rm = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`;
var am = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`;
var im = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`;
var xr = {
  SCREEN: {
    name: "screen",
    screen: true
  },
  PICKING: {
    name: "picking",
    picking: true
  }
};
var _a = {
  // render the texture just like in RENDER_TARGET.SCREEN mode
  IGNORE: 1,
  // don't render the texture at all
  USE_BB: 2
  // render the bounding box as an opaque rectangle
};
var wo = 0;
var qu = 1;
var Uu = 2;
var Eo = 3;
var Vn = 4;
var ia = 5;
var fr = 6;
var pr = 7;
var om = function() {
  function e(t, n, r) {
    hn(this, e), this.r = t, this.gl = n, this.maxInstances = r.webglBatchSize, this.atlasSize = r.webglTexSize, this.bgColor = r.bgColor, this.debug = r.webglDebug, this.batchDebugInfo = [], r.enableWrapping = true, r.createTextureCanvas = Oy, this.atlasManager = new em(t, r), this.batchManager = new tm(r), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(xr.SCREEN), this.pickingProgram = this._createShaderProgram(xr.PICKING), this.vao = this._createVAO();
  }
  return fn(e, [{
    key: "addAtlasCollection",
    value: function(t, n) {
      this.atlasManager.addAtlasCollection(t, n);
    }
    /**
     * @typedef { Object } TextureRenderTypeOpts
     * @property { string } collection - name of atlas collection to render textures to
     * @property { function } getKey - returns the "style key" for an element, may be a single value or an array for multi-line lables
     * @property { function } drawElement - uses a canvas renderer to draw the element to the texture atlas
     * @property { boolean  } drawClipped - if true the context will be clipped to the bounding box before drawElement() is called, may affect performance
     * @property { function } getBoundingBox - returns the bounding box for an element
     * @property { function } getRotation
     * @property { function } getRotationPoint
     * @property { function } getRotationOffset
     * @property { function } isVisible - an extra check for visibility in addition to ele.visible()
     * @property { function } getTexPickingMode - returns a value from the TEX_PICKING_MODE enum
     */
    /**
     * @param { string } typeName
     * @param { TextureRenderTypeOpts } opts
     */
  }, {
    key: "addTextureAtlasRenderType",
    value: function(t, n) {
      this.atlasManager.addRenderType(t, n);
    }
    /**
     * @typedef { Object } SimpleShapeRenderTypeOpts
     * @property { function } getBoundingBox - returns the bounding box for an element
     * @property { function } isVisible - this is an extra check for visibility in addition to ele.visible()
     * @property { function } isSimple - check if element is a simple shape, or if it needs to fall back to texture rendering
     * @property { ShapeVisualProperties } shapeProps
     */
    /**
     * @typedef { Object } ShapeVisualProperties
     * @property { string } shape
     * @property { string } color
     * @property { string } opacity
     * @property { string } padding
     * @property { string } radius
     * @property { boolean } border
    */
    /**
     * @param { string } typeName
     * @param { SimpleShapeRenderTypeOpts } opts
     */
  }, {
    key: "addSimpleShapeRenderType",
    value: function(t, n) {
      this.simpleShapeOptions.set(t, n);
    }
    /**
     * Inform the atlasManager when element style keys may have changed.
     * The atlasManager can then mark unused textures for "garbage collection".
     */
  }, {
    key: "invalidate",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.type, a = this.atlasManager;
      return r ? a.invalidate(t, {
        filterType: function(i) {
          return i === r;
        },
        forceRedraw: true
      }) : a.invalidate(t);
    }
    /**
     * Run texture garbage collection.
     */
  }, {
    key: "gc",
    value: function() {
      this.atlasManager.gc();
    }
  }, {
    key: "_createShaderProgram",
    value: function(t) {
      var n = this.gl, r = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == `.concat(wo, `) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(Vn, " || aVertType == ").concat(pr, ` 
             || aVertType == `).concat(ia, " || aVertType == ").concat(fr, `) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(qu, `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == `).concat(Uu, `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == `).concat(Eo, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `), a = this.batchManager.getIndexArray(), i = `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      `.concat(a.map(function(l) {
        return "uniform sampler2D uTexture".concat(l, ";");
      }).join(`
	`), `

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      `).concat(nm, `
      `).concat(rm, `
      `).concat(am, `
      `).concat(im, `

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == `).concat(wo, `) {
          // look up the texel from the texture unit
          `).concat(a.map(function(l) {
        return "if(vAtlasId == ".concat(l, ") outColor = texture(uTexture").concat(l, ", vTexCoord);");
      }).join(`
	else `), `
        } 
        else if(vVertType == `).concat(Eo, `) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == `).concat(Vn, ` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == `).concat(Vn, " || vVertType == ").concat(pr, ` 
          || vVertType == `).concat(ia, " || vVertType == ").concat(fr, `) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == `).concat(Vn, `) {
            d = rectangleSD(p, b);
          } else if(vVertType == `).concat(pr, ` && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == `).concat(pr, `) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        `).concat(t.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `), o = zy(n, r, i);
      o.aPosition = n.getAttribLocation(o, "aPosition"), o.aIndex = n.getAttribLocation(o, "aIndex"), o.aVertType = n.getAttribLocation(o, "aVertType"), o.aTransform = n.getAttribLocation(o, "aTransform"), o.aAtlasId = n.getAttribLocation(o, "aAtlasId"), o.aTex = n.getAttribLocation(o, "aTex"), o.aPointAPointB = n.getAttribLocation(o, "aPointAPointB"), o.aPointCPointD = n.getAttribLocation(o, "aPointCPointD"), o.aLineWidth = n.getAttribLocation(o, "aLineWidth"), o.aColor = n.getAttribLocation(o, "aColor"), o.aCornerRadius = n.getAttribLocation(o, "aCornerRadius"), o.aBorderColor = n.getAttribLocation(o, "aBorderColor"), o.uPanZoomMatrix = n.getUniformLocation(o, "uPanZoomMatrix"), o.uAtlasSize = n.getUniformLocation(o, "uAtlasSize"), o.uBGColor = n.getUniformLocation(o, "uBGColor"), o.uZoom = n.getUniformLocation(o, "uZoom"), o.uTextures = [];
      for (var u = 0; u < this.batchManager.getMaxAtlasesPerBatch(); u++)
        o.uTextures.push(n.getUniformLocation(o, "uTexture".concat(u)));
      return o;
    }
  }, {
    key: "_createVAO",
    value: function() {
      var t = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
      this.vertexCount = t.length / 2;
      var n = this.maxInstances, r = this.gl, a = this.program, i = r.createVertexArray();
      return r.bindVertexArray(i), Wy(r, "vec2", a.aPosition, t), this.transformBuffer = Gy(r, n, a.aTransform), this.indexBuffer = Ot(r, n, "vec4", a.aIndex), this.vertTypeBuffer = Ot(r, n, "int", a.aVertType), this.atlasIdBuffer = Ot(r, n, "int", a.aAtlasId), this.texBuffer = Ot(r, n, "vec4", a.aTex), this.pointAPointBBuffer = Ot(r, n, "vec4", a.aPointAPointB), this.pointCPointDBuffer = Ot(r, n, "vec4", a.aPointCPointD), this.lineWidthBuffer = Ot(r, n, "vec2", a.aLineWidth), this.colorBuffer = Ot(r, n, "vec4", a.aColor), this.cornerRadiusBuffer = Ot(r, n, "vec4", a.aCornerRadius), this.borderColorBuffer = Ot(r, n, "vec4", a.aBorderColor), r.bindVertexArray(null), i;
    }
  }, {
    key: "buffers",
    get: function() {
      var t = this;
      return this._buffers || (this._buffers = Object.keys(this).filter(function(n) {
        return tn(n, "Buffer");
      }).map(function(n) {
        return t[n];
      })), this._buffers;
    }
  }, {
    key: "startFrame",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xr.SCREEN;
      this.panZoomMatrix = t, this.renderTarget = n, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
    }
  }, {
    key: "startBatch",
    value: function() {
      this.instanceCount = 0, this.batchManager.startBatch();
    }
  }, {
    key: "endFrame",
    value: function() {
      this.endBatch();
    }
  }, {
    key: "_isVisible",
    value: function(t, n) {
      return t.visible() ? n && n.isVisible ? n.isVisible(t) : true : false;
    }
    /**
     * Draws a texture using the texture atlas.
     */
  }, {
    key: "drawTexture",
    value: function(t, n, r) {
      var a = this.atlasManager, i = this.batchManager, o = a.getRenderTypeOpts(r);
      if (this._isVisible(t, o)) {
        if (this.renderTarget.picking && o.getTexPickingMode) {
          var u = o.getTexPickingMode(t);
          if (u === _a.IGNORE)
            return;
          if (u == _a.USE_BB) {
            this.drawPickingRectangle(t, n, r);
            return;
          }
        }
        var l = a.getAtlasInfo(t, r), s = Pt(l), c;
        try {
          for (s.s(); !(c = s.n()).done; ) {
            var d = c.value, h = d.atlas, f = d.tex1, p = d.tex2;
            i.canAddToCurrentBatch(h) || this.endBatch();
            for (var g = i.getAtlasIndexForBatch(h), m = 0, v = [[f, true], [p, false]]; m < v.length; m++) {
              var y = Je(v[m], 2), b = y[0], w = y[1];
              if (b.w != 0) {
                var T = this.instanceCount;
                this.vertTypeBuffer.getView(T)[0] = wo;
                var S = this.indexBuffer.getView(T);
                On(n, S);
                var x = this.atlasIdBuffer.getView(T);
                x[0] = g;
                var _ = this.texBuffer.getView(T);
                _[0] = b.x, _[1] = b.y, _[2] = b.w, _[3] = b.h;
                var P = this.transformBuffer.getMatrixView(T);
                this.setTransformMatrix(t, P, o, d, w), this.instanceCount++, w || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
              }
            }
          }
        } catch (B) {
          s.e(B);
        } finally {
          s.f();
        }
      }
    }
    /**
     * matrix is expected to be a 9 element array
     * this function follows same pattern as CRp.drawCachedElementPortion(...)
     */
  }, {
    key: "setTransformMatrix",
    value: function(t, n, r, a) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, o = 0;
      if (r.shapeProps && r.shapeProps.padding && (o = t.pstyle(r.shapeProps.padding).pfValue), a) {
        var u = a.bb, l = a.tex1, s = a.tex2, c = l.w / (l.w + s.w);
        i || (c = 1 - c);
        var d = this._getAdjustedBB(u, o, i, c);
        this._applyTransformMatrix(n, d, r, t);
      } else {
        var h = r.getBoundingBox(t), f = this._getAdjustedBB(h, o, true, 1);
        this._applyTransformMatrix(n, f, r, t);
      }
    }
  }, {
    key: "_applyTransformMatrix",
    value: function(t, n, r, a) {
      var i, o;
      Xu(t);
      var u = r.getRotation ? r.getRotation(a) : 0;
      if (u !== 0) {
        var l = r.getRotationPoint(a), s = l.x, c = l.y;
        va(t, t, [s, c]), Yu(t, t, u);
        var d = r.getRotationOffset(a);
        i = d.x + (n.xOffset || 0), o = d.y + (n.yOffset || 0);
      } else
        i = n.x1, o = n.y1;
      va(t, t, [i, o]), Yo(t, t, [n.w, n.h]);
    }
    /**
     * Adjusts a node or label BB to accomodate padding and split for wrapped textures.
     * @param bb - the original bounding box
     * @param padding - the padding to add to the bounding box
     * @param first - whether this is the first part of a wrapped texture
     * @param ratio - the ratio of the texture width of part of the text to the entire texture
     */
  }, {
    key: "_getAdjustedBB",
    value: function(t, n, r, a) {
      var i = t.x1, o = t.y1, u = t.w, l = t.h, s = t.yOffset;
      n && (i -= n, o -= n, u += 2 * n, l += 2 * n);
      var c = 0, d = u * a;
      return r && a < 1 ? u = d : !r && a < 1 && (c = u - d, i += c, u = d), {
        x1: i,
        y1: o,
        w: u,
        h: l,
        xOffset: c,
        yOffset: s
      };
    }
    /**
     * Draw a solid opaque rectangle matching the element's Bounding Box.
     * Used by the PICKING mode to make the entire BB of a label clickable.
     */
  }, {
    key: "drawPickingRectangle",
    value: function(t, n, r) {
      var a = this.atlasManager.getRenderTypeOpts(r), i = this.instanceCount;
      this.vertTypeBuffer.getView(i)[0] = Vn;
      var o = this.indexBuffer.getView(i);
      On(n, o);
      var u = this.colorBuffer.getView(i);
      bn([0, 0, 0], 1, u);
      var l = this.transformBuffer.getMatrixView(i);
      this.setTransformMatrix(t, l, a), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
    }
    /**
     * Draw a node using either a texture or a "simple shape".
     */
  }, {
    key: "drawNode",
    value: function(t, n, r) {
      var a = this.simpleShapeOptions.get(r);
      if (this._isVisible(t, a)) {
        var i = a.shapeProps, o = this._getVertTypeForShape(t, i.shape);
        if (o === void 0 || a.isSimple && !a.isSimple(t)) {
          this.drawTexture(t, n, r);
          return;
        }
        var u = this.instanceCount;
        if (this.vertTypeBuffer.getView(u)[0] = o, o === ia || o === fr) {
          var l = a.getBoundingBox(t), s = this._getCornerRadius(t, i.radius, l), c = this.cornerRadiusBuffer.getView(u);
          c[0] = s, c[1] = s, c[2] = s, c[3] = s, o === fr && (c[0] = 0, c[2] = 0);
        }
        var d = this.indexBuffer.getView(u);
        On(n, d);
        var h = t.pstyle(i.color).value, f = t.pstyle(i.opacity).value, p = this.colorBuffer.getView(u);
        bn(h, f, p);
        var g = this.lineWidthBuffer.getView(u);
        if (g[0] = 0, g[1] = 0, i.border) {
          var m = t.pstyle("border-width").value;
          if (m > 0) {
            var v = t.pstyle("border-color").value, y = t.pstyle("border-opacity").value, b = this.borderColorBuffer.getView(u);
            bn(v, y, b);
            var w = t.pstyle("border-position").value;
            if (w === "inside")
              g[0] = 0, g[1] = -m;
            else if (w === "outside")
              g[0] = m, g[1] = 0;
            else {
              var T = m / 2;
              g[0] = T, g[1] = -T;
            }
          }
        }
        var S = this.transformBuffer.getMatrixView(u);
        this.setTransformMatrix(t, S, a), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
      }
    }
  }, {
    key: "_getVertTypeForShape",
    value: function(t, n) {
      var r = t.pstyle(n).value;
      switch (r) {
        case "rectangle":
          return Vn;
        case "ellipse":
          return pr;
        case "roundrectangle":
        case "round-rectangle":
          return ia;
        case "bottom-round-rectangle":
          return fr;
        default:
          return;
      }
    }
  }, {
    key: "_getCornerRadius",
    value: function(t, n, r) {
      var a = r.w, i = r.h;
      if (t.pstyle(n).value === "auto")
        return ln(a, i);
      var o = t.pstyle(n).pfValue, u = a / 2, l = i / 2;
      return Math.min(o, l, u);
    }
    /**
     * Only supports drawing triangles at the moment.
     */
  }, {
    key: "drawEdgeArrow",
    value: function(t, n, r) {
      if (t.visible()) {
        var a = t._private.rscratch, i, o, u;
        if (r === "source" ? (i = a.arrowStartX, o = a.arrowStartY, u = a.srcArrowAngle) : (i = a.arrowEndX, o = a.arrowEndY, u = a.tgtArrowAngle), !(isNaN(i) || i == null || isNaN(o) || o == null || isNaN(u) || u == null)) {
          var l = t.pstyle(r + "-arrow-shape").value;
          if (l !== "none") {
            var s = t.pstyle(r + "-arrow-color").value, c = t.pstyle("opacity").value, d = t.pstyle("line-opacity").value, h = c * d, f = t.pstyle("width").pfValue, p = t.pstyle("arrow-scale").value, g = this.r.getArrowWidth(f, p), m = this.instanceCount, v = this.transformBuffer.getMatrixView(m);
            Xu(v), va(v, v, [i, o]), Yo(v, v, [g, g]), Yu(v, v, u), this.vertTypeBuffer.getView(m)[0] = Eo;
            var y = this.indexBuffer.getView(m);
            On(n, y);
            var b = this.colorBuffer.getView(m);
            bn(s, h, b), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          }
        }
      }
    }
    /**
     * Draw straight-line or bezier curve edges.
     */
  }, {
    key: "drawEdgeLine",
    value: function(t, n) {
      if (t.visible()) {
        var r = this._getEdgePoints(t);
        if (r) {
          var a = t.pstyle("opacity").value, i = t.pstyle("line-opacity").value, o = t.pstyle("width").pfValue, u = t.pstyle("line-color").value, l = a * i;
          if (r.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), r.length == 4) {
            var s = this.instanceCount;
            this.vertTypeBuffer.getView(s)[0] = qu;
            var c = this.indexBuffer.getView(s);
            On(n, c);
            var d = this.colorBuffer.getView(s);
            bn(u, l, d);
            var h = this.lineWidthBuffer.getView(s);
            h[0] = o;
            var f = this.pointAPointBBuffer.getView(s);
            f[0] = r[0], f[1] = r[1], f[2] = r[2], f[3] = r[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          } else
            for (var p = 0; p < r.length - 2; p += 2) {
              var g = this.instanceCount;
              this.vertTypeBuffer.getView(g)[0] = Uu;
              var m = this.indexBuffer.getView(g);
              On(n, m);
              var v = this.colorBuffer.getView(g);
              bn(u, l, v);
              var y = this.lineWidthBuffer.getView(g);
              y[0] = o;
              var b = r[p - 2], w = r[p - 1], T = r[p], S = r[p + 1], x = r[p + 2], _ = r[p + 3], P = r[p + 4], B = r[p + 5];
              p == 0 && (b = 2 * T - x + 1e-3, w = 2 * S - _ + 1e-3), p == r.length - 4 && (P = 2 * x - T + 1e-3, B = 2 * _ - S + 1e-3);
              var k = this.pointAPointBBuffer.getView(g);
              k[0] = b, k[1] = w, k[2] = T, k[3] = S;
              var C = this.pointCPointDBuffer.getView(g);
              C[0] = x, C[1] = _, C[2] = P, C[3] = B, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
            }
        }
      }
    }
  }, {
    key: "_getEdgePoints",
    value: function(t) {
      var n = t._private.rscratch;
      if (!(n.badLine || n.allpts == null || isNaN(n.allpts[0]))) {
        var r = n.allpts;
        if (r.length == 4)
          return r;
        var a = this._getNumSegments(t);
        return this._getCurveSegmentPoints(r, a);
      }
    }
  }, {
    key: "_getNumSegments",
    value: function(t) {
      var n = 15;
      return Math.min(Math.max(n, 5), this.maxInstances);
    }
  }, {
    key: "_getCurveSegmentPoints",
    value: function(t, n) {
      if (t.length == 4)
        return t;
      for (var r = Array((n + 1) * 2), a = 0; a <= n; a++)
        if (a == 0)
          r[0] = t[0], r[1] = t[1];
        else if (a == n)
          r[a * 2] = t[t.length - 2], r[a * 2 + 1] = t[t.length - 1];
        else {
          var i = a / n;
          this._setCurvePoint(t, i, r, a * 2);
        }
      return r;
    }
  }, {
    key: "_setCurvePoint",
    value: function(t, n, r, a) {
      if (t.length <= 2)
        r[a] = t[0], r[a + 1] = t[1];
      else {
        for (var i = Array(t.length - 2), o = 0; o < i.length; o += 2) {
          var u = (1 - n) * t[o] + n * t[o + 2], l = (1 - n) * t[o + 1] + n * t[o + 3];
          i[o] = u, i[o + 1] = l;
        }
        return this._setCurvePoint(i, n, r, a);
      }
    }
  }, {
    key: "endBatch",
    value: function() {
      var t = this.gl, n = this.vao, r = this.vertexCount, a = this.instanceCount;
      if (a !== 0) {
        var i = this.renderTarget.picking ? this.pickingProgram : this.program;
        t.useProgram(i), t.bindVertexArray(n);
        var o = Pt(this.buffers), u;
        try {
          for (o.s(); !(u = o.n()).done; ) {
            var l = u.value;
            l.bufferSubData(a);
          }
        } catch (f) {
          o.e(f);
        } finally {
          o.f();
        }
        for (var s = this.batchManager.getAtlases(), c = 0; c < s.length; c++)
          s[c].bufferIfNeeded(t);
        for (var d = 0; d < s.length; d++)
          t.activeTexture(t.TEXTURE0 + d), t.bindTexture(t.TEXTURE_2D, s[d].texture), t.uniform1i(i.uTextures[d], d);
        t.uniform1f(i.uZoom, Vy(this.r)), t.uniformMatrix3fv(i.uPanZoomMatrix, false, this.panZoomMatrix), t.uniform1i(i.uAtlasSize, this.batchManager.getAtlasSize());
        var h = bn(this.bgColor, 1);
        t.uniform4fv(i.uBGColor, h), t.drawArraysInstanced(t.TRIANGLES, 0, r, a), t.bindVertexArray(null), t.bindTexture(t.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({
          count: a,
          // instance count
          atlasCount: s.length
        }), this.startBatch();
      }
    }
  }, {
    key: "getDebugInfo",
    value: function() {
      var t = this.atlasManager.getDebugInfo(), n = t.reduce(function(i, o) {
        return i + o.atlasCount;
      }, 0), r = this.batchDebugInfo, a = r.reduce(function(i, o) {
        return i + o.count;
      }, 0);
      return {
        atlasInfo: t,
        totalAtlases: n,
        wrappedCount: this.wrappedCount,
        simpleCount: this.simpleCount,
        batchCount: r.length,
        batchInfo: r,
        totalInstances: a
      };
    }
  }]);
}();
var kd = {};
kd.initWebgl = function(e, t) {
  var n = this, r = n.data.contexts[n.WEBGL];
  e.bgColor = sm(n), e.webglTexSize = Math.min(e.webglTexSize, r.getParameter(r.MAX_TEXTURE_SIZE)), e.webglTexRows = Math.min(e.webglTexRows, 54), e.webglTexRowsNodes = Math.min(e.webglTexRowsNodes, 54), e.webglBatchSize = Math.min(e.webglBatchSize, 16384), e.webglTexPerBatch = Math.min(e.webglTexPerBatch, r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS)), n.webglDebug = e.webglDebug, n.webglDebugShowAtlases = e.webglDebugShowAtlases, n.pickingFrameBuffer = Hy(r), n.pickingFrameBuffer.needsDraw = true, n.drawing = new om(n, r, e);
  var a = function(c) {
    return function(d) {
      return n.getTextAngle(d, c);
    };
  }, i = function(c) {
    return function(d) {
      var h = d.pstyle(c);
      return h && h.value;
    };
  }, o = function(c) {
    return function(d) {
      return d.pstyle("".concat(c, "-opacity")).value > 0;
    };
  }, u = function(c) {
    var d = c.pstyle("text-events").strValue === "yes";
    return d ? _a.USE_BB : _a.IGNORE;
  }, l = function(c) {
    var d = c.position(), h = d.x, f = d.y, p = c.outerWidth(), g = c.outerHeight();
    return {
      w: p,
      h: g,
      x1: h - p / 2,
      y1: f - g / 2
    };
  };
  n.drawing.addAtlasCollection("node", {
    texRows: e.webglTexRowsNodes
  }), n.drawing.addAtlasCollection("label", {
    texRows: e.webglTexRows
  }), n.drawing.addTextureAtlasRenderType("node-body", {
    collection: "node",
    getKey: t.getStyleKey,
    getBoundingBox: t.getElementBox,
    drawElement: t.drawElement
  }), n.drawing.addSimpleShapeRenderType("node-body", {
    getBoundingBox: l,
    isSimple: jy,
    shapeProps: {
      shape: "shape",
      color: "background-color",
      opacity: "background-opacity",
      radius: "corner-radius",
      border: true
    }
  }), n.drawing.addSimpleShapeRenderType("node-overlay", {
    getBoundingBox: l,
    isVisible: o("overlay"),
    shapeProps: {
      shape: "overlay-shape",
      color: "overlay-color",
      opacity: "overlay-opacity",
      padding: "overlay-padding",
      radius: "overlay-corner-radius"
    }
  }), n.drawing.addSimpleShapeRenderType("node-underlay", {
    getBoundingBox: l,
    isVisible: o("underlay"),
    shapeProps: {
      shape: "underlay-shape",
      color: "underlay-color",
      opacity: "underlay-opacity",
      padding: "underlay-padding",
      radius: "underlay-corner-radius"
    }
  }), n.drawing.addTextureAtlasRenderType("label", {
    // node label or edge mid label
    collection: "label",
    getTexPickingMode: u,
    getKey: To(t.getLabelKey, null),
    getBoundingBox: Co(t.getLabelBox, null),
    drawClipped: true,
    drawElement: t.drawLabel,
    getRotation: a(null),
    getRotationPoint: t.getLabelRotationPoint,
    getRotationOffset: t.getLabelRotationOffset,
    isVisible: i("label")
  }), n.drawing.addTextureAtlasRenderType("edge-source-label", {
    collection: "label",
    getTexPickingMode: u,
    getKey: To(t.getSourceLabelKey, "source"),
    getBoundingBox: Co(t.getSourceLabelBox, "source"),
    drawClipped: true,
    drawElement: t.drawSourceLabel,
    getRotation: a("source"),
    getRotationPoint: t.getSourceLabelRotationPoint,
    getRotationOffset: t.getSourceLabelRotationOffset,
    isVisible: i("source-label")
  }), n.drawing.addTextureAtlasRenderType("edge-target-label", {
    collection: "label",
    getTexPickingMode: u,
    getKey: To(t.getTargetLabelKey, "target"),
    getBoundingBox: Co(t.getTargetLabelBox, "target"),
    drawClipped: true,
    drawElement: t.drawTargetLabel,
    getRotation: a("target"),
    getRotationPoint: t.getTargetLabelRotationPoint,
    getRotationOffset: t.getTargetLabelRotationOffset,
    isVisible: i("target-label")
  });
  var s = Lr(function() {
    console.log("garbage collect flag set"), n.data.gc = true;
  }, 1e4);
  n.onUpdateEleCalcs(function(c, d) {
    var h = false;
    d && d.length > 0 && (h |= n.drawing.invalidate(d)), h && s();
  }), lm(n);
};
function sm(e) {
  var t = e.cy.container(), n = t && t.style && t.style.backgroundColor || "white";
  return nc(n);
}
function _d(e, t) {
  var n = e._private.rscratch;
  return Tt(n, "labelWrapCachedLines", t) || [];
}
var To = function(e, t) {
  return function(n) {
    var r = e(n), a = _d(n, t);
    return a.length > 1 ? a.map(function(i, o) {
      return "".concat(r, "_").concat(o);
    }) : r;
  };
};
var Co = function(e, t) {
  return function(n, r) {
    var a = e(n);
    if (typeof r == "string") {
      var i = r.indexOf("_");
      if (i > 0) {
        var o = Number(r.substring(i + 1)), u = _d(n, t), l = a.h / u.length, s = l * o, c = a.y1 + s;
        return {
          x1: a.x1,
          w: a.w,
          y1: c,
          h: l,
          yOffset: s
        };
      }
    }
    return a;
  };
};
function lm(e) {
  {
    var t = e.render;
    e.render = function(i) {
      i = i || {};
      var o = e.cy;
      e.webgl && (o.zoom() > xd ? (um(e), t.call(e, i)) : (cm(e), Dd(e, i, xr.SCREEN)));
    };
  }
  {
    var n = e.matchCanvasSize;
    e.matchCanvasSize = function(i) {
      n.call(e, i), e.pickingFrameBuffer.setFramebufferAttachmentSizes(e.canvasWidth, e.canvasHeight), e.pickingFrameBuffer.needsDraw = true;
    };
  }
  e.findNearestElements = function(i, o, u, l) {
    return gm(e, i, o);
  };
  {
    var r = e.invalidateCachedZSortedEles;
    e.invalidateCachedZSortedEles = function() {
      r.call(e), e.pickingFrameBuffer.needsDraw = true;
    };
  }
  {
    var a = e.notify;
    e.notify = function(i, o) {
      a.call(e, i, o), i === "viewport" || i === "bounds" ? e.pickingFrameBuffer.needsDraw = true : i === "background" && e.drawing.invalidate(o, {
        type: "node-body"
      });
    };
  }
}
function um(e) {
  var t = e.data.contexts[e.WEBGL];
  t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
}
function cm(e) {
  var t = function(n) {
    n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, e.canvasWidth, e.canvasHeight), n.restore();
  };
  t(e.data.contexts[e.NODE]), t(e.data.contexts[e.DRAG]);
}
function dm(e) {
  var t = e.canvasWidth, n = e.canvasHeight, r = ys(e), a = r.pan, i = r.zoom, o = xo();
  va(o, o, [a.x, a.y]), Yo(o, o, [i, i]);
  var u = xo();
  Zy(u, t, n);
  var l = xo();
  return Ky(l, u, o), l;
}
function Bd(e, t) {
  var n = e.canvasWidth, r = e.canvasHeight, a = ys(e), i = a.pan, o = a.zoom;
  t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, n, r), t.translate(i.x, i.y), t.scale(o, o);
}
function hm(e, t) {
  e.drawSelectionRectangle(t, function(n) {
    return Bd(e, n);
  });
}
function fm(e) {
  var t = e.data.contexts[e.NODE];
  t.save(), Bd(e, t), t.strokeStyle = "rgba(0, 0, 0, 0.3)", t.beginPath(), t.moveTo(-1e3, 0), t.lineTo(1e3, 0), t.stroke(), t.beginPath(), t.moveTo(0, -1e3), t.lineTo(0, 1e3), t.stroke(), t.restore();
}
function pm(e) {
  var t = function(r, a, i) {
    for (var o = r.atlasManager.getAtlasCollection(a), u = e.data.contexts[e.NODE], l = o.atlases, s = 0; s < l.length; s++) {
      var c = l[s], d = c.canvas;
      if (d) {
        var h = d.width, f = d.height, p = h * s, g = d.height * i, m = 0.4;
        u.save(), u.scale(m, m), u.drawImage(d, p, g), u.strokeStyle = "black", u.rect(p, g, h, f), u.stroke(), u.restore();
      }
    }
  }, n = 0;
  t(e.drawing, "node", n++), t(e.drawing, "label", n++);
}
function vm(e, t, n, r, a) {
  var i, o, u, l, s = ys(e), c = s.pan, d = s.zoom;
  {
    var h = Fy(e, c, d, t, n), f = Je(h, 2), p = f[0], g = f[1], m = 6;
    i = p - m / 2, o = g - m / 2, u = m, l = m;
  }
  if (u === 0 || l === 0)
    return [];
  var v = e.data.contexts[e.WEBGL];
  v.bindFramebuffer(v.FRAMEBUFFER, e.pickingFrameBuffer), e.pickingFrameBuffer.needsDraw && (v.viewport(0, 0, v.canvas.width, v.canvas.height), Dd(e, null, xr.PICKING), e.pickingFrameBuffer.needsDraw = false);
  var y = u * l, b = new Uint8Array(y * 4);
  v.readPixels(i, o, u, l, v.RGBA, v.UNSIGNED_BYTE, b), v.bindFramebuffer(v.FRAMEBUFFER, null);
  for (var w = /* @__PURE__ */ new Set(), T = 0; T < y; T++) {
    var S = b.slice(T * 4, T * 4 + 4), x = Yy(S) - 1;
    x >= 0 && w.add(x);
  }
  return w;
}
function gm(e, t, n) {
  var r = vm(e, t, n), a = e.getCachedZSortedEles(), i, o, u = Pt(r), l;
  try {
    for (u.s(); !(l = u.n()).done; ) {
      var s = l.value, c = a[s];
      if (!i && c.isNode() && (i = c), !o && c.isEdge() && (o = c), i && o)
        break;
    }
  } catch (d) {
    u.e(d);
  } finally {
    u.f();
  }
  return [i, o].filter(Boolean);
}
function Po(e, t, n) {
  var r = e.drawing;
  t += 1, n.isNode() ? (r.drawNode(n, t, "node-underlay"), r.drawNode(n, t, "node-body"), r.drawTexture(n, t, "label"), r.drawNode(n, t, "node-overlay")) : (r.drawEdgeLine(n, t), r.drawEdgeArrow(n, t, "source"), r.drawEdgeArrow(n, t, "target"), r.drawTexture(n, t, "label"), r.drawTexture(n, t, "edge-source-label"), r.drawTexture(n, t, "edge-target-label"));
}
function Dd(e, t, n) {
  var r;
  e.webglDebug && (r = performance.now());
  var a = e.drawing, i = 0;
  if (n.screen && e.data.canvasNeedsRedraw[e.SELECT_BOX] && hm(e, t), e.data.canvasNeedsRedraw[e.NODE] || n.picking) {
    var o = e.data.contexts[e.WEBGL];
    n.screen ? (o.clearColor(0, 0, 0, 0), o.enable(o.BLEND), o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA)) : o.disable(o.BLEND), o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT), o.viewport(0, 0, o.canvas.width, o.canvas.height);
    var u = dm(e), l = e.getCachedZSortedEles();
    if (i = l.length, a.startFrame(u, n), n.screen) {
      for (var s = 0; s < l.nondrag.length; s++)
        Po(e, s, l.nondrag[s]);
      for (var c = 0; c < l.drag.length; c++)
        Po(e, c, l.drag[c]);
    } else if (n.picking)
      for (var d = 0; d < l.length; d++)
        Po(e, d, l[d]);
    a.endFrame(), n.screen && e.webglDebugShowAtlases && (fm(e), pm(e)), e.data.canvasNeedsRedraw[e.NODE] = false, e.data.canvasNeedsRedraw[e.DRAG] = false;
  }
  if (e.webglDebug) {
    var h = performance.now(), f = false, p = Math.ceil(h - r), g = a.getDebugInfo(), m = ["".concat(i, " elements"), "".concat(g.totalInstances, " instances"), "".concat(g.batchCount, " batches"), "".concat(g.totalAtlases, " atlases"), "".concat(g.wrappedCount, " wrapped textures"), "".concat(g.simpleCount, " simple shapes")].join(", ");
    if (f)
      console.log("WebGL (".concat(n.name, ") - time ").concat(p, "ms, ").concat(m));
    else {
      console.log("WebGL (".concat(n.name, ") - frame time ").concat(p, "ms")), console.log("Totals:"), console.log("  ".concat(m)), console.log("Texture Atlases Used:");
      var v = g.atlasInfo, y = Pt(v), b;
      try {
        for (y.s(); !(b = y.n()).done; ) {
          var w = b.value;
          console.log("  ".concat(w.type, ": ").concat(w.keyCount, " keys, ").concat(w.atlasCount, " atlases"));
        }
      } catch (T) {
        y.e(T);
      } finally {
        y.f();
      }
      console.log("");
    }
  }
  e.data.gc && (console.log("Garbage Collect!"), e.data.gc = false, a.gc());
}
var gn = {};
gn.drawPolygonPath = function(e, t, n, r, a, i) {
  var o = r / 2, u = a / 2;
  e.beginPath && e.beginPath(), e.moveTo(t + o * i[0], n + u * i[1]);
  for (var l = 1; l < i.length / 2; l++)
    e.lineTo(t + o * i[l * 2], n + u * i[l * 2 + 1]);
  e.closePath();
};
gn.drawRoundPolygonPath = function(e, t, n, r, a, i, o) {
  o.forEach(function(u) {
    return dd(e, u);
  }), e.closePath();
};
gn.drawRoundRectanglePath = function(e, t, n, r, a, i) {
  var o = r / 2, u = a / 2, l = i === "auto" ? ln(r, a) : Math.min(i, u, o);
  e.beginPath && e.beginPath(), e.moveTo(t, n - u), e.arcTo(t + o, n - u, t + o, n, l), e.arcTo(t + o, n + u, t, n + u, l), e.arcTo(t - o, n + u, t - o, n, l), e.arcTo(t - o, n - u, t, n - u, l), e.lineTo(t, n - u), e.closePath();
};
gn.drawBottomRoundRectanglePath = function(e, t, n, r, a, i) {
  var o = r / 2, u = a / 2, l = i === "auto" ? ln(r, a) : i;
  e.beginPath && e.beginPath(), e.moveTo(t, n - u), e.lineTo(t + o, n - u), e.lineTo(t + o, n), e.arcTo(t + o, n + u, t, n + u, l), e.arcTo(t - o, n + u, t - o, n, l), e.lineTo(t - o, n - u), e.lineTo(t, n - u), e.closePath();
};
gn.drawCutRectanglePath = function(e, t, n, r, a, i, o) {
  var u = r / 2, l = a / 2, s = o === "auto" ? rs() : o;
  e.beginPath && e.beginPath(), e.moveTo(t - u + s, n - l), e.lineTo(t + u - s, n - l), e.lineTo(t + u, n - l + s), e.lineTo(t + u, n + l - s), e.lineTo(t + u - s, n + l), e.lineTo(t - u + s, n + l), e.lineTo(t - u, n + l - s), e.lineTo(t - u, n - l + s), e.closePath();
};
gn.drawBarrelPath = function(e, t, n, r, a) {
  var i = r / 2, o = a / 2, u = t - i, l = t + i, s = n - o, c = n + o, d = Bo(r, a), h = d.widthOffset, f = d.heightOffset, p = d.ctrlPtOffsetPct * h;
  e.beginPath && e.beginPath(), e.moveTo(u, s + f), e.lineTo(u, c - f), e.quadraticCurveTo(u + p, c, u + h, c), e.lineTo(l - h, c), e.quadraticCurveTo(l - p, c, l, c - f), e.lineTo(l, s + f), e.quadraticCurveTo(l - p, s, l - h, s), e.lineTo(u + h, s), e.quadraticCurveTo(u + p, s, u, s + f), e.closePath();
};
var Wu = Math.sin(0);
var Gu = Math.cos(0);
var qo = {};
var Uo = {};
var Md = Math.PI / 40;
for (Fn = 0 * Math.PI; Fn < 2 * Math.PI; Fn += Md)
  qo[Fn] = Math.sin(Fn), Uo[Fn] = Math.cos(Fn);
var Fn;
gn.drawEllipsePath = function(e, t, n, r, a) {
  if (e.beginPath && e.beginPath(), e.ellipse)
    e.ellipse(t, n, r / 2, a / 2, 0, 0, 2 * Math.PI);
  else
    for (var i, o, u = r / 2, l = a / 2, s = 0 * Math.PI; s < 2 * Math.PI; s += Md)
      i = t - u * qo[s] * Wu + u * Uo[s] * Gu, o = n + l * Uo[s] * Wu + l * qo[s] * Gu, s === 0 ? e.moveTo(i, o) : e.lineTo(i, o);
  e.closePath();
};
var Xr = {};
Xr.createBuffer = function(e, t) {
  var n = document.createElement("canvas");
  return n.width = e, n.height = t, [n, n.getContext("2d")];
};
Xr.bufferCanvasImage = function(e) {
  var t = this.cy, n = t.mutableElements(), r = n.boundingBox(), a = this.findContainerClientCoords(), i = e.full ? Math.ceil(r.w) : a[2], o = e.full ? Math.ceil(r.h) : a[3], u = ee(e.maxWidth) || ee(e.maxHeight), l = this.getPixelRatio(), s = 1;
  if (e.scale !== void 0)
    i *= e.scale, o *= e.scale, s = e.scale;
  else if (u) {
    var c = 1 / 0, d = 1 / 0;
    ee(e.maxWidth) && (c = s * e.maxWidth / i), ee(e.maxHeight) && (d = s * e.maxHeight / o), s = Math.min(c, d), i *= s, o *= s;
  }
  u || (i *= l, o *= l, s *= l);
  var h = document.createElement("canvas");
  h.width = i, h.height = o, h.style.width = i + "px", h.style.height = o + "px";
  var f = h.getContext("2d");
  if (i > 0 && o > 0) {
    f.clearRect(0, 0, i, o), f.globalCompositeOperation = "source-over";
    var p = this.getCachedZSortedEles();
    if (e.full)
      f.translate(-r.x1 * s, -r.y1 * s), f.scale(s, s), this.drawElements(f, p), f.scale(1 / s, 1 / s), f.translate(r.x1 * s, r.y1 * s);
    else {
      var g = t.pan(), m = {
        x: g.x * s,
        y: g.y * s
      };
      s *= t.zoom(), f.translate(m.x, m.y), f.scale(s, s), this.drawElements(f, p), f.scale(1 / s, 1 / s), f.translate(-m.x, -m.y);
    }
    e.bg && (f.globalCompositeOperation = "destination-over", f.fillStyle = e.bg, f.rect(0, 0, i, o), f.fill());
  }
  return h;
};
function ym(e, t) {
  for (var n = atob(e), r = new ArrayBuffer(n.length), a = new Uint8Array(r), i = 0; i < n.length; i++)
    a[i] = n.charCodeAt(i);
  return new Blob([r], {
    type: t
  });
}
function Hu(e) {
  var t = e.indexOf(",");
  return e.substr(t + 1);
}
function Ad(e, t, n) {
  var r = function() {
    return t.toDataURL(n, e.quality);
  };
  switch (e.output) {
    case "blob-promise":
      return new tr(function(a, i) {
        try {
          t.toBlob(function(o) {
            o != null ? a(o) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, n, e.quality);
        } catch (o) {
          i(o);
        }
      });
    case "blob":
      return ym(Hu(r()), n);
    case "base64":
      return Hu(r());
    case "base64uri":
    default:
      return r();
  }
}
Xr.png = function(e) {
  return Ad(e, this.bufferCanvasImage(e), "image/png");
};
Xr.jpg = function(e) {
  return Ad(e, this.bufferCanvasImage(e), "image/jpeg");
};
var Rd = {};
Rd.nodeShapeImpl = function(e, t, n, r, a, i, o, u) {
  switch (e) {
    case "ellipse":
      return this.drawEllipsePath(t, n, r, a, i);
    case "polygon":
      return this.drawPolygonPath(t, n, r, a, i, o);
    case "round-polygon":
      return this.drawRoundPolygonPath(t, n, r, a, i, o, u);
    case "roundrectangle":
    case "round-rectangle":
      return this.drawRoundRectanglePath(t, n, r, a, i, u);
    case "cutrectangle":
    case "cut-rectangle":
      return this.drawCutRectanglePath(t, n, r, a, i, o, u);
    case "bottomroundrectangle":
    case "bottom-round-rectangle":
      return this.drawBottomRoundRectanglePath(t, n, r, a, i, u);
    case "barrel":
      return this.drawBarrelPath(t, n, r, a, i);
  }
};
var mm = Id;
var Ee = Id.prototype;
Ee.CANVAS_LAYERS = 3;
Ee.SELECT_BOX = 0;
Ee.DRAG = 1;
Ee.NODE = 2;
Ee.WEBGL = 3;
Ee.CANVAS_TYPES = ["2d", "2d", "2d", "webgl2"];
Ee.BUFFER_COUNT = 3;
Ee.TEXTURE_BUFFER = 0;
Ee.MOTIONBLUR_BUFFER_NODE = 1;
Ee.MOTIONBLUR_BUFFER_DRAG = 2;
function Id(e) {
  var t = this, n = t.cy.window(), r = n.document;
  e.webgl && (Ee.CANVAS_LAYERS = t.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), t.data = {
    canvases: new Array(Ee.CANVAS_LAYERS),
    contexts: new Array(Ee.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(Ee.CANVAS_LAYERS),
    bufferCanvases: new Array(Ee.BUFFER_COUNT),
    bufferContexts: new Array(Ee.CANVAS_LAYERS)
  };
  var a = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
  t.data.canvasContainer = r.createElement("div");
  var o = t.data.canvasContainer.style;
  t.data.canvasContainer.style[a] = i, o.position = "relative", o.zIndex = "0", o.overflow = "hidden";
  var u = e.cy.container();
  u.appendChild(t.data.canvasContainer), u.style[a] = i;
  var l = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  hh() && (l["-ms-touch-action"] = "none", l["touch-action"] = "none");
  for (var s = 0; s < Ee.CANVAS_LAYERS; s++) {
    var c = t.data.canvases[s] = r.createElement("canvas"), d = Ee.CANVAS_TYPES[s];
    t.data.contexts[s] = c.getContext(d), t.data.contexts[s] || Ye("Could not create canvas of type " + d), Object.keys(l).forEach(function(z) {
      c.style[z] = l[z];
    }), c.style.position = "absolute", c.setAttribute("data-id", "layer" + s), c.style.zIndex = String(Ee.CANVAS_LAYERS - s), t.data.canvasContainer.appendChild(c), t.data.canvasNeedsRedraw[s] = false;
  }
  t.data.topCanvas = t.data.canvases[0], t.data.canvases[Ee.NODE].setAttribute("data-id", "layer" + Ee.NODE + "-node"), t.data.canvases[Ee.SELECT_BOX].setAttribute("data-id", "layer" + Ee.SELECT_BOX + "-selectbox"), t.data.canvases[Ee.DRAG].setAttribute("data-id", "layer" + Ee.DRAG + "-drag"), t.data.canvases[Ee.WEBGL] && t.data.canvases[Ee.WEBGL].setAttribute("data-id", "layer" + Ee.WEBGL + "-webgl");
  for (var s = 0; s < Ee.BUFFER_COUNT; s++)
    t.data.bufferCanvases[s] = r.createElement("canvas"), t.data.bufferContexts[s] = t.data.bufferCanvases[s].getContext("2d"), t.data.bufferCanvases[s].style.position = "absolute", t.data.bufferCanvases[s].setAttribute("data-id", "buffer" + s), t.data.bufferCanvases[s].style.zIndex = String(-s - 1), t.data.bufferCanvases[s].style.visibility = "hidden";
  t.pathsEnabled = true;
  var h = bt(), f = function(z) {
    return {
      x: (z.x1 + z.x2) / 2,
      y: (z.y1 + z.y2) / 2
    };
  }, p = function(z) {
    return {
      x: -z.w / 2,
      y: -z.h / 2
    };
  }, g = function(z) {
    var O = z[0]._private, j = O.oldBackgroundTimestamp === O.backgroundTimestamp;
    return !j;
  }, m = function(z) {
    return z[0]._private.nodeKey;
  }, v = function(z) {
    return z[0]._private.labelStyleKey;
  }, y = function(z) {
    return z[0]._private.sourceLabelStyleKey;
  }, b = function(z) {
    return z[0]._private.targetLabelStyleKey;
  }, w = function(z, O, j, H, ne) {
    return t.drawElement(z, O, j, false, false, ne);
  }, T = function(z, O, j, H, ne) {
    return t.drawElementText(z, O, j, H, "main", ne);
  }, S = function(z, O, j, H, ne) {
    return t.drawElementText(z, O, j, H, "source", ne);
  }, x = function(z, O, j, H, ne) {
    return t.drawElementText(z, O, j, H, "target", ne);
  }, _ = function(z) {
    return z.boundingBox(), z[0]._private.bodyBounds;
  }, P = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.main || h;
  }, B = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.source || h;
  }, k = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.target || h;
  }, C = function(z, O) {
    return O;
  }, M = function(z) {
    return f(_(z));
  }, D = function(z, O, j) {
    var H = z ? z + "-" : "";
    return {
      x: O.x + j.pstyle(H + "text-margin-x").pfValue,
      y: O.y + j.pstyle(H + "text-margin-y").pfValue
    };
  }, N = function(z, O, j) {
    var H = z[0]._private.rscratch;
    return {
      x: H[O],
      y: H[j]
    };
  }, A = function(z) {
    return D("", N(z, "labelX", "labelY"), z);
  }, L = function(z) {
    return D("source", N(z, "sourceLabelX", "sourceLabelY"), z);
  }, R = function(z) {
    return D("target", N(z, "targetLabelX", "targetLabelY"), z);
  }, I = function(z) {
    return p(_(z));
  }, X = function(z) {
    return p(B(z));
  }, V = function(z) {
    return p(k(z));
  }, Y = function(z) {
    var O = P(z), j = p(P(z));
    if (z.isNode()) {
      switch (z.pstyle("text-halign").value) {
        case "left":
          j.x = -O.w - (O.leftPad || 0);
          break;
        case "right":
          j.x = -(O.rightPad || 0);
          break;
      }
      switch (z.pstyle("text-valign").value) {
        case "top":
          j.y = -O.h - (O.topPad || 0);
          break;
        case "bottom":
          j.y = -(O.botPad || 0);
          break;
      }
    }
    return j;
  }, W = t.data.eleTxrCache = new yr(t, {
    getKey: m,
    doesEleInvalidateKey: g,
    drawElement: w,
    getBoundingBox: _,
    getRotationPoint: M,
    getRotationOffset: I,
    allowEdgeTxrCaching: false,
    allowParentTxrCaching: false
  }), Q = t.data.lblTxrCache = new yr(t, {
    getKey: v,
    drawElement: T,
    getBoundingBox: P,
    getRotationPoint: A,
    getRotationOffset: Y,
    isVisible: C
  }), J = t.data.slbTxrCache = new yr(t, {
    getKey: y,
    drawElement: S,
    getBoundingBox: B,
    getRotationPoint: L,
    getRotationOffset: X,
    isVisible: C
  }), Z = t.data.tlbTxrCache = new yr(t, {
    getKey: b,
    drawElement: x,
    getBoundingBox: k,
    getRotationPoint: R,
    getRotationOffset: V,
    isVisible: C
  }), $ = t.data.lyrTxrCache = new wd(t);
  t.onUpdateEleCalcs(function(z, O) {
    W.invalidateElements(O), Q.invalidateElements(O), J.invalidateElements(O), Z.invalidateElements(O), $.invalidateElements(O);
    for (var j = 0; j < O.length; j++) {
      var H = O[j]._private;
      H.oldBackgroundTimestamp = H.backgroundTimestamp;
    }
  });
  var te = function(z) {
    for (var O = 0; O < z.length; O++)
      $.enqueueElementRefinement(z[O].ele);
  };
  W.onDequeue(te), Q.onDequeue(te), J.onDequeue(te), Z.onDequeue(te), e.webgl && t.initWebgl(e, {
    getStyleKey: m,
    getLabelKey: v,
    getSourceLabelKey: y,
    getTargetLabelKey: b,
    drawElement: w,
    drawLabel: T,
    drawSourceLabel: S,
    drawTargetLabel: x,
    getElementBox: _,
    getLabelBox: P,
    getSourceLabelBox: B,
    getTargetLabelBox: k,
    getElementRotationPoint: M,
    getElementRotationOffset: I,
    getLabelRotationPoint: A,
    getSourceLabelRotationPoint: L,
    getTargetLabelRotationPoint: R,
    getLabelRotationOffset: Y,
    getSourceLabelRotationOffset: X,
    getTargetLabelRotationOffset: V
  });
}
Ee.redrawHint = function(e, t) {
  var n = this;
  switch (e) {
    case "eles":
      n.data.canvasNeedsRedraw[Ee.NODE] = t;
      break;
    case "drag":
      n.data.canvasNeedsRedraw[Ee.DRAG] = t;
      break;
    case "select":
      n.data.canvasNeedsRedraw[Ee.SELECT_BOX] = t;
      break;
    case "gc":
      n.data.gc = true;
      break;
  }
};
var bm = typeof Path2D < "u";
Ee.path2dEnabled = function(e) {
  if (e === void 0)
    return this.pathsEnabled;
  this.pathsEnabled = !!e;
};
Ee.usePaths = function() {
  return bm && this.pathsEnabled;
};
Ee.setImgSmoothing = function(e, t) {
  e.imageSmoothingEnabled != null ? e.imageSmoothingEnabled = t : (e.webkitImageSmoothingEnabled = t, e.mozImageSmoothingEnabled = t, e.msImageSmoothingEnabled = t);
};
Ee.getImgSmoothing = function(e) {
  return e.imageSmoothingEnabled != null ? e.imageSmoothingEnabled : e.webkitImageSmoothingEnabled || e.mozImageSmoothingEnabled || e.msImageSmoothingEnabled;
};
Ee.makeOffscreenCanvas = function(e, t) {
  var n;
  if ((typeof OffscreenCanvas > "u" ? "undefined" : tt(OffscreenCanvas)) !== "undefined")
    n = new OffscreenCanvas(e, t);
  else {
    var r = this.cy.window(), a = r.document;
    n = a.createElement("canvas"), n.width = e, n.height = t;
  }
  return n;
};
[Ed, Yt, Zt, gs, Mn, vn, xt, kd, gn, Xr, Rd].forEach(function(e) {
  ve(Ee, e);
});
var xm = [{
  name: "null",
  impl: ld
}, {
  name: "base",
  impl: md
}, {
  name: "canvas",
  impl: mm
}];
var wm = [{
  type: "layout",
  extensions: Gg
}, {
  type: "renderer",
  extensions: xm
}];
var Nd = {};
var Ld = {};
function zd(e, t, n) {
  var r = n, a = function(x) {
    Ae("Can not register `" + t + "` for `" + e + "` since `" + x + "` already exists in the prototype and can not be overridden");
  };
  if (e === "core") {
    if (Br.prototype[t])
      return a(t);
    Br.prototype[t] = n;
  } else if (e === "collection") {
    if (ut.prototype[t])
      return a(t);
    ut.prototype[t] = n;
  } else if (e === "layout") {
    for (var i = function(x) {
      this.options = x, n.call(this, x), _e(this._private) || (this._private = {}), this._private.cy = x.cy, this._private.listeners = [], this.createEmitter();
    }, o = i.prototype = Object.create(n.prototype), u = [], l = 0; l < u.length; l++) {
      var s = u[l];
      o[s] = o[s] || function() {
        return this;
      };
    }
    o.start && !o.run ? o.run = function() {
      return this.start(), this;
    } : !o.start && o.run && (o.start = function() {
      return this.run(), this;
    });
    var c = n.prototype.stop;
    o.stop = function() {
      var x = this.options;
      if (x && x.animate) {
        var _ = this.animations;
        if (_)
          for (var P = 0; P < _.length; P++)
            _[P].stop();
      }
      return c ? c.call(this) : this.emit("layoutstop"), this;
    }, o.destroy || (o.destroy = function() {
      return this;
    }), o.cy = function() {
      return this._private.cy;
    };
    var d = function(x) {
      return x._private.cy;
    }, h = {
      addEventFields: function(x, _) {
        _.layout = x, _.cy = d(x), _.target = x;
      },
      bubble: function() {
        return true;
      },
      parent: function(x) {
        return d(x);
      }
    };
    ve(o, {
      createEmitter: function() {
        return this._private.emitter = new Fa(h, this), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(x, _) {
        return this.emitter().on(x, _), this;
      },
      one: function(x, _) {
        return this.emitter().one(x, _), this;
      },
      once: function(x, _) {
        return this.emitter().one(x, _), this;
      },
      removeListener: function(x, _) {
        return this.emitter().removeListener(x, _), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      emit: function(x, _) {
        return this.emitter().emit(x, _), this;
      }
    }), Me.eventAliasesOn(o), r = i;
  } else if (e === "renderer" && t !== "null" && t !== "base") {
    var f = Od("renderer", "base"), p = f.prototype, g = n, m = n.prototype, v = function() {
      f.apply(this, arguments), g.apply(this, arguments);
    }, y = v.prototype;
    for (var b in p) {
      var w = p[b], T = m[b] != null;
      if (T)
        return a(b);
      y[b] = w;
    }
    for (var S in m)
      y[S] = m[S];
    p.clientFunctions.forEach(function(x) {
      y[x] = y[x] || function() {
        Ye("Renderer does not implement `renderer." + x + "()` on its prototype");
      };
    }), r = v;
  } else if (e === "__proto__" || e === "constructor" || e === "prototype")
    return Ye(e + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return rc({
    map: Nd,
    keys: [e, t],
    value: r
  });
}
function Od(e, t) {
  return ac({
    map: Nd,
    keys: [e, t]
  });
}
function Em(e, t, n, r, a) {
  return rc({
    map: Ld,
    keys: [e, t, n, r],
    value: a
  });
}
function Tm(e, t, n, r) {
  return ac({
    map: Ld,
    keys: [e, t, n, r]
  });
}
var Wo = function() {
  if (arguments.length === 2)
    return Od.apply(null, arguments);
  if (arguments.length === 3)
    return zd.apply(null, arguments);
  if (arguments.length === 4)
    return Tm.apply(null, arguments);
  if (arguments.length === 5)
    return Em.apply(null, arguments);
  Ye("Invalid extension access syntax");
};
Br.prototype.extension = Wo;
wm.forEach(function(e) {
  e.extensions.forEach(function(t) {
    zd(e.type, t.name, t.impl);
  });
});
var Ba = function() {
  if (!(this instanceof Ba))
    return new Ba();
  this.length = 0;
};
var Bn = Ba.prototype;
Bn.instanceString = function() {
  return "stylesheet";
};
Bn.selector = function(e) {
  var t = this.length++;
  return this[t] = {
    selector: e,
    properties: []
  }, this;
};
Bn.css = function(e, t) {
  var n = this.length - 1;
  if (fe(e))
    this[n].properties.push({
      name: e,
      value: t
    });
  else if (_e(e))
    for (var r = e, a = Object.keys(r), i = 0; i < a.length; i++) {
      var o = a[i], u = r[o];
      if (u != null) {
        var l = it.properties[o] || it.properties[Da(o)];
        if (l != null) {
          var s = l.name, c = u;
          this[n].properties.push({
            name: s,
            value: c
          });
        }
      }
    }
  return this;
};
Bn.style = Bn.css;
Bn.generateStyle = function(e) {
  var t = new it(e);
  return this.appendToStyle(t);
};
Bn.appendToStyle = function(e) {
  for (var t = 0; t < this.length; t++) {
    var n = this[t], r = n.selector, a = n.properties;
    e.selector(r);
    for (var i = 0; i < a.length; i++) {
      var o = a[i];
      e.css(o.name, o.value);
    }
  }
  return e;
};
var Cm = "3.32.1";
var Jn = function(e) {
  if (e === void 0 && (e = {}), _e(e))
    return new Br(e);
  if (fe(e))
    return Wo.apply(Wo, arguments);
};
Jn.use = function(e) {
  var t = Array.prototype.slice.call(arguments, 1);
  return t.unshift(Jn), e.apply(null, t), this;
};
Jn.warnings = function(e) {
  return dc(e);
};
Jn.version = Cm;
Jn.stylesheet = Jn.Stylesheet = Ba;

export {
  Jn
};
/*! Bundled license information:

vitepress-plugin-legend/dist/cytoscape.esm-wWJwD64P-C103aMMl.js:
  (*!
  Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
  Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
  Licensed under The MIT License (http://opensource.org/licenses/MIT)
  *)
  (*!
  Event object based on jQuery events, MIT license
  
  https://jquery.org/license/
  https://tldrlegal.com/license/mit-license
  https://github.com/jquery/jquery/blob/master/src/event.js
  *)
  (*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License *)
  (*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License *)
*/
//# sourceMappingURL=chunk-DUWBSR3N.js.map
