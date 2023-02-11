import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Dropdown, Row, Col, Form, Container, Button } from "react-bootstrap";
import { fetchAllQuestionsAnswers } from "./allQASlice";
import { token } from "morgan";
import { fetchAllUserQuestions, fetchUserQuestions, updateUserQuestion, fetchExpertiseQuestions, fetchByAnswerFrequency } from "../stats/user_questionsSlice";
import ReactPaginate from "react-paginate";
import LoadingScreen from "../loading/LoadingScreen";
import { Chip, Stack, LinearProgress } from "@mui/material";

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
  const Frequencies = ["Frequency Sort", "Most Answered", "Least Answered"];
  const currentFrequency = useRef(Frequencies[0]);
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

  const { mostAnswered, leastAnswered } = useSelector((state) => state.userQuestions);
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

    const percentageCorrect = (filterDataByCorrect.length / filterDataById.length) * 100;
    if (percentageCorrect || percentageCorrect === 0) {
      return percentageCorrect;
    } else {
      return null;
    }
  };
  const filterDataById = (id) => {
    const filterData = AllUserQuestions.filter((x) => x.questionAnswerId === id);
    // const filterDataByCorrect = filterDataById.filter(x => x.answered === 'right')
    return filterData.length;
  };
  const filterDataByCorrect = (id) => {
    const filterData = AllUserQuestions.filter((x) => x.questionAnswerId === id);
    const filterDataByRight = filterData.filter((x) => x.answered === "right");
    return filterDataByRight.length;
  };

  const favorite = (userId, questionId) => {
    dispatch(
      updateUserQuestion({
        userId: userId,
        questionAnswerId: questionId,
      })
    ).then(() => dispatch(fetchUserQuestions(userId)));
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

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    const endOffset = newOffset + itemsPerPage;
    setPageCount(Math.ceil(filteredQuestions.current.length / itemsPerPage));
    setCurrentItems(filteredQuestions.current.slice(newOffset, endOffset));
  };

  const filterFunction = () => {
    let multiFilter = allQuestions;

    currentFrequency.current === "Most Answered" ? (multiFilter = mostAnswered) : null;
    currentFrequency.current === "Least Answered" ? (multiFilter = leastAnswered) : null;

    expertisePicked.current !== "All Expertise" ? (multiFilter = expertiseQuestions[expertisePicked.current]) : null;

    let favNumbers = userQuestions.filter((question) => question.favorite === true).map((question) => question.questionAnswerId);
    isFavorited ? (multiFilter = multiFilter.filter((question) => favNumbers.includes(question.id))) : null;

    for (let i = 0; i < filterCriteria.length; i++) {
      if (filterCriteria[i] === "All Levels" || filterCriteria[i] === "All Categories") {
        continue;
      } else {
        multiFilter = multiFilter.filter((question) => question.level === filterCriteria[i] || question.category === filterCriteria[i]);
      }
    }
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

  useEffect(() => {
    dispatch(fetchExpertiseQuestions());
    dispatch(fetchAllQuestionsAnswers());
    dispatch(fetchUserQuestions(userId));
    dispatch(fetchAllUserQuestions());
    dispatch(fetchByAnswerFrequency());
  }, []);

  const styles = {
    progressBarEasy: {
      background: progressCircleBackground(UsereasyQuestionsTotal.length / EasyQuestionsTotal.length, "lightgreen"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarModerate: {
      background: progressCircleBackground(UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length, "#f5ad27"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarHard: {
      background: progressCircleBackground(UserHardQuestionsTotal.length / HardQuestionsTotal.length, "#f55b49"),
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      position: "relative",
    },
    progressBarAll: {
      background: progressCircleBackground(UserAllQuestionsTotal.length / AllUserQuestions.length, "#bf5eff"),
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
  return (
    <Container fluid>
      <Row>
        <Card id="no-border" className="mx-auto">
          <Button
            variant="success"
            as={Link}
            to="/addQuestion"
            className="m-2"
            // style={{ color: "#FF6262" }}
          >
            Add a Question
          </Button>
        </Card>
      </Row>
      <Row style={{ marginTop: "30px", marginBottom: "35px" }}>
        <Card id="no-border" className="mx-auto">
          <Card.Body>
            <Card.Header style={{ marginBottom: "40px", fontSize: `200%` }}>
              Student Progress
              <Row>
                <p style={{ fontSize: `50%` }} className="text-muted">
                  The below charts represent the percentage of questions answered correctly in each category (i.e., of the 'Easy' questions answered, {Math.round(easyQuestionsAnsweredPercentage)}%
                  were answered correctly).
                </p>
              </Row>
            </Card.Header>
            <Row>
              <Col>
                <Card id="no-border" className="mx-auto">
                  <div className="mx-auto" style={styles.progressBarEasy}>
                    <div style={styles.progressBarBackground}>Correct</div>
                    <div style={styles.progressBarMiddle}>{Math.round((UsereasyQuestionsTotal.length / EasyQuestionsTotal.length) * 100)}%</div>
                  </div>
                  <Card.Title className="mx-auto" style={{ color: "lightgreen", paddingTop: "5px" }}>
                    Easy Level
                  </Card.Title>
                </Card>
              </Col>

              <Col>
                <Card id="no-border" className="mx-auto">
                  <div className="mx-auto" style={styles.progressBarModerate}>
                    <div style={styles.progressBarBackground}>Correct</div>
                    <div style={styles.progressBarMiddle}>{Math.round((UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length) * 100)}%</div>
                  </div>
                  <Card.Title className="mx-auto" style={{ color: "#f5ad27", paddingTop: "5px" }}>
                    <center>Moderate Level</center>
                  </Card.Title>
                </Card>
              </Col>

              <Col>
                <Card id="no-border" className="mx-auto">
                  <div className="mx-auto" style={styles.progressBarHard}>
                    <div style={styles.progressBarBackground}>Correct</div>
                    <div style={styles.progressBarMiddle}>{Math.round((UserHardQuestionsTotal.length / HardQuestionsTotal.length) * 100)}%</div>
                  </div>
                  <Card.Title className="mx-auto" style={{ color: "#f55b49", paddingTop: "5px" }}>
                    Hard Level
                  </Card.Title>
                </Card>
              </Col>

              <Col>
                <Card id="no-border" className="mx-auto">
                  <div className="mx-auto" style={styles.progressBarAll}>
                    <div style={styles.progressBarBackground}>Correct</div>
                    <div style={styles.progressBarMiddle}>{Math.round((UserAllQuestionsTotal.length / AllUserQuestions.length) * 100)}%</div>
                  </div>
                  <Card.Title className="mx-auto" style={{ color: "#bf5eff", paddingTop: "5px" }}>
                    All Levels
                  </Card.Title>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row>
        <Card className="mx-auto" id="no-border">
          <Card.Header style={{ marginBottom: "20px", fontSize: "200%" }}>
            <Col>
              {currentDifficulty} & {currentCategory1}
            </Col>
          </Card.Header>
          <Card.Body>
            <Row xs="auto" style={{ marginBottom: "20px" }}>
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
              <Col>
                <Dropdown onSelect={(event) => pickCategory1(event)} style={{ marginBottom: "10px" }}>
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
                <Dropdown onSelect={(event) => userExpertiseSelection(event)}>
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
                    {Frequencies.map((frequency) => (
                      <Dropdown.Item key={frequency} eventKey={frequency}>
                        {frequency}
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

            <Row>
              {loading && <LoadingScreen />}
              {currentItems && currentItems.length && currentItems !== "nada"
                ? currentItems.map((question, idx) => (
                    <Col key={question.id}>
                      <Card style={{ width: "18rem", marginBottom: "20px" }}>
                        <Card.Header style={{ backgroundColor: question.color }} />
                        <Card.Body>
                          <Card.Title style={{ fontSize: "20px", textAlign: "center" }}>
                            <Link to={`/questions/${question.id}`} style={{ textDecoration: `none` }}>
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
                          color={`${data(question.id) && data(question.id) >= 50 ? "success" : "error"}`}
                        />
                        <Card.Footer>
                          <Chip style={{ marginRight: "4px" }} label={question.level} onClick={() => pickDifficulty(question.level)} color="info" />
                          <Chip label={question.category} onClick={() => pickCategory1(question.category)} color="info" />
                          <Card.Img
                            style={{ float: "right", width: "25px" }}
                            onClick={() => favorite(userId, question.id)}
                            variant="top"
                            src={favoriteStatus(question.id) ? "/heart(red).png" : "/heart.png"}
                          />
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))
                : "Sorry, we didn't find anything matching that"}
            </Row>
            <ReactPaginate
              className="pagination"
              //nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              //previousLabel="< previous"
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
            />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default AllQAadmin;
