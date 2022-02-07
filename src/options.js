!(function (e) {
  function t(t) {
    for (var n, o, i = t[0], a = t[1], s = 0, u = []; s < i.length; s++)
      (o = i[s]), r[o] && u.push(r[o][0]), (r[o] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (c && c(t); u.length; ) u.shift()();
  }
  var n = {},
    r = { 1: 0 };
  function o(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.e = function (e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var i = new Promise(function (t, o) {
          n = r[e] = [t, o];
        });
        t.push((n[2] = i));
        var a,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          (s.src = (function (e) {
            return o.p + "" + ({}[e] || e) + ".js";
          })(e)),
          (a = function (t) {
            (s.onerror = s.onload = null), clearTimeout(c);
            var n = r[e];
            if (0 !== n) {
              if (n) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  i = t && t.target && t.target.src,
                  a = new Error(
                    "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"
                  );
                (a.type = o), (a.request = i), n[1](a);
              }
              r[e] = void 0;
            }
          });
        var c = setTimeout(function () {
          a({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = n),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    (o.oe = function (e) {
      throw e;
    });
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    a = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var c = a;
  o((o.s = 76));
})([
  function (e, t, n) {
    "use strict";
    var r = n(7),
      o = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === o.call(e);
    }
    function a(e) {
      return void 0 === e;
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function c(e) {
      if ("[object Object]" !== o.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function u(e) {
      return "[object Function]" === o.call(e);
    }
    function f(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), i(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !a(e) &&
          null !== e.constructor &&
          !a(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isPlainObject: c,
      isUndefined: a,
      isDate: function (e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function (e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: u,
      isStream: function (e) {
        return s(e) && u(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: f,
      merge: function e() {
        var t = {};
        function n(n, r) {
          c(t[r]) && c(n)
            ? (t[r] = e(t[r], n))
            : c(n)
            ? (t[r] = e({}, n))
            : i(n)
            ? (t[r] = n.slice())
            : (t[r] = n);
        }
        for (var r = 0, o = arguments.length; r < o; r++) f(arguments[r], n);
        return t;
      },
      extend: function (e, t, n) {
        return (
          f(t, function (t, o) {
            e[o] = n && "function" == typeof t ? r(t, n) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      },
    };
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setupVolcengine = function () {
        const e = window,
          t = "cyxyCollectEvent";
        if (((e.TeaAnalyticsObject = t), !e[t])) {
          function r() {
            r.q.push(arguments);
          }
          (r.q = r.q || []), (e[t] = r);
        }
        (e[t].l = +new Date()),
          n.e(7).then(n.t.bind(null, 47, 7)),
          window.cyxyCollectEvent("init", {
            debug: !0,
            app_id: 254266,
            channel: "cn",
            autotrack: !1,
          }),
          window.cyxyCollectEvent("config", {
            app_version: browser.runtime.getManifest().version,
            evtParams: { userType: "游客" },
          }),
          window.cyxyCollectEvent("start");
      }),
      (t.cyxyCollectEvent = t.setupVolcengineBackgroundListener = void 0),
      (t.setupVolcengineBackgroundListener = () => {
        browser.runtime.onMessage.addListener((e) => {
          if (e && "VolcengineCollectEvent" === e.type)
            return (
              window.cyxyCollectEvent.apply(window, e.args), Promise.resolve()
            );
        });
      }),
      (t.cyxyCollectEvent = (...e) =>
        window.cyxyCollectEvent
          ? window.cyxyCollectEvent.apply(window, e)
          : browser.runtime.sendMessage({
              type: "VolcengineCollectEvent",
              args: e,
            }));
  },
  ,
  function (e, t) {
    var n,
      r,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var c,
      u = [],
      f = !1,
      l = -1;
    function p() {
      f &&
        c &&
        ((f = !1), c.length ? (u = c.concat(u)) : (l = -1), u.length && d());
    }
    function d() {
      if (!f) {
        var e = s(p);
        f = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++l < t; ) c && c[l].run();
          (l = -1), (t = u.length);
        }
        (c = null),
          (f = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new h(e, t)), 1 !== u.length || f || s(d);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = g),
      (o.addListener = g),
      (o.once = g),
      (o.off = g),
      (o.removeListener = g),
      (o.removeAllListeners = g),
      (o.emit = g),
      (o.prependListener = g),
      (o.prependOnceListener = g),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, n) {
      if (!t) return e;
      var i;
      if (n) i = n(t);
      else if (r.isURLSearchParams(t)) i = t.toString();
      else {
        var a = [];
        r.forEach(t, function (e, t) {
          null != e &&
            (r.isArray(e) ? (t += "[]") : (e = [e]),
            r.forEach(e, function (e) {
              r.isDate(e)
                ? (e = e.toISOString())
                : r.isObject(e) && (e = JSON.stringify(e)),
                a.push(o(t) + "=" + o(e));
            }));
        }),
          (i = a.join("&"));
      }
      if (i) {
        var s = e.indexOf("#");
        -1 !== s && (e = e.slice(0, s)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        o = n(31),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !r.isUndefined(e) &&
          r.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var s,
        c = {
          adapter:
            ("undefined" != typeof XMLHttpRequest
              ? (s = n(11))
              : void 0 !== t &&
                "[object process]" === Object.prototype.toString.call(t) &&
                (s = n(11)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                  ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : r.isObject(e)
                  ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
      r.forEach(["delete", "get", "head"], function (e) {
        c.headers[e] = {};
      }),
        r.forEach(["post", "put", "patch"], function (e) {
          c.headers[e] = r.merge(i);
        }),
        (e.exports = c);
    }.call(this, n(6)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(32),
      i = n(34),
      a = n(8),
      s = n(35),
      c = n(38),
      u = n(39),
      f = n(12);
    e.exports = function (e) {
      return new Promise(function (t, n) {
        var l = e.data,
          p = e.headers;
        r.isFormData(l) && delete p["Content-Type"];
        var d = new XMLHttpRequest();
        if (e.auth) {
          var h = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          p.Authorization = "Basic " + btoa(h + ":" + g);
        }
        var m = s(e.baseURL, e.url);
        if (
          (d.open(
            e.method.toUpperCase(),
            a(m, e.params, e.paramsSerializer),
            !0
          ),
          (d.timeout = e.timeout),
          (d.onreadystatechange = function () {
            if (
              d &&
              4 === d.readyState &&
              (0 !== d.status ||
                (d.responseURL && 0 === d.responseURL.indexOf("file:")))
            ) {
              var r =
                  "getAllResponseHeaders" in d
                    ? c(d.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? d.response
                      : d.responseText,
                  status: d.status,
                  statusText: d.statusText,
                  headers: r,
                  config: e,
                  request: d,
                };
              o(t, n, i), (d = null);
            }
          }),
          (d.onabort = function () {
            d && (n(f("Request aborted", e, "ECONNABORTED", d)), (d = null));
          }),
          (d.onerror = function () {
            n(f("Network Error", e, null, d)), (d = null);
          }),
          (d.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(f(t, e, "ECONNABORTED", d)),
              (d = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var v =
            (e.withCredentials || u(m)) && e.xsrfCookieName
              ? i.read(e.xsrfCookieName)
              : void 0;
          v && (p[e.xsrfHeaderName] = v);
        }
        if (
          ("setRequestHeader" in d &&
            r.forEach(p, function (e, t) {
              void 0 === l && "content-type" === t.toLowerCase()
                ? delete p[t]
                : d.setRequestHeader(t, e);
            }),
          r.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            d.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          d.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            d.upload &&
            d.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              d && (d.abort(), n(e), (d = null));
            }),
          l || (l = null),
          d.send(l);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(33);
    e.exports = function (e, t, n, o, i) {
      var a = new Error(e);
      return r(a, t, n, o, i);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
      t = t || {};
      var n = {},
        o = ["url", "method", "data"],
        i = ["headers", "auth", "proxy", "params"],
        a = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding",
        ],
        s = ["validateStatus"];
      function c(e, t) {
        return r.isPlainObject(e) && r.isPlainObject(t)
          ? r.merge(e, t)
          : r.isPlainObject(t)
          ? r.merge({}, t)
          : r.isArray(t)
          ? t.slice()
          : t;
      }
      function u(o) {
        r.isUndefined(t[o])
          ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o]))
          : (n[o] = c(e[o], t[o]));
      }
      r.forEach(o, function (e) {
        r.isUndefined(t[e]) || (n[e] = c(void 0, t[e]));
      }),
        r.forEach(i, u),
        r.forEach(a, function (o) {
          r.isUndefined(t[o])
            ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o]))
            : (n[o] = c(void 0, t[o]));
        }),
        r.forEach(s, function (r) {
          r in t ? (n[r] = c(e[r], t[r])) : r in e && (n[r] = c(void 0, e[r]));
        });
      var f = o.concat(i).concat(a).concat(s),
        l = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (e) {
            return -1 === f.indexOf(e);
          });
      return r.forEach(l, u), n;
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      this.message = e;
    }
    (r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (r.prototype.__CANCEL__ = !0),
      (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    var r;
    n.r(t);
    var o = new Uint8Array(16);
    function i() {
      if (
        !r &&
        !(r =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      return r(o);
    }
    for (
      var a =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        s = function (e) {
          return "string" == typeof e && a.test(e);
        },
        c = [],
        u = 0;
      u < 256;
      ++u
    )
      c.push((u + 256).toString(16).substr(1));
    var f,
      l,
      p = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (
            c[e[t + 0]] +
            c[e[t + 1]] +
            c[e[t + 2]] +
            c[e[t + 3]] +
            "-" +
            c[e[t + 4]] +
            c[e[t + 5]] +
            "-" +
            c[e[t + 6]] +
            c[e[t + 7]] +
            "-" +
            c[e[t + 8]] +
            c[e[t + 9]] +
            "-" +
            c[e[t + 10]] +
            c[e[t + 11]] +
            c[e[t + 12]] +
            c[e[t + 13]] +
            c[e[t + 14]] +
            c[e[t + 15]]
          ).toLowerCase();
        if (!s(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      },
      d = 0,
      h = 0,
      g = function (e, t, n) {
        var r = (t && n) || 0,
          o = t || new Array(16),
          a = (e = e || {}).node || f,
          s = void 0 !== e.clockseq ? e.clockseq : l;
        if (null == a || null == s) {
          var c = e.random || (e.rng || i)();
          null == a && (a = f = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]),
            null == s && (s = l = 16383 & ((c[6] << 8) | c[7]));
        }
        var u = void 0 !== e.msecs ? e.msecs : Date.now(),
          g = void 0 !== e.nsecs ? e.nsecs : h + 1,
          m = u - d + (g - h) / 1e4;
        if (
          (m < 0 && void 0 === e.clockseq && (s = (s + 1) & 16383),
          (m < 0 || u > d) && void 0 === e.nsecs && (g = 0),
          g >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (d = u), (h = g), (l = s);
        var v = (1e4 * (268435455 & (u += 122192928e5)) + g) % 4294967296;
        (o[r++] = (v >>> 24) & 255),
          (o[r++] = (v >>> 16) & 255),
          (o[r++] = (v >>> 8) & 255),
          (o[r++] = 255 & v);
        var y = ((u / 4294967296) * 1e4) & 268435455;
        (o[r++] = (y >>> 8) & 255),
          (o[r++] = 255 & y),
          (o[r++] = ((y >>> 24) & 15) | 16),
          (o[r++] = (y >>> 16) & 255),
          (o[r++] = (s >>> 8) | 128),
          (o[r++] = 255 & s);
        for (var b = 0; b < 6; ++b) o[r + b] = a[b];
        return t || p(o);
      },
      m = function (e) {
        if (!s(e)) throw TypeError("Invalid UUID");
        var t,
          n = new Uint8Array(16);
        return (
          (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
          (n[1] = (t >>> 16) & 255),
          (n[2] = (t >>> 8) & 255),
          (n[3] = 255 & t),
          (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
          (n[5] = 255 & t),
          (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
          (n[7] = 255 & t),
          (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
          (n[9] = 255 & t),
          (n[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
          (n[11] = (t / 4294967296) & 255),
          (n[12] = (t >>> 24) & 255),
          (n[13] = (t >>> 16) & 255),
          (n[14] = (t >>> 8) & 255),
          (n[15] = 255 & t),
          n
        );
      },
      v = function (e, t, n) {
        function r(e, r, o, i) {
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                for (var t = [], n = 0; n < e.length; ++n)
                  t.push(e.charCodeAt(n));
                return t;
              })(e)),
            "string" == typeof r && (r = m(r)),
            16 !== r.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)"
            );
          var a = new Uint8Array(16 + e.length);
          if (
            (a.set(r),
            a.set(e, r.length),
            ((a = n(a))[6] = (15 & a[6]) | t),
            (a[8] = (63 & a[8]) | 128),
            o)
          ) {
            i = i || 0;
            for (var s = 0; s < 16; ++s) o[i + s] = a[s];
            return o;
          }
          return p(a);
        }
        try {
          r.name = e;
        } catch (e) {}
        return (
          (r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
          (r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
          r
        );
      };
    function y(e) {
      return 14 + (((e + 64) >>> 9) << 4) + 1;
    }
    function b(e, t) {
      var n = (65535 & e) + (65535 & t);
      return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
    }
    function w(e, t, n, r, o, i) {
      return b(((a = b(b(t, e), b(r, i))) << (s = o)) | (a >>> (32 - s)), n);
      var a, s;
    }
    function x(e, t, n, r, o, i, a) {
      return w((t & n) | (~t & r), e, t, o, i, a);
    }
    function T(e, t, n, r, o, i, a) {
      return w((t & r) | (n & ~r), e, t, o, i, a);
    }
    function E(e, t, n, r, o, i, a) {
      return w(t ^ n ^ r, e, t, o, i, a);
    }
    function A(e, t, n, r, o, i, a) {
      return w(n ^ (t | ~r), e, t, o, i, a);
    }
    var _ = v("v3", 48, function (e) {
        if ("string" == typeof e) {
          var t = unescape(encodeURIComponent(e));
          e = new Uint8Array(t.length);
          for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
        }
        return (function (e) {
          for (var t = [], n = 32 * e.length, r = 0; r < n; r += 8) {
            var o = (e[r >> 5] >>> r % 32) & 255,
              i = parseInt(
                "0123456789abcdef".charAt((o >>> 4) & 15) +
                  "0123456789abcdef".charAt(15 & o),
                16
              );
            t.push(i);
          }
          return t;
        })(
          (function (e, t) {
            (e[t >> 5] |= 128 << t % 32), (e[y(t) - 1] = t);
            for (
              var n = 1732584193,
                r = -271733879,
                o = -1732584194,
                i = 271733878,
                a = 0;
              a < e.length;
              a += 16
            ) {
              var s = n,
                c = r,
                u = o,
                f = i;
              (n = x(n, r, o, i, e[a], 7, -680876936)),
                (i = x(i, n, r, o, e[a + 1], 12, -389564586)),
                (o = x(o, i, n, r, e[a + 2], 17, 606105819)),
                (r = x(r, o, i, n, e[a + 3], 22, -1044525330)),
                (n = x(n, r, o, i, e[a + 4], 7, -176418897)),
                (i = x(i, n, r, o, e[a + 5], 12, 1200080426)),
                (o = x(o, i, n, r, e[a + 6], 17, -1473231341)),
                (r = x(r, o, i, n, e[a + 7], 22, -45705983)),
                (n = x(n, r, o, i, e[a + 8], 7, 1770035416)),
                (i = x(i, n, r, o, e[a + 9], 12, -1958414417)),
                (o = x(o, i, n, r, e[a + 10], 17, -42063)),
                (r = x(r, o, i, n, e[a + 11], 22, -1990404162)),
                (n = x(n, r, o, i, e[a + 12], 7, 1804603682)),
                (i = x(i, n, r, o, e[a + 13], 12, -40341101)),
                (o = x(o, i, n, r, e[a + 14], 17, -1502002290)),
                (n = T(
                  n,
                  (r = x(r, o, i, n, e[a + 15], 22, 1236535329)),
                  o,
                  i,
                  e[a + 1],
                  5,
                  -165796510
                )),
                (i = T(i, n, r, o, e[a + 6], 9, -1069501632)),
                (o = T(o, i, n, r, e[a + 11], 14, 643717713)),
                (r = T(r, o, i, n, e[a], 20, -373897302)),
                (n = T(n, r, o, i, e[a + 5], 5, -701558691)),
                (i = T(i, n, r, o, e[a + 10], 9, 38016083)),
                (o = T(o, i, n, r, e[a + 15], 14, -660478335)),
                (r = T(r, o, i, n, e[a + 4], 20, -405537848)),
                (n = T(n, r, o, i, e[a + 9], 5, 568446438)),
                (i = T(i, n, r, o, e[a + 14], 9, -1019803690)),
                (o = T(o, i, n, r, e[a + 3], 14, -187363961)),
                (r = T(r, o, i, n, e[a + 8], 20, 1163531501)),
                (n = T(n, r, o, i, e[a + 13], 5, -1444681467)),
                (i = T(i, n, r, o, e[a + 2], 9, -51403784)),
                (o = T(o, i, n, r, e[a + 7], 14, 1735328473)),
                (n = E(
                  n,
                  (r = T(r, o, i, n, e[a + 12], 20, -1926607734)),
                  o,
                  i,
                  e[a + 5],
                  4,
                  -378558
                )),
                (i = E(i, n, r, o, e[a + 8], 11, -2022574463)),
                (o = E(o, i, n, r, e[a + 11], 16, 1839030562)),
                (r = E(r, o, i, n, e[a + 14], 23, -35309556)),
                (n = E(n, r, o, i, e[a + 1], 4, -1530992060)),
                (i = E(i, n, r, o, e[a + 4], 11, 1272893353)),
                (o = E(o, i, n, r, e[a + 7], 16, -155497632)),
                (r = E(r, o, i, n, e[a + 10], 23, -1094730640)),
                (n = E(n, r, o, i, e[a + 13], 4, 681279174)),
                (i = E(i, n, r, o, e[a], 11, -358537222)),
                (o = E(o, i, n, r, e[a + 3], 16, -722521979)),
                (r = E(r, o, i, n, e[a + 6], 23, 76029189)),
                (n = E(n, r, o, i, e[a + 9], 4, -640364487)),
                (i = E(i, n, r, o, e[a + 12], 11, -421815835)),
                (o = E(o, i, n, r, e[a + 15], 16, 530742520)),
                (n = A(
                  n,
                  (r = E(r, o, i, n, e[a + 2], 23, -995338651)),
                  o,
                  i,
                  e[a],
                  6,
                  -198630844
                )),
                (i = A(i, n, r, o, e[a + 7], 10, 1126891415)),
                (o = A(o, i, n, r, e[a + 14], 15, -1416354905)),
                (r = A(r, o, i, n, e[a + 5], 21, -57434055)),
                (n = A(n, r, o, i, e[a + 12], 6, 1700485571)),
                (i = A(i, n, r, o, e[a + 3], 10, -1894986606)),
                (o = A(o, i, n, r, e[a + 10], 15, -1051523)),
                (r = A(r, o, i, n, e[a + 1], 21, -2054922799)),
                (n = A(n, r, o, i, e[a + 8], 6, 1873313359)),
                (i = A(i, n, r, o, e[a + 15], 10, -30611744)),
                (o = A(o, i, n, r, e[a + 6], 15, -1560198380)),
                (r = A(r, o, i, n, e[a + 13], 21, 1309151649)),
                (n = A(n, r, o, i, e[a + 4], 6, -145523070)),
                (i = A(i, n, r, o, e[a + 11], 10, -1120210379)),
                (o = A(o, i, n, r, e[a + 2], 15, 718787259)),
                (r = A(r, o, i, n, e[a + 9], 21, -343485551)),
                (n = b(n, s)),
                (r = b(r, c)),
                (o = b(o, u)),
                (i = b(i, f));
            }
            return [n, r, o, i];
          })(
            (function (e) {
              if (0 === e.length) return [];
              for (
                var t = 8 * e.length, n = new Uint32Array(y(t)), r = 0;
                r < t;
                r += 8
              )
                n[r >> 5] |= (255 & e[r / 8]) << r % 32;
              return n;
            })(e),
            8 * e.length
          )
        );
      }),
      C = function (e, t, n) {
        var r = (e = e || {}).random || (e.rng || i)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (var o = 0; o < 16; ++o) t[n + o] = r[o];
          return t;
        }
        return p(r);
      };
    function S(e, t, n, r) {
      switch (e) {
        case 0:
          return (t & n) ^ (~t & r);
        case 1:
          return t ^ n ^ r;
        case 2:
          return (t & n) ^ (t & r) ^ (n & r);
        case 3:
          return t ^ n ^ r;
      }
    }
    function $(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    var k = v("v5", 80, function (e) {
        var t = [1518500249, 1859775393, 2400959708, 3395469782],
          n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof e) {
          var r = unescape(encodeURIComponent(e));
          e = [];
          for (var o = 0; o < r.length; ++o) e.push(r.charCodeAt(o));
        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
        e.push(128);
        for (
          var i = e.length / 4 + 2,
            a = Math.ceil(i / 16),
            s = new Array(a),
            c = 0;
          c < a;
          ++c
        ) {
          for (var u = new Uint32Array(16), f = 0; f < 16; ++f)
            u[f] =
              (e[64 * c + 4 * f] << 24) |
              (e[64 * c + 4 * f + 1] << 16) |
              (e[64 * c + 4 * f + 2] << 8) |
              e[64 * c + 4 * f + 3];
          s[c] = u;
        }
        (s[a - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
          (s[a - 1][14] = Math.floor(s[a - 1][14])),
          (s[a - 1][15] = (8 * (e.length - 1)) & 4294967295);
        for (var l = 0; l < a; ++l) {
          for (var p = new Uint32Array(80), d = 0; d < 16; ++d) p[d] = s[l][d];
          for (var h = 16; h < 80; ++h)
            p[h] = $(p[h - 3] ^ p[h - 8] ^ p[h - 14] ^ p[h - 16], 1);
          for (
            var g = n[0], m = n[1], v = n[2], y = n[3], b = n[4], w = 0;
            w < 80;
            ++w
          ) {
            var x = Math.floor(w / 20),
              T = ($(g, 5) + S(x, m, v, y) + b + t[x] + p[w]) >>> 0;
            (b = y), (y = v), (v = $(m, 30) >>> 0), (m = g), (g = T);
          }
          (n[0] = (n[0] + g) >>> 0),
            (n[1] = (n[1] + m) >>> 0),
            (n[2] = (n[2] + v) >>> 0),
            (n[3] = (n[3] + y) >>> 0),
            (n[4] = (n[4] + b) >>> 0);
        }
        return [
          (n[0] >> 24) & 255,
          (n[0] >> 16) & 255,
          (n[0] >> 8) & 255,
          255 & n[0],
          (n[1] >> 24) & 255,
          (n[1] >> 16) & 255,
          (n[1] >> 8) & 255,
          255 & n[1],
          (n[2] >> 24) & 255,
          (n[2] >> 16) & 255,
          (n[2] >> 8) & 255,
          255 & n[2],
          (n[3] >> 24) & 255,
          (n[3] >> 16) & 255,
          (n[3] >> 8) & 255,
          255 & n[3],
          (n[4] >> 24) & 255,
          (n[4] >> 16) & 255,
          (n[4] >> 8) & 255,
          255 & n[4],
        ];
      }),
      j = function (e) {
        if (!s(e)) throw TypeError("Invalid UUID");
        return parseInt(e.substr(14, 1), 16);
      };
    n.d(t, "v1", function () {
      return g;
    }),
      n.d(t, "v3", function () {
        return _;
      }),
      n.d(t, "v4", function () {
        return C;
      }),
      n.d(t, "v5", function () {
        return k;
      }),
      n.d(t, "NIL", function () {
        return "00000000-0000-0000-0000-000000000000";
      }),
      n.d(t, "version", function () {
        return j;
      }),
      n.d(t, "validate", function () {
        return s;
      }),
      n.d(t, "stringify", function () {
        return p;
      }),
      n.d(t, "parse", function () {
        return m;
      });
  },
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.firebasePageView = function (e) {
        (0, r.reportPageview)(e);
      }),
      (t.firebaseEvent = async function (...e) {
        e.forEach((e) => {
          (0, o.cyxyCollectEvent)(e.name, e.params);
          const t = { category: "firebase", action: e.name },
            n = Object.values(e.params)[0];
          null != n && (t.label = n), (0, r.reportEvent)(t);
        });
      });
    var r = n(21),
      o = n(4);
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.reportPageview = async function (e, t) {
        const n = {
          t: "pageview",
          dp: e,
          de: "UTF-8",
          dl: document.location.href,
          sd: screen.colorDepth + "-bit",
          sr: screen.width + "x" + screen.height,
          ul: "zh-cn",
        };
        t && (n.tid = t);
        try {
          await u(n);
        } catch (e) {}
      }),
      (t.reportEvent = async function (e, t) {
        const n = { t: "event", ec: e.category, ea: e.action };
        null != e.label && (n.el = e.label),
          null != e.value && (n.ev = e.value),
          t && (n.tid = t);
        try {
          await u(n);
        } catch (e) {}
      });
    var r,
      o = n(15),
      i = (r = n(25)) && r.__esModule ? r : { default: r },
      a = n(22);
    const s = navigator.userAgent.includes("Firefox"),
      c = /apple/i.test(navigator.vendor);
    async function u(e) {
      return;
      if (s || c) {
        const { isEnableGa: e = !1 } = await browser.storage.sync.get({
          isEnableGa: !1,
        });
        if (!e) return;
      }
      const t = await (0, a.getCid)();
      return (0, i.default)({
        url: "https://www.google-analytics.com/collect",
        method: "post",
        headers: { "content-type": "text/plain;charset=UTF-8" },
        data: new URLSearchParams({
          v: "1",
          tid: "UA-83184075-2",
          cid: t,
          z: (0, o.v4)(),
          ...e,
        }),
      });
    }
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getCid = async function () {
        if (i) return i;
        if (
          !(i =
            localStorage.getItem("gacid") ||
            (await browser.storage.sync.get("gacid")))
        ) {
          (i = (0, r.v4)()), localStorage.setItem("gacid", i);
          try {
            await browser.storage.sync.set({ gacid: i });
          } catch (e) {}
        }
        return (0, o.cyxyCollectEvent)("config", { user_unique_id: i }), i;
      }),
      (t.setCid = async function (e) {
        e &&
          ((i = e), (0, o.cyxyCollectEvent)("config", { user_unique_id: i }));
      });
    var r = n(15),
      o = n(4);
    let i = "";
  },
  ,
  ,
  function (e, t, n) {
    e.exports = n(26);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(7),
      i = n(27),
      a = n(13);
    function s(e) {
      var t = new i(e),
        n = o(i.prototype.request, t);
      return r.extend(n, i.prototype, t), r.extend(n, t), n;
    }
    var c = s(n(10));
    (c.Axios = i),
      (c.create = function (e) {
        return s(a(c.defaults, e));
      }),
      (c.Cancel = n(14)),
      (c.CancelToken = n(40)),
      (c.isCancel = n(9)),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = n(41)),
      (c.isAxiosError = n(42)),
      (e.exports = c),
      (e.exports.default = c);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(8),
      i = n(28),
      a = n(29),
      s = n(13);
    function c(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (c.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = s(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = [a, void 0],
        n = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        n = n.then(t.shift(), t.shift());
      return n;
    }),
      (c.prototype.getUri = function (e) {
        return (
          (e = s(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      r.forEach(["delete", "get", "head", "options"], function (e) {
        c.prototype[e] = function (t, n) {
          return this.request(
            s(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
      r.forEach(["post", "put", "patch"], function (e) {
        c.prototype[e] = function (t, n, r) {
          return this.request(s(r || {}, { method: e, url: t, data: n }));
        };
      }),
      (e.exports = c);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(30),
      i = n(9),
      a = n(10);
    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = r.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        r.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || a.adapter)(e).then(
          function (t) {
            return (
              s(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              i(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t, n) {
      return (
        r.forEach(n, function (n) {
          e = n(e, t);
        }),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(12);
    e.exports = function (e, t, n) {
      var o = n.config.validateStatus;
      n.status && o && !o(n.status)
        ? t(
            r(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          )
        : e(n);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o) {
      return (
        (e.config = t),
        n && (e.code = n),
        (e.request = r),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, o, i, a) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
              r.isString(o) && s.push("path=" + o),
              r.isString(i) && s.push("domain=" + i),
              !0 === a && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(36),
      o = n(37);
    e.exports = function (e, t) {
      return e && !r(t) ? o(e, t) : t;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        n,
        i,
        a = {};
      return e
        ? (r.forEach(e.split("\n"), function (e) {
            if (
              ((i = e.indexOf(":")),
              (t = r.trim(e.substr(0, i)).toLowerCase()),
              (n = r.trim(e.substr(i + 1))),
              t)
            ) {
              if (a[t] && o.indexOf(t) >= 0) return;
              a[t] =
                "set-cookie" === t
                  ? (a[t] ? a[t] : []).concat([n])
                  : a[t]
                  ? a[t] + ", " + n
                  : n;
            }
          }),
          a)
        : a;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function o(e) {
            var r = e;
            return (
              t && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var n = r.isString(t) ? o(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(14);
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var n = this;
      e(function (e) {
        n.reason || ((n.reason = new r(e)), t(n.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return "object" == typeof e && !0 === e.isAxiosError;
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(17);
    (0, n(4).setupVolcengine)();
    const o = navigator.userAgent.includes("Firefox"),
      i = /apple/i.test(navigator.vendor);
    function a() {
      chrome.runtime.sendMessage({ type: "checkPms" });
      var e = $("#auto_trs")[0].checked,
        t = $("#select_translate")[0].checked,
        n = $("#enable_ga")[0].checked,
        r = $("#directTranslation")[0].checked,
        o = $("#audioSpeed")[0].value,
        i = Number($("#select_transDirect")[0].value),
        a = Number($("#select_subType")[0].value),
        s = Number($("#select_audioApi")[0].value);
      chrome.storage.sync.set(
        {
          isAutoTranslate: e,
          isAutoSWT: t,
          isEnableGa: n,
          transDirect: i,
          subType: a,
          isDirectTranslate: r,
          audioApi: s,
          audioSpeed: o,
        },
        function () {}
      );
    }
    document.addEventListener("DOMContentLoaded", () => {
      chrome.storage.sync.get(
        {
          isAutoTranslate: !1,
          isAutoSWT: !0,
          isEnableGa: !(o || i),
          transDirect: 1,
          subType: 0,
          version: "",
          favoriteColor: "red",
          targetBkgColor: "rgba(255, 255, 255, 0)",
          isDirectTranslate: !1,
          audioApi: 0,
          audioSpeed: 5,
        },
        function (e) {
          var t;
          ($("#auto_trs")[0].checked = e.isAutoTranslate),
            e.isAutoTranslate
              ? (chrome.browserAction.setBadgeText({ text: "auto" }),
                chrome.browserAction.setBadgeBackgroundColor({
                  color: "#5ebb8d",
                }))
              : chrome.browserAction.setBadgeText({ text: "" }),
            (t = e.targetBkgColor),
            $("#cyxy-colorpicker").spectrum({
              color: t,
              showAlpha: !0,
              preferredFormat: "hex",
              showInput: !0,
              change: function (e) {
                var t = e.toRgbString();
                browser.storage.sync.set({ targetBkgColor: t }),
                  (0, r.firebaseEvent)({ name: "opt_trans_bkg" });
              },
            }),
            ($("#select_translate")[0].checked = e.isAutoSWT),
            ($("#enable_ga")[0].checked = e.isEnableGa),
            ($("#directTranslation")[0].checked = e.isDirectTranslate),
            ($("#select_transDirect")[0].value = String(e.transDirect)),
            ($("#select_subType")[0].value = String(e.subType)),
            ($("#select_audioApi")[0].value = String(e.audioApi)),
            ($("#audioSpeed")[0].value = e.audioSpeed);
          var n,
            o = chrome.runtime.getManifest();
          $("#version").text(o.version),
            e.version != o.version &&
              (chrome.storage.sync.set({ version: o.version }),
              (n = $("update-modal")),
              M.Modal.init(n, {}).open());
        }
      ),
        (function () {
          ($("optionsAutoSWT").innerText =
            chrome.i18n.getMessage("optionsAutoSWT")),
            ($("optionsEnableGA").innerText =
              chrome.i18n.getMessage("optionsEnableGA")),
            ($("optionsAutoWebTrs").innerText =
              chrome.i18n.getMessage("optionsAutoWebTrs")),
            ($("defaultTrsDirect").innerText =
              chrome.i18n.getMessage("defaultTrsDirect")),
            ($("transZh2En").innerText = chrome.i18n.getMessage("transZh2En")),
            ($("transEn2Zh").innerText = chrome.i18n.getMessage("transEn2Zh")),
            ($("transJp2Zh").innerText = chrome.i18n.getMessage("transJp2Zh")),
            ($("shortcuts").innerText = chrome.i18n.getMessage("shortcuts")),
            ($("defaultSubtype").innerText =
              chrome.i18n.getMessage("defaultSubtype")),
            ($("optionBil").innerText = chrome.i18n.getMessage("optionBil")),
            ($("optionSource").innerText =
              chrome.i18n.getMessage("optionSource")),
            ($("optionTarget").innerText =
              chrome.i18n.getMessage("optionTarget")),
            ($("defaultAudioApi").innerText =
              chrome.i18n.getMessage("defaultAudioApi")),
            ($("youdao").innerText = chrome.i18n.getMessage("youdao")),
            ($("baidu").innerText = chrome.i18n.getMessage("baidu")),
            ($("readingSpeed").innerText =
              chrome.i18n.getMessage("readingSpeed")),
            ($("textDocTrs").innerText = chrome.i18n.getMessage("textDocTrs")),
            ($("UserCenter").innerText = chrome.i18n.getMessage("UserCenter")),
            ($("xiaoyiApp").innerText = chrome.i18n.getMessage("xiaoyiApp")),
            ($("feedback").innerText = chrome.i18n.getMessage("feedback")),
            ($("showDirectly").innerText =
              chrome.i18n.getMessage("showDirectly"));
          var e = ($.spectrum.localization["zh-cn"] = {
            cancelText: "取消",
            chooseText: "选择",
            clearText: "清除",
            togglePaletteMoreText: "更多选项",
            togglePaletteLessText: "隐藏",
            noColorSelectedText: "尚未选择任何颜色",
          });
          $.extend($.fn.spectrum.defaults, e);
        })();
    }),
      $("#auto_trs").change(() => {
        a(),
          $("#auto_trs")[0].checked
            ? (chrome.browserAction.setBadgeText({ text: "auto" }),
              chrome.browserAction.setBadgeBackgroundColor({
                color: "#5ebb8d",
              }),
              (0, r.firebaseEvent)({
                name: "opt_auto_trans",
                params: { status: "on" },
              }))
            : (chrome.browserAction.setBadgeText({ text: "" }),
              (0, r.firebaseEvent)({
                name: "opt_auto_trans",
                params: { status: "off" },
              }));
      }),
      $("#select_translate").change(() => {
        a(),
          $("#select_translate")[0].checked &&
            (chrome.runtime.sendMessage({ option: "change" }),
            (0, r.firebaseEvent)({
              name: "opt_inline_trans",
              params: { status: "on" },
            })),
          (0, r.firebaseEvent)({
            name: "opt_inline_trans",
            params: { status: "off" },
          });
      }),
      $("#directTranslation").change(() => {
        a(),
          (0, r.firebaseEvent)({
            name: "opt_inline_trans_direct",
            params: {
              status: $("#select_translate")[0].checked ? "on" : "off",
            },
          });
      }),
      $("#select_transDirect").change(() => {
        a();
        const e = Number($("#select_transDirect")[0].value);
        (0, r.firebaseEvent)({
          name: "opt_vid_direction",
          params: {
            direction:
              0 === e
                ? "chinese-english"
                : 1 === e
                ? "english-chinese"
                : "japanese-chinese",
          },
        });
      }),
      $("#select_subType").change(() => {
        a();
        const e = Number($("#select_subType")[0].value);
        (0, r.firebaseEvent)({
          name: "opt_vid_mode",
          params: {
            mode:
              0 === e ? "bilingualism" : 1 === e ? "original" : "translation",
          },
        });
      }),
      $("#select_audioApi").change(() => {
        a();
        const e = Number($("#select_audioApi")[0].value);
        (0, r.firebaseEvent)({
          name: "opt_tts",
          params: { tool: 0 === e ? "tool1" : "tool2" },
        });
      }),
      $("#audioSpeed").change(() => {
        a(),
          (0, r.firebaseEvent)({
            name: "opt_tts_speed",
            params: { value: $("#audioSpeed")[0].value },
          });
      }),
      $("#enable_ga").change(() => {
        a();
      }),
      $("#textDocTrs").on("click", () => {
        (0, r.firebaseEvent)({ name: "opt_online_trans" });
      }),
      $("#UserCenter").on("click", () => {
        (0, r.firebaseEvent)({ name: "opt_user_center" });
      }),
      $("#xiaoyiApp").on("click", () => {
        (0, r.firebaseEvent)({ name: "opt_xy_app" });
      }),
      $("#feedback").on("click", () => {
        (0, r.firebaseEvent)({ name: "opt_feedback" });
      }),
      o || i
        ? $("#shortcuts").hide()
        : $("#shortcuts").on("click", (e) => {
            e.preventDefault(),
              browser.tabs.create({ url: $("#shortcuts").attr("href") });
          }),
      chrome.runtime.sendMessage({ type: "optionsPageview" });
  },
]);
