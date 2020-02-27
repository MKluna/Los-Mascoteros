import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav class="navbar navbar-dark bg-primary">
        <Link class="navbar-brand" to={'/'}>Los Mascoteros</Link>
        <form class="form-inline my-2 my-lg-0">
        <Link class="navbar-brand" to={'/login'}>Iniciar Sesion</Link> 
        <Link class="navbar-brand" to={'/new-account'}>Crear Cuenta</Link>
        </form>
      </nav>
    );
}

export default Header;