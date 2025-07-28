import {
  g
} from "./chunk-AJ275QFQ.js";
import {
  it
} from "./chunk-3XFQ3PJV.js";
import "./chunk-FNYQFTZX.js";
import {
  a
} from "./chunk-MWG22XKG.js";
import {
  NR,
  S,
  TZ,
  Vr,
  aK,
  dP,
  eV,
  fP,
  gP,
  hP,
  hw,
  mP,
  pP,
  pg,
  to,
  tw,
  uP,
  ut
} from "./chunk-G6K7VW2X.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/xychartDiagram-H2YORKM3-CG64ebqo-CxP5Tk3X.js
function _i(t, i, e) {
  t = +t, i = +i, e = (h = arguments.length) < 2 ? (i = t, t = 0, 1) : h < 3 ? 1 : +e;
  for (var s = -1, h = Math.max(0, Math.ceil((i - t) / e)) | 0, x = new Array(h); ++s < h; )
    x[s] = t + s * e;
  return x;
}
function yt() {
  var t = g().unknown(void 0), i = t.domain, e = t.range, s = 0, h = 1, x, g2, f = false, S2 = 0, R = 0, D = 0.5;
  delete t.unknown;
  function A() {
    var m = i().length, v = h < s, T = v ? h : s, L = v ? s : h;
    x = (L - T) / Math.max(1, m - S2 + R * 2), f && (x = Math.floor(x)), T += (L - T - x * (m - S2)) * D, g2 = x * (1 - S2), f && (T = Math.round(T), g2 = Math.round(g2));
    var E = _i(m).map(function(p) {
      return T + x * p;
    });
    return e(v ? E.reverse() : E);
  }
  return t.domain = function(m) {
    return arguments.length ? (i(m), A()) : i();
  }, t.range = function(m) {
    return arguments.length ? ([s, h] = m, s = +s, h = +h, A()) : [s, h];
  }, t.rangeRound = function(m) {
    return [s, h] = m, s = +s, h = +h, f = true, A();
  }, t.bandwidth = function() {
    return g2;
  }, t.step = function() {
    return x;
  }, t.round = function(m) {
    return arguments.length ? (f = !!m, A()) : f;
  }, t.padding = function(m) {
    return arguments.length ? (S2 = Math.min(1, R = +m), A()) : S2;
  }, t.paddingInner = function(m) {
    return arguments.length ? (S2 = Math.min(1, m), A()) : S2;
  }, t.paddingOuter = function(m) {
    return arguments.length ? (R = +m, A()) : R;
  }, t.align = function(m) {
    return arguments.length ? (D = Math.max(0, Math.min(1, m)), A()) : D;
  }, t.copy = function() {
    return yt(i(), [s, h]).round(f).paddingInner(S2).paddingOuter(R).align(D);
  }, a.apply(A(), arguments);
}
var bt = function() {
  var t = S(function(z, r, c, u) {
    for (c = c || {}, u = z.length; u--; c[z[u]] = r) ;
    return c;
  }, "o"), i = [1, 10, 12, 14, 16, 18, 19, 21, 23], e = [2, 6], s = [1, 3], h = [1, 5], x = [1, 6], g2 = [1, 7], f = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], S2 = [1, 25], R = [1, 26], D = [1, 28], A = [1, 29], m = [1, 30], v = [1, 31], T = [1, 32], L = [1, 33], E = [1, 34], p = [1, 35], C = [1, 36], l = [1, 37], B = [1, 43], F = [1, 42], U = [1, 47], N = [1, 50], o = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], P = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36], w = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], k = [1, 64], j = {
    trace: S(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, XYCHART: 5, chartConfig: 6, document: 7, CHART_ORIENTATION: 8, statement: 9, title: 10, text: 11, X_AXIS: 12, parseXAxis: 13, Y_AXIS: 14, parseYAxis: 15, LINE: 16, plotData: 17, BAR: 18, acc_title: 19, acc_title_value: 20, acc_descr: 21, acc_descr_value: 22, acc_descr_multiline_value: 23, SQUARE_BRACES_START: 24, commaSeparatedNumbers: 25, SQUARE_BRACES_END: 26, NUMBER_WITH_DECIMAL: 27, COMMA: 28, xAxisData: 29, bandData: 30, ARROW_DELIMITER: 31, commaSeparatedTexts: 32, yAxisData: 33, NEWLINE: 34, SEMI: 35, EOF: 36, alphaNum: 37, STR: 38, MD_STR: 39, alphaNumToken: 40, AMP: 41, NUM: 42, ALPHA: 43, PLUS: 44, EQUALS: 45, MULT: 46, DOT: 47, BRKT: 48, MINUS: 49, UNDERSCORE: 50, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "XYCHART", 8: "CHART_ORIENTATION", 10: "title", 12: "X_AXIS", 14: "Y_AXIS", 16: "LINE", 18: "BAR", 19: "acc_title", 20: "acc_title_value", 21: "acc_descr", 22: "acc_descr_value", 23: "acc_descr_multiline_value", 24: "SQUARE_BRACES_START", 26: "SQUARE_BRACES_END", 27: "NUMBER_WITH_DECIMAL", 28: "COMMA", 31: "ARROW_DELIMITER", 34: "NEWLINE", 35: "SEMI", 36: "EOF", 38: "STR", 39: "MD_STR", 41: "AMP", 42: "NUM", 43: "ALPHA", 44: "PLUS", 45: "EQUALS", 46: "MULT", 47: "DOT", 48: "BRKT", 49: "MINUS", 50: "UNDERSCORE" },
    productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [13, 1], [13, 2], [13, 1], [29, 1], [29, 3], [30, 3], [32, 3], [32, 1], [15, 1], [15, 2], [15, 1], [33, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [37, 1], [37, 2], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1]],
    performAction: S(function(z, r, c, u, b, a2, I) {
      var d = a2.length - 1;
      switch (b) {
        case 5:
          u.setOrientation(a2[d]);
          break;
        case 9:
          u.setDiagramTitle(a2[d].text.trim());
          break;
        case 12:
          u.setLineData({ text: "", type: "text" }, a2[d]);
          break;
        case 13:
          u.setLineData(a2[d - 1], a2[d]);
          break;
        case 14:
          u.setBarData({ text: "", type: "text" }, a2[d]);
          break;
        case 15:
          u.setBarData(a2[d - 1], a2[d]);
          break;
        case 16:
          this.$ = a2[d].trim(), u.setAccTitle(this.$);
          break;
        case 17:
        case 18:
          this.$ = a2[d].trim(), u.setAccDescription(this.$);
          break;
        case 19:
          this.$ = a2[d - 1];
          break;
        case 20:
          this.$ = [Number(a2[d - 2]), ...a2[d]];
          break;
        case 21:
          this.$ = [Number(a2[d])];
          break;
        case 22:
          u.setXAxisTitle(a2[d]);
          break;
        case 23:
          u.setXAxisTitle(a2[d - 1]);
          break;
        case 24:
          u.setXAxisTitle({ type: "text", text: "" });
          break;
        case 25:
          u.setXAxisBand(a2[d]);
          break;
        case 26:
          u.setXAxisRangeData(Number(a2[d - 2]), Number(a2[d]));
          break;
        case 27:
          this.$ = a2[d - 1];
          break;
        case 28:
          this.$ = [a2[d - 2], ...a2[d]];
          break;
        case 29:
          this.$ = [a2[d]];
          break;
        case 30:
          u.setYAxisTitle(a2[d]);
          break;
        case 31:
          u.setYAxisTitle(a2[d - 1]);
          break;
        case 32:
          u.setYAxisTitle({ type: "text", text: "" });
          break;
        case 33:
          u.setYAxisRangeData(Number(a2[d - 2]), Number(a2[d]));
          break;
        case 37:
          this.$ = { text: a2[d], type: "text" };
          break;
        case 38:
          this.$ = { text: a2[d], type: "text" };
          break;
        case 39:
          this.$ = { text: a2[d], type: "markdown" };
          break;
        case 40:
          this.$ = a2[d];
          break;
        case 41:
          this.$ = a2[d - 1] + "" + a2[d];
          break;
      }
    }, "anonymous"),
    table: [t(i, e, { 3: 1, 4: 2, 7: 4, 5: s, 34: h, 35: x, 36: g2 }), { 1: [3] }, t(i, e, { 4: 2, 7: 4, 3: 8, 5: s, 34: h, 35: x, 36: g2 }), t(i, e, { 4: 2, 7: 4, 6: 9, 3: 10, 5: s, 8: [1, 11], 34: h, 35: x, 36: g2 }), { 1: [2, 4], 9: 12, 10: [1, 13], 12: [1, 14], 14: [1, 15], 16: [1, 16], 18: [1, 17], 19: [1, 18], 21: [1, 19], 23: [1, 20] }, t(f, [2, 34]), t(f, [2, 35]), t(f, [2, 36]), { 1: [2, 1] }, t(i, e, { 4: 2, 7: 4, 3: 21, 5: s, 34: h, 35: x, 36: g2 }), { 1: [2, 3] }, t(f, [2, 5]), t(i, [2, 7], { 4: 22, 34: h, 35: x, 36: g2 }), { 11: 23, 37: 24, 38: S2, 39: R, 40: 27, 41: D, 42: A, 43: m, 44: v, 45: T, 46: L, 47: E, 48: p, 49: C, 50: l }, { 11: 39, 13: 38, 24: B, 27: F, 29: 40, 30: 41, 37: 24, 38: S2, 39: R, 40: 27, 41: D, 42: A, 43: m, 44: v, 45: T, 46: L, 47: E, 48: p, 49: C, 50: l }, { 11: 45, 15: 44, 27: U, 33: 46, 37: 24, 38: S2, 39: R, 40: 27, 41: D, 42: A, 43: m, 44: v, 45: T, 46: L, 47: E, 48: p, 49: C, 50: l }, { 11: 49, 17: 48, 24: N, 37: 24, 38: S2, 39: R, 40: 27, 41: D, 42: A, 43: m, 44: v, 45: T, 46: L, 47: E, 48: p, 49: C, 50: l }, { 11: 52, 17: 51, 24: N, 37: 24, 38: S2, 39: R, 40: 27, 41: D, 42: A, 43: m, 44: v, 45: T, 46: L, 47: E, 48: p, 49: C, 50: l }, { 20: [1, 53] }, { 22: [1, 54] }, t(o, [2, 18]), { 1: [2, 2] }, t(o, [2, 8]), t(o, [2, 9]), t(P, [2, 37], { 40: 55, 41: D, 42: A, 43: m, 44: v, 45: T, 46: L, 47: E, 48: p, 49: C, 50: l }), t(P, [2, 38]), t(P, [2, 39]), t(w, [2, 40]), t(w, [2, 42]), t(w, [2, 43]), t(w, [2, 44]), t(w, [2, 45]), t(w, [2, 46]), t(w, [2, 47]), t(w, [2, 48]), t(w, [2, 49]), t(w, [2, 50]), t(w, [2, 51]), t(o, [2, 10]), t(o, [2, 22], { 30: 41, 29: 56, 24: B, 27: F }), t(o, [2, 24]), t(o, [2, 25]), { 31: [1, 57] }, { 11: 59, 32: 58, 37: 24, 38: S2, 39: R, 40: 27, 41: D, 42: A, 43: m, 44: v, 45: T, 46: L, 47: E, 48: p, 49: C, 50: l }, t(o, [2, 11]), t(o, [2, 30], { 33: 60, 27: U }), t(o, [2, 32]), { 31: [1, 61] }, t(o, [2, 12]), { 17: 62, 24: N }, { 25: 63, 27: k }, t(o, [2, 14]), { 17: 65, 24: N }, t(o, [2, 16]), t(o, [2, 17]), t(w, [2, 41]), t(o, [2, 23]), { 27: [1, 66] }, { 26: [1, 67] }, { 26: [2, 29], 28: [1, 68] }, t(o, [2, 31]), { 27: [1, 69] }, t(o, [2, 13]), { 26: [1, 70] }, { 26: [2, 21], 28: [1, 71] }, t(o, [2, 15]), t(o, [2, 26]), t(o, [2, 27]), { 11: 59, 32: 72, 37: 24, 38: S2, 39: R, 40: 27, 41: D, 42: A, 43: m, 44: v, 45: T, 46: L, 47: E, 48: p, 49: C, 50: l }, t(o, [2, 33]), t(o, [2, 19]), { 25: 73, 27: k }, { 26: [2, 28] }, { 26: [2, 20] }],
    defaultActions: { 8: [2, 1], 10: [2, 3], 21: [2, 2], 72: [2, 28], 73: [2, 20] },
    parseError: S(function(z, r) {
      if (r.recoverable)
        this.trace(z);
      else {
        var c = new Error(z);
        throw c.hash = r, c;
      }
    }, "parseError"),
    parse: S(function(z) {
      var r = this, c = [0], u = [], b = [null], a2 = [], I = this.table, d = "", q = 0, Et = 0, ri = 2, It = 1, oi = a2.slice.call(arguments, 1), _ = Object.create(this.lexer), V = { yy: {} };
      for (var nt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, nt) && (V.yy[nt] = this.yy[nt]);
      _.setInput(z, V.yy), V.yy.lexer = _, V.yy.parser = this, typeof _.yylloc > "u" && (_.yylloc = {});
      var at = _.yylloc;
      a2.push(at);
      var li = _.options && _.options.ranges;
      typeof V.yy.parseError == "function" ? this.parseError = V.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ci(M) {
        c.length = c.length - 2 * M, b.length = b.length - M, a2.length = a2.length - M;
      }
      S(ci, "popStack");
      function $t() {
        var M;
        return M = u.pop() || _.lex() || It, typeof M != "number" && (M instanceof Array && (u = M, M = u.pop()), M = r.symbols_[M] || M), M;
      }
      S($t, "lex");
      for (var $, Y, W, ht, H = {}, tt, X, Mt, it2; ; ) {
        if (Y = c[c.length - 1], this.defaultActions[Y] ? W = this.defaultActions[Y] : (($ === null || typeof $ > "u") && ($ = $t()), W = I[Y] && I[Y][$]), typeof W > "u" || !W.length || !W[0]) {
          var rt = "";
          it2 = [];
          for (tt in I[Y])
            this.terminals_[tt] && tt > ri && it2.push("'" + this.terminals_[tt] + "'");
          _.showPosition ? rt = "Parse error on line " + (q + 1) + `:
` + _.showPosition() + `
Expecting ` + it2.join(", ") + ", got '" + (this.terminals_[$] || $) + "'" : rt = "Parse error on line " + (q + 1) + ": Unexpected " + ($ == It ? "end of input" : "'" + (this.terminals_[$] || $) + "'"), this.parseError(rt, {
            text: _.match,
            token: this.terminals_[$] || $,
            line: _.yylineno,
            loc: at,
            expected: it2
          });
        }
        if (W[0] instanceof Array && W.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Y + ", token: " + $);
        switch (W[0]) {
          case 1:
            c.push($), b.push(_.yytext), a2.push(_.yylloc), c.push(W[1]), $ = null, Et = _.yyleng, d = _.yytext, q = _.yylineno, at = _.yylloc;
            break;
          case 2:
            if (X = this.productions_[W[1]][1], H.$ = b[b.length - X], H._$ = {
              first_line: a2[a2.length - (X || 1)].first_line,
              last_line: a2[a2.length - 1].last_line,
              first_column: a2[a2.length - (X || 1)].first_column,
              last_column: a2[a2.length - 1].last_column
            }, li && (H._$.range = [
              a2[a2.length - (X || 1)].range[0],
              a2[a2.length - 1].range[1]
            ]), ht = this.performAction.apply(H, [
              d,
              Et,
              q,
              V.yy,
              W[1],
              b,
              a2
            ].concat(oi)), typeof ht < "u")
              return ht;
            X && (c = c.slice(0, -1 * X * 2), b = b.slice(0, -1 * X), a2 = a2.slice(0, -1 * X)), c.push(this.productions_[W[1]][0]), b.push(H.$), a2.push(H._$), Mt = I[c[c.length - 2]][c[c.length - 1]], c.push(Mt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, J = function() {
    var z = {
      EOF: 1,
      parseError: S(function(r, c) {
        if (this.yy.parser)
          this.yy.parser.parseError(r, c);
        else
          throw new Error(r);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: S(function(r, c) {
        return this.yy = c || this.yy || {}, this._input = r, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: S(function() {
        var r = this._input[0];
        this.yytext += r, this.yyleng++, this.offset++, this.match += r, this.matched += r;
        var c = r.match(/(?:\r\n?|\n).*/g);
        return c ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), r;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: S(function(r) {
        var c = r.length, u = r.split(/(?:\r\n?|\n)/g);
        this._input = r + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c), this.offset -= c;
        var b = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u.length - 1 && (this.yylineno -= u.length - 1);
        var a2 = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: u ? (u.length === b.length ? this.yylloc.first_column : 0) + b[b.length - u.length].length - u[0].length : this.yylloc.first_column - c
        }, this.options.ranges && (this.yylloc.range = [a2[0], a2[0] + this.yyleng - c]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: S(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: S(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: S(function(r) {
        this.unput(this.match.slice(r));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: S(function() {
        var r = this.matched.substr(0, this.matched.length - this.match.length);
        return (r.length > 20 ? "..." : "") + r.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: S(function() {
        var r = this.match;
        return r.length < 20 && (r += this._input.substr(0, 20 - r.length)), (r.substr(0, 20) + (r.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: S(function() {
        var r = this.pastInput(), c = new Array(r.length + 1).join("-");
        return r + this.upcomingInput() + `
` + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: S(function(r, c) {
        var u, b, a2;
        if (this.options.backtrack_lexer && (a2 = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (a2.yylloc.range = this.yylloc.range.slice(0))), b = r[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + r[0].length
        }, this.yytext += r[0], this.match += r[0], this.matches = r, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(r[0].length), this.matched += r[0], u = this.performAction.call(this, this.yy, this, c, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), u)
          return u;
        if (this._backtrack) {
          for (var I in a2)
            this[I] = a2[I];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: S(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var r, c, u, b;
        this._more || (this.yytext = "", this.match = "");
        for (var a2 = this._currentRules(), I = 0; I < a2.length; I++)
          if (u = this._input.match(this.rules[a2[I]]), u && (!c || u[0].length > c[0].length)) {
            if (c = u, b = I, this.options.backtrack_lexer) {
              if (r = this.test_match(u, a2[I]), r !== false)
                return r;
              if (this._backtrack) {
                c = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return c ? (r = this.test_match(c, a2[b]), r !== false ? r : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: S(function() {
        var r = this.next();
        return r || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: S(function(r) {
        this.conditionStack.push(r);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: S(function() {
        var r = this.conditionStack.length - 1;
        return r > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: S(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: S(function(r) {
        return r = this.conditionStack.length - 1 - Math.abs(r || 0), r >= 0 ? this.conditionStack[r] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: S(function(r) {
        this.begin(r);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: S(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: S(function(r, c, u, b) {
        switch (u) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return this.popState(), 34;
          case 3:
            return this.popState(), 34;
          case 4:
            return 34;
          case 5:
            break;
          case 6:
            return 10;
          case 7:
            return this.pushState("acc_title"), 19;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.pushState("acc_descr"), 21;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.pushState("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 5;
          case 15:
            return 8;
          case 16:
            return this.pushState("axis_data"), "X_AXIS";
          case 17:
            return this.pushState("axis_data"), "Y_AXIS";
          case 18:
            return this.pushState("axis_band_data"), 24;
          case 19:
            return 31;
          case 20:
            return this.pushState("data"), 16;
          case 21:
            return this.pushState("data"), 18;
          case 22:
            return this.pushState("data_inner"), 24;
          case 23:
            return 27;
          case 24:
            return this.popState(), 26;
          case 25:
            this.popState();
            break;
          case 26:
            this.pushState("string");
            break;
          case 27:
            this.popState();
            break;
          case 28:
            return "STR";
          case 29:
            return 24;
          case 30:
            return 26;
          case 31:
            return 43;
          case 32:
            return "COLON";
          case 33:
            return 44;
          case 34:
            return 28;
          case 35:
            return 45;
          case 36:
            return 46;
          case 37:
            return 48;
          case 38:
            return 50;
          case 39:
            return 47;
          case 40:
            return 41;
          case 41:
            return 49;
          case 42:
            return 42;
          case 43:
            break;
          case 44:
            return 35;
          case 45:
            return 36;
        }
      }, "anonymous"),
      rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\{)/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i],
      conditions: { data_inner: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, data: { rules: [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 22, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, axis_band_data: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, axis_data: { rules: [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, title: { rules: [], inclusive: false }, md_string: { rules: [], inclusive: false }, string: { rules: [27, 28], inclusive: false }, INITIAL: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true } }
    };
    return z;
  }();
  j.lexer = J;
  function O() {
    this.yy = {};
  }
  return S(O, "Parser"), O.prototype = j, j.Parser = O, new O();
}();
bt.parser = bt;
var Ti = bt;
function At(t) {
  return t.type === "bar";
}
S(At, "isBarPlot");
function kt(t) {
  return t.type === "band";
}
S(kt, "isBandAxisData");
function G(t) {
  return t.type === "linear";
}
S(G, "isLinearAxisData");
var ot;
var Vt = (ot = class {
  constructor(t) {
    this.parentGroup = t;
  }
  getMaxDimension(t, i) {
    if (!this.parentGroup)
      return {
        width: t.reduce((h, x) => Math.max(x.length, h), 0) * i,
        height: i
      };
    const e = {
      width: 0,
      height: 0
    }, s = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", i);
    for (const h of t) {
      const x = aK(s, 1, h), g2 = x ? x.width : h.length * i, f = x ? x.height : i;
      e.width = Math.max(e.width, g2), e.height = Math.max(e.height, f);
    }
    return s.remove(), e;
  }
}, S(ot, "TextDimensionCalculatorWithFont"), ot);
var Bt = 0.7;
var Ft = 0.2;
var lt;
var Yt = (lt = class {
  constructor(t, i, e, s) {
    this.axisConfig = t, this.title = i, this.textDimensionCalculator = e, this.axisThemeConfig = s, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = "left", this.showTitle = false, this.showLabel = false, this.showTick = false, this.showAxisLine = false, this.outerPadding = 0, this.titleTextHeight = 0, this.labelTextHeight = 0, this.range = [0, 10], this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = "left";
  }
  setRange(t) {
    this.range = t, this.axisPosition === "left" || this.axisPosition === "right" ? this.boundingRect.height = t[1] - t[0] : this.boundingRect.width = t[1] - t[0], this.recalculateScale();
  }
  getRange() {
    return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
  }
  setAxisPosition(t) {
    this.axisPosition = t, this.setRange(this.range);
  }
  getTickDistance() {
    const t = this.getRange();
    return Math.abs(t[0] - t[1]) / this.getTickValues().length;
  }
  getAxisOuterPadding() {
    return this.outerPadding;
  }
  getLabelDimension() {
    return this.textDimensionCalculator.getMaxDimension(
      this.getTickValues().map((t) => t.toString()),
      this.axisConfig.labelFontSize
    );
  }
  recalculateOuterPaddingToDrawBar() {
    Bt * this.getTickDistance() > this.outerPadding * 2 && (this.outerPadding = Math.floor(Bt * this.getTickDistance() / 2)), this.recalculateScale();
  }
  calculateSpaceIfDrawnHorizontally(t) {
    let i = t.height;
    if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      const e = this.getLabelDimension(), s = Ft * t.width;
      this.outerPadding = Math.min(e.width / 2, s);
      const h = e.height + this.axisConfig.labelPadding * 2;
      this.labelTextHeight = e.height, h <= i && (i -= h, this.showLabel = true);
    }
    if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = true, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      const e = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      ), s = e.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = e.height, s <= i && (i -= s, this.showTitle = true);
    }
    this.boundingRect.width = t.width, this.boundingRect.height = t.height - i;
  }
  calculateSpaceIfDrawnVertical(t) {
    let i = t.width;
    if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      const e = this.getLabelDimension(), s = Ft * t.height;
      this.outerPadding = Math.min(e.height / 2, s);
      const h = e.width + this.axisConfig.labelPadding * 2;
      h <= i && (i -= h, this.showLabel = true);
    }
    if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = true, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      const e = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      ), s = e.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = e.height, s <= i && (i -= s, this.showTitle = true);
    }
    this.boundingRect.width = t.width - i, this.boundingRect.height = t.height;
  }
  calculateSpace(t) {
    return this.axisPosition === "left" || this.axisPosition === "right" ? this.calculateSpaceIfDrawnVertical(t) : this.calculateSpaceIfDrawnHorizontally(t), this.recalculateScale(), {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  setBoundingBoxXY(t) {
    this.boundingRect.x = t.x, this.boundingRect.y = t.y;
  }
  getDrawableElementsForLeftAxis() {
    const t = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
      t.push({
        type: "path",
        groupTexts: ["left-axis", "axisl-line"],
        data: [
          {
            path: `M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y + this.boundingRect.height} `,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t.push({
      type: "text",
      groupTexts: ["left-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
        y: this.getScaleValue(i),
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "middle",
        horizontalPos: "right"
      }))
    }), this.showTick) {
      const i = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t.push({
        type: "path",
        groupTexts: ["left-axis", "ticks"],
        data: this.getTickValues().map((e) => ({
          path: `M ${i},${this.getScaleValue(e)} L ${i - this.axisConfig.tickLength},${this.getScaleValue(e)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t.push({
      type: "text",
      groupTexts: ["left-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.boundingRect.x + this.axisConfig.titlePadding,
          y: this.boundingRect.y + this.boundingRect.height / 2,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 270,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t;
  }
  getDrawableElementsForBottomAxis() {
    const t = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
      t.push({
        type: "path",
        groupTexts: ["bottom-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t.push({
      type: "text",
      groupTexts: ["bottom-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.getScaleValue(i),
        y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "top",
        horizontalPos: "center"
      }))
    }), this.showTick) {
      const i = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t.push({
        type: "path",
        groupTexts: ["bottom-axis", "ticks"],
        data: this.getTickValues().map((e) => ({
          path: `M ${this.getScaleValue(e)},${i} L ${this.getScaleValue(e)},${i + this.axisConfig.tickLength}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t.push({
      type: "text",
      groupTexts: ["bottom-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.range[0] + (this.range[1] - this.range[0]) / 2,
          y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t;
  }
  getDrawableElementsForTopAxis() {
    const t = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
      t.push({
        type: "path",
        groupTexts: ["top-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t.push({
      type: "text",
      groupTexts: ["top-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.getScaleValue(i),
        y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "top",
        horizontalPos: "center"
      }))
    }), this.showTick) {
      const i = this.boundingRect.y;
      t.push({
        type: "path",
        groupTexts: ["top-axis", "ticks"],
        data: this.getTickValues().map((e) => ({
          path: `M ${this.getScaleValue(e)},${i + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(e)},${i + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t.push({
      type: "text",
      groupTexts: ["top-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.boundingRect.x + this.boundingRect.width / 2,
          y: this.boundingRect.y + this.axisConfig.titlePadding,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t;
  }
  getDrawableElements() {
    if (this.axisPosition === "left")
      return this.getDrawableElementsForLeftAxis();
    if (this.axisPosition === "right")
      throw Error("Drawing of right axis is not implemented");
    return this.axisPosition === "bottom" ? this.getDrawableElementsForBottomAxis() : this.axisPosition === "top" ? this.getDrawableElementsForTopAxis() : [];
  }
}, S(lt, "BaseAxis"), lt);
var ct;
var Ri = (ct = class extends Yt {
  constructor(t, i, e, s, h) {
    super(t, s, h, i), this.categories = e, this.scale = yt().domain(this.categories).range(this.getRange());
  }
  setRange(t) {
    super.setRange(t);
  }
  recalculateScale() {
    this.scale = yt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5), ut.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
  }
  getTickValues() {
    return this.categories;
  }
  getScaleValue(t) {
    return this.scale(t) ?? this.getRange()[0];
  }
}, S(ct, "BandAxis"), ct);
var ut2;
var Di = (ut2 = class extends Yt {
  constructor(t, i, e, s, h) {
    super(t, s, h, i), this.domain = e, this.scale = it().domain(this.domain).range(this.getRange());
  }
  getTickValues() {
    return this.scale.ticks();
  }
  recalculateScale() {
    const t = [...this.domain];
    this.axisPosition === "left" && t.reverse(), this.scale = it().domain(t).range(this.getRange());
  }
  getScaleValue(t) {
    return this.scale(t);
  }
}, S(ut2, "LinearAxis"), ut2);
function wt(t, i, e, s) {
  const h = new Vt(s);
  return kt(t) ? new Ri(
    i,
    e,
    t.categories,
    t.title,
    h
  ) : new Di(
    i,
    e,
    [t.min, t.max],
    t.title,
    h
  );
}
S(wt, "getAxis");
var gt;
var Li = (gt = class {
  constructor(t, i, e, s) {
    this.textDimensionCalculator = t, this.chartConfig = i, this.chartData = e, this.chartThemeConfig = s, this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, this.showChartTitle = false;
  }
  setBoundingBoxXY(t) {
    this.boundingRect.x = t.x, this.boundingRect.y = t.y;
  }
  calculateSpace(t) {
    const i = this.textDimensionCalculator.getMaxDimension(
      [this.chartData.title],
      this.chartConfig.titleFontSize
    ), e = Math.max(i.width, t.width), s = i.height + 2 * this.chartConfig.titlePadding;
    return i.width <= e && i.height <= s && this.chartConfig.showTitle && this.chartData.title && (this.boundingRect.width = e, this.boundingRect.height = s, this.showChartTitle = true), {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    const t = [];
    return this.showChartTitle && t.push({
      groupTexts: ["chart-title"],
      type: "text",
      data: [
        {
          fontSize: this.chartConfig.titleFontSize,
          text: this.chartData.title,
          verticalPos: "middle",
          horizontalPos: "center",
          x: this.boundingRect.x + this.boundingRect.width / 2,
          y: this.boundingRect.y + this.boundingRect.height / 2,
          fill: this.chartThemeConfig.titleColor,
          rotation: 0
        }
      ]
    }), t;
  }
}, S(gt, "ChartTitle"), gt);
function Ut(t, i, e, s) {
  const h = new Vt(s);
  return new Li(h, t, i, e);
}
S(Ut, "getChartTitleComponent");
var xt;
var Pi = (xt = class {
  constructor(t, i, e, s, h) {
    this.plotData = t, this.xAxis = i, this.yAxis = e, this.orientation = s, this.plotIndex = h;
  }
  getDrawableElement() {
    const t = this.plotData.data.map((e) => [
      this.xAxis.getScaleValue(e[0]),
      this.yAxis.getScaleValue(e[1])
    ]);
    let i;
    return this.orientation === "horizontal" ? i = eV().y((e) => e[0]).x((e) => e[1])(t) : i = eV().x((e) => e[0]).y((e) => e[1])(t), i ? [
      {
        groupTexts: ["plot", `line-plot-${this.plotIndex}`],
        type: "path",
        data: [
          {
            path: i,
            strokeFill: this.plotData.strokeFill,
            strokeWidth: this.plotData.strokeWidth
          }
        ]
      }
    ] : [];
  }
}, S(xt, "LinePlot"), xt);
var dt;
var vi = (dt = class {
  constructor(t, i, e, s, h, x) {
    this.barData = t, this.boundingRect = i, this.xAxis = e, this.yAxis = s, this.orientation = h, this.plotIndex = x;
  }
  getDrawableElement() {
    const t = this.barData.data.map((s) => [
      this.xAxis.getScaleValue(s[0]),
      this.yAxis.getScaleValue(s[1])
    ]), i = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * (1 - 0.05), e = i / 2;
    return this.orientation === "horizontal" ? [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: t.map((s) => ({
          x: this.boundingRect.x,
          y: s[0] - e,
          height: i,
          width: s[1] - this.boundingRect.x,
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ] : [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: t.map((s) => ({
          x: s[0] - e,
          y: s[1],
          width: i,
          height: this.boundingRect.y + this.boundingRect.height - s[1],
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ];
  }
}, S(dt, "BarPlot"), dt);
var pt;
var Ei = (pt = class {
  constructor(t, i, e) {
    this.chartConfig = t, this.chartData = i, this.chartThemeConfig = e, this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  setAxes(t, i) {
    this.xAxis = t, this.yAxis = i;
  }
  setBoundingBoxXY(t) {
    this.boundingRect.x = t.x, this.boundingRect.y = t.y;
  }
  calculateSpace(t) {
    return this.boundingRect.width = t.width, this.boundingRect.height = t.height, {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    if (!(this.xAxis && this.yAxis))
      throw Error("Axes must be passed to render Plots");
    const t = [];
    for (const [i, e] of this.chartData.plots.entries())
      switch (e.type) {
        case "line":
          {
            const s = new Pi(
              e,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            t.push(...s.getDrawableElement());
          }
          break;
        case "bar":
          {
            const s = new vi(
              e,
              this.boundingRect,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            t.push(...s.getDrawableElement());
          }
          break;
      }
    return t;
  }
}, S(pt, "BasePlot"), pt);
function Ht(t, i, e) {
  return new Ei(t, i, e);
}
S(Ht, "getPlotComponent");
var ft;
var Ii = (ft = class {
  constructor(t, i, e, s) {
    this.chartConfig = t, this.chartData = i, this.componentStore = {
      title: Ut(t, i, e, s),
      plot: Ht(t, i, e),
      xAxis: wt(
        i.xAxis,
        t.xAxis,
        {
          titleColor: e.xAxisTitleColor,
          labelColor: e.xAxisLabelColor,
          tickColor: e.xAxisTickColor,
          axisLineColor: e.xAxisLineColor
        },
        s
      ),
      yAxis: wt(
        i.yAxis,
        t.yAxis,
        {
          titleColor: e.yAxisTitleColor,
          labelColor: e.yAxisLabelColor,
          tickColor: e.yAxisTickColor,
          axisLineColor: e.yAxisLineColor
        },
        s
      )
    };
  }
  calculateVerticalSpace() {
    let t = this.chartConfig.width, i = this.chartConfig.height, e = 0, s = 0, h = Math.floor(t * this.chartConfig.plotReservedSpacePercent / 100), x = Math.floor(
      i * this.chartConfig.plotReservedSpacePercent / 100
    ), g2 = this.componentStore.plot.calculateSpace({
      width: h,
      height: x
    });
    t -= g2.width, i -= g2.height, g2 = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: i
    }), s = g2.height, i -= g2.height, this.componentStore.xAxis.setAxisPosition("bottom"), g2 = this.componentStore.xAxis.calculateSpace({
      width: t,
      height: i
    }), i -= g2.height, this.componentStore.yAxis.setAxisPosition("left"), g2 = this.componentStore.yAxis.calculateSpace({
      width: t,
      height: i
    }), e = g2.width, t -= g2.width, t > 0 && (h += t, t = 0), i > 0 && (x += i, i = 0), this.componentStore.plot.calculateSpace({
      width: h,
      height: x
    }), this.componentStore.plot.setBoundingBoxXY({ x: e, y: s }), this.componentStore.xAxis.setRange([e, e + h]), this.componentStore.xAxis.setBoundingBoxXY({ x: e, y: s + x }), this.componentStore.yAxis.setRange([s, s + x]), this.componentStore.yAxis.setBoundingBoxXY({ x: 0, y: s }), this.chartData.plots.some((f) => At(f)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateHorizontalSpace() {
    let t = this.chartConfig.width, i = this.chartConfig.height, e = 0, s = 0, h = 0, x = Math.floor(t * this.chartConfig.plotReservedSpacePercent / 100), g2 = Math.floor(
      i * this.chartConfig.plotReservedSpacePercent / 100
    ), f = this.componentStore.plot.calculateSpace({
      width: x,
      height: g2
    });
    t -= f.width, i -= f.height, f = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: i
    }), e = f.height, i -= f.height, this.componentStore.xAxis.setAxisPosition("left"), f = this.componentStore.xAxis.calculateSpace({
      width: t,
      height: i
    }), t -= f.width, s = f.width, this.componentStore.yAxis.setAxisPosition("top"), f = this.componentStore.yAxis.calculateSpace({
      width: t,
      height: i
    }), i -= f.height, h = e + f.height, t > 0 && (x += t, t = 0), i > 0 && (g2 += i, i = 0), this.componentStore.plot.calculateSpace({
      width: x,
      height: g2
    }), this.componentStore.plot.setBoundingBoxXY({ x: s, y: h }), this.componentStore.yAxis.setRange([s, s + x]), this.componentStore.yAxis.setBoundingBoxXY({ x: s, y: e }), this.componentStore.xAxis.setRange([h, h + g2]), this.componentStore.xAxis.setBoundingBoxXY({ x: 0, y: h }), this.chartData.plots.some((S2) => At(S2)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateSpace() {
    this.chartConfig.chartOrientation === "horizontal" ? this.calculateHorizontalSpace() : this.calculateVerticalSpace();
  }
  getDrawableElement() {
    this.calculateSpace();
    const t = [];
    this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
    for (const i of Object.values(this.componentStore))
      t.push(...i.getDrawableElements());
    return t;
  }
}, S(ft, "Orchestrator"), ft);
var mt;
var $i = (mt = class {
  static build(t, i, e, s) {
    return new Ii(t, i, e, s).getDrawableElement();
  }
}, S(mt, "XYChartBuilder"), mt);
var Q = 0;
var Gt;
var K = Rt();
var Z = Tt();
var y = Dt();
var St = Z.plotColorPalette.split(",").map((t) => t.trim());
var et = false;
var _t = false;
function Tt() {
  const t = NR(), i = Vr();
  return pg(t.xyChart, i.themeVariables.xyChart);
}
S(Tt, "getChartDefaultThemeConfig");
function Rt() {
  const t = Vr();
  return pg(
    tw.xyChart,
    t.xyChart
  );
}
S(Rt, "getChartDefaultConfig");
function Dt() {
  return {
    yAxis: {
      type: "linear",
      title: "",
      min: 1 / 0,
      max: -1 / 0
    },
    xAxis: {
      type: "band",
      title: "",
      categories: []
    },
    title: "",
    plots: []
  };
}
S(Dt, "getChartDefaultData");
function st(t) {
  const i = Vr();
  return to(t.trim(), i);
}
S(st, "textSanitizer");
function jt(t) {
  Gt = t;
}
S(jt, "setTmpSVGG");
function Qt(t) {
  t === "horizontal" ? K.chartOrientation = "horizontal" : K.chartOrientation = "vertical";
}
S(Qt, "setOrientation");
function Kt(t) {
  y.xAxis.title = st(t.text);
}
S(Kt, "setXAxisTitle");
function Lt(t, i) {
  y.xAxis = { type: "linear", title: y.xAxis.title, min: t, max: i }, et = true;
}
S(Lt, "setXAxisRangeData");
function Zt(t) {
  y.xAxis = {
    type: "band",
    title: y.xAxis.title,
    categories: t.map((i) => st(i.text))
  }, et = true;
}
S(Zt, "setXAxisBand");
function Jt(t) {
  y.yAxis.title = st(t.text);
}
S(Jt, "setYAxisTitle");
function qt(t, i) {
  y.yAxis = { type: "linear", title: y.yAxis.title, min: t, max: i }, _t = true;
}
S(qt, "setYAxisRangeData");
function ti(t) {
  const i = Math.min(...t), e = Math.max(...t), s = G(y.yAxis) ? y.yAxis.min : 1 / 0, h = G(y.yAxis) ? y.yAxis.max : -1 / 0;
  y.yAxis = {
    type: "linear",
    title: y.yAxis.title,
    min: Math.min(s, i),
    max: Math.max(h, e)
  };
}
S(ti, "setYAxisRangeFromPlotData");
function Pt(t) {
  let i = [];
  if (t.length === 0)
    return i;
  if (!et) {
    const e = G(y.xAxis) ? y.xAxis.min : 1 / 0, s = G(y.xAxis) ? y.xAxis.max : -1 / 0;
    Lt(Math.min(e, 1), Math.max(s, t.length));
  }
  if (_t || ti(t), kt(y.xAxis) && (i = y.xAxis.categories.map((e, s) => [e, t[s]])), G(y.xAxis)) {
    const e = y.xAxis.min, s = y.xAxis.max, h = (s - e) / (t.length - 1), x = [];
    for (let g2 = e; g2 <= s; g2 += h)
      x.push(`${g2}`);
    i = x.map((g2, f) => [g2, t[f]]);
  }
  return i;
}
S(Pt, "transformDataWithoutCategory");
function vt(t) {
  return St[t === 0 ? 0 : t % St.length];
}
S(vt, "getPlotColorFromPalette");
function ii(t, i) {
  const e = Pt(i);
  y.plots.push({
    type: "line",
    strokeFill: vt(Q),
    strokeWidth: 2,
    data: e
  }), Q++;
}
S(ii, "setLineData");
function ei(t, i) {
  const e = Pt(i);
  y.plots.push({
    type: "bar",
    fill: vt(Q),
    data: e
  }), Q++;
}
S(ei, "setBarData");
function si() {
  if (y.plots.length === 0)
    throw Error("No Plot to render, please provide a plot with some data");
  return y.title = gP(), $i.build(K, y, Z, Gt);
}
S(si, "getDrawableElem");
function ni() {
  return Z;
}
S(ni, "getChartThemeConfig");
function ai() {
  return K;
}
S(ai, "getChartConfig");
function hi() {
  return y;
}
S(hi, "getXYChartData");
var Mi = S(function() {
  hP(), Q = 0, K = Rt(), y = Dt(), Z = Tt(), St = Z.plotColorPalette.split(",").map((t) => t.trim()), et = false, _t = false;
}, "clear");
var zi = {
  getDrawableElem: si,
  clear: Mi,
  setAccTitle: uP,
  getAccTitle: dP,
  setDiagramTitle: mP,
  getDiagramTitle: gP,
  getAccDescription: fP,
  setAccDescription: pP,
  setOrientation: Qt,
  setXAxisTitle: Kt,
  setXAxisRangeData: Lt,
  setXAxisBand: Zt,
  setYAxisTitle: Jt,
  setYAxisRangeData: qt,
  setLineData: ii,
  setBarData: ei,
  setTmpSVGG: jt,
  getChartThemeConfig: ni,
  getChartConfig: ai,
  getXYChartData: hi
};
var Wi = S((t, i, e, s) => {
  const h = s.db, x = h.getChartThemeConfig(), g2 = h.getChartConfig(), f = h.getXYChartData().plots[0].data.map((p) => p[1]);
  function S2(p) {
    return p === "top" ? "text-before-edge" : "middle";
  }
  S(S2, "getDominantBaseLine");
  function R(p) {
    return p === "left" ? "start" : p === "right" ? "end" : "middle";
  }
  S(R, "getTextAnchor");
  function D(p) {
    return `translate(${p.x}, ${p.y}) rotate(${p.rotation || 0})`;
  }
  S(D, "getTextTransformation"), ut.debug(`Rendering xychart chart
` + t);
  const A = TZ(i), m = A.append("g").attr("class", "main"), v = m.append("rect").attr("width", g2.width).attr("height", g2.height).attr("class", "background");
  hw(A, g2.height, g2.width, true), A.attr("viewBox", `0 0 ${g2.width} ${g2.height}`), v.attr("fill", x.backgroundColor), h.setTmpSVGG(A.append("g").attr("class", "mermaid-tmp-group"));
  const T = h.getDrawableElem(), L = {};
  function E(p) {
    let C = m, l = "";
    for (const [B] of p.entries()) {
      let F = m;
      B > 0 && L[l] && (F = L[l]), l += p[B], C = L[l], C || (C = L[l] = F.append("g").attr("class", p[B]));
    }
    return C;
  }
  S(E, "getGroup");
  for (const p of T) {
    if (p.data.length === 0)
      continue;
    const C = E(p.groupTexts);
    switch (p.type) {
      case "rect":
        if (C.selectAll("rect").data(p.data).enter().append("rect").attr("x", (l) => l.x).attr("y", (l) => l.y).attr("width", (l) => l.width).attr("height", (l) => l.height).attr("fill", (l) => l.fill).attr("stroke", (l) => l.strokeFill).attr("stroke-width", (l) => l.strokeWidth), g2.showDataLabel)
          if (g2.chartOrientation === "horizontal") {
            let l = function(o, P) {
              const { data: w, label: k } = o;
              return P * k.length * B <= w.width - 10;
            };
            S(l, "fitsHorizontally");
            const B = 0.7, F = p.data.map((o, P) => ({ data: o, label: f[P].toString() })).filter((o) => o.data.width > 0 && o.data.height > 0), U = F.map((o) => {
              const { data: P } = o;
              let w = P.height * 0.7;
              for (; !l(o, w) && w > 0; )
                w -= 1;
              return w;
            }), N = Math.floor(Math.min(...U));
            C.selectAll("text").data(F).enter().append("text").attr("x", (o) => o.data.x + o.data.width - 10).attr("y", (o) => o.data.y + o.data.height / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").attr("fill", "black").attr("font-size", `${N}px`).text((o) => o.label);
          } else {
            let l = function(o, P, w) {
              const { data: k, label: j } = o, J = P * j.length * 0.7, O = k.x + k.width / 2, z = O - J / 2, r = O + J / 2, c = z >= k.x && r <= k.x + k.width, u = k.y + w + P <= k.y + k.height;
              return c && u;
            };
            S(l, "fitsInBar");
            const B = 10, F = p.data.map((o, P) => ({ data: o, label: f[P].toString() })).filter((o) => o.data.width > 0 && o.data.height > 0), U = F.map((o) => {
              const { data: P, label: w } = o;
              let k = P.width / (w.length * 0.7);
              for (; !l(o, k, B) && k > 0; )
                k -= 1;
              return k;
            }), N = Math.floor(Math.min(...U));
            C.selectAll("text").data(F).enter().append("text").attr("x", (o) => o.data.x + o.data.width / 2).attr("y", (o) => o.data.y + B).attr("text-anchor", "middle").attr("dominant-baseline", "hanging").attr("fill", "black").attr("font-size", `${N}px`).text((o) => o.label);
          }
        break;
      case "text":
        C.selectAll("text").data(p.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", (l) => l.fill).attr("font-size", (l) => l.fontSize).attr("dominant-baseline", (l) => S2(l.verticalPos)).attr("text-anchor", (l) => R(l.horizontalPos)).attr("transform", (l) => D(l)).text((l) => l.text);
        break;
      case "path":
        C.selectAll("path").data(p.data).enter().append("path").attr("d", (l) => l.path).attr("fill", (l) => l.fill ? l.fill : "none").attr("stroke", (l) => l.strokeFill).attr("stroke-width", (l) => l.strokeWidth);
        break;
    }
  }
}, "draw");
var Bi = {
  draw: Wi
};
var Vi = {
  parser: Ti,
  db: zi,
  renderer: Bi
};
export {
  Vi as diagram
};
//# sourceMappingURL=xychartDiagram-H2YORKM3-CG64ebqo-CxP5Tk3X-RU3VBWSH.js.map
