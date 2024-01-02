
import './style.sass'
import imgparceiro from '../../../Assets/Images/Parceiro.jpg'
export default function SejaParceiro() {
  return (
    <div className="col section-parceiro">
      <div className="card-parceiro">
        <img src={imgparceiro} alt="aperto de mãos" />
        <div className="wrap-content-parceiro">
          <h2>Seja um parceiro!</h2>
          <p>Venha construir um propósito conosco. Uma estratégia arrojada e inovadora que tem como finalidade impulsionar as vendas de nossos parceiros.</p>
          <p>Todo mundo gosta de ganhar, certo? Pensando nisso, criamos um sistema único para recompensar as Instituições Afiliadas (igrejas, escolas, clubes, clínicas, laboratórios, entre outras) que aderirem ao Cartão Primazia!</p>
          <button className='CTA'>
            <a className='btnEntrarContato' key={'ctaHeader'} href={`mailto:cartaoprimazia@gmail.com?subject=Quero um cartão`} target="_blank">Quero ser um parceiro</a>
          </button>
        </div>
      </div>
    </div>
  )
}