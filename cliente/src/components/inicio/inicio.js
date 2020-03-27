import React, { Fragment } from 'react';
import NavBarInicio from '../layout/navInicio';
import Tarjeta from '../tarjetas/tarjeta';

import '../../inicio.css';

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
                    <p>aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( aqui no funciona el lorem :( </p>
                </div>

                <br/>

                <div className="text-center">
                    <h1>Mascotas perdidas recientemente</h1>
                    <div class="card-deck text-center">
                        <Tarjeta /> 
                        <Tarjeta /> 
                        <Tarjeta />
                    </div>
                </div>
            </div>


        </Fragment>
    );
    return ( 
    <h1>Los Mascoteros </h1>
     );
}

export default Inicio;