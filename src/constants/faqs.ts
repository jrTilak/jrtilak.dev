export type FAQ = {
  question: string;
  answer: React.ReactNode;
};

export const FAQs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer:
      "I offer web development and backend development services, focusing on creating robust applications using the MERN stack and Next.js.",
  },
  {
    question: "Do you work on freelance projects?",
    answer:
      "Yes, I'm available for freelance opportunities. Feel free to reach out to discuss your project needs.",
  },
  {
    question: "What is your preferred method of communication?",
    answer:
      "I prefer email or direct messaging through LinkedIn for project discussions and inquiries.",
  },
  {
    question: "Can you help with ongoing projects?",
    answer:
      "Absolutely! I'm open to collaboration on existing projects. Let's discuss how I can contribute.",
  },
  {
    question: "Do you offer remote work?",
    answer:
      "Yes, I offer remote services for all my projects, ensuring flexibility and effective communication.",
  },
];
