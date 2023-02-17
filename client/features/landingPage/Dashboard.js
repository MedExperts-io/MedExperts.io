import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import { fetchUserQuestions, updateUserQuestion } from "../stats/user_questionsSlice";
import { fetchAllQuestionsAnswers } from "../allQA/allQASlice";
import { Card, Dropdown, Row, Col, Form, Container } from "react-bootstrap";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);
  
  useEffect(() => {
    dispatch(fetchAllQuestionsAnswers()).then(() => dispatch(fetchUserQuestions(userId)));
  }, []);
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
  const { questionsAnswers, easy, moderate, hard } = useSelector((state) => state.questionsAnswers);
  const easyPercentage = Math.round((userEasy?.length / easy?.length) * 100);
  const totalEasyAnswered = `${userEasy?.length} / ${easy?.length}`;
  const moderatePercentage = Math.round((userModerate?.length / moderate?.length) * 100);
  const totalmoderateAnswere = `${userModerate?.length} / ${moderate?.length}`;
  const hardPercentage = Math.round((userHard?.length / hard?.length) * 100);
  const totalhardAnswered = `${userHard?.length} / ${hard?.length}`;
  const allPercentage = Math.round((UserQuestions?.length / questionsAnswers?.length) * 100);
  const totalallAnswered = `${UserQuestions?.length} / ${questionsAnswers?.length}`;

  const Asthma = questionsAnswers.filter((question) => question.category === "Asthma");
  const Bronchiectasis = questionsAnswers.filter((question) => question.category === "Bronchiectasis");
  const COPD = questionsAnswers.filter((question) => question.category === "Chronic Obstructive Pulmonary Disease");
  const CriticalCare = questionsAnswers.filter((question) => question.category === "Critical Care");
  const Infection = questionsAnswers.filter((question) => question.category === "Infection");
  const InterstitialLungDisease = questionsAnswers.filter((question) => question.category === "Interstitial Lung Diseases");
  const LungCancer = questionsAnswers.filter((question) => question.category === "Lung Cancer");
  const LungTransplant = questionsAnswers.filter((question) => question.category === "Lung Transplant");
  const MediastinalDisorders = questionsAnswers.filter((question) => question.category === "Mediastinal Disorders");
  const OtherPulmonaryDiseases = questionsAnswers.filter((question) => question.category === "Other Pulmonary Diseases");
  const Pharmacology = questionsAnswers.filter((question) => question.category === "Pharmacology");
  const PleuralDisease = questionsAnswers.filter((question) => question.category === "Pleural Diseases");
  const PulmonaryFunctionTesting = questionsAnswers.filter((question) => question.category === "Pulmonary Function Testing");
  const PulmonaryVascularDisease = questionsAnswers.filter((question) => question.category === "Pulmonary Vascular Disease");
  const Sleep = questionsAnswers.filter((question) => question.category === "Sleep");

  const AsthmaUser = UserQuestions.filter((question) => question.category === "Asthma");
  const BronchiectasisUser = UserQuestions.filter((question) => question.category === "Bronchiectasis");
  const COPDUser = UserQuestions.filter((question) => question.category === "Chronic Obstructive Pulmonary Disease");
  const CriticalCareUser = UserQuestions.filter((question) => question.category === "Critical Care");
  const InfectionUser = UserQuestions.filter((question) => question.category === "Infection");
  const InterstitialLungDiseaseUser = UserQuestions.filter((question) => question.category === "Interstitial Lung Diseases");
  const LungCancerUser = UserQuestions.filter((question) => question.category === "Lung Cancer");
  const LungTransplantUser = UserQuestions.filter((question) => question.category === "Lung Transplant");
  const MediastinalDisordersUser = UserQuestions.filter((question) => question.category === "Mediastinal Disorders");
  const OtherPulmonaryDiseasesUser = UserQuestions.filter((question) => question.category === "Other Pulmonary Diseases");
  const PharmacologyUser = UserQuestions.filter((question) => question.category === "Pharmacology");
  const PleuralDiseaseUser = UserQuestions.filter((question) => question.category === "Pleural Diseases");
  const PulmonaryFunctionTestingUser = UserQuestions.filter((question) => question.category === "Pulmonary Function Testing");
  const PulmonaryVascularDiseaseUser = UserQuestions.filter((question) => question.category === "Pulmonary Vascular Disease");
  const SleepUser = UserQuestions.filter((question) => question.category === "Sleep");

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
    progressAsthma: {
      background: progressCircleBackground(AsthmaUser.length / Asthma.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressBronchiectasis: {
      background: progressCircleBackground(BronchiectasisUser.length / Bronchiectasis.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressCOPD: {
      background: progressCircleBackground(COPDUser.length / COPD.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressCriticalCare: {
      background: progressCircleBackground(CriticalCareUser.length / CriticalCare.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressInfection: {
      background: progressCircleBackground(InfectionUser.length / Infection.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressInterstitialLungDisease: {
      background: progressCircleBackground(InterstitialLungDiseaseUser.length / InterstitialLungDisease.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressLungCancer: {
      background: progressCircleBackground(LungCancerUser.length / LungCancer.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressLungTransplant: {
      background: progressCircleBackground(LungTransplantUser.length / LungTransplant.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressMediastinalDisorders: {
      background: progressCircleBackground(MediastinalDisordersUser.length / MediastinalDisorders.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressOtherPulmonaryDiseases: {
      background: progressCircleBackground(OtherPulmonaryDiseasesUser.length / OtherPulmonaryDiseases.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressPharmacology: {
      background: progressCircleBackground(PharmacologyUser.length / Pharmacology.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressPleuralDisease: {
      background: progressCircleBackground(PleuralDiseaseUser.length / PleuralDisease.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressPulmonaryFunctionTesting: {
      background: progressCircleBackground(PulmonaryFunctionTestingUser.length / PulmonaryFunctionTesting.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressPulmonaryVascularDisease: {
      background: progressCircleBackground(PulmonaryVascularDiseaseUser.length / PulmonaryVascularDisease.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "relative",
    },
    progressSleep: {
      background: progressCircleBackground(SleepUser.length / Sleep.length, "#f5ad27"),
      borderRadius: "50%",
      width: "100px",
      height: "100px",
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
                        <Card id="no-border" className="mx-auto ">
                          <div className="mx-auto" style={styles.progressBarEasy}>
                            <div style={styles.progressBarBackground}>Completed</div>

                            <div style={styles.progressBarMiddle}>{totalEasyAnswered}</div>
                          </div>
                          <Card.Title className="mx-auto" style={{ color: "lightgreen", paddingTop: "5px" }}>
                            Easy Level
                          </Card.Title>
                        </Card>
                      </Col>

                      <Col>
                        <Card id="no-border" className="mx-auto">
                          <div className="mx-auto" style={styles.progressBarModerate}>
                            <div style={styles.progressBarBackground}>Completed</div>
                            <div style={styles.progressBarMiddle}>{totalmoderateAnswere}</div>
                          </div>
                          <Card.Title className="mx-auto" style={{ color: "#f5ad27", paddingTop: "5px" }}>
                            <center>Moderate Level</center>
                          </Card.Title>
                        </Card>
                      </Col>

                      <Col>
                        <Card id="no-border" className="mx-auto">
                          <div className="mx-auto" style={styles.progressBarHard}>
                            <div style={styles.progressBarBackground}>Completed</div>
                            <div style={styles.progressBarMiddle}>{totalhardAnswered}</div>
                          </div>
                          <Card.Title className="mx-auto" style={{ color: "#f55b49", paddingTop: "5px" }}>
                            Hard Level
                          </Card.Title>
                        </Card>
                      </Col>

                      <Col>
                        <Card id="no-border" className="mx-auto">
                          <div className="mx-auto" style={styles.progressBarAll}>
                            <div style={styles.progressBarBackground}>Completed</div>
                            <div style={styles.progressBarMiddle}>{totalallAnswered}</div>
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
                        <Card id="no-border" className="mx-auto">
                          <div className="mx-auto" style={styles.progressBarEasy}>
                            <div style={styles.progressBarBackground}>Correct</div>
                            <div style={styles.progressBarMiddle}>{Math.round((UsereasyQuestionsTotal.length / EasyQuestionsTotal.length) * 100) || 0}%</div>
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
                            <div style={styles.progressBarMiddle}>{Math.round((UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length) * 100) || 0}%</div>
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
                            <div style={styles.progressBarMiddle}>{Math.round((UserHardQuestionsTotal.length / HardQuestionsTotal.length) * 100) || 0}%</div>
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
                            <div style={styles.progressBarMiddle}>{Math.round((UserAllQuestionsTotal.length / AllUserQuestions.length) * 100) || 0}%</div>
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
            </Stack>

            {/* bottom row answered amount out of total for each category */}
            <Stack>
              <Stack>
                <Row style={{ marginTop: "30px", marginBottom: "35px" }}>
                  <Card className="mx-auto" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "90%" }}>
                    <Card.Header style={{ marginBottom: "20px", fontSize: `200%` }}>
                      <center> Categories </center>
                    </Card.Header>{" "}
                    <Card.Body>
                      <Row>
                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressAsthma}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${AsthmaUser.length} / ${Asthma.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                              Asthma
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressBronchiectasis}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${BronchiectasisUser.length} / ${Bronchiectasis.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                              Bronchiectasis
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressCOPD}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${COPDUser.length} / ${COPD.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                              COPD
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressCriticalCare}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${CriticalCareUser.length} / ${CriticalCare.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                              Critical Care
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressInfection}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${InfectionUser.length} / ${Infection.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                              Infection
                            </Card.Title>
                          </Card>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressInterstitialLungDisease}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${InterstitialLungDiseaseUser.length} / ${InterstitialLungDisease.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px", textAlign: "center" }}>
                              Interstitial Lung Disease
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressLungCancer}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${LungCancerUser.length} / ${LungCancer.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                              Lung Cancer
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressLungTransplant}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${LungTransplantUser.length} / ${LungTransplant.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                              Lung Transplant
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressMediastinalDisorders}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${MediastinalDisordersUser.length} / ${MediastinalDisorders.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px", textAlign: "center" }}>
                              Mediastinal Disorders
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressOtherPulmonaryDiseases}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${OtherPulmonaryDiseasesUser.length} / ${OtherPulmonaryDiseases.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px", textAlign: "center" }}>
                              Other Pulmonary Diseases
                            </Card.Title>
                          </Card>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressPharmacology}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${PharmacologyUser.length} / ${Pharmacology.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px", textAlign: "center" }}>
                              Pharmacology
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressPleuralDisease}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${PleuralDiseaseUser.length} / ${PleuralDisease.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px" }}>
                              Pleural Disease
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressPulmonaryFunctionTesting}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${PulmonaryFunctionTestingUser.length} / ${PulmonaryFunctionTesting.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px", textAlign: "center" }}>
                              Pulmonary Function Testing
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressPulmonaryVascularDisease}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${PulmonaryVascularDiseaseUser.length} / ${PulmonaryVascularDisease.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px", textAlign: "center" }}>
                              Pulmonary Vascular Disease
                            </Card.Title>
                          </Card>
                        </Col>

                        <Col>
                          <Card id="no-border" className="mx-auto ">
                            <div className="mx-auto" style={stylesCategory.progressSleep}>
                              <div style={stylesCategory.progressBarBackground}>Completed</div>

                              <div style={stylesCategory.progressBarMiddle}>{`${SleepUser.length} / ${Sleep.length}`}</div>
                            </div>
                            <Card.Title className="mx-auto" style={{ paddingTop: "5px", textAlign: "center" }}>
                              Sleep
                            </Card.Title>
                          </Card>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <h5>Admin Dashboard place holder</h5>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
