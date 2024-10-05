import ThemeProvider from "@/components/themes/theme-provider";
import TopLoader from "@/components/loaders/top-loader";
import { Toaster } from "react-hot-toast";
import RootLayout from "@/components/layouts/root";

import "./globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <RootLayout>{children}</RootLayout>
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
