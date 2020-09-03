import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
//import AuthContext from '../../context/authentication/authContext';

const NavBarInicio = () => {
    //const authContext = useContext(AuthContext);
    //const {logout} = authContext;
    return ( 
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="div-nav">
                    <header className="header-nav">Los Macoteros</header>
                </div>
                <div className="div-nav">
                    <Link to={'/login'} className="btn btn-info">Log In</Link>
                    <Link to={'/new-account'} className="btn btn-primary ">Sign Up</Link>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default NavBarInicio;