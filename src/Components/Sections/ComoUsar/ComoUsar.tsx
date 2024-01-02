import './style.sass'
export default function ComoUsar() {

    return (
        <div className="col col-2">
            <h2>Como usar</h2>
            <p>
              Ao receber o Cartão de Identificação (Carteirinha) você pode usá-lo em nossa crescente rede de parceiros credenciados. Basta apresentar o cartão junto com um documento de identificação e você terá acesso a descontos diferenciados em saúde, educação, lazer, comércio e outros serviços.
            </p>
            <a className='sobreCTA' key={'BtnCta'} href={`https://wa.me/551142562527`} target="_blank">Quero um cartão</a>
          </div>
    )
}