import React, { Fragment, useContext } from 'react';

import NavBar from '../layout/nav';
import Tarjeta from '../tarjetas/tarjeta';
import {Link} from 'react-router-dom'
import AuthContext from '../../context/authentication/authContext';

import '../../profile-user.css';

const ProfileUser = () => {

    // Extraer informacion de Autenticacion
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    
    return (
        <Fragment>
          
          <NavBar />

            <div className="imagen-portada">
                <img src="https://images.wallpapersden.com/image/wxl-bojack-horseman-season-1_68702.jpg"
                    className=""
                />
            </div>
            
            <div className="container">
                <div className="info-perfil">
                    {/* Informaicion del perfil */}                    
                    <div>
                        <img 
                            src="https://external-preview.redd.it/Mu97csuMHib2P34ma_RyJJLKPBdXEnZJZ2wVBuWUaYI.png?auto=webp&s=26e1a352216a6ade12aa0e37e514d1b545f03058" 
                            className="rounded-circle"
                            width="200" height="200"
                        />
                    </div>
                    <div>
                        <h2>Bojack Horseman</h2>
                        <p>Pequeña descripcion que se yo</p>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                    {/* listado de mascotas */}
                    <div className="text-center">
                        <h1>Mis Mascotas</h1>
                        <Link to={'/new-pet'} className="btn-profile btn-agregar"
                            >+ Agregar Nueva Mascota
                        </Link>
                    </div>
                    
                    <div class="card-deck text-center">
                        <Tarjeta /> 
                        <Tarjeta /> 
                        <Tarjeta /> 
                        <Tarjeta /> 
                        <Tarjeta /> 
                    </div>
    
                </div>

        </Fragment>
    );
}
 
export default ProfileUser;