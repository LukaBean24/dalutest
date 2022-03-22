import React from 'react'
import Typography from '@mui/material/Typography'

const Slide = ({ data }) => {
  return (
    <div className='slide'>
      <div className='details'>
        <div className='title'>
          <Typography variant='h4' color='white'>
            {data.title}
          </Typography>
        </div>
        <div className='desc'>
          <Typography variant='subtitle1' color='white'>
            {data.overview}
          </Typography>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt=''
      />
    </div>
  )
}

export default Slide
