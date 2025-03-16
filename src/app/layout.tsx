import type { Metadata } from "next";
import { EB_Garamond } from 'next/font/google';
import "./globals.css";

const dancingScript = EB_Garamond({ subsets: ['latin'], weight: '400' });


export const metadata: Metadata = {
  title: "Roxxanar",
  description: "Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dancingScript.className}
      >
        {children}
      </body>
    </html>
  );
}
