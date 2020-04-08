import React from 'react';


const LostPet = () => {
    return ( <div className="form-usuario">
    {/* { alerta ? (<div className={`alerta ${alerta.category}`}>{alerta.msg}</div>) : null }   */}
    <div className="contenedor-form sombra-dark">
    <h1>Pérdida de Mascota</h1>
        <form
            // onSubmit={onSubmit}
        >
            <div className="campo-form mt-3">
                <label htmlFor="nombre">Ubicación</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ubicación de la pérdida"
                    // value={name}
                    // onChange={onChange}
                />
            </div>
            <div className="container  ">
                <h2 className="text-center">Nombre: Firulais</h2>
                <section className="">
                <img src="https://bucket1.glanacion.com/anexos/fotos/02/2749002w380.jpg" className="ml-4" alt="Se Supone que aca va una imagen" />
                </section>
            </div>
            <div>
                <label className="mr-5 mt-3">Fecha de Pérdida</label>
                <input
                    type="date"
                    name="birth"
                    id="birth"
                    // value={birth}
                    // onChange={onChange}
                />
            </div>
            <div className="campo-form">
                <input
                    type="submit"
                    className="btn btn-block btn-primario"
                    value="Registrar mascota Perdida"
                />
            </div>
        </form>
    </div>
</div> );
}
 
export default LostPet;