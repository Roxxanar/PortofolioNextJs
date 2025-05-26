"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';
import { forwardRef } from 'react';

const Gallery = forwardRef<HTMLDivElement>((props, ref) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setShouldRender(window.innerWidth < 1200);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);




  
  // This is key: Always render the same structure on both server and client
  // But make it invisible when not needed using CSS
  return (
    <div 
      className={styles.container_artgallery} 
      style={{ visibility: shouldRender ? 'visible' : 'hidden' }}
    >
      
      <div className={styles.carousel_view}>
        

        <div id="item-list" ref={ref} className={styles.item_list}>

          <div className={styles.screen2}>
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

 <div className={styles.screen2}>
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

          <div className={styles.screen2}>
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

          <div className={styles.screen2}>
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
 );
});

Gallery.displayName = 'Gallery';

export default Gallery;