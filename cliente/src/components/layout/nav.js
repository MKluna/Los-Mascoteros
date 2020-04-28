import React,{Fragment,useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const NavBar = () => {
    const authContext = useContext(AuthContext);
    const {logout} = authContext;
    return ( 
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="div-nav">
                    <header className="header-nav">Los Macoteros</header>
                </div>
                <div className="div-nav">
                    <Link to={'/profile-user'} className="btn btn-info">Perfil</Link>
                    <Link to={'/inicio'} className="btn btn-primary ">Inicio</Link>
                    <button 
                        className="btn btn-danger " 
                        onClick={()=> logout()}
                    >Cerrar Sesion</button>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default NavBar;