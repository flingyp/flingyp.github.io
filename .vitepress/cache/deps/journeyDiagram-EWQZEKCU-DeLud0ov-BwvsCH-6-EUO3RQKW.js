import {
  dn
} from "./chunk-MMBSNIXP.js";
import {
  d,
  g,
  h,
  o
} from "./chunk-TNKWYOBZ.js";
import {
  l
} from "./chunk-F4TZSDY7.js";
import {
  HR,
  PR,
  RR,
  U6,
  WR,
  _,
  ae,
  fe,
  jR,
  qR,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/journeyDiagram-EWQZEKCU-DeLud0ov-BwvsCH-6.js
var U = function() {
  var t = _(function(d2, i, a, u) {
    for (a = a || {}, u = d2.length; u--; a[d2[u]] = i) ;
    return a;
  }, "o"), e = [6, 8, 10, 11, 12, 14, 16, 17, 18], r = [1, 9], l2 = [1, 10], n = [1, 11], y = [1, 12], c = [1, 13], h2 = [1, 14], f = {
    trace: _(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, journey: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, taskName: 18, taskData: 19, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "journey", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 18: "taskName", 19: "taskData" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
    performAction: _(function(d2, i, a, u, p, o2, x) {
      var k = o2.length - 1;
      switch (p) {
        case 1:
          return o2[k - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          o2[k - 1].push(o2[k]), this.$ = o2[k - 1];
          break;
        case 4:
        case 5:
          this.$ = o2[k];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          u.setDiagramTitle(o2[k].substr(6)), this.$ = o2[k].substr(6);
          break;
        case 9:
          this.$ = o2[k].trim(), u.setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = o2[k].trim(), u.setAccDescription(this.$);
          break;
        case 12:
          u.addSection(o2[k].substr(8)), this.$ = o2[k].substr(8);
          break;
        case 13:
          u.addTask(o2[k - 1], o2[k]), this.$ = "task";
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: r, 12: l2, 14: n, 16: y, 17: c, 18: h2 }, t(e, [2, 7], { 1: [2, 1] }), t(e, [2, 3]), { 9: 15, 11: r, 12: l2, 14: n, 16: y, 17: c, 18: h2 }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 8]), { 13: [1, 16] }, { 15: [1, 17] }, t(e, [2, 11]), t(e, [2, 12]), { 19: [1, 18] }, t(e, [2, 4]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 13])],
    defaultActions: {},
    parseError: _(function(d2, i) {
      if (i.recoverable)
        this.trace(d2);
      else {
        var a = new Error(d2);
        throw a.hash = i, a;
      }
    }, "parseError"),
    parse: _(function(d2) {
      var i = this, a = [0], u = [], p = [null], o2 = [], x = this.table, k = "", E = 0, A = 0, ut = 2, Z = 1, pt = o2.slice.call(arguments, 1), _2 = Object.create(this.lexer), I = { yy: {} };
      for (var Y in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Y) && (I.yy[Y] = this.yy[Y]);
      _2.setInput(d2, I.yy), I.yy.lexer = _2, I.yy.parser = this, typeof _2.yylloc > "u" && (_2.yylloc = {});
      var z = _2.yylloc;
      o2.push(z);
      var yt = _2.options && _2.options.ranges;
      typeof I.yy.parseError == "function" ? this.parseError = I.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function dt(w) {
        a.length = a.length - 2 * w, p.length = p.length - w, o2.length = o2.length - w;
      }
      _(dt, "popStack");
      function J() {
        var w;
        return w = u.pop() || _2.lex() || Z, typeof w != "number" && (w instanceof Array && (u = w, w = u.pop()), w = i.symbols_[w] || w), w;
      }
      _(J, "lex");
      for (var b, P, $, W, j = {}, D, C, K, O; ; ) {
        if (P = a[a.length - 1], this.defaultActions[P] ? $ = this.defaultActions[P] : ((b === null || typeof b > "u") && (b = J()), $ = x[P] && x[P][b]), typeof $ > "u" || !$.length || !$[0]) {
          var G = "";
          O = [];
          for (D in x[P])
            this.terminals_[D] && D > ut && O.push("'" + this.terminals_[D] + "'");
          _2.showPosition ? G = "Parse error on line " + (E + 1) + `:
` + _2.showPosition() + `
Expecting ` + O.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : G = "Parse error on line " + (E + 1) + ": Unexpected " + (b == Z ? "end of input" : "'" + (this.terminals_[b] || b) + "'"), this.parseError(G, {
            text: _2.match,
            token: this.terminals_[b] || b,
            line: _2.yylineno,
            loc: z,
            expected: O
          });
        }
        if ($[0] instanceof Array && $.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + P + ", token: " + b);
        switch ($[0]) {
          case 1:
            a.push(b), p.push(_2.yytext), o2.push(_2.yylloc), a.push($[1]), b = null, A = _2.yyleng, k = _2.yytext, E = _2.yylineno, z = _2.yylloc;
            break;
          case 2:
            if (C = this.productions_[$[1]][1], j.$ = p[p.length - C], j._$ = {
              first_line: o2[o2.length - (C || 1)].first_line,
              last_line: o2[o2.length - 1].last_line,
              first_column: o2[o2.length - (C || 1)].first_column,
              last_column: o2[o2.length - 1].last_column
            }, yt && (j._$.range = [
              o2[o2.length - (C || 1)].range[0],
              o2[o2.length - 1].range[1]
            ]), W = this.performAction.apply(j, [
              k,
              A,
              E,
              I.yy,
              $[1],
              p,
              o2
            ].concat(pt)), typeof W < "u")
              return W;
            C && (a = a.slice(0, -1 * C * 2), p = p.slice(0, -1 * C), o2 = o2.slice(0, -1 * C)), a.push(this.productions_[$[1]][0]), p.push(j.$), o2.push(j._$), K = x[a[a.length - 2]][a[a.length - 1]], a.push(K);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, m = function() {
    var d2 = {
      EOF: 1,
      parseError: _(function(i, a) {
        if (this.yy.parser)
          this.yy.parser.parseError(i, a);
        else
          throw new Error(i);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: _(function(i, a) {
        return this.yy = a || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: _(function() {
        var i = this._input[0];
        this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
        var a = i.match(/(?:\r\n?|\n).*/g);
        return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: _(function(i) {
        var a = i.length, u = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
        var p = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u.length - 1 && (this.yylineno -= u.length - 1);
        var o2 = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: u ? (u.length === p.length ? this.yylloc.first_column : 0) + p[p.length - u.length].length - u[0].length : this.yylloc.first_column - a
        }, this.options.ranges && (this.yylloc.range = [o2[0], o2[0] + this.yyleng - a]), this.yyleng = this.yytext.length, this;
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
      less: _(function(i) {
        this.unput(this.match.slice(i));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: _(function() {
        var i = this.matched.substr(0, this.matched.length - this.match.length);
        return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: _(function() {
        var i = this.match;
        return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: _(function() {
        var i = this.pastInput(), a = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + a + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: _(function(i, a) {
        var u, p, o2;
        if (this.options.backtrack_lexer && (o2 = {
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
        }, this.options.ranges && (o2.yylloc.range = this.yylloc.range.slice(0))), p = i[0].match(/(?:\r\n?|\n).*/g), p && (this.yylineno += p.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i[0].length), this.matched += i[0], u = this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), u)
          return u;
        if (this._backtrack) {
          for (var x in o2)
            this[x] = o2[x];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: _(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i, a, u, p;
        this._more || (this.yytext = "", this.match = "");
        for (var o2 = this._currentRules(), x = 0; x < o2.length; x++)
          if (u = this._input.match(this.rules[o2[x]]), u && (!a || u[0].length > a[0].length)) {
            if (a = u, p = x, this.options.backtrack_lexer) {
              if (i = this.test_match(u, o2[x]), i !== false)
                return i;
              if (this._backtrack) {
                a = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a ? (i = this.test_match(a, o2[p]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: _(function() {
        var i = this.next();
        return i || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: _(function(i) {
        this.conditionStack.push(i);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: _(function() {
        var i = this.conditionStack.length - 1;
        return i > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: _(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: _(function(i) {
        return i = this.conditionStack.length - 1 - Math.abs(i || 0), i >= 0 ? this.conditionStack[i] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: _(function(i) {
        this.begin(i);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: _(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: _(function(i, a, u, p) {
        switch (u) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 10;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            return this.begin("acc_title"), 12;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.begin("acc_descr"), 14;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 18;
          case 16:
            return 19;
          case 17:
            return ":";
          case 18:
            return 6;
          case 19:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19], inclusive: true } }
    };
    return d2;
  }();
  f.lexer = m;
  function g2() {
    this.yy = {};
  }
  return _(g2, "Parser"), g2.prototype = f, f.Parser = g2, new g2();
}();
U.parser = U;
var Mt = U;
var B = "";
var X = [];
var L = [];
var R = [];
var Tt = _(function() {
  X.length = 0, L.length = 0, B = "", R.length = 0, zR();
}, "clear");
var Et = _(function(t) {
  B = t, X.push(t);
}, "addSection");
var It = _(function() {
  return X;
}, "getSections");
var Pt = _(function() {
  let t = et();
  const e = 100;
  let r = 0;
  for (; !t && r < e; )
    t = et(), r++;
  return L.push(...R), L;
}, "getTasks");
var At = _(function() {
  const t = [];
  return L.forEach((e) => {
    e.people && t.push(...e.people);
  }), [...new Set(t)].sort();
}, "updateActors");
var jt = _(function(t, e) {
  const r = e.substr(1).split(":");
  let l2 = 0, n = [];
  r.length === 1 ? (l2 = Number(r[0]), n = []) : (l2 = Number(r[0]), n = r[1].split(","));
  const y = n.map((h2) => h2.trim()), c = {
    section: B,
    type: B,
    people: y,
    task: t,
    score: l2
  };
  R.push(c);
}, "addTask");
var Bt = _(function(t) {
  const e = {
    section: B,
    type: B,
    description: t,
    task: t,
    classes: []
  };
  L.push(e);
}, "addTaskOrg");
var et = _(function() {
  const t = _(function(r) {
    return R[r].processed;
  }, "compileTask");
  let e = true;
  for (const [r, l2] of R.entries())
    t(r), e = e && l2.processed;
  return e;
}, "compileTasks");
var Vt = _(function() {
  return At();
}, "getActors");
var it = {
  getConfig: _(() => fe().journey, "getConfig"),
  clear: Tt,
  setDiagramTitle: WR,
  getDiagramTitle: HR,
  setAccTitle: qR,
  getAccTitle: RR,
  setAccDescription: PR,
  getAccDescription: jR,
  addSection: Et,
  getSections: It,
  getTasks: Pt,
  addTask: jt,
  addTaskOrg: Bt,
  getActors: Vt
};
var Lt = _((t) => `.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
  ${l()}
`, "getStyles");
var Rt = Lt;
var Q = _(function(t, e) {
  return o(t, e);
}, "drawRect");
var Ft = _(function(t, e) {
  const r = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), l2 = t.append("g");
  l2.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), l2.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function n(h2) {
    const f = dn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    h2.append("path").attr("class", "mouth").attr("d", f).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
  }
  _(n, "smile");
  function y(h2) {
    const f = dn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    h2.append("path").attr("class", "mouth").attr("d", f).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
  }
  _(y, "sad");
  function c(h2) {
    h2.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return _(c, "ambivalent"), e.score > 3 ? n(l2) : e.score < 3 ? y(l2) : c(l2), r;
}, "drawFace");
var ot = _(function(t, e) {
  const r = t.append("circle");
  return r.attr("cx", e.cx), r.attr("cy", e.cy), r.attr("class", "actor-" + e.pos), r.attr("fill", e.fill), r.attr("stroke", e.stroke), r.attr("r", e.r), r.class !== void 0 && r.attr("class", r.class), e.title !== void 0 && r.append("title").text(e.title), r;
}, "drawCircle");
var lt = _(function(t, e) {
  return h(t, e);
}, "drawText");
var Dt = _(function(t, e) {
  function r(n, y, c, h2, f) {
    return n + "," + y + " " + (n + c) + "," + y + " " + (n + c) + "," + (y + h2 - f) + " " + (n + c - f * 1.2) + "," + (y + h2) + " " + n + "," + (y + h2);
  }
  _(r, "genPoints");
  const l2 = t.append("polygon");
  l2.attr("points", r(e.x, e.y, 50, 20, 7)), l2.attr("class", "labelBox"), e.y = e.y + e.labelMargin, e.x = e.x + 0.5 * e.labelMargin, lt(t, e);
}, "drawLabel");
var Ot = _(function(t, e, r) {
  const l2 = t.append("g"), n = g();
  n.x = e.x, n.y = e.y, n.fill = e.fill, n.width = r.width * e.taskCount + // width of the tasks
  r.diagramMarginX * (e.taskCount - 1), n.height = r.height, n.class = "journey-section section-type-" + e.num, n.rx = 3, n.ry = 3, Q(l2, n), ct(r)(
    e.text,
    l2,
    n.x,
    n.y,
    n.width,
    n.height,
    { class: "journey-section section-type-" + e.num },
    r,
    e.colour
  );
}, "drawSection");
var nt = -1;
var Nt = _(function(t, e, r) {
  const l2 = e.x + r.width / 2, n = t.append("g");
  nt++;
  const y = 300 + 5 * 30;
  n.append("line").attr("id", "task" + nt).attr("x1", l2).attr("y1", e.y).attr("x2", l2).attr("y2", y).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Ft(n, {
    cx: l2,
    cy: 300 + (5 - e.score) * 30,
    score: e.score
  });
  const c = g();
  c.x = e.x, c.y = e.y, c.fill = e.fill, c.width = r.width, c.height = r.height, c.class = "task task-type-" + e.num, c.rx = 3, c.ry = 3, Q(n, c);
  let h2 = e.x + 14;
  e.people.forEach((f) => {
    const m = e.actors[f].color, g2 = {
      cx: h2,
      cy: e.y,
      r: 7,
      fill: m,
      stroke: "#000",
      title: f,
      pos: e.actors[f].position
    };
    ot(n, g2), h2 += 10;
  }), ct(r)(
    e.task,
    n,
    c.x,
    c.y,
    c.width,
    c.height,
    { class: "task" },
    r,
    e.colour
  );
}, "drawTask");
var Yt = _(function(t, e) {
  d(t, e);
}, "drawBackgroundRect");
var ct = function() {
  function t(n, y, c, h2, f, m, g2, d2) {
    const i = y.append("text").attr("x", c + f / 2).attr("y", h2 + m / 2 + 5).style("font-color", d2).style("text-anchor", "middle").text(n);
    l2(i, g2);
  }
  _(t, "byText");
  function e(n, y, c, h2, f, m, g2, d2, i) {
    const { taskFontSize: a, taskFontFamily: u } = d2, p = n.split(/<br\s*\/?>/gi);
    for (let o2 = 0; o2 < p.length; o2++) {
      const x = o2 * a - a * (p.length - 1) / 2, k = y.append("text").attr("x", c + f / 2).attr("y", h2).attr("fill", i).style("text-anchor", "middle").style("font-size", a).style("font-family", u);
      k.append("tspan").attr("x", c + f / 2).attr("dy", x).text(p[o2]), k.attr("y", h2 + m / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), l2(k, g2);
    }
  }
  _(e, "byTspan");
  function r(n, y, c, h2, f, m, g2, d2) {
    const i = y.append("switch"), a = i.append("foreignObject").attr("x", c).attr("y", h2).attr("width", f).attr("height", m).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    a.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(n), e(n, i, c, h2, f, m, g2, d2), l2(a, g2);
  }
  _(r, "byFo");
  function l2(n, y) {
    for (const c in y)
      c in y && n.attr(c, y[c]);
  }
  return _(l2, "_setTextAttrs"), function(n) {
    return n.textPlacement === "fo" ? r : n.textPlacement === "old" ? t : e;
  };
}();
var zt = _(function(t) {
  t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
var F = {
  drawRect: Q,
  drawCircle: ot,
  drawSection: Ot,
  drawText: lt,
  drawLabel: Dt,
  drawTask: Nt,
  drawBackgroundRect: Yt,
  initGraphics: zt
};
var Wt = _(function(t) {
  Object.keys(t).forEach(function(e) {
    S[e] = t[e];
  });
}, "setConf");
var M = {};
var N = 0;
function ht(t) {
  const e = fe().journey, r = e.maxLabelWidth;
  N = 0;
  let l2 = 60;
  Object.keys(M).forEach((n) => {
    const y = M[n].color, c = {
      cx: 20,
      cy: l2,
      r: 7,
      fill: y,
      stroke: "#000",
      pos: M[n].position
    };
    F.drawCircle(t, c);
    let h2 = t.append("text").attr("visibility", "hidden").text(n);
    const f = h2.node().getBoundingClientRect().width;
    h2.remove();
    let m = [];
    if (f <= r)
      m = [n];
    else {
      const g2 = n.split(" ");
      let d2 = "";
      h2 = t.append("text").attr("visibility", "hidden"), g2.forEach((i) => {
        const a = d2 ? `${d2} ${i}` : i;
        if (h2.text(a), h2.node().getBoundingClientRect().width > r) {
          if (d2 && m.push(d2), d2 = i, h2.text(i), h2.node().getBoundingClientRect().width > r) {
            let u = "";
            for (const p of i)
              u += p, h2.text(u + "-"), h2.node().getBoundingClientRect().width > r && (m.push(u.slice(0, -1) + "-"), u = p);
            d2 = u;
          }
        } else
          d2 = a;
      }), d2 && m.push(d2), h2.remove();
    }
    m.forEach((g2, d2) => {
      const i = {
        x: 40,
        y: l2 + 7 + d2 * 20,
        fill: "#666",
        text: g2,
        textMargin: e.boxTextMargin ?? 5
      }, a = F.drawText(t, i).node().getBoundingClientRect().width;
      a > N && a > e.leftMargin - a && (N = a);
    }), l2 += Math.max(20, m.length * 20);
  });
}
_(ht, "drawActorLegend");
var S = fe().journey;
var T = 0;
var Gt = _(function(t, e, r, l2) {
  const n = fe(), y = n.journey.titleColor, c = n.journey.titleFontSize, h2 = n.journey.titleFontFamily, f = n.securityLevel;
  let m;
  f === "sandbox" && (m = ae("#i" + e));
  const g2 = f === "sandbox" ? ae(m.nodes()[0].contentDocument.body) : ae("body");
  v.init();
  const d2 = g2.select("#" + e);
  F.initGraphics(d2);
  const i = l2.db.getTasks(), a = l2.db.getDiagramTitle(), u = l2.db.getActors();
  for (const A in M)
    delete M[A];
  let p = 0;
  u.forEach((A) => {
    M[A] = {
      color: S.actorColours[p % S.actorColours.length],
      position: p
    }, p++;
  }), ht(d2), T = S.leftMargin + N, v.insert(0, 0, T, Object.keys(M).length * 50), qt(d2, i, 0);
  const o2 = v.getBounds();
  a && d2.append("text").text(a).attr("x", T).attr("font-size", c).attr("font-weight", "bold").attr("y", 25).attr("fill", y).attr("font-family", h2);
  const x = o2.stopy - o2.starty + 2 * S.diagramMarginY, k = T + o2.stopx + 2 * S.diagramMarginX;
  U6(d2, x, k, S.useMaxWidth), d2.append("line").attr("x1", T).attr("y1", S.height * 4).attr("x2", k - T - 4).attr("y2", S.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  const E = a ? 70 : 0;
  d2.attr("viewBox", `${o2.startx} -25 ${k} ${x + E}`), d2.attr("preserveAspectRatio", "xMinYMin meet"), d2.attr("height", x + E + 25);
}, "draw");
var v = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  init: _(function() {
    this.sequenceItems = [], this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0;
  }, "init"),
  updateVal: _(function(t, e, r, l2) {
    t[e] === void 0 ? t[e] = r : t[e] = l2(r, t[e]);
  }, "updateVal"),
  updateBounds: _(function(t, e, r, l2) {
    const n = fe().journey, y = this;
    let c = 0;
    function h2(f) {
      return _(function(m) {
        c++;
        const g2 = y.sequenceItems.length - c + 1;
        y.updateVal(m, "starty", e - g2 * n.boxMargin, Math.min), y.updateVal(m, "stopy", l2 + g2 * n.boxMargin, Math.max), y.updateVal(v.data, "startx", t - g2 * n.boxMargin, Math.min), y.updateVal(v.data, "stopx", r + g2 * n.boxMargin, Math.max), f !== "activation" && (y.updateVal(m, "startx", t - g2 * n.boxMargin, Math.min), y.updateVal(m, "stopx", r + g2 * n.boxMargin, Math.max), y.updateVal(v.data, "starty", e - g2 * n.boxMargin, Math.min), y.updateVal(v.data, "stopy", l2 + g2 * n.boxMargin, Math.max));
      }, "updateItemBounds");
    }
    _(h2, "updateFn"), this.sequenceItems.forEach(h2());
  }, "updateBounds"),
  insert: _(function(t, e, r, l2) {
    const n = Math.min(t, r), y = Math.max(t, r), c = Math.min(e, l2), h2 = Math.max(e, l2);
    this.updateVal(v.data, "startx", n, Math.min), this.updateVal(v.data, "starty", c, Math.min), this.updateVal(v.data, "stopx", y, Math.max), this.updateVal(v.data, "stopy", h2, Math.max), this.updateBounds(n, c, y, h2);
  }, "insert"),
  bumpVerticalPos: _(function(t) {
    this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
  }, "bumpVerticalPos"),
  getVerticalPos: _(function() {
    return this.verticalPos;
  }, "getVerticalPos"),
  getBounds: _(function() {
    return this.data;
  }, "getBounds")
};
var H = S.sectionFills;
var st = S.sectionColours;
var qt = _(function(t, e, r) {
  const l2 = fe().journey;
  let n = "";
  const y = l2.height * 2 + l2.diagramMarginY, c = r + y;
  let h2 = 0, f = "#CCC", m = "black", g2 = 0;
  for (const [d2, i] of e.entries()) {
    if (n !== i.section) {
      f = H[h2 % H.length], g2 = h2 % H.length, m = st[h2 % st.length];
      let u = 0;
      const p = i.section;
      for (let x = d2; x < e.length && e[x].section == p; x++)
        u = u + 1;
      const o2 = {
        x: d2 * l2.taskMargin + d2 * l2.width + T,
        y: 50,
        text: i.section,
        fill: f,
        num: g2,
        colour: m,
        taskCount: u
      };
      F.drawSection(t, o2, l2), n = i.section, h2++;
    }
    const a = i.people.reduce((u, p) => (M[p] && (u[p] = M[p]), u), {});
    i.x = d2 * l2.taskMargin + d2 * l2.width + T, i.y = c, i.width = l2.diagramMarginX, i.height = l2.diagramMarginY, i.colour = m, i.fill = f, i.num = g2, i.actors = a, F.drawTask(t, i, l2), v.insert(i.x, i.y, i.x + i.width + l2.taskMargin, 300 + 5 * 30);
  }
}, "drawTasks");
var at = {
  setConf: Wt,
  draw: Gt
};
var Zt = {
  parser: Mt,
  db: it,
  renderer: at,
  styles: Rt,
  init: _((t) => {
    at.setConf(t.journey), it.clear();
  }, "init")
};
export {
  Zt as diagram
};
//# sourceMappingURL=journeyDiagram-EWQZEKCU-DeLud0ov-BwvsCH-6-EUO3RQKW.js.map
