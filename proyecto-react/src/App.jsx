import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Navbar from './components/content/Navbar';
import Inicio from './components/content/Inicio';
import Carrito from './components/content/Carrito';
import Footer from './components/layouts/Footer';
import Producto from './components/content/Producto';
import About from './components/content/About';
import Contacto from './components/content/Contacto';
import './App.css'
import Categoria from './components/content/Categoria';
import OrdenCompra from './components/content/OrdenCompra';
import OrdenFinalizada from './components/content/OrdenFinalizada';



const App = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route  path="/" element={<Inicio/>}/>
            <Route path='/Producto/:id' element={<Producto/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Carrito' element={<Carrito/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Categoria/:id' element={<Categoria/>}/>
            <Route path='*' element={<h1>Error 404</h1>}/>
            <Route path='/OrdenCompra' element={<OrdenCompra/>}/>
            <Route path='/OrdenFinalizada' element={<OrdenFinalizada/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
}

export default App;
