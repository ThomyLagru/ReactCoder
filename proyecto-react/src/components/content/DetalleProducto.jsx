import React from 'react';

const DetalleProducto = ({producto}) => {
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
              <button>Agregar al Carrito</button>
            </div>
          </div>
        </div>
        </>
    );
}

export default DetalleProducto;
