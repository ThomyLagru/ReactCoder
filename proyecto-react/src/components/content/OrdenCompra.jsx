import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const notify = () => {
    toast.success('Orden Generada', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}


const OrdenCompra = () => {
    return (
    <div className=''>
        <form>
            <h1>Checkout</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Numero de Telefono</label>
                <input type="number" className="form-control" id="exampleInputPassword1" />
            </div>


            <button type="submit" className="btn btn-primary" onClick={notify}><Link className='nav-link' to={`/OrdenFinalizada`}>Completar Orden</Link></button>
        </form>
    </div>

    );   
}

export default OrdenCompra;
