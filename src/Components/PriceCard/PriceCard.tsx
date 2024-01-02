import PropsInterface from './PropsInterface'
import './style.sass'
import {AiFillCheckCircle} from 'react-icons/ai'
export default function PriceCard(props: PropsInterface) {
    const beneficiesArray: () => JSX.Element = () => {
        const listItems: () => JSX.Element[] = () => props.benefities.map((element: string) => {
            return (<li><AiFillCheckCircle color='#FF9903' fontSize={'1.5rem'}/>  <p className='listItemBenefit'><span>{element}</span> </p></li>)
        });
        return (
            <ul>
                {listItems()}
            </ul>
        )
    }

    const taged: () => JSX.Element = () => {
        if (!props.taged) return <></> 
        return (
            <div id='tag'>
                {props.tagName}
            </div>
        )
    }

    const storyTelling: () => JSX.Element = () => {
        const listItems: () => JSX.Element[] = () => props.storyTelling.map((element:string) => {
            return (<p>{element}</p> )
        });
        
        return (<div id='storyComponent'>{listItems()} </div>);
    }
    return (
        <div className={props.taged ? "priceCard" : "priceCard noTagedCard"} >
            {taged()}
            <header><h1>{props.tittle}</h1></header>
            {storyTelling()}
            <div id='benefitComponent'>
                <h3>Benefícios</h3>
                {beneficiesArray()}
            </div>
            <div id='priceComponent'>
                <p><s id='lastPrice'>De R${props.lastPrice}</s></p>
                <div id='accuratePriceComponent'>
                    <span className='orangeText' id='priceText'>R$ {props.accurattePrice}<span id='shortText'>/mês</span></span>
                    <div id='percentComponent'><span>{props.percent}</span></div>
                </div>
            </div>
            <p id='payment'>Pagamento anual R$ {props.annualPayment}</p>
            <button className='orangeButton'><a href={`https://wa.me/551142562527`} target="_blank">Escolher</a></button>
        </div>
    )}