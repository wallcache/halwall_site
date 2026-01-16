import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeAwareDotGrid } from "@/components/ThemeAwareDotGrid";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://halwall.me"),
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
  icons: {
    icon: [
      { url: "/assets/images/logos/wallcache-mono-alt.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/images/logos/wallcache-mono-alt.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Hal Wall | Somewhere between Databricks and Tolstoy",
    description:
      "Data Engineer at Chubb Insurance. Photographer and graphic designer. Building data products with Azure, Databricks, and PySpark.",
    url: "https://halwall.me",
    siteName: "Hal Wall",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/images/social/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hal Wall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hal Wall | Somewhere between Databricks and Tolstoy",
    description:
      "Data Engineer at Chubb Insurance. Photographer and graphic designer. Building data products with Azure, Databricks, and PySpark.",
    images: ["/assets/images/social/og-image.png"],
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
