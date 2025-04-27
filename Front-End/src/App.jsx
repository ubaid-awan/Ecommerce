import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Common/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Admin/Cart'
import Footer from './Common/Footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kid" element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/Products" element={<Product/>} >
        <Route path=':id' element={<Product/>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App