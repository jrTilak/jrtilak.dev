export type Education = {
  title: string;
  college: {
    name: string;
    image: string;
    url: string;
  };
  date: {
    from: string;
    to: string;
    duration: string;
  };
};

export const EDUCATION: Array<Education> = [
  {
    college: {
      name: "Prodigy InfoTech",
      image: "/images/prodigy-infotech2.svg",
      url: "https://prodigyinfotech.dev/",
    },
    date: {
      from: "Jan 2024",
      to: "Feb 2024",
      duration: "1 month",
    },
    title: "Internship",
  },
];
