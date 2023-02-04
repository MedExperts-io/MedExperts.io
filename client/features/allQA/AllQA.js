import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Card, Dropdown, Row, Col, Form } from "react-bootstrap";
import { fetchAllQuestionsAnswers } from "./allQASlice";
import { token } from "morgan";
import { fetchAllUserQuestions, fetchUserQuestions, updateUserQuestion } from "../stats/user_questionsSlice";
import ReactPaginate from "react-paginate";
import LoadingScreen from "../loading/LoadingScreen";

const QuestionsAnswers = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const difficultiyLevels = ["All Levels", "Easy", "Moderate", "Hard"];
  const [currentDifficulty, setCurrentDifficulty] = useState(difficultiyLevels[0]);
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
  const [currentCategory2, setCurrentCategory2] = useState(categories[0]);
  const [seeFavorites, setSeeFavorites] = useState(true);
  let isFavorited = false;

  const onFavoriteSwitch = () => {
    seeFavorites ? (isFavorited = true) : null;
    filterFunction();
    setSeeFavorites(!seeFavorites);
  };
  const loading = useSelector((state) => state.questionsAnswers.loading);

  let filterCriteria = [currentDifficulty, currentCategory1];

  const userQuestions = useSelector((state) => state.userQuestions.UserQuestions);
  const stateQuestions = useSelector((state) => state.questionsAnswers.questionsAnswers);
  const easyQuestions = stateQuestions.filter((question) => question.level === "Easy");
  const moderateQuestions = stateQuestions.filter((question) => question.level === "Moderate");
  const hardQuestions = stateQuestions.filter((question) => question.level === "Hard");
  const userEasyQuestions = userQuestions.filter((question) => question.level === "Easy" && question.userInput);
  const userModerateQuestions = userQuestions.filter((question) => question.level === "Moderate" && question.userInput);
  const userHardQuestions = userQuestions.filter((question) => question.level === "Hard" && question.userInput);

  let allQuestions = [...stateQuestions];
  allQuestions.sort((a, b) => a.id - b.id);
  allQuestions = allQuestions.map((question) => {
    if (question.level === "Easy") {
      return {
        ...question,
        color: "lightgreen",
      };
    } else if (question.level === "Moderate") {
      return {
        ...question,
        color: "#f5ad27",
      };
    } else {
      return {
        ...question,
        color: "#f55b49",
      };
    }
  });
  //const listOfFavorites = userQuestions.filter((question) => question.favorite === true);
  //const allAnswered = userQuestions.length / allQuestions.length;

  // console.log("allQuestionsCheck", allQuestions);
  const [filteredQuestions, setfilteredQuestions] = useState(null);
  allQuestions.length && !filteredQuestions ? setfilteredQuestions(allQuestions) : null;

  console.log("currentitems", currentItems);

  const endOffset = itemOffset + itemsPerPage;
  filteredQuestions && !pageCount ? setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage)) : null;
  filteredQuestions && !currentItems ? setCurrentItems(filteredQuestions.slice(itemOffset, endOffset)) : null;

  const truncate = (string) => {
    if (string.length > 50) {
      return string.slice(0, 50) + "...";
    } else {
      return string;
    }
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
    filterCriteria[0] = event;
    filterFunction();
  };
  const pickCategory1 = (event) => {
    setCurrentCategory1(event);
    filterCriteria[1] = event;
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
    console.log("isFavorited?", isFavorited, multiFilter);
    let favNumbers = userQuestions.filter((question) => question.favorite === true).map((question) => question.questionAnswerId);
    isFavorited ? (multiFilter = multiFilter.filter((question) => favNumbers.includes(question.id))) : null;
    console.log("isFavorited?", isFavorited, multiFilter);
    for (let i = 0; i < filterCriteria.length; i++) {
      if (filterCriteria[i] === "All Levels" || filterCriteria[i] === "All Categories") {
        continue;
      } else {
        multiFilter = multiFilter.filter((question) => question.level === filterCriteria[i] || question.category === filterCriteria[i]);
      }
    }
    console.log("filterQuestions in filterFunction", multiFilter);
    multiFilter.length ? setfilteredQuestions(multiFilter) : null;
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
    dispatch(fetchAllQuestionsAnswers());
    dispatch(fetchUserQuestions(userId));
  }, []); // Putting userQuestions in here throws a loop

  return (
    <Container>
      <Row style={{ marginTop: "30px", marginBottom: "35px" }}>
        <Col></Col>
        <Col>
          <div
            style={{ background: progressCircleBackground(userEasyQuestions.length / easyQuestions.length, "lightgreen"), borderRadius: "50%", width: "120px", height: "120px", position: "relative" }}
          >
            <div style={{ position: "absolute", bottom: "35%", width: "100%", textAlign: "center", fontSize: "150%" }}>{Math.round((userEasyQuestions.length / easyQuestions.length) * 100)}%</div>
          </div>
        </Col>
        <Col>
          <div
            style={{
              background: progressCircleBackground(userModerateQuestions.length / moderateQuestions.length, "#f5ad27"),
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              textAlign: "right",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", bottom: "35%", width: "100%", textAlign: "center", fontSize: "150%" }}>
              {Math.round((userModerateQuestions.length / moderateQuestions.length) * 100)}%
            </div>
          </div>
        </Col>
        <Col>
          <div
            style={{
              background: progressCircleBackground(userHardQuestions.length / hardQuestions.length, "#f55b49"),
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              position: "relative",
            }}
          >
            {" "}
            <div style={{ position: "absolute", bottom: "35%", width: "100%", textAlign: "center", fontSize: "150%" }}>{Math.round((userHardQuestions.length / hardQuestions.length) * 100)}%</div>
          </div>
        </Col>
        <Col>
          <div
            style={{
              background: progressCircleBackground(userQuestions.length / allQuestions.length, "#bf5eff"),
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              marginTop: "-20px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", bottom: "35%", width: "100%", textAlign: "center", fontSize: "200%" }}>{Math.round((userQuestions.length / allQuestions.length) * 100)}%</div>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ marginBottom: "20px", fontSize: "200%" }}>
        <Col>
          {currentDifficulty} & {currentCategory1}
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} style={{ marginBottom: "20px" }}>
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
          </Dropdown>
        </Col>

        <Col md="auto">
          <Form>
            <Form.Switch
              onChange={() => onFavoriteSwitch()}
              id="custom-switch"
              label="Favorites Only"
              checked={!seeFavorites}

              //disabled // apply if you want the switch disabled
            />
          </Form>
        </Col>
      </Row>
      <Row>
        {loading && <LoadingScreen />}
        {currentItems && currentItems.length && currentItems !== "nada"
          ? currentItems.map((question) => (
              <Col key={question.id}>
                <Card style={{ width: "18rem", marginBottom: "20px" }}>
                  <Card.Header style={{ backgroundColor: `${question.color}` }} />
                  <Card.Body style={{}}>
                    <Card.Img
                      style={{ float: "right", width: "25px" }}
                      onClick={() => favorite(userId, question.id)}
                      variant="top"
                      src={favoriteStatus(question.id) ? "/heart(red).png" : "/heart.png"}
                    />
                    <Card.Title>
                      <Link to={`/questions/${question.id}`} style={{ textDecoration: `none` }}>
                        {question.id}. Some Title
                      </Link>
                    </Card.Title>
                    <Card.Text>{truncate(question.question)}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Img style={{ float: "right", width: "25px" }} src="/endocrine-system.png" />
                  </Card.Footer>
                </Card>
              </Col>
            ))
          : "Sorry, we didn't find anything matching that"}
      </Row>
      <ReactPaginate
        className="pagination"
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
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </Container>
  );
};

export default QuestionsAnswers;
