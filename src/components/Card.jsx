import { Typography } from '@mui/material'
import React from 'react'
import { SiImdb } from 'react-icons/si'

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div class='flip-card'>
        <div class='flip-card-inner'>
          <div class='flip-card-front'>
            <img
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt='Avatar'
            />
          </div>
          <div class='flip-card-back'>
            <Typography variant='h5' color='black'>
              {data.title}
            </Typography>
          </div>
        </div>
      </div>
      <div className='card-info'>
        <div className='imdb'>
          <SiImdb style={{ margin: '0 1rem' }} />
          <Typography variant='body1' color='primary'>
            {data.vote_average}
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
