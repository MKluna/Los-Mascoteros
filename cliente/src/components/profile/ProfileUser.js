import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/authentication/authContext';
import '../../profile-user.css';

const ProfileUser = () => {

    // Extraer informacion de Autenticacion
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    
    return (
        <Fragment>
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
    
                <div>
                    {/* listado de mascotas */}
                    <div className="text-center">
                        <h1>Mis Mascotas</h1>
                        <a href="#" className="btn btn-agregar"
                            >+ Agregar Nueva Mascota
                        </a>
                    </div>
                    
                    <div class="card-deck">
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    
                </div>
            </div>

        </Fragment>
    );
}
 
export default ProfileUser;