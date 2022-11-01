import React, {useState, useEffect} from 'react';
import { getProductos } from '../../utils/firebase';
import {Link} from 'react-router-dom'

const Inicio = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos().then(productos => {
            const cardProducto = productos.map((item) => 
            <div className='card CardProducto' key={item[0].id}>
                <div className='card_img '>
                    <img src={item[1].imagen} className='imagen2' alt={item[1].nombre}/>
                </div>
                <div className='card_header'>
                    <h2>{item[1].nombre}</h2>
                    <p>Modelo:{item[1].modelo}</p>
                    <p>Tipo:{item[1].tipo}</p>
                    <p className='precio'>${item[1].precio}</p>
                    <p>Stock:{item[1].stock}</p>
                    <button className='btn'><Link className='nav-link' to={`/producto/${item[0]}`}>Ver Producto</Link></button>
                </div>
            </div>)
            
            setProductos(cardProducto)
            })
    }, []);



    return (
        <div className=''>
            {productos}
        </div>
    );
}

export default Inicio;
