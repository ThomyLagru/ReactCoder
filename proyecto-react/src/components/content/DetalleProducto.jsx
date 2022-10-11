import React, {useState} from 'react';

const DetalleProducto = ({producto}) => {
  
  const [cantidad, setCantidad] = useState(1)
  const carrito = []

    const agregarAlCarrito = (product, cant) => {
      let indice = carrito.findIndex(producto => producto.id == product.id)
      const prodCarrito = {id: product.id, cantidad: cant}
      if(indice != -1){
        carrito[indice].cantidad = cant
      } else {
        carrito.push(prodCarrito)
      }
      console.log(carrito);
    }
  
  const cantidadProducto = (operacion) => {
    if(operacion == "+"){
      if(cantidad < producto.stock){
        setCantidad(cantidad + 1)
      }
    } else {
      if(cantidad > 1){
        setCantidad(cantidad - 1)
      }
    }
  }
    return (
        <>
        <div className="row g-0">
          <div className="col-md-4 DatosProducto">
            <img src={"../images/" + producto.imagen} className="img-fluid rounded-start" alt={producto.nombre} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className='card-text'>Modelo :{producto.modelo}</p>
              <p className='card-text'>Tipo :{producto.tipo}</p>
              <p className='card-text'>Precio :{producto.precio}</p>
              <p className='card-text'>Stock :{producto.stock}</p>
              <p className='card-text'>{cantidad}</p>

              <button className='btn' onClick={() => cantidadProducto("+")}>+</button>

              <button className='btn' onClick={() => cantidadProducto("")}>-</button>

              <button className='btn' onClick={() => agregarAlCarrito(producto, cantidad)}>Agregar al Carrito</button>
            </div>
          </div>
        </div>
        </>
    );
}

export default DetalleProducto;
