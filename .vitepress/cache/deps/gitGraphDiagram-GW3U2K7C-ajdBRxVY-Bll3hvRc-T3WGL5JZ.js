import {
  i
} from "./chunk-MZGMHC6D.js";
import {
  e
} from "./chunk-YXP4Z2OC.js";
import {
  Iy
} from "./chunk-7MGNJ6NO.js";
import "./chunk-5H7L3GAH.js";
import "./chunk-HFG3CCC5.js";
import "./chunk-CSA5CQKO.js";
import {
  HR,
  Hr,
  N6,
  PR,
  RR,
  VR,
  WR,
  Wn,
  _,
  ae,
  fe,
  fo,
  jR,
  kX,
  qR,
  sg,
  ut,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/gitGraphDiagram-GW3U2K7C-ajdBRxVY-Bll3hvRc.js
var x = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
};
var ht = N6.gitGraph;
var P = _(() => sg({
  ...ht,
  ...Hr().gitGraph
}), "getConfig");
var s = new e(() => {
  const r = P(), t = r.mainBranchName, a = r.mainBranchOrder;
  return {
    mainBranchName: t,
    commits: /* @__PURE__ */ new Map(),
    head: null,
    branchConfig: /* @__PURE__ */ new Map([[t, { name: t, order: a }]]),
    branches: /* @__PURE__ */ new Map([[t, null]]),
    currBranch: t,
    direction: "LR",
    seq: 0,
    options: {}
  };
});
function O() {
  return kX({ length: 7 });
}
_(O, "getID");
function N(r, t) {
  const a = /* @__PURE__ */ Object.create(null);
  return r.reduce((n, e2) => {
    const o = t(e2);
    return a[o] || (a[o] = true, n.push(e2)), n;
  }, []);
}
_(N, "uniqBy");
var $t = _(function(r) {
  s.records.direction = r;
}, "setDirection");
var mt = _(function(r) {
  ut.debug("options str", r), r = r == null ? void 0 : r.trim(), r = r || "{}";
  try {
    s.records.options = JSON.parse(r);
  } catch (t) {
    ut.error("error while parsing gitGraph options", t.message);
  }
}, "setOptions");
var lt = _(function() {
  return s.records.options;
}, "getOptions");
var gt = _(function(r) {
  let t = r.msg, a = r.id;
  const n = r.type;
  let e2 = r.tags;
  ut.info("commit", t, a, n, e2), ut.debug("Entering commit:", t, a, n, e2);
  const o = P();
  a = fo.sanitizeText(a, o), t = fo.sanitizeText(t, o), e2 = e2 == null ? void 0 : e2.map((c) => fo.sanitizeText(c, o));
  const d = {
    id: a || s.records.seq + "-" + O(),
    message: t,
    seq: s.records.seq++,
    type: n ?? x.NORMAL,
    tags: e2 ?? [],
    parents: s.records.head == null ? [] : [s.records.head.id],
    branch: s.records.currBranch
  };
  s.records.head = d, ut.info("main branch", o.mainBranchName), s.records.commits.has(d.id) && ut.warn(`Commit ID ${d.id} already exists`), s.records.commits.set(d.id, d), s.records.branches.set(s.records.currBranch, d.id), ut.debug("in pushCommit " + d.id);
}, "commit");
var yt = _(function(r) {
  let t = r.name;
  const a = r.order;
  if (t = fo.sanitizeText(t, P()), s.records.branches.has(t))
    throw new Error(
      `Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${t}")`
    );
  s.records.branches.set(t, s.records.head != null ? s.records.head.id : null), s.records.branchConfig.set(t, { name: t, order: a }), D(t), ut.debug("in createBranch");
}, "branch");
var pt = _((r) => {
  let t = r.branch, a = r.id;
  const n = r.type, e2 = r.tags, o = P();
  t = fo.sanitizeText(t, o), a && (a = fo.sanitizeText(a, o));
  const d = s.records.branches.get(s.records.currBranch), c = s.records.branches.get(t), l = d ? s.records.commits.get(d) : void 0, $ = c ? s.records.commits.get(c) : void 0;
  if (l && $ && l.branch === t)
    throw new Error(`Cannot merge branch '${t}' into itself.`);
  if (s.records.currBranch === t) {
    const i2 = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
    throw i2.hash = {
      text: `merge ${t}`,
      token: `merge ${t}`,
      expected: ["branch abc"]
    }, i2;
  }
  if (l === void 0 || !l) {
    const i2 = new Error(
      `Incorrect usage of "merge". Current branch (${s.records.currBranch})has no commits`
    );
    throw i2.hash = {
      text: `merge ${t}`,
      token: `merge ${t}`,
      expected: ["commit"]
    }, i2;
  }
  if (!s.records.branches.has(t)) {
    const i2 = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + t + ") does not exist"
    );
    throw i2.hash = {
      text: `merge ${t}`,
      token: `merge ${t}`,
      expected: [`branch ${t}`]
    }, i2;
  }
  if ($ === void 0 || !$) {
    const i2 = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + t + ") has no commits"
    );
    throw i2.hash = {
      text: `merge ${t}`,
      token: `merge ${t}`,
      expected: ['"commit"']
    }, i2;
  }
  if (l === $) {
    const i2 = new Error('Incorrect usage of "merge". Both branches have same head');
    throw i2.hash = {
      text: `merge ${t}`,
      token: `merge ${t}`,
      expected: ["branch abc"]
    }, i2;
  }
  if (a && s.records.commits.has(a)) {
    const i2 = new Error(
      'Incorrect usage of "merge". Commit with id:' + a + " already exists, use different custom id"
    );
    throw i2.hash = {
      text: `merge ${t} ${a} ${n} ${e2 == null ? void 0 : e2.join(" ")}`,
      token: `merge ${t} ${a} ${n} ${e2 == null ? void 0 : e2.join(" ")}`,
      expected: [
        `merge ${t} ${a}_UNIQUE ${n} ${e2 == null ? void 0 : e2.join(" ")}`
      ]
    }, i2;
  }
  const m = c || "", g = {
    id: a || `${s.records.seq}-${O()}`,
    message: `merged branch ${t} into ${s.records.currBranch}`,
    seq: s.records.seq++,
    parents: s.records.head == null ? [] : [s.records.head.id, m],
    branch: s.records.currBranch,
    type: x.MERGE,
    customType: n,
    customId: !!a,
    tags: e2 ?? []
  };
  s.records.head = g, s.records.commits.set(g.id, g), s.records.branches.set(s.records.currBranch, g.id), ut.debug(s.records.branches), ut.debug("in mergeBranch");
}, "merge");
var xt = _(function(r) {
  let t = r.id, a = r.targetId, n = r.tags, e2 = r.parent;
  ut.debug("Entering cherryPick:", t, a, n);
  const o = P();
  if (t = fo.sanitizeText(t, o), a = fo.sanitizeText(a, o), n = n == null ? void 0 : n.map((l) => fo.sanitizeText(l, o)), e2 = fo.sanitizeText(e2, o), !t || !s.records.commits.has(t)) {
    const l = new Error(
      'Incorrect usage of "cherryPick". Source commit id should exist and provided'
    );
    throw l.hash = {
      text: `cherryPick ${t} ${a}`,
      token: `cherryPick ${t} ${a}`,
      expected: ["cherry-pick abc"]
    }, l;
  }
  const d = s.records.commits.get(t);
  if (d === void 0 || !d)
    throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
  if (e2 && !(Array.isArray(d.parents) && d.parents.includes(e2)))
    throw new Error(
      "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit."
    );
  const c = d.branch;
  if (d.type === x.MERGE && !e2)
    throw new Error(
      "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified."
    );
  if (!a || !s.records.commits.has(a)) {
    if (c === s.records.currBranch) {
      const g = new Error(
        'Incorrect usage of "cherryPick". Source commit is already on current branch'
      );
      throw g.hash = {
        text: `cherryPick ${t} ${a}`,
        token: `cherryPick ${t} ${a}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const l = s.records.branches.get(s.records.currBranch);
    if (l === void 0 || !l) {
      const g = new Error(
        `Incorrect usage of "cherry-pick". Current branch (${s.records.currBranch})has no commits`
      );
      throw g.hash = {
        text: `cherryPick ${t} ${a}`,
        token: `cherryPick ${t} ${a}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const $ = s.records.commits.get(l);
    if ($ === void 0 || !$) {
      const g = new Error(
        `Incorrect usage of "cherry-pick". Current branch (${s.records.currBranch})has no commits`
      );
      throw g.hash = {
        text: `cherryPick ${t} ${a}`,
        token: `cherryPick ${t} ${a}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const m = {
      id: s.records.seq + "-" + O(),
      message: `cherry-picked ${d == null ? void 0 : d.message} into ${s.records.currBranch}`,
      seq: s.records.seq++,
      parents: s.records.head == null ? [] : [s.records.head.id, d.id],
      branch: s.records.currBranch,
      type: x.CHERRY_PICK,
      tags: n ? n.filter(Boolean) : [
        `cherry-pick:${d.id}${d.type === x.MERGE ? `|parent:${e2}` : ""}`
      ]
    };
    s.records.head = m, s.records.commits.set(m.id, m), s.records.branches.set(s.records.currBranch, m.id), ut.debug(s.records.branches), ut.debug("in cherryPick");
  }
}, "cherryPick");
var D = _(function(r) {
  if (r = fo.sanitizeText(r, P()), s.records.branches.has(r)) {
    s.records.currBranch = r;
    const t = s.records.branches.get(s.records.currBranch);
    t === void 0 || !t ? s.records.head = null : s.records.head = s.records.commits.get(t) ?? null;
  } else {
    const t = new Error(
      `Trying to checkout branch which is not yet created. (Help try using "branch ${r}")`
    );
    throw t.hash = {
      text: `checkout ${r}`,
      token: `checkout ${r}`,
      expected: [`branch ${r}`]
    }, t;
  }
}, "checkout");
function H(r, t, a) {
  const n = r.indexOf(t);
  n === -1 ? r.push(a) : r.splice(n, 1, a);
}
_(H, "upsert");
function S(r) {
  const t = r.reduce((e2, o) => e2.seq > o.seq ? e2 : o, r[0]);
  let a = "";
  r.forEach(function(e2) {
    e2 === t ? a += "	*" : a += "	|";
  });
  const n = [a, t.id, t.seq];
  for (const e2 in s.records.branches)
    s.records.branches.get(e2) === t.id && n.push(e2);
  if (ut.debug(n.join(" ")), t.parents && t.parents.length == 2 && t.parents[0] && t.parents[1]) {
    const e2 = s.records.commits.get(t.parents[0]);
    H(r, t, e2), t.parents[1] && r.push(s.records.commits.get(t.parents[1]));
  } else {
    if (t.parents.length == 0)
      return;
    if (t.parents[0]) {
      const e2 = s.records.commits.get(t.parents[0]);
      H(r, t, e2);
    }
  }
  r = N(r, (e2) => e2.id), S(r);
}
_(S, "prettyPrintCommitHistory");
var ft = _(function() {
  ut.debug(s.records.commits);
  const r = W()[0];
  S([r]);
}, "prettyPrint");
var ut2 = _(function() {
  s.reset(), zR();
}, "clear");
var bt = _(function() {
  return [...s.records.branchConfig.values()].map((r, t) => r.order !== null && r.order !== void 0 ? r : {
    ...r,
    order: parseFloat(`0.${t}`)
  }).sort((r, t) => (r.order ?? 0) - (t.order ?? 0)).map(({ name: r }) => ({ name: r }));
}, "getBranchesAsObjArray");
var wt = _(function() {
  return s.records.branches;
}, "getBranches");
var Bt = _(function() {
  return s.records.commits;
}, "getCommits");
var W = _(function() {
  const r = [...s.records.commits.values()];
  return r.forEach(function(t) {
    ut.debug(t.id);
  }), r.sort((t, a) => t.seq - a.seq), r;
}, "getCommitsArray");
var Et = _(function() {
  return s.records.currBranch;
}, "getCurrentBranch");
var kt = _(function() {
  return s.records.direction;
}, "getDirection");
var Ct = _(function() {
  return s.records.head;
}, "getHead");
var j = {
  commitType: x,
  getConfig: P,
  setDirection: $t,
  setOptions: mt,
  getOptions: lt,
  commit: gt,
  branch: yt,
  merge: pt,
  cherryPick: xt,
  checkout: D,
  //reset,
  prettyPrint: ft,
  clear: ut2,
  getBranchesAsObjArray: bt,
  getBranches: wt,
  getCommits: Bt,
  getCommitsArray: W,
  getCurrentBranch: Et,
  getDirection: kt,
  getHead: Ct,
  setAccTitle: qR,
  getAccTitle: RR,
  getAccDescription: jR,
  setAccDescription: PR,
  setDiagramTitle: WR,
  getDiagramTitle: HR
};
var Lt = _((r, t) => {
  i(r, t), r.dir && t.setDirection(r.dir);
  for (const a of r.statements)
    Tt(a, t);
}, "populate");
var Tt = _((r, t) => {
  const a = {
    Commit: _((n) => t.commit(Mt(n)), "Commit"),
    Branch: _((n) => t.branch(vt(n)), "Branch"),
    Merge: _((n) => t.merge(Pt(n)), "Merge"),
    Checkout: _((n) => t.checkout(Rt(n)), "Checkout"),
    CherryPicking: _((n) => t.cherryPick(At(n)), "CherryPicking")
  }[r.$type];
  a ? a(r) : ut.error(`Unknown statement type: ${r.$type}`);
}, "parseStatement");
var Mt = _((r) => ({
  id: r.id,
  msg: r.message ?? "",
  type: r.type !== void 0 ? x[r.type] : x.NORMAL,
  tags: r.tags ?? void 0
}), "parseCommit");
var vt = _((r) => ({
  name: r.name,
  order: r.order ?? 0
}), "parseBranch");
var Pt = _((r) => ({
  branch: r.branch,
  id: r.id ?? "",
  type: r.type !== void 0 ? x[r.type] : void 0,
  tags: r.tags ?? void 0
}), "parseMerge");
var Rt = _((r) => r.branch, "parseCheckout");
var At = _((r) => {
  var _a;
  return {
    id: r.id,
    targetId: "",
    tags: ((_a = r.tags) == null ? void 0 : _a.length) === 0 ? void 0 : r.tags,
    parent: r.parent
  };
}, "parseCherryPicking");
var It = {
  parse: _(async (r) => {
    const t = await Iy("gitGraph", r);
    ut.debug(t), Lt(t, j);
  }, "parse")
};
var Gt = fe();
var B = Gt == null ? void 0 : Gt.gitGraph;
var T = 10;
var M = 40;
var k = 4;
var C = 2;
var v = 8;
var b = /* @__PURE__ */ new Map();
var w = /* @__PURE__ */ new Map();
var I = 30;
var R = /* @__PURE__ */ new Map();
var G = [];
var L = 0;
var y = "LR";
var Ot = _(() => {
  b.clear(), w.clear(), R.clear(), L = 0, G = [], y = "LR";
}, "clear");
var _2 = _((r) => {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
  return (typeof r == "string" ? r.split(/\\n|\n|<br\s*\/?>/gi) : r).forEach((a) => {
    const n = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), n.setAttribute("dy", "1em"), n.setAttribute("x", "0"), n.setAttribute("class", "row"), n.textContent = a.trim(), t.appendChild(n);
  }), t;
}, "drawText");
var F = _((r) => {
  let t, a, n;
  return y === "BT" ? (a = _((e2, o) => e2 <= o, "comparisonFunc"), n = 1 / 0) : (a = _((e2, o) => e2 >= o, "comparisonFunc"), n = 0), r.forEach((e2) => {
    var _a, _b;
    const o = y === "TB" || y == "BT" ? (_a = w.get(e2)) == null ? void 0 : _a.y : (_b = w.get(e2)) == null ? void 0 : _b.x;
    o !== void 0 && a(o, n) && (t = e2, n = o);
  }), t;
}, "findClosestParent");
var qt = _((r) => {
  let t = "", a = 1 / 0;
  return r.forEach((n) => {
    const e2 = w.get(n).y;
    e2 <= a && (t = n, a = e2);
  }), t || void 0;
}, "findClosestParentBT");
var Ht = _((r, t, a) => {
  let n = a, e2 = a;
  const o = [];
  r.forEach((d) => {
    const c = t.get(d);
    if (!c)
      throw new Error(`Commit not found for key ${d}`);
    c.parents.length ? (n = zt(c), e2 = Math.max(n, e2)) : o.push(c), Nt(c, n);
  }), n = e2, o.forEach((d) => {
    Dt(d, n, a);
  }), r.forEach((d) => {
    const c = t.get(d);
    if (c == null ? void 0 : c.parents.length) {
      const l = qt(c.parents);
      n = w.get(l).y - M, n <= e2 && (e2 = n);
      const $ = b.get(c.branch).pos, m = n - T;
      w.set(c.id, { x: $, y: m });
    }
  });
}, "setParallelBTPos");
var St = _((r) => {
  var _a;
  const t = F(r.parents.filter((n) => n !== null));
  if (!t)
    throw new Error(`Closest parent not found for commit ${r.id}`);
  const a = (_a = w.get(t)) == null ? void 0 : _a.y;
  if (a === void 0)
    throw new Error(`Closest parent position not found for commit ${r.id}`);
  return a;
}, "findClosestParentPos");
var zt = _((r) => St(r) + M, "calculateCommitPosition");
var Nt = _((r, t) => {
  const a = b.get(r.branch);
  if (!a)
    throw new Error(`Branch not found for commit ${r.id}`);
  const n = a.pos, e2 = t + T;
  return w.set(r.id, { x: n, y: e2 }), { x: n, y: e2 };
}, "setCommitPosition");
var Dt = _((r, t, a) => {
  const n = b.get(r.branch);
  if (!n)
    throw new Error(`Branch not found for commit ${r.id}`);
  const e2 = t + a, o = n.pos;
  w.set(r.id, { x: o, y: e2 });
}, "setRootPosition");
var Wt = _((r, t, a, n, e2, o) => {
  if (o === x.HIGHLIGHT)
    r.append("rect").attr("x", a.x - 10).attr("y", a.y - 10).attr("width", 20).attr("height", 20).attr(
      "class",
      `commit ${t.id} commit-highlight${e2 % v} ${n}-outer`
    ), r.append("rect").attr("x", a.x - 6).attr("y", a.y - 6).attr("width", 12).attr("height", 12).attr(
      "class",
      `commit ${t.id} commit${e2 % v} ${n}-inner`
    );
  else if (o === x.CHERRY_PICK)
    r.append("circle").attr("cx", a.x).attr("cy", a.y).attr("r", 10).attr("class", `commit ${t.id} ${n}`), r.append("circle").attr("cx", a.x - 3).attr("cy", a.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${t.id} ${n}`), r.append("circle").attr("cx", a.x + 3).attr("cy", a.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${t.id} ${n}`), r.append("line").attr("x1", a.x + 3).attr("y1", a.y + 1).attr("x2", a.x).attr("y2", a.y - 5).attr("stroke", "#fff").attr("class", `commit ${t.id} ${n}`), r.append("line").attr("x1", a.x - 3).attr("y1", a.y + 1).attr("x2", a.x).attr("y2", a.y - 5).attr("stroke", "#fff").attr("class", `commit ${t.id} ${n}`);
  else {
    const d = r.append("circle");
    if (d.attr("cx", a.x), d.attr("cy", a.y), d.attr("r", t.type === x.MERGE ? 9 : 10), d.attr("class", `commit ${t.id} commit${e2 % v}`), o === x.MERGE) {
      const c = r.append("circle");
      c.attr("cx", a.x), c.attr("cy", a.y), c.attr("r", 6), c.attr(
        "class",
        `commit ${n} ${t.id} commit${e2 % v}`
      );
    }
    o === x.REVERSE && r.append("path").attr(
      "d",
      `M ${a.x - 5},${a.y - 5}L${a.x + 5},${a.y + 5}M${a.x - 5},${a.y + 5}L${a.x + 5},${a.y - 5}`
    ).attr("class", `commit ${n} ${t.id} commit${e2 % v}`);
  }
}, "drawCommitBullet");
var jt = _((r, t, a, n) => {
  var _a;
  if (t.type !== x.CHERRY_PICK && (t.customId && t.type === x.MERGE || t.type !== x.MERGE) && (B == null ? void 0 : B.showCommitLabel)) {
    const e2 = r.append("g"), o = e2.insert("rect").attr("class", "commit-label-bkg"), d = e2.append("text").attr("x", n).attr("y", a.y + 25).attr("class", "commit-label").text(t.id), c = (_a = d.node()) == null ? void 0 : _a.getBBox();
    if (c && (o.attr("x", a.posWithOffset - c.width / 2 - C).attr("y", a.y + 13.5).attr("width", c.width + 2 * C).attr("height", c.height + 2 * C), y === "TB" || y === "BT" ? (o.attr("x", a.x - (c.width + 4 * k + 5)).attr("y", a.y - 12), d.attr("x", a.x - (c.width + 4 * k)).attr("y", a.y + c.height - 12)) : d.attr("x", a.posWithOffset - c.width / 2), B.rotateCommitLabel))
      if (y === "TB" || y === "BT")
        d.attr(
          "transform",
          "rotate(-45, " + a.x + ", " + a.y + ")"
        ), o.attr(
          "transform",
          "rotate(-45, " + a.x + ", " + a.y + ")"
        );
      else {
        const l = -7.5 - (c.width + 10) / 25 * 9.5, $ = 10 + c.width / 25 * 8.5;
        e2.attr(
          "transform",
          "translate(" + l + ", " + $ + ") rotate(-45, " + n + ", " + a.y + ")"
        );
      }
  }
}, "drawCommitLabel");
var _t = _((r, t, a, n) => {
  var _a;
  if (t.tags.length > 0) {
    let e2 = 0, o = 0, d = 0;
    const c = [];
    for (const l of t.tags.reverse()) {
      const $ = r.insert("polygon"), m = r.append("circle"), g = r.append("text").attr("y", a.y - 16 - e2).attr("class", "tag-label").text(l), i2 = (_a = g.node()) == null ? void 0 : _a.getBBox();
      if (!i2)
        throw new Error("Tag bbox not found");
      o = Math.max(o, i2.width), d = Math.max(d, i2.height), g.attr("x", a.posWithOffset - i2.width / 2), c.push({
        tag: g,
        hole: m,
        rect: $,
        yOffset: e2
      }), e2 += 20;
    }
    for (const { tag: l, hole: $, rect: m, yOffset: g } of c) {
      const i2 = d / 2, f = a.y - 19.2 - g;
      if (m.attr("class", "tag-label-bkg").attr(
        "points",
        `
      ${n - o / 2 - k / 2},${f + C}  
      ${n - o / 2 - k / 2},${f - C}
      ${a.posWithOffset - o / 2 - k},${f - i2 - C}
      ${a.posWithOffset + o / 2 + k},${f - i2 - C}
      ${a.posWithOffset + o / 2 + k},${f + i2 + C}
      ${a.posWithOffset - o / 2 - k},${f + i2 + C}`
      ), $.attr("cy", f).attr("cx", n - o / 2 + k / 2).attr("r", 1.5).attr("class", "tag-hole"), y === "TB" || y === "BT") {
        const p = n + g;
        m.attr("class", "tag-label-bkg").attr(
          "points",
          `
        ${a.x},${p + 2}
        ${a.x},${p - 2}
        ${a.x + T},${p - i2 - 2}
        ${a.x + T + o + 4},${p - i2 - 2}
        ${a.x + T + o + 4},${p + i2 + 2}
        ${a.x + T},${p + i2 + 2}`
        ).attr("transform", "translate(12,12) rotate(45, " + a.x + "," + n + ")"), $.attr("cx", a.x + k / 2).attr("cy", p).attr("transform", "translate(12,12) rotate(45, " + a.x + "," + n + ")"), l.attr("x", a.x + 5).attr("y", p + 3).attr("transform", "translate(14,14) rotate(45, " + a.x + "," + n + ")");
      }
    }
  }
}, "drawCommitTags");
var Ft = _((r) => {
  switch (r.customType ?? r.type) {
    case x.NORMAL:
      return "commit-normal";
    case x.REVERSE:
      return "commit-reverse";
    case x.HIGHLIGHT:
      return "commit-highlight";
    case x.MERGE:
      return "commit-merge";
    case x.CHERRY_PICK:
      return "commit-cherry-pick";
    default:
      return "commit-normal";
  }
}, "getCommitClassType");
var Kt = _((r, t, a, n) => {
  const e2 = { x: 0, y: 0 };
  if (r.parents.length > 0) {
    const o = F(r.parents);
    if (o) {
      const d = n.get(o) ?? e2;
      return t === "TB" ? d.y + M : t === "BT" ? (n.get(r.id) ?? e2).y - M : d.x + M;
    }
  } else
    return t === "TB" ? I : t === "BT" ? (n.get(r.id) ?? e2).y - M : 0;
  return 0;
}, "calculatePosition");
var Yt = _((r, t, a) => {
  var _a, _b;
  const n = y === "BT" && a ? t : t + T, e2 = y === "TB" || y === "BT" ? n : (_a = b.get(r.branch)) == null ? void 0 : _a.pos, o = y === "TB" || y === "BT" ? (_b = b.get(r.branch)) == null ? void 0 : _b.pos : n;
  if (o === void 0 || e2 === void 0)
    throw new Error(`Position were undefined for commit ${r.id}`);
  return { x: o, y: e2, posWithOffset: n };
}, "getCommitPosition");
var z = _((r, t, a) => {
  if (!B)
    throw new Error("GitGraph config not found");
  const n = r.append("g").attr("class", "commit-bullets"), e2 = r.append("g").attr("class", "commit-labels");
  let o = y === "TB" || y === "BT" ? I : 0;
  const d = [...t.keys()], c = (B == null ? void 0 : B.parallelCommits) ?? false, l = _((m, g) => {
    var _a, _b;
    const i2 = (_a = t.get(m)) == null ? void 0 : _a.seq, f = (_b = t.get(g)) == null ? void 0 : _b.seq;
    return i2 !== void 0 && f !== void 0 ? i2 - f : 0;
  }, "sortKeys");
  let $ = d.sort(l);
  y === "BT" && (c && Ht($, t, o), $ = $.reverse()), $.forEach((m) => {
    var _a;
    const g = t.get(m);
    if (!g)
      throw new Error(`Commit not found for key ${m}`);
    c && (o = Kt(g, y, o, w));
    const i2 = Yt(g, o, c);
    if (a) {
      const f = Ft(g), p = g.customType ?? g.type, q = ((_a = b.get(g.branch)) == null ? void 0 : _a.index) ?? 0;
      Wt(n, g, i2, f, q, p), jt(e2, g, i2, o), _t(e2, g, i2, o);
    }
    y === "TB" || y === "BT" ? w.set(g.id, { x: i2.x, y: i2.posWithOffset }) : w.set(g.id, { x: i2.posWithOffset, y: i2.y }), o = y === "BT" && c ? o + M : o + M + T, o > L && (L = o);
  });
}, "drawCommits");
var Ut = _((r, t, a, n, e2) => {
  const o = (y === "TB" || y === "BT" ? a.x < n.x : a.y < n.y) ? t.branch : r.branch, d = _((l) => l.branch === o, "isOnBranchToGetCurve"), c = _((l) => l.seq > r.seq && l.seq < t.seq, "isBetweenCommits");
  return [...e2.values()].some((l) => c(l) && d(l));
}, "shouldRerouteArrow");
var A = _((r, t, a = 0) => {
  const n = r + Math.abs(r - t) / 2;
  if (a > 5)
    return n;
  if (G.every((o) => Math.abs(o - n) >= 10))
    return G.push(n), n;
  const e2 = Math.abs(r - t);
  return A(r, t - e2 / 5, a + 1);
}, "findLane");
var Vt = _((r, t, a, n) => {
  var _a, _b, _c, _d, _e;
  const e2 = w.get(t.id), o = w.get(a.id);
  if (e2 === void 0 || o === void 0)
    throw new Error(`Commit positions not found for commits ${t.id} and ${a.id}`);
  const d = Ut(t, a, e2, o, n);
  let c = "", l = "", $ = 0, m = 0, g = (_a = b.get(a.branch)) == null ? void 0 : _a.index;
  a.type === x.MERGE && t.id !== a.parents[0] && (g = (_b = b.get(t.branch)) == null ? void 0 : _b.index);
  let i2;
  if (d) {
    c = "A 10 10, 0, 0, 0,", l = "A 10 10, 0, 0, 1,", $ = 10, m = 10;
    const f = e2.y < o.y ? A(e2.y, o.y) : A(o.y, e2.y), p = e2.x < o.x ? A(e2.x, o.x) : A(o.x, e2.x);
    y === "TB" ? e2.x < o.x ? i2 = `M ${e2.x} ${e2.y} L ${p - $} ${e2.y} ${l} ${p} ${e2.y + m} L ${p} ${o.y - $} ${c} ${p + m} ${o.y} L ${o.x} ${o.y}` : (g = (_c = b.get(t.branch)) == null ? void 0 : _c.index, i2 = `M ${e2.x} ${e2.y} L ${p + $} ${e2.y} ${c} ${p} ${e2.y + m} L ${p} ${o.y - $} ${l} ${p - m} ${o.y} L ${o.x} ${o.y}`) : y === "BT" ? e2.x < o.x ? i2 = `M ${e2.x} ${e2.y} L ${p - $} ${e2.y} ${c} ${p} ${e2.y - m} L ${p} ${o.y + $} ${l} ${p + m} ${o.y} L ${o.x} ${o.y}` : (g = (_d = b.get(t.branch)) == null ? void 0 : _d.index, i2 = `M ${e2.x} ${e2.y} L ${p + $} ${e2.y} ${l} ${p} ${e2.y - m} L ${p} ${o.y + $} ${c} ${p - m} ${o.y} L ${o.x} ${o.y}`) : e2.y < o.y ? i2 = `M ${e2.x} ${e2.y} L ${e2.x} ${f - $} ${c} ${e2.x + m} ${f} L ${o.x - $} ${f} ${l} ${o.x} ${f + m} L ${o.x} ${o.y}` : (g = (_e = b.get(t.branch)) == null ? void 0 : _e.index, i2 = `M ${e2.x} ${e2.y} L ${e2.x} ${f + $} ${l} ${e2.x + m} ${f} L ${o.x - $} ${f} ${c} ${o.x} ${f - m} L ${o.x} ${o.y}`);
  } else
    c = "A 20 20, 0, 0, 0,", l = "A 20 20, 0, 0, 1,", $ = 20, m = 20, y === "TB" ? (e2.x < o.x && (a.type === x.MERGE && t.id !== a.parents[0] ? i2 = `M ${e2.x} ${e2.y} L ${e2.x} ${o.y - $} ${c} ${e2.x + m} ${o.y} L ${o.x} ${o.y}` : i2 = `M ${e2.x} ${e2.y} L ${o.x - $} ${e2.y} ${l} ${o.x} ${e2.y + m} L ${o.x} ${o.y}`), e2.x > o.x && (c = "A 20 20, 0, 0, 0,", l = "A 20 20, 0, 0, 1,", $ = 20, m = 20, a.type === x.MERGE && t.id !== a.parents[0] ? i2 = `M ${e2.x} ${e2.y} L ${e2.x} ${o.y - $} ${l} ${e2.x - m} ${o.y} L ${o.x} ${o.y}` : i2 = `M ${e2.x} ${e2.y} L ${o.x + $} ${e2.y} ${c} ${o.x} ${e2.y + m} L ${o.x} ${o.y}`), e2.x === o.x && (i2 = `M ${e2.x} ${e2.y} L ${o.x} ${o.y}`)) : y === "BT" ? (e2.x < o.x && (a.type === x.MERGE && t.id !== a.parents[0] ? i2 = `M ${e2.x} ${e2.y} L ${e2.x} ${o.y + $} ${l} ${e2.x + m} ${o.y} L ${o.x} ${o.y}` : i2 = `M ${e2.x} ${e2.y} L ${o.x - $} ${e2.y} ${c} ${o.x} ${e2.y - m} L ${o.x} ${o.y}`), e2.x > o.x && (c = "A 20 20, 0, 0, 0,", l = "A 20 20, 0, 0, 1,", $ = 20, m = 20, a.type === x.MERGE && t.id !== a.parents[0] ? i2 = `M ${e2.x} ${e2.y} L ${e2.x} ${o.y + $} ${c} ${e2.x - m} ${o.y} L ${o.x} ${o.y}` : i2 = `M ${e2.x} ${e2.y} L ${o.x - $} ${e2.y} ${c} ${o.x} ${e2.y - m} L ${o.x} ${o.y}`), e2.x === o.x && (i2 = `M ${e2.x} ${e2.y} L ${o.x} ${o.y}`)) : (e2.y < o.y && (a.type === x.MERGE && t.id !== a.parents[0] ? i2 = `M ${e2.x} ${e2.y} L ${o.x - $} ${e2.y} ${l} ${o.x} ${e2.y + m} L ${o.x} ${o.y}` : i2 = `M ${e2.x} ${e2.y} L ${e2.x} ${o.y - $} ${c} ${e2.x + m} ${o.y} L ${o.x} ${o.y}`), e2.y > o.y && (a.type === x.MERGE && t.id !== a.parents[0] ? i2 = `M ${e2.x} ${e2.y} L ${o.x - $} ${e2.y} ${c} ${o.x} ${e2.y - m} L ${o.x} ${o.y}` : i2 = `M ${e2.x} ${e2.y} L ${e2.x} ${o.y + $} ${l} ${e2.x + m} ${o.y} L ${o.x} ${o.y}`), e2.y === o.y && (i2 = `M ${e2.x} ${e2.y} L ${o.x} ${o.y}`));
  if (i2 === void 0)
    throw new Error("Line definition not found");
  r.append("path").attr("d", i2).attr("class", "arrow arrow" + g % v);
}, "drawArrow");
var Jt = _((r, t) => {
  const a = r.append("g").attr("class", "commit-arrows");
  [...t.keys()].forEach((n) => {
    const e2 = t.get(n);
    e2.parents && e2.parents.length > 0 && e2.parents.forEach((o) => {
      Vt(a, t.get(o), e2, t);
    });
  });
}, "drawArrows");
var Qt = _((r, t) => {
  const a = r.append("g");
  t.forEach((n, e2) => {
    var _a;
    const o = e2 % v, d = (_a = b.get(n.name)) == null ? void 0 : _a.pos;
    if (d === void 0)
      throw new Error(`Position not found for branch ${n.name}`);
    const c = a.append("line");
    c.attr("x1", 0), c.attr("y1", d), c.attr("x2", L), c.attr("y2", d), c.attr("class", "branch branch" + o), y === "TB" ? (c.attr("y1", I), c.attr("x1", d), c.attr("y2", L), c.attr("x2", d)) : y === "BT" && (c.attr("y1", L), c.attr("x1", d), c.attr("y2", I), c.attr("x2", d)), G.push(d);
    const l = n.name, $ = _2(l), m = a.insert("rect"), g = a.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + o);
    g.node().appendChild($);
    const i2 = $.getBBox();
    m.attr("class", "branchLabelBkg label" + o).attr("rx", 4).attr("ry", 4).attr("x", -i2.width - 4 - ((B == null ? void 0 : B.rotateCommitLabel) === true ? 30 : 0)).attr("y", -i2.height / 2 + 8).attr("width", i2.width + 18).attr("height", i2.height + 4), g.attr(
      "transform",
      "translate(" + (-i2.width - 14 - ((B == null ? void 0 : B.rotateCommitLabel) === true ? 30 : 0)) + ", " + (d - i2.height / 2 - 1) + ")"
    ), y === "TB" ? (m.attr("x", d - i2.width / 2 - 10).attr("y", 0), g.attr("transform", "translate(" + (d - i2.width / 2 - 5) + ", 0)")) : y === "BT" ? (m.attr("x", d - i2.width / 2 - 10).attr("y", L), g.attr("transform", "translate(" + (d - i2.width / 2 - 5) + ", " + L + ")")) : m.attr("transform", "translate(-19, " + (d - i2.height / 2) + ")");
  });
}, "drawBranches");
var Xt = _(function(r, t, a, n, e2) {
  return b.set(r, { pos: t, index: a }), t += 50 + (e2 ? 40 : 0) + (y === "TB" || y === "BT" ? n.width / 2 : 0), t;
}, "setBranchPosition");
var Zt = _(function(r, t, a, n) {
  if (Ot(), ut.debug("in gitgraph renderer", r + `
`, "id:", t, a), !B)
    throw new Error("GitGraph config not found");
  const e2 = B.rotateCommitLabel ?? false, o = n.db;
  R = o.getCommits();
  const d = o.getBranchesAsObjArray();
  y = o.getDirection();
  const c = ae(`[id="${t}"]`);
  let l = 0;
  d.forEach(($, m) => {
    var _a;
    const g = _2($.name), i2 = c.append("g"), f = i2.insert("g").attr("class", "branchLabel"), p = f.insert("g").attr("class", "label branch-label");
    (_a = p.node()) == null ? void 0 : _a.appendChild(g);
    const q = g.getBBox();
    l = Xt($.name, l, m, q, e2), p.remove(), f.remove(), i2.remove();
  }), z(c, R, false), B.showBranches && Qt(c, d), Jt(c, R), z(c, R, true), Wn.insertTitle(
    c,
    "gitTitleText",
    B.titleTopMargin ?? 0,
    o.getDiagramTitle()
  ), VR(
    void 0,
    c,
    B.diagramPadding,
    B.useMaxWidth
  );
}, "draw");
var tr = {
  draw: Zt
};
var rr = _((r) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(
  (t) => `
        .branch-label${t} { fill: ${r["gitBranchLabel" + t]}; }
        .commit${t} { stroke: ${r["git" + t]}; fill: ${r["git" + t]}; }
        .commit-highlight${t} { stroke: ${r["gitInv" + t]}; fill: ${r["gitInv" + t]}; }
        .label${t}  { fill: ${r["git" + t]}; }
        .arrow${t} { stroke: ${r["git" + t]}; }
        `
).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${r.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}
  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}
  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }
  .tag-hole { fill: ${r.textColor}; }

  .commit-merge {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }
  .commit-reverse {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${r.textColor};
  }
`, "getStyles");
var er = rr;
var ir = {
  parser: It,
  db: j,
  renderer: tr,
  styles: er
};
export {
  ir as diagram
};
//# sourceMappingURL=gitGraphDiagram-GW3U2K7C-ajdBRxVY-Bll3hvRc-T3WGL5JZ.js.map
