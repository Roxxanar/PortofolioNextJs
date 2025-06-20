"use client";

/*import Image from "next/image";*/
import { useRef } from "react";
import styles from "./projects.module.css";
import Link from "next/link";
import Image from 'next/image';

import React, { useEffect } from 'react';
import { mateSC } from "../fonts"; // Adjust path as needed
import { stalemate } from '../fonts'; // adjust path if needed
import { setupPulsingGrid } from '../pulsing-grid.js';


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
   
    <div className={`${styles.container} ${mateSC.className}`} ref={containerRef}>
    <div
  className={styles.backgroundsvg} ref={backgroundRef}
  style={{ backgroundImage: "url('/low-poly-grid-haikei (1).svg')" }}>
    </div>
    
<div className={styles.fundal} ref={fundalRef}>
<div className={styles.folder}>
  
<section className={styles.hoversection}>
     <Link href="/programming">
    <div className={styles.file}>
        
      <div className={styles.work5}></div>
      <div className={styles.work4}></div>
      <div className={styles.work3}></div>
      <div className={styles.work2}></div>
      <div className={styles.work1}></div>
     
    </div>
    

   </Link>
  </section>
  
  <div className={styles.writing}>
       <Image
      aria-hidden
      src="/code-xml.svg"
      alt="Globe icon"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '10%', height: 'auto' }}
    
    />
 <Link href="/programming" style={{ textDecoration: 'none', color: 'black' }}>  Programming </Link> 
 </div>
</div>

<div className={styles.folder}>
<section className={styles.hoversection}>
<Link href="/uiux">
    <div className={styles.file}>
        
      <div className={styles.work5}></div>
      <div className={styles.work4}></div>
      <div className={styles.work3}></div>
      <div className={styles.work2}></div>
      <div className={styles.work1}></div>
     
    </div>
    </Link>

   
  </section>
  <div className={styles.writing}>
  <Image
      aria-hidden
      src="/component.svg"
      alt="Globe icon"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '10%', height: 'auto' }}
    
    />
 <Link href="/uiux" style={{ textDecoration: 'none', color: 'black' }}> UI/UX Design </Link> 
 </div>
</div>

<div className={styles.folder}>
<section className={styles.hoversection}>
<Link href="/drawings">
    <div className={styles.file}>
        
      <div className={styles.work5}></div>
      <div className={styles.work4}></div>
      <div className={styles.work3}></div>
      <div className={styles.work2}></div>
      <div className={styles.work1}></div>
     
    </div>
    </Link>

   
  </section>
  <div className={styles.writing}>
  <Image
      aria-hidden
      src="/brush.svg"
      alt="Globe icon"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '10%', height: 'auto' }}
    
    />
 <Link href="/drawings" style={{ textDecoration: 'none', color: 'black' }}> Drawings </Link> 
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
      


      <div className={styles.background}>

      <span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>

      </div>
    

      

      <footer className={styles.footer}></footer>
    </div>


  );
}

     

    

   

