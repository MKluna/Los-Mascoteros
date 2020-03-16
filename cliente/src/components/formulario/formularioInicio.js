import React from 'react';

const FormularioInicio = () => {
    return ( 
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Buscador de Mascotas Seleccione una Categoria</legend>
            </fieldset>

            <div className="row mt-2">
                <div className="col-md-6 mt-2">
                    <select
                        className="form-control form-select form-option"
                        name="categoria"
                    >
                        <option value="" selected>Seleccione un categoria</option>
                        <option value="Perdidos">Mascotas Perdidas</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <input
                        type="Submit"
                        className="btn btn-block btn-primary"
                        value="Buscar"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default FormularioInicio;