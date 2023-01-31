import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card } from "react-bootstrap";
import { fetchAllQuestionsAnswers } from "./allQASlice";
import { token } from "morgan";
import {
  fetchAllUserQuestions,
  fetchUserQuestions,
  updateUserQuestion,
} from "../stats/user_questionsSlice";

const QuestionsAnswers = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);

  const userQuestions = useSelector(
    (state) => state.userQuestions.UserQuestions
  );

  // CALLING OBJCT FROM STAT - DIDN'T MAKE A DIFFERENCEE
  // const currentUserQuestion = useSelector(
  //   (state) => state.userQuestions.currentUserQuestion
  // );
  // console.log("USERQUESTIONS", userQuestions, userId);

  const stateQuestions = useSelector(
    (state) => state.questionsAnswers.questionsAnswers
  );
  let allQuestions = [...stateQuestions];
  allQuestions.sort((a, b) => a.id - b.id);
  allQuestions = allQuestions.map((question) => {
    if (question.level === "easy") {
      return {
        ...question,
        color: "lightgreen",
      };
    } else if (question.level === "medium") {
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

  const truncate = (string) => {
    if (string.length > 50) {
      return string.slice(0, 50) + "...";
    } else {
      return string;
    }
  };

  const favorite = (userId, questionId) => {
    //Here we dispatch a put route to change the favorite status of this.
    dispatch(
      updateUserQuestion({
        userId: userId,
        questionAnswerId: questionId,
      })
    );
  };

  const favoriteStatus = (questionId) => {
    console.log();

    const question = userQuestions.filter(
      (question) => question.questionAnswerId == questionId
    );

    if (question[0] && question[0].favorite) return true;
    return false;
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
        <Row>
          <Col style={{ marginBottom: "20px", fontSize: "200%" }}>Easy</Col>
        </Row>
        {allQuestions.length
          ? allQuestions.map((question) => (
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
          : null}
      </Row>
    </Container>
  );
};

export default QuestionsAnswers;
