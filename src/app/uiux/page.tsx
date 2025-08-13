"use client";

/*import Image from "next/image";*/
import { useRef } from "react";
import styles from "./uiux.module.css";
import Link from "next/link";
/*import Image from 'next/image';*/

import React, { useEffect } from "react";
/*import { mateSC } from "../fonts"; // Adjust path as needed*/
import { stalemate } from "../fonts"; // adjust path if needed
import { setupPulsingGrid } from "../pulsing-grid.js";

export default function Projects() {
  const fundalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustHeights = () => {
      if (fundalRef.current && containerRef.current && backgroundRef.current) {
        const fundalHeight = fundalRef.current.offsetHeight;
        const totalHeight = fundalHeight + 300;

        containerRef.current.style.height = `${totalHeight}px`;
        backgroundRef.current.style.height = `${totalHeight}px`;
      }
    };

    adjustHeights(); // run on mount
    window.addEventListener("resize", adjustHeights); // re-run on resize

    return () => window.removeEventListener("resize", adjustHeights);
  }, []);

  useEffect(() => {
    setupPulsingGrid();
  }, []);

  return (
    <div
      className={`${styles.container} ${stalemate.className}`}
      ref={containerRef}
    >
      <div
        className={styles.backgroundsvg}
        ref={backgroundRef}
        style={{ backgroundImage: "url('/low-poly-grid-haikei (1).svg')" }}
      ></div>


      <div className={styles.fundal} ref={fundalRef}>



        <div className={styles.card_container}>
          
          <section className={styles.hoversection}>
            
            <Link href="/news">
               <div className={styles.main}>
                <div className={`${styles.card} ${styles.c1}`}></div>
                <div className={`${styles.card} ${styles.c2}`}></div>
                <div className={`${styles.card} ${styles.c3}`}></div>
                <div className={`${styles.card} ${styles.c4}`}> News Website </div>
              </div>
            </Link>
          </section>
        </div>

        <div className={styles.card_container2}>
          <div className={styles.hovertext}> <p>Hover on the cards</p> </div>
          <section className={styles.hoversection}>
            <Link href="/coffepink">
              <div className={styles.main}>
                <div className={`${styles.card} ${styles.c5}`}></div>
                <div className={`${styles.card} ${styles.c6}`}></div>
                <div className={`${styles.card} ${styles.c7}`}></div>
                <div className={`${styles.card} ${styles.c8}`}> Coffe Website </div>
              </div>
            </Link>
          </section>
        </div>
      </div>

      <div className={styles.navbar}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#247DAE",
            fontSize: "1.6rem",
          }}
          className={stalemate.className}
        >
          <span className={styles.effect}>
            <p>Home</p>
          </span>
        </Link>
        <div id="pulsing-grid"></div>

        <Link
          href="/projects"
          style={{
            textDecoration: "none",
            color: "#DA1818",
            fontSize: "1.6rem",
          }}
          className={stalemate.className}
        >
          <span className={styles.effect}>Projects</span>
        </Link>
      </div>

      <div className={styles.background}></div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
