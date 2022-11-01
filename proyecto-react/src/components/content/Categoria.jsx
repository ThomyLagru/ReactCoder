import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';

const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProductos(id).then(productos => {
            const ProductosCategoria = productos.filter(producto => producto[1].idCategoria == id)
            const cardProducto = ProductosCategoria.map(producto => 
                <div className="card ImagenCategoria" key={producto[0].id}>
                    <img src={producto[1].imagen} className="card-img-top " alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text"> Modelo: {producto[1].modelo}</p>
                            <p className="card-text">Tipo: {producto[1].tipo}</p>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    })

    
    return (
        <> 
            {productos}
        </>
    );
}

export default Categoria;
