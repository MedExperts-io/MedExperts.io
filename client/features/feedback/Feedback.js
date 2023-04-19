import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "./SurveyQuestions";
import "survey-core/defaultV2.min.css";

const Feedback = () => {
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
};

export default Feedback;
