import {
  i
} from "./chunk-T7N35FBF.js";
import {
  Iy
} from "./chunk-RIYG2OFT.js";
import "./chunk-TB5PDJK3.js";
import "./chunk-ROF5UXLT.js";
import "./chunk-F27AYW2L.js";
import {
  S,
  TZ,
  Vr,
  dP,
  fP,
  gP,
  hP,
  hw,
  mP,
  pP,
  pg,
  tw,
  uP,
  ut
} from "./chunk-G6K7VW2X.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/diagram-5UYTHUR4-HCM9uTGi-fURArewE.js
var m = {
  packet: []
};
var x = structuredClone(m);
var R = tw.packet;
var G = S(() => {
  const t = pg({
    ...R,
    ...Vr().packet
  });
  return t.showBits && (t.paddingY += 10), t;
}, "getConfig");
var H = S(() => x.packet, "getPacket");
var L = S((t) => {
  t.length > 0 && x.packet.push(t);
}, "pushWord");
var U = S(() => {
  hP(), x = structuredClone(m);
}, "clear");
var u = {
  pushWord: L,
  getPacket: H,
  getConfig: G,
  clear: U,
  setAccTitle: uP,
  getAccTitle: dP,
  setDiagramTitle: mP,
  getDiagramTitle: gP,
  getAccDescription: fP,
  setAccDescription: pP
};
var X = 1e4;
var q = S((t) => {
  i(t, u);
  let e = -1, o = [], l = 1;
  const { bitsPerRow: s } = u.getConfig();
  for (let { start: a, end: r, bits: d, label: k } of t.blocks) {
    if (a !== void 0 && r !== void 0 && r < a)
      throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);
    if (a ?? (a = e + 1), a !== e + 1)
      throw new Error(
        `Packet block ${a} - ${r ?? a} is not contiguous. It should start from ${e + 1}.`
      );
    if (d === 0)
      throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);
    for (r ?? (r = a + (d ?? 1) - 1), d ?? (d = r - a + 1), e = r, ut.debug(`Packet block ${a} - ${e} with label ${k}`); o.length <= s + 1 && u.getPacket().length < X; ) {
      const [c, b] = I({ start: a, end: r, bits: d, label: k }, l, s);
      if (o.push(c), c.end + 1 === l * s && (u.pushWord(o), o = [], l++), !b)
        break;
      ({ start: a, end: r, bits: d, label: k } = b);
    }
  }
  u.pushWord(o);
}, "populate");
var I = S((t, e, o) => {
  if (t.start === void 0)
    throw new Error("start should have been set during first phase");
  if (t.end === void 0)
    throw new Error("end should have been set during first phase");
  if (t.start > t.end)
    throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);
  if (t.end + 1 <= e * o)
    return [t, void 0];
  const l = e * o - 1, s = e * o;
  return [
    {
      start: t.start,
      end: l,
      label: t.label,
      bits: l - t.start
    },
    {
      start: s,
      end: t.end,
      label: t.label,
      bits: t.end - s
    }
  ];
}, "getNextFittingBlock");
var M = {
  parse: S(async (t) => {
    const e = await Iy("packet", t);
    ut.debug(e), q(e);
  }, "parse")
};
var N = S((t, e, o, l) => {
  const s = l.db, a = s.getConfig(), { rowHeight: r, paddingY: d, bitWidth: k, bitsPerRow: c } = a, b = s.getPacket(), i2 = s.getDiagramTitle(), h = r + d, p = h * (b.length + 1) - (i2 ? 0 : r), g = k * c + 2, f = TZ(e);
  f.attr("viewbox", `0 0 ${g} ${p}`), hw(f, p, g, a.useMaxWidth);
  for (const [y, C] of b.entries())
    Q(f, C, y, a);
  f.append("text").text(i2).attr("x", g / 2).attr("y", p - h / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw");
var Q = S((t, e, o, { rowHeight: l, paddingX: s, paddingY: a, bitWidth: r, bitsPerRow: d, showBits: k }) => {
  const c = t.append("g"), b = o * (l + a) + a;
  for (const i2 of e) {
    const h = i2.start % d * r + 1, p = (i2.end - i2.start + 1) * r - s;
    if (c.append("rect").attr("x", h).attr("y", b).attr("width", p).attr("height", l).attr("class", "packetBlock"), c.append("text").attr("x", h + p / 2).attr("y", b + l / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(i2.label), !k)
      continue;
    const g = i2.end === i2.start, f = b - 2;
    c.append("text").attr("x", h + (g ? p / 2 : 0)).attr("y", f).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", g ? "middle" : "start").text(i2.start), g || c.append("text").attr("x", h + p).attr("y", f).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(i2.end);
  }
}, "drawWord");
var V = { draw: N };
var j = {
  byteFontSize: "10px",
  startByteColor: "black",
  endByteColor: "black",
  labelColor: "black",
  labelFontSize: "12px",
  titleColor: "black",
  titleFontSize: "14px",
  blockStrokeColor: "black",
  blockStrokeWidth: "1",
  blockFillColor: "#efefef"
};
var J = S(({ packet: t } = {}) => {
  const e = pg(j, t);
  return `
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`;
}, "styles");
var tt = {
  parser: M,
  db: u,
  renderer: V,
  styles: J
};
export {
  tt as diagram
};
//# sourceMappingURL=diagram-5UYTHUR4-HCM9uTGi-fURArewE-TER4NHL6.js.map
