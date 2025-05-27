"use client";

import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

import Screen from "../components/Screen"; // Adjust the path as needed
import React, { useState, useEffect, useRef } from 'react';
import { mateSC } from "../fonts"; // Adjust path as needed
import { setupPulsingGrid } from '../pulsing-grid.js';



export default function Home() {

 const [shouldRender, setShouldRender] = useState(true);
 
 const itemListRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
  setupPulsingGrid();
}, []);
  
  useEffect(() => {
    // Check the width once mounted and set state accordingly
    const checkWidth = () => {
      setShouldRender(window.innerWidth < 1200);
    };
    
    // Initial check
    checkWidth();
    
    // Set up listener for resize events
    window.addEventListener('resize', checkWidth);
    
    // Clean up
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

 
  
  
const handlePrev = () => {
  if (!itemListRef.current) return;
  
  const item = itemListRef.current.querySelector(".screen2") as HTMLElement;
  if (!item) return; // Add null check
  
  const itemWidth = item.offsetWidth;
  const style = window.getComputedStyle(itemListRef.current);
  const gap = parseInt(style.gap) || 0; // Use 0 as fallback, or match your CSS
  
  itemListRef.current.scrollBy({ 
    left: -(itemWidth + gap), 
    behavior: "smooth" 
  });
};

const handleNext = () => {
  if (!itemListRef.current) return;
  
  const item = itemListRef.current.querySelector(".screen2") as HTMLElement;
  if (!item) return; // Add null check
  
  const itemWidth = item.offsetWidth;
  const style = window.getComputedStyle(itemListRef.current);
  const gap = parseInt(style.gap) || 0; // Use 0 as fallback, or match your CSS
  
  itemListRef.current.scrollBy({ 
    left: itemWidth + gap, 
    behavior: "smooth" 
  });
};








  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/" style={{ textDecoration: 'none', color: '#247DAE' }} className={mateSC.className}>
          <p>Home</p>
        </Link>
        <div id="pulsing-grid" ></div>
       
        <Link href="/projects" style={{ textDecoration: 'none', color: '#DA1818' }} className={mateSC.className}>
          Projects
        </Link>
      </div>
      <div  className={styles.container2}>
        <div className={styles.laptop}>
          <Image
            aria-hidden
            src="/tastaturatr.png"
            alt="Globe icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {shouldRender && (
  <button onClick={handlePrev} id="prev-btn" className={styles.prev_btn}>
    <svg viewBox="0 0 512 512" width="20" aria-label="Previous">
      <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
    </svg>
  </button>
)}
        {shouldRender ? 
        <div 
      className={styles.container_artgallery} 
      style={{ visibility: shouldRender ? 'visible' : 'hidden' }}
    >
      
      <div className={styles.carousel_view}>
        

        <div id="item-list" className={styles.item_list} ref={itemListRef}>

          <div className={`${styles.screen2} screen2`}>
          <Image
  aria-hidden
  src="/desktop1.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}

/>
          </div>

 <div className={`${styles.screen2} screen2`}>
          <Image
  aria-hidden
  src="/desktop2.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}

/>
          </div>

          <div className={`${styles.screen2} screen2`}>
          <Image
  aria-hidden
  src="/desktop3.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
/>
          </div>

          <div className={`${styles.screen2} screen2`}>
          <Image
  aria-hidden
  src="/desktop4.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
/>
          </div>

        </div>

        
      </div>
      
    </div>
  : <Screen index={0} />
}
        {shouldRender && (
  <button onClick={handleNext} id="next-btn" className={styles.next_btn}>
    <svg viewBox="0 0 512 512" width="20" aria-label="Next">
      <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
    </svg>
  </button>
)}
      </div>

    


      <div className={styles.background}></div>
      <div  className={styles.container3}>
        <div className={styles.laptop}>
          <Image
            aria-hidden
            src="/tastaturatr.png"
            alt="Globe icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
          <Screen index={1} />
      </div>

      <div className={styles.background}></div>
      <div  className={styles.container3}>
        <div className={styles.laptop}>
          <Image
            aria-hidden
            src="/tastaturatr.png"
            alt="Globe icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Screen index={2} />
      </div>

      <div className={styles.background}></div>
      <div  className={styles.container3}>
        <div className={styles.laptop}>
          <Image
            aria-hidden
            src="/tastaturatr.png"
            alt="Globe icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
         <Screen index={3} />
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
