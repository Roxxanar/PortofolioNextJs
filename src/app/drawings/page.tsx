"use client";

import Image from "next/image";
import styles from "./drawings.module.css";
import Link from "next/link";

import React, { useEffect } from "react";

import { stalemate } from "../fonts"; // adjust path if needed
import { squarePeg } from "../fonts";
import { setupPulsingGrid } from "../pulsing-grid.js";

export default function Drawings() {
 

  useEffect(() => {
    setupPulsingGrid();
  }, []);

  

  

  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundsvg}
        style={{ backgroundImage: "url('/low-poly-grid-haikei (1).svg')" }}
      ></div>

      <div className={styles.fundal}>

      <div className={styles.container_card}>
  <div className={styles.card}>
    <div className={styles.front}>
      <Image className={styles.image}
        aria-hidden
        src="/Sfera2partiGata2.png"
        alt="Globe icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>

    <div className={`${styles.back} ${squarePeg.className}`}>
      <p className={styles.backHeading}>1. Landscape Drawing</p>
      <p className={styles.backHeading2}>Made in Photoshop with Wacom tablet and inspired from a real painting I found</p>
    </div>
  </div>
</div>



<div className={styles.container_card}>
  <div className={styles.card}>
    <div className={styles.front}>
      <Image className={styles.image}
        aria-hidden
        src="/SferaCuBraziGatav2.png"
        alt="Globe icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>

    <div className={`${styles.back} ${squarePeg.className}`}>
      <p className={styles.backHeading}>2. Landscape Drawing</p>
      <p className={styles.backHeading2}>Made in Photoshop with Wacom tablet and inspired from a real painting I found</p>
    </div>
  </div>
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
          <span className={styles.effect}><p>Home</p></span>
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

      <div className={styles.fundalsus}>
       
      </div>

      

      <footer className={styles.footer}></footer>
    </div>
  );
}
