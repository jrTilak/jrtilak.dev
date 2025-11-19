import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

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
          <div className="">
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
        <GoogleAnalytics gaId="G-8J0X78E034" />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: "Tilak Thapa | Web/App Developer",
    template: "%s | Tilak Thapa",
  },
  description: `Curiosity-driven full-stack web/app developer, constantly pushing the boundaries of
          what's possible to create innovative and seamless digital solutions.`,
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
    title: `Tilak Thapa | Web/App Developer`,
    description: `Curiosity-driven full-stack web/app developer, constantly pushing the boundaries of
          what's possible to create innovative and seamless digital solutions.`,
    images: [
      {
        url: "/preview.png",
      },
    ],
  },
};
