// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/vendor/modernizr-3.11.2.min.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.11.2 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n, r) {
  function o(e, t) {
    return _typeof(e) === t;
  }

  function i(e) {
    var t = _.className,
        n = Modernizr._config.classPrefix || "";

    if (S && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }

    Modernizr._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)), S ? _.className.baseVal = t : _.className = t);
  }

  function s(e, t) {
    if ("object" == _typeof(e)) for (var n in e) {
      k(e, n) && s(n, e[n]);
    } else {
      e = e.toLowerCase();
      var r = e.split("."),
          o = Modernizr[r[0]];
      if (2 === r.length && (o = o[r[1]]), void 0 !== o) return Modernizr;
      t = "function" == typeof t ? t() : t, 1 === r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && !1 !== t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t);
    }
    return Modernizr;
  }

  function a() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function l() {
    var e = n.body;
    return e || (e = a(S ? "svg" : "body"), e.fake = !0), e;
  }

  function u(e, t, r, o) {
    var i,
        s,
        u,
        f,
        c = "modernizr",
        d = a("div"),
        p = l();
    if (parseInt(r, 10)) for (; r--;) {
      u = a("div"), u.id = o ? o[r] : c + (r + 1), d.appendChild(u);
    }
    return i = a("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), s = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : d.parentNode.removeChild(d), !!s;
  }

  function f(e, n, r) {
    var o;

    if ("getComputedStyle" in t) {
      o = getComputedStyle.call(t, e, n);
      var i = t.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (i) {
        var s = i.error ? "error" : "log";
        i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && e.currentStyle && e.currentStyle[r];

    return o;
  }

  function c(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function d(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function p(e, n) {
    var o = e.length;

    if ("CSS" in t && "supports" in t.CSS) {
      for (; o--;) {
        if (t.CSS.supports(d(e[o]), n)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in t) {
      for (var i = []; o--;) {
        i.push("(" + d(e[o]) + ":" + n + ")");
      }

      return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" === f(e, null, "position");
      });
    }

    return r;
  }

  function m(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function h(e, t, n, i) {
    function s() {
      u && (delete N.style, delete N.modElem);
    }

    if (i = !o(i, "undefined") && i, !o(n, "undefined")) {
      var l = p(e, n);
      if (!o(l, "undefined")) return l;
    }

    for (var u, f, d, h, A, v = ["modernizr", "tspan", "samp"]; !N.style && v.length;) {
      u = !0, N.modElem = a(v.shift()), N.style = N.modElem.style;
    }

    for (d = e.length, f = 0; f < d; f++) {
      if (h = e[f], A = N.style[h], c(h, "-") && (h = m(h)), N.style[h] !== r) {
        if (i || o(n, "undefined")) return s(), "pfx" !== t || h;

        try {
          N.style[h] = n;
        } catch (e) {}

        if (N.style[h] !== A) return s(), "pfx" !== t || h;
      }
    }

    return s(), !1;
  }

  function A(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  function v(e, t, n) {
    var r;

    for (var i in e) {
      if (e[i] in t) return !1 === n ? e[i] : (r = t[e[i]], o(r, "function") ? A(r, n || t) : r);
    }

    return !1;
  }

  function g(e, t, n, r, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + O.join(s + " ") + s).split(" ");
    return o(t, "string") || o(t, "undefined") ? h(a, t, r, i) : (a = (e + " " + T.join(s + " ") + s).split(" "), v(a, t, n));
  }

  function y(e, t, n) {
    return g(e, r, r, t, n);
  }

  var w = [],
      C = {
    _version: "3.11.2",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function addTest(e, t, n) {
      w.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      w.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = C, Modernizr = new Modernizr();

  var b = [],
      _ = n.documentElement,
      S = "svg" === _.nodeName.toLowerCase(),
      x = "Moz O ms Webkit",
      T = C._config.usePrefixes ? x.toLowerCase().split(" ") : [];

  C._domPrefixes = T;
  var P = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  C._prefixes = P;
  var k;
  !function () {
    var e = {}.hasOwnProperty;
    k = o(e, "undefined") || o(e.call, "undefined") ? function (e, t) {
      return t in e && o(e.constructor.prototype[t], "undefined");
    } : function (t, n) {
      return e.call(t, n);
    };
  }(), C._l = {}, C.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, C._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function () {
        var e;

        for (e = 0; e < n.length; e++) {
          (0, n[e])(t);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    C.addTest = s;
  });

  var E = function () {
    function e(e, n) {
      var o;
      return !!e && (n && "string" != typeof n || (n = a(n || "div")), e = "on" + e, o = e in n, !o && t && (n.setAttribute || (n = a("div")), n.setAttribute(e, ""), o = "function" == typeof n[e], n[e] !== r && (n[e] = r), n.removeAttribute(e)), o);
    }

    var t = !("onblur" in _);
    return e;
  }();

  C.hasEvent = E;

  var B = function () {
    var e = t.matchMedia || t.msMatchMedia;
    return e ? function (t) {
      var n = e(t);
      return n && n.matches || !1;
    } : function (e) {
      var t = !1;
      return u("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
        t = "absolute" === f(e, null, "position");
      }), t;
    };
  }();

  C.mq = B;

  var z = function z(e, t) {
    var n = !1,
        r = a("div"),
        o = r.style;

    if (e in o) {
      var i = T.length;

      for (o[e] = t, n = o[e]; i-- && !n;) {
        o[e] = "-" + T[i] + "-" + t, n = o[e];
      }
    }

    return "" === n && (n = !1), n;
  };

  C.prefixedCSSValue = z;
  var O = C._config.usePrefixes ? x.split(" ") : [];
  C._cssomPrefixes = O;
  var L = {
    elem: a("modernizr")
  };

  Modernizr._q.push(function () {
    delete L.elem;
  });

  var N = {
    style: L.elem.style
  };
  Modernizr._q.unshift(function () {
    delete N.style;
  }), C.testAllProps = g, C.testAllProps = y;
  C.testProp = function (e, t, n) {
    return h([e], r, t, n);
  }, C.testStyles = u;
  Modernizr.addTest("customelements", "customElements" in t), Modernizr.addTest("history", function () {
    var e = navigator.userAgent;
    return !!e && (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && t.history && "pushState" in t.history;
  });
  var R = [""].concat(T);
  C._domPrefixesAll = R, Modernizr.addTest("pointerevents", function () {
    for (var e = 0, t = R.length; e < t; e++) {
      if (E(R[e] + "pointerdown")) return !0;
    }

    return !1;
  });
  var j = !0;

  try {
    t.postMessage({
      toString: function toString() {
        j = !1;
      }
    }, "*");
  } catch (e) {}

  Modernizr.addTest("postmessage", new Boolean("postMessage" in t)), Modernizr.addTest("postmessage.structuredclones", j), Modernizr.addTest("webgl", function () {
    return "WebGLRenderingContext" in t;
  });
  var M = !1;

  try {
    M = "WebSocket" in t && 2 === t.WebSocket.CLOSING;
  } catch (e) {}

  Modernizr.addTest("websockets", M), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), function () {
    Modernizr.addTest("csscolumns", function () {
      var e = !1,
          t = y("columnCount");

      try {
        e = !!t, e && (e = new Boolean(e));
      } catch (e) {}

      return e;
    });

    for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) {
      e = n[r].toLowerCase(), t = y("column" + n[r]), "breakbefore" !== e && "breakafter" !== e && "breakinside" !== e || (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t);
    }
  }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("picture", "HTMLPictureElement" in t), Modernizr.addAsyncTest(function () {
    var e,
        t,
        n,
        r = a("img"),
        o = ("sizes" in r);
    !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function n() {
      s("sizes", 2 === r.width);
    }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o);
  }), Modernizr.addTest("srcset", "srcset" in a("img")), Modernizr.addTest("webworkers", "Worker" in t), function () {
    var e, t, n, r, i, s, a;

    for (var l in w) {
      if (w.hasOwnProperty(l)) {
        if (e = [], t = w[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }

        for (r = o(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) {
          s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = r : (Modernizr[a[0]] && (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean) || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), b.push((r ? "" : "no-") + a.join("-"));
        }
      }
    }
  }(), i(b), delete C.addTest, delete C.addAsyncTest;

  for (var W = 0; W < Modernizr._q.length; W++) {
    Modernizr._q[W]();
  }

  e.Modernizr = Modernizr;
}(window, window, document);
},{}],"js/plugins.js":[function(require,module,exports) {
// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.
},{}],"js/modules/obtainPhotos.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = photo;

function photo(tags) {
  var grid = "col-xl-2 col-md-4 col-sm-6 mb-4 mb-lg-0";
  var ul = document.getElementById("mainPhotoParent");
  var url = "https://res.cloudinary.com/dchpzxwnx/image/list/".concat(tags, ".json");
  fetch(url).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var results = data.resources;

    for (var item in results) {
      var addFigure = document.createElement("figure");
      var addAlink = document.createElement("a");
      var addImg = document.createElement("img");
      addFigure.className = grid;
      addAlink.href = "https://res.cloudinary.com/dchpzxwnx/image/upload/v".concat(results[item].version, "/").concat(results[item].public_id, ".jpg");
      addAlink.setAttribute("data-size", "".concat(results[item].width, "x").concat(results[item].height));
      addImg.src = "https://res.cloudinary.com/dchpzxwnx/image/upload/c_thumb,g_center,h_286,w_200/v".concat(results[item].version, "/").concat(results[item].public_id, ".jpg");
      addAlink.appendChild(addImg);
      addFigure.appendChild(addAlink);
      mainPhotoParent.appendChild(addFigure);
    }
  }).catch(function (error) {
    console.log(error);
  });
}
},{}],"../node_modules/bootstrap/dist/js/bootstrap.bundle.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory());
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const NODE_TEXT = 3;
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement$1 = obj => {
    if (!obj || typeof obj !== 'object') {
      return false;
    }

    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined';
  };

  const getElement = obj => {
    if (isElement$1(obj)) {
      // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
      return SelectorEngine.findOne(obj);
    }

    return null;
  };

  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement$1(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };

  const isVisible = element => {
    if (!isElement$1(element) || element.getClientRects().length === 0) {
      return false;
    }

    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};

  const reflow = element => element.offsetHeight;

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          DOMContentLoadedCallbacks.forEach(callback => callback());
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

    if (index === -1) {
      return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    }

    const listLength = list.length;
    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const customEventsRegex = /^(mouseenter|mouseleave)/i;
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (let i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);

    for (let i = 0, len = uidEventList.length; i < len; i++) {
      const event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
      const wrapFn = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(handlerKey => {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
    on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },

    one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },

    off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getEvent(element);
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(elementEvent => {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      const storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(keyHandlers => {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      const isNative = nativeEvents.has(typeEvent);
      let jQueryEvent;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      let evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
          Object.defineProperty(evt, key, {
            get() {
              return args[key];
            }

          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const elementMap = new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '5.0.2';

  class BaseComponent {
    constructor(element) {
      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      Object.getOwnPropertyNames(this).forEach(propertyName => {
        this[propertyName] = null;
      });
    }

    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    /** Static */


    static getInstance(element) {
      return Data.get(element, this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$c = 'alert';
  const DATA_KEY$b = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$b}`;
  const DATA_API_KEY$8 = '.data-api';
  const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
  const CLASS_NAME_ALERT = 'alert';
  const CLASS_NAME_FADE$6 = 'fade';
  const CLASS_NAME_SHOW$9 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$c;
    } // Public


    close(element) {
      const rootElement = element ? this._getRootElement(element) : this._element;

      const customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent === null || customEvent.defaultPrevented) {
        return;
      }

      this._removeElement(rootElement);
    } // Private


    _getRootElement(element) {
      return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
    }

    _triggerCloseEvent(element) {
      return EventHandler.trigger(element, EVENT_CLOSE);
    }

    _removeElement(element) {
      element.classList.remove(CLASS_NAME_SHOW$9);
      const isAnimated = element.classList.contains(CLASS_NAME_FADE$6);

      this._queueCallback(() => this._destroyElement(element), element, isAnimated);
    }

    _destroyElement(element) {
      element.remove();
      EventHandler.trigger(element, EVENT_CLOSED);
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);

        if (config === 'close') {
          data[config](this);
        }
      });
    }

    static handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$b = 'button';
  const DATA_KEY$a = 'bs.button';
  const EVENT_KEY$a = `.${DATA_KEY$a}`;
  const DATA_API_KEY$7 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$b;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },

    offset(element) {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },

    position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$a = 'carousel';
  const DATA_KEY$9 = 'bs.carousel';
  const EVENT_KEY$9 = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const SWIPE_THRESHOLD = 40;
  const Default$9 = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  const DefaultType$9 = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
  const EVENT_SLID = `slid${EVENT_KEY$9}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$9}`;
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SELECTOR_ACTIVE$1 = '.active';
  const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_INDICATOR = '[data-bs-target]';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent);

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$9;
    }

    static get NAME() {
      return NAME$a;
    } // Public


    next() {
      this._slide(ORDER_NEXT);
    }

    nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }

    prev() {
      this._slide(ORDER_PREV);
    }

    pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    }

    cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }

    to(index) {
      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, this._items[index]);
    } // Private


    _getConfig(config) {
      config = { ...Default$9,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$a, config, DefaultType$9);
      return config;
    }

    _handleSwipe() {
      const absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      const direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0;

      if (!direction) {
        return;
      }

      this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
        EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
      const start = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchStartX = event.clientX;
        } else if (!this._pointerEvent) {
          this.touchStartX = event.touches[0].clientX;
        }
      };

      const move = event => {
        // ensure swiping with one touch and not pinching
        this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
      };

      const end = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchDeltaX = event.clientX - this.touchStartX;
        }

        this._handleSwipe();

        if (this._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          this.pause();

          if (this.touchTimeout) {
            clearTimeout(this.touchTimeout);
          }

          this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
        EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
      }
    }

    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      const direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(direction);
      }
    }

    _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    }

    _getItemByOrder(order, activeElement) {
      const isNext = order === ORDER_NEXT;
      return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }

    _triggerSlideEvent(relatedTarget, eventDirectionName) {
      const targetIndex = this._getItemIndex(relatedTarget);

      const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }

    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (let i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    }

    _updateInterval() {
      const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }

    _slide(directionOrOrder, element) {
      const order = this._directionToOrder(directionOrOrder);

      const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeElementIndex = this._getItemIndex(activeElement);

      const nextElement = element || this._getItemByOrder(order, activeElement);

      const nextElementIndex = this._getItemIndex(nextElement);

      const isCycling = Boolean(this._interval);
      const isNext = order === ORDER_NEXT;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      const eventDirectionName = this._orderToDirection(order);

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      if (this._isSliding) {
        return;
      }

      const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      const triggerSlidEvent = () => {
        EventHandler.trigger(this._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      };

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        const completeCallBack = () => {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          this._isSliding = false;
          setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
      }

      if (isCycling) {
        this.cycle();
      }
    }

    _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }

      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


    static carouselInterface(element, config) {
      const data = Carousel.getOrCreateInstance(element, config);
      let {
        _config
      } = data;

      if (typeof config === 'object') {
        _config = { ..._config,
          ...config
        };
      }

      const action = typeof config === 'string' ? config : _config.slide;

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError(`No method named "${action}"`);
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    }

    static dataApiClickHandler(event) {
      const target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      const config = { ...Manipulator.getDataAttributes(target),
        ...Manipulator.getDataAttributes(this)
      };
      const slideIndex = this.getAttribute('data-bs-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Carousel.getInstance(target).to(slideIndex);
      }

      event.preventDefault();
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (let i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$9 = 'collapse';
  const DATA_KEY$8 = 'bs.collapse';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = '.data-api';
  const Default$8 = {
    toggle: true,
    parent: ''
  };
  const DefaultType$8 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  const EVENT_SHOW$5 = `show${EVENT_KEY$8}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$8}`;
  const EVENT_HIDE$5 = `hide${EVENT_KEY$8}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$8}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const CLASS_NAME_SHOW$8 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.show, .collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._isTransitioning = false;
      this._config = this._getConfig(config);
      this._triggerArray = SelectorEngine.find(`${SELECTOR_DATA_TOGGLE$4}[href="#${this._element.id}"],` + `${SELECTOR_DATA_TOGGLE$4}[data-bs-target="#${this._element.id}"]`);
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (let i = 0, len = toggleList.length; i < len; i++) {
        const elem = toggleList[i];
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

        if (selector !== null && filterElement.length) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    static get Default() {
      return Default$8;
    }

    static get NAME() {
      return NAME$9;
    } // Public


    toggle() {
      if (this._element.classList.contains(CLASS_NAME_SHOW$8)) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$8)) {
        return;
      }

      let actives;
      let activesData;

      if (this._parent) {
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(elem => {
          if (typeof this._config.parent === 'string') {
            return elem.getAttribute('data-bs-parent') === this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      const container = SelectorEngine.findOne(this._selector);

      if (actives) {
        const tempActiveData = actives.find(elem => container !== elem);
        activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      if (actives) {
        actives.forEach(elemActive => {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }

          if (!activesData) {
            Data.set(elemActive, DATA_KEY$8, null);
          }
        });
      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        this._triggerArray.forEach(element => {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
      }

      this.setTransitioning(true);

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);

        this._element.style[dimension] = '';
        this.setTransitioning(false);
        EventHandler.trigger(this._element, EVENT_SHOWN$5);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$8)) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);

      const triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (let i = 0; i < triggerArrayLength; i++) {
          const trigger = this._triggerArray[i];
          const elem = getElementFromSelector(trigger);

          if (elem && !elem.classList.contains(CLASS_NAME_SHOW$8)) {
            trigger.classList.add(CLASS_NAME_COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }

      this.setTransitioning(true);

      const complete = () => {
        this.setTransitioning(false);

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(this._element, EVENT_HIDDEN$5);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    } // Private


    _getConfig(config) {
      config = { ...Default$8,
        ...config
      };
      config.toggle = Boolean(config.toggle); // Coerce string values

      typeCheckConfig(NAME$9, config, DefaultType$8);
      return config;
    }

    _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    }

    _getParent() {
      let {
        parent
      } = this._config;
      parent = getElement(parent);
      const selector = `${SELECTOR_DATA_TOGGLE$4}[data-bs-parent="${parent}"]`;
      SelectorEngine.find(selector, parent).forEach(element => {
        const selected = getElementFromSelector(element);

        this._addAriaAndCollapsedClass(selected, [element]);
      });
      return parent;
    }

    _addAriaAndCollapsedClass(element, triggerArray) {
      if (!element || !triggerArray.length) {
        return;
      }

      const isOpen = element.classList.contains(CLASS_NAME_SHOW$8);
      triggerArray.forEach(elem => {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static


    static collapseInterface(element, config) {
      let data = Collapse.getInstance(element);
      const _config = { ...Default$8,
        ...Manipulator.getDataAttributes(element),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    const triggerData = Manipulator.getDataAttributes(this);
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(element => {
      const data = Collapse.getInstance(element);
      let config;

      if (data) {
        // update parent attribute
        if (data._parent === null && typeof triggerData.parent === 'string') {
          data._config.parent = triggerData.parent;
          data._parent = data._getParent();
        }

        config = 'toggle';
      } else {
        config = triggerData;
      }

      Collapse.collapseInterface(element, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Collapse);

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      y: rect.top
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {

      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle$1(offsetParent).position !== 'static') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(options) {
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }
  var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  var Popper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    popperGenerator: popperGenerator,
    detectOverflow: detectOverflow,
    createPopperBase: createPopper$2,
    createPopper: createPopper,
    createPopperLite: createPopper$1,
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    auto: auto,
    basePlacements: basePlacements,
    start: start,
    end: end,
    clippingParents: clippingParents,
    viewport: viewport,
    popper: popper,
    reference: reference,
    variationPlacements: variationPlacements,
    placements: placements,
    beforeRead: beforeRead,
    read: read,
    afterRead: afterRead,
    beforeMain: beforeMain,
    main: main,
    afterMain: afterMain,
    beforeWrite: beforeWrite,
    write: write,
    afterWrite: afterWrite,
    modifierPhases: modifierPhases,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    computeStyles: computeStyles$1,
    eventListeners: eventListeners,
    flip: flip$1,
    hide: hide$1,
    offset: offset$1,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1
  });

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$8 = 'dropdown';
  const DATA_KEY$7 = 'bs.dropdown';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const SPACE_KEY = 'Space';
  const TAB_KEY = 'Tab';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
  const EVENT_HIDE$4 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$7}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$7}`;
  const EVENT_CLICK = `click${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_NAVBAR = 'navbar';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const Default$7 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
  };
  const DefaultType$7 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$7;
    }

    static get DefaultType() {
      return DefaultType$7;
    }

    static get NAME() {
      return NAME$8;
    } // Public


    toggle() {
      if (isDisabled(this._element)) {
        return;
      }

      const isActive = this._element.classList.contains(CLASS_NAME_SHOW$7);

      if (isActive) {
        this.hide();
        return;
      }

      this.show();
    }

    show() {
      if (isDisabled(this._element) || this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      const parent = Dropdown.getParentFromElement(this._element);
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        let referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement$1(this._config.reference)) {
          referenceElement = getElement(this._config.reference);
        } else if (typeof this._config.reference === 'object') {
          referenceElement = this._config.reference;
        }

        const popperConfig = this._getPopperConfig();

        const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
        this._popper = createPopper(referenceElement, this._menu, popperConfig);

        if (isDisplayStatic) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static');
        }
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.toggle(CLASS_NAME_SHOW$7);

      this._element.classList.toggle(CLASS_NAME_SHOW$7);

      EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }

    hide() {
      if (isDisabled(this._element) || !this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }

    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK, event => {
        event.preventDefault();
        this.toggle();
      });
    }

    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW$7);

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }

    _getConfig(config) {
      config = { ...this.constructor.Default,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
      typeCheckConfig(NAME$8, config, this.constructor.DefaultType);

      if (typeof config.reference === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }

      return config;
    }

    _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }

    _getPlacement() {
      const parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
      return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static


    static dropdownInterface(element, config) {
      const data = Dropdown.getOrCreateInstance(element, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, config);
      });
    }

    static clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
        return;
      }

      const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (let i = 0, len = toggles.length; i < len; i++) {
        const context = Dropdown.getInstance(toggles[i]);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        if (!context._element.classList.contains(CLASS_NAME_SHOW$7)) {
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

        if (event) {
          const composedPath = event.composedPath();
          const isMenuTarget = composedPath.includes(context._menu);

          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }

          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
        }

        context._completeHide(relatedTarget);
      }
    }

    static getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }

    static dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      const isActive = this.classList.contains(CLASS_NAME_SHOW$7);

      if (!isActive && event.key === ESCAPE_KEY$2) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (isDisabled(this)) {
        return;
      }

      const getToggleButton = () => this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];

      if (event.key === ESCAPE_KEY$2) {
        getToggleButton().focus();
        Dropdown.clearMenus();
        return;
      }

      if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        if (!isActive) {
          getToggleButton().click();
        }

        Dropdown.getInstance(getToggleButton())._selectMenuItem(event);

        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
      }
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.dropdownInterface(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Dropdown);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }

    hide() {
      const width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


      this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
    }

    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }

    _setElementAttributes(selector, styleProp, callback) {
      const scrollbarWidth = this.getWidth();

      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

        this._saveInitialAttribute(element, styleProp);

        const calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, 'paddingRight');

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }

    _saveInitialAttribute(element, styleProp) {
      const actualValue = element.style[styleProp];

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProp, actualValue);
      }
    }

    _resetElementAttributes(selector, styleProp) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProp);

        if (typeof value === 'undefined') {
          element.style.removeProperty(styleProp);
        } else {
          Manipulator.removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
      if (isElement$1(selector)) {
        callBack(selector);
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
      }
    }

    isOverflowing() {
      return this.getWidth() > 0;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  const Default$6 = {
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
  };
  const DefaultType$6 = {
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
  };
  const NAME$7 = 'backdrop';
  const CLASS_NAME_BACKDROP = 'modal-backdrop';
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$6 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$7}`;

  class Backdrop {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$6);

      this._emulateAnimation(() => {
        execute(callback);
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$6);

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = CLASS_NAME_BACKDROP;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$5);
        }

        this._element = backdrop;
      }

      return this._element;
    }

    _getConfig(config) {
      config = { ...Default$6,
        ...(typeof config === 'object' ? config : {})
      }; // use getElement() with the default "body" to get a fresh Element on each instantiation

      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

      this._config.rootElement.appendChild(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }

    dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
    }

    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$6 = 'modal';
  const DATA_KEY$6 = 'bs.modal';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$6}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
  const EVENT_CLICK_DISMISS$2 = `click.dismiss${EVENT_KEY$6}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
  const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._isShown = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
    } // Getters


    static get Default() {
      return Default$5;
    }

    static get NAME() {
      return NAME$6;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, event => this.hide(event));
      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide(event) {
      if (event && ['A', 'AREA'].includes(event.target.tagName)) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      const isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.off(document, EVENT_FOCUSIN$2);

      this._element.classList.remove(CLASS_NAME_SHOW$5);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(() => this._hideModal(), this._element, isAnimated);
    }

    dispose() {
      [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

      this._backdrop.dispose();

      super.dispose();
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      EventHandler.off(document, EVENT_FOCUSIN$2);
    }

    handleUpdate() {
      this._adjustDialog();
    } // Private


    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      });
    }

    _getConfig(config) {
      config = { ...Default$5,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config;
    }

    _showElement(relatedTarget) {
      const isAnimated = this._isAnimated();

      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$5);

      if (this._config.focus) {
        this._enforceFocus();
      }

      const transitionComplete = () => {
        if (this._config.focus) {
          this._element.focus();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }

    _enforceFocus() {
      EventHandler.off(document, EVENT_FOCUSIN$2); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$2, event => {
        if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) {
          this._element.focus();
        }
      });
    }

    _setEscapeEvent() {
      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
          if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();
            this.hide();
          } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
            this._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._scrollBar.reset();

        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      });
    }

    _showBackdrop(callback) {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, event => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (this._config.backdrop === true) {
          this.hide();
        } else if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
        }
      });

      this._backdrop.show(callback);
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$4);
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const {
        classList,
        scrollHeight,
        style
      } = this._element;
      const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

      if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
        return;
      }

      if (!isModalOverflowing) {
        style.overflowY = 'hidden';
      }

      classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          this._queueCallback(() => {
            style.overflowY = '';
          }, this._dialog);
        }
      }, this._dialog);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------


    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      const scrollbarWidth = this._scrollBar.getWidth();

      const isBodyOverflowing = scrollbarWidth > 0;

      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = `${scrollbarWidth}px`;
      }

      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static


    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](relatedTarget);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$3, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$5 = 'offcanvas';
  const DATA_KEY$5 = 'bs.offcanvas';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const DATA_API_KEY$2 = '.data-api';
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const ESCAPE_KEY = 'Escape';
  const Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  const CLASS_NAME_SHOW$4 = 'show';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
  const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
  const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
  const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
  const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$5}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const EVENT_CLICK_DISMISS$1 = `click.dismiss${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
  const SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();

      this._addEventListeners();
    } // Getters


    static get NAME() {
      return NAME$5;
    }

    static get Default() {
      return Default$4;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();

        this._enforceFocusOnElement(this._element);
      }

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const completeCallBack = () => {
        EventHandler.trigger(this._element, EVENT_SHOWN$2, {
          relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
      if (!this._isShown) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return;
      }

      EventHandler.off(document, EVENT_FOCUSIN$1);

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      this._backdrop.hide();

      const completeCallback = () => {
        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._element.style.visibility = 'hidden';

        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$2);
      };

      this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
      this._backdrop.dispose();

      super.dispose();
      EventHandler.off(document, EVENT_FOCUSIN$1);
    } // Private


    _getConfig(config) {
      config = { ...Default$4,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    }

    _initializeBackDrop() {
      return new Backdrop({
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }

    _enforceFocusOnElement(element) {
      EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$1, event => {
        if (document !== event.target && element !== event.target && !element.contains(event.target)) {
          element.focus();
        }
      });
      element.focus();
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, () => this.hide());
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY) {
          this.hide();
        }
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  const allowedAttribute = (attr, allowedAttributeList) => {
    const attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

    for (let i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const allowlistKeys = Object.keys(allowList);
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (let i = 0, len = elements.length; i < len; i++) {
      const el = elements[i];
      const elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.remove();
        continue;
      }

      const attributeList = [].concat(...el.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(attr => {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$4 = 'tooltip';
  const DATA_KEY$4 = 'bs.tooltip';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const CLASS_PREFIX$1 = 'bs-tooltip';
  const BSCLS_PREFIX_REGEX$1 = new RegExp(`(^|\\s)${CLASS_PREFIX$1}\\S+`, 'g');
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  const Event$2 = {
    HIDE: `hide${EVENT_KEY$4}`,
    HIDDEN: `hidden${EVENT_KEY$4}`,
    SHOW: `show${EVENT_KEY$4}`,
    SHOWN: `shown${EVENT_KEY$4}`,
    INSERTED: `inserted${EVENT_KEY$4}`,
    CLICK: `click${EVENT_KEY$4}`,
    FOCUSIN: `focusin${EVENT_KEY$4}`,
    FOCUSOUT: `focusout${EVENT_KEY$4}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
  };
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$3 = 'show';
  const HOVER_STATE_SHOW = 'show';
  const HOVER_STATE_OUT = 'out';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      super(element); // private

      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this._config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    static get Default() {
      return Default$3;
    }

    static get NAME() {
      return NAME$4;
    }

    static get Event() {
      return Event$2;
    }

    static get DefaultType() {
      return DefaultType$3;
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        const context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        this.tip.remove();
      }

      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      const tip = this.getTipElement();
      const tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      this.setContent();

      if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$3);
      }

      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

      const attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      const {
        container
      } = this._config;
      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = createPopper(this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW$3);
      const customClass = typeof this._config.customClass === 'function' ? this._config.customClass() : this._config.customClass;

      if (customClass) {
        tip.classList.add(...customClass.split(' '));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => {
          EventHandler.on(element, 'mouseover', noop);
        });
      }

      const complete = () => {
        const prevHoverState = this._hoverState;
        this._hoverState = null;
        EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          this._leave(null, this);
        }
      };

      const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);

      this._queueCallback(complete, this.tip, isAnimated);
    }

    hide() {
      if (!this._popper) {
        return;
      }

      const tip = this.getTipElement();

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (this._hoverState !== HOVER_STATE_SHOW) {
          tip.remove();
        }

        this._cleanTipClass();

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

        if (this._popper) {
          this._popper.destroy();

          this._popper = null;
        }
      };

      const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);

      this._queueCallback(complete, this.tip, isAnimated);

      this._hoverState = '';
    }

    update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected


    isWithContent() {
      return Boolean(this.getTitle());
    }

    getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      const element = document.createElement('div');
      element.innerHTML = this._config.template;
      this.tip = element.children[0];
      return this.tip;
    }

    setContent() {
      const tip = this.getTipElement();
      this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
      tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
    }

    setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (isElement$1(content)) {
        content = getElement(content); // content is a DOM node or a jQuery

        if (this._config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.appendChild(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this._config.html) {
        if (this._config.sanitize) {
          content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }

    getTitle() {
      let title = this._element.getAttribute('data-bs-original-title');

      if (!title) {
        title = typeof this._config.title === 'function' ? this._config.title.call(this._element) : this._config.title;
      }

      return title;
    }

    updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private


    _initializeOnDelegatedTarget(event, context) {
      const dataKey = this.constructor.DATA_KEY;
      context = context || Data.get(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data.set(event.delegateTarget, dataKey, context);
      }

      return context;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: data => this._handlePopperPlacementChange(data)
        }],
        onFirstUpdate: data => {
          if (data.options.placement !== data.placement) {
            this._handlePopperPlacementChange(data);
          }
        }
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`);
    }

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }

    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      triggers.forEach(trigger => {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
          EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
        }
      });

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

      EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

      if (this._config.selector) {
        this._config = { ...this._config,
          trigger: 'manual',
          selector: ''
        };
      } else {
        this._fixTitle();
      }
    }

    _fixTitle() {
      const title = this._element.getAttribute('title');

      const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    }

    _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context._config.delay || !context._config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context._config.delay.show);
    }

    _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context._config.delay || !context._config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context._config.delay.hide);
    }

    _isWithActiveTrigger() {
      for (const trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }

    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });
      config = { ...this.constructor.Default,
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    }

    _getDelegateConfig() {
      const config = {};

      if (this._config) {
        for (const key in this._config) {
          if (this.constructor.Default[key] !== this._config[key]) {
            config[key] = this._config[key];
          }
        }
      }

      return config;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    }

    _handlePopperPlacementChange(popperData) {
      const {
        state
      } = popperData;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$3 = 'popover';
  const DATA_KEY$3 = 'bs.popover';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const CLASS_PREFIX = 'bs-popover';
  const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
  const Default$2 = { ...Tooltip.Default,
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  };
  const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(string|element|function)'
  };
  const Event$1 = {
    HIDE: `hide${EVENT_KEY$3}`,
    HIDDEN: `hidden${EVENT_KEY$3}`,
    SHOW: `show${EVENT_KEY$3}`,
    SHOWN: `shown${EVENT_KEY$3}`,
    INSERTED: `inserted${EVENT_KEY$3}`,
    CLICK: `click${EVENT_KEY$3}`,
    FOCUSIN: `focusin${EVENT_KEY$3}`,
    FOCUSOUT: `focusout${EVENT_KEY$3}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
  };
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }

    static get NAME() {
      return NAME$3;
    }

    static get Event() {
      return Event$1;
    }

    static get DefaultType() {
      return DefaultType$2;
    } // Overrides


    isWithContent() {
      return this.getTitle() || this._getContent();
    }

    getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      this.tip = super.getTipElement();

      if (!this.getTitle()) {
        SelectorEngine.findOne(SELECTOR_TITLE, this.tip).remove();
      }

      if (!this._getContent()) {
        SelectorEngine.findOne(SELECTOR_CONTENT, this.tip).remove();
      }

      return this.tip;
    }

    setContent() {
      const tip = this.getTipElement(); // we use append for html objects to maintain js events

      this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

      let content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this._element);
      }

      this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    } // Private


    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
    }

    _getContent() {
      return this._element.getAttribute('data-bs-content') || this._config.content;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY$1 = '.data-api';
  const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_DROPDOWN$1 = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const METHOD_OFFSET = 'offset';
  const METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
      this._config = this._getConfig(config);
      this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
      this.refresh();

      this._process();
    } // Getters


    static get Default() {
      return Default$1;
    }

    static get NAME() {
      return NAME$2;
    } // Public


    refresh() {
      const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      const targets = SelectorEngine.find(this._selector);
      targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          const targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
        this._offsets.push(item[0]);

        this._targets.push(item[1]);
      });
    }

    dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);
      super.dispose();
    } // Private


    _getConfig(config) {
      config = { ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (typeof config.target !== 'string' && isElement$1(config.target)) {
        let {
          id
        } = config.target;

        if (!id) {
          id = getUID(NAME$2);
          config.target.id = id;
        }

        config.target = `#${id}`;
      }

      typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    }

    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }

    _process() {
      const scrollTop = this._getScrollTop() + this._config.offset;

      const scrollHeight = this._getScrollHeight();

      const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (let i = this._offsets.length; i--;) {
        const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }

    _activate(target) {
      this._activeTarget = target;

      this._clear();

      const queries = this._selector.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);

      const link = SelectorEngine.findOne(queries.join(','));

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        link.classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        // Set triggered link as active
        link.classList.add(CLASS_NAME_ACTIVE$1);
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }

    _clear() {
      SelectorEngine.find(this._selector).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ACTIVE_UL = ':scope > li > .active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$1;
    } // Public


    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
      }

      let previous;
      const target = getElementFromSelector(this._element);

      const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      const complete = () => {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: this._element
        });
        EventHandler.trigger(this._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private


    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      const active = activeElements[0];
      const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      const complete = () => this._transitionComplete(element, active, callback);

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }

    _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      let parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        const dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    const data = Tab.getOrCreateInstance(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;

      this._setListeners();
    } // Getters


    static get DefaultType() {
      return DefaultType;
    }

    static get Default() {
      return Default;
    }

    static get NAME() {
      return NAME;
    } // Public


    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);

        this._element.classList.add(CLASS_NAME_SHOW);

        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);

        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.classList.remove(CLASS_NAME_SHOW);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      super.dispose();
    } // Private


    _getConfig(config) {
      config = { ...Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }

    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break;

        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break;
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      const nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }

    _setListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide());
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](this);
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  };

  return index_umd;

})));


},{}],"../node_modules/photoswipe/dist/photoswipe.js":[function(require,module,exports) {
var define;
/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.PhotoSwipe = factory();
  }
})(this, function () {
  'use strict';

  var PhotoSwipe = function (template, UiClass, items, options) {
    /*>>framework-bridge*/

    /**
     *
     * Set of generic functions used by gallery.
     * 
     * You're free to modify anything here as long as functionality is kept.
     * 
     */
    var framework = {
      features: null,
      bind: function (target, type, listener, unbind) {
        var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
        type = type.split(' ');

        for (var i = 0; i < type.length; i++) {
          if (type[i]) {
            target[methodName](type[i], listener, false);
          }
        }
      },
      isArray: function (obj) {
        return obj instanceof Array;
      },
      createEl: function (classes, tag) {
        var el = document.createElement(tag || 'div');

        if (classes) {
          el.className = classes;
        }

        return el;
      },
      getScrollY: function () {
        var yOffset = window.pageYOffset;
        return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
      },
      unbind: function (target, type, listener) {
        framework.bind(target, type, listener, true);
      },
      removeClass: function (el, className) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      },
      addClass: function (el, className) {
        if (!framework.hasClass(el, className)) {
          el.className += (el.className ? ' ' : '') + className;
        }
      },
      hasClass: function (el, className) {
        return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
      },
      getChildByClass: function (parentEl, childClassName) {
        var node = parentEl.firstChild;

        while (node) {
          if (framework.hasClass(node, childClassName)) {
            return node;
          }

          node = node.nextSibling;
        }
      },
      arraySearch: function (array, value, key) {
        var i = array.length;

        while (i--) {
          if (array[i][key] === value) {
            return i;
          }
        }

        return -1;
      },
      extend: function (o1, o2, preventOverwrite) {
        for (var prop in o2) {
          if (o2.hasOwnProperty(prop)) {
            if (preventOverwrite && o1.hasOwnProperty(prop)) {
              continue;
            }

            o1[prop] = o2[prop];
          }
        }
      },
      easing: {
        sine: {
          out: function (k) {
            return Math.sin(k * (Math.PI / 2));
          },
          inOut: function (k) {
            return -(Math.cos(Math.PI * k) - 1) / 2;
          }
        },
        cubic: {
          out: function (k) {
            return --k * k * k + 1;
          }
        }
        /*
        	elastic: {
        		out: function ( k ) {
        				var s, a = 0.1, p = 0.4;
        			if ( k === 0 ) return 0;
        			if ( k === 1 ) return 1;
        			if ( !a || a < 1 ) { a = 1; s = p / 4; }
        			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
        			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
        			},
        	},
        	back: {
        		out: function ( k ) {
        			var s = 1.70158;
        			return --k * k * ( ( s + 1 ) * k + s ) + 1;
        		}
        	}
        */

      },

      /**
       * 
       * @return {object}
       * 
       * {
       *  raf : request animation frame function
       *  caf : cancel animation frame function
       *  transfrom : transform property key (with vendor), or null if not supported
       *  oldIE : IE8 or below
       * }
       * 
       */
      detectFeatures: function () {
        if (framework.features) {
          return framework.features;
        }

        var helperEl = framework.createEl(),
            helperStyle = helperEl.style,
            vendor = '',
            features = {}; // IE8 and below

        features.oldIE = document.all && !document.addEventListener;
        features.touch = 'ontouchstart' in window;

        if (window.requestAnimationFrame) {
          features.raf = window.requestAnimationFrame;
          features.caf = window.cancelAnimationFrame;
        }

        features.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled; // fix false-positive detection of old Android in new IE
        // (IE11 ua string contains "Android 4.0")

        if (!features.pointerEvent) {
          var ua = navigator.userAgent; // Detect if device is iPhone or iPod and if it's older than iOS 8
          // http://stackoverflow.com/a/14223920
          // 
          // This detection is made because of buggy top/bottom toolbars
          // that don't trigger window.resize event.
          // For more info refer to _isFixedPosition variable in core.js

          if (/iP(hone|od)/.test(navigator.platform)) {
            var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);

            if (v && v.length > 0) {
              v = parseInt(v[1], 10);

              if (v >= 1 && v < 8) {
                features.isOldIOSPhone = true;
              }
            }
          } // Detect old Android (before KitKat)
          // due to bugs related to position:fixed
          // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript


          var match = ua.match(/Android\s([0-9\.]*)/);
          var androidversion = match ? match[1] : 0;
          androidversion = parseFloat(androidversion);

          if (androidversion >= 1) {
            if (androidversion < 4.4) {
              features.isOldAndroid = true; // for fixed position bug & performance
            }

            features.androidVersion = androidversion; // for touchend bug
          }

          features.isMobileOpera = /opera mini|opera mobi/i.test(ua); // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
        }

        var styleChecks = ['transform', 'perspective', 'animationName'],
            vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
            styleCheckItem,
            styleName;

        for (var i = 0; i < 4; i++) {
          vendor = vendors[i];

          for (var a = 0; a < 3; a++) {
            styleCheckItem = styleChecks[a]; // uppercase first letter of property name, if vendor is present

            styleName = vendor + (vendor ? styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : styleCheckItem);

            if (!features[styleCheckItem] && styleName in helperStyle) {
              features[styleCheckItem] = styleName;
            }
          }

          if (vendor && !features.raf) {
            vendor = vendor.toLowerCase();
            features.raf = window[vendor + 'RequestAnimationFrame'];

            if (features.raf) {
              features.caf = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
            }
          }
        }

        if (!features.raf) {
          var lastTime = 0;

          features.raf = function (fn) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
              fn(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
          };

          features.caf = function (id) {
            clearTimeout(id);
          };
        } // Detect SVG support


        features.svg = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
        framework.features = features;
        return features;
      }
    };
    framework.detectFeatures(); // Override addEventListener for old versions of IE

    if (framework.features.oldIE) {
      framework.bind = function (target, type, listener, unbind) {
        type = type.split(' ');

        var methodName = (unbind ? 'detach' : 'attach') + 'Event',
            evName,
            _handleEv = function () {
          listener.handleEvent.call(listener);
        };

        for (var i = 0; i < type.length; i++) {
          evName = type[i];

          if (evName) {
            if (typeof listener === 'object' && listener.handleEvent) {
              if (!unbind) {
                listener['oldIE' + evName] = _handleEv;
              } else {
                if (!listener['oldIE' + evName]) {
                  return false;
                }
              }

              target[methodName]('on' + evName, listener['oldIE' + evName]);
            } else {
              target[methodName]('on' + evName, listener);
            }
          }
        }
      };
    }
    /*>>framework-bridge*/

    /*>>core*/
    //function(template, UiClass, items, options)


    var self = this;
    /**
     * Static vars, don't change unless you know what you're doing.
     */

    var DOUBLE_TAP_RADIUS = 25,
        NUM_HOLDERS = 3;
    /**
     * Options
     */

    var _options = {
      allowPanToNext: true,
      spacing: 0.12,
      bgOpacity: 1,
      mouseUsed: false,
      loop: true,
      pinchToClose: true,
      closeOnScroll: true,
      closeOnVerticalDrag: true,
      verticalDragRange: 0.75,
      hideAnimationDuration: 333,
      showAnimationDuration: 333,
      showHideOpacity: false,
      focus: true,
      escKey: true,
      arrowKeys: true,
      mainScrollEndFriction: 0.35,
      panEndFriction: 0.35,
      isClickableElement: function (el) {
        return el.tagName === 'A';
      },
      getDoubleTapZoom: function (isMouseClick, item) {
        if (isMouseClick) {
          return 1;
        } else {
          return item.initialZoomLevel < 0.7 ? 1 : 1.33;
        }
      },
      maxSpreadZoom: 1.33,
      modal: true,
      // not fully implemented yet
      scaleMode: 'fit' // TODO

    };
    framework.extend(_options, options);
    /**
     * Private helper variables & functions
     */

    var _getEmptyPoint = function () {
      return {
        x: 0,
        y: 0
      };
    };

    var _isOpen,
        _isDestroying,
        _closedByScroll,
        _currentItemIndex,
        _containerStyle,
        _containerShiftIndex,
        _currPanDist = _getEmptyPoint(),
        _startPanOffset = _getEmptyPoint(),
        _panOffset = _getEmptyPoint(),
        _upMoveEvents,
        // drag move, drag end & drag cancel events array
    _downEvents,
        // drag start events array
    _globalEventHandlers,
        _viewportSize = {},
        _currZoomLevel,
        _startZoomLevel,
        _translatePrefix,
        _translateSufix,
        _updateSizeInterval,
        _itemsNeedUpdate,
        _currPositionIndex = 0,
        _offset = {},
        _slideSize = _getEmptyPoint(),
        // size of slide area, including spacing
    _itemHolders,
        _prevItemIndex,
        _indexDiff = 0,
        // difference of indexes since last content update
    _dragStartEvent,
        _dragMoveEvent,
        _dragEndEvent,
        _dragCancelEvent,
        _transformKey,
        _pointerEventEnabled,
        _isFixedPosition = true,
        _likelyTouchDevice,
        _modules = [],
        _requestAF,
        _cancelAF,
        _initalClassName,
        _initalWindowScrollY,
        _oldIE,
        _currentWindowScrollY,
        _features,
        _windowVisibleSize = {},
        _renderMaxResolution = false,
        _orientationChangeTimeout,
        // Registers PhotoSWipe module (History, Controller ...)
    _registerModule = function (name, module) {
      framework.extend(self, module.publicMethods);

      _modules.push(name);
    },
        _getLoopedId = function (index) {
      var numSlides = _getNumItems();

      if (index > numSlides - 1) {
        return index - numSlides;
      } else if (index < 0) {
        return numSlides + index;
      }

      return index;
    },
        // Micro bind/trigger
    _listeners = {},
        _listen = function (name, fn) {
      if (!_listeners[name]) {
        _listeners[name] = [];
      }

      return _listeners[name].push(fn);
    },
        _shout = function (name) {
      var listeners = _listeners[name];

      if (listeners) {
        var args = Array.prototype.slice.call(arguments);
        args.shift();

        for (var i = 0; i < listeners.length; i++) {
          listeners[i].apply(self, args);
        }
      }
    },
        _getCurrentTime = function () {
      return new Date().getTime();
    },
        _applyBgOpacity = function (opacity) {
      _bgOpacity = opacity;
      self.bg.style.opacity = opacity * _options.bgOpacity;
    },
        _applyZoomTransform = function (styleObj, x, y, zoom, item) {
      if (!_renderMaxResolution || item && item !== self.currItem) {
        zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
      }

      styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
    },
        _applyCurrentZoomPan = function (allowRenderResolution) {
      if (_currZoomElementStyle) {
        if (allowRenderResolution) {
          if (_currZoomLevel > self.currItem.fitRatio) {
            if (!_renderMaxResolution) {
              _setImageSize(self.currItem, false, true);

              _renderMaxResolution = true;
            }
          } else {
            if (_renderMaxResolution) {
              _setImageSize(self.currItem);

              _renderMaxResolution = false;
            }
          }
        }

        _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
      }
    },
        _applyZoomPanToItem = function (item) {
      if (item.container) {
        _applyZoomTransform(item.container.style, item.initialPosition.x, item.initialPosition.y, item.initialZoomLevel, item);
      }
    },
        _setTranslateX = function (x, elStyle) {
      elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
    },
        _moveMainScroll = function (x, dragging) {
      if (!_options.loop && dragging) {
        var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
            delta = Math.round(x - _mainScrollPos.x);

        if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) {
          x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
        }
      }

      _mainScrollPos.x = x;

      _setTranslateX(x, _containerStyle);
    },
        _calculatePanOffset = function (axis, zoomLevel) {
      var m = _midZoomPoint[axis] - _offset[axis];
      return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
    },
        _equalizePoints = function (p1, p2) {
      p1.x = p2.x;
      p1.y = p2.y;

      if (p2.id) {
        p1.id = p2.id;
      }
    },
        _roundPoint = function (p) {
      p.x = Math.round(p.x);
      p.y = Math.round(p.y);
    },
        _mouseMoveTimeout = null,
        _onFirstMouseMove = function () {
      // Wait until mouse move event is fired at least twice during 100ms
      // We do this, because some mobile browsers trigger it on touchstart
      if (_mouseMoveTimeout) {
        framework.unbind(document, 'mousemove', _onFirstMouseMove);
        framework.addClass(template, 'pswp--has_mouse');
        _options.mouseUsed = true;

        _shout('mouseUsed');
      }

      _mouseMoveTimeout = setTimeout(function () {
        _mouseMoveTimeout = null;
      }, 100);
    },
        _bindEvents = function () {
      framework.bind(document, 'keydown', self);

      if (_features.transform) {
        // don't bind click event in browsers that don't support transform (mostly IE8)
        framework.bind(self.scrollWrap, 'click', self);
      }

      if (!_options.mouseUsed) {
        framework.bind(document, 'mousemove', _onFirstMouseMove);
      }

      framework.bind(window, 'resize scroll orientationchange', self);

      _shout('bindEvents');
    },
        _unbindEvents = function () {
      framework.unbind(window, 'resize scroll orientationchange', self);
      framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
      framework.unbind(document, 'keydown', self);
      framework.unbind(document, 'mousemove', _onFirstMouseMove);

      if (_features.transform) {
        framework.unbind(self.scrollWrap, 'click', self);
      }

      if (_isDragging) {
        framework.unbind(window, _upMoveEvents, self);
      }

      clearTimeout(_orientationChangeTimeout);

      _shout('unbindEvents');
    },
        _calculatePanBounds = function (zoomLevel, update) {
      var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);

      if (update) {
        _currPanBounds = bounds;
      }

      return bounds;
    },
        _getMinZoomLevel = function (item) {
      if (!item) {
        item = self.currItem;
      }

      return item.initialZoomLevel;
    },
        _getMaxZoomLevel = function (item) {
      if (!item) {
        item = self.currItem;
      }

      return item.w > 0 ? _options.maxSpreadZoom : 1;
    },
        // Return true if offset is out of the bounds
    _modifyDestPanOffset = function (axis, destPanBounds, destPanOffset, destZoomLevel) {
      if (destZoomLevel === self.currItem.initialZoomLevel) {
        destPanOffset[axis] = self.currItem.initialPosition[axis];
        return true;
      } else {
        destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

        if (destPanOffset[axis] > destPanBounds.min[axis]) {
          destPanOffset[axis] = destPanBounds.min[axis];
          return true;
        } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
          destPanOffset[axis] = destPanBounds.max[axis];
          return true;
        }
      }

      return false;
    },
        _setupTransforms = function () {
      if (_transformKey) {
        // setup 3d transforms
        var allow3dTransform = _features.perspective && !_likelyTouchDevice;
        _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
        _translateSufix = _features.perspective ? ', 0px)' : ')';
        return;
      } // Override zoom/pan/move functions in case old browser is used (most likely IE)
      // (so they use left/top/width/height, instead of CSS transform)


      _transformKey = 'left';
      framework.addClass(template, 'pswp--ie');

      _setTranslateX = function (x, elStyle) {
        elStyle.left = x + 'px';
      };

      _applyZoomPanToItem = function (item) {
        var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
            s = item.container.style,
            w = zoomRatio * item.w,
            h = zoomRatio * item.h;
        s.width = w + 'px';
        s.height = h + 'px';
        s.left = item.initialPosition.x + 'px';
        s.top = item.initialPosition.y + 'px';
      };

      _applyCurrentZoomPan = function () {
        if (_currZoomElementStyle) {
          var s = _currZoomElementStyle,
              item = self.currItem,
              zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
              w = zoomRatio * item.w,
              h = zoomRatio * item.h;
          s.width = w + 'px';
          s.height = h + 'px';
          s.left = _panOffset.x + 'px';
          s.top = _panOffset.y + 'px';
        }
      };
    },
        _onKeyDown = function (e) {
      var keydownAction = '';

      if (_options.escKey && e.keyCode === 27) {
        keydownAction = 'close';
      } else if (_options.arrowKeys) {
        if (e.keyCode === 37) {
          keydownAction = 'prev';
        } else if (e.keyCode === 39) {
          keydownAction = 'next';
        }
      }

      if (keydownAction) {
        // don't do anything if special key pressed to prevent from overriding default browser actions
        // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }

          self[keydownAction]();
        }
      }
    },
        _onGlobalClick = function (e) {
      if (!e) {
        return;
      } // don't allow click event to pass through when triggering after drag or some other gesture


      if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
        _updatePageScrollOffset = function () {
      self.setScrollOffset(0, framework.getScrollY());
    }; // Micro animation engine


    var _animations = {},
        _numAnimations = 0,
        _stopAnimation = function (name) {
      if (_animations[name]) {
        if (_animations[name].raf) {
          _cancelAF(_animations[name].raf);
        }

        _numAnimations--;
        delete _animations[name];
      }
    },
        _registerStartAnimation = function (name) {
      if (_animations[name]) {
        _stopAnimation(name);
      }

      if (!_animations[name]) {
        _numAnimations++;
        _animations[name] = {};
      }
    },
        _stopAllAnimations = function () {
      for (var prop in _animations) {
        if (_animations.hasOwnProperty(prop)) {
          _stopAnimation(prop);
        }
      }
    },
        _animateProp = function (name, b, endProp, d, easingFn, onUpdate, onComplete) {
      var startAnimTime = _getCurrentTime(),
          t;

      _registerStartAnimation(name);

      var animloop = function () {
        if (_animations[name]) {
          t = _getCurrentTime() - startAnimTime; // time diff
          //b - beginning (start prop)
          //d - anim duration

          if (t >= d) {
            _stopAnimation(name);

            onUpdate(endProp);

            if (onComplete) {
              onComplete();
            }

            return;
          }

          onUpdate((endProp - b) * easingFn(t / d) + b);
          _animations[name].raf = _requestAF(animloop);
        }
      };

      animloop();
    };

    var publicMethods = {
      // make a few local variables and functions public
      shout: _shout,
      listen: _listen,
      viewportSize: _viewportSize,
      options: _options,
      isMainScrollAnimating: function () {
        return _mainScrollAnimating;
      },
      getZoomLevel: function () {
        return _currZoomLevel;
      },
      getCurrentIndex: function () {
        return _currentItemIndex;
      },
      isDragging: function () {
        return _isDragging;
      },
      isZooming: function () {
        return _isZooming;
      },
      setScrollOffset: function (x, y) {
        _offset.x = x;
        _currentWindowScrollY = _offset.y = y;

        _shout('updateScrollOffset', _offset);
      },
      applyZoomPan: function (zoomLevel, panX, panY, allowRenderResolution) {
        _panOffset.x = panX;
        _panOffset.y = panY;
        _currZoomLevel = zoomLevel;

        _applyCurrentZoomPan(allowRenderResolution);
      },
      init: function () {
        if (_isOpen || _isDestroying) {
          return;
        }

        var i;
        self.framework = framework; // basic functionality

        self.template = template; // root DOM element of PhotoSwipe

        self.bg = framework.getChildByClass(template, 'pswp__bg');
        _initalClassName = template.className;
        _isOpen = true;
        _features = framework.detectFeatures();
        _requestAF = _features.raf;
        _cancelAF = _features.caf;
        _transformKey = _features.transform;
        _oldIE = _features.oldIE;
        self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
        self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');
        _containerStyle = self.container.style; // for fast access
        // Objects that hold slides (there are only 3 in DOM)

        self.itemHolders = _itemHolders = [{
          el: self.container.children[0],
          wrap: 0,
          index: -1
        }, {
          el: self.container.children[1],
          wrap: 0,
          index: -1
        }, {
          el: self.container.children[2],
          wrap: 0,
          index: -1
        }]; // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)

        _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

        _setupTransforms(); // Setup global events


        _globalEventHandlers = {
          resize: self.updateSize,
          // Fixes: iOS 10.3 resize event
          // does not update scrollWrap.clientWidth instantly after resize
          // https://github.com/dimsemenov/PhotoSwipe/issues/1315
          orientationchange: function () {
            clearTimeout(_orientationChangeTimeout);
            _orientationChangeTimeout = setTimeout(function () {
              if (_viewportSize.x !== self.scrollWrap.clientWidth) {
                self.updateSize();
              }
            }, 500);
          },
          scroll: _updatePageScrollOffset,
          keydown: _onKeyDown,
          click: _onGlobalClick
        }; // disable show/hide effects on old browsers that don't support CSS animations or transforms, 
        // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.

        var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;

        if (!_features.animationName || !_features.transform || oldPhone) {
          _options.showAnimationDuration = _options.hideAnimationDuration = 0;
        } // init modules


        for (i = 0; i < _modules.length; i++) {
          self['init' + _modules[i]]();
        } // init


        if (UiClass) {
          var ui = self.ui = new UiClass(self, framework);
          ui.init();
        }

        _shout('firstUpdate');

        _currentItemIndex = _currentItemIndex || _options.index || 0; // validate index

        if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
          _currentItemIndex = 0;
        }

        self.currItem = _getItemAt(_currentItemIndex);

        if (_features.isOldIOSPhone || _features.isOldAndroid) {
          _isFixedPosition = false;
        }

        template.setAttribute('aria-hidden', 'false');

        if (_options.modal) {
          if (!_isFixedPosition) {
            template.style.position = 'absolute';
            template.style.top = framework.getScrollY() + 'px';
          } else {
            template.style.position = 'fixed';
          }
        }

        if (_currentWindowScrollY === undefined) {
          _shout('initialLayout');

          _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
        } // add classes to root element of PhotoSwipe


        var rootClasses = 'pswp--open ';

        if (_options.mainClass) {
          rootClasses += _options.mainClass + ' ';
        }

        if (_options.showHideOpacity) {
          rootClasses += 'pswp--animate_opacity ';
        }

        rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
        rootClasses += _features.animationName ? ' pswp--css_animation' : '';
        rootClasses += _features.svg ? ' pswp--svg' : '';
        framework.addClass(template, rootClasses);
        self.updateSize(); // initial update

        _containerShiftIndex = -1;
        _indexDiff = null;

        for (i = 0; i < NUM_HOLDERS; i++) {
          _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
        }

        if (!_oldIE) {
          framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
        }

        _listen('initialZoomInEnd', function () {
          self.setContent(_itemHolders[0], _currentItemIndex - 1);
          self.setContent(_itemHolders[2], _currentItemIndex + 1);
          _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

          if (_options.focus) {
            // focus causes layout, 
            // which causes lag during the animation, 
            // that's why we delay it untill the initial zoom transition ends
            template.focus();
          }

          _bindEvents();
        }); // set content for center slide (first time)


        self.setContent(_itemHolders[1], _currentItemIndex);
        self.updateCurrItem();

        _shout('afterInit');

        if (!_isFixedPosition) {
          // On all versions of iOS lower than 8.0, we check size of viewport every second.
          // 
          // This is done to detect when Safari top & bottom bars appear, 
          // as this action doesn't trigger any events (like resize). 
          // 
          // On iOS8 they fixed this.
          // 
          // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
          _updateSizeInterval = setInterval(function () {
            if (!_numAnimations && !_isDragging && !_isZooming && _currZoomLevel === self.currItem.initialZoomLevel) {
              self.updateSize();
            }
          }, 1000);
        }

        framework.addClass(template, 'pswp--visible');
      },
      // Close the gallery, then destroy it
      close: function () {
        if (!_isOpen) {
          return;
        }

        _isOpen = false;
        _isDestroying = true;

        _shout('close');

        _unbindEvents();

        _showOrHide(self.currItem, null, true, self.destroy);
      },
      // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
      destroy: function () {
        _shout('destroy');

        if (_showOrHideTimeout) {
          clearTimeout(_showOrHideTimeout);
        }

        template.setAttribute('aria-hidden', 'true');
        template.className = _initalClassName;

        if (_updateSizeInterval) {
          clearInterval(_updateSizeInterval);
        }

        framework.unbind(self.scrollWrap, _downEvents, self); // we unbind scroll event at the end, as closing animation may depend on it

        framework.unbind(window, 'scroll', self);

        _stopDragUpdateLoop();

        _stopAllAnimations();

        _listeners = null;
      },

      /**
       * Pan image to position
       * @param {Number} x     
       * @param {Number} y     
       * @param {Boolean} force Will ignore bounds if set to true.
       */
      panTo: function (x, y, force) {
        if (!force) {
          if (x > _currPanBounds.min.x) {
            x = _currPanBounds.min.x;
          } else if (x < _currPanBounds.max.x) {
            x = _currPanBounds.max.x;
          }

          if (y > _currPanBounds.min.y) {
            y = _currPanBounds.min.y;
          } else if (y < _currPanBounds.max.y) {
            y = _currPanBounds.max.y;
          }
        }

        _panOffset.x = x;
        _panOffset.y = y;

        _applyCurrentZoomPan();
      },
      handleEvent: function (e) {
        e = e || window.event;

        if (_globalEventHandlers[e.type]) {
          _globalEventHandlers[e.type](e);
        }
      },
      goTo: function (index) {
        index = _getLoopedId(index);
        var diff = index - _currentItemIndex;
        _indexDiff = diff;
        _currentItemIndex = index;
        self.currItem = _getItemAt(_currentItemIndex);
        _currPositionIndex -= diff;

        _moveMainScroll(_slideSize.x * _currPositionIndex);

        _stopAllAnimations();

        _mainScrollAnimating = false;
        self.updateCurrItem();
      },
      next: function () {
        self.goTo(_currentItemIndex + 1);
      },
      prev: function () {
        self.goTo(_currentItemIndex - 1);
      },
      // update current zoom/pan objects
      updateCurrZoomItem: function (emulateSetContent) {
        if (emulateSetContent) {
          _shout('beforeChange', 0);
        } // itemHolder[1] is middle (current) item


        if (_itemHolders[1].el.children.length) {
          var zoomElement = _itemHolders[1].el.children[0];

          if (framework.hasClass(zoomElement, 'pswp__zoom-wrap')) {
            _currZoomElementStyle = zoomElement.style;
          } else {
            _currZoomElementStyle = null;
          }
        } else {
          _currZoomElementStyle = null;
        }

        _currPanBounds = self.currItem.bounds;
        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
        _panOffset.x = _currPanBounds.center.x;
        _panOffset.y = _currPanBounds.center.y;

        if (emulateSetContent) {
          _shout('afterChange');
        }
      },
      invalidateCurrItems: function () {
        _itemsNeedUpdate = true;

        for (var i = 0; i < NUM_HOLDERS; i++) {
          if (_itemHolders[i].item) {
            _itemHolders[i].item.needsUpdate = true;
          }
        }
      },
      updateCurrItem: function (beforeAnimation) {
        if (_indexDiff === 0) {
          return;
        }

        var diffAbs = Math.abs(_indexDiff),
            tempHolder;

        if (beforeAnimation && diffAbs < 2) {
          return;
        }

        self.currItem = _getItemAt(_currentItemIndex);
        _renderMaxResolution = false;

        _shout('beforeChange', _indexDiff);

        if (diffAbs >= NUM_HOLDERS) {
          _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
          diffAbs = NUM_HOLDERS;
        }

        for (var i = 0; i < diffAbs; i++) {
          if (_indexDiff > 0) {
            tempHolder = _itemHolders.shift();
            _itemHolders[NUM_HOLDERS - 1] = tempHolder; // move first to last

            _containerShiftIndex++;

            _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);

            self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
          } else {
            tempHolder = _itemHolders.pop();

            _itemHolders.unshift(tempHolder); // move last to first


            _containerShiftIndex--;

            _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);

            self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
          }
        } // reset zoom/pan on previous item


        if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
          var prevItem = _getItemAt(_prevItemIndex);

          if (prevItem.initialZoomLevel !== _currZoomLevel) {
            _calculateItemSize(prevItem, _viewportSize);

            _setImageSize(prevItem);

            _applyZoomPanToItem(prevItem);
          }
        } // reset diff after update


        _indexDiff = 0;
        self.updateCurrZoomItem();
        _prevItemIndex = _currentItemIndex;

        _shout('afterChange');
      },
      updateSize: function (force) {
        if (!_isFixedPosition && _options.modal) {
          var windowScrollY = framework.getScrollY();

          if (_currentWindowScrollY !== windowScrollY) {
            template.style.top = windowScrollY + 'px';
            _currentWindowScrollY = windowScrollY;
          }

          if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
            return;
          }

          _windowVisibleSize.x = window.innerWidth;
          _windowVisibleSize.y = window.innerHeight; //template.style.width = _windowVisibleSize.x + 'px';

          template.style.height = _windowVisibleSize.y + 'px';
        }

        _viewportSize.x = self.scrollWrap.clientWidth;
        _viewportSize.y = self.scrollWrap.clientHeight;

        _updatePageScrollOffset();

        _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
        _slideSize.y = _viewportSize.y;

        _moveMainScroll(_slideSize.x * _currPositionIndex);

        _shout('beforeResize'); // even may be used for example to switch image sources
        // don't re-calculate size on inital size update


        if (_containerShiftIndex !== undefined) {
          var holder, item, hIndex;

          for (var i = 0; i < NUM_HOLDERS; i++) {
            holder = _itemHolders[i];

            _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);

            hIndex = _currentItemIndex + i - 1;

            if (_options.loop && _getNumItems() > 2) {
              hIndex = _getLoopedId(hIndex);
            } // update zoom level on items and refresh source (if needsUpdate)


            item = _getItemAt(hIndex); // re-render gallery item if `needsUpdate`,
            // or doesn't have `bounds` (entirely new slide object)

            if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {
              self.cleanSlide(item);
              self.setContent(holder, hIndex); // if "center" slide

              if (i === 1) {
                self.currItem = item;
                self.updateCurrZoomItem(true);
              }

              item.needsUpdate = false;
            } else if (holder.index === -1 && hIndex >= 0) {
              // add content first time
              self.setContent(holder, hIndex);
            }

            if (item && item.container) {
              _calculateItemSize(item, _viewportSize);

              _setImageSize(item);

              _applyZoomPanToItem(item);
            }
          }

          _itemsNeedUpdate = false;
        }

        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
        _currPanBounds = self.currItem.bounds;

        if (_currPanBounds) {
          _panOffset.x = _currPanBounds.center.x;
          _panOffset.y = _currPanBounds.center.y;

          _applyCurrentZoomPan(true);
        }

        _shout('resize');
      },
      // Zoom current item to
      zoomTo: function (destZoomLevel, centerPoint, speed, easingFn, updateFn) {
        /*
        	if(destZoomLevel === 'fit') {
        		destZoomLevel = self.currItem.fitRatio;
        	} else if(destZoomLevel === 'fill') {
        		destZoomLevel = self.currItem.fillRatio;
        	}
        */
        if (centerPoint) {
          _startZoomLevel = _currZoomLevel;
          _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
          _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;

          _equalizePoints(_startPanOffset, _panOffset);
        }

        var destPanBounds = _calculatePanBounds(destZoomLevel, false),
            destPanOffset = {};

        _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);

        _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

        var initialZoomLevel = _currZoomLevel;
        var initialPanOffset = {
          x: _panOffset.x,
          y: _panOffset.y
        };

        _roundPoint(destPanOffset);

        var onUpdate = function (now) {
          if (now === 1) {
            _currZoomLevel = destZoomLevel;
            _panOffset.x = destPanOffset.x;
            _panOffset.y = destPanOffset.y;
          } else {
            _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
            _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
            _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
          }

          if (updateFn) {
            updateFn(now);
          }

          _applyCurrentZoomPan(now === 1);
        };

        if (speed) {
          _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
        } else {
          onUpdate(1);
        }
      }
    };
    /*>>core*/

    /*>>gestures*/

    /**
     * Mouse/touch/pointer event handlers.
     * 
     * separated from @core.js for readability
     */

    var MIN_SWIPE_DISTANCE = 30,
        DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

    var _gestureStartTime,
        _gestureCheckSpeedTime,
        // pool of objects that are used during dragging of zooming
    p = {},
        // first point
    p2 = {},
        // second point (for zoom gesture)
    delta = {},
        _currPoint = {},
        _startPoint = {},
        _currPointers = [],
        _startMainScrollPos = {},
        _releaseAnimData,
        _posPoints = [],
        // array of points during dragging, used to determine type of gesture
    _tempPoint = {},
        _isZoomingIn,
        _verticalDragInitiated,
        _oldAndroidTouchEndTimeout,
        _currZoomedItemIndex = 0,
        _centerPoint = _getEmptyPoint(),
        _lastReleaseTime = 0,
        _isDragging,
        // at least one pointer is down
    _isMultitouch,
        // at least two _pointers are down
    _zoomStarted,
        // zoom level changed during zoom gesture
    _moved,
        _dragAnimFrame,
        _mainScrollShifted,
        _currentPoints,
        // array of current touch points
    _isZooming,
        _currPointsDistance,
        _startPointsDistance,
        _currPanBounds,
        _mainScrollPos = _getEmptyPoint(),
        _currZoomElementStyle,
        _mainScrollAnimating,
        // true, if animation after swipe gesture is running
    _midZoomPoint = _getEmptyPoint(),
        _currCenterPoint = _getEmptyPoint(),
        _direction,
        _isFirstMove,
        _opacityChanged,
        _bgOpacity,
        _wasOverInitialZoom,
        _isEqualPoints = function (p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    },
        _isNearbyPoints = function (touch0, touch1) {
      return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
    },
        _calculatePointsDistance = function (p1, p2) {
      _tempPoint.x = Math.abs(p1.x - p2.x);
      _tempPoint.y = Math.abs(p1.y - p2.y);
      return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
    },
        _stopDragUpdateLoop = function () {
      if (_dragAnimFrame) {
        _cancelAF(_dragAnimFrame);

        _dragAnimFrame = null;
      }
    },
        _dragUpdateLoop = function () {
      if (_isDragging) {
        _dragAnimFrame = _requestAF(_dragUpdateLoop);

        _renderMovement();
      }
    },
        _canPan = function () {
      return !(_options.scaleMode === 'fit' && _currZoomLevel === self.currItem.initialZoomLevel);
    },
        // find the closest parent DOM element
    _closestElement = function (el, fn) {
      if (!el || el === document) {
        return false;
      } // don't search elements above pswp__scroll-wrap


      if (el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1) {
        return false;
      }

      if (fn(el)) {
        return el;
      }

      return _closestElement(el.parentNode, fn);
    },
        _preventObj = {},
        _preventDefaultEventBehaviour = function (e, isDown) {
      _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

      _shout('preventDragEvent', e, isDown, _preventObj);

      return _preventObj.prevent;
    },
        _convertTouchToPoint = function (touch, p) {
      p.x = touch.pageX;
      p.y = touch.pageY;
      p.id = touch.identifier;
      return p;
    },
        _findCenterOfPoints = function (p1, p2, pCenter) {
      pCenter.x = (p1.x + p2.x) * 0.5;
      pCenter.y = (p1.y + p2.y) * 0.5;
    },
        _pushPosPoint = function (time, x, y) {
      if (time - _gestureCheckSpeedTime > 50) {
        var o = _posPoints.length > 2 ? _posPoints.shift() : {};
        o.x = x;
        o.y = y;

        _posPoints.push(o);

        _gestureCheckSpeedTime = time;
      }
    },
        _calculateVerticalDragOpacityRatio = function () {
      var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position

      return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
    },
        // points pool, reused during touch events
    _ePoint1 = {},
        _ePoint2 = {},
        _tempPointsArr = [],
        _tempCounter,
        _getTouchPoints = function (e) {
      // clean up previous points, without recreating array
      while (_tempPointsArr.length > 0) {
        _tempPointsArr.pop();
      }

      if (!_pointerEventEnabled) {
        if (e.type.indexOf('touch') > -1) {
          if (e.touches && e.touches.length > 0) {
            _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);

            if (e.touches.length > 1) {
              _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
            }
          }
        } else {
          _ePoint1.x = e.pageX;
          _ePoint1.y = e.pageY;
          _ePoint1.id = '';
          _tempPointsArr[0] = _ePoint1; //_ePoint1;
        }
      } else {
        _tempCounter = 0; // we can use forEach, as pointer events are supported only in modern browsers

        _currPointers.forEach(function (p) {
          if (_tempCounter === 0) {
            _tempPointsArr[0] = p;
          } else if (_tempCounter === 1) {
            _tempPointsArr[1] = p;
          }

          _tempCounter++;
        });
      }

      return _tempPointsArr;
    },
        _panOrMoveMainScroll = function (axis, delta) {
      var panFriction,
          overDiff = 0,
          newOffset = _panOffset[axis] + delta[axis],
          startOverDiff,
          dir = delta[axis] > 0,
          newMainScrollPosition = _mainScrollPos.x + delta.x,
          mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
          newPanPos,
          newMainScrollPos; // calculate fdistance over the bounds and friction

      if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
        panFriction = _options.panEndFriction; // Linear increasing of friction, so at 1/4 of viewport it's at max value. 
        // Looks not as nice as was expected. Left for history.
        // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
      } else {
        panFriction = 1;
      }

      newOffset = _panOffset[axis] + delta[axis] * panFriction; // move main scroll or start panning

      if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {
        if (!_currZoomElementStyle) {
          newMainScrollPos = newMainScrollPosition;
        } else if (_direction === 'h' && axis === 'x' && !_zoomStarted) {
          if (dir) {
            if (newOffset > _currPanBounds.min[axis]) {
              panFriction = _options.panEndFriction;
              overDiff = _currPanBounds.min[axis] - newOffset;
              startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
            } // drag right


            if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
              newMainScrollPos = newMainScrollPosition;

              if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                newMainScrollPos = _startMainScrollPos.x;
              }
            } else {
              if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                newPanPos = newOffset;
              }
            }
          } else {
            if (newOffset < _currPanBounds.max[axis]) {
              panFriction = _options.panEndFriction;
              overDiff = newOffset - _currPanBounds.max[axis];
              startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
            }

            if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
              newMainScrollPos = newMainScrollPosition;

              if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                newMainScrollPos = _startMainScrollPos.x;
              }
            } else {
              if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                newPanPos = newOffset;
              }
            }
          } //

        }

        if (axis === 'x') {
          if (newMainScrollPos !== undefined) {
            _moveMainScroll(newMainScrollPos, true);

            if (newMainScrollPos === _startMainScrollPos.x) {
              _mainScrollShifted = false;
            } else {
              _mainScrollShifted = true;
            }
          }

          if (_currPanBounds.min.x !== _currPanBounds.max.x) {
            if (newPanPos !== undefined) {
              _panOffset.x = newPanPos;
            } else if (!_mainScrollShifted) {
              _panOffset.x += delta.x * panFriction;
            }
          }

          return newMainScrollPos !== undefined;
        }
      }

      if (!_mainScrollAnimating) {
        if (!_mainScrollShifted) {
          if (_currZoomLevel > self.currItem.fitRatio) {
            _panOffset[axis] += delta[axis] * panFriction;
          }
        }
      }
    },
        // Pointerdown/touchstart/mousedown handler
    _onDragStart = function (e) {
      // Allow dragging only via left mouse button.
      // As this handler is not added in IE8 - we ignore e.which
      // 
      // http://www.quirksmode.org/js/events_properties.html
      // https://developer.mozilla.org/en-US/docs/Web/API/event.button
      if (e.type === 'mousedown' && e.button > 0) {
        return;
      }

      if (_initialZoomRunning) {
        e.preventDefault();
        return;
      }

      if (_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
        return;
      }

      if (_preventDefaultEventBehaviour(e, true)) {
        e.preventDefault();
      }

      _shout('pointerDown');

      if (_pointerEventEnabled) {
        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

        if (pointerIndex < 0) {
          pointerIndex = _currPointers.length;
        }

        _currPointers[pointerIndex] = {
          x: e.pageX,
          y: e.pageY,
          id: e.pointerId
        };
      }

      var startPointsList = _getTouchPoints(e),
          numPoints = startPointsList.length;

      _currentPoints = null;

      _stopAllAnimations(); // init drag


      if (!_isDragging || numPoints === 1) {
        _isDragging = _isFirstMove = true;
        framework.bind(window, _upMoveEvents, self);
        _isZoomingIn = _wasOverInitialZoom = _opacityChanged = _verticalDragInitiated = _mainScrollShifted = _moved = _isMultitouch = _zoomStarted = false;
        _direction = null;

        _shout('firstTouchStart', startPointsList);

        _equalizePoints(_startPanOffset, _panOffset);

        _currPanDist.x = _currPanDist.y = 0;

        _equalizePoints(_currPoint, startPointsList[0]);

        _equalizePoints(_startPoint, _currPoint); //_equalizePoints(_startMainScrollPos, _mainScrollPos);


        _startMainScrollPos.x = _slideSize.x * _currPositionIndex;
        _posPoints = [{
          x: _currPoint.x,
          y: _currPoint.y
        }];
        _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime(); //_mainScrollAnimationEnd(true);

        _calculatePanBounds(_currZoomLevel, true); // Start rendering


        _stopDragUpdateLoop();

        _dragUpdateLoop();
      } // init zoom


      if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
        _startZoomLevel = _currZoomLevel;
        _zoomStarted = false; // true if zoom changed at least once

        _isZooming = _isMultitouch = true;
        _currPanDist.y = _currPanDist.x = 0;

        _equalizePoints(_startPanOffset, _panOffset);

        _equalizePoints(p, startPointsList[0]);

        _equalizePoints(p2, startPointsList[1]);

        _findCenterOfPoints(p, p2, _currCenterPoint);

        _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
        _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
        _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
      }
    },
        // Pointermove/touchmove/mousemove handler
    _onDragMove = function (e) {
      e.preventDefault();

      if (_pointerEventEnabled) {
        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

        if (pointerIndex > -1) {
          var p = _currPointers[pointerIndex];
          p.x = e.pageX;
          p.y = e.pageY;
        }
      }

      if (_isDragging) {
        var touchesList = _getTouchPoints(e);

        if (!_direction && !_moved && !_isZooming) {
          if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
            // if main scroll position is shifted – direction is always horizontal
            _direction = 'h';
          } else {
            var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y); // check the direction of movement

            if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
              _direction = diff > 0 ? 'h' : 'v';
              _currentPoints = touchesList;
            }
          }
        } else {
          _currentPoints = touchesList;
        }
      }
    },
        // 
    _renderMovement = function () {
      if (!_currentPoints) {
        return;
      }

      var numPoints = _currentPoints.length;

      if (numPoints === 0) {
        return;
      }

      _equalizePoints(p, _currentPoints[0]);

      delta.x = p.x - _currPoint.x;
      delta.y = p.y - _currPoint.y;

      if (_isZooming && numPoints > 1) {
        // Handle behaviour for more than 1 point
        _currPoint.x = p.x;
        _currPoint.y = p.y; // check if one of two points changed

        if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
          return;
        }

        _equalizePoints(p2, _currentPoints[1]);

        if (!_zoomStarted) {
          _zoomStarted = true;

          _shout('zoomGestureStarted');
        } // Distance between two points


        var pointsDistance = _calculatePointsDistance(p, p2);

        var zoomLevel = _calculateZoomLevel(pointsDistance); // slightly over the of initial zoom level


        if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
          _wasOverInitialZoom = true;
        } // Apply the friction if zoom level is out of the bounds


        var zoomFriction = 1,
            minZoomLevel = _getMinZoomLevel(),
            maxZoomLevel = _getMaxZoomLevel();

        if (zoomLevel < minZoomLevel) {
          if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
            // fade out background if zooming out
            var minusDiff = minZoomLevel - zoomLevel;
            var percent = 1 - minusDiff / (minZoomLevel / 1.2);

            _applyBgOpacity(percent);

            _shout('onPinchClose', percent);

            _opacityChanged = true;
          } else {
            zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;

            if (zoomFriction > 1) {
              zoomFriction = 1;
            }

            zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
          }
        } else if (zoomLevel > maxZoomLevel) {
          // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
          zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);

          if (zoomFriction > 1) {
            zoomFriction = 1;
          }

          zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
        }

        if (zoomFriction < 0) {
          zoomFriction = 0;
        } // distance between touch points after friction is applied


        _currPointsDistance = pointsDistance; // _centerPoint - The point in the middle of two pointers

        _findCenterOfPoints(p, p2, _centerPoint); // paning with two pointers pressed


        _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
        _currPanDist.y += _centerPoint.y - _currCenterPoint.y;

        _equalizePoints(_currCenterPoint, _centerPoint);

        _panOffset.x = _calculatePanOffset('x', zoomLevel);
        _panOffset.y = _calculatePanOffset('y', zoomLevel);
        _isZoomingIn = zoomLevel > _currZoomLevel;
        _currZoomLevel = zoomLevel;

        _applyCurrentZoomPan();
      } else {
        // handle behaviour for one point (dragging or panning)
        if (!_direction) {
          return;
        }

        if (_isFirstMove) {
          _isFirstMove = false; // subtract drag distance that was used during the detection direction  

          if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
            delta.x -= _currentPoints[0].x - _startPoint.x;
          }

          if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
            delta.y -= _currentPoints[0].y - _startPoint.y;
          }
        }

        _currPoint.x = p.x;
        _currPoint.y = p.y; // do nothing if pointers position hasn't changed

        if (delta.x === 0 && delta.y === 0) {
          return;
        }

        if (_direction === 'v' && _options.closeOnVerticalDrag) {
          if (!_canPan()) {
            _currPanDist.y += delta.y;
            _panOffset.y += delta.y;

            var opacityRatio = _calculateVerticalDragOpacityRatio();

            _verticalDragInitiated = true;

            _shout('onVerticalDrag', opacityRatio);

            _applyBgOpacity(opacityRatio);

            _applyCurrentZoomPan();

            return;
          }
        }

        _pushPosPoint(_getCurrentTime(), p.x, p.y);

        _moved = true;
        _currPanBounds = self.currItem.bounds;

        var mainScrollChanged = _panOrMoveMainScroll('x', delta);

        if (!mainScrollChanged) {
          _panOrMoveMainScroll('y', delta);

          _roundPoint(_panOffset);

          _applyCurrentZoomPan();
        }
      }
    },
        // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
    _onDragRelease = function (e) {
      if (_features.isOldAndroid) {
        if (_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
          return;
        } // on Android (v4.1, 4.2, 4.3 & possibly older) 
        // ghost mousedown/up event isn't preventable via e.preventDefault,
        // which causes fake mousedown event
        // so we block mousedown/up for 600ms


        if (e.type.indexOf('touch') > -1) {
          clearTimeout(_oldAndroidTouchEndTimeout);
          _oldAndroidTouchEndTimeout = setTimeout(function () {
            _oldAndroidTouchEndTimeout = 0;
          }, 600);
        }
      }

      _shout('pointerUp');

      if (_preventDefaultEventBehaviour(e, false)) {
        e.preventDefault();
      }

      var releasePoint;

      if (_pointerEventEnabled) {
        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

        if (pointerIndex > -1) {
          releasePoint = _currPointers.splice(pointerIndex, 1)[0];

          if (navigator.msPointerEnabled) {
            var MSPOINTER_TYPES = {
              4: 'mouse',
              // event.MSPOINTER_TYPE_MOUSE
              2: 'touch',
              // event.MSPOINTER_TYPE_TOUCH 
              3: 'pen' // event.MSPOINTER_TYPE_PEN

            };
            releasePoint.type = MSPOINTER_TYPES[e.pointerType];

            if (!releasePoint.type) {
              releasePoint.type = e.pointerType || 'mouse';
            }
          } else {
            releasePoint.type = e.pointerType || 'mouse';
          }
        }
      }

      var touchList = _getTouchPoints(e),
          gestureType,
          numPoints = touchList.length;

      if (e.type === 'mouseup') {
        numPoints = 0;
      } // Do nothing if there were 3 touch points or more


      if (numPoints === 2) {
        _currentPoints = null;
        return true;
      } // if second pointer released


      if (numPoints === 1) {
        _equalizePoints(_startPoint, touchList[0]);
      } // pointer hasn't moved, send "tap release" point


      if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
        if (!releasePoint) {
          if (e.type === 'mouseup') {
            releasePoint = {
              x: e.pageX,
              y: e.pageY,
              type: 'mouse'
            };
          } else if (e.changedTouches && e.changedTouches[0]) {
            releasePoint = {
              x: e.changedTouches[0].pageX,
              y: e.changedTouches[0].pageY,
              type: 'touch'
            };
          }
        }

        _shout('touchRelease', e, releasePoint);
      } // Difference in time between releasing of two last touch points (zoom gesture)


      var releaseTimeDiff = -1; // Gesture completed, no pointers left

      if (numPoints === 0) {
        _isDragging = false;
        framework.unbind(window, _upMoveEvents, self);

        _stopDragUpdateLoop();

        if (_isZooming) {
          // Two points released at the same time
          releaseTimeDiff = 0;
        } else if (_lastReleaseTime !== -1) {
          releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
        }
      }

      _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

      if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
        gestureType = 'zoom';
      } else {
        gestureType = 'swipe';
      }

      if (_isZooming && numPoints < 2) {
        _isZooming = false; // Only second point released

        if (numPoints === 1) {
          gestureType = 'zoomPointerUp';
        }

        _shout('zoomGestureEnded');
      }

      _currentPoints = null;

      if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
        // nothing to animate
        return;
      }

      _stopAllAnimations();

      if (!_releaseAnimData) {
        _releaseAnimData = _initDragReleaseAnimationData();
      }

      _releaseAnimData.calculateSwipeSpeed('x');

      if (_verticalDragInitiated) {
        var opacityRatio = _calculateVerticalDragOpacityRatio();

        if (opacityRatio < _options.verticalDragRange) {
          self.close();
        } else {
          var initalPanY = _panOffset.y,
              initialBgOpacity = _bgOpacity;

          _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function (now) {
            _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

            _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);

            _applyCurrentZoomPan();
          });

          _shout('onVerticalDrag', 1);
        }

        return;
      } // main scroll 


      if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
        var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);

        if (itemChanged) {
          return;
        }

        gestureType = 'zoomPointerUp';
      } // prevent zoom/pan animation when main scroll animation runs


      if (_mainScrollAnimating) {
        return;
      } // Complete simple zoom gesture (reset zoom level if it's out of the bounds)  


      if (gestureType !== 'swipe') {
        _completeZoomGesture();

        return;
      } // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image


      if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
        _completePanGesture(_releaseAnimData);
      }
    },
        // Returns object with data about gesture
    // It's created only once and then reused
    _initDragReleaseAnimationData = function () {
      // temp local vars
      var lastFlickDuration, tempReleasePos; // s = this

      var s = {
        lastFlickOffset: {},
        lastFlickDist: {},
        lastFlickSpeed: {},
        slowDownRatio: {},
        slowDownRatioReverse: {},
        speedDecelerationRatio: {},
        speedDecelerationRatioAbs: {},
        distanceOffset: {},
        backAnimDestination: {},
        backAnimStarted: {},
        calculateSwipeSpeed: function (axis) {
          if (_posPoints.length > 1) {
            lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
            tempReleasePos = _posPoints[_posPoints.length - 2][axis];
          } else {
            lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration

            tempReleasePos = _startPoint[axis];
          }

          s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
          s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);

          if (s.lastFlickDist[axis] > 20) {
            s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
          } else {
            s.lastFlickSpeed[axis] = 0;
          }

          if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
            s.lastFlickSpeed[axis] = 0;
          }

          s.slowDownRatio[axis] = 0.95;
          s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
          s.speedDecelerationRatio[axis] = 1;
        },
        calculateOverBoundsAnimOffset: function (axis, speed) {
          if (!s.backAnimStarted[axis]) {
            if (_panOffset[axis] > _currPanBounds.min[axis]) {
              s.backAnimDestination[axis] = _currPanBounds.min[axis];
            } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
              s.backAnimDestination[axis] = _currPanBounds.max[axis];
            }

            if (s.backAnimDestination[axis] !== undefined) {
              s.slowDownRatio[axis] = 0.7;
              s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];

              if (s.speedDecelerationRatioAbs[axis] < 0.05) {
                s.lastFlickSpeed[axis] = 0;
                s.backAnimStarted[axis] = true;

                _animateProp('bounceZoomPan' + axis, _panOffset[axis], s.backAnimDestination[axis], speed || 300, framework.easing.sine.out, function (pos) {
                  _panOffset[axis] = pos;

                  _applyCurrentZoomPan();
                });
              }
            }
          }
        },
        // Reduces the speed by slowDownRatio (per 10ms)
        calculateAnimOffset: function (axis) {
          if (!s.backAnimStarted[axis]) {
            s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + s.slowDownRatioReverse[axis] - s.slowDownRatioReverse[axis] * s.timeDiff / 10);
            s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
            s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
            _panOffset[axis] += s.distanceOffset[axis];
          }
        },
        panAnimLoop: function () {
          if (_animations.zoomPan) {
            _animations.zoomPan.raf = _requestAF(s.panAnimLoop);
            s.now = _getCurrentTime();
            s.timeDiff = s.now - s.lastNow;
            s.lastNow = s.now;
            s.calculateAnimOffset('x');
            s.calculateAnimOffset('y');

            _applyCurrentZoomPan();

            s.calculateOverBoundsAnimOffset('x');
            s.calculateOverBoundsAnimOffset('y');

            if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
              // round pan position
              _panOffset.x = Math.round(_panOffset.x);
              _panOffset.y = Math.round(_panOffset.y);

              _applyCurrentZoomPan();

              _stopAnimation('zoomPan');

              return;
            }
          }
        }
      };
      return s;
    },
        _completePanGesture = function (animData) {
      // calculate swipe speed for Y axis (paanning)
      animData.calculateSwipeSpeed('y');
      _currPanBounds = self.currItem.bounds;
      animData.backAnimDestination = {};
      animData.backAnimStarted = {}; // Avoid acceleration animation if speed is too low

      if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
        animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0; // Run pan drag release animation. E.g. if you drag image and release finger without momentum.

        animData.calculateOverBoundsAnimOffset('x');
        animData.calculateOverBoundsAnimOffset('y');
        return true;
      } // Animation loop that controls the acceleration after pan gesture ends


      _registerStartAnimation('zoomPan');

      animData.lastNow = _getCurrentTime();
      animData.panAnimLoop();
    },
        _finishSwipeMainScrollGesture = function (gestureType, _releaseAnimData) {
      var itemChanged;

      if (!_mainScrollAnimating) {
        _currZoomedItemIndex = _currentItemIndex;
      }

      var itemsDiff;

      if (gestureType === 'swipe') {
        var totalShiftDist = _currPoint.x - _startPoint.x,
            isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10; // if container is shifted for more than MIN_SWIPE_DISTANCE, 
        // and last flick gesture was in right direction

        if (totalShiftDist > MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
          // go to prev item
          itemsDiff = -1;
        } else if (totalShiftDist < -MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
          // go to next item
          itemsDiff = 1;
        }
      }

      var nextCircle;

      if (itemsDiff) {
        _currentItemIndex += itemsDiff;

        if (_currentItemIndex < 0) {
          _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
          nextCircle = true;
        } else if (_currentItemIndex >= _getNumItems()) {
          _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
          nextCircle = true;
        }

        if (!nextCircle || _options.loop) {
          _indexDiff += itemsDiff;
          _currPositionIndex -= itemsDiff;
          itemChanged = true;
        }
      }

      var animateToX = _slideSize.x * _currPositionIndex;
      var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
      var finishAnimDuration;

      if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
        // "return to current" duration, e.g. when dragging from slide 0 to -1
        finishAnimDuration = 333;
      } else {
        finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 333;
        finishAnimDuration = Math.min(finishAnimDuration, 400);
        finishAnimDuration = Math.max(finishAnimDuration, 250);
      }

      if (_currZoomedItemIndex === _currentItemIndex) {
        itemChanged = false;
      }

      _mainScrollAnimating = true;

      _shout('mainScrollAnimStart');

      _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, _moveMainScroll, function () {
        _stopAllAnimations();

        _mainScrollAnimating = false;
        _currZoomedItemIndex = -1;

        if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
          self.updateCurrItem();
        }

        _shout('mainScrollAnimComplete');
      });

      if (itemChanged) {
        self.updateCurrItem(true);
      }

      return itemChanged;
    },
        _calculateZoomLevel = function (touchesDistance) {
      return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
    },
        // Resets zoom if it's out of bounds
    _completeZoomGesture = function () {
      var destZoomLevel = _currZoomLevel,
          minZoomLevel = _getMinZoomLevel(),
          maxZoomLevel = _getMaxZoomLevel();

      if (_currZoomLevel < minZoomLevel) {
        destZoomLevel = minZoomLevel;
      } else if (_currZoomLevel > maxZoomLevel) {
        destZoomLevel = maxZoomLevel;
      }

      var destOpacity = 1,
          onUpdate,
          initialOpacity = _bgOpacity;

      if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
        //_closedByScroll = true;
        self.close();
        return true;
      }

      if (_opacityChanged) {
        onUpdate = function (now) {
          _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
        };
      }

      self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
      return true;
    };

    _registerModule('Gestures', {
      publicMethods: {
        initGestures: function () {
          // helper function that builds touch/pointer/mouse events
          var addEventNames = function (pref, down, move, up, cancel) {
            _dragStartEvent = pref + down;
            _dragMoveEvent = pref + move;
            _dragEndEvent = pref + up;

            if (cancel) {
              _dragCancelEvent = pref + cancel;
            } else {
              _dragCancelEvent = '';
            }
          };

          _pointerEventEnabled = _features.pointerEvent;

          if (_pointerEventEnabled && _features.touch) {
            // we don't need touch events, if browser supports pointer events
            _features.touch = false;
          }

          if (_pointerEventEnabled) {
            if (navigator.msPointerEnabled) {
              // IE10 pointer events are case-sensitive
              addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
            } else {
              addEventNames('pointer', 'down', 'move', 'up', 'cancel');
            }
          } else if (_features.touch) {
            addEventNames('touch', 'start', 'move', 'end', 'cancel');
            _likelyTouchDevice = true;
          } else {
            addEventNames('mouse', 'down', 'move', 'up');
          }

          _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent + ' ' + _dragCancelEvent;
          _downEvents = _dragStartEvent;

          if (_pointerEventEnabled && !_likelyTouchDevice) {
            _likelyTouchDevice = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1;
          } // make variable public


          self.likelyTouchDevice = _likelyTouchDevice;
          _globalEventHandlers[_dragStartEvent] = _onDragStart;
          _globalEventHandlers[_dragMoveEvent] = _onDragMove;
          _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

          if (_dragCancelEvent) {
            _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
          } // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.


          if (_features.touch) {
            _downEvents += ' mousedown';
            _upMoveEvents += ' mousemove mouseup';
            _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
            _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
            _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
          }

          if (!_likelyTouchDevice) {
            // don't allow pan to next slide from zoomed state on Desktop
            _options.allowPanToNext = false;
          }
        }
      }
    });
    /*>>gestures*/

    /*>>show-hide-transition*/

    /**
     * show-hide-transition.js:
     *
     * Manages initial opening or closing transition.
     *
     * If you're not planning to use transition for gallery at all,
     * you may set options hideAnimationDuration and showAnimationDuration to 0,
     * and just delete startAnimation function.
     * 
     */


    var _showOrHideTimeout,
        _showOrHide = function (item, img, out, completeFn) {
      if (_showOrHideTimeout) {
        clearTimeout(_showOrHideTimeout);
      }

      _initialZoomRunning = true;
      _initialContentSet = true; // dimensions of small thumbnail {x:,y:,w:}.
      // Height is optional, as calculated based on large image.

      var thumbBounds;

      if (item.initialLayout) {
        thumbBounds = item.initialLayout;
        item.initialLayout = null;
      } else {
        thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
      }

      var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

      var onComplete = function () {
        _stopAnimation('initialZoom');

        if (!out) {
          _applyBgOpacity(1);

          if (img) {
            img.style.display = 'block';
          }

          framework.addClass(template, 'pswp--animated-in');

          _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
        } else {
          self.template.removeAttribute('style');
          self.bg.removeAttribute('style');
        }

        if (completeFn) {
          completeFn();
        }

        _initialZoomRunning = false;
      }; // if bounds aren't provided, just open gallery without animation


      if (!duration || !thumbBounds || thumbBounds.x === undefined) {
        _shout('initialZoom' + (out ? 'Out' : 'In'));

        _currZoomLevel = item.initialZoomLevel;

        _equalizePoints(_panOffset, item.initialPosition);

        _applyCurrentZoomPan();

        template.style.opacity = out ? 0 : 1;

        _applyBgOpacity(1);

        if (duration) {
          setTimeout(function () {
            onComplete();
          }, duration);
        } else {
          onComplete();
        }

        return;
      }

      var startAnimation = function () {
        var closeWithRaf = _closedByScroll,
            fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity; // apply hw-acceleration to image

        if (item.miniImg) {
          item.miniImg.style.webkitBackfaceVisibility = 'hidden';
        }

        if (!out) {
          _currZoomLevel = thumbBounds.w / item.w;
          _panOffset.x = thumbBounds.x;
          _panOffset.y = thumbBounds.y - _initalWindowScrollY;
          self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;

          _applyCurrentZoomPan();
        }

        _registerStartAnimation('initialZoom');

        if (out && !closeWithRaf) {
          framework.removeClass(template, 'pswp--animated-in');
        }

        if (fadeEverything) {
          if (out) {
            framework[(closeWithRaf ? 'remove' : 'add') + 'Class'](template, 'pswp--animate_opacity');
          } else {
            setTimeout(function () {
              framework.addClass(template, 'pswp--animate_opacity');
            }, 30);
          }
        }

        _showOrHideTimeout = setTimeout(function () {
          _shout('initialZoom' + (out ? 'Out' : 'In'));

          if (!out) {
            // "in" animation always uses CSS transitions (instead of rAF).
            // CSS transition work faster here, 
            // as developer may also want to animate other things, 
            // like ui on top of sliding area, which can be animated just via CSS
            _currZoomLevel = item.initialZoomLevel;

            _equalizePoints(_panOffset, item.initialPosition);

            _applyCurrentZoomPan();

            _applyBgOpacity(1);

            if (fadeEverything) {
              template.style.opacity = 1;
            } else {
              _applyBgOpacity(1);
            }

            _showOrHideTimeout = setTimeout(onComplete, duration + 20);
          } else {
            // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
            var destZoomLevel = thumbBounds.w / item.w,
                initialPanOffset = {
              x: _panOffset.x,
              y: _panOffset.y
            },
                initialZoomLevel = _currZoomLevel,
                initalBgOpacity = _bgOpacity,
                onUpdate = function (now) {
              if (now === 1) {
                _currZoomLevel = destZoomLevel;
                _panOffset.x = thumbBounds.x;
                _panOffset.y = thumbBounds.y - _currentWindowScrollY;
              } else {
                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
              }

              _applyCurrentZoomPan();

              if (fadeEverything) {
                template.style.opacity = 1 - now;
              } else {
                _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
              }
            };

            if (closeWithRaf) {
              _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
            } else {
              onUpdate(1);
              _showOrHideTimeout = setTimeout(onComplete, duration + 20);
            }
          }
        }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
        // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
        // Which avoids lag at the beginning of scale transition.
      };

      startAnimation();
    };
    /*>>show-hide-transition*/

    /*>>items-controller*/

    /**
    *
    * Controller manages gallery items, their dimensions, and their content.
    * 
    */


    var _items,
        _tempPanAreaSize = {},
        _imagesToAppendPool = [],
        _initialContentSet,
        _initialZoomRunning,
        _controllerDefaultOptions = {
      index: 0,
      errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
      forceProgressiveLoading: false,
      // TODO
      preload: [1, 1],
      getNumItemsFn: function () {
        return _items.length;
      }
    };

    var _getItemAt,
        _getNumItems,
        _initialIsLoop,
        _getZeroBounds = function () {
      return {
        center: {
          x: 0,
          y: 0
        },
        max: {
          x: 0,
          y: 0
        },
        min: {
          x: 0,
          y: 0
        }
      };
    },
        _calculateSingleItemPanBounds = function (item, realPanElementW, realPanElementH) {
      var bounds = item.bounds; // position of element when it's centered

      bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
      bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top; // maximum pan position

      bounds.max.x = realPanElementW > _tempPanAreaSize.x ? Math.round(_tempPanAreaSize.x - realPanElementW) : bounds.center.x;
      bounds.max.y = realPanElementH > _tempPanAreaSize.y ? Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : bounds.center.y; // minimum pan position

      bounds.min.x = realPanElementW > _tempPanAreaSize.x ? 0 : bounds.center.x;
      bounds.min.y = realPanElementH > _tempPanAreaSize.y ? item.vGap.top : bounds.center.y;
    },
        _calculateItemSize = function (item, viewportSize, zoomLevel) {
      if (item.src && !item.loadError) {
        var isInitial = !zoomLevel;

        if (isInitial) {
          if (!item.vGap) {
            item.vGap = {
              top: 0,
              bottom: 0
            };
          } // allows overriding vertical margin for individual items


          _shout('parseVerticalMargin', item);
        }

        _tempPanAreaSize.x = viewportSize.x;
        _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

        if (isInitial) {
          var hRatio = _tempPanAreaSize.x / item.w;
          var vRatio = _tempPanAreaSize.y / item.h;
          item.fitRatio = hRatio < vRatio ? hRatio : vRatio; //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

          var scaleMode = _options.scaleMode;

          if (scaleMode === 'orig') {
            zoomLevel = 1;
          } else if (scaleMode === 'fit') {
            zoomLevel = item.fitRatio;
          }

          if (zoomLevel > 1) {
            zoomLevel = 1;
          }

          item.initialZoomLevel = zoomLevel;

          if (!item.bounds) {
            // reuse bounds object
            item.bounds = _getZeroBounds();
          }
        }

        if (!zoomLevel) {
          return;
        }

        _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

        if (isInitial && zoomLevel === item.initialZoomLevel) {
          item.initialPosition = item.bounds.center;
        }

        return item.bounds;
      } else {
        item.w = item.h = 0;
        item.initialZoomLevel = item.fitRatio = 1;
        item.bounds = _getZeroBounds();
        item.initialPosition = item.bounds.center; // if it's not image, we return zero bounds (content is not zoomable)

        return item.bounds;
      }
    },
        _appendImage = function (index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
      if (item.loadError) {
        return;
      }

      if (img) {
        item.imageAppended = true;

        _setImageSize(item, img, item === self.currItem && _renderMaxResolution);

        baseDiv.appendChild(img);

        if (keepPlaceholder) {
          setTimeout(function () {
            if (item && item.loaded && item.placeholder) {
              item.placeholder.style.display = 'none';
              item.placeholder = null;
            }
          }, 500);
        }
      }
    },
        _preloadImage = function (item) {
      item.loading = true;
      item.loaded = false;
      var img = item.img = framework.createEl('pswp__img', 'img');

      var onComplete = function () {
        item.loading = false;
        item.loaded = true;

        if (item.loadComplete) {
          item.loadComplete(item);
        } else {
          item.img = null; // no need to store image object
        }

        img.onload = img.onerror = null;
        img = null;
      };

      img.onload = onComplete;

      img.onerror = function () {
        item.loadError = true;
        onComplete();
      };

      img.src = item.src; // + '?a=' + Math.random();

      return img;
    },
        _checkForError = function (item, cleanUp) {
      if (item.src && item.loadError && item.container) {
        if (cleanUp) {
          item.container.innerHTML = '';
        }

        item.container.innerHTML = _options.errorMsg.replace('%url%', item.src);
        return true;
      }
    },
        _setImageSize = function (item, img, maxRes) {
      if (!item.src) {
        return;
      }

      if (!img) {
        img = item.container.lastChild;
      }

      var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
          h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

      if (item.placeholder && !item.loaded) {
        item.placeholder.style.width = w + 'px';
        item.placeholder.style.height = h + 'px';
      }

      img.style.width = w + 'px';
      img.style.height = h + 'px';
    },
        _appendImagesPool = function () {
      if (_imagesToAppendPool.length) {
        var poolItem;

        for (var i = 0; i < _imagesToAppendPool.length; i++) {
          poolItem = _imagesToAppendPool[i];

          if (poolItem.holder.index === poolItem.index) {
            _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
          }
        }

        _imagesToAppendPool = [];
      }
    };

    _registerModule('Controller', {
      publicMethods: {
        lazyLoadItem: function (index) {
          index = _getLoopedId(index);

          var item = _getItemAt(index);

          if (!item || (item.loaded || item.loading) && !_itemsNeedUpdate) {
            return;
          }

          _shout('gettingData', index, item);

          if (!item.src) {
            return;
          }

          _preloadImage(item);
        },
        initController: function () {
          framework.extend(_options, _controllerDefaultOptions, true);
          self.items = _items = items;
          _getItemAt = self.getItemAt;
          _getNumItems = _options.getNumItemsFn; //self.getNumItems;

          _initialIsLoop = _options.loop;

          if (_getNumItems() < 3) {
            _options.loop = false; // disable loop if less then 3 items
          }

          _listen('beforeChange', function (diff) {
            var p = _options.preload,
                isNext = diff === null ? true : diff >= 0,
                preloadBefore = Math.min(p[0], _getNumItems()),
                preloadAfter = Math.min(p[1], _getNumItems()),
                i;

            for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
              self.lazyLoadItem(_currentItemIndex + i);
            }

            for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
              self.lazyLoadItem(_currentItemIndex - i);
            }
          });

          _listen('initialLayout', function () {
            self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
          });

          _listen('mainScrollAnimComplete', _appendImagesPool);

          _listen('initialZoomInEnd', _appendImagesPool);

          _listen('destroy', function () {
            var item;

            for (var i = 0; i < _items.length; i++) {
              item = _items[i]; // remove reference to DOM elements, for GC

              if (item.container) {
                item.container = null;
              }

              if (item.placeholder) {
                item.placeholder = null;
              }

              if (item.img) {
                item.img = null;
              }

              if (item.preloader) {
                item.preloader = null;
              }

              if (item.loadError) {
                item.loaded = item.loadError = false;
              }
            }

            _imagesToAppendPool = null;
          });
        },
        getItemAt: function (index) {
          if (index >= 0) {
            return _items[index] !== undefined ? _items[index] : false;
          }

          return false;
        },
        allowProgressiveImg: function () {
          // 1. Progressive image loading isn't working on webkit/blink 
          //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
          //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
          //    
          // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
          //    That's why it's disabled on touch devices (mainly because of swipe transition)
          //    
          // 3. Progressive image loading sometimes doesn't work in IE (up to 11).
          // Don't allow progressive loading on non-large touch devices
          return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
        },
        setContent: function (holder, index) {
          if (_options.loop) {
            index = _getLoopedId(index);
          }

          var prevItem = self.getItemAt(holder.index);

          if (prevItem) {
            prevItem.container = null;
          }

          var item = self.getItemAt(index),
              img;

          if (!item) {
            holder.el.innerHTML = '';
            return;
          } // allow to override data


          _shout('gettingData', index, item);

          holder.index = index;
          holder.item = item; // base container DIV is created only once for each of 3 holders

          var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');

          if (!item.src && item.html) {
            if (item.html.tagName) {
              baseDiv.appendChild(item.html);
            } else {
              baseDiv.innerHTML = item.html;
            }
          }

          _checkForError(item);

          _calculateItemSize(item, _viewportSize);

          if (item.src && !item.loadError && !item.loaded) {
            item.loadComplete = function (item) {
              // gallery closed before image finished loading
              if (!_isOpen) {
                return;
              } // check if holder hasn't changed while image was loading


              if (holder && holder.index === index) {
                if (_checkForError(item, true)) {
                  item.loadComplete = item.img = null;

                  _calculateItemSize(item, _viewportSize);

                  _applyZoomPanToItem(item);

                  if (holder.index === _currentItemIndex) {
                    // recalculate dimensions
                    self.updateCurrZoomItem();
                  }

                  return;
                }

                if (!item.imageAppended) {
                  if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                    _imagesToAppendPool.push({
                      item: item,
                      baseDiv: baseDiv,
                      img: item.img,
                      index: index,
                      holder: holder,
                      clearPlaceholder: true
                    });
                  } else {
                    _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                  }
                } else {
                  // remove preloader & mini-img
                  if (!_initialZoomRunning && item.placeholder) {
                    item.placeholder.style.display = 'none';
                    item.placeholder = null;
                  }
                }
              }

              item.loadComplete = null;
              item.img = null; // no need to store image element after it's added

              _shout('imageLoadComplete', index, item);
            };

            if (framework.features.transform) {
              var placeholderClassName = 'pswp__img pswp__img--placeholder';
              placeholderClassName += item.msrc ? '' : ' pswp__img--placeholder--blank';
              var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');

              if (item.msrc) {
                placeholder.src = item.msrc;
              }

              _setImageSize(item, placeholder);

              baseDiv.appendChild(placeholder);
              item.placeholder = placeholder;
            }

            if (!item.loading) {
              _preloadImage(item);
            }

            if (self.allowProgressiveImg()) {
              // just append image
              if (!_initialContentSet && _features.transform) {
                _imagesToAppendPool.push({
                  item: item,
                  baseDiv: baseDiv,
                  img: item.img,
                  index: index,
                  holder: holder
                });
              } else {
                _appendImage(index, item, baseDiv, item.img, true, true);
              }
            }
          } else if (item.src && !item.loadError) {
            // image object is created every time, due to bugs of image loading & delay when switching images
            img = framework.createEl('pswp__img', 'img');
            img.style.opacity = 1;
            img.src = item.src;

            _setImageSize(item, img);

            _appendImage(index, item, baseDiv, img, true);
          }

          if (!_initialContentSet && index === _currentItemIndex) {
            _currZoomElementStyle = baseDiv.style;

            _showOrHide(item, img || item.img);
          } else {
            _applyZoomPanToItem(item);
          }

          holder.el.innerHTML = '';
          holder.el.appendChild(baseDiv);
        },
        cleanSlide: function (item) {
          if (item.img) {
            item.img.onload = item.img.onerror = null;
          }

          item.loaded = item.loading = item.img = item.imageAppended = false;
        }
      }
    });
    /*>>items-controller*/

    /*>>tap*/

    /**
     * tap.js:
     *
     * Displatches tap and double-tap events.
     * 
     */


    var tapTimer,
        tapReleasePoint = {},
        _dispatchTapEvent = function (origEvent, releasePoint, pointerType) {
      var e = document.createEvent('CustomEvent'),
          eDetail = {
        origEvent: origEvent,
        target: origEvent.target,
        releasePoint: releasePoint,
        pointerType: pointerType || 'touch'
      };
      e.initCustomEvent('pswpTap', true, true, eDetail);
      origEvent.target.dispatchEvent(e);
    };

    _registerModule('Tap', {
      publicMethods: {
        initTap: function () {
          _listen('firstTouchStart', self.onTapStart);

          _listen('touchRelease', self.onTapRelease);

          _listen('destroy', function () {
            tapReleasePoint = {};
            tapTimer = null;
          });
        },
        onTapStart: function (touchList) {
          if (touchList.length > 1) {
            clearTimeout(tapTimer);
            tapTimer = null;
          }
        },
        onTapRelease: function (e, releasePoint) {
          if (!releasePoint) {
            return;
          }

          if (!_moved && !_isMultitouch && !_numAnimations) {
            var p0 = releasePoint;

            if (tapTimer) {
              clearTimeout(tapTimer);
              tapTimer = null; // Check if taped on the same place

              if (_isNearbyPoints(p0, tapReleasePoint)) {
                _shout('doubleTap', p0);

                return;
              }
            }

            if (releasePoint.type === 'mouse') {
              _dispatchTapEvent(e, releasePoint, 'mouse');

              return;
            }

            var clickedTagName = e.target.tagName.toUpperCase(); // avoid double tap delay on buttons and elements that have class pswp__single-tap

            if (clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap')) {
              _dispatchTapEvent(e, releasePoint);

              return;
            }

            _equalizePoints(tapReleasePoint, p0);

            tapTimer = setTimeout(function () {
              _dispatchTapEvent(e, releasePoint);

              tapTimer = null;
            }, 300);
          }
        }
      }
    });
    /*>>tap*/

    /*>>desktop-zoom*/

    /**
     *
     * desktop-zoom.js:
     *
     * - Binds mousewheel event for paning zoomed image.
     * - Manages "dragging", "zoomed-in", "zoom-out" classes.
     *   (which are used for cursors and zoom icon)
     * - Adds toggleDesktopZoom function.
     * 
     */


    var _wheelDelta;

    _registerModule('DesktopZoom', {
      publicMethods: {
        initDesktopZoom: function () {
          if (_oldIE) {
            // no zoom for old IE (<=8)
            return;
          }

          if (_likelyTouchDevice) {
            // if detected hardware touch support, we wait until mouse is used,
            // and only then apply desktop-zoom features
            _listen('mouseUsed', function () {
              self.setupDesktopZoom();
            });
          } else {
            self.setupDesktopZoom(true);
          }
        },
        setupDesktopZoom: function (onInit) {
          _wheelDelta = {};
          var events = 'wheel mousewheel DOMMouseScroll';

          _listen('bindEvents', function () {
            framework.bind(template, events, self.handleMouseWheel);
          });

          _listen('unbindEvents', function () {
            if (_wheelDelta) {
              framework.unbind(template, events, self.handleMouseWheel);
            }
          });

          self.mouseZoomedIn = false;

          var hasDraggingClass,
              updateZoomable = function () {
            if (self.mouseZoomedIn) {
              framework.removeClass(template, 'pswp--zoomed-in');
              self.mouseZoomedIn = false;
            }

            if (_currZoomLevel < 1) {
              framework.addClass(template, 'pswp--zoom-allowed');
            } else {
              framework.removeClass(template, 'pswp--zoom-allowed');
            }

            removeDraggingClass();
          },
              removeDraggingClass = function () {
            if (hasDraggingClass) {
              framework.removeClass(template, 'pswp--dragging');
              hasDraggingClass = false;
            }
          };

          _listen('resize', updateZoomable);

          _listen('afterChange', updateZoomable);

          _listen('pointerDown', function () {
            if (self.mouseZoomedIn) {
              hasDraggingClass = true;
              framework.addClass(template, 'pswp--dragging');
            }
          });

          _listen('pointerUp', removeDraggingClass);

          if (!onInit) {
            updateZoomable();
          }
        },
        handleMouseWheel: function (e) {
          if (_currZoomLevel <= self.currItem.fitRatio) {
            if (_options.modal) {
              if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                e.preventDefault();
              } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                // close PhotoSwipe
                // if browser supports transforms & scroll changed enough
                _closedByScroll = true;
                self.close();
              }
            }

            return true;
          } // allow just one event to fire


          e.stopPropagation(); // https://developer.mozilla.org/en-US/docs/Web/Events/wheel

          _wheelDelta.x = 0;

          if ('deltaX' in e) {
            if (e.deltaMode === 1
            /* DOM_DELTA_LINE */
            ) {
                // 18 - average line height
                _wheelDelta.x = e.deltaX * 18;
                _wheelDelta.y = e.deltaY * 18;
              } else {
              _wheelDelta.x = e.deltaX;
              _wheelDelta.y = e.deltaY;
            }
          } else if ('wheelDelta' in e) {
            if (e.wheelDeltaX) {
              _wheelDelta.x = -0.16 * e.wheelDeltaX;
            }

            if (e.wheelDeltaY) {
              _wheelDelta.y = -0.16 * e.wheelDeltaY;
            } else {
              _wheelDelta.y = -0.16 * e.wheelDelta;
            }
          } else if ('detail' in e) {
            _wheelDelta.y = e.detail;
          } else {
            return;
          }

          _calculatePanBounds(_currZoomLevel, true);

          var newPanX = _panOffset.x - _wheelDelta.x,
              newPanY = _panOffset.y - _wheelDelta.y; // only prevent scrolling in nonmodal mode when not at edges

          if (_options.modal || newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x && newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y) {
            e.preventDefault();
          } // TODO: use rAF instead of mousewheel?


          self.panTo(newPanX, newPanY);
        },
        toggleDesktopZoom: function (centerPoint) {
          centerPoint = centerPoint || {
            x: _viewportSize.x / 2 + _offset.x,
            y: _viewportSize.y / 2 + _offset.y
          };

          var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);

          var zoomOut = _currZoomLevel === doubleTapZoomLevel;
          self.mouseZoomedIn = !zoomOut;
          self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
          framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
        }
      }
    });
    /*>>desktop-zoom*/

    /*>>history*/

    /**
     *
     * history.js:
     *
     * - Back button to close gallery.
     * 
     * - Unique URL for each slide: example.com/&pid=1&gid=3
     *   (where PID is picture index, and GID and gallery index)
     *   
     * - Switch URL when slides change.
     * 
     */


    var _historyDefaultOptions = {
      history: true,
      galleryUID: 1
    };

    var _historyUpdateTimeout,
        _hashChangeTimeout,
        _hashAnimCheckTimeout,
        _hashChangedByScript,
        _hashChangedByHistory,
        _hashReseted,
        _initialHash,
        _historyChanged,
        _closedFromURL,
        _urlChangedOnce,
        _windowLoc,
        _supportsPushState,
        _getHash = function () {
      return _windowLoc.hash.substring(1);
    },
        _cleanHistoryTimeouts = function () {
      if (_historyUpdateTimeout) {
        clearTimeout(_historyUpdateTimeout);
      }

      if (_hashAnimCheckTimeout) {
        clearTimeout(_hashAnimCheckTimeout);
      }
    },
        // pid - Picture index
    // gid - Gallery index
    _parseItemIndexFromURL = function () {
      var hash = _getHash(),
          params = {};

      if (hash.length < 5) {
        // pid=1
        return params;
      }

      var i,
          vars = hash.split('&');

      for (i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }

        var pair = vars[i].split('=');

        if (pair.length < 2) {
          continue;
        }

        params[pair[0]] = pair[1];
      }

      if (_options.galleryPIDs) {
        // detect custom pid in hash and search for it among the items collection
        var searchfor = params.pid;
        params.pid = 0; // if custom pid cannot be found, fallback to the first item

        for (i = 0; i < _items.length; i++) {
          if (_items[i].pid === searchfor) {
            params.pid = i;
            break;
          }
        }
      } else {
        params.pid = parseInt(params.pid, 10) - 1;
      }

      if (params.pid < 0) {
        params.pid = 0;
      }

      return params;
    },
        _updateHash = function () {
      if (_hashAnimCheckTimeout) {
        clearTimeout(_hashAnimCheckTimeout);
      }

      if (_numAnimations || _isDragging) {
        // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
        // that's why we update hash only when no animations running
        _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
        return;
      }

      if (_hashChangedByScript) {
        clearTimeout(_hashChangeTimeout);
      } else {
        _hashChangedByScript = true;
      }

      var pid = _currentItemIndex + 1;

      var item = _getItemAt(_currentItemIndex);

      if (item.hasOwnProperty('pid')) {
        // carry forward any custom pid assigned to the item
        pid = item.pid;
      }

      var newHash = _initialHash + '&' + 'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

      if (!_historyChanged) {
        if (_windowLoc.hash.indexOf(newHash) === -1) {
          _urlChangedOnce = true;
        } // first time - add new hisory record, then just replace

      }

      var newURL = _windowLoc.href.split('#')[0] + '#' + newHash;

      if (_supportsPushState) {
        if ('#' + newHash !== window.location.hash) {
          history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
        }
      } else {
        if (_historyChanged) {
          _windowLoc.replace(newURL);
        } else {
          _windowLoc.hash = newHash;
        }
      }

      _historyChanged = true;
      _hashChangeTimeout = setTimeout(function () {
        _hashChangedByScript = false;
      }, 60);
    };

    _registerModule('History', {
      publicMethods: {
        initHistory: function () {
          framework.extend(_options, _historyDefaultOptions, true);

          if (!_options.history) {
            return;
          }

          _windowLoc = window.location;
          _urlChangedOnce = false;
          _closedFromURL = false;
          _historyChanged = false;
          _initialHash = _getHash();
          _supportsPushState = 'pushState' in history;

          if (_initialHash.indexOf('gid=') > -1) {
            _initialHash = _initialHash.split('&gid=')[0];
            _initialHash = _initialHash.split('?gid=')[0];
          }

          _listen('afterChange', self.updateURL);

          _listen('unbindEvents', function () {
            framework.unbind(window, 'hashchange', self.onHashChange);
          });

          var returnToOriginal = function () {
            _hashReseted = true;

            if (!_closedFromURL) {
              if (_urlChangedOnce) {
                history.back();
              } else {
                if (_initialHash) {
                  _windowLoc.hash = _initialHash;
                } else {
                  if (_supportsPushState) {
                    // remove hash from url without refreshing it or scrolling to top
                    history.pushState('', document.title, _windowLoc.pathname + _windowLoc.search);
                  } else {
                    _windowLoc.hash = '';
                  }
                }
              }
            }

            _cleanHistoryTimeouts();
          };

          _listen('unbindEvents', function () {
            if (_closedByScroll) {
              // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
              // this is done to keep the scroll position
              returnToOriginal();
            }
          });

          _listen('destroy', function () {
            if (!_hashReseted) {
              returnToOriginal();
            }
          });

          _listen('firstUpdate', function () {
            _currentItemIndex = _parseItemIndexFromURL().pid;
          });

          var index = _initialHash.indexOf('pid=');

          if (index > -1) {
            _initialHash = _initialHash.substring(0, index);

            if (_initialHash.slice(-1) === '&') {
              _initialHash = _initialHash.slice(0, -1);
            }
          }

          setTimeout(function () {
            if (_isOpen) {
              // hasn't destroyed yet
              framework.bind(window, 'hashchange', self.onHashChange);
            }
          }, 40);
        },
        onHashChange: function () {
          if (_getHash() === _initialHash) {
            _closedFromURL = true;
            self.close();
            return;
          }

          if (!_hashChangedByScript) {
            _hashChangedByHistory = true;
            self.goTo(_parseItemIndexFromURL().pid);
            _hashChangedByHistory = false;
          }
        },
        updateURL: function () {
          // Delay the update of URL, to avoid lag during transition, 
          // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
          _cleanHistoryTimeouts();

          if (_hashChangedByHistory) {
            return;
          }

          if (!_historyChanged) {
            _updateHash(); // first time

          } else {
            _historyUpdateTimeout = setTimeout(_updateHash, 800);
          }
        }
      }
    });
    /*>>history*/


    framework.extend(self, publicMethods);
  };

  return PhotoSwipe;
});
},{}],"../node_modules/photoswipe/dist/photoswipe-ui-default.js":[function(require,module,exports) {
var define;
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */

/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.PhotoSwipeUI_Default = factory();
  }
})(this, function () {
  'use strict';

  var PhotoSwipeUI_Default = function (pswp, framework) {
    var ui = this;

    var _overlayUIUpdated = false,
        _controlsVisible = true,
        _fullscrenAPI,
        _controls,
        _captionContainer,
        _fakeCaptionContainer,
        _indexIndicator,
        _shareButton,
        _shareModal,
        _shareModalHidden = true,
        _initalCloseOnScrollValue,
        _isIdle,
        _listen,
        _loadingIndicator,
        _loadingIndicatorHidden,
        _loadingIndicatorTimeout,
        _galleryHasOneSlide,
        _options,
        _defaultUIOptions = {
      barsSize: {
        top: 44,
        bottom: 'auto'
      },
      closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
      timeToIdle: 4000,
      timeToIdleOutside: 1000,
      loadingIndicatorDelay: 1000,
      // 2s
      addCaptionHTMLFn: function (item, captionEl
      /*, isFake */
      ) {
        if (!item.title) {
          captionEl.children[0].innerHTML = '';
          return false;
        }

        captionEl.children[0].innerHTML = item.title;
        return true;
      },
      closeEl: true,
      captionEl: true,
      fullscreenEl: true,
      zoomEl: true,
      shareEl: true,
      counterEl: true,
      arrowEl: true,
      preloaderEl: true,
      tapToClose: false,
      tapToToggleControls: true,
      clickToCloseNonZoomable: true,
      shareButtons: [{
        id: 'facebook',
        label: 'Share on Facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
      }, {
        id: 'twitter',
        label: 'Tweet',
        url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
      }, {
        id: 'pinterest',
        label: 'Pin it',
        url: 'http://www.pinterest.com/pin/create/button/' + '?url={{url}}&media={{image_url}}&description={{text}}'
      }, {
        id: 'download',
        label: 'Download image',
        url: '{{raw_image_url}}',
        download: true
      }],
      getImageURLForShare: function ()
      /* shareButtonData */
      {
        return pswp.currItem.src || '';
      },
      getPageURLForShare: function ()
      /* shareButtonData */
      {
        return window.location.href;
      },
      getTextForShare: function ()
      /* shareButtonData */
      {
        return pswp.currItem.title || '';
      },
      indexIndicatorSep: ' / ',
      fitControlsWidth: 1200
    },
        _blockControlsTap,
        _blockControlsTapTimeout;

    var _onControlsTap = function (e) {
      if (_blockControlsTap) {
        return true;
      }

      e = e || window.event;

      if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
        // reset idle timer
        _onIdleMouseMove();
      }

      var target = e.target || e.srcElement,
          uiElement,
          clickedClass = target.getAttribute('class') || '',
          found;

      for (var i = 0; i < _uiElements.length; i++) {
        uiElement = _uiElements[i];

        if (uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name) > -1) {
          uiElement.onTap();
          found = true;
        }
      }

      if (found) {
        if (e.stopPropagation) {
          e.stopPropagation();
        }

        _blockControlsTap = true; // Some versions of Android don't prevent ghost click event 
        // when preventDefault() was called on touchstart and/or touchend.
        // 
        // This happens on v4.3, 4.2, 4.1, 
        // older versions strangely work correctly, 
        // but just in case we add delay on all of them)	

        var tapDelay = framework.features.isOldAndroid ? 600 : 30;
        _blockControlsTapTimeout = setTimeout(function () {
          _blockControlsTap = false;
        }, tapDelay);
      }
    },
        _fitControlsInViewport = function () {
      return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
    },
        _togglePswpClass = function (el, cName, add) {
      framework[(add ? 'add' : 'remove') + 'Class'](el, 'pswp__' + cName);
    },
        // add class when there is just one item in the gallery
    // (by default it hides left/right arrows and 1ofX counter)
    _countNumItems = function () {
      var hasOneSlide = _options.getNumItemsFn() === 1;

      if (hasOneSlide !== _galleryHasOneSlide) {
        _togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);

        _galleryHasOneSlide = hasOneSlide;
      }
    },
        _toggleShareModalClass = function () {
      _togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
    },
        _toggleShareModal = function () {
      _shareModalHidden = !_shareModalHidden;

      if (!_shareModalHidden) {
        _toggleShareModalClass();

        setTimeout(function () {
          if (!_shareModalHidden) {
            framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
          }
        }, 30);
      } else {
        framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
        setTimeout(function () {
          if (_shareModalHidden) {
            _toggleShareModalClass();
          }
        }, 300);
      }

      if (!_shareModalHidden) {
        _updateShareURLs();
      }

      return false;
    },
        _openWindowPopup = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;
      pswp.shout('shareLinkClick', e, target);

      if (!target.href) {
        return false;
      }

      if (target.hasAttribute('download')) {
        return true;
      }

      window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,' + 'location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));

      if (!_shareModalHidden) {
        _toggleShareModal();
      }

      return false;
    },
        _updateShareURLs = function () {
      var shareButtonOut = '',
          shareButtonData,
          shareURL,
          image_url,
          page_url,
          share_text;

      for (var i = 0; i < _options.shareButtons.length; i++) {
        shareButtonData = _options.shareButtons[i];
        image_url = _options.getImageURLForShare(shareButtonData);
        page_url = _options.getPageURLForShare(shareButtonData);
        share_text = _options.getTextForShare(shareButtonData);
        shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url)).replace('{{image_url}}', encodeURIComponent(image_url)).replace('{{raw_image_url}}', image_url).replace('{{text}}', encodeURIComponent(share_text));
        shareButtonOut += '<a href="' + shareURL + '" target="_blank" ' + 'class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? 'download' : '') + '>' + shareButtonData.label + '</a>';

        if (_options.parseShareButtonOut) {
          shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
        }
      }

      _shareModal.children[0].innerHTML = shareButtonOut;
      _shareModal.children[0].onclick = _openWindowPopup;
    },
        _hasCloseClass = function (target) {
      for (var i = 0; i < _options.closeElClasses.length; i++) {
        if (framework.hasClass(target, 'pswp__' + _options.closeElClasses[i])) {
          return true;
        }
      }
    },
        _idleInterval,
        _idleTimer,
        _idleIncrement = 0,
        _onIdleMouseMove = function () {
      clearTimeout(_idleTimer);
      _idleIncrement = 0;

      if (_isIdle) {
        ui.setIdle(false);
      }
    },
        _onMouseLeaveWindow = function (e) {
      e = e ? e : window.event;
      var from = e.relatedTarget || e.toElement;

      if (!from || from.nodeName === 'HTML') {
        clearTimeout(_idleTimer);
        _idleTimer = setTimeout(function () {
          ui.setIdle(true);
        }, _options.timeToIdleOutside);
      }
    },
        _setupFullscreenAPI = function () {
      if (_options.fullscreenEl && !framework.features.isOldAndroid) {
        if (!_fullscrenAPI) {
          _fullscrenAPI = ui.getFullscreenAPI();
        }

        if (_fullscrenAPI) {
          framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
          ui.updateFullscreen();
          framework.addClass(pswp.template, 'pswp--supports-fs');
        } else {
          framework.removeClass(pswp.template, 'pswp--supports-fs');
        }
      }
    },
        _setupLoadingIndicator = function () {
      // Setup loading indicator
      if (_options.preloaderEl) {
        _toggleLoadingIndicator(true);

        _listen('beforeChange', function () {
          clearTimeout(_loadingIndicatorTimeout); // display loading indicator with delay

          _loadingIndicatorTimeout = setTimeout(function () {
            if (pswp.currItem && pswp.currItem.loading) {
              if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
                // show preloader if progressive loading is not enabled, 
                // or image width is not defined yet (because of slow connection)
                _toggleLoadingIndicator(false); // items-controller.js function allowProgressiveImg

              }
            } else {
              _toggleLoadingIndicator(true); // hide preloader

            }
          }, _options.loadingIndicatorDelay);
        });

        _listen('imageLoadComplete', function (index, item) {
          if (pswp.currItem === item) {
            _toggleLoadingIndicator(true);
          }
        });
      }
    },
        _toggleLoadingIndicator = function (hide) {
      if (_loadingIndicatorHidden !== hide) {
        _togglePswpClass(_loadingIndicator, 'preloader--active', !hide);

        _loadingIndicatorHidden = hide;
      }
    },
        _applyNavBarGaps = function (item) {
      var gap = item.vGap;

      if (_fitControlsInViewport()) {
        var bars = _options.barsSize;

        if (_options.captionEl && bars.bottom === 'auto') {
          if (!_fakeCaptionContainer) {
            _fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');

            _fakeCaptionContainer.appendChild(framework.createEl('pswp__caption__center'));

            _controls.insertBefore(_fakeCaptionContainer, _captionContainer);

            framework.addClass(_controls, 'pswp__ui--fit');
          }

          if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {
            var captionSize = _fakeCaptionContainer.clientHeight;
            gap.bottom = parseInt(captionSize, 10) || 44;
          } else {
            gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
          }
        } else {
          gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
        } // height of top bar is static, no need to calculate it


        gap.top = bars.top;
      } else {
        gap.top = gap.bottom = 0;
      }
    },
        _setupIdle = function () {
      // Hide controls when mouse is used
      if (_options.timeToIdle) {
        _listen('mouseUsed', function () {
          framework.bind(document, 'mousemove', _onIdleMouseMove);
          framework.bind(document, 'mouseout', _onMouseLeaveWindow);
          _idleInterval = setInterval(function () {
            _idleIncrement++;

            if (_idleIncrement === 2) {
              ui.setIdle(true);
            }
          }, _options.timeToIdle / 2);
        });
      }
    },
        _setupHidingControlsDuringGestures = function () {
      // Hide controls on vertical drag
      _listen('onVerticalDrag', function (now) {
        if (_controlsVisible && now < 0.95) {
          ui.hideControls();
        } else if (!_controlsVisible && now >= 0.95) {
          ui.showControls();
        }
      }); // Hide controls when pinching to close


      var pinchControlsHidden;

      _listen('onPinchClose', function (now) {
        if (_controlsVisible && now < 0.9) {
          ui.hideControls();
          pinchControlsHidden = true;
        } else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
          ui.showControls();
        }
      });

      _listen('zoomGestureEnded', function () {
        pinchControlsHidden = false;

        if (pinchControlsHidden && !_controlsVisible) {
          ui.showControls();
        }
      });
    };

    var _uiElements = [{
      name: 'caption',
      option: 'captionEl',
      onInit: function (el) {
        _captionContainer = el;
      }
    }, {
      name: 'share-modal',
      option: 'shareEl',
      onInit: function (el) {
        _shareModal = el;
      },
      onTap: function () {
        _toggleShareModal();
      }
    }, {
      name: 'button--share',
      option: 'shareEl',
      onInit: function (el) {
        _shareButton = el;
      },
      onTap: function () {
        _toggleShareModal();
      }
    }, {
      name: 'button--zoom',
      option: 'zoomEl',
      onTap: pswp.toggleDesktopZoom
    }, {
      name: 'counter',
      option: 'counterEl',
      onInit: function (el) {
        _indexIndicator = el;
      }
    }, {
      name: 'button--close',
      option: 'closeEl',
      onTap: pswp.close
    }, {
      name: 'button--arrow--left',
      option: 'arrowEl',
      onTap: pswp.prev
    }, {
      name: 'button--arrow--right',
      option: 'arrowEl',
      onTap: pswp.next
    }, {
      name: 'button--fs',
      option: 'fullscreenEl',
      onTap: function () {
        if (_fullscrenAPI.isFullscreen()) {
          _fullscrenAPI.exit();
        } else {
          _fullscrenAPI.enter();
        }
      }
    }, {
      name: 'preloader',
      option: 'preloaderEl',
      onInit: function (el) {
        _loadingIndicator = el;
      }
    }];

    var _setupUIElements = function () {
      var item, classAttr, uiElement;

      var loopThroughChildElements = function (sChildren) {
        if (!sChildren) {
          return;
        }

        var l = sChildren.length;

        for (var i = 0; i < l; i++) {
          item = sChildren[i];
          classAttr = item.className;

          for (var a = 0; a < _uiElements.length; a++) {
            uiElement = _uiElements[a];

            if (classAttr.indexOf('pswp__' + uiElement.name) > -1) {
              if (_options[uiElement.option]) {
                // if element is not disabled from options
                framework.removeClass(item, 'pswp__element--disabled');

                if (uiElement.onInit) {
                  uiElement.onInit(item);
                } //item.style.display = 'block';

              } else {
                framework.addClass(item, 'pswp__element--disabled'); //item.style.display = 'none';
              }
            }
          }
        }
      };

      loopThroughChildElements(_controls.children);
      var topBar = framework.getChildByClass(_controls, 'pswp__top-bar');

      if (topBar) {
        loopThroughChildElements(topBar.children);
      }
    };

    ui.init = function () {
      // extend options
      framework.extend(pswp.options, _defaultUIOptions, true); // create local link for fast access

      _options = pswp.options; // find pswp__ui element

      _controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui'); // create local link

      _listen = pswp.listen;

      _setupHidingControlsDuringGestures(); // update controls when slides change


      _listen('beforeChange', ui.update); // toggle zoom on double-tap


      _listen('doubleTap', function (point) {
        var initialZoomLevel = pswp.currItem.initialZoomLevel;

        if (pswp.getZoomLevel() !== initialZoomLevel) {
          pswp.zoomTo(initialZoomLevel, point, 333);
        } else {
          pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
        }
      }); // Allow text selection in caption


      _listen('preventDragEvent', function (e, isDown, preventObj) {
        var t = e.target || e.srcElement;

        if (t && t.getAttribute('class') && e.type.indexOf('mouse') > -1 && (t.getAttribute('class').indexOf('__caption') > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
          preventObj.prevent = false;
        }
      }); // bind events for UI


      _listen('bindEvents', function () {
        framework.bind(_controls, 'pswpTap click', _onControlsTap);
        framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

        if (!pswp.likelyTouchDevice) {
          framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
        }
      }); // unbind events for UI


      _listen('unbindEvents', function () {
        if (!_shareModalHidden) {
          _toggleShareModal();
        }

        if (_idleInterval) {
          clearInterval(_idleInterval);
        }

        framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
        framework.unbind(document, 'mousemove', _onIdleMouseMove);
        framework.unbind(_controls, 'pswpTap click', _onControlsTap);
        framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
        framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

        if (_fullscrenAPI) {
          framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);

          if (_fullscrenAPI.isFullscreen()) {
            _options.hideAnimationDuration = 0;

            _fullscrenAPI.exit();
          }

          _fullscrenAPI = null;
        }
      }); // clean up things when gallery is destroyed


      _listen('destroy', function () {
        if (_options.captionEl) {
          if (_fakeCaptionContainer) {
            _controls.removeChild(_fakeCaptionContainer);
          }

          framework.removeClass(_captionContainer, 'pswp__caption--empty');
        }

        if (_shareModal) {
          _shareModal.children[0].onclick = null;
        }

        framework.removeClass(_controls, 'pswp__ui--over-close');
        framework.addClass(_controls, 'pswp__ui--hidden');
        ui.setIdle(false);
      });

      if (!_options.showAnimationDuration) {
        framework.removeClass(_controls, 'pswp__ui--hidden');
      }

      _listen('initialZoomIn', function () {
        if (_options.showAnimationDuration) {
          framework.removeClass(_controls, 'pswp__ui--hidden');
        }
      });

      _listen('initialZoomOut', function () {
        framework.addClass(_controls, 'pswp__ui--hidden');
      });

      _listen('parseVerticalMargin', _applyNavBarGaps);

      _setupUIElements();

      if (_options.shareEl && _shareButton && _shareModal) {
        _shareModalHidden = true;
      }

      _countNumItems();

      _setupIdle();

      _setupFullscreenAPI();

      _setupLoadingIndicator();
    };

    ui.setIdle = function (isIdle) {
      _isIdle = isIdle;

      _togglePswpClass(_controls, 'ui--idle', isIdle);
    };

    ui.update = function () {
      // Don't update UI if it's hidden
      if (_controlsVisible && pswp.currItem) {
        ui.updateIndexIndicator();

        if (_options.captionEl) {
          _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

          _togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
        }

        _overlayUIUpdated = true;
      } else {
        _overlayUIUpdated = false;
      }

      if (!_shareModalHidden) {
        _toggleShareModal();
      }

      _countNumItems();
    };

    ui.updateFullscreen = function (e) {
      if (e) {
        // some browsers change window scroll position during the fullscreen
        // so PhotoSwipe updates it just in case
        setTimeout(function () {
          pswp.setScrollOffset(0, framework.getScrollY());
        }, 50);
      } // toogle pswp--fs class on root element


      framework[(_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class'](pswp.template, 'pswp--fs');
    };

    ui.updateIndexIndicator = function () {
      if (_options.counterEl) {
        _indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
      }
    };

    ui.onGlobalTap = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;

      if (_blockControlsTap) {
        return;
      }

      if (e.detail && e.detail.pointerType === 'mouse') {
        // close gallery if clicked outside of the image
        if (_hasCloseClass(target)) {
          pswp.close();
          return;
        }

        if (framework.hasClass(target, 'pswp__img')) {
          if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
            if (_options.clickToCloseNonZoomable) {
              pswp.close();
            }
          } else {
            pswp.toggleDesktopZoom(e.detail.releasePoint);
          }
        }
      } else {
        // tap anywhere (except buttons) to toggle visibility of controls
        if (_options.tapToToggleControls) {
          if (_controlsVisible) {
            ui.hideControls();
          } else {
            ui.showControls();
          }
        } // tap to close gallery


        if (_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target))) {
          pswp.close();
          return;
        }
      }
    };

    ui.onMouseOver = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement; // add class when mouse is over an element that should close the gallery

      _togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
    };

    ui.hideControls = function () {
      framework.addClass(_controls, 'pswp__ui--hidden');
      _controlsVisible = false;
    };

    ui.showControls = function () {
      _controlsVisible = true;

      if (!_overlayUIUpdated) {
        ui.update();
      }

      framework.removeClass(_controls, 'pswp__ui--hidden');
    };

    ui.supportsFullscreen = function () {
      var d = document;
      return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
    };

    ui.getFullscreenAPI = function () {
      var dE = document.documentElement,
          api,
          tF = 'fullscreenchange';

      if (dE.requestFullscreen) {
        api = {
          enterK: 'requestFullscreen',
          exitK: 'exitFullscreen',
          elementK: 'fullscreenElement',
          eventK: tF
        };
      } else if (dE.mozRequestFullScreen) {
        api = {
          enterK: 'mozRequestFullScreen',
          exitK: 'mozCancelFullScreen',
          elementK: 'mozFullScreenElement',
          eventK: 'moz' + tF
        };
      } else if (dE.webkitRequestFullscreen) {
        api = {
          enterK: 'webkitRequestFullscreen',
          exitK: 'webkitExitFullscreen',
          elementK: 'webkitFullscreenElement',
          eventK: 'webkit' + tF
        };
      } else if (dE.msRequestFullscreen) {
        api = {
          enterK: 'msRequestFullscreen',
          exitK: 'msExitFullscreen',
          elementK: 'msFullscreenElement',
          eventK: 'MSFullscreenChange'
        };
      }

      if (api) {
        api.enter = function () {
          // disable close-on-scroll in fullscreen
          _initalCloseOnScrollValue = _options.closeOnScroll;
          _options.closeOnScroll = false;

          if (this.enterK === 'webkitRequestFullscreen') {
            pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
          } else {
            return pswp.template[this.enterK]();
          }
        };

        api.exit = function () {
          _options.closeOnScroll = _initalCloseOnScrollValue;
          return document[this.exitK]();
        };

        api.isFullscreen = function () {
          return document[this.elementK];
        };
      }

      return api;
    };
  };

  return PhotoSwipeUI_Default;
});
},{}],"img/front/llogo.svg":[function(require,module,exports) {
module.exports = "/llogo.9c6f68c0.svg";
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("../js/vendor/modernizr-3.11.2.min.js");

require("../js/plugins");

var _obtainPhotos = _interopRequireDefault(require("./modules/obtainPhotos.js"));

require("bootstrap/dist/js/bootstrap.bundle");

require("photoswipe/dist/photoswipe");

require("photoswipe/dist/photoswipe-ui-default");

var urlImage = _interopRequireWildcard(require("../img/front/llogo.svg"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById("canvas");
var lineFooter = document.getElementById("lineFooter");
var lineBotton = document.getElementById("lineBotton");
var ctx = canvas.getContext("2d");
var image = new Image(); // Using optional size for image

image.onload = drawImage; // Draw when image has loaded
// Load an image of intrinsic size 300x227 in CSS pixels

image.src = urlImage.default;

function drawImage() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight; // using the element's width and height properties - lets draw one
  // on top in the corner:

  ctx.drawImage(this, 0, 0, this.width, this.height);

  if (lineFooter.getContext) {
    var l = lineFooter.getContext("2d");
    l.beginPath();
    l.moveTo(0, 20);
    l.lineTo(300, 20); // set line grosor

    l.lineWidth = 5; // set color to line

    l.strokeStyle = "#ff0e8d";
    l.stroke();
  }

  if (lineBotton.getContext) {
    var line = lineBotton.getContext("2d");
    line.font = "12px Comic Sans MS";
    line.fillStyle = "white";
    line.textAlign = "rigth";
    line.fillText("CopyRight@ Propositivapr 2021", 70, 30);
  }
} // Section that obtain a list of photos from cloudinary cloud


var title = document.title;

switch (title) {
  case "Arte & Moda León":
    (0, _obtainPhotos.default)("arteYmodaLeon");
    break;

  case "Nicaragua Diseña":
    (0, _obtainPhotos.default)('ndesings');
    break;

  case "Coleccion Summer Time":
    (0, _obtainPhotos.default)("summerTime");
    break;

  case 'Arte, Moda, Diseño y Muralismo':
    (0, _obtainPhotos.default)("esteli");
    break;

  default:
    break;
}
},{"../js/vendor/modernizr-3.11.2.min.js":"js/vendor/modernizr-3.11.2.min.js","../js/plugins":"js/plugins.js","./modules/obtainPhotos.js":"js/modules/obtainPhotos.js","bootstrap/dist/js/bootstrap.bundle":"../node_modules/bootstrap/dist/js/bootstrap.bundle.js","photoswipe/dist/photoswipe":"../node_modules/photoswipe/dist/photoswipe.js","photoswipe/dist/photoswipe-ui-default":"../node_modules/photoswipe/dist/photoswipe-ui-default.js","../img/front/llogo.svg":"img/front/llogo.svg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37533" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map