
import React from 'react';
import styles from './LaptopIcon.module.css';

const LaptopIcon = ({ style = {} }) => {
  return (
    <svg
      className={styles.laptopContainer}
      style={{
        width: '90%',
        height: 'auto',
        maxWidth: '100%',
        display: 'block',
        ...style
      }}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(1.407 1.407) scale(2.81 2.81)">
        <path
          d="M57.127 65.059v3.306H32.873v-3.306H0v3.392c0 2.965 2.404 5.369 5.369 5.369h79.263c2.965 0 5.369-2.404 5.369-5.369v-3.392H57.127z"
          fill="#000000"
        />
        
        <path
          d="M37.03 60.902v3.306H52.97v-3.306h32.786V19.219c0-1.678-1.36-3.039-3.039-3.039H7.282c-1.678 0-3.039 1.36-3.039 3.039v41.684H37.03z"
          fill="#000000"
        />
      </g>
    </svg>
  );
};

export default LaptopIcon;

