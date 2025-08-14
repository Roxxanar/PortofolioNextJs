import { Mate_SC } from "next/font/google";
import { Rock_Salt } from 'next/font/google';
import { Stalemate } from 'next/font/google';
import { Ysabeau_SC } from 'next/font/google';
import { Tangerine } from 'next/font/google';
import { Square_Peg } from 'next/font/google';
import { Ingrid_Darling } from "next/font/google";


export const mateSC = Mate_SC({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  
});

export const rockSalt = Rock_Salt({
    weight: '400', // Rock Salt are doar 400
    subsets: ['latin'],
  });


  export const stalemate = Stalemate({
    subsets: ['latin'],
    weight: '400', // only 400 is available for Stalemate
  });

  export const ysabeauSC = Ysabeau_SC({
    subsets: ['latin'],
    weight: ['400'], // You can add other weights like '300', '500', etc.
    display: 'swap',
  });

  export const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'], // Use the weights you need
    display: 'swap',
  });
  
  export const squarePeg = Square_Peg({
    subsets: ['latin'],
    weight: '400', // Only one weight available for Square Peg
  });
  
  export const ingridDarling = Ingrid_Darling({
  weight: "400", // only one available
  subsets: ["latin"], // or ["latin-ext"] if needed
  display: "swap",
});
