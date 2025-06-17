"use client";
import React, { useState } from "react";
import styles from './Contact.module.css';
import { squarePeg } from "../fonts"; // Adjust path as needed


const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.contactdiv} >
      <button 
        className={`${styles.contact} ${squarePeg.className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "m_roxanar@yahoo.com" : "Contact"}
      </button>
    </div>
  );
}

export default Contact;