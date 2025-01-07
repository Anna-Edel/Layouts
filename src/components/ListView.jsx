import React from "react";

export default function ListView ({items}) {

    return (
        <ul className='list-view'>
            {items.map((item) => {
                return (
                    <li className="list-el">
                        <img src={ item.img } alt={ item.name } />
                        <span className='name'>{ item.name }</span>
                        <span className='color'>{ item.color }</span>
                        <span className='price'>${ item.price }</span>
                        <button className='button'>add to cart</button>
                    </li>
                );
            })}
        </ul>
    );
}