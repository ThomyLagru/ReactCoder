import { Link } from 'react-router-dom';
import React from 'react';

const Secciones = () => {
    return (
        <>
        <li className="nav-item">
          <Link className="nav-link active" to={"/Contacto"}>Contacto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/About"}>About</Link>
        </li>
        </>
    );
}

export default Secciones;
