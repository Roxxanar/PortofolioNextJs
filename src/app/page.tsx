"use client";

import { useRef } from "react";
/*import Image from "next/image";*/
import styles from "./page.module.css";
import Link from "next/link";
import Image from 'next/image';

import React, { useEffect, useState } from 'react';
/*import { mateSC } from "./fonts"; */
import { stalemate } from './fonts'; // adjust path if needed
import { setupPulsingGrid } from './pulsing-grid.js';

import Contact from "./components/Contact"; // Adjust the path as needed
import Typewriter from "./components/Typewriter";




export default function Home() {



  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const fundalRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const dinosaurRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const updateHeights = () => {
      const fundal = fundalRef.current;
      const iconContainer = iconContainerRef.current;
      const dinosaur = dinosaurRef.current;
      const container = containerRef.current;
      const backgroundsvg = backgroundRef.current;
      const left = leftRef.current;

      if (fundal && iconContainer && dinosaur && container && backgroundsvg && left) {
        const totalHeight =
          fundal.offsetHeight +
          iconContainer.offsetHeight +
          dinosaur.offsetHeight +
          600;

        container.style.height = `${totalHeight - 50}px`;
        backgroundsvg.style.height = `${totalHeight}px`;
        left.style.height = `${totalHeight}px`;
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);



 
    const leftRef = useRef<HTMLDivElement>(null);
    const [lineCount, setLineCount] = useState(0);
  
    const lineHeight = 30; // px
  
    useEffect(() => {
      const calculateLines = () => {
        if (leftRef.current) {
          const height = leftRef.current.offsetHeight;
          setLineCount(Math.floor(height / lineHeight));
        }
      };
  
      calculateLines();
      window.addEventListener('resize', calculateLines);
      return () => window.removeEventListener('resize', calculateLines);
    }, []);
  
  




 useEffect(() => {
  setupPulsingGrid();
 
}, []);
  
 



  return (
   
    <div className={styles.container} ref={containerRef}>
    <div
  className={styles.backgroundsvg} ref={backgroundRef}
  style={{ backgroundImage: "url('/low-poly-grid-haikei (1).svg')" }}>




    </div>

    <div className={styles.left} ref={leftRef}>
{Array.from({ length: lineCount }, (_, i) => (
          <span key={i}>
            {i + 1}
            <br />
          </span>
          ))}
</div>
<div className={styles.right} ref={leftRef}>
{Array.from({ length: lineCount }, (_, i) => (
          <span key={i}>
            {i + 1}
            <br />
          </span>
          ))}
</div>


    <div className={styles.navbar}>
      <Link
  href="/"
  className={stalemate.className}
  style={{ textDecoration: 'none', color: '#247DAE', fontSize: '1.6rem' }}
>          <span className={styles.effect}><p>Home</p></span>
        </Link>
        <div id="pulsing-grid" ></div>
       
        <Link
  href="/projects"
  className={stalemate.className}
  style={{ textDecoration: 'none', color: '#DA1818', fontSize: '1.6rem' }}
>          <span className={styles.effect}>Projects</span>
        </Link>
      </div>
    
<div className={styles.fundal} ref={fundalRef}>
<Typewriter />



</div>

     
      
      <div className={styles.icon_container} ref={iconContainerRef}>
      <div className={styles.icon_left}>
  <div className={styles.tooltip_wrapper}>
  <Link
  href="https://github.com/Roxxanar">
    <Image
      aria-hidden
      src="/github.png"
      alt="Globe icon"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  </Link>
    <span className={styles.text_tooltip}>
      Github
    </span>
  </div>
</div>

  <div className={styles.icon_right}>
  <div className={styles.tooltip_wrapper}>
  <Link
  href="https://www.linkedin.com/in/roxana-rusu-189303293/">
  <Image
        aria-hidden
        src="/social (1).png"
        alt="Globe icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      
      />
  </Link>
       <span className={styles.text_tooltip}>
      LinkedIn
    </span>

  </div>
  </div>
</div>


<div className={styles.dinosaur} ref={dinosaurRef}>


<aside className={styles.loader_dino} style={{ "--wh-number": "24" } as React.CSSProperties}>
  <div className={styles.pixel}></div>
</aside>


<div className={styles.loader_butterfly}>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="193" height="369" x="0" y="0" version="1.1" viewBox="0 0 18.528 35.424">
        <path fill="#000" d="M3.358 35.05c.435-.175.646-.408.861-.95.374-.94.698-1.52 1.145-2.05.78-.92 1.757-1.638 2.666-1.957.603-.212.9-.204 1.505.041.843.343 1.597.25 2.062-.254.95-1.029 3.95-6.873 5.841-11.376.869-2.07.831-1.882.797-3.962-.034-2.106-.024-2.064-.927-3.887-1.639-3.31-4.426-6.582-7.147-8.392C8.71 1.298 6.715.504 5.296.328c-.718-.09-2.465-.001-3.183.16C.943.752.279 1.268.279 1.917c0 .119.437 1.136.97 2.26.533 1.126 1.044 2.291 1.135 2.591.334 1.106.776 3.567.945 5.27.065.652.357 1.286.751 1.633.419.367 1.351.786 1.964.883.286.044.534.096.553.115.018.018-.129.128-.327.244-.761.446-1.432 1.439-1.74 2.574-.216.802-.194 2.914.045 4.121.24 1.212.575 2.318 1.031 3.403.46 1.092.535 1.458.439 2.135-.223 1.575-1.958 4.03-3.489 4.937-.693.41-.885.587-1.066.98-.173.375-.185.535-.069.953.223.802 1.206 1.326 1.937 1.033z"></path>
        </svg>

        
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="150" x="0" y="0" version="1.1" viewBox="0 0 2.4 14.4">
        <path fill="#000" d="M2.2 13c0 .641-.447 1.16-1 1.16-.553 0-1-.519-1-1.16V1.4C.2.759.647.24 1.2.24c.553 0 1 .519 1 1.16z"></path>
        </svg>

        
        <svg xmlns="http://www.w3.org/2000/svg" width="193" height="369" x="0" y="0" version="1.1" viewBox="0 0 18.528 35.424">
        <path fill="#000" d="M15.105 35.155c-.42-.196-.627-.482-.902-1.253-.544-1.517-2.145-3.126-3.636-3.652-.69-.243-.887-.242-1.486.01-.617.26-1.342.278-1.798.045-.555-.283-1.76-2.262-3.476-5.708C2.628 22.232.984 18.575.455 17.144c-.236-.637-.237-.655-.237-2.485 0-2.164.01-2.209.9-4.013 1.011-2.049 2.53-4.189 4.185-5.9C7.679 2.293 9.783.995 12.49.313c.782-.197 1.554-.236 2.695-.137 1.619.14 2.38.38 2.882.909.21.22.246.321.243.684-.002.373-.122.67-.959 2.395-1.277 2.63-1.59 3.806-2.035 7.63-.111.951-.316 1.426-.809 1.87-.52.47-1.306.807-2.165.928l-.391.054.35.224c.897.574 1.58 1.674 1.834 2.956.193.969.12 2.791-.164 4.15-.222 1.061-.696 2.518-1.12 3.443-.336.735-.411 1.584-.203 2.3.505 1.738 2.056 3.692 3.736 4.705.693.417.938.83.874 1.476-.104 1.071-1.193 1.706-2.153 1.256z"></path>
        </svg>
    </div>
  
</div>


      <div className={styles.background} >

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
    

      

      <footer className={styles.footer}>

     <Contact/> 

      </footer>

      
    </div>


  );
}

     

    

   

