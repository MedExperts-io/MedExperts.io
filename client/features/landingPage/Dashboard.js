import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import {
  fetchAllUsers,
  fetchUserQuestions,
  fetchAllUserQuestions,
} from "../stats/user_questionsSlice";
import { fetchAllQuestionsAnswers } from "../allQA/allQASlice";
import { Card, Row, Col, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    isAdmin ? dispatch(fetchAllQuestionsAnswers()).then(() => dispatch(fetchAllUserQuestions())) : dispatch(fetchAllQuestionsAnswers()).then(() => dispatch(fetchUserQuestions()));
    isAdmin ? dispatch(fetchAllUsers()) : null;
  }, []);

  const allUsers = useSelector((state) => state.userQuestions.allUsers);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const AllUserQuestions = useSelector((state) => state.userQuestions.UserQuestions);
  const EasyQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Easy");
  const ModerateQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Moderate");
  const HardQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Hard");
  const UsereasyQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Easy" && question.answered === "right");
  const UserModerateQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Moderate" && question.answered === "right");
  const UserHardQuestionsTotal = AllUserQuestions.filter((question) => question.level === "Hard" && question.answered === "right");
  const UserAllQuestionsTotal = AllUserQuestions.filter((question) => question.answered === "right");
  const { UserQuestions, userEasy, userModerate, userHard } = useSelector((state) => state.userQuestions);
  const UserQuestionsAnswered = UserQuestions.filter((question) => question.answered !== null);
  const { questionsAnswers, easy, moderate, hard } = useSelector((state) => state.questionsAnswers);
  const easyPercentage = Math.round((userEasy?.length / easy?.length) * 100);
  const totalEasyAnswered = `${userEasy?.length} / ${easy?.length}`;
  const moderatePercentage = Math.round((userModerate?.length / moderate?.length) * 100);
  const totalmoderateAnswere = `${userModerate?.length} / ${moderate?.length}`;
  const hardPercentage = Math.round((userHard?.length / hard?.length) * 100);
  const totalhardAnswered = `${userHard?.length} / ${hard?.length}`;
  const allPercentage = Math.round((UserQuestionsAnswered?.length / questionsAnswers?.length) * 100);
  const totalallAnswered = `${UserQuestionsAnswered?.length} / ${questionsAnswers?.length}`;

  const progressBarRatio = (category, plainText) => {
    const questionAnswers = questionsAnswers.filter(
      (question) => question.category === category
    ).length;
    const userAnswers = UserQuestions.filter(
      (question) => question.category === category
    ).length;

    if (plainText) {
      return `${userAnswers} / ${questionAnswers}`;
    } else {
      return userAnswers / questionAnswers;
    }
  };

  const allCategories = [
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

  const progressCircleBackground = (progress, color) => {
    const angle = 360 * progress;
    return `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(${color} 360deg, ${color})`;
  };
  const { firstName } = useSelector((state) => state.auth.me);

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

  const stylesCategory = {
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
    <Container fluid style={{ marginBottom: "5%" }}>
      <div className="mx-auto">
        {!isAdmin ? (
          <Stack>
            <div className="welcome">Welcome, {firstName ? firstName.charAt(0).toUpperCase() + firstName.slice(1) : "User"}!</div>
            {/* top row answered amount out of total */}
            <Stack>
              <Row style={{ marginTop: "30px", marginBottom: "35px" }}>
                <Card className="mx-auto" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "90%" }}>
                  <Card.Header style={{ marginBottom: "20px", fontSize: `200%` }}>
                    <center> Questions Answered </center>
                  </Card.Header>{" "}
                  <Card.Body>
                    <Row>
                      <Col>
                        <div className="visually-hidden">
                          Easy Level {totalEasyAnswered} Completed
                        </div>
                        <Card
                          id="no-border"
                          aria-hidden="true"
                          className="mx-auto "
                        >
                          <div
                            className="mx-auto"
                            style={styles.progressBarEasy}
                          >
                            <div style={styles.progressBarMiddle}>
                              {totalEasyAnswered}
                            </div>
                            <div style={styles.progressBarBackground}>
                              Completed
                            </div>
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
                          Moderate Level {totalmoderateAnswere} Completed
                        </div>
                        <Card
                          title={`Moderate Level. ${totalmoderateAnswere} Completed`}
                          aria-hidden="true"
                          id="no-border"
                          className="mx-auto"
                        >
                          <div
                            className="mx-auto"
                            style={styles.progressBarModerate}
                          >
                            <div style={styles.progressBarMiddle}>
                              {totalmoderateAnswere}
                            </div>
                            <div style={styles.progressBarBackground}>
                              Completed
                            </div>
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
                          Hard Level {totalhardAnswered} Completed
                        </div>
                        <Card
                          id="no-border"
                          aria-hidden="true"
                          className="mx-auto"
                        >
                          <div
                            title={`Hard Level. ${totalhardAnswered} Completed`}
                            className="mx-auto"
                            style={styles.progressBarHard}
                          >
                            <div style={styles.progressBarMiddle}>
                              {totalhardAnswered}
                            </div>
                            <div style={styles.progressBarBackground}>
                              Completed
                            </div>
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
                          All Levels {totalallAnswered} Completed
                        </div>
                        <Card
                          id="no-border"
                          aria-hidden="true"
                          className="mx-auto"
                        >
                          <div
                            title={`All Levels. ${totalhardAnswered} Completed`}
                            className="mx-auto"
                            style={styles.progressBarAll}
                          >
                            <div style={styles.progressBarMiddle}>
                              {totalallAnswered}
                            </div>
                            <div style={styles.progressBarBackground}>
                              Completed
                            </div>
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
            </Stack>

            {/* middle row answered percentage out of total */}
            <Stack>
              <Row style={{ marginTop: "30px", marginBottom: "35px" }}>
                <Card className="mx-auto" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "90%" }}>
                  <Card.Header style={{ marginBottom: "20px", fontSize: `200%` }}>
                    <center> Questions Answered Correctly </center>
                  </Card.Header>{" "}
                  <Card.Body>
                    <Row>
                      <Col>
                        <div className="visually-hidden">
                          Easy Level{" "}
                          {Math.round(
                            (UsereasyQuestionsTotal.length /
                              EasyQuestionsTotal.length) *
                              100
                          ) || 0}
                          % Completed
                        </div>
                        <Card
                          id="no-border"
                          aria-hidden="true"
                          className="mx-auto"
                        >
                          <div
                            title={`Easy Level. ${
                              Math.round(
                                (UsereasyQuestionsTotal.length /
                                  EasyQuestionsTotal.length) *
                                  100
                              ) || 0
                            }% Correct`}
                            className="mx-auto"
                            style={styles.progressBarEasy}
                          >
                            <div style={styles.progressBarMiddle}>
                              {Math.round(
                                (UsereasyQuestionsTotal.length /
                                  EasyQuestionsTotal.length) *
                                  100
                              ) || 0}
                              %
                            </div>
                            <div style={styles.progressBarBackground}>
                              Correct
                            </div>
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
                          Moderate Level{" "}
                          {Math.round(
                            (UserModerateQuestionsTotal.length /
                              ModerateQuestionsTotal.length) *
                              100
                          ) || 0}
                          % Completed
                        </div>
                        <Card
                          id="no-border"
                          aria-hidden="true"
                          className="mx-auto"
                        >
                          <div
                            title={`Moderate Level. ${
                              Math.round(
                                (UserModerateQuestionsTotal.length /
                                  ModerateQuestionsTotal.length) *
                                  100
                              ) || 0
                            }% Correct`}
                            className="mx-auto"
                            style={styles.progressBarModerate}
                          >
                            <div style={styles.progressBarMiddle}>
                              {Math.round(
                                (UserModerateQuestionsTotal.length /
                                  ModerateQuestionsTotal.length) *
                                  100
                              ) || 0}
                              %
                            </div>
                            <div style={styles.progressBarBackground}>
                              Correct
                            </div>
                          </div>
                          <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                            <center>Moderate Level</center>
                          </Card.Title>
                        </Card>
                      </Col>

                      <Col>
                        <div className="visually-hidden">
                          Hard Level{" "}
                          {Math.round(
                            (UserHardQuestionsTotal.length /
                              HardQuestionsTotal.length) *
                              100
                          ) || 0}
                          % Completed
                        </div>
                        <Card
                          id="no-border"
                          aria-hidden="true"
                          className="mx-auto"
                        >
                          <div
                            title={`Hard Level. ${
                              Math.round(
                                (UserHardQuestionsTotal.length /
                                  HardQuestionsTotal.length) *
                                  100
                              ) || 0
                            }% Correct`}
                            className="mx-auto"
                            style={styles.progressBarHard}
                          >
                            <div style={styles.progressBarMiddle}>
                              {Math.round(
                                (UserHardQuestionsTotal.length /
                                  HardQuestionsTotal.length) *
                                  100
                              ) || 0}
                              %
                            </div>
                            <div style={styles.progressBarBackground}>
                              Correct
                            </div>
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
                          All Levels{" "}
                          {Math.round(
                            (UserAllQuestionsTotal.length /
                              AllUserQuestions.length) *
                              100
                          ) || 0}
                          % Completed
                        </div>
                        <Card
                          id="no-border"
                          aria-hidden="true"
                          className="mx-auto"
                        >
                          <div
                            title={`All Levels. ${
                              Math.round(
                                (UserAllQuestionsTotal.length /
                                  AllUserQuestions.length) *
                                  100
                              ) || 0
                            }% Correct`}
                            className="mx-auto"
                            style={styles.progressBarAll}
                          >
                            <div style={styles.progressBarMiddle}>
                              {Math.round(
                                (UserAllQuestionsTotal.length /
                                  AllUserQuestions.length) *
                                  100
                              ) || 0}
                              %
                            </div>
                            <div style={styles.progressBarBackground}>
                              Correct
                            </div>
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
            </Stack>

            {/* bottom row answered amount out of total for each category */}
            <Stack>
              <Stack>
                <Row style={{ marginTop: "30px", marginBottom: "35px" }}>
                  <Card
                    className="mx-auto"
                    style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "90%" }}
                  >
                    <Card.Header
                      style={{ marginBottom: "20px", fontSize: `200%` }}
                    >
                      <center> Categories </center>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        {allCategories.map((category) => (
                          <Col
                            key={uuidv4()}
                            style={{
                              paddingRight: "60px",
                              paddingLeft: "60px",
                              paddingTop: "15px",
                            }}
                          >
                            <div className="visually-hidden">
                              {`${category} `}{" "}
                              {progressBarRatio(category, true)} Completed
                            </div>
                            <Card
                              id="no-border"
                              aria-hidden="true"
                              className="mx-auto"
                            >
                              <div
                                className="mx-auto"
                                style={{
                                  background: progressCircleBackground(
                                    progressBarRatio(category, false),
                                    "#f5ad27"
                                  ),
                                  borderRadius: "50%",
                                  width: "100px",
                                  height: "100px",
                                  position: "relative",
                                }}
                              >
                                <div style={stylesCategory.progressBarMiddle}>
                                  {progressBarRatio(category, true)}
                                </div>
                                <div
                                  style={stylesCategory.progressBarBackground}
                                >
                                  Completed
                                </div>
                              </div>
                              <center>
                                <Card.Title
                                  className="mx-auto"
                                  style={{ paddingTop: "5px" }}
                                >
                                  {category !==
                                  "Chronic Obstructive Pulmonary Disease"
                                    ? category
                                    : "COPD"}
                                </Card.Title>
                              </center>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <>
            <h5>Admin Dashboard place holder</h5>
            Number of users. {allUsers.length}
          </>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
