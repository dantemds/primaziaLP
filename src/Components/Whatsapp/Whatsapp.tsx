import React from 'react'

import { BsWhatsapp } from 'react-icons/bs'

import './style.sass'

export default function Whatsapp() {
    return (
        <a
            id='whatsapp'
            target={'_blank'}
            href="https://api.whatsapp.com/send?phone=5511913732405&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20advogado.">
            <BsWhatsapp />
        </a>

    )
}
