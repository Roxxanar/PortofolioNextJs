"use client";

/*import Image from "next/image";*/
import styles from "./page.module.css";
import Link from "next/link";
import Image from 'next/image';

import React, { useEffect } from 'react';
/*import { mateSC } from "./fonts"; */
import { stalemate } from './fonts'; // adjust path if needed
import { setupPulsingGrid } from './pulsing-grid.js';

import Contact from "./components/Contact"; // Adjust the path as needed
import Typewriter from "./components/Typewriter";




export default function Home() {



 useEffect(() => {
  setupPulsingGrid();
 
}, []);
  
 



  return (
   
    <div className={styles.container}>
    <div
  className={styles.backgroundsvg}
  style={{ backgroundImage: "url('/low-poly-grid-haikei (1).svg')" }}>
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
    
<div className={styles.fundal}>
<Typewriter />


</div>

     
      
      <div className={styles.icon_container}>
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
    

      

      <footer className={styles.footer}>

     <Contact/> 

      </footer>

      
    </div>


  );
}

     

    

   

