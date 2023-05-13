"use strict";
(self["webpackChunkmedexperts_io"] = self["webpackChunkmedexperts_io"] || []).push([["client_features_singleQuestion_SingleQuestion_js"],{

/***/ "./client/features/singleQuestion/SingleQAadmin.js":
/*!*********************************************************!*\
  !*** ./client/features/singleQuestion/SingleQAadmin.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Stack.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _singleQuestionSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singleQuestionSlice */ "./client/features/singleQuestion/singleQuestionSlice.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var SingleQAadmin = function SingleQAadmin() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
    singleQuestionId = _useParams.singleQuestionId;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(newestVersion === null || newestVersion === void 0 ? void 0 : newestVersion.id),
    _useState4 = _slicedToArray(_useState3, 2),
    key = _useState4[0],
    setKey = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, 500);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,_singleQuestionSlice__WEBPACK_IMPORTED_MODULE_3__.fetchQAVersions)(singleQuestionId));
  }, [qaVersions]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
  var qaVersions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.SingleQuestion.qaAllVersions;
  });
  var newestVersion = qaVersions[0];
  var allOtherVersions = qaVersions.slice(1);
  var responseData = function responseData(qaId, ansOption) {
    var numOfPicks = 0;
    var totalResponses = 0;
    var userResponses = qaVersions.map(function (aVersion) {
      if (aVersion.id == qaId) {
        var _aVersion$user_questi;
        (_aVersion$user_questi = aVersion.user_questions) === null || _aVersion$user_questi === void 0 ? void 0 : _aVersion$user_questi.map(function (eachUserInput) {
          totalResponses++;
          if (eachUserInput.userInput == ansOption) {
            numOfPicks++;
          }
        });
      }
    });
    if (numOfPicks !== 0) {
      return Math.round(numOfPicks * 100 / totalResponses);
    } else {
      return null;
    }
  };

  //------------ Delete modal details
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    deleteId = _useState6[0],
    setDeleteId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    deletePosition = _useState8[0],
    setDeletePosition = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    show = _useState10[0],
    setShow = _useState10[1];
  var handleShow = function handleShow(id, position) {
    //Step2: handleShow sets state with provided id & position & shows modal
    setDeleteId(id);
    setDeletePosition(position);
    setShow(true);
  };
  var handleClose = function handleClose() {
    return setShow(false);
  };
  var handleDelete = function handleDelete(id, position) {
    //Step4: Based on position, delete dispatched & navigation called.
    dispatch((0,_singleQuestionSlice__WEBPACK_IMPORTED_MODULE_3__.deleteSingleQuestion)(id));
    if (position === "only") {
      navigate("/questions");
    } else if (position === "newest") {
      setKey();
      navigate("/questions/".concat(qaVersions[1].id));
    } else if (position === "older") {
      setKey(newestVersion === null || newestVersion === void 0 ? void 0 : newestVersion.id);
    }
    handleClose(); //Step5: Modal closed
  };
  //----------- end Delete modal details

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__["default"], {
    fluid: true
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_6__["default"], {
    animated: true,
    now: 100
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
    gap: 3,
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_8__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_8__["default"].Title, null, "Delete version with unique ID ", deleteId, "?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_8__["default"].Body, null, "Once you delete, the previous version of this question will be activated. If no other versions exist, you will be redirected to the Questions page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_8__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "secondary",
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "danger",
    onClick: function onClick() {
      //Step3: Final delete button clicked and handleDelete function called with deleteId and deletePosition from state
      handleDelete(deleteId, deletePosition);
    }
  }, "Delete"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, qaVersions && qaVersions !== null && qaVersions !== void 0 && qaVersions.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
    href: "/questions",
    id: "breadcrumb"
  }, "All Questions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
    id: "breadcrumb",
    active: true
  }, "Question ", qaVersions[0].displayId)), qaVersions.length === 1 ? qaVersions.map(function (eachVersion, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "mb-4 mx-auto",
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
      style: {
        fontSize: "75%",
        color: "red"
      },
      id: "no-border",
      className: "d-flex justify-content-end"
    }, "Unique ID: ", eachVersion.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
      id: "no-border",
      className: "text-center ",
      style: {
        fontSize: "100%",
        textAlign: "center"
      }
    }, "Question ", qaVersions[0].displayId, ":", " ", eachVersion.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
      id: "no-border",
      className: "d-flex justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
      direction: "horizontal",
      style: {
        paddingTop: "10px"
      }
    }, eachVersion.questionImage ? eachVersion.questionImage.map(function (image, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
        responsive: "sm",
        size: "sm",
        key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
        borderless: true,
        style: {
          paddingBottom: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
        style: {
          padding: "0px"
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        alt: eachVersion.questionImageAltText ? eachVersion.questionImageAltText[index] : "We're missing an explanation here, contact us!",
        src: image,
        style: {
          paddingLeft: "10px",
          maxHeight: "12rem",
          maxInlineSize: "100%"
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
        className: "text-center",
        style: {
          fontSize: "10px"
        }
      }, "Figure:", index + 1))));
    }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
      className: "d-flex justify-content-end",
      style: {
        paddingTop: "0"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
      tabIndex: -1,
      size: "small",
      variant: "link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
      to: "/questions/".concat(singleQuestionId, "/edit"),
      style: {
        color: "#1362d8",
        textDecoration: "none"
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_15__["default"], null), "Edit Question", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "link",
      size: "small",
      style: {
        color: "#1362d8"
      },
      onClick: function onClick() {
        return handleShow(eachVersion.id, "only");
      } //Step1: Delete icon clicked and specific id & position passed to handleShow function
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_16__["default"], null), "Delete Version")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "mx-auto",
      id: "no-border",
      style: {
        minWidth: "50%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
      responsive: "sm",
      borderless: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Answer Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Responses"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style", {
      type: "text/css"
    }, "\n    .btn-success {\n      background-color: #7cb69d;\n      border-color:#7cb69d;\n      color: white;\n    }\n    .btn-danger{\n      background-color: #FF7276;\n      border-color: #FF7276;\n    }\n\n    "), eachVersion.answerOptions ? eachVersion.answerOptions.map(function (ans, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
        key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        tabIndex: "-1",
        style: {
          margin: "0"
        },
        variant: ans === eachVersion.correctAnswer ? "outline-success" : "outline-danger"
      }, ans)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
        className: "visually-hidden"
      }, "".concat(responseData(eachVersion.id, ans) ? responseData(eachVersion.id, ans) : 0, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_6__["default"]
      // title="Progress bar for responses"
      // aria-label="Progress bar for responses"
      // name="Progress bar for responses"
      , {
        "aria-hidden": "true",
        variant: ans === eachVersion.correctAnswer ? "success" : "danger",
        style: {
          height: "38px",
          minWidth: "100%"
        },
        now:
        // responseData(
        //   eachVersion.id,
        //   ans
        // ) ||
        // responseData(
        //   eachVersion.id,
        //   ans
        // ) == "0"
        //   ?
        //     responseData(
        //       eachVersion.id,
        //       ans
        //     )
        //   : 100
        100,
        label: "".concat(responseData(eachVersion.id, ans) ? responseData(eachVersion.id, ans) : "0"
        // : 0
        , "%")
      })));
    }) : null))), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
      eventKey: "0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Header, null, "View Explanation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, eachVersion.explanation, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
      direction: "horizontal",
      style: {
        paddingTop: "10px"
      }
    }, eachVersion.explanationImage ? eachVersion.explanationImage.map(function (image, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
        responsive: "sm",
        size: "sm",
        key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
        borderless: true,
        style: {
          paddingBottom: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
        style: {
          padding: "0px"
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        alt: eachVersion.explanationImageAltText ? eachVersion.explanationImageAltText[index] : "We're missing an explanation here, contact us!",
        src: image,
        style: {
          paddingLeft: "10px",
          maxHeight: "12rem",
          maxInlineSize: "100%"
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
        className: "text-center",
        style: {
          fontSize: "10px"
        }
      }, "Figure:", index + 1))));
    }) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
      eventKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Header, null, "View References"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, eachVersion.explanationLinks.length ? eachVersion.explanationLinks.map(function (sourcelink, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
        className: "m-2 text-decoration-none "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, index + 1, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(sourcelink), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style", null, " a {\n                            color: inherit;\n                             text-decoration: none;}")))));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      style: {
        fontSize: "16px"
      }
    }, "No references available for this question."))))));
  }) :
  /*#__PURE__*/
  // <---------------if more than 1 version-------------->
  react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"], {
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    },
    id: "uncontrolled-tab-example",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_19__["default"], {
    eventKey: "".concat(newestVersion.id),
    title: "Current Version"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
    gap: 3,
    key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "mb-4 mx-auto",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
    style: {
      fontSize: "75%",
      color: "red"
    },
    id: "no-border",
    className: "d-flex justify-content-end"
  }, "Unique ID: ", newestVersion.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
    id: "no-border",
    className: "text-center",
    style: {
      fontSize: "100%",
      textAlign: "center"
    }
  }, "Question ", newestVersion.displayId, ":", " ", newestVersion.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
    id: "no-border",
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "horizontal",
    style: {
      paddingTop: "10px"
    }
  }, newestVersion.questionImage ? newestVersion.questionImage.map(function (image, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
      responsive: "sm",
      size: "sm",
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      borderless: true,
      style: {
        paddingBottom: "0px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        padding: "0px"
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      alt: newestVersion.questionImageAltText ? newestVersion.questionImageAltText[index] : "We're missing an explanation here, contact us!",
      src: image,
      style: {
        paddingLeft: "10px",
        maxHeight: "12rem",
        maxInlineSize: "100%"
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      className: "text-center",
      style: {
        fontSize: "10px",
        paddingLeft: "10px"
      }
    }, "Figure:", index + 1))));
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
    tabIndex: -1,
    size: "small",
    variant: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
    to: "/questions/".concat(singleQuestionId, "/edit"),
    style: {
      color: "#1362d8",
      textDecoration: "none"
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      color: "#1362d8"
    }
  }), "Edit Question", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "link",
    size: "small",
    style: {
      color: "#1362d8",
      textDecoration: "none"
    },
    onClick: function onClick() {
      return handleShow(newestVersion.id, "newest");
    } //Step1: Delete icon clicked and specific id & position passed to handleShow function
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_16__["default"], null), "Delete Version")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "mx-auto",
    id: "no-border",
    style: {
      minWidth: "50%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
    responsive: "sm",
    borderless: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Answer Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Responses"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style", {
    type: "text/css"
  }, "\n    .btn-success {\n      background-color: #7cb69d;\n      border-color:#7cb69d;\n      color: white;\n    }\n    .btn-danger{\n      background-color: #FF7276;\n      border-color: #FF7276;\n    }\n\n    "), newestVersion.answerOptions ? newestVersion.answerOptions.map(function (ans, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
      tabIndex: "-1",
      style: {
        margin: "0"
      },
      variant: ans === newestVersion.correctAnswer ? "outline-success" : "outline-danger"
    }, ans)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "visually-hidden"
    }, "".concat(responseData(newestVersion.id, ans) ? responseData(newestVersion.id, ans) : 0, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_6__["default"]
    // title="Progress bar for responses"
    // aria-label="Progress bar for responses"
    // name="Progress bar for responses"
    , {
      "aria-hidden": "true",
      variant: ans === newestVersion.correctAnswer ? "success" : "danger",
      style: {
        height: "38px",
        minWidth: "100%"
      },
      now:
      // responseData(
      //   newestVersion.id,
      //   ans
      // ) ||
      // responseData(
      //   newestVersion.id,
      //   ans
      // ) == "0"
      //   ?
      //     responseData(
      //       newestVersion.id,
      //       ans
      //     )
      //   : 100
      100,
      label: "".concat(responseData(newestVersion.id, ans) ? responseData(newestVersion.id, ans) : "0"
      // : 0
      , "%")
    })));
  }) : null)), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
    eventKey: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Header, null, "View Explanation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, newestVersion.explanation, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "horizontal",
    style: {
      paddingTop: "10px"
    }
  }, newestVersion.explanationImage ? newestVersion.explanationImage.map(function (image, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
      responsive: "sm",
      size: "sm",
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      borderless: true,
      style: {
        paddingBottom: "0px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      style: {
        padding: "0px"
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      alt: newestVersion.explanationImageAltText ? newestVersion.explanationImageAltText[index] : "We're missing an explanation here, contact us!",
      src: image,
      style: {
        paddingLeft: "10px",
        maxHeight: "12rem",
        maxInlineSize: "100%"
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      className: "text-center",
      style: {
        fontSize: "10px"
      }
    }, "Figure:", index + 1))));
  }) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
    eventKey: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Header, null, "View References"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, newestVersion.explanationLinks.length ? newestVersion.explanationLinks.map(function (sourcelink, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      className: "m-2 text-decoration-none "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, index + 1, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(sourcelink), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style", null, " a {\n                          color: inherit;\n                           text-decoration: none;}")))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    style: {
      fontSize: "16px"
    }
  }, "No references available for this question.")))))))), allOtherVersions.map(function (eachVersion, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_19__["default"], {
      eventKey: "".concat(eachVersion.id),
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      title: "Version ".concat(allOtherVersions.length - idx, " ")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
      style: {
        fontSize: "75%",
        color: "red"
      },
      id: "no-border",
      className: "d-flex justify-content-end"
    }, "Unique ID: ", eachVersion.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
      id: "no-border",
      className: "text-center",
      style: {
        fontSize: "100%",
        textAlign: "center"
      }
    }, "Question ", eachVersion.displayId, ":", " ", eachVersion.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
      id: "no-border",
      className: "d-flex justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
      direction: "horizontal",
      style: {
        paddingTop: "10px"
      }
    }, eachVersion.questionImage ? eachVersion.questionImage.map(function (image, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
        responsive: "sm",
        size: "sm",
        key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
        borderless: true,
        style: {
          paddingBottom: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
        style: {
          padding: "0px"
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        alt: eachVersion.questionImageAltText ? eachVersion.questionImageAltText[index] : "We're missing an explanation here, contact us!",
        src: image,
        style: {
          paddingLeft: "10px",
          maxHeight: "12rem",
          maxInlineSize: "100%"
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
        className: "text-center",
        style: {
          fontSize: "10px"
        }
      }, "Figure:", index + 1))));
    }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
      className: "d-flex justify-content-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "link",
      size: "small",
      onClick: function onClick() {
        return handleShow(eachVersion.id, "older");
      } //Step1: Delete icon clicked and specific id & position passed to handleShow function
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_16__["default"], null), "Delete Version")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "mx-auto",
      id: "no-border",
      style: {
        minWidth: "50%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
      responsive: "sm",
      borderless: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Answer Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, "Responses"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style", {
      type: "text/css"
    }, "\n    .btn-success {\n      background-color: #7cb69d;\n      border-color:#7cb69d;\n      color: white;\n    }\n    .btn-danger{\n      background-color: #FF7276;\n      border-color: #FF7276;\n    }\n    "), eachVersion.answerOptions ? eachVersion.answerOptions.map(function (ans, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
        key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        tabIndex: "-1",
        style: {
          margin: "0"
        },
        variant: ans === eachVersion.correctAnswer ? "outline-success" : "outline-danger"
      }, ans)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
        className: "visually-hidden"
      }, "".concat(responseData(eachVersion.id, ans) ? responseData(eachVersion.id, ans) : 0, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_6__["default"]
      // title="Progress bar for responses"
      // aria-label="Progress bar for responses"
      // name="Progress bar for responses"
      , {
        "aria-hidden": "true",
        variant: ans === eachVersion.correctAnswer ? "success" : "danger",
        style: {
          height: "38px",
          minWidth: "100%"
        },
        now:
        // responseData(
        //   eachVersion.id,
        //   ans
        // ) ||
        // responseData(
        //   eachVersion.id,
        //   ans
        // ) == "0"
        //   ?
        //     responseData(
        //       eachVersion.id,
        //       ans
        //     )
        //   : 100
        100,
        label: "".concat(responseData(eachVersion.id, ans) ? responseData(eachVersion.id, ans) : "0"
        // : 0
        , "%")
      })));
    }) : null)), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
      eventKey: "0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Header, null, "View Explanation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, eachVersion.explanation, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
      direction: "horizontal",
      style: {
        paddingTop: "10px"
      }
    }, eachVersion.explanationImage ? eachVersion.explanationImage.map(function (image, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
        responsive: "sm",
        size: "sm",
        key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
        borderless: true,
        style: {
          paddingBottom: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
        style: {
          padding: "0px"
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        alt: eachVersion.explanationImageAltText ? eachVersion.explanationImageAltText[index] : "We're missing an explanation here, contact us!",
        src: image,
        style: {
          paddingLeft: "10px",
          maxHeight: "12rem",
          maxInlineSize: "100%"
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
        className: " text-center",
        style: {
          fontSize: "10px"
        }
      }, "Figure:", index + 1))));
    }) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
      eventKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Header, null, "View References"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, eachVersion.explanationLinks.length ? eachVersion.explanationLinks.map(function (sourcelink, index) {
      return (
        /*#__PURE__*/
        // {explanationLinks.length ? (
        //   explanationLinks.map((sourcelink, index) => (
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])(),
          className: "m-2 text-decoration-none "
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, index + 1, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(sourcelink), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style", null, " a {\n                              color: inherit;\n                               text-decoration: none;}")))))
      );
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      style: {
        fontSize: "16px"
      }
    }, "No references available for this question.")))))));
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleQAadmin);

/***/ }),

/***/ "./client/features/singleQuestion/SingleQuestion.js":
/*!**********************************************************!*\
  !*** ./client/features/singleQuestion/SingleQuestion.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _singleQuestionSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleQuestionSlice */ "./client/features/singleQuestion/singleQuestionSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Stack.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Breadcrumb.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var _stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stats/user_questionsSlice */ "./client/features/stats/user_questionsSlice.js");
/* harmony import */ var _SingleQAadmin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleQAadmin */ "./client/features/singleQuestion/SingleQAadmin.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var SingleQuestion = function SingleQuestion() {
  var admin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.me.isAdmin;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOption = _useState2[0],
    setSelectedOption = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showAnswer = _useState4[0],
    setShowAnswer = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, 500);
  }, []);
  var handleOptionSelection = function handleOptionSelection(option) {
    if (showAnswer) {
      return;
    }
    setSelectedOption(option);
  };
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
    singleQuestionId = _useParams.singleQuestionId;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var userId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.me.id;
  });
  var userExpertise = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.me.expertise;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // dispatch(
    //   updateUserQuestionInput({
    //     userId: userId,
    //     questionAnswerId: singleQuestionId,
    //   })
    // ).then(() => dispatch(fetchSingleQuestion(singleQuestionId)));
    // dispatch(fetchUserQuestions(userId)).then(()=>dispatch(fetchSingleQuestion(singleQuestionId)) )
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUserQuestions)()).then(function () {
      return dispatch((0,_singleQuestionSlice__WEBPACK_IMPORTED_MODULE_2__.fetchSingleQuestion)(singleQuestionId));
    });
    window.scrollTo(0, 0);
  }, []);
  var singleQ = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.SingleQuestion.Question;
  });
  var id = singleQ.id,
    question = singleQ.question,
    answerOptions = singleQ.answerOptions,
    correctAnswer = singleQ.correctAnswer,
    explanation = singleQ.explanation,
    explanationImage = singleQ.explanationImage,
    explanationImageAltText = singleQ.explanationImageAltText,
    questionImage = singleQ.questionImage,
    questionImageAltText = singleQ.questionImageAltText,
    explanationLinks = singleQ.explanationLinks,
    category = singleQ.category,
    level = singleQ.level,
    ancestorId = singleQ.ancestorId,
    displayId = singleQ.displayId;
  var AllUserQuestion = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.userQuestions.UserQuestions;
  });
  var CurrentQuestionArray = AllUserQuestion.filter(function (object) {
    return object.questionAnswerId === id;
  });
  var CurrentQuestion = CurrentQuestionArray[0];
  var handleSubmit = function handleSubmit() {
    setShowAnswer(true);
    dispatch((0,_singleQuestionSlice__WEBPACK_IMPORTED_MODULE_2__.fetchSingleQuestion)(id)).then(function () {
      return dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_3__.updateUserQuestionInput)({
        questionAnswerId: id,
        userInput: selectedOption,
        answered: selectedOption === correctAnswer ? "right" : "wrong",
        category: category,
        level: level,
        userExpertise: userExpertise
      }));
    }).then(function () {
      return dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUserQuestions)());
    });
  };
  if (admin) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleQAadmin__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  } else {
    if (CurrentQuestionArray.length > 0 && CurrentQuestion.answered) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
        fluid: true
      }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_8__["default"], {
        animated: true,
        now: 100
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 3,
        className: "p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
        href: "/questions",
        id: "breadcrumb"
      }, "All Questions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
        id: "breadcrumb",
        active: true
      }, " ", "Question ", displayId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
        className: "mb-2 text-center",
        style: {
          fontSize: "100%",
          textAlign: "center"
        }
      }, question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
        className: "mx-auto",
        style: {
          paddingBottom: "0px",
          marginBottom: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          paddingTop: "10px",
          paddingLeft: "0px",
          paddingRight: "0px"
        },
        direction: "horizontal"
      }, questionImage ? questionImage.map(function (image, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
          responsive: "sm",
          size: "sm",
          key: (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])(),
          borderless: true,
          style: {
            paddingBottom: "0px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
          style: {
            padding: "0px"
          }
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          alt: questionImageAltText ? questionImageAltText[index] : "We're missing an explanation here, contact us!",
          src: image,
          style: {
            paddingLeft: "10px",
            maxHeight: "12rem",
            maxInlineSize: "100%"
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          className: "text-center",
          style: {
            fontSize: "10px"
          }
        }, "Figure:", index + 1))));
      }) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          paddingBottom: "2%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "visually-hidden"
      }, "Select your answer:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
        "aria-hidden": "true"
      }, "Select your answer:"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "mx-auto"
      }, answerOptions ? answerOptions.map(function (ans, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_16__["default"], {
          as: react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"],
          className: "ms-3 mb-2",
          key: (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])()
          // variant={selectedOption === ans ? "success" : "outline-success"}
          ,
          variant: CurrentQuestion.userInput ? ans === correctAnswer ? "success" : "danger" : CurrentQuestion.answered === ans ? "success" : "outline-success"
        }, ans);
      }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        direction: "horizontal",
        gap: 3,
        className: " mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "mx-auto",
        variant: "danger"
        // onClick={handleSubmit}
        ,
        disabled: selectedOption === null
      }, "Submit")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Correct Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Your Answer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        className: "no-border"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          borderBottomWidth: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
        type: "text/css"
      }, "\n    .btn-success {\n      background-color: #7cb69d;\n      border-color:#7cb69d;\n      color: white;\n    }\n    .btn-danger{\n      background-color: #FF7276;\n      border-color: #FF7276;\n    }\n\n    "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_16__["default"], {
        variant: "success"
      }, correctAnswer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          borderBottomWidth: "0px"
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "btn-muted",
        variant: CurrentQuestion.userInput ? CurrentQuestion.userInput === correctAnswer ? "success" : "danger" : CurrentQuestion.userInput === selectedOption ? "success" : "outline-success"
      }, CurrentQuestion.userInput)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        eventKey: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, "View Explanation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, explanation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Body, {
        className: "mx-auto",
        style: {
          paddingBottom: "0px",
          marginBottom: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          paddingTop: "10px",
          paddingLeft: "0px",
          paddingRight: "0px"
        },
        direction: "horizontal"
      }, explanationImage ? explanationImage.map(function (image, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
          responsive: "sm",
          size: "sm",
          key: (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])(),
          borderless: true,
          style: {
            paddingBottom: "0px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
          style: {
            padding: "0px"
          }
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          alt: explanationImageAltText ? explanationImageAltText[index] : "We're missing an explanation here, contact us!",
          src: image,
          style: {
            paddingLeft: "10px",
            maxHeight: "12rem",
            maxInlineSize: "100%"
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          className: "text-center",
          style: {
            fontSize: "10px"
          }
        }, "Figure:", index + 1))));
      }) : null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        eventKey: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, "View References"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, explanationLinks.length ? explanationLinks.map(function (sourcelink, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])(),
          className: "m-2 text-decoration-none "
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, index + 1, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(sourcelink), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, " a {\n                              color: inherit;\n                               text-decoration: none;}")))));
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        style: {
          fontSize: "16px"
        }
      }, "No references available for this question."))))))));
    } else {
      // <------------------Not answered view ------------------>
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_7__["default"], {
        fluid: true
      }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_8__["default"], {
        animated: true,
        now: 100
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 3,
        className: "p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
        id: "breadcrumb",
        href: "/questions"
      }, "All Questions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
        id: "breadcrumb",
        active: true
      }, "Question ", displayId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
        className: "mb-2 text-center",
        style: {
          fontSize: "100%",
          textAlign: "center"
        }
      }, question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
        className: "mx-auto",
        style: {
          paddingBottom: "0px",
          marginBottom: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          paddingTop: "10px",
          paddingLeft: "0px",
          paddingRight: "0px"
        },
        direction: "horizontal"
      }, questionImage ? questionImage.map(function (image, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], {
          responsive: "sm",
          size: "sm",
          key: (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])(),
          borderless: true,
          style: {
            paddingBottom: "0px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
          style: {
            padding: "0px"
          }
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          alt: questionImageAltText ? questionImageAltText[index] : "We're missing an explanation here, contact us!",
          src: image,
          style: {
            paddingLeft: "10px",
            maxHeight: "12rem",
            maxInlineSize: "100%"
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          className: "text-center",
          style: {
            fontSize: "10px"
          }
        }, "Figure:", index + 1))));
      }) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          paddingBottom: "2%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "visually-hidden"
      }, "Select your answer:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
        "aria-hidden": "true"
      }, "Select your answer:"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
        type: "text/css"
      }, "\n    .btn-success {\n      background-color: #7cb69d;\n      border-color:#7cb69d;\n      color: white;\n    }\n    .btn-danger{\n      background-color: #FF7276;\n      border-color: #FF7276;\n    }\n    .btn-outline-success{\n\n      border-color:#7cb69d;\n\n    }\n\n    "), answerOptions ? answerOptions.map(function (ans, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_16__["default"], {
          as: react_bootstrap___WEBPACK_IMPORTED_MODULE_17__["default"],
          className: "ms-3 mb-2",
          key: (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])()
          // variant={selectedOption === ans ? "success" : "outline-success"}
          ,
          variant: showAnswer ? ans === correctAnswer ? "success" : "danger" : selectedOption === ans ? "success" : "outline-success",
          onClick: function onClick() {
            return handleOptionSelection(ans);
          }
        }, ans);
      }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        direction: "horizontal",
        gap: 3,
        className: " mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "mx-auto",
        id: "question-submit-btn",
        variant: "danger",
        onClick: handleSubmit,
        disabled: selectedOption === null
      }, "Submit")))))), showAnswer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_9__["default"], {
        gap: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Correct Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Your Answer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        className: "no-border"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          borderBottomWidth: "0px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
        type: "text/css"
      }, "\n.btn-success {\nbackground-color: #7cb69d;\nborder-color:#7cb69d;\ncolor: white;\n}\n.btn-danger{\nbackground-color: #FF7276;\nborder-color: #FF7276;\n}\n\n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_16__["default"], {
        variant: "success"
      }, correctAnswer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          borderBottomWidth: "0px"
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_16__["default"], {
        variant: showAnswer ? selectedOption === correctAnswer ? "success" : "danger" : selectedOption === selectedOption ? "success" : "outline-success"
      }, selectedOption)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        eventKey: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, "View Explanation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, explanation)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
        eventKey: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Header, null, "View References"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, explanationLinks.length ? explanationLinks.map(function (sourcelink, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])(),
          className: "m-2 text-decoration-none "
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap___WEBPACK_IMPORTED_MODULE_11__["default"].Body, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, index + 1, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(sourcelink), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, " a {\n                              color: inherit;\n                               text-decoration: none;}")))));
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        style: {
          fontSize: "16px"
        }
      }, "No references available for this question.")))))));
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleQuestion);

// const App = () => {
//   const [answers, setAnswers] = useState([
//     { id: 1, text: 'Option 1' },
//     { id: 2, text: 'Option 2' },
//     { id: 3, text: 'Option 3' },
//   ]);
//   const [editMode, setEditMode] = useState({});

//   const handleEdit = (id) => {
//     setEditMode({ ...editMode, [id]: true });
//   };

//   const handleSave = (id, text) => {
//     const newAnswers = answers.map((answer) => {
//       if (answer.id === id) {
//         return { id, text };
//       }
//       return answer;
//     });
//     setAnswers(newAnswers);
//     setEditMode({ ...editMode, [id]: false });
//   };

//   return (
//     <div>
//       {answers.map((answer) => {
//         return editMode[answer.id] ? (
//           <div key={answer.id}>
//             <input
//               type="text"
//               value={answer.text}
//               onChange={(e) => handleSave(answer.id, e.target.value)}
//             />
//           </div>
//         ) : (
//           <div key={answer.id} onClick={() => handleEdit(answer.id)}>
//             {answer.text}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

/***/ })

}]);
//# sourceMappingURL=client_features_singleQuestion_SingleQuestion_js.bundle.js.map