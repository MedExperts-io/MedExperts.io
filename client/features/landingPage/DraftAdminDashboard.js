import React from "react";
import { ResponsivePie } from "@nivo/pie";

const DraftAdminDash = ({ surveyDataSatisfaction, allUsers }) => {
  const userTypesObj = {};
  allUsers.map((user) => {
    userTypesObj[user.expertise]
      ? userTypesObj[user.expertise]++
      : (userTypesObj[user.expertise] = 1);
  });

  console.log(userTypesObj);

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

  return (
    <>
      <h4>Admin Dash Temp</h4>
      <ResponsivePie
        data={userTypesObj}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
      />
    </>
  );
};

export default DraftAdminDash;
