import React , {useContext} from 'react';
import Botones from './botones';
import {Link} from 'react-router-dom'
import petContext from "../../context/pets/PetContext";


const Tarjeta = ({pet}) => {
  
    const {name, _id ,} = pet;
    const numeroID = _id;

        //Extraer mascota de state inicial  
const PetContext = useContext(petContext);
const { deletPet} = PetContext;

 
    const onClikEliminar = () =>{
        deletPet(numeroID)
    }
    // console.log(numeroID)
    return (
      <div className="contedor-app align-top">
        <div className="card modal-sm">
          <img src="https://bucket1.glanacion.com/anexos/fotos/02/2749002w380.jpg" className="card-img-top modal-sm" alt="Se Supone que aca va una imagen" />
          <div className="card-body">
            <h5 className="card-title">Nombre : {name}</h5>
            <p className="card-text">
              Hola Soy {name} ¿Como Estas?
            </p>
            <Link to={'/form-pet'} className="btn btn-warning">Editar</Link>
        <button 
        type="button" 
        className="btn btn-danger ml-3 mr-3"
        onClick={onClikEliminar}
        >Eliminar</button>
        <button type="button" className="btn btn-info">Mas Info</button>
          </div>
        </div>
      </div>
    );
}

export default Tarjeta;