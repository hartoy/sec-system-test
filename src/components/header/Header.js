'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    console.log('isMenuOpen', isMenuOpen)
  }, [isMenuOpen])

  return (
    <nav className={`${styles.navbar} ${isMenuOpen ? 'active' : ''}`}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Link href="/">
            <span>Security and System</span>
          </Link>
        </div>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? (
          <Image src="/images/close.svg" width={30} height={30} alt="Close Menu" />
        ) : (
          <Image src="/images/hamburger-menu.svg" width={30} height={30} alt="Open Menu" />
        )}
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li onClick={closeMenu}>
          <Link href="#about">
            <span>About</span>
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="#interests">
            <span>Interests</span>
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="#contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div className={styles.rightSection}>
        <div className={styles.profile}>
          <Image src="/images/profile-pic.jpg" alt="Profile" width={40} height={40} className={styles.profileImage} />
          <span>Nacho Hardoy</span>
        </div>
      </div>
    </nav>
  )
}

export default Header
