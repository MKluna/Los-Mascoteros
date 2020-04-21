import React,{Fragment} from 'react';
import NavBar from '../layout/nav';
import FormularioInicio from '../formulario/formularioInicio';

const InicioApp = () => {
    return ( 
        <Fragment>
        <div className="contenedor-app">
            <div className="seccion-principal">
                <NavBar/>
                <div className="container mt-5">
                    <div className="row">
                        <FormularioInicio />
                    </div>
                </div>
                
            </div>
        </div>
        </Fragment>
     );
}
 
export default InicioApp;