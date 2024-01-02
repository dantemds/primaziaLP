import React from 'react'

import './style.sass'

import logo from '../../Assets/Images/Logo-Primazia_2.png'

export default function Header() {
  return (
    <header id='headerId'>
      <div className="content">
        <a href="/" className='linkLogo'>
          <img src={logo} alt="Logo-Primazia" />
          
        </a>
        <nav>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Planos</a>
          {/* <a className='btnEntrarContato' key={'ctaHeader'} href={`mailto:cartaoprimazia@gmail.com?subject=Quero um cartão`} target="_blank">Fale com atendente</a> */}
          <a  className='btnEntrarContato' key={'ctaHeader'} href={`https://wa.me/551142562527`} target="_blank">Fale com atendente</a>
        </nav>
      </div>
    </header>
  )
}
