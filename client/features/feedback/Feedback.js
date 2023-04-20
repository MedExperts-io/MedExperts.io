import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "./SurveyQuestions";
import "survey-core/defaultV2.min.css";
import { recordUserFeedback } from "./user_feedbackSlice";

const Feedback = () => {
  const userId = useSelector((state) => state.auth.me.id);
  console.log(userId);
  const dispatch = useDispatch();

  const survey = new Model(surveyJson);
  survey.onComplete.add((sender, options) => {
    options.showSaveInProgress();
    const surveyResponse = sender.data;
    console.log(surveyResponse);
    dispatch(recordUserFeedback({ userId, surveyResponse }));
  });
  return <Survey model={survey} />;
};

export default Feedback;
