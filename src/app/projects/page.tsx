import Image from 'next/image';
import styles from './projects.module.css';
import Link from 'next/link';

import Gallery from '../components/Gallery'; // Adjust the path as needed
import Screen from '../components/Screen'; // Adjust the path as needed

export default function Home() {
  return (
    <div className={styles.container}>

     <div className={styles.navbar}>
     <Link href="/" className={styles.noUnderline}><p>Home</p></Link>
     <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
         <Link href="/projects" className={styles.noUnderline}>Projects</Link> 
     </div>
<div className={styles.laptop}>
<Image
  aria-hidden
  src="/tastaturatr.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '89%', height: 'auto' }}
/>
</div>

<Gallery />

<Screen/>


     <div className={styles.background}>

     

     </div>
     <div className={styles.container2}>
     <div className={styles.laptop}>
<Image
  aria-hidden
  src="/tastaturatr.png"
  alt="Globe icon"
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '89%', height: 'auto' }}
/>
</div>
    <Screen/>
     </div>
      <footer className={styles.footer}>
        
        
         
      </footer>
    </div>
  );
}
