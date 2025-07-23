import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/katex-CUSbq6rG-DCyV1FlS.js
var l0 = class _l0 {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, r, a) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = r, this.end = a;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, r) {
    return r ? !e || !e.loc || !r.loc || e.loc.lexer !== r.loc.lexer ? null : new _l0(e.loc.lexer, e.loc.start, r.loc.end) : e && e.loc;
  }
};
var p0 = class _p0 {
  // don't expand the token
  // used in \noexpand
  constructor(e, r) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = r;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, r) {
    return new _p0(r, l0.range(this, e));
  }
};
var M = class _M {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, r) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var a = "KaTeX parse error: " + e, i, s, h = r && r.loc;
    if (h && h.start <= h.end) {
      var u = h.lexer.input;
      i = h.start, s = h.end, i === u.length ? a += " at end of input: " : a += " at position " + (i + 1) + ": ";
      var c = u.slice(i, s).replace(/[^]/g, "$&̲"), g;
      i > 15 ? g = "…" + u.slice(i - 15, i) : g = u.slice(0, i);
      var v;
      s + 15 < u.length ? v = u.slice(s, s + 15) + "…" : v = u.slice(s), a += g + c + v;
    }
    var y = new Error(a);
    return y.name = "ParseError", y.__proto__ = _M.prototype, y.position = i, i != null && s != null && (y.length = s - i), y.rawMessage = e, y;
  }
};
M.prototype.__proto__ = Error.prototype;
var p1 = function(t5, e) {
  return t5.indexOf(e) !== -1;
};
var d1 = function(t5, e) {
  return t5 === void 0 ? e : t5;
};
var g1 = /([A-Z])/g;
var f1 = function(t5) {
  return t5.replace(g1, "-$1").toLowerCase();
};
var v1 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
};
var b1 = /[&><"']/g;
function y1(t5) {
  return String(t5).replace(b1, (e) => v1[e]);
}
var gr = function t(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? t(e.body[0]) : e : e.type === "font" ? t(e.body) : e;
};
var x1 = function(t5) {
  var e = gr(t5);
  return e.type === "mathord" || e.type === "textord" || e.type === "atom";
};
var w1 = function(t5) {
  if (!t5)
    throw new Error("Expected non-null, but got " + String(t5));
  return t5;
};
var k1 = function(t5) {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t5);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
};
var I = {
  contains: p1,
  deflt: d1,
  escape: y1,
  hyphenate: f1,
  getBaseElem: gr,
  isCharacterBox: x1,
  protocolFromUrl: k1
};
var Me = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: true,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (t5) => "#" + t5
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (t5, e) => (e.push(t5), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (t5) => Math.max(0, t5),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: false
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (t5) => Math.max(0, t5),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (t5) => Math.max(0, t5),
    cli: "-e, --max-expand <n>",
    cliProcessor: (t5) => t5 === "Infinity" ? 1 / 0 : parseInt(t5)
  },
  globalGroup: {
    type: "boolean",
    cli: false
  }
};
function S1(t5) {
  if (t5.default)
    return t5.default;
  var e = t5.type, r = Array.isArray(e) ? e[0] : e;
  if (typeof r != "string")
    return r.enum[0];
  switch (r) {
    case "boolean":
      return false;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
var ct = class {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var r in Me)
      if (Me.hasOwnProperty(r)) {
        var a = Me[r];
        this[r] = e[r] !== void 0 ? a.processor ? a.processor(e[r]) : e[r] : S1(a);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, r, a) {
    var i = this.strict;
    if (typeof i == "function" && (i = i(e, r, a)), !(!i || i === "ignore")) {
      if (i === true || i === "error")
        throw new M("LaTeX-incompatible input and strict mode is set to 'error': " + (r + " [" + e + "]"), a);
      i === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + r + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, r, a) {
    var i = this.strict;
    if (typeof i == "function")
      try {
        i = i(e, r, a);
      } catch {
        i = "error";
      }
    return !i || i === "ignore" ? false : i === true || i === "error" ? true : i === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + r + " [" + e + "]")), false);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var r = I.protocolFromUrl(e.url);
      if (r == null)
        return false;
      e.protocol = r;
    }
    var a = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!a;
  }
};
var E0 = class {
  constructor(e, r, a) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = r, this.cramped = a;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return b0[M1[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return b0[z1[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return b0[A1[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return b0[T1[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return b0[B1[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return b0[q1[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
};
var pt = 0;
var Ae = 1;
var J0 = 2;
var T0 = 3;
var se = 4;
var c0 = 5;
var ee = 6;
var a0 = 7;
var b0 = [new E0(pt, 0, false), new E0(Ae, 0, true), new E0(J0, 1, false), new E0(T0, 1, true), new E0(se, 2, false), new E0(c0, 2, true), new E0(ee, 3, false), new E0(a0, 3, true)];
var M1 = [se, c0, se, c0, ee, a0, ee, a0];
var z1 = [c0, c0, c0, c0, a0, a0, a0, a0];
var A1 = [J0, T0, se, c0, ee, a0, ee, a0];
var T1 = [T0, T0, c0, c0, a0, a0, a0, a0];
var B1 = [Ae, Ae, T0, T0, c0, c0, a0, a0];
var q1 = [pt, Ae, J0, T0, J0, T0, J0, T0];
var O = {
  DISPLAY: b0[pt],
  TEXT: b0[J0],
  SCRIPT: b0[se],
  SCRIPTSCRIPT: b0[ee]
};
var at = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function C1(t5) {
  for (var e = 0; e < at.length; e++)
    for (var r = at[e], a = 0; a < r.blocks.length; a++) {
      var i = r.blocks[a];
      if (t5 >= i[0] && t5 <= i[1])
        return r.name;
    }
  return null;
}
var ze = [];
at.forEach((t5) => t5.blocks.forEach((e) => ze.push(...e)));
function fr(t5) {
  for (var e = 0; e < ze.length; e += 2)
    if (t5 >= ze[e] && t5 <= ze[e + 1])
      return true;
  return false;
}
var Q0 = 80;
var N1 = function(t5, e) {
  return "M95," + (622 + t5 + e) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + t5 / 2.075 + " -" + t5 + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + t5) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + t5) + " " + e + "h400000v" + (40 + t5) + "h-400000z";
};
var I1 = function(t5, e) {
  return "M263," + (601 + t5 + e) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + t5 / 2.084 + " -" + t5 + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + t5) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + t5) + " " + e + "h400000v" + (40 + t5) + "h-400000z";
};
var R1 = function(t5, e) {
  return "M983 " + (10 + t5 + e) + `
l` + t5 / 3.13 + " -" + t5 + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + t5) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + t5) + " " + e + "h400000v" + (40 + t5) + "h-400000z";
};
var H1 = function(t5, e) {
  return "M424," + (2398 + t5 + e) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + t5 / 4.223 + " -" + t5 + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + t5) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + t5) + " " + e + `
h400000v` + (40 + t5) + "h-400000z";
};
var O1 = function(t5, e) {
  return "M473," + (2713 + t5 + e) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + t5 / 5.298 + " -" + t5 + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + t5) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + t5) + " " + e + "h400000v" + (40 + t5) + "H1017.7z";
};
var E1 = function(t5) {
  var e = t5 / 2;
  return "M400000 " + t5 + " H0 L" + e + " 0 l65 45 L145 " + (t5 - 80) + " H400000z";
};
var D1 = function(t5, e, r) {
  var a = r - 54 - e - t5;
  return "M702 " + (t5 + e) + "H400000" + (40 + t5) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + e + "H400000v" + (40 + t5) + "H742z";
};
var L1 = function(t5, e, r) {
  e = 1e3 * e;
  var a = "";
  switch (t5) {
    case "sqrtMain":
      a = N1(e, Q0);
      break;
    case "sqrtSize1":
      a = I1(e, Q0);
      break;
    case "sqrtSize2":
      a = R1(e, Q0);
      break;
    case "sqrtSize3":
      a = H1(e, Q0);
      break;
    case "sqrtSize4":
      a = O1(e, Q0);
      break;
    case "sqrtTall":
      a = D1(e, Q0, r);
  }
  return a;
};
var V1 = function(t5, e) {
  switch (t5) {
    case "⎜":
      return "M291 0 H417 V" + e + " H291z M291 0 H417 V" + e + " H291z";
    case "∣":
      return "M145 0 H188 V" + e + " H145z M145 0 H188 V" + e + " H145z";
    case "∥":
      return "M145 0 H188 V" + e + " H145z M145 0 H188 V" + e + " H145z" + ("M367 0 H410 V" + e + " H367z M367 0 H410 V" + e + " H367z");
    case "⎟":
      return "M457 0 H583 V" + e + " H457z M457 0 H583 V" + e + " H457z";
    case "⎢":
      return "M319 0 H403 V" + e + " H319z M319 0 H403 V" + e + " H319z";
    case "⎥":
      return "M263 0 H347 V" + e + " H263z M263 0 H347 V" + e + " H263z";
    case "⎪":
      return "M384 0 H504 V" + e + " H384z M384 0 H504 V" + e + " H384z";
    case "⏐":
      return "M312 0 H355 V" + e + " H312z M312 0 H355 V" + e + " H312z";
    case "‖":
      return "M257 0 H300 V" + e + " H257z M257 0 H300 V" + e + " H257z" + ("M478 0 H521 V" + e + " H478z M478 0 H521 V" + e + " H478z");
    default:
      return "";
  }
};
var Ot = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
};
var P1 = function(t5, e) {
  switch (t5) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + e + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + e + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + ` v585 h43z
M367 15 v585 v` + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + e + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + e + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + e + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v602 h84z
M403 1759 V0 H319 V1759 v` + e + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + e + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (e + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (e + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (e + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (e + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
var le = class {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return I.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), r = 0; r < this.children.length; r++)
      e.appendChild(this.children[r].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (r) => r.toText();
    return this.children.map(e).join("");
  }
};
var y0 = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
};
var ge = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
};
var Et = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function F1(t5, e) {
  y0[t5] = e;
}
function dt(t5, e, r) {
  if (!y0[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var a = t5.charCodeAt(0), i = y0[e][a];
  if (!i && t5[0] in Et && (a = Et[t5[0]].charCodeAt(0), i = y0[e][a]), !i && r === "text" && fr(a) && (i = y0[e][77]), i)
    return {
      depth: i[0],
      height: i[1],
      italic: i[2],
      skew: i[3],
      width: i[4]
    };
}
var Ge = {};
function G1(t5) {
  var e;
  if (t5 >= 5 ? e = 0 : t5 >= 3 ? e = 1 : e = 2, !Ge[e]) {
    var r = Ge[e] = {
      cssEmPerMu: ge.quad[e] / 18
    };
    for (var a in ge)
      ge.hasOwnProperty(a) && (r[a] = ge[a][e]);
  }
  return Ge[e];
}
var U1 = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
];
var Dt = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
];
var Lt = function(t5, e) {
  return e.size < 2 ? t5 : U1[t5 - 1][e.size - 1];
};
var A0 = class _A0 {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || _A0.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Dt[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var r = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var a in e)
      e.hasOwnProperty(a) && (r[a] = e[a]);
    return new _A0(r);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: Lt(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: Dt[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var r = Lt(_A0.BASESIZE, e);
    return this.size === r && this.textSize === _A0.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: r
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: true
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== _A0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + _A0.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = G1(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
};
A0.BASESIZE = 6;
var it = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
};
var W1 = {
  ex: true,
  em: true,
  mu: true
};
var vr = function(t5) {
  return typeof t5 != "string" && (t5 = t5.unit), t5 in it || t5 in W1 || t5 === "ex";
};
var j = function(t5, e) {
  var r;
  if (t5.unit in it)
    r = it[t5.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
  else if (t5.unit === "mu")
    r = e.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (e.style.isTight() ? a = e.havingStyle(e.style.text()) : a = e, t5.unit === "ex")
      r = a.fontMetrics().xHeight;
    else if (t5.unit === "em")
      r = a.fontMetrics().quad;
    else
      throw new M("Invalid unit: '" + t5.unit + "'");
    a !== e && (r *= a.sizeMultiplier / e.sizeMultiplier);
  }
  return Math.min(t5.number * r, e.maxSize);
};
var z = function(t5) {
  return +t5.toFixed(4) + "em";
};
var V0 = function(t5) {
  return t5.filter((e) => e).join(" ");
};
var br = function(t5, e, r) {
  if (this.classes = t5 || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, e) {
    e.style.isTight() && this.classes.push("mtight");
    var a = e.getColor();
    a && (this.style.color = a);
  }
};
var yr = function(t5) {
  var e = document.createElement(t5);
  e.className = V0(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && e.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    e.appendChild(this.children[i].toNode());
  return e;
};
var _1 = /[\s"'>/=\x00-\x1f]/;
var xr = function(t5) {
  var e = "<" + t5;
  this.classes.length && (e += ' class="' + I.escape(V0(this.classes)) + '"');
  var r = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (r += I.hyphenate(a) + ":" + this.style[a] + ";");
  r && (e += ' style="' + I.escape(r) + '"');
  for (var i in this.attributes)
    if (this.attributes.hasOwnProperty(i)) {
      if (_1.test(i))
        throw new M("Invalid attribute name '" + i + "'");
      e += " " + i + '="' + I.escape(this.attributes[i]) + '"';
    }
  e += ">";
  for (var s = 0; s < this.children.length; s++)
    e += this.children[s].toMarkup();
  return e += "</" + t5 + ">", e;
};
var he = class {
  constructor(e, r, a, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, br.call(this, e, a, i), this.children = r || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, r) {
    this.attributes[e] = r;
  }
  hasClass(e) {
    return I.contains(this.classes, e);
  }
  toNode() {
    return yr.call(this, "span");
  }
  toMarkup() {
    return xr.call(this, "span");
  }
};
var gt = class {
  constructor(e, r, a, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, br.call(this, r, i), this.children = a || [], this.setAttribute("href", e);
  }
  setAttribute(e, r) {
    this.attributes[e] = r;
  }
  hasClass(e) {
    return I.contains(this.classes, e);
  }
  toNode() {
    return yr.call(this, "a");
  }
  toMarkup() {
    return xr.call(this, "a");
  }
};
var X1 = class {
  constructor(e, r, a) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = e, this.classes = ["mord"], this.style = a;
  }
  hasClass(e) {
    return I.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + I.escape(this.src) + '"' + (' alt="' + I.escape(this.alt) + '"'), r = "";
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r += I.hyphenate(a) + ":" + this.style[a] + ";");
    return r && (e += ' style="' + I.escape(r) + '"'), e += "'/>", e;
  }
};
var Y1 = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
var d0 = class {
  constructor(e, r, a, i, s, h, u, c) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = r || 0, this.depth = a || 0, this.italic = i || 0, this.skew = s || 0, this.width = h || 0, this.classes = u || [], this.style = c || {}, this.maxFontSize = 0;
    var g = C1(this.text.charCodeAt(0));
    g && this.classes.push(g + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Y1[this.text]);
  }
  hasClass(e) {
    return I.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), r = null;
    this.italic > 0 && (r = document.createElement("span"), r.style.marginRight = z(this.italic)), this.classes.length > 0 && (r = r || document.createElement("span"), r.className = V0(this.classes));
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r = r || document.createElement("span"), r.style[a] = this.style[a]);
    return r ? (r.appendChild(e), r) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = false, r = "<span";
    this.classes.length && (e = true, r += ' class="', r += I.escape(V0(this.classes)), r += '"');
    var a = "";
    this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
    for (var i in this.style)
      this.style.hasOwnProperty(i) && (a += I.hyphenate(i) + ":" + this.style[i] + ";");
    a && (e = true, r += ' style="' + I.escape(a) + '"');
    var s = I.escape(this.text);
    return e ? (r += ">", r += s, r += "</span>", r) : s;
  }
};
var q0 = class {
  constructor(e, r) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = r || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "svg");
    for (var a in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, a) && r.setAttribute(a, this.attributes[a]);
    for (var i = 0; i < this.children.length; i++)
      r.appendChild(this.children[i].toNode());
    return r;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="' + I.escape(this.attributes[r]) + '"');
    e += ">";
    for (var a = 0; a < this.children.length; a++)
      e += this.children[a].toMarkup();
    return e += "</svg>", e;
  }
};
var P0 = class {
  constructor(e, r) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = r;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "path");
    return this.alternate ? r.setAttribute("d", this.alternate) : r.setAttribute("d", Ot[this.pathName]), r;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + I.escape(this.alternate) + '"/>' : '<path d="' + I.escape(Ot[this.pathName]) + '"/>';
  }
};
var nt = class {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "line");
    for (var a in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, a) && r.setAttribute(a, this.attributes[a]);
    return r;
  }
  toMarkup() {
    var e = "<line";
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="' + I.escape(this.attributes[r]) + '"');
    return e += "/>", e;
  }
};
function Vt(t5) {
  if (t5 instanceof d0)
    return t5;
  throw new Error("Expected symbolNode but got " + String(t5) + ".");
}
function $1(t5) {
  if (t5 instanceof he)
    return t5;
  throw new Error("Expected span<HtmlDomNode> but got " + String(t5) + ".");
}
var j1 = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
};
var Z1 = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
};
var X = {
  math: {},
  text: {}
};
function n(t5, e, r, a, i, s) {
  X[t5][i] = {
    font: e,
    group: r,
    replace: a
  }, s && a && (X[t5][a] = X[t5][i]);
}
var o = "math";
var k = "text";
var l = "main";
var p = "ams";
var Y = "accent-token";
var q = "bin";
var i0 = "close";
var te = "inner";
var H = "mathord";
var Q = "op-token";
var u0 = "open";
var Ne = "punct";
var d = "rel";
var I0 = "spacing";
var f = "textord";
n(o, l, d, "≡", "\\equiv", true);
n(o, l, d, "≺", "\\prec", true);
n(o, l, d, "≻", "\\succ", true);
n(o, l, d, "∼", "\\sim", true);
n(o, l, d, "⊥", "\\perp");
n(o, l, d, "⪯", "\\preceq", true);
n(o, l, d, "⪰", "\\succeq", true);
n(o, l, d, "≃", "\\simeq", true);
n(o, l, d, "∣", "\\mid", true);
n(o, l, d, "≪", "\\ll", true);
n(o, l, d, "≫", "\\gg", true);
n(o, l, d, "≍", "\\asymp", true);
n(o, l, d, "∥", "\\parallel");
n(o, l, d, "⋈", "\\bowtie", true);
n(o, l, d, "⌣", "\\smile", true);
n(o, l, d, "⊑", "\\sqsubseteq", true);
n(o, l, d, "⊒", "\\sqsupseteq", true);
n(o, l, d, "≐", "\\doteq", true);
n(o, l, d, "⌢", "\\frown", true);
n(o, l, d, "∋", "\\ni", true);
n(o, l, d, "∝", "\\propto", true);
n(o, l, d, "⊢", "\\vdash", true);
n(o, l, d, "⊣", "\\dashv", true);
n(o, l, d, "∋", "\\owns");
n(o, l, Ne, ".", "\\ldotp");
n(o, l, Ne, "⋅", "\\cdotp");
n(o, l, f, "#", "\\#");
n(k, l, f, "#", "\\#");
n(o, l, f, "&", "\\&");
n(k, l, f, "&", "\\&");
n(o, l, f, "ℵ", "\\aleph", true);
n(o, l, f, "∀", "\\forall", true);
n(o, l, f, "ℏ", "\\hbar", true);
n(o, l, f, "∃", "\\exists", true);
n(o, l, f, "∇", "\\nabla", true);
n(o, l, f, "♭", "\\flat", true);
n(o, l, f, "ℓ", "\\ell", true);
n(o, l, f, "♮", "\\natural", true);
n(o, l, f, "♣", "\\clubsuit", true);
n(o, l, f, "℘", "\\wp", true);
n(o, l, f, "♯", "\\sharp", true);
n(o, l, f, "♢", "\\diamondsuit", true);
n(o, l, f, "ℜ", "\\Re", true);
n(o, l, f, "♡", "\\heartsuit", true);
n(o, l, f, "ℑ", "\\Im", true);
n(o, l, f, "♠", "\\spadesuit", true);
n(o, l, f, "§", "\\S", true);
n(k, l, f, "§", "\\S");
n(o, l, f, "¶", "\\P", true);
n(k, l, f, "¶", "\\P");
n(o, l, f, "†", "\\dag");
n(k, l, f, "†", "\\dag");
n(k, l, f, "†", "\\textdagger");
n(o, l, f, "‡", "\\ddag");
n(k, l, f, "‡", "\\ddag");
n(k, l, f, "‡", "\\textdaggerdbl");
n(o, l, i0, "⎱", "\\rmoustache", true);
n(o, l, u0, "⎰", "\\lmoustache", true);
n(o, l, i0, "⟯", "\\rgroup", true);
n(o, l, u0, "⟮", "\\lgroup", true);
n(o, l, q, "∓", "\\mp", true);
n(o, l, q, "⊖", "\\ominus", true);
n(o, l, q, "⊎", "\\uplus", true);
n(o, l, q, "⊓", "\\sqcap", true);
n(o, l, q, "∗", "\\ast");
n(o, l, q, "⊔", "\\sqcup", true);
n(o, l, q, "◯", "\\bigcirc", true);
n(o, l, q, "∙", "\\bullet", true);
n(o, l, q, "‡", "\\ddagger");
n(o, l, q, "≀", "\\wr", true);
n(o, l, q, "⨿", "\\amalg");
n(o, l, q, "&", "\\And");
n(o, l, d, "⟵", "\\longleftarrow", true);
n(o, l, d, "⇐", "\\Leftarrow", true);
n(o, l, d, "⟸", "\\Longleftarrow", true);
n(o, l, d, "⟶", "\\longrightarrow", true);
n(o, l, d, "⇒", "\\Rightarrow", true);
n(o, l, d, "⟹", "\\Longrightarrow", true);
n(o, l, d, "↔", "\\leftrightarrow", true);
n(o, l, d, "⟷", "\\longleftrightarrow", true);
n(o, l, d, "⇔", "\\Leftrightarrow", true);
n(o, l, d, "⟺", "\\Longleftrightarrow", true);
n(o, l, d, "↦", "\\mapsto", true);
n(o, l, d, "⟼", "\\longmapsto", true);
n(o, l, d, "↗", "\\nearrow", true);
n(o, l, d, "↩", "\\hookleftarrow", true);
n(o, l, d, "↪", "\\hookrightarrow", true);
n(o, l, d, "↘", "\\searrow", true);
n(o, l, d, "↼", "\\leftharpoonup", true);
n(o, l, d, "⇀", "\\rightharpoonup", true);
n(o, l, d, "↙", "\\swarrow", true);
n(o, l, d, "↽", "\\leftharpoondown", true);
n(o, l, d, "⇁", "\\rightharpoondown", true);
n(o, l, d, "↖", "\\nwarrow", true);
n(o, l, d, "⇌", "\\rightleftharpoons", true);
n(o, p, d, "≮", "\\nless", true);
n(o, p, d, "", "\\@nleqslant");
n(o, p, d, "", "\\@nleqq");
n(o, p, d, "⪇", "\\lneq", true);
n(o, p, d, "≨", "\\lneqq", true);
n(o, p, d, "", "\\@lvertneqq");
n(o, p, d, "⋦", "\\lnsim", true);
n(o, p, d, "⪉", "\\lnapprox", true);
n(o, p, d, "⊀", "\\nprec", true);
n(o, p, d, "⋠", "\\npreceq", true);
n(o, p, d, "⋨", "\\precnsim", true);
n(o, p, d, "⪹", "\\precnapprox", true);
n(o, p, d, "≁", "\\nsim", true);
n(o, p, d, "", "\\@nshortmid");
n(o, p, d, "∤", "\\nmid", true);
n(o, p, d, "⊬", "\\nvdash", true);
n(o, p, d, "⊭", "\\nvDash", true);
n(o, p, d, "⋪", "\\ntriangleleft");
n(o, p, d, "⋬", "\\ntrianglelefteq", true);
n(o, p, d, "⊊", "\\subsetneq", true);
n(o, p, d, "", "\\@varsubsetneq");
n(o, p, d, "⫋", "\\subsetneqq", true);
n(o, p, d, "", "\\@varsubsetneqq");
n(o, p, d, "≯", "\\ngtr", true);
n(o, p, d, "", "\\@ngeqslant");
n(o, p, d, "", "\\@ngeqq");
n(o, p, d, "⪈", "\\gneq", true);
n(o, p, d, "≩", "\\gneqq", true);
n(o, p, d, "", "\\@gvertneqq");
n(o, p, d, "⋧", "\\gnsim", true);
n(o, p, d, "⪊", "\\gnapprox", true);
n(o, p, d, "⊁", "\\nsucc", true);
n(o, p, d, "⋡", "\\nsucceq", true);
n(o, p, d, "⋩", "\\succnsim", true);
n(o, p, d, "⪺", "\\succnapprox", true);
n(o, p, d, "≆", "\\ncong", true);
n(o, p, d, "", "\\@nshortparallel");
n(o, p, d, "∦", "\\nparallel", true);
n(o, p, d, "⊯", "\\nVDash", true);
n(o, p, d, "⋫", "\\ntriangleright");
n(o, p, d, "⋭", "\\ntrianglerighteq", true);
n(o, p, d, "", "\\@nsupseteqq");
n(o, p, d, "⊋", "\\supsetneq", true);
n(o, p, d, "", "\\@varsupsetneq");
n(o, p, d, "⫌", "\\supsetneqq", true);
n(o, p, d, "", "\\@varsupsetneqq");
n(o, p, d, "⊮", "\\nVdash", true);
n(o, p, d, "⪵", "\\precneqq", true);
n(o, p, d, "⪶", "\\succneqq", true);
n(o, p, d, "", "\\@nsubseteqq");
n(o, p, q, "⊴", "\\unlhd");
n(o, p, q, "⊵", "\\unrhd");
n(o, p, d, "↚", "\\nleftarrow", true);
n(o, p, d, "↛", "\\nrightarrow", true);
n(o, p, d, "⇍", "\\nLeftarrow", true);
n(o, p, d, "⇏", "\\nRightarrow", true);
n(o, p, d, "↮", "\\nleftrightarrow", true);
n(o, p, d, "⇎", "\\nLeftrightarrow", true);
n(o, p, d, "△", "\\vartriangle");
n(o, p, f, "ℏ", "\\hslash");
n(o, p, f, "▽", "\\triangledown");
n(o, p, f, "◊", "\\lozenge");
n(o, p, f, "Ⓢ", "\\circledS");
n(o, p, f, "®", "\\circledR");
n(k, p, f, "®", "\\circledR");
n(o, p, f, "∡", "\\measuredangle", true);
n(o, p, f, "∄", "\\nexists");
n(o, p, f, "℧", "\\mho");
n(o, p, f, "Ⅎ", "\\Finv", true);
n(o, p, f, "⅁", "\\Game", true);
n(o, p, f, "‵", "\\backprime");
n(o, p, f, "▲", "\\blacktriangle");
n(o, p, f, "▼", "\\blacktriangledown");
n(o, p, f, "■", "\\blacksquare");
n(o, p, f, "⧫", "\\blacklozenge");
n(o, p, f, "★", "\\bigstar");
n(o, p, f, "∢", "\\sphericalangle", true);
n(o, p, f, "∁", "\\complement", true);
n(o, p, f, "ð", "\\eth", true);
n(k, l, f, "ð", "ð");
n(o, p, f, "╱", "\\diagup");
n(o, p, f, "╲", "\\diagdown");
n(o, p, f, "□", "\\square");
n(o, p, f, "□", "\\Box");
n(o, p, f, "◊", "\\Diamond");
n(o, p, f, "¥", "\\yen", true);
n(k, p, f, "¥", "\\yen", true);
n(o, p, f, "✓", "\\checkmark", true);
n(k, p, f, "✓", "\\checkmark");
n(o, p, f, "ℶ", "\\beth", true);
n(o, p, f, "ℸ", "\\daleth", true);
n(o, p, f, "ℷ", "\\gimel", true);
n(o, p, f, "ϝ", "\\digamma", true);
n(o, p, f, "ϰ", "\\varkappa");
n(o, p, u0, "┌", "\\@ulcorner", true);
n(o, p, i0, "┐", "\\@urcorner", true);
n(o, p, u0, "└", "\\@llcorner", true);
n(o, p, i0, "┘", "\\@lrcorner", true);
n(o, p, d, "≦", "\\leqq", true);
n(o, p, d, "⩽", "\\leqslant", true);
n(o, p, d, "⪕", "\\eqslantless", true);
n(o, p, d, "≲", "\\lesssim", true);
n(o, p, d, "⪅", "\\lessapprox", true);
n(o, p, d, "≊", "\\approxeq", true);
n(o, p, q, "⋖", "\\lessdot");
n(o, p, d, "⋘", "\\lll", true);
n(o, p, d, "≶", "\\lessgtr", true);
n(o, p, d, "⋚", "\\lesseqgtr", true);
n(o, p, d, "⪋", "\\lesseqqgtr", true);
n(o, p, d, "≑", "\\doteqdot");
n(o, p, d, "≓", "\\risingdotseq", true);
n(o, p, d, "≒", "\\fallingdotseq", true);
n(o, p, d, "∽", "\\backsim", true);
n(o, p, d, "⋍", "\\backsimeq", true);
n(o, p, d, "⫅", "\\subseteqq", true);
n(o, p, d, "⋐", "\\Subset", true);
n(o, p, d, "⊏", "\\sqsubset", true);
n(o, p, d, "≼", "\\preccurlyeq", true);
n(o, p, d, "⋞", "\\curlyeqprec", true);
n(o, p, d, "≾", "\\precsim", true);
n(o, p, d, "⪷", "\\precapprox", true);
n(o, p, d, "⊲", "\\vartriangleleft");
n(o, p, d, "⊴", "\\trianglelefteq");
n(o, p, d, "⊨", "\\vDash", true);
n(o, p, d, "⊪", "\\Vvdash", true);
n(o, p, d, "⌣", "\\smallsmile");
n(o, p, d, "⌢", "\\smallfrown");
n(o, p, d, "≏", "\\bumpeq", true);
n(o, p, d, "≎", "\\Bumpeq", true);
n(o, p, d, "≧", "\\geqq", true);
n(o, p, d, "⩾", "\\geqslant", true);
n(o, p, d, "⪖", "\\eqslantgtr", true);
n(o, p, d, "≳", "\\gtrsim", true);
n(o, p, d, "⪆", "\\gtrapprox", true);
n(o, p, q, "⋗", "\\gtrdot");
n(o, p, d, "⋙", "\\ggg", true);
n(o, p, d, "≷", "\\gtrless", true);
n(o, p, d, "⋛", "\\gtreqless", true);
n(o, p, d, "⪌", "\\gtreqqless", true);
n(o, p, d, "≖", "\\eqcirc", true);
n(o, p, d, "≗", "\\circeq", true);
n(o, p, d, "≜", "\\triangleq", true);
n(o, p, d, "∼", "\\thicksim");
n(o, p, d, "≈", "\\thickapprox");
n(o, p, d, "⫆", "\\supseteqq", true);
n(o, p, d, "⋑", "\\Supset", true);
n(o, p, d, "⊐", "\\sqsupset", true);
n(o, p, d, "≽", "\\succcurlyeq", true);
n(o, p, d, "⋟", "\\curlyeqsucc", true);
n(o, p, d, "≿", "\\succsim", true);
n(o, p, d, "⪸", "\\succapprox", true);
n(o, p, d, "⊳", "\\vartriangleright");
n(o, p, d, "⊵", "\\trianglerighteq");
n(o, p, d, "⊩", "\\Vdash", true);
n(o, p, d, "∣", "\\shortmid");
n(o, p, d, "∥", "\\shortparallel");
n(o, p, d, "≬", "\\between", true);
n(o, p, d, "⋔", "\\pitchfork", true);
n(o, p, d, "∝", "\\varpropto");
n(o, p, d, "◀", "\\blacktriangleleft");
n(o, p, d, "∴", "\\therefore", true);
n(o, p, d, "∍", "\\backepsilon");
n(o, p, d, "▶", "\\blacktriangleright");
n(o, p, d, "∵", "\\because", true);
n(o, p, d, "⋘", "\\llless");
n(o, p, d, "⋙", "\\gggtr");
n(o, p, q, "⊲", "\\lhd");
n(o, p, q, "⊳", "\\rhd");
n(o, p, d, "≂", "\\eqsim", true);
n(o, l, d, "⋈", "\\Join");
n(o, p, d, "≑", "\\Doteq", true);
n(o, p, q, "∔", "\\dotplus", true);
n(o, p, q, "∖", "\\smallsetminus");
n(o, p, q, "⋒", "\\Cap", true);
n(o, p, q, "⋓", "\\Cup", true);
n(o, p, q, "⩞", "\\doublebarwedge", true);
n(o, p, q, "⊟", "\\boxminus", true);
n(o, p, q, "⊞", "\\boxplus", true);
n(o, p, q, "⋇", "\\divideontimes", true);
n(o, p, q, "⋉", "\\ltimes", true);
n(o, p, q, "⋊", "\\rtimes", true);
n(o, p, q, "⋋", "\\leftthreetimes", true);
n(o, p, q, "⋌", "\\rightthreetimes", true);
n(o, p, q, "⋏", "\\curlywedge", true);
n(o, p, q, "⋎", "\\curlyvee", true);
n(o, p, q, "⊝", "\\circleddash", true);
n(o, p, q, "⊛", "\\circledast", true);
n(o, p, q, "⋅", "\\centerdot");
n(o, p, q, "⊺", "\\intercal", true);
n(o, p, q, "⋒", "\\doublecap");
n(o, p, q, "⋓", "\\doublecup");
n(o, p, q, "⊠", "\\boxtimes", true);
n(o, p, d, "⇢", "\\dashrightarrow", true);
n(o, p, d, "⇠", "\\dashleftarrow", true);
n(o, p, d, "⇇", "\\leftleftarrows", true);
n(o, p, d, "⇆", "\\leftrightarrows", true);
n(o, p, d, "⇚", "\\Lleftarrow", true);
n(o, p, d, "↞", "\\twoheadleftarrow", true);
n(o, p, d, "↢", "\\leftarrowtail", true);
n(o, p, d, "↫", "\\looparrowleft", true);
n(o, p, d, "⇋", "\\leftrightharpoons", true);
n(o, p, d, "↶", "\\curvearrowleft", true);
n(o, p, d, "↺", "\\circlearrowleft", true);
n(o, p, d, "↰", "\\Lsh", true);
n(o, p, d, "⇈", "\\upuparrows", true);
n(o, p, d, "↿", "\\upharpoonleft", true);
n(o, p, d, "⇃", "\\downharpoonleft", true);
n(o, l, d, "⊶", "\\origof", true);
n(o, l, d, "⊷", "\\imageof", true);
n(o, p, d, "⊸", "\\multimap", true);
n(o, p, d, "↭", "\\leftrightsquigarrow", true);
n(o, p, d, "⇉", "\\rightrightarrows", true);
n(o, p, d, "⇄", "\\rightleftarrows", true);
n(o, p, d, "↠", "\\twoheadrightarrow", true);
n(o, p, d, "↣", "\\rightarrowtail", true);
n(o, p, d, "↬", "\\looparrowright", true);
n(o, p, d, "↷", "\\curvearrowright", true);
n(o, p, d, "↻", "\\circlearrowright", true);
n(o, p, d, "↱", "\\Rsh", true);
n(o, p, d, "⇊", "\\downdownarrows", true);
n(o, p, d, "↾", "\\upharpoonright", true);
n(o, p, d, "⇂", "\\downharpoonright", true);
n(o, p, d, "⇝", "\\rightsquigarrow", true);
n(o, p, d, "⇝", "\\leadsto");
n(o, p, d, "⇛", "\\Rrightarrow", true);
n(o, p, d, "↾", "\\restriction");
n(o, l, f, "‘", "`");
n(o, l, f, "$", "\\$");
n(k, l, f, "$", "\\$");
n(k, l, f, "$", "\\textdollar");
n(o, l, f, "%", "\\%");
n(k, l, f, "%", "\\%");
n(o, l, f, "_", "\\_");
n(k, l, f, "_", "\\_");
n(k, l, f, "_", "\\textunderscore");
n(o, l, f, "∠", "\\angle", true);
n(o, l, f, "∞", "\\infty", true);
n(o, l, f, "′", "\\prime");
n(o, l, f, "△", "\\triangle");
n(o, l, f, "Γ", "\\Gamma", true);
n(o, l, f, "Δ", "\\Delta", true);
n(o, l, f, "Θ", "\\Theta", true);
n(o, l, f, "Λ", "\\Lambda", true);
n(o, l, f, "Ξ", "\\Xi", true);
n(o, l, f, "Π", "\\Pi", true);
n(o, l, f, "Σ", "\\Sigma", true);
n(o, l, f, "Υ", "\\Upsilon", true);
n(o, l, f, "Φ", "\\Phi", true);
n(o, l, f, "Ψ", "\\Psi", true);
n(o, l, f, "Ω", "\\Omega", true);
n(o, l, f, "A", "Α");
n(o, l, f, "B", "Β");
n(o, l, f, "E", "Ε");
n(o, l, f, "Z", "Ζ");
n(o, l, f, "H", "Η");
n(o, l, f, "I", "Ι");
n(o, l, f, "K", "Κ");
n(o, l, f, "M", "Μ");
n(o, l, f, "N", "Ν");
n(o, l, f, "O", "Ο");
n(o, l, f, "P", "Ρ");
n(o, l, f, "T", "Τ");
n(o, l, f, "X", "Χ");
n(o, l, f, "¬", "\\neg", true);
n(o, l, f, "¬", "\\lnot");
n(o, l, f, "⊤", "\\top");
n(o, l, f, "⊥", "\\bot");
n(o, l, f, "∅", "\\emptyset");
n(o, p, f, "∅", "\\varnothing");
n(o, l, H, "α", "\\alpha", true);
n(o, l, H, "β", "\\beta", true);
n(o, l, H, "γ", "\\gamma", true);
n(o, l, H, "δ", "\\delta", true);
n(o, l, H, "ϵ", "\\epsilon", true);
n(o, l, H, "ζ", "\\zeta", true);
n(o, l, H, "η", "\\eta", true);
n(o, l, H, "θ", "\\theta", true);
n(o, l, H, "ι", "\\iota", true);
n(o, l, H, "κ", "\\kappa", true);
n(o, l, H, "λ", "\\lambda", true);
n(o, l, H, "μ", "\\mu", true);
n(o, l, H, "ν", "\\nu", true);
n(o, l, H, "ξ", "\\xi", true);
n(o, l, H, "ο", "\\omicron", true);
n(o, l, H, "π", "\\pi", true);
n(o, l, H, "ρ", "\\rho", true);
n(o, l, H, "σ", "\\sigma", true);
n(o, l, H, "τ", "\\tau", true);
n(o, l, H, "υ", "\\upsilon", true);
n(o, l, H, "ϕ", "\\phi", true);
n(o, l, H, "χ", "\\chi", true);
n(o, l, H, "ψ", "\\psi", true);
n(o, l, H, "ω", "\\omega", true);
n(o, l, H, "ε", "\\varepsilon", true);
n(o, l, H, "ϑ", "\\vartheta", true);
n(o, l, H, "ϖ", "\\varpi", true);
n(o, l, H, "ϱ", "\\varrho", true);
n(o, l, H, "ς", "\\varsigma", true);
n(o, l, H, "φ", "\\varphi", true);
n(o, l, q, "∗", "*", true);
n(o, l, q, "+", "+");
n(o, l, q, "−", "-", true);
n(o, l, q, "⋅", "\\cdot", true);
n(o, l, q, "∘", "\\circ", true);
n(o, l, q, "÷", "\\div", true);
n(o, l, q, "±", "\\pm", true);
n(o, l, q, "×", "\\times", true);
n(o, l, q, "∩", "\\cap", true);
n(o, l, q, "∪", "\\cup", true);
n(o, l, q, "∖", "\\setminus", true);
n(o, l, q, "∧", "\\land");
n(o, l, q, "∨", "\\lor");
n(o, l, q, "∧", "\\wedge", true);
n(o, l, q, "∨", "\\vee", true);
n(o, l, f, "√", "\\surd");
n(o, l, u0, "⟨", "\\langle", true);
n(o, l, u0, "∣", "\\lvert");
n(o, l, u0, "∥", "\\lVert");
n(o, l, i0, "?", "?");
n(o, l, i0, "!", "!");
n(o, l, i0, "⟩", "\\rangle", true);
n(o, l, i0, "∣", "\\rvert");
n(o, l, i0, "∥", "\\rVert");
n(o, l, d, "=", "=");
n(o, l, d, ":", ":");
n(o, l, d, "≈", "\\approx", true);
n(o, l, d, "≅", "\\cong", true);
n(o, l, d, "≥", "\\ge");
n(o, l, d, "≥", "\\geq", true);
n(o, l, d, "←", "\\gets");
n(o, l, d, ">", "\\gt", true);
n(o, l, d, "∈", "\\in", true);
n(o, l, d, "", "\\@not");
n(o, l, d, "⊂", "\\subset", true);
n(o, l, d, "⊃", "\\supset", true);
n(o, l, d, "⊆", "\\subseteq", true);
n(o, l, d, "⊇", "\\supseteq", true);
n(o, p, d, "⊈", "\\nsubseteq", true);
n(o, p, d, "⊉", "\\nsupseteq", true);
n(o, l, d, "⊨", "\\models");
n(o, l, d, "←", "\\leftarrow", true);
n(o, l, d, "≤", "\\le");
n(o, l, d, "≤", "\\leq", true);
n(o, l, d, "<", "\\lt", true);
n(o, l, d, "→", "\\rightarrow", true);
n(o, l, d, "→", "\\to");
n(o, p, d, "≱", "\\ngeq", true);
n(o, p, d, "≰", "\\nleq", true);
n(o, l, I0, " ", "\\ ");
n(o, l, I0, " ", "\\space");
n(o, l, I0, " ", "\\nobreakspace");
n(k, l, I0, " ", "\\ ");
n(k, l, I0, " ", " ");
n(k, l, I0, " ", "\\space");
n(k, l, I0, " ", "\\nobreakspace");
n(o, l, I0, null, "\\nobreak");
n(o, l, I0, null, "\\allowbreak");
n(o, l, Ne, ",", ",");
n(o, l, Ne, ";", ";");
n(o, p, q, "⊼", "\\barwedge", true);
n(o, p, q, "⊻", "\\veebar", true);
n(o, l, q, "⊙", "\\odot", true);
n(o, l, q, "⊕", "\\oplus", true);
n(o, l, q, "⊗", "\\otimes", true);
n(o, l, f, "∂", "\\partial", true);
n(o, l, q, "⊘", "\\oslash", true);
n(o, p, q, "⊚", "\\circledcirc", true);
n(o, p, q, "⊡", "\\boxdot", true);
n(o, l, q, "△", "\\bigtriangleup");
n(o, l, q, "▽", "\\bigtriangledown");
n(o, l, q, "†", "\\dagger");
n(o, l, q, "⋄", "\\diamond");
n(o, l, q, "⋆", "\\star");
n(o, l, q, "◃", "\\triangleleft");
n(o, l, q, "▹", "\\triangleright");
n(o, l, u0, "{", "\\{");
n(k, l, f, "{", "\\{");
n(k, l, f, "{", "\\textbraceleft");
n(o, l, i0, "}", "\\}");
n(k, l, f, "}", "\\}");
n(k, l, f, "}", "\\textbraceright");
n(o, l, u0, "{", "\\lbrace");
n(o, l, i0, "}", "\\rbrace");
n(o, l, u0, "[", "\\lbrack", true);
n(k, l, f, "[", "\\lbrack", true);
n(o, l, i0, "]", "\\rbrack", true);
n(k, l, f, "]", "\\rbrack", true);
n(o, l, u0, "(", "\\lparen", true);
n(o, l, i0, ")", "\\rparen", true);
n(k, l, f, "<", "\\textless", true);
n(k, l, f, ">", "\\textgreater", true);
n(o, l, u0, "⌊", "\\lfloor", true);
n(o, l, i0, "⌋", "\\rfloor", true);
n(o, l, u0, "⌈", "\\lceil", true);
n(o, l, i0, "⌉", "\\rceil", true);
n(o, l, f, "\\", "\\backslash");
n(o, l, f, "∣", "|");
n(o, l, f, "∣", "\\vert");
n(k, l, f, "|", "\\textbar", true);
n(o, l, f, "∥", "\\|");
n(o, l, f, "∥", "\\Vert");
n(k, l, f, "∥", "\\textbardbl");
n(k, l, f, "~", "\\textasciitilde");
n(k, l, f, "\\", "\\textbackslash");
n(k, l, f, "^", "\\textasciicircum");
n(o, l, d, "↑", "\\uparrow", true);
n(o, l, d, "⇑", "\\Uparrow", true);
n(o, l, d, "↓", "\\downarrow", true);
n(o, l, d, "⇓", "\\Downarrow", true);
n(o, l, d, "↕", "\\updownarrow", true);
n(o, l, d, "⇕", "\\Updownarrow", true);
n(o, l, Q, "∐", "\\coprod");
n(o, l, Q, "⋁", "\\bigvee");
n(o, l, Q, "⋀", "\\bigwedge");
n(o, l, Q, "⨄", "\\biguplus");
n(o, l, Q, "⋂", "\\bigcap");
n(o, l, Q, "⋃", "\\bigcup");
n(o, l, Q, "∫", "\\int");
n(o, l, Q, "∫", "\\intop");
n(o, l, Q, "∬", "\\iint");
n(o, l, Q, "∭", "\\iiint");
n(o, l, Q, "∏", "\\prod");
n(o, l, Q, "∑", "\\sum");
n(o, l, Q, "⨂", "\\bigotimes");
n(o, l, Q, "⨁", "\\bigoplus");
n(o, l, Q, "⨀", "\\bigodot");
n(o, l, Q, "∮", "\\oint");
n(o, l, Q, "∯", "\\oiint");
n(o, l, Q, "∰", "\\oiiint");
n(o, l, Q, "⨆", "\\bigsqcup");
n(o, l, Q, "∫", "\\smallint");
n(k, l, te, "…", "\\textellipsis");
n(o, l, te, "…", "\\mathellipsis");
n(k, l, te, "…", "\\ldots", true);
n(o, l, te, "…", "\\ldots", true);
n(o, l, te, "⋯", "\\@cdots", true);
n(o, l, te, "⋱", "\\ddots", true);
n(o, l, f, "⋮", "\\varvdots");
n(k, l, f, "⋮", "\\varvdots");
n(o, l, Y, "ˊ", "\\acute");
n(o, l, Y, "ˋ", "\\grave");
n(o, l, Y, "¨", "\\ddot");
n(o, l, Y, "~", "\\tilde");
n(o, l, Y, "ˉ", "\\bar");
n(o, l, Y, "˘", "\\breve");
n(o, l, Y, "ˇ", "\\check");
n(o, l, Y, "^", "\\hat");
n(o, l, Y, "⃗", "\\vec");
n(o, l, Y, "˙", "\\dot");
n(o, l, Y, "˚", "\\mathring");
n(o, l, H, "", "\\@imath");
n(o, l, H, "", "\\@jmath");
n(o, l, f, "ı", "ı");
n(o, l, f, "ȷ", "ȷ");
n(k, l, f, "ı", "\\i", true);
n(k, l, f, "ȷ", "\\j", true);
n(k, l, f, "ß", "\\ss", true);
n(k, l, f, "æ", "\\ae", true);
n(k, l, f, "œ", "\\oe", true);
n(k, l, f, "ø", "\\o", true);
n(k, l, f, "Æ", "\\AE", true);
n(k, l, f, "Œ", "\\OE", true);
n(k, l, f, "Ø", "\\O", true);
n(k, l, Y, "ˊ", "\\'");
n(k, l, Y, "ˋ", "\\`");
n(k, l, Y, "ˆ", "\\^");
n(k, l, Y, "˜", "\\~");
n(k, l, Y, "ˉ", "\\=");
n(k, l, Y, "˘", "\\u");
n(k, l, Y, "˙", "\\.");
n(k, l, Y, "¸", "\\c");
n(k, l, Y, "˚", "\\r");
n(k, l, Y, "ˇ", "\\v");
n(k, l, Y, "¨", '\\"');
n(k, l, Y, "˝", "\\H");
n(k, l, Y, "◯", "\\textcircled");
var wr = {
  "--": true,
  "---": true,
  "``": true,
  "''": true
};
n(k, l, f, "–", "--", true);
n(k, l, f, "–", "\\textendash");
n(k, l, f, "—", "---", true);
n(k, l, f, "—", "\\textemdash");
n(k, l, f, "‘", "`", true);
n(k, l, f, "‘", "\\textquoteleft");
n(k, l, f, "’", "'", true);
n(k, l, f, "’", "\\textquoteright");
n(k, l, f, "“", "``", true);
n(k, l, f, "“", "\\textquotedblleft");
n(k, l, f, "”", "''", true);
n(k, l, f, "”", "\\textquotedblright");
n(o, l, f, "°", "\\degree", true);
n(k, l, f, "°", "\\degree");
n(k, l, f, "°", "\\textdegree", true);
n(o, l, f, "£", "\\pounds");
n(o, l, f, "£", "\\mathsterling", true);
n(k, l, f, "£", "\\pounds");
n(k, l, f, "£", "\\textsterling", true);
n(o, p, f, "✠", "\\maltese");
n(k, p, f, "✠", "\\maltese");
var Pt = '0123456789/@."';
for (Ue = 0; Ue < Pt.length; Ue++) {
  Ft = Pt.charAt(Ue);
  n(o, l, f, Ft, Ft);
}
var Ft;
var Ue;
var Gt = '0123456789!@*()-=+";:?/.,';
for (We = 0; We < Gt.length; We++) {
  Ut = Gt.charAt(We);
  n(k, l, f, Ut, Ut);
}
var Ut;
var We;
var Te = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (_e = 0; _e < Te.length; _e++) {
  fe = Te.charAt(_e);
  n(o, l, H, fe, fe), n(k, l, f, fe, fe);
}
var fe;
var _e;
n(o, p, f, "C", "ℂ");
n(k, p, f, "C", "ℂ");
n(o, p, f, "H", "ℍ");
n(k, p, f, "H", "ℍ");
n(o, p, f, "N", "ℕ");
n(k, p, f, "N", "ℕ");
n(o, p, f, "P", "ℙ");
n(k, p, f, "P", "ℙ");
n(o, p, f, "Q", "ℚ");
n(k, p, f, "Q", "ℚ");
n(o, p, f, "R", "ℝ");
n(k, p, f, "R", "ℝ");
n(o, p, f, "Z", "ℤ");
n(k, p, f, "Z", "ℤ");
n(o, l, H, "h", "ℎ");
n(k, l, H, "h", "ℎ");
var E = "";
for (r0 = 0; r0 < Te.length; r0++) {
  Z = Te.charAt(r0);
  E = String.fromCharCode(55349, 56320 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56372 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56424 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56580 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56684 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56736 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56788 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56840 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56944 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), r0 < 26 && (E = String.fromCharCode(55349, 56632 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E), E = String.fromCharCode(55349, 56476 + r0), n(o, l, H, Z, E), n(k, l, f, Z, E));
}
var Z;
var r0;
E = "𝕜";
n(o, l, H, "k", E);
n(k, l, f, "k", E);
for (W0 = 0; W0 < 10; W0++) {
  D0 = W0.toString();
  E = String.fromCharCode(55349, 57294 + W0), n(o, l, H, D0, E), n(k, l, f, D0, E), E = String.fromCharCode(55349, 57314 + W0), n(o, l, H, D0, E), n(k, l, f, D0, E), E = String.fromCharCode(55349, 57324 + W0), n(o, l, H, D0, E), n(k, l, f, D0, E), E = String.fromCharCode(55349, 57334 + W0), n(o, l, H, D0, E), n(k, l, f, D0, E);
}
var D0;
var W0;
var st = "ÐÞþ";
for (Xe = 0; Xe < st.length; Xe++) {
  ve = st.charAt(Xe);
  n(o, l, H, ve, ve), n(k, l, f, ve, ve);
}
var ve;
var Xe;
var be = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
];
var Wt = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
];
var K1 = function(t5, e) {
  var r = t5.charCodeAt(0), a = t5.charCodeAt(1), i = (r - 55296) * 1024 + (a - 56320) + 65536, s = e === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var h = Math.floor((i - 119808) / 26);
    return [be[h][2], be[h][s]];
  } else if (120782 <= i && i <= 120831) {
    var u = Math.floor((i - 120782) / 10);
    return [Wt[u][2], Wt[u][s]];
  } else {
    if (i === 120485 || i === 120486)
      return [be[0][2], be[0][s]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new M("Unsupported character: " + t5);
  }
};
var Ie = function(t5, e, r) {
  return X[r][t5] && X[r][t5].replace && (t5 = X[r][t5].replace), {
    value: t5,
    metrics: dt(t5, e, r)
  };
};
var v0 = function(t5, e, r, a, i) {
  var s = Ie(t5, e, r), h = s.metrics;
  t5 = s.value;
  var u;
  if (h) {
    var c = h.italic;
    (r === "text" || a && a.font === "mathit") && (c = 0), u = new d0(t5, h.height, h.depth, c, h.skew, h.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + t5 + "' in style '" + e + "' and mode '" + r + "'")), u = new d0(t5, 0, 0, 0, 0, 0, i);
  if (a) {
    u.maxFontSize = a.sizeMultiplier, a.style.isTight() && u.classes.push("mtight");
    var g = a.getColor();
    g && (u.style.color = g);
  }
  return u;
};
var Q1 = function(t5, e, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && Ie(t5, "Main-Bold", e).metrics ? v0(t5, "Main-Bold", e, r, a.concat(["mathbf"])) : t5 === "\\" || X[e][t5].font === "main" ? v0(t5, "Main-Regular", e, r, a) : v0(t5, "AMS-Regular", e, r, a.concat(["amsrm"]));
};
var J1 = function(t5, e, r, a, i) {
  return i !== "textord" && Ie(t5, "Math-BoldItalic", e).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
};
var ea = function(t5, e, r) {
  var a = t5.mode, i = t5.text, s = ["mord"], h = a === "math" || a === "text" && e.font, u = h ? e.font : e.fontFamily, c = "", g = "";
  if (i.charCodeAt(0) === 55349 && ([c, g] = K1(i, a)), c.length > 0)
    return v0(i, c, a, e, s.concat(g));
  if (u) {
    var v, y;
    if (u === "boldsymbol") {
      var x = J1(i, a, e, s, r);
      v = x.fontName, y = [x.fontClass];
    } else h ? (v = Mr[u].fontName, y = [u]) : (v = ye(u, e.fontWeight, e.fontShape), y = [u, e.fontWeight, e.fontShape]);
    if (Ie(i, v, a).metrics)
      return v0(i, v, a, e, s.concat(y));
    if (wr.hasOwnProperty(i) && v.slice(0, 10) === "Typewriter") {
      for (var w = [], A = 0; A < i.length; A++)
        w.push(v0(i[A], v, a, e, s.concat(y)));
      return Sr(w);
    }
  }
  if (r === "mathord")
    return v0(i, "Math-Italic", a, e, s.concat(["mathnormal"]));
  if (r === "textord") {
    var T = X[a][i] && X[a][i].font;
    if (T === "ams") {
      var C = ye("amsrm", e.fontWeight, e.fontShape);
      return v0(i, C, a, e, s.concat("amsrm", e.fontWeight, e.fontShape));
    } else if (T === "main" || !T) {
      var N = ye("textrm", e.fontWeight, e.fontShape);
      return v0(i, N, a, e, s.concat(e.fontWeight, e.fontShape));
    } else {
      var R = ye(T, e.fontWeight, e.fontShape);
      return v0(i, R, a, e, s.concat(R, e.fontWeight, e.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
};
var ta = (t5, e) => {
  if (V0(t5.classes) !== V0(e.classes) || t5.skew !== e.skew || t5.maxFontSize !== e.maxFontSize)
    return false;
  if (t5.classes.length === 1) {
    var r = t5.classes[0];
    if (r === "mbin" || r === "mord")
      return false;
  }
  for (var a in t5.style)
    if (t5.style.hasOwnProperty(a) && t5.style[a] !== e.style[a])
      return false;
  for (var i in e.style)
    if (e.style.hasOwnProperty(i) && t5.style[i] !== e.style[i])
      return false;
  return true;
};
var ra = (t5) => {
  for (var e = 0; e < t5.length - 1; e++) {
    var r = t5[e], a = t5[e + 1];
    r instanceof d0 && a instanceof d0 && ta(r, a) && (r.text += a.text, r.height = Math.max(r.height, a.height), r.depth = Math.max(r.depth, a.depth), r.italic = a.italic, t5.splice(e + 1, 1), e--);
  }
  return t5;
};
var ft = function(t5) {
  for (var e = 0, r = 0, a = 0, i = 0; i < t5.children.length; i++) {
    var s = t5.children[i];
    s.height > e && (e = s.height), s.depth > r && (r = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
  }
  t5.height = e, t5.depth = r, t5.maxFontSize = a;
};
var s0 = function(t5, e, r, a) {
  var i = new he(t5, e, r, a);
  return ft(i), i;
};
var kr = (t5, e, r, a) => new he(t5, e, r, a);
var aa = function(t5, e, r) {
  var a = s0([t5], [], e);
  return a.height = Math.max(r || e.fontMetrics().defaultRuleThickness, e.minRuleThickness), a.style.borderBottomWidth = z(a.height), a.maxFontSize = 1, a;
};
var ia = function(t5, e, r, a) {
  var i = new gt(t5, e, r, a);
  return ft(i), i;
};
var Sr = function(t5) {
  var e = new le(t5);
  return ft(e), e;
};
var na = function(t5, e) {
  return t5 instanceof le ? s0([], [t5], e) : t5;
};
var sa = function(t5) {
  if (t5.positionType === "individualShift") {
    for (var e = t5.children, r = [e[0]], a = -e[0].shift - e[0].elem.depth, i = a, s = 1; s < e.length; s++) {
      var h = -e[s].shift - i - e[s].elem.depth, u = h - (e[s - 1].elem.height + e[s - 1].elem.depth);
      i = i + h, r.push({
        type: "kern",
        size: u
      }), r.push(e[s]);
    }
    return {
      children: r,
      depth: a
    };
  }
  var c;
  if (t5.positionType === "top") {
    for (var g = t5.positionData, v = 0; v < t5.children.length; v++) {
      var y = t5.children[v];
      g -= y.type === "kern" ? y.size : y.elem.height + y.elem.depth;
    }
    c = g;
  } else if (t5.positionType === "bottom")
    c = -t5.positionData;
  else {
    var x = t5.children[0];
    if (x.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (t5.positionType === "shift")
      c = -x.elem.depth - t5.positionData;
    else if (t5.positionType === "firstBaseline")
      c = -x.elem.depth;
    else
      throw new Error("Invalid positionType " + t5.positionType + ".");
  }
  return {
    children: t5.children,
    depth: c
  };
};
var oa = function(t5, e) {
  for (var {
    children: r,
    depth: a
  } = sa(t5), i = 0, s = 0; s < r.length; s++) {
    var h = r[s];
    if (h.type === "elem") {
      var u = h.elem;
      i = Math.max(i, u.maxFontSize, u.height);
    }
  }
  i += 2;
  var c = s0(["pstrut"], []);
  c.style.height = z(i);
  for (var g = [], v = a, y = a, x = a, w = 0; w < r.length; w++) {
    var A = r[w];
    if (A.type === "kern")
      x += A.size;
    else {
      var T = A.elem, C = A.wrapperClasses || [], N = A.wrapperStyle || {}, R = s0(C, [c, T], void 0, N);
      R.style.top = z(-i - x - T.depth), A.marginLeft && (R.style.marginLeft = A.marginLeft), A.marginRight && (R.style.marginRight = A.marginRight), g.push(R), x += T.height + T.depth;
    }
    v = Math.min(v, x), y = Math.max(y, x);
  }
  var U = s0(["vlist"], g);
  U.style.height = z(y);
  var L;
  if (v < 0) {
    var F = s0([], []), V = s0(["vlist"], [F]);
    V.style.height = z(-v);
    var G = s0(["vlist-s"], [new d0("​")]);
    L = [s0(["vlist-r"], [U, G]), s0(["vlist-r"], [V])];
  } else
    L = [s0(["vlist-r"], [U])];
  var W = s0(["vlist-t"], L);
  return L.length === 2 && W.classes.push("vlist-t2"), W.height = y, W.depth = -v, W;
};
var la = (t5, e) => {
  var r = s0(["mspace"], [], e), a = j(t5, e);
  return r.style.marginRight = z(a), r;
};
var ye = function(t5, e, r) {
  var a = "";
  switch (t5) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = t5;
  }
  var i;
  return e === "textbf" && r === "textit" ? i = "BoldItalic" : e === "textbf" ? i = "Bold" : e === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
};
var Mr = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  mathsfit: {
    variant: "sans-serif-italic",
    fontName: "SansSerif-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
};
var zr = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
};
var ha = function(t5, e) {
  var [r, a, i] = zr[t5], s = new P0(r), h = new q0([s], {
    width: z(a),
    height: z(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + z(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), u = kr(["overlay"], [h], e);
  return u.height = i, u.style.height = z(i), u.style.width = z(a), u;
};
var b = {
  fontMap: Mr,
  makeSymbol: v0,
  mathsym: Q1,
  makeSpan: s0,
  makeSvgSpan: kr,
  makeLineSpan: aa,
  makeAnchor: ia,
  makeFragment: Sr,
  wrapFragment: na,
  makeVList: oa,
  makeOrd: ea,
  makeGlue: la,
  staticSvg: ha,
  svgData: zr,
  tryCombineChars: ra
};
var $ = {
  number: 3,
  unit: "mu"
};
var _0 = {
  number: 4,
  unit: "mu"
};
var z0 = {
  number: 5,
  unit: "mu"
};
var ua = {
  mord: {
    mop: $,
    mbin: _0,
    mrel: z0,
    minner: $
  },
  mop: {
    mord: $,
    mop: $,
    mrel: z0,
    minner: $
  },
  mbin: {
    mord: _0,
    mop: _0,
    mopen: _0,
    minner: _0
  },
  mrel: {
    mord: z0,
    mop: z0,
    mopen: z0,
    minner: z0
  },
  mopen: {},
  mclose: {
    mop: $,
    mbin: _0,
    mrel: z0,
    minner: $
  },
  mpunct: {
    mord: $,
    mop: $,
    mrel: z0,
    mopen: $,
    mclose: $,
    mpunct: $,
    minner: $
  },
  minner: {
    mord: $,
    mop: $,
    mbin: _0,
    mrel: z0,
    mopen: $,
    mpunct: $,
    minner: $
  }
};
var ma = {
  mord: {
    mop: $
  },
  mop: {
    mord: $,
    mop: $
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: $
  },
  mpunct: {},
  minner: {
    mop: $
  }
};
var Ar = {};
var Be = {};
var qe = {};
function B(t5) {
  for (var {
    type: e,
    names: r,
    props: a,
    handler: i,
    htmlBuilder: s,
    mathmlBuilder: h
  } = t5, u = {
    type: e,
    numArgs: a.numArgs,
    argTypes: a.argTypes,
    allowedInArgument: !!a.allowedInArgument,
    allowedInText: !!a.allowedInText,
    allowedInMath: a.allowedInMath === void 0 ? true : a.allowedInMath,
    numOptionalArgs: a.numOptionalArgs || 0,
    infix: !!a.infix,
    primitive: !!a.primitive,
    handler: i
  }, c = 0; c < r.length; ++c)
    Ar[r[c]] = u;
  e && (s && (Be[e] = s), h && (qe[e] = h));
}
function X0(t5) {
  var {
    type: e,
    htmlBuilder: r,
    mathmlBuilder: a
  } = t5;
  B({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: r,
    mathmlBuilder: a
  });
}
var Ce = function(t5) {
  return t5.type === "ordgroup" && t5.body.length === 1 ? t5.body[0] : t5;
};
var K = function(t5) {
  return t5.type === "ordgroup" ? t5.body : [t5];
};
var C0 = b.makeSpan;
var ca = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"];
var pa = ["rightmost", "mrel", "mclose", "mpunct"];
var da = {
  display: O.DISPLAY,
  text: O.TEXT,
  script: O.SCRIPT,
  scriptscript: O.SCRIPTSCRIPT
};
var ga = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
};
var e0 = function(t5, e, r, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], s = 0; s < t5.length; s++) {
    var h = P(t5[s], e);
    if (h instanceof le) {
      var u = h.children;
      i.push(...u);
    } else
      i.push(h);
  }
  if (b.tryCombineChars(i), !r)
    return i;
  var c = e;
  if (t5.length === 1) {
    var g = t5[0];
    g.type === "sizing" ? c = e.havingSize(g.size) : g.type === "styling" && (c = e.havingStyle(da[g.style]));
  }
  var v = C0([a[0] || "leftmost"], [], e), y = C0([a[1] || "rightmost"], [], e), x = r === "root";
  return _t(i, (w, A) => {
    var T = A.classes[0], C = w.classes[0];
    T === "mbin" && I.contains(pa, C) ? A.classes[0] = "mord" : C === "mbin" && I.contains(ca, T) && (w.classes[0] = "mord");
  }, {
    node: v
  }, y, x), _t(i, (w, A) => {
    var T = ot(A), C = ot(w), N = T && C ? w.hasClass("mtight") ? ma[T][C] : ua[T][C] : null;
    if (N)
      return b.makeGlue(N, c);
  }, {
    node: v
  }, y, x), i;
};
var _t = function t2(e, r, a, i, s) {
  i && e.push(i);
  for (var h = 0; h < e.length; h++) {
    var u = e[h], c = Tr(u);
    if (c) {
      t2(c.children, r, a, null, s);
      continue;
    }
    var g = !u.hasClass("mspace");
    if (g) {
      var v = r(u, a.node);
      v && (a.insertAfter ? a.insertAfter(v) : (e.unshift(v), h++));
    }
    g ? a.node = u : s && u.hasClass("newline") && (a.node = C0(["leftmost"])), a.insertAfter = /* @__PURE__ */ ((y) => (x) => {
      e.splice(y + 1, 0, x), h++;
    })(h);
  }
  i && e.pop();
};
var Tr = function(t5) {
  return t5 instanceof le || t5 instanceof gt || t5 instanceof he && t5.hasClass("enclosing") ? t5 : null;
};
var fa = function t3(e, r) {
  var a = Tr(e);
  if (a) {
    var i = a.children;
    if (i.length) {
      if (r === "right")
        return t3(i[i.length - 1], "right");
      if (r === "left")
        return t3(i[0], "left");
    }
  }
  return e;
};
var ot = function(t5, e) {
  return t5 ? (e && (t5 = fa(t5, e)), ga[t5.classes[0]] || null) : null;
};
var oe = function(t5, e) {
  var r = ["nulldelimiter"].concat(t5.baseSizingClasses());
  return C0(e.concat(r));
};
var P = function(t5, e, r) {
  if (!t5)
    return C0();
  if (Be[t5.type]) {
    var a = Be[t5.type](t5, e);
    if (r && e.size !== r.size) {
      a = C0(e.sizingClasses(r), [a], e);
      var i = e.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new M("Got group of unknown type: '" + t5.type + "'");
};
function xe(t5, e) {
  var r = C0(["base"], t5, e), a = C0(["strut"]);
  return a.style.height = z(r.height + r.depth), r.depth && (a.style.verticalAlign = z(-r.depth)), r.children.unshift(a), r;
}
function lt(t5, e) {
  var r = null;
  t5.length === 1 && t5[0].type === "tag" && (r = t5[0].tag, t5 = t5[0].body);
  var a = e0(t5, e, "root"), i;
  a.length === 2 && a[1].hasClass("tag") && (i = a.pop());
  for (var s = [], h = [], u = 0; u < a.length; u++)
    if (h.push(a[u]), a[u].hasClass("mbin") || a[u].hasClass("mrel") || a[u].hasClass("allowbreak")) {
      for (var c = false; u < a.length - 1 && a[u + 1].hasClass("mspace") && !a[u + 1].hasClass("newline"); )
        u++, h.push(a[u]), a[u].hasClass("nobreak") && (c = true);
      c || (s.push(xe(h, e)), h = []);
    } else a[u].hasClass("newline") && (h.pop(), h.length > 0 && (s.push(xe(h, e)), h = []), s.push(a[u]));
  h.length > 0 && s.push(xe(h, e));
  var g;
  r ? (g = xe(e0(r, e, true)), g.classes = ["tag"], s.push(g)) : i && s.push(i);
  var v = C0(["katex-html"], s);
  if (v.setAttribute("aria-hidden", "true"), g) {
    var y = g.children[0];
    y.style.height = z(v.height + v.depth), v.depth && (y.style.verticalAlign = z(-v.depth));
  }
  return v;
}
function Br(t5) {
  return new le(t5);
}
var h0 = class {
  constructor(e, r, a) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = r || [], this.classes = a || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, r) {
    this.attributes[e] = r;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
    this.classes.length > 0 && (e.className = V0(this.classes));
    for (var a = 0; a < this.children.length; a++)
      if (this.children[a] instanceof x0 && this.children[a + 1] instanceof x0) {
        for (var i = this.children[a].toText() + this.children[++a].toText(); this.children[a + 1] instanceof x0; )
          i += this.children[++a].toText();
        e.appendChild(new x0(i).toNode());
      } else
        e.appendChild(this.children[a].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="', e += I.escape(this.attributes[r]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + I.escape(V0(this.classes)) + '"'), e += ">";
    for (var a = 0; a < this.children.length; a++)
      e += this.children[a].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
};
var x0 = class {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return I.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
};
var va = class {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", z(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + z(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
};
var S = {
  MathNode: h0,
  TextNode: x0,
  SpaceNode: va,
  newDocumentFragment: Br
};
var g0 = function(t5, e, r) {
  return X[e][t5] && X[e][t5].replace && t5.charCodeAt(0) !== 55349 && !(wr.hasOwnProperty(t5) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (t5 = X[e][t5].replace), new S.TextNode(t5);
};
var vt = function(t5) {
  return t5.length === 1 ? t5[0] : new S.MathNode("mrow", t5);
};
var bt = function(t5, e) {
  if (e.fontFamily === "texttt")
    return "monospace";
  if (e.fontFamily === "textsf")
    return e.fontShape === "textit" && e.fontWeight === "textbf" ? "sans-serif-bold-italic" : e.fontShape === "textit" ? "sans-serif-italic" : e.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (e.fontShape === "textit" && e.fontWeight === "textbf")
    return "bold-italic";
  if (e.fontShape === "textit")
    return "italic";
  if (e.fontWeight === "textbf")
    return "bold";
  var r = e.font;
  if (!r || r === "mathnormal")
    return null;
  var a = t5.mode;
  if (r === "mathit")
    return "italic";
  if (r === "boldsymbol")
    return t5.type === "textord" ? "bold" : "bold-italic";
  if (r === "mathbf")
    return "bold";
  if (r === "mathbb")
    return "double-struck";
  if (r === "mathsfit")
    return "sans-serif-italic";
  if (r === "mathfrak")
    return "fraktur";
  if (r === "mathscr" || r === "mathcal")
    return "script";
  if (r === "mathsf")
    return "sans-serif";
  if (r === "mathtt")
    return "monospace";
  var i = t5.text;
  if (I.contains(["\\imath", "\\jmath"], i))
    return null;
  X[a][i] && X[a][i].replace && (i = X[a][i].replace);
  var s = b.fontMap[r].fontName;
  return dt(i, s, a) ? b.fontMap[r].variant : null;
};
function Ye(t5) {
  if (!t5)
    return false;
  if (t5.type === "mi" && t5.children.length === 1) {
    var e = t5.children[0];
    return e instanceof x0 && e.text === ".";
  } else if (t5.type === "mo" && t5.children.length === 1 && t5.getAttribute("separator") === "true" && t5.getAttribute("lspace") === "0em" && t5.getAttribute("rspace") === "0em") {
    var r = t5.children[0];
    return r instanceof x0 && r.text === ",";
  } else
    return false;
}
var o0 = function(t5, e, r) {
  if (t5.length === 1) {
    var a = _(t5[0], e);
    return r && a instanceof h0 && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], s, h = 0; h < t5.length; h++) {
    var u = _(t5[h], e);
    if (u instanceof h0 && s instanceof h0) {
      if (u.type === "mtext" && s.type === "mtext" && u.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...u.children);
        continue;
      } else if (u.type === "mn" && s.type === "mn") {
        s.children.push(...u.children);
        continue;
      } else if (Ye(u) && s.type === "mn") {
        s.children.push(...u.children);
        continue;
      } else if (u.type === "mn" && Ye(s))
        u.children = [...s.children, ...u.children], i.pop();
      else if ((u.type === "msup" || u.type === "msub") && u.children.length >= 1 && (s.type === "mn" || Ye(s))) {
        var c = u.children[0];
        c instanceof h0 && c.type === "mn" && (c.children = [...s.children, ...c.children], i.pop());
      } else if (s.type === "mi" && s.children.length === 1) {
        var g = s.children[0];
        if (g instanceof x0 && g.text === "̸" && (u.type === "mo" || u.type === "mi" || u.type === "mn")) {
          var v = u.children[0];
          v instanceof x0 && v.text.length > 0 && (v.text = v.text.slice(0, 1) + "̸" + v.text.slice(1), i.pop());
        }
      }
    }
    i.push(u), s = u;
  }
  return i;
};
var F0 = function(t5, e, r) {
  return vt(o0(t5, e, r));
};
var _ = function(t5, e) {
  if (!t5)
    return new S.MathNode("mrow");
  if (qe[t5.type]) {
    var r = qe[t5.type](t5, e);
    return r;
  } else
    throw new M("Got group of unknown type: '" + t5.type + "'");
};
function Xt(t5, e, r, a, i) {
  var s = o0(t5, r), h;
  s.length === 1 && s[0] instanceof h0 && I.contains(["mrow", "mtable"], s[0].type) ? h = s[0] : h = new S.MathNode("mrow", s);
  var u = new S.MathNode("annotation", [new S.TextNode(e)]);
  u.setAttribute("encoding", "application/x-tex");
  var c = new S.MathNode("semantics", [h, u]), g = new S.MathNode("math", [c]);
  g.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), a && g.setAttribute("display", "block");
  var v = i ? "katex" : "katex-mathml";
  return b.makeSpan([v], [g]);
}
var qr = function(t5) {
  return new A0({
    style: t5.displayMode ? O.DISPLAY : O.TEXT,
    maxSize: t5.maxSize,
    minRuleThickness: t5.minRuleThickness
  });
};
var Cr = function(t5, e) {
  if (e.displayMode) {
    var r = ["katex-display"];
    e.leqno && r.push("leqno"), e.fleqn && r.push("fleqn"), t5 = b.makeSpan(r, [t5]);
  }
  return t5;
};
var ba = function(t5, e, r) {
  var a = qr(r), i;
  if (r.output === "mathml")
    return Xt(t5, e, a, r.displayMode, true);
  if (r.output === "html") {
    var s = lt(t5, a);
    i = b.makeSpan(["katex"], [s]);
  } else {
    var h = Xt(t5, e, a, r.displayMode, false), u = lt(t5, a);
    i = b.makeSpan(["katex"], [h, u]);
  }
  return Cr(i, r);
};
var ya = function(t5, e, r) {
  var a = qr(r), i = lt(t5, a), s = b.makeSpan(["katex"], [i]);
  return Cr(s, r);
};
var xa = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
};
var wa = function(t5) {
  var e = new S.MathNode("mo", [new S.TextNode(xa[t5.replace(/^\\/, "")])]);
  return e.setAttribute("stretchy", "true"), e;
};
var ka = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
};
var Sa = function(t5) {
  return t5.type === "ordgroup" ? t5.body.length : 1;
};
var Ma = function(t5, e) {
  function r() {
    var h = 4e5, u = t5.label.slice(1);
    if (I.contains(["widehat", "widecheck", "widetilde", "utilde"], u)) {
      var c = t5, g = Sa(c.base), v, y, x;
      if (g > 5)
        u === "widehat" || u === "widecheck" ? (v = 420, h = 2364, x = 0.42, y = u + "4") : (v = 312, h = 2340, x = 0.34, y = "tilde4");
      else {
        var w = [1, 1, 2, 2, 3, 3][g];
        u === "widehat" || u === "widecheck" ? (h = [0, 1062, 2364, 2364, 2364][w], v = [0, 239, 300, 360, 420][w], x = [0, 0.24, 0.3, 0.3, 0.36, 0.42][w], y = u + w) : (h = [0, 600, 1033, 2339, 2340][w], v = [0, 260, 286, 306, 312][w], x = [0, 0.26, 0.286, 0.3, 0.306, 0.34][w], y = "tilde" + w);
      }
      var A = new P0(y), T = new q0([A], {
        width: "100%",
        height: z(x),
        viewBox: "0 0 " + h + " " + v,
        preserveAspectRatio: "none"
      });
      return {
        span: b.makeSvgSpan([], [T], e),
        minWidth: 0,
        height: x
      };
    } else {
      var C = [], N = ka[u], [R, U, L] = N, F = L / 1e3, V = R.length, G, W;
      if (V === 1) {
        var M0 = N[3];
        G = ["hide-tail"], W = [M0];
      } else if (V === 2)
        G = ["halfarrow-left", "halfarrow-right"], W = ["xMinYMin", "xMaxYMin"];
      else if (V === 3)
        G = ["brace-left", "brace-center", "brace-right"], W = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + V + " children.");
      for (var t0 = 0; t0 < V; t0++) {
        var J = new P0(R[t0]), U0 = new q0([J], {
          width: "400em",
          height: z(F),
          viewBox: "0 0 " + h + " " + L,
          preserveAspectRatio: W[t0] + " slice"
        }), n0 = b.makeSvgSpan([G[t0]], [U0], e);
        if (V === 1)
          return {
            span: n0,
            minWidth: U,
            height: F
          };
        n0.style.height = z(F), C.push(n0);
      }
      return {
        span: b.makeSpan(["stretchy"], C, e),
        minWidth: U,
        height: F
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: s
  } = r();
  return a.height = s, a.style.height = z(s), i > 0 && (a.style.minWidth = z(i)), a;
};
var za = function(t5, e, r, a, i) {
  var s, h = t5.height + t5.depth + r + a;
  if (/fbox|color|angl/.test(e)) {
    if (s = b.makeSpan(["stretchy", e], [], i), e === "fbox") {
      var u = i.color && i.getColor();
      u && (s.style.borderColor = u);
    }
  } else {
    var c = [];
    /^[bx]cancel$/.test(e) && c.push(new nt({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(e) && c.push(new nt({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var g = new q0(c, {
      width: "100%",
      height: z(h)
    });
    s = b.makeSvgSpan([], [g], i);
  }
  return s.height = h, s.style.height = z(h), s;
};
var N0 = {
  encloseSpan: za,
  mathMLnode: wa,
  svgSpan: Ma
};
function D(t5, e) {
  if (!t5 || t5.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (t5 ? "node of type " + t5.type : String(t5)));
  return t5;
}
function yt(t5) {
  var e = Re(t5);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (t5 ? "node of type " + t5.type : String(t5)));
  return e;
}
function Re(t5) {
  return t5 && (t5.type === "atom" || Z1.hasOwnProperty(t5.type)) ? t5 : null;
}
var xt = (t5, e) => {
  var r, a, i;
  t5 && t5.type === "supsub" ? (a = D(t5.base, "accent"), r = a.base, t5.base = r, i = $1(P(t5, e)), t5.base = a) : (a = D(t5, "accent"), r = a.base);
  var s = P(r, e.havingCrampedStyle()), h = a.isShifty && I.isCharacterBox(r), u = 0;
  if (h) {
    var c = I.getBaseElem(r), g = P(c, e.havingCrampedStyle());
    u = Vt(g).skew;
  }
  var v = a.label === "\\c", y = v ? s.height + s.depth : Math.min(s.height, e.fontMetrics().xHeight), x;
  if (a.isStretchy)
    x = N0.svgSpan(a, e), x = b.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: s
      }, {
        type: "elem",
        elem: x,
        wrapperClasses: ["svg-align"],
        wrapperStyle: u > 0 ? {
          width: "calc(100% - " + z(2 * u) + ")",
          marginLeft: z(2 * u)
        } : void 0
      }]
    }, e);
  else {
    var w, A;
    a.label === "\\vec" ? (w = b.staticSvg("vec", e), A = b.svgData.vec[1]) : (w = b.makeOrd({
      mode: a.mode,
      text: a.label
    }, e, "textord"), w = Vt(w), w.italic = 0, A = w.width, v && (y += w.depth)), x = b.makeSpan(["accent-body"], [w]);
    var T = a.label === "\\textcircled";
    T && (x.classes.push("accent-full"), y = s.height);
    var C = u;
    T || (C -= A / 2), x.style.left = z(C), a.label === "\\textcircled" && (x.style.top = ".2em"), x = b.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: -y
      }, {
        type: "elem",
        elem: x
      }]
    }, e);
  }
  var N = b.makeSpan(["mord", "accent"], [x], e);
  return i ? (i.children[0] = N, i.height = Math.max(N.height, i.height), i.classes[0] = "mord", i) : N;
};
var Nr = (t5, e) => {
  var r = t5.isStretchy ? N0.mathMLnode(t5.label) : new S.MathNode("mo", [g0(t5.label, t5.mode)]), a = new S.MathNode("mover", [_(t5.base, e), r]);
  return a.setAttribute("accent", "true"), a;
};
var Aa = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((t5) => "\\" + t5).join("|"));
B({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (t5, e) => {
    var r = Ce(e[0]), a = !Aa.test(t5.funcName), i = !a || t5.funcName === "\\widehat" || t5.funcName === "\\widetilde" || t5.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: t5.parser.mode,
      label: t5.funcName,
      isStretchy: a,
      isShifty: i,
      base: r
    };
  },
  htmlBuilder: xt,
  mathmlBuilder: Nr
});
B({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: true,
    allowedInMath: true,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (t5, e) => {
    var r = e[0], a = t5.parser.mode;
    return a === "math" && (t5.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + t5.funcName + " works only in text mode"), a = "text"), {
      type: "accent",
      mode: a,
      label: t5.funcName,
      isStretchy: false,
      isShifty: true,
      base: r
    };
  },
  htmlBuilder: xt,
  mathmlBuilder: Nr
});
B({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0];
    return {
      type: "accentUnder",
      mode: r.mode,
      label: a,
      base: i
    };
  },
  htmlBuilder: (t5, e) => {
    var r = P(t5.base, e), a = N0.svgSpan(t5, e), i = t5.label === "\\utilde" ? 0.12 : 0, s = b.makeVList({
      positionType: "top",
      positionData: r.height,
      children: [{
        type: "elem",
        elem: a,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: r
      }]
    }, e);
    return b.makeSpan(["mord", "accentunder"], [s], e);
  },
  mathmlBuilder: (t5, e) => {
    var r = N0.mathMLnode(t5.label), a = new S.MathNode("munder", [_(t5.base, e), r]);
    return a.setAttribute("accentunder", "true"), a;
  }
});
var we = (t5) => {
  var e = new S.MathNode("mpadded", t5 ? [t5] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
B({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(t5, e, r) {
    var {
      parser: a,
      funcName: i
    } = t5;
    return {
      type: "xArrow",
      mode: a.mode,
      label: i,
      body: e[0],
      below: r[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(t5, e) {
    var r = e.style, a = e.havingStyle(r.sup()), i = b.wrapFragment(P(t5.body, a, e), e), s = t5.label.slice(0, 2) === "\\x" ? "x" : "cd";
    i.classes.push(s + "-arrow-pad");
    var h;
    t5.below && (a = e.havingStyle(r.sub()), h = b.wrapFragment(P(t5.below, a, e), e), h.classes.push(s + "-arrow-pad"));
    var u = N0.svgSpan(t5, e), c = -e.fontMetrics().axisHeight + 0.5 * u.height, g = -e.fontMetrics().axisHeight - 0.5 * u.height - 0.111;
    (i.depth > 0.25 || t5.label === "\\xleftequilibrium") && (g -= i.depth);
    var v;
    if (h) {
      var y = -e.fontMetrics().axisHeight + h.height + 0.5 * u.height + 0.111;
      v = b.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: g
        }, {
          type: "elem",
          elem: u,
          shift: c
        }, {
          type: "elem",
          elem: h,
          shift: y
        }]
      }, e);
    } else
      v = b.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: g
        }, {
          type: "elem",
          elem: u,
          shift: c
        }]
      }, e);
    return v.children[0].children[0].children[1].classes.push("svg-align"), b.makeSpan(["mrel", "x-arrow"], [v], e);
  },
  mathmlBuilder(t5, e) {
    var r = N0.mathMLnode(t5.label);
    r.setAttribute("minsize", t5.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var a;
    if (t5.body) {
      var i = we(_(t5.body, e));
      if (t5.below) {
        var s = we(_(t5.below, e));
        a = new S.MathNode("munderover", [r, s, i]);
      } else
        a = new S.MathNode("mover", [r, i]);
    } else if (t5.below) {
      var h = we(_(t5.below, e));
      a = new S.MathNode("munder", [r, h]);
    } else
      a = we(), a = new S.MathNode("mover", [r, a]);
    return a;
  }
});
var Ta = b.makeSpan;
function Ir(t5, e) {
  var r = e0(t5.body, e, true);
  return Ta([t5.mclass], r, e);
}
function Rr(t5, e) {
  var r, a = o0(t5.body, e);
  return t5.mclass === "minner" ? r = new S.MathNode("mpadded", a) : t5.mclass === "mord" ? t5.isCharacterBox ? (r = a[0], r.type = "mi") : r = new S.MathNode("mi", a) : (t5.isCharacterBox ? (r = a[0], r.type = "mo") : r = new S.MathNode("mo", a), t5.mclass === "mbin" ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : t5.mclass === "mpunct" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : t5.mclass === "mopen" || t5.mclass === "mclose" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0em") : t5.mclass === "minner" && (r.attributes.lspace = "0.0556em", r.attributes.width = "+0.1111em")), r;
}
B({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0];
    return {
      type: "mclass",
      mode: r.mode,
      mclass: "m" + a.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: K(i),
      isCharacterBox: I.isCharacterBox(i)
    };
  },
  htmlBuilder: Ir,
  mathmlBuilder: Rr
});
var He = (t5) => {
  var e = t5.type === "ordgroup" && t5.body.length ? t5.body[0] : t5;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
B({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5;
    return {
      type: "mclass",
      mode: r.mode,
      mclass: He(e[0]),
      body: K(e[1]),
      isCharacterBox: I.isCharacterBox(e[1])
    };
  }
});
B({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[1], s = e[0], h;
    a !== "\\stackrel" ? h = He(i) : h = "mrel";
    var u = {
      type: "op",
      mode: i.mode,
      limits: true,
      alwaysHandleSupSub: true,
      parentIsSupSub: false,
      symbol: false,
      suppressBaseShift: a !== "\\stackrel",
      body: K(i)
    }, c = {
      type: "supsub",
      mode: s.mode,
      base: u,
      sup: a === "\\underset" ? null : s,
      sub: a === "\\underset" ? s : null
    };
    return {
      type: "mclass",
      mode: r.mode,
      mclass: h,
      body: [c],
      isCharacterBox: I.isCharacterBox(c)
    };
  },
  htmlBuilder: Ir,
  mathmlBuilder: Rr
});
B({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5;
    return {
      type: "pmb",
      mode: r.mode,
      mclass: He(e[0]),
      body: K(e[0])
    };
  },
  htmlBuilder(t5, e) {
    var r = e0(t5.body, e, true), a = b.makeSpan([t5.mclass], r, e);
    return a.style.textShadow = "0.02em 0.01em 0.04px", a;
  },
  mathmlBuilder(t5, e) {
    var r = o0(t5.body, e), a = new S.MathNode("mstyle", r);
    return a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), a;
  }
});
var Ba = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
};
var Yt = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
});
var $t = (t5) => t5.type === "textord" && t5.text === "@";
var qa = (t5, e) => (t5.type === "mathord" || t5.type === "atom") && t5.text === e;
function Ca(t5, e, r) {
  var a = Ba[t5];
  switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return r.callFunction(a, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var i = r.callFunction("\\\\cdleft", [e[0]], []), s = {
        type: "atom",
        text: a,
        mode: "math",
        family: "rel"
      }, h = r.callFunction("\\Big", [s], []), u = r.callFunction("\\\\cdright", [e[1]], []), c = {
        type: "ordgroup",
        mode: "math",
        body: [i, h, u]
      };
      return r.callFunction("\\\\cdparent", [c], []);
    }
    case "\\\\cdlongequal":
      return r.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var g = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return r.callFunction("\\Big", [g], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Na(t5) {
  var e = [];
  for (t5.gullet.beginGroup(), t5.gullet.macros.set("\\cr", "\\\\\\relax"), t5.gullet.beginGroup(); ; ) {
    e.push(t5.parseExpression(false, "\\\\")), t5.gullet.endGroup(), t5.gullet.beginGroup();
    var r = t5.fetch().text;
    if (r === "&" || r === "\\\\")
      t5.consume();
    else if (r === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new M("Expected \\\\ or \\cr or \\end", t5.nextToken);
  }
  for (var a = [], i = [a], s = 0; s < e.length; s++) {
    for (var h = e[s], u = Yt(), c = 0; c < h.length; c++)
      if (!$t(h[c]))
        u.body.push(h[c]);
      else {
        a.push(u), c += 1;
        var g = yt(h[c]).text, v = new Array(2);
        if (v[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, v[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(g) > -1)) if ("<>AV".indexOf(g) > -1)
          for (var y = 0; y < 2; y++) {
            for (var x = true, w = c + 1; w < h.length; w++) {
              if (qa(h[w], g)) {
                x = false, c = w;
                break;
              }
              if ($t(h[w]))
                throw new M("Missing a " + g + " character to complete a CD arrow.", h[w]);
              v[y].body.push(h[w]);
            }
            if (x)
              throw new M("Missing a " + g + " character to complete a CD arrow.", h[c]);
          }
        else
          throw new M('Expected one of "<>AV=|." after @', h[c]);
        var A = Ca(g, v, t5), T = {
          type: "styling",
          body: [A],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        a.push(T), u = Yt();
      }
    s % 2 === 0 ? a.push(u) : a.shift(), a = [], i.push(a);
  }
  t5.gullet.endGroup(), t5.gullet.endGroup();
  var C = new Array(i[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: i,
    arraystretch: 1,
    addJot: true,
    rowGaps: [null],
    cols: C,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(i.length + 1).fill([])
  };
}
B({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a
    } = t5;
    return {
      type: "cdlabel",
      mode: r.mode,
      side: a.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(t5, e) {
    var r = e.havingStyle(e.style.sup()), a = b.wrapFragment(P(t5.label, r, e), e);
    return a.classes.push("cd-label-" + t5.side), a.style.bottom = z(0.8 - a.depth), a.height = 0, a.depth = 0, a;
  },
  mathmlBuilder(t5, e) {
    var r = new S.MathNode("mrow", [_(t5.label, e)]);
    return r = new S.MathNode("mpadded", [r]), r.setAttribute("width", "0"), t5.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new S.MathNode("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
  }
});
B({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5;
    return {
      type: "cdlabelparent",
      mode: r.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(t5, e) {
    var r = b.wrapFragment(P(t5.fragment, e), e);
    return r.classes.push("cd-vert-arrow"), r;
  },
  mathmlBuilder(t5, e) {
    return new S.MathNode("mrow", [_(t5.fragment, e)]);
  }
});
B({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(t5, e) {
    for (var {
      parser: r
    } = t5, a = D(e[0], "ordgroup"), i = a.body, s = "", h = 0; h < i.length; h++) {
      var u = D(i[h], "textord");
      s += u.text;
    }
    var c = parseInt(s), g;
    if (isNaN(c))
      throw new M("\\@char has non-numeric argument " + s);
    if (c < 0 || c >= 1114111)
      throw new M("\\@char with invalid code point " + s);
    return c <= 65535 ? g = String.fromCharCode(c) : (c -= 65536, g = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), {
      type: "textord",
      mode: r.mode,
      text: g
    };
  }
});
var Hr = (t5, e) => {
  var r = e0(t5.body, e.withColor(t5.color), false);
  return b.makeFragment(r);
};
var Or = (t5, e) => {
  var r = o0(t5.body, e.withColor(t5.color)), a = new S.MathNode("mstyle", r);
  return a.setAttribute("mathcolor", t5.color), a;
};
B({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: true,
    argTypes: ["color", "original"]
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5, a = D(e[0], "color-token").color, i = e[1];
    return {
      type: "color",
      mode: r.mode,
      color: a,
      body: K(i)
    };
  },
  htmlBuilder: Hr,
  mathmlBuilder: Or
});
B({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: true,
    argTypes: ["color"]
  },
  handler(t5, e) {
    var {
      parser: r,
      breakOnTokenText: a
    } = t5, i = D(e[0], "color-token").color;
    r.gullet.macros.set("\\current@color", i);
    var s = r.parseExpression(true, a);
    return {
      type: "color",
      mode: r.mode,
      color: i,
      body: s
    };
  },
  htmlBuilder: Hr,
  mathmlBuilder: Or
});
B({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: true
  },
  handler(t5, e, r) {
    var {
      parser: a
    } = t5, i = a.gullet.future().text === "[" ? a.parseSizeGroup(true) : null, s = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: a.mode,
      newLine: s,
      size: i && D(i, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(t5, e) {
    var r = b.makeSpan(["mspace"], [], e);
    return t5.newLine && (r.classes.push("newline"), t5.size && (r.style.marginTop = z(j(t5.size, e)))), r;
  },
  mathmlBuilder(t5, e) {
    var r = new S.MathNode("mspace");
    return t5.newLine && (r.setAttribute("linebreak", "newline"), t5.size && r.setAttribute("height", z(j(t5.size, e)))), r;
  }
});
var ht = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
};
var Er = (t5) => {
  var e = t5.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new M("Expected a control sequence", t5);
  return e;
};
var Ia = (t5) => {
  var e = t5.gullet.popToken();
  return e.text === "=" && (e = t5.gullet.popToken(), e.text === " " && (e = t5.gullet.popToken())), e;
};
var Dr = (t5, e, r, a) => {
  var i = t5.gullet.macros.get(r.text);
  i == null && (r.noexpand = true, i = {
    tokens: [r],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !t5.gullet.isExpandable(r.text)
  }), t5.gullet.macros.set(e, i, a);
};
B({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler(t5) {
    var {
      parser: e,
      funcName: r
    } = t5;
    e.consumeSpaces();
    var a = e.fetch();
    if (ht[a.text])
      return (r === "\\global" || r === "\\\\globallong") && (a.text = ht[a.text]), D(e.parseFunction(), "internal");
    throw new M("Invalid token after macro prefix", a);
  }
});
B({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(t5) {
    var {
      parser: e,
      funcName: r
    } = t5, a = e.gullet.popToken(), i = a.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(i))
      throw new M("Expected a control sequence", a);
    for (var s = 0, h, u = [[]]; e.gullet.future().text !== "{"; )
      if (a = e.gullet.popToken(), a.text === "#") {
        if (e.gullet.future().text === "{") {
          h = e.gullet.future(), u[s].push("{");
          break;
        }
        if (a = e.gullet.popToken(), !/^[1-9]$/.test(a.text))
          throw new M('Invalid argument number "' + a.text + '"');
        if (parseInt(a.text) !== s + 1)
          throw new M('Argument number "' + a.text + '" out of order');
        s++, u.push([]);
      } else {
        if (a.text === "EOF")
          throw new M("Expected a macro definition");
        u[s].push(a.text);
      }
    var {
      tokens: c
    } = e.gullet.consumeArg();
    return h && c.unshift(h), (r === "\\edef" || r === "\\xdef") && (c = e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(i, {
      tokens: c,
      numArgs: s,
      delimiters: u
    }, r === ht[r]), {
      type: "internal",
      mode: e.mode
    };
  }
});
B({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(t5) {
    var {
      parser: e,
      funcName: r
    } = t5, a = Er(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var i = Ia(e);
    return Dr(e, a, i, r === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
B({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(t5) {
    var {
      parser: e,
      funcName: r
    } = t5, a = Er(e.gullet.popToken()), i = e.gullet.popToken(), s = e.gullet.popToken();
    return Dr(e, a, s, r === "\\\\globalfuture"), e.gullet.pushToken(s), e.gullet.pushToken(i), {
      type: "internal",
      mode: e.mode
    };
  }
});
var ie = function(t5, e, r) {
  var a = X.math[t5] && X.math[t5].replace, i = dt(a || t5, e, r);
  if (!i)
    throw new Error("Unsupported symbol " + t5 + " and font size " + e + ".");
  return i;
};
var wt = function(t5, e, r, a) {
  var i = r.havingBaseStyle(e), s = b.makeSpan(a.concat(i.sizingClasses(r)), [t5], r), h = i.sizeMultiplier / r.sizeMultiplier;
  return s.height *= h, s.depth *= h, s.maxFontSize = i.sizeMultiplier, s;
};
var Lr = function(t5, e, r) {
  var a = e.havingBaseStyle(r), i = (1 - e.sizeMultiplier / a.sizeMultiplier) * e.fontMetrics().axisHeight;
  t5.classes.push("delimcenter"), t5.style.top = z(i), t5.height -= i, t5.depth += i;
};
var Ra = function(t5, e, r, a, i, s) {
  var h = b.makeSymbol(t5, "Main-Regular", i, a), u = wt(h, e, a, s);
  return r && Lr(u, a, e), u;
};
var Ha = function(t5, e, r, a) {
  return b.makeSymbol(t5, "Size" + e + "-Regular", r, a);
};
var Vr = function(t5, e, r, a, i, s) {
  var h = Ha(t5, e, i, a), u = wt(b.makeSpan(["delimsizing", "size" + e], [h], a), O.TEXT, a, s);
  return r && Lr(u, a, O.TEXT), u;
};
var $e = function(t5, e, r) {
  var a;
  e === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = b.makeSpan(["delimsizinginner", a], [b.makeSpan([], [b.makeSymbol(t5, e, r)])]);
  return {
    type: "elem",
    elem: i
  };
};
var je = function(t5, e, r) {
  var a = y0["Size4-Regular"][t5.charCodeAt(0)] ? y0["Size4-Regular"][t5.charCodeAt(0)][4] : y0["Size1-Regular"][t5.charCodeAt(0)][4], i = new P0("inner", V1(t5, Math.round(1e3 * e))), s = new q0([i], {
    width: z(a),
    height: z(e),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + z(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * e),
    preserveAspectRatio: "xMinYMin"
  }), h = b.makeSvgSpan([], [s], r);
  return h.height = e, h.style.height = z(e), h.style.width = z(a), {
    type: "elem",
    elem: h
  };
};
var ut = 8e-3;
var ke = {
  type: "kern",
  size: -1 * ut
};
var Oa = ["|", "\\lvert", "\\rvert", "\\vert"];
var Ea = ["\\|", "\\lVert", "\\rVert", "\\Vert"];
var Pr = function(t5, e, r, a, i, s) {
  var h, u, c, g, v = "", y = 0;
  h = c = g = t5, u = null;
  var x = "Size1-Regular";
  t5 === "\\uparrow" ? c = g = "⏐" : t5 === "\\Uparrow" ? c = g = "‖" : t5 === "\\downarrow" ? h = c = "⏐" : t5 === "\\Downarrow" ? h = c = "‖" : t5 === "\\updownarrow" ? (h = "\\uparrow", c = "⏐", g = "\\downarrow") : t5 === "\\Updownarrow" ? (h = "\\Uparrow", c = "‖", g = "\\Downarrow") : I.contains(Oa, t5) ? (c = "∣", v = "vert", y = 333) : I.contains(Ea, t5) ? (c = "∥", v = "doublevert", y = 556) : t5 === "[" || t5 === "\\lbrack" ? (h = "⎡", c = "⎢", g = "⎣", x = "Size4-Regular", v = "lbrack", y = 667) : t5 === "]" || t5 === "\\rbrack" ? (h = "⎤", c = "⎥", g = "⎦", x = "Size4-Regular", v = "rbrack", y = 667) : t5 === "\\lfloor" || t5 === "⌊" ? (c = h = "⎢", g = "⎣", x = "Size4-Regular", v = "lfloor", y = 667) : t5 === "\\lceil" || t5 === "⌈" ? (h = "⎡", c = g = "⎢", x = "Size4-Regular", v = "lceil", y = 667) : t5 === "\\rfloor" || t5 === "⌋" ? (c = h = "⎥", g = "⎦", x = "Size4-Regular", v = "rfloor", y = 667) : t5 === "\\rceil" || t5 === "⌉" ? (h = "⎤", c = g = "⎥", x = "Size4-Regular", v = "rceil", y = 667) : t5 === "(" || t5 === "\\lparen" ? (h = "⎛", c = "⎜", g = "⎝", x = "Size4-Regular", v = "lparen", y = 875) : t5 === ")" || t5 === "\\rparen" ? (h = "⎞", c = "⎟", g = "⎠", x = "Size4-Regular", v = "rparen", y = 875) : t5 === "\\{" || t5 === "\\lbrace" ? (h = "⎧", u = "⎨", g = "⎩", c = "⎪", x = "Size4-Regular") : t5 === "\\}" || t5 === "\\rbrace" ? (h = "⎫", u = "⎬", g = "⎭", c = "⎪", x = "Size4-Regular") : t5 === "\\lgroup" || t5 === "⟮" ? (h = "⎧", g = "⎩", c = "⎪", x = "Size4-Regular") : t5 === "\\rgroup" || t5 === "⟯" ? (h = "⎫", g = "⎭", c = "⎪", x = "Size4-Regular") : t5 === "\\lmoustache" || t5 === "⎰" ? (h = "⎧", g = "⎭", c = "⎪", x = "Size4-Regular") : (t5 === "\\rmoustache" || t5 === "⎱") && (h = "⎫", g = "⎩", c = "⎪", x = "Size4-Regular");
  var w = ie(h, x, i), A = w.height + w.depth, T = ie(c, x, i), C = T.height + T.depth, N = ie(g, x, i), R = N.height + N.depth, U = 0, L = 1;
  if (u !== null) {
    var F = ie(u, x, i);
    U = F.height + F.depth, L = 2;
  }
  var V = A + R + U, G = Math.max(0, Math.ceil((e - V) / (L * C))), W = V + G * L * C, M0 = a.fontMetrics().axisHeight;
  r && (M0 *= a.sizeMultiplier);
  var t0 = W / 2 - M0, J = [];
  if (v.length > 0) {
    var U0 = W - A - R, n0 = Math.round(W * 1e3), f0 = P1(v, Math.round(U0 * 1e3)), R0 = new P0(v, f0), Y0 = (y / 1e3).toFixed(3) + "em", $0 = (n0 / 1e3).toFixed(3) + "em", Le = new q0([R0], {
      width: Y0,
      height: $0,
      viewBox: "0 0 " + y + " " + n0
    }), H0 = b.makeSvgSpan([], [Le], a);
    H0.height = n0 / 1e3, H0.style.width = Y0, H0.style.height = $0, J.push({
      type: "elem",
      elem: H0
    });
  } else {
    if (J.push($e(g, x, i)), J.push(ke), u === null) {
      var O0 = W - A - R + 2 * ut;
      J.push(je(c, O0, a));
    } else {
      var m0 = (W - A - R - U) / 2 + 2 * ut;
      J.push(je(c, m0, a)), J.push(ke), J.push($e(u, x, i)), J.push(ke), J.push(je(c, m0, a));
    }
    J.push(ke), J.push($e(h, x, i));
  }
  var ae = a.havingBaseStyle(O.TEXT), Ve = b.makeVList({
    positionType: "bottom",
    positionData: t0,
    children: J
  }, ae);
  return wt(b.makeSpan(["delimsizing", "mult"], [Ve], ae), O.TEXT, a, s);
};
var Ze = 80;
var Ke = 0.08;
var Qe = function(t5, e, r, a, i) {
  var s = L1(t5, a, r), h = new P0(t5, s), u = new q0([h], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: z(e),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return b.makeSvgSpan(["hide-tail"], [u], i);
};
var Da = function(t5, e) {
  var r = e.havingBaseSizing(), a = Wr("\\surd", t5 * r.sizeMultiplier, Ur, r), i = r.sizeMultiplier, s = Math.max(0, e.minRuleThickness - e.fontMetrics().sqrtRuleThickness), h, u = 0, c = 0, g = 0, v;
  return a.type === "small" ? (g = 1e3 + 1e3 * s + Ze, t5 < 1 ? i = 1 : t5 < 1.4 && (i = 0.7), u = (1 + s + Ke) / i, c = (1 + s) / i, h = Qe("sqrtMain", u, g, s, e), h.style.minWidth = "0.853em", v = 0.833 / i) : a.type === "large" ? (g = (1e3 + Ze) * ne[a.size], c = (ne[a.size] + s) / i, u = (ne[a.size] + s + Ke) / i, h = Qe("sqrtSize" + a.size, u, g, s, e), h.style.minWidth = "1.02em", v = 1 / i) : (u = t5 + s + Ke, c = t5 + s, g = Math.floor(1e3 * t5 + s) + Ze, h = Qe("sqrtTall", u, g, s, e), h.style.minWidth = "0.742em", v = 1.056), h.height = c, h.style.height = z(u), {
    span: h,
    advanceWidth: v,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (e.fontMetrics().sqrtRuleThickness + s) * i
  };
};
var Fr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"];
var La = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"];
var Gr = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"];
var ne = [0, 1.2, 1.8, 2.4, 3];
var Va = function(t5, e, r, a, i) {
  if (t5 === "<" || t5 === "\\lt" || t5 === "⟨" ? t5 = "\\langle" : (t5 === ">" || t5 === "\\gt" || t5 === "⟩") && (t5 = "\\rangle"), I.contains(Fr, t5) || I.contains(Gr, t5))
    return Vr(t5, e, false, r, a, i);
  if (I.contains(La, t5))
    return Pr(t5, ne[e], false, r, a, i);
  throw new M("Illegal delimiter: '" + t5 + "'");
};
var Pa = [{
  type: "small",
  style: O.SCRIPTSCRIPT
}, {
  type: "small",
  style: O.SCRIPT
}, {
  type: "small",
  style: O.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}];
var Fa = [{
  type: "small",
  style: O.SCRIPTSCRIPT
}, {
  type: "small",
  style: O.SCRIPT
}, {
  type: "small",
  style: O.TEXT
}, {
  type: "stack"
}];
var Ur = [{
  type: "small",
  style: O.SCRIPTSCRIPT
}, {
  type: "small",
  style: O.SCRIPT
}, {
  type: "small",
  style: O.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}];
var Ga = function(t5) {
  if (t5.type === "small")
    return "Main-Regular";
  if (t5.type === "large")
    return "Size" + t5.size + "-Regular";
  if (t5.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + t5.type + "' here.");
};
var Wr = function(t5, e, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), s = i; s < r.length && r[s].type !== "stack"; s++) {
    var h = ie(t5, Ga(r[s]), "math"), u = h.height + h.depth;
    if (r[s].type === "small") {
      var c = a.havingBaseStyle(r[s].style);
      u *= c.sizeMultiplier;
    }
    if (u > e)
      return r[s];
  }
  return r[r.length - 1];
};
var _r = function(t5, e, r, a, i, s) {
  t5 === "<" || t5 === "\\lt" || t5 === "⟨" ? t5 = "\\langle" : (t5 === ">" || t5 === "\\gt" || t5 === "⟩") && (t5 = "\\rangle");
  var h;
  I.contains(Gr, t5) ? h = Pa : I.contains(Fr, t5) ? h = Ur : h = Fa;
  var u = Wr(t5, e, h, a);
  return u.type === "small" ? Ra(t5, u.style, r, a, i, s) : u.type === "large" ? Vr(t5, u.size, r, a, i, s) : Pr(t5, e, r, a, i, s);
};
var Ua = function(t5, e, r, a, i, s) {
  var h = a.fontMetrics().axisHeight * a.sizeMultiplier, u = 901, c = 5 / a.fontMetrics().ptPerEm, g = Math.max(e - h, r + h), v = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    g / 500 * u,
    2 * g - c
  );
  return _r(t5, v, true, a, i, s);
};
var B0 = {
  sqrtImage: Da,
  sizedDelim: Va,
  sizeToMaxHeight: ne,
  customSizedDelim: _r,
  leftRightDelim: Ua
};
var jt = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
};
var Wa = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Oe(t5, e) {
  var r = Re(t5);
  if (r && I.contains(Wa, r.text))
    return r;
  throw r ? new M("Invalid delimiter '" + r.text + "' after '" + e.funcName + "'", t5) : new M("Invalid delimiter type '" + t5.type + "'", t5);
}
B({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (t5, e) => {
    var r = Oe(e[0], t5);
    return {
      type: "delimsizing",
      mode: t5.parser.mode,
      size: jt[t5.funcName].size,
      mclass: jt[t5.funcName].mclass,
      delim: r.text
    };
  },
  htmlBuilder: (t5, e) => t5.delim === "." ? b.makeSpan([t5.mclass]) : B0.sizedDelim(t5.delim, t5.size, e, t5.mode, [t5.mclass]),
  mathmlBuilder: (t5) => {
    var e = [];
    t5.delim !== "." && e.push(g0(t5.delim, t5.mode));
    var r = new S.MathNode("mo", e);
    t5.mclass === "mopen" || t5.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
    var a = z(B0.sizeToMaxHeight[t5.size]);
    return r.setAttribute("minsize", a), r.setAttribute("maxsize", a), r;
  }
});
function Zt(t5) {
  if (!t5.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
B({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: (t5, e) => {
    var r = t5.parser.gullet.macros.get("\\current@color");
    if (r && typeof r != "string")
      throw new M("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: t5.parser.mode,
      delim: Oe(e[0], t5).text,
      color: r
      // undefined if not set via \color
    };
  }
});
B({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: (t5, e) => {
    var r = Oe(e[0], t5), a = t5.parser;
    ++a.leftrightDepth;
    var i = a.parseExpression(false);
    --a.leftrightDepth, a.expect("\\right", false);
    var s = D(a.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: a.mode,
      body: i,
      left: r.text,
      right: s.delim,
      rightColor: s.color
    };
  },
  htmlBuilder: (t5, e) => {
    Zt(t5);
    for (var r = e0(t5.body, e, true, ["mopen", "mclose"]), a = 0, i = 0, s = false, h = 0; h < r.length; h++)
      r[h].isMiddle ? s = true : (a = Math.max(r[h].height, a), i = Math.max(r[h].depth, i));
    a *= e.sizeMultiplier, i *= e.sizeMultiplier;
    var u;
    if (t5.left === "." ? u = oe(e, ["mopen"]) : u = B0.leftRightDelim(t5.left, a, i, e, t5.mode, ["mopen"]), r.unshift(u), s)
      for (var c = 1; c < r.length; c++) {
        var g = r[c], v = g.isMiddle;
        v && (r[c] = B0.leftRightDelim(v.delim, a, i, v.options, t5.mode, []));
      }
    var y;
    if (t5.right === ".")
      y = oe(e, ["mclose"]);
    else {
      var x = t5.rightColor ? e.withColor(t5.rightColor) : e;
      y = B0.leftRightDelim(t5.right, a, i, x, t5.mode, ["mclose"]);
    }
    return r.push(y), b.makeSpan(["minner"], r, e);
  },
  mathmlBuilder: (t5, e) => {
    Zt(t5);
    var r = o0(t5.body, e);
    if (t5.left !== ".") {
      var a = new S.MathNode("mo", [g0(t5.left, t5.mode)]);
      a.setAttribute("fence", "true"), r.unshift(a);
    }
    if (t5.right !== ".") {
      var i = new S.MathNode("mo", [g0(t5.right, t5.mode)]);
      i.setAttribute("fence", "true"), t5.rightColor && i.setAttribute("mathcolor", t5.rightColor), r.push(i);
    }
    return vt(r);
  }
});
B({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: (t5, e) => {
    var r = Oe(e[0], t5);
    if (!t5.parser.leftrightDepth)
      throw new M("\\middle without preceding \\left", r);
    return {
      type: "middle",
      mode: t5.parser.mode,
      delim: r.text
    };
  },
  htmlBuilder: (t5, e) => {
    var r;
    if (t5.delim === ".")
      r = oe(e, []);
    else {
      r = B0.sizedDelim(t5.delim, 1, e, t5.mode, []);
      var a = {
        delim: t5.delim,
        options: e
      };
      r.isMiddle = a;
    }
    return r;
  },
  mathmlBuilder: (t5, e) => {
    var r = t5.delim === "\\vert" || t5.delim === "|" ? g0("|", "text") : g0(t5.delim, t5.mode), a = new S.MathNode("mo", [r]);
    return a.setAttribute("fence", "true"), a.setAttribute("lspace", "0.05em"), a.setAttribute("rspace", "0.05em"), a;
  }
});
var kt = (t5, e) => {
  var r = b.wrapFragment(P(t5.body, e), e), a = t5.label.slice(1), i = e.sizeMultiplier, s, h = 0, u = I.isCharacterBox(t5.body);
  if (a === "sout")
    s = b.makeSpan(["stretchy", "sout"]), s.height = e.fontMetrics().defaultRuleThickness / i, h = -0.5 * e.fontMetrics().xHeight;
  else if (a === "phase") {
    var c = j({
      number: 0.6,
      unit: "pt"
    }, e), g = j({
      number: 0.35,
      unit: "ex"
    }, e), v = e.havingBaseSizing();
    i = i / v.sizeMultiplier;
    var y = r.height + r.depth + c + g;
    r.style.paddingLeft = z(y / 2 + c);
    var x = Math.floor(1e3 * y * i), w = E1(x), A = new q0([new P0("phase", w)], {
      width: "400em",
      height: z(x / 1e3),
      viewBox: "0 0 400000 " + x,
      preserveAspectRatio: "xMinYMin slice"
    });
    s = b.makeSvgSpan(["hide-tail"], [A], e), s.style.height = z(y), h = r.depth + c + g;
  } else {
    /cancel/.test(a) ? u || r.classes.push("cancel-pad") : a === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
    var T = 0, C = 0, N = 0;
    /box/.test(a) ? (N = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), T = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : N), C = T) : a === "angl" ? (N = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), T = 4 * N, C = Math.max(0, 0.25 - r.depth)) : (T = u ? 0.2 : 0, C = T), s = N0.encloseSpan(r, a, T, C, e), /fbox|boxed|fcolorbox/.test(a) ? (s.style.borderStyle = "solid", s.style.borderWidth = z(N)) : a === "angl" && N !== 0.049 && (s.style.borderTopWidth = z(N), s.style.borderRightWidth = z(N)), h = r.depth + C, t5.backgroundColor && (s.style.backgroundColor = t5.backgroundColor, t5.borderColor && (s.style.borderColor = t5.borderColor));
  }
  var R;
  if (t5.backgroundColor)
    R = b.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: s,
          shift: h
        },
        {
          type: "elem",
          elem: r,
          shift: 0
        }
      ]
    }, e);
  else {
    var U = /cancel|phase/.test(a) ? ["svg-align"] : [];
    R = b.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: r,
          shift: 0
        },
        {
          type: "elem",
          elem: s,
          shift: h,
          wrapperClasses: U
        }
      ]
    }, e);
  }
  return /cancel/.test(a) && (R.height = r.height, R.depth = r.depth), /cancel/.test(a) && !u ? b.makeSpan(["mord", "cancel-lap"], [R], e) : b.makeSpan(["mord"], [R], e);
};
var St = (t5, e) => {
  var r = 0, a = new S.MathNode(t5.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [_(t5.body, e)]);
  switch (t5.label) {
    case "\\cancel":
      a.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      a.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      a.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      a.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      a.setAttribute("notation", "box");
      break;
    case "\\angl":
      a.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (r = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, a.setAttribute("width", "+" + 2 * r + "pt"), a.setAttribute("height", "+" + 2 * r + "pt"), a.setAttribute("lspace", r + "pt"), a.setAttribute("voffset", r + "pt"), t5.label === "\\fcolorbox") {
        var i = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        a.setAttribute("style", "border: " + i + "em solid " + String(t5.borderColor));
      }
      break;
    case "\\xcancel":
      a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return t5.backgroundColor && a.setAttribute("mathbackground", t5.backgroundColor), a;
};
B({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: true,
    argTypes: ["color", "text"]
  },
  handler(t5, e, r) {
    var {
      parser: a,
      funcName: i
    } = t5, s = D(e[0], "color-token").color, h = e[1];
    return {
      type: "enclose",
      mode: a.mode,
      label: i,
      backgroundColor: s,
      body: h
    };
  },
  htmlBuilder: kt,
  mathmlBuilder: St
});
B({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: true,
    argTypes: ["color", "color", "text"]
  },
  handler(t5, e, r) {
    var {
      parser: a,
      funcName: i
    } = t5, s = D(e[0], "color-token").color, h = D(e[1], "color-token").color, u = e[2];
    return {
      type: "enclose",
      mode: a.mode,
      label: i,
      backgroundColor: h,
      borderColor: s,
      body: u
    };
  },
  htmlBuilder: kt,
  mathmlBuilder: St
});
B({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: true
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5;
    return {
      type: "enclose",
      mode: r.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
B({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      body: i
    };
  },
  htmlBuilder: kt,
  mathmlBuilder: St
});
B({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: false
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5;
    return {
      type: "enclose",
      mode: r.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Xr = {};
function w0(t5) {
  for (var {
    type: e,
    names: r,
    props: a,
    handler: i,
    htmlBuilder: s,
    mathmlBuilder: h
  } = t5, u = {
    type: e,
    numArgs: a.numArgs || 0,
    allowedInText: false,
    numOptionalArgs: 0,
    handler: i
  }, c = 0; c < r.length; ++c)
    Xr[r[c]] = u;
  s && (Be[e] = s), h && (qe[e] = h);
}
var Yr = {};
function m(t5, e) {
  Yr[t5] = e;
}
function Kt(t5) {
  var e = [];
  t5.consumeSpaces();
  var r = t5.fetch().text;
  for (r === "\\relax" && (t5.consume(), t5.consumeSpaces(), r = t5.fetch().text); r === "\\hline" || r === "\\hdashline"; )
    t5.consume(), e.push(r === "\\hdashline"), t5.consumeSpaces(), r = t5.fetch().text;
  return e;
}
var Ee = (t5) => {
  var e = t5.parser.settings;
  if (!e.displayMode)
    throw new M("{" + t5.envName + "} can be used only in display mode.");
};
function Mt(t5) {
  if (t5.indexOf("ed") === -1)
    return t5.indexOf("*") === -1;
}
function G0(t5, e, r) {
  var {
    hskipBeforeAndAfter: a,
    addJot: i,
    cols: s,
    arraystretch: h,
    colSeparationType: u,
    autoTag: c,
    singleRow: g,
    emptySingleRow: v,
    maxNumCols: y,
    leqno: x
  } = e;
  if (t5.gullet.beginGroup(), g || t5.gullet.macros.set("\\cr", "\\\\\\relax"), !h) {
    var w = t5.gullet.expandMacroAsText("\\arraystretch");
    if (w == null)
      h = 1;
    else if (h = parseFloat(w), !h || h < 0)
      throw new M("Invalid \\arraystretch: " + w);
  }
  t5.gullet.beginGroup();
  var A = [], T = [A], C = [], N = [], R = c != null ? [] : void 0;
  function U() {
    c && t5.gullet.macros.set("\\@eqnsw", "1", true);
  }
  function L() {
    R && (t5.gullet.macros.get("\\df@tag") ? (R.push(t5.subparse([new p0("\\df@tag")])), t5.gullet.macros.set("\\df@tag", void 0, true)) : R.push(!!c && t5.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (U(), N.push(Kt(t5)); ; ) {
    var F = t5.parseExpression(false, g ? "\\end" : "\\\\");
    t5.gullet.endGroup(), t5.gullet.beginGroup(), F = {
      type: "ordgroup",
      mode: t5.mode,
      body: F
    }, r && (F = {
      type: "styling",
      mode: t5.mode,
      style: r,
      body: [F]
    }), A.push(F);
    var V = t5.fetch().text;
    if (V === "&") {
      if (y && A.length === y) {
        if (g || u)
          throw new M("Too many tab characters: &", t5.nextToken);
        t5.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      t5.consume();
    } else if (V === "\\end") {
      L(), A.length === 1 && F.type === "styling" && F.body[0].body.length === 0 && (T.length > 1 || !v) && T.pop(), N.length < T.length + 1 && N.push([]);
      break;
    } else if (V === "\\\\") {
      t5.consume();
      var G = void 0;
      t5.gullet.future().text !== " " && (G = t5.parseSizeGroup(true)), C.push(G ? G.value : null), L(), N.push(Kt(t5)), A = [], T.push(A), U();
    } else
      throw new M("Expected & or \\\\ or \\cr or \\end", t5.nextToken);
  }
  return t5.gullet.endGroup(), t5.gullet.endGroup(), {
    type: "array",
    mode: t5.mode,
    addJot: i,
    arraystretch: h,
    body: T,
    cols: s,
    rowGaps: C,
    hskipBeforeAndAfter: a,
    hLinesBeforeRow: N,
    colSeparationType: u,
    tags: R,
    leqno: x
  };
}
function zt(t5) {
  return t5.slice(0, 1) === "d" ? "display" : "text";
}
var k0 = function(t5, e) {
  var r, a, i = t5.body.length, s = t5.hLinesBeforeRow, h = 0, u = new Array(i), c = [], g = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    e.fontMetrics().arrayRuleWidth,
    e.minRuleThickness
    // User override.
  ), v = 1 / e.fontMetrics().ptPerEm, y = 5 * v;
  if (t5.colSeparationType && t5.colSeparationType === "small") {
    var x = e.havingStyle(O.SCRIPT).sizeMultiplier;
    y = 0.2778 * (x / e.sizeMultiplier);
  }
  var w = t5.colSeparationType === "CD" ? j({
    number: 3,
    unit: "ex"
  }, e) : 12 * v, A = 3 * v, T = t5.arraystretch * w, C = 0.7 * T, N = 0.3 * T, R = 0;
  function U(pe) {
    for (var de = 0; de < pe.length; ++de)
      de > 0 && (R += 0.25), c.push({
        pos: R,
        isDashed: pe[de]
      });
  }
  for (U(s[0]), r = 0; r < t5.body.length; ++r) {
    var L = t5.body[r], F = C, V = N;
    h < L.length && (h = L.length);
    var G = new Array(L.length);
    for (a = 0; a < L.length; ++a) {
      var W = P(L[a], e);
      V < W.depth && (V = W.depth), F < W.height && (F = W.height), G[a] = W;
    }
    var M0 = t5.rowGaps[r], t0 = 0;
    M0 && (t0 = j(M0, e), t0 > 0 && (t0 += N, V < t0 && (V = t0), t0 = 0)), t5.addJot && (V += A), G.height = F, G.depth = V, R += F, G.pos = R, R += V + t0, u[r] = G, U(s[r + 1]);
  }
  var J = R / 2 + e.fontMetrics().axisHeight, U0 = t5.cols || [], n0 = [], f0, R0, Y0 = [];
  if (t5.tags && t5.tags.some((pe) => pe))
    for (r = 0; r < i; ++r) {
      var $0 = u[r], Le = $0.pos - J, H0 = t5.tags[r], O0 = void 0;
      H0 === true ? O0 = b.makeSpan(["eqn-num"], [], e) : H0 === false ? O0 = b.makeSpan([], [], e) : O0 = b.makeSpan([], e0(H0, e, true), e), O0.depth = $0.depth, O0.height = $0.height, Y0.push({
        type: "elem",
        elem: O0,
        shift: Le
      });
    }
  for (
    a = 0, R0 = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < h || R0 < U0.length;
    ++a, ++R0
  ) {
    for (var m0 = U0[R0] || {}, ae = true; m0.type === "separator"; ) {
      if (ae || (f0 = b.makeSpan(["arraycolsep"], []), f0.style.width = z(e.fontMetrics().doubleRuleSep), n0.push(f0)), m0.separator === "|" || m0.separator === ":") {
        var Ve = m0.separator === "|" ? "solid" : "dashed", j0 = b.makeSpan(["vertical-separator"], [], e);
        j0.style.height = z(R), j0.style.borderRightWidth = z(g), j0.style.borderRightStyle = Ve, j0.style.margin = "0 " + z(-g / 2);
        var It = R - J;
        It && (j0.style.verticalAlign = z(-It)), n0.push(j0);
      } else
        throw new M("Invalid separator type: " + m0.separator);
      R0++, m0 = U0[R0] || {}, ae = false;
    }
    if (!(a >= h)) {
      var Z0 = void 0;
      (a > 0 || t5.hskipBeforeAndAfter) && (Z0 = I.deflt(m0.pregap, y), Z0 !== 0 && (f0 = b.makeSpan(["arraycolsep"], []), f0.style.width = z(Z0), n0.push(f0)));
      var K0 = [];
      for (r = 0; r < i; ++r) {
        var me = u[r], ce = me[a];
        if (ce) {
          var u1 = me.pos - J;
          ce.depth = me.depth, ce.height = me.height, K0.push({
            type: "elem",
            elem: ce,
            shift: u1
          });
        }
      }
      K0 = b.makeVList({
        positionType: "individualShift",
        children: K0
      }, e), K0 = b.makeSpan(["col-align-" + (m0.align || "c")], [K0]), n0.push(K0), (a < h - 1 || t5.hskipBeforeAndAfter) && (Z0 = I.deflt(m0.postgap, y), Z0 !== 0 && (f0 = b.makeSpan(["arraycolsep"], []), f0.style.width = z(Z0), n0.push(f0)));
    }
  }
  if (u = b.makeSpan(["mtable"], n0), c.length > 0) {
    for (var m1 = b.makeLineSpan("hline", e, g), c1 = b.makeLineSpan("hdashline", e, g), Pe = [{
      type: "elem",
      elem: u,
      shift: 0
    }]; c.length > 0; ) {
      var Rt = c.pop(), Ht = Rt.pos - J;
      Rt.isDashed ? Pe.push({
        type: "elem",
        elem: c1,
        shift: Ht
      }) : Pe.push({
        type: "elem",
        elem: m1,
        shift: Ht
      });
    }
    u = b.makeVList({
      positionType: "individualShift",
      children: Pe
    }, e);
  }
  if (Y0.length === 0)
    return b.makeSpan(["mord"], [u], e);
  var Fe = b.makeVList({
    positionType: "individualShift",
    children: Y0
  }, e);
  return Fe = b.makeSpan(["tag"], [Fe], e), b.makeFragment([u, Fe]);
};
var _a = {
  c: "center ",
  l: "left ",
  r: "right "
};
var S0 = function(t5, e) {
  for (var r = [], a = new S.MathNode("mtd", [], ["mtr-glue"]), i = new S.MathNode("mtd", [], ["mml-eqn-num"]), s = 0; s < t5.body.length; s++) {
    for (var h = t5.body[s], u = [], c = 0; c < h.length; c++)
      u.push(new S.MathNode("mtd", [_(h[c], e)]));
    t5.tags && t5.tags[s] && (u.unshift(a), u.push(a), t5.leqno ? u.unshift(i) : u.push(i)), r.push(new S.MathNode("mtr", u));
  }
  var g = new S.MathNode("mtable", r), v = t5.arraystretch === 0.5 ? 0.1 : 0.16 + t5.arraystretch - 1 + (t5.addJot ? 0.09 : 0);
  g.setAttribute("rowspacing", z(v));
  var y = "", x = "";
  if (t5.cols && t5.cols.length > 0) {
    var w = t5.cols, A = "", T = false, C = 0, N = w.length;
    w[0].type === "separator" && (y += "top ", C = 1), w[w.length - 1].type === "separator" && (y += "bottom ", N -= 1);
    for (var R = C; R < N; R++)
      w[R].type === "align" ? (x += _a[w[R].align], T && (A += "none "), T = true) : w[R].type === "separator" && T && (A += w[R].separator === "|" ? "solid " : "dashed ", T = false);
    g.setAttribute("columnalign", x.trim()), /[sd]/.test(A) && g.setAttribute("columnlines", A.trim());
  }
  if (t5.colSeparationType === "align") {
    for (var U = t5.cols || [], L = "", F = 1; F < U.length; F++)
      L += F % 2 ? "0em " : "1em ";
    g.setAttribute("columnspacing", L.trim());
  } else t5.colSeparationType === "alignat" || t5.colSeparationType === "gather" ? g.setAttribute("columnspacing", "0em") : t5.colSeparationType === "small" ? g.setAttribute("columnspacing", "0.2778em") : t5.colSeparationType === "CD" ? g.setAttribute("columnspacing", "0.5em") : g.setAttribute("columnspacing", "1em");
  var V = "", G = t5.hLinesBeforeRow;
  y += G[0].length > 0 ? "left " : "", y += G[G.length - 1].length > 0 ? "right " : "";
  for (var W = 1; W < G.length - 1; W++)
    V += G[W].length === 0 ? "none " : G[W][0] ? "dashed " : "solid ";
  return /[sd]/.test(V) && g.setAttribute("rowlines", V.trim()), y !== "" && (g = new S.MathNode("menclose", [g]), g.setAttribute("notation", y.trim())), t5.arraystretch && t5.arraystretch < 1 && (g = new S.MathNode("mstyle", [g]), g.setAttribute("scriptlevel", "1")), g;
};
var $r = function(t5, e) {
  t5.envName.indexOf("ed") === -1 && Ee(t5);
  var r = [], a = t5.envName.indexOf("at") > -1 ? "alignat" : "align", i = t5.envName === "split", s = G0(t5.parser, {
    cols: r,
    addJot: true,
    autoTag: i ? void 0 : Mt(t5.envName),
    emptySingleRow: true,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: t5.parser.settings.leqno
  }, "display"), h, u = 0, c = {
    type: "ordgroup",
    mode: t5.mode,
    body: []
  };
  if (e[0] && e[0].type === "ordgroup") {
    for (var g = "", v = 0; v < e[0].body.length; v++) {
      var y = D(e[0].body[v], "textord");
      g += y.text;
    }
    h = Number(g), u = h * 2;
  }
  var x = !u;
  s.body.forEach(function(C) {
    for (var N = 1; N < C.length; N += 2) {
      var R = D(C[N], "styling"), U = D(R.body[0], "ordgroup");
      U.body.unshift(c);
    }
    if (x)
      u < C.length && (u = C.length);
    else {
      var L = C.length / 2;
      if (h < L)
        throw new M("Too many math in a row: " + ("expected " + h + ", but got " + L), C[0]);
    }
  });
  for (var w = 0; w < u; ++w) {
    var A = "r", T = 0;
    w % 2 === 1 ? A = "l" : w > 0 && x && (T = 1), r[w] = {
      type: "align",
      align: A,
      pregap: T,
      postgap: 0
    };
  }
  return s.colSeparationType = x ? "align" : "alignat", s;
};
w0({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(t5, e) {
    var r = Re(e[0]), a = r ? [e[0]] : D(e[0], "ordgroup").body, i = a.map(function(h) {
      var u = yt(h), c = u.text;
      if ("lcr".indexOf(c) !== -1)
        return {
          type: "align",
          align: c
        };
      if (c === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (c === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new M("Unknown column alignment: " + c, h);
    }), s = {
      cols: i,
      hskipBeforeAndAfter: true,
      // \@preamble in lttab.dtx
      maxNumCols: i.length
    };
    return G0(t5.parser, s, zt(t5.envName));
  },
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[t5.envName.replace("*", "")], r = "c", a = {
      hskipBeforeAndAfter: false,
      cols: [{
        type: "align",
        align: r
      }]
    };
    if (t5.envName.charAt(t5.envName.length - 1) === "*") {
      var i = t5.parser;
      if (i.consumeSpaces(), i.fetch().text === "[") {
        if (i.consume(), i.consumeSpaces(), r = i.fetch().text, "lcr".indexOf(r) === -1)
          throw new M("Expected l or c or r", i.nextToken);
        i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), a.cols = [{
          type: "align",
          align: r
        }];
      }
    }
    var s = G0(t5.parser, a, zt(t5.envName)), h = Math.max(0, ...s.body.map((u) => u.length));
    return s.cols = new Array(h).fill({
      type: "align",
      align: r
    }), e ? {
      type: "leftright",
      mode: t5.mode,
      body: [s],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : s;
  },
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    var e = {
      arraystretch: 0.5
    }, r = G0(t5.parser, e, "script");
    return r.colSeparationType = "small", r;
  },
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(t5, e) {
    var r = Re(e[0]), a = r ? [e[0]] : D(e[0], "ordgroup").body, i = a.map(function(h) {
      var u = yt(h), c = u.text;
      if ("lc".indexOf(c) !== -1)
        return {
          type: "align",
          align: c
        };
      throw new M("Unknown column alignment: " + c, h);
    });
    if (i.length > 1)
      throw new M("{subarray} can contain only one column");
    var s = {
      cols: i,
      hskipBeforeAndAfter: false,
      arraystretch: 0.5
    };
    if (s = G0(t5.parser, s, "script"), s.body.length > 0 && s.body[0].length > 1)
      throw new M("{subarray} can contain only one column");
    return s;
  },
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, r = G0(t5.parser, e, zt(t5.envName));
    return {
      type: "leftright",
      mode: t5.mode,
      body: [r],
      left: t5.envName.indexOf("r") > -1 ? "." : "\\{",
      right: t5.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: $r,
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    I.contains(["gather", "gather*"], t5.envName) && Ee(t5);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: true,
      colSeparationType: "gather",
      autoTag: Mt(t5.envName),
      emptySingleRow: true,
      leqno: t5.parser.settings.leqno
    };
    return G0(t5.parser, e, "display");
  },
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: $r,
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    Ee(t5);
    var e = {
      autoTag: Mt(t5.envName),
      emptySingleRow: true,
      singleRow: true,
      maxNumCols: 1,
      leqno: t5.parser.settings.leqno
    };
    return G0(t5.parser, e, "display");
  },
  htmlBuilder: k0,
  mathmlBuilder: S0
});
w0({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    return Ee(t5), Na(t5.parser);
  },
  htmlBuilder: k0,
  mathmlBuilder: S0
});
m("\\nonumber", "\\gdef\\@eqnsw{0}");
m("\\notag", "\\nonumber");
B({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: true
  },
  handler(t5, e) {
    throw new M(t5.funcName + " valid only within array environment");
  }
});
var Qt = Xr;
B({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0];
    if (i.type !== "ordgroup")
      throw new M("Invalid environment name", i);
    for (var s = "", h = 0; h < i.body.length; ++h)
      s += D(i.body[h], "textord").text;
    if (a === "\\begin") {
      if (!Qt.hasOwnProperty(s))
        throw new M("No such environment: " + s, i);
      var u = Qt[s], {
        args: c,
        optArgs: g
      } = r.parseArguments("\\begin{" + s + "}", u), v = {
        mode: r.mode,
        envName: s,
        parser: r
      }, y = u.handler(v, c, g);
      r.expect("\\end", false);
      var x = r.nextToken, w = D(r.parseFunction(), "environment");
      if (w.name !== s)
        throw new M("Mismatch: \\begin{" + s + "} matched by \\end{" + w.name + "}", x);
      return y;
    }
    return {
      type: "environment",
      mode: r.mode,
      name: s,
      nameGroup: i
    };
  }
});
var jr = (t5, e) => {
  var r = t5.font, a = e.withFont(r);
  return P(t5.body, a);
};
var Zr = (t5, e) => {
  var r = t5.font, a = e.withFont(r);
  return _(t5.body, a);
};
var Jt = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
B({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: true
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a
    } = t5, i = Ce(e[0]), s = a;
    return s in Jt && (s = Jt[s]), {
      type: "font",
      mode: r.mode,
      font: s.slice(1),
      body: i
    };
  },
  htmlBuilder: jr,
  mathmlBuilder: Zr
});
B({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5, a = e[0], i = I.isCharacterBox(a);
    return {
      type: "mclass",
      mode: r.mode,
      mclass: He(a),
      body: [{
        type: "font",
        mode: r.mode,
        font: "boldsymbol",
        body: a
      }],
      isCharacterBox: i
    };
  }
});
B({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a,
      breakOnTokenText: i
    } = t5, {
      mode: s
    } = r, h = r.parseExpression(true, i), u = "math" + a.slice(1);
    return {
      type: "font",
      mode: s,
      font: u,
      body: {
        type: "ordgroup",
        mode: r.mode,
        body: h
      }
    };
  },
  htmlBuilder: jr,
  mathmlBuilder: Zr
});
var Kr = (t5, e) => {
  var r = e;
  return t5 === "display" ? r = r.id >= O.SCRIPT.id ? r.text() : O.DISPLAY : t5 === "text" && r.size === O.DISPLAY.size ? r = O.TEXT : t5 === "script" ? r = O.SCRIPT : t5 === "scriptscript" && (r = O.SCRIPTSCRIPT), r;
};
var At = (t5, e) => {
  var r = Kr(t5.size, e.style), a = r.fracNum(), i = r.fracDen(), s;
  s = e.havingStyle(a);
  var h = P(t5.numer, s, e);
  if (t5.continued) {
    var u = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
    h.height = h.height < u ? u : h.height, h.depth = h.depth < c ? c : h.depth;
  }
  s = e.havingStyle(i);
  var g = P(t5.denom, s, e), v, y, x;
  t5.hasBarLine ? (t5.barSize ? (y = j(t5.barSize, e), v = b.makeLineSpan("frac-line", e, y)) : v = b.makeLineSpan("frac-line", e), y = v.height, x = v.height) : (v = null, y = 0, x = e.fontMetrics().defaultRuleThickness);
  var w, A, T;
  r.size === O.DISPLAY.size || t5.size === "display" ? (w = e.fontMetrics().num1, y > 0 ? A = 3 * x : A = 7 * x, T = e.fontMetrics().denom1) : (y > 0 ? (w = e.fontMetrics().num2, A = x) : (w = e.fontMetrics().num3, A = 3 * x), T = e.fontMetrics().denom2);
  var C;
  if (v) {
    var N = e.fontMetrics().axisHeight;
    w - h.depth - (N + 0.5 * y) < A && (w += A - (w - h.depth - (N + 0.5 * y))), N - 0.5 * y - (g.height - T) < A && (T += A - (N - 0.5 * y - (g.height - T)));
    var R = -(N - 0.5 * y);
    C = b.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: g,
        shift: T
      }, {
        type: "elem",
        elem: v,
        shift: R
      }, {
        type: "elem",
        elem: h,
        shift: -w
      }]
    }, e);
  } else {
    var U = w - h.depth - (g.height - T);
    U < A && (w += 0.5 * (A - U), T += 0.5 * (A - U)), C = b.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: g,
        shift: T
      }, {
        type: "elem",
        elem: h,
        shift: -w
      }]
    }, e);
  }
  s = e.havingStyle(r), C.height *= s.sizeMultiplier / e.sizeMultiplier, C.depth *= s.sizeMultiplier / e.sizeMultiplier;
  var L;
  r.size === O.DISPLAY.size ? L = e.fontMetrics().delim1 : r.size === O.SCRIPTSCRIPT.size ? L = e.havingStyle(O.SCRIPT).fontMetrics().delim2 : L = e.fontMetrics().delim2;
  var F, V;
  return t5.leftDelim == null ? F = oe(e, ["mopen"]) : F = B0.customSizedDelim(t5.leftDelim, L, true, e.havingStyle(r), t5.mode, ["mopen"]), t5.continued ? V = b.makeSpan([]) : t5.rightDelim == null ? V = oe(e, ["mclose"]) : V = B0.customSizedDelim(t5.rightDelim, L, true, e.havingStyle(r), t5.mode, ["mclose"]), b.makeSpan(["mord"].concat(s.sizingClasses(e)), [F, b.makeSpan(["mfrac"], [C]), V], e);
};
var Tt = (t5, e) => {
  var r = new S.MathNode("mfrac", [_(t5.numer, e), _(t5.denom, e)]);
  if (!t5.hasBarLine)
    r.setAttribute("linethickness", "0px");
  else if (t5.barSize) {
    var a = j(t5.barSize, e);
    r.setAttribute("linethickness", z(a));
  }
  var i = Kr(t5.size, e.style);
  if (i.size !== e.style.size) {
    r = new S.MathNode("mstyle", [r]);
    var s = i.size === O.DISPLAY.size ? "true" : "false";
    r.setAttribute("displaystyle", s), r.setAttribute("scriptlevel", "0");
  }
  if (t5.leftDelim != null || t5.rightDelim != null) {
    var h = [];
    if (t5.leftDelim != null) {
      var u = new S.MathNode("mo", [new S.TextNode(t5.leftDelim.replace("\\", ""))]);
      u.setAttribute("fence", "true"), h.push(u);
    }
    if (h.push(r), t5.rightDelim != null) {
      var c = new S.MathNode("mo", [new S.TextNode(t5.rightDelim.replace("\\", ""))]);
      c.setAttribute("fence", "true"), h.push(c);
    }
    return vt(h);
  }
  return r;
};
B({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: true
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0], s = e[1], h, u = null, c = null, g = "auto";
    switch (a) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        h = true;
        break;
      case "\\\\atopfrac":
        h = false;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        h = false, u = "(", c = ")";
        break;
      case "\\\\bracefrac":
        h = false, u = "\\{", c = "\\}";
        break;
      case "\\\\brackfrac":
        h = false, u = "[", c = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (a) {
      case "\\dfrac":
      case "\\dbinom":
        g = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        g = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: r.mode,
      continued: false,
      numer: i,
      denom: s,
      hasBarLine: h,
      leftDelim: u,
      rightDelim: c,
      size: g,
      barSize: null
    };
  },
  htmlBuilder: At,
  mathmlBuilder: Tt
});
B({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0], s = e[1];
    return {
      type: "genfrac",
      mode: r.mode,
      continued: true,
      numer: i,
      denom: s,
      hasBarLine: true,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
B({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: true
  },
  handler(t5) {
    var {
      parser: e,
      funcName: r,
      token: a
    } = t5, i;
    switch (r) {
      case "\\over":
        i = "\\frac";
        break;
      case "\\choose":
        i = "\\binom";
        break;
      case "\\atop":
        i = "\\\\atopfrac";
        break;
      case "\\brace":
        i = "\\\\bracefrac";
        break;
      case "\\brack":
        i = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: i,
      token: a
    };
  }
});
var er = ["display", "text", "script", "scriptscript"];
var tr = function(t5) {
  var e = null;
  return t5.length > 0 && (e = t5, e = e === "." ? null : e), e;
};
B({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: true,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5, a = e[4], i = e[5], s = Ce(e[0]), h = s.type === "atom" && s.family === "open" ? tr(s.text) : null, u = Ce(e[1]), c = u.type === "atom" && u.family === "close" ? tr(u.text) : null, g = D(e[2], "size"), v, y = null;
    g.isBlank ? v = true : (y = g.value, v = y.number > 0);
    var x = "auto", w = e[3];
    if (w.type === "ordgroup") {
      if (w.body.length > 0) {
        var A = D(w.body[0], "textord");
        x = er[Number(A.text)];
      }
    } else
      w = D(w, "textord"), x = er[Number(w.text)];
    return {
      type: "genfrac",
      mode: r.mode,
      numer: a,
      denom: i,
      continued: false,
      hasBarLine: v,
      barSize: y,
      leftDelim: h,
      rightDelim: c,
      size: x
    };
  },
  htmlBuilder: At,
  mathmlBuilder: Tt
});
B({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: true
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a,
      token: i
    } = t5;
    return {
      type: "infix",
      mode: r.mode,
      replaceWith: "\\\\abovefrac",
      size: D(e[0], "size").value,
      token: i
    };
  }
});
B({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0], s = w1(D(e[1], "infix").size), h = e[2], u = s.number > 0;
    return {
      type: "genfrac",
      mode: r.mode,
      numer: i,
      denom: h,
      continued: false,
      hasBarLine: u,
      barSize: s,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: At,
  mathmlBuilder: Tt
});
var Qr = (t5, e) => {
  var r = e.style, a, i;
  t5.type === "supsub" ? (a = t5.sup ? P(t5.sup, e.havingStyle(r.sup()), e) : P(t5.sub, e.havingStyle(r.sub()), e), i = D(t5.base, "horizBrace")) : i = D(t5, "horizBrace");
  var s = P(i.base, e.havingBaseStyle(O.DISPLAY)), h = N0.svgSpan(i, e), u;
  if (i.isOver ? (u = b.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: s
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: h
    }]
  }, e), u.children[0].children[0].children[1].classes.push("svg-align")) : (u = b.makeVList({
    positionType: "bottom",
    positionData: s.depth + 0.1 + h.height,
    children: [{
      type: "elem",
      elem: h
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: s
    }]
  }, e), u.children[0].children[0].children[0].classes.push("svg-align")), a) {
    var c = b.makeSpan(["mord", i.isOver ? "mover" : "munder"], [u], e);
    i.isOver ? u = b.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: a
      }]
    }, e) : u = b.makeVList({
      positionType: "bottom",
      positionData: c.depth + 0.2 + a.height + a.depth,
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: c
      }]
    }, e);
  }
  return b.makeSpan(["mord", i.isOver ? "mover" : "munder"], [u], e);
};
var Xa = (t5, e) => {
  var r = N0.mathMLnode(t5.label);
  return new S.MathNode(t5.isOver ? "mover" : "munder", [_(t5.base, e), r]);
};
B({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a
    } = t5;
    return {
      type: "horizBrace",
      mode: r.mode,
      label: a,
      isOver: /^\\over/.test(a),
      base: e[0]
    };
  },
  htmlBuilder: Qr,
  mathmlBuilder: Xa
});
B({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5, a = e[1], i = D(e[0], "url").url;
    return r.settings.isTrusted({
      command: "\\href",
      url: i
    }) ? {
      type: "href",
      mode: r.mode,
      href: i,
      body: K(a)
    } : r.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (t5, e) => {
    var r = e0(t5.body, e, false);
    return b.makeAnchor(t5.href, [], r, e);
  },
  mathmlBuilder: (t5, e) => {
    var r = F0(t5.body, e);
    return r instanceof h0 || (r = new h0("mrow", [r])), r.setAttribute("href", t5.href), r;
  }
});
B({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5, a = D(e[0], "url").url;
    if (!r.settings.isTrusted({
      command: "\\url",
      url: a
    }))
      return r.formatUnsupportedCmd("\\url");
    for (var i = [], s = 0; s < a.length; s++) {
      var h = a[s];
      h === "~" && (h = "\\textasciitilde"), i.push({
        type: "textord",
        mode: "text",
        text: h
      });
    }
    var u = {
      type: "text",
      mode: r.mode,
      font: "\\texttt",
      body: i
    };
    return {
      type: "href",
      mode: r.mode,
      href: a,
      body: K(u)
    };
  }
});
B({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: true,
    primitive: true
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5;
    return {
      type: "hbox",
      mode: r.mode,
      body: K(e[0])
    };
  },
  htmlBuilder(t5, e) {
    var r = e0(t5.body, e, false);
    return b.makeFragment(r);
  },
  mathmlBuilder(t5, e) {
    return new S.MathNode("mrow", o0(t5.body, e));
  }
});
B({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a,
      token: i
    } = t5, s = D(e[0], "raw").string, h = e[1];
    r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var u, c = {};
    switch (a) {
      case "\\htmlClass":
        c.class = s, u = {
          command: "\\htmlClass",
          class: s
        };
        break;
      case "\\htmlId":
        c.id = s, u = {
          command: "\\htmlId",
          id: s
        };
        break;
      case "\\htmlStyle":
        c.style = s, u = {
          command: "\\htmlStyle",
          style: s
        };
        break;
      case "\\htmlData": {
        for (var g = s.split(","), v = 0; v < g.length; v++) {
          var y = g[v].split("=");
          if (y.length !== 2)
            throw new M("Error parsing key-value for \\htmlData");
          c["data-" + y[0].trim()] = y[1].trim();
        }
        u = {
          command: "\\htmlData",
          attributes: c
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return r.settings.isTrusted(u) ? {
      type: "html",
      mode: r.mode,
      attributes: c,
      body: K(h)
    } : r.formatUnsupportedCmd(a);
  },
  htmlBuilder: (t5, e) => {
    var r = e0(t5.body, e, false), a = ["enclosing"];
    t5.attributes.class && a.push(...t5.attributes.class.trim().split(/\s+/));
    var i = b.makeSpan(a, r, e);
    for (var s in t5.attributes)
      s !== "class" && t5.attributes.hasOwnProperty(s) && i.setAttribute(s, t5.attributes[s]);
    return i;
  },
  mathmlBuilder: (t5, e) => F0(t5.body, e)
});
B({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5;
    return {
      type: "htmlmathml",
      mode: r.mode,
      html: K(e[0]),
      mathml: K(e[1])
    };
  },
  htmlBuilder: (t5, e) => {
    var r = e0(t5.html, e, false);
    return b.makeFragment(r);
  },
  mathmlBuilder: (t5, e) => F0(t5.mathml, e)
});
var Je = function(t5) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t5))
    return {
      number: +t5,
      unit: "bp"
    };
  var e = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t5);
  if (!e)
    throw new M("Invalid size: '" + t5 + "' in \\includegraphics");
  var r = {
    number: +(e[1] + e[2]),
    // sign + magnitude, cast to number
    unit: e[3]
  };
  if (!vr(r))
    throw new M("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
B({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: false
  },
  handler: (t5, e, r) => {
    var {
      parser: a
    } = t5, i = {
      number: 0,
      unit: "em"
    }, s = {
      number: 0.9,
      unit: "em"
    }, h = {
      number: 0,
      unit: "em"
    }, u = "";
    if (r[0])
      for (var c = D(r[0], "raw").string, g = c.split(","), v = 0; v < g.length; v++) {
        var y = g[v].split("=");
        if (y.length === 2) {
          var x = y[1].trim();
          switch (y[0].trim()) {
            case "alt":
              u = x;
              break;
            case "width":
              i = Je(x);
              break;
            case "height":
              s = Je(x);
              break;
            case "totalheight":
              h = Je(x);
              break;
            default:
              throw new M("Invalid key: '" + y[0] + "' in \\includegraphics.");
          }
        }
      }
    var w = D(e[0], "url").url;
    return u === "" && (u = w, u = u.replace(/^.*[\\/]/, ""), u = u.substring(0, u.lastIndexOf("."))), a.settings.isTrusted({
      command: "\\includegraphics",
      url: w
    }) ? {
      type: "includegraphics",
      mode: a.mode,
      alt: u,
      width: i,
      height: s,
      totalheight: h,
      src: w
    } : a.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (t5, e) => {
    var r = j(t5.height, e), a = 0;
    t5.totalheight.number > 0 && (a = j(t5.totalheight, e) - r);
    var i = 0;
    t5.width.number > 0 && (i = j(t5.width, e));
    var s = {
      height: z(r + a)
    };
    i > 0 && (s.width = z(i)), a > 0 && (s.verticalAlign = z(-a));
    var h = new X1(t5.src, t5.alt, s);
    return h.height = r, h.depth = a, h;
  },
  mathmlBuilder: (t5, e) => {
    var r = new S.MathNode("mglyph", []);
    r.setAttribute("alt", t5.alt);
    var a = j(t5.height, e), i = 0;
    if (t5.totalheight.number > 0 && (i = j(t5.totalheight, e) - a, r.setAttribute("valign", z(-i))), r.setAttribute("height", z(a + i)), t5.width.number > 0) {
      var s = j(t5.width, e);
      r.setAttribute("width", z(s));
    }
    return r.setAttribute("src", t5.src), r;
  }
});
B({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: true,
    allowedInText: true
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a
    } = t5, i = D(e[0], "size");
    if (r.settings.strict) {
      var s = a[1] === "m", h = i.value.unit === "mu";
      s ? (h || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + i.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode")) : h && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: r.mode,
      dimension: i.value
    };
  },
  htmlBuilder(t5, e) {
    return b.makeGlue(t5.dimension, e);
  },
  mathmlBuilder(t5, e) {
    var r = j(t5.dimension, e);
    return new S.SpaceNode(r);
  }
});
B({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0];
    return {
      type: "lap",
      mode: r.mode,
      alignment: a.slice(5),
      body: i
    };
  },
  htmlBuilder: (t5, e) => {
    var r;
    t5.alignment === "clap" ? (r = b.makeSpan([], [P(t5.body, e)]), r = b.makeSpan(["inner"], [r], e)) : r = b.makeSpan(["inner"], [P(t5.body, e)]);
    var a = b.makeSpan(["fix"], []), i = b.makeSpan([t5.alignment], [r, a], e), s = b.makeSpan(["strut"]);
    return s.style.height = z(i.height + i.depth), i.depth && (s.style.verticalAlign = z(-i.depth)), i.children.unshift(s), i = b.makeSpan(["thinbox"], [i], e), b.makeSpan(["mord", "vbox"], [i], e);
  },
  mathmlBuilder: (t5, e) => {
    var r = new S.MathNode("mpadded", [_(t5.body, e)]);
    if (t5.alignment !== "rlap") {
      var a = t5.alignment === "llap" ? "-1" : "-0.5";
      r.setAttribute("lspace", a + "width");
    }
    return r.setAttribute("width", "0px"), r;
  }
});
B({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: false
  },
  handler(t5, e) {
    var {
      funcName: r,
      parser: a
    } = t5, i = a.mode;
    a.switchMode("math");
    var s = r === "\\(" ? "\\)" : "$", h = a.parseExpression(false, s);
    return a.expect(s), a.switchMode(i), {
      type: "styling",
      mode: a.mode,
      style: "text",
      body: h
    };
  }
});
B({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: false
  },
  handler(t5, e) {
    throw new M("Mismatched " + t5.funcName);
  }
});
var rr = (t5, e) => {
  switch (e.style.size) {
    case O.DISPLAY.size:
      return t5.display;
    case O.TEXT.size:
      return t5.text;
    case O.SCRIPT.size:
      return t5.script;
    case O.SCRIPTSCRIPT.size:
      return t5.scriptscript;
    default:
      return t5.text;
  }
};
B({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: true
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5;
    return {
      type: "mathchoice",
      mode: r.mode,
      display: K(e[0]),
      text: K(e[1]),
      script: K(e[2]),
      scriptscript: K(e[3])
    };
  },
  htmlBuilder: (t5, e) => {
    var r = rr(t5, e), a = e0(r, e, false);
    return b.makeFragment(a);
  },
  mathmlBuilder: (t5, e) => {
    var r = rr(t5, e);
    return F0(r, e);
  }
});
var Jr = (t5, e, r, a, i, s, h) => {
  t5 = b.makeSpan([], [t5]);
  var u = r && I.isCharacterBox(r), c, g;
  if (e) {
    var v = P(e, a.havingStyle(i.sup()), a);
    g = {
      elem: v,
      kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - v.depth)
    };
  }
  if (r) {
    var y = P(r, a.havingStyle(i.sub()), a);
    c = {
      elem: y,
      kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - y.height)
    };
  }
  var x;
  if (g && c) {
    var w = a.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + t5.depth + h;
    x = b.makeVList({
      positionType: "bottom",
      positionData: w,
      children: [{
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: z(-s)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: t5
      }, {
        type: "kern",
        size: g.kern
      }, {
        type: "elem",
        elem: g.elem,
        marginLeft: z(s)
      }, {
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }]
    }, a);
  } else if (c) {
    var A = t5.height - h;
    x = b.makeVList({
      positionType: "top",
      positionData: A,
      children: [{
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: z(-s)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: t5
      }]
    }, a);
  } else if (g) {
    var T = t5.depth + h;
    x = b.makeVList({
      positionType: "bottom",
      positionData: T,
      children: [{
        type: "elem",
        elem: t5
      }, {
        type: "kern",
        size: g.kern
      }, {
        type: "elem",
        elem: g.elem,
        marginLeft: z(s)
      }, {
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }]
    }, a);
  } else
    return t5;
  var C = [x];
  if (c && s !== 0 && !u) {
    var N = b.makeSpan(["mspace"], [], a);
    N.style.marginRight = z(s), C.unshift(N);
  }
  return b.makeSpan(["mop", "op-limits"], C, a);
};
var e1 = ["\\smallint"];
var re = (t5, e) => {
  var r, a, i = false, s;
  t5.type === "supsub" ? (r = t5.sup, a = t5.sub, s = D(t5.base, "op"), i = true) : s = D(t5, "op");
  var h = e.style, u = false;
  h.size === O.DISPLAY.size && s.symbol && !I.contains(e1, s.name) && (u = true);
  var c;
  if (s.symbol) {
    var g = u ? "Size2-Regular" : "Size1-Regular", v = "";
    if ((s.name === "\\oiint" || s.name === "\\oiiint") && (v = s.name.slice(1), s.name = v === "oiint" ? "\\iint" : "\\iiint"), c = b.makeSymbol(s.name, g, "math", e, ["mop", "op-symbol", u ? "large-op" : "small-op"]), v.length > 0) {
      var y = c.italic, x = b.staticSvg(v + "Size" + (u ? "2" : "1"), e);
      c = b.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: c,
          shift: 0
        }, {
          type: "elem",
          elem: x,
          shift: u ? 0.08 : 0
        }]
      }, e), s.name = "\\" + v, c.classes.unshift("mop"), c.italic = y;
    }
  } else if (s.body) {
    var w = e0(s.body, e, true);
    w.length === 1 && w[0] instanceof d0 ? (c = w[0], c.classes[0] = "mop") : c = b.makeSpan(["mop"], w, e);
  } else {
    for (var A = [], T = 1; T < s.name.length; T++)
      A.push(b.mathsym(s.name[T], s.mode, e));
    c = b.makeSpan(["mop"], A, e);
  }
  var C = 0, N = 0;
  return (c instanceof d0 || s.name === "\\oiint" || s.name === "\\oiiint") && !s.suppressBaseShift && (C = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, N = c.italic), i ? Jr(c, r, a, e, h, N, C) : (C && (c.style.position = "relative", c.style.top = z(C)), c);
};
var ue = (t5, e) => {
  var r;
  if (t5.symbol)
    r = new h0("mo", [g0(t5.name, t5.mode)]), I.contains(e1, t5.name) && r.setAttribute("largeop", "false");
  else if (t5.body)
    r = new h0("mo", o0(t5.body, e));
  else {
    r = new h0("mi", [new x0(t5.name.slice(1))]);
    var a = new h0("mo", [g0("⁡", "text")]);
    t5.parentIsSupSub ? r = new h0("mrow", [r, a]) : r = Br([r, a]);
  }
  return r;
};
var Ya = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
B({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a
    } = t5, i = a;
    return i.length === 1 && (i = Ya[i]), {
      type: "op",
      mode: r.mode,
      limits: true,
      parentIsSupSub: false,
      symbol: true,
      name: i
    };
  },
  htmlBuilder: re,
  mathmlBuilder: ue
});
B({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5, a = e[0];
    return {
      type: "op",
      mode: r.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: false,
      body: K(a)
    };
  },
  htmlBuilder: re,
  mathmlBuilder: ue
});
var $a = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
B({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    var {
      parser: e,
      funcName: r
    } = t5;
    return {
      type: "op",
      mode: e.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: false,
      name: r
    };
  },
  htmlBuilder: re,
  mathmlBuilder: ue
});
B({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    var {
      parser: e,
      funcName: r
    } = t5;
    return {
      type: "op",
      mode: e.mode,
      limits: true,
      parentIsSupSub: false,
      symbol: false,
      name: r
    };
  },
  htmlBuilder: re,
  mathmlBuilder: ue
});
B({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(t5) {
    var {
      parser: e,
      funcName: r
    } = t5, a = r;
    return a.length === 1 && (a = $a[a]), {
      type: "op",
      mode: e.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: true,
      name: a
    };
  },
  htmlBuilder: re,
  mathmlBuilder: ue
});
var t1 = (t5, e) => {
  var r, a, i = false, s;
  t5.type === "supsub" ? (r = t5.sup, a = t5.sub, s = D(t5.base, "operatorname"), i = true) : s = D(t5, "operatorname");
  var h;
  if (s.body.length > 0) {
    for (var u = s.body.map((y) => {
      var x = y.text;
      return typeof x == "string" ? {
        type: "textord",
        mode: y.mode,
        text: x
      } : y;
    }), c = e0(u, e.withFont("mathrm"), true), g = 0; g < c.length; g++) {
      var v = c[g];
      v instanceof d0 && (v.text = v.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    h = b.makeSpan(["mop"], c, e);
  } else
    h = b.makeSpan(["mop"], [], e);
  return i ? Jr(h, r, a, e, e.style, 0, 0) : h;
};
var ja = (t5, e) => {
  for (var r = o0(t5.body, e.withFont("mathrm")), a = true, i = 0; i < r.length; i++) {
    var s = r[i];
    if (!(s instanceof S.SpaceNode)) if (s instanceof S.MathNode)
      switch (s.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var h = s.children[0];
          s.children.length === 1 && h instanceof S.TextNode ? h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = false;
          break;
        }
        default:
          a = false;
      }
    else
      a = false;
  }
  if (a) {
    var u = r.map((v) => v.toText()).join("");
    r = [new S.TextNode(u)];
  }
  var c = new S.MathNode("mi", r);
  c.setAttribute("mathvariant", "normal");
  var g = new S.MathNode("mo", [g0("⁡", "text")]);
  return t5.parentIsSupSub ? new S.MathNode("mrow", [c, g]) : S.newDocumentFragment([c, g]);
};
B({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (t5, e) => {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0];
    return {
      type: "operatorname",
      mode: r.mode,
      body: K(i),
      alwaysHandleSupSub: a === "\\operatornamewithlimits",
      limits: false,
      parentIsSupSub: false
    };
  },
  htmlBuilder: t1,
  mathmlBuilder: ja
});
m("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
X0({
  type: "ordgroup",
  htmlBuilder(t5, e) {
    return t5.semisimple ? b.makeFragment(e0(t5.body, e, false)) : b.makeSpan(["mord"], e0(t5.body, e, true), e);
  },
  mathmlBuilder(t5, e) {
    return F0(t5.body, e, true);
  }
});
B({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5, a = e[0];
    return {
      type: "overline",
      mode: r.mode,
      body: a
    };
  },
  htmlBuilder(t5, e) {
    var r = P(t5.body, e.havingCrampedStyle()), a = b.makeLineSpan("overline-line", e), i = e.fontMetrics().defaultRuleThickness, s = b.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: i
      }]
    }, e);
    return b.makeSpan(["mord", "overline"], [s], e);
  },
  mathmlBuilder(t5, e) {
    var r = new S.MathNode("mo", [new S.TextNode("‾")]);
    r.setAttribute("stretchy", "true");
    var a = new S.MathNode("mover", [_(t5.body, e), r]);
    return a.setAttribute("accent", "true"), a;
  }
});
B({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5, a = e[0];
    return {
      type: "phantom",
      mode: r.mode,
      body: K(a)
    };
  },
  htmlBuilder: (t5, e) => {
    var r = e0(t5.body, e.withPhantom(), false);
    return b.makeFragment(r);
  },
  mathmlBuilder: (t5, e) => {
    var r = o0(t5.body, e);
    return new S.MathNode("mphantom", r);
  }
});
B({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5, a = e[0];
    return {
      type: "hphantom",
      mode: r.mode,
      body: a
    };
  },
  htmlBuilder: (t5, e) => {
    var r = b.makeSpan([], [P(t5.body, e.withPhantom())]);
    if (r.height = 0, r.depth = 0, r.children)
      for (var a = 0; a < r.children.length; a++)
        r.children[a].height = 0, r.children[a].depth = 0;
    return r = b.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }]
    }, e), b.makeSpan(["mord"], [r], e);
  },
  mathmlBuilder: (t5, e) => {
    var r = o0(K(t5.body), e), a = new S.MathNode("mphantom", r), i = new S.MathNode("mpadded", [a]);
    return i.setAttribute("height", "0px"), i.setAttribute("depth", "0px"), i;
  }
});
B({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      parser: r
    } = t5, a = e[0];
    return {
      type: "vphantom",
      mode: r.mode,
      body: a
    };
  },
  htmlBuilder: (t5, e) => {
    var r = b.makeSpan(["inner"], [P(t5.body, e.withPhantom())]), a = b.makeSpan(["fix"], []);
    return b.makeSpan(["mord", "rlap"], [r, a], e);
  },
  mathmlBuilder: (t5, e) => {
    var r = o0(K(t5.body), e), a = new S.MathNode("mphantom", r), i = new S.MathNode("mpadded", [a]);
    return i.setAttribute("width", "0px"), i;
  }
});
B({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: true
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5, a = D(e[0], "size").value, i = e[1];
    return {
      type: "raisebox",
      mode: r.mode,
      dy: a,
      body: i
    };
  },
  htmlBuilder(t5, e) {
    var r = P(t5.body, e), a = j(t5.dy, e);
    return b.makeVList({
      positionType: "shift",
      positionData: -a,
      children: [{
        type: "elem",
        elem: r
      }]
    }, e);
  },
  mathmlBuilder(t5, e) {
    var r = new S.MathNode("mpadded", [_(t5.body, e)]), a = t5.dy.number + t5.dy.unit;
    return r.setAttribute("voffset", a), r;
  }
});
B({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInArgument: true
  },
  handler(t5) {
    var {
      parser: e
    } = t5;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
B({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: true,
    allowedInMath: true,
    argTypes: ["size", "size", "size"]
  },
  handler(t5, e, r) {
    var {
      parser: a
    } = t5, i = r[0], s = D(e[0], "size"), h = D(e[1], "size");
    return {
      type: "rule",
      mode: a.mode,
      shift: i && D(i, "size").value,
      width: s.value,
      height: h.value
    };
  },
  htmlBuilder(t5, e) {
    var r = b.makeSpan(["mord", "rule"], [], e), a = j(t5.width, e), i = j(t5.height, e), s = t5.shift ? j(t5.shift, e) : 0;
    return r.style.borderRightWidth = z(a), r.style.borderTopWidth = z(i), r.style.bottom = z(s), r.width = a, r.height = i + s, r.depth = -s, r.maxFontSize = i * 1.125 * e.sizeMultiplier, r;
  },
  mathmlBuilder(t5, e) {
    var r = j(t5.width, e), a = j(t5.height, e), i = t5.shift ? j(t5.shift, e) : 0, s = e.color && e.getColor() || "black", h = new S.MathNode("mspace");
    h.setAttribute("mathbackground", s), h.setAttribute("width", z(r)), h.setAttribute("height", z(a));
    var u = new S.MathNode("mpadded", [h]);
    return i >= 0 ? u.setAttribute("height", z(i)) : (u.setAttribute("height", z(i)), u.setAttribute("depth", z(-i))), u.setAttribute("voffset", z(i)), u;
  }
});
function r1(t5, e, r) {
  for (var a = e0(t5, e, false), i = e.sizeMultiplier / r.sizeMultiplier, s = 0; s < a.length; s++) {
    var h = a[s].classes.indexOf("sizing");
    h < 0 ? Array.prototype.push.apply(a[s].classes, e.sizingClasses(r)) : a[s].classes[h + 1] === "reset-size" + e.size && (a[s].classes[h + 1] = "reset-size" + r.size), a[s].height *= i, a[s].depth *= i;
  }
  return b.makeFragment(a);
}
var ar = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
var Za = (t5, e) => {
  var r = e.havingSize(t5.size);
  return r1(t5.body, r, e);
};
B({
  type: "sizing",
  names: ar,
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler: (t5, e) => {
    var {
      breakOnTokenText: r,
      funcName: a,
      parser: i
    } = t5, s = i.parseExpression(false, r);
    return {
      type: "sizing",
      mode: i.mode,
      // Figure out what size to use based on the list of functions above
      size: ar.indexOf(a) + 1,
      body: s
    };
  },
  htmlBuilder: Za,
  mathmlBuilder: (t5, e) => {
    var r = e.havingSize(t5.size), a = o0(t5.body, r), i = new S.MathNode("mstyle", a);
    return i.setAttribute("mathsize", z(r.sizeMultiplier)), i;
  }
});
B({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: true
  },
  handler: (t5, e, r) => {
    var {
      parser: a
    } = t5, i = false, s = false, h = r[0] && D(r[0], "ordgroup");
    if (h)
      for (var u = "", c = 0; c < h.body.length; ++c) {
        var g = h.body[c];
        if (u = g.text, u === "t")
          i = true;
        else if (u === "b")
          s = true;
        else {
          i = false, s = false;
          break;
        }
      }
    else
      i = true, s = true;
    var v = e[0];
    return {
      type: "smash",
      mode: a.mode,
      body: v,
      smashHeight: i,
      smashDepth: s
    };
  },
  htmlBuilder: (t5, e) => {
    var r = b.makeSpan([], [P(t5.body, e)]);
    if (!t5.smashHeight && !t5.smashDepth)
      return r;
    if (t5.smashHeight && (r.height = 0, r.children))
      for (var a = 0; a < r.children.length; a++)
        r.children[a].height = 0;
    if (t5.smashDepth && (r.depth = 0, r.children))
      for (var i = 0; i < r.children.length; i++)
        r.children[i].depth = 0;
    var s = b.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }]
    }, e);
    return b.makeSpan(["mord"], [s], e);
  },
  mathmlBuilder: (t5, e) => {
    var r = new S.MathNode("mpadded", [_(t5.body, e)]);
    return t5.smashHeight && r.setAttribute("height", "0px"), t5.smashDepth && r.setAttribute("depth", "0px"), r;
  }
});
B({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(t5, e, r) {
    var {
      parser: a
    } = t5, i = r[0], s = e[0];
    return {
      type: "sqrt",
      mode: a.mode,
      body: s,
      index: i
    };
  },
  htmlBuilder(t5, e) {
    var r = P(t5.body, e.havingCrampedStyle());
    r.height === 0 && (r.height = e.fontMetrics().xHeight), r = b.wrapFragment(r, e);
    var a = e.fontMetrics(), i = a.defaultRuleThickness, s = i;
    e.style.id < O.TEXT.id && (s = e.fontMetrics().xHeight);
    var h = i + s / 4, u = r.height + r.depth + h + i, {
      span: c,
      ruleWidth: g,
      advanceWidth: v
    } = B0.sqrtImage(u, e), y = c.height - g;
    y > r.height + r.depth + h && (h = (h + y - r.height - r.depth) / 2);
    var x = c.height - r.height - h - g;
    r.style.paddingLeft = z(v);
    var w = b.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(r.height + x)
      }, {
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: g
      }]
    }, e);
    if (t5.index) {
      var A = e.havingStyle(O.SCRIPTSCRIPT), T = P(t5.index, A, e), C = 0.6 * (w.height - w.depth), N = b.makeVList({
        positionType: "shift",
        positionData: -C,
        children: [{
          type: "elem",
          elem: T
        }]
      }, e), R = b.makeSpan(["root"], [N]);
      return b.makeSpan(["mord", "sqrt"], [R, w], e);
    } else
      return b.makeSpan(["mord", "sqrt"], [w], e);
  },
  mathmlBuilder(t5, e) {
    var {
      body: r,
      index: a
    } = t5;
    return a ? new S.MathNode("mroot", [_(r, e), _(a, e)]) : new S.MathNode("msqrt", [_(r, e)]);
  }
});
var ir = {
  display: O.DISPLAY,
  text: O.TEXT,
  script: O.SCRIPT,
  scriptscript: O.SCRIPTSCRIPT
};
B({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(t5, e) {
    var {
      breakOnTokenText: r,
      funcName: a,
      parser: i
    } = t5, s = i.parseExpression(true, r), h = a.slice(1, a.length - 5);
    return {
      type: "styling",
      mode: i.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: h,
      body: s
    };
  },
  htmlBuilder(t5, e) {
    var r = ir[t5.style], a = e.havingStyle(r).withFont("");
    return r1(t5.body, a, e);
  },
  mathmlBuilder(t5, e) {
    var r = ir[t5.style], a = e.havingStyle(r), i = o0(t5.body, a), s = new S.MathNode("mstyle", i), h = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, u = h[t5.style];
    return s.setAttribute("scriptlevel", u[0]), s.setAttribute("displaystyle", u[1]), s;
  }
});
var Ka = function(t5, e) {
  var r = t5.base;
  if (r)
    if (r.type === "op") {
      var a = r.limits && (e.style.size === O.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? re : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (e.style.size === O.DISPLAY.size || r.limits);
      return i ? t1 : null;
    } else {
      if (r.type === "accent")
        return I.isCharacterBox(r.base) ? xt : null;
      if (r.type === "horizBrace") {
        var s = !t5.sub;
        return s === r.isOver ? Qr : null;
      } else
        return null;
    }
  else return null;
};
X0({
  type: "supsub",
  htmlBuilder(t5, e) {
    var r = Ka(t5, e);
    if (r)
      return r(t5, e);
    var {
      base: a,
      sup: i,
      sub: s
    } = t5, h = P(a, e), u, c, g = e.fontMetrics(), v = 0, y = 0, x = a && I.isCharacterBox(a);
    if (i) {
      var w = e.havingStyle(e.style.sup());
      u = P(i, w, e), x || (v = h.height - w.fontMetrics().supDrop * w.sizeMultiplier / e.sizeMultiplier);
    }
    if (s) {
      var A = e.havingStyle(e.style.sub());
      c = P(s, A, e), x || (y = h.depth + A.fontMetrics().subDrop * A.sizeMultiplier / e.sizeMultiplier);
    }
    var T;
    e.style === O.DISPLAY ? T = g.sup1 : e.style.cramped ? T = g.sup3 : T = g.sup2;
    var C = e.sizeMultiplier, N = z(0.5 / g.ptPerEm / C), R = null;
    if (c) {
      var U = t5.base && t5.base.type === "op" && t5.base.name && (t5.base.name === "\\oiint" || t5.base.name === "\\oiiint");
      (h instanceof d0 || U) && (R = z(-h.italic));
    }
    var L;
    if (u && c) {
      v = Math.max(v, T, u.depth + 0.25 * g.xHeight), y = Math.max(y, g.sub2);
      var F = g.defaultRuleThickness, V = 4 * F;
      if (v - u.depth - (c.height - y) < V) {
        y = V - (v - u.depth) + c.height;
        var G = 0.8 * g.xHeight - (v - u.depth);
        G > 0 && (v += G, y -= G);
      }
      var W = [{
        type: "elem",
        elem: c,
        shift: y,
        marginRight: N,
        marginLeft: R
      }, {
        type: "elem",
        elem: u,
        shift: -v,
        marginRight: N
      }];
      L = b.makeVList({
        positionType: "individualShift",
        children: W
      }, e);
    } else if (c) {
      y = Math.max(y, g.sub1, c.height - 0.8 * g.xHeight);
      var M0 = [{
        type: "elem",
        elem: c,
        marginLeft: R,
        marginRight: N
      }];
      L = b.makeVList({
        positionType: "shift",
        positionData: y,
        children: M0
      }, e);
    } else if (u)
      v = Math.max(v, T, u.depth + 0.25 * g.xHeight), L = b.makeVList({
        positionType: "shift",
        positionData: -v,
        children: [{
          type: "elem",
          elem: u,
          marginRight: N
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var t0 = ot(h, "right") || "mord";
    return b.makeSpan([t0], [h, b.makeSpan(["msupsub"], [L])], e);
  },
  mathmlBuilder(t5, e) {
    var r = false, a, i;
    t5.base && t5.base.type === "horizBrace" && (i = !!t5.sup, i === t5.base.isOver && (r = true, a = t5.base.isOver)), t5.base && (t5.base.type === "op" || t5.base.type === "operatorname") && (t5.base.parentIsSupSub = true);
    var s = [_(t5.base, e)];
    t5.sub && s.push(_(t5.sub, e)), t5.sup && s.push(_(t5.sup, e));
    var h;
    if (r)
      h = a ? "mover" : "munder";
    else if (t5.sub)
      if (t5.sup) {
        var u = t5.base;
        u && u.type === "op" && u.limits && e.style === O.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === O.DISPLAY || u.limits) ? h = "munderover" : h = "msubsup";
      } else {
        var c = t5.base;
        c && c.type === "op" && c.limits && (e.style === O.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === O.DISPLAY) ? h = "munder" : h = "msub";
      }
    else {
      var g = t5.base;
      g && g.type === "op" && g.limits && (e.style === O.DISPLAY || g.alwaysHandleSupSub) || g && g.type === "operatorname" && g.alwaysHandleSupSub && (g.limits || e.style === O.DISPLAY) ? h = "mover" : h = "msup";
    }
    return new S.MathNode(h, s);
  }
});
X0({
  type: "atom",
  htmlBuilder(t5, e) {
    return b.mathsym(t5.text, t5.mode, e, ["m" + t5.family]);
  },
  mathmlBuilder(t5, e) {
    var r = new S.MathNode("mo", [g0(t5.text, t5.mode)]);
    if (t5.family === "bin") {
      var a = bt(t5, e);
      a === "bold-italic" && r.setAttribute("mathvariant", a);
    } else t5.family === "punct" ? r.setAttribute("separator", "true") : (t5.family === "open" || t5.family === "close") && r.setAttribute("stretchy", "false");
    return r;
  }
});
var a1 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
X0({
  type: "mathord",
  htmlBuilder(t5, e) {
    return b.makeOrd(t5, e, "mathord");
  },
  mathmlBuilder(t5, e) {
    var r = new S.MathNode("mi", [g0(t5.text, t5.mode, e)]), a = bt(t5, e) || "italic";
    return a !== a1[r.type] && r.setAttribute("mathvariant", a), r;
  }
});
X0({
  type: "textord",
  htmlBuilder(t5, e) {
    return b.makeOrd(t5, e, "textord");
  },
  mathmlBuilder(t5, e) {
    var r = g0(t5.text, t5.mode, e), a = bt(t5, e) || "normal", i;
    return t5.mode === "text" ? i = new S.MathNode("mtext", [r]) : /[0-9]/.test(t5.text) ? i = new S.MathNode("mn", [r]) : t5.text === "\\prime" ? i = new S.MathNode("mo", [r]) : i = new S.MathNode("mi", [r]), a !== a1[i.type] && i.setAttribute("mathvariant", a), i;
  }
});
var et = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
};
var tt = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
X0({
  type: "spacing",
  htmlBuilder(t5, e) {
    if (tt.hasOwnProperty(t5.text)) {
      var r = tt[t5.text].className || "";
      if (t5.mode === "text") {
        var a = b.makeOrd(t5, e, "textord");
        return a.classes.push(r), a;
      } else
        return b.makeSpan(["mspace", r], [b.mathsym(t5.text, t5.mode, e)], e);
    } else {
      if (et.hasOwnProperty(t5.text))
        return b.makeSpan(["mspace", et[t5.text]], [], e);
      throw new M('Unknown type of space "' + t5.text + '"');
    }
  },
  mathmlBuilder(t5, e) {
    var r;
    if (tt.hasOwnProperty(t5.text))
      r = new S.MathNode("mtext", [new S.TextNode(" ")]);
    else {
      if (et.hasOwnProperty(t5.text))
        return new S.MathNode("mspace");
      throw new M('Unknown type of space "' + t5.text + '"');
    }
    return r;
  }
});
var nr = () => {
  var t5 = new S.MathNode("mtd", []);
  return t5.setAttribute("width", "50%"), t5;
};
X0({
  type: "tag",
  mathmlBuilder(t5, e) {
    var r = new S.MathNode("mtable", [new S.MathNode("mtr", [nr(), new S.MathNode("mtd", [F0(t5.body, e)]), nr(), new S.MathNode("mtd", [F0(t5.tag, e)])])]);
    return r.setAttribute("width", "100%"), r;
  }
});
var sr = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
};
var or = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
};
var Qa = {
  "\\textit": "textit",
  "\\textup": "textup"
};
var lr = (t5, e) => {
  var r = t5.font;
  if (r) {
    if (sr[r])
      return e.withTextFontFamily(sr[r]);
    if (or[r])
      return e.withTextFontWeight(or[r]);
    if (r === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Qa[r]);
};
B({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: true,
    allowedInText: true
  },
  handler(t5, e) {
    var {
      parser: r,
      funcName: a
    } = t5, i = e[0];
    return {
      type: "text",
      mode: r.mode,
      body: K(i),
      font: a
    };
  },
  htmlBuilder(t5, e) {
    var r = lr(t5, e), a = e0(t5.body, r, true);
    return b.makeSpan(["mord", "text"], a, r);
  },
  mathmlBuilder(t5, e) {
    var r = lr(t5, e);
    return F0(t5.body, r);
  }
});
B({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5;
    return {
      type: "underline",
      mode: r.mode,
      body: e[0]
    };
  },
  htmlBuilder(t5, e) {
    var r = P(t5.body, e), a = b.makeLineSpan("underline-line", e), i = e.fontMetrics().defaultRuleThickness, s = b.makeVList({
      positionType: "top",
      positionData: r.height,
      children: [{
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: r
      }]
    }, e);
    return b.makeSpan(["mord", "underline"], [s], e);
  },
  mathmlBuilder(t5, e) {
    var r = new S.MathNode("mo", [new S.TextNode("‾")]);
    r.setAttribute("stretchy", "true");
    var a = new S.MathNode("munder", [_(t5.body, e), r]);
    return a.setAttribute("accentunder", "true"), a;
  }
});
B({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: false
  },
  handler(t5, e) {
    var {
      parser: r
    } = t5;
    return {
      type: "vcenter",
      mode: r.mode,
      body: e[0]
    };
  },
  htmlBuilder(t5, e) {
    var r = P(t5.body, e), a = e.fontMetrics().axisHeight, i = 0.5 * (r.height - a - (r.depth + a));
    return b.makeVList({
      positionType: "shift",
      positionData: i,
      children: [{
        type: "elem",
        elem: r
      }]
    }, e);
  },
  mathmlBuilder(t5, e) {
    return new S.MathNode("mpadded", [_(t5.body, e)], ["vcenter"]);
  }
});
B({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler(t5, e, r) {
    throw new M("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(t5, e) {
    for (var r = hr(t5), a = [], i = e.havingStyle(e.style.text()), s = 0; s < r.length; s++) {
      var h = r[s];
      h === "~" && (h = "\\textasciitilde"), a.push(b.makeSymbol(h, "Typewriter-Regular", t5.mode, i, ["mord", "texttt"]));
    }
    return b.makeSpan(["mord", "text"].concat(i.sizingClasses(e)), b.tryCombineChars(a), i);
  },
  mathmlBuilder(t5, e) {
    var r = new S.TextNode(hr(t5)), a = new S.MathNode("mtext", [r]);
    return a.setAttribute("mathvariant", "monospace"), a;
  }
});
var hr = (t5) => t5.body.replace(/ /g, t5.star ? "␣" : " ");
var L0 = Ar;
var i1 = `[ \r
	]`;
var Ja = "\\\\[a-zA-Z@]+";
var e4 = "\\\\[^\uD800-\uDFFF]";
var t4 = "(" + Ja + ")" + i1 + "*";
var r4 = `\\\\(
|[ \r	]+
?)[ \r	]*`;
var mt = "[̀-ͯ]";
var a4 = new RegExp(mt + "+$");
var i4 = "(" + i1 + "+)|" + // whitespace
(r4 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(mt + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(mt + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + t4) + // \macroName + spaces
("|" + e4 + ")");
var ur = class {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, r) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = r, this.tokenRegex = new RegExp(i4, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, r) {
    this.catcodes[e] = r;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, r = this.tokenRegex.lastIndex;
    if (r === e.length)
      return new p0("EOF", new l0(this, r, r));
    var a = this.tokenRegex.exec(e);
    if (a === null || a.index !== r)
      throw new M("Unexpected character: '" + e[r] + "'", new p0(e[r], new l0(this, r, r + 1)));
    var i = a[6] || a[3] || (a[2] ? "\\ " : " ");
    if (this.catcodes[i] === 14) {
      var s = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return s === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = s + 1, this.lex();
    }
    return new p0(i, new l0(this, r, this.tokenRegex.lastIndex));
  }
};
var n4 = class {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, r) {
    e === void 0 && (e = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new M("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var r in e)
      e.hasOwnProperty(r) && (e[r] == null ? delete this.current[r] : this.current[r] = e[r]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, r, a) {
    if (a === void 0 && (a = false), a) {
      for (var i = 0; i < this.undefStack.length; i++)
        delete this.undefStack[i][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = r);
    } else {
      var s = this.undefStack[this.undefStack.length - 1];
      s && !s.hasOwnProperty(e) && (s[e] = this.current[e]);
    }
    r == null ? delete this.current[e] : this.current[e] = r;
  }
};
var s4 = Yr;
m("\\noexpand", function(t5) {
  var e = t5.popToken();
  return t5.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), {
    tokens: [e],
    numArgs: 0
  };
});
m("\\expandafter", function(t5) {
  var e = t5.popToken();
  return t5.expandOnce(true), {
    tokens: [e],
    numArgs: 0
  };
});
m("\\@firstoftwo", function(t5) {
  var e = t5.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
m("\\@secondoftwo", function(t5) {
  var e = t5.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
m("\\@ifnextchar", function(t5) {
  var e = t5.consumeArgs(3);
  t5.consumeSpaces();
  var r = t5.future();
  return e[0].length === 1 && e[0][0].text === r.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
m("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
m("\\TextOrMath", function(t5) {
  var e = t5.consumeArgs(2);
  return t5.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var mr = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
m("\\char", function(t5) {
  var e = t5.popToken(), r, a = "";
  if (e.text === "'")
    r = 8, e = t5.popToken();
  else if (e.text === '"')
    r = 16, e = t5.popToken();
  else if (e.text === "`")
    if (e = t5.popToken(), e.text[0] === "\\")
      a = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new M("\\char` missing argument");
      a = e.text.charCodeAt(0);
    }
  else
    r = 10;
  if (r) {
    if (a = mr[e.text], a == null || a >= r)
      throw new M("Invalid base-" + r + " digit " + e.text);
    for (var i; (i = mr[t5.future().text]) != null && i < r; )
      a *= r, a += i, t5.popToken();
  }
  return "\\@char{" + a + "}";
});
var Bt = (t5, e, r, a) => {
  var i = t5.consumeArg().tokens;
  if (i.length !== 1)
    throw new M("\\newcommand's first argument must be a macro name");
  var s = i[0].text, h = t5.isDefined(s);
  if (h && !e)
    throw new M("\\newcommand{" + s + "} attempting to redefine " + (s + "; use \\renewcommand"));
  if (!h && !r)
    throw new M("\\renewcommand{" + s + "} when command " + s + " does not yet exist; use \\newcommand");
  var u = 0;
  if (i = t5.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
    for (var c = "", g = t5.expandNextToken(); g.text !== "]" && g.text !== "EOF"; )
      c += g.text, g = t5.expandNextToken();
    if (!c.match(/^\s*[0-9]+\s*$/))
      throw new M("Invalid number of arguments: " + c);
    u = parseInt(c), i = t5.consumeArg().tokens;
  }
  return h && a || t5.macros.set(s, {
    tokens: i,
    numArgs: u
  }), "";
};
m("\\newcommand", (t5) => Bt(t5, false, true, false));
m("\\renewcommand", (t5) => Bt(t5, true, false, false));
m("\\providecommand", (t5) => Bt(t5, true, true, true));
m("\\message", (t5) => {
  var e = t5.consumeArgs(1)[0];
  return console.log(e.reverse().map((r) => r.text).join("")), "";
});
m("\\errmessage", (t5) => {
  var e = t5.consumeArgs(1)[0];
  return console.error(e.reverse().map((r) => r.text).join("")), "";
});
m("\\show", (t5) => {
  var e = t5.popToken(), r = e.text;
  return console.log(e, t5.macros.get(r), L0[r], X.math[r], X.text[r]), "";
});
m("\\bgroup", "{");
m("\\egroup", "}");
m("~", "\\nobreakspace");
m("\\lq", "`");
m("\\rq", "'");
m("\\aa", "\\r a");
m("\\AA", "\\r A");
m("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
m("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
m("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
m("ℬ", "\\mathscr{B}");
m("ℰ", "\\mathscr{E}");
m("ℱ", "\\mathscr{F}");
m("ℋ", "\\mathscr{H}");
m("ℐ", "\\mathscr{I}");
m("ℒ", "\\mathscr{L}");
m("ℳ", "\\mathscr{M}");
m("ℛ", "\\mathscr{R}");
m("ℭ", "\\mathfrak{C}");
m("ℌ", "\\mathfrak{H}");
m("ℨ", "\\mathfrak{Z}");
m("\\Bbbk", "\\Bbb{k}");
m("·", "\\cdotp");
m("\\llap", "\\mathllap{\\textrm{#1}}");
m("\\rlap", "\\mathrlap{\\textrm{#1}}");
m("\\clap", "\\mathclap{\\textrm{#1}}");
m("\\mathstrut", "\\vphantom{(}");
m("\\underbar", "\\underline{\\text{#1}}");
m("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
m("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
m("\\ne", "\\neq");
m("≠", "\\neq");
m("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
m("∉", "\\notin");
m("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
m("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
m("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
m("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
m("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
m("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
m("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
m("⟂", "\\perp");
m("‼", "\\mathclose{!\\mkern-0.8mu!}");
m("∌", "\\notni");
m("⌜", "\\ulcorner");
m("⌝", "\\urcorner");
m("⌞", "\\llcorner");
m("⌟", "\\lrcorner");
m("©", "\\copyright");
m("®", "\\textregistered");
m("️", "\\textregistered");
m("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
m("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
m("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
m("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
m("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
m("⋮", "\\vdots");
m("\\varGamma", "\\mathit{\\Gamma}");
m("\\varDelta", "\\mathit{\\Delta}");
m("\\varTheta", "\\mathit{\\Theta}");
m("\\varLambda", "\\mathit{\\Lambda}");
m("\\varXi", "\\mathit{\\Xi}");
m("\\varPi", "\\mathit{\\Pi}");
m("\\varSigma", "\\mathit{\\Sigma}");
m("\\varUpsilon", "\\mathit{\\Upsilon}");
m("\\varPhi", "\\mathit{\\Phi}");
m("\\varPsi", "\\mathit{\\Psi}");
m("\\varOmega", "\\mathit{\\Omega}");
m("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
m("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
m("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
m("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
m("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
m("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
m("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
m("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var cr = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
m("\\dots", function(t5) {
  var e = "\\dotso", r = t5.expandAfterFuture().text;
  return r in cr ? e = cr[r] : (r.slice(0, 4) === "\\not" || r in X.math && I.contains(["bin", "rel"], X.math[r].group)) && (e = "\\dotsb"), e;
});
var qt = {
  // \rightdelim@ checks for the following:
  ")": true,
  "]": true,
  "\\rbrack": true,
  "\\}": true,
  "\\rbrace": true,
  "\\rangle": true,
  "\\rceil": true,
  "\\rfloor": true,
  "\\rgroup": true,
  "\\rmoustache": true,
  "\\right": true,
  "\\bigr": true,
  "\\biggr": true,
  "\\Bigr": true,
  "\\Biggr": true,
  // \extra@ also tests for the following:
  $: true,
  // \extrap@ checks for the following:
  ";": true,
  ".": true,
  ",": true
};
m("\\dotso", function(t5) {
  var e = t5.future().text;
  return e in qt ? "\\ldots\\," : "\\ldots";
});
m("\\dotsc", function(t5) {
  var e = t5.future().text;
  return e in qt && e !== "," ? "\\ldots\\," : "\\ldots";
});
m("\\cdots", function(t5) {
  var e = t5.future().text;
  return e in qt ? "\\@cdots\\," : "\\@cdots";
});
m("\\dotsb", "\\cdots");
m("\\dotsm", "\\cdots");
m("\\dotsi", "\\!\\cdots");
m("\\dotsx", "\\ldots\\,");
m("\\DOTSI", "\\relax");
m("\\DOTSB", "\\relax");
m("\\DOTSX", "\\relax");
m("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
m("\\,", "\\tmspace+{3mu}{.1667em}");
m("\\thinspace", "\\,");
m("\\>", "\\mskip{4mu}");
m("\\:", "\\tmspace+{4mu}{.2222em}");
m("\\medspace", "\\:");
m("\\;", "\\tmspace+{5mu}{.2777em}");
m("\\thickspace", "\\;");
m("\\!", "\\tmspace-{3mu}{.1667em}");
m("\\negthinspace", "\\!");
m("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
m("\\negthickspace", "\\tmspace-{5mu}{.277em}");
m("\\enspace", "\\kern.5em ");
m("\\enskip", "\\hskip.5em\\relax");
m("\\quad", "\\hskip1em\\relax");
m("\\qquad", "\\hskip2em\\relax");
m("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
m("\\tag@paren", "\\tag@literal{({#1})}");
m("\\tag@literal", (t5) => {
  if (t5.macros.get("\\df@tag"))
    throw new M("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
m("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
m("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
m("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
m("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
m("\\newline", "\\\\\\relax");
m("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var n1 = z(y0["Main-Regular"][84][1] - 0.7 * y0["Main-Regular"][65][1]);
m("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + n1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
m("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + n1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
m("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
m("\\@hspace", "\\hskip #1\\relax");
m("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
m("\\ordinarycolon", ":");
m("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
m("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
m("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
m("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
m("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
m("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
m("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
m("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
m("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
m("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
m("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
m("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
m("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
m("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
m("∷", "\\dblcolon");
m("∹", "\\eqcolon");
m("≔", "\\coloneqq");
m("≕", "\\eqqcolon");
m("⩴", "\\Coloneqq");
m("\\ratio", "\\vcentcolon");
m("\\coloncolon", "\\dblcolon");
m("\\colonequals", "\\coloneqq");
m("\\coloncolonequals", "\\Coloneqq");
m("\\equalscolon", "\\eqqcolon");
m("\\equalscoloncolon", "\\Eqqcolon");
m("\\colonminus", "\\coloneq");
m("\\coloncolonminus", "\\Coloneq");
m("\\minuscolon", "\\eqcolon");
m("\\minuscoloncolon", "\\Eqcolon");
m("\\coloncolonapprox", "\\Colonapprox");
m("\\coloncolonsim", "\\Colonsim");
m("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
m("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
m("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
m("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
m("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
m("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
m("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
m("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
m("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
m("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
m("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
m("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
m("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
m("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
m("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
m("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
m("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
m("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
m("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
m("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
m("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
m("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
m("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
m("\\imath", "\\html@mathml{\\@imath}{ı}");
m("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
m("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
m("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
m("⟦", "\\llbracket");
m("⟧", "\\rrbracket");
m("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
m("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
m("⦃", "\\lBrace");
m("⦄", "\\rBrace");
m("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
m("⦵", "\\minuso");
m("\\darr", "\\downarrow");
m("\\dArr", "\\Downarrow");
m("\\Darr", "\\Downarrow");
m("\\lang", "\\langle");
m("\\rang", "\\rangle");
m("\\uarr", "\\uparrow");
m("\\uArr", "\\Uparrow");
m("\\Uarr", "\\Uparrow");
m("\\N", "\\mathbb{N}");
m("\\R", "\\mathbb{R}");
m("\\Z", "\\mathbb{Z}");
m("\\alef", "\\aleph");
m("\\alefsym", "\\aleph");
m("\\Alpha", "\\mathrm{A}");
m("\\Beta", "\\mathrm{B}");
m("\\bull", "\\bullet");
m("\\Chi", "\\mathrm{X}");
m("\\clubs", "\\clubsuit");
m("\\cnums", "\\mathbb{C}");
m("\\Complex", "\\mathbb{C}");
m("\\Dagger", "\\ddagger");
m("\\diamonds", "\\diamondsuit");
m("\\empty", "\\emptyset");
m("\\Epsilon", "\\mathrm{E}");
m("\\Eta", "\\mathrm{H}");
m("\\exist", "\\exists");
m("\\harr", "\\leftrightarrow");
m("\\hArr", "\\Leftrightarrow");
m("\\Harr", "\\Leftrightarrow");
m("\\hearts", "\\heartsuit");
m("\\image", "\\Im");
m("\\infin", "\\infty");
m("\\Iota", "\\mathrm{I}");
m("\\isin", "\\in");
m("\\Kappa", "\\mathrm{K}");
m("\\larr", "\\leftarrow");
m("\\lArr", "\\Leftarrow");
m("\\Larr", "\\Leftarrow");
m("\\lrarr", "\\leftrightarrow");
m("\\lrArr", "\\Leftrightarrow");
m("\\Lrarr", "\\Leftrightarrow");
m("\\Mu", "\\mathrm{M}");
m("\\natnums", "\\mathbb{N}");
m("\\Nu", "\\mathrm{N}");
m("\\Omicron", "\\mathrm{O}");
m("\\plusmn", "\\pm");
m("\\rarr", "\\rightarrow");
m("\\rArr", "\\Rightarrow");
m("\\Rarr", "\\Rightarrow");
m("\\real", "\\Re");
m("\\reals", "\\mathbb{R}");
m("\\Reals", "\\mathbb{R}");
m("\\Rho", "\\mathrm{P}");
m("\\sdot", "\\cdot");
m("\\sect", "\\S");
m("\\spades", "\\spadesuit");
m("\\sub", "\\subset");
m("\\sube", "\\subseteq");
m("\\supe", "\\supseteq");
m("\\Tau", "\\mathrm{T}");
m("\\thetasym", "\\vartheta");
m("\\weierp", "\\wp");
m("\\Zeta", "\\mathrm{Z}");
m("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
m("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
m("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
m("\\bra", "\\mathinner{\\langle{#1}|}");
m("\\ket", "\\mathinner{|{#1}\\rangle}");
m("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
m("\\Bra", "\\left\\langle#1\\right|");
m("\\Ket", "\\left|#1\\right\\rangle");
var s1 = (t5) => (e) => {
  var r = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, s = e.consumeArg().tokens, h = e.macros.get("|"), u = e.macros.get("\\|");
  e.macros.beginGroup();
  var c = (y) => (x) => {
    t5 && (x.macros.set("|", h), i.length && x.macros.set("\\|", u));
    var w = y;
    if (!y && i.length) {
      var A = x.future();
      A.text === "|" && (x.popToken(), w = true);
    }
    return {
      tokens: w ? i : a,
      numArgs: 0
    };
  };
  e.macros.set("|", c(false)), i.length && e.macros.set("\\|", c(true));
  var g = e.consumeArg().tokens, v = e.expandTokens([
    ...s,
    ...g,
    ...r
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: v.reverse(),
    numArgs: 0
  };
};
m("\\bra@ket", s1(false));
m("\\bra@set", s1(true));
m("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
m("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
m("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
m("\\angln", "{\\angl n}");
m("\\blue", "\\textcolor{##6495ed}{#1}");
m("\\orange", "\\textcolor{##ffa500}{#1}");
m("\\pink", "\\textcolor{##ff00af}{#1}");
m("\\red", "\\textcolor{##df0030}{#1}");
m("\\green", "\\textcolor{##28ae7b}{#1}");
m("\\gray", "\\textcolor{gray}{#1}");
m("\\purple", "\\textcolor{##9d38bd}{#1}");
m("\\blueA", "\\textcolor{##ccfaff}{#1}");
m("\\blueB", "\\textcolor{##80f6ff}{#1}");
m("\\blueC", "\\textcolor{##63d9ea}{#1}");
m("\\blueD", "\\textcolor{##11accd}{#1}");
m("\\blueE", "\\textcolor{##0c7f99}{#1}");
m("\\tealA", "\\textcolor{##94fff5}{#1}");
m("\\tealB", "\\textcolor{##26edd5}{#1}");
m("\\tealC", "\\textcolor{##01d1c1}{#1}");
m("\\tealD", "\\textcolor{##01a995}{#1}");
m("\\tealE", "\\textcolor{##208170}{#1}");
m("\\greenA", "\\textcolor{##b6ffb0}{#1}");
m("\\greenB", "\\textcolor{##8af281}{#1}");
m("\\greenC", "\\textcolor{##74cf70}{#1}");
m("\\greenD", "\\textcolor{##1fab54}{#1}");
m("\\greenE", "\\textcolor{##0d923f}{#1}");
m("\\goldA", "\\textcolor{##ffd0a9}{#1}");
m("\\goldB", "\\textcolor{##ffbb71}{#1}");
m("\\goldC", "\\textcolor{##ff9c39}{#1}");
m("\\goldD", "\\textcolor{##e07d10}{#1}");
m("\\goldE", "\\textcolor{##a75a05}{#1}");
m("\\redA", "\\textcolor{##fca9a9}{#1}");
m("\\redB", "\\textcolor{##ff8482}{#1}");
m("\\redC", "\\textcolor{##f9685d}{#1}");
m("\\redD", "\\textcolor{##e84d39}{#1}");
m("\\redE", "\\textcolor{##bc2612}{#1}");
m("\\maroonA", "\\textcolor{##ffbde0}{#1}");
m("\\maroonB", "\\textcolor{##ff92c6}{#1}");
m("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
m("\\maroonD", "\\textcolor{##ca337c}{#1}");
m("\\maroonE", "\\textcolor{##9e034e}{#1}");
m("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
m("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
m("\\purpleC", "\\textcolor{##aa87ff}{#1}");
m("\\purpleD", "\\textcolor{##7854ab}{#1}");
m("\\purpleE", "\\textcolor{##543b78}{#1}");
m("\\mintA", "\\textcolor{##f5f9e8}{#1}");
m("\\mintB", "\\textcolor{##edf2df}{#1}");
m("\\mintC", "\\textcolor{##e0e5cc}{#1}");
m("\\grayA", "\\textcolor{##f6f7f7}{#1}");
m("\\grayB", "\\textcolor{##f0f1f2}{#1}");
m("\\grayC", "\\textcolor{##e3e5e6}{#1}");
m("\\grayD", "\\textcolor{##d6d8da}{#1}");
m("\\grayE", "\\textcolor{##babec2}{#1}");
m("\\grayF", "\\textcolor{##888d93}{#1}");
m("\\grayG", "\\textcolor{##626569}{#1}");
m("\\grayH", "\\textcolor{##3b3e40}{#1}");
m("\\grayI", "\\textcolor{##21242c}{#1}");
m("\\kaBlue", "\\textcolor{##314453}{#1}");
m("\\kaGreen", "\\textcolor{##71B307}{#1}");
var o1 = {
  "^": true,
  // Parser.js
  _: true,
  // Parser.js
  "\\limits": true,
  // Parser.js
  "\\nolimits": true
  // Parser.js
};
var o4 = class {
  constructor(e, r, a) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(e), this.macros = new n4(s4, r.macros), this.mode = a, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new ur(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var r, a, i;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      r = this.popToken(), {
        tokens: i,
        end: a
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: i,
        start: r,
        end: a
      } = this.consumeArg());
    return this.pushToken(new p0("EOF", a.loc)), this.pushTokens(i), r.range(a, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var r = [], a = e && e.length > 0;
    a || this.consumeSpaces();
    var i = this.future(), s, h = 0, u = 0;
    do {
      if (s = this.popToken(), r.push(s), s.text === "{")
        ++h;
      else if (s.text === "}") {
        if (--h, h === -1)
          throw new M("Extra }", s);
      } else if (s.text === "EOF")
        throw new M("Unexpected end of input in a macro argument, expected '" + (e && a ? e[u] : "}") + "'", s);
      if (e && a)
        if ((h === 0 || h === 1 && e[u] === "{") && s.text === e[u]) {
          if (++u, u === e.length) {
            r.splice(-u, u);
            break;
          }
        } else
          u = 0;
    } while (h !== 0 || a);
    return i.text === "{" && r[r.length - 1].text === "}" && (r.pop(), r.shift()), r.reverse(), {
      tokens: r,
      start: i,
      end: s
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, r) {
    if (r) {
      if (r.length !== e + 1)
        throw new M("The length of delimiters doesn't match the number of args!");
      for (var a = r[0], i = 0; i < a.length; i++) {
        var s = this.popToken();
        if (a[i] !== s.text)
          throw new M("Use of the macro doesn't match its definition", s);
      }
    }
    for (var h = [], u = 0; u < e; u++)
      h.push(this.consumeArg(r && r[u + 1]).tokens);
    return h;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new M("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var r = this.popToken(), a = r.text, i = r.noexpand ? null : this._getExpansion(a);
    if (i == null || e && i.unexpandable) {
      if (e && i == null && a[0] === "\\" && !this.isDefined(a))
        throw new M("Undefined control sequence: " + a);
      return this.pushToken(r), false;
    }
    this.countExpansion(1);
    var s = i.tokens, h = this.consumeArgs(i.numArgs, i.delimiters);
    if (i.numArgs) {
      s = s.slice();
      for (var u = s.length - 1; u >= 0; --u) {
        var c = s[u];
        if (c.text === "#") {
          if (u === 0)
            throw new M("Incomplete placeholder at end of macro body", c);
          if (c = s[--u], c.text === "#")
            s.splice(u + 1, 1);
          else if (/^[1-9]$/.test(c.text))
            s.splice(u, 2, ...h[+c.text - 1]);
          else
            throw new M("Not a valid argument number", c);
        }
      }
    }
    return this.pushTokens(s), s.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === false) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new p0(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var r = [], a = this.stack.length;
    for (this.pushTokens(e); this.stack.length > a; )
      if (this.expandOnce(true) === false) {
        var i = this.stack.pop();
        i.treatAsRelax && (i.noexpand = false, i.treatAsRelax = false), r.push(i);
      }
    return this.countExpansion(r.length), r;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var r = this.expandMacro(e);
    return r && r.map((a) => a.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var r = this.macros.get(e);
    if (r == null)
      return r;
    if (e.length === 1) {
      var a = this.lexer.catcodes[e];
      if (a != null && a !== 13)
        return;
    }
    var i = typeof r == "function" ? r(this) : r;
    if (typeof i == "string") {
      var s = 0;
      if (i.indexOf("#") !== -1)
        for (var h = i.replace(/##/g, ""); h.indexOf("#" + (s + 1)) !== -1; )
          ++s;
      for (var u = new ur(i, this.settings), c = [], g = u.lex(); g.text !== "EOF"; )
        c.push(g), g = u.lex();
      c.reverse();
      var v = {
        tokens: c,
        numArgs: s
      };
      return v;
    }
    return i;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || L0.hasOwnProperty(e) || X.math.hasOwnProperty(e) || X.text.hasOwnProperty(e) || o1.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var r = this.macros.get(e);
    return r != null ? typeof r == "string" || typeof r == "function" || !r.unexpandable : L0.hasOwnProperty(e) && !L0[e].primitive;
  }
};
var pr = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/;
var Se = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
});
var rt = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
};
var dr = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
var De = class _De {
  constructor(e, r) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new o4(e, r, this.mode), this.settings = r, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, r) {
    if (r === void 0 && (r = true), this.fetch().text !== e)
      throw new M("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    r && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(false);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var r = this.nextToken;
    this.consume(), this.gullet.pushToken(new p0("}")), this.gullet.pushTokens(e);
    var a = this.parseExpression(false);
    return this.expect("}"), this.nextToken = r, a;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, r) {
    for (var a = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var i = this.fetch();
      if (_De.endOfExpression.indexOf(i.text) !== -1 || r && i.text === r || e && L0[i.text] && L0[i.text].infix)
        break;
      var s = this.parseAtom(r);
      if (s) {
        if (s.type === "internal")
          continue;
      } else break;
      a.push(s);
    }
    return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var r = -1, a, i = 0; i < e.length; i++)
      if (e[i].type === "infix") {
        if (r !== -1)
          throw new M("only one infix operator per group", e[i].token);
        r = i, a = e[i].replaceWith;
      }
    if (r !== -1 && a) {
      var s, h, u = e.slice(0, r), c = e.slice(r + 1);
      u.length === 1 && u[0].type === "ordgroup" ? s = u[0] : s = {
        type: "ordgroup",
        mode: this.mode,
        body: u
      }, c.length === 1 && c[0].type === "ordgroup" ? h = c[0] : h = {
        type: "ordgroup",
        mode: this.mode,
        body: c
      };
      var g;
      return a === "\\\\abovefrac" ? g = this.callFunction(a, [s, e[r], h], []) : g = this.callFunction(a, [s, h], []), [g];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var r = this.fetch(), a = r.text;
    this.consume(), this.consumeSpaces();
    var i;
    do {
      var s;
      i = this.parseGroup(e);
    } while (((s = i) == null ? void 0 : s.type) === "internal");
    if (!i)
      throw new M("Expected group after '" + a + "'", r);
    return i;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var r = [], a = 0; a < e.length; a++)
      r.push({
        type: "textord",
        mode: "text",
        text: e[a]
      });
    var i = {
      type: "text",
      mode: this.mode,
      body: r
    }, s = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [i]
    };
    return s;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var r = this.parseGroup("atom", e);
    if ((r == null ? void 0 : r.type) === "internal" || this.mode === "text")
      return r;
    for (var a, i; ; ) {
      this.consumeSpaces();
      var s = this.fetch();
      if (s.text === "\\limits" || s.text === "\\nolimits") {
        if (r && r.type === "op") {
          var h = s.text === "\\limits";
          r.limits = h, r.alwaysHandleSupSub = true;
        } else if (r && r.type === "operatorname")
          r.alwaysHandleSupSub && (r.limits = s.text === "\\limits");
        else
          throw new M("Limit controls must follow a math operator", s);
        this.consume();
      } else if (s.text === "^") {
        if (a)
          throw new M("Double superscript", s);
        a = this.handleSupSubscript("superscript");
      } else if (s.text === "_") {
        if (i)
          throw new M("Double subscript", s);
        i = this.handleSupSubscript("subscript");
      } else if (s.text === "'") {
        if (a)
          throw new M("Double superscript", s);
        var u = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, c = [u];
        for (this.consume(); this.fetch().text === "'"; )
          c.push(u), this.consume();
        this.fetch().text === "^" && c.push(this.handleSupSubscript("superscript")), a = {
          type: "ordgroup",
          mode: this.mode,
          body: c
        };
      } else if (Se[s.text]) {
        var g = pr.test(s.text), v = [];
        for (v.push(new p0(Se[s.text])), this.consume(); ; ) {
          var y = this.fetch().text;
          if (!Se[y] || pr.test(y) !== g)
            break;
          v.unshift(new p0(Se[y])), this.consume();
        }
        var x = this.subparse(v);
        g ? i = {
          type: "ordgroup",
          mode: "math",
          body: x
        } : a = {
          type: "ordgroup",
          mode: "math",
          body: x
        };
      } else
        break;
    }
    return a || i ? {
      type: "supsub",
      mode: this.mode,
      base: r,
      sup: a,
      sub: i
    } : r;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, r) {
    var a = this.fetch(), i = a.text, s = L0[i];
    if (!s)
      return null;
    if (this.consume(), r && r !== "atom" && !s.allowedInArgument)
      throw new M("Got function '" + i + "' with no arguments" + (r ? " as " + r : ""), a);
    if (this.mode === "text" && !s.allowedInText)
      throw new M("Can't use function '" + i + "' in text mode", a);
    if (this.mode === "math" && s.allowedInMath === false)
      throw new M("Can't use function '" + i + "' in math mode", a);
    var {
      args: h,
      optArgs: u
    } = this.parseArguments(i, s);
    return this.callFunction(i, h, u, a, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, r, a, i, s) {
    var h = {
      funcName: e,
      parser: this,
      token: i,
      breakOnTokenText: s
    }, u = L0[e];
    if (u && u.handler)
      return u.handler(h, r, a);
    throw new M("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, r) {
    var a = r.numArgs + r.numOptionalArgs;
    if (a === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var i = [], s = [], h = 0; h < a; h++) {
      var u = r.argTypes && r.argTypes[h], c = h < r.numOptionalArgs;
      (r.primitive && u == null || // \sqrt expands into primitive if optional argument doesn't exist
      r.type === "sqrt" && h === 1 && s[0] == null) && (u = "primitive");
      var g = this.parseGroupOfType("argument to '" + e + "'", u, c);
      if (c)
        s.push(g);
      else if (g != null)
        i.push(g);
      else
        throw new M("Null argument, please report this as a bug");
    }
    return {
      args: i,
      optArgs: s
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, r, a) {
    switch (r) {
      case "color":
        return this.parseColorGroup(a);
      case "size":
        return this.parseSizeGroup(a);
      case "url":
        return this.parseUrlGroup(a);
      case "math":
      case "text":
        return this.parseArgumentGroup(a, r);
      case "hbox": {
        var i = this.parseArgumentGroup(a, "text");
        return i != null ? {
          type: "styling",
          mode: i.mode,
          body: [i],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var s = this.parseStringGroup("raw", a);
        return s != null ? {
          type: "raw",
          mode: "text",
          string: s.text
        } : null;
      }
      case "primitive": {
        if (a)
          throw new M("A primitive argument cannot be optional");
        var h = this.parseGroup(e);
        if (h == null)
          throw new M("Expected group as " + e, this.fetch());
        return h;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(a);
      default:
        throw new M("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, r) {
    var a = this.gullet.scanArgument(r);
    if (a == null)
      return null;
    for (var i = "", s; (s = this.fetch()).text !== "EOF"; )
      i += s.text, this.consume();
    return this.consume(), a.text = i, a;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, r) {
    for (var a = this.fetch(), i = a, s = "", h; (h = this.fetch()).text !== "EOF" && e.test(s + h.text); )
      i = h, s += i.text, this.consume();
    if (s === "")
      throw new M("Invalid " + r + ": '" + a.text + "'", a);
    return a.range(i, s);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var r = this.parseStringGroup("color", e);
    if (r == null)
      return null;
    var a = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);
    if (!a)
      throw new M("Invalid color: '" + r.text + "'", r);
    var i = a[0];
    return /^[0-9a-f]{6}$/i.test(i) && (i = "#" + i), {
      type: "color-token",
      mode: this.mode,
      color: i
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var r, a = false;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? r = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : r = this.parseStringGroup("size", e), !r)
      return null;
    !e && r.text.length === 0 && (r.text = "0pt", a = true);
    var i = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);
    if (!i)
      throw new M("Invalid size: '" + r.text + "'", r);
    var s = {
      number: +(i[1] + i[2]),
      // sign + magnitude, cast to number
      unit: i[3]
    };
    if (!vr(s))
      throw new M("Invalid unit: '" + s.unit + "'", r);
    return {
      type: "size",
      mode: this.mode,
      value: s,
      isBlank: a
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var r = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), r == null)
      return null;
    var a = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: a
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, r) {
    var a = this.gullet.scanArgument(e);
    if (a == null)
      return null;
    var i = this.mode;
    r && this.switchMode(r), this.gullet.beginGroup();
    var s = this.parseExpression(false, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var h = {
      type: "ordgroup",
      mode: this.mode,
      loc: a.loc,
      body: s
    };
    return r && this.switchMode(i), h;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, r) {
    var a = this.fetch(), i = a.text, s;
    if (i === "{" || i === "\\begingroup") {
      this.consume();
      var h = i === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var u = this.parseExpression(false, h), c = this.fetch();
      this.expect(h), this.gullet.endGroup(), s = {
        type: "ordgroup",
        mode: this.mode,
        loc: l0.range(a, c),
        body: u,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: i === "\\begingroup" || void 0
      };
    } else if (s = this.parseFunction(r, e) || this.parseSymbol(), s == null && i[0] === "\\" && !o1.hasOwnProperty(i)) {
      if (this.settings.throwOnError)
        throw new M("Undefined control sequence: " + i, a);
      s = this.formatUnsupportedCmd(i), this.consume();
    }
    return s;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var r = e.length - 1, a = 0; a < r; ++a) {
      var i = e[a], s = i.text;
      s === "-" && e[a + 1].text === "-" && (a + 1 < r && e[a + 2].text === "-" ? (e.splice(a, 3, {
        type: "textord",
        mode: "text",
        loc: l0.range(i, e[a + 2]),
        text: "---"
      }), r -= 2) : (e.splice(a, 2, {
        type: "textord",
        mode: "text",
        loc: l0.range(i, e[a + 1]),
        text: "--"
      }), r -= 1)), (s === "'" || s === "`") && e[a + 1].text === s && (e.splice(a, 2, {
        type: "textord",
        mode: "text",
        loc: l0.range(i, e[a + 1]),
        text: s + s
      }), r -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), r = e.text;
    if (/^\\verb[^a-zA-Z]/.test(r)) {
      this.consume();
      var a = r.slice(5), i = a.charAt(0) === "*";
      if (i && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1))
        throw new M(`\\verb assertion failed --
                    please report what input caused this bug`);
      return a = a.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: a,
        star: i
      };
    }
    dr.hasOwnProperty(r[0]) && !X[this.mode][r[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + r[0] + '" used in math mode', e), r = dr[r[0]] + r.slice(1));
    var s = a4.exec(r);
    s && (r = r.substring(0, s.index), r === "i" ? r = "ı" : r === "j" && (r = "ȷ"));
    var h;
    if (X[this.mode][r]) {
      this.settings.strict && this.mode === "math" && st.indexOf(r) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + r[0] + '" used in math mode', e);
      var u = X[this.mode][r].group, c = l0.range(e), g;
      if (j1.hasOwnProperty(u)) {
        var v = u;
        g = {
          type: "atom",
          mode: this.mode,
          family: v,
          loc: c,
          text: r
        };
      } else
        g = {
          type: u,
          mode: this.mode,
          loc: c,
          text: r
        };
      h = g;
    } else if (r.charCodeAt(0) >= 128)
      this.settings.strict && (fr(r.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + r[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + r[0] + '"' + (" (" + r.charCodeAt(0) + ")"), e)), h = {
        type: "textord",
        mode: "text",
        loc: l0.range(e),
        text: r
      };
    else
      return null;
    if (this.consume(), s)
      for (var y = 0; y < s[0].length; y++) {
        var x = s[0][y];
        if (!rt[x])
          throw new M("Unknown accent ' " + x + "'", e);
        var w = rt[x][this.mode] || rt[x].text;
        if (!w)
          throw new M("Accent " + x + " unsupported in " + this.mode + " mode", e);
        h = {
          type: "accent",
          mode: this.mode,
          loc: l0.range(e),
          label: w,
          isStretchy: false,
          isShifty: true,
          // $FlowFixMe
          base: h
        };
      }
    return h;
  }
};
De.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Ct = function(t5, e) {
  if (!(typeof t5 == "string" || t5 instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new De(t5, e);
  delete r.gullet.macros.current["\\df@tag"];
  var a = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!e.displayMode)
      throw new M("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: r.subparse([new p0("\\df@tag")])
    }];
  }
  return a;
};
var l1 = function(t5, e, r) {
  e.textContent = "";
  var a = Nt(t5, r).toNode();
  e.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), l1 = function() {
  throw new M("KaTeX doesn't work in quirks mode.");
});
var l4 = function(t5, e) {
  var r = Nt(t5, e).toMarkup();
  return r;
};
var h4 = function(t5, e) {
  var r = new ct(e);
  return Ct(t5, r);
};
var h1 = function(t5, e, r) {
  if (r.throwOnError || !(t5 instanceof M))
    throw t5;
  var a = b.makeSpan(["katex-error"], [new d0(e)]);
  return a.setAttribute("title", t5.toString()), a.setAttribute("style", "color:" + r.errorColor), a;
};
var Nt = function(t5, e) {
  var r = new ct(e);
  try {
    var a = Ct(t5, r);
    return ba(a, t5, r);
  } catch (i) {
    return h1(i, t5, r);
  }
};
var u4 = function(t5, e) {
  var r = new ct(e);
  try {
    var a = Ct(t5, r);
    return ya(a, t5, r);
  } catch (i) {
    return h1(i, t5, r);
  }
};
var m4 = "0.16.22";
var c4 = {
  Span: he,
  Anchor: gt,
  SymbolNode: d0,
  SvgNode: q0,
  PathNode: P0,
  LineNode: nt
};
var p4 = {
  /**
   * Current KaTeX version
   */
  version: m4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: l1,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: l4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: M,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: Me,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: h4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Nt,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: u4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: F1,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: n,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: B,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: m,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: c4
};
export {
  M as ParseError,
  Me as SETTINGS_SCHEMA,
  B as __defineFunction,
  m as __defineMacro,
  n as __defineSymbol,
  c4 as __domTree,
  h4 as __parse,
  Nt as __renderToDomTree,
  u4 as __renderToHTMLTree,
  F1 as __setFontMetrics,
  p4 as default,
  l1 as render,
  l4 as renderToString,
  m4 as version
};
//# sourceMappingURL=katex-CUSbq6rG-DCyV1FlS-2CUMXT6W.js.map
