import React from "react";
import { fetchSatisfactionFeedback } from "../feedback/user_feedbackSlice";

const DraftAdminDash = ({ surveyDataSatisfaction }) => {
  const surveyDataSet = Object.values(surveyDataSatisfaction);
  const helpfulRating = surveyDataSet?.map(
    (rating) => rating.satisfaction.helpful
  );
  const qualityRating = surveyDataSet?.map(
    (rating) => rating.satisfaction.quality
  );
  const accessibilityRating = surveyDataSet?.map(
    (rating) => rating.satisfaction.accessibility
  );
  const recommendableRating = surveyDataSet?.map(
    (rating) => rating.satisfaction.recommendable
  );
  const usabilityRating = surveyDataSet?.map(
    (rating) => rating.satisfaction.usability
  );

  console.log("HELPFUL", helpfulRating);
  console.log("QUALITY", qualityRating);
  console.log("ACCESSIBILITY", accessibilityRating);
  console.log("RECOMMENDABLE", recommendableRating);
  console.log("USABILITY", usabilityRating);

  return <h4>Admin Dash Temp</h4>;
};

export default DraftAdminDash;
