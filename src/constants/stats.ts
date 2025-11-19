import { calculateExperience } from "@/lib/calculate-experience";
import { CERTIFICATION } from "./certification";
export const STARING_DATE_FOR_EXPERIENCE = new Date("2023-1-1");
export const EXPERIENCE_IN_YEARS = calculateExperience(new Date(STARING_DATE_FOR_EXPERIENCE));
export const STATS = [
  {
    value: 30,
    label: "Projects",
    plus: true,
  },
  {
    value: 10,
    label: "Happy Clients",
    plus: true,
  },
  {
    value: CERTIFICATION.length,
    label: "Certifications",
    plus: true,
  },
  {
    value: Number(EXPERIENCE_IN_YEARS),
    label: "years in development",
    plus: false,
  },
];
