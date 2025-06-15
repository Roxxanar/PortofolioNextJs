"use client";

import Image from "next/image";
import styles from "./programming.module.css";
import Link from "next/link";

import React, { useEffect } from "react";

import { stalemate } from "../fonts"; // adjust path if needed
import { squarePeg } from "../fonts"; 
import { setupPulsingGrid } from "../pulsing-grid.js";

export default function Home() {
 

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

<div className={styles.site_container}>

<div className={styles.info_container}>

  <div className={`${styles.project_container} ${squarePeg.className}`}>
    <div className={styles.p_name}>1. Portofolio Website</div>
    <div className={styles.p_socials}>
      <Image
                        aria-hidden
                        src="/github (1).png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
    </div>
  </div>
  <div className={`${styles.description_container} ${squarePeg.className}`}>
  <div className={styles.p_description}>
    This website, made with Next.js framework. Design made by me with some components and animations inspired from codepen.io and uiverse.io
  </div>
  </div>
</div>

<div className={styles.percent_container}>

<div className={styles.percent_container2}>
      <div className={styles.skillBox}>
        <span className={styles.title}>CSS</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerhtml} ${styles.first}`}>
            <span className={styles.tooltip}>58.8%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>TypeScript</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerscss} ${styles.second}`}>
            <span className={styles.tooltip}>29.3%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>JavaScript</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerbootstrap} ${styles.third}`}>
            <span className={styles.tooltip}>14.9%</span>
          </span>
        </div>
      </div>
    </div>
</div>


</div>


<div className={styles.loader}></div>

      








      <div className={styles.site_container}>

<div className={styles.info_container}>

  <div className={`${styles.project_container} ${squarePeg.className}`}>
    <div className={styles.p_name}>2. Clothes Website Frontend</div>
    <div className={styles.p_socials}>
      <Image
                        aria-hidden
                        src="/github (1).png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
    </div>
  </div>
  <div className={`${styles.description_container} ${squarePeg.className}`}>
  <div className={styles.p_description}>
    This website, made with Next.js framework. Design made by me with some components and animations inspired from codepen.io and uiverse.io
  </div>
  </div>
</div>

<div className={styles.percent_container}>

<div className={styles.percent_container2}>
      <div className={styles.skillBox}>
        <span className={styles.title}>HTML</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerhtml} ${styles.first}`}>
            <span className={styles.tooltip}>49.1%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>SCSS</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerscss} ${styles.second}`}>
            <span className={styles.tooltip}>32.3%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>TypeScript</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerbootstrap} ${styles.third}`}>
            <span className={styles.tooltip}>32.3%</span>
          </span>
        </div>
      </div>
    </div>
</div>


</div>


<div className={styles.site_container}>

<div className={styles.info_container}>

  <div className={`${styles.project_container} ${squarePeg.className}`}>
    <div className={styles.p_name}>3. Clothes Website Backend</div>
    <div className={styles.p_socials}>
      <Image
                        aria-hidden
                        src="/github (1).png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
    </div>
  </div>
  <div className={`${styles.description_container} ${squarePeg.className}`}>
  <div className={styles.p_description}>
    This website, made with Next.js framework. Design made by me with some components and animations inspired from codepen.io and uiverse.io
  </div>
  </div>
</div>

<div className={styles.percent_container}>

<div className={styles.percent_container2}>
      <div className={styles.skillBox}>
        <span className={styles.title}>JavaScript</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerhtml} ${styles.first}`}>
            <span className={styles.tooltip}>49.1%</span>
          </span>
        </div>
      </div>

      

     
    </div>
</div>


</div>




<div className={styles.loader}></div>




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
