import React from 'react';
import { Link } from 'react-router-dom';

const OrdenFinalizada = () => {
    return (
        <div>
            <h1>Su orden fue confirmada</h1>
            <button type="submit" className="btn btn-primary"><Link className='nav-link' to={`/`}>Volver al Inicio</Link></button>
        </div>
    );
}

export default OrdenFinalizada;
