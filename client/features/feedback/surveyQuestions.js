const surveyJson = {
  elements: [
    {
      type: "dropdown",
      name: "Source",
      title: "How did you hear about MedExperts?",
      choices: [
        "Search Engine, (e.g. Google, Yahoo, Bing)",
        "LinkedIn",
        "Instagram",
        "Word of mouth (e.g. friend, colleague, family)",
      ],
      isRequired: true,
    },
    {
      type: "dropdown",
      name: "Frequency",
      title: "How frequently do you use MedExperts?",
      choices: [
        "Daily",
        "Several times a week",
        "Once a week",
        "Several times a month",
        "Once a month",
        "Rarely",
        "This is my first time",
      ],
      isRequired: true,
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
        {
          value: "accessibility",
          text: "Hold for question regarding accessibility",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "comment",
      name: "OtherFeedback",
      title:
        "Is there anything else we could do to improve your experience on MedExperts?",
      maxLength: 250,
    },
    {
      type: "text",
      name: "Features",
      title: "Are there any other features you'd like to see included?",
    },
  ],
};

module.exports = { surveyJson };
