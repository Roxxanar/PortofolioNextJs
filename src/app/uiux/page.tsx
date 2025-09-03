"use client";

/*import Image from "next/image";*/
import { useRef } from "react";
import styles from "./uiux.module.css";
import Link from "next/link";
/*import Image from 'next/image';*/

import React, { useEffect } from "react";
/*import { mateSC } from "../fonts"; // Adjust path as needed*/
import { stalemate } from "../fonts"; // adjust path if needed
import { setupPulsingGrid } from "../pulsing-grid.js";

import Contact from "../components/Contact"; // Adjust the path as needed

export default function Projects() {
  const fundalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const fjRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustHeights = () => {
      if (fundalRef.current && containerRef.current && backgroundRef.current && footerRef.current && fjRef.current) {
        const fundalHeight = fundalRef.current.offsetHeight;
        const footerHeight = footerRef.current.offsetHeight;
        const totalHeight = fundalHeight + footerHeight + 300;
        const fjHeight = fundalHeight + 210;

        containerRef.current.style.height = `${totalHeight -20}px`;
        backgroundRef.current.style.height = `${totalHeight}px`;
        fjRef.current.style.height = `${fjHeight}px`;
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
    <div
      className={`${styles.container} ${stalemate.className}`}
      ref={containerRef}
    >
      <div
        className={styles.backgroundsvg}
        ref={backgroundRef}
        style={{ backgroundImage: "url('/low-poly-grid-haikei (1).svg')" }}
      ></div>


      <div className={`${styles.fundal} ${stalemate.className}`} ref={fundalRef}>



        <div className={styles.card_container}>
          
          <section className={styles.hoversection}>
            
            <Link href="/news">
               <div className={styles.main}>
                <div className={`${styles.card} ${styles.c1}`}></div>
                <div className={`${styles.card} ${styles.c2}`}></div>
                <div className={`${styles.card} ${styles.c3}`}></div>
                <div className={`${styles.card} ${styles.c4}`}> <p>News Website</p> </div>
              </div>
            </Link>
          </section>
        </div>
<div className={styles.hovertext}> 

<div className={styles.analyze}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="40"
    width="40"
  >
    <rect height="20" width="20"></rect>
    <path
      strokeLinecap="round"
      strokeWidth="1"
      stroke="black"
      d="M19.25 9.25V5.25C19.25 4.42157 18.5784 3.75 17.75 3.75H6.25C5.42157 3.75 4.75 4.42157 4.75 5.25V18.75C4.75 19.5784 5.42157 20.25 6.25 20.25H12.25"
      className={styles.board}
    ></path>
    <path
      d="M9.18748 11.5066C9.12305 11.3324 8.87677 11.3324 8.81234 11.5066L8.49165 12.3732C8.47139 12.428 8.42823 12.4711 8.37348 12.4914L7.50681 12.8121C7.33269 12.8765 7.33269 13.1228 7.50681 13.1872L8.37348 13.5079C8.42823 13.5282 8.47139 13.5714 8.49165 13.6261L8.81234 14.4928C8.87677 14.6669 9.12305 14.6669 9.18748 14.4928L9.50818 13.6261C9.52844 13.5714 9.5716 13.5282 9.62634 13.5079L10.493 13.1872C10.6671 13.1228 10.6671 12.8765 10.493 12.8121L9.62634 12.4914C9.5716 12.4711 9.52844 12.428 9.50818 12.3732L9.18748 11.5066Z"
      className={styles.star_2}
    ></path>
    <path
      d="M11.7345 6.63394C11.654 6.41629 11.3461 6.41629 11.2656 6.63394L10.8647 7.71728C10.8394 7.78571 10.7855 7.83966 10.717 7.86498L9.6337 8.26585C9.41605 8.34639 9.41605 8.65424 9.6337 8.73478L10.717 9.13565C10.7855 9.16097 10.8394 9.21493 10.8647 9.28335L11.2656 10.3667C11.3461 10.5843 11.654 10.5843 11.7345 10.3667L12.1354 9.28335C12.1607 9.21493 12.2147 9.16097 12.2831 9.13565L13.3664 8.73478C13.5841 8.65424 13.5841 8.34639 13.3664 8.26585L12.2831 7.86498C12.2147 7.83966 12.1607 7.78571 12.1354 7.71728L11.7345 6.63394Z"
      className={styles.star_1}
    ></path>
    <path
      className={styles.stick}
      strokeLinejoin="round"
      strokeWidth="1"
      stroke="black"
      d="M17 14L21.2929 18.2929C21.6834 18.6834 21.6834 19.3166 21.2929 19.7071L20.7071 20.2929C20.3166 20.6834 19.6834 20.6834 19.2929 20.2929L15 16M17 14L15.7071 12.7071C15.3166 12.3166 14.6834 12.3166 14.2929 12.7071L13.7071 13.2929C13.3166 13.6834 13.3166 14.3166 13.7071 14.7071L15 16M17 14L15 16"
    ></path>
  </svg>
</div>


            <p>Hover on the cards</p> 
            
            
            <div className={styles.analyze}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="40"
    width="40"
  >
    <rect height="20" width="20"></rect>
    <path
      strokeLinecap="round"
      strokeWidth="1"
      stroke="black"
      d="M19.25 9.25V5.25C19.25 4.42157 18.5784 3.75 17.75 3.75H6.25C5.42157 3.75 4.75 4.42157 4.75 5.25V18.75C4.75 19.5784 5.42157 20.25 6.25 20.25H12.25"
      className={styles.board}
    ></path>
    <path
      d="M9.18748 11.5066C9.12305 11.3324 8.87677 11.3324 8.81234 11.5066L8.49165 12.3732C8.47139 12.428 8.42823 12.4711 8.37348 12.4914L7.50681 12.8121C7.33269 12.8765 7.33269 13.1228 7.50681 13.1872L8.37348 13.5079C8.42823 13.5282 8.47139 13.5714 8.49165 13.6261L8.81234 14.4928C8.87677 14.6669 9.12305 14.6669 9.18748 14.4928L9.50818 13.6261C9.52844 13.5714 9.5716 13.5282 9.62634 13.5079L10.493 13.1872C10.6671 13.1228 10.6671 12.8765 10.493 12.8121L9.62634 12.4914C9.5716 12.4711 9.52844 12.428 9.50818 12.3732L9.18748 11.5066Z"
      className={styles.star_2}
    ></path>
    <path
      d="M11.7345 6.63394C11.654 6.41629 11.3461 6.41629 11.2656 6.63394L10.8647 7.71728C10.8394 7.78571 10.7855 7.83966 10.717 7.86498L9.6337 8.26585C9.41605 8.34639 9.41605 8.65424 9.6337 8.73478L10.717 9.13565C10.7855 9.16097 10.8394 9.21493 10.8647 9.28335L11.2656 10.3667C11.3461 10.5843 11.654 10.5843 11.7345 10.3667L12.1354 9.28335C12.1607 9.21493 12.2147 9.16097 12.2831 9.13565L13.3664 8.73478C13.5841 8.65424 13.5841 8.34639 13.3664 8.26585L12.2831 7.86498C12.2147 7.83966 12.1607 7.78571 12.1354 7.71728L11.7345 6.63394Z"
      className={styles.star_1}
    ></path>
    <path
      className={styles.stick}
      strokeLinejoin="round"
      strokeWidth="1"
      stroke="black"
      d="M17 14L21.2929 18.2929C21.6834 18.6834 21.6834 19.3166 21.2929 19.7071L20.7071 20.2929C20.3166 20.6834 19.6834 20.6834 19.2929 20.2929L15 16M17 14L15.7071 12.7071C15.3166 12.3166 14.6834 12.3166 14.2929 12.7071L13.7071 13.2929C13.3166 13.6834 13.3166 14.3166 13.7071 14.7071L15 16M17 14L15 16"
    ></path>
  </svg>
</div>
            
            </div>

        <div className={styles.card_container2}>


          

          
          <section className={styles.hoversection}>
            <Link href="/coffepink">
              <div className={styles.main}>
                <div className={`${styles.card} ${styles.c5}`}></div>
                <div className={`${styles.card} ${styles.c6}`}></div>
                <div className={`${styles.card} ${styles.c7}`}></div>
                <div className={`${styles.card} ${styles.c8}`}><p> Coffe Website </p> </div>
              </div>
            </Link>
          </section>
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
          <span className={styles.effect}>
            <p>Home</p>
          </span>
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

      <div className={styles.background}></div>

      <div className={styles.fundaljos} ref={fjRef}></div>

      <footer className={styles.footer} ref={footerRef}>
         <Contact/>
      </footer>
    </div>
  );
}
