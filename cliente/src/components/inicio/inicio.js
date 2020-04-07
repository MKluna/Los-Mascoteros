import React, { Fragment } from 'react';
import NavBarInicio from '../layout/navInicio.js';

const Inicio = () => {
    return (
        <Fragment>
            <NavBarInicio />

            <div className="imagen-portada">
                <div className="texto-portada">
                    <h3>Bienvenido al portal de mascotas</h3>
                    <h1>LOS MASCOTEROS</h1>
                </div>
            </div>

            <div className="container">
                <div className="text-center">
                    <h1>¿Qué es éste portal?</h1>
                    <p>Para que el flaco no tenga ir a pelear con los trapitos para recuperar su caniche</p>
                    <p>aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: aqui no funciona el lorem :frowning: </p>
                </div>

                <br/>

                <div className="text-center">
                    <h1>Mascotas perdidas recientemente</h1>
                    <div class="card-deck text-center">
                                        <div className="contedor-app align-top">
                                            <div className="card modal-sm">
                                            <img src="https://bucket1.glanacion.com/anexos/fotos/02/2749002w380.jpg" className="card-img-top modal-sm" alt="Se Supone que aca va una imagen" />
                                            <div className="card-body">
                                                <h5 className="card-title">Nombre : Pepe</h5>
                                                <p className="card-text">
                                                Hola Soy Pepe 
                                                </p>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
}

export default Inicio;