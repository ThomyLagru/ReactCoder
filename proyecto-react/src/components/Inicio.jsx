import React from 'react';
import product_card from '../data/product_data';

const Inicio = () => {
    console.log(product_card);
    const listItems = product_card.map((item) => 
        <div className='card' key={item.id}>
            <div className='card_img'>
                <img src={item.imagen}/>
            </div>
            <div className='card_header'>
                <h2>{item.nombre}</h2>
                <p>{item.modelo}</p>
                <p className='precio'>{item.precio}</p>
                <div className='btn'>Añadir al carrito</div>
            </div>
        </div>
    );

    return (
        <div className='main'>
            <h3>Anteojos</h3>
            {listItems}
        </div>
    );
}

export default Inicio;
