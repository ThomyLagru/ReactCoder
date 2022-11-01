import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { mostrarCarrito } from '../../utils/funcionesUtiles';

const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const productFilt  = carrito.map(producto => 
            <div className="card cardProducto imagen" key={producto.id}>
                    <img src={producto[1].imagen} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <p className="card-text">Cantidad: {producto[1].cantidad}</p>
                            <p className="card-text">Precio Total: {producto[1].precio * producto.cantidad}</p>
                            <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar del Carrito</button>
                            { <button className='btn btn-dark'><Link className='nav-link' to={`/OrdenCompra`}>Checkout</Link></button> }
                    </div>
                </div>)
        setCarritoLocal(productFilt)
    }, [carrito]);


    const app = (carrito.length != 0 ) ? <> {carritoLocal} </>: <></>

    return app
        

}

export default Carrito;
