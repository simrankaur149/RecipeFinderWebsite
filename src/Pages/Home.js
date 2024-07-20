import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Cards from '../Components/Cards'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import LogIn from './LogIn'

const Home = () => {
  return (
    <>
      <Header/>
      <Search/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home
