// import React, {createContext, useState} from 'react';

// const CarritoContext = createContext()

// const CarritoProvider = () => {

//     const [carrito, setCarrito] = useState([]);

//     const agregarProducto = (product, cant) =>{
//         const aux = carrito
//         let indice = aux.findIndex(producto => producto.id == product.id)
//         const prodCarrito = {id: product.id, cantidad: cant}
//         if(indice != -1){
//           aux[indice].cantidad = cant
//         } else {
//           aux.push(prodCarrito)
//         }
//         setCarrito(aux)
//         console.log(carrito);
//     }

//     const quitarProducto = (product) => {
//         const aux = carrito
//         let indice = aux.findIndex(producto => producto.id == product.id)

//         aux.splice(indice,1)
//         setCarrito(aux)
//     }

//     return (
//         <>
//             <CarritoContext.Provider value={{carrito, agregarProducto,quitarProducto}}>
//             </CarritoContext.Provider> 
//         </>
//     );
// }

// export {CarritoContext , CarritoProvider};
