"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./programming.module.css";
import Link from "next/link";

import React, { useEffect } from "react";

import { stalemate } from "../fonts"; // adjust path if needed
import { squarePeg } from "../fonts"; 
import { setupPulsingGrid } from "../pulsing-grid.js";

import Contact from "../components/Contact"; // Adjust the path as needed

export default function Programming() {
 

  useEffect(() => {
    setupPulsingGrid();
  }, []);

  const fundalRef = useRef<HTMLDivElement>(null);
const containerRef = useRef<HTMLDivElement>(null);
const backgroundRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const adjustHeights = () => {
    if (fundalRef.current && containerRef.current && backgroundRef.current) {
      const fundalHeight = fundalRef.current.offsetHeight;
      const totalHeight = fundalHeight + 400;

      containerRef.current.style.height = `${totalHeight}px`;
      backgroundRef.current.style.height = `${totalHeight}px`;
    }
  };

  adjustHeights(); // run on mount
  window.addEventListener("resize", adjustHeights); // re-run on resize

  return () => window.removeEventListener("resize", adjustHeights);
}, []);


  

  return (
    <div className={styles.container} ref={containerRef}>
      <div
        className={styles.backgroundsvg} ref={backgroundRef}
        style={{ backgroundImage: "url('/low-poly-grid-haikei (1).svg')" }}
      ></div>


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


      <div className={styles.fundal} ref={fundalRef}>

<div className={styles.site_container}>

<div className={styles.info_container}>

  <div className={`${styles.project_container} ${squarePeg.className}`}>
    <div className={styles.p_name}>1. Portofolio Website</div>
    <div className={styles.p_socials}>    
      <Link
  href="https://github.com/Roxxanar/PortofolioNextJs">
      <Image
                        aria-hidden
                        src="/github (1).png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
        </Link>

                   
    </div>

   
    
  </div>
  <div className={`${styles.description_container} ${squarePeg.className}`}>
  <div className={styles.p_description}>
    This website, made with Next.js framework. Design made by me with some components and animations inspired from codepen.io and uiverse.io
  </div>
  </div>

  <span className={`${styles.text_tooltip} ${styles.text_tooltip1}`}>
      Github
    </span>  
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

  <div className={`${styles.project_container} ${squarePeg.className} ${styles.cwfrontend}`}>
    <div className={`${styles.p_name}`}>2. Clothes Website Frontend</div>
    <div className={styles.p_socials}>
    <Link
  href="https://github.com/Roxxanar/ClothesWebsiteAngular">
      <Image
                        aria-hidden
                        src="/github (1).png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                      </Link>
    </div>
  </div>
  <div className={`${styles.description_container} ${squarePeg.className}`}>
  <div className={styles.p_description}>
  Frontend of a personal project, a website for clothes shopping made with Angular framework. 
  The project is unfinished but it has some 
  characteristics already implemented, including seach filter, load more button etc.
  </div>
  </div>

  <span className={`${styles.text_tooltip} ${styles.text_tooltip2}`}>
      Github
    </span>  
</div>

<div className={styles.percent_container}>

<div className={styles.percent_container2}>
      <div className={styles.skillBox}>
        <span className={styles.title}>HTML</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerhtml} ${styles.first2}`}>
            <span className={styles.tooltip}>18.6%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>SCSS</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerscss} ${styles.second2}`}>
            <span className={styles.tooltip}>32.3%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>TypeScript</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerbootstrap} ${styles.third2}`}>
            <span className={styles.tooltip}>49.1%</span>
          </span>
        </div>
      </div>
    </div>
</div>


</div>


<div className={styles.site_container}>

<div className={styles.info_container}>

  <div className={`${styles.project_container} ${squarePeg.className} ${styles.cwfrontend}`}>
    <div className={`${styles.p_name} `}>3. Clothes Website Backend</div>
    <div className={styles.p_socials}>
    <Link
  href="https://github.com/Roxxanar/ClothesWebsiteBackendPostgresqlSupabase">
      <Image
                        aria-hidden
                        src="/github (1).png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                      </Link>
    </div>
  </div>
  <div className={`${styles.description_container} ${squarePeg.className}`}>
  <div className={styles.p_description}>
    Backend for the previous project, made with Node.js and Supabase Postgresql database. <br></br>The features implemented are dynamic images
    extracted from the database, subscribe route, log in and sign up routes (with username and password or google account)
  </div>
  </div>

  <span className={`${styles.text_tooltip} ${styles.text_tooltip3}`}>
      Github
    </span>  
</div>

<div className={styles.percent_container}>

<div className={`${styles.percent_container2} ${styles.js_percent}`}>
      <div className={styles.skillBox}>
        <span className={styles.title}>JavaScript</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerhtml} ${styles.first3}`}>
            <span className={styles.tooltip}>95.3%</span>
          </span>
        </div>
      </div>

      

     
    </div>
</div>


</div>




<div className={styles.loader}></div>


<div className={styles.site_container}>

<div className={styles.info_container}>

  <div className={`${styles.project_container} ${squarePeg.className} ${styles.cwfrontend}`}>
    <div className={`${styles.p_name}`}>4. StudentVoice WebApp</div>
    <div className={styles.p_socials}>
    <Link
  href="https://github.com/Roxxanar/StudentVoiceWebAppAngular">
      <Image
                        aria-hidden
                        src="/github (1).png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                      </Link>
    </div>
  </div>
  <div className={`${styles.description_container} ${squarePeg.className}`}>
  <div className={styles.p_description}>
  A web application made with Angular framework for the frontend and .NET technology for the backend. <br></br>
  The project was made in the Summer Practice program and it is an application that allow students to share feedback on different topics. 
  <br></br>Below you can find the work-flow and wireframes in Figma links 
 
  </div>
<div className={styles.p_socials2}>
  <Link
  href="https://miro.com/app/board/uXjVOoz8ahI=/?share_link_id=394126618215">
      <Image
                        aria-hidden
                        src="/workflow mov.png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "24px" }}
                      />
                      </Link>


                      <Link
  href="https://www.figma.com/design/RINetoukEgh1t1O7quKP8p/StudentVoice?node-id=0-1&p=f">
      <Image
                        aria-hidden
                        src="/figma mov(1).png"
                        alt="Globe icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "24px" }}
                      />
                      </Link>
</div>
  </div>

  <span className={`${styles.text_tooltip} ${styles.text_tooltip4}`}>
      Github
    </span>  
</div>

<div className={styles.percent_container}>

<div className={`${styles.percent_container2} ${styles.fourth_percent}`}>
      <div className={styles.skillBox}>
        <span className={styles.title}>HTML</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerhtml} ${styles.first4}`}>
            <span className={styles.tooltip}>8.8%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>SCSS</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerscss} ${styles.second4}`}>
            <span className={styles.tooltip}>12.9%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>TypeScript</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerbootstrap} ${styles.third4}`}>
            <span className={styles.tooltip}>21.4%</span>
          </span>
        </div>
      </div>

      <div className={styles.skillBox}>
        <span className={styles.title}>C#</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPerbootstrap} ${styles.fourth4}`}>
            <span className={styles.tooltip}>56.1%</span>
          </span>
        </div>
      </div>


    </div>
</div>


</div>


</div>




      <div className={styles.fundalsus}>
       
      </div>

      

      <footer className={styles.footer}>

      <Contact/> 
      </footer>
    </div>
  );
}
