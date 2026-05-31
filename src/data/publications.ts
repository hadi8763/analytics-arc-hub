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
    title: "Machine Learning Framework for Early Detection of Mental Health Conditions from Textual Data",
    authors: ["B. Riskhan", "Abdullah Al Hadi", "S. M. A. I. Saky", "M. S. Arefin", "K. Hussain"],
    abstract: "This research presents a machine learning framework for the early detection of mental health conditions from textual data. The study evaluates various machine learning algorithms and natural language processing techniques to identify mental health indicators, contributing to automated screening tools and early intervention strategies.",
    conference: "Proceedings of The International Conference on Data Science and Official Statistics",
    year: 2025,
    keywords: ["Machine Learning", "Mental Health", "NLP", "Text Classification", "Early Detection"],
    pdfUrl: "https://doi.org/10.34123/icdsos.v2025i1.613",
    doi: "10.34123/icdsos.v2025i1.613"
  },
  {
    id: "phishing-detection-nlp",
    title: "A Hybrid NLP and Deep Learning Framework for Phishing Detection in Emails and URLs",
    authors: ["Basheer Riskhan", "Md Saiful Arefin", "Mutasim Billah", "Abdullah Al Hadi", "Siti Shafrah Shahawai", "Siva Raja Sindiramutty", "Noor Zaman Jhanjhi"],
    abstract: "This study proposes a hybrid framework combining natural language processing and deep learning techniques for phishing detection in emails and URLs. The model integrates TF-IDF feature extraction with a CNN-BiLSTM architecture to capture both spatial and sequential patterns in textual data, achieving robust detection accuracy against evolving phishing attacks.",
    conference: "Journal of Information Technology and Digital Education Technology Studies",
    year: 2025,
    keywords: ["Phishing Detection", "Deep Learning", "NLP", "CNN-BiLSTM", "TF-IDF", "Hybrid Model", "Cybersecurity"],
    pdfUrl: "https://doi.org/10.33150/JITDETS-9.2.5",
    doi: "10.33150/JITDETS-9.2.5"
  }
];
