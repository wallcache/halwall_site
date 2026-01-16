import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeAwareDotGrid } from "@/components/ThemeAwareDotGrid";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Hal Wall | Data Engineer",
  description:
    "Data Engineer at Chubb Insurance. Building secure, scalable data products with Azure, Databricks, and PySpark. Physics graduate from Imperial College London.",
  keywords: [
    "Data Engineer",
    "Hal Wall",
    "Azure",
    "Databricks",
    "PySpark",
    "London",
    "Portfolio",
  ],
  authors: [{ name: "Hal Wall" }],
  openGraph: {
    title: "Hal Wall | Data Engineer",
    description:
      "Data Engineer at Chubb Insurance. Building secure, scalable data products.",
    url: "https://halwall.com",
    siteName: "Hal Wall",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hal Wall | Data Engineer",
    description:
      "Data Engineer at Chubb Insurance. Building secure, scalable data products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light-theme">
      <body className="bg-linen leading-relaxed text-blackhole antialiased selection:bg-orange/20 selection:text-blackhole">
        <ThemeProvider>
          <ThemeAwareDotGrid />
          <div className="relative z-10">
            <Navbar />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <a
                href="#content"
                className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-orange via-tangerine to-orange px-4 py-3 text-sm font-bold uppercase tracking-widest text-linen focus-visible:translate-x-0"
              >
                Skip to Content
              </a>
              <div className="lg:flex lg:justify-between lg:gap-4">
                <Header />
                <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                  {children}
                </main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
