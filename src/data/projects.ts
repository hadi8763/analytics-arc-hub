export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "phishguard",
    title: "PhishGuard — Final Year Project",
    description: "Hybrid CNN-BiLSTM phishing detection system with a Flask web app for real-time email and URL prediction.",
    longDescription: "Developed a hybrid CNN-BiLSTM phishing detection system using NLP and Python, with a Flask-based web application for real-time phishing prediction from email and URL data.",
    techStack: ["Python", "TensorFlow", "NLP", "CNN", "BiLSTM", "Flask"],
    githubUrl: "https://github.com/hadi8763/PhishGuard-FYP",
    highlights: [
      "Hybrid CNN-BiLSTM architecture",
      "NLP-based text preprocessing pipeline",
      "Flask web application for real-time prediction",
      "Email and URL phishing classification"
    ]
  },
  {
    id: "loan-default-prediction",
    title: "Loan Default Prediction Using Deep Learning",
    description: "PyTorch deep learning model predicting loan defaults for the Zindi African Credit Scoring Challenge.",
    longDescription: "Developed a PyTorch-based deep learning model to predict loan defaults using financial and demographic data for the Zindi African Credit Scoring Challenge, including data preprocessing, feature engineering, and model evaluation.",
    techStack: ["Python", "PyTorch", "Deep Learning", "Feature Engineering"],
    githubUrl: "https://github.com/hadi8763/zindi-african-credit-scoring-challenge",
    highlights: [
      "Financial and demographic data preprocessing",
      "Feature engineering for credit scoring",
      "Model training and evaluation in PyTorch"
    ]
  },
  {
    id: "political-sentiment",
    title: "Political Sentiment Analysis using Machine Learning",
    description: "NLP-based sentiment classification of political tweets using Logistic Regression, Linear SVC, and Random Forest.",
    longDescription: "Developed an NLP-based sentiment classification system for political tweets using Logistic Regression, Linear SVC, and Random Forest, with text preprocessing, feature engineering, model evaluation, and data visualization.",
    techStack: ["Python", "NLP", "Scikit-learn", "Logistic Regression", "Linear SVC", "Random Forest"],
    githubUrl: "https://github.com/hadi8763/political-sentiment-analysis",
    highlights: [
      "Text preprocessing and feature engineering",
      "Comparison of multiple classification models",
      "Model evaluation and data visualization"
    ]
  },
  {
    id: "icms-uum",
    title: "ICMS UUM Conference Website — Frontend Developer",
    description: "Frontend development for an academic conference website built with HTML, CSS, JavaScript, and Bootstrap.",
    longDescription: "Designed the frontend using HTML, CSS, JavaScript, and Bootstrap, collaborated with the client on requirements, and provided design recommendations to improve the website.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://icmsuum.com/",
    highlights: [
      "Responsive frontend implementation",
      "Client collaboration on requirements",
      "Design recommendations for improvements"
    ]
  },
  {
    id: "ml-sports-housing",
    title: "Machine Learning for Sports and Housing Data Analysis",
    description: "Supervised learning for football match outcomes and unsupervised clustering of housing data.",
    longDescription: "Applied supervised learning to predict football match outcomes using SVM and Logistic Regression, and unsupervised learning to analyze housing data using K-Means and Hierarchical Clustering. Compared model performance and extracted insights from real-world datasets.",
    techStack: ["Python", "Scikit-learn", "SVM", "Logistic Regression", "K-Means", "Hierarchical Clustering"],
    githubUrl: "https://github.com/hadi8763/ml-final-project",
    highlights: [
      "Supervised prediction of football match outcomes",
      "K-Means and Hierarchical clustering on housing data",
      "Model performance comparison"
    ]
  },
  {
    id: "airbnb-dashboard",
    title: "NYC Airbnb Market Analysis — Power BI",
    description: "Interactive Power BI dashboard analyzing Airbnb pricing, room types, neighborhoods, and host characteristics in New York City.",
    longDescription: "Created an interactive Power BI dashboard to analyze Airbnb pricing, room types, neighborhoods, and host characteristics in New York City.",
    techStack: ["Power BI", "DAX", "Data Modeling", "Excel"],
    githubUrl: "https://github.com/hadi8763/NY-Airbnb-Dashboard",
    highlights: [
      "Pricing analysis across neighborhoods",
      "Room type and host characteristic breakdown",
      "Interactive dashboard visuals"
    ]
  },
  {
    id: "hypothesis-testing-r",
    title: "Hypothesis Testing & Statistical Analysis — R",
    description: "T-test based analysis of customer sales to identify significant differences in spending.",
    longDescription: "Used R and T-tests to analyze customer sales and identify significant differences in average spending and spending by gender.",
    techStack: ["R", "Statistics", "Hypothesis Testing"],
    githubUrl: "https://github.com/hadi8763/hypothesis-testing-r",
    highlights: [
      "T-tests on customer sales data",
      "Analysis of average spending differences",
      "Spending comparison by gender"
    ]
  },
  {
    id: "mental-health-detection",
    title: "Mental Health Prediction from Social Media Text",
    description: "Machine learning applied to social media text to detect mental health conditions.",
    longDescription: "Applied machine learning to social media text to detect mental health conditions using SVM, Logistic Regression, Random Forest, and Naive Bayes.",
    techStack: ["Python", "NLP", "Scikit-learn", "SVM", "Random Forest", "Naive Bayes"],
    githubUrl: "https://github.com/hadi8763/mental-health-detection-using-machine-learning",
    highlights: [
      "Text-based mental health classification",
      "SVM, Logistic Regression, Random Forest, Naive Bayes",
      "Model comparison and evaluation"
    ]
  }
];
