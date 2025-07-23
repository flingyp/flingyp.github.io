import {
  y
} from "./chunk-VVFIDBJC.js";
import {
  l
} from "./chunk-F4TZSDY7.js";
import {
  e
} from "./chunk-5HT24C7N.js";
import {
  n
} from "./chunk-5H7L3GAH.js";
import "./chunk-CSA5CQKO.js";
import {
  EU,
  H6,
  Hk,
  Hr,
  Ke,
  Nh,
  Om,
  U6,
  Wn,
  Zs,
  _,
  ae,
  ca,
  fe,
  fo,
  fs,
  rj,
  ut,
  yl,
  yv,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/blockDiagram-6J76NXCF-BJB2lu6M-BZBzvUHw.js
var xt = function() {
  var e2 = _(function(v, c, p, w) {
    for (p = p || {}, w = v.length; w--; p[v[w]] = c) ;
    return p;
  }, "o"), t = [1, 7], a = [1, 13], n2 = [1, 14], i = [1, 15], r = [1, 19], s = [1, 16], l2 = [1, 17], o = [1, 18], u = [8, 30], h = [8, 21, 28, 29, 30, 31, 32, 40, 44, 47], x = [1, 23], f = [1, 24], b = [8, 15, 16, 21, 28, 29, 30, 31, 32, 40, 44, 47], L = [8, 15, 16, 21, 27, 28, 29, 30, 31, 32, 40, 44, 47], S = [1, 49], k = {
    trace: _(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, spaceLines: 3, SPACELINE: 4, NL: 5, separator: 6, SPACE: 7, EOF: 8, start: 9, BLOCK_DIAGRAM_KEY: 10, document: 11, stop: 12, statement: 13, link: 14, LINK: 15, START_LINK: 16, LINK_LABEL: 17, STR: 18, nodeStatement: 19, columnsStatement: 20, SPACE_BLOCK: 21, blockStatement: 22, classDefStatement: 23, cssClassStatement: 24, styleStatement: 25, node: 26, SIZE: 27, COLUMNS: 28, "id-block": 29, end: 30, block: 31, NODE_ID: 32, nodeShapeNLabel: 33, dirList: 34, DIR: 35, NODE_DSTART: 36, NODE_DEND: 37, BLOCK_ARROW_START: 38, BLOCK_ARROW_END: 39, classDef: 40, CLASSDEF_ID: 41, CLASSDEF_STYLEOPTS: 42, DEFAULT: 43, class: 44, CLASSENTITY_IDS: 45, STYLECLASS: 46, style: 47, STYLE_ENTITY_IDS: 48, STYLE_DEFINITION_DATA: 49, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACELINE", 5: "NL", 7: "SPACE", 8: "EOF", 10: "BLOCK_DIAGRAM_KEY", 15: "LINK", 16: "START_LINK", 17: "LINK_LABEL", 18: "STR", 21: "SPACE_BLOCK", 27: "SIZE", 28: "COLUMNS", 29: "id-block", 30: "end", 31: "block", 32: "NODE_ID", 35: "DIR", 36: "NODE_DSTART", 37: "NODE_DEND", 38: "BLOCK_ARROW_START", 39: "BLOCK_ARROW_END", 40: "classDef", 41: "CLASSDEF_ID", 42: "CLASSDEF_STYLEOPTS", 43: "DEFAULT", 44: "class", 45: "CLASSENTITY_IDS", 46: "STYLECLASS", 47: "style", 48: "STYLE_ENTITY_IDS", 49: "STYLE_DEFINITION_DATA" },
    productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [34, 1], [34, 2], [33, 3], [33, 4], [23, 3], [23, 3], [24, 3], [25, 3]],
    performAction: _(function(v, c, p, w, E, d, _2) {
      var y2 = d.length - 1;
      switch (E) {
        case 4:
          w.getLogger().debug("Rule: separator (NL) ");
          break;
        case 5:
          w.getLogger().debug("Rule: separator (Space) ");
          break;
        case 6:
          w.getLogger().debug("Rule: separator (EOF) ");
          break;
        case 7:
          w.getLogger().debug("Rule: hierarchy: ", d[y2 - 1]), w.setHierarchy(d[y2 - 1]);
          break;
        case 8:
          w.getLogger().debug("Stop NL ");
          break;
        case 9:
          w.getLogger().debug("Stop EOF ");
          break;
        case 10:
          w.getLogger().debug("Stop NL2 ");
          break;
        case 11:
          w.getLogger().debug("Stop EOF2 ");
          break;
        case 12:
          w.getLogger().debug("Rule: statement: ", d[y2]), typeof d[y2].length == "number" ? this.$ = d[y2] : this.$ = [d[y2]];
          break;
        case 13:
          w.getLogger().debug("Rule: statement #2: ", d[y2 - 1]), this.$ = [d[y2 - 1]].concat(d[y2]);
          break;
        case 14:
          w.getLogger().debug("Rule: link: ", d[y2], v), this.$ = { edgeTypeStr: d[y2], label: "" };
          break;
        case 15:
          w.getLogger().debug("Rule: LABEL link: ", d[y2 - 3], d[y2 - 1], d[y2]), this.$ = { edgeTypeStr: d[y2], label: d[y2 - 1] };
          break;
        case 18:
          const A = parseInt(d[y2]), O = w.generateId();
          this.$ = { id: O, type: "space", label: "", width: A, children: [] };
          break;
        case 23:
          w.getLogger().debug("Rule: (nodeStatement link node) ", d[y2 - 2], d[y2 - 1], d[y2], " typestr: ", d[y2 - 1].edgeTypeStr);
          const q = w.edgeStrToEdgeData(d[y2 - 1].edgeTypeStr);
          this.$ = [
            { id: d[y2 - 2].id, label: d[y2 - 2].label, type: d[y2 - 2].type, directions: d[y2 - 2].directions },
            { id: d[y2 - 2].id + "-" + d[y2].id, start: d[y2 - 2].id, end: d[y2].id, label: d[y2 - 1].label, type: "edge", directions: d[y2].directions, arrowTypeEnd: q, arrowTypeStart: "arrow_open" },
            { id: d[y2].id, label: d[y2].label, type: w.typeStr2Type(d[y2].typeStr), directions: d[y2].directions }
          ];
          break;
        case 24:
          w.getLogger().debug("Rule: nodeStatement (abc88 node size) ", d[y2 - 1], d[y2]), this.$ = { id: d[y2 - 1].id, label: d[y2 - 1].label, type: w.typeStr2Type(d[y2 - 1].typeStr), directions: d[y2 - 1].directions, widthInColumns: parseInt(d[y2], 10) };
          break;
        case 25:
          w.getLogger().debug("Rule: nodeStatement (node) ", d[y2]), this.$ = { id: d[y2].id, label: d[y2].label, type: w.typeStr2Type(d[y2].typeStr), directions: d[y2].directions, widthInColumns: 1 };
          break;
        case 26:
          w.getLogger().debug("APA123", this ? this : "na"), w.getLogger().debug("COLUMNS: ", d[y2]), this.$ = { type: "column-setting", columns: d[y2] === "auto" ? -1 : parseInt(d[y2]) };
          break;
        case 27:
          w.getLogger().debug("Rule: id-block statement : ", d[y2 - 2], d[y2 - 1]), w.generateId(), this.$ = { ...d[y2 - 2], type: "composite", children: d[y2 - 1] };
          break;
        case 28:
          w.getLogger().debug("Rule: blockStatement : ", d[y2 - 2], d[y2 - 1], d[y2]);
          const j = w.generateId();
          this.$ = { id: j, type: "composite", label: "", children: d[y2 - 1] };
          break;
        case 29:
          w.getLogger().debug("Rule: node (NODE_ID separator): ", d[y2]), this.$ = { id: d[y2] };
          break;
        case 30:
          w.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", d[y2 - 1], d[y2]), this.$ = { id: d[y2 - 1], label: d[y2].label, typeStr: d[y2].typeStr, directions: d[y2].directions };
          break;
        case 31:
          w.getLogger().debug("Rule: dirList: ", d[y2]), this.$ = [d[y2]];
          break;
        case 32:
          w.getLogger().debug("Rule: dirList: ", d[y2 - 1], d[y2]), this.$ = [d[y2 - 1]].concat(d[y2]);
          break;
        case 33:
          w.getLogger().debug("Rule: nodeShapeNLabel: ", d[y2 - 2], d[y2 - 1], d[y2]), this.$ = { typeStr: d[y2 - 2] + d[y2], label: d[y2 - 1] };
          break;
        case 34:
          w.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", d[y2 - 3], d[y2 - 2], " #3:", d[y2 - 1], d[y2]), this.$ = { typeStr: d[y2 - 3] + d[y2], label: d[y2 - 2], directions: d[y2 - 1] };
          break;
        case 35:
        case 36:
          this.$ = { type: "classDef", id: d[y2 - 1].trim(), css: d[y2].trim() };
          break;
        case 37:
          this.$ = { type: "applyClass", id: d[y2 - 1].trim(), styleClass: d[y2].trim() };
          break;
        case 38:
          this.$ = { type: "applyStyles", id: d[y2 - 1].trim(), stylesStr: d[y2].trim() };
          break;
      }
    }, "anonymous"),
    table: [{ 9: 1, 10: [1, 2] }, { 1: [3] }, { 11: 3, 13: 4, 19: 5, 20: 6, 21: t, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: a, 29: n2, 31: i, 32: r, 40: s, 44: l2, 47: o }, { 8: [1, 20] }, e2(u, [2, 12], { 13: 4, 19: 5, 20: 6, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 11: 21, 21: t, 28: a, 29: n2, 31: i, 32: r, 40: s, 44: l2, 47: o }), e2(h, [2, 16], { 14: 22, 15: x, 16: f }), e2(h, [2, 17]), e2(h, [2, 18]), e2(h, [2, 19]), e2(h, [2, 20]), e2(h, [2, 21]), e2(h, [2, 22]), e2(b, [2, 25], { 27: [1, 25] }), e2(h, [2, 26]), { 19: 26, 26: 12, 32: r }, { 11: 27, 13: 4, 19: 5, 20: 6, 21: t, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: a, 29: n2, 31: i, 32: r, 40: s, 44: l2, 47: o }, { 41: [1, 28], 43: [1, 29] }, { 45: [1, 30] }, { 48: [1, 31] }, e2(L, [2, 29], { 33: 32, 36: [1, 33], 38: [1, 34] }), { 1: [2, 7] }, e2(u, [2, 13]), { 26: 35, 32: r }, { 32: [2, 14] }, { 17: [1, 36] }, e2(b, [2, 24]), { 11: 37, 13: 4, 14: 22, 15: x, 16: f, 19: 5, 20: 6, 21: t, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: a, 29: n2, 31: i, 32: r, 40: s, 44: l2, 47: o }, { 30: [1, 38] }, { 42: [1, 39] }, { 42: [1, 40] }, { 46: [1, 41] }, { 49: [1, 42] }, e2(L, [2, 30]), { 18: [1, 43] }, { 18: [1, 44] }, e2(b, [2, 23]), { 18: [1, 45] }, { 30: [1, 46] }, e2(h, [2, 28]), e2(h, [2, 35]), e2(h, [2, 36]), e2(h, [2, 37]), e2(h, [2, 38]), { 37: [1, 47] }, { 34: 48, 35: S }, { 15: [1, 50] }, e2(h, [2, 27]), e2(L, [2, 33]), { 39: [1, 51] }, { 34: 52, 35: S, 39: [2, 31] }, { 32: [2, 15] }, e2(L, [2, 34]), { 39: [2, 32] }],
    defaultActions: { 20: [2, 7], 23: [2, 14], 50: [2, 15], 52: [2, 32] },
    parseError: _(function(v, c) {
      if (c.recoverable)
        this.trace(v);
      else {
        var p = new Error(v);
        throw p.hash = c, p;
      }
    }, "parseError"),
    parse: _(function(v) {
      var c = this, p = [0], w = [], E = [null], d = [], _2 = this.table, y2 = "", A = 0, O = 0, q = 2, j = 1, ie = d.slice.call(arguments, 1), z = Object.create(this.lexer), V = { yy: {} };
      for (var ht in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, ht) && (V.yy[ht] = this.yy[ht]);
      z.setInput(v, V.yy), V.yy.lexer = z, V.yy.parser = this, typeof z.yylloc > "u" && (z.yylloc = {});
      var gt = z.yylloc;
      d.push(gt);
      var ne = z.options && z.options.ranges;
      typeof V.yy.parseError == "function" ? this.parseError = V.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function le(Y) {
        p.length = p.length - 2 * Y, E.length = E.length - Y, d.length = d.length - Y;
      }
      _(le, "popStack");
      function Dt() {
        var Y;
        return Y = w.pop() || z.lex() || j, typeof Y != "number" && (Y instanceof Array && (w = Y, Y = w.pop()), Y = c.symbols_[Y] || Y), Y;
      }
      _(Dt, "lex");
      for (var P, Q, X, ut2, G = {}, at, Z, vt, st; ; ) {
        if (Q = p[p.length - 1], this.defaultActions[Q] ? X = this.defaultActions[Q] : ((P === null || typeof P > "u") && (P = Dt()), X = _2[Q] && _2[Q][P]), typeof X > "u" || !X.length || !X[0]) {
          var yt = "";
          st = [];
          for (at in _2[Q])
            this.terminals_[at] && at > q && st.push("'" + this.terminals_[at] + "'");
          z.showPosition ? yt = "Parse error on line " + (A + 1) + `:
` + z.showPosition() + `
Expecting ` + st.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : yt = "Parse error on line " + (A + 1) + ": Unexpected " + (P == j ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(yt, {
            text: z.match,
            token: this.terminals_[P] || P,
            line: z.yylineno,
            loc: gt,
            expected: st
          });
        }
        if (X[0] instanceof Array && X.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + P);
        switch (X[0]) {
          case 1:
            p.push(P), E.push(z.yytext), d.push(z.yylloc), p.push(X[1]), P = null, O = z.yyleng, y2 = z.yytext, A = z.yylineno, gt = z.yylloc;
            break;
          case 2:
            if (Z = this.productions_[X[1]][1], G.$ = E[E.length - Z], G._$ = {
              first_line: d[d.length - (Z || 1)].first_line,
              last_line: d[d.length - 1].last_line,
              first_column: d[d.length - (Z || 1)].first_column,
              last_column: d[d.length - 1].last_column
            }, ne && (G._$.range = [
              d[d.length - (Z || 1)].range[0],
              d[d.length - 1].range[1]
            ]), ut2 = this.performAction.apply(G, [
              y2,
              O,
              A,
              V.yy,
              X[1],
              E,
              d
            ].concat(ie)), typeof ut2 < "u")
              return ut2;
            Z && (p = p.slice(0, -1 * Z * 2), E = E.slice(0, -1 * Z), d = d.slice(0, -1 * Z)), p.push(this.productions_[X[1]][0]), E.push(G.$), d.push(G._$), vt = _2[p[p.length - 2]][p[p.length - 1]], p.push(vt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, T = function() {
    var v = {
      EOF: 1,
      parseError: _(function(c, p) {
        if (this.yy.parser)
          this.yy.parser.parseError(c, p);
        else
          throw new Error(c);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: _(function(c, p) {
        return this.yy = p || this.yy || {}, this._input = c, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: _(function() {
        var c = this._input[0];
        this.yytext += c, this.yyleng++, this.offset++, this.match += c, this.matched += c;
        var p = c.match(/(?:\r\n?|\n).*/g);
        return p ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), c;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: _(function(c) {
        var p = c.length, w = c.split(/(?:\r\n?|\n)/g);
        this._input = c + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - p), this.offset -= p;
        var E = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), w.length - 1 && (this.yylineno -= w.length - 1);
        var d = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: w ? (w.length === E.length ? this.yylloc.first_column : 0) + E[E.length - w.length].length - w[0].length : this.yylloc.first_column - p
        }, this.options.ranges && (this.yylloc.range = [d[0], d[0] + this.yyleng - p]), this.yyleng = this.yytext.length, this;
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
      less: _(function(c) {
        this.unput(this.match.slice(c));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: _(function() {
        var c = this.matched.substr(0, this.matched.length - this.match.length);
        return (c.length > 20 ? "..." : "") + c.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: _(function() {
        var c = this.match;
        return c.length < 20 && (c += this._input.substr(0, 20 - c.length)), (c.substr(0, 20) + (c.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: _(function() {
        var c = this.pastInput(), p = new Array(c.length + 1).join("-");
        return c + this.upcomingInput() + `
` + p + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: _(function(c, p) {
        var w, E, d;
        if (this.options.backtrack_lexer && (d = {
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
        }, this.options.ranges && (d.yylloc.range = this.yylloc.range.slice(0))), E = c[0].match(/(?:\r\n?|\n).*/g), E && (this.yylineno += E.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: E ? E[E.length - 1].length - E[E.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
        }, this.yytext += c[0], this.match += c[0], this.matches = c, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(c[0].length), this.matched += c[0], w = this.performAction.call(this, this.yy, this, p, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), w)
          return w;
        if (this._backtrack) {
          for (var _2 in d)
            this[_2] = d[_2];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: _(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var c, p, w, E;
        this._more || (this.yytext = "", this.match = "");
        for (var d = this._currentRules(), _2 = 0; _2 < d.length; _2++)
          if (w = this._input.match(this.rules[d[_2]]), w && (!p || w[0].length > p[0].length)) {
            if (p = w, E = _2, this.options.backtrack_lexer) {
              if (c = this.test_match(w, d[_2]), c !== false)
                return c;
              if (this._backtrack) {
                p = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return p ? (c = this.test_match(p, d[E]), c !== false ? c : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: _(function() {
        var c = this.next();
        return c || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: _(function(c) {
        this.conditionStack.push(c);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: _(function() {
        var c = this.conditionStack.length - 1;
        return c > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: _(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: _(function(c) {
        return c = this.conditionStack.length - 1 - Math.abs(c || 0), c >= 0 ? this.conditionStack[c] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: _(function(c) {
        this.begin(c);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: _(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: _(function(c, p, w, E) {
        switch (w) {
          case 0:
            return 10;
          case 1:
            return c.getLogger().debug("Found space-block"), 31;
          case 2:
            return c.getLogger().debug("Found nl-block"), 31;
          case 3:
            return c.getLogger().debug("Found space-block"), 29;
          case 4:
            c.getLogger().debug(".", p.yytext);
            break;
          case 5:
            c.getLogger().debug("_", p.yytext);
            break;
          case 6:
            return 5;
          case 7:
            return p.yytext = -1, 28;
          case 8:
            return p.yytext = p.yytext.replace(/columns\s+/, ""), c.getLogger().debug("COLUMNS (LEX)", p.yytext), 28;
          case 9:
            this.pushState("md_string");
            break;
          case 10:
            return "MD_STR";
          case 11:
            this.popState();
            break;
          case 12:
            this.pushState("string");
            break;
          case 13:
            c.getLogger().debug("LEX: POPPING STR:", p.yytext), this.popState();
            break;
          case 14:
            return c.getLogger().debug("LEX: STR end:", p.yytext), "STR";
          case 15:
            return p.yytext = p.yytext.replace(/space\:/, ""), c.getLogger().debug("SPACE NUM (LEX)", p.yytext), 21;
          case 16:
            return p.yytext = "1", c.getLogger().debug("COLUMNS (LEX)", p.yytext), 21;
          case 17:
            return 43;
          case 18:
            return "LINKSTYLE";
          case 19:
            return "INTERPOLATE";
          case 20:
            return this.pushState("CLASSDEF"), 40;
          case 21:
            return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
          case 22:
            return this.popState(), this.pushState("CLASSDEFID"), 41;
          case 23:
            return this.popState(), 42;
          case 24:
            return this.pushState("CLASS"), 44;
          case 25:
            return this.popState(), this.pushState("CLASS_STYLE"), 45;
          case 26:
            return this.popState(), 46;
          case 27:
            return this.pushState("STYLE_STMNT"), 47;
          case 28:
            return this.popState(), this.pushState("STYLE_DEFINITION"), 48;
          case 29:
            return this.popState(), 49;
          case 30:
            return this.pushState("acc_title"), "acc_title";
          case 31:
            return this.popState(), "acc_title_value";
          case 32:
            return this.pushState("acc_descr"), "acc_descr";
          case 33:
            return this.popState(), "acc_descr_value";
          case 34:
            this.pushState("acc_descr_multiline");
            break;
          case 35:
            this.popState();
            break;
          case 36:
            return "acc_descr_multiline_value";
          case 37:
            return 30;
          case 38:
            return this.popState(), c.getLogger().debug("Lex: (("), "NODE_DEND";
          case 39:
            return this.popState(), c.getLogger().debug("Lex: (("), "NODE_DEND";
          case 40:
            return this.popState(), c.getLogger().debug("Lex: ))"), "NODE_DEND";
          case 41:
            return this.popState(), c.getLogger().debug("Lex: (("), "NODE_DEND";
          case 42:
            return this.popState(), c.getLogger().debug("Lex: (("), "NODE_DEND";
          case 43:
            return this.popState(), c.getLogger().debug("Lex: (-"), "NODE_DEND";
          case 44:
            return this.popState(), c.getLogger().debug("Lex: -)"), "NODE_DEND";
          case 45:
            return this.popState(), c.getLogger().debug("Lex: (("), "NODE_DEND";
          case 46:
            return this.popState(), c.getLogger().debug("Lex: ]]"), "NODE_DEND";
          case 47:
            return this.popState(), c.getLogger().debug("Lex: ("), "NODE_DEND";
          case 48:
            return this.popState(), c.getLogger().debug("Lex: ])"), "NODE_DEND";
          case 49:
            return this.popState(), c.getLogger().debug("Lex: /]"), "NODE_DEND";
          case 50:
            return this.popState(), c.getLogger().debug("Lex: /]"), "NODE_DEND";
          case 51:
            return this.popState(), c.getLogger().debug("Lex: )]"), "NODE_DEND";
          case 52:
            return this.popState(), c.getLogger().debug("Lex: )"), "NODE_DEND";
          case 53:
            return this.popState(), c.getLogger().debug("Lex: ]>"), "NODE_DEND";
          case 54:
            return this.popState(), c.getLogger().debug("Lex: ]"), "NODE_DEND";
          case 55:
            return c.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 36;
          case 56:
            return c.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 36;
          case 57:
            return c.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 36;
          case 58:
            return c.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 59:
            return c.getLogger().debug("Lex: ((("), this.pushState("NODE"), 36;
          case 60:
            return c.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 61:
            return c.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 62:
            return c.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 63:
            return c.getLogger().debug("Lexc: >"), this.pushState("NODE"), 36;
          case 64:
            return c.getLogger().debug("Lexa: (["), this.pushState("NODE"), 36;
          case 65:
            return c.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 66:
            return this.pushState("NODE"), 36;
          case 67:
            return this.pushState("NODE"), 36;
          case 68:
            return this.pushState("NODE"), 36;
          case 69:
            return this.pushState("NODE"), 36;
          case 70:
            return this.pushState("NODE"), 36;
          case 71:
            return this.pushState("NODE"), 36;
          case 72:
            return this.pushState("NODE"), 36;
          case 73:
            return c.getLogger().debug("Lexa: ["), this.pushState("NODE"), 36;
          case 74:
            return this.pushState("BLOCK_ARROW"), c.getLogger().debug("LEX ARR START"), 38;
          case 75:
            return c.getLogger().debug("Lex: NODE_ID", p.yytext), 32;
          case 76:
            return c.getLogger().debug("Lex: EOF", p.yytext), 8;
          case 77:
            this.pushState("md_string");
            break;
          case 78:
            this.pushState("md_string");
            break;
          case 79:
            return "NODE_DESCR";
          case 80:
            this.popState();
            break;
          case 81:
            c.getLogger().debug("Lex: Starting string"), this.pushState("string");
            break;
          case 82:
            c.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
            break;
          case 83:
            return c.getLogger().debug("LEX: NODE_DESCR:", p.yytext), "NODE_DESCR";
          case 84:
            c.getLogger().debug("LEX POPPING"), this.popState();
            break;
          case 85:
            c.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
            break;
          case 86:
            return p.yytext = p.yytext.replace(/^,\s*/, ""), c.getLogger().debug("Lex (right): dir:", p.yytext), "DIR";
          case 87:
            return p.yytext = p.yytext.replace(/^,\s*/, ""), c.getLogger().debug("Lex (left):", p.yytext), "DIR";
          case 88:
            return p.yytext = p.yytext.replace(/^,\s*/, ""), c.getLogger().debug("Lex (x):", p.yytext), "DIR";
          case 89:
            return p.yytext = p.yytext.replace(/^,\s*/, ""), c.getLogger().debug("Lex (y):", p.yytext), "DIR";
          case 90:
            return p.yytext = p.yytext.replace(/^,\s*/, ""), c.getLogger().debug("Lex (up):", p.yytext), "DIR";
          case 91:
            return p.yytext = p.yytext.replace(/^,\s*/, ""), c.getLogger().debug("Lex (down):", p.yytext), "DIR";
          case 92:
            return p.yytext = "]>", c.getLogger().debug("Lex (ARROW_DIR end):", p.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
          case 93:
            return c.getLogger().debug("Lex: LINK", "#" + p.yytext + "#"), 15;
          case 94:
            return c.getLogger().debug("Lex: LINK", p.yytext), 15;
          case 95:
            return c.getLogger().debug("Lex: LINK", p.yytext), 15;
          case 96:
            return c.getLogger().debug("Lex: LINK", p.yytext), 15;
          case 97:
            return c.getLogger().debug("Lex: START_LINK", p.yytext), this.pushState("LLABEL"), 16;
          case 98:
            return c.getLogger().debug("Lex: START_LINK", p.yytext), this.pushState("LLABEL"), 16;
          case 99:
            return c.getLogger().debug("Lex: START_LINK", p.yytext), this.pushState("LLABEL"), 16;
          case 100:
            this.pushState("md_string");
            break;
          case 101:
            return c.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
          case 102:
            return this.popState(), c.getLogger().debug("Lex: LINK", "#" + p.yytext + "#"), 15;
          case 103:
            return this.popState(), c.getLogger().debug("Lex: LINK", p.yytext), 15;
          case 104:
            return this.popState(), c.getLogger().debug("Lex: LINK", p.yytext), 15;
          case 105:
            return c.getLogger().debug("Lex: COLON", p.yytext), p.yytext = p.yytext.slice(1), 27;
        }
      }, "anonymous"),
      rules: [/^(?:block-beta\b)/, /^(?:block\s+)/, /^(?:block\n+)/, /^(?:block:)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/],
      conditions: { STYLE_DEFINITION: { rules: [29], inclusive: false }, STYLE_STMNT: { rules: [28], inclusive: false }, CLASSDEFID: { rules: [23], inclusive: false }, CLASSDEF: { rules: [21, 22], inclusive: false }, CLASS_STYLE: { rules: [26], inclusive: false }, CLASS: { rules: [25], inclusive: false }, LLABEL: { rules: [100, 101, 102, 103, 104], inclusive: false }, ARROW_DIR: { rules: [86, 87, 88, 89, 90, 91, 92], inclusive: false }, BLOCK_ARROW: { rules: [77, 82, 85], inclusive: false }, NODE: { rules: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 78, 81], inclusive: false }, md_string: { rules: [10, 11, 79, 80], inclusive: false }, space: { rules: [], inclusive: false }, string: { rules: [13, 14, 83, 84], inclusive: false }, acc_descr_multiline: { rules: [35, 36], inclusive: false }, acc_descr: { rules: [33], inclusive: false }, acc_title: { rules: [31], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19, 20, 24, 27, 30, 32, 34, 37, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 93, 94, 95, 96, 97, 98, 99, 105], inclusive: true } }
    };
    return v;
  }();
  k.lexer = T;
  function D() {
    this.yy = {};
  }
  return _(D, "Parser"), D.prototype = k, k.Parser = D, new D();
}();
xt.parser = xt;
var ke = xt;
var U = /* @__PURE__ */ new Map();
var Lt = [];
var bt = /* @__PURE__ */ new Map();
var $t = "color";
var Tt = "fill";
var _e = "bgFill";
var Pt = ",";
var Ee = fe();
var lt = /* @__PURE__ */ new Map();
var De = _((e2) => fo.sanitizeText(e2, Ee), "sanitizeText");
var ve = _(function(e2, t = "") {
  let a = lt.get(e2);
  a || (a = { id: e2, styles: [], textStyles: [] }, lt.set(e2, a)), t == null ? void 0 : t.split(Pt).forEach((n2) => {
    const i = n2.replace(/([^;]*);/, "$1").trim();
    if (RegExp($t).exec(n2)) {
      const r = i.replace(Tt, _e).replace($t, Tt);
      a.textStyles.push(r);
    }
    a.styles.push(i);
  });
}, "addStyleClass");
var Ne = _(function(e2, t = "") {
  const a = U.get(e2);
  t != null && (a.styles = t.split(Pt));
}, "addStyle2Node");
var $e = _(function(e2, t) {
  e2.split(",").forEach(function(a) {
    let n2 = U.get(a);
    if (n2 === void 0) {
      const i = a.trim();
      n2 = { id: i, type: "na", children: [] }, U.set(i, n2);
    }
    n2.classes || (n2.classes = []), n2.classes.push(t);
  });
}, "setCssClass");
var Yt = _((e2, t) => {
  const a = e2.flat(), n2 = [];
  for (const i of a) {
    if (i.label && (i.label = De(i.label)), i.type === "classDef") {
      ve(i.id, i.css);
      continue;
    }
    if (i.type === "applyClass") {
      $e(i.id, (i == null ? void 0 : i.styleClass) ?? "");
      continue;
    }
    if (i.type === "applyStyles") {
      (i == null ? void 0 : i.stylesStr) && Ne(i.id, i == null ? void 0 : i.stylesStr);
      continue;
    }
    if (i.type === "column-setting")
      t.columns = i.columns ?? -1;
    else if (i.type === "edge") {
      const r = (bt.get(i.id) ?? 0) + 1;
      bt.set(i.id, r), i.id = r + "-" + i.id, Lt.push(i);
    } else {
      i.label || (i.type === "composite" ? i.label = "" : i.label = i.id);
      const r = U.get(i.id);
      if (r === void 0 ? U.set(i.id, i) : (i.type !== "na" && (r.type = i.type), i.label !== i.id && (r.label = i.label)), i.children && Yt(i.children, i), i.type === "space") {
        const s = i.width ?? 1;
        for (let l2 = 0; l2 < s; l2++) {
          const o = n(i);
          o.id = o.id + "-" + l2, U.set(o.id, o), n2.push(o);
        }
      } else r === void 0 && n2.push(i);
    }
  }
  t.children = n2;
}, "populateBlockDatabase");
var St = [];
var et = { id: "root", type: "composite", children: [], columns: -1 };
var Te = _(() => {
  ut.debug("Clear called"), zR(), et = { id: "root", type: "composite", children: [], columns: -1 }, U = /* @__PURE__ */ new Map([["root", et]]), St = [], lt = /* @__PURE__ */ new Map(), Lt = [], bt = /* @__PURE__ */ new Map();
}, "clear");
function Wt(e2) {
  switch (ut.debug("typeStr2Type", e2), e2) {
    case "[]":
      return "square";
    case "()":
      return ut.debug("we have a round"), "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
_(Wt, "typeStr2Type");
function Xt(e2) {
  switch (ut.debug("typeStr2Type", e2), e2) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
_(Xt, "edgeTypeStr2Type");
function Kt(e2) {
  switch (e2.trim()) {
    case "--x":
      return "arrow_cross";
    case "--o":
      return "arrow_circle";
    default:
      return "arrow_point";
  }
}
_(Kt, "edgeStrToEdgeData");
var Ct = 0;
var Ce = _(() => (Ct++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Ct), "generateId");
var Ie = _((e2) => {
  et.children = e2, Yt(e2, et), St = et.children;
}, "setHierarchy");
var Be = _((e2) => {
  const t = U.get(e2);
  return t ? t.columns ? t.columns : t.children ? t.children.length : -1 : -1;
}, "getColumns");
var Oe = _(() => [...U.values()], "getBlocksFlat");
var ze = _(() => St || [], "getBlocks");
var Re = _(() => Lt, "getEdges");
var Ae = _((e2) => U.get(e2), "getBlock");
var Me = _((e2) => {
  U.set(e2.id, e2);
}, "setBlock");
var Pe = _(() => ut, "getLogger");
var Ye = _(function() {
  return lt;
}, "getClasses");
var We = {
  getConfig: _(() => Hr().block, "getConfig"),
  typeStr2Type: Wt,
  edgeTypeStr2Type: Xt,
  edgeStrToEdgeData: Kt,
  getLogger: Pe,
  getBlocksFlat: Oe,
  getBlocks: ze,
  getEdges: Re,
  setHierarchy: Ie,
  getBlock: Ae,
  setBlock: Me,
  getColumns: Be,
  getClasses: Ye,
  clear: Te,
  generateId: Ce
};
var Xe = We;
var it = _((e2, t) => {
  const a = e, n2 = a(e2, "r"), i = a(e2, "g"), r = a(e2, "b");
  return yl(n2, i, r, t);
}, "fade");
var Ke2 = _((e2) => `.label {
    font-family: ${e2.fontFamily};
    color: ${e2.nodeTextColor || e2.textColor};
  }
  .cluster-label text {
    fill: ${e2.titleColor};
  }
  .cluster-label span,p {
    color: ${e2.titleColor};
  }



  .label text,span,p {
    fill: ${e2.nodeTextColor || e2.textColor};
    color: ${e2.nodeTextColor || e2.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e2.mainBkg};
    stroke: ${e2.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e2.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e2.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e2.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e2.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e2.edgeLabelBackground};
      fill: ${e2.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${it(e2.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${it(e2.mainBkg, 0.5)};
    fill: ${it(e2.clusterBkg, 0.5)};
    stroke: ${it(e2.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e2.titleColor};
  }

  .cluster span,p {
    color: ${e2.titleColor};
  }
  /* .cluster div {
    color: ${e2.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e2.fontFamily};
    font-size: 12px;
    background: ${e2.tertiaryColor};
    border: 1px solid ${e2.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e2.textColor};
  }
  ${l()}
`, "getStyles");
var Ue = Ke2;
var Fe = _((e2, t, a, n2) => {
  t.forEach((i) => {
    er[i](e2, a, n2);
  });
}, "insertMarkers");
var je = _((e2, t, a) => {
  ut.trace("Making markers for ", a), e2.append("defs").append("marker").attr("id", a + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e2.append("defs").append("marker").attr("id", a + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension");
var He = _((e2, t, a) => {
  e2.append("defs").append("marker").attr("id", a + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e2.append("defs").append("marker").attr("id", a + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition");
var Ze = _((e2, t, a) => {
  e2.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e2.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation");
var qe = _((e2, t, a) => {
  e2.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e2.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency");
var Ve = _((e2, t, a) => {
  e2.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e2.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop");
var Qe = _((e2, t, a) => {
  e2.append("marker").attr("id", a + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e2.append("marker").attr("id", a + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point");
var Ge = _((e2, t, a) => {
  e2.append("marker").attr("id", a + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e2.append("marker").attr("id", a + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle");
var Je = _((e2, t, a) => {
  e2.append("marker").attr("id", a + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e2.append("marker").attr("id", a + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross");
var tr = _((e2, t, a) => {
  e2.append("defs").append("marker").attr("id", a + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb");
var er = {
  extension: je,
  composition: He,
  aggregation: Ze,
  dependency: qe,
  lollipop: Ve,
  point: Qe,
  circle: Ge,
  cross: Je,
  barb: tr
};
var rr = Fe;
var _a, _b;
var C = ((_b = (_a = fe()) == null ? void 0 : _a.block) == null ? void 0 : _b.padding) ?? 8;
function Ut(e2, t) {
  if (e2 === 0 || !Number.isInteger(e2))
    throw new Error("Columns must be an integer !== 0.");
  if (t < 0 || !Number.isInteger(t))
    throw new Error("Position must be a non-negative integer." + t);
  if (e2 < 0)
    return { px: t, py: 0 };
  if (e2 === 1)
    return { px: 0, py: t };
  const a = t % e2, n2 = Math.floor(t / e2);
  return { px: a, py: n2 };
}
_(Ut, "calculateBlockPosition");
var ar = _((e2) => {
  let t = 0, a = 0;
  for (const n2 of e2.children) {
    const { width: i, height: r, x: s, y: l2 } = n2.size ?? { width: 0, height: 0, x: 0, y: 0 };
    ut.debug(
      "getMaxChildSize abc95 child:",
      n2.id,
      "width:",
      i,
      "height:",
      r,
      "x:",
      s,
      "y:",
      l2,
      n2.type
    ), n2.type !== "space" && (i > t && (t = i / (e2.widthInColumns ?? 1)), r > a && (a = r));
  }
  return { width: t, height: a };
}, "getMaxChildSize");
function ot(e2, t, a = 0, n2 = 0) {
  var _a2, _b2, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
  ut.debug(
    "setBlockSizes abc95 (start)",
    e2.id,
    (_a2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _a2.x,
    "block width =",
    e2 == null ? void 0 : e2.size,
    "siblingWidth",
    a
  ), ((_b2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _b2.width) || (e2.size = {
    width: a,
    height: n2,
    x: 0,
    y: 0
  });
  let i = 0, r = 0;
  if (((_c = e2.children) == null ? void 0 : _c.length) > 0) {
    for (const b of e2.children)
      ot(b, t);
    const s = ar(e2);
    i = s.width, r = s.height, ut.debug("setBlockSizes abc95 maxWidth of", e2.id, ":s children is ", i, r);
    for (const b of e2.children)
      b.size && (ut.debug(
        `abc95 Setting size of children of ${e2.id} id=${b.id} ${i} ${r} ${JSON.stringify(b.size)}`
      ), b.size.width = i * (b.widthInColumns ?? 1) + C * ((b.widthInColumns ?? 1) - 1), b.size.height = r, b.size.x = 0, b.size.y = 0, ut.debug(
        `abc95 updating size of ${e2.id} children child:${b.id} maxWidth:${i} maxHeight:${r}`
      ));
    for (const b of e2.children)
      ot(b, t, i, r);
    const l2 = e2.columns ?? -1;
    let o = 0;
    for (const b of e2.children)
      o += b.widthInColumns ?? 1;
    let u = e2.children.length;
    l2 > 0 && l2 < o && (u = l2);
    const h = Math.ceil(o / u);
    let x = u * (i + C) + C, f = h * (r + C) + C;
    if (x < a) {
      ut.debug(
        `Detected to small sibling: abc95 ${e2.id} siblingWidth ${a} siblingHeight ${n2} width ${x}`
      ), x = a, f = n2;
      const b = (a - u * C - C) / u, L = (n2 - h * C - C) / h;
      ut.debug("Size indata abc88", e2.id, "childWidth", b, "maxWidth", i), ut.debug("Size indata abc88", e2.id, "childHeight", L, "maxHeight", r), ut.debug("Size indata abc88 xSize", u, "padding", C);
      for (const S of e2.children)
        S.size && (S.size.width = b, S.size.height = L, S.size.x = 0, S.size.y = 0);
    }
    if (ut.debug(
      `abc95 (finale calc) ${e2.id} xSize ${u} ySize ${h} columns ${l2}${e2.children.length} width=${Math.max(x, ((_d = e2.size) == null ? void 0 : _d.width) || 0)}`
    ), x < (((_e2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _e2.width) || 0)) {
      x = ((_f = e2 == null ? void 0 : e2.size) == null ? void 0 : _f.width) || 0;
      const b = l2 > 0 ? Math.min(e2.children.length, l2) : e2.children.length;
      if (b > 0) {
        const L = (x - b * C - C) / b;
        ut.debug("abc95 (growing to fit) width", e2.id, x, (_g = e2.size) == null ? void 0 : _g.width, L);
        for (const S of e2.children)
          S.size && (S.size.width = L);
      }
    }
    e2.size = {
      width: x,
      height: f,
      x: 0,
      y: 0
    };
  }
  ut.debug(
    "setBlockSizes abc94 (done)",
    e2.id,
    (_h = e2 == null ? void 0 : e2.size) == null ? void 0 : _h.x,
    (_i = e2 == null ? void 0 : e2.size) == null ? void 0 : _i.width,
    (_j = e2 == null ? void 0 : e2.size) == null ? void 0 : _j.y,
    (_k = e2 == null ? void 0 : e2.size) == null ? void 0 : _k.height
  );
}
_(ot, "setBlockSizes");
function kt(e2, t) {
  var _a2, _b2, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  ut.debug(
    `abc85 layout blocks (=>layoutBlocks) ${e2.id} x: ${(_a2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _a2.x} y: ${(_b2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _b2.y} width: ${(_c = e2 == null ? void 0 : e2.size) == null ? void 0 : _c.width}`
  );
  const a = e2.columns ?? -1;
  if (ut.debug("layoutBlocks columns abc95", e2.id, "=>", a, e2), e2.children && // find max width of children
  e2.children.length > 0) {
    const n2 = ((_e2 = (_d = e2 == null ? void 0 : e2.children[0]) == null ? void 0 : _d.size) == null ? void 0 : _e2.width) ?? 0, i = e2.children.length * n2 + (e2.children.length - 1) * C;
    ut.debug("widthOfChildren 88", i, "posX");
    let r = 0;
    ut.debug("abc91 block?.size?.x", e2.id, (_f = e2 == null ? void 0 : e2.size) == null ? void 0 : _f.x);
    let s = ((_g = e2 == null ? void 0 : e2.size) == null ? void 0 : _g.x) ? ((_h = e2 == null ? void 0 : e2.size) == null ? void 0 : _h.x) + (-((_i = e2 == null ? void 0 : e2.size) == null ? void 0 : _i.width) / 2 || 0) : -C, l2 = 0;
    for (const o of e2.children) {
      const u = e2;
      if (!o.size)
        continue;
      const { width: h, height: x } = o.size, { px: f, py: b } = Ut(a, r);
      if (b != l2 && (l2 = b, s = ((_j = e2 == null ? void 0 : e2.size) == null ? void 0 : _j.x) ? ((_k = e2 == null ? void 0 : e2.size) == null ? void 0 : _k.x) + (-((_l = e2 == null ? void 0 : e2.size) == null ? void 0 : _l.width) / 2 || 0) : -C, ut.debug("New row in layout for block", e2.id, " and child ", o.id, l2)), ut.debug(
        `abc89 layout blocks (child) id: ${o.id} Pos: ${r} (px, py) ${f},${b} (${(_m = u == null ? void 0 : u.size) == null ? void 0 : _m.x},${(_n = u == null ? void 0 : u.size) == null ? void 0 : _n.y}) parent: ${u.id} width: ${h}${C}`
      ), u.size) {
        const L = h / 2;
        o.size.x = s + C + L, ut.debug(
          `abc91 layout blocks (calc) px, pyid:${o.id} startingPos=X${s} new startingPosX${o.size.x} ${L} padding=${C} width=${h} halfWidth=${L} => x:${o.size.x} y:${o.size.y} ${o.widthInColumns} (width * (child?.w || 1)) / 2 ${h * ((o == null ? void 0 : o.widthInColumns) ?? 1) / 2}`
        ), s = o.size.x + L, o.size.y = u.size.y - u.size.height / 2 + b * (x + C) + x / 2 + C, ut.debug(
          `abc88 layout blocks (calc) px, pyid:${o.id}startingPosX${s}${C}${L}=>x:${o.size.x}y:${o.size.y}${o.widthInColumns}(width * (child?.w || 1)) / 2${h * ((o == null ? void 0 : o.widthInColumns) ?? 1) / 2}`
        );
      }
      o.children && kt(o), r += (o == null ? void 0 : o.widthInColumns) ?? 1, ut.debug("abc88 columnsPos", o, r);
    }
  }
  ut.debug(
    `layout blocks (<==layoutBlocks) ${e2.id} x: ${(_o = e2 == null ? void 0 : e2.size) == null ? void 0 : _o.x} y: ${(_p = e2 == null ? void 0 : e2.size) == null ? void 0 : _p.y} width: ${(_q = e2 == null ? void 0 : e2.size) == null ? void 0 : _q.width}`
  );
}
_(kt, "layoutBlocks");
function _t(e2, { minX: t, minY: a, maxX: n2, maxY: i } = { minX: 0, minY: 0, maxX: 0, maxY: 0 }) {
  if (e2.size && e2.id !== "root") {
    const { x: r, y: s, width: l2, height: o } = e2.size;
    r - l2 / 2 < t && (t = r - l2 / 2), s - o / 2 < a && (a = s - o / 2), r + l2 / 2 > n2 && (n2 = r + l2 / 2), s + o / 2 > i && (i = s + o / 2);
  }
  if (e2.children)
    for (const r of e2.children)
      ({ minX: t, minY: a, maxX: n2, maxY: i } = _t(r, { minX: t, minY: a, maxX: n2, maxY: i }));
  return { minX: t, minY: a, maxX: n2, maxY: i };
}
_(_t, "findBounds");
function Ft(e2) {
  const t = e2.getBlock("root");
  if (!t)
    return;
  ot(t, e2, 0, 0), kt(t), ut.debug("getBlocks", JSON.stringify(t, null, 2));
  const { minX: a, minY: n2, maxX: i, maxY: r } = _t(t), s = r - n2, l2 = i - a;
  return { x: a, y: n2, width: l2, height: s };
}
_(Ft, "layout");
function ft(e2, t) {
  t && e2.attr("style", t);
}
_(ft, "applyStyle");
function jt(e2) {
  const t = ae(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), a = t.append("xhtml:div"), n2 = e2.label, i = e2.isNode ? "nodeLabel" : "edgeLabel", r = a.append("span");
  return r.html(n2), ft(r, e2.labelStyle), r.attr("class", i), ft(a, e2.labelStyle), a.style("display", "inline-block"), a.style("white-space", "nowrap"), a.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
_(jt, "addHtmlLabel");
var sr = _(async (e2, t, a, n2) => {
  let i = e2 || "";
  if (typeof i == "object" && (i = i[0]), Ke(fe().flowchart.htmlLabels)) {
    i = i.replace(/\\n|\n/g, "<br />"), ut.debug("vertexText" + i);
    const r = await yv(ca(i)), s = {
      isNode: n2,
      label: r,
      labelStyle: t.replace("fill:", "color:")
    };
    return jt(s);
  } else {
    const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
    r.setAttribute("style", t.replace("color:", "fill:"));
    let s = [];
    typeof i == "string" ? s = i.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(i) ? s = i : s = [];
    for (const l2 of s) {
      const o = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), o.setAttribute("dy", "1em"), o.setAttribute("x", "0"), a ? o.setAttribute("class", "title-row") : o.setAttribute("class", "row"), o.textContent = l2.trim(), r.appendChild(o);
    }
    return r;
  }
}, "createLabel");
var K = sr;
var ir = _((e2, t, a, n2, i) => {
  t.arrowTypeStart && It(e2, "start", t.arrowTypeStart, a, n2, i), t.arrowTypeEnd && It(e2, "end", t.arrowTypeEnd, a, n2, i);
}, "addEdgeMarkers");
var nr = {
  arrow_cross: "cross",
  arrow_point: "point",
  arrow_barb: "barb",
  arrow_circle: "circle",
  aggregation: "aggregation",
  extension: "extension",
  composition: "composition",
  dependency: "dependency",
  lollipop: "lollipop"
};
var It = _((e2, t, a, n2, i, r) => {
  const s = nr[a];
  if (!s) {
    ut.warn(`Unknown arrow type: ${a}`);
    return;
  }
  const l2 = t === "start" ? "Start" : "End";
  e2.attr(`marker-${t}`, `url(${n2}#${i}_${r}-${s}${l2})`);
}, "addEdgeMarker");
var wt = {};
var M = {};
var lr = _(async (e2, t) => {
  const a = fe(), n2 = Ke(a.flowchart.htmlLabels), i = t.labelType === "markdown" ? fs(
    e2,
    t.label,
    {
      style: t.labelStyle,
      useHtmlLabels: n2,
      addSvgBackground: true
    },
    a
  ) : await K(t.label, t.labelStyle), r = e2.insert("g").attr("class", "edgeLabel"), s = r.insert("g").attr("class", "label");
  s.node().appendChild(i);
  let l2 = i.getBBox();
  if (n2) {
    const u = i.children[0], h = ae(i);
    l2 = u.getBoundingClientRect(), h.attr("width", l2.width), h.attr("height", l2.height);
  }
  s.attr("transform", "translate(" + -l2.width / 2 + ", " + -l2.height / 2 + ")"), wt[t.id] = r, t.width = l2.width, t.height = l2.height;
  let o;
  if (t.startLabelLeft) {
    const u = await K(t.startLabelLeft, t.labelStyle), h = e2.insert("g").attr("class", "edgeTerminals"), x = h.insert("g").attr("class", "inner");
    o = x.node().appendChild(u);
    const f = u.getBBox();
    x.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), M[t.id] || (M[t.id] = {}), M[t.id].startLeft = h, tt(o, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const u = await K(t.startLabelRight, t.labelStyle), h = e2.insert("g").attr("class", "edgeTerminals"), x = h.insert("g").attr("class", "inner");
    o = h.node().appendChild(u), x.node().appendChild(u);
    const f = u.getBBox();
    x.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), M[t.id] || (M[t.id] = {}), M[t.id].startRight = h, tt(o, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const u = await K(t.endLabelLeft, t.labelStyle), h = e2.insert("g").attr("class", "edgeTerminals"), x = h.insert("g").attr("class", "inner");
    o = x.node().appendChild(u);
    const f = u.getBBox();
    x.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), h.node().appendChild(u), M[t.id] || (M[t.id] = {}), M[t.id].endLeft = h, tt(o, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const u = await K(t.endLabelRight, t.labelStyle), h = e2.insert("g").attr("class", "edgeTerminals"), x = h.insert("g").attr("class", "inner");
    o = x.node().appendChild(u);
    const f = u.getBBox();
    x.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), h.node().appendChild(u), M[t.id] || (M[t.id] = {}), M[t.id].endRight = h, tt(o, t.endLabelRight);
  }
  return i;
}, "insertEdgeLabel");
function tt(e2, t) {
  fe().flowchart.htmlLabels && e2 && (e2.style.width = t.length * 9 + "px", e2.style.height = "12px");
}
_(tt, "setTerminalWidth");
var or = _((e2, t) => {
  ut.debug("Moving label abc88 ", e2.id, e2.label, wt[e2.id], t);
  let a = t.updatedPath ? t.updatedPath : t.originalPath;
  const n2 = fe(), { subGraphTitleTotalMargin: i } = Om(n2);
  if (e2.label) {
    const r = wt[e2.id];
    let s = e2.x, l2 = e2.y;
    if (a) {
      const o = Wn.calcLabelPosition(a);
      ut.debug(
        "Moving label " + e2.label + " from (",
        s,
        ",",
        l2,
        ") to (",
        o.x,
        ",",
        o.y,
        ") abc88"
      ), t.updatedPath && (s = o.x, l2 = o.y);
    }
    r.attr("transform", `translate(${s}, ${l2 + i / 2})`);
  }
  if (e2.startLabelLeft) {
    const r = M[e2.id].startLeft;
    let s = e2.x, l2 = e2.y;
    if (a) {
      const o = Wn.calcTerminalLabelPosition(e2.arrowTypeStart ? 10 : 0, "start_left", a);
      s = o.x, l2 = o.y;
    }
    r.attr("transform", `translate(${s}, ${l2})`);
  }
  if (e2.startLabelRight) {
    const r = M[e2.id].startRight;
    let s = e2.x, l2 = e2.y;
    if (a) {
      const o = Wn.calcTerminalLabelPosition(
        e2.arrowTypeStart ? 10 : 0,
        "start_right",
        a
      );
      s = o.x, l2 = o.y;
    }
    r.attr("transform", `translate(${s}, ${l2})`);
  }
  if (e2.endLabelLeft) {
    const r = M[e2.id].endLeft;
    let s = e2.x, l2 = e2.y;
    if (a) {
      const o = Wn.calcTerminalLabelPosition(e2.arrowTypeEnd ? 10 : 0, "end_left", a);
      s = o.x, l2 = o.y;
    }
    r.attr("transform", `translate(${s}, ${l2})`);
  }
  if (e2.endLabelRight) {
    const r = M[e2.id].endRight;
    let s = e2.x, l2 = e2.y;
    if (a) {
      const o = Wn.calcTerminalLabelPosition(e2.arrowTypeEnd ? 10 : 0, "end_right", a);
      s = o.x, l2 = o.y;
    }
    r.attr("transform", `translate(${s}, ${l2})`);
  }
}, "positionEdgeLabel");
var cr = _((e2, t) => {
  const a = e2.x, n2 = e2.y, i = Math.abs(t.x - a), r = Math.abs(t.y - n2), s = e2.width / 2, l2 = e2.height / 2;
  return i >= s || r >= l2;
}, "outsideNode");
var dr = _((e2, t, a) => {
  ut.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${e2.x} y:${e2.y} w:${e2.width} h:${e2.height}`);
  const n2 = e2.x, i = e2.y, r = Math.abs(n2 - a.x), s = e2.width / 2;
  let l2 = a.x < t.x ? s - r : s + r;
  const o = e2.height / 2, u = Math.abs(t.y - a.y), h = Math.abs(t.x - a.x);
  if (Math.abs(i - t.y) * s > Math.abs(n2 - t.x) * o) {
    let x = a.y < t.y ? t.y - o - i : i - o - t.y;
    l2 = h * x / u;
    const f = {
      x: a.x < t.x ? a.x + l2 : a.x - h + l2,
      y: a.y < t.y ? a.y + u - x : a.y - u + x
    };
    return l2 === 0 && (f.x = t.x, f.y = t.y), h === 0 && (f.x = t.x), u === 0 && (f.y = t.y), ut.debug(`abc89 topp/bott calc, Q ${u}, q ${x}, R ${h}, r ${l2}`, f), f;
  } else {
    a.x < t.x ? l2 = t.x - s - n2 : l2 = n2 - s - t.x;
    let x = u * l2 / h, f = a.x < t.x ? a.x + h - l2 : a.x - h + l2, b = a.y < t.y ? a.y + x : a.y - x;
    return ut.debug(`sides calc abc89, Q ${u}, q ${x}, R ${h}, r ${l2}`, { _x: f, _y: b }), l2 === 0 && (f = t.x, b = t.y), h === 0 && (f = t.x), u === 0 && (b = t.y), { x: f, y: b };
  }
}, "intersection");
var Bt = _((e2, t) => {
  ut.debug("abc88 cutPathAtIntersect", e2, t);
  let a = [], n2 = e2[0], i = false;
  return e2.forEach((r) => {
    if (!cr(t, r) && !i) {
      const s = dr(t, n2, r);
      let l2 = false;
      a.forEach((o) => {
        l2 = l2 || o.x === s.x && o.y === s.y;
      }), a.some((o) => o.x === s.x && o.y === s.y) || a.push(s), i = true;
    } else
      n2 = r, i || a.push(r);
  }), a;
}, "cutPathAtIntersect");
var hr = _(function(e2, t, a, n2, i, r, s) {
  let l2 = a.points;
  ut.debug("abc88 InsertEdge: edge=", a, "e=", t);
  let o = false;
  const u = r.node(t.v);
  var h = r.node(t.w);
  (h == null ? void 0 : h.intersect) && (u == null ? void 0 : u.intersect) && (l2 = l2.slice(1, a.points.length - 1), l2.unshift(u.intersect(l2[0])), l2.push(h.intersect(l2[l2.length - 1]))), a.toCluster && (ut.debug("to cluster abc88", n2[a.toCluster]), l2 = Bt(a.points, n2[a.toCluster].node), o = true), a.fromCluster && (ut.debug("from cluster abc88", n2[a.fromCluster]), l2 = Bt(l2.reverse(), n2[a.fromCluster].node).reverse(), o = true);
  const x = l2.filter((c) => !Number.isNaN(c.y));
  let f = Nh;
  a.curve && (i === "graph" || i === "flowchart") && (f = a.curve);
  const { x: b, y: L } = rj(a), S = EU().x(b).y(L).curve(f);
  let k;
  switch (a.thickness) {
    case "normal":
      k = "edge-thickness-normal";
      break;
    case "thick":
      k = "edge-thickness-thick";
      break;
    case "invisible":
      k = "edge-thickness-thick";
      break;
    default:
      k = "";
  }
  switch (a.pattern) {
    case "solid":
      k += " edge-pattern-solid";
      break;
    case "dotted":
      k += " edge-pattern-dotted";
      break;
    case "dashed":
      k += " edge-pattern-dashed";
      break;
  }
  const T = e2.append("path").attr("d", S(x)).attr("id", a.id).attr("class", " " + k + (a.classes ? " " + a.classes : "")).attr("style", a.style);
  let D = "";
  (fe().flowchart.arrowMarkerAbsolute || fe().state.arrowMarkerAbsolute) && (D = H6(true)), ir(T, a, D, s, i);
  let v = {};
  return o && (v.updatedPath = l2), v.originalPath = a.points, v;
}, "insertEdge");
var gr = _((e2) => {
  const t = /* @__PURE__ */ new Set();
  for (const a of e2)
    switch (a) {
      case "x":
        t.add("right"), t.add("left");
        break;
      case "y":
        t.add("up"), t.add("down");
        break;
      default:
        t.add(a);
        break;
    }
  return t;
}, "expandAndDeduplicateDirections");
var ur = _((e2, t, a) => {
  const n2 = gr(e2), i = 2, r = t.height + 2 * a.padding, s = r / i, l2 = t.width + 2 * s + a.padding, o = a.padding / 2;
  return n2.has("right") && n2.has("left") && n2.has("up") && n2.has("down") ? [
    // Bottom
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: l2 / 2, y: 2 * o },
    { x: l2 - s, y: 0 },
    { x: l2, y: 0 },
    // Right
    { x: l2, y: -r / 3 },
    { x: l2 + 2 * o, y: -r / 2 },
    { x: l2, y: -2 * r / 3 },
    { x: l2, y: -r },
    // Top
    { x: l2 - s, y: -r },
    { x: l2 / 2, y: -r - 2 * o },
    { x: s, y: -r },
    // Left
    { x: 0, y: -r },
    { x: 0, y: -2 * r / 3 },
    { x: -2 * o, y: -r / 2 },
    { x: 0, y: -r / 3 }
  ] : n2.has("right") && n2.has("left") && n2.has("up") ? [
    { x: s, y: 0 },
    { x: l2 - s, y: 0 },
    { x: l2, y: -r / 2 },
    { x: l2 - s, y: -r },
    { x: s, y: -r },
    { x: 0, y: -r / 2 }
  ] : n2.has("right") && n2.has("left") && n2.has("down") ? [
    { x: 0, y: 0 },
    { x: s, y: -r },
    { x: l2 - s, y: -r },
    { x: l2, y: 0 }
  ] : n2.has("right") && n2.has("up") && n2.has("down") ? [
    { x: 0, y: 0 },
    { x: l2, y: -s },
    { x: l2, y: -r + s },
    { x: 0, y: -r }
  ] : n2.has("left") && n2.has("up") && n2.has("down") ? [
    { x: l2, y: 0 },
    { x: 0, y: -s },
    { x: 0, y: -r + s },
    { x: l2, y: -r }
  ] : n2.has("right") && n2.has("left") ? [
    { x: s, y: 0 },
    { x: s, y: -o },
    { x: l2 - s, y: -o },
    { x: l2 - s, y: 0 },
    { x: l2, y: -r / 2 },
    { x: l2 - s, y: -r },
    { x: l2 - s, y: -r + o },
    { x: s, y: -r + o },
    { x: s, y: -r },
    { x: 0, y: -r / 2 }
  ] : n2.has("up") && n2.has("down") ? [
    // Bottom center
    { x: l2 / 2, y: 0 },
    // Left pont of bottom arrow
    { x: 0, y: -o },
    { x: s, y: -o },
    // Left top over vertical section
    { x: s, y: -r + o },
    { x: 0, y: -r + o },
    // Top of arrow
    { x: l2 / 2, y: -r },
    { x: l2, y: -r + o },
    // Top of right vertical bar
    { x: l2 - s, y: -r + o },
    { x: l2 - s, y: -o },
    { x: l2, y: -o }
  ] : n2.has("right") && n2.has("up") ? [
    { x: 0, y: 0 },
    { x: l2, y: -s },
    { x: 0, y: -r }
  ] : n2.has("right") && n2.has("down") ? [
    { x: 0, y: 0 },
    { x: l2, y: 0 },
    { x: 0, y: -r }
  ] : n2.has("left") && n2.has("up") ? [
    { x: l2, y: 0 },
    { x: 0, y: -s },
    { x: l2, y: -r }
  ] : n2.has("left") && n2.has("down") ? [
    { x: l2, y: 0 },
    { x: 0, y: 0 },
    { x: l2, y: -r }
  ] : n2.has("right") ? [
    { x: s, y: -o },
    { x: s, y: -o },
    { x: l2 - s, y: -o },
    { x: l2 - s, y: 0 },
    { x: l2, y: -r / 2 },
    { x: l2 - s, y: -r },
    { x: l2 - s, y: -r + o },
    // top left corner of arrow
    { x: s, y: -r + o },
    { x: s, y: -r + o }
  ] : n2.has("left") ? [
    { x: s, y: 0 },
    { x: s, y: -o },
    // Two points, the right corners
    { x: l2 - s, y: -o },
    { x: l2 - s, y: -r + o },
    { x: s, y: -r + o },
    { x: s, y: -r },
    { x: 0, y: -r / 2 }
  ] : n2.has("up") ? [
    // Bottom center
    { x: s, y: -o },
    // Left top over vertical section
    { x: s, y: -r + o },
    { x: 0, y: -r + o },
    // Top of arrow
    { x: l2 / 2, y: -r },
    { x: l2, y: -r + o },
    // Top of right vertical bar
    { x: l2 - s, y: -r + o },
    { x: l2 - s, y: -o }
  ] : n2.has("down") ? [
    // Bottom center
    { x: l2 / 2, y: 0 },
    // Left pont of bottom arrow
    { x: 0, y: -o },
    { x: s, y: -o },
    // Left top over vertical section
    { x: s, y: -r + o },
    { x: l2 - s, y: -r + o },
    { x: l2 - s, y: -o },
    { x: l2, y: -o }
  ] : [{ x: 0, y: 0 }];
}, "getArrowPoints");
function Ht(e2, t) {
  return e2.intersect(t);
}
_(Ht, "intersectNode");
var yr = Ht;
function Zt(e2, t, a, n2) {
  var i = e2.x, r = e2.y, s = i - n2.x, l2 = r - n2.y, o = Math.sqrt(t * t * l2 * l2 + a * a * s * s), u = Math.abs(t * a * s / o);
  n2.x < i && (u = -u);
  var h = Math.abs(t * a * l2 / o);
  return n2.y < r && (h = -h), { x: i + u, y: r + h };
}
_(Zt, "intersectEllipse");
var qt = Zt;
function Vt(e2, t, a) {
  return qt(e2, t, t, a);
}
_(Vt, "intersectCircle");
var pr = Vt;
function Qt(e2, t, a, n2) {
  var i, r, s, l2, o, u, h, x, f, b, L, S, k, T, D;
  if (i = t.y - e2.y, s = e2.x - t.x, o = t.x * e2.y - e2.x * t.y, f = i * a.x + s * a.y + o, b = i * n2.x + s * n2.y + o, !(f !== 0 && b !== 0 && mt(f, b)) && (r = n2.y - a.y, l2 = a.x - n2.x, u = n2.x * a.y - a.x * n2.y, h = r * e2.x + l2 * e2.y + u, x = r * t.x + l2 * t.y + u, !(h !== 0 && x !== 0 && mt(h, x)) && (L = i * l2 - r * s, L !== 0)))
    return S = Math.abs(L / 2), k = s * u - l2 * o, T = k < 0 ? (k - S) / L : (k + S) / L, k = r * o - i * u, D = k < 0 ? (k - S) / L : (k + S) / L, { x: T, y: D };
}
_(Qt, "intersectLine");
function mt(e2, t) {
  return e2 * t > 0;
}
_(mt, "sameSign");
var xr = Qt;
var br = Gt;
function Gt(e2, t, a) {
  var n2 = e2.x, i = e2.y, r = [], s = Number.POSITIVE_INFINITY, l2 = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(L) {
    s = Math.min(s, L.x), l2 = Math.min(l2, L.y);
  }) : (s = Math.min(s, t.x), l2 = Math.min(l2, t.y));
  for (var o = n2 - e2.width / 2 - s, u = i - e2.height / 2 - l2, h = 0; h < t.length; h++) {
    var x = t[h], f = t[h < t.length - 1 ? h + 1 : 0], b = xr(
      e2,
      a,
      { x: o + x.x, y: u + x.y },
      { x: o + f.x, y: u + f.y }
    );
    b && r.push(b);
  }
  return r.length ? (r.length > 1 && r.sort(function(L, S) {
    var k = L.x - a.x, T = L.y - a.y, D = Math.sqrt(k * k + T * T), v = S.x - a.x, c = S.y - a.y, p = Math.sqrt(v * v + c * c);
    return D < p ? -1 : D === p ? 0 : 1;
  }), r[0]) : e2;
}
_(Gt, "intersectPolygon");
var fr = _((e2, t) => {
  var a = e2.x, n2 = e2.y, i = t.x - a, r = t.y - n2, s = e2.width / 2, l2 = e2.height / 2, o, u;
  return Math.abs(r) * s > Math.abs(i) * l2 ? (r < 0 && (l2 = -l2), o = r === 0 ? 0 : l2 * i / r, u = l2) : (i < 0 && (s = -s), o = s, u = i === 0 ? 0 : s * r / i), { x: a + o, y: n2 + u };
}, "intersectRect");
var wr = fr;
var N = {
  node: yr,
  circle: pr,
  ellipse: qt,
  polygon: br,
  rect: wr
};
var R = _(async (e2, t, a, n2) => {
  const i = fe();
  let r;
  const s = t.useHtmlLabels || Ke(i.flowchart.htmlLabels);
  a ? r = a : r = "node default";
  const l2 = e2.insert("g").attr("class", r).attr("id", t.domId || t.id), o = l2.insert("g").attr("class", "label").attr("style", t.labelStyle);
  let u;
  t.labelText === void 0 ? u = "" : u = typeof t.labelText == "string" ? t.labelText : t.labelText[0];
  const h = o.node();
  let x;
  t.labelType === "markdown" ? x = fs(
    o,
    Zs(ca(u), i),
    {
      useHtmlLabels: s,
      width: t.width || i.flowchart.wrappingWidth,
      classes: "markdown-node-label"
    },
    i
  ) : x = h.appendChild(
    await K(
      Zs(ca(u), i),
      t.labelStyle,
      false,
      n2
    )
  );
  let f = x.getBBox();
  const b = t.padding / 2;
  if (Ke(i.flowchart.htmlLabels)) {
    const L = x.children[0], S = ae(x), k = L.getElementsByTagName("img");
    if (k) {
      const T = u.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...k].map(
          (D) => new Promise((v) => {
            function c() {
              if (D.style.display = "flex", D.style.flexDirection = "column", T) {
                const p = i.fontSize ? i.fontSize : window.getComputedStyle(document.body).fontSize, w = parseInt(p, 10) * 5 + "px";
                D.style.minWidth = w, D.style.maxWidth = w;
              } else
                D.style.width = "100%";
              v(D);
            }
            _(c, "setupImage"), setTimeout(() => {
              D.complete && c();
            }), D.addEventListener("error", c), D.addEventListener("load", c);
          })
        )
      );
    }
    f = L.getBoundingClientRect(), S.attr("width", f.width), S.attr("height", f.height);
  }
  return s ? o.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")") : o.attr("transform", "translate(0, " + -f.height / 2 + ")"), t.centerLabel && o.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), o.insert("rect", ":first-child"), { shapeSvg: l2, bbox: f, halfPadding: b, label: o };
}, "labelHelper");
var $ = _((e2, t) => {
  const a = t.node().getBBox();
  e2.width = a.width, e2.height = a.height;
}, "updateNodeBounds");
function F(e2, t, a, n2) {
  return e2.insert("polygon", ":first-child").attr(
    "points",
    n2.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + a / 2 + ")");
}
_(F, "insertPolygonShape");
var mr = _(async (e2, t) => {
  t.useHtmlLabels || fe().flowchart.htmlLabels || (t.centerLabel = true);
  const { shapeSvg: a, bbox: n2, halfPadding: i } = await R(
    e2,
    t,
    "node " + t.classes,
    true
  );
  ut.info("Classes = ", t.classes);
  const r = a.insert("rect", ":first-child");
  return r.attr("rx", t.rx).attr("ry", t.ry).attr("x", -n2.width / 2 - i).attr("y", -n2.height / 2 - i).attr("width", n2.width + t.padding).attr("height", n2.height + t.padding), $(t, r), t.intersect = function(s) {
    return N.rect(t, s);
  }, a;
}, "note");
var Lr = mr;
var Ot = _((e2) => e2 ? " " + e2 : "", "formatClass");
var W = _((e2, t) => `${t || "node default"}${Ot(e2.classes)} ${Ot(
  e2.class
)}`, "getClassesFromNode");
var zt = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.width + t.padding, r = n2.height + t.padding, s = i + r, l2 = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  ut.info("Question main (Circle)");
  const o = F(a, s, s, l2);
  return o.attr("style", t.style), $(t, o), t.intersect = function(u) {
    return ut.warn("Intersect called"), N.polygon(t, l2, u);
  }, a;
}, "question");
var Sr = _((e2, t) => {
  const a = e2.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n2 = 28, i = [
    { x: 0, y: n2 / 2 },
    { x: n2 / 2, y: 0 },
    { x: 0, y: -n2 / 2 },
    { x: -n2 / 2, y: 0 }
  ];
  return a.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(r) {
      return r.x + "," + r.y;
    }).join(" ")
  ).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), t.width = 28, t.height = 28, t.intersect = function(r) {
    return N.circle(t, 14, r);
  }, a;
}, "choice");
var kr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = 4, r = n2.height + t.padding, s = r / i, l2 = n2.width + 2 * s + t.padding, o = [
    { x: s, y: 0 },
    { x: l2 - s, y: 0 },
    { x: l2, y: -r / 2 },
    { x: l2 - s, y: -r },
    { x: s, y: -r },
    { x: 0, y: -r / 2 }
  ], u = F(a, l2, r, o);
  return u.attr("style", t.style), $(t, u), t.intersect = function(h) {
    return N.polygon(t, o, h);
  }, a;
}, "hexagon");
var _r = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(e2, t, void 0, true), i = 2, r = n2.height + 2 * t.padding, s = r / i, l2 = n2.width + 2 * s + t.padding, o = ur(t.directions, n2, t), u = F(a, l2, r, o);
  return u.attr("style", t.style), $(t, u), t.intersect = function(h) {
    return N.polygon(t, o, h);
  }, a;
}, "block_arrow");
var Er = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.width + t.padding, r = n2.height + t.padding, s = [
    { x: -r / 2, y: 0 },
    { x: i, y: 0 },
    { x: i, y: -r },
    { x: -r / 2, y: -r },
    { x: 0, y: -r / 2 }
  ];
  return F(a, i, r, s).attr("style", t.style), t.width = i + r, t.height = r, t.intersect = function(l2) {
    return N.polygon(t, s, l2);
  }, a;
}, "rect_left_inv_arrow");
var Dr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(e2, t, W(t), true), i = n2.width + t.padding, r = n2.height + t.padding, s = [
    { x: -2 * r / 6, y: 0 },
    { x: i - r / 6, y: 0 },
    { x: i + 2 * r / 6, y: -r },
    { x: r / 6, y: -r }
  ], l2 = F(a, i, r, s);
  return l2.attr("style", t.style), $(t, l2), t.intersect = function(o) {
    return N.polygon(t, s, o);
  }, a;
}, "lean_right");
var vr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.width + t.padding, r = n2.height + t.padding, s = [
    { x: 2 * r / 6, y: 0 },
    { x: i + r / 6, y: 0 },
    { x: i - 2 * r / 6, y: -r },
    { x: -r / 6, y: -r }
  ], l2 = F(a, i, r, s);
  return l2.attr("style", t.style), $(t, l2), t.intersect = function(o) {
    return N.polygon(t, s, o);
  }, a;
}, "lean_left");
var Nr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.width + t.padding, r = n2.height + t.padding, s = [
    { x: -2 * r / 6, y: 0 },
    { x: i + 2 * r / 6, y: 0 },
    { x: i - r / 6, y: -r },
    { x: r / 6, y: -r }
  ], l2 = F(a, i, r, s);
  return l2.attr("style", t.style), $(t, l2), t.intersect = function(o) {
    return N.polygon(t, s, o);
  }, a;
}, "trapezoid");
var $r = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.width + t.padding, r = n2.height + t.padding, s = [
    { x: r / 6, y: 0 },
    { x: i - r / 6, y: 0 },
    { x: i + 2 * r / 6, y: -r },
    { x: -2 * r / 6, y: -r }
  ], l2 = F(a, i, r, s);
  return l2.attr("style", t.style), $(t, l2), t.intersect = function(o) {
    return N.polygon(t, s, o);
  }, a;
}, "inv_trapezoid");
var Tr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.width + t.padding, r = n2.height + t.padding, s = [
    { x: 0, y: 0 },
    { x: i + r / 2, y: 0 },
    { x: i, y: -r / 2 },
    { x: i + r / 2, y: -r },
    { x: 0, y: -r }
  ], l2 = F(a, i, r, s);
  return l2.attr("style", t.style), $(t, l2), t.intersect = function(o) {
    return N.polygon(t, s, o);
  }, a;
}, "rect_right_inv_arrow");
var Cr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.width + t.padding, r = i / 2, s = r / (2.5 + i / 50), l2 = n2.height + s + t.padding, o = "M 0," + s + " a " + r + "," + s + " 0,0,0 " + i + " 0 a " + r + "," + s + " 0,0,0 " + -i + " 0 l 0," + l2 + " a " + r + "," + s + " 0,0,0 " + i + " 0 l 0," + -l2, u = a.attr("label-offset-y", s).insert("path", ":first-child").attr("style", t.style).attr("d", o).attr("transform", "translate(" + -i / 2 + "," + -(l2 / 2 + s) + ")");
  return $(t, u), t.intersect = function(h) {
    const x = N.rect(t, h), f = x.x - t.x;
    if (r != 0 && (Math.abs(f) < t.width / 2 || Math.abs(f) == t.width / 2 && Math.abs(x.y - t.y) > t.height / 2 - s)) {
      let b = s * s * (1 - f * f / (r * r));
      b != 0 && (b = Math.sqrt(b)), b = s - b, h.y - t.y > 0 && (b = -b), x.y += b;
    }
    return x;
  }, a;
}, "cylinder");
var Ir = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2, halfPadding: i } = await R(
    e2,
    t,
    "node " + t.classes + " " + t.class,
    true
  ), r = a.insert("rect", ":first-child"), s = t.positioned ? t.width : n2.width + t.padding, l2 = t.positioned ? t.height : n2.height + t.padding, o = t.positioned ? -s / 2 : -n2.width / 2 - i, u = t.positioned ? -l2 / 2 : -n2.height / 2 - i;
  if (r.attr("class", "basic label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", o).attr("y", u).attr("width", s).attr("height", l2), t.props) {
    const h = new Set(Object.keys(t.props));
    t.props.borders && (ct(r, t.props.borders, s, l2), h.delete("borders")), h.forEach((x) => {
      ut.warn(`Unknown node property ${x}`);
    });
  }
  return $(t, r), t.intersect = function(h) {
    return N.rect(t, h);
  }, a;
}, "rect");
var Br = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2, halfPadding: i } = await R(
    e2,
    t,
    "node " + t.classes,
    true
  ), r = a.insert("rect", ":first-child"), s = t.positioned ? t.width : n2.width + t.padding, l2 = t.positioned ? t.height : n2.height + t.padding, o = t.positioned ? -s / 2 : -n2.width / 2 - i, u = t.positioned ? -l2 / 2 : -n2.height / 2 - i;
  if (r.attr("class", "basic cluster composite label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", o).attr("y", u).attr("width", s).attr("height", l2), t.props) {
    const h = new Set(Object.keys(t.props));
    t.props.borders && (ct(r, t.props.borders, s, l2), h.delete("borders")), h.forEach((x) => {
      ut.warn(`Unknown node property ${x}`);
    });
  }
  return $(t, r), t.intersect = function(h) {
    return N.rect(t, h);
  }, a;
}, "composite");
var Or = _(async (e2, t) => {
  const { shapeSvg: a } = await R(e2, t, "label", true);
  ut.trace("Classes = ", t.class);
  const n2 = a.insert("rect", ":first-child"), i = 0, r = 0;
  if (n2.attr("width", i).attr("height", r), a.attr("class", "label edgeLabel"), t.props) {
    const s = new Set(Object.keys(t.props));
    t.props.borders && (ct(n2, t.props.borders, i, r), s.delete("borders")), s.forEach((l2) => {
      ut.warn(`Unknown node property ${l2}`);
    });
  }
  return $(t, n2), t.intersect = function(s) {
    return N.rect(t, s);
  }, a;
}, "labelRect");
function ct(e2, t, a, n2) {
  const i = [], r = _((l2) => {
    i.push(l2, 0);
  }, "addBorder"), s = _((l2) => {
    i.push(0, l2);
  }, "skipBorder");
  t.includes("t") ? (ut.debug("add top border"), r(a)) : s(a), t.includes("r") ? (ut.debug("add right border"), r(n2)) : s(n2), t.includes("b") ? (ut.debug("add bottom border"), r(a)) : s(a), t.includes("l") ? (ut.debug("add left border"), r(n2)) : s(n2), e2.attr("stroke-dasharray", i.join(" "));
}
_(ct, "applyNodePropertyBorders");
var zr = _(async (e2, t) => {
  let a;
  t.classes ? a = "node " + t.classes : a = "node default";
  const n2 = e2.insert("g").attr("class", a).attr("id", t.domId || t.id), i = n2.insert("rect", ":first-child"), r = n2.insert("line"), s = n2.insert("g").attr("class", "label"), l2 = t.labelText.flat ? t.labelText.flat() : t.labelText;
  let o = "";
  typeof l2 == "object" ? o = l2[0] : o = l2, ut.info("Label text abc79", o, l2, typeof l2 == "object");
  const u = s.node().appendChild(await K(o, t.labelStyle, true, true));
  let h = { width: 0, height: 0 };
  if (Ke(fe().flowchart.htmlLabels)) {
    const S = u.children[0], k = ae(u);
    h = S.getBoundingClientRect(), k.attr("width", h.width), k.attr("height", h.height);
  }
  ut.info("Text 2", l2);
  const x = l2.slice(1, l2.length);
  let f = u.getBBox();
  const b = s.node().appendChild(
    await K(
      x.join ? x.join("<br/>") : x,
      t.labelStyle,
      true,
      true
    )
  );
  if (Ke(fe().flowchart.htmlLabels)) {
    const S = b.children[0], k = ae(b);
    h = S.getBoundingClientRect(), k.attr("width", h.width), k.attr("height", h.height);
  }
  const L = t.padding / 2;
  return ae(b).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width > f.width ? 0 : (f.width - h.width) / 2) + ", " + (f.height + L + 5) + ")"
  ), ae(u).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width < f.width ? 0 : -(f.width - h.width) / 2) + ", 0)"
  ), h = s.node().getBBox(), s.attr(
    "transform",
    "translate(" + -h.width / 2 + ", " + (-h.height / 2 - L + 3) + ")"
  ), i.attr("class", "outer title-state").attr("x", -h.width / 2 - L).attr("y", -h.height / 2 - L).attr("width", h.width + t.padding).attr("height", h.height + t.padding), r.attr("class", "divider").attr("x1", -h.width / 2 - L).attr("x2", h.width / 2 + L).attr("y1", -h.height / 2 - L + f.height + L).attr("y2", -h.height / 2 - L + f.height + L), $(t, i), t.intersect = function(S) {
    return N.rect(t, S);
  }, n2;
}, "rectWithTitle");
var Rr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.height + t.padding, r = n2.width + i / 4 + t.padding, s = a.insert("rect", ":first-child").attr("style", t.style).attr("rx", i / 2).attr("ry", i / 2).attr("x", -r / 2).attr("y", -i / 2).attr("width", r).attr("height", i);
  return $(t, s), t.intersect = function(l2) {
    return N.rect(t, l2);
  }, a;
}, "stadium");
var Ar = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2, halfPadding: i } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), r = a.insert("circle", ":first-child");
  return r.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n2.width / 2 + i).attr("width", n2.width + t.padding).attr("height", n2.height + t.padding), ut.info("Circle main"), $(t, r), t.intersect = function(s) {
    return ut.info("Circle intersect", t, n2.width / 2 + i, s), N.circle(t, n2.width / 2 + i, s);
  }, a;
}, "circle");
var Mr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2, halfPadding: i } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), r = 5, s = a.insert("g", ":first-child"), l2 = s.insert("circle"), o = s.insert("circle");
  return s.attr("class", t.class), l2.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n2.width / 2 + i + r).attr("width", n2.width + t.padding + r * 2).attr("height", n2.height + t.padding + r * 2), o.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n2.width / 2 + i).attr("width", n2.width + t.padding).attr("height", n2.height + t.padding), ut.info("DoubleCircle main"), $(t, l2), t.intersect = function(u) {
    return ut.info("DoubleCircle intersect", t, n2.width / 2 + i + r, u), N.circle(t, n2.width / 2 + i + r, u);
  }, a;
}, "doublecircle");
var Pr = _(async (e2, t) => {
  const { shapeSvg: a, bbox: n2 } = await R(
    e2,
    t,
    W(t, void 0),
    true
  ), i = n2.width + t.padding, r = n2.height + t.padding, s = [
    { x: 0, y: 0 },
    { x: i, y: 0 },
    { x: i, y: -r },
    { x: 0, y: -r },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: i + 8, y: 0 },
    { x: i + 8, y: -r },
    { x: -8, y: -r },
    { x: -8, y: 0 }
  ], l2 = F(a, i, r, s);
  return l2.attr("style", t.style), $(t, l2), t.intersect = function(o) {
    return N.polygon(t, s, o);
  }, a;
}, "subroutine");
var Yr = _((e2, t) => {
  const a = e2.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n2 = a.insert("circle", ":first-child");
  return n2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), $(t, n2), t.intersect = function(i) {
    return N.circle(t, 7, i);
  }, a;
}, "start");
var Rt = _((e2, t, a) => {
  const n2 = e2.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let i = 70, r = 10;
  a === "LR" && (i = 10, r = 70);
  const s = n2.append("rect").attr("x", -1 * i / 2).attr("y", -1 * r / 2).attr("width", i).attr("height", r).attr("class", "fork-join");
  return $(t, s), t.height = t.height + t.padding / 2, t.width = t.width + t.padding / 2, t.intersect = function(l2) {
    return N.rect(t, l2);
  }, n2;
}, "forkJoin");
var Wr = _((e2, t) => {
  const a = e2.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n2 = a.insert("circle", ":first-child"), i = a.insert("circle", ":first-child");
  return i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), n2.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), $(t, i), t.intersect = function(r) {
    return N.circle(t, 7, r);
  }, a;
}, "end");
var Xr = _(async (e2, t) => {
  var _a2;
  const a = t.padding / 2, n2 = 4, i = 8;
  let r;
  t.classes ? r = "node " + t.classes : r = "node default";
  const s = e2.insert("g").attr("class", r).attr("id", t.domId || t.id), l2 = s.insert("rect", ":first-child"), o = s.insert("line"), u = s.insert("line");
  let h = 0, x = n2;
  const f = s.insert("g").attr("class", "label");
  let b = 0;
  const L = (_a2 = t.classData.annotations) == null ? void 0 : _a2[0], S = t.classData.annotations[0] ? "«" + t.classData.annotations[0] + "»" : "", k = f.node().appendChild(await K(S, t.labelStyle, true, true));
  let T = k.getBBox();
  if (Ke(fe().flowchart.htmlLabels)) {
    const d = k.children[0], _2 = ae(k);
    T = d.getBoundingClientRect(), _2.attr("width", T.width), _2.attr("height", T.height);
  }
  t.classData.annotations[0] && (x += T.height + n2, h += T.width);
  let D = t.classData.label;
  t.classData.type !== void 0 && t.classData.type !== "" && (fe().flowchart.htmlLabels ? D += "&lt;" + t.classData.type + "&gt;" : D += "<" + t.classData.type + ">");
  const v = f.node().appendChild(await K(D, t.labelStyle, true, true));
  ae(v).attr("class", "classTitle");
  let c = v.getBBox();
  if (Ke(fe().flowchart.htmlLabels)) {
    const d = v.children[0], _2 = ae(v);
    c = d.getBoundingClientRect(), _2.attr("width", c.width), _2.attr("height", c.height);
  }
  x += c.height + n2, c.width > h && (h = c.width);
  const p = [];
  t.classData.members.forEach(async (d) => {
    const _2 = d.getDisplayDetails();
    let y2 = _2.displayText;
    fe().flowchart.htmlLabels && (y2 = y2.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const A = f.node().appendChild(
      await K(
        y2,
        _2.cssStyle ? _2.cssStyle : t.labelStyle,
        true,
        true
      )
    );
    let O = A.getBBox();
    if (Ke(fe().flowchart.htmlLabels)) {
      const q = A.children[0], j = ae(A);
      O = q.getBoundingClientRect(), j.attr("width", O.width), j.attr("height", O.height);
    }
    O.width > h && (h = O.width), x += O.height + n2, p.push(A);
  }), x += i;
  const w = [];
  if (t.classData.methods.forEach(async (d) => {
    const _2 = d.getDisplayDetails();
    let y2 = _2.displayText;
    fe().flowchart.htmlLabels && (y2 = y2.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const A = f.node().appendChild(
      await K(
        y2,
        _2.cssStyle ? _2.cssStyle : t.labelStyle,
        true,
        true
      )
    );
    let O = A.getBBox();
    if (Ke(fe().flowchart.htmlLabels)) {
      const q = A.children[0], j = ae(A);
      O = q.getBoundingClientRect(), j.attr("width", O.width), j.attr("height", O.height);
    }
    O.width > h && (h = O.width), x += O.height + n2, w.push(A);
  }), x += i, L) {
    let d = (h - T.width) / 2;
    ae(k).attr(
      "transform",
      "translate( " + (-1 * h / 2 + d) + ", " + -1 * x / 2 + ")"
    ), b = T.height + n2;
  }
  let E = (h - c.width) / 2;
  return ae(v).attr(
    "transform",
    "translate( " + (-1 * h / 2 + E) + ", " + (-1 * x / 2 + b) + ")"
  ), b += c.height + n2, o.attr("class", "divider").attr("x1", -h / 2 - a).attr("x2", h / 2 + a).attr("y1", -x / 2 - a + i + b).attr("y2", -x / 2 - a + i + b), b += i, p.forEach((d) => {
    ae(d).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * x / 2 + b + i / 2) + ")"
    );
    const _2 = d == null ? void 0 : d.getBBox();
    b += ((_2 == null ? void 0 : _2.height) ?? 0) + n2;
  }), b += i, u.attr("class", "divider").attr("x1", -h / 2 - a).attr("x2", h / 2 + a).attr("y1", -x / 2 - a + i + b).attr("y2", -x / 2 - a + i + b), b += i, w.forEach((d) => {
    ae(d).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * x / 2 + b) + ")"
    );
    const _2 = d == null ? void 0 : d.getBBox();
    b += ((_2 == null ? void 0 : _2.height) ?? 0) + n2;
  }), l2.attr("style", t.style).attr("class", "outer title-state").attr("x", -h / 2 - a).attr("y", -(x / 2) - a).attr("width", h + t.padding).attr("height", x + t.padding), $(t, l2), t.intersect = function(d) {
    return N.rect(t, d);
  }, s;
}, "class_box");
var At = {
  rhombus: zt,
  composite: Br,
  question: zt,
  rect: Ir,
  labelRect: Or,
  rectWithTitle: zr,
  choice: Sr,
  circle: Ar,
  doublecircle: Mr,
  stadium: Rr,
  hexagon: kr,
  block_arrow: _r,
  rect_left_inv_arrow: Er,
  lean_right: Dr,
  lean_left: vr,
  trapezoid: Nr,
  inv_trapezoid: $r,
  rect_right_inv_arrow: Tr,
  cylinder: Cr,
  start: Yr,
  end: Wr,
  note: Lr,
  subroutine: Pr,
  fork: Rt,
  join: Rt,
  class_box: Xr
};
var nt = {};
var Jt = _(async (e2, t, a) => {
  let n2, i;
  if (t.link) {
    let r;
    fe().securityLevel === "sandbox" ? r = "_top" : t.linkTarget && (r = t.linkTarget || "_blank"), n2 = e2.insert("svg:a").attr("xlink:href", t.link).attr("target", r), i = await At[t.shape](n2, t, a);
  } else
    i = await At[t.shape](e2, t, a), n2 = i;
  return t.tooltip && i.attr("title", t.tooltip), t.class && i.attr("class", "node default " + t.class), nt[t.id] = n2, t.haveCallback && nt[t.id].attr("class", nt[t.id].attr("class") + " clickable"), n2;
}, "insertNode");
var Kr = _((e2) => {
  const t = nt[e2.id];
  ut.trace(
    "Transforming node",
    e2.diff,
    e2,
    "translate(" + (e2.x - e2.width / 2 - 5) + ", " + e2.width / 2 + ")"
  );
  const a = 8, n2 = e2.diff || 0;
  return e2.clusterNode ? t.attr(
    "transform",
    "translate(" + (e2.x + n2 - e2.width / 2) + ", " + (e2.y - e2.height / 2 - a) + ")"
  ) : t.attr("transform", "translate(" + e2.x + ", " + e2.y + ")"), n2;
}, "positionNode");
function Et(e2, t, a = false) {
  var _a2, _b2, _c;
  const n2 = e2;
  let i = "default";
  (((_a2 = n2 == null ? void 0 : n2.classes) == null ? void 0 : _a2.length) || 0) > 0 && (i = ((n2 == null ? void 0 : n2.classes) ?? []).join(" ")), i = i + " flowchart-label";
  let r = 0, s = "", l2;
  switch (n2.type) {
    case "round":
      r = 5, s = "rect";
      break;
    case "composite":
      r = 0, s = "composite", l2 = 0;
      break;
    case "square":
      s = "rect";
      break;
    case "diamond":
      s = "question";
      break;
    case "hexagon":
      s = "hexagon";
      break;
    case "block_arrow":
      s = "block_arrow";
      break;
    case "odd":
      s = "rect_left_inv_arrow";
      break;
    case "lean_right":
      s = "lean_right";
      break;
    case "lean_left":
      s = "lean_left";
      break;
    case "trapezoid":
      s = "trapezoid";
      break;
    case "inv_trapezoid":
      s = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      s = "rect_left_inv_arrow";
      break;
    case "circle":
      s = "circle";
      break;
    case "ellipse":
      s = "ellipse";
      break;
    case "stadium":
      s = "stadium";
      break;
    case "subroutine":
      s = "subroutine";
      break;
    case "cylinder":
      s = "cylinder";
      break;
    case "group":
      s = "rect";
      break;
    case "doublecircle":
      s = "doublecircle";
      break;
    default:
      s = "rect";
  }
  const o = Hk((n2 == null ? void 0 : n2.styles) ?? []), u = n2.label, h = n2.size ?? { width: 0, height: 0, x: 0, y: 0 };
  return {
    labelStyle: o.labelStyle,
    shape: s,
    labelText: u,
    rx: r,
    ry: r,
    class: i,
    style: o.style,
    id: n2.id,
    directions: n2.directions,
    width: h.width,
    height: h.height,
    x: h.x,
    y: h.y,
    positioned: a,
    intersect: void 0,
    type: n2.type,
    padding: l2 ?? ((_c = (_b2 = Hr()) == null ? void 0 : _b2.block) == null ? void 0 : _c.padding) ?? 0
  };
}
_(Et, "getNodeFromBlock");
async function te(e2, t, a) {
  const n2 = Et(t, a, false);
  if (n2.type === "group")
    return;
  const i = Hr(), r = await Jt(e2, n2, { config: i }), s = r.node().getBBox(), l2 = a.getBlock(n2.id);
  l2.size = { width: s.width, height: s.height, x: 0, y: 0, node: r }, a.setBlock(l2), r.remove();
}
_(te, "calculateBlockSize");
async function ee(e2, t, a) {
  const n2 = Et(t, a, true);
  if (a.getBlock(n2.id).type !== "space") {
    const i = Hr();
    await Jt(e2, n2, { config: i }), t.intersect = n2 == null ? void 0 : n2.intersect, Kr(n2);
  }
}
_(ee, "insertBlockPositioned");
async function dt(e2, t, a, n2) {
  for (const i of t)
    await n2(e2, i, a), i.children && await dt(e2, i.children, a, n2);
}
_(dt, "performOperations");
async function re(e2, t, a) {
  await dt(e2, t, a, te);
}
_(re, "calculateBlockSizes");
async function ae2(e2, t, a) {
  await dt(e2, t, a, ee);
}
_(ae2, "insertBlocks");
async function se(e2, t, a, n2, i) {
  const r = new y({
    multigraph: true,
    compound: true
  });
  r.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8
  });
  for (const s of a)
    s.size && r.setNode(s.id, {
      width: s.size.width,
      height: s.size.height,
      intersect: s.intersect
    });
  for (const s of t)
    if (s.start && s.end) {
      const l2 = n2.getBlock(s.start), o = n2.getBlock(s.end);
      if ((l2 == null ? void 0 : l2.size) && (o == null ? void 0 : o.size)) {
        const u = l2.size, h = o.size, x = [
          { x: u.x, y: u.y },
          { x: u.x + (h.x - u.x) / 2, y: u.y + (h.y - u.y) / 2 },
          { x: h.x, y: h.y }
        ];
        hr(
          e2,
          { v: s.start, w: s.end, name: s.id },
          {
            ...s,
            arrowTypeEnd: s.arrowTypeEnd,
            arrowTypeStart: s.arrowTypeStart,
            points: x,
            classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
          },
          void 0,
          "block",
          r,
          i
        ), s.label && (await lr(e2, {
          ...s,
          label: s.label,
          labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
          arrowTypeEnd: s.arrowTypeEnd,
          arrowTypeStart: s.arrowTypeStart,
          points: x,
          classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
        }), or(
          { ...s, x: x[1].x, y: x[1].y },
          {
            originalPath: x
          }
        ));
      }
    }
}
_(se, "insertEdges");
var Ur = _(function(e2, t) {
  return t.db.getClasses();
}, "getClasses");
var Fr = _(async function(e2, t, a, n2) {
  const { securityLevel: i, block: r } = Hr(), s = n2.db;
  let l2;
  i === "sandbox" && (l2 = ae("#i" + t));
  const o = i === "sandbox" ? ae(l2.nodes()[0].contentDocument.body) : ae("body"), u = i === "sandbox" ? o.select(`[id="${t}"]`) : ae(`[id="${t}"]`);
  rr(u, ["point", "circle", "cross"], n2.type, t);
  const h = s.getBlocks(), x = s.getBlocksFlat(), f = s.getEdges(), b = u.insert("g").attr("class", "block");
  await re(b, h, s);
  const L = Ft(s);
  if (await ae2(b, h, s), await se(b, f, x, s, t), L) {
    const S = L, k = Math.max(1, Math.round(0.125 * (S.width / S.height))), T = S.height + k + 10, D = S.width + 10, { useMaxWidth: v } = r;
    U6(u, T, D, !!v), ut.debug("Here Bounds", L, S), u.attr(
      "viewBox",
      `${S.x - 5} ${S.y - 5} ${S.width + 10} ${S.height + 10}`
    );
  }
}, "draw");
var jr = {
  draw: Fr,
  getClasses: Ur
};
var Gr = {
  parser: ke,
  db: Xe,
  renderer: jr,
  styles: Ue
};
export {
  Gr as diagram
};
//# sourceMappingURL=blockDiagram-6J76NXCF-BJB2lu6M-BZBzvUHw-YRU55WAR.js.map
