import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-react-ui";
import { surveyJson } from "./surveyQuestions";
import { recordUserFeedback } from "./user_feedbackSlice";

const FeedbackModal = () => {
  const dispatch = useDispatch();

  const survey = new Model(surveyJson);
  survey.onComplete.add((sender, options) => {
    const { Source, Frequency, Satisfaction, OtherFeedback, Features } =
      sender.data;
    dispatch(
      recordUserFeedback({
        Source,
        Frequency,
        Satisfaction,
        Features,
        OtherFeedback,
      })
    );
  });
  return (
    <Container fluid>
      <div style={{ marginTop: "30px", marginBottom: "35px" }}>
        <Survey id="feedback-survey" model={survey} />
      </div>
    </Container>
  );
};

export default FeedbackModal;
