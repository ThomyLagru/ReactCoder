import React from 'react';
import Form from './Form'
import Secciones from './Secciones';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
                <Secciones/>
            </ul>
                <Form busqueda="Buscar Producto"/>
            </div>
            </div>
        </nav>
      </>
    );
}



export default Navbar;
