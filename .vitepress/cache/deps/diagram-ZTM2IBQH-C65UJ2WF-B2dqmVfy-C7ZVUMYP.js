import {
  i
} from "./chunk-MZGMHC6D.js";
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
  WR,
  _,
  cR,
  jR,
  qR,
  sg,
  tZ,
  ut,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/diagram-ZTM2IBQH-C65UJ2WF-B2dqmVfy.js
var h = {
  showLegend: true,
  ticks: 5,
  max: null,
  min: 0,
  graticule: "circle"
};
var b = {
  axes: [],
  curves: [],
  options: h
};
var p = structuredClone(b);
var N = N6.radar;
var V = _(() => sg({
  ...N,
  ...Hr().radar
}), "getConfig");
var C = _(() => p.axes, "getAxes");
var J = _(() => p.curves, "getCurves");
var Y = _(() => p.options, "getOptions");
var Z = _((a) => {
  p.axes = a.map((t) => ({
    name: t.name,
    label: t.label ?? t.name
  }));
}, "setAxes");
var q = _((a) => {
  p.curves = a.map((t) => ({
    name: t.name,
    label: t.label ?? t.name,
    entries: H(t.entries)
  }));
}, "setCurves");
var H = _((a) => {
  if (a[0].axis == null)
    return a.map((e) => e.value);
  const t = C();
  if (t.length === 0)
    throw new Error("Axes must be populated before curves for reference entries");
  return t.map((e) => {
    const r = a.find((s) => {
      var _a;
      return ((_a = s.axis) == null ? void 0 : _a.$refText) === e.name;
    });
    if (r === void 0)
      throw new Error("Missing entry for axis " + e.label);
    return r.value;
  });
}, "computeCurveEntries");
var K = _((a) => {
  var _a, _b, _c, _d, _e;
  const t = a.reduce(
    (e, r) => (e[r.name] = r, e),
    {}
  );
  p.options = {
    showLegend: ((_a = t.showLegend) == null ? void 0 : _a.value) ?? h.showLegend,
    ticks: ((_b = t.ticks) == null ? void 0 : _b.value) ?? h.ticks,
    max: ((_c = t.max) == null ? void 0 : _c.value) ?? h.max,
    min: ((_d = t.min) == null ? void 0 : _d.value) ?? h.min,
    graticule: ((_e = t.graticule) == null ? void 0 : _e.value) ?? h.graticule
  };
}, "setOptions");
var Q = _(() => {
  zR(), p = structuredClone(b);
}, "clear");
var f = {
  getAxes: C,
  getCurves: J,
  getOptions: Y,
  setAxes: Z,
  setCurves: q,
  setOptions: K,
  getConfig: V,
  clear: Q,
  setAccTitle: qR,
  getAccTitle: RR,
  setDiagramTitle: WR,
  getDiagramTitle: HR,
  getAccDescription: jR,
  setAccDescription: PR
};
var U = _((a) => {
  i(a, f);
  const { axes: t, curves: e, options: r } = a;
  f.setAxes(t), f.setCurves(e), f.setOptions(r);
}, "populate");
var X = {
  parse: _(async (a) => {
    const t = await Iy("radar", a);
    ut.debug(t), U(t);
  }, "parse")
};
var tt = _((a, t, e, r) => {
  const s = r.db, n = s.getAxes(), o = s.getCurves(), i2 = s.getOptions(), c = s.getConfig(), d = s.getDiagramTitle(), x = tZ(t), g = et(x, c), u = i2.max ?? Math.max(...o.map((y) => Math.max(...y.entries))), m = i2.min, $ = Math.min(c.width, c.height) / 2;
  at(g, n, $, i2.ticks, i2.graticule), rt(g, n, $, c), M(g, n, o, m, u, i2.graticule, c), A(g, o, i2.showLegend, c), g.append("text").attr("class", "radarTitle").text(d).attr("x", 0).attr("y", -c.height / 2 - c.marginTop);
}, "draw");
var et = _((a, t) => {
  const e = t.width + t.marginLeft + t.marginRight, r = t.height + t.marginTop + t.marginBottom, s = {
    x: t.marginLeft + t.width / 2,
    y: t.marginTop + t.height / 2
  };
  return a.attr("viewbox", `0 0 ${e} ${r}`).attr("width", e).attr("height", r), a.append("g").attr("transform", `translate(${s.x}, ${s.y})`);
}, "drawFrame");
var at = _((a, t, e, r, s) => {
  if (s === "circle")
    for (let n = 0; n < r; n++) {
      const o = e * (n + 1) / r;
      a.append("circle").attr("r", o).attr("class", "radarGraticule");
    }
  else if (s === "polygon") {
    const n = t.length;
    for (let o = 0; o < r; o++) {
      const i2 = e * (o + 1) / r, c = t.map((d, x) => {
        const g = 2 * x * Math.PI / n - Math.PI / 2, u = i2 * Math.cos(g), m = i2 * Math.sin(g);
        return `${u},${m}`;
      }).join(" ");
      a.append("polygon").attr("points", c).attr("class", "radarGraticule");
    }
  }
}, "drawGraticule");
var rt = _((a, t, e, r) => {
  const s = t.length;
  for (let n = 0; n < s; n++) {
    const o = t[n].label, i2 = 2 * n * Math.PI / s - Math.PI / 2;
    a.append("line").attr("x1", 0).attr("y1", 0).attr("x2", e * r.axisScaleFactor * Math.cos(i2)).attr("y2", e * r.axisScaleFactor * Math.sin(i2)).attr("class", "radarAxisLine"), a.append("text").text(o).attr("x", e * r.axisLabelFactor * Math.cos(i2)).attr("y", e * r.axisLabelFactor * Math.sin(i2)).attr("class", "radarAxisLabel");
  }
}, "drawAxes");
function M(a, t, e, r, s, n, o) {
  const i2 = t.length, c = Math.min(o.width, o.height) / 2;
  e.forEach((d, x) => {
    if (d.entries.length !== i2)
      return;
    const g = d.entries.map((u, m) => {
      const $ = 2 * Math.PI * m / i2 - Math.PI / 2, y = L(u, r, s, c), k = y * Math.cos($), S = y * Math.sin($);
      return { x: k, y: S };
    });
    n === "circle" ? a.append("path").attr("d", T(g, o.curveTension)).attr("class", `radarCurve-${x}`) : n === "polygon" && a.append("polygon").attr("points", g.map((u) => `${u.x},${u.y}`).join(" ")).attr("class", `radarCurve-${x}`);
  });
}
_(M, "drawCurves");
function L(a, t, e, r) {
  const s = Math.min(Math.max(a, t), e);
  return r * (s - t) / (e - t);
}
_(L, "relativeRadius");
function T(a, t) {
  const e = a.length;
  let r = `M${a[0].x},${a[0].y}`;
  for (let s = 0; s < e; s++) {
    const n = a[(s - 1 + e) % e], o = a[s], i2 = a[(s + 1) % e], c = a[(s + 2) % e], d = {
      x: o.x + (i2.x - n.x) * t,
      y: o.y + (i2.y - n.y) * t
    }, x = {
      x: i2.x - (c.x - o.x) * t,
      y: i2.y - (c.y - o.y) * t
    };
    r += ` C${d.x},${d.y} ${x.x},${x.y} ${i2.x},${i2.y}`;
  }
  return `${r} Z`;
}
_(T, "closedRoundCurve");
function A(a, t, e, r) {
  if (!e)
    return;
  const s = (r.width / 2 + r.marginRight) * 3 / 4, n = -(r.height / 2 + r.marginTop) * 3 / 4, o = 20;
  t.forEach((i2, c) => {
    const d = a.append("g").attr("transform", `translate(${s}, ${n + c * o})`);
    d.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${c}`), d.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(i2.label);
  });
}
_(A, "drawLegend");
var st = { draw: tt };
var it = _((a, t) => {
  let e = "";
  for (let r = 0; r < a.THEME_COLOR_LIMIT; r++) {
    const s = a[`cScale${r}`];
    e += `
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`;
  }
  return e;
}, "genIndexStyles");
var nt = _((a) => {
  const t = cR(), e = Hr(), r = sg(t, e.themeVariables), s = sg(r.radar, a);
  return { themeVariables: r, radarOptions: s };
}, "buildRadarStyleOptions");
var ot = _(({ radar: a } = {}) => {
  const { themeVariables: t, radarOptions: e } = nt(a);
  return `
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t, e)}
	`;
}, "styles");
var gt = {
  parser: X,
  db: f,
  renderer: st,
  styles: ot
};
export {
  gt as diagram
};
//# sourceMappingURL=diagram-ZTM2IBQH-C65UJ2WF-B2dqmVfy-C7ZVUMYP.js.map
