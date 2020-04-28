import React , {useContext} from 'react';
// import Botones from './botones';
import {Link} from 'react-router-dom';
import petContext from "../../context/pets/PetContext";


const Tarjeta = ({pet}) => {
  
    const {name, _id ,birth} = pet;
    const numeroID = _id;

    //Extraer mascota de state inicial  
    const PetContext = useContext(petContext);
    const { deletPet, setCurrentPet } = PetContext;

 
    const onClikEliminar = () => {
        deletPet(numeroID);
    };

    const selectPet = (pet) => {
      setCurrentPet(pet);
    };
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
            <p>Fecha de nacimiento: {new Date(birth).toISOString().slice(0,10)}</p>
            <Link 
              type="button"
              to={'/form-pet'}
              className="btn btn-warning"
              onClick={() => selectPet(pet)}
            >Editar</Link>
            <button 
              type="button" 
              className="btn btn-danger ml-3 mr-3"
              onClick={onClikEliminar}
            >Eliminar</button>
            <Link 
              type="button"
              to={'/form-petLost'}
              className="btn btn-info"
              onClick={() => selectPet(pet)}
            >Reportar Perdida</Link>
          </div>
        </div>
      </div>
    );
}

export default Tarjeta;