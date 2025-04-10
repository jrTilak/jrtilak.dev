import { IMAGES } from "./images";

export type Education = {
  title: string;
  college: {
    name: string;
    image?: string;
    url?: string;
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
      name: "IOE Purwanchal Campus",
      image: IMAGES.ioepc,
      url: "https://www.ioepc.edu.np/",
    },
    date: {
      from: "2023",
      to: "Present",
      duration: "Ongoing",
    },
    title: "Bachelor in Computer Engineering",
  },
  {
    college: {
      name: "Tulsi Boarding Secondary School",
    },
    date: {
      from: "2021",
      to: "2022",
      duration: "2 years",
    },
    title: "+2 Science",
  },
];
