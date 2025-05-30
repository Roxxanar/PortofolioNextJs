"use client";

/*import Image from "next/image";*/
import styles from "./projects.module.css";
import Link from "next/link";


import React, { useEffect } from 'react';
import { mateSC } from "../fonts"; // Adjust path as needed
import { setupPulsingGrid } from '../pulsing-grid.js';



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
<div className={styles.folder}>
<section className={styles.hoversection}>
    
    <div className={styles.file}>
        
      <div className={styles.work5}></div>
      <div className={styles.work4}></div>
      <div className={styles.work3}></div>
      <div className={styles.work2}></div>
      <div className={styles.work1}></div>
     
    </div>
    

   
  </section>
  <div className={styles.writing}>
 <Link href="/uiux" style={{ textDecoration: 'none', color: 'black' }}> Programming </Link> 
 </div>
</div>

<div className={styles.folder}>
<section className={styles.hoversection}>
    
    <div className={styles.file}>
        
      <div className={styles.work5}></div>
      <div className={styles.work4}></div>
      <div className={styles.work3}></div>
      <div className={styles.work2}></div>
      <div className={styles.work1}></div>
     
    </div>
    

   
  </section>
  <div className={styles.writing}>
 <Link href="/uiux" style={{ textDecoration: 'none', color: 'black' }}> UI/UX Design </Link> 
 </div>
</div>

<div className={styles.folder}>
<section className={styles.hoversection}>
    
    <div className={styles.file}>
        
      <div className={styles.work5}></div>
      <div className={styles.work4}></div>
      <div className={styles.work3}></div>
      <div className={styles.work2}></div>
      <div className={styles.work1}></div>
     
    </div>
    

   
  </section>
  <div className={styles.writing}>
 <Link href="/uiux" style={{ textDecoration: 'none', color: 'black' }}> Drawings </Link> 
 </div>
</div>



</div>

      <div className={styles.navbar}>
        <Link href="/" style={{ textDecoration: 'none', color: '#247DAE' }} className={mateSC.className}>
          <p>Home</p>
        </Link>
        <div id="pulsing-grid" ></div>
       
        <Link href="/projects" style={{ textDecoration: 'none', color: '#DA1818' }} className={mateSC.className}>
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

     

    

   

