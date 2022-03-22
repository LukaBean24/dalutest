import React from 'react'
import MainSlider from '../components/MainSlider'
import MovieSlider from '../components/MovieSlider'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbar logged={true} />
      <MainSlider />
      <MovieSlider title='Popular Now' />
    </div>
  )
}

export default Home
