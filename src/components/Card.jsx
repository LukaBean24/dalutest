import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Card = ({ data }) => {
  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
  }
  return (
    <>
      <div class='flip-card'>
        <div class='flip-card-inner'>
          <div class='flip-card-front'>
            <img
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt='Avatar'
            />
          </div>
          <div class='flip-card-back'>
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
            <p>{data.rating}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
