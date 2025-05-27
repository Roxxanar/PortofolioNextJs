import type { Metadata } from "next";
import { EB_Garamond } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

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
        <Script src="/fairy-dust-cursor.js" strategy="lazyOnload" />
      <div className="container-cursor">
        
      </div>
        {children}
      </body>
    </html>
  );
}
