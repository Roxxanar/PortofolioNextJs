import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { mateSC } from "./fonts"; // Adjust path as needed


export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.navbar}>
      
     <Link href="/" className={mateSC.className}>Home</Link>
     <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <Link href="/projects" className={mateSC.className}>Projects</Link>
     </div>
     

    

     <div className={styles.background}>

<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>

</div>


      <footer className={styles.footer}>
        
        
         
      </footer>
    </div>
  );
}
