import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { HomePage } from '../pages/HomePage'
import { Header } from './Header'

export const MainPageLayout = () => {
  return (
    <>
        <Header/>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </>
  )
}
