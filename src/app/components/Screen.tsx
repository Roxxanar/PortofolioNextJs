// components/Screen.js
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Screen.module.css';

const Screen = ({ index = 0 }) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth > 900);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const images = [
    '/desktop1.png',
    '/desktop2.png',
    '/desktop3.png',
    '/desktop4.png',
  ];

  const selectedImage = images[index] || images[0];

  return (
    <div>
      {isWideScreen && (
        <div className={styles.screen}>
          <Image
            aria-hidden
            src={selectedImage}
            alt={`Desktop screen ${index + 1}`}
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
