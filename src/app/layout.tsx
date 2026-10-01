import type { Metadata } from "next";
import { Chakra_Petch, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Reading-friendly body font for TECH.EXE article pages. Applied via the
// `.xp-prose` / `font-source-sans` utilities.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "TECH.EXE — Le média tech qui tourne en fenêtre",
  description:
    "TECH.EXE, le média tech nostalgique inspiré de Windows XP : intelligence artificielle, robotique, startups, hardware, cybersécurité et XR/VR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${chakraPetch.variable} ${sourceSans.variable} antialiased font-chakra-petch`}
      >
        {children}
      </body>
    </html>
  );
}
