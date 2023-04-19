import React from "react";

import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import 


const Feedback = () => {
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
};

export default Feedback;
