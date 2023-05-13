"use strict";
(self["webpackChunkmedexperts_io"] = self["webpackChunkmedexperts_io"] || []).push([["client_features_auth_ResetPassword_js"],{

/***/ "./client/features/auth/RequestNewPW.js":
/*!**********************************************!*\
  !*** ./client/features/auth/RequestNewPW.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authSlice */ "./client/features/auth/authSlice.js");





var RequestNewPassword = function RequestNewPassword() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    var email = evt.target.email.value;
    dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.forgotPassword)({
      email: email
    }));
    navigate("/forgotPassword/confirmation");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "p-5 justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "shadow mx-auto",
    id: "request-pw-reset-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    id: "request-pw-reset-card-header"
  }, "Request new password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Enter your user account's verified email address and we will send you a password reset link."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
    className: "mb-3",
    controlId: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
    type: "email",
    placeholder: "Email Address",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control.Feedback, {
    type: "invalid"
  }, "Please provide a valid email address.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "success",
    type: "submit"
  }, "Send password reset email")))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestNewPassword);

/***/ }),

/***/ "./client/features/auth/ResetPassword.js":
/*!***********************************************!*\
  !*** ./client/features/auth/ResetPassword.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authSlice */ "./client/features/auth/authSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _RequestNewPW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestNewPW */ "./client/features/auth/RequestNewPW.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ResetPassword = function ResetPassword() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.auth;
    }),
    error = _useSelector.error;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    validated = _useState2[0],
    setValidated = _useState2[1];
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var token = searchParams.get("token");
  var uid = searchParams.get("uid");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.isResetLinkValid)({
      token: token,
      uid: uid
    }));
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    password1 = _useState4[0],
    setPassword1 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    password2 = _useState6[0],
    setPassword2 = _useState6[1];

  //password checker start
  var atLeastOneUppercase = /[A-Z]/g;
  var atLeastOneLowercase = /[a-z]/g;
  var atLeastOneNumber = /[0-9]/g;
  var atLeastOneSpecialCharacter = /[#?!@$%^&*-]/g;
  var eightCharactersOrMore = /.{8,}/g;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showReqs = _useState8[0],
    setShowReqs = _useState8[1];
  var passwordTracker = {
    uppercase: password1.match(atLeastOneUppercase),
    lowercase: password1.match(atLeastOneLowercase),
    number: password1.match(atLeastOneNumber),
    specialCharacter: password1.match(atLeastOneSpecialCharacter),
    eightCharactersOrGreater: password1.match(eightCharactersOrMore)
  };
  var passwordStrength = Object.values(passwordTracker).filter(function (value) {
    return value;
  }).length;
  //password checker end

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    var password1 = evt.target.resetPassword.value;
    var password2 = evt.target.confirmResetPassword.value;
    if (validated) {
      dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.resetPassword)({
        password1: password1,
        password2: password2,
        token: token,
        uid: uid
      })).then(function () {
        return navigate("/login");
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "p-5 justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "expired-link"
  }, "Sorry, your reset password link has either expired or already been used. You may request a new link below.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RequestNewPW__WEBPACK_IMPORTED_MODULE_3__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "shadow mx-auto",
    id: "request-pw-reset-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Header, {
    id: "request-pw-reset-card-header"
  }, "Reset Account Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    noValidate: true,
    validated: validated,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Enter your password below."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "resetPassword"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "New password ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "asterisk"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
    onFocus: function onFocus() {
      return setShowReqs(true);
    },
    onChange: function onChange(e) {
      setPassword1(e.target.value);
    },
    value: password1,
    required: true,
    type: "password",
    autoComplete: "new-password",
    placeholder: "Enter password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control.Feedback, {
    type: "invalid"
  }, "Please provide a password.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "confirmResetPassword"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "Confirm new password ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "asterisk"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
    onChange: function onChange(e) {
      setPassword2(e.target.value);
    },
    required: true,
    autoComplete: "re-enter-new-password",
    type: "password",
    placeholder: "Enter password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control.Feedback, {
    type: "invalid"
  }, "Please provide a password.")), password1 !== password2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "warning"
  }, "Passwords do not match"), showReqs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "password-strength-meter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    style: {
      textDecorationLine: "underline"
    }
  }, passwordStrength < 5 && "Password Requirements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, !passwordTracker.uppercase && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "MUST contain at least one uppercase letter"), !passwordTracker.lowercase && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "MUST contain at least one lowercase letter"), !passwordTracker.specialCharacter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "MUST contain at least one special character (#?!@$%^&*-)"), !passwordTracker.number && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "MUST contain at least one number"), !passwordTracker.eightCharactersOrGreater && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "MUST contain at least 8 characters"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: function onClick() {
      return setValidated(true);
    },
    variant: "success",
    type: "submit",
    disabled: password1 !== password2 || passwordStrength != 5
  }, "Reset password")))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

/***/ })

}]);
//# sourceMappingURL=client_features_auth_ResetPassword_js.bundle.js.map