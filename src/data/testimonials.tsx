import Link from "next/link";

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
    name: "Hemanta Bhandari",
    content: (
      <>
        I've had the pleasure of working with Tilak on a private project, and I
        can't say enough good things about him. His ability to take Figma
        designs and turn them into beautifully functional code is truly
        something special. It's like watching an artist at work.
        <br />
        Tilak pays incredible attention to detail and always strives for the
        highest quality in his work. What really sets him apart is his
        creativity. He doesn't just follow the design; he brings it to life in a
        way that feels seamless and intuitive for users.
        <br />
        Beyond his technical skills, Tilak is a fantastic collaborator. He's
        always open to feedback, quick to solve problems, and great at
        communicating with the team. Working with him has been a fantastic
        experience, and any team would be lucky to have him.
        <br />
        If you need someone who can bridge the gap between design and code with
        a touch of artistry, Tilak is your go-to person.
      </>
    ),
    image: "/images/testimonials/hemanta-bhandari.png",
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
          className="link"
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
