import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import GridBackground from "@/components/grid-background";
import WelcomeIntro from "@/components/welcome-intro";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  title: "Rizki Krisna Santika | Rikansaa",
  description: "Portofolio pribadi Rizki Krisna Santika, siswa TJKT SMK PGRI Subang"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.variable + " " + spaceGrotesk.variable + " font-body text-neutral-900 dark:text-neutral-100"}>
        <ThemeProvider>
          <WelcomeIntro />
          <GridBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}