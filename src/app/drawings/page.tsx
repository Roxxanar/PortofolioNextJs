"use client";

import Image from "next/image";
import styles from "./drawings.module.css";
import Link from "next/link";

import React, { useEffect } from "react";
import { useState } from "react";

import { stalemate } from "../fonts"; // adjust path if needed
import { squarePeg } from "../fonts";
import { setupPulsingGrid } from "../pulsing-grid.js";

export default function Drawings() {


  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
    
  };

  const handleCardClick2 = () => {
   
    setIsFlipped2((prev) => !prev);
  };


  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };
  
    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

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

      <div className={`${styles.hoveronphoto} ${squarePeg.className}`}>
{isSmallScreen ? <p>Click on the drawings!</p> : <p>Hover on the drawings!</p>}
</div>



      <div className={`${styles.container_card}`} onClick={handleCardClick}>
  <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
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



<div className={`${styles.container_card}`} onClick={handleCardClick2}>
  <div className={`${styles.card} ${isFlipped2 ? styles.flipped2 : ""}`}>
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
