import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { HomePage } from '../pages/HomePage'
import { getCart } from '../utils/helpers'
import { Header } from './Header'

export const MainPageLayout = () => {
  const [cart, setCart] = useState(getCart());

  return (
    <>
        <Header/>

        <Routes>
            <Route path="/" element={<HomePage cart={cart} setCart={setCart} />}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </>
  )
}
