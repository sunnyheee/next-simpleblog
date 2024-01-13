import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sunnyheee blog",
    template: "Sunnyheee blog | %s",
  },
  description: "FronendEngineer Sunnyheee blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
