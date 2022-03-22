import React from 'react'
import movies from '../movies'
import Slider from 'react-slick'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import Slide from './Slide'

const data = movies.slice(0, 5)

const MainSlider = () => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props

    return (
      <div className='arrow prev-arrow' onClick={onClick}>
        <AiOutlineDoubleLeft className='icon-arrow' />
      </div>
    )
  }
  const NextArrow = (props) => {
    const { className, style, onClick } = props

    return (
      <div className='arrow next-arrow' onClick={onClick}>
        <AiOutlineDoubleRight className='icon-arrow' />
      </div>
    )
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoPlaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings} className='slider'>
        {movies.map((data) => {
          return <Slide data={data} key={data.id}></Slide>
        })}
      </Slider>
    </>
  )
}

export default MainSlider
