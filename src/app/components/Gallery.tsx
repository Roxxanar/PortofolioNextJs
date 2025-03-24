"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const Gallery = () => {
  // Start with showing the component (this is important!)
  const [shouldRender, setShouldRender] = useState(true);
  
  useEffect(() => {
    // Check the width once mounted and set state accordingly
    const checkWidth = () => {
      setShouldRender(window.innerWidth < 900);
    };
    
    // Initial check
    checkWidth();
    
    // Set up listener for resize events
    window.addEventListener('resize', checkWidth);
    
    // Clean up
    return () => window.removeEventListener('resize', checkWidth);
  }, []);
  
  // This is key: Always render the same structure on both server and client
  // But make it invisible when not needed using CSS
  return (
    <div 
      className={styles.container_artgallery} 
      style={{ display: shouldRender ? 'flex' : 'none' }}
    >
      <div className={styles.carousel_view}>
        <button id="prev-btn" className={styles.prev_btn}>
          <svg viewBox="0 0 512 512" width="20" aria-label="Previous">
            <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
          </svg>
        </button>

        <div id="item-list" className={styles.item_list}>

          <div className={styles.screen}>
          <Image
  aria-hidden
  src="/desktop1.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="200vw"
  style={{ width: '450%', height: 'auto' }}
/>
          </div>

 <div className={styles.screen}>
          <Image
  aria-hidden
  src="/desktop1.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="200vw"
  style={{ width: '450%', height: 'auto' }}
/>
          </div>

          <div className={styles.screen}>
          <Image
  aria-hidden
  src="/desktop1.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="200vw"
  style={{ width: '450%', height: 'auto' }}
/>
          </div>

          <div className={styles.screen}>
          <Image
  aria-hidden
  src="/desktop1.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="200vw"
  style={{ width: '450%', height: 'auto' }}
/>
          </div>

        </div>

        <button id="next-btn" className={styles.next_btn}>
          <svg viewBox="0 0 512 512" width="20" aria-label="Next">
            <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gallery;