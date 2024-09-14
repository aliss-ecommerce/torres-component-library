"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Lr = require("react");
function lk(v) {
  const T = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (v) {
    for (const S in v)
      if (S !== "default") {
        const D = Object.getOwnPropertyDescriptor(v, S);
        Object.defineProperty(
          T,
          S,
          D.get ? D : { enumerable: !0, get: () => v[S] },
        );
      }
  }
  return (T.default = v), Object.freeze(T);
}
const Qe = lk(Lr);
var O0 = { exports: {} },
  Ap = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var DT;
function uk() {
  if (DT) return Ap;
  DT = 1;
  var v = Lr,
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
 */ var kT;
function ok() {
  return (
    kT ||
      ((kT = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          var v = Lr,
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
                  R.$$typeof === P ||
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
            Nt,
            Zn,
            ee,
            Ne,
            fe,
            lt,
            ct;
          function kn() {}
          kn.__reactDisabledLog = !0;
          function er() {
            {
              if (yn === 0) {
                (Nt = console.log),
                  (Zn = console.info),
                  (ee = console.warn),
                  (Ne = console.error),
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
          function Ha() {
            {
              if ((yn--, yn === 0)) {
                var R = { configurable: !0, enumerable: !0, writable: !0 };
                Object.defineProperties(console, {
                  log: et({}, R, { value: Nt }),
                  info: et({}, R, { value: Zn }),
                  warn: et({}, R, { value: ee }),
                  error: et({}, R, { value: Ne }),
                  group: et({}, R, { value: fe }),
                  groupCollapsed: et({}, R, { value: lt }),
                  groupEnd: et({}, R, { value: ct }),
                });
              }
              yn < 0 &&
                ke(
                  "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
                );
            }
          }
          var un = kt.ReactCurrentDispatcher,
            qr;
          function $n(R, I, ne) {
            {
              if (qr === void 0)
                try {
                  throw Error();
                } catch (tt) {
                  var Te = tt.stack.trim().match(/\n( *(at )?)/);
                  qr = (Te && Te[1]) || "";
                }
              return (
                `
` +
                qr +
                R
              );
            }
          }
          var fr = !1,
            Va;
          {
            var dr = typeof WeakMap == "function" ? WeakMap : Map;
            Va = new dr();
          }
          function Jr(R, I) {
            if (!R || fr) return "";
            {
              var ne = Va.get(R);
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
                    Lt = Xe.length - 1,
                    Vt = En.length - 1;
                  Lt >= 1 && Vt >= 0 && Xe[Lt] !== En[Vt];

                )
                  Vt--;
                for (; Lt >= 1 && Vt >= 0; Lt--, Vt--)
                  if (Xe[Lt] !== En[Vt]) {
                    if (Lt !== 1 || Vt !== 1)
                      do
                        if ((Lt--, Vt--, Vt < 0 || Xe[Lt] !== En[Vt])) {
                          var vr =
                            `
` + Xe[Lt].replace(" at new ", " at ");
                          return (
                            R.displayName &&
                              vr.includes("<anonymous>") &&
                              (vr = vr.replace("<anonymous>", R.displayName)),
                            typeof R == "function" && Va.set(R, vr),
                            vr
                          );
                        }
                      while (Lt >= 1 && Vt >= 0);
                    break;
                  }
              }
            } finally {
              (fr = !1),
                (un.current = it),
                Ha(),
                (Error.prepareStackTrace = tt);
            }
            var zi = R ? R.displayName || R.name : "",
              pt = zi ? $n(zi) : "";
            return typeof R == "function" && Va.set(R, pt), pt;
          }
          function gn(R, I, ne) {
            return Jr(R, !1);
          }
          function Yn(R) {
            var I = R.prototype;
            return !!(I && I.isReactComponent);
          }
          function Nn(R, I, ne) {
            if (R == null) return "";
            if (typeof R == "function") return Jr(R, Yn(R));
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
                  return Nn(R.type, I, ne);
                case J: {
                  var Te = R,
                    tt = Te._payload,
                    it = Te._init;
                  try {
                    return Nn(it(tt), I, ne);
                  } catch {}
                }
              }
            return "";
          }
          var Ln = Object.prototype.hasOwnProperty,
            Wn = {},
            Zr = kt.ReactDebugCurrentFrame;
          function xa(R) {
            if (R) {
              var I = R._owner,
                ne = Nn(R.type, R._source, I ? I.type : null);
              Zr.setExtraStackFrame(ne);
            } else Zr.setExtraStackFrame(null);
          }
          function ii(R, I, ne, Te, tt) {
            {
              var it = Function.call.bind(Ln);
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
                  } catch (Lt) {
                    Xe = Lt;
                  }
                  Xe &&
                    !(Xe instanceof Error) &&
                    (xa(tt),
                    ke(
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      Te || "React class",
                      ne,
                      Me,
                      typeof Xe,
                    ),
                    xa(null)),
                    Xe instanceof Error &&
                      !(Xe.message in Wn) &&
                      ((Wn[Xe.message] = !0),
                      xa(tt),
                      ke("Failed %s type: %s", ne, Xe.message),
                      xa(null));
                }
            }
          }
          var Ba = Array.isArray;
          function wa(R) {
            return Ba(R);
          }
          function Mr(R) {
            {
              var I = typeof Symbol == "function" && Symbol.toStringTag,
                ne =
                  (I && R[Symbol.toStringTag]) ||
                  R.constructor.name ||
                  "Object";
              return ne;
            }
          }
          function Pa(R) {
            try {
              return Ur(R), !1;
            } catch {
              return !0;
            }
          }
          function Ur(R) {
            return "" + R;
          }
          function ba(R) {
            if (Pa(R))
              return (
                ke(
                  "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  Mr(R),
                ),
                Ur(R)
              );
          }
          var en = kt.ReactCurrentOwner,
            zr = { key: !0, ref: !0, __self: !0, __source: !0 },
            Mi,
            _a,
            ie;
          ie = {};
          function we(R) {
            if (Ln.call(R, "ref")) {
              var I = Object.getOwnPropertyDescriptor(R, "ref").get;
              if (I && I.isReactWarning) return !1;
            }
            return R.ref !== void 0;
          }
          function Ge(R) {
            if (Ln.call(R, "key")) {
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
                Mi ||
                  ((Mi = !0),
                  ke(
                    "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    I,
                  ));
              };
              (ne.isReactWarning = !0),
                Object.defineProperty(R, "key", { get: ne, configurable: !0 });
            }
          }
          function Sn(R, I) {
            {
              var ne = function () {
                _a ||
                  ((_a = !0),
                  ke(
                    "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    I,
                  ));
              };
              (ne.isReactWarning = !0),
                Object.defineProperty(R, "ref", { get: ne, configurable: !0 });
            }
          }
          var Xt = function (R, I, ne, Te, tt, it, Me) {
            var Xe = {
              $$typeof: T,
              type: R,
              key: I,
              ref: ne,
              props: Me,
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
              ne !== void 0 && (ba(ne), (Xe = "" + ne)),
                Ge(I) && (ba(I.key), (Xe = "" + I.key)),
                we(I) && ((En = I.ref), yt(I, tt));
              for (it in I)
                Ln.call(I, it) && !zr.hasOwnProperty(it) && (Me[it] = I[it]);
              if (R && R.defaultProps) {
                var Lt = R.defaultProps;
                for (it in Lt) Me[it] === void 0 && (Me[it] = Lt[it]);
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
            Ar = kt.ReactDebugCurrentFrame;
          function Rt(R) {
            if (R) {
              var I = R._owner,
                ne = Nn(R.type, R._source, I ? I.type : null);
              Ar.setExtraStackFrame(ne);
            } else Ar.setExtraStackFrame(null);
          }
          var _t;
          _t = !1;
          function eu(R) {
            return typeof R == "object" && R !== null && R.$$typeof === T;
          }
          function cl() {
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
          function tu(R) {
            return "";
          }
          var so = {};
          function Rs(R) {
            {
              var I = cl();
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
          function fl(R, I) {
            {
              if (!R._store || R._store.validated || R.key != null) return;
              R._store.validated = !0;
              var ne = Rs(I);
              if (so[ne]) return;
              so[ne] = !0;
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
          function nu(R, I) {
            {
              if (typeof R != "object") return;
              if (wa(R))
                for (var ne = 0; ne < R.length; ne++) {
                  var Te = R[ne];
                  eu(Te) && fl(Te, I);
                }
              else if (eu(R)) R._store && (R._store.validated = !0);
              else if (R) {
                var tt = at(R);
                if (typeof tt == "function" && tt !== R.entries)
                  for (var it = tt.call(R), Me; !(Me = it.next()).done; )
                    eu(Me.value) && fl(Me.value, I);
              }
            }
          }
          function dl(R) {
            {
              var I = R.type;
              if (I == null || typeof I == "string") return;
              var ne;
              if (typeof I == "function") ne = I.propTypes;
              else if (
                typeof I == "object" &&
                (I.$$typeof === P || I.$$typeof === $)
              )
                ne = I.propTypes;
              else return;
              if (ne) {
                var Te = Fe(I);
                ii(ne, R.props, "prop", Te, R);
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
          function ru(R) {
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
          var $a = {};
          function li(R, I, ne, Te, tt, it) {
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
                var En = tu();
                En ? (Xe += En) : (Xe += cl());
                var Lt;
                R === null
                  ? (Lt = "null")
                  : wa(R)
                    ? (Lt = "array")
                    : R !== void 0 && R.$$typeof === T
                      ? ((Lt = "<" + (Fe(R.type) || "Unknown") + " />"),
                        (Xe =
                          " Did you accidentally export a JSX literal instead of a component?"))
                      : (Lt = typeof R),
                  ke(
                    "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                    Lt,
                    Xe,
                  );
              }
              var Vt = pr(R, I, ne, tt, it);
              if (Vt == null) return Vt;
              if (Me) {
                var vr = I.children;
                if (vr !== void 0)
                  if (Te)
                    if (wa(vr)) {
                      for (var zi = 0; zi < vr.length; zi++) nu(vr[zi], R);
                      Object.freeze && Object.freeze(vr);
                    } else
                      ke(
                        "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                      );
                  else nu(vr, R);
              }
              if (Ln.call(I, "key")) {
                var pt = Fe(R),
                  Qn = Object.keys(I).filter(function (Ya) {
                    return Ya !== "key";
                  }),
                  Fr =
                    Qn.length > 0
                      ? "{key: someKey, " + Qn.join(": ..., ") + ": ...}"
                      : "{key: someKey}";
                if (!$a[pt + Fr]) {
                  var Ke =
                    Qn.length > 0 ? "{" + Qn.join(": ..., ") + ": ...}" : "{}";
                  ke(
                    `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                    Fr,
                    pt,
                    Ke,
                    pt,
                  ),
                    ($a[pt + Fr] = !0);
                }
              }
              return R === D ? ru(Vt) : dl(Vt), Vt;
            }
          }
          function jr(R, I, ne) {
            return li(R, I, ne, !0);
          }
          function Da(R, I, ne) {
            return li(R, I, ne, !1);
          }
          var Ui = Da,
            pl = jr;
          (jp.Fragment = D), (jp.jsx = Ui), (jp.jsxs = pl);
        })()),
    jp
  );
}
process.env.NODE_ENV === "production"
  ? (O0.exports = uk())
  : (O0.exports = ok());
var te = O0.exports;
const BT = ({ size: v, variant: T = "primary" }) => {
    const S = [
      "arrow-with-tail-left-icon",
      v ? `arrow-with-tail-left-icon--${v}` : "",
      T ? `arrow-with-tail-left-icon--${T}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    return te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: S,
      children: [
        te.jsx("path", {
          d: "M5 12H19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        te.jsx("path", {
          d: "M12 5L19 12L12 19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  },
  PT = ({ size: v, variant: T = "primary" }) => {
    const S = [
      "arrow-with-tail-bottom-icon",
      v ? `arrow-with-tail-bottom-icon--${v}` : "",
      T ? `arrow-with-tail-bottom-icon--${T}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    return te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: S,
      children: [
        te.jsx("path", {
          d: "M5 12H19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        te.jsx("path", {
          d: "M12 5L19 12L12 19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  },
  $T = ({ size: v, variant: T = "primary" }) => {
    const S = [
      "arrow-with-tail-right-icon",
      v ? `arrow-with-tail-right-icon--${v}` : "",
      T ? `arrow-with-tail-right-icon--${T}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    return te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: S,
      children: [
        te.jsx("path", {
          d: "M5 12H19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        te.jsx("path", {
          d: "M12 5L19 12L12 19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  };
function YT(v) {
  var T,
    S,
    D = "";
  if (typeof v == "string" || typeof v == "number") D += v;
  else if (typeof v == "object")
    if (Array.isArray(v)) {
      var A = v.length;
      for (T = 0; T < A; T++)
        v[T] && (S = YT(v[T])) && (D && (D += " "), (D += S));
    } else for (S in v) v[S] && (D && (D += " "), (D += S));
  return D;
}
function Or() {
  for (var v, T, S = 0, D = "", A = arguments.length; S < A; S++)
    (v = arguments[S]) && (T = YT(v)) && (D && (D += " "), (D += T));
  return D;
}
const WT = ({ size: v, variant: T = "primary" }) => {
    const S = Or("arrow-with-tail-top-icon", {
      [`arrow-with-tail-top-icon--${T}`]: T,
      [`arrow-with-tail-top-icon--${v}`]: v,
    });
    return te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: S,
      children: [
        te.jsx("path", {
          d: "M5 12H19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        te.jsx("path", {
          d: "M12 5L19 12L12 19",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  },
  QT = ({ size: v, variant: T = "primary" }) => {
    const S = Or("close-icon", {
      [`close-icon--${T}`]: T,
      [`close-icon--${v}`]: v,
    });
    return te.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      className: S,
      children: [
        te.jsx("path", {
          d: "M18 6L6 18",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        te.jsx("path", {
          d: "M6 6L18 18",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  },
  Ts = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ArrowWithTailBottom: PT,
        ArrowWithTailLeft: BT,
        ArrowWithTailRight: $T,
        ArrowWithTailTop: WT,
        Close: QT,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
var Hp = ((v) => (
    (v.EMPTY = "Empty"),
    (v.ARROW_LEFT_TAIL = "ArrowWithTailLeft"),
    (v.ARROW_BOTTOM_TAIL = "ArrowWithTailBottom"),
    (v.ARROW_RIGHT_TAIL = "ArrowWithTailRight"),
    (v.ARROW_TOP_TAIL = "ArrowWithTailTop"),
    (v.CLOSE = "Close"),
    v
  ))(Hp || {}),
  H0 = ((v) => (
    (v.SUBMIT = "submit"), (v.BUTTON = "button"), (v.RESET = "reset"), v
  ))(H0 || {}),
  Fp = ((v) => (
    (v.PRIMARY = "primary"),
    (v.SECONDARY = "secondary"),
    (v.TERTIARY = "tertiary"),
    v
  ))(Fp || {});
const IT = 100,
  GT = { PEN: "PEN", USD: "USD", EUR: "EUR" };
var XT = ((v) => (
  (v.CARD = "71/94"), (v.BANNER_ONE = "326/395"), (v.BANNER_TWO = "652/379"), v
))(XT || {});
const sk = ({
    text: v,
    iconAfter: T,
    iconBefore: S,
    action: D,
    type: A = H0.BUTTON,
    variant: F = Fp.PRIMARY,
    isDisabled: y = !1,
  }) => {
    const K = S && Ts[S],
      P = T && Ts[T],
      j = Or("torres-button", { [`torres-button--${F}`]: !!F }),
      Z = F === Fp.PRIMARY ? "secondary" : "primary";
    return te.jsxs("button", {
      type: A,
      onClick: D,
      className: j,
      disabled: y,
      children: [
        K && te.jsx(K, { variant: Z }),
        v,
        P && te.jsx(P, { variant: Z }),
      ],
    });
  },
  KT = ({
    text: v,
    action: T,
    isDisabled: S,
    iconBefore: D,
    iconAfter: A,
    isSelected: F,
  }) => {
    const y = D && Ts[D],
      K = A && Ts[A],
      P = Or("torres-button-chip", { "torres-button-chip--selected": F });
    return te.jsxs("button", {
      type: "button",
      onClick: T,
      className: P,
      disabled: S,
      children: [
        y && te.jsx(y, { variant: "secondary" }),
        v,
        K && te.jsx(K, { variant: "secondary" }),
      ],
    });
  },
  qT = ({ id: v, color: T, name: S, action: D, isSelected: A = !1 }) => {
    const F = Or("torres-button-color", { "torres-button-color--selected": A });
    return te.jsx("button", {
      id: String(v),
      onClick: D,
      name: S,
      className: F,
      children: te.jsx("span", { style: { backgroundColor: T } }),
    });
  },
  JT = ({ icon: v, action: T, isDisabled: S, variant: D = Fp.PRIMARY }) => {
    const A = v && Ts[v],
      F = Or("torres-button-icon", {
        [`torres-button-icon--${D}`]: D,
        "torres-button-icon--disabled": S,
      });
    return te.jsx("button", {
      type: "button",
      onClick: T,
      className: F,
      disabled: S,
      children: A && te.jsx(A, { variant: "primary" }),
    });
  },
  ZT = ({
    isDisabled: v = !1,
    text: T,
    variant: S = "primary",
    iconAfter: D = Hp.EMPTY,
    action: A,
    isActionDisabled: F = !1,
    cursorPointerInDisabled: y = !1,
  }) => {
    const K = D && Ts[D];
    return v
      ? te.jsx("span", {
          onClick: F ? A : void 0,
          className: Or("torres-link-next--disabled", {
            "torres-link-next--disabled--pointer": y,
          }),
          children: T,
        })
      : te.jsxs("button", {
          onClick: A,
          className: `torres-link-next torres-link-next--${S}`,
          children: [T, K && S === "secondary" && te.jsx(K, {})],
        });
  },
  ck = (v) => v / IT,
  fk = (v, T, S = "es-PE") => {
    const D = ck(v);
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
  M0 = ({ value: v, currency: T = GT.PEN, through: S = !1 }) => {
    const D = Or("torres-price__value", { "torres-price__value--through": S });
    return te.jsx("div", {
      className: "torres-price",
      children: te.jsx("span", { className: D, children: fk(v, T) }),
    });
  },
  qm = ({ url: v, alt: T, aspectRatio: S }) => {
    const [D, A] = S.split("/").map(Number);
    return te.jsx("div", {
      className: "torres-image",
      style: { paddingBottom: `${(A / D) * 100}%` },
      children: te.jsx("img", {
        src: v,
        alt: T,
        className: "torres-image__img",
      }),
    });
  },
  eR = ({ text: v }) =>
    te.jsx("span", { className: "torres-tag", children: v });
var Ta = {},
  Qm = { exports: {} },
  D0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var NT;
function dk() {
  return (
    NT ||
      ((NT = 1),
      (function (v) {
        function T(ee, Ne) {
          var fe = ee.length;
          ee.push(Ne);
          e: for (; 0 < fe; ) {
            var lt = (fe - 1) >>> 1,
              ct = ee[lt];
            if (0 < A(ct, Ne)) (ee[lt] = Ne), (ee[fe] = ct), (fe = lt);
            else break e;
          }
        }
        function S(ee) {
          return ee.length === 0 ? null : ee[0];
        }
        function D(ee) {
          if (ee.length === 0) return null;
          var Ne = ee[0],
            fe = ee.pop();
          if (fe !== Ne) {
            ee[0] = fe;
            e: for (var lt = 0, ct = ee.length, kn = ct >>> 1; lt < kn; ) {
              var er = 2 * (lt + 1) - 1,
                Ha = ee[er],
                un = er + 1,
                qr = ee[un];
              if (0 > A(Ha, fe))
                un < ct && 0 > A(qr, Ha)
                  ? ((ee[lt] = qr), (ee[un] = fe), (lt = un))
                  : ((ee[lt] = Ha), (ee[er] = fe), (lt = er));
              else if (un < ct && 0 > A(qr, fe))
                (ee[lt] = qr), (ee[un] = fe), (lt = un);
              else break e;
            }
          }
          return Ne;
        }
        function A(ee, Ne) {
          var fe = ee.sortIndex - Ne.sortIndex;
          return fe !== 0 ? fe : ee.id - Ne.id;
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
          for (var Ne = S(j); Ne !== null; ) {
            if (Ne.callback === null) D(j);
            else if (Ne.startTime <= ee)
              D(j), (Ne.sortIndex = Ne.expirationTime), T(P, Ne);
            else break;
            Ne = S(j);
          }
        }
        function je(ee) {
          if (((Ie = !1), xe(ee), !_e))
            if (S(P) !== null) (_e = !0), Nt(We);
            else {
              var Ne = S(j);
              Ne !== null && Zn(je, Ne.startTime - ee);
            }
        }
        function We(ee, Ne) {
          (_e = !1), Ie && ((Ie = !1), kt(Gt), (Gt = -1)), (oe = !0);
          var fe = J;
          try {
            for (
              xe(Ne), $ = S(P);
              $ !== null && (!($.expirationTime > Ne) || (ee && !dt()));

            ) {
              var lt = $.callback;
              if (typeof lt == "function") {
                ($.callback = null), (J = $.priorityLevel);
                var ct = lt($.expirationTime <= Ne);
                (Ne = v.unstable_now()),
                  typeof ct == "function"
                    ? ($.callback = ct)
                    : $ === S(P) && D(P),
                  xe(Ne);
              } else D(P);
              $ = S(P);
            }
            if ($ !== null) var kn = !0;
            else {
              var er = S(j);
              er !== null && Zn(je, er.startTime - Ne), (kn = !1);
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
            var Ne = !0;
            try {
              Ne = $e(!0, ee);
            } finally {
              Ne ? Fe() : ((mt = !1), ($e = null));
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
        function Nt(ee) {
          ($e = ee), mt || ((mt = !0), Fe());
        }
        function Zn(ee, Ne) {
          Gt = at(function () {
            ee(v.unstable_now());
          }, Ne);
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
            _e || oe || ((_e = !0), Nt(We));
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
                var Ne = 3;
                break;
              default:
                Ne = J;
            }
            var fe = J;
            J = Ne;
            try {
              return ee();
            } finally {
              J = fe;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (ee, Ne) {
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
              return Ne();
            } finally {
              J = fe;
            }
          }),
          (v.unstable_scheduleCallback = function (ee, Ne, fe) {
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
                callback: Ne,
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
                  _e || oe || ((_e = !0), Nt(We))),
              ee
            );
          }),
          (v.unstable_shouldYield = dt),
          (v.unstable_wrapCallback = function (ee) {
            var Ne = J;
            return function () {
              var fe = J;
              J = Ne;
              try {
                return ee.apply(this, arguments);
              } finally {
                J = fe;
              }
            };
          });
      })(D0)),
    D0
  );
}
var k0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var LT;
function pk() {
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
                  Ar = ie[bt];
                if (j(pr, we) < 0)
                  bt < Ht && j(Ar, pr) < 0
                    ? ((ie[yt] = Ar), (ie[bt] = we), (yt = bt))
                    : ((ie[yt] = pr), (ie[Xt] = we), (yt = Xt));
                else if (bt < Ht && j(Ar, we) < 0)
                  (ie[yt] = Ar), (ie[bt] = we), (yt = bt);
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
              Nt = !1,
              Zn = !1,
              ee = typeof setTimeout == "function" ? setTimeout : null,
              Ne = typeof clearTimeout == "function" ? clearTimeout : null,
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
              if (((Zn = !1), lt(ie), !Nt))
                if (F(wt) !== null) (Nt = !0), ba(kn);
                else {
                  var we = F(dt);
                  we !== null && en(ct, we.startTime - ie);
                }
            }
            function kn(ie, we) {
              (Nt = !1), Zn && ((Zn = !1), zr()), (yn = !0);
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
                Fe !== null && !T && !(Fe.expirationTime > Ge && (!ie || xa()));

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
            function Ha(ie, we) {
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
            function qr(ie) {
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
                      (Zn ? zr() : (Zn = !0), en(ct, Ht - yt)))
                  : ((bt.sortIndex = pr),
                    A(wt, bt),
                    !Nt && !yn && ((Nt = !0), ba(kn))),
                bt
              );
            }
            function fr() {}
            function Va() {
              !Nt && !yn && ((Nt = !0), ba(kn));
            }
            function dr() {
              return F(wt);
            }
            function Jr(ie) {
              ie.callback = null;
            }
            function gn() {
              return et;
            }
            var Yn = !1,
              Nn = null,
              Ln = -1,
              Wn = D,
              Zr = -1;
            function xa() {
              var ie = v.unstable_now() - Zr;
              return !(ie < Wn);
            }
            function ii() {}
            function Ba(ie) {
              if (ie < 0 || ie > 125) {
                console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                );
                return;
              }
              ie > 0 ? (Wn = Math.floor(1e3 / ie)) : (Wn = D);
            }
            var wa = function () {
                if (Nn !== null) {
                  var ie = v.unstable_now();
                  Zr = ie;
                  var we = !0,
                    Ge = !0;
                  try {
                    Ge = Nn(we, ie);
                  } finally {
                    Ge ? Mr() : ((Yn = !1), (Nn = null));
                  }
                } else Yn = !1;
              },
              Mr;
            if (typeof fe == "function")
              Mr = function () {
                fe(wa);
              };
            else if (typeof MessageChannel < "u") {
              var Pa = new MessageChannel(),
                Ur = Pa.port2;
              (Pa.port1.onmessage = wa),
                (Mr = function () {
                  Ur.postMessage(null);
                });
            } else
              Mr = function () {
                ee(wa, 0);
              };
            function ba(ie) {
              (Nn = ie), Yn || ((Yn = !0), Mr());
            }
            function en(ie, we) {
              Ln = ee(function () {
                ie(v.unstable_now());
              }, we);
            }
            function zr() {
              Ne(Ln), (Ln = -1);
            }
            var Mi = ii,
              _a = null;
            (v.unstable_IdlePriority = _e),
              (v.unstable_ImmediatePriority = Z),
              (v.unstable_LowPriority = oe),
              (v.unstable_NormalPriority = J),
              (v.unstable_Profiling = _a),
              (v.unstable_UserBlockingPriority = $),
              (v.unstable_cancelCallback = Jr),
              (v.unstable_continueExecution = Va),
              (v.unstable_forceFrameRate = Ba),
              (v.unstable_getCurrentPriorityLevel = gn),
              (v.unstable_getFirstCallbackNode = dr),
              (v.unstable_next = un),
              (v.unstable_pauseExecution = fr),
              (v.unstable_requestPaint = Mi),
              (v.unstable_runWithPriority = Ha),
              (v.unstable_scheduleCallback = $n),
              (v.unstable_shouldYield = xa),
              (v.unstable_wrapCallback = qr),
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                  "function" &&
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                  new Error(),
                );
          })();
      })(k0)),
    k0
  );
}
var OT;
function tR() {
  return (
    OT ||
      ((OT = 1),
      process.env.NODE_ENV === "production"
        ? (Qm.exports = dk())
        : (Qm.exports = pk())),
    Qm.exports
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
 */ var MT;
function vk() {
  if (MT) return Ta;
  MT = 1;
  var v = Lr,
    T = tR();
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
  var D = new Set(),
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
    Nt = Symbol.for("react.lazy"),
    Zn = Symbol.for("react.offscreen"),
    ee = Symbol.iterator;
  function Ne(n) {
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
  function Ha(n) {
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
        case Nt:
          (r = n._payload), (n = n._init);
          try {
            return un(n(r));
          } catch {}
      }
    return null;
  }
  function qr(n) {
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
  function Va(n) {
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
    n._valueTracker || (n._valueTracker = Va(n));
  }
  function Jr(n) {
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
  function Nn(n, r) {
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
  function Ln(n, r) {
    (r = r.checked), r != null && xe(n, "checked", r, !1);
  }
  function Wn(n, r) {
    Ln(n, r);
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
      ? xa(n, r.type, l)
      : r.hasOwnProperty("defaultValue") && xa(n, r.type, $n(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (n.defaultChecked = !!r.defaultChecked);
  }
  function Zr(n, r, l) {
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
  function xa(n, r, l) {
    (r !== "number" || gn(n.ownerDocument) !== n) &&
      (l == null
        ? (n.defaultValue = "" + n._wrapperState.initialValue)
        : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ii = Array.isArray;
  function Ba(n, r, l, o) {
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
  function wa(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(S(91));
    return fe({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue,
    });
  }
  function Mr(n, r) {
    var l = r.value;
    if (l == null) {
      if (((l = r.children), (r = r.defaultValue), l != null)) {
        if (r != null) throw Error(S(92));
        if (ii(l)) {
          if (1 < l.length) throw Error(S(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), (l = r);
    }
    n._wrapperState = { initialValue: $n(l) };
  }
  function Pa(n, r) {
    var l = $n(r.value),
      o = $n(r.defaultValue);
    l != null &&
      ((l = "" + l),
      l !== n.value && (n.value = l),
      r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)),
      o != null && (n.defaultValue = "" + o);
  }
  function Ur(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue &&
      r !== "" &&
      r !== null &&
      (n.value = r);
  }
  function ba(n) {
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
      ? ba(r)
      : n === "http://www.w3.org/2000/svg" && r === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : n;
  }
  var zr,
    Mi = (function (n) {
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
          zr = zr || document.createElement("div"),
            zr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = zr.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild);
        for (; r.firstChild; ) n.appendChild(r.firstChild);
      }
    });
  function _a(n, r) {
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
  var Ar = null,
    Rt = null,
    _t = null;
  function eu(n) {
    if ((n = Oo(n))) {
      if (typeof Ar != "function") throw Error(S(280));
      var r = n.stateNode;
      r && ((r = be(r)), Ar(n.stateNode, n.type, r));
    }
  }
  function cl(n) {
    Rt ? (_t ? _t.push(n) : (_t = [n])) : (Rt = n);
  }
  function tu() {
    if (Rt) {
      var n = Rt,
        r = _t;
      if (((_t = Rt = null), eu(n), r)) for (n = 0; n < r.length; n++) eu(r[n]);
    }
  }
  function so(n, r) {
    return n(r);
  }
  function Rs() {}
  var fl = !1;
  function nu(n, r, l) {
    if (fl) return n(r, l);
    fl = !0;
    try {
      return so(n, r, l);
    } finally {
      (fl = !1), (Rt !== null || _t !== null) && (Rs(), tu());
    }
  }
  function dl(n, r) {
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
  var ru = !1;
  if (K)
    try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function () {
          ru = !0;
        },
      }),
        window.addEventListener("test", $a, $a),
        window.removeEventListener("test", $a, $a);
    } catch {
      ru = !1;
    }
  function li(n, r, l, o, c, d, m, C, x) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var jr = !1,
    Da = null,
    Ui = !1,
    pl = null,
    R = {
      onError: function (n) {
        (jr = !0), (Da = n);
      },
    };
  function I(n, r, l, o, c, d, m, C, x) {
    (jr = !1), (Da = null), li.apply(R, arguments);
  }
  function ne(n, r, l, o, c, d, m, C, x) {
    if ((I.apply(this, arguments), jr)) {
      if (jr) {
        var U = Da;
        (jr = !1), (Da = null);
      } else throw Error(S(198));
      Ui || ((Ui = !0), (pl = U));
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
  var Lt = T.unstable_scheduleCallback,
    Vt = T.unstable_cancelCallback,
    vr = T.unstable_shouldYield,
    zi = T.unstable_requestPaint,
    pt = T.unstable_now,
    Qn = T.unstable_getCurrentPriorityLevel,
    Fr = T.unstable_ImmediatePriority,
    Ke = T.unstable_UserBlockingPriority,
    Ya = T.unstable_NormalPriority,
    $p = T.unstable_LowPriority,
    wf = T.unstable_IdlePriority,
    co = null,
    ka = null;
  function Yp(n) {
    if (ka && typeof ka.onCommitFiberRoot == "function")
      try {
        ka.onCommitFiberRoot(co, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var ea = Math.clz32 ? Math.clz32 : ey,
    Wp = Math.log,
    Qp = Math.LN2;
  function ey(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((Wp(n) / Qp) | 0)) | 0;
  }
  var xs = 64,
    au = 4194304;
  function vl(n) {
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
  function Na(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      c = n.suspendedLanes,
      d = n.pingedLanes,
      m = l & 268435455;
    if (m !== 0) {
      var C = m & ~c;
      C !== 0 ? (o = vl(C)) : ((d &= m), d !== 0 && (o = vl(d)));
    } else (m = l & ~c), m !== 0 ? (o = vl(m)) : d !== 0 && (o = vl(d));
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
        (l = 31 - ea(r)), (c = 1 << l), (o |= n[l]), (r &= ~c);
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
  function ws(n, r) {
    for (
      var l = n.suspendedLanes,
        o = n.pingedLanes,
        c = n.expirationTimes,
        d = n.pendingLanes;
      0 < d;

    ) {
      var m = 31 - ea(d),
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
  function bs() {
    var n = xs;
    return (xs <<= 1), !(xs & 4194240) && (xs = 64), n;
  }
  function Df(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function hl(n, r, l) {
    (n.pendingLanes |= r),
      r !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (r = 31 - ea(r)),
      (n[r] = l);
  }
  function ty(n, r) {
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
      var c = 31 - ea(l),
        d = 1 << c;
      (r[c] = 0), (o[c] = -1), (n[c] = -1), (l &= ~d);
    }
  }
  function fo(n, r) {
    var l = (n.entangledLanes |= r);
    for (n = n.entanglements; l; ) {
      var o = 31 - ea(l),
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
  var Ip,
    _s,
    St,
    Gp,
    Nf,
    Be = !1,
    po = [],
    tn = null,
    ta = null,
    na = null,
    vo = new Map(),
    on = new Map(),
    Et = [],
    ny =
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
        ta = null;
        break;
      case "mouseover":
      case "mouseout":
        na = null;
        break;
      case "pointerover":
      case "pointerout":
        vo.delete(r.pointerId);
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
        r !== null && ((r = Oo(r)), r !== null && _s(r)),
        n)
      : ((n.eventSystemFlags |= o),
        (r = n.targetContainers),
        c !== null && r.indexOf(c) === -1 && r.push(c),
        n);
  }
  function Ai(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return (tn = In(tn, n, r, l, o, c)), !0;
      case "dragenter":
        return (ta = In(ta, n, r, l, o, c)), !0;
      case "mouseover":
        return (na = In(na, n, r, l, o, c)), !0;
      case "pointerover":
        var d = c.pointerId;
        return vo.set(d, In(vo.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return (
          (d = c.pointerId), on.set(d, In(on.get(d) || null, n, r, l, o, c)), !0
        );
    }
    return !1;
  }
  function Xp(n) {
    var r = aa(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (((r = l.tag), r === 13)) {
          if (((r = tt(l)), r !== null)) {
            (n.blockedOn = r),
              Nf(n.priority, function () {
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
  function iu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Ns(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        (pr = o), l.target.dispatchEvent(o), (pr = null);
      } else return (r = Oo(l)), r !== null && _s(r), (n.blockedOn = l), !1;
      r.shift();
    }
    return !0;
  }
  function Lf(n, r, l) {
    iu(n) && l.delete(r);
  }
  function Kp() {
    (Be = !1),
      tn !== null && iu(tn) && (tn = null),
      ta !== null && iu(ta) && (ta = null),
      na !== null && iu(na) && (na = null),
      vo.forEach(Lf),
      on.forEach(Lf);
  }
  function ho(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      Be ||
        ((Be = !0),
        T.unstable_scheduleCallback(T.unstable_NormalPriority, Kp)));
  }
  function mo(n) {
    function r(c) {
      return ho(c, n);
    }
    if (0 < po.length) {
      ho(po[0], n);
      for (var l = 1; l < po.length; l++) {
        var o = po[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (
      tn !== null && ho(tn, n),
        ta !== null && ho(ta, n),
        na !== null && ho(na, n),
        vo.forEach(r),
        on.forEach(r),
        l = 0;
      l < Et.length;
      l++
    )
      (o = Et[l]), o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Et.length && ((l = Et[0]), l.blockedOn === null); )
      Xp(l), l.blockedOn === null && Et.shift();
  }
  var lu = je.ReactCurrentBatchConfig,
    ml = !0;
  function qp(n, r, l, o) {
    var c = gt,
      d = lu.transition;
    lu.transition = null;
    try {
      (gt = 1), ks(n, r, l, o);
    } finally {
      (gt = c), (lu.transition = d);
    }
  }
  function Ds(n, r, l, o) {
    var c = gt,
      d = lu.transition;
    lu.transition = null;
    try {
      (gt = 4), ks(n, r, l, o);
    } finally {
      (gt = c), (lu.transition = d);
    }
  }
  function ks(n, r, l, o) {
    if (ml) {
      var c = Ns(n, r, l, o);
      if (c === null) Ps(n, r, o, yo, l), La(n, o);
      else if (Ai(c, n, r, l, o)) o.stopPropagation();
      else if ((La(n, o), r & 4 && -1 < ny.indexOf(n))) {
        for (; c !== null; ) {
          var d = Oo(c);
          if (
            (d !== null && Ip(d),
            (d = Ns(n, r, l, o)),
            d === null && Ps(n, r, o, yo, l),
            d === c)
          )
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Ps(n, r, o, null, l);
    }
  }
  var yo = null;
  function Ns(n, r, l, o) {
    if (((yo = null), (n = bt(o)), (n = aa(n)), n !== null))
      if (((r = Te(n)), r === null)) n = null;
      else if (((l = r.tag), l === 13)) {
        if (((n = tt(r)), n !== null)) return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else r !== n && (n = null);
    return (yo = n), null;
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
          case Fr:
            return 1;
          case Ke:
            return 4;
          case Ya:
          case $p:
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
  var ui = null,
    go = null,
    So = null;
  function Mf() {
    if (So) return So;
    var n,
      r = go,
      l = r.length,
      o,
      c = "value" in ui ? ui.value : ui.textContent,
      d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++);
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++);
    return (So = c.slice(n, 1 < o ? 1 - o : void 0));
  }
  function uu(n) {
    var r = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && r === 13 && (n = 13))
        : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function Eo() {
    return !0;
  }
  function Jp() {
    return !1;
  }
  function Hr(n) {
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
          ? Eo
          : Jp),
        (this.isPropagationStopped = Jp),
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
            (this.isDefaultPrevented = Eo));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Eo));
        },
        persist: function () {},
        isPersistent: Eo,
      }),
      r
    );
  }
  var ji = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ls = Hr(ji),
    ou = fe({}, ji, { view: 0, detail: 0 }),
    Zp = Hr(ou),
    Os,
    Uf,
    Co,
    Cn = fe({}, ou, {
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
          : (n !== Co &&
              (Co && n.type === "mousemove"
                ? ((Os = n.screenX - Co.screenX), (Uf = n.screenY - Co.screenY))
                : (Uf = Os = 0),
              (Co = n)),
            Os);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Uf;
      },
    }),
    Ms = Hr(Cn),
    ev = fe({}, Cn, { dataTransfer: 0 }),
    tv = Hr(ev),
    ry = fe({}, ou, { relatedTarget: 0 }),
    Fi = Hr(ry),
    zf = fe({}, ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nv = Hr(zf),
    ay = fe({}, ji, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    iy = Hr(ay),
    ly = fe({}, ji, { data: 0 }),
    Af = Hr(ly),
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
    rv = {
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
    av = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function iv(n) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(n)
      : (n = av[n])
        ? !!r[n]
        : !1;
  }
  function Ff() {
    return iv;
  }
  var oi = fe({}, ou, {
      key: function (n) {
        if (n.key) {
          var r = jf[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress"
          ? ((n = uu(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? rv[n.keyCode] || "Unidentified"
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
        return n.type === "keypress" ? uu(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? uu(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    uy = Hr(oi),
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
    Us = Hr(Hf),
    Vf = fe({}, ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ff,
    }),
    oy = Hr(Vf),
    zs = fe({}, ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lv = Hr(zs),
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
    si = Hr(hr),
    nn = [9, 13, 27, 32],
    Oa = K && "CompositionEvent" in window,
    yl = null;
  K && "documentMode" in document && (yl = document.documentMode);
  var As = K && "TextEvent" in window && !yl,
    uv = K && (!Oa || (yl && 8 < yl && 11 >= yl)),
    su = " ",
    ov = !1;
  function sv(n, r) {
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
  function js(n) {
    return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
  }
  var cu = !1;
  function sy(n, r) {
    switch (n) {
      case "compositionend":
        return js(r);
      case "keypress":
        return r.which !== 32 ? null : ((ov = !0), su);
      case "textInput":
        return (n = r.data), n === su && ov ? null : n;
      default:
        return null;
    }
  }
  function cy(n, r) {
    if (cu)
      return n === "compositionend" || (!Oa && sv(n, r))
        ? ((n = Mf()), (So = go = ui = null), (cu = !1), n)
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
        return uv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var cv = {
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
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!cv[n.type] : r === "textarea";
  }
  function dv(n, r, l, o) {
    cl(o),
      (r = ko(r, "onChange")),
      0 < r.length &&
        ((l = new Ls("onChange", "change", null, l, o)),
        n.push({ event: l, listeners: r }));
  }
  var To = null,
    fu = null;
  function du(n) {
    Bs(n, 0);
  }
  function pu(n) {
    var r = hu(n);
    if (Jr(r)) return n;
  }
  function pv(n, r) {
    if (n === "change") return r;
  }
  var Bf = !1;
  if (K) {
    var Pf;
    if (K) {
      var $f = "oninput" in document;
      if (!$f) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"),
          ($f = typeof vv.oninput == "function");
      }
      Pf = $f;
    } else Pf = !1;
    Bf = Pf && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    To && (To.detachEvent("onpropertychange", mv), (fu = To = null));
  }
  function mv(n) {
    if (n.propertyName === "value" && pu(fu)) {
      var r = [];
      dv(r, fu, n, bt(n)), nu(du, r);
    }
  }
  function fy(n, r, l) {
    n === "focusin"
      ? (hv(), (To = r), (fu = l), To.attachEvent("onpropertychange", mv))
      : n === "focusout" && hv();
  }
  function dy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return pu(fu);
  }
  function py(n, r) {
    if (n === "click") return pu(r);
  }
  function yv(n, r) {
    if (n === "input" || n === "change") return pu(r);
  }
  function vy(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var ra = typeof Object.is == "function" ? Object.is : vy;
  function Ro(n, r) {
    if (ra(n, r)) return !0;
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
      if (!P.call(r, c) || !ra(n[c], r[c])) return !1;
    }
    return !0;
  }
  function gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Sv(n, r) {
    var l = gv(n);
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
      l = gv(l);
    }
  }
  function Ev(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? Ev(n, r.parentNode)
            : "contains" in n
              ? n.contains(r)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function Fs() {
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
  function ci(n) {
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
  function Hs(n) {
    var r = Fs(),
      l = n.focusedElem,
      o = n.selectionRange;
    if (
      r !== l &&
      l &&
      l.ownerDocument &&
      Ev(l.ownerDocument.documentElement, l)
    ) {
      if (o !== null && ci(l)) {
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
            (c = Sv(l, d));
          var m = Sv(l, o);
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
  var Cv = K && "documentMode" in document && 11 >= document.documentMode,
    Ma = null,
    Yf = null,
    xo = null,
    Wf = !1;
  function Tv(n, r, l) {
    var o =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Wf ||
      Ma == null ||
      Ma !== gn(o) ||
      ((o = Ma),
      "selectionStart" in o && ci(o)
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
      (xo && Ro(xo, o)) ||
        ((xo = o),
        (o = ko(Yf, "onSelect")),
        0 < o.length &&
          ((r = new Ls("onSelect", "select", null, r, l)),
          n.push({ event: r, listeners: o }),
          (r.target = Ma))));
  }
  function Vs(n, r) {
    var l = {};
    return (
      (l[n.toLowerCase()] = r.toLowerCase()),
      (l["Webkit" + n] = "webkit" + r),
      (l["Moz" + n] = "moz" + r),
      l
    );
  }
  var gl = {
      animationend: Vs("Animation", "AnimationEnd"),
      animationiteration: Vs("Animation", "AnimationIteration"),
      animationstart: Vs("Animation", "AnimationStart"),
      transitionend: Vs("Transition", "TransitionEnd"),
    },
    Qf = {},
    If = {};
  K &&
    ((If = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete gl.animationend.animation,
      delete gl.animationiteration.animation,
      delete gl.animationstart.animation),
    "TransitionEvent" in window || delete gl.transitionend.transition);
  function Tn(n) {
    if (Qf[n]) return Qf[n];
    if (!gl[n]) return n;
    var r = gl[n],
      l;
    for (l in r) if (r.hasOwnProperty(l) && l in If) return (Qf[n] = r[l]);
    return n;
  }
  var Gf = Tn("animationend"),
    Rv = Tn("animationiteration"),
    xv = Tn("animationstart"),
    wv = Tn("transitionend"),
    bv = new Map(),
    _v =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function fi(n, r) {
    bv.set(n, r), F(r, [n]);
  }
  for (var wo = 0; wo < _v.length; wo++) {
    var Sl = _v[wo],
      hy = Sl.toLowerCase(),
      bo = Sl[0].toUpperCase() + Sl.slice(1);
    fi(hy, "on" + bo);
  }
  fi(Gf, "onAnimationEnd"),
    fi(Rv, "onAnimationIteration"),
    fi(xv, "onAnimationStart"),
    fi("dblclick", "onDoubleClick"),
    fi("focusin", "onFocus"),
    fi("focusout", "onBlur"),
    fi(wv, "onTransitionEnd"),
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
  var _o =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    my = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(_o),
    );
  function Dv(n, r, l) {
    var o = n.type || "unknown-event";
    (n.currentTarget = l), ne(o, r, void 0, n), (n.currentTarget = null);
  }
  function Bs(n, r) {
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
            Dv(c, C, U), (d = x);
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
            Dv(c, C, U), (d = x);
          }
      }
    }
    if (Ui) throw ((n = pl), (Ui = !1), (pl = null), n);
  }
  function xt(n, r) {
    var l = r[td];
    l === void 0 && (l = r[td] = new Set());
    var o = n + "__bubble";
    l.has(o) || (kv(r, n, 2, !1), l.add(o));
  }
  function Hi(n, r, l) {
    var o = 0;
    r && (o |= 4), kv(l, n, o, r);
  }
  var di = "_reactListening" + Math.random().toString(36).slice(2);
  function vu(n) {
    if (!n[di]) {
      (n[di] = !0),
        D.forEach(function (l) {
          l !== "selectionchange" && (my.has(l) || Hi(l, !1, n), Hi(l, !0, n));
        });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[di] || ((r[di] = !0), Hi("selectionchange", !1, r));
    }
  }
  function kv(n, r, l, o) {
    switch (Of(r)) {
      case 1:
        var c = qp;
        break;
      case 4:
        c = Ds;
        break;
      default:
        c = ks;
    }
    (l = c.bind(null, r, l, n)),
      (c = void 0),
      !ru ||
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
  function Ps(n, r, l, o, c) {
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
            if (((m = aa(C)), m === null)) return;
            if (((x = m.tag), x === 5 || x === 6)) {
              o = d = m;
              continue e;
            }
            C = C.parentNode;
          }
        }
        o = o.return;
      }
    nu(function () {
      var U = d,
        Q = bt(l),
        G = [];
      e: {
        var W = bv.get(n);
        if (W !== void 0) {
          var se = Ls,
            ve = n;
          switch (n) {
            case "keypress":
              if (uu(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = uy;
              break;
            case "focusin":
              (ve = "focus"), (se = Fi);
              break;
            case "focusout":
              (ve = "blur"), (se = Fi);
              break;
            case "beforeblur":
            case "afterblur":
              se = Fi;
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
              se = Ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = tv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = oy;
              break;
            case Gf:
            case Rv:
            case xv:
              se = nv;
              break;
            case wv:
              se = lv;
              break;
            case "scroll":
              se = Zp;
              break;
            case "wheel":
              se = si;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = iy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = Us;
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
                  ((q = dl(b, k)), q != null && ye.push(Do(b, q, O)))),
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
              (aa(ve) || ve[pi]))
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
                (ve = ve ? aa(ve) : null),
                ve !== null &&
                  ((Jt = Te(ve)),
                  ve !== Jt || (ve.tag !== 5 && ve.tag !== 6)) &&
                  (ve = null))
              : ((se = null), (ve = U)),
            se !== ve)
          ) {
            if (
              ((ye = Ms),
              (q = "onMouseLeave"),
              (k = "onMouseEnter"),
              (b = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((ye = Us),
                (q = "onPointerLeave"),
                (k = "onPointerEnter"),
                (b = "pointer")),
              (Jt = se == null ? W : hu(se)),
              (O = ve == null ? W : hu(ve)),
              (W = new ye(q, b + "leave", se, l, Q)),
              (W.target = Jt),
              (W.relatedTarget = O),
              (q = null),
              aa(Q) === U &&
                ((ye = new ye(k, b + "enter", ve, l, Q)),
                (ye.target = O),
                (ye.relatedTarget = Jt),
                (q = ye)),
              (Jt = q),
              se && ve)
            )
              t: {
                for (ye = se, k = ve, b = 0, O = ye; O; O = El(O)) b++;
                for (O = 0, q = k; q; q = El(q)) O++;
                for (; 0 < b - O; ) (ye = El(ye)), b--;
                for (; 0 < O - b; ) (k = El(k)), O--;
                for (; b--; ) {
                  if (ye === k || (k !== null && ye === k.alternate)) break t;
                  (ye = El(ye)), (k = El(k));
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
            ((W = U ? hu(U) : window),
            (se = W.nodeName && W.nodeName.toLowerCase()),
            se === "select" || (se === "input" && W.type === "file"))
          )
            var Se = pv;
          else if (fv(W))
            if (Bf) Se = yv;
            else {
              Se = dy;
              var Le = fy;
            }
          else
            (se = W.nodeName) &&
              se.toLowerCase() === "input" &&
              (W.type === "checkbox" || W.type === "radio") &&
              (Se = py);
          if (Se && (Se = Se(n, U))) {
            dv(G, Se, l, Q);
            break e;
          }
          Le && Le(n, W, U),
            n === "focusout" &&
              (Le = W._wrapperState) &&
              Le.controlled &&
              W.type === "number" &&
              xa(W, "number", W.value);
        }
        switch (((Le = U ? hu(U) : window), n)) {
          case "focusin":
            (fv(Le) || Le.contentEditable === "true") &&
              ((Ma = Le), (Yf = U), (xo = null));
            break;
          case "focusout":
            xo = Yf = Ma = null;
            break;
          case "mousedown":
            Wf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Wf = !1), Tv(G, l, Q);
            break;
          case "selectionchange":
            if (Cv) break;
          case "keydown":
          case "keyup":
            Tv(G, l, Q);
        }
        var he;
        if (Oa)
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
          cu
            ? sv(n, l) && (Oe = "onCompositionEnd")
            : n === "keydown" &&
              l.keyCode === 229 &&
              (Oe = "onCompositionStart");
        Oe &&
          (uv &&
            l.locale !== "ko" &&
            (cu || Oe !== "onCompositionStart"
              ? Oe === "onCompositionEnd" && cu && (he = Mf())
              : ((ui = Q),
                (go = "value" in ui ? ui.value : ui.textContent),
                (cu = !0))),
          (Le = ko(U, Oe)),
          0 < Le.length &&
            ((Oe = new Af(Oe, n, null, l, Q)),
            G.push({ event: Oe, listeners: Le }),
            he
              ? (Oe.data = he)
              : ((he = js(l)), he !== null && (Oe.data = he)))),
          (he = As ? sy(n, l) : cy(n, l)) &&
            ((U = ko(U, "onBeforeInput")),
            0 < U.length &&
              ((Q = new Af("onBeforeInput", "beforeinput", null, l, Q)),
              G.push({ event: Q, listeners: U }),
              (Q.data = he)));
      }
      Bs(G, r);
    });
  }
  function Do(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ko(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n,
        d = c.stateNode;
      c.tag === 5 &&
        d !== null &&
        ((c = d),
        (d = dl(n, l)),
        d != null && o.unshift(Do(n, d, c)),
        (d = dl(n, r)),
        d != null && o.push(Do(n, d, c))),
        (n = n.return);
    }
    return o;
  }
  function El(n) {
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
          ? ((x = dl(l, d)), x != null && m.unshift(Do(l, x, C)))
          : c || ((x = dl(l, d)), x != null && m.push(Do(l, x, C)))),
        (l = l.return);
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Kf = /\r\n?/g,
    yy = /\u0000|\uFFFD/g;
  function qf(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        Kf,
        `
`,
      )
      .replace(yy, "");
  }
  function $s(n, r, l) {
    if (((r = qf(r)), qf(n) !== r && l)) throw Error(S(425));
  }
  function Ys() {}
  var Jf = null,
    Cl = null;
  function No(n, r) {
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
  var Tl = typeof setTimeout == "function" ? setTimeout : void 0,
    Nv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zf = typeof Promise == "function" ? Promise : void 0,
    ed =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zf < "u"
          ? function (n) {
              return Zf.resolve(null).then(n).catch(gy);
            }
          : Tl;
  function gy(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function Vi(n, r) {
    var l = r,
      o = 0;
    do {
      var c = l.nextSibling;
      if ((n.removeChild(l), c && c.nodeType === 8))
        if (((l = c.data), l === "/$")) {
          if (o === 0) {
            n.removeChild(c), mo(r);
            return;
          }
          o--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || o++;
      l = c;
    } while (l);
    mo(r);
  }
  function Ua(n) {
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
  var Bi = Math.random().toString(36).slice(2),
    Wa = "__reactFiber$" + Bi,
    Rl = "__reactProps$" + Bi,
    pi = "__reactContainer$" + Bi,
    td = "__reactEvents$" + Bi,
    Sy = "__reactListeners$" + Bi,
    nd = "__reactHandles$" + Bi;
  function aa(n) {
    var r = n[Wa];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if ((r = l[pi] || l[Wa])) {
        if (
          ((l = r.alternate),
          r.child !== null || (l !== null && l.child !== null))
        )
          for (n = Lo(n); n !== null; ) {
            if ((l = n[Wa])) return l;
            n = Lo(n);
          }
        return r;
      }
      (n = l), (l = n.parentNode);
    }
    return null;
  }
  function Oo(n) {
    return (
      (n = n[Wa] || n[pi]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    );
  }
  function hu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(S(33));
  }
  function be(n) {
    return n[Rl] || null;
  }
  var Pi = [],
    Ot = -1;
  function Ye(n) {
    return { current: n };
  }
  function ft(n) {
    0 > Ot || ((n.current = Pi[Ot]), (Pi[Ot] = null), Ot--);
  }
  function vt(n, r) {
    Ot++, (Pi[Ot] = n.current), (n.current = r);
  }
  var Qa = {},
    ze = Ye(Qa),
    Yt = Ye(!1),
    mr = Qa;
  function ia(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Qa;
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
  function la() {
    ft(Yt), ft(ze);
  }
  function $i(n, r, l) {
    if (ze.current !== Qa) throw Error(S(168));
    vt(ze, r), vt(Yt, l);
  }
  function Mo(n, r, l) {
    var o = n.stateNode;
    if (((r = r.childContextTypes), typeof o.getChildContext != "function"))
      return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(S(108, qr(n) || "Unknown", c));
    return fe({}, l, o);
  }
  function Ws(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        Qa),
      (mr = ze.current),
      vt(ze, n),
      vt(Yt, Yt.current),
      !0
    );
  }
  function Lv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(S(169));
    l
      ? ((n = Mo(n, r, mr)),
        (o.__reactInternalMemoizedMergedChildContext = n),
        ft(Yt),
        ft(ze),
        vt(ze, n))
      : ft(Yt),
      vt(Yt, l);
  }
  var Vr = null,
    Rn = !1,
    Uo = !1;
  function rd(n) {
    Vr === null ? (Vr = [n]) : Vr.push(n);
  }
  function ad(n) {
    (Rn = !0), rd(n);
  }
  function yr() {
    if (!Uo && Vr !== null) {
      Uo = !0;
      var n = 0,
        r = gt;
      try {
        var l = Vr;
        for (gt = 1; n < l.length; n++) {
          var o = l[n];
          do o = o(!0);
          while (o !== null);
        }
        (Vr = null), (Rn = !1);
      } catch (c) {
        throw (Vr !== null && (Vr = Vr.slice(n + 1)), Lt(Fr, yr), c);
      } finally {
        (gt = r), (Uo = !1);
      }
    }
    return null;
  }
  var Yi = [],
    gr = 0,
    xl = null,
    mu = 0,
    Sr = [],
    Gn = 0,
    ua = null,
    On = 1,
    vi = "";
  function Br(n, r) {
    (Yi[gr++] = mu), (Yi[gr++] = xl), (xl = n), (mu = r);
  }
  function id(n, r, l) {
    (Sr[Gn++] = On), (Sr[Gn++] = vi), (Sr[Gn++] = ua), (ua = n);
    var o = On;
    n = vi;
    var c = 32 - ea(o) - 1;
    (o &= ~(1 << c)), (l += 1);
    var d = 32 - ea(r) + c;
    if (30 < d) {
      var m = c - (c % 5);
      (d = (o & ((1 << m) - 1)).toString(32)),
        (o >>= m),
        (c -= m),
        (On = (1 << (32 - ea(r) + c)) | (l << c) | o),
        (vi = d + n);
    } else (On = (1 << d) | (l << c) | o), (vi = n);
  }
  function Qs(n) {
    n.return !== null && (Br(n, 1), id(n, 1, 0));
  }
  function ld(n) {
    for (; n === xl; )
      (xl = Yi[--gr]), (Yi[gr] = null), (mu = Yi[--gr]), (Yi[gr] = null);
    for (; n === ua; )
      (ua = Sr[--Gn]),
        (Sr[Gn] = null),
        (vi = Sr[--Gn]),
        (Sr[Gn] = null),
        (On = Sr[--Gn]),
        (Sr[Gn] = null);
  }
  var Pr = null,
    Er = null,
    Mt = !1,
    oa = null;
  function ud(n, r) {
    var l = ma(5, null, null, 0);
    (l.elementType = "DELETED"),
      (l.stateNode = r),
      (l.return = n),
      (r = n.deletions),
      r === null ? ((n.deletions = [l]), (n.flags |= 16)) : r.push(l);
  }
  function Ov(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return (
          (r =
            r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((n.stateNode = r), (Pr = n), (Er = Ua(r.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (r = n.pendingProps === "" || r.nodeType !== 3 ? null : r),
          r !== null ? ((n.stateNode = r), (Pr = n), (Er = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((l = ua !== null ? { id: On, overflow: vi } : null),
              (n.memoizedState = {
                dehydrated: r,
                treeContext: l,
                retryLane: 1073741824,
              }),
              (l = ma(18, null, null, 0)),
              (l.stateNode = r),
              (l.return = n),
              (n.child = l),
              (Pr = n),
              (Er = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Is(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Gs(n) {
    if (Mt) {
      var r = Er;
      if (r) {
        var l = r;
        if (!Ov(n, r)) {
          if (Is(n)) throw Error(S(418));
          r = Ua(l.nextSibling);
          var o = Pr;
          r && Ov(n, r)
            ? ud(o, l)
            : ((n.flags = (n.flags & -4097) | 2), (Mt = !1), (Pr = n));
        }
      } else {
        if (Is(n)) throw Error(S(418));
        (n.flags = (n.flags & -4097) | 2), (Mt = !1), (Pr = n);
      }
    }
  }
  function Mv(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;

    )
      n = n.return;
    Pr = n;
  }
  function Xs(n) {
    if (n !== Pr) return !1;
    if (!Mt) return Mv(n), (Mt = !0), !1;
    var r;
    if (
      ((r = n.tag !== 3) &&
        !(r = n.tag !== 5) &&
        ((r = n.type),
        (r = r !== "head" && r !== "body" && !No(n.type, n.memoizedProps))),
      r && (r = Er))
    ) {
      if (Is(n)) throw (Uv(), Error(S(418)));
      for (; r; ) ud(n, r), (r = Ua(r.nextSibling));
    }
    if ((Mv(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(S(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Er = Ua(n.nextSibling);
                break e;
              }
              r--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || r++;
          }
          n = n.nextSibling;
        }
        Er = null;
      }
    } else Er = Pr ? Ua(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Uv() {
    for (var n = Er; n; ) n = Ua(n.nextSibling);
  }
  function Bt() {
    (Er = Pr = null), (Mt = !1);
  }
  function od(n) {
    oa === null ? (oa = [n]) : oa.push(n);
  }
  var Ks = je.ReactCurrentBatchConfig;
  function wl(n, r, l) {
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
  function Ia(n, r) {
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
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function qs(n) {
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
      for (k = new Map(); b !== null; )
        b.key !== null ? k.set(b.key, b) : k.set(b.index, b), (b = b.sibling);
      return k;
    }
    function c(k, b) {
      return (k = Ji(k, b)), (k.index = 0), (k.sibling = null), k;
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
        ? ((b = Fc(O, k.mode, q)), (b.return = k), b)
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
                Se.$$typeof === Nt &&
                zv(Se) === b.type))
          ? ((q = c(b, O.props)), (q.ref = wl(k, b, O)), (q.return = k), q)
          : ((q = Ac(O.type, O.key, O.props, null, k.mode, q)),
            (q.ref = wl(k, b, O)),
            (q.return = k),
            q);
    }
    function U(k, b, O, q) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== O.containerInfo ||
        b.stateNode.implementation !== O.implementation
        ? ((b = Jo(O, k.mode, q)), (b.return = k), b)
        : ((b = c(b, O.children || [])), (b.return = k), b);
    }
    function Q(k, b, O, q, Se) {
      return b === null || b.tag !== 7
        ? ((b = Vl(O, k.mode, q, Se)), (b.return = k), b)
        : ((b = c(b, O)), (b.return = k), b);
    }
    function G(k, b, O) {
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return (b = Fc("" + b, k.mode, O)), (b.return = k), b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case We:
            return (
              (O = Ac(b.type, b.key, b.props, null, k.mode, O)),
              (O.ref = wl(k, null, b)),
              (O.return = k),
              O
            );
          case mt:
            return (b = Jo(b, k.mode, O)), (b.return = k), b;
          case Nt:
            var q = b._init;
            return G(k, q(b._payload), O);
        }
        if (ii(b) || Ne(b))
          return (b = Vl(b, k.mode, O, null)), (b.return = k), b;
        Ia(k, b);
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
          case Nt:
            return (Se = O._init), W(k, b, Se(O._payload), q);
        }
        if (ii(O) || Ne(O)) return Se !== null ? null : Q(k, b, O, q, null);
        Ia(k, O);
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
          case Nt:
            var Le = q._init;
            return se(k, b, O, Le(q._payload), Se);
        }
        if (ii(q) || Ne(q)) return (k = k.get(O) || null), Q(b, k, q, Se, null);
        Ia(b, q);
      }
      return null;
    }
    function ve(k, b, O, q) {
      for (
        var Se = null, Le = null, he = b, Oe = (b = 0), pn = null;
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
          Le === null ? (Se = ut) : (Le.sibling = ut),
          (Le = ut),
          (he = pn);
      }
      if (Oe === O.length) return l(k, he), Mt && Br(k, Oe), Se;
      if (he === null) {
        for (; Oe < O.length; Oe++)
          (he = G(k, O[Oe], q)),
            he !== null &&
              ((b = d(he, b, Oe)),
              Le === null ? (Se = he) : (Le.sibling = he),
              (Le = he));
        return Mt && Br(k, Oe), Se;
      }
      for (he = o(k, he); Oe < O.length; Oe++)
        (pn = se(he, k, Oe, O[Oe], q)),
          pn !== null &&
            (n &&
              pn.alternate !== null &&
              he.delete(pn.key === null ? Oe : pn.key),
            (b = d(pn, b, Oe)),
            Le === null ? (Se = pn) : (Le.sibling = pn),
            (Le = pn));
      return (
        n &&
          he.forEach(function (Ci) {
            return r(k, Ci);
          }),
        Mt && Br(k, Oe),
        Se
      );
    }
    function ye(k, b, O, q) {
      var Se = Ne(O);
      if (typeof Se != "function") throw Error(S(150));
      if (((O = Se.call(O)), O == null)) throw Error(S(151));
      for (
        var Le = (Se = null), he = b, Oe = (b = 0), pn = null, ut = O.next();
        he !== null && !ut.done;
        Oe++, ut = O.next()
      ) {
        he.index > Oe ? ((pn = he), (he = null)) : (pn = he.sibling);
        var Ci = W(k, he, ut.value, q);
        if (Ci === null) {
          he === null && (he = pn);
          break;
        }
        n && he && Ci.alternate === null && r(k, he),
          (b = d(Ci, b, Oe)),
          Le === null ? (Se = Ci) : (Le.sibling = Ci),
          (Le = Ci),
          (he = pn);
      }
      if (ut.done) return l(k, he), Mt && Br(k, Oe), Se;
      if (he === null) {
        for (; !ut.done; Oe++, ut = O.next())
          (ut = G(k, ut.value, q)),
            ut !== null &&
              ((b = d(ut, b, Oe)),
              Le === null ? (Se = ut) : (Le.sibling = ut),
              (Le = ut));
        return Mt && Br(k, Oe), Se;
      }
      for (he = o(k, he); !ut.done; Oe++, ut = O.next())
        (ut = se(he, k, Oe, ut.value, q)),
          ut !== null &&
            (n &&
              ut.alternate !== null &&
              he.delete(ut.key === null ? Oe : ut.key),
            (b = d(ut, b, Oe)),
            Le === null ? (Se = ut) : (Le.sibling = ut),
            (Le = ut));
      return (
        n &&
          he.forEach(function (jy) {
            return r(k, jy);
          }),
        Mt && Br(k, Oe),
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
              for (var Se = O.key, Le = b; Le !== null; ) {
                if (Le.key === Se) {
                  if (((Se = O.type), Se === $e)) {
                    if (Le.tag === 7) {
                      l(k, Le.sibling),
                        (b = c(Le, O.props.children)),
                        (b.return = k),
                        (k = b);
                      break e;
                    }
                  } else if (
                    Le.elementType === Se ||
                    (typeof Se == "object" &&
                      Se !== null &&
                      Se.$$typeof === Nt &&
                      zv(Se) === Le.type)
                  ) {
                    l(k, Le.sibling),
                      (b = c(Le, O.props)),
                      (b.ref = wl(k, Le, O)),
                      (b.return = k),
                      (k = b);
                    break e;
                  }
                  l(k, Le);
                  break;
                } else r(k, Le);
                Le = Le.sibling;
              }
              O.type === $e
                ? ((b = Vl(O.props.children, k.mode, q, O.key)),
                  (b.return = k),
                  (k = b))
                : ((q = Ac(O.type, O.key, O.props, null, k.mode, q)),
                  (q.ref = wl(k, b, O)),
                  (q.return = k),
                  (k = q));
            }
            return m(k);
          case mt:
            e: {
              for (Le = O.key; b !== null; ) {
                if (b.key === Le)
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
              (b = Jo(O, k.mode, q)), (b.return = k), (k = b);
            }
            return m(k);
          case Nt:
            return (Le = O._init), Jt(k, b, Le(O._payload), q);
        }
        if (ii(O)) return ve(k, b, O, q);
        if (Ne(O)) return ye(k, b, O, q);
        Ia(k, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          b !== null && b.tag === 6
            ? (l(k, b.sibling), (b = c(b, O)), (b.return = k), (k = b))
            : (l(k, b), (b = Fc(O, k.mode, q)), (b.return = k), (k = b)),
          m(k))
        : l(k, b);
    }
    return Jt;
  }
  var yu = qs(!0),
    Av = qs(!1),
    hi = Ye(null),
    sn = null,
    re = null,
    sa = null;
  function $r() {
    sa = re = sn = null;
  }
  function sd(n) {
    var r = hi.current;
    ft(hi), (n._currentValue = r);
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
  function gu(n, r) {
    (sn = n),
      (sa = re = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        (n.lanes & r && (Rr = !0), (n.firstContext = null));
  }
  function ca(n) {
    var r = n._currentValue;
    if (sa !== n)
      if (((n = { context: n, memoizedValue: r, next: null }), re === null)) {
        if (sn === null) throw Error(S(308));
        (re = n), (sn.dependencies = { lanes: 0, firstContext: n });
      } else re = re.next = n;
    return r;
  }
  var bl = null;
  function rn(n) {
    bl === null ? (bl = [n]) : bl.push(n);
  }
  function jv(n, r, l, o) {
    var c = r.interleaved;
    return (
      c === null ? ((l.next = l), rn(r)) : ((l.next = c.next), (c.next = l)),
      (r.interleaved = l),
      mi(n, o)
    );
  }
  function mi(n, r) {
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
  var Wi = !1;
  function Js(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Su(n, r) {
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
  function Qi(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), Je & 2)) {
      var c = o.pending;
      return (
        c === null ? (r.next = r) : ((r.next = c.next), (c.next = r)),
        (o.pending = r),
        mi(n, l)
      );
    }
    return (
      (c = o.interleaved),
      c === null ? ((r.next = r), rn(o)) : ((r.next = c.next), (c.next = r)),
      (o.interleaved = r),
      mi(n, l)
    );
  }
  function Zs(n, r, l) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (l & 4194240) !== 0))
    ) {
      var o = r.lanes;
      (o &= n.pendingLanes), (l |= o), (r.lanes = l), fo(n, l);
    }
  }
  function Fv(n, r) {
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
  function ec(n, r, l, o) {
    var c = n.updateQueue;
    Wi = !1;
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
                Wi = !0;
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
      (Al |= m), (n.lanes = m), (n.memoizedState = G);
    }
  }
  function Hv(n, r, l) {
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
  var zo = {},
    za = Ye(zo),
    Eu = Ye(zo),
    Ao = Ye(zo);
  function _l(n) {
    if (n === zo) throw Error(S(174));
    return n;
  }
  function fd(n, r) {
    switch ((vt(Ao, r), vt(Eu, n), vt(za, zo), (n = r.nodeType), n)) {
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
    ft(za), vt(za, r);
  }
  function Cu() {
    ft(za), ft(Eu), ft(Ao);
  }
  function Vv(n) {
    _l(Ao.current);
    var r = _l(za.current),
      l = en(r, n.type);
    r !== l && (vt(Eu, n), vt(za, l));
  }
  function dd(n) {
    Eu.current === n && (ft(za), ft(Eu));
  }
  var jt = Ye(0);
  function tc(n) {
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
  var nc = [];
  function pd() {
    for (var n = 0; n < nc.length; n++)
      nc[n]._workInProgressVersionPrimary = null;
    nc.length = 0;
  }
  var rc = je.ReactCurrentDispatcher,
    jo = je.ReactCurrentBatchConfig,
    ge = 0,
    Ee = null,
    Ae = null,
    qe = null,
    Yr = !1,
    Tu = !1,
    Fo = 0,
    Ey = 0;
  function Xn() {
    throw Error(S(321));
  }
  function Ho(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ra(n[l], r[l])) return !1;
    return !0;
  }
  function Y(n, r, l, o, c, d) {
    if (
      ((ge = d),
      (Ee = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (rc.current = n === null || n.memoizedState === null ? Cy : Dt),
      (n = l(o, c)),
      Tu)
    ) {
      d = 0;
      do {
        if (((Tu = !1), (Fo = 0), 25 <= d)) throw Error(S(301));
        (d += 1),
          (qe = Ae = null),
          (r.updateQueue = null),
          (rc.current = gc),
          (n = l(o, c));
      } while (Tu);
    }
    if (
      ((rc.current = Kn),
      (r = Ae !== null && Ae.next !== null),
      (ge = 0),
      (qe = Ae = Ee = null),
      (Yr = !1),
      r)
    )
      throw Error(S(300));
    return n;
  }
  function an() {
    var n = Fo !== 0;
    return (Fo = 0), n;
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
  function Wr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function yi(n) {
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
            (Al |= Q);
        }
        U = U.next;
      } while (U !== null && U !== d);
      x === null ? (m = o) : (x.next = C),
        ra(o, r.memoizedState) || (Rr = !0),
        (r.memoizedState = o),
        (r.baseState = m),
        (r.baseQueue = x),
        (l.lastRenderedState = o);
    }
    if (((n = l.interleaved), n !== null)) {
      c = n;
      do (d = c.lane), (Ee.lanes |= d), (Al |= d), (c = c.next);
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function fa(n) {
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
      ra(d, r.memoizedState) || (Rr = !0),
        (r.memoizedState = d),
        r.baseQueue === null && (r.baseState = d),
        (l.lastRenderedState = d);
    }
    return [d, o];
  }
  function Ru() {}
  function Dl(n, r) {
    var l = Ee,
      o = Mn(),
      c = r(),
      d = !ra(o.memoizedState, c);
    if (
      (d && ((o.memoizedState = c), (Rr = !0)),
      (o = o.queue),
      Vo(ic.bind(null, l, o, n), [n]),
      o.getSnapshot !== r || d || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        kl(9, ac.bind(null, l, o, c, r), void 0, null),
        Qt === null)
      )
        throw Error(S(349));
      ge & 30 || xu(l, r, c);
    }
    return c;
  }
  function xu(n, r, l) {
    (n.flags |= 16384),
      (n = { getSnapshot: r, value: l }),
      (r = Ee.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Ee.updateQueue = r),
          (r.stores = [n]))
        : ((l = r.stores), l === null ? (r.stores = [n]) : l.push(n));
  }
  function ac(n, r, l, o) {
    (r.value = l), (r.getSnapshot = o), lc(r) && uc(n);
  }
  function ic(n, r, l) {
    return l(function () {
      lc(r) && uc(n);
    });
  }
  function lc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ra(n, l);
    } catch {
      return !0;
    }
  }
  function uc(n) {
    var r = mi(n, 1);
    r !== null && Pt(r, n, 1, -1);
  }
  function oc(n) {
    var r = Re();
    return (
      typeof n == "function" && (n = n()),
      (r.memoizedState = r.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wr,
        lastRenderedState: n,
      }),
      (r.queue = n),
      (n = n.dispatch = Bo.bind(null, Ee, n)),
      [r.memoizedState, n]
    );
  }
  function kl(n, r, l, o) {
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
  function sc() {
    return Mn().memoizedState;
  }
  function wu(n, r, l, o) {
    var c = Re();
    (Ee.flags |= n),
      (c.memoizedState = kl(1 | r, l, void 0, o === void 0 ? null : o));
  }
  function bu(n, r, l, o) {
    var c = Mn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ae !== null) {
      var m = Ae.memoizedState;
      if (((d = m.destroy), o !== null && Ho(o, m.deps))) {
        c.memoizedState = kl(r, l, d, o);
        return;
      }
    }
    (Ee.flags |= n), (c.memoizedState = kl(1 | r, l, d, o));
  }
  function cc(n, r) {
    return wu(8390656, 8, n, r);
  }
  function Vo(n, r) {
    return bu(2048, 8, n, r);
  }
  function fc(n, r) {
    return bu(4, 2, n, r);
  }
  function dc(n, r) {
    return bu(4, 4, n, r);
  }
  function pc(n, r) {
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
  function vc(n, r, l) {
    return (
      (l = l != null ? l.concat([n]) : null), bu(4, 4, pc.bind(null, r, n), l)
    );
  }
  function _u() {}
  function Nl(n, r) {
    var l = Mn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ho(r, o[1])
      ? o[0]
      : ((l.memoizedState = [n, r]), n);
  }
  function hc(n, r) {
    var l = Mn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ho(r, o[1])
      ? o[0]
      : ((n = n()), (l.memoizedState = [n, r]), n);
  }
  function mc(n, r, l) {
    return ge & 21
      ? (ra(l, r) ||
          ((l = bs()), (Ee.lanes |= l), (Al |= l), (n.baseState = !0)),
        r)
      : (n.baseState && ((n.baseState = !1), (Rr = !0)), (n.memoizedState = l));
  }
  function vd(n, r) {
    var l = gt;
    (gt = l !== 0 && 4 > l ? l : 4), n(!0);
    var o = jo.transition;
    jo.transition = {};
    try {
      n(!1), r();
    } finally {
      (gt = l), (jo.transition = o);
    }
  }
  function yc() {
    return Mn().memoizedState;
  }
  function Bv(n, r, l) {
    var o = Ei(n);
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
      Du(r, l);
    else if (((l = jv(n, r, l, o)), l !== null)) {
      var c = bn();
      Pt(l, n, o, c), Ii(l, r, o);
    }
  }
  function Bo(n, r, l) {
    var o = Ei(n),
      c = {
        lane: o,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (hd(n)) Du(r, c);
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
          if (((c.hasEagerState = !0), (c.eagerState = C), ra(C, m))) {
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
      (l = jv(n, r, c, o)),
        l !== null && ((c = bn()), Pt(l, n, o, c), Ii(l, r, o));
    }
  }
  function hd(n) {
    var r = n.alternate;
    return n === Ee || (r !== null && r === Ee);
  }
  function Du(n, r) {
    Tu = Yr = !0;
    var l = n.pending;
    l === null ? (r.next = r) : ((r.next = l.next), (l.next = r)),
      (n.pending = r);
  }
  function Ii(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      (o &= n.pendingLanes), (l |= o), (r.lanes = l), fo(n, l);
    }
  }
  var Kn = {
      readContext: ca,
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
    Cy = {
      readContext: ca,
      useCallback: function (n, r) {
        return (Re().memoizedState = [n, r === void 0 ? null : r]), n;
      },
      useContext: ca,
      useEffect: cc,
      useImperativeHandle: function (n, r, l) {
        return (
          (l = l != null ? l.concat([n]) : null),
          wu(4194308, 4, pc.bind(null, r, n), l)
        );
      },
      useLayoutEffect: function (n, r) {
        return wu(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        return wu(4, 2, n, r);
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
          (n = n.dispatch = Bv.bind(null, Ee, n)),
          [o.memoizedState, n]
        );
      },
      useRef: function (n) {
        var r = Re();
        return (n = { current: n }), (r.memoizedState = n);
      },
      useState: oc,
      useDebugValue: _u,
      useDeferredValue: function (n) {
        return (Re().memoizedState = n);
      },
      useTransition: function () {
        var n = oc(!1),
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
          ge & 30 || xu(o, r, l);
        }
        c.memoizedState = l;
        var d = { value: l, getSnapshot: r };
        return (
          (c.queue = d),
          cc(ic.bind(null, o, d, n), [n]),
          (o.flags |= 2048),
          kl(9, ac.bind(null, o, d, l, r), void 0, null),
          l
        );
      },
      useId: function () {
        var n = Re(),
          r = Qt.identifierPrefix;
        if (Mt) {
          var l = vi,
            o = On;
          (l = (o & ~(1 << (32 - ea(o) - 1))).toString(32) + l),
            (r = ":" + r + "R" + l),
            (l = Fo++),
            0 < l && (r += "H" + l.toString(32)),
            (r += ":");
        } else (l = Ey++), (r = ":" + r + "r" + l.toString(32) + ":");
        return (n.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    Dt = {
      readContext: ca,
      useCallback: Nl,
      useContext: ca,
      useEffect: Vo,
      useImperativeHandle: vc,
      useInsertionEffect: fc,
      useLayoutEffect: dc,
      useMemo: hc,
      useReducer: yi,
      useRef: sc,
      useState: function () {
        return yi(Wr);
      },
      useDebugValue: _u,
      useDeferredValue: function (n) {
        var r = Mn();
        return mc(r, Ae.memoizedState, n);
      },
      useTransition: function () {
        var n = yi(Wr)[0],
          r = Mn().memoizedState;
        return [n, r];
      },
      useMutableSource: Ru,
      useSyncExternalStore: Dl,
      useId: yc,
      unstable_isNewReconciler: !1,
    },
    gc = {
      readContext: ca,
      useCallback: Nl,
      useContext: ca,
      useEffect: Vo,
      useImperativeHandle: vc,
      useInsertionEffect: fc,
      useLayoutEffect: dc,
      useMemo: hc,
      useReducer: fa,
      useRef: sc,
      useState: function () {
        return fa(Wr);
      },
      useDebugValue: _u,
      useDeferredValue: function (n) {
        var r = Mn();
        return Ae === null ? (r.memoizedState = n) : mc(r, Ae.memoizedState, n);
      },
      useTransition: function () {
        var n = fa(Wr)[0],
          r = Mn().memoizedState;
        return [n, r];
      },
      useMutableSource: Ru,
      useSyncExternalStore: Dl,
      useId: yc,
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
  var Ol = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? Te(n) === n : !1;
    },
    enqueueSetState: function (n, r, l) {
      n = n._reactInternals;
      var o = bn(),
        c = Ei(n),
        d = Cr(o, c);
      (d.payload = r),
        l != null && (d.callback = l),
        (r = Qi(n, d, c)),
        r !== null && (Pt(r, n, c, o), Zs(r, n, c));
    },
    enqueueReplaceState: function (n, r, l) {
      n = n._reactInternals;
      var o = bn(),
        c = Ei(n),
        d = Cr(o, c);
      (d.tag = 1),
        (d.payload = r),
        l != null && (d.callback = l),
        (r = Qi(n, d, c)),
        r !== null && (Pt(r, n, c, o), Zs(r, n, c));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var l = bn(),
        o = Ei(n),
        c = Cr(l, o);
      (c.tag = 2),
        r != null && (c.callback = r),
        (r = Qi(n, c, o)),
        r !== null && (Pt(r, n, o, l), Zs(r, n, o));
    },
  };
  function Pv(n, r, l, o, c, d, m) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(o, d, m)
        : r.prototype && r.prototype.isPureReactComponent
          ? !Ro(l, o) || !Ro(c, d)
          : !0
    );
  }
  function $v(n, r, l) {
    var o = !1,
      c = Qa,
      d = r.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = ca(d))
        : ((c = At(r) ? mr : ze.current),
          (o = r.contextTypes),
          (d = (o = o != null) ? ia(n, c) : Qa)),
      (r = new r(l, d)),
      (n.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = Ol),
      (n.stateNode = r),
      (r._reactInternals = n),
      o &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = c),
        (n.__reactInternalMemoizedMaskedChildContext = d)),
      r
    );
  }
  function Yv(n, r, l, o) {
    (n = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(l, o),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(l, o),
      r.state !== n && Ol.enqueueReplaceState(r, r.state, null);
  }
  function md(n, r, l, o) {
    var c = n.stateNode;
    (c.props = l), (c.state = n.memoizedState), (c.refs = {}), Js(n);
    var d = r.contextType;
    typeof d == "object" && d !== null
      ? (c.context = ca(d))
      : ((d = At(r) ? mr : ze.current), (c.context = ia(n, d))),
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
        r !== c.state && Ol.enqueueReplaceState(c, c.state, null),
        ec(n, l, c, o),
        (c.state = n.memoizedState)),
      typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Gi(n, r) {
    try {
      var l = "",
        o = r;
      do (l += Ha(o)), (o = o.return);
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
  function Po(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  var Wv = typeof WeakMap == "function" ? WeakMap : Map;
  function Qv(n, r, l) {
    (l = Cr(-1, l)), (l.tag = 3), (l.payload = { element: null });
    var o = r.value;
    return (
      (l.callback = function () {
        Nc || ((Nc = !0), (bd = o)), Po(n, r);
      }),
      l
    );
  }
  function Iv(n, r, l) {
    (l = Cr(-1, l)), (l.tag = 3);
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      (l.payload = function () {
        return o(c);
      }),
        (l.callback = function () {
          Po(n, r);
        });
    }
    var d = n.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (l.callback = function () {
          Po(n, r),
            typeof o != "function" &&
              (va === null ? (va = new Set([this])) : va.add(this));
          var m = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: m !== null ? m : "",
          });
        }),
      l
    );
  }
  function $o(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Wv();
      var c = new Set();
      o.set(r, c);
    } else (c = o.get(r)), c === void 0 && ((c = new Set()), o.set(r, c));
    c.has(l) || (c.add(l), (n = Ly.bind(null, n, r, l)), r.then(n, n));
  }
  function Gv(n) {
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
                : ((r = Cr(-1, 1)), (r.tag = 2), Qi(l, r, 1))),
            (l.lanes |= 1)),
        n);
  }
  var Xv = je.ReactCurrentOwner,
    Rr = !1;
  function Kt(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : yu(r, n.child, l, o);
  }
  function ku(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return (
      gu(r, c),
      (o = Y(n, r, l, o, d, c)),
      (l = an()),
      n !== null && !Rr
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~c),
          qt(n, r, c))
        : (Mt && l && Qs(r), (r.flags |= 1), Kt(n, r, o, c), r.child)
    );
  }
  function Xi(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" &&
        !Ld(d) &&
        d.defaultProps === void 0 &&
        l.compare === null &&
        l.defaultProps === void 0
        ? ((r.tag = 15), (r.type = d), Sc(n, r, d, o, c))
        : ((n = Ac(l.type, null, o, r, r.mode, c)),
          (n.ref = r.ref),
          (n.return = r),
          (r.child = n));
    }
    if (((d = n.child), !(n.lanes & c))) {
      var m = d.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Ro), l(m, o) && n.ref === r.ref)
      )
        return qt(n, r, c);
    }
    return (
      (r.flags |= 1),
      (n = Ji(d, o)),
      (n.ref = r.ref),
      (n.return = r),
      (r.child = n)
    );
  }
  function Sc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Ro(d, o) && n.ref === r.ref)
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
          vt(Hu, wr),
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
            vt(Hu, wr),
            (wr |= n),
            null
          );
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = d !== null ? d.baseLanes : l),
          vt(Hu, wr),
          (wr |= o);
      }
    else
      d !== null ? ((o = d.baseLanes | l), (r.memoizedState = null)) : (o = l),
        vt(Hu, wr),
        (wr |= o);
    return Kt(n, r, c, l), r.child;
  }
  function Ml(n, r) {
    var l = r.ref;
    ((n === null && l !== null) || (n !== null && n.ref !== l)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function Pe(n, r, l, o, c) {
    var d = At(l) ? mr : ze.current;
    return (
      (d = ia(r, d)),
      gu(r, c),
      (l = Y(n, r, l, o, d, c)),
      (o = an()),
      n !== null && !Rr
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~c),
          qt(n, r, c))
        : (Mt && o && Qs(r), (r.flags |= 1), Kt(n, r, l, c), r.child)
    );
  }
  function Yo(n, r, l, o, c) {
    if (At(l)) {
      var d = !0;
      Ws(r);
    } else d = !1;
    if ((gu(r, c), r.stateNode === null))
      Qo(n, r), $v(r, l, o), md(r, l, o, c), (o = !0);
    else if (n === null) {
      var m = r.stateNode,
        C = r.memoizedProps;
      m.props = C;
      var x = m.context,
        U = l.contextType;
      typeof U == "object" && U !== null
        ? (U = ca(U))
        : ((U = At(l) ? mr : ze.current), (U = ia(r, U)));
      var Q = l.getDerivedStateFromProps,
        G =
          typeof Q == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function";
      G ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((C !== o || x !== U) && Yv(r, m, o, U)),
        (Wi = !1);
      var W = r.memoizedState;
      (m.state = W),
        ec(r, o, m, c),
        (x = r.memoizedState),
        C !== o || W !== x || Yt.current || Wi
          ? (typeof Q == "function" && (Ll(r, l, Q, o), (x = r.memoizedState)),
            (C = Wi || Pv(r, l, C, o, W, x, U))
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
        Su(n, r),
        (C = r.memoizedProps),
        (U = r.type === r.elementType ? C : Tr(r.type, C)),
        (m.props = U),
        (G = r.pendingProps),
        (W = m.context),
        (x = l.contextType),
        typeof x == "object" && x !== null
          ? (x = ca(x))
          : ((x = At(l) ? mr : ze.current), (x = ia(r, x)));
      var se = l.getDerivedStateFromProps;
      (Q =
        typeof se == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function") ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((C !== G || W !== x) && Yv(r, m, o, x)),
        (Wi = !1),
        (W = r.memoizedState),
        (m.state = W),
        ec(r, o, m, c);
      var ve = r.memoizedState;
      C !== G || W !== ve || Yt.current || Wi
        ? (typeof se == "function" && (Ll(r, l, se, o), (ve = r.memoizedState)),
          (U = Wi || Pv(r, l, U, o, W, ve, x) || !1)
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
    return Ec(n, r, l, o, d, c);
  }
  function Ec(n, r, l, o, c, d) {
    Ml(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Lv(r, l, !1), qt(n, r, d);
    (o = r.stateNode), (Xv.current = r);
    var C =
      m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (r.flags |= 1),
      n !== null && m
        ? ((r.child = yu(r, n.child, null, d)), (r.child = yu(r, null, C, d)))
        : Kt(n, r, C, d),
      (r.memoizedState = o.state),
      c && Lv(r, l, !0),
      r.child
    );
  }
  function Ty(n) {
    var r = n.stateNode;
    r.pendingContext
      ? $i(n, r.pendingContext, r.pendingContext !== r.context)
      : r.context && $i(n, r.context, !1),
      fd(n, r.containerInfo);
  }
  function Kv(n, r, l, o, c) {
    return Bt(), od(c), (r.flags |= 256), Kt(n, r, l, o), r.child;
  }
  var Wo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ul(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function qv(n, r, l) {
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
        Gs(r),
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
                  : (d = jc(m, o, 0, null)),
                (n = Vl(n, o, l, null)),
                (d.return = r),
                (n.return = r),
                (d.sibling = n),
                (r.child = d),
                (r.child.memoizedState = Ul(l)),
                (r.memoizedState = Wo),
                n)
              : Cc(r, m))
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
          : ((o = Ji(c, x)), (o.subtreeFlags = c.subtreeFlags & 14680064)),
        C !== null ? (d = Ji(C, d)) : ((d = Vl(d, m, l, null)), (d.flags |= 2)),
        (d.return = r),
        (o.return = r),
        (o.sibling = d),
        (r.child = o),
        (o = d),
        (d = r.child),
        (m = n.child.memoizedState),
        (m =
          m === null
            ? Ul(l)
            : {
                baseLanes: m.baseLanes | l,
                cachePool: null,
                transitions: m.transitions,
              }),
        (d.memoizedState = m),
        (d.childLanes = n.childLanes & ~l),
        (r.memoizedState = Wo),
        o
      );
    }
    return (
      (d = n.child),
      (n = d.sibling),
      (o = Ji(d, { mode: "visible", children: o.children })),
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
  function Cc(n, r) {
    return (
      (r = jc({ mode: "visible", children: r }, n.mode, 0, null)),
      (r.return = n),
      (n.child = r)
    );
  }
  function Tc(n, r, l, o) {
    return (
      o !== null && od(o),
      yu(r, n.child, null, l),
      (n = Cc(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function Sd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256
        ? ((r.flags &= -257), (o = yd(Error(S(422)))), Tc(n, r, m, o))
        : r.memoizedState !== null
          ? ((r.child = n.child), (r.flags |= 128), null)
          : ((d = o.fallback),
            (c = r.mode),
            (o = jc({ mode: "visible", children: o.children }, c, 0, null)),
            (d = Vl(d, c, m, null)),
            (d.flags |= 2),
            (o.return = r),
            (d.return = r),
            (o.sibling = d),
            (r.child = o),
            r.mode & 1 && yu(r, n.child, null, m),
            (r.child.memoizedState = Ul(m)),
            (r.memoizedState = Wo),
            d);
    if (!(r.mode & 1)) return Tc(n, r, m, null);
    if (c.data === "$!") {
      if (((o = c.nextSibling && c.nextSibling.dataset), o)) var C = o.dgst;
      return (
        (o = C), (d = Error(S(419))), (o = yd(d, o, void 0)), Tc(n, r, m, o)
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
            ((d.retryLane = c), mi(n, c), Pt(o, n, c, -1));
      }
      return qo(), (o = yd(Error(S(421)))), Tc(n, r, m, o);
    }
    return c.data === "$?"
      ? ((r.flags |= 128),
        (r.child = n.child),
        (r = Nd.bind(null, n)),
        (c._reactRetry = r),
        null)
      : ((n = d.treeContext),
        (Er = Ua(c.nextSibling)),
        (Pr = r),
        (Mt = !0),
        (oa = null),
        n !== null &&
          ((Sr[Gn++] = On),
          (Sr[Gn++] = vi),
          (Sr[Gn++] = ua),
          (On = n.id),
          (vi = n.overflow),
          (ua = r)),
        (r = Cc(r, o.children)),
        (r.flags |= 4096),
        r);
  }
  function Jv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), cd(n.return, r, l);
  }
  function Rc(n, r, l, o, c) {
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
          if (n.tag === 13) n.memoizedState !== null && Jv(n, l, r);
          else if (n.tag === 19) Jv(n, l, r);
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
              n !== null && tc(n) === null && (c = l),
              (l = l.sibling);
          (l = c),
            l === null
              ? ((c = r.child), (r.child = null))
              : ((c = l.sibling), (l.sibling = null)),
            Rc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (((n = c.alternate), n !== null && tc(n) === null)) {
              r.child = c;
              break;
            }
            (n = c.sibling), (c.sibling = l), (l = c), (c = n);
          }
          Rc(r, !0, l, null, d);
          break;
        case "together":
          Rc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Qo(n, r) {
    !(r.mode & 1) &&
      n !== null &&
      ((n.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function qt(n, r, l) {
    if (
      (n !== null && (r.dependencies = n.dependencies),
      (Al |= r.lanes),
      !(l & r.childLanes))
    )
      return null;
    if (n !== null && r.child !== n.child) throw Error(S(153));
    if (r.child !== null) {
      for (
        n = r.child, l = Ji(n, n.pendingProps), r.child = l, l.return = r;
        n.sibling !== null;

      )
        (n = n.sibling),
          (l = l.sibling = Ji(n, n.pendingProps)),
          (l.return = r);
      l.sibling = null;
    }
    return r.child;
  }
  function gi(n, r, l) {
    switch (r.tag) {
      case 3:
        Ty(r), Bt();
        break;
      case 5:
        Vv(r);
        break;
      case 1:
        At(r.type) && Ws(r);
        break;
      case 4:
        fd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context,
          c = r.memoizedProps.value;
        vt(hi, o._currentValue), (o._currentValue = c);
        break;
      case 13:
        if (((o = r.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (vt(jt, jt.current & 1), (r.flags |= 128), null)
            : l & r.child.childLanes
              ? qv(n, r, l)
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
  var Ga, Nu, Lu, da;
  (Ga = function (n, r) {
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
    (Nu = function () {}),
    (Lu = function (n, r, l, o) {
      var c = n.memoizedProps;
      if (c !== o) {
        (n = r.stateNode), _l(za.current);
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
            (c = wa(n, c)), (o = wa(n, o)), (d = []);
            break;
          default:
            typeof c.onClick != "function" &&
              typeof o.onClick == "function" &&
              (n.onclick = Ys);
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
    (da = function (n, r, l, o) {
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
  function Ry(n, r, l) {
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
        return At(r.type) && la(), qn(r), null;
      case 3:
        return (
          (o = r.stateNode),
          Cu(),
          ft(Yt),
          ft(ze),
          pd(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (n === null || n.child === null) &&
            (Xs(r)
              ? (r.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && !(r.flags & 256)) ||
                ((r.flags |= 1024), oa !== null && (_d(oa), (oa = null)))),
          Nu(n, r),
          qn(r),
          null
        );
      case 5:
        dd(r);
        var c = _l(Ao.current);
        if (((l = r.type), n !== null && r.stateNode != null))
          Lu(n, r, l, o, c),
            n.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(S(166));
            return qn(r), null;
          }
          if (((n = _l(za.current)), Xs(r))) {
            (o = r.stateNode), (l = r.type);
            var d = r.memoizedProps;
            switch (((o[Wa] = r), (o[Rl] = d), (n = (r.mode & 1) !== 0), l)) {
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
                for (c = 0; c < _o.length; c++) xt(_o[c], o);
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
                Nn(o, d), xt("invalid", o);
                break;
              case "select":
                (o._wrapperState = { wasMultiple: !!d.multiple }),
                  xt("invalid", o);
                break;
              case "textarea":
                Mr(o, d), xt("invalid", o);
            }
            Sn(l, d), (c = null);
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var C = d[m];
                m === "children"
                  ? typeof C == "string"
                    ? o.textContent !== C &&
                      (d.suppressHydrationWarning !== !0 &&
                        $s(o.textContent, C, n),
                      (c = ["children", C]))
                    : typeof C == "number" &&
                      o.textContent !== "" + C &&
                      (d.suppressHydrationWarning !== !0 &&
                        $s(o.textContent, C, n),
                      (c = ["children", "" + C]))
                  : A.hasOwnProperty(m) &&
                    C != null &&
                    m === "onScroll" &&
                    xt("scroll", o);
              }
            switch (l) {
              case "input":
                dr(o), Zr(o, d, !0);
                break;
              case "textarea":
                dr(o), Ur(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ys);
            }
            (o = c), (r.updateQueue = o), o !== null && (r.flags |= 4);
          } else {
            (m = c.nodeType === 9 ? c : c.ownerDocument),
              n === "http://www.w3.org/1999/xhtml" && (n = ba(l)),
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
              (n[Wa] = r),
              (n[Rl] = o),
              Ga(n, r, !1, !1),
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
                  for (c = 0; c < _o.length; c++) xt(_o[c], n);
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
                  Nn(n, o), (c = Yn(n, o)), xt("invalid", n);
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
                  Mr(n, o), (c = wa(n, o)), xt("invalid", n);
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
                      ? ((x = x ? x.__html : void 0), x != null && Mi(n, x))
                      : d === "children"
                        ? typeof x == "string"
                          ? (l !== "textarea" || x !== "") && _a(n, x)
                          : typeof x == "number" && _a(n, "" + x)
                        : d !== "suppressContentEditableWarning" &&
                          d !== "suppressHydrationWarning" &&
                          d !== "autoFocus" &&
                          (A.hasOwnProperty(d)
                            ? x != null && d === "onScroll" && xt("scroll", n)
                            : x != null && xe(n, d, x, m));
                }
              switch (l) {
                case "input":
                  dr(n), Zr(n, o, !1);
                  break;
                case "textarea":
                  dr(n), Ur(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + $n(o.value));
                  break;
                case "select":
                  (n.multiple = !!o.multiple),
                    (d = o.value),
                    d != null
                      ? Ba(n, !!o.multiple, d, !1)
                      : o.defaultValue != null &&
                        Ba(n, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ys);
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
        if (n && r.stateNode != null) da(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(S(166));
          if (((l = _l(Ao.current)), _l(za.current), Xs(r))) {
            if (
              ((o = r.stateNode),
              (l = r.memoizedProps),
              (o[Wa] = r),
              (d = o.nodeValue !== l) && ((n = Pr), n !== null))
            )
              switch (n.tag) {
                case 3:
                  $s(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    $s(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            (o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o)),
              (o[Wa] = r),
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
            Uv(), Bt(), (r.flags |= 98560), (d = !1);
          else if (((d = Xs(r)), o !== null && o.dehydrated !== null)) {
            if (n === null) {
              if (!d) throw Error(S(318));
              if (
                ((d = r.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(S(317));
              d[Wa] = r;
            } else
              Bt(),
                !(r.flags & 128) && (r.memoizedState = null),
                (r.flags |= 4);
            qn(r), (d = !1);
          } else oa !== null && (_d(oa), (oa = null)), (d = !0);
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128
          ? ((r.lanes = l), r)
          : ((o = o !== null),
            o !== (n !== null && n.memoizedState !== null) &&
              o &&
              ((r.child.flags |= 8192),
              r.mode & 1 &&
                (n === null || jt.current & 1 ? fn === 0 && (fn = 3) : qo())),
            r.updateQueue !== null && (r.flags |= 4),
            qn(r),
            null);
      case 4:
        return (
          Cu(),
          Nu(n, r),
          n === null && vu(r.stateNode.containerInfo),
          qn(r),
          null
        );
      case 10:
        return sd(r.type._context), qn(r), null;
      case 17:
        return At(r.type) && la(), qn(r), null;
      case 19:
        if ((ft(jt), (d = r.memoizedState), d === null)) return qn(r), null;
        if (((o = (r.flags & 128) !== 0), (m = d.rendering), m === null))
          if (o) Wt(d, !1);
          else {
            if (fn !== 0 || (n !== null && n.flags & 128))
              for (n = r.child; n !== null; ) {
                if (((m = tc(n)), m !== null)) {
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
              pt() > Bu &&
              ((r.flags |= 128), (o = !0), Wt(d, !1), (r.lanes = 4194304));
          }
        else {
          if (!o)
            if (((n = tc(m)), n !== null)) {
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
              2 * pt() - d.renderingStartTime > Bu &&
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
          Uc(),
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
  function xy(n, r) {
    switch ((ld(r), r.tag)) {
      case 1:
        return (
          At(r.type) && la(),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 3:
        return (
          Cu(),
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
        return Cu(), null;
      case 10:
        return sd(r.type._context), null;
      case 22:
      case 23:
        return Uc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ou = !1,
    Un = !1,
    xc = typeof WeakSet == "function" ? WeakSet : Set,
    pe = null;
  function Mu(n, r) {
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
  var wc = !1;
  function wy(n, r) {
    if (((Jf = ml), (n = Fs()), ci(n))) {
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
      Cl = { focusedElem: n, selectionRange: l }, ml = !1, pe = r;
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
    return (ve = wc), (wc = !1), ve;
  }
  function Uu(n, r, l) {
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
  function bc(n, r) {
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
  function _c(n) {
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
  function Zv(n) {
    var r = n.alternate;
    r !== null && ((n.alternate = null), Zv(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((r = n.stateNode),
        r !== null &&
          (delete r[Wa],
          delete r[Rl],
          delete r[td],
          delete r[Sy],
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
  function eh(n) {
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
  function Io(n, r, l) {
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
            l != null || r.onclick !== null || (r.onclick = Ys));
    else if (o !== 4 && ((n = n.child), n !== null))
      for (Io(n, r, l), n = n.sibling; n !== null; )
        Io(n, r, l), (n = n.sibling);
  }
  function zu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      (n = n.stateNode), r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && ((n = n.child), n !== null))
      for (zu(n, r, l), n = n.sibling; n !== null; )
        zu(n, r, l), (n = n.sibling);
  }
  var Ft = null,
    xn = !1;
  function tr(n, r, l) {
    for (l = l.child; l !== null; ) Au(n, r, l), (l = l.sibling);
  }
  function Au(n, r, l) {
    if (ka && typeof ka.onCommitFiberUnmount == "function")
      try {
        ka.onCommitFiberUnmount(co, l);
      } catch {}
    switch (l.tag) {
      case 5:
        Un || Mu(l, r);
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
                ? Vi(n.parentNode, l)
                : n.nodeType === 1 && Vi(n, l),
              mo(n))
            : Vi(Ft, l.stateNode));
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
          (Mu(l, r),
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
  function ju(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new xc()),
        r.forEach(function (o) {
          var c = Oy.bind(null, n, o);
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
          Au(d, m, c), (Ft = null), (xn = !1);
          var x = c.alternate;
          x !== null && (x.return = null), (c.return = null);
        } catch (U) {
          It(c, r, U);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) th(r, n), (r = r.sibling);
  }
  function th(n, r) {
    var l = n.alternate,
      o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wn(r, n), Xa(n), o & 4)) {
          try {
            Uu(3, n, n.return), bc(3, n);
          } catch (ye) {
            It(n, n.return, ye);
          }
          try {
            Uu(5, n, n.return);
          } catch (ye) {
            It(n, n.return, ye);
          }
        }
        break;
      case 1:
        wn(r, n), Xa(n), o & 512 && l !== null && Mu(l, l.return);
        break;
      case 5:
        if (
          (wn(r, n),
          Xa(n),
          o & 512 && l !== null && Mu(l, l.return),
          n.flags & 32)
        ) {
          var c = n.stateNode;
          try {
            _a(c, "");
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
              C === "input" && d.type === "radio" && d.name != null && Ln(c, d),
                Xt(C, m);
              var U = Xt(C, d);
              for (m = 0; m < x.length; m += 2) {
                var Q = x[m],
                  G = x[m + 1];
                Q === "style"
                  ? yt(c, G)
                  : Q === "dangerouslySetInnerHTML"
                    ? Mi(c, G)
                    : Q === "children"
                      ? _a(c, G)
                      : xe(c, Q, G, U);
              }
              switch (C) {
                case "input":
                  Wn(c, d);
                  break;
                case "textarea":
                  Pa(c, d);
                  break;
                case "select":
                  var W = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var se = d.value;
                  se != null
                    ? Ba(c, !!d.multiple, se, !1)
                    : W !== !!d.multiple &&
                      (d.defaultValue != null
                        ? Ba(c, !!d.multiple, d.defaultValue, !0)
                        : Ba(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Rl] = d;
            } catch (ye) {
              It(n, n.return, ye);
            }
        }
        break;
      case 6:
        if ((wn(r, n), Xa(n), o & 4)) {
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
          (wn(r, n), Xa(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            mo(r.containerInfo);
          } catch (ye) {
            It(n, n.return, ye);
          }
        break;
      case 4:
        wn(r, n), Xa(n);
        break;
      case 13:
        wn(r, n),
          Xa(n),
          (c = n.child),
          c.flags & 8192 &&
            ((d = c.memoizedState !== null),
            (c.stateNode.isHidden = d),
            !d ||
              (c.alternate !== null && c.alternate.memoizedState !== null) ||
              (kc = pt())),
          o & 4 && ju(n);
        break;
      case 22:
        if (
          ((Q = l !== null && l.memoizedState !== null),
          n.mode & 1 ? ((Un = (U = Un) || Q), wn(r, n), (Un = U)) : wn(r, n),
          Xa(n),
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
                    Uu(4, W, W.return);
                    break;
                  case 1:
                    Mu(W, W.return);
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
                    Mu(W, W.return);
                    break;
                  case 22:
                    if (W.memoizedState !== null) {
                      nh(G);
                      continue;
                    }
                }
                se !== null ? ((se.return = W), (pe = se)) : nh(G);
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
        wn(r, n), Xa(n), o & 4 && ju(n);
        break;
      case 21:
        break;
      default:
        wn(r, n), Xa(n);
    }
  }
  function Xa(n) {
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
            o.flags & 32 && (_a(c, ""), (o.flags &= -33));
            var d = eh(n);
            zu(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo,
              C = eh(n);
            Io(n, C, m);
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
  function by(n, r, l) {
    (pe = n), Rd(n);
  }
  function Rd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe,
        d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ou;
        if (!m) {
          var C = c.alternate,
            x = (C !== null && C.memoizedState !== null) || Un;
          C = Ou;
          var U = Un;
          if (((Ou = m), (Un = x) && !U))
            for (pe = c; pe !== null; )
              (m = pe),
                (x = m.child),
                m.tag === 22 && m.memoizedState !== null
                  ? xd(c)
                  : x !== null
                    ? ((x.return = m), (pe = x))
                    : xd(c);
          for (; d !== null; ) (pe = d), Rd(d), (d = d.sibling);
          (pe = c), (Ou = C), (Un = U);
        }
        Fu(n);
      } else
        c.subtreeFlags & 8772 && d !== null
          ? ((d.return = c), (pe = d))
          : Fu(n);
    }
  }
  function Fu(n) {
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
                Un || bc(5, r);
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
                d !== null && Hv(r, d, o);
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
                  Hv(r, m, l);
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
                      G !== null && mo(G);
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
          Un || (r.flags & 512 && _c(r));
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
  function nh(n) {
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
              bc(4, r);
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
              _c(r);
            } catch (x) {
              It(r, d, x);
            }
            break;
          case 5:
            var m = r.return;
            try {
              _c(r);
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
  var _y = Math.ceil,
    zl = je.ReactCurrentDispatcher,
    Dc = je.ReactCurrentOwner,
    pa = je.ReactCurrentBatchConfig,
    Je = 0,
    Qt = null,
    Ut = null,
    cn = 0,
    wr = 0,
    Hu = Ye(0),
    fn = 0,
    Go = null,
    Al = 0,
    Vu = 0,
    wd = 0,
    Ki = null,
    Jn = null,
    kc = 0,
    Bu = 1 / 0,
    Si = null,
    Nc = !1,
    bd = null,
    va = null,
    Pu = !1,
    ha = null,
    Lc = 0,
    Xo = 0,
    Oc = null,
    Ko = -1,
    jl = 0;
  function bn() {
    return Je & 6 ? pt() : Ko !== -1 ? Ko : (Ko = pt());
  }
  function Ei(n) {
    return n.mode & 1
      ? Je & 2 && cn !== 0
        ? cn & -cn
        : Ks.transition !== null
          ? (jl === 0 && (jl = bs()), jl)
          : ((n = gt),
            n !== 0 ||
              ((n = window.event), (n = n === void 0 ? 16 : Of(n.type))),
            n)
      : 1;
  }
  function Pt(n, r, l, o) {
    if (50 < Xo) throw ((Xo = 0), (Oc = null), Error(S(185)));
    hl(n, l, o),
      (!(Je & 2) || n !== Qt) &&
        (n === Qt && (!(Je & 2) && (Vu |= l), fn === 4 && Ka(n, cn)),
        dn(n, o),
        l === 1 &&
          Je === 0 &&
          !(r.mode & 1) &&
          ((Bu = pt() + 500), Rn && yr()));
  }
  function dn(n, r) {
    var l = n.callbackNode;
    ws(n, r);
    var o = Na(n, n === Qt ? cn : 0);
    if (o === 0)
      l !== null && Vt(l), (n.callbackNode = null), (n.callbackPriority = 0);
    else if (((r = o & -o), n.callbackPriority !== r)) {
      if ((l != null && Vt(l), r === 1))
        n.tag === 0 ? ad($u.bind(null, n)) : rd($u.bind(null, n)),
          ed(function () {
            !(Je & 6) && yr();
          }),
          (l = null);
      else {
        switch (kf(o)) {
          case 1:
            l = Fr;
            break;
          case 4:
            l = Ke;
            break;
          case 16:
            l = Ya;
            break;
          case 536870912:
            l = wf;
            break;
          default:
            l = Ya;
        }
        l = ch(l, Mc.bind(null, n));
      }
      (n.callbackPriority = r), (n.callbackNode = l);
    }
  }
  function Mc(n, r) {
    if (((Ko = -1), (jl = 0), Je & 6)) throw Error(S(327));
    var l = n.callbackNode;
    if (Yu() && n.callbackNode !== l) return null;
    var o = Na(n, n === Qt ? cn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = zc(n, o);
    else {
      r = o;
      var c = Je;
      Je |= 2;
      var d = ah();
      (Qt !== n || cn !== r) && ((Si = null), (Bu = pt() + 500), Hl(n, r));
      do
        try {
          ky();
          break;
        } catch (C) {
          rh(n, C);
        }
      while (!0);
      $r(),
        (zl.current = d),
        (Je = c),
        Ut !== null ? (r = 0) : ((Qt = null), (cn = 0), (r = fn));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((c = _f(n)), c !== 0 && ((o = c), (r = Fl(n, c)))),
        r === 1)
      )
        throw ((l = Go), Hl(n, 0), Ka(n, o), dn(n, pt()), l);
      if (r === 6) Ka(n, o);
      else {
        if (
          ((c = n.current.alternate),
          !(o & 30) &&
            !Dd(c) &&
            ((r = zc(n, o)),
            r === 2 && ((d = _f(n)), d !== 0 && ((o = d), (r = Fl(n, d)))),
            r === 1))
        )
          throw ((l = Go), Hl(n, 0), Ka(n, o), dn(n, pt()), l);
        switch (((n.finishedWork = c), (n.finishedLanes = o), r)) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            qi(n, Jn, Si);
            break;
          case 3:
            if (
              (Ka(n, o),
              (o & 130023424) === o && ((r = kc + 500 - pt()), 10 < r))
            ) {
              if (Na(n, 0) !== 0) break;
              if (((c = n.suspendedLanes), (c & o) !== o)) {
                bn(), (n.pingedLanes |= n.suspendedLanes & c);
                break;
              }
              n.timeoutHandle = Tl(qi.bind(null, n, Jn, Si), r);
              break;
            }
            qi(n, Jn, Si);
            break;
          case 4:
            if ((Ka(n, o), (o & 4194240) === o)) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - ea(o);
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
                            : 1960 * _y(o / 1960)) - o),
              10 < o)
            ) {
              n.timeoutHandle = Tl(qi.bind(null, n, Jn, Si), o);
              break;
            }
            qi(n, Jn, Si);
            break;
          case 5:
            qi(n, Jn, Si);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return dn(n, pt()), n.callbackNode === l ? Mc.bind(null, n) : null;
  }
  function Fl(n, r) {
    var l = Ki;
    return (
      n.current.memoizedState.isDehydrated && (Hl(n, r).flags |= 256),
      (n = zc(n, r)),
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
              if (!ra(d(), c)) return !1;
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
  function Ka(n, r) {
    for (
      r &= ~wd,
        r &= ~Vu,
        n.suspendedLanes |= r,
        n.pingedLanes &= ~r,
        n = n.expirationTimes;
      0 < r;

    ) {
      var l = 31 - ea(r),
        o = 1 << l;
      (n[l] = -1), (r &= ~o);
    }
  }
  function $u(n) {
    if (Je & 6) throw Error(S(327));
    Yu();
    var r = Na(n, 0);
    if (!(r & 1)) return dn(n, pt()), null;
    var l = zc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = _f(n);
      o !== 0 && ((r = o), (l = Fl(n, o)));
    }
    if (l === 1) throw ((l = Go), Hl(n, 0), Ka(n, r), dn(n, pt()), l);
    if (l === 6) throw Error(S(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = r),
      qi(n, Jn, Si),
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
      (Je = l), Je === 0 && ((Bu = pt() + 500), Rn && yr());
    }
  }
  function qa(n) {
    ha !== null && ha.tag === 0 && !(Je & 6) && Yu();
    var r = Je;
    Je |= 1;
    var l = pa.transition,
      o = gt;
    try {
      if (((pa.transition = null), (gt = 1), n)) return n();
    } finally {
      (gt = o), (pa.transition = l), (Je = r), !(Je & 6) && yr();
    }
  }
  function Uc() {
    (wr = Hu.current), ft(Hu);
  }
  function Hl(n, r) {
    (n.finishedWork = null), (n.finishedLanes = 0);
    var l = n.timeoutHandle;
    if ((l !== -1 && ((n.timeoutHandle = -1), Nv(l)), Ut !== null))
      for (l = Ut.return; l !== null; ) {
        var o = l;
        switch ((ld(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && la();
            break;
          case 3:
            Cu(), ft(Yt), ft(ze), pd();
            break;
          case 5:
            dd(o);
            break;
          case 4:
            Cu();
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
            Uc();
        }
        l = l.return;
      }
    if (
      ((Qt = n),
      (Ut = n = Ji(n.current, null)),
      (cn = wr = r),
      (fn = 0),
      (Go = null),
      (wd = Vu = Al = 0),
      (Jn = Ki = null),
      bl !== null)
    ) {
      for (r = 0; r < bl.length; r++)
        if (((l = bl[r]), (o = l.interleaved), o !== null)) {
          l.interleaved = null;
          var c = o.next,
            d = l.pending;
          if (d !== null) {
            var m = d.next;
            (d.next = c), (o.next = m);
          }
          l.pending = o;
        }
      bl = null;
    }
    return n;
  }
  function rh(n, r) {
    do {
      var l = Ut;
      try {
        if (($r(), (rc.current = Kn), Yr)) {
          for (var o = Ee.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), (o = o.next);
          }
          Yr = !1;
        }
        if (
          ((ge = 0),
          (qe = Ae = Ee = null),
          (Tu = !1),
          (Fo = 0),
          (Dc.current = null),
          l === null || l.return === null)
        ) {
          (fn = 1), (Go = r), (Ut = null);
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
            var se = Gv(m);
            if (se !== null) {
              (se.flags &= -257),
                gd(se, m, C, d, r),
                se.mode & 1 && $o(d, U, r),
                (r = se),
                (x = U);
              var ve = r.updateQueue;
              if (ve === null) {
                var ye = new Set();
                ye.add(x), (r.updateQueue = ye);
              } else ve.add(x);
              break e;
            } else {
              if (!(r & 1)) {
                $o(d, U, r), qo();
                break e;
              }
              x = Error(S(426));
            }
          } else if (Mt && C.mode & 1) {
            var Jt = Gv(m);
            if (Jt !== null) {
              !(Jt.flags & 65536) && (Jt.flags |= 256),
                gd(Jt, m, C, d, r),
                od(Gi(x, C));
              break e;
            }
          }
          (d = x = Gi(x, C)),
            fn !== 4 && (fn = 2),
            Ki === null ? (Ki = [d]) : Ki.push(d),
            (d = m);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (r &= -r), (d.lanes |= r);
                var k = Qv(d, x, r);
                Fv(d, k);
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
                      (va === null || !va.has(O))))
                ) {
                  (d.flags |= 65536), (r &= -r), (d.lanes |= r);
                  var q = Iv(d, C, r);
                  Fv(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        lh(l);
      } catch (Se) {
        (r = Se), Ut === l && l !== null && (Ut = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ah() {
    var n = zl.current;
    return (zl.current = Kn), n === null ? Kn : n;
  }
  function qo() {
    (fn === 0 || fn === 3 || fn === 2) && (fn = 4),
      Qt === null || (!(Al & 268435455) && !(Vu & 268435455)) || Ka(Qt, cn);
  }
  function zc(n, r) {
    var l = Je;
    Je |= 2;
    var o = ah();
    (Qt !== n || cn !== r) && ((Si = null), Hl(n, r));
    do
      try {
        Dy();
        break;
      } catch (c) {
        rh(n, c);
      }
    while (!0);
    if (($r(), (Je = l), (zl.current = o), Ut !== null)) throw Error(S(261));
    return (Qt = null), (cn = 0), fn;
  }
  function Dy() {
    for (; Ut !== null; ) ih(Ut);
  }
  function ky() {
    for (; Ut !== null && !vr(); ) ih(Ut);
  }
  function ih(n) {
    var r = sh(n.alternate, n, wr);
    (n.memoizedProps = n.pendingProps),
      r === null ? lh(n) : (Ut = r),
      (Dc.current = null);
  }
  function lh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (((n = r.return), r.flags & 32768)) {
        if (((l = xy(l, r)), l !== null)) {
          (l.flags &= 32767), (Ut = l);
          return;
        }
        if (n !== null)
          (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
        else {
          (fn = 6), (Ut = null);
          return;
        }
      } else if (((l = Ry(l, r, wr)), l !== null)) {
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
  function qi(n, r, l) {
    var o = gt,
      c = pa.transition;
    try {
      (pa.transition = null), (gt = 1), Ny(n, r, l, o);
    } finally {
      (pa.transition = c), (gt = o);
    }
    return null;
  }
  function Ny(n, r, l, o) {
    do Yu();
    while (ha !== null);
    if (Je & 6) throw Error(S(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), l === n.current))
      throw Error(S(177));
    (n.callbackNode = null), (n.callbackPriority = 0);
    var d = l.lanes | l.childLanes;
    if (
      (ty(n, d),
      n === Qt && ((Ut = Qt = null), (cn = 0)),
      (!(l.subtreeFlags & 2064) && !(l.flags & 2064)) ||
        Pu ||
        ((Pu = !0),
        ch(Ya, function () {
          return Yu(), null;
        })),
      (d = (l.flags & 15990) !== 0),
      l.subtreeFlags & 15990 || d)
    ) {
      (d = pa.transition), (pa.transition = null);
      var m = gt;
      gt = 1;
      var C = Je;
      (Je |= 4),
        (Dc.current = null),
        wy(n, l),
        th(l, n),
        Hs(Cl),
        (ml = !!Jf),
        (Cl = Jf = null),
        (n.current = l),
        by(l),
        zi(),
        (Je = C),
        (gt = m),
        (pa.transition = d);
    } else n.current = l;
    if (
      (Pu && ((Pu = !1), (ha = n), (Lc = c)),
      (d = n.pendingLanes),
      d === 0 && (va = null),
      Yp(l.stateNode),
      dn(n, pt()),
      r !== null)
    )
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        (c = r[l]), o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Nc) throw ((Nc = !1), (n = bd), (bd = null), n);
    return (
      Lc & 1 && n.tag !== 0 && Yu(),
      (d = n.pendingLanes),
      d & 1 ? (n === Oc ? Xo++ : ((Xo = 0), (Oc = n))) : (Xo = 0),
      yr(),
      null
    );
  }
  function Yu() {
    if (ha !== null) {
      var n = kf(Lc),
        r = pa.transition,
        l = gt;
      try {
        if (((pa.transition = null), (gt = 16 > n ? 16 : n), ha === null))
          var o = !1;
        else {
          if (((n = ha), (ha = null), (Lc = 0), Je & 6)) throw Error(S(331));
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
                        Uu(8, Q, d);
                    }
                    var G = Q.child;
                    if (G !== null) (G.return = Q), (pe = G);
                    else
                      for (; pe !== null; ) {
                        Q = pe;
                        var W = Q.sibling,
                          se = Q.return;
                        if ((Zv(Q), Q === U)) {
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
                      Uu(9, d, d.return);
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
                        bc(9, C);
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
            ka && typeof ka.onPostCommitFiberRoot == "function")
          )
            try {
              ka.onPostCommitFiberRoot(co, n);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (gt = l), (pa.transition = r);
      }
    }
    return !1;
  }
  function uh(n, r, l) {
    (r = Gi(l, r)),
      (r = Qv(n, r, 1)),
      (n = Qi(n, r, 1)),
      (r = bn()),
      n !== null && (hl(n, 1, r), dn(n, r));
  }
  function It(n, r, l) {
    if (n.tag === 3) uh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          uh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (va === null || !va.has(o)))
          ) {
            (n = Gi(l, n)),
              (n = Iv(r, n, 1)),
              (r = Qi(r, n, 1)),
              (n = bn()),
              r !== null && (hl(r, 1, n), dn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Ly(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r),
      (r = bn()),
      (n.pingedLanes |= n.suspendedLanes & l),
      Qt === n &&
        (cn & l) === l &&
        (fn === 4 || (fn === 3 && (cn & 130023424) === cn && 500 > pt() - kc)
          ? Hl(n, 0)
          : (wd |= l)),
      dn(n, r);
  }
  function oh(n, r) {
    r === 0 &&
      (n.mode & 1
        ? ((r = au), (au <<= 1), !(au & 130023424) && (au = 4194304))
        : (r = 1));
    var l = bn();
    (n = mi(n, r)), n !== null && (hl(n, r, l), dn(n, l));
  }
  function Nd(n) {
    var r = n.memoizedState,
      l = 0;
    r !== null && (l = r.retryLane), oh(n, l);
  }
  function Oy(n, r) {
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
    o !== null && o.delete(r), oh(n, l);
  }
  var sh;
  sh = function (n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Yt.current) Rr = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128)) return (Rr = !1), gi(n, r, l);
        Rr = !!(n.flags & 131072);
      }
    else (Rr = !1), Mt && r.flags & 1048576 && id(r, mu, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var o = r.type;
        Qo(n, r), (n = r.pendingProps);
        var c = ia(r, ze.current);
        gu(r, l), (c = Y(null, r, o, n, c, l));
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
              At(o) ? ((d = !0), Ws(r)) : (d = !1),
              (r.memoizedState =
                c.state !== null && c.state !== void 0 ? c.state : null),
              Js(r),
              (c.updater = Ol),
              (r.stateNode = c),
              (c._reactInternals = r),
              md(r, o, n, l),
              (r = Ec(null, r, o, !0, d, l)))
            : ((r.tag = 0), Mt && d && Qs(r), Kt(null, r, c, l), (r = r.child)),
          r
        );
      case 16:
        o = r.elementType;
        e: {
          switch (
            (Qo(n, r),
            (n = r.pendingProps),
            (c = o._init),
            (o = c(o._payload)),
            (r.type = o),
            (c = r.tag = My(o)),
            (n = Tr(o, n)),
            c)
          ) {
            case 0:
              r = Pe(null, r, o, n, l);
              break e;
            case 1:
              r = Yo(null, r, o, n, l);
              break e;
            case 11:
              r = ku(null, r, o, n, l);
              break e;
            case 14:
              r = Xi(null, r, o, Tr(o.type, n), l);
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
          Yo(n, r, o, c, l)
        );
      case 3:
        e: {
          if ((Ty(r), n === null)) throw Error(S(387));
          (o = r.pendingProps),
            (d = r.memoizedState),
            (c = d.element),
            Su(n, r),
            ec(r, o, null, l);
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
              (c = Gi(Error(S(423)), r)), (r = Kv(n, r, o, l, c));
              break e;
            } else if (o !== c) {
              (c = Gi(Error(S(424)), r)), (r = Kv(n, r, o, l, c));
              break e;
            } else
              for (
                Er = Ua(r.stateNode.containerInfo.firstChild),
                  Pr = r,
                  Mt = !0,
                  oa = null,
                  l = Av(r, null, o, l),
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
          Vv(r),
          n === null && Gs(r),
          (o = r.type),
          (c = r.pendingProps),
          (d = n !== null ? n.memoizedProps : null),
          (m = c.children),
          No(o, c) ? (m = null) : d !== null && No(o, d) && (r.flags |= 32),
          Ml(n, r),
          Kt(n, r, m, l),
          r.child
        );
      case 6:
        return n === null && Gs(r), null;
      case 13:
        return qv(n, r, l);
      case 4:
        return (
          fd(r, r.stateNode.containerInfo),
          (o = r.pendingProps),
          n === null ? (r.child = yu(r, null, o, l)) : Kt(n, r, o, l),
          r.child
        );
      case 11:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Tr(o, c)),
          ku(n, r, o, c, l)
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
            vt(hi, o._currentValue),
            (o._currentValue = m),
            d !== null)
          )
            if (ra(d.value, m)) {
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
          gu(r, l),
          (c = ca(c)),
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
          Xi(n, r, o, c, l)
        );
      case 15:
        return Sc(n, r, r.type, r.pendingProps, l);
      case 17:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Tr(o, c)),
          Qo(n, r),
          (r.tag = 1),
          At(o) ? ((n = !0), Ws(r)) : (n = !1),
          gu(r, l),
          $v(r, o, c),
          md(r, o, c, l),
          Ec(null, r, o, !0, n, l)
        );
      case 19:
        return Ed(n, r, l);
      case 22:
        return xr(n, r, l);
    }
    throw Error(S(156, r.tag));
  };
  function ch(n, r) {
    return Lt(n, r);
  }
  function fh(n, r, l, o) {
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
  function ma(n, r, l, o) {
    return new fh(n, r, l, o);
  }
  function Ld(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function My(n) {
    if (typeof n == "function") return Ld(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === Dn)) return 11;
      if (n === yn) return 14;
    }
    return 2;
  }
  function Ji(n, r) {
    var l = n.alternate;
    return (
      l === null
        ? ((l = ma(n.tag, r, n.key, n.mode)),
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
  function Ac(n, r, l, o, c, d) {
    var m = 2;
    if (((o = n), typeof n == "function")) Ld(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else
      e: switch (n) {
        case $e:
          return Vl(l.children, c, d, r);
        case Gt:
          (m = 8), (c |= 8);
          break;
        case mn:
          return (
            (n = ma(12, l, r, c | 2)), (n.elementType = mn), (n.lanes = d), n
          );
        case Fe:
          return (n = ma(13, l, r, c)), (n.elementType = Fe), (n.lanes = d), n;
        case et:
          return (n = ma(19, l, r, c)), (n.elementType = et), (n.lanes = d), n;
        case Zn:
          return jc(l, c, d, r);
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
              case Nt:
                (m = 16), (o = null);
                break e;
            }
          throw Error(S(130, n == null ? n : typeof n, ""));
      }
    return (
      (r = ma(m, l, r, c)), (r.elementType = n), (r.type = o), (r.lanes = d), r
    );
  }
  function Vl(n, r, l, o) {
    return (n = ma(7, n, o, r)), (n.lanes = l), n;
  }
  function jc(n, r, l, o) {
    return (
      (n = ma(22, n, o, r)),
      (n.elementType = Zn),
      (n.lanes = l),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function Fc(n, r, l) {
    return (n = ma(6, n, null, r)), (n.lanes = l), n;
  }
  function Jo(n, r, l) {
    return (
      (r = ma(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = l),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  function Zo(n, r, l, o, c) {
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
      (n = new Zo(n, r, l, C, x)),
      r === 1 ? ((r = 1), d === !0 && (r |= 8)) : (r = 0),
      (d = ma(3, null, null, r)),
      (n.current = d),
      (d.stateNode = n),
      (d.memoizedState = {
        element: o,
        isDehydrated: l,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Js(d),
      n
    );
  }
  function dh(n, r, l) {
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
    if (!n) return Qa;
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
      if (At(l)) return Mo(n, l, r);
    }
    return r;
  }
  function Ud(n, r, l, o, c, d, m, C, x) {
    return (
      (n = Od(l, o, !0, n, c, d, m, C, x)),
      (n.context = Md(null)),
      (l = n.current),
      (o = bn()),
      (c = Ei(l)),
      (d = Cr(o, c)),
      (d.callback = r ?? null),
      Qi(l, d, c),
      (n.current.lanes = c),
      hl(n, c, o),
      dn(n, o),
      n
    );
  }
  function Hc(n, r, l, o) {
    var c = r.current,
      d = bn(),
      m = Ei(c);
    return (
      (l = Md(l)),
      r.context === null ? (r.context = l) : (r.pendingContext = l),
      (r = Cr(d, m)),
      (r.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (r.callback = o),
      (n = Qi(c, r, m)),
      n !== null && (Pt(n, c, m, d), Zs(n, c, m)),
      m
    );
  }
  function es(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ph(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function zd(n, r) {
    ph(n, r), (n = n.alternate) && ph(n, r);
  }
  function Uy() {
    return null;
  }
  var Ad =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function Vc(n) {
    this._internalRoot = n;
  }
  (ts.prototype.render = Vc.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(S(409));
      Hc(n, r, null, null);
    }),
    (ts.prototype.unmount = Vc.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          qa(function () {
            Hc(null, n, null, null);
          }),
            (r[pi] = null);
        }
      });
  function ts(n) {
    this._internalRoot = n;
  }
  ts.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = Gp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Et.length && r !== 0 && r < Et[l].priority; l++);
      Et.splice(l, 0, n), l === 0 && Xp(n);
    }
  };
  function Zi(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function Bc(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function vh() {}
  function zy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function () {
          var U = es(m);
          d.call(U);
        };
      }
      var m = Ud(r, o, n, 0, null, !1, !1, "", vh);
      return (
        (n._reactRootContainer = m),
        (n[pi] = m.current),
        vu(n.nodeType === 8 ? n.parentNode : n),
        qa(),
        m
      );
    }
    for (; (c = n.lastChild); ) n.removeChild(c);
    if (typeof o == "function") {
      var C = o;
      o = function () {
        var U = es(x);
        C.call(U);
      };
    }
    var x = Od(n, 0, !1, null, null, !1, !1, "", vh);
    return (
      (n._reactRootContainer = x),
      (n[pi] = x.current),
      vu(n.nodeType === 8 ? n.parentNode : n),
      qa(function () {
        Hc(r, x, l, o);
      }),
      x
    );
  }
  function Pc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var C = c;
        c = function () {
          var x = es(m);
          C.call(x);
        };
      }
      Hc(r, m, n, c);
    } else m = zy(l, r, n, c, o);
    return es(m);
  }
  (Ip = function (n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = vl(r.pendingLanes);
          l !== 0 &&
            (fo(r, l | 1), dn(r, pt()), !(Je & 6) && ((Bu = pt() + 500), yr()));
        }
        break;
      case 13:
        qa(function () {
          var o = mi(n, 1);
          if (o !== null) {
            var c = bn();
            Pt(o, n, 1, c);
          }
        }),
          zd(n, 1);
    }
  }),
    (_s = function (n) {
      if (n.tag === 13) {
        var r = mi(n, 134217728);
        if (r !== null) {
          var l = bn();
          Pt(r, n, 134217728, l);
        }
        zd(n, 134217728);
      }
    }),
    (St = function (n) {
      if (n.tag === 13) {
        var r = Ei(n),
          l = mi(n, r);
        if (l !== null) {
          var o = bn();
          Pt(l, n, r, o);
        }
        zd(n, r);
      }
    }),
    (Gp = function () {
      return gt;
    }),
    (Nf = function (n, r) {
      var l = gt;
      try {
        return (gt = n), r();
      } finally {
        gt = l;
      }
    }),
    (Ar = function (n, r, l) {
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
                Jr(o), Wn(o, c);
              }
            }
          }
          break;
        case "textarea":
          Pa(n, l);
          break;
        case "select":
          (r = l.value), r != null && Ba(n, !!l.multiple, r, !1);
      }
    }),
    (so = kd),
    (Rs = qa);
  var Ay = { usingClientEntryPoint: !1, Events: [Oo, hu, be, cl, tu, kd] },
    ns = {
      findFiberByHostInstance: aa,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    hh = {
      bundleType: ns.bundleType,
      version: ns.version,
      rendererPackageName: ns.rendererPackageName,
      rendererConfig: ns.rendererConfig,
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
      findFiberByHostInstance: ns.findFiberByHostInstance || Uy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $c = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$c.isDisabled && $c.supportsFiber)
      try {
        (co = $c.inject(hh)), (ka = $c);
      } catch {}
  }
  return (
    (Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ay),
    (Ta.createPortal = function (n, r) {
      var l =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Zi(r)) throw Error(S(200));
      return dh(n, r, null, l);
    }),
    (Ta.createRoot = function (n, r) {
      if (!Zi(n)) throw Error(S(299));
      var l = !1,
        o = "",
        c = Ad;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (c = r.onRecoverableError)),
        (r = Od(n, 1, !1, null, null, l, !1, o, c)),
        (n[pi] = r.current),
        vu(n.nodeType === 8 ? n.parentNode : n),
        new Vc(r)
      );
    }),
    (Ta.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == "function"
          ? Error(S(188))
          : ((n = Object.keys(n).join(",")), Error(S(268, n)));
      return (n = Xe(r)), (n = n === null ? null : n.stateNode), n;
    }),
    (Ta.flushSync = function (n) {
      return qa(n);
    }),
    (Ta.hydrate = function (n, r, l) {
      if (!Bc(r)) throw Error(S(200));
      return Pc(null, n, r, !0, l);
    }),
    (Ta.hydrateRoot = function (n, r, l) {
      if (!Zi(n)) throw Error(S(405));
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
        (n[pi] = r.current),
        vu(n),
        o)
      )
        for (n = 0; n < o.length; n++)
          (l = o[n]),
            (c = l._getVersion),
            (c = c(l._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [l, c])
              : r.mutableSourceEagerHydrationData.push(l, c);
      return new ts(r);
    }),
    (Ta.render = function (n, r, l) {
      if (!Bc(r)) throw Error(S(200));
      return Pc(null, n, r, !1, l);
    }),
    (Ta.unmountComponentAtNode = function (n) {
      if (!Bc(n)) throw Error(S(40));
      return n._reactRootContainer
        ? (qa(function () {
            Pc(null, null, n, !1, function () {
              (n._reactRootContainer = null), (n[pi] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ta.unstable_batchedUpdates = kd),
    (Ta.unstable_renderSubtreeIntoContainer = function (n, r, l, o) {
      if (!Bc(l)) throw Error(S(200));
      if (n == null || n._reactInternals === void 0) throw Error(S(38));
      return Pc(n, r, l, !1, o);
    }),
    (Ta.version = "18.3.1-next-f1338f8080-20240426"),
    Ta
  );
}
var Ra = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var UT;
function hk() {
  return (
    UT ||
      ((UT = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
              new Error(),
            );
          var v = Lr,
            T = tR(),
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
            Nt = 25,
            Zn = !0,
            ee = !1,
            Ne = !1,
            fe = !1,
            lt = !1,
            ct = !0,
            kn = !1,
            er = !0,
            Ha = !0,
            un = !0,
            qr = !0,
            $n = new Set(),
            fr = {},
            Va = {};
          function dr(e, t) {
            Jr(e, t), Jr(e + "Capture", t);
          }
          function Jr(e, t) {
            fr[e] &&
              y(
                "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
                e,
              ),
              (fr[e] = t);
            {
              var a = e.toLowerCase();
              (Va[a] = e), e === "onDoubleClick" && (Va.ondblclick = e);
            }
            for (var i = 0; i < t.length; i++) $n.add(t[i]);
          }
          var gn =
              typeof window < "u" &&
              typeof window.document < "u" &&
              typeof window.document.createElement < "u",
            Yn = Object.prototype.hasOwnProperty;
          function Nn(e) {
            {
              var t = typeof Symbol == "function" && Symbol.toStringTag,
                a =
                  (t && e[Symbol.toStringTag]) ||
                  e.constructor.name ||
                  "Object";
              return a;
            }
          }
          function Ln(e) {
            try {
              return Wn(e), !1;
            } catch {
              return !0;
            }
          }
          function Wn(e) {
            return "" + e;
          }
          function Zr(e, t) {
            if (Ln(e))
              return (
                y(
                  "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  t,
                  Nn(e),
                ),
                Wn(e)
              );
          }
          function xa(e) {
            if (Ln(e))
              return (
                y(
                  "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  Nn(e),
                ),
                Wn(e)
              );
          }
          function ii(e, t) {
            if (Ln(e))
              return (
                y(
                  "The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  t,
                  Nn(e),
                ),
                Wn(e)
              );
          }
          function Ba(e, t) {
            if (Ln(e))
              return (
                y(
                  "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  t,
                  Nn(e),
                ),
                Wn(e)
              );
          }
          function wa(e) {
            if (Ln(e))
              return (
                y(
                  "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
                  Nn(e),
                ),
                Wn(e)
              );
          }
          function Mr(e) {
            if (Ln(e))
              return (
                y(
                  "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",
                  Nn(e),
                ),
                Wn(e)
              );
          }
          var Pa = 0,
            Ur = 1,
            ba = 2,
            en = 3,
            zr = 4,
            Mi = 5,
            _a = 6,
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
              ? t.type === Pa
              : a
                ? !1
                : e.length > 2 &&
                  (e[0] === "o" || e[0] === "O") &&
                  (e[1] === "n" || e[1] === "N");
          }
          function pr(e, t, a, i) {
            if (a !== null && a.type === Pa) return !1;
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
                case zr:
                  return t === !1;
                case Mi:
                  return isNaN(t);
                case _a:
                  return isNaN(t) || t < 1;
              }
            return !1;
          }
          function Ar(e) {
            return _t.hasOwnProperty(e) ? _t[e] : null;
          }
          function Rt(e, t, a, i, u, s, f) {
            (this.acceptsBooleans = t === ba || t === en || t === zr),
              (this.attributeName = i),
              (this.attributeNamespace = u),
              (this.mustUseProperty = a),
              (this.propertyName = e),
              (this.type = t),
              (this.sanitizeURL = s),
              (this.removeEmptyString = f);
          }
          var _t = {},
            eu = [
              "children",
              "dangerouslySetInnerHTML",
              "defaultValue",
              "defaultChecked",
              "innerHTML",
              "suppressContentEditableWarning",
              "suppressHydrationWarning",
              "style",
            ];
          eu.forEach(function (e) {
            _t[e] = new Rt(e, Pa, !1, e, null, !1, !1);
          }),
            [
              ["acceptCharset", "accept-charset"],
              ["className", "class"],
              ["htmlFor", "for"],
              ["httpEquiv", "http-equiv"],
            ].forEach(function (e) {
              var t = e[0],
                a = e[1];
              _t[t] = new Rt(t, Ur, !1, a, null, !1, !1);
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(
              function (e) {
                _t[e] = new Rt(e, ba, !1, e.toLowerCase(), null, !1, !1);
              },
            ),
            [
              "autoReverse",
              "externalResourcesRequired",
              "focusable",
              "preserveAlpha",
            ].forEach(function (e) {
              _t[e] = new Rt(e, ba, !1, e, null, !1, !1);
            }),
            [
              "allowFullScreen",
              "async",
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
              "itemScope",
            ].forEach(function (e) {
              _t[e] = new Rt(e, en, !1, e.toLowerCase(), null, !1, !1);
            }),
            ["checked", "multiple", "muted", "selected"].forEach(function (e) {
              _t[e] = new Rt(e, en, !0, e, null, !1, !1);
            }),
            ["capture", "download"].forEach(function (e) {
              _t[e] = new Rt(e, zr, !1, e, null, !1, !1);
            }),
            ["cols", "rows", "size", "span"].forEach(function (e) {
              _t[e] = new Rt(e, _a, !1, e, null, !1, !1);
            }),
            ["rowSpan", "start"].forEach(function (e) {
              _t[e] = new Rt(e, Mi, !1, e.toLowerCase(), null, !1, !1);
            });
          var cl = /[\-\:]([a-z])/g,
            tu = function (e) {
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
          ].forEach(function (e) {
            var t = e.replace(cl, tu);
            _t[t] = new Rt(t, Ur, !1, e, null, !1, !1);
          }),
            [
              "xlink:actuate",
              "xlink:arcrole",
              "xlink:role",
              "xlink:show",
              "xlink:title",
              "xlink:type",
            ].forEach(function (e) {
              var t = e.replace(cl, tu);
              _t[t] = new Rt(
                t,
                Ur,
                !1,
                e,
                "http://www.w3.org/1999/xlink",
                !1,
                !1,
              );
            }),
            ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
              var t = e.replace(cl, tu);
              _t[t] = new Rt(
                t,
                Ur,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1,
              );
            }),
            ["tabIndex", "crossOrigin"].forEach(function (e) {
              _t[e] = new Rt(e, Ur, !1, e.toLowerCase(), null, !1, !1);
            });
          var so = "xlinkHref";
          (_t[so] = new Rt(
            "xlinkHref",
            Ur,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
            ["src", "href", "action", "formAction"].forEach(function (e) {
              _t[e] = new Rt(e, Ur, !1, e.toLowerCase(), null, !0, !0);
            });
          var Rs =
              /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
            fl = !1;
          function nu(e) {
            !fl &&
              Rs.test(e) &&
              ((fl = !0),
              y(
                "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
                JSON.stringify(e),
              ));
          }
          function dl(e, t, a, i) {
            if (i.mustUseProperty) {
              var u = i.propertyName;
              return e[u];
            } else {
              Zr(a, t), i.sanitizeURL && nu("" + a);
              var s = i.attributeName,
                f = null;
              if (i.type === zr) {
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
          function ru(e, t, a, i) {
            {
              if (!Sn(t)) return;
              if (!e.hasAttribute(t)) return a === void 0 ? void 0 : null;
              var u = e.getAttribute(t);
              return Zr(a, t), u === "" + a ? a : u;
            }
          }
          function $a(e, t, a, i) {
            var u = Ar(t);
            if (!Xt(t, u, i)) {
              if ((bt(t, a, u, i) && (a = null), i || u === null)) {
                if (Sn(t)) {
                  var s = t;
                  a === null
                    ? e.removeAttribute(s)
                    : (Zr(a, t), e.setAttribute(s, "" + a));
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
                _ === en || (_ === zr && a === !0)
                  ? (w = "")
                  : (Zr(a, g), (w = "" + a), u.sanitizeURL && nu(w.toString())),
                  E ? e.setAttributeNS(E, g, w) : e.setAttribute(g, w);
              }
            }
          }
          var li = Symbol.for("react.element"),
            jr = Symbol.for("react.portal"),
            Da = Symbol.for("react.fragment"),
            Ui = Symbol.for("react.strict_mode"),
            pl = Symbol.for("react.profiler"),
            R = Symbol.for("react.provider"),
            I = Symbol.for("react.context"),
            ne = Symbol.for("react.forward_ref"),
            Te = Symbol.for("react.suspense"),
            tt = Symbol.for("react.suspense_list"),
            it = Symbol.for("react.memo"),
            Me = Symbol.for("react.lazy"),
            Xe = Symbol.for("react.scope"),
            En = Symbol.for("react.debug_trace_mode"),
            Lt = Symbol.for("react.offscreen"),
            Vt = Symbol.for("react.legacy_hidden"),
            vr = Symbol.for("react.cache"),
            zi = Symbol.for("react.tracing_marker"),
            pt = Symbol.iterator,
            Qn = "@@iterator";
          function Fr(e) {
            if (e === null || typeof e != "object") return null;
            var t = (pt && e[pt]) || e[Qn];
            return typeof t == "function" ? t : null;
          }
          var Ke = Object.assign,
            Ya = 0,
            $p,
            wf,
            co,
            ka,
            Yp,
            ea,
            Wp;
          function Qp() {}
          Qp.__reactDisabledLog = !0;
          function ey() {
            {
              if (Ya === 0) {
                ($p = console.log),
                  (wf = console.info),
                  (co = console.warn),
                  (ka = console.error),
                  (Yp = console.group),
                  (ea = console.groupCollapsed),
                  (Wp = console.groupEnd);
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: Qp,
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
              Ya++;
            }
          }
          function xs() {
            {
              if ((Ya--, Ya === 0)) {
                var e = { configurable: !0, enumerable: !0, writable: !0 };
                Object.defineProperties(console, {
                  log: Ke({}, e, { value: $p }),
                  info: Ke({}, e, { value: wf }),
                  warn: Ke({}, e, { value: co }),
                  error: Ke({}, e, { value: ka }),
                  group: Ke({}, e, { value: Yp }),
                  groupCollapsed: Ke({}, e, { value: ea }),
                  groupEnd: Ke({}, e, { value: Wp }),
                });
              }
              Ya < 0 &&
                y(
                  "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
                );
            }
          }
          var au = S.ReactCurrentDispatcher,
            vl;
          function Na(e, t, a) {
            {
              if (vl === void 0)
                try {
                  throw Error();
                } catch (u) {
                  var i = u.stack.trim().match(/\n( *(at )?)/);
                  vl = (i && i[1]) || "";
                }
              return (
                `
` +
                vl +
                e
              );
            }
          }
          var bf = !1,
            ws;
          {
            var _f = typeof WeakMap == "function" ? WeakMap : Map;
            ws = new _f();
          }
          function bs(e, t) {
            if (!e || bf) return "";
            {
              var a = ws.get(e);
              if (a !== void 0) return a;
            }
            var i;
            bf = !0;
            var u = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var s;
            (s = au.current), (au.current = null), ey();
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
                            typeof e == "function" && ws.set(e, _),
                            _
                          );
                        }
                      while (g >= 1 && E >= 0);
                    break;
                  }
              }
            } finally {
              (bf = !1), (au.current = s), xs(), (Error.prepareStackTrace = u);
            }
            var w = e ? e.displayName || e.name : "",
              M = w ? Na(w) : "";
            return typeof e == "function" && ws.set(e, M), M;
          }
          function Df(e, t, a) {
            return bs(e, !0);
          }
          function hl(e, t, a) {
            return bs(e, !1);
          }
          function ty(e) {
            var t = e.prototype;
            return !!(t && t.isReactComponent);
          }
          function fo(e, t, a) {
            if (e == null) return "";
            if (typeof e == "function") return bs(e, ty(e));
            if (typeof e == "string") return Na(e);
            switch (e) {
              case Te:
                return Na("Suspense");
              case tt:
                return Na("SuspenseList");
            }
            if (typeof e == "object")
              switch (e.$$typeof) {
                case ne:
                  return hl(e.render);
                case it:
                  return fo(e.type, t, a);
                case Me: {
                  var i = e,
                    u = i._payload,
                    s = i._init;
                  try {
                    return fo(s(u), t, a);
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
                return Na(e.type);
              case Gt:
                return Na("Lazy");
              case We:
                return Na("Suspense");
              case dt:
                return Na("SuspenseList");
              case P:
              case Z:
              case $e:
                return hl(e.type);
              case xe:
                return hl(e.type.render);
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
          function Ip(e, t, a) {
            var i = e.displayName;
            if (i) return i;
            var u = t.displayName || t.name || "";
            return u !== "" ? a + "(" + u + ")" : a;
          }
          function _s(e) {
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
              case Da:
                return "Fragment";
              case jr:
                return "Portal";
              case pl:
                return "Profiler";
              case Ui:
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
                  return _s(t) + ".Consumer";
                case R:
                  var a = e;
                  return _s(a._context) + ".Provider";
                case ne:
                  return Ip(e, e.render, "ForwardRef");
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
          function Gp(e, t, a) {
            var i = t.displayName || t.name || "";
            return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
          }
          function Nf(e) {
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
                return Nf(i) + ".Consumer";
              case ke:
                var u = a;
                return Nf(u._context) + ".Provider";
              case wt:
                return "DehydratedFragment";
              case xe:
                return Gp(a, a.render, "ForwardRef");
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
                return a === Ui ? "StrictMode" : "Mode";
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
              case Nt:
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
          var po = S.ReactDebugCurrentFrame,
            tn = null,
            ta = !1;
          function na() {
            {
              if (tn === null) return null;
              var e = tn._debugOwner;
              if (e !== null && typeof e < "u") return Be(e);
            }
            return null;
          }
          function vo() {
            return tn === null ? "" : kf(tn);
          }
          function on() {
            (po.getCurrentStack = null), (tn = null), (ta = !1);
          }
          function Et(e) {
            (po.getCurrentStack = e === null ? null : vo), (tn = e), (ta = !1);
          }
          function ny() {
            return tn;
          }
          function La(e) {
            ta = e;
          }
          function In(e) {
            return "" + e;
          }
          function Ai(e) {
            switch (typeof e) {
              case "boolean":
              case "number":
              case "string":
              case "undefined":
                return e;
              case "object":
                return Mr(e), e;
              default:
                return "";
            }
          }
          var Xp = {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0,
          };
          function iu(e, t) {
            Xp[t.type] ||
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
          function Lf(e) {
            var t = e.type,
              a = e.nodeName;
            return (
              a &&
              a.toLowerCase() === "input" &&
              (t === "checkbox" || t === "radio")
            );
          }
          function Kp(e) {
            return e._valueTracker;
          }
          function ho(e) {
            e._valueTracker = null;
          }
          function mo(e) {
            var t = "";
            return (
              e && (Lf(e) ? (t = e.checked ? "true" : "false") : (t = e.value)),
              t
            );
          }
          function lu(e) {
            var t = Lf(e) ? "checked" : "value",
              a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            Mr(e[t]);
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
                  Mr(p), (i = "" + p), s.call(this, p);
                },
              }),
                Object.defineProperty(e, t, { enumerable: a.enumerable });
              var f = {
                getValue: function () {
                  return i;
                },
                setValue: function (p) {
                  Mr(p), (i = "" + p);
                },
                stopTracking: function () {
                  ho(e), delete e[t];
                },
              };
              return f;
            }
          }
          function ml(e) {
            Kp(e) || (e._valueTracker = lu(e));
          }
          function qp(e) {
            if (!e) return !1;
            var t = Kp(e);
            if (!t) return !0;
            var a = t.getValue(),
              i = mo(e);
            return i !== a ? (t.setValue(i), !0) : !1;
          }
          function Ds(e) {
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
          var ks = !1,
            yo = !1,
            Ns = !1,
            Of = !1;
          function ui(e) {
            var t = e.type === "checkbox" || e.type === "radio";
            return t ? e.checked != null : e.value != null;
          }
          function go(e, t) {
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
          function So(e, t) {
            iu("input", t),
              t.checked !== void 0 &&
                t.defaultChecked !== void 0 &&
                !yo &&
                (y(
                  "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                  na() || "A component",
                  t.type,
                ),
                (yo = !0)),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !ks &&
                (y(
                  "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                  na() || "A component",
                  t.type,
                ),
                (ks = !0));
            var a = e,
              i = t.defaultValue == null ? "" : t.defaultValue;
            a._wrapperState = {
              initialChecked: t.checked != null ? t.checked : t.defaultChecked,
              initialValue: Ai(t.value != null ? t.value : i),
              controlled: ui(t),
            };
          }
          function Mf(e, t) {
            var a = e,
              i = t.checked;
            i != null && $a(a, "checked", i, !1);
          }
          function uu(e, t) {
            var a = e;
            {
              var i = ui(t);
              !a._wrapperState.controlled &&
                i &&
                !Of &&
                (y(
                  "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
                ),
                (Of = !0)),
                a._wrapperState.controlled &&
                  !i &&
                  !Ns &&
                  (y(
                    "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
                  ),
                  (Ns = !0));
            }
            Mf(e, t);
            var u = Ai(t.value),
              s = t.type;
            if (u != null)
              s === "number"
                ? ((u === 0 && a.value === "") || a.value != u) &&
                  (a.value = In(u))
                : a.value !== In(u) && (a.value = In(u));
            else if (s === "submit" || s === "reset") {
              a.removeAttribute("value");
              return;
            }
            t.hasOwnProperty("value")
              ? ji(a, t.type, u)
              : t.hasOwnProperty("defaultValue") &&
                ji(a, t.type, Ai(t.defaultValue)),
              t.checked == null &&
                t.defaultChecked != null &&
                (a.defaultChecked = !!t.defaultChecked);
          }
          function Eo(e, t, a) {
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
          function Jp(e, t) {
            var a = e;
            uu(a, t), Hr(a, t);
          }
          function Hr(e, t) {
            var a = t.name;
            if (t.type === "radio" && a != null) {
              for (var i = e; i.parentNode; ) i = i.parentNode;
              Zr(a, "name");
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
                  var p = Oh(f);
                  if (!p)
                    throw new Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.",
                    );
                  qp(f), uu(f, p);
                }
              }
            }
          }
          function ji(e, t, a) {
            (t !== "number" || Ds(e.ownerDocument) !== e) &&
              (a == null
                ? (e.defaultValue = In(e._wrapperState.initialValue))
                : e.defaultValue !== In(a) && (e.defaultValue = In(a)));
          }
          var Ls = !1,
            ou = !1,
            Zp = !1;
          function Os(e, t) {
            t.value == null &&
              (typeof t.children == "object" && t.children !== null
                ? v.Children.forEach(t.children, function (a) {
                    a != null &&
                      (typeof a == "string" ||
                        typeof a == "number" ||
                        ou ||
                        ((ou = !0),
                        y(
                          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.",
                        )));
                  })
                : t.dangerouslySetInnerHTML != null &&
                  (Zp ||
                    ((Zp = !0),
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
            t.value != null && e.setAttribute("value", In(Ai(t.value)));
          }
          var Co = Array.isArray;
          function Cn(e) {
            return Co(e);
          }
          var Ms;
          Ms = !1;
          function ev() {
            var e = na();
            return e
              ? `

Check the render method of \`` +
                  e +
                  "`."
              : "";
          }
          var tv = ["value", "defaultValue"];
          function ry(e) {
            {
              iu("select", e);
              for (var t = 0; t < tv.length; t++) {
                var a = tv[t];
                if (e[a] != null) {
                  var i = Cn(e[a]);
                  e.multiple && !i
                    ? y(
                        "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
                        a,
                        ev(),
                      )
                    : !e.multiple &&
                      i &&
                      y(
                        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
                        a,
                        ev(),
                      );
                }
              }
            }
          }
          function Fi(e, t, a, i) {
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
              for (var E = In(Ai(a)), _ = null, w = 0; w < u.length; w++) {
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
            return Ke({}, t, { value: void 0 });
          }
          function nv(e, t) {
            var a = e;
            ry(t),
              (a._wrapperState = { wasMultiple: !!t.multiple }),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !Ms &&
                (y(
                  "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                ),
                (Ms = !0));
          }
          function ay(e, t) {
            var a = e;
            a.multiple = !!t.multiple;
            var i = t.value;
            i != null
              ? Fi(a, !!t.multiple, i, !1)
              : t.defaultValue != null &&
                Fi(a, !!t.multiple, t.defaultValue, !0);
          }
          function iy(e, t) {
            var a = e,
              i = a._wrapperState.wasMultiple;
            a._wrapperState.wasMultiple = !!t.multiple;
            var u = t.value;
            u != null
              ? Fi(a, !!t.multiple, u, !1)
              : i !== !!t.multiple &&
                (t.defaultValue != null
                  ? Fi(a, !!t.multiple, t.defaultValue, !0)
                  : Fi(a, !!t.multiple, t.multiple ? [] : "", !1));
          }
          function ly(e, t) {
            var a = e,
              i = t.value;
            i != null && Fi(a, !!t.multiple, i, !1);
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
          function rv(e, t) {
            var a = e;
            iu("textarea", t),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !Af &&
                (y(
                  "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                  na() || "A component",
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
            a._wrapperState = { initialValue: Ai(i) };
          }
          function av(e, t) {
            var a = e,
              i = Ai(t.value),
              u = Ai(t.defaultValue);
            if (i != null) {
              var s = In(i);
              s !== a.value && (a.value = s),
                t.defaultValue == null &&
                  a.defaultValue !== s &&
                  (a.defaultValue = s);
            }
            u != null && (a.defaultValue = In(u));
          }
          function iv(e, t) {
            var a = e,
              i = a.textContent;
            i === a._wrapperState.initialValue &&
              i !== "" &&
              i !== null &&
              (a.value = i);
          }
          function Ff(e, t) {
            av(e, t);
          }
          var oi = "http://www.w3.org/1999/xhtml",
            uy = "http://www.w3.org/1998/Math/MathML",
            Hf = "http://www.w3.org/2000/svg";
          function Us(e) {
            switch (e) {
              case "svg":
                return Hf;
              case "math":
                return uy;
              default:
                return oi;
            }
          }
          function Vf(e, t) {
            return e == null || e === oi
              ? Us(t)
              : e === Hf && t === "foreignObject"
                ? oi
                : e;
          }
          var oy = function (e) {
              return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (t, a, i, u) {
                    MSApp.execUnsafeLocalFunction(function () {
                      return e(t, a, i, u);
                    });
                  }
                : e;
            },
            zs,
            lv = oy(function (e, t) {
              if (e.namespaceURI === Hf && !("innerHTML" in e)) {
                (zs = zs || document.createElement("div")),
                  (zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>");
                for (var a = zs.firstChild; e.firstChild; )
                  e.removeChild(e.firstChild);
                for (; a.firstChild; ) e.appendChild(a.firstChild);
                return;
              }
              e.innerHTML = t;
            }),
            hr = 1,
            si = 3,
            nn = 8,
            Oa = 9,
            yl = 11,
            As = function (e, t) {
              if (t) {
                var a = e.firstChild;
                if (a && a === e.lastChild && a.nodeType === si) {
                  a.nodeValue = t;
                  return;
                }
              }
              e.textContent = t;
            },
            uv = {
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
            su = {
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
            };
          function ov(e, t) {
            return e + t.charAt(0).toUpperCase() + t.substring(1);
          }
          var sv = ["Webkit", "ms", "Moz", "O"];
          Object.keys(su).forEach(function (e) {
            sv.forEach(function (t) {
              su[ov(t, e)] = su[e];
            });
          });
          function js(e, t, a) {
            var i = t == null || typeof t == "boolean" || t === "";
            return i
              ? ""
              : !a &&
                  typeof t == "number" &&
                  t !== 0 &&
                  !(su.hasOwnProperty(e) && su[e])
                ? t + "px"
                : (Ba(t, e), ("" + t).trim());
          }
          var cu = /([A-Z])/g,
            sy = /^ms-/;
          function cy(e) {
            return e.replace(cu, "-$1").toLowerCase().replace(sy, "-ms-");
          }
          var cv = function () {};
          {
            var fv = /^(?:webkit|moz|o)[A-Z]/,
              dv = /^-ms-/,
              To = /-(.)/g,
              fu = /;\s*$/,
              du = {},
              pu = {},
              pv = !1,
              Bf = !1,
              Pf = function (e) {
                return e.replace(To, function (t, a) {
                  return a.toUpperCase();
                });
              },
              $f = function (e) {
                (du.hasOwnProperty(e) && du[e]) ||
                  ((du[e] = !0),
                  y(
                    "Unsupported style property %s. Did you mean %s?",
                    e,
                    Pf(e.replace(dv, "ms-")),
                  ));
              },
              vv = function (e) {
                (du.hasOwnProperty(e) && du[e]) ||
                  ((du[e] = !0),
                  y(
                    "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                    e,
                    e.charAt(0).toUpperCase() + e.slice(1),
                  ));
              },
              hv = function (e, t) {
                (pu.hasOwnProperty(t) && pu[t]) ||
                  ((pu[t] = !0),
                  y(
                    `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                    e,
                    t.replace(fu, ""),
                  ));
              },
              mv = function (e, t) {
                pv ||
                  ((pv = !0),
                  y(
                    "`NaN` is an invalid value for the `%s` css style property.",
                    e,
                  ));
              },
              fy = function (e, t) {
                Bf ||
                  ((Bf = !0),
                  y(
                    "`Infinity` is an invalid value for the `%s` css style property.",
                    e,
                  ));
              };
            cv = function (e, t) {
              e.indexOf("-") > -1
                ? $f(e)
                : fv.test(e)
                  ? vv(e)
                  : fu.test(t) && hv(e, t),
                typeof t == "number" &&
                  (isNaN(t) ? mv(e, t) : isFinite(t) || fy(e, t));
            };
          }
          var dy = cv;
          function py(e) {
            {
              var t = "",
                a = "";
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  var u = e[i];
                  if (u != null) {
                    var s = i.indexOf("--") === 0;
                    (t += a + (s ? i : cy(i)) + ":"),
                      (t += js(i, u, s)),
                      (a = ";");
                  }
                }
              return t || null;
            }
          }
          function yv(e, t) {
            var a = e.style;
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                var u = i.indexOf("--") === 0;
                u || dy(i, t[i]);
                var s = js(i, t[i], u);
                i === "float" && (i = "cssFloat"),
                  u ? a.setProperty(i, s) : (a[i] = s);
              }
          }
          function vy(e) {
            return e == null || typeof e == "boolean" || e === "";
          }
          function ra(e) {
            var t = {};
            for (var a in e)
              for (var i = uv[a] || [a], u = 0; u < i.length; u++) t[i[u]] = a;
            return t;
          }
          function Ro(e, t) {
            {
              if (!t) return;
              var a = ra(e),
                i = ra(t),
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
                      vy(e[f]) ? "Removing" : "Updating",
                      f,
                      p,
                    );
                }
              }
            }
          }
          var gv = {
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
            Sv = Ke({ menuitem: !0 }, gv),
            Ev = "__html";
          function Fs(e, t) {
            if (t) {
              if (
                Sv[e] &&
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
                  !(Ev in t.dangerouslySetInnerHTML)
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
          function ci(e, t) {
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
          var Hs = {
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
            Cv = {
              "aria-current": 0,
              "aria-description": 0,
              "aria-details": 0,
              "aria-disabled": 0,
              "aria-hidden": 0,
              "aria-invalid": 0,
              "aria-keyshortcuts": 0,
              "aria-label": 0,
              "aria-roledescription": 0,
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
              "aria-atomic": 0,
              "aria-busy": 0,
              "aria-live": 0,
              "aria-relevant": 0,
              "aria-dropeffect": 0,
              "aria-grabbed": 0,
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
            Ma = {},
            Yf = new RegExp("^(aria)-[" + we + "]*$"),
            xo = new RegExp("^(aria)[A-Z][" + we + "]*$");
          function Wf(e, t) {
            {
              if (Yn.call(Ma, t) && Ma[t]) return !0;
              if (xo.test(t)) {
                var a = "aria-" + t.slice(4).toLowerCase(),
                  i = Cv.hasOwnProperty(a) ? a : null;
                if (i == null)
                  return (
                    y(
                      "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                      t,
                    ),
                    (Ma[t] = !0),
                    !0
                  );
                if (t !== i)
                  return (
                    y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i),
                    (Ma[t] = !0),
                    !0
                  );
              }
              if (Yf.test(t)) {
                var u = t.toLowerCase(),
                  s = Cv.hasOwnProperty(u) ? u : null;
                if (s == null) return (Ma[t] = !0), !1;
                if (t !== s)
                  return (
                    y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s),
                    (Ma[t] = !0),
                    !0
                  );
              }
            }
            return !0;
          }
          function Tv(e, t) {
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
          function Vs(e, t) {
            ci(e, t) || Tv(e, t);
          }
          var gl = !1;
          function Qf(e, t) {
            {
              if (e !== "input" && e !== "textarea" && e !== "select") return;
              t != null &&
                t.value === null &&
                !gl &&
                ((gl = !0),
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
              Rv = /^on[^A-Z]/,
              xv = new RegExp("^(aria)-[" + we + "]*$"),
              wv = new RegExp("^(aria)[A-Z][" + we + "]*$");
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
                  Rv.test(t) &&
                    y(
                      "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                      t,
                    ),
                  (Tn[t] = !0),
                  !0
                );
              if (xv.test(t) || wv.test(t)) return !0;
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
              var h = Ar(t),
                g = h !== null && h.type === Pa;
              if (Hs.hasOwnProperty(u)) {
                var E = Hs[u];
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
          var bv = function (e, t, a) {
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
          function _v(e, t, a) {
            ci(e, t) || bv(e, t, a);
          }
          var fi = 1,
            wo = 2,
            Sl = 4,
            hy = fi | wo | Sl,
            bo = null;
          function _o(e) {
            bo !== null &&
              y(
                "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.",
              ),
              (bo = e);
          }
          function my() {
            bo === null &&
              y(
                "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.",
              ),
              (bo = null);
          }
          function Dv(e) {
            return e === bo;
          }
          function Bs(e) {
            var t = e.target || e.srcElement || window;
            return (
              t.correspondingUseElement && (t = t.correspondingUseElement),
              t.nodeType === si ? t.parentNode : t
            );
          }
          var xt = null,
            Hi = null,
            di = null;
          function vu(e) {
            var t = Iu(e);
            if (t) {
              if (typeof xt != "function")
                throw new Error(
                  "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.",
                );
              var a = t.stateNode;
              if (a) {
                var i = Oh(a);
                xt(t.stateNode, t.type, i);
              }
            }
          }
          function kv(e) {
            xt = e;
          }
          function Ps(e) {
            Hi ? (di ? di.push(e) : (di = [e])) : (Hi = e);
          }
          function Do() {
            return Hi !== null || di !== null;
          }
          function ko() {
            if (Hi) {
              var e = Hi,
                t = di;
              if (((Hi = null), (di = null), vu(e), t))
                for (var a = 0; a < t.length; a++) vu(t[a]);
            }
          }
          var El = function (e, t) {
              return e(t);
            },
            Xf = function () {},
            Kf = !1;
          function yy() {
            var e = Do();
            e && (Xf(), ko());
          }
          function qf(e, t, a) {
            if (Kf) return e(t, a);
            Kf = !0;
            try {
              return El(e, t, a);
            } finally {
              (Kf = !1), yy();
            }
          }
          function $s(e, t, a) {
            (El = e), (Xf = a);
          }
          function Ys(e) {
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
                return !!(a.disabled && Ys(t));
              default:
                return !1;
            }
          }
          function Cl(e, t) {
            var a = e.stateNode;
            if (a === null) return null;
            var i = Oh(a);
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
          var No = !1;
          if (gn)
            try {
              var Tl = {};
              Object.defineProperty(Tl, "passive", {
                get: function () {
                  No = !0;
                },
              }),
                window.addEventListener("test", Tl, Tl),
                window.removeEventListener("test", Tl, Tl);
            } catch {
              No = !1;
            }
          function Nv(e, t, a, i, u, s, f, p, h) {
            var g = Array.prototype.slice.call(arguments, 3);
            try {
              t.apply(a, g);
            } catch (E) {
              this.onError(E);
            }
          }
          var Zf = Nv;
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
              function N(L) {
                if (
                  ((Ce = L.error),
                  (rt = !0),
                  Ce === null && L.colno === 0 && L.lineno === 0 && (Ze = !0),
                  L.defaultPrevented && Ce != null && typeof Ce == "object")
                )
                  try {
                    Ce._suppressLogging = !0;
                  } catch {}
              }
              var V = "react-" + (t || "invokeguardedcallback");
              if (
                (window.addEventListener("error", N),
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
                window.removeEventListener("error", N),
                !_)
              )
                return H(), Nv.apply(this, arguments);
            };
          }
          var gy = Zf,
            Vi = !1,
            Ua = null,
            Lo = !1,
            Bi = null,
            Wa = {
              onError: function (e) {
                (Vi = !0), (Ua = e);
              },
            };
          function Rl(e, t, a, i, u, s, f, p, h) {
            (Vi = !1), (Ua = null), gy.apply(Wa, arguments);
          }
          function pi(e, t, a, i, u, s, f, p, h) {
            if ((Rl.apply(this, arguments), Vi)) {
              var g = nd();
              Lo || ((Lo = !0), (Bi = g));
            }
          }
          function td() {
            if (Lo) {
              var e = Bi;
              throw ((Lo = !1), (Bi = null), e);
            }
          }
          function Sy() {
            return Vi;
          }
          function nd() {
            if (Vi) {
              var e = Ua;
              return (Vi = !1), (Ua = null), e;
            } else
              throw new Error(
                "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.",
              );
          }
          function aa(e) {
            return e._reactInternals;
          }
          function Oo(e) {
            return e._reactInternals !== void 0;
          }
          function hu(e, t) {
            e._reactInternals = t;
          }
          var be = 0,
            Pi = 1,
            Ot = 2,
            Ye = 4,
            ft = 16,
            vt = 32,
            Qa = 64,
            ze = 128,
            Yt = 256,
            mr = 512,
            ia = 1024,
            At = 2048,
            la = 4096,
            $i = 8192,
            Mo = 16384,
            Ws = At | Ye | Qa | mr | ia | Mo,
            Lv = 32767,
            Vr = 32768,
            Rn = 65536,
            Uo = 131072,
            rd = 1048576,
            ad = 2097152,
            yr = 4194304,
            Yi = 8388608,
            gr = 16777216,
            xl = 33554432,
            mu = Ye | ia | 0,
            Sr = Ot | Ye | ft | vt | mr | la | $i,
            Gn = Ye | Qa | mr | $i,
            ua = At | ft,
            On = yr | Yi | ad,
            vi = S.ReactCurrentOwner;
          function Br(e) {
            var t = e,
              a = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
              var i = t;
              do
                (t = i),
                  (t.flags & (Ot | la)) !== be && (a = t.return),
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
          function Qs(e) {
            return e.tag === $ ? e.stateNode.containerInfo : null;
          }
          function ld(e) {
            return Br(e) === e;
          }
          function Pr(e) {
            {
              var t = vi.current;
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
            var u = aa(e);
            return u ? Br(u) === u : !1;
          }
          function Er(e) {
            if (Br(e) !== e)
              throw new Error("Unable to find node on an unmounted component.");
          }
          function Mt(e) {
            var t = e.alternate;
            if (!t) {
              var a = Br(e);
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
          function oa(e) {
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
          function Ov(e) {
            var t = Mt(e);
            return t !== null ? Is(t) : null;
          }
          function Is(e) {
            if (e.tag === oe || e.tag === _e) return e;
            for (var t = e.child; t !== null; ) {
              if (t.tag !== J) {
                var a = Is(t);
                if (a !== null) return a;
              }
              t = t.sibling;
            }
            return null;
          }
          var Gs = T.unstable_scheduleCallback,
            Mv = T.unstable_cancelCallback,
            Xs = T.unstable_shouldYield,
            Uv = T.unstable_requestPaint,
            Bt = T.unstable_now,
            od = T.unstable_getCurrentPriorityLevel,
            Ks = T.unstable_ImmediatePriority,
            wl = T.unstable_UserBlockingPriority,
            Ia = T.unstable_NormalPriority,
            zv = T.unstable_LowPriority,
            qs = T.unstable_IdlePriority,
            yu = T.unstable_yieldValue,
            Av = T.unstable_setDisableYieldValue,
            hi = null,
            sn = null,
            re = null,
            sa = !1,
            $r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
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
              Ha &&
                (e = Ke({}, e, {
                  getLaneLabelMap: mi,
                  injectProfilingHooks: jv,
                })),
                (hi = t.inject(e)),
                (sn = t);
            } catch (a) {
              y("React instrumentation encountered an error: %s.", a);
            }
            return !!t.checkDCE;
          }
          function cd(e, t) {
            if (sn && typeof sn.onScheduleFiberRoot == "function")
              try {
                sn.onScheduleFiberRoot(hi, e, t);
              } catch (a) {
                sa ||
                  ((sa = !0),
                  y("React instrumentation encountered an error: %s", a));
              }
          }
          function gu(e, t) {
            if (sn && typeof sn.onCommitFiberRoot == "function")
              try {
                var a = (e.current.flags & ze) === ze;
                if (un) {
                  var i;
                  switch (t) {
                    case qt:
                      i = Ks;
                      break;
                    case gi:
                      i = wl;
                      break;
                    case Ga:
                      i = Ia;
                      break;
                    case Nu:
                      i = qs;
                      break;
                    default:
                      i = Ia;
                      break;
                  }
                  sn.onCommitFiberRoot(hi, e, i, a);
                }
              } catch (u) {
                sa ||
                  ((sa = !0),
                  y("React instrumentation encountered an error: %s", u));
              }
          }
          function ca(e) {
            if (sn && typeof sn.onPostCommitFiberRoot == "function")
              try {
                sn.onPostCommitFiberRoot(hi, e);
              } catch (t) {
                sa ||
                  ((sa = !0),
                  y("React instrumentation encountered an error: %s", t));
              }
          }
          function bl(e) {
            if (sn && typeof sn.onCommitFiberUnmount == "function")
              try {
                sn.onCommitFiberUnmount(hi, e);
              } catch (t) {
                sa ||
                  ((sa = !0),
                  y("React instrumentation encountered an error: %s", t));
              }
          }
          function rn(e) {
            if (
              (typeof yu == "function" && (Av(e), A(e)),
              sn && typeof sn.setStrictMode == "function")
            )
              try {
                sn.setStrictMode(hi, e);
              } catch (t) {
                sa ||
                  ((sa = !0),
                  y("React instrumentation encountered an error: %s", t));
              }
          }
          function jv(e) {
            re = e;
          }
          function mi() {
            {
              for (var e = new Map(), t = 1, a = 0; a < Ho; a++) {
                var i = Cy(t);
                e.set(t, i), (t *= 2);
              }
              return e;
            }
          }
          function Wi(e) {
            re !== null &&
              typeof re.markCommitStarted == "function" &&
              re.markCommitStarted(e);
          }
          function Js() {
            re !== null &&
              typeof re.markCommitStopped == "function" &&
              re.markCommitStopped();
          }
          function Su(e) {
            re !== null &&
              typeof re.markComponentRenderStarted == "function" &&
              re.markComponentRenderStarted(e);
          }
          function Cr() {
            re !== null &&
              typeof re.markComponentRenderStopped == "function" &&
              re.markComponentRenderStopped();
          }
          function Qi(e) {
            re !== null &&
              typeof re.markComponentPassiveEffectMountStarted == "function" &&
              re.markComponentPassiveEffectMountStarted(e);
          }
          function Zs() {
            re !== null &&
              typeof re.markComponentPassiveEffectMountStopped == "function" &&
              re.markComponentPassiveEffectMountStopped();
          }
          function Fv(e) {
            re !== null &&
              typeof re.markComponentPassiveEffectUnmountStarted ==
                "function" &&
              re.markComponentPassiveEffectUnmountStarted(e);
          }
          function ec() {
            re !== null &&
              typeof re.markComponentPassiveEffectUnmountStopped ==
                "function" &&
              re.markComponentPassiveEffectUnmountStopped();
          }
          function Hv(e) {
            re !== null &&
              typeof re.markComponentLayoutEffectMountStarted == "function" &&
              re.markComponentLayoutEffectMountStarted(e);
          }
          function zo() {
            re !== null &&
              typeof re.markComponentLayoutEffectMountStopped == "function" &&
              re.markComponentLayoutEffectMountStopped();
          }
          function za(e) {
            re !== null &&
              typeof re.markComponentLayoutEffectUnmountStarted == "function" &&
              re.markComponentLayoutEffectUnmountStarted(e);
          }
          function Eu() {
            re !== null &&
              typeof re.markComponentLayoutEffectUnmountStopped == "function" &&
              re.markComponentLayoutEffectUnmountStopped();
          }
          function Ao(e, t, a) {
            re !== null &&
              typeof re.markComponentErrored == "function" &&
              re.markComponentErrored(e, t, a);
          }
          function _l(e, t, a) {
            re !== null &&
              typeof re.markComponentSuspended == "function" &&
              re.markComponentSuspended(e, t, a);
          }
          function fd(e) {
            re !== null &&
              typeof re.markLayoutEffectsStarted == "function" &&
              re.markLayoutEffectsStarted(e);
          }
          function Cu() {
            re !== null &&
              typeof re.markLayoutEffectsStopped == "function" &&
              re.markLayoutEffectsStopped();
          }
          function Vv(e) {
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
          function tc() {
            re !== null &&
              typeof re.markRenderYielded == "function" &&
              re.markRenderYielded();
          }
          function nc() {
            re !== null &&
              typeof re.markRenderStopped == "function" &&
              re.markRenderStopped();
          }
          function pd(e) {
            re !== null &&
              typeof re.markRenderScheduled == "function" &&
              re.markRenderScheduled(e);
          }
          function rc(e, t) {
            re !== null &&
              typeof re.markForceUpdateScheduled == "function" &&
              re.markForceUpdateScheduled(e, t);
          }
          function jo(e, t) {
            re !== null &&
              typeof re.markStateUpdateScheduled == "function" &&
              re.markStateUpdateScheduled(e, t);
          }
          var ge = 0,
            Ee = 1,
            Ae = 2,
            qe = 8,
            Yr = 16,
            Tu = Math.clz32 ? Math.clz32 : Xn,
            Fo = Math.log,
            Ey = Math.LN2;
          function Xn(e) {
            var t = e >>> 0;
            return t === 0 ? 32 : (31 - ((Fo(t) / Ey) | 0)) | 0;
          }
          var Ho = 31,
            Y = 0,
            an = 0,
            Re = 1,
            Mn = 2,
            Wr = 4,
            yi = 8,
            fa = 16,
            Ru = 32,
            Dl = 4194240,
            xu = 64,
            ac = 128,
            ic = 256,
            lc = 512,
            uc = 1024,
            oc = 2048,
            kl = 4096,
            sc = 8192,
            wu = 16384,
            bu = 32768,
            cc = 65536,
            Vo = 131072,
            fc = 262144,
            dc = 524288,
            pc = 1048576,
            vc = 2097152,
            _u = 130023424,
            Nl = 4194304,
            hc = 8388608,
            mc = 16777216,
            vd = 33554432,
            yc = 67108864,
            Bv = Nl,
            Bo = 134217728,
            hd = 268435455,
            Du = 268435456,
            Ii = 536870912,
            Kn = 1073741824;
          function Cy(e) {
            {
              if (e & Re) return "Sync";
              if (e & Mn) return "InputContinuousHydration";
              if (e & Wr) return "InputContinuous";
              if (e & yi) return "DefaultHydration";
              if (e & fa) return "Default";
              if (e & Ru) return "TransitionHydration";
              if (e & Dl) return "Transition";
              if (e & _u) return "Retry";
              if (e & Bo) return "SelectiveHydration";
              if (e & Du) return "IdleHydration";
              if (e & Ii) return "Idle";
              if (e & Kn) return "Offscreen";
            }
          }
          var Dt = -1,
            gc = xu,
            Tr = Nl;
          function Ll(e) {
            switch (Kt(e)) {
              case Re:
                return Re;
              case Mn:
                return Mn;
              case Wr:
                return Wr;
              case yi:
                return yi;
              case fa:
                return fa;
              case Ru:
                return Ru;
              case xu:
              case ac:
              case ic:
              case lc:
              case uc:
              case oc:
              case kl:
              case sc:
              case wu:
              case bu:
              case cc:
              case Vo:
              case fc:
              case dc:
              case pc:
              case vc:
                return e & Dl;
              case Nl:
              case hc:
              case mc:
              case vd:
              case yc:
                return e & _u;
              case Bo:
                return Bo;
              case Du:
                return Du;
              case Ii:
                return Ii;
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
          function Ol(e, t) {
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
            if (t !== Y && t !== i && (t & u) === Y) {
              var E = Kt(i),
                _ = Kt(t);
              if (E >= _ || (E === fa && (_ & Dl) !== Y)) return t;
            }
            (i & Wr) !== Y && (i |= a & fa);
            var w = e.entangledLanes;
            if (w !== Y)
              for (var M = e.entanglements, z = i & w; z > 0; ) {
                var H = Xi(z),
                  le = 1 << H;
                (i |= M[H]), (z &= ~le);
              }
            return i;
          }
          function Pv(e, t) {
            for (var a = e.eventTimes, i = Dt; t > 0; ) {
              var u = Xi(t),
                s = 1 << u,
                f = a[u];
              f > i && (i = f), (t &= ~s);
            }
            return i;
          }
          function $v(e, t) {
            switch (e) {
              case Re:
              case Mn:
              case Wr:
                return t + 250;
              case yi:
              case fa:
              case Ru:
              case xu:
              case ac:
              case ic:
              case lc:
              case uc:
              case oc:
              case kl:
              case sc:
              case wu:
              case bu:
              case cc:
              case Vo:
              case fc:
              case dc:
              case pc:
              case vc:
                return t + 5e3;
              case Nl:
              case hc:
              case mc:
              case vd:
              case yc:
                return Dt;
              case Bo:
              case Du:
              case Ii:
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
          function Yv(e, t) {
            for (
              var a = e.pendingLanes,
                i = e.suspendedLanes,
                u = e.pingedLanes,
                s = e.expirationTimes,
                f = a;
              f > 0;

            ) {
              var p = Xi(f),
                h = 1 << p,
                g = s[p];
              g === Dt
                ? ((h & i) === Y || (h & u) !== Y) && (s[p] = $v(h, t))
                : g <= t && (e.expiredLanes |= h),
                (f &= ~h);
            }
          }
          function md(e) {
            return Ll(e.pendingLanes);
          }
          function Gi(e) {
            var t = e.pendingLanes & ~Kn;
            return t !== Y ? t : t & Kn ? Kn : Y;
          }
          function yd(e) {
            return (e & Re) !== Y;
          }
          function Po(e) {
            return (e & hd) !== Y;
          }
          function Wv(e) {
            return (e & _u) === e;
          }
          function Qv(e) {
            var t = Re | Wr | fa;
            return (e & t) === Y;
          }
          function Iv(e) {
            return (e & Dl) === e;
          }
          function $o(e, t) {
            var a = Mn | Wr | yi | fa;
            return (t & a) !== Y;
          }
          function Gv(e, t) {
            return (t & e.expiredLanes) !== Y;
          }
          function gd(e) {
            return (e & Dl) !== Y;
          }
          function Xv() {
            var e = gc;
            return (gc <<= 1), (gc & Dl) === Y && (gc = xu), e;
          }
          function Rr() {
            var e = Tr;
            return (Tr <<= 1), (Tr & _u) === Y && (Tr = Nl), e;
          }
          function Kt(e) {
            return e & -e;
          }
          function ku(e) {
            return Kt(e);
          }
          function Xi(e) {
            return 31 - Tu(e);
          }
          function Sc(e) {
            return Xi(e);
          }
          function xr(e, t) {
            return (e & t) !== Y;
          }
          function Ml(e, t) {
            return (e & t) === t;
          }
          function Pe(e, t) {
            return e | t;
          }
          function Yo(e, t) {
            return e & ~t;
          }
          function Ec(e, t) {
            return e & t;
          }
          function Ty(e) {
            return e;
          }
          function Kv(e, t) {
            return e !== an && e < t ? e : t;
          }
          function Wo(e) {
            for (var t = [], a = 0; a < Ho; a++) t.push(e);
            return t;
          }
          function Ul(e, t, a) {
            (e.pendingLanes |= t),
              t !== Ii && ((e.suspendedLanes = Y), (e.pingedLanes = Y));
            var i = e.eventTimes,
              u = Sc(t);
            i[u] = a;
          }
          function qv(e, t) {
            (e.suspendedLanes |= t), (e.pingedLanes &= ~t);
            for (var a = e.expirationTimes, i = t; i > 0; ) {
              var u = Xi(i),
                s = 1 << u;
              (a[u] = Dt), (i &= ~s);
            }
          }
          function Cc(e, t, a) {
            e.pingedLanes |= e.suspendedLanes & t;
          }
          function Tc(e, t) {
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
              var p = Xi(f),
                h = 1 << p;
              (i[p] = Y), (u[p] = Dt), (s[p] = Dt), (f &= ~h);
            }
          }
          function Sd(e, t) {
            for (
              var a = (e.entangledLanes |= t), i = e.entanglements, u = a;
              u;

            ) {
              var s = Xi(u),
                f = 1 << s;
              (f & t) | (i[s] & t) && (i[s] |= t), (u &= ~f);
            }
          }
          function Jv(e, t) {
            var a = Kt(t),
              i;
            switch (a) {
              case Wr:
                i = Mn;
                break;
              case fa:
                i = yi;
                break;
              case xu:
              case ac:
              case ic:
              case lc:
              case uc:
              case oc:
              case kl:
              case sc:
              case wu:
              case bu:
              case cc:
              case Vo:
              case fc:
              case dc:
              case pc:
              case vc:
              case Nl:
              case hc:
              case mc:
              case vd:
              case yc:
                i = Ru;
                break;
              case Ii:
                i = Du;
                break;
              default:
                i = an;
                break;
            }
            return (i & (e.suspendedLanes | t)) !== an ? an : i;
          }
          function Rc(e, t, a) {
            if ($r)
              for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
                var u = Sc(a),
                  s = 1 << u,
                  f = i[u];
                f.add(t), (a &= ~s);
              }
          }
          function Ed(e, t) {
            if ($r)
              for (
                var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters;
                t > 0;

              ) {
                var u = Sc(t),
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
          function Qo(e, t) {
            return null;
          }
          var qt = Re,
            gi = Wr,
            Ga = fa,
            Nu = Ii,
            Lu = an;
          function da() {
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
          function Ry(e, t) {
            return e !== 0 && e < t ? e : t;
          }
          function xy(e, t) {
            return e > t ? e : t;
          }
          function Ou(e, t) {
            return e !== 0 && e < t;
          }
          function Un(e) {
            var t = Kt(e);
            return Ou(qt, t) ? (Ou(gi, t) ? (Po(t) ? Ga : Nu) : gi) : qt;
          }
          function xc(e) {
            var t = e.current.memoizedState;
            return t.isDehydrated;
          }
          var pe;
          function Mu(e) {
            pe = e;
          }
          function Cd(e) {
            pe(e);
          }
          var wc;
          function wy(e) {
            wc = e;
          }
          var Uu;
          function bc(e) {
            Uu = e;
          }
          var _c;
          function Zv(e) {
            _c = e;
          }
          var Td;
          function eh(e) {
            Td = e;
          }
          var Io = !1,
            zu = [],
            Ft = null,
            xn = null,
            tr = null,
            Au = new Map(),
            ju = new Map(),
            wn = [],
            th = [
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
              "copy",
              "cut",
              "paste",
              "click",
              "change",
              "contextmenu",
              "reset",
              "submit",
            ];
          function Xa(e) {
            return th.indexOf(e) > -1;
          }
          function by(e, t, a, i, u) {
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
                Au.delete(a);
                break;
              }
              case "gotpointercapture":
              case "lostpointercapture": {
                var i = t.pointerId;
                ju.delete(i);
                break;
              }
            }
          }
          function Fu(e, t, a, i, u, s) {
            if (e === null || e.nativeEvent !== s) {
              var f = by(t, a, i, u, s);
              if (t !== null) {
                var p = Iu(t);
                p !== null && wc(p);
              }
              return f;
            }
            e.eventSystemFlags |= i;
            var h = e.targetContainers;
            return u !== null && h.indexOf(u) === -1 && h.push(u), e;
          }
          function nh(e, t, a, i, u) {
            switch (t) {
              case "focusin": {
                var s = u;
                return (Ft = Fu(Ft, e, t, a, i, s)), !0;
              }
              case "dragenter": {
                var f = u;
                return (xn = Fu(xn, e, t, a, i, f)), !0;
              }
              case "mouseover": {
                var p = u;
                return (tr = Fu(tr, e, t, a, i, p)), !0;
              }
              case "pointerover": {
                var h = u,
                  g = h.pointerId;
                return Au.set(g, Fu(Au.get(g) || null, e, t, a, i, h)), !0;
              }
              case "gotpointercapture": {
                var E = u,
                  _ = E.pointerId;
                return ju.set(_, Fu(ju.get(_) || null, e, t, a, i, E)), !0;
              }
            }
            return !1;
          }
          function xd(e) {
            var t = is(e.target);
            if (t !== null) {
              var a = Br(t);
              if (a !== null) {
                var i = a.tag;
                if (i === We) {
                  var u = id(a);
                  if (u !== null) {
                    (e.blockedOn = u),
                      Td(e.priority, function () {
                        Uu(a);
                      });
                    return;
                  }
                } else if (i === $) {
                  var s = a.stateNode;
                  if (xc(s)) {
                    e.blockedOn = Qs(a);
                    return;
                  }
                }
              }
            }
            e.blockedOn = null;
          }
          function _y(e) {
            for (
              var t = _c(),
                a = { blockedOn: null, target: e, priority: t },
                i = 0;
              i < wn.length && Ou(t, wn[i].priority);
              i++
            );
            wn.splice(i, 0, a), i === 0 && xd(a);
          }
          function zl(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; t.length > 0; ) {
              var a = t[0],
                i = Jn(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
              if (i === null) {
                var u = e.nativeEvent,
                  s = new u.constructor(u.type, u);
                _o(s), u.target.dispatchEvent(s), my();
              } else {
                var f = Iu(i);
                return f !== null && wc(f), (e.blockedOn = i), !1;
              }
              t.shift();
            }
            return !0;
          }
          function Dc(e, t, a) {
            zl(e) && a.delete(t);
          }
          function pa() {
            (Io = !1),
              Ft !== null && zl(Ft) && (Ft = null),
              xn !== null && zl(xn) && (xn = null),
              tr !== null && zl(tr) && (tr = null),
              Au.forEach(Dc),
              ju.forEach(Dc);
          }
          function Je(e, t) {
            e.blockedOn === t &&
              ((e.blockedOn = null),
              Io ||
                ((Io = !0),
                T.unstable_scheduleCallback(T.unstable_NormalPriority, pa)));
          }
          function Qt(e) {
            if (zu.length > 0) {
              Je(zu[0], e);
              for (var t = 1; t < zu.length; t++) {
                var a = zu[t];
                a.blockedOn === e && (a.blockedOn = null);
              }
            }
            Ft !== null && Je(Ft, e),
              xn !== null && Je(xn, e),
              tr !== null && Je(tr, e);
            var i = function (p) {
              return Je(p, e);
            };
            Au.forEach(i), ju.forEach(i);
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
          function Hu() {
            return cn;
          }
          function fn(e, t, a) {
            var i = kc(t),
              u;
            switch (i) {
              case qt:
                u = Go;
                break;
              case gi:
                u = Al;
                break;
              case Ga:
              default:
                u = Vu;
                break;
            }
            return u.bind(null, t, a, e);
          }
          function Go(e, t, a, i) {
            var u = da(),
              s = Ut.transition;
            Ut.transition = null;
            try {
              Wt(qt), Vu(e, t, a, i);
            } finally {
              Wt(u), (Ut.transition = s);
            }
          }
          function Al(e, t, a, i) {
            var u = da(),
              s = Ut.transition;
            Ut.transition = null;
            try {
              Wt(gi), Vu(e, t, a, i);
            } finally {
              Wt(u), (Ut.transition = s);
            }
          }
          function Vu(e, t, a, i) {
            cn && wd(e, t, a, i);
          }
          function wd(e, t, a, i) {
            var u = Jn(e, t, a, i);
            if (u === null) {
              Yy(e, t, i, Ki, a), Rd(e, i);
              return;
            }
            if (nh(u, e, t, a, i)) {
              i.stopPropagation();
              return;
            }
            if ((Rd(e, i), t & Sl && Xa(e))) {
              for (; u !== null; ) {
                var s = Iu(u);
                s !== null && Cd(s);
                var f = Jn(e, t, a, i);
                if ((f === null && Yy(e, t, i, Ki, a), f === u)) break;
                u = f;
              }
              u !== null && i.stopPropagation();
              return;
            }
            Yy(e, t, i, null, a);
          }
          var Ki = null;
          function Jn(e, t, a, i) {
            Ki = null;
            var u = Bs(i),
              s = is(u);
            if (s !== null) {
              var f = Br(s);
              if (f === null) s = null;
              else {
                var p = f.tag;
                if (p === We) {
                  var h = id(f);
                  if (h !== null) return h;
                  s = null;
                } else if (p === $) {
                  var g = f.stateNode;
                  if (xc(g)) return Qs(f);
                  s = null;
                } else f !== s && (s = null);
              }
            }
            return (Ki = s), null;
          }
          function kc(e) {
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
                return gi;
              case "message": {
                var t = od();
                switch (t) {
                  case Ks:
                    return qt;
                  case wl:
                    return gi;
                  case Ia:
                  case zv:
                    return Ga;
                  case qs:
                    return Nu;
                  default:
                    return Ga;
                }
              }
              default:
                return Ga;
            }
          }
          function Bu(e, t, a) {
            return e.addEventListener(t, a, !1), a;
          }
          function Si(e, t, a) {
            return e.addEventListener(t, a, !0), a;
          }
          function Nc(e, t, a, i) {
            return e.addEventListener(t, a, { capture: !0, passive: i }), a;
          }
          function bd(e, t, a, i) {
            return e.addEventListener(t, a, { passive: i }), a;
          }
          var va = null,
            Pu = null,
            ha = null;
          function Lc(e) {
            return (va = e), (Pu = Ko()), !0;
          }
          function Xo() {
            (va = null), (Pu = null), (ha = null);
          }
          function Oc() {
            if (ha) return ha;
            var e,
              t = Pu,
              a = t.length,
              i,
              u = Ko(),
              s = u.length;
            for (e = 0; e < a && t[e] === u[e]; e++);
            var f = a - e;
            for (i = 1; i <= f && t[a - i] === u[s - i]; i++);
            var p = i > 1 ? 1 - i : void 0;
            return (ha = u.slice(e, p)), ha;
          }
          function Ko() {
            return "value" in va ? va.value : va.textContent;
          }
          function jl(e) {
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
          function Ei() {
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
                  : (this.isDefaultPrevented = Ei),
                (this.isPropagationStopped = Ei),
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
                persist: function () {},
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
            Mc = Pt(dn),
            Fl = Ke({}, dn, { view: 0, detail: 0 }),
            _d = Pt(Fl),
            Dd,
            Ka,
            $u;
          function kd(e) {
            e !== $u &&
              ($u && e.type === "mousemove"
                ? ((Dd = e.screenX - $u.screenX), (Ka = e.screenY - $u.screenY))
                : ((Dd = 0), (Ka = 0)),
              ($u = e));
          }
          var qa = Ke({}, Fl, {
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
              getModifierState: Nd,
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
                return "movementY" in e ? e.movementY : Ka;
              },
            }),
            Uc = Pt(qa),
            Hl = Ke({}, qa, { dataTransfer: 0 }),
            rh = Pt(Hl),
            ah = Ke({}, Fl, { relatedTarget: 0 }),
            qo = Pt(ah),
            zc = Ke({}, dn, {
              animationName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            }),
            Dy = Pt(zc),
            ky = Ke({}, dn, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            }),
            ih = Pt(ky),
            lh = Ke({}, dn, { data: 0 }),
            qi = Pt(lh),
            Ny = qi,
            Yu = {
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
            uh = {
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
              var t = Yu[e.key] || e.key;
              if (t !== "Unidentified") return t;
            }
            if (e.type === "keypress") {
              var a = jl(e);
              return a === 13 ? "Enter" : String.fromCharCode(a);
            }
            return e.type === "keydown" || e.type === "keyup"
              ? uh[e.keyCode] || "Unidentified"
              : "";
          }
          var Ly = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
          function oh(e) {
            var t = this,
              a = t.nativeEvent;
            if (a.getModifierState) return a.getModifierState(e);
            var i = Ly[e];
            return i ? !!a[i] : !1;
          }
          function Nd(e) {
            return oh;
          }
          var Oy = Ke({}, Fl, {
              key: It,
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: Nd,
              charCode: function (e) {
                return e.type === "keypress" ? jl(e) : 0;
              },
              keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup"
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return e.type === "keypress"
                  ? jl(e)
                  : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
              },
            }),
            sh = Pt(Oy),
            ch = Ke({}, qa, {
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
            fh = Pt(ch),
            ma = Ke({}, Fl, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Nd,
            }),
            Ld = Pt(ma),
            My = Ke({}, dn, {
              propertyName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            }),
            Ji = Pt(My),
            Ac = Ke({}, qa, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
            Vl = Pt(Ac),
            jc = [9, 13, 27, 32],
            Fc = 229,
            Jo = gn && "CompositionEvent" in window,
            Zo = null;
          gn && "documentMode" in document && (Zo = document.documentMode);
          var Od = gn && "TextEvent" in window && !Zo,
            dh = gn && (!Jo || (Zo && Zo > 8 && Zo <= 11)),
            Md = 32,
            Ud = String.fromCharCode(Md);
          function Hc() {
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
          var es = !1;
          function ph(e) {
            return (
              (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
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
          function Uy(e, t) {
            return e === "keydown" && t.keyCode === Fc;
          }
          function Ad(e, t) {
            switch (e) {
              case "keyup":
                return jc.indexOf(t.keyCode) !== -1;
              case "keydown":
                return t.keyCode !== Fc;
              case "keypress":
              case "mousedown":
              case "focusout":
                return !0;
              default:
                return !1;
            }
          }
          function Vc(e) {
            var t = e.detail;
            return typeof t == "object" && "data" in t ? t.data : null;
          }
          function ts(e) {
            return e.locale === "ko";
          }
          var Zi = !1;
          function Bc(e, t, a, i, u) {
            var s, f;
            if (
              (Jo
                ? (s = zd(t))
                : Zi
                  ? Ad(t, i) && (s = "onCompositionEnd")
                  : Uy(t, i) && (s = "onCompositionStart"),
              !s)
            )
              return null;
            dh &&
              !ts(i) &&
              (!Zi && s === "onCompositionStart"
                ? (Zi = Lc(u))
                : s === "onCompositionEnd" && Zi && (f = Oc()));
            var p = Sh(a, s);
            if (p.length > 0) {
              var h = new qi(s, t, null, i, u);
              if ((e.push({ event: h, listeners: p }), f)) h.data = f;
              else {
                var g = Vc(i);
                g !== null && (h.data = g);
              }
            }
          }
          function vh(e, t) {
            switch (e) {
              case "compositionend":
                return Vc(t);
              case "keypress":
                var a = t.which;
                return a !== Md ? null : ((es = !0), Ud);
              case "textInput":
                var i = t.data;
                return i === Ud && es ? null : i;
              default:
                return null;
            }
          }
          function zy(e, t) {
            if (Zi) {
              if (e === "compositionend" || (!Jo && Ad(e, t))) {
                var a = Oc();
                return Xo(), (Zi = !1), a;
              }
              return null;
            }
            switch (e) {
              case "paste":
                return null;
              case "keypress":
                if (!ph(t)) {
                  if (t.char && t.char.length > 1) return t.char;
                  if (t.which) return String.fromCharCode(t.which);
                }
                return null;
              case "compositionend":
                return dh && !ts(t) ? null : t.data;
              default:
                return null;
            }
          }
          function Pc(e, t, a, i, u) {
            var s;
            if ((Od ? (s = vh(t, i)) : (s = zy(t, i)), !s)) return null;
            var f = Sh(a, "onBeforeInput");
            if (f.length > 0) {
              var p = new Ny("onBeforeInput", "beforeinput", null, i, u);
              e.push({ event: p, listeners: f }), (p.data = s);
            }
          }
          function Ay(e, t, a, i, u, s, f) {
            Bc(e, t, a, i, u), Pc(e, t, a, i, u);
          }
          var ns = {
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
          function hh(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!ns[e.type] : t === "textarea";
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
           */ function $c(e) {
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
            Ps(i);
            var u = Sh(t, "onChange");
            if (u.length > 0) {
              var s = new Mc("onChange", "change", null, a, i);
              e.push({ event: s, listeners: u });
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
            r(t, o, e, Bs(e)), qf(m, t);
          }
          function m(e) {
            iE(e, 0);
          }
          function C(e) {
            var t = Xc(e);
            if (qp(t)) return e;
          }
          function x(e, t) {
            if (e === "change") return t;
          }
          var U = !1;
          gn &&
            (U =
              $c("input") &&
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
              ji(e, "number", e.value);
          }
          function O(e, t, a, i, u, s, f) {
            var p = a ? Xc(a) : window,
              h,
              g;
            if (
              (c(p)
                ? (h = x)
                : hh(p)
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
            Jr("onMouseEnter", ["mouseout", "mouseover"]),
              Jr("onMouseLeave", ["mouseout", "mouseover"]),
              Jr("onPointerEnter", ["pointerout", "pointerover"]),
              Jr("onPointerLeave", ["pointerout", "pointerover"]);
          }
          function Se(e, t, a, i, u, s, f) {
            var p = t === "mouseover" || t === "pointerover",
              h = t === "mouseout" || t === "pointerout";
            if (p && !Dv(i)) {
              var g = i.relatedTarget || i.fromElement;
              if (g && (is(g) || Kd(g))) return;
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
                if (((w = a), (M = z ? is(z) : null), M !== null)) {
                  var H = Br(M);
                  (M !== H || (M.tag !== oe && M.tag !== _e)) && (M = null);
                }
              } else (w = null), (M = a);
              if (w !== M) {
                var le = Uc,
                  De = "onMouseLeave",
                  Ce = "onMouseEnter",
                  rt = "mouse";
                (t === "pointerout" || t === "pointerover") &&
                  ((le = fh),
                  (De = "onPointerLeave"),
                  (Ce = "onPointerEnter"),
                  (rt = "pointer"));
                var Ze = w == null ? E : Xc(w),
                  N = M == null ? E : Xc(M),
                  V = new le(De, rt + "leave", w, i, u);
                (V.target = Ze), (V.relatedTarget = N);
                var L = null,
                  X = is(u);
                if (X === a) {
                  var de = new le(Ce, rt + "enter", M, i, u);
                  (de.target = N), (de.relatedTarget = Ze), (L = de);
                }
                FR(e, V, L, w, M);
              }
            }
          }
          function Le(e, t) {
            return (
              (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
            );
          }
          var he = typeof Object.is == "function" ? Object.is : Le;
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
          function Ci(e, t) {
            for (var a = pn(e), i = 0, u = 0; a; ) {
              if (a.nodeType === si) {
                if (((u = i + a.textContent.length), i <= t && u >= t))
                  return { node: a, offset: t - i };
                i = u;
              }
              a = pn(ut(a));
            }
          }
          function jy(e) {
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
            return gR(e, u, s, f, p);
          }
          function gR(e, t, a, i, u) {
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
                E === t && (a === 0 || E.nodeType === si) && (f = s + a),
                  E === i && (u === 0 || E.nodeType === si) && (p = s + u),
                  E.nodeType === si && (s += E.nodeValue.length),
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
            return f === -1 || p === -1 ? null : { start: f, end: p };
          }
          function SR(e, t) {
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
              var g = Ci(e, f),
                E = Ci(e, p);
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
          function I0(e) {
            return e && e.nodeType === si;
          }
          function G0(e, t) {
            return !e || !t
              ? !1
              : e === t
                ? !0
                : I0(e)
                  ? !1
                  : I0(t)
                    ? G0(e, t.parentNode)
                    : "contains" in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1;
          }
          function ER(e) {
            return (
              e && e.ownerDocument && G0(e.ownerDocument.documentElement, e)
            );
          }
          function CR(e) {
            try {
              return typeof e.contentWindow.location.href == "string";
            } catch {
              return !1;
            }
          }
          function X0() {
            for (var e = window, t = Ds(); t instanceof e.HTMLIFrameElement; ) {
              if (CR(t)) e = t.contentWindow;
              else return t;
              t = Ds(e.document);
            }
            return t;
          }
          function Fy(e) {
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
          function TR() {
            var e = X0();
            return { focusedElem: e, selectionRange: Fy(e) ? xR(e) : null };
          }
          function RR(e) {
            var t = X0(),
              a = e.focusedElem,
              i = e.selectionRange;
            if (t !== a && ER(a)) {
              i !== null && Fy(a) && wR(a, i);
              for (var u = [], s = a; (s = s.parentNode); )
                s.nodeType === hr &&
                  u.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
              typeof a.focus == "function" && a.focus();
              for (var f = 0; f < u.length; f++) {
                var p = u[f];
                (p.element.scrollLeft = p.left), (p.element.scrollTop = p.top);
              }
            }
          }
          function xR(e) {
            var t;
            return (
              "selectionStart" in e
                ? (t = { start: e.selectionStart, end: e.selectionEnd })
                : (t = jy(e)),
              t || { start: 0, end: 0 }
            );
          }
          function wR(e, t) {
            var a = t.start,
              i = t.end;
            i === void 0 && (i = a),
              "selectionStart" in e
                ? ((e.selectionStart = a),
                  (e.selectionEnd = Math.min(i, e.value.length)))
                : SR(e, t);
          }
          var bR =
            gn && "documentMode" in document && document.documentMode <= 11;
          function _R() {
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
          var Yc = null,
            Hy = null,
            jd = null,
            Vy = !1;
          function DR(e) {
            if ("selectionStart" in e && Fy(e))
              return { start: e.selectionStart, end: e.selectionEnd };
            var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
              a = t.getSelection();
            return {
              anchorNode: a.anchorNode,
              anchorOffset: a.anchorOffset,
              focusNode: a.focusNode,
              focusOffset: a.focusOffset,
            };
          }
          function kR(e) {
            return e.window === e
              ? e.document
              : e.nodeType === Oa
                ? e
                : e.ownerDocument;
          }
          function K0(e, t, a) {
            var i = kR(a);
            if (!(Vy || Yc == null || Yc !== Ds(i))) {
              var u = DR(Yc);
              if (!jd || !Oe(jd, u)) {
                jd = u;
                var s = Sh(Hy, "onSelect");
                if (s.length > 0) {
                  var f = new Mc("onSelect", "select", null, t, a);
                  e.push({ event: f, listeners: s }), (f.target = Yc);
                }
              }
            }
          }
          function NR(e, t, a, i, u, s, f) {
            var p = a ? Xc(a) : window;
            switch (t) {
              case "focusin":
                (hh(p) || p.contentEditable === "true") &&
                  ((Yc = p), (Hy = a), (jd = null));
                break;
              case "focusout":
                (Yc = null), (Hy = null), (jd = null);
                break;
              case "mousedown":
                Vy = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (Vy = !1), K0(e, i, u);
                break;
              case "selectionchange":
                if (bR) break;
              case "keydown":
              case "keyup":
                K0(e, i, u);
            }
          }
          function mh(e, t) {
            var a = {};
            return (
              (a[e.toLowerCase()] = t.toLowerCase()),
              (a["Webkit" + e] = "webkit" + t),
              (a["Moz" + e] = "moz" + t),
              a
            );
          }
          var Wc = {
              animationend: mh("Animation", "AnimationEnd"),
              animationiteration: mh("Animation", "AnimationIteration"),
              animationstart: mh("Animation", "AnimationStart"),
              transitionend: mh("Transition", "TransitionEnd"),
            },
            By = {},
            q0 = {};
          gn &&
            ((q0 = document.createElement("div").style),
            "AnimationEvent" in window ||
              (delete Wc.animationend.animation,
              delete Wc.animationiteration.animation,
              delete Wc.animationstart.animation),
            "TransitionEvent" in window || delete Wc.transitionend.transition);
          function yh(e) {
            if (By[e]) return By[e];
            if (!Wc[e]) return e;
            var t = Wc[e];
            for (var a in t)
              if (t.hasOwnProperty(a) && a in q0) return (By[e] = t[a]);
            return e;
          }
          var J0 = yh("animationend"),
            Z0 = yh("animationiteration"),
            eE = yh("animationstart"),
            tE = yh("transitionend"),
            nE = new Map(),
            rE = [
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
          function Wu(e, t) {
            nE.set(e, t), dr(t, [e]);
          }
          function LR() {
            for (var e = 0; e < rE.length; e++) {
              var t = rE[e],
                a = t.toLowerCase(),
                i = t[0].toUpperCase() + t.slice(1);
              Wu(a, "on" + i);
            }
            Wu(J0, "onAnimationEnd"),
              Wu(Z0, "onAnimationIteration"),
              Wu(eE, "onAnimationStart"),
              Wu("dblclick", "onDoubleClick"),
              Wu("focusin", "onFocus"),
              Wu("focusout", "onBlur"),
              Wu(tE, "onTransitionEnd");
          }
          function OR(e, t, a, i, u, s, f) {
            var p = nE.get(t);
            if (p !== void 0) {
              var h = Mc,
                g = t;
              switch (t) {
                case "keypress":
                  if (jl(i) === 0) return;
                case "keydown":
                case "keyup":
                  h = sh;
                  break;
                case "focusin":
                  (g = "focus"), (h = qo);
                  break;
                case "focusout":
                  (g = "blur"), (h = qo);
                  break;
                case "beforeblur":
                case "afterblur":
                  h = qo;
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
                  h = Uc;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  h = rh;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  h = Ld;
                  break;
                case J0:
                case Z0:
                case eE:
                  h = Dy;
                  break;
                case tE:
                  h = Ji;
                  break;
                case "scroll":
                  h = _d;
                  break;
                case "wheel":
                  h = Vl;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  h = ih;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  h = fh;
                  break;
              }
              var E = (s & Sl) !== 0;
              {
                var _ = !E && t === "scroll",
                  w = AR(a, p, i.type, E, _);
                if (w.length > 0) {
                  var M = new h(p, g, null, i, u);
                  e.push({ event: M, listeners: w });
                }
              }
            }
          }
          LR(), q(), n(), _R(), Hc();
          function MR(e, t, a, i, u, s, f) {
            OR(e, t, a, i, u, s);
            var p = (s & hy) === 0;
            p &&
              (Se(e, t, a, i, u),
              O(e, t, a, i, u),
              NR(e, t, a, i, u),
              Ay(e, t, a, i, u));
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
            Py = new Set(
              ["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(
                Fd,
              ),
            );
          function aE(e, t, a) {
            var i = e.type || "unknown-event";
            (e.currentTarget = a),
              pi(i, t, void 0, e),
              (e.currentTarget = null);
          }
          function UR(e, t, a) {
            var i;
            if (a)
              for (var u = t.length - 1; u >= 0; u--) {
                var s = t[u],
                  f = s.instance,
                  p = s.currentTarget,
                  h = s.listener;
                if (f !== i && e.isPropagationStopped()) return;
                aE(e, h, p), (i = f);
              }
            else
              for (var g = 0; g < t.length; g++) {
                var E = t[g],
                  _ = E.instance,
                  w = E.currentTarget,
                  M = E.listener;
                if (_ !== i && e.isPropagationStopped()) return;
                aE(e, M, w), (i = _);
              }
          }
          function iE(e, t) {
            for (var a = (t & Sl) !== 0, i = 0; i < e.length; i++) {
              var u = e[i],
                s = u.event,
                f = u.listeners;
              UR(s, f, a);
            }
            td();
          }
          function zR(e, t, a, i, u) {
            var s = Bs(a),
              f = [];
            MR(f, e, i, a, s, t), iE(f, t);
          }
          function $t(e, t) {
            Py.has(e) ||
              y(
                'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
                e,
              );
            var a = !1,
              i = fw(t),
              u = HR(e);
            i.has(u) || (lE(t, e, wo, a), i.add(u));
          }
          function $y(e, t, a) {
            Py.has(e) &&
              !t &&
              y(
                'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
                e,
              );
            var i = 0;
            t && (i |= Sl), lE(a, e, i, t);
          }
          var gh = "_reactListening" + Math.random().toString(36).slice(2);
          function Hd(e) {
            if (!e[gh]) {
              (e[gh] = !0),
                $n.forEach(function (a) {
                  a !== "selectionchange" &&
                    (Py.has(a) || $y(a, !1, e), $y(a, !0, e));
                });
              var t = e.nodeType === Oa ? e : e.ownerDocument;
              t !== null &&
                (t[gh] || ((t[gh] = !0), $y("selectionchange", !1, t)));
            }
          }
          function lE(e, t, a, i, u) {
            var s = fn(e, t, a),
              f = void 0;
            No &&
              (t === "touchstart" || t === "touchmove" || t === "wheel") &&
              (f = !0),
              (e = e),
              i
                ? f !== void 0
                  ? Nc(e, t, s, f)
                  : Si(e, t, s)
                : f !== void 0
                  ? bd(e, t, s, f)
                  : Bu(e, t, s);
          }
          function uE(e, t) {
            return e === t || (e.nodeType === nn && e.parentNode === t);
          }
          function Yy(e, t, a, i, u) {
            var s = i;
            if (!(t & fi) && !(t & wo)) {
              var f = u;
              if (i !== null) {
                var p = i;
                e: for (;;) {
                  if (p === null) return;
                  var h = p.tag;
                  if (h === $ || h === J) {
                    var g = p.stateNode.containerInfo;
                    if (uE(g, f)) break;
                    if (h === J)
                      for (var E = p.return; E !== null; ) {
                        var _ = E.tag;
                        if (_ === $ || _ === J) {
                          var w = E.stateNode.containerInfo;
                          if (uE(w, f)) return;
                        }
                        E = E.return;
                      }
                    for (; g !== null; ) {
                      var M = is(g);
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
              return zR(e, t, a, s);
            });
          }
          function Vd(e, t, a) {
            return { instance: e, listener: t, currentTarget: a };
          }
          function AR(e, t, a, i, u, s) {
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
                var z = Cl(g, p);
                z != null && h.push(Vd(g, z, E));
              }
              if (u) break;
              g = g.return;
            }
            return h;
          }
          function Sh(e, t) {
            for (var a = t + "Capture", i = [], u = e; u !== null; ) {
              var s = u,
                f = s.stateNode,
                p = s.tag;
              if (p === oe && f !== null) {
                var h = f,
                  g = Cl(u, a);
                g != null && i.unshift(Vd(u, g, h));
                var E = Cl(u, t);
                E != null && i.push(Vd(u, E, h));
              }
              u = u.return;
            }
            return i;
          }
          function Qc(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== oe);
            return e || null;
          }
          function jR(e, t) {
            for (var a = e, i = t, u = 0, s = a; s; s = Qc(s)) u++;
            for (var f = 0, p = i; p; p = Qc(p)) f++;
            for (; u - f > 0; ) (a = Qc(a)), u--;
            for (; f - u > 0; ) (i = Qc(i)), f--;
            for (var h = u; h--; ) {
              if (a === i || (i !== null && a === i.alternate)) return a;
              (a = Qc(a)), (i = Qc(i));
            }
            return null;
          }
          function oE(e, t, a, i, u) {
            for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
              var h = p,
                g = h.alternate,
                E = h.stateNode,
                _ = h.tag;
              if (g !== null && g === i) break;
              if (_ === oe && E !== null) {
                var w = E;
                if (u) {
                  var M = Cl(p, s);
                  M != null && f.unshift(Vd(p, M, w));
                } else if (!u) {
                  var z = Cl(p, s);
                  z != null && f.push(Vd(p, z, w));
                }
              }
              p = p.return;
            }
            f.length !== 0 && e.push({ event: t, listeners: f });
          }
          function FR(e, t, a, i, u) {
            var s = i && u ? jR(i, u) : null;
            i !== null && oE(e, t, i, s, !1),
              u !== null && a !== null && oE(e, a, u, s, !0);
          }
          function HR(e, t) {
            return e + "__bubble";
          }
          var ya = !1,
            Bd = "dangerouslySetInnerHTML",
            Eh = "suppressContentEditableWarning",
            Qu = "suppressHydrationWarning",
            sE = "autoFocus",
            rs = "children",
            as = "style",
            Ch = "__html",
            Wy,
            Th,
            Pd,
            cE,
            Rh,
            fE,
            dE;
          (Wy = { dialog: !0, webview: !0 }),
            (Th = function (e, t) {
              Vs(e, t),
                Qf(e, t),
                _v(e, t, {
                  registrationNameDependencies: fr,
                  possibleRegistrationNames: Va,
                });
            }),
            (fE = gn && !document.documentMode),
            (Pd = function (e, t, a) {
              if (!ya) {
                var i = xh(a),
                  u = xh(t);
                u !== i &&
                  ((ya = !0),
                  y(
                    "Prop `%s` did not match. Server: %s Client: %s",
                    e,
                    JSON.stringify(u),
                    JSON.stringify(i),
                  ));
              }
            }),
            (cE = function (e) {
              if (!ya) {
                ya = !0;
                var t = [];
                e.forEach(function (a) {
                  t.push(a);
                }),
                  y("Extra attributes from the server: %s", t);
              }
            }),
            (Rh = function (e, t) {
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
            (dE = function (e, t) {
              var a =
                e.namespaceURI === oi
                  ? e.ownerDocument.createElement(e.tagName)
                  : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
              return (a.innerHTML = t), a.innerHTML;
            });
          var VR = /\r\n?/g,
            BR = /\u0000|\uFFFD/g;
          function xh(e) {
            wa(e);
            var t = typeof e == "string" ? e : "" + e;
            return t
              .replace(
                VR,
                `
`,
              )
              .replace(BR, "");
          }
          function wh(e, t, a, i) {
            var u = xh(t),
              s = xh(e);
            if (
              s !== u &&
              (i &&
                (ya ||
                  ((ya = !0),
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
          function pE(e) {
            return e.nodeType === Oa ? e : e.ownerDocument;
          }
          function PR() {}
          function bh(e) {
            e.onclick = PR;
          }
          function $R(e, t, a, i, u) {
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var f = i[s];
                if (s === as) f && Object.freeze(f), yv(t, f);
                else if (s === Bd) {
                  var p = f ? f[Ch] : void 0;
                  p != null && lv(t, p);
                } else if (s === rs)
                  if (typeof f == "string") {
                    var h = e !== "textarea" || f !== "";
                    h && As(t, f);
                  } else typeof f == "number" && As(t, "" + f);
                else
                  s === Eh ||
                    s === Qu ||
                    s === sE ||
                    (fr.hasOwnProperty(s)
                      ? f != null &&
                        (typeof f != "function" && Rh(s, f),
                        s === "onScroll" && $t("scroll", t))
                      : f != null && $a(t, s, f, u));
              }
          }
          function YR(e, t, a, i) {
            for (var u = 0; u < t.length; u += 2) {
              var s = t[u],
                f = t[u + 1];
              s === as
                ? yv(e, f)
                : s === Bd
                  ? lv(e, f)
                  : s === rs
                    ? As(e, f)
                    : $a(e, s, f, i);
            }
          }
          function WR(e, t, a, i) {
            var u,
              s = pE(a),
              f,
              p = i;
            if ((p === oi && (p = Us(e)), p === oi)) {
              if (
                ((u = ci(e, t)),
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
                f = s.createElement(e, { is: t.is });
              else if (((f = s.createElement(e)), e === "select")) {
                var E = f;
                t.multiple ? (E.multiple = !0) : t.size && (E.size = t.size);
              }
            } else f = s.createElementNS(p, e);
            return (
              p === oi &&
                !u &&
                Object.prototype.toString.call(f) ===
                  "[object HTMLUnknownElement]" &&
                !Yn.call(Wy, e) &&
                ((Wy[e] = !0),
                y(
                  "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                  e,
                )),
              f
            );
          }
          function QR(e, t) {
            return pE(t).createTextNode(e);
          }
          function IR(e, t, a, i) {
            var u = ci(t, a);
            Th(t, a);
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
                So(e, a), (s = go(e, a)), $t("invalid", e);
                break;
              case "option":
                Os(e, a), (s = a);
                break;
              case "select":
                nv(e, a), (s = zf(e, a)), $t("invalid", e);
                break;
              case "textarea":
                rv(e, a), (s = jf(e, a)), $t("invalid", e);
                break;
              default:
                s = a;
            }
            switch ((Fs(t, s), $R(t, e, i, s, u), t)) {
              case "input":
                ml(e), Eo(e, a, !1);
                break;
              case "textarea":
                ml(e), iv(e);
                break;
              case "option":
                Uf(e, a);
                break;
              case "select":
                ay(e, a);
                break;
              default:
                typeof s.onClick == "function" && bh(e);
                break;
            }
          }
          function GR(e, t, a, i, u) {
            Th(t, i);
            var s = null,
              f,
              p;
            switch (t) {
              case "input":
                (f = go(e, a)), (p = go(e, i)), (s = []);
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
                    bh(e);
                break;
            }
            Fs(t, p);
            var h,
              g,
              E = null;
            for (h in f)
              if (
                !(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null)
              )
                if (h === as) {
                  var _ = f[h];
                  for (g in _)
                    _.hasOwnProperty(g) && (E || (E = {}), (E[g] = ""));
                } else
                  h === Bd ||
                    h === rs ||
                    h === Eh ||
                    h === Qu ||
                    h === sE ||
                    (fr.hasOwnProperty(h)
                      ? s || (s = [])
                      : (s = s || []).push(h, null));
            for (h in p) {
              var w = p[h],
                M = f != null ? f[h] : void 0;
              if (
                !(!p.hasOwnProperty(h) || w === M || (w == null && M == null))
              )
                if (h === as)
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
                  var z = w ? w[Ch] : void 0,
                    H = M ? M[Ch] : void 0;
                  z != null && H !== z && (s = s || []).push(h, z);
                } else
                  h === rs
                    ? (typeof w == "string" || typeof w == "number") &&
                      (s = s || []).push(h, "" + w)
                    : h === Eh ||
                      h === Qu ||
                      (fr.hasOwnProperty(h)
                        ? (w != null &&
                            (typeof w != "function" && Rh(h, w),
                            h === "onScroll" && $t("scroll", e)),
                          !s && M !== w && (s = []))
                        : (s = s || []).push(h, w));
            }
            return E && (Ro(E, p[as]), (s = s || []).push(as, E)), s;
          }
          function XR(e, t, a, i, u) {
            a === "input" && u.type === "radio" && u.name != null && Mf(e, u);
            var s = ci(a, i),
              f = ci(a, u);
            switch ((YR(e, t, s, f), a)) {
              case "input":
                uu(e, u);
                break;
              case "textarea":
                av(e, u);
                break;
              case "select":
                iy(e, u);
                break;
            }
          }
          function KR(e) {
            {
              var t = e.toLowerCase();
              return (Hs.hasOwnProperty(t) && Hs[t]) || null;
            }
          }
          function qR(e, t, a, i, u, s, f) {
            var p, h;
            switch (((p = ci(t, a)), Th(t, a), t)) {
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
                So(e, a), $t("invalid", e);
                break;
              case "option":
                Os(e, a);
                break;
              case "select":
                nv(e, a), $t("invalid", e);
                break;
              case "textarea":
                rv(e, a), $t("invalid", e);
                break;
            }
            Fs(t, a);
            {
              h = new Set();
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
                if (z === rs)
                  typeof H == "string"
                    ? e.textContent !== H &&
                      (a[Qu] !== !0 && wh(e.textContent, H, s, f),
                      (M = [rs, H]))
                    : typeof H == "number" &&
                      e.textContent !== "" + H &&
                      (a[Qu] !== !0 && wh(e.textContent, H, s, f),
                      (M = [rs, "" + H]));
                else if (fr.hasOwnProperty(z))
                  H != null &&
                    (typeof H != "function" && Rh(z, H),
                    z === "onScroll" && $t("scroll", e));
                else if (f && typeof p == "boolean") {
                  var le = void 0,
                    De = p && kn ? null : Ar(z);
                  if (a[Qu] !== !0) {
                    if (
                      !(
                        z === Eh ||
                        z === Qu ||
                        z === "value" ||
                        z === "checked" ||
                        z === "selected"
                      )
                    ) {
                      if (z === Bd) {
                        var Ce = e.innerHTML,
                          rt = H ? H[Ch] : void 0;
                        if (rt != null) {
                          var Ze = dE(e, rt);
                          Ze !== Ce && Pd(z, Ce, Ze);
                        }
                      } else if (z === as) {
                        if ((h.delete(z), fE)) {
                          var N = py(H);
                          (le = e.getAttribute("style")),
                            N !== le && Pd(z, le, N);
                        }
                      } else if (p && !kn)
                        h.delete(z.toLowerCase()),
                          (le = ru(e, z, H)),
                          H !== le && Pd(z, le, H);
                      else if (!Xt(z, De, p) && !bt(z, H, De, p)) {
                        var V = !1;
                        if (De !== null)
                          h.delete(De.attributeName), (le = dl(e, z, H, De));
                        else {
                          var L = i;
                          if ((L === oi && (L = Us(t)), L === oi))
                            h.delete(z.toLowerCase());
                          else {
                            var X = KR(z);
                            X !== null && X !== z && ((V = !0), h.delete(X)),
                              h.delete(z);
                          }
                          le = ru(e, z, H);
                        }
                        var de = kn;
                        !de && H !== le && !V && Pd(z, le, H);
                      }
                    }
                  }
                }
              }
            switch ((f && h.size > 0 && a[Qu] !== !0 && cE(h), t)) {
              case "input":
                ml(e), Eo(e, a, !0);
                break;
              case "textarea":
                ml(e), iv(e);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && bh(e);
                break;
            }
            return M;
          }
          function JR(e, t, a) {
            var i = e.nodeValue !== t;
            return i;
          }
          function Qy(e, t) {
            {
              if (ya) return;
              (ya = !0),
                y(
                  "Did not expect server HTML to contain a <%s> in <%s>.",
                  t.nodeName.toLowerCase(),
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function Iy(e, t) {
            {
              if (ya) return;
              (ya = !0),
                y(
                  'Did not expect server HTML to contain the text node "%s" in <%s>.',
                  t.nodeValue,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function Gy(e, t, a) {
            {
              if (ya) return;
              (ya = !0),
                y(
                  "Expected server HTML to contain a matching <%s> in <%s>.",
                  t,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function Xy(e, t) {
            {
              if (t === "" || ya) return;
              (ya = !0),
                y(
                  'Expected server HTML to contain a matching text node for "%s" in <%s>.',
                  t,
                  e.nodeName.toLowerCase(),
                );
            }
          }
          function ZR(e, t, a) {
            switch (t) {
              case "input":
                Jp(e, a);
                return;
              case "textarea":
                Ff(e, a);
                return;
              case "select":
                ly(e, a);
                return;
            }
          }
          var $d = function () {},
            Yd = function () {};
          {
            var ex = [
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
              vE = [
                "applet",
                "caption",
                "html",
                "table",
                "td",
                "th",
                "marquee",
                "object",
                "template",
                "foreignObject",
                "desc",
                "title",
              ],
              tx = vE.concat(["button"]),
              nx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
              hE = {
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
              var a = Ke({}, e || hE),
                i = { tag: t };
              return (
                vE.indexOf(t) !== -1 &&
                  ((a.aTagInScope = null),
                  (a.buttonTagInScope = null),
                  (a.nobrTagInScope = null)),
                tx.indexOf(t) !== -1 && (a.pTagInButtonScope = null),
                ex.indexOf(t) !== -1 &&
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
            var rx = function (e, t) {
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
                    return nx.indexOf(t) === -1;
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
              ax = function (e, t) {
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
              mE = {};
            $d = function (e, t, a) {
              a = a || hE;
              var i = a.current,
                u = i && i.tag;
              t != null &&
                (e != null &&
                  y(
                    "validateDOMNesting: when childText is passed, childTag should be null",
                  ),
                (e = "#text"));
              var s = rx(e, u) ? null : i,
                f = s ? null : ax(e, a),
                p = s || f;
              if (p) {
                var h = p.tag,
                  g = !!s + "|" + e + "|" + h;
                if (!mE[g]) {
                  mE[g] = !0;
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
          var _h = "suppressHydrationWarning",
            Dh = "$",
            kh = "/$",
            Wd = "$?",
            Qd = "$!",
            ix = "style",
            Ky = null,
            qy = null;
          function lx(e) {
            var t,
              a,
              i = e.nodeType;
            switch (i) {
              case Oa:
              case yl: {
                t = i === Oa ? "#document" : "#fragment";
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
              return { namespace: a, ancestorInfo: h };
            }
          }
          function ux(e, t, a) {
            {
              var i = e,
                u = Vf(i.namespace, t),
                s = Yd(i.ancestorInfo, t);
              return { namespace: u, ancestorInfo: s };
            }
          }
          function oN(e) {
            return e;
          }
          function ox(e) {
            (Ky = Hu()), (qy = TR());
            var t = null;
            return wr(!1), t;
          }
          function sx(e) {
            RR(qy), wr(Ky), (Ky = null), (qy = null);
          }
          function cx(e, t, a, i, u) {
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
            var g = WR(e, t, a, s);
            return Xd(u, g), ig(g, t), g;
          }
          function fx(e, t) {
            e.appendChild(t);
          }
          function dx(e, t, a, i, u) {
            switch ((IR(e, t, a, i), t)) {
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
          function px(e, t, a, i, u, s) {
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
            return GR(e, t, a, i);
          }
          function Jy(e, t) {
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
          function vx(e, t, a, i) {
            {
              var u = a;
              $d(null, e, u.ancestorInfo);
            }
            var s = QR(e, t);
            return Xd(i, s), s;
          }
          function hx() {
            var e = window.event;
            return e === void 0 ? Ga : kc(e.type);
          }
          var Zy = typeof setTimeout == "function" ? setTimeout : void 0,
            mx = typeof clearTimeout == "function" ? clearTimeout : void 0,
            eg = -1,
            yE = typeof Promise == "function" ? Promise : void 0,
            yx =
              typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof yE < "u"
                  ? function (e) {
                      return yE.resolve(null).then(e).catch(gx);
                    }
                  : Zy;
          function gx(e) {
            setTimeout(function () {
              throw e;
            });
          }
          function Sx(e, t, a, i) {
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
          function Ex(e, t, a, i, u, s) {
            XR(e, t, a, i, u), ig(e, u);
          }
          function gE(e) {
            As(e, "");
          }
          function Cx(e, t, a) {
            e.nodeValue = a;
          }
          function Tx(e, t) {
            e.appendChild(t);
          }
          function Rx(e, t) {
            var a;
            e.nodeType === nn
              ? ((a = e.parentNode), a.insertBefore(t, e))
              : ((a = e), a.appendChild(t));
            var i = e._reactRootContainer;
            i == null && a.onclick === null && bh(a);
          }
          function xx(e, t, a) {
            e.insertBefore(t, a);
          }
          function wx(e, t, a) {
            e.nodeType === nn
              ? e.parentNode.insertBefore(t, a)
              : e.insertBefore(t, a);
          }
          function bx(e, t) {
            e.removeChild(t);
          }
          function _x(e, t) {
            e.nodeType === nn ? e.parentNode.removeChild(t) : e.removeChild(t);
          }
          function tg(e, t) {
            var a = t,
              i = 0;
            do {
              var u = a.nextSibling;
              if ((e.removeChild(a), u && u.nodeType === nn)) {
                var s = u.data;
                if (s === kh)
                  if (i === 0) {
                    e.removeChild(u), Qt(t);
                    return;
                  } else i--;
                else (s === Dh || s === Wd || s === Qd) && i++;
              }
              a = u;
            } while (a);
            Qt(t);
          }
          function Dx(e, t) {
            e.nodeType === nn
              ? tg(e.parentNode, t)
              : e.nodeType === hr && tg(e, t),
              Qt(e);
          }
          function kx(e) {
            e = e;
            var t = e.style;
            typeof t.setProperty == "function"
              ? t.setProperty("display", "none", "important")
              : (t.display = "none");
          }
          function Nx(e) {
            e.nodeValue = "";
          }
          function Lx(e, t) {
            e = e;
            var a = t[ix],
              i = a != null && a.hasOwnProperty("display") ? a.display : null;
            e.style.display = js("display", i);
          }
          function Ox(e, t) {
            e.nodeValue = t;
          }
          function Mx(e) {
            e.nodeType === hr
              ? (e.textContent = "")
              : e.nodeType === Oa &&
                e.documentElement &&
                e.removeChild(e.documentElement);
          }
          function Ux(e, t, a) {
            return e.nodeType !== hr ||
              t.toLowerCase() !== e.nodeName.toLowerCase()
              ? null
              : e;
          }
          function zx(e, t) {
            return t === "" || e.nodeType !== si ? null : e;
          }
          function Ax(e) {
            return e.nodeType !== nn ? null : e;
          }
          function SE(e) {
            return e.data === Wd;
          }
          function ng(e) {
            return e.data === Qd;
          }
          function jx(e) {
            var t = e.nextSibling && e.nextSibling.dataset,
              a,
              i,
              u;
            return (
              t && ((a = t.dgst), (i = t.msg), (u = t.stck)),
              { message: i, digest: a, stack: u }
            );
          }
          function Fx(e, t) {
            e._reactRetry = t;
          }
          function Nh(e) {
            for (; e != null; e = e.nextSibling) {
              var t = e.nodeType;
              if (t === hr || t === si) break;
              if (t === nn) {
                var a = e.data;
                if (a === Dh || a === Qd || a === Wd) break;
                if (a === kh) return null;
              }
            }
            return e;
          }
          function Id(e) {
            return Nh(e.nextSibling);
          }
          function Hx(e) {
            return Nh(e.firstChild);
          }
          function Vx(e) {
            return Nh(e.firstChild);
          }
          function Bx(e) {
            return Nh(e.nextSibling);
          }
          function Px(e, t, a, i, u, s, f) {
            Xd(s, e), ig(e, a);
            var p;
            {
              var h = u;
              p = h.namespace;
            }
            var g = (s.mode & Ee) !== ge;
            return qR(e, t, a, p, i, g, f);
          }
          function $x(e, t, a, i) {
            return Xd(a, e), a.mode & Ee, JR(e, t);
          }
          function Yx(e, t) {
            Xd(t, e);
          }
          function Wx(e) {
            for (var t = e.nextSibling, a = 0; t; ) {
              if (t.nodeType === nn) {
                var i = t.data;
                if (i === kh) {
                  if (a === 0) return Id(t);
                  a--;
                } else (i === Dh || i === Qd || i === Wd) && a++;
              }
              t = t.nextSibling;
            }
            return null;
          }
          function EE(e) {
            for (var t = e.previousSibling, a = 0; t; ) {
              if (t.nodeType === nn) {
                var i = t.data;
                if (i === Dh || i === Qd || i === Wd) {
                  if (a === 0) return t;
                  a--;
                } else i === kh && a++;
              }
              t = t.previousSibling;
            }
            return null;
          }
          function Qx(e) {
            Qt(e);
          }
          function Ix(e) {
            Qt(e);
          }
          function Gx(e) {
            return e !== "head" && e !== "body";
          }
          function Xx(e, t, a, i) {
            var u = !0;
            wh(t.nodeValue, a, i, u);
          }
          function Kx(e, t, a, i, u, s) {
            if (t[_h] !== !0) {
              var f = !0;
              wh(i.nodeValue, u, s, f);
            }
          }
          function qx(e, t) {
            t.nodeType === hr ? Qy(e, t) : t.nodeType === nn || Iy(e, t);
          }
          function Jx(e, t) {
            {
              var a = e.parentNode;
              a !== null &&
                (t.nodeType === hr ? Qy(a, t) : t.nodeType === nn || Iy(a, t));
            }
          }
          function Zx(e, t, a, i, u) {
            (u || t[_h] !== !0) &&
              (i.nodeType === hr ? Qy(a, i) : i.nodeType === nn || Iy(a, i));
          }
          function ew(e, t, a) {
            Gy(e, t);
          }
          function tw(e, t) {
            Xy(e, t);
          }
          function nw(e, t, a) {
            {
              var i = e.parentNode;
              i !== null && Gy(i, t);
            }
          }
          function rw(e, t) {
            {
              var a = e.parentNode;
              a !== null && Xy(a, t);
            }
          }
          function aw(e, t, a, i, u, s) {
            (s || t[_h] !== !0) && Gy(a, i);
          }
          function iw(e, t, a, i, u) {
            (u || t[_h] !== !0) && Xy(a, i);
          }
          function lw(e) {
            y(
              "An error occurred during hydration. The server HTML was replaced with client content in <%s>.",
              e.nodeName.toLowerCase(),
            );
          }
          function uw(e) {
            Hd(e);
          }
          var Ic = Math.random().toString(36).slice(2),
            Gc = "__reactFiber$" + Ic,
            rg = "__reactProps$" + Ic,
            Gd = "__reactContainer$" + Ic,
            ag = "__reactEvents$" + Ic,
            ow = "__reactListeners$" + Ic,
            sw = "__reactHandles$" + Ic;
          function cw(e) {
            delete e[Gc],
              delete e[rg],
              delete e[ag],
              delete e[ow],
              delete e[sw];
          }
          function Xd(e, t) {
            t[Gc] = e;
          }
          function Lh(e, t) {
            t[Gd] = e;
          }
          function CE(e) {
            e[Gd] = null;
          }
          function Kd(e) {
            return !!e[Gd];
          }
          function is(e) {
            var t = e[Gc];
            if (t) return t;
            for (var a = e.parentNode; a; ) {
              if (((t = a[Gd] || a[Gc]), t)) {
                var i = t.alternate;
                if (t.child !== null || (i !== null && i.child !== null))
                  for (var u = EE(e); u !== null; ) {
                    var s = u[Gc];
                    if (s) return s;
                    u = EE(u);
                  }
                return t;
              }
              (e = a), (a = e.parentNode);
            }
            return null;
          }
          function Iu(e) {
            var t = e[Gc] || e[Gd];
            return t &&
              (t.tag === oe || t.tag === _e || t.tag === We || t.tag === $)
              ? t
              : null;
          }
          function Xc(e) {
            if (e.tag === oe || e.tag === _e) return e.stateNode;
            throw new Error("getNodeFromInstance: Invalid argument.");
          }
          function Oh(e) {
            return e[rg] || null;
          }
          function ig(e, t) {
            e[rg] = t;
          }
          function fw(e) {
            var t = e[ag];
            return t === void 0 && (t = e[ag] = new Set()), t;
          }
          var TE = {},
            RE = S.ReactDebugCurrentFrame;
          function Mh(e) {
            if (e) {
              var t = e._owner,
                a = fo(e.type, e._source, t ? t.type : null);
              RE.setExtraStackFrame(a);
            } else RE.setExtraStackFrame(null);
          }
          function Ti(e, t, a, i, u) {
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
                    (Mh(u),
                    y(
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      i || "React class",
                      a,
                      f,
                      typeof p,
                    ),
                    Mh(null)),
                    p instanceof Error &&
                      !(p.message in TE) &&
                      ((TE[p.message] = !0),
                      Mh(u),
                      y("Failed %s type: %s", a, p.message),
                      Mh(null));
                }
            }
          }
          var lg = [],
            Uh;
          Uh = [];
          var Bl = -1;
          function Gu(e) {
            return { current: e };
          }
          function br(e, t) {
            if (Bl < 0) {
              y("Unexpected pop.");
              return;
            }
            t !== Uh[Bl] && y("Unexpected Fiber popped."),
              (e.current = lg[Bl]),
              (lg[Bl] = null),
              (Uh[Bl] = null),
              Bl--;
          }
          function _r(e, t, a) {
            Bl++, (lg[Bl] = e.current), (Uh[Bl] = a), (e.current = t);
          }
          var ug;
          ug = {};
          var Aa = {};
          Object.freeze(Aa);
          var Pl = Gu(Aa),
            el = Gu(!1),
            og = Aa;
          function Kc(e, t, a) {
            return a && tl(t) ? og : Pl.current;
          }
          function xE(e, t, a) {
            {
              var i = e.stateNode;
              (i.__reactInternalMemoizedUnmaskedChildContext = t),
                (i.__reactInternalMemoizedMaskedChildContext = a);
            }
          }
          function qc(e, t) {
            {
              var a = e.type,
                i = a.contextTypes;
              if (!i) return Aa;
              var u = e.stateNode;
              if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
                return u.__reactInternalMemoizedMaskedChildContext;
              var s = {};
              for (var f in i) s[f] = t[f];
              {
                var p = Be(e) || "Unknown";
                Ti(i, s, "context", p);
              }
              return u && xE(e, t, s), s;
            }
          }
          function zh() {
            return el.current;
          }
          function tl(e) {
            {
              var t = e.childContextTypes;
              return t != null;
            }
          }
          function Ah(e) {
            br(el, e), br(Pl, e);
          }
          function sg(e) {
            br(el, e), br(Pl, e);
          }
          function wE(e, t, a) {
            {
              if (Pl.current !== Aa)
                throw new Error(
                  "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.",
                );
              _r(Pl, t, e), _r(el, a, e);
            }
          }
          function bE(e, t, a) {
            {
              var i = e.stateNode,
                u = t.childContextTypes;
              if (typeof i.getChildContext != "function") {
                {
                  var s = Be(e) || "Unknown";
                  ug[s] ||
                    ((ug[s] = !0),
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
                Ti(u, f, "child context", h);
              }
              return Ke({}, a, f);
            }
          }
          function jh(e) {
            {
              var t = e.stateNode,
                a = (t && t.__reactInternalMemoizedMergedChildContext) || Aa;
              return (og = Pl.current), _r(Pl, a, e), _r(el, el.current, e), !0;
            }
          }
          function _E(e, t, a) {
            {
              var i = e.stateNode;
              if (!i)
                throw new Error(
                  "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.",
                );
              if (a) {
                var u = bE(e, t, og);
                (i.__reactInternalMemoizedMergedChildContext = u),
                  br(el, e),
                  br(Pl, e),
                  _r(Pl, u, e),
                  _r(el, a, e);
              } else br(el, e), _r(el, a, e);
            }
          }
          function dw(e) {
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
                    if (tl(a))
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
          var Xu = 0,
            Fh = 1,
            $l = null,
            cg = !1,
            fg = !1;
          function DE(e) {
            $l === null ? ($l = [e]) : $l.push(e);
          }
          function pw(e) {
            (cg = !0), DE(e);
          }
          function kE() {
            cg && Ku();
          }
          function Ku() {
            if (!fg && $l !== null) {
              fg = !0;
              var e = 0,
                t = da();
              try {
                var a = !0,
                  i = $l;
                for (Wt(qt); e < i.length; e++) {
                  var u = i[e];
                  do u = u(a);
                  while (u !== null);
                }
                ($l = null), (cg = !1);
              } catch (s) {
                throw ($l !== null && ($l = $l.slice(e + 1)), Gs(Ks, Ku), s);
              } finally {
                Wt(t), (fg = !1);
              }
            }
            return null;
          }
          var Jc = [],
            Zc = 0,
            Hh = null,
            Vh = 0,
            Ja = [],
            Za = 0,
            ls = null,
            Yl = 1,
            Wl = "";
          function vw(e) {
            return os(), (e.flags & rd) !== be;
          }
          function hw(e) {
            return os(), Vh;
          }
          function mw() {
            var e = Wl,
              t = Yl,
              a = t & ~yw(t);
            return a.toString(32) + e;
          }
          function us(e, t) {
            os(), (Jc[Zc++] = Vh), (Jc[Zc++] = Hh), (Hh = e), (Vh = t);
          }
          function NE(e, t, a) {
            os(), (Ja[Za++] = Yl), (Ja[Za++] = Wl), (Ja[Za++] = ls), (ls = e);
            var i = Yl,
              u = Wl,
              s = Bh(i) - 1,
              f = i & ~(1 << s),
              p = a + 1,
              h = Bh(t) + s;
            if (h > 30) {
              var g = s - (s % 5),
                E = (1 << g) - 1,
                _ = (f & E).toString(32),
                w = f >> g,
                M = s - g,
                z = Bh(t) + M,
                H = p << M,
                le = H | w,
                De = _ + u;
              (Yl = (1 << z) | le), (Wl = De);
            } else {
              var Ce = p << s,
                rt = Ce | f,
                Ze = u;
              (Yl = (1 << h) | rt), (Wl = Ze);
            }
          }
          function dg(e) {
            os();
            var t = e.return;
            if (t !== null) {
              var a = 1,
                i = 0;
              us(e, a), NE(e, a, i);
            }
          }
          function Bh(e) {
            return 32 - Tu(e);
          }
          function yw(e) {
            return 1 << (Bh(e) - 1);
          }
          function pg(e) {
            for (; e === Hh; )
              (Hh = Jc[--Zc]),
                (Jc[Zc] = null),
                (Vh = Jc[--Zc]),
                (Jc[Zc] = null);
            for (; e === ls; )
              (ls = Ja[--Za]),
                (Ja[Za] = null),
                (Wl = Ja[--Za]),
                (Ja[Za] = null),
                (Yl = Ja[--Za]),
                (Ja[Za] = null);
          }
          function gw() {
            return os(), ls !== null ? { id: Yl, overflow: Wl } : null;
          }
          function Sw(e, t) {
            os(),
              (Ja[Za++] = Yl),
              (Ja[Za++] = Wl),
              (Ja[Za++] = ls),
              (Yl = t.id),
              (Wl = t.overflow),
              (ls = e);
          }
          function os() {
            rr() ||
              y(
                "Expected to be hydrating. This is a bug in React. Please file an issue.",
              );
          }
          var nr = null,
            ei = null,
            Ri = !1,
            ss = !1,
            qu = null;
          function Ew() {
            Ri &&
              y(
                "We should not be hydrating here. This is a bug in React. Please file a bug.",
              );
          }
          function LE() {
            ss = !0;
          }
          function Cw() {
            return ss;
          }
          function Tw(e) {
            var t = e.stateNode.containerInfo;
            return (
              (ei = Vx(t)), (nr = e), (Ri = !0), (qu = null), (ss = !1), !0
            );
          }
          function Rw(e, t, a) {
            return (
              (ei = Bx(t)),
              (nr = e),
              (Ri = !0),
              (qu = null),
              (ss = !1),
              a !== null && Sw(e, a),
              !0
            );
          }
          function OE(e, t) {
            switch (e.tag) {
              case $: {
                qx(e.stateNode.containerInfo, t);
                break;
              }
              case oe: {
                var a = (e.mode & Ee) !== ge;
                Zx(e.type, e.memoizedProps, e.stateNode, t, a);
                break;
              }
              case We: {
                var i = e.memoizedState;
                i.dehydrated !== null && Jx(i.dehydrated, t);
                break;
              }
            }
          }
          function ME(e, t) {
            OE(e, t);
            var a = _D();
            (a.stateNode = t), (a.return = e);
            var i = e.deletions;
            i === null ? ((e.deletions = [a]), (e.flags |= ft)) : i.push(a);
          }
          function vg(e, t) {
            {
              if (ss) return;
              switch (e.tag) {
                case $: {
                  var a = e.stateNode.containerInfo;
                  switch (t.tag) {
                    case oe:
                      var i = t.type;
                      t.pendingProps, ew(a, i);
                      break;
                    case _e:
                      var u = t.pendingProps;
                      tw(a, u);
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
                      aw(s, f, p, h, g, E);
                      break;
                    }
                    case _e: {
                      var _ = t.pendingProps,
                        w = (e.mode & Ee) !== ge;
                      iw(s, f, p, _, w);
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
                        t.pendingProps, nw(z, H);
                        break;
                      case _e:
                        var le = t.pendingProps;
                        rw(z, le);
                        break;
                    }
                  break;
                }
                default:
                  return;
              }
            }
          }
          function UE(e, t) {
            (t.flags = (t.flags & ~la) | Ot), vg(e, t);
          }
          function zE(e, t) {
            switch (e.tag) {
              case oe: {
                var a = e.type;
                e.pendingProps;
                var i = Ux(t, a);
                return i !== null
                  ? ((e.stateNode = i), (nr = e), (ei = Hx(i)), !0)
                  : !1;
              }
              case _e: {
                var u = e.pendingProps,
                  s = zx(t, u);
                return s !== null
                  ? ((e.stateNode = s), (nr = e), (ei = null), !0)
                  : !1;
              }
              case We: {
                var f = Ax(t);
                if (f !== null) {
                  var p = { dehydrated: f, treeContext: gw(), retryLane: Kn };
                  e.memoizedState = p;
                  var h = DD(f);
                  return (
                    (h.return = e), (e.child = h), (nr = e), (ei = null), !0
                  );
                }
                return !1;
              }
              default:
                return !1;
            }
          }
          function hg(e) {
            return (e.mode & Ee) !== ge && (e.flags & ze) === be;
          }
          function mg(e) {
            throw new Error(
              "Hydration failed because the initial UI does not match what was rendered on the server.",
            );
          }
          function yg(e) {
            if (Ri) {
              var t = ei;
              if (!t) {
                hg(e) && (vg(nr, e), mg()), UE(nr, e), (Ri = !1), (nr = e);
                return;
              }
              var a = t;
              if (!zE(e, t)) {
                hg(e) && (vg(nr, e), mg()), (t = Id(a));
                var i = nr;
                if (!t || !zE(e, t)) {
                  UE(nr, e), (Ri = !1), (nr = e);
                  return;
                }
                ME(i, a);
              }
            }
          }
          function xw(e, t, a) {
            var i = e.stateNode,
              u = !ss,
              s = Px(i, e.type, e.memoizedProps, t, a, e, u);
            return (e.updateQueue = s), s !== null;
          }
          function ww(e) {
            var t = e.stateNode,
              a = e.memoizedProps,
              i = $x(t, a, e);
            if (i) {
              var u = nr;
              if (u !== null)
                switch (u.tag) {
                  case $: {
                    var s = u.stateNode.containerInfo,
                      f = (u.mode & Ee) !== ge;
                    Xx(s, t, a, f);
                    break;
                  }
                  case oe: {
                    var p = u.type,
                      h = u.memoizedProps,
                      g = u.stateNode,
                      E = (u.mode & Ee) !== ge;
                    Kx(p, h, g, t, a, E);
                    break;
                  }
                }
            }
            return i;
          }
          function bw(e) {
            var t = e.memoizedState,
              a = t !== null ? t.dehydrated : null;
            if (!a)
              throw new Error(
                "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
              );
            Yx(a, e);
          }
          function _w(e) {
            var t = e.memoizedState,
              a = t !== null ? t.dehydrated : null;
            if (!a)
              throw new Error(
                "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
              );
            return Wx(a);
          }
          function AE(e) {
            for (
              var t = e.return;
              t !== null && t.tag !== oe && t.tag !== $ && t.tag !== We;

            )
              t = t.return;
            nr = t;
          }
          function Ph(e) {
            if (e !== nr) return !1;
            if (!Ri) return AE(e), (Ri = !0), !1;
            if (
              e.tag !== $ &&
              (e.tag !== oe || (Gx(e.type) && !Jy(e.type, e.memoizedProps)))
            ) {
              var t = ei;
              if (t)
                if (hg(e)) jE(e), mg();
                else for (; t; ) ME(e, t), (t = Id(t));
            }
            return (
              AE(e),
              e.tag === We ? (ei = _w(e)) : (ei = nr ? Id(e.stateNode) : null),
              !0
            );
          }
          function Dw() {
            return Ri && ei !== null;
          }
          function jE(e) {
            for (var t = ei; t; ) OE(e, t), (t = Id(t));
          }
          function ef() {
            (nr = null), (ei = null), (Ri = !1), (ss = !1);
          }
          function FE() {
            qu !== null && (L1(qu), (qu = null));
          }
          function rr() {
            return Ri;
          }
          function gg(e) {
            qu === null ? (qu = [e]) : qu.push(e);
          }
          var kw = S.ReactCurrentBatchConfig,
            Nw = null;
          function Lw() {
            return kw.transition;
          }
          var xi = {
            recordUnsafeLifecycleWarnings: function (e, t) {},
            flushPendingUnsafeLifecycleWarnings: function () {},
            recordLegacyContextWarning: function (e, t) {},
            flushLegacyContextWarning: function () {},
            discardPendingWarnings: function () {},
          };
          {
            var Ow = function (e) {
                for (var t = null, a = e; a !== null; )
                  a.mode & qe && (t = a), (a = a.return);
                return t;
              },
              cs = function (e) {
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
              fs = new Set();
            (xi.recordUnsafeLifecycleWarnings = function (e, t) {
              fs.has(e.type) ||
                (typeof t.componentWillMount == "function" &&
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
              (xi.flushPendingUnsafeLifecycleWarnings = function () {
                var e = new Set();
                qd.length > 0 &&
                  (qd.forEach(function (w) {
                    e.add(Be(w) || "Component"), fs.add(w.type);
                  }),
                  (qd = []));
                var t = new Set();
                Jd.length > 0 &&
                  (Jd.forEach(function (w) {
                    t.add(Be(w) || "Component"), fs.add(w.type);
                  }),
                  (Jd = []));
                var a = new Set();
                Zd.length > 0 &&
                  (Zd.forEach(function (w) {
                    a.add(Be(w) || "Component"), fs.add(w.type);
                  }),
                  (Zd = []));
                var i = new Set();
                ep.length > 0 &&
                  (ep.forEach(function (w) {
                    i.add(Be(w) || "Component"), fs.add(w.type);
                  }),
                  (ep = []));
                var u = new Set();
                tp.length > 0 &&
                  (tp.forEach(function (w) {
                    u.add(Be(w) || "Component"), fs.add(w.type);
                  }),
                  (tp = []));
                var s = new Set();
                if (
                  (np.length > 0 &&
                    (np.forEach(function (w) {
                      s.add(Be(w) || "Component"), fs.add(w.type);
                    }),
                    (np = [])),
                  t.size > 0)
                ) {
                  var f = cs(t);
                  y(
                    `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
                    f,
                  );
                }
                if (i.size > 0) {
                  var p = cs(i);
                  y(
                    `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
                    p,
                  );
                }
                if (s.size > 0) {
                  var h = cs(s);
                  y(
                    `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                    h,
                  );
                }
                if (e.size > 0) {
                  var g = cs(e);
                  F(
                    `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    g,
                  );
                }
                if (a.size > 0) {
                  var E = cs(a);
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
                  var _ = cs(u);
                  F(
                    `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    _,
                  );
                }
              });
            var $h = new Map(),
              HE = new Set();
            (xi.recordLegacyContextWarning = function (e, t) {
              var a = Ow(e);
              if (a === null) {
                y(
                  "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.",
                );
                return;
              }
              if (!HE.has(e.type)) {
                var i = $h.get(a);
                (e.type.contextTypes != null ||
                  e.type.childContextTypes != null ||
                  (t !== null && typeof t.getChildContext == "function")) &&
                  (i === void 0 && ((i = []), $h.set(a, i)), i.push(e));
              }
            }),
              (xi.flushLegacyContextWarning = function () {
                $h.forEach(function (e, t) {
                  if (e.length !== 0) {
                    var a = e[0],
                      i = new Set();
                    e.forEach(function (s) {
                      i.add(Be(s) || "Component"), HE.add(s.type);
                    });
                    var u = cs(i);
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
              (xi.discardPendingWarnings = function () {
                (qd = []),
                  (Jd = []),
                  (Zd = []),
                  (ep = []),
                  (tp = []),
                  (np = []),
                  ($h = new Map());
              });
          }
          var Sg,
            Eg,
            Cg,
            Tg,
            Rg,
            VE = function (e, t) {};
          (Sg = !1),
            (Eg = !1),
            (Cg = {}),
            (Tg = {}),
            (Rg = {}),
            (VE = function (e, t) {
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
                Tg[a] ||
                  ((Tg[a] = !0),
                  y(
                    'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.',
                  ));
              }
            });
          function Mw(e) {
            return e.prototype && e.prototype.isReactComponent;
          }
          function rp(e, t, a) {
            var i = a.ref;
            if (i !== null && typeof i != "function" && typeof i != "object") {
              if (
                (e.mode & qe || er) &&
                !(a._owner && a._self && a._owner.stateNode !== a._self) &&
                !(a._owner && a._owner.tag !== j) &&
                !(typeof a.type == "function" && !Mw(a.type)) &&
                a._owner
              ) {
                var u = Be(e) || "Component";
                Cg[u] ||
                  (y(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    u,
                    i,
                  ),
                  (Cg[u] = !0));
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
                ii(i, "ref");
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
          function Yh(e, t) {
            var a = Object.prototype.toString.call(t);
            throw new Error(
              "Objects are not valid as a React child (found: " +
                (a === "[object Object]"
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : a) +
                "). If you meant to render a collection of children, use an array instead.",
            );
          }
          function Wh(e) {
            {
              var t = Be(e) || "Component";
              if (Rg[t]) return;
              (Rg[t] = !0),
                y(
                  "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.",
                );
            }
          }
          function BE(e) {
            var t = e._payload,
              a = e._init;
            return a(t);
          }
          function PE(e) {
            function t(N, V) {
              if (e) {
                var L = N.deletions;
                L === null ? ((N.deletions = [V]), (N.flags |= ft)) : L.push(V);
              }
            }
            function a(N, V) {
              if (!e) return null;
              for (var L = V; L !== null; ) t(N, L), (L = L.sibling);
              return null;
            }
            function i(N, V) {
              for (var L = new Map(), X = V; X !== null; )
                X.key !== null ? L.set(X.key, X) : L.set(X.index, X),
                  (X = X.sibling);
              return L;
            }
            function u(N, V) {
              var L = Es(N, V);
              return (L.index = 0), (L.sibling = null), L;
            }
            function s(N, V, L) {
              if (((N.index = L), !e)) return (N.flags |= rd), V;
              var X = N.alternate;
              if (X !== null) {
                var de = X.index;
                return de < V ? ((N.flags |= Ot), V) : de;
              } else return (N.flags |= Ot), V;
            }
            function f(N) {
              return e && N.alternate === null && (N.flags |= Ot), N;
            }
            function p(N, V, L, X) {
              if (V === null || V.tag !== _e) {
                var de = g0(L, N.mode, X);
                return (de.return = N), de;
              } else {
                var ue = u(V, L);
                return (ue.return = N), ue;
              }
            }
            function h(N, V, L, X) {
              var de = L.type;
              if (de === Da) return E(N, V, L.props.children, X, L.key);
              if (
                V !== null &&
                (V.elementType === de ||
                  I1(V, L) ||
                  (typeof de == "object" &&
                    de !== null &&
                    de.$$typeof === Me &&
                    BE(de) === V.type))
              ) {
                var ue = u(V, L.props);
                return (
                  (ue.ref = rp(N, V, L)),
                  (ue.return = N),
                  (ue._debugSource = L._source),
                  (ue._debugOwner = L._owner),
                  ue
                );
              }
              var Ue = y0(L, N.mode, X);
              return (Ue.ref = rp(N, V, L)), (Ue.return = N), Ue;
            }
            function g(N, V, L, X) {
              if (
                V === null ||
                V.tag !== J ||
                V.stateNode.containerInfo !== L.containerInfo ||
                V.stateNode.implementation !== L.implementation
              ) {
                var de = S0(L, N.mode, X);
                return (de.return = N), de;
              } else {
                var ue = u(V, L.children || []);
                return (ue.return = N), ue;
              }
            }
            function E(N, V, L, X, de) {
              if (V === null || V.tag !== Ie) {
                var ue = oo(L, N.mode, X, de);
                return (ue.return = N), ue;
              } else {
                var Ue = u(V, L);
                return (Ue.return = N), Ue;
              }
            }
            function _(N, V, L) {
              if ((typeof V == "string" && V !== "") || typeof V == "number") {
                var X = g0("" + V, N.mode, L);
                return (X.return = N), X;
              }
              if (typeof V == "object" && V !== null) {
                switch (V.$$typeof) {
                  case li: {
                    var de = y0(V, N.mode, L);
                    return (de.ref = rp(N, null, V)), (de.return = N), de;
                  }
                  case jr: {
                    var ue = S0(V, N.mode, L);
                    return (ue.return = N), ue;
                  }
                  case Me: {
                    var Ue = V._payload,
                      Ve = V._init;
                    return _(N, Ve(Ue), L);
                  }
                }
                if (Cn(V) || Fr(V)) {
                  var Tt = oo(V, N.mode, L, null);
                  return (Tt.return = N), Tt;
                }
                Yh(N, V);
              }
              return typeof V == "function" && Wh(N), null;
            }
            function w(N, V, L, X) {
              var de = V !== null ? V.key : null;
              if ((typeof L == "string" && L !== "") || typeof L == "number")
                return de !== null ? null : p(N, V, "" + L, X);
              if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                  case li:
                    return L.key === de ? h(N, V, L, X) : null;
                  case jr:
                    return L.key === de ? g(N, V, L, X) : null;
                  case Me: {
                    var ue = L._payload,
                      Ue = L._init;
                    return w(N, V, Ue(ue), X);
                  }
                }
                if (Cn(L) || Fr(L))
                  return de !== null ? null : E(N, V, L, X, null);
                Yh(N, L);
              }
              return typeof L == "function" && Wh(N), null;
            }
            function M(N, V, L, X, de) {
              if ((typeof X == "string" && X !== "") || typeof X == "number") {
                var ue = N.get(L) || null;
                return p(V, ue, "" + X, de);
              }
              if (typeof X == "object" && X !== null) {
                switch (X.$$typeof) {
                  case li: {
                    var Ue = N.get(X.key === null ? L : X.key) || null;
                    return h(V, Ue, X, de);
                  }
                  case jr: {
                    var Ve = N.get(X.key === null ? L : X.key) || null;
                    return g(V, Ve, X, de);
                  }
                  case Me:
                    var Tt = X._payload,
                      ot = X._init;
                    return M(N, V, L, ot(Tt), de);
                }
                if (Cn(X) || Fr(X)) {
                  var vn = N.get(L) || null;
                  return E(V, vn, X, de, null);
                }
                Yh(V, X);
              }
              return typeof X == "function" && Wh(V), null;
            }
            function z(N, V, L) {
              {
                if (typeof N != "object" || N === null) return V;
                switch (N.$$typeof) {
                  case li:
                  case jr:
                    VE(N, L);
                    var X = N.key;
                    if (typeof X != "string") break;
                    if (V === null) {
                      (V = new Set()), V.add(X);
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
                    var de = N._payload,
                      ue = N._init;
                    z(ue(de), V, L);
                    break;
                }
              }
              return V;
            }
            function H(N, V, L, X) {
              for (var de = null, ue = 0; ue < L.length; ue++) {
                var Ue = L[ue];
                de = z(Ue, de, N);
              }
              for (
                var Ve = null, Tt = null, ot = V, vn = 0, st = 0, ln = null;
                ot !== null && st < L.length;
                st++
              ) {
                ot.index > st ? ((ln = ot), (ot = null)) : (ln = ot.sibling);
                var kr = w(N, ot, L[st], X);
                if (kr === null) {
                  ot === null && (ot = ln);
                  break;
                }
                e && ot && kr.alternate === null && t(N, ot),
                  (vn = s(kr, vn, st)),
                  Tt === null ? (Ve = kr) : (Tt.sibling = kr),
                  (Tt = kr),
                  (ot = ln);
              }
              if (st === L.length) {
                if ((a(N, ot), rr())) {
                  var cr = st;
                  us(N, cr);
                }
                return Ve;
              }
              if (ot === null) {
                for (; st < L.length; st++) {
                  var Fa = _(N, L[st], X);
                  Fa !== null &&
                    ((vn = s(Fa, vn, st)),
                    Tt === null ? (Ve = Fa) : (Tt.sibling = Fa),
                    (Tt = Fa));
                }
                if (rr()) {
                  var Xr = st;
                  us(N, Xr);
                }
                return Ve;
              }
              for (var Kr = i(N, ot); st < L.length; st++) {
                var Nr = M(Kr, N, st, L[st], X);
                Nr !== null &&
                  (e &&
                    Nr.alternate !== null &&
                    Kr.delete(Nr.key === null ? st : Nr.key),
                  (vn = s(Nr, vn, st)),
                  Tt === null ? (Ve = Nr) : (Tt.sibling = Nr),
                  (Tt = Nr));
              }
              if (
                (e &&
                  Kr.forEach(function (Ef) {
                    return t(N, Ef);
                  }),
                rr())
              ) {
                var Jl = st;
                us(N, Jl);
              }
              return Ve;
            }
            function le(N, V, L, X) {
              var de = Fr(L);
              if (typeof de != "function")
                throw new Error(
                  "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.",
                );
              {
                typeof Symbol == "function" &&
                  L[Symbol.toStringTag] === "Generator" &&
                  (Eg ||
                    y(
                      "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.",
                    ),
                  (Eg = !0)),
                  L.entries === de &&
                    (Sg ||
                      y(
                        "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
                      ),
                    (Sg = !0));
                var ue = de.call(L);
                if (ue)
                  for (
                    var Ue = null, Ve = ue.next();
                    !Ve.done;
                    Ve = ue.next()
                  ) {
                    var Tt = Ve.value;
                    Ue = z(Tt, Ue, N);
                  }
              }
              var ot = de.call(L);
              if (ot == null)
                throw new Error("An iterable object provided no iterator.");
              for (
                var vn = null,
                  st = null,
                  ln = V,
                  kr = 0,
                  cr = 0,
                  Fa = null,
                  Xr = ot.next();
                ln !== null && !Xr.done;
                cr++, Xr = ot.next()
              ) {
                ln.index > cr ? ((Fa = ln), (ln = null)) : (Fa = ln.sibling);
                var Kr = w(N, ln, Xr.value, X);
                if (Kr === null) {
                  ln === null && (ln = Fa);
                  break;
                }
                e && ln && Kr.alternate === null && t(N, ln),
                  (kr = s(Kr, kr, cr)),
                  st === null ? (vn = Kr) : (st.sibling = Kr),
                  (st = Kr),
                  (ln = Fa);
              }
              if (Xr.done) {
                if ((a(N, ln), rr())) {
                  var Nr = cr;
                  us(N, Nr);
                }
                return vn;
              }
              if (ln === null) {
                for (; !Xr.done; cr++, Xr = ot.next()) {
                  var Jl = _(N, Xr.value, X);
                  Jl !== null &&
                    ((kr = s(Jl, kr, cr)),
                    st === null ? (vn = Jl) : (st.sibling = Jl),
                    (st = Jl));
                }
                if (rr()) {
                  var Ef = cr;
                  us(N, Ef);
                }
                return vn;
              }
              for (var zp = i(N, ln); !Xr.done; cr++, Xr = ot.next()) {
                var sl = M(zp, N, cr, Xr.value, X);
                sl !== null &&
                  (e &&
                    sl.alternate !== null &&
                    zp.delete(sl.key === null ? cr : sl.key),
                  (kr = s(sl, kr, cr)),
                  st === null ? (vn = sl) : (st.sibling = sl),
                  (st = sl));
              }
              if (
                (e &&
                  zp.forEach(function (ik) {
                    return t(N, ik);
                  }),
                rr())
              ) {
                var ak = cr;
                us(N, ak);
              }
              return vn;
            }
            function De(N, V, L, X) {
              if (V !== null && V.tag === _e) {
                a(N, V.sibling);
                var de = u(V, L);
                return (de.return = N), de;
              }
              a(N, V);
              var ue = g0(L, N.mode, X);
              return (ue.return = N), ue;
            }
            function Ce(N, V, L, X) {
              for (var de = L.key, ue = V; ue !== null; ) {
                if (ue.key === de) {
                  var Ue = L.type;
                  if (Ue === Da) {
                    if (ue.tag === Ie) {
                      a(N, ue.sibling);
                      var Ve = u(ue, L.props.children);
                      return (
                        (Ve.return = N),
                        (Ve._debugSource = L._source),
                        (Ve._debugOwner = L._owner),
                        Ve
                      );
                    }
                  } else if (
                    ue.elementType === Ue ||
                    I1(ue, L) ||
                    (typeof Ue == "object" &&
                      Ue !== null &&
                      Ue.$$typeof === Me &&
                      BE(Ue) === ue.type)
                  ) {
                    a(N, ue.sibling);
                    var Tt = u(ue, L.props);
                    return (
                      (Tt.ref = rp(N, ue, L)),
                      (Tt.return = N),
                      (Tt._debugSource = L._source),
                      (Tt._debugOwner = L._owner),
                      Tt
                    );
                  }
                  a(N, ue);
                  break;
                } else t(N, ue);
                ue = ue.sibling;
              }
              if (L.type === Da) {
                var ot = oo(L.props.children, N.mode, X, L.key);
                return (ot.return = N), ot;
              } else {
                var vn = y0(L, N.mode, X);
                return (vn.ref = rp(N, V, L)), (vn.return = N), vn;
              }
            }
            function rt(N, V, L, X) {
              for (var de = L.key, ue = V; ue !== null; ) {
                if (ue.key === de)
                  if (
                    ue.tag === J &&
                    ue.stateNode.containerInfo === L.containerInfo &&
                    ue.stateNode.implementation === L.implementation
                  ) {
                    a(N, ue.sibling);
                    var Ue = u(ue, L.children || []);
                    return (Ue.return = N), Ue;
                  } else {
                    a(N, ue);
                    break;
                  }
                else t(N, ue);
                ue = ue.sibling;
              }
              var Ve = S0(L, N.mode, X);
              return (Ve.return = N), Ve;
            }
            function Ze(N, V, L, X) {
              var de =
                typeof L == "object" &&
                L !== null &&
                L.type === Da &&
                L.key === null;
              if (
                (de && (L = L.props.children),
                typeof L == "object" && L !== null)
              ) {
                switch (L.$$typeof) {
                  case li:
                    return f(Ce(N, V, L, X));
                  case jr:
                    return f(rt(N, V, L, X));
                  case Me:
                    var ue = L._payload,
                      Ue = L._init;
                    return Ze(N, V, Ue(ue), X);
                }
                if (Cn(L)) return H(N, V, L, X);
                if (Fr(L)) return le(N, V, L, X);
                Yh(N, L);
              }
              return (typeof L == "string" && L !== "") || typeof L == "number"
                ? f(De(N, V, "" + L, X))
                : (typeof L == "function" && Wh(N), a(N, V));
            }
            return Ze;
          }
          var tf = PE(!0),
            $E = PE(!1);
          function Uw(e, t) {
            if (e !== null && t.child !== e.child)
              throw new Error("Resuming work not yet implemented.");
            if (t.child !== null) {
              var a = t.child,
                i = Es(a, a.pendingProps);
              for (t.child = i, i.return = t; a.sibling !== null; )
                (a = a.sibling),
                  (i = i.sibling = Es(a, a.pendingProps)),
                  (i.return = t);
              i.sibling = null;
            }
          }
          function zw(e, t) {
            for (var a = e.child; a !== null; ) TD(a, t), (a = a.sibling);
          }
          var xg = Gu(null),
            wg;
          wg = {};
          var Qh = null,
            nf = null,
            bg = null,
            Ih = !1;
          function Gh() {
            (Qh = null), (nf = null), (bg = null), (Ih = !1);
          }
          function YE() {
            Ih = !0;
          }
          function WE() {
            Ih = !1;
          }
          function QE(e, t, a) {
            _r(xg, t._currentValue, e),
              (t._currentValue = a),
              t._currentRenderer !== void 0 &&
                t._currentRenderer !== null &&
                t._currentRenderer !== wg &&
                y(
                  "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.",
                ),
              (t._currentRenderer = wg);
          }
          function _g(e, t) {
            var a = xg.current;
            br(xg, t), (e._currentValue = a);
          }
          function Dg(e, t, a) {
            for (var i = e; i !== null; ) {
              var u = i.alternate;
              if (
                (Ml(i.childLanes, t)
                  ? u !== null &&
                    !Ml(u.childLanes, t) &&
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
          function Aw(e, t, a) {
            jw(e, t, a);
          }
          function jw(e, t, a) {
            var i = e.child;
            for (i !== null && (i.return = e); i !== null; ) {
              var u = void 0,
                s = i.dependencies;
              if (s !== null) {
                u = i.child;
                for (var f = s.firstContext; f !== null; ) {
                  if (f.context === t) {
                    if (i.tag === j) {
                      var p = ku(a),
                        h = Ql(Dt, p);
                      h.tag = Kh;
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
                      Dg(i.return, a, e),
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
                  Dg(M, a, e),
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
          function rf(e, t) {
            (Qh = e), (nf = null), (bg = null);
            var a = e.dependencies;
            if (a !== null) {
              var i = a.firstContext;
              i !== null && (xr(a.lanes, t) && gp(), (a.firstContext = null));
            }
          }
          function _n(e) {
            Ih &&
              y(
                "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
              );
            var t = e._currentValue;
            if (bg !== e) {
              var a = { context: e, memoizedValue: t, next: null };
              if (nf === null) {
                if (Qh === null)
                  throw new Error(
                    "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
                  );
                (nf = a), (Qh.dependencies = { lanes: Y, firstContext: a });
              } else nf = nf.next = a;
            }
            return t;
          }
          var ds = null;
          function kg(e) {
            ds === null ? (ds = [e]) : ds.push(e);
          }
          function Fw() {
            if (ds !== null) {
              for (var e = 0; e < ds.length; e++) {
                var t = ds[e],
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
              ds = null;
            }
          }
          function IE(e, t, a, i) {
            var u = t.interleaved;
            return (
              u === null
                ? ((a.next = a), kg(t))
                : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a),
              Xh(e, i)
            );
          }
          function Hw(e, t, a, i) {
            var u = t.interleaved;
            u === null
              ? ((a.next = a), kg(t))
              : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a);
          }
          function Vw(e, t, a, i) {
            var u = t.interleaved;
            return (
              u === null
                ? ((a.next = a), kg(t))
                : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a),
              Xh(e, i)
            );
          }
          function ga(e, t) {
            return Xh(e, t);
          }
          var Bw = Xh;
          function Xh(e, t) {
            e.lanes = Pe(e.lanes, t);
            var a = e.alternate;
            a !== null && (a.lanes = Pe(a.lanes, t)),
              a === null && (e.flags & (Ot | la)) !== be && $1(e);
            for (var i = e, u = e.return; u !== null; )
              (u.childLanes = Pe(u.childLanes, t)),
                (a = u.alternate),
                a !== null
                  ? (a.childLanes = Pe(a.childLanes, t))
                  : (u.flags & (Ot | la)) !== be && $1(e),
                (i = u),
                (u = u.return);
            if (i.tag === $) {
              var s = i.stateNode;
              return s;
            } else return null;
          }
          var GE = 0,
            XE = 1,
            Kh = 2,
            Ng = 3,
            qh = !1,
            Lg,
            Jh;
          (Lg = !1), (Jh = null);
          function Og(e) {
            var t = {
              baseState: e.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: { pending: null, interleaved: null, lanes: Y },
              effects: null,
            };
            e.updateQueue = t;
          }
          function KE(e, t) {
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
          function Ql(e, t) {
            var a = {
              eventTime: e,
              lane: t,
              tag: GE,
              payload: null,
              callback: null,
              next: null,
            };
            return a;
          }
          function Ju(e, t, a) {
            var i = e.updateQueue;
            if (i === null) return null;
            var u = i.shared;
            if (
              (Jh === u &&
                !Lg &&
                (y(
                  "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.",
                ),
                (Lg = !0)),
              H_())
            ) {
              var s = u.pending;
              return (
                s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
                (u.pending = t),
                Bw(e, a)
              );
            } else return Vw(e, u, t, a);
          }
          function Zh(e, t, a) {
            var i = t.updateQueue;
            if (i !== null) {
              var u = i.shared;
              if (gd(a)) {
                var s = u.lanes;
                s = Ec(s, e.pendingLanes);
                var f = Pe(s, a);
                (u.lanes = f), Sd(e, f);
              }
            }
          }
          function Mg(e, t) {
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
          function Pw(e, t, a, i, u, s) {
            switch (a.tag) {
              case XE: {
                var f = a.payload;
                if (typeof f == "function") {
                  YE();
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
                    WE();
                  }
                  return p;
                }
                return f;
              }
              case Ng:
                e.flags = (e.flags & ~Rn) | ze;
              case GE: {
                var h = a.payload,
                  g;
                if (typeof h == "function") {
                  YE(), (g = h.call(s, i, u));
                  {
                    if (e.mode & qe) {
                      rn(!0);
                      try {
                        h.call(s, i, u);
                      } finally {
                        rn(!1);
                      }
                    }
                    WE();
                  }
                } else g = h;
                return g == null ? i : Ke({}, i, g);
              }
              case Kh:
                return (qh = !0), i;
            }
            return i;
          }
          function em(e, t, a, i) {
            var u = e.updateQueue;
            (qh = !1), (Jh = u.shared);
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
                if (Ml(i, rt)) {
                  if (De !== null) {
                    var V = {
                      eventTime: Ze,
                      lane: an,
                      tag: Ce.tag,
                      payload: Ce.payload,
                      callback: Ce.callback,
                      next: null,
                    };
                    De = De.next = V;
                  }
                  M = Pw(e, u, Ce, M, t, a);
                  var L = Ce.callback;
                  if (L !== null && Ce.lane !== an) {
                    e.flags |= Qa;
                    var X = u.effects;
                    X === null ? (u.effects = [Ce]) : X.push(Ce);
                  }
                } else {
                  var N = {
                    eventTime: Ze,
                    lane: rt,
                    tag: Ce.tag,
                    payload: Ce.payload,
                    callback: Ce.callback,
                    next: null,
                  };
                  De === null ? ((le = De = N), (H = M)) : (De = De.next = N),
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
              Np(z), (e.lanes = z), (e.memoizedState = M);
            }
            Jh = null;
          }
          function $w(e, t) {
            if (typeof e != "function")
              throw new Error(
                "Invalid argument passed as callback. Expected a function. Instead " +
                  ("received: " + e),
              );
            e.call(t);
          }
          function qE() {
            qh = !1;
          }
          function tm() {
            return qh;
          }
          function JE(e, t, a) {
            var i = t.effects;
            if (((t.effects = null), i !== null))
              for (var u = 0; u < i.length; u++) {
                var s = i[u],
                  f = s.callback;
                f !== null && ((s.callback = null), $w(f, a));
              }
          }
          var ap = {},
            Zu = Gu(ap),
            ip = Gu(ap),
            nm = Gu(ap);
          function rm(e) {
            if (e === ap)
              throw new Error(
                "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.",
              );
            return e;
          }
          function ZE() {
            var e = rm(nm.current);
            return e;
          }
          function Ug(e, t) {
            _r(nm, t, e), _r(ip, e, e), _r(Zu, ap, e);
            var a = lx(t);
            br(Zu, e), _r(Zu, a, e);
          }
          function af(e) {
            br(Zu, e), br(ip, e), br(nm, e);
          }
          function zg() {
            var e = rm(Zu.current);
            return e;
          }
          function eC(e) {
            rm(nm.current);
            var t = rm(Zu.current),
              a = ux(t, e.type);
            t !== a && (_r(ip, e, e), _r(Zu, a, e));
          }
          function Ag(e) {
            ip.current === e && (br(Zu, e), br(ip, e));
          }
          var Yw = 0,
            tC = 1,
            nC = 1,
            lp = 2,
            wi = Gu(Yw);
          function jg(e, t) {
            return (e & t) !== 0;
          }
          function lf(e) {
            return e & tC;
          }
          function Fg(e, t) {
            return (e & tC) | t;
          }
          function Ww(e, t) {
            return e | t;
          }
          function eo(e, t) {
            _r(wi, t, e);
          }
          function uf(e) {
            br(wi, e);
          }
          function Qw(e, t) {
            var a = e.memoizedState;
            return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
          }
          function am(e) {
            for (var t = e; t !== null; ) {
              if (t.tag === We) {
                var a = t.memoizedState;
                if (a !== null) {
                  var i = a.dehydrated;
                  if (i === null || SE(i) || ng(i)) return t;
                }
              } else if (
                t.tag === dt &&
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
          var Sa = 0,
            zn = 1,
            nl = 2,
            An = 4,
            ar = 8,
            Hg = [];
          function Vg() {
            for (var e = 0; e < Hg.length; e++) {
              var t = Hg[e];
              t._workInProgressVersionPrimary = null;
            }
            Hg.length = 0;
          }
          function Iw(e, t) {
            var a = t._getVersion,
              i = a(t._source);
            e.mutableSourceEagerHydrationData == null
              ? (e.mutableSourceEagerHydrationData = [t, i])
              : e.mutableSourceEagerHydrationData.push(t, i);
          }
          var ce = S.ReactCurrentDispatcher,
            up = S.ReactCurrentBatchConfig,
            Bg,
            of;
          Bg = new Set();
          var ps = Y,
            Ct = null,
            jn = null,
            Fn = null,
            im = !1,
            op = !1,
            sp = 0,
            Gw = 0,
            Xw = 25,
            B = null,
            ti = null,
            to = -1,
            Pg = !1;
          function ht() {
            {
              var e = B;
              ti === null ? (ti = [e]) : ti.push(e);
            }
          }
          function ae() {
            {
              var e = B;
              ti !== null && (to++, ti[to] !== e && Kw(e));
            }
          }
          function sf(e) {
            e != null &&
              !Cn(e) &&
              y(
                "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
                B,
                typeof e,
              );
          }
          function Kw(e) {
            {
              var t = Be(Ct);
              if (!Bg.has(t) && (Bg.add(t), ti !== null)) {
                for (var a = "", i = 30, u = 0; u <= to; u++) {
                  for (
                    var s = ti[u], f = u === to ? e : s, p = u + 1 + ". " + s;
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
          function $g(e, t) {
            if (Pg) return !1;
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
          function cf(e, t, a, i, u, s) {
            (ps = s),
              (Ct = t),
              (ti = e !== null ? e._debugHookTypes : null),
              (to = -1),
              (Pg = e !== null && e.type !== t.type),
              (t.memoizedState = null),
              (t.updateQueue = null),
              (t.lanes = Y),
              e !== null && e.memoizedState !== null
                ? (ce.current = xC)
                : ti !== null
                  ? (ce.current = RC)
                  : (ce.current = TC);
            var f = a(i, u);
            if (op) {
              var p = 0;
              do {
                if (((op = !1), (sp = 0), p >= Xw))
                  throw new Error(
                    "Too many re-renders. React limits the number of renders to prevent an infinite loop.",
                  );
                (p += 1),
                  (Pg = !1),
                  (jn = null),
                  (Fn = null),
                  (t.updateQueue = null),
                  (to = -1),
                  (ce.current = wC),
                  (f = a(i, u));
              } while (op);
            }
            (ce.current = gm), (t._debugHookTypes = ti);
            var h = jn !== null && jn.next !== null;
            if (
              ((ps = Y),
              (Ct = null),
              (jn = null),
              (Fn = null),
              (B = null),
              (ti = null),
              (to = -1),
              e !== null &&
                (e.flags & On) !== (t.flags & On) &&
                (e.mode & Ee) !== ge &&
                y(
                  "Internal React error: Expected static flag was missing. Please notify the React team.",
                ),
              (im = !1),
              h)
            )
              throw new Error(
                "Rendered fewer hooks than expected. This may be caused by an accidental early return statement.",
              );
            return f;
          }
          function ff() {
            var e = sp !== 0;
            return (sp = 0), e;
          }
          function rC(e, t, a) {
            (t.updateQueue = e.updateQueue),
              (t.mode & Yr) !== ge
                ? (t.flags &= ~(xl | gr | At | Ye))
                : (t.flags &= ~(At | Ye)),
              (e.lanes = Yo(e.lanes, a));
          }
          function aC() {
            if (((ce.current = gm), im)) {
              for (var e = Ct.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null), (e = e.next);
              }
              im = !1;
            }
            (ps = Y),
              (Ct = null),
              (jn = null),
              (Fn = null),
              (ti = null),
              (to = -1),
              (B = null),
              (yC = !1),
              (op = !1),
              (sp = 0);
          }
          function rl() {
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
          function ni() {
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
          function iC() {
            return { lastEffect: null, stores: null };
          }
          function Yg(e, t) {
            return typeof t == "function" ? t(e) : t;
          }
          function Wg(e, t, a) {
            var i = rl(),
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
            var f = (s.dispatch = eb.bind(null, Ct, s));
            return [i.memoizedState, f];
          }
          function Qg(e, t, a) {
            var i = ni(),
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
                if (Ml(ps, le)) {
                  if (z !== null) {
                    var Ce = {
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
                    Np(le);
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
              var N = Ze;
              do {
                var V = N.lane;
                (Ct.lanes = Pe(Ct.lanes, V)), Np(V), (N = N.next);
              } while (N !== Ze);
            } else f === null && (u.lanes = Y);
            var L = u.dispatch;
            return [i.memoizedState, L];
          }
          function Ig(e, t, a) {
            var i = ni(),
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
          function sN(e, t, a) {}
          function cN(e, t, a) {}
          function Gg(e, t, a) {
            var i = Ct,
              u = rl(),
              s,
              f = rr();
            if (f) {
              if (a === void 0)
                throw new Error(
                  "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.",
                );
              (s = a()),
                of ||
                  (s !== a() &&
                    (y(
                      "The result of getServerSnapshot should be cached to avoid an infinite loop",
                    ),
                    (of = !0)));
            } else {
              if (((s = t()), !of)) {
                var p = t();
                he(s, p) ||
                  (y(
                    "The result of getSnapshot should be cached to avoid an infinite loop",
                  ),
                  (of = !0));
              }
              var h = jm();
              if (h === null)
                throw new Error(
                  "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
                );
              $o(h, ps) || lC(i, t, s);
            }
            u.memoizedState = s;
            var g = { value: s, getSnapshot: t };
            return (
              (u.queue = g),
              cm(oC.bind(null, i, g, e), [e]),
              (i.flags |= At),
              cp(zn | ar, uC.bind(null, i, g, s, t), void 0, null),
              s
            );
          }
          function lm(e, t, a) {
            var i = Ct,
              u = ni(),
              s = t();
            if (!of) {
              var f = t();
              he(s, f) ||
                (y(
                  "The result of getSnapshot should be cached to avoid an infinite loop",
                ),
                (of = !0));
            }
            var p = u.memoizedState,
              h = !he(p, s);
            h && ((u.memoizedState = s), gp());
            var g = u.queue;
            if (
              (dp(oC.bind(null, i, g, e), [e]),
              g.getSnapshot !== t ||
                h ||
                (Fn !== null && Fn.memoizedState.tag & zn))
            ) {
              (i.flags |= At),
                cp(zn | ar, uC.bind(null, i, g, s, t), void 0, null);
              var E = jm();
              if (E === null)
                throw new Error(
                  "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
                );
              $o(E, ps) || lC(i, t, s);
            }
            return s;
          }
          function lC(e, t, a) {
            e.flags |= Mo;
            var i = { getSnapshot: t, value: a },
              u = Ct.updateQueue;
            if (u === null) (u = iC()), (Ct.updateQueue = u), (u.stores = [i]);
            else {
              var s = u.stores;
              s === null ? (u.stores = [i]) : s.push(i);
            }
          }
          function uC(e, t, a, i) {
            (t.value = a), (t.getSnapshot = i), sC(t) && cC(e);
          }
          function oC(e, t, a) {
            var i = function () {
              sC(t) && cC(e);
            };
            return a(i);
          }
          function sC(e) {
            var t = e.getSnapshot,
              a = e.value;
            try {
              var i = t();
              return !he(a, i);
            } catch {
              return !0;
            }
          }
          function cC(e) {
            var t = ga(e, Re);
            t !== null && Pn(t, e, Re, Dt);
          }
          function um(e) {
            var t = rl();
            typeof e == "function" && (e = e()),
              (t.memoizedState = t.baseState = e);
            var a = {
              pending: null,
              interleaved: null,
              lanes: Y,
              dispatch: null,
              lastRenderedReducer: Yg,
              lastRenderedState: e,
            };
            t.queue = a;
            var i = (a.dispatch = tb.bind(null, Ct, a));
            return [t.memoizedState, i];
          }
          function Xg(e) {
            return Qg(Yg);
          }
          function Kg(e) {
            return Ig(Yg);
          }
          function cp(e, t, a, i) {
            var u = { tag: e, create: t, destroy: a, deps: i, next: null },
              s = Ct.updateQueue;
            if (s === null)
              (s = iC()), (Ct.updateQueue = s), (s.lastEffect = u.next = u);
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
          function qg(e) {
            var t = rl();
            {
              var a = { current: e };
              return (t.memoizedState = a), a;
            }
          }
          function om(e) {
            var t = ni();
            return t.memoizedState;
          }
          function fp(e, t, a, i) {
            var u = rl(),
              s = i === void 0 ? null : i;
            (Ct.flags |= e), (u.memoizedState = cp(zn | t, a, void 0, s));
          }
          function sm(e, t, a, i) {
            var u = ni(),
              s = i === void 0 ? null : i,
              f = void 0;
            if (jn !== null) {
              var p = jn.memoizedState;
              if (((f = p.destroy), s !== null)) {
                var h = p.deps;
                if ($g(s, h)) {
                  u.memoizedState = cp(t, a, f, s);
                  return;
                }
              }
            }
            (Ct.flags |= e), (u.memoizedState = cp(zn | t, a, f, s));
          }
          function cm(e, t) {
            return (Ct.mode & Yr) !== ge
              ? fp(xl | At | Yi, ar, e, t)
              : fp(At | Yi, ar, e, t);
          }
          function dp(e, t) {
            return sm(At, ar, e, t);
          }
          function Jg(e, t) {
            return fp(Ye, nl, e, t);
          }
          function fm(e, t) {
            return sm(Ye, nl, e, t);
          }
          function Zg(e, t) {
            var a = Ye;
            return (
              (a |= yr), (Ct.mode & Yr) !== ge && (a |= gr), fp(a, An, e, t)
            );
          }
          function dm(e, t) {
            return sm(Ye, An, e, t);
          }
          function fC(e, t) {
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
          function eS(e, t, a) {
            typeof t != "function" &&
              y(
                "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
                t !== null ? typeof t : "null",
              );
            var i = a != null ? a.concat([e]) : null,
              u = Ye;
            return (
              (u |= yr),
              (Ct.mode & Yr) !== ge && (u |= gr),
              fp(u, An, fC.bind(null, t, e), i)
            );
          }
          function pm(e, t, a) {
            typeof t != "function" &&
              y(
                "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
                t !== null ? typeof t : "null",
              );
            var i = a != null ? a.concat([e]) : null;
            return sm(Ye, An, fC.bind(null, t, e), i);
          }
          function qw(e, t) {}
          var vm = qw;
          function tS(e, t) {
            var a = rl(),
              i = t === void 0 ? null : t;
            return (a.memoizedState = [e, i]), e;
          }
          function hm(e, t) {
            var a = ni(),
              i = t === void 0 ? null : t,
              u = a.memoizedState;
            if (u !== null && i !== null) {
              var s = u[1];
              if ($g(i, s)) return u[0];
            }
            return (a.memoizedState = [e, i]), e;
          }
          function nS(e, t) {
            var a = rl(),
              i = t === void 0 ? null : t,
              u = e();
            return (a.memoizedState = [u, i]), u;
          }
          function mm(e, t) {
            var a = ni(),
              i = t === void 0 ? null : t,
              u = a.memoizedState;
            if (u !== null && i !== null) {
              var s = u[1];
              if ($g(i, s)) return u[0];
            }
            var f = e();
            return (a.memoizedState = [f, i]), f;
          }
          function rS(e) {
            var t = rl();
            return (t.memoizedState = e), e;
          }
          function dC(e) {
            var t = ni(),
              a = jn,
              i = a.memoizedState;
            return vC(t, i, e);
          }
          function pC(e) {
            var t = ni();
            if (jn === null) return (t.memoizedState = e), e;
            var a = jn.memoizedState;
            return vC(t, a, e);
          }
          function vC(e, t, a) {
            var i = !Qv(ps);
            if (i) {
              if (!he(a, t)) {
                var u = Xv();
                (Ct.lanes = Pe(Ct.lanes, u)), Np(u), (e.baseState = !0);
              }
              return t;
            } else
              return (
                e.baseState && ((e.baseState = !1), gp()),
                (e.memoizedState = a),
                a
              );
          }
          function Jw(e, t, a) {
            var i = da();
            Wt(Ry(i, gi)), e(!0);
            var u = up.transition;
            up.transition = {};
            var s = up.transition;
            up.transition._updatedFibers = new Set();
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
          function aS() {
            var e = um(!1),
              t = e[0],
              a = e[1],
              i = Jw.bind(null, a),
              u = rl();
            return (u.memoizedState = i), [t, i];
          }
          function hC() {
            var e = Xg(),
              t = e[0],
              a = ni(),
              i = a.memoizedState;
            return [t, i];
          }
          function mC() {
            var e = Kg(),
              t = e[0],
              a = ni(),
              i = a.memoizedState;
            return [t, i];
          }
          var yC = !1;
          function Zw() {
            return yC;
          }
          function iS() {
            var e = rl(),
              t = jm(),
              a = t.identifierPrefix,
              i;
            if (rr()) {
              var u = mw();
              i = ":" + a + "R" + u;
              var s = sp++;
              s > 0 && (i += "H" + s.toString(32)), (i += ":");
            } else {
              var f = Gw++;
              i = ":" + a + "r" + f.toString(32) + ":";
            }
            return (e.memoizedState = i), i;
          }
          function ym() {
            var e = ni(),
              t = e.memoizedState;
            return t;
          }
          function eb(e, t, a) {
            typeof arguments[3] == "function" &&
              y(
                "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
              );
            var i = lo(e),
              u = {
                lane: i,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (gC(e)) SC(t, u);
            else {
              var s = IE(e, t, u, i);
              if (s !== null) {
                var f = Gr();
                Pn(s, e, i, f), EC(s, t, i);
              }
            }
            CC(e, i);
          }
          function tb(e, t, a) {
            typeof arguments[3] == "function" &&
              y(
                "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
              );
            var i = lo(e),
              u = {
                lane: i,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (gC(e)) SC(t, u);
            else {
              var s = e.alternate;
              if (e.lanes === Y && (s === null || s.lanes === Y)) {
                var f = t.lastRenderedReducer;
                if (f !== null) {
                  var p;
                  (p = ce.current), (ce.current = bi);
                  try {
                    var h = t.lastRenderedState,
                      g = f(h, a);
                    if (
                      ((u.hasEagerState = !0), (u.eagerState = g), he(g, h))
                    ) {
                      Hw(e, t, u, i);
                      return;
                    }
                  } catch {
                  } finally {
                    ce.current = p;
                  }
                }
              }
              var E = IE(e, t, u, i);
              if (E !== null) {
                var _ = Gr();
                Pn(E, e, i, _), EC(E, t, i);
              }
            }
            CC(e, i);
          }
          function gC(e) {
            var t = e.alternate;
            return e === Ct || (t !== null && t === Ct);
          }
          function SC(e, t) {
            op = im = !0;
            var a = e.pending;
            a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (e.pending = t);
          }
          function EC(e, t, a) {
            if (gd(a)) {
              var i = t.lanes;
              i = Ec(i, e.pendingLanes);
              var u = Pe(i, a);
              (t.lanes = u), Sd(e, u);
            }
          }
          function CC(e, t, a) {
            jo(e, t);
          }
          var gm = {
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
            TC = null,
            RC = null,
            xC = null,
            wC = null,
            al = null,
            bi = null,
            Sm = null;
          {
            var lS = function () {
                y(
                  "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
                );
              },
              He = function () {
                y(
                  "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks",
                );
              };
            (TC = {
              readContext: function (e) {
                return _n(e);
              },
              useCallback: function (e, t) {
                return (B = "useCallback"), ht(), sf(t), tS(e, t);
              },
              useContext: function (e) {
                return (B = "useContext"), ht(), _n(e);
              },
              useEffect: function (e, t) {
                return (B = "useEffect"), ht(), sf(t), cm(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (B = "useImperativeHandle"), ht(), sf(a), eS(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (B = "useInsertionEffect"), ht(), sf(t), Jg(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (B = "useLayoutEffect"), ht(), sf(t), Zg(e, t);
              },
              useMemo: function (e, t) {
                (B = "useMemo"), ht(), sf(t);
                var a = ce.current;
                ce.current = al;
                try {
                  return nS(e, t);
                } finally {
                  ce.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (B = "useReducer"), ht();
                var i = ce.current;
                ce.current = al;
                try {
                  return Wg(e, t, a);
                } finally {
                  ce.current = i;
                }
              },
              useRef: function (e) {
                return (B = "useRef"), ht(), qg(e);
              },
              useState: function (e) {
                (B = "useState"), ht();
                var t = ce.current;
                ce.current = al;
                try {
                  return um(e);
                } finally {
                  ce.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (B = "useDebugValue"), ht(), void 0;
              },
              useDeferredValue: function (e) {
                return (B = "useDeferredValue"), ht(), rS(e);
              },
              useTransition: function () {
                return (B = "useTransition"), ht(), aS();
              },
              useMutableSource: function (e, t, a) {
                return (B = "useMutableSource"), ht(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (B = "useSyncExternalStore"), ht(), Gg(e, t, a);
              },
              useId: function () {
                return (B = "useId"), ht(), iS();
              },
              unstable_isNewReconciler: ee,
            }),
              (RC = {
                readContext: function (e) {
                  return _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), ae(), tS(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), ae(), cm(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), ae(), eS(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), ae(), Jg(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), ae(), Zg(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), ae();
                  var a = ce.current;
                  ce.current = al;
                  try {
                    return nS(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), ae();
                  var i = ce.current;
                  ce.current = al;
                  try {
                    return Wg(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), ae(), qg(e);
                },
                useState: function (e) {
                  (B = "useState"), ae();
                  var t = ce.current;
                  ce.current = al;
                  try {
                    return um(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), ae(), void 0;
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), ae(), rS(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), ae(), aS();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), ae(), Gg(e, t, a);
                },
                useId: function () {
                  return (B = "useId"), ae(), iS();
                },
                unstable_isNewReconciler: ee,
              }),
              (xC = {
                readContext: function (e) {
                  return _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), ae(), hm(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), ae(), dp(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), ae(), pm(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), ae(), fm(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), ae(), dm(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), ae();
                  var a = ce.current;
                  ce.current = bi;
                  try {
                    return mm(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), ae();
                  var i = ce.current;
                  ce.current = bi;
                  try {
                    return Qg(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), ae(), om();
                },
                useState: function (e) {
                  (B = "useState"), ae();
                  var t = ce.current;
                  ce.current = bi;
                  try {
                    return Xg(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), ae(), vm();
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), ae(), dC(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), ae(), hC();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), ae(), lm(e, t);
                },
                useId: function () {
                  return (B = "useId"), ae(), ym();
                },
                unstable_isNewReconciler: ee,
              }),
              (wC = {
                readContext: function (e) {
                  return _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), ae(), hm(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), ae(), dp(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), ae(), pm(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), ae(), fm(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), ae(), dm(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), ae();
                  var a = ce.current;
                  ce.current = Sm;
                  try {
                    return mm(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), ae();
                  var i = ce.current;
                  ce.current = Sm;
                  try {
                    return Ig(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), ae(), om();
                },
                useState: function (e) {
                  (B = "useState"), ae();
                  var t = ce.current;
                  ce.current = Sm;
                  try {
                    return Kg(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), ae(), vm();
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), ae(), pC(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), ae(), mC();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), ae(), lm(e, t);
                },
                useId: function () {
                  return (B = "useId"), ae(), ym();
                },
                unstable_isNewReconciler: ee,
              }),
              (al = {
                readContext: function (e) {
                  return lS(), _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), He(), ht(), tS(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), He(), ht(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), He(), ht(), cm(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), He(), ht(), eS(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), He(), ht(), Jg(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), He(), ht(), Zg(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), He(), ht();
                  var a = ce.current;
                  ce.current = al;
                  try {
                    return nS(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), He(), ht();
                  var i = ce.current;
                  ce.current = al;
                  try {
                    return Wg(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), He(), ht(), qg(e);
                },
                useState: function (e) {
                  (B = "useState"), He(), ht();
                  var t = ce.current;
                  ce.current = al;
                  try {
                    return um(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), He(), ht(), void 0;
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), He(), ht(), rS(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), He(), ht(), aS();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), He(), ht(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), He(), ht(), Gg(e, t, a);
                },
                useId: function () {
                  return (B = "useId"), He(), ht(), iS();
                },
                unstable_isNewReconciler: ee,
              }),
              (bi = {
                readContext: function (e) {
                  return lS(), _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), He(), ae(), hm(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), He(), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), He(), ae(), dp(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), He(), ae(), pm(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), He(), ae(), fm(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), He(), ae(), dm(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), He(), ae();
                  var a = ce.current;
                  ce.current = bi;
                  try {
                    return mm(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), He(), ae();
                  var i = ce.current;
                  ce.current = bi;
                  try {
                    return Qg(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), He(), ae(), om();
                },
                useState: function (e) {
                  (B = "useState"), He(), ae();
                  var t = ce.current;
                  ce.current = bi;
                  try {
                    return Xg(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), He(), ae(), vm();
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), He(), ae(), dC(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), He(), ae(), hC();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), He(), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), He(), ae(), lm(e, t);
                },
                useId: function () {
                  return (B = "useId"), He(), ae(), ym();
                },
                unstable_isNewReconciler: ee,
              }),
              (Sm = {
                readContext: function (e) {
                  return lS(), _n(e);
                },
                useCallback: function (e, t) {
                  return (B = "useCallback"), He(), ae(), hm(e, t);
                },
                useContext: function (e) {
                  return (B = "useContext"), He(), ae(), _n(e);
                },
                useEffect: function (e, t) {
                  return (B = "useEffect"), He(), ae(), dp(e, t);
                },
                useImperativeHandle: function (e, t, a) {
                  return (B = "useImperativeHandle"), He(), ae(), pm(e, t, a);
                },
                useInsertionEffect: function (e, t) {
                  return (B = "useInsertionEffect"), He(), ae(), fm(e, t);
                },
                useLayoutEffect: function (e, t) {
                  return (B = "useLayoutEffect"), He(), ae(), dm(e, t);
                },
                useMemo: function (e, t) {
                  (B = "useMemo"), He(), ae();
                  var a = ce.current;
                  ce.current = bi;
                  try {
                    return mm(e, t);
                  } finally {
                    ce.current = a;
                  }
                },
                useReducer: function (e, t, a) {
                  (B = "useReducer"), He(), ae();
                  var i = ce.current;
                  ce.current = bi;
                  try {
                    return Ig(e, t, a);
                  } finally {
                    ce.current = i;
                  }
                },
                useRef: function (e) {
                  return (B = "useRef"), He(), ae(), om();
                },
                useState: function (e) {
                  (B = "useState"), He(), ae();
                  var t = ce.current;
                  ce.current = bi;
                  try {
                    return Kg(e);
                  } finally {
                    ce.current = t;
                  }
                },
                useDebugValue: function (e, t) {
                  return (B = "useDebugValue"), He(), ae(), vm();
                },
                useDeferredValue: function (e) {
                  return (B = "useDeferredValue"), He(), ae(), pC(e);
                },
                useTransition: function () {
                  return (B = "useTransition"), He(), ae(), mC();
                },
                useMutableSource: function (e, t, a) {
                  return (B = "useMutableSource"), He(), ae(), void 0;
                },
                useSyncExternalStore: function (e, t, a) {
                  return (B = "useSyncExternalStore"), He(), ae(), lm(e, t);
                },
                useId: function () {
                  return (B = "useId"), He(), ae(), ym();
                },
                unstable_isNewReconciler: ee,
              });
          }
          var no = T.unstable_now,
            bC = 0,
            Em = -1,
            pp = -1,
            Cm = -1,
            uS = !1,
            Tm = !1;
          function _C() {
            return uS;
          }
          function nb() {
            Tm = !0;
          }
          function rb() {
            (uS = !1), (Tm = !1);
          }
          function ab() {
            (uS = Tm), (Tm = !1);
          }
          function DC() {
            return bC;
          }
          function kC() {
            bC = no();
          }
          function oS(e) {
            (pp = no()), e.actualStartTime < 0 && (e.actualStartTime = no());
          }
          function NC(e) {
            pp = -1;
          }
          function Rm(e, t) {
            if (pp >= 0) {
              var a = no() - pp;
              (e.actualDuration += a), t && (e.selfBaseDuration = a), (pp = -1);
            }
          }
          function il(e) {
            if (Em >= 0) {
              var t = no() - Em;
              Em = -1;
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
          function sS(e) {
            if (Cm >= 0) {
              var t = no() - Cm;
              Cm = -1;
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
          function ll() {
            Em = no();
          }
          function cS() {
            Cm = no();
          }
          function fS(e) {
            for (var t = e.child; t; )
              (e.actualDuration += t.actualDuration), (t = t.sibling);
          }
          function _i(e, t) {
            if (e && e.defaultProps) {
              var a = Ke({}, t),
                i = e.defaultProps;
              for (var u in i) a[u] === void 0 && (a[u] = i[u]);
              return a;
            }
            return t;
          }
          var dS = {},
            pS,
            vS,
            hS,
            mS,
            yS,
            LC,
            xm,
            gS,
            SS,
            ES,
            vp;
          {
            (pS = new Set()),
              (vS = new Set()),
              (hS = new Set()),
              (mS = new Set()),
              (gS = new Set()),
              (yS = new Set()),
              (SS = new Set()),
              (ES = new Set()),
              (vp = new Set());
            var OC = new Set();
            (xm = function (e, t) {
              if (!(e === null || typeof e == "function")) {
                var a = t + "_" + e;
                OC.has(a) ||
                  (OC.add(a),
                  y(
                    "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                    t,
                    e,
                  ));
              }
            }),
              (LC = function (e, t) {
                if (t === void 0) {
                  var a = St(e) || "Component";
                  yS.has(a) ||
                    (yS.add(a),
                    y(
                      "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                      a,
                    ));
                }
              }),
              Object.defineProperty(dS, "_processChildContext", {
                enumerable: !1,
                value: function () {
                  throw new Error(
                    "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",
                  );
                },
              }),
              Object.freeze(dS);
          }
          function CS(e, t, a, i) {
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
              LC(t, s);
            }
            var f = s == null ? u : Ke({}, u, s);
            if (((e.memoizedState = f), e.lanes === Y)) {
              var p = e.updateQueue;
              p.baseState = f;
            }
          }
          var TS = {
            isMounted: Pr,
            enqueueSetState: function (e, t, a) {
              var i = aa(e),
                u = Gr(),
                s = lo(i),
                f = Ql(u, s);
              (f.payload = t),
                a != null && (xm(a, "setState"), (f.callback = a));
              var p = Ju(i, f, s);
              p !== null && (Pn(p, i, s, u), Zh(p, i, s)), jo(i, s);
            },
            enqueueReplaceState: function (e, t, a) {
              var i = aa(e),
                u = Gr(),
                s = lo(i),
                f = Ql(u, s);
              (f.tag = XE),
                (f.payload = t),
                a != null && (xm(a, "replaceState"), (f.callback = a));
              var p = Ju(i, f, s);
              p !== null && (Pn(p, i, s, u), Zh(p, i, s)), jo(i, s);
            },
            enqueueForceUpdate: function (e, t) {
              var a = aa(e),
                i = Gr(),
                u = lo(a),
                s = Ql(i, u);
              (s.tag = Kh),
                t != null && (xm(t, "forceUpdate"), (s.callback = t));
              var f = Ju(a, s, u);
              f !== null && (Pn(f, a, u, i), Zh(f, a, u)), rc(a, u);
            },
          };
          function MC(e, t, a, i, u, s, f) {
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
          function ib(e, t, a) {
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
                  !vp.has(t) &&
                  (e.mode & qe) === ge &&
                  (vp.add(t),
                  y(
                    `%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                    u,
                  )),
                t.contextTypes &&
                  !vp.has(t) &&
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
                  !SS.has(t) &&
                  (SS.add(t),
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
                  !hS.has(t) &&
                  (hS.add(t),
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
          function UC(e, t) {
            (t.updater = TS),
              (e.stateNode = t),
              hu(t, e),
              (t._reactInternalInstance = dS);
          }
          function zC(e, t, a) {
            var i = !1,
              u = Aa,
              s = Aa,
              f = t.contextType;
            if ("contextType" in t) {
              var p =
                f === null ||
                (f !== void 0 && f.$$typeof === I && f._context === void 0);
              if (!p && !ES.has(t)) {
                ES.add(t);
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
              u = Kc(e, t, !0);
              var g = t.contextTypes;
              (i = g != null), (s = i ? qc(e, u) : Aa);
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
            UC(e, E);
            {
              if (
                typeof t.getDerivedStateFromProps == "function" &&
                _ === null
              ) {
                var w = St(t) || "Component";
                vS.has(w) ||
                  (vS.add(w),
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
                  mS.has(le) ||
                    (mS.add(le),
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
            return i && xE(e, u, s), E;
          }
          function lb(e, t) {
            var a = t.state;
            typeof t.componentWillMount == "function" && t.componentWillMount(),
              typeof t.UNSAFE_componentWillMount == "function" &&
                t.UNSAFE_componentWillMount(),
              a !== t.state &&
                (y(
                  "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                  Be(e) || "Component",
                ),
                TS.enqueueReplaceState(t, t.state, null));
          }
          function AC(e, t, a, i) {
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
                pS.has(s) ||
                  (pS.add(s),
                  y(
                    "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                    s,
                  ));
              }
              TS.enqueueReplaceState(t, t.state, null);
            }
          }
          function RS(e, t, a, i) {
            ib(e, t, a);
            var u = e.stateNode;
            (u.props = a), (u.state = e.memoizedState), (u.refs = {}), Og(e);
            var s = t.contextType;
            if (typeof s == "object" && s !== null) u.context = _n(s);
            else {
              var f = Kc(e, t, !0);
              u.context = qc(e, f);
            }
            {
              if (u.state === a) {
                var p = St(t) || "Component";
                gS.has(p) ||
                  (gS.add(p),
                  y(
                    "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                    p,
                  ));
              }
              e.mode & qe && xi.recordLegacyContextWarning(e, u),
                xi.recordUnsafeLifecycleWarnings(e, u);
            }
            u.state = e.memoizedState;
            var h = t.getDerivedStateFromProps;
            if (
              (typeof h == "function" &&
                (CS(e, t, h, a), (u.state = e.memoizedState)),
              typeof t.getDerivedStateFromProps != "function" &&
                typeof u.getSnapshotBeforeUpdate != "function" &&
                (typeof u.UNSAFE_componentWillMount == "function" ||
                  typeof u.componentWillMount == "function") &&
                (lb(e, u), em(e, a, u, i), (u.state = e.memoizedState)),
              typeof u.componentDidMount == "function")
            ) {
              var g = Ye;
              (g |= yr), (e.mode & Yr) !== ge && (g |= gr), (e.flags |= g);
            }
          }
          function ub(e, t, a, i) {
            var u = e.stateNode,
              s = e.memoizedProps;
            u.props = s;
            var f = u.context,
              p = t.contextType,
              h = Aa;
            if (typeof p == "object" && p !== null) h = _n(p);
            else {
              var g = Kc(e, t, !0);
              h = qc(e, g);
            }
            var E = t.getDerivedStateFromProps,
              _ =
                typeof E == "function" ||
                typeof u.getSnapshotBeforeUpdate == "function";
            !_ &&
              (typeof u.UNSAFE_componentWillReceiveProps == "function" ||
                typeof u.componentWillReceiveProps == "function") &&
              (s !== a || f !== h) &&
              AC(e, u, a, h),
              qE();
            var w = e.memoizedState,
              M = (u.state = w);
            if (
              (em(e, a, u, i),
              (M = e.memoizedState),
              s === a && w === M && !zh() && !tm())
            ) {
              if (typeof u.componentDidMount == "function") {
                var z = Ye;
                (z |= yr), (e.mode & Yr) !== ge && (z |= gr), (e.flags |= z);
              }
              return !1;
            }
            typeof E == "function" && (CS(e, t, E, a), (M = e.memoizedState));
            var H = tm() || MC(e, t, s, a, w, M, h);
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
                (le |= yr), (e.mode & Yr) !== ge && (le |= gr), (e.flags |= le);
              }
            } else {
              if (typeof u.componentDidMount == "function") {
                var De = Ye;
                (De |= yr), (e.mode & Yr) !== ge && (De |= gr), (e.flags |= De);
              }
              (e.memoizedProps = a), (e.memoizedState = M);
            }
            return (u.props = a), (u.state = M), (u.context = h), H;
          }
          function ob(e, t, a, i, u) {
            var s = t.stateNode;
            KE(e, t);
            var f = t.memoizedProps,
              p = t.type === t.elementType ? f : _i(t.type, f);
            s.props = p;
            var h = t.pendingProps,
              g = s.context,
              E = a.contextType,
              _ = Aa;
            if (typeof E == "object" && E !== null) _ = _n(E);
            else {
              var w = Kc(t, a, !0);
              _ = qc(t, w);
            }
            var M = a.getDerivedStateFromProps,
              z =
                typeof M == "function" ||
                typeof s.getSnapshotBeforeUpdate == "function";
            !z &&
              (typeof s.UNSAFE_componentWillReceiveProps == "function" ||
                typeof s.componentWillReceiveProps == "function") &&
              (f !== h || g !== _) &&
              AC(t, s, i, _),
              qE();
            var H = t.memoizedState,
              le = (s.state = H);
            if (
              (em(t, i, s, u),
              (le = t.memoizedState),
              f === h && H === le && !zh() && !tm() && !Ne)
            )
              return (
                typeof s.componentDidUpdate == "function" &&
                  (f !== e.memoizedProps || H !== e.memoizedState) &&
                  (t.flags |= Ye),
                typeof s.getSnapshotBeforeUpdate == "function" &&
                  (f !== e.memoizedProps || H !== e.memoizedState) &&
                  (t.flags |= ia),
                !1
              );
            typeof M == "function" && (CS(t, a, M, i), (le = t.memoizedState));
            var De = tm() || MC(t, a, p, i, H, le, _) || Ne;
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
                    (t.flags |= ia))
                : (typeof s.componentDidUpdate == "function" &&
                    (f !== e.memoizedProps || H !== e.memoizedState) &&
                    (t.flags |= Ye),
                  typeof s.getSnapshotBeforeUpdate == "function" &&
                    (f !== e.memoizedProps || H !== e.memoizedState) &&
                    (t.flags |= ia),
                  (t.memoizedProps = i),
                  (t.memoizedState = le)),
              (s.props = i),
              (s.state = le),
              (s.context = _),
              De
            );
          }
          function vs(e, t) {
            return { value: e, source: t, stack: kf(t), digest: null };
          }
          function xS(e, t, a) {
            return {
              value: e,
              source: null,
              stack: a ?? null,
              digest: t ?? null,
            };
          }
          function sb(e, t) {
            return !0;
          }
          function wS(e, t) {
            try {
              var a = sb(e, t);
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
          var cb = typeof WeakMap == "function" ? WeakMap : Map;
          function jC(e, t, a) {
            var i = Ql(Dt, a);
            (i.tag = Ng), (i.payload = { element: null });
            var u = t.value;
            return (
              (i.callback = function () {
                nD(u), wS(e, t);
              }),
              i
            );
          }
          function bS(e, t, a) {
            var i = Ql(Dt, a);
            i.tag = Ng;
            var u = e.type.getDerivedStateFromError;
            if (typeof u == "function") {
              var s = t.value;
              (i.payload = function () {
                return u(s);
              }),
                (i.callback = function () {
                  G1(e), wS(e, t);
                });
            }
            var f = e.stateNode;
            return (
              f !== null &&
                typeof f.componentDidCatch == "function" &&
                (i.callback = function () {
                  G1(e), wS(e, t), typeof u != "function" && eD(this);
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
          function FC(e, t, a) {
            var i = e.pingCache,
              u;
            if (
              (i === null
                ? ((i = e.pingCache = new cb()), (u = new Set()), i.set(t, u))
                : ((u = i.get(t)),
                  u === void 0 && ((u = new Set()), i.set(t, u))),
              !u.has(a))
            ) {
              u.add(a);
              var s = rD.bind(null, e, t, a);
              $r && Lp(e, a), t.then(s, s);
            }
          }
          function fb(e, t, a, i) {
            var u = e.updateQueue;
            if (u === null) {
              var s = new Set();
              s.add(a), (e.updateQueue = s);
            } else u.add(a);
          }
          function db(e, t) {
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
          function HC(e) {
            var t = e;
            do {
              if (t.tag === We && Qw(t)) return t;
              t = t.return;
            } while (t !== null);
            return null;
          }
          function VC(e, t, a, i, u) {
            if ((e.mode & Ee) === ge) {
              if (e === t) e.flags |= Rn;
              else {
                if (
                  ((e.flags |= ze),
                  (a.flags |= Uo),
                  (a.flags &= ~(Ws | Vr)),
                  a.tag === j)
                ) {
                  var s = a.alternate;
                  if (s === null) a.tag = mn;
                  else {
                    var f = Ql(Dt, Re);
                    (f.tag = Kh), Ju(a, f, Re);
                  }
                }
                a.lanes = Pe(a.lanes, Re);
              }
              return e;
            }
            return (e.flags |= Rn), (e.lanes = u), e;
          }
          function pb(e, t, a, i, u) {
            if (
              ((a.flags |= Vr),
              $r && Lp(e, u),
              i !== null && typeof i == "object" && typeof i.then == "function")
            ) {
              var s = i;
              db(a), rr() && a.mode & Ee && LE();
              var f = HC(t);
              if (f !== null) {
                (f.flags &= ~Yt),
                  VC(f, t, a, e, u),
                  f.mode & Ee && FC(e, s, u),
                  fb(f, e, s);
                return;
              } else {
                if (!yd(u)) {
                  FC(e, s, u), i0();
                  return;
                }
                var p = new Error(
                  "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.",
                );
                i = p;
              }
            } else if (rr() && a.mode & Ee) {
              LE();
              var h = HC(t);
              if (h !== null) {
                (h.flags & Rn) === be && (h.flags |= Yt),
                  VC(h, t, a, e, u),
                  gg(vs(i, a));
                return;
              }
            }
            (i = vs(i, a)), Q_(i);
            var g = t;
            do {
              switch (g.tag) {
                case $: {
                  var E = i;
                  g.flags |= Rn;
                  var _ = ku(u);
                  g.lanes = Pe(g.lanes, _);
                  var w = jC(g, E, _);
                  Mg(g, w);
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
                        !H1(H)))
                  ) {
                    g.flags |= Rn;
                    var le = ku(u);
                    g.lanes = Pe(g.lanes, le);
                    var De = bS(g, M, le);
                    Mg(g, De);
                    return;
                  }
                  break;
              }
              g = g.return;
            } while (g !== null);
          }
          function vb() {
            return null;
          }
          var hp = S.ReactCurrentOwner,
            Di = !1,
            _S,
            mp,
            DS,
            kS,
            NS,
            hs,
            LS,
            wm,
            yp;
          (_S = {}),
            (mp = {}),
            (DS = {}),
            (kS = {}),
            (NS = {}),
            (hs = !1),
            (LS = {}),
            (wm = {}),
            (yp = {});
          function Qr(e, t, a, i) {
            e === null
              ? (t.child = $E(t, null, a, i))
              : (t.child = tf(t, e.child, a, i));
          }
          function hb(e, t, a, i) {
            (t.child = tf(t, e.child, null, i)), (t.child = tf(t, null, a, i));
          }
          function BC(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = a.propTypes;
              s && Ti(s, i, "prop", St(a));
            }
            var f = a.render,
              p = t.ref,
              h,
              g;
            rf(t, u), Su(t);
            {
              if (
                ((hp.current = t),
                La(!0),
                (h = cf(e, t, f, i, p, u)),
                (g = ff()),
                t.mode & qe)
              ) {
                rn(!0);
                try {
                  (h = cf(e, t, f, i, p, u)), (g = ff());
                } finally {
                  rn(!1);
                }
              }
              La(!1);
            }
            return (
              Cr(),
              e !== null && !Di
                ? (rC(e, t, u), Il(e, t, u))
                : (rr() && g && dg(t), (t.flags |= Pi), Qr(e, t, h, u), t.child)
            );
          }
          function PC(e, t, a, i, u) {
            if (e === null) {
              var s = a.type;
              if (ED(s) && a.compare === null && a.defaultProps === void 0) {
                var f = s;
                return (
                  (f = Sf(s)),
                  (t.tag = $e),
                  (t.type = f),
                  US(t, s),
                  $C(e, t, f, i, u)
                );
              }
              {
                var p = s.propTypes;
                if ((p && Ti(p, i, "prop", St(s)), a.defaultProps !== void 0)) {
                  var h = St(s) || "Unknown";
                  yp[h] ||
                    (y(
                      "%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.",
                      h,
                    ),
                    (yp[h] = !0));
                }
              }
              var g = m0(a.type, null, i, t, t.mode, u);
              return (g.ref = t.ref), (g.return = t), (t.child = g), g;
            }
            {
              var E = a.type,
                _ = E.propTypes;
              _ && Ti(_, i, "prop", St(E));
            }
            var w = e.child,
              M = VS(e, u);
            if (!M) {
              var z = w.memoizedProps,
                H = a.compare;
              if (((H = H !== null ? H : Oe), H(z, i) && e.ref === t.ref))
                return Il(e, t, u);
            }
            t.flags |= Pi;
            var le = Es(w, i);
            return (le.ref = t.ref), (le.return = t), (t.child = le), le;
          }
          function $C(e, t, a, i, u) {
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
                g && Ti(g, i, "prop", St(s));
              }
            }
            if (e !== null) {
              var E = e.memoizedProps;
              if (Oe(E, i) && e.ref === t.ref && t.type === e.type)
                if (((Di = !1), (t.pendingProps = i = E), VS(e, u)))
                  (e.flags & Uo) !== be && (Di = !0);
                else return (t.lanes = e.lanes), Il(e, t, u);
            }
            return OS(e, t, a, i, u);
          }
          function YC(e, t, a) {
            var i = t.pendingProps,
              u = i.children,
              s = e !== null ? e.memoizedState : null;
            if (i.mode === "hidden" || fe)
              if ((t.mode & Ee) === ge) {
                var f = { baseLanes: Y, cachePool: null, transitions: null };
                (t.memoizedState = f), Fm(t, a);
              } else if (xr(a, Kn)) {
                var _ = { baseLanes: Y, cachePool: null, transitions: null };
                t.memoizedState = _;
                var w = s !== null ? s.baseLanes : a;
                Fm(t, w);
              } else {
                var p = null,
                  h;
                if (s !== null) {
                  var g = s.baseLanes;
                  h = Pe(g, a);
                } else h = a;
                t.lanes = t.childLanes = Kn;
                var E = { baseLanes: h, cachePool: p, transitions: null };
                return (
                  (t.memoizedState = E), (t.updateQueue = null), Fm(t, h), null
                );
              }
            else {
              var M;
              s !== null
                ? ((M = Pe(s.baseLanes, a)), (t.memoizedState = null))
                : (M = a),
                Fm(t, M);
            }
            return Qr(e, t, u, a), t.child;
          }
          function mb(e, t, a) {
            var i = t.pendingProps;
            return Qr(e, t, i, a), t.child;
          }
          function yb(e, t, a) {
            var i = t.pendingProps.children;
            return Qr(e, t, i, a), t.child;
          }
          function gb(e, t, a) {
            {
              t.flags |= Ye;
              {
                var i = t.stateNode;
                (i.effectDuration = 0), (i.passiveEffectDuration = 0);
              }
            }
            var u = t.pendingProps,
              s = u.children;
            return Qr(e, t, s, a), t.child;
          }
          function WC(e, t) {
            var a = t.ref;
            ((e === null && a !== null) || (e !== null && e.ref !== a)) &&
              ((t.flags |= mr), (t.flags |= ad));
          }
          function OS(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = a.propTypes;
              s && Ti(s, i, "prop", St(a));
            }
            var f;
            {
              var p = Kc(t, a, !0);
              f = qc(t, p);
            }
            var h, g;
            rf(t, u), Su(t);
            {
              if (
                ((hp.current = t),
                La(!0),
                (h = cf(e, t, a, i, f, u)),
                (g = ff()),
                t.mode & qe)
              ) {
                rn(!0);
                try {
                  (h = cf(e, t, a, i, f, u)), (g = ff());
                } finally {
                  rn(!1);
                }
              }
              La(!1);
            }
            return (
              Cr(),
              e !== null && !Di
                ? (rC(e, t, u), Il(e, t, u))
                : (rr() && g && dg(t), (t.flags |= Pi), Qr(e, t, h, u), t.child)
            );
          }
          function QC(e, t, a, i, u) {
            {
              switch (zD(t)) {
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
                    E = ku(u);
                  t.lanes = Pe(t.lanes, E);
                  var _ = bS(t, vs(g, t), E);
                  Mg(t, _);
                  break;
                }
              }
              if (t.type !== t.elementType) {
                var w = a.propTypes;
                w && Ti(w, i, "prop", St(a));
              }
            }
            var M;
            tl(a) ? ((M = !0), jh(t)) : (M = !1), rf(t, u);
            var z = t.stateNode,
              H;
            z === null
              ? (_m(e, t), zC(t, a, i), RS(t, a, i, u), (H = !0))
              : e === null
                ? (H = ub(t, a, i, u))
                : (H = ob(e, t, a, i, u));
            var le = MS(e, t, a, H, M, u);
            {
              var De = t.stateNode;
              H &&
                De.props !== i &&
                (hs ||
                  y(
                    "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
                    Be(t) || "a component",
                  ),
                (hs = !0));
            }
            return le;
          }
          function MS(e, t, a, i, u, s) {
            WC(e, t);
            var f = (t.flags & ze) !== be;
            if (!i && !f) return u && _E(t, a, !1), Il(e, t, s);
            var p = t.stateNode;
            hp.current = t;
            var h;
            if (f && typeof a.getDerivedStateFromError != "function")
              (h = null), NC();
            else {
              Su(t);
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
              (t.flags |= Pi),
              e !== null && f ? hb(e, t, h, s) : Qr(e, t, h, s),
              (t.memoizedState = p.state),
              u && _E(t, a, !0),
              t.child
            );
          }
          function IC(e) {
            var t = e.stateNode;
            t.pendingContext
              ? wE(e, t.pendingContext, t.pendingContext !== t.context)
              : t.context && wE(e, t.context, !1),
              Ug(e, t.containerInfo);
          }
          function Sb(e, t, a) {
            if ((IC(t), e === null))
              throw new Error(
                "Should have a current fiber. This is a bug in React.",
              );
            var i = t.pendingProps,
              u = t.memoizedState,
              s = u.element;
            KE(e, t), em(t, i, null, a);
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
                var E = vs(
                  new Error(
                    "There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.",
                  ),
                  t,
                );
                return GC(e, t, p, a, E);
              } else if (p !== s) {
                var _ = vs(
                  new Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.",
                  ),
                  t,
                );
                return GC(e, t, p, a, _);
              } else {
                Tw(t);
                var w = $E(t, null, p, a);
                t.child = w;
                for (var M = w; M; )
                  (M.flags = (M.flags & ~Ot) | la), (M = M.sibling);
              }
            } else {
              if ((ef(), p === s)) return Il(e, t, a);
              Qr(e, t, p, a);
            }
            return t.child;
          }
          function GC(e, t, a, i, u) {
            return ef(), gg(u), (t.flags |= Yt), Qr(e, t, a, i), t.child;
          }
          function Eb(e, t, a) {
            eC(t), e === null && yg(t);
            var i = t.type,
              u = t.pendingProps,
              s = e !== null ? e.memoizedProps : null,
              f = u.children,
              p = Jy(i, u);
            return (
              p ? (f = null) : s !== null && Jy(i, s) && (t.flags |= vt),
              WC(e, t),
              Qr(e, t, f, a),
              t.child
            );
          }
          function Cb(e, t) {
            return e === null && yg(t), null;
          }
          function Tb(e, t, a, i) {
            _m(e, t);
            var u = t.pendingProps,
              s = a,
              f = s._payload,
              p = s._init,
              h = p(f);
            t.type = h;
            var g = (t.tag = CD(h)),
              E = _i(h, u),
              _;
            switch (g) {
              case P:
                return (
                  US(t, h), (t.type = h = Sf(h)), (_ = OS(null, t, h, E, i)), _
                );
              case j:
                return (t.type = h = c0(h)), (_ = QC(null, t, h, E, i)), _;
              case xe:
                return (t.type = h = f0(h)), (_ = BC(null, t, h, E, i)), _;
              case mt: {
                if (t.type !== t.elementType) {
                  var w = h.propTypes;
                  w && Ti(w, E, "prop", St(h));
                }
                return (_ = PC(null, t, h, _i(h.type, E), i)), _;
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
          function Rb(e, t, a, i, u) {
            _m(e, t), (t.tag = j);
            var s;
            return (
              tl(a) ? ((s = !0), jh(t)) : (s = !1),
              rf(t, u),
              zC(t, a, i),
              RS(t, a, i, u),
              MS(null, t, a, !0, s, u)
            );
          }
          function xb(e, t, a, i) {
            _m(e, t);
            var u = t.pendingProps,
              s;
            {
              var f = Kc(t, a, !1);
              s = qc(t, f);
            }
            rf(t, i);
            var p, h;
            Su(t);
            {
              if (a.prototype && typeof a.prototype.render == "function") {
                var g = St(a) || "Unknown";
                _S[g] ||
                  (y(
                    "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
                    g,
                    g,
                  ),
                  (_S[g] = !0));
              }
              t.mode & qe && xi.recordLegacyContextWarning(t, null),
                La(!0),
                (hp.current = t),
                (p = cf(null, t, a, u, s, i)),
                (h = ff()),
                La(!1);
            }
            if (
              (Cr(),
              (t.flags |= Pi),
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
                tl(a) ? ((w = !0), jh(t)) : (w = !1),
                (t.memoizedState =
                  p.state !== null && p.state !== void 0 ? p.state : null),
                Og(t),
                UC(t, p),
                RS(t, a, u, i),
                MS(null, t, a, !0, w, i)
              );
            } else {
              if (((t.tag = P), t.mode & qe)) {
                rn(!0);
                try {
                  (p = cf(null, t, a, u, s, i)), (h = ff());
                } finally {
                  rn(!1);
                }
              }
              return rr() && h && dg(t), Qr(null, t, p, i), US(t, a), t.child;
            }
          }
          function US(e, t) {
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
                  i = na();
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
                kS[p] ||
                  (y(
                    "%s: Function components do not support getDerivedStateFromProps.",
                    p,
                  ),
                  (kS[p] = !0));
              }
              if (typeof t.contextType == "object" && t.contextType !== null) {
                var h = St(t) || "Unknown";
                DS[h] ||
                  (y("%s: Function components do not support contextType.", h),
                  (DS[h] = !0));
              }
            }
          }
          var zS = { dehydrated: null, treeContext: null, retryLane: an };
          function AS(e) {
            return { baseLanes: e, cachePool: vb(), transitions: null };
          }
          function wb(e, t) {
            var a = null;
            return {
              baseLanes: Pe(e.baseLanes, t),
              cachePool: a,
              transitions: e.transitions,
            };
          }
          function bb(e, t, a, i) {
            if (t !== null) {
              var u = t.memoizedState;
              if (u === null) return !1;
            }
            return jg(e, lp);
          }
          function _b(e, t) {
            return Yo(e.childLanes, t);
          }
          function XC(e, t, a) {
            var i = t.pendingProps;
            AD(t) && (t.flags |= ze);
            var u = wi.current,
              s = !1,
              f = (t.flags & ze) !== be;
            if (
              (f || bb(u, e)
                ? ((s = !0), (t.flags &= ~ze))
                : (e === null || e.memoizedState !== null) && (u = Ww(u, nC)),
              (u = lf(u)),
              eo(t, u),
              e === null)
            ) {
              yg(t);
              var p = t.memoizedState;
              if (p !== null) {
                var h = p.dehydrated;
                if (h !== null) return Ob(t, h);
              }
              var g = i.children,
                E = i.fallback;
              if (s) {
                var _ = Db(t, g, E, a),
                  w = t.child;
                return (w.memoizedState = AS(a)), (t.memoizedState = zS), _;
              } else return jS(t, g);
            } else {
              var M = e.memoizedState;
              if (M !== null) {
                var z = M.dehydrated;
                if (z !== null) return Mb(e, t, f, i, z, M, a);
              }
              if (s) {
                var H = i.fallback,
                  le = i.children,
                  De = Nb(e, t, le, H, a),
                  Ce = t.child,
                  rt = e.child.memoizedState;
                return (
                  (Ce.memoizedState = rt === null ? AS(a) : wb(rt, a)),
                  (Ce.childLanes = _b(e, a)),
                  (t.memoizedState = zS),
                  De
                );
              } else {
                var Ze = i.children,
                  N = kb(e, t, Ze, a);
                return (t.memoizedState = null), N;
              }
            }
          }
          function jS(e, t, a) {
            var i = e.mode,
              u = { mode: "visible", children: t },
              s = FS(u, i);
            return (s.return = e), (e.child = s), s;
          }
          function Db(e, t, a, i) {
            var u = e.mode,
              s = e.child,
              f = { mode: "hidden", children: t },
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
                  (h = oo(a, u, i, null)))
                : ((p = FS(f, u)), (h = oo(a, u, i, null))),
              (p.return = e),
              (h.return = e),
              (p.sibling = h),
              (e.child = p),
              h
            );
          }
          function FS(e, t, a) {
            return K1(e, t, Y, null);
          }
          function KC(e, t) {
            return Es(e, t);
          }
          function kb(e, t, a, i) {
            var u = e.child,
              s = u.sibling,
              f = KC(u, { mode: "visible", children: a });
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
          function Nb(e, t, a, i, u) {
            var s = t.mode,
              f = e.child,
              p = f.sibling,
              h = { mode: "hidden", children: a },
              g;
            if ((s & Ee) === ge && t.child !== f) {
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
            } else (g = KC(f, h)), (g.subtreeFlags = f.subtreeFlags & On);
            var _;
            return (
              p !== null
                ? (_ = Es(p, i))
                : ((_ = oo(i, s, u, null)), (_.flags |= Ot)),
              (_.return = t),
              (g.return = t),
              (g.sibling = _),
              (t.child = g),
              _
            );
          }
          function bm(e, t, a, i) {
            i !== null && gg(i), tf(t, e.child, null, a);
            var u = t.pendingProps,
              s = u.children,
              f = jS(t, s);
            return (f.flags |= Ot), (t.memoizedState = null), f;
          }
          function Lb(e, t, a, i, u) {
            var s = t.mode,
              f = { mode: "visible", children: a },
              p = FS(f, s),
              h = oo(i, s, u, null);
            return (
              (h.flags |= Ot),
              (p.return = t),
              (h.return = t),
              (p.sibling = h),
              (t.child = p),
              (t.mode & Ee) !== ge && tf(t, e.child, null, u),
              h
            );
          }
          function Ob(e, t, a) {
            return (
              (e.mode & Ee) === ge
                ? (y(
                    "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.",
                  ),
                  (e.lanes = Re))
                : ng(t)
                  ? (e.lanes = yi)
                  : (e.lanes = Kn),
              null
            );
          }
          function Mb(e, t, a, i, u, s, f) {
            if (a)
              if (t.flags & Yt) {
                t.flags &= ~Yt;
                var N = xS(
                  new Error(
                    "There was an error while hydrating this Suspense boundary. Switched to client rendering.",
                  ),
                );
                return bm(e, t, f, N);
              } else {
                if (t.memoizedState !== null)
                  return (t.child = e.child), (t.flags |= ze), null;
                var V = i.children,
                  L = i.fallback,
                  X = Lb(e, t, V, L, f),
                  de = t.child;
                return (de.memoizedState = AS(f)), (t.memoizedState = zS), X;
              }
            else {
              if ((Ew(), (t.mode & Ee) === ge)) return bm(e, t, f, null);
              if (ng(u)) {
                var p, h, g;
                {
                  var E = jx(u);
                  (p = E.digest), (h = E.message), (g = E.stack);
                }
                var _;
                h
                  ? (_ = new Error(h))
                  : (_ = new Error(
                      "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.",
                    ));
                var w = xS(_, p, g);
                return bm(e, t, f, w);
              }
              var M = xr(f, e.childLanes);
              if (Di || M) {
                var z = jm();
                if (z !== null) {
                  var H = Jv(z, f);
                  if (H !== an && H !== s.retryLane) {
                    s.retryLane = H;
                    var le = Dt;
                    ga(e, H), Pn(z, e, H, le);
                  }
                }
                i0();
                var De = xS(
                  new Error(
                    "This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.",
                  ),
                );
                return bm(e, t, f, De);
              } else if (SE(u)) {
                (t.flags |= ze), (t.child = e.child);
                var Ce = aD.bind(null, e);
                return Fx(u, Ce), null;
              } else {
                Rw(t, u, s.treeContext);
                var rt = i.children,
                  Ze = jS(t, rt);
                return (Ze.flags |= la), Ze;
              }
            }
          }
          function qC(e, t, a) {
            e.lanes = Pe(e.lanes, t);
            var i = e.alternate;
            i !== null && (i.lanes = Pe(i.lanes, t)), Dg(e.return, t, a);
          }
          function Ub(e, t, a) {
            for (var i = t; i !== null; ) {
              if (i.tag === We) {
                var u = i.memoizedState;
                u !== null && qC(i, a, e);
              } else if (i.tag === dt) qC(i, a, e);
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
          function zb(e) {
            for (var t = e, a = null; t !== null; ) {
              var i = t.alternate;
              i !== null && am(i) === null && (a = t), (t = t.sibling);
            }
            return a;
          }
          function Ab(e) {
            if (
              e !== void 0 &&
              e !== "forwards" &&
              e !== "backwards" &&
              e !== "together" &&
              !LS[e]
            )
              if (((LS[e] = !0), typeof e == "string"))
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
          function jb(e, t) {
            e !== void 0 &&
              !wm[e] &&
              (e !== "collapsed" && e !== "hidden"
                ? ((wm[e] = !0),
                  y(
                    '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                    e,
                  ))
                : t !== "forwards" &&
                  t !== "backwards" &&
                  ((wm[e] = !0),
                  y(
                    '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                    e,
                  )));
          }
          function JC(e, t) {
            {
              var a = Cn(e),
                i = !a && typeof Fr(e) == "function";
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
          function Fb(e, t) {
            if (
              (t === "forwards" || t === "backwards") &&
              e !== void 0 &&
              e !== null &&
              e !== !1
            )
              if (Cn(e)) {
                for (var a = 0; a < e.length; a++) if (!JC(e[a], a)) return;
              } else {
                var i = Fr(e);
                if (typeof i == "function") {
                  var u = i.call(e);
                  if (u)
                    for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                      if (!JC(s.value, f)) return;
                      f++;
                    }
                } else
                  y(
                    'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
                    t,
                  );
              }
          }
          function HS(e, t, a, i, u) {
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
          function ZC(e, t, a) {
            var i = t.pendingProps,
              u = i.revealOrder,
              s = i.tail,
              f = i.children;
            Ab(u), jb(s, u), Fb(f, u), Qr(e, t, f, a);
            var p = wi.current,
              h = jg(p, lp);
            if (h) (p = Fg(p, lp)), (t.flags |= ze);
            else {
              var g = e !== null && (e.flags & ze) !== be;
              g && Ub(t, t.child, a), (p = lf(p));
            }
            if ((eo(t, p), (t.mode & Ee) === ge)) t.memoizedState = null;
            else
              switch (u) {
                case "forwards": {
                  var E = zb(t.child),
                    _;
                  E === null
                    ? ((_ = t.child), (t.child = null))
                    : ((_ = E.sibling), (E.sibling = null)),
                    HS(t, !1, _, E, s);
                  break;
                }
                case "backwards": {
                  var w = null,
                    M = t.child;
                  for (t.child = null; M !== null; ) {
                    var z = M.alternate;
                    if (z !== null && am(z) === null) {
                      t.child = M;
                      break;
                    }
                    var H = M.sibling;
                    (M.sibling = w), (w = M), (M = H);
                  }
                  HS(t, !0, w, null, s);
                  break;
                }
                case "together": {
                  HS(t, !1, null, null, void 0);
                  break;
                }
                default:
                  t.memoizedState = null;
              }
            return t.child;
          }
          function Hb(e, t, a) {
            Ug(t, t.stateNode.containerInfo);
            var i = t.pendingProps;
            return (
              e === null ? (t.child = tf(t, null, i, a)) : Qr(e, t, i, a),
              t.child
            );
          }
          var e1 = !1;
          function Vb(e, t, a) {
            var i = t.type,
              u = i._context,
              s = t.pendingProps,
              f = t.memoizedProps,
              p = s.value;
            {
              "value" in s ||
                e1 ||
                ((e1 = !0),
                y(
                  "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?",
                ));
              var h = t.type.propTypes;
              h && Ti(h, s, "prop", "Context.Provider");
            }
            if ((QE(t, u, p), f !== null)) {
              var g = f.value;
              if (he(g, p)) {
                if (f.children === s.children && !zh()) return Il(e, t, a);
              } else Aw(t, u, a);
            }
            var E = s.children;
            return Qr(e, t, E, a), t.child;
          }
          var t1 = !1;
          function Bb(e, t, a) {
            var i = t.type;
            i._context === void 0
              ? i !== i.Consumer &&
                (t1 ||
                  ((t1 = !0),
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
              rf(t, a);
            var f = _n(i);
            Su(t);
            var p;
            return (
              (hp.current = t),
              La(!0),
              (p = s(f)),
              La(!1),
              Cr(),
              (t.flags |= Pi),
              Qr(e, t, p, a),
              t.child
            );
          }
          function gp() {
            Di = !0;
          }
          function _m(e, t) {
            (t.mode & Ee) === ge &&
              e !== null &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= Ot));
          }
          function Il(e, t, a) {
            return (
              e !== null && (t.dependencies = e.dependencies),
              NC(),
              Np(t.lanes),
              xr(a, t.childLanes) ? (Uw(e, t), t.child) : null
            );
          }
          function Pb(e, t, a) {
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
          function VS(e, t) {
            var a = e.lanes;
            return !!xr(a, t);
          }
          function $b(e, t, a) {
            switch (t.tag) {
              case $:
                IC(t), t.stateNode, ef();
                break;
              case oe:
                eC(t);
                break;
              case j: {
                var i = t.type;
                tl(i) && jh(t);
                break;
              }
              case J:
                Ug(t, t.stateNode.containerInfo);
                break;
              case ke: {
                var u = t.memoizedProps.value,
                  s = t.type._context;
                QE(t, s, u);
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
                    return eo(t, lf(wi.current)), (t.flags |= ze), null;
                  var g = t.child,
                    E = g.childLanes;
                  if (xr(a, E)) return XC(e, t, a);
                  eo(t, lf(wi.current));
                  var _ = Il(e, t, a);
                  return _ !== null ? _.sibling : null;
                } else eo(t, lf(wi.current));
                break;
              }
              case dt: {
                var w = (e.flags & ze) !== be,
                  M = xr(a, t.childLanes);
                if (w) {
                  if (M) return ZC(e, t, a);
                  t.flags |= ze;
                }
                var z = t.memoizedState;
                if (
                  (z !== null &&
                    ((z.rendering = null),
                    (z.tail = null),
                    (z.lastEffect = null)),
                  eo(t, wi.current),
                  M)
                )
                  break;
                return null;
              }
              case Fe:
              case et:
                return (t.lanes = Y), YC(e, t, a);
            }
            return Il(e, t, a);
          }
          function n1(e, t, a) {
            if (t._debugNeedsRemount && e !== null)
              return Pb(
                e,
                t,
                m0(
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
              if (i !== u || zh() || t.type !== e.type) Di = !0;
              else {
                var s = VS(e, a);
                if (!s && (t.flags & ze) === be) return (Di = !1), $b(e, t, a);
                (e.flags & Uo) !== be ? (Di = !0) : (Di = !1);
              }
            } else if (((Di = !1), rr() && vw(t))) {
              var f = t.index,
                p = hw();
              NE(t, p, f);
            }
            switch (((t.lanes = Y), t.tag)) {
              case Z:
                return xb(e, t, t.type, a);
              case Gt: {
                var h = t.elementType;
                return Tb(e, t, h, a);
              }
              case P: {
                var g = t.type,
                  E = t.pendingProps,
                  _ = t.elementType === g ? E : _i(g, E);
                return OS(e, t, g, _, a);
              }
              case j: {
                var w = t.type,
                  M = t.pendingProps,
                  z = t.elementType === w ? M : _i(w, M);
                return QC(e, t, w, z, a);
              }
              case $:
                return Sb(e, t, a);
              case oe:
                return Eb(e, t, a);
              case _e:
                return Cb(e, t);
              case We:
                return XC(e, t, a);
              case J:
                return Hb(e, t, a);
              case xe: {
                var H = t.type,
                  le = t.pendingProps,
                  De = t.elementType === H ? le : _i(H, le);
                return BC(e, t, H, De, a);
              }
              case Ie:
                return mb(e, t, a);
              case at:
                return yb(e, t, a);
              case je:
                return gb(e, t, a);
              case ke:
                return Vb(e, t, a);
              case kt:
                return Bb(e, t, a);
              case mt: {
                var Ce = t.type,
                  rt = t.pendingProps,
                  Ze = _i(Ce, rt);
                if (t.type !== t.elementType) {
                  var N = Ce.propTypes;
                  N && Ti(N, Ze, "prop", St(Ce));
                }
                return (Ze = _i(Ce.type, Ze)), PC(e, t, Ce, Ze, a);
              }
              case $e:
                return $C(e, t, t.type, t.pendingProps, a);
              case mn: {
                var V = t.type,
                  L = t.pendingProps,
                  X = t.elementType === V ? L : _i(V, L);
                return Rb(e, t, V, X, a);
              }
              case dt:
                return ZC(e, t, a);
              case Dn:
                break;
              case Fe:
                return YC(e, t, a);
            }
            throw new Error(
              "Unknown unit of work tag (" +
                t.tag +
                "). This error is likely caused by a bug in React. Please file an issue.",
            );
          }
          function df(e) {
            e.flags |= Ye;
          }
          function r1(e) {
            (e.flags |= mr), (e.flags |= ad);
          }
          var a1, BS, i1, l1;
          (a1 = function (e, t, a, i) {
            for (var u = t.child; u !== null; ) {
              if (u.tag === oe || u.tag === _e) fx(e, u.stateNode);
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
            (BS = function (e, t) {}),
            (i1 = function (e, t, a, i, u) {
              var s = e.memoizedProps;
              if (s !== i) {
                var f = t.stateNode,
                  p = zg(),
                  h = px(f, a, s, i, u, p);
                (t.updateQueue = h), h && df(t);
              }
            }),
            (l1 = function (e, t, a, i) {
              a !== i && df(t);
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
          function Yb(e, t, a) {
            if (Dw() && (t.mode & Ee) !== ge && (t.flags & ze) === be)
              return jE(t), ef(), (t.flags |= Yt | Vr | Rn), !1;
            var i = Ph(t);
            if (a !== null && a.dehydrated !== null)
              if (e === null) {
                if (!i)
                  throw new Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.",
                  );
                if ((bw(t), ir(t), (t.mode & Ae) !== ge)) {
                  var u = a !== null;
                  if (u) {
                    var s = t.child;
                    s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
                  }
                }
                return !1;
              } else {
                if (
                  (ef(),
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
            else return FE(), !0;
          }
          function u1(e, t, a) {
            var i = t.pendingProps;
            switch ((pg(t), t.tag)) {
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
                return tl(u) && Ah(t), ir(t), null;
              }
              case $: {
                var s = t.stateNode;
                if (
                  (af(t),
                  sg(t),
                  Vg(),
                  s.pendingContext &&
                    ((s.context = s.pendingContext), (s.pendingContext = null)),
                  e === null || e.child === null)
                ) {
                  var f = Ph(t);
                  if (f) df(t);
                  else if (e !== null) {
                    var p = e.memoizedState;
                    (!p.isDehydrated || (t.flags & Yt) !== be) &&
                      ((t.flags |= ia), FE());
                  }
                }
                return BS(e, t), ir(t), null;
              }
              case oe: {
                Ag(t);
                var h = ZE(),
                  g = t.type;
                if (e !== null && t.stateNode != null)
                  i1(e, t, g, i, h), e.ref !== t.ref && r1(t);
                else {
                  if (!i) {
                    if (t.stateNode === null)
                      throw new Error(
                        "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
                      );
                    return ir(t), null;
                  }
                  var E = zg(),
                    _ = Ph(t);
                  if (_) xw(t, h, E) && df(t);
                  else {
                    var w = cx(g, i, h, E, t);
                    a1(w, t, !1, !1),
                      (t.stateNode = w),
                      dx(w, g, i, h) && df(t);
                  }
                  t.ref !== null && r1(t);
                }
                return ir(t), null;
              }
              case _e: {
                var M = i;
                if (e && t.stateNode != null) {
                  var z = e.memoizedProps;
                  l1(e, t, z, M);
                } else {
                  if (typeof M != "string" && t.stateNode === null)
                    throw new Error(
                      "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
                    );
                  var H = ZE(),
                    le = zg(),
                    De = Ph(t);
                  De ? ww(t) && df(t) : (t.stateNode = vx(M, H, le, t));
                }
                return ir(t), null;
              }
              case We: {
                uf(t);
                var Ce = t.memoizedState;
                if (
                  e === null ||
                  (e.memoizedState !== null &&
                    e.memoizedState.dehydrated !== null)
                ) {
                  var rt = Yb(e, t, Ce);
                  if (!rt) return t.flags & Rn ? t : null;
                }
                if ((t.flags & ze) !== be)
                  return (t.lanes = a), (t.mode & Ae) !== ge && fS(t), t;
                var Ze = Ce !== null,
                  N = e !== null && e.memoizedState !== null;
                if (Ze !== N && Ze) {
                  var V = t.child;
                  if (((V.flags |= $i), (t.mode & Ee) !== ge)) {
                    var L =
                      e === null &&
                      (t.memoizedProps.unstable_avoidThisFallback !== !0 ||
                        !lt);
                    L || jg(wi.current, nC) ? W_() : i0();
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
                  af(t),
                  BS(e, t),
                  e === null && uw(t.stateNode.containerInfo),
                  ir(t),
                  null
                );
              case ke:
                var ue = t.type._context;
                return _g(ue, t), ir(t), null;
              case mn: {
                var Ue = t.type;
                return tl(Ue) && Ah(t), ir(t), null;
              }
              case dt: {
                uf(t);
                var Ve = t.memoizedState;
                if (Ve === null) return ir(t), null;
                var Tt = (t.flags & ze) !== be,
                  ot = Ve.rendering;
                if (ot === null)
                  if (Tt) Sp(Ve, !1);
                  else {
                    var vn = I_() && (e === null || (e.flags & ze) === be);
                    if (!vn)
                      for (var st = t.child; st !== null; ) {
                        var ln = am(st);
                        if (ln !== null) {
                          (Tt = !0), (t.flags |= ze), Sp(Ve, !1);
                          var kr = ln.updateQueue;
                          return (
                            kr !== null &&
                              ((t.updateQueue = kr), (t.flags |= Ye)),
                            (t.subtreeFlags = be),
                            zw(t, a),
                            eo(t, Fg(wi.current, lp)),
                            t.child
                          );
                        }
                        st = st.sibling;
                      }
                    Ve.tail !== null &&
                      Bt() > D1() &&
                      ((t.flags |= ze), (Tt = !0), Sp(Ve, !1), (t.lanes = Bv));
                  }
                else {
                  if (!Tt) {
                    var cr = am(ot);
                    if (cr !== null) {
                      (t.flags |= ze), (Tt = !0);
                      var Fa = cr.updateQueue;
                      if (
                        (Fa !== null && ((t.updateQueue = Fa), (t.flags |= Ye)),
                        Sp(Ve, !0),
                        Ve.tail === null &&
                          Ve.tailMode === "hidden" &&
                          !ot.alternate &&
                          !rr())
                      )
                        return ir(t), null;
                    } else
                      Bt() * 2 - Ve.renderingStartTime > D1() &&
                        a !== Kn &&
                        ((t.flags |= ze),
                        (Tt = !0),
                        Sp(Ve, !1),
                        (t.lanes = Bv));
                  }
                  if (Ve.isBackwards) (ot.sibling = t.child), (t.child = ot);
                  else {
                    var Xr = Ve.last;
                    Xr !== null ? (Xr.sibling = ot) : (t.child = ot),
                      (Ve.last = ot);
                  }
                }
                if (Ve.tail !== null) {
                  var Kr = Ve.tail;
                  (Ve.rendering = Kr),
                    (Ve.tail = Kr.sibling),
                    (Ve.renderingStartTime = Bt()),
                    (Kr.sibling = null);
                  var Nr = wi.current;
                  return Tt ? (Nr = Fg(Nr, lp)) : (Nr = lf(Nr)), eo(t, Nr), Kr;
                }
                return ir(t), null;
              }
              case Dn:
                break;
              case Fe:
              case et: {
                a0(t);
                var Jl = t.memoizedState,
                  Ef = Jl !== null;
                if (e !== null) {
                  var zp = e.memoizedState,
                    sl = zp !== null;
                  sl !== Ef && !fe && (t.flags |= $i);
                }
                return (
                  !Ef || (t.mode & Ee) === ge
                    ? ir(t)
                    : xr(ol, Kn) &&
                      (ir(t), t.subtreeFlags & (Ot | Ye) && (t.flags |= $i)),
                  null
                );
              }
              case yn:
                return null;
              case Nt:
                return null;
            }
            throw new Error(
              "Unknown unit of work tag (" +
                t.tag +
                "). This error is likely caused by a bug in React. Please file an issue.",
            );
          }
          function Wb(e, t, a) {
            switch ((pg(t), t.tag)) {
              case j: {
                var i = t.type;
                tl(i) && Ah(t);
                var u = t.flags;
                return u & Rn
                  ? ((t.flags = (u & ~Rn) | ze),
                    (t.mode & Ae) !== ge && fS(t),
                    t)
                  : null;
              }
              case $: {
                t.stateNode, af(t), sg(t), Vg();
                var s = t.flags;
                return (s & Rn) !== be && (s & ze) === be
                  ? ((t.flags = (s & ~Rn) | ze), t)
                  : null;
              }
              case oe:
                return Ag(t), null;
              case We: {
                uf(t);
                var f = t.memoizedState;
                if (f !== null && f.dehydrated !== null) {
                  if (t.alternate === null)
                    throw new Error(
                      "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.",
                    );
                  ef();
                }
                var p = t.flags;
                return p & Rn
                  ? ((t.flags = (p & ~Rn) | ze),
                    (t.mode & Ae) !== ge && fS(t),
                    t)
                  : null;
              }
              case dt:
                return uf(t), null;
              case J:
                return af(t), null;
              case ke:
                var h = t.type._context;
                return _g(h, t), null;
              case Fe:
              case et:
                return a0(t), null;
              case yn:
                return null;
              default:
                return null;
            }
          }
          function o1(e, t, a) {
            switch ((pg(t), t.tag)) {
              case j: {
                var i = t.type.childContextTypes;
                i != null && Ah(t);
                break;
              }
              case $: {
                t.stateNode, af(t), sg(t), Vg();
                break;
              }
              case oe: {
                Ag(t);
                break;
              }
              case J:
                af(t);
                break;
              case We:
                uf(t);
                break;
              case dt:
                uf(t);
                break;
              case ke:
                var u = t.type._context;
                _g(u, t);
                break;
              case Fe:
              case et:
                a0(t);
                break;
            }
          }
          var s1 = null;
          s1 = new Set();
          var Dm = !1,
            lr = !1,
            Qb = typeof WeakSet == "function" ? WeakSet : Set,
            me = null,
            pf = null,
            vf = null;
          function Ib(e) {
            Rl(null, function () {
              throw e;
            }),
              nd();
          }
          var Gb = function (e, t) {
            if (
              ((t.props = e.memoizedProps),
              (t.state = e.memoizedState),
              e.mode & Ae)
            )
              try {
                ll(), t.componentWillUnmount();
              } finally {
                il(e);
              }
            else t.componentWillUnmount();
          };
          function c1(e, t) {
            try {
              ro(An, e);
            } catch (a) {
              zt(e, t, a);
            }
          }
          function PS(e, t, a) {
            try {
              Gb(e, a);
            } catch (i) {
              zt(e, t, i);
            }
          }
          function Xb(e, t, a) {
            try {
              a.componentDidMount();
            } catch (i) {
              zt(e, t, i);
            }
          }
          function f1(e, t) {
            try {
              p1(e);
            } catch (a) {
              zt(e, t, a);
            }
          }
          function hf(e, t) {
            var a = e.ref;
            if (a !== null)
              if (typeof a == "function") {
                var i;
                try {
                  if (un && qr && e.mode & Ae)
                    try {
                      ll(), (i = a(null));
                    } finally {
                      il(e);
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
          function km(e, t, a) {
            try {
              a();
            } catch (i) {
              zt(e, t, i);
            }
          }
          var d1 = !1;
          function Kb(e, t) {
            ox(e.containerInfo), (me = t), qb();
            var a = d1;
            return (d1 = !1), a;
          }
          function qb() {
            for (; me !== null; ) {
              var e = me,
                t = e.child;
              (e.subtreeFlags & mu) !== be && t !== null
                ? ((t.return = e), (me = t))
                : Jb();
            }
          }
          function Jb() {
            for (; me !== null; ) {
              var e = me;
              Et(e);
              try {
                Zb(e);
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
          function Zb(e) {
            var t = e.alternate,
              a = e.flags;
            if ((a & ia) !== be) {
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
                      !hs &&
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
                      e.elementType === e.type ? i : _i(e.type, i),
                      u,
                    );
                    {
                      var p = s1;
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
                    Mx(h.containerInfo);
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
          function ki(e, t, a) {
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
                      ((e & ar) !== Sa ? Fv(t) : (e & An) !== Sa && za(t),
                      (e & nl) !== Sa && Op(!0),
                      km(t, a, p),
                      (e & nl) !== Sa && Op(!1),
                      (e & ar) !== Sa ? ec() : (e & An) !== Sa && Eu());
                }
                f = f.next;
              } while (f !== s);
            }
          }
          function ro(e, t) {
            var a = t.updateQueue,
              i = a !== null ? a.lastEffect : null;
            if (i !== null) {
              var u = i.next,
                s = u;
              do {
                if ((s.tag & e) === e) {
                  (e & ar) !== Sa ? Qi(t) : (e & An) !== Sa && Hv(t);
                  var f = s.create;
                  (e & nl) !== Sa && Op(!0),
                    (s.destroy = f()),
                    (e & nl) !== Sa && Op(!1),
                    (e & ar) !== Sa ? Zs() : (e & An) !== Sa && zo();
                  {
                    var p = s.destroy;
                    if (p !== void 0 && typeof p != "function") {
                      var h = void 0;
                      (s.tag & An) !== be
                        ? (h = "useLayoutEffect")
                        : (s.tag & nl) !== be
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
          function e_(e, t) {
            if ((t.flags & Ye) !== be)
              switch (t.tag) {
                case je: {
                  var a = t.stateNode.passiveEffectDuration,
                    i = t.memoizedProps,
                    u = i.id,
                    s = i.onPostCommit,
                    f = DC(),
                    p = t.alternate === null ? "mount" : "update";
                  _C() && (p = "nested-update"),
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
          function t_(e, t, a, i) {
            if ((a.flags & Gn) !== be)
              switch (a.tag) {
                case P:
                case xe:
                case $e: {
                  if (!lr)
                    if (a.mode & Ae)
                      try {
                        ll(), ro(An | zn, a);
                      } finally {
                        il(a);
                      }
                    else ro(An | zn, a);
                  break;
                }
                case j: {
                  var u = a.stateNode;
                  if (a.flags & Ye && !lr)
                    if (t === null)
                      if (
                        (a.type === a.elementType &&
                          !hs &&
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
                          ll(), u.componentDidMount();
                        } finally {
                          il(a);
                        }
                      else u.componentDidMount();
                    else {
                      var s =
                          a.elementType === a.type
                            ? t.memoizedProps
                            : _i(a.type, t.memoizedProps),
                        f = t.memoizedState;
                      if (
                        (a.type === a.elementType &&
                          !hs &&
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
                          ll(),
                            u.componentDidUpdate(
                              s,
                              f,
                              u.__reactInternalSnapshotBeforeUpdate,
                            );
                        } finally {
                          il(a);
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
                      !hs &&
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
                    JE(a, p, u));
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
                    JE(a, h, g);
                  }
                  break;
                }
                case oe: {
                  var E = a.stateNode;
                  if (t === null && a.flags & Ye) {
                    var _ = a.type,
                      w = a.memoizedProps;
                    Sx(E, _, w);
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
                      De = DC(),
                      Ce = t === null ? "mount" : "update";
                    _C() && (Ce = "nested-update"),
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
                        J_(a);
                      var rt = a.return;
                      e: for (; rt !== null; ) {
                        switch (rt.tag) {
                          case $:
                            var Ze = rt.stateNode;
                            Ze.effectDuration += le;
                            break e;
                          case je:
                            var N = rt.stateNode;
                            N.effectDuration += le;
                            break e;
                        }
                        rt = rt.return;
                      }
                    }
                  }
                  break;
                }
                case We: {
                  s_(e, a);
                  break;
                }
                case dt:
                case mn:
                case Dn:
                case Fe:
                case et:
                case Nt:
                  break;
                default:
                  throw new Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
                  );
              }
            lr || (a.flags & mr && p1(a));
          }
          function n_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                if (e.mode & Ae)
                  try {
                    ll(), c1(e, e.return);
                  } finally {
                    il(e);
                  }
                else c1(e, e.return);
                break;
              }
              case j: {
                var t = e.stateNode;
                typeof t.componentDidMount == "function" && Xb(e, e.return, t),
                  f1(e, e.return);
                break;
              }
              case oe: {
                f1(e, e.return);
                break;
              }
            }
          }
          function r_(e, t) {
            for (var a = null, i = e; ; ) {
              if (i.tag === oe) {
                if (a === null) {
                  a = i;
                  try {
                    var u = i.stateNode;
                    t ? kx(u) : Lx(i.stateNode, i.memoizedProps);
                  } catch (f) {
                    zt(e, e.return, f);
                  }
                }
              } else if (i.tag === _e) {
                if (a === null)
                  try {
                    var s = i.stateNode;
                    t ? Nx(s) : Ox(s, i.memoizedProps);
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
          function p1(e) {
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
                    ll(), (u = t(i));
                  } finally {
                    il(e);
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
          function a_(e) {
            var t = e.alternate;
            t !== null && (t.return = null), (e.return = null);
          }
          function v1(e) {
            var t = e.alternate;
            t !== null && ((e.alternate = null), v1(t));
            {
              if (
                ((e.child = null),
                (e.deletions = null),
                (e.sibling = null),
                e.tag === oe)
              ) {
                var a = e.stateNode;
                a !== null && cw(a);
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
          function i_(e) {
            for (var t = e.return; t !== null; ) {
              if (h1(t)) return t;
              t = t.return;
            }
            throw new Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
            );
          }
          function h1(e) {
            return e.tag === oe || e.tag === $ || e.tag === J;
          }
          function m1(e) {
            var t = e;
            e: for (;;) {
              for (; t.sibling === null; ) {
                if (t.return === null || h1(t.return)) return null;
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
          function l_(e) {
            var t = i_(e);
            switch (t.tag) {
              case oe: {
                var a = t.stateNode;
                t.flags & vt && (gE(a), (t.flags &= ~vt));
                var i = m1(e);
                YS(e, i, a);
                break;
              }
              case $:
              case J: {
                var u = t.stateNode.containerInfo,
                  s = m1(e);
                $S(e, s, u);
                break;
              }
              default:
                throw new Error(
                  "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.",
                );
            }
          }
          function $S(e, t, a) {
            var i = e.tag,
              u = i === oe || i === _e;
            if (u) {
              var s = e.stateNode;
              t ? wx(a, s, t) : Rx(a, s);
            } else if (i !== J) {
              var f = e.child;
              if (f !== null) {
                $S(f, t, a);
                for (var p = f.sibling; p !== null; )
                  $S(p, t, a), (p = p.sibling);
              }
            }
          }
          function YS(e, t, a) {
            var i = e.tag,
              u = i === oe || i === _e;
            if (u) {
              var s = e.stateNode;
              t ? xx(a, s, t) : Tx(a, s);
            } else if (i !== J) {
              var f = e.child;
              if (f !== null) {
                YS(f, t, a);
                for (var p = f.sibling; p !== null; )
                  YS(p, t, a), (p = p.sibling);
              }
            }
          }
          var ur = null,
            Ni = !1;
          function u_(e, t, a) {
            {
              var i = t;
              e: for (; i !== null; ) {
                switch (i.tag) {
                  case oe: {
                    (ur = i.stateNode), (Ni = !1);
                    break e;
                  }
                  case $: {
                    (ur = i.stateNode.containerInfo), (Ni = !0);
                    break e;
                  }
                  case J: {
                    (ur = i.stateNode.containerInfo), (Ni = !0);
                    break e;
                  }
                }
                i = i.return;
              }
              if (ur === null)
                throw new Error(
                  "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
                );
              y1(e, t, a), (ur = null), (Ni = !1);
            }
            a_(a);
          }
          function ao(e, t, a) {
            for (var i = a.child; i !== null; ) y1(e, t, i), (i = i.sibling);
          }
          function y1(e, t, a) {
            switch ((bl(a), a.tag)) {
              case oe:
                lr || hf(a, t);
              case _e: {
                {
                  var i = ur,
                    u = Ni;
                  (ur = null),
                    ao(e, t, a),
                    (ur = i),
                    (Ni = u),
                    ur !== null &&
                      (Ni ? _x(ur, a.stateNode) : bx(ur, a.stateNode));
                }
                return;
              }
              case wt: {
                ur !== null && (Ni ? Dx(ur, a.stateNode) : tg(ur, a.stateNode));
                return;
              }
              case J: {
                {
                  var s = ur,
                    f = Ni;
                  (ur = a.stateNode.containerInfo),
                    (Ni = !0),
                    ao(e, t, a),
                    (ur = s),
                    (Ni = f);
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
                          ((M & nl) !== Sa
                            ? km(a, t, w)
                            : (M & An) !== Sa &&
                              (za(a),
                              a.mode & Ae
                                ? (ll(), km(a, t, w), il(a))
                                : km(a, t, w),
                              Eu())),
                          (E = E.next);
                      } while (E !== g);
                    }
                  }
                }
                ao(e, t, a);
                return;
              }
              case j: {
                if (!lr) {
                  hf(a, t);
                  var z = a.stateNode;
                  typeof z.componentWillUnmount == "function" && PS(a, t, z);
                }
                ao(e, t, a);
                return;
              }
              case Dn: {
                ao(e, t, a);
                return;
              }
              case Fe: {
                if (a.mode & Ee) {
                  var H = lr;
                  (lr = H || a.memoizedState !== null), ao(e, t, a), (lr = H);
                } else ao(e, t, a);
                break;
              }
              default: {
                ao(e, t, a);
                return;
              }
            }
          }
          function o_(e) {
            e.memoizedState;
          }
          function s_(e, t) {
            var a = t.memoizedState;
            if (a === null) {
              var i = t.alternate;
              if (i !== null) {
                var u = i.memoizedState;
                if (u !== null) {
                  var s = u.dehydrated;
                  s !== null && Ix(s);
                }
              }
            }
          }
          function g1(e) {
            var t = e.updateQueue;
            if (t !== null) {
              e.updateQueue = null;
              var a = e.stateNode;
              a === null && (a = e.stateNode = new Qb()),
                t.forEach(function (i) {
                  var u = iD.bind(null, e, i);
                  if (!a.has(i)) {
                    if ((a.add(i), $r))
                      if (pf !== null && vf !== null) Lp(vf, pf);
                      else
                        throw Error(
                          "Expected finished root and lanes to be set. This is a bug in React.",
                        );
                    i.then(u, u);
                  }
                });
            }
          }
          function c_(e, t, a) {
            (pf = a),
              (vf = e),
              Et(t),
              S1(t, e),
              Et(t),
              (pf = null),
              (vf = null);
          }
          function Li(e, t, a) {
            var i = t.deletions;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u];
                try {
                  u_(e, t, s);
                } catch (h) {
                  zt(s, t, h);
                }
              }
            var f = ny();
            if (t.subtreeFlags & Sr)
              for (var p = t.child; p !== null; )
                Et(p), S1(p, e), (p = p.sibling);
            Et(f);
          }
          function S1(e, t, a) {
            var i = e.alternate,
              u = e.flags;
            switch (e.tag) {
              case P:
              case xe:
              case mt:
              case $e: {
                if ((Li(t, e), ul(e), u & Ye)) {
                  try {
                    ki(nl | zn, e, e.return), ro(nl | zn, e);
                  } catch (Ue) {
                    zt(e, e.return, Ue);
                  }
                  if (e.mode & Ae) {
                    try {
                      ll(), ki(An | zn, e, e.return);
                    } catch (Ue) {
                      zt(e, e.return, Ue);
                    }
                    il(e);
                  } else
                    try {
                      ki(An | zn, e, e.return);
                    } catch (Ue) {
                      zt(e, e.return, Ue);
                    }
                }
                return;
              }
              case j: {
                Li(t, e), ul(e), u & mr && i !== null && hf(i, i.return);
                return;
              }
              case oe: {
                Li(t, e), ul(e), u & mr && i !== null && hf(i, i.return);
                {
                  if (e.flags & vt) {
                    var s = e.stateNode;
                    try {
                      gE(s);
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
                          Ex(f, E, g, h, p, e);
                        } catch (Ue) {
                          zt(e, e.return, Ue);
                        }
                    }
                  }
                }
                return;
              }
              case _e: {
                if ((Li(t, e), ul(e), u & Ye)) {
                  if (e.stateNode === null)
                    throw new Error(
                      "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.",
                    );
                  var _ = e.stateNode,
                    w = e.memoizedProps,
                    M = i !== null ? i.memoizedProps : w;
                  try {
                    Cx(_, M, w);
                  } catch (Ue) {
                    zt(e, e.return, Ue);
                  }
                }
                return;
              }
              case $: {
                if ((Li(t, e), ul(e), u & Ye && i !== null)) {
                  var z = i.memoizedState;
                  if (z.isDehydrated)
                    try {
                      Qx(t.containerInfo);
                    } catch (Ue) {
                      zt(e, e.return, Ue);
                    }
                }
                return;
              }
              case J: {
                Li(t, e), ul(e);
                return;
              }
              case We: {
                Li(t, e), ul(e);
                var H = e.child;
                if (H.flags & $i) {
                  var le = H.stateNode,
                    De = H.memoizedState,
                    Ce = De !== null;
                  if (((le.isHidden = Ce), Ce)) {
                    var rt =
                      H.alternate !== null &&
                      H.alternate.memoizedState !== null;
                    rt || Y_();
                  }
                }
                if (u & Ye) {
                  try {
                    o_(e);
                  } catch (Ue) {
                    zt(e, e.return, Ue);
                  }
                  g1(e);
                }
                return;
              }
              case Fe: {
                var Ze = i !== null && i.memoizedState !== null;
                if (e.mode & Ee) {
                  var N = lr;
                  (lr = N || Ze), Li(t, e), (lr = N);
                } else Li(t, e);
                if ((ul(e), u & $i)) {
                  var V = e.stateNode,
                    L = e.memoizedState,
                    X = L !== null,
                    de = e;
                  if (((V.isHidden = X), X && !Ze && (de.mode & Ee) !== ge)) {
                    me = de;
                    for (var ue = de.child; ue !== null; )
                      (me = ue), d_(ue), (ue = ue.sibling);
                  }
                  r_(de, X);
                }
                return;
              }
              case dt: {
                Li(t, e), ul(e), u & Ye && g1(e);
                return;
              }
              case Dn:
                return;
              default: {
                Li(t, e), ul(e);
                return;
              }
            }
          }
          function ul(e) {
            var t = e.flags;
            if (t & Ot) {
              try {
                l_(e);
              } catch (a) {
                zt(e, e.return, a);
              }
              e.flags &= ~Ot;
            }
            t & la && (e.flags &= ~la);
          }
          function f_(e, t, a) {
            (pf = a), (vf = t), (me = e), E1(e, t, a), (pf = null), (vf = null);
          }
          function E1(e, t, a) {
            for (var i = (e.mode & Ee) !== ge; me !== null; ) {
              var u = me,
                s = u.child;
              if (u.tag === Fe && i) {
                var f = u.memoizedState !== null,
                  p = f || Dm;
                if (p) {
                  WS(e, t, a);
                  continue;
                } else {
                  var h = u.alternate,
                    g = h !== null && h.memoizedState !== null,
                    E = g || lr,
                    _ = Dm,
                    w = lr;
                  (Dm = p), (lr = E), lr && !w && ((me = u), p_(u));
                  for (var M = s; M !== null; )
                    (me = M), E1(M, t, a), (M = M.sibling);
                  (me = u), (Dm = _), (lr = w), WS(e, t, a);
                  continue;
                }
              }
              (u.subtreeFlags & Gn) !== be && s !== null
                ? ((s.return = u), (me = s))
                : WS(e, t, a);
            }
          }
          function WS(e, t, a) {
            for (; me !== null; ) {
              var i = me;
              if ((i.flags & Gn) !== be) {
                var u = i.alternate;
                Et(i);
                try {
                  t_(t, u, i, a);
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
          function d_(e) {
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
                      ll(), ki(An, t, t.return);
                    } finally {
                      il(t);
                    }
                  else ki(An, t, t.return);
                  break;
                }
                case j: {
                  hf(t, t.return);
                  var i = t.stateNode;
                  typeof i.componentWillUnmount == "function" &&
                    PS(t, t.return, i);
                  break;
                }
                case oe: {
                  hf(t, t.return);
                  break;
                }
                case Fe: {
                  var u = t.memoizedState !== null;
                  if (u) {
                    C1(e);
                    continue;
                  }
                  break;
                }
              }
              a !== null ? ((a.return = t), (me = a)) : C1(e);
            }
          }
          function C1(e) {
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
          function p_(e) {
            for (; me !== null; ) {
              var t = me,
                a = t.child;
              if (t.tag === Fe) {
                var i = t.memoizedState !== null;
                if (i) {
                  T1(e);
                  continue;
                }
              }
              a !== null ? ((a.return = t), (me = a)) : T1(e);
            }
          }
          function T1(e) {
            for (; me !== null; ) {
              var t = me;
              Et(t);
              try {
                n_(t);
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
          function v_(e, t, a, i) {
            (me = t), h_(t, e, a, i);
          }
          function h_(e, t, a, i) {
            for (; me !== null; ) {
              var u = me,
                s = u.child;
              (u.subtreeFlags & ua) !== be && s !== null
                ? ((s.return = u), (me = s))
                : m_(e, t, a, i);
            }
          }
          function m_(e, t, a, i) {
            for (; me !== null; ) {
              var u = me;
              if ((u.flags & At) !== be) {
                Et(u);
                try {
                  y_(t, u, a, i);
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
          function y_(e, t, a, i) {
            switch (t.tag) {
              case P:
              case xe:
              case $e: {
                if (t.mode & Ae) {
                  cS();
                  try {
                    ro(ar | zn, t);
                  } finally {
                    sS(t);
                  }
                } else ro(ar | zn, t);
                break;
              }
            }
          }
          function g_(e) {
            (me = e), S_();
          }
          function S_() {
            for (; me !== null; ) {
              var e = me,
                t = e.child;
              if ((me.flags & ft) !== be) {
                var a = e.deletions;
                if (a !== null) {
                  for (var i = 0; i < a.length; i++) {
                    var u = a[i];
                    (me = u), T_(u, e);
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
              (e.subtreeFlags & ua) !== be && t !== null
                ? ((t.return = e), (me = t))
                : E_();
            }
          }
          function E_() {
            for (; me !== null; ) {
              var e = me;
              (e.flags & At) !== be && (Et(e), C_(e), on());
              var t = e.sibling;
              if (t !== null) {
                (t.return = e.return), (me = t);
                return;
              }
              me = e.return;
            }
          }
          function C_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                e.mode & Ae
                  ? (cS(), ki(ar | zn, e, e.return), sS(e))
                  : ki(ar | zn, e, e.return);
                break;
              }
            }
          }
          function T_(e, t) {
            for (; me !== null; ) {
              var a = me;
              Et(a), x_(a, t), on();
              var i = a.child;
              i !== null ? ((i.return = a), (me = i)) : R_(e);
            }
          }
          function R_(e) {
            for (; me !== null; ) {
              var t = me,
                a = t.sibling,
                i = t.return;
              if ((v1(t), t === e)) {
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
          function x_(e, t) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                e.mode & Ae ? (cS(), ki(ar, e, t), sS(e)) : ki(ar, e, t);
                break;
              }
            }
          }
          function w_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                try {
                  ro(An | zn, e);
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
          function b_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                try {
                  ro(ar | zn, e);
                } catch (t) {
                  zt(e, e.return, t);
                }
                break;
              }
            }
          }
          function __(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e: {
                try {
                  ki(An | zn, e, e.return);
                } catch (a) {
                  zt(e, e.return, a);
                }
                break;
              }
              case j: {
                var t = e.stateNode;
                typeof t.componentWillUnmount == "function" &&
                  PS(e, e.return, t);
                break;
              }
            }
          }
          function D_(e) {
            switch (e.tag) {
              case P:
              case xe:
              case $e:
                try {
                  ki(ar | zn, e, e.return);
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
          var k_ = [];
          function N_() {
            k_.forEach(function (e) {
              return e();
            });
          }
          var L_ = S.ReactCurrentActQueue;
          function O_(e) {
            {
              var t =
                  typeof IS_REACT_ACT_ENVIRONMENT < "u"
                    ? IS_REACT_ACT_ENVIRONMENT
                    : void 0,
                a = typeof jest < "u";
              return a && t !== !1;
            }
          }
          function R1() {
            {
              var e =
                typeof IS_REACT_ACT_ENVIRONMENT < "u"
                  ? IS_REACT_ACT_ENVIRONMENT
                  : void 0;
              return (
                !e &&
                  L_.current !== null &&
                  y(
                    "The current testing environment is not configured to support act(...)",
                  ),
                e
              );
            }
          }
          var M_ = Math.ceil,
            QS = S.ReactCurrentDispatcher,
            IS = S.ReactCurrentOwner,
            or = S.ReactCurrentBatchConfig,
            Oi = S.ReactCurrentActQueue,
            Hn = 0,
            x1 = 1,
            sr = 2,
            ri = 4,
            Gl = 0,
            Cp = 1,
            ms = 2,
            Nm = 3,
            Tp = 4,
            w1 = 5,
            GS = 6,
            nt = Hn,
            Ir = null,
            Zt = null,
            Vn = Y,
            ol = Y,
            XS = Gu(Y),
            Bn = Gl,
            Rp = null,
            Lm = Y,
            xp = Y,
            Om = Y,
            wp = null,
            Ea = null,
            KS = 0,
            b1 = 500,
            _1 = 1 / 0,
            U_ = 500,
            Xl = null;
          function bp() {
            _1 = Bt() + U_;
          }
          function D1() {
            return _1;
          }
          var Mm = !1,
            qS = null,
            mf = null,
            ys = !1,
            io = null,
            _p = Y,
            JS = [],
            ZS = null,
            z_ = 50,
            Dp = 0,
            e0 = null,
            t0 = !1,
            Um = !1,
            A_ = 50,
            yf = 0,
            zm = null,
            kp = Dt,
            Am = Y,
            k1 = !1;
          function jm() {
            return Ir;
          }
          function Gr() {
            return (nt & (sr | ri)) !== Hn
              ? Bt()
              : (kp !== Dt || (kp = Bt()), kp);
          }
          function lo(e) {
            var t = e.mode;
            if ((t & Ee) === ge) return Re;
            if ((nt & sr) !== Hn && Vn !== Y) return ku(Vn);
            var a = Lw() !== Nw;
            if (a) {
              if (or.transition !== null) {
                var i = or.transition;
                i._updatedFibers || (i._updatedFibers = new Set()),
                  i._updatedFibers.add(e);
              }
              return Am === an && (Am = Xv()), Am;
            }
            var u = da();
            if (u !== an) return u;
            var s = hx();
            return s;
          }
          function j_(e) {
            var t = e.mode;
            return (t & Ee) === ge ? Re : Rr();
          }
          function Pn(e, t, a, i) {
            uD(),
              k1 && y("useInsertionEffect must not schedule updates."),
              t0 && (Um = !0),
              Ul(e, a, i),
              (nt & sr) !== Y && e === Ir
                ? cD(t)
                : ($r && Rc(e, t, a),
                  fD(t),
                  e === Ir &&
                    ((nt & sr) === Hn && (xp = Pe(xp, a)),
                    Bn === Tp && uo(e, Vn)),
                  Ca(e, i),
                  a === Re &&
                    nt === Hn &&
                    (t.mode & Ee) === ge &&
                    !Oi.isBatchingLegacy &&
                    (bp(), kE()));
          }
          function F_(e, t, a) {
            var i = e.current;
            (i.lanes = t), Ul(e, t, a), Ca(e, a);
          }
          function H_(e) {
            return (nt & sr) !== Hn;
          }
          function Ca(e, t) {
            var a = e.callbackNode;
            Yv(e, t);
            var i = Ol(e, e === Ir ? Vn : Y);
            if (i === Y) {
              a !== null && W1(a),
                (e.callbackNode = null),
                (e.callbackPriority = an);
              return;
            }
            var u = Kt(i),
              s = e.callbackPriority;
            if (s === u && !(Oi.current !== null && a !== o0)) {
              a == null &&
                s !== Re &&
                y(
                  "Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.",
                );
              return;
            }
            a != null && W1(a);
            var f;
            if (u === Re)
              e.tag === Xu
                ? (Oi.isBatchingLegacy !== null &&
                    (Oi.didScheduleLegacyUpdate = !0),
                  pw(O1.bind(null, e)))
                : DE(O1.bind(null, e)),
                Oi.current !== null
                  ? Oi.current.push(Ku)
                  : yx(function () {
                      (nt & (sr | ri)) === Hn && Ku();
                    }),
                (f = null);
            else {
              var p;
              switch (Un(i)) {
                case qt:
                  p = Ks;
                  break;
                case gi:
                  p = wl;
                  break;
                case Ga:
                  p = Ia;
                  break;
                case Nu:
                  p = qs;
                  break;
                default:
                  p = Ia;
                  break;
              }
              f = s0(p, N1.bind(null, e));
            }
            (e.callbackPriority = u), (e.callbackNode = f);
          }
          function N1(e, t) {
            if ((rb(), (kp = Dt), (Am = Y), (nt & (sr | ri)) !== Hn))
              throw new Error("Should not already be working.");
            var a = e.callbackNode,
              i = ql();
            if (i && e.callbackNode !== a) return null;
            var u = Ol(e, e === Ir ? Vn : Y);
            if (u === Y) return null;
            var s = !$o(e, u) && !Gv(e, u) && !t,
              f = s ? X_(e, u) : Hm(e, u);
            if (f !== Gl) {
              if (f === ms) {
                var p = Gi(e);
                p !== Y && ((u = p), (f = n0(e, p)));
              }
              if (f === Cp) {
                var h = Rp;
                throw (gs(e, Y), uo(e, u), Ca(e, Bt()), h);
              }
              if (f === GS) uo(e, u);
              else {
                var g = !$o(e, u),
                  E = e.current.alternate;
                if (g && !B_(E)) {
                  if (((f = Hm(e, u)), f === ms)) {
                    var _ = Gi(e);
                    _ !== Y && ((u = _), (f = n0(e, _)));
                  }
                  if (f === Cp) {
                    var w = Rp;
                    throw (gs(e, Y), uo(e, u), Ca(e, Bt()), w);
                  }
                }
                (e.finishedWork = E), (e.finishedLanes = u), V_(e, f, u);
              }
            }
            return Ca(e, Bt()), e.callbackNode === a ? N1.bind(null, e) : null;
          }
          function n0(e, t) {
            var a = wp;
            if (xc(e)) {
              var i = gs(e, t);
              (i.flags |= Yt), lw(e.containerInfo);
            }
            var u = Hm(e, t);
            if (u !== ms) {
              var s = Ea;
              (Ea = a), s !== null && L1(s);
            }
            return u;
          }
          function L1(e) {
            Ea === null ? (Ea = e) : Ea.push.apply(Ea, e);
          }
          function V_(e, t, a) {
            switch (t) {
              case Gl:
              case Cp:
                throw new Error(
                  "Root did not complete. This is a bug in React.",
                );
              case ms: {
                Ss(e, Ea, Xl);
                break;
              }
              case Nm: {
                if ((uo(e, a), Wv(a) && !Q1())) {
                  var i = KS + b1 - Bt();
                  if (i > 10) {
                    var u = Ol(e, Y);
                    if (u !== Y) break;
                    var s = e.suspendedLanes;
                    if (!Ml(s, a)) {
                      Gr(), Cc(e, s);
                      break;
                    }
                    e.timeoutHandle = Zy(Ss.bind(null, e, Ea, Xl), i);
                    break;
                  }
                }
                Ss(e, Ea, Xl);
                break;
              }
              case Tp: {
                if ((uo(e, a), Iv(a))) break;
                if (!Q1()) {
                  var f = Pv(e, a),
                    p = f,
                    h = Bt() - p,
                    g = lD(h) - h;
                  if (g > 10) {
                    e.timeoutHandle = Zy(Ss.bind(null, e, Ea, Xl), g);
                    break;
                  }
                }
                Ss(e, Ea, Xl);
                break;
              }
              case w1: {
                Ss(e, Ea, Xl);
                break;
              }
              default:
                throw new Error("Unknown root exit status.");
            }
          }
          function B_(e) {
            for (var t = e; ; ) {
              if (t.flags & Mo) {
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
              if (t.subtreeFlags & Mo && h !== null) {
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
          function uo(e, t) {
            (t = Yo(t, Om)), (t = Yo(t, xp)), qv(e, t);
          }
          function O1(e) {
            if ((ab(), (nt & (sr | ri)) !== Hn))
              throw new Error("Should not already be working.");
            ql();
            var t = Ol(e, Y);
            if (!xr(t, Re)) return Ca(e, Bt()), null;
            var a = Hm(e, t);
            if (e.tag !== Xu && a === ms) {
              var i = Gi(e);
              i !== Y && ((t = i), (a = n0(e, i)));
            }
            if (a === Cp) {
              var u = Rp;
              throw (gs(e, Y), uo(e, t), Ca(e, Bt()), u);
            }
            if (a === GS)
              throw new Error("Root did not complete. This is a bug in React.");
            var s = e.current.alternate;
            return (
              (e.finishedWork = s),
              (e.finishedLanes = t),
              Ss(e, Ea, Xl),
              Ca(e, Bt()),
              null
            );
          }
          function P_(e, t) {
            t !== Y &&
              (Sd(e, Pe(t, Re)),
              Ca(e, Bt()),
              (nt & (sr | ri)) === Hn && (bp(), Ku()));
          }
          function r0(e, t) {
            var a = nt;
            nt |= x1;
            try {
              return e(t);
            } finally {
              (nt = a), nt === Hn && !Oi.isBatchingLegacy && (bp(), kE());
            }
          }
          function $_(e, t, a, i, u) {
            var s = da(),
              f = or.transition;
            try {
              return (or.transition = null), Wt(qt), e(t, a, i, u);
            } finally {
              Wt(s), (or.transition = f), nt === Hn && bp();
            }
          }
          function Kl(e) {
            io !== null && io.tag === Xu && (nt & (sr | ri)) === Hn && ql();
            var t = nt;
            nt |= x1;
            var a = or.transition,
              i = da();
            try {
              return (or.transition = null), Wt(qt), e ? e() : void 0;
            } finally {
              Wt(i),
                (or.transition = a),
                (nt = t),
                (nt & (sr | ri)) === Hn && Ku();
            }
          }
          function M1() {
            return (nt & (sr | ri)) !== Hn;
          }
          function Fm(e, t) {
            _r(XS, ol, e), (ol = Pe(ol, t));
          }
          function a0(e) {
            (ol = XS.current), br(XS, e);
          }
          function gs(e, t) {
            (e.finishedWork = null), (e.finishedLanes = Y);
            var a = e.timeoutHandle;
            if ((a !== eg && ((e.timeoutHandle = eg), mx(a)), Zt !== null))
              for (var i = Zt.return; i !== null; ) {
                var u = i.alternate;
                o1(u, i), (i = i.return);
              }
            Ir = e;
            var s = Es(e.current, null);
            return (
              (Zt = s),
              (Vn = ol = t),
              (Bn = Gl),
              (Rp = null),
              (Lm = Y),
              (xp = Y),
              (Om = Y),
              (wp = null),
              (Ea = null),
              Fw(),
              xi.discardPendingWarnings(),
              s
            );
          }
          function U1(e, t) {
            do {
              var a = Zt;
              try {
                if (
                  (Gh(),
                  aC(),
                  on(),
                  (IS.current = null),
                  a === null || a.return === null)
                ) {
                  (Bn = Cp), (Rp = t), (Zt = null);
                  return;
                }
                if ((un && a.mode & Ae && Rm(a, !0), Ha))
                  if (
                    (Cr(),
                    t !== null &&
                      typeof t == "object" &&
                      typeof t.then == "function")
                  ) {
                    var i = t;
                    _l(a, i, Vn);
                  } else Ao(a, t, Vn);
                pb(e, a.return, a, t, Vn), F1(a);
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
          function z1() {
            var e = QS.current;
            return (QS.current = gm), e === null ? gm : e;
          }
          function A1(e) {
            QS.current = e;
          }
          function Y_() {
            KS = Bt();
          }
          function Np(e) {
            Lm = Pe(e, Lm);
          }
          function W_() {
            Bn === Gl && (Bn = Nm);
          }
          function i0() {
            (Bn === Gl || Bn === Nm || Bn === ms) && (Bn = Tp),
              Ir !== null && (Po(Lm) || Po(xp)) && uo(Ir, Vn);
          }
          function Q_(e) {
            Bn !== Tp && (Bn = ms), wp === null ? (wp = [e]) : wp.push(e);
          }
          function I_() {
            return Bn === Gl;
          }
          function Hm(e, t) {
            var a = nt;
            nt |= sr;
            var i = z1();
            if (Ir !== e || Vn !== t) {
              if ($r) {
                var u = e.memoizedUpdaters;
                u.size > 0 && (Lp(e, Vn), u.clear()), Ed(e, t);
              }
              (Xl = Qo()), gs(e, t);
            }
            jt(t);
            do
              try {
                G_();
                break;
              } catch (s) {
                U1(e, s);
              }
            while (!0);
            if ((Gh(), (nt = a), A1(i), Zt !== null))
              throw new Error(
                "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.",
              );
            return nc(), (Ir = null), (Vn = Y), Bn;
          }
          function G_() {
            for (; Zt !== null; ) j1(Zt);
          }
          function X_(e, t) {
            var a = nt;
            nt |= sr;
            var i = z1();
            if (Ir !== e || Vn !== t) {
              if ($r) {
                var u = e.memoizedUpdaters;
                u.size > 0 && (Lp(e, Vn), u.clear()), Ed(e, t);
              }
              (Xl = Qo()), bp(), gs(e, t);
            }
            jt(t);
            do
              try {
                K_();
                break;
              } catch (s) {
                U1(e, s);
              }
            while (!0);
            return (
              Gh(),
              A1(i),
              (nt = a),
              Zt !== null ? (tc(), Gl) : (nc(), (Ir = null), (Vn = Y), Bn)
            );
          }
          function K_() {
            for (; Zt !== null && !Xs(); ) j1(Zt);
          }
          function j1(e) {
            var t = e.alternate;
            Et(e);
            var a;
            (e.mode & Ae) !== ge
              ? (oS(e), (a = l0(t, e, ol)), Rm(e, !0))
              : (a = l0(t, e, ol)),
              on(),
              (e.memoizedProps = e.pendingProps),
              a === null ? F1(e) : (Zt = a),
              (IS.current = null);
          }
          function F1(e) {
            var t = e;
            do {
              var a = t.alternate,
                i = t.return;
              if ((t.flags & Vr) === be) {
                Et(t);
                var u = void 0;
                if (
                  ((t.mode & Ae) === ge
                    ? (u = u1(a, t, ol))
                    : (oS(t), (u = u1(a, t, ol)), Rm(t, !1)),
                  on(),
                  u !== null)
                ) {
                  Zt = u;
                  return;
                }
              } else {
                var s = Wb(a, t);
                if (s !== null) {
                  (s.flags &= Lv), (Zt = s);
                  return;
                }
                if ((t.mode & Ae) !== ge) {
                  Rm(t, !1);
                  for (var f = t.actualDuration, p = t.child; p !== null; )
                    (f += p.actualDuration), (p = p.sibling);
                  t.actualDuration = f;
                }
                if (i !== null)
                  (i.flags |= Vr), (i.subtreeFlags = be), (i.deletions = null);
                else {
                  (Bn = GS), (Zt = null);
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
            Bn === Gl && (Bn = w1);
          }
          function Ss(e, t, a) {
            var i = da(),
              u = or.transition;
            try {
              (or.transition = null), Wt(qt), q_(e, t, a, i);
            } finally {
              (or.transition = u), Wt(i);
            }
            return null;
          }
          function q_(e, t, a, i) {
            do ql();
            while (io !== null);
            if ((oD(), (nt & (sr | ri)) !== Hn))
              throw new Error("Should not already be working.");
            var u = e.finishedWork,
              s = e.finishedLanes;
            if ((Wi(s), u === null)) return Js(), null;
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
            Tc(e, f),
              e === Ir && ((Ir = null), (Zt = null), (Vn = Y)),
              ((u.subtreeFlags & ua) !== be || (u.flags & ua) !== be) &&
                (ys ||
                  ((ys = !0),
                  (ZS = a),
                  s0(Ia, function () {
                    return ql(), null;
                  })));
            var p = (u.subtreeFlags & (mu | Sr | Gn | ua)) !== be,
              h = (u.flags & (mu | Sr | Gn | ua)) !== be;
            if (p || h) {
              var g = or.transition;
              or.transition = null;
              var E = da();
              Wt(qt);
              var _ = nt;
              (nt |= ri),
                (IS.current = null),
                Kb(e, u),
                kC(),
                c_(e, u, s),
                sx(e.containerInfo),
                (e.current = u),
                fd(s),
                f_(u, e, s),
                Cu(),
                Uv(),
                (nt = _),
                Wt(E),
                (or.transition = g);
            } else (e.current = u), kC();
            var w = ys;
            if (
              (ys ? ((ys = !1), (io = e), (_p = s)) : ((yf = 0), (zm = null)),
              (f = e.pendingLanes),
              f === Y && (mf = null),
              w || P1(e.current, !1),
              gu(u.stateNode, i),
              $r && e.memoizedUpdaters.clear(),
              N_(),
              Ca(e, Bt()),
              t !== null)
            )
              for (var M = e.onRecoverableError, z = 0; z < t.length; z++) {
                var H = t[z],
                  le = H.stack,
                  De = H.digest;
                M(H.value, { componentStack: le, digest: De });
              }
            if (Mm) {
              Mm = !1;
              var Ce = qS;
              throw ((qS = null), Ce);
            }
            return (
              xr(_p, Re) && e.tag !== Xu && ql(),
              (f = e.pendingLanes),
              xr(f, Re)
                ? (nb(), e === e0 ? Dp++ : ((Dp = 0), (e0 = e)))
                : (Dp = 0),
              Ku(),
              Js(),
              null
            );
          }
          function ql() {
            if (io !== null) {
              var e = Un(_p),
                t = xy(Ga, e),
                a = or.transition,
                i = da();
              try {
                return (or.transition = null), Wt(t), Z_();
              } finally {
                Wt(i), (or.transition = a);
              }
            }
            return !1;
          }
          function J_(e) {
            JS.push(e),
              ys ||
                ((ys = !0),
                s0(Ia, function () {
                  return ql(), null;
                }));
          }
          function Z_() {
            if (io === null) return !1;
            var e = ZS;
            ZS = null;
            var t = io,
              a = _p;
            if (((io = null), (_p = Y), (nt & (sr | ri)) !== Hn))
              throw new Error(
                "Cannot flush passive effects while already rendering.",
              );
            (t0 = !0), (Um = !1), Vv(a);
            var i = nt;
            (nt |= ri), g_(t.current), v_(t, t.current, a, e);
            {
              var u = JS;
              JS = [];
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                e_(t, f);
              }
            }
            dd(),
              P1(t.current, !0),
              (nt = i),
              Ku(),
              Um ? (t === zm ? yf++ : ((yf = 0), (zm = t))) : (yf = 0),
              (t0 = !1),
              (Um = !1),
              ca(t);
            {
              var p = t.current.stateNode;
              (p.effectDuration = 0), (p.passiveEffectDuration = 0);
            }
            return !0;
          }
          function H1(e) {
            return mf !== null && mf.has(e);
          }
          function eD(e) {
            mf === null ? (mf = new Set([e])) : mf.add(e);
          }
          function tD(e) {
            Mm || ((Mm = !0), (qS = e));
          }
          var nD = tD;
          function V1(e, t, a) {
            var i = vs(a, t),
              u = jC(e, i, Re),
              s = Ju(e, u, Re),
              f = Gr();
            s !== null && (Ul(s, Re, f), Ca(s, f));
          }
          function zt(e, t, a) {
            if ((Ib(a), Op(!1), e.tag === $)) {
              V1(e, e, a);
              return;
            }
            var i = null;
            for (i = t; i !== null; ) {
              if (i.tag === $) {
                V1(i, e, a);
                return;
              } else if (i.tag === j) {
                var u = i.type,
                  s = i.stateNode;
                if (
                  typeof u.getDerivedStateFromError == "function" ||
                  (typeof s.componentDidCatch == "function" && !H1(s))
                ) {
                  var f = vs(a, e),
                    p = bS(i, f, Re),
                    h = Ju(i, p, Re),
                    g = Gr();
                  h !== null && (Ul(h, Re, g), Ca(h, g));
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
          function rD(e, t, a) {
            var i = e.pingCache;
            i !== null && i.delete(t);
            var u = Gr();
            Cc(e, a),
              dD(e),
              Ir === e &&
                Ml(Vn, a) &&
                (Bn === Tp || (Bn === Nm && Wv(Vn) && Bt() - KS < b1)
                  ? gs(e, Y)
                  : (Om = Pe(Om, a))),
              Ca(e, u);
          }
          function B1(e, t) {
            t === an && (t = j_(e));
            var a = Gr(),
              i = ga(e, t);
            i !== null && (Ul(i, t, a), Ca(i, a));
          }
          function aD(e) {
            var t = e.memoizedState,
              a = an;
            t !== null && (a = t.retryLane), B1(e, a);
          }
          function iD(e, t) {
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
            i !== null && i.delete(t), B1(e, a);
          }
          function lD(e) {
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
                        : M_(e / 1960) * 1960;
          }
          function uD() {
            if (Dp > z_)
              throw (
                ((Dp = 0),
                (e0 = null),
                new Error(
                  "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
                ))
              );
            yf > A_ &&
              ((yf = 0),
              (zm = null),
              y(
                "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.",
              ));
          }
          function oD() {
            xi.flushLegacyContextWarning(),
              xi.flushPendingUnsafeLifecycleWarnings();
          }
          function P1(e, t) {
            Et(e),
              Vm(e, gr, __),
              t && Vm(e, xl, D_),
              Vm(e, gr, w_),
              t && Vm(e, xl, b_),
              on();
          }
          function Vm(e, t, a) {
            for (var i = e, u = null; i !== null; ) {
              var s = i.subtreeFlags & t;
              i !== u && i.child !== null && s !== be
                ? (i = i.child)
                : ((i.flags & t) !== be && a(i),
                  i.sibling !== null ? (i = i.sibling) : (i = u = i.return));
            }
          }
          var Bm = null;
          function $1(e) {
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
              if (Bm !== null) {
                if (Bm.has(a)) return;
                Bm.add(a);
              } else Bm = new Set([a]);
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
          var l0;
          {
            var sD = null;
            l0 = function (e, t, a) {
              var i = q1(sD, t);
              try {
                return n1(e, t, a);
              } catch (s) {
                if (
                  Cw() ||
                  (s !== null &&
                    typeof s == "object" &&
                    typeof s.then == "function")
                )
                  throw s;
                if (
                  (Gh(),
                  aC(),
                  o1(e, t),
                  q1(t, i),
                  t.mode & Ae && oS(t),
                  Rl(null, n1, null, e, t, a),
                  Sy())
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
          var Y1 = !1,
            u0;
          u0 = new Set();
          function cD(e) {
            if (ta && !Zw())
              switch (e.tag) {
                case P:
                case xe:
                case $e: {
                  var t = (Zt && Be(Zt)) || "Unknown",
                    a = t;
                  if (!u0.has(a)) {
                    u0.add(a);
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
                  Y1 ||
                    (y(
                      "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.",
                    ),
                    (Y1 = !0));
                  break;
                }
              }
          }
          function Lp(e, t) {
            if ($r) {
              var a = e.memoizedUpdaters;
              a.forEach(function (i) {
                Rc(e, i, t);
              });
            }
          }
          var o0 = {};
          function s0(e, t) {
            {
              var a = Oi.current;
              return a !== null ? (a.push(t), o0) : Gs(e, t);
            }
          }
          function W1(e) {
            if (e !== o0) return Mv(e);
          }
          function Q1() {
            return Oi.current !== null;
          }
          function fD(e) {
            {
              if (e.mode & Ee) {
                if (!R1()) return;
              } else if (
                !O_() ||
                nt !== Hn ||
                (e.tag !== P && e.tag !== xe && e.tag !== $e)
              )
                return;
              if (Oi.current === null) {
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
          function dD(e) {
            e.tag !== Xu &&
              R1() &&
              Oi.current === null &&
              y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
          }
          function Op(e) {
            k1 = e;
          }
          var ai = null,
            gf = null,
            pD = function (e) {
              ai = e;
            };
          function Sf(e) {
            {
              if (ai === null) return e;
              var t = ai(e);
              return t === void 0 ? e : t.current;
            }
          }
          function c0(e) {
            return Sf(e);
          }
          function f0(e) {
            {
              if (ai === null) return e;
              var t = ai(e);
              if (t === void 0) {
                if (e != null && typeof e.render == "function") {
                  var a = Sf(e.render);
                  if (e.render !== a) {
                    var i = { $$typeof: ne, render: a };
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
          function I1(e, t) {
            {
              if (ai === null) return !1;
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
                var f = ai(a);
                if (f !== void 0 && f === ai(i)) return !0;
              }
              return !1;
            }
          }
          function G1(e) {
            {
              if (ai === null || typeof WeakSet != "function") return;
              gf === null && (gf = new WeakSet()), gf.add(e);
            }
          }
          var vD = function (e, t) {
              {
                if (ai === null) return;
                var a = t.staleFamilies,
                  i = t.updatedFamilies;
                ql(),
                  Kl(function () {
                    d0(e.current, i, a);
                  });
              }
            },
            hD = function (e, t) {
              {
                if (e.context !== Aa) return;
                ql(),
                  Kl(function () {
                    Mp(t, e, null, null);
                  });
              }
            };
          function d0(e, t, a) {
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
              if (ai === null)
                throw new Error(
                  "Expected resolveFamily to be set during hot reload.",
                );
              var g = !1,
                E = !1;
              if (h !== null) {
                var _ = ai(h);
                _ !== void 0 &&
                  (a.has(_)
                    ? (E = !0)
                    : t.has(_) && (f === j ? (E = !0) : (g = !0)));
              }
              if (
                (gf !== null &&
                  (gf.has(e) || (i !== null && gf.has(i))) &&
                  (E = !0),
                E && (e._debugNeedsRemount = !0),
                E || g)
              ) {
                var w = ga(e, Re);
                w !== null && Pn(w, e, Re, Dt);
              }
              u !== null && !E && d0(u, t, a), s !== null && d0(s, t, a);
            }
          }
          var mD = function (e, t) {
            {
              var a = new Set(),
                i = new Set(
                  t.map(function (u) {
                    return u.current;
                  }),
                );
              return p0(e.current, i, a), a;
            }
          };
          function p0(e, t, a) {
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
                h ? yD(e, a) : i !== null && p0(i, t, a),
                u !== null && p0(u, t, a);
            }
          }
          function yD(e, t) {
            {
              var a = gD(e, t);
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
          function gD(e, t) {
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
          var v0;
          {
            v0 = !1;
            try {
              var X1 = Object.preventExtensions({});
            } catch {
              v0 = !0;
            }
          }
          function SD(e, t, a, i) {
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
              !v0 &&
                typeof Object.preventExtensions == "function" &&
                Object.preventExtensions(this);
          }
          var ja = function (e, t, a, i) {
            return new SD(e, t, a, i);
          };
          function h0(e) {
            var t = e.prototype;
            return !!(t && t.isReactComponent);
          }
          function ED(e) {
            return (
              typeof e == "function" && !h0(e) && e.defaultProps === void 0
            );
          }
          function CD(e) {
            if (typeof e == "function") return h0(e) ? j : P;
            if (e != null) {
              var t = e.$$typeof;
              if (t === ne) return xe;
              if (t === it) return mt;
            }
            return Z;
          }
          function Es(e, t) {
            var a = e.alternate;
            a === null
              ? ((a = ja(e.tag, t, e.key, e.mode)),
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
                  : { lanes: i.lanes, firstContext: i.firstContext }),
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
                a.type = Sf(e.type);
                break;
              case j:
                a.type = c0(e.type);
                break;
              case xe:
                a.type = f0(e.type);
                break;
            }
            return a;
          }
          function TD(e, t) {
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
                  : { lanes: i.lanes, firstContext: i.firstContext }),
                (e.selfBaseDuration = a.selfBaseDuration),
                (e.treeBaseDuration = a.treeBaseDuration);
            }
            return e;
          }
          function RD(e, t, a) {
            var i;
            return (
              e === Fh
                ? ((i = Ee), t === !0 && ((i |= qe), (i |= Yr)))
                : (i = ge),
              $r && (i |= Ae),
              ja($, null, null, i)
            );
          }
          function m0(e, t, a, i, u, s) {
            var f = Z,
              p = e;
            if (typeof e == "function")
              h0(e) ? ((f = j), (p = c0(p))) : (p = Sf(p));
            else if (typeof e == "string") f = oe;
            else
              e: switch (e) {
                case Da:
                  return oo(a.children, u, s, t);
                case Ui:
                  (f = at), (u |= qe), (u & Ee) !== ge && (u |= Yr);
                  break;
                case pl:
                  return xD(a, u, s, t);
                case Te:
                  return wD(a, u, s, t);
                case tt:
                  return bD(a, u, s, t);
                case Lt:
                  return K1(a, u, s, t);
                case Vt:
                case Xe:
                case vr:
                case zi:
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
                        (f = xe), (p = f0(p));
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
            var E = ja(f, a, t, u);
            return (
              (E.elementType = e),
              (E.type = p),
              (E.lanes = s),
              (E._debugOwner = i),
              E
            );
          }
          function y0(e, t, a) {
            var i = null;
            i = e._owner;
            var u = e.type,
              s = e.key,
              f = e.props,
              p = m0(u, s, f, i, t, a);
            return (p._debugSource = e._source), (p._debugOwner = e._owner), p;
          }
          function oo(e, t, a, i) {
            var u = ja(Ie, e, i, t);
            return (u.lanes = a), u;
          }
          function xD(e, t, a, i) {
            typeof e.id != "string" &&
              y(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof e.id,
              );
            var u = ja(je, e, i, t | Ae);
            return (
              (u.elementType = pl),
              (u.lanes = a),
              (u.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
              u
            );
          }
          function wD(e, t, a, i) {
            var u = ja(We, e, i, t);
            return (u.elementType = Te), (u.lanes = a), u;
          }
          function bD(e, t, a, i) {
            var u = ja(dt, e, i, t);
            return (u.elementType = tt), (u.lanes = a), u;
          }
          function K1(e, t, a, i) {
            var u = ja(Fe, e, i, t);
            (u.elementType = Lt), (u.lanes = a);
            var s = { isHidden: !1 };
            return (u.stateNode = s), u;
          }
          function g0(e, t, a) {
            var i = ja(_e, e, null, t);
            return (i.lanes = a), i;
          }
          function _D() {
            var e = ja(oe, null, null, ge);
            return (e.elementType = "DELETED"), e;
          }
          function DD(e) {
            var t = ja(wt, null, null, ge);
            return (t.stateNode = e), t;
          }
          function S0(e, t, a) {
            var i = e.children !== null ? e.children : [],
              u = ja(J, i, e.key, t);
            return (
              (u.lanes = a),
              (u.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
              }),
              u
            );
          }
          function q1(e, t) {
            return (
              e === null && (e = ja(Z, null, null, ge)),
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
          function kD(e, t, a, i, u) {
            (this.tag = t),
              (this.containerInfo = e),
              (this.pendingChildren = null),
              (this.current = null),
              (this.pingCache = null),
              (this.finishedWork = null),
              (this.timeoutHandle = eg),
              (this.context = null),
              (this.pendingContext = null),
              (this.callbackNode = null),
              (this.callbackPriority = an),
              (this.eventTimes = Wo(Y)),
              (this.expirationTimes = Wo(Dt)),
              (this.pendingLanes = Y),
              (this.suspendedLanes = Y),
              (this.pingedLanes = Y),
              (this.expiredLanes = Y),
              (this.mutableReadLanes = Y),
              (this.finishedLanes = Y),
              (this.entangledLanes = Y),
              (this.entanglements = Wo(Y)),
              (this.identifierPrefix = i),
              (this.onRecoverableError = u),
              (this.mutableSourceEagerHydrationData = null),
              (this.effectDuration = 0),
              (this.passiveEffectDuration = 0);
            {
              this.memoizedUpdaters = new Set();
              for (
                var s = (this.pendingUpdatersLaneMap = []), f = 0;
                f < Ho;
                f++
              )
                s.push(new Set());
            }
            switch (t) {
              case Fh:
                this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
                break;
              case Xu:
                this._debugRootType = a ? "hydrate()" : "render()";
                break;
            }
          }
          function J1(e, t, a, i, u, s, f, p, h, g) {
            var E = new kD(e, t, a, p, h),
              _ = RD(t, s);
            (E.current = _), (_.stateNode = E);
            {
              var w = {
                element: i,
                isDehydrated: a,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
              };
              _.memoizedState = w;
            }
            return Og(_), E;
          }
          var E0 = "18.3.1";
          function ND(e, t, a) {
            var i =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : null;
            return (
              xa(i),
              {
                $$typeof: jr,
                key: i == null ? null : "" + i,
                children: e,
                containerInfo: t,
                implementation: a,
              }
            );
          }
          var C0, T0;
          (C0 = !1), (T0 = {});
          function Z1(e) {
            if (!e) return Aa;
            var t = aa(e),
              a = dw(t);
            if (t.tag === j) {
              var i = t.type;
              if (tl(i)) return bE(t, i, a);
            }
            return a;
          }
          function LD(e, t) {
            {
              var a = aa(e);
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
              var u = oa(a);
              if (u === null) return null;
              if (u.mode & qe) {
                var s = Be(a) || "Component";
                if (!T0[s]) {
                  T0[s] = !0;
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
          function eT(e, t, a, i, u, s, f, p) {
            var h = !1,
              g = null;
            return J1(e, t, h, g, a, i, u, s, f);
          }
          function tT(e, t, a, i, u, s, f, p, h, g) {
            var E = !0,
              _ = J1(a, i, E, e, u, s, f, p, h);
            _.context = Z1(null);
            var w = _.current,
              M = Gr(),
              z = lo(w),
              H = Ql(M, z);
            return (H.callback = t ?? null), Ju(w, H, z), F_(_, z, M), _;
          }
          function Mp(e, t, a, i) {
            cd(t, e);
            var u = t.current,
              s = Gr(),
              f = lo(u);
            pd(f);
            var p = Z1(a);
            t.context === null ? (t.context = p) : (t.pendingContext = p),
              ta &&
                tn !== null &&
                !C0 &&
                ((C0 = !0),
                y(
                  `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
                  Be(tn) || "Unknown",
                ));
            var h = Ql(s, f);
            (h.payload = { element: e }),
              (i = i === void 0 ? null : i),
              i !== null &&
                (typeof i != "function" &&
                  y(
                    "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                    i,
                  ),
                (h.callback = i));
            var g = Ju(u, h, f);
            return g !== null && (Pn(g, u, f, s), Zh(g, u, f)), f;
          }
          function Pm(e) {
            var t = e.current;
            if (!t.child) return null;
            switch (t.child.tag) {
              case oe:
                return t.child.stateNode;
              default:
                return t.child.stateNode;
            }
          }
          function OD(e) {
            switch (e.tag) {
              case $: {
                var t = e.stateNode;
                if (xc(t)) {
                  var a = md(t);
                  P_(t, a);
                }
                break;
              }
              case We: {
                Kl(function () {
                  var u = ga(e, Re);
                  if (u !== null) {
                    var s = Gr();
                    Pn(u, e, Re, s);
                  }
                });
                var i = Re;
                R0(e, i);
                break;
              }
            }
          }
          function nT(e, t) {
            var a = e.memoizedState;
            a !== null &&
              a.dehydrated !== null &&
              (a.retryLane = Kv(a.retryLane, t));
          }
          function R0(e, t) {
            nT(e, t);
            var a = e.alternate;
            a && nT(a, t);
          }
          function MD(e) {
            if (e.tag === We) {
              var t = Bo,
                a = ga(e, t);
              if (a !== null) {
                var i = Gr();
                Pn(a, e, t, i);
              }
              R0(e, t);
            }
          }
          function UD(e) {
            if (e.tag === We) {
              var t = lo(e),
                a = ga(e, t);
              if (a !== null) {
                var i = Gr();
                Pn(a, e, t, i);
              }
              R0(e, t);
            }
          }
          function rT(e) {
            var t = Ov(e);
            return t === null ? null : t.stateNode;
          }
          var aT = function (e) {
            return null;
          };
          function zD(e) {
            return aT(e);
          }
          var iT = function (e) {
            return !1;
          };
          function AD(e) {
            return iT(e);
          }
          var lT = null,
            uT = null,
            oT = null,
            sT = null,
            cT = null,
            fT = null,
            dT = null,
            pT = null,
            vT = null;
          {
            var hT = function (e, t, a) {
                var i = t[a],
                  u = Cn(e) ? e.slice() : Ke({}, e);
                return a + 1 === t.length
                  ? (Cn(u) ? u.splice(i, 1) : delete u[i], u)
                  : ((u[i] = hT(e[i], t, a + 1)), u);
              },
              mT = function (e, t) {
                return hT(e, t, 0);
              },
              yT = function (e, t, a, i) {
                var u = t[i],
                  s = Cn(e) ? e.slice() : Ke({}, e);
                if (i + 1 === t.length) {
                  var f = a[i];
                  (s[f] = s[u]), Cn(s) ? s.splice(u, 1) : delete s[u];
                } else s[u] = yT(e[u], t, a, i + 1);
                return s;
              },
              gT = function (e, t, a) {
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
                return yT(e, t, a, 0);
              },
              ST = function (e, t, a, i) {
                if (a >= t.length) return i;
                var u = t[a],
                  s = Cn(e) ? e.slice() : Ke({}, e);
                return (s[u] = ST(e[u], t, a + 1, i)), s;
              },
              ET = function (e, t, a) {
                return ST(e, t, 0, a);
              },
              x0 = function (e, t) {
                for (var a = e.memoizedState; a !== null && t > 0; )
                  (a = a.next), t--;
                return a;
              };
            (lT = function (e, t, a, i) {
              var u = x0(e, t);
              if (u !== null) {
                var s = ET(u.memoizedState, a, i);
                (u.memoizedState = s),
                  (u.baseState = s),
                  (e.memoizedProps = Ke({}, e.memoizedProps));
                var f = ga(e, Re);
                f !== null && Pn(f, e, Re, Dt);
              }
            }),
              (uT = function (e, t, a) {
                var i = x0(e, t);
                if (i !== null) {
                  var u = mT(i.memoizedState, a);
                  (i.memoizedState = u),
                    (i.baseState = u),
                    (e.memoizedProps = Ke({}, e.memoizedProps));
                  var s = ga(e, Re);
                  s !== null && Pn(s, e, Re, Dt);
                }
              }),
              (oT = function (e, t, a, i) {
                var u = x0(e, t);
                if (u !== null) {
                  var s = gT(u.memoizedState, a, i);
                  (u.memoizedState = s),
                    (u.baseState = s),
                    (e.memoizedProps = Ke({}, e.memoizedProps));
                  var f = ga(e, Re);
                  f !== null && Pn(f, e, Re, Dt);
                }
              }),
              (sT = function (e, t, a) {
                (e.pendingProps = ET(e.memoizedProps, t, a)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var i = ga(e, Re);
                i !== null && Pn(i, e, Re, Dt);
              }),
              (cT = function (e, t) {
                (e.pendingProps = mT(e.memoizedProps, t)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var a = ga(e, Re);
                a !== null && Pn(a, e, Re, Dt);
              }),
              (fT = function (e, t, a) {
                (e.pendingProps = gT(e.memoizedProps, t, a)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps);
                var i = ga(e, Re);
                i !== null && Pn(i, e, Re, Dt);
              }),
              (dT = function (e) {
                var t = ga(e, Re);
                t !== null && Pn(t, e, Re, Dt);
              }),
              (pT = function (e) {
                aT = e;
              }),
              (vT = function (e) {
                iT = e;
              });
          }
          function jD(e) {
            var t = oa(e);
            return t === null ? null : t.stateNode;
          }
          function FD(e) {
            return null;
          }
          function HD() {
            return tn;
          }
          function VD(e) {
            var t = e.findFiberByHostInstance,
              a = S.ReactCurrentDispatcher;
            return sd({
              bundleType: e.bundleType,
              version: e.version,
              rendererPackageName: e.rendererPackageName,
              rendererConfig: e.rendererConfig,
              overrideHookState: lT,
              overrideHookStateDeletePath: uT,
              overrideHookStateRenamePath: oT,
              overrideProps: sT,
              overridePropsDeletePath: cT,
              overridePropsRenamePath: fT,
              setErrorHandler: pT,
              setSuspenseHandler: vT,
              scheduleUpdate: dT,
              currentDispatcherRef: a,
              findHostInstanceByFiber: jD,
              findFiberByHostInstance: t || FD,
              findHostInstancesForRefresh: mD,
              scheduleRefresh: vD,
              scheduleRoot: hD,
              setRefreshHandler: pD,
              getCurrentFiber: HD,
              reconcilerVersion: E0,
            });
          }
          var CT =
            typeof reportError == "function"
              ? reportError
              : function (e) {
                  console.error(e);
                };
          function w0(e) {
            this._internalRoot = e;
          }
          ($m.prototype.render = w0.prototype.render =
            function (e) {
              var t = this._internalRoot;
              if (t === null)
                throw new Error("Cannot update an unmounted root.");
              {
                typeof arguments[1] == "function"
                  ? y(
                      "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().",
                    )
                  : Ym(arguments[1])
                    ? y(
                        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.",
                      )
                    : typeof arguments[1] < "u" &&
                      y(
                        "You passed a second argument to root.render(...) but it only accepts one argument.",
                      );
                var a = t.containerInfo;
                if (a.nodeType !== nn) {
                  var i = rT(t.current);
                  i &&
                    i.parentNode !== a &&
                    y(
                      "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.",
                    );
                }
              }
              Mp(e, t, null, null);
            }),
            ($m.prototype.unmount = w0.prototype.unmount =
              function () {
                typeof arguments[0] == "function" &&
                  y(
                    "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().",
                  );
                var e = this._internalRoot;
                if (e !== null) {
                  this._internalRoot = null;
                  var t = e.containerInfo;
                  M1() &&
                    y(
                      "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.",
                    ),
                    Kl(function () {
                      Mp(null, e, null, null);
                    }),
                    CE(t);
                }
              });
          function BD(e, t) {
            if (!Ym(e))
              throw new Error(
                "createRoot(...): Target container is not a DOM element.",
              );
            TT(e);
            var a = !1,
              i = !1,
              u = "",
              s = CT;
            t != null &&
              (t.hydrate
                ? F(
                    "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.",
                  )
                : typeof t == "object" &&
                  t !== null &&
                  t.$$typeof === li &&
                  y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
              t.unstable_strictMode === !0 && (a = !0),
              t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
              t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
              t.transitionCallbacks !== void 0 && t.transitionCallbacks);
            var f = eT(e, Fh, null, a, i, u, s);
            Lh(f.current, e);
            var p = e.nodeType === nn ? e.parentNode : e;
            return Hd(p), new w0(f);
          }
          function $m(e) {
            this._internalRoot = e;
          }
          function PD(e) {
            e && _y(e);
          }
          $m.prototype.unstable_scheduleHydration = PD;
          function $D(e, t, a) {
            if (!Ym(e))
              throw new Error(
                "hydrateRoot(...): Target container is not a DOM element.",
              );
            TT(e),
              t === void 0 &&
                y(
                  "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)",
                );
            var i = a ?? null,
              u = (a != null && a.hydratedSources) || null,
              s = !1,
              f = !1,
              p = "",
              h = CT;
            a != null &&
              (a.unstable_strictMode === !0 && (s = !0),
              a.identifierPrefix !== void 0 && (p = a.identifierPrefix),
              a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
            var g = tT(t, null, e, Fh, i, s, f, p, h);
            if ((Lh(g.current, e), Hd(e), u))
              for (var E = 0; E < u.length; E++) {
                var _ = u[E];
                Iw(g, _);
              }
            return new $m(g);
          }
          function Ym(e) {
            return !!(
              e &&
              (e.nodeType === hr ||
                e.nodeType === Oa ||
                e.nodeType === yl ||
                !ct)
            );
          }
          function Up(e) {
            return !!(
              e &&
              (e.nodeType === hr ||
                e.nodeType === Oa ||
                e.nodeType === yl ||
                (e.nodeType === nn &&
                  e.nodeValue === " react-mount-point-unstable "))
            );
          }
          function TT(e) {
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
          var YD = S.ReactCurrentOwner,
            RT;
          RT = function (e) {
            if (e._reactRootContainer && e.nodeType !== nn) {
              var t = rT(e._reactRootContainer.current);
              t &&
                t.parentNode !== e &&
                y(
                  "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.",
                );
            }
            var a = !!e._reactRootContainer,
              i = b0(e),
              u = !!(i && Iu(i));
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
          function b0(e) {
            return e
              ? e.nodeType === Oa
                ? e.documentElement
                : e.firstChild
              : null;
          }
          function xT() {}
          function WD(e, t, a, i, u) {
            if (u) {
              if (typeof i == "function") {
                var s = i;
                i = function () {
                  var w = Pm(f);
                  s.call(w);
                };
              }
              var f = tT(t, i, e, Xu, null, !1, !1, "", xT);
              (e._reactRootContainer = f), Lh(f.current, e);
              var p = e.nodeType === nn ? e.parentNode : e;
              return Hd(p), Kl(), f;
            } else {
              for (var h; (h = e.lastChild); ) e.removeChild(h);
              if (typeof i == "function") {
                var g = i;
                i = function () {
                  var w = Pm(E);
                  g.call(w);
                };
              }
              var E = eT(e, Xu, null, !1, !1, "", xT);
              (e._reactRootContainer = E), Lh(E.current, e);
              var _ = e.nodeType === nn ? e.parentNode : e;
              return (
                Hd(_),
                Kl(function () {
                  Mp(t, E, a, i);
                }),
                E
              );
            }
          }
          function QD(e, t) {
            e !== null &&
              typeof e != "function" &&
              y(
                "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                t,
                e,
              );
          }
          function Wm(e, t, a, i, u) {
            RT(a), QD(u === void 0 ? null : u, "render");
            var s = a._reactRootContainer,
              f;
            if (!s) f = WD(a, t, e, u, i);
            else {
              if (((f = s), typeof u == "function")) {
                var p = u;
                u = function () {
                  var h = Pm(f);
                  p.call(h);
                };
              }
              Mp(t, f, e, u);
            }
            return Pm(f);
          }
          var wT = !1;
          function ID(e) {
            {
              wT ||
                ((wT = !0),
                y(
                  "findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                ));
              var t = YD.current;
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
                : LD(e, "findDOMNode");
          }
          function GD(e, t, a) {
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
            return Wm(null, e, t, !0, a);
          }
          function XD(e, t, a) {
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
            return Wm(null, e, t, !1, a);
          }
          function KD(e, t, a, i) {
            if (
              (y(
                "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
              ),
              !Up(a))
            )
              throw new Error("Target container is not a DOM element.");
            if (e == null || !Oo(e))
              throw new Error(
                "parentComponent must be a valid React Component",
              );
            return Wm(e, t, a, !1, i);
          }
          var bT = !1;
          function qD(e) {
            if (
              (bT ||
                ((bT = !0),
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
                var a = b0(e),
                  i = a && !Iu(a);
                i &&
                  y(
                    "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.",
                  );
              }
              return (
                Kl(function () {
                  Wm(null, null, e, !1, function () {
                    (e._reactRootContainer = null), CE(e);
                  });
                }),
                !0
              );
            } else {
              {
                var u = b0(e),
                  s = !!(u && Iu(u)),
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
          Mu(OD),
            wy(MD),
            bc(UD),
            Zv(da),
            eh(qn),
            (typeof Map != "function" ||
              Map.prototype == null ||
              typeof Map.prototype.forEach != "function" ||
              typeof Set != "function" ||
              Set.prototype == null ||
              typeof Set.prototype.clear != "function" ||
              typeof Set.prototype.forEach != "function") &&
              y(
                "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
              ),
            kv(ZR),
            $s(r0, $_, Kl);
          function JD(e, t) {
            var a =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : null;
            if (!Ym(t))
              throw new Error("Target container is not a DOM element.");
            return ND(e, t, null, a);
          }
          function ZD(e, t, a, i) {
            return KD(e, t, a, i);
          }
          var _0 = {
            usingClientEntryPoint: !1,
            Events: [Iu, Xc, Oh, Ps, ko, r0],
          };
          function ek(e, t) {
            return (
              _0.usingClientEntryPoint ||
                y(
                  'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
                ),
              BD(e, t)
            );
          }
          function tk(e, t, a) {
            return (
              _0.usingClientEntryPoint ||
                y(
                  'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
                ),
              $D(e, t, a)
            );
          }
          function nk(e) {
            return (
              M1() &&
                y(
                  "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.",
                ),
              Kl(e)
            );
          }
          var rk = VD({
            findFiberByHostInstance: is,
            bundleType: 1,
            version: E0,
            rendererPackageName: "react-dom",
          });
          if (
            !rk &&
            gn &&
            window.top === window.self &&
            ((navigator.userAgent.indexOf("Chrome") > -1 &&
              navigator.userAgent.indexOf("Edge") === -1) ||
              navigator.userAgent.indexOf("Firefox") > -1)
          ) {
            var _T = window.location.protocol;
            /^(https?|file):$/.test(_T) &&
              console.info(
                "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
                  (_T === "file:"
                    ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
                    : ""),
                "font-weight:bold",
              );
          }
          (Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _0),
            (Ra.createPortal = JD),
            (Ra.createRoot = ek),
            (Ra.findDOMNode = ID),
            (Ra.flushSync = nk),
            (Ra.hydrate = GD),
            (Ra.hydrateRoot = tk),
            (Ra.render = XD),
            (Ra.unmountComponentAtNode = qD),
            (Ra.unstable_batchedUpdates = r0),
            (Ra.unstable_renderSubtreeIntoContainer = ZD),
            (Ra.version = E0),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                new Error(),
              );
        })()),
    Ra
  );
}
function nR() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  ) {
    if (process.env.NODE_ENV !== "production") throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nR);
    } catch (v) {
      console.error(v);
    }
  }
}
process.env.NODE_ENV === "production" ? (nR(), vk()) : hk();
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function U0() {
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
var zT;
(function (v) {
  (v.Pop = "POP"), (v.Push = "PUSH"), (v.Replace = "REPLACE");
})(zT || (zT = {}));
function hn(v, T) {
  if (v === !1 || v === null || typeof v > "u") throw new Error(T);
}
function Vp(v, T) {
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
function rR(v) {
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
var AT;
(function (v) {
  (v.data = "data"),
    (v.deferred = "deferred"),
    (v.redirect = "redirect"),
    (v.error = "error");
})(AT || (AT = {}));
function jT(v, T) {
  typeof v == "string" && (v = { path: v, caseSensitive: !1, end: !0 });
  let [S, D] = mk(v.path, v.caseSensitive, v.end),
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
function mk(v, T, S) {
  T === void 0 && (T = !1),
    S === void 0 && (S = !0),
    Vp(
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
            D.push({ paramName: K, isOptional: P != null }),
            P ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    v.endsWith("*")
      ? (D.push({ paramName: "*" }),
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
function yk(v, T) {
  T === void 0 && (T = "/");
  let {
    pathname: S,
    search: D = "",
    hash: A = "",
  } = typeof v == "string" ? rR(v) : v;
  return {
    pathname: S ? (S.startsWith("/") ? S : gk(S, T)) : T,
    search: Ek(D),
    hash: Ck(A),
  };
}
function gk(v, T) {
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
function Sk(v) {
  return v.filter(
    (T, S) => S === 0 || (T.route.path && T.route.path.length > 0),
  );
}
function aR(v, T) {
  let S = Sk(v);
  return T
    ? S.map((D, A) => (A === S.length - 1 ? D.pathname : D.pathnameBase))
    : S.map((D) => D.pathnameBase);
}
function iR(v, T, S, D) {
  D === void 0 && (D = !1);
  let A;
  typeof v == "string"
    ? (A = rR(v))
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
  let P = yk(A, K),
    j = y && y !== "/" && y.endsWith("/"),
    Z = (F || y === ".") && S.endsWith("/");
  return !P.pathname.endsWith("/") && (j || Z) && (P.pathname += "/"), P;
}
const V0 = (v) => v.join("/").replace(/\/\/+/g, "/"),
  Ek = (v) => (!v || v === "?" ? "" : v.startsWith("?") ? v : "?" + v),
  Ck = (v) => (!v || v === "#" ? "" : v.startsWith("#") ? v : "#" + v),
  lR = ["post", "put", "patch", "delete"];
new Set(lR);
const Tk = ["get", ...lR];
new Set(Tk);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function A0() {
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
const Jm = Qe.createContext(null);
process.env.NODE_ENV !== "production" && (Jm.displayName = "DataRouter");
const uR = Qe.createContext(null);
process.env.NODE_ENV !== "production" && (uR.displayName = "DataRouterState");
const Rk = Qe.createContext(null);
process.env.NODE_ENV !== "production" && (Rk.displayName = "Await");
const Zl = Qe.createContext(null);
process.env.NODE_ENV !== "production" && (Zl.displayName = "Navigation");
const B0 = Qe.createContext(null);
process.env.NODE_ENV !== "production" && (B0.displayName = "Location");
const xf = Qe.createContext({ outlet: null, matches: [], isDataRoute: !1 });
process.env.NODE_ENV !== "production" && (xf.displayName = "Route");
const xk = Qe.createContext(null);
process.env.NODE_ENV !== "production" && (xk.displayName = "RouteError");
function wk(v, T) {
  let { relative: S } = T === void 0 ? {} : T;
  P0() ||
    (process.env.NODE_ENV !== "production"
      ? hn(
          !1,
          "useHref() may be used only in the context of a <Router> component.",
        )
      : hn(!1));
  let { basename: D, navigator: A } = Qe.useContext(Zl),
    { hash: F, pathname: y, search: K } = Pp(v, { relative: S }),
    P = y;
  return (
    D !== "/" && (P = y === "/" ? D : V0([D, y])),
    A.createHref({ pathname: P, search: K, hash: F })
  );
}
function P0() {
  return Qe.useContext(B0) != null;
}
function Bp() {
  return (
    P0() ||
      (process.env.NODE_ENV !== "production"
        ? hn(
            !1,
            "useLocation() may be used only in the context of a <Router> component.",
          )
        : hn(!1)),
    Qe.useContext(B0).location
  );
}
const oR =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function sR(v) {
  Qe.useContext(Zl).static || Qe.useLayoutEffect(v);
}
function bk() {
  let { isDataRoute: v } = Qe.useContext(xf);
  return v ? Lk() : _k();
}
function _k() {
  P0() ||
    (process.env.NODE_ENV !== "production"
      ? hn(
          !1,
          "useNavigate() may be used only in the context of a <Router> component.",
        )
      : hn(!1));
  let v = Qe.useContext(Jm),
    { basename: T, future: S, navigator: D } = Qe.useContext(Zl),
    { matches: A } = Qe.useContext(xf),
    { pathname: F } = Bp(),
    y = JSON.stringify(aR(A, S.v7_relativeSplatPath)),
    K = Qe.useRef(!1);
  return (
    sR(() => {
      K.current = !0;
    }),
    Qe.useCallback(
      function (j, Z) {
        if (
          (Z === void 0 && (Z = {}),
          process.env.NODE_ENV !== "production" && Vp(K.current, oR),
          !K.current)
        )
          return;
        if (typeof j == "number") {
          D.go(j);
          return;
        }
        let $ = iR(j, JSON.parse(y), F, Z.relative === "path");
        v == null &&
          T !== "/" &&
          ($.pathname = $.pathname === "/" ? T : V0([T, $.pathname])),
          (Z.replace ? D.replace : D.push)($, Z.state, Z);
      },
      [T, D, y, F, v],
    )
  );
}
function Pp(v, T) {
  let { relative: S } = T === void 0 ? {} : T,
    { future: D } = Qe.useContext(Zl),
    { matches: A } = Qe.useContext(xf),
    { pathname: F } = Bp(),
    y = JSON.stringify(aR(A, D.v7_relativeSplatPath));
  return Qe.useMemo(() => iR(v, JSON.parse(y), F, S === "path"), [v, y, F, S]);
}
var cR = (function (v) {
    return (
      (v.UseBlocker = "useBlocker"),
      (v.UseRevalidator = "useRevalidator"),
      (v.UseNavigateStable = "useNavigate"),
      v
    );
  })(cR || {}),
  $0 = (function (v) {
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
  })($0 || {});
function fR(v) {
  return (
    v +
    " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."
  );
}
function Dk(v) {
  let T = Qe.useContext(Jm);
  return (
    T || (process.env.NODE_ENV !== "production" ? hn(!1, fR(v)) : hn(!1)), T
  );
}
function kk(v) {
  let T = Qe.useContext(xf);
  return (
    T || (process.env.NODE_ENV !== "production" ? hn(!1, fR(v)) : hn(!1)), T
  );
}
function dR(v) {
  let T = kk(v),
    S = T.matches[T.matches.length - 1];
  return (
    S.route.id ||
      (process.env.NODE_ENV !== "production"
        ? hn(!1, v + ' can only be used on routes that contain a unique "id"')
        : hn(!1)),
    S.route.id
  );
}
function Nk() {
  return dR($0.UseRouteId);
}
function Lk() {
  let { router: v } = Dk(cR.UseNavigateStable),
    T = dR($0.UseNavigateStable),
    S = Qe.useRef(!1);
  return (
    sR(() => {
      S.current = !0;
    }),
    Qe.useCallback(
      function (A, F) {
        F === void 0 && (F = {}),
          process.env.NODE_ENV !== "production" && Vp(S.current, oR),
          S.current &&
            (typeof A == "number"
              ? v.navigate(A)
              : v.navigate(A, A0({ fromRouteId: T }, F)));
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
 */ function Rf() {
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
function Y0(v, T) {
  if (v == null) return {};
  var S = {},
    D = Object.keys(v),
    A,
    F;
  for (F = 0; F < D.length; F++)
    (A = D[F]), !(T.indexOf(A) >= 0) && (S[A] = v[A]);
  return S;
}
const Gm = "get",
  Xm = "application/x-www-form-urlencoded";
function Zm(v) {
  return v != null && typeof v.tagName == "string";
}
function Ok(v) {
  return Zm(v) && v.tagName.toLowerCase() === "button";
}
function Mk(v) {
  return Zm(v) && v.tagName.toLowerCase() === "form";
}
function Uk(v) {
  return Zm(v) && v.tagName.toLowerCase() === "input";
}
function zk(v) {
  return !!(v.metaKey || v.altKey || v.ctrlKey || v.shiftKey);
}
function Ak(v, T) {
  return v.button === 0 && (!T || T === "_self") && !zk(v);
}
let Im = null;
function jk() {
  if (Im === null)
    try {
      new FormData(document.createElement("form"), 0), (Im = !1);
    } catch {
      Im = !0;
    }
  return Im;
}
const Fk = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function L0(v) {
  return v != null && !Fk.has(v)
    ? (process.env.NODE_ENV !== "production" &&
        Vp(
          !1,
          '"' +
            v +
            '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' +
            ('and will default to "' + Xm + '"'),
        ),
      null)
    : v;
}
function Hk(v, T) {
  let S, D, A, F, y;
  if (Mk(v)) {
    let K = v.getAttribute("action");
    (D = K ? Tf(K, T) : null),
      (S = v.getAttribute("method") || Gm),
      (A = L0(v.getAttribute("enctype")) || Xm),
      (F = new FormData(v));
  } else if (Ok(v) || (Uk(v) && (v.type === "submit" || v.type === "image"))) {
    let K = v.form;
    if (K == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let P = v.getAttribute("formaction") || K.getAttribute("action");
    if (
      ((D = P ? Tf(P, T) : null),
      (S = v.getAttribute("formmethod") || K.getAttribute("method") || Gm),
      (A =
        L0(v.getAttribute("formenctype")) ||
        L0(K.getAttribute("enctype")) ||
        Xm),
      (F = new FormData(K, v)),
      !jk())
    ) {
      let { name: j, type: Z, value: $ } = v;
      if (Z === "image") {
        let J = j ? j + "." : "";
        F.append(J + "x", "0"), F.append(J + "y", "0");
      } else j && F.append(j, $);
    }
  } else {
    if (Zm(v))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (S = Gm), (D = null), (A = Xm), (y = v);
  }
  return (
    F && A === "text/plain" && ((y = F), (F = void 0)),
    { action: D, method: S.toLowerCase(), encType: A, formData: F, body: y }
  );
}
const Vk = [
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
  Bk = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Pk = [
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
  $k = "6";
try {
  window.__reactRouterVersion = $k;
} catch {}
const pR = Qe.createContext({ isTransitioning: !1 });
process.env.NODE_ENV !== "production" && (pR.displayName = "ViewTransition");
const Yk = Qe.createContext(new Map());
process.env.NODE_ENV !== "production" && (Yk.displayName = "Fetchers");
process.env.NODE_ENV;
const Wk =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  W0 = Qe.forwardRef(function (T, S) {
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
      J = Y0(T, Vk),
      { basename: oe } = Qe.useContext(Zl),
      _e,
      Ie = !1;
    if (typeof j == "string" && Qk.test(j) && ((_e = j), Wk))
      try {
        let xe = new URL(window.location.href),
          je = j.startsWith("//") ? new URL(xe.protocol + j) : new URL(j),
          We = Tf(je.pathname, oe);
        je.origin === xe.origin && We != null
          ? (j = We + je.search + je.hash)
          : (Ie = !0);
      } catch {
        process.env.NODE_ENV !== "production" &&
          Vp(
            !1,
            '<Link to="' +
              j +
              '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.',
          );
      }
    let at = wk(j, { relative: A }),
      kt = Kk(j, {
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
    return Qe.createElement(
      "a",
      Rf({}, J, {
        href: _e || at,
        onClick: Ie || F ? D : ke,
        ref: S,
        target: P,
      }),
    );
  });
process.env.NODE_ENV !== "production" && (W0.displayName = "Link");
const Ik = Qe.forwardRef(function (T, S) {
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
    $ = Y0(T, Bk),
    J = Pp(P, { relative: $.relative }),
    oe = Bp(),
    _e = Qe.useContext(uR),
    { navigator: Ie, basename: at } = Qe.useContext(Zl),
    kt = _e != null && nN(J) && j === !0,
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
    Gt = { isActive: mt, isPending: $e, isTransitioning: kt },
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
  return Qe.createElement(
    W0,
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
process.env.NODE_ENV !== "production" && (Ik.displayName = "NavLink");
const Gk = Qe.forwardRef((v, T) => {
  let {
      fetcherKey: S,
      navigate: D,
      reloadDocument: A,
      replace: F,
      state: y,
      method: K = Gm,
      action: P,
      onSubmit: j,
      relative: Z,
      preventScrollReset: $,
      unstable_viewTransition: J,
    } = v,
    oe = Y0(v, Pk),
    _e = eN(),
    Ie = tN(P, { relative: Z }),
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
  return Qe.createElement(
    "form",
    Rf({ ref: T, method: at, action: Ie, onSubmit: A ? j : kt }, oe),
  );
});
process.env.NODE_ENV !== "production" && (Gk.displayName = "Form");
process.env.NODE_ENV;
var Km;
(function (v) {
  (v.UseScrollRestoration = "useScrollRestoration"),
    (v.UseSubmit = "useSubmit"),
    (v.UseSubmitFetcher = "useSubmitFetcher"),
    (v.UseFetcher = "useFetcher"),
    (v.useViewTransitionState = "useViewTransitionState");
})(Km || (Km = {}));
var FT;
(function (v) {
  (v.UseFetcher = "useFetcher"),
    (v.UseFetchers = "useFetchers"),
    (v.UseScrollRestoration = "useScrollRestoration");
})(FT || (FT = {}));
function Xk(v) {
  return (
    v +
    " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."
  );
}
function vR(v) {
  let T = Qe.useContext(Jm);
  return (
    T || (process.env.NODE_ENV !== "production" ? hn(!1, Xk(v)) : hn(!1)), T
  );
}
function Kk(v, T) {
  let {
      target: S,
      replace: D,
      state: A,
      preventScrollReset: F,
      relative: y,
      unstable_viewTransition: K,
    } = T === void 0 ? {} : T,
    P = bk(),
    j = Bp(),
    Z = Pp(v, { relative: y });
  return Qe.useCallback(
    ($) => {
      if (Ak($, S)) {
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
function qk() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.",
    );
}
let Jk = 0,
  Zk = () => "__" + String(++Jk) + "__";
function eN() {
  let { router: v } = vR(Km.UseSubmit),
    { basename: T } = Qe.useContext(Zl),
    S = Nk();
  return Qe.useCallback(
    function (D, A) {
      A === void 0 && (A = {}), qk();
      let { action: F, method: y, encType: K, formData: P, body: j } = Hk(D, T);
      if (A.navigate === !1) {
        let Z = A.fetcherKey || Zk();
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
function tN(v, T) {
  let { relative: S } = T === void 0 ? {} : T,
    { basename: D } = Qe.useContext(Zl),
    A = Qe.useContext(xf);
  A ||
    (process.env.NODE_ENV !== "production"
      ? hn(!1, "useFormAction must be used inside a RouteContext")
      : hn(!1));
  let [F] = A.matches.slice(-1),
    y = Rf({}, Pp(v || ".", { relative: S })),
    K = Bp();
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
    D !== "/" && (y.pathname = y.pathname === "/" ? D : V0([D, y.pathname])),
    z0(y)
  );
}
function nN(v, T) {
  T === void 0 && (T = {});
  let S = Qe.useContext(pR);
  S == null &&
    (process.env.NODE_ENV !== "production"
      ? hn(
          !1,
          "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
        )
      : hn(!1));
  let { basename: D } = vR(Km.useViewTransitionState),
    A = Pp(v, { relative: T.relative });
  if (!S.isTransitioning) return !1;
  let F = Tf(S.currentLocation.pathname, D) || S.currentLocation.pathname,
    y = Tf(S.nextLocation.pathname, D) || S.nextLocation.pathname;
  return jT(A.pathname, y) != null || jT(A.pathname, F) != null;
}
const Q0 = ({
    href: v,
    text: T,
    inApp: S = !0,
    isDisabled: D = !1,
    variant: A = "primary",
    iconAfter: F = Hp.EMPTY,
  }) => {
    const y = F && Ts[F];
    return D
      ? te.jsx("span", {
          className: "torres-link torres-link--disabled",
          children: T,
        })
      : te.jsxs(W0, {
          to: v,
          target: S ? "_self" : "_blank",
          className: `torres-link torres-link--${A}`,
          children: [T, y && A === "secondary" && te.jsx(y, {})],
        });
  },
  Cs = ({ text: v, size: T = "large", align: S = "left" }) => {
    const D = Or("torres-subtitle", {
      [`torres-subtitle--${T}`]: T,
      [`torres-subtitle--${S}`]: S,
    });
    return te.jsx("h3", { className: D, children: v });
  },
  hR = ({ text: v, size: T = "large", align: S = "left" }) => {
    const D = Or("torres-title", {
      [`torres-title--${T}`]: T,
      [`torres-title--${S}`]: S,
    });
    return te.jsx("h1", { className: D, children: v });
  },
  rN = ({ text: v, size: T = "large", align: S = "left" }) => {
    const D = Or("torres-paragraph", {
      [`torres-paragraph--${T}`]: T,
      [`torres-paragraph--${S}`]: S,
    });
    return te.jsx("p", { className: D, children: v });
  },
  aN = ({ image: v, title: T, toRedirect: S }) =>
    te.jsxs("div", {
      className: "torres-banner-one",
      children: [
        te.jsx(qm, { ...v }),
        te.jsxs("div", {
          className: "torres-banner-one__content",
          children: [
            te.jsx(Cs, { text: T }),
            te.jsx(Q0, { ...S, variant: "secondary" }),
          ],
        }),
      ],
    }),
  iN = ({ image: v, title: T, toRedirect: S }) =>
    te.jsxs("div", {
      className: "torres-banner-two",
      children: [
        te.jsx(qm, { ...v }),
        te.jsxs("div", {
          className: "torres-banner-two__content",
          children: [
            te.jsx(Cs, { text: T }),
            te.jsx(Q0, { ...S, variant: "secondary" }),
          ],
        }),
      ],
    }),
  lN = ({ image: v, price: T, name: S, priceList: D, action: A }) => {
    const F = ((T - D) / T) * 100;
    return te.jsxs("div", {
      className: "torres-card-product",
      onClick: A,
      children: [
        te.jsx("div", {
          className: "torres-card-product__container-tag",
          children: D !== T && te.jsx(eR, { text: `-${F.toFixed(0)}%` }),
        }),
        te.jsx(qm, { url: v.url, alt: v.alt, aspectRatio: v.aspectRatio }),
        te.jsx("div", {
          className: "torres-card-product__container-name",
          children: te.jsx("span", {
            className: "torres-card-product__name",
            children: S,
          }),
        }),
        te.jsxs("div", {
          className: "torres-card-product__container-prices",
          children: [
            te.jsx(M0, { value: D }),
            D !== T && te.jsx(M0, { value: T, through: !0 }),
          ],
        }),
      ],
    });
  },
  mR = ({
    items: v,
    onSelect: T,
    multiple: S,
    group: D,
    wrapContent: A = !1,
  }) => {
    const [F, y] = Lr.useState(null),
      K = Or("torres-group-button-chip", {
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
      Lr.useEffect(
        () =>
          Array.isArray(F)
            ? T && T({ group: D, values: F })
            : T && T({ group: D, values: F ? [F] : [] }),
        [F],
      ),
      Lr.useEffect(() => {
        var j;
        y(
          S
            ? v.filter((Z) => Z.isSelected).map((Z) => Z.value)
            : (((j = v.find((Z) => Z.isSelected)) == null ? void 0 : j.value) ??
                null),
        );
      }, [v, S]),
      te.jsx("div", {
        className: K,
        children: v.map((j) =>
          te.jsx(
            KT,
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
  yR = ({
    items: v,
    onSelect: T,
    multiple: S,
    group: D,
    wrapContent: A = !1,
  }) => {
    const [F, y] = Lr.useState(null),
      K = Or("torres-group-button-color", {
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
      Lr.useEffect(
        () =>
          Array.isArray(F)
            ? T && T({ group: D, values: F })
            : T && T({ group: D, values: F ? [F] : [] }),
        [F],
      ),
      Lr.useEffect(() => {
        var j;
        y(
          S
            ? v.filter((Z) => Z.isSelected).map((Z) => Z.id)
            : (((j = v.find((Z) => Z.isSelected)) == null ? void 0 : j.id) ??
                null),
        );
      }, [v, S]),
      te.jsx("div", {
        className: K,
        children: v.map((j) =>
          te.jsx(
            qT,
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
  j0 = ({
    items: v,
    onSelect: T,
    group: S,
    multiple: D,
    orientation: A = "horizontal",
    wrapContent: F = !0,
  }) => {
    const [y, K] = Lr.useState(null),
      P = Or("torres-group-link-next", {
        "torres-group-link-next--wrapContent": F,
        "torres-group-link-next--noWrapContent": !F,
      }),
      j = Or("torres-group-link-next", {
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
      Lr.useEffect(
        () =>
          Array.isArray(y)
            ? T && T({ group: S, values: y })
            : T && T({ group: S, values: y ? [y] : [] }),
        [y],
      ),
      Lr.useEffect(() => {
        var $;
        K(
          D
            ? v.filter((J) => J.isSelected).map((J) => J.value)
            : ((($ = v.find((J) => J.isSelected)) == null ? void 0 : $.value) ??
                null),
        );
      }, [v, D]),
      te.jsx("div", {
        className: P,
        children: te.jsx("div", {
          className: j,
          children: v.map(($) =>
            te.jsx(
              ZT,
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
var F0;
(function (v) {
  (v.AND = "and"), (v.OR = "or");
})(F0 || (F0 = {}));
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
const uN = ({ config: v, change: T }) => {
  const [S, D] = Lr.useState([]),
    A = Or("TorresFilter"),
    F = () => {
      T && T({ filters: S, boolOp: F0.AND });
    },
    y = (K) => {
      if (K.values.length > 0) {
        const P = S.findIndex((Z) => Z.name === K.group);
        let j;
        P !== -1
          ? (j = S.map((Z, $) => ($ === P ? { ...Z, value: K.values } : Z)))
          : (j = [...S, { name: K.group, value: K.values }]),
          D(j);
      } else {
        const P = S.filter((j) => j.name !== K.group);
        D(P);
      }
    };
  if (
    (Lr.useEffect(() => {
      F();
    }, [S]),
    !v)
  ) {
    console.log("Config is not defined", v);
    return;
  }
  return te.jsxs("div", {
    className: A,
    children: [
      te.jsxs("div", {
        className: "TorresFilter__container-header",
        children: [
          te.jsx(hR, { size: "medium", text: "Filter" }),
          te.jsx(JT, { icon: Hp.CLOSE }),
        ],
      }),
      v.category
        ? te.jsxs("div", {
            className: "TorresFilter__container-item",
            children: [
              te.jsx(Cs, { size: "small", text: v.category.label }),
              te.jsx(j0, {
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
        ? te.jsxs("div", {
            className: "TorresFilter__container-item",
            children: [
              te.jsx(Cs, { size: "medium", text: v.color.label }),
              te.jsx(yR, {
                group: "color",
                items: v.color.items ?? [],
                multiple: v.color.type === Cf.ITEMS,
                onSelect: y,
              }),
            ],
          })
        : null,
      v.size
        ? te.jsxs("div", {
            className: "TorresFilter__container-item",
            children: [
              te.jsx(Cs, { size: "medium", text: v.size.label }),
              te.jsx(mR, {
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
        ? te.jsxs("div", {
            className: "TorresFilter__container-item",
            children: [
              te.jsx(Cs, { size: "medium", text: v.style.label }),
              te.jsx(j0, {
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
exports.ArrowWithTailBottom = PT;
exports.ArrowWithTailLeft = BT;
exports.ArrowWithTailRight = $T;
exports.ArrowWithTailTop = WT;
exports.BUTTON_TYPES = H0;
exports.BUTTON_VARIANTS = Fp;
exports.CURRENCY_SYMBOLS = GT;
exports.Close = QT;
exports.DIVIDER_VALUE_PRICE = IT;
exports.ICONS_NAMES = Hp;
exports.IMAGE_RATIO_ASPECTS = XT;
exports.TorresBannerOne = aN;
exports.TorresBannerTwo = iN;
exports.TorresButton = sk;
exports.TorresButtonChip = KT;
exports.TorresButtonColor = qT;
exports.TorresButtonIcon = JT;
exports.TorresCardProduct = lN;
exports.TorresFilter = uN;
exports.TorresGroupButtonChip = mR;
exports.TorresGroupButtonColor = yR;
exports.TorresGroupLinkNext = j0;
exports.TorresImage = qm;
exports.TorresLink = Q0;
exports.TorresLinkNext = ZT;
exports.TorresParagraph = rN;
exports.TorresPrice = M0;
exports.TorresSubtitle = Cs;
exports.TorresTag = eR;
exports.TorresTitle = hR;
//# sourceMappingURL=index.cjs.js.map
