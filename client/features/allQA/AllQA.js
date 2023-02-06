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

  const difficultyLevels = ["All Levels", "Easy", "Moderate", "Hard"];
  const [currentDifficulty, setCurrentDifficulty] = useState(difficultyLevels[0]);
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
    setSeeFavorites(!seeFavorites);
    filterFunction();
  };
  const loading = useSelector((state) => state.questionsAnswers.loading);

  let filterCriteria = [currentDifficulty, currentCategory1];

  const { UserQuestions, userEasy, userModerate, userHard } = useSelector((state) => state.userQuestions);
  const { questionsAnswers, easy, moderate, hard } = useSelector((state) => state.questionsAnswers);
  const easyPercentage = Math.round((userEasy?.length / easy?.length) * 100);
  const moderatePercentage = Math.round((userModerate?.length / moderate?.length) * 100);
  const hardPercentage = Math.round((userHard?.length / hard?.length) * 100);
  const allPercentage = Math.round((UserQuestions?.length / questionsAnswers?.length) * 100);
  let rightOrWrong = {};
  UserQuestions ? (rightOrWrong = userRightOrWrong(UserQuestions)) : null;

  let allQuestions = [...questionsAnswers];
  allQuestions.sort((a, b) => a.id - b.id);
  const [filteredQuestions, setfilteredQuestions] = useState(null);
  allQuestions.length && !filteredQuestions ? setfilteredQuestions(allQuestions) : null;

  console.log("currentitems", currentItems);
  console.log("rightOrWrong", rightOrWrong);
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

  function userRightOrWrong(array) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
      if (!map[array[i]["questionAnswerId"]]) {
        map[array[i]["questionAnswerId"]] = array[i]["answered"];
      }
    }
    console.log("map", map);
    return map;
  }

  const favorite = (userId, questionId) => {
    dispatch(
      updateUserQuestion({
        userId: userId,
        questionAnswerId: questionId,
      })
    ).then(() => dispatch(fetchUserQuestions(userId)));
  };

  const favoriteStatus = (questionId) => {
    const question = UserQuestions?.filter((question) => question.questionAnswerId == questionId);
    if (question && question[0] && question[0].favorite) return true;
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

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    const endOffset = newOffset + itemsPerPage;
    setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage));
    setCurrentItems(filteredQuestions.slice(newOffset, endOffset));
  };

  const filterFunction = () => {
    let multiFilter = allQuestions;
    let favNumbers = UserQuestions.filter((question) => question.favorite === true).map((question) => question.questionAnswerId);
    isFavorited ? (multiFilter = multiFilter.filter((question) => favNumbers.includes(question.id))) : null;

    for (let i = 0; i < filterCriteria.length; i++) {
      if (filterCriteria[i] === "All Levels" || filterCriteria[i] === "All Categories") {
        continue;
      } else {
        multiFilter = multiFilter.filter((question) => question.level === filterCriteria[i] || question.category === filterCriteria[i]);
      }
    }

    multiFilter.length ? setfilteredQuestions(multiFilter) : null;
    multiFilter.length ? setCurrentItems(multiFilter.slice(0, 12)) : setCurrentItems("nada");
    multiFilter.length ? setPageCount(Math.ceil(multiFilter.length / itemsPerPage)) : setPageCount(0);
    setItemOffset(0);
  };

  const progressCircleBackground = (progress, color) => {
    const angle = 360 * progress;
    return `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(${color} 360deg, ${color})`;
  };

  const cardHeaderColor = (level) => {
    if (level === "Easy") {
      return "lightgreen";
    } else if (level === "Moderate") {
      return "#f5ad27";
    } else {
      return "#f55b49";
    }
  };

  const cardBodyColor = (id) => {
    if (rightOrWrong && rightOrWrong[id] === "right") {
      return "rgb(144, 238, 144, .25)";
    } else if (rightOrWrong && rightOrWrong[id] === "wrong") {
      return "rgb(245, 91, 73, .25)";
    }
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
          <div style={{ background: progressCircleBackground(easyPercentage / 100, "lightgreen"), borderRadius: "50%", width: "120px", height: "120px", position: "relative" }}>
            <div style={{ position: "absolute", bottom: "35%", width: "100%", textAlign: "center", fontSize: "150%" }}>{easyPercentage}%</div>
          </div>
        </Col>
        <Col>
          <div
            style={{
              background: progressCircleBackground(moderatePercentage / 100, "#f5ad27"),
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              textAlign: "right",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", bottom: "35%", width: "100%", textAlign: "center", fontSize: "150%" }}>{moderatePercentage}%</div>
          </div>
        </Col>
        <Col>
          <div
            style={{
              background: progressCircleBackground(hardPercentage / 100, "#f55b49"),
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              position: "relative",
            }}
          >
            {" "}
            <div style={{ position: "absolute", bottom: "35%", width: "100%", textAlign: "center", fontSize: "150%" }}>{hardPercentage}%</div>
          </div>
        </Col>
        <Col>
          <div
            style={{
              background: progressCircleBackground(allPercentage / 100, "#bf5eff"),
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              marginTop: "-20px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", bottom: "35%", width: "100%", textAlign: "center", fontSize: "200%" }}>{allPercentage}%</div>
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
              {difficultyLevels.map((difficulty) => (
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
            <Form.Switch onChange={() => onFavoriteSwitch()} id="custom-switch" label="Favorites Only" checked={!seeFavorites} />
          </Form>
        </Col>
      </Row>
      <Row>
        {loading && <LoadingScreen />}
        {currentItems && currentItems.length && currentItems !== "nada"
          ? currentItems.map((question) => (
              <Col key={question.id}>
                <Card style={{ width: "18rem", marginBottom: "20px" }}>
                  <Card.Header style={{ backgroundColor: cardHeaderColor(question.level) }} />
                  <Card.Body style={{ backgroundColor: cardBodyColor(question.id) }}>
                    <Card.Img
                      style={{ float: "right", width: "25px" }}
                      onClick={() => favorite(userId, question.id)}
                      variant="top"
                      src={favoriteStatus(question.id) ? "/heart(red).png" : "/heart.png"}
                    />
                    <Link style={{ textDecoration: "none" }} to={`/questions/${question.id}`}>
                      <Card.Title style={{ color: "black" }}>Question Number {question.id}</Card.Title>
                      <Card.Text style={{ color: "black" }}>{truncate(question.question)}</Card.Text>
                    </Link>
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
