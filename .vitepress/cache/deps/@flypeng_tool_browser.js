// node_modules/.pnpm/@flypeng+tool@5.5.2/node_modules/@flypeng/tool/dist/browser/index.esm.js
function $() {
  return typeof window != "undefined" ? { href: window.location.href, hostname: window.location.hostname, port: Number(window.location.port), pathname: window.location.pathname, params: decodeURIComponent(window.location.search), hash: decodeURIComponent(window.location.hash) } : null;
}
var x = Object.prototype.toString;
var $e = (e) => typeof e == "undefined";
var Pe = (e) => typeof e == "string";
var Oe = (e) => typeof e == "number";
var Ye = (e) => e !== null && typeof e == "object";
var _e = (e) => Array.isArray(e);
var p = (e) => e.slice(8, -1).toLocaleLowerCase();
var Ge = (e) => p(x.call(e)) === "null";
var Be = (e) => p(x.call(e)) === "function";
var We = (e) => p(x.call(e)) === "date";
var Ke = (e) => p(x.call(e)) === "map";
var Qe = (e) => p(x.call(e)) === "set";
var ze = (e) => p(x.call(e)) === "regexp";
var He = () => (navigator == null ? void 0 : navigator.userAgent.toLowerCase()).includes("micromessenger");
var Ve = () => ![typeof window, typeof document].includes("undefined");
var Ze = () => !!(navigator != null && navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
var Je = (e) => x.call(e);
var a = { isUndefined: $e, isString: Pe, isNumber: Oe, isObject: Ye, isArray: _e, isNull: Ge, isFunction: Be, isDate: We, isMap: Ke, isSet: Qe, isRegExp: ze, isBrowser: Ve, isWechatBrowser: He, isMobile: Ze, typeToString: Je };
function P(e, t) {
  let n = null;
  return function(...r) {
    n && clearTimeout(n), n = setTimeout(e.bind(this, r), t);
  };
}
var { isNull: qe, isUndefined: je, isDate: Xe, isRegExp: e0, isObject: t0 } = a;
function v(e, t = /* @__PURE__ */ new WeakMap()) {
  if (qe(e) || je(e))
    return e;
  if (Xe(e))
    return new Date(e);
  if (e0(e))
    return new RegExp(e);
  if (!t0(e))
    return e;
  if (t.has(e))
    return t.get(e);
  let n = e.constructor();
  t.set(e, n);
  for (let r in e)
    n[r] = v(e[r], t);
  return n;
}
function O(e, t, n = true) {
  let r = null;
  return function(...f) {
    let c = this, b = f;
    if (n)
      return n = false, e.apply(c, b);
    r || (r = setTimeout(() => (r = null, e.apply(c, b)), t));
  };
}
function Y(e) {
  let t = false;
  return function() {
    t || (e.apply(this, arguments), t = true);
  };
}
function _() {
  let e = (f) => localStorage.getItem(f);
  return { get: e, set: (f, c) => (localStorage.setItem(f, JSON.stringify(c)), e(f)), clear: () => localStorage.clear(), remove: (f) => localStorage.removeItem(f) };
}
function G() {
  return a.isMobile() ? navigator != null && navigator.userAgent.match(/iphone|ipod|ipad|Macintosh/i) ? "Apple" : "Android" : false;
}
function B(e) {
  let t = document.querySelector(e), n = (t == null ? void 0 : t.textContent) || "", r = document.createElement("textarea");
  r.setAttribute("readonly", "readonly"), r.value = (t == null ? void 0 : t.textContent) || "", document.body.appendChild(r), r.select();
  let f = document.execCommand("copy");
  return document.body.removeChild(r), f ? true : (navigator.clipboard.writeText(n), false);
}
function W(e) {
  navigator.clipboard.writeText(e);
}
function K(e, t) {
  let n = new RegExp(`(^|&)${e}=([^&]*)(&|$)`), r = null;
  return typeof window != "undefined" && (t == null ? r = window.location.search.substring(1).match(n) : r = t.substring(1).match(n)), r != null ? decodeURIComponent(r[2]) : null;
}
function Q(e) {
  if (e === "")
    throw new Error("please enter mobile phone number");
  return /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/g.test(e);
}
function z(e) {
  if (e === "")
    throw new Error("please enter IdCard number");
  return /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|10|11|12)(0[1-9]|[1-2]\d|30|31)\d{3}[\dX]$/g.test(e);
}
function H(e) {
  if (e === "")
    throw new Error("please enter email url");
  return /^[A-Za-z0-9-_\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(e);
}
function V(e) {
  if (e === "")
    throw new Error("please enter QQ number");
  return /^[1-9][0-9]{4,10}$/g.test(e);
}
function Z(e) {
  if (e === "")
    throw new Error("please enter a string");
  return /^.{0,}[\u4e00-\u9fa5]{1,}.{0,}$/g.test(e);
}
function J(e) {
  if (e === "")
    throw new Error("please enter a string");
  return /^.{0,}[0-9]{1,}.{0,}$/g.test(e);
}
function g(e) {
  return !!/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e);
}
var y = (e) => {
  let t = -1;
  return e.match(/[a-z]/g) && t++, e.match(/[A-Z]/g) && t++, e.match(/[0-9]/g) && t++, e.match(/[^a-zA-Z0-9]/g) && t++, t = t > 3 ? 3 : t, t;
};
function q(e, t = 8) {
  return e.length === 0 || e.length < t && y(e) === 0 ? 0 : e.length < t && y(e) === 1 ? 1 : e.length >= t && y(e) === 2 ? 2 : e.length >= t && y(e) === 3 ? 3 : 1;
}
async function j(e, t = (...n) => false) {
  if (!g(e))
    throw new Error("invalid url");
  let n = document.querySelector("head");
  if (!n)
    throw new Error("head tag is null");
  let r = document.createElement("script");
  r.type = "text/javascript", r.src = e, n.appendChild(r), r.onload = (f) => t(f);
}
function X() {
  return document.documentElement.requestFullscreen({ navigationUI: "auto" });
}
var w = class {
  constructor(t, n) {
    this.isEnable = true;
    this.isEnd = false;
    this.callback = t, this.selector = n, this.scrollCallback = () => false, this.start();
  }
  start() {
    let t = null, n = this.selector;
    this.scrollCallback = (r) => {
      this.isEnable && (t && clearTimeout(t), t = setTimeout(() => {
        let { scrollTop: f } = n, { clientHeight: c } = n, { scrollHeight: b } = n;
        !this.isEnd && b <= f + c && this.callback(r);
      }, 300));
    }, n.addEventListener("scroll", this.scrollCallback, false);
  }
  end() {
    this.isEnd = true;
  }
  stop() {
    this.isEnable = false, this.selector.removeEventListener("scroll", this.scrollCallback, false);
  }
};
function ee(e, t) {
  return new w(t, e);
}
function te(e) {
  return localStorage.getItem(e);
}
function ne(e, t) {
  typeof t == "string" ? localStorage.setItem(e, t) : localStorage.setItem(e, JSON.stringify(t));
}
function re() {
  localStorage.clear();
}
function fe(e) {
  localStorage.removeItem(e);
}
function ce() {
  let e = navigator.userAgent.toLowerCase();
  return 0 <= e.indexOf("msie") ? { type: "IE", version: Number(e.match(/msie ([\d]+)/)[1]) } : e.match(/trident\/.+?rv:(([\d.]+))/) ? { type: "IE", version: 11 } : 0 <= e.indexOf("edge") ? { type: "Edge", version: Number(e.match(/edge\/([\d]+)/)[1]) } : 0 <= e.indexOf("firefox") ? { type: "Firefox", version: Number(e.match(/firefox\/([\d]+)/)[1]) } : 0 <= e.indexOf("chrome") ? { type: "Chrome", version: Number(e.match(/chrome\/([\d]+)/)[1]) } : 0 <= e.indexOf("opera") ? { type: "Opera", version: Number(e.match(/opera.([\d]+)/)[1]) } : 0 <= e.indexOf("Safari") ? { type: "Safari", version: Number(e.match(/version\/([\d]+)/)[1]) } : { type: e, version: -1 };
}
function m(e, t) {
  let n = e, r = /* @__PURE__ */ new Date();
  a.isString(t) && (r = new Date(t)), a.isNumber(t) && (r = new Date(t)), a.isDate(t) && (r = t);
  let f = { "y+": r.getFullYear(), "M+": r.getMonth() + 1, "d+": r.getDate(), "h+": r.getHours(), "m+": r.getMinutes(), "s+": r.getSeconds() };
  for (let c in f) {
    let b = new RegExp(`(${c})`);
    if (b.test(n)) {
      let o = f[c].toString();
      o.length === 1 && (o = `0${o}`), n = n.replace(b, o);
    }
  }
  return n;
}
function be(e) {
  return a.isNumber(e) ? e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 : false;
}
function n0() {
  return ["日", "一", "二", "三", "四", "五", "六"][(/* @__PURE__ */ new Date()).getDay()];
}
function r0(e, t) {
  if (t < 0 || t > 12)
    return;
  let n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return be(e) && (n[1] = 29), n[t];
}
function f0(e, t, n = "yyyy-MM-dd") {
  let r = m(n, t), f = new Date(r);
  return f.setDate(f.getDate() + e), m(n, f);
}
function c0(e, t = /* @__PURE__ */ new Date()) {
  a.isString(e) && (e = new Date(e)), a.isString(t) && (t = new Date(t));
  let n = e, r = t, f = Math.abs(n.getTime() - r.getTime());
  return Math.round(f / 1e3 / 60 / 60 / 24);
}
function b0() {
  let e = /* @__PURE__ */ new Date(), t = e.getFullYear(), n = e.getMonth(), r = new Date(t, n, 1);
  return m("yyyy-MM-dd", r);
}
function o0() {
  let e = /* @__PURE__ */ new Date(), t = e.getFullYear(), n = e.getMonth() + 1, r = new Date(t, n, 0);
  return m("yyyy-MM-dd", r);
}
function a0(e) {
  let t = /^\d{4}-\d{2}-\d{2}$/;
  if (!e.match(t))
    return false;
  let n = new Date(e), r = n.getTime();
  return !r && r !== 0 ? false : n.toISOString().slice(0, 10) === e;
}
function u0(e, t = /* @__PURE__ */ new Date()) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() + 1 === t.getMonth() + 1;
}
var s0 = { useLeapYear: be, useTodayWeek: n0, useMonthNumber: r0, useAddDateDay: f0, useDifDaysValue: c0, useGetFirstDay: b0, useGetLastDay: o0, useIsValidDate: a0, useIsSameMonth: u0 };
var S = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560];
var se = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var ie = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var i0 = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var oe = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
var l0 = ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"];
var le = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
var d0 = ["初", "十", "廿", "卅"];
var x0 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
function de(e) {
  let t, n = 348;
  for (t = 32768; t > 8; t >>= 1)
    n += S[e - 1900] & t ? 1 : 0;
  return n + D(e);
}
function C(e) {
  return S[e - 1900] & 15;
}
function D(e) {
  return C(e) ? S[e - 1900] & 65536 ? 30 : 29 : 0;
}
function L(e, t) {
  return t > 12 || t < 1 ? -1 : S[e - 1900] & 65536 >> t ? 30 : 29;
}
function m0(e) {
  let t = (e - 3) % 10, n = (e - 3) % 12;
  return t === 0 && (t = 10), n === 0 && (n = 12), se[t - 1] + ie[n - 1];
}
function p0(e, t) {
  let n = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯", r = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  return `${n.substr(e * 2 - (t < r[e - 1] ? 2 : 0), 2)}座`;
}
function R(e) {
  return se[e % 10] + ie[e % 12];
}
function ae(e, t) {
  if (e < 1900 || e > 2100 || t < 1 || t > 24)
    return -1;
  let n = l0[e - 1900], r = [parseInt(`0x${n.substr(0, 5)}`).toString(), parseInt(`0x${n.substr(5, 5)}`).toString(), parseInt(`0x${n.substr(10, 5)}`).toString(), parseInt(`0x${n.substr(15, 5)}`).toString(), parseInt(`0x${n.substr(20, 5)}`).toString(), parseInt(`0x${n.substr(25, 5)}`).toString()], f = [r[0].substr(0, 1), r[0].substr(1, 2), r[0].substr(3, 1), r[0].substr(4, 2), r[1].substr(0, 1), r[1].substr(1, 2), r[1].substr(3, 1), r[1].substr(4, 2), r[2].substr(0, 1), r[2].substr(1, 2), r[2].substr(3, 1), r[2].substr(4, 2), r[3].substr(0, 1), r[3].substr(1, 2), r[3].substr(3, 1), r[3].substr(4, 2), r[4].substr(0, 1), r[4].substr(1, 2), r[4].substr(3, 1), r[4].substr(4, 2), r[5].substr(0, 1), r[5].substr(1, 2), r[5].substr(3, 1), r[5].substr(4, 2)];
  return parseInt(f[t - 1]);
}
function h0(e) {
  if (e > 12 || e < 1)
    return -1;
  let t = x0[e - 1];
  return t += "月", t;
}
function g0(e) {
  let t;
  switch (e) {
    case 10:
      t = "初十";
      break;
    case 20:
      t = "二十";
      break;
    case 30:
      t = "三十";
      break;
    default:
      t = d0[Math.floor(e / 10)], t += le[e % 10];
  }
  return t;
}
function y0(e) {
  return i0[(e - 4) % 12];
}
function ue(e, t, n) {
  if (e < 1900 || e > 2100 || e === 1900 && t === 1 && n && n < 31)
    return -1;
  let r = null;
  e ? r = new Date(e, parseInt(t.toString()) - 1, n) : r = /* @__PURE__ */ new Date();
  let f, c = 0, b = 0;
  e = r.getFullYear(), t = r.getMonth() + 1, n = r.getDate();
  let o = (Date.UTC(r.getFullYear(), r.getMonth(), r.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
  for (f = 1900; f < 2101 && o > 0; f++)
    b = de(f), o -= b;
  o < 0 && (o += b, f--);
  let i = /* @__PURE__ */ new Date(), h = false;
  i.getFullYear() === e && i.getMonth() + 1 === t && i.getDate() === n && (h = true);
  let l = r.getDay(), T = le[l];
  l === 0 && (l = 7);
  let d = f;
  c = C(f);
  let u = false;
  for (f = 1; f < 13 && o > 0; f++)
    c > 0 && f === c + 1 && u === false ? (--f, u = true, b = D(d)) : b = L(d, f), u === true && f === c + 1 && (u = false), o -= b;
  o === 0 && c > 0 && f === c + 1 && (u ? u = false : (u = true, --f)), o < 0 && (o += b, --f);
  let s = f, F = o + 1, Re = t - 1, Le = m0(d), N = ae(e, t * 2 - 1), Ae = ae(e, t * 2), U = R((e - 1900) * 12 + t + 11);
  n >= N && (U = R((e - 1900) * 12 + t + 12));
  let I = false, M = null;
  N === n && (I = true, M = oe[t * 2 - 2]), Ae === n && (I = true, M = oe[t * 2 - 1]);
  let Fe = Date.UTC(e, Re, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, Ne = R(Fe + n - 1), Ue = p0(t, n);
  return { lYear: d, lMonth: s, lDay: F, Animal: y0(d), IMonthCn: (u ? "闰" : "") + h0(s), IDayCn: g0(F), cYear: e, cMonth: t, cDay: n, gzYear: Le, gzMonth: U, gzDay: Ne, isToday: h, isLeap: u, nWeek: l, ncWeek: `星期${T}`, isTerm: I, Term: M, astro: Ue };
}
var w0 = { solar2lunar(e, t, n) {
  return ue(e, t, n);
}, lunar2solar(e, t, n, r) {
  if (r = !!r, r && C !== t || e === 2100 && t === 12 && n > 1 || e === 1900 && t === 1 && n < 31)
    return -1;
  let f = L(e, t), c = f;
  if (r && (c = D(e)), e < 1900 || e > 2100 || n > c)
    return -1;
  let b = 0;
  for (let s = 1900; s < e; s++)
    b += de(s);
  let o = 0, i = false;
  for (let s = 1; s < t; s++)
    o = C(e), i || o <= s && o > 0 && (b += D(e), i = true), b += L(e, s);
  r && (b += f);
  let h = Date.UTC(1900, 1, 30, 0, 0, 0), l = new Date((b + n - 31) * 864e5 + h), T = l.getUTCFullYear(), d = l.getUTCMonth() + 1, u = l.getUTCDate();
  return ue(T, d, u);
} };
var xe = w0;
var { solar2lunar: C0, lunar2solar: D0 } = xe;
function me(e, t) {
  let n = Number(e.split("-")[0]), r = Number(e.split("-")[1]), f = Number(e.split("-")[2]), c;
  return t === "solar" && (c = D0(n, r, f, false)), t === "lunar" && (c = C0(n, r, f)), c === void 0 ? -1 : c;
}
async function pe(e, t) {
  let n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.send(), n.onload = (r) => {
    let f = n.response, c = URL.createObjectURL(f), b = document.createElement("a");
    b.setAttribute("href", c), b.setAttribute("download", t || ""), b.click(), b.remove();
  };
}
function he(e) {
  return document.addEventListener("visibilitychange", e), () => {
    document.removeEventListener("visibilitychange", e);
  };
}
function E(e, t) {
  let n = (r) => {
    r.preventDefault(), t();
  };
  return e.addEventListener("contextmenu", n), () => {
    e.removeEventListener("contextmenu", n);
  };
}
function ge(e) {
  let t = e || (() => false), n = (f) => {
    let c = f.keyCode || f.which || f.charCode, b = f.ctrlKey || f.metaKey;
    return (b && (c == 83 || c == 85 || c == 73) || b && (c == 83 || c == 85 || c == 67) || c && c == 123) && (f.preventDefault(), t()), false;
  };
  document.addEventListener("keydown", n);
  let r = E(document, t);
  return () => {
    document.removeEventListener("keydown", n), r();
  };
}
function ye(e, t) {
  window.addEventListener("online", () => {
    e();
  }), window.addEventListener("offline", () => {
    t();
  });
}
function we() {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
}
function Ce(e) {
  let t = e.offsetTop;
  window.scrollTo({ top: t, behavior: "smooth" });
}
function k(e, t) {
  if (e > t)
    throw new Error(`min: ${e}, max: ${t}`);
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function De(e, t = 3) {
  let n = e.toString();
  if (n.length <= t)
    return n;
  let f = "", c = e.toString(), b = c;
  c.includes(".") && (b = c.split(".")[0]);
  for (let o = 0; o < b.length; o++)
    (b.length - o) % t === 0 && o !== 0 && (f += ","), f += n[o];
  return c.includes(".") ? `${f}.${c.split(".")[1]}` : f;
}
function Se(e) {
  return e == null ? true : Object.keys(e).length === 0;
}
function A(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    if (a.isNull(r) || (t[n] = r), a.isObject(r)) {
      if (r === e)
        return;
      t[n] = A(r);
    }
  }
  return t;
}
function Ee(e) {
  e = String(e);
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319) {
      if (e.length > 1) {
        let r = e.charCodeAt(t + 1), f = (n - 55296) * 1024 + (r - 56320) + 65536;
        if (f >= 118784 && f <= 128895)
          return true;
      }
    } else if (e.length > 1) {
      if (e.charCodeAt(t + 1) == 8419)
        return true;
    } else if (n >= 8448 && n <= 10239 || n >= 11013 && n <= 11015 || n >= 10548 && n <= 10549 || n >= 12951 && n <= 12953 || n == 169 || n == 174 || n == 12349 || n == 12336 || n == 11093 || n == 11036 || n == 11035 || n == 11088)
      return true;
  }
  return false;
}
function ke(e) {
  let { sensitiveSource: t, startIndex: n = 0, replaceSource: r = "*" } = e, { endIndex: f = 5 } = e, c = "", b = "";
  if (typeof t != "string" || (f > t.length && (f = t.length - 1), n < 0) || n > f)
    return "";
  let o = t.substring(n, f + 1);
  for (let i = 0; i < o.length; i++)
    b += r;
  return c = t.replace(o, b), c;
}
var S0 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Te = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function Ie(e = 10, t = false) {
  let n = [];
  t ? n = [...S0, ...Te] : n = [...Te];
  let r = "";
  for (let f = 0; f < e; f++) {
    let c = k(0, n.length - 1);
    r += n[c];
  }
  return r;
}
function Me(e, t) {
  switch (t) {
    case 0:
      return e.toLowerCase();
    case 1:
      return e.toUpperCase();
    case 2:
      return `${e.charAt(0).toLocaleLowerCase()}${e.slice(1)}`;
    default:
      return e;
  }
}
function ve() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0");
}
export {
  w as TouchBottomClass,
  me as useCalendarSwitch,
  H as useCheckEmailUrl,
  z as useCheckIdCard,
  Z as useCheckIncludeChinese,
  Ee as useCheckIncludeEmoji,
  J as useCheckIncludeNumber,
  q as useCheckPasswordStrength,
  Q as useCheckPhoneNumber,
  V as useCheckQQNumber,
  g as useCheckUrl,
  re as useClearLocal,
  s0 as useCommonDate,
  a as useCommonType,
  W as useCopyContent,
  B as useCopySelector,
  E as useCustomContextMenu,
  ke as useDataSensitive,
  P as useDebounce,
  v as useDeepClone,
  A as useDelEmptyValue,
  pe as useDownloadFile,
  j as useDynamicLoadScript,
  m as useFormatDate,
  ce as useGetBrowserInfo,
  te as useGetLocalKey,
  K as useGetUrlParam,
  we as useGoToTop,
  ye as useListenNetwork,
  _ as useLocalStorage,
  $ as useLocationInfo,
  G as useMobileDevice,
  De as useNumberSeparate,
  Se as useObjectIsEmpty,
  Y as useOnce,
  he as usePageTabSwitch,
  ge as usePreventSeeSourceCode,
  ve as useRandomHexColor,
  k as useRandomInteger,
  Ie as useRandomString,
  fe as useRemoveLocalKey,
  ee as useScrollToBottom,
  Ce as useScrollToElement,
  ne as useSetLocalKey,
  O as useThrottle,
  X as useToggleFullScreen,
  Me as useTransformCase
};
//# sourceMappingURL=@flypeng_tool_browser.js.map
