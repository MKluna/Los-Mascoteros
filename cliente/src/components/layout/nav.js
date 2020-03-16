import React,{Fragment} from 'react';

const NavBar = () => {
    return ( 
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="div-nav">
                    <header className="header-nav">Los Macoteros</header>
                </div>
                <div className="div-nav">
                    <button className="btn btn-info" type="submit">Perfil</button>
                    <button className="btn btn-primary " type="submit">Inicio</button>
                    <button className="btn btn-danger " type="submit">Cerrar Sesion</button>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default NavBar;