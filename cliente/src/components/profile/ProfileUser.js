import React, { Fragment, useContext ,useEffect } from 'react';
import NavBar from '../layout/nav';
import Tarjeta from '../tarjetas/tarjeta';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';
import '../../profile-user.css';
import PetContext from '../../context/pets/PetContext';
import AlertContext from '../../context/alert/alertContext';
import petLostContext from "../../context/petLost/PetLostContext";
const ProfileUser = () => {

    // Extraer informacion de Autenticacion
    const authContext = useContext(AuthContext);
    const { user, userAuthenticate } = authContext;


    const petContext = useContext(PetContext);
    const { pets, getPet } = petContext;

   //Extraer mascota de state inicial  ------------------------------------------------------------------------
   const PetLostContext = useContext(petLostContext);
   const { petLost, getPetLost } = PetLostContext;  
   
//    console.log(petLost);
//    console.log(pets);
    
   const alertContext = useContext(AlertContext);
	const { alert } = alertContext;

    useEffect(()=> {
        userAuthenticate();
        getPet();
        getPetLost();
        //eslint-disable-next-line
    },[]);

    
    return (
        <Fragment>
            <NavBar />
            { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null }
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
                        {user === null ? null : (<h2>{user.name}</h2>)}
                        <p>Pequeña descripcion que se yo</p>
                    </div>
                </div>
    
                <div>
                    {/* listado de mascotas */}
                    <div className="text-center">
                        <h1>Mis Mascotas</h1>
                        <Link to={'/new-pet'} className="btn-profile btn-agregar"
                            >+ Agregar Nueva Mascota
                        </Link>
                    </div>
                    {
                        pets.length == 0 ? 
                        <div className="text-center">
                            <h3>Aún no tienes mascotas registradas?</h3>
                            <h4>Te invitamos a que registres tus mascotas en la plataforma</h4>
                            <Link to={'/new-pet'} className=""
                            >Registra tu primera mascota aquí!
                        </Link>

                        </div>
                        :
                        <div className="card-deck">
                            {pets.map(pet =>(
                                <Tarjeta 
                                    key={pet._id}
                                    pet={pet}
                                /> 
                            ))} 
                        </div>
                        
                    }
    
                </div>
            </div>

        </Fragment>
    );
}
 
export default ProfileUser;