// components/Typewriter.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Typewriter.module.css';
import Typed from 'typed.js';

const Typewriter = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: ["Hi, my name is Roxana :) I am a web designer and programmer!"],
      typeSpeed: 100,
      startDelay: 0,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      cursorChar: "|",
      contentType: 'html',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.typewrap}>
      <span className={styles.typed}>
        <span ref={typedRef} />
      </span>
    </div>
  );
};

export default Typewriter;
