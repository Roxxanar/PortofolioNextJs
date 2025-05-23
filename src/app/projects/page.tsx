"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

import Gallery from "../components/Gallery"; // Adjust the path as needed
import Screen from "../components/Screen"; // Adjust the path as needed
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function Home() {

 const [shouldRender, setShouldRender] = useState(true);
  
  useEffect(() => {
    // Check the width once mounted and set state accordingly
    const checkWidth = () => {
      setShouldRender(window.innerWidth < 1200);
    };
    
    // Initial check
    checkWidth();
    
    // Set up listener for resize events
    window.addEventListener('resize', checkWidth);
    
    // Clean up
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

 

  const listRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 600; // Ajustează valoarea după necesități
    }
  };

  const handleNext = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 600; // Ajustează valoarea după necesități
    }
  };
  
  


  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.noUnderline}>
          <p>Home</p>
        </Link>
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        <Link href="/projects" className={styles.noUnderline}>
          Projects
        </Link>
      </div>
      <div  className={styles.container2}>
        <div className={styles.laptop}>
          <Image
            aria-hidden
            src="/tastaturatr.png"
            alt="Globe icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {shouldRender && (
  <button onClick={handlePrev} id="prev-btn" className={styles.prev_btn}>
    <svg viewBox="0 0 512 512" width="20" aria-label="Previous">
      <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
    </svg>
  </button>
)}
        {shouldRender ? <Gallery /> : <Screen />}
        {shouldRender && (
  <button onClick={handleNext} id="next-btn" className={styles.next_btn}>
    <svg viewBox="0 0 512 512" width="20" aria-label="Next">
      <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
    </svg>
  </button>
)}
      </div>

    


      <div className={styles.background}></div>
      <div  className={styles.container3}>
        <div className={styles.laptop}>
          <Image
            aria-hidden
            src="/tastaturatr.png"
            alt="Globe icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {shouldRender ? <Gallery /> : <Screen />}
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
