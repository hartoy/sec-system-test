import React from 'react'
import Marquee from 'react-fast-marquee'
import styles from './mARQUE.module.css'

const ScrollingText = () => {
  return (
    <Marquee className={`${styles.marquee} ${styles['custom-shadow']}`} autoFill={true}>
      &nbsp;HTML - CSS - JAVASCRIPT - REACT - NEXT - GIT - SCRUM - MYSQL - SHOPINCLOUD - WORDPRESS -
    </Marquee>
  )
}

export default ScrollingText
