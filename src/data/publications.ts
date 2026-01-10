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
  }
];
