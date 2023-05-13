"use strict";
(self["webpackChunkmedexperts_io"] = self["webpackChunkmedexperts_io"] || []).push([["client_features_landingPage_Dashboard_js"],{

/***/ "./client/features/landingPage/Dashboard.js":
/*!**************************************************!*\
  !*** ./client/features/landingPage/Dashboard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stats/user_questionsSlice */ "./client/features/stats/user_questionsSlice.js");
/* harmony import */ var _allQA_allQASlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allQA/allQASlice */ "./client/features/allQA/allQASlice.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");







var Dashboard = function Dashboard() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isAdmin ? dispatch((0,_allQA_allQASlice__WEBPACK_IMPORTED_MODULE_3__.fetchAllQuestionsAnswers)()).then(function () {
      return dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_2__.fetchAllUserQuestions)());
    }) : dispatch((0,_allQA_allQASlice__WEBPACK_IMPORTED_MODULE_3__.fetchAllQuestionsAnswers)()).then(function () {
      return dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_2__.fetchUserQuestions)());
    });
    isAdmin ? dispatch((0,_stats_user_questionsSlice__WEBPACK_IMPORTED_MODULE_2__.fetchAllUsers)()) : null;
  }, []);
  var allUsers = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.userQuestions.allUsers;
  });
  var isAdmin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.me.isAdmin;
  });
  var AllUserQuestions = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.userQuestions.UserQuestions;
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
  var totalEasyAnswered = "".concat(userEasy === null || userEasy === void 0 ? void 0 : userEasy.length, " / ").concat(easy === null || easy === void 0 ? void 0 : easy.length);
  var moderatePercentage = Math.round((userModerate === null || userModerate === void 0 ? void 0 : userModerate.length) / (moderate === null || moderate === void 0 ? void 0 : moderate.length) * 100);
  var totalmoderateAnswere = "".concat(userModerate === null || userModerate === void 0 ? void 0 : userModerate.length, " / ").concat(moderate === null || moderate === void 0 ? void 0 : moderate.length);
  var hardPercentage = Math.round((userHard === null || userHard === void 0 ? void 0 : userHard.length) / (hard === null || hard === void 0 ? void 0 : hard.length) * 100);
  var totalhardAnswered = "".concat(userHard === null || userHard === void 0 ? void 0 : userHard.length, " / ").concat(hard === null || hard === void 0 ? void 0 : hard.length);
  var allPercentage = Math.round((UserQuestionsAnswered === null || UserQuestionsAnswered === void 0 ? void 0 : UserQuestionsAnswered.length) / (questionsAnswers === null || questionsAnswers === void 0 ? void 0 : questionsAnswers.length) * 100);
  var totalallAnswered = "".concat(UserQuestionsAnswered === null || UserQuestionsAnswered === void 0 ? void 0 : UserQuestionsAnswered.length, " / ").concat(questionsAnswers === null || questionsAnswers === void 0 ? void 0 : questionsAnswers.length);
  var progressBarRatio = function progressBarRatio(category, plainText) {
    var questionAnswers = questionsAnswers.filter(function (question) {
      return question.category === category;
    }).length;
    var userAnswers = UserQuestions.filter(function (question) {
      return question.category === category;
    }).length;
    if (plainText) {
      return "".concat(userAnswers, " / ").concat(questionAnswers);
    } else {
      return userAnswers / questionAnswers;
    }
  };
  var allCategories = ["Asthma", "Bronchiectasis", "Chronic Obstructive Pulmonary Disease", "Critical Care", "Infection", "Interstitial Lung Diseases", "Lung Cancer", "Lung Transplant", "Mediastinal Disorders", "Other Pulmonary Diseases", "Pharmacology", "Pleural Diseases", "Pulmonary Function Testing", "Pulmonary Vascular Disease", "Sleep"];
  var progressCircleBackground = function progressCircleBackground(progress, color) {
    var angle = 360 * progress;
    return "radial-gradient(white 50%, transparent 51%),\n    conic-gradient(transparent 0deg ".concat(angle, "deg, gainsboro ").concat(angle, "deg 360deg),\n    conic-gradient(").concat(color, " 360deg, ").concat(color, ")");
  };
  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.auth.me;
    }),
    firstName = _useSelector3.firstName;
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
  var stylesCategory = {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fluid: true,
    style: {
      marginBottom: "5%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto"
  }, !isAdmin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcome"
  }, "Welcome,", " ", firstName ? firstName.charAt(0).toUpperCase() + firstName.slice(1) : "User", "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      marginTop: "30px",
      marginBottom: "35px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mx-auto",
    style: {
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: "90%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    style: {
      marginBottom: "20px",
      fontSize: "200%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, " Questions Answered ")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Easy Level ", totalEasyAnswered, " Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto",
    style: styles.progressBarEasy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, totalEasyAnswered), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "Easy Level"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Moderate Level ", totalmoderateAnswere, " Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Moderate Level. ".concat(totalmoderateAnswere, " Completed"),
    "aria-hidden": "true",
    id: "no-border",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto",
    style: styles.progressBarModerate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, totalmoderateAnswere), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, "Moderate Level")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Hard Level ", totalhardAnswered, " Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    title: "Hard Level. ".concat(totalhardAnswered, " Completed"),
    className: "mx-auto",
    style: styles.progressBarHard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, totalhardAnswered), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "Hard Level"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "All Levels ", totalallAnswered, " Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    title: "All Levels. ".concat(totalhardAnswered, " Completed"),
    className: "mx-auto",
    style: styles.progressBarAll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, totalallAnswered), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "All Levels")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      marginTop: "30px",
      marginBottom: "35px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mx-auto",
    style: {
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: "90%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    style: {
      marginBottom: "20px",
      fontSize: "200%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, " Questions Answered Correctly ")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Easy Level", " ", Math.round(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length * 100) || 0, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    title: "Easy Level. ".concat(Math.round(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length * 100) || 0, "% Correct"),
    className: "mx-auto",
    style: styles.progressBarEasy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, Math.round(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length * 100) || 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Correct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "Easy Level"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Moderate Level", " ", Math.round(UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length * 100) || 0, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    title: "Moderate Level. ".concat(Math.round(UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length * 100) || 0, "% Correct"),
    className: "mx-auto",
    style: styles.progressBarModerate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, Math.round(UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length * 100) || 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Correct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, "Moderate Level")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "Hard Level", " ", Math.round(UserHardQuestionsTotal.length / HardQuestionsTotal.length * 100) || 0, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    title: "Hard Level. ".concat(Math.round(UserHardQuestionsTotal.length / HardQuestionsTotal.length * 100) || 0, "% Correct"),
    className: "mx-auto",
    style: styles.progressBarHard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, Math.round(UserHardQuestionsTotal.length / HardQuestionsTotal.length * 100) || 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Correct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "Hard Level"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "visually-hidden"
  }, "All Levels", " ", Math.round(UserAllQuestionsTotal.length / AllUserQuestions.length * 100) || 0, "% Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "no-border",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    title: "All Levels. ".concat(Math.round(UserAllQuestionsTotal.length / AllUserQuestions.length * 100) || 0, "% Correct"),
    className: "mx-auto",
    style: styles.progressBarAll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarMiddle
  }, Math.round(UserAllQuestionsTotal.length / AllUserQuestions.length * 100) || 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.progressBarBackground
  }, "Correct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    className: "mx-auto",
    style: {
      paddingTop: "5px"
    }
  }, "All Levels")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      marginTop: "30px",
      marginBottom: "35px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mx-auto",
    style: {
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: "90%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    style: {
      marginBottom: "20px",
      fontSize: "200%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, " Categories ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, allCategories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      style: {
        paddingRight: "60px",
        paddingLeft: "60px",
        paddingTop: "15px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "visually-hidden"
    }, "".concat(category, " "), " ", progressBarRatio(category, true), " Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "no-border",
      "aria-hidden": "true",
      className: "mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mx-auto",
      style: {
        background: progressCircleBackground(progressBarRatio(category, false), "#f5ad27"),
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        position: "relative"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: stylesCategory.progressBarMiddle
    }, progressBarRatio(category, true)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: stylesCategory.progressBarBackground
    }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
      className: "mx-auto",
      style: {
        paddingTop: "5px"
      }
    }, category !== "Chronic Obstructive Pulmonary Disease" ? category : "COPD"))));
  })))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Admin Dashboard place holder"), "Number of users. ", allUsers.length)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

}]);
//# sourceMappingURL=client_features_landingPage_Dashboard_js.bundle.js.map