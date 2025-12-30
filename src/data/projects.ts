export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "mental-health-detection",
    title: "Mental Health Detection Using Machine Learning",
    description: "Text classification system for mental health analysis using multiple ML models with up to 92% accuracy.",
    longDescription: "Developed a comprehensive text classification pipeline for mental health detection using TF-IDF vectorization and ensemble machine learning techniques. The system analyzes textual data to identify potential mental health indicators.",
    techStack: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "SVM", "Random Forest"],
    githubUrl: "https://github.com/abdullahhadi",
    highlights: [
      "Implemented TF-IDF text vectorization",
      "Trained SVM, Logistic Regression, Naive Bayes, Random Forest models",
      "Achieved up to 92% classification accuracy",
      "Comprehensive model evaluation and comparison"
    ]
  },
  {
    id: "phishing-detection",
    title: "Phishing Email Detection Using NLP & Deep Learning",
    description: "Final Year Project: Hybrid deep learning model combining CNN, BiLSTM, and GCN for email classification.",
    longDescription: "Developing a state-of-the-art phishing email detection system using a hybrid architecture that combines Convolutional Neural Networks, Bidirectional LSTM, and Graph Convolutional Networks with attention mechanisms for superior text understanding.",
    techStack: ["Python", "TensorFlow", "Keras", "NLTK", "CNN", "BiLSTM", "GCN"],
    githubUrl: "https://github.com/abdullahhadi",
    highlights: [
      "Hybrid CNN + BiLSTM + GCN architecture",
      "Advanced text preprocessing pipeline",
      "Attention mechanism implementation",
      "Spam vs Non-Spam binary classification"
    ]
  },
  {
    id: "airbnb-dashboard",
    title: "New York Airbnb Dashboard",
    description: "Interactive Power BI dashboard for analyzing NYC Airbnb listings, pricing trends, and neighborhood insights.",
    longDescription: "Created a comprehensive business intelligence dashboard to analyze New York City Airbnb data, providing actionable insights on pricing strategies, occupancy rates, and neighborhood performance metrics.",
    techStack: ["Power BI", "DAX", "Data Modeling", "Excel"],
    githubUrl: "https://github.com/abdullahhadi",
    highlights: [
      "Interactive pricing analysis visualizations",
      "Occupancy rate tracking by neighborhood",
      "Geographic mapping of listings",
      "Trend analysis and forecasting"
    ]
  },
  {
    id: "twitter-sentiment",
    title: "Real-Time Twitter Sentiment Analysis Dashboard",
    description: "Tableau dashboard for real-time sentiment analysis with hashtag tracking, engagement metrics, and geo insights.",
    longDescription: "Built an interactive Tableau dashboard that visualizes Twitter sentiment in real-time, tracking trending hashtags, user engagement patterns, and geographic distribution of tweets.",
    techStack: ["Tableau", "Python", "NLP", "Twitter API", "Data Visualization"],
    githubUrl: "https://github.com/abdullahhadi",
    highlights: [
      "Real-time sentiment classification",
      "Trending hashtag analysis",
      "Engagement metrics visualization",
      "Geographic sentiment mapping"
    ]
  }
];
