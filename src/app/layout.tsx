import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scaffolding Services in Newark, NJ | Hexagon Scaffolding Inc",
  description: "Reliable scaffolding services in Newark, NJ. We offer scaffold rental, swing stage, system scaffolds & safety gear for residential and commercial projects.",
  alternates: {
    canonical: "https://hexagonscaffolding.com/",
  },
  other: {
    "msvalidate.01": "6084F6DD96F9E430DA624BCAAD47C785",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Google tag (gtag.js) - original */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-80L19ZKQ49"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-80L19ZKQ49');
          `}
        </Script>
        {/* Google tag (gtag.js) - G-KQLGJYXDN6 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KQLGJYXDN6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-g2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQLGJYXDN6');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
