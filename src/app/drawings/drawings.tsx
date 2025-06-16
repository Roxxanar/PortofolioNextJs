"use client";

/*import Image from "next/image";*/
import styles from "./drawings.module.css";
import Link from "next/link";

import React, { useEffect } from "react";

import { stalemate } from "../fonts"; // adjust path if needed
/*import { squarePeg } from "../fonts";*/ 
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
