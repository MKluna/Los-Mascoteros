import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

const Botones = () => {
    return ( 
        <Fragment>
        <Link to={'/form-pet'} className="btn btn-warning">Editar</Link>
        <button type="button" class="btn btn-danger ml-3 mr-3">Eliminar</button>
        <button type="button" class="btn btn-info">Mas Info</button>
        </Fragment>
     );
}
 
export default Botones;

