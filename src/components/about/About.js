import styles from './About.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ScrollingTex from '../marquee/ScrollingText'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About</h2>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerImg}>
            <Image src="/images/profile-pic.jpg" alt="Profile" width={60} height={60} className={styles.profileImage} />
          </div>
          <div className={styles.headerTitle}>
            <h3>Nacho Hardoy</h3>
            <ul className={styles.socials}>
              <li>
                <Link href="https://github.com/hartoy" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/github-logo.svg" alt="My SVG Image" width={20} height={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/ignacio-hardoy-14b575a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/linkedin-logo.svg" alt="My SVG Image" width={20} height={20} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/nachohardoy/" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/ig-logo.jpg" alt="My SVG Image" width={20} height={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionSuB}>
            <div>
              <span>Ocupation</span>
              <p>Frontend developer</p>
            </div>
            <div>
              <span>Portfolio</span>

              <Link href="https://nachohardoy-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                <p>nachohardoy-web.vercel.app</p>
              </Link>
            </div>
          </div>

          <div>
            <span>Description</span>
            <p>
              I am a frontend developer with over three years of experience in real-world projects, specializing in
              React to create efficient and attractive user interfaces.
            </p>
          </div>
          <div>
            <span>Technologies</span>
            <ScrollingTex />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
