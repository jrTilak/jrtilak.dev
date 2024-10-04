import { CERTIFICATION, CertificationId } from "@/data/certification";

export const getCertificationDetails = (id: CertificationId) => {
  const c = CERTIFICATION.find((skill) => skill.id === id);
  return c!;
};
