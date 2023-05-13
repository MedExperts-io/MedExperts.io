"use strict";
(self["webpackChunkmedexperts_io"] = self["webpackChunkmedexperts_io"] || []).push([["client_features_contact_ContactUs_js"],{

/***/ "./client/features/contact/ContactForm.js":
/*!************************************************!*\
  !*** ./client/features/contact/ContactForm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FloatingLabel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _contactFormSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactFormSlice */ "./client/features/contact/contactFormSlice.js");
/* harmony import */ var _MessageSuccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessageSuccess */ "./client/features/contact/MessageSuccess.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ContactForm = function ContactForm() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    captchaVal = _useState2[0],
    setCaptchaVal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    messageSent = _useState4[0],
    setMessageSent = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      from_name: "",
      from_email: "",
      from_phone: "",
      message: ""
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formData = _useState6[0],
    setFormData = _useState6[1];
  var params = _objectSpread({}, formData);
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
      return state.contactForm;
    }),
    response = _useSelector.response;
  var handleChange = function handleChange(event) {
    event.preventDefault();
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, event.target.name, event.target.value)));
  };
  var sendEmail = function sendEmail(event) {
    event.preventDefault();
    dispatch((0,_contactFormSlice__WEBPACK_IMPORTED_MODULE_4__.contactFormResponse)({
      token: captchaVal
    }));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (response === "OK") {
      _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].send("MISSING_ENV_VAR".REACT_APP_SERVICE_ID, "MISSING_ENV_VAR".REACT_APP_TEMPLATE_ID, params, "MISSING_ENV_VAR".REACT_APP_PUBLIC_KEY).then(function () {
        setMessageSent(true);
        form.current.reset();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, [response]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, !messageSent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: form,
    onSubmit: function onSubmit(event) {
      return sendEmail(event);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "mb-3",
    controlId: "contact-name",
    label: "Name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
    type: "text",
    placeholder: "Your name",
    name: "from_name",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "mb-3",
    controlId: "contact-email",
    label: "Email Address"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
    type: "email",
    placeholder: "Your email address",
    name: "from_email",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "mb-3",
    controlId: "contact-phone",
    label: "Phone Number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
    type: "tel",
    placeholder: "Your phone number",
    name: "from_phone",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "mb-3",
    controlId: "contact-msg",
    label: "Message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, {
    as: "textarea",
    style: {
      height: "100px"
    },
    placeholder: "Your message",
    name: "message",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sitekey: "".concat("MISSING_ENV_VAR".REACT_APP_RECAPTCHA_SITE),
    onChange: function onChange(captchaValue) {
      setCaptchaVal(captchaValue);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "d-grid gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    disabled: !(captchaVal && formData.from_email && formData.from_name && formData.message)
  }, "Submit"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MessageSuccess__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ "./client/features/contact/ContactUs.js":
/*!**********************************************!*\
  !*** ./client/features/contact/ContactUs.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Email */ "./node_modules/@mui/icons-material/Email.js");
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Instagram */ "./node_modules/@mui/icons-material/Instagram.js");
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/LinkedIn */ "./node_modules/@mui/icons-material/LinkedIn.js");
/* harmony import */ var _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/LocationOn */ "./node_modules/@mui/icons-material/LocationOn.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactForm */ "./client/features/contact/ContactForm.js");







var ContactUs = function ContactUs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fluid: true,
    style: {
      marginTop: "35px",
      marginBottom: "35px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lg: 10,
    md: 10,
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-center"
  }, "Get in Touch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-center",
    style: {
      fontSize: "18px",
      fontWeight: "300"
    }
  }, "We'd love to hear from you! If you have any questions or comments for us, fill out the form below with all your details and we'll get back to you within 48 hours.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "mx-auto shadow",
    style: {
      width: "80%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      width: "100%",
      backgroundColor: "#f5f3f2",
      border: "none",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Title, {
    style: {
      padding: "10px",
      fontWeight: "600",
      fontSize: "20px"
    }
  }, "Contact Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
    className: "me-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: "300",
      fontSize: "14px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    style: {
      color: "black",
      textDecoration: "none"
    },
    target: "_blank",
    href: "mailto:support@medexperts.io"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_6__["default"], null), " support@medexperts.io")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: "300",
      fontSize: "14px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_7__["default"], null), "New York, NY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: "600",
      fontSize: "16px"
    }
  }, "Connect with MedExperts on Social Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: "300",
      fontSize: "14px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    style: {
      color: "black",
      textDecoration: "none"
    },
    target: "_blank",
    href: "https://www.linkedin.com/company/medexperts-io/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_8__["default"], null), " LinkedIn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: "300",
      fontSize: "14px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    style: {
      color: "black",
      textDecoration: "none"
    },
    target: "_blank",
    href: "https://www.instagram.com/medexperts.io/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_9__["default"], null), " Instagram"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      border: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Title, {
    style: {
      padding: "10px",
      fontWeight: "600",
      fontSize: "20px"
    }
  }, "Send us a Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_1__["default"], null)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUs);

/***/ }),

/***/ "./client/features/contact/MessageSuccess.js":
/*!***************************************************!*\
  !*** ./client/features/contact/MessageSuccess.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");


var MessageSuccess = function MessageSuccess() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: "300",
      fontSize: "14px"
    }
  }, "We have received your message and appreciate you taking the time to reach out to us. Our team is reviewing your inquiry and we will do our best to get back to you as soon as possible.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Thank you again for reaching out to MedExperts. We look forward to speaking with you soon!")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageSuccess);

/***/ })

}]);
//# sourceMappingURL=client_features_contact_ContactUs_js.bundle.js.map