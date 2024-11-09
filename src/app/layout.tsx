import ThemeProvider from "@/components/themes/theme-provider";
import TopLoader from "@/components/loaders/top-loader";
import { Toaster } from "react-hot-toast";
import RootLayout from "@/components/layouts/root";
import { Metadata } from "next";

import "./globals.css";
import { PERSONAL_DETAILS } from "@/data/personal-details";
import GA from "@/components/analytics/ga";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scrollbar">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <RootLayout>{children}</RootLayout>
          <TopLoader />
          <Toaster
            toastOptions={{
              duration: 2000,
            }}
          />
        </ThemeProvider>
        <GA />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: `${PERSONAL_DETAILS.name} | ${PERSONAL_DETAILS.postTitle}`,
  description: `${PERSONAL_DETAILS.aboutMe.inShort}`,
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
    title: `${PERSONAL_DETAILS.name} | ${PERSONAL_DETAILS.postTitle}`,
    description: `${PERSONAL_DETAILS.aboutMe.inShort}`,
    images: [
      {
        url: "/preview.png",
      },
    ],
  },
};
