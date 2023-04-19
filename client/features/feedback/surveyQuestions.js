const surveyJson = {
  elements: [
    {
      type: "text",
      name: "Source",
      title: "How did you hear about MedExperts?",
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
          text: "The difficulty levels assigned to each question are accurate",
        },
        {
          value: "usability",
          text: "MedExperts is easy to use and navigate",
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
      title: "Any other feedback?",
      maxLength: 250,
    },
  ],
};
