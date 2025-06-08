"use client";

/*import Image from "next/image";*/
import styles from "./page.module.css";
import Link from "next/link";


import React, { useEffect } from 'react';
/*import { mateSC } from "./fonts"; */
import { stalemate } from './fonts'; // adjust path if needed
import { setupPulsingGrid } from './pulsing-grid.js';



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
<p> Hi, I am a web designer and programmer! :)</p>


</div>

      <div className={styles.navbar}>
        <Link href="/" style={{ textDecoration: 'none', color: '#247DAE' , fontSize: '1.6rem' }} className={stalemate.className}>
          <p>Home</p>
        </Link>
        <div id="pulsing-grid" ></div>
       
        <Link href="/projects" style={{ textDecoration: 'none', color: '#DA1818' , fontSize: '1.6rem' }} className={stalemate.className}>
          Projects
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

     

    

   

