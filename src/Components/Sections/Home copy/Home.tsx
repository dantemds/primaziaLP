import React from 'react'


import texto1 from '../../../Assets/Images/texto1.jpg'
import texto2 from '../../../Assets/Images/texto2.jpg'
import texto3 from '../../../Assets/Images/texto3.jpg'

import fotoHero from '../../../Assets/Images/home-image.jpg'
import pontos from '../../../Assets/Images/pontos.png'

import imgparceiro from '../../../Assets/Images/Parceiro.jpg'


import './style.sass'

import { BsCheckLg, BsWhatsapp, BsInstagram, BsEnvelope } from 'react-icons/bs'
import PriceCard from '../../PriceCard/PriceCard'

export default function Home() {

  return (
    <>
      <section id='home'>
        <div className='MainContent'>
          <div className="contentLeft">
            <h1>Muito mais que um simples cartão de descontos!</h1>
            <h2>O Cartão Primazia pode ser tanto um cartão de descontos, quanto um cartão de identificação para membros, associados, alunos, etc.</h2>
            <a className='BtnCta' key={'BtnCta'} href={`mailto:cartaoprimazia@gmail.com?subject=Quero um cartão`} target="_blank">Quero um cartão</a>
            <span className='SpanPreco'>Apartir de 49,00 R$ / ano</span>
          </div>
          <div className="contentRight">
            <img id='fotoPontos' src={pontos} alt="" />
            <img id='fotoHero' src={fotoHero} alt="" />
          </div>
        </div>

      </section>
      <div className="BottomContent">
        <div className="wrapCols">

          <div className="col col-1">

            <div className="contentSobre">
              <div className="sobreLeft">
                <div className='fotosDecoracao'></div>
                <img src={texto2} alt="" />
                <img src={texto1} alt="" />
              </div>
              <div className='sobreRight'>
                <h2>Sobre o Cartão Primazia</h2>
                <p>
                  Descontos diferenciados, benefícios e vantagens exclusivas aos seus associados. O Cartão Primazia está sempre em busca de novos parceiros que ofereçam os melhores descontos na compra de produtos e serviços em diversos segmentos.
                </p>
                <p>
                  Um dos grandes diferenciais do Cartão Primazia é o fato de não contar com mensalidades.
                  Sabia que se você tem um cartão de saúde e estiver com o pagamento da sua mensalidade atrasada, quando tiver uma emergência médica não terá acesso aos descontos na sua consulta?
                </p>
                <p>
                  Nesse caso você tem 2 opções: pagar o preço cheio pela consulta ou recorrer ao SUS! Isso sem mencionar a multa pelo atraso no pagamento. Nós optamos por não cobrar mensalidades, pensando justamente em garantir que nossos associados possam receber atendimento com descontos sempre que necessário.
                </p>
              </div>
            </div>

          </div>

          <div className="col col-2">
            <h2>Como usar</h2>
            <p>
              Ao receber o Cartão de Identificação (Carteirinha) você pode usá-lo em nossa crescente rede de parceiros credenciados. Basta apresentar o cartão junto com um documento de identificação e você terá acesso a descontos diferenciados em saúde, educação, lazer, comércio e outros serviços.
            </p>
            <a className='sobreCTA' key={'BtnCta'} href={`mailto:cartaoprimazia@gmail.com?subject=Quero um cartão`} target="_blank">Quero um cartão</a>
          </div>

          <div className="col col-3">
            <div className="wrap-ele-pode-ser">
              <h2>Ele também pode ser...</h2>
              <div className="wrap-itens-pode-ser">
                <div className="wrap-itens">
                  <div className="tipo-cartao">Cartão de Identificação</div>
                  <div className="tipo-cartao">Cartão de Acesso</div>
                  <div className="tipo-cartao">Cartão Fidelidade</div>
                  <div className="tipo-cartao">Cartão Ingresso</div>
                  <div className="tipo-cartao">Cartão de Membros, Alunos ou Associados</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col col-planos">
            <div className="wrap-planos">
              <h2>Planos e pagamentos</h2>
              <div className="wrap-itens-planos">
                <div className="item-plano">
                  <h3>PRIMAZIA PERSONAL</h3>
                  <h4>Dependentes</h4>
                  <p>Individual</p>
                  <h4>Pagamento</h4>
                  <ul>
                    <li><span>R$ 80,00 no Pix ( ou dinheiro)</span></li>
                    <li><span>R$ 85,00 Cartão 30 Dias</span></li>
                    <li><span>R$ 89,90 em 2 X no cartão</span></li>
                    <li><span>R$ 99,00 em 6X no Cartão</span></li>
                    <li><span>R$ 120,00 em 6 X no Boleto : ( com acréscimo de R$ 2,00 por Boleto )</span></li>
                  </ul>
                </div>

                <div className="item-plano">
                  <h3>PRIMAZIA PERSONAL CORP</h3>
                  <h4>Dependentes</h4>
                  <p>Individual</p>
                  <h4>Pagamento</h4>
                  <ul>
                    <li><span>R$ 80,00 no Pix ( ou dinheiro)</span></li>
                    <li><span>R$ 85,00 em 2 X no cartão</span></li>
                    <li><span>R$ 114,00 em seis X no Boleto : ( com acréscimo de R$ 2,00 por Boleto )</span></li>
                  </ul>
                </div>

                <div className="item-plano">
                  <h3>PRIMAZIA FAMILY</h3>
                  <h4>Dependentes</h4>
                  <p>Até 4 Dependentes</p>
                  <h4>Pagamento</h4>
                  <ul>
                    <li><span>Mensalidades de R$ 27,00 no Boleto</span></li>
                    <li><span>R$ 324,00 Anuais (com acréscimo de R$ 2,00 por Boleto )</span></li>
                    <li><span>R$ 291,00 em 6X no cartão</span></li>
                    <li><span>R$ 260,00 no Pix</span></li>
                  </ul>
                </div>

                <div className="item-plano">
                  <h3>PRIMAZIA FAMILY CORP</h3>
                  <h4>Dependentes</h4>
                  <p>Até 4 Dependentes</p>
                  <h4>Pagamento</h4>
                  <ul>
                    <li><span>Mensalidades de R$ 27,00 no Boleto</span></li>
                    <li><span>R$ 324,00 Anuais (com acréscimo de R$ 2,00 por Boleto )</span></li>
                    <li><span>R$ 291,00 em 6X no cartão</span></li>
                    <li><span>R$ 260,00 no Pix</span></li>
                  </ul>
                </div>

                <div className="item-plano">
                  <h3>PRIMAZIA BIG FAMILY</h3>
                  <h4>Dependentes</h4>
                  <p>Até 9 Dependentes</p>
                  <h4>Pagamento</h4>
                  <ul>
                    <li><span>Mensalidades de R$ 49,99 no Boleto</span></li>
                    <li><span>R$ 599,88 Anual (com acréscimo de R$ 2,00 por Boleto)</span></li>
                    <li><span>R$ 531,00 em 6X no cartão</span></li>
                    <li><span>R$ 470,00 em 2X no Cartão</span></li>
                  </ul>
                </div>

                <div className="item-plano">
                  <h3>PRIMAZIA BIG FAMILY CORP</h3>
                  <h4>Dependentes</h4>
                  <p>Até 9 Dependentes</p>
                  <h4>Pagamento</h4>
                  <ul>
                    <li><span>Mensalidade de R$ 47,50 no Boleto</span></li>
                    <li><span>R$ 570,00 Anual (com acréscimo de R$ 2,00 por Boleto)</span></li>
                    <li><span>R$ 500,00 em 6X no cartão</span></li>
                    <li><span>R$ 450,00 em 3X no Cartão</span></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="col section-mvv section-frases">
            <div className="wrap-mvv">
              <div className="item-mvv">
                <h2>O PRIMAZIA</h2>
                <p>Por priorizar nossos Associados, mesmo sendo um único ou uma família numerosa com filhos maiores de idade ou ainda familiares próximos ( pois sabemos que nossos concorrentes não aceitam filhos maiores ou parentes Próximos em seus planos ), O PRIMAZIA nasce com seu maior PROPÓSITO, que é o de Buscar, Garimpar, Negociar e com isso apresentar ao maior número possível de Pessoas, Famílias, Instituições e Parceiros o que há de melhor em Consultas e Exames Médicos, Laboratórios de Análises Clínicas, Clínicas Odontológicas, Oftalmológicas, Estéticas dentre outras especialidades. E ainda Clínicas Veterinárias, Escolas, Academias, Restaurantes e Lanchonetes, Clubes, Casas de Shows, Lojas, Comércios e muitos outros Prestadores de Serviços. E até, infelizmente, num momento de dor com uma Perda de um Familiar, onde o Primazia criou "não um Plano Funerário" que para a maioria tem um alto custo, mas um socorro ou Alívio com grandes benefícios e Descontos e tempo para se organizar num momento que ninguém gostaria de passar."</p>

                <p>Observações Importantes: Se compararmos o Cartão PRIMAZIA com os maiores concorrentes, veremos que ele tem maiores Benefícios e Vantagens Reais ( POIS NÃO ADIANTA UMA CONSULTA MAIS BARATA E SAIR COM UM PEDIDO DE MUITOS EXAMES MUITAS DAS VEZES ATÉ MAIS CAROS QUE VOCÊ CONSEGUIRIA NEGOCIANDO SOZINHO ). Detalhes que deixam nossos Preços ainda  menores que muitos não notam, exemplo: Não temos taxa de Adesão que representa no mínimo mais uma mensalidade no Valor do Plano. Hoje a maioria de nossos concorrentes não oferecem mais pagamentos por Boletos, e o pior ainda, no nosso maior concorrente a Multa por rescisão de contrato é de 50% do Valor das mensalidades não pagas por fidelidade mínima de um Ano de CONTRATO. Já no PRIMAZIA é bem diferente, você só tem que avisar por escrito 30 dias antes para nossa adequação nos sistemas. "NO CARTÃO PRIMAZIA, VOCÊ SEMPRE SERÁ PRIORIZADO EM PRIMEIRO LUGAR".</p>
              </div>
            </div>
          </div>

          <div className="col section-parceiro">
            <div className="card-parceiro">
              <img src={imgparceiro} alt="aperto de mãos" />
              <div className="wrap-content-parceiro">
                <h2>Seja um parceiro!</h2>
                <p>Venha construir um propósito conosco. Uma estratégia arrojada e inovadora que tem como finalidade impulsionar as vendas de nossos parceiros.</p>
                <p>Todo mundo gosta de ganhar, certo? Pensando nisso, criamos um sistema único para recompensar as Instituições Afiliadas (igrejas, escolas, clubes, clínicas, laboratórios, entre outras) que aderirem ao Cartão Primazia!</p>
                <button className='CTA'>Quero ser um parceiro</button>
              </div>
            </div>
          </div>

          <div className="col section-mvv">
            <div className="wrap-mvv">
              <div className="item-mvv">
                <h2>Propósito</h2>
                <p>O maior Propósito do PRIMAZIA é, com seu lucro, ter melhores condições de alcançar um número sempre maior de Pessoas e Famílias. Através de nós sejam Priorizadas com muitas Oportunidades, Benefícios e Vantagens possíveis em todas as áreas de suas vidas ! <br /><br />"TODA PRIMAZIA À DEUS E AO PRÓXIMO, como a nós mesmos."</p>
              </div>
            </div>
          </div>

          <div className="col frase-biblica">
            <p>Amarás ao Senhor teu Deus de todo o teu coração (...) e ao teu próximo como a ti mesmo. (Lucas 10:27)</p>
          </div>

          <div className="col col-4">
            <h2>Entre em contato</h2>
            <ul>
              <li><BsWhatsapp /><a key={'1142562527'} href={`https://wa.me/551142562527`} target="_blank">(11) 4256 - 2527</a></li>
              <li><BsEnvelope /><a key={'email'} href={`mailto:cartaoprimazia@gmail.com?subject=Quero um cartão`} target="_blank">cartaoprimazia@gmail.com</a></li>
              <li className='cta_apresentacao'><a key={'email'} href={`https://www.canva.com/design/DAFTCheybEI/9rmIIIsfzcE1_0pklr_Y4Q/view?utm_content=DAFTCheybEI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`} target="_blank">Acessar apresentação</a></li>
              {/* <li ><a className='linkWpp' key={'11965960347'} href={`https://api.whatsapp.com/send?phone=11965960347`} target="_blank">Fale com atendente</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
