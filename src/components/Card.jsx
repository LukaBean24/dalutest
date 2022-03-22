import { Typography } from '@mui/material'
import React from 'react'
import { FaImdb } from 'react-icons/fa'

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt='Avatar'
            />
          </div>
          <div className='flip-card-back'>
            <Typography variant='h5' color='black'>
              {data.title}
            </Typography>
          </div>
        </div>
      </div>
      <div className='card-info'>
        <div className='imdb'>
          <FaImdb style={{ margin: '0 1rem' }} />
          <Typography variant='body1' color='primary'>
            {data.vote_average.toFixed(1)}
          </Typography>
        </div>
        <div className='watchtime'>
          <Typography variant='body1' color='primary'>
            2h 36m
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Card
