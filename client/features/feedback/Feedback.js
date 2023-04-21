import React from "react";
import { useDispatch } from "react-redux";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "./surveyQuestions";
import "survey-core/defaultV2.min.css";
import { recordUserFeedback } from "./user_feedbackSlice";

const Feedback = () => {
  const dispatch = useDispatch();

  const survey = new Model(surveyJson);
  survey.onComplete.add((sender, options) => {
    const { Source, Satisfaction, Features, OtherFeedback } = sender.data;
    console.log(Source, Satisfaction, Features, OtherFeedback);
    dispatch(
      recordUserFeedback({ Source, Satisfaction, Features, OtherFeedback })
    );
  });
  return <Survey model={survey} />;
};

export default Feedback;
