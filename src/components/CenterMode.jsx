import React from 'react'
import Slider from 'react-slick'
import movies from '../movies'

const data = movies.slice(0, 5)
const CenterMode = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={`https://image.tmdb.org/t/p/original${data[i].backdrop_path}`}
            alt=''
          />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        {data.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=''
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default CenterMode
