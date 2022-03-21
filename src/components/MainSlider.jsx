import React from 'react'
import movies from '../movies'
import Slider from 'react-slick'

const data = movies.slice(0, 5)

const MainSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    customPaging: (i) => {
      return (
        <div className='img-container'>
          <img
            className='dot'
            src={`https://image.tmdb.org/t/p/original${data[i].backdrop_path}`}
            alt=''
          />
          <div className='shadow'></div>
        </div>
        // <p className='dot'>{i}</p>
      )
    },
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    speed: 500,
    swipeToSlide: true,
  }
  return (
    <>
      <div className='details'></div>
      <Slider {...settings}>
        {data.map((movie) => {
          return (
            <div className='slide' key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt=''
              />
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default MainSlider
