"use client";
import React, { useState } from "react";
import styles from './Contact.module.css';
import { squarePeg } from "../fonts";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleContactClick = () => {
    if (isClicked) {
      // When clicking to go back, reset hover state
      setIsHovered(false);
    }
    setIsClicked(!isClicked);
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  return (
    <div className={styles.contactdiv}>
      <button
        onClick={handleContactClick}
        className={`${styles.contact} ${isClicked ? styles.clicked : ""} ${!isClicked ? squarePeg.className : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {(isHovered || isClicked) ? "m_roxanar@yahoo.com" : "Contact"}
      </button>
    </div>
  );
};

export default Contact;