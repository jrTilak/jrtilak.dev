import { calculateExperience } from "@/helpers/calculate-experience";
import { IMAGES } from "./images";

export const STARING_DATE_FOR_EXPERIENCE = new Date("2022-10-01");
export const EXPERIENCE_IN_YEARS = calculateExperience(
  new Date(STARING_DATE_FOR_EXPERIENCE)
);
const NAME = "Tilak Thapa";
export const PERSONAL_DETAILS = {
  name: NAME,
  nickname: "jrTilak",
  avatar: IMAGES.avatar,
  tagline: `Crafting Web Solutions with ${EXPERIENCE_IN_YEARS}+ Years of Expertise 🔥`,
  postTitle: "Full Stack Developer",
  aboutMe: {
    inShort: `Curiosity-driven developer with ${EXPERIENCE_IN_YEARS}+ years of expertise building robust web apps using the MERN stack and Next.js, paired with hands-on experience in Docker and cloud deployment on AWS.`,
    header: `I'm ${NAME}, a full-stack web developer.`,
    more: (
      <>
        <p>
          I&apos;m a <span className="font-bold">curiosity-driven</span>{" "}
          developer with over <span className="font-bold">2 years</span> of
          expertise in building robust web applications using the{" "}
          <span className="font-bold">MERN stack and Next.js.</span> 💻 My
          hands-on experience extends to Docker and cloud deployment on AWS,
          allowing me to deliver high-quality solutions that meet diverse needs.
        </p>
        <p>
          As a firm believer in the power of continuous improvement, I resonate
          with the quote: &quot;
          <span
            style={{
              fontStyle: "italic",
            }}
            className="font-medium"
          >
            The only way to do great work is to love what you do.
          </span>
          &quot; — Steve Jobs. This passion drives me to participate in
          hackathons, share insights through blogging, and create meaningful
          user experiences that extend beyond just writing code. 📚
        </p>
        <p>
          &quot;
          <span
            style={{
              fontStyle: "italic",
            }}
          >
            Code is like humor. When you have to explain it, it&apos;s bad.
          </span>
          &quot; — Cory House.
        </p>
      </>
    ),
  },
  availableFor: ["Freelancing 💼", "Job Offer 📨", "Collaborations 🤝"],
};
