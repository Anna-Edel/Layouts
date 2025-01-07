import React from "react";

export default function CardsView ({cards}){

    return (
        <div className='cards-view'>
            {cards.map((card) => {
                return (
                    <div className="card-el">
                        <h2 className='name'>{ card.name }</h2>
                        <div className='color'>{ card.color }</div>
                        <img className='img' src={ card.img } alt={ card.name }/>
                        <div className="bottom">
                            <span className='price'>${ card.price }</span>
                            <div className='button'>add to cart</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}