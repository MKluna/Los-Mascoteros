import React, { Fragment } from 'react';

const Botones = () => {
    return ( 
        <Fragment>
        <button type="button" class="btn btn-warning">Editar</button>
        <button type="button" class="btn btn-danger ml-3 mr-3">Eliminar</button>
        <button type="button" class="btn btn-info">Mas Info</button>
        </Fragment>
     );
}
 
export default Botones;