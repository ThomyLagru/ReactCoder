import React, {createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (product, cant) =>{
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id == product[0])

        const prodCarrito = {...product, cantidad: cant}

        if(indice != -1){
          aux[indice].cantidad = cant
        } else {
          aux.push(prodCarrito)
        }

        setCarrito(structuredClone(aux))
        console.log(carrito);
    }

    const quitarProducto = (product) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id == product.id)

        aux.splice(indice,1)
        setCarrito(structuredClone(aux))
    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext , CarritoProvider};
