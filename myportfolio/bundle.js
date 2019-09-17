! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 4)
}([function(e, t, n) {
    var r = n(1);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        sourceMap: !0,
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(2)(r, o);
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {}, function(e, t, n) {
    var r, o, i = {},
        a = (r = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === o && (o = r.apply(this, arguments)), o
        }),
        s = function(e) {
            var t = {};
            return function(e, n) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var r = function(e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }.call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    t[e] = r
                }
                return t[e]
            }
        }(),
        l = null,
        c = 0,
        u = [],
        d = n(3);

    function f(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = i[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(g(r.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(g(r.parts[a], t));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function m(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
                a = t.base ? i[0] + t.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function v(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = u[u.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(e.insertAt.before, n);
            n.insertBefore(t, o)
        }
    }

    function p(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1)
    }

    function h(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var r = function() {
                0;
                return n.nc
            }();
            r && (e.attrs.nonce = r)
        }
        return y(t, e.attrs), v(e, t), t
    }

    function y(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }

    function g(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
            if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
            e.css = i
        }
        if (t.singleton) {
            var a = c++;
            n = l || (l = h(t)), r = L.bind(null, n, a, !1), o = L.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", y(t, e.attrs), v(e, t), t
        }(t), r = function(e, t, n) {
            var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = d(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), o = function() {
            p(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = h(t), r = function(e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function() {
            p(n)
        });
        return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = m(e, t);
        return f(n, t),
            function(e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = i[a.id]).refs--, r.push(s)
                }
                e && f(m(e, t), t);
                for (o = 0; o < r.length; o++) {
                    var s;
                    if (0 === (s = r[o]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete i[s.id]
                    }
                }
            }
    };
    var b, w = (b = [], function(e, t) {
        return b[e] = t, b.filter(Boolean).join("\n")
    });

    function L(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = w(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r = function() {
            var e = .01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
        },
        o = function() {
            var e = document.querySelector(".hambrg-btn"),
                t = document.querySelector(".main-menu");
            e.addEventListener("click", function() {
                this.classList.toggle("active"), setTimeout(function() {
                    e.firstElementChild.classList.toggle("clicked"), e.lastElementChild.classList.toggle("clicked")
                }, 400), t.classList.toggle("active")
            }, !1);
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t.children[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) i.value.addEventListener("click", function() {
                    e.click()
                }, !1)
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
            var s = document.documentElement;
            window.addEventListener("scroll", function() {
                var e = document.querySelector(".main").getBoundingClientRect(),
                    t = document.querySelector(".top-nav-icon"),
                    n = (-1 * (e.top - t.clientHeight) / 50).toFixed(1);
                s.style.setProperty("--hamburgerBtnContainerOpacityValue", n)
            }, !1)
        };

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = function(e) {
                return Math.floor(e.getBoundingClientRect().top)
            };
        e.preventDefault();
        var r = t ? t.getAttribute("href") : this.getAttribute("href"),
            o = document.querySelector(r);
        if (o) {
            var i = n(o);
            window.scrollBy({
                top: i,
                left: 0,
                behavior: "smooth"
            });
            var a = setInterval(function() {
                var e = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
                (0 === n(o) || e) && (o.tabIndex = "-1", o.focus(), window.history.pushState("", "", r), clearInterval(a))
            }, 100)
        }
    }
    var a = function() {
            document.querySelectorAll(".scroll").forEach(function(e) {
                return e.onclick = i
            })
        },
        s = function() {
            var e = document.querySelectorAll(".main-section-title"),
                t = function() {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value,
                                s = a.getBoundingClientRect();
                            s.top < window.innerHeight - s.height && a.classList.add("animate-to-visible")
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                };
            t(), window.addEventListener("scroll", function() {
                t()
            }, !1)
        },
        l = function() {
            var e = document.querySelector(".information-about-me"),
                t = document.querySelector(".skills"),
                n = function() {
                    var n = e.getBoundingClientRect(),
                        r = t.getBoundingClientRect();
                    n.top < window.innerHeight - n.height / 2 && e.classList.add("animate-to-visible"), r.top < window.innerHeight - n.height / 2 && t.classList.add("animate-to-visible")
                };
            n(), window.addEventListener("scroll", function() {
                n()
            }, !1)
        },
        c = function() {
            document.querySelectorAll(".project-img-container");
            var e = document.querySelectorAll(".project-descrptn-container"),
                t = function() {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value;
                            a.getBoundingClientRect().top < window.innerHeight && a.previousElementSibling.classList.add("animate-to-visible")
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                };
            t(), window.addEventListener("scroll", function() {
                t()
            }, !1)
        }
        
    document.addEventListener("DOMContentLoaded", function() {
        var e = document.querySelector(".copyright__year");
        r(), window.addEventListener("resize", r, !1), o(), e.innerHTML = (new Date).getFullYear(), a(), s(), l(), c()
      }, !1)
}]);