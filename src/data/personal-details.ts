import { calculateExperience } from "@/helpers/calculate-experience";
import { IMAGES } from "./images";

const STARING_DATE_FOR_EXPERIENCE = new Date("2022-10-01");
const EXPERIENCE_IN_YEARS = calculateExperience(
  new Date(STARING_DATE_FOR_EXPERIENCE)
);
const NAME = "Tilak Thapa";
export const PERSONAL_DETAILS = {
  name: NAME,
  nickname: "jrTilak",
  STARING_DATE_FOR_EXPERIENCE,
  avatar: IMAGES.avatar,
  tagline: `Full Stack Web/App Developer 💻 with more than ${EXPERIENCE_IN_YEARS} year of experience.`,
  aboutMe: {
    inShort: `Passionate dev with ${EXPERIENCE_IN_YEARS}+ years of experience building apps with the MERN stack + Next.js, along with DevOps in AWS, Docker, and CI/CD pipelines.`,
    header: `I'm ${NAME}, a web/app developer.`,
    more: [
      "I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    ],
  },
  availableFor: ["Freelancing 💼", "Job Offer 📨"],
};
