import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  Button,
  Card,
  Dropdown,
  Row,
  Col,
  DropdownButton,
} from "react-bootstrap";
import { fetchAllQuestionsAnswers } from "./allQASlice";
import { token } from "morgan";
import {
  fetchAllUserQuestions,
  fetchUserQuestions,
  updateUserQuestion,
} from "../stats/user_questionsSlice";
import LoadingScreen from "../loading/LoadingScreen";

const QuestionsAnswers = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);

  const difficultiyLevels = ["All Levels", "Easy", "Medium", "Difficult"];
  const [currentDifficulty, setCurrentDifficulty] = useState(
    difficultiyLevels[0]
  );
  const categories = [
    "All Categories",
    "Pharmacology",
    "Anatomy",
    "Radiology",
    "Oncology",
    "Pulmonary Function",
    "Physiology",
    "Infectious Diseases",
    "Cardiology",
  ];
  const [currentCategory1, setCurrentCategory1] = useState(categories[0]);
  const [currentCategory2, setCurrentCategory2] = useState(categories[0]);
  const loading = useSelector((state) => state.questionsAnswers.loading);

  let filterCriteria = [currentDifficulty, currentCategory1, currentCategory2];

  const userQuestions = useSelector(
    (state) => state.userQuestions.UserQuestions
  );
  const stateQuestions = useSelector(
    (state) => state.questionsAnswers.questionsAnswers
  );
  let allQuestions = [...stateQuestions];
  allQuestions.sort((a, b) => a.id - b.id);
  allQuestions = allQuestions.map((question) => {
    if (question.level === "Easy") {
      return {
        ...question,
        color: "lightgreen",
      };
    } else if (question.level === "Medium") {
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

  console.log("allQuestionsCheck", allQuestions);
  const [filteredQuestions, setfilteredQuestions] = useState(null);
  allQuestions.length && !filteredQuestions
    ? setfilteredQuestions(allQuestions)
    : null;
  console.log("filteredQuestions", filteredQuestions);

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
    );
  };

  const favoriteStatus = (questionId) => {
    const question = userQuestions.filter(
      (question) => question.questionAnswerId == questionId
    );
    if (question[0] && question[0].favorite) return true;
    return false;
  };

  const pickDifficulty = (event) => {
    setCurrentDifficulty(event);
    filterCriteria[0] = event;
    filterFunction();
    //setCurrentDifficulty(event);
    //event === "All Levels" ? setfilteredQuestions(allQuestions) : setfilteredQuestions(allQuestions.filter((question) => question.level === event));
  };
  const pickCategory1 = (event) => {
    setCurrentCategory1(event);
    filterCriteria[1] = event;
    filterFunction();
  };
  const pickCategory2 = (event) => {
    setCurrentCategory2(event);
    filterCriteria[2] = event;
    filterFunction();
  };

  const filterFunction = () => {
    let multiFilter = allQuestions;
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
    console.log("filterQuestions in filterFunction", multiFilter);
    setfilteredQuestions(multiFilter);
  };

  useEffect(() => {
    dispatch(fetchAllQuestionsAnswers());
    dispatch(fetchUserQuestions(userId));
  }, []); // Putting userQuestions in here throws a loop

  return (
    <Container>
      <Row>
        <Col style={{ height: "200px" }}>hello, here's some statistics.</Col>
      </Row>
      <Row>
        <Col style={{ marginBottom: "20px", fontSize: "200%" }}>
          {currentDifficulty} & {currentCategory1}
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6} style={{ marginBottom: "20px" }}>
        <Col>
          <Dropdown
            style={{ marginRight: "20px" }}
            onSelect={(event) => pickDifficulty(event)}
          >
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

        {/* <Col>
            <Dropdown onSelect={(event) => pickCategory2(event)}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {currentCategory2}
              </Dropdown.Toggle>

              <Dropdown.Menu>
        {loading && <LoadingScreen />}

                {categories.map((category) => (
                  <Dropdown.Item eventKey={category}>{category}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col> */}
      </Row>
      <Row>
        {loading && <LoadingScreen />}
        {filteredQuestions && filteredQuestions.length
          ? filteredQuestions.map((question) => (
              <Col key={question.id}>
                <Card style={{ width: "18rem", marginBottom: "20px" }}>
                  <Card.Header
                    style={{ backgroundColor: `${question.color}` }}
                  />
                  <Card.Body>
                    <Card.Img
                      style={{ float: "right", width: "25px" }}
                      onClick={() => favorite(userId, question.id)}
                      variant="top"
                      src={
                        favoriteStatus(question.id)
                          ? "/heart(red).png"
                          : "/heart.png"
                      }
                    />
                    <Card.Title>
                      <Link
                        to={`/questions/${question.id}`}
                        style={{ textDecoration: `none` }}
                      >
                        {question.id}. Some Title
                      </Link>
                    </Card.Title>
                    <Card.Text>{truncate(question.question)}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Img
                      style={{ float: "right", width: "25px" }}
                      src="/endocrine-system.png"
                    />
                  </Card.Footer>
                </Card>
              </Col>
            ))
          : "Sorry, we didn't find anything matching that"}
      </Row>
    </Container>
  );
};

export default QuestionsAnswers;
