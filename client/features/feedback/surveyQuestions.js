const surveyJson = {
  elements: [
    {
      type: "text",
      name: "Source",
      title: "How did you learn about MedExperts?",
    },
    {
      type: "text",
      name: "Frequency",
      title: "How frequently do you use MedExperts?",
    },
    {
      type: "matrix",
      name: "Satisfaction",
      title:
        "Please indicate if you agree or disagree with the following statemenets",
      columns: [
        {
          value: 5,
          text: "Strongly agree",
        },
        {
          value: 4,
          text: "Agree",
        },
        {
          value: 3,
          text: "Neutral",
        },
        {
          value: 2,
          text: "Disagree",
        },
        {
          value: 1,
          text: "Strongly disagree",
        },
      ],
      rows: [
        {
          value: "helpful",
          text: "MedExperts questions helped me prepare for my exams",
        },
        {
          value: "difficulty",
          text: "The difficulty level of the questions accurately reflects their actual difficulty level",
        },
        {
          value: "quality",
          text: "I am satisfied with the quality of the questions on MedExperts",
        },
        {
          value: "recommendable",
          text: "I would recommend MedExperts to a friend or colleague",
        },
        {
          value: "usability",
          text: "MedExperts is easy to navigate and visually appealing",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "text",
      name: "Features",
      title: "Are there any other features you'd like to see included?",
    },
    {
      type: "comment",
      name: "OtherFeedback",
      title:
        "Is there anything else we could do to improve your experience on MedExperts?",
      maxLength: 250,
    },
  ],
};

module.exports = { surveyJson };
