'use client'

import React, { useState } from 'react'
import styles from './Block.module.css'
import Image from 'next/image'

const Block = ({ title, items, svgIcon }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={`${styles.block} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className={styles.text}>
          <span>{title}</span>
          <Image src={svgIcon} alt="" width={60} height={60} className={styles.svgIcon} />
        </div>
      )}
    </div>
  )
}

export default Block
