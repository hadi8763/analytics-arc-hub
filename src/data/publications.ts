export interface Publication {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  conference: string;
  year: number;
  keywords: string[];
  pdfUrl?: string;
  doi?: string;
}

export const publications: Publication[] = [
  {
    id: "mental-health-ml",
    title: "A Comparative Analysis of Machine Learning Approaches for Mental Health Detection in Social Media Text",
    authors: ["Abdullah Al Hadi", "Supervisor Name"],
    abstract: "This research presents a comprehensive comparative analysis of various machine learning algorithms for detecting mental health indicators in social media text. We evaluate the performance of Support Vector Machines, Logistic Regression, Naive Bayes, and Random Forest classifiers using TF-IDF vectorization on a curated dataset. Our experimental results demonstrate that ensemble methods achieve superior performance with accuracy rates up to 92%. The study contributes to the growing body of research on automated mental health screening tools and provides insights into feature engineering techniques for text classification in healthcare applications.",
    conference: "International Conference on Data Science and Machine Learning",
    year: 2024,
    keywords: ["Machine Learning", "Mental Health", "NLP", "Text Classification", "TF-IDF"],
    pdfUrl: "#",
    doi: "10.xxxx/xxxxx"
  },
  {
    id: "phishing-detection-hybrid",
    title: "Hybrid Deep Learning Architecture for Phishing Email Detection: Combining CNN, BiLSTM, and Graph Neural Networks",
    authors: ["Abdullah Al Hadi", "Research Supervisor"],
    abstract: "Phishing attacks continue to pose significant cybersecurity threats, necessitating advanced detection mechanisms. This paper proposes a novel hybrid deep learning architecture that synergistically combines Convolutional Neural Networks (CNN), Bidirectional Long Short-Term Memory (BiLSTM), and Graph Convolutional Networks (GCN) for phishing email detection. Our approach leverages CNN for local feature extraction, BiLSTM for sequential pattern recognition, and GCN for capturing structural relationships within email content. Experimental evaluation on benchmark datasets demonstrates that our hybrid model outperforms traditional machine learning and single-architecture deep learning approaches.",
    conference: "IEEE International Conference on Cybersecurity and AI",
    year: 2025,
    keywords: ["Deep Learning", "Cybersecurity", "Phishing Detection", "CNN", "BiLSTM", "GCN", "NLP"],
    pdfUrl: "#",
    doi: "pending"
  }
];
