import AddIcon from "@mui/icons-material/Add";
import { Chip, Fab, LinearProgress, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Dropdown, Form, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingScreen from "../loading/LoadingScreen";
import { fetchActiveQAs, fetchAllUserQuestions, fetchByAnswerFrequency, fetchExpertiseQuestions, fetchPercentCorrect, fetchUserQuestions, updateUserQuestion } from "../stats/user_questionsSlice";
import { fetchAllQuestionsAnswers } from "./allQASlice";
import AddQuestion from "../addQ/AddQuestion";

const AllQAadmin = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const difficultiyLevels = ["All Levels", "Easy", "Moderate", "Hard"];
  const [currentDifficulty, setCurrentDifficulty] = useState(difficultiyLevels[0]);
  const userExpertise = ["All Expertise", "Student", "Resident", "Fellow", "Physician Assistant", "Nurse", "Nurse Practitioner", "Pharmacist", "Internal Med", "Other"];
  const expertisePicked = useRef("All Expertise");
  const [currentCategory2, setCurrentCategory2] = useState(userExpertise[0]);
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
  const frequencyList = ["Frequency Sort", "Most Answered", "Least Answered"];
  const currentFrequency = useRef(frequencyList[0]);
  const percentCorrectList = ["Percent Correct Sort", "Most Correct", "Least Correct"];
  const currentPercent = useRef(percentCorrectList[0]);
  const [seeFavorites, setSeeFavorites] = useState(true);

  let isFavorited = false;

  const onFavoriteSwitch = () => {
    seeFavorites ? (isFavorited = true) : null;
    setSeeFavorites(!seeFavorites);
    filterFunction();
  };

  const userExpertiseSelection = (event) => {
    setCurrentCategory2(event);
    !seeFavorites ? (isFavorited = true) : null;
    expertisePicked.current = event;
    filterFunction();
  };

  const loading = useSelector((state) => state.questionsAnswers.loading);

  let filterCriteria = [currentDifficulty, currentCategory1];

  const { mostAnswered, leastAnswered, mostCorrect, leastCorrect, activeUserQAs } = useSelector((state) => state.userQuestions);
  const userQuestions = useSelector((state) => state.userQuestions.UserQuestions);
  const AllUserQuestions = useSelector((state) => state.userQuestions.allUserQuestions);
  const stateQuestions = useSelector((state) => state.questionsAnswers.questionsAnswers);
  const expertiseQuestions = useSelector((state) => state.userQuestions.expertiseQuestions);

  const EasyQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Easy");
  const ModerateQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Moderate");
  const HardQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Hard");

  const UsereasyQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Easy" && question.answered === "right");
  const UserModerateQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Moderate" && question.answered === "right");
  const UserHardQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Hard" && question.answered === "right");
  const UserAllQuestionsTotal = AllUserQuestions.filter((question) => question.answered === "right");

  const easyQuestionsAnsweredPercentage = (UsereasyQuestionsTotal.length / EasyQuestionsTotal.length) * 100;
  const moderateQuestionsAnsweredPercentage = (UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length) * 100;
  const hardQuestionsAnsweredPercentage = (UserHardQuestionsTotal.length / HardQuestionsTotal.length) * 100;
  const allQuestionAnsweredPercentage = (UserAllQuestionsTotal.length / AllUserQuestions.length) * 100;

  let allQuestions = [...stateQuestions];
  allQuestions.sort((a, b) => a.displayId - b.displayId);

  const filteredQuestions = useRef(null);
  allQuestions.length && !filteredQuestions.current ? (filteredQuestions.current = allQuestions) : null;

  const endOffset = itemOffset + itemsPerPage;
  filteredQuestions.current && !pageCount ? setPageCount(Math.ceil(filteredQuestions.current.length / itemsPerPage)) : null;
  filteredQuestions.current && !currentItems ? setCurrentItems(filteredQuestions.current.slice(itemOffset, endOffset)) : null;

  const truncate = (string) => {
    if (string.length > 20) {
      return string.slice(0, 50) + "...";
    } else {
      return string;
    }
  };

  const data = (id) => {
    const filterDataById = AllUserQuestions.filter((x) => x.questionAnswerId === id);
    const filterDataByCorrect = filterDataById.filter((x) => x.answered === "right");

    const percentageCorrect = Math.round((filterDataByCorrect.length / filterDataById.length) * 100);
    if (percentageCorrect || percentageCorrect === 0) {
      return percentageCorrect;
    } else {
      return null;
    }
  };
  const filterDataById = (id) => {
    const filterData = AllUserQuestions.filter((x) => x.questionAnswerId === id);
    return filterData.length;
  };
  const filterDataByCorrect = (id) => {
    const filterData = AllUserQuestions.filter((x) => x.questionAnswerId === id);
    const filterDataByRight = filterData.filter((x) => x.answered === "right");
    return filterDataByRight.length;
  };

  const favorite = (questionId) => {
    dispatch(
      updateUserQuestion({
        questionAnswerId: questionId,
      })
    ).then(() => dispatch(fetchUserQuestions()));
  };

  const favoriteStatus = (questionId) => {
    const question = userQuestions.filter((question) => question.questionAnswerId == questionId);
    if (question[0] && question[0].favorite) return true;
    return false;
  };

  const pickDifficulty = (event) => {
    setCurrentDifficulty(event);
    !seeFavorites ? (isFavorited = true) : null;
    filterCriteria[0] = event;
    filterFunction();
  };
  const pickCategory1 = (event) => {
    setCurrentCategory1(event);
    !seeFavorites ? (isFavorited = true) : null;
    filterCriteria[1] = event;
    filterFunction();
  };

  const pickFrequency = (event) => {
    currentFrequency.current = event;
    !seeFavorites ? (isFavorited = true) : null;
    filterFunction();
  };

  const pickPercentCorrect = (event) => {
    currentPercent.current = event;
    !seeFavorites ? (isFavorited = true) : null;
    filterFunction();
  };

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    const endOffset = newOffset + itemsPerPage;
    setPageCount(Math.ceil(filteredQuestions.current.length / itemsPerPage));
    setCurrentItems(filteredQuestions.current.slice(newOffset, endOffset));
  };

  const filterFunction = () => {
    let multiFilter = allQuestions;

    currentFrequency.current === "Frequency Sort" ? null : (multiFilter = frequencySort(multiFilter, activeUserQAs, currentFrequency.current));
    currentPercent.current === "Percent Correct Sort" ? null : (multiFilter = percentCorrectSort(multiFilter, activeUserQAs, currentPercent.current));
    currentPercent.current === "Least Correct" && currentFrequency.current === "Least Answered" ? (multiFilter = frequencySort(multiFilter, activeUserQAs, currentFrequency.current)) : null;
    currentPercent.current === "Least Correct" && currentFrequency.current === "Most Answered" ? (multiFilter = percentCorrectSort(multiFilter, activeUserQAs, currentPercent.current)) : null;

    let favNumbers = userQuestions.filter((question) => question.favorite === true).map((question) => question.questionAnswerId);
    isFavorited ? (multiFilter = multiFilter.filter((question) => favNumbers.includes(question.id))) : null;

    for (let i = 0; i < filterCriteria.length; i++) {
      if (filterCriteria[i] === "All Levels" || filterCriteria[i] === "All Categories") {
        continue;
      } else {
        multiFilter = multiFilter.filter((question) => question.level === filterCriteria[i] || question.category === filterCriteria[i]);
      }
    }

    multiFilter = expertiseFilterFunction(multiFilter);

    multiFilter.length ? (filteredQuestions.current = multiFilter) : null;
    multiFilter.length ? setCurrentItems(multiFilter.slice(0, 12)) : setCurrentItems("nada");
    multiFilter.length ? setPageCount(Math.ceil(multiFilter.length / itemsPerPage)) : setPageCount(0);
    setItemOffset(0);
    return multiFilter;
  };

  const progressCircleBackground = (progress, color) => {
    const angle = 360 * progress;

    return `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(${color} 360deg, ${color})`;
  };

  const frequencySort = (allQAs, allUserQs, type) => {
    if (allQAs.length === 0) return [];
    let frequency = {};

    for (let i = 0; i < allUserQs.length; i++) {
      if (!frequency[allUserQs[i]["questionAnswerId"]]) {
        frequency[allUserQs[i]["questionAnswerId"]] = 1;
      } else {
        frequency[allUserQs[i]["questionAnswerId"]]++;
      }
    }
    for (let i = 0; i < allQAs.length; i++) {
      if (!frequency[allQAs[i]["id"]]) {
        frequency[allQAs[i]["id"]] = 1;
      } else {
        frequency[allQAs[i]["id"]]++;
      }
    }

    const allQuestions = allQAs.map((question) => {
      return {
        ...question,
        frequency: frequency[question.id],
      };
    });

    const sortedByFrequency = allQuestions.slice().sort((a, b) => b.frequency - a.frequency);
    const sortedByFrequencyReverse = allQuestions.slice().sort((a, b) => a.frequency - b.frequency);

    if (type === "Most Answered") {
      return sortedByFrequency;
    } else if (type === "Least Answered") {
      return sortedByFrequencyReverse;
    }
  };

  const percentCorrectSort = (allQAs, allUserQs, type) => {
    if (allQAs.length === 0) return [];

    let frequency = {};
    for (let i = 0; i < allQAs.length; i++) {
      if (!frequency[allQAs[i]["id"]]) {
        frequency[allQAs[i]["id"]] = { right: 0, total: 0 };
      }
    }

    for (let i = 0; i < allUserQs.length; i++) {
      if (allUserQs[i]["answered"] === "right") {
        frequency[allUserQs[i]["questionAnswerId"]]["right"]++;
        frequency[allUserQs[i]["questionAnswerId"]]["total"]++;
      } else {
        frequency[allUserQs[i]["questionAnswerId"]]["total"]++;
      }
    }

    const allQuestions = allQAs.map((question) => {
      return {
        ...question,
        percentCorrect: Math.round((frequency[question.id]["right"] / frequency[question.id]["total"]) * 100) || 0,
      };
    });
    const sortedByPercentCorrect = allQuestions.slice().sort((a, b) => b.percentCorrect - a.percentCorrect);
    const sortedByPercentCorrectReverse = allQuestions.slice().sort((a, b) => a.percentCorrect - b.percentCorrect);

    if (type === "Most Correct") {
      return sortedByPercentCorrect;
    } else if (type === "Least Correct") {
      return sortedByPercentCorrectReverse;
    }
  };

  const expertiseFilterFunction = (multiFilter) => {
    if (expertisePicked.current === "All Expertise") {
      return multiFilter;
    }

    const userQAs = expertiseQuestions[expertisePicked.current];
    const userQAIds = userQAs.map((question) => question.id);

    multiFilter = multiFilter.filter((question) => userQAIds.includes(question.id));
    return multiFilter;
  };

  useEffect(() => {
    dispatch(fetchExpertiseQuestions());
    dispatch(fetchAllQuestionsAnswers());
    dispatch(fetchUserQuestions());
    dispatch(fetchAllUserQuestions());
    dispatch(fetchByAnswerFrequency());
    dispatch(fetchPercentCorrect());
    dispatch(fetchActiveQAs());
  }, []);

  const styles = {
    progressBarEasy: {
      background: progressCircleBackground(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length || 0, "lightgreen"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarModerate: {
      background: progressCircleBackground(UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length || 0, "#f5ad27"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarHard: {
      background: progressCircleBackground(UserHardQuestionsTotal.length / HardQuestionsTotal.length || 0, "#f55b49"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarAll: {
      background: progressCircleBackground(UserAllQuestionsTotal.length / AllUserQuestions.length || 0, "#bf5eff"),
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

  //add question modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <Container fluid>
      <OverlayTrigger
        key="top"
        style={{ backgroundColor: "black" }}
        placement="top"
        overlay={<Tooltip id="tooltip-top">Add new question</Tooltip>}
      >
        <Fab
          size="medium"
          onClick={handleOpen}
          aria-label="add new question"
          style={{
            position: "fixed",
            bottom: "15px",
            right: "8px",
            backgroundColor: "green",
          }}
        >
          <AddIcon style={{ color: "white" }} />
        </Fab>
      </OverlayTrigger>
      <Modal size="lg" centered scrollable={true} show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddQuestion />
        </Modal.Body>
      </Modal>
      <Row style={{ marginTop: "30px", marginBottom: "35px" }}>
        <Card className="mx-auto" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "90%" }}>
          <Card.Header style={{ marginBottom: "20px", fontSize: `200%` }}>
            <center>Student Progress</center>
            <Row>
              <p style={{ fontSize: `50%` }} className="">
                The below charts represent the percentage of questions answered
                correctly in each category (i.e., of the 'Easy' questions
                answered,{" "}
                {Math.round(
                  (UsereasyQuestionsTotal.length / EasyQuestionsTotal.length) *
                    100
                ) || 0}
                % were answered correctly).
              </p>
            </Row>
          </Card.Header>{" "}
          <Card.Body>
            <Row>
              <Col>
                <div className="visually-hidden">Easy Level {Math.round((UsereasyQuestionsTotal.length / EasyQuestionsTotal.length) * 100) || 0}% Completed</div>
                <Card id="no-border" aria-hidden="true" className="mx-auto">
                  <div className="mx-auto" style={styles.progressBarEasy}>
                    <div style={styles.progressBarMiddle}>
                      {Math.round(
                        (UsereasyQuestionsTotal.length /
                          EasyQuestionsTotal.length) *
                          100
                      ) || 0}
                      %
                    </div>
                    <div style={styles.progressBarBackground}>Correct</div>
                  </div>
                  <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                    Easy Level
                  </Card.Title>
                </Card>
              </Col>

              <Col>
                <div className="visually-hidden">Moderate Level {Math.round((UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length) * 100) || 0}% Completed</div>
                <Card id="no-border" aria-hidden="true" className="mx-auto">
                  <div className="mx-auto" style={styles.progressBarModerate}>
                    <div style={styles.progressBarMiddle}>
                      {Math.round(
                        (UserModerateQuestionsTotal.length /
                          ModerateQuestionsTotal.length) *
                          100
                      ) || 0}
                      %
                    </div>
                    <div style={styles.progressBarBackground}>Correct</div>
                  </div>
                  <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                    <center>Moderate Level</center>
                  </Card.Title>
                </Card>
              </Col>

              <Col>
                <div className="visually-hidden">Hard Level {Math.round((UserHardQuestionsTotal.length / HardQuestionsTotal.length) * 100) || 0}% Completed</div>
                <Card id="no-border" aria-hidden="true" className="mx-auto">
                  <div className="mx-auto" style={styles.progressBarHard}>
                    <div style={styles.progressBarMiddle}>
                      {Math.round(
                        (UserHardQuestionsTotal.length /
                          HardQuestionsTotal.length) *
                          100
                      ) || 0}
                      %
                    </div>
                    <div style={styles.progressBarBackground}>Correct</div>
                  </div>
                  <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                    Hard Level
                  </Card.Title>
                </Card>
              </Col>

              <Col>
                <div className="visually-hidden">All Levels {Math.round((UserAllQuestionsTotal.length / AllUserQuestions.length) * 100) || 0}% Completed</div>
                <Card id="no-border" aria-hidden="true" className="mx-auto">
                  <div className="mx-auto" style={styles.progressBarAll}>
                    <div style={styles.progressBarMiddle}>
                      {Math.round(
                        (UserAllQuestionsTotal.length /
                          AllUserQuestions.length) *
                          100
                      ) || 0}
                      %
                    </div>
                    <div style={styles.progressBarBackground}>Correct</div>
                  </div>
                  <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                    All Levels
                  </Card.Title>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row style={{ marginBottom: "30px" }}>
        <Card className="mx-auto" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "90%" }}>
          <Card.Header
            style={{
              marginBottom: "20px",
              fontSize: "200%",
              boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)",
              textAlign: "center",
            }}
          >
            <Col className="mx-auto">
              {currentDifficulty} & {currentCategory1}
            </Col>
          </Card.Header>
          <Card.Body>
            <Row
              xs="auto"
              style={{ marginBottom: "30px" }}
              className="justify-content-center"
            >
              <Col md="auto">
                <Dropdown onSelect={(event) => pickDifficulty(event)}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {currentDifficulty}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {difficultiyLevels.map((difficulty) => (
                      <Dropdown.Item key={difficulty} eventKey={difficulty}>
                        {difficulty}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md="auto">
                <Dropdown onSelect={(event) => pickCategory1(event)}>
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

                  <Dropdown.Menu>
                    {categories.map((category) => (
                      <Dropdown.Item key={category} eventKey={category}>
                        {category}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col md="auto">
                <Dropdown onSelect={(event) => userExpertiseSelection(event)} style={{ marginBottom: "10px" }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {expertisePicked.current}
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

              <Col md="auto">
                <Dropdown onSelect={(event) => pickFrequency(event)}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {currentFrequency.current}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {frequencyList.map((frequency) => (
                      <Dropdown.Item key={frequency} eventKey={frequency}>
                        {frequency}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col md="auto">
                <Dropdown onSelect={(event) => pickPercentCorrect(event)}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {currentPercent.current}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {percentCorrectList.map((correct) => (
                      <Dropdown.Item key={correct} eventKey={correct}>
                        {correct}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col md="auto">
                <Form>
                  <Form.Switch onChange={() => onFavoriteSwitch()} id="custom-switch" label="Favorites Only" checked={!seeFavorites} />
                </Form>
              </Col>
            </Row>
            {/* ---------------------- question cards mapped onto page
              ----------------------- */}

            <Row className="justify-content-center">
              {loading && <LoadingScreen />}
              {currentItems && currentItems.length && currentItems !== "nada"
                ? currentItems.map((question, idx) => (
                    <Card
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
                      <Card.Header style={{ backgroundColor: question.color }} />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "20px",
                            textAlign: "center",
                            color: "black",
                          }}
                        >
                          <Link
                            aria-label={`Question Number ${question.displayId}, difficulty: ${question.level} `}
                            to={`/questions/${question.id}`}
                            style={{ textDecoration: `none`, color: "black" }}
                          >
                            Question Number {question.displayId}
                          </Link>
                        </Card.Title>
                        <Card.Text style={{ fontSize: "15px", textAlign: "center" }}>{truncate(question.question)}</Card.Text>
                        <Stack spacing={0.5}>
                          <Chip
                            label={<Stack spacing={2}>{`Correct Response: ${data(question.id) || data(question.id) === 0 ? data(question.id) : 0}%`}</Stack>}
                            color={`${data(question.id) && data(question.id) >= 50 ? "success" : "error"}`}
                            variant="outlined"
                          />

                          <Chip label={`Total Response(s): ${filterDataById(question.id)}`} size="small" color="primary" variant="outlined" />
                        </Stack>
                      </Card.Body>
                      <LinearProgress
                        sx={{ width: "100%", height: 8, pb: 0, mb: 0 }}
                        variant="determinate"
                        value={data(question.id)}
                        color={`${
                          data(question.id) && data(question.id) >= 50
                            ? "success"
                            : "error"
                        }`}
                        aria-hidden="true"
                      />
                      <Card.Footer>
                        <Chip
                          label={question.category === "Chronic Obstructive Pulmonary Disease" ? "COPD" : question.category}
                          onClick={() => pickCategory1(question.category)}
                          color="default"
                          size="small"
                          variant="outlined"
                        />
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
                                ? "/heart(red).png"
                                : "/heart.png"
                            }
                          />
                        </button>
                      </Card.Footer>
                    </Card>
                  ))
                : "Sorry, we didn't find anything matching that"}
            </Row>
            <Row className="justify-content-center">
              <Card className="mx-auto" id="no-border">
                <ReactPaginate
                  className="pagination mx-auto"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                />{" "}
              </Card>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default AllQAadmin;
