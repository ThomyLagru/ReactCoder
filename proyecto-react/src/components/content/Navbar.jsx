import { Link } from 'react-router-dom';
import React from 'react';
import Secciones from '../layouts/Secciones';
import Lista from '../layouts/Lista';

const Navbar = () => {
    const listDrop = ["Verano","Primavera","Invierno"]
    return (
      <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src="" alt="" />
                <Link className="navbar-brand" to="/">Optica Vedere</Link>
            <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
                <Secciones/>
                <Lista categorias={listDrop}/>
            </ul>
            <ul>
                <li>
                    <Link className='nav-link' to="/Carrito" >🛒</Link>
                </li>
            </ul>
            </div>
            </div>
        </nav>
      </>
    );
}



export default Navbar;
