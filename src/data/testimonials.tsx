import Link from "next/link";
import { IMAGES } from "./images";

export type Testimonial = {
  name: string;
  image?: string;
  platform: "linkedin";
  content: React.ReactNode;
  position: string;
  contactUrl: string;
  inShort: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Premanand Chowdhury ",
    content: (
      <>
        Tilak has been an invaluable asset to our team. He consistently demonstrated proficiency in developing web applications from scratch to production. His ability to lead the team independently, assist fellow members, and meet tight deadlines has been impressive. When Tilak is part of the team, we can always rely on him to accelerate the development process.
        <br />
        In addition to his technical expertise, Tilak proactively offers suggestions to improve tasks and takes ownership of completing them as much as possible. He consistently revisits his work to optimize and refactor it, ensuring it aligns with best practices and enhances overall code quality.
        <br />
        Tilak, I wish you continued success in all your future endeavors. Strive for the top 1% in everything you do.
        <br />
        All the best👍
      </>
    ),
    image: IMAGES.testimonials["premanand"],
    platform: "linkedin",
    position: "Senior Developer",
    contactUrl: "https://www.linkedin.com/in/premanand-chowdhury",
    inShort:
      "Tilak has been an invaluable asset to our team. He consistently demonstrated proficiency in developing web applications from scratch to production. His ability to lead the team independently, assist fellow members, and meet tight deadlines has been impressive. When Tilak is part of the team, we can always rely on him to accelerate the development process.",
  },
  {
    name: "Sandip Sapkota",
    content: (
      <>
        Tilak Thapa is a skilled full-stack developer who I had the pleasure of
        working with on the ACES web project. His expertise in both frontend
        technologies (Next.js, Tailwind CSS) and backend development (API
        design, database interactions) was invaluable in building a robust and
        scalable platform. Tilak&apos;s ability to see the big picture and
        contribute effectively to all aspects of the project made him a valuable
        asset to the team. I highly recommend him for any full-stack development
        role.
      </>
    ),
    image: IMAGES.testimonials["sandip-sapkota"],
    platform: "linkedin",
    position: "Co-Developer / Work Associate",
    contactUrl: "https://www.linkedin.com/in/sandip-sapkota",
    inShort:
      "Tilak Thapa is a skilled full-stack developer who I had the pleasure of working with on the ACES web project. His expertise in both frontend technologies (Next.js, Tailwind CSS) and backend development (API design, database interactions) was invaluable in building a robust and scalable platform. Tilak's ability to see the big picture and contribute effectively to all aspects of the project made him a valuable asset to the team. I highly recommend him for any full-stack development role.",
  },
  {
    name: "Sandesh Poudel",
    content: (
      <>
        Tilak is an outstanding web developer with expertise in both front-end
        and back-end development, particularly with the MERN stack (MongoDB,
        Express.js, React.js, and Node.js). He consistently delivers clean,
        scalable code and has a keen eye for creating user-friendly interfaces.
        His curiosity drives him to explore new technologies, and his
        adaptability allows him to quickly adjust to evolving project needs.
        Tilak&apos;s collaborative approach, problem-solving skills, and
        attention to detail make him a valuable asset to any team. I highly
        recommend him for any web development role.
      </>
    ),
    image: IMAGES.testimonials["sandesh-poudel"],
    platform: "linkedin",
    position: "Cybersecurity Associate",
    contactUrl: "https://www.linkedin.com/in/sandeshpoudel007",
    inShort:
      "Tilak is an outstanding web developer with expertise in both front-end and back-end development, particularly with the MERN stack (MongoDB, Express.js, React.js, and Node.js). He consistently delivers clean, scalable code and has a keen eye for creating user-friendly interfaces. His curiosity drives him to explore new technologies, and his adaptability allows him to quickly adjust to evolving project needs. Tilak's collaborative approach, problem-solving skills, and attention to detail make him a valuable asset to any team. I highly recommend him for any web development role.!",
  },
  {
    name: "Rahul Sutradhar",
    content: (
      <>
        Tilak is a highly skilled React developer who has been an incredible
        colleague to work with on NeonShark. His deep knowledge, collaborative
        spirit, and consistent support have been invaluable to me, always
        helping solve complex challenges with ease. Best of luck Tilak!!
      </>
    ),
    image: IMAGES.testimonials["rahul-sutradhar"],
    platform: "linkedin",
    position: "Work Associate",
    contactUrl: "https://www.linkedin.com/in/rahul-sutradhar-a99749202",
    inShort:
      "Tilak is a highly skilled React developer who has been an incredible colleague to work with on NeonShark. His deep knowledge, collaborative spirit, and consistent support have been invaluable to me, always helping solve complex challenges with ease. Best of luck Tilak!!",
  },
  {
    name: "Hemanta Bhandari",
    content: (
      <>
        I&apos;ve had the pleasure of working with Tilak on a private project,
        and I can&apos;t say enough good things about him. His ability to take
        Figma designs and turn them into beautifully functional code is truly
        something special. It&apos;s like watching an artist at work.
        <br />
        Tilak pays incredible attention to detail and always strives for the
        highest quality in his work. What really sets him apart is his
        creativity. He doesn&apos;t just follow the design; he brings it to life
        in a way that feels seamless and intuitive for users.
        <br />
        Beyond his technical skills, Tilak is a fantastic collaborator.
        He&apos;s always open to feedback, quick to solve problems, and great at
        communicating with the team. Working with him has been a fantastic
        experience, and any team would be lucky to have him.
        <br />
        If you need someone who can bridge the gap between design and code with
        a touch of artistry, Tilak is your go-to person.
      </>
    ),
    image: IMAGES.testimonials["hemanta-bhandari"],
    platform: "linkedin",
    position: "Freelance Associate",
    contactUrl: "https://www.linkedin.com/in/hems-bhandari/",
    inShort:
      "I've had the pleasure of working with Tilak on a private project, and I can't say enough good things about him. His ability to take Figma designs and turn  something special. It's like watching an artist at work.",
  },
  {
    name: "Mustafa Can Güzlük",
    content: (
      <>
        He is really a good person, he responds very quickly and he really
        helped me a lot, the projects he has done are very nice, especially the{" "}
        <Link
          href="https://bumblebee.thapatilak.com.np/"
          className="text-primary underline"
          target="_blank"
        >
          Bumblebee - AI Powered Chatbot project.
        </Link>
      </>
    ),
    platform: "linkedin",
    position: "Freelance Associate",
    contactUrl: "https://www.linkedin.com/in/mustafa-can-guzluk/",
    inShort:
      "He is really a good person, he responds very quickly and he really helped me a lot, the projects he has done are very nice, especially the Bumblebee - AI Powered Chatbot project.",
  },
];
