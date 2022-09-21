import React from 'react';
import Secciones from './Secciones';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src="" alt="" />
                <a className="navbar-brand" href="../public/index.html">Optica Vedere</a>
            <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
                <Secciones/>
            </ul>
            <ul>
                <li className='carrito'><a href="#">🛒</a></li>
            </ul>
            </div>
            </div>
        </nav>
      </>
    );
}



export default Navbar;
