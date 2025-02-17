import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fab, Stack, Box } from "@mui/material";
import {
  fetchAllUsers,
  fetchUserQuestions,
  fetchAllUserQuestions,
} from "../stats/user_questionsSlice";
import { fetchAllUserFeedback } from "../feedback/user_feedbackSlice";
import { fetchAllQuestionsAnswers } from "../allQA/allQASlice";
import {
  Card,
  Row,
  Col,
  Container,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import FeedbackModal from "../feedback/FeedbackModal";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  useEffect(() => {
    isAdmin
      ?
        dispatch(fetchAllUserFeedback())
      : dispatch(fetchAllQuestionsAnswers()).then(() =>
          dispatch(fetchUserQuestions())
        );
    isAdmin ? dispatch(fetchAllUsers()) : null;
  }, []);

  const surveyDataSatisfaction = useSelector(
    (state) => state.userFeedback.satisfaction
  );

  const allUsers = useSelector((state) => state.userQuestions.allUsers);

  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const AllUserQuestions = useSelector(
    (state) => state.userQuestions.UserQuestions
  );
  const EasyQuestionsTotal = AllUserQuestions.filter(
    (question) => question.level === "Easy"
  );
  const ModerateQuestionsTotal = AllUserQuestions.filter(
    (question) => question.level === "Moderate"
  );
  const HardQuestionsTotal = AllUserQuestions.filter(
    (question) => question.level === "Hard"
  );
  const UsereasyQuestionsTotal = AllUserQuestions.filter(
    (question) => question.level === "Easy" && question.answered === "right"
  );
  const UserModerateQuestionsTotal = AllUserQuestions.filter(
    (question) => question.level === "Moderate" && question.answered === "right"
  );
  const UserHardQuestionsTotal = AllUserQuestions.filter(
    (question) => question.level === "Hard" && question.answered === "right"
  );
  const UserAllQuestionsTotal = AllUserQuestions.filter(
    (question) => question.answered === "right"
  );
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
  const totalEasyAnswered = `${userEasy?.length} / ${easy?.length}`;
  const moderatePercentage = Math.round(
    (userModerate?.length / moderate?.length) * 100
  );
  const totalmoderateAnswere = `${userModerate?.length} / ${moderate?.length}`;
  const hardPercentage = Math.round((userHard?.length / hard?.length) * 100);
  const totalhardAnswered = `${userHard?.length} / ${hard?.length}`;
  const allPercentage = Math.round(
    (UserQuestionsAnswered?.length / questionsAnswers?.length) * 100
  );
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
      <OverlayTrigger
        key="top"
        style={{ backgroundColor: "black" }}
        placement="top"
        overlay={<Tooltip id="tooltip-top">Share your feedback</Tooltip>}
      >
        <Fab
          size="medium"
          onClick={handleOpen}
          aria-label="Share your feedback with MedExperts"
          style={{
            position: "fixed",
            bottom: "15px",
            right: "8px",
            backgroundColor: "#FF6262",
          }}
        >
          <RateReviewIcon style={{ color: "white" }} />
        </Fab>
      </OverlayTrigger>
      <Modal
        size="lg"
        centered
        dialogClassName="modal-90w"
        scrollable={true}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          closeButton
          style={{ paddingTop: "10px", paddingBottom: "10px", border: "none" }}
        ></Modal.Header>
        <Modal.Body style={{ padding: "none" }}>
          <FeedbackModal />
        </Modal.Body>
      </Modal>
      <div className="mx-auto">
        {!isAdmin ? (
          <UserDashboard 
            firstName={firstName}
            totalEasyAnswered={totalEasyAnswered}
            totalmoderateAnswere={totalmoderateAnswere}
            totalhardAnswered={totalhardAnswered}
            totalallAnswered={totalallAnswered}
            UsereasyQuestionsTotal={UsereasyQuestionsTotal}
            EasyQuestionsTotal={EasyQuestionsTotal}
            UserModerateQuestionsTotal={UserModerateQuestionsTotal}
            ModerateQuestionsTotal={ModerateQuestionsTotal}
            UserHardQuestionsTotal={UserHardQuestionsTotal}
            HardQuestionsTotal={HardQuestionsTotal}
            UserAllQuestionsTotal={UserAllQuestionsTotal}
            AllUserQuestions={AllUserQuestions}
            allCategories={allCategories}
            progressBarRatio={progressBarRatio}
            progressCircleBackground={progressCircleBackground}
            styles={styles}
            stylesCategory={stylesCategory}
          />
        ) : (
          <AdminDashboard 
            allUsers={allUsers}
            questionsAnswers={questionsAnswers}
            EasyQuestionsTotal={EasyQuestionsTotal}
            HardQuestionsTotal={HardQuestionsTotal}
            UserQuestionsAnswered={UserQuestionsAnswered}
            surveyDataSatisfaction={surveyDataSatisfaction}
            allCategories={allCategories}
            progressBarRatio={progressBarRatio}
          />
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
