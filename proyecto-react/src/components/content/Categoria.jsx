import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';

const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/product_data.json').then(productos => {
            const ProductosCategoria = productos.filter(producto => producto.idCategoria == id)
            const cardProducto = ProductosCategoria.map(producto => 
                <div className="card ImagenCategoria" key={producto.id}>
                    <img src={"../images/" + producto.imagen} className="card-img-top " alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text"> Modelo: {producto.modelo}</p>
                            <p className="card-text">Tipo: {producto.tipo}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
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
