import React from 'react';
import Botones from './botones';
const Header = () => {
    return (
      <div class="contedor-app align-top">
        <div class="card modal-sm">
          <img src="https://bucket1.glanacion.com/anexos/fotos/02/2749002w380.jpg" class="card-img-top modal-sm" alt="Se Supone que aca va una imagen" />
          <div class="card-body">
            <h5 class="card-title">Nombre : Firulais</h5>
            <p class="card-text">
              Hola Soy Firulais ¿Como Estas?
            </p>
            <Botones/>
          </div>
        </div>
      </div>
    );
}

export default Header;