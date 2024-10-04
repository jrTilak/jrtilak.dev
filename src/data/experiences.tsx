export type Experience = {
  position: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: {
    from: string;
    to: string;
    duration: string;
  };
  description: React.ReactNode;
  certifications?: Array<string>;
};

export const EXPERIENCES: Array<Experience> = [
  {
    company: {
      name: "Prodigy InfoTech",
      image: "/images/prodigy-infotech2.svg",
      url: "https://prodigyinfotech.dev/",
    },
    date: {
      from: "Jan 2024",
      to: "Feb 2024",
      duration: "1 month",
    },
    description: (
      <p>
        Worked as a <strong>Frontend Developer</strong> on a project.
      </p>
    ),
    position: "Internship",
  },
];
