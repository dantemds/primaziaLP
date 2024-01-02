import React from 'react'


import texto1 from '../../../Assets/Images/texto1.jpg'
import texto2 from '../../../Assets/Images/texto2.jpg'
import texto3 from '../../../Assets/Images/texto3.jpg'

import fotoPessoa from '../../../Assets/Images/pessoa_home_primazia.png'
import pontos from '../../../Assets/Images/pontos.png'

import imgparceiro from '../../../Assets/Images/Parceiro.jpg'


import './style.sass'

import { BsCheckLg, BsWhatsapp, BsInstagram, BsEnvelope,  } from 'react-icons/bs'
import {AiFillCheckCircle} from 'react-icons/ai'
import PriceCard from '../../PriceCard/PriceCard'

export default function Home() {

  const storyFamilyList: string[] = ['Uma família com 4 integrantes decidiu fazer o Cartão Primazia, porém a vovó e o vovô moram com eles.', 'Com o plano Family é possível adicionar até 9 dependentes com qualquer grau de parentesco.', 'O preço é bem mais em conta, vale muito a pena!']
  
  return (
    <>
      <section id="home">
        <div className="MainContent">
          <div className="contentLeft">
            <h1>Muito mais que um simples cartão de benefício!</h1>
            <h2>Com o Cartão Primazia tenha acesso à saúde, lazer e educação</h2>
            <ul>
              <li><AiFillCheckCircle/><p>Livre de taxas de adesão</p></li>
              <li><AiFillCheckCircle/><p>Sem período de carência</p></li>
              <li><AiFillCheckCircle/><p>Zero taxa de cancelamento</p></li>
            </ul>
          </div>


          <div className="contentRight">

            <div className="valorDestaque">
              <p>A partir de <span className='precoLaranja'>R$ 0,29</span> por dia!</p>
              <div className="garantaSeu"><p>Garanta já o seu</p></div>
            </div>
            <img src={fotoPessoa} alt="" />
          </div>
        </div>
      </section>

      {/* <PriceCard tagName="Queridão" taged={true} tittle='PRIMAZIA Family' storyTelling={storyFamilyList} benefities={['Descontos imperdíveis', 'Múltiplas formas de pagamento']} lastPrice='539,00' accurattePrice='28,99' percent='-64%' annualPayment='347'></PriceCard> */}
    </>
  )
}
