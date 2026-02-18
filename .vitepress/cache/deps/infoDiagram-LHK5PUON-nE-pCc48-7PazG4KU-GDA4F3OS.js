import {
  Iy
} from "./chunk-N2GLHQJ5.js";
import "./chunk-RJOY2GYM.js";
import "./chunk-YNSPFRZC.js";
import "./chunk-YWH6J5SK.js";
import {
  Mv,
  QQ,
  S,
  r5,
  ut
} from "./chunk-FMIKWIBS.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.2.1_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/infoDiagram-LHK5PUON-nE-pCc48-7PazG4KU.js
var g = {
  parse: S(async (r) => {
    const a = await Iy("info", r);
    ut.debug(a);
  }, "parse")
};
var m = {
  version: r5.version + ""
};
var f = S(() => m.version, "getVersion");
var v = {
  getVersion: f
};
var c = S((r, a, n) => {
  ut.debug(`rendering info diagram
` + r);
  const t = QQ(a);
  Mv(t, 100, 400, true), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw");
var x = { draw: c };
var u = {
  parser: g,
  db: v,
  renderer: x
};
export {
  u as diagram
};
//# sourceMappingURL=infoDiagram-LHK5PUON-nE-pCc48-7PazG4KU-GDA4F3OS.js.map
