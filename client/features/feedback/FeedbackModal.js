import React from "react";
import { useDispatch } from "react-redux";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-react-ui";
import { surveyJson } from "./surveyQuestions";
import { recordUserFeedback } from "./user_feedbackSlice";

const Feedback = () => {
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
    <div>
      <Survey id="feedback-survey" model={survey} />
    </div>
  );
};

export default Feedback;
