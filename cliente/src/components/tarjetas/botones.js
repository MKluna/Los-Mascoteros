import React, { Fragment, useContext } from 'react';
import petContext from "../../context/pets/PetContext";
import {Link} from 'react-router-dom'

const Botones = (props) => {
    const {identificador}=props;
    const petsContext = useContext(petContext);
    const {  deletePet } = petsContext;
// console.log(identificador)
    const BotondeletePet = id => {
        deletePet(id)
    }
    return ( 
        <Fragment>
        <Link to={'/form-pet'} className="btn btn-warning">Editar</Link>
        <button 
        type="button" 
        class="btn btn-danger ml-3 mr-3"
        onClick={()=> BotondeletePet(identificador)}
        >Eliminar</button>
        <button type="button" class="btn btn-info">Mas Info</button>
        </Fragment>
     );
}
 
export default Botones;

