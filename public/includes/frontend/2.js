/*!  1.6.14 2019-04-04 22:05 */ ! function(e) {
	var n = !1;
	if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
		var o = window.Cookies,
			t = window.Cookies = e();
		t.noConflict = function() {
			return window.Cookies = o, t
		}
	}
}(function() {
	function g() {
		for (var e = 0, n = {}; e < arguments.length; e++) {
			var o = arguments[e];
			for (var t in o) n[t] = o[t]
		}
		return n
	}
	return function e(l) {
		function C(e, n, o) {
			var t;
			if ("undefined" != typeof document) {
				if (1 < arguments.length) {
					if ("number" == typeof(o = g({
							path: "/"
						}, C.defaults, o)).expires) {
						var r = new Date;
						r.setMilliseconds(r.getMilliseconds() + 864e5 * o.expires), o.expires = r
					}
					o.expires = o.expires ? o.expires.toUTCString() : "";
					try {
						t = JSON.stringify(n), /^[\{\[]/.test(t) && (n = t)
					} catch (e) {}
					n = l.write ? l.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
					var i = "";
					for (var c in o) o[c] && (i += "; " + c, !0 !== o[c] && (i += "=" + o[c]));
					return document.cookie = e + "=" + n + i
				}
				e || (t = {});
				for (var a = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, s = 0; s < a.length; s++) {
					var p = a[s].split("="),
						d = p.slice(1).join("=");
					'"' === d.charAt(0) && (d = d.slice(1, -1));
					try {
						var u = p[0].replace(f, decodeURIComponent);
						if (d = l.read ? l.read(d, u) : l(d, u) || d.replace(f, decodeURIComponent), this.json) try {
							d = JSON.parse(d)
						} catch (e) {}
						if (e === u) {
							t = d;
							break
						}
						e || (t[u] = d)
					} catch (e) {}
				}
				return t
			}
		}
		return (C.set = C).get = function(e) {
			return C.call(C, e)
		}, C.getJSON = function() {
			return C.apply({
				json: !0
			}, [].slice.call(arguments))
		}, C.defaults = {}, C.remove = function(e, n) {
			C(e, "", g(n, {
				expires: -1
			}))
		}, C.withConverter = e, C
	}(function() {})
});
/*!  1.6.14 2019-04-04 22:05 */
CHARITABLE = window.CHARITABLE || {},
	function(t) {
		t.Sessions = function() {
			function e() {
				var e, t, n, a, i, o = document.querySelectorAll(".charitable-session-content"),
					s = "action=charitable_get_session_content";
				if (o.length) {
					for (i = 0; i < o.length; i++)
						for (a in t = (e = o[i]).getAttribute("data-template"), n = JSON.parse(e.getAttribute("data-args")), s += "&templates[" + i + "][template]=" + t, n) s += "&templates[" + i + "][" + a + "]=" + n[a];
					var S = new XMLHttpRequest;
					S.open("POST", CHARITABLE_SESSION.ajaxurl, !0), S.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), S.onreadystatechange = function() {
						if (4 === this.readyState && 200 <= this.status && this.status < 400) {
							var e = JSON.parse(this.response);
							if (!e.success) return;
							for (i = 0; i < e.data.length; i += 1) e.data[i].length && (o[i].innerHTML = e.data[i], o[i].style.display = "block")
						}
					}, S.send(s), S = null
				}
			}
			this.session_id = Cookies.get(CHARITABLE_SESSION.cookie_name), this.session_id || (Cookies.set(CHARITABLE_SESSION.cookie_name, CHARITABLE_SESSION.generated_id + "||" + CHARITABLE_SESSION.expiration + "||" + CHARITABLE_SESSION.expiration_variant, {
				expires: new Date((new Date).getTime() + 1e3 * parseInt(CHARITABLE_SESSION.expiration)),
				path: CHARITABLE_SESSION.cookie_path,
				domain: CHARITABLE_SESSION.cookie_domain,
				secure: CHARITABLE_SESSION.secure
			}), CHARITABLE_SESSION.generated_id, CHARITABLE_SESSION.expiration, CHARITABLE_SESSION.expiration_variant), this.session_id && this.session_id === CHARITABLE_SESSION.id || (t.content_loading = !0, "loading" != document.readyState ? (e(), t.content_loading = !1) : document.addEventListener ? (document.addEventListener("DOMContentLoaded", e), t.content_loading = !1) : document.attachEvent("onreadystatechange", function() {
				"loading" != document.readyState && e(), t.content_loading = !1
			}))
		}()
	}(CHARITABLE);
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	function(a, b, c) {
		function d(c) {
			var d = b.console;
			f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
		}

		function e(b, c, e, f) {
			if (Object.defineProperty) try {
				return void Object.defineProperty(b, c, {
					configurable: !0,
					enumerable: !0,
					get: function() {
						return d(f), e
					},
					set: function(a) {
						d(f), e = a
					}
				})
			} catch (g) {}
			a._definePropertyBroken = !0, b[c] = e
		}
		a.migrateVersion = "1.4.1";
		var f = {};
		a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
			f = {}, a.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
		var g = a("<input/>", {
				size: 1
			}).attr("size") && a.attrFn,
			h = a.attr,
			i = a.attrHooks.value && a.attrHooks.value.get || function() {
				return null
			},
			j = a.attrHooks.value && a.attrHooks.value.set || function() {
				return c
			},
			k = /^(?:input|button)$/i,
			l = /^[238]$/,
			m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			n = /^(?:checked|selected)$/i;
		e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
			var j = e.toLowerCase(),
				o = b && b.nodeType;
			return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
				get: function(b, d) {
					var e, f = a.prop(b, d);
					return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
				},
				set: function(b, c, d) {
					var e;
					return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
				}
			}, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
		}, a.attrHooks.value = {
			get: function(a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
			},
			set: function(a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
			}
		};
		var o, p, q = a.fn.init,
			r = a.find,
			s = a.parseJSON,
			t = /^\s*</,
			u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		a.fn.init = function(b, e, f) {
			var g, h;
			return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
		}, a.fn.init.prototype = a.fn, a.find = function(a) {
			var b = Array.prototype.slice.call(arguments);
			if ("string" == typeof a && u.test(a)) try {
				document.querySelector(a)
			} catch (c) {
				a = a.replace(v, function(a, b, c, d) {
					return "[" + b + c + '"' + d + '"]'
				});
				try {
					document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
				} catch (e) {
					d("Attribute selector with '#' was not fixed: " + b[0])
				}
			}
			return r.apply(this, b)
		};
		var x;
		for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
		a.parseJSON = function(a) {
			return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
		}, a.uaMatch = function(a) {
			a = a.toLowerCase();
			var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: b[1] || "",
				version: b[2] || "0"
			}
		}, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
			function b(a, c) {
				return new b.fn.init(a, c)
			}
			a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
				var f = a.fn.init.call(this, d, e, c);
				return f instanceof b ? f : b(f)
			}, b.fn.init.prototype = b.fn;
			var c = b(document);
			return d("jQuery.sub() is deprecated"), b
		}, a.fn.size = function() {
			return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
		};
		var y = !1;
		a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
			var d = a.cssHooks[c] && a.cssHooks[c].get;
			d && (a.cssHooks[c].get = function() {
				var a;
				return y = !0, a = d.apply(this, arguments), y = !1, a
			})
		}), a.swap = function(a, b, c, e) {
			var f, g, h = {};
			y || d("jQuery.swap() is undocumented and deprecated");
			for (g in b) h[g] = a.style[g], a.style[g] = b[g];
			f = c.apply(a, e || []);
			for (g in b) a.style[g] = h[g];
			return f
		}, a.ajaxSetup({
			converters: {
				"text json": a.parseJSON
			}
		});
		var z = a.fn.data;
		a.fn.data = function(b) {
			var e, f, g = this[0];
			return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
		};
		var A = /\/(java|ecma)script/i;
		a.clean || (a.clean = function(b, c, e, f) {
			c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
			var g, h, i, j, k = [];
			if (a.merge(k, a.buildFragment(b, c).childNodes), e)
				for (i = function(a) {
						return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
					}, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
			return k
		});
		var B = a.event.add,
			C = a.event.remove,
			D = a.event.trigger,
			E = a.fn.toggle,
			F = a.fn.live,
			G = a.fn.die,
			H = a.fn.load,
			I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			J = new RegExp("\\b(?:" + I + ")\\b"),
			K = /(?:^|\s)hover(\.\S+|)\b/,
			L = function(b) {
				return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
			};
		a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
			a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
		}, a.event.remove = function(a, b, c, d, e) {
			C.call(this, a, L(b) || "", c, d, e)
		}, a.each(["load", "unload", "error"], function(b, c) {
			a.fn[c] = function() {
				var a = Array.prototype.slice.call(arguments, 0);
				return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
			}
		}), a.fn.toggle = function(b, c) {
			if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
			d("jQuery.fn.toggle(handler, handler...) is deprecated");
			var e = arguments,
				f = b.guid || a.guid++,
				g = 0,
				h = function(c) {
					var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
					return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
				};
			for (h.guid = f; g < e.length;) e[g++].guid = f;
			return this.click(h)
		}, a.fn.live = function(b, c, e) {
			return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
		}, a.fn.die = function(b, c) {
			return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
		}, a.event.trigger = function(a, b, c, e) {
			return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
		}, a.each(I.split("|"), function(b, c) {
			a.event.special[c] = {
				setup: function() {
					var b = this;
					return b !== document && (a.event.add(document, c + "." + a.guid, function() {
						a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
					}), a._data(this, c, a.guid++)), !1
				},
				teardown: function() {
					return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
				}
			}
		}), a.event.special.ready = {
			setup: function() {
				this === document && d("'ready' event is deprecated")
			}
		};
		var M = a.fn.andSelf || a.fn.addBack,
			N = a.fn.find;
		if (a.fn.andSelf = function() {
				return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
			}, a.fn.find = function(a) {
				var b = N.apply(this, arguments);
				return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
			}, a.Callbacks) {
			var O = a.Deferred,
				P = [
					["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
					["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
					["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
				];
			a.Deferred = function(b) {
				var c = O(),
					e = c.promise();
				return c.pipe = e.pipe = function() {
					var b = arguments;
					return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
						a.each(P, function(f, g) {
							var h = a.isFunction(b[f]) && b[f];
							c[g[1]](function() {
								var b = h && h.apply(this, arguments);
								b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
							})
						}), b = null
					}).promise()
				}, c.isResolved = function() {
					return d("deferred.isResolved is deprecated"), "resolved" === c.state()
				}, c.isRejected = function() {
					return d("deferred.isRejected is deprecated"), "rejected" === c.state()
				}, b && b.call(c, c), c
			}
		}
	}(jQuery, window);
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
	function b(b, d) {
		var e, f, g, h = b.nodeName.toLowerCase();
		return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
	}

	function c(b) {
		return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
			return "hidden" === a.css(this, "visibility")
		}).length
	}
	a.ui = a.ui || {}, a.extend(a.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), a.fn.extend({
		scrollParent: function(b) {
			var c = this.css("position"),
				d = "absolute" === c,
				e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				f = this.parents().filter(function() {
					var b = a(this);
					return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
				}).eq(0);
			return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
		},
		uniqueId: function() {
			var a = 0;
			return function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++a)
				})
			}
		}(),
		removeUniqueId: function() {
			return this.each(function() {
				/^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
			})
		}
	}), a.extend(a.expr[":"], {
		data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
			return function(c) {
				return !!a.data(c, b)
			}
		}) : function(b, c, d) {
			return !!a.data(b, d[3])
		},
		focusable: function(c) {
			return b(c, !isNaN(a.attr(c, "tabindex")))
		},
		tabbable: function(c) {
			var d = a.attr(c, "tabindex"),
				e = isNaN(d);
			return (e || d >= 0) && b(c, !e)
		}
	}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
		function d(b, c, d, f) {
			return a.each(e, function() {
				c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
			}), c
		}
		var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
			f = c.toLowerCase(),
			g = {
				innerWidth: a.fn.innerWidth,
				innerHeight: a.fn.innerHeight,
				outerWidth: a.fn.outerWidth,
				outerHeight: a.fn.outerHeight
			};
		a.fn["inner" + c] = function(b) {
			return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
				a(this).css(f, d(this, b) + "px")
			})
		}, a.fn["outer" + c] = function(b, e) {
			return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
				a(this).css(f, d(this, b, !0, e) + "px")
			})
		}
	}), a.fn.addBack || (a.fn.addBack = function(a) {
		return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
	}), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
		return function(c) {
			return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
		}
	}(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
		focus: function(b) {
			return function(c, d) {
				return "number" == typeof c ? this.each(function() {
					var b = this;
					setTimeout(function() {
						a(b).focus(), d && d.call(b)
					}, c)
				}) : b.apply(this, arguments)
			}
		}(a.fn.focus),
		disableSelection: function() {
			var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function() {
				return this.bind(a + ".ui-disableSelection", function(a) {
					a.preventDefault()
				})
			}
		}(),
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function(b) {
			if (void 0 !== b) return this.css("zIndex", b);
			if (this.length)
				for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
					if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
					e = e.parent()
				}
			return 0
		}
	}), a.ui.plugin = {
		add: function(b, c, d) {
			var e, f = a.ui[b].prototype;
			for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
		},
		call: function(a, b, c, d) {
			var e, f = a.plugins[b];
			if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
				for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
		}
	}
});
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
	var b = 0,
		c = Array.prototype.slice;
	return a.cleanData = function(b) {
		return function(c) {
			var d, e, f;
			for (f = 0; null != (e = c[f]); f++) try {
				d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
			} catch (g) {}
			b(c)
		}
	}(a.cleanData), a.widget = function(b, c, d) {
		var e, f, g, h, i = {},
			j = b.split(".")[0];
		return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
			return !!a.data(b, e)
		}, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
			return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
		}, a.extend(g, f, {
			version: d.version,
			_proto: a.extend({}, d),
			_childConstructors: []
		}), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
			return a.isFunction(d) ? void(i[b] = function() {
				var a = function() {
						return c.prototype[b].apply(this, arguments)
					},
					e = function(a) {
						return c.prototype[b].apply(this, a)
					};
				return function() {
					var b, c = this._super,
						f = this._superApply;
					return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
				}
			}()) : void(i[b] = d)
		}), g.prototype = a.widget.extend(h, {
			widgetEventPrefix: f ? h.widgetEventPrefix || b : b
		}, i, {
			constructor: g,
			namespace: j,
			widgetName: b,
			widgetFullName: e
		}), f ? (a.each(f._childConstructors, function(b, c) {
			var d = c.prototype;
			a.widget(d.namespace + "." + d.widgetName, g, c._proto)
		}), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
	}, a.widget.extend = function(b) {
		for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
			for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (a.isPlainObject(e) ? b[d] = a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : b[d] = e);
		return b
	}, a.widget.bridge = function(b, d) {
		var e = d.prototype.widgetFullName || b;
		a.fn[b] = function(f) {
			var g = "string" == typeof f,
				h = c.call(arguments, 1),
				i = this;
			return g ? this.each(function() {
				var c, d = a.data(this, e);
				return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
			}) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
				var b = a.data(this, e);
				b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
			})), i
		}
	}, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(c, d) {
			d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(a) {
					a.target === d && this.destroy()
				}
			}), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: a.noop,
		_getCreateEventData: a.noop,
		_create: a.noop,
		_init: a.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: a.noop,
		widget: function() {
			return this.element
		},
		option: function(b, c) {
			var d, e, f, g = b;
			if (0 === arguments.length) return a.widget.extend({}, this.options);
			if ("string" == typeof b)
				if (g = {}, d = b.split("."), b = d.shift(), d.length) {
					for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
					if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
					e[b] = c
				} else {
					if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
					g[b] = c
				}
			return this._setOptions(g), this
		},
		_setOptions: function(a) {
			var b;
			for (b in a) this._setOption(b, a[b]);
			return this
		},
		_setOption: function(a, b) {
			return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
		},
		enable: function() {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function() {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function(b, c, d) {
			var e, f = this;
			"boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
				function h() {
					if (b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")) return ("string" == typeof g ? f[g] : g).apply(f, arguments)
				}
				"string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
				var i = d.match(/^([\w:-]*)\s*(.*)$/),
					j = i[1] + f.eventNamespace,
					k = i[2];
				k ? e.delegate(k, j, h) : c.bind(j, h)
			})
		},
		_off: function(b, c) {
			c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
		},
		_delay: function(a, b) {
			function c() {
				return ("string" == typeof a ? d[a] : a).apply(d, arguments)
			}
			var d = this;
			return setTimeout(c, b || 0)
		},
		_hoverable: function(b) {
			this.hoverable = this.hoverable.add(b), this._on(b, {
				mouseenter: function(b) {
					a(b.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(b) {
					a(b.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(b) {
			this.focusable = this.focusable.add(b), this._on(b, {
				focusin: function(b) {
					a(b.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(b) {
					a(b.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(b, c, d) {
			var e, f, g = this.options[b];
			if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
				for (e in f) e in c || (c[e] = f[e]);
			return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
		}
	}, a.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(b, c) {
		a.Widget.prototype["_" + b] = function(d, e, f) {
			"string" == typeof e && (e = {
				effect: e
			});
			var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
			e = e || {}, "number" == typeof e && (e = {
				duration: e
			}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
				a(this)[b](), f && f.call(d[0]), c()
			})
		}
	}), a.widget
});
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
	return function() {
		function b(a, b, c) {
			return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
		}

		function c(b, c) {
			return parseInt(a.css(b, c), 10) || 0
		}

		function d(b) {
			var c = b[0];
			return 9 === c.nodeType ? {
				width: b.width(),
				height: b.height(),
				offset: {
					top: 0,
					left: 0
				}
			} : a.isWindow(c) ? {
				width: b.width(),
				height: b.height(),
				offset: {
					top: b.scrollTop(),
					left: b.scrollLeft()
				}
			} : c.preventDefault ? {
				width: 0,
				height: 0,
				offset: {
					top: c.pageY,
					left: c.pageX
				}
			} : {
				width: b.outerWidth(),
				height: b.outerHeight(),
				offset: b.offset()
			}
		}
		a.ui = a.ui || {};
		var e, f, g = Math.max,
			h = Math.abs,
			i = Math.round,
			j = /left|center|right/,
			k = /top|center|bottom/,
			l = /[\+\-]\d+(\.[\d]+)?%?/,
			m = /^\w+/,
			n = /%$/,
			o = a.fn.position;
		a.position = {
				scrollbarWidth: function() {
					if (void 0 !== e) return e;
					var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
						f = d.children()[0];
					return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
				},
				getScrollInfo: function(b) {
					var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
						d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
						e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
						f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
					return {
						width: f ? a.position.scrollbarWidth() : 0,
						height: e ? a.position.scrollbarWidth() : 0
					}
				},
				getWithinInfo: function(b) {
					var c = a(b || window),
						d = a.isWindow(c[0]),
						e = !!c[0] && 9 === c[0].nodeType;
					return {
						element: c,
						isWindow: d,
						isDocument: e,
						offset: c.offset() || {
							left: 0,
							top: 0
						},
						scrollLeft: c.scrollLeft(),
						scrollTop: c.scrollTop(),
						width: d || e ? c.width() : c.outerWidth(),
						height: d || e ? c.height() : c.outerHeight()
					}
				}
			}, a.fn.position = function(e) {
				if (!e || !e.of) return o.apply(this, arguments);
				e = a.extend({}, e);
				var n, p, q, r, s, t, u = a(e.of),
					v = a.position.getWithinInfo(e.within),
					w = a.position.getScrollInfo(v),
					x = (e.collision || "flip").split(" "),
					y = {};
				return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function() {
					var a, b, c = (e[this] || "").split(" ");
					1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
				}), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function() {
					var d, j, k = a(this),
						l = k.outerWidth(),
						m = k.outerHeight(),
						o = c(this, "marginLeft"),
						t = c(this, "marginTop"),
						z = l + o + c(this, "marginRight") + w.width,
						A = m + t + c(this, "marginBottom") + w.height,
						B = a.extend({}, s),
						C = b(y.my, k.outerWidth(), k.outerHeight());
					"right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {
						marginLeft: o,
						marginTop: t
					}, a.each(["left", "top"], function(b, c) {
						a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
							targetWidth: p,
							targetHeight: q,
							elemWidth: l,
							elemHeight: m,
							collisionPosition: d,
							collisionWidth: z,
							collisionHeight: A,
							offset: [n[0] + C[0], n[1] + C[1]],
							my: e.my,
							at: e.at,
							within: v,
							elem: k
						})
					}), e.using && (j = function(a) {
						var b = r.left - B.left,
							c = b + p - l,
							d = r.top - B.top,
							f = d + q - m,
							i = {
								target: {
									element: u,
									left: r.left,
									top: r.top,
									width: p,
									height: q
								},
								element: {
									element: k,
									left: B.left,
									top: B.top,
									width: l,
									height: m
								},
								horizontal: c < 0 ? "left" : b > 0 ? "right" : "center",
								vertical: f < 0 ? "top" : d > 0 ? "bottom" : "middle"
							};
						p < l && h(b + c) < p && (i.horizontal = "center"), q < m && h(d + f) < q && (i.vertical = "middle"), g(h(b), h(c)) > g(h(d), h(f)) ? i.important = "horizontal" : i.important = "vertical", e.using.call(this, a, i)
					}), k.offset(a.extend(B, {
						using: j
					}))
				})
			}, a.ui.position = {
				fit: {
					left: function(a, b) {
						var c, d = b.within,
							e = d.isWindow ? d.scrollLeft : d.offset.left,
							f = d.width,
							h = a.left - b.collisionPosition.marginLeft,
							i = e - h,
							j = h + b.collisionWidth - f - e;
						b.collisionWidth > f ? i > 0 && j <= 0 ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : j > 0 && i <= 0 ? a.left = e : i > j ? a.left = e + f - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
					},
					top: function(a, b) {
						var c, d = b.within,
							e = d.isWindow ? d.scrollTop : d.offset.top,
							f = b.within.height,
							h = a.top - b.collisionPosition.marginTop,
							i = e - h,
							j = h + b.collisionHeight - f - e;
						b.collisionHeight > f ? i > 0 && j <= 0 ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : j > 0 && i <= 0 ? a.top = e : i > j ? a.top = e + f - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
					}
				},
				flip: {
					left: function(a, b) {
						var c, d, e = b.within,
							f = e.offset.left + e.scrollLeft,
							g = e.width,
							i = e.isWindow ? e.scrollLeft : e.offset.left,
							j = a.left - b.collisionPosition.marginLeft,
							k = j - i,
							l = j + b.collisionWidth - g - i,
							m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
							n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
							o = -2 * b.offset[0];
						k < 0 ? (c = a.left + m + n + o + b.collisionWidth - g - f, (c < 0 || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || h(d) < l) && (a.left += m + n + o))
					},
					top: function(a, b) {
						var c, d, e = b.within,
							f = e.offset.top + e.scrollTop,
							g = e.height,
							i = e.isWindow ? e.scrollTop : e.offset.top,
							j = a.top - b.collisionPosition.marginTop,
							k = j - i,
							l = j + b.collisionHeight - g - i,
							m = "top" === b.my[1],
							n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
							o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
							p = -2 * b.offset[1];
						k < 0 ? (d = a.top + n + o + p + b.collisionHeight - g - f, (d < 0 || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || h(c) < l) && (a.top += n + o + p))
					}
				},
				flipfit: {
					left: function() {
						a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
					},
					top: function() {
						a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
					}
				}
			},
			function() {
				var b, c, d, e, g, h = document.getElementsByTagName("body")[0],
					i = document.createElement("div");
				b = document.createElement(h ? "div" : "body"), d = {
					visibility: "hidden",
					width: 0,
					height: 0,
					border: 0,
					margin: 0,
					background: "none"
				}, h && a.extend(d, {
					position: "absolute",
					left: "-1000px",
					top: "-1000px"
				});
				for (g in d) b.style[g] = d[g];
				b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && e < 11, b.innerHTML = "", c.removeChild(b)
			}()
	}(), a.ui.position
});
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./widget"], a) : a(jQuery)
}(function(a) {
	var b = !1;
	return a(document).mouseup(function() {
		b = !1
	}), a.widget("ui.mouse", {
		version: "1.11.4",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var b = this;
			this.element.bind("mousedown." + this.widgetName, function(a) {
				return b._mouseDown(a)
			}).bind("click." + this.widgetName, function(c) {
				if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(c) {
			if (!b) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
				var d = this,
					e = 1 === c.which,
					f = !("string" != typeof this.options.cancel || !c.target.nodeName) && a(c.target).closest(this.options.cancel).length;
				return !(e && !f && this._mouseCapture(c)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					d.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
					return d._mouseMove(a)
				}, this._mouseUpDelegate = function(a) {
					return d._mouseUp(a)
				}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0))
			}
		},
		_mouseMove: function(b) {
			if (this._mouseMoved) {
				if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
				if (!b.which) return this._mouseUp(b)
			}
			return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
		},
		_mouseUp: function(c) {
			return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), b = !1, !1
		},
		_mouseDistanceMet: function(a) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return !0
		}
	})
});
/*!
 * jQuery UI Sortable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
	return a.widget("ui.sortable", a.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_isOverAxis: function(a, b, c) {
			return a >= b && a < b + c
		},
		_isFloating: function(a) {
			return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
		},
		_create: function() {
			this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
		},
		_setOption: function(a, b) {
			this._super(a, b), "handle" === a && this._setHandleClassName()
		},
		_setHandleClassName: function() {
			this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), a.each(this.items, function() {
				(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
			})
		},
		_destroy: function() {
			this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
			for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
			return this
		},
		_mouseCapture: function(b, c) {
			var d = null,
				e = !1,
				f = this;
			return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(b), a(b.target).parents().each(function() {
				if (a.data(this, f.widgetName + "-item") === f) return d = a(this), !1
			}), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), !!d && (!(this.options.handle && !c && (a(this.options.handle, d).find("*").addBack().each(function() {
				this === b.target && (e = !0)
			}), !e)) && (this.currentItem = d, this._removeCurrentsFromItems(), !0))))
		},
		_mouseStart: function(b, c, d) {
			var e, f, g = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, a.extend(this.offset, {
					click: {
						left: b.pageX - this.offset.left,
						top: b.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
				for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
			return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
		},
		_mouseDrag: function(b) {
			var c, d, e, f, g = this.options,
				h = !1;
			for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - this.document.scrollTop() < g.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - g.scrollSpeed) : this.window.height() - (b.pageY - this.document.scrollTop()) < g.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + g.scrollSpeed)), b.pageX - this.document.scrollLeft() < g.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - g.scrollSpeed) : this.window.width() - (b.pageX - this.document.scrollLeft()) < g.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
				if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && !(e === this.currentItem[0] || this.placeholder[1 === f ? "next" : "prev"]()[0] === e || a.contains(this.placeholder[0], e) || "semi-dynamic" === this.options.type && a.contains(this.element[0], e))) {
					if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
					this._rearrange(b, d), this._trigger("change", b, this._uiHash());
					break
				}
			return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function(b, c) {
			if (b) {
				if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
					var d = this,
						e = this.placeholder.offset(),
						f = this.options.axis,
						g = {};
					f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
						d._clear(b)
					})
				} else this._clear(b, c);
				return !1
			}
		},
		cancel: function() {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function(b) {
			var c = this._getItemsAsjQuery(b && b.connected),
				d = [];
			return b = b || {}, a(c).each(function() {
				var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
				c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
			}), !d.length && b.key && d.push(b.key + "="), d.join("&")
		},
		toArray: function(b) {
			var c = this._getItemsAsjQuery(b && b.connected),
				d = [];
			return b = b || {}, c.each(function() {
				d.push(a(b.item || this).attr(b.attribute || "id") || "")
			}), d
		},
		_intersectsWith: function(a) {
			var b = this.positionAbs.left,
				c = b + this.helperProportions.width,
				d = this.positionAbs.top,
				e = d + this.helperProportions.height,
				f = a.left,
				g = f + a.width,
				h = a.top,
				i = h + a.height,
				j = this.offset.click.top,
				k = this.offset.click.left,
				l = "x" === this.options.axis || d + j > h && d + j < i,
				m = "y" === this.options.axis || b + k > f && b + k < g,
				n = l && m;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
		},
		_intersectsWithPointer: function(a) {
			var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height),
				c = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width),
				d = b && c,
				e = this._getDragVerticalDirection(),
				f = this._getDragHorizontalDirection();
			return !!d && (this.floating ? f && "right" === f || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
		},
		_intersectsWithSides: function(a) {
			var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
				c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
				d = this._getDragVerticalDirection(),
				e = this._getDragHorizontalDirection();
			return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b)
		},
		_getDragVerticalDirection: function() {
			var a = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== a && (a > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var a = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== a && (a > 0 ? "right" : "left")
		},
		refresh: function(a) {
			return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this
		},
		_connectWith: function() {
			var a = this.options;
			return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
		},
		_getItemsAsjQuery: function(b) {
			function c() {
				h.push(this)
			}
			var d, e, f, g, h = [],
				i = [],
				j = this._connectWith();
			if (j && b)
				for (d = j.length - 1; d >= 0; d--)
					for (f = a(j[d], this.document[0]), e = f.length - 1; e >= 0; e--) g = a.data(f[e], this.widgetFullName), g && g !== this && !g.options.disabled && i.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]);
			for (i.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), d = i.length - 1; d >= 0; d--) i[d][0].each(c);
			return a(h)
		},
		_removeCurrentsFromItems: function() {
			var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = a.grep(this.items, function(a) {
				for (var c = 0; c < b.length; c++)
					if (b[c] === a.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function(b) {
			this.items = [], this.containers = [this];
			var c, d, e, f, g, h, i, j, k = this.items,
				l = [
					[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
						item: this.currentItem
					}) : a(this.options.items, this.element), this]
				],
				m = this._connectWith();
			if (m && this.ready)
				for (c = m.length - 1; c >= 0; c--)
					for (e = a(m[c], this.document[0]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
						item: this.currentItem
					}) : a(f.options.items, f.element), f]), this.containers.push(f));
			for (c = l.length - 1; c >= 0; c--)
				for (g = l[c][1], h = l[c][0], d = 0, j = h.length; d < j; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
					item: i,
					instance: g,
					width: 0,
					height: 0,
					left: 0,
					top: 0
				})
		},
		refreshPositions: function(b) {
			this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var c, d, e, f;
			for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
				for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
			return this
		},
		_createPlaceholder: function(b) {
			b = b || this;
			var c, d = b.options;
			d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
				element: function() {
					var d = b.currentItem[0].nodeName.toLowerCase(),
						e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tbody" === d ? b._createTrPlaceholder(b.currentItem.find("tr").eq(0), a("<tr>", b.document[0]).appendTo(e)) : "tr" === d ? b._createTrPlaceholder(b.currentItem, e) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e
				},
				update: function(a, e) {
					c && !d.forcePlaceholderSize || (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
				}
			}), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
		},
		_createTrPlaceholder: function(b, c) {
			var d = this;
			b.children().each(function() {
				a("<td>&#160;</td>", d.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(c)
			})
		},
		_contactContainers: function(b) {
			var c, d, e, f, g, h, i, j, k, l, m = null,
				n = null;
			for (c = this.containers.length - 1; c >= 0; c--)
				if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
					if (this._intersectsWith(this.containers[c].containerCache)) {
						if (m && a.contains(this.containers[c].element[0], m.element[0])) continue;
						m = this.containers[c], n = c
					} else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
			if (m)
				if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1);
				else {
					for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", h = k ? "width" : "height", l = k ? "clientX" : "clientY", d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), Math.abs(b[l] - i) < e && (e = Math.abs(b[l] - i), f = this.items[d], this.direction = j ? "up" : "down"));
					if (!f && !this.options.dropOnEmpty) return;
					if (this.currentContainer === this.containers[n]) return void(this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1));
					f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1
				}
		},
		_createHelper: function(b) {
			var c = this.options,
				d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
			return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), d[0].style.width && !c.forceHelperSize || d.width(this.currentItem.width()), d[0].style.height && !c.forceHelperSize || d.height(this.currentItem.height()), d
		},
		_adjustOffsetFromHelper: function(b) {
			"string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
				left: +b[0],
				top: +b[1] || 0
			}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var b = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
				top: 0,
				left: 0
			}), {
				top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" === this.cssPosition) {
				var a = this.currentItem.position();
				return {
					top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var b, c, d, e = this.options;
			"parent" === e.containment && (e.containment = this.helper[0].parentNode), "document" !== e.containment && "window" !== e.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === e.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function(b, c) {
			c || (c = this.position);
			var d = "absolute" === b ? 1 : -1,
				e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				f = /(html|body)/i.test(e[0].tagName);
			return {
				top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
				left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
			}
		},
		_generatePosition: function(b) {
			var c, d, e = this.options,
				f = b.pageX,
				g = b.pageY,
				h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				i = /(html|body)/i.test(h[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
				top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
				left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
			}
		},
		_rearrange: function(a, b, c, d) {
			c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var e = this.counter;
			this._delay(function() {
				e === this.counter && this.refreshPositions(!d)
			})
		},
		_clear: function(a, b) {
			function c(a, b, c) {
				return function(d) {
					c._trigger(a, d, b._uiHash(b))
				}
			}
			this.reverting = !1;
			var d, e = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (d in this._storedCSS) "auto" !== this._storedCSS[d] && "static" !== this._storedCSS[d] || (this._storedCSS[d] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !b && e.push(function(a) {
					this._trigger("receive", a, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
					this._trigger("update", a, this._uiHash())
				}), this !== this.currentContainer && (b || (e.push(function(a) {
					this._trigger("remove", a, this._uiHash())
				}), e.push(function(a) {
					return function(b) {
						a._trigger("receive", b, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), e.push(function(a) {
					return function(b) {
						a._trigger("update", b, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !b) {
				for (d = 0; d < e.length; d++) e[d].call(this, a);
				this._trigger("stop", a, this._uiHash())
			}
			return this.fromOutside = !1, !this.cancelHelperRemoval
		},
		_trigger: function() {
			a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function(b) {
			var c = b || this;
			return {
				helper: c.helper,
				placeholder: c.placeholder || a([]),
				position: c.position,
				originalPosition: c.originalPosition,
				offset: c.positionAbs,
				item: c.currentItem,
				sender: b ? b.element : null
			}
		}
	})
});
/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery)
}(function(a) {
	function b(a) {
		for (var b, c; a.length && a[0] !== document;) {
			if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
			a = a.parent()
		}
		return 0
	}

	function c() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function d(b) {
		var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return b.delegate(c, "mouseout", function() {
			a(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && a(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && a(this).removeClass("ui-datepicker-next-hover")
		}).delegate(c, "mouseover", e)
	}

	function e() {
		a.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && a(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && a(this).addClass("ui-datepicker-next-hover"))
	}

	function f(b, c) {
		a.extend(b, c);
		for (var d in c) null == c[d] && (b[d] = c[d]);
		return b
	}
	a.extend(a.ui, {
		datepicker: {
			version: "1.11.4"
		}
	});
	var g;
	return a.extend(c.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(a) {
			return f(this._defaults, a || {}), this
		},
		_attachDatepicker: function(b, c) {
			var d, e, f;
			d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
		},
		_newInst: function(b, c) {
			var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: e,
				input: b,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: c,
				dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function(b, c) {
			var d = a(b);
			c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
		},
		_attachments: function(b, c) {
			var d, e, f, g = this._get(c, "appendText"),
				h = this._get(c, "isRTL");
			c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), "focus" !== d && "both" !== d || b.focus(this._showDatepicker), "button" !== d && "both" !== d || (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
				src: f,
				alt: e,
				title: e
			}) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
				src: f,
				alt: e,
				title: e
			}) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
				return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
			}))
		},
		_autoSize: function(a) {
			if (this._get(a, "autoSize") && !a.inline) {
				var b, c, d, e, f = new Date(2009, 11, 20),
					g = this._get(a, "dateFormat");
				g.match(/[DM]/) && (b = function(a) {
					for (c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, d = e);
					return d
				}, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
			}
		},
		_inlineDatepicker: function(b, c) {
			var d = a(b);
			d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function(b, c, d, e, g) {
			var h, i, j, k, l, m = this._dialogInst;
			return m || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), f(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = g ? g.length ? g : [g.pageX, g.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this
		},
		_destroyDatepicker: function(b) {
			var c, d = a(b),
				e = a.data(b, "datepicker");
			d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== c && "span" !== c || d.removeClass(this.markerClassName).empty(), g === e && (g = null))
		},
		_enableDatepicker: function(b) {
			var c, d, e = a(b),
				f = a.data(b, "datepicker");
			e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : "div" !== c && "span" !== c || (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
				return a === b ? null : a
			}))
		},
		_disableDatepicker: function(b) {
			var c, d, e = a(b),
				f = a.data(b, "datepicker");
			e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : "div" !== c && "span" !== c || (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
				return a === b ? null : a
			}), this._disabledInputs[this._disabledInputs.length] = b)
		},
		_isDisabledDatepicker: function(a) {
			if (!a) return !1;
			for (var b = 0; b < this._disabledInputs.length; b++)
				if (this._disabledInputs[b] === a) return !0;
			return !1
		},
		_getInst: function(b) {
			try {
				return a.data(b, "datepicker")
			} catch (c) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(b, c, d) {
			var e, g, h, i, j = this._getInst(b);
			return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), g = this._getDateDatepicker(b, !0), h = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), f(j.settings, e), null !== h && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, h)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, g), this._updateAlternate(j), this._updateDatepicker(j))))
		},
		_changeDatepicker: function(a, b, c) {
			this._optionDatepicker(a, b, c)
		},
		_refreshDatepicker: function(a) {
			var b = this._getInst(a);
			b && this._updateDatepicker(b)
		},
		_setDateDatepicker: function(a, b) {
			var c = this._getInst(a);
			c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
		},
		_getDateDatepicker: function(a, b) {
			var c = this._getInst(a);
			return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
		},
		_doKeyDown: function(b) {
			var c, d, e, f = a.datepicker._getInst(b.target),
				g = !0,
				h = f.dpDiv.is(".ui-datepicker-rtl");
			if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
				case 9:
					a.datepicker._hideDatepicker(), g = !1;
					break;
				case 13:
					return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
				case 27:
					a.datepicker._hideDatepicker();
					break;
				case 33:
					a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
					break;
				case 34:
					a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
					break;
				case 35:
					(b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
					break;
				case 36:
					(b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
					break;
				case 37:
					(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
					break;
				case 38:
					(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
					break;
				case 39:
					(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
					break;
				case 40:
					(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
					break;
				default:
					g = !1
			} else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
			g && (b.preventDefault(), b.stopPropagation())
		},
		_doKeyPress: function(b) {
			var c, d, e = a.datepicker._getInst(b.target);
			if (a.datepicker._get(e, "constrainInput")) return c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || d < " " || !c || c.indexOf(d) > -1
		},
		_doKeyUp: function(b) {
			var c, d = a.datepicker._getInst(b.target);
			if (d.input.val() !== d.lastVal) try {
				c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
			} catch (e) {}
			return !0
		},
		_showDatepicker: function(c) {
			if (c = c.target || c, "input" !== c.nodeName.toLowerCase() && (c = a("input", c.parentNode)[0]), !a.datepicker._isDisabledDatepicker(c) && a.datepicker._lastInput !== c) {
				var d, e, g, h, i, j, k;
				d = a.datepicker._getInst(c), a.datepicker._curInst && a.datepicker._curInst !== d && (a.datepicker._curInst.dpDiv.stop(!0, !0), d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(d, "beforeShow"), g = e ? e.apply(c, [c, d]) : {}, g !== !1 && (f(d.settings, g), d.lastVal = null, a.datepicker._lastInput = c, a.datepicker._setDateFromField(d), a.datepicker._inDialog && (c.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(c), a.datepicker._pos[1] += c.offsetHeight), h = !1, a(c).parents().each(function() {
					return h |= "fixed" === a(this).css("position"), !h
				}), i = {
					left: a.datepicker._pos[0],
					top: a.datepicker._pos[1]
				}, a.datepicker._pos = null, d.dpDiv.empty(), d.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), a.datepicker._updateDatepicker(d), i = a.datepicker._checkOffset(d, i, h), d.dpDiv.css({
					position: a.datepicker._inDialog && a.blockUI ? "static" : h ? "fixed" : "absolute",
					display: "none",
					left: i.left + "px",
					top: i.top + "px"
				}), d.inline || (j = a.datepicker._get(d, "showAnim"), k = a.datepicker._get(d, "duration"), d.dpDiv.css("z-index", b(a(c)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? d.dpDiv.show(j, a.datepicker._get(d, "showOptions"), k) : d.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(d) && d.input.focus(), a.datepicker._curInst = d))
			}
		},
		_updateDatepicker: function(b) {
			this.maxRows = 4, g = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
			var c, d = this._getNumberOfMonths(b),
				f = d[1],
				h = 17,
				i = b.dpDiv.find("." + this._dayOverClass + " a");
			i.length > 0 && e.apply(i.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", h * f + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
				c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function(a) {
			return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
		},
		_checkOffset: function(b, c, d) {
			var e = b.dpDiv.outerWidth(),
				f = b.dpDiv.outerHeight(),
				g = b.input ? b.input.outerWidth() : 0,
				h = b.input ? b.input.outerHeight() : 0,
				i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
				j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
			return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
		},
		_findPos: function(b) {
			for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
			return c = a(b).offset(), [c.left, c.top]
		},
		_hideDatepicker: function(b) {
			var c, d, e, f, g = this._curInst;
			!g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() {
				a.datepicker._tidyDialog(g)
			}, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function(a) {
			a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(b) {
			if (a.datepicker._curInst) {
				var c = a(b.target),
					d = a.datepicker._getInst(c[0]);
				(c[0].id === a.datepicker._mainDivId || 0 !== c.parents("#" + a.datepicker._mainDivId).length || c.hasClass(a.datepicker.markerClassName) || c.closest("." + a.datepicker._triggerClass).length || !a.datepicker._datepickerShowing || a.datepicker._inDialog && a.blockUI) && (!c.hasClass(a.datepicker.markerClassName) || a.datepicker._curInst === d) || a.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(b, c, d) {
			var e = a(b),
				f = this._getInst(e[0]);
			this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
		},
		_gotoToday: function(b) {
			var c, d = a(b),
				e = this._getInst(d[0]);
			this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
		},
		_selectMonthYear: function(b, c, d) {
			var e = a(b),
				f = this._getInst(e[0]);
			f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
		},
		_selectDay: function(b, c, d, e) {
			var f, g = a(b);
			a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
		},
		_clearDate: function(b) {
			var c = a(b);
			this._selectDate(c, "")
		},
		_selectDate: function(b, c) {
			var d, e = a(b),
				f = this._getInst(e[0]);
			c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function(b) {
			var c, d, e, f = this._get(b, "altField");
			f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
				a(this).val(e)
			}))
		},
		noWeekends: function(a) {
			var b = a.getDay();
			return [b > 0 && b < 6, ""]
		},
		iso8601Week: function(a) {
			var b, c = new Date(a.getTime());
			return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
		},
		parseDate: function(b, c, d) {
			if (null == b || null == c) throw "Invalid arguments";
			if (c = "object" == typeof c ? c.toString() : c + "", "" === c) return null;
			var e, f, g, h, i = 0,
				j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
				l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
				m = (d ? d.dayNames : null) || this._defaults.dayNames,
				n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
				o = (d ? d.monthNames : null) || this._defaults.monthNames,
				p = -1,
				q = -1,
				r = -1,
				s = -1,
				t = !1,
				u = function(a) {
					var c = e + 1 < b.length && b.charAt(e + 1) === a;
					return c && e++, c
				},
				v = function(a) {
					var b = u(a),
						d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
						e = "y" === a ? d : 1,
						f = new RegExp("^\\d{" + e + "," + d + "}"),
						g = c.substring(i).match(f);
					if (!g) throw "Missing number at position " + i;
					return i += g[0].length, parseInt(g[0], 10)
				},
				w = function(b, d, e) {
					var f = -1,
						g = a.map(u(b) ? e : d, function(a, b) {
							return [
								[b, a]
							]
						}).sort(function(a, b) {
							return -(a[1].length - b[1].length)
						});
					if (a.each(g, function(a, b) {
							var d = b[1];
							if (c.substr(i, d.length).toLowerCase() === d.toLowerCase()) return f = b[0], i += d.length, !1
						}), f !== -1) return f + 1;
					throw "Unknown name at position " + i
				},
				x = function() {
					if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
					i++
				};
			for (e = 0; e < b.length; e++)
				if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
				else switch (b.charAt(e)) {
					case "d":
						r = v("d");
						break;
					case "D":
						w("D", l, m);
						break;
					case "o":
						s = v("o");
						break;
					case "m":
						q = v("m");
						break;
					case "M":
						q = w("M", n, o);
						break;
					case "y":
						p = v("y");
						break;
					case "@":
						h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
						break;
					case "!":
						h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
						break;
					case "'":
						u("'") ? x() : t = !0;
						break;
					default:
						x()
				}
			if (i < c.length && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
			if (p === -1 ? p = (new Date).getFullYear() : p < 100 && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p <= k ? 0 : -100)), s > -1)
				for (q = 1, r = s;;) {
					if (f = this._getDaysInMonth(p, q - 1), r <= f) break;
					q++, r -= f
				}
			if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
			return h
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
		formatDate: function(a, b, c) {
			if (!b) return "";
			var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
				f = (c ? c.dayNames : null) || this._defaults.dayNames,
				g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
				h = (c ? c.monthNames : null) || this._defaults.monthNames,
				i = function(b) {
					var c = d + 1 < a.length && a.charAt(d + 1) === b;
					return c && d++, c
				},
				j = function(a, b, c) {
					var d = "" + b;
					if (i(a))
						for (; d.length < c;) d = "0" + d;
					return d
				},
				k = function(a, b, c, d) {
					return i(a) ? d[b] : c[b]
				},
				l = "",
				m = !1;
			if (b)
				for (d = 0; d < a.length; d++)
					if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
					else switch (a.charAt(d)) {
						case "d":
							l += j("d", b.getDate(), 2);
							break;
						case "D":
							l += k("D", b.getDay(), e, f);
							break;
						case "o":
							l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							l += j("m", b.getMonth() + 1, 2);
							break;
						case "M":
							l += k("M", b.getMonth(), g, h);
							break;
						case "y":
							l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
							break;
						case "@":
							l += b.getTime();
							break;
						case "!":
							l += 1e4 * b.getTime() + this._ticksTo1970;
							break;
						case "'":
							i("'") ? l += "'" : m = !0;
							break;
						default:
							l += a.charAt(d)
					}
			return l
		},
		_possibleChars: function(a) {
			var b, c = "",
				d = !1,
				e = function(c) {
					var d = b + 1 < a.length && a.charAt(b + 1) === c;
					return d && b++, d
				};
			for (b = 0; b < a.length; b++)
				if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
				else switch (a.charAt(b)) {
					case "d":
					case "m":
					case "y":
					case "@":
						c += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						e("'") ? c += "'" : d = !0;
						break;
					default:
						c += a.charAt(b)
				}
			return c
		},
		_get: function(a, b) {
			return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
		},
		_setDateFromField: function(a, b) {
			if (a.input.val() !== a.lastVal) {
				var c = this._get(a, "dateFormat"),
					d = a.lastVal = a.input ? a.input.val() : null,
					e = this._getDefaultDate(a),
					f = e,
					g = this._getFormatConfig(a);
				try {
					f = this.parseDate(c, d, g) || e
				} catch (h) {
					d = b ? "" : d
				}
				a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
			}
		},
		_getDefaultDate: function(a) {
			return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
		},
		_determineDate: function(b, c, d) {
			var e = function(a) {
					var b = new Date;
					return b.setDate(b.getDate() + a), b
				},
				f = function(c) {
					try {
						return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
					} catch (d) {}
					for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
						switch (j[2] || "d") {
							case "d":
							case "D":
								h += parseInt(j[1], 10);
								break;
							case "w":
							case "W":
								h += 7 * parseInt(j[1], 10);
								break;
							case "m":
							case "M":
								g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
								break;
							case "y":
							case "Y":
								f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
						}
						j = i.exec(c)
					}
					return new Date(f, g, h)
				},
				g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
			return g = g && "Invalid Date" === g.toString() ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
		},
		_daylightSavingAdjust: function(a) {
			return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
		},
		_setDate: function(a, b, c) {
			var d = !b,
				e = a.selectedMonth,
				f = a.selectedYear,
				g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
			a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
		},
		_getDate: function(a) {
			var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
			return b
		},
		_attachHandlers: function(b) {
			var c = this._get(b, "stepMonths"),
				d = "#" + b.id.replace(/\\\\/g, "\\");
			b.dpDiv.find("[data-handler]").map(function() {
				var b = {
					prev: function() {
						a.datepicker._adjustDate(d, -c, "M")
					},
					next: function() {
						a.datepicker._adjustDate(d, +c, "M")
					},
					hide: function() {
						a.datepicker._hideDatepicker()
					},
					today: function() {
						a.datepicker._gotoToday(d)
					},
					selectDay: function() {
						return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function() {
						return a.datepicker._selectMonthYear(d, this, "M"), !1
					},
					selectYear: function() {
						return a.datepicker._selectMonthYear(d, this, "Y"), !1
					}
				};
				a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
				P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
				Q = this._get(a, "isRTL"),
				R = this._get(a, "showButtonPanel"),
				S = this._get(a, "hideIfNoPrevNext"),
				T = this._get(a, "navigationAsDateFormat"),
				U = this._getNumberOfMonths(a),
				V = this._get(a, "showCurrentAtPos"),
				W = this._get(a, "stepMonths"),
				X = 1 !== U[0] || 1 !== U[1],
				Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
				Z = this._getMinMaxDate(a, "min"),
				$ = this._getMinMaxDate(a, "max"),
				_ = a.drawMonth - V,
				aa = a.drawYear;
			if (_ < 0 && (_ += 12, aa--), $)
				for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && b < Z ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, _ < 0 && (_ = 11, aa--);
			for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; w < U[0]; w++) {
				for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
					if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
						if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
							case 0:
								B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
								break;
							case U[1] - 1:
								B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
								break;
							default:
								B += " ui-datepicker-group-middle", A = ""
						}
						B += "'>"
					}
					for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; v < 7; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
					for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; J < H; J++) {
						for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; v < 7; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && I < Z || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
						B += K + "</tr>"
					}
					_++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
				}
				u += x
			}
			return u += j, a._keyEvent = !1, u
		},
		_generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
			var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
				r = this._get(a, "changeYear"),
				s = this._get(a, "showMonthAfterYear"),
				t = "<div class='ui-datepicker-title'>",
				u = "";
			if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
			else {
				for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; k < 12; k++)(!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
				u += "</select>"
			}
			if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
				if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
				else {
					for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
							var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
							return isNaN(b) ? m : b
						}, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; o <= p; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
					a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
				}
			return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
		},
		_adjustInstDate: function(a, b, c) {
			var d = a.drawYear + ("Y" === c ? b : 0),
				e = a.drawMonth + ("M" === c ? b : 0),
				f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
				g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
			a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), "M" !== c && "Y" !== c || this._notifyChange(a)
		},
		_restrictMinMax: function(a, b) {
			var c = this._getMinMaxDate(a, "min"),
				d = this._getMinMaxDate(a, "max"),
				e = c && b < c ? c : b;
			return d && e > d ? d : e
		},
		_notifyChange: function(a) {
			var b = this._get(a, "onChangeMonthYear");
			b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
		},
		_getNumberOfMonths: function(a) {
			var b = this._get(a, "numberOfMonths");
			return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
		},
		_getMinMaxDate: function(a, b) {
			return this._determineDate(a, this._get(a, b + "Date"), null)
		},
		_getDaysInMonth: function(a, b) {
			return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
		},
		_getFirstDayOfMonth: function(a, b) {
			return new Date(a, b, 1).getDay()
		},
		_canAdjustMonth: function(a, b, c, d) {
			var e = this._getNumberOfMonths(a),
				f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));
			return b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
		},
		_isInRange: function(a, b) {
			var c, d, e = this._getMinMaxDate(a, "min"),
				f = this._getMinMaxDate(a, "max"),
				g = null,
				h = null,
				i = this._get(a, "yearRange");
			return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h)
		},
		_getFormatConfig: function(a) {
			var b = this._get(a, "shortYearCutoff");
			return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
				shortYearCutoff: b,
				dayNamesShort: this._get(a, "dayNamesShort"),
				dayNames: this._get(a, "dayNames"),
				monthNamesShort: this._get(a, "monthNamesShort"),
				monthNames: this._get(a, "monthNames")
			}
		},
		_formatDate: function(a, b, c, d) {
			b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
			var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
			return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
		}
	}), a.fn.datepicker = function(b) {
		if (!this.length) return this;
		a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
		var c = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
			"string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
		}) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
	}, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.11.4", a.datepicker
});
/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], a) : a(jQuery)
}(function(a) {
	return a.widget("ui.menu", {
		version: "1.11.4",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			items: "> *",
			menus: "ul",
			position: {
				my: "left-1 top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function() {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item": function(a) {
					a.preventDefault()
				},
				"click .ui-menu-item": function(b) {
					var c = a(b.target);
					!this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function(b) {
					if (!this.previousFilter) {
						var c = a(b.currentTarget);
						c.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
					}
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(a, b) {
					var c = this.active || this.element.find(this.options.items).eq(0);
					b || this.focus(a, c)
				},
				blur: function(b) {
					this._delay(function() {
						a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function(a) {
					this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
				}
			})
		},
		_destroy: function() {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
				var b = a(this);
				b.data("ui-menu-submenu-carat") && b.remove()
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function(b) {
			var c, d, e, f, g = !0;
			switch (b.keyCode) {
				case a.ui.keyCode.PAGE_UP:
					this.previousPage(b);
					break;
				case a.ui.keyCode.PAGE_DOWN:
					this.nextPage(b);
					break;
				case a.ui.keyCode.HOME:
					this._move("first", "first", b);
					break;
				case a.ui.keyCode.END:
					this._move("last", "last", b);
					break;
				case a.ui.keyCode.UP:
					this.previous(b);
					break;
				case a.ui.keyCode.DOWN:
					this.next(b);
					break;
				case a.ui.keyCode.LEFT:
					this.collapse(b);
					break;
				case a.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
					break;
				case a.ui.keyCode.ENTER:
				case a.ui.keyCode.SPACE:
					this._activate(b);
					break;
				case a.ui.keyCode.ESCAPE:
					this.collapse(b);
					break;
				default:
					g = !1, d = this.previousFilter || "", e = String.fromCharCode(b.keyCode), f = !1, clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && c.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
						delete this.previousFilter
					}, 1e3)) : delete this.previousFilter
			}
			g && b.preventDefault()
		},
		_activate: function(a) {
			this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
		},
		refresh: function() {
			var b, c, d = this,
				e = this.options.icons.submenu,
				f = this.element.find(this.options.menus);
			this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function() {
				var b = a(this),
					c = b.parent(),
					d = a("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", !0);
				c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
			}), b = f.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
				var b = a(this);
				d._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider")
			}), c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
				tabIndex: -1,
				role: this._itemRole()
			}), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		_setOption: function(a, b) {
			"icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this._super(a, b)
		},
		focus: function(a, b) {
			var c, d;
			this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
				this._close()
			}, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
				item: b
			})
		},
		_scrollIntoView: function(b) {
			var c, d, e, f, g, h;
			this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), e < 0 ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
		},
		blur: function(a, b) {
			b || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
				item: this.active
			}))
		},
		_startOpening: function(a) {
			clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
				this._close(), this._open(a)
			}, this.delay))
		},
		_open: function(b) {
			var c = a.extend({ of : this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
		},
		collapseAll: function(b, c) {
			clearTimeout(this.timer), this.timer = this._delay(function() {
				var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
				d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
			}, this.delay)
		},
		_close: function(a) {
			a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
		},
		_closeOnDocumentClick: function(b) {
			return !a(b.target).closest(".ui-menu").length
		},
		_isDivider: function(a) {
			return !/[^\-\u2014\u2013\s]/.test(a.text())
		},
		collapse: function(a) {
			var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			b && b.length && (this._close(), this.focus(a, b))
		},
		expand: function(a) {
			var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
			b && b.length && (this._open(b.parent()), this._delay(function() {
				this.focus(a, b)
			}))
		},
		next: function(a) {
			this._move("next", "first", a)
		},
		previous: function(a) {
			this._move("prev", "last", a)
		},
		isFirstItem: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(a, b, c) {
			var d;
			this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
		},
		nextPage: function(b) {
			var c, d, e;
			return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
				return c = a(this), c.offset().top - d - e < 0
			}), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b)
		},
		previousPage: function(b) {
			var c, d, e;
			return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
				return c = a(this), c.offset().top - d + e > 0
			}), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
		},
		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(b) {
			this.active = this.active || a(b.target).closest(".ui-menu-item");
			var c = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
		},
		_filterMenuItems: function(b) {
			var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
				d = new RegExp("^" + c, "i");
			return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
				return d.test(a.trim(a(this).text()))
			})
		}
	})
});
window.wp = window.wp || {},
	function(a, b) {
		"use strict";

		function c(a, c) {
			e(), a = b("<p>").html(a).text(), h === a && (a += "\xa0"), h = a, g && "assertive" === c ? g.text(a) : f && f.text(a)
		}

		function d(a) {
			a = a || "polite";
			var c = b("<div>", {
				id: "wp-a11y-speak-" + a,
				"aria-live": a,
				"aria-relevant": "additions text",
				"aria-atomic": "true",
				"class": "screen-reader-text wp-a11y-speak-region"
			});
			return b(document.body).append(c), c
		}

		function e() {
			b(".wp-a11y-speak-region").text("")
		}
		var f, g, h = "";
		b(document).ready(function() {
			f = b("#wp-a11y-speak-polite"), g = b("#wp-a11y-speak-assertive"), f.length || (f = d("polite")), g.length || (g = d("assertive"))
		}), a.a11y = a.a11y || {}, a.a11y.speak = c
	}(window.wp, window.jQuery);
/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], a) : a(jQuery)
}(function(a) {
	return a.widget("ui.autocomplete", {
		version: "1.11.4",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		requestIndex: 0,
		pending: 0,
		_create: function() {
			var b, c, d, e = this.element[0].nodeName.toLowerCase(),
				f = "textarea" === e,
				g = "input" === e;
			this.isMultiLine = !!f || !g && this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
				keydown: function(e) {
					if (this.element.prop("readOnly")) return b = !0, d = !0, void(c = !0);
					b = !1, d = !1, c = !1;
					var f = a.ui.keyCode;
					switch (e.keyCode) {
						case f.PAGE_UP:
							b = !0, this._move("previousPage", e);
							break;
						case f.PAGE_DOWN:
							b = !0, this._move("nextPage", e);
							break;
						case f.UP:
							b = !0, this._keyEvent("previous", e);
							break;
						case f.DOWN:
							b = !0, this._keyEvent("next", e);
							break;
						case f.ENTER:
							this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
							break;
						case f.TAB:
							this.menu.active && this.menu.select(e);
							break;
						case f.ESCAPE:
							this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
							break;
						default:
							c = !0, this._searchTimeout(e)
					}
				},
				keypress: function(d) {
					if (b) return b = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || d.preventDefault());
					if (!c) {
						var e = a.ui.keyCode;
						switch (d.keyCode) {
							case e.PAGE_UP:
								this._move("previousPage", d);
								break;
							case e.PAGE_DOWN:
								this._move("nextPage", d);
								break;
							case e.UP:
								this._keyEvent("previous", d);
								break;
							case e.DOWN:
								this._keyEvent("next", d)
						}
					}
				},
				input: function(a) {
					return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
				},
				focus: function() {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function(a) {
					return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
				}
			}), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
				role: null
			}).hide().menu("instance"), this._on(this.menu.element, {
				mousedown: function(b) {
					b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
						delete this.cancelBlur
					});
					var c = this.menu.element[0];
					a(b.target).closest(".ui-menu-item").length || this._delay(function() {
						var b = this;
						this.document.one("mousedown", function(d) {
							d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
						})
					})
				},
				menufocus: function(b, c) {
					var d, e;
					return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
						a(b.target).trigger(b.originalEvent)
					})) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
						item: e
					}) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, void(d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))))
				},
				menuselect: function(a, b) {
					var c = b.item.data("ui-autocomplete-item"),
						d = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
						this.previous = d, this.selectedItem = c
					})), !1 !== this._trigger("select", a, {
						item: c
					}) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
				}
			}), this.liveRegion = a("<span>", {
				role: "status",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function() {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function(a, b) {
			this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
		},
		_appendTo: function() {
			var b = this.options.appendTo;
			return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
		},
		_initSource: function() {
			var b, c, d = this;
			a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
				d(a.ui.autocomplete.filter(b, c.term))
			}) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
				d.xhr && d.xhr.abort(), d.xhr = a.ajax({
					url: c,
					data: b,
					dataType: "json",
					success: function(a) {
						e(a)
					},
					error: function() {
						e([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function(a) {
			clearTimeout(this.searching), this.searching = this._delay(function() {
				var b = this.term === this._value(),
					c = this.menu.element.is(":visible"),
					d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
				b && (!b || c || d) || (this.selectedItem = null, this.search(null, a))
			}, this.options.delay)
		},
		search: function(a, b) {
			return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
		},
		_search: function(a) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: a
			}, this._response())
		},
		_response: function() {
			var b = ++this.requestIndex;
			return a.proxy(function(a) {
				b === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
			}, this)
		},
		__response: function(a) {
			a && (a = this._normalize(a)), this._trigger("response", null, {
				content: a
			}), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
		},
		close: function(a) {
			this.cancelSearch = !0, this._close(a)
		},
		_close: function(a) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
		},
		_change: function(a) {
			this.previous !== this._value() && this._trigger("change", a, {
				item: this.selectedItem
			})
		},
		_normalize: function(b) {
			return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
				return "string" == typeof b ? {
					label: b,
					value: b
				} : a.extend({}, b, {
					label: b.label || b.value,
					value: b.value || b.label
				})
			})
		},
		_suggest: function(b) {
			var c = this.menu.element.empty();
			this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({ of : this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function() {
			var a = this.menu.element;
			a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(b, c) {
			var d = this;
			a.each(c, function(a, c) {
				d._renderItemData(b, c)
			})
		},
		_renderItemData: function(a, b) {
			return this._renderItem(a, b).data("ui-autocomplete-item", b)
		},
		_renderItem: function(b, c) {
			return a("<li>").text(c.label).appendTo(b)
		},
		_move: function(a, b) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
		},
		widget: function() {
			return this.menu.element
		},
		_value: function() {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(a, b) {
			this.isMultiLine && !this.menu.element.is(":visible") || (this._move(a, b), b.preventDefault())
		}
	}), a.extend(a.ui.autocomplete, {
		escapeRegex: function(a) {
			return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(b, c) {
			var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
			return a.grep(b, function(a) {
				return d.test(a.label || a.value || a)
			})
		}
	}), a.widget("ui.autocomplete", a.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function(a) {
					return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(b) {
			var c;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion))
		}
	}), a.ui.autocomplete
});
/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
	return a.widget("ui.resizable", a.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_num: function(a) {
			return parseInt(a, 10) || 0
		},
		_isNumber: function(a) {
			return !isNaN(parseInt(a, 10))
		},
		_hasScroll: function(b, c) {
			if ("hidden" === a(b).css("overflow")) return !1;
			var d = c && "left" === c ? "scrollLeft" : "scrollTop",
				e = !1;
			return b[d] > 0 || (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
		},
		_create: function() {
			var b, c, d, e, f, g = this,
				h = this.options;
			if (this.element.addClass("ui-resizable"), a.extend(this, {
					_aspectRatio: !!h.aspectRatio,
					aspectRatio: h.aspectRatio,
					originalElement: this.element,
					_proportionallyResizeElements: [],
					_helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
				}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				}), this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				})), this.originalElement.css({
					margin: this.originalElement.css("margin")
				}), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} : "e,s,se"), this._handles = a(), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; c < b.length; c++) d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
					zIndex: h.zIndex
				}), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
			this._renderAxis = function(b) {
				var c, d, e, f;
				b = b || this.element;
				for (c in this.handles) this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), this._on(this.handles[c], {
					mousedown: g._mouseDown
				})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c])
			}, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
				g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
			}), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
				h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
			}).mouseleave(function() {
				h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var b, c = function(b) {
				a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
				position: b.css("position"),
				width: b.outerWidth(),
				height: b.outerHeight(),
				top: b.css("top"),
				left: b.css("left")
			}).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
		},
		_mouseCapture: function(b) {
			var c, d, e = !1;
			for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
			return !this.options.disabled && e
		},
		_mouseStart: function(b) {
			var c, d, e, f = this.options,
				g = this.element;
			return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: c,
				top: d
			}, this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: g.width(),
				height: g.height()
			}, this.originalSize = this._helper ? {
				width: g.outerWidth(),
				height: g.outerHeight()
			} : {
				width: g.width(),
				height: g.height()
			}, this.sizeDiff = {
				width: g.outerWidth() - g.width(),
				height: g.outerHeight() - g.height()
			}, this.originalPosition = {
				left: c,
				top: d
			}, this.originalMousePosition = {
				left: b.pageX,
				top: b.pageY
			}, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), g.addClass("ui-resizable-resizing"), this._propagate("start", b), !0
		},
		_mouseDrag: function(b) {
			var c, d, e = this.originalMousePosition,
				f = this.axis,
				g = b.pageX - e.left || 0,
				h = b.pageY - e.top || 0,
				i = this._change[f];
			return this._updatePrevProperties(), !!i && (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1)
		},
		_mouseStop: function(b) {
			this.resizing = !1;
			var c, d, e, f, g, h, i, j = this.options,
				k = this;
			return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
				width: k.helper.width() - f,
				height: k.helper.height() - e
			}, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
				top: i,
				left: h
			})), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
		},
		_updatePrevProperties: function() {
			this.prevPosition = {
				top: this.position.top,
				left: this.position.left
			}, this.prevSize = {
				width: this.size.width,
				height: this.size.height
			}
		},
		_applyChanges: function() {
			var a = {};
			return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
		},
		_updateVirtualBoundaries: function(a) {
			var b, c, d, e, f, g = this.options;
			f = {
				minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
				maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
				minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
				maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
			}, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), c < f.maxWidth && (f.maxWidth = c), e < f.maxHeight && (f.maxHeight = e)), this._vBoundaries = f
		},
		_updateCache: function(a) {
			this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width)
		},
		_updateRatio: function(a) {
			var b = this.position,
				c = this.size,
				d = this.axis;
			return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
		},
		_respectSize: function(a) {
			var b = this._vBoundaries,
				c = this.axis,
				d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
				e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
				f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
				g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
				h = this.originalPosition.left + this.originalSize.width,
				i = this.position.top + this.size.height,
				j = /sw|nw|w/.test(c),
				k = /nw|ne|n/.test(c);
			return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
		},
		_getPaddingPlusBorderDimensions: function(a) {
			for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; b < 4; b++) c[b] = parseInt(d[b], 10) || 0, c[b] += parseInt(e[b], 10) || 0;
			return {
				height: c[0] + c[2],
				width: c[1] + c[3]
			}
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length)
				for (var a, b = 0, c = this.helper || this.element; b < this._proportionallyResizeElements.length; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
					height: c.height() - this.outerDimensions.height || 0,
					width: c.width() - this.outerDimensions.width || 0
				})
		},
		_renderProxy: function() {
			var b = this.element,
				c = this.options;
			this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++c.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function(a, b) {
				return {
					width: this.originalSize.width + b
				}
			},
			w: function(a, b) {
				var c = this.originalSize,
					d = this.originalPosition;
				return {
					left: d.left + b,
					width: c.width - b
				}
			},
			n: function(a, b, c) {
				var d = this.originalSize,
					e = this.originalPosition;
				return {
					top: e.top + c,
					height: d.height - c
				}
			},
			s: function(a, b, c) {
				return {
					height: this.originalSize.height + c
				}
			},
			se: function(b, c, d) {
				return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
			},
			sw: function(b, c, d) {
				return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
			},
			ne: function(b, c, d) {
				return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
			},
			nw: function(b, c, d) {
				return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
			}
		},
		_propagate: function(b, c) {
			a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), a.ui.plugin.add("resizable", "animate", {
		stop: function(b) {
			var c = a(this).resizable("instance"),
				d = c.options,
				e = c._proportionallyResizeElements,
				f = e.length && /textarea/i.test(e[0].nodeName),
				g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
				h = f ? 0 : c.sizeDiff.width,
				i = {
					width: c.size.width - h,
					height: c.size.height - g
				},
				j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
				k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
			c.element.animate(a.extend(i, k && j ? {
				top: k,
				left: j
			} : {}), {
				duration: d.animateDuration,
				easing: d.animateEasing,
				step: function() {
					var d = {
						width: parseInt(c.element.css("width"), 10),
						height: parseInt(c.element.css("height"), 10),
						top: parseInt(c.element.css("top"), 10),
						left: parseInt(c.element.css("left"), 10)
					};
					e && e.length && a(e[0]).css({
						width: d.width,
						height: d.height
					}), c._updateCache(d), c._propagate("resize", b)
				}
			})
		}
	}), a.ui.plugin.add("resizable", "containment", {
		start: function() {
			var b, c, d, e, f, g, h, i = a(this).resizable("instance"),
				j = i.options,
				k = i.element,
				l = j.containment,
				m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
			m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
				left: 0,
				top: 0
			}, i.containerPosition = {
				left: 0,
				top: 0
			}, i.parentData = {
				element: a(document),
				left: 0,
				top: 0,
				width: a(document).width(),
				height: a(document).height() || document.body.parentNode.scrollHeight
			}) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, d) {
				c[a] = i._num(b.css("padding" + d))
			}), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
				height: b.innerHeight() - c[3],
				width: b.innerWidth() - c[1]
			}, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = {
				element: m,
				left: d.left,
				top: d.top,
				width: g,
				height: h
			}))
		},
		resize: function(b) {
			var c, d, e, f, g = a(this).resizable("instance"),
				h = g.options,
				i = g.containerOffset,
				j = g.position,
				k = g._aspectRatio || b.shiftKey,
				l = {
					top: 0,
					left: 0
				},
				m = g.containerElement,
				n = !0;
			m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height)
		},
		stop: function() {
			var b = a(this).resizable("instance"),
				c = b.options,
				d = b.containerOffset,
				e = b.containerPosition,
				f = b.containerElement,
				g = a(b.helper),
				h = g.offset(),
				i = g.outerWidth() - b.sizeDiff.width,
				j = g.outerHeight() - b.sizeDiff.height;
			b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
				left: h.left - e.left - d.left,
				width: i,
				height: j
			}), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
				left: h.left - e.left - d.left,
				width: i,
				height: j
			})
		}
	}), a.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var b = a(this).resizable("instance"),
				c = b.options;
			a(c.alsoResize).each(function() {
				var b = a(this);
				b.data("ui-resizable-alsoresize", {
					width: parseInt(b.width(), 10),
					height: parseInt(b.height(), 10),
					left: parseInt(b.css("left"), 10),
					top: parseInt(b.css("top"), 10)
				})
			})
		},
		resize: function(b, c) {
			var d = a(this).resizable("instance"),
				e = d.options,
				f = d.originalSize,
				g = d.originalPosition,
				h = {
					height: d.size.height - f.height || 0,
					width: d.size.width - f.width || 0,
					top: d.position.top - g.top || 0,
					left: d.position.left - g.left || 0
				};
			a(e.alsoResize).each(function() {
				var b = a(this),
					d = a(this).data("ui-resizable-alsoresize"),
					e = {},
					f = b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
				a.each(f, function(a, b) {
					var c = (d[b] || 0) + (h[b] || 0);
					c && c >= 0 && (e[b] = c || null)
				}), b.css(e)
			})
		},
		stop: function() {
			a(this).removeData("resizable-alsoresize")
		}
	}), a.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var b = a(this).resizable("instance"),
				c = b.options,
				d = b.size;
			b.ghost = b.originalElement.clone(), b.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: d.height,
				width: d.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
		},
		resize: function() {
			var b = a(this).resizable("instance");
			b.ghost && b.ghost.css({
				position: "relative",
				height: b.size.height,
				width: b.size.width
			})
		},
		stop: function() {
			var b = a(this).resizable("instance");
			b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
		}
	}), a.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var b, c = a(this).resizable("instance"),
				d = c.options,
				e = c.size,
				f = c.originalSize,
				g = c.originalPosition,
				h = c.axis,
				i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
				j = i[0] || 1,
				k = i[1] || 1,
				l = Math.round((e.width - f.width) / j) * j,
				m = Math.round((e.height - f.height) / k) * k,
				n = f.width + l,
				o = f.height + m,
				p = d.maxWidth && d.maxWidth < n,
				q = d.maxHeight && d.maxHeight < o,
				r = d.minWidth && d.minWidth > n,
				s = d.minHeight && d.minHeight > o;
			d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((o - k <= 0 || n - j <= 0) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n))
		}
	}), a.ui.resizable
});
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
	return a.widget("ui.draggable", a.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			"original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
		},
		_setOption: function(a, b) {
			this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
		},
		_destroy: function() {
			return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
		},
		_mouseCapture: function(b) {
			var c = this.options;
			return this._blurActiveElement(b), !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(b), !!this.handle && (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0))
		},
		_blockFrames: function(b) {
			this.iframeBlocks = this.document.find(b).map(function() {
				var b = a(this);
				return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_blurActiveElement: function(b) {
			var c = this.document[0];
			if (this.handleElement.is(b.target)) try {
				c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
			} catch (d) {}
		},
		_mouseStart: function(b) {
			var c = this.options;
			return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
				return "fixed" === a(this).css("position")
			}).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
		},
		_refreshOffsets: function(a) {
			this.offset = {
				top: this.positionAbs.top - this.margins.top,
				left: this.positionAbs.left - this.margins.left,
				scroll: !1,
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}, this.offset.click = {
				left: a.pageX - this.offset.left,
				top: a.pageY - this.offset.top
			}
		},
		_mouseDrag: function(b, c) {
			if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
				var d = this._uiHash();
				if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
				this.position = d.position
			}
			return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
		},
		_mouseStop: function(b) {
			var c = this,
				d = !1;
			return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				c._trigger("stop", b) !== !1 && c._clear()
			}) : this._trigger("stop", b) !== !1 && this._clear(), !1
		},
		_mouseUp: function(b) {
			return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function(b) {
			return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length
		},
		_setHandleClassName: function() {
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
		},
		_removeHandleClassName: function() {
			this.handleElement.removeClass("ui-draggable-handle")
		},
		_createHelper: function(b) {
			var c = this.options,
				d = a.isFunction(c.helper),
				e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
			return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
		},
		_setPositionRelative: function() {
			/^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
		},
		_adjustOffsetFromHelper: function(b) {
			"string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
				left: +b[0],
				top: +b[1] || 0
			}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
		},
		_isRootNode: function(a) {
			return /(html|body)/i.test(a.tagName) || a === this.document[0]
		},
		_getParentOffset: function() {
			var b = this.offsetParent.offset(),
				c = this.document[0];
			return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
				top: 0,
				left: 0
			}), {
				top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var a = this.element.position(),
				b = this._isRootNode(this.scrollParent[0]);
			return {
				top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
				left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var b, c, d, e = this.options,
				f = this.document[0];
			return this.relativeContainer = null, e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void(this.containment = null)
		},
		_convertPositionTo: function(a, b) {
			b || (b = this.position);
			var c = "absolute" === a ? 1 : -1,
				d = this._isRootNode(this.scrollParent[0]);
			return {
				top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
				left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
			}
		},
		_generatePosition: function(a, b) {
			var c, d, e, f, g = this.options,
				h = this._isRootNode(this.scrollParent[0]),
				i = a.pageX,
				j = a.pageY;
			return h && this.offset.scroll || (this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			}), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
				top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
				left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
		},
		_normalizeRightBottom: function() {
			"y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
		},
		_trigger: function(b, c, d) {
			return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), a.ui.plugin.add("draggable", "connectToSortable", {
		start: function(b, c, d) {
			var e = a.extend({}, c, {
				item: d.element
			});
			d.sortables = [], a(d.options.connectToSortable).each(function() {
				var c = a(this).sortable("instance");
				c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
			})
		},
		stop: function(b, c, d) {
			var e = a.extend({}, c, {
				item: d.element
			});
			d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
				var a = this;
				a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
					position: a.placeholder.css("position"),
					top: a.placeholder.css("top"),
					left: a.placeholder.css("left")
				}, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
			})
		},
		drag: function(b, c, d) {
			a.each(d.sortables, function() {
				var e = !1,
					f = this;
				f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
					return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
				})), e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
					return c.helper[0]
				}, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
					this.refreshPositions()
				}), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
					this.refreshPositions()
				}))
			})
		}
	}), a.ui.plugin.add("draggable", "cursor", {
		start: function(b, c, d) {
			var e = a("body"),
				f = d.options;
			e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
		},
		stop: function(b, c, d) {
			var e = d.options;
			e._cursor && a("body").css("cursor", e._cursor)
		}
	}), a.ui.plugin.add("draggable", "opacity", {
		start: function(b, c, d) {
			var e = a(c.helper),
				f = d.options;
			e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
		},
		stop: function(b, c, d) {
			var e = d.options;
			e._opacity && a(c.helper).css("opacity", e._opacity)
		}
	}), a.ui.plugin.add("draggable", "scroll", {
		start: function(a, b, c) {
			c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
		},
		drag: function(b, c, d) {
			var e = d.options,
				f = !1,
				g = d.scrollParentNotHidden[0],
				h = d.document[0];
			g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
		}
	}), a.ui.plugin.add("draggable", "snap", {
		start: function(b, c, d) {
			var e = d.options;
			d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
				var b = a(this),
					c = b.offset();
				this !== d.element[0] && d.snapElements.push({
					item: this,
					width: b.outerWidth(),
					height: b.outerHeight(),
					top: c.top,
					left: c.left
				})
			})
		},
		drag: function(b, c, d) {
			var e, f, g, h, i, j, k, l, m, n, o = d.options,
				p = o.snapTolerance,
				q = c.offset.left,
				r = q + d.helperProportions.width,
				s = c.offset.top,
				t = s + d.helperProportions.height;
			for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, r < i - p || q > j + p || t < k - p || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
				snapItem: d.snapElements[m].item
			})), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p, f = Math.abs(l - s) <= p, g = Math.abs(i - r) <= p, h = Math.abs(j - q) <= p, e && (c.position.top = d._convertPositionTo("relative", {
				top: k - d.helperProportions.height,
				left: 0
			}).top), f && (c.position.top = d._convertPositionTo("relative", {
				top: l,
				left: 0
			}).top), g && (c.position.left = d._convertPositionTo("relative", {
				top: 0,
				left: i - d.helperProportions.width
			}).left), h && (c.position.left = d._convertPositionTo("relative", {
				top: 0,
				left: j
			}).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = Math.abs(k - s) <= p, f = Math.abs(l - t) <= p, g = Math.abs(i - q) <= p, h = Math.abs(j - r) <= p, e && (c.position.top = d._convertPositionTo("relative", {
				top: k,
				left: 0
			}).top), f && (c.position.top = d._convertPositionTo("relative", {
				top: l - d.helperProportions.height,
				left: 0
			}).top), g && (c.position.left = d._convertPositionTo("relative", {
				top: 0,
				left: i
			}).left), h && (c.position.left = d._convertPositionTo("relative", {
				top: 0,
				left: j - d.helperProportions.width
			}).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
				snapItem: d.snapElements[m].item
			})), d.snapElements[m].snapping = e || f || g || h || n)
		}
	}), a.ui.plugin.add("draggable", "stack", {
		start: function(b, c, d) {
			var e, f = d.options,
				g = a.makeArray(a(f.stack)).sort(function(b, c) {
					return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
				});
			g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
				a(this).css("zIndex", e + b)
			}), this.css("zIndex", e + g.length))
		}
	}), a.ui.plugin.add("draggable", "zIndex", {
		start: function(b, c, d) {
			var e = a(c.helper),
				f = d.options;
			e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
		},
		stop: function(b, c, d) {
			var e = d.options;
			e._zIndex && a(c.helper).css("zIndex", e._zIndex)
		}
	}), a.ui.draggable
});
/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], a) : a(jQuery)
}(function(a) {
	var b, c = "ui-button ui-widget ui-state-default ui-corner-all",
		d = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		e = function() {
			var b = a(this);
			setTimeout(function() {
				b.find(":ui-button").button("refresh")
			}, 1)
		},
		f = function(b) {
			var c = b.name,
				d = b.form,
				e = a([]);
			return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "'][type=radio]") : a("[name='" + c + "'][type=radio]", b.ownerDocument).filter(function() {
				return !this.form
			})), e
		};
	return a.widget("ui.button", {
		version: "1.11.4",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, e), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
			var d = this,
				g = this.options,
				h = "checkbox" === this.type || "radio" === this.type,
				i = h ? "" : "ui-state-active";
			null === g.label && (g.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(c).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
				g.disabled || this === b && a(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function() {
				g.disabled || a(this).removeClass(i)
			}).bind("click" + this.eventNamespace, function(a) {
				g.disabled && (a.preventDefault(), a.stopImmediatePropagation())
			}), this._on({
				focus: function() {
					this.buttonElement.addClass("ui-state-focus")
				},
				blur: function() {
					this.buttonElement.removeClass("ui-state-focus")
				}
			}), h && this.element.bind("change" + this.eventNamespace, function() {
				d.refresh()
			}), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (g.disabled) return !1
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (g.disabled) return !1;
				a(this).addClass("ui-state-active"), d.buttonElement.attr("aria-pressed", "true");
				var b = d.element[0];
				f(b).not(b).map(function() {
					return a(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
				return !g.disabled && (a(this).addClass("ui-state-active"), b = this, void d.document.one("mouseup", function() {
					b = null
				}))
			}).bind("mouseup" + this.eventNamespace, function() {
				return !g.disabled && void a(this).removeClass("ui-state-active")
			}).bind("keydown" + this.eventNamespace, function(b) {
				return !g.disabled && void(b.keyCode !== a.ui.keyCode.SPACE && b.keyCode !== a.ui.keyCode.ENTER || a(this).addClass("ui-state-active"))
			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
				a(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
				b.keyCode === a.ui.keyCode.SPACE && a(this).click()
			})), this._setOption("disabled", g.disabled), this._resetButton()
		},
		_determineButtonType: function() {
			var a, b, c;
			this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
		},
		widget: function() {
			return this.buttonElement
		},
		_destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(c + " ui-state-active " + d).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function(a, b) {
			return this._super(a, b), "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), void(b && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
		},
		refresh: function() {
			var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? f(this.element[0]).each(function() {
				a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function() {
			if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
			var b = this.buttonElement.removeClass(d),
				c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
				e = this.options.icons,
				f = e.primary && e.secondary,
				g = [];
			e.primary || e.secondary ? (this.options.text && g.push("ui-button-text-icon" + (f ? "s" : e.primary ? "-primary" : "-secondary")), e.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + e.primary + "'></span>"), e.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + e.secondary + "'></span>"), this.options.text || (g.push(f ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : g.push("ui-button-text-only"), b.addClass(g.join(" "))
		}
	}), a.widget("ui.buttonset", {
		version: "1.11.4",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(a, b) {
			"disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
		},
		refresh: function() {
			var b = "rtl" === this.element.css("direction"),
				c = this.element.find(this.options.items),
				d = c.filter(":ui-button");
			c.not(":ui-button").button(), d.button("refresh"), this.buttons = c.map(function() {
				return a(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function() {
			this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
				return a(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	}), a.ui.button
});
/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./button", "./draggable", "./mouse", "./position", "./resizable"], a) : a(jQuery)
}(function(a) {
	return a.widget("ui.dialog", {
		version: "1.11.4",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			closeOnEscape: !0,
			closeText: "Close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of : window,
				collision: "fit",
				using: function(b) {
					var c = a(this).css(b).offset().top;
					c < 0 && a(this).css("top", b.top - c)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		sizeRelatedOptions: {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		resizableRelatedOptions: {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		},
		_create: function() {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		_appendTo: function() {
			var b = this.options.appendTo;
			return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
		},
		_destroy: function() {
			var a, b = this.originalPosition;
			this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
		},
		widget: function() {
			return this.uiDialog
		},
		disable: a.noop,
		enable: a.noop,
		close: function(b) {
			var c, d = this;
			if (this._isOpen && this._trigger("beforeClose", b) !== !1) {
				if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
					c = this.document[0].activeElement, c && "body" !== c.nodeName.toLowerCase() && a(c).blur()
				} catch (e) {}
				this._hide(this.uiDialog, this.options.hide, function() {
					d._trigger("close", b)
				})
			}
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function() {
			this._moveToTop()
		},
		_moveToTop: function(b, c) {
			var d = !1,
				e = this.uiDialog.siblings(".ui-front:visible").map(function() {
					return +a(this).css("z-index")
				}).get(),
				f = Math.max.apply(null, e);
			return f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1), d = !0), d && !c && this._trigger("focus", b), d
		},
		open: function() {
			var b = this;
			return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
				b._focusTabbable(), b._trigger("focus")
			}), this._makeFocusTarget(), void this._trigger("open"))
		},
		_focusTabbable: function() {
			var a = this._focusedElement;
			a || (a = this.element.find("[autofocus]")), a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).focus()
		},
		_keepFocus: function(b) {
			function c() {
				var b = this.document[0].activeElement,
					c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
				c || this._focusTabbable()
			}
			b.preventDefault(), c.call(this), this._delay(c)
		},
		_createWrapper: function() {
			this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._on(this.uiDialog, {
				keydown: function(b) {
					if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), void this.close(b);
					if (b.keyCode === a.ui.keyCode.TAB && !b.isDefaultPrevented()) {
						var c = this.uiDialog.find(":tabbable"),
							d = c.filter(":first"),
							e = c.filter(":last");
						b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function() {
							e.focus()
						}), b.preventDefault()) : (this._delay(function() {
							d.focus()
						}), b.preventDefault())
					}
				},
				mousedown: function(a) {
					this._moveToTop(a) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function() {
			var b;
			this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
				mousedown: function(b) {
					a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			}), this.uiDialogTitlebarClose = a("<button type='button'></button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: !1
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
				click: function(a) {
					a.preventDefault(), this.close(a)
				}
			}), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(b), this.uiDialog.attr({
				"aria-labelledby": b.attr("id")
			})
		},
		_title: function(a) {
			this.options.title || a.html("&#160;"), a.text(this.options.title)
		},
		_createButtonPane: function() {
			this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
		},
		_createButtons: function() {
			var b = this,
				c = this.options.buttons;
			return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function(c, d) {
				var e, f;
				d = a.isFunction(d) ? {
					click: d,
					text: c
				} : d, d = a.extend({
					type: "button"
				}, d), e = d.click, d.click = function() {
					e.apply(b.element[0], arguments)
				}, f = {
					icons: d.icons,
					text: d.showText
				}, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet)
			}), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
		},
		_makeDraggable: function() {
			function b(a) {
				return {
					position: a.position,
					offset: a.offset
				}
			}
			var c = this,
				d = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(d, e) {
					a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
				},
				drag: function(a, d) {
					c._trigger("drag", a, b(d))
				},
				stop: function(e, f) {
					var g = f.offset.left - c.document.scrollLeft(),
						h = f.offset.top - c.document.scrollTop();
					d.position = {
						my: "left top",
						at: "left" + (g >= 0 ? "+" : "") + g + " top" + (h >= 0 ? "+" : "") + h,
						of : c.window
					}, a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
				}
			})
		},
		_makeResizable: function() {
			function b(a) {
				return {
					originalPosition: a.originalPosition,
					originalSize: a.originalSize,
					position: a.position,
					size: a.size
				}
			}
			var c = this,
				d = this.options,
				e = d.resizable,
				f = this.uiDialog.css("position"),
				g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: d.maxWidth,
				maxHeight: d.maxHeight,
				minWidth: d.minWidth,
				minHeight: this._minHeight(),
				handles: g,
				start: function(d, e) {
					a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
				},
				resize: function(a, d) {
					c._trigger("resize", a, b(d))
				},
				stop: function(e, f) {
					var g = c.uiDialog.offset(),
						h = g.left - c.document.scrollLeft(),
						i = g.top - c.document.scrollTop();
					d.height = c.uiDialog.height(), d.width = c.uiDialog.width(), d.position = {
						my: "left top",
						at: "left" + (h >= 0 ? "+" : "") + h + " top" + (i >= 0 ? "+" : "") + i,
						of : c.window
					}, a(this).removeClass("ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
				}
			}).css("position", f)
		},
		_trackFocus: function() {
			this._on(this.widget(), {
				focusin: function(b) {
					this._makeFocusTarget(), this._focusedElement = a(b.target)
				}
			})
		},
		_makeFocusTarget: function() {
			this._untrackInstance(), this._trackingInstances().unshift(this)
		},
		_untrackInstance: function() {
			var b = this._trackingInstances(),
				c = a.inArray(this, b);
			c !== -1 && b.splice(c, 1)
		},
		_trackingInstances: function() {
			var a = this.document.data("ui-dialog-instances");
			return a || (a = [], this.document.data("ui-dialog-instances", a)), a
		},
		_minHeight: function() {
			var a = this.options;
			return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
		},
		_position: function() {
			var a = this.uiDialog.is(":visible");
			a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
		},
		_setOptions: function(b) {
			var c = this,
				d = !1,
				e = {};
			a.each(b, function(a, b) {
				c._setOption(a, b), a in c.sizeRelatedOptions && (d = !0), a in c.resizableRelatedOptions && (e[a] = b)
			}), d && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e)
		},
		_setOption: function(a, b) {
			var c, d, e = this.uiDialog;
			"dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
				label: "" + b
			}), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), d || b === !1 || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function() {
			var a, b, c, d = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
				height: "auto",
				width: d.width
			}).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
				minHeight: b,
				maxHeight: c,
				height: "auto"
			}) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function() {
			this.iframeBlocks = this.document.find("iframe").map(function() {
				var b = a(this);
				return a("<div>").css({
					position: "absolute",
					width: b.outerWidth(),
					height: b.outerHeight()
				}).appendTo(b.parent()).offset(b.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function(b) {
			return !!a(b.target).closest(".ui-dialog").length || !!a(b.target).closest(".ui-datepicker").length
		},
		_createOverlay: function() {
			if (this.options.modal) {
				var b = !0;
				this._delay(function() {
					b = !1
				}), this.document.data("ui-dialog-overlays") || this._on(this.document, {
					focusin: function(a) {
						b || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable())
					}
				}), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
					mousedown: "_keepFocus"
				}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
			}
		},
		_destroyOverlay: function() {
			if (this.options.modal && this.overlay) {
				var a = this.document.data("ui-dialog-overlays") - 1;
				a ? this.document.data("ui-dialog-overlays", a) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
			}
		}
	})
});
jQuery(document).ready(function($) {
	var load_ui_css = false;
	$('#start-time').each(function(i, el) {
		$(el).addClass('em-time-input em-time-start').next('#end-time').addClass('em-time-input em-time-end').parent().addClass('em-time-range');
	});
	if ($(".em-time-input").length > 0) {
		em_setup_timepicker('body');
	}
	$('.em-calendar-wrapper a').unbind("click");
	$('.em-calendar-wrapper a').undelegate("click");
	$('.em-calendar-wrapper').delegate('a.em-calnav, a.em-calnav', 'click', function(e) {
		e.preventDefault();
		$(this).closest('.em-calendar-wrapper').prepend('<div class="loading" id="em-loading"></div>');
		var url = em_ajaxify($(this).attr('href'));
		$(this).closest('.em-calendar-wrapper').load(url, function() {
			$(this).trigger('em_calendar_load');
		});
	});
	$(document).delegate('.em-toggle', 'click change', function(e) {
		e.preventDefault();
		var el = $(this);
		var rel = el.attr('rel').split(':');
		if (el.hasClass('show-search')) {
			if (rel.length > 1) {
				el.closest(rel[1]).find(rel[0]).slideUp();
			} else {
				$(rel[0]).slideUp();
			}
			el.find('.show, .show-advanced').show();
			el.find('.hide, .hide-advanced').hide();
			el.removeClass('show-search');
		} else {
			if (rel.length > 1) {
				el.closest(rel[1]).find(rel[0]).slideDown();
			} else {
				$(rel[0]).slideDown();
			}
			el.find('.show, .show-advanced').hide();
			el.find('.hide, .hide-advanced').show();
			el.addClass('show-search');
		}
	});
	if (EM.search_term_placeholder) {
		if ('placeholder' in document.createElement('input')) {
			$('input.em-events-search-text, input.em-search-text').attr('placeholder', EM.search_term_placeholder);
		} else {
			$('input.em-events-search-text, input.em-search-text').blur(function() {
				if (this.value == '') this.value = EM.search_term_placeholder;
			}).focus(function() {
				if (this.value == EM.search_term_placeholder) this.value = '';
			}).trigger('blur');
		}
	}
	$('.em-search-form select[name=country]').change(function() {
		var el = $(this);
		$('.em-search select[name=state]').html('<option value="">' + EM.txt_loading + '</option>');
		$('.em-search select[name=region]').html('<option value="">' + EM.txt_loading + '</option>');
		$('.em-search select[name=town]').html('<option value="">' + EM.txt_loading + '</option>');
		if (el.val() != '') {
			el.closest('.em-search-location').find('.em-search-location-meta').slideDown();
			var data = {
				action: 'search_states',
				country: el.val(),
				return_html: true
			};
			$('.em-search select[name=state]').load(EM.ajaxurl, data);
			data.action = 'search_regions';
			$('.em-search select[name=region]').load(EM.ajaxurl, data);
			data.action = 'search_towns';
			$('.em-search select[name=town]').load(EM.ajaxurl, data);
		} else {
			el.closest('.em-search-location').find('.em-search-location-meta').slideUp();
		}
	});
	$('.em-search-form select[name=region]').change(function() {
		$('.em-search select[name=state]').html('<option value="">' + EM.txt_loading + '</option>');
		$('.em-search select[name=town]').html('<option value="">' + EM.txt_loading + '</option>');
		var data = {
			action: 'search_states',
			region: $(this).val(),
			country: $('.em-search-form select[name=country]').val(),
			return_html: true
		};
		$('.em-search select[name=state]').load(EM.ajaxurl, data);
		data.action = 'search_towns';
		$('.em-search select[name=town]').load(EM.ajaxurl, data);
	});
	$('.em-search-form select[name=state]').change(function() {
		$('.em-search select[name=town]').html('<option value="">' + EM.txt_loading + '</option>');
		var data = {
			action: 'search_towns',
			state: $(this).val(),
			region: $('.em-search-form select[name=region]').val(),
			country: $('.em-search-form select[name=country]').val(),
			return_html: true
		};
		$('.em-search select[name=town]').load(EM.ajaxurl, data);
	});
	$(document).delegate('.em-search-form, .em-events-search-form', 'submit', function(e) {
		var form = $(this);
		if (this.em_search && this.em_search.value == EM.txt_search) {
			this.em_search.value = '';
		}
		var results_wrapper = form.closest('.em-search-wrapper').find('.em-search-ajax');
		if (results_wrapper.length == 0) results_wrapper = $('.em-search-ajax');
		if (results_wrapper.length > 0) {
			results_wrapper.append('<div class="loading" id="em-loading"></div>');
			var submitButton = form.find('.em-search-submit');
			submitButton.data('buttonText', submitButton.val()).val(EM.txt_searching);
			var img = submitButton.children('img');
			if (img.length > 0) img.attr('src', img.attr('src').replace('search-mag.png', 'search-loading.gif'));
			var vars = form.serialize();
			$.ajax(EM.ajaxurl, {
				type: 'POST',
				dataType: 'html',
				data: vars,
				success: function(responseText) {
					submitButton.val(submitButton.data('buttonText'));
					if (img.length > 0) img.attr('src', img.attr('src').replace('search-loading.gif', 'search-mag.png'));
					results_wrapper.replaceWith(responseText);
					if (form.find('input[name=em_search]').val() == '') {
						form.find('input[name=em_search]').val(EM.txt_search);
					}
					results_wrapper = form.closest('.em-search-wrapper').find('.em-search-ajax');
					if (results_wrapper.length == 0) results_wrapper = $('.em-search-ajax');
					jQuery(document).triggerHandler('em_search_ajax', [vars, results_wrapper, e]);
				}
			});
			e.preventDefault();
			return false;
		}
	});
	if ($('.em-search-ajax').length > 0) {
		$(document).delegate('.em-search-ajax a.page-numbers', 'click', function(e) {
			var a = $(this);
			var data = a.closest('.em-pagination').attr('data-em-ajax');
			var wrapper = a.closest('.em-search-ajax');
			var wrapper_parent = wrapper.parent();
			var qvars = a.attr('href').split('?');
			var vars = qvars[1];
			if (data != '') {
				vars = vars != '' ? vars + '&' + data : data;
			}
			wrapper.append('<div class="loading" id="em-loading"></div>');
			$.ajax(EM.ajaxurl, {
				type: 'POST',
				dataType: 'html',
				data: vars,
				success: function(responseText) {
					wrapper.replaceWith(responseText);
					wrapper = wrapper_parent.find('.em-search-ajax');
					jQuery(document).triggerHandler('em_search_ajax', [vars, wrapper, e]);
				}
			});
			e.preventDefault();
			return false;
		});
	}
	$('.events-table').on('click', '.em-event-delete', function() {
		if (!confirm("Are you sure you want to delete?")) {
			return false;
		}
		window.location.href = this.href;
	});
	$('#event-form #event-image-delete, #location-form #location-image-delete').on('click', function() {
		var el = $(this);
		if (el.is(':checked')) {
			el.closest('.event-form-image, .location-form-image').find('#event-image-img, #location-image-img').hide();
		} else {
			el.closest('.event-form-image, .location-form-image').find('#event-image-img, #location-image-img').show();
		}
	});
	$('#event-form.em-event-admin-recurring').submit(function(event) {
		var form = $(this);
		if (form.find('input[name="event_reschedule"]').first().val() == 1) {
			var warning_text = EM.event_reschedule_warning;
		} else if (form.find('input[name="event_recreate_tickets"]').first().val() == 1) {
			var warning_text = EM.event_recurrence_bookings;
		} else {
			var warning_text = EM.event_recurrence_overwrite;
		}
		confirmation = confirm(warning_text);
		if (confirmation == false) {
			event.preventDefault();
		}
	});
	$('.em-reschedule-trigger').click(function(e) {
		e.preventDefault();
		var trigger = $(this);
		trigger.closest('.em-recurrence-reschedule').find(trigger.data('target')).removeClass('reschedule-hidden');
		trigger.siblings('.em-reschedule-value').val(1);
		trigger.addClass('reschedule-hidden').siblings('a').removeClass('reschedule-hidden');
	});
	$('.em-reschedule-cancel').click(function(e) {
		e.preventDefault();
		var trigger = $(this);
		trigger.closest('.em-recurrence-reschedule').find(trigger.data('target')).addClass('reschedule-hidden');
		trigger.siblings('.em-reschedule-value').val(0);
		trigger.addClass('reschedule-hidden').siblings('a').removeClass('reschedule-hidden');
	});
	if ($("#em-tickets-form").length > 0) {
		$('#event-rsvp').click(function(event) {
			if (!this.checked) {
				confirmation = confirm(EM.disable_bookings_warning);
				if (confirmation == false) {
					event.preventDefault();
				} else {
					$('#event-rsvp-options').hide();
				}
			} else {
				$('#event-rsvp-options').fadeIn();
			}
		});
		if ($('input#event-rsvp').is(":checked")) {
			$("div#rsvp-data").fadeIn();
		} else {
			$("div#rsvp-data").hide();
		}
		var reset_ticket_forms = function() {
			$('#em-tickets-form table tbody tr.em-tickets-row').show();
			$('#em-tickets-form table tbody tr.em-tickets-row-form').hide();
		};
		if ($('#em-recurrence-checkbox').length > 0) {
			$('#em-recurrence-checkbox').change(function() {
				if ($('#em-recurrence-checkbox').is(':checked')) {
					$('#em-tickets-form .ticket-dates-from-recurring, #em-tickets-form .ticket-dates-to-recurring, #event-rsvp-options .em-booking-date-recurring').show();
					$('#em-tickets-form .ticket-dates-from-normal, #em-tickets-form .ticket-dates-to-normal, #event-rsvp-options .em-booking-date-normal, #em-tickets-form .hidden').hide();
				} else {
					$('#em-tickets-form .ticket-dates-from-normal, #em-tickets-form .ticket-dates-to-normal, #event-rsvp-options .em-booking-date-normal').show();
					$('#em-tickets-form .ticket-dates-from-recurring, #em-tickets-form .ticket-dates-to-recurring, #event-rsvp-options .em-booking-date-recurring, #em-tickets-form .hidden').hide();
				}
			}).trigger('change');
		} else if ($('#em-form-recurrence').length > 0) {
			$('#em-tickets-form .ticket-dates-from-recurring, #em-tickets-form .ticket-dates-to-recurring, #event-rsvp-options .em-booking-date-recurring').show();
			$('#em-tickets-form .ticket-dates-from-normal, #em-tickets-form .ticket-dates-to-normal, #event-rsvp-options .em-booking-date-normal, #em-tickets-form .hidden').hide();
		} else {
			$('#em-tickets-form .ticket-dates-from-recurring, #em-tickets-form .ticket-dates-to-recurring, #event-rsvp-options .em-booking-date-recurring, #em-tickets-form .hidden').hide();
		}
		$("#em-tickets-add").click(function(e) {
			e.preventDefault();
			reset_ticket_forms();
			var tickets = $('#em-tickets-form table tbody');
			var rowNo = tickets.length + 1;
			var slot = tickets.first().clone(true).attr('id', 'em-ticket-' + rowNo).appendTo($('#em-tickets-form table'));
			slot.find('*[name]').each(function(index, el) {
				el = $(el);
				el.attr('name', el.attr('name').replace('em_tickets[0]', 'em_tickets[' + rowNo + ']'));
			});
			slot.show().find('.ticket-actions-edit').trigger('click');
			slot.find('.em-date-input-loc').datepicker('destroy').removeAttr('id');
			slot.find('.em-time-input').unbind().each(function(index, el) {
				this.timePicker = false;
			});
			em_setup_datepicker(slot);
			em_setup_timepicker(slot);
			$('html, body').animate({
				scrollTop: slot.offset().top - 30
			});
		});
		$(document).delegate('.ticket-actions-edit', 'click', function(e) {
			e.preventDefault();
			reset_ticket_forms();
			var tbody = $(this).closest('tbody');
			tbody.find('tr.em-tickets-row').hide();
			tbody.find('tr.em-tickets-row-form').fadeIn();
			return false;
		});
		$(document).delegate('.ticket-actions-edited', 'click', function(e) {
			e.preventDefault();
			var tbody = $(this).closest('tbody');
			var rowNo = tbody.attr('id').replace('em-ticket-', '');
			tbody.find('.em-tickets-row').fadeIn();
			tbody.find('.em-tickets-row-form').hide();
			tbody.find('*[name]').each(function(index, el) {
				el = $(el);
				if (el.attr('name') == 'ticket_start_pub') {
					tbody.find('span.ticket_start').text(el.attr('value'));
				} else if (el.attr('name') == 'ticket_end_pub') {
					tbody.find('span.ticket_end').text(el.attr('value'));
				} else if (el.attr('name') == 'em_tickets[' + rowNo + '][ticket_type]') {
					if (el.find(':selected').val() == 'members') {
						tbody.find('span.ticket_name').prepend('* ');
					}
				} else if (el.attr('name') == 'em_tickets[' + rowNo + '][ticket_start_recurring_days]') {
					var text = tbody.find('select.ticket-dates-from-recurring-when').val() == 'before' ? '-' + el.attr('value') : el.attr('value');
					if (el.attr('value') != '') {
						tbody.find('span.ticket_start_recurring_days').text(text);
						tbody.find('span.ticket_start_recurring_days_text, span.ticket_start_time').removeClass('hidden').show();
					} else {
						tbody.find('span.ticket_start_recurring_days').text(' - ');
						tbody.find('span.ticket_start_recurring_days_text, span.ticket_start_time').removeClass('hidden').hide();
					}
				} else if (el.attr('name') == 'em_tickets[' + rowNo + '][ticket_end_recurring_days]') {
					var text = tbody.find('select.ticket-dates-to-recurring-when').val() == 'before' ? '-' + el.attr('value') : el.attr('value');
					if (el.attr('value') != '') {
						tbody.find('span.ticket_end_recurring_days').text(text);
						tbody.find('span.ticket_end_recurring_days_text, span.ticket_end_time').removeClass('hidden').show();
					} else {
						tbody.find('span.ticket_end_recurring_days').text(' - ');
						tbody.find('span.ticket_end_recurring_days_text, span.ticket_end_time').removeClass('hidden').hide();
					}
				} else {
					tbody.find('.' + el.attr('name').replace('em_tickets[' + rowNo + '][', '').replace(']', '').replace('[]', '')).text(el.attr('value'));
				}
			});
			$(document).triggerHandler('em_maps_tickets_edit', [tbody, rowNo, true]);
			$('html, body').animate({
				scrollTop: tbody.parent().offset().top - 30
			});
			return false;
		});
		$(document).delegate('.em-ticket-form select.ticket_type', 'change', function(e) {
			var el = $(this);
			if (el.find('option:selected').val() == 'members') {
				el.closest('.em-ticket-form').find('.ticket-roles').fadeIn();
			} else {
				el.closest('.em-ticket-form').find('.ticket-roles').hide();
			}
		});
		$(document).delegate('.em-ticket-form .ticket-options-advanced', 'click', function(e) {
			e.preventDefault();
			var el = $(this);
			if (el.hasClass('show')) {
				el.closest('.em-ticket-form').find('.em-ticket-form-advanced').fadeIn();
				el.find('.show,.show-advanced').hide();
				el.find('.hide,.hide-advanced').show();
			} else {
				el.closest('.em-ticket-form').find('.em-ticket-form-advanced').hide();
				el.find('.show,.show-advanced').show();
				el.find('.hide,.hide-advanced').hide();
			}
			el.toggleClass('show');
		});
		$('.em-ticket-form').each(function() {
			var show_advanced = false;
			var el = $(this);
			el.find('.em-ticket-form-advanced input[type="text"]').each(function() {
				if (this.value != '') show_advanced = true;
			});
			if (el.find('.em-ticket-form-advanced input[type="checkbox"]:checked').length > 0) {
				show_advanced = true;
			}
			el.find('.em-ticket-form-advanced option:selected').each(function() {
				if (this.value != '') show_advanced = true;
			});
			if (show_advanced) el.find('.ticket-options-advanced').trigger('click');
		});
		$(document).delegate('.ticket-actions-delete', 'click', function(e) {
			e.preventDefault();
			var el = $(this);
			var tbody = el.closest('tbody');
			if (tbody.find('input.ticket_id').val() > 0) {
				el.text('Deleting...');
				$.getJSON($(this).attr('href'), {
					'em_ajax_action': 'delete_ticket',
					'id': tbody.find('input.ticket_id').val()
				}, function(data) {
					if (data.result) {
						tbody.remove();
					} else {
						el.text('Delete');
						alert(data.error);
					}
				});
			} else {
				tbody.remove();
			}
			return false;
		});
	}
	if ($('#em-bookings-table').length > 0) {
		$(document).delegate('#em-bookings-table .tablenav-pages a', 'click', function() {
			var el = $(this);
			var form = el.parents('#em-bookings-table form.bookings-filter');
			var match = el.attr('href').match(/#[0-9]+/);
			if (match != null && match.length > 0) {
				var pno = match[0].replace('#', '');
				form.find('input[name=pno]').val(pno);
			} else {
				form.find('input[name=pno]').val(1);
			}
			form.trigger('submit');
			return false;
		});
		var em_bookings_settings_dialog = {
			modal: true,
			autoOpen: false,
			minWidth: 500,
			height: 'auto',
			buttons: [{
				text: EM.bookings_settings_save,
				click: function(e) {
					e.preventDefault();
					var match = $("#em-bookings-table form.bookings-filter [name=cols]").val('');
					var booking_form_cols = $('form#em-bookings-table-settings-form input.em-bookings-col-item');
					$.each(booking_form_cols, function(i, item_match) {
						if (item_match.value == 1) {
							if (match.val() != '') {
								match.val(match.val() + ',' + item_match.name);
							} else {
								match.val(item_match.name);
							}
						}
					});
					$('#em-bookings-table-settings').trigger('submitted');
					$('#em-bookings-table form.bookings-filter').trigger('submit');
					$(this).dialog('close');
				}
			}]
		};
		var em_bookings_export_dialog = {
			modal: true,
			autoOpen: false,
			minWidth: 500,
			height: 'auto',
			buttons: [{
				text: EM.bookings_export_save,
				click: function(e) {
					$(this).children('form').submit();
					$(this).dialog('close');
				}
			}]
		};
		if ($("#em-bookings-table-settings").length > 0) {
			$("#em-bookings-table-settings").dialog(em_bookings_settings_dialog);
			$(document).delegate('#em-bookings-table-settings-trigger', 'click', function(e) {
				e.preventDefault();
				$("#em-bookings-table-settings").dialog('open');
			});
			$("#em-bookings-table-export").dialog(em_bookings_export_dialog);
			$(document).delegate('#em-bookings-table-export-trigger', 'click', function(e) {
				e.preventDefault();
				$("#em-bookings-table-export").dialog('open');
			});
			var export_overlay_show_tickets = function() {
				if ($('#em-bookings-table-export-form input[name=show_tickets]').is(':checked')) {
					$('#em-bookings-table-export-form .em-bookings-col-item-ticket').show();
					$('#em-bookings-table-export-form #em-bookings-export-cols-active .em-bookings-col-item-ticket input').val(1);
				} else {
					$('#em-bookings-table-export-form .em-bookings-col-item-ticket').hide().find('input').val(0);
				}
			};
			$('#em-bookings-table form select').each(function(i, el) {
				$(el).change(function(e) {
					var select_el = $(this);
					var input_par = $('#em-bookings-table-export-form input[name=' + select_el.attr('name') + ']');
					var input_par_selected = select_el.find('option:selected');
					input_par.val(input_par_selected.val());
				});
			});
			export_overlay_show_tickets();
			$('#em-bookings-table-export-form input[name=show_tickets]').click(export_overlay_show_tickets);
			$(".em-bookings-cols-sortable").sortable({
				connectWith: ".em-bookings-cols-sortable",
				update: function(event, ui) {
					if (ui.item.parents('ul#em-bookings-cols-active, ul#em-bookings-export-cols-active').length > 0) {
						ui.item.addClass('ui-state-highlight').removeClass('ui-state-default').children('input').val(1);
					} else {
						ui.item.addClass('ui-state-default').removeClass('ui-state-highlight').children('input').val(0);
					}
				}
			}).disableSelection();
			load_ui_css = true;
		}
		$(document).delegate('#em-bookings-table form.bookings-filter', 'submit', function(e) {
			var el = $(this);
			el.parents('#em-bookings-table').find('.table-wrap').first().append('<div id="em-loading" />');
			$.post(EM.ajaxurl, el.serializeArray(), function(data) {
				var root = el.parents('#em-bookings-table').first();
				root.replaceWith(data);
				$('#em-bookings-table-export input[name=scope]').val(root.find('select[name=scope]').val());
				$('#em-bookings-table-export input[name=status]').val(root.find('select[name=status]').val());
				jQuery(document).triggerHandler('em_bookings_filtered', [data, root, el]);
			});
			return false;
		});
		$(document).delegate('.em-bookings-approve,.em-bookings-reject,.em-bookings-unapprove,.em-bookings-delete', 'click', function() {
			var el = $(this);
			if (el.hasClass('em-bookings-delete')) {
				if (!confirm(EM.booking_delete)) {
					return false;
				}
			}
			var url = em_ajaxify(el.attr('href'));
			var td = el.parents('td').first();
			td.html(EM.txt_loading);
			td.load(url);
			return false;
		});
	}
	if ($('.em_bookings_events_table').length > 0) {
		$(document).delegate('.em_bookings_events_table form', 'submit', function(e) {
			var el = $(this);
			var url = em_ajaxify(el.attr('action'));
			el.parents('.em_bookings_events_table').find('.table-wrap').first().append('<div id="em-loading" />');
			$.get(url, el.serializeArray(), function(data) {
				el.parents('.em_bookings_events_table').first().replaceWith(data);
			});
			return false;
		});
		$(document).delegate('.em_bookings_events_table .tablenav-pages a', 'click', function() {
			var el = $(this);
			var url = em_ajaxify(el.attr('href'));
			el.parents('.em_bookings_events_table').find('.table-wrap').first().append('<div id="em-loading" />');
			$.get(url, function(data) {
				el.parents('.em_bookings_events_table').first().replaceWith(data);
			});
			return false;
		});
	}
	$(document).on('click', 'a.em-booking-button', function(e) {
		e.preventDefault();
		var button = $(this);
		if (button.text() != EM.bb_booked && $(this).text() != EM.bb_booking) {
			button.text(EM.bb_booking);
			var button_data = button.attr('id').split('_');
			$.ajax({
				url: EM.ajaxurl,
				dataType: 'jsonp',
				data: {
					event_id: button_data[1],
					_wpnonce: button_data[2],
					action: 'booking_add_one'
				},
				success: function(response, statusText, xhr, $form) {
					if (response.result) {
						button.text(EM.bb_booked);
					} else {
						button.text(EM.bb_error);
					}
					if (response.message != '') alert(response.message);
				},
				error: function() {
					button.text(EM.bb_error);
				}
			});
		}
		return false;
	});
	$(document).on('click', 'a.em-cancel-button', function(e) {
		e.preventDefault();
		var button = $(this);
		if (button.text() != EM.bb_cancelled && button.text() != EM.bb_canceling) {
			button.text(EM.bb_canceling);
			var button_data = button.attr('id').split('_');
			$.ajax({
				url: EM.ajaxurl,
				dataType: 'jsonp',
				data: {
					booking_id: button_data[1],
					_wpnonce: button_data[2],
					action: 'booking_cancel'
				},
				success: function(response, statusText, xhr, $form) {
					if (response.result) {
						button.text(EM.bb_cancelled);
					} else {
						button.text(EM.bb_cancel_error);
					}
				},
				error: function() {
					button.text(EM.bb_cancel_error);
				}
			});
		}
		return false;
	});
	if ($('.em-date-single, .em-date-range, #em-date-start').length > 0) {
		load_ui_css = true;
		em_setup_datepicker('body');
	}
	if (load_ui_css) em_load_jquery_css();

	function updateIntervalDescriptor() {
		$(".interval-desc").hide();
		var number = "-plural";
		if ($('input#recurrence-interval').val() == 1 || $('input#recurrence-interval').val() == "") number = "-singular";
		var descriptor = "span#interval-" + $("select#recurrence-frequency").val() + number;
		$(descriptor).show();
	}

	function updateIntervalSelectors() {
		$('p.alternate-selector').hide();
		$('p#' + $('select#recurrence-frequency').val() + "-selector").show();
	}

	function updateShowHideRecurrence() {
		if ($('input#event-recurrence').is(":checked")) {
			$("#event_recurrence_pattern").fadeIn();
			$("#event-date-explanation").hide();
			$("#recurrence-dates-explanation").show();
			$("h3#recurrence-dates-title").show();
			$("h3#event-date-title").hide();
		} else {
			$("#event_recurrence_pattern").hide();
			$("#recurrence-dates-explanation").hide();
			$("#event-date-explanation").show();
			$("h3#recurrence-dates-title").hide();
			$("h3#event-date-title").show();
		}
	}
	$("#recurrence-dates-explanation").hide();
	$("#date-to-submit").hide();
	$("#end-date-to-submit").hide();
	$("#localised-date").show();
	$("#localised-end-date").show();
	$('#em-wrapper input.select-all').change(function() {
		if ($(this).is(':checked')) {
			$('input.row-selector').prop('checked', true);
			$('input.select-all').prop('checked', true);
		} else {
			$('input.row-selector').prop('checked', false);
			$('input.select-all').prop('checked', false);
		}
	});
	updateIntervalDescriptor();
	updateIntervalSelectors();
	updateShowHideRecurrence();
	$('input#event-recurrence').change(updateShowHideRecurrence);
	$('input#recurrence-interval').keyup(updateIntervalDescriptor);
	$('select#recurrence-frequency').change(updateIntervalDescriptor);
	$('select#recurrence-frequency').change(updateIntervalSelectors);
	if ($('.em-location-map').length > 0 || $('.em-locations-map').length > 0 || $('#em-map').length > 0 || $('.em-search-geo').length > 0) {
		em_maps_load();
	}
	if (jQuery("div.em-location-data input#location-name").length > 0) {
		jQuery("div.em-location-data input#location-name").autocomplete({
			source: EM.locationajaxurl,
			minLength: 2,
			focus: function(event, ui) {
				jQuery("input#location-id").val(ui.item.value);
				return false;
			},
			select: function(event, ui) {
				jQuery("input#location-id").val(ui.item.id).trigger('change');
				jQuery("input#location-name").val(ui.item.value);
				jQuery('input#location-address').val(ui.item.address);
				jQuery('input#location-town').val(ui.item.town);
				jQuery('input#location-state').val(ui.item.state);
				jQuery('input#location-region').val(ui.item.region);
				jQuery('input#location-postcode').val(ui.item.postcode);
				if (ui.item.country == '') {
					jQuery('select#location-country option:selected').removeAttr('selected');
				} else {
					jQuery('select#location-country option[value="' + ui.item.country + '"]').attr('selected', 'selected');
				}
				jQuery('div.em-location-data input, div.em-location-data select').css('background-color', '#ccc').attr('readonly', 'readonly');
				jQuery('#em-location-reset').show();
				jQuery('#em-location-search-tip').hide();
				jQuery(document).triggerHandler('em_locations_autocomplete_selected', [event, ui]);
				return false;
			}
		}).data("ui-autocomplete")._renderItem = function(ul, item) {
			html_val = "<a>" + em_esc_attr(item.label) + '<br><span style="font-size:11px"><em>' + em_esc_attr(item.address) + ', ' + em_esc_attr(item.town) + "</em></span></a>";
			return jQuery("<li></li>").data("item.autocomplete", item).append(html_val).appendTo(ul);
		};
		jQuery('#em-location-reset a').click(function() {
			jQuery('div.em-location-data input').css('background-color', '#fff').val('').removeAttr('readonly');
			jQuery('div.em-location-data select').css('background-color', '#fff');
			jQuery('div.em-location-data option:selected').removeAttr('selected');
			jQuery('input#location-id').val('');
			jQuery('#em-location-reset').hide();
			jQuery('#em-location-search-tip').show();
			jQuery('#em-map').hide();
			jQuery('#em-map-404').show();
			if (typeof(marker) !== 'undefined') {
				marker.setPosition(new google.maps.LatLng(0, 0));
				infoWindow.close();
				marker.setDraggable(true);
			}
			return false;
		});
		if (jQuery('input#location-id').val() != '0' && jQuery('input#location-id').val() != '') {
			jQuery('div.em-location-data input, div.em-location-data select').css('background-color', '#ccc').attr('readonly', 'readonly');
			jQuery('#em-location-reset').show();
			jQuery('#em-location-search-tip').hide();
		}
	}
});

function em_load_jquery_css() {
	if (EM.ui_css && jQuery('link#jquery-ui-css').length == 0) {
		var script = document.createElement("link");
		script.id = 'jquery-ui-css';
		script.rel = "stylesheet";
		script.href = EM.ui_css;
		document.body.appendChild(script);
	}
}

function em_setup_datepicker(wrap) {
	wrap = jQuery(wrap);
	var datepicker_vals = {
		altFormat: "yy-mm-dd",
		changeMonth: true,
		changeYear: true,
		firstDay: EM.firstDay,
		yearRange: '-100:+10'
	};
	if (EM.dateFormat) datepicker_vals.dateFormat = EM.dateFormat;
	if (EM.yearRange) datepicker_vals.yearRange = EM.yearRange;
	jQuery(document).triggerHandler('em_datepicker', datepicker_vals);
	dateDivs = wrap.find('.em-date-single, .em-date-range');
	if (dateDivs.length > 0) {
		dateDivs.find('input.em-date-input-loc').each(function(i, dateInput) {
			var dateInput = jQuery(dateInput);
			var dateValue = dateInput.nextAll('input.em-date-input').first();
			var dateValue_value = dateValue.val();
			dateInput.datepicker(datepicker_vals);
			dateInput.datepicker('option', 'altField', dateValue);
			if (dateValue_value) {
				var this_date_formatted = jQuery.datepicker.formatDate(EM.dateFormat, jQuery.datepicker.parseDate('yy-mm-dd', dateValue_value));
				dateInput.val(this_date_formatted);
				dateValue.val(dateValue_value);
			}
			dateInput.change(function() {
				if (jQuery(this).val() == '') {
					jQuery(this).nextAll('.em-date-input').first().val('');
				}
			});
		});
		dateDivs.filter('.em-date-range').find('input.em-date-input-loc').each(function(i, dateInput) {
			dateInput = jQuery(dateInput);
			if (dateInput.hasClass('em-date-start')) {
				dateInput.datepicker('option', 'onSelect', function(selectedDate) {
					var startDate = jQuery(this);
					var endDate = startDate.parents('.em-date-range').find('.em-date-end').first();
					var startValue = startDate.nextAll('input.em-date-input').first().val();
					var endValue = endDate.nextAll('input.em-date-input').first().val();
					if (startValue > endValue && endValue != '') {
						endDate.datepicker("setDate", selectedDate);
						endDate.trigger('change');
					}
					endDate.datepicker("option", 'minDate', selectedDate);
				});
			} else if (dateInput.hasClass('em-date-end')) {
				var startInput = dateInput.parents('.em-date-range').find('.em-date-start').first();
				if (startInput.val() != '') {
					dateInput.datepicker('option', 'minDate', startInput.val());
				}
			}
		});
	}
}

function em_setup_timepicker(wrap) {
	wrap = jQuery(wrap);
	var timepicker_options = {
		show24Hours: EM.show24hours == 1,
		step: 15
	}
	jQuery(document).triggerHandler('em_timepicker_options', timepicker_options);
	wrap.find(".em-time-input").timePicker(timepicker_options);
	wrap.find(".em-time-range input.em-time-start").each(function(i, el) {
		jQuery(el).data('oldTime', jQuery.timePicker(el).getTime());
	}).change(function() {
		var start = jQuery(this);
		var end = start.nextAll('.em-time-end');
		if (end.val()) {
			var oldTime = start.data('oldTime');
			var duration = (jQuery.timePicker(end).getTime() - oldTime);
			var time = jQuery.timePicker(start).getTime();
			if (jQuery.timePicker(end).getTime() >= oldTime) {
				jQuery.timePicker(end).setTime(new Date(new Date(time.getTime() + duration)));
			}
			start.data('oldTime', time);
		}
	});
	wrap.find(".em-time-range input.em-time-end").change(function() {
		var end = jQuery(this);
		var start = end.prevAll('.em-time-start');
		if (start.val()) {
			if (jQuery.timePicker(start).getTime() > jQuery.timePicker(this).getTime() && (jQuery('.em-date-end').val().length == 0 || jQuery('.em-date-start').val() == jQuery('.em-date-end').val())) {
				end.addClass("error");
			} else {
				end.removeClass("error");
			}
		}
	});
	wrap.find('.em-time-range input.em-time-all-day').change(function() {
		var allday = jQuery(this);
		if (allday.is(':checked')) {
			allday.siblings('.em-time-input').css('background-color', '#ccc');
		} else {
			allday.siblings('.em-time-input').css('background-color', '#fff');
		}
	}).trigger('change');
}
var em_ajaxify = function(url) {
	if (url.search('em_ajax=0') != -1) {
		url = url.replace('em_ajax=0', 'em_ajax=1');
	} else if (url.search(/\?/) != -1) {
		url = url + "&em_ajax=1";
	} else {
		url = url + "?em_ajax=1";
	}
	return url;
};
var em_maps_loaded = false;
var maps = {};
var maps_markers = {};
var infoWindow;

function em_maps_load() {
	if (!em_maps_loaded) {
		if (jQuery('script#google-maps').length == 0 && (typeof google !== 'object' || typeof google.maps !== 'object')) {
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.id = "google-maps";
			var proto = (EM.is_ssl) ? 'https:' : 'http:';
			if (typeof EM.google_maps_api !== 'undefined') {
				script.src = proto + '//maps.google.com/maps/api/js?v=3&libraries=places&callback=em_maps&key=' + EM.google_maps_api;
			} else {
				script.src = proto + '//maps.google.com/maps/api/js?v=3&libraries=places&callback=em_maps';
			}
			document.body.appendChild(script);
		} else if (typeof google === 'object' && typeof google.maps === 'object' && !em_maps_loaded) {
			em_maps();
		} else if (jQuery('script#google-maps').length > 0) {
			jQuery(window).load(function() {
				if (!em_maps_loaded) em_maps();
			});
		}
	}
}

function em_maps_load_locations(el) {
	var el = jQuery(el);
	var map_id = el.attr('id').replace('em-locations-map-', '');
	var em_data = jQuery.parseJSON(el.nextAll('.em-locations-map-coords').first().text());
	if (em_data == null) {
		var em_data = jQuery.parseJSON(jQuery('#em-locations-map-coords-' + map_id).text());
	}
	jQuery.getJSON(document.URL, em_data, function(data) {
		if (data.length > 0) {
			var map_options = {
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			if (typeof EM.google_map_id_styles == 'object' && typeof EM.google_map_id_styles[map_id] !== 'undefined') {
				console.log(EM.google_map_id_styles[map_id]);
				map_options.styles = EM.google_map_id_styles[map_id];
			} else if (typeof EM.google_maps_styles !== 'undefined') {
				map_options.styles = EM.google_maps_styles;
			}
			jQuery(document).triggerHandler('em_maps_locations_map_options', map_options);
			var marker_options = {};
			jQuery(document).triggerHandler('em_maps_location_marker_options', marker_options);
			maps[map_id] = new google.maps.Map(el[0], map_options);
			maps_markers[map_id] = [];
			var bounds = new google.maps.LatLngBounds();
			jQuery.map(data, function(location, i) {
				if (!(location.location_latitude == 0 && location.location_longitude == 0)) {
					var latitude = parseFloat(location.location_latitude);
					var longitude = parseFloat(location.location_longitude);
					var location_position = new google.maps.LatLng(latitude, longitude);
					jQuery.extend(marker_options, {
						position: location_position,
						map: maps[map_id]
					})
					var marker = new google.maps.Marker(marker_options);
					maps_markers[map_id].push(marker);
					marker.setTitle(location.location_name);
					var myContent = '<div class="em-map-balloon"><div id="em-map-balloon-' + map_id + '" class="em-map-balloon-content">' + location.location_balloon + '</div></div>';
					em_map_infobox(marker, myContent, maps[map_id]);
					bounds.extend(new google.maps.LatLng(latitude, longitude))
				}
			});
			maps[map_id].fitBounds(bounds);
			jQuery(document).triggerHandler('em_maps_locations_hook', [maps[map_id], data, map_id, maps_markers[map_id]]);
		} else {
			el.children().first().html('No locations found');
			jQuery(document).triggerHandler('em_maps_locations_hook_not_found', [el]);
		}
	});
}

function em_maps_load_location(el) {
	el = jQuery(el);
	var map_id = el.attr('id').replace('em-location-map-', '');
	em_LatLng = new google.maps.LatLng(jQuery('#em-location-map-coords-' + map_id + ' .lat').text(), jQuery('#em-location-map-coords-' + map_id + ' .lng').text());
	var map_options = {
		zoom: 14,
		center: em_LatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		gestureHandling: 'cooperative'
	};
	if (typeof EM.google_map_id_styles == 'object' && typeof EM.google_map_id_styles[map_id] !== 'undefined') {
		console.log(EM.google_map_id_styles[map_id]);
		map_options.styles = EM.google_map_id_styles[map_id];
	} else if (typeof EM.google_maps_styles !== 'undefined') {
		map_options.styles = EM.google_maps_styles;
	}
	jQuery(document).triggerHandler('em_maps_location_map_options', map_options);
	maps[map_id] = new google.maps.Map(document.getElementById('em-location-map-' + map_id), map_options);
	var marker_options = {
		position: em_LatLng,
		map: maps[map_id]
	};
	jQuery(document).triggerHandler('em_maps_location_marker_options', marker_options);
	maps_markers[map_id] = new google.maps.Marker(marker_options);
	infoWindow = new google.maps.InfoWindow({
		content: jQuery('#em-location-map-info-' + map_id + ' .em-map-balloon').get(0)
	});
	infoWindow.open(maps[map_id], maps_markers[map_id]);
	maps[map_id].panBy(40, -70);
	jQuery(document).triggerHandler('em_maps_location_hook', [maps[map_id], infoWindow, maps_markers[map_id], map_id]);
	jQuery(window).on('resize', function(e) {
		google.maps.event.trigger(maps[map_id], "resize");
		maps[map_id].setCenter(maps_markers[map_id].getPosition());
		maps[map_id].panBy(40, -70);
	});
}
jQuery(document).bind('em_search_ajax', function(e, vars, wrapper) {
	if (em_maps_loaded) {
		wrapper.find('.em-location-map').each(function(index, el) {
			em_maps_load_location(el);
		});
		wrapper.find('.em-locations-map').each(function(index, el) {
			em_maps_load_locations(el);
		});
	}
});

function em_maps() {
	jQuery('.em-location-map').each(function(index, el) {
		em_maps_load_location(el);
	});
	jQuery('.em-locations-map').each(function(index, el) {
		em_maps_load_locations(el);
	});
	if (jQuery('select#location-select-id, input#location-address').length > 0) {
		var map, marker;
		var refresh_map_location = function() {
			var location_latitude = jQuery('#location-latitude').val();
			var location_longitude = jQuery('#location-longitude').val();
			if (!(location_latitude == 0 && location_longitude == 0)) {
				var position = new google.maps.LatLng(location_latitude, location_longitude);
				marker.setPosition(position);
				var mapTitle = (jQuery('input#location-name').length > 0) ? jQuery('input#location-name').val() : jQuery('input#title').val();
				mapTitle = em_esc_attr(mapTitle);
				marker.setTitle(mapTitle);
				jQuery('#em-map').show();
				jQuery('#em-map-404').hide();
				google.maps.event.trigger(map, 'resize');
				map.setCenter(position);
				map.panBy(40, -55);
				infoWindow.setContent('<div id="location-balloon-content"><strong>' + mapTitle + '</strong><br>' + em_esc_attr(jQuery('#location-address').val()) + '<br>' + em_esc_attr(jQuery('#location-town').val()) + '</div>');
				infoWindow.open(map, marker);
				jQuery(document).triggerHandler('em_maps_location_hook', [map, infoWindow, marker, 0]);
			} else {
				jQuery('#em-map').hide();
				jQuery('#em-map-404').show();
			}
		};
		var get_map_by_id = function(id) {
			if (jQuery('#em-map').length > 0) {
				jQuery.getJSON(document.URL, {
					em_ajax_action: 'get_location',
					id: id
				}, function(data) {
					if (data.location_latitude != 0 && data.location_longitude != 0) {
						loc_latlng = new google.maps.LatLng(data.location_latitude, data.location_longitude);
						marker.setPosition(loc_latlng);
						marker.setTitle(data.location_name);
						marker.setDraggable(false);
						jQuery('#em-map').show();
						jQuery('#em-map-404').hide();
						map.setCenter(loc_latlng);
						map.panBy(40, -55);
						infoWindow.setContent('<div id="location-balloon-content">' + data.location_balloon + '</div>');
						infoWindow.open(map, marker);
						google.maps.event.trigger(map, 'resize');
						jQuery(document).triggerHandler('em_maps_location_hook', [map, infoWindow, marker, 0]);
					} else {
						jQuery('#em-map').hide();
						jQuery('#em-map-404').show();
					}
				});
			}
		};
		jQuery('#location-select-id, input#location-id').change(function() {
			get_map_by_id(jQuery(this).val());
		});
		jQuery('#location-name, #location-town, #location-address, #location-state, #location-postcode, #location-country').change(function() {
			var addresses = [jQuery('#location-address').val(), jQuery('#location-town').val(), jQuery('#location-state').val(), jQuery('#location-postcode').val()];
			var address = '';
			jQuery.each(addresses, function(i, val) {
				if (val != '') {
					address = (address == '') ? address + val : address + ', ' + val;
				}
			});
			if (address == '') {
				jQuery('#em-map').hide();
				jQuery('#em-map-404').show();
				return false;
			}
			if (jQuery('#location-country option:selected').val() != 0) {
				address = (address == '') ? address + jQuery('#location-country option:selected').text() : address + ', ' + jQuery('#location-country option:selected').text();
			}
			if (address != '' && jQuery('#em-map').length > 0) {
				geocoder.geocode({
					'address': address
				}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						jQuery('#location-latitude').val(results[0].geometry.location.lat());
						jQuery('#location-longitude').val(results[0].geometry.location.lng());
					}
					refresh_map_location();
				});
			}
		});
		if (jQuery('#em-map').length > 0) {
			var em_LatLng = new google.maps.LatLng(0, 0);
			var map_options = {
				zoom: 14,
				center: em_LatLng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false,
				gestureHandling: 'cooperative'
			};
			if (typeof EM.google_maps_styles !== 'undefined') {
				map_options.styles = EM.google_maps_styles;
			}
			map = new google.maps.Map(document.getElementById('em-map'), map_options);
			var marker = new google.maps.Marker({
				position: em_LatLng,
				map: map,
				draggable: true
			});
			infoWindow = new google.maps.InfoWindow({
				content: ''
			});
			var geocoder = new google.maps.Geocoder();
			google.maps.event.addListener(infoWindow, 'domready', function() {
				document.getElementById('location-balloon-content').parentNode.style.overflow = '';
				document.getElementById('location-balloon-content').parentNode.parentNode.style.overflow = '';
			});
			google.maps.event.addListener(marker, 'dragend', function() {
				var position = marker.getPosition();
				jQuery('#location-latitude').val(position.lat());
				jQuery('#location-longitude').val(position.lng());
				map.setCenter(position);
				map.panBy(40, -55);
			});
			if (jQuery('#location-select-id').length > 0) {
				jQuery('#location-select-id').trigger('change');
			} else {
				refresh_map_location();
			}
			jQuery(document).triggerHandler('em_map_loaded', [map, infoWindow, marker]);
		}
		jQuery(window).on('resize', function(e) {
			google.maps.event.trigger(map, "resize");
			map.setCenter(marker.getPosition());
			map.panBy(40, -55);
		});
	}
	em_maps_loaded = true;
	jQuery(document).triggerHandler('em_maps_loaded');
}

function em_map_infobox(marker, message, map) {
	var iw = new google.maps.InfoWindow({
		content: message
	});
	google.maps.event.addListener(marker, 'click', function() {
		if (infoWindow) infoWindow.close();
		infoWindow = iw;
		iw.open(map, marker);
	});
}

function em_esc_attr(str) {
	if (typeof str !== 'string') return '';
	return str.replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
}
(function(e) {
	function t(t, n, r, i) {
		t.value = e(n).text();
		e(t).change();
		if (!navigator.userAgent.match(/msie/i)) {
			t.focus()
		}
		r.hide()
	}

	function n(e, t) {
		var n = e.getHours();
		var i = t.show24Hours ? n : (n + 11) % 12 + 1;
		var s = e.getMinutes();
		return r(i) + t.separator + r(s) + (t.show24Hours ? "" : n < 12 ? " AM" : " PM")
	}

	function r(e) {
		return (e < 10 ? "0" : "") + e
	}

	function i(e, t) {
		return typeof e == "object" ? o(e) : s(e, t)
	}

	function s(e, t) {
		if (e) {
			var n = e.split(t.separator);
			var r = parseFloat(n[0]);
			var i = parseFloat(n[1]);
			if (!t.show24Hours) {
				if (r === 12 && e.indexOf("AM") !== -1) {
					r = 0
				} else if (r !== 12 && e.indexOf("PM") !== -1) {
					r += 12
				}
			}
			var s = new Date(0, 0, 0, r, i, 0);
			return o(s)
		}
		return null
	}

	function o(e) {
		e.setFullYear(2001);
		e.setMonth(0);
		e.setDate(0);
		return e
	}
	e.fn.timePicker = function(t) {
		var n = e.extend({}, e.fn.timePicker.defaults, t);
		return this.each(function() {
			e.timePicker(this, n)
		})
	};
	e.timePicker = function(t, n) {
		var r = e(t)[0];
		return r.timePicker || (r.timePicker = new jQuery._timePicker(r, n))
	};
	e.timePicker.version = "0.3";
	e._timePicker = function(r, u) {
		var a = false;
		var f = false;
		var l = i(u.startTime, u);
		var c = i(u.endTime, u);
		var h = "selected";
		var p = "li." + h;
		e(r).attr("autocomplete", "OFF");
		var d = [];
		var v = new Date(l);
		while (v <= c) {
			d[d.length] = n(v, u);
			v = new Date(v.setMinutes(v.getMinutes() + u.step))
		}
		var m = e('<div class="time-picker' + (u.show24Hours ? "" : " time-picker-12hours") + '"></div>');
		var g = e("<ul></ul>");
		for (var y = 0; y < d.length; y++) {
			g.append("<li>" + d[y] + "</li>")
		}
		m.append(g);
		m.appendTo("body").hide();
		m.mouseover(function() {
			a = true
		}).mouseout(function() {
			a = false
		});
		e("li", g).mouseover(function() {
			if (!f) {
				e(p, m).removeClass(h);
				e(this).addClass(h)
			}
		}).mousedown(function() {
			a = true
		}).click(function() {
			t(r, this, m, u);
			a = false
		});
		var b = function() {
			if (m.is(":visible")) {
				return false
			}
			e("li", m).removeClass(h);
			var t = e(r).offset();
			m.css({
				top: t.top + r.offsetHeight,
				left: t.left
			});
			m.show();
			var i = r.value ? s(r.value, u) : l;
			var a = l.getHours() * 60 + l.getMinutes();
			var f = i.getHours() * 60 + i.getMinutes() - a;
			var p = Math.round(f / u.step);
			var d = o(new Date(0, 0, 0, 0, p * u.step + a, 0));
			d = l < d && d <= c ? d : l;
			var v = e("li:contains(" + n(d, u) + ")", m);
			if (v.length) {
				v.addClass(h);
				m[0].scrollTop = v[0].offsetTop
			}
			return true
		};
		e(r).focus(b).click(b);
		e(r).blur(function() {
			if (!a) {
				m.hide()
			}
		});
		e(r)["keydown"](function(n) {
			var i;
			f = true;
			var s = m[0].scrollTop;
			switch (n.keyCode) {
				case 38:
					if (b()) {
						return false
					}
					i = e(p, g);
					var o = i.prev().addClass(h)[0];
					if (o) {
						i.removeClass(h);
						if (o.offsetTop < s) {
							m[0].scrollTop = s - o.offsetHeight
						}
					} else {
						i.removeClass(h);
						o = e("li:last", g).addClass(h)[0];
						m[0].scrollTop = o.offsetTop - o.offsetHeight
					}
					return false;
					break;
				case 40:
					if (b()) {
						return false
					}
					i = e(p, g);
					var a = i.next().addClass(h)[0];
					if (a) {
						i.removeClass(h);
						if (a.offsetTop + a.offsetHeight > s + m[0].offsetHeight) {
							m[0].scrollTop = s + a.offsetHeight
						}
					} else {
						i.removeClass(h);
						a = e("li:first", g).addClass(h)[0];
						m[0].scrollTop = 0
					}
					return false;
					break;
				case 13:
					if (m.is(":visible")) {
						var l = e(p, g)[0];
						t(r, l, m, u)
					}
					return false;
					break;
				case 27:
					m.hide();
					return false;
					break
			}
			return true
		});
		e(r).keyup(function(e) {
			f = false
		});
		this.getTime = function() {
			return s(r.value, u)
		};
		this.setTime = function(t) {
			r.value = n(i(t, u), u);
			e(r).change()
		}
	};
	e.fn.timePicker.defaults = {
		step: 30,
		startTime: new Date(0, 0, 0, 0, 0, 0),
		endTime: new Date(0, 0, 0, 23, 30, 0),
		separator: ":",
		show24Hours: true
	}
})(jQuery);
(function($) {
	'use strict';
	if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
		return;
	}
	wpcf7 = $.extend({
		cached: 0,
		inputs: []
	}, wpcf7);
	$(function() {
		wpcf7.supportHtml5 = (function() {
			var features = {};
			var input = document.createElement('input');
			features.placeholder = 'placeholder' in input;
			var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
			$.each(inputTypes, function(index, value) {
				input.setAttribute('type', value);
				features[value] = input.type !== 'text';
			});
			return features;
		})();
		$('div.wpcf7 > form').each(function() {
			var $form = $(this);
			wpcf7.initForm($form);
			if (wpcf7.cached) {
				wpcf7.refill($form);
			}
		});
	});
	wpcf7.getId = function(form) {
		return parseInt($('input[name="_wpcf7"]', form).val(), 10);
	};
	wpcf7.initForm = function(form) {
		var $form = $(form);
		$form.submit(function(event) {
			if (!wpcf7.supportHtml5.placeholder) {
				$('[placeholder].placeheld', $form).each(function(i, n) {
					$(n).val('').removeClass('placeheld');
				});
			}
			if (typeof window.FormData === 'function') {
				wpcf7.submit($form);
				event.preventDefault();
			}
		});
		$('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
		wpcf7.toggleSubmit($form);
		$form.on('click', '.wpcf7-acceptance', function() {
			wpcf7.toggleSubmit($form);
		});
		$('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
			var name = $(this).attr('name');
			$form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
		});
		$('.wpcf7-list-item.has-free-text', $form).each(function() {
			var $freetext = $(':input.wpcf7-free-text', this);
			var $wrap = $(this).closest('.wpcf7-form-control');
			if ($(':checkbox, :radio', this).is(':checked')) {
				$freetext.prop('disabled', false);
			} else {
				$freetext.prop('disabled', true);
			}
			$wrap.on('change', ':checkbox, :radio', function() {
				var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
				if ($cb.is(':checked')) {
					$freetext.prop('disabled', false).focus();
				} else {
					$freetext.prop('disabled', true);
				}
			});
		});
		if (!wpcf7.supportHtml5.placeholder) {
			$('[placeholder]', $form).each(function() {
				$(this).val($(this).attr('placeholder'));
				$(this).addClass('placeheld');
				$(this).focus(function() {
					if ($(this).hasClass('placeheld')) {
						$(this).val('').removeClass('placeheld');
					}
				});
				$(this).blur(function() {
					if ('' === $(this).val()) {
						$(this).val($(this).attr('placeholder'));
						$(this).addClass('placeheld');
					}
				});
			});
		}
		if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
			$form.find('input.wpcf7-date[type="date"]').each(function() {
				$(this).datepicker({
					dateFormat: 'yy-mm-dd',
					minDate: new Date($(this).attr('min')),
					maxDate: new Date($(this).attr('max'))
				});
			});
		}
		if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
			$form.find('input.wpcf7-number[type="number"]').each(function() {
				$(this).spinner({
					min: $(this).attr('min'),
					max: $(this).attr('max'),
					step: $(this).attr('step')
				});
			});
		}
		$('.wpcf7-character-count', $form).each(function() {
			var $count = $(this);
			var name = $count.attr('data-target-name');
			var down = $count.hasClass('down');
			var starting = parseInt($count.attr('data-starting-value'), 10);
			var maximum = parseInt($count.attr('data-maximum-value'), 10);
			var minimum = parseInt($count.attr('data-minimum-value'), 10);
			var updateCount = function(target) {
				var $target = $(target);
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr('data-current-value', count);
				$count.text(count);
				if (maximum && maximum < length) {
					$count.addClass('too-long');
				} else {
					$count.removeClass('too-long');
				}
				if (minimum && length < minimum) {
					$count.addClass('too-short');
				} else {
					$count.removeClass('too-short');
				}
			};
			$(':input[name="' + name + '"]', $form).each(function() {
				updateCount(this);
				$(this).keyup(function() {
					updateCount(this);
				});
			});
		});
		$form.on('change', '.wpcf7-validates-as-url', function() {
			var val = $.trim($(this).val());
			if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
				val = val.replace(/^\/+/, '');
				val = 'http://' + val;
			}
			$(this).val(val);
		});
	};
	wpcf7.submit = function(form) {
		if (typeof window.FormData !== 'function') {
			return;
		}
		var $form = $(form);
		$('.ajax-loader', $form).addClass('is-active');
		wpcf7.clearResponse($form);
		var formData = new FormData($form.get(0));
		var detail = {
			id: $form.closest('div.wpcf7').attr('id'),
			status: 'init',
			inputs: [],
			formData: formData
		};
		$.each($form.serializeArray(), function(i, field) {
			if ('_wpcf7' == field.name) {
				detail.contactFormId = field.value;
			} else if ('_wpcf7_version' == field.name) {
				detail.pluginVersion = field.value;
			} else if ('_wpcf7_locale' == field.name) {
				detail.contactFormLocale = field.value;
			} else if ('_wpcf7_unit_tag' == field.name) {
				detail.unitTag = field.value;
			} else if ('_wpcf7_container_post' == field.name) {
				detail.containerPostId = field.value;
			} else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
				var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
				detail.inputs.push({
					name: owner + '-free-text',
					value: field.value
				});
			} else if (field.name.match(/^_/)) {} else {
				detail.inputs.push(field);
			}
		});
		wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
		var ajaxSuccess = function(data, status, xhr, $form) {
			detail.id = $(data.into).attr('id');
			detail.status = data.status;
			detail.apiResponse = data;
			var $message = $('.wpcf7-response-output', $form);
			switch (data.status) {
				case 'validation_failed':
					$.each(data.invalidFields, function(i, n) {
						$(n.into, $form).each(function() {
							wpcf7.notValidTip(this, n.message);
							$('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
							$('[aria-invalid]', this).attr('aria-invalid', 'true');
						});
					});
					$message.addClass('wpcf7-validation-errors');
					$form.addClass('invalid');
					wpcf7.triggerEvent(data.into, 'invalid', detail);
					break;
				case 'acceptance_missing':
					$message.addClass('wpcf7-acceptance-missing');
					$form.addClass('unaccepted');
					wpcf7.triggerEvent(data.into, 'unaccepted', detail);
					break;
				case 'spam':
					$message.addClass('wpcf7-spam-blocked');
					$form.addClass('spam');
					wpcf7.triggerEvent(data.into, 'spam', detail);
					break;
				case 'aborted':
					$message.addClass('wpcf7-aborted');
					$form.addClass('aborted');
					wpcf7.triggerEvent(data.into, 'aborted', detail);
					break;
				case 'mail_sent':
					$message.addClass('wpcf7-mail-sent-ok');
					$form.addClass('sent');
					wpcf7.triggerEvent(data.into, 'mailsent', detail);
					break;
				case 'mail_failed':
					$message.addClass('wpcf7-mail-sent-ng');
					$form.addClass('failed');
					wpcf7.triggerEvent(data.into, 'mailfailed', detail);
					break;
				default:
					var customStatusClass = 'custom-' + data.status.replace(/[^0-9a-z]+/i, '-');
					$message.addClass('wpcf7-' + customStatusClass);
					$form.addClass(customStatusClass);
			}
			wpcf7.refill($form, data);
			wpcf7.triggerEvent(data.into, 'submit', detail);
			if ('mail_sent' == data.status) {
				$form.each(function() {
					this.reset();
				});
				wpcf7.toggleSubmit($form);
			}
			if (!wpcf7.supportHtml5.placeholder) {
				$form.find('[placeholder].placeheld').each(function(i, n) {
					$(n).val($(n).attr('placeholder'));
				});
			}
			$message.html('').append(data.message).slideDown('fast');
			$message.attr('role', 'alert');
			$('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
				var $response = $(this);
				$response.html('').attr('role', '').append(data.message);
				if (data.invalidFields) {
					var $invalids = $('<ul></ul>');
					$.each(data.invalidFields, function(i, n) {
						if (n.idref) {
							var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
						} else {
							var $li = $('<li></li>').append(n.message);
						}
						$invalids.append($li);
					});
					$response.append($invalids);
				}
				$response.attr('role', 'alert').focus();
			});
		};
		$.ajax({
			type: 'POST',
			url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		}).done(function(data, status, xhr) {
			ajaxSuccess(data, status, xhr, $form);
			$('.ajax-loader', $form).removeClass('is-active');
		}).fail(function(xhr, status, error) {
			var $e = $('<div class="ajax-error"></div>').text(error.message);
			$form.after($e);
		});
	};
	wpcf7.triggerEvent = function(target, name, detail) {
		var $target = $(target);
		var event = new CustomEvent('wpcf7' + name, {
			bubbles: true,
			detail: detail
		});
		$target.get(0).dispatchEvent(event);
		$target.trigger('wpcf7:' + name, detail);
		$target.trigger(name + '.wpcf7', detail);
	};
	wpcf7.toggleSubmit = function(form, state) {
		var $form = $(form);
		var $submit = $('input:submit', $form);
		if (typeof state !== 'undefined') {
			$submit.prop('disabled', !state);
			return;
		}
		if ($form.hasClass('wpcf7-acceptance-as-validation')) {
			return;
		}
		$submit.prop('disabled', false);
		$('.wpcf7-acceptance', $form).each(function() {
			var $span = $(this);
			var $input = $('input:checkbox', $span);
			if (!$span.hasClass('optional')) {
				if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
					$submit.prop('disabled', true);
					return false;
				}
			}
		});
	};
	wpcf7.notValidTip = function(target, message) {
		var $target = $(target);
		$('.wpcf7-not-valid-tip', $target).remove();
		$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
		if ($target.is('.use-floating-validation-tip *')) {
			var fadeOut = function(target) {
				$(target).not(':hidden').animate({
					opacity: 0
				}, 'fast', function() {
					$(this).css({
						'z-index': -100
					});
				});
			};
			$target.on('mouseover', '.wpcf7-not-valid-tip', function() {
				fadeOut(this);
			});
			$target.on('focus', ':input', function() {
				fadeOut($('.wpcf7-not-valid-tip', $target));
			});
		}
	};
	wpcf7.refill = function(form, data) {
		var $form = $(form);
		var refillCaptcha = function($form, items) {
			$.each(items, function(i, n) {
				$form.find(':input[name="' + i + '"]').val('');
				$form.find('img.wpcf7-captcha-' + i).attr('src', n);
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
				$form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
			});
		};
		var refillQuiz = function($form, items) {
			$.each(items, function(i, n) {
				$form.find(':input[name="' + i + '"]').val('');
				$form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
				$form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
			});
		};
		if (typeof data === 'undefined') {
			$.ajax({
				type: 'GET',
				url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
				beforeSend: function(xhr) {
					var nonce = $form.find(':input[name="_wpnonce"]').val();
					if (nonce) {
						xhr.setRequestHeader('X-WP-Nonce', nonce);
					}
				},
				dataType: 'json'
			}).done(function(data, status, xhr) {
				if (data.captcha) {
					refillCaptcha($form, data.captcha);
				}
				if (data.quiz) {
					refillQuiz($form, data.quiz);
				}
			});
		} else {
			if (data.captcha) {
				refillCaptcha($form, data.captcha);
			}
			if (data.quiz) {
				refillQuiz($form, data.quiz);
			}
		}
	};
	wpcf7.clearResponse = function(form) {
		var $form = $(form);
		$form.removeClass('invalid spam sent failed');
		$form.siblings('.screen-reader-response').html('').attr('role', '');
		$('.wpcf7-not-valid-tip', $form).remove();
		$('[aria-invalid]', $form).attr('aria-invalid', 'false');
		$('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
		$('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
	};
	wpcf7.apiSettings.getRoute = function(path) {
		var url = wpcf7.apiSettings.root;
		url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
		return url;
	};
})(jQuery);
(function() {
	if (typeof window.CustomEvent === "function") return false;

	function CustomEvent(event, params) {
		params = params || {
			bubbles: false,
			cancelable: false,
			detail: undefined
		};
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
})();
! function(e) {
	e(function() {
		var s, a;
		if (!themeMyLogin.action) return;
		switch (s = e("#user_login"), themeMyLogin.action) {
			case "activate":
				(a = e("#key")).length && a.focus();
				break;
			case "lostpassword":
			case "retrievepassword":
			case "register":
				s.focus();
				break;
			case "resetpass":
			case "rp":
				e("#pass1").focus();
				break;
			case "login":
				-1 != themeMyLogin.errors.indexOf("invalid_username") && s.val(""), s.val() ? e("#user_pass").focus() : s.focus()
		}
	})
}(jQuery),
function(e) {
	function s() {
		var s = e("#pass1").val(),
			a = e("#pass-strength-result");
		if (a.removeClass("short bad good strong"), s) switch (wp.passwordStrength.meter(s, wp.passwordStrength.userInputBlacklist(), s)) {
			case -1:
				a.addClass("bad").html(pwsL10n.unknown);
				break;
			case 2:
				a.addClass("bad").html(pwsL10n.bad);
				break;
			case 3:
				a.addClass("good").html(pwsL10n.good);
				break;
			case 4:
				a.addClass("strong").html(pwsL10n.strong);
				break;
			case 5:
				a.addClass("short").html(pwsL10n.mismatch);
				break;
			default:
				a.addClass("short").html(pwsL10n.short)
		} else a.html("&nbsp;")
	}
	e(document).ready(function() {
		e("#pass1").val("").on("keyup paste", s)
	})
}(jQuery);
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function() {
	"use strict";

	function e(e) {
		function t(t, n) {
			var s, h, k = t == window,
				y = n && n.message !== undefined ? n.message : undefined;
			if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
				if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
						fadeOut: 0
					}), y && "string" != typeof y && (y.parentNode || y.jquery)) {
					var m = y.jquery ? y[0] : y,
						g = {};
					e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
				}
				e(t).data("blockUI.onUnblock", n.onUnblock);
				var v, I, w, U, x = n.baseZ;
				v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
				var C = [v, I, w],
					S = e(k ? "body" : t);
				e.each(C, function() {
					this.appendTo(S)
				}), n.theme && n.draggable && e.fn.draggable && w.draggable({
					handle: ".ui-dialog-titlebar",
					cancel: "li"
				});
				var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
				if (u || O) {
					if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
						T = a(t, "borderLeftWidth"),
						M = E ? "(0 - " + E + ")" : 0,
						B = T ? "(0 - " + T + ")" : 0;
					e.each(C, function(e, t) {
						var o = t[0].style;
						if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
						else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
						else if (!n.centerY && k) {
							var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
							o.setExpression("top", i)
						}
					})
				}
				if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
					var j = n.onBlock ? n.onBlock : c,
						H = n.showOverlay && !y ? j : c,
						z = y ? j : c;
					n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
				} else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
				if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
					var W = setTimeout(function() {
						k ? e.unblockUI(n) : e(t).unblock(n)
					}, n.timeout);
					e(t).data("blockUI.timeout", W)
				}
			}
		}

		function o(t, o) {
			var s, l = t == window,
				d = e(t),
				a = d.data("blockUI.history"),
				c = d.data("blockUI.timeout");
			c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
			var r;
			r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function() {
				0 == --s && n(r, a, o, t)
			})) : n(r, a, o, t)
		}

		function n(t, o, n, i) {
			var s = e(i);
			if (!s.data("blockUI.isBlocked")) {
				t.each(function(e, t) {
					this.parentNode && this.parentNode.removeChild(this)
				}), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
				var l = e(document.body),
					d = l.width(),
					a = l[0].style.width;
				l.width(d - 1).width(d), l[0].style.width = a
			}
		}

		function i(t, o, n) {
			var i = o == window,
				l = e(o);
			if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
				var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
				t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
			}
		}

		function s(t) {
			if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
				var o = b,
					n = !t.shiftKey && t.target === o[o.length - 1],
					i = t.shiftKey && t.target === o[0];
				if (n || i) return setTimeout(function() {
					l(i)
				}, 10), !1
			}
			var s = t.data,
				d = e(t.target);
			return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
		}

		function l(e) {
			if (b) {
				var t = b[!0 === e ? b.length - 1 : 0];
				t && t.focus()
			}
		}

		function d(e, t, o) {
			var n = e.parentNode,
				i = e.style,
				s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
				l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
			t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
		}

		function a(t, o) {
			return parseInt(e.css(t, o), 10) || 0
		}
		e.fn._fadeIn = e.fn.fadeIn;
		var c = e.noop || function() {},
			r = /MSIE/.test(navigator.userAgent),
			u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
			f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
		e.blockUI = function(e) {
			t(window, e)
		}, e.unblockUI = function(e) {
			o(window, e)
		}, e.growlUI = function(t, o, n, i) {
			var s = e('<div class="growlUI"></div>');
			t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
			var l = function(t) {
				t = t || {}, e.blockUI({
					message: s,
					fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
					fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
					timeout: "undefined" != typeof t.timeout ? t.timeout : n,
					centerY: !1,
					showOverlay: !1,
					onUnblock: i,
					css: e.blockUI.defaults.growlCSS
				})
			};
			l();
			s.css("opacity");
			s.mouseover(function() {
				l({
					fadeIn: 0,
					timeout: 3e4
				});
				var t = e(".blockMsg");
				t.stop(), t.fadeTo(300, 1)
			}).mouseout(function() {
				e(".blockMsg").fadeOut(1e3)
			})
		}, e.fn.block = function(o) {
			if (this[0] === window) return e.blockUI(o), this;
			var n = e.extend({}, e.blockUI.defaults, o || {});
			return this.each(function() {
				var t = e(this);
				n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
					fadeOut: 0
				})
			}), this.each(function() {
				"static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
			})
		}, e.fn.unblock = function(t) {
			return this[0] === window ? (e.unblockUI(t), this) : this.each(function() {
				o(this, t)
			})
		}, e.blockUI.version = 2.7, e.blockUI.defaults = {
			message: "<h1>Please wait...</h1>",
			title: null,
			draggable: !0,
			theme: !1,
			css: {
				padding: 0,
				margin: 0,
				width: "30%",
				top: "40%",
				left: "35%",
				textAlign: "center",
				color: "#000",
				border: "3px solid #aaa",
				backgroundColor: "#fff",
				cursor: "wait"
			},
			themedCSS: {
				width: "30%",
				top: "40%",
				left: "35%"
			},
			overlayCSS: {
				backgroundColor: "#000",
				opacity: .6,
				cursor: "wait"
			},
			cursorReset: "default",
			growlCSS: {
				width: "350px",
				top: "10px",
				left: "",
				right: "10px",
				border: "none",
				padding: "5px",
				opacity: .6,
				cursor: "default",
				color: "#fff",
				backgroundColor: "#000",
				"-webkit-border-radius": "10px",
				"-moz-border-radius": "10px",
				"border-radius": "10px"
			},
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
			forceIframe: !1,
			baseZ: 1e3,
			centerX: !0,
			centerY: !0,
			allowBodyStretch: !0,
			bindEvents: !0,
			constrainTabKey: !0,
			fadeIn: 200,
			fadeOut: 400,
			timeout: 0,
			showOverlay: !0,
			focusInput: !0,
			focusableElements: ":input:enabled:visible",
			onBlock: null,
			onUnblock: null,
			onOverlayClick: null,
			quirksmodeOffsetHack: 4,
			blockMsgClass: "blockMsg",
			ignoreIfBlocked: !1
		};
		var p = null,
			b = []
	}
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
jQuery(function(e) {
	if ("undefined" == typeof wc_add_to_cart_params) return !1;
	var t = function() {
		e(document.body).on("click", ".add_to_cart_button", this.onAddToCart).on("click", ".remove_from_cart_button", this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart", this.updateCartPage).on("added_to_cart removed_from_cart", this.updateFragments)
	};
	t.prototype.onAddToCart = function(t) {
		var a = e(this);
		if (a.is(".ajax_add_to_cart")) {
			if (!a.attr("data-product_id")) return !0;
			t.preventDefault(), a.removeClass("added"), a.addClass("loading");
			var o = {};
			e.each(a.data(), function(t, a) {
				o[t] = a
			}), e(document.body).trigger("adding_to_cart", [a, o]), e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), o, function(t) {
				t && (t.error && t.product_url ? window.location = t.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? e(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]) : window.location = wc_add_to_cart_params.cart_url)
			})
		}
	}, t.prototype.onRemoveFromCart = function(t) {
		var a = e(this),
			o = a.closest(".woocommerce-mini-cart-item");
		t.preventDefault(), o.block({
			message: null,
			overlayCSS: {
				opacity: .6
			}
		}), e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"), {
			cart_item_key: a.data("cart_item_key")
		}, function(t) {
			t && t.fragments ? e(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash, a]) : window.location = a.attr("href")
		}).fail(function() {
			window.location = a.attr("href")
		})
	}, t.prototype.updateButton = function(t, a, o, r) {
		(r = void 0 !== r && r) && (r.removeClass("loading"), r.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== r.parent().find(".added_to_cart").length || r.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), e(document.body).trigger("wc_cart_button_updated", [r]))
	}, t.prototype.updateCartPage = function() {
		var t = window.location.toString().replace("add-to-cart", "added-to-cart");
		e(".shop_table.cart").load(t + " .shop_table.cart:eq(0) > *", function() {
			e(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), e(document.body).trigger("cart_page_refreshed")
		}), e(".cart_totals").load(t + " .cart_totals:eq(0) > *", function() {
			e(".cart_totals").stop(!0).css("opacity", "1").unblock(), e(document.body).trigger("cart_totals_refreshed")
		})
	}, t.prototype.updateFragments = function(t, a) {
		a && (e.each(a, function(t) {
			e(t).addClass("updating").fadeTo("400", "0.6").block({
				message: null,
				overlayCSS: {
					opacity: .6
				}
			})
		}), e.each(a, function(t, a) {
			e(t).replaceWith(a), e(t).stop(!0).css("opacity", "1").unblock()
		}), e(document.body).trigger("wc_fragments_loaded"))
	}, new t
});
jQuery(function(i) {
	i(".woocommerce-ordering").on("change", "select.orderby", function() {
		i(this).closest("form").submit()
	}), i("input.qty:not(.product-quantity input.qty)").each(function() {
		var o = parseFloat(i(this).attr("min"));
		0 <= o && parseFloat(i(this).val()) < o && i(this).val(o)
	}), i(".woocommerce-store-notice__dismiss-link").click(function() {
		Cookies.set("store_notice", "hidden", {
			path: "/"
		}), i(".woocommerce-store-notice").hide()
	}), "hidden" === Cookies.get("store_notice") ? i(".woocommerce-store-notice").hide() : i(".woocommerce-store-notice").show(), i(document.body).on("click", function() {
		i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
	}), i(".woocommerce-input-wrapper").on("click", function(o) {
		o.stopPropagation()
	}), i(".woocommerce-input-wrapper :input").on("keydown", function(o) {
		var e = i(this).parent().find("span.description");
		if (27 === o.which && e.length && e.is(":visible")) return e.prop("aria-hidden", !0).slideUp(250), o.preventDefault(), !1
	}).on("click focus", function() {
		var o = i(this).parent(),
			e = o.find("span.description");
		o.addClass("currentTarget"), i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), e.length && e.is(":hidden") && e.prop("aria-hidden", !1).slideDown(250), o.removeClass("currentTarget")
	}), i.scroll_to_notices = function(o) {
		o.length && i("html, body").animate({
			scrollTop: o.offset().top - 100
		}, 1e3)
	}
});
jQuery(function(n) {
	if ("undefined" == typeof wc_cart_fragments_params) return !1;
	var t = !0,
		o = wc_cart_fragments_params.cart_hash_key;
	try {
		t = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
	} catch (w) {
		t = !1
	}

	function a() {
		t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
	}

	function s(e) {
		t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
	}
	var e = {
		url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
		type: "POST",
		success: function(e) {
			e && e.fragments && (n.each(e.fragments, function(e, t) {
				n(e).replaceWith(t)
			}), t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)), s(e.cart_hash), e.cart_hash && a()), n(document.body).trigger("wc_fragments_refreshed"))
		}
	};

	function r() {
		n.ajax(e)
	}
	if (t) {
		var i = null;
		n(document.body).on("wc_fragment_refresh updated_wc_div", function() {
			r()
		}), n(document.body).on("added_to_cart removed_from_cart", function(e, t, n) {
			var r = sessionStorage.getItem(o);
			null !== r && r !== undefined && "" !== r || a(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), s(n)
		}), n(document.body).on("wc_fragments_refreshed", function() {
			clearTimeout(i), i = setTimeout(r, 864e5)
		}), n(window).on("storage onstorage", function(e) {
			o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && r()
		}), n(window).on("pageshow", function(e) {
			e.originalEvent.persisted && (n(".widget_shopping_cart_content").empty(), n(document.body).trigger("wc_fragment_refresh"))
		});
		try {
			var c = n.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
				_ = sessionStorage.getItem(o),
				g = Cookies.get("woocommerce_cart_hash"),
				m = sessionStorage.getItem("wc_cart_created");
			if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
			if (m) {
				var d = 1 * m + 864e5,
					f = (new Date).getTime();
				if (d < f) throw "Fragment expired";
				i = setTimeout(r, d - f)
			}
			if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
			n.each(c, function(e, t) {
				n(e).replaceWith(t)
			}), n(document.body).trigger("wc_fragments_loaded")
		} catch (w) {
			r()
		}
	} else r();
	0 < Cookies.get("woocommerce_items_in_cart") ? n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), n(document.body).on("adding_to_cart", function() {
		n(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
	})
});
/*!
 * accounting.js v0.4.2
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */
! function(n, r) {
	function e(n) {
		return !!("" === n || n && n.charCodeAt && n.substr)
	}

	function t(n) {
		return p ? p(n) : "[object Array]" === l.call(n)
	}

	function o(n) {
		return n && "[object Object]" === l.call(n)
	}

	function a(n, r) {
		var e;
		n = n || {}, r = r || {};
		for (e in r) r.hasOwnProperty(e) && null == n[e] && (n[e] = r[e]);
		return n
	}

	function i(n, r, e) {
		var t, o, a = [];
		if (!n) return a;
		if (f && n.map === f) return n.map(r, e);
		for (t = 0, o = n.length; t < o; t++) a[t] = r.call(e, n[t], t, n);
		return a
	}

	function u(n, r) {
		return n = Math.round(Math.abs(n)), isNaN(n) ? r : n
	}

	function c(n) {
		var r = s.settings.currency.format;
		return "function" == typeof n && (n = n()), e(n) && n.match("%v") ? {
			pos: n,
			neg: n.replace("-", "").replace("%v", "-%v"),
			zero: n
		} : n && n.pos && n.pos.match("%v") ? n : e(r) ? s.settings.currency.format = {
			pos: r,
			neg: r.replace("%v", "-%v"),
			zero: r
		} : r
	}
	var s = {};
	s.version = "0.4.1", s.settings = {
		currency: {
			symbol: "$",
			format: "%s%v",
			decimal: ".",
			thousand: ",",
			precision: 2,
			grouping: 3
		},
		number: {
			precision: 0,
			grouping: 3,
			thousand: ",",
			decimal: "."
		}
	};
	var f = Array.prototype.map,
		p = Array.isArray,
		l = Object.prototype.toString,
		m = s.unformat = s.parse = function(n, r) {
			if (t(n)) return i(n, function(n) {
				return m(n, r)
			});
			if ("number" == typeof(n = n || 0)) return n;
			r = r || s.settings.number.decimal;
			var e = new RegExp("[^0-9-" + r + "]", ["g"]),
				o = parseFloat(("" + n).replace(/\((.*)\)/, "-$1").replace(e, "").replace(r, "."));
			return isNaN(o) ? 0 : o
		},
		d = s.toFixed = function(n, r) {
			r = u(r, s.settings.number.precision);
			var e = Math.pow(10, r);
			return (Math.round(s.unformat(n) * e) / e).toFixed(r)
		},
		g = s.formatNumber = s.format = function(n, r, e, c) {
			if (t(n)) return i(n, function(n) {
				return g(n, r, e, c)
			});
			n = m(n);
			var f = a(o(r) ? r : {
					precision: r,
					thousand: e,
					decimal: c
				}, s.settings.number),
				p = u(f.precision),
				l = n < 0 ? "-" : "",
				h = parseInt(d(Math.abs(n || 0), p), 10) + "",
				y = h.length > 3 ? h.length % 3 : 0;
			return l + (y ? h.substr(0, y) + f.thousand : "") + h.substr(y).replace(/(\d{3})(?=\d)/g, "$1" + f.thousand) + (p ? f.decimal + d(Math.abs(n), p).split(".")[1] : "")
		},
		h = s.formatMoney = function(n, r, e, f, p, l) {
			if (t(n)) return i(n, function(n) {
				return h(n, r, e, f, p, l)
			});
			n = m(n);
			var d = a(o(r) ? r : {
					symbol: r,
					precision: e,
					thousand: f,
					decimal: p,
					format: l
				}, s.settings.currency),
				y = c(d.format);
			return (n > 0 ? y.pos : n < 0 ? y.neg : y.zero).replace("%s", d.symbol).replace("%v", g(Math.abs(n), u(d.precision), d.thousand, d.decimal))
		};
	s.formatColumn = function(n, r, f, p, l, d) {
		if (!n) return [];
		var h = a(o(r) ? r : {
				symbol: r,
				precision: f,
				thousand: p,
				decimal: l,
				format: d
			}, s.settings.currency),
			y = c(h.format),
			b = y.pos.indexOf("%s") < y.pos.indexOf("%v"),
			v = 0;
		return i(i(n, function(n, r) {
			if (t(n)) return s.formatColumn(n, h);
			var e = ((n = m(n)) > 0 ? y.pos : n < 0 ? y.neg : y.zero).replace("%s", h.symbol).replace("%v", g(Math.abs(n), u(h.precision), h.thousand, h.decimal));
			return e.length > v && (v = e.length), e
		}), function(n, r) {
			return e(n) && n.length < v ? b ? n.replace(h.symbol, h.symbol + new Array(v - n.length + 1).join(" ")) : new Array(v - n.length + 1).join(" ") + n : n
		})
	}, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports.accounting = s) : "function" == typeof define && define.amd ? define([], function() {
		return s
	}) : (s.noConflict = function(r) {
		return function() {
			/*!
			 * accounting.js v0.4.2
			 * Copyright 2014 Open Exchange Rates
			 *
			 * Freely distributable under the MIT license.
			 * Portions of accounting.js are inspired or borrowed from underscore.js
			 *
			 * Full details and documentation:
			 * http://openexchangerates.github.io/accounting.js/
			 */
			return n.accounting = r, s.noConflict = void 0, s
		}
	}(n.accounting), n.accounting = s)
}(this);
/*!  1.6.14 2019-04-04 22:05 */
CHARITABLE = window.CHARITABLE || {},
	function(t, l) {
		var e = function(t) {
			this.errors = [], this.pending_processes = [], this.form = t, this.pause_processing = !1, this.submit_processing = !1, this.total = 0;
			var e = this,
				o = l("body"),
				r = function() {
					return e.form.find(".charitable-terms-text").addClass("active"), !1
				},
				i = function() {
					l(this).closest("li").trigger("click").find("input[name=donation_amount]").prop("checked", !0).trigger("change"), e.form.off("focus", "input.custom-donation-input", i), l(this).focus(), e.form.on("focus", "input.custom-donation-input", i)
				},
				n = function() {
					var t = e.unformat_amount(l(this).val());
					0 < l.trim(t) && l(this).val(e.format_amount(t))
				},
				a = function() {
					var t = l(this).closest("li");
					t.hasClass("selected") || (t.parents(".charitable-donation-form").find(".donation-amount.selected").removeClass("selected"), t.addClass("selected"), t.hasClass("custom-donation-amount") && t.find("input.custom-donation-input").focus())
				},
				s = function() {
					e.hide_inactive_payment_methods(), e.show_active_payment_methods(l(this).val())
				},
				c = function(t) {
					var e = t.data.helper;
					return !e.submit_processing && (e.submit_processing = !0, e.show_processing(), !1 === e.validate() ? (e.hide_processing(), e.print_errors(), e.scroll_to_top(), !1) : !1 === e.pause_processing && (1 !== e.form.data("use-ajax") || (u(e), !1)))
				},
				u = function(t) {
					t.waiting() ? setTimeout(u, 500, t) : 0 < t.get_errors().length ? (t.hide_processing(), t.print_errors(), t.scroll_to_top()) : o.trigger("charitable:form:process", t)
				},
				d = function(t, r) {
					var e = r.get_data();
					r.form;
					return e.action = "make_donation", e.form_action = e.charitable_action, delete e.charitable_action, l.ajax({
						type: "POST",
						data: e,
						dataType: "json",
						url: CHARITABLE_VARS.ajaxurl,
						timeout: 0,
						xhrFields: {
							withCredentials: !0
						},
						success: function(t) {
							t.success ? window.location.href = t.redirect_to : (r.hide_processing(), r.print_errors(t.errors), r.scroll_to_top(), t.donation_id && r.set_donation_id(t.donation_id))
						}
					}).fail(function(t, e, o) {
						window.console && window.console.log && console.log(t), r.hide_processing(), r.print_errors([CHARITABLE_VARS.error_unknown]), r.scroll_to_top()
					}), !1
				};
			e.form.on("click", ".donation-amount", a), e.form.on("focus", "input.custom-donation-input", i), e.form.on("click", ".charitable-terms-link", r), e.form.on("blur", ".custom-donation-input", n), e.form.find(".donation-amount input:checked").each(function() {
				l(this).closest("li").addClass("selected")
			}), e.get_all_payment_methods().length && (e.hide_inactive_payment_methods(), e.form.on("change", "#charitable-gateway-selector input[name=gateway]", s)), e.form.on("submit", {
				helper: e
			}, c), !1 === CHARITABLE.forms_initialized && (o.on("charitable:form:process", d), o.trigger("charitable:form:initialize", e), CHARITABLE.forms_initialized = !0), o.trigger("charitable:form:loaded", e)
		};
		e.prototype.get_input = function(t) {
			return this.form.find("[name=" + t + "]")
		}, e.prototype.get_email = function() {
			return this.form.find("[name=email]").val()
		}, e.prototype.get_suggested_amount = function() {
			return accounting.unformat(this.form.find("[name=donation_amount]:checked, input[type=hidden][name=donation_amount]").val(), CHARITABLE_VARS.currency_format_decimal_sep)
		}, e.prototype.get_custom_amount = function() {
			var t = this.form.find(".charitable-donation-options.active .custom-donation-input");
			return 0 === t.length && (t = this.form.find(".custom-donation-input")), accounting.unformat(t.val(), CHARITABLE_VARS.currency_format_decimal_sep)
		}, e.prototype.get_subtotal = function() {
			return this.get_suggested_amount() || this.get_custom_amount()
		}, e.prototype.get_amount = function() {
			return this.total = this.get_subtotal(), this.form.trigger("charitable:form:get_amount", this), this.total
		}, e.prototype.add_amount = function(t) {
			this.total += t
		}, e.prototype.remove_amount = function(t) {
			this.total -= t
		}, e.prototype.get_description = function() {
			return this.form.find("[name=description]").val() || ""
		}, e.prototype.get_cc_number = function() {
			return this.form.find("#charitable_field_cc_number input").val() || ""
		}, e.prototype.get_cc_cvc = function() {
			return this.form.find("#charitable_field_cc_cvc input").val() || ""
		}, e.prototype.get_cc_expiry_month = function() {
			return this.form.find("#charitable_field_cc_expiration select.month").val() || ""
		}, e.prototype.get_cc_expiry_year = function() {
			return this.form.find("#charitable_field_cc_expiration select.year").val() || ""
		}, e.prototype.clear_cc_fields = function() {
			this.form.find("#charitable_field_cc_number input, #charitable_field_cc_name input, #charitable_field_cc_cvc input, #charitable_field_cc_expiration select").removeAttr("name")
		}, e.prototype.get_payment_method = function() {
			return this.form.find("[type=hidden][name=gateway], [name=gateway]:checked").val() || ""
		}, e.prototype.get_all_payment_methods = function() {
			return this.form.find("#charitable-gateway-selector input[name=gateway]")
		}, e.prototype.hide_inactive_payment_methods = function() {
			var t = this.get_payment_method(),
				e = this.form.find(".charitable-gateway-fields[data-gateway!=" + t + "]");
			e.hide(), e.find("input[required],select[required],textarea[required]").attr("data-required", 1).attr("required", !1)
		}, e.prototype.show_active_payment_methods = function(t) {
			t = t || this.get_payment_method();
			var e = this.form.find(".charitable-gateway-fields[data-gateway=" + t + "]");
			e.show(), e.find("[data-required]").attr("required", !0)
		}, e.prototype.format_amount = function(t, e) {
			return void 0 === e && (e = ""), accounting.formatMoney(t, {
				symbol: e,
				decimal: CHARITABLE_VARS.currency_format_decimal_sep,
				thousand: CHARITABLE_VARS.currency_format_thousand_sep,
				precision: CHARITABLE_VARS.currency_format_num_decimals,
				format: CHARITABLE_VARS.currency_format
			}).trim()
		}, e.prototype.unformat_amount = function(t) {
			return Math.abs(parseFloat(accounting.unformat(t, CHARITABLE_VARS.currency_format_decimal_sep)))
		}, e.prototype.add_error = function(t) {
			this.errors.push(t)
		}, e.prototype.get_errors = function() {
			return this.errors
		}, e.prototype.get_error_message = function() {
			return this.errors.join(" ")
		}, e.prototype.print_errors = function(t) {
			var e = t || this.errors,
				o = "";
			0 !== e.length && (this.form.find(".charitable-form-errors").length && this.form.find(".charitable-form-errors").remove(), o += '<div class="charitable-form-errors charitable-notice"><ul class="errors"><li>', o += e.join("</li><li>"), o += "</li></ul></div>", this.form.prepend(o))
		}, e.prototype.clear_errors = function() {
			this.errors = [], this.form.find(".charitable-form-errors").length && this.form.find(".charitable-form-errors").remove()
		}, e.prototype.waiting = function() {
			return 0 < this.pending_processes.length
		}, e.prototype.add_pending_process = function(t) {
			return this.pending_processes.push(t) - 1
		}, e.prototype.remove_pending_process = function(t) {
			this.pending_processes.splice(t, 1)
		}, e.prototype.show_processing = function() {
			this.form.find(".charitable-form-processing").show(), this.form.find('button[name="donate"]').hide()
		}, e.prototype.hide_processing = function() {
			this.form.find(".charitable-form-processing").hide(), this.form.find('button[name="donate"]').show(), this.submit_processing = !1, this.pause_processing = !1
		}, e.prototype.scroll_to_top = function() {
			var t = this.form.parents(".charitable-modal");
			t.length ? t.scrollTop(0) : window.scrollTo(this.form.position().left, this.form.position().top)
		}, e.prototype.set_donation_id = function(t) {
			this.form.find("[name=ID]").val(t)
		}, e.prototype.get_data = function() {
			return this.form.serializeArray().reduce(function(t, e) {
				if ("[]" === e.name.slice(-2)) {
					var o = e.name.slice(0, -2);
					t.hasOwnProperty(o) || (t[o] = []), t[o].push(e.value)
				} else t[e.name] = e.value;
				return t
			}, {})
		}, e.prototype.get_required_fields = function() {
			var t = this.form.find(".charitable-fieldset .required-field").not("#charitable-gateway-fields .required-field"),
				e = this.get_payment_method();
			if ("" !== e) {
				var o = this.form.find("[data-gateway=" + e + "] .required-field");
				o.length && (t = l.merge(t, o))
			}
			return t
		}, e.prototype.is_valid_amount = function() {
			var t = parseFloat(CHARITABLE_VARS.minimum_donation);
			return 0 < t || CHARITABLE_VARS.permit_0_donation ? this.get_subtotal() >= t : this.get_subtotal() > t
		}, e.prototype.validate_amount = function() {
			return !1 !== this.is_valid_amount() || (this.add_error(CHARITABLE_VARS.error_invalid_amount), !1)
		}, e.prototype.validate_required_fields = function() {
			var t = !0;
			return this.get_required_fields().each(function() {
				"" === l(this).find("input, select, textarea").val() && (t = !1)
			}), t || this.add_error(CHARITABLE_VARS.error_required_fields), t
		}, e.prototype.validate = function() {
			return this.clear_errors(), this.validate_amount(), this.validate_required_fields(), this.form.trigger("charitable:form:validate", this), 0 === this.errors.length
		}, t.Donation_Form = e
	}(CHARITABLE, jQuery),
	function(i, n) {
		i.Toggle = function() {
			var t = function() {
					o(n(this)).addClass("charitable-hidden")
				},
				o = function(t) {
					var e = t.data("charitable-toggle");
					return "." !== e[0] && "#" !== e[0] && (e = "#" + e), n(e)
				},
				e = function() {
					n("[data-charitable-toggle]").each(t)
				};
			if (n("body").on("click", "[data-charitable-toggle]", function() {
					var t = n(this),
						e = o(t);
					return e.toggleClass("charitable-hidden", t.is(":checkbox") ? !t.is(":checked") : !1 === e.hasClass("charitable-hidden")), !1
				}), i.content_loading) var r = setInterval(function() {
				!1 === i.content_loading && (e(), clearInterval(r))
			}, 500);
			return e
		}()
	}(CHARITABLE, jQuery), CHARITABLE, jQuery, CHARITABLE.SanitizeURL = function(t) {
		CHARITABLE.Helpers.sanitize_url(t)
	},
	function(t) {
		CHARITABLE.forms_initialized = !1, t(document).ready(function() {
			t("html").addClass("js"), t(".charitable-donation-form").each(function() {
				new CHARITABLE.Donation_Form(t(this))
			}), CHARITABLE.Toggle()
		})
	}(jQuery);
/*! Charitable Recurring 1.0.5 2017-06-07 20:46 */
jQuery.noConflict(), CHARITABLE_RECURRING = {}, CHARITABLE_RECURRING = {
		init: function() {
			jQuery("html").addClass("js"), jQuery(".recurring-donation").find("input:checked").each(function(a) {
				jQuery(this).addClass("selected")
			}), jQuery("body").on("change", ".recurring-donation-options [name=recurring_donation]", function(a) {
				CHARITABLE_RECURRING.toggle_tabs(jQuery(this))
			}), jQuery(".recurring-donation-options [name=recurring_donation]").change()
		},
		toggle_tabs: function(a) {
			var b = a.closest("form");
			jQuery(".recurring-donation-option").removeClass("selected"), jQuery("input[name=recurring_donation]:checked", ".charitable-form").closest("li").addClass("selected");
			var c = jQuery("input[name=recurring_donation]:checked", ".charitable-form").val();
			"month" == c ? (b.find(".charitable-recurring-donation-options").show().addClass("active"), b.find(".charitable-donation-options:not(.charitable-recurring-donation-options)").hide().removeClass("active"), CHARITABLE_RECURRING.toggle_gateways()) : (b.find(".charitable-recurring-donation-options").hide().removeClass("active"), b.find(".charitable-donation-options:not(.charitable-recurring-donation-options)").show().addClass("active"), CHARITABLE_RECURRING.toggle_gateways(!0))
		},
		toggle_gateways: function(a) {
			var a;
			"undefined" == typeof a && (a = !1), 1 == a ? jQuery("#charitable-gateway-selector li").show() : jQuery("#charitable-gateway-selector").find("input").each(function(a) {
				jQuery.inArray(jQuery(this).val(), Charitable_Recurring.supported_gateways) !== -1 ? jQuery(this).parent().show() : jQuery(this).parent().hide()
			})
		}
	},
	function(a) {
		a("body").on("charitable:form:initialize", function() {
			CHARITABLE_RECURRING.init()
		})
	}(jQuery);
! function(a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function(a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function(b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function() {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
					merge: !1,
					width: b
				}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function() {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function() {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], e.prototype.initialize = function() {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var b, c, e;
			b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
		}
		this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.setup = function() {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function(a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function() {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function(b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function() {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
				return this[a]
			}, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function(a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function() {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function() {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function() {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, e.prototype.registerEventHandlers = function() {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function(b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function(a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function(b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function(b, c) {
		var d = -1,
			e = 30,
			f = this.width(),
			g = this.coordinates();
		return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
			return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
		}, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
	}, e.prototype.animate = function(b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s"
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function(a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function(a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function(b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
			return b
		})
	}, e.prototype.reset = function(a) {
		a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function(a, b) {
		var c = this._items.length,
			e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function(a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function(a) {
		var b, c, d, e = this.settings,
			f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
		else if (e.autoWidth || e.merge) {
			for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function(a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function(a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function(a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function(b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function(a) {
				return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function(a, b) {
			return f(b)
		}) : a.map(this._clones, function(a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function(a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function(b) {
		var c, e = 1,
			f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function(a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function(a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (e < 0),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
	}, e.prototype.next = function(a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function(a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function(a) {
		if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, e.prototype.viewport = function() {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function(b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
			return 1 === this.nodeType
		}).each(a.proxy(function(a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function(b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function(a) {
		a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function(b) {
		b.each(a.proxy(function(b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function() {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function(a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : a < c;
			case ">":
				return d ? a < c : a > c;
			case ">=":
				return d ? a <= c : a >= c;
			case "<=":
				return d ? a >= c : a <= c
		}
	}, e.prototype.on = function(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function(a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function(b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function(a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, h, c));
		return this._supress[b] || (a.each(this._plugins, function(a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function(b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function(b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function(b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function(a) {
					return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function(b) {
		a.each(b, a.proxy(function(a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function(b) {
		a.each(b, a.proxy(function(a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function(a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function(a) {
		return !isNaN(parseFloat(a))
	}, e.prototype.difference = function(a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function(b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function() {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function() {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function() {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
							this.load(b)
						}, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1
	}, e.prototype.load = function(c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
				f.css({
					"background-image": 'url("' + g + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function() {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.$stage.children().toArray().slice(b, c),
			e = [],
			f = 0;
		a.each(d, function(b, c) {
			e.push(a(c).height())
		}), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function(a, b) {
		var c = function() {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
		else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function(b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function(a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
			};
		if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
		"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(a) {
				f = a.framegrab_url, l(f)
			}
		})
	}, e.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function(b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function() {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function() {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function(a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
			animateOut: !1,
			animateIn: !1
		}, e.prototype.swap = function() {
			if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
				this.core.speed(0);
				var b, c = a.proxy(this.clear, this),
					d = this.core.$stage.children().eq(this.previous),
					e = this.core.$stage.children().eq(this.next),
					f = this.core.settings.animateIn,
					g = this.core.settings.animateOut;
				this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
					left: b + "px"
				}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
			}
		}, e.prototype.clear = function(b) {
			a(b.target).css({
				left: ""
			}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
		}, e.prototype.destroy = function() {
			var a, b;
			for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
			for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
		},
		a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this),
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function(a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function(a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype.play = function(a, b) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, e.prototype._getNextTimeout = function(d, e) {
		return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
			this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
		}, this), d || this._core.settings.autoplayTimeout)
	}, e.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout()
	}, e.prototype.stop = function() {
		this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, e.prototype.pause = function() {
		this._core.is("rotating") && (this._paused = !0)
	}, e.prototype.destroy = function() {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	"use strict";
	var e = function(b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function(b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function() {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function() {
		var a, b, c, d;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function() {
		var a, b, c, d = this._core.clones().length / 2,
			e = d + this._core.items().length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
							start: Math.min(f, a - d),
							end: a - d + h - 1
						}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function() {
		var b, c = this._core.settings,
			d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function(b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function() {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function(a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function(b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function(b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	"use strict";
	var e = function(c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this),
			"changed.owl.carousel": a.proxy(function(c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function(a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
			var c = b.location.hash.substring(1),
				e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function() {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
			if (g[b] !== d) return e = !c || b, !1
		}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>").get(0).style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function() {
				return !!e("transform")
			},
			csstransforms3d: function() {
				return !!e("perspective")
			},
			csstransitions: function() {
				return !!e("transition")
			},
			cssanimations: function() {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function(e) {
	"use strict";
	e.fn.counterUp = function(t) {
		var n = e.extend({
			time: 400,
			delay: 10
		}, t);
		return this.each(function() {
			var t = e(this),
				r = n,
				i = function() {
					var e = [],
						n = r.time / r.delay,
						i = t.text(),
						s = /[0-9]+,[0-9]+/.test(i);
					i = i.replace(/,/g, "");
					var o = /^[0-9]+$/.test(i),
						u = /^[0-9]+\.[0-9]+$/.test(i),
						a = u ? (i.split(".")[1] || []).length : 0;
					for (var f = n; f >= 1; f--) {
						var l = parseInt(i / n * f);
						u && (l = parseFloat(i / n * f).toFixed(a));
						if (s)
							while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
						e.unshift(l)
					}
					t.data("counterup-nums", e);
					t.text("0");
					var c = function() {
						t.text(t.data("counterup-nums").shift());
						if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
						else {
							delete t.data("counterup-nums");
							t.data("counterup-nums", null);
							t.data("counterup-func", null)
						}
					};
					t.data("counterup-func", c);
					setTimeout(t.data("counterup-func"), r.delay)
				};
			t.waypoint(i, {
				offset: "100%",
				triggerOnce: !0
			})
		})
	}
})(jQuery);
(function() {
	var t = [].indexOf || function(t) {
			for (var e = 0, n = this.length; e < n; e++) {
				if (e in this && this[e] === t) return e
			}
			return -1
		},
		e = [].slice;
	(function(t, e) {
		if (typeof define === "function" && define.amd) {
			return define("waypoints", ["jquery"], function(n) {
				return e(n, t)
			})
		} else {
			return e(t.jQuery, t)
		}
	})(this, function(n, r) {
		var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
		i = n(r);
		c = t.call(r, "ontouchstart") >= 0;
		s = {
			horizontal: {},
			vertical: {}
		};
		f = 1;
		a = {};
		u = "waypoints-context-id";
		p = "resize.waypoints";
		y = "scroll.waypoints";
		v = 1;
		w = "waypoints-waypoint-ids";
		g = "waypoint";
		m = "waypoints";
		o = function() {
			function t(t) {
				var e = this;
				this.$element = t;
				this.element = t[0];
				this.didResize = false;
				this.didScroll = false;
				this.id = "context" + f++;
				this.oldScroll = {
					x: t.scrollLeft(),
					y: t.scrollTop()
				};
				this.waypoints = {
					horizontal: {},
					vertical: {}
				};
				t.data(u, this.id);
				a[this.id] = this;
				t.bind(y, function() {
					var t;
					if (!(e.didScroll || c)) {
						e.didScroll = true;
						t = function() {
							e.doScroll();
							return e.didScroll = false
						};
						return r.setTimeout(t, n[m].settings.scrollThrottle)
					}
				});
				t.bind(p, function() {
					var t;
					if (!e.didResize) {
						e.didResize = true;
						t = function() {
							n[m]("refresh");
							return e.didResize = false
						};
						return r.setTimeout(t, n[m].settings.resizeThrottle)
					}
				})
			}
			t.prototype.doScroll = function() {
				var t, e = this;
				t = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
				if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
					n[m]("refresh")
				}
				n.each(t, function(t, r) {
					var i, o, l;
					l = [];
					o = r.newScroll > r.oldScroll;
					i = o ? r.forward : r.backward;
					n.each(e.waypoints[t], function(t, e) {
						var n, i;
						if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
							return l.push(e)
						} else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
							return l.push(e)
						}
					});
					l.sort(function(t, e) {
						return t.offset - e.offset
					});
					if (!o) {
						l.reverse()
					}
					return n.each(l, function(t, e) {
						if (e.options.continuous || t === l.length - 1) {
							return e.trigger([i])
						}
					})
				});
				return this.oldScroll = {
					x: t.horizontal.newScroll,
					y: t.vertical.newScroll
				}
			};
			t.prototype.refresh = function() {
				var t, e, r, i = this;
				r = n.isWindow(this.element);
				e = this.$element.offset();
				this.doScroll();
				t = {
					horizontal: {
						contextOffset: r ? 0 : e.left,
						contextScroll: r ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: r ? 0 : e.top,
						contextScroll: r ? 0 : this.oldScroll.y,
						contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				};
				return n.each(t, function(t, e) {
					return n.each(i.waypoints[t], function(t, r) {
						var i, o, l, s, f;
						i = r.options.offset;
						l = r.offset;
						o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
						if (n.isFunction(i)) {
							i = i.apply(r.element)
						} else if (typeof i === "string") {
							i = parseFloat(i);
							if (r.options.offset.indexOf("%") > -1) {
								i = Math.ceil(e.contextDimension * i / 100)
							}
						}
						r.offset = o - e.contextOffset + e.contextScroll - i;
						if (r.options.onlyOnScroll && l != null || !r.enabled) {
							return
						}
						if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
							return r.trigger([e.backward])
						} else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
							return r.trigger([e.forward])
						} else if (l === null && e.oldScroll >= r.offset) {
							return r.trigger([e.forward])
						}
					})
				})
			};
			t.prototype.checkEmpty = function() {
				if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
					this.$element.unbind([p, y].join(" "));
					return delete a[this.id]
				}
			};
			return t
		}();
		l = function() {
			function t(t, e, r) {
				var i, o;
				r = n.extend({}, n.fn[g].defaults, r);
				if (r.offset === "bottom-in-view") {
					r.offset = function() {
						var t;
						t = n[m]("viewportHeight");
						if (!n.isWindow(e.element)) {
							t = e.$element.height()
						}
						return t - n(this).outerHeight()
					}
				}
				this.$element = t;
				this.element = t[0];
				this.axis = r.horizontal ? "horizontal" : "vertical";
				this.callback = r.handler;
				this.context = e;
				this.enabled = r.enabled;
				this.id = "waypoints" + v++;
				this.offset = null;
				this.options = r;
				e.waypoints[this.axis][this.id] = this;
				s[this.axis][this.id] = this;
				i = (o = t.data(w)) != null ? o : [];
				i.push(this.id);
				t.data(w, i)
			}
			t.prototype.trigger = function(t) {
				if (!this.enabled) {
					return
				}
				if (this.callback != null) {
					this.callback.apply(this.element, t)
				}
				if (this.options.triggerOnce) {
					return this.destroy()
				}
			};
			t.prototype.disable = function() {
				return this.enabled = false
			};
			t.prototype.enable = function() {
				this.context.refresh();
				return this.enabled = true
			};
			t.prototype.destroy = function() {
				delete s[this.axis][this.id];
				delete this.context.waypoints[this.axis][this.id];
				return this.context.checkEmpty()
			};
			t.getWaypointsByElement = function(t) {
				var e, r;
				r = n(t).data(w);
				if (!r) {
					return []
				}
				e = n.extend({}, s.horizontal, s.vertical);
				return n.map(r, function(t) {
					return e[t]
				})
			};
			return t
		}();
		d = {
			init: function(t, e) {
				var r;
				if (e == null) {
					e = {}
				}
				if ((r = e.handler) == null) {
					e.handler = t
				}
				this.each(function() {
					var t, r, i, s;
					t = n(this);
					i = (s = e.context) != null ? s : n.fn[g].defaults.context;
					if (!n.isWindow(i)) {
						i = t.closest(i)
					}
					i = n(i);
					r = a[i.data(u)];
					if (!r) {
						r = new o(i)
					}
					return new l(t, r, e)
				});
				n[m]("refresh");
				return this
			},
			disable: function() {
				return d._invoke(this, "disable")
			},
			enable: function() {
				return d._invoke(this, "enable")
			},
			destroy: function() {
				return d._invoke(this, "destroy")
			},
			prev: function(t, e) {
				return d._traverse.call(this, t, e, function(t, e, n) {
					if (e > 0) {
						return t.push(n[e - 1])
					}
				})
			},
			next: function(t, e) {
				return d._traverse.call(this, t, e, function(t, e, n) {
					if (e < n.length - 1) {
						return t.push(n[e + 1])
					}
				})
			},
			_traverse: function(t, e, i) {
				var o, l;
				if (t == null) {
					t = "vertical"
				}
				if (e == null) {
					e = r
				}
				l = h.aggregate(e);
				o = [];
				this.each(function() {
					var e;
					e = n.inArray(this, l[t]);
					return i(o, e, l[t])
				});
				return this.pushStack(o)
			},
			_invoke: function(t, e) {
				t.each(function() {
					var t;
					t = l.getWaypointsByElement(this);
					return n.each(t, function(t, n) {
						n[e]();
						return true
					})
				});
				return this
			}
		};
		n.fn[g] = function() {
			var t, r;
			r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (d[r]) {
				return d[r].apply(this, t)
			} else if (n.isFunction(r)) {
				return d.init.apply(this, arguments)
			} else if (n.isPlainObject(r)) {
				return d.init.apply(this, [null, r])
			} else if (!r) {
				return n.error("jQuery Waypoints needs a callback function or handler option.")
			} else {
				return n.error("The " + r + " method does not exist in jQuery Waypoints.")
			}
		};
		n.fn[g].defaults = {
			context: r,
			continuous: true,
			enabled: true,
			horizontal: false,
			offset: 0,
			triggerOnce: false
		};
		h = {
			refresh: function() {
				return n.each(a, function(t, e) {
					return e.refresh()
				})
			},
			viewportHeight: function() {
				var t;
				return (t = r.innerHeight) != null ? t : i.height()
			},
			aggregate: function(t) {
				var e, r, i;
				e = s;
				if (t) {
					e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
				}
				if (!e) {
					return []
				}
				r = {
					horizontal: [],
					vertical: []
				};
				n.each(r, function(t, i) {
					n.each(e[t], function(t, e) {
						return i.push(e)
					});
					i.sort(function(t, e) {
						return t.offset - e.offset
					});
					r[t] = n.map(i, function(t) {
						return t.element
					});
					return r[t] = n.unique(r[t])
				});
				return r
			},
			above: function(t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function(t, e) {
					return e.offset <= t.oldScroll.y
				})
			},
			below: function(t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function(t, e) {
					return e.offset > t.oldScroll.y
				})
			},
			left: function(t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function(t, e) {
					return e.offset <= t.oldScroll.x
				})
			},
			right: function(t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function(t, e) {
					return e.offset > t.oldScroll.x
				})
			},
			enable: function() {
				return h._invoke("enable")
			},
			disable: function() {
				return h._invoke("disable")
			},
			destroy: function() {
				return h._invoke("destroy")
			},
			extendFn: function(t, e) {
				return d[t] = e
			},
			_invoke: function(t) {
				var e;
				e = n.extend({}, s.vertical, s.horizontal);
				return n.each(e, function(e, n) {
					n[t]();
					return true
				})
			},
			_filter: function(t, e, r) {
				var i, o;
				i = a[n(t).data(u)];
				if (!i) {
					return []
				}
				o = [];
				n.each(i.waypoints[e], function(t, e) {
					if (r(i, e)) {
						return o.push(e)
					}
				});
				o.sort(function(t, e) {
					return t.offset - e.offset
				});
				return n.map(o, function(t) {
					return t.element
				})
			}
		};
		n[m] = function() {
			var t, n;
			n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (h[n]) {
				return h[n].apply(null, t)
			} else {
				return h.aggregate.call(null, n)
			}
		};
		n[m].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		};
		return i.load(function() {
			return n[m]("refresh")
		})
	})
}).call(this);
/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
! function(e, t, n) {
	function a(t, n) {
		this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init()
	}
	var i = {
			label: "MENU",
			duplicate: !0,
			duration: 200,
			easingOpen: "swing",
			easingClose: "swing",
			closedSymbol: "&#9658;",
			openedSymbol: "&#9660;",
			prependTo: "body",
			appendTo: "",
			parentTag: "a",
			closeOnClick: !1,
			allowParentLinks: !1,
			nestedParentLinks: !0,
			showChildren: !1,
			removeIds: !0,
			removeClasses: !1,
			removeStyles: !1,
			brand: "",
			animations: "jquery",
			init: function() {},
			beforeOpen: function() {},
			beforeClose: function() {},
			afterOpen: function() {},
			afterClose: function() {}
		},
		s = "slicknav",
		o = "slicknav",
		l = {
			DOWN: 40,
			ENTER: 13,
			ESCAPE: 27,
			LEFT: 37,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		};
	a.prototype.init = function() {
		var n, a, i = this,
			s = e(this.element),
			r = this.settings;
		if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function(t, n) {
				e(n).removeAttr("id")
			})), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function(t, n) {
				e(n).removeAttr("class")
			})), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function(t, n) {
				e(n).removeAttr("style")
			})), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) {
			var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
			e(a).append(c)
		}
		i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav);
		var p = i.mobileNav.find("li");
		e(p).each(function() {
			var t = e(this),
				n = {};
			if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
				var a = t.contents(),
					s = !1,
					l = [];
				e(a).each(function() {
					return e(this).is("ul") ? !1 : (l.push(this), void(e(this).is("a") && (s = !0)))
				});
				var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
				if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();
				else {
					var p = e(l).wrapAll(c).parent();
					p.addClass(o + "_row")
				}
				r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent");
				var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
				r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()), e(l).last().after(d)
			} else 0 === t.children().length && t.addClass(o + "_txtnode");
			t.children("a").attr("role", "menuitem").click(function(t) {
				r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click()
			}), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function(t) {
				e(i.btn).click()
			}), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function(t) {
				e(i.btn).click()
			}))
		}), e(p).each(function() {
			var t = e(this).data("menu");
			r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0)
		}), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function() {
			i._outlines(!1)
		}), e(t).keyup(function() {
			i._outlines(!0)
		}), e(i.btn).click(function(e) {
			e.preventDefault(), i._menuToggle()
		}), i.mobileNav.on("click", "." + o + "_item", function(t) {
			t.preventDefault(), i._itemClick(e(this))
		}), e(i.btn).keydown(function(t) {
			var n = t || event;
			switch (n.keyCode) {
				case l.ENTER:
				case l.SPACE:
				case l.DOWN:
					t.preventDefault(), n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus()
			}
		}), i.mobileNav.on("keydown", "." + o + "_item", function(t) {
			var n = t || event;
			switch (n.keyCode) {
				case l.ENTER:
					t.preventDefault(), i._itemClick(e(t.target));
					break;
				case l.RIGHT:
					t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus()
			}
		}), i.mobileNav.on("keydown", '[role="menuitem"]', function(t) {
			var n = t || event;
			switch (n.keyCode) {
				case l.DOWN:
					t.preventDefault();
					var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
						s = a.index(t.target),
						r = s + 1;
					a.length <= r && (r = 0);
					var c = a.eq(r);
					c.focus();
					break;
				case l.UP:
					t.preventDefault();
					var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
						s = a.index(t.target),
						c = a.eq(s - 1);
					c.focus();
					break;
				case l.LEFT:
					if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) {
						var p = e(t.target).parent().parent().prev();
						p.focus(), i._itemClick(p)
					} else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
					break;
				case l.ESCAPE:
					t.preventDefault(), i._menuToggle(), e(i.btn).focus()
			}
		}), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function(e) {
			e.stopImmediatePropagation()
		})
	}, a.prototype._menuToggle = function(e) {
		var t = this,
			n = t.btn,
			a = t.mobileNav;
		n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n)
	}, a.prototype._itemClick = function(e) {
		var t = this,
			n = t.settings,
			a = e.data("menu");
		a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e))
	}, a.prototype._visibilityToggle = function(t, n, a, i, s) {
		function l(t, n) {
			e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || p.afterOpen(t)
		}

		function r(n, a) {
			t.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && p.init() : p.afterClose(n)
		}
		var c = this,
			p = c.settings,
			d = c._getActionItems(t),
			u = 0;
		a && (u = p.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || p.beforeOpen(i), "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function() {
			l(i, n)
		}) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
			duration: u,
			easing: p.easingOpen,
			complete: function() {
				l(i, n)
			}
		}), t.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || p.beforeClose(i), "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function() {
			r(i, n)
		}) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
			duration: u,
			easing: p.easingClose,
			complete: function() {
				r(i, n)
			}
		}))
	}, a.prototype._setVisAttr = function(t, n) {
		var a = this,
			i = t.children("li").children("ul").not("." + o + "_hidden");
		n ? i.each(function() {
			var t = e(this);
			t.attr("aria-hidden", "true");
			var i = a._getActionItems(t);
			i.attr("tabindex", "-1"), a._setVisAttr(t, n)
		}) : i.each(function() {
			var t = e(this);
			t.attr("aria-hidden", "false");
			var i = a._getActionItems(t);
			i.attr("tabindex", "0"), a._setVisAttr(t, n)
		})
	}, a.prototype._getActionItems = function(e) {
		var t = e.data("menu");
		if (!t) {
			t = {};
			var n = e.children("li"),
				a = n.find("a");
			t.links = a.add(n.find("." + o + "_item")), e.data("menu", t)
		}
		return t.links
	}, a.prototype._outlines = function(t) {
		t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none")
	}, a.prototype.toggle = function() {
		var e = this;
		e._menuToggle()
	}, a.prototype.open = function() {
		var e = this;
		e.btn.hasClass(o + "_collapsed") && e._menuToggle()
	}, a.prototype.close = function() {
		var e = this;
		e.btn.hasClass(o + "_open") && e._menuToggle()
	}, e.fn[s] = function(t) {
		var n = arguments;
		if (void 0 === t || "object" == typeof t) return this.each(function() {
			e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t))
		});
		if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
			var i;
			return this.each(function() {
				var o = e.data(this, "plugin_" + s);
				o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)))
			}), void 0 !== i ? i : this
		}
	}
}(jQuery, document, window);
! function(t, e, n, o) {
	"use strict";

	function i(t, e) {
		var o, i, a, s = [],
			r = 0;
		t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), a = n.fancybox.getInstance(), a && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o))
	}
	if (t.console = t.console || {
			info: function(t) {}
		}, n) {
		if (n.fn.fancybox) return void console.info("fancyBox already initialized");
		var a = {
				closeExisting: !1,
				loop: !1,
				gutter: 50,
				keyboard: !0,
				arrows: !0,
				infobar: !0,
				smallBtn: "auto",
				toolbar: "auto",
				buttons: ["zoom", "thumbs", "close"],
				idleTime: 3,
				protect: !1,
				modal: !1,
				image: {
					preload: !1
				},
				ajax: {
					settings: {
						data: {
							fancybox: !0
						}
					}
				},
				iframe: {
					tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
					preload: !0,
					css: {},
					attr: {
						scrolling: "auto"
					}
				},
				video: {
					tpl: '<video class="fancybox-video" controls controlsList="nodownload"><source src="{{src}}" type="{{format}}" />Your browser doesn\'t support HTML5 video</video>',
					format: "",
					autoStart: !0
				},
				defaultType: "image",
				animationEffect: "zoom",
				animationDuration: 366,
				zoomOpacity: "auto",
				transitionEffect: "fade",
				transitionDuration: 366,
				slideClass: "",
				baseClass: "",
				baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
				spinnerTpl: '<div class="fancybox-loading"></div>',
				errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
				btnTpl: {
					download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
					zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
					close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
					arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
					arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
					smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
				},
				parentEl: "body",
				hideScrollbar: !0,
				autoFocus: !0,
				backFocus: !0,
				trapFocus: !0,
				fullScreen: {
					autoStart: !1
				},
				touch: {
					vertical: !0,
					momentum: !0
				},
				hash: null,
				media: {},
				slideShow: {
					autoStart: !1,
					speed: 3e3
				},
				thumbs: {
					autoStart: !1,
					hideOnClose: !0,
					parentEl: ".fancybox-container",
					axis: "y"
				},
				wheel: "auto",
				onInit: n.noop,
				beforeLoad: n.noop,
				afterLoad: n.noop,
				beforeShow: n.noop,
				afterShow: n.noop,
				beforeClose: n.noop,
				afterClose: n.noop,
				onActivate: n.noop,
				onDeactivate: n.noop,
				clickContent: function(t, e) {
					return "image" === t.type && "zoom"
				},
				clickSlide: "close",
				clickOutside: "close",
				dblclickContent: !1,
				dblclickSlide: !1,
				dblclickOutside: !1,
				mobile: {
					idleTime: !1,
					clickContent: function(t, e) {
						return "image" === t.type && "toggleControls"
					},
					clickSlide: function(t, e) {
						return "image" === t.type ? "toggleControls" : "close"
					},
					dblclickContent: function(t, e) {
						return "image" === t.type && "zoom"
					},
					dblclickSlide: function(t, e) {
						return "image" === t.type && "zoom"
					}
				},
				lang: "en",
				i18n: {
					en: {
						CLOSE: "Close",
						NEXT: "Next",
						PREV: "Previous",
						ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
						PLAY_START: "Start slideshow",
						PLAY_STOP: "Pause slideshow",
						FULL_SCREEN: "Full screen",
						THUMBS: "Thumbnails",
						DOWNLOAD: "Download",
						SHARE: "Share",
						ZOOM: "Zoom"
					},
					de: {
						CLOSE: "Schliessen",
						NEXT: "Weiter",
						PREV: "ZurÃ¼ck",
						ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
						PLAY_START: "Diaschau starten",
						PLAY_STOP: "Diaschau beenden",
						FULL_SCREEN: "Vollbild",
						THUMBS: "Vorschaubilder",
						DOWNLOAD: "Herunterladen",
						SHARE: "Teilen",
						ZOOM: "MaÃŸstab"
					}
				}
			},
			s = n(t),
			r = n(e),
			c = 0,
			l = function(t) {
				return t && t.hasOwnProperty && t instanceof n
			},
			d = function() {
				return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
					return t.setTimeout(e, 1e3 / 60)
				}
			}(),
			u = function() {
				var t, n = e.createElement("fakeelement"),
					i = {
						transition: "transitionend",
						OTransition: "oTransitionEnd",
						MozTransition: "transitionend",
						WebkitTransition: "webkitTransitionEnd"
					};
				for (t in i)
					if (n.style[t] !== o) return i[t];
				return "transitionend"
			}(),
			f = function(t) {
				return t && t.length && t[0].offsetHeight
			},
			p = function(t, e) {
				var o = n.extend(!0, {}, t, e);
				return n.each(e, function(t, e) {
					n.isArray(e) && (o[t] = e)
				}), o
			},
			h = function(t, e, o) {
				var i = this;
				i.opts = p({
					index: o
				}, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = p(i.opts, e)), n.fancybox.isMobile && (i.opts = p(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
			};
		n.extend(h.prototype, {
				init: function() {
					var i, a, s, r = this,
						c = r.group[r.currIndex],
						l = c.opts,
						d = n.fancybox.scrollbarWidth;
					l.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && l.hideScrollbar !== !1 && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (d === o && (i = n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"), d = n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth, i.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + d + "px; }</style>"), n("body").addClass("compensate-for-scrollbar")), s = "", n.each(l.buttons, function(t, e) {
						s += l.btnTpl[e] || ""
					}), a = n(r.translate(r, l.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", l.btnTpl.arrowLeft + l.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(l.baseClass).data("FancyBox", r).appendTo(l.parentEl), r.$refs = {
						container: a
					}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
						r.$refs[t] = a.find(".fancybox-" + t)
					}), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex)
				},
				translate: function(t, e) {
					var n = t.opts.i18n[t.opts.lang];
					return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
						var i = n[e];
						return i === o ? t : i
					})
				},
				addContent: function(t) {
					var e, i = this,
						a = n.makeArray(t);
					n.each(a, function(t, e) {
						var a, s, r, c, l, d = {},
							u = {};
						n.isPlainObject(e) ? (d = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (a = n(e), u = a.data() || {}, u = n.extend(!0, {}, u, u.options), u.$orig = a, d.src = i.opts.src || u.src || a.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = {
							type: "html",
							src: e + ""
						}, d.opts = n.extend(!0, {}, i.opts, u), n.isArray(u.buttons) && (d.opts.buttons = u.buttons), n.fancybox.isMobile && d.opts.mobile && (d.opts = p(d.opts, d.opts.mobile)), s = d.type || d.opts.type, c = d.src || "", !s && c && ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "iframe" : "#" === c.charAt(0) && (s = "inline")), s ? d.type = s : i.trigger("objectNeedsType", d), d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = i.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.opts.$trigger && d.index === i.opts.index && (d.opts.$thumb = d.opts.$trigger.find("img:first"), d.opts.$thumb.length && (d.opts.$orig = d.opts.$trigger)), d.opts.$thumb && d.opts.$thumb.length || !d.opts.$orig || (d.opts.$thumb = d.opts.$orig.find("img:first")), "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [i, d])), "function" === n.type(i.opts.caption) && (d.opts.caption = i.opts.caption.apply(e, [i, d])), d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === o ? "" : d.opts.caption + ""), "ajax" === d.type && (l = c.split(/\s+/, 2), l.length > 1 && (d.src = l.shift(), d.opts.filter = l.shift())), d.opts.modal && (d.opts = n.extend(!0, d.opts, {
							infobar: 0,
							toolbar: 0,
							smallBtn: 0,
							keyboard: 0,
							slideShow: 0,
							fullScreen: 0,
							thumbs: 0,
							touch: 0,
							clickContent: !1,
							clickSlide: !1,
							clickOutside: !1,
							dblclickContent: !1,
							dblclickSlide: !1,
							dblclickOutside: !1
						})), i.group.push(d)
					}), Object.keys(i.slides).length && (i.updateControls(), e = i.Thumbs, e && e.isActive && (e.create(), e.focus()))
				},
				addEvents: function() {
					var e = this;
					e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
						t.stopPropagation(), t.preventDefault(), e.close(t)
					}).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
						t.stopPropagation(), t.preventDefault(), e.previous()
					}).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
						t.stopPropagation(), t.preventDefault(), e.next()
					}).on("click.fb", "[data-fancybox-zoom]", function(t) {
						e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
					}), s.on("orientationchange.fb resize.fb", function(t) {
						t && t.originalEvent && "resize" === t.originalEvent.type ? d(function() {
							e.update()
						}) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function() {
							e.$refs.stage.show(), e.update()
						}, n.fancybox.isMobile ? 600 : 250))
					}), r.on("keydown.fb", function(t) {
						var o = n.fancybox ? n.fancybox.getInstance() : null,
							i = o.current,
							a = t.keyCode || t.which;
						if (9 == a) return void(i.opts.trapFocus && e.focus(t));
						if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a)
					}), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
						e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
					}), e.idleInterval = t.setInterval(function() {
						e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
					}, 1e3))
				},
				removeEvents: function() {
					var e = this;
					s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
				},
				previous: function(t) {
					return this.jumpTo(this.currPos - 1, t)
				},
				next: function(t) {
					return this.jumpTo(this.currPos + 1, t)
				},
				jumpTo: function(t, e) {
					var i, a, s, r, c, l, d, u = this,
						f = u.group.length;
					if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
						if (t = parseInt(t, 10), s = u.current ? u.current.opts.loop : u.opts.loop, !s && (t < 0 || t >= f)) return !1;
						if (i = u.firstRun = !Object.keys(u.slides).length, !(f < 2 && !i && u.isDragging)) {
							if (c = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, r = u.createSlide(t), f > 1 && ((s || r.index < f - 1) && u.createSlide(t + 1), (s || r.index > 0) && u.createSlide(t - 1)), u.current = r, u.currIndex = r.index, u.currPos = r.pos, u.trigger("beforeShow", i), u.updateControls(), a = u.isMoved(r), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i) return r.opts.animationEffect && e && u.$refs.container.css("transition-duration", e + "ms"), u.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--previous"), u.loadSlide(r), r.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), u.preload("image"), void u.$refs.container.trigger("focus");
							n.each(u.slides, function(t, e) {
								n.fancybox.stop(e.$slide, !0), e.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
									return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
								})
							}), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), a ? (l = Math.round(r.$slide.width()), n.each(u.slides, function(t, o) {
								var i = o.pos - r.pos;
								n.fancybox.animate(o.$slide, {
									top: 0,
									left: i * l + i * o.opts.gutter
								}, e, function() {
									o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === u.currPos && u.complete()
								})
							})) : u.$refs.stage.children().removeAttr("style"), r.isLoaded ? u.revealContent(r) : u.loadSlide(r), u.preload("image"), c.pos !== r.pos && (d = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), c.isComplete = !1, e && (a || r.opts.transitionEffect) && (a ? c.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect, n.fancybox.animate(c.$slide, d, e, null, !1))))
						}
					}
				},
				createSlide: function(t) {
					var e, o, i = this;
					return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
						pos: t,
						$slide: e,
						isLoaded: !1
					}), i.updateSlide(i.slides[t])), i.slides[t]
				},
				scaleToActual: function(t, e, i) {
					var a, s, r, c, l, d = this,
						u = d.current,
						f = u.$content,
						p = n.fancybox.getTranslate(u.$slide).width,
						h = n.fancybox.getTranslate(u.$slide).height,
						g = u.width,
						b = u.height;
					!d.isAnimating && f && "image" == u.type && u.isLoaded && !u.hasError && (n.fancybox.stop(f), d.isAnimating = !0, t = t === o ? .5 * p : t, e = e === o ? .5 * h : e, a = n.fancybox.getTranslate(f), a.top -= n.fancybox.getTranslate(u.$slide).top, a.left -= n.fancybox.getTranslate(u.$slide).left, c = g / a.width, l = b / a.height, s = .5 * p - .5 * g, r = .5 * h - .5 * b, g > p && (s = a.left * c - (t * c - t), s > 0 && (s = 0), s < p - g && (s = p - g)), b > h && (r = a.top * l - (e * l - e), r > 0 && (r = 0), r < h - b && (r = h - b)), d.updateCursor(g, b), n.fancybox.animate(f, {
						top: r,
						left: s,
						scaleX: c,
						scaleY: l
					}, i || 330, function() {
						d.isAnimating = !1
					}), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
				},
				scaleToFit: function(t) {
					var e, o = this,
						i = o.current,
						a = i.$content;
					!o.isAnimating && a && "image" == i.type && i.isLoaded && !i.hasError && (n.fancybox.stop(a), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
						top: e.top,
						left: e.left,
						scaleX: e.width / a.width(),
						scaleY: e.height / a.height()
					}, t || 330, function() {
						o.isAnimating = !1
					}))
				},
				getFitPos: function(t) {
					var e, o, i, a, s = this,
						r = t.$content,
						c = t.$slide,
						l = t.width || t.opts.width,
						d = t.height || t.opts.height,
						u = {};
					return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l = Math.floor(i * l), d = Math.floor(i * d), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u)
				},
				update: function() {
					var t = this;
					n.each(t.slides, function(e, n) {
						t.updateSlide(n)
					})
				},
				updateSlide: function(t) {
					var e = this,
						o = t && t.$content,
						i = t.width || t.opts.width,
						a = t.height || t.opts.height,
						s = t.$slide;
					o && (i || a || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(o), n.fancybox.setTranslate(o, e.getFitPos(t)), t.pos === e.currPos && (e.isAnimating = !1, e.updateCursor())), s.length && (s.trigger("refresh"), e.$refs.toolbar.toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), e.trigger("onUpdate", t)
				},
				centerSlide: function(t, e) {
					var i, a, s = this;
					s.current && (i = Math.round(t.$slide.width()), a = t.pos - s.current.pos, n.fancybox.animate(t.$slide, {
						top: 0,
						left: a * i + a * t.opts.gutter,
						opacity: 1
					}, e === o ? 0 : e, null, !1))
				},
				isMoved: function(t) {
					var e = t || this.current,
						o = n.fancybox.getTranslate(e.$slide);
					return (0 !== o.left || 0 !== o.top) && !e.$slide.hasClass("fancybox-animated")
				},
				updateCursor: function(t, e) {
					var o, i = this,
						a = i.current,
						s = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
					a && !i.isClosing && (o = i.isZoomable(), s.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), i.canPan(t, e) ? s.addClass("fancybox-can-pan") : o && ("zoom" === a.opts.clickContent || n.isFunction(a.opts.clickContent) && "zoom" == a.opts.clickContent(a)) ? s.addClass("fancybox-can-zoomIn") : a.opts.touch && (a.opts.touch.vertical || i.group.length > 1) && "video" !== a.contentType && s.addClass("fancybox-can-swipe"))
				},
				isZoomable: function() {
					var t, e = this,
						n = e.current;
					if (n && !e.isClosing && "image" === n.type && !n.hasError) {
						if (!n.isLoaded) return !0;
						if (t = e.getFitPos(n), n.width > t.width || n.height > t.height) return !0
					}
					return !1
				},
				isScaledDown: function(t, e) {
					var i = this,
						a = !1,
						s = i.current,
						r = s.$content;
					return t !== o && e !== o ? a = t < s.width && e < s.height : r && (a = n.fancybox.getTranslate(r), a = a.width < s.width && a.height < s.height), a
				},
				canPan: function(t, e) {
					var i, a, s = this,
						r = !1,
						c = s.current;
					return "image" === c.type && (i = c.$content) && !c.hasError && (r = s.getFitPos(c), a = t !== o && e !== o ? {
						width: t,
						height: e
					} : n.fancybox.getTranslate(i), r = Math.abs(a.width - r.width) > 1.5 || Math.abs(a.height - r.height) > 1.5), r
				},
				loadSlide: function(t) {
					var e, o, i, a = this;
					if (!t.isLoading && !t.isLoaded) {
						switch (t.isLoading = !0, a.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
							case "image":
								a.setImage(t);
								break;
							case "iframe":
								a.setIframe(t);
								break;
							case "html":
								a.setContent(t, t.src || t.content);
								break;
							case "video":
								a.setContent(t, t.opts.video.tpl.replace("{{src}}", t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format));
								break;
							case "inline":
								n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
								break;
							case "ajax":
								a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
									url: t.src,
									success: function(e, n) {
										"success" === n && a.setContent(t, e)
									},
									error: function(e, n) {
										e && "abort" !== n && a.setError(t)
									}
								})), o.one("onReset", function() {
									i.abort()
								});
								break;
							default:
								a.setError(t)
						}
						return !0
					}
				},
				setImage: function(e) {
					var o, i, a, s, r, c = this,
						l = e.opts.srcset || e.opts.image.srcset;
					if (e.timouts = setTimeout(function() {
							var t = e.$image;
							!e.isLoading || t && t.length && t[0].complete || e.hasError || c.showLoading(e)
						}, 350), l) {
						s = t.devicePixelRatio || 1, r = t.innerWidth * s, a = l.split(",").map(function(t) {
							var e = {};
							return t.trim().split(/\s+/).forEach(function(t, n) {
								var o = parseInt(t.substring(0, t.length - 1), 10);
								return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]))
							}), e
						}), a.sort(function(t, e) {
							return t.value - e.value
						});
						for (var d = 0; d < a.length; d++) {
							var u = a[d];
							if ("w" === u.postfix && u.value >= r || "x" === u.postfix && u.value >= s) {
								i = u;
								break
							}
						}!i && a.length && (i = a[a.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = l)
					}
					e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), o = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), e.opts.preload !== !1 && e.opts.width && e.opts.height && o && (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function() {
						n(this).remove(), e.$ghost = null
					}).one("load", function() {
						c.afterLoad(e)
					}).addClass("fancybox-image").appendTo(e.$content).attr("src", o)), c.setBigImage(e)
				},
				setBigImage: function(t) {
					var e = this,
						o = n("<img />");
					t.$image = o.one("error", function() {
						e.setError(t)
					}).one("load", function() {
						var n;
						t.$ghost || (e.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), e.afterLoad(t)), t.timouts && (clearTimeout(t.timouts), t.timouts = null), e.isClosing || (t.opts.srcset && (n = t.opts.sizes, n && "auto" !== n || (n = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", n).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
							t.$ghost && !e.isClosing && t.$ghost.hide()
						}, Math.min(300, Math.max(1e3, t.height / 1600))), e.hideLoading(t))
					}).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error && o.trigger("error")
				},
				resolveImageSlideSize: function(t, e, n) {
					var o = parseInt(t.opts.width, 10),
						i = parseInt(t.opts.height, 10);
					t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
				},
				setIframe: function(t) {
					var e, i = this,
						a = t.opts.iframe,
						s = t.$slide;
					t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(t.$content), a.preload ? (i.showLoading(t), e.on("load.fb error.fb", function(e) {
						this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)
					}), s.on("refresh.fb", function() {
						var n, i, r = t.$content,
							c = a.css.width,
							l = a.css.height;
						if (1 === e[0].isReady) {
							try {
								n = e.contents(), i = n.find("body")
							} catch (t) {}
							i && i.length && i.children().length && (s.css("overflow", "visible"), r.css({
								width: "100%",
								height: ""
							}), c === o && (c = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), c && r.width(c), l === o && (l = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), l && r.height(l), s.css("overflow", "auto")), r.removeClass("fancybox-is-hidden")
						}
					})) : this.afterLoad(t), e.attr("src", t.src), s.one("onReset", function() {
						try {
							n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
						} catch (t) {}
						n(this).off("refresh.fb").empty(), t.isLoaded = !1
					})
				},
				setContent: function(t, e) {
					var o = this;
					o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? (e.hasClass("fancybox-content") && e.parent(".fancybox-slide--html").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
						n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
					}), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
				},
				setError: function(t) {
					t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
				},
				showLoading: function(t) {
					var e = this;
					t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide))
				},
				hideLoading: function(t) {
					var e = this;
					t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
				},
				afterLoad: function(t) {
					var e = this;
					e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.pos === e.currPos && e.updateCursor(), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
						return 2 == t.button && t.preventDefault(), !0
					}), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
				},
				revealContent: function(t) {
					var e, i, a, s, r = this,
						c = t.$slide,
						l = !1,
						d = !1,
						u = r.isMoved(t),
						p = t.isRevealed;
					if (!u || !p) {
						if (t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], a = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10), t.pos === r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0), !u && t.pos === r.currPos && a || (e = !1), "zoom" === e && (t.pos === r.currPos && a && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e) return l.scaleX = l.width / d.width, l.scaleY = l.height / d.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - d.width / d.height) > .1), s && (d.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), f(t.$content), void n.fancybox.animate(t.$content, l, a, function() {
							r.isAnimating = !1, r.complete()
						});
						if (r.updateSlide(t), !e) return f(c), p || t.$content.removeClass("fancybox-is-hidden").hide().fadeIn("fast"), void(t.pos === r.currPos && r.complete());
						n.fancybox.stop(c), i = "fancybox-animated fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), t.$content.removeClass("fancybox-is-hidden"), f(c), n.fancybox.animate(c, "fancybox-slide--current", a, function() {
							c.removeClass(i).removeAttr("style"), t.pos === r.currPos && r.complete()
						}, !0)
					}
				},
				getThumbPos: function(o) {
					var i, a = this,
						s = !1,
						r = o.opts.$thumb,
						c = r && r.length && r[0].ownerDocument === e ? r.offset() : 0,
						l = function(e) {
							for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
							return o = s.every(function(t) {
								var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
									n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
								return e > 0 && n > 0
							}), o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height()
						};
					return c && l(r) && (i = a.$refs.stage.offset(), s = {
						top: c.top - i.top + parseFloat(r.css("border-top-width") || 0),
						left: c.left - i.left + parseFloat(r.css("border-left-width") || 0),
						width: r.width(),
						height: r.height(),
						scaleX: 1,
						scaleY: 1
					}), s
				},
				complete: function() {
					var t, e = this,
						o = e.current,
						i = {};
					!e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function(t, o) {
						o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
					}), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play"), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
				},
				preload: function(t) {
					var e = this,
						n = e.slides[e.currPos + 1],
						o = e.slides[e.currPos - 1];
					o && o.type === t && e.loadSlide(o), n && n.type === t && e.loadSlide(n)
				},
				focus: function(t, o) {
					var i, a, s = this,
						r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
					s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function() {
						return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
					}), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
				},
				activate: function() {
					var t = this;
					n(".fancybox-container").each(function() {
						var e = n(this).data("FancyBox");
						e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
					}), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
				},
				close: function(t, e) {
					var o, i, a, s, r, c, l, p = this,
						h = p.current,
						g = function() {
							p.cleanUp(t)
						};
					return !p.isClosing && (p.isClosing = !0, p.trigger("beforeClose", t) === !1 ? (p.isClosing = !1, d(function() {
						p.update()
					}), !1) : (p.removeEvents(), h.timouts && clearTimeout(h.timouts), a = h.$content, o = h.opts.animationEffect, i = n.isNumeric(e) ? e : o ? h.opts.animationDuration : 0, h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), i && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), p.hideLoading(h), p.hideControls(), p.updateCursor(), "zoom" !== o || t !== !0 && a && i && "image" === h.type && !h.hasError && (l = p.getThumbPos(h)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
						top: s.top,
						left: s.left,
						scaleX: s.width / l.width,
						scaleY: s.height / l.height,
						width: l.width,
						height: l.height
					}, r = h.opts.zoomOpacity, "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), f(a), n.fancybox.animate(a, l, i, g), !0) : (o && i ? t === !0 ? setTimeout(g, i) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, g) : g(), !0)))
				},
				cleanUp: function(e) {
					var o, i, a, s = this,
						r = s.current.opts.$orig;
					s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
				},
				trigger: function(t, e) {
					var o, i = Array.prototype.slice.call(arguments, 1),
						a = this,
						s = e && e.opts ? e : a.current;
					return s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), o === !1 ? o : void("afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i))
				},
				updateControls: function() {
					var t = this,
						o = t.current,
						i = o.index,
						a = o.opts.caption,
						s = t.$refs.container,
						r = t.$refs.caption;
					o.$slide.trigger("refresh"), t.$caption = a && a.length ? r.html(a) : null, t.isHiddenControls || t.isIdle || t.showControls(), s.find("[data-fancybox-count]").html(t.group.length), s.find("[data-fancybox-index]").html(i + 1), s.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), s.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
				},
				hideControls: function() {
					this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
				},
				showControls: function() {
					var t = this,
						e = t.current ? t.current.opts : t.opts,
						n = t.$refs.container;
					t.isHiddenControls = !1,
						t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
				},
				toggleControls: function() {
					this.isHiddenControls ? this.showControls() : this.hideControls()
				}
			}), n.fancybox = {
				version: "3.4.1",
				defaults: a,
				getInstance: function(t) {
					var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
						o = Array.prototype.slice.call(arguments, 1);
					return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
				},
				open: function(t, e, n) {
					return new h(t, e, n)
				},
				close: function(t) {
					var e = this.getInstance();
					e && (e.close(), t === !0 && this.close(t))
				},
				destroy: function() {
					this.close(!0), r.add("body").off("click.fb-start", "**")
				},
				isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
				use3d: function() {
					var n = e.createElement("div");
					return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
				}(),
				getTranslate: function(t) {
					var e;
					return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
						top: e.top || 0,
						left: e.left || 0,
						width: e.width,
						height: e.height,
						opacity: parseFloat(t.css("opacity"))
					})
				},
				setTranslate: function(t, e) {
					var n = "",
						i = {};
					if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== o && (i.opacity = e.opacity), e.width !== o && (i.width = e.width), e.height !== o && (i.height = e.height), t.css(i)
				},
				animate: function(t, e, i, a, s) {
					var r, c = !1;
					n.isFunction(i) && (a = i, i = null), n.isPlainObject(e) || t.removeAttr("style"), n.fancybox.stop(t), t.on(u, function(o) {
						(!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), c && n.fancybox.setTranslate(t, c), n.isNumeric(i) && t.css("transition-duration", ""), n.isPlainObject(e) ? s === !1 && t.removeAttr("style") : s !== !0 && t.removeClass(e), n.isFunction(a) && a(o))
					}), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (r = n.fancybox.getTranslate(t), c = n.extend({}, e, {
						width: r.width * e.scaleX,
						height: r.height * e.scaleY,
						scaleX: 1,
						scaleY: 1
					}), delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
						t.trigger("transitionend")
					}, i + 16))
				},
				stop: function(t, e) {
					t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(u), t.off(u).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
				}
			}, n.fn.fancybox = function(t) {
				var e;
				return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
					options: t
				}, i) : this.off("click.fb-start").on("click.fb-start", {
					items: this,
					options: t
				}, i), this
			}, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
				n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
					$trigger: n(this)
				})
			}),
			function() {
				var t = ".fancybox-button",
					e = "fancybox-focus",
					o = null;
				r.on("mousedown mouseup focus blur", t, function(i) {
					switch (i.type) {
						case "mousedown":
							o = n(this);
							break;
						case "mouseup":
							o = null;
							break;
						case "focusin":
							n(t).removeClass(e), n(this).is(o) || n(this).is("[disabled]") || n(this).addClass(e);
							break;
						case "focusout":
							n(t).removeClass(e)
					}
				})
			}()
	}
}(window, document, jQuery),
function(t) {
	"use strict";
	var e = function(e, n, o) {
			if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {
				e = e.replace("$" + t, n || "")
			}), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
		},
		n = {
			youtube: {
				matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
				params: {
					autoplay: 1,
					autohide: 1,
					fs: 1,
					rel: 0,
					hd: 1,
					wmode: "transparent",
					enablejsapi: 1,
					html5: 1
				},
				paramPlace: 8,
				type: "iframe",
				url: "//www.youtube-nocookie.com/embed/$4",
				thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
			},
			vimeo: {
				matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
				params: {
					autoplay: 1,
					hd: 1,
					show_title: 1,
					show_byline: 1,
					show_portrait: 0,
					fullscreen: 1,
					api: 1
				},
				paramPlace: 3,
				type: "iframe",
				url: "//player.vimeo.com/video/$2"
			},
			instagram: {
				matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type: "image",
				url: "//$1/p/$2/media/?size=l"
			},
			gmap_place: {
				matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
				type: "iframe",
				url: function(t) {
					return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
				}
			},
			gmap_search: {
				matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
				type: "iframe",
				url: function(t) {
					return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
				}
			}
		};
	t(document).on("objectNeedsType.fb", function(o, i, a) {
		var s, r, c, l, d, u, f, p = a.src || "",
			h = !1;
		s = t.extend(!0, {}, n, a.opts.media), t.each(s, function(n, o) {
			if (c = p.match(o.matcher)) {
				if (h = o.type, f = n, u = {}, o.paramPlace && c[o.paramPlace]) {
					d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
					for (var i = 0; i < d.length; ++i) {
						var s = d[i].split("=", 2);
						2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
					}
				}
				return l = t.extend(!0, {}, o.params, a.opts[n], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : e(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : e(o.thumb, c), "youtube" === n ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
					return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
				}) : "vimeo" === n && (p = p.replace("&%23", "#")), !1
			}
		}), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
			iframe: {
				preload: !1,
				attr: {
					scrolling: "no"
				}
			}
		})), t.extend(a, {
			type: h,
			src: p,
			origSrc: a.src,
			contentSource: f,
			contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
		})) : p && (a.type = a.opts.defaultType)
	})
}(jQuery),
function(t, e, n) {
	"use strict";
	var o = function() {
			return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
				return t.setTimeout(e, 1e3 / 60)
			}
		}(),
		i = function() {
			return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
				t.clearTimeout(e)
			}
		}(),
		a = function(e) {
			var n = [];
			e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
			for (var o in e) e[o].pageX ? n.push({
				x: e[o].pageX,
				y: e[o].pageY
			}) : e[o].clientX && n.push({
				x: e[o].clientX,
				y: e[o].clientY
			});
			return n
		},
		s = function(t, e, n) {
			return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
		},
		r = function(t) {
			if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
			for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
				if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
			return !1
		},
		c = function(e) {
			var n = t.getComputedStyle(e)["overflow-y"],
				o = t.getComputedStyle(e)["overflow-x"],
				i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
				a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
			return i || a
		},
		l = function(t) {
			for (var e = !1;;) {
				if (e = c(t.get(0))) break;
				if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
			}
			return e
		},
		d = function(t) {
			var e = this;
			e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
		};
	d.prototype.destroy = function() {
		this.$container.off(".fb.touch")
	}, d.prototype.ontouchstart = function(o) {
		var i = this,
			c = n(o.target),
			d = i.instance,
			u = d.current,
			f = u.$slide,
			p = u.$content,
			h = "touchstart" == o.type;
		if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
			if (!u || d.isAnimating || d.isClosing) return o.stopPropagation(), void o.preventDefault();
			if (i.realPoints = i.startPoints = a(o), i.startPoints.length) {
				if (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
						top: 0,
						left: 0
					}, i.sliderStartPos = i.sliderLastPos || n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), !i.opts && !i.canPan || !c.is(i.$stage) && !i.$stage.find(c).length) return void(c.is(".fancybox-image") && o.preventDefault());
				i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))
			}
		}
	}, d.prototype.onscroll = function(t) {
		var n = this;
		n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
	}, d.prototype.ontouchmove = function(t) {
		var e = this;
		return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = a(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
	}, d.prototype.onSwipe = function(e) {
		var a, s = this,
			r = s.isSwiping,
			c = s.sliderStartPos.left || 0;
		if (r !== !0) "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = {
			top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
			left: c
		}, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function() {
			s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
				var o = e.pos - s.instance.currPos;
				n.fancybox.setTranslate(e.$slide, {
					top: s.sliderLastPos.top,
					left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
				})
			}), s.$container.addClass("fancybox-is-sliding"))
		});
		else if (Math.abs(s.distance) > 10) {
			if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), s.canTap = !1, "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
			s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function(t, e) {
				n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left - n.fancybox.getTranslate(s.instance.$refs.stage).left)
			}), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()
		}
	}, d.prototype.onPan = function() {
		var t = this;
		return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void(t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (i(t.requestId), t.requestId = null), void(t.requestId = o(function() {
			n.fancybox.setTranslate(t.$content, t.contentLastPos)
		})))
	}, d.prototype.limitMovement = function() {
		var t, e, n, o, i, a, s = this,
			r = s.canvasWidth,
			c = s.canvasHeight,
			l = s.distanceX,
			d = s.distanceY,
			u = s.contentStartPos,
			f = u.left,
			p = u.top,
			h = u.width,
			g = u.height;
		return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
			top: a,
			left: i
		}
	}, d.prototype.limitPosition = function(t, e, n, o) {
		var i = this,
			a = i.canvasWidth,
			s = i.canvasHeight;
		return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
			top: e,
			left: t
		}
	}, d.prototype.onZoom = function() {
		var e = this,
			a = e.contentStartPos,
			r = a.width,
			c = a.height,
			l = a.left,
			d = a.top,
			u = s(e.newPoints[0], e.newPoints[1]),
			f = u / e.startDistanceBetweenFingers,
			p = Math.floor(r * f),
			h = Math.floor(c * f),
			g = (r - p) * e.percentageOfImageAtPinchPointX,
			b = (c - h) * e.percentageOfImageAtPinchPointY,
			m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
			v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
			y = m - e.centerPointStartX,
			x = v - e.centerPointStartY,
			w = l + (g + y),
			$ = d + (b + x),
			S = {
				top: $,
				left: w,
				scaleX: f,
				scaleY: f
			};
		e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && (i(e.requestId), e.requestId = null), e.requestId = o(function() {
			n.fancybox.setTranslate(e.$content, e.contentLastPos)
		})
	}, d.prototype.ontouchend = function(t) {
		var o = this,
			s = Math.max((new Date).getTime() - o.startTime, 1),
			r = o.isSwiping,
			c = o.isPanning,
			l = o.isZooming,
			d = o.isScrolling;
		return o.endPoints = a(t), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void(c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, d)))
	}, d.prototype.endSwiping = function(t, e) {
		var o = this,
			i = !1,
			a = o.instance.group.length;
		o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
			top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
			opacity: 0
		}, 200), i = o.instance.close(!0, 200)) : "x" == t && o.distanceX > 50 && a > 1 ? i = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && a > 1 && (i = o.instance.next(o.speedX)), i !== !1 || "x" != t && "y" != t || (e || a < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)), o.$container.removeClass("fancybox-is-sliding")
	}, d.prototype.endPanning = function() {
		var t, e, o, i = this;
		i.contentLastPos && (i.opts.momentum === !1 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 330))
	}, d.prototype.endZooming = function() {
		var t, e, o, i, a = this,
			s = a.instance.current,
			r = a.newWidth,
			c = a.newHeight;
		a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
			top: e,
			left: t,
			width: r,
			height: c,
			scaleX: 1,
			scaleY: 1
		}, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.setTranslate(a.$content, n.fancybox.getTranslate(a.$content)), n.fancybox.animate(a.$content, o, 150)))
	}, d.prototype.onTap = function(e) {
		var o, i = this,
			s = n(e.target),
			r = i.instance,
			c = r.current,
			l = e && a(e) || i.startPoints,
			d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
			u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
			f = function(t) {
				var o = c.opts[t];
				if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
					case "close":
						r.close(i.startEvent);
						break;
					case "toggleControls":
						r.toggleControls(!0);
						break;
					case "next":
						r.next();
						break;
					case "nextOrClose":
						r.group.length > 1 ? r.next() : r.close(i.startEvent);
						break;
					case "zoom":
						"image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
				}
			};
		if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
			if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
			else if (s.is(".fancybox-slide")) o = "Slide";
			else {
				if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
				o = "Content"
			}
			if (i.tapped) {
				if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
				f("dblclick" + o)
			} else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function() {
				i.tapped = null, f("click" + o)
			}, 500) : f("click" + o);
			return this
		}
	}, n(e).on("onActivate.fb", function(t, e) {
		e && !e.Guestures && (e.Guestures = new d(e))
	})
}(window, document, jQuery),
function(t, e) {
	"use strict";
	e.extend(!0, e.fancybox.defaults, {
		btnTpl: {
			slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
		},
		slideShow: {
			autoStart: !1,
			speed: 3e3
		}
	});
	var n = function(t) {
		this.instance = t, this.init()
	};
	e.extend(n.prototype, {
		timer: null,
		isActive: !1,
		$button: null,
		init: function() {
			var t = this;
			t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
				t.toggle()
			}), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
		},
		set: function(t) {
			var e = this,
				n = e.instance,
				o = n.current,
				i = function() {
					e.isActive && n.jumpTo((n.currIndex + 1) % n.group.length)
				};
			o && (t === !0 || o.opts.loop || n.currIndex < n.group.length - 1) ? e.timer = setTimeout(function() {
				var t;
				e.isActive && (t = o.$slide.find("video,audio").filter(":visible:first"), t.length ? t.one("ended", i) : i())
			}, o.opts.slideShow.speed) : (e.stop(), n.idleSecondsCounter = 0, n.showControls())
		},
		clear: function() {
			var t = this;
			clearTimeout(t.timer), t.timer = null
		},
		start: function() {
			var t = this,
				e = t.instance.current;
			e && (t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
		},
		stop: function() {
			var t = this,
				e = t.instance.current;
			t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1)
		},
		toggle: function() {
			var t = this;
			t.isActive ? t.stop() : t.start()
		}
	}), e(t).on({
		"onInit.fb": function(t, e) {
			e && !e.SlideShow && (e.SlideShow = new n(e))
		},
		"beforeShow.fb": function(t, e, n, o) {
			var i = e && e.SlideShow;
			o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
		},
		"afterShow.fb": function(t, e, n) {
			var o = e && e.SlideShow;
			o && o.isActive && o.set()
		},
		"afterKeydown.fb": function(n, o, i, a, s) {
			var r = o && o.SlideShow;
			!r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
		},
		"beforeClose.fb onDeactivate.fb": function(t, e) {
			var n = e && e.SlideShow;
			n && n.stop()
		}
	}), e(t).on("visibilitychange", function() {
		var n = e.fancybox.getInstance(),
			o = n && n.SlideShow;
		o && o.isActive && (t.hidden ? o.clear() : o.set())
	})
}(document, jQuery),
function(t, e) {
	"use strict";
	var n = function() {
		for (var e = [
				["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
				["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
				["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
				["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
				["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
			], n = {}, o = 0; o < e.length; o++) {
			var i = e[o];
			if (i && i[1] in t) {
				for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
				return n
			}
		}
		return !1
	}();
	if (n) {
		var o = {
			request: function(e) {
				e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
			},
			exit: function() {
				t[n.exitFullscreen]()
			},
			toggle: function(e) {
				e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
			},
			isFullscreen: function() {
				return Boolean(t[n.fullscreenElement])
			},
			enabled: function() {
				return Boolean(t[n.fullscreenEnabled])
			}
		};
		e.extend(!0, e.fancybox.defaults, {
			btnTpl: {
				fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
			},
			fullScreen: {
				autoStart: !1
			}
		}), e(t).on(n.fullscreenchange, function() {
			var t = o.isFullscreen(),
				n = e.fancybox.getInstance();
			n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
		})
	}
	e(t).on({
		"onInit.fb": function(t, e) {
			var i;
			return n ? void(e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
				t.stopPropagation(), t.preventDefault(), o.toggle()
			}), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()) : void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
		},
		"afterKeydown.fb": function(t, e, n, o, i) {
			e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
		},
		"beforeClose.fb": function(t, e) {
			e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
		}
	})
}(document, jQuery),
function(t, e) {
	"use strict";
	var n = "fancybox-thumbs",
		o = n + "-active";
	e.fancybox.defaults = e.extend(!0, {
		btnTpl: {
			thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
		},
		thumbs: {
			autoStart: !1,
			hideOnClose: !0,
			parentEl: ".fancybox-container",
			axis: "y"
		}
	}, e.fancybox.defaults);
	var i = function(t) {
		this.init(t)
	};
	e.extend(i.prototype, {
		$button: null,
		$grid: null,
		$list: null,
		isVisible: !1,
		isActive: !1,
		init: function(t) {
			var e, n, o = this;
			o.instance = t, t.Thumbs = o, o.opts = t.group[t.currIndex].opts.thumbs, e = t.group[0], e = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), t.group.length > 1 && (n = t.group[1], n = n.opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")), o.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), o.opts && e && n ? (o.$button.show().on("click", function() {
				o.toggle()
			}), o.isActive = !0) : o.$button.hide()
		},
		create: function() {
			var t, o = this,
				i = o.instance,
				a = o.opts.parentEl,
				s = [];
			o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function() {
				i.jumpTo(e(this).attr("data-index"))
			})), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function(e, n) {
				t = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '" ' + (t && t.length ? ' style="background-image:url(' + t + ')" />' : "") + "></a>")
			}), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
		},
		focus: function(t) {
			var e, n, i = this,
				a = i.$list,
				s = i.$grid;
			i.instance.current && (e = a.children().removeClass(o).filter('[data-index="' + i.instance.current.index + '"]').addClass(o), n = e.position(), "y" === i.opts.axis && (n.top < 0 || n.top > a.height() - e.outerHeight()) ? a.stop().animate({
				scrollTop: a.scrollTop() + n.top
			}, t) : "x" === i.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && a.parent().stop().animate({
				scrollLeft: n.left
			}, t))
		},
		update: function() {
			var t = this;
			t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
		},
		hide: function() {
			this.isVisible = !1, this.update()
		},
		show: function() {
			this.isVisible = !0, this.update()
		},
		toggle: function() {
			this.isVisible = !this.isVisible, this.update()
		}
	}), e(t).on({
		"onInit.fb": function(t, e) {
			var n;
			e && !e.Thumbs && (n = new i(e), n.isActive && n.opts.autoStart === !0 && n.show())
		},
		"beforeShow.fb": function(t, e, n, o) {
			var i = e && e.Thumbs;
			i && i.isVisible && i.focus(o ? 0 : 250)
		},
		"afterKeydown.fb": function(t, e, n, o, i) {
			var a = e && e.Thumbs;
			a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
		},
		"beforeClose.fb": function(t, e) {
			var n = e && e.Thumbs;
			n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
		}
	})
}(document, jQuery),
function(t, e) {
	"use strict";

	function n(t) {
		var e = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"/": "&#x2F;",
			"`": "&#x60;",
			"=": "&#x3D;"
		};
		return String(t).replace(/[&<>"'`=\/]/g, function(t) {
			return e[t]
		})
	}
	e.extend(!0, e.fancybox.defaults, {
		btnTpl: {
			share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
		},
		share: {
			url: function(t, e) {
				return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
			},
			tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
		}
	}), e(t).on("click", "[data-fancybox-share]", function() {
		var t, o, i = e.fancybox.getInstance(),
			a = i.current || null;
		a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
			src: i.translate(i, o),
			type: "html",
			opts: {
				touch: !1,
				animationEffect: !1,
				afterLoad: function(t, e) {
					i.$refs.container.one("beforeClose.fb", function() {
						t.close(null, 0)
					}), e.$content.find(".fancybox-share__button").click(function() {
						return window.open(this.href, "Share", "width=550, height=450"), !1
					})
				},
				mobile: {
					autoFocus: !1
				}
			}
		}))
	})
}(document, jQuery),
function(t, e, n) {
	"use strict";

	function o() {
		var e = t.location.hash.substr(1),
			n = e.split("-"),
			o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
			i = n.join("-");
		return {
			hash: e,
			index: o < 1 ? 1 : o,
			gallery: i
		}
	}

	function i(t) {
		"" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
	}

	function a(t) {
		var e, n;
		return !!t && (e = t.current ? t.current.opts : t.opts, n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : ""), "" !== n && n)
	}
	n.escapeSelector || (n.escapeSelector = function(t) {
		var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
			n = function(t, e) {
				return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
			};
		return (t + "").replace(e, n)
	}), n(function() {
		n.fancybox.defaults.hash !== !1 && (n(e).on({
			"onInit.fb": function(t, e) {
				var n, i;
				e.group[e.currIndex].opts.hash !== !1 && (n = o(), i = a(e), i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
			},
			"beforeShow.fb": function(n, o, i, s) {
				var r;
				i && i.opts.hash !== !1 && (r = a(o), r && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function() {
					"replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
				}, 300))))
			},
			"beforeClose.fb": function(n, o, i) {
				i.opts.hash !== !1 && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
			}
		}), n(t).on("hashchange.fb", function() {
			var t = o(),
				e = null;
			n.each(n(".fancybox-container").get().reverse(), function(t, o) {
				var i = n(o).data("FancyBox");
				if (i && i.currentHash) return e = i, !1
			}), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
		}), setTimeout(function() {
			n.fancybox.getInstance() || i(o())
		}, 50))
	})
}(window, document, jQuery),
function(t, e) {
	"use strict";
	var n = (new Date).getTime();
	e(t).on({
		"onInit.fb": function(t, e, o) {
			e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
				var o = e.current,
					i = (new Date).getTime();
				e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
			})
		}
	})
}(document, jQuery);
"use strict";
! function(e) {
	e.fn.circliful = function(t, r) {
		var o = e.extend({
			foregroundColor: "#3498DB",
			backgroundColor: "#ccc",
			pointColor: "none",
			fillColor: "none",
			foregroundBorderWidth: 15,
			backgroundBorderWidth: 15,
			pointSize: 28.5,
			fontColor: "#aaa",
			percent: 75,
			animation: 1,
			animationStep: 5,
			icon: "none",
			iconSize: "30",
			iconColor: "#ccc",
			iconPosition: "top",
			iconDecoration: !0,
			target: 0,
			start: 0,
			showPercent: 1,
			percentageTextSize: 22,
			percentageX: 100,
			percentageY: 113,
			textAdditionalCss: "",
			targetPercent: 0,
			targetTextSize: 17,
			targetColor: "#2980B9",
			text: null,
			textStyle: null,
			textColor: "#666",
			textY: null,
			textX: null,
			multiPercentage: 0,
			percentages: [],
			multiPercentageLegend: 0,
			textBelow: !1,
			noPercentageSign: !1,
			replacePercentageByText: null,
			halfCircle: !1,
			animateInView: !1,
			decimals: 0,
			alwaysDecimals: !1,
			title: "Circle Chart",
			description: "",
			progressColor: null
		}, t);
		return this.each(function() {
			function t() {
				var e = m,
					t = z;
				if (1 === o.multiPercentage) {
					var r, l = o.percentages,
						a = 360;
					for (r = 0; r < l.length; ++r) t = a / 100 * (g = l[r].percent), e = i.find("#circle" + (r + 1)), r > 0 && (t = (a += 62.5) / 100 * g), n(e, t, a, g)
				} else n(e, t, 360, g)
			}

			function n(t, n, l, a) {
				var c = window.setInterval(function() {
					P >= n ? (window.clearInterval(c), v = 1, "function" == typeof r && r.call(this)) : (P += b, B += T), o.halfCircle ? 2 * P / (l / 100) >= a && 1 === v && (P = l / 100 * a / 2) : P / (l / 100) >= a && 1 === v && (P = l / 100 * a), B > o.target && 1 === v && (B = o.target), null === o.replacePercentageByText && (S = o.halfCircle ? parseFloat(100 * P / l * 2) : parseFloat(100 * P / l), S = S.toFixed(o.decimals), !o.alwaysDecimals && (0 === a || a > 1 && 1 !== v) && (S = parseInt(S))), t.attr("stroke-dasharray", P + ", 20000"), 1 !== o.multiPercentage ? 1 === o.showPercent ? w.find(".number").text(S) : (w.find(".number").text(B), w.find(".percent").text("")) : (w.find(".number").text(""), w.find(".percent").text("")), null !== C && e.each(C, function(e, r) {
						o.halfCircle && (e /= 2), P >= e * (l / 100) && t.css({
							stroke: r,
							transition: "stroke 0.1s linear"
						})
					})
				}.bind(t), k)
			}

			function l() {
				var t = -1 !== navigator.userAgent.toLowerCase().indexOf("webkit") ? "body" : "html",
					r = e(t).scrollTop(),
					o = r + e(window).height(),
					n = Math.round(m.offset().top),
					l = n + m.height();
				return n < o && l > r
			}

			function a() {
				m.hasClass("start") || l(m) && (m.addClass("start"), setTimeout(t, 250))
			}

			function c() {
				var t, r = i.height(),
					n = i.width(),
					l = o.percentages,
					a = "";
				for (t = 0; t < l.length; ++t) {
					var c = l[t].title;
					a += '<div><span class="color-box" style="background: ' + l[t].color + '"></span>' + c + ", " + l[t].percent + "%</div>"
				}
				i.append(e("<div/>").append(a).attr("style", "position:absolute;top:" + r / 3 + "px;left:" + (n + 20) + "px").attr("class", "legend-line"))
			}
			var i = e(this);
			! function(t, r) {
				e.each(t, function(e, o) {
					e.toLowerCase() in r && (t[e] = r[e.toLowerCase()])
				})
			}(o, i.data());
			var s, x, d, g = o.percent,
				f = 83,
				p = 100,
				u = o.percentageY,
				h = o.percentageX,
				y = o.backgroundBorderWidth,
				C = o.progressColor;
			if (o.halfCircle ? "left" === o.iconPosition ? (p = 80, f = 100, h = 117, u = 100) : o.halfCircle && (f = 80, u = 100) : "bottom" === o.iconPosition ? (f = 124, u = 95) : "left" === o.iconPosition ? (p = 80, f = 110, h = 117) : "middle" === o.iconPosition ? (1 !== o.multiPercentage && (o.iconDecoration && (x = '<g stroke="' + ("none" !== o.backgroundColor ? o.backgroundColor : "#ccc") + '" ><line x1="133" y1="50" x2="140" y2="40" stroke-width="2"  /></g>', x += '<g stroke="' + ("none" !== o.backgroundColor ? o.backgroundColor : "#ccc") + '" ><line x1="140" y1="40" x2="200" y2="40" stroke-width="2"  /></g>'), h = 170, u = 35), f = 110) : "right" === o.iconPosition ? (p = 120, f = 110, h = 80) : "top" === o.iconPosition && "none" !== o.icon && (u = 120), o.targetPercent > 0 && !0 !== o.halfCircle && (u = 95, x = '<g stroke="' + ("none" !== o.backgroundColor ? o.backgroundColor : "#ccc") + '" ><line x1="75" y1="101" x2="125" y2="101" stroke-width="1"  /></g>', x += '<text text-anchor="middle" x="' + h + '" y="120" style="font-size: ' + o.targetTextSize + 'px;" fill="' + o.targetColor + '">' + o.targetPercent + (o.noPercentageSign && null === o.replacePercentageByText ? "" : "%") + "</text>", x += '<circle cx="100" cy="100" r="69" fill="none" stroke="' + o.backgroundColor + '" stroke-width="3" stroke-dasharray="450" transform="rotate(-90,100,100)" />', x += '<circle cx="100" cy="100" r="69" fill="none" stroke="' + o.targetColor + '" stroke-width="3" stroke-dasharray="' + 4.35 * o.targetPercent + ', 20000" transform="rotate(-90,100,100)" />'), null !== o.text && (o.halfCircle ? o.textBelow ? x += '<text text-anchor="middle" x="' + (null !== o.textX ? o.textX : "100") + '" y="' + (null !== o.textY ? o.textY : "64%") + '" style="' + o.textStyle + '" fill="' + o.textColor + '">' + o.text + "</text>" : x += '<text text-anchor="middle" x="' + (null !== o.textX ? o.textX : "100") + '" y="' + (null !== o.textY ? o.textY : "115") + '" style="' + o.textStyle + '" fill="' + o.textColor + '">' + o.text + "</text>" : o.textBelow ? x += '<text text-anchor="middle" x="' + (null !== o.textX ? o.textX : "100") + '" y="' + (null !== o.textY ? o.textY : "99%") + '" style="' + o.textStyle + '" fill="' + o.textColor + '">' + o.text + "</text>" : x += '<text text-anchor="middle" x="' + (null !== o.textX ? o.textX : "100") + '" y="' + (null !== o.textY ? o.textY : "115") + '" style="' + o.textStyle + '" fill="' + o.textColor + '">' + o.text + "</text>"), "none" !== o.icon && (d = '<text text-anchor="middle" x="' + p + '" y="' + f + '" class="icon" style="font-size: ' + o.iconSize + 'px" fill="' + o.iconColor + '">&#x' + o.icon + "</text>"), o.halfCircle) {
				i.addClass("svg-container").append(e('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">' + (void 0 !== x ? x : "") + '<clipPath id="cut-off-bottom"> <rect x="100" y="0" width="100" height="200" /> </clipPath><circle cx="100" cy="100" r="57" class="border" fill="' + o.fillColor + '" stroke="' + o.backgroundColor + '" stroke-width="' + y + '" stroke-dasharray="360" clip-path="url(#cut-off-bottom)" transform="rotate(-90,100,100)" /><circle class="circle" cx="100" cy="100" r="57" class="border" fill="none" stroke="' + o.foregroundColor + '" stroke-width="' + o.foregroundBorderWidth + '" stroke-dasharray="0,20000" transform="rotate(-180,100,100)" /><circle cx="100" cy="100" r="' + o.pointSize + '" fill="' + o.pointColor + '" clip-path="url(#cut-off-bottom)" transform="rotate(-90,100,100)" />' + d + '<text class="timer" text-anchor="middle" x="' + h + '" y="' + u + '" style="font-size: ' + o.percentageTextSize + "px; " + s + ";" + o.textAdditionalCss + '" fill="' + o.fontColor + '"><tspan class="number">' + (null === o.replacePercentageByText ? 0 : o.replacePercentageByText) + '</tspan><tspan class="percent">' + (o.noPercentageSign || null !== o.replacePercentageByText ? "" : "%") + "</tspan></text>"))
			} else ! function() {
				if (1 === o.multiPercentage) {
					var t, r, n, l, a, g = o.percentages,
						f = 47,
						p = 360;
					for (t = 0; t < g.length; ++t) n = g[t].percent, l = g[t].color, r = p / 100 * n, t > 0 && (r = (p += 62.5) / 100 * n), a += '<circle cx="100" cy="100" r="' + (f += 10) + '" class="border" fill="' + o.fillColor + '" stroke="' + o.backgroundColor + '" stroke-width="' + y + '" stroke-dasharray="' + p + '" transform="rotate(' + -90 + ',100,100)" /><circle class="circle" id="circle' + (t + 1) + '" data-percent="' + n + '" cx="100" cy="100" r="' + f + '" class="border" fill="none" stroke="' + l + '" stroke-width="' + o.foregroundBorderWidth + '" stroke-dasharray="' + r + ',20000" transform="rotate(' + -90 + ',100,100)" />';
					i.addClass("svg-container").append(e('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">' + (void 0 !== x ? x : "") + a + d + '<text class="timer" text-anchor="middle" x="' + h + '" y="' + u + '" style="font-size: ' + o.percentageTextSize + "px; " + s + ";" + o.textAdditionalCss + '" fill="' + o.fontColor + '"><tspan class="number">' + (null === o.replacePercentageByText ? 0 : o.replacePercentageByText) + '</tspan><tspan class="percent">' + (o.noPercentageSign || null !== o.replacePercentageByText ? "" : "%") + "</tspan></text>")), 1 === o.multiPercentageLegend && c()
				} else i.addClass("svg-container").append(e('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">' + (void 0 !== x ? x : "") + '<circle cx="100" cy="100" r="57" class="border" fill="' + o.fillColor + '" stroke="' + o.backgroundColor + '" stroke-width="' + y + '" stroke-dasharray="360" transform="rotate(-90,100,100)" /><circle class="circle" cx="100" cy="100" r="57" class="border" fill="none" stroke="' + o.foregroundColor + '" stroke-width="' + o.foregroundBorderWidth + '" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" /><circle cx="100" cy="100" r="' + o.pointSize + '" fill="' + o.pointColor + '" />' + d + '<text class="timer" text-anchor="middle" x="' + h + '" y="' + u + '" style="font-size: ' + o.percentageTextSize + "px; " + s + ";" + o.textAdditionalCss + '" fill="' + o.fontColor + '"><tspan class="number">' + (null === o.replacePercentageByText ? 0 : o.replacePercentageByText) + '</tspan><tspan class="percent">' + (o.noPercentageSign || null !== o.replacePercentageByText ? "" : "%") + "</tspan></text>"))
			}();
			var m = i.find(".circle"),
				w = i.find(".timer"),
				k = 30,
				P = 0,
				b = o.animationStep,
				v = 0,
				B = 0,
				T = 0,
				S = g,
				z = 3.6 * g;
			o.halfCircle && (z = 3.6 * g / 2), null !== o.replacePercentageByText && (S = o.replacePercentageByText), o.start > 0 && o.target > 0 && (g = o.start / (o.target / 100), T = o.target / 100), 1 === o.animation ? o.animateInView ? e(window).scroll(function() {
				a()
			}) : t() : 1 !== o.multiPercentage ? (m.attr("stroke-dasharray", z + ", 20000"), 1 === o.showPercent ? w.find(".number").text(S) : (w.find(".number").text(o.target), w.find(".percent").text(""))) : null !== o.replacePercentageByText && (w.find(".number").text(o.replacePercentageByText), w.find(".percent").text(""))
		})
	}
}(jQuery);
(function($) {
	"use strict";
	var scrollAmount = 200;
	var stickyTop = $('.navbar-fixed-top').offset().top;
	if (stickyTop >= scrollAmount && !$('.navbar-fixed-top').hasClass('affix')) {
		$('.navbar-fixed-top').addClass('affix');
	}
	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= scrollAmount && !$('.navbar-fixed-top').hasClass('affix')) {
			$('.navbar-fixed-top').addClass('affix');
		} else if ($(window).scrollTop() < scrollAmount && $('.navbar-fixed-top').hasClass('affix')) {
			$('.navbar-fixed-top').removeClass('affix')
		}
	});
	$("document").ready(function() {
		$('.donative-donation-progress-bar-default .bar').each(function() {
			var percent = $(this).attr('title');
			$(this).animate({
				width: percent
			}, 1000);
		});
	});
	$('.mobile-menu').slicknav({
		prependTo: '.xt-header-inner',
		parentTag: 'liner',
		allowParentLinks: true,
		duplicate: true,
		label: '',
		closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>',
	});
	if ($.isFunction($.fn.circliful)) {
		$(".cause-progress-bar").circliful({
			textSize: 18,
		});
	}
	if ($.isFunction($.fn.counterUp)) {
		$('.counter').counterUp({
			delay: 1,
			time: 1000
		});
	}
	$(".nav > li:has(ul)").addClass("drop");
	$(".nav > li.drop > ul").addClass("dropdown");
	$(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
	$(".xt-blog-post-slider, .xt-campaigns-slider, .event-type-slider").each(function() {
		var t = $(this),
			auto = t.data("autoplay") ? !0 : !1,
			loop = t.data("loop") ? !0 : !1,
			rtl = t.data("direction"),
			items = t.data("items") ? parseInt(t.data("items")) : '',
			desktopsmall = t.data("desktopsmall") ? parseInt(t.data("desktopsmall")) : '',
			tablet = t.data("tablet") ? parseInt(t.data("tablet")) : '',
			mobile = t.data("mobile") ? parseInt(t.data("mobile")) : '',
			nav = t.data("navigation") ? !0 : !1,
			pag = t.data("pagination") ? !0 : !1,
			navTextLeft = t.data("direction") ? 'right' : 'left',
			navTextRight = t.data("direction") ? 'left' : 'right';
		$(this).owlCarousel({
			autoplay: auto,
			rtl: rtl,
			items: items,
			responsiveClass: true,
			loop: loop,
			autoHeight: true,
			responsive: {
				0: {
					items: mobile,
				},
				480: {
					items: mobile,
				},
				768: {
					items: tablet,
				},
				1170: {
					items: desktopsmall,
				},
				1200: {
					items: items,
				}
			},
			nav: nav,
			navText: ['<i class="fa fa-long-arrow-' + navTextLeft + '" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-' + navTextRight + '" aria-hidden="true"></i>'],
			dots: pag,
			margin: 30,
		});
	});
	$(".theme-main-slider").each(function() {
		var t = $(this),
			auto = t.data("autoplay") ? !0 : !1,
			loop = t.data("loop") ? !0 : !1,
			rtl = t.data("direction") ? !0 : !1,
			nav = t.data("navigation") ? !0 : !1,
			pag = t.data("pagination") ? !0 : !1;
		$(this).owlCarousel({
			autoHeight: true,
			items: 1,
			loop: loop,
			autoplay: auto,
			dots: pag,
			nav: nav,
			autoplayTimeout: 7000,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause: false,
			touchDrag: true,
			mouseDrag: true,
			rtl: rtl
		});
		$(this).on("translate.owl.carousel", function() {
			$(this).find(".owl-item .slide-text > *").removeClass("fadeInUp animated").css("opacity", "0");
			$(this).find(".owl-item .slide-img").removeClass("fadeInRight animated").css("opacity", "0");
		});
		$(this).on("translated.owl.carousel", function() {
			$(this).find(".owl-item.active .slide-text > *").addClass("fadeInUp animated").css("opacity", "1");
			$(this).find(".owl-item.active .slide-img").addClass("fadeInRight animated").css("opacity", "1");
		});
	});
	$('.slider_preloader_status').fadeOut();
	$('.slider_preloader').delay(350).fadeOut('slow');
	$('.header-slider').removeClass("header-slider-preloader");
	$(".content-slider").each(function() {
		var t = $(this),
			auto = t.data("autoplay") ? !0 : !1,
			loop = t.data("loop") ? !0 : !1,
			rtl = t.data("direction"),
			items = t.data("items") ? parseInt(t.data("items")) : 3,
			desktopsmall = t.data("desktopsmall") ? parseInt(t.data("desktopsmall")) : 3,
			tablet = t.data("tablet") ? parseInt(t.data("tablet")) : 2,
			mobile = t.data("mobile") ? parseInt(t.data("mobile")) : 1,
			nav = t.data("navigation") ? !0 : !1,
			pag = t.data("pagination") ? !0 : !1,
			navTextLeft = t.data("direction") ? 'right' : 'left',
			navTextRight = t.data("direction") ? 'left' : 'right';
		$(this).owlCarousel({
			autoplay: auto,
			rtl: rtl,
			items: items,
			responsiveClass: true,
			responsive: {
				0: {
					items: mobile,
				},
				480: {
					items: mobile,
				},
				768: {
					items: tablet,
				},
				1170: {
					items: desktopsmall,
				},
				1200: {
					items: items,
				}
			},
			loop: loop,
			nav: nav,
			navText: ['<i class="fa fa-long-arrow-' + navTextLeft + '" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-' + navTextRight + '" aria-hidden="true"></i>'],
			dots: pag,
			margin: 30,
		});
	});
	$('#preloader').fadeOut();
	var offset = 200;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(400);
		} else {
			$('.back-to-top').fadeOut(400);
		}
	});
	$('.back-to-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	$('.entry-content table, #wp-calendar').addClass('table table-bordered');
	var o = $('.toggle');
	$('.toggle').on('click', function(e) {
		e.preventDefault();
		var tmp = $(this);
		o.each(function() {
			if ($(this).hasClass('active') && !$(this).is(tmp)) {
				$(this).parent().find('.toggle_cont').slideToggle();
				$(this).removeClass('active');
			}
		});
		$(this).toggleClass('active');
		$(this).parent().find('.toggle_cont').slideToggle();
	});
	$(window).on('click touchstart', function(e) {
		var container = $(".toggle-wrap");
		if (!container.is(e.target) && container.has(e.target).length === 0 && container.find('.toggle').hasClass('active')) {
			container.find('.active').toggleClass('active').parent().find('.toggle_cont').slideToggle();
		}
	});
	$(function() {
		$(".navbar-nav").XTaccessibleDropDown();
	});
	$.fn.XTaccessibleDropDown = function() {
		var el = $(this);
		$("a", el).focus(function() {
			$(this).parents("li").addClass("menu-item-focus");
		}).blur(function() {
			$(this).parents("li").removeClass("menu-item-focus");
		});
	}
	var openSearch = $('.open-search'),
		SearchForm = $('.full-search'),
		closeSearch = $('.close-search');
	openSearch.on('click', function(event) {
		event.preventDefault();
		if (!SearchForm.hasClass('active')) {
			SearchForm.fadeIn(300, function() {
				SearchForm.addClass('active');
			});
		}
	});
	closeSearch.on('click', function(event) {
		event.preventDefault();
		SearchForm.fadeOut(300, function() {
			SearchForm.removeClass('active');
			$(this).find('input').val('');
		});
	});
	$(document).on('click', '.add-fav-button', function() {
		var button = $(this);
		var post_id = button.attr('data-post-id');
		var security = button.attr('data-nonce');
		var iscomment = button.attr('data-iscomment');
		var content = button.attr('data-content');
		var allbuttons;
		if (iscomment === '1') {
			allbuttons = $('.add-fav-comment-button-' + post_id);
		} else {
			allbuttons = $('.add-fav-button-' + post_id);
		}
		if (content == '') {
			content = '';
		}
		if (post_id !== '') {
			$.ajax({
				type: 'POST',
				url: simpleLikes.ajaxurl,
				data: {
					action: 'process_simple_like',
					post_id: post_id,
					nonce: security,
					is_comment: iscomment,
				},
				beforeSend: function() {
					button.addClass('add-fav-loading');
					button.append('<i class="add-fav-loader fa fa-circle-o-notch fa-spin fa-fw"></i>');
				},
				success: function(response) {
					var icon = response.icon;
					allbuttons.html(icon + content);
					if (content) {
						allbuttons.html(icon + content);
					} else {
						allbuttons.html(icon);
					}
					if (response.status === 'unliked') {
						var like_text = simpleLikes.like;
						allbuttons.prop('title', like_text);
						allbuttons.removeClass('liked');
					} else {
						var unlike_text = simpleLikes.unlike;
						allbuttons.prop('title', unlike_text);
						allbuttons.addClass('liked');
					}
					button.find('.add-fav-loader').remove();
					button.removeClass('add-fav-loading');
				}
			});
		}
		return false;
	});
}(jQuery));
! function(a, b) {
	"use strict";

	function c() {
		if (!e) {
			e = !0;
			var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
				h = !!navigator.userAgent.match(/Trident.*rv:11\./),
				i = b.querySelectorAll("iframe.wp-embedded-content");
			for (c = 0; c < i.length; c++) {
				if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
				if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
			}
		}
	}
	var d = !1,
		e = !1;
	if (b.querySelector)
		if (a.addEventListener) d = !0;
	if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
		if (a.wp.receiveEmbedMessage = function(c) {
				var d = c.data;
				if (d)
					if (d.secret || d.message || d.value)
						if (!/[^a-zA-Z0-9]/.test(d.secret)) {
							var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
								k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
							for (e = 0; e < k.length; e++) k[e].style.display = "none";
							for (e = 0; e < j.length; e++)
								if (f = j[e], c.source === f.contentWindow) {
									if (f.removeAttribute("style"), "height" === d.message) {
										if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
										else if (~~g < 200) g = 200;
										f.height = g
									}
									if ("link" === d.message)
										if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
											if (b.activeElement === f) a.top.location.href = d.value
								} else;
						}
			}, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
	"use strict";

	function i(i, r, a) {
		function h(t, e, n) {
			var o, r = "$()." + i + '("' + e + '")';
			return t.each(function(t, h) {
				var u = a.data(h, i);
				if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
				var d = u[e];
				if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
				var l = d.apply(u, n);
				o = void 0 === o ? l : o
			}), void 0 !== o ? o : t
		}

		function u(t, e) {
			t.each(function(t, n) {
				var o = a.data(n, i);
				o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
			})
		}
		a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function(t) {
			if ("string" == typeof t) {
				var e = o.call(arguments, 1);
				return h(this, t, e)
			}
			return u(this, t), this
		}, n(a))
	}

	function n(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var o = Array.prototype.slice,
		r = t.console,
		s = "undefined" == typeof r ? function() {} : function(t) {
			r.error(t)
		};
	return n(e || t.jQuery), i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				n = i[t] = i[t] || [];
			return -1 == n.indexOf(e) && n.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				n = i[t] = i[t] || {};
			return n[e] = !0, this
		}
	}, e.off = function(t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = i.indexOf(e);
			return -1 != n && i.splice(n, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
				var r = i[o],
					s = n && n[r];
				s && (this.off(t, r), delete n[r]), r.apply(this, e)
			}
			return this
		}
	}, e.allOff = function() {
		delete this._events, delete this._onceEvents
	}, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = -1 == t.indexOf("%") && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; u > e; e++) {
			var i = h[e];
			t[i] = 0
		}
		return t
	}

	function n(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
	}

	function o() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var o = n(e);
			s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
		}
	}

	function r(e) {
		if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var r = n(e);
			if ("none" == r.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
				var c = h[l],
					f = r[c],
					m = parseFloat(f);
				a[c] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				g = a.paddingTop + a.paddingBottom,
				y = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				z = a.borderTopWidth + a.borderBottomWidth,
				E = d && s,
				b = t(r.width);
			b !== !1 && (a.width = b + (E ? 0 : p + _));
			var x = t(r.height);
			return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
		}
	}
	var s, a = "undefined" == typeof console ? e : function(t) {
			console.error(t)
		},
		h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		u = h.length,
		d = !1;
	return r
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
	"use strict";
	var t = function() {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var n = e[i],
				o = n + "MatchesSelector";
			if (t[o]) return o
		}
	}();
	return function(e, i) {
		return e[t](i)
	}
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
	var i = {};
	i.extend = function(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function(t, e) {
		return (t % e + e) % e
	};
	var n = Array.prototype.slice;
	i.makeArray = function(t) {
		if (Array.isArray(t)) return t;
		if (null === t || void 0 === t) return [];
		var e = "object" == typeof t && "number" == typeof t.length;
		return e ? n.call(t) : [t]
	}, i.removeFrom = function(t, e) {
		var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
	}, i.getParent = function(t, i) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function(t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function(t, n) {
		t = i.makeArray(t);
		var o = [];
		return t.forEach(function(t) {
			if (t instanceof HTMLElement) {
				if (!n) return void o.push(t);
				e(t, n) && o.push(t);
				for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
			}
		}), o
	}, i.debounceMethod = function(t, e, i) {
		i = i || 100;
		var n = t.prototype[e],
			o = e + "Timeout";
		t.prototype[e] = function() {
			var t = this[o];
			clearTimeout(t);
			var e = arguments,
				r = this;
			this[o] = setTimeout(function() {
				n.apply(r, e), delete r[o]
			}, i)
		}
	}, i.docReady = function(t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var o = t.console;
	return i.htmlInit = function(e, n) {
		i.docReady(function() {
			var r = i.toDashed(n),
				s = "data-" + r,
				a = document.querySelectorAll("[" + s + "]"),
				h = document.querySelectorAll(".js-" + r),
				u = i.makeArray(a).concat(i.makeArray(h)),
				d = s + "-options",
				l = t.jQuery;
			u.forEach(function(t) {
				var i, r = t.getAttribute(s) || t.getAttribute(d);
				try {
					i = r && JSON.parse(r)
				} catch (a) {
					return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
				}
				var h = new e(t, i);
				l && l.data(t, n, h)
			})
		})
	}, i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function n(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function o(t) {
		return t.replace(/([A-Z])/g, function(t) {
			return "-" + t.toLowerCase()
		})
	}
	var r = document.documentElement.style,
		s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
		h = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		}[s],
		u = {
			transform: a,
			transition: s,
			transitionDuration: s + "Duration",
			transitionProperty: s + "Property",
			transitionDelay: s + "Delay"
		},
		d = n.prototype = Object.create(t.prototype);
	d.constructor = n, d._create = function() {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function() {
		this.size = e(this.element)
	}, d.css = function(t) {
		var e = this.element.style;
		for (var i in t) {
			var n = u[i] || i;
			e[n] = t[i]
		}
	}, d.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			n = t[e ? "left" : "right"],
			o = t[i ? "top" : "bottom"],
			r = parseFloat(n),
			s = parseFloat(o),
			a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
	}, d.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			o = i ? "paddingLeft" : "paddingRight",
			r = i ? "left" : "right",
			s = i ? "right" : "left",
			a = this.position.x + t[o];
		e[r] = this.getXValue(a), e[s] = "";
		var h = n ? "paddingTop" : "paddingBottom",
			u = n ? "top" : "bottom",
			d = n ? "bottom" : "top",
			l = this.position.y + t[h];
		e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function(t, e) {
		this.getPosition();
		var i = this.position.x,
			n = this.position.y,
			o = t == this.position.x && e == this.position.y;
		if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
		var r = t - i,
			s = e - n,
			a = {};
		a.transform = this.getTranslate(r, s), this.transition({
			to: a,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function(t, e) {
		var i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop");
		return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function(t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
		this.position.x = parseFloat(t), this.position.y = parseFloat(e)
	}, d._nonTransition = function(t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function(t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var n = this.element.offsetHeight;
			n = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + o(a);
	d.enableTransition = function() {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(h, this, !1)
		}
	}, d.onwebkitTransitionEnd = function(t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function(t) {
		this.ontransitionend(t)
	};
	var c = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function(t) {
		if (t.target === this.element) {
			var e = this._transn,
				n = c[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
				var o = e.onEnd[n];
				o.call(this), delete e.onEnd[n]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function(t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var f = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function() {
		this.css(f)
	}, d.stagger = function(t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function() {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function() {
		return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function() {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function() {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function(t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function() {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function() {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function() {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, n
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
		return e(t, i, n, o, r)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
	"use strict";

	function r(t, e) {
		var i = n.getQueryElement(t);
		if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
		var o = ++l;
		this.element.outlayerGUID = o, c[o] = this, this._create();
		var r = this._getOption("initLayout");
		r && this.layout()
	}

	function s(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			n = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var o = m[n] || 1;
		return i * o
	}
	var h = t.console,
		u = t.jQuery,
		d = function() {},
		l = 0,
		c = {};
	r.namespace = "outlayer", r.Item = o, r.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var f = r.prototype;
	n.extend(f, e.prototype), f.option = function(t) {
		n.extend(this.options, t)
	}, f._getOption = function(t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, r.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, f._create = function() {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, f.reloadItems = function() {
		this.items = this._itemize(this.element.children)
	}, f._itemize = function(t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
			var r = e[o],
				s = new i(r, this);
			n.push(s)
		}
		return n
	}, f._filterFindItemElements = function(t) {
		return n.filterFindElements(t, this.options.itemSelector)
	}, f.getItemElements = function() {
		return this.items.map(function(t) {
			return t.element
		})
	}, f.layout = function() {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, f._init = f.layout, f._resetLayout = function() {
		this.getSize()
	}, f.getSize = function() {
		this.size = i(this.element)
	}, f._getMeasurement = function(t, e) {
		var n, o = this.options[t];
		o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
	}, f.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, f._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, f._layoutItems = function(t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function(t) {
				var n = this._getItemLayoutPosition(t);
				n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
			}, this), this._processLayoutQueue(i)
		}
	}, f._getItemLayoutPosition = function() {
		return {
			x: 0,
			y: 0
		}
	}, f._processLayoutQueue = function(t) {
		this.updateStagger(), t.forEach(function(t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, f.updateStagger = function() {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, f._positionItem = function(t, e, i, n, o) {
		n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
	}, f._postLayout = function() {
		this.resizeContainer()
	}, f.resizeContainer = function() {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, f._emitCompleteOnItems = function(t, e) {
		function i() {
			o.dispatchEvent(t + "Complete", null, [e])
		}

		function n() {
			s++, s == r && i()
		}
		var o = this,
			r = e.length;
		if (!e || !r) return void i();
		var s = 0;
		e.forEach(function(e) {
			e.once(t, n)
		})
	}, f.dispatchEvent = function(t, e, i) {
		var n = e ? [e].concat(i) : i;
		if (this.emitEvent(t, n), u)
			if (this.$element = this.$element || u(this.element), e) {
				var o = u.Event(e);
				o.type = t, this.$element.trigger(o, i)
			} else this.$element.trigger(t, i)
	}, f.ignore = function(t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, f.unignore = function(t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, f.stamp = function(t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, f.unstamp = function(t) {
		t = this._find(t), t && t.forEach(function(t) {
			n.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, f._find = function(t) {
		return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
	}, f._manageStamps = function() {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, f._getBoundingRect = function() {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, f._manageStamp = d, f._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			n = this._boundingRect,
			o = i(t),
			r = {
				left: e.left - n.left - o.marginLeft,
				top: e.top - n.top - o.marginTop,
				right: n.right - e.right - o.marginRight,
				bottom: n.bottom - e.bottom - o.marginBottom
			};
		return r
	}, f.handleEvent = n.handleEvent, f.bindResize = function() {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, f.unbindResize = function() {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, f.onresize = function() {
		this.resize()
	}, n.debounceMethod(r, "onresize", 100), f.resize = function() {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, f.needsResizeLayout = function() {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, f.addItems = function(t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, f.appended = function(t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, f.prepended = function(t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, f.reveal = function(t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function(t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, f.hide = function(t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function(t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, f.revealItemElements = function(t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, f.hideItemElements = function(t) {
		var e = this.getItems(t);
		this.hide(e)
	}, f.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, f.getItems = function(t) {
		t = n.makeArray(t);
		var e = [];
		return t.forEach(function(t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, f.remove = function(t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
			t.remove(), n.removeFrom(this.items, t)
		}, this)
	}, f.destroy = function() {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
	}, r.data = function(t) {
		t = n.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && c[e]
	}, r.create = function(t, e) {
		var i = s(r);
		return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return r.Item = o, r
}),
function(t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
	var i = t.create("masonry");
	i.compatOptions.fitWidth = "isFitWidth";
	var n = i.prototype;
	return n._resetLayout = function() {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, n.measureColumns = function() {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var n = this.columnWidth += this.gutter,
			o = this.containerWidth + this.gutter,
			r = o / n,
			s = n - o % n,
			a = s && 1 > s ? "round" : "floor";
		r = Math[a](r), this.cols = Math.max(r, 1)
	}, n.getContainerWidth = function() {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			n = e(i);
		this.containerWidth = n && n.innerWidth
	}, n._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && 1 > e ? "round" : "ceil",
			n = Math[i](t.size.outerWidth / this.columnWidth);
		n = Math.min(n, this.cols);
		for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
				x: this.columnWidth * r.col,
				y: r.y
			}, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
		return s
	}, n._getTopColPosition = function(t) {
		var e = this._getTopColGroup(t),
			i = Math.min.apply(Math, e);
		return {
			col: e.indexOf(i),
			y: i
		}
	}, n._getTopColGroup = function(t) {
		if (2 > t) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
		return e
	}, n._getColGroupY = function(t, e) {
		if (2 > e) return this.colYs[t];
		var i = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, i)
	}, n._getHorizontalColPosition = function(t, e) {
		var i = this.horizontalColIndex % this.cols,
			n = t > 1 && i + t > this.cols;
		i = n ? 0 : i;
		var o = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
			col: i,
			y: this._getColGroupY(i, t)
		}
	}, n._manageStamp = function(t) {
		var i = e(t),
			n = this._getElementOffset(t),
			o = this._getOption("originLeft"),
			r = o ? n.left : n.right,
			s = r + i.outerWidth,
			a = Math.floor(r / this.columnWidth);
		a = Math.max(0, a);
		var h = Math.floor(s / this.columnWidth);
		h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
		for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, n._getContainerSize = function() {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, n._getContainerFitWidth = function() {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, n.needsResizeLayout = function() {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
});
(function($) {
	"use strict";
	if ($.isFunction($.fn.masonry)) {
		$(window).on('load', function() {
			$('.donative-gallery-items-masonry-yes .row').masonry({
				itemSelector: '.donative-gallery-item',
			});
		});
	}
}(jQuery));
! function() {
	var s = void 0;
	! function o(u, s, a) {
		function c(e, t) {
			if (!s[e]) {
				if (!u[e]) {
					var n = !1;
					if (!t && n) return n(e, !0);
					if (f) return f(e, !0);
					var r = new Error("Cannot find module '" + e + "'");
					throw r.code = "MODULE_NOT_FOUND", r
				}
				var i = s[e] = {
					exports: {}
				};
				u[e][0].call(i.exports, function(t) {
					return c(u[e][1][t] || t)
				}, i, i.exports, o, u, s, a)
			}
			return s[e].exports
		}
		for (var f = !1, t = 0; t < a.length; t++) c(a[t]);
		return c
	}({
		1: [function(t, e, n) {
			"use strict";
			var r, i = (r = t("./forms/conditional-elements.js")) && r.__esModule ? r : {
				default: r
			};
			var o, u, s, a, c, f, l = window.mc4wp || {},
				h = t("gator"),
				d = t("./forms/forms.js"),
				p = window.mc4wp_forms_config || {},
				m = t("scroll-to-element");

			function v(t) {
				var e = "animated" === p.auto_scroll;
				m(t.element, {
					duration: e ? 800 : 1,
					alignment: "middle"
				})
			}
			if (h(document.body).on("submit", ".mc4wp-form", function(t) {
					var e = d.getByElement(t.target || t.srcElement);
					t.defaultPrevented || d.trigger(e.id + ".submit", [e, t]), t.defaultPrevented || d.trigger("submit", [e, t])
				}), h(document.body).on("focus", ".mc4wp-form", function(t) {
					var e = d.getByElement(t.target || t.srcElement);
					e.started || (d.trigger(e.id + ".started", [e, t]), d.trigger("started", [e, t]), e.started = !0)
				}), h(document.body).on("change", ".mc4wp-form", function(t) {
					var e = d.getByElement(t.target || t.srcElement);
					d.trigger("change", [e, t]), d.trigger(e.id + ".change", [e, t])
				}), i.default.init(), l.listeners) {
				for (var g = l.listeners, y = 0; y < g.length; y++) d.on(g[y].event, g[y].callback);
				delete l.listeners
			}
			if (l.forms = d, p.submitted_form) {
				var w = p.submitted_form,
					b = document.getElementById(w.element_id),
					_ = d.getByElement(b);
				o = _, u = w.event, s = w.errors, a = w.data, c = Date.now(), f = document.body.clientHeight, s && o.setData(a), window.scrollY <= 10 && p.auto_scroll && v(o), window.addEventListener("load", function() {
					d.trigger(o.id + ".submitted", [o]), d.trigger("submitted", [o]), s ? (d.trigger(o.id + ".error", [o, s]), d.trigger("error", [o, s])) : (d.trigger(o.id + ".success", [o, a]), d.trigger("success", [o, a]), d.trigger(o.id + "." + u, [o, a]), d.trigger(u, [o, a]), "updated_subscriber" === u && (d.trigger(o.id + ".subscribed", [o, a, !0]), d.trigger("subscribed", [o, a, !0])));
					var t = Date.now() - c;
					p.auto_scroll && 1e3 < t && t < 2e3 && document.body.clientHeight !== f && v(o)
				})
			}
			window.mc4wp = l
		}, {
			"./forms/conditional-elements.js": 2,
			"./forms/forms.js": 4,
			gator: 6,
			"scroll-to-element": 13
		}],
		2: [function(t, e, n) {
			"use strict";

			function r(t) {
				for (var e = !!t.getAttribute("data-show-if"), n = e ? t.getAttribute("data-show-if").split(":") : t.getAttribute("data-hide-if").split(":"), r = n[0], i = (1 < n.length ? n[1] : "*").split("|"), o = function(t, e) {
						for (var n = [], r = t.querySelectorAll('input[name="' + e + '"], select[name="' + e + '"], textarea[name="' + e + '"]'), i = 0; i < r.length; i++) {
							var o = r[i],
								u = o.getAttribute("type");
							("radio" !== u && "checkbox" !== u || o.checked) && n.push(o.value)
						}
						return n
					}(function(t) {
						for (var e = t; e.parentElement;)
							if ("FORM" === (e = e.parentElement).tagName) return e;
						return null
					}(t), r), u = !1, s = 0; s < o.length; s++) {
					var a = o[s];
					if (u = -1 < i.indexOf(a) || -1 < i.indexOf("*") && 0 < a.length) break
				}
				t.style.display = e ? u ? "" : "none" : u ? "none" : "";
				var c = t.querySelectorAll("input, select, textarea");
				[].forEach.call(c, function(t) {
					(u || e) && t.getAttribute("data-was-required") && (t.required = !0, t.removeAttribute("data-was-required")), u && e || !t.required || (t.setAttribute("data-was-required", "true"), t.required = !1)
				})
			}

			function i() {
				var t = document.querySelectorAll(".mc4wp-form [data-show-if], .mc4wp-form [data-hide-if]");
				[].forEach.call(t, r)
			}

			function o(t) {
				if (t.target && t.target.form && !(t.target.form.className.indexOf("mc4wp-form") < 0)) {
					var e = t.target.form.querySelectorAll("[data-show-if], [data-hide-if]");
					[].forEach.call(e, r)
				}
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.default = void 0;
			var u = {
				init: function() {
					document.addEventListener("keyup", o, !0), document.addEventListener("change", o, !0), document.addEventListener("mc4wp-refresh", i, !0), window.addEventListener("load", i), i()
				}
			};
			n.default = u
		}, {}],
		3: [function(t, e, n) {
			"use strict";
			var r = t("form-serialize"),
				i = t("populate.js"),
				o = function(t, e) {
					this.id = t, this.element = e || document.createElement("form"), this.name = this.element.getAttribute("data-name") || "Form #" + this.id, this.errors = [], this.started = !1
				};
			o.prototype.setData = function(t) {
				try {
					i(this.element, t)
				} catch (t) {
					console.error(t)
				}
			}, o.prototype.getData = function() {
				return r(this.element, {
					hash: !0,
					empty: !0
				})
			}, o.prototype.getSerializedData = function() {
				return r(this.element, {
					hash: !1,
					empty: !0
				})
			}, o.prototype.setResponse = function(t) {
				this.element.querySelector(".mc4wp-response").innerHTML = t
			}, o.prototype.reset = function() {
				this.setResponse(""), this.element.querySelector(".mc4wp-form-fields").style.display = "", this.element.reset()
			}, e.exports = o
		}, {
			"form-serialize": 5,
			"populate.js": 7
		}],
		4: [function(t, e, n) {
			"use strict";
			var r = t("wolfy87-eventemitter"),
				i = t("./form.js"),
				o = new r,
				u = [];

			function s(t, e) {
				e = e || parseInt(t.getAttribute("data-id")) || 0;
				var n = new i(e, t);
				return u.push(n), n
			}
			e.exports = {
				all: function() {
					return u
				},
				get: function(t) {
					t = parseInt(t);
					for (var e = 0; e < u.length; e++)
						if (u[e].id === t) return u[e];
					return s(document.querySelector(".mc4wp-form-" + t), t)
				},
				getByElement: function(t) {
					for (var e = t.form || t, n = 0; n < u.length; n++)
						if (u[n].element === e) return u[n];
					return s(e)
				},
				on: o.on.bind(o),
				trigger: function(t, e) {
					"submit" === t || 0 < t.indexOf(".submit") ? o.trigger(t, e) : window.setTimeout(function() {
						o.trigger(t, e)
					}, 1)
				},
				off: o.off.bind(o)
			}
		}, {
			"./form.js": 3,
			"wolfy87-eventemitter": 16
		}],
		5: [function(t, e, n) {
			var v = /^(?:submit|button|image|reset|file)$/i,
				g = /^(?:input|select|textarea|keygen)/i,
				i = /(\[[^\[\]]*\])/g;

			function y(t, e, n) {
				if (e.match(i)) {
					! function t(e, n, r) {
						if (0 === n.length) return e = r;
						var i = n.shift(),
							o = i.match(/^\[(.+?)\]$/);
						if ("[]" === i) return e = e || [], Array.isArray(e) ? e.push(t(null, n, r)) : (e._values = e._values || [], e._values.push(t(null, n, r))), e;
						if (o) {
							var u = o[1],
								s = +u;
							isNaN(s) ? (e = e || {})[u] = t(e[u], n, r) : (e = e || [])[s] = t(e[s], n, r)
						} else e[i] = t(e[i], n, r);
						return e
					}(t, function(t) {
						var e = [],
							n = new RegExp(i),
							r = /^([^\[\]]*)/.exec(t);
						for (r[1] && e.push(r[1]); null !== (r = n.exec(t));) e.push(r[1]);
						return e
					}(e), n)
				} else {
					var r = t[e];
					r ? (Array.isArray(r) || (t[e] = [r]), t[e].push(n)) : t[e] = n
				}
				return t
			}

			function w(t, e, n) {
				return n = n.replace(/(\r)?\n/g, "\r\n"), n = (n = encodeURIComponent(n)).replace(/%20/g, "+"), t + (t ? "&" : "") + encodeURIComponent(e) + "=" + n
			}
			e.exports = function(t, e) {
				"object" != typeof e ? e = {
					hash: !!e
				} : void 0 === e.hash && (e.hash = !0);
				for (var n = e.hash ? {} : "", r = e.serializer || (e.hash ? y : w), i = t && t.elements ? t.elements : [], o = Object.create(null), u = 0; u < i.length; ++u) {
					var s = i[u];
					if ((e.disabled || !s.disabled) && s.name && g.test(s.nodeName) && !v.test(s.type)) {
						var a = s.name,
							c = s.value;
						if ("checkbox" !== s.type && "radio" !== s.type || s.checked || (c = void 0), e.empty) {
							if ("checkbox" !== s.type || s.checked || (c = ""), "radio" === s.type && (o[s.name] || s.checked ? s.checked && (o[s.name] = !0) : o[s.name] = !1), null == c && "radio" == s.type) continue
						} else if (!c) continue;
						if ("select-multiple" !== s.type) n = r(n, a, c);
						else {
							c = [];
							for (var f = s.options, l = !1, h = 0; h < f.length; ++h) {
								var d = f[h],
									p = e.empty && !d.value,
									m = d.value || p;
								d.selected && m && (l = !0, n = e.hash && "[]" !== a.slice(a.length - 2) ? r(n, a + "[]", d.value) : r(n, a, d.value))
							}!l && e.empty && (n = r(n, a, ""))
						}
					}
				}
				if (e.empty)
					for (var a in o) o[a] || (n = r(n, a, ""));
				return n
			}
		}, {}],
		6: [function(t, e, n) {
			! function() {
				var i, l = 0,
					r = 0,
					h = {},
					d = {};

				function p(t, e, n) {
					return "_root" == e ? n : t !== n ? (r = t, i || (i = r.matches ? r.matches : r.webkitMatchesSelector ? r.webkitMatchesSelector : r.mozMatchesSelector ? r.mozMatchesSelector : r.msMatchesSelector ? r.msMatchesSelector : r.oMatchesSelector ? r.oMatchesSelector : v.matchesSelector)).call(t, e) ? t : t.parentNode ? (l++, p(t.parentNode, e, n)) : void 0 : void 0;
					var r
				}

				function m(t, e, n, r) {
					if (h[t.id])
						if (e)
							if (r || n)
								if (r) {
									if (h[t.id][e][n])
										for (var i = 0; i < h[t.id][e][n].length; i++)
											if (h[t.id][e][n][i] === r) {
												h[t.id][e][n].splice(i, 1);
												break
											}
								} else delete h[t.id][e][n];
					else h[t.id][e] = {};
					else
						for (var o in h[t.id]) h[t.id].hasOwnProperty(o) && (h[t.id][o] = {})
				}

				function o(t, e, n, r) {
					if (this.element) {
						t instanceof Array || (t = [t]), n || "function" != typeof e || (n = e, e = "_root");
						var i, o, u, s, a, c = this.id;
						for (i = 0; i < t.length; i++) r ? m(this, t[i], e, n) : (h[c] && h[c][t[i]] || v.addEvent(this, t[i], f(t[i])), o = this, u = t[i], s = e, a = n, h[o.id] || (h[o.id] = {}), h[o.id][u] || (h[o.id][u] = {}), h[o.id][u][s] || (h[o.id][u][s] = []), h[o.id][u][s].push(a));
						return this
					}

					function f(e) {
						return function(t) {
							! function(t, e, n) {
								if (h[t][n]) {
									var r, i, o = e.target || e.srcElement,
										u = {},
										s = 0,
										a = 0;
									for (r in l = 0, h[t][n]) h[t][n].hasOwnProperty(r) && (i = p(o, r, d[t].element)) && v.matchesEvent(n, d[t].element, i, "_root" == r, e) && (l++, h[t][n][r].match = i, u[l] = h[t][n][r]);
									for (e.stopPropagation = function() {
											e.cancelBubble = !0
										}, s = 0; s <= l; s++)
										if (u[s])
											for (a = 0; a < u[s].length; a++) {
												if (!1 === u[s][a].call(u[s].match, e)) return v.cancel(e);
												if (e.cancelBubble) return
											}
								}
							}(c, t, e)
						}
					}
				}

				function v(t, e) {
					if (!(this instanceof v)) {
						for (var n in d)
							if (d[n].element === t) return d[n];
						return d[++r] = new v(t, r), d[r]
					}
					this.element = t, this.id = e
				}
				v.prototype.on = function(t, e, n) {
					return o.call(this, t, e, n)
				}, v.prototype.off = function(t, e, n) {
					return o.call(this, t, e, n, !0)
				}, v.matchesSelector = function() {}, v.cancel = function(t) {
					t.preventDefault(), t.stopPropagation()
				}, v.addEvent = function(t, e, n) {
					var r = "blur" == e || "focus" == e;
					t.element.addEventListener(e, n, r)
				}, v.matchesEvent = function() {
					return !0
				}, void 0 !== e && e.exports && (e.exports = v), window.Gator = v
			}()
		}, {}],
		7: [function(t, e, n) {
			var r, f;
			r = this, f = function(t, e, n) {
				for (var r in e)
					if (e.hasOwnProperty(r)) {
						var i = r,
							o = e[r];
						if (void 0 === o && (o = ""), null === o && (o = ""), void 0 !== n && (i = n + "[" + r + "]"), o.constructor === Array) i += "[]";
						else if ("object" == typeof o) {
							f(t, o, i);
							continue
						}
						var u = t.elements.namedItem(i);
						if (u) switch (u.type || u[0].type) {
							default: u.value = o;
							break;
							case "radio":
									case "checkbox":
									for (var s = 0; s < u.length; s++) u[s].checked = -1 < o.indexOf(u[s].value);
								break;
							case "select-multiple":
									for (var a = o.constructor == Array ? o : [o], c = 0; c < u.options.length; c++) u.options[c].selected |= -1 < a.indexOf(u.options[c].value);
								break;
							case "select":
									case "select-one":
									u.value = o.toString() || o;
								break;
							case "date":
									u.value = new Date(o).toISOString().split("T")[0]
						}
					}
			}, "function" == typeof s && "object" == typeof s.amd && s.amd ? s(function() {
				return f
			}) : void 0 !== e && e.exports ? e.exports = f : r.populate = f
		}, {}],
		8: [function(t, e, n) {
			var r, i, o = e.exports = {};

			function u() {
				throw new Error("setTimeout has not been defined")
			}

			function s() {
				throw new Error("clearTimeout has not been defined")
			}

			function a(e) {
				if (r === setTimeout) return setTimeout(e, 0);
				if ((r === u || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
				try {
					return r(e, 0)
				} catch (t) {
					try {
						return r.call(null, e, 0)
					} catch (t) {
						return r.call(this, e, 0)
					}
				}
			}! function() {
				try {
					r = "function" == typeof setTimeout ? setTimeout : u
				} catch (t) {
					r = u
				}
				try {
					i = "function" == typeof clearTimeout ? clearTimeout : s
				} catch (t) {
					i = s
				}
			}();
			var c, f = [],
				l = !1,
				h = -1;

			function d() {
				l && c && (l = !1, c.length ? f = c.concat(f) : h = -1, f.length && p())
			}

			function p() {
				if (!l) {
					var t = a(d);
					l = !0;
					for (var e = f.length; e;) {
						for (c = f, f = []; ++h < e;) c && c[h].run();
						h = -1, e = f.length
					}
					c = null, l = !1,
						function(e) {
							if (i === clearTimeout) return clearTimeout(e);
							if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
							try {
								i(e)
							} catch (t) {
								try {
									return i.call(null, e)
								} catch (t) {
									return i.call(this, e)
								}
							}
						}(t)
				}
			}

			function m(t, e) {
				this.fun = t, this.array = e
			}

			function v() {}
			o.nextTick = function(t) {
				var e = new Array(arguments.length - 1);
				if (1 < arguments.length)
					for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
				f.push(new m(t, e)), 1 !== f.length || l || a(p)
			}, m.prototype.run = function() {
				this.fun.apply(null, this.array)
			}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(t) {
				return []
			}, o.binding = function(t) {
				throw new Error("process.binding is not supported")
			}, o.cwd = function() {
				return "/"
			}, o.chdir = function(t) {
				throw new Error("process.chdir is not supported")
			}, o.umask = function() {
				return 0
			}
		}, {}],
		9: [function(l, h, t) {
			(function(t) {
				for (var r = l("performance-now"), e = "undefined" == typeof window ? t : window, n = ["moz", "webkit"], i = "AnimationFrame", o = e["request" + i], u = e["cancel" + i] || e["cancelRequest" + i], s = 0; !o && s < n.length; s++) o = e[n[s] + "Request" + i], u = e[n[s] + "Cancel" + i] || e[n[s] + "CancelRequest" + i];
				if (!o || !u) {
					var a = 0,
						c = 0,
						f = [];
					o = function(t) {
						if (0 === f.length) {
							var e = r(),
								n = Math.max(0, 1e3 / 60 - (e - a));
							a = n + e, setTimeout(function() {
								for (var t = f.slice(0), e = f.length = 0; e < t.length; e++)
									if (!t[e].cancelled) try {
										t[e].callback(a)
									} catch (t) {
										setTimeout(function() {
											throw t
										}, 0)
									}
							}, Math.round(n))
						}
						return f.push({
							handle: ++c,
							callback: t,
							cancelled: !1
						}), c
					}, u = function(t) {
						for (var e = 0; e < f.length; e++) f[e].handle === t && (f[e].cancelled = !0)
					}
				}
				h.exports = function(t) {
					return o.call(e, t)
				}, h.exports.cancel = function() {
					u.apply(e, arguments)
				}, h.exports.polyfill = function(t) {
					t || (t = e), t.requestAnimationFrame = o, t.cancelAnimationFrame = u
				}
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			"performance-now": 10
		}],
		10: [function(t, s, e) {
			(function(u) {
				(function() {
					var t, e, n, r, i, o;
					"undefined" != typeof performance && null !== performance && performance.now ? s.exports = function() {
						return performance.now()
					} : null != u && u.hrtime ? (s.exports = function() {
						return (t() - i) / 1e6
					}, e = u.hrtime, r = (t = function() {
						var t;
						return 1e9 * (t = e())[0] + t[1]
					})(), o = 1e9 * u.uptime(), i = r - o) : n = Date.now ? (s.exports = function() {
						return Date.now() - n
					}, Date.now()) : (s.exports = function() {
						return (new Date).getTime() - n
					}, (new Date).getTime())
				}).call(this)
			}).call(this, t("_process"))
		}, {
			_process: 8
		}],
		11: [function(t, e, n) {
			n.linear = function(t) {
				return t
			}, n.inQuad = function(t) {
				return t * t
			}, n.outQuad = function(t) {
				return t * (2 - t)
			}, n.inOutQuad = function(t) {
				return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
			}, n.inCube = function(t) {
				return t * t * t
			}, n.outCube = function(t) {
				return --t * t * t + 1
			}, n.inOutCube = function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
			}, n.inQuart = function(t) {
				return t * t * t * t
			}, n.outQuart = function(t) {
				return 1 - --t * t * t * t
			}, n.inOutQuart = function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
			}, n.inQuint = function(t) {
				return t * t * t * t * t
			}, n.outQuint = function(t) {
				return --t * t * t * t * t + 1
			}, n.inOutQuint = function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
			}, n.inSine = function(t) {
				return 1 - Math.cos(t * Math.PI / 2)
			}, n.outSine = function(t) {
				return Math.sin(t * Math.PI / 2)
			}, n.inOutSine = function(t) {
				return .5 * (1 - Math.cos(Math.PI * t))
			}, n.inExpo = function(t) {
				return 0 == t ? 0 : Math.pow(1024, t - 1)
			}, n.outExpo = function(t) {
				return 1 == t ? t : 1 - Math.pow(2, -10 * t)
			}, n.inOutExpo = function(t) {
				return 0 == t ? 0 : 1 == t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
			}, n.inCirc = function(t) {
				return 1 - Math.sqrt(1 - t * t)
			}, n.outCirc = function(t) {
				return Math.sqrt(1 - --t * t)
			}, n.inOutCirc = function(t) {
				return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
			}, n.inBack = function(t) {
				return t * t * (2.70158 * t - 1.70158)
			}, n.outBack = function(t) {
				return --t * t * (2.70158 * t + 1.70158) + 1
			}, n.inOutBack = function(t) {
				var e = 2.5949095;
				return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
			}, n.inBounce = function(t) {
				return 1 - n.outBounce(1 - t)
			}, n.outBounce = function(t) {
				return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
			}, n.inOutBounce = function(t) {
				return t < .5 ? .5 * n.inBounce(2 * t) : .5 * n.outBounce(2 * t - 1) + .5
			}, n.inElastic = function(t) {
				var e, n = .1;
				return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
			}, n.outElastic = function(t) {
				var e, n = .1;
				return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
			}, n.inOutElastic = function(t) {
				var e, n = .1;
				return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
			}, n["in-quad"] = n.inQuad, n["out-quad"] = n.outQuad, n["in-out-quad"] = n.inOutQuad, n["in-cube"] = n.inCube, n["out-cube"] = n.outCube, n["in-out-cube"] = n.inOutCube, n["in-quart"] = n.inQuart, n["out-quart"] = n.outQuart, n["in-out-quart"] = n.inOutQuart, n["in-quint"] = n.inQuint, n["out-quint"] = n.outQuint, n["in-out-quint"] = n.inOutQuint, n["in-sine"] = n.inSine, n["out-sine"] = n.outSine, n["in-out-sine"] = n.inOutSine, n["in-expo"] = n.inExpo, n["out-expo"] = n.outExpo, n["in-out-expo"] = n.inOutExpo, n["in-circ"] = n.inCirc, n["out-circ"] = n.outCirc, n["in-out-circ"] = n.inOutCirc, n["in-back"] = n.inBack, n["out-back"] = n.outBack, n["in-out-back"] = n.inOutBack, n["in-bounce"] = n.inBounce, n["out-bounce"] = n.outBounce, n["in-out-bounce"] = n.inOutBounce, n["in-elastic"] = n.inElastic, n["out-elastic"] = n.outElastic, n["in-out-elastic"] = n.inOutElastic
		}, {}],
		12: [function(t, e, n) {
			function r(t) {
				if (t) return function(t) {
					for (var e in r.prototype) t[e] = r.prototype[e];
					return t
				}(t)
			}
			r.prototype.on = r.prototype.addEventListener = function(t, e) {
				return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
			}, r.prototype.once = function(t, e) {
				function n() {
					this.off(t, n), e.apply(this, arguments)
				}
				return n.fn = e, this.on(t, n), this
			}, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
				if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
				var n, r = this._callbacks["$" + t];
				if (!r) return this;
				if (1 == arguments.length) return delete this._callbacks["$" + t], this;
				for (var i = 0; i < r.length; i++)
					if ((n = r[i]) === e || n.fn === e) {
						r.splice(i, 1);
						break
					}
				return 0 === r.length && delete this._callbacks["$" + t], this
			}, r.prototype.emit = function(t) {
				this._callbacks = this._callbacks || {};
				var e = [].slice.call(arguments, 1),
					n = this._callbacks["$" + t];
				if (n)
					for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, e);
				return this
			}, r.prototype.listeners = function(t) {
				return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
			}, r.prototype.hasListeners = function(t) {
				return !!this.listeners(t).length
			}, void 0 !== e && (e.exports = r)
		}, {}],
		13: [function(t, e, n) {
			var r = t("./scroll-to");
			e.exports = function(t, e) {
				if (e = e || {}, "string" == typeof t && (t = document.querySelector(t)), t) return r(0, function(t, e, n) {
					var r, i = document.body,
						o = document.documentElement,
						u = t.getBoundingClientRect(),
						s = o.clientHeight,
						a = Math.max(i.scrollHeight, i.offsetHeight, o.clientHeight, o.scrollHeight, o.offsetHeight);
					e = e || 0, r = "bottom" === n ? u.bottom - s : "middle" === n ? u.bottom - s / 2 - u.height / 2 : u.top;
					var c = a - s;
					return Math.min(r + e + window.pageYOffset, c)
				}(t, e.offset, e.align), e)
			}
		}, {
			"./scroll-to": 14
		}],
		14: [function(t, e, n) {
			var u = t("./tween"),
				s = t("raf");
			e.exports = function(t, e, n) {
				n = n || {};
				var r = {
						top: window.pageYOffset || document.documentElement.scrollTop,
						left: window.pageXOffset || document.documentElement.scrollLeft
					},
					i = u(r).ease(n.ease || "out-circ").to({
						top: e,
						left: t
					}).duration(n.duration || 1e3);

				function o() {
					s(o), i.update()
				}
				return i.update(function(t) {
					window.scrollTo(0 | t.left, 0 | t.top)
				}), i.on("end", function() {
					o = function() {}
				}), o(), i
			}
		}, {
			"./tween": 15,
			raf: 9
		}],
		15: [function(t, e, n) {
			var r = t("./ease");

			function i(t) {
				if (!(this instanceof i)) return new i(t);
				this._from = t, this.ease("linear"), this.duration(500)
			}
			t("./emitter")(i.prototype), i.prototype.reset = function() {
				return this.isArray = "[object Array]" === Object.prototype.toString.call(this._from), this._curr = Object.assign({}, this._from), this._done = !1, this._start = Date.now(), this
			}, i.prototype.to = function(t) {
				return this.reset(), this._to = t, this
			}, i.prototype.duration = function(t) {
				return this._duration = t, this
			}, i.prototype.ease = function(t) {
				if (!(t = "function" == typeof t ? t : r[t])) throw new TypeError("invalid easing function");
				return this._ease = t, this
			}, i.prototype.stop = function() {
				return this.stopped = !0, this._done = !0, this.emit("stop"), this.emit("end"), this
			}, i.prototype.step = function() {
				if (!this._done) {
					var t = this._duration,
						e = Date.now();
					if (t <= e - this._start) return this._from = this._to, this._update(this._to), this._done = !0, this.emit("end"), this;
					var n = this._from,
						r = this._to,
						i = this._curr,
						o = (0, this._ease)((e - this._start) / t);
					if (this.isArray) {
						for (var u = 0; u < n.length; ++u) i[u] = n[u] + (r[u] - n[u]) * o;
						return this._update(i), this
					}
					for (var s in n) i[s] = n[s] + (r[s] - n[s]) * o;
					return this._update(i), this
				}
			}, i.prototype.update = function(t) {
				return 0 == arguments.length ? this.step() : (this._update = t, this)
			}, e.exports = i
		}, {
			"./ease": 11,
			"./emitter": 12
		}],
		16: [function(t, u, e) {
			! function(t) {
				"use strict";

				function e() {}
				var n = e.prototype,
					r = t.EventEmitter;

				function o(t, e) {
					for (var n = t.length; n--;)
						if (t[n].listener === e) return n;
					return -1
				}

				function i(t) {
					return function() {
						return this[t].apply(this, arguments)
					}
				}
				n.getListeners = function(t) {
					var e, n, r = this._getEvents();
					if (t instanceof RegExp)
						for (n in e = {}, r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
					else e = r[t] || (r[t] = []);
					return e
				}, n.flattenListeners = function(t) {
					var e, n = [];
					for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
					return n
				}, n.getListenersAsObject = function(t) {
					var e, n = this.getListeners(t);
					return n instanceof Array && ((e = {})[t] = n), e || n
				}, n.addListener = function(t, e) {
					if (! function t(e) {
							return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
						}(e)) throw new TypeError("listener must be a function");
					var n, r = this.getListenersAsObject(t),
						i = "object" == typeof e;
					for (n in r) r.hasOwnProperty(n) && -1 === o(r[n], e) && r[n].push(i ? e : {
						listener: e,
						once: !1
					});
					return this
				}, n.on = i("addListener"), n.addOnceListener = function(t, e) {
					return this.addListener(t, {
						listener: e,
						once: !0
					})
				}, n.once = i("addOnceListener"), n.defineEvent = function(t) {
					return this.getListeners(t), this
				}, n.defineEvents = function(t) {
					for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
					return this
				}, n.removeListener = function(t, e) {
					var n, r, i = this.getListenersAsObject(t);
					for (r in i) i.hasOwnProperty(r) && -1 !== (n = o(i[r], e)) && i[r].splice(n, 1);
					return this
				}, n.off = i("removeListener"), n.addListeners = function(t, e) {
					return this.manipulateListeners(!1, t, e)
				}, n.removeListeners = function(t, e) {
					return this.manipulateListeners(!0, t, e)
				}, n.manipulateListeners = function(t, e, n) {
					var r, i, o = t ? this.removeListener : this.addListener,
						u = t ? this.removeListeners : this.addListeners;
					if ("object" != typeof e || e instanceof RegExp)
						for (r = n.length; r--;) o.call(this, e, n[r]);
					else
						for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : u.call(this, r, i));
					return this
				}, n.removeEvent = function(t) {
					var e, n = typeof t,
						r = this._getEvents();
					if ("string" === n) delete r[t];
					else if (t instanceof RegExp)
						for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
					else delete this._events;
					return this
				}, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
					var n, r, i, o, u = this.getListenersAsObject(t);
					for (o in u)
						if (u.hasOwnProperty(o))
							for (n = u[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
					return this
				}, n.trigger = i("emitEvent"), n.emit = function(t) {
					var e = Array.prototype.slice.call(arguments, 1);
					return this.emitEvent(t, e)
				}, n.setOnceReturnValue = function(t) {
					return this._onceReturnValue = t, this
				}, n._getOnceReturnValue = function() {
					return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
				}, n._getEvents = function() {
					return this._events || (this._events = {})
				}, e.noConflict = function() {
					return t.EventEmitter = r, e
				}, "function" == typeof s && s.amd ? s(function() {
					return e
				}) : "object" == typeof u && u.exports ? u.exports = e : t.EventEmitter = e
			}("undefined" != typeof window ? window : this || {})
		}, {}]
	}, {}, [1])
}();;
/*! elementor - v2.5.11 - 31-03-2019 */
(function(modules) {
	var installedModules = {};

	function __webpack_require__(moduleId) {
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		module.l = true;
		return module.exports;
	}
	__webpack_require__.m = modules;
	__webpack_require__.c = installedModules;
	__webpack_require__.d = function(exports, name, getter) {
		if (!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter
			});
		}
	};
	__webpack_require__.r = function(exports) {
		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, {
				value: 'Module'
			});
		}
		Object.defineProperty(exports, '__esModule', {
			value: true
		});
	};
	__webpack_require__.t = function(value, mode) {
		if (mode & 1) value = __webpack_require__(value);
		if (mode & 8) return value;
		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', {
			enumerable: true,
			value: value
		});
		if (mode & 2 && typeof value != 'string')
			for (var key in value) __webpack_require__.d(ns, key, function(key) {
				return value[key];
			}.bind(null, key));
		return ns;
	};
	__webpack_require__.n = function(module) {
		var getter = module && module.__esModule ? function getDefault() {
			return module['default'];
		} : function getModuleExports() {
			return module;
		};
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};
	__webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	__webpack_require__.p = "";
	return __webpack_require__(__webpack_require__.s = 208);
})
({
	17: (function(module, exports, __webpack_require__) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
			return function(Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();
		var _get = function get(object, property, receiver) {
			if (object === null) object = Function.prototype;
			var desc = Object.getOwnPropertyDescriptor(object, property);
			if (desc === undefined) {
				var parent = Object.getPrototypeOf(object);
				if (parent === null) {
					return undefined;
				} else {
					return get(parent, property, receiver);
				}
			} else if ("value" in desc) {
				return desc.value;
			} else {
				var getter = desc.get;
				if (getter === undefined) {
					return undefined;
				}
				return getter.call(receiver);
			}
		};

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
		var _class = function(_elementorModules$Vie) {
			_inherits(_class, _elementorModules$Vie);

			function _class() {
				_classCallCheck(this, _class);
				return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
			}
			_createClass(_class, [{
				key: 'getDefaultSettings',
				value: function getDefaultSettings() {
					return {
						selectors: {
							elements: '.elementor-element',
							nestedDocumentElements: '.elementor .elementor-element'
						},
						classes: {
							editMode: 'elementor-edit-mode'
						}
					};
				}
			}, {
				key: 'getDefaultElements',
				value: function getDefaultElements() {
					var selectors = this.getSettings('selectors');
					return {
						$elements: this.$element.find(selectors.elements).not(this.$element.find(selectors.nestedDocumentElements))
					};
				}
			}, {
				key: 'getDocumentSettings',
				value: function getDocumentSettings(setting) {
					var elementSettings = void 0;
					if (this.isEdit) {
						elementSettings = {};
						var settings = elementor.settings.page.model;
						jQuery.each(settings.getActiveControls(), function(controlKey) {
							elementSettings[controlKey] = settings.attributes[controlKey];
						});
					} else {
						elementSettings = this.$element.data('elementor-settings') || {};
					}
					return this.getItems(elementSettings, setting);
				}
			}, {
				key: 'runElementsHandlers',
				value: function runElementsHandlers() {
					this.elements.$elements.each(function(index, element) {
						return elementorFrontend.elementsHandler.runReadyTrigger(element);
					});
				}
			}, {
				key: 'onInit',
				value: function onInit() {
					this.$element = this.getSettings('$element');
					_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onInit', this).call(this);
					this.isEdit = this.$element.hasClass(this.getSettings('classes.editMode'));
					if (this.isEdit) {
						elementor.settings.page.model.on('change', this.onSettingsChange.bind(this));
					} else {
						this.runElementsHandlers();
					}
				}
			}, {
				key: 'onSettingsChange',
				value: function onSettingsChange() {}
			}]);
			return _class;
		}(elementorModules.ViewModule);
		exports.default = _class;
	}),
	19: (function(module, exports, __webpack_require__) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _module = __webpack_require__(5);
		var _module2 = _interopRequireDefault(_module);
		var _viewModule = __webpack_require__(6);
		var _viewModule2 = _interopRequireDefault(_viewModule);
		var _masonry = __webpack_require__(20);
		var _masonry2 = _interopRequireDefault(_masonry);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}
		exports.default = window.elementorModules = {
			Module: _module2.default,
			ViewModule: _viewModule2.default,
			utils: {
				Masonry: _masonry2.default
			}
		};
	}),
	20: (function(module, exports, __webpack_require__) {
		"use strict";
		var _viewModule = __webpack_require__(6);
		var _viewModule2 = _interopRequireDefault(_viewModule);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}
		module.exports = _viewModule2.default.extend({
			getDefaultSettings: function getDefaultSettings() {
				return {
					container: null,
					items: null,
					columnsCount: 3,
					verticalSpaceBetween: 30
				};
			},
			getDefaultElements: function getDefaultElements() {
				return {
					$container: jQuery(this.getSettings('container')),
					$items: jQuery(this.getSettings('items'))
				};
			},
			run: function run() {
				var heights = [],
					distanceFromTop = this.elements.$container.position().top,
					settings = this.getSettings(),
					columnsCount = settings.columnsCount;
				distanceFromTop += parseInt(this.elements.$container.css('margin-top'), 10);
				this.elements.$items.each(function(index) {
					var row = Math.floor(index / columnsCount),
						$item = jQuery(this),
						itemHeight = $item[0].getBoundingClientRect().height + settings.verticalSpaceBetween;
					if (row) {
						var itemPosition = $item.position(),
							indexAtRow = index % columnsCount,
							pullHeight = itemPosition.top - distanceFromTop - heights[indexAtRow];
						pullHeight -= parseInt($item.css('margin-top'), 10);
						pullHeight *= -1;
						$item.css('margin-top', pullHeight + 'px');
						heights[indexAtRow] += itemHeight;
					} else {
						heights.push(itemHeight);
					}
				});
			}
		});
	}),
	208: (function(module, exports, __webpack_require__) {
		"use strict";
		var _modules = __webpack_require__(19);
		var _modules2 = _interopRequireDefault(_modules);
		var _document = __webpack_require__(17);
		var _document2 = _interopRequireDefault(_document);
		var _stretchElement = __webpack_require__(209);
		var _stretchElement2 = _interopRequireDefault(_stretchElement);
		var _base = __webpack_require__(210);
		var _base2 = _interopRequireDefault(_base);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}
		_modules2.default.frontend = {
			Document: _document2.default,
			tools: {
				StretchElement: _stretchElement2.default
			},
			handlers: {
				Base: _base2.default
			}
		};
	}),
	209: (function(module, exports, __webpack_require__) {
		"use strict";
		module.exports = elementorModules.ViewModule.extend({
			getDefaultSettings: function getDefaultSettings() {
				return {
					element: null,
					direction: elementorFrontend.config.is_rtl ? 'right' : 'left',
					selectors: {
						container: window
					}
				};
			},
			getDefaultElements: function getDefaultElements() {
				return {
					$element: jQuery(this.getSettings('element'))
				};
			},
			stretch: function stretch() {
				var containerSelector = this.getSettings('selectors.container'),
					$container;
				try {
					$container = jQuery(containerSelector);
				} catch (e) {}
				if (!$container || !$container.length) {
					$container = jQuery(this.getDefaultSettings().selectors.container);
				}
				this.reset();
				var $element = this.elements.$element,
					containerWidth = $container.outerWidth(),
					elementOffset = $element.offset().left,
					isFixed = 'fixed' === $element.css('position'),
					correctOffset = isFixed ? 0 : elementOffset;
				if (window !== $container[0]) {
					var containerOffset = $container.offset().left;
					if (isFixed) {
						correctOffset = containerOffset;
					}
					if (elementOffset > containerOffset) {
						correctOffset = elementOffset - containerOffset;
					}
				}
				if (!isFixed) {
					if (elementorFrontend.config.is_rtl) {
						correctOffset = containerWidth - ($element.outerWidth() + correctOffset);
					}
					correctOffset = -correctOffset;
				}
				var css = {};
				css.width = containerWidth + 'px';
				css[this.getSettings('direction')] = correctOffset + 'px';
				$element.css(css);
			},
			reset: function reset() {
				var css = {};
				css.width = '';
				css[this.getSettings('direction')] = '';
				this.elements.$element.css(css);
			}
		});
	}),
	210: (function(module, exports, __webpack_require__) {
		"use strict";
		module.exports = elementorModules.ViewModule.extend({
			$element: null,
			editorListeners: null,
			onElementChange: null,
			onEditSettingsChange: null,
			onGeneralSettingsChange: null,
			onPageSettingsChange: null,
			isEdit: null,
			__construct: function __construct(settings) {
				this.$element = settings.$element;
				this.isEdit = this.$element.hasClass('elementor-element-edit-mode');
				if (this.isEdit) {
					this.addEditorListeners();
				}
			},
			findElement: function findElement(selector) {
				var $mainElement = this.$element;
				return $mainElement.find(selector).filter(function() {
					return jQuery(this).closest('.elementor-element').is($mainElement);
				});
			},
			getUniqueHandlerID: function getUniqueHandlerID(cid, $element) {
				if (!cid) {
					cid = this.getModelCID();
				}
				if (!$element) {
					$element = this.$element;
				}
				return cid + $element.attr('data-element_type') + this.getConstructorID();
			},
			initEditorListeners: function initEditorListeners() {
				var self = this;
				self.editorListeners = [{
					event: 'element:destroy',
					to: elementor.channels.data,
					callback: function callback(removedModel) {
						if (removedModel.cid !== self.getModelCID()) {
							return;
						}
						self.onDestroy();
					}
				}];
				if (self.onElementChange) {
					var elementType = self.getWidgetType() || self.getElementType();
					var eventName = 'change';
					if ('global' !== elementType) {
						eventName += ':' + elementType;
					}
					self.editorListeners.push({
						event: eventName,
						to: elementor.channels.editor,
						callback: function callback(controlView, elementView) {
							var elementViewHandlerID = self.getUniqueHandlerID(elementView.model.cid, elementView.$el);
							if (elementViewHandlerID !== self.getUniqueHandlerID()) {
								return;
							}
							self.onElementChange(controlView.model.get('name'), controlView, elementView);
						}
					});
				}
				if (self.onEditSettingsChange) {
					self.editorListeners.push({
						event: 'change:editSettings',
						to: elementor.channels.editor,
						callback: function callback(changedModel, view) {
							if (view.model.cid !== self.getModelCID()) {
								return;
							}
							self.onEditSettingsChange(Object.keys(changedModel.changed)[0]);
						}
					});
				}
				['page', 'general'].forEach(function(settingsType) {
					var listenerMethodName = 'on' + settingsType[0].toUpperCase() + settingsType.slice(1) + 'SettingsChange';
					if (self[listenerMethodName]) {
						self.editorListeners.push({
							event: 'change',
							to: elementor.settings[settingsType].model,
							callback: function callback(model) {
								self[listenerMethodName](model.changed);
							}
						});
					}
				});
			},
			getEditorListeners: function getEditorListeners() {
				if (!this.editorListeners) {
					this.initEditorListeners();
				}
				return this.editorListeners;
			},
			addEditorListeners: function addEditorListeners() {
				var uniqueHandlerID = this.getUniqueHandlerID();
				this.getEditorListeners().forEach(function(listener) {
					elementorFrontend.addListenerOnce(uniqueHandlerID, listener.event, listener.callback, listener.to);
				});
			},
			removeEditorListeners: function removeEditorListeners() {
				var uniqueHandlerID = this.getUniqueHandlerID();
				this.getEditorListeners().forEach(function(listener) {
					elementorFrontend.removeListeners(uniqueHandlerID, listener.event, null, listener.to);
				});
			},
			getElementType: function getElementType() {
				return this.$element.data('element_type');
			},
			getWidgetType: function getWidgetType() {
				var widgetType = this.$element.data('widget_type');
				if (!widgetType) {
					return;
				}
				return widgetType.split('.')[0];
			},
			getID: function getID() {
				return this.$element.data('id');
			},
			getModelCID: function getModelCID() {
				return this.$element.data('model-cid');
			},
			getElementSettings: function getElementSettings(setting) {
				var elementSettings = {};
				var modelCID = this.getModelCID();
				if (this.isEdit && modelCID) {
					var settings = elementorFrontend.config.elements.data[modelCID],
						attributes = settings.attributes;
					var type = attributes.widgetType || attributes.elType;
					if (attributes.isInner) {
						type = 'inner-' + type;
					}
					var settingsKeys = elementorFrontend.config.elements.keys[type];
					if (!settingsKeys) {
						settingsKeys = elementorFrontend.config.elements.keys[type] = [];
						jQuery.each(settings.controls, function(name, control) {
							if (control.frontend_available) {
								settingsKeys.push(name);
							}
						});
					}
					jQuery.each(settings.getActiveControls(), function(controlKey) {
						if (-1 !== settingsKeys.indexOf(controlKey)) {
							elementSettings[controlKey] = attributes[controlKey];
						}
					});
				} else {
					elementSettings = this.$element.data('settings') || {};
				}
				return this.getItems(elementSettings, setting);
			},
			getEditSettings: function getEditSettings(setting) {
				var attributes = {};
				if (this.isEdit) {
					attributes = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes;
				}
				return this.getItems(attributes, setting);
			},
			getCurrentDeviceSetting: function getCurrentDeviceSetting(settingKey) {
				return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), settingKey);
			},
			onDestroy: function onDestroy() {
				this.removeEditorListeners();
				if (this.unbindEvents) {
					this.unbindEvents();
				}
			}
		});
	}),
	5: (function(module, exports, __webpack_require__) {
		"use strict";
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
			return typeof obj;
		} : function(obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
		};
		var Module = function Module() {
			var $ = jQuery,
				instanceParams = arguments,
				self = this,
				events = {};
			var settings = void 0;
			var ensureClosureMethods = function ensureClosureMethods() {
				$.each(self, function(methodName) {
					var oldMethod = self[methodName];
					if ('function' !== typeof oldMethod) {
						return;
					}
					self[methodName] = function() {
						return oldMethod.apply(self, arguments);
					};
				});
			};
			var initSettings = function initSettings() {
				settings = self.getDefaultSettings();
				var instanceSettings = instanceParams[0];
				if (instanceSettings) {
					$.extend(true, settings, instanceSettings);
				}
			};
			var init = function init() {
				self.__construct.apply(self, instanceParams);
				ensureClosureMethods();
				initSettings();
				self.trigger('init');
			};
			this.getItems = function(items, itemKey) {
				if (itemKey) {
					var keyStack = itemKey.split('.'),
						currentKey = keyStack.splice(0, 1);
					if (!keyStack.length) {
						return items[currentKey];
					}
					if (!items[currentKey]) {
						return;
					}
					return this.getItems(items[currentKey], keyStack.join('.'));
				}
				return items;
			};
			this.getSettings = function(setting) {
				return this.getItems(settings, setting);
			};
			this.setSettings = function(settingKey, value, settingsContainer) {
				if (!settingsContainer) {
					settingsContainer = settings;
				}
				if ('object' === (typeof settingKey === 'undefined' ? 'undefined' : _typeof(settingKey))) {
					$.extend(settingsContainer, settingKey);
					return self;
				}
				var keyStack = settingKey.split('.'),
					currentKey = keyStack.splice(0, 1);
				if (!keyStack.length) {
					settingsContainer[currentKey] = value;
					return self;
				}
				if (!settingsContainer[currentKey]) {
					settingsContainer[currentKey] = {};
				}
				return self.setSettings(keyStack.join('.'), value, settingsContainer[currentKey]);
			};
			this.forceMethodImplementation = function(methodArguments) {
				var functionName = methodArguments.callee.name;
				throw new ReferenceError('The method ' + functionName + ' must to be implemented in the inheritor child.');
			};
			this.on = function(eventName, callback) {
				if ('object' === (typeof eventName === 'undefined' ? 'undefined' : _typeof(eventName))) {
					$.each(eventName, function(singleEventName) {
						self.on(singleEventName, this);
					});
					return self;
				}
				var eventNames = eventName.split(' ');
				eventNames.forEach(function(singleEventName) {
					if (!events[singleEventName]) {
						events[singleEventName] = [];
					}
					events[singleEventName].push(callback);
				});
				return self;
			};
			this.off = function(eventName, callback) {
				if (!events[eventName]) {
					return self;
				}
				if (!callback) {
					delete events[eventName];
					return self;
				}
				var callbackIndex = events[eventName].indexOf(callback);
				if (-1 !== callbackIndex) {
					delete events[eventName][callbackIndex];
				}
				return self;
			};
			this.trigger = function(eventName) {
				var methodName = 'on' + eventName[0].toUpperCase() + eventName.slice(1),
					params = Array.prototype.slice.call(arguments, 1);
				if (self[methodName]) {
					self[methodName].apply(self, params);
				}
				var callbacks = events[eventName];
				if (!callbacks) {
					return self;
				}
				$.each(callbacks, function(index, callback) {
					callback.apply(self, params);
				});
				return self;
			};
			init();
		};
		Module.prototype.__construct = function() {};
		Module.prototype.getDefaultSettings = function() {
			return {};
		};
		Module.extendsCount = 0;
		Module.extend = function(properties) {
			var $ = jQuery,
				parent = this;
			var child = function child() {
				return parent.apply(this, arguments);
			};
			$.extend(child, parent);
			child.prototype = Object.create($.extend({}, parent.prototype, properties));
			child.prototype.constructor = child;
			var constructorID = ++Module.extendsCount;
			child.prototype.getConstructorID = function() {
				return constructorID;
			};
			child.__super__ = parent.prototype;
			return child;
		};
		module.exports = Module;
	}),
	6: (function(module, exports, __webpack_require__) {
		"use strict";
		var _module = __webpack_require__(5);
		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}
		module.exports = _module2.default.extend({
			elements: null,
			getDefaultElements: function getDefaultElements() {
				return {};
			},
			bindEvents: function bindEvents() {},
			onInit: function onInit() {
				this.initElements();
				this.bindEvents();
			},
			initElements: function initElements() {
				this.elements = this.getDefaultElements();
			}
		});
	})
});
/*! dialogs-manager v4.7.1 | (c) Kobi Zaltzberg | https://github.com/kobizz/dialogs-manager/blob/master/LICENSE.txt
 2019-01-13 15:53 */
! function(a, b) {
	"use strict";
	var c = {
		widgetsTypes: {},
		createWidgetType: function(b, d, e) {
			e || (e = this.Widget);
			var f = function() {
					e.apply(this, arguments)
				},
				g = f.prototype = new e(b);
			return g.types = g.types.concat([b]), a.extend(g, d), g.constructor = f, f.extend = function(a, b) {
				return c.createWidgetType(a, b, f)
			}, f
		},
		addWidgetType: function(a, b, c) {
			return b && b.prototype instanceof this.Widget ? this.widgetsTypes[a] = b : this.widgetsTypes[a] = this.createWidgetType(a, b, c)
		},
		getWidgetType: function(a) {
			return this.widgetsTypes[a]
		}
	};
	c.Instance = function() {
		var b = this,
			d = {},
			e = {},
			f = function() {
				d.body = a("body")
			},
			g = function(b) {
				var c = {
					classPrefix: "dialog",
					effects: {
						show: "fadeIn",
						hide: "fadeOut"
					}
				};
				a.extend(e, c, b)
			};
		this.createWidget = function(a, d) {
			var e = c.getWidgetType(a),
				f = new e(a);
			return d = d || {}, f.init(b, d), f
		}, this.getSettings = function(a) {
			return a ? e[a] : Object.create(e)
		}, this.init = function(a) {
			return g(a), f(), b
		}, b.init()
	}, c.Widget = function(b) {
		var d = this,
			e = {},
			f = {},
			g = {},
			h = 0,
			i = ["refreshPosition"],
			j = function() {
				var a = [g.window];
				g.iframe && a.push(jQuery(g.iframe[0].contentWindow)), a.forEach(function(a) {
					e.hide.onEscKeyPress && a.on("keyup", u), e.hide.onOutsideClick && a[0].addEventListener("click", o, !0), e.hide.onOutsideContextMenu && a[0].addEventListener("contextmenu", o, !0), e.position.autoRefresh && a.on("resize", d.refreshPosition)
				}), (e.hide.onClick || e.hide.onBackgroundClick) && g.widget.on("click", n)
			},
			k = function(b, c) {
				var d = e.effects[b],
					f = g.widget;
				if (a.isFunction(d)) d.apply(f, c);
				else {
					if (!f[d]) throw "Reference Error: The effect " + d + " not found";
					f[d].apply(f, c)
				}
			},
			l = function() {
				var b = i.concat(d.getClosureMethods());
				a.each(b, function() {
					var a = this,
						b = d[a];
					d[a] = function() {
						b.apply(d, arguments)
					}
				})
			},
			m = function(a) {
				if (a.my) {
					var b = /left|right/,
						c = /([+-]\d+)?$/,
						d = g.iframe.offset(),
						e = g.iframe[0].contentWindow,
						f = a.my.split(" "),
						h = [];
					1 === f.length && (b.test(f[0]) ? f.push("center") : f.unshift("center")), f.forEach(function(a, b) {
						var f = a.replace(c, function(a) {
							return a = +a || 0, a += b ? d.top - e.scrollY : d.left - e.scrollX, a >= 0 && (a = "+" + a), a
						});
						h.push(f)
					}), a.my = h.join(" ")
				}
			},
			n = function(b) {
				if (!s(b)) {
					if (e.hide.onClick) {
						if (a(b.target).closest(e.selectors.preventClose).length) return
					} else if (b.target !== this) return;
					d.hide()
				}
			},
			o = function(b) {
				s(b) || a(b.target).closest(g.widget).length || d.hide()
			},
			p = function() {
				d.addElement("widget"), d.addElement("header"), d.addElement("message"), d.addElement("window", window), d.addElement("body", document.body), d.addElement("container", e.container), e.iframe && d.addElement("iframe", e.iframe), e.closeButton && d.addElement("closeButton", '<div><i class="' + e.closeButtonClass + '"></i></div>');
				var b = d.getSettings("id");
				b && d.setID(b);
				var c = [];
				a.each(d.types, function() {
					c.push(e.classes.globalPrefix + "-type-" + this)
				}), c.push(d.getSettings("className")), g.widget.addClass(c.join(" "))
			},
			q = function(c, f) {
				var g = a.extend(!0, {}, c.getSettings());
				e = {
					headerMessage: "",
					message: "",
					effects: g.effects,
					classes: {
						globalPrefix: g.classPrefix,
						prefix: g.classPrefix + "-" + b,
						preventScroll: g.classPrefix + "-prevent-scroll"
					},
					selectors: {
						preventClose: "." + g.classPrefix + "-prevent-close"
					},
					container: "body",
					preventScroll: !1,
					iframe: null,
					closeButton: !1,
					closeButtonClass: g.classPrefix + "-close-button-icon",
					position: {
						element: "widget",
						my: "center",
						at: "center",
						enable: !0,
						autoRefresh: !1
					},
					hide: {
						auto: !1,
						autoDelay: 5e3,
						onClick: !1,
						onOutsideClick: !0,
						onOutsideContextMenu: !1,
						onBackgroundClick: !0,
						onEscKeyPress: !0
					}
				}, a.extend(!0, e, d.getDefaultSettings(), f), r()
			},
			r = function() {
				a.each(e, function(a) {
					var b = a.match(/^on([A-Z].*)/);
					b && (b = b[1].charAt(0).toLowerCase() + b[1].slice(1), d.on(b, this))
				})
			},
			s = function(a) {
				return "click" === a.type && 2 === a.button
			},
			t = function(a) {
				return a.replace(/([a-z])([A-Z])/g, function() {
					return arguments[1] + "-" + arguments[2].toLowerCase()
				})
			},
			u = function(a) {
				var b = 27,
					c = a.which;
				b === c && d.hide()
			},
			v = function() {
				var a = [g.window];
				g.iframe && a.push(jQuery(g.iframe[0].contentWindow)), a.forEach(function(a) {
					e.hide.onEscKeyPress && a.off("keyup", u), e.hide.onOutsideClick && a[0].removeEventListener("click", o, !0), e.hide.onOutsideContextMenu && a[0].removeEventListener("contextmenu", o, !0), e.position.autoRefresh && a.off("resize", d.refreshPosition)
				}), (e.hide.onClick || e.hide.onBackgroundClick) && g.widget.off("click", n)
			};
		this.addElement = function(b, c, d) {
			var f = g[b] = a(c || "<div>"),
				h = t(b),
				i = [];
			return d && i.push(e.classes.globalPrefix + "-" + d), i.push(e.classes.globalPrefix + "-" + h), i.push(e.classes.prefix + "-" + h), f.addClass(i.join(" ")), f
		}, this.destroy = function() {
			return v(), g.widget.remove(), d.trigger("destroy"), d
		}, this.getElements = function(a) {
			return a ? g[a] : g
		}, this.getSettings = function(a) {
			var b = Object.create(e);
			return a ? b[a] : b
		}, this.hide = function() {
			return clearTimeout(h), k("hide", arguments), v(), e.preventScroll && d.getElements("body").removeClass(e.classes.preventScroll), d.trigger("hide"), d
		}, this.init = function(a, b) {
			if (!(a instanceof c.Instance)) throw "The " + d.widgetName + " must to be initialized from an instance of DialogsManager.Instance";
			return l(), d.trigger("init", b), q(a, b), p(), d.buildWidget(), d.attachEvents(), d.trigger("ready"), d
		}, this.isVisible = function() {
			return g.widget.is(":visible")
		}, this.on = function(b, c) {
			if ("object" == typeof b) return a.each(b, function(a) {
				d.on(a, this)
			}), d;
			var e = b.split(" ");
			return e.forEach(function(a) {
				f[a] || (f[a] = []), f[a].push(c)
			}), d
		}, this.off = function(a, b) {
			if (!f[a]) return d;
			if (!b) return delete f[a], d;
			var c = f[a].indexOf(b);
			return -1 !== c && f[a].splice(c, 1), d
		}, this.refreshPosition = function() {
			if (e.position.enable) {
				var b = a.extend({}, e.position);
				g[b.of] && (b.of = g[b.of]), b.of || (b.of = window), e.iframe && m(b), g[b.element].position(b)
			}
		}, this.setID = function(a) {
			return g.widget.attr("id", a), d
		}, this.setHeaderMessage = function(a) {
			return d.getElements("header").html(a), this
		}, this.setMessage = function(a) {
			return g.message.html(a), d
		}, this.setSettings = function(b, c) {
			return jQuery.isPlainObject(c) ? a.extend(!0, e[b], c) : e[b] = c, d
		}, this.show = function() {
			return clearTimeout(h), g.widget.appendTo(g.container).hide(), k("show", arguments), d.refreshPosition(), e.hide.auto && (h = setTimeout(d.hide, e.hide.autoDelay)), j(), e.preventScroll && d.getElements("body").addClass(e.classes.preventScroll), d.trigger("show"), d
		}, this.trigger = function(b, c) {
			var e = "on" + b[0].toUpperCase() + b.slice(1);
			d[e] && d[e](c);
			var g = f[b];
			if (g) return a.each(g, function(a, b) {
				b.call(d, c)
			}), d
		}
	}, c.Widget.prototype.types = [], c.Widget.prototype.buildWidget = function() {
		var a = this.getElements(),
			b = this.getSettings();
		a.widget.append(a.header, a.message), this.setHeaderMessage(b.headerMessage), this.setMessage(b.message), this.getSettings("closeButton") && a.widget.prepend(a.closeButton)
	}, c.Widget.prototype.attachEvents = function() {
		var a = this;
		a.getSettings("closeButton") && a.getElements("closeButton").on("click", function() {
			a.hide()
		})
	}, c.Widget.prototype.getDefaultSettings = function() {
		return {}
	}, c.Widget.prototype.getClosureMethods = function() {
		return []
	}, c.Widget.prototype.onHide = function() {}, c.Widget.prototype.onShow = function() {}, c.Widget.prototype.onInit = function() {}, c.Widget.prototype.onReady = function() {}, c.widgetsTypes.simple = c.Widget, c.addWidgetType("buttons", {
		activeKeyUp: function(a) {
			var b = 9;
			a.which === b && a.preventDefault(), this.hotKeys[a.which] && this.hotKeys[a.which](this)
		},
		activeKeyDown: function(a) {
			if (this.focusedButton) {
				var b = 9;
				if (a.which === b) {
					a.preventDefault();
					var c, d = this.focusedButton.index();
					a.shiftKey ? (c = d - 1, c < 0 && (c = this.buttons.length - 1)) : (c = d + 1, c >= this.buttons.length && (c = 0)), this.focusedButton = this.buttons[c].focus()
				}
			}
		},
		addButton: function(b) {
			var c = this,
				d = c.getSettings(),
				e = jQuery.extend(d.button, b),
				f = c.addElement(b.name, a("<" + e.tag + ">").text(b.text), "button");
			c.buttons.push(f);
			var g = function() {
				d.hide.onButtonClick && c.hide(), a.isFunction(b.callback) && b.callback.call(this, c)
			};
			return f.on("click", g), b.hotKey && (this.hotKeys[b.hotKey] = g), this.getElements("buttonsWrapper").append(f), b.focus && (this.focusedButton = f), c
		},
		bindHotKeys: function() {
			this.getElements("window").on({
				keyup: this.activeKeyUp,
				keydown: this.activeKeyDown
			})
		},
		buildWidget: function() {
			c.Widget.prototype.buildWidget.apply(this, arguments);
			var a = this.addElement("buttonsWrapper");
			this.getElements("widget").append(a)
		},
		getClosureMethods: function() {
			return ["activeKeyUp", "activeKeyDown"]
		},
		getDefaultSettings: function() {
			return {
				hide: {
					onButtonClick: !0
				},
				button: {
					tag: "button"
				}
			}
		},
		onHide: function() {
			this.unbindHotKeys()
		},
		onInit: function() {
			this.buttons = [], this.hotKeys = {}, this.focusedButton = null
		},
		onShow: function() {
			this.bindHotKeys(), this.focusedButton || (this.focusedButton = this.buttons[0]), this.focusedButton && this.focusedButton.focus()
		},
		unbindHotKeys: function() {
			this.getElements("window").off({
				keyup: this.activeKeyUp,
				keydown: this.activeKeyDown
			})
		}
	}), c.addWidgetType("lightbox", c.getWidgetType("buttons").extend("lightbox", {
		getDefaultSettings: function() {
			var b = c.getWidgetType("buttons").prototype.getDefaultSettings.apply(this, arguments);
			return a.extend(!0, b, {
				contentWidth: "auto",
				contentHeight: "auto",
				position: {
					element: "widgetContent",
					of : "widget",
					autoRefresh: !0
				}
			})
		},
		buildWidget: function() {
			c.getWidgetType("buttons").prototype.buildWidget.apply(this, arguments);
			var a = this.addElement("widgetContent"),
				b = this.getElements();
			a.append(b.header, b.message, b.buttonsWrapper), b.widget.html(a), b.closeButton && a.prepend(b.closeButton)
		},
		onReady: function() {
			var a = this.getElements(),
				b = this.getSettings();
			"auto" !== b.contentWidth && a.message.width(b.contentWidth), "auto" !== b.contentHeight && a.message.height(b.contentHeight)
		}
	})), c.addWidgetType("confirm", c.getWidgetType("lightbox").extend("confirm", {
		onReady: function() {
			c.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
			var a = this.getSettings("strings"),
				b = "cancel" === this.getSettings("defaultOption");
			this.addButton({
				name: "cancel",
				text: a.cancel,
				callback: function(a) {
					a.trigger("cancel")
				},
				focus: b
			}), this.addButton({
				name: "ok",
				text: a.confirm,
				callback: function(a) {
					a.trigger("confirm")
				},
				focus: !b
			})
		},
		getDefaultSettings: function() {
			var a = c.getWidgetType("lightbox").prototype.getDefaultSettings.apply(this, arguments);
			return a.strings = {
				confirm: "OK",
				cancel: "Cancel"
			}, a.defaultOption = "cancel", a
		}
	})), c.addWidgetType("alert", c.getWidgetType("lightbox").extend("alert", {
		onReady: function() {
			c.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
			var a = this.getSettings("strings");
			this.addButton({
				name: "ok",
				text: a.confirm,
				callback: function(a) {
					a.trigger("confirm")
				}
			})
		},
		getDefaultSettings: function() {
			var a = c.getWidgetType("lightbox").prototype.getDefaultSettings.apply(this, arguments);
			return a.strings = {
				confirm: "OK"
			}, a
		}
	})), b.DialogsManager = c
}("undefined" != typeof jQuery ? jQuery : "function" == typeof require && require("jquery"), "undefined" != typeof module ? module.exports : window);
! function() {
	"use strict";

	function Waypoint(options) {
		if (!options) throw new Error("No options passed to Waypoint constructor");
		if (!options.element) throw new Error("No element option passed to Waypoint constructor");
		if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
		this.key = "waypoint-" + keyCounter, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = options.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
			name: this.options.group,
			axis: this.axis
		}), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), allWaypoints[this.key] = this, keyCounter += 1
	}
	var keyCounter = 0,
		allWaypoints = {};
	Waypoint.prototype.queueTrigger = function(direction) {
		this.group.queueTrigger(this, direction)
	}, Waypoint.prototype.trigger = function(args) {
		this.enabled && this.callback && this.callback.apply(this, args)
	}, Waypoint.prototype.destroy = function() {
		this.context.remove(this), this.group.remove(this), delete allWaypoints[this.key]
	}, Waypoint.prototype.disable = function() {
		return this.enabled = !1, this
	}, Waypoint.prototype.enable = function() {
		return this.context.refresh(), this.enabled = !0, this
	}, Waypoint.prototype.next = function() {
		return this.group.next(this)
	}, Waypoint.prototype.previous = function() {
		return this.group.previous(this)
	}, Waypoint.invokeAll = function(method) {
		var allWaypointsArray = [];
		for (var waypointKey in allWaypoints) allWaypointsArray.push(allWaypoints[waypointKey]);
		for (var i = 0, end = allWaypointsArray.length; i < end; i++) allWaypointsArray[i][method]()
	}, Waypoint.destroyAll = function() {
		Waypoint.invokeAll("destroy")
	}, Waypoint.disableAll = function() {
		Waypoint.invokeAll("disable")
	}, Waypoint.enableAll = function() {
		Waypoint.Context.refreshAll();
		for (var waypointKey in allWaypoints) allWaypoints[waypointKey].enabled = !0;
		return this
	}, Waypoint.refreshAll = function() {
		Waypoint.Context.refreshAll()
	}, Waypoint.viewportHeight = function() {
		return window.innerHeight || document.documentElement.clientHeight
	}, Waypoint.viewportWidth = function() {
		return document.documentElement.clientWidth
	}, Waypoint.adapters = [], Waypoint.defaults = {
		context: window,
		continuous: !0,
		enabled: !0,
		group: "default",
		horizontal: !1,
		offset: 0
	}, Waypoint.offsetAliases = {
		"bottom-in-view": function() {
			return this.context.innerHeight() - this.adapter.outerHeight()
		},
		"right-in-view": function() {
			return this.context.innerWidth() - this.adapter.outerWidth()
		}
	}, window.Waypoint = Waypoint
}(),
function() {
	"use strict";

	function requestAnimationFrameShim(callback) {
		window.setTimeout(callback, 1e3 / 60)
	}

	function Context(element) {
		this.element = element, this.Adapter = Waypoint.Adapter, this.adapter = new this.Adapter(element), this.key = "waypoint-context-" + keyCounter, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
			x: this.adapter.scrollLeft(),
			y: this.adapter.scrollTop()
		}, this.waypoints = {
			vertical: {},
			horizontal: {}
		}, element.waypointContextKey = this.key, contexts[element.waypointContextKey] = this, keyCounter += 1, Waypoint.windowContext || (Waypoint.windowContext = !0, Waypoint.windowContext = new Context(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
	}
	var keyCounter = 0,
		contexts = {},
		Waypoint = window.Waypoint,
		oldWindowLoad = window.onload;
	Context.prototype.add = function(waypoint) {
		var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
		this.waypoints[axis][waypoint.key] = waypoint, this.refresh()
	}, Context.prototype.checkEmpty = function() {
		var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal),
			verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
			isWindow = this.element == this.element.window;
		horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"), delete contexts[this.key])
	}, Context.prototype.createThrottledResizeHandler = function() {
		function resizeHandler() {
			self.handleResize(), self.didResize = !1
		}
		var self = this;
		this.adapter.on("resize.waypoints", function() {
			self.didResize || (self.didResize = !0, Waypoint.requestAnimationFrame(resizeHandler))
		})
	}, Context.prototype.createThrottledScrollHandler = function() {
		function scrollHandler() {
			self.handleScroll(), self.didScroll = !1
		}
		var self = this;
		this.adapter.on("scroll.waypoints", function() {
			self.didScroll && !Waypoint.isTouch || (self.didScroll = !0, Waypoint.requestAnimationFrame(scrollHandler))
		})
	}, Context.prototype.handleResize = function() {
		Waypoint.Context.refreshAll()
	}, Context.prototype.handleScroll = function() {
		var triggeredGroups = {},
			axes = {
				horizontal: {
					newScroll: this.adapter.scrollLeft(),
					oldScroll: this.oldScroll.x,
					forward: "right",
					backward: "left"
				},
				vertical: {
					newScroll: this.adapter.scrollTop(),
					oldScroll: this.oldScroll.y,
					forward: "down",
					backward: "up"
				}
			};
		for (var axisKey in axes) {
			var axis = axes[axisKey],
				isForward = axis.newScroll > axis.oldScroll,
				direction = isForward ? axis.forward : axis.backward;
			for (var waypointKey in this.waypoints[axisKey]) {
				var waypoint = this.waypoints[axisKey][waypointKey];
				if (null !== waypoint.triggerPoint) {
					var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint,
						nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
						crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
						crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
					(crossedForward || crossedBackward) && (waypoint.queueTrigger(direction), triggeredGroups[waypoint.group.id] = waypoint.group)
				}
			}
		}
		for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers();
		this.oldScroll = {
			x: axes.horizontal.newScroll,
			y: axes.vertical.newScroll
		}
	}, Context.prototype.innerHeight = function() {
		return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
	}, Context.prototype.remove = function(waypoint) {
		delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
	}, Context.prototype.innerWidth = function() {
		return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
	}, Context.prototype.destroy = function() {
		var allWaypoints = [];
		for (var axis in this.waypoints)
			for (var waypointKey in this.waypoints[axis]) allWaypoints.push(this.waypoints[axis][waypointKey]);
		for (var i = 0, end = allWaypoints.length; i < end; i++) allWaypoints[i].destroy()
	}, Context.prototype.refresh = function() {
		var axes, isWindow = this.element == this.element.window,
			contextOffset = isWindow ? void 0 : this.adapter.offset(),
			triggeredGroups = {};
		this.handleScroll(), axes = {
			horizontal: {
				contextOffset: isWindow ? 0 : contextOffset.left,
				contextScroll: isWindow ? 0 : this.oldScroll.x,
				contextDimension: this.innerWidth(),
				oldScroll: this.oldScroll.x,
				forward: "right",
				backward: "left",
				offsetProp: "left"
			},
			vertical: {
				contextOffset: isWindow ? 0 : contextOffset.top,
				contextScroll: isWindow ? 0 : this.oldScroll.y,
				contextDimension: this.innerHeight(),
				oldScroll: this.oldScroll.y,
				forward: "down",
				backward: "up",
				offsetProp: "top"
			}
		};
		for (var axisKey in axes) {
			var axis = axes[axisKey];
			for (var waypointKey in this.waypoints[axisKey]) {
				var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey],
					adjustment = waypoint.options.offset,
					oldTriggerPoint = waypoint.triggerPoint,
					elementOffset = 0,
					freshWaypoint = null == oldTriggerPoint;
				waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]), "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment), waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))), contextModifier = axis.contextScroll - axis.contextOffset, waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment), wasBeforeScroll = oldTriggerPoint < axis.oldScroll, nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll, triggeredBackward = wasBeforeScroll && nowAfterScroll, triggeredForward = !wasBeforeScroll && !nowAfterScroll, !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward), triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group)
			}
		}
		return Waypoint.requestAnimationFrame(function() {
			for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers()
		}), this
	}, Context.findOrCreateByElement = function(element) {
		return Context.findByElement(element) || new Context(element)
	}, Context.refreshAll = function() {
		for (var contextId in contexts) contexts[contextId].refresh()
	}, Context.findByElement = function(element) {
		return contexts[element.waypointContextKey]
	}, window.onload = function() {
		oldWindowLoad && oldWindowLoad(), Context.refreshAll()
	}, Waypoint.requestAnimationFrame = function(callback) {
		var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
		requestFn.call(window, callback)
	}, Waypoint.Context = Context
}(),
function() {
	"use strict";

	function byTriggerPoint(a, b) {
		return a.triggerPoint - b.triggerPoint
	}

	function byReverseTriggerPoint(a, b) {
		return b.triggerPoint - a.triggerPoint
	}

	function Group(options) {
		this.name = options.name, this.axis = options.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), groups[this.axis][this.name] = this
	}
	var groups = {
			vertical: {},
			horizontal: {}
		},
		Waypoint = window.Waypoint;
	Group.prototype.add = function(waypoint) {
		this.waypoints.push(waypoint)
	}, Group.prototype.clearTriggerQueues = function() {
		this.triggerQueues = {
			up: [],
			down: [],
			left: [],
			right: []
		}
	}, Group.prototype.flushTriggers = function() {
		for (var direction in this.triggerQueues) {
			var waypoints = this.triggerQueues[direction],
				reverse = "up" === direction || "left" === direction;
			waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
			for (var i = 0, end = waypoints.length; i < end; i += 1) {
				var waypoint = waypoints[i];
				(waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
			}
		}
		this.clearTriggerQueues()
	}, Group.prototype.next = function(waypoint) {
		this.waypoints.sort(byTriggerPoint);
		var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
			isLast = index === this.waypoints.length - 1;
		return isLast ? null : this.waypoints[index + 1]
	}, Group.prototype.previous = function(waypoint) {
		this.waypoints.sort(byTriggerPoint);
		var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
		return index ? this.waypoints[index - 1] : null
	}, Group.prototype.queueTrigger = function(waypoint, direction) {
		this.triggerQueues[direction].push(waypoint)
	}, Group.prototype.remove = function(waypoint) {
		var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
		index > -1 && this.waypoints.splice(index, 1)
	}, Group.prototype.first = function() {
		return this.waypoints[0]
	}, Group.prototype.last = function() {
		return this.waypoints[this.waypoints.length - 1]
	}, Group.findOrCreate = function(options) {
		return groups[options.axis][options.name] || new Group(options)
	}, Waypoint.Group = Group
}(),
function() {
	"use strict";

	function JQueryAdapter(element) {
		this.$element = $(element)
	}
	var $ = window.jQuery,
		Waypoint = window.Waypoint;
	$.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
		JQueryAdapter.prototype[method] = function() {
			var args = Array.prototype.slice.call(arguments);
			return this.$element[method].apply(this.$element, args)
		}
	}), $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
		JQueryAdapter[method] = $[method]
	}), Waypoint.adapters.push({
		name: "jquery",
		Adapter: JQueryAdapter
	}), Waypoint.Adapter = JQueryAdapter
}(),
function() {
	"use strict";

	function createExtension(framework) {
		return function() {
			var waypoints = [],
				overrides = arguments[0];
			return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]), overrides.handler = arguments[0]), this.each(function() {
				var options = framework.extend({}, overrides, {
					element: this
				});
				"string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]), waypoints.push(new Waypoint(options))
			}), waypoints
		}
	}
	var Waypoint = window.Waypoint;
	window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
	"use strict";
	var f = "undefined" == typeof document ? {
			body: {},
			addEventListener: function() {},
			removeEventListener: function() {},
			activeElement: {
				blur: function() {},
				nodeName: ""
			},
			querySelector: function() {
				return null
			},
			querySelectorAll: function() {
				return []
			},
			getElementById: function() {
				return null
			},
			createEvent: function() {
				return {
					initEvent: function() {}
				}
			},
			createElement: function() {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function() {},
					getElementsByTagName: function() {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		J = "undefined" == typeof window ? {
			document: f,
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			CustomEvent: function() {
				return this
			},
			addEventListener: function() {},
			removeEventListener: function() {},
			getComputedStyle: function() {
				return {
					getPropertyValue: function() {
						return ""
					}
				}
			},
			Image: function() {},
			Date: function() {},
			screen: {},
			setTimeout: function() {},
			clearTimeout: function() {}
		} : window,
		l = function(e) {
			for (var t = 0; t < e.length; t += 1) this[t] = e[t];
			return this.length = e.length, this
		};

	function L(e, t) {
		var a = [],
			i = 0;
		if (e && !t && e instanceof l) return e;
		if (e)
			if ("string" == typeof e) {
				var s, r, n = e.trim();
				if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
					var o = "div";
					for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
				} else
					for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
			} else if (e.nodeType || e === J || e === f) a.push(e);
		else if (0 < e.length && e[0].nodeType)
			for (i = 0; i < e.length; i += 1) a.push(e[i]);
		return new l(a)
	}

	function r(e) {
		for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
		return t
	}
	L.fn = l.prototype, L.Class = l, L.Dom7 = l;
	var t = {
		addClass: function(e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
			return this
		},
		removeClass: function(e) {
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
			return this
		},
		hasClass: function(e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function(e) {
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
			return this
		},
		attr: function(e, t) {
			var a = arguments;
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
			for (var i = 0; i < this.length; i += 1)
				if (2 === a.length) this[i].setAttribute(e, t);
				else
					for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
			return this
		},
		removeAttr: function(e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function(e, t) {
			var a;
			if (void 0 !== t) {
				for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
				return this
			}
			if (a = this[0]) {
				if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
				var s = a.getAttribute("data-" + e);
				return s || void 0
			}
		},
		transform: function(e) {
			for (var t = 0; t < this.length; t += 1) {
				var a = this[t].style;
				a.webkitTransform = e, a.transform = e
			}
			return this
		},
		transition: function(e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var a = this[t].style;
				a.webkitTransitionDuration = e, a.transitionDuration = e
			}
			return this
		},
		on: function() {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			var i = t[0],
				r = t[1],
				n = t[2],
				s = t[3];

			function o(e) {
				var t = e.target;
				if (t) {
					var a = e.target.dom7EventData || [];
					if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
					else
						for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
				}
			}

			function l(e) {
				var t = e && e.target && e.target.dom7EventData || [];
				t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
			}
			"function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
			for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
				var u = this[c];
				if (r)
					for (d = 0; d < p.length; d += 1) {
						var h = p[d];
						u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
							listener: n,
							proxyListener: o
						}), u.addEventListener(h, o, s)
					} else
						for (d = 0; d < p.length; d += 1) {
							var v = p[d];
							u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
								listener: n,
								proxyListener: l
							}), u.addEventListener(v, l, s)
						}
			}
			return this
		},
		off: function() {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			var i = t[0],
				s = t[1],
				r = t[2],
				n = t[3];
			"function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
			for (var o = i.split(" "), l = 0; l < o.length; l += 1)
				for (var d = o[l], p = 0; p < this.length; p += 1) {
					var c = this[p],
						u = void 0;
					if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
						for (var h = u.length - 1; 0 <= h; h -= 1) {
							var v = u[h];
							r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
						}
				}
			return this
		},
		trigger: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
				for (var r = a[s], n = 0; n < this.length; n += 1) {
					var o = this[n],
						l = void 0;
					try {
						l = new J.CustomEvent(r, {
							detail: i,
							bubbles: !0,
							cancelable: !0
						})
					} catch (e) {
						(l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
					}
					o.dom7EventData = e.filter(function(e, t) {
						return 0 < t
					}), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
				}
			return this
		},
		transitionEnd: function(t) {
			var a, i = ["webkitTransitionEnd", "transitionend"],
				s = this;

			function r(e) {
				if (e.target === this)
					for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
			}
			if (t)
				for (a = 0; a < i.length; a += 1) s.on(i[a], r);
			return this
		},
		outerWidth: function(e) {
			if (0 < this.length) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function(e) {
			if (0 < this.length) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function() {
			if (0 < this.length) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					a = f.body,
					i = e.clientTop || a.clientTop || 0,
					s = e.clientLeft || a.clientLeft || 0,
					r = e === J ? J.scrollY : e.scrollTop,
					n = e === J ? J.scrollX : e.scrollLeft;
				return {
					top: t.top + r - i,
					left: t.left + n - s
				}
			}
			return null
		},
		css: function(e, t) {
			var a;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1)
						for (var i in e) this[a].style[i] = e[i];
					return this
				}
				if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
				return this
			}
			return this
		},
		each: function(e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		},
		html: function(e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function(e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function(e) {
			var t, a, i = this[0];
			if (!i || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (i.matches) return i.matches(e);
				if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
				if (i.msMatchesSelector) return i.msMatchesSelector(e);
				for (t = L(e), a = 0; a < t.length; a += 1)
					if (t[a] === i) return !0;
				return !1
			}
			if (e === f) return i === f;
			if (e === J) return i === J;
			if (e.nodeType || e instanceof l) {
				for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
					if (t[a] === i) return !0;
				return !1
			}
			return !1
		},
		index: function() {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function(e) {
			if (void 0 === e) return this;
			var t, a = this.length;
			return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
		},
		append: function() {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			for (var i = 0; i < t.length; i += 1) {
				e = t[i];
				for (var s = 0; s < this.length; s += 1)
					if ("string" == typeof e) {
						var r = f.createElement("div");
						for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
					} else if (e instanceof l)
					for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
				else this[s].appendChild(e)
			}
			return this
		},
		prepend: function(e) {
			var t, a;
			for (t = 0; t < this.length; t += 1)
				if ("string" == typeof e) {
					var i = f.createElement("div");
					for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
				} else if (e instanceof l)
				for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
			else this[t].insertBefore(e, this[t].childNodes[0]);
			return this
		},
		next: function(e) {
			return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
		},
		nextAll: function(e) {
			var t = [],
				a = this[0];
			if (!a) return new l([]);
			for (; a.nextElementSibling;) {
				var i = a.nextElementSibling;
				e ? L(i).is(e) && t.push(i) : t.push(i), a = i
			}
			return new l(t)
		},
		prev: function(e) {
			if (0 < this.length) {
				var t = this[0];
				return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
			}
			return new l([])
		},
		prevAll: function(e) {
			var t = [],
				a = this[0];
			if (!a) return new l([]);
			for (; a.previousElementSibling;) {
				var i = a.previousElementSibling;
				e ? L(i).is(e) && t.push(i) : t.push(i), a = i
			}
			return new l(t)
		},
		parent: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
			return L(r(t))
		},
		parents: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
			return L(r(t))
		},
		closest: function(e) {
			var t = this;
			return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
			return new l(t)
		},
		children: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
			return new l(r(t))
		},
		remove: function() {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var a, i;
			for (a = 0; a < e.length; a += 1) {
				var s = L(e[a]);
				for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
			}
			return this
		},
		styles: function() {
			return this[0] ? J.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(t).forEach(function(e) {
		L.fn[e] = t[e]
	});
	var e, a, i, ee = {
			deleteProps: function(e) {
				var t = e;
				Object.keys(t).forEach(function(e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				})
			},
			nextTick: function(e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function() {
				return Date.now()
			},
			getTranslate: function(e, t) {
				var a, i, s;
				void 0 === t && (t = "x");
				var r = J.getComputedStyle(e, null);
				return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
					return e.replace(",", ".")
				}).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
			},
			parseUrlQuery: function(e) {
				var t, a, i, s, r = {},
					n = e || J.location.href;
				if ("string" == typeof n && n.length)
					for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
							return "" !== e
						})).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
				return r
			},
			isObject: function(e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function() {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
					var s = e[i];
					if (null != s)
						for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
							var l = r[n],
								d = Object.getOwnPropertyDescriptor(s, l);
							void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
						}
				}
				return a
			}
		},
		te = (i = f.createElement("div"), {
			touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
			pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator),
			prefixedPointerEvents: !!J.navigator.msPointerEnabled,
			transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
			transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
			flexbox: function() {
				for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
					if (t[a] in e) return !0;
				return !1
			}(),
			observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
			passiveListener: function() {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function() {
							e = !0
						}
					});
					J.addEventListener("testPassiveListener", null, t)
				} catch (e) {}
				return e
			}(),
			gestures: "ongesturestart" in J
		}),
		s = function(e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
				t.on(e, t.params.on[e])
			})
		},
		n = {
			components: {
				configurable: !0
			}
		};
	s.prototype.on = function(e, t, a) {
		var i = this;
		if ("function" != typeof t) return i;
		var s = a ? "unshift" : "push";
		return e.split(" ").forEach(function(e) {
			i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
		}), i
	}, s.prototype.once = function(i, s, e) {
		var r = this;
		if ("function" != typeof s) return r;
		return r.on(i, function e() {
			for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
			s.apply(r, t), r.off(i, e)
		}, e)
	}, s.prototype.off = function(e, i) {
		var s = this;
		return s.eventsListeners && e.split(" ").forEach(function(a) {
			void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
				e === i && s.eventsListeners[a].splice(t, 1)
			})
		}), s
	}, s.prototype.emit = function() {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var a, i, s, r = this;
		return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
			if (r.eventsListeners && r.eventsListeners[e]) {
				var t = [];
				r.eventsListeners[e].forEach(function(e) {
					t.push(e)
				}), t.forEach(function(e) {
					e.apply(s, i)
				})
			}
		})), r
	}, s.prototype.useModulesParams = function(a) {
		var i = this;
		i.modules && Object.keys(i.modules).forEach(function(e) {
			var t = i.modules[e];
			t.params && ee.extend(a, t.params)
		})
	}, s.prototype.useModules = function(i) {
		void 0 === i && (i = {});
		var s = this;
		s.modules && Object.keys(s.modules).forEach(function(e) {
			var a = s.modules[e],
				t = i[e] || {};
			a.instance && Object.keys(a.instance).forEach(function(e) {
				var t = a.instance[e];
				s[e] = "function" == typeof t ? t.bind(s) : t
			}), a.on && s.on && Object.keys(a.on).forEach(function(e) {
				s.on(e, a.on[e])
			}), a.create && a.create.bind(s)(t)
		})
	}, n.components.set = function(e) {
		this.use && this.use(e)
	}, s.installModule = function(t) {
		for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
		var i = this;
		i.prototype.modules || (i.prototype.modules = {});
		var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
		return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
			i.prototype[e] = t.proto[e]
		}), t.static && Object.keys(t.static).forEach(function(e) {
			i[e] = t.static[e]
		}), t.install && t.install.apply(i, e), i
	}, s.use = function(e) {
		for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
		var i = this;
		return Array.isArray(e) ? (e.forEach(function(e) {
			return i.installModule(e)
		}), i) : i.installModule.apply(i, [e].concat(t))
	}, Object.defineProperties(s, n);
	var o = {
		updateSize: function() {
			var e, t, a = this,
				i = a.$el;
			e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
				width: e,
				height: t,
				size: a.isHorizontal() ? e : t
			}))
		},
		updateSlides: function() {
			var e = this,
				t = e.params,
				a = e.$wrapperEl,
				i = e.size,
				s = e.rtlTranslate,
				r = e.wrongRTL,
				n = e.virtual && t.virtual.enabled,
				o = n ? e.virtual.slides.length : e.slides.length,
				l = a.children("." + e.params.slideClass),
				d = n ? e.virtual.slides.length : l.length,
				p = [],
				c = [],
				u = [],
				h = t.slidesOffsetBefore;
			"function" == typeof h && (h = t.slidesOffsetBefore.call(e));
			var v = t.slidesOffsetAfter;
			"function" == typeof v && (v = t.slidesOffsetAfter.call(e));
			var f = e.snapGrid.length,
				m = e.snapGrid.length,
				g = t.spaceBetween,
				b = -h,
				w = 0,
				y = 0;
			if (void 0 !== i) {
				var x, T;
				"string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
					marginLeft: "",
					marginTop: ""
				}) : l.css({
					marginRight: "",
					marginBottom: ""
				}), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
				for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), k = 0; k < d; k += 1) {
					T = 0;
					var P = l.eq(k);
					if (1 < t.slidesPerColumn) {
						var z = void 0,
							$ = void 0,
							L = void 0;
						"column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), z = $ + L * x / S, P.css({
							"-webkit-box-ordinal-group": z,
							"-moz-box-ordinal-group": z,
							"-ms-flex-order": z,
							"-webkit-order": z,
							order: z
						})) : $ = k - (L = Math.floor(k / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
					}
					if ("none" !== P.css("display")) {
						if ("auto" === t.slidesPerView) {
							var I = J.getComputedStyle(P[0], null),
								D = P[0].style.transform,
								O = P[0].style.webkitTransform;
							if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
							else if (e.isHorizontal()) {
								var A = parseFloat(I.getPropertyValue("width")),
									N = parseFloat(I.getPropertyValue("padding-left")),
									H = parseFloat(I.getPropertyValue("padding-right")),
									G = parseFloat(I.getPropertyValue("margin-left")),
									B = parseFloat(I.getPropertyValue("margin-right")),
									X = I.getPropertyValue("box-sizing");
								T = X && "border-box" === X ? A + G + B : A + N + H + G + B
							} else {
								var Y = parseFloat(I.getPropertyValue("height")),
									V = parseFloat(I.getPropertyValue("padding-top")),
									F = parseFloat(I.getPropertyValue("padding-bottom")),
									R = parseFloat(I.getPropertyValue("margin-top")),
									q = parseFloat(I.getPropertyValue("margin-bottom")),
									W = I.getPropertyValue("box-sizing");
								T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
							}
							D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
						} else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
						l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
					}
				}
				if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
						width: e.virtualSize + t.spaceBetween + "px"
					}), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
						width: e.virtualSize + t.spaceBetween + "px"
					}) : a.css({
						height: e.virtualSize + t.spaceBetween + "px"
					})), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
						width: e.virtualSize + t.spaceBetween + "px"
					}) : a.css({
						height: e.virtualSize + t.spaceBetween + "px"
					}), t.centeredSlides)) {
					E = [];
					for (var j = 0; j < p.length; j += 1) {
						var U = p[j];
						t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
					}
					p = E
				}
				if (!t.centeredSlides) {
					E = [];
					for (var K = 0; K < p.length; K += 1) {
						var _ = p[K];
						t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
					}
					p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
				}
				if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
						marginLeft: g + "px"
					}) : l.css({
						marginRight: g + "px"
					}) : l.css({
						marginBottom: g + "px"
					})), t.centerInsufficientSlides) {
					var Z = 0;
					if (u.forEach(function(e) {
							Z += e + (t.spaceBetween ? t.spaceBetween : 0)
						}), (Z -= t.spaceBetween) < i) {
						var Q = (i - Z) / 2;
						p.forEach(function(e, t) {
							p[t] = e - Q
						}), c.forEach(function(e, t) {
							c[t] = e + Q
						})
					}
				}
				ee.extend(e, {
					slides: l,
					snapGrid: p,
					slidesGrid: c,
					slidesSizesGrid: u
				}), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
			}
		},
		updateAutoHeight: function(e) {
			var t, a = this,
				i = [],
				s = 0;
			if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
				for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
					var r = a.activeIndex + t;
					if (r > a.slides.length) break;
					i.push(a.slides.eq(r)[0])
				} else i.push(a.slides.eq(a.activeIndex)[0]);
			for (t = 0; t < i.length; t += 1)
				if (void 0 !== i[t]) {
					var n = i[t].offsetHeight;
					s = s < n ? n : s
				}
			s && a.$wrapperEl.css("height", s + "px")
		},
		updateSlidesOffset: function() {
			for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
		},
		updateSlidesProgress: function(e) {
			void 0 === e && (e = this && this.translate || 0);
			var t = this,
				a = t.params,
				i = t.slides,
				s = t.rtlTranslate;
			if (0 !== i.length) {
				void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
				var r = -e;
				s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
				for (var n = 0; n < i.length; n += 1) {
					var o = i[n],
						l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
					if (a.watchSlidesVisibility) {
						var d = -(r - o.swiperSlideOffset),
							p = d + t.slidesSizesGrid[n];
						(0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
					}
					o.progress = s ? -l : l
				}
				t.visibleSlides = L(t.visibleSlides)
			}
		},
		updateProgress: function(e) {
			void 0 === e && (e = this && this.translate || 0);
			var t = this,
				a = t.params,
				i = t.maxTranslate() - t.minTranslate(),
				s = t.progress,
				r = t.isBeginning,
				n = t.isEnd,
				o = r,
				l = n;
			0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
				progress: s,
				isBeginning: r,
				isEnd: n
			}), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
		},
		updateSlidesClasses: function() {
			var e, t = this,
				a = t.slides,
				i = t.params,
				s = t.$wrapperEl,
				r = t.activeIndex,
				n = t.realIndex,
				o = t.virtual && i.virtual.enabled;
			a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
			var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
			i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
			var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
			i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
		},
		updateActiveIndex: function(e) {
			var t, a = this,
				i = a.rtlTranslate ? a.translate : -a.translate,
				s = a.slidesGrid,
				r = a.snapGrid,
				n = a.params,
				o = a.activeIndex,
				l = a.realIndex,
				d = a.snapIndex,
				p = e;
			if (void 0 === p) {
				for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
				n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
			}
			if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
				var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
				ee.extend(a, {
					snapIndex: t,
					realIndex: u,
					previousIndex: o,
					activeIndex: p
				}), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
			} else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
		},
		updateClickedSlide: function(e) {
			var t = this,
				a = t.params,
				i = L(e.target).closest("." + a.slideClass)[0],
				s = !1;
			if (i)
				for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
			if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
			t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
		}
	};
	var d = {
		getTranslate: function(e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			var t = this.params,
				a = this.rtlTranslate,
				i = this.translate,
				s = this.$wrapperEl;
			if (t.virtualTranslate) return a ? -i : i;
			var r = ee.getTranslate(s[0], e);
			return a && (r = -r), r || 0
		},
		setTranslate: function(e, t) {
			var a = this,
				i = a.rtlTranslate,
				s = a.params,
				r = a.$wrapperEl,
				n = a.progress,
				o = 0,
				l = 0;
			a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
			var d = a.maxTranslate() - a.minTranslate();
			(0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
		},
		minTranslate: function() {
			return -this.snapGrid[0]
		},
		maxTranslate: function() {
			return -this.snapGrid[this.snapGrid.length - 1]
		}
	};
	var p = {
		setTransition: function(e, t) {
			this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
		},
		transitionStart: function(e, t) {
			void 0 === e && (e = !0);
			var a = this,
				i = a.activeIndex,
				s = a.params,
				r = a.previousIndex;
			s.autoHeight && a.updateAutoHeight();
			var n = t;
			if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
				if ("reset" === n) return void a.emit("slideResetTransitionStart");
				a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
			}
		},
		transitionEnd: function(e, t) {
			void 0 === e && (e = !0);
			var a = this,
				i = a.activeIndex,
				s = a.previousIndex;
			a.animating = !1, a.setTransition(0);
			var r = t;
			if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
				if ("reset" === r) return void a.emit("slideResetTransitionEnd");
				a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
			}
		}
	};
	var c = {
		slideTo: function(e, t, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
			var s = this,
				r = e;
			r < 0 && (r = 0);
			var n = s.params,
				o = s.snapGrid,
				l = s.slidesGrid,
				d = s.previousIndex,
				p = s.activeIndex,
				c = s.rtlTranslate;
			if (s.animating && n.preventInteractionOnTransition) return !1;
			var u = Math.floor(r / n.slidesPerGroup);
			u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
			var h, v = -o[u];
			if (s.updateProgress(v), n.normalizeSlideIndex)
				for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
			if (s.initialized && r !== p) {
				if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
				if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
			}
			return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
				s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
			}), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
		},
		slideToLoop: function(e, t, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
			var s = e;
			return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
		},
		slideNext: function(e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var i = this,
				s = i.params,
				r = i.animating;
			return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
		},
		slidePrev: function(e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var i = this,
				s = i.params,
				r = i.animating,
				n = i.snapGrid,
				o = i.slidesGrid,
				l = i.rtlTranslate;
			if (s.loop) {
				if (r) return !1;
				i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
			}

			function d(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
			}
			var p, c = d(l ? i.translate : -i.translate),
				u = n.map(function(e) {
					return d(e)
				}),
				h = (o.map(function(e) {
					return d(e)
				}), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
			return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
		},
		slideReset: function(e, t, a) {
			return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
		},
		slideToClosest: function(e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var i = this,
				s = i.activeIndex,
				r = Math.floor(s / i.params.slidesPerGroup);
			if (r < i.snapGrid.length - 1) {
				var n = i.rtlTranslate ? i.translate : -i.translate,
					o = i.snapGrid[r];
				(i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
			}
			return i.slideTo(s, e, t, a)
		},
		slideToClickedSlide: function() {
			var e, t = this,
				a = t.params,
				i = t.$wrapperEl,
				s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
				r = t.clickedIndex;
			if (a.loop) {
				if (t.animating) return;
				e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
					t.slideTo(r)
				})) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
					t.slideTo(r)
				})) : t.slideTo(r)
			} else t.slideTo(r)
		}
	};
	var u = {
		loopCreate: function() {
			var i = this,
				e = i.params,
				t = i.$wrapperEl;
			t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
			var s = t.children("." + e.slideClass);
			if (e.loopFillGroupWithBlank) {
				var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
				if (a !== e.slidesPerGroup) {
					for (var r = 0; r < a; r += 1) {
						var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
						t.append(n)
					}
					s = t.children("." + e.slideClass)
				}
			}
			"auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
			var o = [],
				l = [];
			s.each(function(e, t) {
				var a = L(t);
				e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
			});
			for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
			for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
		},
		loopFix: function() {
			var e, t = this,
				a = t.params,
				i = t.activeIndex,
				s = t.slides,
				r = t.loopedSlides,
				n = t.allowSlidePrev,
				o = t.allowSlideNext,
				l = t.snapGrid,
				d = t.rtlTranslate;
			t.allowSlidePrev = !0, t.allowSlideNext = !0;
			var p = -l[i] - t.getTranslate();
			i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
			t.allowSlidePrev = n, t.allowSlideNext = o
		},
		loopDestroy: function() {
			var e = this.$wrapperEl,
				t = this.params,
				a = this.slides;
			e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
		}
	};
	var h = {
		setGrabCursor: function(e) {
			if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
				var t = this.el;
				t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
			}
		},
		unsetGrabCursor: function() {
			te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
		}
	};
	var v = {
			appendSlide: function(e) {
				var t = this,
					a = t.$wrapperEl,
					i = t.params;
				if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
					for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
				else a.append(e);
				i.loop && t.loopCreate(), i.observer && te.observer || t.update()
			},
			prependSlide: function(e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && t.loopDestroy();
				var r = s + 1;
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
					r = s + e.length
				} else i.prepend(e);
				a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
			},
			addSlide: function(e, t) {
				var a = this,
					i = a.$wrapperEl,
					s = a.params,
					r = a.activeIndex;
				s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
				var n = a.slides.length;
				if (e <= 0) a.prependSlide(t);
				else if (n <= e) a.appendSlide(t);
				else {
					for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
						var p = a.slides.eq(d);
						p.remove(), l.unshift(p)
					}
					if ("object" == typeof t && "length" in t) {
						for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
						o = e < r ? r + t.length : r
					} else i.append(t);
					for (var u = 0; u < l.length; u += 1) i.append(l[u]);
					s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
				}
			},
			removeSlide: function(e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
				var r, n = s;
				if ("object" == typeof e && "length" in e) {
					for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
					n = Math.max(n, 0)
				} else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
				a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
			},
			removeAllSlides: function() {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e)
			}
		},
		m = function() {
			var e = J.navigator.userAgent,
				t = {
					ios: !1,
					android: !1,
					androidChrome: !1,
					desktop: !1,
					windows: !1,
					iphone: !1,
					ipod: !1,
					ipad: !1,
					cordova: J.cordova || J.phonegap,
					phonegap: J.cordova || J.phonegap
				},
				a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
				i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				s = e.match(/(iPad).*OS\s([\d_]+)/),
				r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
				var o = t.osVersion.split("."),
					l = f.querySelector('meta[name="viewport"]');
				t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
			}
			return t.pixelRatio = J.devicePixelRatio || 1, t
		}();

	function g() {
		var e = this,
			t = e.params,
			a = e.el;
		if (!a || 0 !== a.offsetWidth) {
			t.breakpoints && e.setBreakpoint();
			var i = e.allowSlideNext,
				s = e.allowSlidePrev,
				r = e.snapGrid;
			if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
				var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
				e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
			} else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
			e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
		}
	}
	var b = {
		attachEvents: function() {
			var e = this,
				t = e.params,
				a = e.touchEvents,
				i = e.el,
				s = e.wrapperEl;
			e.onTouchStart = function(e) {
				var t = this,
					a = t.touchEventsData,
					i = t.params,
					s = t.touches;
				if (!t.animating || !i.preventInteractionOnTransition) {
					var r = e;
					if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved))
						if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
						else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
						s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
						var n = s.currentX,
							o = s.currentY,
							l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
							d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
						if (!l || !(n <= d || n >= J.screen.width - d)) {
							if (ee.extend(a, {
									isTouched: !0,
									isMoved: !1,
									allowTouchCallbacks: !0,
									isScrolling: void 0,
									startMoving: void 0
								}), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
								var p = !0;
								L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
								var c = p && t.allowTouchMove && i.touchStartPreventDefault;
								(i.touchStartForcePreventDefault || c) && r.preventDefault()
							}
							t.emit("touchStart", r)
						}
					}
				}
			}.bind(e), e.onTouchMove = function(e) {
				var t = this,
					a = t.touchEventsData,
					i = t.params,
					s = t.touches,
					r = t.rtlTranslate,
					n = e;
				if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
					if (!a.isTouchEvent || "mousemove" !== n.type) {
						var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
							l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
						if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
						if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (ee.extend(s, {
							startX: o,
							startY: l,
							currentX: o,
							currentY: l
						}), a.touchStartTime = ee.now()));
						if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
							if (t.isVertical()) {
								if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
							} else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
						if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
						if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
							s.currentX = o, s.currentY = l;
							var d, p = s.currentX - s.startX,
								c = s.currentY - s.startY;
							if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
								if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
								else if (a.startMoving) {
								t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
								var u = t.isHorizontal() ? p : c;
								s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
								var h = !0,
									v = i.resistanceRatio;
								if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
									if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
									if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
								}
								i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
									position: s[t.isHorizontal() ? "startX" : "startY"],
									time: a.touchStartTime
								}), a.velocities.push({
									position: s[t.isHorizontal() ? "currentX" : "currentY"],
									time: ee.now()
								})), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
							}
						}
					}
				} else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
			}.bind(e), e.onTouchEnd = function(e) {
				var t = this,
					a = t.touchEventsData,
					i = t.params,
					s = t.touches,
					r = t.rtlTranslate,
					n = t.$wrapperEl,
					o = t.slidesGrid,
					l = t.snapGrid,
					d = e;
				if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
				i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
				var p, c = ee.now(),
					u = c - a.touchStartTime;
				if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function() {
						t && !t.destroyed && t.emit("click", d)
					}, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function() {
						t.destroyed || (t.allowClick = !0)
					}), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
				if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
					if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
					if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
					if (i.freeModeMomentum) {
						if (1 < a.velocities.length) {
							var h = a.velocities.pop(),
								v = a.velocities.pop(),
								f = h.position - v.position,
								m = h.time - v.time;
							t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
						} else t.velocity = 0;
						t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
						var g = 1e3 * i.freeModeMomentumRatio,
							b = t.velocity * g,
							w = t.translate + b;
						r && (w = -w);
						var y, x, T = !1,
							E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
						if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
						else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
						else if (i.freeModeSticky) {
							for (var S, C = 0; C < l.length; C += 1)
								if (l[C] > -w) {
									S = C;
									break
								}
							w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
						}
						if (x && t.once("transitionEnd", function() {
								t.loopFix()
							}), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
						else if (i.freeModeSticky) return void t.slideToClosest();
						i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
							t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function() {
								t && !t.destroyed && t.transitionEnd()
							}))
						})) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
							t && !t.destroyed && t.transitionEnd()
						}))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
					} else if (i.freeModeSticky) return void t.slideToClosest();
					(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
				} else {
					for (var M = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (k = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, k = o[o.length - 1] - o[o.length - 2]);
					var z = (p - o[M]) / k;
					if (u > i.longSwipesMs) {
						if (!i.longSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
					} else {
						if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
					}
				}
			}.bind(e), e.onClick = function(e) {
				this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
			}.bind(e);
			var r = "container" === t.touchEventsTarget ? i : s,
				n = !!t.nested;
			if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
				if (te.touch) {
					var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
						passive: !1,
						capture: n
					} : n), r.addEventListener(a.end, e.onTouchEnd, o)
				}(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
			} else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
			(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
		},
		detachEvents: function() {
			var e = this,
				t = e.params,
				a = e.touchEvents,
				i = e.el,
				s = e.wrapperEl,
				r = "container" === t.touchEventsTarget ? i : s,
				n = !!t.nested;
			if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
				if (te.touch) {
					var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
				}(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
			} else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
			(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
		}
	};
	var w, y = {
			setBreakpoint: function() {
				var e = this,
					t = e.activeIndex,
					a = e.initialized,
					i = e.loopedSlides;
				void 0 === i && (i = 0);
				var s = e.params,
					r = s.breakpoints;
				if (r && (!r || 0 !== Object.keys(r).length)) {
					var n = e.getBreakpoint(r);
					if (n && e.currentBreakpoint !== n) {
						var o = n in r ? r[n] : void 0;
						o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
							var t = o[e];
							void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
						});
						var l = o || e.originalParams,
							d = s.loop && l.slidesPerView !== s.slidesPerView;
						ee.extend(e.params, l), ee.extend(e, {
							allowTouchMove: e.params.allowTouchMove,
							allowSlideNext: e.params.allowSlideNext,
							allowSlidePrev: e.params.allowSlidePrev
						}), e.currentBreakpoint = n, d && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
					}
				}
			},
			getBreakpoint: function(e) {
				if (e) {
					var t = !1,
						a = [];
					Object.keys(e).forEach(function(e) {
						a.push(e)
					}), a.sort(function(e, t) {
						return parseInt(e, 10) - parseInt(t, 10)
					});
					for (var i = 0; i < a.length; i += 1) {
						var s = a[i];
						this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
					}
					return t || "max"
				}
			}
		},
		I = {
			isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
			isEdge: !!J.navigator.userAgent.match(/Edge/g),
			isSafari: (w = J.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
			isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
		};
	var x = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			breakpointsInverse: !1,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			centeredSlides: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !0,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		T = {
			update: o,
			translate: d,
			transition: p,
			slide: c,
			loop: u,
			grabCursor: h,
			manipulation: v,
			events: b,
			breakpoints: y,
			checkOverflow: {
				checkOverflow: function() {
					var e = this,
						t = e.isLocked;
					e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
				}
			},
			classes: {
				addClasses: function() {
					var t = this.classNames,
						a = this.params,
						e = this.rtl,
						i = this.$el,
						s = [];
					s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function(e) {
						t.push(a.containerModifierClass + e)
					}), i.addClass(t.join(" "))
				},
				removeClasses: function() {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function(e, t, a, i, s, r) {
					var n;

					function o() {
						r && r()
					}
					e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
				},
				preloadImages: function() {
					var e = this;

					function t() {
						null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var a = 0; a < e.imagesToLoad.length; a += 1) {
						var i = e.imagesToLoad[a];
						e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
					}
				}
			}
		},
		E = {},
		S = function(u) {
			function h() {
				for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
				1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function(t) {
					Object.keys(T[t]).forEach(function(e) {
						h.prototype[e] || (h.prototype[e] = T[t][e])
					})
				});
				var r = this;
				void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function(e) {
					var t = r.modules[e];
					if (t.params) {
						var a = Object.keys(t.params)[0],
							i = t.params[a];
						if ("object" != typeof i || null === i) return;
						if (!(a in s && "enabled" in i)) return;
						!0 === s[a] && (s[a] = {
							enabled: !0
						}), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
							enabled: !1
						})
					}
				});
				var n = ee.extend({}, x);
				r.useModulesParams(n), r.params = ee.extend({}, n, E, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
				var o = (r.$ = L)(r.params.el);
				if (t = o[0]) {
					if (1 < o.length) {
						var l = [];
						return o.each(function(e, t) {
							var a = ee.extend({}, s, {
								el: t
							});
							l.push(new h(a))
						}), l
					}
					t.swiper = r, o.data("swiper", r);
					var d, p, c = o.children("." + r.params.wrapperClass);
					return ee.extend(r, {
						$el: o,
						el: t,
						$wrapperEl: c,
						wrapperEl: c[0],
						classNames: [],
						slides: L(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function() {
							return "horizontal" === r.params.direction
						},
						isVertical: function() {
							return "vertical" === r.params.direction
						},
						rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
						rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
						wrongRTL: "-webkit-box" === c.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: r.params.allowSlideNext,
						allowSlidePrev: r.params.allowSlidePrev,
						touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
							start: d[0],
							move: d[1],
							end: d[2]
						}, r.touchEventsDesktop = {
							start: p[0],
							move: p[1],
							end: p[2]
						}, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video",
							lastClickTime: ee.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: r.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), r.useModules(), r.params.init && r.init(), r
				}
			}
			u && (h.__proto__ = u);
			var e = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
				var e = this,
					t = e.params,
					a = e.slides,
					i = e.slidesGrid,
					s = e.size,
					r = e.activeIndex,
					n = 1;
				if (t.centeredSlides) {
					for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
					for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
				} else
					for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
				return n
			}, h.prototype.update = function() {
				var a = this;
				if (a && !a.destroyed) {
					var e = a.snapGrid,
						t = a.params;
					t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
				}

				function i() {
					var e = a.rtlTranslate ? -1 * a.translate : a.translate,
						t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
					a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
				}
			}, h.prototype.init = function() {
				var e = this;
				e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
			}, h.prototype.destroy = function(e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var a = this,
					i = a.params,
					s = a.$el,
					r = a.$wrapperEl,
					n = a.slides;
				return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
					a.off(e)
				}), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
			}, h.extendDefaults = function(e) {
				ee.extend(E, e)
			}, e.extendedDefaults.get = function() {
				return E
			}, e.defaults.get = function() {
				return x
			}, e.Class.get = function() {
				return u
			}, e.$.get = function() {
				return L
			}, Object.defineProperties(h, e), h
		}(s),
		C = {
			name: "device",
			proto: {
				device: m
			},
			static: {
				device: m
			}
		},
		M = {
			name: "support",
			proto: {
				support: te
			},
			static: {
				support: te
			}
		},
		k = {
			name: "browser",
			proto: {
				browser: I
			},
			static: {
				browser: I
			}
		},
		P = {
			name: "resize",
			create: function() {
				var e = this;
				ee.extend(e, {
					resize: {
						resizeHandler: function() {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function() {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function() {
					J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function() {
					J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
				}
			}
		},
		z = {
			func: J.MutationObserver || J.WebkitMutationObserver,
			attach: function(e, t) {
				void 0 === t && (t = {});
				var a = this,
					i = new z.func(function(e) {
						if (1 !== e.length) {
							var t = function() {
								a.emit("observerUpdate", e[0])
							};
							J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
						} else a.emit("observerUpdate", e[0])
					});
				i.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), a.observer.observers.push(i)
			},
			init: function() {
				var e = this;
				if (te.observer && e.params.observer) {
					if (e.params.observeParents)
						for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
					e.observer.attach(e.$el[0], {
						childList: e.params.observeSlideChildren
					}), e.observer.attach(e.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function() {
				this.observer.observers.forEach(function(e) {
					e.disconnect()
				}), this.observer.observers = []
			}
		},
		$ = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1,
				observeSlideChildren: !1
			},
			create: function() {
				ee.extend(this, {
					observer: {
						init: z.init.bind(this),
						attach: z.attach.bind(this),
						destroy: z.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function() {
					this.observer.init()
				},
				destroy: function() {
					this.observer.destroy()
				}
			}
		},
		D = {
			update: function(e) {
				var t = this,
					a = t.params,
					i = a.slidesPerView,
					s = a.slidesPerGroup,
					r = a.centeredSlides,
					n = t.params.virtual,
					o = n.addSlidesBefore,
					l = n.addSlidesAfter,
					d = t.virtual,
					p = d.from,
					c = d.to,
					u = d.slides,
					h = d.slidesGrid,
					v = d.renderSlide,
					f = d.offset;
				t.updateActiveIndex();
				var m, g, b, w = t.activeIndex || 0;
				m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
				var y = Math.max((w || 0) - b, 0),
					x = Math.min((w || 0) + g, u.length - 1),
					T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

				function E() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (ee.extend(t.virtual, {
						from: y,
						to: x,
						offset: T,
						slidesGrid: t.slidesGrid
					}), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: T,
					from: y,
					to: x,
					slides: function() {
						for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
						return e
					}()
				}), void E();
				var S = [],
					C = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
				for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
				C.forEach(function(e) {
					t.$wrapperEl.append(v(u[e], e))
				}), S.sort(function(e, t) {
					return t - e
				}).forEach(function(e) {
					t.$wrapperEl.prepend(v(u[e], e))
				}), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
			},
			renderSlide: function(e, t) {
				var a = this,
					i = a.params.virtual;
				if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
				var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
			},
			appendSlide: function(e) {
				this.virtual.slides.push(e), this.virtual.update(!0)
			},
			prependSlide: function(e) {
				var t = this;
				if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
					var a = t.virtual.cache,
						i = {};
					Object.keys(a).forEach(function(e) {
						i[e + 1] = a[e]
					}), t.virtual.cache = i
				}
				t.virtual.update(!0), t.slideNext(0)
			}
		},
		O = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0
				}
			},
			create: function() {
				var e = this;
				ee.extend(e, {
					virtual: {
						update: D.update.bind(e),
						appendSlide: D.appendSlide.bind(e),
						prependSlide: D.prependSlide.bind(e),
						renderSlide: D.renderSlide.bind(e),
						slides: e.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if (e.params.virtual.enabled) {
						e.classNames.push(e.params.containerModifierClass + "virtual");
						var t = {
							watchSlidesProgress: !0
						};
						ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
					}
				},
				setTranslate: function() {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		A = {
			handle: function(e) {
				var t = this,
					a = t.rtlTranslate,
					i = e;
				i.originalEvent && (i = i.originalEvent);
				var s = i.keyCode || i.charCode;
				if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
				if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
				if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
					if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
						var r = !1;
						if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
						var n = J.innerWidth,
							o = J.innerHeight,
							l = t.$el.offset();
						a && (l.left -= t.$el[0].scrollLeft);
						for (var d = [
								[l.left, l.top],
								[l.left + t.width, l.top],
								[l.left, l.top + t.height],
								[l.left + t.width, l.top + t.height]
							], p = 0; p < d.length; p += 1) {
							var c = d[p];
							0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
						}
						if (!r) return
					}
					t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
				}
			},
			enable: function() {
				this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function() {
				this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		N = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0
				}
			},
			create: function() {
				ee.extend(this, {
					keyboard: {
						enabled: !1,
						enable: A.enable.bind(this),
						disable: A.disable.bind(this),
						handle: A.handle.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function() {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		};
	var H = {
			lastScrollTime: ee.now(),
			event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
				var e = "onwheel",
					t = e in f;
				if (!t) {
					var a = f.createElement("div");
					a.setAttribute(e, "return;"), t = "function" == typeof a[e]
				}
				return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
			}() ? "wheel" : "mousewheel",
			normalize: function(e) {
				var t = 0,
					a = 0,
					i = 0,
					s = 0;
				return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
					spinX: t,
					spinY: a,
					pixelX: i,
					pixelY: s
				}
			},
			handleMouseEnter: function() {
				this.mouseEntered = !0
			},
			handleMouseLeave: function() {
				this.mouseEntered = !1
			},
			handle: function(e) {
				var t = e,
					a = this,
					i = a.params.mousewheel;
				if (!a.mouseEntered && !i.releaseOnEdges) return !0;
				t.originalEvent && (t = t.originalEvent);
				var s = 0,
					r = a.rtlTranslate ? -1 : 1,
					n = H.normalize(t);
				if (i.forceToAxis)
					if (a.isHorizontal()) {
						if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
						s = n.pixelX * r
					} else {
						if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
						s = n.pixelY
					}
				else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
				if (0 === s) return !0;
				if (i.invert && (s = -s), a.params.freeMode) {
					a.params.loop && a.loopFix();
					var o = a.getTranslate() + s * i.sensitivity,
						l = a.isBeginning,
						d = a.isEnd;
					if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function() {
							a.slideToClosest()
						}, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
				} else {
					if (60 < ee.now() - a.mousewheel.lastScrollTime)
						if (s < 0)
							if (a.isEnd && !a.params.loop || a.animating) {
								if (i.releaseOnEdges) return !0
							} else a.slideNext(), a.emit("scroll", t);
					else if (a.isBeginning && !a.params.loop || a.animating) {
						if (i.releaseOnEdges) return !0
					} else a.slidePrev(), a.emit("scroll", t);
					a.mousewheel.lastScrollTime = (new J.Date).getTime()
				}
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
			},
			enable: function() {
				var e = this;
				if (!H.event) return !1;
				if (e.mousewheel.enabled) return !1;
				var t = e.$el;
				return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0
			},
			disable: function() {
				var e = this;
				if (!H.event) return !1;
				if (!e.mousewheel.enabled) return !1;
				var t = e.$el;
				return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
			}
		},
		G = {
			update: function() {
				var e = this,
					t = e.params.navigation;
				if (!e.params.loop) {
					var a = e.navigation,
						i = a.$nextEl,
						s = a.$prevEl;
					s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
				}
			},
			onPrevClick: function(e) {
				e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
			},
			onNextClick: function(e) {
				e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
			},
			init: function() {
				var e, t, a = this,
					i = a.params.navigation;
				(i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}))
			},
			destroy: function() {
				var e = this,
					t = e.navigation,
					a = t.$nextEl,
					i = t.$prevEl;
				a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
			}
		},
		B = {
			update: function() {
				var e = this,
					t = e.rtl,
					s = e.params.pagination;
				if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
					if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
						var o, l, d, p = e.pagination.bullets;
						if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function(e, t) {
							var a = L(t),
								i = a.index();
							i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
						});
						else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
							for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
							c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
						}
						if (s.dynamicBullets) {
							var v = Math.min(p.length, s.dynamicMainBullets + 4),
								f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
								m = t ? "right" : "left";
							p.css(e.isHorizontal() ? m : "top", f + "px")
						}
					}
					if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
						var g;
						g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
						var b = (r + 1) / n,
							w = 1,
							y = 1;
						"horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
					}
					"custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
				}
			},
			render: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						s = "";
					if ("bullets" === t.type) {
						for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
						i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
					}
					"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
				}
			},
			init: function() {
				var a = this,
					e = a.params.pagination;
				if (e.el) {
					var t = L(e.el);
					0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
						e.preventDefault();
						var t = L(this).index() * a.params.slidesPerGroup;
						a.params.loop && (t += a.loopedSlides), a.slideTo(t)
					}), ee.extend(a.pagination, {
						$el: t,
						el: t[0]
					}))
				}
			},
			destroy: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.pagination.$el;
					a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
				}
			}
		},
		X = {
			setTranslate: function() {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = e.rtlTranslate,
						i = e.progress,
						s = t.dragSize,
						r = t.trackSize,
						n = t.$dragEl,
						o = t.$el,
						l = e.params.scrollbar,
						d = s,
						p = (r - s) * i;
					a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
						o[0].style.opacity = 0, o.transition(400)
					}, 1e3))
				}
			},
			setTransition: function(e) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
			},
			updateSize: function() {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = t.$dragEl,
						i = t.$el;
					a[0].style.width = "", a[0].style.height = "";
					var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						n = e.size / e.virtualSize,
						o = n * (r / e.size);
					s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), ee.extend(t, {
						trackSize: r,
						divider: n,
						moveDivider: o,
						dragSize: s
					}), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
				}
			},
			setDragPosition: function(e) {
				var t, a = this,
					i = a.scrollbar,
					s = a.rtlTranslate,
					r = i.$el,
					n = i.dragSize,
					o = i.trackSize;
				t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
				var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
				a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
			},
			onDragStart: function(e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar,
					s = t.$wrapperEl,
					r = i.$el,
					n = i.$dragEl;
				t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
			},
			onDragMove: function(e) {
				var t = this.scrollbar,
					a = this.$wrapperEl,
					i = t.$el,
					s = t.$dragEl;
				this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
			},
			onDragEnd: function(e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar.$el;
				t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function() {
					i.css("opacity", 0), i.transition(400)
				}, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
			},
			enableDraggable: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.touchEventsTouch,
						i = e.touchEventsDesktop,
						s = e.params,
						r = t.$el[0],
						n = !(!te.passiveListener || !s.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!te.passiveListener || !s.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
				}
			},
			disableDraggable: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.touchEventsTouch,
						i = e.touchEventsDesktop,
						s = e.params,
						r = t.$el[0],
						n = !(!te.passiveListener || !s.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!te.passiveListener || !s.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
				}
			},
			init: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.$el,
						i = e.params.scrollbar,
						s = L(i.el);
					e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
					var r = s.find("." + e.params.scrollbar.dragClass);
					0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
						$el: s,
						el: s[0],
						$dragEl: r,
						dragEl: r[0]
					}), i.draggable && t.enableDraggable()
				}
			},
			destroy: function() {
				this.scrollbar.disableDraggable()
			}
		},
		Y = {
			setTransform: function(e, t) {
				var a = this.rtl,
					i = L(e),
					s = a ? -1 : 1,
					r = i.attr("data-swiper-parallax") || "0",
					n = i.attr("data-swiper-parallax-x"),
					o = i.attr("data-swiper-parallax-y"),
					l = i.attr("data-swiper-parallax-scale"),
					d = i.attr("data-swiper-parallax-opacity");
				if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
					var p = d - (d - 1) * (1 - Math.abs(t));
					i[0].style.opacity = p
				}
				if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
				else {
					var c = l - (l - 1) * (1 - Math.abs(t));
					i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
				}
			},
			setTranslate: function() {
				var i = this,
					e = i.$el,
					t = i.slides,
					s = i.progress,
					r = i.snapGrid;
				e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
					i.parallax.setTransform(t, s)
				}), t.each(function(e, t) {
					var a = t.progress;
					1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
						i.parallax.setTransform(t, a)
					})
				})
			},
			setTransition: function(s) {
				void 0 === s && (s = this.params.speed);
				this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
					var a = L(t),
						i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
					0 === s && (i = 0), a.transition(i)
				})
			}
		},
		V = {
			getDistanceBetweenTouches: function(e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					a = e.targetTouches[0].pageY,
					i = e.targetTouches[1].pageX,
					s = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
			},
			onGestureStart: function(e) {
				var t = this,
					a = t.params.zoom,
					i = t.zoom,
					s = i.gesture;
				if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
					if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureTouched = !0, s.scaleStart = V.getDistanceBetweenTouches(e)
				}
				s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
			},
			onGestureChange: function(e) {
				var t = this.params.zoom,
					a = this.zoom,
					i = a.gesture;
				if (!te.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					a.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e)
				}
				i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
			},
			onGestureEnd: function(e) {
				var t = this.params.zoom,
					a = this.zoom,
					i = a.gesture;
				if (!te.gestures) {
					if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
					a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
				}
				i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
			},
			onTouchStart: function(e) {
				var t = this.zoom,
					a = t.gesture,
					i = t.image;
				a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function(e) {
				var t = this,
					a = t.zoom,
					i = a.gesture,
					s = a.image,
					r = a.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
					var n = s.width * a.scale,
						o = s.height * a.scale;
					if (!(n < i.slideWidth && o < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
							if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
							if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
						}
						e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function() {
				var e = this.zoom,
					t = e.gesture,
					a = e.image,
					i = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
					a.isTouched = !1, a.isMoved = !1;
					var s = 300,
						r = 300,
						n = i.x * s,
						o = a.currentX + n,
						l = i.y * r,
						d = a.currentY + l;
					0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
					var p = Math.max(s, r);
					a.currentX = o, a.currentY = d;
					var c = a.width * e.scale,
						u = a.height * e.scale;
					a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
				}
			},
			onTransitionEnd: function() {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
			},
			toggle: function(e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in : function(e) {
				var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
					b = g.zoom,
					w = g.params.zoom,
					y = b.gesture,
					x = b.image;
				(y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
			},
			out: function() {
				var e = this,
					t = e.zoom,
					a = e.params.zoom,
					i = t.gesture;
				i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
			},
			enable: function() {
				var e = this,
					t = e.zoom;
				if (!t.enabled) {
					t.enabled = !0;
					var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
				}
			},
			disable: function() {
				var e = this,
					t = e.zoom;
				if (t.enabled) {
					e.zoom.enabled = !1;
					var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
				}
			}
		},
		F = {
			loadInSlide: function(e, l) {
				void 0 === l && (l = !0);
				var d = this,
					p = d.params.lazy;
				if (void 0 !== e && 0 !== d.slides.length) {
					var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
						t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
					!c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function(e, t) {
						var i = L(t);
						i.addClass(p.loadingClass);
						var s = i.attr("data-background"),
							r = i.attr("data-src"),
							n = i.attr("data-srcset"),
							o = i.attr("data-sizes");
						d.loadImage(i[0], r || s, n, o, !1, function() {
							if (null != d && d && (!d || d.params) && !d.destroyed) {
								if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
									var e = c.attr("data-swiper-slide-index");
									if (c.hasClass(d.params.slideDuplicateClass)) {
										var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
										d.lazy.loadInSlide(t.index(), !1)
									} else {
										var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										d.lazy.loadInSlide(a.index(), !1)
									}
								}
								d.emit("lazyImageReady", c[0], i[0])
							}
						}), d.emit("lazyImageLoad", c[0], i[0])
					})
				}
			},
			load: function() {
				var i = this,
					t = i.$wrapperEl,
					a = i.params,
					s = i.slides,
					e = i.activeIndex,
					r = i.virtual && a.virtual.enabled,
					n = a.lazy,
					o = a.slidesPerView;

				function l(e) {
					if (r) {
						if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (s[e]) return !0;
					return !1
				}

				function d(e) {
					return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
				}
				if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function(e, t) {
					var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
					i.lazy.loadInSlide(a)
				});
				else if (1 < o)
					for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
				else i.lazy.loadInSlide(e);
				if (n.loadPrevNext)
					if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
						for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
						for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
					} else {
						var g = t.children("." + a.slideNextClass);
						0 < g.length && i.lazy.loadInSlide(d(g));
						var b = t.children("." + a.slidePrevClass);
						0 < b.length && i.lazy.loadInSlide(d(b))
					}
			}
		},
		R = {
			LinearSpline: function(e, t) {
				var a, i, s, r, n, o = function(e, t) {
					for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
					return a
				};
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
					return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function(e) {
				var t = this;
				t.controller.spline || (t.controller.spline = t.params.loop ? new R.LinearSpline(t.slidesGrid, e.slidesGrid) : new R.LinearSpline(t.snapGrid, e.snapGrid))
			},
			setTranslate: function(e, t) {
				var a, i, s = this,
					r = s.controller.control;

				function n(e) {
					var t = s.rtlTranslate ? -s.translate : s.translate;
					"slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(r))
					for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
				else r instanceof S && t !== r && n(r)
			},
			setTransition: function(t, e) {
				var a, i = this,
					s = i.controller.control;

				function r(e) {
					e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function() {
						e.updateAutoHeight()
					}), e.$wrapperEl.transitionEnd(function() {
						s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
					}))
				}
				if (Array.isArray(s))
					for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
				else s instanceof S && e !== s && r(s)
			}
		},
		q = {
			makeElFocusable: function(e) {
				return e.attr("tabIndex", "0"), e
			},
			addElRole: function(e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function(e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function(e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function(e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function(e) {
				var t = this,
					a = t.params.a11y;
				if (13 === e.keyCode) {
					var i = L(e.target);
					t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
				}
			},
			notify: function(e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function() {
				var e = this;
				if (!e.params.loop) {
					var t = e.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
				}
			},
			updatePagination: function() {
				var i = this,
					s = i.params.a11y;
				i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
					var a = L(t);
					i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
				})
			},
			init: function() {
				var e = this;
				e.$el.append(e.a11y.liveRegion);
				var t, a, i = e.params.a11y;
				e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
			},
			destroy: function() {
				var e, t, a = this;
				a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
			}
		},
		W = {
			init: function() {
				var e = this;
				if (e.params.history) {
					if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
					var t = e.history;
					t.initialized = !0, t.paths = W.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
				}
			},
			destroy: function() {
				this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function() {
				this.history.paths = W.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
			},
			getPathValues: function() {
				var e = J.location.pathname.slice(1).split("/").filter(function(e) {
						return "" !== e
					}),
					t = e.length;
				return {
					key: e[t - 2],
					value: e[t - 1]
				}
			},
			setHistory: function(e, t) {
				if (this.history.initialized && this.params.history.enabled) {
					var a = this.slides.eq(t),
						i = W.slugify(a.attr("data-history"));
					J.location.pathname.includes(e) || (i = e + "/" + i);
					var s = J.history.state;
					s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
						value: i
					}, null, i) : J.history.pushState({
						value: i
					}, null, i))
				}
			},
			slugify: function(e) {
				return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function(e, t, a) {
				var i = this;
				if (t)
					for (var s = 0, r = i.slides.length; s < r; s += 1) {
						var n = i.slides.eq(s);
						if (W.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
							var o = n.index();
							i.slideTo(o, e, a)
						}
					} else i.slideTo(0, e, a)
			}
		},
		j = {
			onHashCange: function() {
				var e = this,
					t = f.location.hash.replace("#", "");
				if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
					var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
					if (void 0 === a) return;
					e.slideTo(a)
				}
			},
			setHash: function() {
				var e = this;
				if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
					if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
					else {
						var t = e.slides.eq(e.activeIndex),
							a = t.attr("data-hash") || t.attr("data-history");
						f.location.hash = a || ""
					}
			},
			init: function() {
				var e = this;
				if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
					e.hashNavigation.initialized = !0;
					var t = f.location.hash.replace("#", "");
					if (t)
						for (var a = 0, i = e.slides.length; a < i; a += 1) {
							var s = e.slides.eq(a);
							if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
								var r = s.index();
								e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
							}
						}
					e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
				}
			},
			destroy: function() {
				this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		U = {
			run: function() {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					a = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function() {
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
				}, a)
			},
			start: function() {
				var e = this;
				return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
			},
			stop: function() {
				var e = this;
				return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
			},
			pause: function(e) {
				var t = this;
				t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
			}
		},
		K = {
			setTranslate: function() {
				for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
					var i = e.slides.eq(a),
						s = -i[0].swiperSlideOffset;
					e.params.virtualTranslate || (s -= e.translate);
					var r = 0;
					e.isHorizontal() || (r = s, s = 0);
					var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: n
					}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
				}
			},
			setTransition: function(e) {
				var a = this,
					t = a.slides,
					i = a.$wrapperEl;
				if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
					var s = !1;
					t.transitionEnd(function() {
						if (!s && a && !a.destroyed) {
							s = !0, a.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
						}
					})
				}
			}
		},
		_ = {
			setTranslate: function() {
				var e, t = this,
					a = t.$el,
					i = t.$wrapperEl,
					s = t.slides,
					r = t.width,
					n = t.height,
					o = t.rtlTranslate,
					l = t.size,
					d = t.params.cubeEffect,
					p = t.isHorizontal(),
					c = t.virtual && t.params.virtual.enabled,
					u = 0;
				d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
					height: r + "px"
				})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
				for (var h = 0; h < s.length; h += 1) {
					var v = s.eq(h),
						f = h;
					c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
					var m = 90 * f,
						g = Math.floor(m / 360);
					o && (m = -m, g = Math.floor(-m / 360));
					var b = Math.max(Math.min(v[0].progress, 1), -1),
						w = 0,
						y = 0,
						x = 0;
					f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
					var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
					if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
						var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
					}
				}
				if (i.css({
						"-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + l / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + l / 2 + "px",
						"transform-origin": "50% 50% -" + l / 2 + "px"
					}), d.shadow)
					if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
					else {
						var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
							M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
							k = d.shadowScale,
							P = d.shadowScale / M,
							z = d.shadowOffset;
						e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
					}
				var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
				i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
			},
			setTransition: function(e) {
				var t = this.$el;
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
			}
		},
		Z = {
			setTranslate: function() {
				for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
					var s = t.eq(i),
						r = s[0].progress;
					e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
					var n = -180 * r,
						o = 0,
						l = -s[0].swiperSlideOffset,
						d = 0;
					if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
						var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
							c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
						0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
					}
					s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
				}
			},
			setTransition: function(e) {
				var a = this,
					t = a.slides,
					i = a.activeIndex,
					s = a.$wrapperEl;
				if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
					var r = !1;
					t.eq(i).transitionEnd(function() {
						if (!r && a && !a.destroyed) {
							r = !0, a.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
						}
					})
				}
			}
		},
		Q = {
			setTranslate: function() {
				for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
					var v = i.eq(u),
						f = r[u],
						m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
						g = o ? p * m : 0,
						b = o ? 0 : p * m,
						w = -c * Math.abs(m),
						y = o ? 0 : n.stretch * m,
						x = o ? n.stretch * m : 0;
					Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
					var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
					if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
						var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
					}
				}(te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
			},
			setTransition: function(e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		ae = {
			init: function() {
				var e = this,
					t = e.params.thumbs,
					a = e.constructor;
				t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), ee.extend(e.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
					watchSlidesVisibility: !0,
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
			},
			onThumbClick: function() {
				var e = this,
					t = e.thumbs.swiper;
				if (t) {
					var a = t.clickedIndex,
						i = t.clickedSlide;
					if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
						var s;
						if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
							var r = e.activeIndex;
							e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
							var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
								o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
							s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
						}
						e.slideTo(s)
					}
				}
			},
			update: function(e) {
				var t = this,
					a = t.thumbs.swiper;
				if (a) {
					var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
					if (t.realIndex !== a.realIndex) {
						var s, r = a.activeIndex;
						if (a.params.loop) {
							a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
							var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
								o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
							s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
						} else s = t.realIndex;
						a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
					}
					var l = 1,
						d = t.params.thumbs.slideThumbActiveClass;
					if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop)
						for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
					else
						for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
				}
			}
		},
		ie = [C, M, k, P, $, O, N, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function() {
				var e = this;
				ee.extend(e, {
					mousewheel: {
						enabled: !1,
						enable: H.enable.bind(e),
						disable: H.disable.bind(e),
						handle: H.handle.bind(e),
						handleMouseEnter: H.handleMouseEnter.bind(e),
						handleMouseLeave: H.handleMouseLeave.bind(e),
						lastScrollTime: ee.now()
					}
				})
			},
			on: {
				init: function() {
					this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function() {
					this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function() {
				var e = this;
				ee.extend(e, {
					navigation: {
						init: G.init.bind(e),
						update: G.update.bind(e),
						destroy: G.destroy.bind(e),
						onNextClick: G.onNextClick.bind(e),
						onPrevClick: G.onPrevClick.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.navigation.init(), this.navigation.update()
				},
				toEdge: function() {
					this.navigation.update()
				},
				fromEdge: function() {
					this.navigation.update()
				},
				destroy: function() {
					this.navigation.destroy()
				},
				click: function(e) {
					var t = this.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					!this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function(e) {
						return e
					},
					formatFractionTotal: function(e) {
						return e
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function() {
				var e = this;
				ee.extend(e, {
					pagination: {
						init: B.init.bind(e),
						render: B.render.bind(e),
						update: B.update.bind(e),
						destroy: B.destroy.bind(e),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function() {
					this.pagination.init(), this.pagination.render(), this.pagination.update()
				},
				activeIndexChange: function() {
					this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
				},
				snapIndexChange: function() {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function() {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function() {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function() {
					this.pagination.destroy()
				},
				click: function(e) {
					var t = this;
					t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function() {
				var e = this;
				ee.extend(e, {
					scrollbar: {
						init: X.init.bind(e),
						destroy: X.destroy.bind(e),
						updateSize: X.updateSize.bind(e),
						setTranslate: X.setTranslate.bind(e),
						setTransition: X.setTransition.bind(e),
						enableDraggable: X.enableDraggable.bind(e),
						disableDraggable: X.disableDraggable.bind(e),
						setDragPosition: X.setDragPosition.bind(e),
						onDragStart: X.onDragStart.bind(e),
						onDragMove: X.onDragMove.bind(e),
						onDragEnd: X.onDragEnd.bind(e),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function() {
					this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
				},
				update: function() {
					this.scrollbar.updateSize()
				},
				resize: function() {
					this.scrollbar.updateSize()
				},
				observerUpdate: function() {
					this.scrollbar.updateSize()
				},
				setTranslate: function() {
					this.scrollbar.setTranslate()
				},
				setTransition: function(e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function() {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function() {
				ee.extend(this, {
					parallax: {
						setTransform: Y.setTransform.bind(this),
						setTranslate: Y.setTranslate.bind(this),
						setTransition: Y.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				init: function() {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTranslate: function() {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTransition: function(e) {
					this.params.parallax && this.parallax.setTransition(e)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function() {
				var i = this,
					t = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
					t[e] = V[e].bind(i)
				}), ee.extend(i, {
					zoom: t
				});
				var s = 1;
				Object.defineProperty(i.zoom, "scale", {
					get: function() {
						return s
					},
					set: function(e) {
						if (s !== e) {
							var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
								a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
							i.emit("zoomChange", e, t, a)
						}
						s = e
					}
				})
			},
			on: {
				init: function() {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function() {
					this.zoom.disable()
				},
				touchStart: function(e) {
					this.zoom.enabled && this.zoom.onTouchStart(e)
				},
				touchEnd: function(e) {
					this.zoom.enabled && this.zoom.onTouchEnd(e)
				},
				doubleTap: function(e) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
				},
				transitionEnd: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function() {
				ee.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: F.load.bind(this),
						loadInSlide: F.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function() {
					this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
				},
				scroll: function() {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function() {
					var e = this;
					e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
				},
				transitionEnd: function() {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function() {
				var e = this;
				ee.extend(e, {
					controller: {
						control: e.params.controller.control,
						getInterpolateFunction: R.getInterpolateFunction.bind(e),
						setTranslate: R.setTranslate.bind(e),
						setTransition: R.setTransition.bind(e)
					}
				})
			},
			on: {
				update: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function(e, t) {
					this.controller.control && this.controller.setTranslate(e, t)
				},
				setTransition: function(e, t) {
					this.controller.control && this.controller.setTransition(e, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function() {
				var t = this;
				ee.extend(t, {
					a11y: {
						liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(q).forEach(function(e) {
					t.a11y[e] = q[e].bind(t)
				})
			},
			on: {
				init: function() {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function() {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function() {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function() {
				var e = this;
				ee.extend(e, {
					history: {
						init: W.init.bind(e),
						setHistory: W.setHistory.bind(e),
						setHistoryPopState: W.setHistoryPopState.bind(e),
						scrollToSlide: W.scrollToSlide.bind(e),
						destroy: W.destroy.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.params.history.enabled && this.history.init()
				},
				destroy: function() {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function() {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function() {
				var e = this;
				ee.extend(e, {
					hashNavigation: {
						initialized: !1,
						init: j.init.bind(e),
						destroy: j.destroy.bind(e),
						setHash: j.setHash.bind(e),
						onHashCange: j.onHashCange.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function() {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function() {
				var t = this;
				ee.extend(t, {
					autoplay: {
						running: !1,
						paused: !1,
						run: U.run.bind(t),
						start: U.start.bind(t),
						stop: U.stop.bind(t),
						pause: U.pause.bind(t),
						onTransitionEnd: function(e) {
							t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
						}
					}
				})
			},
			on: {
				init: function() {
					this.params.autoplay.enabled && this.autoplay.start()
				},
				beforeTransitionStart: function(e, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
				},
				sliderFirstMove: function() {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				destroy: function() {
					this.autoplay.running && this.autoplay.stop()
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function() {
				ee.extend(this, {
					fadeEffect: {
						setTranslate: K.setTranslate.bind(this),
						setTransition: K.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("fade" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "fade");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						ee.extend(e.params, t), ee.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"fade" === this.params.effect && this.fadeEffect.setTranslate()
				},
				setTransition: function(e) {
					"fade" === this.params.effect && this.fadeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function() {
				ee.extend(this, {
					cubeEffect: {
						setTranslate: _.setTranslate.bind(this),
						setTransition: _.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("cube" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						ee.extend(e.params, t), ee.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"cube" === this.params.effect && this.cubeEffect.setTranslate()
				},
				setTransition: function(e) {
					"cube" === this.params.effect && this.cubeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function() {
				ee.extend(this, {
					flipEffect: {
						setTranslate: Z.setTranslate.bind(this),
						setTransition: Z.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("flip" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						ee.extend(e.params, t), ee.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"flip" === this.params.effect && this.flipEffect.setTranslate()
				},
				setTransition: function(e) {
					"flip" === this.params.effect && this.flipEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function() {
				ee.extend(this, {
					coverflowEffect: {
						setTranslate: Q.setTranslate.bind(this),
						setTransition: Q.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function() {
					"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
				},
				setTransition: function(e) {
					"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
				}
			}
		}, {
			name: "thumbs",
			params: {
				thumbs: {
					swiper: null,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs"
				}
			},
			create: function() {
				ee.extend(this, {
					thumbs: {
						swiper: null,
						init: ae.init.bind(this),
						update: ae.update.bind(this),
						onThumbClick: ae.onThumbClick.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this.params.thumbs;
					e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
				},
				slideChange: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				update: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				resize: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				observerUpdate: function() {
					this.thumbs.swiper && this.thumbs.update()
				},
				setTransition: function(e) {
					var t = this.thumbs.swiper;
					t && t.setTransition(e)
				},
				beforeDestroy: function() {
					var e = this.thumbs.swiper;
					e && this.thumbs.swiperCreated && e && e.destroy()
				}
			}
		}];
	return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});;
/*! elementor - v2.5.11 - 31-03-2019 */
! function(e) {
	var t = {};

	function n(i) {
		if (t[i]) return t[i].exports;
		var o = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
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
		var i = Object.create(null);
		if (n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) n.d(i, o, function(t) {
				return e[t]
			}.bind(null, o));
		return i
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 181)
}({
	1: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = navigator.userAgent;
		t.default = {
			webkit: -1 !== i.indexOf("AppleWebKit"),
			firefox: -1 !== i.indexOf("Firefox"),
			ie: /Trident|MSIE/.test(i),
			edge: -1 !== i.indexOf("Edge"),
			mac: -1 !== i.indexOf("Macintosh")
		}
	},
	13: function(e, t, n) {
		"use strict";
		e.exports = function() {
			var e, t = Array.prototype.slice,
				n = {
					actions: {},
					filters: {}
				};

			function i(e, t, i, o) {
				var r, s, a;
				if (n[e][t])
					if (i)
						if (r = n[e][t], o)
							for (a = r.length; a--;)(s = r[a]).callback === i && s.context === o && r.splice(a, 1);
						else
							for (a = r.length; a--;) r[a].callback === i && r.splice(a, 1);
				else n[e][t] = []
			}

			function o(e, t, i, o, r) {
				var s = {
						callback: i,
						priority: o,
						context: r
					},
					a = n[e][t];
				if (a) {
					var l = !1;
					if (jQuery.each(a, function() {
							if (this.callback === i) return l = !0, !1
						}), l) return;
					a.push(s), a = function(e) {
						for (var t, n, i, o = 1, r = e.length; o < r; o++) {
							for (t = e[o], n = o;
								(i = e[n - 1]) && i.priority > t.priority;) e[n] = e[n - 1], --n;
							e[n] = t
						}
						return e
					}(a)
				} else a = [s];
				n[e][t] = a
			}

			function r(e, t, i) {
				var o, r, s = n[e][t];
				if (!s) return "filters" === e && i[0];
				if (r = s.length, "filters" === e)
					for (o = 0; o < r; o++) i[0] = s[o].callback.apply(s[o].context, i);
				else
					for (o = 0; o < r; o++) s[o].callback.apply(s[o].context, i);
				return "filters" !== e || i[0]
			}
			return e = {
				removeFilter: function(t, n) {
					return "string" == typeof t && i("filters", t, n), e
				},
				applyFilters: function() {
					var n = t.call(arguments),
						i = n.shift();
					return "string" == typeof i ? r("filters", i, n) : e
				},
				addFilter: function(t, n, i, r) {
					return "string" == typeof t && "function" == typeof n && o("filters", t, n, i = parseInt(i || 10, 10), r), e
				},
				removeAction: function(t, n) {
					return "string" == typeof t && i("actions", t, n), e
				},
				doAction: function() {
					var n = t.call(arguments),
						i = n.shift();
					return "string" == typeof i && r("actions", i, n), e
				},
				addAction: function(t, n, i, r) {
					return "string" == typeof t && "function" == typeof n && o("actions", t, n, i = parseInt(i || 10, 10), r), e
				}
			}
		}
	},
	15: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();
		var o = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, elementorModules.Module), i(t, [{
				key: "get",
				value: function(e, t) {
					t = t || {};
					var n = void 0;
					try {
						n = t.session ? sessionStorage : localStorage
					} catch (t) {
						return e ? void 0 : {}
					}
					var i = n.getItem("elementor");
					(i = i ? JSON.parse(i) : {}).__expiration || (i.__expiration = {});
					var o = i.__expiration,
						r = [];
					e ? o[e] && (r = [e]) : r = Object.keys(o);
					var s = !1;
					return r.forEach(function(e) {
						new Date(o[e]) < new Date && (delete i[e], delete o[e], s = !0)
					}), s && this.save(i, t.session), e ? i[e] : i
				}
			}, {
				key: "set",
				value: function(e, t, n) {
					n = n || {};
					var i = this.get(null, n);
					if (i[e] = t, n.lifetimeInSeconds) {
						var o = new Date;
						o.setTime(o.getTime() + 1e3 * n.lifetimeInSeconds), i.__expiration[e] = o.getTime()
					}
					this.save(i, n.session)
				}
			}, {
				key: "save",
				value: function(e, t) {
					var n = void 0;
					try {
						n = t ? sessionStorage : localStorage
					} catch (e) {
						return
					}
					n.setItem("elementor", JSON.stringify(e))
				}
			}]), t
		}();
		t.default = o
	},
	16: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			o = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(1));
		var r = function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.hotKeysHandlers = {}
			}
			return i(e, [{
				key: "applyHotKey",
				value: function(e) {
					var t = this.hotKeysHandlers[e.which];
					t && jQuery.each(t, function(t, n) {
						n.isWorthHandling && !n.isWorthHandling(e) || !n.allowAltKey && e.altKey || (e.preventDefault(), n.handle(e))
					})
				}
			}, {
				key: "isControlEvent",
				value: function(e) {
					return e[o.default.mac ? "metaKey" : "ctrlKey"]
				}
			}, {
				key: "addHotKeyHandler",
				value: function(e, t, n) {
					this.hotKeysHandlers[e] || (this.hotKeysHandlers[e] = {}), this.hotKeysHandlers[e][t] = n
				}
			}, {
				key: "bindListener",
				value: function(e) {
					e.on("keydown", this.applyHotKey.bind(this))
				}
			}]), e
		}();
		t.default = r
	},
	17: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();
		var o = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, elementorModules.ViewModule), i(t, [{
				key: "getDefaultSettings",
				value: function() {
					return {
						selectors: {
							elements: ".elementor-element",
							nestedDocumentElements: ".elementor .elementor-element"
						},
						classes: {
							editMode: "elementor-edit-mode"
						}
					}
				}
			}, {
				key: "getDefaultElements",
				value: function() {
					var e = this.getSettings("selectors");
					return {
						$elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
					}
				}
			}, {
				key: "getDocumentSettings",
				value: function(e) {
					var t = void 0;
					if (this.isEdit) {
						t = {};
						var n = elementor.settings.page.model;
						jQuery.each(n.getActiveControls(), function(e) {
							t[e] = n.attributes[e]
						})
					} else t = this.$element.data("elementor-settings") || {};
					return this.getItems(t, e)
				}
			}, {
				key: "runElementsHandlers",
				value: function() {
					this.elements.$elements.each(function(e, t) {
						return elementorFrontend.elementsHandler.runReadyTrigger(t)
					})
				}
			}, {
				key: "onInit",
				value: function() {
					this.$element = this.getSettings("$element"),
						function e(t, n, i) {
							null === t && (t = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(t, n);
							if (void 0 === o) {
								var r = Object.getPrototypeOf(t);
								return null === r ? void 0 : e(r, n, i)
							}
							if ("value" in o) return o.value;
							var s = o.get;
							return void 0 !== s ? s.call(i) : void 0
						}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onInit", this).call(this), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.settings.page.model.on("change", this.onSettingsChange.bind(this)) : this.runElementsHandlers()
				}
			}, {
				key: "onSettingsChange",
				value: function() {}
			}]), t
		}();
		t.default = o
	},
	18: function(e, t, n) {
		"use strict";
		e.exports = elementorModules.frontend.handlers.Base.extend({
			$activeContent: null,
			getDefaultSettings: function() {
				return {
					selectors: {
						tabTitle: ".elementor-tab-title",
						tabContent: ".elementor-tab-content"
					},
					classes: {
						active: "elementor-active"
					},
					showTabFn: "show",
					hideTabFn: "hide",
					toggleSelf: !0,
					hidePrevious: !0,
					autoExpand: !0
				}
			},
			getDefaultElements: function() {
				var e = this.getSettings("selectors");
				return {
					$tabTitles: this.findElement(e.tabTitle),
					$tabContents: this.findElement(e.tabContent)
				}
			},
			activateDefaultTab: function() {
				var e = this.getSettings();
				if (e.autoExpand && ("editor" !== e.autoExpand || this.isEdit)) {
					var t = this.getEditSettings("activeItemIndex") || 1,
						n = {
							showTabFn: e.showTabFn,
							hideTabFn: e.hideTabFn
						};
					this.setSettings({
						showTabFn: "show",
						hideTabFn: "hide"
					}), this.changeActiveTab(t), this.setSettings(n)
				}
			},
			deactivateActiveTab: function(e) {
				var t = this.getSettings(),
					n = t.classes.active,
					i = e ? '[data-tab="' + e + '"]' : "." + n,
					o = this.elements.$tabTitles.filter(i),
					r = this.elements.$tabContents.filter(i);
				o.add(r).removeClass(n), r[t.hideTabFn]()
			},
			activateTab: function(e) {
				var t = this.getSettings(),
					n = t.classes.active,
					i = this.elements.$tabTitles.filter('[data-tab="' + e + '"]'),
					o = this.elements.$tabContents.filter('[data-tab="' + e + '"]');
				i.add(o).addClass(n), o[t.showTabFn]()
			},
			isActiveTab: function(e) {
				return this.elements.$tabTitles.filter('[data-tab="' + e + '"]').hasClass(this.getSettings("classes.active"))
			},
			bindEvents: function() {
				var e = this;
				this.elements.$tabTitles.on({
					keydown: function(t) {
						"Enter" === t.key && (t.preventDefault(), e.changeActiveTab(t.currentTarget.dataset.tab))
					},
					click: function(t) {
						t.preventDefault(), e.changeActiveTab(t.currentTarget.dataset.tab)
					}
				})
			},
			onInit: function() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), this.activateDefaultTab()
			},
			onEditSettingsChange: function(e) {
				"activeItemIndex" === e && this.activateDefaultTab()
			},
			changeActiveTab: function(e) {
				var t = this.isActiveTab(e),
					n = this.getSettings();
				!n.toggleSelf && t || !n.hidePrevious || this.deactivateActiveTab(), !n.hidePrevious && t && this.deactivateActiveTab(e), t || this.activateTab(e)
			}
		})
	},
	181: function(e, t, n) {
		"use strict";
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			o = l(n(182)),
			r = l(n(16)),
			s = l(n(15)),
			a = l(n(1));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var d = n(13),
			c = n(183),
			u = n(195),
			h = n(196),
			f = n(197),
			m = function(e) {
				function t() {
					var e;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
					var r = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i)));
					return r.config = elementorFrontendConfig, r
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, elementorModules.ViewModule), i(t, [{
					key: "getDefaultSettings",
					value: function() {
						return {
							selectors: {
								elementor: ".elementor",
								adminBar: "#wpadminbar"
							},
							classes: {
								ie: "elementor-msie"
							}
						}
					}
				}, {
					key: "getDefaultElements",
					value: function() {
						var e = {
							window: window,
							$window: jQuery(window),
							$document: jQuery(document),
							$head: jQuery(document.head),
							$body: jQuery(document.body),
							$deviceMode: jQuery("<span>", {
								id: "elementor-device-mode",
								class: "elementor-screen-only"
							})
						};
						return e.$body.append(e.$deviceMode), e
					}
				}, {
					key: "bindEvents",
					value: function() {
						var e = this;
						this.elements.$window.on("resize", function() {
							return e.setDeviceModeData()
						})
					}
				}, {
					key: "getElements",
					value: function(e) {
						return this.getItems(this.elements, e)
					}
				}, {
					key: "getPageSettings",
					value: function(e) {
						var t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
						return this.getItems(t, e)
					}
				}, {
					key: "getGeneralSettings",
					value: function(e) {
						var t = this.isEditMode() ? elementor.settings.general.model.attributes : this.config.settings.general;
						return this.getItems(t, e)
					}
				}, {
					key: "getCurrentDeviceMode",
					value: function() {
						return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
					}
				}, {
					key: "getCurrentDeviceSetting",
					value: function(e, t) {
						for (var n = ["desktop", "tablet", "mobile"], i = elementorFrontend.getCurrentDeviceMode(), o = n.indexOf(i); o > 0;) {
							var r = e[t + "_" + n[o]];
							if (r) return r;
							o--
						}
						return e[t]
					}
				}, {
					key: "isEditMode",
					value: function() {
						return this.config.environmentMode.edit
					}
				}, {
					key: "isWPPreviewMode",
					value: function() {
						return this.config.environmentMode.wpPreview
					}
				}, {
					key: "initDialogsManager",
					value: function() {
						var e = void 0;
						this.getDialogsManager = function() {
							return e || (e = new DialogsManager.Instance), e
						}
					}
				}, {
					key: "initHotKeys",
					value: function() {
						this.hotKeys = new r.default, this.hotKeys.bindListener(this.elements.$window)
					}
				}, {
					key: "initOnReadyComponents",
					value: function() {
						this.utils = {
							youtube: new u,
							anchors: new h,
							lightbox: new f
						}, this.modules = {
							StretchElement: elementorModules.frontend.tools.StretchElement,
							Masonry: elementorModules.utils.Masonry
						}, this.elementsHandler = new c(jQuery), this.documentsManager = new o.default, this.trigger("components:init")
					}
				}, {
					key: "initOnReadyElements",
					value: function() {
						this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
					}
				}, {
					key: "addIeCompatibility",
					value: function() {
						var e = "string" == typeof document.createElement("div").style.grid;
						if (a.default.ie || !e) {
							this.elements.$body.addClass(this.getSettings("classes.ie"));
							var t = '<link rel="stylesheet" id="elementor-frontend-css-msie" href="' + this.config.urls.assets + "css/frontend-msie.min.css?" + this.config.version + '" type="text/css" />';
							this.elements.$body.append(t)
						}
					}
				}, {
					key: "setDeviceModeData",
					value: function() {
						this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
					}
				}, {
					key: "addListenerOnce",
					value: function(e, t, n, i) {
						if (i || (i = this.elements.$window), this.isEditMode())
							if (this.removeListeners(e, t, i), i instanceof jQuery) {
								var o = t + "." + e;
								i.on(o, n)
							} else i.on(t, n, e);
						else i.on(t, n)
					}
				}, {
					key: "removeListeners",
					value: function(e, t, n, i) {
						if (i || (i = this.elements.$window), i instanceof jQuery) {
							var o = t + "." + e;
							i.off(o, n)
						} else i.off(t, n, e)
					}
				}, {
					key: "debounce",
					value: function(e, t) {
						var n = void 0;
						return function() {
							var i = this,
								o = arguments,
								r = !n;
							clearTimeout(n), n = setTimeout(function() {
								n = null, e.apply(i, o)
							}, t), r && e.apply(i, o)
						}
					}
				}, {
					key: "waypoint",
					value: function(e, t, n) {
						n = jQuery.extend({
							offset: "100%",
							triggerOnce: !0
						}, n);
						return e.elementorWaypoint(function() {
							var e = this.element || this,
								i = t.apply(e, arguments);
							return n.triggerOnce && this.destroy && this.destroy(), i
						}, n)
					}
				}, {
					key: "muteMigrationTraces",
					value: function() {
						jQuery.migrateMute = !0, jQuery.migrateTrace = !1
					}
				}, {
					key: "init",
					value: function() {
						this.hooks = new d, this.storage = new s.default, this.addIeCompatibility(), this.setDeviceModeData(), this.initDialogsManager(), this.isEditMode() && this.muteMigrationTraces(), this.elements.$window.trigger("elementor/frontend/init"), this.isEditMode() || this.initHotKeys(), this.initOnReadyElements(), this.initOnReadyComponents()
					}
				}, {
					key: "Module",
					get: function() {
						return elementorModules.frontend.handlers.Base
					}
				}]), t
			}();
		window.elementorFrontend = new m, elementorFrontend.isEditMode() || jQuery(function() {
			return elementorFrontend.init()
		})
	},
	182: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			o = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(17));
		var r = function(e) {
			function t() {
				var e;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
				var r = function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i)));
				return r.documents = {}, r.initDocumentClasses(), r.attachDocumentsClasses(), r
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, elementorModules.ViewModule), i(t, [{
				key: "getDefaultSettings",
				value: function() {
					return {
						selectors: {
							document: ".elementor"
						}
					}
				}
			}, {
				key: "getDefaultElements",
				value: function() {
					var e = this.getSettings("selectors");
					return {
						$documents: jQuery(e.document)
					}
				}
			}, {
				key: "initDocumentClasses",
				value: function() {
					this.documentClasses = {
						base: o.default
					}, elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
				}
			}, {
				key: "addDocumentClass",
				value: function(e, t) {
					this.documentClasses[e] = t
				}
			}, {
				key: "attachDocumentsClasses",
				value: function() {
					var e = this;
					this.elements.$documents.each(function(t, n) {
						return e.attachDocumentClass(jQuery(n))
					})
				}
			}, {
				key: "attachDocumentClass",
				value: function(e) {
					var t = e.data(),
						n = t.elementorId,
						i = t.elementorType,
						o = this.documentClasses[i] || this.documentClasses.base;
					this.documents[n] = new o({
						$element: e,
						id: n
					})
				}
			}]), t
		}();
		t.default = r
	},
	183: function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			var t = this,
				i = {
					section: n(184),
					"accordion.default": n(185),
					"alert.default": n(186),
					"counter.default": n(187),
					"progress.default": n(188),
					"tabs.default": n(189),
					"toggle.default": n(190),
					"video.default": n(191),
					"image-carousel.default": n(192),
					"text-editor.default": n(193)
				},
				o = {};
			this.initHandlers = function() {
				elementorFrontend.hooks.addAction("frontend/element_ready/global", n(194)), e.each(i, function(e, t) {
					elementorFrontend.hooks.addAction("frontend/element_ready/" + e, t)
				})
			}, this.addHandler = function(e, t) {
				var n = t.$element.data("model-cid"),
					i = void 0;
				if (n) {
					i = e.prototype.getConstructorID(), o[n] || (o[n] = {});
					var r = o[n][i];
					r && r.onDestroy()
				}
				var s = new e(t);
				n && (o[n][i] = s)
			}, this.getHandlers = function(e) {
				return e ? i[e] : i
			}, this.runReadyTrigger = function(t) {
				var n = jQuery(t),
					i = n.attr("data-element_type");
				i && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e), elementorFrontend.hooks.doAction("frontend/element_ready/" + i, n, e), "widget" === i && elementorFrontend.hooks.doAction("frontend/element_ready/" + n.attr("data-widget_type"), n, e))
			}, t.initHandlers()
		}
	},
	184: function(e, t, n) {
		"use strict";
		var i = elementorModules.frontend.handlers.Base.extend({
				player: null,
				isYTVideo: null,
				getDefaultSettings: function() {
					return {
						selectors: {
							backgroundVideoContainer: ".elementor-background-video-container",
							backgroundVideoEmbed: ".elementor-background-video-embed",
							backgroundVideoHosted: ".elementor-background-video-hosted"
						}
					}
				},
				getDefaultElements: function() {
					var e = this.getSettings("selectors"),
						t = {
							$backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
						};
					return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed), t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted), t
				},
				calcVideosSize: function() {
					var e = this.elements.$backgroundVideoContainer.outerWidth(),
						t = this.elements.$backgroundVideoContainer.outerHeight(),
						n = "16:9".split(":"),
						i = n[0] / n[1],
						o = e / t > i;
					return {
						width: o ? e : t * i,
						height: o ? e / i : t
					}
				},
				changeVideoSize: function() {
					var e = this.isYTVideo ? jQuery(this.player.getIframe()) : this.elements.$backgroundVideoHosted,
						t = this.calcVideosSize();
					e.width(t.width).height(t.height)
				},
				startVideoLoop: function() {
					var e = this;
					if (e.player.getIframe().contentWindow) {
						var t = e.getElementSettings(),
							n = t.background_video_start || 0,
							i = t.background_video_end;
						if (e.player.seekTo(n), i) setTimeout(function() {
							e.startVideoLoop()
						}, 1e3 * (i - n + 1))
					}
				},
				prepareYTVideo: function(e, t) {
					var n = this,
						i = n.elements.$backgroundVideoContainer,
						o = n.getElementSettings(),
						r = e.PlayerState.PLAYING;
					window.chrome && (r = e.PlayerState.UNSTARTED), i.addClass("elementor-loading elementor-invisible"), n.player = new e.Player(n.elements.$backgroundVideoEmbed[0], {
						videoId: t,
						events: {
							onReady: function() {
								n.player.mute(), n.changeVideoSize(), n.startVideoLoop(), n.player.playVideo()
							},
							onStateChange: function(t) {
								switch (t.data) {
									case r:
										i.removeClass("elementor-invisible elementor-loading");
										break;
									case e.PlayerState.ENDED:
										n.player.seekTo(o.background_video_start || 0)
								}
							}
						},
						playerVars: {
							controls: 0,
							rel: 0
						}
					}), elementorFrontend.elements.$window.on("resize", n.changeVideoSize)
				},
				activate: function() {
					var e = this,
						t = e.getElementSettings("background_video_link"),
						n = elementorFrontend.utils.youtube.getYoutubeIDFromURL(t);
					e.isYTVideo = !!n, n ? elementorFrontend.utils.youtube.onYoutubeApiReady(function(t) {
						setTimeout(function() {
							e.prepareYTVideo(t, n)
						}, 1)
					}) : e.elements.$backgroundVideoHosted.attr("src", t).one("canplay", e.changeVideoSize)
				},
				deactivate: function() {
					this.isYTVideo && this.player.getIframe() ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src")
				},
				run: function() {
					var e = this.getElementSettings();
					"video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate()
				},
				onInit: function() {
					elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), this.run()
				},
				onElementChange: function(e) {
					"background_background" === e && this.run()
				}
			}),
			o = elementorModules.frontend.handlers.Base.extend({
				stretchElement: null,
				bindEvents: function() {
					var e = this.getUniqueHandlerID();
					elementorFrontend.addListenerOnce(e, "resize", this.stretch), elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element), elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element)
				},
				unbindEvents: function() {
					elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch)
				},
				initStretch: function() {
					this.stretchElement = new elementorModules.frontend.tools.StretchElement({
						element: this.$element,
						selectors: {
							container: this.getStretchContainer()
						}
					})
				},
				getStretchContainer: function() {
					return elementorFrontend.getGeneralSettings("elementor_stretched_section_container") || window
				},
				stretch: function() {
					this.getElementSettings("stretch_section") && this.stretchElement.stretch()
				},
				onInit: function() {
					elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), this.initStretch(), this.stretch()
				},
				onElementChange: function(e) {
					"stretch_section" === e && (this.getElementSettings("stretch_section") ? this.stretch() : this.stretchElement.reset())
				},
				onGeneralSettingsChange: function(e) {
					"elementor_stretched_section_container" in e && (this.stretchElement.setSettings("selectors.container", this.getStretchContainer()), this.stretch())
				}
			}),
			r = elementorModules.frontend.handlers.Base.extend({
				getDefaultSettings: function() {
					return {
						selectors: {
							container: "> .elementor-shape-%s"
						},
						svgURL: elementorFrontend.config.urls.assets + "shapes/"
					}
				},
				getDefaultElements: function() {
					var e = {},
						t = this.getSettings("selectors");
					return e.$topContainer = this.$element.find(t.container.replace("%s", "top")), e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")), e
				},
				getSvgURL: function(e, t) {
					var n = this.getSettings("svgURL") + t + ".svg";
					return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e]), n
				},
				buildSVG: function(e) {
					var t = "shape_divider_" + e,
						n = this.getElementSettings(t),
						i = this.elements["$" + e + "Container"];
					if (i.attr("data-shape", n), n) {
						var o = n;
						this.getElementSettings(t + "_negative") && (o += "-negative");
						var r = this.getSvgURL(n, o);
						jQuery.get(r, function(e) {
							i.empty().append(e.childNodes[0])
						}), this.setNegative(e)
					}
				},
				setNegative: function(e) {
					this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
				},
				onInit: function() {
					var e = this;
					elementorModules.frontend.handlers.Base.prototype.onInit.apply(e, arguments), ["top", "bottom"].forEach(function(t) {
						e.getElementSettings("shape_divider_" + t) && e.buildSVG(t)
					})
				},
				onElementChange: function(e) {
					var t = e.match(/^shape_divider_(top|bottom)$/);
					if (t) this.buildSVG(t[1]);
					else {
						var n = e.match(/^shape_divider_(top|bottom)_negative$/);
						n && (this.buildSVG(n[1]), this.setNegative(n[1]))
					}
				}
			}),
			s = elementorModules.frontend.handlers.Base.extend({
				isFirst: function() {
					return this.$element.is(".elementor-edit-mode .elementor-top-section:first")
				},
				getOffset: function() {
					if ("body" === elementor.config.document.container) return this.$element.offset().top;
					var e = jQuery(elementor.config.document.container);
					return this.$element.offset().top - e.offset().top
				},
				setHandlesPosition: function() {
					if (this.isFirst()) {
						var e = this.getOffset(),
							t = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
						e < 25 ? (this.$element.addClass("elementor-section--handles-inside"), e < -5 ? t.css("top", -e) : t.css("top", "")) : this.$element.removeClass("elementor-section--handles-inside")
					}
				},
				onInit: function() {
					this.setHandlesPosition(), this.$element.on("mouseenter", this.setHandlesPosition)
				}
			});
		e.exports = function(e) {
			(elementorFrontend.isEditMode() || e.hasClass("elementor-section-stretched")) && elementorFrontend.elementsHandler.addHandler(o, {
				$element: e
			}), elementorFrontend.isEditMode() && (elementorFrontend.elementsHandler.addHandler(r, {
				$element: e
			}), elementorFrontend.elementsHandler.addHandler(s, {
				$element: e
			})), elementorFrontend.elementsHandler.addHandler(i, {
				$element: e
			})
		}
	},
	185: function(e, t, n) {
		"use strict";
		var i = n(18);
		e.exports = function(e) {
			elementorFrontend.elementsHandler.addHandler(i, {
				$element: e,
				showTabFn: "slideDown",
				hideTabFn: "slideUp"
			})
		}
	},
	186: function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			e.find(".elementor-alert-dismiss").on("click", function() {
				t(this).parent().fadeOut()
			})
		}
	},
	187: function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			elementorFrontend.waypoint(e.find(".elementor-counter-number"), function() {
				var e = t(this),
					n = e.data(),
					i = n.toValue.toString().match(/\.(.*)/);
				i && (n.rounding = i[1].length), e.numerator(n)
			})
		}
	},
	188: function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			elementorFrontend.waypoint(e.find(".elementor-progress-bar"), function() {
				var e = t(this);
				e.css("width", e.data("max") + "%")
			})
		}
	},
	189: function(e, t, n) {
		"use strict";
		var i = n(18);
		e.exports = function(e) {
			elementorFrontend.elementsHandler.addHandler(i, {
				$element: e,
				toggleSelf: !1
			})
		}
	},
	190: function(e, t, n) {
		"use strict";
		var i = n(18);
		e.exports = function(e) {
			elementorFrontend.elementsHandler.addHandler(i, {
				$element: e,
				showTabFn: "slideDown",
				hideTabFn: "slideUp",
				hidePrevious: !1,
				autoExpand: "editor"
			})
		}
	},
	191: function(e, t, n) {
		"use strict";
		var i = elementorModules.frontend.handlers.Base.extend({
			getDefaultSettings: function() {
				return {
					selectors: {
						imageOverlay: ".elementor-custom-embed-image-overlay",
						video: ".elementor-video",
						videoIframe: ".elementor-video-iframe"
					}
				}
			},
			getDefaultElements: function() {
				var e = this.getSettings("selectors");
				return {
					$imageOverlay: this.$element.find(e.imageOverlay),
					$video: this.$element.find(e.video),
					$videoIframe: this.$element.find(e.videoIframe)
				}
			},
			getLightBox: function() {
				return elementorFrontend.utils.lightbox
			},
			handleVideo: function() {
				this.getElementSettings("lightbox") || (this.elements.$imageOverlay.remove(), this.playVideo())
			},
			playVideo: function() {
				if (this.elements.$video.length) this.elements.$video[0].play();
				else {
					var e = this.elements.$videoIframe,
						t = e.data("lazy-load");
					t && e.attr("src", t);
					var n = e[0].src.replace("&autoplay=0", "");
					e[0].src = n + "&autoplay=1"
				}
			},
			animateVideo: function() {
				this.getLightBox().setEntranceAnimation(this.getCurrentDeviceSetting("lightbox_content_animation"))
			},
			handleAspectRatio: function() {
				this.getLightBox().setVideoAspectRatio(this.getElementSettings("aspect_ratio"))
			},
			bindEvents: function() {
				this.elements.$imageOverlay.on("click", this.handleVideo)
			},
			onElementChange: function(e) {
				if (0 !== e.indexOf("lightbox_content_animation")) {
					var t = this.getElementSettings("lightbox");
					"lightbox" !== e || t ? "aspect_ratio" === e && t && this.handleAspectRatio() : this.getLightBox().getModal().hide()
				} else this.animateVideo()
			}
		});
		e.exports = function(e) {
			elementorFrontend.elementsHandler.addHandler(i, {
				$element: e
			})
		}
	},
	192: function(e, t, n) {
		"use strict";
		var i = elementorModules.frontend.handlers.Base.extend({
			getDefaultSettings: function() {
				return {
					selectors: {
						carousel: ".elementor-image-carousel"
					}
				}
			},
			getDefaultElements: function() {
				var e = this.getSettings("selectors");
				return {
					$carousel: this.$element.find(e.carousel)
				}
			},
			onInit: function() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				var e = this.getElementSettings(),
					t = +e.slides_to_show || 3,
					n = 1 === t,
					i = n ? 1 : 2,
					o = elementorFrontend.config.breakpoints,
					r = {
						slidesToShow: t,
						autoplay: "yes" === e.autoplay,
						autoplaySpeed: e.autoplay_speed,
						infinite: "yes" === e.infinite,
						pauseOnHover: "yes" === e.pause_on_hover,
						speed: e.speed,
						arrows: -1 !== ["arrows", "both"].indexOf(e.navigation),
						dots: -1 !== ["dots", "both"].indexOf(e.navigation),
						rtl: "rtl" === e.direction,
						responsive: [{
							breakpoint: o.lg,
							settings: {
								slidesToShow: +e.slides_to_show_tablet || i,
								slidesToScroll: +e.slides_to_scroll_tablet || i
							}
						}, {
							breakpoint: o.md,
							settings: {
								slidesToShow: +e.slides_to_show_mobile || 1,
								slidesToScroll: +e.slides_to_scroll_mobile || 1
							}
						}]
					};
				n ? r.fade = "fade" === e.effect : r.slidesToScroll = +e.slides_to_scroll || i, this.elements.$carousel.slick(r)
			}
		});
		e.exports = function(e) {
			elementorFrontend.elementsHandler.addHandler(i, {
				$element: e
			})
		}
	},
	193: function(e, t, n) {
		"use strict";
		var i = elementorModules.frontend.handlers.Base.extend({
			dropCapLetter: "",
			getDefaultSettings: function() {
				return {
					selectors: {
						paragraph: "p:first"
					},
					classes: {
						dropCap: "elementor-drop-cap",
						dropCapLetter: "elementor-drop-cap-letter"
					}
				}
			},
			getDefaultElements: function() {
				var e = this.getSettings("selectors"),
					t = this.getSettings("classes"),
					n = jQuery("<span>", {
						class: t.dropCap
					}),
					i = jQuery("<span>", {
						class: t.dropCapLetter
					});
				return n.append(i), {
					$paragraph: this.$element.find(e.paragraph),
					$dropCap: n,
					$dropCapLetter: i
				}
			},
			wrapDropCap: function() {
				if (this.getElementSettings("drop_cap")) {
					var e = this.elements.$paragraph;
					if (e.length) {
						var t = e.html().replace(/&nbsp;/g, " "),
							n = t.match(/^ *([^ ] ?)/);
						if (n) {
							var i = n[1],
								o = i.trim();
							if ("<" !== o) {
								this.dropCapLetter = i, this.elements.$dropCapLetter.text(o);
								var r = t.slice(i.length).replace(/^ */, function(e) {
									return new Array(e.length + 1).join("&nbsp;")
								});
								e.html(r).prepend(this.elements.$dropCap)
							}
						}
					}
				} else this.dropCapLetter && (this.elements.$dropCap.remove(), this.elements.$paragraph.prepend(this.dropCapLetter), this.dropCapLetter = "")
			},
			onInit: function() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), this.wrapDropCap()
			},
			onElementChange: function(e) {
				"drop_cap" === e && this.wrapDropCap()
			}
		});
		e.exports = function(e) {
			elementorFrontend.elementsHandler.addHandler(i, {
				$element: e
			})
		}
	},
	194: function(e, t, n) {
		"use strict";
		var i = elementorModules.frontend.handlers.Base.extend({
			getWidgetType: function() {
				return "global"
			},
			animate: function() {
				var e = this.$element,
					t = this.getAnimation();
				if ("none" !== t) {
					var n = this.getElementSettings(),
						i = n._animation_delay || n.animation_delay || 0;
					e.removeClass(t), this.currentAnimation && e.removeClass(this.currentAnimation), this.currentAnimation = t, setTimeout(function() {
						e.removeClass("elementor-invisible").addClass("animated " + t)
					}, i)
				} else e.removeClass("elementor-invisible")
			},
			getAnimation: function() {
				return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
			},
			onInit: function() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), this.getAnimation() && elementorFrontend.waypoint(this.$element, this.animate.bind(this))
			},
			onElementChange: function(e) {
				/^_?animation/.test(e) && this.animate()
			}
		});
		e.exports = function(e) {
			elementorFrontend.elementsHandler.addHandler(i, {
				$element: e
			})
		}
	},
	195: function(e, t, n) {
		"use strict";
		e.exports = elementorModules.ViewModule.extend({
			getDefaultSettings: function() {
				return {
					isInserted: !1,
					APISrc: "https://www.youtube.com/iframe_api",
					selectors: {
						firstScript: "script:first"
					}
				}
			},
			getDefaultElements: function() {
				return {
					$firstScript: jQuery(this.getSettings("selectors.firstScript"))
				}
			},
			insertYTAPI: function() {
				this.setSettings("isInserted", !0), this.elements.$firstScript.before(jQuery("<script>", {
					src: this.getSettings("APISrc")
				}))
			},
			onYoutubeApiReady: function(e) {
				var t = this;
				t.getSettings("IsInserted") || t.insertYTAPI(), window.YT && YT.loaded ? e(YT) : setTimeout(function() {
					t.onYoutubeApiReady(e)
				}, 350)
			},
			getYoutubeIDFromURL: function(e) {
				var t = e.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/);
				return t && t[1]
			}
		})
	},
	196: function(e, t, n) {
		"use strict";
		e.exports = elementorModules.ViewModule.extend({
			getDefaultSettings: function() {
				return {
					scrollDuration: 500,
					selectors: {
						links: 'a[href*="#"]',
						targets: ".elementor-element, .elementor-menu-anchor",
						scrollable: "html, body"
					}
				}
			},
			getDefaultElements: function() {
				return {
					$scrollable: jQuery(this.getSettings("selectors").scrollable)
				}
			},
			bindEvents: function() {
				elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
			},
			handleAnchorLinks: function(e) {
				var t, n = e.currentTarget,
					i = location.pathname === n.pathname;
				if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
					try {
						t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
					} catch (e) {
						return
					}
					if (t.length) {
						var o = t.offset().top,
							r = elementorFrontend.elements.$wpAdminBar,
							s = jQuery(".elementor-section.elementor-sticky--active");
						r.length > 0 && (o -= r.height()), s.length > 0 && (o -= Math.max.apply(null, s.map(function() {
							return jQuery(this).outerHeight()
						}).get())), e.preventDefault(), o = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", o), this.elements.$scrollable.animate({
							scrollTop: o
						}, this.getSettings("scrollDuration"), "linear")
					}
				}
			},
			onInit: function() {
				elementorModules.ViewModule.prototype.onInit.apply(this, arguments), this.bindEvents()
			}
		})
	},
	197: function(e, t, n) {
		"use strict";
		e.exports = elementorModules.ViewModule.extend({
			oldAspectRatio: null,
			oldAnimation: null,
			swiper: null,
			getDefaultSettings: function() {
				return {
					classes: {
						aspectRatio: "elementor-aspect-ratio-%s",
						item: "elementor-lightbox-item",
						image: "elementor-lightbox-image",
						videoContainer: "elementor-video-container",
						videoWrapper: "elementor-fit-aspect-ratio",
						playButton: "elementor-custom-embed-play",
						playButtonIcon: "fa",
						playing: "elementor-playing",
						hidden: "elementor-hidden",
						invisible: "elementor-invisible",
						preventClose: "elementor-lightbox-prevent-close",
						slideshow: {
							container: "swiper-container",
							slidesWrapper: "swiper-wrapper",
							prevButton: "elementor-swiper-button elementor-swiper-button-prev",
							nextButton: "elementor-swiper-button elementor-swiper-button-next",
							prevButtonIcon: "eicon-chevron-left",
							nextButtonIcon: "eicon-chevron-right",
							slide: "swiper-slide"
						}
					},
					selectors: {
						links: "a, [data-elementor-lightbox]",
						slideshow: {
							activeSlide: ".swiper-slide-active",
							prevSlide: ".swiper-slide-prev",
							nextSlide: ".swiper-slide-next"
						}
					},
					modalOptions: {
						id: "elementor-lightbox",
						entranceAnimation: "zoomIn",
						videoAspectRatio: 169,
						position: {
							enable: !1
						}
					}
				}
			},
			getModal: function() {
				return e.exports.modal || this.initModal(), e.exports.modal
			},
			initModal: function() {
				var t = e.exports.modal = elementorFrontend.getDialogsManager().createWidget("lightbox", {
					className: "elementor-lightbox",
					closeButton: !0,
					closeButtonClass: "eicon-close",
					selectors: {
						preventClose: "." + this.getSettings("classes.preventClose")
					},
					hide: {
						onClick: !0
					}
				});
				t.on("hide", function() {
					t.setMessage("")
				})
			},
			showModal: function(e) {
				var t = this,
					n = t.getDefaultSettings().modalOptions;
				t.setSettings("modalOptions", jQuery.extend(n, e.modalOptions));
				var i = t.getModal();
				switch (i.setID(t.getSettings("modalOptions.id")), i.onShow = function() {
					DialogsManager.getWidgetType("lightbox").prototype.onShow.apply(i, arguments), t.setEntranceAnimation()
				}, i.onHide = function() {
					DialogsManager.getWidgetType("lightbox").prototype.onHide.apply(i, arguments), i.getElements("message").removeClass("animated")
				}, e.type) {
					case "image":
						t.setImageContent(e.url);
						break;
					case "video":
						t.setVideoContent(e);
						break;
					case "slideshow":
						t.setSlideshowContent(e.slideshow);
						break;
					default:
						t.setHTMLContent(e.html)
				}
				i.show()
			},
			setHTMLContent: function(e) {
				this.getModal().setMessage(e)
			},
			setImageContent: function(e) {
				var t = this.getSettings("classes"),
					n = jQuery("<div>", {
						class: t.item
					}),
					i = jQuery("<img>", {
						src: e,
						class: t.image + " " + t.preventClose
					});
				n.append(i), this.getModal().setMessage(n)
			},
			setVideoContent: function(e) {
				var t, n = this.getSettings("classes"),
					i = jQuery("<div>", {
						class: n.videoContainer
					}),
					o = jQuery("<div>", {
						class: n.videoWrapper
					}),
					r = this.getModal();
				if ("hosted" === e.videoType) {
					var s = jQuery.extend({
						src: e.url,
						autoplay: ""
					}, e.videoParams);
					t = jQuery("<video>", s)
				} else {
					var a = e.url.replace("&autoplay=0", "") + "&autoplay=1";
					t = jQuery("<iframe>", {
						src: a,
						allowfullscreen: 1
					})
				}
				i.append(o), o.append(t), r.setMessage(i), this.setVideoAspectRatio();
				var l = r.onHide;
				r.onHide = function() {
					l(), r.getElements("message").removeClass("elementor-fit-aspect-ratio")
				}
			},
			setSlideshowContent: function(e) {
				var t = jQuery,
					n = this,
					i = n.getSettings("classes"),
					o = i.slideshow,
					r = t("<div>", {
						class: o.container
					}),
					s = t("<div>", {
						class: o.slidesWrapper
					}),
					a = t("<div>", {
						class: o.prevButton + " " + i.preventClose
					}).html(t("<i>", {
						class: o.prevButtonIcon
					})),
					l = t("<div>", {
						class: o.nextButton + " " + i.preventClose
					}).html(t("<i>", {
						class: o.nextButtonIcon
					}));
				e.slides.forEach(function(e) {
					var n = o.slide + " " + i.item;
					e.video && (n += " " + i.video);
					var r = t("<div>", {
						class: n
					});
					if (e.video) {
						r.attr("data-elementor-slideshow-video", e.video);
						var a = t("<div>", {
							class: i.playButton
						}).html(t("<i>", {
							class: i.playButtonIcon
						}));
						r.append(a)
					} else {
						var l = t("<div>", {
								class: "swiper-zoom-container"
							}),
							d = t("<img>", {
								class: i.image + " " + i.preventClose,
								src: e.image
							});
						l.append(d), r.append(l)
					}
					s.append(r)
				}), r.append(s, a, l);
				var d = n.getModal();
				d.setMessage(r);
				var c = d.onShow;
				d.onShow = function() {
					c();
					var i = {
						navigation: {
							prevEl: a,
							nextEl: l
						},
						pagination: {
							clickable: !0
						},
						on: {
							slideChangeTransitionEnd: n.onSlideChange
						},
						grabCursor: !0,
						runCallbacksOnInit: !1,
						loop: !0,
						keyboard: !0
					};
					e.swiper && t.extend(i, e.swiper), n.swiper = new Swiper(r, i), n.setVideoAspectRatio(), n.playSlideVideo()
				}
			},
			setVideoAspectRatio: function(e) {
				e = e || this.getSettings("modalOptions.videoAspectRatio");
				var t = this.getModal().getElements("widgetContent"),
					n = this.oldAspectRatio,
					i = this.getSettings("classes.aspectRatio");
				this.oldAspectRatio = e, n && t.removeClass(i.replace("%s", n)), e && t.addClass(i.replace("%s", e))
			},
			getSlide: function(e) {
				return jQuery(this.swiper.slides).filter(this.getSettings("selectors.slideshow." + e + "Slide"))
			},
			playSlideVideo: function() {
				var e = this.getSlide("active"),
					t = e.data("elementor-slideshow-video");
				if (t) {
					var n = this.getSettings("classes"),
						i = jQuery("<div>", {
							class: n.videoContainer + " " + n.invisible
						}),
						o = jQuery("<div>", {
							class: n.videoWrapper
						}),
						r = jQuery("<iframe>", {
							src: t
						}),
						s = e.children("." + n.playButton);
					i.append(o), o.append(r), e.append(i), s.addClass(n.playing).removeClass(n.hidden), r.on("load", function() {
						s.addClass(n.hidden), i.removeClass(n.invisible)
					})
				}
			},
			setEntranceAnimation: function(e) {
				e = e || elementorFrontend.getCurrentDeviceSetting(this.getSettings("modalOptions"), "entranceAnimation");
				var t = this.getModal().getElements("message");
				this.oldAnimation && t.removeClass(this.oldAnimation), this.oldAnimation = e, e && t.addClass("animated " + e)
			},
			isLightboxLink: function(e) {
				if ("A" === e.tagName && (e.hasAttribute("download") || !/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(e.href))) return !1;
				var t = elementorFrontend.getGeneralSettings("elementor_global_image_lightbox"),
					n = e.dataset.elementorOpenLightbox;
				return "yes" === n || t && "no" !== n
			},
			openLink: function(e) {
				var t = e.currentTarget,
					n = jQuery(e.target),
					i = elementorFrontend.isEditMode(),
					o = !!n.closest("#elementor").length;
				if (this.isLightboxLink(t)) {
					if (e.preventDefault(), !i || elementorFrontend.getGeneralSettings("elementor_enable_lightbox_in_editor")) {
						var r = {};
						if (t.dataset.elementorLightbox && (r = JSON.parse(t.dataset.elementorLightbox)), r.type && "slideshow" !== r.type) this.showModal(r);
						else if (t.dataset.elementorLightboxSlideshow) {
							var s = t.dataset.elementorLightboxSlideshow,
								a = jQuery(this.getSettings("selectors.links")).filter(function() {
									return s === this.dataset.elementorLightboxSlideshow
								}),
								l = [],
								d = {};
							a.each(function() {
								var e = this.dataset.elementorLightboxVideo,
									t = e || this.href;
								if (!d[t]) {
									d[t] = !0;
									var n = this.dataset.elementorLightboxIndex;
									void 0 === n && (n = a.index(this));
									var i = {
										image: this.href,
										index: n
									};
									e && (i.video = e), l.push(i)
								}
							}), l.sort(function(e, t) {
								return e.index - t.index
							});
							var c = t.dataset.elementorLightboxIndex;
							void 0 === c && (c = a.index(t)), this.showModal({
								type: "slideshow",
								modalOptions: {
									id: "elementor-lightbox-slideshow-" + s
								},
								slideshow: {
									slides: l,
									swiper: {
										initialSlide: +c
									}
								}
							})
						} else this.showModal({
							type: "image",
							url: t.href
						})
					}
				} else i && o && e.preventDefault()
			},
			bindEvents: function() {
				elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.openLink)
			},
			onSlideChange: function() {
				this.getSlide("prev").add(this.getSlide("next")).add(this.getSlide("active")).find("." + this.getSettings("classes.videoWrapper")).remove(), this.playSlideVideo()
			}
		})
	}
});