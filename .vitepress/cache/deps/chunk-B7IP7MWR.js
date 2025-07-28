import {
  a
} from "./chunk-GTR7KR4L.js";
import {
  $
} from "./chunk-DBLBAHG2.js";
import {
  S,
  VX,
  Xn,
  dP,
  fP,
  gP,
  ga,
  hP,
  mP,
  me,
  pP,
  uP,
  ut,
  vnt
} from "./chunk-G6K7VW2X.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/chunk-OW32GOEJ-DpW_UIGr-olQky-sL.js
var Dt = function() {
  var t = S(function(O, r, a2, y) {
    for (a2 = a2 || {}, y = O.length; y--; a2[O[y]] = r) ;
    return a2;
  }, "o"), e = [1, 2], o = [1, 3], s = [1, 4], d = [2, 4], h = [1, 9], f = [1, 11], S2 = [1, 16], n = [1, 17], g = [1, 18], L = [1, 19], k = [1, 33], D = [1, 20], w = [1, 21], c = [1, 22], C = [1, 23], b = [1, 24], N = [1, 26], I = [1, 27], Y = [1, 28], P = [1, 29], tt = [1, 30], et = [1, 31], st = [1, 32], it = [1, 35], rt = [1, 36], at = [1, 37], nt = [1, 38], W = [1, 34], p = [1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], ot = [1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 39, 40, 41, 45, 48, 51, 52, 53, 54, 57], xt = [4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], gt = {
    trace: S(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, SPACE: 4, NL: 5, SD: 6, document: 7, line: 8, statement: 9, classDefStatement: 10, styleStatement: 11, cssClassStatement: 12, idStatement: 13, DESCR: 14, "-->": 15, HIDE_EMPTY: 16, scale: 17, WIDTH: 18, COMPOSIT_STATE: 19, STRUCT_START: 20, STRUCT_STOP: 21, STATE_DESCR: 22, AS: 23, ID: 24, FORK: 25, JOIN: 26, CHOICE: 27, CONCURRENT: 28, note: 29, notePosition: 30, NOTE_TEXT: 31, direction: 32, acc_title: 33, acc_title_value: 34, acc_descr: 35, acc_descr_value: 36, acc_descr_multiline_value: 37, CLICK: 38, STRING: 39, HREF: 40, classDef: 41, CLASSDEF_ID: 42, CLASSDEF_STYLEOPTS: 43, DEFAULT: 44, style: 45, STYLE_IDS: 46, STYLEDEF_STYLEOPTS: 47, class: 48, CLASSENTITY_IDS: 49, STYLECLASS: 50, direction_tb: 51, direction_bt: 52, direction_rl: 53, direction_lr: 54, eol: 55, ";": 56, EDGE_STATE: 57, STYLE_SEPARATOR: 58, left_of: 59, right_of: 60, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NL", 6: "SD", 14: "DESCR", 15: "-->", 16: "HIDE_EMPTY", 17: "scale", 18: "WIDTH", 19: "COMPOSIT_STATE", 20: "STRUCT_START", 21: "STRUCT_STOP", 22: "STATE_DESCR", 23: "AS", 24: "ID", 25: "FORK", 26: "JOIN", 27: "CHOICE", 28: "CONCURRENT", 29: "note", 31: "NOTE_TEXT", 33: "acc_title", 34: "acc_title_value", 35: "acc_descr", 36: "acc_descr_value", 37: "acc_descr_multiline_value", 38: "CLICK", 39: "STRING", 40: "HREF", 41: "classDef", 42: "CLASSDEF_ID", 43: "CLASSDEF_STYLEOPTS", 44: "DEFAULT", 45: "style", 46: "STYLE_IDS", 47: "STYLEDEF_STYLEOPTS", 48: "class", 49: "CLASSENTITY_IDS", 50: "STYLECLASS", 51: "direction_tb", 52: "direction_bt", 53: "direction_rl", 54: "direction_lr", 56: ";", 57: "EDGE_STATE", 58: "STYLE_SEPARATOR", 59: "left_of", 60: "right_of" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 3], [9, 4], [9, 1], [9, 2], [9, 1], [9, 4], [9, 3], [9, 6], [9, 1], [9, 1], [9, 1], [9, 1], [9, 4], [9, 4], [9, 1], [9, 2], [9, 2], [9, 1], [9, 5], [9, 5], [10, 3], [10, 3], [11, 3], [12, 3], [32, 1], [32, 1], [32, 1], [32, 1], [55, 1], [55, 1], [13, 1], [13, 1], [13, 3], [13, 3], [30, 1], [30, 1]],
    performAction: S(function(O, r, a2, y, m, i, $2) {
      var l = i.length - 1;
      switch (m) {
        case 3:
          return y.setRootDoc(i[l]), i[l];
        case 4:
          this.$ = [];
          break;
        case 5:
          i[l] != "nl" && (i[l - 1].push(i[l]), this.$ = i[l - 1]);
          break;
        case 6:
        case 7:
          this.$ = i[l];
          break;
        case 8:
          this.$ = "nl";
          break;
        case 12:
          this.$ = i[l];
          break;
        case 13:
          const H = i[l - 1];
          H.description = y.trimColon(i[l]), this.$ = H;
          break;
        case 14:
          this.$ = { stmt: "relation", state1: i[l - 2], state2: i[l] };
          break;
        case 15:
          const St = y.trimColon(i[l]);
          this.$ = { stmt: "relation", state1: i[l - 3], state2: i[l - 1], description: St };
          break;
        case 19:
          this.$ = { stmt: "state", id: i[l - 3], type: "default", description: "", doc: i[l - 1] };
          break;
        case 20:
          var G = i[l], V = i[l - 2].trim();
          if (i[l].match(":")) {
            var ct = i[l].split(":");
            G = ct[0], V = [V, ct[1]];
          }
          this.$ = { stmt: "state", id: G, type: "default", description: V };
          break;
        case 21:
          this.$ = { stmt: "state", id: i[l - 3], type: "default", description: i[l - 5], doc: i[l - 1] };
          break;
        case 22:
          this.$ = { stmt: "state", id: i[l], type: "fork" };
          break;
        case 23:
          this.$ = { stmt: "state", id: i[l], type: "join" };
          break;
        case 24:
          this.$ = { stmt: "state", id: i[l], type: "choice" };
          break;
        case 25:
          this.$ = { stmt: "state", id: y.getDividerId(), type: "divider" };
          break;
        case 26:
          this.$ = { stmt: "state", id: i[l - 1].trim(), note: { position: i[l - 2].trim(), text: i[l].trim() } };
          break;
        case 29:
          this.$ = i[l].trim(), y.setAccTitle(this.$);
          break;
        case 30:
        case 31:
          this.$ = i[l].trim(), y.setAccDescription(this.$);
          break;
        case 32:
          this.$ = {
            stmt: "click",
            id: i[l - 3],
            url: i[l - 2],
            tooltip: i[l - 1]
          };
          break;
        case 33:
          this.$ = {
            stmt: "click",
            id: i[l - 3],
            url: i[l - 1],
            tooltip: ""
          };
          break;
        case 34:
        case 35:
          this.$ = { stmt: "classDef", id: i[l - 1].trim(), classes: i[l].trim() };
          break;
        case 36:
          this.$ = { stmt: "style", id: i[l - 1].trim(), styleClass: i[l].trim() };
          break;
        case 37:
          this.$ = { stmt: "applyClass", id: i[l - 1].trim(), styleClass: i[l].trim() };
          break;
        case 38:
          y.setDirection("TB"), this.$ = { stmt: "dir", value: "TB" };
          break;
        case 39:
          y.setDirection("BT"), this.$ = { stmt: "dir", value: "BT" };
          break;
        case 40:
          y.setDirection("RL"), this.$ = { stmt: "dir", value: "RL" };
          break;
        case 41:
          y.setDirection("LR"), this.$ = { stmt: "dir", value: "LR" };
          break;
        case 44:
        case 45:
          this.$ = { stmt: "state", id: i[l].trim(), type: "default", description: "" };
          break;
        case 46:
          this.$ = { stmt: "state", id: i[l - 2].trim(), classes: [i[l].trim()], type: "default", description: "" };
          break;
        case 47:
          this.$ = { stmt: "state", id: i[l - 2].trim(), classes: [i[l].trim()], type: "default", description: "" };
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: e, 5: o, 6: s }, { 1: [3] }, { 3: 5, 4: e, 5: o, 6: s }, { 3: 6, 4: e, 5: o, 6: s }, t([1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], d, { 7: 7 }), { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3], 4: h, 5: f, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: S2, 17: n, 19: g, 22: L, 24: k, 25: D, 26: w, 27: c, 28: C, 29: b, 32: 25, 33: N, 35: I, 37: Y, 38: P, 41: tt, 45: et, 48: st, 51: it, 52: rt, 53: at, 54: nt, 57: W }, t(p, [2, 5]), { 9: 39, 10: 12, 11: 13, 12: 14, 13: 15, 16: S2, 17: n, 19: g, 22: L, 24: k, 25: D, 26: w, 27: c, 28: C, 29: b, 32: 25, 33: N, 35: I, 37: Y, 38: P, 41: tt, 45: et, 48: st, 51: it, 52: rt, 53: at, 54: nt, 57: W }, t(p, [2, 7]), t(p, [2, 8]), t(p, [2, 9]), t(p, [2, 10]), t(p, [2, 11]), t(p, [2, 12], { 14: [1, 40], 15: [1, 41] }), t(p, [2, 16]), { 18: [1, 42] }, t(p, [2, 18], { 20: [1, 43] }), { 23: [1, 44] }, t(p, [2, 22]), t(p, [2, 23]), t(p, [2, 24]), t(p, [2, 25]), { 30: 45, 31: [1, 46], 59: [1, 47], 60: [1, 48] }, t(p, [2, 28]), { 34: [1, 49] }, { 36: [1, 50] }, t(p, [2, 31]), { 13: 51, 24: k, 57: W }, { 42: [1, 52], 44: [1, 53] }, { 46: [1, 54] }, { 49: [1, 55] }, t(ot, [2, 44], { 58: [1, 56] }), t(ot, [2, 45], { 58: [1, 57] }), t(p, [2, 38]), t(p, [2, 39]), t(p, [2, 40]), t(p, [2, 41]), t(p, [2, 6]), t(p, [2, 13]), { 13: 58, 24: k, 57: W }, t(p, [2, 17]), t(xt, d, { 7: 59 }), { 24: [1, 60] }, { 24: [1, 61] }, { 23: [1, 62] }, { 24: [2, 48] }, { 24: [2, 49] }, t(p, [2, 29]), t(p, [2, 30]), { 39: [1, 63], 40: [1, 64] }, { 43: [1, 65] }, { 43: [1, 66] }, { 47: [1, 67] }, { 50: [1, 68] }, { 24: [1, 69] }, { 24: [1, 70] }, t(p, [2, 14], { 14: [1, 71] }), { 4: h, 5: f, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: S2, 17: n, 19: g, 21: [1, 72], 22: L, 24: k, 25: D, 26: w, 27: c, 28: C, 29: b, 32: 25, 33: N, 35: I, 37: Y, 38: P, 41: tt, 45: et, 48: st, 51: it, 52: rt, 53: at, 54: nt, 57: W }, t(p, [2, 20], { 20: [1, 73] }), { 31: [1, 74] }, { 24: [1, 75] }, { 39: [1, 76] }, { 39: [1, 77] }, t(p, [2, 34]), t(p, [2, 35]), t(p, [2, 36]), t(p, [2, 37]), t(ot, [2, 46]), t(ot, [2, 47]), t(p, [2, 15]), t(p, [2, 19]), t(xt, d, { 7: 78 }), t(p, [2, 26]), t(p, [2, 27]), { 5: [1, 79] }, { 5: [1, 80] }, { 4: h, 5: f, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: S2, 17: n, 19: g, 21: [1, 81], 22: L, 24: k, 25: D, 26: w, 27: c, 28: C, 29: b, 32: 25, 33: N, 35: I, 37: Y, 38: P, 41: tt, 45: et, 48: st, 51: it, 52: rt, 53: at, 54: nt, 57: W }, t(p, [2, 32]), t(p, [2, 33]), t(p, [2, 21])],
    defaultActions: { 5: [2, 1], 6: [2, 2], 47: [2, 48], 48: [2, 49] },
    parseError: S(function(O, r) {
      if (r.recoverable)
        this.trace(O);
      else {
        var a2 = new Error(O);
        throw a2.hash = r, a2;
      }
    }, "parseError"),
    parse: S(function(O) {
      var r = this, a2 = [0], y = [], m = [null], i = [], $2 = this.table, l = "", G = 0, V = 0, ct = 2, H = 1, St = i.slice.call(arguments, 1), T = Object.create(this.lexer), j = { yy: {} };
      for (var mt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, mt) && (j.yy[mt] = this.yy[mt]);
      T.setInput(O, j.yy), j.yy.lexer = T, j.yy.parser = this, typeof T.yylloc > "u" && (T.yylloc = {});
      var _t = T.yylloc;
      i.push(_t);
      var qt = T.options && T.options.ranges;
      typeof j.yy.parseError == "function" ? this.parseError = j.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Zt(v) {
        a2.length = a2.length - 2 * v, m.length = m.length - v, i.length = i.length - v;
      }
      S(Zt, "popStack");
      function Lt() {
        var v;
        return v = y.pop() || T.lex() || H, typeof v != "number" && (v instanceof Array && (y = v, v = y.pop()), v = r.symbols_[v] || v), v;
      }
      S(Lt, "lex");
      for (var x, U, A, Tt, z = {}, ht, B, vt, dt; ; ) {
        if (U = a2[a2.length - 1], this.defaultActions[U] ? A = this.defaultActions[U] : ((x === null || typeof x > "u") && (x = Lt()), A = $2[U] && $2[U][x]), typeof A > "u" || !A.length || !A[0]) {
          var kt = "";
          dt = [];
          for (ht in $2[U])
            this.terminals_[ht] && ht > ct && dt.push("'" + this.terminals_[ht] + "'");
          T.showPosition ? kt = "Parse error on line " + (G + 1) + `:
` + T.showPosition() + `
Expecting ` + dt.join(", ") + ", got '" + (this.terminals_[x] || x) + "'" : kt = "Parse error on line " + (G + 1) + ": Unexpected " + (x == H ? "end of input" : "'" + (this.terminals_[x] || x) + "'"), this.parseError(kt, {
            text: T.match,
            token: this.terminals_[x] || x,
            line: T.yylineno,
            loc: _t,
            expected: dt
          });
        }
        if (A[0] instanceof Array && A.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + U + ", token: " + x);
        switch (A[0]) {
          case 1:
            a2.push(x), m.push(T.yytext), i.push(T.yylloc), a2.push(A[1]), x = null, V = T.yyleng, l = T.yytext, G = T.yylineno, _t = T.yylloc;
            break;
          case 2:
            if (B = this.productions_[A[1]][1], z.$ = m[m.length - B], z._$ = {
              first_line: i[i.length - (B || 1)].first_line,
              last_line: i[i.length - 1].last_line,
              first_column: i[i.length - (B || 1)].first_column,
              last_column: i[i.length - 1].last_column
            }, qt && (z._$.range = [
              i[i.length - (B || 1)].range[0],
              i[i.length - 1].range[1]
            ]), Tt = this.performAction.apply(z, [
              l,
              V,
              G,
              j.yy,
              A[1],
              m,
              i
            ].concat(St)), typeof Tt < "u")
              return Tt;
            B && (a2 = a2.slice(0, -1 * B * 2), m = m.slice(0, -1 * B), i = i.slice(0, -1 * B)), a2.push(this.productions_[A[1]][0]), m.push(z.$), i.push(z._$), vt = $2[a2[a2.length - 2]][a2[a2.length - 1]], a2.push(vt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, Jt = function() {
    var O = {
      EOF: 1,
      parseError: S(function(r, a2) {
        if (this.yy.parser)
          this.yy.parser.parseError(r, a2);
        else
          throw new Error(r);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: S(function(r, a2) {
        return this.yy = a2 || this.yy || {}, this._input = r, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
        var a2 = r.match(/(?:\r\n?|\n).*/g);
        return a2 ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), r;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: S(function(r) {
        var a2 = r.length, y = r.split(/(?:\r\n?|\n)/g);
        this._input = r + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a2), this.offset -= a2;
        var m = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
        var i = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: y ? (y.length === m.length ? this.yylloc.first_column : 0) + m[m.length - y.length].length - y[0].length : this.yylloc.first_column - a2
        }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - a2]), this.yyleng = this.yytext.length, this;
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
        var r = this.pastInput(), a2 = new Array(r.length + 1).join("-");
        return r + this.upcomingInput() + `
` + a2 + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: S(function(r, a2) {
        var y, m, i;
        if (this.options.backtrack_lexer && (i = {
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
        }, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), m = r[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + r[0].length
        }, this.yytext += r[0], this.match += r[0], this.matches = r, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(r[0].length), this.matched += r[0], y = this.performAction.call(this, this.yy, this, a2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), y)
          return y;
        if (this._backtrack) {
          for (var $2 in i)
            this[$2] = i[$2];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: S(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var r, a2, y, m;
        this._more || (this.yytext = "", this.match = "");
        for (var i = this._currentRules(), $2 = 0; $2 < i.length; $2++)
          if (y = this._input.match(this.rules[i[$2]]), y && (!a2 || y[0].length > a2[0].length)) {
            if (a2 = y, m = $2, this.options.backtrack_lexer) {
              if (r = this.test_match(y, i[$2]), r !== false)
                return r;
              if (this._backtrack) {
                a2 = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a2 ? (r = this.test_match(a2, i[m]), r !== false ? r : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
      performAction: S(function(r, a2, y, m) {
        switch (y) {
          case 0:
            return 38;
          case 1:
            return 40;
          case 2:
            return 39;
          case 3:
            return 44;
          case 4:
            return 51;
          case 5:
            return 52;
          case 6:
            return 53;
          case 7:
            return 54;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return 5;
          case 11:
            break;
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            return this.pushState("SCALE"), 17;
          case 16:
            return 18;
          case 17:
            this.popState();
            break;
          case 18:
            return this.begin("acc_title"), 33;
          case 19:
            return this.popState(), "acc_title_value";
          case 20:
            return this.begin("acc_descr"), 35;
          case 21:
            return this.popState(), "acc_descr_value";
          case 22:
            this.begin("acc_descr_multiline");
            break;
          case 23:
            this.popState();
            break;
          case 24:
            return "acc_descr_multiline_value";
          case 25:
            return this.pushState("CLASSDEF"), 41;
          case 26:
            return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
          case 27:
            return this.popState(), this.pushState("CLASSDEFID"), 42;
          case 28:
            return this.popState(), 43;
          case 29:
            return this.pushState("CLASS"), 48;
          case 30:
            return this.popState(), this.pushState("CLASS_STYLE"), 49;
          case 31:
            return this.popState(), 50;
          case 32:
            return this.pushState("STYLE"), 45;
          case 33:
            return this.popState(), this.pushState("STYLEDEF_STYLES"), 46;
          case 34:
            return this.popState(), 47;
          case 35:
            return this.pushState("SCALE"), 17;
          case 36:
            return 18;
          case 37:
            this.popState();
            break;
          case 38:
            this.pushState("STATE");
            break;
          case 39:
            return this.popState(), a2.yytext = a2.yytext.slice(0, -8).trim(), 25;
          case 40:
            return this.popState(), a2.yytext = a2.yytext.slice(0, -8).trim(), 26;
          case 41:
            return this.popState(), a2.yytext = a2.yytext.slice(0, -10).trim(), 27;
          case 42:
            return this.popState(), a2.yytext = a2.yytext.slice(0, -8).trim(), 25;
          case 43:
            return this.popState(), a2.yytext = a2.yytext.slice(0, -8).trim(), 26;
          case 44:
            return this.popState(), a2.yytext = a2.yytext.slice(0, -10).trim(), 27;
          case 45:
            return 51;
          case 46:
            return 52;
          case 47:
            return 53;
          case 48:
            return 54;
          case 49:
            this.pushState("STATE_STRING");
            break;
          case 50:
            return this.pushState("STATE_ID"), "AS";
          case 51:
            return this.popState(), "ID";
          case 52:
            this.popState();
            break;
          case 53:
            return "STATE_DESCR";
          case 54:
            return 19;
          case 55:
            this.popState();
            break;
          case 56:
            return this.popState(), this.pushState("struct"), 20;
          case 57:
            break;
          case 58:
            return this.popState(), 21;
          case 59:
            break;
          case 60:
            return this.begin("NOTE"), 29;
          case 61:
            return this.popState(), this.pushState("NOTE_ID"), 59;
          case 62:
            return this.popState(), this.pushState("NOTE_ID"), 60;
          case 63:
            this.popState(), this.pushState("FLOATING_NOTE");
            break;
          case 64:
            return this.popState(), this.pushState("FLOATING_NOTE_ID"), "AS";
          case 65:
            break;
          case 66:
            return "NOTE_TEXT";
          case 67:
            return this.popState(), "ID";
          case 68:
            return this.popState(), this.pushState("NOTE_TEXT"), 24;
          case 69:
            return this.popState(), a2.yytext = a2.yytext.substr(2).trim(), 31;
          case 70:
            return this.popState(), a2.yytext = a2.yytext.slice(0, -8).trim(), 31;
          case 71:
            return 6;
          case 72:
            return 6;
          case 73:
            return 16;
          case 74:
            return 57;
          case 75:
            return 24;
          case 76:
            return a2.yytext = a2.yytext.trim(), 14;
          case 77:
            return 15;
          case 78:
            return 28;
          case 79:
            return 58;
          case 80:
            return 5;
          case 81:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:click\b)/i, /^(?:href\b)/i, /^(?:"[^"]*")/i, /^(?:default\b)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:classDef\s+)/i, /^(?:DEFAULT\s+)/i, /^(?:\w+\s+)/i, /^(?:[^\n]*)/i, /^(?:class\s+)/i, /^(?:(\w+)+((,\s*\w+)*))/i, /^(?:[^\n]*)/i, /^(?:style\s+)/i, /^(?:[\w,]+\s+)/i, /^(?:[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:state\s+)/i, /^(?:.*<<fork>>)/i, /^(?:.*<<join>>)/i, /^(?:.*<<choice>>)/i, /^(?:.*\[\[fork\]\])/i, /^(?:.*\[\[join\]\])/i, /^(?:.*\[\[choice\]\])/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:["])/i, /^(?:\s*as\s+)/i, /^(?:[^\n\{]*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n\s\{]+)/i, /^(?:\n)/i, /^(?:\{)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:\})/i, /^(?:[\n])/i, /^(?:note\s+)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:")/i, /^(?:\s*as\s*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n]*)/i, /^(?:\s*[^:\n\s\-]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:[\s\S]*?end note\b)/i, /^(?:stateDiagram\s+)/i, /^(?:stateDiagram-v2\s+)/i, /^(?:hide empty description\b)/i, /^(?:\[\*\])/i, /^(?:[^:\n\s\-\{]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:-->)/i, /^(?:--)/i, /^(?::::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { LINE: { rules: [12, 13], inclusive: false }, struct: { rules: [12, 13, 25, 29, 32, 38, 45, 46, 47, 48, 57, 58, 59, 60, 74, 75, 76, 77, 78], inclusive: false }, FLOATING_NOTE_ID: { rules: [67], inclusive: false }, FLOATING_NOTE: { rules: [64, 65, 66], inclusive: false }, NOTE_TEXT: { rules: [69, 70], inclusive: false }, NOTE_ID: { rules: [68], inclusive: false }, NOTE: { rules: [61, 62, 63], inclusive: false }, STYLEDEF_STYLEOPTS: { rules: [], inclusive: false }, STYLEDEF_STYLES: { rules: [34], inclusive: false }, STYLE_IDS: { rules: [], inclusive: false }, STYLE: { rules: [33], inclusive: false }, CLASS_STYLE: { rules: [31], inclusive: false }, CLASS: { rules: [30], inclusive: false }, CLASSDEFID: { rules: [28], inclusive: false }, CLASSDEF: { rules: [26, 27], inclusive: false }, acc_descr_multiline: { rules: [23, 24], inclusive: false }, acc_descr: { rules: [21], inclusive: false }, acc_title: { rules: [19], inclusive: false }, SCALE: { rules: [16, 17, 36, 37], inclusive: false }, ALIAS: { rules: [], inclusive: false }, STATE_ID: { rules: [51], inclusive: false }, STATE_STRING: { rules: [52, 53], inclusive: false }, FORK_STATE: { rules: [], inclusive: false }, STATE: { rules: [12, 13, 39, 40, 41, 42, 43, 44, 49, 50, 54, 55, 56], inclusive: false }, ID: { rules: [12, 13], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 18, 20, 22, 25, 29, 32, 35, 38, 56, 60, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81], inclusive: true } }
    };
    return O;
  }();
  gt.lexer = Jt;
  function lt() {
    this.yy = {};
  }
  return S(lt, "Parser"), lt.prototype = gt, gt.Parser = lt, new lt();
}();
Dt.parser = Dt;
var Fe = Dt;
var de = "TB";
var Yt = "TB";
var It = "dir";
var X = "state";
var M = "root";
var Ct = "relation";
var ue = "classDef";
var pe = "style";
var ye = "applyClass";
var Z = "default";
var Pt = "divider";
var Ft = "fill:none";
var Gt = "fill: #333";
var jt = "c";
var Ut = "text";
var Kt = "normal";
var bt = "rect";
var Et = "rectWithTitle";
var fe = "stateStart";
var ge = "stateEnd";
var At = "divider";
var wt = "roundedWithTitle";
var Se = "note";
var me2 = "noteGroup";
var Q = "statediagram";
var _e = "state";
var Te = `${Q}-${_e}`;
var Wt = "transition";
var ke = "note";
var be = "note-edge";
var Ee = `${Wt} ${be}`;
var De = `${Q}-${ke}`;
var Ce = "cluster";
var $e = `${Q}-${Ce}`;
var xe = "cluster-alt";
var Le = `${Q}-${xe}`;
var Vt = "parent";
var zt = "note";
var ve = "state";
var $t = "----";
var Ie = `${$t}${zt}`;
var Ot = `${$t}${Vt}`;
var Mt = S((t, e = Yt) => {
  if (!t.doc)
    return e;
  let o = e;
  for (const s of t.doc)
    s.stmt === "dir" && (o = s.value);
  return o;
}, "getDir");
var Ae = S(function(t, e) {
  return e.db.getClasses();
}, "getClasses");
var we = S(async function(t, e, o, s) {
  ut.info("REF0:"), ut.info("Drawing state diagram (v2)", e);
  const { securityLevel: d, state: h, layout: f } = me();
  s.db.extract(s.db.getRootDocV2());
  const S2 = s.db.getData(), n = a(e, d);
  S2.type = s.type, S2.layoutAlgorithm = f, S2.nodeSpacing = (h == null ? void 0 : h.nodeSpacing) || 50, S2.rankSpacing = (h == null ? void 0 : h.rankSpacing) || 50, S2.markers = ["barb"], S2.diagramId = e, await vnt(S2, n);
  const g = 8;
  try {
    (typeof s.db.getLinks == "function" ? s.db.getLinks() : /* @__PURE__ */ new Map()).forEach((L, k) => {
      var _a;
      const D = typeof k == "string" ? k : typeof (k == null ? void 0 : k.id) == "string" ? k.id : "";
      if (!D) {
        ut.warn("⚠️ Invalid or missing stateId from key:", JSON.stringify(k));
        return;
      }
      const w = (_a = n.node()) == null ? void 0 : _a.querySelectorAll("g");
      let c;
      if (w == null ? void 0 : w.forEach((I) => {
        var _a2;
        ((_a2 = I.textContent) == null ? void 0 : _a2.trim()) === D && (c = I);
      }), !c) {
        ut.warn("⚠️ Could not find node matching text:", D);
        return;
      }
      const C = c.parentNode;
      if (!C) {
        ut.warn("⚠️ Node has no parent, cannot wrap:", D);
        return;
      }
      const b = document.createElementNS("http://www.w3.org/2000/svg", "a"), N = L.url.replace(/^"+|"+$/g, "");
      if (b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", N), b.setAttribute("target", "_blank"), L.tooltip) {
        const I = L.tooltip.replace(/^"+|"+$/g, "");
        b.setAttribute("title", I);
      }
      C.replaceChild(b, c), b.appendChild(c), ut.info("🔗 Wrapped node in <a> tag for:", D, L.url);
    });
  } catch (L) {
    ut.error("❌ Error injecting clickable links:", L);
  }
  Xn.insertTitle(
    n,
    "statediagramTitleText",
    (h == null ? void 0 : h.titleTopMargin) ?? 25,
    s.db.getDiagramTitle()
  ), $(n, g, Q, (h == null ? void 0 : h.useMaxWidth) ?? true);
}, "draw");
var Ge = {
  getClasses: Ae,
  draw: we,
  getDir: Mt
};
var yt = /* @__PURE__ */ new Map();
var F = 0;
function ft(t = "", e = 0, o = "", s = $t) {
  const d = o !== null && o.length > 0 ? `${s}${o}` : "";
  return `${ve}-${t}${d}-${e}`;
}
S(ft, "stateDomId");
var Oe = S((t, e, o, s, d, h, f, S2) => {
  ut.trace("items", e), e.forEach((n) => {
    switch (n.stmt) {
      case X:
        q(t, n, o, s, d, h, f, S2);
        break;
      case Z:
        q(t, n, o, s, d, h, f, S2);
        break;
      case Ct:
        {
          q(
            t,
            n.state1,
            o,
            s,
            d,
            h,
            f,
            S2
          ), q(
            t,
            n.state2,
            o,
            s,
            d,
            h,
            f,
            S2
          );
          const g = {
            id: "edge" + F,
            start: n.state1.id,
            end: n.state2.id,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: Ft,
            labelStyle: "",
            label: ga.sanitizeText(n.description ?? "", me()),
            arrowheadStyle: Gt,
            labelpos: jt,
            labelType: Ut,
            thickness: Kt,
            classes: Wt,
            look: f
          };
          d.push(g), F++;
        }
        break;
    }
  });
}, "setupDoc");
var Rt = S((t, e = Yt) => {
  let o = e;
  if (t.doc)
    for (const s of t.doc)
      s.stmt === "dir" && (o = s.value);
  return o;
}, "getDir");
function J(t, e, o) {
  if (!e.id || e.id === "</join></fork>" || e.id === "</choice>")
    return;
  e.cssClasses && (Array.isArray(e.cssCompiledStyles) || (e.cssCompiledStyles = []), e.cssClasses.split(" ").forEach((d) => {
    const h = o.get(d);
    h && (e.cssCompiledStyles = [...e.cssCompiledStyles ?? [], ...h.styles]);
  }));
  const s = t.find((d) => d.id === e.id);
  s ? Object.assign(s, e) : t.push(e);
}
S(J, "insertOrUpdateNode");
function Xt(t) {
  var _a;
  return ((_a = t == null ? void 0 : t.classes) == null ? void 0 : _a.join(" ")) ?? "";
}
S(Xt, "getClassesFromDbInfo");
function Ht(t) {
  return (t == null ? void 0 : t.styles) ?? [];
}
S(Ht, "getStylesFromDbInfo");
var q = S((t, e, o, s, d, h, f, S2) => {
  var _a, _b, _c;
  const n = e.id, g = o.get(n), L = Xt(g), k = Ht(g), D = me();
  if (ut.info("dataFetcher parsedItem", e, g, k), n !== "root") {
    let w = bt;
    e.start === true ? w = fe : e.start === false && (w = ge), e.type !== Z && (w = e.type), yt.get(n) || yt.set(n, {
      id: n,
      shape: w,
      description: ga.sanitizeText(n, D),
      cssClasses: `${L} ${Te}`,
      cssStyles: k
    });
    const c = yt.get(n);
    e.description && (Array.isArray(c.description) ? (c.shape = Et, c.description.push(e.description)) : ((_a = c.description) == null ? void 0 : _a.length) && c.description.length > 0 ? (c.shape = Et, c.description === n ? c.description = [e.description] : c.description = [c.description, e.description]) : (c.shape = bt, c.description = e.description), c.description = ga.sanitizeTextOrArray(c.description, D)), ((_b = c.description) == null ? void 0 : _b.length) === 1 && c.shape === Et && (c.type === "group" ? c.shape = wt : c.shape = bt), !c.type && e.doc && (ut.info("Setting cluster for XCX", n, Rt(e)), c.type = "group", c.isGroup = true, c.dir = Rt(e), c.shape = e.type === Pt ? At : wt, c.cssClasses = `${c.cssClasses} ${$e} ${h ? Le : ""}`);
    const C = {
      labelStyle: "",
      shape: c.shape,
      label: c.description,
      cssClasses: c.cssClasses,
      cssCompiledStyles: [],
      cssStyles: c.cssStyles,
      id: n,
      dir: c.dir,
      domId: ft(n, F),
      type: c.type,
      isGroup: c.type === "group",
      padding: 8,
      rx: 10,
      ry: 10,
      look: f
    };
    if (C.shape === At && (C.label = ""), t && t.id !== "root" && (ut.trace("Setting node ", n, " to be child of its parent ", t.id), C.parentId = t.id), C.centerLabel = true, e.note) {
      const b = {
        labelStyle: "",
        shape: Se,
        label: e.note.text,
        cssClasses: De,
        // useHtmlLabels: false,
        cssStyles: [],
        cssCompiledStyles: [],
        id: n + Ie + "-" + F,
        domId: ft(n, F, zt),
        type: c.type,
        isGroup: c.type === "group",
        padding: (_c = D.flowchart) == null ? void 0 : _c.padding,
        look: f,
        position: e.note.position
      }, N = n + Ot, I = {
        labelStyle: "",
        shape: me2,
        label: e.note.text,
        cssClasses: c.cssClasses,
        cssStyles: [],
        id: n + Ot,
        domId: ft(n, F, Vt),
        type: "group",
        isGroup: true,
        padding: 16,
        //getConfig().flowchart.padding
        look: f,
        position: e.note.position
      };
      F++, I.id = N, b.parentId = N, J(s, I, S2), J(s, b, S2), J(s, C, S2);
      let Y = n, P = b.id;
      e.note.position === "left of" && (Y = b.id, P = n), d.push({
        id: Y + "-" + P,
        start: Y,
        end: P,
        arrowhead: "none",
        arrowTypeEnd: "",
        style: Ft,
        labelStyle: "",
        classes: Ee,
        arrowheadStyle: Gt,
        labelpos: jt,
        labelType: Ut,
        thickness: Kt,
        look: f
      });
    } else
      J(s, C, S2);
  }
  e.doc && (ut.trace("Adding nodes children "), Oe(e, e.doc, o, s, d, !h, f, S2));
}, "dataFetcher");
var Re = S(() => {
  yt.clear(), F = 0;
}, "reset");
var E = {
  START_NODE: "[*]",
  START_TYPE: "start",
  END_NODE: "[*]",
  END_TYPE: "end",
  COLOR_KEYWORD: "color",
  FILL_KEYWORD: "fill",
  BG_FILL: "bgFill",
  STYLECLASS_SEP: ","
};
var Nt = S(() => /* @__PURE__ */ new Map(), "newClassesList");
var Bt = S(() => ({
  relations: [],
  states: /* @__PURE__ */ new Map(),
  documents: {}
}), "newDoc");
var ut2 = S((t) => JSON.parse(JSON.stringify(t)), "clone");
var pt;
var je = (pt = class {
  constructor(t) {
    this.version = t, this.nodes = [], this.edges = [], this.rootDoc = [], this.classes = Nt(), this.documents = { root: Bt() }, this.currentDocument = this.documents.root, this.startEndCount = 0, this.dividerCnt = 0, this.links = /* @__PURE__ */ new Map(), this.getAccTitle = dP, this.setAccTitle = uP, this.getAccDescription = fP, this.setAccDescription = pP, this.setDiagramTitle = mP, this.getDiagramTitle = gP, this.clear(), this.setRootDoc = this.setRootDoc.bind(this), this.getDividerId = this.getDividerId.bind(this), this.setDirection = this.setDirection.bind(this), this.trimColon = this.trimColon.bind(this);
  }
  /**
   * Convert all of the statements (stmts) that were parsed into states and relationships.
   * This is done because a state diagram may have nested sections,
   * where each section is a 'document' and has its own set of statements.
   * Ex: the section within a fork has its own statements, and incoming and outgoing statements
   * refer to the fork as a whole (document).
   * See the parser grammar:  the definition of a document is a document then a 'line', where a line can be a statement.
   * This will push the statement into the list of statements for the current document.
   */
  extract(t) {
    this.clear(true);
    for (const s of Array.isArray(t) ? t : t.doc)
      switch (s.stmt) {
        case X:
          this.addState(s.id.trim(), s.type, s.doc, s.description, s.note);
          break;
        case Ct:
          this.addRelation(s.state1, s.state2, s.description);
          break;
        case ue:
          this.addStyleClass(s.id.trim(), s.classes);
          break;
        case pe:
          this.handleStyleDef(s);
          break;
        case ye:
          this.setCssClass(s.id.trim(), s.styleClass);
          break;
        case "click":
          this.addLink(s.id, s.url, s.tooltip);
          break;
      }
    const e = this.getStates(), o = me();
    Re(), q(
      void 0,
      this.getRootDocV2(),
      e,
      this.nodes,
      this.edges,
      true,
      o.look,
      this.classes
    );
    for (const s of this.nodes)
      if (Array.isArray(s.label)) {
        if (s.description = s.label.slice(1), s.isGroup && s.description.length > 0)
          throw new Error(
            `Group nodes can only have label. Remove the additional description for node [${s.id}]`
          );
        s.label = s.label[0];
      }
  }
  handleStyleDef(t) {
    const e = t.id.trim().split(","), o = t.styleClass.split(",");
    for (const s of e) {
      let d = this.getState(s);
      if (!d) {
        const h = s.trim();
        this.addState(h), d = this.getState(h);
      }
      d && (d.styles = o.map((h) => {
        var _a;
        return (_a = h.replace(/;/g, "")) == null ? void 0 : _a.trim();
      }));
    }
  }
  setRootDoc(t) {
    ut.info("Setting root doc", t), this.rootDoc = t, this.version === 1 ? this.extract(t) : this.extract(this.getRootDocV2());
  }
  docTranslator(t, e, o) {
    if (e.stmt === Ct) {
      this.docTranslator(t, e.state1, true), this.docTranslator(t, e.state2, false);
      return;
    }
    if (e.stmt === X && (e.id === E.START_NODE ? (e.id = t.id + (o ? "_start" : "_end"), e.start = o) : e.id = e.id.trim()), e.stmt !== M && e.stmt !== X || !e.doc)
      return;
    const s = [];
    let d = [];
    for (const h of e.doc)
      if (h.type === Pt) {
        const f = ut2(h);
        f.doc = ut2(d), s.push(f), d = [];
      } else
        d.push(h);
    if (s.length > 0 && d.length > 0) {
      const h = {
        stmt: X,
        id: VX(),
        type: "divider",
        doc: ut2(d)
      };
      s.push(ut2(h)), e.doc = s;
    }
    e.doc.forEach((h) => this.docTranslator(e, h, true));
  }
  getRootDocV2() {
    return this.docTranslator(
      { id: M, stmt: M },
      { id: M, stmt: M, doc: this.rootDoc },
      true
    ), { id: M, doc: this.rootDoc };
  }
  /**
   * Function called by parser when a node definition has been found.
   *
   * @param descr - description for the state. Can be a string or a list or strings
   * @param classes - class styles to apply to this state. Can be a string (1 style) or an array of styles. If it's just 1 class, convert it to an array of that 1 class.
   * @param styles - styles to apply to this state. Can be a string (1 style) or an array of styles. If it's just 1 style, convert it to an array of that 1 style.
   * @param textStyles - text styles to apply to this state. Can be a string (1 text test) or an array of text styles. If it's just 1 text style, convert it to an array of that 1 text style.
   */
  addState(t, e = Z, o = void 0, s = void 0, d = void 0, h = void 0, f = void 0, S2 = void 0) {
    const n = t == null ? void 0 : t.trim();
    if (!this.currentDocument.states.has(n))
      ut.info("Adding state ", n, s), this.currentDocument.states.set(n, {
        stmt: X,
        id: n,
        descriptions: [],
        type: e,
        doc: o,
        note: d,
        classes: [],
        styles: [],
        textStyles: []
      });
    else {
      const g = this.currentDocument.states.get(n);
      if (!g)
        throw new Error(`State not found: ${n}`);
      g.doc || (g.doc = o), g.type || (g.type = e);
    }
    if (s && (ut.info("Setting state description", n, s), (Array.isArray(s) ? s : [s]).forEach((g) => this.addDescription(n, g.trim()))), d) {
      const g = this.currentDocument.states.get(n);
      if (!g)
        throw new Error(`State not found: ${n}`);
      g.note = d, g.note.text = ga.sanitizeText(g.note.text, me());
    }
    h && (ut.info("Setting state classes", n, h), (Array.isArray(h) ? h : [h]).forEach((g) => this.setCssClass(n, g.trim()))), f && (ut.info("Setting state styles", n, f), (Array.isArray(f) ? f : [f]).forEach((g) => this.setStyle(n, g.trim()))), S2 && (ut.info("Setting state styles", n, f), (Array.isArray(S2) ? S2 : [S2]).forEach((g) => this.setTextStyle(n, g.trim())));
  }
  clear(t) {
    this.nodes = [], this.edges = [], this.documents = { root: Bt() }, this.currentDocument = this.documents.root, this.startEndCount = 0, this.classes = Nt(), t || (this.links = /* @__PURE__ */ new Map(), hP());
  }
  getState(t) {
    return this.currentDocument.states.get(t);
  }
  getStates() {
    return this.currentDocument.states;
  }
  logDocuments() {
    ut.info("Documents = ", this.documents);
  }
  getRelations() {
    return this.currentDocument.relations;
  }
  /**
   * Adds a clickable link to a state.
   */
  addLink(t, e, o) {
    this.links.set(t, { url: e, tooltip: o }), ut.warn("Adding link", t, e, o);
  }
  /**
   * Get all registered links.
   */
  getLinks() {
    return this.links;
  }
  /**
   * If the id is a start node ( [*] ), then return a new id constructed from
   * the start node name and the current start node count.
   * else return the given id
   */
  startIdIfNeeded(t = "") {
    return t === E.START_NODE ? (this.startEndCount++, `${E.START_TYPE}${this.startEndCount}`) : t;
  }
  /**
   * If the id is a start node ( [*] ), then return the start type ('start')
   * else return the given type
   */
  startTypeIfNeeded(t = "", e = Z) {
    return t === E.START_NODE ? E.START_TYPE : e;
  }
  /**
   * If the id is an end node ( [*] ), then return a new id constructed from
   * the end node name and the current start_end node count.
   * else return the given id
   */
  endIdIfNeeded(t = "") {
    return t === E.END_NODE ? (this.startEndCount++, `${E.END_TYPE}${this.startEndCount}`) : t;
  }
  /**
   * If the id is an end node ( [*] ), then return the end type
   * else return the given type
   *
   */
  endTypeIfNeeded(t = "", e = Z) {
    return t === E.END_NODE ? E.END_TYPE : e;
  }
  addRelationObjs(t, e, o = "") {
    const s = this.startIdIfNeeded(t.id.trim()), d = this.startTypeIfNeeded(t.id.trim(), t.type), h = this.startIdIfNeeded(e.id.trim()), f = this.startTypeIfNeeded(e.id.trim(), e.type);
    this.addState(
      s,
      d,
      t.doc,
      t.description,
      t.note,
      t.classes,
      t.styles,
      t.textStyles
    ), this.addState(
      h,
      f,
      e.doc,
      e.description,
      e.note,
      e.classes,
      e.styles,
      e.textStyles
    ), this.currentDocument.relations.push({
      id1: s,
      id2: h,
      relationTitle: ga.sanitizeText(o, me())
    });
  }
  /**
   * Add a relation between two items.  The items may be full objects or just the string id of a state.
   */
  addRelation(t, e, o) {
    if (typeof t == "object" && typeof e == "object")
      this.addRelationObjs(t, e, o);
    else if (typeof t == "string" && typeof e == "string") {
      const s = this.startIdIfNeeded(t.trim()), d = this.startTypeIfNeeded(t), h = this.endIdIfNeeded(e.trim()), f = this.endTypeIfNeeded(e);
      this.addState(s, d), this.addState(h, f), this.currentDocument.relations.push({
        id1: s,
        id2: h,
        relationTitle: o ? ga.sanitizeText(o, me()) : void 0
      });
    }
  }
  addDescription(t, e) {
    var _a;
    const o = this.currentDocument.states.get(t), s = e.startsWith(":") ? e.replace(":", "").trim() : e;
    (_a = o == null ? void 0 : o.descriptions) == null ? void 0 : _a.push(ga.sanitizeText(s, me()));
  }
  cleanupLabel(t) {
    return t.startsWith(":") ? t.slice(2).trim() : t.trim();
  }
  getDividerId() {
    return this.dividerCnt++, `divider-id-${this.dividerCnt}`;
  }
  /**
   * Called when the parser comes across a (style) class definition
   * @example classDef my-style fill:#f96;
   *
   * @param id - the id of this (style) class
   * @param styleAttributes - the string with 1 or more style attributes (each separated by a comma)
   */
  addStyleClass(t, e = "") {
    this.classes.has(t) || this.classes.set(t, { id: t, styles: [], textStyles: [] });
    const o = this.classes.get(t);
    e && o && e.split(E.STYLECLASS_SEP).forEach((s) => {
      const d = s.replace(/([^;]*);/, "$1").trim();
      if (RegExp(E.COLOR_KEYWORD).exec(s)) {
        const h = d.replace(E.FILL_KEYWORD, E.BG_FILL).replace(E.COLOR_KEYWORD, E.FILL_KEYWORD);
        o.textStyles.push(h);
      }
      o.styles.push(d);
    });
  }
  getClasses() {
    return this.classes;
  }
  /**
   * Add a (style) class or css class to a state with the given id.
   * If the state isn't already in the list of known states, add it.
   * Might be called by parser when a style class or CSS class should be applied to a state
   *
   * @param itemIds - The id or a list of ids of the item(s) to apply the css class to
   * @param cssClassName - CSS class name
   */
  setCssClass(t, e) {
    t.split(",").forEach((o) => {
      var _a;
      let s = this.getState(o);
      if (!s) {
        const d = o.trim();
        this.addState(d), s = this.getState(d);
      }
      (_a = s == null ? void 0 : s.classes) == null ? void 0 : _a.push(e);
    });
  }
  /**
   * Add a style to a state with the given id.
   * @example style stateId fill:#f9f,stroke:#333,stroke-width:4px
   *   where 'style' is the keyword
   *   stateId is the id of a state
   *   the rest of the string is the styleText (all of the attributes to be applied to the state)
   *
   * @param itemId - The id of item to apply the style to
   * @param styleText - the text of the attributes for the style
   */
  setStyle(t, e) {
    var _a, _b;
    (_b = (_a = this.getState(t)) == null ? void 0 : _a.styles) == null ? void 0 : _b.push(e);
  }
  /**
   * Add a text style to a state with the given id
   *
   * @param itemId - The id of item to apply the css class to
   * @param cssClassName - CSS class name
   */
  setTextStyle(t, e) {
    var _a, _b;
    (_b = (_a = this.getState(t)) == null ? void 0 : _a.textStyles) == null ? void 0 : _b.push(e);
  }
  /**
   * Finds the direction statement in the root document.
   * @returns the direction statement if present
   */
  getDirectionStatement() {
    return this.rootDoc.find((t) => t.stmt === It);
  }
  getDirection() {
    var _a;
    return ((_a = this.getDirectionStatement()) == null ? void 0 : _a.value) ?? de;
  }
  setDirection(t) {
    const e = this.getDirectionStatement();
    e ? e.value = t : this.rootDoc.unshift({ stmt: It, value: t });
  }
  trimColon(t) {
    return t.startsWith(":") ? t.slice(1).trim() : t.trim();
  }
  getData() {
    const t = me();
    return {
      nodes: this.nodes,
      edges: this.edges,
      other: {},
      config: t,
      direction: Mt(this.getRootDocV2())
    };
  }
  getConfig() {
    return me().state;
  }
}, S(pt, "StateDB"), pt.relationType = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
}, pt);
var Ne = S((t) => `
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor || t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor || t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground || t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg || t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder || t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground || t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`, "getStyles");
var Ue = Ne;

export {
  Fe,
  Ge,
  je,
  Ue
};
//# sourceMappingURL=chunk-B7IP7MWR.js.map
