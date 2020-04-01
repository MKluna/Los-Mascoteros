import React from 'react';
import Botones from './botones';
const Tarjeta = ({pet}) => {

    // const {pet,key} = props;
    const {name, _id} = pet;
    console.log(name)
    const identificador = _id;
    console.log(identificador)
    return (
      <div className="contedor-app align-top">
        <div className="card modal-sm">
          <img src="https://bucket1.glanacion.com/anexos/fotos/02/2749002w380.jpg" className="card-img-top modal-sm" alt="Se Supone que aca va una imagen" />
          <div className="card-body">
            <h5 className="card-title">Nombre : {name}</h5>
            <p className="card-text">
              Hola Soy {name} ¿Como Estas?
            </p>
            <Botones
            identificador
            />
          </div>
        </div>
      </div>
    );
}

export default Tarjeta;