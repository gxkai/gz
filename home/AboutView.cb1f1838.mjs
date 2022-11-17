import { openBlock as r, createElementBlock as s } from "vue";
const a = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [c, n] of e)
    o[c] = n;
  return o;
}, _ = {};
function f(t, e) {
  return r(), s("h1", null, "This is an about page");
}
const u = /* @__PURE__ */ a(_, [["render", f]]);
export {
  u as default
};
