import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. S.U. Braly Scholarship",
  description: "The Braly Scholarship Fundraiser aims to raise essential funds to support scholarships for aspiring and current healthcare workers.",
  openGraph: {
    title: "Dr. S.U. Braly Scholarship",
    description: "The Braly Scholarship Fundraiser aims to raise essential funds to support scholarships for aspiring and current healthcare workers.",
    images: ["/ogImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${openSans.variable} antialiased mx-auto bg-light-gray`}
      >
        <nav className="flex flex-row justify-between bg-nav-bg p-4 w-full">
          <div className="max-w-[var(--content-max-width)] mx-auto w-full flex flex-row justify-between py-4 px-4">
            <Link href="/">
              <h1 className="text-2xl font-bold text-accent-blue">
                Dr. S.U. Braly Scholarship
              </h1>
            </Link>
            <div className="flex flex-row gap-4">
              <Link
                href="/about-dr-braly"
                className="text-accent-blue font-bold text-lg"
              >
                About Dr. Braly
              </Link>
              <Link
                href="/about"
                className="text-accent-blue font-bold text-lg"
              >
                About Us
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-white w-full py-4">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://wellstar.academicworks.com/donors/12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wellstar Foundation
          </a>
        </footer>
      </body>
    </html>
  );
}
