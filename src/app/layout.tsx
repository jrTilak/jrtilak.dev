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
          <div className="fixed opacity-70 inset-0 z-[-1] bg-white dark:bg-gray-950">
            <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    id="ripple-gradient"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
                  </radialGradient>
                </defs>
                {/* Center ripple */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="10%"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth={1}
                  className="dark:stroke-blue-500/20"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="20%"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth={1}
                  className="dark:stroke-purple-500/20"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="30%"
                  fill="none"
                  stroke="rgba(236, 72, 153, 0.3)"
                  strokeWidth={1}
                  className="dark:stroke-pink-500/20"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth={1}
                  className="dark:stroke-blue-500/20"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth={1}
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth={1}
                  className="dark:stroke-purple-500/20"
                />
                {/* Top-left ripple */}
                <circle
                  cx="20%"
                  cy="20%"
                  r="5%"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="0.5"
                  className="dark:stroke-blue-500/15"
                />
                <circle
                  cx="20%"
                  cy="20%"
                  r="10%"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.2)"
                  strokeWidth="0.5"
                  className="dark:stroke-purple-500/15"
                />
                <circle
                  cx="20%"
                  cy="20%"
                  r="15%"
                  fill="none"
                  stroke="rgba(236, 72, 153, 0.2)"
                  strokeWidth="0.5"
                  className="dark:stroke-pink-500/15"
                />
                {/* Bottom-right ripple */}
                <circle
                  cx="80%"
                  cy="80%"
                  r="5%"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="0.5"
                  className="dark:stroke-blue-500/15"
                />
                <circle
                  cx="80%"
                  cy="80%"
                  r="10%"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.2)"
                  strokeWidth="0.5"
                  className="dark:stroke-purple-500/15"
                />
                <circle
                  cx="80%"
                  cy="80%"
                  r="15%"
                  fill="none"
                  stroke="rgba(236, 72, 153, 0.2)"
                  strokeWidth={0.5}
                  className="dark:stroke-pink-500/15"
                />
              </svg>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]"></div>
          </div>

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
