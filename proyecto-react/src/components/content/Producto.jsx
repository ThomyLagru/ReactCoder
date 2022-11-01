import React, {useState,useEffect} from 'react';
import DetalleProducto from './DetalleProducto';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        getProducto(id).then(productos => {setProducto([productos.id, productos.data()])
        })
    }, [])

    
    if(producto.length != 0) {
      return (
        <>
      <div className="card mb-3" style={{maxWidth: '540px'}}>
        <DetalleProducto producto={producto}/>
      </div>
        </>  );
    }
    
  
}

export default Producto;
