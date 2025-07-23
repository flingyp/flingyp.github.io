import {
  l
} from "./chunk-F4TZSDY7.js";
import {
  Art,
  FR,
  N6,
  Ot,
  Tt,
  Zs,
  _,
  aK,
  ej,
  fe,
  j8,
  lc,
  tZ,
  tj,
  ut
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/kanban-definition-ZSS6B67P-B4ltCpQu-N7RlWHCM.js
var Q = function() {
  var t = _(function(d, e, i, r) {
    for (i = i || {}, r = d.length; r--; i[d[r]] = e) ;
    return i;
  }, "o"), u = [1, 4], p = [1, 13], n = [1, 12], g = [1, 15], f = [1, 16], E = [1, 20], c = [1, 19], x = [6, 7, 8], O = [1, 26], h = [1, 24], $ = [1, 25], k = [6, 7, 11], T = [1, 31], I = [6, 7, 11, 24], b = [1, 6, 13, 16, 17, 20, 23], A = [1, 35], w = [1, 36], C = [1, 6, 7, 11, 13, 16, 17, 20, 23], G = [1, 38], U = {
    trace: _(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, KANBAN: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, shapeData: 15, ICON: 16, CLASS: 17, nodeWithId: 18, nodeWithoutId: 19, NODE_DSTART: 20, NODE_DESCR: 21, NODE_DEND: 22, NODE_ID: 23, SHAPE_DATA: 24, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "KANBAN", 11: "EOF", 13: "SPACELIST", 16: "ICON", 17: "CLASS", 20: "NODE_DSTART", 21: "NODE_DESCR", 22: "NODE_DEND", 23: "NODE_ID", 24: "SHAPE_DATA" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 3], [12, 2], [12, 2], [12, 2], [12, 1], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [19, 3], [18, 1], [18, 4], [15, 2], [15, 1]],
    performAction: _(function(d, e, i, r, l2, s, _2) {
      var a = s.length - 1;
      switch (l2) {
        case 6:
        case 7:
          return r;
        case 8:
          r.getLogger().trace("Stop NL ");
          break;
        case 9:
          r.getLogger().trace("Stop EOF ");
          break;
        case 11:
          r.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          r.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          r.getLogger().info("Node: ", s[a - 1].id), r.addNode(s[a - 2].length, s[a - 1].id, s[a - 1].descr, s[a - 1].type, s[a]);
          break;
        case 16:
          r.getLogger().info("Node: ", s[a].id), r.addNode(s[a - 1].length, s[a].id, s[a].descr, s[a].type);
          break;
        case 17:
          r.getLogger().trace("Icon: ", s[a]), r.decorateNode({ icon: s[a] });
          break;
        case 18:
        case 23:
          r.decorateNode({ class: s[a] });
          break;
        case 19:
          r.getLogger().trace("SPACELIST");
          break;
        case 20:
          r.getLogger().trace("Node: ", s[a - 1].id), r.addNode(0, s[a - 1].id, s[a - 1].descr, s[a - 1].type, s[a]);
          break;
        case 21:
          r.getLogger().trace("Node: ", s[a].id), r.addNode(0, s[a].id, s[a].descr, s[a].type);
          break;
        case 22:
          r.decorateNode({ icon: s[a] });
          break;
        case 27:
          r.getLogger().trace("node found ..", s[a - 2]), this.$ = { id: s[a - 1], descr: s[a - 1], type: r.getType(s[a - 2], s[a]) };
          break;
        case 28:
          this.$ = { id: s[a], descr: s[a], type: 0 };
          break;
        case 29:
          r.getLogger().trace("node found ..", s[a - 3]), this.$ = { id: s[a - 3], descr: s[a - 1], type: r.getType(s[a - 2], s[a]) };
          break;
        case 30:
          this.$ = s[a - 1] + s[a];
          break;
        case 31:
          this.$ = s[a];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: u }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: u }, { 6: p, 7: [1, 10], 9: 9, 12: 11, 13: n, 14: 14, 16: g, 17: f, 18: 17, 19: 18, 20: E, 23: c }, t(x, [2, 3]), { 1: [2, 2] }, t(x, [2, 4]), t(x, [2, 5]), { 1: [2, 6], 6: p, 12: 21, 13: n, 14: 14, 16: g, 17: f, 18: 17, 19: 18, 20: E, 23: c }, { 6: p, 9: 22, 12: 11, 13: n, 14: 14, 16: g, 17: f, 18: 17, 19: 18, 20: E, 23: c }, { 6: O, 7: h, 10: 23, 11: $ }, t(k, [2, 24], { 18: 17, 19: 18, 14: 27, 16: [1, 28], 17: [1, 29], 20: E, 23: c }), t(k, [2, 19]), t(k, [2, 21], { 15: 30, 24: T }), t(k, [2, 22]), t(k, [2, 23]), t(I, [2, 25]), t(I, [2, 26]), t(I, [2, 28], { 20: [1, 32] }), { 21: [1, 33] }, { 6: O, 7: h, 10: 34, 11: $ }, { 1: [2, 7], 6: p, 12: 21, 13: n, 14: 14, 16: g, 17: f, 18: 17, 19: 18, 20: E, 23: c }, t(b, [2, 14], { 7: A, 11: w }), t(C, [2, 8]), t(C, [2, 9]), t(C, [2, 10]), t(k, [2, 16], { 15: 37, 24: T }), t(k, [2, 17]), t(k, [2, 18]), t(k, [2, 20], { 24: G }), t(I, [2, 31]), { 21: [1, 39] }, { 22: [1, 40] }, t(b, [2, 13], { 7: A, 11: w }), t(C, [2, 11]), t(C, [2, 12]), t(k, [2, 15], { 24: G }), t(I, [2, 30]), { 22: [1, 41] }, t(I, [2, 27]), t(I, [2, 29])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: _(function(d, e) {
      if (e.recoverable)
        this.trace(d);
      else {
        var i = new Error(d);
        throw i.hash = e, i;
      }
    }, "parseError"),
    parse: _(function(d) {
      var e = this, i = [0], r = [], l2 = [null], s = [], _2 = this.table, a = "", F = 0, ie = 0, he = 2, ne = 1, ue = s.slice.call(arguments, 1), m = Object.create(this.lexer), R = { yy: {} };
      for (var z in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, z) && (R.yy[z] = this.yy[z]);
      m.setInput(d, R.yy), R.yy.lexer = m, R.yy.parser = this, typeof m.yylloc > "u" && (m.yylloc = {});
      var X = m.yylloc;
      s.push(X);
      var ge = m.options && m.options.ranges;
      typeof R.yy.parseError == "function" ? this.parseError = R.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function pe(N) {
        i.length = i.length - 2 * N, l2.length = l2.length - N, s.length = s.length - N;
      }
      _(pe, "popStack");
      function re() {
        var N;
        return N = r.pop() || m.lex() || ne, typeof N != "number" && (N instanceof Array && (r = N, N = r.pop()), N = e.symbols_[N] || N), N;
      }
      _(re, "lex");
      for (var S, B, D, Y, H = {}, W, v, oe, K; ; ) {
        if (B = i[i.length - 1], this.defaultActions[B] ? D = this.defaultActions[B] : ((S === null || typeof S > "u") && (S = re()), D = _2[B] && _2[B][S]), typeof D > "u" || !D.length || !D[0]) {
          var J = "";
          K = [];
          for (W in _2[B])
            this.terminals_[W] && W > he && K.push("'" + this.terminals_[W] + "'");
          m.showPosition ? J = "Parse error on line " + (F + 1) + `:
` + m.showPosition() + `
Expecting ` + K.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : J = "Parse error on line " + (F + 1) + ": Unexpected " + (S == ne ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(J, {
            text: m.match,
            token: this.terminals_[S] || S,
            line: m.yylineno,
            loc: X,
            expected: K
          });
        }
        if (D[0] instanceof Array && D.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + B + ", token: " + S);
        switch (D[0]) {
          case 1:
            i.push(S), l2.push(m.yytext), s.push(m.yylloc), i.push(D[1]), S = null, ie = m.yyleng, a = m.yytext, F = m.yylineno, X = m.yylloc;
            break;
          case 2:
            if (v = this.productions_[D[1]][1], H.$ = l2[l2.length - v], H._$ = {
              first_line: s[s.length - (v || 1)].first_line,
              last_line: s[s.length - 1].last_line,
              first_column: s[s.length - (v || 1)].first_column,
              last_column: s[s.length - 1].last_column
            }, ge && (H._$.range = [
              s[s.length - (v || 1)].range[0],
              s[s.length - 1].range[1]
            ]), Y = this.performAction.apply(H, [
              a,
              ie,
              F,
              R.yy,
              D[1],
              l2,
              s
            ].concat(ue)), typeof Y < "u")
              return Y;
            v && (i = i.slice(0, -1 * v * 2), l2 = l2.slice(0, -1 * v), s = s.slice(0, -1 * v)), i.push(this.productions_[D[1]][0]), l2.push(H.$), s.push(H._$), oe = _2[i[i.length - 2]][i[i.length - 1]], i.push(oe);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, q = function() {
    var d = {
      EOF: 1,
      parseError: _(function(e, i) {
        if (this.yy.parser)
          this.yy.parser.parseError(e, i);
        else
          throw new Error(e);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: _(function(e, i) {
        return this.yy = i || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: _(function() {
        var e = this._input[0];
        this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
        var i = e.match(/(?:\r\n?|\n).*/g);
        return i ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: _(function(e) {
        var i = e.length, r = e.split(/(?:\r\n?|\n)/g);
        this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - i), this.offset -= i;
        var l2 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r.length - 1 && (this.yylineno -= r.length - 1);
        var s = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: r ? (r.length === l2.length ? this.yylloc.first_column : 0) + l2[l2.length - r.length].length - r[0].length : this.yylloc.first_column - i
        }, this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - i]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: _(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: _(function() {
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
      less: _(function(e) {
        this.unput(this.match.slice(e));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: _(function() {
        var e = this.matched.substr(0, this.matched.length - this.match.length);
        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: _(function() {
        var e = this.match;
        return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: _(function() {
        var e = this.pastInput(), i = new Array(e.length + 1).join("-");
        return e + this.upcomingInput() + `
` + i + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: _(function(e, i) {
        var r, l2, s;
        if (this.options.backtrack_lexer && (s = {
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
        }, this.options.ranges && (s.yylloc.range = this.yylloc.range.slice(0))), l2 = e[0].match(/(?:\r\n?|\n).*/g), l2 && (this.yylineno += l2.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: l2 ? l2[l2.length - 1].length - l2[l2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
        }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e[0].length), this.matched += e[0], r = this.performAction.call(this, this.yy, this, i, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), r)
          return r;
        if (this._backtrack) {
          for (var _2 in s)
            this[_2] = s[_2];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: _(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var e, i, r, l2;
        this._more || (this.yytext = "", this.match = "");
        for (var s = this._currentRules(), _2 = 0; _2 < s.length; _2++)
          if (r = this._input.match(this.rules[s[_2]]), r && (!i || r[0].length > i[0].length)) {
            if (i = r, l2 = _2, this.options.backtrack_lexer) {
              if (e = this.test_match(r, s[_2]), e !== false)
                return e;
              if (this._backtrack) {
                i = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return i ? (e = this.test_match(i, s[l2]), e !== false ? e : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: _(function() {
        var e = this.next();
        return e || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: _(function(e) {
        this.conditionStack.push(e);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: _(function() {
        var e = this.conditionStack.length - 1;
        return e > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: _(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: _(function(e) {
        return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: _(function(e) {
        this.begin(e);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: _(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: _(function(e, i, r, l2) {
        switch (r) {
          case 0:
            return this.pushState("shapeData"), i.yytext = "", 24;
          case 1:
            return this.pushState("shapeDataStr"), 24;
          case 2:
            return this.popState(), 24;
          case 3:
            const s = /\n\s*/g;
            return i.yytext = i.yytext.replace(s, "<br/>"), 24;
          case 4:
            return 24;
          case 5:
            this.popState();
            break;
          case 6:
            return e.getLogger().trace("Found comment", i.yytext), 6;
          case 7:
            return 8;
          case 8:
            this.begin("CLASS");
            break;
          case 9:
            return this.popState(), 17;
          case 10:
            this.popState();
            break;
          case 11:
            e.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 12:
            return e.getLogger().trace("SPACELINE"), 6;
          case 13:
            return 7;
          case 14:
            return 16;
          case 15:
            e.getLogger().trace("end icon"), this.popState();
            break;
          case 16:
            return e.getLogger().trace("Exploding node"), this.begin("NODE"), 20;
          case 17:
            return e.getLogger().trace("Cloud"), this.begin("NODE"), 20;
          case 18:
            return e.getLogger().trace("Explosion Bang"), this.begin("NODE"), 20;
          case 19:
            return e.getLogger().trace("Cloud Bang"), this.begin("NODE"), 20;
          case 20:
            return this.begin("NODE"), 20;
          case 21:
            return this.begin("NODE"), 20;
          case 22:
            return this.begin("NODE"), 20;
          case 23:
            return this.begin("NODE"), 20;
          case 24:
            return 13;
          case 25:
            return 23;
          case 26:
            return 11;
          case 27:
            this.begin("NSTR2");
            break;
          case 28:
            return "NODE_DESCR";
          case 29:
            this.popState();
            break;
          case 30:
            e.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 31:
            return e.getLogger().trace("description:", i.yytext), "NODE_DESCR";
          case 32:
            this.popState();
            break;
          case 33:
            return this.popState(), e.getLogger().trace("node end ))"), "NODE_DEND";
          case 34:
            return this.popState(), e.getLogger().trace("node end )"), "NODE_DEND";
          case 35:
            return this.popState(), e.getLogger().trace("node end ...", i.yytext), "NODE_DEND";
          case 36:
            return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
          case 37:
            return this.popState(), e.getLogger().trace("node end (-"), "NODE_DEND";
          case 38:
            return this.popState(), e.getLogger().trace("node end (-"), "NODE_DEND";
          case 39:
            return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
          case 40:
            return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
          case 41:
            return e.getLogger().trace("Long description:", i.yytext), 21;
          case 42:
            return e.getLogger().trace("Long description:", i.yytext), 21;
        }
      }, "anonymous"),
      rules: [/^(?:@\{)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^\"]+)/i, /^(?:[^}^"]+)/i, /^(?:\})/i, /^(?:\s*%%.*)/i, /^(?:kanban\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}@]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { shapeDataEndBracket: { rules: [], inclusive: false }, shapeDataStr: { rules: [2, 3], inclusive: false }, shapeData: { rules: [1, 4, 5], inclusive: false }, CLASS: { rules: [9, 10], inclusive: false }, ICON: { rules: [14, 15], inclusive: false }, NSTR2: { rules: [28, 29], inclusive: false }, NSTR: { rules: [31, 32], inclusive: false }, NODE: { rules: [27, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], inclusive: false }, INITIAL: { rules: [0, 6, 7, 8, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: true } }
    };
    return d;
  }();
  U.lexer = q;
  function P() {
    this.yy = {};
  }
  return _(P, "Parser"), P.prototype = U, U.Parser = P, new P();
}();
Q.parser = Q;
var Ne = Q;
var L = [];
var te = [];
var Z = 0;
var se = {};
var De = _(() => {
  L = [], te = [], Z = 0, se = {};
}, "clear");
var Le = _((t) => {
  if (L.length === 0)
    return null;
  const u = L[0].level;
  let p = null;
  for (let n = L.length - 1; n >= 0; n--)
    if (L[n].level === u && !p && (p = L[n]), L[n].level < u)
      throw new Error('Items without section detected, found section ("' + L[n].label + '")');
  return t === (p == null ? void 0 : p.level) ? null : p;
}, "getSection");
var le = _(function() {
  return te;
}, "getSections");
var xe = _(function() {
  const t = [], u = [], p = le(), n = fe();
  for (const g of p) {
    const f = {
      id: g.id,
      label: Zs(g.label ?? "", n),
      isGroup: true,
      ticket: g.ticket,
      shape: "kanbanSection",
      level: g.level,
      look: n.look
    };
    u.push(f);
    const E = L.filter((c) => c.parentId === g.id);
    for (const c of E) {
      const x = {
        id: c.id,
        parentId: g.id,
        label: Zs(c.label ?? "", n),
        isGroup: false,
        ticket: c == null ? void 0 : c.ticket,
        priority: c == null ? void 0 : c.priority,
        assigned: c == null ? void 0 : c.assigned,
        icon: c == null ? void 0 : c.icon,
        shape: "kanbanItem",
        level: c.level,
        rx: 5,
        ry: 5,
        cssStyles: ["text-align: left"]
      };
      u.push(x);
    }
  }
  return { nodes: u, edges: t, other: {}, config: fe() };
}, "getData");
var Ie = _((t, u, p, n, g) => {
  var _a, _b;
  const f = fe();
  let E = ((_a = f.mindmap) == null ? void 0 : _a.padding) ?? N6.mindmap.padding;
  switch (n) {
    case y.ROUNDED_RECT:
    case y.RECT:
    case y.HEXAGON:
      E *= 2;
  }
  const c = {
    id: Zs(u, f) || "kbn" + Z++,
    level: t,
    label: Zs(p, f),
    width: ((_b = f.mindmap) == null ? void 0 : _b.maxNodeWidth) ?? N6.mindmap.maxNodeWidth,
    padding: E,
    isGroup: false
  };
  if (g !== void 0) {
    let O;
    g.includes(`
`) ? O = g + `
` : O = `{
` + g + `
}`;
    const h = ej(O, { schema: tj });
    if (h.shape && (h.shape !== h.shape.toLowerCase() || h.shape.includes("_")))
      throw new Error(`No such shape: ${h.shape}. Shape names should be lowercase.`);
    (h == null ? void 0 : h.shape) && h.shape === "kanbanItem" && (c.shape = h == null ? void 0 : h.shape), (h == null ? void 0 : h.label) && (c.label = h == null ? void 0 : h.label), (h == null ? void 0 : h.icon) && (c.icon = h == null ? void 0 : h.icon.toString()), (h == null ? void 0 : h.assigned) && (c.assigned = h == null ? void 0 : h.assigned.toString()), (h == null ? void 0 : h.ticket) && (c.ticket = h == null ? void 0 : h.ticket.toString()), (h == null ? void 0 : h.priority) && (c.priority = h == null ? void 0 : h.priority);
  }
  const x = Le(t);
  x ? c.parentId = x.id || "kbn" + Z++ : te.push(c), L.push(c);
}, "addNode");
var y = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
};
var Oe = _((t, u) => {
  switch (ut.debug("In get type", t, u), t) {
    case "[":
      return y.RECT;
    case "(":
      return u === ")" ? y.ROUNDED_RECT : y.CLOUD;
    case "((":
      return y.CIRCLE;
    case ")":
      return y.CLOUD;
    case "))":
      return y.BANG;
    case "{{":
      return y.HEXAGON;
    default:
      return y.DEFAULT;
  }
}, "getType");
var ve = _((t, u) => {
  se[t] = u;
}, "setElementForId");
var Ae = _((t) => {
  if (!t)
    return;
  const u = fe(), p = L[L.length - 1];
  t.icon && (p.icon = Zs(t.icon, u)), t.class && (p.cssClasses = Zs(t.class, u));
}, "decorateNode");
var we = _((t) => {
  switch (t) {
    case y.DEFAULT:
      return "no-border";
    case y.RECT:
      return "rect";
    case y.ROUNDED_RECT:
      return "rounded-rect";
    case y.CIRCLE:
      return "circle";
    case y.CLOUD:
      return "cloud";
    case y.BANG:
      return "bang";
    case y.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
}, "type2Str");
var Ce = _(() => ut, "getLogger");
var $e = _((t) => se[t], "getElementById");
var Te = {
  clear: De,
  addNode: Ie,
  getSections: le,
  getData: xe,
  nodeType: y,
  getType: Oe,
  setElementForId: ve,
  decorateNode: Ae,
  type2Str: we,
  getLogger: Ce,
  getElementById: $e
};
var Re = Te;
var Be = _(async (t, u, p, n) => {
  var _a, _b, _c, _d, _e;
  ut.debug(`Rendering kanban diagram
` + t);
  const g = n.db.getData(), f = fe();
  f.htmlLabels = false;
  const E = tZ(u), c = E.append("g");
  c.attr("class", "sections");
  const x = E.append("g");
  x.attr("class", "items");
  const O = g.nodes.filter(
    // TODO: TypeScript 5.5 will infer this predicate automatically
    (b) => b.isGroup
  );
  let h = 0;
  const $ = 10, k = [];
  let T = 25;
  for (const b of O) {
    const A = ((_a = f == null ? void 0 : f.kanban) == null ? void 0 : _a.sectionWidth) || 200;
    h = h + 1, b.x = A * h + (h - 1) * $ / 2, b.width = A, b.y = 0, b.height = A * 3, b.rx = 5, b.ry = 5, b.cssClasses = b.cssClasses + " section-" + h;
    const w = await aK(c, b);
    T = Math.max(T, (_b = w == null ? void 0 : w.labelBBox) == null ? void 0 : _b.height), k.push(w);
  }
  let I = 0;
  for (const b of O) {
    const A = k[I];
    I = I + 1;
    const w = ((_c = f == null ? void 0 : f.kanban) == null ? void 0 : _c.sectionWidth) || 200, C = -w * 3 / 2 + T;
    let G = C;
    const U = g.nodes.filter((d) => d.parentId === b.id);
    for (const d of U) {
      if (d.isGroup)
        throw new Error("Groups within groups are not allowed in Kanban diagrams");
      d.x = b.x, d.width = w - 1.5 * $;
      const e = (await j8(x, d, { config: f })).node().getBBox();
      d.y = G + e.height / 2, await Art(d), G = d.y + e.height / 2 + $ / 2;
    }
    const q = A.cluster.select("rect"), P = Math.max(G - C + 3 * $, 50) + (T - 25);
    q.attr("height", P);
  }
  FR(
    void 0,
    E,
    ((_d = f.mindmap) == null ? void 0 : _d.padding) ?? N6.kanban.padding,
    ((_e = f.mindmap) == null ? void 0 : _e.useMaxWidth) ?? N6.kanban.useMaxWidth
  );
}, "draw");
var Ge = {
  draw: Be
};
var Pe = _((t) => {
  let u = "";
  for (let n = 0; n < t.THEME_COLOR_LIMIT; n++)
    t["lineColor" + n] = t["lineColor" + n] || t["cScaleInv" + n], lc(t["lineColor" + n]) ? t["lineColor" + n] = Tt(t["lineColor" + n], 20) : t["lineColor" + n] = Ot(t["lineColor" + n], 20);
  const p = _((n, g) => t.darkMode ? Ot(n, g) : Tt(n, g), "adjuster");
  for (let n = 0; n < t.THEME_COLOR_LIMIT; n++) {
    const g = "" + (17 - 3 * n);
    u += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} polygon, .section-${n - 1} path  {
      fill: ${p(t["cScale" + n], 10)};
      stroke: ${p(t["cScale" + n], 10)};

    }
    .section-${n - 1} text {
     fill: ${t["cScaleLabel" + n]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + n]};
    }
    .section-edge-${n - 1}{
      stroke: ${t["cScale" + n]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${g};
    }
    .section-${n - 1} line {
      stroke: ${t["cScaleInv" + n]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.background};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${t.background};
    stroke: ${t.nodeBorder};
    text-decoration: underline;
  }
    `;
  }
  return u;
}, "genSections");
var He = _((t) => `
  .edge {
    stroke-width: 3;
  }
  ${Pe(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${t.textColor};
    fill: ${t.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${l()}
`, "getStyles");
var Me = He;
var Fe = {
  db: Re,
  renderer: Ge,
  parser: Ne,
  styles: Me
};
export {
  Fe as diagram
};
//# sourceMappingURL=kanban-definition-ZSS6B67P-B4ltCpQu-N7RlWHCM-K7MZM3IG.js.map
