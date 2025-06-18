import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Politica from '../pages/Politica/Politica'
import Produtos from '../pages/Produtos/Produtos'
import ThankYou from '../pages/ThankYou/ThankYou'

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/productos' element={<Produtos />} />
        <Route path='/politica-privacidad' element={<Politica />} />
        <Route path='/thank-you' element={<ThankYou/>} />

      </Routes>
    </>
  )
}
