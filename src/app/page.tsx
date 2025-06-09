"use client";

/*import Image from "next/image";*/
import styles from "./page.module.css";
import Link from "next/link";


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

  
    
<div className={styles.fundal}>
<Typewriter />


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

     

    

   

