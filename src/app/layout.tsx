import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

import "./globals.css";
import TopLoader from "@/components/base/top-loader";
import { ThemeProvider } from "@/providers/theme-providers";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scrollbar">
        <ThemeProvider>
          <div>
            <Header />
            <main className="mt-28">{children}</main>
            <Footer />
          </div>
          <TopLoader />
          <Toaster
            toastOptions={{
              duration: 2000,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Tilak Thapa | Full Stack Developer",
    template: "%s | Tilak Thapa",
  },
  description: `Curiosity-driven developer with 2.4+ years of expertise building robust web apps using the MERN stack and Next.js, paired with hands-on experience in Docker and cloud deployment on AWS.`,
  authors: [
    {
      name: "Tilak Thapa",
    },
  ],
  category: "Personal Website",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  ],
  keywords: [
    "Tilak Thapa",
    "Thapa Tilak",
    "Tilak",
    "Thapa",
    "jrTilak",
    "thapatilak",
    "thapatilak.com.np",
    "jrtilak.dev",
    "programmer",
    "developer",
    "web developer",
    "full stack developer",
    "full-stack developer",
    "fullstack developer",
    "react developer",
    "next.js developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Tilak Thapa | Full Stack Developer`,
    description: `Curiosity-driven developer with 2.4+ years of expertise building robust web apps using the MERN stack and Next.js, paired with hands-on experience in Docker and cloud deployment on AWS.`,
    images: [
      {
        url: "/preview.png",
      },
    ],
  },
};
