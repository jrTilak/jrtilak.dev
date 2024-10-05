export type FAQ = {
  question: string;
  answer: React.ReactNode;
};

export const FAQs: FAQ[] = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Is it responsive?",
    answer: "Yes. It is fully responsive.",
  },
  {
    question: "Is it SEO-friendly?",
    answer: "Yes. It is optimized for search engines.",
  },
  {
    question: "Is it fast?",
    answer: "Yes. It is fast loading.",
  },
];
