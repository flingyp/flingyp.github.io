import {
  Iy
} from "./chunk-RIYG2OFT.js";
import "./chunk-TB5PDJK3.js";
import "./chunk-ROF5UXLT.js";
import "./chunk-F27AYW2L.js";
import {
  S,
  TZ,
  e5,
  hw,
  ut
} from "./chunk-G6K7VW2X.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/infoDiagram-LHK5PUON-r5BtCShk-Bd3nZ_X4.js
var g = {
  parse: S(async (r) => {
    const a = await Iy("info", r);
    ut.debug(a);
  }, "parse")
};
var m = {
  version: e5.version + ""
};
var v = S(() => m.version, "getVersion");
var c = {
  getVersion: v
};
var f = S((r, a, o) => {
  ut.debug(`rendering info diagram
` + r);
  const t = TZ(a);
  hw(t, 100, 400, true), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${o}`);
}, "draw");
var u = { draw: f };
var l = {
  parser: g,
  db: c,
  renderer: u
};
export {
  l as diagram
};
//# sourceMappingURL=infoDiagram-LHK5PUON-r5BtCShk-Bd3nZ_X4-PKQLNEZE.js.map
