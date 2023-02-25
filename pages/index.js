import Link from 'next/link'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.hero_center}>
          <h1 className={styles.heading}>HORIZON 2023</h1>
          <button className={styles.register_btn}>Register Now</button>
        </div>
        <div></div>
      </div>
    </>
  )
}
