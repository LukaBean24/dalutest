import React from 'react'
import Slider from 'react-slick'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import movies from '../movies'
import Card from './Card'
import { Typography } from '@mui/material'

const MovieSlider = ({ title }) => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div className='arrow-movie next-movie-arrow'>
        <AiOutlineDoubleLeft onClick={onClick} />
      </div>
    )
  }

  const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div className='arrow-movie prev-movie-arrow'>
        <AiOutlineDoubleRight onClick={onClick} />
      </div>
    )
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div
      className='movie-slider-container'
      style={{
        padding: '2rem 0',
        position: 'relative',
        backgroundColor: 'black',
      }}
    >
      <div className='slider-header'>
        <div className='slider-title'>
          <Typography variant='h5' color='primary'>
            {title}
          </Typography>
        </div>
        <div className='slider-gradient'>
          <div className='gradient'></div>
        </div>
        <div className='arr'></div>
      </div>
      <Slider {...settings} className='movie-slider'>
        {movies.map((movie) => {
          return <Card data={movie} key={movie.id} />
        })}
      </Slider>
    </div>
  )
}

export default MovieSlider
