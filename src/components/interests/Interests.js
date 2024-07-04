import React from 'react'
import styles from './Interests.module.css'
import Block from './Block'

const Interests = () => {
  const blocksData = [
    {
      title: 'Sports',
      items: ['Football', 'Tennis', 'Soccer', 'Boxing'],
      svgIcon: '/images/sports-color.png',
    },
    {
      title: 'Music',
      items: ['Queen', 'Michael Jackson', 'The Weeknd', 'Feid'],
      svgIcon: '/images/music.png',
    },
    {
      title: 'Hobbies',
      items: ['Gym', 'Games', 'Soccer', 'Movies'],
      svgIcon: '/images/hobbies.png',
    },
    {
      title: 'Food',
      items: ['Barbecue', 'Ice cream', 'Pancakes', 'Burgers'],
      svgIcon: '/images/food.png',
    },
  ]

  return (
    <section id="interests" className={styles.interests}>
      <h2>Interests</h2>
      <div className={styles.blocksContainer}>
        {blocksData.map((block, index) => (
          <Block key={index} title={block.title} items={block.items} svgIcon={block.svgIcon} />
        ))}
      </div>
    </section>
  )
}

export default Interests
