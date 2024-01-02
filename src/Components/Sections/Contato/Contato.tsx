import { BsEnvelope, BsWhatsapp } from 'react-icons/bs'
import './style.sass'

export default function Contato() {
  return (
    <div className="entreContato">
      <div className="contentEntreContato">
        <h2>Entre em contato</h2>
        <ul>
          <li><BsWhatsapp /><a key={'1142561383'} href={`https://wa.me/551142561383`} target="_blank">(11) 4256-1383</a></li>
          <li><BsEnvelope /><a key={'email'} href={`mailto:atendimentocartaoprimazia@gmail.com?subject=Quero um cartão`} target="_blank">atendimentocartaoprimazia@gmail.com</a></li>
          <li className='cta_apresentacao'><a key={'email'} href={`https://www.canva.com/design/DAFhVJFlPWg/1kixVlv-sx68BAtIa617qg/view?utm_content=DAFhVJFlPWg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`} target="_blank">Conheça o Fundador e a História do Primazia</a></li>
        </ul>
      </div>
    </div>
  )
}