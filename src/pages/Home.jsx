import React from 'react'
import MainSlider from '../components/MainSlider'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar logged={true} />
      <MainSlider />
    </>
  )
}

export default Home
