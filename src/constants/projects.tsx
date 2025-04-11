import { ProjectMetaData } from "@/types/project.types";
import { IMAGES } from "./images";

export const PROJECTS: ProjectMetaData[] = [
  {
    title: "JuJu - Your Story, Your Stage",
    categories: ["web", "mobile"],
    publishedAt: "Dec, 2024",
    summary:
      "Juju is a mobile app for short-form content that empowers users to share moments, express creativity, and connect with a vibrant community. As a backend developer, I built the server architecture, developed internal tools, implemented a content moderation system, and created a recommendation engine to deliver personalized user experiences.",
    image: IMAGES.projects["juju"],
    techs: ["React.js", "Express.js", "MongoDb"],
    type: "professional",
    urls: {
      liveUrl: "https://jujuconnect.com/",
      otherUrls: [
        {
          image: "https://www.svgrepo.com/show/485039/google-play-style.svg",
          url: "https://play.google.com/store/apps/details?id=com.unclesamtech.jujuyr&pcampaignid=web_share&pli=1",
        },
        {
          image: "https://www.svgrepo.com/show/447868/apple-store.svg",
          url: "https://apps.apple.com/us/app/juju-your-story-your-stage/id6741166084",
        },
      ],
    },
  },
  {
    title: "Vivid Tab: A new tab, a new vibe.",
    categories: ["extension", "web"],
    publishedAt: "Jan, 2025",
    summary:
      "Transform your new tab into a vibrant, productive space. Vivid Tab lets you personalize your browsing experience with bookmarks, weather updates, to-do lists, and more — all in one clean, customizable dashboard.",
    image: IMAGES.projects["vivid-tab"],
    techs: ["Plasmo", "React.js"],
    type: "personal",
    urls: {
      liveUrl: "https://vividtab.jrtilak.dev/",
      sourceUrl: "https://github.com/jrtilak/vivid-tab",
      otherUrls: [
        {
          image: "https://www.svgrepo.com/show/378781/chrome.svg",
          url: "https://chromewebstore.google.com/detail/vivid-tab/hchlkclbagoklpnijoadpghhcjpeoeim",
        },
      ],
    },
  },
  {
    title: "Now Digital Easy (NDE)",
    categories: ["web"],
    publishedAt: "May, 2024",
    summary:
      "A one-stop platform helping 12,000+ global businesses go digital with tools like CRM, marketing automation, real-time tracking, and business emails. As a frontend developer, I built responsive UI components and integrated REST APIs across core modules to ensure seamless user experience and data flow.",
    image: IMAGES.projects["nde"],
    techs: ["Next.js"],
    type: "professional",
    urls: {
      liveUrl: "https://www.nowdigitaleasy.com/",
    },
  },
  {
    title: "Receipt Vault - Smart Expense Management Platform",
    categories: ["web"],
    publishedAt: "July, 2024",
    summary:
      "Receipt Vault streamlines receipt management for small businesses by allowing users to upload, categorize, and track their expenses effortlessly. Leveraging AI-driven categorization and Optical Character Recognition (OCR) technology, the platform automatically scans and sorts receipts, ensuring accuracy and efficiency. As a full-stack developer, I was responsible for both the frontend and backend, integrating seamless upload functionality, AI-powered categorization, and real-time data processing to enhance the user experience and optimize expense tracking.",
    image: IMAGES.projects["rv"],
    techs: ["Next.js", "MongoDb"],
    type: "professional",
    urls: {
      liveUrl: "https://www.receiptvault.co/",
    },
  },
  {
    title: "Grocery Store Admin Panel",
    categories: ["web"],
    publishedAt: "April, 2024",
    summary:
      "A comprehensive admin panel for managing all aspects of a grocery store app. It includes features like product CRUD, order and delivery tracking, user management, discount and coupon management, and more. The panel provides a seamless interface for admin tasks, allowing efficient monitoring and control over inventory, sales, and customer interactions. As a developer, I worked on building and integrating these core functionalities to ensure a smooth and intuitive experience for the admin while enhancing operational efficiency.",
    image: IMAGES.projects["grocery-admin-panel"],
    techs: ["React.js"],
    type: "professional",
  },
  {
    title: "Viral Video App - Create Viral Videos Instantly",
    categories: ["web"],
    publishedAt: "March, 2025",
    summary:
      "Turn your ideas into engaging, high-impact videos in minutes. Powered by AI, our platform generates scroll-stopping content that boosts engagement and helps grow your audience quickly.",
    image: IMAGES.projects["viral-video-app"],
    techs: ["Next.js"],
    type: "professional",
    urls: {
      liveUrl: "https://viral-video-app.vercel.app/",
    },
  },
  {
    title: "Techfest Web - ACES",
    categories: ["web"],
    publishedAt: "Nov, 2024",
    summary:
      "Get ready for v7.0 - where tech enthusiasts compete, create, and connect in events like Hackathons, UI/UX Showdowns, and more. Experience the future of innovation!",
    image: IMAGES.projects["techfest"],
    techs: ["Next.js", "Three.js", "TailwindCSS"],
    type: "professional",
    urls: {
      liveUrl: "https://techfest.aceserc.org/",
    },
  },
  {
    title: "ACES Web - IOE",
    categories: ["web"],
    publishedAt: "May, 2024",
    summary:
      "ACES web is a platform for the Association of Computer Engineering Students (ACES) of the IOE, Purwanchal Campus, Dharan. It is a full stack web application with client-side, admin-panel and apis. It is built using Next.js, Tailwind CSS, and Vercel.",
    image: IMAGES.projects["aces-website"],
    techs: ["Next.js", "TailwindCSS"],
    type: "professional",
    urls: {
      liveUrl: "https://www.aceserc.org/",
    },
  },
  {
    title: "Lazykit - Drop the Excess, Keep the Impact!",
    categories: ["web", "package/lib"],
    publishedAt: "March, 2024",
    summary:
      "Refine your JavaScript, React, and TypeScript workflows with LazyKit. A concentrated toolkit of powerful snippets—no excess, all essence.",
    image: IMAGES.projects["lazykit"],
    techs: ["Next.js", "Vitest", "TailwindCSS", "Markdown"],
    type: "personal",
    urls: {
      liveUrl: "https://lazykit.thapatilak.com.np/",
      sourceUrl: "https://github.com/jrTilak/lazykit",
    },
  },
  {
    title: "ApexUI - The Ultimate UI Toolkit",
    categories: ["web", "package/lib"],
    publishedAt: "March, 2024",
    summary:
      "ApexUI offers fully customizable templates for building modern websites and apps with ease. As a backend developer, I integrated Stripe for payments, implemented secure authentication, and developed a smooth purchase flow to ensure a seamless user experience.",
    image: IMAGES.projects["apex-ui"],
    techs: ["Next.js", "TailwindCSS", "Markdown"],
    type: "professional",
    urls: {
      liveUrl: "https://www.apexui.dev/",
    },
  },
  {
    title: "Javasports - E-commerce Platform",
    categories: ["web"],
    publishedAt: "February, 2024",
    summary: (
      <>
        Javasports is an e-commerce platform that offers a wide range of sports goods and equipment.
        The platform provides a seamless shopping experience with a user-friendly interface and
        secure payment options.
        <br />
        It was a organizational project where I was responsible for the front-end development of the
        website with my team, where I was involved in the completion of more than 70% of the
        front-end development with an admin panel and api integration.
      </>
    ),
    image: IMAGES.projects["java-sports"],
    techs: ["React.js", "TailwindCSS"],
    type: "professional",
    urls: {
      liveUrl: "https://javasports.in/",
    },
  },
  {
    title: "Bumblebee 2.0 - AI Powered Chatbot",
    categories: ["web", "ai"],
    publishedAt: "Jan, 2024",
    summary:
      "Bumblebee is an AI powered chatbot that can help you with your queries. It is a web based application that can be accessed from anywhere. It is built using MERN Stack and based on Google's gemini AI model with the profile of the transformer character Bumblebee.",
    image: IMAGES.projects.bumblebee,
    techs: ["Express.js", "MongoDb", "React.js", "TailwindCSS"],
    type: "personal",
    urls: {
      liveUrl: "https://bumblebee.thapatilak.com.np/",
      sourceUrl: "https://github.com/jrTilak/bumbleBee",
    },
  },
];
