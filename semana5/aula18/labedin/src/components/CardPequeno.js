import React from 'react';
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <div className="cardPequeno">
            <p><b>{ props.tipoDeInfo }</b> { props.descricaoDaInfo }</p>          
        </div>
    )
}

export default CardPequeno;