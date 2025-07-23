import {
  l
} from "./chunk-F4TZSDY7.js";
import {
  e
} from "./chunk-5HT24C7N.js";
import {
  a
} from "./chunk-P75ONYRF.js";
import {
  $
} from "./chunk-NXGPKSY4.js";
import {
  $rt,
  Ert,
  HR,
  PR,
  RR,
  SK,
  WR,
  Wn,
  _,
  ae,
  crt,
  ej,
  fe,
  fo,
  hrt,
  jR,
  qR,
  tj,
  ut,
  vrt,
  yl,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/flowDiagram-KYDEHFYC-DpS-glZz-DBnfZMyX.js
var ht = "flowchart-";
var te;
var dt = (te = class {
  // cspell:ignore funs
  constructor() {
    this.vertexCounter = 0, this.config = fe(), this.vertices = /* @__PURE__ */ new Map(), this.edges = [], this.classes = /* @__PURE__ */ new Map(), this.subGraphs = [], this.subGraphLookup = /* @__PURE__ */ new Map(), this.tooltips = /* @__PURE__ */ new Map(), this.subCount = 0, this.firstGraphFlag = true, this.secCount = -1, this.posCrossRef = [], this.funs = [], this.setAccTitle = qR, this.setAccDescription = PR, this.setDiagramTitle = WR, this.getAccTitle = RR, this.getAccDescription = jR, this.getDiagramTitle = HR, this.funs.push(this.setupToolTips.bind(this)), this.addVertex = this.addVertex.bind(this), this.firstGraph = this.firstGraph.bind(this), this.setDirection = this.setDirection.bind(this), this.addSubGraph = this.addSubGraph.bind(this), this.addLink = this.addLink.bind(this), this.setLink = this.setLink.bind(this), this.updateLink = this.updateLink.bind(this), this.addClass = this.addClass.bind(this), this.setClass = this.setClass.bind(this), this.destructLink = this.destructLink.bind(this), this.setClickEvent = this.setClickEvent.bind(this), this.setTooltip = this.setTooltip.bind(this), this.updateLinkInterpolate = this.updateLinkInterpolate.bind(this), this.setClickFun = this.setClickFun.bind(this), this.bindFunctions = this.bindFunctions.bind(this), this.lex = {
      firstGraph: this.firstGraph.bind(this)
    }, this.clear(), this.setGen("gen-2");
  }
  sanitizeText(e2) {
    return fo.sanitizeText(e2, this.config);
  }
  /**
   * Function to lookup domId from id in the graph definition.
   *
   * @param id - id of the node
   */
  lookUpDomId(e2) {
    for (const i of this.vertices.values())
      if (i.id === e2)
        return i.domId;
    return e2;
  }
  /**
   * Function called by parser when a node definition has been found
   */
  addVertex(e2, i, r, n, a2, p, d = {}, l2) {
    var _a, _b;
    if (!e2 || e2.trim().length === 0)
      return;
    let c;
    if (l2 !== void 0) {
      let D;
      l2.includes(`
`) ? D = l2 + `
` : D = `{
` + l2 + `
}`, c = ej(D, { schema: tj });
    }
    const f = this.edges.find((D) => D.id === e2);
    if (f) {
      const D = c;
      (D == null ? void 0 : D.animate) !== void 0 && (f.animate = D.animate), (D == null ? void 0 : D.animation) !== void 0 && (f.animation = D.animation);
      return;
    }
    let F, g = this.vertices.get(e2);
    if (g === void 0 && (g = {
      id: e2,
      labelType: "text",
      domId: ht + e2 + "-" + this.vertexCounter,
      styles: [],
      classes: []
    }, this.vertices.set(e2, g)), this.vertexCounter++, i !== void 0 ? (this.config = fe(), F = this.sanitizeText(i.text.trim()), g.labelType = i.type, F.startsWith('"') && F.endsWith('"') && (F = F.substring(1, F.length - 1)), g.text = F) : g.text === void 0 && (g.text = e2), r !== void 0 && (g.type = r), n == null ? void 0 : n.forEach((D) => {
      g.styles.push(D);
    }), a2 == null ? void 0 : a2.forEach((D) => {
      g.classes.push(D);
    }), p !== void 0 && (g.dir = p), g.props === void 0 ? g.props = d : d !== void 0 && Object.assign(g.props, d), c !== void 0) {
      if (c.shape) {
        if (c.shape !== c.shape.toLowerCase() || c.shape.includes("_"))
          throw new Error(`No such shape: ${c.shape}. Shape names should be lowercase.`);
        if (!SK(c.shape))
          throw new Error(`No such shape: ${c.shape}.`);
        g.type = c == null ? void 0 : c.shape;
      }
      (c == null ? void 0 : c.label) && (g.text = c == null ? void 0 : c.label), (c == null ? void 0 : c.icon) && (g.icon = c == null ? void 0 : c.icon, !((_a = c.label) == null ? void 0 : _a.trim()) && g.text === e2 && (g.text = "")), (c == null ? void 0 : c.form) && (g.form = c == null ? void 0 : c.form), (c == null ? void 0 : c.pos) && (g.pos = c == null ? void 0 : c.pos), (c == null ? void 0 : c.img) && (g.img = c == null ? void 0 : c.img, !((_b = c.label) == null ? void 0 : _b.trim()) && g.text === e2 && (g.text = "")), (c == null ? void 0 : c.constraint) && (g.constraint = c.constraint), c.w && (g.assetWidth = Number(c.w)), c.h && (g.assetHeight = Number(c.h));
    }
  }
  /**
   * Function called by parser when a link/edge definition has been found
   *
   */
  addSingleLink(e2, i, r, n) {
    const a2 = {
      start: e2,
      end: i,
      type: void 0,
      text: "",
      labelType: "text",
      classes: [],
      isUserDefinedId: false,
      interpolate: this.edges.defaultInterpolate
    };
    ut.info("abc78 Got edge...", a2);
    const p = r.text;
    if (p !== void 0 && (a2.text = this.sanitizeText(p.text.trim()), a2.text.startsWith('"') && a2.text.endsWith('"') && (a2.text = a2.text.substring(1, a2.text.length - 1)), a2.labelType = p.type), r !== void 0 && (a2.type = r.type, a2.stroke = r.stroke, a2.length = r.length > 10 ? 10 : r.length), n && !this.edges.some((d) => d.id === n))
      a2.id = n, a2.isUserDefinedId = true;
    else {
      const d = this.edges.filter((l2) => l2.start === a2.start && l2.end === a2.end);
      d.length === 0 ? a2.id = vrt(a2.start, a2.end, { counter: 0, prefix: "L" }) : a2.id = vrt(a2.start, a2.end, {
        counter: d.length + 1,
        prefix: "L"
      });
    }
    if (this.edges.length < (this.config.maxEdges ?? 500))
      ut.info("Pushing edge..."), this.edges.push(a2);
    else
      throw new Error(
        `Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${this.config.maxEdges}.

Initialize mermaid with maxEdges set to a higher number to allow more edges.
You cannot set this config via configuration inside the diagram as it is a secure config.
You have to call mermaid.initialize.`
      );
  }
  isLinkData(e2) {
    return e2 !== null && typeof e2 == "object" && "id" in e2 && typeof e2.id == "string";
  }
  addLink(e2, i, r) {
    const n = this.isLinkData(r) ? r.id.replace("@", "") : void 0;
    ut.info("addLink", e2, i, n);
    for (const a2 of e2)
      for (const p of i) {
        const d = a2 === e2[e2.length - 1], l2 = p === i[0];
        d && l2 ? this.addSingleLink(a2, p, r, n) : this.addSingleLink(a2, p, r, void 0);
      }
  }
  /**
   * Updates a link's line interpolation algorithm
   */
  updateLinkInterpolate(e2, i) {
    e2.forEach((r) => {
      r === "default" ? this.edges.defaultInterpolate = i : this.edges[r].interpolate = i;
    });
  }
  /**
   * Updates a link with a style
   *
   */
  updateLink(e2, i) {
    e2.forEach((r) => {
      var _a, _b, _c, _d, _e, _f;
      if (typeof r == "number" && r >= this.edges.length)
        throw new Error(
          `The index ${r} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`
        );
      r === "default" ? this.edges.defaultStyle = i : (this.edges[r].style = i, (((_b = (_a = this.edges[r]) == null ? void 0 : _a.style) == null ? void 0 : _b.length) ?? 0) > 0 && !((_d = (_c = this.edges[r]) == null ? void 0 : _c.style) == null ? void 0 : _d.some((n) => n == null ? void 0 : n.startsWith("fill"))) && ((_f = (_e = this.edges[r]) == null ? void 0 : _e.style) == null ? void 0 : _f.push("fill:none")));
    });
  }
  addClass(e2, i) {
    const r = i.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    e2.split(",").forEach((n) => {
      let a2 = this.classes.get(n);
      a2 === void 0 && (a2 = { id: n, styles: [], textStyles: [] }, this.classes.set(n, a2)), r == null ? void 0 : r.forEach((p) => {
        if (/color/.exec(p)) {
          const d = p.replace("fill", "bgFill");
          a2.textStyles.push(d);
        }
        a2.styles.push(p);
      });
    });
  }
  /**
   * Called by parser when a graph definition is found, stores the direction of the chart.
   *
   */
  setDirection(e2) {
    this.direction = e2, /.*</.exec(this.direction) && (this.direction = "RL"), /.*\^/.exec(this.direction) && (this.direction = "BT"), /.*>/.exec(this.direction) && (this.direction = "LR"), /.*v/.exec(this.direction) && (this.direction = "TB"), this.direction === "TD" && (this.direction = "TB");
  }
  /**
   * Called by parser when a special node is found, e.g. a clickable element.
   *
   * @param ids - Comma separated list of ids
   * @param className - Class to add
   */
  setClass(e2, i) {
    for (const r of e2.split(",")) {
      const n = this.vertices.get(r);
      n && n.classes.push(i);
      const a2 = this.edges.find((d) => d.id === r);
      a2 && a2.classes.push(i);
      const p = this.subGraphLookup.get(r);
      p && p.classes.push(i);
    }
  }
  setTooltip(e2, i) {
    if (i !== void 0) {
      i = this.sanitizeText(i);
      for (const r of e2.split(","))
        this.tooltips.set(this.version === "gen-1" ? this.lookUpDomId(r) : r, i);
    }
  }
  setClickFun(e2, i, r) {
    const n = this.lookUpDomId(e2);
    if (fe().securityLevel !== "loose" || i === void 0)
      return;
    let a2 = [];
    if (typeof r == "string") {
      a2 = r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      for (let d = 0; d < a2.length; d++) {
        let l2 = a2[d].trim();
        l2.startsWith('"') && l2.endsWith('"') && (l2 = l2.substr(1, l2.length - 2)), a2[d] = l2;
      }
    }
    a2.length === 0 && a2.push(e2);
    const p = this.vertices.get(e2);
    p && (p.haveCallback = true, this.funs.push(() => {
      const d = document.querySelector(`[id="${n}"]`);
      d !== null && d.addEventListener(
        "click",
        () => {
          Wn.runFunc(i, ...a2);
        },
        false
      );
    }));
  }
  /**
   * Called by parser when a link is found. Adds the URL to the vertex data.
   *
   * @param ids - Comma separated list of ids
   * @param linkStr - URL to create a link for
   * @param target - Target attribute for the link
   */
  setLink(e2, i, r) {
    e2.split(",").forEach((n) => {
      const a2 = this.vertices.get(n);
      a2 !== void 0 && (a2.link = Wn.formatUrl(i, this.config), a2.linkTarget = r);
    }), this.setClass(e2, "clickable");
  }
  getTooltip(e2) {
    return this.tooltips.get(e2);
  }
  /**
   * Called by parser when a click definition is found. Registers an event handler.
   *
   * @param ids - Comma separated list of ids
   * @param functionName - Function to be called on click
   * @param functionArgs - Arguments to be passed to the function
   */
  setClickEvent(e2, i, r) {
    e2.split(",").forEach((n) => {
      this.setClickFun(n, i, r);
    }), this.setClass(e2, "clickable");
  }
  bindFunctions(e2) {
    this.funs.forEach((i) => {
      i(e2);
    });
  }
  getDirection() {
    var _a;
    return (_a = this.direction) == null ? void 0 : _a.trim();
  }
  /**
   * Retrieval function for fetching the found nodes after parsing has completed.
   *
   */
  getVertices() {
    return this.vertices;
  }
  /**
   * Retrieval function for fetching the found links after parsing has completed.
   *
   */
  getEdges() {
    return this.edges;
  }
  /**
   * Retrieval function for fetching the found class definitions after parsing has completed.
   *
   */
  getClasses() {
    return this.classes;
  }
  setupToolTips(e2) {
    let i = ae(".mermaidTooltip");
    (i._groups || i)[0][0] === null && (i = ae("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0)), ae(e2).select("svg").selectAll("g.node").on("mouseover", (r) => {
      var _a;
      const n = ae(r.currentTarget);
      if (n.attr("title") === null)
        return;
      const a2 = (_a = r.currentTarget) == null ? void 0 : _a.getBoundingClientRect();
      i.transition().duration(200).style("opacity", ".9"), i.text(n.attr("title")).style("left", window.scrollX + a2.left + (a2.right - a2.left) / 2 + "px").style("top", window.scrollY + a2.bottom + "px"), i.html(i.html().replace(/&lt;br\/&gt;/g, "<br/>")), n.classed("hover", true);
    }).on("mouseout", (r) => {
      i.transition().duration(500).style("opacity", 0), ae(r.currentTarget).classed("hover", false);
    });
  }
  /**
   * Clears the internal graph db so that a new graph can be parsed.
   *
   */
  clear(e2 = "gen-2") {
    this.vertices = /* @__PURE__ */ new Map(), this.classes = /* @__PURE__ */ new Map(), this.edges = [], this.funs = [this.setupToolTips.bind(this)], this.subGraphs = [], this.subGraphLookup = /* @__PURE__ */ new Map(), this.subCount = 0, this.tooltips = /* @__PURE__ */ new Map(), this.firstGraphFlag = true, this.version = e2, this.config = fe(), zR();
  }
  setGen(e2) {
    this.version = e2 || "gen-2";
  }
  defaultStyle() {
    return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
  }
  addSubGraph(e2, i, r) {
    let n = e2.text.trim(), a2 = r.text;
    e2 === r && /\s/.exec(r.text) && (n = void 0);
    const p = _((F) => {
      const g = { boolean: {}, number: {}, string: {} }, D = [];
      let z;
      return { nodeList: F.filter(function(A) {
        const x = typeof A;
        return A.stmt && A.stmt === "dir" ? (z = A.value, false) : A.trim() === "" ? false : x in g ? g[x].hasOwnProperty(A) ? false : g[x][A] = true : D.includes(A) ? false : D.push(A);
      }), dir: z };
    }, "uniq")(i.flat()), d = p.nodeList;
    let l2 = p.dir;
    const c = fe().flowchart ?? {};
    if (l2 = l2 ?? (c.inheritDir ? this.getDirection() ?? fe().direction ?? void 0 : void 0), this.version === "gen-1")
      for (let F = 0; F < d.length; F++)
        d[F] = this.lookUpDomId(d[F]);
    n = n ?? "subGraph" + this.subCount, a2 = a2 || "", a2 = this.sanitizeText(a2), this.subCount = this.subCount + 1;
    const f = {
      id: n,
      nodes: d,
      title: a2.trim(),
      classes: [],
      dir: l2,
      labelType: r.type
    };
    return ut.info("Adding", f.id, f.nodes, f.dir), f.nodes = this.makeUniq(f, this.subGraphs).nodes, this.subGraphs.push(f), this.subGraphLookup.set(n, f), n;
  }
  getPosForId(e2) {
    for (const [i, r] of this.subGraphs.entries())
      if (r.id === e2)
        return i;
    return -1;
  }
  indexNodes2(e2, i) {
    const r = this.subGraphs[i].nodes;
    if (this.secCount = this.secCount + 1, this.secCount > 2e3)
      return {
        result: false,
        count: 0
      };
    if (this.posCrossRef[this.secCount] = i, this.subGraphs[i].id === e2)
      return {
        result: true,
        count: 0
      };
    let n = 0, a2 = 1;
    for (; n < r.length; ) {
      const p = this.getPosForId(r[n]);
      if (p >= 0) {
        const d = this.indexNodes2(e2, p);
        if (d.result)
          return {
            result: true,
            count: a2 + d.count
          };
        a2 = a2 + d.count;
      }
      n = n + 1;
    }
    return {
      result: false,
      count: a2
    };
  }
  getDepthFirstPos(e2) {
    return this.posCrossRef[e2];
  }
  indexNodes() {
    this.secCount = -1, this.subGraphs.length > 0 && this.indexNodes2("none", this.subGraphs.length - 1);
  }
  getSubGraphs() {
    return this.subGraphs;
  }
  firstGraph() {
    return this.firstGraphFlag ? (this.firstGraphFlag = false, true) : false;
  }
  destructStartLink(e2) {
    let i = e2.trim(), r = "arrow_open";
    switch (i[0]) {
      case "<":
        r = "arrow_point", i = i.slice(1);
        break;
      case "x":
        r = "arrow_cross", i = i.slice(1);
        break;
      case "o":
        r = "arrow_circle", i = i.slice(1);
        break;
    }
    let n = "normal";
    return i.includes("=") && (n = "thick"), i.includes(".") && (n = "dotted"), { type: r, stroke: n };
  }
  countChar(e2, i) {
    const r = i.length;
    let n = 0;
    for (let a2 = 0; a2 < r; ++a2)
      i[a2] === e2 && ++n;
    return n;
  }
  destructEndLink(e2) {
    const i = e2.trim();
    let r = i.slice(0, -1), n = "arrow_open";
    switch (i.slice(-1)) {
      case "x":
        n = "arrow_cross", i.startsWith("x") && (n = "double_" + n, r = r.slice(1));
        break;
      case ">":
        n = "arrow_point", i.startsWith("<") && (n = "double_" + n, r = r.slice(1));
        break;
      case "o":
        n = "arrow_circle", i.startsWith("o") && (n = "double_" + n, r = r.slice(1));
        break;
    }
    let a2 = "normal", p = r.length - 1;
    r.startsWith("=") && (a2 = "thick"), r.startsWith("~") && (a2 = "invisible");
    const d = this.countChar(".", r);
    return d && (a2 = "dotted", p = d), { type: n, stroke: a2, length: p };
  }
  destructLink(e2, i) {
    const r = this.destructEndLink(e2);
    let n;
    if (i) {
      if (n = this.destructStartLink(i), n.stroke !== r.stroke)
        return { type: "INVALID", stroke: "INVALID" };
      if (n.type === "arrow_open")
        n.type = r.type;
      else {
        if (n.type !== r.type)
          return { type: "INVALID", stroke: "INVALID" };
        n.type = "double_" + n.type;
      }
      return n.type === "double_arrow" && (n.type = "double_arrow_point"), n.length = r.length, n;
    }
    return r;
  }
  // Todo optimizer this by caching existing nodes
  exists(e2, i) {
    for (const r of e2)
      if (r.nodes.includes(i))
        return true;
    return false;
  }
  /**
   * Deletes an id from all subgraphs
   *
   */
  makeUniq(e2, i) {
    const r = [];
    return e2.nodes.forEach((n, a2) => {
      this.exists(i, n) || r.push(e2.nodes[a2]);
    }), { nodes: r };
  }
  getTypeFromVertex(e2) {
    if (e2.img)
      return "imageSquare";
    if (e2.icon)
      return e2.form === "circle" ? "iconCircle" : e2.form === "square" ? "iconSquare" : e2.form === "rounded" ? "iconRounded" : "icon";
    switch (e2.type) {
      case "square":
      case void 0:
        return "squareRect";
      case "round":
        return "roundedRect";
      case "ellipse":
        return "ellipse";
      default:
        return e2.type;
    }
  }
  findNode(e2, i) {
    return e2.find((r) => r.id === i);
  }
  destructEdgeType(e2) {
    let i = "none", r = "arrow_point";
    switch (e2) {
      case "arrow_point":
      case "arrow_circle":
      case "arrow_cross":
        r = e2;
        break;
      case "double_arrow_point":
      case "double_arrow_circle":
      case "double_arrow_cross":
        i = e2.replace("double_", ""), r = i;
        break;
    }
    return { arrowTypeStart: i, arrowTypeEnd: r };
  }
  addNodeFromVertex(e2, i, r, n, a2, p) {
    var _a;
    const d = r.get(e2.id), l2 = n.get(e2.id) ?? false, c = this.findNode(i, e2.id);
    if (c)
      c.cssStyles = e2.styles, c.cssCompiledStyles = this.getCompiledStyles(e2.classes), c.cssClasses = e2.classes.join(" ");
    else {
      const f = {
        id: e2.id,
        label: e2.text,
        labelStyle: "",
        parentId: d,
        padding: ((_a = a2.flowchart) == null ? void 0 : _a.padding) || 8,
        cssStyles: e2.styles,
        cssCompiledStyles: this.getCompiledStyles(["default", "node", ...e2.classes]),
        cssClasses: "default " + e2.classes.join(" "),
        dir: e2.dir,
        domId: e2.domId,
        look: p,
        link: e2.link,
        linkTarget: e2.linkTarget,
        tooltip: this.getTooltip(e2.id),
        icon: e2.icon,
        pos: e2.pos,
        img: e2.img,
        assetWidth: e2.assetWidth,
        assetHeight: e2.assetHeight,
        constraint: e2.constraint
      };
      l2 ? i.push({
        ...f,
        isGroup: true,
        shape: "rect"
      }) : i.push({
        ...f,
        isGroup: false,
        shape: this.getTypeFromVertex(e2)
      });
    }
  }
  getCompiledStyles(e2) {
    let i = [];
    for (const r of e2) {
      const n = this.classes.get(r);
      (n == null ? void 0 : n.styles) && (i = [...i, ...n.styles ?? []].map((a2) => a2.trim())), (n == null ? void 0 : n.textStyles) && (i = [...i, ...n.textStyles ?? []].map((a2) => a2.trim()));
    }
    return i;
  }
  getData() {
    const e2 = fe(), i = [], r = [], n = this.getSubGraphs(), a2 = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
    for (let l2 = n.length - 1; l2 >= 0; l2--) {
      const c = n[l2];
      c.nodes.length > 0 && p.set(c.id, true);
      for (const f of c.nodes)
        a2.set(f, c.id);
    }
    for (let l2 = n.length - 1; l2 >= 0; l2--) {
      const c = n[l2];
      i.push({
        id: c.id,
        label: c.title,
        labelStyle: "",
        parentId: a2.get(c.id),
        padding: 8,
        cssCompiledStyles: this.getCompiledStyles(c.classes),
        cssClasses: c.classes.join(" "),
        shape: "rect",
        dir: c.dir,
        isGroup: true,
        look: e2.look
      });
    }
    this.getVertices().forEach((l2) => {
      this.addNodeFromVertex(l2, i, a2, p, e2, e2.look || "classic");
    });
    const d = this.getEdges();
    return d.forEach((l2, c) => {
      var _a;
      const { arrowTypeStart: f, arrowTypeEnd: F } = this.destructEdgeType(l2.type), g = [...d.defaultStyle ?? []];
      l2.style && g.push(...l2.style);
      const D = {
        id: vrt(l2.start, l2.end, { counter: c, prefix: "L" }, l2.id),
        isUserDefinedId: l2.isUserDefinedId,
        start: l2.start,
        end: l2.end,
        type: l2.type ?? "normal",
        label: l2.text,
        labelpos: "c",
        thickness: l2.stroke,
        minlen: l2.length,
        classes: (l2 == null ? void 0 : l2.stroke) === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
        arrowTypeStart: (l2 == null ? void 0 : l2.stroke) === "invisible" || (l2 == null ? void 0 : l2.type) === "arrow_open" ? "none" : f,
        arrowTypeEnd: (l2 == null ? void 0 : l2.stroke) === "invisible" || (l2 == null ? void 0 : l2.type) === "arrow_open" ? "none" : F,
        arrowheadStyle: "fill: #333",
        cssCompiledStyles: this.getCompiledStyles(l2.classes),
        labelStyle: g,
        style: g,
        pattern: l2.stroke,
        look: e2.look,
        animate: l2.animate,
        animation: l2.animation,
        curve: l2.interpolate || this.edges.defaultInterpolate || ((_a = e2.flowchart) == null ? void 0 : _a.curve)
      };
      r.push(D);
    }), { nodes: i, edges: r, other: {}, config: e2 };
  }
  defaultConfig() {
    return hrt.flowchart;
  }
}, _(te, "FlowDB"), te);
var pt = _(function(e2, i) {
  return i.db.getClasses();
}, "getClasses");
var gt = _(async function(e2, i, r, n) {
  var _a;
  ut.info("REF0:"), ut.info("Drawing state diagram (v2)", i);
  const { securityLevel: a2, flowchart: p, layout: d } = fe();
  let l2;
  a2 === "sandbox" && (l2 = ae("#i" + i));
  const c = a2 === "sandbox" ? l2.nodes()[0].contentDocument : document;
  ut.debug("Before getData: ");
  const f = n.db.getData();
  ut.debug("Data: ", f);
  const F = a(i, a2), g = n.db.getDirection();
  f.type = n.type, f.layoutAlgorithm = Ert(d), f.layoutAlgorithm === "dagre" && d === "elk" && ut.warn(
    "flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback."
  ), f.direction = g, f.nodeSpacing = (p == null ? void 0 : p.nodeSpacing) || 50, f.rankSpacing = (p == null ? void 0 : p.rankSpacing) || 50, f.markers = ["point", "circle", "cross"], f.diagramId = i, ut.debug("REF1:", f), await $rt(f, F);
  const D = ((_a = f.config.flowchart) == null ? void 0 : _a.diagramPadding) ?? 8;
  Wn.insertTitle(
    F,
    "flowchartTitleText",
    (p == null ? void 0 : p.titleTopMargin) || 0,
    n.db.getDiagramTitle()
  ), $(F, D, "flowchart", (p == null ? void 0 : p.useMaxWidth) || false);
  for (const z of f.nodes) {
    const A = ae(`#${i} [id="${z.id}"]`);
    if (!A || !z.link)
      continue;
    const x = c.createElementNS("http://www.w3.org/2000/svg", "a");
    x.setAttributeNS("http://www.w3.org/2000/svg", "class", z.cssClasses), x.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), a2 === "sandbox" ? x.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : z.linkTarget && x.setAttributeNS("http://www.w3.org/2000/svg", "target", z.linkTarget);
    const g1 = A.insert(function() {
      return x;
    }, ":first-child"), f1 = A.select(".label-container");
    f1 && g1.append(function() {
      return f1.node();
    });
    const b1 = A.select(".label");
    b1 && g1.append(function() {
      return b1.node();
    });
  }
}, "draw");
var ft = {
  getClasses: pt,
  draw: gt
};
var ie = function() {
  var e2 = _(function(Y, o, h, u) {
    for (h = h || {}, u = Y.length; u--; h[Y[u]] = o) ;
    return h;
  }, "o"), i = [1, 4], r = [1, 3], n = [1, 5], a2 = [1, 8, 9, 10, 11, 27, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124], p = [2, 2], d = [1, 13], l2 = [1, 14], c = [1, 15], f = [1, 16], F = [1, 23], g = [1, 25], D = [1, 26], z = [1, 27], A = [1, 49], x = [1, 48], g1 = [1, 29], f1 = [1, 30], b1 = [1, 31], P1 = [1, 32], G1 = [1, 33], v = [1, 44], w = [1, 46], $2 = [1, 42], L = [1, 47], I = [1, 43], R = [1, 50], N = [1, 45], P = [1, 51], G = [1, 52], O1 = [1, 34], M1 = [1, 35], U1 = [1, 36], V1 = [1, 37], h1 = [1, 57], T = [1, 8, 9, 10, 11, 27, 32, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124], Q = [1, 61], e1 = [1, 60], t1 = [1, 62], m1 = [8, 9, 11, 75, 77, 78], re = [1, 78], x1 = [1, 91], C1 = [1, 96], D1 = [1, 95], T1 = [1, 92], S1 = [1, 88], F1 = [1, 94], _1 = [1, 90], B1 = [1, 97], v1 = [1, 93], w1 = [1, 98], $1 = [1, 89], A1 = [8, 9, 10, 11, 40, 75, 77, 78], M = [8, 9, 10, 11, 40, 46, 75, 77, 78], W = [8, 9, 10, 11, 29, 40, 44, 46, 48, 50, 52, 54, 56, 58, 60, 63, 65, 67, 68, 70, 75, 77, 78, 89, 102, 105, 106, 109, 111, 114, 115, 116], ae2 = [8, 9, 11, 44, 60, 75, 77, 78, 89, 102, 105, 106, 109, 111, 114, 115, 116], L1 = [44, 60, 89, 102, 105, 106, 109, 111, 114, 115, 116], ne = [1, 121], ue = [1, 122], K1 = [1, 124], j1 = [1, 123], oe = [44, 60, 62, 74, 89, 102, 105, 106, 109, 111, 114, 115, 116], le = [1, 133], ce = [1, 147], he = [1, 148], de = [1, 149], pe = [1, 150], ge = [1, 135], fe2 = [1, 137], be = [1, 141], Ae = [1, 142], ke = [1, 143], ye = [1, 144], Ee = [1, 145], me = [1, 146], xe = [1, 151], Ce = [1, 152], De = [1, 131], Te = [1, 132], Se = [1, 139], Fe = [1, 134], _e = [1, 138], Be = [1, 136], H1 = [8, 9, 10, 11, 27, 32, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124], ve = [1, 154], we = [1, 156], _2 = [8, 9, 11], q = [8, 9, 10, 11, 14, 44, 60, 89, 105, 106, 109, 111, 114, 115, 116], k = [1, 176], U = [1, 172], V = [1, 173], y = [1, 177], E = [1, 174], m = [1, 175], I1 = [77, 116, 119], S = [8, 9, 10, 11, 12, 14, 27, 29, 32, 44, 60, 75, 84, 85, 86, 87, 88, 89, 90, 105, 109, 111, 114, 115, 116], $e = [10, 106], d1 = [31, 49, 51, 53, 55, 57, 62, 64, 66, 67, 69, 71, 116, 117, 118], s1 = [1, 247], i1 = [1, 245], r1 = [1, 249], a1 = [1, 243], n1 = [1, 244], u1 = [1, 246], o1 = [1, 248], l1 = [1, 250], R1 = [1, 268], Le = [8, 9, 11, 106], J = [8, 9, 10, 11, 60, 84, 105, 106, 109, 110, 111, 112], X1 = {
    trace: _(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, graphConfig: 4, document: 5, line: 6, statement: 7, SEMI: 8, NEWLINE: 9, SPACE: 10, EOF: 11, GRAPH: 12, NODIR: 13, DIR: 14, FirstStmtSeparator: 15, ending: 16, endToken: 17, spaceList: 18, spaceListNewline: 19, vertexStatement: 20, separator: 21, styleStatement: 22, linkStyleStatement: 23, classDefStatement: 24, classStatement: 25, clickStatement: 26, subgraph: 27, textNoTags: 28, SQS: 29, text: 30, SQE: 31, end: 32, direction: 33, acc_title: 34, acc_title_value: 35, acc_descr: 36, acc_descr_value: 37, acc_descr_multiline_value: 38, shapeData: 39, SHAPE_DATA: 40, link: 41, node: 42, styledVertex: 43, AMP: 44, vertex: 45, STYLE_SEPARATOR: 46, idString: 47, DOUBLECIRCLESTART: 48, DOUBLECIRCLEEND: 49, PS: 50, PE: 51, "(-": 52, "-)": 53, STADIUMSTART: 54, STADIUMEND: 55, SUBROUTINESTART: 56, SUBROUTINEEND: 57, VERTEX_WITH_PROPS_START: 58, "NODE_STRING[field]": 59, COLON: 60, "NODE_STRING[value]": 61, PIPE: 62, CYLINDERSTART: 63, CYLINDEREND: 64, DIAMOND_START: 65, DIAMOND_STOP: 66, TAGEND: 67, TRAPSTART: 68, TRAPEND: 69, INVTRAPSTART: 70, INVTRAPEND: 71, linkStatement: 72, arrowText: 73, TESTSTR: 74, START_LINK: 75, edgeText: 76, LINK: 77, LINK_ID: 78, edgeTextToken: 79, STR: 80, MD_STR: 81, textToken: 82, keywords: 83, STYLE: 84, LINKSTYLE: 85, CLASSDEF: 86, CLASS: 87, CLICK: 88, DOWN: 89, UP: 90, textNoTagsToken: 91, stylesOpt: 92, "idString[vertex]": 93, "idString[class]": 94, CALLBACKNAME: 95, CALLBACKARGS: 96, HREF: 97, LINK_TARGET: 98, "STR[link]": 99, "STR[tooltip]": 100, alphaNum: 101, DEFAULT: 102, numList: 103, INTERPOLATE: 104, NUM: 105, COMMA: 106, style: 107, styleComponent: 108, NODE_STRING: 109, UNIT: 110, BRKT: 111, PCT: 112, idStringToken: 113, MINUS: 114, MULT: 115, UNICODE_TEXT: 116, TEXT: 117, TAGSTART: 118, EDGE_TEXT: 119, alphaNumToken: 120, direction_tb: 121, direction_bt: 122, direction_rl: 123, direction_lr: 124, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 8: "SEMI", 9: "NEWLINE", 10: "SPACE", 11: "EOF", 12: "GRAPH", 13: "NODIR", 14: "DIR", 27: "subgraph", 29: "SQS", 31: "SQE", 32: "end", 34: "acc_title", 35: "acc_title_value", 36: "acc_descr", 37: "acc_descr_value", 38: "acc_descr_multiline_value", 40: "SHAPE_DATA", 44: "AMP", 46: "STYLE_SEPARATOR", 48: "DOUBLECIRCLESTART", 49: "DOUBLECIRCLEEND", 50: "PS", 51: "PE", 52: "(-", 53: "-)", 54: "STADIUMSTART", 55: "STADIUMEND", 56: "SUBROUTINESTART", 57: "SUBROUTINEEND", 58: "VERTEX_WITH_PROPS_START", 59: "NODE_STRING[field]", 60: "COLON", 61: "NODE_STRING[value]", 62: "PIPE", 63: "CYLINDERSTART", 64: "CYLINDEREND", 65: "DIAMOND_START", 66: "DIAMOND_STOP", 67: "TAGEND", 68: "TRAPSTART", 69: "TRAPEND", 70: "INVTRAPSTART", 71: "INVTRAPEND", 74: "TESTSTR", 75: "START_LINK", 77: "LINK", 78: "LINK_ID", 80: "STR", 81: "MD_STR", 84: "STYLE", 85: "LINKSTYLE", 86: "CLASSDEF", 87: "CLASS", 88: "CLICK", 89: "DOWN", 90: "UP", 93: "idString[vertex]", 94: "idString[class]", 95: "CALLBACKNAME", 96: "CALLBACKARGS", 97: "HREF", 98: "LINK_TARGET", 99: "STR[link]", 100: "STR[tooltip]", 102: "DEFAULT", 104: "INTERPOLATE", 105: "NUM", 106: "COMMA", 109: "NODE_STRING", 110: "UNIT", 111: "BRKT", 112: "PCT", 114: "MINUS", 115: "MULT", 116: "UNICODE_TEXT", 117: "TEXT", 118: "TAGSTART", 119: "EDGE_TEXT", 121: "direction_tb", 122: "direction_bt", 123: "direction_rl", 124: "direction_lr" },
    productions_: [0, [3, 2], [5, 0], [5, 2], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [4, 2], [4, 2], [4, 2], [4, 3], [16, 2], [16, 1], [17, 1], [17, 1], [17, 1], [15, 1], [15, 1], [15, 2], [19, 2], [19, 2], [19, 1], [19, 1], [18, 2], [18, 1], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 9], [7, 6], [7, 4], [7, 1], [7, 2], [7, 2], [7, 1], [21, 1], [21, 1], [21, 1], [39, 2], [39, 1], [20, 4], [20, 3], [20, 4], [20, 2], [20, 2], [20, 1], [42, 1], [42, 6], [42, 5], [43, 1], [43, 3], [45, 4], [45, 4], [45, 6], [45, 4], [45, 4], [45, 4], [45, 8], [45, 4], [45, 4], [45, 4], [45, 6], [45, 4], [45, 4], [45, 4], [45, 4], [45, 4], [45, 1], [41, 2], [41, 3], [41, 3], [41, 1], [41, 3], [41, 4], [76, 1], [76, 2], [76, 1], [76, 1], [72, 1], [72, 2], [73, 3], [30, 1], [30, 2], [30, 1], [30, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [28, 1], [28, 2], [28, 1], [28, 1], [24, 5], [25, 5], [26, 2], [26, 4], [26, 3], [26, 5], [26, 3], [26, 5], [26, 5], [26, 7], [26, 2], [26, 4], [26, 2], [26, 4], [26, 4], [26, 6], [22, 5], [23, 5], [23, 5], [23, 9], [23, 9], [23, 7], [23, 7], [103, 1], [103, 3], [92, 1], [92, 3], [107, 1], [107, 2], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [82, 1], [82, 1], [82, 1], [82, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [79, 1], [79, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [47, 1], [47, 2], [101, 1], [101, 2], [33, 1], [33, 1], [33, 1], [33, 1]],
    performAction: _(function(Y, o, h, u, C, t, K) {
      var s = t.length - 1;
      switch (C) {
        case 2:
          this.$ = [];
          break;
        case 3:
          (!Array.isArray(t[s]) || t[s].length > 0) && t[s - 1].push(t[s]), this.$ = t[s - 1];
          break;
        case 4:
        case 183:
          this.$ = t[s];
          break;
        case 11:
          u.setDirection("TB"), this.$ = "TB";
          break;
        case 12:
          u.setDirection(t[s - 1]), this.$ = t[s - 1];
          break;
        case 27:
          this.$ = t[s - 1].nodes;
          break;
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
          this.$ = [];
          break;
        case 33:
          this.$ = u.addSubGraph(t[s - 6], t[s - 1], t[s - 4]);
          break;
        case 34:
          this.$ = u.addSubGraph(t[s - 3], t[s - 1], t[s - 3]);
          break;
        case 35:
          this.$ = u.addSubGraph(void 0, t[s - 1], void 0);
          break;
        case 37:
          this.$ = t[s].trim(), u.setAccTitle(this.$);
          break;
        case 38:
        case 39:
          this.$ = t[s].trim(), u.setAccDescription(this.$);
          break;
        case 43:
          this.$ = t[s - 1] + t[s];
          break;
        case 44:
          this.$ = t[s];
          break;
        case 45:
          u.addVertex(t[s - 1][t[s - 1].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, t[s]), u.addLink(t[s - 3].stmt, t[s - 1], t[s - 2]), this.$ = { stmt: t[s - 1], nodes: t[s - 1].concat(t[s - 3].nodes) };
          break;
        case 46:
          u.addLink(t[s - 2].stmt, t[s], t[s - 1]), this.$ = { stmt: t[s], nodes: t[s].concat(t[s - 2].nodes) };
          break;
        case 47:
          u.addLink(t[s - 3].stmt, t[s - 1], t[s - 2]), this.$ = { stmt: t[s - 1], nodes: t[s - 1].concat(t[s - 3].nodes) };
          break;
        case 48:
          this.$ = { stmt: t[s - 1], nodes: t[s - 1] };
          break;
        case 49:
          u.addVertex(t[s - 1][t[s - 1].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, t[s]), this.$ = { stmt: t[s - 1], nodes: t[s - 1], shapeData: t[s] };
          break;
        case 50:
          this.$ = { stmt: t[s], nodes: t[s] };
          break;
        case 51:
          this.$ = [t[s]];
          break;
        case 52:
          u.addVertex(t[s - 5][t[s - 5].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, t[s - 4]), this.$ = t[s - 5].concat(t[s]);
          break;
        case 53:
          this.$ = t[s - 4].concat(t[s]);
          break;
        case 54:
          this.$ = t[s];
          break;
        case 55:
          this.$ = t[s - 2], u.setClass(t[s - 2], t[s]);
          break;
        case 56:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "square");
          break;
        case 57:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "doublecircle");
          break;
        case 58:
          this.$ = t[s - 5], u.addVertex(t[s - 5], t[s - 2], "circle");
          break;
        case 59:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "ellipse");
          break;
        case 60:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "stadium");
          break;
        case 61:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "subroutine");
          break;
        case 62:
          this.$ = t[s - 7], u.addVertex(t[s - 7], t[s - 1], "rect", void 0, void 0, void 0, Object.fromEntries([[t[s - 5], t[s - 3]]]));
          break;
        case 63:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "cylinder");
          break;
        case 64:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "round");
          break;
        case 65:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "diamond");
          break;
        case 66:
          this.$ = t[s - 5], u.addVertex(t[s - 5], t[s - 2], "hexagon");
          break;
        case 67:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "odd");
          break;
        case 68:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "trapezoid");
          break;
        case 69:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "inv_trapezoid");
          break;
        case 70:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "lean_right");
          break;
        case 71:
          this.$ = t[s - 3], u.addVertex(t[s - 3], t[s - 1], "lean_left");
          break;
        case 72:
          this.$ = t[s], u.addVertex(t[s]);
          break;
        case 73:
          t[s - 1].text = t[s], this.$ = t[s - 1];
          break;
        case 74:
        case 75:
          t[s - 2].text = t[s - 1], this.$ = t[s - 2];
          break;
        case 76:
          this.$ = t[s];
          break;
        case 77:
          var B = u.destructLink(t[s], t[s - 2]);
          this.$ = { type: B.type, stroke: B.stroke, length: B.length, text: t[s - 1] };
          break;
        case 78:
          var B = u.destructLink(t[s], t[s - 2]);
          this.$ = { type: B.type, stroke: B.stroke, length: B.length, text: t[s - 1], id: t[s - 3] };
          break;
        case 79:
          this.$ = { text: t[s], type: "text" };
          break;
        case 80:
          this.$ = { text: t[s - 1].text + "" + t[s], type: t[s - 1].type };
          break;
        case 81:
          this.$ = { text: t[s], type: "string" };
          break;
        case 82:
          this.$ = { text: t[s], type: "markdown" };
          break;
        case 83:
          var B = u.destructLink(t[s]);
          this.$ = { type: B.type, stroke: B.stroke, length: B.length };
          break;
        case 84:
          var B = u.destructLink(t[s]);
          this.$ = { type: B.type, stroke: B.stroke, length: B.length, id: t[s - 1] };
          break;
        case 85:
          this.$ = t[s - 1];
          break;
        case 86:
          this.$ = { text: t[s], type: "text" };
          break;
        case 87:
          this.$ = { text: t[s - 1].text + "" + t[s], type: t[s - 1].type };
          break;
        case 88:
          this.$ = { text: t[s], type: "string" };
          break;
        case 89:
        case 104:
          this.$ = { text: t[s], type: "markdown" };
          break;
        case 101:
          this.$ = { text: t[s], type: "text" };
          break;
        case 102:
          this.$ = { text: t[s - 1].text + "" + t[s], type: t[s - 1].type };
          break;
        case 103:
          this.$ = { text: t[s], type: "text" };
          break;
        case 105:
          this.$ = t[s - 4], u.addClass(t[s - 2], t[s]);
          break;
        case 106:
          this.$ = t[s - 4], u.setClass(t[s - 2], t[s]);
          break;
        case 107:
        case 115:
          this.$ = t[s - 1], u.setClickEvent(t[s - 1], t[s]);
          break;
        case 108:
        case 116:
          this.$ = t[s - 3], u.setClickEvent(t[s - 3], t[s - 2]), u.setTooltip(t[s - 3], t[s]);
          break;
        case 109:
          this.$ = t[s - 2], u.setClickEvent(t[s - 2], t[s - 1], t[s]);
          break;
        case 110:
          this.$ = t[s - 4], u.setClickEvent(t[s - 4], t[s - 3], t[s - 2]), u.setTooltip(t[s - 4], t[s]);
          break;
        case 111:
          this.$ = t[s - 2], u.setLink(t[s - 2], t[s]);
          break;
        case 112:
          this.$ = t[s - 4], u.setLink(t[s - 4], t[s - 2]), u.setTooltip(t[s - 4], t[s]);
          break;
        case 113:
          this.$ = t[s - 4], u.setLink(t[s - 4], t[s - 2], t[s]);
          break;
        case 114:
          this.$ = t[s - 6], u.setLink(t[s - 6], t[s - 4], t[s]), u.setTooltip(t[s - 6], t[s - 2]);
          break;
        case 117:
          this.$ = t[s - 1], u.setLink(t[s - 1], t[s]);
          break;
        case 118:
          this.$ = t[s - 3], u.setLink(t[s - 3], t[s - 2]), u.setTooltip(t[s - 3], t[s]);
          break;
        case 119:
          this.$ = t[s - 3], u.setLink(t[s - 3], t[s - 2], t[s]);
          break;
        case 120:
          this.$ = t[s - 5], u.setLink(t[s - 5], t[s - 4], t[s]), u.setTooltip(t[s - 5], t[s - 2]);
          break;
        case 121:
          this.$ = t[s - 4], u.addVertex(t[s - 2], void 0, void 0, t[s]);
          break;
        case 122:
          this.$ = t[s - 4], u.updateLink([t[s - 2]], t[s]);
          break;
        case 123:
          this.$ = t[s - 4], u.updateLink(t[s - 2], t[s]);
          break;
        case 124:
          this.$ = t[s - 8], u.updateLinkInterpolate([t[s - 6]], t[s - 2]), u.updateLink([t[s - 6]], t[s]);
          break;
        case 125:
          this.$ = t[s - 8], u.updateLinkInterpolate(t[s - 6], t[s - 2]), u.updateLink(t[s - 6], t[s]);
          break;
        case 126:
          this.$ = t[s - 6], u.updateLinkInterpolate([t[s - 4]], t[s]);
          break;
        case 127:
          this.$ = t[s - 6], u.updateLinkInterpolate(t[s - 4], t[s]);
          break;
        case 128:
        case 130:
          this.$ = [t[s]];
          break;
        case 129:
        case 131:
          t[s - 2].push(t[s]), this.$ = t[s - 2];
          break;
        case 133:
          this.$ = t[s - 1] + t[s];
          break;
        case 181:
          this.$ = t[s];
          break;
        case 182:
          this.$ = t[s - 1] + "" + t[s];
          break;
        case 184:
          this.$ = t[s - 1] + "" + t[s];
          break;
        case 185:
          this.$ = { stmt: "dir", value: "TB" };
          break;
        case 186:
          this.$ = { stmt: "dir", value: "BT" };
          break;
        case 187:
          this.$ = { stmt: "dir", value: "RL" };
          break;
        case 188:
          this.$ = { stmt: "dir", value: "LR" };
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: 2, 9: i, 10: r, 12: n }, { 1: [3] }, e2(a2, p, { 5: 6 }), { 4: 7, 9: i, 10: r, 12: n }, { 4: 8, 9: i, 10: r, 12: n }, { 13: [1, 9], 14: [1, 10] }, { 1: [2, 1], 6: 11, 7: 12, 8: d, 9: l2, 10: c, 11: f, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: F, 33: 24, 34: g, 36: D, 38: z, 42: 28, 43: 38, 44: A, 45: 39, 47: 40, 60: x, 84: g1, 85: f1, 86: b1, 87: P1, 88: G1, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G, 121: O1, 122: M1, 123: U1, 124: V1 }, e2(a2, [2, 9]), e2(a2, [2, 10]), e2(a2, [2, 11]), { 8: [1, 54], 9: [1, 55], 10: h1, 15: 53, 18: 56 }, e2(T, [2, 3]), e2(T, [2, 4]), e2(T, [2, 5]), e2(T, [2, 6]), e2(T, [2, 7]), e2(T, [2, 8]), { 8: Q, 9: e1, 11: t1, 21: 58, 41: 59, 72: 63, 75: [1, 64], 77: [1, 66], 78: [1, 65] }, { 8: Q, 9: e1, 11: t1, 21: 67 }, { 8: Q, 9: e1, 11: t1, 21: 68 }, { 8: Q, 9: e1, 11: t1, 21: 69 }, { 8: Q, 9: e1, 11: t1, 21: 70 }, { 8: Q, 9: e1, 11: t1, 21: 71 }, { 8: Q, 9: e1, 10: [1, 72], 11: t1, 21: 73 }, e2(T, [2, 36]), { 35: [1, 74] }, { 37: [1, 75] }, e2(T, [2, 39]), e2(m1, [2, 50], { 18: 76, 39: 77, 10: h1, 40: re }), { 10: [1, 79] }, { 10: [1, 80] }, { 10: [1, 81] }, { 10: [1, 82] }, { 14: x1, 44: C1, 60: D1, 80: [1, 86], 89: T1, 95: [1, 83], 97: [1, 84], 101: 85, 105: S1, 106: F1, 109: _1, 111: B1, 114: v1, 115: w1, 116: $1, 120: 87 }, e2(T, [2, 185]), e2(T, [2, 186]), e2(T, [2, 187]), e2(T, [2, 188]), e2(A1, [2, 51]), e2(A1, [2, 54], { 46: [1, 99] }), e2(M, [2, 72], { 113: 112, 29: [1, 100], 44: A, 48: [1, 101], 50: [1, 102], 52: [1, 103], 54: [1, 104], 56: [1, 105], 58: [1, 106], 60: x, 63: [1, 107], 65: [1, 108], 67: [1, 109], 68: [1, 110], 70: [1, 111], 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 114: N, 115: P, 116: G }), e2(W, [2, 181]), e2(W, [2, 142]), e2(W, [2, 143]), e2(W, [2, 144]), e2(W, [2, 145]), e2(W, [2, 146]), e2(W, [2, 147]), e2(W, [2, 148]), e2(W, [2, 149]), e2(W, [2, 150]), e2(W, [2, 151]), e2(W, [2, 152]), e2(a2, [2, 12]), e2(a2, [2, 18]), e2(a2, [2, 19]), { 9: [1, 113] }, e2(ae2, [2, 26], { 18: 114, 10: h1 }), e2(T, [2, 27]), { 42: 115, 43: 38, 44: A, 45: 39, 47: 40, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G }, e2(T, [2, 40]), e2(T, [2, 41]), e2(T, [2, 42]), e2(L1, [2, 76], { 73: 116, 62: [1, 118], 74: [1, 117] }), { 76: 119, 79: 120, 80: ne, 81: ue, 116: K1, 119: j1 }, { 75: [1, 125], 77: [1, 126] }, e2(oe, [2, 83]), e2(T, [2, 28]), e2(T, [2, 29]), e2(T, [2, 30]), e2(T, [2, 31]), e2(T, [2, 32]), { 10: le, 12: ce, 14: he, 27: de, 28: 127, 32: pe, 44: ge, 60: fe2, 75: be, 80: [1, 129], 81: [1, 130], 83: 140, 84: Ae, 85: ke, 86: ye, 87: Ee, 88: me, 89: xe, 90: Ce, 91: 128, 105: De, 109: Te, 111: Se, 114: Fe, 115: _e, 116: Be }, e2(H1, p, { 5: 153 }), e2(T, [2, 37]), e2(T, [2, 38]), e2(m1, [2, 48], { 44: ve }), e2(m1, [2, 49], { 18: 155, 10: h1, 40: we }), e2(A1, [2, 44]), { 44: A, 47: 157, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G }, { 102: [1, 158], 103: 159, 105: [1, 160] }, { 44: A, 47: 161, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G }, { 44: A, 47: 162, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G }, e2(_2, [2, 107], { 10: [1, 163], 96: [1, 164] }), { 80: [1, 165] }, e2(_2, [2, 115], { 120: 167, 10: [1, 166], 14: x1, 44: C1, 60: D1, 89: T1, 105: S1, 106: F1, 109: _1, 111: B1, 114: v1, 115: w1, 116: $1 }), e2(_2, [2, 117], { 10: [1, 168] }), e2(q, [2, 183]), e2(q, [2, 170]), e2(q, [2, 171]), e2(q, [2, 172]), e2(q, [2, 173]), e2(q, [2, 174]), e2(q, [2, 175]), e2(q, [2, 176]), e2(q, [2, 177]), e2(q, [2, 178]), e2(q, [2, 179]), e2(q, [2, 180]), { 44: A, 47: 169, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G }, { 30: 170, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 178, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 180, 50: [1, 179], 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 181, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 182, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 183, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 109: [1, 184] }, { 30: 185, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 186, 65: [1, 187], 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 188, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 189, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 30: 190, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, e2(W, [2, 182]), e2(a2, [2, 20]), e2(ae2, [2, 25]), e2(m1, [2, 46], { 39: 191, 18: 192, 10: h1, 40: re }), e2(L1, [2, 73], { 10: [1, 193] }), { 10: [1, 194] }, { 30: 195, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 77: [1, 196], 79: 197, 116: K1, 119: j1 }, e2(I1, [2, 79]), e2(I1, [2, 81]), e2(I1, [2, 82]), e2(I1, [2, 168]), e2(I1, [2, 169]), { 76: 198, 79: 120, 80: ne, 81: ue, 116: K1, 119: j1 }, e2(oe, [2, 84]), { 8: Q, 9: e1, 10: le, 11: t1, 12: ce, 14: he, 21: 200, 27: de, 29: [1, 199], 32: pe, 44: ge, 60: fe2, 75: be, 83: 140, 84: Ae, 85: ke, 86: ye, 87: Ee, 88: me, 89: xe, 90: Ce, 91: 201, 105: De, 109: Te, 111: Se, 114: Fe, 115: _e, 116: Be }, e2(S, [2, 101]), e2(S, [2, 103]), e2(S, [2, 104]), e2(S, [2, 157]), e2(S, [2, 158]), e2(S, [2, 159]), e2(S, [2, 160]), e2(S, [2, 161]), e2(S, [2, 162]), e2(S, [2, 163]), e2(S, [2, 164]), e2(S, [2, 165]), e2(S, [2, 166]), e2(S, [2, 167]), e2(S, [2, 90]), e2(S, [2, 91]), e2(S, [2, 92]), e2(S, [2, 93]), e2(S, [2, 94]), e2(S, [2, 95]), e2(S, [2, 96]), e2(S, [2, 97]), e2(S, [2, 98]), e2(S, [2, 99]), e2(S, [2, 100]), { 6: 11, 7: 12, 8: d, 9: l2, 10: c, 11: f, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: F, 32: [1, 202], 33: 24, 34: g, 36: D, 38: z, 42: 28, 43: 38, 44: A, 45: 39, 47: 40, 60: x, 84: g1, 85: f1, 86: b1, 87: P1, 88: G1, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G, 121: O1, 122: M1, 123: U1, 124: V1 }, { 10: h1, 18: 203 }, { 44: [1, 204] }, e2(A1, [2, 43]), { 10: [1, 205], 44: A, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 112, 114: N, 115: P, 116: G }, { 10: [1, 206] }, { 10: [1, 207], 106: [1, 208] }, e2($e, [2, 128]), { 10: [1, 209], 44: A, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 112, 114: N, 115: P, 116: G }, { 10: [1, 210], 44: A, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 112, 114: N, 115: P, 116: G }, { 80: [1, 211] }, e2(_2, [2, 109], { 10: [1, 212] }), e2(_2, [2, 111], { 10: [1, 213] }), { 80: [1, 214] }, e2(q, [2, 184]), { 80: [1, 215], 98: [1, 216] }, e2(A1, [2, 55], { 113: 112, 44: A, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 114: N, 115: P, 116: G }), { 31: [1, 217], 67: k, 82: 218, 116: y, 117: E, 118: m }, e2(d1, [2, 86]), e2(d1, [2, 88]), e2(d1, [2, 89]), e2(d1, [2, 153]), e2(d1, [2, 154]), e2(d1, [2, 155]), e2(d1, [2, 156]), { 49: [1, 219], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 30: 220, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 51: [1, 221], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 53: [1, 222], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 55: [1, 223], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 57: [1, 224], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 60: [1, 225] }, { 64: [1, 226], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 66: [1, 227], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 30: 228, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, { 31: [1, 229], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 67: k, 69: [1, 230], 71: [1, 231], 82: 218, 116: y, 117: E, 118: m }, { 67: k, 69: [1, 233], 71: [1, 232], 82: 218, 116: y, 117: E, 118: m }, e2(m1, [2, 45], { 18: 155, 10: h1, 40: we }), e2(m1, [2, 47], { 44: ve }), e2(L1, [2, 75]), e2(L1, [2, 74]), { 62: [1, 234], 67: k, 82: 218, 116: y, 117: E, 118: m }, e2(L1, [2, 77]), e2(I1, [2, 80]), { 77: [1, 235], 79: 197, 116: K1, 119: j1 }, { 30: 236, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, e2(H1, p, { 5: 237 }), e2(S, [2, 102]), e2(T, [2, 35]), { 43: 238, 44: A, 45: 39, 47: 40, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G }, { 10: h1, 18: 239 }, { 10: s1, 60: i1, 84: r1, 92: 240, 105: a1, 107: 241, 108: 242, 109: n1, 110: u1, 111: o1, 112: l1 }, { 10: s1, 60: i1, 84: r1, 92: 251, 104: [1, 252], 105: a1, 107: 241, 108: 242, 109: n1, 110: u1, 111: o1, 112: l1 }, { 10: s1, 60: i1, 84: r1, 92: 253, 104: [1, 254], 105: a1, 107: 241, 108: 242, 109: n1, 110: u1, 111: o1, 112: l1 }, { 105: [1, 255] }, { 10: s1, 60: i1, 84: r1, 92: 256, 105: a1, 107: 241, 108: 242, 109: n1, 110: u1, 111: o1, 112: l1 }, { 44: A, 47: 257, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G }, e2(_2, [2, 108]), { 80: [1, 258] }, { 80: [1, 259], 98: [1, 260] }, e2(_2, [2, 116]), e2(_2, [2, 118], { 10: [1, 261] }), e2(_2, [2, 119]), e2(M, [2, 56]), e2(d1, [2, 87]), e2(M, [2, 57]), { 51: [1, 262], 67: k, 82: 218, 116: y, 117: E, 118: m }, e2(M, [2, 64]), e2(M, [2, 59]), e2(M, [2, 60]), e2(M, [2, 61]), { 109: [1, 263] }, e2(M, [2, 63]), e2(M, [2, 65]), { 66: [1, 264], 67: k, 82: 218, 116: y, 117: E, 118: m }, e2(M, [2, 67]), e2(M, [2, 68]), e2(M, [2, 70]), e2(M, [2, 69]), e2(M, [2, 71]), e2([10, 44, 60, 89, 102, 105, 106, 109, 111, 114, 115, 116], [2, 85]), e2(L1, [2, 78]), { 31: [1, 265], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 6: 11, 7: 12, 8: d, 9: l2, 10: c, 11: f, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: F, 32: [1, 266], 33: 24, 34: g, 36: D, 38: z, 42: 28, 43: 38, 44: A, 45: 39, 47: 40, 60: x, 84: g1, 85: f1, 86: b1, 87: P1, 88: G1, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G, 121: O1, 122: M1, 123: U1, 124: V1 }, e2(A1, [2, 53]), { 43: 267, 44: A, 45: 39, 47: 40, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G }, e2(_2, [2, 121], { 106: R1 }), e2(Le, [2, 130], { 108: 269, 10: s1, 60: i1, 84: r1, 105: a1, 109: n1, 110: u1, 111: o1, 112: l1 }), e2(J, [2, 132]), e2(J, [2, 134]), e2(J, [2, 135]), e2(J, [2, 136]), e2(J, [2, 137]), e2(J, [2, 138]), e2(J, [2, 139]), e2(J, [2, 140]), e2(J, [2, 141]), e2(_2, [2, 122], { 106: R1 }), { 10: [1, 270] }, e2(_2, [2, 123], { 106: R1 }), { 10: [1, 271] }, e2($e, [2, 129]), e2(_2, [2, 105], { 106: R1 }), e2(_2, [2, 106], { 113: 112, 44: A, 60: x, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 114: N, 115: P, 116: G }), e2(_2, [2, 110]), e2(_2, [2, 112], { 10: [1, 272] }), e2(_2, [2, 113]), { 98: [1, 273] }, { 51: [1, 274] }, { 62: [1, 275] }, { 66: [1, 276] }, { 8: Q, 9: e1, 11: t1, 21: 277 }, e2(T, [2, 34]), e2(A1, [2, 52]), { 10: s1, 60: i1, 84: r1, 105: a1, 107: 278, 108: 242, 109: n1, 110: u1, 111: o1, 112: l1 }, e2(J, [2, 133]), { 14: x1, 44: C1, 60: D1, 89: T1, 101: 279, 105: S1, 106: F1, 109: _1, 111: B1, 114: v1, 115: w1, 116: $1, 120: 87 }, { 14: x1, 44: C1, 60: D1, 89: T1, 101: 280, 105: S1, 106: F1, 109: _1, 111: B1, 114: v1, 115: w1, 116: $1, 120: 87 }, { 98: [1, 281] }, e2(_2, [2, 120]), e2(M, [2, 58]), { 30: 282, 67: k, 80: U, 81: V, 82: 171, 116: y, 117: E, 118: m }, e2(M, [2, 66]), e2(H1, p, { 5: 283 }), e2(Le, [2, 131], { 108: 269, 10: s1, 60: i1, 84: r1, 105: a1, 109: n1, 110: u1, 111: o1, 112: l1 }), e2(_2, [2, 126], { 120: 167, 10: [1, 284], 14: x1, 44: C1, 60: D1, 89: T1, 105: S1, 106: F1, 109: _1, 111: B1, 114: v1, 115: w1, 116: $1 }), e2(_2, [2, 127], { 120: 167, 10: [1, 285], 14: x1, 44: C1, 60: D1, 89: T1, 105: S1, 106: F1, 109: _1, 111: B1, 114: v1, 115: w1, 116: $1 }), e2(_2, [2, 114]), { 31: [1, 286], 67: k, 82: 218, 116: y, 117: E, 118: m }, { 6: 11, 7: 12, 8: d, 9: l2, 10: c, 11: f, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: F, 32: [1, 287], 33: 24, 34: g, 36: D, 38: z, 42: 28, 43: 38, 44: A, 45: 39, 47: 40, 60: x, 84: g1, 85: f1, 86: b1, 87: P1, 88: G1, 89: v, 102: w, 105: $2, 106: L, 109: I, 111: R, 113: 41, 114: N, 115: P, 116: G, 121: O1, 122: M1, 123: U1, 124: V1 }, { 10: s1, 60: i1, 84: r1, 92: 288, 105: a1, 107: 241, 108: 242, 109: n1, 110: u1, 111: o1, 112: l1 }, { 10: s1, 60: i1, 84: r1, 92: 289, 105: a1, 107: 241, 108: 242, 109: n1, 110: u1, 111: o1, 112: l1 }, e2(M, [2, 62]), e2(T, [2, 33]), e2(_2, [2, 124], { 106: R1 }), e2(_2, [2, 125], { 106: R1 })],
    defaultActions: {},
    parseError: _(function(Y, o) {
      if (o.recoverable)
        this.trace(Y);
      else {
        var h = new Error(Y);
        throw h.hash = o, h;
      }
    }, "parseError"),
    parse: _(function(Y) {
      var o = this, h = [0], u = [], C = [null], t = [], K = this.table, s = "", B = 0, Ie = 0, Ve = 2, Re = 1, Ke = t.slice.call(arguments, 1), O = Object.create(this.lexer), k1 = { yy: {} };
      for (var J1 in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, J1) && (k1.yy[J1] = this.yy[J1]);
      O.setInput(Y, k1.yy), k1.yy.lexer = O, k1.yy.parser = this, typeof O.yylloc > "u" && (O.yylloc = {});
      var Y1 = O.yylloc;
      t.push(Y1);
      var je = O.options && O.options.ranges;
      typeof k1.yy.parseError == "function" ? this.parseError = k1.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ze(H) {
        h.length = h.length - 2 * H, C.length = C.length - H, t.length = t.length - H;
      }
      _(ze, "popStack");
      function Ne() {
        var H;
        return H = u.pop() || O.lex() || Re, typeof H != "number" && (H instanceof Array && (u = H, H = u.pop()), H = o.symbols_[H] || H), H;
      }
      _(Ne, "lex");
      for (var j, y1, X, Z1, N1 = {}, W1, c1, Pe, q1; ; ) {
        if (y1 = h[h.length - 1], this.defaultActions[y1] ? X = this.defaultActions[y1] : ((j === null || typeof j > "u") && (j = Ne()), X = K[y1] && K[y1][j]), typeof X > "u" || !X.length || !X[0]) {
          var Q1 = "";
          q1 = [];
          for (W1 in K[y1])
            this.terminals_[W1] && W1 > Ve && q1.push("'" + this.terminals_[W1] + "'");
          O.showPosition ? Q1 = "Parse error on line " + (B + 1) + `:
` + O.showPosition() + `
Expecting ` + q1.join(", ") + ", got '" + (this.terminals_[j] || j) + "'" : Q1 = "Parse error on line " + (B + 1) + ": Unexpected " + (j == Re ? "end of input" : "'" + (this.terminals_[j] || j) + "'"), this.parseError(Q1, {
            text: O.match,
            token: this.terminals_[j] || j,
            line: O.yylineno,
            loc: Y1,
            expected: q1
          });
        }
        if (X[0] instanceof Array && X.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + y1 + ", token: " + j);
        switch (X[0]) {
          case 1:
            h.push(j), C.push(O.yytext), t.push(O.yylloc), h.push(X[1]), j = null, Ie = O.yyleng, s = O.yytext, B = O.yylineno, Y1 = O.yylloc;
            break;
          case 2:
            if (c1 = this.productions_[X[1]][1], N1.$ = C[C.length - c1], N1._$ = {
              first_line: t[t.length - (c1 || 1)].first_line,
              last_line: t[t.length - 1].last_line,
              first_column: t[t.length - (c1 || 1)].first_column,
              last_column: t[t.length - 1].last_column
            }, je && (N1._$.range = [
              t[t.length - (c1 || 1)].range[0],
              t[t.length - 1].range[1]
            ]), Z1 = this.performAction.apply(N1, [
              s,
              Ie,
              B,
              k1.yy,
              X[1],
              C,
              t
            ].concat(Ke)), typeof Z1 < "u")
              return Z1;
            c1 && (h = h.slice(0, -1 * c1 * 2), C = C.slice(0, -1 * c1), t = t.slice(0, -1 * c1)), h.push(this.productions_[X[1]][0]), C.push(N1.$), t.push(N1._$), Pe = K[h[h.length - 2]][h[h.length - 1]], h.push(Pe);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, Ue = function() {
    var Y = {
      EOF: 1,
      parseError: _(function(o, h) {
        if (this.yy.parser)
          this.yy.parser.parseError(o, h);
        else
          throw new Error(o);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: _(function(o, h) {
        return this.yy = h || this.yy || {}, this._input = o, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: _(function() {
        var o = this._input[0];
        this.yytext += o, this.yyleng++, this.offset++, this.match += o, this.matched += o;
        var h = o.match(/(?:\r\n?|\n).*/g);
        return h ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), o;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: _(function(o) {
        var h = o.length, u = o.split(/(?:\r\n?|\n)/g);
        this._input = o + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - h), this.offset -= h;
        var C = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u.length - 1 && (this.yylineno -= u.length - 1);
        var t = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: u ? (u.length === C.length ? this.yylloc.first_column : 0) + C[C.length - u.length].length - u[0].length : this.yylloc.first_column - h
        }, this.options.ranges && (this.yylloc.range = [t[0], t[0] + this.yyleng - h]), this.yyleng = this.yytext.length, this;
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
      less: _(function(o) {
        this.unput(this.match.slice(o));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: _(function() {
        var o = this.matched.substr(0, this.matched.length - this.match.length);
        return (o.length > 20 ? "..." : "") + o.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: _(function() {
        var o = this.match;
        return o.length < 20 && (o += this._input.substr(0, 20 - o.length)), (o.substr(0, 20) + (o.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: _(function() {
        var o = this.pastInput(), h = new Array(o.length + 1).join("-");
        return o + this.upcomingInput() + `
` + h + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: _(function(o, h) {
        var u, C, t;
        if (this.options.backtrack_lexer && (t = {
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
        }, this.options.ranges && (t.yylloc.range = this.yylloc.range.slice(0))), C = o[0].match(/(?:\r\n?|\n).*/g), C && (this.yylineno += C.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: C ? C[C.length - 1].length - C[C.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
        }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(o[0].length), this.matched += o[0], u = this.performAction.call(this, this.yy, this, h, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), u)
          return u;
        if (this._backtrack) {
          for (var K in t)
            this[K] = t[K];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: _(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var o, h, u, C;
        this._more || (this.yytext = "", this.match = "");
        for (var t = this._currentRules(), K = 0; K < t.length; K++)
          if (u = this._input.match(this.rules[t[K]]), u && (!h || u[0].length > h[0].length)) {
            if (h = u, C = K, this.options.backtrack_lexer) {
              if (o = this.test_match(u, t[K]), o !== false)
                return o;
              if (this._backtrack) {
                h = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return h ? (o = this.test_match(h, t[C]), o !== false ? o : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: _(function() {
        var o = this.next();
        return o || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: _(function(o) {
        this.conditionStack.push(o);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: _(function() {
        var o = this.conditionStack.length - 1;
        return o > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: _(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: _(function(o) {
        return o = this.conditionStack.length - 1 - Math.abs(o || 0), o >= 0 ? this.conditionStack[o] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: _(function(o) {
        this.begin(o);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: _(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: _(function(o, h, u, C) {
        switch (u) {
          case 0:
            return this.begin("acc_title"), 34;
          case 1:
            return this.popState(), "acc_title_value";
          case 2:
            return this.begin("acc_descr"), 36;
          case 3:
            return this.popState(), "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            return this.pushState("shapeData"), h.yytext = "", 40;
          case 8:
            return this.pushState("shapeDataStr"), 40;
          case 9:
            return this.popState(), 40;
          case 10:
            const t = /\n\s*/g;
            return h.yytext = h.yytext.replace(t, "<br/>"), 40;
          case 11:
            return 40;
          case 12:
            this.popState();
            break;
          case 13:
            this.begin("callbackname");
            break;
          case 14:
            this.popState();
            break;
          case 15:
            this.popState(), this.begin("callbackargs");
            break;
          case 16:
            return 95;
          case 17:
            this.popState();
            break;
          case 18:
            return 96;
          case 19:
            return "MD_STR";
          case 20:
            this.popState();
            break;
          case 21:
            this.begin("md_string");
            break;
          case 22:
            return "STR";
          case 23:
            this.popState();
            break;
          case 24:
            this.pushState("string");
            break;
          case 25:
            return 84;
          case 26:
            return 102;
          case 27:
            return 85;
          case 28:
            return 104;
          case 29:
            return 86;
          case 30:
            return 87;
          case 31:
            return 97;
          case 32:
            this.begin("click");
            break;
          case 33:
            this.popState();
            break;
          case 34:
            return 88;
          case 35:
            return o.lex.firstGraph() && this.begin("dir"), 12;
          case 36:
            return o.lex.firstGraph() && this.begin("dir"), 12;
          case 37:
            return o.lex.firstGraph() && this.begin("dir"), 12;
          case 38:
            return 27;
          case 39:
            return 32;
          case 40:
            return 98;
          case 41:
            return 98;
          case 42:
            return 98;
          case 43:
            return 98;
          case 44:
            return this.popState(), 13;
          case 45:
            return this.popState(), 14;
          case 46:
            return this.popState(), 14;
          case 47:
            return this.popState(), 14;
          case 48:
            return this.popState(), 14;
          case 49:
            return this.popState(), 14;
          case 50:
            return this.popState(), 14;
          case 51:
            return this.popState(), 14;
          case 52:
            return this.popState(), 14;
          case 53:
            return this.popState(), 14;
          case 54:
            return this.popState(), 14;
          case 55:
            return 121;
          case 56:
            return 122;
          case 57:
            return 123;
          case 58:
            return 124;
          case 59:
            return 78;
          case 60:
            return 105;
          case 61:
            return 111;
          case 62:
            return 46;
          case 63:
            return 60;
          case 64:
            return 44;
          case 65:
            return 8;
          case 66:
            return 106;
          case 67:
            return 115;
          case 68:
            return this.popState(), 77;
          case 69:
            return this.pushState("edgeText"), 75;
          case 70:
            return 119;
          case 71:
            return this.popState(), 77;
          case 72:
            return this.pushState("thickEdgeText"), 75;
          case 73:
            return 119;
          case 74:
            return this.popState(), 77;
          case 75:
            return this.pushState("dottedEdgeText"), 75;
          case 76:
            return 119;
          case 77:
            return 77;
          case 78:
            return this.popState(), 53;
          case 79:
            return "TEXT";
          case 80:
            return this.pushState("ellipseText"), 52;
          case 81:
            return this.popState(), 55;
          case 82:
            return this.pushState("text"), 54;
          case 83:
            return this.popState(), 57;
          case 84:
            return this.pushState("text"), 56;
          case 85:
            return 58;
          case 86:
            return this.pushState("text"), 67;
          case 87:
            return this.popState(), 64;
          case 88:
            return this.pushState("text"), 63;
          case 89:
            return this.popState(), 49;
          case 90:
            return this.pushState("text"), 48;
          case 91:
            return this.popState(), 69;
          case 92:
            return this.popState(), 71;
          case 93:
            return 117;
          case 94:
            return this.pushState("trapText"), 68;
          case 95:
            return this.pushState("trapText"), 70;
          case 96:
            return 118;
          case 97:
            return 67;
          case 98:
            return 90;
          case 99:
            return "SEP";
          case 100:
            return 89;
          case 101:
            return 115;
          case 102:
            return 111;
          case 103:
            return 44;
          case 104:
            return 109;
          case 105:
            return 114;
          case 106:
            return 116;
          case 107:
            return this.popState(), 62;
          case 108:
            return this.pushState("text"), 62;
          case 109:
            return this.popState(), 51;
          case 110:
            return this.pushState("text"), 50;
          case 111:
            return this.popState(), 31;
          case 112:
            return this.pushState("text"), 29;
          case 113:
            return this.popState(), 66;
          case 114:
            return this.pushState("text"), 65;
          case 115:
            return "TEXT";
          case 116:
            return "QUOTE";
          case 117:
            return 9;
          case 118:
            return 10;
          case 119:
            return 11;
        }
      }, "anonymous"),
      rules: [/^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:@\{)/, /^(?:["])/, /^(?:["])/, /^(?:[^\"]+)/, /^(?:[^}^"]+)/, /^(?:\})/, /^(?:call[\s]+)/, /^(?:\([\s]*\))/, /^(?:\()/, /^(?:[^(]*)/, /^(?:\))/, /^(?:[^)]*)/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["][`])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:["])/, /^(?:style\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\b)/, /^(?:class\b)/, /^(?:href[\s])/, /^(?:click[\s]+)/, /^(?:[\s\n])/, /^(?:[^\s\n]*)/, /^(?:flowchart-elk\b)/, /^(?:graph\b)/, /^(?:flowchart\b)/, /^(?:subgraph\b)/, /^(?:end\b\s*)/, /^(?:_self\b)/, /^(?:_blank\b)/, /^(?:_parent\b)/, /^(?:_top\b)/, /^(?:(\r?\n)*\s*\n)/, /^(?:\s*LR\b)/, /^(?:\s*RL\b)/, /^(?:\s*TB\b)/, /^(?:\s*BT\b)/, /^(?:\s*TD\b)/, /^(?:\s*BR\b)/, /^(?:\s*<)/, /^(?:\s*>)/, /^(?:\s*\^)/, /^(?:\s*v\b)/, /^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:[^\s\"]+@(?=[^\{\"]))/, /^(?:[0-9]+)/, /^(?:#)/, /^(?::::)/, /^(?::)/, /^(?:&)/, /^(?:;)/, /^(?:,)/, /^(?:\*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:[^-]|-(?!-)+)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:[^=]|=(?!))/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:[^\.]|\.(?!))/, /^(?:\s*~~[\~]+\s*)/, /^(?:[-/\)][\)])/, /^(?:[^\(\)\[\]\{\}]|!\)+)/, /^(?:\(-)/, /^(?:\]\))/, /^(?:\(\[)/, /^(?:\]\])/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:>)/, /^(?:\)\])/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\(\(\()/, /^(?:[\\(?=\])][\]])/, /^(?:\/(?=\])\])/, /^(?:\/(?!\])|\\(?!\])|[^\\\[\]\(\)\{\}\/]+)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:<)/, /^(?:>)/, /^(?:\^)/, /^(?:\\\|)/, /^(?:v\b)/, /^(?:\*)/, /^(?:#)/, /^(?:&)/, /^(?:([A-Za-z0-9!"\#$%&'*+\.`?\\_\/]|-(?=[^\>\-\.])|(?!))+)/, /^(?:-)/, /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/, /^(?:\|)/, /^(?:\|)/, /^(?:\))/, /^(?:\()/, /^(?:\])/, /^(?:\[)/, /^(?:(\}))/, /^(?:\{)/, /^(?:[^\[\]\(\)\{\}\|\"]+)/, /^(?:")/, /^(?:(\r?\n)+)/, /^(?:\s)/, /^(?:$)/],
      conditions: { shapeDataEndBracket: { rules: [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, shapeDataStr: { rules: [9, 10, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, shapeData: { rules: [8, 11, 12, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, callbackargs: { rules: [17, 18, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, callbackname: { rules: [14, 15, 16, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, href: { rules: [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, click: { rules: [21, 24, 33, 34, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, dottedEdgeText: { rules: [21, 24, 74, 76, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, thickEdgeText: { rules: [21, 24, 71, 73, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, edgeText: { rules: [21, 24, 68, 70, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, trapText: { rules: [21, 24, 77, 80, 82, 84, 88, 90, 91, 92, 93, 94, 95, 108, 110, 112, 114], inclusive: false }, ellipseText: { rules: [21, 24, 77, 78, 79, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, text: { rules: [21, 24, 77, 80, 81, 82, 83, 84, 87, 88, 89, 90, 94, 95, 107, 108, 109, 110, 111, 112, 113, 114, 115], inclusive: false }, vertex: { rules: [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, dir: { rules: [21, 24, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, acc_descr_multiline: { rules: [5, 6, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, acc_descr: { rules: [3, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, acc_title: { rules: [1, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, md_string: { rules: [19, 20, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, string: { rules: [21, 22, 23, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114], inclusive: false }, INITIAL: { rules: [0, 2, 4, 7, 13, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 74, 75, 77, 80, 82, 84, 85, 86, 88, 90, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 110, 112, 114, 116, 117, 118, 119], inclusive: true } }
    };
    return Y;
  }();
  X1.lexer = Ue;
  function z1() {
    this.yy = {};
  }
  return _(z1, "Parser"), z1.prototype = X1, X1.Parser = z1, new z1();
}();
ie.parser = ie;
var Oe = ie;
var Me = Object.assign({}, Oe);
Me.parse = (e2) => {
  const i = e2.replace(/}\s*\n/g, `}
`);
  return Oe.parse(i);
};
var bt = Me;
var At = _((e2, i) => {
  const r = e, n = r(e2, "r"), a2 = r(e2, "g"), p = r(e2, "b");
  return yl(n, a2, p, i);
}, "fade");
var kt = _((e2) => `.label {
    font-family: ${e2.fontFamily};
    color: ${e2.nodeTextColor || e2.textColor};
  }
  .cluster-label text {
    fill: ${e2.titleColor};
  }
  .cluster-label span {
    color: ${e2.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
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
  .rough-node .label text , .node .label text, .image-shape .label, .icon-shape .label {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .rough-node .label,.node .label, .image-shape .label, .icon-shape .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }


  .root .anchor path {
    fill: ${e2.lineColor} !important;
    stroke-width: 0;
    stroke: ${e2.lineColor};
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
    p {
      background-color: ${e2.edgeLabelBackground};
    }
    rect {
      opacity: 0.5;
      background-color: ${e2.edgeLabelBackground};
      fill: ${e2.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${At(e2.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .cluster rect {
    fill: ${e2.clusterBkg};
    stroke: ${e2.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e2.titleColor};
  }

  .cluster span {
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

  rect.text {
    fill: none;
    stroke-width: 0;
  }

  .icon-shape, .image-shape {
    background-color: ${e2.edgeLabelBackground};
    p {
      background-color: ${e2.edgeLabelBackground};
      padding: 2px;
    }
    rect {
      opacity: 0.5;
      background-color: ${e2.edgeLabelBackground};
      fill: ${e2.edgeLabelBackground};
    }
    text-align: center;
  }
  ${l()}
`, "getStyles");
var yt = kt;
var Tt = {
  parser: bt,
  get db() {
    return new dt();
  },
  renderer: ft,
  styles: yt,
  init: _((e2) => {
    e2.flowchart || (e2.flowchart = {}), e2.layout && crt({ layout: e2.layout }), e2.flowchart.arrowMarkerAbsolute = e2.arrowMarkerAbsolute, crt({ flowchart: { arrowMarkerAbsolute: e2.arrowMarkerAbsolute } });
  }, "init")
};
export {
  Tt as diagram
};
//# sourceMappingURL=flowDiagram-KYDEHFYC-DpS-glZz-DBnfZMyX-U2QAYT5R.js.map
