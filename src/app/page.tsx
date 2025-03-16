import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.navbar}>
     <Link href="/">Home</Link>
     <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <Link href="/projects">Projects</Link>
     </div>
     

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
      <footer className={styles.footer}>
        
        
         
      </footer>
    </div>
  );
}
