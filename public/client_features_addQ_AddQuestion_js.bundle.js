"use strict";
(self["webpackChunkmedexperts_io"] = self["webpackChunkmedexperts_io"] || []).push([["client_features_addQ_AddQuestion_js"],{

/***/ "./client/features/addQ/AddQuestion.js":
/*!*********************************************!*\
  !*** ./client/features/addQ/AddQuestion.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/esm/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ToastContainer.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Toast.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _allQA_allQASlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allQA/allQASlice */ "./client/features/allQA/allQASlice.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase */ "./client/features/addQ/firebase.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var AddQuestion = function AddQuestion() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setTimeout(function () {
      dispatch((0,_allQA_allQASlice__WEBPACK_IMPORTED_MODULE_3__.fetchAllQuestionsAnswers)());
      setLoading(false);
    }, 500);
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    newQuestion = _useState4[0],
    setNewQuestion = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    newSingleOption = _useState6[0],
    setNewSingleOption = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(["Type multiple choice option 1", "Type multiple choice option 2", "Type multiple choice option 3", "Type multiple choice option 4"]),
    _useState8 = _slicedToArray(_useState7, 2),
    newAnswerOptions = _useState8[0],
    setNewAnswerOptions = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Select answer"),
    _useState10 = _slicedToArray(_useState9, 2),
    newCorrectAnswer = _useState10[0],
    setNewCorrectAnswer = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    newExplanation = _useState12[0],
    setNewExplanation = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    newSingleLink = _useState14[0],
    setNewSingleLink = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    newSource = _useState16[0],
    setNewSource = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    newExplanationLinks = _useState18[0],
    setNewExplanationLinks = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    newCategory = _useState20[0],
    setNewCategory = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    newLevel = _useState22[0],
    setNewLevel = _useState22[1];

  //------------ toast details
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showToast = _useState24[0],
    setShowToast = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    toastMsg = _useState26[0],
    setToastMsg = _useState26[1];
  var toggleShowToast = function toggleShowToast() {
    return setShowToast(!showToast);
  };
  //----------- end toast details

  //------------ alert details
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showAlert = _useState28[0],
    setShowAlert = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    alertMsg = _useState30[0],
    setAlertMsg = _useState30[1];
  var toggleShowAlert = function toggleShowAlert() {
    return setShowAlert(!showAlert);
  };
  //----------- end alert details

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    validated = _useState32[0],
    setValidated = _useState32[1];

  //------------ modal details
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    showModal = _useState34[0],
    setShowModal = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState36 = _slicedToArray(_useState35, 2),
    modalMsg = _useState36[0],
    setModalMsg = _useState36[1];
  var handleClose = function handleClose() {
    setValidated(false);
    setShowModal(false);
  };
  var handleShow = function handleShow() {
    return setShowModal(true);
  };
  //------------ end modal details

  var AllQ = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.questionsAnswers.questionsAnswers;
  });
  var newQuestionid = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.questionsAnswers.newQuestion.id;
  });
  var Questionid = AllQ.length + 1;

  //Question Images
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    imageUrls = _useState38[0],
    setImageUrls = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState40 = _slicedToArray(_useState39, 2),
    newSingleQImageAltText = _useState40[0],
    setNewSingleQImageAltText = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    newQuestionImageAltText = _useState42[0],
    setNewQuestionImageAltText = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState44 = _slicedToArray(_useState43, 2),
    imageUpload = _useState44[0],
    setImageUpload = _useState44[1];
  var imagesListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_4__.storage, "images/".concat(Questionid, "/"));
  var uploadFile = function uploadFile() {
    if (imageUpload == null) return;
    var imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_4__.storage, "images/".concat(Questionid, "/").concat(imageUpload.name + (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])()));
    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.uploadBytes)(imageRef, imageUpload).then(function (snapshot) {
      (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getDownloadURL)(snapshot.ref).then(function (url) {
        setImageUrls(function (prev) {
          return [].concat(_toConsumableArray(prev), [url]);
        });
      });
    });
    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.listAll)("images/".concat(Questionid, "/").concat(imageUpload.name + (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])())).then(function (response) {
      response.items.forEach(function (item) {
        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getDownloadURL)(item).then(function (url) {
          setImageUrls(function (prev) {
            return [].concat(_toConsumableArray(prev), [url]);
          });
        });
      });
    });
    newQuestionImageAltText[imageUrls.length] = newSingleQImageAltText.trim();
  };

  //Explanation Images
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    eimageUrls = _useState46[0],
    seteImageUrls = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState48 = _slicedToArray(_useState47, 2),
    newSingleExpImageAltText = _useState48[0],
    setNewSingleExpImageAltText = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    newExplanationImageAltText = _useState50[0],
    setNewExplanationImageAltText = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState52 = _slicedToArray(_useState51, 2),
    eimageUpload = _useState52[0],
    seteImageUpload = _useState52[1];
  var eimagesListRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_4__.storage, "images/".concat(Questionid, "/explanation"));
  var euploadFile = function euploadFile() {
    if (eimageUpload == null) return;
    var imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_4__.storage, "images/".concat(Questionid, "/explanation/").concat(eimageUpload.name + (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])()));
    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.uploadBytes)(imageRef, eimageUpload).then(function (snapshot) {
      (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getDownloadURL)(snapshot.ref).then(function (url) {
        seteImageUrls(function (prev) {
          return [].concat(_toConsumableArray(prev), [url]);
        });
      });
    });
    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.listAll)("images/".concat(Questionid, "/explanation/").concat(eimageUpload.name + (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])())).then(function (response) {
      response.items.forEach(function (item) {
        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getDownloadURL)(item).then(function (url) {
          seteImageUrls(function (prev) {
            return [].concat(_toConsumableArray(prev), [url]);
          });
        });
      });
    });
    newExplanationImageAltText[eimageUrls.length] = newSingleExpImageAltText.trim();
  };
  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    if (newQuestion.trim() === "" || newCategory === "" || newCategory === "none" || newLevel === "" || newLevel === "none") {
      setAlertMsg("A required field is missing! Please fill out Question, Answer, Category, and Level");
      toggleShowAlert();
    } else {
      dispatch((0,_allQA_allQASlice__WEBPACK_IMPORTED_MODULE_3__.NewQuestionsAnswers)({
        question: newQuestion.trim(),
        questionImage: imageUrls,
        questionImageAltText: newQuestionImageAltText,
        answerOptions: newAnswerOptions,
        correctAnswer: newCorrectAnswer,
        explanation: newExplanation.trim(),
        explanationImage: eimageUrls,
        explanationImageAltText: newExplanationImageAltText,
        explanationLinks: newExplanationLinks,
        category: newCategory,
        level: newLevel
      }));
      setModalMsg("New question successfully added!");
      setValidated(true);
    }
  };
  var clearText = function clearText(evt, text) {
    evt.target.value = text;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    animated: true,
    now: 100
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "p-3",
    position: "middle-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    bg: "success",
    show: showToast,
    onClose: toggleShowToast,
    delay: 5000,
    autohide: true,
    animation: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto",
    style: {
      fontSize: "150%"
    }
  }, "Saved!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
    style: {
      fontSize: "150%"
    }
  }, toastMsg))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "danger",
    dismissible: true,
    show: showAlert,
    onClose: toggleShowAlert
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null, "Alert!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, alertMsg)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "no-border",
    className: "mx-auto",
    style: {
      maxWidth: "900px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    noValidate: true,
    validated: validated,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "question"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Question")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    required: true,
    as: "textarea",
    rows: 3,
    placeholder: "Type question here",
    defaultValue: newQuestion,
    onChange: function onChange(e) {
      setNewQuestion(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "questionImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Question Figures")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    type: "file",
    onChange: function onChange(e) {
      setImageUpload(e.target.files[0]);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"].Text, null, "Alt Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    type: "text",
    placeholder: "Type alt text here",
    defaultValue: newSingleQImageAltText,
    onChange: function onChange(e) {
      setNewSingleQImageAltText(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "outline-secondary",
    onClick: function onClick() {
      if (imageUpload && newSingleQImageAltText.trim() !== "") {
        uploadFile();
        setToastMsg("Image with alt text: \"".concat(newSingleQImageAltText.trim(), "\"."));
        setNewSingleQImageAltText("");
        toggleShowToast();
      } else {
        setAlertMsg("You must enter both Image and Alt Text.");
        toggleShowAlert();
      }
    }
  }, "Upload")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: "sm",
    bordered: true,
    responsive: true,
    style: {
      tableLayout: "fixed",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", {
    style: {
      background: "#eaecef",
      color: "#6c767d"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    style: {
      fontWeight: "normal"
    }
  }, "Figure #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    style: {
      fontWeight: "normal"
    }
  }, "Preview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    style: {
      fontWeight: "normal"
    }
  }, "Alt Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", {
    style: {
      borderTop: "none"
    }
  }, imageUrls === null || imageUrls === void 0 ? void 0 : imageUrls.map(function (link, linkIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: link,
      target: "_blank"
    }, " ", linkIdx + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: link,
      style: {
        width: "150px",
        height: "100px"
      }
    }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
      as: "textarea",
      rows: 3,
      onClick: function onClick(evt) {
        clearText(evt, newQuestionImageAltText[linkIdx]);
      },
      defaultValue: newQuestionImageAltText[linkIdx],
      onChange: function onChange(e) {
        newQuestionImageAltText[linkIdx] = e.target.value;
      },
      placeholder: "Type alt text here",
      onFocus: function onFocus() {
        return setShowAlert(false);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      variant: "outline-secondary",
      onClick: function onClick() {
        if (newQuestionImageAltText[linkIdx].trim() !== "") {
          setNewQuestionImageAltText(newQuestionImageAltText === null || newQuestionImageAltText === void 0 ? void 0 : newQuestionImageAltText.map(function (currentText, idx) {
            if (idx === linkIdx) {
              currentText = newQuestionImageAltText[linkIdx].trim();
            }
            return currentText;
          }));
          setToastMsg("Image with alt text: \"".concat(newQuestionImageAltText[linkIdx].trim(), "\"."));
          toggleShowToast();
        } else {
          setAlertMsg("You must enter an alt text for the image here or 'Remove' this entire row.");
          toggleShowAlert();
        }
      }
    }, "Save"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      variant: "outline-secondary",
      onClick: function onClick() {
        setImageUrls(imageUrls.filter(function (currentLink, idx) {
          return idx !== linkIdx;
        }));
        setNewQuestionImageAltText(newQuestionImageAltText.filter(function (currentText, idx) {
          return idx != linkIdx;
        }));
      }
    }, "Remove")));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "answerOptions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Options")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    type: "text",
    placeholder: "Type new multiple choice option here",
    defaultValue: newSingleOption,
    onChange: function onChange(e) {
      setNewSingleOption(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "outline-secondary",
    onClick: function onClick() {
      if (newSingleOption.trim() !== "") {
        setNewAnswerOptions([].concat(_toConsumableArray(newAnswerOptions), [newSingleOption.trim()]));
        setToastMsg(newSingleOption.trim());
        setNewSingleOption(""); // Doesn't clear field for some reason
        toggleShowToast();
      } else {
        setAlertMsg("You haven't added a new multiple choice option yet.");
        toggleShowAlert();
      }
    }
  }, "Add")), newAnswerOptions === null || newAnswerOptions === void 0 ? void 0 : newAnswerOptions.map(function (option, optionIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: "mb-3",
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
      type: "text",
      onClick: function onClick(evt) {
        return clearText(evt, option);
      },
      defaultValue: option,
      onChange: function onChange(e) {
        option = e.target.value;
      },
      placeholder: "Type multiple choice option ".concat(optionIdx + 1),
      onFocus: function onFocus() {
        return setShowAlert(false);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      variant: "outline-secondary",
      onClick: function onClick() {
        if (option.trim() !== "") {
          setNewAnswerOptions(newAnswerOptions === null || newAnswerOptions === void 0 ? void 0 : newAnswerOptions.map(function (currentOption, idx) {
            if (idx === optionIdx) {
              currentOption = option.trim();
            }
            return currentOption;
          }));
          setToastMsg(option.trim());
          toggleShowToast();
        } else {
          setAlertMsg("You must enter a multiple choice option here or 'Remove' this field");
          toggleShowAlert();
        }
      }
    }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      variant: "outline-secondary",
      onClick: function onClick() {
        setNewAnswerOptions(newAnswerOptions.filter(function (currentOption, idx) {
          return idx !== optionIdx;
        }));
      }
    }, "Remove"));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "correctAnswer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Answer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Select, {
    "aria-label": "Default select example",
    onChange: function onChange(e) {
      setNewCorrectAnswer(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    defaultValue: true
  }, " ", newCorrectAnswer), newAnswerOptions === null || newAnswerOptions === void 0 ? void 0 : newAnswerOptions.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: option,
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])()
    }, option);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "explanation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Explanation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    as: "textarea",
    rows: 3,
    placeholder: "Type explanation here",
    defaultValue: newExplanation,
    onChange: function onChange(e) {
      setNewExplanation(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "explanationImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Explanation Figures")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    type: "file",
    onChange: function onChange(e) {
      seteImageUpload(e.target.files[0]);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"].Text, null, "Alt Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    type: "text",
    placeholder: "Type alt text here",
    defaultValue: newSingleExpImageAltText,
    onChange: function onChange(e) {
      setNewSingleExpImageAltText(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "outline-secondary",
    onClick: function onClick() {
      if (eimageUpload && newSingleExpImageAltText.trim() !== "") {
        euploadFile();
        setToastMsg("Image with alt text: \"".concat(newSingleExpImageAltText.trim(), "\"."));
        setNewSingleExpImageAltText("");
        toggleShowToast();
      } else {
        setAlertMsg("You must enter both Image and Alt Text.");
        toggleShowAlert();
      }
    }
  }, "Upload")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: "sm",
    bordered: true,
    responsive: true,
    style: {
      tableLayout: "fixed",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", {
    style: {
      background: "#eaecef",
      color: "#6c767d"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    style: {
      fontWeight: "normal"
    }
  }, "Figure #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    style: {
      fontWeight: "normal"
    }
  }, "Preview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    style: {
      fontWeight: "normal"
    }
  }, "Alt Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", {
    style: {
      borderTop: "none"
    }
  }, eimageUrls === null || eimageUrls === void 0 ? void 0 : eimageUrls.map(function (link, linkIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: link,
      target: "_blank"
    }, " ", linkIdx + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: link,
      style: {
        width: "150px",
        height: "100px"
      }
    }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
      as: "textarea",
      rows: 3,
      onClick: function onClick(evt) {
        clearText(evt, newExplanationImageAltText[linkIdx]);
      },
      defaultValue: newExplanationImageAltText[linkIdx],
      onChange: function onChange(e) {
        newExplanationImageAltText[linkIdx] = e.target.value;
      },
      placeholder: "Type alt text here",
      onFocus: function onFocus() {
        return setShowAlert(false);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      variant: "outline-secondary",
      onClick: function onClick() {
        if (newExplanationImageAltText[linkIdx].trim() !== "") {
          setNewExplanationImageAltText(newExplanationImageAltText === null || newExplanationImageAltText === void 0 ? void 0 : newExplanationImageAltText.map(function (currentText, idx) {
            if (idx === linkIdx) {
              currentText = newExplanationImageAltText[linkIdx].trim();
            }
            return currentText;
          }));
          setToastMsg("Image with alt text: \"".concat(newExplanationImageAltText[linkIdx].trim(), "\"."));
          toggleShowToast();
        } else {
          setAlertMsg("You must enter an alt text for the image here or 'Remove' this entire row.");
          toggleShowAlert();
        }
      }
    }, "Save"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      variant: "outline-secondary",
      onClick: function onClick() {
        seteImageUrls(eimageUrls.filter(function (currentLink, idx) {
          return idx !== linkIdx;
        }));
        setNewExplanationImageAltText(newExplanationImageAltText.filter(function (currentText, idx) {
          return idx != linkIdx;
        }));
      }
    }, "Remove")));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "explanationLinks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Explanation Sources")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"].Text, null, "Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    "aria-label": "Link",
    type: "text",
    defaultValue: newSingleLink,
    placeholder: "Type link here",
    onChange: function onChange(e) {
      setNewSingleLink(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"].Text, null, "Citation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Control, {
    "aria-label": "Citation",
    type: "text",
    placeholder: "Type citation here",
    defaultValue: newSource,
    onChange: function onChange(e) {
      setNewSource(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "outline-secondary",
    onClick: function onClick() {
      if (newSingleLink.trim() !== "" && newSource.trim() !== "") {
        setNewExplanationLinks([].concat(_toConsumableArray(newExplanationLinks), ["<a href=\"" + newSingleLink.trim() + "\" target=\"_blank\">" + newSource.trim() + "</a"]));
        setToastMsg("Citation: ".concat(newSource.trim(), " \n Link: ").concat(newSingleLink.trim()));
        setNewSingleLink(""); //Doesn't clear field for some reason
        setNewSource(""); //Doesn't clear field for some reason
        toggleShowToast();
      } else {
        setAlertMsg("You must enter both Link and Citation.");
        toggleShowAlert();
      }
    }
  }, "Add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: "sm",
    bordered: true,
    responsive: true,
    style: {
      tableLayout: "fixed",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", {
    style: {
      background: "#eaecef",
      color: "#6c767d"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    style: {
      fontWeight: "normal"
    }
  }, "Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    style: {
      fontWeight: "normal"
    }
  }, "Citation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", {
    style: {
      borderTop: "none"
    }
  }, newExplanationLinks === null || newExplanationLinks === void 0 ? void 0 : newExplanationLinks.map(function (link, linkIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, " ", link.slice(9, link.indexOf(">") - 17)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, link.slice(link.indexOf(">") + 1, link.lastIndexOf("<"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
      variant: "outline-secondary",
      onClick: function onClick() {
        setNewExplanationLinks(newExplanationLinks.filter(function (currentLink, idx) {
          return idx !== linkIdx;
        }));
      }
    }, "Remove")));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Select, {
    "aria-label": "default select example",
    onChange: function onChange(e) {
      setNewCategory(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "none"
  }, "Select category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Asthma"
  }, "Asthma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Bronchiectasis"
  }, "Bronchiectasis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Chronic Obstructive Pulmonary Disease"
  }, "Chronic Obstructive Pulmonary Disease"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Critical Care"
  }, "Critical Care"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Infection"
  }, "Infection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Interstitial Lung Diseases"
  }, "Interstitial Lung Diseases"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Lung Transplant"
  }, "Lung Transplant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Lung Cancer"
  }, "Lung Cancer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Mediastinal Disorders"
  }, "Mediastinal Disorders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Other Pulmonary Diseases"
  }, "Other Pulmonary Diseases"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Pharmacology"
  }, "Pharmacology"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Pleural Diseases"
  }, "Pleural Diseases"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Pulmonary Function Testing"
  }, "Pulmonary Function Testing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Pulmonary Vascular Disease"
  }, "Pulmonary Vascular Disease"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Sleep"
  }, "Sleep"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"],
    controlId: "level"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", {
    className: "me-auto"
  }, "Level")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Select, {
    "aria-label": "default select example",
    onChange: function onChange(e) {
      setNewLevel(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowAlert(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "none"
  }, "Select difficulty level"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Easy"
  }, "Easy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Moderate"
  }, "Moderate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "Hard"
  }, "Hard")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "submit",
    variant: "secondary",
    onClick: function onClick() {
      if (newQuestion.trim() !== "" && newCategory !== "" && newCategory !== "none" && newLevel !== "" && newLevel !== "none") {
        handleShow();
      }
    }
  }, "Add Question")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
    show: showModal,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, modalMsg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "secondary",
    onClick: function onClick() {
      navigate("/questions/".concat(newQuestionid));
    }
  }, "View Question"))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddQuestion);

/***/ }),

/***/ "./client/features/addQ/firebase.js":
/*!******************************************!*\
  !*** ./client/features/addQ/firebase.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/esm/index.esm.js");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/esm/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/esm/index.esm.js");
// Import the functions you need from the SDKs you need



// require proces
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB7N-A9S6LI4jZE9DIqHemMF11ISeY_dgQ",
  authDomain: "medexpertsio-a0906.firebaseapp.com",
  projectId: "medexpertsio-a0906",
  storageBucket: "medexpertsio-a0906.appspot.com",
  messagingSenderId: "970371423179",
  appId: "1:970371423179:web:e5321a068eb1ec5fdbf44e",
  measurementId: "G-EMH2T6VRSW"
};

// Initialize Firebase
var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
var analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);
var storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(app);

/***/ })

}]);
//# sourceMappingURL=client_features_addQ_AddQuestion_js.bundle.js.map