import {
  dn
} from "./chunk-MMBSNIXP.js";
import {
  FR,
  Ot,
  Tt,
  V6,
  _,
  ae,
  eR,
  fe,
  lc,
  ut,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/timeline-definition-MYPXXCX6-DT8Gva88-7JZvkkhh.js
var U = function() {
  var n = _(function(g, i, c, d) {
    for (c = c || {}, d = g.length; d--; c[g[d]] = i) ;
    return c;
  }, "o"), t = [6, 8, 10, 11, 12, 14, 16, 17, 20, 21], e = [1, 9], a = [1, 10], s = [1, 11], l = [1, 12], h = [1, 13], y = [1, 16], p = [1, 17], f = {
    trace: _(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, timeline: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, period_statement: 18, event_statement: 19, period: 20, event: 21, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "timeline", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 20: "period", 21: "event" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 1], [18, 1], [19, 1]],
    performAction: _(function(g, i, c, d, u, o, m) {
      var k = o.length - 1;
      switch (u) {
        case 1:
          return o[k - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          o[k - 1].push(o[k]), this.$ = o[k - 1];
          break;
        case 4:
        case 5:
          this.$ = o[k];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          d.getCommonDb().setDiagramTitle(o[k].substr(6)), this.$ = o[k].substr(6);
          break;
        case 9:
          this.$ = o[k].trim(), d.getCommonDb().setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = o[k].trim(), d.getCommonDb().setAccDescription(this.$);
          break;
        case 12:
          d.addSection(o[k].substr(8)), this.$ = o[k].substr(8);
          break;
        case 15:
          d.addTask(o[k], 0, ""), this.$ = o[k];
          break;
        case 16:
          d.addEvent(o[k].substr(2)), this.$ = o[k];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, n(t, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: e, 12: a, 14: s, 16: l, 17: h, 18: 14, 19: 15, 20: y, 21: p }, n(t, [2, 7], { 1: [2, 1] }), n(t, [2, 3]), { 9: 18, 11: e, 12: a, 14: s, 16: l, 17: h, 18: 14, 19: 15, 20: y, 21: p }, n(t, [2, 5]), n(t, [2, 6]), n(t, [2, 8]), { 13: [1, 19] }, { 15: [1, 20] }, n(t, [2, 11]), n(t, [2, 12]), n(t, [2, 13]), n(t, [2, 14]), n(t, [2, 15]), n(t, [2, 16]), n(t, [2, 4]), n(t, [2, 9]), n(t, [2, 10])],
    defaultActions: {},
    parseError: _(function(g, i) {
      if (i.recoverable)
        this.trace(g);
      else {
        var c = new Error(g);
        throw c.hash = i, c;
      }
    }, "parseError"),
    parse: _(function(g) {
      var i = this, c = [0], d = [], u = [null], o = [], m = this.table, k = "", N = 0, I = 0, D = 2, P = 1, w = o.slice.call(arguments, 1), x = Object.create(this.lexer), S = { yy: {} };
      for (var C in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, C) && (S.yy[C] = this.yy[C]);
      x.setInput(g, S.yy), S.yy.lexer = x, S.yy.parser = this, typeof x.yylloc > "u" && (x.yylloc = {});
      var L = x.yylloc;
      o.push(L);
      var G = x.options && x.options.ranges;
      typeof S.yy.parseError == "function" ? this.parseError = S.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ft(E) {
        c.length = c.length - 2 * E, u.length = u.length - E, o.length = o.length - E;
      }
      _(ft, "popStack");
      function J() {
        var E;
        return E = d.pop() || x.lex() || P, typeof E != "number" && (E instanceof Array && (d = E, E = d.pop()), E = i.symbols_[E] || E), E;
      }
      _(J, "lex");
      for (var v, A, T, q, O = {}, F, H, K, W; ; ) {
        if (A = c[c.length - 1], this.defaultActions[A] ? T = this.defaultActions[A] : ((v === null || typeof v > "u") && (v = J()), T = m[A] && m[A][v]), typeof T > "u" || !T.length || !T[0]) {
          var Z = "";
          W = [];
          for (F in m[A])
            this.terminals_[F] && F > D && W.push("'" + this.terminals_[F] + "'");
          x.showPosition ? Z = "Parse error on line " + (N + 1) + `:
` + x.showPosition() + `
Expecting ` + W.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : Z = "Parse error on line " + (N + 1) + ": Unexpected " + (v == P ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), this.parseError(Z, {
            text: x.match,
            token: this.terminals_[v] || v,
            line: x.yylineno,
            loc: L,
            expected: W
          });
        }
        if (T[0] instanceof Array && T.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + A + ", token: " + v);
        switch (T[0]) {
          case 1:
            c.push(v), u.push(x.yytext), o.push(x.yylloc), c.push(T[1]), v = null, I = x.yyleng, k = x.yytext, N = x.yylineno, L = x.yylloc;
            break;
          case 2:
            if (H = this.productions_[T[1]][1], O.$ = u[u.length - H], O._$ = {
              first_line: o[o.length - (H || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (H || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, G && (O._$.range = [
              o[o.length - (H || 1)].range[0],
              o[o.length - 1].range[1]
            ]), q = this.performAction.apply(O, [
              k,
              I,
              N,
              S.yy,
              T[1],
              u,
              o
            ].concat(w)), typeof q < "u")
              return q;
            H && (c = c.slice(0, -1 * H * 2), u = u.slice(0, -1 * H), o = o.slice(0, -1 * H)), c.push(this.productions_[T[1]][0]), u.push(O.$), o.push(O._$), K = m[c[c.length - 2]][c[c.length - 1]], c.push(K);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, _2 = function() {
    var g = {
      EOF: 1,
      parseError: _(function(i, c) {
        if (this.yy.parser)
          this.yy.parser.parseError(i, c);
        else
          throw new Error(i);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: _(function(i, c) {
        return this.yy = c || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
        var c = i.match(/(?:\r\n?|\n).*/g);
        return c ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: _(function(i) {
        var c = i.length, d = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c), this.offset -= c;
        var u = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), d.length - 1 && (this.yylineno -= d.length - 1);
        var o = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: d ? (d.length === u.length ? this.yylloc.first_column : 0) + u[u.length - d.length].length - d[0].length : this.yylloc.first_column - c
        }, this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - c]), this.yyleng = this.yytext.length, this;
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
        var i = this.pastInput(), c = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: _(function(i, c) {
        var d, u, o;
        if (this.options.backtrack_lexer && (o = {
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
        }, this.options.ranges && (o.yylloc.range = this.yylloc.range.slice(0))), u = i[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i[0].length), this.matched += i[0], d = this.performAction.call(this, this.yy, this, c, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), d)
          return d;
        if (this._backtrack) {
          for (var m in o)
            this[m] = o[m];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: _(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i, c, d, u;
        this._more || (this.yytext = "", this.match = "");
        for (var o = this._currentRules(), m = 0; m < o.length; m++)
          if (d = this._input.match(this.rules[o[m]]), d && (!c || d[0].length > c[0].length)) {
            if (c = d, u = m, this.options.backtrack_lexer) {
              if (i = this.test_match(d, o[m]), i !== false)
                return i;
              if (this._backtrack) {
                c = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return c ? (i = this.test_match(c, o[u]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
      performAction: _(function(i, c, d, u) {
        switch (d) {
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
            return 21;
          case 16:
            return 20;
          case 17:
            return 6;
          case 18:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:timeline\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^:\n]+)/i, /^(?::\s(?:[^:\n]|:(?!\s))+)/i, /^(?:[^#:\n]+)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18], inclusive: true } }
    };
    return g;
  }();
  f.lexer = _2;
  function b() {
    this.yy = {};
  }
  return _(b, "Parser"), b.prototype = f, f.Parser = b, new b();
}();
U.parser = U;
var St = U;
var it = {};
eR(it, {
  addEvent: () => ut2,
  addSection: () => ct,
  addTask: () => dt,
  addTaskOrg: () => pt,
  clear: () => ot,
  default: () => Et,
  getCommonDb: () => at,
  getSections: () => lt,
  getTasks: () => ht
});
var j = "";
var rt = 0;
var Y = [];
var B = [];
var z = [];
var at = _(() => V6, "getCommonDb");
var ot = _(function() {
  Y.length = 0, B.length = 0, j = "", z.length = 0, zR();
}, "clear");
var ct = _(function(n) {
  j = n, Y.push(n);
}, "addSection");
var lt = _(function() {
  return Y;
}, "getSections");
var ht = _(function() {
  let n = et();
  const t = 100;
  let e = 0;
  for (; !n && e < t; )
    n = et(), e++;
  return B.push(...z), B;
}, "getTasks");
var dt = _(function(n, t, e) {
  const a = {
    id: rt++,
    section: j,
    type: j,
    task: n,
    score: t || 0,
    //if event is defined, then add it the events array
    events: e ? [e] : []
  };
  z.push(a);
}, "addTask");
var ut2 = _(function(n) {
  z.find((t) => t.id === rt - 1).events.push(n);
}, "addEvent");
var pt = _(function(n) {
  const t = {
    section: j,
    type: j,
    description: n,
    task: n,
    classes: []
  };
  B.push(t);
}, "addTaskOrg");
var et = _(function() {
  const n = _(function(e) {
    return z[e].processed;
  }, "compileTask");
  let t = true;
  for (const [e, a] of z.entries())
    n(e), t = t && a.processed;
  return t;
}, "compileTasks");
var Et = {
  clear: ot,
  getCommonDb: at,
  addSection: ct,
  getSections: lt,
  getTasks: ht,
  addTask: dt,
  addTaskOrg: pt,
  addEvent: ut2
};
var Tt2 = 12;
var V = _(function(n, t) {
  const e = n.append("rect");
  return e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), e.attr("rx", t.rx), e.attr("ry", t.ry), t.class !== void 0 && e.attr("class", t.class), e;
}, "drawRect");
var Nt = _(function(n, t) {
  const e = n.append("circle").attr("cx", t.cx).attr("cy", t.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), a = n.append("g");
  a.append("circle").attr("cx", t.cx - 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), a.append("circle").attr("cx", t.cx + 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function s(y) {
    const p = dn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    y.append("path").attr("class", "mouth").attr("d", p).attr("transform", "translate(" + t.cx + "," + (t.cy + 2) + ")");
  }
  _(s, "smile");
  function l(y) {
    const p = dn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    y.append("path").attr("class", "mouth").attr("d", p).attr("transform", "translate(" + t.cx + "," + (t.cy + 7) + ")");
  }
  _(l, "sad");
  function h(y) {
    y.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", t.cx - 5).attr("y1", t.cy + 7).attr("x2", t.cx + 5).attr("y2", t.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return _(h, "ambivalent"), t.score > 3 ? s(a) : t.score < 3 ? l(a) : h(a), e;
}, "drawFace");
var Pt = _(function(n, t) {
  const e = n.append("circle");
  return e.attr("cx", t.cx), e.attr("cy", t.cy), e.attr("class", "actor-" + t.pos), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("r", t.r), e.class !== void 0 && e.attr("class", e.class), t.title !== void 0 && e.append("title").text(t.title), e;
}, "drawCircle");
var yt = _(function(n, t) {
  const e = t.text.replace(/<br\s*\/?>/gi, " "), a = n.append("text");
  a.attr("x", t.x), a.attr("y", t.y), a.attr("class", "legend"), a.style("text-anchor", t.anchor), t.class !== void 0 && a.attr("class", t.class);
  const s = a.append("tspan");
  return s.attr("x", t.x + t.textMargin * 2), s.text(e), a;
}, "drawText");
var Ct = _(function(n, t) {
  function e(s, l, h, y, p) {
    return s + "," + l + " " + (s + h) + "," + l + " " + (s + h) + "," + (l + y - p) + " " + (s + h - p * 1.2) + "," + (l + y) + " " + s + "," + (l + y);
  }
  _(e, "genPoints");
  const a = n.append("polygon");
  a.attr("points", e(t.x, t.y, 50, 20, 7)), a.attr("class", "labelBox"), t.y = t.y + t.labelMargin, t.x = t.x + 0.5 * t.labelMargin, yt(n, t);
}, "drawLabel");
var Ht = _(function(n, t, e) {
  const a = n.append("g"), s = X();
  s.x = t.x, s.y = t.y, s.fill = t.fill, s.width = e.width, s.height = e.height, s.class = "journey-section section-type-" + t.num, s.rx = 3, s.ry = 3, V(a, s), gt(e)(
    t.text,
    a,
    s.x,
    s.y,
    s.width,
    s.height,
    { class: "journey-section section-type-" + t.num },
    e,
    t.colour
  );
}, "drawSection");
var nt = -1;
var It = _(function(n, t, e) {
  const a = t.x + e.width / 2, s = n.append("g");
  nt++;
  const l = 300 + 5 * 30;
  s.append("line").attr("id", "task" + nt).attr("x1", a).attr("y1", t.y).attr("x2", a).attr("y2", l).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Nt(s, {
    cx: a,
    cy: 300 + (5 - t.score) * 30,
    score: t.score
  });
  const h = X();
  h.x = t.x, h.y = t.y, h.fill = t.fill, h.width = e.width, h.height = e.height, h.class = "task task-type-" + t.num, h.rx = 3, h.ry = 3, V(s, h), gt(e)(
    t.task,
    s,
    h.x,
    h.y,
    h.width,
    h.height,
    { class: "task" },
    e,
    t.colour
  );
}, "drawTask");
var Lt = _(function(n, t) {
  V(n, {
    x: t.startx,
    y: t.starty,
    width: t.stopx - t.startx,
    height: t.stopy - t.starty,
    fill: t.fill,
    class: "rect"
  }).lower();
}, "drawBackgroundRect");
var At = _(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    "text-anchor": "start",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0
  };
}, "getTextObj");
var X = _(function() {
  return {
    x: 0,
    y: 0,
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
}, "getNoteRect");
var gt = function() {
  function n(s, l, h, y, p, f, _2, b) {
    const g = l.append("text").attr("x", h + p / 2).attr("y", y + f / 2 + 5).style("font-color", b).style("text-anchor", "middle").text(s);
    a(g, _2);
  }
  _(n, "byText");
  function t(s, l, h, y, p, f, _2, b, g) {
    const { taskFontSize: i, taskFontFamily: c } = b, d = s.split(/<br\s*\/?>/gi);
    for (let u = 0; u < d.length; u++) {
      const o = u * i - i * (d.length - 1) / 2, m = l.append("text").attr("x", h + p / 2).attr("y", y).attr("fill", g).style("text-anchor", "middle").style("font-size", i).style("font-family", c);
      m.append("tspan").attr("x", h + p / 2).attr("dy", o).text(d[u]), m.attr("y", y + f / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), a(m, _2);
    }
  }
  _(t, "byTspan");
  function e(s, l, h, y, p, f, _2, b) {
    const g = l.append("switch"), i = g.append("foreignObject").attr("x", h).attr("y", y).attr("width", p).attr("height", f).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    i.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(s), t(s, g, h, y, p, f, _2, b), a(i, _2);
  }
  _(e, "byFo");
  function a(s, l) {
    for (const h in l)
      h in l && s.attr(h, l[h]);
  }
  return _(a, "_setTextAttrs"), function(s) {
    return s.textPlacement === "fo" ? e : s.textPlacement === "old" ? n : t;
  };
}();
var Mt = _(function(n) {
  n.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function Q(n, t) {
  n.each(function() {
    var e = ae(this), a = e.text().split(/(\s+|<br>)/).reverse(), s, l = [], h = 1.1, y = e.attr("y"), p = parseFloat(e.attr("dy")), f = e.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", p + "em");
    for (let _2 = 0; _2 < a.length; _2++)
      s = a[a.length - 1 - _2], l.push(s), f.text(l.join(" ").trim()), (f.node().getComputedTextLength() > t || s === "<br>") && (l.pop(), f.text(l.join(" ").trim()), s === "<br>" ? l = [""] : l = [s], f = e.append("tspan").attr("x", 0).attr("y", y).attr("dy", h + "em").text(s));
  });
}
_(Q, "wrap");
var Ot2 = _(function(n, t, e, a) {
  var _a;
  const s = e % Tt2 - 1, l = n.append("g");
  t.section = s, l.attr(
    "class",
    (t.class ? t.class + " " : "") + "timeline-node " + ("section-" + s)
  );
  const h = l.append("g"), y = l.append("g"), p = y.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(Q, t.width).node().getBBox(), f = ((_a = a.fontSize) == null ? void 0 : _a.replace) ? a.fontSize.replace("px", "") : a.fontSize;
  return t.height = p.height + f * 1.1 * 0.5 + t.padding, t.height = Math.max(t.height, t.maxHeight), t.width = t.width + 2 * t.padding, y.attr("transform", "translate(" + t.width / 2 + ", " + t.padding / 2 + ")"), zt(h, t, s, a), t;
}, "drawNode");
var jt = _(function(n, t, e) {
  var _a;
  const a = n.append("g"), s = a.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(Q, t.width).node().getBBox(), l = ((_a = e.fontSize) == null ? void 0 : _a.replace) ? e.fontSize.replace("px", "") : e.fontSize;
  return a.remove(), s.height + l * 1.1 * 0.5 + t.padding;
}, "getVirtualNodeHeight");
var zt = _(function(n, t, e) {
  n.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr(
    "d",
    `M0 ${t.height - 5} v${-t.height + 2 * 5} q0,-5 5,-5 h${t.width - 2 * 5} q5,0 5,5 v${t.height - 5} H0 Z`
  ), n.append("line").attr("class", "node-line-" + e).attr("x1", 0).attr("y1", t.height).attr("x2", t.width).attr("y2", t.height);
}, "defaultBkg");
var M = {
  drawRect: V,
  drawCircle: Pt,
  drawSection: Ht,
  drawText: yt,
  drawLabel: Ct,
  drawTask: It,
  drawBackgroundRect: Lt,
  getTextObj: At,
  getNoteRect: X,
  initGraphics: Mt,
  drawNode: Ot2,
  getVirtualNodeHeight: jt
};
var Dt = _(function(n, t, e, a) {
  var _a, _b, _c;
  const s = fe(), l = ((_a = s.timeline) == null ? void 0 : _a.leftMargin) ?? 50;
  ut.debug("timeline", a.db);
  const h = s.securityLevel;
  let y;
  h === "sandbox" && (y = ae("#i" + t));
  const p = (h === "sandbox" ? ae(y.nodes()[0].contentDocument.body) : ae("body")).select("#" + t);
  p.append("g");
  const f = a.db.getTasks(), _2 = a.db.getCommonDb().getDiagramTitle();
  ut.debug("task", f), M.initGraphics(p);
  const b = a.db.getSections();
  ut.debug("sections", b);
  let g = 0, i = 0, c = 0, d = 0, u = 50 + l, o = 50;
  d = 50;
  let m = 0, k = true;
  b.forEach(function(P) {
    const w = {
      number: m,
      descr: P,
      section: m,
      width: 150,
      padding: 20,
      maxHeight: g
    }, x = M.getVirtualNodeHeight(p, w, s);
    ut.debug("sectionHeight before draw", x), g = Math.max(g, x + 20);
  });
  let N = 0, I = 0;
  ut.debug("tasks.length", f.length);
  for (const [P, w] of f.entries()) {
    const x = {
      number: P,
      descr: w,
      section: w.section,
      width: 150,
      padding: 20,
      maxHeight: i
    }, S = M.getVirtualNodeHeight(p, x, s);
    ut.debug("taskHeight before draw", S), i = Math.max(i, S + 20), N = Math.max(N, w.events.length);
    let C = 0;
    for (const L of w.events) {
      const G = {
        descr: L,
        section: w.section,
        number: w.section,
        width: 150,
        padding: 20,
        maxHeight: 50
      };
      C += M.getVirtualNodeHeight(p, G, s);
    }
    w.events.length > 0 && (C += (w.events.length - 1) * 10), I = Math.max(I, C);
  }
  ut.debug("maxSectionHeight before draw", g), ut.debug("maxTaskHeight before draw", i), b && b.length > 0 ? b.forEach((P) => {
    const w = f.filter((L) => L.section === P), x = {
      number: m,
      descr: P,
      section: m,
      width: 200 * Math.max(w.length, 1) - 50,
      padding: 20,
      maxHeight: g
    };
    ut.debug("sectionNode", x);
    const S = p.append("g"), C = M.drawNode(S, x, m, s);
    ut.debug("sectionNode output", C), S.attr("transform", `translate(${u}, ${d})`), o += g + 50, w.length > 0 && st(
      p,
      w,
      m,
      u,
      o,
      i,
      s,
      N,
      I,
      g,
      false
    ), u += 200 * Math.max(w.length, 1), o = d, m++;
  }) : (k = false, st(
    p,
    f,
    m,
    u,
    o,
    i,
    s,
    N,
    I,
    g,
    true
  ));
  const D = p.node().getBBox();
  ut.debug("bounds", D), _2 && p.append("text").text(_2).attr("x", D.width / 2 - l).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), c = k ? g + i + 150 : i + 100, p.append("g").attr("class", "lineWrapper").append("line").attr("x1", l).attr("y1", c).attr("x2", D.width + 3 * l).attr("y2", c).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), FR(
    void 0,
    p,
    ((_b = s.timeline) == null ? void 0 : _b.padding) ?? 50,
    ((_c = s.timeline) == null ? void 0 : _c.useMaxWidth) ?? false
  );
}, "draw");
var st = _(function(n, t, e, a, s, l, h, y, p, f, _2) {
  var _a;
  for (const b of t) {
    const g = {
      descr: b.task,
      section: e,
      number: e,
      width: 150,
      padding: 20,
      maxHeight: l
    };
    ut.debug("taskNode", g);
    const i = n.append("g").attr("class", "taskWrapper"), c = M.drawNode(i, g, e, h).height;
    if (ut.debug("taskHeight after draw", c), i.attr("transform", `translate(${a}, ${s})`), l = Math.max(l, c), b.events) {
      const d = n.append("g").attr("class", "lineWrapper");
      let u = l;
      s += 100, u = u + Ft(n, b.events, e, a, s, h), s -= 100, d.append("line").attr("x1", a + 190 / 2).attr("y1", s + l).attr("x2", a + 190 / 2).attr("y2", s + l + 100 + p + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
    }
    a = a + 200, _2 && !((_a = h.timeline) == null ? void 0 : _a.disableMulticolor) && e++;
  }
  s = s - 10;
}, "drawTasks");
var Ft = _(function(n, t, e, a, s, l) {
  let h = 0;
  const y = s;
  s = s + 100;
  for (const p of t) {
    const f = {
      descr: p,
      section: e,
      number: e,
      width: 150,
      padding: 20,
      maxHeight: 50
    };
    ut.debug("eventNode", f);
    const _2 = n.append("g").attr("class", "eventWrapper"), b = M.drawNode(_2, f, e, l).height;
    h = h + b, _2.attr("transform", `translate(${a}, ${s})`), s = s + 10 + b;
  }
  return s = y, h;
}, "drawEvents");
var Wt = {
  setConf: _(() => {
  }, "setConf"),
  draw: Dt
};
var Rt = _((n) => {
  let t = "";
  for (let e = 0; e < n.THEME_COLOR_LIMIT; e++)
    n["lineColor" + e] = n["lineColor" + e] || n["cScaleInv" + e], lc(n["lineColor" + e]) ? n["lineColor" + e] = Tt(n["lineColor" + e], 20) : n["lineColor" + e] = Ot(n["lineColor" + e], 20);
  for (let e = 0; e < n.THEME_COLOR_LIMIT; e++) {
    const a = "" + (17 - 3 * e);
    t += `
    .section-${e - 1} rect, .section-${e - 1} path, .section-${e - 1} circle, .section-${e - 1} path  {
      fill: ${n["cScale" + e]};
    }
    .section-${e - 1} text {
     fill: ${n["cScaleLabel" + e]};
    }
    .node-icon-${e - 1} {
      font-size: 40px;
      color: ${n["cScaleLabel" + e]};
    }
    .section-edge-${e - 1}{
      stroke: ${n["cScale" + e]};
    }
    .edge-depth-${e - 1}{
      stroke-width: ${a};
    }
    .section-${e - 1} line {
      stroke: ${n["cScaleInv" + e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel" + e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return t;
}, "genSections");
var Bt = _((n) => `
  .edge {
    stroke-width: 3;
  }
  ${Rt(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`, "getStyles");
var Vt = Bt;
var Zt = {
  db: it,
  renderer: Wt,
  parser: St,
  styles: Vt
};
export {
  Zt as diagram
};
//# sourceMappingURL=timeline-definition-MYPXXCX6-DT8Gva88-7JZvkkhh-VK4FJEYN.js.map
