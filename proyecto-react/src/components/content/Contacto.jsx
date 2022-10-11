import React from 'react';

const Contacto = () => {

    const datosForm = React.useRef()
    const consultarFormulario = (e) => {
        e.preventDefault()
    }
    return (
        <>
        <form onSubmit={consultarFormulario()} ref={datosForm}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </>
    );
}

export default Contacto;
