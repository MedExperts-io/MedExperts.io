import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Dropdown, Row, Col, Form, Container } from "react-bootstrap";
import { fetchAllQuestionsAnswers } from "./allQASlice";
import { token } from "morgan";
import {
  fetchUserQuestions,
  updateUserQuestion,
} from "../stats/user_questionsSlice";
import ReactPaginate from "react-paginate";
import LoadingScreen from "../loading/LoadingScreen";
import { Chip } from "@mui/material";
import AllQAadmin from "./AllQAadmin";

const QuestionsAnswers = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const difficultyLevels = ["All Levels", "Easy", "Moderate", "Hard"];
  const [currentDifficulty, setCurrentDifficulty] = useState(
    difficultyLevels[0]
  );
  const categories = [
    "All Categories",
    "Asthma",
    "Bronchiectasis",
    "Chronic Obstructive Pulmonary Disease",
    "Critical Care",
    "Infection",
    "Interstitial Lung Diseases",
    "Lung Cancer",
    "Lung Transplant",
    "Mediastinal Disorders",
    "Other Pulmonary Diseases",
    "Pharmacology",
    "Pleural Diseases",
    "Pulmonary Function Testing",
    "Pulmonary Vascular Disease",
    "Sleep",
  ];
  const [currentCategory1, setCurrentCategory1] = useState(categories[0]);
  const userExpertise = [
    "All Expertise",
    "Student",
    "Resident",
    "Fellow",
    "Physician Assistant",
    "Nurse",
    "Nurse Practitioner",
    "Pharmacist",
    "Internal Med",
    "Other",
  ];
  const answerStatusOptions = ["All", "Answered", "Unanswered"];
  const currentAnswerStatus = useRef(answerStatusOptions[0]);
  const answerCorrectOptions = ["All", "Correct", "Incorrect"];
  const currentCorrectStatus = useRef(answerCorrectOptions[0]);
  const currentExpertise = useRef(userExpertise[0]);
  const userExpertiseRelation = {
    "All Expertise": null,
    Student: [true, "Easy"],
    Resident: [false, "Hard"],
    Fellow: null,
    "Physician Assistant": [true, "Easy"],
    Nurse: [true, "Easy"],
    "Nurse Practitioner": [true, "Easy"],
    Pharmacist: [true, "Easy"],
    "Internal Med": null,
    Other: null,
  };
  const [seeFavorites, setSeeFavorites] = useState(true);
  let isFavorited = false;

  const onFavoriteSwitch = () => {
    seeFavorites ? (isFavorited = true) : null;
    setSeeFavorites(!seeFavorites);
    filterFunction();
  };
  const loading = useSelector((state) => state.questionsAnswers.loading);

  let filterCriteria = [currentDifficulty, currentCategory1];

  const admin = useSelector((state) => state.auth.me.isAdmin);
  const { UserQuestions, userEasy, userModerate, userHard } = useSelector(
    (state) => state.userQuestions
  );
  const UserQuestionsAnswered = UserQuestions.filter(
    (question) => question.answered !== null
  );
  const { questionsAnswers, easy, moderate, hard } = useSelector(
    (state) => state.questionsAnswers
  );
  const easyPercentage = Math.round((userEasy?.length / easy?.length) * 100);
  const moderatePercentage = Math.round(
    (userModerate?.length / moderate?.length) * 100
  );
  const hardPercentage = Math.round((userHard?.length / hard?.length) * 100);
  const allPercentage = Math.round(
    (UserQuestionsAnswered?.length / questionsAnswers?.length) * 100
  );

  let rightOrWrong = {};
  UserQuestions ? (rightOrWrong = userRightOrWrong(UserQuestions)) : null;

  let allQuestions = [...questionsAnswers];
  allQuestions.sort((a, b) => a.displayId - b.displayId);
  const [filteredQuestions, setfilteredQuestions] = useState(null);
  allQuestions.length && !filteredQuestions
    ? setfilteredQuestions(allQuestions)
    : null;

  const endOffset = itemOffset + itemsPerPage;
  filteredQuestions && !pageCount
    ? setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage))
    : null;
  filteredQuestions && !currentItems
    ? setCurrentItems(filteredQuestions.slice(itemOffset, endOffset))
    : null;

  const truncate = (string) => {
    if (string.length > 50) {
      return string.slice(0, 50) + "...";
    } else {
      return string;
    }
  };

  function userRightOrWrong(array) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
      if (!map[array[i]["questionAnswerId"]]) {
        map[array[i]["questionAnswerId"]] = array[i]["answered"];
      }
    }
    return map;
  }

  const favorite = (questionId) => {
    dispatch(
      updateUserQuestion({
        questionAnswerId: questionId,
      })
    ).then(() => dispatch(fetchUserQuestions()));
  };

  const favoriteStatus = (questionId) => {
    const question = UserQuestions?.filter(
      (question) => question.questionAnswerId == questionId
    );
    if (question && question[0] && question[0].favorite) return true;
    return false;
  };

  const pickDifficulty = (event) => {
    setCurrentDifficulty(event);
    !seeFavorites ? (isFavorited = true) : null;
    filterCriteria[0] = event;
    filterFunction();
  };

  const pickExpertise = (event) => {
    currentExpertise.current = event;
    !seeFavorites ? (isFavorited = true) : null;
    filterFunction();
  };

  const pickCategory1 = (event) => {
    setCurrentCategory1(event);
    !seeFavorites ? (isFavorited = true) : null;
    filterCriteria[1] = event;
    filterFunction();
  };

  const changeAnswerStatus = (event) => {
    currentAnswerStatus.current = event;
    !seeFavorites ? (isFavorited = true) : null;
    filterFunction();
  };

  const changeCorrectStatus = (event) => {
    currentCorrectStatus.current = event;
    !seeFavorites ? (isFavorited = true) : null;
    filterFunction();
  };

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    const endOffset = newOffset + itemsPerPage;
    setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage));
    setCurrentItems(filteredQuestions.slice(newOffset, endOffset));
  };

  const filterFunction = () => {
    let multiFilter = allQuestions;

    let rightAnswers = UserQuestions.filter(
      (question) => question.answered === "right"
    ).map((question) => question.questionAnswerId);
    let wrongAnswers = UserQuestions.filter(
      (question) => question.answered === "wrong"
    ).map((question) => question.questionAnswerId);
    let answered = UserQuestions.filter(
      (question) => question.answered !== null
    ).map((question) => question.questionAnswerId);

    let favNumbers = UserQuestions.filter(
      (question) => question.favorite === true
    ).map((question) => question.questionAnswerId);

    currentAnswerStatus.current === "Answered"
      ? (multiFilter = multiFilter.filter((question) =>
          answered.includes(question.id)
        ))
      : null;
    currentAnswerStatus.current === "Unanswered"
      ? (multiFilter = multiFilter.filter(
          (question) => !answered.includes(question.id)
        ))
      : null;

    currentCorrectStatus.current === "Correct"
      ? (multiFilter = multiFilter.filter((question) =>
          rightAnswers.includes(question.id)
        ))
      : null;
    currentCorrectStatus.current === "Incorrect"
      ? (multiFilter = multiFilter.filter((question) =>
          wrongAnswers.includes(question.id)
        ))
      : null;

    isFavorited
      ? (multiFilter = multiFilter.filter((question) =>
          favNumbers.includes(question.id)
        ))
      : null;

    if (userExpertiseRelation[currentExpertise.current]) {
      if (userExpertiseRelation[currentExpertise.current][0] === true) {
        multiFilter = multiFilter.filter(
          (question) =>
            question.level ===
            userExpertiseRelation[currentExpertise.current][1]
        );
      } else {
        multiFilter = multiFilter.filter(
          (question) =>
            question.level !==
            userExpertiseRelation[currentExpertise.current][1]
        );
      }
    }

    for (let i = 0; i < filterCriteria.length; i++) {
      if (
        filterCriteria[i] === "All Levels" ||
        filterCriteria[i] === "All Categories"
      ) {
        continue;
      } else {
        multiFilter = multiFilter.filter(
          (question) =>
            question.level === filterCriteria[i] ||
            question.category === filterCriteria[i]
        );
      }
    }

    multiFilter.length ? setfilteredQuestions(multiFilter) : null;
    multiFilter.length
      ? setCurrentItems(multiFilter.slice(0, 12))
      : setCurrentItems("nada");
    multiFilter.length
      ? setPageCount(Math.ceil(multiFilter.length / itemsPerPage))
      : setPageCount(0);
    setItemOffset(0);
  };

  const progressCircleBackground = (progress, color) => {
    const angle = 360 * progress;
    return `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(${color} 360deg, ${color})`;
  };

  const cardBodyColor = (id) => {
    if (rightOrWrong && rightOrWrong[id] === "right") {
      return "rgb(144, 238, 144, .25)";
    } else if (rightOrWrong && rightOrWrong[id] === "wrong") {
      return "rgb(0, 0, 0, .10)";
    }
  };

  useEffect(() => {
    dispatch(fetchAllQuestionsAnswers());
    dispatch(fetchUserQuestions());
  }, []);

  const styles = {
    progressBarEasy: {
      background: progressCircleBackground(easyPercentage / 100, "lightgreen"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarModerate: {
      background: progressCircleBackground(moderatePercentage / 100, "#f5ad27"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarHard: {
      background: progressCircleBackground(hardPercentage / 100, "#f55b49"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarAll: {
      background: progressCircleBackground(allPercentage / 100, "#bf5eff"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarBackground: {
      position: "absolute",
      bottom: "30%",
      width: "100%",
      textAlign: "center",
      fontSize: "60%",
    },
    progressBarMiddle: {
      position: "absolute",
      bottom: "40%",
      width: "100%",
      textAlign: "center",
      fontSize: "150%",
    },
  };

  const previousButton = document.querySelector('[aria-label="Previous page"]');
  previousButton ? previousButton.remove() : null;
  const nextButton = document.querySelector('[aria-label="Next page"]');
  nextButton ? nextButton.remove() : null;

  if (admin) {
    return <AllQAadmin />;
  } else {
    return (
      <Container fluid>
        <Row style={{ marginTop: "30px", marginBottom: "35px" }}>
          <Card
            className="mx-auto"
            style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "90%" }}
          >
            <Card.Header style={{ marginBottom: "20px", fontSize: `200%` }}>
              <center>
                <h1>My Progress</h1>
              </center>
            </Card.Header>{" "}
            <Card.Body>
              <Row>
                <Col>
                  <div className="visually-hidden">
                    Easy Level {easyPercentage}% Completed
                  </div>
                  <Card id="no-border" aria-hidden="true" className="mx-auto ">
                    <div className="mx-auto" style={styles.progressBarEasy}>
                      <div style={styles.progressBarMiddle}>
                        {easyPercentage}%
                      </div>
                      <div style={styles.progressBarBackground}>Completed</div>
                    </div>
                    <Card.Title
                      className="mx-auto"
                      style={{ paddingTop: "5px" }}
                    >
                      Easy Level
                    </Card.Title>
                  </Card>
                </Col>

                <Col>
                  <div className="visually-hidden">
                    Moderate Level {moderatePercentage}% Completed
                  </div>
                  <Card id="no-border" aria-hidden="true" className="mx-auto">
                    <div className="mx-auto" style={styles.progressBarModerate}>
                      <div style={styles.progressBarMiddle}>
                        {moderatePercentage}%
                      </div>
                      <div style={styles.progressBarBackground}>Completed</div>
                    </div>
                    <Card.Title
                      className="mx-auto"
                      style={{ paddingTop: "5px" }}
                    >
                      <center>Moderate Level</center>
                    </Card.Title>
                  </Card>
                </Col>

                <Col>
                  <div className="visually-hidden">
                    Hard Level {hardPercentage}% Completed
                  </div>
                  <Card id="no-border" aria-hidden="true" className="mx-auto">
                    <div className="mx-auto" style={styles.progressBarHard}>
                      <div style={styles.progressBarMiddle}>
                        {hardPercentage}%
                      </div>
                      <div style={styles.progressBarBackground}>Completed</div>
                    </div>
                    <Card.Title
                      className="mx-auto"
                      style={{ paddingTop: "5px" }}
                    >
                      Hard Level
                    </Card.Title>
                  </Card>
                </Col>

                <Col>
                  <div className="visually-hidden">
                    All Levels {allPercentage}% Completed
                  </div>
                  <Card id="no-border" aria-hidden="true" className="mx-auto">
                    <div className="mx-auto" style={styles.progressBarAll}>
                      <div style={styles.progressBarMiddle}>
                        {allPercentage}%
                      </div>
                      <div style={styles.progressBarBackground}>Completed</div>
                    </div>
                    <Card.Title
                      className="mx-auto"
                      style={{ paddingTop: "5px" }}
                    >
                      All Levels
                    </Card.Title>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>

        <Row style={{ marginBottom: "30px" }}>
          <Card
            className="mx-auto"
            style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "90%" }}
          >
            <Card.Header
              style={{
                marginBottom: "20px",
                fontSize: "200%",
                boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)",
                textAlign: "center",
              }}
            >
              <Col className="mx-auto">
                <h2>
                  {currentExpertise.current} & {currentDifficulty} &{" "}
                  {currentCategory1}
                </h2>
              </Col>
            </Card.Header>
            <Card.Body>
              <Row
                style={{ marginBottom: "20px" }}
                xs="auto"
                className="justify-content-center"
              >
                <Col>
                  <Dropdown
                    onSelect={(event) => pickExpertise(event)}
                    style={{ marginBottom: "10px" }}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      For {currentExpertise.current}s
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {userExpertise.map((expertise) => (
                        <Dropdown.Item key={expertise} eventKey={expertise}>
                          {expertise}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Dropdown
                    onSelect={(event) => pickDifficulty(event)}
                    style={{ marginBottom: "10px" }}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {currentDifficulty}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {difficultyLevels.map((difficulty) => (
                        <Dropdown.Item key={difficulty} eventKey={difficulty}>
                          {difficulty}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Dropdown
                    onSelect={(event) => pickCategory1(event)}
                    style={{ marginBottom: "10px" }}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {currentCategory1}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {categories.map((category) => (
                        <Dropdown.Item key={category} eventKey={category}>
                          {category}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Dropdown
                    onSelect={(event) => changeAnswerStatus(event)}
                    style={{ marginBottom: "10px" }}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {currentAnswerStatus.current}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {answerStatusOptions.map((category) => (
                        <Dropdown.Item key={category} eventKey={category}>
                          {category}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Dropdown
                    onSelect={(event) => changeCorrectStatus(event)}
                    style={{ marginBottom: "10px" }}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {currentCorrectStatus.current}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {answerCorrectOptions.map((category) => (
                        <Dropdown.Item key={category} eventKey={category}>
                          {category}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col>
                  <Form>
                    <Form.Switch
                      onChange={() => onFavoriteSwitch()}
                      id="custom-switch"
                      label="Favorites Only"
                      checked={!seeFavorites}
                    />
                  </Form>
                </Col>
              </Row>
              {/* ---------------------- question cards mapped onto page
              ----------------------- */}
              <Row className="justify-content-center">
                {loading && <LoadingScreen />}
                {currentItems &&
                currentItems.length &&
                currentItems !== "nada" ? (
                  currentItems.map((question) => (
                    <Card
                      className="questionCard"
                      key={question.id}
                      style={{
                        padding: "0px",
                        width: "18rem",
                        marginRight: "10px",
                        marginLeft: "10px",
                        marginBottom: "20px",
                        boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)",
                      }}
                    >
                      <Card.Header
                        style={{
                          backgroundColor: question.color,
                        }}
                      />
                      <Card.Body
                        style={{
                          backgroundColor: cardBodyColor(question.id),
                        }}
                      >
                        <Link
                          aria-label={`Question Number ${question.displayId}, difficulty: ${question.level} `}
                          style={{ textDecoration: "none" }}
                          to={`/questions/${question.id}`}
                        >
                          <Card.Title
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontSize: "20px",
                            }}
                          >
                            Question Number {question.displayId}
                          </Card.Title>
                        </Link>
                        <Card.Text
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontSize: "15px",
                          }}
                        >
                          {truncate(question.question)}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Chip
                          alt={`${question.category}`}
                          label={
                            question.category ===
                            "Chronic Obstructive Pulmonary Disease"
                              ? "COPD"
                              : question.category
                          }
                          onClick={() => pickCategory1(question.category)}
                          color="default"
                          variant="outlined"
                          size="small"
                        />{" "}
                        <button
                          onClick={() => favorite(question.id)}
                          style={{
                            border: "none",
                            background: "none",
                            float: "right",
                            cursor: "pointer",
                          }}
                        >
                          <Card.Img
                            tabIndex={-1}
                            type="button"
                            alt={`Heart button for question ${
                              question.displayId
                            }. ${
                              favoriteStatus(question.id)
                                ? "Favorited"
                                : "Not Favorited"
                            } `}
                            style={{ width: "20px" }}
                            variant="top"
                            src={
                              favoriteStatus(question.id)
                                ? "/img/heart(red).png"
                                : "/img/heart.png"
                            }
                          />
                        </button>
                      </Card.Footer>
                    </Card>
                  ))
                ) : (
                  <center>
                    "Sorry, we didn't find anything matching that"
                  </center>
                )}
              </Row>
              <Row className="justify-content-center">
                <Card className="mx-auto" id="no-border">
                  <ReactPaginate
                    className="pagination mx-auto"
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel=". . ."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                  />
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
};

export default QuestionsAnswers;
