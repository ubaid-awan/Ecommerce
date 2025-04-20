import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Common/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Admin/Cart'
import Signup from './Pages/Signup'
import Login from './Pages/login'
import Footer from './Common/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Shop />} />
        <Route path="/mans" element={<ShopCategory  category="mans"/>} />
        <Route path="/womens" element={<ShopCategory category="womens" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/Products" element={<Product/>} >
        <Route path=':Productid' element={<Product/>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App