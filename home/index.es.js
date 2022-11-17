import { getCurrentInstance as Z, inject as ct, markRaw as g, ref as G, watch as ut, reactive as it, effectScope as at, isRef as w, isReactive as H, toRef as L, toRaw as ft, nextTick as q, computed as K, onUnmounted as lt, toRefs as z } from "vue";
var pt = !1;
function R(t, c, r) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, c), t.splice(c, 1, r), r) : (t[c] = r, r);
}
function x(t, c) {
  if (Array.isArray(t)) {
    t.splice(c, 1);
    return;
  }
  delete t[c];
}
/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let j;
const k = (t) => j = t, dt = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function O(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var $;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})($ || ($ = {}));
const B = typeof window < "u", U = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && B;
function tt(t, c) {
  for (const r in c) {
    const o = c[r];
    if (!(r in t))
      continue;
    const u = t[r];
    O(u) && O(o) && !w(o) && !H(o) ? t[r] = tt(u, o) : t[r] = o;
  }
  return t;
}
const et = () => {
};
function Q(t, c, r, o = et) {
  t.push(c);
  const u = () => {
    const p = t.indexOf(c);
    p > -1 && (t.splice(p, 1), o());
  };
  return !r && Z() && lt(u), u;
}
function V(t, ...c) {
  t.slice().forEach((r) => {
    r(...c);
  });
}
function A(t, c) {
  t instanceof Map && c instanceof Map && c.forEach((r, o) => t.set(o, r)), t instanceof Set && c instanceof Set && c.forEach(t.add, t);
  for (const r in c) {
    if (!c.hasOwnProperty(r))
      continue;
    const o = c[r], u = t[r];
    O(u) && O(o) && t.hasOwnProperty(r) && !w(o) && !H(o) ? t[r] = A(u, o) : t[r] = o;
  }
  return t;
}
const ht = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function Et(t) {
  return !O(t) || !t.hasOwnProperty(ht);
}
const { assign: N } = Object;
function X(t) {
  return !!(w(t) && t.effect);
}
function Y(t, c, r, o) {
  const { state: u, actions: p, getters: h } = c, i = r.state.value[t];
  let y;
  function l() {
    !i && (process.env.NODE_ENV === "production" || !o) && (r.state.value[t] = u ? u() : {});
    const E = process.env.NODE_ENV !== "production" && o ? z(G(u ? u() : {}).value) : z(r.state.value[t]);
    return N(E, p, Object.keys(h || {}).reduce((f, d) => (process.env.NODE_ENV !== "production" && d in E && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${t}".`), f[d] = g(K(() => {
      k(r);
      const b = r._s.get(t);
      return h[d].call(b, b);
    })), f), {}));
  }
  return y = F(t, l, c, r, o, !0), y.$reset = function() {
    const f = u ? u() : {};
    this.$patch((d) => {
      N(d, f);
    });
  }, y;
}
function F(t, c, r = {}, o, u, p) {
  let h;
  const i = N({ actions: {} }, r);
  if (process.env.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const y = {
    deep: !0
  };
  process.env.NODE_ENV !== "production" && !pt && (y.onTrigger = (s) => {
    l ? b = s : l == !1 && !n._hotUpdating && (Array.isArray(b) ? b.push(s) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let l, E, f = g([]), d = g([]), b;
  const P = o.state.value[t];
  !p && !P && (process.env.NODE_ENV === "production" || !u) && (o.state.value[t] = {});
  const C = G({});
  let J;
  function M(s) {
    let e;
    l = E = !1, process.env.NODE_ENV !== "production" && (b = []), typeof s == "function" ? (s(o.state.value[t]), e = {
      type: $.patchFunction,
      storeId: t,
      events: b
    }) : (A(o.state.value[t], s), e = {
      type: $.patchObject,
      payload: s,
      storeId: t,
      events: b
    });
    const a = J = Symbol();
    q().then(() => {
      J === a && (l = !0);
    }), E = !0, V(f, e, o.state.value[t]);
  }
  const ot = process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : et;
  function st() {
    h.stop(), f = [], d = [], o._s.delete(t);
  }
  function T(s, e) {
    return function() {
      k(o);
      const a = Array.from(arguments), v = [], D = [];
      function nt(_) {
        v.push(_);
      }
      function rt(_) {
        D.push(_);
      }
      V(d, {
        args: a,
        name: s,
        store: n,
        after: nt,
        onError: rt
      });
      let S;
      try {
        S = e.apply(this && this.$id === t ? this : n, a);
      } catch (_) {
        throw V(D, _), _;
      }
      return S instanceof Promise ? S.then((_) => (V(v, _), _)).catch((_) => (V(D, _), Promise.reject(_))) : (V(v, S), S);
    };
  }
  const I = /* @__PURE__ */ g({
    actions: {},
    getters: {},
    state: [],
    hotState: C
  }), W = {
    _p: o,
    $id: t,
    $onAction: Q.bind(null, d),
    $patch: M,
    $reset: ot,
    $subscribe(s, e = {}) {
      const a = Q(f, s, e.detached, () => v()), v = h.run(() => ut(() => o.state.value[t], (D) => {
        (e.flush === "sync" ? E : l) && s({
          storeId: t,
          type: $.direct,
          events: b
        }, D);
      }, N({}, y, e)));
      return a;
    },
    $dispose: st
  }, n = it(process.env.NODE_ENV !== "production" || U ? N(
    {
      _hmrPayload: I,
      _customProperties: g(/* @__PURE__ */ new Set())
    },
    W
  ) : W);
  o._s.set(t, n);
  const m = o._e.run(() => (h = at(), h.run(() => c())));
  for (const s in m) {
    const e = m[s];
    if (w(e) && !X(e) || H(e))
      process.env.NODE_ENV !== "production" && u ? R(C.value, s, L(m, s)) : p || (P && Et(e) && (w(e) ? e.value = P[s] : A(e, P[s])), o.state.value[t][s] = e), process.env.NODE_ENV !== "production" && I.state.push(s);
    else if (typeof e == "function") {
      const a = process.env.NODE_ENV !== "production" && u ? e : T(s, e);
      m[s] = a, process.env.NODE_ENV !== "production" && (I.actions[s] = e), i.actions[s] = e;
    } else
      process.env.NODE_ENV !== "production" && X(e) && (I.getters[s] = p ? r.getters[s] : e, B && (m._getters || (m._getters = g([]))).push(s));
  }
  if (N(n, m), N(ft(n), m), Object.defineProperty(n, "$state", {
    get: () => process.env.NODE_ENV !== "production" && u ? C.value : o.state.value[t],
    set: (s) => {
      if (process.env.NODE_ENV !== "production" && u)
        throw new Error("cannot set hotState");
      M((e) => {
        N(e, s);
      });
    }
  }), process.env.NODE_ENV !== "production" && (n._hotUpdate = g((s) => {
    n._hotUpdating = !0, s._hmrPayload.state.forEach((e) => {
      if (e in n.$state) {
        const a = s.$state[e], v = n.$state[e];
        typeof a == "object" && O(a) && O(v) ? tt(a, v) : s.$state[e] = v;
      }
      R(n, e, L(s.$state, e));
    }), Object.keys(n.$state).forEach((e) => {
      e in s.$state || x(n, e);
    }), l = !1, E = !1, o.state.value[t] = L(s._hmrPayload, "hotState"), E = !0, q().then(() => {
      l = !0;
    });
    for (const e in s._hmrPayload.actions) {
      const a = s[e];
      R(n, e, T(e, a));
    }
    for (const e in s._hmrPayload.getters) {
      const a = s._hmrPayload.getters[e], v = p ? K(() => (k(o), a.call(n, n))) : a;
      R(n, e, v);
    }
    Object.keys(n._hmrPayload.getters).forEach((e) => {
      e in s._hmrPayload.getters || x(n, e);
    }), Object.keys(n._hmrPayload.actions).forEach((e) => {
      e in s._hmrPayload.actions || x(n, e);
    }), n._hmrPayload = s._hmrPayload, n._getters = s._getters, n._hotUpdating = !1;
  })), U) {
    const s = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((e) => {
      Object.defineProperty(n, e, {
        value: n[e],
        ...s
      });
    });
  }
  return o._p.forEach((s) => {
    if (U) {
      const e = h.run(() => s({
        store: n,
        app: o._a,
        pinia: o,
        options: i
      }));
      Object.keys(e || {}).forEach((a) => n._customProperties.add(a)), N(n, e);
    } else
      N(n, h.run(() => s({
        store: n,
        app: o._a,
        pinia: o,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && n.$state && typeof n.$state == "object" && typeof n.$state.constructor == "function" && !n.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${n.$id}".`), P && p && r.hydrate && r.hydrate(n.$state, P), l = !0, E = !0, n;
}
function _t(t, c, r) {
  let o, u;
  const p = typeof c == "function";
  typeof t == "string" ? (o = t, u = p ? r : c) : (u = t, o = t.id);
  function h(i, y) {
    const l = Z();
    if (i = (process.env.NODE_ENV === "test" && j && j._testing ? null : i) || l && ct(dt), i && k(i), process.env.NODE_ENV !== "production" && !j)
      throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    i = j, i._s.has(o) || (p ? F(o, c, u, i) : Y(o, u, i), process.env.NODE_ENV !== "production" && (h._pinia = i));
    const E = i._s.get(o);
    if (process.env.NODE_ENV !== "production" && y) {
      const f = "__hot:" + o, d = p ? F(f, c, u, i, !0) : Y(f, N({}, u), i, !0);
      y._hotUpdate(d), delete i.state.value[f], i._s.delete(f);
    }
    if (process.env.NODE_ENV !== "production" && B && l && l.proxy && !y) {
      const f = l.proxy, d = "_pStores" in f ? f._pStores : f._pStores = {};
      d[o] = E;
    }
    return E;
  }
  return h.$id = o, h;
}
const vt = _t({
  id: "counter",
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (t) => t.counter * 2
  },
  actions: {
    increment() {
      this.counter++;
    }
  }
}), Nt = [
  {
    path: "/about",
    name: "about",
    component: () => import("./AboutView.cb1f1838.mjs")
  }
];
class bt {
  constructor(c) {
    c.Store.registerBatch([vt]), c.Router.registerBatch(Nt);
  }
}
export {
  bt as Home
};
