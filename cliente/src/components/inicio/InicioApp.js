import React,{Fragment} from 'react';
import NavBar from '../layout/nav';
import Sidebar from '../layout/sidebar';

const InicioApp = () => {
    return ( 
        <Fragment>
        <div className="contenedor-app">
            <div className="seccion-principal">
                <NavBar/>
                <Sidebar />
            </div>
        </div>
        </Fragment>
     );
}
 
export default InicioApp;