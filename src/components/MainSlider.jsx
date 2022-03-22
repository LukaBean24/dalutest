import React from 'react'
import movies from '../movies'
import Slider from 'react-slick'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import slider from 'react-slick/lib/slider'

const data = movies.slice(0, 5)

const MainSlider = () => {
  const PrevArrow = (props) => {
    const { onClick, className, style } = props
    return (
      <div className='arrow prev-arrow' onClick={onClick}>
        <AiOutlineDoubleLeft className='icon' />
      </div>
    )
  }
  const NextArrow = (props) => {
    const { onClick, className, style } = props
    return (
      <div className='arrow next-arrow' onClick={onClick}>
        <AiOutlineDoubleRight className='icon' />
      </div>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  }
  return (
    <>
      {/* <div className='details'></div> */}
      <Slider {...settings}>
        {movies.map((movie) => {
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
