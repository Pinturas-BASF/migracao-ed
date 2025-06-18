import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import FormContextProvider from './context/formContext'
import Rotas from './routes/Rotas'
import BtnFlutuante from './components/BtnFlutuante/BtnFlutuante'

export default function App() {
  return (
    <>
      <FormContextProvider>
        <Header />
        <Rotas />
        <Footer />
        <BtnFlutuante />
        
      </FormContextProvider>
    </>
  )
}
