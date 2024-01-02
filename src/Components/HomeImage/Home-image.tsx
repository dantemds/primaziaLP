import React from 'react'

import img from '../../Assets/Images/LOGO-SARMENTO-WEB.png'

import './style.sass'

export default function HomeImage() {
  return (
    <div className='wrap-home-image'>
      <a href="https://api.whatsapp.com/send?phone=5511913732405&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20advogado.">
        <img src={img} alt="Home-Image" />
      </a>
    </div>
  )
}
