"use strict";
(self["webpackChunkmedexperts_io"] = self["webpackChunkmedexperts_io"] || []).push([["client_features_allQA_AllQA_js"],{

/***/ "./client/features/allQA/AllQA.js":
/*!****************************************!*\
  !*** ./client/features/allQA/AllQA.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _allQASlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allQASlice */ "./client/features/allQA/allQASlice.js");
/* harmony import */ var _stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stats/user_questionsSlice */ "./client/features/stats/user_questionsSlice.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loading_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading/LoadingScreen */ "./client/features/loading/LoadingScreen.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _AllQAadmin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AllQAadmin */ "./client/features/allQA/AllQAadmin.js");
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










var QuestionsAnswers = function QuestionsAnswers() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var itemsPerPage = 12;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    itemOffset = _useState2[0],
    setItemOffset = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentItems = _useState4[0],
    setCurrentItems = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    pageCount = _useState6[0],
    setPageCount = _useState6[1];
  var difficultyLevels = ["All Levels", "Easy", "Moderate", "Hard"];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(difficultyLevels[0]),
    _useState8 = _slicedToArray(_useState7, 2),
    currentDifficulty = _useState8[0],
    setCurrentDifficulty = _useState8[1];
  var categories = ["All Categories", "Asthma", "Bronchiectasis", "Chronic Obstructive Pulmonary Disease", "Critical Care", "Infection", "Interstitial Lung Diseases", "Lung Cancer", "Lung Transplant", "Mediastinal Disorders", "Other Pulmonary Diseases", "Pharmacology", "Pleural Diseases", "Pulmonary Function Testing", "Pulmonary Vascular Disease", "Sleep"];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(categories[0]),
    _useState10 = _slicedToArray(_useState9, 2),
    currentCategory1 = _useState10[0],
    setCurrentCategory1 = _useState10[1];
  var userExpertise = ["All Expertise", "Student", "Resident", "Fellow", "Physician Assistant", "Nurse", "Nurse Practitioner", "Pharmacist", "Internal Med", "Other"];
  var answerStatusOptions = ["All", "Answered", "Unanswered"];
  var currentAnswerStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(answerStatusOptions[0]);
  var answerCorrectOptions = ["All", "Correct", "Incorrect"];
  var currentCorrectStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(answerCorrectOptions[0]);
  var currentExpertise = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(userExpertise[0]);
  var userExpertiseRelation = {
    "All Expertise": null,
    Student: [true, "Easy"],
    Resident: [false, "Hard"],
    Fellow: null,
    "Physician Assistant": [true, "Easy"],
    Nurse: [true, "Easy"],
    "Nurse Practitioner": [true, "Easy"],
    Pharmacist: [true, "Easy"],
    "Internal Med": null,
    Other: null
  };
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    seeFavorites = _useState12[0],
    setSeeFavorites = _useState12[1];
  var isFavorited = false;
  var onFavoriteSwitch = function onFavoriteSwitch() {
    seeFavorites ? isFavorited = true : null;
    setSeeFavorites(!seeFavorites);
    filterFunction();
  };
  var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.questionsAnswers.loading;
  });
  var filterCriteria = [currentDifficulty, currentCategory1];
  var admin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.me.isAdmin;
  });
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.userQuestions;
    }),
    UserQuestions = _useSelector.UserQuestions,
    userEasy = _useSelector.userEasy,
    userModerate = _useSelector.userModerate,
    userHard = _useSelector.userHard;
  var UserQuestionsAnswered = UserQuestions.filter(function (question) {
    return question.answered !== null;
  });
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.questionsAnswers;
    }),
    questionsAnswers = _useSelector2.questionsAnswers,
    easy = _useSelector2.easy,
    moderate = _useSelector2.moderate,
    hard = _useSelector2.hard;
  var easyPercentage = Math.round((userEasy === null || userEasy === void 0 ? void 0 : userEasy.length) / (easy === null || easy === void 0 ? void 0 : easy.length) * 100);
  var moderatePercentage = Math.round((userModerate === null || userModerate === void 0 ? void 0 : userModerate.length) / (moderate === null || moderate === void 0 ? void 0 : moderate.length) * 100);
  var hardPercentage = Math.round((userHard === null || userHard === void 0 ? void 0 : userHard.length) / (hard === null || hard === void 0 ? void 0 : hard.length) * 100);
  var allPercentage = Math.round((UserQuestionsAnswered === null || UserQuestionsAnswered === void 0 ? void 0 : UserQuestionsAnswered.length) / (questionsAnswers === null || questionsAnswers === void 0 ? void 0 : questionsAnswers.length) * 100);
  var rightOrWrong = {};
  UserQuestions ? rightOrWrong = userRightOrWrong(UserQuestions) : null;
  var allQuestions = _toConsumableArray(questionsAnswers);
  allQuestions.sort(function (a, b) {
    return a.displayId - b.displayId;
  });
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    filteredQuestions = _useState14[0],
    setfilteredQuestions = _useState14[1];
  allQuestions.length && !filteredQuestions ? setfilteredQuestions(allQuestions) : null;
  var endOffset = itemOffset + itemsPerPage;
  filteredQuestions && !pageCount ? setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage)) : null;
  filteredQuestions && !currentItems ? setCurrentItems(filteredQuestions.slice(itemOffset, endOffset)) : null;
  var truncate = function truncate(string) {
    if (string.length > 50) {
      return string.slice(0, 50) + "...";
    } else {
      return string;
    }
  };
  function userRightOrWrong(array) {
    var map = {};
    for (var i = 0; i < array.length; i++) {
      if (!map[array[i]["questionAnswerId"]]) {
        map[array[i]["questionAnswerId"]] = array[i]["answered"];
      }
    }
    return map;
  }
  var favorite = function favorite(questionId) {
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_3__.updateUserQuestion)({
      questionAnswerId: questionId
    })).then(function () {
      return dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUserQuestions)());
    });
  };
  var favoriteStatus = function favoriteStatus(questionId) {
    var question = UserQuestions === null || UserQuestions === void 0 ? void 0 : UserQuestions.filter(function (question) {
      return question.questionAnswerId == questionId;
    });
    if (question && question[0] && question[0].favorite) return true;
    return false;
  };
  var pickDifficulty = function pickDifficulty(event) {
    setCurrentDifficulty(event);
    !seeFavorites ? isFavorited = true : null;
    filterCriteria[0] = event;
    filterFunction();
  };
  var pickExpertise = function pickExpertise(event) {
    currentExpertise.current = event;
    !seeFavorites ? isFavorited = true : null;
    filterFunction();
  };
  var pickCategory1 = function pickCategory1(event) {
    setCurrentCategory1(event);
    !seeFavorites ? isFavorited = true : null;
    filterCriteria[1] = event;
    filterFunction();
  };
  var changeAnswerStatus = function changeAnswerStatus(event) {
    currentAnswerStatus.current = event;
    !seeFavorites ? isFavorited = true : null;
    filterFunction();
  };
  var changeCorrectStatus = function changeCorrectStatus(event) {
    currentCorrectStatus.current = event;
    !seeFavorites ? isFavorited = true : null;
    filterFunction();
  };
  var handlePageClick = function handlePageClick(event) {
    var newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    var endOffset = newOffset + itemsPerPage;
    setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage));
    setCurrentItems(filteredQuestions.slice(newOffset, endOffset));
  };
  var handleKeyDown = function handleKeyDown(callback, param, event) {
    console.log("KEY", event.key, "PARAM", param, "CALLBACK", callback);
    if (param) {
      callback(param);
    } else {
      callback();
    }
  };
  var filterFunction = function filterFunction() {
    var multiFilter = allQuestions;
    var rightAnswers = UserQuestions.filter(function (question) {
      return question.answered === "right";
    }).map(function (question) {
      return question.questionAnswerId;
    });
    var wrongAnswers = UserQuestions.filter(function (question) {
      return question.answered === "wrong";
    }).map(function (question) {
      return question.questionAnswerId;
    });
    var answered = UserQuestions.filter(function (question) {
      return question.answered !== null;
    }).map(function (question) {
      return question.questionAnswerId;
    });
    var favNumbers = UserQuestions.filter(function (question) {
      return question.favorite === true;
    }).map(function (question) {
      return question.questionAnswerId;
    });
    currentAnswerStatus.current === "Answered" ? multiFilter = multiFilter.filter(function (question) {
      return answered.includes(question.id);
    }) : null;
    currentAnswerStatus.current === "Unanswered" ? multiFilter = multiFilter.filter(function (question) {
      return !answered.includes(question.id);
    }) : null;
    currentCorrectStatus.current === "Correct" ? multiFilter = multiFilter.filter(function (question) {
      return rightAnswers.includes(question.id);
    }) : null;
    currentCorrectStatus.current === "Incorrect" ? multiFilter = multiFilter.filter(function (question) {
      return wrongAnswers.includes(question.id);
    }) : null;
    isFavorited ? multiFilter = multiFilter.filter(function (question) {
      return favNumbers.includes(question.id);
    }) : null;
    if (userExpertiseRelation[currentExpertise.current]) {
      if (userExpertiseRelation[currentExpertise.current][0] === true) {
        multiFilter = multiFilter.filter(function (question) {
          return question.level === userExpertiseRelation[currentExpertise.current][1];
        });
      } else {
        multiFilter = multiFilter.filter(function (question) {
          return question.level !== userExpertiseRelation[currentExpertise.current][1];
        });
      }
    }
    var _loop = function _loop(i) {
      if (filterCriteria[i] === "All Levels" || filterCriteria[i] === "All Categories") {
        return "continue";
      } else {
        multiFilter = multiFilter.filter(function (question) {
          return question.level === filterCriteria[i] || question.category === filterCriteria[i];
        });
      }
    };
    for (var i = 0; i < filterCriteria.length; i++) {
      var _ret = _loop(i);
      if (_ret === "continue") continue;
    }
    multiFilter.length ? setfilteredQuestions(multiFilter) : null;
    multiFilter.length ? setCurrentItems(multiFilter.slice(0, 12)) : setCurrentItems("nada");
    multiFilter.length ? setPageCount(Math.ceil(multiFilter.length / itemsPerPage)) : setPageCount(0);
    setItemOffset(0);
  };
  var progressCircleBackground = function progressCircleBackground(progress, color) {
    var angle = 360 * progress;
    return "radial-gradient(white 50%, transparent 51%),\n    conic-gradient(transparent 0deg ".concat(angle, "deg, gainsboro ").concat(angle, "deg 360deg),\n    conic-gradient(").concat(color, " 360deg, ").concat(color, ")");
  };
  var cardBodyColor = function cardBodyColor(id) {
    if (rightOrWrong && rightOrWrong[id] === "right") {
      return "rgb(144, 238, 144, .25)";
    } else if (rightOrWrong && rightOrWrong[id] === "wrong") {
      return "rgb(0, 0, 0, .10)";
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_allQASlice__WEBPACK_IMPORTED_MODULE_2__.fetchAllQuestionsAnswers)());
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUserQuestions)());
  }, []);
  var styles = {
    progressBarEasy: {
      background: progressCircleBackground(easyPercentage / 100, "lightgreen"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative"
    },
    progressBarModerate: {
      background: progressCircleBackground(moderatePercentage / 100, "#f5ad27"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative"
    },
    progressBarHard: {
      background: progressCircleBackground(hardPercentage / 100, "#f55b49"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative"
    },
    progressBarAll: {
      background: progressCircleBackground(allPercentage / 100, "#bf5eff"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative"
    },
    progressBarBackground: {
      position: "absolute",
      bottom: "30%",
      width: "100%",
      textAlign: "center",
      fontSize: "60%"
    },
    progressBarMiddle: {
      position: "absolute",
      bottom: "40%",
      width: "100%",
      textAlign: "center",
      fontSize: "150%"
    }
  };
  var previousButton = document.querySelector('[aria-label="Previous page"]');
  previousButton ? previousButton.remove() : null;
  var nextButton = document.querySelector('[aria-label="Next page"]');
  nextButton ? nextButton.remove() : null;
  if (admin) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AllQAadmin__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        marginTop: "30px",
        marginBottom: "35px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "mx-auto",
      style: {
        paddingLeft: 0,
        paddingRight: 0,
        maxWidth: "90%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Header, {
      style: {
        marginBottom: "20px",
        fontSize: "200%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "My Progress"))), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "visually-hidden"
    }, "Easy Level ", easyPercentage, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "no-border",
      "aria-hidden": "true",
      className: "mx-auto "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mx-auto",
      style: styles.progressBarEasy
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.progressBarMiddle
    }, easyPercentage, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.progressBarBackground
    }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
      className: "mx-auto",
      style: {
        paddingTop: "5px"
      }
    }, "Easy Level"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "visually-hidden"
    }, "Moderate Level ", moderatePercentage, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "no-border",
      "aria-hidden": "true",
      className: "mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mx-auto",
      style: styles.progressBarModerate
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.progressBarMiddle
    }, moderatePercentage, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.progressBarBackground
    }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
      className: "mx-auto",
      style: {
        paddingTop: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, "Moderate Level")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "visually-hidden"
    }, "Hard Level ", hardPercentage, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "no-border",
      "aria-hidden": "true",
      className: "mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mx-auto",
      style: styles.progressBarHard
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.progressBarMiddle
    }, hardPercentage, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.progressBarBackground
    }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
      className: "mx-auto",
      style: {
        paddingTop: "5px"
      }
    }, "Hard Level"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "visually-hidden"
    }, "All Levels ", allPercentage, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "no-border",
      "aria-hidden": "true",
      className: "mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mx-auto",
      style: styles.progressBarAll
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.progressBarMiddle
    }, allPercentage, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.progressBarBackground
    }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
      className: "mx-auto",
      style: {
        paddingTop: "5px"
      }
    }, "All Levels"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        marginBottom: "30px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "mx-auto",
      style: {
        paddingLeft: 0,
        paddingRight: 0,
        maxWidth: "90%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Header, {
      style: {
        marginBottom: "20px",
        fontSize: "200%",
        boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)",
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, currentExpertise.current, " & ", currentDifficulty, " &", " ", currentCategory1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        marginBottom: "20px"
      },
      xs: "auto",
      className: "justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onSelect: function onSelect(event) {
        return pickExpertise(event);
      },
      style: {
        marginBottom: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Toggle, {
      variant: "success",
      id: "dropdown-basic"
    }, "For ", currentExpertise.current, "s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Menu, null, userExpertise.map(function (expertise) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        key: expertise,
        eventKey: expertise
      }, expertise);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onSelect: function onSelect(event) {
        return pickDifficulty(event);
      },
      style: {
        marginBottom: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Toggle, {
      variant: "success",
      id: "dropdown-basic"
    }, currentDifficulty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Menu, null, difficultyLevels.map(function (difficulty) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        key: difficulty,
        eventKey: difficulty
      }, difficulty);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onSelect: function onSelect(event) {
        return pickCategory1(event);
      },
      style: {
        marginBottom: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Toggle, {
      variant: "success",
      id: "dropdown-basic"
    }, currentCategory1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Menu, null, categories.map(function (category) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        key: category,
        eventKey: category
      }, category);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onSelect: function onSelect(event) {
        return changeAnswerStatus(event);
      },
      style: {
        marginBottom: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Toggle, {
      variant: "success",
      id: "dropdown-basic"
    }, currentAnswerStatus.current), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Menu, null, answerStatusOptions.map(function (category) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        key: category,
        eventKey: category
      }, category);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onSelect: function onSelect(event) {
        return changeCorrectStatus(event);
      },
      style: {
        marginBottom: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Toggle, {
      variant: "success",
      id: "dropdown-basic"
    }, currentCorrectStatus.current), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Menu, null, answerCorrectOptions.map(function (category) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        key: category,
        eventKey: category
      }, category);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Switch, {
      tabIndex: 0,
      onChange: function onChange() {
        return onFavoriteSwitch();
      },
      onKeyDown: function onKeyDown(event) {
        return event.key === "Space" || event.key === "Enter" ? handleKeyDown(onFavoriteSwitch, null, event) : null;
      },
      id: "Favorites Only Switch",
      label: "Favorites Only",
      checked: !seeFavorites
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "justify-content-center"
    }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_loading_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__["default"], null), currentItems && currentItems.length && currentItems !== "nada" ? currentItems.map(function (question) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "questionCard",
        key: question.id,
        style: {
          padding: "0px",
          width: "18rem",
          marginRight: "10px",
          marginLeft: "10px",
          marginBottom: "20px",
          boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Header, {
        style: {
          backgroundColor: question.color
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
        style: {
          backgroundColor: cardBodyColor(question.id)
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {
        "aria-label": "Question Number ".concat(question.displayId, ", difficulty: ").concat(question.level, " "),
        style: {
          textDecoration: "none"
        },
        to: "/questions/".concat(question.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
        style: {
          color: "black",
          textAlign: "center",
          fontSize: "20px"
        }
      }, "Question Number ", question.displayId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Text, {
        style: {
          color: "black",
          textAlign: "center",
          fontSize: "15px"
        }
      }, truncate(question.question))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
        alt: "".concat(question.category),
        label: question.category === "Chronic Obstructive Pulmonary Disease" ? "COPD" : question.category,
        onClick: function onClick() {
          return pickCategory1(question.category);
        },
        onKeyDown: function onKeyDown(event) {
          return event.key === "Space" || event.key === "Enter" ? handleKeyDown(pickCategory1, question.category, event) : null;
        },
        color: "default",
        variant: "outlined",
        size: "small"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          return favorite(question.id);
        },
        onKeyDown: function onKeyDown(event) {
          return event.key === "Space" || event.key === "Enter" ? handleKeyDown(function () {
            return favorite;
          }, question.id, event) : null;
        },
        style: {
          border: "none",
          background: "none",
          "float": "right",
          cursor: "pointer"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Img, {
        tabIndex: -1,
        type: "button",
        alt: "Heart button for question ".concat(question.displayId, ". ").concat(favoriteStatus(question.id) ? "Favorited" : "Not Favorited", " "),
        style: {
          width: "20px",
          height: "20px"
        },
        variant: "top",
        src: favoriteStatus(question.id) ? "/heart(red).webp" : "/heart.webp"
      }))));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, "\"Sorry, we didn't find anything matching that\"")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "mx-auto",
      id: "no-border"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_paginate__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "pagination mx-auto",
      nextLabel: "next >",
      onPageChange: handlePageClick,
      pageRangeDisplayed: 3,
      marginPagesDisplayed: 2,
      pageCount: pageCount,
      previousLabel: "< previous",
      pageClassName: "page-item",
      pageLinkClassName: "page-link",
      previousClassName: "page-item",
      previousLinkClassName: "page-link",
      nextClassName: "page-item",
      nextLinkClassName: "page-link",
      breakLabel: ". . .",
      breakClassName: "page-item",
      breakLinkClassName: "page-link",
      containerClassName: "pagination",
      activeClassName: "active"
    })))))));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionsAnswers);

/***/ }),

/***/ "./client/features/allQA/AllQAadmin.js":
/*!*********************************************!*\
  !*** ./client/features/allQA/AllQAadmin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fab/Fab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _loading_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading/LoadingScreen */ "./client/features/loading/LoadingScreen.js");
/* harmony import */ var _stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stats/user_questionsSlice */ "./client/features/stats/user_questionsSlice.js");
/* harmony import */ var _allQASlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allQASlice */ "./client/features/allQA/allQASlice.js");
/* harmony import */ var _addQ_AddQuestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../addQ/AddQuestion */ "./client/features/addQ/AddQuestion.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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











var AllQAadmin = function AllQAadmin() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var userId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.auth.me.id;
  });
  var itemsPerPage = 12;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    itemOffset = _useState2[0],
    setItemOffset = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentItems = _useState4[0],
    setCurrentItems = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    pageCount = _useState6[0],
    setPageCount = _useState6[1];
  var difficultiyLevels = ["All Levels", "Easy", "Moderate", "Hard"];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(difficultiyLevels[0]),
    _useState8 = _slicedToArray(_useState7, 2),
    currentDifficulty = _useState8[0],
    setCurrentDifficulty = _useState8[1];
  var userExpertise = ["All Expertise", "Student", "Resident", "Fellow", "Physician Assistant", "Nurse", "Nurse Practitioner", "Pharmacist", "Internal Med", "Other"];
  var expertisePicked = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("All Expertise");
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userExpertise[0]),
    _useState10 = _slicedToArray(_useState9, 2),
    currentCategory2 = _useState10[0],
    setCurrentCategory2 = _useState10[1];
  var categories = ["All Categories", "Asthma", "Bronchiectasis", "Chronic Obstructive Pulmonary Disease", "Critical Care", "Infection", "Interstitial Lung Diseases", "Lung Cancer", "Lung Transplant", "Mediastinal Disorders", "Other Pulmonary Diseases", "Pharmacology", "Pleural Diseases", "Pulmonary Function Testing", "Pulmonary Vascular Disease", "Sleep"];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(categories[0]),
    _useState12 = _slicedToArray(_useState11, 2),
    currentCategory1 = _useState12[0],
    setCurrentCategory1 = _useState12[1];
  var frequencyList = ["Frequency Sort", "Most Answered", "Least Answered"];
  var currentFrequency = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(frequencyList[0]);
  var percentCorrectList = ["Percent Correct Sort", "Most Correct", "Least Correct"];
  var currentPercent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(percentCorrectList[0]);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    seeFavorites = _useState14[0],
    setSeeFavorites = _useState14[1];
  var isFavorited = false;
  var onFavoriteSwitch = function onFavoriteSwitch() {
    seeFavorites ? isFavorited = true : null;
    setSeeFavorites(!seeFavorites);
    filterFunction();
  };
  var userExpertiseSelection = function userExpertiseSelection(event) {
    setCurrentCategory2(event);
    !seeFavorites ? isFavorited = true : null;
    expertisePicked.current = event;
    filterFunction();
  };
  var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.questionsAnswers.loading;
  });
  var filterCriteria = [currentDifficulty, currentCategory1];
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
      return state.userQuestions;
    }),
    mostAnswered = _useSelector.mostAnswered,
    leastAnswered = _useSelector.leastAnswered,
    mostCorrect = _useSelector.mostCorrect,
    leastCorrect = _useSelector.leastCorrect,
    activeUserQAs = _useSelector.activeUserQAs;
  var userQuestions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.userQuestions.UserQuestions;
  });
  var AllUserQuestions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.userQuestions.allUserQuestions;
  });
  var stateQuestions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.questionsAnswers.questionsAnswers;
  });
  var expertiseQuestions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.userQuestions.expertiseQuestions;
  });
  var EasyQuestionsTotal = AllUserQuestions.filter(function (question) {
    return question.level === "Easy";
  });
  var ModerateQuestionsTotal = AllUserQuestions.filter(function (question) {
    return question.level === "Moderate";
  });
  var HardQuestionsTotal = AllUserQuestions.filter(function (question) {
    return question.level === "Hard";
  });
  var UsereasyQuestionsTotal = AllUserQuestions.filter(function (question) {
    return question.level === "Easy" && question.answered === "right";
  });
  var UserModerateQuestionsTotal = AllUserQuestions.filter(function (question) {
    return question.level === "Moderate" && question.answered === "right";
  });
  var UserHardQuestionsTotal = AllUserQuestions.filter(function (question) {
    return question.level === "Hard" && question.answered === "right";
  });
  var UserAllQuestionsTotal = AllUserQuestions.filter(function (question) {
    return question.answered === "right";
  });
  var easyQuestionsAnsweredPercentage = UsereasyQuestionsTotal.length / EasyQuestionsTotal.length * 100;
  var moderateQuestionsAnsweredPercentage = UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length * 100;
  var hardQuestionsAnsweredPercentage = UserHardQuestionsTotal.length / HardQuestionsTotal.length * 100;
  var allQuestionAnsweredPercentage = UserAllQuestionsTotal.length / AllUserQuestions.length * 100;
  var allQuestions = _toConsumableArray(stateQuestions);
  allQuestions.sort(function (a, b) {
    return a.displayId - b.displayId;
  });
  var filteredQuestions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  allQuestions.length && !filteredQuestions.current ? filteredQuestions.current = allQuestions : null;
  var endOffset = itemOffset + itemsPerPage;
  filteredQuestions.current && !pageCount ? setPageCount(Math.ceil(filteredQuestions.current.length / itemsPerPage)) : null;
  filteredQuestions.current && !currentItems ? setCurrentItems(filteredQuestions.current.slice(itemOffset, endOffset)) : null;
  var truncate = function truncate(string) {
    if (string.length > 20) {
      return string.slice(0, 50) + "...";
    } else {
      return string;
    }
  };
  var data = function data(id) {
    var filterDataById = AllUserQuestions.filter(function (x) {
      return x.questionAnswerId === id;
    });
    var filterDataByCorrect = filterDataById.filter(function (x) {
      return x.answered === "right";
    });
    var percentageCorrect = Math.round(filterDataByCorrect.length / filterDataById.length * 100);
    if (percentageCorrect || percentageCorrect === 0) {
      return percentageCorrect;
    } else {
      return null;
    }
  };
  var filterDataById = function filterDataById(id) {
    var filterData = AllUserQuestions.filter(function (x) {
      return x.questionAnswerId === id;
    });
    return filterData.length;
  };
  var filterDataByCorrect = function filterDataByCorrect(id) {
    var filterData = AllUserQuestions.filter(function (x) {
      return x.questionAnswerId === id;
    });
    var filterDataByRight = filterData.filter(function (x) {
      return x.answered === "right";
    });
    return filterDataByRight.length;
  };
  var favorite = function favorite(questionId) {
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__.updateUserQuestion)({
      questionAnswerId: questionId
    })).then(function () {
      return dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchUserQuestions)());
    });
  };
  var favoriteStatus = function favoriteStatus(questionId) {
    var question = userQuestions.filter(function (question) {
      return question.questionAnswerId == questionId;
    });
    if (question[0] && question[0].favorite) return true;
    return false;
  };
  var pickDifficulty = function pickDifficulty(event) {
    setCurrentDifficulty(event);
    !seeFavorites ? isFavorited = true : null;
    filterCriteria[0] = event;
    filterFunction();
  };
  var pickCategory1 = function pickCategory1(event) {
    setCurrentCategory1(event);
    !seeFavorites ? isFavorited = true : null;
    filterCriteria[1] = event;
    filterFunction();
  };
  var pickFrequency = function pickFrequency(event) {
    currentFrequency.current = event;
    !seeFavorites ? isFavorited = true : null;
    filterFunction();
  };
  var pickPercentCorrect = function pickPercentCorrect(event) {
    currentPercent.current = event;
    !seeFavorites ? isFavorited = true : null;
    filterFunction();
  };
  var handlePageClick = function handlePageClick(event) {
    var newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    var endOffset = newOffset + itemsPerPage;
    setPageCount(Math.ceil(filteredQuestions.current.length / itemsPerPage));
    setCurrentItems(filteredQuestions.current.slice(newOffset, endOffset));
  };
  var filterFunction = function filterFunction() {
    var multiFilter = allQuestions;
    currentFrequency.current === "Frequency Sort" ? null : multiFilter = frequencySort(multiFilter, activeUserQAs, currentFrequency.current);
    currentPercent.current === "Percent Correct Sort" ? null : multiFilter = percentCorrectSort(multiFilter, activeUserQAs, currentPercent.current);
    currentPercent.current === "Least Correct" && currentFrequency.current === "Least Answered" ? multiFilter = frequencySort(multiFilter, activeUserQAs, currentFrequency.current) : null;
    currentPercent.current === "Least Correct" && currentFrequency.current === "Most Answered" ? multiFilter = percentCorrectSort(multiFilter, activeUserQAs, currentPercent.current) : null;
    var favNumbers = userQuestions.filter(function (question) {
      return question.favorite === true;
    }).map(function (question) {
      return question.questionAnswerId;
    });
    isFavorited ? multiFilter = multiFilter.filter(function (question) {
      return favNumbers.includes(question.id);
    }) : null;
    var _loop = function _loop(i) {
      if (filterCriteria[i] === "All Levels" || filterCriteria[i] === "All Categories") {
        return "continue";
      } else {
        multiFilter = multiFilter.filter(function (question) {
          return question.level === filterCriteria[i] || question.category === filterCriteria[i];
        });
      }
    };
    for (var i = 0; i < filterCriteria.length; i++) {
      var _ret = _loop(i);
      if (_ret === "continue") continue;
    }
    multiFilter = expertiseFilterFunction(multiFilter);
    multiFilter.length ? filteredQuestions.current = multiFilter : null;
    multiFilter.length ? setCurrentItems(multiFilter.slice(0, 12)) : setCurrentItems("nada");
    multiFilter.length ? setPageCount(Math.ceil(multiFilter.length / itemsPerPage)) : setPageCount(0);
    setItemOffset(0);
    return multiFilter;
  };
  var progressCircleBackground = function progressCircleBackground(progress, color) {
    var angle = 360 * progress;
    return "radial-gradient(white 50%, transparent 51%),\n    conic-gradient(transparent 0deg ".concat(angle, "deg, gainsboro ").concat(angle, "deg 360deg),\n    conic-gradient(").concat(color, " 360deg, ").concat(color, ")");
  };
  var frequencySort = function frequencySort(allQAs, allUserQs, type) {
    if (allQAs.length === 0) return [];
    var frequency = {};
    for (var i = 0; i < allUserQs.length; i++) {
      if (!frequency[allUserQs[i]["questionAnswerId"]]) {
        frequency[allUserQs[i]["questionAnswerId"]] = 1;
      } else {
        frequency[allUserQs[i]["questionAnswerId"]]++;
      }
    }
    for (var _i2 = 0; _i2 < allQAs.length; _i2++) {
      if (!frequency[allQAs[_i2]["id"]]) {
        frequency[allQAs[_i2]["id"]] = 1;
      } else {
        frequency[allQAs[_i2]["id"]]++;
      }
    }
    var allQuestions = allQAs.map(function (question) {
      return _objectSpread(_objectSpread({}, question), {}, {
        frequency: frequency[question.id]
      });
    });
    var sortedByFrequency = allQuestions.slice().sort(function (a, b) {
      return b.frequency - a.frequency;
    });
    var sortedByFrequencyReverse = allQuestions.slice().sort(function (a, b) {
      return a.frequency - b.frequency;
    });
    if (type === "Most Answered") {
      return sortedByFrequency;
    } else if (type === "Least Answered") {
      return sortedByFrequencyReverse;
    }
  };
  var percentCorrectSort = function percentCorrectSort(allQAs, allUserQs, type) {
    if (allQAs.length === 0) return [];
    var frequency = {};
    for (var i = 0; i < allQAs.length; i++) {
      if (!frequency[allQAs[i]["id"]]) {
        frequency[allQAs[i]["id"]] = {
          right: 0,
          total: 0
        };
      }
    }
    for (var _i3 = 0; _i3 < allUserQs.length; _i3++) {
      if (allUserQs[_i3]["answered"] === "right") {
        frequency[allUserQs[_i3]["questionAnswerId"]]["right"]++;
        frequency[allUserQs[_i3]["questionAnswerId"]]["total"]++;
      } else {
        frequency[allUserQs[_i3]["questionAnswerId"]]["total"]++;
      }
    }
    var allQuestions = allQAs.map(function (question) {
      return _objectSpread(_objectSpread({}, question), {}, {
        percentCorrect: Math.round(frequency[question.id]["right"] / frequency[question.id]["total"] * 100) || 0
      });
    });
    var sortedByPercentCorrect = allQuestions.slice().sort(function (a, b) {
      return b.percentCorrect - a.percentCorrect;
    });
    var sortedByPercentCorrectReverse = allQuestions.slice().sort(function (a, b) {
      return a.percentCorrect - b.percentCorrect;
    });
    if (type === "Most Correct") {
      return sortedByPercentCorrect;
    } else if (type === "Least Correct") {
      return sortedByPercentCorrectReverse;
    }
  };
  var expertiseFilterFunction = function expertiseFilterFunction(multiFilter) {
    if (expertisePicked.current === "All Expertise") {
      return multiFilter;
    }
    var userQAs = expertiseQuestions[expertisePicked.current];
    var userQAIds = userQAs.map(function (question) {
      return question.id;
    });
    multiFilter = multiFilter.filter(function (question) {
      return userQAIds.includes(question.id);
    });
    return multiFilter;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchExpertiseQuestions)());
    dispatch((0,_allQASlice__WEBPACK_IMPORTED_MODULE_5__.fetchAllQuestionsAnswers)());
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchUserQuestions)());
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchAllUserQuestions)());
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchByAnswerFrequency)());
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchPercentCorrect)());
    dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_4__.fetchActiveQAs)());
  }, []);
  var styles = {
    progressBarEasy: {
      background: progressCircleBackground(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length || 0, "lightgreen"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative"
    },
    progressBarModerate: {
      background: progressCircleBackground(UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length || 0, "#f5ad27"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative"
    },
    progressBarHard: {
      background: progressCircleBackground(UserHardQuestionsTotal.length / HardQuestionsTotal.length || 0, "#f55b49"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative"
    },
    progressBarAll: {
      background: progressCircleBackground(UserAllQuestionsTotal.length / AllUserQuestions.length || 0, "#bf5eff"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative"
    },
    progressBarBackground: {
      position: "absolute",
      bottom: "30%",
      width: "100%",
      textAlign: "center",
      fontSize: "60%"
    },
    progressBarMiddle: {
      position: "absolute",
      bottom: "40%",
      width: "100%",
      textAlign: "center",
      fontSize: "150%"
    }
  };
  var previousButton = document.querySelector('[aria-label="Previous page"]');
  previousButton ? previousButton.remove() : null;
  var nextButton = document.querySelector('[aria-label="Next page"]');
  nextButton ? nextButton.remove() : null;

  //add question modal
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    show = _useState16[0],
    setShow = _useState16[1];
  var handleClose = function handleClose() {
    return setShow(false);
  };
  var handleOpen = function handleOpen() {
    return setShow(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: "top",
    style: {
      backgroundColor: "black"
    },
    placement: "top",
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "tooltip-top"
    }, "Add new question")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: "medium",
    onClick: handleOpen,
    "aria-label": "add new question",
    style: {
      position: "fixed",
      bottom: "15px",
      right: "8px",
      backgroundColor: "green"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      color: "white"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "lg",
    centered: true,
    scrollable: true,
    show: show,
    onHide: handleClose,
    backdrop: "static",
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Header, {
    closeButton: true,
    style: {
      //alignSelf: "center",
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Title, {
    style: {
      fontWeight: "bold",
      fontSize: "150%",
      padding: "0px"
    }
  }, "Add New Question")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_addQ_AddQuestion__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      marginTop: "30px",
      marginBottom: "35px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "mx-auto",
    style: {
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: "90%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Header, {
    style: {
      marginBottom: "20px",
      fontSize: "200%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, "Student Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "50%"
    },
    className: ""
  }, "The below charts represent the percentage of questions answered correctly in each category (i.e., of the 'Easy' questions answered,", " ", Math.round(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length * 100) || 0, "% were answered correctly)."))), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Easy Level", " ", Math.round(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length * 100) || 0, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto",
    style: styles.progressBarEasy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, Math.round(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length * 100) || 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Correct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "Easy Level"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Moderate Level", " ", Math.round(UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length * 100) || 0, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto",
    style: styles.progressBarModerate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, Math.round(UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length * 100) || 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Correct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, "Moderate Level")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Hard Level", " ", Math.round(UserHardQuestionsTotal.length / HardQuestionsTotal.length * 100) || 0, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto",
    style: styles.progressBarHard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, Math.round(UserHardQuestionsTotal.length / HardQuestionsTotal.length * 100) || 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Correct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "Hard Level"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "All Levels", " ", Math.round(UserAllQuestionsTotal.length / AllUserQuestions.length * 100) || 0, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto",
    style: styles.progressBarAll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, Math.round(UserAllQuestionsTotal.length / AllUserQuestions.length * 100) || 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Correct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "All Levels"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      marginBottom: "30px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "mx-auto",
    style: {
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: "90%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Header, {
    style: {
      marginBottom: "20px",
      fontSize: "200%",
      boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "mx-auto"
  }, currentDifficulty, " & ", currentCategory1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: "auto",
    style: {
      marginBottom: "30px"
    },
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    md: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onSelect: function onSelect(event) {
      return pickDifficulty(event);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Toggle, {
    variant: "success",
    id: "dropdown-basic"
  }, currentDifficulty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Menu, null, difficultiyLevels.map(function (difficulty) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
      key: difficulty,
      eventKey: difficulty
    }, difficulty);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    md: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onSelect: function onSelect(event) {
      return pickCategory1(event);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Toggle, {
    variant: "success",
    id: "dropdown-basic"
  }, currentCategory1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Menu, null, categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
      key: category,
      eventKey: category
    }, category);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Menu, null, categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
      key: category,
      eventKey: category
    }, category);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    md: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onSelect: function onSelect(event) {
      return userExpertiseSelection(event);
    },
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Toggle, {
    variant: "success",
    id: "dropdown-basic"
  }, expertisePicked.current), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Menu, null, userExpertise.map(function (expertise) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
      key: expertise,
      eventKey: expertise
    }, expertise);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    md: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onSelect: function onSelect(event) {
      return pickFrequency(event);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Toggle, {
    variant: "success",
    id: "dropdown-basic"
  }, currentFrequency.current), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Menu, null, frequencyList.map(function (frequency) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
      key: frequency,
      eventKey: frequency
    }, frequency);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    md: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onSelect: function onSelect(event) {
      return pickPercentCorrect(event);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Toggle, {
    variant: "success",
    id: "dropdown-basic"
  }, currentPercent.current), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Menu, null, percentCorrectList.map(function (correct) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
      key: correct,
      eventKey: correct
    }, correct);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    md: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Switch, {
    onChange: function onChange() {
      return onFavoriteSwitch();
    },
    id: "custom-switch",
    label: "Favorites Only",
    checked: !seeFavorites
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "justify-content-center"
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_loading_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__["default"], null), currentItems && currentItems.length && currentItems !== "nada" ? currentItems.map(function (question, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: question.id,
      style: {
        padding: "0px",
        width: "18rem",
        marginRight: "10px",
        marginLeft: "10px",
        marginBottom: "20px",
        boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Header, {
      style: {
        backgroundColor: question.color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Title, {
      style: {
        fontSize: "20px",
        textAlign: "center",
        color: "black"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
      "aria-label": "Question Number ".concat(question.displayId, ", difficulty: ").concat(question.level, " "),
      to: "/questions/".concat(question.id),
      style: {
        textDecoration: "none",
        color: "black"
      }
    }, "Question Number ", question.displayId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Text, {
      style: {
        fontSize: "15px",
        textAlign: "center"
      }
    }, truncate(question.question)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      spacing: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
        spacing: 2
      }, "Correct Response: ".concat(data(question.id) || data(question.id) === 0 ? data(question.id) : 0, "%")),
      color: "".concat(data(question.id) && data(question.id) >= 50 ? "success" : "error"),
      variant: "outlined"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      label: "Total Response(s): ".concat(filterDataById(question.id)),
      size: "small",
      color: "primary",
      variant: "outlined"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: {
        width: "100%",
        height: 8,
        pb: 0,
        mb: 0
      },
      variant: "determinate",
      value: data(question.id),
      color: "".concat(data(question.id) && data(question.id) >= 50 ? "success" : "error"),
      "aria-hidden": "true"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      label: question.category === "Chronic Obstructive Pulmonary Disease" ? "COPD" : question.category,
      onClick: function onClick() {
        return pickCategory1(question.category);
      },
      color: "default",
      size: "small",
      variant: "outlined"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return favorite(question.id);
      },
      style: {
        border: "none",
        background: "none",
        "float": "right",
        cursor: "pointer"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Img, {
      tabIndex: -1,
      type: "button",
      alt: "Heart button for question ".concat(question.displayId, ". ").concat(favoriteStatus(question.id) ? "Favorited" : "Not Favorited", " "),
      style: {
        width: "20px"
      },
      variant: "top",
      src: favoriteStatus(question.id) ? "/heart(red).webp" : "/heart.webp"
    }))));
  }) : "Sorry, we didn't find anything matching that"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "mx-auto",
    id: "no-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_paginate__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "pagination mx-auto",
    onPageChange: handlePageClick,
    pageRangeDisplayed: 3,
    marginPagesDisplayed: 2,
    pageCount: pageCount,
    pageClassName: "page-item",
    pageLinkClassName: "page-link",
    previousClassName: "page-item",
    previousLinkClassName: "page-link",
    nextClassName: "page-item",
    nextLinkClassName: "page-link",
    breakLabel: "...",
    breakClassName: "page-item",
    breakLinkClassName: "page-link",
    containerClassName: "pagination",
    activeClassName: "active"
  }), " "))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllQAadmin);

/***/ })

}]);
//# sourceMappingURL=client_features_allQA_AllQA_js.bundle.js.map