"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Screen.module.css';

const Screen = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    // Function to check window width and update state
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth > 900);
    };

    // Initial check
    checkScreenWidth();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenWidth);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div>
      {isWideScreen && (
        <div className={styles.screen}>
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
      )}
    </div>
  );
};

export default Screen;