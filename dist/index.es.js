import * as Qe from "react";
import Km, { useState as qm, useEffect as Es } from "react";
var M0 = { exports: {} },
  Ap = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bT;
function QD() {
  if (bT) return Ap;
  bT = 1;
  var v = Km,
    T = Symbol.for("react.element"),
    S = Symbol.for("react.fragment"),
    D = Object.prototype.hasOwnProperty,
    A = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(K, P, j) {
    var Z,
      $ = {},
      J = null,
      oe = null;
    j !== void 0 && (J = "" + j),
      P.key !== void 0 && (J = "" + P.key),
      P.ref !== void 0 && (oe = P.ref);
    for (Z in P) D.call(P, Z) && !F.hasOwnProperty(Z) && ($[Z] = P[Z]);
    if (K && K.defaultProps)
      for (Z in ((P = K.defaultProps), P)) $[Z] === void 0 && ($[Z] = P[Z]);
    return {
      $$typeof: T,
      type: K,
      key: J,
      ref: oe,
      props: $,
      _owner: A.current,
    };
  }
  return (Ap.Fragment = S), (Ap.jsx = y), (Ap.jsxs = y), Ap;
}
var jp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _T;
function ID() {
  return (
    _T ||
      ((_T = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          var v = Km,
            T = Symbol.for("react.element"),
            S = Symbol.for("react.portal"),
            D = Symbol.for("react.fragment"),
            A = Symbol.for("react.strict_mode"),
            F = Symbol.for("react.profiler"),
            y = Symbol.for("react.provider"),
            K = Symbol.for("react.context"),
            P = Symbol.for("react.forward_ref"),
            j = Symbol.for("react.suspense"),
            Z = Symbol.for("react.suspense_list"),
            $ = Symbol.for("react.memo"),
            J = Symbol.for("react.lazy"),
            oe = Symbol.for("react.offscreen"),
            _e = Symbol.iterator,
            Ie = "@@iterator";
          function at(R) {
            if (R === null || typeof R != "object") return null;
            var I = (_e && R[_e]) || R[Ie];
            return typeof I == "function" ? I : null;
          }
          var kt = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function ke(R) {
            {
              for (
                var I = arguments.length,
                  ne = new Array(I > 1 ? I - 1 : 0),
                  Te = 1;
                Te < I;
                Te++
              )
                ne[Te - 1] = arguments[Te];
              xe("error", R, ne);
            }
          }
          function xe(R, I, ne) {
            {
              var Te = kt.ReactDebugCurrentFrame,
                tt = Te.getStackAddendum();
              tt !== "" && ((I += "%s"), (ne = ne.concat([tt])));
              var it = ne.map(function (Me) {
                return String(Me);
              });
              it.unshift("Warning: " + I),
                Function.prototype.apply.call(console[R], console, it);
            }
          }
          var je = !1,
            We = !1,
            mt = !1,
            $e = !1,
            Gt = !1,
            mn;
          mn = Symbol.for("react.module.reference");
          function wt(R) {
            return !!(
              typeof R == "string" ||
              typeof R == "function" ||
              R === D ||
              R === F ||
              Gt ||
              R === A ||
              R === j ||
              R === Z ||
              $e ||
              R === oe ||
              je ||
              We ||
              mt ||
              (typeof R == "object" &&
                R !== null &&
                (R.$$typeof === J ||
                  R.$$typeof === $ ||
                  R.$$typeof === y ||
                  R.$$typeof === K ||
                  R.$$typeof === P || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  R.$$typeof === mn ||
                  R.getModuleId !== void 0))
            );
          }
          function dt(R, I, ne) {
            var Te = R.displayName;
            if (Te) return Te;
            var tt = I.displayName || I.name || "";
            return tt !== "" ? ne + "(" + tt + ")" : ne;
          }
          function Dn(R) {
            return R.displayName || "Context";
          }
          function Fe(R) {
            if (R == null) return null;
            if (
              (typeof R.tag == "number" &&
                ke(
                  "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
                ),
              typeof R == "function")
            )
              return R.displayName || R.name || null;
            if (typeof R == "string") return R;
            switch (R) {
              case D:
                return "Fragment";
              case S:
                return "Portal";
              case F:
                return "Profiler";
              case A:
                return "StrictMode";
              case j:
                return "Suspense";
              case Z:
                return "SuspenseList";
            }
            if (typeof R == "object")
              switch (R.$$typeof) {
                case K:
                  var I = R;
                  return Dn(I) + ".Consumer";
                case y:
                  var ne = R;
                  return Dn(ne._context) + ".Provider";
                case P:
                  return dt(R, R.render, "ForwardRef");
                case $:
                  var Te = R.displayName || null;
                  return Te !== null ? Te : Fe(R.type) || "Memo";
                case J: {
                  var tt = R,
                    it = tt._payload,
                    Me = tt._init;
                  try {
                    return Fe(Me(it));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var et = Object.assign,
            yn = 0,
            Lt,
            Zn,
            ee,
            Le,
            fe,
            lt,
            ct;
          function kn() {}
          kn.__reactDisabledLog = !0;
          function er() {
            {
              if (yn === 0) {
                (Lt = console.log),
                  (Zn = console.info),
                  (ee = console.warn),
                  (Le = console.error),
                  (fe = console.group),
                  (lt = console.groupCollapsed),
                  (ct = console.groupEnd);
                var R = {
                  configurable: !0,
                  enumerable: !0,
                  value: kn,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: R,
                  log: R,
                  warn: R,
                  error: R,
                  group: R,
                  groupCollapsed: R,
                  groupEnd: R,
                });
              }
              yn++;
            }
          }
          function Fa() {
            {
              if ((yn--, yn === 0)) {
                var R = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: et({}, R, {
                    value: Lt,
                  }),
                  info: et({}, R, {
                    value: Zn,
                  }),
                  warn: et({}, R, {
                    value: ee,
                  }),
                  error: et({}, R, {
                    value: Le,
                  }),
                  group: et({}, R, {
                    value: fe,
                  }),
                  groupCollapsed: et({}, R, {
                    value: lt,
                  }),
                  groupEnd: et({}, R, {
                    value: ct,
                  }),
                });
              }
              yn < 0 &&
                ke(
                  "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
                );
            }
          }
          var un = kt.ReactCurrentDispatcher,
            Kr;
          function $n(R, I, ne) {
            {
              if (Kr === void 0)
                try {
                  throw Error();
                } catch (tt) {
                  var Te = tt.stack.trim().match(/\n( *(at )?)/);
                  Kr = (Te && Te[1]) || "";
                }
              return (
                `
` +
                Kr +
                R
              );
            }
          }
          var fr = !1,
            Ha;
          {
            var dr = typeof WeakMap == "function" ? WeakMap : Map;
            Ha = new dr();
          }
          function qr(R, I) {
            if (!R || fr) return "";
            {
              var ne = Ha.get(R);
              if (ne !== void 0) return ne;
            }
            var Te;
            fr = !0;
            var tt = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var it;
            (it = un.current), (un.current = null), er();
            try {
              if (I) {
                var Me = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(Me.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(Me, []);
                  } catch (Qn) {
                    Te = Qn;
                  }
                  Reflect.construct(R, [], Me);
                } else {
                  try {
                    Me.call();
                  } catch (Qn) {
                    Te = Qn;
                  }
                  R.call(Me.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Qn) {
                  Te = Qn;
                }
                R();
              }
            } catch (Qn) {
              if (Qn && Te && typeof Qn.stack == "string") {
                for (
                  var Xe = Qn.stack.split(`
`),
                    En = Te.stack.split(`
`),
                    Nt = Xe.length - 1,
                    Vt = En.length - 1;
                  Nt >= 1 && Vt >= 0 && Xe[Nt] !== En[Vt];

                )
                  Vt--;
                for (; Nt >= 1 && Vt >= 0; Nt--, Vt--)
                  if (Xe[Nt] !== En[Vt]) {
                    if (Nt !== 1 || Vt !== 1)
                      do
                        if ((Nt--, Vt--, Vt < 0 || Xe[Nt] !== En[Vt])) {
                          var vr =
                            `
` + Xe[Nt].replace(" at new ", " at ");
                          return (
                            R.displayName &&
                              vr.includes("<anonymous>") &&
                              (vr = vr.replace("<anonymous>", R.displayName)),
                            typeof R == "function" && Ha.set(R, vr),
                            vr
                          );
                        }
                      while (Nt >= 1 && Vt >= 0);
                    break;
                  }
              }
            } finally {
              (fr = !1),
                (un.current = it),
                Fa(),
                (Error.prepareStackTrace = tt);
            }
            var Ui = R ? R.displayName || R.name : "",
              pt = Ui ? $n(Ui) : "";
            return typeof R == "function" && Ha.set(R, pt), pt;
          }
          function gn(R, I, ne) {
            return qr(R, !1);
          }
          function Yn(R) {
            var I = R.prototype;
            return !!(I && I.isReactComponent);
          }
          function Ln(R, I, ne) {
            if (R == null) return "";
            if (typeof R == "function") return qr(R, Yn(R));
            if (typeof R == "string") return $n(R);
            switch (R) {
              case j:
                return $n("Suspense");
              case Z:
                return $n("SuspenseList");
            }
            if (typeof R == "object")
              switch (R.$$typeof) {
                case P:
                  return gn(R.render);
                case $:
                  return Ln(R.type, I, ne);
                case J: {
                  var Te = R,
                    tt = Te._payload,
                    it = Te._init;
                  try {
                    return Ln(it(tt), I, ne);
                  } catch {}
                }
              }
            return "";
          }
          var Nn = Object.prototype.hasOwnProperty,
            Wn = {},
            Jr = kt.ReactDebugCurrentFrame;
          function Ra(R) {
            if (R) {
              var I = R._owner,
                ne = Ln(R.type, R._source, I ? I.type : null);
              Jr.setExtraStackFrame(ne);
            } else Jr.setExtraStackFrame(null);
          }
          function ai(R, I, ne, Te, tt) {
            {
              var it = Function.call.bind(Nn);
              for (var Me in R)
                if (it(R, Me)) {
                  var Xe = void 0;
                  try {
                    if (typeof R[Me] != "function") {
                      var En = Error(
                        (Te || "React class") +
                          ": " +
                          ne +
                          " type `" +
                          Me +
                          "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                          typeof R[Me] +
                          "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                      );
                      throw ((En.name = "Invariant Violation"), En);
                    }
                    Xe = R[Me](
                      I,
                      Me,
                      Te,
                      ne,
                      null,
                      "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
                    );
                  } catch (Nt) {
                    Xe = Nt;
                  }
                  Xe &&
                    !(Xe instanceof Error) &&
                    (Ra(tt),
                    ke(
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      Te || "React class",
                      ne,
                      Me,
                      typeof Xe,
                    ),
                    Ra(null)),
                    Xe instanceof Error &&
                      !(Xe.message in Wn) &&
                      ((Wn[Xe.message] = !0),
                      Ra(tt),
                      ke("Failed %s type: %s", ne, Xe.message),
                      Ra(null));
                }
            }
          }
          var Va = Array.isArray;
          function xa(R) {
            return Va(R);
          }
          function Or(R) {
            {
              var I = typeof Symbol == "function" && Symbol.toStringTag,
                ne =
                  (I && R[Symbol.toStringTag]) ||
                  R.constructor.name ||
                  "Object";
              return ne;
            }
          }
          function Ba(R) {
            try {
              return Mr(R), !1;
            } catch {
              return !0;
            }
          }
          function Mr(R) {
            return "" + R;
          }
          function wa(R) {
            if (Ba(R))
              return (
                ke(
                  "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  Or(R),
                ),
                Mr(R)
              );
          }
          var en = kt.ReactCurrentOwner,
            Ur = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            Oi,
            ba,
            ie;
          ie = {};
          function we(R) {
            if (Nn.call(R, "ref")) {
              var I = Object.getOwnPropertyDescriptor(R, "ref").get;
              if (I && I.isReactWarning) return !1;
            }
            return R.ref !== void 0;
          }
          function Ge(R) {
            if (Nn.call(R, "key")) {
              var I = Object.getOwnPropertyDescriptor(R, "key").get;
              if (I && I.isReactWarning) return !1;
            }
            return R.key !== void 0;
          }
          function yt(R, I) {
            if (
              typeof R.ref == "string" &&
              en.current &&
              I &&
              en.current.stateNode !== I
            ) {
              var ne = Fe(en.current.type);
              ie[ne] ||
                (ke(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  Fe(en.current.type),
                  R.ref,
                ),
                (ie[ne] = !0));
            }
          }
          function Ht(R, I) {
            {
              var ne = function () {
                Oi ||
                  ((Oi = !0),
                  ke(
                    "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    I,
                  ));
              };
              (ne.isReactWarning = !0),
                Object.defineProperty(R, "key", {
                  get: ne,
                  configurable: !0,
                });
            }
          }
          function Sn(R, I) {
            {
              var ne = function () {
                ba ||
                  ((ba = !0),
                  ke(
                    "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    I,
                  ));
              };
              (ne.isReactWarning = !0),
                Object.defineProperty(R, "ref", {
                  get: ne,
                  configurable: !0,
                });
            }
          }
          var Xt = function (R, I, ne, Te, tt, it, Me) {
            var Xe = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: T,
              // Built-in properties that belong on the element
              type: R,
              key: I,
              ref: ne,
              props: Me,
              // Record the component responsible for creating this element.
              _owner: it,
            };
            return (
              (Xe._store = {}),
              Object.defineProperty(Xe._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(Xe, "_self", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: Te,
              }),
              Object.defineProperty(Xe, "_source", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: tt,
              }),
              Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)),
              Xe
            );
          };
          function pr(R, I, ne, Te, tt) {
            {
              var it,
                Me = {},
                Xe = null,
                En = null;
              ne !== void 0 && (wa(ne), (Xe = "" + ne)),
                Ge(I) && (wa(I.key), (Xe = "" + I.key)),
                we(I) && ((En = I.ref), yt(I, tt));
              for (it in I)
                Nn.call(I, it) && !Ur.hasOwnProperty(it) && (Me[it] = I[it]);
              if (R && R.defaultProps) {
                var Nt = R.defaultProps;
                for (it in Nt) Me[it] === void 0 && (Me[it] = Nt[it]);
              }
              if (Xe || En) {
                var Vt =
                  typeof R == "function"
                    ? R.displayName || R.name || "Unknown"
                    : R;
                Xe && Ht(Me, Vt), En && Sn(Me, Vt);
              }
              return Xt(R, Xe, En, tt, Te, en.current, Me);
            }
          }
          var bt = kt.ReactCurrentOwner,
            zr = kt.ReactDebugCurrentFrame;
          function Rt(R) {
            if (R) {
              var I = R._owner,
                ne = Ln(R.type, R._source, I ? I.type : null);
              zr.setExtraStackFrame(ne);
            } else zr.setExtraStackFrame(null);
          }
          var _t;
          _t = !1;
          function Zl(R) {
            return typeof R == "object" && R !== null && R.$$typeof === T;
          }
          function sl() {
            {
              if (bt.current) {
                var R = Fe(bt.current.type);
                if (R)
                  return (
                    `

Check the render method of \`` +
                    R +
                    "`."
                  );
              }
              return "";
            }
          }
          function eu(R) {
            return "";
          }
          var oo = {};
          function Ts(R) {
            {
              var I = sl();
              if (!I) {
                var ne = typeof R == "string" ? R : R.displayName || R.name;
                ne &&
                  (I =
                    `

Check the top-level render call using <` +
                    ne +
                    ">.");
              }
              return I;
            }
          }
          function cl(R, I) {
            {
              if (!R._store || R._store.validated || R.key != null) return;
              R._store.validated = !0;
              var ne = Ts(I);
              if (oo[ne]) return;
              oo[ne] = !0;
              var Te = "";
              R &&
                R._owner &&
                R._owner !== bt.current &&
                (Te = " It was passed a child from " + Fe(R._owner.type) + "."),
                Rt(R),
                ke(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  ne,
                  Te,
                ),
                Rt(null);
            }
          }
          function tu(R, I) {
            {
              if (typeof R != "object") return;
              if (xa(R))
                for (var ne = 0; ne < R.length; ne++) {
                  var Te = R[ne];
                  Zl(Te) && cl(Te, I);
                }
              else if (Zl(R)) R._store && (R._store.validated = !0);
              else if (R) {
                var tt = at(R);
                if (typeof tt == "function" && tt !== R.entries)
                  for (var it = tt.call(R), Me; !(Me = it.next()).done; )
                    Zl(Me.value) && cl(Me.value, I);
              }
            }
          }
          function fl(R) {
            {
              var I = R.type;
              if (I == null || typeof I == "string") return;
              var ne;
              if (typeof I == "function") ne = I.propTypes;
              else if (
                typeof I == "object" &&
                (I.$$typeof === P || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  I.$$typeof === $)
              )
                ne = I.propTypes;
              else return;
              if (ne) {
                var Te = Fe(I);
                ai(ne, R.props, "prop", Te, R);
              } else if (I.PropTypes !== void 0 && !_t) {
                _t = !0;
                var tt = Fe(I);
                ke(
                  "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                  tt || "Unknown",
                );
              }
              typeof I.getDefaultProps == "function" &&
                !I.getDefaultProps.isReactClassApproved &&
                ke(
                  "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.",
                );
            }
          }
          function nu(R) {
            {
              for (var I = Object.keys(R.props), ne = 0; ne < I.length; ne++) {
                var Te = I[ne];
                if (Te !== "children" && Te !== "key") {
                  Rt(R),
                    ke(
                      "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                      Te,
                    ),
                    Rt(null);
                  break;
                }
              }
              R.ref !== null &&
                (Rt(R),
                ke("Invalid attribute `ref` supplied to `React.Fragment`."),
                Rt(null));
            }
          }
          var Pa = {};
          function ii(R, I, ne, Te, tt, it) {
            {
              var Me = wt(R);
              if (!Me) {
                var Xe = "";
                (R === void 0 ||
                  (typeof R == "object" &&
                    R !== null &&
                    Object.keys(R).length === 0)) &&
                  (Xe +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var En = eu();
                En ? (Xe += En) : (Xe += sl());
                var Nt;
                R === null
                  ? (Nt = "null")
                  : xa(R)
                    ? (Nt = "array")
                    : R !== void 0 && R.$$typeof === T
                      ? ((Nt = "<" + (Fe(R.type) || "Unknown") + " />"),
                        (Xe =
                          " Did you accidentally export a JSX literal instead of a component?"))
                      : (Nt = typeof R),
                  ke(
                    "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                    Nt,
                    Xe,
                  );
              }
              var Vt = pr(R, I, ne, tt, it);
              if (Vt == null) return Vt;
              if (Me) {
                var vr = I.children;
                if (vr !== void 0)
                  if (Te)
                    if (xa(vr)) {
                      for (var Ui = 0; Ui < vr.length; Ui++) tu(vr[Ui], R);
                      Object.freeze && Object.freeze(vr);
                    } else
                      ke(
                        "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                      );
                  else tu(vr, R);
              }
              if (Nn.call(I, "key")) {
                var pt = Fe(R),
                  Qn = Object.keys(I).filter(function ($a) {
                    return $a !== "key";
                  }),
                  jr =
                    Qn.length > 0
                      ? "{key: someKey, " + Qn.join(": ..., ") + ": ...}"
                      : "{key: someKey}";
                if (!Pa[pt + jr]) {
                  var Ke =
                    Qn.length > 0 ? "{" + Qn.join(": ..., ") + ": ...}" : "{}";
                  ke(
                    `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                    jr,
                    pt,
                    Ke,
                    pt,
                  ),
                    (Pa[pt + jr] = !0);
                }
              }
              return R === D ? nu(Vt) : fl(Vt), Vt;
            }
          }
          function Ar(R, I, ne) {
            return ii(R, I, ne, !0);
          }
          function _a(R, I, ne) {
            return ii(R, I, ne, !1);
          }
          var Mi = _a,
            dl = Ar;
          (jp.Fragment = D), (jp.jsx = Mi), (jp.jsxs = dl);
        })()),
    jp
  );
}
process.env.NODE_ENV === "production"
  ? (M0.exports = QD())
  : (M0.exports = ID());
var te = M0.exports;
const GD = ({ size: v, variant: T = "primary" }) => {
    const S = [
      "arrow-with-tail-left-icon",
      v ? `arrow-with-tail-left-icon--${v}` : "",
      T ? `arrow-with-tail-left-icon--${T}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    return /* @__PURE__ */ te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: S,
      children: [
        /* @__PURE__ */ te.jsx("path", {
          d: "M5 12H19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        /* @__PURE__ */ te.jsx("path", {
          d: "M12 5L19 12L12 19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  },
  XD = ({ size: v, variant: T = "primary" }) => {
    const S = [
      "arrow-with-tail-bottom-icon",
      v ? `arrow-with-tail-bottom-icon--${v}` : "",
      T ? `arrow-with-tail-bottom-icon--${T}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    return /* @__PURE__ */ te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: S,
      children: [
        /* @__PURE__ */ te.jsx("path", {
          d: "M5 12H19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        /* @__PURE__ */ te.jsx("path", {
          d: "M12 5L19 12L12 19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  },
  KD = ({ size: v, variant: T = "primary" }) => {
    const S = [
      "arrow-with-tail-right-icon",
      v ? `arrow-with-tail-right-icon--${v}` : "",
      T ? `arrow-with-tail-right-icon--${T}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    return /* @__PURE__ */ te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: S,
      children: [
        /* @__PURE__ */ te.jsx("path", {
          d: "M5 12H19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        /* @__PURE__ */ te.jsx("path", {
          d: "M12 5L19 12L12 19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  };
function BT(v) {
  var T,
    S,
    D = "";
  if (typeof v == "string" || typeof v == "number") D += v;
  else if (typeof v == "object")
    if (Array.isArray(v)) {
      var A = v.length;
      for (T = 0; T < A; T++)
        v[T] && (S = BT(v[T])) && (D && (D += " "), (D += S));
    } else for (S in v) v[S] && (D && (D += " "), (D += S));
  return D;
}
function Nr() {
  for (var v, T, S = 0, D = "", A = arguments.length; S < A; S++)
    (v = arguments[S]) && (T = BT(v)) && (D && (D += " "), (D += T));
  return D;
}
const qD = ({ size: v, variant: T = "primary" }) => {
    const S = Nr("arrow-with-tail-top-icon", {
      [`arrow-with-tail-top-icon--${T}`]: T,
      [`arrow-with-tail-top-icon--${v}`]: v,
    });
    return /* @__PURE__ */ te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: S,
      children: [
        /* @__PURE__ */ te.jsx("path", {
          d: "M5 12H19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        /* @__PURE__ */ te.jsx("path", {
          d: "M12 5L19 12L12 19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  },
  JD = ({ size: v, variant: T = "primary" }) => {
    const S = Nr("close-icon", {
      [`close-icon--${T}`]: T,
      [`close-icon--${v}`]: v,
    });
    return /* @__PURE__ */ te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      className: S,
      children: [
        /* @__PURE__ */ te.jsx("path", {
          d: "M18 6L6 18",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        /* @__PURE__ */ te.jsx("path", {
          d: "M6 6L18 18",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  },
  Cs = /* @__PURE__ */ Object.freeze(
    /* @__PURE__ */ Object.defineProperty(
      {
        __proto__: null,
        ArrowWithTailBottom: XD,
        ArrowWithTailLeft: GD,
        ArrowWithTailRight: KD,
        ArrowWithTailTop: qD,
        Close: JD,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
var Jm = /* @__PURE__ */ ((v) => (
    (v.EMPTY = "Empty"),
    (v.ARROW_LEFT_TAIL = "ArrowWithTailLeft"),
    (v.ARROW_BOTTOM_TAIL = "ArrowWithTailBottom"),
    (v.ARROW_RIGHT_TAIL = "ArrowWithTailRight"),
    (v.ARROW_TOP_TAIL = "ArrowWithTailTop"),
    (v.CLOSE = "Close"),
    v
  ))(Jm || {}),
  PT = /* @__PURE__ */ ((v) => (
    (v.SUBMIT = "submit"), (v.BUTTON = "button"), (v.RESET = "reset"), v
  ))(PT || {}),
  Gm = /* @__PURE__ */ ((v) => (
    (v.PRIMARY = "primary"),
    (v.SECONDARY = "secondary"),
    (v.TERTIARY = "tertiary"),
    v
  ))(Gm || {});
const ZD = 100,
  ek = {
    PEN: "PEN",
    USD: "USD",
    EUR: "EUR",
  };
var tk = /* @__PURE__ */ ((v) => (
  (v.CARD = "71/94"), (v.BANNER_ONE = "326/395"), (v.BANNER_TWO = "652/379"), v
))(tk || {});
const uL = ({
    text: v,
    iconAfter: T,
    iconBefore: S,
    action: D,
    type: A = PT.BUTTON,
    variant: F = Gm.PRIMARY,
    isDisabled: y = !1,
  }) => {
    const K = S && Cs[S],
      P = T && Cs[T],
      j = Nr("torres-button", {
        [`torres-button--${F}`]: !!F,
      }),
      Z = F === Gm.PRIMARY ? "secondary" : "primary";
    return /* @__PURE__ */ te.jsxs("button", {
      type: A,
      onClick: D,
      className: j,
      disabled: y,
      children: [
        K && /* @__PURE__ */ te.jsx(K, { variant: Z }),
        v,
        P && /* @__PURE__ */ te.jsx(P, { variant: Z }),
      ],
    });
  },
  nk = ({
    text: v,
    action: T,
    isDisabled: S,
    iconBefore: D,
    iconAfter: A,
    isSelected: F,
  }) => {
    const y = D && Cs[D],
      K = A && Cs[A],
      P = Nr("torres-button-chip", {
        "torres-button-chip--selected": F,
      });
    return /* @__PURE__ */ te.jsxs("button", {
      type: "button",
      onClick: T,
      className: P,
      disabled: S,
      children: [
        y && /* @__PURE__ */ te.jsx(y, { variant: "secondary" }),
        v,
        K && /* @__PURE__ */ te.jsx(K, { variant: "secondary" }),
      ],
    });
  },
  rk = ({ id: v, color: T, name: S, action: D, isSelected: A = !1 }) => {
    const F = Nr("torres-button-color", {
      "torres-button-color--selected": A,
    });
    return /* @__PURE__ */ te.jsx("button", {
      id: String(v),
      onClick: D,
      name: S,
      className: F,
      children: /* @__PURE__ */ te.jsx("span", {
        style: { backgroundColor: T },
      }),
    });
  },
  ak = ({ icon: v, action: T, isDisabled: S, variant: D = Gm.PRIMARY }) => {
    const A = v && Cs[v],
      F = Nr("torres-button-icon", {
        [`torres-button-icon--${D}`]: D,
        "torres-button-icon--disabled": S,
      });
    return /* @__PURE__ */ te.jsx("button", {
      type: "button",
      onClick: T,
      className: F,
      disabled: S,
      children: A && /* @__PURE__ */ te.jsx(A, { variant: "primary" }),
    });
  },
  ik = ({
    isDisabled: v = !1,
    text: T,
    variant: S = "primary",
    iconAfter: D = Jm.EMPTY,
    action: A,
    isActionDisabled: F = !1,
    cursorPointerInDisabled: y = !1,
  }) => {
    const K = D && Cs[D];
    return v
      ? /* @__PURE__ */ te.jsx("span", {
          onClick: F ? A : void 0,
          className: Nr("torres-link-next--disabled", {
            "torres-link-next--disabled--pointer": y,
          }),
          children: T,
        })
      : /* @__PURE__ */ te.jsxs("button", {
          onClick: A,
          className: `torres-link-next torres-link-next--${S}`,
          children: [
            T,
            K && S === "secondary" && /* @__PURE__ */ te.jsx(K, {}),
          ],
        });
  },
  lk = (v) => v / ZD,
  uk = (v, T, S = "es-PE") => {
    const D = lk(v);
    if (typeof D != "number" || isNaN(D))
      throw new Error("El valor proporcionado no es un número válido.");
    return new Intl.NumberFormat(S, {
      style: "currency",
      currency: T,
      currencyDisplay: "symbol",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(D);
  },
  DT = ({ value: v, currency: T = ek.PEN, through: S = !1 }) => {
    const D = Nr("torres-price__value", {
      "torres-price__value--through": S,
    });
    return /* @__PURE__ */ te.jsx("div", {
      className: "torres-price",
      children: /* @__PURE__ */ te.jsx("span", {
        className: D,
        children: uk(v, T),
      }),
    });
  },
  F0 = ({ url: v, alt: T, aspectRatio: S }) => {
    const [D, A] = S.split("/").map(Number);
    return /* @__PURE__ */ te.jsx("div", {
      className: "torres-image",
      style: { paddingBottom: `${(A / D) * 100}%` },
      children: /* @__PURE__ */ te.jsx("img", {
        src: v,
        alt: T,
        className: "torres-image__img",
      }),
    });
  },
  ok = ({ text: v }) =>
    /* @__PURE__ */ te.jsx("span", { className: "torres-tag", children: v });
var Ca = {},
  Ym = { exports: {} },
  k0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kT;
function sk() {
  return (
    kT ||
      ((kT = 1),
      (function (v) {
        function T(ee, Le) {
          var fe = ee.length;
          ee.push(Le);
          e: for (; 0 < fe; ) {
            var lt = (fe - 1) >>> 1,
              ct = ee[lt];
            if (0 < A(ct, Le)) (ee[lt] = Le), (ee[fe] = ct), (fe = lt);
            else break e;
          }
        }
        function S(ee) {
          return ee.length === 0 ? null : ee[0];
        }
        function D(ee) {
          if (ee.length === 0) return null;
          var Le = ee[0],
            fe = ee.pop();
          if (fe !== Le) {
            ee[0] = fe;
            e: for (var lt = 0, ct = ee.length, kn = ct >>> 1; lt < kn; ) {
              var er = 2 * (lt + 1) - 1,
                Fa = ee[er],
                un = er + 1,
                Kr = ee[un];
              if (0 > A(Fa, fe))
                un < ct && 0 > A(Kr, Fa)
                  ? ((ee[lt] = Kr), (ee[un] = fe), (lt = un))
                  : ((ee[lt] = Fa), (ee[er] = fe), (lt = er));
              else if (un < ct && 0 > A(Kr, fe))
                (ee[lt] = Kr), (ee[un] = fe), (lt = un);
              else break e;
            }
          }
          return Le;
        }
        function A(ee, Le) {
          var fe = ee.sortIndex - Le.sortIndex;
          return fe !== 0 ? fe : ee.id - Le.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var F = performance;
          v.unstable_now = function () {
            return F.now();
          };
        } else {
          var y = Date,
            K = y.now();
          v.unstable_now = function () {
            return y.now() - K;
          };
        }
        var P = [],
          j = [],
          Z = 1,
          $ = null,
          J = 3,
          oe = !1,
          _e = !1,
          Ie = !1,
          at = typeof setTimeout == "function" ? setTimeout : null,
          kt = typeof clearTimeout == "function" ? clearTimeout : null,
          ke = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function xe(ee) {
          for (var Le = S(j); Le !== null; ) {
            if (Le.callback === null) D(j);
            else if (Le.startTime <= ee)
              D(j), (Le.sortIndex = Le.expirationTime), T(P, Le);
            else break;
            Le = S(j);
          }
        }
        function je(ee) {
          if (((Ie = !1), xe(ee), !_e))
            if (S(P) !== null) (_e = !0), Lt(We);
            else {
              var Le = S(j);
              Le !== null && Zn(je, Le.startTime - ee);
            }
        }
        function We(ee, Le) {
          (_e = !1), Ie && ((Ie = !1), kt(Gt), (Gt = -1)), (oe = !0);
          var fe = J;
          try {
            for (
              xe(Le), $ = S(P);
              $ !== null && (!($.expirationTime > Le) || (ee && !dt()));

            ) {
              var lt = $.callback;
              if (typeof lt == "function") {
                ($.callback = null), (J = $.priorityLevel);
                var ct = lt($.expirationTime <= Le);
                (Le = v.unstable_now()),
                  typeof ct == "function"
                    ? ($.callback = ct)
                    : $ === S(P) && D(P),
                  xe(Le);
              } else D(P);
              $ = S(P);
            }
            if ($ !== null) var kn = !0;
            else {
              var er = S(j);
              er !== null && Zn(je, er.startTime - Le), (kn = !1);
            }
            return kn;
          } finally {
            ($ = null), (J = fe), (oe = !1);
          }
        }
        var mt = !1,
          $e = null,
          Gt = -1,
          mn = 5,
          wt = -1;
        function dt() {
          return !(v.unstable_now() - wt < mn);
        }
        function Dn() {
          if ($e !== null) {
            var ee = v.unstable_now();
            wt = ee;
            var Le = !0;
            try {
              Le = $e(!0, ee);
            } finally {
              Le ? Fe() : ((mt = !1), ($e = null));
            }
          } else mt = !1;
        }
        var Fe;
        if (typeof ke == "function")
          Fe = function () {
            ke(Dn);
          };
        else if (typeof MessageChannel < "u") {
          var et = new MessageChannel(),
            yn = et.port2;
          (et.port1.onmessage = Dn),
            (Fe = function () {
              yn.postMessage(null);
            });
        } else
          Fe = function () {
            at(Dn, 0);
          };
        function Lt(ee) {
          ($e = ee), mt || ((mt = !0), Fe());
        }
        function Zn(ee, Le) {
          Gt = at(function () {
            ee(v.unstable_now());
          }, Le);
        }
        (v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (ee) {
            ee.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            _e || oe || ((_e = !0), Lt(We));
          }),
          (v.unstable_forceFrameRate = function (ee) {
            0 > ee || 125 < ee
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (mn = 0 < ee ? Math.floor(1e3 / ee) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return S(P);
          }),
          (v.unstable_next = function (ee) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var Le = 3;
                break;
              default:
                Le = J;
            }
            var fe = J;
            J = Le;
            try {
              return ee();
            } finally {
              J = fe;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (ee, Le) {
            switch (ee) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                ee = 3;
            }
            var fe = J;
            J = ee;
            try {
              return Le();
            } finally {
              J = fe;
            }
          }),
          (v.unstable_scheduleCallback = function (ee, Le, fe) {
            var lt = v.unstable_now();
            switch (
              (typeof fe == "object" && fe !== null
                ? ((fe = fe.delay),
                  (fe = typeof fe == "number" && 0 < fe ? lt + fe : lt))
                : (fe = lt),
              ee)
            ) {
              case 1:
                var ct = -1;
                break;
              case 2:
                ct = 250;
                break;
              case 5:
                ct = 1073741823;
                break;
              case 4:
                ct = 1e4;
                break;
              default:
                ct = 5e3;
            }
            return (
              (ct = fe + ct),
              (ee = {
                id: Z++,
                callback: Le,
                priorityLevel: ee,
                startTime: fe,
                expirationTime: ct,
                sortIndex: -1,
              }),
              fe > lt
                ? ((ee.sortIndex = fe),
                  T(j, ee),
                  S(P) === null &&
                    ee === S(j) &&
                    (Ie ? (kt(Gt), (Gt = -1)) : (Ie = !0), Zn(je, fe - lt)))
                : ((ee.sortIndex = ct),
                  T(P, ee),
                  _e || oe || ((_e = !0), Lt(We))),
              ee
            );
          }),
          (v.unstable_shouldYield = dt),
          (v.unstable_wrapCallback = function (ee) {
            var Le = J;
            return function () {
              var fe = J;
              J = Le;
              try {
                return ee.apply(this, arguments);
              } finally {
                J = fe;
              }
            };
          });
      })(k0)),
    k0
  );
}
var L0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var LT;
function ck() {
  return (
    LT ||
      ((LT = 1),
      (function (v) {
        process.env.NODE_ENV !== "production" &&
          (function () {
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
                new Error(),
              );
            var T = !1,
              S = !1,
              D = 5;
            function A(ie, we) {
              var Ge = ie.length;
              ie.push(we), K(ie, we, Ge);
            }
            function F(ie) {
              return ie.length === 0 ? null : ie[0];
            }
            function y(ie) {
              if (ie.length === 0) return null;
              var we = ie[0],
                Ge = ie.pop();
              return Ge !== we && ((ie[0] = Ge), P(ie, Ge, 0)), we;
            }
            function K(ie, we, Ge) {
              for (var yt = Ge; yt > 0; ) {
                var Ht = (yt - 1) >>> 1,
                  Sn = ie[Ht];
                if (j(Sn, we) > 0) (ie[Ht] = we), (ie[yt] = Sn), (yt = Ht);
                else return;
              }
            }
            function P(ie, we, Ge) {
              for (var yt = Ge, Ht = ie.length, Sn = Ht >>> 1; yt < Sn; ) {
                var Xt = (yt + 1) * 2 - 1,
                  pr = ie[Xt],
                  bt = Xt + 1,
                  zr = ie[bt];
                if (j(pr, we) < 0)
                  bt < Ht && j(zr, pr) < 0
                    ? ((ie[yt] = zr), (ie[bt] = we), (yt = bt))
                    : ((ie[yt] = pr), (ie[Xt] = we), (yt = Xt));
                else if (bt < Ht && j(zr, we) < 0)
                  (ie[yt] = zr), (ie[bt] = we), (yt = bt);
                else return;
              }
            }
            function j(ie, we) {
              var Ge = ie.sortIndex - we.sortIndex;
              return Ge !== 0 ? Ge : ie.id - we.id;
            }
            var Z = 1,
              $ = 2,
              J = 3,
              oe = 4,
              _e = 5;
            function Ie(ie, we) {}
            var at =
              typeof performance == "object" &&
              typeof performance.now == "function";
            if (at) {
              var kt = performance;
              v.unstable_now = function () {
                return kt.now();
              };
            } else {
              var ke = Date,
                xe = ke.now();
              v.unstable_now = function () {
                return ke.now() - xe;
              };
            }
            var je = 1073741823,
              We = -1,
              mt = 250,
              $e = 5e3,
              Gt = 1e4,
              mn = je,
              wt = [],
              dt = [],
              Dn = 1,
              Fe = null,
              et = J,
              yn = !1,
              Lt = !1,
              Zn = !1,
              ee = typeof setTimeout == "function" ? setTimeout : null,
              Le = typeof clearTimeout == "function" ? clearTimeout : null,
              fe = typeof setImmediate < "u" ? setImmediate : null;
            typeof navigator < "u" &&
              navigator.scheduling !== void 0 &&
              navigator.scheduling.isInputPending !== void 0 &&
              navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function lt(ie) {
              for (var we = F(dt); we !== null; ) {
                if (we.callback === null) y(dt);
                else if (we.startTime <= ie)
                  y(dt), (we.sortIndex = we.expirationTime), A(wt, we);
                else return;
                we = F(dt);
              }
            }
            function ct(ie) {
              if (((Zn = !1), lt(ie), !Lt))
                if (F(wt) !== null) (Lt = !0), wa(kn);
                else {
                  var we = F(dt);
                  we !== null && en(ct, we.startTime - ie);
                }
            }
            function kn(ie, we) {
              (Lt = !1), Zn && ((Zn = !1), Ur()), (yn = !0);
              var Ge = et;
              try {
                var yt;
                if (!S) return er(ie, we);
              } finally {
                (Fe = null), (et = Ge), (yn = !1);
              }
            }
            function er(ie, we) {
              var Ge = we;
              for (
                lt(Ge), Fe = F(wt);
                Fe !== null && !T && !(Fe.expirationTime > Ge && (!ie || Ra()));

              ) {
                var yt = Fe.callback;
                if (typeof yt == "function") {
                  (Fe.callback = null), (et = Fe.priorityLevel);
                  var Ht = Fe.expirationTime <= Ge,
                    Sn = yt(Ht);
                  (Ge = v.unstable_now()),
                    typeof Sn == "function"
                      ? (Fe.callback = Sn)
                      : Fe === F(wt) && y(wt),
                    lt(Ge);
                } else y(wt);
                Fe = F(wt);
              }
              if (Fe !== null) return !0;
              var Xt = F(dt);
              return Xt !== null && en(ct, Xt.startTime - Ge), !1;
            }
            function Fa(ie, we) {
              switch (ie) {
                case Z:
                case $:
                case J:
                case oe:
                case _e:
                  break;
                default:
                  ie = J;
              }
              var Ge = et;
              et = ie;
              try {
                return we();
              } finally {
                et = Ge;
              }
            }
            function un(ie) {
              var we;
              switch (et) {
                case Z:
                case $:
                case J:
                  we = J;
                  break;
                default:
                  we = et;
                  break;
              }
              var Ge = et;
              et = we;
              try {
                return ie();
              } finally {
                et = Ge;
              }
            }
            function Kr(ie) {
              var we = et;
              return function () {
                var Ge = et;
                et = we;
                try {
                  return ie.apply(this, arguments);
                } finally {
                  et = Ge;
                }
              };
            }
            function $n(ie, we, Ge) {
              var yt = v.unstable_now(),
                Ht;
              if (typeof Ge == "object" && Ge !== null) {
                var Sn = Ge.delay;
                typeof Sn == "number" && Sn > 0 ? (Ht = yt + Sn) : (Ht = yt);
              } else Ht = yt;
              var Xt;
              switch (ie) {
                case Z:
                  Xt = We;
                  break;
                case $:
                  Xt = mt;
                  break;
                case _e:
                  Xt = mn;
                  break;
                case oe:
                  Xt = Gt;
                  break;
                case J:
                default:
                  Xt = $e;
                  break;
              }
              var pr = Ht + Xt,
                bt = {
                  id: Dn++,
                  callback: we,
                  priorityLevel: ie,
                  startTime: Ht,
                  expirationTime: pr,
                  sortIndex: -1,
                };
              return (
                Ht > yt
                  ? ((bt.sortIndex = Ht),
                    A(dt, bt),
                    F(wt) === null &&
                      bt === F(dt) &&
                      (Zn ? Ur() : (Zn = !0), en(ct, Ht - yt)))
                  : ((bt.sortIndex = pr),
                    A(wt, bt),
                    !Lt && !yn && ((Lt = !0), wa(kn))),
                bt
              );
            }
            function fr() {}
            function Ha() {
              !Lt && !yn && ((Lt = !0), wa(kn));
            }
            function dr() {
              return F(wt);
            }
            function qr(ie) {
              ie.callback = null;
            }
            function gn() {
              return et;
            }
            var Yn = !1,
              Ln = null,
              Nn = -1,
              Wn = D,
              Jr = -1;
            function Ra() {
              var ie = v.unstable_now() - Jr;
              return !(ie < Wn);
            }
            function ai() {}
            function Va(ie) {
              if (ie < 0 || ie > 125) {
                console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                );
                return;
              }
              ie > 0 ? (Wn = Math.floor(1e3 / ie)) : (Wn = D);
            }
            var xa = function () {
                if (Ln !== null) {
                  var ie = v.unstable_now();
                  Jr = ie;
                  var we = !0,
                    Ge = !0;
                  try {
                    Ge = Ln(we, ie);
                  } finally {
                    Ge ? Or() : ((Yn = !1), (Ln = null));
                  }
                } else Yn = !1;
              },
              Or;
            if (typeof fe == "function")
              Or = function () {
                fe(xa);
              };
            else if (typeof MessageChannel < "u") {
              var Ba = new MessageChannel(),
                Mr = Ba.port2;
              (Ba.port1.onmessage = xa),
                (Or = function () {
                  Mr.postMessage(null);
                });
            } else
              Or = function () {
                ee(xa, 0);
              };
            function wa(ie) {
              (Ln = ie), Yn || ((Yn = !0), Or());
            }
            function en(ie, we) {
              Nn = ee(function () {
                ie(v.unstable_now());
              }, we);
            }
            function Ur() {
              Le(Nn), (Nn = -1);
            }
            var Oi = ai,
              ba = null;
            (v.unstable_IdlePriority = _e),
              (v.unstable_ImmediatePriority = Z),
              (v.unstable_LowPriority = oe),
              (v.unstable_NormalPriority = J),
              (v.unstable_Profiling = ba),
              (v.unstable_UserBlockingPriority = $),
              (v.unstable_cancelCallback = qr),
              (v.unstable_continueExecution = Ha),
              (v.unstable_forceFrameRate = Va),
              (v.unstable_getCurrentPriorityLevel = gn),
              (v.unstable_getFirstCallbackNode = dr),
              (v.unstable_next = un),
              (v.unstable_pauseExecution = fr),
              (v.unstable_requestPaint = Oi),
              (v.unstable_runWithPriority = Fa),
              (v.unstable_scheduleCallback = $n),
              (v.unstable_shouldYield = Ra),
              (v.unstable_wrapCallback = Kr),
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                  "function" &&
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                  new Error(),
                );
          })();
      })(L0)),
    L0
  );
}
var NT;
function $T() {
  return (
    NT ||
      ((NT = 1),
      process.env.NODE_ENV === "production"
        ? (Ym.exports = sk())
        : (Ym.exports = ck())),
    Ym.exports
  );
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OT;
function fk() {
  if (OT) return Ca;
  OT = 1;
  var v = Km,
    T = $T();
  function S(n) {
    for (
      var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n,
        l = 1;
      l < arguments.length;
      l++
    )
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return (
      "Minified React error #" +
      n +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var D = /* @__PURE__ */ new Set(),
    A = {};
  function F(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (A[n] = r, n = 0; n < r.length; n++) D.add(r[n]);
  }
  var K = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    P = Object.prototype.hasOwnProperty,
    j =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Z = {},
    $ = {};
  function J(n) {
    return P.call($, n)
      ? !0
      : P.call(Z, n)
        ? !1
        : j.test(n)
          ? ($[n] = !0)
          : ((Z[n] = !0), !1);
  }
  function oe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : l !== null
            ? !l.acceptsBooleans
            : ((n = n.toLowerCase().slice(0, 5)),
              n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function _e(n, r, l, o) {
    if (r === null || typeof r > "u" || oe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Ie(n, r, l, o, c, d, m) {
    (this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = o),
      (this.attributeNamespace = c),
      (this.mustUseProperty = l),
      (this.propertyName = n),
      (this.type = r),
      (this.sanitizeURL = d),
      (this.removeEmptyString = m);
  }
  var at = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (n) {
      at[n] = new Ie(n, 0, !1, n, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (n) {
      var r = n[0];
      at[r] = new Ie(r, 1, !1, n[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (n) {
        at[n] = new Ie(n, 2, !1, n.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (n) {
      at[n] = new Ie(n, 2, !1, n, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (n) {
        at[n] = new Ie(n, 3, !1, n.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      at[n] = new Ie(n, 3, !0, n, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (n) {
      at[n] = new Ie(n, 4, !1, n, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (n) {
      at[n] = new Ie(n, 6, !1, n, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (n) {
      at[n] = new Ie(n, 5, !1, n.toLowerCase(), null, !1, !1);
    });
  var kt = /[\-:]([a-z])/g;
  function ke(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (n) {
      var r = n.replace(kt, ke);
      at[r] = new Ie(r, 1, !1, n, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (n) {
        var r = n.replace(kt, ke);
        at[r] = new Ie(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var r = n.replace(kt, ke);
      at[r] = new Ie(
        r,
        1,
        !1,
        n,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (n) {
      at[n] = new Ie(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (at.xlinkHref = new Ie(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (n) {
      at[n] = new Ie(n, 1, !1, n.toLowerCase(), null, !0, !0);
    });
  function xe(n, r, l, o) {
    var c = at.hasOwnProperty(r) ? at[r] : null;
    (c !== null
      ? c.type !== 0
      : o ||
        !(2 < r.length) ||
        (r[0] !== "o" && r[0] !== "O") ||
        (r[1] !== "n" && r[1] !== "N")) &&
      (_e(r, l, c, o) && (l = null),
      o || c === null
        ? J(r) &&
          (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l))
        : c.mustUseProperty
          ? (n[c.propertyName] = l === null ? (c.type === 3 ? !1 : "") : l)
          : ((r = c.attributeName),
            (o = c.attributeNamespace),
            l === null
              ? n.removeAttribute(r)
              : ((c = c.type),
                (l = c === 3 || (c === 4 && l === !0) ? "" : "" + l),
                o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var je = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    We = Symbol.for("react.element"),
    mt = Symbol.for("react.portal"),
    $e = Symbol.for("react.fragment"),
    Gt = Symbol.for("react.strict_mode"),
    mn = Symbol.for("react.profiler"),
    wt = Symbol.for("react.provider"),
    dt = Symbol.for("react.context"),
    Dn = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    yn = Symbol.for("react.memo"),
    Lt = Symbol.for("react.lazy"),
    Zn = Symbol.for("react.offscreen"),
    ee = Symbol.iterator;
  function Le(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (ee && n[ee]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var fe = Object.assign,
    lt;
  function ct(n) {
    if (lt === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        lt = (r && r[1]) || "";
      }
    return (
      `
` +
      lt +
      n
    );
  }
  var kn = !1;
  function er(n, r) {
    if (!n || kn) return "";
    kn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (U) {
            var o = U;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (U) {
            o = U;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (
          var c = U.stack.split(`
`),
            d = o.stack.split(`
`),
            m = c.length - 1,
            C = d.length - 1;
          1 <= m && 0 <= C && c[m] !== d[C];

        )
          C--;
        for (; 1 <= m && 0 <= C; m--, C--)
          if (c[m] !== d[C]) {
            if (m !== 1 || C !== 1)
              do
                if ((m--, C--, 0 > C || c[m] !== d[C])) {
                  var x =
                    `
` + c[m].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", n.displayName)),
                    x
                  );
                }
              while (1 <= m && 0 <= C);
            break;
          }
      }
    } finally {
      (kn = !1), (Error.prepareStackTrace = l);
    }
    return (n = n ? n.displayName || n.name : "") ? ct(n) : "";
  }
  function Fa(n) {
    switch (n.tag) {
      case 5:
        return ct(n.type);
      case 16:
        return ct("Lazy");
      case 13:
        return ct("Suspense");
      case 19:
        return ct("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (n = er(n.type, !1)), n;
      case 11:
        return (n = er(n.type.render, !1)), n;
      case 1:
        return (n = er(n.type, !0)), n;
      default:
        return "";
    }
  }
  function un(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case $e:
        return "Fragment";
      case mt:
        return "Portal";
      case mn:
        return "Profiler";
      case Gt:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case dt:
          return (n.displayName || "Context") + ".Consumer";
        case wt:
          return (n._context.displayName || "Context") + ".Provider";
        case Dn:
          var r = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case yn:
          return (
            (r = n.displayName || null), r !== null ? r : un(n.type) || "Memo"
          );
        case Lt:
          (r = n._payload), (n = n._init);
          try {
            return un(n(r));
          } catch {}
      }
    return null;
  }
  function Kr(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (n = r.render),
          (n = n.displayName || n.name || ""),
          r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return un(r);
      case 8:
        return r === Gt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function $n(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function fr(n) {
    var r = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function Ha(n) {
    var r = fr(n) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r),
      o = "" + n[r];
    if (
      !n.hasOwnProperty(r) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var c = l.get,
        d = l.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (m) {
            (o = "" + m), d.call(this, m);
          },
        }),
        Object.defineProperty(n, r, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (m) {
            o = "" + m;
          },
          stopTracking: function () {
            (n._valueTracker = null), delete n[r];
          },
        }
      );
    }
  }
  function dr(n) {
    n._valueTracker || (n._valueTracker = Ha(n));
  }
  function qr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(),
      o = "";
    return (
      n && (o = fr(n) ? (n.checked ? "true" : "false") : n.value),
      (n = o),
      n !== l ? (r.setValue(n), !0) : !1
    );
  }
  function gn(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var l = r.checked;
    return fe({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: l ?? n._wrapperState.initialChecked,
    });
  }
  function Ln(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue,
      o = r.checked != null ? r.checked : r.defaultChecked;
    (l = $n(r.value != null ? r.value : l)),
      (n._wrapperState = {
        initialChecked: o,
        initialValue: l,
        controlled:
          r.type === "checkbox" || r.type === "radio"
            ? r.checked != null
            : r.value != null,
      });
  }
  function Nn(n, r) {
    (r = r.checked), r != null && xe(n, "checked", r, !1);
  }
  function Wn(n, r) {
    Nn(n, r);
    var l = $n(r.value),
      o = r.type;
    if (l != null)
      o === "number"
        ? ((l === 0 && n.value === "") || n.value != l) && (n.value = "" + l)
        : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value")
      ? Ra(n, r.type, l)
      : r.hasOwnProperty("defaultValue") && Ra(n, r.type, $n(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (n.defaultChecked = !!r.defaultChecked);
  }
  function Jr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (
        !(
          (o !== "submit" && o !== "reset") ||
          (r.value !== void 0 && r.value !== null)
        )
      )
        return;
      (r = "" + n._wrapperState.initialValue),
        l || r === n.value || (n.value = r),
        (n.defaultValue = r);
    }
    (l = n.name),
      l !== "" && (n.name = ""),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      l !== "" && (n.name = l);
  }
  function Ra(n, r, l) {
    (r !== "number" || gn(n.ownerDocument) !== n) &&
      (l == null
        ? (n.defaultValue = "" + n._wrapperState.initialValue)
        : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ai = Array.isArray;
  function Va(n, r, l, o) {
    if (((n = n.options), r)) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        (c = r.hasOwnProperty("$" + n[l].value)),
          n[l].selected !== c && (n[l].selected = c),
          c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + $n(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          (n[c].selected = !0), o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function xa(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(S(91));
    return fe({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue,
    });
  }
  function Or(n, r) {
    var l = r.value;
    if (l == null) {
      if (((l = r.children), (r = r.defaultValue), l != null)) {
        if (r != null) throw Error(S(92));
        if (ai(l)) {
          if (1 < l.length) throw Error(S(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), (l = r);
    }
    n._wrapperState = { initialValue: $n(l) };
  }
  function Ba(n, r) {
    var l = $n(r.value),
      o = $n(r.defaultValue);
    l != null &&
      ((l = "" + l),
      l !== n.value && (n.value = l),
      r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)),
      o != null && (n.defaultValue = "" + o);
  }
  function Mr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue &&
      r !== "" &&
      r !== null &&
      (n.value = r);
  }
  function wa(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function en(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml"
      ? wa(r)
      : n === "http://www.w3.org/2000/svg" && r === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : n;
  }
  var Ur,
    Oi = (function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (r, l, o, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(r, l, o, c);
            });
          }
        : n;
    })(function (n, r) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
        n.innerHTML = r;
      else {
        for (
          Ur = Ur || document.createElement("div"),
            Ur.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = Ur.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild);
        for (; r.firstChild; ) n.appendChild(r.firstChild);
      }
    });
  function ba(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ie = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    we = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ie).forEach(function (n) {
    we.forEach(function (r) {
      (r = r + n.charAt(0).toUpperCase() + n.substring(1)), (ie[r] = ie[n]);
    });
  });
  function Ge(n, r, l) {
    return r == null || typeof r == "boolean" || r === ""
      ? ""
      : l || typeof r != "number" || r === 0 || (ie.hasOwnProperty(n) && ie[n])
        ? ("" + r).trim()
        : r + "px";
  }
  function yt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0,
          c = Ge(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : (n[l] = c);
      }
  }
  var Ht = fe(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Sn(n, r) {
    if (r) {
      if (Ht[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(S(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(S(60));
        if (
          typeof r.dangerouslySetInnerHTML != "object" ||
          !("__html" in r.dangerouslySetInnerHTML)
        )
          throw Error(S(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(S(62));
    }
  }
  function Xt(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var pr = null;
  function bt(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var zr = null,
    Rt = null,
    _t = null;
  function Zl(n) {
    if ((n = No(n))) {
      if (typeof zr != "function") throw Error(S(280));
      var r = n.stateNode;
      r && ((r = be(r)), zr(n.stateNode, n.type, r));
    }
  }
  function sl(n) {
    Rt ? (_t ? _t.push(n) : (_t = [n])) : (Rt = n);
  }
  function eu() {
    if (Rt) {
      var n = Rt,
        r = _t;
      if (((_t = Rt = null), Zl(n), r)) for (n = 0; n < r.length; n++) Zl(r[n]);
    }
  }
  function oo(n, r) {
    return n(r);
  }
  function Ts() {}
  var cl = !1;
  function tu(n, r, l) {
    if (cl) return n(r, l);
    cl = !0;
    try {
      return oo(n, r, l);
    } finally {
      (cl = !1), (Rt !== null || _t !== null) && (Ts(), eu());
    }
  }
  function fl(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = be(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((n = n.type),
          (o = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !o);
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(S(231, r, typeof l));
    return l;
  }
  var nu = !1;
  if (K)
    try {
      var Pa = {};
      Object.defineProperty(Pa, "passive", {
        get: function () {
          nu = !0;
        },
      }),
        window.addEventListener("test", Pa, Pa),
        window.removeEventListener("test", Pa, Pa);
    } catch {
      nu = !1;
    }
  function ii(n, r, l, o, c, d, m, C, x) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Ar = !1,
    _a = null,
    Mi = !1,
    dl = null,
    R = {
      onError: function (n) {
        (Ar = !0), (_a = n);
      },
    };
  function I(n, r, l, o, c, d, m, C, x) {
    (Ar = !1), (_a = null), ii.apply(R, arguments);
  }
  function ne(n, r, l, o, c, d, m, C, x) {
    if ((I.apply(this, arguments), Ar)) {
      if (Ar) {
        var U = _a;
        (Ar = !1), (_a = null);
      } else throw Error(S(198));
      Mi || ((Mi = !0), (dl = U));
    }
  }
  function Te(n) {
    var r = n,
      l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do (r = n), r.flags & 4098 && (l = r.return), (n = r.return);
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function tt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        (r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function it(n) {
    if (Te(n) !== n) throw Error(S(188));
  }
  function Me(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = Te(n)), r === null)) throw Error(S(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((o = c.return), o !== null)) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return it(c), n;
          if (d === o) return it(c), r;
          d = d.sibling;
        }
        throw Error(S(188));
      }
      if (l.return !== o.return) (l = c), (o = d);
      else {
        for (var m = !1, C = c.child; C; ) {
          if (C === l) {
            (m = !0), (l = c), (o = d);
            break;
          }
          if (C === o) {
            (m = !0), (o = c), (l = d);
            break;
          }
          C = C.sibling;
        }
        if (!m) {
          for (C = d.child; C; ) {
            if (C === l) {
              (m = !0), (l = d), (o = c);
              break;
            }
            if (C === o) {
              (m = !0), (o = d), (l = c);
              break;
            }
            C = C.sibling;
          }
          if (!m) throw Error(S(189));
        }
      }
      if (l.alternate !== o) throw Error(S(190));
    }
    if (l.tag !== 3) throw Error(S(188));
    return l.stateNode.current === l ? n : r;
  }
  function Xe(n) {
    return (n = Me(n)), n !== null ? En(n) : null;
  }
  function En(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = En(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Nt = T.unstable_scheduleCallback,
    Vt = T.unstable_cancelCallback,
    vr = T.unstable_shouldYield,
    Ui = T.unstable_requestPaint,
    pt = T.unstable_now,
    Qn = T.unstable_getCurrentPriorityLevel,
    jr = T.unstable_ImmediatePriority,
    Ke = T.unstable_UserBlockingPriority,
    $a = T.unstable_NormalPriority,
    Bp = T.unstable_LowPriority,
    wf = T.unstable_IdlePriority,
    so = null,
    Da = null;
  function Pp(n) {
    if (Da && typeof Da.onCommitFiberRoot == "function")
      try {
        Da.onCommitFiberRoot(so, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var Zr = Math.clz32 ? Math.clz32 : ty,
    $p = Math.log,
    Yp = Math.LN2;
  function ty(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - (($p(n) / Yp) | 0)) | 0;
  }
  var Rs = 64,
    ru = 4194304;
  function pl(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ka(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      c = n.suspendedLanes,
      d = n.pingedLanes,
      m = l & 268435455;
    if (m !== 0) {
      var C = m & ~c;
      C !== 0 ? (o = pl(C)) : ((d &= m), d !== 0 && (o = pl(d)));
    } else (m = l & ~c), m !== 0 ? (o = pl(m)) : d !== 0 && (o = pl(d));
    if (o === 0) return 0;
    if (
      r !== 0 &&
      r !== o &&
      !(r & c) &&
      ((c = o & -o), (d = r & -r), c >= d || (c === 16 && (d & 4194240) !== 0))
    )
      return r;
    if ((o & 4 && (o |= l & 16), (r = n.entangledLanes), r !== 0))
      for (n = n.entanglements, r &= o; 0 < r; )
        (l = 31 - Zr(r)), (c = 1 << l), (o |= n[l]), (r &= ~c);
    return o;
  }
  function bf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function xs(n, r) {
    for (
      var l = n.suspendedLanes,
        o = n.pingedLanes,
        c = n.expirationTimes,
        d = n.pendingLanes;
      0 < d;

    ) {
      var m = 31 - Zr(d),
        C = 1 << m,
        x = c[m];
      x === -1
        ? (!(C & l) || C & o) && (c[m] = bf(C, r))
        : x <= r && (n.expiredLanes |= C),
        (d &= ~C);
    }
  }
  function _f(n) {
    return (
      (n = n.pendingLanes & -1073741825),
      n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    );
  }
  function ws() {
    var n = Rs;
    return (Rs <<= 1), !(Rs & 4194240) && (Rs = 64), n;
  }
  function Df(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function vl(n, r, l) {
    (n.pendingLanes |= r),
      r !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (r = 31 - Zr(r)),
      (n[r] = l);
  }
  function ny(n, r) {
    var l = n.pendingLanes & ~r;
    (n.pendingLanes = r),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= r),
      (n.mutableReadLanes &= r),
      (n.entangledLanes &= r),
      (r = n.entanglements);
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Zr(l),
        d = 1 << c;
      (r[c] = 0), (o[c] = -1), (n[c] = -1), (l &= ~d);
    }
  }
  function co(n, r) {
    var l = (n.entangledLanes |= r);
    for (n = n.entanglements; l; ) {
      var o = 31 - Zr(l),
        c = 1 << o;
      (c & r) | (n[o] & r) && (n[o] |= r), (l &= ~c);
    }
  }
  var gt = 0;
  function kf(n) {
    return (
      (n &= -n), 1 < n ? (4 < n ? (n & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Wp,
    bs,
    St,
    Qp,
    Lf,
    Be = !1,
    fo = [],
    tn = null,
    ea = null,
    ta = null,
    po = /* @__PURE__ */ new Map(),
    on = /* @__PURE__ */ new Map(),
    Et = [],
    ry =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function La(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        ta = null;
        break;
      case "pointerover":
      case "pointerout":
        po.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        on.delete(r.pointerId);
    }
  }
  function In(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d
      ? ((n = {
          blockedOn: r,
          domEventName: l,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [c],
        }),
        r !== null && ((r = No(r)), r !== null && bs(r)),
        n)
      : ((n.eventSystemFlags |= o),
        (r = n.targetContainers),
        c !== null && r.indexOf(c) === -1 && r.push(c),
        n);
  }
  function zi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return (tn = In(tn, n, r, l, o, c)), !0;
      case "dragenter":
        return (ea = In(ea, n, r, l, o, c)), !0;
      case "mouseover":
        return (ta = In(ta, n, r, l, o, c)), !0;
      case "pointerover":
        var d = c.pointerId;
        return po.set(d, In(po.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return (
          (d = c.pointerId), on.set(d, In(on.get(d) || null, n, r, l, o, c)), !0
        );
    }
    return !1;
  }
  function Ip(n) {
    var r = ra(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (((r = l.tag), r === 13)) {
          if (((r = tt(l)), r !== null)) {
            (n.blockedOn = r),
              Lf(n.priority, function () {
                St(l);
              });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function au(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ks(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        (pr = o), l.target.dispatchEvent(o), (pr = null);
      } else return (r = No(l)), r !== null && bs(r), (n.blockedOn = l), !1;
      r.shift();
    }
    return !0;
  }
  function Nf(n, r, l) {
    au(n) && l.delete(r);
  }
  function Gp() {
    (Be = !1),
      tn !== null && au(tn) && (tn = null),
      ea !== null && au(ea) && (ea = null),
      ta !== null && au(ta) && (ta = null),
      po.forEach(Nf),
      on.forEach(Nf);
  }
  function vo(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      Be ||
        ((Be = !0),
        T.unstable_scheduleCallback(T.unstable_NormalPriority, Gp)));
  }
  function ho(n) {
    function r(c) {
      return vo(c, n);
    }
    if (0 < fo.length) {
      vo(fo[0], n);
      for (var l = 1; l < fo.length; l++) {
        var o = fo[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (
      tn !== null && vo(tn, n),
        ea !== null && vo(ea, n),
        ta !== null && vo(ta, n),
        po.forEach(r),
        on.forEach(r),
        l = 0;
      l < Et.length;
      l++
    )
      (o = Et[l]), o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Et.length && ((l = Et[0]), l.blockedOn === null); )
      Ip(l), l.blockedOn === null && Et.shift();
  }
  var iu = je.ReactCurrentBatchConfig,
    hl = !0;
  function Xp(n, r, l, o) {
    var c = gt,
      d = iu.transition;
    iu.transition = null;
    try {
      (gt = 1), Ds(n, r, l, o);
    } finally {
      (gt = c), (iu.transition = d);
    }
  }
  function _s(n, r, l, o) {
    var c = gt,
      d = iu.transition;
    iu.transition = null;
    try {
      (gt = 4), Ds(n, r, l, o);
    } finally {
      (gt = c), (iu.transition = d);
    }
  }
  function Ds(n, r, l, o) {
    if (hl) {
      var c = ks(n, r, l, o);
      if (c === null) Bs(n, r, o, mo, l), La(n, o);
      else if (zi(c, n, r, l, o)) o.stopPropagation();
      else if ((La(n, o), r & 4 && -1 < ry.indexOf(n))) {
        for (; c !== null; ) {
          var d = No(c);
          if (
            (d !== null && Wp(d),
            (d = ks(n, r, l, o)),
            d === null && Bs(n, r, o, mo, l),
            d === c)
          )
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Bs(n, r, o, null, l);
    }
  }
  var mo = null;
  function ks(n, r, l, o) {
    if (((mo = null), (n = bt(o)), (n = ra(n)), n !== null))
      if (((r = Te(n)), r === null)) n = null;
      else if (((l = r.tag), l === 13)) {
        if (((n = tt(r)), n !== null)) return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else r !== n && (n = null);
    return (mo = n), null;
  }
  function Of(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Qn()) {
          case jr:
            return 1;
          case Ke:
            return 4;
          case $a:
          case Bp:
            return 16;
          case wf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var li = null,
    yo = null,
    go = null;
  function Mf() {
    if (go) return go;
    var n,
      r = yo,
      l = r.length,
      o,
      c = "value" in li ? li.value : li.textContent,
      d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++);
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++);
    return (go = c.slice(n, 1 < o ? 1 - o : void 0));
  }
  function lu(n) {
    var r = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && r === 13 && (n = 13))
        : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function So() {
    return !0;
  }
  function Kp() {
    return !1;
  }
  function Fr(n) {
    function r(l, o, c, d, m) {
      (this._reactName = l),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = m),
        (this.currentTarget = null);
      for (var C in n)
        n.hasOwnProperty(C) && ((l = n[C]), (this[C] = l ? l(d) : d[C]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? So
          : Kp),
        (this.isPropagationStopped = Kp),
        this
      );
    }
    return (
      fe(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = So));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = So));
        },
        persist: function () {},
        isPersistent: So,
      }),
      r
    );
  }
  var Ai = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ls = Fr(Ai),
    uu = fe({}, Ai, { view: 0, detail: 0 }),
    qp = Fr(uu),
    Ns,
    Uf,
    Eo,
    Cn = fe({}, uu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ff,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Eo &&
              (Eo && n.type === "mousemove"
                ? ((Ns = n.screenX - Eo.screenX), (Uf = n.screenY - Eo.screenY))
                : (Uf = Ns = 0),
              (Eo = n)),
            Ns);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Uf;
      },
    }),
    Os = Fr(Cn),
    Jp = fe({}, Cn, { dataTransfer: 0 }),
    Zp = Fr(Jp),
    ay = fe({}, uu, { relatedTarget: 0 }),
    ji = Fr(ay),
    zf = fe({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ev = Fr(zf),
    iy = fe({}, Ai, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    ly = Fr(iy),
    uy = fe({}, Ai, { data: 0 }),
    Af = Fr(uy),
    jf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    tv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    nv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function rv(n) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(n)
      : (n = nv[n])
        ? !!r[n]
        : !1;
  }
  function Ff() {
    return rv;
  }
  var ui = fe({}, uu, {
      key: function (n) {
        if (n.key) {
          var r = jf[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress"
          ? ((n = lu(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? tv[n.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ff,
      charCode: function (n) {
        return n.type === "keypress" ? lu(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? lu(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    oy = Fr(ui),
    Hf = fe({}, Cn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ms = Fr(Hf),
    Vf = fe({}, uu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ff,
    }),
    sy = Fr(Vf),
    Us = fe({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    av = Fr(Us),
    hr = fe({}, Cn, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
            ? -n.wheelDeltaX
            : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
            ? -n.wheelDeltaY
            : "wheelDelta" in n
              ? -n.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    oi = Fr(hr),
    nn = [9, 13, 27, 32],
    Na = K && "CompositionEvent" in window,
    ml = null;
  K && "documentMode" in document && (ml = document.documentMode);
  var zs = K && "TextEvent" in window && !ml,
    iv = K && (!Na || (ml && 8 < ml && 11 >= ml)),
    ou = " ",
    lv = !1;
  function uv(n, r) {
    switch (n) {
      case "keyup":
        return nn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function As(n) {
    return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
  }
  var su = !1;
  function cy(n, r) {
    switch (n) {
      case "compositionend":
        return As(r);
      case "keypress":
        return r.which !== 32 ? null : ((lv = !0), ou);
      case "textInput":
        return (n = r.data), n === ou && lv ? null : n;
      default:
        return null;
    }
  }
  function fy(n, r) {
    if (su)
      return n === "compositionend" || (!Na && uv(n, r))
        ? ((n = Mf()), (go = yo = li = null), (su = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return iv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ov = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ov[n.type] : r === "textarea";
  }
  function cv(n, r, l, o) {
    sl(o),
      (r = Do(r, "onChange")),
      0 < r.length &&
        ((l = new Ls("onChange", "change", null, l, o)),
        n.push({ event: l, listeners: r }));
  }
  var Co = null,
    cu = null;
  function fu(n) {
    Vs(n, 0);
  }
  function du(n) {
    var r = vu(n);
    if (qr(r)) return n;
  }
  function fv(n, r) {
    if (n === "change") return r;
  }
  var Bf = !1;
  if (K) {
    var Pf;
    if (K) {
      var $f = "oninput" in document;
      if (!$f) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"),
          ($f = typeof dv.oninput == "function");
      }
      Pf = $f;
    } else Pf = !1;
    Bf = Pf && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    Co && (Co.detachEvent("onpropertychange", vv), (cu = Co = null));
  }
  function vv(n) {
    if (n.propertyName === "value" && du(cu)) {
      var r = [];
      cv(r, cu, n, bt(n)), tu(fu, r);
    }
  }
  function dy(n, r, l) {
    n === "focusin"
      ? (pv(), (Co = r), (cu = l), Co.attachEvent("onpropertychange", vv))
      : n === "focusout" && pv();
  }
  function py(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return du(cu);
  }
  function vy(n, r) {
    if (n === "click") return du(r);
  }
  function hv(n, r) {
    if (n === "input" || n === "change") return du(r);
  }
  function hy(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var na = typeof Object.is == "function" ? Object.is : hy;
  function To(n, r) {
    if (na(n, r)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var l = Object.keys(n),
      o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!P.call(r, c) || !na(n[c], r[c])) return !1;
    }
    return !0;
  }
  function mv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function yv(n, r) {
    var l = mv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (((o = n + l.textContent.length), n <= r && o >= r))
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = mv(l);
    }
  }
  function gv(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? gv(n, r.parentNode)
            : "contains" in n
              ? n.contains(r)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function js() {
    for (var n = window, r = gn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = gn(n.document);
    }
    return r;
  }
  function si(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        r === "textarea" ||
        n.contentEditable === "true")
    );
  }
  function Fs(n) {
    var r = js(),
      l = n.focusedElem,
      o = n.selectionRange;
    if (
      r !== l &&
      l &&
      l.ownerDocument &&
      gv(l.ownerDocument.documentElement, l)
    ) {
      if (o !== null && si(l)) {
        if (
          ((r = o.start),
          (n = o.end),
          n === void 0 && (n = r),
          "selectionStart" in l)
        )
          (l.selectionStart = r),
            (l.selectionEnd = Math.min(n, l.value.length));
        else if (
          ((n = ((r = l.ownerDocument || document) && r.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var c = l.textContent.length,
            d = Math.min(o.start, c);
          (o = o.end === void 0 ? d : Math.min(o.end, c)),
            !n.extend && d > o && ((c = o), (o = d), (d = c)),
            (c = yv(l, d));
          var m = yv(l, o);
          c &&
            m &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== c.node ||
              n.anchorOffset !== c.offset ||
              n.focusNode !== m.node ||
              n.focusOffset !== m.offset) &&
            ((r = r.createRange()),
            r.setStart(c.node, c.offset),
            n.removeAllRanges(),
            d > o
              ? (n.addRange(r), n.extend(m.node, m.offset))
              : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; (n = n.parentNode); )
        n.nodeType === 1 &&
          r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        (n = r[l]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var Sv = K && "documentMode" in document && 11 >= document.documentMode,
    Oa = null,
    Yf = null,
    Ro = null,
    Wf = !1;
  function Ev(n, r, l) {
    var o =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Wf ||
      Oa == null ||
      Oa !== gn(o) ||
      ((o = Oa),
      "selectionStart" in o && si(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Ro && To(Ro, o)) ||
        ((Ro = o),
        (o = Do(Yf, "onSelect")),
        0 < o.length &&
          ((r = new Ls("onSelect", "select", null, r, l)),
          n.push({ event: r, listeners: o }),
          (r.target = Oa))));
  }
  function Hs(n, r) {
    var l = {};
    return (
      (l[n.toLowerCase()] = r.toLowerCase()),
      (l["Webkit" + n] = "webkit" + r),
      (l["Moz" + n] = "moz" + r),
      l
    );
  }
  var yl = {
      animationend: Hs("Animation", "AnimationEnd"),
      animationiteration: Hs("Animation", "AnimationIteration"),
      animationstart: Hs("Animation", "AnimationStart"),
      transitionend: Hs("Transition", "TransitionEnd"),
    },
    Qf = {},
    If = {};
  K &&
    ((If = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yl.animationend.animation,
      delete yl.animationiteration.animation,
      delete yl.animationstart.animation),
    "TransitionEvent" in window || delete yl.transitionend.transition);
  function Tn(n) {
    if (Qf[n]) return Qf[n];
    if (!yl[n]) return n;
    var r = yl[n],
      l;
    for (l in r) if (r.hasOwnProperty(l) && l in If) return (Qf[n] = r[l]);
    return n;
  }
  var Gf = Tn("animationend"),
    Cv = Tn("animationiteration"),
    Tv = Tn("animationstart"),
    Rv = Tn("transitionend"),
    xv = /* @__PURE__ */ new Map(),
    wv =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function ci(n, r) {
    xv.set(n, r), F(r, [n]);
  }
  for (var xo = 0; xo < wv.length; xo++) {
    var gl = wv[xo],
      my = gl.toLowerCase(),
      wo = gl[0].toUpperCase() + gl.slice(1);
    ci(my, "on" + wo);
  }
  ci(Gf, "onAnimationEnd"),
    ci(Cv, "onAnimationIteration"),
    ci(Tv, "onAnimationStart"),
    ci("dblclick", "onDoubleClick"),
    ci("focusin", "onFocus"),
    ci("focusout", "onBlur"),
    ci(Rv, "onTransitionEnd"),
    y("onMouseEnter", ["mouseout", "mouseover"]),
    y("onMouseLeave", ["mouseout", "mouseover"]),
    y("onPointerEnter", ["pointerout", "pointerover"]),
    y("onPointerLeave", ["pointerout", "pointerover"]),
    F(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    F(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    F("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    F(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    F(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    F(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var bo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    yy = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(bo),
    );
  function bv(n, r, l) {
    var o = n.type || "unknown-event";
    (n.currentTarget = l), ne(o, r, void 0, n), (n.currentTarget = null);
  }
  function Vs(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l],
        c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var C = o[m],
              x = C.instance,
              U = C.currentTarget;
            if (((C = C.listener), x !== d && c.isPropagationStopped()))
              break e;
            bv(c, C, U), (d = x);
          }
        else
          for (m = 0; m < o.length; m++) {
            if (
              ((C = o[m]),
              (x = C.instance),
              (U = C.currentTarget),
              (C = C.listener),
              x !== d && c.isPropagationStopped())
            )
              break e;
            bv(c, C, U), (d = x);
          }
      }
    }
    if (Mi) throw ((n = dl), (Mi = !1), (dl = null), n);
  }
  function xt(n, r) {
    var l = r[td];
    l === void 0 && (l = r[td] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (_v(r, n, 2, !1), l.add(o));
  }
  function Fi(n, r, l) {
    var o = 0;
    r && (o |= 4), _v(l, n, o, r);
  }
  var fi = "_reactListening" + Math.random().toString(36).slice(2);
  function pu(n) {
    if (!n[fi]) {
      (n[fi] = !0),
        D.forEach(function (l) {
          l !== "selectionchange" && (yy.has(l) || Fi(l, !1, n), Fi(l, !0, n));
        });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[fi] || ((r[fi] = !0), Fi("selectionchange", !1, r));
    }
  }
  function _v(n, r, l, o) {
    switch (Of(r)) {
      case 1:
        var c = Xp;
        break;
      case 4:
        c = _s;
        break;
      default:
        c = Ds;
    }
    (l = c.bind(null, r, l, n)),
      (c = void 0),
      !nu ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (c = !0),
      o
        ? c !== void 0
          ? n.addEventListener(r, l, { capture: !0, passive: c })
          : n.addEventListener(r, l, !0)
        : c !== void 0
          ? n.addEventListener(r, l, { passive: c })
          : n.addEventListener(r, l, !1);
  }
  function Bs(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e: for (;;) {
        if (o === null) return;
        var m = o.tag;
        if (m === 3 || m === 4) {
          var C = o.stateNode.containerInfo;
          if (C === c || (C.nodeType === 8 && C.parentNode === c)) break;
          if (m === 4)
            for (m = o.return; m !== null; ) {
              var x = m.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = m.stateNode.containerInfo),
                x === c || (x.nodeType === 8 && x.parentNode === c))
              )
                return;
              m = m.return;
            }
          for (; C !== null; ) {
            if (((m = ra(C)), m === null)) return;
            if (((x = m.tag), x === 5 || x === 6)) {
              o = d = m;
              continue e;
            }
            C = C.parentNode;
          }
        }
        o = o.return;
      }
    tu(function () {
      var U = d,
        Q = bt(l),
        G = [];
      e: {
        var W = xv.get(n);
        if (W !== void 0) {
          var se = Ls,
            ve = n;
          switch (n) {
            case "keypress":
              if (lu(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = oy;
              break;
            case "focusin":
              (ve = "focus"), (se = ji);
              break;
            case "focusout":
              (ve = "blur"), (se = ji);
              break;
            case "beforeblur":
            case "afterblur":
              se = ji;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              se = Os;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Zp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = sy;
              break;
            case Gf:
            case Cv:
            case Tv:
              se = ev;
              break;
            case Rv:
              se = av;
              break;
            case "scroll":
              se = qp;
              break;
            case "wheel":
              se = oi;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = Ms;
          }
          var ye = (r & 4) !== 0,
            Jt = !ye && n === "scroll",
            k = ye ? (W !== null ? W + "Capture" : null) : W;
          ye = [];
          for (var b = U, O; b !== null; ) {
            O = b;
            var q = O.stateNode;
            if (
              (O.tag === 5 &&
                q !== null &&
                ((O = q),
                k !== null &&
                  ((q = fl(b, k)), q != null && ye.push(_o(b, q, O)))),
              Jt)
            )
              break;
            b = b.return;
          }
          0 < ye.length &&
            ((W = new se(W, ve, null, l, Q)),
            G.push({ event: W, listeners: ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (
            ((W = n === "mouseover" || n === "pointerover"),
            (se = n === "mouseout" || n === "pointerout"),
            W &&
              l !== pr &&
              (ve = l.relatedTarget || l.fromElement) &&
              (ra(ve) || ve[di]))
          )
            break e;
          if (
            (se || W) &&
            ((W =
              Q.window === Q
                ? Q
                : (W = Q.ownerDocument)
                  ? W.defaultView || W.parentWindow
                  : window),
            se
              ? ((ve = l.relatedTarget || l.toElement),
                (se = U),
                (ve = ve ? ra(ve) : null),
                ve !== null &&
                  ((Jt = Te(ve)),
                  ve !== Jt || (ve.tag !== 5 && ve.tag !== 6)) &&
                  (ve = null))
              : ((se = null), (ve = U)),
            se !== ve)
          ) {
            if (
              ((ye = Os),
              (q = "onMouseLeave"),
              (k = "onMouseEnter"),
              (b = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((ye = Ms),
                (q = "onPointerLeave"),
                (k = "onPointerEnter"),
                (b = "pointer")),
              (Jt = se == null ? W : vu(se)),
              (O = ve == null ? W : vu(ve)),
              (W = new ye(q, b + "leave", se, l, Q)),
              (W.target = Jt),
              (W.relatedTarget = O),
              (q = null),
              ra(Q) === U &&
                ((ye = new ye(k, b + "enter", ve, l, Q)),
                (ye.target = O),
                (ye.relatedTarget = Jt),
                (q = ye)),
              (Jt = q),
              se && ve)
            )
              t: {
                for (ye = se, k = ve, b = 0, O = ye; O; O = Sl(O)) b++;
                for (O = 0, q = k; q; q = Sl(q)) O++;
                for (; 0 < b - O; ) (ye = Sl(ye)), b--;
                for (; 0 < O - b; ) (k = Sl(k)), O--;
                for (; b--; ) {
                  if (ye === k || (k !== null && ye === k.alternate)) break t;
                  (ye = Sl(ye)), (k = Sl(k));
                }
                ye = null;
              }
            else ye = null;
            se !== null && Xf(G, W, se, ye, !1),
              ve !== null && Jt !== null && Xf(G, Jt, ve, ye, !0);
          }
        }
        e: {
          if (
            ((W = U ? vu(U) : window),
            (se = W.nodeName && W.nodeName.toLowerCase()),
            se === "select" || (se === "input" && W.type === "file"))
          )
            var Se = fv;
          else if (sv(W))
            if (Bf) Se = hv;
            else {
              Se = py;
              var Ne = dy;
            }
          else
            (se = W.nodeName) &&
              se.toLowerCase() === "input" &&
              (W.type === "checkbox" || W.type === "radio") &&
              (Se = vy);
          if (Se && (Se = Se(n, U))) {
            cv(G, Se, l, Q);
            break e;
          }
          Ne && Ne(n, W, U),
            n === "focusout" &&
              (Ne = W._wrapperState) &&
              Ne.controlled &&
              W.type === "number" &&
              Ra(W, "number", W.value);
        }
        switch (((Ne = U ? vu(U) : window), n)) {
          case "focusin":
            (sv(Ne) || Ne.contentEditable === "true") &&
              ((Oa = Ne), (Yf = U), (Ro = null));
            break;
          case "focusout":
            Ro = Yf = Oa = null;
            break;
          case "mousedown":
            Wf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Wf = !1), Ev(G, l, Q);
            break;
          case "selectionchange":
            if (Sv) break;
          case "keydown":
          case "keyup":
            Ev(G, l, Q);
        }
        var he;
        if (Na)
          e: {
            switch (n) {
              case "compositionstart":
                var Oe = "onCompositionStart";
                break e;
              case "compositionend":
                Oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Oe = "onCompositionUpdate";
                break e;
            }
            Oe = void 0;
          }
        else
          su
            ? uv(n, l) && (Oe = "onCompositionEnd")
            : n === "keydown" &&
              l.keyCode === 229 &&
              (Oe = "onCompositionStart");
        Oe &&
          (iv &&
            l.locale !== "ko" &&
            (su || Oe !== "onCompositionStart"
              ? Oe === "onCompositionEnd" && su && (he = Mf())
              : ((li = Q),
                (yo = "value" in li ? li.value : li.textContent),
                (su = !0))),
          (Ne = Do(U, Oe)),
          0 < Ne.length &&
            ((Oe = new Af(Oe, n, null, l, Q)),
            G.push({ event: Oe, listeners: Ne }),
            he
              ? (Oe.data = he)
              : ((he = As(l)), he !== null && (Oe.data = he)))),
          (he = zs ? cy(n, l) : fy(n, l)) &&
            ((U = Do(U, "onBeforeInput")),
            0 < U.length &&
              ((Q = new Af("onBeforeInput", "beforeinput", null, l, Q)),
              G.push({ event: Q, listeners: U }),
              (Q.data = he)));
      }
      Vs(G, r);
    });
  }
  function _o(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Do(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n,
        d = c.stateNode;
      c.tag === 5 &&
        d !== null &&
        ((c = d),
        (d = fl(n, l)),
        d != null && o.unshift(_o(n, d, c)),
        (d = fl(n, r)),
        d != null && o.push(_o(n, d, c))),
        (n = n.return);
    }
    return o;
  }
  function Sl(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Xf(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var C = l,
        x = C.alternate,
        U = C.stateNode;
      if (x !== null && x === o) break;
      C.tag === 5 &&
        U !== null &&
        ((C = U),
        c
          ? ((x = fl(l, d)), x != null && m.unshift(_o(l, x, C)))
          : c || ((x = fl(l, d)), x != null && m.push(_o(l, x, C)))),
        (l = l.return);
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Kf = /\r\n?/g,
    gy = /\u0000|\uFFFD/g;
  function qf(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        Kf,
        `
`,
      )
      .replace(gy, "");
  }
  function Ps(n, r, l) {
    if (((r = qf(r)), qf(n) !== r && l)) throw Error(S(425));
  }
  function $s() {}
  var Jf = null,
    El = null;
  function ko(n, r) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Cl = typeof setTimeout == "function" ? setTimeout : void 0,
    Dv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zf = typeof Promise == "function" ? Promise : void 0,
    ed =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zf < "u"
          ? function (n) {
              return Zf.resolve(null).then(n).catch(Sy);
            }
          : Cl;
  function Sy(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function Hi(n, r) {
    var l = r,
      o = 0;
    do {
      var c = l.nextSibling;
      if ((n.removeChild(l), c && c.nodeType === 8))
        if (((l = c.data), l === "/$")) {
          if (o === 0) {
            n.removeChild(c), ho(r);
            return;
          }
          o--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || o++;
      l = c;
    } while (l);
    ho(r);
  }
  function Ma(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = n.data), r === "$" || r === "$!" || r === "$?")) break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Lo(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Vi = Math.random().toString(36).slice(2),
    Ya = "__reactFiber$" + Vi,
    Tl = "__reactProps$" + Vi,
    di = "__reactContainer$" + Vi,
    td = "__reactEvents$" + Vi,
    Ey = "__reactListeners$" + Vi,
    nd = "__reactHandles$" + Vi;
  function ra(n) {
    var r = n[Ya];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if ((r = l[di] || l[Ya])) {
        if (
          ((l = r.alternate),
          r.child !== null || (l !== null && l.child !== null))
        )
          for (n = Lo(n); n !== null; ) {
            if ((l = n[Ya])) return l;
            n = Lo(n);
          }
        return r;
      }
      (n = l), (l = n.parentNode);
    }
    return null;
  }
  function No(n) {
    return (
      (n = n[Ya] || n[di]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    );
  }
  function vu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(S(33));
  }
  function be(n) {
    return n[Tl] || null;
  }
  var Bi = [],
    Ot = -1;
  function Ye(n) {
    return { current: n };
  }
  function ft(n) {
    0 > Ot || ((n.current = Bi[Ot]), (Bi[Ot] = null), Ot--);
  }
  function vt(n, r) {
    Ot++, (Bi[Ot] = n.current), (n.current = r);
  }
  var Wa = {},
    ze = Ye(Wa),
    Yt = Ye(!1),
    mr = Wa;
  function aa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Wa;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      d;
    for (d in l) c[d] = r[d];
    return (
      o &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = r),
        (n.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function At(n) {
    return (n = n.childContextTypes), n != null;
  }
  function ia() {
    ft(Yt), ft(ze);
  }
  function Pi(n, r, l) {
    if (ze.current !== Wa) throw Error(S(168));
    vt(ze, r), vt(Yt, l);
  }
  function Oo(n, r, l) {
    var o = n.stateNode;
    if (((r = r.childContextTypes), typeof o.getChildContext != "function"))
      return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(S(108, Kr(n) || "Unknown", c));
    return fe({}, l, o);
  }
  function Ys(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        Wa),
      (mr = ze.current),
      vt(ze, n),
      vt(Yt, Yt.current),
      !0
    );
  }
  function kv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(S(169));
    l
      ? ((n = Oo(n, r, mr)),
        (o.__reactInternalMemoizedMergedChildContext = n),
        ft(Yt),
        ft(ze),
        vt(ze, n))
      : ft(Yt),
      vt(Yt, l);
  }
  var Hr = null,
    Rn = !1,
    Mo = !1;
  function rd(n) {
    Hr === null ? (Hr = [n]) : Hr.push(n);
  }
  function ad(n) {
    (Rn = !0), rd(n);
  }
  function yr() {
    if (!Mo && Hr !== null) {
      Mo = !0;
      var n = 0,
        r = gt;
      try {
        var l = Hr;
        for (gt = 1; n < l.length; n++) {
          var o = l[n];
          do o = o(!0);
          while (o !== null);
        }
        (Hr = null), (Rn = !1);
      } catch (c) {
        throw (Hr !== null && (Hr = Hr.slice(n + 1)), Nt(jr, yr), c);
      } finally {
        (gt = r), (Mo = !1);
      }
    }
    return null;
  }
  var $i = [],
    gr = 0,
    Rl = null,
    hu = 0,
    Sr = [],
    Gn = 0,
    la = null,
    On = 1,
    pi = "";
  function Vr(n, r) {
    ($i[gr++] = hu), ($i[gr++] = Rl), (Rl = n), (hu = r);
  }
  function id(n, r, l) {
    (Sr[Gn++] = On), (Sr[Gn++] = pi), (Sr[Gn++] = la), (la = n);
    var o = On;
    n = pi;
    var c = 32 - Zr(o) - 1;
    (o &= ~(1 << c)), (l += 1);
    var d = 32 - Zr(r) + c;
    if (30 < d) {
      var m = c - (c % 5);
      (d = (o & ((1 << m) - 1)).toString(32)),
        (o >>= m),
        (c -= m),
        (On = (1 << (32 - Zr(r) + c)) | (l << c) | o),
        (pi = d + n);
    } else (On = (1 << d) | (l << c) | o), (pi = n);
  }
  function Ws(n) {
    n.return !== null && (Vr(n, 1), id(n, 1, 0));
  }
  function ld(n) {
    for (; n === Rl; )
      (Rl = $i[--gr]), ($i[gr] = null), (hu = $i[--gr]), ($i[gr] = null);
    for (; n === la; )
      (la = Sr[--Gn]),
        (Sr[Gn] = null),
        (pi = Sr[--Gn]),
        (Sr[Gn] = null),
        (On = Sr[--Gn]),
        (Sr[Gn] = null);
  }
  var Br = null,
    Er = null,
    Mt = !1,
    ua = null;
  function ud(n, r) {
    var l = ha(5, null, null, 0);
    (l.elementType = "DELETED"),
      (l.stateNode = r),
      (l.return = n),
      (r = n.deletions),
      r === null ? ((n.deletions = [l]), (n.flags |= 16)) : r.push(l);
  }
  function Lv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return (
          (r =
            r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((n.stateNode = r), (Br = n), (Er = Ma(r.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (r = n.pendingProps === "" || r.nodeType !== 3 ? null : r),
          r !== null ? ((n.stateNode = r), (Br = n), (Er = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((l = la !== null ? { id: On, overflow: pi } : null),
              (n.memoizedState = {
                dehydrated: r,
                treeContext: l,
                retryLane: 1073741824,
              }),
              (l = ha(18, null, null, 0)),
              (l.stateNode = r),
              (l.return = n),
              (n.child = l),
              (Br = n),
              (Er = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Qs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Is(n) {
    if (Mt) {
      var r = Er;
      if (r) {
        var l = r;
        if (!Lv(n, r)) {
          if (Qs(n)) throw Error(S(418));
          r = Ma(l.nextSibling);
          var o = Br;
          r && Lv(n, r)
            ? ud(o, l)
            : ((n.flags = (n.flags & -4097) | 2), (Mt = !1), (Br = n));
        }
      } else {
        if (Qs(n)) throw Error(S(418));
        (n.flags = (n.flags & -4097) | 2), (Mt = !1), (Br = n);
      }
    }
  }
  function Nv(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;

    )
      n = n.return;
    Br = n;
  }
  function Gs(n) {
    if (n !== Br) return !1;
    if (!Mt) return Nv(n), (Mt = !0), !1;
    var r;
    if (
      ((r = n.tag !== 3) &&
        !(r = n.tag !== 5) &&
        ((r = n.type),
        (r = r !== "head" && r !== "body" && !ko(n.type, n.memoizedProps))),
      r && (r = Er))
    ) {
      if (Qs(n)) throw (Ov(), Error(S(418)));
      for (; r; ) ud(n, r), (r = Ma(r.nextSibling));
    }
    if ((Nv(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(S(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Er = Ma(n.nextSibling);
                break e;
              }
              r--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || r++;
          }
          n = n.nextSibling;
        }
        Er = null;
      }
    } else Er = Br ? Ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ov() {
    for (var n = Er; n; ) n = Ma(n.nextSibling);
  }
  function Bt() {
    (Er = Br = null), (Mt = !1);
  }
  function od(n) {
    ua === null ? (ua = [n]) : ua.push(n);
  }
  var Xs = je.ReactCurrentBatchConfig;
  function xl(n, r, l) {
    if (
      ((n = l.ref),
      n !== null && typeof n != "function" && typeof n != "object")
    ) {
      if (l._owner) {
        if (((l = l._owner), l)) {
          if (l.tag !== 1) throw Error(S(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(S(147, n));
        var c = o,
          d = "" + n;
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == "function" &&
          r.ref._stringRef === d
          ? r.ref
          : ((r = function (m) {
              var C = c.refs;
              m === null ? delete C[d] : (C[d] = m);
            }),
            (r._stringRef = d),
            r);
      }
      if (typeof n != "string") throw Error(S(284));
      if (!l._owner) throw Error(S(290, n));
    }
    return n;
  }
  function Qa(n, r) {
    throw (
      ((n = Object.prototype.toString.call(r)),
      Error(
        S(
          31,
          n === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : n,
        ),
      ))
    );
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ks(n) {
    function r(k, b) {
      if (n) {
        var O = k.deletions;
        O === null ? ((k.deletions = [b]), (k.flags |= 16)) : O.push(b);
      }
    }
    function l(k, b) {
      if (!n) return null;
      for (; b !== null; ) r(k, b), (b = b.sibling);
      return null;
    }
    function o(k, b) {
      for (k = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? k.set(b.key, b) : k.set(b.index, b), (b = b.sibling);
      return k;
    }
    function c(k, b) {
      return (k = qi(k, b)), (k.index = 0), (k.sibling = null), k;
    }
    function d(k, b, O) {
      return (
        (k.index = O),
        n
          ? ((O = k.alternate),
            O !== null
              ? ((O = O.index), O < b ? ((k.flags |= 2), b) : O)
              : ((k.flags |= 2), b))
          : ((k.flags |= 1048576), b)
      );
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function C(k, b, O, q) {
      return b === null || b.tag !== 6
        ? ((b = jc(O, k.mode, q)), (b.return = k), b)
        : ((b = c(b, O)), (b.return = k), b);
    }
    function x(k, b, O, q) {
      var Se = O.type;
      return Se === $e
        ? Q(k, b, O.props.children, q, O.key)
        : b !== null &&
            (b.elementType === Se ||
              (typeof Se == "object" &&
                Se !== null &&
                Se.$$typeof === Lt &&
                Mv(Se) === b.type))
          ? ((q = c(b, O.props)), (q.ref = xl(k, b, O)), (q.return = k), q)
          : ((q = zc(O.type, O.key, O.props, null, k.mode, q)),
            (q.ref = xl(k, b, O)),
            (q.return = k),
            q);
    }
    function U(k, b, O, q) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== O.containerInfo ||
        b.stateNode.implementation !== O.implementation
        ? ((b = qo(O, k.mode, q)), (b.return = k), b)
        : ((b = c(b, O.children || [])), (b.return = k), b);
    }
    function Q(k, b, O, q, Se) {
      return b === null || b.tag !== 7
        ? ((b = Hl(O, k.mode, q, Se)), (b.return = k), b)
        : ((b = c(b, O)), (b.return = k), b);
    }
    function G(k, b, O) {
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return (b = jc("" + b, k.mode, O)), (b.return = k), b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case We:
            return (
              (O = zc(b.type, b.key, b.props, null, k.mode, O)),
              (O.ref = xl(k, null, b)),
              (O.return = k),
              O
            );
          case mt:
            return (b = qo(b, k.mode, O)), (b.return = k), b;
          case Lt:
            var q = b._init;
            return G(k, q(b._payload), O);
        }
        if (ai(b) || Le(b))
          return (b = Hl(b, k.mode, O, null)), (b.return = k), b;
        Qa(k, b);
      }
      return null;
    }
    function W(k, b, O, q) {
      var Se = b !== null ? b.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return Se !== null ? null : C(k, b, "" + O, q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case We:
            return O.key === Se ? x(k, b, O, q) : null;
          case mt:
            return O.key === Se ? U(k, b, O, q) : null;
          case Lt:
            return (Se = O._init), W(k, b, Se(O._payload), q);
        }
        if (ai(O) || Le(O)) return Se !== null ? null : Q(k, b, O, q, null);
        Qa(k, O);
      }
      return null;
    }
    function se(k, b, O, q, Se) {
      if ((typeof q == "string" && q !== "") || typeof q == "number")
        return (k = k.get(O) || null), C(b, k, "" + q, Se);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case We:
            return (
              (k = k.get(q.key === null ? O : q.key) || null), x(b, k, q, Se)
            );
          case mt:
            return (
              (k = k.get(q.key === null ? O : q.key) || null), U(b, k, q, Se)
            );
          case Lt:
            var Ne = q._init;
            return se(k, b, O, Ne(q._payload), Se);
        }
        if (ai(q) || Le(q)) return (k = k.get(O) || null), Q(b, k, q, Se, null);
        Qa(b, q);
      }
      return null;
    }
    function ve(k, b, O, q) {
      for (
        var Se = null, Ne = null, he = b, Oe = (b = 0), pn = null;
        he !== null && Oe < O.length;
        Oe++
      ) {
        he.index > Oe ? ((pn = he), (he = null)) : (pn = he.sibling);
        var ut = W(k, he, O[Oe], q);
        if (ut === null) {
          he === null && (he = pn);
          break;
        }
        n && he && ut.alternate === null && r(k, he),
          (b = d(ut, b, Oe)),
          Ne === null ? (Se = ut) : (Ne.sibling = ut),
          (Ne = ut),
          (he = pn);
      }
      if (Oe === O.length) return l(k, he), Mt && Vr(k, Oe), Se;
      if (he === null) {
        for (; Oe < O.length; Oe++)
          (he = G(k, O[Oe], q)),
            he !== null &&
              ((b = d(he, b, Oe)),
              Ne === null ? (Se = he) : (Ne.sibling = he),
              (Ne = he));
        return Mt && Vr(k, Oe), Se;
      }
      for (he = o(k, he); Oe < O.length; Oe++)
        (pn = se(he, k, Oe, O[Oe], q)),
          pn !== null &&
            (n &&
              pn.alternate !== null &&
              he.delete(pn.key === null ? Oe : pn.key),
            (b = d(pn, b, Oe)),
            Ne === null ? (Se = pn) : (Ne.sibling = pn),
            (Ne = pn));
      return (
        n &&
          he.forEach(function (Ei) {
            return r(k, Ei);
          }),
        Mt && Vr(k, Oe),
        Se
      );
    }
    function ye(k, b, O, q) {
      var Se = Le(O);
      if (typeof Se != "function") throw Error(S(150));
      if (((O = Se.call(O)), O == null)) throw Error(S(151));
      for (
        var Ne = (Se = null), he = b, Oe = (b = 0), pn = null, ut = O.next();
        he !== null && !ut.done;
        Oe++, ut = O.next()
      ) {
        he.index > Oe ? ((pn = he), (he = null)) : (pn = he.sibling);
        var Ei = W(k, he, ut.value, q);
        if (Ei === null) {
          he === null && (he = pn);
          break;
        }
        n && he && Ei.alternate === null && r(k, he),
          (b = d(Ei, b, Oe)),
          Ne === null ? (Se = Ei) : (Ne.sibling = Ei),
          (Ne = Ei),
          (he = pn);
      }
      if (ut.done) return l(k, he), Mt && Vr(k, Oe), Se;
      if (he === null) {
        for (; !ut.done; Oe++, ut = O.next())
          (ut = G(k, ut.value, q)),
            ut !== null &&
              ((b = d(ut, b, Oe)),
              Ne === null ? (Se = ut) : (Ne.sibling = ut),
              (Ne = ut));
        return Mt && Vr(k, Oe), Se;
      }
      for (he = o(k, he); !ut.done; Oe++, ut = O.next())
        (ut = se(he, k, Oe, ut.value, q)),
          ut !== null &&
            (n &&
              ut.alternate !== null &&
              he.delete(ut.key === null ? Oe : ut.key),
            (b = d(ut, b, Oe)),
            Ne === null ? (Se = ut) : (Ne.sibling = ut),
            (Ne = ut));
      return (
        n &&
          he.forEach(function (Fy) {
            return r(k, Fy);
          }),
        Mt && Vr(k, Oe),
        Se
      );
    }
    function Jt(k, b, O, q) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === $e &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case We:
            e: {
              for (var Se = O.key, Ne = b; Ne !== null; ) {
                if (Ne.key === Se) {
                  if (((Se = O.type), Se === $e)) {
                    if (Ne.tag === 7) {
                      l(k, Ne.sibling),
                        (b = c(Ne, O.props.children)),
                        (b.return = k),
                        (k = b);
                      break e;
                    }
                  } else if (
                    Ne.elementType === Se ||
                    (typeof Se == "object" &&
                      Se !== null &&
                      Se.$$typeof === Lt &&
                      Mv(Se) === Ne.type)
                  ) {
                    l(k, Ne.sibling),
                      (b = c(Ne, O.props)),
                      (b.ref = xl(k, Ne, O)),
                      (b.return = k),
                      (k = b);
                    break e;
                  }
                  l(k, Ne);
                  break;
                } else r(k, Ne);
                Ne = Ne.sibling;
              }
              O.type === $e
                ? ((b = Hl(O.props.children, k.mode, q, O.key)),
                  (b.return = k),
                  (k = b))
                : ((q = zc(O.type, O.key, O.props, null, k.mode, q)),
                  (q.ref = xl(k, b, O)),
                  (q.return = k),
                  (k = q));
            }
            return m(k);
          case mt:
            e: {
              for (Ne = O.key; b !== null; ) {
                if (b.key === Ne)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === O.containerInfo &&
                    b.stateNode.implementation === O.implementation
                  ) {
                    l(k, b.sibling),
                      (b = c(b, O.children || [])),
                      (b.return = k),
                      (k = b);
                    break e;
                  } else {
                    l(k, b);
                    break;
                  }
                else r(k, b);
                b = b.sibling;
              }
              (b = qo(O, k.mode, q)), (b.return = k), (k = b);
            }
            return m(k);
          case Lt:
            return (Ne = O._init), Jt(k, b, Ne(O._payload), q);
        }
        if (ai(O)) return ve(k, b, O, q);
        if (Le(O)) return ye(k, b, O, q);
        Qa(k, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          b !== null && b.tag === 6
            ? (l(k, b.sibling), (b = c(b, O)), (b.return = k), (k = b))
            : (l(k, b), (b = jc(O, k.mode, q)), (b.return = k), (k = b)),
          m(k))
        : l(k, b);
    }
    return Jt;
  }
  var mu = Ks(!0),
    Uv = Ks(!1),
    vi = Ye(null),
    sn = null,
    re = null,
    oa = null;
  function Pr() {
    oa = re = sn = null;
  }
  function sd(n) {
    var r = vi.current;
    ft(vi), (n._currentValue = r);
  }
  function cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), o !== null && (o.childLanes |= r))
          : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r),
        n === l)
      )
        break;
      n = n.return;
    }
  }
  function yu(n, r) {
    (sn = n),
      (oa = re = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        (n.lanes & r && (Rr = !0), (n.firstContext = null));
  }
  function sa(n) {
    var r = n._currentValue;
    if (oa !== n)
      if (((n = { context: n, memoizedValue: r, next: null }), re === null)) {
        if (sn === null) throw Error(S(308));
        (re = n), (sn.dependencies = { lanes: 0, firstContext: n });
      } else re = re.next = n;
    return r;
  }
  var wl = null;
  function rn(n) {
    wl === null ? (wl = [n]) : wl.push(n);
  }
  function zv(n, r, l, o) {
    var c = r.interleaved;
    return (
      c === null ? ((l.next = l), rn(r)) : ((l.next = c.next), (c.next = l)),
      (r.interleaved = l),
      hi(n, o)
    );
  }
  function hi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      (n.childLanes |= r),
        (l = n.alternate),
        l !== null && (l.childLanes |= r),
        (l = n),
        (n = n.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var Yi = !1;
  function qs(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function gu(n, r) {
    (n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        });
  }
  function Cr(n, r) {
    return {
      eventTime: n,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Wi(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), Je & 2)) {
      var c = o.pending;
      return (
        c === null ? (r.next = r) : ((r.next = c.next), (c.next = r)),
        (o.pending = r),
        hi(n, l)
      );
    }
    return (
      (c = o.interleaved),
      c === null ? ((r.next = r), rn(o)) : ((r.next = c.next), (c.next = r)),
      (o.interleaved = r),
      hi(n, l)
    );
  }
  function Js(n, r, l) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (l & 4194240) !== 0))
    ) {
      var o = r.lanes;
      (o &= n.pendingLanes), (l |= o), (r.lanes = l), co(n, l);
    }
  }
  function Av(n, r) {
    var l = n.updateQueue,
      o = n.alternate;
    if (o !== null && ((o = o.updateQueue), l === o)) {
      var c = null,
        d = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var m = {
            eventTime: l.eventTime,
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          };
          d === null ? (c = d = m) : (d = d.next = m), (l = l.next);
        } while (l !== null);
        d === null ? (c = d = r) : (d = d.next = r);
      } else c = d = r;
      (l = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        effects: o.effects,
      }),
        (n.updateQueue = l);
      return;
    }
    (n = l.lastBaseUpdate),
      n === null ? (l.firstBaseUpdate = r) : (n.next = r),
      (l.lastBaseUpdate = r);
  }
  function Zs(n, r, l, o) {
    var c = n.updateQueue;
    Yi = !1;
    var d = c.firstBaseUpdate,
      m = c.lastBaseUpdate,
      C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var x = C,
        U = x.next;
      (x.next = null), m === null ? (d = U) : (m.next = U), (m = x);
      var Q = n.alternate;
      Q !== null &&
        ((Q = Q.updateQueue),
        (C = Q.lastBaseUpdate),
        C !== m &&
          (C === null ? (Q.firstBaseUpdate = U) : (C.next = U),
          (Q.lastBaseUpdate = x)));
    }
    if (d !== null) {
      var G = c.baseState;
      (m = 0), (Q = U = x = null), (C = d);
      do {
        var W = C.lane,
          se = C.eventTime;
        if ((o & W) === W) {
          Q !== null &&
            (Q = Q.next =
              {
                eventTime: se,
                lane: 0,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null,
              });
          e: {
            var ve = n,
              ye = C;
            switch (((W = r), (se = l), ye.tag)) {
              case 1:
                if (((ve = ye.payload), typeof ve == "function")) {
                  G = ve.call(se, G, W);
                  break e;
                }
                G = ve;
                break e;
              case 3:
                ve.flags = (ve.flags & -65537) | 128;
              case 0:
                if (
                  ((ve = ye.payload),
                  (W = typeof ve == "function" ? ve.call(se, G, W) : ve),
                  W == null)
                )
                  break e;
                G = fe({}, G, W);
                break e;
              case 2:
                Yi = !0;
            }
          }
          C.callback !== null &&
            C.lane !== 0 &&
            ((n.flags |= 64),
            (W = c.effects),
            W === null ? (c.effects = [C]) : W.push(C));
        } else
          (se = {
            eventTime: se,
            lane: W,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            Q === null ? ((U = Q = se), (x = G)) : (Q = Q.next = se),
            (m |= W);
        if (((C = C.next), C === null)) {
          if (((C = c.shared.pending), C === null)) break;
          (W = C),
            (C = W.next),
            (W.next = null),
            (c.lastBaseUpdate = W),
            (c.shared.pending = null);
        }
      } while (!0);
      if (
        (Q === null && (x = G),
        (c.baseState = x),
        (c.firstBaseUpdate = U),
        (c.lastBaseUpdate = Q),
        (r = c.shared.interleaved),
        r !== null)
      ) {
        c = r;
        do (m |= c.lane), (c = c.next);
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      (zl |= m), (n.lanes = m), (n.memoizedState = G);
    }
  }
  function jv(n, r, l) {
    if (((n = r.effects), (r.effects = null), n !== null))
      for (r = 0; r < n.length; r++) {
        var o = n[r],
          c = o.callback;
        if (c !== null) {
          if (((o.callback = null), (o = l), typeof c != "function"))
            throw Error(S(191, c));
          c.call(o);
        }
      }
  }
  var Uo = {},
    Ua = Ye(Uo),
    Su = Ye(Uo),
    zo = Ye(Uo);
  function bl(n) {
    if (n === Uo) throw Error(S(174));
    return n;
  }
  function fd(n, r) {
    switch ((vt(zo, r), vt(Su, n), vt(Ua, Uo), (n = r.nodeType), n)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : en(null, "");
        break;
      default:
        (n = n === 8 ? r.parentNode : r),
          (r = n.namespaceURI || null),
          (n = n.tagName),
          (r = en(r, n));
    }
    ft(Ua), vt(Ua, r);
  }
  function Eu() {
    ft(Ua), ft(Su), ft(zo);
  }
  function Fv(n) {
    bl(zo.current);
    var r = bl(Ua.current),
      l = en(r, n.type);
    r !== l && (vt(Su, n), vt(Ua, l));
  }
  function dd(n) {
    Su.current === n && (ft(Ua), ft(Su));
  }
  var jt = Ye(0);
  function ec(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!")
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var tc = [];
  function pd() {
    for (var n = 0; n < tc.length; n++)
      tc[n]._workInProgressVersionPrimary = null;
    tc.length = 0;
  }
  var nc = je.ReactCurrentDispatcher,
    Ao = je.ReactCurrentBatchConfig,
    ge = 0,
    Ee = null,
    Ae = null,
    qe = null,
    $r = !1,
    Cu = !1,
    jo = 0,
    Cy = 0;
  function Xn() {
    throw Error(S(321));
  }
  function Fo(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!na(n[l], r[l])) return !1;
    return !0;
  }
  function Y(n, r, l, o, c, d) {
    if (
      ((ge = d),
      (Ee = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (nc.current = n === null || n.memoizedState === null ? Ty : Dt),
      (n = l(o, c)),
      Cu)
    ) {
      d = 0;
      do {
        if (((Cu = !1), (jo = 0), 25 <= d)) throw Error(S(301));
        (d += 1),
          (qe = Ae = null),
          (r.updateQueue = null),
          (nc.current = yc),
          (n = l(o, c));
      } while (Cu);
    }
    if (
      ((nc.current = Kn),
      (r = Ae !== null && Ae.next !== null),
      (ge = 0),
      (qe = Ae = Ee = null),
      ($r = !1),
      r)
    )
      throw Error(S(300));
    return n;
  }
  function an() {
    var n = jo !== 0;
    return (jo = 0), n;
  }
  function Re() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qe === null ? (Ee.memoizedState = qe = n) : (qe = qe.next = n), qe;
  }
  function Mn() {
    if (Ae === null) {
      var n = Ee.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ae.next;
    var r = qe === null ? Ee.memoizedState : qe.next;
    if (r !== null) (qe = r), (Ae = n);
    else {
      if (n === null) throw Error(S(310));
      (Ae = n),
        (n = {
          memoizedState: Ae.memoizedState,
          baseState: Ae.baseState,
          baseQueue: Ae.baseQueue,
          queue: Ae.queue,
          next: null,
        }),
        qe === null ? (Ee.memoizedState = qe = n) : (qe = qe.next = n);
    }
    return qe;
  }
  function Yr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function mi(n) {
    var r = Mn(),
      l = r.queue;
    if (l === null) throw Error(S(311));
    l.lastRenderedReducer = n;
    var o = Ae,
      c = o.baseQueue,
      d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        (c.next = d.next), (d.next = m);
      }
      (o.baseQueue = c = d), (l.pending = null);
    }
    if (c !== null) {
      (d = c.next), (o = o.baseState);
      var C = (m = null),
        x = null,
        U = d;
      do {
        var Q = U.lane;
        if ((ge & Q) === Q)
          x !== null &&
            (x = x.next =
              {
                lane: 0,
                action: U.action,
                hasEagerState: U.hasEagerState,
                eagerState: U.eagerState,
                next: null,
              }),
            (o = U.hasEagerState ? U.eagerState : n(o, U.action));
        else {
          var G = {
            lane: Q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          };
          x === null ? ((C = x = G), (m = o)) : (x = x.next = G),
            (Ee.lanes |= Q),
            (zl |= Q);
        }
        U = U.next;
      } while (U !== null && U !== d);
      x === null ? (m = o) : (x.next = C),
        na(o, r.memoizedState) || (Rr = !0),
        (r.memoizedState = o),
        (r.baseState = m),
        (r.baseQueue = x),
        (l.lastRenderedState = o);
    }
    if (((n = l.interleaved), n !== null)) {
      c = n;
      do (d = c.lane), (Ee.lanes |= d), (zl |= d), (c = c.next);
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function ca(n) {
    var r = Mn(),
      l = r.queue;
    if (l === null) throw Error(S(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch,
      c = l.pending,
      d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = (c = c.next);
      do (d = n(d, m.action)), (m = m.next);
      while (m !== c);
      na(d, r.memoizedState) || (Rr = !0),
        (r.memoizedState = d),
        r.baseQueue === null && (r.baseState = d),
        (l.lastRenderedState = d);
    }
    return [d, o];
  }
  function Tu() {}
  function _l(n, r) {
    var l = Ee,
      o = Mn(),
      c = r(),
      d = !na(o.memoizedState, c);
    if (
      (d && ((o.memoizedState = c), (Rr = !0)),
      (o = o.queue),
      Ho(ac.bind(null, l, o, n), [n]),
      o.getSnapshot !== r || d || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Dl(9, rc.bind(null, l, o, c, r), void 0, null),
        Qt === null)
      )
        throw Error(S(349));
      ge & 30 || Ru(l, r, c);
    }
    return c;
  }
  function Ru(n, r, l) {
    (n.flags |= 16384),
      (n = { getSnapshot: r, value: l }),
      (r = Ee.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Ee.updateQueue = r),
          (r.stores = [n]))
        : ((l = r.stores), l === null ? (r.stores = [n]) : l.push(n));
  }
  function rc(n, r, l, o) {
    (r.value = l), (r.getSnapshot = o), ic(r) && lc(n);
  }
  function ac(n, r, l) {
    return l(function () {
      ic(r) && lc(n);
    });
  }
  function ic(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !na(n, l);
    } catch {
      return !0;
    }
  }
  function lc(n) {
    var r = hi(n, 1);
    r !== null && Pt(r, n, 1, -1);
  }
  function uc(n) {
    var r = Re();
    return (
      typeof n == "function" && (n = n()),
      (r.memoizedState = r.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yr,
        lastRenderedState: n,
      }),
      (r.queue = n),
      (n = n.dispatch = Vo.bind(null, Ee, n)),
      [r.memoizedState, n]
    );
  }
  function Dl(n, r, l, o) {
    return (
      (n = { tag: n, create: r, destroy: l, deps: o, next: null }),
      (r = Ee.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Ee.updateQueue = r),
          (r.lastEffect = n.next = n))
        : ((l = r.lastEffect),
          l === null
            ? (r.lastEffect = n.next = n)
            : ((o = l.next), (l.next = n), (n.next = o), (r.lastEffect = n))),
      n
    );
  }
  function oc() {
    return Mn().memoizedState;
  }
  function xu(n, r, l, o) {
    var c = Re();
    (Ee.flags |= n),
      (c.memoizedState = Dl(1 | r, l, void 0, o === void 0 ? null : o));
  }
  function wu(n, r, l, o) {
    var c = Mn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ae !== null) {
      var m = Ae.memoizedState;
      if (((d = m.destroy), o !== null && Fo(o, m.deps))) {
        c.memoizedState = Dl(r, l, d, o);
        return;
      }
    }
    (Ee.flags |= n), (c.memoizedState = Dl(1 | r, l, d, o));
  }
  function sc(n, r) {
    return xu(8390656, 8, n, r);
  }
  function Ho(n, r) {
    return wu(2048, 8, n, r);
  }
  function cc(n, r) {
    return wu(4, 2, n, r);
  }
  function fc(n, r) {
    return wu(4, 4, n, r);
  }
  function dc(n, r) {
    if (typeof r == "function")
      return (
        (n = n()),
        r(n),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function pc(n, r, l) {
    return (
      (l = l != null ? l.concat([n]) : null), wu(4, 4, dc.bind(null, r, n), l)
    );
  }
  function bu() {}
  function kl(n, r) {
    var l = Mn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fo(r, o[1])
      ? o[0]
      : ((l.memoizedState = [n, r]), n);
  }
  function vc(n, r) {
    var l = Mn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fo(r, o[1])
      ? o[0]
      : ((n = n()), (l.memoizedState = [n, r]), n);
  }
  function hc(n, r, l) {
    return ge & 21
      ? (na(l, r) ||
          ((l = ws()), (Ee.lanes |= l), (zl |= l), (n.baseState = !0)),
        r)
      : (n.baseState && ((n.baseState = !1), (Rr = !0)), (n.memoizedState = l));
  }
  function vd(n, r) {
    var l = gt;
    (gt = l !== 0 && 4 > l ? l : 4), n(!0);
    var o = Ao.transition;
    Ao.transition = {};
    try {
      n(!1), r();
    } finally {
      (gt = l), (Ao.transition = o);
    }
  }
  function mc() {
    return Mn().memoizedState;
  }
  function Hv(n, r, l) {
    var o = Si(n);
    if (
      ((l = {
        lane: o,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hd(n))
    )
      _u(r, l);
    else if (((l = zv(n, r, l, o)), l !== null)) {
      var c = bn();
      Pt(l, n, o, c), Qi(l, r, o);
    }
  }
  function Vo(n, r, l) {
    var o = Si(n),
      c = {
        lane: o,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (hd(n)) _u(r, c);
    else {
      var d = n.alternate;
      if (
        n.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = r.lastRenderedReducer), d !== null)
      )
        try {
          var m = r.lastRenderedState,
            C = d(m, l);
          if (((c.hasEagerState = !0), (c.eagerState = C), na(C, m))) {
            var x = r.interleaved;
            x === null
              ? ((c.next = c), rn(r))
              : ((c.next = x.next), (x.next = c)),
              (r.interleaved = c);
            return;
          }
        } catch {
        } finally {
        }
      (l = zv(n, r, c, o)),
        l !== null && ((c = bn()), Pt(l, n, o, c), Qi(l, r, o));
    }
  }
  function hd(n) {
    var r = n.alternate;
    return n === Ee || (r !== null && r === Ee);
  }
  function _u(n, r) {
    Cu = $r = !0;
    var l = n.pending;
    l === null ? (r.next = r) : ((r.next = l.next), (l.next = r)),
      (n.pending = r);
  }
  function Qi(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      (o &= n.pendingLanes), (l |= o), (r.lanes = l), co(n, l);
    }
  }
  var Kn = {
      readContext: sa,
      useCallback: Xn,
      useContext: Xn,
      useEffect: Xn,
      useImperativeHandle: Xn,
      useInsertionEffect: Xn,
      useLayoutEffect: Xn,
      useMemo: Xn,
      useReducer: Xn,
      useRef: Xn,
      useState: Xn,
      useDebugValue: Xn,
      useDeferredValue: Xn,
      useTransition: Xn,
      useMutableSource: Xn,
      useSyncExternalStore: Xn,
      useId: Xn,
      unstable_isNewReconciler: !1,
    },
    Ty = {
      readContext: sa,
      useCallback: function (n, r) {
        return (Re().memoizedState = [n, r === void 0 ? null : r]), n;
      },
      useContext: sa,
      useEffect: sc,
      useImperativeHandle: function (n, r, l) {
        return (
          (l = l != null ? l.concat([n]) : null),
          xu(4194308, 4, dc.bind(null, r, n), l)
        );
      },
      useLayoutEffect: function (n, r) {
        return xu(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        return xu(4, 2, n, r);
      },
      useMemo: function (n, r) {
        var l = Re();
        return (
          (r = r === void 0 ? null : r),
          (n = n()),
          (l.memoizedState = [n, r]),
          n
        );
      },
      useReducer: function (n, r, l) {
        var o = Re();
        return (
          (r = l !== void 0 ? l(r) : r),
          (o.memoizedState = o.baseState = r),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: r,
          }),
          (o.queue = n),
          (n = n.dispatch = Hv.bind(null, Ee, n)),
          [o.memoizedState, n]
        );
      },
      useRef: function (n) {
        var r = Re();
        return (n = { current: n }), (r.memoizedState = n);
      },
      useState: uc,
      useDebugValue: bu,
      useDeferredValue: function (n) {
        return (Re().memoizedState = n);
      },
      useTransition: function () {
        var n = uc(!1),
          r = n[0];
        return (n = vd.bind(null, n[1])), (Re().memoizedState = n), [r, n];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, r, l) {
        var o = Ee,
          c = Re();
        if (Mt) {
          if (l === void 0) throw Error(S(407));
          l = l();
        } else {
          if (((l = r()), Qt === null)) throw Error(S(349));
          ge & 30 || Ru(o, r, l);
        }
        c.memoizedState = l;
        var d = { value: l, getSnapshot: r };
        return (
          (c.queue = d),
          sc(ac.bind(null, o, d, n), [n]),
          (o.flags |= 2048),
          Dl(9, rc.bind(null, o, d, l, r), void 0, null),
          l
        );
      },
      useId: function () {
        var n = Re(),
          r = Qt.identifierPrefix;
        if (Mt) {
          var l = pi,
            o = On;
          (l = (o & ~(1 << (32 - Zr(o) - 1))).toString(32) + l),
            (r = ":" + r + "R" + l),
            (l = jo++),
            0 < l && (r += "H" + l.toString(32)),
            (r += ":");
        } else (l = Cy++), (r = ":" + r + "r" + l.toString(32) + ":");
        return (n.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    Dt = {
      readContext: sa,
      useCallback: kl,
      useContext: sa,
      useEffect: Ho,
      useImperativeHandle: pc,
      useInsertionEffect: cc,
      useLayoutEffect: fc,
      useMemo: vc,
      useReducer: mi,
      useRef: oc,
      useState: function () {
        return mi(Yr);
      },
      useDebugValue: bu,
      useDeferredValue: function (n) {
        var r = Mn();
        return hc(r, Ae.memoizedState, n);
      },
      useTransition: function () {
        var n = mi(Yr)[0],
          r = Mn().memoizedState;
        return [n, r];
      },
      useMutableSource: Tu,
      useSyncExternalStore: _l,
      useId: mc,
      unstable_isNewReconciler: !1,
    },
    yc = {
      readContext: sa,
      useCallback: kl,
      useContext: sa,
      useEffect: Ho,
      useImperativeHandle: pc,
      useInsertionEffect: cc,
      useLayoutEffect: fc,
      useMemo: vc,
      useReducer: ca,
      useRef: oc,
      useState: function () {
        return ca(Yr);
      },
      useDebugValue: bu,
      useDeferredValue: function (n) {
        var r = Mn();
        return Ae === null ? (r.memoizedState = n) : hc(r, Ae.memoizedState, n);
      },
      useTransition: function () {
        var n = ca(Yr)[0],
          r = Mn().memoizedState;
        return [n, r];
      },
      useMutableSource: Tu,
      useSyncExternalStore: _l,
      useId: mc,
      unstable_isNewReconciler: !1,
    };
  function Tr(n, r) {
    if (n && n.defaultProps) {
      (r = fe({}, r)), (n = n.defaultProps);
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Ll(n, r, l, o) {
    (r = n.memoizedState),
      (l = l(o, r)),
      (l = l == null ? r : fe({}, r, l)),
      (n.memoizedState = l),
      n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Nl = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? Te(n) === n : !1;
    },
    enqueueSetState: function (n, r, l) {
      n = n._reactInternals;
      var o = bn(),
        c = Si(n),
        d = Cr(o, c);
      (d.payload = r),
        l != null && (d.callback = l),
        (r = Wi(n, d, c)),
        r !== null && (Pt(r, n, c, o), Js(r, n, c));
    },
    enqueueReplaceState: function (n, r, l) {
      n = n._reactInternals;
      var o = bn(),
        c = Si(n),
        d = Cr(o, c);
      (d.tag = 1),
        (d.payload = r),
        l != null && (d.callback = l),
        (r = Wi(n, d, c)),
        r !== null && (Pt(r, n, c, o), Js(r, n, c));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var l = bn(),
        o = Si(n),
        c = Cr(l, o);
      (c.tag = 2),
        r != null && (c.callback = r),
        (r = Wi(n, c, o)),
        r !== null && (Pt(r, n, o, l), Js(r, n, o));
    },
  };
  function Vv(n, r, l, o, c, d, m) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(o, d, m)
        : r.prototype && r.prototype.isPureReactComponent
          ? !To(l, o) || !To(c, d)
          : !0
    );
  }
  function Bv(n, r, l) {
    var o = !1,
      c = Wa,
      d = r.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = sa(d))
        : ((c = At(r) ? mr : ze.current),
          (o = r.contextTypes),
          (d = (o = o != null) ? aa(n, c) : Wa)),
      (r = new r(l, d)),
      (n.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = Nl),
      (n.stateNode = r),
      (r._reactInternals = n),
      o &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = c),
        (n.__reactInternalMemoizedMaskedChildContext = d)),
      r
    );
  }
  function Pv(n, r, l, o) {
    (n = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(l, o),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(l, o),
      r.state !== n && Nl.enqueueReplaceState(r, r.state, null);
  }
  function md(n, r, l, o) {
    var c = n.stateNode;
    (c.props = l), (c.state = n.memoizedState), (c.refs = {}), qs(n);
    var d = r.contextType;
    typeof d == "object" && d !== null
      ? (c.context = sa(d))
      : ((d = At(r) ? mr : ze.current), (c.context = aa(n, d))),
      (c.state = n.memoizedState),
      (d = r.getDerivedStateFromProps),
      typeof d == "function" && (Ll(n, r, d, l), (c.state = n.memoizedState)),
      typeof r.getDerivedStateFromProps == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function" ||
        (typeof c.UNSAFE_componentWillMount != "function" &&
          typeof c.componentWillMount != "function") ||
        ((r = c.state),
        typeof c.componentWillMount == "function" && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == "function" &&
          c.UNSAFE_componentWillMount(),
        r !== c.state && Nl.enqueueReplaceState(c, c.state, null),
        Zs(n, l, c, o),
        (c.state = n.memoizedState)),
      typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ii(n, r) {
    try {
      var l = "",
        o = r;
      do (l += Fa(o)), (o = o.return);
      while (o);
      var c = l;
    } catch (d) {
      c =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function yd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Bo(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  var $v = typeof WeakMap == "function" ? WeakMap : Map;
  function Yv(n, r, l) {
    (l = Cr(-1, l)), (l.tag = 3), (l.payload = { element: null });
    var o = r.value;
    return (
      (l.callback = function () {
        kc || ((kc = !0), (bd = o)), Bo(n, r);
      }),
      l
    );
  }
  function Wv(n, r, l) {
    (l = Cr(-1, l)), (l.tag = 3);
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      (l.payload = function () {
        return o(c);
      }),
        (l.callback = function () {
          Bo(n, r);
        });
    }
    var d = n.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (l.callback = function () {
          Bo(n, r),
            typeof o != "function" &&
              (pa === null
                ? (pa = /* @__PURE__ */ new Set([this]))
                : pa.add(this));
          var m = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: m !== null ? m : "",
          });
        }),
      l
    );
  }
  function Po(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new $v();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      (c = o.get(r)),
        c === void 0 && ((c = /* @__PURE__ */ new Set()), o.set(r, c));
    c.has(l) || (c.add(l), (n = Oy.bind(null, n, r, l)), r.then(n, n));
  }
  function Qv(n) {
    do {
      var r;
      if (
        ((r = n.tag === 13) &&
          ((r = n.memoizedState),
          (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function gd(n, r, l, o, c) {
    return n.mode & 1
      ? ((n.flags |= 65536), (n.lanes = c), n)
      : (n === r
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (l.flags |= 131072),
            (l.flags &= -52805),
            l.tag === 1 &&
              (l.alternate === null
                ? (l.tag = 17)
                : ((r = Cr(-1, 1)), (r.tag = 2), Wi(l, r, 1))),
            (l.lanes |= 1)),
        n);
  }
  var Iv = je.ReactCurrentOwner,
    Rr = !1;
  function Kt(n, r, l, o) {
    r.child = n === null ? Uv(r, null, l, o) : mu(r, n.child, l, o);
  }
  function Du(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return (
      yu(r, c),
      (o = Y(n, r, l, o, d, c)),
      (l = an()),
      n !== null && !Rr
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~c),
          qt(n, r, c))
        : (Mt && l && Ws(r), (r.flags |= 1), Kt(n, r, o, c), r.child)
    );
  }
  function Gi(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" &&
        !Nd(d) &&
        d.defaultProps === void 0 &&
        l.compare === null &&
        l.defaultProps === void 0
        ? ((r.tag = 15), (r.type = d), gc(n, r, d, o, c))
        : ((n = zc(l.type, null, o, r, r.mode, c)),
          (n.ref = r.ref),
          (n.return = r),
          (r.child = n));
    }
    if (((d = n.child), !(n.lanes & c))) {
      var m = d.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : To), l(m, o) && n.ref === r.ref)
      )
        return qt(n, r, c);
    }
    return (
      (r.flags |= 1),
      (n = qi(d, o)),
      (n.ref = r.ref),
      (n.return = r),
      (r.child = n)
    );
  }
  function gc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (To(d, o) && n.ref === r.ref)
        if (((Rr = !1), (r.pendingProps = o = d), (n.lanes & c) !== 0))
          n.flags & 131072 && (Rr = !0);
        else return (r.lanes = n.lanes), qt(n, r, c);
    }
    return Pe(n, r, l, o, c);
  }
  function xr(n, r, l) {
    var o = r.pendingProps,
      c = o.children,
      d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          vt(Fu, wr),
          (wr |= l);
      else {
        if (!(l & 1073741824))
          return (
            (n = d !== null ? d.baseLanes | l : l),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = {
              baseLanes: n,
              cachePool: null,
              transitions: null,
            }),
            (r.updateQueue = null),
            vt(Fu, wr),
            (wr |= n),
            null
          );
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = d !== null ? d.baseLanes : l),
          vt(Fu, wr),
          (wr |= o);
      }
    else
      d !== null ? ((o = d.baseLanes | l), (r.memoizedState = null)) : (o = l),
        vt(Fu, wr),
        (wr |= o);
    return Kt(n, r, c, l), r.child;
  }
  function Ol(n, r) {
    var l = r.ref;
    ((n === null && l !== null) || (n !== null && n.ref !== l)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function Pe(n, r, l, o, c) {
    var d = At(l) ? mr : ze.current;
    return (
      (d = aa(r, d)),
      yu(r, c),
      (l = Y(n, r, l, o, d, c)),
      (o = an()),
      n !== null && !Rr
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~c),
          qt(n, r, c))
        : (Mt && o && Ws(r), (r.flags |= 1), Kt(n, r, l, c), r.child)
    );
  }
  function $o(n, r, l, o, c) {
    if (At(l)) {
      var d = !0;
      Ys(r);
    } else d = !1;
    if ((yu(r, c), r.stateNode === null))
      Wo(n, r), Bv(r, l, o), md(r, l, o, c), (o = !0);
    else if (n === null) {
      var m = r.stateNode,
        C = r.memoizedProps;
      m.props = C;
      var x = m.context,
        U = l.contextType;
      typeof U == "object" && U !== null
        ? (U = sa(U))
        : ((U = At(l) ? mr : ze.current), (U = aa(r, U)));
      var Q = l.getDerivedStateFromProps,
        G =
          typeof Q == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function";
      G ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((C !== o || x !== U) && Pv(r, m, o, U)),
        (Yi = !1);
      var W = r.memoizedState;
      (m.state = W),
        Zs(r, o, m, c),
        (x = r.memoizedState),
        C !== o || W !== x || Yt.current || Yi
          ? (typeof Q == "function" && (Ll(r, l, Q, o), (x = r.memoizedState)),
            (C = Yi || Vv(r, l, C, o, W, x, U))
              ? (G ||
                  (typeof m.UNSAFE_componentWillMount != "function" &&
                    typeof m.componentWillMount != "function") ||
                  (typeof m.componentWillMount == "function" &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == "function" &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof m.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = o),
                (r.memoizedState = x)),
            (m.props = o),
            (m.state = x),
            (m.context = U),
            (o = C))
          : (typeof m.componentDidMount == "function" && (r.flags |= 4194308),
            (o = !1));
    } else {
      (m = r.stateNode),
        gu(n, r),
        (C = r.memoizedProps),
        (U = r.type === r.elementType ? C : Tr(r.type, C)),
        (m.props = U),
        (G = r.pendingProps),
        (W = m.context),
        (x = l.contextType),
        typeof x == "object" && x !== null
          ? (x = sa(x))
          : ((x = At(l) ? mr : ze.current), (x = aa(r, x)));
      var se = l.getDerivedStateFromProps;
      (Q =
        typeof se == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function") ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((C !== G || W !== x) && Pv(r, m, o, x)),
        (Yi = !1),
        (W = r.memoizedState),
        (m.state = W),
        Zs(r, o, m, c);
      var ve = r.memoizedState;
      C !== G || W !== ve || Yt.current || Yi
        ? (typeof se == "function" && (Ll(r, l, se, o), (ve = r.memoizedState)),
          (U = Yi || Vv(r, l, U, o, W, ve, x) || !1)
            ? (Q ||
                (typeof m.UNSAFE_componentWillUpdate != "function" &&
                  typeof m.componentWillUpdate != "function") ||
                (typeof m.componentWillUpdate == "function" &&
                  m.componentWillUpdate(o, ve, x),
                typeof m.UNSAFE_componentWillUpdate == "function" &&
                  m.UNSAFE_componentWillUpdate(o, ve, x)),
              typeof m.componentDidUpdate == "function" && (r.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof m.componentDidUpdate != "function" ||
                (C === n.memoizedProps && W === n.memoizedState) ||
                (r.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != "function" ||
                (C === n.memoizedProps && W === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = o),
              (r.memoizedState = ve)),
          (m.props = o),
          (m.state = ve),
          (m.context = x),
          (o = U))
        : (typeof m.componentDidUpdate != "function" ||
            (C === n.memoizedProps && W === n.memoizedState) ||
            (r.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != "function" ||
            (C === n.memoizedProps && W === n.memoizedState) ||
            (r.flags |= 1024),
          (o = !1));
    }
    return Sc(n, r, l, o, d, c);
  }
  function Sc(n, r, l, o, c, d) {
    Ol(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && kv(r, l, !1), qt(n, r, d);
    (o = r.stateNode), (Iv.current = r);
    var C =
      m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (r.flags |= 1),
      n !== null && m
        ? ((r.child = mu(r, n.child, null, d)), (r.child = mu(r, null, C, d)))
        : Kt(n, r, C, d),
      (r.memoizedState = o.state),
      c && kv(r, l, !0),
      r.child
    );
  }
  function Ry(n) {
    var r = n.stateNode;
    r.pendingContext
      ? Pi(n, r.pendingContext, r.pendingContext !== r.context)
      : r.context && Pi(n, r.context, !1),
      fd(n, r.containerInfo);
  }
  function Gv(n, r, l, o, c) {
    return Bt(), od(c), (r.flags |= 256), Kt(n, r, l, o), r.child;
  }
  var Yo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ml(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Xv(n, r, l) {
    var o = r.pendingProps,
      c = jt.current,
      d = !1,
      m = (r.flags & 128) !== 0,
      C;
    if (
      ((C = m) ||
        (C = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0),
      C
        ? ((d = !0), (r.flags &= -129))
        : (n === null || n.memoizedState !== null) && (c |= 1),
      vt(jt, c & 1),
      n === null)
    )
      return (
        Is(r),
        (n = r.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? (r.mode & 1
              ? n.data === "$!"
                ? (r.lanes = 8)
                : (r.lanes = 1073741824)
              : (r.lanes = 1),
            null)
          : ((m = o.children),
            (n = o.fallback),
            d
              ? ((o = r.mode),
                (d = r.child),
                (m = { mode: "hidden", children: m }),
                !(o & 1) && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = m))
                  : (d = Ac(m, o, 0, null)),
                (n = Hl(n, o, l, null)),
                (d.return = r),
                (n.return = r),
                (d.sibling = n),
                (r.child = d),
                (r.child.memoizedState = Ml(l)),
                (r.memoizedState = Yo),
                n)
              : Ec(r, m))
      );
    if (((c = n.memoizedState), c !== null && ((C = c.dehydrated), C !== null)))
      return Sd(n, r, m, o, C, c, l);
    if (d) {
      (d = o.fallback), (m = r.mode), (c = n.child), (C = c.sibling);
      var x = { mode: "hidden", children: o.children };
      return (
        !(m & 1) && r.child !== c
          ? ((o = r.child),
            (o.childLanes = 0),
            (o.pendingProps = x),
            (r.deletions = null))
          : ((o = qi(c, x)), (o.subtreeFlags = c.subtreeFlags & 14680064)),
        C !== null ? (d = qi(C, d)) : ((d = Hl(d, m, l, null)), (d.flags |= 2)),
        (d.return = r),
        (o.return = r),
        (o.sibling = d),
        (r.child = o),
        (o = d),
        (d = r.child),
        (m = n.child.memoizedState),
        (m =
          m === null
            ? Ml(l)
            : {
                baseLanes: m.baseLanes | l,
                cachePool: null,
                transitions: m.transitions,
              }),
        (d.memoizedState = m),
        (d.childLanes = n.childLanes & ~l),
        (r.memoizedState = Yo),
        o
      );
    }
    return (
      (d = n.child),
      (n = d.sibling),
      (o = qi(d, { mode: "visible", children: o.children })),
      !(r.mode & 1) && (o.lanes = l),
      (o.return = r),
      (o.sibling = null),
      n !== null &&
        ((l = r.deletions),
        l === null ? ((r.deletions = [n]), (r.flags |= 16)) : l.push(n)),
      (r.child = o),
      (r.memoizedState = null),
      o
    );
  }
  function Ec(n, r) {
    return (
      (r = Ac({ mode: "visible", children: r }, n.mode, 0, null)),
      (r.return = n),
      (n.child = r)
    );
  }
  function Cc(n, r, l, o) {
    return (
      o !== null && od(o),
      mu(r, n.child, null, l),
      (n = Ec(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function Sd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256
        ? ((r.flags &= -257), (o = yd(Error(S(422)))), Cc(n, r, m, o))
        : r.memoizedState !== null
          ? ((r.child = n.child), (r.flags |= 128), null)
          : ((d = o.fallback),
            (c = r.mode),
            (o = Ac({ mode: "visible", children: o.children }, c, 0, null)),
            (d = Hl(d, c, m, null)),
            (d.flags |= 2),
            (o.return = r),
            (d.return = r),
            (o.sibling = d),
            (r.child = o),
            r.mode & 1 && mu(r, n.child, null, m),
            (r.child.memoizedState = Ml(m)),
            (r.memoizedState = Yo),
            d);
    if (!(r.mode & 1)) return Cc(n, r, m, null);
    if (c.data === "$!") {
      if (((o = c.nextSibling && c.nextSibling.dataset), o)) var C = o.dgst;
      return (
        (o = C), (d = Error(S(419))), (o = yd(d, o, void 0)), Cc(n, r, m, o)
      );
    }
    if (((C = (m & n.childLanes) !== 0), Rr || C)) {
      if (((o = Qt), o !== null)) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        (c = c & (o.suspendedLanes | m) ? 0 : c),
          c !== 0 &&
            c !== d.retryLane &&
            ((d.retryLane = c), hi(n, c), Pt(o, n, c, -1));
      }
      return Ko(), (o = yd(Error(S(421)))), Cc(n, r, m, o);
    }
    return c.data === "$?"
      ? ((r.flags |= 128),
        (r.child = n.child),
        (r = Ld.bind(null, n)),
        (c._reactRetry = r),
        null)
      : ((n = d.treeContext),
        (Er = Ma(c.nextSibling)),
        (Br = r),
        (Mt = !0),
        (ua = null),
        n !== null &&
          ((Sr[Gn++] = On),
          (Sr[Gn++] = pi),
          (Sr[Gn++] = la),
          (On = n.id),
          (pi = n.overflow),
          (la = r)),
        (r = Ec(r, o.children)),
        (r.flags |= 4096),
        r);
  }
  function Kv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), cd(n.return, r, l);
  }
  function Tc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: l,
          tailMode: c,
        })
      : ((d.isBackwards = r),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = l),
        (d.tailMode = c));
  }
  function Ed(n, r, l) {
    var o = r.pendingProps,
      c = o.revealOrder,
      d = o.tail;
    if ((Kt(n, r, o.children, l), (o = jt.current), o & 2))
      (o = (o & 1) | 2), (r.flags |= 128);
    else {
      if (n !== null && n.flags & 128)
        e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && Kv(n, l, r);
          else if (n.tag === 19) Kv(n, l, r);
          else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === r) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      o &= 1;
    }
    if ((vt(jt, o), !(r.mode & 1))) r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            (n = l.alternate),
              n !== null && ec(n) === null && (c = l),
              (l = l.sibling);
          (l = c),
            l === null
              ? ((c = r.child), (r.child = null))
              : ((c = l.sibling), (l.sibling = null)),
            Tc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (((n = c.alternate), n !== null && ec(n) === null)) {
              r.child = c;
              break;
            }
            (n = c.sibling), (c.sibling = l), (l = c), (c = n);
          }
          Tc(r, !0, l, null, d);
          break;
        case "together":
          Tc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Wo(n, r) {
    !(r.mode & 1) &&
      n !== null &&
      ((n.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function qt(n, r, l) {
    if (
      (n !== null && (r.dependencies = n.dependencies),
      (zl |= r.lanes),
      !(l & r.childLanes))
    )
      return null;
    if (n !== null && r.child !== n.child) throw Error(S(153));
    if (r.child !== null) {
      for (
        n = r.child, l = qi(n, n.pendingProps), r.child = l, l.return = r;
        n.sibling !== null;

      )
        (n = n.sibling),
          (l = l.sibling = qi(n, n.pendingProps)),
          (l.return = r);
      l.sibling = null;
    }
    return r.child;
  }
  function yi(n, r, l) {
    switch (r.tag) {
      case 3:
        Ry(r), Bt();
        break;
      case 5:
        Fv(r);
        break;
      case 1:
        At(r.type) && Ys(r);
        break;
      case 4:
        fd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context,
          c = r.memoizedProps.value;
        vt(vi, o._currentValue), (o._currentValue = c);
        break;
      case 13:
        if (((o = r.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (vt(jt, jt.current & 1), (r.flags |= 128), null)
            : l & r.child.childLanes
              ? Xv(n, r, l)
              : (vt(jt, jt.current & 1),
                (n = qt(n, r, l)),
                n !== null ? n.sibling : null);
        vt(jt, jt.current & 1);
        break;
      case 19:
        if (((o = (l & r.childLanes) !== 0), n.flags & 128)) {
          if (o) return Ed(n, r, l);
          r.flags |= 128;
        }
        if (
          ((c = r.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          vt(jt, jt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), xr(n, r, l);
    }
    return qt(n, r, l);
  }
  var Ia, ku, Lu, fa;
  (Ia = function (n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
  }),
    (ku = function () {}),
    (Lu = function (n, r, l, o) {
      var c = n.memoizedProps;
      if (c !== o) {
        (n = r.stateNode), bl(Ua.current);
        var d = null;
        switch (l) {
          case "input":
            (c = Yn(n, c)), (o = Yn(n, o)), (d = []);
            break;
          case "select":
            (c = fe({}, c, { value: void 0 })),
              (o = fe({}, o, { value: void 0 })),
              (d = []);
            break;
          case "textarea":
            (c = xa(n, c)), (o = xa(n, o)), (d = []);
            break;
          default:
            typeof c.onClick != "function" &&
              typeof o.onClick == "function" &&
              (n.onclick = $s);
        }
        Sn(l, o);
        var m;
        l = null;
        for (U in c)
          if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null)
            if (U === "style") {
              var C = c[U];
              for (m in C) C.hasOwnProperty(m) && (l || (l = {}), (l[m] = ""));
            } else
              U !== "dangerouslySetInnerHTML" &&
                U !== "children" &&
                U !== "suppressContentEditableWarning" &&
                U !== "suppressHydrationWarning" &&
                U !== "autoFocus" &&
                (A.hasOwnProperty(U)
                  ? d || (d = [])
                  : (d = d || []).push(U, null));
        for (U in o) {
          var x = o[U];
          if (
            ((C = c != null ? c[U] : void 0),
            o.hasOwnProperty(U) && x !== C && (x != null || C != null))
          )
            if (U === "style")
              if (C) {
                for (m in C)
                  !C.hasOwnProperty(m) ||
                    (x && x.hasOwnProperty(m)) ||
                    (l || (l = {}), (l[m] = ""));
                for (m in x)
                  x.hasOwnProperty(m) &&
                    C[m] !== x[m] &&
                    (l || (l = {}), (l[m] = x[m]));
              } else l || (d || (d = []), d.push(U, l)), (l = x);
            else
              U === "dangerouslySetInnerHTML"
                ? ((x = x ? x.__html : void 0),
                  (C = C ? C.__html : void 0),
                  x != null && C !== x && (d = d || []).push(U, x))
                : U === "children"
                  ? (typeof x != "string" && typeof x != "number") ||
                    (d = d || []).push(U, "" + x)
                  : U !== "suppressContentEditableWarning" &&
                    U !== "suppressHydrationWarning" &&
                    (A.hasOwnProperty(U)
                      ? (x != null && U === "onScroll" && xt("scroll", n),
                        d || C === x || (d = []))
                      : (d = d || []).push(U, x));
        }
        l && (d = d || []).push("style", l);
        var U = d;
        (r.updateQueue = U) && (r.flags |= 4);
      }
    }),
    (fa = function (n, r, l, o) {
      l !== o && (r.flags |= 4);
    });
  function Wt(n, r) {
    if (!Mt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), (r = r.sibling);
          l === null ? (n.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), (l = l.sibling);
          o === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function qn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      l = 0,
      o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        (l |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 14680064),
          (o |= c.flags & 14680064),
          (c.return = n),
          (c = c.sibling);
    else
      for (c = n.child; c !== null; )
        (l |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = n),
          (c = c.sibling);
    return (n.subtreeFlags |= o), (n.childLanes = l), r;
  }
  function xy(n, r, l) {
    var o = r.pendingProps;
    switch ((ld(r), r.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qn(r), null;
      case 1:
        return At(r.type) && ia(), qn(r), null;
      case 3:
        return (
          (o = r.stateNode),
          Eu(),
          ft(Yt),
          ft(ze),
          pd(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (n === null || n.child === null) &&
            (Gs(r)
              ? (r.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && !(r.flags & 256)) ||
                ((r.flags |= 1024), ua !== null && (_d(ua), (ua = null)))),
          ku(n, r),
          qn(r),
          null
        );
      case 5:
        dd(r);
        var c = bl(zo.current);
        if (((l = r.type), n !== null && r.stateNode != null))
          Lu(n, r, l, o, c),
            n.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(S(166));
            return qn(r), null;
          }
          if (((n = bl(Ua.current)), Gs(r))) {
            (o = r.stateNode), (l = r.type);
            var d = r.memoizedProps;
            switch (((o[Ya] = r), (o[Tl] = d), (n = (r.mode & 1) !== 0), l)) {
              case "dialog":
                xt("cancel", o), xt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                xt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < bo.length; c++) xt(bo[c], o);
                break;
              case "source":
                xt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                xt("error", o), xt("load", o);
                break;
              case "details":
                xt("toggle", o);
                break;
              case "input":
                Ln(o, d), xt("invalid", o);
                break;
              case "select":
                (o._wrapperState = { wasMultiple: !!d.multiple }),
                  xt("invalid", o);
                break;
              case "textarea":
                Or(o, d), xt("invalid", o);
            }
            Sn(l, d), (c = null);
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var C = d[m];
                m === "children"
                  ? typeof C == "string"
                    ? o.textContent !== C &&
                      (d.suppressHydrationWarning !== !0 &&
                        Ps(o.textContent, C, n),
                      (c = ["children", C]))
                    : typeof C == "number" &&
                      o.textContent !== "" + C &&
                      (d.suppressHydrationWarning !== !0 &&
                        Ps(o.textContent, C, n),
                      (c = ["children", "" + C]))
                  : A.hasOwnProperty(m) &&
                    C != null &&
                    m === "onScroll" &&
                    xt("scroll", o);
              }
            switch (l) {
              case "input":
                dr(o), Jr(o, d, !0);
                break;
              case "textarea":
                dr(o), Mr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = $s);
            }
            (o = c), (r.updateQueue = o), o !== null && (r.flags |= 4);
          } else {
            (m = c.nodeType === 9 ? c : c.ownerDocument),
              n === "http://www.w3.org/1999/xhtml" && (n = wa(l)),
              n === "http://www.w3.org/1999/xhtml"
                ? l === "script"
                  ? ((n = m.createElement("div")),
                    (n.innerHTML = "<script></script>"),
                    (n = n.removeChild(n.firstChild)))
                  : typeof o.is == "string"
                    ? (n = m.createElement(l, { is: o.is }))
                    : ((n = m.createElement(l)),
                      l === "select" &&
                        ((m = n),
                        o.multiple
                          ? (m.multiple = !0)
                          : o.size && (m.size = o.size)))
                : (n = m.createElementNS(n, l)),
              (n[Ya] = r),
              (n[Tl] = o),
              Ia(n, r, !1, !1),
              (r.stateNode = n);
            e: {
              switch (((m = Xt(l, o)), l)) {
                case "dialog":
                  xt("cancel", n), xt("close", n), (c = o);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  xt("load", n), (c = o);
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < bo.length; c++) xt(bo[c], n);
                  c = o;
                  break;
                case "source":
                  xt("error", n), (c = o);
                  break;
                case "img":
                case "image":
                case "link":
                  xt("error", n), xt("load", n), (c = o);
                  break;
                case "details":
                  xt("toggle", n), (c = o);
                  break;
                case "input":
                  Ln(n, o), (c = Yn(n, o)), xt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!o.multiple }),
                    (c = fe({}, o, { value: void 0 })),
                    xt("invalid", n);
                  break;
                case "textarea":
                  Or(n, o), (c = xa(n, o)), xt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Sn(l, c), (C = c);
              for (d in C)
                if (C.hasOwnProperty(d)) {
                  var x = C[d];
                  d === "style"
                    ? yt(n, x)
                    : d === "dangerouslySetInnerHTML"
                      ? ((x = x ? x.__html : void 0), x != null && Oi(n, x))
                      : d === "children"
                        ? typeof x == "string"
                          ? (l !== "textarea" || x !== "") && ba(n, x)
                          : typeof x == "number" && ba(n, "" + x)
                        : d !== "suppressContentEditableWarning" &&
                          d !== "suppressHydrationWarning" &&
                          d !== "autoFocus" &&
                          (A.hasOwnProperty(d)
                            ? x != null && d === "onScroll" && xt("scroll", n)
                            : x != null && xe(n, d, x, m));
                }
              switch (l) {
                case "input":
                  dr(n), Jr(n, o, !1);
                  break;
                case "textarea":
                  dr(n), Mr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + $n(o.value));
                  break;
                case "select":
                  (n.multiple = !!o.multiple),
                    (d = o.value),
                    d != null
                      ? Va(n, !!o.multiple, d, !1)
                      : o.defaultValue != null &&
                        Va(n, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = $s);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return qn(r), null;
      case 6:
        if (n && r.stateNode != null) fa(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(S(166));
          if (((l = bl(zo.current)), bl(Ua.current), Gs(r))) {
            if (
              ((o = r.stateNode),
              (l = r.memoizedProps),
              (o[Ya] = r),
              (d = o.nodeValue !== l) && ((n = Br), n !== null))
            )
              switch (n.tag) {
                case 3:
                  Ps(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ps(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            (o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o)),
              (o[Ya] = r),
              (r.stateNode = o);
        }
        return qn(r), null;
      case 13:
        if (
          (ft(jt),
          (o = r.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (Mt && Er !== null && r.mode & 1 && !(r.flags & 128))
            Ov(), Bt(), (r.flags |= 98560), (d = !1);
          else if (((d = Gs(r)), o !== null && o.dehydrated !== null)) {
            if (n === null) {
              if (!d) throw Error(S(318));
              if (
                ((d = r.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(S(317));
              d[Ya] = r;
            } else
              Bt(),
                !(r.flags & 128) && (r.memoizedState = null),
                (r.flags |= 4);
            qn(r), (d = !1);
          } else ua !== null && (_d(ua), (ua = null)), (d = !0);
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128
          ? ((r.lanes = l), r)
          : ((o = o !== null),
            o !== (n !== null && n.memoizedState !== null) &&
              o &&
              ((r.child.flags |= 8192),
              r.mode & 1 &&
                (n === null || jt.current & 1 ? fn === 0 && (fn = 3) : Ko())),
            r.updateQueue !== null && (r.flags |= 4),
            qn(r),
            null);
      case 4:
        return (
          Eu(),
          ku(n, r),
          n === null && pu(r.stateNode.containerInfo),
          qn(r),
          null
        );
      case 10:
        return sd(r.type._context), qn(r), null;
      case 17:
        return At(r.type) && ia(), qn(r), null;
      case 19:
        if ((ft(jt), (d = r.memoizedState), d === null)) return qn(r), null;
        if (((o = (r.flags & 128) !== 0), (m = d.rendering), m === null))
          if (o) Wt(d, !1);
          else {
            if (fn !== 0 || (n !== null && n.flags & 128))
              for (n = r.child; n !== null; ) {
                if (((m = ec(n)), m !== null)) {
                  for (
                    r.flags |= 128,
                      Wt(d, !1),
                      o = m.updateQueue,
                      o !== null && ((r.updateQueue = o), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      o = l,
                      l = r.child;
                    l !== null;

                  )
                    (d = l),
                      (n = o),
                      (d.flags &= 14680066),
                      (m = d.alternate),
                      m === null
                        ? ((d.childLanes = 0),
                          (d.lanes = n),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = m.childLanes),
                          (d.lanes = m.lanes),
                          (d.child = m.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = m.memoizedProps),
                          (d.memoizedState = m.memoizedState),
                          (d.updateQueue = m.updateQueue),
                          (d.type = m.type),
                          (n = m.dependencies),
                          (d.dependencies =
                            n === null
                              ? null
                              : {
                                  lanes: n.lanes,
                                  firstContext: n.firstContext,
                                })),
                      (l = l.sibling);
                  return vt(jt, (jt.current & 1) | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null &&
              pt() > Vu &&
              ((r.flags |= 128), (o = !0), Wt(d, !1), (r.lanes = 4194304));
          }
        else {
          if (!o)
            if (((n = ec(m)), n !== null)) {
              if (
                ((r.flags |= 128),
                (o = !0),
                (l = n.updateQueue),
                l !== null && ((r.updateQueue = l), (r.flags |= 4)),
                Wt(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !m.alternate &&
                  !Mt)
              )
                return qn(r), null;
            } else
              2 * pt() - d.renderingStartTime > Vu &&
                l !== 1073741824 &&
                ((r.flags |= 128), (o = !0), Wt(d, !1), (r.lanes = 4194304));
          d.isBackwards
            ? ((m.sibling = r.child), (r.child = m))
            : ((l = d.last),
              l !== null ? (l.sibling = m) : (r.child = m),
              (d.last = m));
        }
        return d.tail !== null
          ? ((r = d.tail),
            (d.rendering = r),
            (d.tail = r.sibling),
            (d.renderingStartTime = pt()),
            (r.sibling = null),
            (l = jt.current),
            vt(jt, o ? (l & 1) | 2 : l & 1),
            r)
          : (qn(r), null);
      case 22:
      case 23:
        return (
          Mc(),
          (o = r.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== o && (r.flags |= 8192),
          o && r.mode & 1
            ? wr & 1073741824 &&
              (qn(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : qn(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, r.tag));
  }
  function wy(n, r) {
    switch ((ld(r), r.tag)) {
      case 1:
        return (
          At(r.type) && ia(),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 3:
        return (
          Eu(),
          ft(Yt),
          ft(ze),
          pd(),
          (n = r.flags),
          n & 65536 && !(n & 128) ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 5:
        return dd(r), null;
      case 13:
        if (
          (ft(jt), (n = r.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(S(340));
          Bt();
        }
        return (
          (n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 19:
        return ft(jt), null;
      case 4:
        return Eu(), null;
      case 10:
        return sd(r.type._context), null;
      case 22:
      case 23:
        return Mc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Nu = !1,
    Un = !1,
    Rc = typeof WeakSet == "function" ? WeakSet : Set,
    pe = null;
  function Ou(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          It(n, r, o);
        }
      else l.current = null;
  }
  function Cd(n, r, l) {
    try {
      l();
    } catch (o) {
      It(n, r, o);
    }
  }
  var xc = !1;
  function by(n, r) {
    if (((Jf = hl), (n = js()), si(n))) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = ((l = n.ownerDocument) && l.defaultView) || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0,
              C = -1,
              x = -1,
              U = 0,
              Q = 0,
              G = n,
              W = null;
            t: for (;;) {
              for (
                var se;
                G !== l || (c !== 0 && G.nodeType !== 3) || (C = m + c),
                  G !== d || (o !== 0 && G.nodeType !== 3) || (x = m + o),
                  G.nodeType === 3 && (m += G.nodeValue.length),
                  (se = G.firstChild) !== null;

              )
                (W = G), (G = se);
              for (;;) {
                if (G === n) break t;
                if (
                  (W === l && ++U === c && (C = m),
                  W === d && ++Q === o && (x = m),
                  (se = G.nextSibling) !== null)
                )
                  break;
                (G = W), (W = G.parentNode);
              }
              G = se;
            }
            l = C === -1 || x === -1 ? null : { start: C, end: x };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      El = { focusedElem: n, selectionRange: l }, hl = !1, pe = r;
      pe !== null;

    )
      if (
        ((r = pe), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null)
      )
        (n.return = r), (pe = n);
      else
        for (; pe !== null; ) {
          r = pe;
          try {
            var ve = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ve !== null) {
                    var ye = ve.memoizedProps,
                      Jt = ve.memoizedState,
                      k = r.stateNode,
                      b = k.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? ye : Tr(r.type, ye),
                        Jt,
                      );
                    k.__reactInternalSnapshotBeforeUpdate = b;
                  }
                  break;
                case 3:
                  var O = r.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(S(163));
              }
          } catch (q) {
            It(r, r.return, q);
          }
          if (((n = r.sibling), n !== null)) {
            (n.return = r.return), (pe = n);
            break;
          }
          pe = r.return;
        }
    return (ve = xc), (xc = !1), ve;
  }
  function Mu(n, r, l) {
    var o = r.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var c = (o = o.next);
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          (c.destroy = void 0), d !== void 0 && Cd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function wc(n, r) {
    if (
      ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
    ) {
      var l = (r = r.next);
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function bc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : (r.current = n);
    }
  }
  function qv(n) {
    var r = n.alternate;
    r !== null && ((n.alternate = null), qv(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((r = n.stateNode),
        r !== null &&
          (delete r[Ya],
          delete r[Tl],
          delete r[td],
          delete r[Ey],
          delete r[nd])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null);
  }
  function Td(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Jv(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Td(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Qo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      (n = n.stateNode),
        r
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(n, r)
            : l.insertBefore(n, r)
          : (l.nodeType === 8
              ? ((r = l.parentNode), r.insertBefore(n, l))
              : ((r = l), r.appendChild(n)),
            (l = l._reactRootContainer),
            l != null || r.onclick !== null || (r.onclick = $s));
    else if (o !== 4 && ((n = n.child), n !== null))
      for (Qo(n, r, l), n = n.sibling; n !== null; )
        Qo(n, r, l), (n = n.sibling);
  }
  function Uu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      (n = n.stateNode), r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && ((n = n.child), n !== null))
      for (Uu(n, r, l), n = n.sibling; n !== null; )
        Uu(n, r, l), (n = n.sibling);
  }
  var Ft = null,
    xn = !1;
  function tr(n, r, l) {
    for (l = l.child; l !== null; ) zu(n, r, l), (l = l.sibling);
  }
  function zu(n, r, l) {
    if (Da && typeof Da.onCommitFiberUnmount == "function")
      try {
        Da.onCommitFiberUnmount(so, l);
      } catch {}
    switch (l.tag) {
      case 5:
        Un || Ou(l, r);
      case 6:
        var o = Ft,
          c = xn;
        (Ft = null),
          tr(n, r, l),
          (Ft = o),
          (xn = c),
          Ft !== null &&
            (xn
              ? ((n = Ft),
                (l = l.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(l)
                  : n.removeChild(l))
              : Ft.removeChild(l.stateNode));
        break;
      case 18:
        Ft !== null &&
          (xn
            ? ((n = Ft),
              (l = l.stateNode),
              n.nodeType === 8
                ? Hi(n.parentNode, l)
                : n.nodeType === 1 && Hi(n, l),
              ho(n))
            : Hi(Ft, l.stateNode));
        break;
      case 4:
        (o = Ft),
          (c = xn),
          (Ft = l.stateNode.containerInfo),
          (xn = !0),
          tr(n, r, l),
          (Ft = o),
          (xn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Un &&
          ((o = l.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          c = o = o.next;
          do {
            var d = c,
              m = d.destroy;
            (d = d.tag),
              m !== void 0 && (d & 2 || d & 4) && Cd(l, r, m),
              (c = c.next);
          } while (c !== o);
        }
        tr(n, r, l);
        break;
      case 1:
        if (
          !Un &&
          (Ou(l, r),
          (o = l.stateNode),
          typeof o.componentWillUnmount == "function")
        )
          try {
            (o.props = l.memoizedProps),
              (o.state = l.memoizedState),
              o.componentWillUnmount();
          } catch (C) {
            It(l, r, C);
          }
        tr(n, r, l);
        break;
      case 21:
        tr(n, r, l);
        break;
      case 22:
        l.mode & 1
          ? ((Un = (o = Un) || l.memoizedState !== null), tr(n, r, l), (Un = o))
          : tr(n, r, l);
        break;
      default:
        tr(n, r, l);
    }
  }
  function Au(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Rc()),
        r.forEach(function (o) {
          var c = My.bind(null, n, o);
          l.has(o) || (l.add(o), o.then(c, c));
        });
    }
  }
  function wn(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n,
            m = r,
            C = m;
          e: for (; C !== null; ) {
            switch (C.tag) {
              case 5:
                (Ft = C.stateNode), (xn = !1);
                break e;
              case 3:
                (Ft = C.stateNode.containerInfo), (xn = !0);
                break e;
              case 4:
                (Ft = C.stateNode.containerInfo), (xn = !0);
                break e;
            }
            C = C.return;
          }
          if (Ft === null) throw Error(S(160));
          zu(d, m, c), (Ft = null), (xn = !1);
          var x = c.alternate;
          x !== null && (x.return = null), (c.return = null);
        } catch (U) {
          It(c, r, U);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) Zv(r, n), (r = r.sibling);
  }
  function Zv(n, r) {
    var l = n.alternate,
      o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wn(r, n), Ga(n), o & 4)) {
          try {
            Mu(3, n, n.return), wc(3, n);
          } catch (ye) {
            It(n, n.return, ye);
          }
          try {
            Mu(5, n, n.return);
          } catch (ye) {
            It(n, n.return, ye);
          }
        }
        break;
      case 1:
        wn(r, n), Ga(n), o & 512 && l !== null && Ou(l, l.return);
        break;
      case 5:
        if (
          (wn(r, n),
          Ga(n),
          o & 512 && l !== null && Ou(l, l.return),
          n.flags & 32)
        ) {
          var c = n.stateNode;
          try {
            ba(c, "");
          } catch (ye) {
            It(n, n.return, ye);
          }
        }
        if (o & 4 && ((c = n.stateNode), c != null)) {
          var d = n.memoizedProps,
            m = l !== null ? l.memoizedProps : d,
            C = n.type,
            x = n.updateQueue;
          if (((n.updateQueue = null), x !== null))
            try {
              C === "input" && d.type === "radio" && d.name != null && Nn(c, d),
                Xt(C, m);
              var U = Xt(C, d);
              for (m = 0; m < x.length; m += 2) {
                var Q = x[m],
                  G = x[m + 1];
                Q === "style"
                  ? yt(c, G)
                  : Q === "dangerouslySetInnerHTML"
                    ? Oi(c, G)
                    : Q === "children"
                      ? ba(c, G)
                      : xe(c, Q, G, U);
              }
              switch (C) {
                case "input":
                  Wn(c, d);
                  break;
                case "textarea":
                  Ba(c, d);
                  break;
                case "select":
                  var W = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var se = d.value;
                  se != null
                    ? Va(c, !!d.multiple, se, !1)
                    : W !== !!d.multiple &&
                      (d.defaultValue != null
                        ? Va(c, !!d.multiple, d.defaultValue, !0)
                        : Va(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Tl] = d;
            } catch (ye) {
              It(n, n.return, ye);
            }
        }
        break;
      case 6:
        if ((wn(r, n), Ga(n), o & 4)) {
          if (n.stateNode === null) throw Error(S(162));
          (c = n.stateNode), (d = n.memoizedProps);
          try {
            c.nodeValue = d;
          } catch (ye) {
            It(n, n.return, ye);
          }
        }
        break;
      case 3:
        if (
          (wn(r, n), Ga(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            ho(r.containerInfo);
          } catch (ye) {
            It(n, n.return, ye);
          }
        break;
      case 4:
        wn(r, n), Ga(n);
        break;
      case 13:
        wn(r, n),
          Ga(n),
          (c = n.child),
          c.flags & 8192 &&
            ((d = c.memoizedState !== null),
            (c.stateNode.isHidden = d),
            !d ||
              (c.alternate !== null && c.alternate.memoizedState !== null) ||
              (Dc = pt())),
          o & 4 && Au(n);
        break;
      case 22:
        if (
          ((Q = l !== null && l.memoizedState !== null),
          n.mode & 1 ? ((Un = (U = Un) || Q), wn(r, n), (Un = U)) : wn(r, n),
          Ga(n),
          o & 8192)
        ) {
          if (
            ((U = n.memoizedState !== null),
            (n.stateNode.isHidden = U) && !Q && n.mode & 1)
          )
            for (pe = n, Q = n.child; Q !== null; ) {
              for (G = pe = Q; pe !== null; ) {
                switch (((W = pe), (se = W.child), W.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mu(4, W, W.return);
                    break;
                  case 1:
                    Ou(W, W.return);
                    var ve = W.stateNode;
                    if (typeof ve.componentWillUnmount == "function") {
                      (o = W), (l = W.return);
                      try {
                        (r = o),
                          (ve.props = r.memoizedProps),
                          (ve.state = r.memoizedState),
                          ve.componentWillUnmount();
                      } catch (ye) {
                        It(o, l, ye);
                      }
                    }
                    break;
                  case 5:
                    Ou(W, W.return);
                    break;
                  case 22:
                    if (W.memoizedState !== null) {
                      eh(G);
                      continue;
                    }
                }
                se !== null ? ((se.return = W), (pe = se)) : eh(G);
              }
              Q = Q.sibling;
            }
          e: for (Q = null, G = n; ; ) {
            if (G.tag === 5) {
              if (Q === null) {
                Q = G;
                try {
                  (c = G.stateNode),
                    U
                      ? ((d = c.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : ((C = G.stateNode),
                        (x = G.memoizedProps.style),
                        (m =
                          x != null && x.hasOwnProperty("display")
                            ? x.display
                            : null),
                        (C.style.display = Ge("display", m)));
                } catch (ye) {
                  It(n, n.return, ye);
                }
              }
            } else if (G.tag === 6) {
              if (Q === null)
                try {
                  G.stateNode.nodeValue = U ? "" : G.memoizedProps;
                } catch (ye) {
                  It(n, n.return, ye);
                }
            } else if (
              ((G.tag !== 22 && G.tag !== 23) ||
                G.memoizedState === null ||
                G === n) &&
              G.child !== null
            ) {
              (G.child.return = G), (G = G.child);
              continue;
            }
            if (G === n) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === n) break e;
              Q === G && (Q = null), (G = G.return);
            }
            Q === G && (Q = null),
              (G.sibling.return = G.return),
              (G = G.sibling);
          }
        }
        break;
      case 19:
        wn(r, n), Ga(n), o & 4 && Au(n);
        break;
      case 21:
        break;
      default:
        wn(r, n), Ga(n);
    }
  }
  function Ga(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Td(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(S(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ba(c, ""), (o.flags &= -33));
            var d = Jv(n);
            Uu(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo,
              C = Jv(n);
            Qo(n, C, m);
            break;
          default:
            throw Error(S(161));
        }
      } catch (x) {
        It(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function _y(n, r, l) {
    (pe = n), Rd(n);
  }
  function Rd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe,
        d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Nu;
        if (!m) {
          var C = c.alternate,
            x = (C !== null && C.memoizedState !== null) || Un;
          C = Nu;
          var U = Un;
          if (((Nu = m), (Un = x) && !U))
            for (pe = c; pe !== null; )
              (m = pe),
                (x = m.child),
                m.tag === 22 && m.memoizedState !== null
                  ? xd(c)
                  : x !== null
                    ? ((x.return = m), (pe = x))
                    : xd(c);
          for (; d !== null; ) (pe = d), Rd(d), (d = d.sibling);
          (pe = c), (Nu = C), (Un = U);
        }
        ju(n);
      } else
        c.subtreeFlags & 8772 && d !== null
          ? ((d.return = c), (pe = d))
          : ju(n);
    }
  }
  function ju(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Un || wc(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Un)
                  if (l === null) o.componentDidMount();
                  else {
                    var c =
                      r.elementType === r.type
                        ? l.memoizedProps
                        : Tr(r.type, l.memoizedProps);
                    o.componentDidUpdate(
                      c,
                      l.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var d = r.updateQueue;
                d !== null && jv(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (((l = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  jv(r, m, l);
                }
                break;
              case 5:
                var C = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = C;
                  var x = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && l.focus();
                      break;
                    case "img":
                      x.src && (l.src = x.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var U = r.alternate;
                  if (U !== null) {
                    var Q = U.memoizedState;
                    if (Q !== null) {
                      var G = Q.dehydrated;
                      G !== null && ho(G);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(S(163));
            }
          Un || (r.flags & 512 && bc(r));
        } catch (W) {
          It(r, r.return, W);
        }
      }
      if (r === n) {
        pe = null;
        break;
      }
      if (((l = r.sibling), l !== null)) {
        (l.return = r.return), (pe = l);
        break;
      }
      pe = r.return;
    }
  }
  function eh(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r === n) {
        pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        (l.return = r.return), (pe = l);
        break;
      }
      pe = r.return;
    }
  }
  function xd(n) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              wc(4, r);
            } catch (x) {
              It(r, l, x);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (x) {
                It(r, c, x);
              }
            }
            var d = r.return;
            try {
              bc(r);
            } catch (x) {
              It(r, d, x);
            }
            break;
          case 5:
            var m = r.return;
            try {
              bc(r);
            } catch (x) {
              It(r, m, x);
            }
        }
      } catch (x) {
        It(r, r.return, x);
      }
      if (r === n) {
        pe = null;
        break;
      }
      var C = r.sibling;
      if (C !== null) {
        (C.return = r.return), (pe = C);
        break;
      }
      pe = r.return;
    }
  }
  var Dy = Math.ceil,
    Ul = je.ReactCurrentDispatcher,
    _c = je.ReactCurrentOwner,
    da = je.ReactCurrentBatchConfig,
    Je = 0,
    Qt = null,
    Ut = null,
    cn = 0,
    wr = 0,
    Fu = Ye(0),
    fn = 0,
    Io = null,
    zl = 0,
    Hu = 0,
    wd = 0,
    Xi = null,
    Jn = null,
    Dc = 0,
    Vu = 1 / 0,
    gi = null,
    kc = !1,
    bd = null,
    pa = null,
    Bu = !1,
    va = null,
    Lc = 0,
    Go = 0,
    Nc = null,
    Xo = -1,
    Al = 0;
  function bn() {
    return Je & 6 ? pt() : Xo !== -1 ? Xo : (Xo = pt());
  }
  function Si(n) {
    return n.mode & 1
      ? Je & 2 && cn !== 0
        ? cn & -cn
        : Xs.transition !== null
          ? (Al === 0 && (Al = ws()), Al)
          : ((n = gt),
            n !== 0 ||
              ((n = window.event), (n = n === void 0 ? 16 : Of(n.type))),
            n)
      : 1;
  }
  function Pt(n, r, l, o) {
    if (50 < Go) throw ((Go = 0), (Nc = null), Error(S(185)));
    vl(n, l, o),
      (!(Je & 2) || n !== Qt) &&
        (n === Qt && (!(Je & 2) && (Hu |= l), fn === 4 && Xa(n, cn)),
        dn(n, o),
        l === 1 &&
          Je === 0 &&
          !(r.mode & 1) &&
          ((Vu = pt() + 500), Rn && yr()));
  }
  function dn(n, r) {
    var l = n.callbackNode;
    xs(n, r);
    var o = ka(n, n === Qt ? cn : 0);
    if (o === 0)
      l !== null && Vt(l), (n.callbackNode = null), (n.callbackPriority = 0);
    else if (((r = o & -o), n.callbackPriority !== r)) {
      if ((l != null && Vt(l), r === 1))
        n.tag === 0 ? ad(Pu.bind(null, n)) : rd(Pu.bind(null, n)),
          ed(function () {
            !(Je & 6) && yr();
          }),
          (l = null);
      else {
        switch (kf(o)) {
          case 1:
            l = jr;
            break;
          case 4:
            l = Ke;
            break;
          case 16:
            l = $a;
            break;
          case 536870912:
            l = wf;
            break;
          default:
            l = $a;
        }
        l = oh(l, Oc.bind(null, n));
      }
      (n.callbackPriority = r), (n.callbackNode = l);
    }
  }
  function Oc(n, r) {
    if (((Xo = -1), (Al = 0), Je & 6)) throw Error(S(327));
    var l = n.callbackNode;
    if ($u() && n.callbackNode !== l) return null;
    var o = ka(n, n === Qt ? cn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Uc(n, o);
    else {
      r = o;
      var c = Je;
      Je |= 2;
      var d = nh();
      (Qt !== n || cn !== r) && ((gi = null), (Vu = pt() + 500), Fl(n, r));
      do
        try {
          Ly();
          break;
        } catch (C) {
          th(n, C);
        }
      while (!0);
      Pr(),
        (Ul.current = d),
        (Je = c),
        Ut !== null ? (r = 0) : ((Qt = null), (cn = 0), (r = fn));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((c = _f(n)), c !== 0 && ((o = c), (r = jl(n, c)))),
        r === 1)
      )
        throw ((l = Io), Fl(n, 0), Xa(n, o), dn(n, pt()), l);
      if (r === 6) Xa(n, o);
      else {
        if (
          ((c = n.current.alternate),
          !(o & 30) &&
            !Dd(c) &&
            ((r = Uc(n, o)),
            r === 2 && ((d = _f(n)), d !== 0 && ((o = d), (r = jl(n, d)))),
            r === 1))
        )
          throw ((l = Io), Fl(n, 0), Xa(n, o), dn(n, pt()), l);
        switch (((n.finishedWork = c), (n.finishedLanes = o), r)) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            Ki(n, Jn, gi);
            break;
          case 3:
            if (
              (Xa(n, o),
              (o & 130023424) === o && ((r = Dc + 500 - pt()), 10 < r))
            ) {
              if (ka(n, 0) !== 0) break;
              if (((c = n.suspendedLanes), (c & o) !== o)) {
                bn(), (n.pingedLanes |= n.suspendedLanes & c);
                break;
              }
              n.timeoutHandle = Cl(Ki.bind(null, n, Jn, gi), r);
              break;
            }
            Ki(n, Jn, gi);
            break;
          case 4:
            if ((Xa(n, o), (o & 4194240) === o)) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Zr(o);
              (d = 1 << m), (m = r[m]), m > c && (c = m), (o &= ~d);
            }
            if (
              ((o = c),
              (o = pt() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                    ? 480
                    : 1080 > o
                      ? 1080
                      : 1920 > o
                        ? 1920
                        : 3e3 > o
                          ? 3e3
                          : 4320 > o
                            ? 4320
                            : 1960 * Dy(o / 1960)) - o),
              10 < o)
            ) {
              n.timeoutHandle = Cl(Ki.bind(null, n, Jn, gi), o);
              break;
            }
            Ki(n, Jn, gi);
            break;
          case 5:
            Ki(n, Jn, gi);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return dn(n, pt()), n.callbackNode === l ? Oc.bind(null, n) : null;
  }
  function jl(n, r) {
    var l = Xi;
    return (
      n.current.memoizedState.isDehydrated && (Fl(n, r).flags |= 256),
      (n = Uc(n, r)),
      n !== 2 && ((r = Jn), (Jn = l), r !== null && _d(r)),
      n
    );
  }
  function _d(n) {
    Jn === null ? (Jn = n) : Jn.push.apply(Jn, n);
  }
  function Dd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && ((l = l.stores), l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o],
              d = c.getSnapshot;
            c = c.value;
            try {
              if (!na(d(), c)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((l = r.child), r.subtreeFlags & 16384 && l !== null))
        (l.return = r), (r = l);
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function Xa(n, r) {
    for (
      r &= ~wd,
        r &= ~Hu,
        n.suspendedLanes |= r,
        n.pingedLanes &= ~r,
        n = n.expirationTimes;
      0 < r;

    ) {
      var l = 31 - Zr(r),
        o = 1 << l;
      (n[l] = -1), (r &= ~o);
    }
  }
  function Pu(n) {
    if (Je & 6) throw Error(S(327));
    $u();
    var r = ka(n, 0);
    if (!(r & 1)) return dn(n, pt()), null;
    var l = Uc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = _f(n);
      o !== 0 && ((r = o), (l = jl(n, o)));
    }
    if (l === 1) throw ((l = Io), Fl(n, 0), Xa(n, r), dn(n, pt()), l);
    if (l === 6) throw Error(S(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = r),
      Ki(n, Jn, gi),
      dn(n, pt()),
      null
    );
  }
  function kd(n, r) {
    var l = Je;
    Je |= 1;
    try {
      return n(r);
    } finally {
      (Je = l), Je === 0 && ((Vu = pt() + 500), Rn && yr());
    }
  }
  function Ka(n) {
    va !== null && va.tag === 0 && !(Je & 6) && $u();
    var r = Je;
    Je |= 1;
    var l = da.transition,
      o = gt;
    try {
      if (((da.transition = null), (gt = 1), n)) return n();
    } finally {
      (gt = o), (da.transition = l), (Je = r), !(Je & 6) && yr();
    }
  }
  function Mc() {
    (wr = Fu.current), ft(Fu);
  }
  function Fl(n, r) {
    (n.finishedWork = null), (n.finishedLanes = 0);
    var l = n.timeoutHandle;
    if ((l !== -1 && ((n.timeoutHandle = -1), Dv(l)), Ut !== null))
      for (l = Ut.return; l !== null; ) {
        var o = l;
        switch ((ld(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && ia();
            break;
          case 3:
            Eu(), ft(Yt), ft(ze), pd();
            break;
          case 5:
            dd(o);
            break;
          case 4:
            Eu();
            break;
          case 13:
            ft(jt);
            break;
          case 19:
            ft(jt);
            break;
          case 10:
            sd(o.type._context);
            break;
          case 22:
          case 23:
            Mc();
        }
        l = l.return;
      }
    if (
      ((Qt = n),
      (Ut = n = qi(n.current, null)),
      (cn = wr = r),
      (fn = 0),
      (Io = null),
      (wd = Hu = zl = 0),
      (Jn = Xi = null),
      wl !== null)
    ) {
      for (r = 0; r < wl.length; r++)
        if (((l = wl[r]), (o = l.interleaved), o !== null)) {
          l.interleaved = null;
          var c = o.next,
            d = l.pending;
          if (d !== null) {
            var m = d.next;
            (d.next = c), (o.next = m);
          }
          l.pending = o;
        }
      wl = null;
    }
    return n;
  }
  function th(n, r) {
    do {
      var l = Ut;
      try {
        if ((Pr(), (nc.current = Kn), $r)) {
          for (var o = Ee.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), (o = o.next);
          }
          $r = !1;
        }
        if (
          ((ge = 0),
          (qe = Ae = Ee = null),
          (Cu = !1),
          (jo = 0),
          (_c.current = null),
          l === null || l.return === null)
        ) {
          (fn = 1), (Io = r), (Ut = null);
          break;
        }
        e: {
          var d = n,
            m = l.return,
            C = l,
            x = r;
          if (
            ((r = cn),
            (C.flags |= 32768),
            x !== null && typeof x == "object" && typeof x.then == "function")
          ) {
            var U = x,
              Q = C,
              G = Q.tag;
            if (!(Q.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var W = Q.alternate;
              W
                ? ((Q.updateQueue = W.updateQueue),
                  (Q.memoizedState = W.memoizedState),
                  (Q.lanes = W.lanes))
                : ((Q.updateQueue = null), (Q.memoizedState = null));
            }
            var se = Qv(m);
            if (se !== null) {
              (se.flags &= -257),
                gd(se, m, C, d, r),
                se.mode & 1 && Po(d, U, r),
                (r = se),
                (x = U);
              var ve = r.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(x), (r.updateQueue = ye);
              } else ve.add(x);
              break e;
            } else {
              if (!(r & 1)) {
                Po(d, U, r), Ko();
                break e;
              }
              x = Error(S(426));
            }
          } else if (Mt && C.mode & 1) {
            var Jt = Qv(m);
            if (Jt !== null) {
              !(Jt.flags & 65536) && (Jt.flags |= 256),
                gd(Jt, m, C, d, r),
                od(Ii(x, C));
              break e;
            }
          }
          (d = x = Ii(x, C)),
            fn !== 4 && (fn = 2),
            Xi === null ? (Xi = [d]) : Xi.push(d),
            (d = m);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (r &= -r), (d.lanes |= r);
                var k = Yv(d, x, r);
                Av(d, k);
                break e;
              case 1:
                C = x;
                var b = d.type,
                  O = d.stateNode;
                if (
                  !(d.flags & 128) &&
                  (typeof b.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (pa === null || !pa.has(O))))
                ) {
                  (d.flags |= 65536), (r &= -r), (d.lanes |= r);
                  var q = Wv(d, C, r);
                  Av(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (Se) {
        (r = Se), Ut === l && l !== null && (Ut = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = Ul.current;
    return (Ul.current = Kn), n === null ? Kn : n;
  }
  function Ko() {
    (fn === 0 || fn === 3 || fn === 2) && (fn = 4),
      Qt === null || (!(zl & 268435455) && !(Hu & 268435455)) || Xa(Qt, cn);
  }
  function Uc(n, r) {
    var l = Je;
    Je |= 2;
    var o = nh();
    (Qt !== n || cn !== r) && ((gi = null), Fl(n, r));
    do
      try {
        ky();
        break;
      } catch (c) {
        th(n, c);
      }
    while (!0);
    if ((Pr(), (Je = l), (Ul.current = o), Ut !== null)) throw Error(S(261));
    return (Qt = null), (cn = 0), fn;
  }
  function ky() {
    for (; Ut !== null; ) rh(Ut);
  }
  function Ly() {
    for (; Ut !== null && !vr(); ) rh(Ut);
  }
  function rh(n) {
    var r = uh(n.alternate, n, wr);
    (n.memoizedProps = n.pendingProps),
      r === null ? ah(n) : (Ut = r),
      (_c.current = null);
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (((n = r.return), r.flags & 32768)) {
        if (((l = wy(l, r)), l !== null)) {
          (l.flags &= 32767), (Ut = l);
          return;
        }
        if (n !== null)
          (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
        else {
          (fn = 6), (Ut = null);
          return;
        }
      } else if (((l = xy(l, r, wr)), l !== null)) {
        Ut = l;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Ut = r;
        return;
      }
      Ut = r = n;
    } while (r !== null);
    fn === 0 && (fn = 5);
  }
  function Ki(n, r, l) {
    var o = gt,
      c = da.transition;
    try {
      (da.transition = null), (gt = 1), Ny(n, r, l, o);
    } finally {
      (da.transition = c), (gt = o);
    }
    return null;
  }
  function Ny(n, r, l, o) {
    do $u();
    while (va !== null);
    if (Je & 6) throw Error(S(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), l === n.current))
      throw Error(S(177));
    (n.callbackNode = null), (n.callbackPriority = 0);
    var d = l.lanes | l.childLanes;
    if (
      (ny(n, d),
      n === Qt && ((Ut = Qt = null), (cn = 0)),
      (!(l.subtreeFlags & 2064) && !(l.flags & 2064)) ||
        Bu ||
        ((Bu = !0),
        oh($a, function () {
          return $u(), null;
        })),
      (d = (l.flags & 15990) !== 0),
      l.subtreeFlags & 15990 || d)
    ) {
      (d = da.transition), (da.transition = null);
      var m = gt;
      gt = 1;
      var C = Je;
      (Je |= 4),
        (_c.current = null),
        by(n, l),
        Zv(l, n),
        Fs(El),
        (hl = !!Jf),
        (El = Jf = null),
        (n.current = l),
        _y(l),
        Ui(),
        (Je = C),
        (gt = m),
        (da.transition = d);
    } else n.current = l;
    if (
      (Bu && ((Bu = !1), (va = n), (Lc = c)),
      (d = n.pendingLanes),
      d === 0 && (pa = null),
      Pp(l.stateNode),
      dn(n, pt()),
      r !== null)
    )
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        (c = r[l]), o(c.value, { componentStack: c.stack, digest: c.digest });
    if (kc) throw ((kc = !1), (n = bd), (bd = null), n);
    return (
      Lc & 1 && n.tag !== 0 && $u(),
      (d = n.pendingLanes),
      d & 1 ? (n === Nc ? Go++ : ((Go = 0), (Nc = n))) : (Go = 0),
      yr(),
      null
    );
  }
  function $u() {
    if (va !== null) {
      var n = kf(Lc),
        r = da.transition,
        l = gt;
      try {
        if (((da.transition = null), (gt = 16 > n ? 16 : n), va === null))
          var o = !1;
        else {
          if (((n = va), (va = null), (Lc = 0), Je & 6)) throw Error(S(331));
          var c = Je;
          for (Je |= 4, pe = n.current; pe !== null; ) {
            var d = pe,
              m = d.child;
            if (pe.flags & 16) {
              var C = d.deletions;
              if (C !== null) {
                for (var x = 0; x < C.length; x++) {
                  var U = C[x];
                  for (pe = U; pe !== null; ) {
                    var Q = pe;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mu(8, Q, d);
                    }
                    var G = Q.child;
                    if (G !== null) (G.return = Q), (pe = G);
                    else
                      for (; pe !== null; ) {
                        Q = pe;
                        var W = Q.sibling,
                          se = Q.return;
                        if ((qv(Q), Q === U)) {
                          pe = null;
                          break;
                        }
                        if (W !== null) {
                          (W.return = se), (pe = W);
                          break;
                        }
                        pe = se;
                      }
                  }
                }
                var ve = d.alternate;
                if (ve !== null) {
                  var ye = ve.child;
                  if (ye !== null) {
                    ve.child = null;
                    do {
                      var Jt = ye.sibling;
                      (ye.sibling = null), (ye = Jt);
                    } while (ye !== null);
                  }
                }
                pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) (m.return = d), (pe = m);
            else
              e: for (; pe !== null; ) {
                if (((d = pe), d.flags & 2048))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mu(9, d, d.return);
                  }
                var k = d.sibling;
                if (k !== null) {
                  (k.return = d.return), (pe = k);
                  break e;
                }
                pe = d.return;
              }
          }
          var b = n.current;
          for (pe = b; pe !== null; ) {
            m = pe;
            var O = m.child;
            if (m.subtreeFlags & 2064 && O !== null) (O.return = m), (pe = O);
            else
              e: for (m = b; pe !== null; ) {
                if (((C = pe), C.flags & 2048))
                  try {
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wc(9, C);
                    }
                  } catch (Se) {
                    It(C, C.return, Se);
                  }
                if (C === m) {
                  pe = null;
                  break e;
                }
                var q = C.sibling;
                if (q !== null) {
                  (q.return = C.return), (pe = q);
                  break e;
                }
                pe = C.return;
              }
          }
          if (
            ((Je = c),
            yr(),
            Da && typeof Da.onPostCommitFiberRoot == "function")
          )
            try {
              Da.onPostCommitFiberRoot(so, n);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (gt = l), (da.transition = r);
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    (r = Ii(l, r)),
      (r = Yv(n, r, 1)),
      (n = Wi(n, r, 1)),
      (r = bn()),
      n !== null && (vl(n, 1, r), dn(n, r));
  }
  function It(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          ih(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (pa === null || !pa.has(o)))
          ) {
            (n = Ii(l, n)),
              (n = Wv(r, n, 1)),
              (r = Wi(r, n, 1)),
              (n = bn()),
              r !== null && (vl(r, 1, n), dn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Oy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r),
      (r = bn()),
      (n.pingedLanes |= n.suspendedLanes & l),
      Qt === n &&
        (cn & l) === l &&
        (fn === 4 || (fn === 3 && (cn & 130023424) === cn && 500 > pt() - Dc)
          ? Fl(n, 0)
          : (wd |= l)),
      dn(n, r);
  }
  function lh(n, r) {
    r === 0 &&
      (n.mode & 1
        ? ((r = ru), (ru <<= 1), !(ru & 130023424) && (ru = 4194304))
        : (r = 1));
    var l = bn();
    (n = hi(n, r)), n !== null && (vl(n, r, l), dn(n, l));
  }
  function Ld(n) {
    var r = n.memoizedState,
      l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function My(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode,
          c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var uh;
  uh = function (n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Yt.current) Rr = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128)) return (Rr = !1), yi(n, r, l);
        Rr = !!(n.flags & 131072);
      }
    else (Rr = !1), Mt && r.flags & 1048576 && id(r, hu, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var o = r.type;
        Wo(n, r), (n = r.pendingProps);
        var c = aa(r, ze.current);
        yu(r, l), (c = Y(null, r, o, n, c, l));
        var d = an();
        return (
          (r.flags |= 1),
          typeof c == "object" &&
          c !== null &&
          typeof c.render == "function" &&
          c.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              At(o) ? ((d = !0), Ys(r)) : (d = !1),
              (r.memoizedState =
                c.state !== null && c.state !== void 0 ? c.state : null),
              qs(r),
              (c.updater = Nl),
              (r.stateNode = c),
              (c._reactInternals = r),
              md(r, o, n, l),
              (r = Sc(null, r, o, !0, d, l)))
            : ((r.tag = 0), Mt && d && Ws(r), Kt(null, r, c, l), (r = r.child)),
          r
        );
      case 16:
        o = r.elementType;
        e: {
          switch (
            (Wo(n, r),
            (n = r.pendingProps),
            (c = o._init),
            (o = c(o._payload)),
            (r.type = o),
            (c = r.tag = Uy(o)),
            (n = Tr(o, n)),
            c)
          ) {
            case 0:
              r = Pe(null, r, o, n, l);
              break e;
            case 1:
              r = $o(null, r, o, n, l);
              break e;
            case 11:
              r = Du(null, r, o, n, l);
              break e;
            case 14:
              r = Gi(null, r, o, Tr(o.type, n), l);
              break e;
          }
          throw Error(S(306, o, ""));
        }
        return r;
      case 0:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Tr(o, c)),
          Pe(n, r, o, c, l)
        );
      case 1:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Tr(o, c)),
          $o(n, r, o, c, l)
        );
      case 3:
        e: {
          if ((Ry(r), n === null)) throw Error(S(387));
          (o = r.pendingProps),
            (d = r.memoizedState),
            (c = d.element),
            gu(n, r),
            Zs(r, o, null, l);
          var m = r.memoizedState;
          if (((o = m.element), d.isDehydrated))
            if (
              ((d = {
                element: o,
                isDehydrated: !1,
                cache: m.cache,
                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                transitions: m.transitions,
              }),
              (r.updateQueue.baseState = d),
              (r.memoizedState = d),
              r.flags & 256)
            ) {
              (c = Ii(Error(S(423)), r)), (r = Gv(n, r, o, l, c));
              break e;
            } else if (o !== c) {
              (c = Ii(Error(S(424)), r)), (r = Gv(n, r, o, l, c));
              break e;
            } else
              for (
                Er = Ma(r.stateNode.containerInfo.firstChild),
                  Br = r,
                  Mt = !0,
                  ua = null,
                  l = Uv(r, null, o, l),
                  r.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Bt(), o === c)) {
              r = qt(n, r, l);
              break e;
            }
            Kt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          Fv(r),
          n === null && Is(r),
          (o = r.type),
          (c = r.pendingProps),
          (d = n !== null ? n.memoizedProps : null),
          (m = c.children),
          ko(o, c) ? (m = null) : d !== null && ko(o, d) && (r.flags |= 32),
          Ol(n, r),
          Kt(n, r, m, l),
          r.child
        );
      case 6:
        return n === null && Is(r), null;
      case 13:
        return Xv(n, r, l);
      case 4:
        return (
          fd(r, r.stateNode.containerInfo),
          (o = r.pendingProps),
          n === null ? (r.child = mu(r, null, o, l)) : Kt(n, r, o, l),
          r.child
        );
      case 11:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Tr(o, c)),
          Du(n, r, o, c, l)
        );
      case 7:
        return Kt(n, r, r.pendingProps, l), r.child;
      case 8:
        return Kt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Kt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (
            ((o = r.type._context),
            (c = r.pendingProps),
            (d = r.memoizedProps),
            (m = c.value),
            vt(vi, o._currentValue),
            (o._currentValue = m),
            d !== null)
          )
            if (na(d.value, m)) {
              if (d.children === c.children && !Yt.current) {
                r = qt(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var C = d.dependencies;
                if (C !== null) {
                  m = d.child;
                  for (var x = C.firstContext; x !== null; ) {
                    if (x.context === o) {
                      if (d.tag === 1) {
                        (x = Cr(-1, l & -l)), (x.tag = 2);
                        var U = d.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var Q = U.pending;
                          Q === null
                            ? (x.next = x)
                            : ((x.next = Q.next), (Q.next = x)),
                            (U.pending = x);
                        }
                      }
                      (d.lanes |= l),
                        (x = d.alternate),
                        x !== null && (x.lanes |= l),
                        cd(d.return, l, r),
                        (C.lanes |= l);
                      break;
                    }
                    x = x.next;
                  }
                } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((m = d.return), m === null)) throw Error(S(341));
                  (m.lanes |= l),
                    (C = m.alternate),
                    C !== null && (C.lanes |= l),
                    cd(m, l, r),
                    (m = d.sibling);
                } else m = d.child;
                if (m !== null) m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (((d = m.sibling), d !== null)) {
                      (d.return = m.return), (m = d);
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Kt(n, r, c.children, l), (r = r.child);
        }
        return r;
      case 9:
        return (
          (c = r.type),
          (o = r.pendingProps.children),
          yu(r, l),
          (c = sa(c)),
          (o = o(c)),
          (r.flags |= 1),
          Kt(n, r, o, l),
          r.child
        );
      case 14:
        return (
          (o = r.type),
          (c = Tr(o, r.pendingProps)),
          (c = Tr(o.type, c)),
          Gi(n, r, o, c, l)
        );
      case 15:
        return gc(n, r, r.type, r.pendingProps, l);
      case 17:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Tr(o, c)),
          Wo(n, r),
          (r.tag = 1),
          At(o) ? ((n = !0), Ys(r)) : (n = !1),
          yu(r, l),
          Bv(r, o, c),
          md(r, o, c, l),
          Sc(null, r, o, !0, n, l)
        );
      case 19:
        return Ed(n, r, l);
      case 22:
        return xr(n, r, l);
    }
    throw Error(S(156, r.tag));
  };
  function oh(n, r) {
    return Nt(n, r);
  }
  function sh(n, r, l, o) {
    (this.tag = n),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ha(n, r, l, o) {
    return new sh(n, r, l, o);
  }
  function Nd(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function Uy(n) {
    if (typeof n == "function") return Nd(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === Dn)) return 11;
      if (n === yn) return 14;
    }
    return 2;
  }
  function qi(n, r) {
    var l = n.alternate;
    return (
      l === null
        ? ((l = ha(n.tag, r, n.key, n.mode)),
          (l.elementType = n.elementType),
          (l.type = n.type),
          (l.stateNode = n.stateNode),
          (l.alternate = n),
          (n.alternate = l))
        : ((l.pendingProps = r),
          (l.type = n.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = n.flags & 14680064),
      (l.childLanes = n.childLanes),
      (l.lanes = n.lanes),
      (l.child = n.child),
      (l.memoizedProps = n.memoizedProps),
      (l.memoizedState = n.memoizedState),
      (l.updateQueue = n.updateQueue),
      (r = n.dependencies),
      (l.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (l.sibling = n.sibling),
      (l.index = n.index),
      (l.ref = n.ref),
      l
    );
  }
  function zc(n, r, l, o, c, d) {
    var m = 2;
    if (((o = n), typeof n == "function")) Nd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else
      e: switch (n) {
        case $e:
          return Hl(l.children, c, d, r);
        case Gt:
          (m = 8), (c |= 8);
          break;
        case mn:
          return (
            (n = ha(12, l, r, c | 2)), (n.elementType = mn), (n.lanes = d), n
          );
        case Fe:
          return (n = ha(13, l, r, c)), (n.elementType = Fe), (n.lanes = d), n;
        case et:
          return (n = ha(19, l, r, c)), (n.elementType = et), (n.lanes = d), n;
        case Zn:
          return Ac(l, c, d, r);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case wt:
                m = 10;
                break e;
              case dt:
                m = 9;
                break e;
              case Dn:
                m = 11;
                break e;
              case yn:
                m = 14;
                break e;
              case Lt:
                (m = 16), (o = null);
                break e;
            }
          throw Error(S(130, n == null ? n : typeof n, ""));
      }
    return (
      (r = ha(m, l, r, c)), (r.elementType = n), (r.type = o), (r.lanes = d), r
    );
  }
  function Hl(n, r, l, o) {
    return (n = ha(7, n, o, r)), (n.lanes = l), n;
  }
  function Ac(n, r, l, o) {
    return (
      (n = ha(22, n, o, r)),
      (n.elementType = Zn),
      (n.lanes = l),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function jc(n, r, l) {
    return (n = ha(6, n, null, r)), (n.lanes = l), n;
  }
  function qo(n, r, l) {
    return (
      (r = ha(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = l),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  function Jo(n, r, l, o, c) {
    (this.tag = r),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Df(0)),
      (this.expirationTimes = Df(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Df(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Od(n, r, l, o, c, d, m, C, x) {
    return (
      (n = new Jo(n, r, l, C, x)),
      r === 1 ? ((r = 1), d === !0 && (r |= 8)) : (r = 0),
      (d = ha(3, null, null, r)),
      (n.current = d),
      (d.stateNode = n),
      (d.memoizedState = {
        element: o,
        isDehydrated: l,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      qs(d),
      n
    );
  }
  function ch(n, r, l) {
    var o =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: mt,
      key: o == null ? null : "" + o,
      children: n,
      containerInfo: r,
      implementation: l,
    };
  }
  function Md(n) {
    if (!n) return Wa;
    n = n._reactInternals;
    e: {
      if (Te(n) !== n || n.tag !== 1) throw Error(S(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (At(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(S(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (At(l)) return Oo(n, l, r);
    }
    return r;
  }
  function Ud(n, r, l, o, c, d, m, C, x) {
    return (
      (n = Od(l, o, !0, n, c, d, m, C, x)),
      (n.context = Md(null)),
      (l = n.current),
      (o = bn()),
      (c = Si(l)),
      (d = Cr(o, c)),
      (d.callback = r ?? null),
      Wi(l, d, c),
      (n.current.lanes = c),
      vl(n, c, o),
      dn(n, o),
      n
    );
  }
  function Fc(n, r, l, o) {
    var c = r.current,
      d = bn(),
      m = Si(c);
    return (
      (l = Md(l)),
      r.context === null ? (r.context = l) : (r.pendingContext = l),
      (r = Cr(d, m)),
      (r.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (r.callback = o),
      (n = Wi(c, r, m)),
      n !== null && (Pt(n, c, m, d), Js(n, c, m)),
      m
    );
  }
  function Zo(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function fh(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function zd(n, r) {
    fh(n, r), (n = n.alternate) && fh(n, r);
  }
  function zy() {
    return null;
  }
  var Ad =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function Hc(n) {
    this._internalRoot = n;
  }
  (es.prototype.render = Hc.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(S(409));
      Fc(n, r, null, null);
    }),
    (es.prototype.unmount = Hc.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          Ka(function () {
            Fc(null, n, null, null);
          }),
            (r[di] = null);
        }
      });
  function es(n) {
    this._internalRoot = n;
  }
  es.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = Qp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Et.length && r !== 0 && r < Et[l].priority; l++);
      Et.splice(l, 0, n), l === 0 && Ip(n);
    }
  };
  function Ji(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function Vc(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function dh() {}
  function Ay(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function () {
          var U = Zo(m);
          d.call(U);
        };
      }
      var m = Ud(r, o, n, 0, null, !1, !1, "", dh);
      return (
        (n._reactRootContainer = m),
        (n[di] = m.current),
        pu(n.nodeType === 8 ? n.parentNode : n),
        Ka(),
        m
      );
    }
    for (; (c = n.lastChild); ) n.removeChild(c);
    if (typeof o == "function") {
      var C = o;
      o = function () {
        var U = Zo(x);
        C.call(U);
      };
    }
    var x = Od(n, 0, !1, null, null, !1, !1, "", dh);
    return (
      (n._reactRootContainer = x),
      (n[di] = x.current),
      pu(n.nodeType === 8 ? n.parentNode : n),
      Ka(function () {
        Fc(r, x, l, o);
      }),
      x
    );
  }
  function Bc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var C = c;
        c = function () {
          var x = Zo(m);
          C.call(x);
        };
      }
      Fc(r, m, n, c);
    } else m = Ay(l, r, n, c, o);
    return Zo(m);
  }
  (Wp = function (n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = pl(r.pendingLanes);
          l !== 0 &&
            (co(r, l | 1), dn(r, pt()), !(Je & 6) && ((Vu = pt() + 500), yr()));
        }
        break;
      case 13:
        Ka(function () {
          var o = hi(n, 1);
          if (o !== null) {
            var c = bn();
            Pt(o, n, 1, c);
          }
        }),
          zd(n, 1);
    }
  }),
    (bs = function (n) {
      if (n.tag === 13) {
        var r = hi(n, 134217728);
        if (r !== null) {
          var l = bn();
          Pt(r, n, 134217728, l);
        }
        zd(n, 134217728);
      }
    }),
    (St = function (n) {
      if (n.tag === 13) {
        var r = Si(n),
          l = hi(n, r);
        if (l !== null) {
          var o = bn();
          Pt(l, n, r, o);
        }
        zd(n, r);
      }
    }),
    (Qp = function () {
      return gt;
    }),
    (Lf = function (n, r) {
      var l = gt;
      try {
        return (gt = n), r();
      } finally {
        gt = l;
      }
    }),
    (zr = function (n, r, l) {
      switch (r) {
        case "input":
          if ((Wn(n, l), (r = l.name), l.type === "radio" && r != null)) {
            for (l = n; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                "input[name=" + JSON.stringify("" + r) + '][type="radio"]',
              ),
                r = 0;
              r < l.length;
              r++
            ) {
              var o = l[r];
              if (o !== n && o.form === n.form) {
                var c = be(o);
                if (!c) throw Error(S(90));
                qr(o), Wn(o, c);
              }
            }
          }
          break;
        case "textarea":
          Ba(n, l);
          break;
        case "select":
          (r = l.value), r != null && Va(n, !!l.multiple, r, !1);
      }
    }),
    (oo = kd),
    (Ts = Ka);
  var jy = { usingClientEntryPoint: !1, Events: [No, vu, be, sl, eu, kd] },
    ts = {
      findFiberByHostInstance: ra,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    ph = {
      bundleType: ts.bundleType,
      version: ts.version,
      rendererPackageName: ts.rendererPackageName,
      rendererConfig: ts.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: je.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return (n = Xe(n)), n === null ? null : n.stateNode;
      },
      findFiberByHostInstance: ts.findFiberByHostInstance || zy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pc.isDisabled && Pc.supportsFiber)
      try {
        (so = Pc.inject(ph)), (Da = Pc);
      } catch {}
  }
  return (
    (Ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jy),
    (Ca.createPortal = function (n, r) {
      var l =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ji(r)) throw Error(S(200));
      return ch(n, r, null, l);
    }),
    (Ca.createRoot = function (n, r) {
      if (!Ji(n)) throw Error(S(299));
      var l = !1,
        o = "",
        c = Ad;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (c = r.onRecoverableError)),
        (r = Od(n, 1, !1, null, null, l, !1, o, c)),
        (n[di] = r.current),
        pu(n.nodeType === 8 ? n.parentNode : n),
        new Hc(r)
      );
    }),
    (Ca.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == "function"
          ? Error(S(188))
          : ((n = Object.keys(n).join(",")), Error(S(268, n)));
      return (n = Xe(r)), (n = n === null ? null : n.stateNode), n;
    }),
    (Ca.flushSync = function (n) {
      return Ka(n);
    }),
    (Ca.hydrate = function (n, r, l) {
      if (!Vc(r)) throw Error(S(200));
      return Bc(null, n, r, !0, l);
    }),
    (Ca.hydrateRoot = function (n, r, l) {
      if (!Ji(n)) throw Error(S(405));
      var o = (l != null && l.hydratedSources) || null,
        c = !1,
        d = "",
        m = Ad;
      if (
        (l != null &&
          (l.unstable_strictMode === !0 && (c = !0),
          l.identifierPrefix !== void 0 && (d = l.identifierPrefix),
          l.onRecoverableError !== void 0 && (m = l.onRecoverableError)),
        (r = Ud(r, null, n, 1, l ?? null, c, !1, d, m)),
        (n[di] = r.current),
        pu(n),
        o)
      )
        for (n = 0; n < o.length; n++)
          (l = o[n]),
            (c = l._getVersion),
            (c = c(l._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [l, c])
              : r.mutableSourceEagerHydrationData.push(l, c);
      return new es(r);
    }),
    (Ca.render = function (n, r, l) {
      if (!Vc(r)) throw Error(S(200));
      return Bc(null, n, r, !1, l);
    }),
    (Ca.unmountComponentAtNode = function (n) {
      if (!Vc(n)) throw Error(S(40));
      return n._reactRootContainer
        ? (Ka(function () {
            Bc(null, null, n, !1, function () {
              (n._reactRootContainer = null), (n[di] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ca.unstable_batchedUpdates = kd),
    (Ca.unstable_renderSubtreeIntoContainer = function (n, r, l, o) {
      if (!Vc(l)) throw Error(S(200));
      if (n == null || n._reactInternals === void 0) throw Error(S(38));
      return Bc(n, r, l, !1, o);
    }),
    (Ca.version = "18.3.1-next-f1338f8080-20240426"),
    Ca
  );
}
var Ta = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var MT;
function dk() {
  return (
    MT ||
      ((MT = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
              new Error(),
            );
          var v = Km,
            T = $T(),
            S = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            D = !1;
          function A(e) {
            D = e;
          }
          function F(e) {
            if (!D) {
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                a[i - 1] = arguments[i];
              K("warn", e, a);
            }
          }
          function y(e) {
            if (!D) {
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                a[i - 1] = arguments[i];
              K("error", e, a);
            }
          }
          function K(e, t, a) {
            {
              var i = S.ReactDebugCurrentFrame,
                u = i.getStackAddendum();
              u !== "" && ((t += "%s"), (a = a.concat([u])));
              var s = a.map(function (f) {
                return String(f);
              });
              s.unshift("Warning: " + t),
                Function.prototype.apply.call(console[e], console, s);
            }
          }
          var P = 0,
            j = 1,
            Z = 2,
            $ = 3,
            J = 4,
            oe = 5,
            _e = 6,
            Ie = 7,
            at = 8,
            kt = 9,
            ke = 10,
            xe = 11,
            je = 12,
            We = 13,
            mt = 14,
            $e = 15,
            Gt = 16,
            mn = 17,
            wt = 18,
            dt = 19,
            Dn = 21,
            Fe = 22,
            et = 23,
            yn = 24,
            Lt = 25,
            Zn = !0,
            ee = !1,
            Le = !1,
            fe = !1,
            lt = !1,
            ct = !0,
            kn = !1,
            er = !0,
            Fa = !0,
            un = !0,
            Kr = !0,
            $n = /* @__PURE__ */ new Set(),
            fr = {},
            Ha = {};
          function dr(e, t) {
            qr(e, t), qr(e + "Capture", t);
          }
          function qr(e, t) {
            fr[e] &&
              y(
                "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
                e,
              ),
              (fr[e] = t);
            {
              var a = e.toLowerCase();
              (Ha[a] = e), e === "onDoubleClick" && (Ha.ondblclick = e);
            }
            for (var i = 0; i < t.length; i++) $n.add(t[i]);
          }
          var gn =
              typeof window < "u" &&
              typeof window.document < "u" &&
              typeof window.document.createElement < "u",
            Yn = Object.prototype.hasOwnProperty;
          function Ln(e) {
            {
              var t = typeof Symbol == "function" && Symbol.toStringTag,
                a =
                  (t && e[Symbol.toStringTag]) ||
                  e.constructor.name ||
                  "Object";
              return a;
            }
          }
          function Nn(e) {
            try {
              return Wn(e), !1;
            } catch {
              return !0;
            }
          }
          function Wn(e) {
            return "" + e;
          }
          function Jr(e, t) {
            if (Nn(e))
              return (
                y(
                  "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  t,
                  Ln(e),
                ),
                Wn(e)
              );
          }
          function Ra(e) {
            if (Nn(e))
              return (
                y(
                  "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  Ln(e),
                ),
                Wn(e)
              );
          }
          function ai(e, t) {
            if (Nn(e))
              return (
                y(
                  "The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  t,
                  Ln(e),
                ),
                Wn(e)
              );
          }
          function Va(e, t) {
            if (Nn(e))
              return (
                y(
                  "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  t,
                  Ln(e),
                ),
                Wn(e)
              );
          }
          function xa(e) {
            if (Nn(e))
              return (
                y(
                  "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
                  Ln(e),
                ),
                Wn(e)
              );
          }
          function Or(e) {
            if (Nn(e))
              return (
                y(
                  "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",
                  Ln(e),
                ),
                Wn(e)
              );
          }
          var Ba = 0,
            Mr = 1,
            wa = 2,
            en = 3,
            Ur = 4,
            Oi = 5,
            ba = 6,
            ie =
              ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            we = ie + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
            Ge = new RegExp("^[" + ie + "][" + we + "]*$"),
            yt = {},
            Ht = {};
          function Sn(e) {
            return Yn.call(Ht, e)
              ? !0
              : Yn.call(yt, e)
                ? !1
                : Ge.test(e)
                  ? ((Ht[e] = !0), !0)
                  : ((yt[e] = !0), y("Invalid attribute name: `%s`", e), !1);
          }
          function Xt(e, t, a) {
            return t !== null
              ? t.type === Ba
              : a
                ? !1
                : e.length > 2 &&
                  (e[0] === "o" || e[0] === "O") &&
                  (e[1] === "n" || e[1] === "N");
          }
          function pr(e, t, a, i) {
            if (a !== null && a.type === Ba) return !1;
            switch (typeof t) {
              case "function":
              case "symbol":
                return !0;
              case "boolean": {
                if (i) return !1;
                if (a !== null) return !a.acceptsBooleans;
                var u = e.toLowerCase().slice(0, 5);
                return u !== "data-" && u !== "aria-";
              }
              default:
                return !1;
            }
          }
          function bt(e, t, a, i) {
            if (t === null || typeof t > "u" || pr(e, t, a, i)) return !0;
            if (i) return !1;
            if (a !== null)
              switch (a.type) {
                case en:
                  return !t;
                case Ur:
                  return t === !1;
                case Oi:
                  return isNaN(t);
                case ba:
                  return isNaN(t) || t < 1;
              }
            return !1;
          }
          function zr(e) {
            return _t.hasOwnProperty(e) ? _t[e] : null;
          }
          function Rt(e, t, a, i, u, s, f) {
            (this.acceptsBooleans = t === wa || t === en || t === Ur),
              (this.attributeName = i),
              (this.attributeNamespace = u),
              (this.mustUseProperty = a),
              (this.propertyName = e),
              (this.type = t),
              (this.sanitizeURL = s),
              (this.removeEmptyString = f);
          }
          var _t = {},
            Zl = [
              "children",
              "dangerouslySetInnerHTML",
              // TODO: This prevents the assignment of defaultValue to regular
              // elements (not just inputs). Now that ReactDOMInput assigns to the
              // defaultValue property -- do we need this?
              "defaultValue",
              "defaultChecked",
              "innerHTML",
              "suppressContentEditableWarning",
              "suppressHydrationWarning",
              "style",
            ];
          Zl.forEach(function (e) {
            _t[e] = new Rt(
              e,
              Ba,
              !1,
              // mustUseProperty
              e,
              // attributeName
              null,
              // attributeNamespace
              !1,
              // sanitizeURL
              !1,
            );
          }),
            [
              ["acceptCharset", "accept-charset"],
              ["className", "class"],
              ["htmlFor", "for"],
              ["httpEquiv", "http-equiv"],
            ].forEach(function (e) {
              var t = e[0],
                a = e[1];
              _t[t] = new Rt(
                t,
                Mr,
                !1,
                // mustUseProperty
                a,
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(
              function (e) {
                _t[e] = new Rt(
                  e,
                  wa,
                  !1,
                  // mustUseProperty
                  e.toLowerCase(),
                  // attributeName
                  null,
                  // attributeNamespace
                  !1,
                  // sanitizeURL
                  !1,
                );
              },
            ),
            [
              "autoReverse",
              "externalResourcesRequired",
              "focusable",
              "preserveAlpha",
            ].forEach(function (e) {
              _t[e] = new Rt(
                e,
                wa,
                !1,
                // mustUseProperty
                e,
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            }),
            [
              "allowFullScreen",
              "async",
              // Note: there is a special case that prevents it from being written to the DOM
              // on the client side because the browsers are inconsistent. Instead we call focus().
              "autoFocus",
              "autoPlay",
              "controls",
              "default",
              "defer",
              "disabled",
              "disablePictureInPicture",
              "disableRemotePlayback",
              "formNoValidate",
              "hidden",
              "loop",
              "noModule",
              "noValidate",
              "open",
              "playsInline",
              "readOnly",
              "required",
              "reversed",
              "scoped",
              "seamless",
              // Microdata
              "itemScope",
            ].forEach(function (e) {
              _t[e] = new Rt(
                e,
                en,
                !1,
                // mustUseProperty
                e.toLowerCase(),
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            }),
            [
              "checked",
              // Note: `option.selected` is not updated if `select.multiple` is
              // disabled with `removeAttribute`. We have special logic for handling this.
              "multiple",
              "muted",
              "selected",
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              _t[e] = new Rt(
                e,
                en,
                !0,
                // mustUseProperty
                e,
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            }),
            [
              "capture",
              "download",
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              _t[e] = new Rt(
                e,
                Ur,
                !1,
                // mustUseProperty
                e,
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            }),
            [
              "cols",
              "rows",
              "size",
              "span",
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              _t[e] = new Rt(
                e,
                ba,
                !1,
                // mustUseProperty
                e,
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            }),
            ["rowSpan", "start"].forEach(function (e) {
              _t[e] = new Rt(
                e,
                Oi,
                !1,
                // mustUseProperty
                e.toLowerCase(),
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            });
          var sl = /[\-\:]([a-z])/g,
            eu = function (e) {
              return e[1].toUpperCase();
            };
          [
            "accent-height",
            "alignment-baseline",
            "arabic-form",
            "baseline-shift",
            "cap-height",
            "clip-path",
            "clip-rule",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "dominant-baseline",
            "enable-background",
            "fill-opacity",
            "fill-rule",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "glyph-name",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "horiz-adv-x",
            "horiz-origin-x",
            "image-rendering",
            "letter-spacing",
            "lighting-color",
            "marker-end",
            "marker-mid",
            "marker-start",
            "overline-position",
            "overline-thickness",
            "paint-order",
            "panose-1",
            "pointer-events",
            "rendering-intent",
            "shape-rendering",
            "stop-color",
            "stop-opacity",
            "strikethrough-position",
            "strikethrough-thickness",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "underline-position",
            "underline-thickness",
            "unicode-bidi",
            "unicode-range",
            "units-per-em",
            "v-alphabetic",
            "v-hanging",
            "v-ideographic",
            "v-mathematical",
            "vector-effect",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "word-spacing",
            "writing-mode",
            "xmlns:xlink",
            "x-height",
            // NOTE: if you add a camelCased prop to this list,
            // you'll need to set attributeName to name.toLowerCase()
            // instead in the assignment below.
          ].forEach(function (e) {
            var t = e.replace(sl, eu);
            _t[t] = new Rt(
              t,
              Mr,
              !1,
              // mustUseProperty
              e,
              null,
              // attributeNamespace
              !1,
              // sanitizeURL
              !1,
            );
          }),
            [
              "xlink:actuate",
              "xlink:arcrole",
              "xlink:role",
              "xlink:show",
              "xlink:title",
              "xlink:type",
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              var t = e.replace(sl, eu);
              _t[t] = new Rt(
                t,
                Mr,
                !1,
                // mustUseProperty
                e,
                "http://www.w3.org/1999/xlink",
                !1,
                // sanitizeURL
                !1,
              );
            }),
            [
              "xml:base",
              "xml:lang",
              "xml:space",
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              var t = e.replace(sl, eu);
              _t[t] = new Rt(
                t,
                Mr,
                !1,
                // mustUseProperty
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                // sanitizeURL
                !1,
              );
            }),
            ["tabIndex", "crossOrigin"].forEach(function (e) {
              _t[e] = new Rt(
                e,
                Mr,
                !1,
                // mustUseProperty
                e.toLowerCase(),
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1,
              );
            });
          var oo = "xlinkHref";
          (_t[oo] = new Rt(
            "xlinkHref",
            Mr,
            !1,
            // mustUseProperty
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            // sanitizeURL
            !1,
          )),
            ["src", "href", "action", "formAction"].forEach(function (e) {
              _t[e] = new Rt(
                e,
                Mr,
                !1,
                // mustUseProperty
                e.toLowerCase(),
                // attributeName
                null,
                // attributeNamespace
                !0,
                // sanitizeURL
                !0,
              );
            });
          var Ts =
              /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
            cl = !1;
          function tu(e) {
            !cl &&
              Ts.test(e) &&
              ((cl = !0),
              y(
                "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
                JSON.stringify(e),
              ));
          }
          function fl(e, t, a, i) {
            if (i.mustUseProperty) {
              var u = i.propertyName;
              return e[u];
            } else {
              Jr(a, t), i.sanitizeURL && tu("" + a);
              var s = i.attributeName,
                f = null;
              if (i.type === Ur) {
                if (e.hasAttribute(s)) {
                  var p = e.getAttribute(s);
                  return p === ""
                    ? !0
                    : bt(t, a, i, !1)
                      ? p
                      : p === "" + a
                        ? a
                        : p;
                }
              } else if (e.hasAttribute(s)) {
                if (bt(t, a, i, !1)) return e.getAttribute(s);
                if (i.type === en) return a;
                f = e.getAttribute(s);
              }
              return bt(t, a, i, !1)
                ? f === null
                  ? a
                  : f
                : f === "" + a
                  ? a
                  : f;
            }
          }
          function nu(e, t, a, i) {
            {
              if (!Sn(t)) return;
              if (!e.hasAttribute(t)) return a === void 0 ? void 0 : null;
              var u = e.getAttribute(t);
              return Jr(a, t), u === "" + a ? a : u;
            }
          }
          function Pa(e, t, a, i) {
            var u = zr(t);
            if (!Xt(t, u, i)) {
              if ((bt(t, a, u, i) && (a = null), i || u === null)) {
                if (Sn(t)) {
                  var s = t;
                  a === null
                    ? e.removeAttribute(s)
                    : (Jr(a, t), e.setAttribute(s, "" + a));
                }
                return;
              }
              var f = u.mustUseProperty;
              if (f) {
                var p = u.propertyName;
                if (a === null) {
                  var h = u.type;
                  e[p] = h === en ? !1 : "";
                } else e[p] = a;
                return;
              }
              var g = u.attributeName,
                E = u.attributeNamespace;
              if (a === null) e.removeAttribute(g);
              else {
                var _ = u.type,
                  w;
                _ === en || (_ === Ur && a === !0)
                  ? (w = "")
                  : (Jr(a, g), (w = "" + a), u.sanitizeURL && tu(w.toString())),
                  E ? e.setAttributeNS(E, g, w) : e.setAttribute(g, w);
              }
            }
          }
          var ii = Symbol.for("react.element"),
            Ar = Symbol.for("react.portal"),
            _a = Symbol.for("react.fragment"),
            Mi = Symbol.for("react.strict_mode"),
            dl = Symbol.for("react.profiler"),
            R = Symbol.for("react.provider"),
            I = Symbol.for("react.context"),
            ne = Symbol.for("react.forward_ref"),
            Te = Symbol.for("react.suspense"),
            tt = Symbol.for("react.suspense_list"),
            it = Symbol.for("react.memo"),
            Me = Symbol.for("react.lazy"),
            Xe = Symbol.for("react.scope"),
            En = Symbol.for("react.debug_trace_mode"),
            Nt = Symbol.for("react.offscreen"),
            Vt = Symbol.for("react.legacy_hidden"),
            vr = Symbol.for("react.cache"),
            Ui = Symbol.for("react.tracing_marker"),
            pt = Symbol.iterator,
            Qn = "@@iterator";
          function jr(e) {
            if (e === null || typeof e != "object") return null;
            var t = (pt && e[pt]) || e[Qn];
            return typeof t == "function" ? t : null;
          }
          var Ke = Object.assign,
            $a = 0,
            Bp,
            wf,
            so,
            Da,
            Pp,
            Zr,
            $p;
          function Yp() {}
          Yp.__reactDisabledLog = !0;
          function ty() {
            {
              if ($a === 0) {
                (Bp = console.log),
                  (wf = console.info),
                  (so = console.warn),
                  (Da = console.error),
                  (Pp = console.group),
                  (Zr = console.groupCollapsed),
                  ($p = console.groupEnd);
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: Yp,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: e,
                  log: e,
                  warn: e,
                  error: e,
                  group: e,
                  groupCollapsed: e,
                  groupEnd: e,
                });
              }
              $a++;
            }
          }
          function Rs() {
            {
              if (($a--, $a === 0)) {
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: Ke({}, e, {
                    value: Bp,
                  }),
                  info: Ke({}, e, {
                    value: wf,
                  }),
                  warn: Ke({}, e, {
                    value: so,
                  }),
                  error: Ke({}, e, {
                    value: Da,
                  }),
                  group: Ke({}, e, {
                    value: Pp,
                  }),
                  groupCollapsed: Ke({}, e, {
                    value: Zr,
                  }),
                  groupEnd: Ke({}, e, {
                    value: $p,
                  }),
                });
              }
              $a < 0 &&
                y(
                  "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
                );
            }
          }
          var ru = S.ReactCurrentDispatcher,
            pl;
          function ka(e, t, a) {
            {
              if (pl === void 0)
                try {
                  throw Error();
                } catch (u) {
                  var i = u.stack.trim().match(/\n( *(at )?)/);
                  pl = (i && i[1]) || "";
                }
              return (
                `
` +
                pl +
                e
              );
            }
          }
          var bf = !1,
            xs;
          {
            var _f = typeof WeakMap == "function" ? WeakMap : Map;
            xs = new _f();
          }
          function ws(e, t) {
            if (!e || bf) return "";
            {
              var a = xs.get(e);
              if (a !== void 0) return a;
            }
            var i;
            bf = !0;
            var u = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var s;
            (s = ru.current), (ru.current = null), ty();
            try {
              if (t) {
                var f = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(f.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(f, []);
                  } catch (z) {
                    i = z;
                  }
                  Reflect.construct(e, [], f);
                } else {
                  try {
                    f.call();
                  } catch (z) {
                    i = z;
                  }
                  e.call(f.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  i = z;
                }
                e();
              }
            } catch (z) {
              if (z && i && typeof z.stack == "string") {
                for (
                  var p = z.stack.split(`
`),
                    h = i.stack.split(`
`),
                    g = p.length - 1,
                    E = h.length - 1;
                  g >= 1 && E >= 0 && p[g] !== h[E];

                )
                  E--;
                for (; g >= 1 && E >= 0; g--, E--)
                  if (p[g] !== h[E]) {
                    if (g !== 1 || E !== 1)
                      do
                        if ((g--, E--, E < 0 || p[g] !== h[E])) {
                          var _ =
                            `
` + p[g].replace(" at new ", " at ");
                          return (
                            e.displayName &&
                              _.includes("<anonymous>") &&
                              (_ = _.replace("<anonymous>", e.displayName)),
                            typeof e == "function" && xs.set(e, _),
                            _
                          );
                        }
                      while (g >= 1 && E >= 0);
                    break;
                  }
              }
            } finally {
              (bf = !1), (ru.current = s), Rs(), (Error.prepareStackTrace = u);
            }
            var w = e ? e.displayName || e.name : "",
              M = w ? ka(w) : "";
            return typeof e == "function" && xs.set(e, M), M;
          }
          function Df(e, t, a) {
            return ws(e, !0);
          }
          function vl(e, t, a) {
            return ws(e, !1);
          }
          function ny(e) {
            var t = e.prototype;
            return !!(t && t.isReactComponent);
          }
          function co(e, t, a) {
            if (e == null) return "";
            if (typeof e == "function") return ws(e, ny(e));
            if (typeof e == "string") return ka(e);
            switch (e) {
              case Te:
                return ka("Suspense");
              case tt:
                return ka("SuspenseList");
            }
            if (typeof e == "object")
              switch (e.$$typeof) {
                case ne:
                  return vl(e.render);
                case it:
                  return co(e.type, t, a);
                case Me: {
                  var i = e,
                    u = i._payload,
                    s = i._init;
                  try {
                    return co(s(u), t, a);
                  } catch {}
                }
              }
            return "";
          }
          function gt(e) {
            switch (
              (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)
            ) {
              case oe:
                return ka(e.type);
              case Gt:
                return ka("Lazy");
              case We:
                return ka("Suspense");
              case dt:
                return ka("SuspenseList");
              case P:
              case Z:
              case $e:
                return vl(e.type);
              case xe:
                return vl(e.type.render);
              case j:
                return Df(e.type);
              default:
                return "";
            }
          }
          function kf(e) {
            try {
              var t = "",
                a = e;
              do (t += gt(a)), (a = a.return);
              while (a);
              return t;
            } catch (i) {
              return (
                `
Error generating stack: ` +
                i.message +
                `
` +
                i.stack
              );
            }
          }
          function Wp(e, t, a) {
            var i = e.displayName;
            if (i) return i;
            var u = t.displayName || t.name || "";
            return u !== "" ? a + "(" + u + ")" : a;
          }
          function bs(e) {
            return e.displayName || "Context";
          }
          function St(e) {
            if (e == null) return null;
            if (
              (typeof e.tag == "number" &&
                y(
                  "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
                ),
              typeof e == "function")
            )
              return e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch (e) {
              case _a:
                return "Fragment";
              case Ar:
                return "Portal";
              case dl:
                return "Profiler";
              case Mi:
                return "StrictMode";
              case Te:
                return "Suspense";
              case tt:
                return "SuspenseList";
            }
            if (typeof e == "object")
              switch (e.$$typeof) {
                case I:
                  var t = e;
                  return bs(t) + ".Consumer";
                case R:
                  var a = e;
                  return bs(a._context) + ".Provider";
                case ne:
                  return Wp(e, e.render, "ForwardRef");
                case it:
                  var i = e.displayName || null;
                  return i !== null ? i : St(e.type) || "Memo";
                case Me: {
                  var u = e,
                    s = u._payload,
                    f = u._init;
                  try {
                    return St(f(s));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          function Qp(e, t, a) {
            var i = t.displayName || t.name || "";
            return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
          }
          function Lf(e) {
            return e.displayName || "Context";
          }
          function Be(e) {
            var t = e.tag,
              a = e.type;
            switch (t) {
              case yn:
                return "Cache";
              case kt:
                var i = a;
                return Lf(i) + ".Consumer";
              case ke:
                var u = a;
                return Lf(u._context) + ".Provider";
              case wt:
                return "DehydratedFragment";
              case xe:
                return Qp(a, a.render, "ForwardRef");
              case Ie:
                return "Fragment";
              case oe:
                return a;
              case J:
                return "Portal";
              case $:
                return "Root";
              case _e:
                return "Text";
              case Gt:
                return St(a);
              case at:
                return a === Mi ? "StrictMode" : "Mode";
              case Fe:
                return "Offscreen";
              case je:
                return "Profiler";
              case Dn:
                return "Scope";
              case We:
                return "Suspense";
              case dt:
                return "SuspenseList";
              case Lt:
                return "TracingMarker";
              case j:
              case P:
              case mn:
              case Z:
              case mt:
              case $e:
                if (typeof a == "function")
                  return a.displayName || a.name || null;
                if (typeof a == "string") return a;
                break;
            }
            return null;
          }
          var fo = S.ReactDebugCurrentFrame,
            tn = null,
            ea = !1;
          function ta() {
            {
              if (tn === null) return null;
              var e = tn._debugOwner;
              if (e !== null && typeof e < "u") return Be(e);
            }
            return null;
          }
          function po() {
            return tn === null ? "" : kf(tn);
          }
          function on() {
            (fo.getCurrentStack = null), (tn = null), (ea = !1);
          }
          function Et(e) {
            (fo.getCurrentStack = e === null ? null : po), (tn = e), (ea = !1);
          }
          function ry() {
            return tn;
          }
          function La(e) {
            ea = e;
          }
          function In(e) {
            return "" + e;
          }
          function zi(e) {
            switch (typeof e) {
              case "boolean":
              case "number":
              case "string":
              case "undefined":
                return e;
              case "object":
                return Or(e), e;
              default:
                return "";
            }
          }
          var Ip = {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0,
          };
          function au(e, t) {
            Ip[t.type] ||
              t.onChange ||
              t.onInput ||
              t.readOnly ||
              t.disabled ||
              t.value == null ||
              y(
                "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.",
              ),
              t.onChange ||
                t.readOnly ||
                t.disabled ||
                t.checked == null ||
                y(
                  "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.",
                );
          }
          function Nf(e) {
            var t = e.type,
              a = e.nodeName;
            return (
              a &&
              a.toLowerCase() === "input" &&
              (t === "checkbox" || t === "radio")
            );
          }
          function Gp(e) {
            return e._valueTracker;
          }
          function vo(e) {
            e._valueTracker = null;
          }
          function ho(e) {
            var t = "";
            return (
              e && (Nf(e) ? (t = e.checked ? "true" : "false") : (t = e.value)),
              t
            );
          }
          function iu(e) {
            var t = Nf(e) ? "checked" : "value",
              a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            Or(e[t]);
            var i = "" + e[t];
            if (
              !(
                e.hasOwnProperty(t) ||
                typeof a > "u" ||
                typeof a.get != "function" ||
                typeof a.set != "function"
              )
            ) {
              var u = a.get,
                s = a.set;
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return u.call(this);
                },
                set: function (p) {
                  Or(p), (i = "" + p), s.call(this, p);
                },
              }),
                Object.defineProperty(e, t, {
                  enumerable: a.enumerable,
                });
              var f = {
                getValue: function () {
                  return i;
                },
                setValue: function (p) {
                  Or(p), (i = "" + p);
                },
                stopTracking: function () {
                  vo(e), delete e[t];
                },
              };
              return f;
            }
          }
          function hl(e) {
            Gp(e) || (e._valueTracker = iu(e));
          }
          function Xp(e) {
            if (!e) return !1;
            var t = Gp(e);
            if (!t) return !0;
            var a = t.getValue(),
              i = ho(e);
            return i !== a ? (t.setValue(i), !0) : !1;
          }
          function _s(e) {
            if (
              ((e = e || (typeof document < "u" ? document : void 0)),
              typeof e > "u")
            )
              return null;
            try {
              return e.activeElement || e.body;
            } catch {
              return e.body;
            }
          }
          var Ds = !1,
            mo = !1,
            ks = !1,
            Of = !1;
          function li(e) {
            var t = e.type === "checkbox" || e.type === "radio";
            return t ? e.checked != null : e.value != null;
          }
          function yo(e, t) {
            var a = e,
              i = t.checked,
              u = Ke({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: i ?? a._wrapperState.initialChecked,
              });
            return u;
          }
          function go(e, t) {
            au("input", t),
              t.checked !== void 0 &&
                t.defaultChecked !== void 0 &&
                !mo &&
                (y(
                  "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                  ta() || "A component",
                  t.type,
                ),
                (mo = !0)),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !Ds &&
                (y(
                  "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                  ta() || "A component",
                  t.type,
                ),
                (Ds = !0));
            var a = e,
              i = t.defaultValue == null ? "" : t.defaultValue;
            a._wrapperState = {
              initialChecked: t.checked != null ? t.checked : t.defaultChecked,
              initialValue: zi(t.value != null ? t.value : i),
              controlled: li(t),
            };
          }
          function Mf(e, t) {
            var a = e,
              i = t.checked;
            i != null && Pa(a, "checked", i, !1);
          }
          function lu(e, t) {
            var a = e;
            {
              var i = li(t);
              !a._wrapperState.controlled &&
                i &&
                !Of &&
                (y(
                  "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
                ),
                (Of = !0)),
                a._wrapperState.controlled &&
                  !i &&
                  !ks &&
                  (y(
                    "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
                  ),
                  (ks = !0));
            }
            Mf(e, t);
            var u = zi(t.value),
              s = t.type;
            if (u != null)
              s === "number"
                ? ((u === 0 && a.value === "") || // We explicitly want to coerce to number here if possible.
                    // eslint-disable-next-line
                    a.value != u) &&
                  (a.value = In(u))
                : a.value !== In(u) && (a.value = In(u));
            else if (s === "submit" || s === "reset") {
              a.removeAttribute("value");
              return;
            }
            t.hasOwnProperty("value")
              ? Ai(a, t.type, u)
              : t.hasOwnProperty("defaultValue") &&
                Ai(a, t.type, zi(t.defaultValue)),
              t.checked == null &&
                t.defaultChecked != null &&
                (a.defaultChecked = !!t.defaultChecked);
          }
          function So(e, t, a) {
            var i = e;
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
              var u = t.type,
                s = u === "submit" || u === "reset";
              if (s && (t.value === void 0 || t.value === null)) return;
              var f = In(i._wrapperState.initialValue);
              a || (f !== i.value && (i.value = f)), (i.defaultValue = f);
            }
            var p = i.name;
            p !== "" && (i.name = ""),
              (i.defaultChecked = !i.defaultChecked),
              (i.defaultChecked = !!i._wrapperState.initialChecked),
              p !== "" && (i.name = p);
          }
          function Kp(e, t) {
            var a = e;
            lu(a, t), Fr(a, t);
          }
          function Fr(e, t) {
            var a = t.name;
            if (t.type === "radio" && a != null) {
              for (var i = e; i.parentNode; ) i = i.parentNode;
              Jr(a, "name");
              for (
                var u = i.querySelectorAll(
                    "input[name=" + JSON.stringify("" + a) + '][type="radio"]',
                  ),
                  s = 0;
                s < u.length;
                s++
              ) {
                var f = u[s];
                if (!(f === e || f.form !== e.form)) {
                  var p = Lh(f);
                  if (!p)
                    throw new Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.",
                    );
                  Xp(f), lu(f, p);
                }
              }
            }
          }
          function Ai(e, t, a) {
            // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
            (t !== "number" || _s(e.ownerDocument) !== e) &&
              (a == null
                ? (e.defaultValue = In(e._wrapperState.initialValue))
                : e.defaultValue !== In(a) && (e.defaultValue = In(a)));
          }
          var Ls = !1,
            uu = !1,
            qp = !1;
          function Ns(e, t) {
            t.value == null &&
              (typeof t.children == "object" && t.children !== null
                ? v.Children.forEach(t.children, function (a) {
                    a != null &&
                      (typeof a == "string" ||
                        typeof a == "number" ||
                        uu ||
                        ((uu = !0),
                        y(
                          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.",
                        )));
                  })
                : t.dangerouslySetInnerHTML != null &&
                  (qp ||
                    ((qp = !0),
                    y(
                      "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.",
                    )))),
              t.selected != null &&
                !Ls &&
                (y(
                  "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.",
                ),
                (Ls = !0));
          }
          function Uf(e, t) {
            t.value != null && e.setAttribute("value", In(zi(t.value)));
          }
          var Eo = Array.isArray;
          function Cn(e) {
            return Eo(e);
          }
          var Os;
          Os = !1;
          function Jp() {
            var e = ta();
            return e
              ? `

Check the render method of \`` +
                  e +
                  "`."
              : "";
          }
          var Zp = ["value", "defaultValue"];
          function ay(e) {
            {
              au("select", e);
              for (var t = 0; t < Zp.length; t++) {
                var a = Zp[t];
                if (e[a] != null) {
                  var i = Cn(e[a]);
                  e.multiple && !i
                    ? y(
                        "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
                        a,
                        Jp(),
                      )
                    : !e.multiple &&
                      i &&
                      y(
                        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
                        a,
                        Jp(),
                      );
                }
              }
            }
          }
          function ji(e, t, a, i) {
            var u = e.options;
            if (t) {
              for (var s = a, f = {}, p = 0; p < s.length; p++)
                f["$" + s[p]] = !0;
              for (var h = 0; h < u.length; h++) {
                var g = f.hasOwnProperty("$" + u[h].value);
                u[h].selected !== g && (u[h].selected = g),
                  g && i && (u[h].defaultSelected = !0);
              }
            } else {
              for (var E = In(zi(a)), _ = null, w = 0; w < u.length; w++) {
                if (u[w].value === E) {
                  (u[w].selected = !0), i && (u[w].defaultSelected = !0);
                  return;
                }
                _ === null && !u[w].disabled && (_ = u[w]);
              }
              _ !== null && (_.selected = !0);
            }
          }
          function zf(e, t) {
            return Ke({}, t, {
              value: void 0,
            });
          }
          function ev(e, t) {
            var a = e;
            ay(t),
              (a._wrapperState = {
                wasMultiple: !!t.multiple,
              }),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !Os &&
                (y(
                  "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                ),
                (Os = !0));
          }
          function iy(e, t) {
            var a = e;
            a.multiple = !!t.multiple;
            var i = t.value;
            i != null
              ? ji(a, !!t.multiple, i, !1)
              : t.defaultValue != null &&
                ji(a, !!t.multiple, t.defaultValue, !0);
          }
          function ly(e, t) {
            var a = e,
              i = a._wrapperState.wasMultiple;
            a._wrapperState.wasMultiple = !!t.multiple;
            var u = t.value;
            u != null
              ? ji(a, !!t.multiple, u, !1)
              : i !== !!t.multiple &&
                (t.defaultValue != null
                  ? ji(a, !!t.multiple, t.defaultValue, !0)
                  : ji(a, !!t.multiple, t.multiple ? [] : "", !1));
          }
          function uy(e, t) {
            var a = e,
              i = t.value;
            i != null && ji(a, !!t.multiple, i, !1);
          }
          var Af = !1;
          function jf(e, t) {
            var a = e;
            if (t.dangerouslySetInnerHTML != null)
              throw new Error(
                "`dangerouslySetInnerHTML` does not make sense on <textarea>.",
              );
            var i = Ke({}, t, {
              value: void 0,
              defaultValue: void 0,
              children: In(a._wrapperState.initialValue),
            });
            return i;
          }
          function tv(e, t) {
            var a = e;
            au("textarea", t),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !Af &&
                (y(
                  "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                  ta() || "A component",
                ),
                (Af = !0));
            var i = t.value;
            if (i == null) {
              var u = t.children,
                s = t.defaultValue;
              if (u != null) {
                y(
                  "Use the `defaultValue` or `value` props instead of setting children on <textarea>.",
                );
                {
                  if (s != null)
                    throw new Error(
                      "If you supply `defaultValue` on a <textarea>, do not pass children.",
                    );
                  if (Cn(u)) {
                    if (u.length > 1)
                      throw new Error(
                        "<textarea> can only have at most one child.",
                      );
                    u = u[0];
                  }
                  s = u;
                }
              }
              s == null && (s = ""), (i = s);
            }
            a._wrapperState = {
              initialValue: zi(i),
            };
          }
          function nv(e, t) {
            var a = e,
              i = zi(t.value),
              u = zi(t.defaultValue);
            if (i != null) {
              var s = In(i);
              s !== a.value && (a.value = s),
                t.defaultValue == null &&
                  a.defaultValue !== s &&
                  (a.defaultValue = s);
            }
            u != null && (a.defaultValue = In(u));
          }
          function rv(e, t) {
            var a = e,
              i = a.textContent;
            i === a._wrapperState.initialValue &&
              i !== "" &&
              i !== null &&
              (a.value = i);
          }
          function Ff(e, t) {
            nv(e, t);
          }
          var ui = "http://www.w3.org/1999/xhtml",
            oy = "http://www.w3.org/1998/Math/MathML",
            Hf = "http://www.w3.org/2000/svg";
          function Ms(e) {
            switch (e) {
              case "svg":
                return Hf;
              case "math":
                return oy;
              default:
                return ui;
            }
          }
          function Vf(e, t) {
            return e == null || e === ui
              ? Ms(t)
              : e === Hf && t === "foreignObject"
                ? ui
                : e;
          }
          var sy = function (e) {
              return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (t, a, i, u) {
                    MSApp.execUnsafeLocalFunction(function () {
                      return e(t, a, i, u);
                    });
                  }
                : e;
            },
            Us,
            av = sy(function (e, t) {
              if (e.namespaceURI === Hf && !("innerHTML" in e)) {
                (Us = Us || document.createElement("div")),
                  (Us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>");
                for (var a = Us.firstChild; e.firstChild; )
                  e.removeChild(e.firstChild);
                for (; a.firstChild; ) e.appendChild(a.firstChild);
                return;
              }
              e.innerHTML = t;
            }),
            hr = 1,
            oi = 3,
            nn = 8,
            Na = 9,
            ml = 11,
            zs = function (e, t) {
              if (t) {
                var a = e.firstChild;
                if (a && a === e.lastChild && a.nodeType === oi) {
                  a.nodeValue = t;
                  return;
                }
              }
              e.textContent = t;
            },
            iv = {
              animation: [
                "animationDelay",
                "animationDirection",
                "animationDuration",
                "animationFillMode",
                "animationIterationCount",
                "animationName",
                "animationPlayState",
                "animationTimingFunction",
              ],
              background: [
                "backgroundAttachment",
                "backgroundClip",
                "backgroundColor",
                "backgroundImage",
                "backgroundOrigin",
                "backgroundPositionX",
                "backgroundPositionY",
                "backgroundRepeat",
                "backgroundSize",
              ],
              backgroundPosition: [
                "backgroundPositionX",
                "backgroundPositionY",
              ],
              border: [
                "borderBottomColor",
                "borderBottomStyle",
                "borderBottomWidth",
                "borderImageOutset",
                "borderImageRepeat",
                "borderImageSlice",
                "borderImageSource",
                "borderImageWidth",
                "borderLeftColor",
                "borderLeftStyle",
                "borderLeftWidth",
                "borderRightColor",
                "borderRightStyle",
                "borderRightWidth",
                "borderTopColor",
                "borderTopStyle",
                "borderTopWidth",
              ],
              borderBlockEnd: [
                "borderBlockEndColor",
                "borderBlockEndStyle",
                "borderBlockEndWidth",
              ],
              borderBlockStart: [
                "borderBlockStartColor",
                "borderBlockStartStyle",
                "borderBlockStartWidth",
              ],
              borderBottom: [
                "borderBottomColor",
                "borderBottomStyle",
                "borderBottomWidth",
              ],
              borderColor: [
                "borderBottomColor",
                "borderLeftColor",
                "borderRightColor",
                "borderTopColor",
              ],
              borderImage: [
                "borderImageOutset",
                "borderImageRepeat",
                "borderImageSlice",
                "borderImageSource",
                "borderImageWidth",
              ],
              borderInlineEnd: [
                "borderInlineEndColor",
                "borderInlineEndStyle",
                "borderInlineEndWidth",
              ],
              borderInlineStart: [
                "borderInlineStartColor",
                "borderInlineStartStyle",
                "borderInlineStartWidth",
              ],
              borderLeft: [
                "borderLeftColor",
                "borderLeftStyle",
                "borderLeftWidth",
              ],
              borderRadius: [
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
                "borderTopLeftRadius",
                "borderTopRightRadius",
              ],
              borderRight: [
                "borderRightColor",
                "borderRightStyle",
                "borderRightWidth",
              ],
              borderStyle: [
                "borderBottomStyle",
                "borderLeftStyle",
                "borderRightStyle",
                "borderTopStyle",
              ],
              borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
              borderWidth: [
                "borderBottomWidth",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
              ],
              columnRule: [
                "columnRuleColor",
                "columnRuleStyle",
                "columnRuleWidth",
              ],
              columns: ["columnCount", "columnWidth"],
              flex: ["flexBasis", "flexGrow", "flexShrink"],
              flexFlow: ["flexDirection", "flexWrap"],
              font: [
                "fontFamily",
                "fontFeatureSettings",
                "fontKerning",
                "fontLanguageOverride",
                "fontSize",
                "fontSizeAdjust",
                "fontStretch",
                "fontStyle",
                "fontVariant",
                "fontVariantAlternates",
                "fontVariantCaps",
                "fontVariantEastAsian",
                "fontVariantLigatures",
                "fontVariantNumeric",
                "fontVariantPosition",
                "fontWeight",
                "lineHeight",
              ],
              fontVariant: [
                "fontVariantAlternates",
                "fontVariantCaps",
                "fontVariantEastAsian",
                "fontVariantLigatures",
                "fontVariantNumeric",
                "fontVariantPosition",
              ],
              gap: ["columnGap", "rowGap"],
              grid: [
                "gridAutoColumns",
                "gridAutoFlow",
                "gridAutoRows",
                "gridTemplateAreas",
                "gridTemplateColumns",
                "gridTemplateRows",
              ],
              gridArea: [
                "gridColumnEnd",
                "gridColumnStart",
                "gridRowEnd",
                "gridRowStart",
              ],
              gridColumn: ["gridColumnEnd", "gridColumnStart"],
              gridColumnGap: ["columnGap"],
              gridGap: ["columnGap", "rowGap"],
              gridRow: ["gridRowEnd", "gridRowStart"],
              gridRowGap: ["rowGap"],
              gridTemplate: [
                "gridTemplateAreas",
                "gridTemplateColumns",
                "gridTemplateRows",
              ],
              listStyle: [
                "listStyleImage",
                "listStylePosition",
                "listStyleType",
              ],
              margin: [
                "marginBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
              ],
              marker: ["markerEnd", "markerMid", "markerStart"],
              mask: [
                "maskClip",
                "maskComposite",
                "maskImage",
                "maskMode",
                "maskOrigin",
                "maskPositionX",
                "maskPositionY",
                "maskRepeat",
                "maskSize",
              ],
              maskPosition: ["maskPositionX", "maskPositionY"],
              outline: ["outlineColor", "outlineStyle", "outlineWidth"],
              overflow: ["overflowX", "overflowY"],
              padding: [
                "paddingBottom",
                "paddingLeft",
                "paddingRight",
                "paddingTop",
              ],
              placeContent: ["alignContent", "justifyContent"],
              placeItems: ["alignItems", "justifyItems"],
              placeSelf: ["alignSelf", "justifySelf"],
              textDecoration: [
                "textDecorationColor",
                "textDecorationLine",
                "textDecorationStyle",
              ],
              textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
              transition: [
                "transitionDelay",
                "transitionDuration",
                "transitionProperty",
                "transitionTimingFunction",
              ],
              wordWrap: ["overflowWrap"],
            },
            ou = {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageOutset: !0,
              borderImageSlice: !0,
              borderImageWidth: !0,
              boxFlex: !0,
              boxFlexGroup: !0,
              boxOrdinalGroup: !0,
              columnCount: !0,
              columns: !0,
              flex: !0,
              flexGrow: !0,
              flexPositive: !0,
              flexShrink: !0,
              flexNegative: !0,
              flexOrder: !0,
              gridArea: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowSpan: !0,
              gridRowStart: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnSpan: !0,
              gridColumnStart: !0,
              fontWeight: !0,
              lineClamp: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              tabSize: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              // SVG-related properties
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeDasharray: !0,
              strokeDashoffset: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
              strokeWidth: !0,
            };
          function lv(e, t) {
            return e + t.charAt(0).toUpperCase() + t.substring(1);
          }
          var uv = ["Webkit", "ms", "Moz", "O"];
          Object.keys(ou).forEach(function (e) {
            uv.forEach(function (t) {
              ou[lv(t, e)] = ou[e];
            });
          });
          function As(e, t, a) {
            var i = t == null || typeof t == "boolean" || t === "";
            return i
              ? ""
              : !a &&
                  typeof t == "number" &&
                  t !== 0 &&
                  !(ou.hasOwnProperty(e) && ou[e])
                ? t + "px"
                : (Va(t, e), ("" + t).trim());
          }
          var su = /([A-Z])/g,
            cy = /^ms-/;
          function fy(e) {
            return e.replace(su, "-$1").toLowerCase().replace(cy, "-ms-");
          }
          var ov = function () {};
          {
            var sv = /^(?:webkit|moz|o)[A-Z]/,
              cv = /^-ms-/,
              Co = /-(.)/g,
              cu = /;\s*$/,
              fu = {},
              du = {},
              fv = !1,
              Bf = !1,
              Pf = function (e) {
                return e.replace(Co, function (t, a) {
                  return a.toUpperCase();
                });
              },
              $f = function (e) {
                (fu.hasOwnProperty(e) && fu[e]) ||
                  ((fu[e] = !0),
                  y(
                    "Unsupported style property %s. Did you mean %s?",
                    e,
                    // As Andi Smith suggests
                    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
                    // is converted to lowercase `ms`.
                    Pf(e.replace(cv, "ms-")),
                  ));
              },
              dv = function (e) {
                (fu.hasOwnProperty(e) && fu[e]) ||
                  ((fu[e] = !0),
                  y(
                    "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                    e,
                    e.charAt(0).toUpperCase() + e.slice(1),
                  ));
              },
              pv = function (e, t) {
                (du.hasOwnProperty(t) && du[t]) ||
                  ((du[t] = !0),
                  y(
                    `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                    e,
                    t.replace(cu, ""),
                  ));
              },
              vv = function (e, t) {
                fv ||
                  ((fv = !0),
                  y(
                    "`NaN` is an invalid value for the `%s` css style property.",
                    e,
                  ));
              },
              dy = function (e, t) {
                Bf ||
                  ((Bf = !0),
                  y(
                    "`Infinity` is an invalid value for the `%s` css style property.",
                    e,
                  ));
              };
            ov = function (e, t) {
              e.indexOf("-") > -1
                ? $f(e)
                : sv.test(e)
                  ? dv(e)
                  : cu.test(t) && pv(e, t),
                typeof t == "number" &&
                  (isNaN(t) ? vv(e, t) : isFinite(t) || dy(e, t));
            };
          }
          var py = ov;
          function vy(e) {
            {
              var t = "",
                a = "";
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  var u = e[i];
                  if (u != null) {
                    var s = i.indexOf("--") === 0;
                    (t += a + (s ? i : fy(i)) + ":"),
                      (t += As(i, u, s)),
                      (a = ";");
                  }
                }
              return t || null;
            }
          }
          function hv(e, t) {
            var a = e.style;
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                var u = i.indexOf("--") === 0;
                u || py(i, t[i]);
                var s = As(i, t[i], u);
                i === "float" && (i = "cssFloat"),
                  u ? a.setProperty(i, s) : (a[i] = s);
              }
          }
          function hy(e) {
            return e == null || typeof e == "boolean" || e === "";
          }
          function na(e) {
            var t = {};
            for (var a in e)
              for (var i = iv[a] || [a], u = 0; u < i.length; u++) t[i[u]] = a;
            return t;
          }
          function To(e, t) {
            {
              if (!t) return;
              var a = na(e),
                i = na(t),
                u = {};
              for (var s in a) {
                var f = a[s],
                  p = i[s];
                if (p && f !== p) {
                  var h = f + "," + p;
                  if (u[h]) continue;
                  (u[h] = !0),
                    y(
                      "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                      hy(e[f]) ? "Removing" : "Updating",
                      f,
                      p,
                    );
                }
              }
            }
          }
          var mv = {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              embed: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
              // NOTE: menuitem's close tag should be omitted, but that causes problems.
            },
            yv = Ke(
              {
                menuitem: !0,
              },
              mv,
            ),
            gv = "__html";
          function js(e, t) {
            if (t) {
              if (
                yv[e] &&
                (t.children != null || t.dangerouslySetInnerHTML != null)
              )
                throw new Error(
                  e +
                    " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.",
                );
              if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                  throw new Error(
                    "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",
                  );
                if (
                  typeof t.dangerouslySetInnerHTML != "object" ||
                  !(gv in t.dangerouslySetInnerHTML)
                )
                  throw new Error(
                    "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.",
                  );
              }
              if (
                (!t.suppressContentEditableWarning &&
                  t.contentEditable &&
                  t.children != null &&
                  y(
                    "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.",
                  ),
                t.style != null && typeof t.style != "object")
              )
                throw new Error(
                  "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
                );
            }
          }
          function si(e, t) {
            if (e.indexOf("-") === -1) return typeof t.is == "string";
            switch (e) {
              case "annotation-xml":
              case "color-profile":
              case "font-face":
              case "font-face-src":
              case "font-face-uri":
              case "font-face-format":
              case "font-face-name":
              case "missing-glyph":
                return !1;
              default:
                return !0;
            }
          }
          var Fs = {
              // HTML
              accept: "accept",
              acceptcharset: "acceptCharset",
              "accept-charset": "acceptCharset",
              accesskey: "accessKey",
              action: "action",
              allowfullscreen: "allowFullScreen",
              alt: "alt",
              as: "as",
              async: "async",
              autocapitalize: "autoCapitalize",
              autocomplete: "autoComplete",
              autocorrect: "autoCorrect",
              autofocus: "autoFocus",
              autoplay: "autoPlay",
              autosave: "autoSave",
              capture: "capture",
              cellpadding: "cellPadding",
              cellspacing: "cellSpacing",
              challenge: "challenge",
              charset: "charSet",
              checked: "checked",
              children: "children",
              cite: "cite",
              class: "className",
              classid: "classID",
              classname: "className",
              cols: "cols",
              colspan: "colSpan",
              content: "content",
              contenteditable: "contentEditable",
              contextmenu: "contextMenu",
              controls: "controls",
              controlslist: "controlsList",
              coords: "coords",
              crossorigin: "crossOrigin",
              dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
              data: "data",
              datetime: "dateTime",
              default: "default",
              defaultchecked: "defaultChecked",
              defaultvalue: "defaultValue",
              defer: "defer",
              dir: "dir",
              disabled: "disabled",
              disablepictureinpicture: "disablePictureInPicture",
              disableremoteplayback: "disableRemotePlayback",
              download: "download",
              draggable: "draggable",
              enctype: "encType",
              enterkeyhint: "enterKeyHint",
              for: "htmlFor",
              form: "form",
              formmethod: "formMethod",
              formaction: "formAction",
              formenctype: "formEncType",
              formnovalidate: "formNoValidate",
              formtarget: "formTarget",
              frameborder: "frameBorder",
              headers: "headers",
              height: "height",
              hidden: "hidden",
              high: "high",
              href: "href",
              hreflang: "hrefLang",
              htmlfor: "htmlFor",
              httpequiv: "httpEquiv",
              "http-equiv": "httpEquiv",
              icon: "icon",
              id: "id",
              imagesizes: "imageSizes",
              imagesrcset: "imageSrcSet",
              innerhtml: "innerHTML",
              inputmode: "inputMode",
              integrity: "integrity",
              is: "is",
              itemid: "itemID",
              itemprop: "itemProp",
              itemref: "itemRef",
              itemscope: "itemScope",
              itemtype: "itemType",
              keyparams: "keyParams",
              keytype: "keyType",
              kind: "kind",
              label: "label",
              lang: "lang",
              list: "list",
              loop: "loop",
              low: "low",
              manifest: "manifest",
              marginwidth: "marginWidth",
              marginheight: "marginHeight",
              max: "max",
              maxlength: "maxLength",
              media: "media",
              mediagroup: "mediaGroup",
              method: "method",
              min: "min",
              minlength: "minLength",
              multiple: "multiple",
              muted: "muted",
              name: "name",
              nomodule: "noModule",
              nonce: "nonce",
              novalidate: "noValidate",
              open: "open",
              optimum: "optimum",
              pattern: "pattern",
              placeholder: "placeholder",
              playsinline: "playsInline",
              poster: "poster",
              preload: "preload",
              profile: "profile",
              radiogroup: "radioGroup",
              readonly: "readOnly",
              referrerpolicy: "referrerPolicy",
              rel: "rel",
              required: "required",
              reversed: "reversed",
              role: "role",
              rows: "rows",
              rowspan: "rowSpan",
              sandbox: "sandbox",
              scope: "scope",
              scoped: "scoped",
              scrolling: "scrolling",
              seamless: "seamless",
              selected: "selected",
              shape: "shape",
              size: "size",
              sizes: "sizes",
              span: "span",
              spellcheck: "spellCheck",
              src: "src",
              srcdoc: "srcDoc",
              srclang: "srcLang",
              srcset: "srcSet",
              start: "start",
              step: "step",
              style: "style",
              summary: "summary",
              tabindex: "tabIndex",
              target: "target",
              title: "title",
              type: "type",
              usemap: "useMap",
              value: "value",
              width: "width",
              wmode: "wmode",
              wrap: "wrap",
              // SVG
              about: "about",
              accentheight: "accentHeight",
              "accent-height": "accentHeight",
              accumulate: "accumulate",
              additive: "additive",
              alignmentbaseline: "alignmentBaseline",
              "alignment-baseline": "alignmentBaseline",
              allowreorder: "allowReorder",
              alphabetic: "alphabetic",
              amplitude: "amplitude",
              arabicform: "arabicForm",
              "arabic-form": "arabicForm",
              ascent: "ascent",
              attributename: "attributeName",
              attributetype: "attributeType",
              autoreverse: "autoReverse",
              azimuth: "azimuth",
              basefrequency: "baseFrequency",
              baselineshift: "baselineShift",
              "baseline-shift": "baselineShift",
              baseprofile: "baseProfile",
              bbox: "bbox",
              begin: "begin",
              bias: "bias",
              by: "by",
              calcmode: "calcMode",
              capheight: "capHeight",
              "cap-height": "capHeight",
              clip: "clip",
              clippath: "clipPath",
              "clip-path": "clipPath",
              clippathunits: "clipPathUnits",
              cliprule: "clipRule",
              "clip-rule": "clipRule",
              color: "color",
              colorinterpolation: "colorInterpolation",
              "color-interpolation": "colorInterpolation",
              colorinterpolationfilters: "colorInterpolationFilters",
              "color-interpolation-filters": "colorInterpolationFilters",
              colorprofile: "colorProfile",
              "color-profile": "colorProfile",
              colorrendering: "colorRendering",
              "color-rendering": "colorRendering",
              contentscripttype: "contentScriptType",
              contentstyletype: "contentStyleType",
              cursor: "cursor",
              cx: "cx",
              cy: "cy",
              d: "d",
              datatype: "datatype",
              decelerate: "decelerate",
              descent: "descent",
              diffuseconstant: "diffuseConstant",
              direction: "direction",
              display: "display",
              divisor: "divisor",
              dominantbaseline: "dominantBaseline",
              "dominant-baseline": "dominantBaseline",
              dur: "dur",
              dx: "dx",
              dy: "dy",
              edgemode: "edgeMode",
              elevation: "elevation",
              enablebackground: "enableBackground",
              "enable-background": "enableBackground",
              end: "end",
              exponent: "exponent",
              externalresourcesrequired: "externalResourcesRequired",
              fill: "fill",
              fillopacity: "fillOpacity",
              "fill-opacity": "fillOpacity",
              fillrule: "fillRule",
              "fill-rule": "fillRule",
              filter: "filter",
              filterres: "filterRes",
              filterunits: "filterUnits",
              floodopacity: "floodOpacity",
              "flood-opacity": "floodOpacity",
              floodcolor: "floodColor",
              "flood-color": "floodColor",
              focusable: "focusable",
              fontfamily: "fontFamily",
              "font-family": "fontFamily",
              fontsize: "fontSize",
              "font-size": "fontSize",
              fontsizeadjust: "fontSizeAdjust",
              "font-size-adjust": "fontSizeAdjust",
              fontstretch: "fontStretch",
              "font-stretch": "fontStretch",
              fontstyle: "fontStyle",
              "font-style": "fontStyle",
              fontvariant: "fontVariant",
              "font-variant": "fontVariant",
              fontweight: "fontWeight",
              "font-weight": "fontWeight",
              format: "format",
              from: "from",
              fx: "fx",
              fy: "fy",
              g1: "g1",
              g2: "g2",
              glyphname: "glyphName",
              "glyph-name": "glyphName",
              glyphorientationhorizontal: "glyphOrientationHorizontal",
              "glyph-orientation-horizontal": "glyphOrientationHorizontal",
              glyphorientationvertical: "glyphOrientationVertical",
              "glyph-orientation-vertical": "glyphOrientationVertical",
              glyphref: "glyphRef",
              gradienttransform: "gradientTransform",
              gradientunits: "gradientUnits",
              hanging: "hanging",
              horizadvx: "horizAdvX",
              "horiz-adv-x": "horizAdvX",
              horizoriginx: "horizOriginX",
              "horiz-origin-x": "horizOriginX",
              ideographic: "ideographic",
              imagerendering: "imageRendering",
              "image-rendering": "imageRendering",
              in2: "in2",
              in: "in",
              inlist: "inlist",
              intercept: "intercept",
              k1: "k1",
              k2: "k2",
              k3: "k3",
              k4: "k4",
              k: "k",
              kernelmatrix: "kernelMatrix",
              kernelunitlength: "kernelUnitLength",
              kerning: "kerning",
              keypoints: "keyPoints",
              keysplines: "keySplines",
              keytimes: "keyTimes",
              lengthadjust: "lengthAdjust",
              letterspacing: "letterSpacing",
              "letter-spacing": "letterSpacing",
              lightingcolor: "lightingColor",
              "lighting-color": "lightingColor",
              limitingconeangle: "limitingConeAngle",
              local: "local",
              markerend: "markerEnd",
              "marker-end": "markerEnd",
              markerheight: "markerHeight",
              markermid: "markerMid",
              "marker-mid": "markerMid",
              markerstart: "markerStart",
              "marker-start": "markerStart",
              markerunits: "markerUnits",
              markerwidth: "markerWidth",
              mask: "mask",
              maskcontentunits: "maskContentUnits",
              maskunits: "maskUnits",
              mathematical: "mathematical",
              mode: "mode",
              numoctaves: "numOctaves",
              offset: "offset",
              opacity: "opacity",
              operator: "operator",
              order: "order",
              orient: "orient",
              orientation: "orientation",
              origin: "origin",
              overflow: "overflow",
              overlineposition: "overlinePosition",
              "overline-position": "overlinePosition",
              overlinethickness: "overlineThickness",
              "overline-thickness": "overlineThickness",
              paintorder: "paintOrder",
              "paint-order": "paintOrder",
              panose1: "panose1",
              "panose-1": "panose1",
              pathlength: "pathLength",
              patterncontentunits: "patternContentUnits",
              patterntransform: "patternTransform",
              patternunits: "patternUnits",
              pointerevents: "pointerEvents",
              "pointer-events": "pointerEvents",
              points: "points",
              pointsatx: "pointsAtX",
              pointsaty: "pointsAtY",
              pointsatz: "pointsAtZ",
              prefix: "prefix",
              preservealpha: "preserveAlpha",
              preserveaspectratio: "preserveAspectRatio",
              primitiveunits: "primitiveUnits",
              property: "property",
              r: "r",
              radius: "radius",
              refx: "refX",
              refy: "refY",
              renderingintent: "renderingIntent",
              "rendering-intent": "renderingIntent",
              repeatcount: "repeatCount",
              repeatdur: "repeatDur",
              requiredextensions: "requiredExtensions",
              requiredfeatures: "requiredFeatures",
              resource: "resource",
              restart: "restart",
              result: "result",
              results: "results",
              rotate: "rotate",
              rx: "rx",
              ry: "ry",
              scale: "scale",
              security: "security",
              seed: "seed",
              shaperendering: "shapeRendering",
              "shape-rendering": "shapeRendering",
              slope: "slope",
              spacing: "spacing",
              specularconstant: "specularConstant",
              specularexponent: "specularExponent",
              speed: "speed",
              spreadmethod: "spreadMethod",
              startoffset: "startOffset",
              stddeviation: "stdDeviation",
              stemh: "stemh",
              stemv: "stemv",
              stitchtiles: "stitchTiles",
              stopcolor: "stopColor",
              "stop-color": "stopColor",
              stopopacity: "stopOpacity",
              "stop-opacity": "stopOpacity",
              strikethroughposition: "strikethroughPosition",
              "strikethrough-position": "strikethroughPosition",
              strikethroughthickness: "strikethroughThickness",
              "strikethrough-thickness": "strikethroughThickness",
              string: "string",
              stroke: "stroke",
              strokedasharray: "strokeDasharray",
              "stroke-dasharray": "strokeDasharray",
              strokedashoffset: "strokeDashoffset",
              "stroke-dashoffset": "strokeDashoffset",
              strokelinecap: "strokeLinecap",
              "stroke-linecap": "strokeLinecap",
              strokelinejoin: "strokeLinejoin",
              "stroke-linejoin": "strokeLinejoin",
              strokemiterlimit: "strokeMiterlimit",
              "stroke-miterlimit": "strokeMiterlimit",
              strokewidth: "strokeWidth",
              "stroke-width": "strokeWidth",
              strokeopacity: "strokeOpacity",
              "stroke-opacity": "strokeOpacity",
              suppresscontenteditablewarning: "suppressContentEditableWarning",
              suppresshydrationwarning: "suppressHydrationWarning",
              surfacescale: "surfaceScale",
              systemlanguage: "systemLanguage",
              tablevalues: "tableValues",
              targetx: "targetX",
              targety: "targetY",
              textanchor: "textAnchor",
              "text-anchor": "textAnchor",
              textdecoration: "textDecoration",
              "text-decoration": "textDecoration",
              textlength: "textLength",
              textrendering: "textRendering",
              "text-rendering": "textRendering",
              to: "to",
              transform: "transform",
              typeof: "typeof",
              u1: "u1",
              u2: "u2",
              underlineposition: "underlinePosition",
              "underline-position": "underlinePosition",
              underlinethickness: "underlineThickness",
              "underline-thickness": "underlineThickness",
              unicode: "unicode",
              unicodebidi: "unicodeBidi",
              "unicode-bidi": "unicodeBidi",
              unicoderange: "unicodeRange",
              "unicode-range": "unicodeRange",
              unitsperem: "unitsPerEm",
              "units-per-em": "unitsPerEm",
              unselectable: "unselectable",
              valphabetic: "vAlphabetic",
              "v-alphabetic": "vAlphabetic",
              values: "values",
              vectoreffect: "vectorEffect",
              "vector-effect": "vectorEffect",
              version: "version",
              vertadvy: "vertAdvY",
              "vert-adv-y": "vertAdvY",
              vertoriginx: "vertOriginX",
              "vert-origin-x": "vertOriginX",
              vertoriginy: "vertOriginY",
              "vert-origin-y": "vertOriginY",
              vhanging: "vHanging",
              "v-hanging": "vHanging",
              videographic: "vIdeographic",
              "v-ideographic": "vIdeographic",
              viewbox: "viewBox",
              viewtarget: "viewTarget",
              visibility: "visibility",
              vmathematical: "vMathematical",
              "v-mathematical": "vMathematical",
              vocab: "vocab",
              widths: "widths",
              wordspacing: "wordSpacing",
              "word-spacing": "wordSpacing",
              writingmode: "writingMode",
              "writing-mode": "writingMode",
              x1: "x1",
              x2: "x2",
              x: "x",
              xchannelselector: "xChannelSelector",
              xheight: "xHeight",
              "x-height": "xHeight",
              xlinkactuate: "xlinkActuate",
              "xlink:actuate": "xlinkActuate",
              xlinkarcrole: "xlinkArcrole",
              "xlink:arcrole": "xlinkArcrole",
              xlinkhref: "xlinkHref",
              "xlink:href": "xlinkHref",
              xlinkrole: "xlinkRole",
              "xlink:role": "xlinkRole",
              xlinkshow: "xlinkShow",
              "xlink:show": "xlinkShow",
              xlinktitle: "xlinkTitle",
              "xlink:title": "xlinkTitle",
              xlinktype: "xlinkType",
              "xlink:type": "xlinkType",
              xmlbase: "xmlBase",
              "xml:base": "xmlBase",
              xmllang: "xmlLang",
              "xml:lang": "xmlLang",
              xmlns: "xmlns",
              "xml:space": "xmlSpace",
              xmlnsxlink: "xmlnsXlink",
              "xmlns:xlink": "xmlnsXlink",
              xmlspace: "xmlSpace",
              y1: "y1",
              y2: "y2",
              y: "y",
              ychannelselector: "yChannelSelector",
              z: "z",
              zoomandpan: "zoomAndPan",
            },
            Sv = {
              "aria-current": 0,
              // state
              "aria-description": 0,
              "aria-details": 0,
              "aria-disabled": 0,
              // state
              "aria-hidden": 0,
              // state
              "aria-invalid": 0,
              // state
              "aria-keyshortcuts": 0,
              "aria-label": 0,
              "aria-roledescription": 0,
              // Widget Attributes
              "aria-autocomplete": 0,
              "aria-checked": 0,
              "aria-expanded": 0,
              "aria-haspopup": 0,
              "aria-level": 0,
              "aria-modal": 0,
              "aria-multiline": 0,
              "aria-multiselectable": 0,
              "aria-orientation": 0,
              "aria-placeholder": 0,
              "aria-pressed": 0,
              "aria-readonly": 0,
              "aria-required": 0,
              "aria-selected": 0,
              "aria-sort": 0,
              "aria-valuemax": 0,
              "aria-valuemin": 0,
              "aria-valuenow": 0,
              "aria-valuetext": 0,
              // Live Region Attributes
              "aria-atomic": 0,
              "aria-busy": 0,
              "aria-live": 0,
              "aria-relevant": 0,
              // Drag-and-Drop Attributes
              "aria-dropeffect": 0,
              "aria-grabbed": 0,
              // Relationship Attributes
              "aria-activedescendant": 0,
              "aria-colcount": 0,
              "aria-colindex": 0,
              "aria-colspan": 0,
              "aria-controls": 0,
              "aria-describedby": 0,
              "aria-errormessage": 0,
              "aria-flowto": 0,
              "aria-labelledby": 0,
              "aria-owns": 0,
              "aria-posinset": 0,
              "aria-rowcount": 0,
              "aria-rowindex": 0,
              "aria-rowspan": 0,
              "aria-setsize": 0,
            },
            Oa = {},
            Yf = new RegExp("^(aria)-[" + we + "]*$"),
            Ro = new RegExp("^(aria)[A-Z][" + we + "]*$");
          function Wf(e, t) {
            {
              if (Yn.call(Oa, t) && Oa[t]) return !0;
              if (Ro.test(t)) {
                var a = "aria-" + t.slice(4).toLowerCase(),
                  i = Sv.hasOwnProperty(a) ? a : null;
                if (i == null)
                  return (
                    y(
                      "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                      t,
                    ),
                    (Oa[t] = !0),
                    !0
                  );
                if (t !== i)
                  return (
                    y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i),
                    (Oa[t] = !0),
                    !0
                  );
              }
              if (Yf.test(t)) {
                var u = t.toLowerCase(),
                  s = Sv.hasOwnProperty(u) ? u : null;
                if (s == null) return (Oa[t] = !0), !1;
                if (t !== s)
                  return (
                    y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s),
                    (Oa[t] = !0),
                    !0
                  );
              }
            }
            return !0;
          }
          function Ev(e, t) {
            {
              var a = [];
              for (var i in t) {
                var u = Wf(e, i);
                u || a.push(i);
              }
              var s = a
                .map(function (f) {
                  return "`" + f + "`";
                })
                .join(", ");
              a.length === 1
                ? y(
                    "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                    s,
                    e,
                  )
                : a.length > 1 &&
                  y(
                    "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                    s,
                    e,
                  );
            }
          }
          function Hs(e, t) {
            si(e, t) || Ev(e, t);
          }
          var yl = !1;
          function Qf(e, t) {
            {
              if (e !== "input" && e !== "textarea" && e !== "select") return;
              t != null &&
                t.value === null &&
                !yl &&
                ((yl = !0),
                e === "select" && t.multiple
                  ? y(
                      "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                      e,
                    )
                  : y(
                      "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                      e,
                    ));
            }
          }
          var If = function () {};
          {
            var Tn = {},
              Gf = /^on./,
              Cv = /^on[^A-Z]/,
              Tv = new RegExp("^(aria)-[" + we + "]*$"),
              Rv = new RegExp("^(aria)[A-Z][" + we + "]*$");
            If = function (e, t, a, i) {
              if (Yn.call(Tn, t) && Tn[t]) return !0;
              var u = t.toLowerCase();
              if (u === "onfocusin" || u === "onfocusout")
                return (
                  y(
                    "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.",
                  ),
                  (Tn[t] = !0),
                  !0
                );
              if (i != null) {
                var s = i.registrationNameDependencies,
                  f = i.possibleRegistrationNames;
                if (s.hasOwnProperty(t)) return !0;
                var p = f.hasOwnProperty(u) ? f[u] : null;
                if (p != null)
                  return (
                    y(
                      "Invalid event handler property `%s`. Did you mean `%s`?",
                      t,
                      p,
                    ),
                    (Tn[t] = !0),
                    !0
                  );
                if (Gf.test(t))
                  return (
                    y(
                      "Unknown event handler property `%s`. It will be ignored.",
                      t,
                    ),
                    (Tn[t] = !0),
                    !0
                  );
              } else if (Gf.test(t))
                return (
                  Cv.test(t) &&
                    y(
                      "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                      t,
                    ),
                  (Tn[t] = !0),
                  !0
                );
              if (Tv.test(t) || Rv.test(t)) return !0;
              if (u === "innerhtml")
                return (
                  y(
                    "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.",
                  ),
                  (Tn[t] = !0),
                  !0
                );
              if (u === "aria")
                return (
                  y(
                    "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.",
                  ),
                  (Tn[t] = !0),
                  !0
                );
              if (
                u === "is" &&
                a !== null &&
                a !== void 0 &&
                typeof a != "string"
              )
                return (
                  y(
                    "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
                    typeof a,
                  ),
                  (Tn[t] = !0),
                  !0
                );
              if (typeof a == "number" && isNaN(a))
                return (
                  y(
                    "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
                    t,
                  ),
                  (Tn[t] = !0),
                  !0
                );
              var h = zr(t),
                g = h !== null && h.type === Ba;
              if (Fs.hasOwnProperty(u)) {
                var E = Fs[u];
                if (E !== t)
                  return (
                    y("Invalid DOM property `%s`. Did you mean `%s`?", t, E),
                    (Tn[t] = !0),
                    !0
                  );
              } else if (!g && t !== u)
                return (
                  y(
                    "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
                    t,
                    u,
                  ),
                  (Tn[t] = !0),
                  !0
                );
              return typeof a == "boolean" && pr(t, a, h, !1)
                ? (a
                    ? y(
                        'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                        a,
                        t,
                        t,
                        a,
                        t,
                      )
                    : y(
                        'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                        a,
                        t,
                        t,
                        a,
                        t,
                        t,
                        t,
                      ),
                  (Tn[t] = !0),
                  !0)
                : g
                  ? !0
                  : pr(t, a, h, !1)
                    ? ((Tn[t] = !0), !1)
                    : ((a === "false" || a === "true") &&
                        h !== null &&
                        h.type === en &&
                        (y(
                          "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                          a,
                          t,
                          a === "false"
                            ? "The browser will interpret it as a truthy value."
                            : 'Although this works, it will not work as expected if you pass the string "false".',
                          t,
                          a,
                        ),
                        (Tn[t] = !0)),
                      !0);
            };
          }
          var xv = function (e, t, a) {
            {
              var i = [];
              for (var u in t) {
                var s = If(e, u, t[u], a);
                s || i.push(u);
              }
              var f = i
                .map(function (p) {
                  return "`" + p + "`";
                })
                .join(", ");
              i.length === 1
                ? y(
                    "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                    f,
                    e,
                  )
                : i.length > 1 &&
                  y(
                    "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                    f,
                    e,
                  );
            }
          };
          function wv(e, t, a) {
            si(e, t) || xv(e, t, a);
          }
          var ci = 1,
            xo = 2,
            gl = 4,
            my = ci | xo | gl,
            wo = null;
          function bo(e) {
            wo !== null &&
              y(
                "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.",
              ),
              (wo = e);
          }
          function yy() {
            wo === null &&
              y(
                "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.",
              ),
              (wo = null);
          }
          function bv(e) {
            return e === wo;
          }
          function Vs(e) {
            var t = e.target || e.srcElement || window;
            return (
              t.correspondingUseElement && (t = t.correspondingUseElement),
              t.nodeType === oi ? t.parentNode : t
            );
          }
          var xt = null,
            Fi = null,
            fi = null;
          function pu(e) {
            var t = Qu(e);
            if (t) {
              if (typeof xt != "function")
                throw new Error(
                  "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.",
                );
              var a = t.stateNode;
              if (a) {
                var i = Lh(a);
                xt(t.stateNode, t.type, i);
              }
            }
          }
          function _v(e) {
            xt = e;
          }
          function Bs(e) {
            Fi ? (fi ? fi.push(e) : (fi = [e])) : (Fi = e);
          }
          function _o() {
            return Fi !== null || fi !== null;
          }
          function Do() {
            if (Fi) {
              var e = Fi,
                t = fi;
              if (((Fi = null), (fi = null), pu(e), t))
                for (var a = 0; a < t.length; a++) pu(t[a]);
            }
          }
          var Sl = function (e, t) {
              return e(t);
            },
            Xf = function () {},
            Kf = !1;
          function gy() {
            var e = _o();
            e && (Xf(), Do());
          }
          function qf(e, t, a) {
            if (Kf) return e(t, a);
            Kf = !0;
            try {
              return Sl(e, t, a);
            } finally {
              (Kf = !1), gy();
            }
          }
          function Ps(e, t, a) {
            (Sl = e), (Xf = a);
          }
          function $s(e) {
            return (
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            );
          }
          function Jf(e, t, a) {
            switch (e) {
              case "onClick":
              case "onClickCapture":
              case "onDoubleClick":
              case "onDoubleClickCapture":
              case "onMouseDown":
              case "onMouseDownCapture":
              case "onMouseMove":
              case "onMouseMoveCapture":
              case "onMouseUp":
              case "onMouseUpCapture":
              case "onMouseEnter":
                return !!(a.disabled && $s(t));
              default:
                return !1;
            }
          }
          function El(e, t) {
            var a = e.stateNode;
            if (a === null) return null;
            var i = Lh(a);
            if (i === null) return null;
            var u = i[t];
            if (Jf(t, e.type, i)) return null;
            if (u && typeof u != "function")
              throw new Error(
                "Expected `" +
                  t +
                  "` listener to be a function, instead got a value of `" +
                  typeof u +
                  "` type.",
              );
            return u;
          }
          var ko = !1;
          if (gn)
            try {
              var Cl = {};
              Object.defineProperty(Cl, "passive", {
                get: function () {
                  ko = !0;
                },
              }),
                window.addEventListener("test", Cl, Cl),
                window.removeEventListener("test", Cl, Cl);
            } catch {
              ko = !1;
            }
          function Dv(e, t, a, i, u, s, f, p, h) {
            var g = Array.prototype.slice.call(arguments, 3);
            try {
              t.apply(a, g);
            } catch (E) {
              this.onError(E);
            }
          }
          var Zf = Dv;
          if (
            typeof window < "u" &&
            typeof window.dispatchEvent == "function" &&
            typeof document < "u" &&
            typeof document.createEvent == "function"
          ) {
            var ed = document.createElement("react");
            Zf = function (t, a, i, u, s, f, p, h, g) {
              if (typeof document > "u" || document === null)
                throw new Error(
                  "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.",
                );
              var E = document.createEvent("Event"),
                _ = !1,
                w = !0,
                M = window.event,
                z = Object.getOwnPropertyDescriptor(window, "event");
              function H() {
                ed.removeEventListener(V, De, !1),
                  typeof window.event < "u" &&
                    window.hasOwnProperty("event") &&
                    (window.event = M);
              }
              var le = Array.prototype.slice.call(arguments, 3);
              function De() {
                (_ = !0), H(), a.apply(i, le), (w = !1);
              }
              var Ce,
                rt = !1,
                Ze = !1;
              function L(N) {
                if (
                  ((Ce = N.error),
                  (rt = !0),
                  Ce === null && N.colno === 0 && N.lineno === 0 && (Ze = !0),
                  N.defaultPrevented && Ce != null && typeof Ce == "object")
                )
                  try {
                    Ce._suppressLogging = !0;
                  } catch {}
              }
              var V = "react-" + (t || "invokeguardedcallback");
              if (
                (window.addEventListener("error", L),
                ed.addEventListener(V, De, !1),
                E.initEvent(V, !1, !1),
                ed.dispatchEvent(E),
                z && Object.defineProperty(window, "event", z),
                _ &&
                  w &&
                  (rt
                    ? Ze &&
                      (Ce = new Error(
                        "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.",
                      ))
                    : (Ce = new Error(
                        `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`,
                      )),
                  this.onError(Ce)),
                window.removeEventListener("error", L),
                !_)
              )
                return H(), Dv.apply(this, arguments);
            };
          }
          var Sy = Zf,
            Hi = !1,
            Ma = null,
            Lo = !1,
            Vi = null,
            Ya = {
              onError: function (e) {
                (Hi = !0), (Ma = e);
              },
            };
          function Tl(e, t, a, i, u, s, f, p, h) {
            (Hi = !1), (Ma = null), Sy.apply(Ya, arguments);
          }
          function di(e, t, a, i, u, s, f, p, h) {
            if ((Tl.apply(this, arguments), Hi)) {
              var g = nd();
              Lo || ((Lo = !0), (Vi = g));
            }
          }
          function td() {
            if (Lo) {
              var e = Vi;
              throw ((Lo = !1), (Vi = null), e);
            }
          }
          function Ey() {
            return Hi;
          }
          function nd() {
            if (Hi) {
              var e = Ma;
              return (Hi = !1), (Ma = null), e;
            } else
              throw new Error(
                "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.",
              );
          }
          function ra(e) {
            return e._reactInternals;
          }
          function No(e) {
            return e._reactInternals !== void 0;
          }
          function vu(e, t) {
            e._reactInternals = t;
          }
          var be =
              /*                      */
              0,
            Bi =
              /*                */
              1,
            Ot =
              /*                    */
              2,
            Ye =
              /*                       */
              4,
            ft =
              /*                */
              16,
            vt =
              /*                 */
              32,
            Wa =
              /*                     */
              64,
            ze =
              /*                   */
              128,
            Yt =
              /*            */
              256,
            mr =
              /*                          */
              512,
            aa =
              /*                     */
              1024,
            At =
              /*                      */
              2048,
            ia =
              /*                    */
              4096,
            Pi =
              /*                   */
              8192,
            Oo =
              /*             */
              16384,
            Ys = At | Ye | Wa | mr | aa | Oo,
            kv =
              /*               */
              32767,
            Hr =
              /*                   */
              32768,
            Rn =
              /*                */
              65536,
            Mo =
              /* */
              131072,
            rd =
              /*                       */
              1048576,
            ad =
              /*                    */
              2097152,
            yr =
              /*                 */
              4194304,
            $i =
              /*                */
              8388608,
            gr =
              /*               */
              16777216,
            Rl =
              /*              */
              33554432,
            hu =
              // TODO: Remove Update flag from before mutation phase by re-landing Visibility
              // flag logic (see #20043)
              Ye | aa | 0,
            Sr = Ot | Ye | ft | vt | mr | ia | Pi,
            Gn = Ye | Wa | mr | Pi,
            la = At | ft,
            On = yr | $i | ad,
            pi = S.ReactCurrentOwner;
          function Vr(e) {
            var t = e,
              a = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
              var i = t;
              do
                (t = i),
                  (t.flags & (Ot | ia)) !== be && (a = t.return),
                  (i = t.return);
              while (i);
            }
            return t.tag === $ ? a : null;
          }
          function id(e) {
            if (e.tag === We) {
              var t = e.memoizedState;
              if (t === null) {
                var a = e.alternate;
                a !== null && (t = a.memoizedState);
              }
              if (t !== null) return t.dehydrated;
            }
            return null;
          }
          function Ws(e) {
            return e.tag === $ ? e.stateNode.containerInfo : null;
          }
          function ld(e) {
            return Vr(e) === e;
          }
          function Br(e) {
            {
              var t = pi.current;
              if (t !== null && t.tag === j) {
                var a = t,
                  i = a.stateNode;
                i._warnedAboutRefsInRender ||
                  y(
                    "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                    Be(a) || "A component",
                  ),
                  (i._warnedAboutRefsInRender = !0);
              }
            }
            var u = ra(e);
            return u ? Vr(u) === u : !1;
          }
          function Er(e) {
            if (Vr(e) !== e)
              throw new Error("Unable to find node on an unmounted component.");
          }
          function Mt(e) {
            var t = e.alternate;
            if (!t) {
              var a = Vr(e);
              if (a === null)
                throw new Error(
                  "Unable to find node on an unmounted component.",
                );
              return a !== e ? null : e;
            }
            for (var i = e, u = t; ; ) {
              var s = i.return;
              if (s === null) break;
              var f = s.alternate;
              if (f === null) {
                var p = s.return;
                if (p !== null) {
                  i = u = p;
                  continue;
                }
                break;
              }
              if (s.child === f.child) {
                for (var h = s.child; h; ) {
                  if (h === i) return Er(s), e;
                  if (h === u) return Er(s), t;
                  h = h.sibling;
                }
                throw new Error(
                  "Unable to find node on an unmounted component.",
                );
              }
              if (i.return !== u.return) (i = s), (u = f);
              else {
                for (var g = !1, E = s.child; E; ) {
                  if (E === i) {
                    (g = !0), (i = s), (u = f);
                    break;
                  }
                  if (E === u) {
                    (g = !0), (u = s), (i = f);
                    break;
                  }
                  E = E.sibling;
                }
                if (!g) {
                  for (E = f.child; E; ) {
                    if (E === i) {
                      (g = !0), (i = f), (u = s);
                      break;
                    }
                    if (E === u) {
                      (g = !0), (u = f), (i = s);
                      break;
                    }
                    E = E.sibling;
                  }
                  if (!g)
                    throw new Error(
                      "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.",
                    );
                }
              }
              if (i.alternate !== u)
                throw new Error(
                  "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
                );
            }
            if (i.tag !== $)
              throw new Error("Unable to find node on an unmounted component.");
            return i.stateNode.current === i ? e : t;
          }
          function ua(e) {
            var t = Mt(e);
            return t !== null ? ud(t) : null;
          }
          function ud(e) {
            if (e.tag === oe || e.tag === _e) return e;
            for (var t = e.child; t !== null; ) {
              var a = ud(t);
              if (a !== null) return a;
              t = t.sibling;
            }
            return null;
          }
          function Lv(e) {
            var t = Mt(e);
            return t !== null ? Qs(t) : null;
          }
          function Qs(e) {
            if (e.tag === oe || e.tag === _e) return e;
            for (var t = e.child; t !== null; ) {
              if (t.tag !== J) {
                var a = Qs(t);
                if (a !== null) return a;
              }
              t = t.sibling;
            }
            return null;
          }
          var Is = T.unstable_scheduleCallback,
            Nv = T.unstable_cancelCallback,
            Gs = T.unstable_shouldYield,
            Ov = T.unstable_requestPaint,
            Bt = T.unstable_now,
            od = T.unstable_getCurrentPriorityLevel,
            Xs = T.unstable_ImmediatePriority,
            xl = T.unstable_UserBlockingPriority,
            Qa = T.unstable_NormalPriority,
            Mv = T.unstable_LowPriority,
            Ks = T.unstable_IdlePriority,
            mu = T.unstable_yieldValue,
            Uv = T.unstable_setDisableYieldValue,
            vi = null,
            sn = null,
            re = null,
            oa = !1,
            Pr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
          function sd(e) {
            if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled) return !0;
            if (!t.supportsFiber)
              return (
                y(
                  "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools",
                ),
                !0
              );
            try {
              Fa &&
                (e = Ke({}, e, {
                  getLaneLabelMap: hi,
                  injectProfilingHooks: zv,
                })),
                (vi = t.inject(e)),
                (sn = t);
            } catch (a) {
              y("React instrumentation encountered an error: %s.", a);
            }
            return !!t.checkDCE;
          }
          function cd(e, t) {
            if (sn && typeof sn.onScheduleFiberRoot == "function")
              try {
                sn.onScheduleFiberRoot(vi, e, t);
              } catch (a) {
                oa ||
                  ((oa = !0),
                  y("React instrumentation encountered an error: %s", a));
              }
          }
          function yu(e, t) {
            if (sn && typeof sn.onCommitFiberRoot == "function")
              try {
                var a = (e.current.flags & ze) === ze;
                if (un) {
                  var i;
                  switch (t) {
                    case qt:
                      i = Xs;
                      break;
                    case yi:
                      i = xl;
                      break;
                    case Ia:
                      i = Qa;
                      break;
                    case ku:
                      i = Ks;
                      break;
                    default:
                      i = Qa;
                      break;
                  }
                  sn.onCommitFiberRoot(vi, e, i, a);
                }
              } catch (u) {
                oa ||
                  ((oa = !0),
                  y("React instrumentation encountered an error: %s", u));
              }
          }
          function sa(e) {
            if (sn && typeof sn.onPostCommitFiberRoot == "function")
              try {
                sn.onPostCommitFiberRoot(vi, e);
              } catch (t) {
                oa ||
                  ((oa = !0),
                  y("React instrumentation encountered an error: %s", t));
              }
          }
          function wl(e) {
            if (sn && typeof sn.onCommitFiberUnmount == "function")
              try {
                sn.onCommitFiberUnmount(vi, e);
              } catch (t) {
                oa ||
                  ((oa = !0),
                  y("React instrumentation encountered an error: %s", t));
              }
          }
          function rn(e) {
            if (
              (typeof mu == "function" && (Uv(e), A(e)),
              sn && typeof sn.setStrictMode == "function")
            )
              try {
                sn.setStrictMode(vi, e);
              } catch (t) {
                oa ||
                  ((oa = !0),
                  y("React instrumentation encountered an error: %s", t));
              }
          }
          function zv(e) {
            re = e;
          }
          function hi() {
            {
              for (
                var e = /* @__PURE__ */ new Map(), t = 1, a = 0;
                a < Fo;
                a++
              ) {
                var i = Ty(t);
                e.set(t, i), (t *= 2);
              }
              return e;
            }
          }
          function Yi(e) {
            re !== null &&
              typeof re.markCommitStarted == "function" &&
              re.markCommitStarted(e);
          }
          function qs() {
            re !== null &&
              typeof re.markCommitStopped == "function" &&
              re.markCommitStopped();
          }
          function gu(e) {
            re !== null &&
              typeof re.markComponentRenderStarted == "function" &&
              re.markComponentRenderStarted(e);
          }
          function Cr() {
            re !== null &&
              typeof re.markComponentRenderStopped == "function" &&
              re.markComponentRenderStopped();
          }
          function Wi(e) {
            re !== null &&
              typeof re.markComponentPassiveEffectMountStarted == "function" &&
              re.markComponentPassiveEffectMountStarted(e);
          }
          function Js() {
            re !== null &&
              typeof re.markComponentPassiveEffectMountStopped == "function" &&
              re.markComponentPassiveEffectMountStopped();
          }
          function Av(e) {
            re !== null &&
              typeof re.markComponentPassiveEffectUnmountStarted ==
                "function" &&
              re.markComponentPassiveEffectUnmountStarted(e);
          }
          function Zs() {
            re !== null &&
              typeof re.markComponentPassiveEffectUnmountStopped ==
                "function" &&
              re.markComponentPassiveEffectUnmountStopped();
          }
          function jv(e) {
            re !== null &&
              typeof re.markComponentLayoutEffectMountStarted == "function" &&
              re.markComponentLayoutEffectMountStarted(e);
          }
          function Uo() {
            re !== null &&
              typeof re.markComponentLayoutEffectMountStopped == "function" &&
              re.markComponentLayoutEffectMountStopped();
          }
          function Ua(e) {
            re !== null &&
              typeof re.markComponentLayoutEffectUnmountStarted == "function" &&
              re.markComponentLayoutEffectUnmountStarted(e);
          }
          function Su() {
            re !== null &&
              typeof re.markComponentLayoutEffectUnmountStopped == "function" &&
              re.markComponentLayoutEffectUnmountStopped();
          }
          function zo(e, t, a) {
            re !== null &&
              typeof re.markComponentErrored == "function" &&
              re.markComponentErrored(e, t, a);
          }
          function bl(e, t, a) {
            re !== null &&
              typeof re.markComponentSuspended == "function" &&
              re.markComponentSuspended(e, t, a);
          }
          function fd(e) {
            re !== null &&
              typeof re.markLayoutEffectsStarted == "function" &&
              re.markLayoutEffectsStarted(e);
          }
          function Eu() {
            re !== null &&
              typeof re.markLayoutEffectsStopped == "function" &&
              re.markLayoutEffectsStopped();
          }
          function Fv(e) {
            re !== null &&
              typeof re.markPassiveEffectsStarted == "function" &&
              re.markPassiveEffectsStarted(e);
          }
          function dd() {
            re !== null &&
              typeof re.markPassiveEffectsStopped == "function" &&
              re.markPassiveEffectsStopped();
          }
          function jt(e) {
            re !== null &&
              typeof re.markRenderStarted == "function" &&
              re.markRenderStarted(e);
          }
          function ec() {
            re !== null &&
              typeof re.markRenderYielded == "function" &&
              re.markRenderYielded();
          }
          function tc() {
            re !== null &&
              typeof re.markRenderStopped == "function" &&
              re.markRenderStopped();
          }
          function pd(e) {
            re !== null &&
              typeof re.markRenderScheduled == "function" &&
              re.markRenderScheduled(e);
          }
          function nc(e, t) {
            re !== null &&
              typeof re.markForceUpdateScheduled == "function" &&
              re.markForceUpdateScheduled(e, t);
          }
          function Ao(e, t) {
            re !== null &&
              typeof re.markStateUpdateScheduled == "function" &&
              re.markStateUpdateScheduled(e, t);
          }
          var ge =
              /*                         */
              0,
            Ee =
              /*                 */
              1,
            Ae =
              /*                    */
              2,
            qe =
              /*               */
              8,
            $r =
              /*              */
              16,
            Cu = Math.clz32 ? Math.clz32 : Xn,
            jo = Math.log,
            Cy = Math.LN2;
          function Xn(e) {
            var t = e >>> 0;
            return t === 0 ? 32 : (31 - ((jo(t) / Cy) | 0)) | 0;
          }
          var Fo = 31,
            Y =
              /*                        */
              0,
            an =
              /*                          */
              0,
            Re =
              /*                        */
              1,
            Mn =
              /*    */
              2,
            Yr =
              /*             */
              4,
            mi =
              /*            */
              8,
            ca =
              /*                     */
              16,
            Tu =
              /*                */
              32,
            _l =
              /*                       */
              4194240,
            Ru =
              /*                        */
              64,
            rc =
              /*                        */
              128,
            ac =
              /*                        */
              256,
            ic =
              /*                        */
              512,
            lc =
              /*                        */
              1024,
            uc =
              /*                        */
              2048,
            Dl =
              /*                        */
              4096,
            oc =
              /*                        */
              8192,
            xu =
              /*                        */
              16384,
            wu =
              /*                       */
              32768,
            sc =
              /*                       */
              65536,
            Ho =
              /*                       */
              131072,
            cc =
              /*                       */
              262144,
            fc =
              /*                       */
              524288,
            dc =
              /*                       */
              1048576,
            pc =
              /*                       */
              2097152,
            bu =
              /*                            */
              130023424,
            kl =
              /*                             */
              4194304,
            vc =
              /*                             */
              8388608,
            hc =
              /*                             */
              16777216,
            vd =
              /*                             */
              33554432,
            mc =
              /*                             */
              67108864,
            Hv = kl,
            Vo =
              /*          */
              134217728,
            hd =
              /*                          */
              268435455,
            _u =
              /*               */
              268435456,
            Qi =
              /*                        */
              536870912,
            Kn =
              /*                   */
              1073741824;
          function Ty(e) {
            {
              if (e & Re) return "Sync";
              if (e & Mn) return "InputContinuousHydration";
              if (e & Yr) return "InputContinuous";
              if (e & mi) return "DefaultHydration";
              if (e & ca) return "Default";
              if (e & Tu) return "TransitionHydration";
              if (e & _l) return "Transition";
              if (e & bu) return "Retry";
              if (e & Vo) return "SelectiveHydration";
              if (e & _u) return "IdleHydration";
              if (e & Qi) return "Idle";
              if (e & Kn) return "Offscreen";
            }
          }
          var Dt = -1,
            yc = Ru,
            Tr = kl;
          function Ll(e) {
            switch (Kt(e)) {
              case Re:
                return Re;
              case Mn:
                return Mn;
              case Yr:
                return Yr;
              case mi:
                return mi;
              case ca:
                return ca;
              case Tu:
                return Tu;
              case Ru:
              case rc:
              case ac:
              case ic:
              case lc:
              case uc:
              case Dl:
              case oc:
              case xu:
              case wu:
              case sc:
              case Ho:
              case cc:
              case fc:
              case dc:
              case pc:
                return e & _l;
              case kl:
              case vc:
              case hc:
              case vd:
              case mc:
                return e & bu;
              case Vo:
                return Vo;
              case _u:
                return _u;
              case Qi:
                return Qi;
              case Kn:
                return Kn;
              default:
                return (
                  y(
                    "Should have found matching lanes. This is a bug in React.",
                  ),
                  e
                );
            }
          }
          function Nl(e, t) {
            var a = e.pendingLanes;
            if (a === Y) return Y;
            var i = Y,
              u = e.suspendedLanes,
              s = e.pingedLanes,
              f = a & hd;
            if (f !== Y) {
              var p = f & ~u;
              if (p !== Y) i = Ll(p);
              else {
                var h = f & s;
                h !== Y && (i = Ll(h));
              }
            } else {
              var g = a & ~u;
              g !== Y ? (i = Ll(g)) : s !== Y && (i = Ll(s));
            }
            if (i === Y) return Y;
            if (
              t !== Y &&
              t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
              // bother waiting until the root is complete.
              (t & u) === Y
            ) {
              var E = Kt(i),
                _ = Kt(t);
              if (
                // Tests whether the next lane is equal or lower priority than the wip
                // one. This works because the bits decrease in priority as you go left.
                E >= _ || // Default priority updates should not interrupt transition updates. The
                // only difference between default updates and transition updates is that
                // default updates do not support refresh transitions.
                (E === ca && (_ & _l) !== Y)
              )
                return t;
            }
            (i & Yr) !== Y && (i |= a & ca);
            var w = e.entangledLanes;
            if (w !== Y)
              for (var M = e.entanglements, z = i & w; z > 0; ) {
                var H = Gi(z),
                  le = 1 << H;
                (i |= M[H]), (z &= ~le);
              }
            return i;
          }
          function Vv(e, t) {
            for (var a = e.eventTimes, i = Dt; t > 0; ) {
              var u = Gi(t),
                s = 1 << u,
                f = a[u];
              f > i && (i = f), (t &= ~s);
            }
            return i;
          }
          function Bv(e, t) {
            switch (e) {
              case Re:
              case Mn:
              case Yr:
                return t + 250;
              case mi:
              case ca:
              case Tu:
              case Ru:
              case rc:
              case ac:
              case ic:
              case lc:
              case uc:
              case Dl:
              case oc:
              case xu:
              case wu:
              case sc:
              case Ho:
              case cc:
              case fc:
              case dc:
              case pc:
                return t + 5e3;
              case kl:
              case vc:
              case hc:
              case vd:
              case mc:
                return Dt;
              case Vo:
              case _u:
              case Qi:
              case Kn:
                return Dt;
              default:
                return (
                  y(
                    "Should have found matching lanes. This is a bug in React.",
                  ),
                  Dt
                );
            }
          }
          function Pv(e, t) {
            for (
              var a = e.pendingLanes,
                i = e.suspendedLanes,
                u = e.pingedLanes,
                s = e.expirationTimes,
                f = a;
              f > 0;

            ) {
              var p = Gi(f),
                h = 1 << p,
                g = s[p];
              g === Dt
                ? ((h & i) === Y || (h & u) !== Y) && (s[p] = Bv(h, t))
                : g <= t && (e.expiredLanes |= h),
                (f &= ~h);
            }
          }
          function md(e) {
            return Ll(e.pendingLanes);
          }
          function Ii(e) {
            var t = e.pendingLanes & ~Kn;
            return t !== Y ? t : t & Kn ? Kn : Y;
          }
          function yd(e) {
            return (e & Re) !== Y;
          }
          function Bo(e) {
            return (e & hd) !== Y;
          }
          function $v(e) {
            return (e & bu) === e;
          }
          function Yv(e) {
            var t = Re | Yr | ca;
            return (e & t) === Y;
          }
          function Wv(e) {
            return (e & _l) === e;
          }
          function Po(e, t) {
            var a = Mn | Yr | mi | ca;
            return (t & a) !== Y;
          }
          function Qv(e, t) {
            return (t & e.expiredLanes) !== Y;
          }
          function gd(e) {
            return (e & _l) !== Y;
          }
          function Iv() {
            var e = yc;
            return (yc <<= 1), (yc & _l) === Y && (yc = Ru), e;
          }
          function Rr() {
            var e = Tr;
            return (Tr <<= 1), (Tr & bu) === Y && (Tr = kl), e;
          }
          function Kt(e) {
            return e & -e;
          }
          function Du(e) {
            return Kt(e);
          }
          function Gi(e) {
            return 31 - Cu(e);
          }
          function gc(e) {
            return Gi(e);
          }
          function xr(e, t) {
            return (e & t) !== Y;
          }
          function Ol(e, t) {
            return (e & t) === t;
          }
          function Pe(e, t) {
            return e | t;
          }
          function $o(e, t) {
            return e & ~t;
          }
          function Sc(e, t) {
            return e & t;
          }
          function Ry(e) {
            return e;
          }
          function Gv(e, t) {
            return e !== an && e < t ? e : t;
          }
          function Yo(e) {
            for (var t = [], a = 0; a < Fo; a++) t.push(e);
            return t;
          }
          function Ml(e, t, a) {
            (e.pendingLanes |= t),
              t !== Qi && ((e.suspendedLanes = Y), (e.pingedLanes = Y));
            var i = e.eventTimes,
              u = gc(t);
            i[u] = a;
          }
          function Xv(e, t) {
            (e.suspendedLanes |= t), (e.pingedLanes &= ~t);
            for (var a = e.expirationTimes, i = t; i > 0; ) {
              var u = Gi(i),
                s = 1 << u;
              (a[u] = Dt), (i &= ~s);
            }
          }
          function Ec(e, t, a) {
            e.pingedLanes |= e.suspendedLanes & t;
          }
          function Cc(e, t) {
            var a = e.pendingLanes & ~t;
            (e.pendingLanes = t),
              (e.suspendedLanes = Y),
              (e.pingedLanes = Y),
              (e.expiredLanes &= t),
              (e.mutableReadLanes &= t),
              (e.entangledLanes &= t);
            for (
              var i = e.entanglements,
                u = e.eventTimes,
                s = e.expirationTimes,
                f = a;
              f > 0;

            ) {
              var p = Gi(f),
                h = 1 << p;
              (i[p] = Y), (u[p] = Dt), (s[p] = Dt), (f &= ~h);
            }
          }
          function Sd(e, t) {
            for (
              var a = (e.entangledLanes |= t), i = e.entanglements, u = a;
              u;

            ) {
              var s = Gi(u),
                f = 1 << s;
              // Is this one of the newly entangled lanes?
              (f & t) | // Is this lane transitively entangled with the newly entangled lanes?
                (i[s] & t) && (i[s] |= t),
                (u &= ~f);
            }
          }
          function Kv(e, t) {
            var a = Kt(t),
              i;
            switch (a) {
              case Yr:
                i = Mn;
                break;
              case ca:
                i = mi;
                break;
              case Ru:
              case rc:
              case ac:
              case ic:
              case lc:
              case uc:
              case Dl:
              case oc:
              case xu:
              case wu:
              case sc:
              case Ho:
              case cc:
              case fc:
              case dc:
              case pc:
              case kl:
              case vc:
              case hc:
              case vd:
              case mc:
                i = Tu;
                break;
              case Qi:
                i = _u;
                break;
              default:
                i = an;
                break;
            }
            return (i & (e.suspendedLanes | t)) !== an ? an : i;
          }
          function Tc(e, t, a) {
            if (Pr)
              for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
                var u = gc(a),
                  s = 1 << u,
                  f = i[u];
                f.add(t), (a &= ~s);
              }
          }
          function Ed(e, t) {
            if (Pr)
              for (
                var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters;
                t > 0;

              ) {
                var u = gc(t),
                  s = 1 << u,
                  f = a[u];
                f.size > 0 &&
                  (f.forEach(function (p) {
                    var h = p.alternate;
                    (h === null || !i.has(h)) && i.add(p);
                  }),
                  f.clear()),
                  (t &= ~s);
              }
          }
          function Wo(e, t) {
            return null;
          }
          var qt = Re,
            yi = Yr,
            Ia = ca,
            ku = Qi,
            Lu = an;
          function fa() {
            return Lu;
          }
          function Wt(e) {
            Lu = e;
          }
          function qn(e, t) {
            var a = Lu;
            try {
              return (Lu = e), t();
            } finally {
              Lu = a;
            }
          }
          function xy(e, t) {
            return e !== 0 && e < t ? e : t;
          }
          function wy(e, t) {
            return e > t ? e : t;
          }
          function Nu(e, t) {
            return e !== 0 && e < t;
          }
          function Un(e) {
            var t = Kt(e);
            return Nu(qt, t) ? (Nu(yi, t) ? (Bo(t) ? Ia : ku) : yi) : qt;
          }
          function Rc(e) {
            var t = e.current.memoizedState;
            return t.isDehydrated;
          }
          var pe;
          function Ou(e) {
            pe = e;
          }
          function Cd(e) {
            pe(e);
          }
          var xc;
          function by(e) {
            xc = e;
          }
          var Mu;
          function wc(e) {
            Mu = e;
          }
          var bc;
          function qv(e) {
            bc = e;
          }
          var Td;
          function Jv(e) {
            Td = e;
          }
          var Qo = !1,
            Uu = [],
            Ft = null,
            xn = null,
            tr = null,
            zu = /* @__PURE__ */ new Map(),
            Au = /* @__PURE__ */ new Map(),
            wn = [],
            Zv = [
              "mousedown",
              "mouseup",
              "touchcancel",
              "touchend",
              "touchstart",
              "auxclick",
              "dblclick",
              "pointercancel",
              "pointerdown",
              "pointerup",
              "dragend",
              "dragstart",
              "drop",
              "compositionend",
              "compositionstart",
              "keydown",
              "keypress",
              "keyup",
              "input",
              "textInput",
              // Intentionally camelCase
              "copy",
              "cut",
              "paste",
              "click",
              "change",
              "contextmenu",
              "reset",
              "submit",
            ];
          function Ga(e) {
            return Zv.indexOf(e) > -1;
          }
          function _y(e, t, a, i, u) {
            return {
              blockedOn: e,
              domEventName: t,
              eventSystemFlags: a,
              nativeEvent: u,
              targetContainers: [i],
            };
          }
          function Rd(e, t) {
            switch (e) {
              case "focusin":
              case "focusout":
                Ft = null;
                break;
              case "dragenter":
              case "dragleave":
                xn = null;
                break;
              case "mouseover":
              case "mouseout":
                tr = null;
                break;
              case "pointerover":
              case "pointerout": {
                var a = t.pointerId;
                zu.delete(a);
                break;
              }
              case "gotpointercapture":
              case "lostpointercapture": {
                var i = t.pointerId;
                Au.delete(i);
                break;
              }
            }
          }
          function ju(e, t, a, i, u, s) {
            if (e === null || e.nativeEvent !== s) {
              var f = _y(t, a, i, u, s);
              if (t !== null) {
                var p = Qu(t);
                p !== null && xc(p);
              }
              return f;
            }
            e.eventSystemFlags |= i;
            var h = e.targetContainers;
            return u !== null && h.indexOf(u) === -1 && h.push(u), e;
          }
          function eh(e, t, a, i, u) {
            switch (t) {
              case "focusin": {
                var s = u;
                return (Ft = ju(Ft, e, t, a, i, s)), !0;
              }
              case "dragenter": {
                var f = u;
                return (xn = ju(xn, e, t, a, i, f)), !0;
              }
              case "mouseover": {
                var p = u;
                return (tr = ju(tr, e, t, a, i, p)), !0;
              }
              case "pointerover": {
                var h = u,
                  g = h.pointerId;
                return zu.set(g, ju(zu.get(g) || null, e, t, a, i, h)), !0;
              }
              case "gotpointercapture": {
                var E = u,
                  _ = E.pointerId;
                return Au.set(_, ju(Au.get(_) || null, e, t, a, i, E)), !0;
              }
            }
            return !1;
          }
          function xd(e) {
            var t = as(e.target);
            if (t !== null) {
              var a = Vr(t);
              if (a !== null) {
                var i = a.tag;
                if (i === We) {
                  var u = id(a);
                  if (u !== null) {
                    (e.blockedOn = u),
                      Td(e.priority, function () {
                        Mu(a);
                      });
                    return;
                  }
                } else if (i === $) {
                  var s = a.stateNode;
                  if (Rc(s)) {
                    e.blockedOn = Ws(a);
                    return;
                  }
                }
              }
            }
            e.blockedOn = null;
          }
          function Dy(e) {
            for (
              var t = bc(),
                a = {
                  blockedOn: null,
                  target: e,
                  priority: t,
                },
                i = 0;
              i < wn.length && Nu(t, wn[i].priority);
              i++
            );
            wn.splice(i, 0, a), i === 0 && xd(a);
          }
          function Ul(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; t.length > 0; ) {
              var a = t[0],
                i = Jn(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
              if (i === null) {
                var u = e.nativeEvent,
                  s = new u.constructor(u.type, u);
                bo(s), u.target.dispatchEvent(s), yy();
              } else {
                var f = Qu(i);
                return f !== null && xc(f), (e.blockedOn = i), !1;
              }
              t.shift();
            }
            return !0;
          }
          function _c(e, t, a) {
            Ul(e) && a.delete(t);
          }
          function da() {
            (Qo = !1),
              Ft !== null && Ul(Ft) && (Ft = null),
              xn !== null && Ul(xn) && (xn = null),
              tr !== null && Ul(tr) && (tr = null),
              zu.forEach(_c),
              Au.forEach(_c);
          }
          function Je(e, t) {
            e.blockedOn === t &&
              ((e.blockedOn = null),
              Qo ||
                ((Qo = !0),
                T.unstable_scheduleCallback(T.unstable_NormalPriority, da)));
          }
          function Qt(e) {
            if (Uu.length > 0) {
              Je(Uu[0], e);
              for (var t = 1; t < Uu.length; t++) {
                var a = Uu[t];
                a.blockedOn === e && (a.blockedOn = null);
              }
            }
            Ft !== null && Je(Ft, e),
              xn !== null && Je(xn, e),
              tr !== null && Je(tr, e);
            var i = function (p) {
              return Je(p, e);
            };
            zu.forEach(i), Au.forEach(i);
            for (var u = 0; u < wn.length; u++) {
              var s = wn[u];
              s.blockedOn === e && (s.blockedOn = null);
            }
            for (; wn.length > 0; ) {
              var f = wn[0];
              if (f.blockedOn !== null) break;
              xd(f), f.blockedOn === null && wn.shift();
            }
          }
          var Ut = S.ReactCurrentBatchConfig,
            cn = !0;
          function wr(e) {
            cn = !!e;
          }
          function Fu() {
            return cn;
          }
          function fn(e, t, a) {
            var i = Dc(t),
              u;
            switch (i) {
              case qt:
                u = Io;
                break;
              case yi:
                u = zl;
                break;
              case Ia:
              default:
                u = Hu;
                break;
            }
            return u.bind(null, t, a, e);
          }
          function Io(e, t, a, i) {
            var u = fa(),
              s = Ut.transition;
            Ut.transition = null;
            try {
              Wt(qt), Hu(e, t, a, i);
            } finally {
              Wt(u), (Ut.transition = s);
            }
          }
          function zl(e, t, a, i) {
            var u = fa(),
              s = Ut.transition;
            Ut.transition = null;
            try {
              Wt(yi), Hu(e, t, a, i);
            } finally {
              Wt(u), (Ut.transition = s);
            }
          }
          function Hu(e, t, a, i) {
            cn && wd(e, t, a, i);
          }
          function wd(e, t, a, i) {
            var u = Jn(e, t, a, i);
            if (u === null) {
              Wy(e, t, i, Xi, a), Rd(e, i);
              return;
            }
            if (eh(u, e, t, a, i)) {
              i.stopPropagation();
              return;
            }
            if ((Rd(e, i), t & gl && Ga(e))) {
              for (; u !== null; ) {
                var s = Qu(u);
                s !== null && Cd(s);
                var f = Jn(e, t, a, i);
                if ((f === null && Wy(e, t, i, Xi, a), f === u)) break;
                u = f;
              }
              u !== null && i.stopPropagation();
              return;
            }
            Wy(e, t, i, null, a);
          }
          var Xi = null;
          function Jn(e, t, a, i) {
            Xi = null;
            var u = Vs(i),
              s = as(u);
            if (s !== null) {
              var f = Vr(s);
              if (f === null) s = null;
              else {
                var p = f.tag;
                if (p === We) {
                  var h = id(f);
                  if (h !== null) return h;
                  s = null;
                } else if (p === $) {
                  var g = f.stateNode;
                  if (Rc(g)) return Ws(f);
                  s = null;
                } else f !== s && (s = null);
              }
            }
            return (Xi = s), null;
          }
          function Dc(e) {
            switch (e) {
              case "cancel":
              case "click":
              case "close":
              case "contextmenu":
              case "copy":
              case "cut":
              case "auxclick":
              case "dblclick":
              case "dragend":
              case "dragstart":
              case "drop":
              case "focusin":
              case "focusout":
              case "input":
              case "invalid":
              case "keydown":
              case "keypress":
              case "keyup":
              case "mousedown":
              case "mouseup":
              case "paste":
              case "pause":
              case "play":
              case "pointercancel":
              case "pointerdown":
              case "pointerup":
              case "ratechange":
              case "reset":
              case "resize":
              case "seeked":
              case "submit":
              case "touchcancel":
              case "touchend":
              case "touchstart":
              case "volumechange":
              case "change":
              case "selectionchange":
              case "textInput":
              case "compositionstart":
              case "compositionend":
              case "compositionupdate":
              case "beforeblur":
              case "afterblur":
              case "beforeinput":
              case "blur":
              case "fullscreenchange":
              case "focus":
              case "hashchange":
              case "popstate":
              case "select":
              case "selectstart":
                return qt;
              case "drag":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "mousemove":
              case "mouseout":
              case "mouseover":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "scroll":
              case "toggle":
              case "touchmove":
              case "wheel":
              case "mouseenter":
              case "mouseleave":
              case "pointerenter":
              case "pointerleave":
                return yi;
              case "message": {
                var t = od();
                switch (t) {
                  case Xs:
                    return qt;
                  case xl:
                    return yi;
                  case Qa:
                  case Mv:
                    return Ia;
                  case Ks:
                    return ku;
                  default:
                    return Ia;
                }
              }
              default:
                return Ia;
            }
          }
          function Vu(e, t, a) {
            return e.addEventListener(t, a, !1), a;
          }
          function gi(e, t, a) {
            return e.addEventListener(t, a, !0), a;
          }
          function kc(e, t, a, i) {
            return (
              e.addEventListener(t, a, {
                capture: !0,
                passive: i,
              }),
              a
            );
          }
          function bd(e, t, a, i) {
            return (
              e.addEventListener(t, a, {
                passive: i,
              }),
              a
            );
          }
          var pa = null,
            Bu = null,
            va = null;
          function Lc(e) {
            return (pa = e), (Bu = Xo()), !0;
          }
          function Go() {
            (pa = null), (Bu = null), (va = null);
          }
          function Nc() {
            if (va) return va;
            var e,
              t = Bu,
              a = t.length,
              i,
              u = Xo(),
              s = u.length;
            for (e = 0; e < a && t[e] === u[e]; e++);
            var f = a - e;
            for (i = 1; i <= f && t[a - i] === u[s - i]; i++);
            var p = i > 1 ? 1 - i : void 0;
            return (va = u.slice(e, p)), va;
          }
          function Xo() {
            return "value" in pa ? pa.value : pa.textContent;
          }
          function Al(e) {
            var t,
              a = e.keyCode;
            return (
              "charCode" in e
                ? ((t = e.charCode), t === 0 && a === 13 && (t = 13))
                : (t = a),
              t === 10 && (t = 13),
              t >= 32 || t === 13 ? t : 0
            );
          }
          function bn() {
            return !0;
          }
          function Si() {
            return !1;
          }
          function Pt(e) {
            function t(a, i, u, s, f) {
              (this._reactName = a),
                (this._targetInst = u),
                (this.type = i),
                (this.nativeEvent = s),
                (this.target = f),
                (this.currentTarget = null);
              for (var p in e)
                if (e.hasOwnProperty(p)) {
                  var h = e[p];
                  h ? (this[p] = h(s)) : (this[p] = s[p]);
                }
              var g =
                s.defaultPrevented != null
                  ? s.defaultPrevented
                  : s.returnValue === !1;
              return (
                g
                  ? (this.isDefaultPrevented = bn)
                  : (this.isDefaultPrevented = Si),
                (this.isPropagationStopped = Si),
                this
              );
            }
            return (
              Ke(t.prototype, {
                preventDefault: function () {
                  this.defaultPrevented = !0;
                  var a = this.nativeEvent;
                  a &&
                    (a.preventDefault
                      ? a.preventDefault()
                      : typeof a.returnValue != "unknown" &&
                        (a.returnValue = !1),
                    (this.isDefaultPrevented = bn));
                },
                stopPropagation: function () {
                  var a = this.nativeEvent;
                  a &&
                    (a.stopPropagation
                      ? a.stopPropagation()
                      : typeof a.cancelBubble != "unknown" &&
                        (a.cancelBubble = !0),
                    (this.isPropagationStopped = bn));
                },
                /**
                 * We release all dispatched `SyntheticEvent`s after each event loop, adding
                 * them back into the pool. This allows a way to hold onto a reference that
                 * won't be added back into the pool.
                 */
                persist: function () {},
                /**
                 * Checks if this event should be released back into the pool.
                 *
                 * @return {boolean} True if this should not be released, false otherwise.
                 */
                isPersistent: bn,
              }),
              t
            );
          }
          var dn = {
              eventPhase: 0,
              bubbles: 0,
              cancelable: 0,
              timeStamp: function (e) {
                return e.timeStamp || Date.now();
              },
              defaultPrevented: 0,
              isTrusted: 0,
            },
            Oc = Pt(dn),
            jl = Ke({}, dn, {
              view: 0,
              detail: 0,
            }),
            _d = Pt(jl),
            Dd,
            Xa,
            Pu;
          function kd(e) {
            e !== Pu &&
              (Pu && e.type === "mousemove"
                ? ((Dd = e.screenX - Pu.screenX), (Xa = e.screenY - Pu.screenY))
                : ((Dd = 0), (Xa = 0)),
              (Pu = e));
          }
          var Ka = Ke({}, jl, {
              screenX: 0,
              screenY: 0,
              clientX: 0,
              clientY: 0,
              pageX: 0,
              pageY: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              getModifierState: Ld,
              button: 0,
              buttons: 0,
              relatedTarget: function (e) {
                return e.relatedTarget === void 0
                  ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                  : e.relatedTarget;
              },
              movementX: function (e) {
                return "movementX" in e ? e.movementX : (kd(e), Dd);
              },
              movementY: function (e) {
                return "movementY" in e ? e.movementY : Xa;
              },
            }),
            Mc = Pt(Ka),
            Fl = Ke({}, Ka, {
              dataTransfer: 0,
            }),
            th = Pt(Fl),
            nh = Ke({}, jl, {
              relatedTarget: 0,
            }),
            Ko = Pt(nh),
            Uc = Ke({}, dn, {
              animationName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            }),
            ky = Pt(Uc),
            Ly = Ke({}, dn, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            }),
            rh = Pt(Ly),
            ah = Ke({}, dn, {
              data: 0,
            }),
            Ki = Pt(ah),
            Ny = Ki,
            $u = {
              Esc: "Escape",
              Spacebar: " ",
              Left: "ArrowLeft",
              Up: "ArrowUp",
              Right: "ArrowRight",
              Down: "ArrowDown",
              Del: "Delete",
              Win: "OS",
              Menu: "ContextMenu",
              Apps: "ContextMenu",
              Scroll: "ScrollLock",
              MozPrintableKey: "Unidentified",
            },
            ih = {
              8: "Backspace",
              9: "Tab",
              12: "Clear",
              13: "Enter",
              16: "Shift",
              17: "Control",
              18: "Alt",
              19: "Pause",
              20: "CapsLock",
              27: "Escape",
              32: " ",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "ArrowLeft",
              38: "ArrowUp",
              39: "ArrowRight",
              40: "ArrowDown",
              45: "Insert",
              46: "Delete",
              112: "F1",
              113: "F2",
              114: "F3",
              115: "F4",
              116: "F5",
              117: "F6",
              118: "F7",
              119: "F8",
              120: "F9",
              121: "F10",
              122: "F11",
              123: "F12",
              144: "NumLock",
              145: "ScrollLock",
              224: "Meta",
            };
          function It(e) {
            if (e.key) {
              var t = $u[e.key] || e.key;
              if (t !== "Unidentified") return t;
            }
            if (e.type === "keypress") {
              var a = Al(e);
              return a === 13 ? "Enter" : String.fromCharCode(a);
            }
            return e.type === "keydown" || e.type === "keyup"
              ? ih[e.keyCode] || "Unidentified"
              : "";
          }
          var Oy = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
          function lh(e) {
            var t = this,
              a = t.nativeEvent;
            if (a.getModifierState) return a.getModifierState(e);
            var i = Oy[e];
            return i ? !!a[i] : !1;
          }
          function Ld(e) {
            return lh;
          }
          var My = Ke({}, jl, {
              key: It,
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: Ld,
              // Legacy Interface
              charCode: function (e) {
                return e.type === "keypress" ? Al(e) : 0;
              },
              keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup"
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return e.type === "keypress"
                  ? Al(e)
                  : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
              },
            }),
            uh = Pt(My),
            oh = Ke({}, Ka, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
            sh = Pt(oh),
            ha = Ke({}, jl, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Ld,
            }),
            Nd = Pt(ha),
            Uy = Ke({}, dn, {
              propertyName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            }),
            qi = Pt(Uy),
            zc = Ke({}, Ka, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
                    "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
                    "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
                      "wheelDelta" in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              // Browsers without "deltaMode" is reporting in raw wheel delta where one
              // notch on the scroll is always +/- 120, roughly equivalent to pixels.
              // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
              // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
              deltaMode: 0,
            }),
            Hl = Pt(zc),
            Ac = [9, 13, 27, 32],
            jc = 229,
            qo = gn && "CompositionEvent" in window,
            Jo = null;
          gn && "documentMode" in document && (Jo = document.documentMode);
          var Od = gn && "TextEvent" in window && !Jo,
            ch = gn && (!qo || (Jo && Jo > 8 && Jo <= 11)),
            Md = 32,
            Ud = String.fromCharCode(Md);
          function Fc() {
            dr("onBeforeInput", [
              "compositionend",
              "keypress",
              "textInput",
              "paste",
            ]),
              dr("onCompositionEnd", [
                "compositionend",
                "focusout",
                "keydown",
                "keypress",
                "keyup",
                "mousedown",
              ]),
              dr("onCompositionStart", [
                "compositionstart",
                "focusout",
                "keydown",
                "keypress",
                "keyup",
                "mousedown",
              ]),
              dr("onCompositionUpdate", [
                "compositionupdate",
                "focusout",
                "keydown",
                "keypress",
                "keyup",
                "mousedown",
              ]);
          }
          var Zo = !1;
          function fh(e) {
            return (
              (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
              !(e.ctrlKey && e.altKey)
            );
          }
          function zd(e) {
            switch (e) {
              case "compositionstart":
                return "onCompositionStart";
              case "compositionend":
                return "onCompositionEnd";
              case "compositionupdate":
                return "onCompositionUpdate";
            }
          }
          function zy(e, t) {
            return e === "keydown" && t.keyCode === jc;
          }
          function Ad(e, t) {
            switch (e) {
              case "keyup":
                return Ac.indexOf(t.keyCode) !== -1;
              case "keydown":
                return t.keyCode !== jc;
              case "keypress":
              case "mousedown":
              case "focusout":
                return !0;
              default:
                return !1;
            }
          }
          function Hc(e) {
            var t = e.detail;
            return typeof t == "object" && "data" in t ? t.data : null;
          }
          function es(e) {
            return e.locale === "ko";
          }
          var Ji = !1;
          function Vc(e, t, a, i, u) {
            var s, f;
            if (
              (qo
                ? (s = zd(t))
                : Ji
                  ? Ad(t, i) && (s = "onCompositionEnd")
                  : zy(t, i) && (s = "onCompositionStart"),
              !s)
            )
              return null;
            ch &&
              !es(i) &&
              (!Ji && s === "onCompositionStart"
                ? (Ji = Lc(u))
                : s === "onCompositionEnd" && Ji && (f = Nc()));
            var p = yh(a, s);
            if (p.length > 0) {
              var h = new Ki(s, t, null, i, u);
              if (
                (e.push({
                  event: h,
                  listeners: p,
                }),
                f)
              )
                h.data = f;
              else {
                var g = Hc(i);
                g !== null && (h.data = g);
              }
            }
          }
          function dh(e, t) {
            switch (e) {
              case "compositionend":
                return Hc(t);
              case "keypress":
                var a = t.which;
                return a !== Md ? null : ((Zo = !0), Ud);
              case "textInput":
                var i = t.data;
                return i === Ud && Zo ? null : i;
              default:
                return null;
            }
          }
          function Ay(e, t) {
            if (Ji) {
              if (e === "compositionend" || (!qo && Ad(e, t))) {
                var a = Nc();
                return Go(), (Ji = !1), a;
              }
              return null;
            }
            switch (e) {
              case "paste":
                return null;
              case "keypress":
                if (!fh(t)) {
                  if (t.char && t.char.length > 1) return t.char;
                  if (t.which) return String.fromCharCode(t.which);
                }
                return null;
              case "compositionend":
                return ch && !es(t) ? null : t.data;
              default:
                return null;
            }
          }
          function Bc(e, t, a, i, u) {
            var s;
            if ((Od ? (s = dh(t, i)) : (s = Ay(t, i)), !s)) return null;
            var f = yh(a, "onBeforeInput");
            if (f.length > 0) {
              var p = new Ny("onBeforeInput", "beforeinput", null, i, u);
              e.push({
                event: p,
                listeners: f,
              }),
                (p.data = s);
            }
          }
          function jy(e, t, a, i, u, s, f) {
            Vc(e, t, a, i, u), Bc(e, t, a, i, u);
          }
          var ts = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
          function ph(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!ts[e.type] : t === "textarea";
          }
          /**
           * Checks if an event is supported in the current execution environment.
           *
           * NOTE: This will not work correctly for non-generic events such as `change`,
           * `reset`, `load`, `error`, and `select`.
           *
           * Borrows from Modernizr.
           *
           * @param {string} eventNameSuffix Event name, e.g. "click".
           * @return {boolean} True if the event is supported.
           * @internal
           * @license Modernizr 3.0.0pre (Custom Build) | MIT
           */
          function Pc(e) {
            if (!gn) return !1;
            var t = "on" + e,
              a = t in document;
            if (!a) {
              var i = document.createElement("div");
              i.setAttribute(t, "return;"), (a = typeof i[t] == "function");
            }
            return a;
          }
          function n() {
            dr("onChange", [
              "change",
              "click",
              "focusin",
              "focusout",
              "input",
              "keydown",
              "keyup",
              "selectionchange",
            ]);
          }
          function r(e, t, a, i) {
            Bs(i);
            var u = yh(t, "onChange");
            if (u.length > 0) {
              var s = new Oc("onChange", "change", null, a, i);
              e.push({
                event: s,
                listeners: u,
              });
            }
          }
          var l = null,
            o = null;
          function c(e) {
            var t = e.nodeName && e.nodeName.toLowerCase();
            return t === "select" || (t === "input" && e.type === "file");
          }
          function d(e) {
            var t = [];
            r(t, o, e, Vs(e)), qf(m, t);
          }
          function m(e) {
            rE(e, 0);
          }
          function C(e) {
            var t = Gc(e);
            if (Xp(t)) return e;
          }
          function x(e, t) {
            if (e === "change") return t;
          }
          var U = !1;
          gn &&
            (U =
              Pc("input") &&
              (!document.documentMode || document.documentMode > 9));
          function Q(e, t) {
            (l = e), (o = t), l.attachEvent("onpropertychange", W);
          }
          function G() {
            l && (l.detachEvent("onpropertychange", W), (l = null), (o = null));
          }
          function W(e) {
            e.propertyName === "value" && C(o) && d(e);
          }
          function se(e, t, a) {
            e === "focusin" ? (G(), Q(t, a)) : e === "focusout" && G();
          }
          function ve(e, t) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown")
              return C(o);
          }
          function ye(e) {
            var t = e.nodeName;
            return (
              t &&
              t.toLowerCase() === "input" &&
              (e.type === "checkbox" || e.type === "radio")
            );
          }
          function Jt(e, t) {
            if (e === "click") return C(t);
          }
          function k(e, t) {
            if (e === "input" || e === "change") return C(t);
          }
          function b(e) {
            var t = e._wrapperState;
            !t ||
              !t.controlled ||
              e.type !== "number" ||
              Ai(e, "number", e.value);
          }
          function O(e, t, a, i, u, s, f) {
            var p = a ? Gc(a) : window,
              h,
              g;
            if (
              (c(p)
                ? (h = x)
                : ph(p)
                  ? U
                    ? (h = k)
                    : ((h = ve), (g = se))
                  : ye(p) && (h = Jt),
              h)
            ) {
              var E = h(t, a);
              if (E) {
                r(e, E, i, u);
                return;
              }
            }
            g && g(t, p, a), t === "focusout" && b(p);
          }
          function q() {
            qr("onMouseEnter", ["mouseout", "mouseover"]),
              qr("onMouseLeave", ["mouseout", "mouseover"]),
              qr("onPointerEnter", ["pointerout", "pointerover"]),
              qr("onPointerLeave", ["pointerout", "pointerover"]);
          }
          function Se(e, t, a, i, u, s, f) {
            var p = t === "mouseover" || t === "pointerover",
              h = t === "mouseout" || t === "pointerout";
            if (p && !bv(i)) {
              var g = i.relatedTarget || i.fromElement;
              if (g && (as(g) || Kd(g))) return;
            }
            if (!(!h && !p)) {
              var E;
              if (u.window === u) E = u;
              else {
                var _ = u.ownerDocument;
                _ ? (E = _.defaultView || _.parentWindow) : (E = window);
              }
              var w, M;
              if (h) {
                var z = i.relatedTarget || i.toElement;
                if (((w = a), (M = z ? as(z) : null), M !== null)) {
                  var H = Vr(M);
                  (M !== H || (M.tag !== oe && M.tag !== _e)) && (M = null);
                }
              } else (w = null), (M = a);
              if (w !== M) {
                var le = Mc,
                  De = "onMouseLeave",
                  Ce = "onMouseEnter",
                  rt = "mouse";
                (t === "pointerout" || t === "pointerover") &&
                  ((le = sh),
                  (De = "onPointerLeave"),
                  (Ce = "onPointerEnter"),
                  (rt = "pointer"));
                var Ze = w == null ? E : Gc(w),
                  L = M == null ? E : Gc(M),
                  V = new le(De, rt + "leave", w, i, u);
                (V.target = Ze), (V.relatedTarget = L);
                var N = null,
                  X = as(u);
                if (X === a) {
                  var de = new le(Ce, rt + "enter", M, i, u);
                  (de.target = L), (de.relatedTarget = Ze), (N = de);
                }
                xR(e, V, N, w, M);
              }
            }
          }
          function Ne(e, t) {
            return (
              (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
            );
          }
          var he = typeof Object.is == "function" ? Object.is : Ne;
          function Oe(e, t) {
            if (he(e, t)) return !0;
            if (
              typeof e != "object" ||
              e === null ||
              typeof t != "object" ||
              t === null
            )
              return !1;
            var a = Object.keys(e),
              i = Object.keys(t);
            if (a.length !== i.length) return !1;
            for (var u = 0; u < a.length; u++) {
              var s = a[u];
              if (!Yn.call(t, s) || !he(e[s], t[s])) return !1;
            }
            return !0;
          }
          function pn(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
          }
          function ut(e) {
            for (; e; ) {
              if (e.nextSibling) return e.nextSibling;
              e = e.parentNode;
            }
          }
          function Ei(e, t) {
            for (var a = pn(e), i = 0, u = 0; a; ) {
              if (a.nodeType === oi) {
                if (((u = i + a.textContent.length), i <= t && u >= t))
                  return {
                    node: a,
                    offset: t - i,
                  };
                i = u;
              }
              a = pn(ut(a));
            }
          }
          function Fy(e) {
            var t = e.ownerDocument,
              a = (t && t.defaultView) || window,
              i = a.getSelection && a.getSelection();
            if (!i || i.rangeCount === 0) return null;
            var u = i.anchorNode,
              s = i.anchorOffset,
              f = i.focusNode,
              p = i.focusOffset;
            try {
              u.nodeType, f.nodeType;
            } catch {
              return null;
            }
            return aR(e, u, s, f, p);
          }
          function aR(e, t, a, i, u) {
            var s = 0,
              f = -1,
              p = -1,
              h = 0,
              g = 0,
              E = e,
              _ = null;
            e: for (;;) {
              for (
                var w = null;
                E === t && (a === 0 || E.nodeType === oi) && (f = s + a),
                  E === i && (u === 0 || E.nodeType === oi) && (p = s + u),
                  E.nodeType === oi && (s += E.nodeValue.length),
                  (w = E.firstChild) !== null;

              )
                (_ = E), (E = w);
              for (;;) {
                if (E === e) break e;
                if (
                  (_ === t && ++h === a && (f = s),
                  _ === i && ++g === u && (p = s),
                  (w = E.nextSibling) !== null)
                )
                  break;
                (E = _), (_ = E.parentNode);
              }
              E = w;
            }
            return f === -1 || p === -1
              ? null
              : {
                  start: f,
                  end: p,
                };
          }
          function iR(e, t) {
            var a = e.ownerDocument || document,
              i = (a && a.defaultView) || window;
            if (i.getSelection) {
              var u = i.getSelection(),
                s = e.textContent.length,
                f = Math.min(t.start, s),
                p = t.end === void 0 ? f : Math.min(t.end, s);
              if (!u.extend && f > p) {
                var h = p;
                (p = f), (f = h);
              }
              var g = Ei(e, f),
                E = Ei(e, p);
              if (g && E) {
                if (
                  u.rangeCount === 1 &&
                  u.anchorNode === g.node &&
                  u.anchorOffset === g.offset &&
                  u.focusNode === E.node &&
                  u.focusOffset === E.offset
                )
                  return;
                var _ = a.createRange();
                _.setStart(g.node, g.offset),
                  u.removeAllRanges(),
                  f > p
                    ? (u.addRange(_), u.extend(E.node, E.offset))
                    : (_.setEnd(E.node, E.offset), u.addRange(_));
              }
            }
          }
          function W0(e) {
            return e && e.nodeType === oi;
          }
          function Q0(e, t) {
            return !e || !t
              ? !1
              : e === t
                ? !0
                : W0(e)
                  ? !1
                  : W0(t)
                    ? Q0(e, t.parentNode)
                    : "contains" in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1;
          }
          function lR(e) {
            return (
              e && e.ownerDocument && Q0(e.ownerDocument.documentElement, e)
            );
          }
          function uR(e) {
            try {
              return typeof e.contentWindow.location.href == "string";
            } catch {
              return !1;
            }
          }
          function I0() {
            for (var e = window, t = _s(); t instanceof e.HTMLIFrameElement; ) {
              if (uR(t)) e = t.contentWindow;
              else return t;
              t = _s(e.document);
            }
            return t;
          }
          function Hy(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return (
              t &&
              ((t === "input" &&
                (e.type === "text" ||
                  e.type === "search" ||
                  e.type === "tel" ||
                  e.type === "url" ||
                  e.type === "password")) ||
                t === "textarea" ||
                e.contentEditable === "true")
            );
          }
          function oR() {
            var e = I0();
            return {
              focusedElem: e,
              selectionRange: Hy(e) ? cR(e) : null,
            };
          }
          function sR(e) {
            var t = I0(),
              a = e.focusedElem,
              i = e.selectionRange;
            if (t !== a && lR(a)) {
              i !== null && Hy(a) && fR(a, i);
              for (var u = [], s = a; (s = s.parentNode); )
                s.nodeType === hr &&
                  u.push({
                    element: s,
                    left: s.scrollLeft,
                    top: s.scrollTop,
                  });
              typeof a.focus == "function" && a.focus();
              for (var f = 0; f < u.length; f++) {
                var p = u[f];
                (p.element.scrollLeft = p.left), (p.element.scrollTop = p.top);
              }
            }
          }
          function cR(e) {
            var t;
            return (
              "selectionStart" in e
                ? (t = {
                    start: e.selectionStart,
                    end: e.selectionEnd,
                  })
                : (t = Fy(e)),
              t || {
                start: 0,
                end: 0,
              }
            );
          }
          function fR(e, t) {
            var a = t.start,
              i = t.end;
            i === void 0 && (i = a),
              "selectionStart" in e
                ? ((e.selectionStart = a),
                  (e.selectionEnd = Math.min(i, e.value.length)))
                : iR(e, t);
          }
          var dR =
            gn && "documentMode" in document && document.documentMode <= 11;
          function pR() {
            dr("onSelect", [
              "focusout",
              "contextmenu",
              "dragend",
              "focusin",
              "keydown",
              "keyup",
              "mousedown",
              "mouseup",
              "selectionchange",
            ]);
          }
          var $c = null,
            Vy = null,
            jd = null,
            By = !1;
          function vR(e) {
            if ("selectionStart" in e && Hy(e))
              return {
                start: e.selectionStart,
                end: e.selectionEnd,
              };
            var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
              a = t.getSelection();
            return {
              anchorNode: a.anchorNode,
              anchorOffset: a.anchorOffset,
              focusNode: a.focusNode,
              focusOffset: a.focusOffset,
            };
          }
          function hR(e) {
            return e.window === e
              ? e.document
              : e.nodeType === Na
                ? e
                : e.ownerDocument;
          }
          function G0(e, t, a) {
            var i = hR(a);
            if (!(By || $c == null || $c !== _s(i))) {
              var u = vR($c);
              if (!jd || !Oe(jd, u)) {
                jd = u;
                var s = yh(Vy, "onSelect");
                if (s.length > 0) {
                  var f = new Oc("onSelect", "select", null, t, a);
                  e.push({
                    event: f,
                    listeners: s,
                  }),
                    (f.target = $c);
                }
              }
            }
          }
          function mR(e, t, a, i, u, s, f) {
            var p = a ? Gc(a) : window;
            switch (t) {
              case "focusin":
                (ph(p) || p.contentEditable === "true") &&
                  (($c = p), (Vy = a), (jd = null));
                break;
              case "focusout":
                ($c = null), (Vy = null), (jd = null);
                break;
              case "mousedown":
                By = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (By = !1), G0(e, i, u);
                break;
              case "selectionchange":
                if (dR) break;
              case "keydown":
              case "keyup":
                G0(e, i, u);
            }
          }
          function vh(e, t) {
            var a = {};
            return (
              (a[e.toLowerCase()] = t.toLowerCase()),
              (a["Webkit" + e] = "webkit" + t),
              (a["Moz" + e] = "moz" + t),
              a
            );
          }
          var Yc = {
              animationend: vh("Animation", "AnimationEnd"),
              animationiteration: vh("Animation", "AnimationIteration"),
              animationstart: vh("Animation", "AnimationStart"),
              transitionend: vh("Transition", "TransitionEnd"),
            },
            Py = {},
            X0 = {};
          gn &&
            ((X0 = document.createElement("div").style),
            "AnimationEvent" in window ||
              (delete Yc.animationend.animation,
              delete Yc.animationiteration.animation,
              delete Yc.animationstart.animation),
            "TransitionEvent" in window || delete Yc.transitionend.transition);
          function hh(e) {
            if (Py[e]) return Py[e];
            if (!Yc[e]) return e;
            var t = Yc[e];
            for (var a in t)
              if (t.hasOwnProperty(a) && a in X0) return (Py[e] = t[a]);
            return e;
          }
          var K0 = hh("animationend"),
            q0 = hh("animationiteration"),
            J0 = hh("animationstart"),
            Z0 = hh("transitionend"),
            eE = /* @__PURE__ */ new Map(),
            tE = [
              "abort",
              "auxClick",
              "cancel",
              "canPlay",
              "canPlayThrough",
              "click",
              "close",
              "contextMenu",
              "copy",
              "cut",
              "drag",
              "dragEnd",
              "dragEnter",
              "dragExit",
              "dragLeave",
              "dragOver",
              "dragStart",
              "drop",
              "durationChange",
              "emptied",
              "encrypted",
              "ended",
              "error",
              "gotPointerCapture",
              "input",
              "invalid",
              "keyDown",
              "keyPress",
              "keyUp",
              "load",
              "loadedData",
              "loadedMetadata",
              "loadStart",
              "lostPointerCapture",
              "mouseDown",
              "mouseMove",
              "mouseOut",
              "mouseOver",
              "mouseUp",
              "paste",
              "pause",
              "play",
              "playing",
              "pointerCancel",
              "pointerDown",
              "pointerMove",
              "pointerOut",
              "pointerOver",
              "pointerUp",
              "progress",
              "rateChange",
              "reset",
              "resize",
              "seeked",
              "seeking",
              "stalled",
              "submit",
              "suspend",
              "timeUpdate",
              "touchCancel",
              "touchEnd",
              "touchStart",
              "volumeChange",
              "scroll",
              "toggle",
              "touchMove",
              "waiting",
              "wheel",
            ];
          function Yu(e, t) {
            eE.set(e, t), dr(t, [e]);
          }
          function yR() {
            for (var e = 0; e < tE.length; e++) {
              var t = tE[e],
                a = t.toLowerCase(),
                i = t[0].toUpperCase() + t.slice(1);
              Yu(a, "on" + i);
            }
            Yu(K0, "onAnimationEnd"),
              Yu(q0, "onAnimationIteration"),
              Yu(J0, "onAnimationStart"),
              Yu("dblclick", "onDoubleClick"),
              Yu("focusin", "onFocus"),
              Yu("focusout", "onBlur"),
              Yu(Z0, "onTransitionEnd");
          }
          function gR(e, t, a, i, u, s, f) {
            var p = eE.get(t);
            if (p !== void 0) {
              var h = Oc,
                g = t;
              switch (t) {
                case "keypress":
                  if (Al(i) === 0) return;
                case "keydown":
                case "keyup":
                  h = uh;
                  break;
                case "focusin":
                  (g = "focus"), (h = Ko);
                  break;
                case "focusout":
                  (g = "blur"), (h = Ko);
                  break;
                case "beforeblur":
                case "afterblur":
                  h = Ko;
                  break;
                case "click":
                  if (i.button === 2) return;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  h = Mc;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  h = th;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  h = Nd;
                  break;
                case K0:
                case q0:
                case J0:
                  h = ky;
                  break;
                case Z0:
                  h = qi;
                  break;
                case "scroll":
                  h = _d;
                  break;
                case "wheel":
                  h = Hl;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  h = rh;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  h = sh;
                  break;
              }
              var E = (s & gl) !== 0;
              {
                var _ =
                    !E && // TODO: ideally, we'd eventually add all events from
                    // nonDelegatedEvents list in DOMPluginEventSystem.
                    // Then we can remove this special list.
                    // This is a breaking change that can wait until React 18.
                    t === "scroll",
                  w = TR(a, p, i.type, E, _);
                if (w.length > 0) {
                  var M = new h(p, g, null, i, u);
                  e.push({
                    event: M,
                    listeners: w,
                  });
                }
              }
            }
          }
          yR(), q(), n(), pR(), Fc();
          function SR(e, t, a, i, u, s, f) {
            gR(e, t, a, i, u, s);
            var p = (s & my) === 0;
            p &&
              (Se(e, t, a, i, u),
              O(e, t, a, i, u),
              mR(e, t, a, i, u),
              jy(e, t, a, i, u));
          }
          var Fd = [
              "abort",
              "canplay",
              "canplaythrough",
              "durationchange",
              "emptied",
              "encrypted",
              "ended",
              "error",
              "loadeddata",
              "loadedmetadata",
              "loadstart",
              "pause",
              "play",
              "playing",
              "progress",
              "ratechange",
              "resize",
              "seeked",
              "seeking",
              "stalled",
              "suspend",
              "timeupdate",
              "volumechange",
              "waiting",
            ],
            $y = new Set(
              ["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(
                Fd,
              ),
            );
          function nE(e, t, a) {
            var i = e.type || "unknown-event";
            (e.currentTarget = a),
              di(i, t, void 0, e),
              (e.currentTarget = null);
          }
          function ER(e, t, a) {
            var i;
            if (a)
              for (var u = t.length - 1; u >= 0; u--) {
                var s = t[u],
                  f = s.instance,
                  p = s.currentTarget,
                  h = s.listener;
                if (f !== i && e.isPropagationStopped()) return;
                nE(e, h, p), (i = f);
              }
            else
              for (var g = 0; g < t.length; g++) {
                var E = t[g],
                  _ = E.instance,
                  w = E.currentTarget,
                  M = E.listener;
                if (_ !== i && e.isPropagationStopped()) return;
                nE(e, M, w), (i = _);
              }
          }
          function rE(e, t) {
            for (var a = (t & gl) !== 0, i = 0; i < e.length; i++) {
              var u = e[i],
                s = u.event,
                f = u.listeners;
              ER(s, f, a);
            }
            td();
          }
          function CR(e, t, a, i, u) {
            var s = Vs(a),
              f = [];
            SR(f, e, i, a, s, t), rE(f, t);
          }
          function $t(e, t) {
            $y.has(e) ||
              y(
                'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
                e,
              );
            var a = !1,
              i = qx(t),
              u = wR(e);
            i.has(u) || (aE(t, e, xo, a), i.add(u));
          }
          function Yy(e, t, a) {
            $y.has(e) &&
              !t &&
              y(
                'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
                e,
              );
            var i = 0;
            t && (i |= gl), aE(a, e, i, t);
          }
          var mh = "_reactListening" + Math.random().toString(36).slice(2);
          function Hd(e) {
            if (!e[mh]) {
              (e[mh] = !0),
                $n.forEach(function (a) {
                  a !== "selectionchange" &&
                    ($y.has(a) || Yy(a, !1, e), Yy(a, !0, e));
                });
              var t = e.nodeType === Na ? e : e.ownerDocument;
              t !== null &&
                (t[mh] || ((t[mh] = !0), Yy("selectionchange", !1, t)));
            }
          }
          function aE(e, t, a, i, u) {
            var s = fn(e, t, a),
              f = void 0;
            ko &&
              (t === "touchstart" || t === "touchmove" || t === "wheel") &&
              (f = !0),
              (e = e),
              i
                ? f !== void 0
                  ? kc(e, t, s, f)
                  : gi(e, t, s)
                : f !== void 0
                  ? bd(e, t, s, f)
                  : Vu(e, t, s);
          }
          function iE(e, t) {
            return e === t || (e.nodeType === nn && e.parentNode === t);
          }
          function Wy(e, t, a, i, u) {
            var s = i;
            if (!(t & ci) && !(t & xo)) {
              var f = u;
              if (i !== null) {
                var p = i;
                e: for (;;) {
                  if (p === null) return;
                  var h = p.tag;
                  if (h === $ || h === J) {
                    var g = p.stateNode.containerInfo;
                    if (iE(g, f)) break;
                    if (h === J)
                      for (var E = p.return; E !== null; ) {
                        var _ = E.tag;
                        if (_ === $ || _ === J) {
                          var w = E.stateNode.containerInfo;
                          if (iE(w, f)) return;
                        }
                        E = E.return;
                      }
                    for (; g !== null; ) {
                      var M = as(g);
                      if (M === null) return;
                      var z = M.tag;
                      if (z === oe || z === _e) {
                        p = s = M;
                        continue e;
                      }
                      g = g.parentNode;
                    }
                  }
                  p = p.return;
                }
              }
            }
            qf(function () {
              return CR(e, t, a, s);
            });
          }
          function Vd(e, t, a) {
            return {
              instance: e,
              listener: t,
              currentTarget: a,
            };
          }
          function TR(e, t, a, i, u, s) {
            for (
              var f = t !== null ? t + "Capture" : null,
                p = i ? f : t,
                h = [],
                g = e,
                E = null;
              g !== null;

            ) {
              var _ = g,
                w = _.stateNode,
                M = _.tag;
              if (M === oe && w !== null && ((E = w), p !== null)) {
                var z = El(g, p);
                z != null && h.push(Vd(g, z, E));
              }
              if (u) break;
              g = g.return;
            }
            return h;
          }
          function yh(e, t) {
            for (var a = t + "Capture", i = [], u = e; u !== null; ) {
              var s = u,
                f = s.stateNode,
                p = s.tag;
              if (p === oe && f !== null) {
                var h = f,
                  g = El(u, a);
                g != null && i.unshift(Vd(u, g, h));
                var E = El(u, t);
                E != null && i.push(Vd(u, E, h));
              }
              u = u.return;
            }
            return i;
          }
          function Wc(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== oe);
            return e || null;
          }
          function RR(e, t) {
            for (var a = e, i = t, u = 0, s = a; s; s = Wc(s)) u++;
            for (var f = 0, p = i; p; p = Wc(p)) f++;
            for (; u - f > 0; ) (a = Wc(a)), u--;
            for (; f - u > 0; ) (i = Wc(i)), f--;
            for (var h = u; h--; ) {
              if (a === i || (i !== null && a === i.alternate)) return a;
              (a = Wc(a)), (i = Wc(i));
            }
            return null;
          }
          function lE(e, t, a, i, u) {
            for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
              var h = p,
                g = h.alternate,
                E = h.stateNode,
                _ = h.tag;
              if (g !== null && g === i) break;
              if (_ === oe && E !== null) {
                var w = E;
                if (u) {
                  var M = El(p, s);
                  M != null && f.unshift(Vd(p, M, w));
                } else if (!u) {
                  var z = El(p, s);
                  z != null && f.push(Vd(p, z, w));
                }
              }
              p = p.return;
            }
            f.length !== 0 &&
              e.push({
                event: t,
                listeners: f,
              });
          }
          function xR(e, t, a, i, u) {
            var s = i && u ? RR(i, u) : null;
            i !== null && lE(e, t, i, s, !1),
              u !== null && a !== null && lE(e, a, u, s, !0);
          }
          function wR(e, t) {
            return e + "__bubble";
          }
          var ma = !1,
            Bd = "dangerouslySetInnerHTML",
            gh = "suppressContentEditableWarning",
            Wu = "suppressHydrationWarning",
            uE = "autoFocus",
            ns = "children",
            rs = "style",
            Sh = "__html",
            Qy,
            Eh,
            Pd,
            oE,
            Ch,
            sE,
            cE;
          (Qy = {
            // There are working polyfills for <dialog>. Let people use it.
            dialog: !0,
            // Electron ships a custom <webview> tag to display external web content in
            // an isolated frame and process.
            // This tag is not present in non Electron environments such as JSDom which
            // is often used for testing purposes.
            // @see https://electronjs.org/docs/api/webview-tag
            webview: !0,
          }),
            (Eh = function (e, t) {
              Hs(e, t),
                Qf(e, t),
                wv(e, t, {
                  registrationNameDependencies: fr,
                  possibleRegistrationNames: Ha,
                });
            }),
            (sE = gn && !document.documentMode),
            (Pd = function (e, t, a) {
              if (!ma) {
                var i = Th(a),
                  u = Th(t);
                u !== i &&
                  ((ma = !0),
                  y(
                    "Prop `%s` did not match. Server: %s Client: %s",
                    e,
                    JSON.stringify(u),
                    JSON.stringify(i),
                  ));
              }
            }),
            (oE = function (e) {
              if (!ma) {
                ma = !0;
                var t = [];
                e.forEach(function (a) {
                  t.push(a);
                }),
                  y("Extra attributes from the server: %s", t);
              }
            }),
            (Ch = function (e, t) {
              t === !1
                ? y(
                    "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
                    e,
                    e,
                    e,
                  )
                : y(
                    "Expected `%s` listener to be a function, instead got a value of `%s` type.",
                    e,
                    typeof t,
                  );
            }),
            (cE = function (e, t) {
              var a =
                e.namespaceURI === ui
                  ? e.ownerDocument.createElement(e.tagName)
                  : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
              return (a.innerHTML = t), a.innerHTML;
            });
          var bR = /\r\n?/g,
            _R = /\u0000|\uFFFD/g;
          function Th(e) {
            xa(e);
            var t = typeof e == "string" ? e : "" + e;
            return t
              .replace(
                bR,
                `
`,
              )
              .replace(_R, "");
          }
          function Rh(e, t, a, i) {
            var u = Th(t),
              s = Th(e);
            if (
              s !== u &&
              (i &&
                (ma ||
                  ((ma = !0),
                  y(
                    'Text content did not match. Server: "%s" Client: "%s"',
                    s,
                    u,
                  ))),
              a && Zn)
            )
              throw new Error(
                "Text content does not match server-rendered HTML.",
              );
          }
          function fE(e) {
            return e.nodeType === Na ? e : e.ownerDocument;
          }
          function DR() {}
          function xh(e) {
            e.onclick = DR;
          }
          function kR(e, t, a, i, u) {
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var f = i[s];
                if (s === rs) f && Object.freeze(f), hv(t, f);
                else if (s === Bd) {
                  var p = f ? f[Sh] : void 0;
                  p != null && av(t, p);
                } else if (s === ns)
                  if (typeof f == "string") {
                    var h = e !== "textarea" || f !== "";
                    h && zs(t, f);
                  } else typeof f == "number" && zs(t, "" + f);
                else
                  s === gh ||
                    s === Wu ||
                    s === uE ||
                    (fr.hasOwnProperty(s)
                      ? f != null &&
                        (typeof f != "function" && Ch(s, f),
                        s === "onScroll" && $t("scroll", t))
                      : f != null && Pa(t, s, f, u));
              }
          }
          function LR(e, t, a, i) {
            for (var u = 0; u < t.length; u += 2) {
              var s = t[u],
                f = t[u + 1];
              s === rs
                ? hv(e, f)
                : s === Bd
                  ? av(e, f)
                  : s === ns
                    ? zs(e, f)
                    : Pa(e, s, f, i);
            }
          }
          function NR(e, t, a, i) {
            var u,
              s = fE(a),
              f,
              p = i;
            if ((p === ui && (p = Ms(e)), p === ui)) {
              if (
                ((u = si(e, t)),
                !u &&
                  e !== e.toLowerCase() &&
                  y(
                    "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                    e,
                  ),
                e === "script")
              ) {
                var h = s.createElement("div");
                h.innerHTML = "<script></script>";
                var g = h.firstChild;
                f = h.removeChild(g);
              } else if (typeof t.is == "string")
                f = s.createElement(e, {
                  is: t.is,
                });
              else if (((f = s.createElement(e)), e === "select")) {
                var E = f;
                t.multiple ? (E.multiple = !0) : t.size && (E.size = t.size);
              }
            } else f = s.createElementNS(p, e);
            return (
              p === ui &&
                !u &&
                Object.prototype.toString.call(f) ===
                  "[object HTMLUnknownElement]" &&
                !Yn.call(Qy, e) &&
                ((Qy[e] = !0),
                y(
                  "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                  e,
                )),
              f
            );
          }
          function OR(e, t) {
            return fE(t).createTextNode(e);
          }
          function MR(e, t, a, i) {
            var u = si(t, a);
            Eh(t, a);
            var s;
            switch (t) {
              case "dialog":
                $t("cancel", e), $t("close", e), (s = a);
                break;
              case "iframe":
              case "object":
              case "embed":
                $t("load", e), (s = a);
                break;
              case "video":
              case "audio":
                for (var f = 0; f < Fd.length; f++) $t(Fd[f], e);
                s = a;
                break;
              case "source":
                $t("error", e), (s = a);
                break;
              case "img":
              case "image":
              case "link":
                $t("error", e), $t("load", e), (s = a);
                break;
              case "details":
                $t("toggle", e), (s = a);
                break;
              case "input":
                go(e, a), (s = yo(e, a)), $t("invalid", e);
                break;
              case "option":
                Ns(e, a), (s = a);
                break;
              case "select":
                ev(e, a), (s = zf(e, a)), $t("invalid", e);
                break;
              case "textarea":
                tv(e, a), (s = jf(e, a)), $t("invalid", e);
                break;
              default:
                s = a;
            }
            switch ((js(t, s), kR(t, e, i, s, u), t)) {
              case "input":
                hl(e), So(e, a, !1);
                break;
              case "textarea":
                hl(e), rv(e);
                break;
              case "option":
                Uf(e, a);
                break;
              case "select":
                iy(e, a);
                break;
              default:
                typeof s.onClick == "function" && xh(e);
                break;
            }
          }
          function UR(e, t, a, i, u) {
            Eh(t, i);
            var s = null,
              f,
              p;
            switch (t) {
              case "input":
                (f = yo(e, a)), (p = yo(e, i)), (s = []);
                break;
              case "select":
                (f = zf(e, a)), (p = zf(e, i)), (s = []);
                break;
              case "textarea":
                (f = jf(e, a)), (p = jf(e, i)), (s = []);
                break;
              default:
                (f = a),
                  (p = i),
                  typeof f.onClick != "function" &&
                    typeof p.onClick == "function" &&
                    xh(e);
                break;
            }
            js(t, p);
            var h,
              g,
              E = null;
            for (h in f)
              if (
                !(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null)
              )
                if (h === rs) {
                  var _ = f[h];
                  for (g in _)
                    _.hasOwnProperty(g) && (E || (E = {}), (E[g] = ""));
                } else
                  h === Bd ||
                    h === ns ||
                    h === gh ||
                    h === Wu ||
                    h === uE ||
                    (fr.hasOwnProperty(h)
                      ? s || (s = [])
                      : (s = s || []).push(h, null));
            for (h in p) {
              var w = p[h],
                M = f != null ? f[h] : void 0;
              if (
                !(!p.hasOwnProperty(h) || w === M || (w == null && M == null))
              )
                if (h === rs)
                  if ((w && Object.freeze(w), M)) {
                    for (g in M)
                      M.hasOwnProperty(g) &&
                        (!w || !w.hasOwnProperty(g)) &&
                        (E || (E = {}), (E[g] = ""));
                    for (g in w)
                      w.hasOwnProperty(g) &&
                        M[g] !== w[g] &&
                        (E || (E = {}), (E[g] = w[g]));
                  } else E || (s || (s = []), s.push(h, E)), (E = w);
                else if (h === Bd) {
                  var z = w ? w[Sh] : void 0,
                    H = M ? M[Sh] : void 0;
                  z != null && H !== z && (s = s || []).push(h, z);
                } else
                  h === ns
                    ? (typeof w == "string" || typeof w == "number") &&
                      (s = s || []).push(h, "" + w)
                    : h === gh ||
                      h === Wu ||
                      (fr.hasOwnProperty(h)
                        ? (w != null &&
                            (typeof w != "function" && Ch(h, w),
                            h === "onScroll" && $t("scroll", e)),
                          !s && M !== w && (s = []))
                        : (s = s || []).push(h, w));
            }
            return E && (To(E, p[rs]), (s = s || []).push(rs, E)), s;
          }
          function zR(e, t, a, i, u) {
            a === "input" && u.type === "radio" && u.name != null && Mf(e, u);
            var s = si(a, i),
              f = si(a, u);
            switch ((LR(e, t, s, f), a)) {
              case "input":
                lu(e, u);
                break;
              case "textarea":
                nv(e, u);
                break;
              case "select":
                ly(e, u);
                break;
            }
          }
          function AR(e) {
            {
              var t = e.toLowerCase();
              return (Fs.hasOwnProperty(t) && Fs[t]) || null;
            }
          }
          function jR(e, t, a, i, u, s, f) {
            var p, h;
            switch (((p = si(t, a)), Eh(t, a), t)) {
              case "dialog":
                $t("cancel", e), $t("close", e);
                break;
              case "iframe":
              case "object":
              case "embed":
                $t("load", e);
                break;
              case "video":
              case "audio":
                for (var g = 0; g < Fd.length; g++) $t(Fd[g], e);
                break;
              case "source":
                $t("error", e);
                break;
              case "img":
              case "image":
              case "link":
                $t("error", e), $t("load", e);
                break;
              case "details":
                $t("toggle", e);
                break;
              case "input":
                go(e, a), $t("invalid", e);
                break;
              case "option":
                Ns(e, a);
                break;
              case "select":
                ev(e, a), $t("invalid", e);
                break;
              case "textarea":
                tv(e, a), $t("invalid", e);
                break;
            }
            js(t, a);
            {
              h = /* @__PURE__ */ new Set();
              for (var E = e.attributes, _ = 0; _ < E.length; _++) {
                var w = E[_].name.toLowerCase();
                switch (w) {
                  case "value":
                    break;
                  case "checked":
                    break;
                  case "selected":
                    break;
                  default:
                    h.add(E[_].name);
                }
              }
            }
            var M = null;
            for (var z in a)
              if (a.hasOwnProperty(z)) {
                var H = a[z];
                if (z === ns)
                  typeof H == "string"
                    ? e.textContent !== H &&
                      (a[Wu] !== !0 && Rh(e.textContent, H, s, f),
                      (M = [ns, H]))
                    : typeof H == "number" &&
                      e.textContent !== "" + H &&
                      (a[Wu] !== !0 && Rh(e.textContent, H, s, f),
                      (M = [ns, "" + H]));
                else if (fr.hasOwnProperty(z))
                  H != null &&
                    (typeof H != "function" && Ch(z, H),
                    z === "onScroll" && $t("scroll", e));
                else if (
                  f && // Convince Flow we've calculated it (it's DEV-only in this method.)
                  typeof p == "boolean"
                ) {
                  var le = void 0,
                    De = p && kn ? null : zr(z);
                  if (a[Wu] !== !0) {
                    if (
                      !(
                        z === gh ||
                        z === Wu || // Controlled attributes are not validated
                        // TODO: Only ignore them on controlled tags.
                        z === "value" ||
                        z === "checked" ||
                        z === "selected"
                      )
                    ) {
                      if (z === Bd) {
                        var Ce = e.innerHTML,
                          rt = H ? H[Sh] : void 0;
                        if (rt != null) {
                          var Ze = cE(e, rt);
                          Ze !== Ce && Pd(z, Ce, Ze);
                        }
                      } else if (z === rs) {
                        if ((h.delete(z), sE)) {
                          var L = vy(H);
                          (le = e.getAttribute("style")),
                            L !== le && Pd(z, le, L);
                        }
                      } else if (p && !kn)
                        h.delete(z.toLowerCase()),
                          (le = nu(e, z, H)),
                          H !== le && Pd(z, le, H);
                      else if (!Xt(z, De, p) && !bt(z, H, De, p)) {
                        var V = !1;
                        if (De !== null)
                          h.delete(De.attributeName), (le = fl(e, z, H, De));
                        else {
                          var N = i;
                          if ((N === ui && (N = Ms(t)), N === ui))
                            h.delete(z.toLowerCase());
                          else {
                            var X = AR(z);
                            X !== null && X !== z && ((V = !0), h.delete(X)),
                              h.delete(z);
                          }
                          le = nu(e, z, H);
                        }
                        var de = kn;
                        !de && H !== le && !V && Pd(z, le, H);
                      }
                    }
                  }
                }
              }
            switch (
              (f && // $FlowFixMe - Should be inferred as not undefined.
                h.size > 0 &&
                a[Wu] !== !0 &&
                oE(h),
              t)
            ) {
              case "input":
                hl(e), So(e, a, !0);
                break;
              case "textarea":
                hl(e), rv(e);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && xh(e);
                break;
            }
            return M;
          }
          function FR(e, t, a) {
            var i = e.nodeValue !== t;
            return i;
          }
          function Iy(e, t) {
            {
              if (ma) return;
              (ma = !0),
                y(
                  "Did not expect server HTML to contain a <%s> in <%s>.",
                  t.nodeName.toLowerCase(),
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function Gy(e, t) {
            {
              if (ma) return;
              (ma = !0),
                y(
                  'Did not expect server HTML to contain the text node "%s" in <%s>.',
                  t.nodeValue,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function Xy(e, t, a) {
            {
              if (ma) return;
              (ma = !0),
                y(
                  "Expected server HTML to contain a matching <%s> in <%s>.",
                  t,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function Ky(e, t) {
            {
              if (t === "" || ma) return;
              (ma = !0),
                y(
                  'Expected server HTML to contain a matching text node for "%s" in <%s>.',
                  t,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function HR(e, t, a) {
            switch (t) {
              case "input":
                Kp(e, a);
                return;
              case "textarea":
                Ff(e, a);
                return;
              case "select":
                uy(e, a);
                return;
            }
          }
          var $d = function () {},
            Yd = function () {};
          {
            var VR = [
                "address",
                "applet",
                "area",
                "article",
                "aside",
                "base",
                "basefont",
                "bgsound",
                "blockquote",
                "body",
                "br",
                "button",
                "caption",
                "center",
                "col",
                "colgroup",
                "dd",
                "details",
                "dir",
                "div",
                "dl",
                "dt",
                "embed",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "frame",
                "frameset",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "iframe",
                "img",
                "input",
                "isindex",
                "li",
                "link",
                "listing",
                "main",
                "marquee",
                "menu",
                "menuitem",
                "meta",
                "nav",
                "noembed",
                "noframes",
                "noscript",
                "object",
                "ol",
                "p",
                "param",
                "plaintext",
                "pre",
                "script",
                "section",
                "select",
                "source",
                "style",
                "summary",
                "table",
                "tbody",
                "td",
                "template",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "title",
                "tr",
                "track",
                "ul",
                "wbr",
                "xmp",
              ],
              dE = [
                "applet",
                "caption",
                "html",
                "table",
                "td",
                "th",
                "marquee",
                "object",
                "template",
                // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
                // TODO: Distinguish by namespace here -- for <title>, including it here
                // errs on the side of fewer warnings
                "foreignObject",
                "desc",
                "title",
              ],
              BR = dE.concat(["button"]),
              PR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
              pE = {
                current: null,
                formTag: null,
                aTagInScope: null,
                buttonTagInScope: null,
                nobrTagInScope: null,
                pTagInButtonScope: null,
                listItemTagAutoclosing: null,
                dlItemTagAutoclosing: null,
              };
            Yd = function (e, t) {
              var a = Ke({}, e || pE),
                i = {
                  tag: t,
                };
              return (
                dE.indexOf(t) !== -1 &&
                  ((a.aTagInScope = null),
                  (a.buttonTagInScope = null),
                  (a.nobrTagInScope = null)),
                BR.indexOf(t) !== -1 && (a.pTagInButtonScope = null),
                VR.indexOf(t) !== -1 &&
                  t !== "address" &&
                  t !== "div" &&
                  t !== "p" &&
                  ((a.listItemTagAutoclosing = null),
                  (a.dlItemTagAutoclosing = null)),
                (a.current = i),
                t === "form" && (a.formTag = i),
                t === "a" && (a.aTagInScope = i),
                t === "button" && (a.buttonTagInScope = i),
                t === "nobr" && (a.nobrTagInScope = i),
                t === "p" && (a.pTagInButtonScope = i),
                t === "li" && (a.listItemTagAutoclosing = i),
                (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i),
                a
              );
            };
            var $R = function (e, t) {
                switch (t) {
                  case "select":
                    return e === "option" || e === "optgroup" || e === "#text";
                  case "optgroup":
                    return e === "option" || e === "#text";
                  case "option":
                    return e === "#text";
                  case "tr":
                    return (
                      e === "th" ||
                      e === "td" ||
                      e === "style" ||
                      e === "script" ||
                      e === "template"
                    );
                  case "tbody":
                  case "thead":
                  case "tfoot":
                    return (
                      e === "tr" ||
                      e === "style" ||
                      e === "script" ||
                      e === "template"
                    );
                  case "colgroup":
                    return e === "col" || e === "template";
                  case "table":
                    return (
                      e === "caption" ||
                      e === "colgroup" ||
                      e === "tbody" ||
                      e === "tfoot" ||
                      e === "thead" ||
                      e === "style" ||
                      e === "script" ||
                      e === "template"
                    );
                  case "head":
                    return (
                      e === "base" ||
                      e === "basefont" ||
                      e === "bgsound" ||
                      e === "link" ||
                      e === "meta" ||
                      e === "title" ||
                      e === "noscript" ||
                      e === "noframes" ||
                      e === "style" ||
                      e === "script" ||
                      e === "template"
                    );
                  case "html":
                    return e === "head" || e === "body" || e === "frameset";
                  case "frameset":
                    return e === "frame";
                  case "#document":
                    return e === "html";
                }
                switch (e) {
                  case "h1":
                  case "h2":
                  case "h3":
                  case "h4":
                  case "h5":
                  case "h6":
                    return (
                      t !== "h1" &&
                      t !== "h2" &&
                      t !== "h3" &&
                      t !== "h4" &&
                      t !== "h5" &&
                      t !== "h6"
                    );
                  case "rp":
                  case "rt":
                    return PR.indexOf(t) === -1;
                  case "body":
                  case "caption":
                  case "col":
                  case "colgroup":
                  case "frameset":
                  case "frame":
                  case "head":
                  case "html":
                  case "tbody":
                  case "td":
                  case "tfoot":
                  case "th":
                  case "thead":
                  case "tr":
                    return t == null;
                }
                return !0;
              },
              YR = function (e, t) {
                switch (e) {
                  case "address":
                  case "article":
                  case "aside":
                  case "blockquote":
                  case "center":
                  case "details":
                  case "dialog":
                  case "dir":
                  case "div":
                  case "dl":
                  case "fieldset":
                  case "figcaption":
                  case "figure":
                  case "footer":
                  case "header":
                  case "hgroup":
                  case "main":
                  case "menu":
                  case "nav":
                  case "ol":
                  case "p":
                  case "section":
                  case "summary":
                  case "ul":
                  case "pre":
                  case "listing":
                  case "table":
                  case "hr":
                  case "xmp":
                  case "h1":
                  case "h2":
                  case "h3":
                  case "h4":
                  case "h5":
                  case "h6":
                    return t.pTagInButtonScope;
                  case "form":
                    return t.formTag || t.pTagInButtonScope;
                  case "li":
                    return t.listItemTagAutoclosing;
                  case "dd":
                  case "dt":
                    return t.dlItemTagAutoclosing;
                  case "button":
                    return t.buttonTagInScope;
                  case "a":
                    return t.aTagInScope;
                  case "nobr":
                    return t.nobrTagInScope;
                }
                return null;
              },
              vE = {};
            $d = function (e, t, a) {
              a = a || pE;
              var i = a.current,
                u = i && i.tag;
              t != null &&
                (e != null &&
                  y(
                    "validateDOMNesting: when childText is passed, childTag should be null",
                  ),
                (e = "#text"));
              var s = $R(e, u) ? null : i,
                f = s ? null : YR(e, a),
                p = s || f;
              if (p) {
                var h = p.tag,
                  g = !!s + "|" + e + "|" + h;
                if (!vE[g]) {
                  vE[g] = !0;
                  var E = e,
                    _ = "";
                  if (
                    (e === "#text"
                      ? /\S/.test(t)
                        ? (E = "Text nodes")
                        : ((E = "Whitespace text nodes"),
                          (_ =
                            " Make sure you don't have any extra whitespace between tags on each line of your source code."))
                      : (E = "<" + e + ">"),
                    s)
                  ) {
                    var w = "";
                    h === "table" &&
                      e === "tr" &&
                      (w +=
                        " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),
                      y(
                        "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",
                        E,
                        h,
                        _,
                        w,
                      );
                  } else
                    y(
                      "validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",
                      E,
                      h,
                    );
                }
              }
            };
          }
          var wh = "suppressHydrationWarning",
            bh = "$",
            _h = "/$",
            Wd = "$?",
            Qd = "$!",
            WR = "style",
            qy = null,
            Jy = null;
          function QR(e) {
            var t,
              a,
              i = e.nodeType;
            switch (i) {
              case Na:
              case ml: {
                t = i === Na ? "#document" : "#fragment";
                var u = e.documentElement;
                a = u ? u.namespaceURI : Vf(null, "");
                break;
              }
              default: {
                var s = i === nn ? e.parentNode : e,
                  f = s.namespaceURI || null;
                (t = s.tagName), (a = Vf(f, t));
                break;
              }
            }
            {
              var p = t.toLowerCase(),
                h = Yd(null, p);
              return {
                namespace: a,
                ancestorInfo: h,
              };
            }
          }
          function IR(e, t, a) {
            {
              var i = e,
                u = Vf(i.namespace, t),
                s = Yd(i.ancestorInfo, t);
              return {
                namespace: u,
                ancestorInfo: s,
              };
            }
          }
          function rL(e) {
            return e;
          }
          function GR(e) {
            (qy = Fu()), (Jy = oR());
            var t = null;
            return wr(!1), t;
          }
          function XR(e) {
            sR(Jy), wr(qy), (qy = null), (Jy = null);
          }
          function KR(e, t, a, i, u) {
            var s;
            {
              var f = i;
              if (
                ($d(e, null, f.ancestorInfo),
                typeof t.children == "string" || typeof t.children == "number")
              ) {
                var p = "" + t.children,
                  h = Yd(f.ancestorInfo, e);
                $d(null, p, h);
              }
              s = f.namespace;
            }
            var g = NR(e, t, a, s);
            return Xd(u, g), lg(g, t), g;
          }
          function qR(e, t) {
            e.appendChild(t);
          }
          function JR(e, t, a, i, u) {
            switch ((MR(e, t, a, i), t)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                return !!a.autoFocus;
              case "img":
                return !0;
              default:
                return !1;
            }
          }
          function ZR(e, t, a, i, u, s) {
            {
              var f = s;
              if (
                typeof i.children != typeof a.children &&
                (typeof i.children == "string" || typeof i.children == "number")
              ) {
                var p = "" + i.children,
                  h = Yd(f.ancestorInfo, t);
                $d(null, p, h);
              }
            }
            return UR(e, t, a, i);
          }
          function Zy(e, t) {
            return (
              e === "textarea" ||
              e === "noscript" ||
              typeof t.children == "string" ||
              typeof t.children == "number" ||
              (typeof t.dangerouslySetInnerHTML == "object" &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
            );
          }
          function ex(e, t, a, i) {
            {
              var u = a;
              $d(null, e, u.ancestorInfo);
            }
            var s = OR(e, t);
            return Xd(i, s), s;
          }
          function tx() {
            var e = window.event;
            return e === void 0 ? Ia : Dc(e.type);
          }
          var eg = typeof setTimeout == "function" ? setTimeout : void 0,
            nx = typeof clearTimeout == "function" ? clearTimeout : void 0,
            tg = -1,
            hE = typeof Promise == "function" ? Promise : void 0,
            rx =
              typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof hE < "u"
                  ? function (e) {
                      return hE.resolve(null).then(e).catch(ax);
                    }
                  : eg;
          function ax(e) {
            setTimeout(function () {
              throw e;
            });
          }
          function ix(e, t, a, i) {
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a.autoFocus && e.focus();
                return;
              case "img": {
                a.src && (e.src = a.src);
                return;
              }
            }
          }
          function lx(e, t, a, i, u, s) {
            zR(e, t, a, i, u), lg(e, u);
          }
          function mE(e) {
            zs(e, "");
          }
          function ux(e, t, a) {
            e.nodeValue = a;
          }
          function ox(e, t) {
            e.appendChild(t);
          }
          function sx(e, t) {
            var a;
            e.nodeType === nn
              ? ((a = e.parentNode), a.insertBefore(t, e))
              : ((a = e), a.appendChild(t));
            var i = e._reactRootContainer;
            i == null && a.onclick === null && xh(a);
          }
          function cx(e, t, a) {
            e.insertBefore(t, a);
          }
          function fx(e, t, a) {
            e.nodeType === nn
              ? e.parentNode.insertBefore(t, a)
              : e.insertBefore(t, a);
          }
          function dx(e, t) {
            e.removeChild(t);
          }
          function px(e, t) {
            e.nodeType === nn ? e.parentNode.removeChild(t) : e.removeChild(t);
          }
          function ng(e, t) {
            var a = t,
              i = 0;
            do {
              var u = a.nextSibling;
              if ((e.removeChild(a), u && u.nodeType === nn)) {
                var s = u.data;
                if (s === _h)
                  if (i === 0) {
                    e.removeChild(u), Qt(t);
                    return;
                  } else i--;
                else (s === bh || s === Wd || s === Qd) && i++;
              }
              a = u;
            } while (a);
            Qt(t);
          }
          function vx(e, t) {
            e.nodeType === nn
              ? ng(e.parentNode, t)
              : e.nodeType === hr && ng(e, t),
              Qt(e);
          }
          function hx(e) {
            e = e;
            var t = e.style;
            typeof t.setProperty == "function"
              ? t.setProperty("display", "none", "important")
              : (t.display = "none");
          }
          function mx(e) {
            e.nodeValue = "";
          }
          function yx(e, t) {
            e = e;
            var a = t[WR],
              i = a != null && a.hasOwnProperty("display") ? a.display : null;
            e.style.display = As("display", i);
          }
          function gx(e, t) {
            e.nodeValue = t;
          }
          function Sx(e) {
            e.nodeType === hr
              ? (e.textContent = "")
              : e.nodeType === Na &&
                e.documentElement &&
                e.removeChild(e.documentElement);
          }
          function Ex(e, t, a) {
            return e.nodeType !== hr ||
              t.toLowerCase() !== e.nodeName.toLowerCase()
              ? null
              : e;
          }
          function Cx(e, t) {
            return t === "" || e.nodeType !== oi ? null : e;
          }
          function Tx(e) {
            return e.nodeType !== nn ? null : e;
          }
          function yE(e) {
            return e.data === Wd;
          }
          function rg(e) {
            return e.data === Qd;
          }
          function Rx(e) {
            var t = e.nextSibling && e.nextSibling.dataset,
              a,
              i,
              u;
            return (
              t && ((a = t.dgst), (i = t.msg), (u = t.stck)),
              {
                message: i,
                digest: a,
                stack: u,
              }
            );
          }
          function xx(e, t) {
            e._reactRetry = t;
          }
          function Dh(e) {
            for (; e != null; e = e.nextSibling) {
              var t = e.nodeType;
              if (t === hr || t === oi) break;
              if (t === nn) {
                var a = e.data;
                if (a === bh || a === Qd || a === Wd) break;
                if (a === _h) return null;
              }
            }
            return e;
          }
          function Id(e) {
            return Dh(e.nextSibling);
          }
          function wx(e) {
            return Dh(e.firstChild);
          }
          function bx(e) {
            return Dh(e.firstChild);
          }
          function _x(e) {
            return Dh(e.nextSibling);
          }
          function Dx(e, t, a, i, u, s, f) {
            Xd(s, e), lg(e, a);
            var p;
            {
              var h = u;
              p = h.namespace;
            }
            var g = (s.mode & Ee) !== ge;
            return jR(e, t, a, p, i, g, f);
          }
          function kx(e, t, a, i) {
            return Xd(a, e), a.mode & Ee, FR(e, t);
          }
          function Lx(e, t) {
            Xd(t, e);
          }
          function Nx(e) {
            for (var t = e.nextSibling, a = 0; t; ) {
              if (t.nodeType === nn) {
                var i = t.data;
                if (i === _h) {
                  if (a === 0) return Id(t);
                  a--;
                } else (i === bh || i === Qd || i === Wd) && a++;
              }
              t = t.nextSibling;
            }
            return null;
          }
          function gE(e) {
            for (var t = e.previousSibling, a = 0; t; ) {
              if (t.nodeType === nn) {
                var i = t.data;
                if (i === bh || i === Qd || i === Wd) {
                  if (a === 0) return t;
                  a--;
                } else i === _h && a++;
              }
              t = t.previousSibling;
            }
            return null;
          }
          function Ox(e) {
            Qt(e);
          }
          function Mx(e) {
            Qt(e);
          }
          function Ux(e) {
            return e !== "head" && e !== "body";
          }
          function zx(e, t, a, i) {
            var u = !0;
            Rh(t.nodeValue, a, i, u);
          }
          function Ax(e, t, a, i, u, s) {
            if (t[wh] !== !0) {
              var f = !0;
              Rh(i.nodeValue, u, s, f);
            }
          }
          function jx(e, t) {
            t.nodeType === hr ? Iy(e, t) : t.nodeType === nn || Gy(e, t);
          }
          function Fx(e, t) {
            {
              var a = e.parentNode;
              a !== null &&
                (t.nodeType === hr ? Iy(a, t) : t.nodeType === nn || Gy(a, t));
            }
          }
          function Hx(e, t, a, i, u) {
            (u || t[wh] !== !0) &&
              (i.nodeType === hr ? Iy(a, i) : i.nodeType === nn || Gy(a, i));
          }
          function Vx(e, t, a) {
            Xy(e, t);
          }
          function Bx(e, t) {
            Ky(e, t);
          }
          function Px(e, t, a) {
            {
              var i = e.parentNode;
              i !== null && Xy(i, t);
            }
          }
          function $x(e, t) {
            {
              var a = e.parentNode;
              a !== null && Ky(a, t);
            }
          }
          function Yx(e, t, a, i, u, s) {
            (s || t[wh] !== !0) && Xy(a, i);
          }
          function Wx(e, t, a, i, u) {
            (u || t[wh] !== !0) && Ky(a, i);
          }
          function Qx(e) {
            y(
              "An error occurred during hydration. The server HTML was replaced with client content in <%s>.",
              e.nodeName.toLowerCase(),
            );
          }
          function Ix(e) {
            Hd(e);
          }
          var Qc = Math.random().toString(36).slice(2),
            Ic = "__reactFiber$" + Qc,
            ag = "__reactProps$" + Qc,
            Gd = "__reactContainer$" + Qc,
            ig = "__reactEvents$" + Qc,
            Gx = "__reactListeners$" + Qc,
            Xx = "__reactHandles$" + Qc;
          function Kx(e) {
            delete e[Ic],
              delete e[ag],
              delete e[ig],
              delete e[Gx],
              delete e[Xx];
          }
          function Xd(e, t) {
            t[Ic] = e;
          }
          function kh(e, t) {
            t[Gd] = e;
          }
          function SE(e) {
            e[Gd] = null;
          }
          function Kd(e) {
            return !!e[Gd];
          }
          function as(e) {
            var t = e[Ic];
            if (t) return t;
            for (var a = e.parentNode; a; ) {
              if (((t = a[Gd] || a[Ic]), t)) {
                var i = t.alternate;
                if (t.child !== null || (i !== null && i.child !== null))
                  for (var u = gE(e); u !== null; ) {
                    var s = u[Ic];
                    if (s) return s;
                    u = gE(u);
                  }
                return t;
              }
              (e = a), (a = e.parentNode);
            }
            return null;
          }
          function Qu(e) {
            var t = e[Ic] || e[Gd];
            return t &&
              (t.tag === oe || t.tag === _e || t.tag === We || t.tag === $)
              ? t
              : null;
          }
          function Gc(e) {
            if (e.tag === oe || e.tag === _e) return e.stateNode;
            throw new Error("getNodeFromInstance: Invalid argument.");
          }
          function Lh(e) {
            return e[ag] || null;
          }
          function lg(e, t) {
            e[ag] = t;
          }
          function qx(e) {
            var t = e[ig];
            return t === void 0 && (t = e[ig] = /* @__PURE__ */ new Set()), t;
          }
          var EE = {},
            CE = S.ReactDebugCurrentFrame;
          function Nh(e) {
            if (e) {
              var t = e._owner,
                a = co(e.type, e._source, t ? t.type : null);
              CE.setExtraStackFrame(a);
            } else CE.setExtraStackFrame(null);
          }
          function Ci(e, t, a, i, u) {
            {
              var s = Function.call.bind(Yn);
              for (var f in e)
                if (s(e, f)) {
                  var p = void 0;
                  try {
                    if (typeof e[f] != "function") {
                      var h = Error(
                        (i || "React class") +
                          ": " +
                          a +
                          " type `" +
                          f +
                          "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                          typeof e[f] +
                          "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                      );
                      throw ((h.name = "Invariant Violation"), h);
                    }
                    p = e[f](
                      t,
                      f,
                      i,
                      a,
                      null,
                      "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
                    );
                  } catch (g) {
                    p = g;
                  }
                  p &&
                    !(p instanceof Error) &&
                    (Nh(u),
                    y(
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      i || "React class",
                      a,
                      f,
                      typeof p,
                    ),
                    Nh(null)),
                    p instanceof Error &&
                      !(p.message in EE) &&
                      ((EE[p.message] = !0),
                      Nh(u),
                      y("Failed %s type: %s", a, p.message),
                      Nh(null));
                }
            }
          }
          var ug = [],
            Oh;
          Oh = [];
          var Vl = -1;
          function Iu(e) {
            return {
              current: e,
            };
          }
          function br(e, t) {
            if (Vl < 0) {
              y("Unexpected pop.");
              return;
            }
            t !== Oh[Vl] && y("Unexpected Fiber popped."),
              (e.current = ug[Vl]),
              (ug[Vl] = null),
              (Oh[Vl] = null),
              Vl--;
          }
          function _r(e, t, a) {
            Vl++, (ug[Vl] = e.current), (Oh[Vl] = a), (e.current = t);
          }
          var og;
          og = {};
          var za = {};
          Object.freeze(za);
          var Bl = Iu(za),
            Zi = Iu(!1),
            sg = za;
          function Xc(e, t, a) {
            return a && el(t) ? sg : Bl.current;
          }
          function TE(e, t, a) {
            {
              var i = e.stateNode;
              (i.__reactInternalMemoizedUnmaskedChildContext = t),
                (i.__reactInternalMemoizedMaskedChildContext = a);
            }
          }
          function Kc(e, t) {
            {
              var a = e.type,
                i = a.contextTypes;
              if (!i) return za;
              var u = e.stateNode;
              if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
                return u.__reactInternalMemoizedMaskedChildContext;
              var s = {};
              for (var f in i) s[f] = t[f];
              {
                var p = Be(e) || "Unknown";
                Ci(i, s, "context", p);
              }
              return u && TE(e, t, s), s;
            }
          }
          function Mh() {
            return Zi.current;
          }
          function el(e) {
            {
              var t = e.childContextTypes;
              return t != null;
            }
          }
          function Uh(e) {
            br(Zi, e), br(Bl, e);
          }
          function cg(e) {
            br(Zi, e), br(Bl, e);
          }
          function RE(e, t, a) {
            {
              if (Bl.current !== za)
                throw new Error(
                  "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.",
                );
              _r(Bl, t, e), _r(Zi, a, e);
            }
          }
          function xE(e, t, a) {
            {
              var i = e.stateNode,
                u = t.childContextTypes;
              if (typeof i.getChildContext != "function") {
                {
                  var s = Be(e) || "Unknown";
                  og[s] ||
                    ((og[s] = !0),
                    y(
                      "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                      s,
                      s,
                    ));
                }
                return a;
              }
              var f = i.getChildContext();
              for (var p in f)
                if (!(p in u))
                  throw new Error(
                    (Be(e) || "Unknown") +
                      '.getChildContext(): key "' +
                      p +
                      '" is not defined in childContextTypes.',
                  );
              {
                var h = Be(e) || "Unknown";
                Ci(u, f, "child context", h);
              }
              return Ke({}, a, f);
            }
          }
          function zh(e) {
            {
              var t = e.stateNode,
                a = (t && t.__reactInternalMemoizedMergedChildContext) || za;
              return (sg = Bl.current), _r(Bl, a, e), _r(Zi, Zi.current, e), !0;
            }
          }
          function wE(e, t, a) {
            {
              var i = e.stateNode;
              if (!i)
                throw new Error(
                  "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.",
                );
              if (a) {
                var u = xE(e, t, sg);
                (i.__reactInternalMemoizedMergedChildContext = u),
                  br(Zi, e),
                  br(Bl, e),
                  _r(Bl, u, e),
                  _r(Zi, a, e);
              } else br(Zi, e), _r(Zi, a, e);
            }
          }
          function Jx(e) {
            {
              if (!ld(e) || e.tag !== j)
                throw new Error(
                  "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.",
                );
              var t = e;
              do {
                switch (t.tag) {
                  case $:
                    return t.stateNode.context;
                  case j: {
                    var a = t.type;
                    if (el(a))
                      return t.stateNode
                        .__reactInternalMemoizedMergedChildContext;
                    break;
                  }
                }
                t = t.return;
              } while (t !== null);
              throw new Error(
                "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.",
              );
            }
          }
          var Gu = 0,
            Ah = 1,
            Pl = null,
            fg = !1,
            dg = !1;
          function bE(e) {
            Pl === null ? (Pl = [e]) : Pl.push(e);
          }
          function Zx(e) {
            (fg = !0), bE(e);
          }
          function _E() {
            fg && Xu();
          }
          function Xu() {
            if (!dg && Pl !== null) {
              dg = !0;
              var e = 0,
                t = fa();
              try {
                var a = !0,
                  i = Pl;
                for (Wt(qt); e < i.length; e++) {
                  var u = i[e];
                  do u = u(a);
                  while (u !== null);
                }
                (Pl = null), (fg = !1);
              } catch (s) {
                throw (Pl !== null && (Pl = Pl.slice(e + 1)), Is(Xs, Xu), s);
              } finally {
                Wt(t), (dg = !1);
              }
            }
            return null;
          }
          var qc = [],
            Jc = 0,
            jh = null,
            Fh = 0,
            qa = [],
            Ja = 0,
            is = null,
            $l = 1,
            Yl = "";
          function ew(e) {
            return us(), (e.flags & rd) !== be;
          }
          function tw(e) {
            return us(), Fh;
          }
          function nw() {
            var e = Yl,
              t = $l,
              a = t & ~rw(t);
            return a.toString(32) + e;
          }
          function ls(e, t) {
            us(), (qc[Jc++] = Fh), (qc[Jc++] = jh), (jh = e), (Fh = t);
          }
          function DE(e, t, a) {
            us(), (qa[Ja++] = $l), (qa[Ja++] = Yl), (qa[Ja++] = is), (is = e);
            var i = $l,
              u = Yl,
              s = Hh(i) - 1,
              f = i & ~(1 << s),
              p = a + 1,
              h = Hh(t) + s;
            if (h > 30) {
              var g = s - (s % 5),
                E = (1 << g) - 1,
                _ = (f & E).toString(32),
                w = f >> g,
                M = s - g,
                z = Hh(t) + M,
                H = p << M,
                le = H | w,
                De = _ + u;
              ($l = (1 << z) | le), (Yl = De);
            } else {
              var Ce = p << s,
                rt = Ce | f,
                Ze = u;
              ($l = (1 << h) | rt), (Yl = Ze);
            }
          }
          function pg(e) {
            us();
            var t = e.return;
            if (t !== null) {
              var a = 1,
                i = 0;
              ls(e, a), DE(e, a, i);
            }
          }
          function Hh(e) {
            return 32 - Cu(e);
          }
          function rw(e) {
            return 1 << (Hh(e) - 1);
          }
          function vg(e) {
            for (; e === jh; )
              (jh = qc[--Jc]),
                (qc[Jc] = null),
                (Fh = qc[--Jc]),
                (qc[Jc] = null);
            for (; e === is; )
              (is = qa[--Ja]),
                (qa[Ja] = null),
                (Yl = qa[--Ja]),
                (qa[Ja] = null),
                ($l = qa[--Ja]),
                (qa[Ja] = null);
          }
          function aw() {
            return (
              us(),
              is !== null
                ? {
                    id: $l,
                    overflow: Yl,
                  }
                : null
            );
          }
          function iw(e, t) {
            us(),
              (qa[Ja++] = $l),
              (qa[Ja++] = Yl),
              (qa[Ja++] = is),
              ($l = t.id),
              (Yl = t.overflow),
              (is = e);
          }
          function us() {
            rr() ||
              y(
                "Expected to be hydrating. This is a bug in React. Please file an issue.",
              );
          }
          var nr = null,
            Za = null,
            Ti = !1,
            os = !1,
            Ku = null;
          function lw() {
            Ti &&
              y(
                "We should not be hydrating here. This is a bug in React. Please file a bug.",
              );
          }
          function kE() {
            os = !0;
          }
          function uw() {
            return os;
          }
          function ow(e) {
            var t = e.stateNode.containerInfo;
            return (
              (Za = bx(t)), (nr = e), (Ti = !0), (Ku = null), (os = !1), !0
            );
          }
          function sw(e, t, a) {
            return (
              (Za = _x(t)),
              (nr = e),
              (Ti = !0),
              (Ku = null),
              (os = !1),
              a !== null && iw(e, a),
              !0
            );
          }
          function LE(e, t) {
            switch (e.tag) {
              case $: {
                jx(e.stateNode.containerInfo, t);
                break;
              }
              case oe: {
                var a = (e.mode & Ee) !== ge;
                Hx(
                  e.type,
                  e.memoizedProps,
                  e.stateNode,
                  t,
                  // TODO: Delete this argument when we remove the legacy root API.
                  a,
                );
                break;
              }
              case We: {
                var i = e.memoizedState;
                i.dehydrated !== null && Fx(i.dehydrated, t);
                break;
              }
            }
          }
          function NE(e, t) {
            LE(e, t);
            var a = pD();
            (a.stateNode = t), (a.return = e);
            var i = e.deletions;
            i === null ? ((e.deletions = [a]), (e.flags |= ft)) : i.push(a);
          }
          function hg(e, t) {
            {
              if (os) return;
              switch (e.tag) {
                case $: {
                  var a = e.stateNode.containerInfo;
                  switch (t.tag) {
                    case oe:
                      var i = t.type;
                      t.pendingProps, Vx(a, i);
                      break;
                    case _e:
                      var u = t.pendingProps;
                      Bx(a, u);
                      break;
                  }
                  break;
                }
                case oe: {
                  var s = e.type,
                    f = e.memoizedProps,
                    p = e.stateNode;
                  switch (t.tag) {
                    case oe: {
                      var h = t.type,
                        g = t.pendingProps,
                        E = (e.mode & Ee) !== ge;
                      Yx(
                        s,
                        f,
                        p,
                        h,
                        g,
                        // TODO: Delete this argument when we remove the legacy root API.
                        E,
                      );
                      break;
                    }
                    case _e: {
                      var _ = t.pendingProps,
                        w = (e.mode & Ee) !== ge;
                      Wx(
                        s,
                        f,
                        p,
                        _,
                        // TODO: Delete this argument when we remove the legacy root API.
                        w,
                      );
                      break;
                    }
                  }
                  break;
                }
                case We: {
                  var M = e.memoizedState,
                    z = M.dehydrated;
                  if (z !== null)
                    switch (t.tag) {
                      case oe:
                        var H = t.type;
                        t.pendingProps, Px(z, H);
                        break;
                      case _e:
                        var le = t.pendingProps;
                        $x(z, le);
                        break;
                    }
                  break;
                }
                default:
                  return;
              }
            }
          }
          function OE(e, t) {
            (t.flags = (t.flags & ~ia) | Ot), hg(e, t);
          }
          function ME(e, t) {
            switch (e.tag) {
              case oe: {
                var a = e.type;
                e.pendingProps;
                var i = Ex(t, a);
                return i !== null
                  ? ((e.stateNode = i), (nr = e), (Za = wx(i)), !0)
                  : !1;
              }
              case _e: {
                var u = e.pendingProps,
                  s = Cx(t, u);
                return s !== null
                  ? ((e.stateNode = s), (nr = e), (Za = null), !0)
                  : !1;
              }
              case We: {
                var f = Tx(t);
                if (f !== null) {
                  var p = {
                    dehydrated: f,
                    treeContext: aw(),
                    retryLane: Kn,
                  };
                  e.memoizedState = p;
                  var h = vD(f);
                  return (
                    (h.return = e), (e.child = h), (nr = e), (Za = null), !0
                  );
                }
                return !1;
              }
              default:
                return !1;
            }
          }
          function mg(e) {
            return (e.mode & Ee) !== ge && (e.flags & ze) === be;
          }
          function yg(e) {
            throw new Error(
              "Hydration failed because the initial UI does not match what was rendered on the server.",
            );
          }
          function gg(e) {
            if (Ti) {
              var t = Za;
              if (!t) {
                mg(e) && (hg(nr, e), yg()), OE(nr, e), (Ti = !1), (nr = e);
                return;
              }
              var a = t;
              if (!ME(e, t)) {
                mg(e) && (hg(nr, e), yg()), (t = Id(a));
                var i = nr;
                if (!t || !ME(e, t)) {
                  OE(nr, e), (Ti = !1), (nr = e);
                  return;
                }
                NE(i, a);
              }
            }
          }
          function cw(e, t, a) {
            var i = e.stateNode,
              u = !os,
              s = Dx(i, e.type, e.memoizedProps, t, a, e, u);
            return (e.updateQueue = s), s !== null;
          }
          function fw(e) {
            var t = e.stateNode,
              a = e.memoizedProps,
              i = kx(t, a, e);
            if (i) {
              var u = nr;
              if (u !== null)
                switch (u.tag) {
                  case $: {
                    var s = u.stateNode.containerInfo,
                      f = (u.mode & Ee) !== ge;
                    zx(
                      s,
                      t,
                      a,
                      // TODO: Delete this argument when we remove the legacy root API.
                      f,
                    );
                    break;
                  }
                  case oe: {
                    var p = u.type,
                      h = u.memoizedProps,
                      g = u.stateNode,
                      E = (u.mode & Ee) !== ge;
                    Ax(
                      p,
                      h,
                      g,
                      t,
                      a,
                      // TODO: Delete this argument when we remove the legacy root API.
                      E,
                    );
                    break;
                  }
                }
            }
            return i;
          }
          function dw(e) {
            var t = e.memoizedState,
              a = t !== null ? t.dehydrated : null;
            if (!a)
              throw new Error(
                "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
              );
            Lx(a, e);
          }
          function pw(e) {
            var t = e.memoizedState,
              a = t !== null ? t.dehydrated : null;
            if (!a)
              throw new Error(
                "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
              );
            return Nx(a);
          }
          function UE(e) {
            for (
              var t = e.return;
              t !== null && t.tag !== oe && t.tag !== $ && t.tag !== We;

            )
              t = t.return;
            nr = t;
          }
          function Vh(e) {
            if (e !== nr) return !1;
            if (!Ti) return UE(e), (Ti = !0), !1;
            if (
              e.tag !== $ &&
              (e.tag !== oe || (Ux(e.type) && !Zy(e.type, e.memoizedProps)))
            ) {
              var t = Za;
              if (t)
                if (mg(e)) zE(e), yg();
                else for (; t; ) NE(e, t), (t = Id(t));
            }
            return (
              UE(e),
              e.tag === We ? (Za = pw(e)) : (Za = nr ? Id(e.stateNode) : null),
              !0
            );
          }
          function vw() {
            return Ti && Za !== null;
          }
          function zE(e) {
            for (var t = Za; t; ) LE(e, t), (t = Id(t));
          }
          function Zc() {
            (nr = null), (Za = null), (Ti = !1), (os = !1);
          }
          function AE() {
            Ku !== null && (k1(Ku), (Ku = null));
          }
          function rr() {
            return Ti;
          }
          function Sg(e) {
            Ku === null ? (Ku = [e]) : Ku.push(e);
          }
          var hw = S.ReactCurrentBatchConfig,
            mw = null;
          function yw() {
            return hw.transition;
          }
          var Ri = {
            recordUnsafeLifecycleWarnings: function (e, t) {},
            flushPendingUnsafeLifecycleWarnings: function () {},
            recordLegacyContextWarning: function (e, t) {},
            flushLegacyContextWarning: function () {},
            discardPendingWarnings: function () {},
          };
          {
            var gw = function (e) {
                for (var t = null, a = e; a !== null; )
                  a.mode & qe && (t = a), (a = a.return);
                return t;
              },
              ss = function (e) {
                var t = [];
                return (
                  e.forEach(function (a) {
                    t.push(a);
                  }),
                  t.sort().join(", ")
                );
              },
              qd = [],
              Jd = [],
              Zd = [],
              ep = [],
              tp = [],
              np = [],
              cs = /* @__PURE__ */ new Set();
            (Ri.recordUnsafeLifecycleWarnings = function (e, t) {
              cs.has(e.type) ||
                (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
                  t.componentWillMount.__suppressDeprecationWarning !== !0 &&
                  qd.push(e),
                e.mode & qe &&
                  typeof t.UNSAFE_componentWillMount == "function" &&
                  Jd.push(e),
                typeof t.componentWillReceiveProps == "function" &&
                  t.componentWillReceiveProps.__suppressDeprecationWarning !==
                    !0 &&
                  Zd.push(e),
                e.mode & qe &&
                  typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                  ep.push(e),
                typeof t.componentWillUpdate == "function" &&
                  t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
                  tp.push(e),
                e.mode & qe &&
                  typeof t.UNSAFE_componentWillUpdate == "function" &&
                  np.push(e));
            }),
              (Ri.flushPendingUnsafeLifecycleWarnings = function () {
                var e = /* @__PURE__ */ new Set();
                qd.length > 0 &&
                  (qd.forEach(function (w) {
                    e.add(Be(w) || "Component"), cs.add(w.type);
                  }),
                  (qd = []));
                var t = /* @__PURE__ */ new Set();
                Jd.length > 0 &&
                  (Jd.forEach(function (w) {
                    t.add(Be(w) || "Component"), cs.add(w.type);
                  }),
                  (Jd = []));
                var a = /* @__PURE__ */ new Set();
                Zd.length > 0 &&
                  (Zd.forEach(function (w) {
                    a.add(Be(w) || "Component"), cs.add(w.type);
                  }),
                  (Zd = []));
                var i = /* @__PURE__ */ new Set();
                ep.length > 0 &&
                  (ep.forEach(function (w) {
                    i.add(Be(w) || "Component"), cs.add(w.type);
                  }),
                  (ep = []));
                var u = /* @__PURE__ */ new Set();
                tp.length > 0 &&
                  (tp.forEach(function (w) {
                    u.add(Be(w) || "Component"), cs.add(w.type);
                  }),
                  (tp = []));
                var s = /* @__PURE__ */ new Set();
                if (
                  (np.length > 0 &&
                    (np.forEach(function (w) {
                      s.add(Be(w) || "Component"), cs.add(w.type);
                    }),
                    (np = [])),
                  t.size > 0)
                ) {
                  var f = ss(t);
                  y(
                    `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
                    f,
                  );
                }
                if (i.size > 0) {
                  var p = ss(i);
                  y(
                    `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
                    p,
                  );
                }
                if (s.size > 0) {
                  var h = ss(s);
                  y(
                    `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                    h,
                  );
                }
                if (e.size > 0) {
                  var g = ss(e);
                  F(
                    `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    g,
                  );
                }
                if (a.size > 0) {
                  var E = ss(a);
                  F(
                    `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    E,
                  );
                }
                if (u.size > 0) {
                  var _ = ss(u);
                  F(
                    `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    _,
                  );
                }
              });
            var Bh = /* @__PURE__ */ new Map(),
              jE = /* @__PURE__ */ new Set();
            (Ri.recordLegacyContextWarning = function (e, t) {
              var a = gw(e);
              if (a === null) {
                y(
                  "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.",
                );
                return;
              }
              if (!jE.has(e.type)) {
                var i = Bh.get(a);
                (e.type.contextTypes != null ||
                  e.type.childContextTypes != null ||
                  (t !== null && typeof t.getChildContext == "function")) &&
                  (i === void 0 && ((i = []), Bh.set(a, i)), i.push(e));
              }
            }),
              (Ri.flushLegacyContextWarning = function () {
                Bh.forEach(function (e, t) {
                  if (e.length !== 0) {
                    var a = e[0],
                      i = /* @__PURE__ */ new Set();
                    e.forEach(function (s) {
                      i.add(Be(s) || "Component"), jE.add(s.type);
                    });
                    var u = ss(i);
                    try {
                      Et(a),
                        y(
                          `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                          u,
                        );
                    } finally {
                      on();
                    }
                  }
                });
              }),
              (Ri.discardPendingWarnings = function () {
                (qd = []),
                  (Jd = []),
                  (Zd = []),
                  (ep = []),
                  (tp = []),
                  (np = []),
                  (Bh = /* @__PURE__ */ new Map());
              });
          }
          var Eg,
            Cg,
            Tg,
            Rg,
            xg,
            FE = function (e, t) {};
          (Eg = !1),
            (Cg = !1),
            (Tg = {}),
            (Rg = {}),
            (xg = {}),
            (FE = function (e, t) {
              if (
                !(e === null || typeof e != "object") &&
                !(!e._store || e._store.validated || e.key != null)
              ) {
                if (typeof e._store != "object")
                  throw new Error(
                    "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.",
                  );
                e._store.validated = !0;
                var a = Be(t) || "Component";
                Rg[a] ||
                  ((Rg[a] = !0),
                  y(
                    'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.',
                  ));
              }
            });
          function Sw(e) {
            return e.prototype && e.prototype.isReactComponent;
          }
          function rp(e, t, a) {
            var i = a.ref;
            if (i !== null && typeof i != "function" && typeof i != "object") {
              if (
                (e.mode & qe || er) && // We warn in ReactElement.js if owner and self are equal for string refs
                // because these cannot be automatically converted to an arrow function
                // using a codemod. Therefore, we don't have to warn about string refs again.
                !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
                !(a._owner && a._owner.tag !== j) && // Will already warn with "Function components cannot be given refs"
                !(typeof a.type == "function" && !Sw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
                a._owner
              ) {
                var u = Be(e) || "Component";
                Tg[u] ||
                  (y(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    u,
                    i,
                  ),
                  (Tg[u] = !0));
              }
              if (a._owner) {
                var s = a._owner,
                  f;
                if (s) {
                  var p = s;
                  if (p.tag !== j)
                    throw new Error(
                      "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref",
                    );
                  f = p.stateNode;
                }
                if (!f)
                  throw new Error(
                    "Missing owner for string ref " +
                      i +
                      ". This error is likely caused by a bug in React. Please file an issue.",
                  );
                var h = f;
                ai(i, "ref");
                var g = "" + i;
                if (
                  t !== null &&
                  t.ref !== null &&
                  typeof t.ref == "function" &&
                  t.ref._stringRef === g
                )
                  return t.ref;
                var E = function (_) {
                  var w = h.refs;
                  _ === null ? delete w[g] : (w[g] = _);
                };
                return (E._stringRef = g), E;
              } else {
                if (typeof i != "string")
                  throw new Error(
                    "Expected ref to be a function, a string, an object returned by React.createRef(), or null.",
                  );
                if (!a._owner)
                  throw new Error(
                    "Element ref was specified as a string (" +
                      i +
                      `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`,
                  );
              }
            }
            return i;
          }
          function Ph(e, t) {
            var a = Object.prototype.toString.call(t);
            throw new Error(
              "Objects are not valid as a React child (found: " +
                (a === "[object Object]"
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : a) +
                "). If you meant to render a collection of children, use an array instead.",
            );
          }
          function $h(e) {
            {
              var t = Be(e) || "Component";
              if (xg[t]) return;
              (xg[t] = !0),
                y(
                  "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.",
                );
            }
          }
          function HE(e) {
            var t = e._payload,
              a = e._init;
            return a(t);
          }
          function VE(e) {
            function t(L, V) {
              if (e) {
                var N = L.deletions;
                N === null ? ((L.deletions = [V]), (L.flags |= ft)) : N.push(V);
              }
            }
            function a(L, V) {
              if (!e) return null;
              for (var N = V; N !== null; ) t(L, N), (N = N.sibling);
              return null;
            }
            function i(L, V) {
              for (var N = /* @__PURE__ */ new Map(), X = V; X !== null; )
                X.key !== null ? N.set(X.key, X) : N.set(X.index, X),
                  (X = X.sibling);
              return N;
            }
            function u(L, V) {
              var N = Ss(L, V);
              return (N.index = 0), (N.sibling = null), N;
            }
            function s(L, V, N) {
              if (((L.index = N), !e)) return (L.flags |= rd), V;
              var X = L.alternate;
              if (X !== null) {
                var de = X.index;
                return de < V ? ((L.flags |= Ot), V) : de;
              } else return (L.flags |= Ot), V;
            }
            function f(L) {
              return e && L.alternate === null && (L.flags |= Ot), L;
            }
            function p(L, V, N, X) {
              if (V === null || V.tag !== _e) {
                var de = S0(N, L.mode, X);
                return (de.return = L), de;
              } else {
                var ue = u(V, N);
                return (ue.return = L), ue;
              }
            }
            function h(L, V, N, X) {
              var de = N.type;
              if (de === _a) return E(L, V, N.props.children, X, N.key);
              if (
                V !== null &&
                (V.elementType === de || // Keep this check inline so it only runs on the false path:
                  W1(V, N) || // Lazy types should reconcile their resolved type.
                  // We need to do this after the Hot Reloading check above,
                  // because hot reloading has different semantics than prod because
                  // it doesn't resuspend. So we can't let the call below suspend.
                  (typeof de == "object" &&
                    de !== null &&
                    de.$$typeof === Me &&
                    HE(de) === V.type))
              ) {
                var ue = u(V, N.props);
                return (
                  (ue.ref = rp(L, V, N)),
                  (ue.return = L),
                  (ue._debugSource = N._source),
                  (ue._debugOwner = N._owner),
                  ue
                );
              }
              var Ue = g0(N, L.mode, X);
              return (Ue.ref = rp(L, V, N)), (Ue.return = L), Ue;
            }
            function g(L, V, N, X) {
              if (
                V === null ||
                V.tag !== J ||
                V.stateNode.containerInfo !== N.containerInfo ||
                V.stateNode.implementation !== N.implementation
              ) {
                var de = E0(N, L.mode, X);
                return (de.return = L), de;
              } else {
                var ue = u(V, N.children || []);
                return (ue.return = L), ue;
              }
            }
            function E(L, V, N, X, de) {
              if (V === null || V.tag !== Ie) {
                var ue = uo(N, L.mode, X, de);
                return (ue.return = L), ue;
              } else {
                var Ue = u(V, N);
                return (Ue.return = L), Ue;
              }
            }
            function _(L, V, N) {
              if ((typeof V == "string" && V !== "") || typeof V == "number") {
                var X = S0("" + V, L.mode, N);
                return (X.return = L), X;
              }
              if (typeof V == "object" && V !== null) {
                switch (V.$$typeof) {
                  case ii: {
                    var de = g0(V, L.mode, N);
                    return (de.ref = rp(L, null, V)), (de.return = L), de;
                  }
                  case Ar: {
                    var ue = E0(V, L.mode, N);
                    return (ue.return = L), ue;
                  }
                  case Me: {
                    var Ue = V._payload,
                      Ve = V._init;
                    return _(L, Ve(Ue), N);
                  }
                }
                if (Cn(V) || jr(V)) {
                  var Tt = uo(V, L.mode, N, null);
                  return (Tt.return = L), Tt;
                }
                Ph(L, V);
              }
              return typeof V == "function" && $h(L), null;
            }
            function w(L, V, N, X) {
              var de = V !== null ? V.key : null;
              if ((typeof N == "string" && N !== "") || typeof N == "number")
                return de !== null ? null : p(L, V, "" + N, X);
              if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                  case ii:
                    return N.key === de ? h(L, V, N, X) : null;
                  case Ar:
                    return N.key === de ? g(L, V, N, X) : null;
                  case Me: {
                    var ue = N._payload,
                      Ue = N._init;
                    return w(L, V, Ue(ue), X);
                  }
                }
                if (Cn(N) || jr(N))
                  return de !== null ? null : E(L, V, N, X, null);
                Ph(L, N);
              }
              return typeof N == "function" && $h(L), null;
            }
            function M(L, V, N, X, de) {
              if ((typeof X == "string" && X !== "") || typeof X == "number") {
                var ue = L.get(N) || null;
                return p(V, ue, "" + X, de);
              }
              if (typeof X == "object" && X !== null) {
                switch (X.$$typeof) {
                  case ii: {
                    var Ue = L.get(X.key === null ? N : X.key) || null;
                    return h(V, Ue, X, de);
                  }
                  case Ar: {
                    var Ve = L.get(X.key === null ? N : X.key) || null;
                    return g(V, Ve, X, de);
                  }
                  case Me:
                    var Tt = X._payload,
                      ot = X._init;
                    return M(L, V, N, ot(Tt), de);
                }
                if (Cn(X) || jr(X)) {
                  var vn = L.get(N) || null;
                  return E(V, vn, X, de, null);
                }
                Ph(V, X);
              }
              return typeof X == "function" && $h(V), null;
            }
            function z(L, V, N) {
              {
                if (typeof L != "object" || L === null) return V;
                switch (L.$$typeof) {
                  case ii:
                  case Ar:
                    FE(L, N);
                    var X = L.key;
                    if (typeof X != "string") break;
                    if (V === null) {
                      (V = /* @__PURE__ */ new Set()), V.add(X);
                      break;
                    }
                    if (!V.has(X)) {
                      V.add(X);
                      break;
                    }
                    y(
                      "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                      X,
                    );
                    break;
                  case Me:
                    var de = L._payload,
                      ue = L._init;
                    z(ue(de), V, N);
                    break;
                }
              }
              return V;
            }
            function H(L, V, N, X) {
              for (var de = null, ue = 0; ue < N.length; ue++) {
                var Ue = N[ue];
                de = z(Ue, de, L);
              }
              for (
                var Ve = null, Tt = null, ot = V, vn = 0, st = 0, ln = null;
                ot !== null && st < N.length;
                st++
              ) {
                ot.index > st ? ((ln = ot), (ot = null)) : (ln = ot.sibling);
                var kr = w(L, ot, N[st], X);
                if (kr === null) {
                  ot === null && (ot = ln);
                  break;
                }
                e && ot && kr.alternate === null && t(L, ot),
                  (vn = s(kr, vn, st)),
                  Tt === null ? (Ve = kr) : (Tt.sibling = kr),
                  (Tt = kr),
                  (ot = ln);
              }
              if (st === N.length) {
                if ((a(L, ot), rr())) {
                  var cr = st;
                  ls(L, cr);
                }
                return Ve;
              }
              if (ot === null) {
                for (; st < N.length; st++) {
                  var ja = _(L, N[st], X);
                  ja !== null &&
                    ((vn = s(ja, vn, st)),
                    Tt === null ? (Ve = ja) : (Tt.sibling = ja),
                    (Tt = ja));
                }
                if (rr()) {
                  var Gr = st;
                  ls(L, Gr);
                }
                return Ve;
              }
              for (var Xr = i(L, ot); st < N.length; st++) {
                var Lr = M(Xr, L, st, N[st], X);
                Lr !== null &&
                  (e &&
                    Lr.alternate !== null &&
                    Xr.delete(Lr.key === null ? st : Lr.key),
                  (vn = s(Lr, vn, st)),
                  Tt === null ? (Ve = Lr) : (Tt.sibling = Lr),
                  (Tt = Lr));
              }
              if (
                (e &&
                  Xr.forEach(function (Sf) {
                    return t(L, Sf);
                  }),
                rr())
              ) {
                var ql = st;
                ls(L, ql);
              }
              return Ve;
            }
            function le(L, V, N, X) {
              var de = jr(N);
              if (typeof de != "function")
                throw new Error(
                  "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.",
                );
              {
                typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
                  N[Symbol.toStringTag] === "Generator" &&
                  (Cg ||
                    y(
                      "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.",
                    ),
                  (Cg = !0)),
                  N.entries === de &&
                    (Eg ||
                      y(
                        "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
                      ),
                    (Eg = !0));
                var ue = de.call(N);
                if (ue)
                  for (
                    var Ue = null, Ve = ue.next();
                    !Ve.done;
                    Ve = ue.next()
                  ) {
                    var Tt = Ve.value;
                    Ue = z(Tt, Ue, L);
                  }
              }
              var ot = de.call(N);
              if (ot == null)
                throw new Error("An iterable object provided no iterator.");
              for (
                var vn = null,
                  st = null,
                  ln = V,
                  kr = 0,
                  cr = 0,
                  ja = null,
                  Gr = ot.next();
                ln !== null && !Gr.done;
                cr++, Gr = ot.next()
              ) {
                ln.index > cr ? ((ja = ln), (ln = null)) : (ja = ln.sibling);
                var Xr = w(L, ln, Gr.value, X);
                if (Xr === null) {
                  ln === null && (ln = ja);
                  break;
                }
                e && ln && Xr.alternate === null && t(L, ln),
                  (kr = s(Xr, kr, cr)),
                  st === null ? (vn = Xr) : (st.sibling = Xr),
                  (st = Xr),
                  (ln = ja);
              }
              if (Gr.done) {
                if ((a(L, ln), rr())) {
                  var Lr = cr;
                  ls(L, Lr);
                }
                return vn;
              }
              if (ln === null) {
                for (; !Gr.done; cr++, Gr = ot.next()) {
                  var ql = _(L, Gr.value, X);
                  ql !== null &&
                    ((kr = s(ql, kr, cr)),
                    st === null ? (vn = ql) : (st.sibling = ql),
                    (st = ql));
                }
                if (rr()) {
                  var Sf = cr;
                  ls(L, Sf);
                }
                return vn;
              }
              for (var zp = i(L, ln); !Gr.done; cr++, Gr = ot.next()) {
                var ol = M(zp, L, cr, Gr.value, X);
                ol !== null &&
                  (e &&
                    ol.alternate !== null &&
                    zp.delete(ol.key === null ? cr : ol.key),
                  (kr = s(ol, kr, cr)),
                  st === null ? (vn = ol) : (st.sibling = ol),
                  (st = ol));
              }
              if (
                (e &&
                  zp.forEach(function (WD) {
                    return t(L, WD);
                  }),
                rr())
              ) {
                var YD = cr;
                ls(L, YD);
              }
              return vn;
            }
            function De(L, V, N, X) {
              if (V !== null && V.tag === _e) {
                a(L, V.sibling);
                var de = u(V, N);
                return (de.return = L), de;
              }
              a(L, V);
              var ue = S0(N, L.mode, X);
              return (ue.return = L), ue;
            }
            function Ce(L, V, N, X) {
              for (var de = N.key, ue = V; ue !== null; ) {
                if (ue.key === de) {
                  var Ue = N.type;
                  if (Ue === _a) {
                    if (ue.tag === Ie) {
                      a(L, ue.sibling);
                      var Ve = u(ue, N.props.children);
                      return (
                        (Ve.return = L),
                        (Ve._debugSource = N._source),
                        (Ve._debugOwner = N._owner),
                        Ve
                      );
                    }
                  } else if (
                    ue.elementType === Ue || // Keep this check inline so it only runs on the false path:
                    W1(ue, N) || // Lazy types should reconcile their resolved type.
                    // We need to do this after the Hot Reloading check above,
                    // because hot reloading has different semantics than prod because
                    // it doesn't resuspend. So we can't let the call below suspend.
                    (typeof Ue == "object" &&
                      Ue !== null &&
                      Ue.$$typeof === Me &&
                      HE(Ue) === ue.type)
                  ) {
                    a(L, ue.sibling);
                    var Tt = u(ue, N.props);
                    return (
                      (Tt.ref = rp(L, ue, N)),
                      (Tt.return = L),
                      (Tt._debugSource = N._source),
                      (Tt._debugOwner = N._owner),
                      Tt
                    );
                  }
                  a(L, ue);
                  break;
                } else t(L, ue);
                ue = ue.sibling;
              }
              if (N.type === _a) {
                var ot = uo(N.props.children, L.mode, X, N.key);
                return (ot.return = L), ot;
              } else {
                var vn = g0(N, L.mode, X);
                return (vn.ref = rp(L, V, N)), (vn.return = L), vn;
              }
            }
            function rt(L, V, N, X) {
              for (var de = N.key, ue = V; ue !== null; ) {
                if (ue.key === de)
                  if (
                    ue.tag === J &&
                    ue.stateNode.containerInfo === N.containerInfo &&
                    ue.stateNode.implementation === N.implementation
                  ) {
                    a(L, ue.sibling);
                    var Ue = u(ue, N.children || []);
                    return (Ue.return = L), Ue;
                  } else {
                    a(L, ue);
                    break;
                  }
                else t(L, ue);
                ue = ue.sibling;
              }
              var Ve = E0(N, L.mode, X);
              return (Ve.return = L), Ve;
            }
            function Ze(L, V, N, X) {
              var de =
                typeof N == "object" &&
                N !== null &&
                N.type === _a &&
                N.key === null;
              if (
                (de && (N = N.props.children),
                typeof N == "object" && N !== null)
              ) {
                switch (N.$$typeof) {
                  case ii:
                    return f(Ce(L, V, N, X));
                  case Ar:
                    return f(rt(L, V, N, X));
                  case Me:
                    var ue = N._payload,
                      Ue = N._init;
                    return Ze(L, V, Ue(ue), X);
                }
                if (Cn(N)) return H(L, V, N, X);
                if (jr(N)) return le(L, V, N, X);
                Ph(L, N);
              }
              return (typeof N == "string" && N !== "") || typeof N == "number"
                ? f(De(L, V, "" + N, X))
                : (typeof N == "function" && $h(L), a(L, V));
            }
            return Ze;
          }
          var ef = VE(!0),
            BE = VE(!1);
          function Ew(e, t) {
            if (e !== null && t.child !== e.child)
              throw new Error("Resuming work not yet implemented.");
            if (t.child !== null) {
              var a = t.child,
                i = Ss(a, a.pendingProps);
              for (t.child = i, i.return = t; a.sibling !== null; )
                (a = a.sibling),
                  (i = i.sibling = Ss(a, a.pendingProps)),
                  (i.return = t);
              i.sibling = null;
            }
          }
          function Cw(e, t) {
            for (var a = e.child; a !== null; ) oD(a, t), (a = a.sibling);
          }
          var wg = Iu(null),
            bg;
          bg = {};
          var Yh = null,
            tf = null,
            _g = null,
            Wh = !1;
          function Qh() {
            (Yh = null), (tf = null), (_g = null), (Wh = !1);
          }
          function PE() {
            Wh = !0;
          }
          function $E() {
            Wh = !1;
          }
          function YE(e, t, a) {
            _r(wg, t._currentValue, e),
              (t._currentValue = a),
              t._currentRenderer !== void 0 &&
                t._currentRenderer !== null &&
                t._currentRenderer !== bg &&
                y(
                  "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.",
                ),
              (t._currentRenderer = bg);
          }
          function Dg(e, t) {
            var a = wg.current;
            br(wg, t), (e._currentValue = a);
          }
          function kg(e, t, a) {
            for (var i = e; i !== null; ) {
              var u = i.alternate;
              if (
                (Ol(i.childLanes, t)
                  ? u !== null &&
                    !Ol(u.childLanes, t) &&
                    (u.childLanes = Pe(u.childLanes, t))
                  : ((i.childLanes = Pe(i.childLanes, t)),
                    u !== null && (u.childLanes = Pe(u.childLanes, t))),
                i === a)
              )
                break;
              i = i.return;
            }
            i !== a &&
              y(
                "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.",
              );
          }
          function Tw(e, t, a) {
            Rw(e, t, a);
          }
          function Rw(e, t, a) {
            var i = e.child;
            for (i !== null && (i.return = e); i !== null; ) {
              var u = void 0,
                s = i.dependencies;
              if (s !== null) {
                u = i.child;
                for (var f = s.firstContext; f !== null; ) {
                  if (f.context === t) {
                    if (i.tag === j) {
                      var p = Du(a),
                        h = Wl(Dt, p);
                      h.tag = Gh;
                      var g = i.updateQueue;
                      if (g !== null) {
                        var E = g.shared,
                          _ = E.pending;
                        _ === null
                          ? (h.next = h)
                          : ((h.next = _.next), (_.next = h)),
                          (E.pending = h);
                      }
                    }
                    i.lanes = Pe(i.lanes, a);
                    var w = i.alternate;
                    w !== null && (w.lanes = Pe(w.lanes, a)),
                      kg(i.return, a, e),
                      (s.lanes = Pe(s.lanes, a));
                    break;
                  }
                  f = f.next;
                }
              } else if (i.tag === ke) u = i.type === e.type ? null : i.child;
              else if (i.tag === wt) {
                var M = i.return;
                if (M === null)
                  throw new Error(
                    "We just came from a parent so we must have had a parent. This is a bug in React.",
                  );
                M.lanes = Pe(M.lanes, a);
                var z = M.alternate;
                z !== null && (z.lanes = Pe(z.lanes, a)),
                  kg(M, a, e),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === e) {
                    u = null;
                    break;
                  }
                  var H = u.sibling;
                  if (H !== null) {
                    (H.return = u.return), (u = H);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
          }
          function nf(e, t) {
            (Yh = e), (tf = null), (_g = null);
            var a = e.dependencies;
            if (a !== null) {
              var i = a.firstContext;
              i !== null && (xr(a.lanes, t) && gp(), (a.firstContext = null));
            }
          }
          function _n(e) {
            Wh &&
              y(
                "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
              );
            var t = e._currentValue;
            if (_g !== e) {
              var a = {
                context: e,
                memoizedValue: t,
                next: null,
              };
              if (tf === null) {
                if (Yh === null)
                  throw new Error(
                    "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
                  );
                (tf = a),
                  (Yh.dependencies = {
                    lanes: Y,
                    firstContext: a,
                  });
              } else tf = tf.next = a;
            }
            return t;
          }
          var fs = null;
          function Lg(e) {
            fs === null ? (fs = [e]) : fs.push(e);
          }
          function xw() {
            if (fs !== null) {
              for (var e = 0; e < fs.length; e++) {
                var t = fs[e],
                  a = t.interleaved;
                if (a !== null) {
                  t.interleaved = null;
                  var i = a.next,
                    u = t.pending;
                  if (u !== null) {
                    var s = u.next;
                    (u.next = i), (a.next = s);
                  }
                  t.pending = a;
                }
              }
              fs = null;
            }
          }
          function WE(e, t, a, i) {
            var u = t.interleaved;
            return (
              u === null
                ? ((a.next = a), Lg(t))
                : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a),
              Ih(e, i)
            );
          }
          function ww(e, t, a, i) {
            var u = t.interleaved;
            u === null
              ? ((a.next = a), Lg(t))
              : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a);
          }
          function bw(e, t, a, i) {
            var u = t.interleaved;
            return (
              u === null
                ? ((a.next = a), Lg(t))
                : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a),
              Ih(e, i)
            );
          }
          function ya(e, t) {
            return Ih(e, t);
          }
          var _w = Ih;
          function Ih(e, t) {
            e.lanes = Pe(e.lanes, t);
            var a = e.alternate;
            a !== null && (a.lanes = Pe(a.lanes, t)),
              a === null && (e.flags & (Ot | ia)) !== be && B1(e);
            for (var i = e, u = e.return; u !== null; )
              (u.childLanes = Pe(u.childLanes, t)),
                (a = u.alternate),
                a !== null
                  ? (a.childLanes = Pe(a.childLanes, t))
                  : (u.flags & (Ot | ia)) !== be && B1(e),
                (i = u),
                (u = u.return);
            if (i.tag === $) {
              var s = i.stateNode;
              return s;
            } else return null;
          }
          var QE = 0,
            IE = 1,
            Gh = 2,
            Ng = 3,
            Xh = !1,
            Og,
            Kh;
          (Og = !1), (Kh = null);
          function Mg(e) {
            var t = {
              baseState: e.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: {
                pending: null,
                interleaved: null,
                lanes: Y,
              },
              effects: null,
            };
            e.updateQueue = t;
          }
          function GE(e, t) {
            var a = t.updateQueue,
              i = e.updateQueue;
            if (a === i) {
              var u = {
                baseState: i.baseState,
                firstBaseUpdate: i.firstBaseUpdate,
                lastBaseUpdate: i.lastBaseUpdate,
                shared: i.shared,
                effects: i.effects,
              };
              t.updateQueue = u;
            }
          }
          function Wl(e, t) {
            var a = {
              eventTime: e,
              lane: t,
              tag: QE,
              payload: null,
              callback: null,
              next: null,
            };
            return a;
          }
          function qu(e, t, a) {
            var i = e.updateQueue;
            if (i === null) return null;
            var u = i.shared;
            if (
              (Kh === u &&
                !Og &&
                (y(
                  "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.",
                ),
                (Og = !0)),
              w_())
            ) {
              var s = u.pending;
              return (
                s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
                (u.pending = t),
                _w(e, a)
              );
            } else return bw(e, u, t, a);
          }
          function qh(e, t, a) {
            var i = t.updateQueue;
            if (i !== null) {
              var u = i.shared;
              if (gd(a)) {
                var s = u.lanes;
                s = Sc(s, e.pendingLanes);
                var f = Pe(s, a);
                (u.lanes = f), Sd(e, f);
              }
            }
          }
          function Ug(e, t) {
            var a = e.updateQueue,
              i = e.alternate;
            if (i !== null) {
              var u = i.updateQueue;
              if (a === u) {
                var s = null,
                  f = null,
                  p = a.firstBaseUpdate;
                if (p !== null) {
                  var h = p;
                  do {
                    var g = {
                      eventTime: h.eventTime,
                      lane: h.lane,
                      tag: h.tag,
                      payload: h.payload,
                      callback: h.callback,
                      next: null,
                    };
                    f === null ? (s = f = g) : ((f.next = g), (f = g)),
                      (h = h.next);
                  } while (h !== null);
                  f === null ? (s = f = t) : ((f.next = t), (f = t));
                } else s = f = t;
                (a = {
                  baseState: u.baseState,
                  firstBaseUpdate: s,
                  lastBaseUpdate: f,
                  shared: u.shared,
                  effects: u.effects,
                }),
                  (e.updateQueue = a);
                return;
              }
            }
            var E = a.lastBaseUpdate;
            E === null ? (a.firstBaseUpdate = t) : (E.next = t),
              (a.lastBaseUpdate = t);
          }
          function Dw(e, t, a, i, u, s) {
            switch (a.tag) {
              case IE: {
                var f = a.payload;
                if (typeof f == "function") {
                  PE();
                  var p = f.call(s, i, u);
                  {
                    if (e.mode & qe) {
                      rn(!0);
                      try {
                        f.call(s, i, u);
                      } finally {
                        rn(!1);
                      }
                    }
                    $E();
                  }
                  return p;
                }
                return f;
              }
              case Ng:
                e.flags = (e.flags & ~Rn) | ze;
              case QE: {
                var h = a.payload,
                  g;
                if (typeof h == "function") {
                  PE(), (g = h.call(s, i, u));
                  {
                    if (e.mode & qe) {
                      rn(!0);
                      try {
                        h.call(s, i, u);
                      } finally {
                        rn(!1);
                      }
                    }
                    $E();
                  }
                } else g = h;
                return g == null ? i : Ke({}, i, g);
              }
              case Gh:
                return (Xh = !0), i;
            }
            return i;
          }
          function Jh(e, t, a, i) {
            var u = e.updateQueue;
            (Xh = !1), (Kh = u.shared);
            var s = u.firstBaseUpdate,
              f = u.lastBaseUpdate,
              p = u.shared.pending;
            if (p !== null) {
              u.shared.pending = null;
              var h = p,
                g = h.next;
              (h.next = null), f === null ? (s = g) : (f.next = g), (f = h);
              var E = e.alternate;
              if (E !== null) {
                var _ = E.updateQueue,
                  w = _.lastBaseUpdate;
                w !== f &&
                  (w === null ? (_.firstBaseUpdate = g) : (w.next = g),
                  (_.lastBaseUpdate = h));
              }
            }
            if (s !== null) {
              var M = u.baseState,
                z = Y,
                H = null,
                le = null,
                De = null,
                Ce = s;
              do {
                var rt = Ce.lane,
                  Ze = Ce.eventTime;
                if (Ol(i, rt)) {
                  if (De !== null) {
                    var V = {
                      eventTime: Ze,
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: an,
                      tag: Ce.tag,
                      payload: Ce.payload,
                      callback: Ce.callback,
                      next: null,
                    };
                    De = De.next = V;
                  }
                  M = Dw(e, u, Ce, M, t, a);
                  var N = Ce.callback;
                  if (
                    N !== null && // If the update was already committed, we should not queue its
                    // callback again.
                    Ce.lane !== an
                  ) {
                    e.flags |= Wa;
                    var X = u.effects;
                    X === null ? (u.effects = [Ce]) : X.push(Ce);
                  }
                } else {
                  var L = {
                    eventTime: Ze,
                    lane: rt,
                    tag: Ce.tag,
                    payload: Ce.payload,
                    callback: Ce.callback,
                    next: null,
                  };
                  De === null ? ((le = De = L), (H = M)) : (De = De.next = L),
                    (z = Pe(z, rt));
                }
                if (((Ce = Ce.next), Ce === null)) {
                  if (((p = u.shared.pending), p === null)) break;
                  var de = p,
                    ue = de.next;
                  (de.next = null),
                    (Ce = ue),
                    (u.lastBaseUpdate = de),
                    (u.shared.pending = null);
                }
              } while (!0);
              De === null && (H = M),
                (u.baseState = H),
                (u.firstBaseUpdate = le),
                (u.lastBaseUpdate = De);
              var Ue = u.shared.interleaved;
              if (Ue !== null) {
                var Ve = Ue;
                do (z = Pe(z, Ve.lane)), (Ve = Ve.next);
                while (Ve !== Ue);
              } else s === null && (u.shared.lanes = Y);
              Lp(z), (e.lanes = z), (e.memoizedState = M);
            }
            Kh = null;
          }
          function kw(e, t) {
            if (typeof e != "function")
              throw new Error(
                "Invalid argument passed as callback. Expected a function. Instead " +
                  ("received: " + e),
              );
            e.call(t);
          }
          function XE() {
            Xh = !1;
          }
          function Zh() {
            return Xh;
          }
          function KE(e, t, a) {
            var i = t.effects;
            if (((t.effects = null), i !== null))
              for (var u = 0; u < i.length; u++) {
                var s = i[u],
                  f = s.callback;
                f !== null && ((s.callback = null), kw(f, a));
              }
          }
          var ap = {},
            Ju = Iu(ap),
            ip = Iu(ap),
            em = Iu(ap);
          function tm(e) {
            if (e === ap)
              throw new Error(
                "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.",
              );
            return e;
          }
          function qE() {
            var e = tm(em.current);
            return e;
          }
          function zg(e, t) {
            _r(em, t, e), _r(ip, e, e), _r(Ju, ap, e);
            var a = QR(t);
            br(Ju, e), _r(Ju, a, e);
          }
          function rf(e) {
            br(Ju, e), br(ip, e), br(em, e);
          }
          function Ag() {
            var e = tm(Ju.current);
            return e;
          }
          function JE(e) {
            tm(em.current);
            var t = tm(Ju.current),
              a = IR(t, e.type);
            t !== a && (_r(ip, e, e), _r(Ju, a, e));
          }
          function jg(e) {
            ip.current === e && (br(Ju, e), br(ip, e));
          }
          var Lw = 0,
            ZE = 1,
            eC = 1,
            lp = 2,
            xi = Iu(Lw);
          function Fg(e, t) {
            return (e & t) !== 0;
          }
          function af(e) {
            return e & ZE;
          }
          function Hg(e, t) {
            return (e & ZE) | t;
          }
          function Nw(e, t) {
            return e | t;
          }
          function Zu(e, t) {
            _r(xi, t, e);
          }
          function lf(e) {
            br(xi, e);
          }
          function Ow(e, t) {
            var a = e.memoizedState;
            return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
          }
          function nm(e) {
            for (var t = e; t !== null; ) {
              if (t.tag === We) {
                var a = t.memoizedState;
                if (a !== null) {
                  var i = a.dehydrated;
                  if (i === null || yE(i) || rg(i)) return t;
                }
              } else if (
                t.tag === dt && // revealOrder undefined can't be trusted because it don't
                // keep track of whether it suspended or not.
                t.memoizedProps.revealOrder !== void 0
              ) {
                var u = (t.flags & ze) !== be;
                if (u) return t;
              } else if (t.child !== null) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) return null;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
            return null;
          }
          var ga =
              /*   */
              0,
            zn =
              /* */
              1,
            tl =
              /*  */
              2,
            An =
              /*    */
              4,
            ar =
              /*   */
              8,
            Vg = [];
          function Bg() {
            for (var e = 0; e < Vg.length; e++) {
              var t = Vg[e];
              t._workInProgressVersionPrimary = null;
            }
            Vg.length = 0;
          }
          function Mw(e, t) {
            var a = t._getVersion,
              i = a(t._source);
            e.mutableSourceEagerHydrationData == null
              ? (e.mutableSourceEagerHydrationData = [t, i])
              : e.mutableSourceEagerHydrationData.push(t, i);
          }
          var ce = S.ReactCurrentDispatcher,
            up = S.ReactCurrentBatchConfig,
            Pg,
            uf;
          Pg = /* @__PURE__ */ new Set();
          var ds = Y,
            Ct = null,
            jn = null,
            Fn = null,
            rm = !1,
            op = !1,
            sp = 0,
            Uw = 0,
            zw = 25,
            B = null,
            ei = null,
            eo = -1,
            $g = !1;
          function ht() {
            {
              var e = B;
              ei === null ? (ei = [e]) : ei.push(e);
            }
          }
          function ae() {
            {
              var e = B;
              ei !== null && (eo++, ei[eo] !== e && Aw(e));
            }
          }
          function of(e) {
            e != null &&
              !Cn(e) &&
              y(
                "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
                B,
                typeof e,
              );
          }
          function Aw(e) {
            {
              var t = Be(Ct);
              if (!Pg.has(t) && (Pg.add(t), ei !== null)) {
                for (var a = "", i = 30, u = 0; u <= eo; u++) {
                  for (
                    var s = ei[u], f = u === eo ? e : s, p = u + 1 + ". " + s;
                    p.length < i;

                  )
                    p += " ";
                  (p +=
                    f +
                    `
`),
                    (a += p);
                }
                y(
                  `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
                  t,
                  a,
                );
              }
            }
          }
          function Dr() {
            throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
          }
          function Yg(e, t) {
            if ($g) return !1;
            if (t === null)
              return (
                y(
                  "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                  B,
                ),
                !1
              );
            e.length !== t.length &&
              y(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                B,
                "[" + t.join(", ") + "]",
                "[" + e.join(", ") + "]",
              );
            for (var a = 0; a < t.length && a < e.length; a++)
              if (!he(e[a], t[a])) return !1;
            return !0;
          }
          function sf(e, t, a, i, u, s) {
            (ds = s),
              (Ct = t),
              (ei = e !== null ? e._debugHookTypes : null),
              (eo = -1),
              ($g = e !== null && e.type !== t.type),
              (t.memoizedState = null),
              (t.updateQueue = null),
              (t.lanes = Y),
              e !== null && e.memoizedState !== null
                ? (ce.current = TC)
                : ei !== null
                  ? (ce.current = CC)
                  : (ce.current = EC);
            var f = a(i, u);
            if (op) {
              var p = 0;
              do {
                if (((op = !1), (sp = 0), p >= zw))
                  throw new Error(
                    "Too many re-renders. React limits the number of renders to prevent an infinite loop.",
                  );
                (p += 1),
                  ($g = !1),
                  (jn = null),
                  (Fn = null),
                  (t.updateQueue = null),
                  (eo = -1),
                  (ce.current = RC),
                  (f = a(i, u));
              } while (op);
            }
            (ce.current = mm), (t._debugHookTypes = ei);
            var h = jn !== null && jn.next !== null;
            if (
              ((ds = Y),
              (Ct = null),
              (jn = null),
              (Fn = null),
              (B = null),
              (ei = null),
              (eo = -1),
              e !== null &&
                (e.flags & On) !== (t.flags & On) && // Disable this warning in legacy mode, because legacy Suspense is weird
                // and creates false positives. To make this work in legacy mode, we'd
                // need to mark fibers that commit in an incomplete state, somehow. For
                // now I'll disable the warning that most of the bugs that would trigger
                // it are either exclusive to concurrent mode or exist in both.
                (e.mode & Ee) !== ge &&
                y(
                  "Internal React error: Expected static flag was missing. Please notify the React team.",
                ),
              (rm = !1),
              h)
            )
              throw new Error(
                "Rendered fewer hooks than expected. This may be caused by an accidental early return statement.",
              );
            return f;
          }
          function cf() {
            var e = sp !== 0;
            return (sp = 0), e;
          }
          function tC(e, t, a) {
            (t.updateQueue = e.updateQueue),
              (t.mode & $r) !== ge
                ? (t.flags &= ~(Rl | gr | At | Ye))
                : (t.flags &= ~(At | Ye)),
              (e.lanes = $o(e.lanes, a));
          }
          function nC() {
            if (((ce.current = mm), rm)) {
              for (var e = Ct.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null), (e = e.next);
              }
              rm = !1;
            }
            (ds = Y),
              (Ct = null),
              (jn = null),
              (Fn = null),
              (ei = null),
              (eo = -1),
              (B = null),
              (hC = !1),
              (op = !1),
              (sp = 0);
          }
          function nl() {
            var e = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null,
            };
            return (
              Fn === null ? (Ct.memoizedState = Fn = e) : (Fn = Fn.next = e), Fn
            );
          }
          function ti() {
            var e;
            if (jn === null) {
              var t = Ct.alternate;
              t !== null ? (e = t.memoizedState) : (e = null);
            } else e = jn.next;
            var a;
            if (
              (Fn === null ? (a = Ct.memoizedState) : (a = Fn.next), a !== null)
            )
              (Fn = a), (a = Fn.next), (jn = e);
            else {
              if (e === null)
                throw new Error(
                  "Rendered more hooks than during the previous render.",
                );
              jn = e;
              var i = {
                memoizedState: jn.memoizedState,
                baseState: jn.baseState,
                baseQueue: jn.baseQueue,
                queue: jn.queue,
                next: null,
              };
              Fn === null ? (Ct.memoizedState = Fn = i) : (Fn = Fn.next = i);
            }
            return Fn;
          }
          function rC() {
            return {
              lastEffect: null,
              stores: null,
            };
          }
          function Wg(e, t) {
            return typeof t == "function" ? t(e) : t;
          }
          function Qg(e, t, a) {
            var i = nl(),
              u;
            a !== void 0 ? (u = a(t)) : (u = t),
              (i.memoizedState = i.baseState = u);
            var s = {
              pending: null,
              interleaved: null,
              lanes: Y,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: u,
            };
            i.queue = s;
            var f = (s.dispatch = Vw.bind(null, Ct, s));
            return [i.memoizedState, f];
          }
          function Ig(e, t, a) {
            var i = ti(),
              u = i.queue;
            if (u === null)
              throw new Error(
                "Should have a queue. This is likely a bug in React. Please file an issue.",
              );
            u.lastRenderedReducer = e;
            var s = jn,
              f = s.baseQueue,
              p = u.pending;
            if (p !== null) {
              if (f !== null) {
                var h = f.next,
                  g = p.next;
                (f.next = g), (p.next = h);
              }
              s.baseQueue !== f &&
                y(
                  "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.",
                ),
                (s.baseQueue = f = p),
                (u.pending = null);
            }
            if (f !== null) {
              var E = f.next,
                _ = s.baseState,
                w = null,
                M = null,
                z = null,
                H = E;
              do {
                var le = H.lane;
                if (Ol(ds, le)) {
                  if (z !== null) {
                    var Ce = {
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: an,
                      action: H.action,
                      hasEagerState: H.hasEagerState,
                      eagerState: H.eagerState,
                      next: null,
                    };
                    z = z.next = Ce;
                  }
                  if (H.hasEagerState) _ = H.eagerState;
                  else {
                    var rt = H.action;
                    _ = e(_, rt);
                  }
                } else {
                  var De = {
                    lane: le,
                    action: H.action,
                    hasEagerState: H.hasEagerState,
                    eagerState: H.eagerState,
                    next: null,
                  };
                  z === null ? ((M = z = De), (w = _)) : (z = z.next = De),
                    (Ct.lanes = Pe(Ct.lanes, le)),
                    Lp(le);
                }
                H = H.next;
              } while (H !== null && H !== E);
              z === null ? (w = _) : (z.next = M),
                he(_, i.memoizedState) || gp(),
                (i.memoizedState = _),
                (i.baseState = w),
                (i.baseQueue = z),
                (u.lastRenderedState = _);
            }
            var Ze = u.interleaved;
            if (Ze !== null) {
              var L = Ze;
              do {
                var V = L.lane;
                (Ct.lanes = Pe(Ct.lanes, V)), Lp(V), (L = L.next);
              } while (L !== Ze);
            } else f === null && (u.lanes = Y);
            var N = u.dispatch;
            return [i.memoizedState, N];
          }
          function Gg(e, t, a) {
            var i = ti(),
              u = i.queue;
            if (u === null)
              throw new Error(
                "Should have a queue. This is likely a bug in React. Please file an issue.",
              );
            u.lastRenderedReducer = e;
            var s = u.dispatch,
              f = u.pending,
              p = i.memoizedState;
            if (f !== null) {
              u.pending = null;
              var h = f.next,
                g = h;
              do {
                var E = g.action;
                (p = e(p, E)), (g = g.next);
              } while (g !== h);
              he(p, i.memoizedState) || gp(),
                (i.memoizedState = p),
                i.baseQueue === null && (i.baseState = p),
                (u.lastRenderedState = p);
            }
            return [p, s];
          }
          function aL(e, t, a) {}
          function iL(e, t, a) {}
          function Xg(e, t, a) {
            var i = Ct,
              u = nl(),
              s,
              f = rr();
            if (f) {
              if (a === void 0)
                throw new Error(
                  "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.",
                );
              (s = a()),
                uf ||
                  (s !== a() &&
                    (y(
                      "The result of getServerSnapshot should be cached to avoid an infinite loop",
                    ),
                    (uf = !0)));
            } else {
              if (((s = t()), !uf)) {
                var p = t();
                he(s, p) ||
                  (y(
                    "The result of getSnapshot should be cached to avoid an infinite loop",
                  ),
                  (uf = !0));
              }
              var h = zm();
              if (h === null)
                throw new Error(
                  "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
                );
              Po(h, ds) || aC(i, t, s);
            }
            u.memoizedState = s;
            var g = {
              value: s,
              getSnapshot: t,
            };
            return (
              (u.queue = g),
              om(lC.bind(null, i, g, e), [e]),
              (i.flags |= At),
              cp(zn | ar, iC.bind(null, i, g, s, t), void 0, null),
              s
            );
          }
          function am(e, t, a) {
            var i = Ct,
              u = ti(),
              s = t();
            if (!uf) {
              var f = t();
              he(s, f) ||
                (y(
                  "The result of getSnapshot should be cached to avoid an infinite loop",
                ),
                (uf = !0));
            }
            var p = u.memoizedState,
              h = !he(p, s);
            h && ((u.memoizedState = s), gp());
            var g = u.queue;
            if (
              (dp(lC.bind(null, i, g, e), [e]),
              g.getSnapshot !== t ||
                h || // Check if the susbcribe function changed. We can save some memory by
                // checking whether we scheduled a subscription effect above.
                (Fn !== null && Fn.memoizedState.tag & zn))
            ) {
              (i.flags |= At),
                cp(zn | ar, iC.bind(null, i, g, s, t), void 0, null);
              var E = zm();
              if (E === null)
                throw new Error(
                  "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
                );
              Po(E, ds) || aC(i, t, s);
            }
            return s;
          }
          function aC(e, t, a) {
            e.flags |= Oo;
            var i = {
                getSnapshot: t,
                value: a,
              },
              u = Ct.updateQueue;
            if (u === null) (u = rC()), (Ct.updateQueue = u), (u.stores = [i]);
            else {
              var s = u.stores;
              s === null ? (u.stores = [i]) : s.push(i);
            }
          }
          function iC(e, t, a, i) {
            (t.value = a), (t.getSnapshot = i), uC(t) && oC(e);
          }
          function lC(e, t, a) {
            var i = function () {
              uC(t) && oC(e);
            };
            return a(i);
          }
          function uC(e) {
            var t = e.getSnapshot,
              a = e.value;
            try {
              var i = t();
              return !he(a, i);
            } catch {
              return !0;
            }
          }
          function oC(e) {
            var t = ya(e, Re);
            t !== null && Pn(t, e, Re, Dt);
          }
          function im(e) {
            var t = nl();
            typeof e == "function" && (e = e()),
              (t.memoizedState = t.baseState = e);
            var a = {
              pending: null,
              interleaved: null,
              lanes: Y,
              dispatch: null,
              lastRenderedReducer: Wg,
              lastRenderedState: e,
            };
            t.queue = a;
            var i = (a.dispatch = Bw.bind(null, Ct, a));
            return [t.memoizedState, i];
          }
          function Kg(e) {
            return Ig(Wg);
          }
          function qg(e) {
            return Gg(Wg);
          }
          function cp(e, t, a, i) {
            var u = {
                tag: e,
                create: t,
                destroy: a,
                deps: i,
                // Circular
                next: null,
              },
              s = Ct.updateQueue;
            if (s === null)
              (s = rC()), (Ct.updateQueue = s), (s.lastEffect = u.next = u);
            else {
              var f = s.lastEffect;
              if (f === null) s.lastEffect = u.next = u;
              else {
                var p = f.next;
                (f.next = u), (u.next = p), (s.lastEffect = u);
              }
            }
            return u;
          }
          function Jg(e) {
            var t = nl();
            {
              var a = {
                current: e,
              };
              return (t.memoizedState = a), a;
            }
          }
          function lm(e) {
            var t = ti();
            return t.memoizedState;
          }
          function fp(e, t, a, i) {
            var u = nl(),
              s = i === void 0 ? null : i;
            (Ct.flags |= e), (u.memoizedState = cp(zn | t, a, void 0, s));
          }
          function um(e, t, a, i) {
            var u = ti(),
              s = i === void 0 ? null : i,
              f = void 0;
            if (jn !== null) {
              var p = jn.memoizedState;
              if (((f = p.destroy), s !== null)) {
                var h = p.deps;
                if (Yg(s, h)) {
                  u.memoizedState = cp(t, a, f, s);
                  return;
                }
              }
            }
            (Ct.flags |= e), (u.memoizedState = cp(zn | t, a, f, s));
          }
          function om(e, t) {
            return (Ct.mode & $r) !== ge
              ? fp(Rl | At | $i, ar, e, t)
              : fp(At | $i, ar, e, t);
          }
          function dp(e, t) {
            return um(At, ar, e, t);
          }
          function Zg(e, t) {
            return fp(Ye, tl, e, t);
          }
          function sm(e, t) {
            return um(Ye, tl, e, t);
          }
          function eS(e, t) {
            var a = Ye;
            return (
              (a |= yr), (Ct.mode & $r) !== ge && (a |= gr), fp(a, An, e, t)
            );
          }
          function cm(e, t) {
            return um(Ye, An, e, t);
          }
          function sC(e, t) {
            if (typeof t == "function") {
              var a = t,
                i = e();
              return (
                a(i),
                function () {
                  a(null);
                }
              );
            } else if (t != null) {
              var u = t;
              u.hasOwnProperty("current") ||
                y(
                  "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
                  "an object with keys {" + Object.keys(u).join(", ") + "}",
                );
              var s = e();
              return (
                (u.current = s),
                function () {
                  u.current = null;
                }
              );
            }
          }
          function tS(e, t, a) {
            typeof t != "function" &&
              y(
                "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
                t !== null ? typeof t : "null",
              );
            var i = a != null ? a.concat([e]) : null,
              u = Ye;
            return (
              (u |= yr),
              (Ct.mode & $r) !== ge && (u |= gr),
              fp(u, An, sC.bind(null, t, e), i)
            );
          }
          function fm(e, t, a) {
            typeof t != "function" &&
              y(
                "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
                t !== null ? typeof t : "null",
              );
            var i = a != null ? a.concat([e]) : null;
            return um(Ye, An, sC.bind(null, t, e), i);
          }
          function jw(e, t) {}
          var dm = jw;
          function nS(e, t) {
            var a = nl(),
              i = t === void 0 ? null : t;
            return (a.memoizedState = [e, i]), e;
          }
          function pm(e, t) {
            var a = ti(),
              i = t === void 0 ? null : t,
              u = a.memoizedState;
            if (u !== null && i !== null) {
              var s = u[1];
              if (Yg(i, s)) return u[0];
            }
            return (a.memoizedState = [e, i]), e;
          }
          function rS(e, t) {
            var a = nl(),
              i = t === void 0 ? null : t,
              u = e();
            return (a.memoizedState = [u, i]), u;
          }
          function vm(e, t) {
            var a = ti(),
              i = t === void 0 ? null : t,
              u = a.memoizedState;
            if (u !== null && i !== null) {
              var s = u[1];
              if (Yg(i, s)) return u[0];
            }
            var f = e();
            return (a.memoizedState = [f, i]), f;
          }
          function aS(e) {
            var t = nl();
            return (t.memoizedState = e), e;
          }
          function cC(e) {
            var t = ti(),
              a = jn,
              i = a.memoizedState;
            return dC(t, i, e);
          }
          function fC(e) {
            var t = ti();
            if (jn === null) return (t.memoizedState = e), e;
            var a = jn.memoizedState;
            return dC(t, a, e);
          }
          function dC(e, t, a) {
            var i = !Yv(ds);
            if (i) {
              if (!he(a, t)) {
                var u = Iv();
                (Ct.lanes = Pe(Ct.lanes, u)), Lp(u), (e.baseState = !0);
              }
              return t;
            } else
              return (
                e.baseState && ((e.baseState = !1), gp()),
                (e.memoizedState = a),
                a
              );
          }
          function Fw(e, t, a) {
            var i = fa();
            Wt(xy(i, yi)), e(!0);
            var u = up.transition;
            up.transition = {};
            var s = up.transition;
            up.transition._updatedFibers = /* @__PURE__ */ new Set();
            try {
              e(!1), t();
            } finally {
              if (
                (Wt(i), (up.transition = u), u === null && s._updatedFibers)
              ) {
                var f = s._updatedFibers.size;
                f > 10 &&
                  F(
                    "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
                  ),
                  s._updatedFibers.clear();
              }
            }
          }
          function iS() {
            var e = im(!1),
              t = e[0],
              a = e[1],
              i = Fw.bind(null, a),
              u = nl();
            return (u.memoizedState = i), [t, i];
          }
          function pC() {
            var e = Kg(),
              t = e[0],
              a = ti(),
              i = a.memoizedState;
            return [t, i];
          }
          function vC() {
            var e = qg(),
              t = e[0],
              a = ti(),
              i = a.memoizedState;
            return [t, i];
          }
          var hC = !1;
          function Hw() {
            return hC;
          }
          function lS() {
            var e = nl(),
              t = zm(),
              a = t.identifierPrefix,
              i;
            if (rr()) {
              var u = nw();
              i = ":" + a + "R" + u;
              var s = sp++;
              s > 0 && (i += "H" + s.toString(32)), (i += ":");
            } else {
              var f = Uw++;
              i = ":" + a + "r" + f.toString(32) + ":";
            }
            return (e.memoizedState = i), i;
          }
          function hm() {
            var e = ti(),
              t = e.memoizedState;
            return t;
          }
          function Vw(e, t, a) {
            typeof arguments[3] == "function" &&
              y(
                "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
              );
            var i = io(e),
              u = {
                lane: i,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (mC(e)) yC(t, u);
            else {
              var s = WE(e, t, u, i);
              if (s !== null) {
                var f = Ir();
                Pn(s, e, i, f), gC(s, t, i);
              }
            }
            SC(e, i);
          }
          function Bw(e, t, a) {
            typeof arguments[3] == "function" &&
              y(
                "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
              );
            var i = io(e),
              u = {
                lane: i,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (mC(e)) yC(t, u);
            else {
              var s = e.alternate;
              if (e.lanes === Y && (s === null || s.lanes === Y)) {
                var f = t.lastRenderedReducer;
                if (f !== null) {
                  var p;
                  (p = ce.current), (ce.current = wi);
                  try {
                    var h = t.lastRenderedState,
                      g = f(h, a);
                    if (
                      ((u.hasEagerState = !0), (u.eagerState = g), he(g, h))
                    ) {
                      ww(e, t, u, i);
                      return;
                    }
                  } catch {
                  } finally {
                    ce.current = p;
                  }
                }
              }
              var E = WE(e, t, u, i);
              if (E !== null) {
                var _ = Ir();
                Pn(E, e, i, _), gC(E, t, i);
              }
            }
            SC(e, i);
          }
          function mC(e) {
            var t = e.alternate;
            return e === Ct || (t !== null && t === Ct);
          }
          function yC(e, t) {
            op = rm = !0;
            var a = e.pending;
            a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (e.pending = t);
          }
          function gC(e, t, a) {
            if (gd(a)) {
              var i = t.lanes;
              i = Sc(i, e.pendingLanes);
              var u = Pe(i, a);
              (t.lanes = u), Sd(e, u);
            }
          }
          function SC(e, t, a) {
            Ao(e, t);
          }
          var mm = {
              readContext: _n,
              useCallback: Dr,
              useContext: Dr,
              useEffect: Dr,
              useImperativeHandle: Dr,
              useInsertionEffect: Dr,
              useLayoutEffect: Dr,
              useMemo: Dr,
              useReducer: Dr,
              useRef: Dr,
              useState: Dr,
              useDebugValue: Dr,
              useDeferredValue: Dr,
              useTransition: Dr,
              useMutableSource: Dr,
              useSyncExternalStore: Dr,
              useId: Dr,
              unstable_isNewReconciler: ee,
            },
            EC = null,
            CC = null,
            TC = null,
            RC = null,
            rl = null,
            wi = null,
            ym = null;
          {
            var uS = function () {
                y(
                  "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
                );
              },
              He = function () {
                y(
                  "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks",
                );
              };
            (EC = {
              readContext: function (e) {
                return _n(e);
              },
              useCallback: function (e, t) {
                return (B = "useCallback"), ht(), of(t), nS(e, t);
              },
              useContext: function (e) {
                return (B = "useContext"), ht(), _n(e);
              },
              useEffect: function (e, t) {
                return (B = "useEffect"), ht(), of(t), om(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (B = "useImperativeHandle"), ht(), of(a), tS(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (B = "useInsertionEffect"), ht(), of(t), Zg(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (B = "useLayoutEffect"), ht(), of(t), eS(e, t);
              },
              useMemo: function (e, t) {
                (B = "useMemo"), ht(), of(t);
                var a = ce.current;
                ce.current = rl;
                try {
                  return rS(e, t);
                } finally {
                  ce.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (B = "useReducer"), ht();
                var i = ce.current;
                ce.current = rl;
                try {
                  return Qg(e, t, a);
                } finally {
                  ce.current = i;
                }
              },
              useRef: function (e) {
                return (B = "useRef"), ht(), Jg(e);
              },
              useState: function (e) {
                (B = "useState"), ht();
                var t = ce.current;
                ce.current = rl;
                try {
                  return im(e);
                } finally {
                  ce.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (B = "useDebugValue"), ht(), void 0;
              },
              useDeferredValue: function (e) {
                return (B = "useDeferredValue"), ht(), aS(e);
              },
              useTransition: function () {
                return (B = "useTransition"), ht(), iS();
              },
              useMutableSource: function (e, t, a) {
                return (B = "useMutableSource"), ht(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (B = "useSyncExternalStore"), ht(), Xg(e, t, a);
              },
              useId: function () {
                return (B = "useId"), ht(), lS();
              },
              unstable_isNewReconciler: ee,
            }),
              (CC = {
                readContext: function (e) {
                  return _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), ae(), nS(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), ae(), om(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), ae(), tS(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), ae(), Zg(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), ae(), eS(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), ae();
                  var a = ce.current;
                  ce.current = rl;
                  try {
                    return rS(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), ae();
                  var i = ce.current;
                  ce.current = rl;
                  try {
                    return Qg(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), ae(), Jg(e);
                },
                useState: function (e) {
                  (B = "useState"), ae();
                  var t = ce.current;
                  ce.current = rl;
                  try {
                    return im(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), ae(), void 0;
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), ae(), aS(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), ae(), iS();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), ae(), Xg(e, t, a);
                },
                useId: function () {
                  return (B = "useId"), ae(), lS();
                },
                unstable_isNewReconciler: ee,
              }),
              (TC = {
                readContext: function (e) {
                  return _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), ae(), pm(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), ae(), dp(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), ae(), fm(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), ae(), sm(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), ae(), cm(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), ae();
                  var a = ce.current;
                  ce.current = wi;
                  try {
                    return vm(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), ae();
                  var i = ce.current;
                  ce.current = wi;
                  try {
                    return Ig(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), ae(), lm();
                },
                useState: function (e) {
                  (B = "useState"), ae();
                  var t = ce.current;
                  ce.current = wi;
                  try {
                    return Kg(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), ae(), dm();
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), ae(), cC(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), ae(), pC();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), ae(), am(e, t);
                },
                useId: function () {
                  return (B = "useId"), ae(), hm();
                },
                unstable_isNewReconciler: ee,
              }),
              (RC = {
                readContext: function (e) {
                  return _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), ae(), pm(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), ae(), dp(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), ae(), fm(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), ae(), sm(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), ae(), cm(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), ae();
                  var a = ce.current;
                  ce.current = ym;
                  try {
                    return vm(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), ae();
                  var i = ce.current;
                  ce.current = ym;
                  try {
                    return Gg(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), ae(), lm();
                },
                useState: function (e) {
                  (B = "useState"), ae();
                  var t = ce.current;
                  ce.current = ym;
                  try {
                    return qg(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), ae(), dm();
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), ae(), fC(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), ae(), vC();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), ae(), am(e, t);
                },
                useId: function () {
                  return (B = "useId"), ae(), hm();
                },
                unstable_isNewReconciler: ee,
              }),
              (rl = {
                readContext: function (e) {
                  return uS(), _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), He(), ht(), nS(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), He(), ht(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), He(), ht(), om(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), He(), ht(), tS(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), He(), ht(), Zg(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), He(), ht(), eS(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), He(), ht();
                  var a = ce.current;
                  ce.current = rl;
                  try {
                    return rS(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), He(), ht();
                  var i = ce.current;
                  ce.current = rl;
                  try {
                    return Qg(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), He(), ht(), Jg(e);
                },
                useState: function (e) {
                  (B = "useState"), He(), ht();
                  var t = ce.current;
                  ce.current = rl;
                  try {
                    return im(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), He(), ht(), void 0;
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), He(), ht(), aS(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), He(), ht(), iS();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), He(), ht(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), He(), ht(), Xg(e, t, a);
                },
                useId: function () {
                  return (B = "useId"), He(), ht(), lS();
                },
                unstable_isNewReconciler: ee,
              }),
              (wi = {
                readContext: function (e) {
                  return uS(), _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), He(), ae(), pm(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), He(), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), He(), ae(), dp(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), He(), ae(), fm(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), He(), ae(), sm(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), He(), ae(), cm(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), He(), ae();
                  var a = ce.current;
                  ce.current = wi;
                  try {
                    return vm(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), He(), ae();
                  var i = ce.current;
                  ce.current = wi;
                  try {
                    return Ig(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), He(), ae(), lm();
                },
                useState: function (e) {
                  (B = "useState"), He(), ae();
                  var t = ce.current;
                  ce.current = wi;
                  try {
                    return Kg(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), He(), ae(), dm();
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), He(), ae(), cC(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), He(), ae(), pC();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), He(), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), He(), ae(), am(e, t);
                },
                useId: function () {
                  return (B = "useId"), He(), ae(), hm();
                },
                unstable_isNewReconciler: ee,
              }),
              (ym = {
                readContext: function (e) {
                  return uS(), _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), He(), ae(), pm(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), He(), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), He(), ae(), dp(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), He(), ae(), fm(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), He(), ae(), sm(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), He(), ae(), cm(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), He(), ae();
                  var a = ce.current;
                  ce.current = wi;
                  try {
                    return vm(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), He(), ae();
                  var i = ce.current;
                  ce.current = wi;
                  try {
                    return Gg(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), He(), ae(), lm();
                },
                useState: function (e) {
                  (B = "useState"), He(), ae();
                  var t = ce.current;
                  ce.current = wi;
                  try {
                    return qg(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), He(), ae(), dm();
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), He(), ae(), fC(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), He(), ae(), vC();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), He(), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), He(), ae(), am(e, t);
                },
                useId: function () {
                  return (B = "useId"), He(), ae(), hm();
                },
                unstable_isNewReconciler: ee,
              });
          }
          var to = T.unstable_now,
            xC = 0,
            gm = -1,
            pp = -1,
            Sm = -1,
            oS = !1,
            Em = !1;
          function wC() {
            return oS;
          }
          function Pw() {
            Em = !0;
          }
          function $w() {
            (oS = !1), (Em = !1);
          }
          function Yw() {
            (oS = Em), (Em = !1);
          }
          function bC() {
            return xC;
          }
          function _C() {
            xC = to();
          }
          function sS(e) {
            (pp = to()), e.actualStartTime < 0 && (e.actualStartTime = to());
          }
          function DC(e) {
            pp = -1;
          }
          function Cm(e, t) {
            if (pp >= 0) {
              var a = to() - pp;
              (e.actualDuration += a), t && (e.selfBaseDuration = a), (pp = -1);
            }
          }
          function al(e) {
            if (gm >= 0) {
              var t = to() - gm;
              gm = -1;
              for (var a = e.return; a !== null; ) {
                switch (a.tag) {
                  case $:
                    var i = a.stateNode;
                    i.effectDuration += t;
                    return;
                  case je:
                    var u = a.stateNode;
                    u.effectDuration += t;
                    return;
                }
                a = a.return;
              }
            }
          }
          function cS(e) {
            if (Sm >= 0) {
              var t = to() - Sm;
              Sm = -1;
              for (var a = e.return; a !== null; ) {
                switch (a.tag) {
                  case $:
                    var i = a.stateNode;
                    i !== null && (i.passiveEffectDuration += t);
                    return;
                  case je:
                    var u = a.stateNode;
                    u !== null && (u.passiveEffectDuration += t);
                    return;
                }
                a = a.return;
              }
            }
          }
          function il() {
            gm = to();
          }
          function fS() {
            Sm = to();
          }
          function dS(e) {
            for (var t = e.child; t; )
              (e.actualDuration += t.actualDuration), (t = t.sibling);
          }
          function bi(e, t) {
            if (e && e.defaultProps) {
              var a = Ke({}, t),
                i = e.defaultProps;
              for (var u in i) a[u] === void 0 && (a[u] = i[u]);
              return a;
            }
            return t;
          }
          var pS = {},
            vS,
            hS,
            mS,
            yS,
            gS,
            kC,
            Tm,
            SS,
            ES,
            CS,
            vp;
          {
            (vS = /* @__PURE__ */ new Set()),
              (hS = /* @__PURE__ */ new Set()),
              (mS = /* @__PURE__ */ new Set()),
              (yS = /* @__PURE__ */ new Set()),
              (SS = /* @__PURE__ */ new Set()),
              (gS = /* @__PURE__ */ new Set()),
              (ES = /* @__PURE__ */ new Set()),
              (CS = /* @__PURE__ */ new Set()),
              (vp = /* @__PURE__ */ new Set());
            var LC = /* @__PURE__ */ new Set();
            (Tm = function (e, t) {
              if (!(e === null || typeof e == "function")) {
                var a = t + "_" + e;
                LC.has(a) ||
                  (LC.add(a),
                  y(
                    "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                    t,
                    e,
                  ));
              }
            }),
              (kC = function (e, t) {
                if (t === void 0) {
                  var a = St(e) || "Component";
                  gS.has(a) ||
                    (gS.add(a),
                    y(
                      "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                      a,
                    ));
                }
              }),
              Object.defineProperty(pS, "_processChildContext", {
                enumerable: !1,
                value: function () {
                  throw new Error(
                    "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",
                  );
                },
              }),
              Object.freeze(pS);
          }
          function TS(e, t, a, i) {
            var u = e.memoizedState,
              s = a(i, u);
            {
              if (e.mode & qe) {
                rn(!0);
                try {
                  s = a(i, u);
                } finally {
                  rn(!1);
                }
              }
              kC(t, s);
            }
            var f = s == null ? u : Ke({}, u, s);
            if (((e.memoizedState = f), e.lanes === Y)) {
              var p = e.updateQueue;
              p.baseState = f;
            }
          }
          var RS = {
            isMounted: Br,
            enqueueSetState: function (e, t, a) {
              var i = ra(e),
                u = Ir(),
                s = io(i),
                f = Wl(u, s);
              (f.payload = t),
                a != null && (Tm(a, "setState"), (f.callback = a));
              var p = qu(i, f, s);
              p !== null && (Pn(p, i, s, u), qh(p, i, s)), Ao(i, s);
            },
            enqueueReplaceState: function (e, t, a) {
              var i = ra(e),
                u = Ir(),
                s = io(i),
                f = Wl(u, s);
              (f.tag = IE),
                (f.payload = t),
                a != null && (Tm(a, "replaceState"), (f.callback = a));
              var p = qu(i, f, s);
              p !== null && (Pn(p, i, s, u), qh(p, i, s)), Ao(i, s);
            },
            enqueueForceUpdate: function (e, t) {
              var a = ra(e),
                i = Ir(),
                u = io(a),
                s = Wl(i, u);
              (s.tag = Gh),
                t != null && (Tm(t, "forceUpdate"), (s.callback = t));
              var f = qu(a, s, u);
              f !== null && (Pn(f, a, u, i), qh(f, a, u)), nc(a, u);
            },
          };
          function NC(e, t, a, i, u, s, f) {
            var p = e.stateNode;
            if (typeof p.shouldComponentUpdate == "function") {
              var h = p.shouldComponentUpdate(i, s, f);
              {
                if (e.mode & qe) {
                  rn(!0);
                  try {
                    h = p.shouldComponentUpdate(i, s, f);
                  } finally {
                    rn(!1);
                  }
                }
                h === void 0 &&
                  y(
                    "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
                    St(t) || "Component",
                  );
              }
              return h;
            }
            return t.prototype && t.prototype.isPureReactComponent
              ? !Oe(a, i) || !Oe(u, s)
              : !0;
          }
          function Ww(e, t, a) {
            var i = e.stateNode;
            {
              var u = St(t) || "Component",
                s = i.render;
              s ||
                (t.prototype && typeof t.prototype.render == "function"
                  ? y(
                      "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
                      u,
                    )
                  : y(
                      "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
                      u,
                    )),
                i.getInitialState &&
                  !i.getInitialState.isReactClassApproved &&
                  !i.state &&
                  y(
                    "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                    u,
                  ),
                i.getDefaultProps &&
                  !i.getDefaultProps.isReactClassApproved &&
                  y(
                    "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                    u,
                  ),
                i.propTypes &&
                  y(
                    "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                    u,
                  ),
                i.contextType &&
                  y(
                    "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                    u,
                  ),
                t.childContextTypes &&
                  !vp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
                  // this one.
                  (e.mode & qe) === ge &&
                  (vp.add(t),
                  y(
                    `%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                    u,
                  )),
                t.contextTypes &&
                  !vp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
                  // this one.
                  (e.mode & qe) === ge &&
                  (vp.add(t),
                  y(
                    `%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                    u,
                  )),
                i.contextTypes &&
                  y(
                    "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                    u,
                  ),
                t.contextType &&
                  t.contextTypes &&
                  !ES.has(t) &&
                  (ES.add(t),
                  y(
                    "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                    u,
                  )),
                typeof i.componentShouldUpdate == "function" &&
                  y(
                    "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                    u,
                  ),
                t.prototype &&
                  t.prototype.isPureReactComponent &&
                  typeof i.shouldComponentUpdate < "u" &&
                  y(
                    "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                    St(t) || "A pure component",
                  ),
                typeof i.componentDidUnmount == "function" &&
                  y(
                    "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                    u,
                  ),
                typeof i.componentDidReceiveProps == "function" &&
                  y(
                    "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                    u,
                  ),
                typeof i.componentWillRecieveProps == "function" &&
                  y(
                    "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                    u,
                  ),
                typeof i.UNSAFE_componentWillRecieveProps == "function" &&
                  y(
                    "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                    u,
                  );
              var f = i.props !== a;
              i.props !== void 0 &&
                f &&
                y(
                  "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
                  u,
                  u,
                ),
                i.defaultProps &&
                  y(
                    "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                    u,
                    u,
                  ),
                typeof i.getSnapshotBeforeUpdate == "function" &&
                  typeof i.componentDidUpdate != "function" &&
                  !mS.has(t) &&
                  (mS.add(t),
                  y(
                    "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                    St(t),
                  )),
                typeof i.getDerivedStateFromProps == "function" &&
                  y(
                    "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                    u,
                  ),
                typeof i.getDerivedStateFromError == "function" &&
                  y(
                    "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                    u,
                  ),
                typeof t.getSnapshotBeforeUpdate == "function" &&
                  y(
                    "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                    u,
                  );
              var p = i.state;
              p &&
                (typeof p != "object" || Cn(p)) &&
                y("%s.state: must be set to an object or null", u),
                typeof i.getChildContext == "function" &&
                  typeof t.childContextTypes != "object" &&
                  y(
                    "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                    u,
                  );
            }
          }
          function OC(e, t) {
            (t.updater = RS),
              (e.stateNode = t),
              vu(t, e),
              (t._reactInternalInstance = pS);
          }
          function MC(e, t, a) {
            var i = !1,
              u = za,
              s = za,
              f = t.contextType;
            if ("contextType" in t) {
              var p =
                // Allow null for conditional declaration
                f === null ||
                (f !== void 0 && f.$$typeof === I && f._context === void 0);
              if (!p && !CS.has(t)) {
                CS.add(t);
                var h = "";
                f === void 0
                  ? (h =
                      " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
                  : typeof f != "object"
                    ? (h = " However, it is set to a " + typeof f + ".")
                    : f.$$typeof === R
                      ? (h =
                          " Did you accidentally pass the Context.Provider instead?")
                      : f._context !== void 0
                        ? (h =
                            " Did you accidentally pass the Context.Consumer instead?")
                        : (h =
                            " However, it is set to an object with keys {" +
                            Object.keys(f).join(", ") +
                            "}."),
                  y(
                    "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                    St(t) || "Component",
                    h,
                  );
              }
            }
            if (typeof f == "object" && f !== null) s = _n(f);
            else {
              u = Xc(e, t, !0);
              var g = t.contextTypes;
              (i = g != null), (s = i ? Kc(e, u) : za);
            }
            var E = new t(a, s);
            if (e.mode & qe) {
              rn(!0);
              try {
                E = new t(a, s);
              } finally {
                rn(!1);
              }
            }
            var _ = (e.memoizedState =
              E.state !== null && E.state !== void 0 ? E.state : null);
            OC(e, E);
            {
              if (
                typeof t.getDerivedStateFromProps == "function" &&
                _ === null
              ) {
                var w = St(t) || "Component";
                hS.has(w) ||
                  (hS.add(w),
                  y(
                    "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                    w,
                    E.state === null ? "null" : "undefined",
                    w,
                  ));
              }
              if (
                typeof t.getDerivedStateFromProps == "function" ||
                typeof E.getSnapshotBeforeUpdate == "function"
              ) {
                var M = null,
                  z = null,
                  H = null;
                if (
                  (typeof E.componentWillMount == "function" &&
                  E.componentWillMount.__suppressDeprecationWarning !== !0
                    ? (M = "componentWillMount")
                    : typeof E.UNSAFE_componentWillMount == "function" &&
                      (M = "UNSAFE_componentWillMount"),
                  typeof E.componentWillReceiveProps == "function" &&
                  E.componentWillReceiveProps.__suppressDeprecationWarning !==
                    !0
                    ? (z = "componentWillReceiveProps")
                    : typeof E.UNSAFE_componentWillReceiveProps == "function" &&
                      (z = "UNSAFE_componentWillReceiveProps"),
                  typeof E.componentWillUpdate == "function" &&
                  E.componentWillUpdate.__suppressDeprecationWarning !== !0
                    ? (H = "componentWillUpdate")
                    : typeof E.UNSAFE_componentWillUpdate == "function" &&
                      (H = "UNSAFE_componentWillUpdate"),
                  M !== null || z !== null || H !== null)
                ) {
                  var le = St(t) || "Component",
                    De =
                      typeof t.getDerivedStateFromProps == "function"
                        ? "getDerivedStateFromProps()"
                        : "getSnapshotBeforeUpdate()";
                  yS.has(le) ||
                    (yS.add(le),
                    y(
                      `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                      le,
                      De,
                      M !== null
                        ? `
  ` + M
                        : "",
                      z !== null
                        ? `
  ` + z
                        : "",
                      H !== null
                        ? `
  ` + H
                        : "",
                    ));
                }
              }
            }
            return i && TE(e, u, s), E;
          }
          function Qw(e, t) {
            var a = t.state;
            typeof t.componentWillMount == "function" && t.componentWillMount(),
              typeof t.UNSAFE_componentWillMount == "function" &&
                t.UNSAFE_componentWillMount(),
              a !== t.state &&
                (y(
                  "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                  Be(e) || "Component",
                ),
                RS.enqueueReplaceState(t, t.state, null));
          }
          function UC(e, t, a, i) {
            var u = t.state;
            if (
              (typeof t.componentWillReceiveProps == "function" &&
                t.componentWillReceiveProps(a, i),
              typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                t.UNSAFE_componentWillReceiveProps(a, i),
              t.state !== u)
            ) {
              {
                var s = Be(e) || "Component";
                vS.has(s) ||
                  (vS.add(s),
                  y(
                    "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                    s,
                  ));
              }
              RS.enqueueReplaceState(t, t.state, null);
            }
          }
          function xS(e, t, a, i) {
            Ww(e, t, a);
            var u = e.stateNode;
            (u.props = a), (u.state = e.memoizedState), (u.refs = {}), Mg(e);
            var s = t.contextType;
            if (typeof s == "object" && s !== null) u.context = _n(s);
            else {
              var f = Xc(e, t, !0);
              u.context = Kc(e, f);
            }
            {
              if (u.state === a) {
                var p = St(t) || "Component";
                SS.has(p) ||
                  (SS.add(p),
                  y(
                    "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                    p,
                  ));
              }
              e.mode & qe && Ri.recordLegacyContextWarning(e, u),
                Ri.recordUnsafeLifecycleWarnings(e, u);
            }
            u.state = e.memoizedState;
            var h = t.getDerivedStateFromProps;
            if (
              (typeof h == "function" &&
                (TS(e, t, h, a), (u.state = e.memoizedState)),
              typeof t.getDerivedStateFromProps != "function" &&
                typeof u.getSnapshotBeforeUpdate != "function" &&
                (typeof u.UNSAFE_componentWillMount == "function" ||
                  typeof u.componentWillMount == "function") &&
                (Qw(e, u), Jh(e, a, u, i), (u.state = e.memoizedState)),
              typeof u.componentDidMount == "function")
            ) {
              var g = Ye;
              (g |= yr), (e.mode & $r) !== ge && (g |= gr), (e.flags |= g);
            }
          }
          function Iw(e, t, a, i) {
            var u = e.stateNode,
              s = e.memoizedProps;
            u.props = s;
            var f = u.context,
              p = t.contextType,
              h = za;
            if (typeof p == "object" && p !== null) h = _n(p);
            else {
              var g = Xc(e, t, !0);
              h = Kc(e, g);
            }
            var E = t.getDerivedStateFromProps,
              _ =
                typeof E == "function" ||
                typeof u.getSnapshotBeforeUpdate == "function";
            !_ &&
              (typeof u.UNSAFE_componentWillReceiveProps == "function" ||
                typeof u.componentWillReceiveProps == "function") &&
              (s !== a || f !== h) &&
              UC(e, u, a, h),
              XE();
            var w = e.memoizedState,
              M = (u.state = w);
            if (
              (Jh(e, a, u, i),
              (M = e.memoizedState),
              s === a && w === M && !Mh() && !Zh())
            ) {
              if (typeof u.componentDidMount == "function") {
                var z = Ye;
                (z |= yr), (e.mode & $r) !== ge && (z |= gr), (e.flags |= z);
              }
              return !1;
            }
            typeof E == "function" && (TS(e, t, E, a), (M = e.memoizedState));
            var H = Zh() || NC(e, t, s, a, w, M, h);
            if (H) {
              if (
                (!_ &&
                  (typeof u.UNSAFE_componentWillMount == "function" ||
                    typeof u.componentWillMount == "function") &&
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function")
              ) {
                var le = Ye;
                (le |= yr), (e.mode & $r) !== ge && (le |= gr), (e.flags |= le);
              }
            } else {
              if (typeof u.componentDidMount == "function") {
                var De = Ye;
                (De |= yr), (e.mode & $r) !== ge && (De |= gr), (e.flags |= De);
              }
              (e.memoizedProps = a), (e.memoizedState = M);
            }
            return (u.props = a), (u.state = M), (u.context = h), H;
          }
          function Gw(e, t, a, i, u) {
            var s = t.stateNode;
            GE(e, t);
            var f = t.memoizedProps,
              p = t.type === t.elementType ? f : bi(t.type, f);
            s.props = p;
            var h = t.pendingProps,
              g = s.context,
              E = a.contextType,
              _ = za;
            if (typeof E == "object" && E !== null) _ = _n(E);
            else {
              var w = Xc(t, a, !0);
              _ = Kc(t, w);
            }
            var M = a.getDerivedStateFromProps,
              z =
                typeof M == "function" ||
                typeof s.getSnapshotBeforeUpdate == "function";
            !z &&
              (typeof s.UNSAFE_componentWillReceiveProps == "function" ||
                typeof s.componentWillReceiveProps == "function") &&
              (f !== h || g !== _) &&
              UC(t, s, i, _),
              XE();
            var H = t.memoizedState,
              le = (s.state = H);
            if (
              (Jh(t, i, s, u),
              (le = t.memoizedState),
              f === h && H === le && !Mh() && !Zh() && !Le)
            )
              return (
                typeof s.componentDidUpdate == "function" &&
                  (f !== e.memoizedProps || H !== e.memoizedState) &&
                  (t.flags |= Ye),
                typeof s.getSnapshotBeforeUpdate == "function" &&
                  (f !== e.memoizedProps || H !== e.memoizedState) &&
                  (t.flags |= aa),
                !1
              );
            typeof M == "function" && (TS(t, a, M, i), (le = t.memoizedState));
            var De =
              Zh() ||
              NC(t, a, p, i, H, le, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
              // both before and after `shouldComponentUpdate` has been called. Not ideal,
              // but I'm loath to refactor this function. This only happens for memoized
              // components so it's not that common.
              Le;
            return (
              De
                ? (!z &&
                    (typeof s.UNSAFE_componentWillUpdate == "function" ||
                      typeof s.componentWillUpdate == "function") &&
                    (typeof s.componentWillUpdate == "function" &&
                      s.componentWillUpdate(i, le, _),
                    typeof s.UNSAFE_componentWillUpdate == "function" &&
                      s.UNSAFE_componentWillUpdate(i, le, _)),
                  typeof s.componentDidUpdate == "function" && (t.flags |= Ye),
                  typeof s.getSnapshotBeforeUpdate == "function" &&
                    (t.flags |= aa))
                : (typeof s.componentDidUpdate == "function" &&
                    (f !== e.memoizedProps || H !== e.memoizedState) &&
                    (t.flags |= Ye),
                  typeof s.getSnapshotBeforeUpdate == "function" &&
                    (f !== e.memoizedProps || H !== e.memoizedState) &&
                    (t.flags |= aa),
                  (t.memoizedProps = i),
                  (t.memoizedState = le)),
              (s.props = i),
              (s.state = le),
              (s.context = _),
              De
            );
          }
          function ps(e, t) {
            return {
              value: e,
              source: t,
              stack: kf(t),
              digest: null,
            };
          }
          function wS(e, t, a) {
            return {
              value: e,
              source: null,
              stack: a ?? null,
              digest: t ?? null,
            };
          }
          function Xw(e, t) {
            return !0;
          }
          function bS(e, t) {
            try {
              var a = Xw(e, t);
              if (a === !1) return;
              var i = t.value,
                u = t.source,
                s = t.stack,
                f = s !== null ? s : "";
              if (i != null && i._suppressLogging) {
                if (e.tag === j) return;
                console.error(i);
              }
              var p = u ? Be(u) : null,
                h = p
                  ? "The above error occurred in the <" + p + "> component:"
                  : "The above error occurred in one of your React components:",
                g;
              if (e.tag === $)
                g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
              else {
                var E = Be(e) || "Anonymous";
                g =
                  "React will try to recreate this component tree from scratch " +
                  ("using the error boundary you provided, " + E + ".");
              }
              var _ =
                h +
                `
` +
                f +
                `

` +
                ("" + g);
              console.error(_);
            } catch (w) {
              setTimeout(function () {
                throw w;
              });
            }
          }
          var Kw = typeof WeakMap == "function" ? WeakMap : Map;
          function zC(e, t, a) {
            var i = Wl(Dt, a);
            (i.tag = Ng),
              (i.payload = {
                element: null,
              });
            var u = t.value;
            return (
              (i.callback = function () {
                P_(u), bS(e, t);
              }),
              i
            );
          }
          function _S(e, t, a) {
            var i = Wl(Dt, a);
            i.tag = Ng;
            var u = e.type.getDerivedStateFromError;
            if (typeof u == "function") {
              var s = t.value;
              (i.payload = function () {
                return u(s);
              }),
                (i.callback = function () {
                  Q1(e), bS(e, t);
                });
            }
            var f = e.stateNode;
            return (
              f !== null &&
                typeof f.componentDidCatch == "function" &&
                (i.callback = function () {
                  Q1(e), bS(e, t), typeof u != "function" && V_(this);
                  var h = t.value,
                    g = t.stack;
                  this.componentDidCatch(h, {
                    componentStack: g !== null ? g : "",
                  }),
                    typeof u != "function" &&
                      (xr(e.lanes, Re) ||
                        y(
                          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                          Be(e) || "Unknown",
                        ));
                }),
              i
            );
          }
          function AC(e, t, a) {
            var i = e.pingCache,
              u;
            if (
              (i === null
                ? ((i = e.pingCache = new Kw()),
                  (u = /* @__PURE__ */ new Set()),
                  i.set(t, u))
                : ((u = i.get(t)),
                  u === void 0 &&
                    ((u = /* @__PURE__ */ new Set()), i.set(t, u))),
              !u.has(a))
            ) {
              u.add(a);
              var s = $_.bind(null, e, t, a);
              Pr && Np(e, a), t.then(s, s);
            }
          }
          function qw(e, t, a, i) {
            var u = e.updateQueue;
            if (u === null) {
              var s = /* @__PURE__ */ new Set();
              s.add(a), (e.updateQueue = s);
            } else u.add(a);
          }
          function Jw(e, t) {
            var a = e.tag;
            if ((e.mode & Ee) === ge && (a === P || a === xe || a === $e)) {
              var i = e.alternate;
              i
                ? ((e.updateQueue = i.updateQueue),
                  (e.memoizedState = i.memoizedState),
                  (e.lanes = i.lanes))
                : ((e.updateQueue = null), (e.memoizedState = null));
            }
          }
          function jC(e) {
            var t = e;
            do {
              if (t.tag === We && Ow(t)) return t;
              t = t.return;
            } while (t !== null);
            return null;
          }
          function FC(e, t, a, i, u) {
            if ((e.mode & Ee) === ge) {
              if (e === t) e.flags |= Rn;
              else {
                if (
                  ((e.flags |= ze),
                  (a.flags |= Mo),
                  (a.flags &= ~(Ys | Hr)),
                  a.tag === j)
                ) {
                  var s = a.alternate;
                  if (s === null) a.tag = mn;
                  else {
                    var f = Wl(Dt, Re);
                    (f.tag = Gh), qu(a, f, Re);
                  }
                }
                a.lanes = Pe(a.lanes, Re);
              }
              return e;
            }
            return (e.flags |= Rn), (e.lanes = u), e;
          }
          function Zw(e, t, a, i, u) {
            if (
              ((a.flags |= Hr),
              Pr && Np(e, u),
              i !== null && typeof i == "object" && typeof i.then == "function")
            ) {
              var s = i;
              Jw(a), rr() && a.mode & Ee && kE();
              var f = jC(t);
              if (f !== null) {
                (f.flags &= ~Yt),
                  FC(f, t, a, e, u),
                  f.mode & Ee && AC(e, s, u),
                  qw(f, e, s);
                return;
              } else {
                if (!yd(u)) {
                  AC(e, s, u), l0();
                  return;
                }
                var p = new Error(
                  "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.",
                );
                i = p;
              }
            } else if (rr() && a.mode & Ee) {
              kE();
              var h = jC(t);
              if (h !== null) {
                (h.flags & Rn) === be && (h.flags |= Yt),
                  FC(h, t, a, e, u),
                  Sg(ps(i, a));
                return;
              }
            }
            (i = ps(i, a)), O_(i);
            var g = t;
            do {
              switch (g.tag) {
                case $: {
                  var E = i;
                  g.flags |= Rn;
                  var _ = Du(u);
                  g.lanes = Pe(g.lanes, _);
                  var w = zC(g, E, _);
                  Ug(g, w);
                  return;
                }
                case j:
                  var M = i,
                    z = g.type,
                    H = g.stateNode;
                  if (
                    (g.flags & ze) === be &&
                    (typeof z.getDerivedStateFromError == "function" ||
                      (H !== null &&
                        typeof H.componentDidCatch == "function" &&
                        !j1(H)))
                  ) {
                    g.flags |= Rn;
                    var le = Du(u);
                    g.lanes = Pe(g.lanes, le);
                    var De = _S(g, M, le);
                    Ug(g, De);
                    return;
                  }
                  break;
              }
              g = g.return;
            } while (g !== null);
          }
          function eb() {
            return null;
          }
          var hp = S.ReactCurrentOwner,
            _i = !1,
            DS,
            mp,
            kS,
            LS,
            NS,
            vs,
            OS,
            Rm,
            yp;
          (DS = {}),
            (mp = {}),
            (kS = {}),
            (LS = {}),
            (NS = {}),
            (vs = !1),
            (OS = {}),
            (Rm = {}),
            (yp = {});
          function Wr(e, t, a, i) {
            e === null
              ? (t.child = BE(t, null, a, i))
              : (t.child = ef(t, e.child, a, i));
          }
          function tb(e, t, a, i) {
            (t.child = ef(t, e.child, null, i)), (t.child = ef(t, null, a, i));
          }
          function HC(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = a.propTypes;
              s &&
                Ci(
                  s,
                  i,
                  // Resolved props
                  "prop",
                  St(a),
                );
            }
            var f = a.render,
              p = t.ref,
              h,
              g;
            nf(t, u), gu(t);
            {
              if (
                ((hp.current = t),
                La(!0),
                (h = sf(e, t, f, i, p, u)),
                (g = cf()),
                t.mode & qe)
              ) {
                rn(!0);
                try {
                  (h = sf(e, t, f, i, p, u)), (g = cf());
                } finally {
                  rn(!1);
                }
              }
              La(!1);
            }
            return (
              Cr(),
              e !== null && !_i
                ? (tC(e, t, u), Ql(e, t, u))
                : (rr() && g && pg(t), (t.flags |= Bi), Wr(e, t, h, u), t.child)
            );
          }
          function VC(e, t, a, i, u) {
            if (e === null) {
              var s = a.type;
              if (
                lD(s) &&
                a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
                a.defaultProps === void 0
              ) {
                var f = s;
                return (
                  (f = gf(s)),
                  (t.tag = $e),
                  (t.type = f),
                  zS(t, s),
                  BC(e, t, f, i, u)
                );
              }
              {
                var p = s.propTypes;
                if (
                  (p &&
                    Ci(
                      p,
                      i,
                      // Resolved props
                      "prop",
                      St(s),
                    ),
                  a.defaultProps !== void 0)
                ) {
                  var h = St(s) || "Unknown";
                  yp[h] ||
                    (y(
                      "%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.",
                      h,
                    ),
                    (yp[h] = !0));
                }
              }
              var g = y0(a.type, null, i, t, t.mode, u);
              return (g.ref = t.ref), (g.return = t), (t.child = g), g;
            }
            {
              var E = a.type,
                _ = E.propTypes;
              _ &&
                Ci(
                  _,
                  i,
                  // Resolved props
                  "prop",
                  St(E),
                );
            }
            var w = e.child,
              M = BS(e, u);
            if (!M) {
              var z = w.memoizedProps,
                H = a.compare;
              if (((H = H !== null ? H : Oe), H(z, i) && e.ref === t.ref))
                return Ql(e, t, u);
            }
            t.flags |= Bi;
            var le = Ss(w, i);
            return (le.ref = t.ref), (le.return = t), (t.child = le), le;
          }
          function BC(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = t.elementType;
              if (s.$$typeof === Me) {
                var f = s,
                  p = f._payload,
                  h = f._init;
                try {
                  s = h(p);
                } catch {
                  s = null;
                }
                var g = s && s.propTypes;
                g &&
                  Ci(
                    g,
                    i,
                    // Resolved (SimpleMemoComponent has no defaultProps)
                    "prop",
                    St(s),
                  );
              }
            }
            if (e !== null) {
              var E = e.memoizedProps;
              if (
                Oe(E, i) &&
                e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
                t.type === e.type
              )
                if (((_i = !1), (t.pendingProps = i = E), BS(e, u)))
                  (e.flags & Mo) !== be && (_i = !0);
                else return (t.lanes = e.lanes), Ql(e, t, u);
            }
            return MS(e, t, a, i, u);
          }
          function PC(e, t, a) {
            var i = t.pendingProps,
              u = i.children,
              s = e !== null ? e.memoizedState : null;
            if (i.mode === "hidden" || fe)
              if ((t.mode & Ee) === ge) {
                var f = {
                  baseLanes: Y,
                  cachePool: null,
                  transitions: null,
                };
                (t.memoizedState = f), Am(t, a);
              } else if (xr(a, Kn)) {
                var _ = {
                  baseLanes: Y,
                  cachePool: null,
                  transitions: null,
                };
                t.memoizedState = _;
                var w = s !== null ? s.baseLanes : a;
                Am(t, w);
              } else {
                var p = null,
                  h;
                if (s !== null) {
                  var g = s.baseLanes;
                  h = Pe(g, a);
                } else h = a;
                t.lanes = t.childLanes = Kn;
                var E = {
                  baseLanes: h,
                  cachePool: p,
                  transitions: null,
                };
                return (
                  (t.memoizedState = E), (t.updateQueue = null), Am(t, h), null
                );
              }
            else {
              var M;
              s !== null
                ? ((M = Pe(s.baseLanes, a)), (t.memoizedState = null))
                : (M = a),
                Am(t, M);
            }
            return Wr(e, t, u, a), t.child;
          }
          function nb(e, t, a) {
            var i = t.pendingProps;
            return Wr(e, t, i, a), t.child;
          }
          function rb(e, t, a) {
            var i = t.pendingProps.children;
            return Wr(e, t, i, a), t.child;
          }
          function ab(e, t, a) {
            {
              t.flags |= Ye;
              {
                var i = t.stateNode;
                (i.effectDuration = 0), (i.passiveEffectDuration = 0);
              }
            }
            var u = t.pendingProps,
              s = u.children;
            return Wr(e, t, s, a), t.child;
          }
          function $C(e, t) {
            var a = t.ref;
            ((e === null && a !== null) || (e !== null && e.ref !== a)) &&
              ((t.flags |= mr), (t.flags |= ad));
          }
          function MS(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = a.propTypes;
              s &&
                Ci(
                  s,
                  i,
                  // Resolved props
                  "prop",
                  St(a),
                );
            }
            var f;
            {
              var p = Xc(t, a, !0);
              f = Kc(t, p);
            }
            var h, g;
            nf(t, u), gu(t);
            {
              if (
                ((hp.current = t),
                La(!0),
                (h = sf(e, t, a, i, f, u)),
                (g = cf()),
                t.mode & qe)
              ) {
                rn(!0);
                try {
                  (h = sf(e, t, a, i, f, u)), (g = cf());
                } finally {
                  rn(!1);
                }
              }
              La(!1);
            }
            return (
              Cr(),
              e !== null && !_i
                ? (tC(e, t, u), Ql(e, t, u))
                : (rr() && g && pg(t), (t.flags |= Bi), Wr(e, t, h, u), t.child)
            );
          }
          function YC(e, t, a, i, u) {
            {
              switch (CD(t)) {
                case !1: {
                  var s = t.stateNode,
                    f = t.type,
                    p = new f(t.memoizedProps, s.context),
                    h = p.state;
                  s.updater.enqueueSetState(s, h, null);
                  break;
                }
                case !0: {
                  (t.flags |= ze), (t.flags |= Rn);
                  var g = new Error("Simulated error coming from DevTools"),
                    E = Du(u);
                  t.lanes = Pe(t.lanes, E);
                  var _ = _S(t, ps(g, t), E);
                  Ug(t, _);
                  break;
                }
              }
              if (t.type !== t.elementType) {
                var w = a.propTypes;
                w &&
                  Ci(
                    w,
                    i,
                    // Resolved props
                    "prop",
                    St(a),
                  );
              }
            }
            var M;
            el(a) ? ((M = !0), zh(t)) : (M = !1), nf(t, u);
            var z = t.stateNode,
              H;
            z === null
              ? (wm(e, t), MC(t, a, i), xS(t, a, i, u), (H = !0))
              : e === null
                ? (H = Iw(t, a, i, u))
                : (H = Gw(e, t, a, i, u));
            var le = US(e, t, a, H, M, u);
            {
              var De = t.stateNode;
              H &&
                De.props !== i &&
                (vs ||
                  y(
                    "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
                    Be(t) || "a component",
                  ),
                (vs = !0));
            }
            return le;
          }
          function US(e, t, a, i, u, s) {
            $C(e, t);
            var f = (t.flags & ze) !== be;
            if (!i && !f) return u && wE(t, a, !1), Ql(e, t, s);
            var p = t.stateNode;
            hp.current = t;
            var h;
            if (f && typeof a.getDerivedStateFromError != "function")
              (h = null), DC();
            else {
              gu(t);
              {
                if ((La(!0), (h = p.render()), t.mode & qe)) {
                  rn(!0);
                  try {
                    p.render();
                  } finally {
                    rn(!1);
                  }
                }
                La(!1);
              }
              Cr();
            }
            return (
              (t.flags |= Bi),
              e !== null && f ? tb(e, t, h, s) : Wr(e, t, h, s),
              (t.memoizedState = p.state),
              u && wE(t, a, !0),
              t.child
            );
          }
          function WC(e) {
            var t = e.stateNode;
            t.pendingContext
              ? RE(e, t.pendingContext, t.pendingContext !== t.context)
              : t.context && RE(e, t.context, !1),
              zg(e, t.containerInfo);
          }
          function ib(e, t, a) {
            if ((WC(t), e === null))
              throw new Error(
                "Should have a current fiber. This is a bug in React.",
              );
            var i = t.pendingProps,
              u = t.memoizedState,
              s = u.element;
            GE(e, t), Jh(t, i, null, a);
            var f = t.memoizedState;
            t.stateNode;
            var p = f.element;
            if (u.isDehydrated) {
              var h = {
                  element: p,
                  isDehydrated: !1,
                  cache: f.cache,
                  pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                  transitions: f.transitions,
                },
                g = t.updateQueue;
              if (((g.baseState = h), (t.memoizedState = h), t.flags & Yt)) {
                var E = ps(
                  new Error(
                    "There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.",
                  ),
                  t,
                );
                return QC(e, t, p, a, E);
              } else if (p !== s) {
                var _ = ps(
                  new Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.",
                  ),
                  t,
                );
                return QC(e, t, p, a, _);
              } else {
                ow(t);
                var w = BE(t, null, p, a);
                t.child = w;
                for (var M = w; M; )
                  (M.flags = (M.flags & ~Ot) | ia), (M = M.sibling);
              }
            } else {
              if ((Zc(), p === s)) return Ql(e, t, a);
              Wr(e, t, p, a);
            }
            return t.child;
          }
          function QC(e, t, a, i, u) {
            return Zc(), Sg(u), (t.flags |= Yt), Wr(e, t, a, i), t.child;
          }
          function lb(e, t, a) {
            JE(t), e === null && gg(t);
            var i = t.type,
              u = t.pendingProps,
              s = e !== null ? e.memoizedProps : null,
              f = u.children,
              p = Zy(i, u);
            return (
              p ? (f = null) : s !== null && Zy(i, s) && (t.flags |= vt),
              $C(e, t),
              Wr(e, t, f, a),
              t.child
            );
          }
          function ub(e, t) {
            return e === null && gg(t), null;
          }
          function ob(e, t, a, i) {
            wm(e, t);
            var u = t.pendingProps,
              s = a,
              f = s._payload,
              p = s._init,
              h = p(f);
            t.type = h;
            var g = (t.tag = uD(h)),
              E = bi(h, u),
              _;
            switch (g) {
              case P:
                return (
                  zS(t, h), (t.type = h = gf(h)), (_ = MS(null, t, h, E, i)), _
                );
              case j:
                return (t.type = h = f0(h)), (_ = YC(null, t, h, E, i)), _;
              case xe:
                return (t.type = h = d0(h)), (_ = HC(null, t, h, E, i)), _;
              case mt: {
                if (t.type !== t.elementType) {
                  var w = h.propTypes;
                  w &&
                    Ci(
                      w,
                      E,
                      // Resolved for outer only
                      "prop",
                      St(h),
                    );
                }
                return (
                  (_ = VC(
                    null,
                    t,
                    h,
                    bi(h.type, E),
                    // The inner type can have defaults too
                    i,
                  )),
                  _
                );
              }
            }
            var M = "";
            throw (
              (h !== null &&
                typeof h == "object" &&
                h.$$typeof === Me &&
                (M =
                  " Did you wrap a component in React.lazy() more than once?"),
              new Error(
                "Element type is invalid. Received a promise that resolves to: " +
                  h +
                  ". " +
                  ("Lazy element type must resolve to a class or function." +
                    M),
              ))
            );
          }
          function sb(e, t, a, i, u) {
            wm(e, t), (t.tag = j);
            var s;
            return (
              el(a) ? ((s = !0), zh(t)) : (s = !1),
              nf(t, u),
              MC(t, a, i),
              xS(t, a, i, u),
              US(null, t, a, !0, s, u)
            );
          }
          function cb(e, t, a, i) {
            wm(e, t);
            var u = t.pendingProps,
              s;
            {
              var f = Xc(t, a, !1);
              s = Kc(t, f);
            }
            nf(t, i);
            var p, h;
            gu(t);
            {
              if (a.prototype && typeof a.prototype.render == "function") {
                var g = St(a) || "Unknown";
                DS[g] ||
                  (y(
                    "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
                    g,
                    g,
                  ),
                  (DS[g] = !0));
              }
              t.mode & qe && Ri.recordLegacyContextWarning(t, null),
                La(!0),
                (hp.current = t),
                (p = sf(null, t, a, u, s, i)),
                (h = cf()),
                La(!1);
            }
            if (
              (Cr(),
              (t.flags |= Bi),
              typeof p == "object" &&
                p !== null &&
                typeof p.render == "function" &&
                p.$$typeof === void 0)
            ) {
              var E = St(a) || "Unknown";
              mp[E] ||
                (y(
                  "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                  E,
                  E,
                  E,
                ),
                (mp[E] = !0));
            }
            if (
              // Run these checks in production only if the flag is off.
              // Eventually we'll delete this branch altogether.
              typeof p == "object" &&
              p !== null &&
              typeof p.render == "function" &&
              p.$$typeof === void 0
            ) {
              {
                var _ = St(a) || "Unknown";
                mp[_] ||
                  (y(
                    "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                    _,
                    _,
                    _,
                  ),
                  (mp[_] = !0));
              }
              (t.tag = j), (t.memoizedState = null), (t.updateQueue = null);
              var w = !1;
              return (
                el(a) ? ((w = !0), zh(t)) : (w = !1),
                (t.memoizedState =
                  p.state !== null && p.state !== void 0 ? p.state : null),
                Mg(t),
                OC(t, p),
                xS(t, a, u, i),
                US(null, t, a, !0, w, i)
              );
            } else {
              if (((t.tag = P), t.mode & qe)) {
                rn(!0);
                try {
                  (p = sf(null, t, a, u, s, i)), (h = cf());
                } finally {
                  rn(!1);
                }
              }
              return rr() && h && pg(t), Wr(null, t, p, i), zS(t, a), t.child;
            }
          }
          function zS(e, t) {
            {
              if (
                (t &&
                  t.childContextTypes &&
                  y(
                    "%s(...): childContextTypes cannot be defined on a function component.",
                    t.displayName || t.name || "Component",
                  ),
                e.ref !== null)
              ) {
                var a = "",
                  i = ta();
                i &&
                  (a +=
                    `

Check the render method of \`` +
                    i +
                    "`.");
                var u = i || "",
                  s = e._debugSource;
                s && (u = s.fileName + ":" + s.lineNumber),
                  NS[u] ||
                    ((NS[u] = !0),
                    y(
                      "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",
                      a,
                    ));
              }
              if (t.defaultProps !== void 0) {
                var f = St(t) || "Unknown";
                yp[f] ||
                  (y(
                    "%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",
                    f,
                  ),
                  (yp[f] = !0));
              }
              if (typeof t.getDerivedStateFromProps == "function") {
                var p = St(t) || "Unknown";
                LS[p] ||
                  (y(
                    "%s: Function components do not support getDerivedStateFromProps.",
                    p,
                  ),
                  (LS[p] = !0));
              }
              if (typeof t.contextType == "object" && t.contextType !== null) {
                var h = St(t) || "Unknown";
                kS[h] ||
                  (y("%s: Function components do not support contextType.", h),
                  (kS[h] = !0));
              }
            }
          }
          var AS = {
            dehydrated: null,
            treeContext: null,
            retryLane: an,
          };
          function jS(e) {
            return {
              baseLanes: e,
              cachePool: eb(),
              transitions: null,
            };
          }
          function fb(e, t) {
            var a = null;
            return {
              baseLanes: Pe(e.baseLanes, t),
              cachePool: a,
              transitions: e.transitions,
            };
          }
          function db(e, t, a, i) {
            if (t !== null) {
              var u = t.memoizedState;
              if (u === null) return !1;
            }
            return Fg(e, lp);
          }
          function pb(e, t) {
            return $o(e.childLanes, t);
          }
          function IC(e, t, a) {
            var i = t.pendingProps;
            TD(t) && (t.flags |= ze);
            var u = xi.current,
              s = !1,
              f = (t.flags & ze) !== be;
            if (
              (f || db(u, e)
                ? ((s = !0), (t.flags &= ~ze))
                : (e === null || e.memoizedState !== null) && (u = Nw(u, eC)),
              (u = af(u)),
              Zu(t, u),
              e === null)
            ) {
              gg(t);
              var p = t.memoizedState;
              if (p !== null) {
                var h = p.dehydrated;
                if (h !== null) return gb(t, h);
              }
              var g = i.children,
                E = i.fallback;
              if (s) {
                var _ = vb(t, g, E, a),
                  w = t.child;
                return (w.memoizedState = jS(a)), (t.memoizedState = AS), _;
              } else return FS(t, g);
            } else {
              var M = e.memoizedState;
              if (M !== null) {
                var z = M.dehydrated;
                if (z !== null) return Sb(e, t, f, i, z, M, a);
              }
              if (s) {
                var H = i.fallback,
                  le = i.children,
                  De = mb(e, t, le, H, a),
                  Ce = t.child,
                  rt = e.child.memoizedState;
                return (
                  (Ce.memoizedState = rt === null ? jS(a) : fb(rt, a)),
                  (Ce.childLanes = pb(e, a)),
                  (t.memoizedState = AS),
                  De
                );
              } else {
                var Ze = i.children,
                  L = hb(e, t, Ze, a);
                return (t.memoizedState = null), L;
              }
            }
          }
          function FS(e, t, a) {
            var i = e.mode,
              u = {
                mode: "visible",
                children: t,
              },
              s = HS(u, i);
            return (s.return = e), (e.child = s), s;
          }
          function vb(e, t, a, i) {
            var u = e.mode,
              s = e.child,
              f = {
                mode: "hidden",
                children: t,
              },
              p,
              h;
            return (
              (u & Ee) === ge && s !== null
                ? ((p = s),
                  (p.childLanes = Y),
                  (p.pendingProps = f),
                  e.mode & Ae &&
                    ((p.actualDuration = 0),
                    (p.actualStartTime = -1),
                    (p.selfBaseDuration = 0),
                    (p.treeBaseDuration = 0)),
                  (h = uo(a, u, i, null)))
                : ((p = HS(f, u)), (h = uo(a, u, i, null))),
              (p.return = e),
              (h.return = e),
              (p.sibling = h),
              (e.child = p),
              h
            );
          }
          function HS(e, t, a) {
            return G1(e, t, Y, null);
          }
          function GC(e, t) {
            return Ss(e, t);
          }
          function hb(e, t, a, i) {
            var u = e.child,
              s = u.sibling,
              f = GC(u, {
                mode: "visible",
                children: a,
              });
            if (
              ((t.mode & Ee) === ge && (f.lanes = i),
              (f.return = t),
              (f.sibling = null),
              s !== null)
            ) {
              var p = t.deletions;
              p === null ? ((t.deletions = [s]), (t.flags |= ft)) : p.push(s);
            }
            return (t.child = f), f;
          }
          function mb(e, t, a, i, u) {
            var s = t.mode,
              f = e.child,
              p = f.sibling,
              h = {
                mode: "hidden",
                children: a,
              },
              g;
            if (
              // In legacy mode, we commit the primary tree as if it successfully
              // completed, even though it's in an inconsistent state.
              (s & Ee) === ge && // Make sure we're on the second pass, i.e. the primary child fragment was
              // already cloned. In legacy mode, the only case where this isn't true is
              // when DevTools forces us to display a fallback; we skip the first render
              // pass entirely and go straight to rendering the fallback. (In Concurrent
              // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
              // only codepath.)
              t.child !== f
            ) {
              var E = t.child;
              (g = E),
                (g.childLanes = Y),
                (g.pendingProps = h),
                t.mode & Ae &&
                  ((g.actualDuration = 0),
                  (g.actualStartTime = -1),
                  (g.selfBaseDuration = f.selfBaseDuration),
                  (g.treeBaseDuration = f.treeBaseDuration)),
                (t.deletions = null);
            } else (g = GC(f, h)), (g.subtreeFlags = f.subtreeFlags & On);
            var _;
            return (
              p !== null
                ? (_ = Ss(p, i))
                : ((_ = uo(i, s, u, null)), (_.flags |= Ot)),
              (_.return = t),
              (g.return = t),
              (g.sibling = _),
              (t.child = g),
              _
            );
          }
          function xm(e, t, a, i) {
            i !== null && Sg(i), ef(t, e.child, null, a);
            var u = t.pendingProps,
              s = u.children,
              f = FS(t, s);
            return (f.flags |= Ot), (t.memoizedState = null), f;
          }
          function yb(e, t, a, i, u) {
            var s = t.mode,
              f = {
                mode: "visible",
                children: a,
              },
              p = HS(f, s),
              h = uo(i, s, u, null);
            return (
              (h.flags |= Ot),
              (p.return = t),
              (h.return = t),
              (p.sibling = h),
              (t.child = p),
              (t.mode & Ee) !== ge && ef(t, e.child, null, u),
              h
            );
          }
          function gb(e, t, a) {
            return (
              (e.mode & Ee) === ge
                ? (y(
                    "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.",
                  ),
                  (e.lanes = Re))
                : rg(t)
                  ? (e.lanes = mi)
                  : (e.lanes = Kn),
              null
            );
          }
          function Sb(e, t, a, i, u, s, f) {
            if (a)
              if (t.flags & Yt) {
                t.flags &= ~Yt;
                var L = wS(
                  new Error(
                    "There was an error while hydrating this Suspense boundary. Switched to client rendering.",
                  ),
                );
                return xm(e, t, f, L);
              } else {
                if (t.memoizedState !== null)
                  return (t.child = e.child), (t.flags |= ze), null;
                var V = i.children,
                  N = i.fallback,
                  X = yb(e, t, V, N, f),
                  de = t.child;
                return (de.memoizedState = jS(f)), (t.memoizedState = AS), X;
              }
            else {
              if ((lw(), (t.mode & Ee) === ge))
                return xm(
                  e,
                  t,
                  f,
                  // TODO: When we delete legacy mode, we should make this error argument
                  // required — every concurrent mode path that causes hydration to
                  // de-opt to client rendering should have an error message.
                  null,
                );
              if (rg(u)) {
                var p, h, g;
                {
                  var E = Rx(u);
                  (p = E.digest), (h = E.message), (g = E.stack);
                }
                var _;
                h
                  ? (_ = new Error(h))
                  : (_ = new Error(
                      "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.",
                    ));
                var w = wS(_, p, g);
                return xm(e, t, f, w);
              }
              var M = xr(f, e.childLanes);
              if (_i || M) {
                var z = zm();
                if (z !== null) {
                  var H = Kv(z, f);
                  if (H !== an && H !== s.retryLane) {
                    s.retryLane = H;
                    var le = Dt;
                    ya(e, H), Pn(z, e, H, le);
                  }
                }
                l0();
                var De = wS(
                  new Error(
                    "This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.",
                  ),
                );
                return xm(e, t, f, De);
              } else if (yE(u)) {
                (t.flags |= ze), (t.child = e.child);
                var Ce = Y_.bind(null, e);
                return xx(u, Ce), null;
              } else {
                sw(t, u, s.treeContext);
                var rt = i.children,
                  Ze = FS(t, rt);
                return (Ze.flags |= ia), Ze;
              }
            }
          }
          function XC(e, t, a) {
            e.lanes = Pe(e.lanes, t);
            var i = e.alternate;
            i !== null && (i.lanes = Pe(i.lanes, t)), kg(e.return, t, a);
          }
          function Eb(e, t, a) {
            for (var i = t; i !== null; ) {
              if (i.tag === We) {
                var u = i.memoizedState;
                u !== null && XC(i, a, e);
              } else if (i.tag === dt) XC(i, a, e);
              else if (i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === e) return;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) return;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
          }
          function Cb(e) {
            for (var t = e, a = null; t !== null; ) {
              var i = t.alternate;
              i !== null && nm(i) === null && (a = t), (t = t.sibling);
            }
            return a;
          }
          function Tb(e) {
            if (
              e !== void 0 &&
              e !== "forwards" &&
              e !== "backwards" &&
              e !== "together" &&
              !OS[e]
            )
              if (((OS[e] = !0), typeof e == "string"))
                switch (e.toLowerCase()) {
                  case "together":
                  case "forwards":
                  case "backwards": {
                    y(
                      '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                      e,
                      e.toLowerCase(),
                    );
                    break;
                  }
                  case "forward":
                  case "backward": {
                    y(
                      '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                      e,
                      e.toLowerCase(),
                    );
                    break;
                  }
                  default:
                    y(
                      '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                      e,
                    );
                    break;
                }
              else
                y(
                  '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  e,
                );
          }
          function Rb(e, t) {
            e !== void 0 &&
              !Rm[e] &&
              (e !== "collapsed" && e !== "hidden"
                ? ((Rm[e] = !0),
                  y(
                    '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                    e,
                  ))
                : t !== "forwards" &&
                  t !== "backwards" &&
                  ((Rm[e] = !0),
                  y(
                    '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                    e,
                  )));
          }
          function KC(e, t) {
            {
              var a = Cn(e),
                i = !a && typeof jr(e) == "function";
              if (a || i) {
                var u = a ? "array" : "iterable";
                return (
                  y(
                    "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
                    u,
                    t,
                    u,
                  ),
                  !1
                );
              }
            }
            return !0;
          }
          function xb(e, t) {
            if (
              (t === "forwards" || t === "backwards") &&
              e !== void 0 &&
              e !== null &&
              e !== !1
            )
              if (Cn(e)) {
                for (var a = 0; a < e.length; a++) if (!KC(e[a], a)) return;
              } else {
                var i = jr(e);
                if (typeof i == "function") {
                  var u = i.call(e);
                  if (u)
                    for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                      if (!KC(s.value, f)) return;
                      f++;
                    }
                } else
                  y(
                    'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
                    t,
                  );
              }
          }
          function VS(e, t, a, i, u) {
            var s = e.memoizedState;
            s === null
              ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: i,
                  tail: a,
                  tailMode: u,
                })
              : ((s.isBackwards = t),
                (s.rendering = null),
                (s.renderingStartTime = 0),
                (s.last = i),
                (s.tail = a),
                (s.tailMode = u));
          }
          function qC(e, t, a) {
            var i = t.pendingProps,
              u = i.revealOrder,
              s = i.tail,
              f = i.children;
            Tb(u), Rb(s, u), xb(f, u), Wr(e, t, f, a);
            var p = xi.current,
              h = Fg(p, lp);
            if (h) (p = Hg(p, lp)), (t.flags |= ze);
            else {
              var g = e !== null && (e.flags & ze) !== be;
              g && Eb(t, t.child, a), (p = af(p));
            }
            if ((Zu(t, p), (t.mode & Ee) === ge)) t.memoizedState = null;
            else
              switch (u) {
                case "forwards": {
                  var E = Cb(t.child),
                    _;
                  E === null
                    ? ((_ = t.child), (t.child = null))
                    : ((_ = E.sibling), (E.sibling = null)),
                    VS(
                      t,
                      !1,
                      // isBackwards
                      _,
                      E,
                      s,
                    );
                  break;
                }
                case "backwards": {
                  var w = null,
                    M = t.child;
                  for (t.child = null; M !== null; ) {
                    var z = M.alternate;
                    if (z !== null && nm(z) === null) {
                      t.child = M;
                      break;
                    }
                    var H = M.sibling;
                    (M.sibling = w), (w = M), (M = H);
                  }
                  VS(
                    t,
                    !0,
                    // isBackwards
                    w,
                    null,
                    // last
                    s,
                  );
                  break;
                }
                case "together": {
                  VS(
                    t,
                    !1,
                    // isBackwards
                    null,
                    // tail
                    null,
                    // last
                    void 0,
                  );
                  break;
                }
                default:
                  t.memoizedState = null;
              }
            return t.child;
          }
          function wb(e, t, a) {
            zg(t, t.stateNode.containerInfo);
            var i = t.pendingProps;
            return (
              e === null ? (t.child = ef(t, null, i, a)) : Wr(e, t, i, a),
              t.child
            );
          }
          var JC = !1;
          function bb(e, t, a) {
            var i = t.type,
              u = i._context,
              s = t.pendingProps,
              f = t.memoizedProps,
              p = s.value;
            {
              "value" in s ||
                JC ||
                ((JC = !0),
                y(
                  "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?",
                ));
              var h = t.type.propTypes;
              h && Ci(h, s, "prop", "Context.Provider");
            }
            if ((YE(t, u, p), f !== null)) {
              var g = f.value;
              if (he(g, p)) {
                if (f.children === s.children && !Mh()) return Ql(e, t, a);
              } else Tw(t, u, a);
            }
            var E = s.children;
            return Wr(e, t, E, a), t.child;
          }
          var ZC = !1;
          function _b(e, t, a) {
            var i = t.type;
            i._context === void 0
              ? i !== i.Consumer &&
                (ZC ||
                  ((ZC = !0),
                  y(
                    "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?",
                  )))
              : (i = i._context);
            var u = t.pendingProps,
              s = u.children;
            typeof s != "function" &&
              y(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.",
              ),
              nf(t, a);
            var f = _n(i);
            gu(t);
            var p;
            return (
              (hp.current = t),
              La(!0),
              (p = s(f)),
              La(!1),
              Cr(),
              (t.flags |= Bi),
              Wr(e, t, p, a),
              t.child
            );
          }
          function gp() {
            _i = !0;
          }
          function wm(e, t) {
            (t.mode & Ee) === ge &&
              e !== null &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= Ot));
          }
          function Ql(e, t, a) {
            return (
              e !== null && (t.dependencies = e.dependencies),
              DC(),
              Lp(t.lanes),
              xr(a, t.childLanes) ? (Ew(e, t), t.child) : null
            );
          }
          function Db(e, t, a) {
            {
              var i = t.return;
              if (i === null) throw new Error("Cannot swap the root fiber.");
              if (
                ((e.alternate = null),
                (t.alternate = null),
                (a.index = t.index),
                (a.sibling = t.sibling),
                (a.return = t.return),
                (a.ref = t.ref),
                t === i.child)
              )
                i.child = a;
              else {
                var u = i.child;
                if (u === null)
                  throw new Error("Expected parent to have a child.");
                for (; u.sibling !== t; )
                  if (((u = u.sibling), u === null))
                    throw new Error("Expected to find the previous sibling.");
                u.sibling = a;
              }
              var s = i.deletions;
              return (
                s === null ? ((i.deletions = [e]), (i.flags |= ft)) : s.push(e),
                (a.flags |= Ot),
                a
              );
            }
          }
          function BS(e, t) {
            var a = e.lanes;
            return !!xr(a, t);
          }
          function kb(e, t, a) {
            switch (t.tag) {
              case $:
                WC(t), t.stateNode, Zc();
                break;
              case oe:
                JE(t);
                break;
              case j: {
                var i = t.type;
                el(i) && zh(t);
                break;
              }
              case J:
                zg(t, t.stateNode.containerInfo);
                break;
              case ke: {
                var u = t.memoizedProps.value,
                  s = t.type._context;
                YE(t, s, u);
                break;
              }
              case je:
                {
                  var f = xr(a, t.childLanes);
                  f && (t.flags |= Ye);
                  {
                    var p = t.stateNode;
                    (p.effectDuration = 0), (p.passiveEffectDuration = 0);
                  }
                }
                break;
              case We: {
                var h = t.memoizedState;
                if (h !== null) {
                  if (h.dehydrated !== null)
                    return Zu(t, af(xi.current)), (t.flags |= ze), null;
                  var g = t.child,
                    E = g.childLanes;
                  if (xr(a, E)) return IC(e, t, a);
                  Zu(t, af(xi.current));
                  var _ = Ql(e, t, a);
                  return _ !== null ? _.sibling : null;
                } else Zu(t, af(xi.current));
                break;
              }
              case dt: {
                var w = (e.flags & ze) !== be,
                  M = xr(a, t.childLanes);
                if (w) {
                  if (M) return qC(e, t, a);
                  t.flags |= ze;
                }
                var z = t.memoizedState;
                if (
                  (z !== null &&
                    ((z.rendering = null),
                    (z.tail = null),
                    (z.lastEffect = null)),
                  Zu(t, xi.current),
                  M)
                )
                  break;
                return null;
              }
              case Fe:
              case et:
                return (t.lanes = Y), PC(e, t, a);
            }
            return Ql(e, t, a);
          }
          function e1(e, t, a) {
            if (t._debugNeedsRemount && e !== null)
              return Db(
                e,
                t,
                y0(
                  t.type,
                  t.key,
                  t.pendingProps,
                  t._debugOwner || null,
                  t.mode,
                  t.lanes,
                ),
              );
            if (e !== null) {
              var i = e.memoizedProps,
                u = t.pendingProps;
              if (
                i !== u ||
                Mh() || // Force a re-render if the implementation changed due to hot reload:
                t.type !== e.type
              )
                _i = !0;
              else {
                var s = BS(e, a);
                if (
                  !s && // If this is the second pass of an error or suspense boundary, there
                  // may not be work scheduled on `current`, so we check for this flag.
                  (t.flags & ze) === be
                )
                  return (_i = !1), kb(e, t, a);
                (e.flags & Mo) !== be ? (_i = !0) : (_i = !1);
              }
            } else if (((_i = !1), rr() && ew(t))) {
              var f = t.index,
                p = tw();
              DE(t, p, f);
            }
            switch (((t.lanes = Y), t.tag)) {
              case Z:
                return cb(e, t, t.type, a);
              case Gt: {
                var h = t.elementType;
                return ob(e, t, h, a);
              }
              case P: {
                var g = t.type,
                  E = t.pendingProps,
                  _ = t.elementType === g ? E : bi(g, E);
                return MS(e, t, g, _, a);
              }
              case j: {
                var w = t.type,
                  M = t.pendingProps,
                  z = t.elementType === w ? M : bi(w, M);
                return YC(e, t, w, z, a);
              }
              case $:
                return ib(e, t, a);
              case oe:
                return lb(e, t, a);
              case _e:
                return ub(e, t);
              case We:
                return IC(e, t, a);
              case J:
                return wb(e, t, a);
              case xe: {
                var H = t.type,
                  le = t.pendingProps,
                  De = t.elementType === H ? le : bi(H, le);
                return HC(e, t, H, De, a);
              }
              case Ie:
                return nb(e, t, a);
              case at:
                return rb(e, t, a);
              case je:
                return ab(e, t, a);
              case ke:
                return bb(e, t, a);
              case kt:
                return _b(e, t, a);
              case mt: {
                var Ce = t.type,
                  rt = t.pendingProps,
                  Ze = bi(Ce, rt);
                if (t.type !== t.elementType) {
                  var L = Ce.propTypes;
                  L &&
                    Ci(
                      L,
                      Ze,
                      // Resolved for outer only
                      "prop",
                      St(Ce),
                    );
                }
                return (Ze = bi(Ce.type, Ze)), VC(e, t, Ce, Ze, a);
              }
              case $e:
                return BC(e, t, t.type, t.pendingProps, a);
              case mn: {
                var V = t.type,
                  N = t.pendingProps,
                  X = t.elementType === V ? N : bi(V, N);
                return sb(e, t, V, X, a);
              }
              case dt:
                return qC(e, t, a);
              case Dn:
                break;
              case Fe:
                return PC(e, t, a);
            }
            throw new Error(
              "Unknown unit of work tag (" +
                t.tag +
                "). This error is likely caused by a bug in React. Please file an issue.",
            );
          }
          function ff(e) {
            e.flags |= Ye;
          }
          function t1(e) {
            (e.flags |= mr), (e.flags |= ad);
          }
          var n1, PS, r1, a1;
          (n1 = function (e, t, a, i) {
            for (var u = t.child; u !== null; ) {
              if (u.tag === oe || u.tag === _e) qR(e, u.stateNode);
              else if (u.tag !== J) {
                if (u.child !== null) {
                  (u.child.return = u), (u = u.child);
                  continue;
                }
              }
              if (u === t) return;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) return;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
          }),
            (PS = function (e, t) {}),
            (r1 = function (e, t, a, i, u) {
              var s = e.memoizedProps;
              if (s !== i) {
                var f = t.stateNode,
                  p = Ag(),
                  h = ZR(f, a, s, i, u, p);
                (t.updateQueue = h), h && ff(t);
              }
            }),
            (a1 = function (e, t, a, i) {
              a !== i && ff(t);
            });
          function Sp(e, t) {
            if (!rr())
              switch (e.tailMode) {
                case "hidden": {
                  for (var a = e.tail, i = null; a !== null; )
                    a.alternate !== null && (i = a), (a = a.sibling);
                  i === null ? (e.tail = null) : (i.sibling = null);
                  break;
                }
                case "collapsed": {
                  for (var u = e.tail, s = null; u !== null; )
                    u.alternate !== null && (s = u), (u = u.sibling);
                  s === null
                    ? !t && e.tail !== null
                      ? (e.tail.sibling = null)
                      : (e.tail = null)
                    : (s.sibling = null);
                  break;
                }
              }
          }
          function ir(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
              a = Y,
              i = be;
            if (t) {
              if ((e.mode & Ae) !== ge) {
                for (var h = e.selfBaseDuration, g = e.child; g !== null; )
                  (a = Pe(a, Pe(g.lanes, g.childLanes))),
                    (i |= g.subtreeFlags & On),
                    (i |= g.flags & On),
                    (h += g.treeBaseDuration),
                    (g = g.sibling);
                e.treeBaseDuration = h;
              } else
                for (var E = e.child; E !== null; )
                  (a = Pe(a, Pe(E.lanes, E.childLanes))),
                    (i |= E.subtreeFlags & On),
                    (i |= E.flags & On),
                    (E.return = e),
                    (E = E.sibling);
              e.subtreeFlags |= i;
            } else {
              if ((e.mode & Ae) !== ge) {
                for (
                  var u = e.actualDuration, s = e.selfBaseDuration, f = e.child;
                  f !== null;

                )
                  (a = Pe(a, Pe(f.lanes, f.childLanes))),
                    (i |= f.subtreeFlags),
                    (i |= f.flags),
                    (u += f.actualDuration),
                    (s += f.treeBaseDuration),
                    (f = f.sibling);
                (e.actualDuration = u), (e.treeBaseDuration = s);
              } else
                for (var p = e.child; p !== null; )
                  (a = Pe(a, Pe(p.lanes, p.childLanes))),
                    (i |= p.subtreeFlags),
                    (i |= p.flags),
                    (p.return = e),
                    (p = p.sibling);
              e.subtreeFlags |= i;
            }
            return (e.childLanes = a), t;
          }
          function Lb(e, t, a) {
            if (vw() && (t.mode & Ee) !== ge && (t.flags & ze) === be)
              return zE(t), Zc(), (t.flags |= Yt | Hr | Rn), !1;
            var i = Vh(t);
            if (a !== null && a.dehydrated !== null)
              if (e === null) {
                if (!i)
                  throw new Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.",
                  );
                if ((dw(t), ir(t), (t.mode & Ae) !== ge)) {
                  var u = a !== null;
                  if (u) {
                    var s = t.child;
                    s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
                  }
                }
                return !1;
              } else {
                if (
                  (Zc(),
                  (t.flags & ze) === be && (t.memoizedState = null),
                  (t.flags |= Ye),
                  ir(t),
                  (t.mode & Ae) !== ge)
                ) {
                  var f = a !== null;
                  if (f) {
                    var p = t.child;
                    p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
                  }
                }
                return !1;
              }
            else return AE(), !0;
          }
          function i1(e, t, a) {
            var i = t.pendingProps;
            switch ((vg(t), t.tag)) {
              case Z:
              case Gt:
              case $e:
              case P:
              case xe:
              case Ie:
              case at:
              case je:
              case kt:
              case mt:
                return ir(t), null;
              case j: {
                var u = t.type;
                return el(u) && Uh(t), ir(t), null;
              }
              case $: {
                var s = t.stateNode;
                if (
                  (rf(t),
                  cg(t),
                  Bg(),
                  s.pendingContext &&
                    ((s.context = s.pendingContext), (s.pendingContext = null)),
                  e === null || e.child === null)
                ) {
                  var f = Vh(t);
                  if (f) ff(t);
                  else if (e !== null) {
                    var p = e.memoizedState;
                    // Check if this is a client root
                    (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
                      (t.flags & Yt) !== be) &&
                      ((t.flags |= aa), AE());
                  }
                }
                return PS(e, t), ir(t), null;
              }
              case oe: {
                jg(t);
                var h = qE(),
                  g = t.type;
                if (e !== null && t.stateNode != null)
                  r1(e, t, g, i, h), e.ref !== t.ref && t1(t);
                else {
                  if (!i) {
                    if (t.stateNode === null)
                      throw new Error(
                        "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
                      );
                    return ir(t), null;
                  }
                  var E = Ag(),
                    _ = Vh(t);
                  if (_) cw(t, h, E) && ff(t);
                  else {
                    var w = KR(g, i, h, E, t);
                    n1(w, t, !1, !1),
                      (t.stateNode = w),
                      JR(w, g, i, h) && ff(t);
                  }
                  t.ref !== null && t1(t);
                }
                return ir(t), null;
              }
              case _e: {
                var M = i;
                if (e && t.stateNode != null) {
                  var z = e.memoizedProps;
                  a1(e, t, z, M);
                } else {
                  if (typeof M != "string" && t.stateNode === null)
                    throw new Error(
                      "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
                    );
                  var H = qE(),
                    le = Ag(),
                    De = Vh(t);
                  De ? fw(t) && ff(t) : (t.stateNode = ex(M, H, le, t));
                }
                return ir(t), null;
              }
              case We: {
                lf(t);
                var Ce = t.memoizedState;
                if (
                  e === null ||
                  (e.memoizedState !== null &&
                    e.memoizedState.dehydrated !== null)
                ) {
                  var rt = Lb(e, t, Ce);
                  if (!rt) return t.flags & Rn ? t : null;
                }
                if ((t.flags & ze) !== be)
                  return (t.lanes = a), (t.mode & Ae) !== ge && dS(t), t;
                var Ze = Ce !== null,
                  L = e !== null && e.memoizedState !== null;
                if (Ze !== L && Ze) {
                  var V = t.child;
                  if (((V.flags |= Pi), (t.mode & Ee) !== ge)) {
                    var N =
                      e === null &&
                      (t.memoizedProps.unstable_avoidThisFallback !== !0 ||
                        !lt);
                    N || Fg(xi.current, eC) ? N_() : l0();
                  }
                }
                var X = t.updateQueue;
                if (
                  (X !== null && (t.flags |= Ye),
                  ir(t),
                  (t.mode & Ae) !== ge && Ze)
                ) {
                  var de = t.child;
                  de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
                }
                return null;
              }
              case J:
                return (
                  rf(t),
                  PS(e, t),
                  e === null && Ix(t.stateNode.containerInfo),
                  ir(t),
                  null
                );
              case ke:
                var ue = t.type._context;
                return Dg(ue, t), ir(t), null;
              case mn: {
                var Ue = t.type;
                return el(Ue) && Uh(t), ir(t), null;
              }
              case dt: {
                lf(t);
                var Ve = t.memoizedState;
                if (Ve === null) return ir(t), null;
                var Tt = (t.flags & ze) !== be,
                  ot = Ve.rendering;
                if (ot === null)
                  if (Tt) Sp(Ve, !1);
                  else {
                    var vn = M_() && (e === null || (e.flags & ze) === be);
                    if (!vn)
                      for (var st = t.child; st !== null; ) {
                        var ln = nm(st);
                        if (ln !== null) {
                          (Tt = !0), (t.flags |= ze), Sp(Ve, !1);
                          var kr = ln.updateQueue;
                          return (
                            kr !== null &&
                              ((t.updateQueue = kr), (t.flags |= Ye)),
                            (t.subtreeFlags = be),
                            Cw(t, a),
                            Zu(t, Hg(xi.current, lp)),
                            t.child
                          );
                        }
                        st = st.sibling;
                      }
                    Ve.tail !== null &&
                      Bt() > b1() &&
                      ((t.flags |= ze), (Tt = !0), Sp(Ve, !1), (t.lanes = Hv));
                  }
                else {
                  if (!Tt) {
                    var cr = nm(ot);
                    if (cr !== null) {
                      (t.flags |= ze), (Tt = !0);
                      var ja = cr.updateQueue;
                      if (
                        (ja !== null && ((t.updateQueue = ja), (t.flags |= Ye)),
                        Sp(Ve, !0),
                        Ve.tail === null &&
                          Ve.tailMode === "hidden" &&
                          !ot.alternate &&
                          !rr())
                      )
                        return ir(t), null;
                    } // The time it took to render last row is greater than the remaining
                    // time we have to render. So rendering one more row would likely
                    // exceed it.
                    else
                      Bt() * 2 - Ve.renderingStartTime > b1() &&
                        a !== Kn &&
                        ((t.flags |= ze),
                        (Tt = !0),
                        Sp(Ve, !1),
                        (t.lanes = Hv));
                  }
                  if (Ve.isBackwards) (ot.sibling = t.child), (t.child = ot);
                  else {
                    var Gr = Ve.last;
                    Gr !== null ? (Gr.sibling = ot) : (t.child = ot),
                      (Ve.last = ot);
                  }
                }
                if (Ve.tail !== null) {
                  var Xr = Ve.tail;
                  (Ve.rendering = Xr),
                    (Ve.tail = Xr.sibling),
                    (Ve.renderingStartTime = Bt()),
                    (Xr.sibling = null);
                  var Lr = xi.current;
                  return Tt ? (Lr = Hg(Lr, lp)) : (Lr = af(Lr)), Zu(t, Lr), Xr;
                }
                return ir(t), null;
              }
              case Dn:
                break;
              case Fe:
              case et: {
                i0(t);
                var ql = t.memoizedState,
                  Sf = ql !== null;
                if (e !== null) {
                  var zp = e.memoizedState,
                    ol = zp !== null;
                  ol !== Sf && // LegacyHidden doesn't do any hiding — it only pre-renders.
                    !fe &&
                    (t.flags |= Pi);
                }
                return (
                  !Sf || (t.mode & Ee) === ge
                    ? ir(t)
                    : xr(ul, Kn) &&
                      (ir(t), t.subtreeFlags & (Ot | Ye) && (t.flags |= Pi)),
                  null
                );
              }
              case yn:
                return null;
              case Lt:
                return null;
            }
            throw new Error(
              "Unknown unit of work tag (" +
                t.tag +
                "). This error is likely caused by a bug in React. Please file an issue.",
            );
          }
          function Nb(e, t, a) {
            switch ((vg(t), t.tag)) {
              case j: {
                var i = t.type;
                el(i) && Uh(t);
                var u = t.flags;
                return u & Rn
                  ? ((t.flags = (u & ~Rn) | ze),
                    (t.mode & Ae) !== ge && dS(t),
                    t)
                  : null;
              }
              case $: {
                t.stateNode, rf(t), cg(t), Bg();
                var s = t.flags;
                return (s & Rn) !== be && (s & ze) === be
                  ? ((t.flags = (s & ~Rn) | ze), t)
                  : null;
              }
              case oe:
                return jg(t), null;
              case We: {
                lf(t);
                var f = t.memoizedState;
                if (f !== null && f.dehydrated !== null) {
                  if (t.alternate === null)
                    throw new Error(
                      "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.",
                    );
                  Zc();
                }
                var p = t.flags;
                return p & Rn
                  ? ((t.flags = (p & ~Rn) | ze),
                    (t.mode & Ae) !== ge && dS(t),
                    t)
                  : null;
              }
              case dt:
                return lf(t), null;
              case J:
                return rf(t), null;
              case ke:
                var h = t.type._context;
                return Dg(h, t), null;
              case Fe:
              case et:
                return i0(t), null;
              case yn:
                return null;
              default:
                return null;
            }
          }
          function l1(e, t, a) {
            switch ((vg(t), t.tag)) {
              case j: {
                var i = t.type.childContextTypes;
                i != null && Uh(t);
                break;
              }
              case $: {
                t.stateNode, rf(t), cg(t), Bg();
                break;
              }
              case oe: {
                jg(t);
                break;
              }
              case J:
                rf(t);
                break;
              case We:
                lf(t);
                break;
              case dt:
                lf(t);
                break;
              case ke:
                var u = t.type._context;
                Dg(u, t);
                break;
              case Fe:
              case et:
                i0(t);
                break;
            }
          }
          var u1 = null;
          u1 = /* @__PURE__ */ new Set();
          var bm = !1,
            lr = !1,
            Ob = typeof WeakSet == "function" ? WeakSet : Set,
            me = null,
            df = null,
            pf = null;
          function Mb(e) {
            Tl(null, function () {
              throw e;
            }),
              nd();
          }
          var Ub = function (e, t) {
            if (
              ((t.props = e.memoizedProps),
              (t.state = e.memoizedState),
              e.mode & Ae)
            )
              try {
                il(), t.componentWillUnmount();
              } finally {
                al(e);
              }
            else t.componentWillUnmount();
          };
          function o1(e, t) {
            try {
              no(An, e);
            } catch (a) {
              zt(e, t, a);
            }
          }
          function $S(e, t, a) {
            try {
              Ub(e, a);
            } catch (i) {
              zt(e, t, i);
            }
          }
          function zb(e, t, a) {
            try {
              a.componentDidMount();
            } catch (i) {
              zt(e, t, i);
            }
          }
          function s1(e, t) {
            try {
              f1(e);
            } catch (a) {
              zt(e, t, a);
            }
          }
          function vf(e, t) {
            var a = e.ref;
            if (a !== null)
              if (typeof a == "function") {
                var i;
                try {
                  if (un && Kr && e.mode & Ae)
                    try {
                      il(), (i = a(null));
                    } finally {
                      al(e);
                    }
                  else i = a(null);
                } catch (u) {
                  zt(e, t, u);
                }
                typeof i == "function" &&
                  y(
                    "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
                    Be(e),
                  );
              } else a.current = null;
          }
          function _m(e, t, a) {
            try {
              a();
            } catch (i) {
              zt(e, t, i);
            }
          }
          var c1 = !1;
          function Ab(e, t) {
            GR(e.containerInfo), (me = t), jb();
            var a = c1;
            return (c1 = !1), a;
          }
          function jb() {
            for (; me !== null; ) {
              var e = me,
                t = e.child;
              (e.subtreeFlags & hu) !== be && t !== null
                ? ((t.return = e), (me = t))
                : Fb();
            }
          }
          function Fb() {
            for (; me !== null; ) {
              var e = me;
              Et(e);
              try {
                Hb(e);
              } catch (a) {
                zt(e, e.return, a);
              }
              on();
              var t = e.sibling;
              if (t !== null) {
                (t.return = e.return), (me = t);
                return;
              }
              me = e.return;
            }
          }
          function Hb(e) {
            var t = e.alternate,
              a = e.flags;
            if ((a & aa) !== be) {
              switch ((Et(e), e.tag)) {
                case P:
                case xe:
                case $e:
                  break;
                case j: {
                  if (t !== null) {
                    var i = t.memoizedProps,
                      u = t.memoizedState,
                      s = e.stateNode;
                    e.type === e.elementType &&
                      !vs &&
                      (s.props !== e.memoizedProps &&
                        y(
                          "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                          Be(e) || "instance",
                        ),
                      s.state !== e.memoizedState &&
                        y(
                          "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                          Be(e) || "instance",
                        ));
                    var f = s.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? i : bi(e.type, i),
                      u,
                    );
                    {
                      var p = u1;
                      f === void 0 &&
                        !p.has(e.type) &&
                        (p.add(e.type),
                        y(
                          "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
                          Be(e),
                        ));
                    }
                    s.__reactInternalSnapshotBeforeUpdate = f;
                  }
                  break;
                }
                case $: {
                  {
                    var h = e.stateNode;
                    Sx(h.containerInfo);
                  }
                  break;
                }
                case oe:
                case _e:
                case J:
                case mn:
                  break;
                default:
                  throw new Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                  );
              }
              on();
            }
          }
          function Di(e, t, a) {
            var i = t.updateQueue,
              u = i !== null ? i.lastEffect : null;
            if (u !== null) {
              var s = u.next,
                f = s;
              do {
                if ((f.tag & e) === e) {
                  var p = f.destroy;
                  (f.destroy = void 0),
                    p !== void 0 &&
                      ((e & ar) !== ga ? Av(t) : (e & An) !== ga && Ua(t),
                      (e & tl) !== ga && Op(!0),
                      _m(t, a, p),
                      (e & tl) !== ga && Op(!1),
                      (e & ar) !== ga ? Zs() : (e & An) !== ga && Su());
                }
                f = f.next;
              } while (f !== s);
            }
          }
          function no(e, t) {
            var a = t.updateQueue,
              i = a !== null ? a.lastEffect : null;
            if (i !== null) {
              var u = i.next,
                s = u;
              do {
                if ((s.tag & e) === e) {
                  (e & ar) !== ga ? Wi(t) : (e & An) !== ga && jv(t);
                  var f = s.create;
                  (e & tl) !== ga && Op(!0),
                    (s.destroy = f()),
                    (e & tl) !== ga && Op(!1),
                    (e & ar) !== ga ? Js() : (e & An) !== ga && Uo();
                  {
                    var p = s.destroy;
                    if (p !== void 0 && typeof p != "function") {
                      var h = void 0;
                      (s.tag & An) !== be
                        ? (h = "useLayoutEffect")
                        : (s.tag & tl) !== be
                          ? (h = "useInsertionEffect")
                          : (h = "useEffect");
                      var g = void 0;
                      p === null
                        ? (g =
                            " You returned null. If your effect does not require clean up, return undefined (or nothing).")
                        : typeof p.then == "function"
                          ? (g =
                              `

It looks like you wrote ` +
                              h +
                              `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                              h +
                              `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                          : (g = " You returned: " + p),
                        y(
                          "%s must not return anything besides a function, which is used for clean-up.%s",
                          h,
                          g,
                        );
                    }
                  }
                }
                s = s.next;
              } while (s !== u);
            }
          }
          function Vb(e, t) {
            if ((t.flags & Ye) !== be)
              switch (t.tag) {
                case je: {
                  var a = t.stateNode.passiveEffectDuration,
                    i = t.memoizedProps,
                    u = i.id,
                    s = i.onPostCommit,
                    f = bC(),
                    p = t.alternate === null ? "mount" : "update";
                  wC() && (p = "nested-update"),
                    typeof s == "function" && s(u, p, a, f);
                  var h = t.return;
                  e: for (; h !== null; ) {
                    switch (h.tag) {
                      case $:
                        var g = h.stateNode;
                        g.passiveEffectDuration += a;
                        break e;
                      case je:
                        var E = h.stateNode;
                        E.passiveEffectDuration += a;
                        break e;
                    }
                    h = h.return;
                  }
                  break;
                }
              }
          }
          function Bb(e, t, a, i) {
            if ((a.flags & Gn) !== be)
              switch (a.tag) {
                case P:
                case xe:
                case $e: {
                  if (!lr)
                    if (a.mode & Ae)
                      try {
                        il(), no(An | zn, a);
                      } finally {
                        al(a);
                      }
                    else no(An | zn, a);
                  break;
                }
                case j: {
                  var u = a.stateNode;
                  if (a.flags & Ye && !lr)
                    if (t === null)
                      if (
                        (a.type === a.elementType &&
                          !vs &&
                          (u.props !== a.memoizedProps &&
                            y(
                              "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                              Be(a) || "instance",
                            ),
                          u.state !== a.memoizedState &&
                            y(
                              "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                              Be(a) || "instance",
                            )),
                        a.mode & Ae)
                      )
                        try {
                          il(), u.componentDidMount();
                        } finally {
                          al(a);
                        }
                      else u.componentDidMount();
                    else {
                      var s =
                          a.elementType === a.type
                            ? t.memoizedProps
                            : bi(a.type, t.memoizedProps),
                        f = t.memoizedState;
                      if (
                        (a.type === a.elementType &&
                          !vs &&
                          (u.props !== a.memoizedProps &&
                            y(
                              "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                              Be(a) || "instance",
                            ),
                          u.state !== a.memoizedState &&
                            y(
                              "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                              Be(a) || "instance",
                            )),
                        a.mode & Ae)
                      )
                        try {
                          il(),
                            u.componentDidUpdate(
                              s,
                              f,
                              u.__reactInternalSnapshotBeforeUpdate,
                            );
                        } finally {
                          al(a);
                        }
                      else
                        u.componentDidUpdate(
                          s,
                          f,
                          u.__reactInternalSnapshotBeforeUpdate,
                        );
                    }
                  var p = a.updateQueue;
                  p !== null &&
                    (a.type === a.elementType &&
                      !vs &&
                      (u.props !== a.memoizedProps &&
                        y(
                          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                          Be(a) || "instance",
                        ),
                      u.state !== a.memoizedState &&
                        y(
                          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                          Be(a) || "instance",
                        )),
                    KE(a, p, u));
                  break;
                }
                case $: {
                  var h = a.updateQueue;
                  if (h !== null) {
                    var g = null;
                    if (a.child !== null)
                      switch (a.child.tag) {
                        case oe:
                          g = a.child.stateNode;
                          break;
                        case j:
                          g = a.child.stateNode;
                          break;
                      }
                    KE(a, h, g);
                  }
                  break;
                }
                case oe: {
                  var E = a.stateNode;
                  if (t === null && a.flags & Ye) {
                    var _ = a.type,
                      w = a.memoizedProps;
                    ix(E, _, w);
                  }
                  break;
                }
                case _e:
                  break;
                case J:
                  break;
                case je: {
                  {
                    var M = a.memoizedProps,
                      z = M.onCommit,
                      H = M.onRender,
                      le = a.stateNode.effectDuration,
                      De = bC(),
                      Ce = t === null ? "mount" : "update";
                    wC() && (Ce = "nested-update"),
                      typeof H == "function" &&
                        H(
                          a.memoizedProps.id,
                          Ce,
                          a.actualDuration,
                          a.treeBaseDuration,
                          a.actualStartTime,
                          De,
                        );
                    {
                      typeof z == "function" &&
                        z(a.memoizedProps.id, Ce, le, De),
                        F_(a);
                      var rt = a.return;
                      e: for (; rt !== null; ) {
                        switch (rt.tag) {
                          case $:
                            var Ze = rt.stateNode;
                            Ze.effectDuration += le;
                            break e;
                          case je:
                            var L = rt.stateNode;
                            L.effectDuration += le;
                            break e;
                        }
                        rt = rt.return;
                      }
                    }
                  }
                  break;
                }
                case We: {
                  Xb(e, a);
                  break;
                }
                case dt:
                case mn:
                case Dn:
                case Fe:
                case et:
                case Lt:
                  break;
                default:
                  throw new Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                  );
              }
            lr || (a.flags & mr && f1(a));
          }
          function Pb(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                if (e.mode & Ae)
                  try {
                    il(), o1(e, e.return);
                  } finally {
                    al(e);
                  }
                else o1(e, e.return);
                break;
              }
              case j: {
                var t = e.stateNode;
                typeof t.componentDidMount == "function" && zb(e, e.return, t),
                  s1(e, e.return);
                break;
              }
              case oe: {
                s1(e, e.return);
                break;
              }
            }
          }
          function $b(e, t) {
            for (var a = null, i = e; ; ) {
              if (i.tag === oe) {
                if (a === null) {
                  a = i;
                  try {
                    var u = i.stateNode;
                    t ? hx(u) : yx(i.stateNode, i.memoizedProps);
                  } catch (f) {
                    zt(e, e.return, f);
                  }
                }
              } else if (i.tag === _e) {
                if (a === null)
                  try {
                    var s = i.stateNode;
                    t ? mx(s) : gx(s, i.memoizedProps);
                  } catch (f) {
                    zt(e, e.return, f);
                  }
              } else if (
                !(
                  (i.tag === Fe || i.tag === et) &&
                  i.memoizedState !== null &&
                  i !== e
                )
              ) {
                if (i.child !== null) {
                  (i.child.return = i), (i = i.child);
                  continue;
                }
              }
              if (i === e) return;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) return;
                a === i && (a = null), (i = i.return);
              }
              a === i && (a = null),
                (i.sibling.return = i.return),
                (i = i.sibling);
            }
          }
          function f1(e) {
            var t = e.ref;
            if (t !== null) {
              var a = e.stateNode,
                i;
              switch (e.tag) {
                case oe:
                  i = a;
                  break;
                default:
                  i = a;
              }
              if (typeof t == "function") {
                var u;
                if (e.mode & Ae)
                  try {
                    il(), (u = t(i));
                  } finally {
                    al(e);
                  }
                else u = t(i);
                typeof u == "function" &&
                  y(
                    "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
                    Be(e),
                  );
              } else
                t.hasOwnProperty("current") ||
                  y(
                    "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
                    Be(e),
                  ),
                  (t.current = i);
            }
          }
          function Yb(e) {
            var t = e.alternate;
            t !== null && (t.return = null), (e.return = null);
          }
          function d1(e) {
            var t = e.alternate;
            t !== null && ((e.alternate = null), d1(t));
            {
              if (
                ((e.child = null),
                (e.deletions = null),
                (e.sibling = null),
                e.tag === oe)
              ) {
                var a = e.stateNode;
                a !== null && Kx(a);
              }
              (e.stateNode = null),
                (e._debugOwner = null),
                (e.return = null),
                (e.dependencies = null),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.pendingProps = null),
                (e.stateNode = null),
                (e.updateQueue = null);
            }
          }
          function Wb(e) {
            for (var t = e.return; t !== null; ) {
              if (p1(t)) return t;
              t = t.return;
            }
            throw new Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
            );
          }
          function p1(e) {
            return e.tag === oe || e.tag === $ || e.tag === J;
          }
          function v1(e) {
            var t = e;
            e: for (;;) {
              for (; t.sibling === null; ) {
                if (t.return === null || p1(t.return)) return null;
                t = t.return;
              }
              for (
                t.sibling.return = t.return, t = t.sibling;
                t.tag !== oe && t.tag !== _e && t.tag !== wt;

              ) {
                if (t.flags & Ot || t.child === null || t.tag === J) continue e;
                (t.child.return = t), (t = t.child);
              }
              if (!(t.flags & Ot)) return t.stateNode;
            }
          }
          function Qb(e) {
            var t = Wb(e);
            switch (t.tag) {
              case oe: {
                var a = t.stateNode;
                t.flags & vt && (mE(a), (t.flags &= ~vt));
                var i = v1(e);
                WS(e, i, a);
                break;
              }
              case $:
              case J: {
                var u = t.stateNode.containerInfo,
                  s = v1(e);
                YS(e, s, u);
                break;
              }
              default:
                throw new Error(
                  "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.",
                );
            }
          }
          function YS(e, t, a) {
            var i = e.tag,
              u = i === oe || i === _e;
            if (u) {
              var s = e.stateNode;
              t ? fx(a, s, t) : sx(a, s);
            } else if (i !== J) {
              var f = e.child;
              if (f !== null) {
                YS(f, t, a);
                for (var p = f.sibling; p !== null; )
                  YS(p, t, a), (p = p.sibling);
              }
            }
          }
          function WS(e, t, a) {
            var i = e.tag,
              u = i === oe || i === _e;
            if (u) {
              var s = e.stateNode;
              t ? cx(a, s, t) : ox(a, s);
            } else if (i !== J) {
              var f = e.child;
              if (f !== null) {
                WS(f, t, a);
                for (var p = f.sibling; p !== null; )
                  WS(p, t, a), (p = p.sibling);
              }
            }
          }
          var ur = null,
            ki = !1;
          function Ib(e, t, a) {
            {
              var i = t;
              e: for (; i !== null; ) {
                switch (i.tag) {
                  case oe: {
                    (ur = i.stateNode), (ki = !1);
                    break e;
                  }
                  case $: {
                    (ur = i.stateNode.containerInfo), (ki = !0);
                    break e;
                  }
                  case J: {
                    (ur = i.stateNode.containerInfo), (ki = !0);
                    break e;
                  }
                }
                i = i.return;
              }
              if (ur === null)
                throw new Error(
                  "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
                );
              h1(e, t, a), (ur = null), (ki = !1);
            }
            Yb(a);
          }
          function ro(e, t, a) {
            for (var i = a.child; i !== null; ) h1(e, t, i), (i = i.sibling);
          }
          function h1(e, t, a) {
            switch ((wl(a), a.tag)) {
              case oe:
                lr || vf(a, t);
              case _e: {
                {
                  var i = ur,
                    u = ki;
                  (ur = null),
                    ro(e, t, a),
                    (ur = i),
                    (ki = u),
                    ur !== null &&
                      (ki ? px(ur, a.stateNode) : dx(ur, a.stateNode));
                }
                return;
              }
              case wt: {
                ur !== null && (ki ? vx(ur, a.stateNode) : ng(ur, a.stateNode));
                return;
              }
              case J: {
                {
                  var s = ur,
                    f = ki;
                  (ur = a.stateNode.containerInfo),
                    (ki = !0),
                    ro(e, t, a),
                    (ur = s),
                    (ki = f);
                }
                return;
              }
              case P:
              case xe:
              case mt:
              case $e: {
                if (!lr) {
                  var p = a.updateQueue;
                  if (p !== null) {
                    var h = p.lastEffect;
                    if (h !== null) {
                      var g = h.next,
                        E = g;
                      do {
                        var _ = E,
                          w = _.destroy,
                          M = _.tag;
                        w !== void 0 &&
                          ((M & tl) !== ga
                            ? _m(a, t, w)
                            : (M & An) !== ga &&
                              (Ua(a),
                              a.mode & Ae
                                ? (il(), _m(a, t, w), al(a))
                                : _m(a, t, w),
                              Su())),
                          (E = E.next);
                      } while (E !== g);
                    }
                  }
                }
                ro(e, t, a);
                return;
              }
              case j: {
                if (!lr) {
                  vf(a, t);
                  var z = a.stateNode;
                  typeof z.componentWillUnmount == "function" && $S(a, t, z);
                }
                ro(e, t, a);
                return;
              }
              case Dn: {
                ro(e, t, a);
                return;
              }
              case Fe: {
                if (
                  // TODO: Remove this dead flag
                  a.mode & Ee
                ) {
                  var H = lr;
                  (lr = H || a.memoizedState !== null), ro(e, t, a), (lr = H);
                } else ro(e, t, a);
                break;
              }
              default: {
                ro(e, t, a);
                return;
              }
            }
          }
          function Gb(e) {
            e.memoizedState;
          }
          function Xb(e, t) {
            var a = t.memoizedState;
            if (a === null) {
              var i = t.alternate;
              if (i !== null) {
                var u = i.memoizedState;
                if (u !== null) {
                  var s = u.dehydrated;
                  s !== null && Mx(s);
                }
              }
            }
          }
          function m1(e) {
            var t = e.updateQueue;
            if (t !== null) {
              e.updateQueue = null;
              var a = e.stateNode;
              a === null && (a = e.stateNode = new Ob()),
                t.forEach(function (i) {
                  var u = W_.bind(null, e, i);
                  if (!a.has(i)) {
                    if ((a.add(i), Pr))
                      if (df !== null && pf !== null) Np(pf, df);
                      else
                        throw Error(
                          "Expected finished root and lanes to be set. This is a bug in React.",
                        );
                    i.then(u, u);
                  }
                });
            }
          }
          function Kb(e, t, a) {
            (df = a),
              (pf = e),
              Et(t),
              y1(t, e),
              Et(t),
              (df = null),
              (pf = null);
          }
          function Li(e, t, a) {
            var i = t.deletions;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u];
                try {
                  Ib(e, t, s);
                } catch (h) {
                  zt(s, t, h);
                }
              }
            var f = ry();
            if (t.subtreeFlags & Sr)
              for (var p = t.child; p !== null; )
                Et(p), y1(p, e), (p = p.sibling);
            Et(f);
          }
          function y1(e, t, a) {
            var i = e.alternate,
              u = e.flags;
            switch (e.tag) {
              case P:
              case xe:
              case mt:
              case $e: {
                if ((Li(t, e), ll(e), u & Ye)) {
                  try {
                    Di(tl | zn, e, e.return), no(tl | zn, e);
                  } catch (Ue) {
                    zt(e, e.return, Ue);
                  }
                  if (e.mode & Ae) {
                    try {
                      il(), Di(An | zn, e, e.return);
                    } catch (Ue) {
                      zt(e, e.return, Ue);
                    }
                    al(e);
                  } else
                    try {
                      Di(An | zn, e, e.return);
                    } catch (Ue) {
                      zt(e, e.return, Ue);
                    }
                }
                return;
              }
              case j: {
                Li(t, e), ll(e), u & mr && i !== null && vf(i, i.return);
                return;
              }
              case oe: {
                Li(t, e), ll(e), u & mr && i !== null && vf(i, i.return);
                {
                  if (e.flags & vt) {
                    var s = e.stateNode;
                    try {
                      mE(s);
                    } catch (Ue) {
                      zt(e, e.return, Ue);
                    }
                  }
                  if (u & Ye) {
                    var f = e.stateNode;
                    if (f != null) {
                      var p = e.memoizedProps,
                        h = i !== null ? i.memoizedProps : p,
                        g = e.type,
                        E = e.updateQueue;
                      if (((e.updateQueue = null), E !== null))
                        try {
                          lx(f, E, g, h, p, e);
                        } catch (Ue) {
                          zt(e, e.return, Ue);
                        }
                    }
                  }
                }
                return;
              }
              case _e: {
                if ((Li(t, e), ll(e), u & Ye)) {
                  if (e.stateNode === null)
                    throw new Error(
                      "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.",
                    );
                  var _ = e.stateNode,
                    w = e.memoizedProps,
                    M = i !== null ? i.memoizedProps : w;
                  try {
                    ux(_, M, w);
                  } catch (Ue) {
                    zt(e, e.return, Ue);
                  }
                }
                return;
              }
              case $: {
                if ((Li(t, e), ll(e), u & Ye && i !== null)) {
                  var z = i.memoizedState;
                  if (z.isDehydrated)
                    try {
                      Ox(t.containerInfo);
                    } catch (Ue) {
                      zt(e, e.return, Ue);
                    }
                }
                return;
              }
              case J: {
                Li(t, e), ll(e);
                return;
              }
              case We: {
                Li(t, e), ll(e);
                var H = e.child;
                if (H.flags & Pi) {
                  var le = H.stateNode,
                    De = H.memoizedState,
                    Ce = De !== null;
                  if (((le.isHidden = Ce), Ce)) {
                    var rt =
                      H.alternate !== null &&
                      H.alternate.memoizedState !== null;
                    rt || L_();
                  }
                }
                if (u & Ye) {
                  try {
                    Gb(e);
                  } catch (Ue) {
                    zt(e, e.return, Ue);
                  }
                  m1(e);
                }
                return;
              }
              case Fe: {
                var Ze = i !== null && i.memoizedState !== null;
                if (
                  // TODO: Remove this dead flag
                  e.mode & Ee
                ) {
                  var L = lr;
                  (lr = L || Ze), Li(t, e), (lr = L);
                } else Li(t, e);
                if ((ll(e), u & Pi)) {
                  var V = e.stateNode,
                    N = e.memoizedState,
                    X = N !== null,
                    de = e;
                  if (((V.isHidden = X), X && !Ze && (de.mode & Ee) !== ge)) {
                    me = de;
                    for (var ue = de.child; ue !== null; )
                      (me = ue), Jb(ue), (ue = ue.sibling);
                  }
                  $b(de, X);
                }
                return;
              }
              case dt: {
                Li(t, e), ll(e), u & Ye && m1(e);
                return;
              }
              case Dn:
                return;
              default: {
                Li(t, e), ll(e);
                return;
              }
            }
          }
          function ll(e) {
            var t = e.flags;
            if (t & Ot) {
              try {
                Qb(e);
              } catch (a) {
                zt(e, e.return, a);
              }
              e.flags &= ~Ot;
            }
            t & ia && (e.flags &= ~ia);
          }
          function qb(e, t, a) {
            (df = a), (pf = t), (me = e), g1(e, t, a), (df = null), (pf = null);
          }
          function g1(e, t, a) {
            for (var i = (e.mode & Ee) !== ge; me !== null; ) {
              var u = me,
                s = u.child;
              if (u.tag === Fe && i) {
                var f = u.memoizedState !== null,
                  p = f || bm;
                if (p) {
                  QS(e, t, a);
                  continue;
                } else {
                  var h = u.alternate,
                    g = h !== null && h.memoizedState !== null,
                    E = g || lr,
                    _ = bm,
                    w = lr;
                  (bm = p), (lr = E), lr && !w && ((me = u), Zb(u));
                  for (var M = s; M !== null; )
                    (me = M),
                      g1(
                        M,
                        // New root; bubble back up to here and stop.
                        t,
                        a,
                      ),
                      (M = M.sibling);
                  (me = u), (bm = _), (lr = w), QS(e, t, a);
                  continue;
                }
              }
              (u.subtreeFlags & Gn) !== be && s !== null
                ? ((s.return = u), (me = s))
                : QS(e, t, a);
            }
          }
          function QS(e, t, a) {
            for (; me !== null; ) {
              var i = me;
              if ((i.flags & Gn) !== be) {
                var u = i.alternate;
                Et(i);
                try {
                  Bb(t, u, i, a);
                } catch (f) {
                  zt(i, i.return, f);
                }
                on();
              }
              if (i === e) {
                me = null;
                return;
              }
              var s = i.sibling;
              if (s !== null) {
                (s.return = i.return), (me = s);
                return;
              }
              me = i.return;
            }
          }
          function Jb(e) {
            for (; me !== null; ) {
              var t = me,
                a = t.child;
              switch (t.tag) {
                case P:
                case xe:
                case mt:
                case $e: {
                  if (t.mode & Ae)
                    try {
                      il(), Di(An, t, t.return);
                    } finally {
                      al(t);
                    }
                  else Di(An, t, t.return);
                  break;
                }
                case j: {
                  vf(t, t.return);
                  var i = t.stateNode;
                  typeof i.componentWillUnmount == "function" &&
                    $S(t, t.return, i);
                  break;
                }
                case oe: {
                  vf(t, t.return);
                  break;
                }
                case Fe: {
                  var u = t.memoizedState !== null;
                  if (u) {
                    S1(e);
                    continue;
                  }
                  break;
                }
              }
              a !== null ? ((a.return = t), (me = a)) : S1(e);
            }
          }
          function S1(e) {
            for (; me !== null; ) {
              var t = me;
              if (t === e) {
                me = null;
                return;
              }
              var a = t.sibling;
              if (a !== null) {
                (a.return = t.return), (me = a);
                return;
              }
              me = t.return;
            }
          }
          function Zb(e) {
            for (; me !== null; ) {
              var t = me,
                a = t.child;
              if (t.tag === Fe) {
                var i = t.memoizedState !== null;
                if (i) {
                  E1(e);
                  continue;
                }
              }
              a !== null ? ((a.return = t), (me = a)) : E1(e);
            }
          }
          function E1(e) {
            for (; me !== null; ) {
              var t = me;
              Et(t);
              try {
                Pb(t);
              } catch (i) {
                zt(t, t.return, i);
              }
              if ((on(), t === e)) {
                me = null;
                return;
              }
              var a = t.sibling;
              if (a !== null) {
                (a.return = t.return), (me = a);
                return;
              }
              me = t.return;
            }
          }
          function e_(e, t, a, i) {
            (me = t), t_(t, e, a, i);
          }
          function t_(e, t, a, i) {
            for (; me !== null; ) {
              var u = me,
                s = u.child;
              (u.subtreeFlags & la) !== be && s !== null
                ? ((s.return = u), (me = s))
                : n_(e, t, a, i);
            }
          }
          function n_(e, t, a, i) {
            for (; me !== null; ) {
              var u = me;
              if ((u.flags & At) !== be) {
                Et(u);
                try {
                  r_(t, u, a, i);
                } catch (f) {
                  zt(u, u.return, f);
                }
                on();
              }
              if (u === e) {
                me = null;
                return;
              }
              var s = u.sibling;
              if (s !== null) {
                (s.return = u.return), (me = s);
                return;
              }
              me = u.return;
            }
          }
          function r_(e, t, a, i) {
            switch (t.tag) {
              case P:
              case xe:
              case $e: {
                if (t.mode & Ae) {
                  fS();
                  try {
                    no(ar | zn, t);
                  } finally {
                    cS(t);
                  }
                } else no(ar | zn, t);
                break;
              }
            }
          }
          function a_(e) {
            (me = e), i_();
          }
          function i_() {
            for (; me !== null; ) {
              var e = me,
                t = e.child;
              if ((me.flags & ft) !== be) {
                var a = e.deletions;
                if (a !== null) {
                  for (var i = 0; i < a.length; i++) {
                    var u = a[i];
                    (me = u), o_(u, e);
                  }
                  {
                    var s = e.alternate;
                    if (s !== null) {
                      var f = s.child;
                      if (f !== null) {
                        s.child = null;
                        do {
                          var p = f.sibling;
                          (f.sibling = null), (f = p);
                        } while (f !== null);
                      }
                    }
                  }
                  me = e;
                }
              }
              (e.subtreeFlags & la) !== be && t !== null
                ? ((t.return = e), (me = t))
                : l_();
            }
          }
          function l_() {
            for (; me !== null; ) {
              var e = me;
              (e.flags & At) !== be && (Et(e), u_(e), on());
              var t = e.sibling;
              if (t !== null) {
                (t.return = e.return), (me = t);
                return;
              }
              me = e.return;
            }
          }
          function u_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                e.mode & Ae
                  ? (fS(), Di(ar | zn, e, e.return), cS(e))
                  : Di(ar | zn, e, e.return);
                break;
              }
            }
          }
          function o_(e, t) {
            for (; me !== null; ) {
              var a = me;
              Et(a), c_(a, t), on();
              var i = a.child;
              i !== null ? ((i.return = a), (me = i)) : s_(e);
            }
          }
          function s_(e) {
            for (; me !== null; ) {
              var t = me,
                a = t.sibling,
                i = t.return;
              if ((d1(t), t === e)) {
                me = null;
                return;
              }
              if (a !== null) {
                (a.return = i), (me = a);
                return;
              }
              me = i;
            }
          }
          function c_(e, t) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                e.mode & Ae ? (fS(), Di(ar, e, t), cS(e)) : Di(ar, e, t);
                break;
              }
            }
          }
          function f_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                try {
                  no(An | zn, e);
                } catch (a) {
                  zt(e, e.return, a);
                }
                break;
              }
              case j: {
                var t = e.stateNode;
                try {
                  t.componentDidMount();
                } catch (a) {
                  zt(e, e.return, a);
                }
                break;
              }
            }
          }
          function d_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                try {
                  no(ar | zn, e);
                } catch (t) {
                  zt(e, e.return, t);
                }
                break;
              }
            }
          }
          function p_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                try {
                  Di(An | zn, e, e.return);
                } catch (a) {
                  zt(e, e.return, a);
                }
                break;
              }
              case j: {
                var t = e.stateNode;
                typeof t.componentWillUnmount == "function" &&
                  $S(e, e.return, t);
                break;
              }
            }
          }
          function v_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e:
                try {
                  Di(ar | zn, e, e.return);
                } catch (t) {
                  zt(e, e.return, t);
                }
            }
          }
          if (typeof Symbol == "function" && Symbol.for) {
            var Ep = Symbol.for;
            Ep("selector.component"),
              Ep("selector.has_pseudo_class"),
              Ep("selector.role"),
              Ep("selector.test_id"),
              Ep("selector.text");
          }
          var h_ = [];
          function m_() {
            h_.forEach(function (e) {
              return e();
            });
          }
          var y_ = S.ReactCurrentActQueue;
          function g_(e) {
            {
              var t =
                  // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                  typeof IS_REACT_ACT_ENVIRONMENT < "u"
                    ? IS_REACT_ACT_ENVIRONMENT
                    : void 0,
                a = typeof jest < "u";
              return a && t !== !1;
            }
          }
          function C1() {
            {
              var e =
                // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                typeof IS_REACT_ACT_ENVIRONMENT < "u"
                  ? IS_REACT_ACT_ENVIRONMENT
                  : void 0;
              return (
                !e &&
                  y_.current !== null &&
                  y(
                    "The current testing environment is not configured to support act(...)",
                  ),
                e
              );
            }
          }
          var S_ = Math.ceil,
            IS = S.ReactCurrentDispatcher,
            GS = S.ReactCurrentOwner,
            or = S.ReactCurrentBatchConfig,
            Ni = S.ReactCurrentActQueue,
            Hn =
              /*             */
              0,
            T1 =
              /*               */
              1,
            sr =
              /*                */
              2,
            ni =
              /*                */
              4,
            Il = 0,
            Cp = 1,
            hs = 2,
            Dm = 3,
            Tp = 4,
            R1 = 5,
            XS = 6,
            nt = Hn,
            Qr = null,
            Zt = null,
            Vn = Y,
            ul = Y,
            KS = Iu(Y),
            Bn = Il,
            Rp = null,
            km = Y,
            xp = Y,
            Lm = Y,
            wp = null,
            Sa = null,
            qS = 0,
            x1 = 500,
            w1 = 1 / 0,
            E_ = 500,
            Gl = null;
          function bp() {
            w1 = Bt() + E_;
          }
          function b1() {
            return w1;
          }
          var Nm = !1,
            JS = null,
            hf = null,
            ms = !1,
            ao = null,
            _p = Y,
            ZS = [],
            e0 = null,
            C_ = 50,
            Dp = 0,
            t0 = null,
            n0 = !1,
            Om = !1,
            T_ = 50,
            mf = 0,
            Mm = null,
            kp = Dt,
            Um = Y,
            _1 = !1;
          function zm() {
            return Qr;
          }
          function Ir() {
            return (nt & (sr | ni)) !== Hn
              ? Bt()
              : (kp !== Dt || (kp = Bt()), kp);
          }
          function io(e) {
            var t = e.mode;
            if ((t & Ee) === ge) return Re;
            if ((nt & sr) !== Hn && Vn !== Y) return Du(Vn);
            var a = yw() !== mw;
            if (a) {
              if (or.transition !== null) {
                var i = or.transition;
                i._updatedFibers ||
                  (i._updatedFibers = /* @__PURE__ */ new Set()),
                  i._updatedFibers.add(e);
              }
              return Um === an && (Um = Iv()), Um;
            }
            var u = fa();
            if (u !== an) return u;
            var s = tx();
            return s;
          }
          function R_(e) {
            var t = e.mode;
            return (t & Ee) === ge ? Re : Rr();
          }
          function Pn(e, t, a, i) {
            I_(),
              _1 && y("useInsertionEffect must not schedule updates."),
              n0 && (Om = !0),
              Ml(e, a, i),
              (nt & sr) !== Y && e === Qr
                ? K_(t)
                : (Pr && Tc(e, t, a),
                  q_(t),
                  e === Qr &&
                    ((nt & sr) === Hn && (xp = Pe(xp, a)),
                    Bn === Tp && lo(e, Vn)),
                  Ea(e, i),
                  a === Re &&
                    nt === Hn &&
                    (t.mode & Ee) === ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
                    !Ni.isBatchingLegacy &&
                    (bp(), _E()));
          }
          function x_(e, t, a) {
            var i = e.current;
            (i.lanes = t), Ml(e, t, a), Ea(e, a);
          }
          function w_(e) {
            return (
              // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
              // decided not to enable it.
              (nt & sr) !== Hn
            );
          }
          function Ea(e, t) {
            var a = e.callbackNode;
            Pv(e, t);
            var i = Nl(e, e === Qr ? Vn : Y);
            if (i === Y) {
              a !== null && $1(a),
                (e.callbackNode = null),
                (e.callbackPriority = an);
              return;
            }
            var u = Kt(i),
              s = e.callbackPriority;
            if (
              s === u && // Special case related to `act`. If the currently scheduled task is a
              // Scheduler task, rather than an `act` task, cancel it and re-scheduled
              // on the `act` queue.
              !(Ni.current !== null && a !== s0)
            ) {
              a == null &&
                s !== Re &&
                y(
                  "Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.",
                );
              return;
            }
            a != null && $1(a);
            var f;
            if (u === Re)
              e.tag === Gu
                ? (Ni.isBatchingLegacy !== null &&
                    (Ni.didScheduleLegacyUpdate = !0),
                  Zx(L1.bind(null, e)))
                : bE(L1.bind(null, e)),
                Ni.current !== null
                  ? Ni.current.push(Xu)
                  : rx(function () {
                      (nt & (sr | ni)) === Hn && Xu();
                    }),
                (f = null);
            else {
              var p;
              switch (Un(i)) {
                case qt:
                  p = Xs;
                  break;
                case yi:
                  p = xl;
                  break;
                case Ia:
                  p = Qa;
                  break;
                case ku:
                  p = Ks;
                  break;
                default:
                  p = Qa;
                  break;
              }
              f = c0(p, D1.bind(null, e));
            }
            (e.callbackPriority = u), (e.callbackNode = f);
          }
          function D1(e, t) {
            if (($w(), (kp = Dt), (Um = Y), (nt & (sr | ni)) !== Hn))
              throw new Error("Should not already be working.");
            var a = e.callbackNode,
              i = Kl();
            if (i && e.callbackNode !== a) return null;
            var u = Nl(e, e === Qr ? Vn : Y);
            if (u === Y) return null;
            var s = !Po(e, u) && !Qv(e, u) && !t,
              f = s ? z_(e, u) : jm(e, u);
            if (f !== Il) {
              if (f === hs) {
                var p = Ii(e);
                p !== Y && ((u = p), (f = r0(e, p)));
              }
              if (f === Cp) {
                var h = Rp;
                throw (ys(e, Y), lo(e, u), Ea(e, Bt()), h);
              }
              if (f === XS) lo(e, u);
              else {
                var g = !Po(e, u),
                  E = e.current.alternate;
                if (g && !__(E)) {
                  if (((f = jm(e, u)), f === hs)) {
                    var _ = Ii(e);
                    _ !== Y && ((u = _), (f = r0(e, _)));
                  }
                  if (f === Cp) {
                    var w = Rp;
                    throw (ys(e, Y), lo(e, u), Ea(e, Bt()), w);
                  }
                }
                (e.finishedWork = E), (e.finishedLanes = u), b_(e, f, u);
              }
            }
            return Ea(e, Bt()), e.callbackNode === a ? D1.bind(null, e) : null;
          }
          function r0(e, t) {
            var a = wp;
            if (Rc(e)) {
              var i = ys(e, t);
              (i.flags |= Yt), Qx(e.containerInfo);
            }
            var u = jm(e, t);
            if (u !== hs) {
              var s = Sa;
              (Sa = a), s !== null && k1(s);
            }
            return u;
          }
          function k1(e) {
            Sa === null ? (Sa = e) : Sa.push.apply(Sa, e);
          }
          function b_(e, t, a) {
            switch (t) {
              case Il:
              case Cp:
                throw new Error(
                  "Root did not complete. This is a bug in React.",
                );
              case hs: {
                gs(e, Sa, Gl);
                break;
              }
              case Dm: {
                if (
                  (lo(e, a),
                  $v(a) && // do not delay if we're inside an act() scope
                    !Y1())
                ) {
                  var i = qS + x1 - Bt();
                  if (i > 10) {
                    var u = Nl(e, Y);
                    if (u !== Y) break;
                    var s = e.suspendedLanes;
                    if (!Ol(s, a)) {
                      Ir(), Ec(e, s);
                      break;
                    }
                    e.timeoutHandle = eg(gs.bind(null, e, Sa, Gl), i);
                    break;
                  }
                }
                gs(e, Sa, Gl);
                break;
              }
              case Tp: {
                if ((lo(e, a), Wv(a))) break;
                if (!Y1()) {
                  var f = Vv(e, a),
                    p = f,
                    h = Bt() - p,
                    g = Q_(h) - h;
                  if (g > 10) {
                    e.timeoutHandle = eg(gs.bind(null, e, Sa, Gl), g);
                    break;
                  }
                }
                gs(e, Sa, Gl);
                break;
              }
              case R1: {
                gs(e, Sa, Gl);
                break;
              }
              default:
                throw new Error("Unknown root exit status.");
            }
          }
          function __(e) {
            for (var t = e; ; ) {
              if (t.flags & Oo) {
                var a = t.updateQueue;
                if (a !== null) {
                  var i = a.stores;
                  if (i !== null)
                    for (var u = 0; u < i.length; u++) {
                      var s = i[u],
                        f = s.getSnapshot,
                        p = s.value;
                      try {
                        if (!he(f(), p)) return !1;
                      } catch {
                        return !1;
                      }
                    }
                }
              }
              var h = t.child;
              if (t.subtreeFlags & Oo && h !== null) {
                (h.return = t), (t = h);
                continue;
              }
              if (t === e) return !0;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
            return !0;
          }
          function lo(e, t) {
            (t = $o(t, Lm)), (t = $o(t, xp)), Xv(e, t);
          }
          function L1(e) {
            if ((Yw(), (nt & (sr | ni)) !== Hn))
              throw new Error("Should not already be working.");
            Kl();
            var t = Nl(e, Y);
            if (!xr(t, Re)) return Ea(e, Bt()), null;
            var a = jm(e, t);
            if (e.tag !== Gu && a === hs) {
              var i = Ii(e);
              i !== Y && ((t = i), (a = r0(e, i)));
            }
            if (a === Cp) {
              var u = Rp;
              throw (ys(e, Y), lo(e, t), Ea(e, Bt()), u);
            }
            if (a === XS)
              throw new Error("Root did not complete. This is a bug in React.");
            var s = e.current.alternate;
            return (
              (e.finishedWork = s),
              (e.finishedLanes = t),
              gs(e, Sa, Gl),
              Ea(e, Bt()),
              null
            );
          }
          function D_(e, t) {
            t !== Y &&
              (Sd(e, Pe(t, Re)),
              Ea(e, Bt()),
              (nt & (sr | ni)) === Hn && (bp(), Xu()));
          }
          function a0(e, t) {
            var a = nt;
            nt |= T1;
            try {
              return e(t);
            } finally {
              (nt = a),
                nt === Hn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
                  !Ni.isBatchingLegacy &&
                  (bp(), _E());
            }
          }
          function k_(e, t, a, i, u) {
            var s = fa(),
              f = or.transition;
            try {
              return (or.transition = null), Wt(qt), e(t, a, i, u);
            } finally {
              Wt(s), (or.transition = f), nt === Hn && bp();
            }
          }
          function Xl(e) {
            ao !== null && ao.tag === Gu && (nt & (sr | ni)) === Hn && Kl();
            var t = nt;
            nt |= T1;
            var a = or.transition,
              i = fa();
            try {
              return (or.transition = null), Wt(qt), e ? e() : void 0;
            } finally {
              Wt(i),
                (or.transition = a),
                (nt = t),
                (nt & (sr | ni)) === Hn && Xu();
            }
          }
          function N1() {
            return (nt & (sr | ni)) !== Hn;
          }
          function Am(e, t) {
            _r(KS, ul, e), (ul = Pe(ul, t));
          }
          function i0(e) {
            (ul = KS.current), br(KS, e);
          }
          function ys(e, t) {
            (e.finishedWork = null), (e.finishedLanes = Y);
            var a = e.timeoutHandle;
            if ((a !== tg && ((e.timeoutHandle = tg), nx(a)), Zt !== null))
              for (var i = Zt.return; i !== null; ) {
                var u = i.alternate;
                l1(u, i), (i = i.return);
              }
            Qr = e;
            var s = Ss(e.current, null);
            return (
              (Zt = s),
              (Vn = ul = t),
              (Bn = Il),
              (Rp = null),
              (km = Y),
              (xp = Y),
              (Lm = Y),
              (wp = null),
              (Sa = null),
              xw(),
              Ri.discardPendingWarnings(),
              s
            );
          }
          function O1(e, t) {
            do {
              var a = Zt;
              try {
                if (
                  (Qh(),
                  nC(),
                  on(),
                  (GS.current = null),
                  a === null || a.return === null)
                ) {
                  (Bn = Cp), (Rp = t), (Zt = null);
                  return;
                }
                if ((un && a.mode & Ae && Cm(a, !0), Fa))
                  if (
                    (Cr(),
                    t !== null &&
                      typeof t == "object" &&
                      typeof t.then == "function")
                  ) {
                    var i = t;
                    bl(a, i, Vn);
                  } else zo(a, t, Vn);
                Zw(e, a.return, a, t, Vn), A1(a);
              } catch (u) {
                (t = u),
                  Zt === a && a !== null
                    ? ((a = a.return), (Zt = a))
                    : (a = Zt);
                continue;
              }
              return;
            } while (!0);
          }
          function M1() {
            var e = IS.current;
            return (IS.current = mm), e === null ? mm : e;
          }
          function U1(e) {
            IS.current = e;
          }
          function L_() {
            qS = Bt();
          }
          function Lp(e) {
            km = Pe(e, km);
          }
          function N_() {
            Bn === Il && (Bn = Dm);
          }
          function l0() {
            (Bn === Il || Bn === Dm || Bn === hs) && (Bn = Tp),
              Qr !== null && (Bo(km) || Bo(xp)) && lo(Qr, Vn);
          }
          function O_(e) {
            Bn !== Tp && (Bn = hs), wp === null ? (wp = [e]) : wp.push(e);
          }
          function M_() {
            return Bn === Il;
          }
          function jm(e, t) {
            var a = nt;
            nt |= sr;
            var i = M1();
            if (Qr !== e || Vn !== t) {
              if (Pr) {
                var u = e.memoizedUpdaters;
                u.size > 0 && (Np(e, Vn), u.clear()), Ed(e, t);
              }
              (Gl = Wo()), ys(e, t);
            }
            jt(t);
            do
              try {
                U_();
                break;
              } catch (s) {
                O1(e, s);
              }
            while (!0);
            if ((Qh(), (nt = a), U1(i), Zt !== null))
              throw new Error(
                "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.",
              );
            return tc(), (Qr = null), (Vn = Y), Bn;
          }
          function U_() {
            for (; Zt !== null; ) z1(Zt);
          }
          function z_(e, t) {
            var a = nt;
            nt |= sr;
            var i = M1();
            if (Qr !== e || Vn !== t) {
              if (Pr) {
                var u = e.memoizedUpdaters;
                u.size > 0 && (Np(e, Vn), u.clear()), Ed(e, t);
              }
              (Gl = Wo()), bp(), ys(e, t);
            }
            jt(t);
            do
              try {
                A_();
                break;
              } catch (s) {
                O1(e, s);
              }
            while (!0);
            return (
              Qh(),
              U1(i),
              (nt = a),
              Zt !== null ? (ec(), Il) : (tc(), (Qr = null), (Vn = Y), Bn)
            );
          }
          function A_() {
            for (; Zt !== null && !Gs(); ) z1(Zt);
          }
          function z1(e) {
            var t = e.alternate;
            Et(e);
            var a;
            (e.mode & Ae) !== ge
              ? (sS(e), (a = u0(t, e, ul)), Cm(e, !0))
              : (a = u0(t, e, ul)),
              on(),
              (e.memoizedProps = e.pendingProps),
              a === null ? A1(e) : (Zt = a),
              (GS.current = null);
          }
          function A1(e) {
            var t = e;
            do {
              var a = t.alternate,
                i = t.return;
              if ((t.flags & Hr) === be) {
                Et(t);
                var u = void 0;
                if (
                  ((t.mode & Ae) === ge
                    ? (u = i1(a, t, ul))
                    : (sS(t), (u = i1(a, t, ul)), Cm(t, !1)),
                  on(),
                  u !== null)
                ) {
                  Zt = u;
                  return;
                }
              } else {
                var s = Nb(a, t);
                if (s !== null) {
                  (s.flags &= kv), (Zt = s);
                  return;
                }
                if ((t.mode & Ae) !== ge) {
                  Cm(t, !1);
                  for (var f = t.actualDuration, p = t.child; p !== null; )
                    (f += p.actualDuration), (p = p.sibling);
                  t.actualDuration = f;
                }
                if (i !== null)
                  (i.flags |= Hr), (i.subtreeFlags = be), (i.deletions = null);
                else {
                  (Bn = XS), (Zt = null);
                  return;
                }
              }
              var h = t.sibling;
              if (h !== null) {
                Zt = h;
                return;
              }
              (t = i), (Zt = t);
            } while (t !== null);
            Bn === Il && (Bn = R1);
          }
          function gs(e, t, a) {
            var i = fa(),
              u = or.transition;
            try {
              (or.transition = null), Wt(qt), j_(e, t, a, i);
            } finally {
              (or.transition = u), Wt(i);
            }
            return null;
          }
          function j_(e, t, a, i) {
            do Kl();
            while (ao !== null);
            if ((G_(), (nt & (sr | ni)) !== Hn))
              throw new Error("Should not already be working.");
            var u = e.finishedWork,
              s = e.finishedLanes;
            if ((Yi(s), u === null)) return qs(), null;
            if (
              (s === Y &&
                y(
                  "root.finishedLanes should not be empty during a commit. This is a bug in React.",
                ),
              (e.finishedWork = null),
              (e.finishedLanes = Y),
              u === e.current)
            )
              throw new Error(
                "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.",
              );
            (e.callbackNode = null), (e.callbackPriority = an);
            var f = Pe(u.lanes, u.childLanes);
            Cc(e, f),
              e === Qr && ((Qr = null), (Zt = null), (Vn = Y)),
              ((u.subtreeFlags & la) !== be || (u.flags & la) !== be) &&
                (ms ||
                  ((ms = !0),
                  (e0 = a),
                  c0(Qa, function () {
                    return Kl(), null;
                  })));
            var p = (u.subtreeFlags & (hu | Sr | Gn | la)) !== be,
              h = (u.flags & (hu | Sr | Gn | la)) !== be;
            if (p || h) {
              var g = or.transition;
              or.transition = null;
              var E = fa();
              Wt(qt);
              var _ = nt;
              (nt |= ni),
                (GS.current = null),
                Ab(e, u),
                _C(),
                Kb(e, u, s),
                XR(e.containerInfo),
                (e.current = u),
                fd(s),
                qb(u, e, s),
                Eu(),
                Ov(),
                (nt = _),
                Wt(E),
                (or.transition = g);
            } else (e.current = u), _C();
            var w = ms;
            if (
              (ms ? ((ms = !1), (ao = e), (_p = s)) : ((mf = 0), (Mm = null)),
              (f = e.pendingLanes),
              f === Y && (hf = null),
              w || V1(e.current, !1),
              yu(u.stateNode, i),
              Pr && e.memoizedUpdaters.clear(),
              m_(),
              Ea(e, Bt()),
              t !== null)
            )
              for (var M = e.onRecoverableError, z = 0; z < t.length; z++) {
                var H = t[z],
                  le = H.stack,
                  De = H.digest;
                M(H.value, {
                  componentStack: le,
                  digest: De,
                });
              }
            if (Nm) {
              Nm = !1;
              var Ce = JS;
              throw ((JS = null), Ce);
            }
            return (
              xr(_p, Re) && e.tag !== Gu && Kl(),
              (f = e.pendingLanes),
              xr(f, Re)
                ? (Pw(), e === t0 ? Dp++ : ((Dp = 0), (t0 = e)))
                : (Dp = 0),
              Xu(),
              qs(),
              null
            );
          }
          function Kl() {
            if (ao !== null) {
              var e = Un(_p),
                t = wy(Ia, e),
                a = or.transition,
                i = fa();
              try {
                return (or.transition = null), Wt(t), H_();
              } finally {
                Wt(i), (or.transition = a);
              }
            }
            return !1;
          }
          function F_(e) {
            ZS.push(e),
              ms ||
                ((ms = !0),
                c0(Qa, function () {
                  return Kl(), null;
                }));
          }
          function H_() {
            if (ao === null) return !1;
            var e = e0;
            e0 = null;
            var t = ao,
              a = _p;
            if (((ao = null), (_p = Y), (nt & (sr | ni)) !== Hn))
              throw new Error(
                "Cannot flush passive effects while already rendering.",
              );
            (n0 = !0), (Om = !1), Fv(a);
            var i = nt;
            (nt |= ni), a_(t.current), e_(t, t.current, a, e);
            {
              var u = ZS;
              ZS = [];
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                Vb(t, f);
              }
            }
            dd(),
              V1(t.current, !0),
              (nt = i),
              Xu(),
              Om ? (t === Mm ? mf++ : ((mf = 0), (Mm = t))) : (mf = 0),
              (n0 = !1),
              (Om = !1),
              sa(t);
            {
              var p = t.current.stateNode;
              (p.effectDuration = 0), (p.passiveEffectDuration = 0);
            }
            return !0;
          }
          function j1(e) {
            return hf !== null && hf.has(e);
          }
          function V_(e) {
            hf === null ? (hf = /* @__PURE__ */ new Set([e])) : hf.add(e);
          }
          function B_(e) {
            Nm || ((Nm = !0), (JS = e));
          }
          var P_ = B_;
          function F1(e, t, a) {
            var i = ps(a, t),
              u = zC(e, i, Re),
              s = qu(e, u, Re),
              f = Ir();
            s !== null && (Ml(s, Re, f), Ea(s, f));
          }
          function zt(e, t, a) {
            if ((Mb(a), Op(!1), e.tag === $)) {
              F1(e, e, a);
              return;
            }
            var i = null;
            for (i = t; i !== null; ) {
              if (i.tag === $) {
                F1(i, e, a);
                return;
              } else if (i.tag === j) {
                var u = i.type,
                  s = i.stateNode;
                if (
                  typeof u.getDerivedStateFromError == "function" ||
                  (typeof s.componentDidCatch == "function" && !j1(s))
                ) {
                  var f = ps(a, e),
                    p = _S(i, f, Re),
                    h = qu(i, p, Re),
                    g = Ir();
                  h !== null && (Ml(h, Re, g), Ea(h, g));
                  return;
                }
              }
              i = i.return;
            }
            y(
              `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
              a,
            );
          }
          function $_(e, t, a) {
            var i = e.pingCache;
            i !== null && i.delete(t);
            var u = Ir();
            Ec(e, a),
              J_(e),
              Qr === e &&
                Ol(Vn, a) &&
                (Bn === Tp || (Bn === Dm && $v(Vn) && Bt() - qS < x1)
                  ? ys(e, Y)
                  : (Lm = Pe(Lm, a))),
              Ea(e, u);
          }
          function H1(e, t) {
            t === an && (t = R_(e));
            var a = Ir(),
              i = ya(e, t);
            i !== null && (Ml(i, t, a), Ea(i, a));
          }
          function Y_(e) {
            var t = e.memoizedState,
              a = an;
            t !== null && (a = t.retryLane), H1(e, a);
          }
          function W_(e, t) {
            var a = an,
              i;
            switch (e.tag) {
              case We:
                i = e.stateNode;
                var u = e.memoizedState;
                u !== null && (a = u.retryLane);
                break;
              case dt:
                i = e.stateNode;
                break;
              default:
                throw new Error(
                  "Pinged unknown suspense boundary type. This is probably a bug in React.",
                );
            }
            i !== null && i.delete(t), H1(e, a);
          }
          function Q_(e) {
            return e < 120
              ? 120
              : e < 480
                ? 480
                : e < 1080
                  ? 1080
                  : e < 1920
                    ? 1920
                    : e < 3e3
                      ? 3e3
                      : e < 4320
                        ? 4320
                        : S_(e / 1960) * 1960;
          }
          function I_() {
            if (Dp > C_)
              throw (
                ((Dp = 0),
                (t0 = null),
                new Error(
                  "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
                ))
              );
            mf > T_ &&
              ((mf = 0),
              (Mm = null),
              y(
                "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.",
              ));
          }
          function G_() {
            Ri.flushLegacyContextWarning(),
              Ri.flushPendingUnsafeLifecycleWarnings();
          }
          function V1(e, t) {
            Et(e),
              Fm(e, gr, p_),
              t && Fm(e, Rl, v_),
              Fm(e, gr, f_),
              t && Fm(e, Rl, d_),
              on();
          }
          function Fm(e, t, a) {
            for (var i = e, u = null; i !== null; ) {
              var s = i.subtreeFlags & t;
              i !== u && i.child !== null && s !== be
                ? (i = i.child)
                : ((i.flags & t) !== be && a(i),
                  i.sibling !== null ? (i = i.sibling) : (i = u = i.return));
            }
          }
          var Hm = null;
          function B1(e) {
            {
              if ((nt & sr) !== Hn || !(e.mode & Ee)) return;
              var t = e.tag;
              if (
                t !== Z &&
                t !== $ &&
                t !== j &&
                t !== P &&
                t !== xe &&
                t !== mt &&
                t !== $e
              )
                return;
              var a = Be(e) || "ReactComponent";
              if (Hm !== null) {
                if (Hm.has(a)) return;
                Hm.add(a);
              } else Hm = /* @__PURE__ */ new Set([a]);
              var i = tn;
              try {
                Et(e),
                  y(
                    "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.",
                  );
              } finally {
                i ? Et(e) : on();
              }
            }
          }
          var u0;
          {
            var X_ = null;
            u0 = function (e, t, a) {
              var i = X1(X_, t);
              try {
                return e1(e, t, a);
              } catch (s) {
                if (
                  uw() ||
                  (s !== null &&
                    typeof s == "object" &&
                    typeof s.then == "function")
                )
                  throw s;
                if (
                  (Qh(),
                  nC(),
                  l1(e, t),
                  X1(t, i),
                  t.mode & Ae && sS(t),
                  Tl(null, e1, null, e, t, a),
                  Ey())
                ) {
                  var u = nd();
                  typeof u == "object" &&
                    u !== null &&
                    u._suppressLogging &&
                    typeof s == "object" &&
                    s !== null &&
                    !s._suppressLogging &&
                    (s._suppressLogging = !0);
                }
                throw s;
              }
            };
          }
          var P1 = !1,
            o0;
          o0 = /* @__PURE__ */ new Set();
          function K_(e) {
            if (ea && !Hw())
              switch (e.tag) {
                case P:
                case xe:
                case $e: {
                  var t = (Zt && Be(Zt)) || "Unknown",
                    a = t;
                  if (!o0.has(a)) {
                    o0.add(a);
                    var i = Be(e) || "Unknown";
                    y(
                      "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",
                      i,
                      t,
                      t,
                    );
                  }
                  break;
                }
                case j: {
                  P1 ||
                    (y(
                      "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.",
                    ),
                    (P1 = !0));
                  break;
                }
              }
          }
          function Np(e, t) {
            if (Pr) {
              var a = e.memoizedUpdaters;
              a.forEach(function (i) {
                Tc(e, i, t);
              });
            }
          }
          var s0 = {};
          function c0(e, t) {
            {
              var a = Ni.current;
              return a !== null ? (a.push(t), s0) : Is(e, t);
            }
          }
          function $1(e) {
            if (e !== s0) return Nv(e);
          }
          function Y1() {
            return Ni.current !== null;
          }
          function q_(e) {
            {
              if (e.mode & Ee) {
                if (!C1()) return;
              } else if (
                !g_() ||
                nt !== Hn ||
                (e.tag !== P && e.tag !== xe && e.tag !== $e)
              )
                return;
              if (Ni.current === null) {
                var t = tn;
                try {
                  Et(e),
                    y(
                      `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
                      Be(e),
                    );
                } finally {
                  t ? Et(e) : on();
                }
              }
            }
          }
          function J_(e) {
            e.tag !== Gu &&
              C1() &&
              Ni.current === null &&
              y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
          }
          function Op(e) {
            _1 = e;
          }
          var ri = null,
            yf = null,
            Z_ = function (e) {
              ri = e;
            };
          function gf(e) {
            {
              if (ri === null) return e;
              var t = ri(e);
              return t === void 0 ? e : t.current;
            }
          }
          function f0(e) {
            return gf(e);
          }
          function d0(e) {
            {
              if (ri === null) return e;
              var t = ri(e);
              if (t === void 0) {
                if (e != null && typeof e.render == "function") {
                  var a = gf(e.render);
                  if (e.render !== a) {
                    var i = {
                      $$typeof: ne,
                      render: a,
                    };
                    return (
                      e.displayName !== void 0 &&
                        (i.displayName = e.displayName),
                      i
                    );
                  }
                }
                return e;
              }
              return t.current;
            }
          }
          function W1(e, t) {
            {
              if (ri === null) return !1;
              var a = e.elementType,
                i = t.type,
                u = !1,
                s = typeof i == "object" && i !== null ? i.$$typeof : null;
              switch (e.tag) {
                case j: {
                  typeof i == "function" && (u = !0);
                  break;
                }
                case P: {
                  (typeof i == "function" || s === Me) && (u = !0);
                  break;
                }
                case xe: {
                  (s === ne || s === Me) && (u = !0);
                  break;
                }
                case mt:
                case $e: {
                  (s === it || s === Me) && (u = !0);
                  break;
                }
                default:
                  return !1;
              }
              if (u) {
                var f = ri(a);
                if (f !== void 0 && f === ri(i)) return !0;
              }
              return !1;
            }
          }
          function Q1(e) {
            {
              if (ri === null || typeof WeakSet != "function") return;
              yf === null && (yf = /* @__PURE__ */ new WeakSet()), yf.add(e);
            }
          }
          var eD = function (e, t) {
              {
                if (ri === null) return;
                var a = t.staleFamilies,
                  i = t.updatedFamilies;
                Kl(),
                  Xl(function () {
                    p0(e.current, i, a);
                  });
              }
            },
            tD = function (e, t) {
              {
                if (e.context !== za) return;
                Kl(),
                  Xl(function () {
                    Mp(t, e, null, null);
                  });
              }
            };
          function p0(e, t, a) {
            {
              var i = e.alternate,
                u = e.child,
                s = e.sibling,
                f = e.tag,
                p = e.type,
                h = null;
              switch (f) {
                case P:
                case $e:
                case j:
                  h = p;
                  break;
                case xe:
                  h = p.render;
                  break;
              }
              if (ri === null)
                throw new Error(
                  "Expected resolveFamily to be set during hot reload.",
                );
              var g = !1,
                E = !1;
              if (h !== null) {
                var _ = ri(h);
                _ !== void 0 &&
                  (a.has(_)
                    ? (E = !0)
                    : t.has(_) && (f === j ? (E = !0) : (g = !0)));
              }
              if (
                (yf !== null &&
                  (yf.has(e) || (i !== null && yf.has(i))) &&
                  (E = !0),
                E && (e._debugNeedsRemount = !0),
                E || g)
              ) {
                var w = ya(e, Re);
                w !== null && Pn(w, e, Re, Dt);
              }
              u !== null && !E && p0(u, t, a), s !== null && p0(s, t, a);
            }
          }
          var nD = function (e, t) {
            {
              var a = /* @__PURE__ */ new Set(),
                i = new Set(
                  t.map(function (u) {
                    return u.current;
                  }),
                );
              return v0(e.current, i, a), a;
            }
          };
          function v0(e, t, a) {
            {
              var i = e.child,
                u = e.sibling,
                s = e.tag,
                f = e.type,
                p = null;
              switch (s) {
                case P:
                case $e:
                case j:
                  p = f;
                  break;
                case xe:
                  p = f.render;
                  break;
              }
              var h = !1;
              p !== null && t.has(p) && (h = !0),
                h ? rD(e, a) : i !== null && v0(i, t, a),
                u !== null && v0(u, t, a);
            }
          }
          function rD(e, t) {
            {
              var a = aD(e, t);
              if (a) return;
              for (var i = e; ; ) {
                switch (i.tag) {
                  case oe:
                    t.add(i.stateNode);
                    return;
                  case J:
                    t.add(i.stateNode.containerInfo);
                    return;
                  case $:
                    t.add(i.stateNode.containerInfo);
                    return;
                }
                if (i.return === null)
                  throw new Error("Expected to reach root first.");
                i = i.return;
              }
            }
          }
          function aD(e, t) {
            for (var a = e, i = !1; ; ) {
              if (a.tag === oe) (i = !0), t.add(a.stateNode);
              else if (a.child !== null) {
                (a.child.return = a), (a = a.child);
                continue;
              }
              if (a === e) return i;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === e) return i;
                a = a.return;
              }
              (a.sibling.return = a.return), (a = a.sibling);
            }
            return !1;
          }
          var h0;
          {
            h0 = !1;
            try {
              var I1 = Object.preventExtensions({});
            } catch {
              h0 = !0;
            }
          }
          function iD(e, t, a, i) {
            (this.tag = e),
              (this.key = a),
              (this.elementType = null),
              (this.type = null),
              (this.stateNode = null),
              (this.return = null),
              (this.child = null),
              (this.sibling = null),
              (this.index = 0),
              (this.ref = null),
              (this.pendingProps = t),
              (this.memoizedProps = null),
              (this.updateQueue = null),
              (this.memoizedState = null),
              (this.dependencies = null),
              (this.mode = i),
              (this.flags = be),
              (this.subtreeFlags = be),
              (this.deletions = null),
              (this.lanes = Y),
              (this.childLanes = Y),
              (this.alternate = null),
              (this.actualDuration = Number.NaN),
              (this.actualStartTime = Number.NaN),
              (this.selfBaseDuration = Number.NaN),
              (this.treeBaseDuration = Number.NaN),
              (this.actualDuration = 0),
              (this.actualStartTime = -1),
              (this.selfBaseDuration = 0),
              (this.treeBaseDuration = 0),
              (this._debugSource = null),
              (this._debugOwner = null),
              (this._debugNeedsRemount = !1),
              (this._debugHookTypes = null),
              !h0 &&
                typeof Object.preventExtensions == "function" &&
                Object.preventExtensions(this);
          }
          var Aa = function (e, t, a, i) {
            return new iD(e, t, a, i);
          };
          function m0(e) {
            var t = e.prototype;
            return !!(t && t.isReactComponent);
          }
          function lD(e) {
            return (
              typeof e == "function" && !m0(e) && e.defaultProps === void 0
            );
          }
          function uD(e) {
            if (typeof e == "function") return m0(e) ? j : P;
            if (e != null) {
              var t = e.$$typeof;
              if (t === ne) return xe;
              if (t === it) return mt;
            }
            return Z;
          }
          function Ss(e, t) {
            var a = e.alternate;
            a === null
              ? ((a = Aa(e.tag, t, e.key, e.mode)),
                (a.elementType = e.elementType),
                (a.type = e.type),
                (a.stateNode = e.stateNode),
                (a._debugSource = e._debugSource),
                (a._debugOwner = e._debugOwner),
                (a._debugHookTypes = e._debugHookTypes),
                (a.alternate = e),
                (e.alternate = a))
              : ((a.pendingProps = t),
                (a.type = e.type),
                (a.flags = be),
                (a.subtreeFlags = be),
                (a.deletions = null),
                (a.actualDuration = 0),
                (a.actualStartTime = -1)),
              (a.flags = e.flags & On),
              (a.childLanes = e.childLanes),
              (a.lanes = e.lanes),
              (a.child = e.child),
              (a.memoizedProps = e.memoizedProps),
              (a.memoizedState = e.memoizedState),
              (a.updateQueue = e.updateQueue);
            var i = e.dependencies;
            switch (
              ((a.dependencies =
                i === null
                  ? null
                  : {
                      lanes: i.lanes,
                      firstContext: i.firstContext,
                    }),
              (a.sibling = e.sibling),
              (a.index = e.index),
              (a.ref = e.ref),
              (a.selfBaseDuration = e.selfBaseDuration),
              (a.treeBaseDuration = e.treeBaseDuration),
              (a._debugNeedsRemount = e._debugNeedsRemount),
              a.tag)
            ) {
              case Z:
              case P:
              case $e:
                a.type = gf(e.type);
                break;
              case j:
                a.type = f0(e.type);
                break;
              case xe:
                a.type = d0(e.type);
                break;
            }
            return a;
          }
          function oD(e, t) {
            e.flags &= On | Ot;
            var a = e.alternate;
            if (a === null)
              (e.childLanes = Y),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = be),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null),
                (e.selfBaseDuration = 0),
                (e.treeBaseDuration = 0);
            else {
              (e.childLanes = a.childLanes),
                (e.lanes = a.lanes),
                (e.child = a.child),
                (e.subtreeFlags = be),
                (e.deletions = null),
                (e.memoizedProps = a.memoizedProps),
                (e.memoizedState = a.memoizedState),
                (e.updateQueue = a.updateQueue),
                (e.type = a.type);
              var i = a.dependencies;
              (e.dependencies =
                i === null
                  ? null
                  : {
                      lanes: i.lanes,
                      firstContext: i.firstContext,
                    }),
                (e.selfBaseDuration = a.selfBaseDuration),
                (e.treeBaseDuration = a.treeBaseDuration);
            }
            return e;
          }
          function sD(e, t, a) {
            var i;
            return (
              e === Ah
                ? ((i = Ee), t === !0 && ((i |= qe), (i |= $r)))
                : (i = ge),
              Pr && (i |= Ae),
              Aa($, null, null, i)
            );
          }
          function y0(e, t, a, i, u, s) {
            var f = Z,
              p = e;
            if (typeof e == "function")
              m0(e) ? ((f = j), (p = f0(p))) : (p = gf(p));
            else if (typeof e == "string") f = oe;
            else
              e: switch (e) {
                case _a:
                  return uo(a.children, u, s, t);
                case Mi:
                  (f = at), (u |= qe), (u & Ee) !== ge && (u |= $r);
                  break;
                case dl:
                  return cD(a, u, s, t);
                case Te:
                  return fD(a, u, s, t);
                case tt:
                  return dD(a, u, s, t);
                case Nt:
                  return G1(a, u, s, t);
                case Vt:
                case Xe:
                case vr:
                case Ui:
                case En:
                default: {
                  if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                      case R:
                        f = ke;
                        break e;
                      case I:
                        f = kt;
                        break e;
                      case ne:
                        (f = xe), (p = d0(p));
                        break e;
                      case it:
                        f = mt;
                        break e;
                      case Me:
                        (f = Gt), (p = null);
                        break e;
                    }
                  var h = "";
                  {
                    (e === void 0 ||
                      (typeof e == "object" &&
                        e !== null &&
                        Object.keys(e).length === 0)) &&
                      (h +=
                        " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                    var g = i ? Be(i) : null;
                    g &&
                      (h +=
                        `

Check the render method of \`` +
                        g +
                        "`.");
                  }
                  throw new Error(
                    "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
                      ("but got: " + (e == null ? e : typeof e) + "." + h),
                  );
                }
              }
            var E = Aa(f, a, t, u);
            return (
              (E.elementType = e),
              (E.type = p),
              (E.lanes = s),
              (E._debugOwner = i),
              E
            );
          }
          function g0(e, t, a) {
            var i = null;
            i = e._owner;
            var u = e.type,
              s = e.key,
              f = e.props,
              p = y0(u, s, f, i, t, a);
            return (p._debugSource = e._source), (p._debugOwner = e._owner), p;
          }
          function uo(e, t, a, i) {
            var u = Aa(Ie, e, i, t);
            return (u.lanes = a), u;
          }
          function cD(e, t, a, i) {
            typeof e.id != "string" &&
              y(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof e.id,
              );
            var u = Aa(je, e, i, t | Ae);
            return (
              (u.elementType = dl),
              (u.lanes = a),
              (u.stateNode = {
                effectDuration: 0,
                passiveEffectDuration: 0,
              }),
              u
            );
          }
          function fD(e, t, a, i) {
            var u = Aa(We, e, i, t);
            return (u.elementType = Te), (u.lanes = a), u;
          }
          function dD(e, t, a, i) {
            var u = Aa(dt, e, i, t);
            return (u.elementType = tt), (u.lanes = a), u;
          }
          function G1(e, t, a, i) {
            var u = Aa(Fe, e, i, t);
            (u.elementType = Nt), (u.lanes = a);
            var s = {
              isHidden: !1,
            };
            return (u.stateNode = s), u;
          }
          function S0(e, t, a) {
            var i = Aa(_e, e, null, t);
            return (i.lanes = a), i;
          }
          function pD() {
            var e = Aa(oe, null, null, ge);
            return (e.elementType = "DELETED"), e;
          }
          function vD(e) {
            var t = Aa(wt, null, null, ge);
            return (t.stateNode = e), t;
          }
          function E0(e, t, a) {
            var i = e.children !== null ? e.children : [],
              u = Aa(J, i, e.key, t);
            return (
              (u.lanes = a),
              (u.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                // Used by persistent updates
                implementation: e.implementation,
              }),
              u
            );
          }
          function X1(e, t) {
            return (
              e === null && (e = Aa(Z, null, null, ge)),
              (e.tag = t.tag),
              (e.key = t.key),
              (e.elementType = t.elementType),
              (e.type = t.type),
              (e.stateNode = t.stateNode),
              (e.return = t.return),
              (e.child = t.child),
              (e.sibling = t.sibling),
              (e.index = t.index),
              (e.ref = t.ref),
              (e.pendingProps = t.pendingProps),
              (e.memoizedProps = t.memoizedProps),
              (e.updateQueue = t.updateQueue),
              (e.memoizedState = t.memoizedState),
              (e.dependencies = t.dependencies),
              (e.mode = t.mode),
              (e.flags = t.flags),
              (e.subtreeFlags = t.subtreeFlags),
              (e.deletions = t.deletions),
              (e.lanes = t.lanes),
              (e.childLanes = t.childLanes),
              (e.alternate = t.alternate),
              (e.actualDuration = t.actualDuration),
              (e.actualStartTime = t.actualStartTime),
              (e.selfBaseDuration = t.selfBaseDuration),
              (e.treeBaseDuration = t.treeBaseDuration),
              (e._debugSource = t._debugSource),
              (e._debugOwner = t._debugOwner),
              (e._debugNeedsRemount = t._debugNeedsRemount),
              (e._debugHookTypes = t._debugHookTypes),
              e
            );
          }
          function hD(e, t, a, i, u) {
            (this.tag = t),
              (this.containerInfo = e),
              (this.pendingChildren = null),
              (this.current = null),
              (this.pingCache = null),
              (this.finishedWork = null),
              (this.timeoutHandle = tg),
              (this.context = null),
              (this.pendingContext = null),
              (this.callbackNode = null),
              (this.callbackPriority = an),
              (this.eventTimes = Yo(Y)),
              (this.expirationTimes = Yo(Dt)),
              (this.pendingLanes = Y),
              (this.suspendedLanes = Y),
              (this.pingedLanes = Y),
              (this.expiredLanes = Y),
              (this.mutableReadLanes = Y),
              (this.finishedLanes = Y),
              (this.entangledLanes = Y),
              (this.entanglements = Yo(Y)),
              (this.identifierPrefix = i),
              (this.onRecoverableError = u),
              (this.mutableSourceEagerHydrationData = null),
              (this.effectDuration = 0),
              (this.passiveEffectDuration = 0);
            {
              this.memoizedUpdaters = /* @__PURE__ */ new Set();
              for (
                var s = (this.pendingUpdatersLaneMap = []), f = 0;
                f < Fo;
                f++
              )
                s.push(/* @__PURE__ */ new Set());
            }
            switch (t) {
              case Ah:
                this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
                break;
              case Gu:
                this._debugRootType = a ? "hydrate()" : "render()";
                break;
            }
          }
          function K1(e, t, a, i, u, s, f, p, h, g) {
            var E = new hD(e, t, a, p, h),
              _ = sD(t, s);
            (E.current = _), (_.stateNode = E);
            {
              var w = {
                element: i,
                isDehydrated: a,
                cache: null,
                // not enabled yet
                transitions: null,
                pendingSuspenseBoundaries: null,
              };
              _.memoizedState = w;
            }
            return Mg(_), E;
          }
          var C0 = "18.3.1";
          function mD(e, t, a) {
            var i =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : null;
            return (
              Ra(i),
              {
                // This tag allow us to uniquely identify this as a React Portal
                $$typeof: Ar,
                key: i == null ? null : "" + i,
                children: e,
                containerInfo: t,
                implementation: a,
              }
            );
          }
          var T0, R0;
          (T0 = !1), (R0 = {});
          function q1(e) {
            if (!e) return za;
            var t = ra(e),
              a = Jx(t);
            if (t.tag === j) {
              var i = t.type;
              if (el(i)) return xE(t, i, a);
            }
            return a;
          }
          function yD(e, t) {
            {
              var a = ra(e);
              if (a === void 0) {
                if (typeof e.render == "function")
                  throw new Error(
                    "Unable to find node on an unmounted component.",
                  );
                var i = Object.keys(e).join(",");
                throw new Error(
                  "Argument appears to not be a ReactComponent. Keys: " + i,
                );
              }
              var u = ua(a);
              if (u === null) return null;
              if (u.mode & qe) {
                var s = Be(a) || "Component";
                if (!R0[s]) {
                  R0[s] = !0;
                  var f = tn;
                  try {
                    Et(u),
                      a.mode & qe
                        ? y(
                            "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                            t,
                            t,
                            s,
                          )
                        : y(
                            "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                            t,
                            t,
                            s,
                          );
                  } finally {
                    f ? Et(f) : on();
                  }
                }
              }
              return u.stateNode;
            }
          }
          function J1(e, t, a, i, u, s, f, p) {
            var h = !1,
              g = null;
            return K1(e, t, h, g, a, i, u, s, f);
          }
          function Z1(e, t, a, i, u, s, f, p, h, g) {
            var E = !0,
              _ = K1(a, i, E, e, u, s, f, p, h);
            _.context = q1(null);
            var w = _.current,
              M = Ir(),
              z = io(w),
              H = Wl(M, z);
            return (H.callback = t ?? null), qu(w, H, z), x_(_, z, M), _;
          }
          function Mp(e, t, a, i) {
            cd(t, e);
            var u = t.current,
              s = Ir(),
              f = io(u);
            pd(f);
            var p = q1(a);
            t.context === null ? (t.context = p) : (t.pendingContext = p),
              ea &&
                tn !== null &&
                !T0 &&
                ((T0 = !0),
                y(
                  `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
                  Be(tn) || "Unknown",
                ));
            var h = Wl(s, f);
            (h.payload = {
              element: e,
            }),
              (i = i === void 0 ? null : i),
              i !== null &&
                (typeof i != "function" &&
                  y(
                    "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                    i,
                  ),
                (h.callback = i));
            var g = qu(u, h, f);
            return g !== null && (Pn(g, u, f, s), qh(g, u, f)), f;
          }
          function Vm(e) {
            var t = e.current;
            if (!t.child) return null;
            switch (t.child.tag) {
              case oe:
                return t.child.stateNode;
              default:
                return t.child.stateNode;
            }
          }
          function gD(e) {
            switch (e.tag) {
              case $: {
                var t = e.stateNode;
                if (Rc(t)) {
                  var a = md(t);
                  D_(t, a);
                }
                break;
              }
              case We: {
                Xl(function () {
                  var u = ya(e, Re);
                  if (u !== null) {
                    var s = Ir();
                    Pn(u, e, Re, s);
                  }
                });
                var i = Re;
                x0(e, i);
                break;
              }
            }
          }
          function eT(e, t) {
            var a = e.memoizedState;
            a !== null &&
              a.dehydrated !== null &&
              (a.retryLane = Gv(a.retryLane, t));
          }
          function x0(e, t) {
            eT(e, t);
            var a = e.alternate;
            a && eT(a, t);
          }
          function SD(e) {
            if (e.tag === We) {
              var t = Vo,
                a = ya(e, t);
              if (a !== null) {
                var i = Ir();
                Pn(a, e, t, i);
              }
              x0(e, t);
            }
          }
          function ED(e) {
            if (e.tag === We) {
              var t = io(e),
                a = ya(e, t);
              if (a !== null) {
                var i = Ir();
                Pn(a, e, t, i);
              }
              x0(e, t);
            }
          }
          function tT(e) {
            var t = Lv(e);
            return t === null ? null : t.stateNode;
          }
          var nT = function (e) {
            return null;
          };
          function CD(e) {
            return nT(e);
          }
          var rT = function (e) {
            return !1;
          };
          function TD(e) {
            return rT(e);
          }
          var aT = null,
            iT = null,
            lT = null,
            uT = null,
            oT = null,
            sT = null,
            cT = null,
            fT = null,
            dT = null;
          {
            var pT = function (e, t, a) {
                var i = t[a],
                  u = Cn(e) ? e.slice() : Ke({}, e);
                return a + 1 === t.length
                  ? (Cn(u) ? u.splice(i, 1) : delete u[i], u)
                  : ((u[i] = pT(e[i], t, a + 1)), u);
              },
              vT = function (e, t) {
                return pT(e, t, 0);
              },
              hT = function (e, t, a, i) {
                var u = t[i],
                  s = Cn(e) ? e.slice() : Ke({}, e);
                if (i + 1 === t.length) {
                  var f = a[i];
                  (s[f] = s[u]), Cn(s) ? s.splice(u, 1) : delete s[u];
                } else
                  s[u] = hT(
                    // $FlowFixMe number or string is fine here
                    e[u],
                    t,
                    a,
                    i + 1,
                  );
                return s;
              },
              mT = function (e, t, a) {
                if (t.length !== a.length) {
                  F("copyWithRename() expects paths of the same length");
                  return;
                } else
                  for (var i = 0; i < a.length - 1; i++)
                    if (t[i] !== a[i]) {
                      F(
                        "copyWithRename() expects paths to be the same except for the deepest key",
                      );
                      return;
                    }
                return hT(e, t, a, 0);
              },
              yT = function (e, t, a, i) {
                if (a >= t.length) return i;
                var u = t[a],
                  s = Cn(e) ? e.slice() : Ke({}, e);
                return (s[u] = yT(e[u], t, a + 1, i)), s;
              },
              gT = function (e, t, a) {
                return yT(e, t, 0, a);
              },
              w0 = function (e, t) {
                for (var a = e.memoizedState; a !== null && t > 0; )
                  (a = a.next), t--;
                return a;
              };
            (aT = function (e, t, a, i) {
              var u = w0(e, t);
              if (u !== null) {
                var s = gT(u.memoizedState, a, i);
                (u.memoizedState = s),
                  (u.baseState = s),
                  (e.memoizedProps = Ke({}, e.memoizedProps));
                var f = ya(e, Re);
                f !== null && Pn(f, e, Re, Dt);
              }
            }),
              (iT = function (e, t, a) {
                var i = w0(e, t);
                if (i !== null) {
                  var u = vT(i.memoizedState, a);
                  (i.memoizedState = u),
                    (i.baseState = u),
                    (e.memoizedProps = Ke({}, e.memoizedProps));
                  var s = ya(e, Re);
                  s !== null && Pn(s, e, Re, Dt);
                }
              }),
              (lT = function (e, t, a, i) {
                var u = w0(e, t);
                if (u !== null) {
                  var s = mT(u.memoizedState, a, i);
                  (u.memoizedState = s),
                    (u.baseState = s),
                    (e.memoizedProps = Ke({}, e.memoizedProps));
                  var f = ya(e, Re);
                  f !== null && Pn(f, e, Re, Dt);
                }
              }),
              (uT = function (e, t, a) {
                (e.pendingProps = gT(e.memoizedProps, t, a)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var i = ya(e, Re);
                i !== null && Pn(i, e, Re, Dt);
              }),
              (oT = function (e, t) {
                (e.pendingProps = vT(e.memoizedProps, t)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var a = ya(e, Re);
                a !== null && Pn(a, e, Re, Dt);
              }),
              (sT = function (e, t, a) {
                (e.pendingProps = mT(e.memoizedProps, t, a)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var i = ya(e, Re);
                i !== null && Pn(i, e, Re, Dt);
              }),
              (cT = function (e) {
                var t = ya(e, Re);
                t !== null && Pn(t, e, Re, Dt);
              }),
              (fT = function (e) {
                nT = e;
              }),
              (dT = function (e) {
                rT = e;
              });
          }
          function RD(e) {
            var t = ua(e);
            return t === null ? null : t.stateNode;
          }
          function xD(e) {
            return null;
          }
          function wD() {
            return tn;
          }
          function bD(e) {
            var t = e.findFiberByHostInstance,
              a = S.ReactCurrentDispatcher;
            return sd({
              bundleType: e.bundleType,
              version: e.version,
              rendererPackageName: e.rendererPackageName,
              rendererConfig: e.rendererConfig,
              overrideHookState: aT,
              overrideHookStateDeletePath: iT,
              overrideHookStateRenamePath: lT,
              overrideProps: uT,
              overridePropsDeletePath: oT,
              overridePropsRenamePath: sT,
              setErrorHandler: fT,
              setSuspenseHandler: dT,
              scheduleUpdate: cT,
              currentDispatcherRef: a,
              findHostInstanceByFiber: RD,
              findFiberByHostInstance: t || xD,
              // React Refresh
              findHostInstancesForRefresh: nD,
              scheduleRefresh: eD,
              scheduleRoot: tD,
              setRefreshHandler: Z_,
              // Enables DevTools to append owner stacks to error messages in DEV mode.
              getCurrentFiber: wD,
              // Enables DevTools to detect reconciler version rather than renderer version
              // which may not match for third party renderers.
              reconcilerVersion: C0,
            });
          }
          var ST =
            typeof reportError == "function"
              ? // In modern browsers, reportError will dispatch an error event,
                // emulating an uncaught JavaScript error.
                reportError
              : function (e) {
                  console.error(e);
                };
          function b0(e) {
            this._internalRoot = e;
          }
          (Bm.prototype.render = b0.prototype.render =
            function (e) {
              var t = this._internalRoot;
              if (t === null)
                throw new Error("Cannot update an unmounted root.");
              {
                typeof arguments[1] == "function"
                  ? y(
                      "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().",
                    )
                  : Pm(arguments[1])
                    ? y(
                        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.",
                      )
                    : typeof arguments[1] < "u" &&
                      y(
                        "You passed a second argument to root.render(...) but it only accepts one argument.",
                      );
                var a = t.containerInfo;
                if (a.nodeType !== nn) {
                  var i = tT(t.current);
                  i &&
                    i.parentNode !== a &&
                    y(
                      "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.",
                    );
                }
              }
              Mp(e, t, null, null);
            }),
            (Bm.prototype.unmount = b0.prototype.unmount =
              function () {
                typeof arguments[0] == "function" &&
                  y(
                    "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().",
                  );
                var e = this._internalRoot;
                if (e !== null) {
                  this._internalRoot = null;
                  var t = e.containerInfo;
                  N1() &&
                    y(
                      "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.",
                    ),
                    Xl(function () {
                      Mp(null, e, null, null);
                    }),
                    SE(t);
                }
              });
          function _D(e, t) {
            if (!Pm(e))
              throw new Error(
                "createRoot(...): Target container is not a DOM element.",
              );
            ET(e);
            var a = !1,
              i = !1,
              u = "",
              s = ST;
            t != null &&
              (t.hydrate
                ? F(
                    "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.",
                  )
                : typeof t == "object" &&
                  t !== null &&
                  t.$$typeof === ii &&
                  y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
              t.unstable_strictMode === !0 && (a = !0),
              t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
              t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
              t.transitionCallbacks !== void 0 && t.transitionCallbacks);
            var f = J1(e, Ah, null, a, i, u, s);
            kh(f.current, e);
            var p = e.nodeType === nn ? e.parentNode : e;
            return Hd(p), new b0(f);
          }
          function Bm(e) {
            this._internalRoot = e;
          }
          function DD(e) {
            e && Dy(e);
          }
          Bm.prototype.unstable_scheduleHydration = DD;
          function kD(e, t, a) {
            if (!Pm(e))
              throw new Error(
                "hydrateRoot(...): Target container is not a DOM element.",
              );
            ET(e),
              t === void 0 &&
                y(
                  "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)",
                );
            var i = a ?? null,
              u = (a != null && a.hydratedSources) || null,
              s = !1,
              f = !1,
              p = "",
              h = ST;
            a != null &&
              (a.unstable_strictMode === !0 && (s = !0),
              a.identifierPrefix !== void 0 && (p = a.identifierPrefix),
              a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
            var g = Z1(t, null, e, Ah, i, s, f, p, h);
            if ((kh(g.current, e), Hd(e), u))
              for (var E = 0; E < u.length; E++) {
                var _ = u[E];
                Mw(g, _);
              }
            return new Bm(g);
          }
          function Pm(e) {
            return !!(
              e &&
              (e.nodeType === hr ||
                e.nodeType === Na ||
                e.nodeType === ml ||
                !ct)
            );
          }
          function Up(e) {
            return !!(
              e &&
              (e.nodeType === hr ||
                e.nodeType === Na ||
                e.nodeType === ml ||
                (e.nodeType === nn &&
                  e.nodeValue === " react-mount-point-unstable "))
            );
          }
          function ET(e) {
            e.nodeType === hr &&
              e.tagName &&
              e.tagName.toUpperCase() === "BODY" &&
              y(
                "createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.",
              ),
              Kd(e) &&
                (e._reactRootContainer
                  ? y(
                      "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.",
                    )
                  : y(
                      "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.",
                    ));
          }
          var LD = S.ReactCurrentOwner,
            CT;
          CT = function (e) {
            if (e._reactRootContainer && e.nodeType !== nn) {
              var t = tT(e._reactRootContainer.current);
              t &&
                t.parentNode !== e &&
                y(
                  "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.",
                );
            }
            var a = !!e._reactRootContainer,
              i = _0(e),
              u = !!(i && Qu(i));
            u &&
              !a &&
              y(
                "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.",
              ),
              e.nodeType === hr &&
                e.tagName &&
                e.tagName.toUpperCase() === "BODY" &&
                y(
                  "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.",
                );
          };
          function _0(e) {
            return e
              ? e.nodeType === Na
                ? e.documentElement
                : e.firstChild
              : null;
          }
          function TT() {}
          function ND(e, t, a, i, u) {
            if (u) {
              if (typeof i == "function") {
                var s = i;
                i = function () {
                  var w = Vm(f);
                  s.call(w);
                };
              }
              var f = Z1(
                t,
                i,
                e,
                Gu,
                null,
                // hydrationCallbacks
                !1,
                // isStrictMode
                !1,
                // concurrentUpdatesByDefaultOverride,
                "",
                // identifierPrefix
                TT,
              );
              (e._reactRootContainer = f), kh(f.current, e);
              var p = e.nodeType === nn ? e.parentNode : e;
              return Hd(p), Xl(), f;
            } else {
              for (var h; (h = e.lastChild); ) e.removeChild(h);
              if (typeof i == "function") {
                var g = i;
                i = function () {
                  var w = Vm(E);
                  g.call(w);
                };
              }
              var E = J1(
                e,
                Gu,
                null,
                // hydrationCallbacks
                !1,
                // isStrictMode
                !1,
                // concurrentUpdatesByDefaultOverride,
                "",
                // identifierPrefix
                TT,
              );
              (e._reactRootContainer = E), kh(E.current, e);
              var _ = e.nodeType === nn ? e.parentNode : e;
              return (
                Hd(_),
                Xl(function () {
                  Mp(t, E, a, i);
                }),
                E
              );
            }
          }
          function OD(e, t) {
            e !== null &&
              typeof e != "function" &&
              y(
                "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                t,
                e,
              );
          }
          function $m(e, t, a, i, u) {
            CT(a), OD(u === void 0 ? null : u, "render");
            var s = a._reactRootContainer,
              f;
            if (!s) f = ND(a, t, e, u, i);
            else {
              if (((f = s), typeof u == "function")) {
                var p = u;
                u = function () {
                  var h = Vm(f);
                  p.call(h);
                };
              }
              Mp(t, f, e, u);
            }
            return Vm(f);
          }
          var RT = !1;
          function MD(e) {
            {
              RT ||
                ((RT = !0),
                y(
                  "findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                ));
              var t = LD.current;
              if (t !== null && t.stateNode !== null) {
                var a = t.stateNode._warnedAboutRefsInRender;
                a ||
                  y(
                    "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                    St(t.type) || "A component",
                  ),
                  (t.stateNode._warnedAboutRefsInRender = !0);
              }
            }
            return e == null
              ? null
              : e.nodeType === hr
                ? e
                : yD(e, "findDOMNode");
          }
          function UD(e, t, a) {
            if (
              (y(
                "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
              ),
              !Up(t))
            )
              throw new Error("Target container is not a DOM element.");
            {
              var i = Kd(t) && t._reactRootContainer === void 0;
              i &&
                y(
                  "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?",
                );
            }
            return $m(null, e, t, !0, a);
          }
          function zD(e, t, a) {
            if (
              (y(
                "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
              ),
              !Up(t))
            )
              throw new Error("Target container is not a DOM element.");
            {
              var i = Kd(t) && t._reactRootContainer === void 0;
              i &&
                y(
                  "You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?",
                );
            }
            return $m(null, e, t, !1, a);
          }
          function AD(e, t, a, i) {
            if (
              (y(
                "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
              ),
              !Up(a))
            )
              throw new Error("Target container is not a DOM element.");
            if (e == null || !No(e))
              throw new Error(
                "parentComponent must be a valid React Component",
              );
            return $m(e, t, a, !1, i);
          }
          var xT = !1;
          function jD(e) {
            if (
              (xT ||
                ((xT = !0),
                y(
                  "unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot",
                )),
              !Up(e))
            )
              throw new Error(
                "unmountComponentAtNode(...): Target container is not a DOM element.",
              );
            {
              var t = Kd(e) && e._reactRootContainer === void 0;
              t &&
                y(
                  "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?",
                );
            }
            if (e._reactRootContainer) {
              {
                var a = _0(e),
                  i = a && !Qu(a);
                i &&
                  y(
                    "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.",
                  );
              }
              return (
                Xl(function () {
                  $m(null, null, e, !1, function () {
                    (e._reactRootContainer = null), SE(e);
                  });
                }),
                !0
              );
            } else {
              {
                var u = _0(e),
                  s = !!(u && Qu(u)),
                  f =
                    e.nodeType === hr &&
                    Up(e.parentNode) &&
                    !!e.parentNode._reactRootContainer;
                s &&
                  y(
                    "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
                    f
                      ? "You may have accidentally passed in a React root node instead of its container."
                      : "Instead, have the parent component update its state and rerender in order to remove this component.",
                  );
              }
              return !1;
            }
          }
          Ou(gD),
            by(SD),
            wc(ED),
            qv(fa),
            Jv(qn),
            (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
              Map.prototype == null ||
              typeof Map.prototype.forEach != "function" ||
              typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
              Set.prototype == null ||
              typeof Set.prototype.clear != "function" ||
              typeof Set.prototype.forEach != "function") &&
              y(
                "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
              ),
            _v(HR),
            Ps(a0, k_, Xl);
          function FD(e, t) {
            var a =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : null;
            if (!Pm(t))
              throw new Error("Target container is not a DOM element.");
            return mD(e, t, null, a);
          }
          function HD(e, t, a, i) {
            return AD(e, t, a, i);
          }
          var D0 = {
            usingClientEntryPoint: !1,
            // Keep in sync with ReactTestUtils.js.
            // This is an array for better minification.
            Events: [Qu, Gc, Lh, Bs, Do, a0],
          };
          function VD(e, t) {
            return (
              D0.usingClientEntryPoint ||
                y(
                  'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
                ),
              _D(e, t)
            );
          }
          function BD(e, t, a) {
            return (
              D0.usingClientEntryPoint ||
                y(
                  'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
                ),
              kD(e, t, a)
            );
          }
          function PD(e) {
            return (
              N1() &&
                y(
                  "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.",
                ),
              Xl(e)
            );
          }
          var $D = bD({
            findFiberByHostInstance: as,
            bundleType: 1,
            version: C0,
            rendererPackageName: "react-dom",
          });
          if (
            !$D &&
            gn &&
            window.top === window.self &&
            ((navigator.userAgent.indexOf("Chrome") > -1 &&
              navigator.userAgent.indexOf("Edge") === -1) ||
              navigator.userAgent.indexOf("Firefox") > -1)
          ) {
            var wT = window.location.protocol;
            /^(https?|file):$/.test(wT) &&
              console.info(
                "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
                  (wT === "file:"
                    ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
                    : ""),
                "font-weight:bold",
              );
          }
          (Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D0),
            (Ta.createPortal = FD),
            (Ta.createRoot = VD),
            (Ta.findDOMNode = MD),
            (Ta.flushSync = PD),
            (Ta.hydrate = UD),
            (Ta.hydrateRoot = BD),
            (Ta.render = zD),
            (Ta.unmountComponentAtNode = jD),
            (Ta.unstable_batchedUpdates = a0),
            (Ta.unstable_renderSubtreeIntoContainer = HD),
            (Ta.version = C0),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                new Error(),
              );
        })()),
    Ta
  );
}
function YT() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  ) {
    if (process.env.NODE_ENV !== "production") throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YT);
    } catch (v) {
      console.error(v);
    }
  }
}
process.env.NODE_ENV === "production" ? (YT(), fk()) : dk();
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function U0() {
  return (
    (U0 = Object.assign
      ? Object.assign.bind()
      : function (v) {
          for (var T = 1; T < arguments.length; T++) {
            var S = arguments[T];
            for (var D in S)
              Object.prototype.hasOwnProperty.call(S, D) && (v[D] = S[D]);
          }
          return v;
        }),
    U0.apply(this, arguments)
  );
}
var UT;
(function (v) {
  (v.Pop = "POP"), (v.Push = "PUSH"), (v.Replace = "REPLACE");
})(UT || (UT = {}));
function hn(v, T) {
  if (v === !1 || v === null || typeof v > "u") throw new Error(T);
}
function Fp(v, T) {
  if (!v) {
    typeof console < "u" && console.warn(T);
    try {
      throw new Error(T);
    } catch {}
  }
}
function z0(v) {
  let { pathname: T = "/", search: S = "", hash: D = "" } = v;
  return (
    S && S !== "?" && (T += S.charAt(0) === "?" ? S : "?" + S),
    D && D !== "#" && (T += D.charAt(0) === "#" ? D : "#" + D),
    T
  );
}
function WT(v) {
  let T = {};
  if (v) {
    let S = v.indexOf("#");
    S >= 0 && ((T.hash = v.substr(S)), (v = v.substr(0, S)));
    let D = v.indexOf("?");
    D >= 0 && ((T.search = v.substr(D)), (v = v.substr(0, D))),
      v && (T.pathname = v);
  }
  return T;
}
var zT;
(function (v) {
  (v.data = "data"),
    (v.deferred = "deferred"),
    (v.redirect = "redirect"),
    (v.error = "error");
})(zT || (zT = {}));
function AT(v, T) {
  typeof v == "string" &&
    (v = {
      path: v,
      caseSensitive: !1,
      end: !0,
    });
  let [S, D] = pk(v.path, v.caseSensitive, v.end),
    A = T.match(S);
  if (!A) return null;
  let F = A[0],
    y = F.replace(/(.)\/+$/, "$1"),
    K = A.slice(1);
  return {
    params: D.reduce((j, Z, $) => {
      let { paramName: J, isOptional: oe } = Z;
      if (J === "*") {
        let Ie = K[$] || "";
        y = F.slice(0, F.length - Ie.length).replace(/(.)\/+$/, "$1");
      }
      const _e = K[$];
      return (
        oe && !_e ? (j[J] = void 0) : (j[J] = (_e || "").replace(/%2F/g, "/")),
        j
      );
    }, {}),
    pathname: F,
    pathnameBase: y,
    pattern: v,
  };
}
function pk(v, T, S) {
  T === void 0 && (T = !1),
    S === void 0 && (S = !0),
    Fp(
      v === "*" || !v.endsWith("*") || v.endsWith("/*"),
      'Route path "' +
        v +
        '" will be treated as if it were ' +
        ('"' + v.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + v.replace(/\*$/, "/*") + '".'),
    );
  let D = [],
    A =
      "^" +
      v
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (y, K, P) => (
            D.push({
              paramName: K,
              isOptional: P != null,
            }),
            P ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    v.endsWith("*")
      ? (D.push({
          paramName: "*",
        }),
        (A += v === "*" || v === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : S
        ? (A += "\\/*$")
        : v !== "" && v !== "/" && (A += "(?:(?=\\/|$))"),
    [new RegExp(A, T ? void 0 : "i"), D]
  );
}
function Tf(v, T) {
  if (T === "/") return v;
  if (!v.toLowerCase().startsWith(T.toLowerCase())) return null;
  let S = T.endsWith("/") ? T.length - 1 : T.length,
    D = v.charAt(S);
  return D && D !== "/" ? null : v.slice(S) || "/";
}
function vk(v, T) {
  T === void 0 && (T = "/");
  let {
    pathname: S,
    search: D = "",
    hash: A = "",
  } = typeof v == "string" ? WT(v) : v;
  return {
    pathname: S ? (S.startsWith("/") ? S : hk(S, T)) : T,
    search: yk(D),
    hash: gk(A),
  };
}
function hk(v, T) {
  let S = T.replace(/\/+$/, "").split("/");
  return (
    v.split("/").forEach((A) => {
      A === ".." ? S.length > 1 && S.pop() : A !== "." && S.push(A);
    }),
    S.length > 1 ? S.join("/") : "/"
  );
}
function N0(v, T, S, D) {
  return (
    "Cannot include a '" +
    v +
    "' character in a manually specified " +
    ("`to." +
      T +
      "` field [" +
      JSON.stringify(D) +
      "].  Please separate it out to the ") +
    ("`to." + S + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function mk(v) {
  return v.filter(
    (T, S) => S === 0 || (T.route.path && T.route.path.length > 0),
  );
}
function QT(v, T) {
  let S = mk(v);
  return T
    ? S.map((D, A) => (A === S.length - 1 ? D.pathname : D.pathnameBase))
    : S.map((D) => D.pathnameBase);
}
function IT(v, T, S, D) {
  D === void 0 && (D = !1);
  let A;
  typeof v == "string"
    ? (A = WT(v))
    : ((A = U0({}, v)),
      hn(
        !A.pathname || !A.pathname.includes("?"),
        N0("?", "pathname", "search", A),
      ),
      hn(
        !A.pathname || !A.pathname.includes("#"),
        N0("#", "pathname", "hash", A),
      ),
      hn(!A.search || !A.search.includes("#"), N0("#", "search", "hash", A)));
  let F = v === "" || A.pathname === "",
    y = F ? "/" : A.pathname,
    K;
  if (y == null) K = S;
  else {
    let $ = T.length - 1;
    if (!D && y.startsWith("..")) {
      let J = y.split("/");
      for (; J[0] === ".."; ) J.shift(), ($ -= 1);
      A.pathname = J.join("/");
    }
    K = $ >= 0 ? T[$] : "/";
  }
  let P = vk(A, K),
    j = y && y !== "/" && y.endsWith("/"),
    Z = (F || y === ".") && S.endsWith("/");
  return !P.pathname.endsWith("/") && (j || Z) && (P.pathname += "/"), P;
}
const H0 = (v) => v.join("/").replace(/\/\/+/g, "/"),
  yk = (v) => (!v || v === "?" ? "" : v.startsWith("?") ? v : "?" + v),
  gk = (v) => (!v || v === "#" ? "" : v.startsWith("#") ? v : "#" + v),
  GT = ["post", "put", "patch", "delete"];
new Set(GT);
const Sk = ["get", ...GT];
new Set(Sk);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function A0() {
  return (
    (A0 = Object.assign
      ? Object.assign.bind()
      : function (v) {
          for (var T = 1; T < arguments.length; T++) {
            var S = arguments[T];
            for (var D in S)
              Object.prototype.hasOwnProperty.call(S, D) && (v[D] = S[D]);
          }
          return v;
        }),
    A0.apply(this, arguments)
  );
}
const Zm = /* @__PURE__ */ Qe.createContext(null);
process.env.NODE_ENV !== "production" && (Zm.displayName = "DataRouter");
const XT = /* @__PURE__ */ Qe.createContext(null);
process.env.NODE_ENV !== "production" && (XT.displayName = "DataRouterState");
const Ek = /* @__PURE__ */ Qe.createContext(null);
process.env.NODE_ENV !== "production" && (Ek.displayName = "Await");
const Jl = /* @__PURE__ */ Qe.createContext(null);
process.env.NODE_ENV !== "production" && (Jl.displayName = "Navigation");
const V0 = /* @__PURE__ */ Qe.createContext(null);
process.env.NODE_ENV !== "production" && (V0.displayName = "Location");
const xf = /* @__PURE__ */ Qe.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1,
});
process.env.NODE_ENV !== "production" && (xf.displayName = "Route");
const Ck = /* @__PURE__ */ Qe.createContext(null);
process.env.NODE_ENV !== "production" && (Ck.displayName = "RouteError");
function Tk(v, T) {
  let { relative: S } = T === void 0 ? {} : T;
  B0() ||
    (process.env.NODE_ENV !== "production"
      ? hn(
          !1,
          // TODO: This error is probably because they somehow have 2 versions of the
          // router loaded. We can help them understand how to avoid that.
          "useHref() may be used only in the context of a <Router> component.",
        )
      : hn(!1));
  let { basename: D, navigator: A } = Qe.useContext(Jl),
    {
      hash: F,
      pathname: y,
      search: K,
    } = Vp(v, {
      relative: S,
    }),
    P = y;
  return (
    D !== "/" && (P = y === "/" ? D : H0([D, y])),
    A.createHref({
      pathname: P,
      search: K,
      hash: F,
    })
  );
}
function B0() {
  return Qe.useContext(V0) != null;
}
function Hp() {
  return (
    B0() ||
      (process.env.NODE_ENV !== "production"
        ? hn(
            !1,
            // TODO: This error is probably because they somehow have 2 versions of the
            // router loaded. We can help them understand how to avoid that.
            "useLocation() may be used only in the context of a <Router> component.",
          )
        : hn(!1)),
    Qe.useContext(V0).location
  );
}
const KT =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function qT(v) {
  Qe.useContext(Jl).static || Qe.useLayoutEffect(v);
}
function Rk() {
  let { isDataRoute: v } = Qe.useContext(xf);
  return v ? Dk() : xk();
}
function xk() {
  B0() ||
    (process.env.NODE_ENV !== "production"
      ? hn(
          !1,
          // TODO: This error is probably because they somehow have 2 versions of the
          // router loaded. We can help them understand how to avoid that.
          "useNavigate() may be used only in the context of a <Router> component.",
        )
      : hn(!1));
  let v = Qe.useContext(Zm),
    { basename: T, future: S, navigator: D } = Qe.useContext(Jl),
    { matches: A } = Qe.useContext(xf),
    { pathname: F } = Hp(),
    y = JSON.stringify(QT(A, S.v7_relativeSplatPath)),
    K = Qe.useRef(!1);
  return (
    qT(() => {
      K.current = !0;
    }),
    Qe.useCallback(
      function (j, Z) {
        if (
          (Z === void 0 && (Z = {}),
          process.env.NODE_ENV !== "production" && Fp(K.current, KT),
          !K.current)
        )
          return;
        if (typeof j == "number") {
          D.go(j);
          return;
        }
        let $ = IT(j, JSON.parse(y), F, Z.relative === "path");
        v == null &&
          T !== "/" &&
          ($.pathname = $.pathname === "/" ? T : H0([T, $.pathname])),
          (Z.replace ? D.replace : D.push)($, Z.state, Z);
      },
      [T, D, y, F, v],
    )
  );
}
function Vp(v, T) {
  let { relative: S } = T === void 0 ? {} : T,
    { future: D } = Qe.useContext(Jl),
    { matches: A } = Qe.useContext(xf),
    { pathname: F } = Hp(),
    y = JSON.stringify(QT(A, D.v7_relativeSplatPath));
  return Qe.useMemo(() => IT(v, JSON.parse(y), F, S === "path"), [v, y, F, S]);
}
var JT = /* @__PURE__ */ (function (v) {
    return (
      (v.UseBlocker = "useBlocker"),
      (v.UseRevalidator = "useRevalidator"),
      (v.UseNavigateStable = "useNavigate"),
      v
    );
  })(JT || {}),
  P0 = /* @__PURE__ */ (function (v) {
    return (
      (v.UseBlocker = "useBlocker"),
      (v.UseLoaderData = "useLoaderData"),
      (v.UseActionData = "useActionData"),
      (v.UseRouteError = "useRouteError"),
      (v.UseNavigation = "useNavigation"),
      (v.UseRouteLoaderData = "useRouteLoaderData"),
      (v.UseMatches = "useMatches"),
      (v.UseRevalidator = "useRevalidator"),
      (v.UseNavigateStable = "useNavigate"),
      (v.UseRouteId = "useRouteId"),
      v
    );
  })(P0 || {});
function ZT(v) {
  return (
    v +
    " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."
  );
}
function wk(v) {
  let T = Qe.useContext(Zm);
  return (
    T || (process.env.NODE_ENV !== "production" ? hn(!1, ZT(v)) : hn(!1)), T
  );
}
function bk(v) {
  let T = Qe.useContext(xf);
  return (
    T || (process.env.NODE_ENV !== "production" ? hn(!1, ZT(v)) : hn(!1)), T
  );
}
function eR(v) {
  let T = bk(v),
    S = T.matches[T.matches.length - 1];
  return (
    S.route.id ||
      (process.env.NODE_ENV !== "production"
        ? hn(!1, v + ' can only be used on routes that contain a unique "id"')
        : hn(!1)),
    S.route.id
  );
}
function _k() {
  return eR(P0.UseRouteId);
}
function Dk() {
  let { router: v } = wk(JT.UseNavigateStable),
    T = eR(P0.UseNavigateStable),
    S = Qe.useRef(!1);
  return (
    qT(() => {
      S.current = !0;
    }),
    Qe.useCallback(
      function (A, F) {
        F === void 0 && (F = {}),
          process.env.NODE_ENV !== "production" && Fp(S.current, KT),
          S.current &&
            (typeof A == "number"
              ? v.navigate(A)
              : v.navigate(
                  A,
                  A0(
                    {
                      fromRouteId: T,
                    },
                    F,
                  ),
                ));
      },
      [v, T],
    )
  );
}
new Promise(() => {});
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rf() {
  return (
    (Rf = Object.assign
      ? Object.assign.bind()
      : function (v) {
          for (var T = 1; T < arguments.length; T++) {
            var S = arguments[T];
            for (var D in S)
              Object.prototype.hasOwnProperty.call(S, D) && (v[D] = S[D]);
          }
          return v;
        }),
    Rf.apply(this, arguments)
  );
}
function $0(v, T) {
  if (v == null) return {};
  var S = {},
    D = Object.keys(v),
    A,
    F;
  for (F = 0; F < D.length; F++)
    (A = D[F]), !(T.indexOf(A) >= 0) && (S[A] = v[A]);
  return S;
}
const Qm = "get",
  Im = "application/x-www-form-urlencoded";
function ey(v) {
  return v != null && typeof v.tagName == "string";
}
function kk(v) {
  return ey(v) && v.tagName.toLowerCase() === "button";
}
function Lk(v) {
  return ey(v) && v.tagName.toLowerCase() === "form";
}
function Nk(v) {
  return ey(v) && v.tagName.toLowerCase() === "input";
}
function Ok(v) {
  return !!(v.metaKey || v.altKey || v.ctrlKey || v.shiftKey);
}
function Mk(v, T) {
  return (
    v.button === 0 && // Ignore everything but left clicks
    (!T || T === "_self") && // Let browser handle "target=_blank" etc.
    !Ok(v)
  );
}
let Wm = null;
function Uk() {
  if (Wm === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0,
      ),
        (Wm = !1);
    } catch {
      Wm = !0;
    }
  return Wm;
}
const zk = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function O0(v) {
  return v != null && !zk.has(v)
    ? (process.env.NODE_ENV !== "production" &&
        Fp(
          !1,
          '"' +
            v +
            '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' +
            ('and will default to "' + Im + '"'),
        ),
      null)
    : v;
}
function Ak(v, T) {
  let S, D, A, F, y;
  if (Lk(v)) {
    let K = v.getAttribute("action");
    (D = K ? Tf(K, T) : null),
      (S = v.getAttribute("method") || Qm),
      (A = O0(v.getAttribute("enctype")) || Im),
      (F = new FormData(v));
  } else if (kk(v) || (Nk(v) && (v.type === "submit" || v.type === "image"))) {
    let K = v.form;
    if (K == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let P = v.getAttribute("formaction") || K.getAttribute("action");
    if (
      ((D = P ? Tf(P, T) : null),
      (S = v.getAttribute("formmethod") || K.getAttribute("method") || Qm),
      (A =
        O0(v.getAttribute("formenctype")) ||
        O0(K.getAttribute("enctype")) ||
        Im),
      (F = new FormData(K, v)),
      !Uk())
    ) {
      let { name: j, type: Z, value: $ } = v;
      if (Z === "image") {
        let J = j ? j + "." : "";
        F.append(J + "x", "0"), F.append(J + "y", "0");
      } else j && F.append(j, $);
    }
  } else {
    if (ey(v))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (S = Qm), (D = null), (A = Im), (y = v);
  }
  return (
    F && A === "text/plain" && ((y = F), (F = void 0)),
    {
      action: D,
      method: S.toLowerCase(),
      encType: A,
      formData: F,
      body: y,
    }
  );
}
const jk = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Fk = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Hk = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Vk = "6";
try {
  window.__reactRouterVersion = Vk;
} catch {}
const tR = /* @__PURE__ */ Qe.createContext({
  isTransitioning: !1,
});
process.env.NODE_ENV !== "production" && (tR.displayName = "ViewTransition");
const Bk = /* @__PURE__ */ Qe.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Bk.displayName = "Fetchers");
process.env.NODE_ENV;
const Pk =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  $k = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Y0 = /* @__PURE__ */ Qe.forwardRef(function (T, S) {
    let {
        onClick: D,
        relative: A,
        reloadDocument: F,
        replace: y,
        state: K,
        target: P,
        to: j,
        preventScrollReset: Z,
        unstable_viewTransition: $,
      } = T,
      J = $0(T, jk),
      { basename: oe } = Qe.useContext(Jl),
      _e,
      Ie = !1;
    if (typeof j == "string" && $k.test(j) && ((_e = j), Pk))
      try {
        let xe = new URL(window.location.href),
          je = j.startsWith("//") ? new URL(xe.protocol + j) : new URL(j),
          We = Tf(je.pathname, oe);
        je.origin === xe.origin && We != null
          ? (j = We + je.search + je.hash)
          : (Ie = !0);
      } catch {
        process.env.NODE_ENV !== "production" &&
          Fp(
            !1,
            '<Link to="' +
              j +
              '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.',
          );
      }
    let at = Tk(j, {
        relative: A,
      }),
      kt = Ik(j, {
        replace: y,
        state: K,
        target: P,
        preventScrollReset: Z,
        relative: A,
        unstable_viewTransition: $,
      });
    function ke(xe) {
      D && D(xe), xe.defaultPrevented || kt(xe);
    }
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ Qe.createElement(
        "a",
        Rf({}, J, {
          href: _e || at,
          onClick: Ie || F ? D : ke,
          ref: S,
          target: P,
        }),
      )
    );
  });
process.env.NODE_ENV !== "production" && (Y0.displayName = "Link");
const Yk = /* @__PURE__ */ Qe.forwardRef(function (T, S) {
  let {
      "aria-current": D = "page",
      caseSensitive: A = !1,
      className: F = "",
      end: y = !1,
      style: K,
      to: P,
      unstable_viewTransition: j,
      children: Z,
    } = T,
    $ = $0(T, Fk),
    J = Vp(P, {
      relative: $.relative,
    }),
    oe = Hp(),
    _e = Qe.useContext(XT),
    { navigator: Ie, basename: at } = Qe.useContext(Jl),
    kt =
      _e != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Zk(J) &&
      j === !0,
    ke = Ie.encodeLocation ? Ie.encodeLocation(J).pathname : J.pathname,
    xe = oe.pathname,
    je =
      _e && _e.navigation && _e.navigation.location
        ? _e.navigation.location.pathname
        : null;
  A ||
    ((xe = xe.toLowerCase()),
    (je = je ? je.toLowerCase() : null),
    (ke = ke.toLowerCase())),
    je && at && (je = Tf(je, at) || je);
  const We = ke !== "/" && ke.endsWith("/") ? ke.length - 1 : ke.length;
  let mt = xe === ke || (!y && xe.startsWith(ke) && xe.charAt(We) === "/"),
    $e =
      je != null &&
      (je === ke || (!y && je.startsWith(ke) && je.charAt(ke.length) === "/")),
    Gt = {
      isActive: mt,
      isPending: $e,
      isTransitioning: kt,
    },
    mn = mt ? D : void 0,
    wt;
  typeof F == "function"
    ? (wt = F(Gt))
    : (wt = [
        F,
        mt ? "active" : null,
        $e ? "pending" : null,
        kt ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let dt = typeof K == "function" ? K(Gt) : K;
  return /* @__PURE__ */ Qe.createElement(
    Y0,
    Rf({}, $, {
      "aria-current": mn,
      className: wt,
      ref: S,
      style: dt,
      to: P,
      unstable_viewTransition: j,
    }),
    typeof Z == "function" ? Z(Gt) : Z,
  );
});
process.env.NODE_ENV !== "production" && (Yk.displayName = "NavLink");
const Wk = /* @__PURE__ */ Qe.forwardRef((v, T) => {
  let {
      fetcherKey: S,
      navigate: D,
      reloadDocument: A,
      replace: F,
      state: y,
      method: K = Qm,
      action: P,
      onSubmit: j,
      relative: Z,
      preventScrollReset: $,
      unstable_viewTransition: J,
    } = v,
    oe = $0(v, Hk),
    _e = qk(),
    Ie = Jk(P, {
      relative: Z,
    }),
    at = K.toLowerCase() === "get" ? "get" : "post",
    kt = (ke) => {
      if ((j && j(ke), ke.defaultPrevented)) return;
      ke.preventDefault();
      let xe = ke.nativeEvent.submitter,
        je = (xe == null ? void 0 : xe.getAttribute("formmethod")) || K;
      _e(xe || ke.currentTarget, {
        fetcherKey: S,
        method: je,
        navigate: D,
        replace: F,
        state: y,
        relative: Z,
        preventScrollReset: $,
        unstable_viewTransition: J,
      });
    };
  return /* @__PURE__ */ Qe.createElement(
    "form",
    Rf(
      {
        ref: T,
        method: at,
        action: Ie,
        onSubmit: A ? j : kt,
      },
      oe,
    ),
  );
});
process.env.NODE_ENV !== "production" && (Wk.displayName = "Form");
process.env.NODE_ENV;
var Xm;
(function (v) {
  (v.UseScrollRestoration = "useScrollRestoration"),
    (v.UseSubmit = "useSubmit"),
    (v.UseSubmitFetcher = "useSubmitFetcher"),
    (v.UseFetcher = "useFetcher"),
    (v.useViewTransitionState = "useViewTransitionState");
})(Xm || (Xm = {}));
var jT;
(function (v) {
  (v.UseFetcher = "useFetcher"),
    (v.UseFetchers = "useFetchers"),
    (v.UseScrollRestoration = "useScrollRestoration");
})(jT || (jT = {}));
function Qk(v) {
  return (
    v +
    " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."
  );
}
function nR(v) {
  let T = Qe.useContext(Zm);
  return (
    T || (process.env.NODE_ENV !== "production" ? hn(!1, Qk(v)) : hn(!1)), T
  );
}
function Ik(v, T) {
  let {
      target: S,
      replace: D,
      state: A,
      preventScrollReset: F,
      relative: y,
      unstable_viewTransition: K,
    } = T === void 0 ? {} : T,
    P = Rk(),
    j = Hp(),
    Z = Vp(v, {
      relative: y,
    });
  return Qe.useCallback(
    ($) => {
      if (Mk($, S)) {
        $.preventDefault();
        let J = D !== void 0 ? D : z0(j) === z0(Z);
        P(v, {
          replace: J,
          state: A,
          preventScrollReset: F,
          relative: y,
          unstable_viewTransition: K,
        });
      }
    },
    [j, P, Z, D, A, S, v, F, y, K],
  );
}
function Gk() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.",
    );
}
let Xk = 0,
  Kk = () => "__" + String(++Xk) + "__";
function qk() {
  let { router: v } = nR(Xm.UseSubmit),
    { basename: T } = Qe.useContext(Jl),
    S = _k();
  return Qe.useCallback(
    function (D, A) {
      A === void 0 && (A = {}), Gk();
      let { action: F, method: y, encType: K, formData: P, body: j } = Ak(D, T);
      if (A.navigate === !1) {
        let Z = A.fetcherKey || Kk();
        v.fetch(Z, S, A.action || F, {
          preventScrollReset: A.preventScrollReset,
          formData: P,
          body: j,
          formMethod: A.method || y,
          formEncType: A.encType || K,
          unstable_flushSync: A.unstable_flushSync,
        });
      } else
        v.navigate(A.action || F, {
          preventScrollReset: A.preventScrollReset,
          formData: P,
          body: j,
          formMethod: A.method || y,
          formEncType: A.encType || K,
          replace: A.replace,
          state: A.state,
          fromRouteId: S,
          unstable_flushSync: A.unstable_flushSync,
          unstable_viewTransition: A.unstable_viewTransition,
        });
    },
    [v, T, S],
  );
}
function Jk(v, T) {
  let { relative: S } = T === void 0 ? {} : T,
    { basename: D } = Qe.useContext(Jl),
    A = Qe.useContext(xf);
  A ||
    (process.env.NODE_ENV !== "production"
      ? hn(!1, "useFormAction must be used inside a RouteContext")
      : hn(!1));
  let [F] = A.matches.slice(-1),
    y = Rf(
      {},
      Vp(v || ".", {
        relative: S,
      }),
    ),
    K = Hp();
  if (v == null) {
    y.search = K.search;
    let P = new URLSearchParams(y.search);
    P.has("index") &&
      P.get("index") === "" &&
      (P.delete("index"), (y.search = P.toString() ? "?" + P.toString() : ""));
  }
  return (
    (!v || v === ".") &&
      F.route.index &&
      (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"),
    D !== "/" && (y.pathname = y.pathname === "/" ? D : H0([D, y.pathname])),
    z0(y)
  );
}
function Zk(v, T) {
  T === void 0 && (T = {});
  let S = Qe.useContext(tR);
  S == null &&
    (process.env.NODE_ENV !== "production"
      ? hn(
          !1,
          "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
        )
      : hn(!1));
  let { basename: D } = nR(Xm.useViewTransitionState),
    A = Vp(v, {
      relative: T.relative,
    });
  if (!S.isTransitioning) return !1;
  let F = Tf(S.currentLocation.pathname, D) || S.currentLocation.pathname,
    y = Tf(S.nextLocation.pathname, D) || S.nextLocation.pathname;
  return AT(A.pathname, y) != null || AT(A.pathname, F) != null;
}
const rR = ({
    href: v,
    text: T,
    inApp: S = !0,
    isDisabled: D = !1,
    variant: A = "primary",
    iconAfter: F = Jm.EMPTY,
  }) => {
    const y = F && Cs[F];
    return D
      ? /* @__PURE__ */ te.jsx("span", {
          className: "torres-link torres-link--disabled",
          children: T,
        })
      : /* @__PURE__ */ te.jsxs(Y0, {
          to: v,
          target: S ? "_self" : "_blank",
          className: `torres-link torres-link--${A}`,
          children: [
            T,
            y && A === "secondary" && /* @__PURE__ */ te.jsx(y, {}),
          ],
        });
  },
  Ef = ({ text: v, size: T = "large", align: S = "left" }) => {
    const D = Nr("torres-subtitle", {
      [`torres-subtitle--${T}`]: T,
      [`torres-subtitle--${S}`]: S,
    });
    return /* @__PURE__ */ te.jsx("h3", { className: D, children: v });
  },
  eL = ({ text: v, size: T = "large", align: S = "left" }) => {
    const D = Nr("torres-title", {
      [`torres-title--${T}`]: T,
      [`torres-title--${S}`]: S,
    });
    return /* @__PURE__ */ te.jsx("h1", { className: D, children: v });
  },
  oL = ({ text: v, size: T = "large", align: S = "left" }) => {
    const D = Nr("torres-paragraph", {
      [`torres-paragraph--${T}`]: T,
      [`torres-paragraph--${S}`]: S,
    });
    return /* @__PURE__ */ te.jsx("p", { className: D, children: v });
  },
  sL = ({ image: v, title: T, toRedirect: S }) =>
    /* @__PURE__ */ te.jsxs("div", {
      className: "torres-banner-one",
      children: [
        /* @__PURE__ */ te.jsx(F0, { ...v }),
        /* @__PURE__ */ te.jsxs("div", {
          className: "torres-banner-one__content",
          children: [
            /* @__PURE__ */ te.jsx(Ef, { text: T }),
            /* @__PURE__ */ te.jsx(rR, { ...S, variant: "secondary" }),
          ],
        }),
      ],
    }),
  cL = ({ image: v, title: T, toRedirect: S }) =>
    /* @__PURE__ */ te.jsxs("div", {
      className: "torres-banner-two",
      children: [
        /* @__PURE__ */ te.jsx(F0, { ...v }),
        /* @__PURE__ */ te.jsxs("div", {
          className: "torres-banner-two__content",
          children: [
            /* @__PURE__ */ te.jsx(Ef, { text: T }),
            /* @__PURE__ */ te.jsx(rR, { ...S, variant: "secondary" }),
          ],
        }),
      ],
    }),
  fL = ({ image: v, price: T, name: S, priceList: D, action: A }) => {
    const F = ((T - D) / T) * 100;
    return /* @__PURE__ */ te.jsxs("div", {
      className: "torres-card-product",
      onClick: A,
      children: [
        /* @__PURE__ */ te.jsx("div", {
          className: "torres-card-product__container-tag",
          children:
            D !== T &&
            /* @__PURE__ */ te.jsx(ok, { text: `-${F.toFixed(0)}%` }),
        }),
        /* @__PURE__ */ te.jsx(F0, {
          url: v.url,
          alt: v.alt,
          aspectRatio: v.aspectRatio,
        }),
        /* @__PURE__ */ te.jsx("div", {
          className: "torres-card-product__container-name",
          children: /* @__PURE__ */ te.jsx("span", {
            className: "torres-card-product__name",
            children: S,
          }),
        }),
        /* @__PURE__ */ te.jsxs("div", {
          className: "torres-card-product__container-prices",
          children: [
            /* @__PURE__ */ te.jsx(DT, { value: D }),
            D !== T && /* @__PURE__ */ te.jsx(DT, { value: T, through: !0 }),
          ],
        }),
      ],
    });
  },
  tL = ({
    items: v,
    onSelect: T,
    multiple: S,
    group: D,
    wrapContent: A = !1,
  }) => {
    const [F, y] = qm(null),
      K = Nr("torres-group-button-chip", {
        "torres-group-button-chip--wrapContent": A,
        "torres-group-button-chip--noWrapContent": !A,
      }),
      P = (j) => {
        S
          ? Array.isArray(F)
            ? F.includes(j)
              ? y(F.filter((Z) => Z !== j))
              : y([...F, j])
            : y([j])
          : y(j);
      };
    return (
      Es(
        () =>
          Array.isArray(F)
            ? T && T({ group: D, values: F })
            : T && T({ group: D, values: F ? [F] : [] }),
        [F],
      ),
      Es(() => {
        var j;
        y(
          S
            ? v.filter((Z) => Z.isSelected).map((Z) => Z.value)
            : (((j = v.find((Z) => Z.isSelected)) == null ? void 0 : j.value) ??
                null),
        );
      }, [v, S]),
      /* @__PURE__ */ te.jsx("div", {
        className: K,
        children: v.map((j) =>
          /* @__PURE__ */ te.jsx(
            nk,
            {
              action: () => P(j.value),
              text: j.label,
              isSelected: Array.isArray(F)
                ? F.includes(j.value)
                : F === j.value,
            },
            j.value,
          ),
        ),
      })
    );
  },
  nL = ({
    items: v,
    onSelect: T,
    multiple: S,
    group: D,
    wrapContent: A = !1,
  }) => {
    const [F, y] = qm(null),
      K = Nr("torres-group-button-color", {
        "torres-group-button-color--wrapContent": A,
        "torres-group-button-color--noWrapContent": !A,
      }),
      P = (j) => {
        console.log("id", j),
          S
            ? Array.isArray(F)
              ? F.includes(j)
                ? y(F.filter((Z) => Z !== j))
                : y([...F, j])
              : y([j])
            : y(j);
      };
    return (
      Es(
        () =>
          Array.isArray(F)
            ? T && T({ group: D, values: F })
            : T && T({ group: D, values: F ? [F] : [] }),
        [F],
      ),
      Es(() => {
        var j;
        y(
          S
            ? v.filter((Z) => Z.isSelected).map((Z) => Z.id)
            : (((j = v.find((Z) => Z.isSelected)) == null ? void 0 : j.id) ??
                null),
        );
      }, [v, S]),
      /* @__PURE__ */ te.jsx("div", {
        className: K,
        children: v.map((j) =>
          /* @__PURE__ */ te.jsx(
            rk,
            {
              id: j.id,
              color: j.color,
              action: () => P(j.id),
              isSelected: Array.isArray(F) ? F.includes(j.id) : F === j.id,
            },
            j.id,
          ),
        ),
      })
    );
  },
  FT = ({
    items: v,
    onSelect: T,
    group: S,
    multiple: D,
    orientation: A = "horizontal",
    wrapContent: F = !0,
  }) => {
    const [y, K] = qm(null),
      P = Nr("torres-group-link-next", {
        "torres-group-link-next--wrapContent": F,
        "torres-group-link-next--noWrapContent": !F,
      }),
      j = Nr("torres-group-link-next", {
        [`torres-group-link-next__container--${A}`]: A,
        "torres-group-link-next__container--wrapContent": F,
        "torres-group-link-next__container--noWrapContent": !F,
      }),
      Z = ($) => {
        D
          ? Array.isArray(y)
            ? y.includes($)
              ? K(y.filter((J) => J !== $))
              : K([...y, $])
            : K([$])
          : K($);
      };
    return (
      Es(
        () =>
          Array.isArray(y)
            ? T && T({ group: S, values: y })
            : T && T({ group: S, values: y ? [y] : [] }),
        [y],
      ),
      Es(() => {
        var $;
        K(
          D
            ? v.filter((J) => J.isSelected).map((J) => J.value)
            : ((($ = v.find((J) => J.isSelected)) == null ? void 0 : $.value) ??
                null),
        );
      }, [v, D]),
      /* @__PURE__ */ te.jsx("div", {
        className: P,
        children: /* @__PURE__ */ te.jsx("div", {
          className: j,
          children: v.map(($) =>
            /* @__PURE__ */ te.jsx(
              ik,
              {
                variant: "secondary",
                action: () => Z($.value),
                text: $.label,
                isActionDisabled: !0,
                cursorPointerInDisabled: !0,
                isDisabled: !(Array.isArray(y)
                  ? y.includes($.value)
                  : y === $.value),
              },
              $.value,
            ),
          ),
        }),
      })
    );
  };
var HT;
(function (v) {
  (v.EQUAL = "equals"),
    (v.NOT_EQUAL = "does not equals"),
    (v.IS_SET = "is set"),
    (v.IS_NOT_SET = "is not set"),
    (v.GREATER_THAN = "greater than"),
    (v.MINOR_THAN = "minor than"),
    (v.IS_TRUE = "is true"),
    (v.IS_FALSE = "is false"),
    (v.MORE_THAN = "more than"),
    (v.LESS_THAN = "less than"),
    (v.WAS_MADE = "was made"),
    (v.WAS_NOT_MADE = "was not made"),
    (v.WAS_ON = "was on"),
    (v.WAS_NOT_ON = "was not on"),
    (v.WAS_AGO = "was ago"),
    (v.WAS_NOT_AGO = "was not ago"),
    (v.WAS_MORE_THAN = "was more than"),
    (v.WAS_NOT_MORE_THAN = "was not more than"),
    (v.WAS_LESS_THAN = "was less than"),
    (v.WAS_NOT_LESS_THAN = "was not less than"),
    (v.WITH_PROPERTY = "with property"),
    (v.ANNIVERSARY_IS = "anniversary is"),
    (v.CONTAINS = "containts"),
    (v.SENT = "sent"),
    (v.NOT_SENT = "not sent"),
    (v.CLICKED = "clicked"),
    (v.NOT_CLICKED = "not clicked"),
    (v.CHANGED_VALUE = "changed value"),
    (v.IS_IN_AUDIENCE = "is in audience"),
    (v.IS_NOT_IN_AUDIENCE = "is not in audience"),
    (v.ENGAGED = "engaged"),
    (v.ATTRIBUTED = "attributed"),
    (v.NONE = "");
})(HT || (HT = {}));
var j0;
(function (v) {
  (v.AND = "and"), (v.OR = "or");
})(j0 || (j0 = {}));
var VT;
(function (v) {
  (v.EQ = "eq"),
    (v.NE = "ne"),
    (v.GT = "gt"),
    (v.GTE = "gte"),
    (v.LT = "lt"),
    (v.LTE = "lte"),
    (v.IN = "in"),
    (v.NIN = "nin");
})(VT || (VT = {}));
var Cf;
(function (v) {
  (v.ITEM = "item"),
    (v.ITEMS = "items"),
    (v.NUMBER_VALUE = "numberValue"),
    (v.NUMBER = "number"),
    (v.STRING_VALUE = "stringValue"),
    (v.STRING = "string"),
    (v.ITEM_VALUE = "itemValue");
})(Cf || (Cf = {}));
const dL = ({ config: v, change: T }) => {
  const [S, D] = qm([]),
    A = Nr("TorresFilter"),
    F = () => {
      T && T({ filters: S, boolOp: j0.AND });
    },
    y = (K) => {
      if (K.values.length > 0) {
        const P = S.findIndex((Z) => Z.name === K.group);
        let j;
        P !== -1
          ? (j = S.map((Z, $) => ($ === P ? { ...Z, value: K.values } : Z)))
          : (j = [
              ...S,
              {
                name: K.group,
                value: K.values,
              },
            ]),
          D(j);
      } else {
        const P = S.filter((j) => j.name !== K.group);
        D(P);
      }
    };
  if (
    (Es(() => {
      F();
    }, [S]),
    !v)
  ) {
    console.log("Config is not defined", v);
    return;
  }
  return /* @__PURE__ */ te.jsxs("div", {
    className: A,
    children: [
      /* @__PURE__ */ te.jsxs("div", {
        className: "TorresFilter__container-header",
        children: [
          /* @__PURE__ */ te.jsx(eL, { size: "medium", text: "Filter" }),
          /* @__PURE__ */ te.jsx(ak, { icon: Jm.CLOSE }),
        ],
      }),
      v.category
        ? /* @__PURE__ */ te.jsxs("div", {
            className: "TorresFilter__container-item",
            children: [
              /* @__PURE__ */ te.jsx(Ef, {
                size: "small",
                text: v.category.label,
              }),
              /* @__PURE__ */ te.jsx(FT, {
                group: "category",
                items: v.category.items ?? [],
                multiple: v.category.type === Cf.ITEMS,
                onSelect: y,
                orientation: "vertical",
              }),
            ],
          })
        : null,
      v.color
        ? /* @__PURE__ */ te.jsxs("div", {
            className: "TorresFilter__container-item",
            children: [
              /* @__PURE__ */ te.jsx(Ef, {
                size: "medium",
                text: v.color.label,
              }),
              /* @__PURE__ */ te.jsx(nL, {
                group: "color",
                items: v.color.items ?? [],
                multiple: v.color.type === Cf.ITEMS,
                onSelect: y,
              }),
            ],
          })
        : null,
      v.size
        ? /* @__PURE__ */ te.jsxs("div", {
            className: "TorresFilter__container-item",
            children: [
              /* @__PURE__ */ te.jsx(Ef, {
                size: "medium",
                text: v.size.label,
              }),
              /* @__PURE__ */ te.jsx(tL, {
                group: "size",
                items: v.size.items ?? [],
                multiple: v.size.type === Cf.ITEMS,
                onSelect: y,
                wrapContent: !0,
              }),
            ],
          })
        : null,
      v.style
        ? /* @__PURE__ */ te.jsxs("div", {
            className: "TorresFilter__container-item",
            children: [
              /* @__PURE__ */ te.jsx(Ef, {
                size: "medium",
                text: v.style.label,
              }),
              /* @__PURE__ */ te.jsx(FT, {
                group: "style",
                items: v.style.items ?? [],
                multiple: v.style.type === Cf.ITEMS,
                onSelect: y,
                orientation: "vertical",
              }),
            ],
          })
        : null,
    ],
  });
};
export {
  XD as ArrowWithTailBottom,
  GD as ArrowWithTailLeft,
  KD as ArrowWithTailRight,
  qD as ArrowWithTailTop,
  PT as BUTTON_TYPES,
  Gm as BUTTON_VARIANTS,
  ek as CURRENCY_SYMBOLS,
  JD as Close,
  ZD as DIVIDER_VALUE_PRICE,
  Jm as ICONS_NAMES,
  tk as IMAGE_RATIO_ASPECTS,
  sL as TorresBannerOne,
  cL as TorresBannerTwo,
  uL as TorresButton,
  nk as TorresButtonChip,
  rk as TorresButtonColor,
  ak as TorresButtonIcon,
  fL as TorresCardProduct,
  dL as TorresFilter,
  tL as TorresGroupButtonChip,
  nL as TorresGroupButtonColor,
  FT as TorresGroupLinkNext,
  F0 as TorresImage,
  rR as TorresLink,
  ik as TorresLinkNext,
  oL as TorresParagraph,
  DT as TorresPrice,
  Ef as TorresSubtitle,
  ok as TorresTag,
  eL as TorresTitle,
};
//# sourceMappingURL=index.es.js.map
