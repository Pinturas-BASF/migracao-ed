import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import FormContextProvider from './context/formContext'
import Rotas from './routes/Rotas'
import BtnFlutuante from './components/BtnFlutuante/BtnFlutuante'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom'

import LandingLeads from './pages/LandingLeads/LandingLeads'
import Gracias from './pages/LeadGracias/Gracias'
import Terminos from './pages/LeadTerminos/Terminos'


//import Popup from './components/Popup/Popup'
export default function App() {
  return (
    
    <>

      <Helmet>
        {/* Meta tags for SEO and social media sharing */}
        <script>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N4HTPLKQ');
          `}
        </script>
        {/* End Google Tag Manager */}
        </Helmet>
       <Routes>

        { /* Ruta independiente */}
        <Route path="/landing-leads" element={<LandingLeads />} />
        <Route path="/landing-leads/Gracias" element={<Gracias />} />
        <Route path="/landing-leads/Términos" element={<Terminos />} />
       { /*
       
       Ruta principal que incluye Header, Footer y Subrutas */ } 
       <Route 
        path="/*"
        element={  
          <FormContextProvider>
            <Header />
            <Rotas />
            <Footer />
            <BtnFlutuante />
            <ScrollToTop />
          </FormContextProvider>
       }
        />
      </Routes>
    </>
  )
}
