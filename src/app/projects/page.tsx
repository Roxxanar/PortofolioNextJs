"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

import Gallery from "../components/Gallery"; // Adjust the path as needed
import Screen from "../components/Screen"; // Adjust the path as needed
import React, { useState, useEffect } from 'react';

export default function Home() {

 const [shouldRender, setShouldRender] = useState(true);
  
  useEffect(() => {
    // Check the width once mounted and set state accordingly
    const checkWidth = () => {
      setShouldRender(window.innerWidth < 1000);
    };
    
    // Initial check
    checkWidth();
    
    // Set up listener for resize events
    window.addEventListener('resize', checkWidth);
    
    // Clean up
    return () => window.removeEventListener('resize', checkWidth);
  }, []);



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

        {shouldRender ? <Gallery /> : <Screen />}

      </div>

    


      <div className={styles.background}></div>
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
        {shouldRender ? <Gallery /> : <Screen />}
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
