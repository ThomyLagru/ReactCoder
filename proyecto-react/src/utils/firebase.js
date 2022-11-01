import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-coderhouse-b39c3.firebaseapp.com",
  projectId: "react-coderhouse-b39c3",
  storageBucket: "react-coderhouse-b39c3.appspot.com",
  messagingSenderId: "1081486649861",
  appId: "1:1081486649861:web:5e15ffd3d48800a3ca8a6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDatos = async() => {
    const promise = await fetch("./json/product_data.json")
    const productos = await promise.json()
    productos.forEach( async(producto) => {
        await addDoc(collection(db, "productos"),{
            nombre: producto.nombre,
            modelo: producto.modelo,
            precio: producto.precio,
            tipo: producto.tipo,
            stock: producto.stock,
            imagen: producto.imagen,
            categoria: producto.idCategoria,
            cantidad: producto.cantidad
        })
    })
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    return producto
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
}  

const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}

const createProducto = async (objetoProd) => {
    const estado = await addDoc(collection(db, "productos"), {
        nombre: objetoProd.nombre,
        modelo: objetoProd.modelo,
        precio: objetoProd.precio,
        tipo: objetoProd.tipo,
        stock: objetoProd.stock,
        imagen: objetoProd.imagen,
        categoria: objetoProd.idCategoria
    })
    return estado
}

const createOrdenCompra = async (preTotal, nombre, apellido, email, dni) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
        nombre: nombre,
        apellido: apellido,
        email: email,
        dni: dni,
        precioTotal: preTotal
    })
    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
}


export {cargarBaseDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra}