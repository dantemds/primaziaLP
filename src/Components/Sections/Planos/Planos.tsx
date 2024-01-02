import React from 'react'

import './style.sass'

import { FaHeartbeat, FaClinicMedical } from 'react-icons/fa'
import { BsFillPuzzleFill, BsFillCreditCard2BackFill } from 'react-icons/bs'
import PriceCard from '../../PriceCard/PriceCard'


export default function Planos() {

  const storyFamilyList: string[] = ['Uma família com 4 integrantes decidiu fazer o Cartão Primazia, porém a vovó e o vovô moram com eles.', 'Com o plano Family é possível adicionar até 9 dependentes com qualquer grau de parentesco.', 'O preço é bem mais em conta, vale muito a pena!']

  const storyPersonalList: string[] = ['O Geniváldisson é solteiro, mora sozinho e está "com uma treta com a família" há algum tempo.', 'Como ele é rancoroso, decidiu fazer Cartão PRIMAZIA Personal já que essa modalidade combina perfeitamente com ele que é solteiro, soltinho, e não tem dependentes.', 'Ele deseja usufruir de toooodos os benefícios, descontos e vantagens, sozinho, sem precisar dividir com mais ningém!']
  
  return (
    <>
      <section id="planos">
        <div className="contentPlanos">
          <PriceCard tagName="Queridão" taged={true} tittle='PRIMAZIA Family' storyTelling={storyFamilyList} benefities={['Descontos imperdíveis', 'Múltiplas formas de pagamento', 'Cartão multibenefício', 'Atendimento em todas as instituições conveniadas', 'Adicione até 9 dependentes']} lastPrice='539,00' accurattePrice='28,99' percent='-64%' annualPayment='347'></PriceCard>

          <PriceCard tagName="" taged={false} tittle='PRIMAZIA Personal' storyTelling={storyPersonalList} benefities={['Descontos imperdíveis', 'Múltiplas formas de pagamento', 'Cartão multibenefício', 'Atendimento em todas as instituições conveniadas', 'Plano individual']} lastPrice='146,00' accurattePrice='8,99' percent='-36%' annualPayment='107'></PriceCard>

        </div>
      </section>

    </>
  )
}
