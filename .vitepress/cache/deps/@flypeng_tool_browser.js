import {
  toPng
} from "./chunk-IFFNPFB2.js";
import {
  lodash_exports
} from "./chunk-UAESIAL5.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a2 = "day", o = "week", c = "month", f = "quarter", h2 = "year", d = "date", l = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m2 = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m2, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m2(r2, 2, "0") + ":" + m2(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h2, w: o, d: a2, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D2 = {};
      D2[g] = M;
      var p2 = "$isDayjsObject", S2 = function(t2) {
        return t2 instanceof _2 || !(!t2 || !t2[p2]);
      }, w2 = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D2[s2] && (i2 = s2), n2 && (D2[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a3 = e2.name;
          D2[a3] = e2, i2 = a3;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O2 = function(t2, e2) {
        if (S2(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _2(n2);
      }, b = v;
      b.l = w2, b.i = S2, b.w = function(t2, e2) {
        return O2(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _2 = function() {
        function M2(t2) {
          this.$L = w2(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p2] = true;
        }
        var m3 = M2.prototype;
        return m3.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($2);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m3.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m3.$utils = function() {
          return b;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l);
        }, m3.isSame = function(t2, e2) {
          var n2 = O2(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m3.isAfter = function(t2, e2) {
          return O2(t2) < this.startOf(e2);
        }, m3.isBefore = function(t2, e2) {
          return this.endOf(e2) < O2(t2);
        }, m3.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a2);
          }, $3 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y3 = this.$W, M3 = this.$M, m4 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h2:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D3 = (y3 < g2 ? y3 + 7 : y3) - g2;
              return l2(r2 ? m4 - D3 : m4 + (6 - D3), M3);
            case a2:
            case d:
              return $3(v2 + "Hours", 0);
            case u:
              return $3(v2 + "Minutes", 1);
            case s:
              return $3(v2 + "Seconds", 2);
            case i:
              return $3(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m3.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a2] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h2] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $3 = o2 === a2 ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h2) {
            var y3 = this.clone().set(d, 1);
            y3.$d[l2]($3), y3.init(), this.$d = y3.set(d, Math.min(this.$D, y3.daysInMonth())).$d;
          } else l2 && this.$d[l2]($3);
          return this.init(), this;
        }, m3.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m3.get = function(t2) {
          return this[b.p(t2)]();
        }, m3.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $3 = b.p(f2), y3 = function(t2) {
            var e2 = O2(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($3 === c) return this.set(c, this.$M + r2);
          if ($3 === h2) return this.set(h2, this.$y + r2);
          if ($3 === a2) return y3(1);
          if ($3 === o) return y3(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$3] || 1, m4 = this.$d.getTime() + r2 * M3;
          return b.w(m4, this);
        }, m3.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m3.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a3 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h3 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $3 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y2, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a3 + 1;
                case "MM":
                  return b.s(a3 + 1, 2, "0");
                case "MMM":
                  return h3(n2.monthsShort, a3, c2, 3);
                case "MMMM":
                  return h3(c2, a3);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h3(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h3(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $3(s2, u2, true);
                case "A":
                  return $3(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r2, d2, l2) {
          var $3, y3 = this, M3 = b.p(d2), m4 = O2(r2), v2 = (m4.utcOffset() - this.utcOffset()) * e, g2 = this - m4, D3 = function() {
            return b.m(y3, m4);
          };
          switch (M3) {
            case h2:
              $3 = D3() / 12;
              break;
            case c:
              $3 = D3();
              break;
            case f:
              $3 = D3() / 3;
              break;
            case o:
              $3 = (g2 - v2) / 6048e5;
              break;
            case a2:
              $3 = (g2 - v2) / 864e5;
              break;
            case u:
              $3 = g2 / n;
              break;
            case s:
              $3 = g2 / e;
              break;
            case i:
              $3 = g2 / t;
              break;
            default:
              $3 = g2;
          }
          return l2 ? $3 : b.a($3);
        }, m3.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m3.$locale = function() {
          return D2[this.$L];
        }, m3.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w2(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m3.clone = function() {
          return b.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k2 = _2.prototype;
      return O2.prototype = k2, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a2], ["$M", c], ["$y", h2], ["$D", d]].forEach(function(t2) {
        k2[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O2.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _2, O2), t2.$i = true), O2;
      }, O2.locale = w2, O2.isDayjs = S2, O2.unix = function(t2) {
        return O2(1e3 * t2);
      }, O2.en = D2[g], O2.Ls = D2, O2.p = {}, O2;
    });
  }
});

// node_modules/.pnpm/@flypeng+tool@5.7.2/node_modules/@flypeng/tool/dist/browser/index.js
var import_dayjs = __toESM(require_dayjs_min());
function O() {
  return typeof window != "undefined" ? { href: window.location.href, hostname: window.location.hostname, port: Number(window.location.port), pathname: window.location.pathname, params: decodeURIComponent(window.location.search), hash: decodeURIComponent(window.location.hash) } : null;
}
var x = Object.prototype.toString;
var He = (e) => typeof e == "undefined";
var Ye = (e) => typeof e == "string";
var _e = (e) => typeof e == "number";
var Be = (e) => e !== null && typeof e == "object";
var Ge = (e) => Array.isArray(e);
var p = (e) => e.slice(8, -1).toLocaleLowerCase();
var We = (e) => p(x.call(e)) === "null";
var Qe = (e) => p(x.call(e)) === "function";
var Ke = (e) => p(x.call(e)) === "date";
var ze = (e) => p(x.call(e)) === "map";
var Ve = (e) => p(x.call(e)) === "set";
var Ze = (e) => p(x.call(e)) === "regexp";
var je = () => (navigator == null ? void 0 : navigator.userAgent.toLowerCase()).includes("micromessenger");
var qe = () => ![typeof window, typeof document].includes("undefined");
var Je = () => !!(navigator != null && navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
var Xe = (e) => x.call(e);
var a = { isUndefined: He, isString: Ye, isNumber: _e, isObject: Be, isArray: Ge, isNull: We, isFunction: Qe, isDate: Ke, isMap: ze, isSet: Ve, isRegExp: Ze, isBrowser: qe, isWechatBrowser: je, isMobile: Je, typeToString: Xe };
function $(e, t) {
  let n = null;
  return function(...r) {
    n && clearTimeout(n), n = setTimeout(e.bind(this, r), t);
  };
}
var { isNull: e0, isUndefined: t0, isDate: n0, isRegExp: r0, isObject: o0 } = a;
function R(e, t = /* @__PURE__ */ new WeakMap()) {
  if (e0(e) || t0(e)) return e;
  if (n0(e)) return new Date(e);
  if (r0(e)) return new RegExp(e);
  if (!o0(e)) return e;
  if (t.has(e)) return t.get(e);
  let n = e.constructor();
  t.set(e, n);
  for (let r in e) n[r] = R(e[r], t);
  return n;
}
function H(e, t, n = true) {
  let r = null;
  return function(...o) {
    let f = this, c = o;
    if (n) return n = false, e.apply(f, c);
    r || (r = setTimeout(() => (r = null, e.apply(f, c)), t));
  };
}
function Y(e) {
  let t = false;
  return function() {
    t || (e.apply(this, arguments), t = true);
  };
}
function _() {
  let e = (o) => localStorage.getItem(o);
  return { get: e, set: (o, f) => (localStorage.setItem(o, JSON.stringify(f)), e(o)), clear: () => localStorage.clear(), remove: (o) => localStorage.removeItem(o) };
}
function B() {
  return a.isMobile() ? navigator != null && navigator.userAgent.match(/iphone|ipod|ipad|Macintosh/i) ? "Apple" : "Android" : false;
}
function G(e) {
  let t = document.querySelector(e), n = (t == null ? void 0 : t.textContent) || "", r = document.createElement("textarea");
  r.setAttribute("readonly", "readonly"), r.value = (t == null ? void 0 : t.textContent) || "", document.body.appendChild(r), r.select();
  let o = document.execCommand("copy");
  return document.body.removeChild(r), o ? true : (navigator.clipboard.writeText(n), false);
}
function W(e) {
  navigator.clipboard.writeText(e);
}
function Q(e, t) {
  let n = new RegExp(`(^|&)${e}=([^&]*)(&|$)`), r = null;
  return typeof window != "undefined" && (t == null ? r = window.location.search.substring(1).match(n) : r = t.substring(1).match(n)), r != null ? decodeURIComponent(r[2]) : null;
}
function K(e) {
  if (e === "") throw new Error("please enter mobile phone number");
  return /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/g.test(e);
}
function z(e) {
  if (e === "") throw new Error("please enter IdCard number");
  return /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|10|11|12)(0[1-9]|[1-2]\d|30|31)\d{3}[\dX]$/g.test(e);
}
function V(e) {
  if (e === "") throw new Error("please enter email url");
  return /^[A-Za-z0-9-_\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(e);
}
function Z(e) {
  if (e === "") throw new Error("please enter QQ number");
  return /^[1-9][0-9]{4,10}$/g.test(e);
}
function j(e) {
  if (e === "") throw new Error("please enter a string");
  return /^.{0,}[\u4e00-\u9fa5]{1,}.{0,}$/g.test(e);
}
function q(e) {
  if (e === "") throw new Error("please enter a string");
  return /^.{0,}[0-9]{1,}.{0,}$/g.test(e);
}
function h(e) {
  return !!/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e);
}
var y = (e) => {
  let t = -1;
  return t += e.match(/[a-z]/g) ? 1 : 0, t += e.match(/[A-Z]/g) ? 1 : 0, t += e.match(/[0-9]/g) ? 1 : 0, t += e.match(/[^a-zA-Z0-9]/g) ? 1 : 0, t = t > 3 ? 3 : t, t;
};
function J(e, t = 8) {
  return e.length === 0 || e.length < t && y(e) === 0 ? 0 : e.length < t && y(e) === 1 ? 1 : e.length >= t && y(e) === 2 ? 2 : e.length >= t && y(e) === 3 ? 3 : 1;
}
async function X(e, t = (...n) => false) {
  if (!h(e)) throw new Error("invalid url");
  let n = document.querySelector("head");
  if (!n) throw new Error("head tag is null");
  let r = document.createElement("script");
  r.type = "text/javascript", r.src = e, n.appendChild(r), r.onload = (o) => t(o);
}
function ee() {
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
        let { scrollTop: o } = n, { clientHeight: f } = n, { scrollHeight: c } = n;
        !this.isEnd && c <= o + f && this.callback(r);
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
function te(e, t) {
  return new w(t, e);
}
function ne(e) {
  return localStorage.getItem(e);
}
function re(e, t) {
  typeof t == "string" ? localStorage.setItem(e, t) : localStorage.setItem(e, JSON.stringify(t));
}
function oe() {
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
  let o = { "y+": r.getFullYear(), "M+": r.getMonth() + 1, "d+": r.getDate(), "h+": r.getHours(), "m+": r.getMinutes(), "s+": r.getSeconds() };
  for (let f in o) {
    let c = new RegExp(`(${f})`);
    if (c.test(n)) {
      let b = o[f].toString();
      b.length === 1 && (b = `0${b}`), n = n.replace(c, b);
    }
  }
  return n;
}
function be(e) {
  return a.isNumber(e) ? e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 : false;
}
function f0() {
  return ["日", "一", "二", "三", "四", "五", "六"][(/* @__PURE__ */ new Date()).getDay()];
}
function c0(e, t) {
  if (t < 0 || t > 12) return;
  let n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return be(e) && (n[1] = 29), n[t];
}
function b0(e, t, n = "yyyy-MM-dd") {
  let r = m(n, t), o = new Date(r);
  return o.setDate(o.getDate() + e), m(n, o);
}
function a0(e, t = /* @__PURE__ */ new Date()) {
  a.isString(e) && (e = new Date(e)), a.isString(t) && (t = new Date(t));
  let n = e, r = t, o = Math.abs(n.getTime() - r.getTime());
  return Math.round(o / 1e3 / 60 / 60 / 24);
}
function u0() {
  let e = /* @__PURE__ */ new Date(), t = e.getFullYear(), n = e.getMonth(), r = new Date(t, n, 1);
  return m("yyyy-MM-dd", r);
}
function s0() {
  let e = /* @__PURE__ */ new Date(), t = e.getFullYear(), n = e.getMonth() + 1, r = new Date(t, n, 0);
  return m("yyyy-MM-dd", r);
}
function i0(e) {
  let t = /^\d{4}-\d{2}-\d{2}$/;
  if (!e.match(t)) return false;
  let n = new Date(e), r = n.getTime();
  return !r && r !== 0 ? false : n.toISOString().slice(0, 10) === e;
}
function l0(e, t = /* @__PURE__ */ new Date()) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() + 1 === t.getMonth() + 1;
}
var d0 = { useLeapYear: be, useTodayWeek: f0, useMonthNumber: c0, useAddDateDay: b0, useDifDaysValue: a0, useGetFirstDay: u0, useGetLastDay: s0, useIsValidDate: i0, useIsSameMonth: l0 };
var S = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560];
var ie = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var le = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var x0 = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var ae = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
var m0 = ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"];
var de = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
var p0 = ["初", "十", "廿", "卅"];
var g0 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
function xe(e) {
  let t, n = 348;
  for (t = 32768; t > 8; t >>= 1) n += S[e - 1900] & t ? 1 : 0;
  return n + D(e);
}
function C(e) {
  return S[e - 1900] & 15;
}
function D(e) {
  return C(e) ? S[e - 1900] & 65536 ? 30 : 29 : 0;
}
function A(e, t) {
  return t > 12 || t < 1 ? -1 : S[e - 1900] & 65536 >> t ? 30 : 29;
}
function h0(e) {
  let t = (e - 3) % 10, n = (e - 3) % 12;
  return t === 0 && (t = 10), n === 0 && (n = 12), ie[t - 1] + le[n - 1];
}
function y0(e, t) {
  let n = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯", r = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  return `${n.substr(e * 2 - (t < r[e - 1] ? 2 : 0), 2)}座`;
}
function L(e) {
  return ie[e % 10] + le[e % 12];
}
function ue(e, t) {
  if (e < 1900 || e > 2100 || t < 1 || t > 24) return -1;
  let n = m0[e - 1900], r = [parseInt(`0x${n.substr(0, 5)}`).toString(), parseInt(`0x${n.substr(5, 5)}`).toString(), parseInt(`0x${n.substr(10, 5)}`).toString(), parseInt(`0x${n.substr(15, 5)}`).toString(), parseInt(`0x${n.substr(20, 5)}`).toString(), parseInt(`0x${n.substr(25, 5)}`).toString()], o = [r[0].substr(0, 1), r[0].substr(1, 2), r[0].substr(3, 1), r[0].substr(4, 2), r[1].substr(0, 1), r[1].substr(1, 2), r[1].substr(3, 1), r[1].substr(4, 2), r[2].substr(0, 1), r[2].substr(1, 2), r[2].substr(3, 1), r[2].substr(4, 2), r[3].substr(0, 1), r[3].substr(1, 2), r[3].substr(3, 1), r[3].substr(4, 2), r[4].substr(0, 1), r[4].substr(1, 2), r[4].substr(3, 1), r[4].substr(4, 2), r[5].substr(0, 1), r[5].substr(1, 2), r[5].substr(3, 1), r[5].substr(4, 2)];
  return parseInt(o[t - 1]);
}
function w0(e) {
  if (e > 12 || e < 1) return -1;
  let t = g0[e - 1];
  return t += "月", t;
}
function C0(e) {
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
      t = p0[Math.floor(e / 10)], t += de[e % 10];
  }
  return t;
}
function D0(e) {
  return x0[(e - 4) % 12];
}
function se(e, t, n) {
  if (e < 1900 || e > 2100 || e === 1900 && t === 1 && n && n < 31) return -1;
  let r = null;
  e ? r = new Date(e, parseInt(t.toString()) - 1, n) : r = /* @__PURE__ */ new Date();
  let o, f = 0, c = 0;
  e = r.getFullYear(), t = r.getMonth() + 1, n = r.getDate();
  let b = (Date.UTC(r.getFullYear(), r.getMonth(), r.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
  for (o = 1900; o < 2101 && b > 0; o++) c = xe(o), b -= c;
  b < 0 && (b += c, o--);
  let i = /* @__PURE__ */ new Date(), g = false;
  i.getFullYear() === e && i.getMonth() + 1 === t && i.getDate() === n && (g = true);
  let l = r.getDay(), I = de[l];
  l === 0 && (l = 7);
  let d = o;
  f = C(o);
  let u = false;
  for (o = 1; o < 13 && b > 0; o++) f > 0 && o === f + 1 && u === false ? (--o, u = true, c = D(d)) : c = A(d, o), u === true && o === f + 1 && (u = false), b -= c;
  b === 0 && f > 0 && o === f + 1 && (u ? u = false : (u = true, --o)), b < 0 && (b += c, --o);
  let s = o, N = b + 1, Fe = t - 1, Ne = h0(d), U = ue(e, t * 2 - 1), Ue = ue(e, t * 2), P = L((e - 1900) * 12 + t + 11);
  n >= U && (P = L((e - 1900) * 12 + t + 12));
  let v = false, M = null;
  U === n && (v = true, M = ae[t * 2 - 2]), Ue === n && (v = true, M = ae[t * 2 - 1]);
  let Pe = Date.UTC(e, Fe, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, Oe = L(Pe + n - 1), $e = y0(t, n);
  return { lYear: d, lMonth: s, lDay: N, Animal: D0(d), IMonthCn: (u ? "闰" : "") + w0(s), IDayCn: C0(N), cYear: e, cMonth: t, cDay: n, gzYear: Ne, gzMonth: P, gzDay: Oe, isToday: g, isLeap: u, nWeek: l, ncWeek: `星期${I}`, isTerm: v, Term: M, astro: $e };
}
var S0 = { solar2lunar(e, t, n) {
  return se(e, t, n);
}, lunar2solar(e, t, n, r) {
  if (r = !!r, r && C !== t || e === 2100 && t === 12 && n > 1 || e === 1900 && t === 1 && n < 31) return -1;
  let o = A(e, t), f = o;
  if (r && (f = D(e)), e < 1900 || e > 2100 || n > f) return -1;
  let c = 0;
  for (let s = 1900; s < e; s++) c += xe(s);
  let b = 0, i = false;
  for (let s = 1; s < t; s++) b = C(e), i || b <= s && b > 0 && (c += D(e), i = true), c += A(e, s);
  r && (c += o);
  let g = Date.UTC(1900, 1, 30, 0, 0, 0), l = new Date((c + n - 31) * 864e5 + g), I = l.getUTCFullYear(), d = l.getUTCMonth() + 1, u = l.getUTCDate();
  return se(I, d, u);
} };
var me = S0;
var { solar2lunar: E0, lunar2solar: k0 } = me;
function pe(e, t) {
  let n = Number(e.split("-")[0]), r = Number(e.split("-")[1]), o = Number(e.split("-")[2]), f;
  return t === "solar" && (f = k0(n, r, o, false)), t === "lunar" && (f = E0(n, r, o)), f === void 0 ? -1 : f;
}
async function E(e, t) {
  let n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.send(), n.onload = (r) => {
    let o = n.response, f = URL.createObjectURL(o), c = document.createElement("a");
    c.setAttribute("href", f), c.setAttribute("download", t || ""), c.click(), c.remove();
  };
}
function ge(e) {
  return document.addEventListener("visibilitychange", e), () => {
    document.removeEventListener("visibilitychange", e);
  };
}
function k(e, t) {
  let n = (r) => {
    r.preventDefault(), t();
  };
  return e.addEventListener("contextmenu", n), () => {
    e.removeEventListener("contextmenu", n);
  };
}
function he(e) {
  let t = e || (() => false), n = (o) => {
    let f = o.keyCode || o.which || o.charCode, c = o.ctrlKey || o.metaKey;
    return (c && (f == 83 || f == 85 || f == 73) || c && (f == 83 || f == 85 || f == 67) || f && f == 123) && (o.preventDefault(), t()), false;
  };
  document.addEventListener("keydown", n);
  let r = k(document, t);
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
function T(e, t) {
  if (e > t) throw new Error(`min: ${e}, max: ${t}`);
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function De(e, t = 3) {
  let n = e.toString();
  if (n.length <= t) return n;
  let o = "", f = e.toString(), c = f;
  f.includes(".") && (c = f.split(".")[0]);
  for (let b = 0; b < c.length; b++) (c.length - b) % t === 0 && b !== 0 && (o += ","), o += n[b];
  return f.includes(".") ? `${o}.${f.split(".")[1]}` : o;
}
function Se(e) {
  return e == null ? true : Object.keys(e).length === 0;
}
function F(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    if (a.isNull(r) || (t[n] = r), a.isObject(r)) {
      if (r === e) return;
      t[n] = F(r);
    }
  }
  return t;
}
function Ee() {
  return import_dayjs.default;
}
function ke() {
  return lodash_exports;
}
async function Te(e) {
  let { target: t = document.body, filename: n = "screenshot.png", options: r, preCapture: o, nextCapture: f } = e;
  try {
    o && await o();
    let c = await toPng(t, Object.assign({}, r, { background: "#fff" }));
    await E(c, n), f && await f();
  } catch (c) {
    console.error("截图失败:", c);
  }
}
function Ie(e) {
  e = String(e);
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319) {
      if (e.length > 1) {
        let r = e.charCodeAt(t + 1), o = (n - 55296) * 1024 + (r - 56320) + 65536;
        if (o >= 118784 && o <= 128895) return true;
      }
    } else if (e.length > 1) {
      if (e.charCodeAt(t + 1) == 8419) return true;
    } else if (n >= 8448 && n <= 10239 || n >= 11013 && n <= 11015 || n >= 10548 && n <= 10549 || n >= 12951 && n <= 12953 || n == 169 || n == 174 || n == 12349 || n == 12336 || n == 11093 || n == 11036 || n == 11035 || n == 11088) return true;
  }
  return false;
}
function ve(e) {
  let { sensitiveSource: t, startIndex: n = 0, replaceSource: r = "*" } = e, { endIndex: o = 5 } = e, f = "", c = "";
  if (typeof t != "string" || (o > t.length && (o = t.length - 1), n < 0) || n > o) return "";
  let b = t.substring(n, o + 1);
  for (let i = 0; i < b.length; i++) c += r;
  return f = t.replace(b, c), f;
}
var M0 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Me = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function Re(e = 10, t = false) {
  let n = [];
  n = t ? [...M0, ...Me] : [...Me];
  let r = "";
  for (let o = 0; o < e; o++) {
    let f = T(0, n.length - 1);
    r += n[f];
  }
  return r;
}
function Le(e, t) {
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
function Ae() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0");
}
export {
  w as TouchBottomClass,
  pe as useCalendarSwitch,
  V as useCheckEmailUrl,
  z as useCheckIdCard,
  j as useCheckIncludeChinese,
  Ie as useCheckIncludeEmoji,
  q as useCheckIncludeNumber,
  J as useCheckPasswordStrength,
  K as useCheckPhoneNumber,
  Z as useCheckQQNumber,
  h as useCheckUrl,
  oe as useClearLocal,
  d0 as useCommonDate,
  a as useCommonType,
  W as useCopyContent,
  G as useCopySelector,
  k as useCustomContextMenu,
  ve as useDataSensitive,
  Ee as useDayjs,
  $ as useDebounce,
  R as useDeepClone,
  F as useDelEmptyValue,
  E as useDownloadFile,
  X as useDynamicLoadScript,
  m as useFormatDate,
  ce as useGetBrowserInfo,
  ne as useGetLocalKey,
  Q as useGetUrlParam,
  we as useGoToTop,
  Te as useHtmlToImage,
  ye as useListenNetwork,
  _ as useLocalStorage,
  O as useLocationInfo,
  ke as useLodash,
  B as useMobileDevice,
  De as useNumberSeparate,
  Se as useObjectIsEmpty,
  Y as useOnce,
  ge as usePageTabSwitch,
  he as usePreventSeeSourceCode,
  Ae as useRandomHexColor,
  T as useRandomInteger,
  Re as useRandomString,
  fe as useRemoveLocalKey,
  te as useScrollToBottom,
  Ce as useScrollToElement,
  re as useSetLocalKey,
  H as useThrottle,
  ee as useToggleFullScreen,
  Le as useTransformCase
};
//# sourceMappingURL=@flypeng_tool_browser.js.map
