import React from 'react'

import './style.sass'

import { FaHeartbeat, FaClinicMedical } from 'react-icons/fa'
import { BsFillPuzzleFill, BsFillCreditCard2BackFill } from 'react-icons/bs'


export default function Sobre() {


  return (
    <>
      <section id="sobre">
        <div className="contentSobre">
          <div className="sobreLeft">
            <h2>Sobre o Cartão Primazia</h2>
            <p>O Cartão Primazia pode ser tanto um cartão de descontos, quanto um cartão de identificação para membros, associados, alunos, etc.</p>
          </div>
          <div className="sobreRight">
            <ul>
              <li><FaHeartbeat/><p>Até 70% de desconto em consultas e exames</p></li>
              <li><FaClinicMedical/><p>Até 60% de desconto em tratamentos odontológicos</p></li>
              <li><BsFillPuzzleFill/><p>Até 50% de desconto em clubes e áreas de lazer</p></li>
              <li><BsFillCreditCard2BackFill/><p>Cartão personalizado </p></li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}
