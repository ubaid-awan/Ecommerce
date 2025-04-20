import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewColection from '../components/NewCollection/NewColection'
import NewLetter from '../components/NewLetter/NewLetter'



const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewColection />
      <NewLetter />
    </div>
  )
}

export default Shop