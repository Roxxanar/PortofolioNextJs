"use client";

import Image from "next/image";
import styles from "./news.module.css";
import Link from "next/link";

import React, { useEffect, useRef } from "react";

import { squarePeg, stalemate } from "../fonts"; // adjust path if needed

import { setupPulsingGrid } from "../pulsing-grid.js";

import Contact from "../components/Contact"; // Adjust the path as needed

export default function Uiux() {


  const containerRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const fundalRef = useRef<HTMLDivElement | null>(null);
  const container2Ref = useRef<HTMLDivElement | null>(null);
  


  useEffect(() => {
    const adjustHeights = () => {
      if (
        !containerRef.current ||
        !backgroundRef.current ||
        !fundalRef.current ||
        !container2Ref.current
      ) return;
  
      const container2Height = container2Ref.current.offsetHeight;
      const fundalHeight = container2Height + 350;
      const fullHeight = fundalHeight + 450;
  
      fundalRef.current.style.height = `${fundalHeight}px`;
      containerRef.current.style.height = `${fullHeight - 40}px`;
      backgroundRef.current.style.height = `${fullHeight}px`;
    };
  
    // Initial attempt
    adjustHeights();
  
    // Fallback to catch images that load late
    const timeout = setTimeout(() => {
      adjustHeights();
    }, 500); // you can tweak this if needed
  
    window.addEventListener("resize", adjustHeights);
  
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", adjustHeights);
    };
  }, []);
  


  const itemListRef = useRef<HTMLDivElement | null>(null);


  const handlePrev = () => {
    if (!itemListRef.current) return;

    const item = itemListRef.current.querySelector(".screen2") as HTMLElement;
    if (!item) return; // Add null check

    const itemWidth = item.offsetWidth;
    const style = window.getComputedStyle(itemListRef.current);
    const gap = parseInt(style.gap) || 0; // Use 0 as fallback, or match your CSS

    itemListRef.current.scrollBy({
      left: -(itemWidth + gap),
      behavior: "smooth",
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
      behavior: "smooth",
    });
  };


  useEffect(() => {
    setupPulsingGrid();
  }, []);




  return (
    <div className={styles.container} ref={containerRef}>
      <div
        className={styles.backgroundsvg}  ref={backgroundRef}
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


      <div className={styles.fundal} ref={fundalRef}></div>

    

      <div className={styles.fundalsus}>
        <div className={styles.ribbon}>
          <span className={`${styles.ribbon5} ${squarePeg.className}`}>
            <span className={styles.newswebsite}>News Website</span>
          </span>
        </div>
      </div>


   

      <div className={styles.container2} ref={container2Ref}>
        <button onClick={handlePrev} id="prev-btn" className={styles.prev_btn}>
          <svg viewBox="0 0 512 512" width="20" aria-label="Previous">
            <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
          </svg>
        </button>

        <div className={styles.container_artgallery} >
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
                  style={{ width: "100%", height: "auto" }}
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
                  style={{ width: "100%", height: "auto" }}
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
                  style={{ width: "100%", height: "auto" }}
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
                  style={{ width: "100%", height: "auto" }}
                  
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleNext} id="next-btn" className={styles.next_btn}>
          <svg viewBox="0 0 512 512" width="20" aria-label="Next">
            <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
          </svg>
        </button>
      </div>

<div className={`${styles.description_cont} ${squarePeg.className}`}>
  <p>This is a creative News Website Design made in Figma
    <br></br> You can find the link below</p>
  <Link
  href="https://www.figma.com/design/SLIUR2O2EosNNjqKjdyQRO/News-Website?node-id=29-3&p=f&t=jFNREI1RoIjKARdD-0">
  <div className={styles.figmaborder}>
  <Image  className={styles.link}
                  aria-hidden
                  src="/figma.png"
                  alt="Globe icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  
                />
  </div>
  </Link>
</div>

<div className={styles.fundaljos}></div>


      <footer className={styles.footer}>

      <Contact/> 
      </footer>
    </div>
  );
}
