import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>
        Niko Drossos
      </h1>
      {/* <p className={styles.desc}>
        
      </p> */}
      <Button url="https://avaragecodeenjoyer.github.io/Real-portfolio-Website/Portfolio.html" text="See my portfolio!"/>
    </div>
    <div className={styles.item}>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  </div>

  )
}





