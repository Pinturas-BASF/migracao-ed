import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Politica() {

  const navigate = useNavigate()

  
  return (
    <>
    <button onClick={() => navigate(-1)}> ◀️ Volver</button>
      {/* <!-- Language Drop-down element that will control in which language the Privacy Notice is displayed --> */}
      <div class="ot-privacy-notice-language-dropdown-container"></div>
      {/* <!-- Container in which the Privacy Notice will be rendered --> */}
      <div id="otnotice-8cc361be-9bac-4b39-920c-de0fbe6d7548" class="otnotice"></div>

    </>
  )
}
