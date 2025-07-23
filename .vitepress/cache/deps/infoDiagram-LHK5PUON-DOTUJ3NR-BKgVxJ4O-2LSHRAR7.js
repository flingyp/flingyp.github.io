import {
  Iy
} from "./chunk-7MGNJ6NO.js";
import "./chunk-5H7L3GAH.js";
import "./chunk-HFG3CCC5.js";
import "./chunk-CSA5CQKO.js";
import {
  U6,
  V4,
  _,
  tZ,
  ut
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/infoDiagram-LHK5PUON-DOTUJ3NR-BKgVxJ4O.js
var g = {
  parse: _(async (r) => {
    const a = await Iy("info", r);
    ut.debug(a);
  }, "parse")
};
var m = {
  version: V4.version + ""
};
var v = _(() => m.version, "getVersion");
var c = {
  getVersion: v
};
var f = _((r, a, n) => {
  ut.debug(`rendering info diagram
` + r);
  const t = tZ(a);
  U6(t, 100, 400, true), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw");
var x = { draw: f };
var u = {
  parser: g,
  db: c,
  renderer: x
};
export {
  u as diagram
};
//# sourceMappingURL=infoDiagram-LHK5PUON-DOTUJ3NR-BKgVxJ4O-2LSHRAR7.js.map
