import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const Inicio = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarBDD = async () => {
            const response = await fetch('./json/product_data.json')
            const productos = await response.json()
            console.log(productos)
            const cardProducto = productos.map((item) => 
            <div className='card CardProducto' key={item.id}>
                <div className='card_img'>
                    <img src={"./images/" + item.imagen} alt={item.nombre}/>
                </div>
                <div className='card_header'>
                    <h2>{item.nombre}</h2>
                    <p>{item.modelo}</p>
                    <p className='precio'>{item.precio}</p>
                    <button className='btn'><Link className='nav-link' to={`/producto/${item.id}`}>Ver Producto</Link></button>
                </div>
            </div>
        );
        return cardProducto
        }
        consultarBDD().then(productos => setProductos(productos))

    }, []);

    return (
        <div className=''>
            {productos}
        </div>
    );
}

export default Inicio;
