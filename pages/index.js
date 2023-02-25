import Link from 'next/link'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.hero_center}>
          <h1 className={styles.heading}>HORIZON 2023</h1>
          <button className={styles.register_btn}>Register Now</button>
        </div>
        <div></div>
      </div>
      <div className={styles.about}>
        <div className={styles.about_left}>
          <h1>ABOUT</h1>
          <h1>HORIZON</h1>
        </div>
        <div className={styles.about_right}>
          <div className={styles.desc_cont}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices venenatis feugiat. Ut posuere nunc sit amet porta volutpat. Donec accumsan libero in elementum condimentum. Donec placerat nibh ipsum.</h3>
          </div>
          <div className={styles.more_desc_cont}>
            <div>
              <h3>2 DAYS</h3>
            </div>
            <div>
              <h3>10+ EVENTS</h3>
            </div>
            <div>
              <h3>COUNTDOWN</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
