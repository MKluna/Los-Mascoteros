import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/authentication/authContext';


const NewAccount = (props) => {
    const alertContext = useContext(AlertContext);
    const { alert, showAlert} = alertContext;
    
    const authContext = useContext(AuthContext);
    const { message , authenticated, registerUser, userAuthenticate } = authContext;
   
    const token = localStorage.getItem('token');
    
    useEffect(() =>{
        if(authenticated && token) {
            props.history.push('/inicio');
        }

        if(message) {
            showAlert(message.msg,message.category);
        }

        userAuthenticate();
        //eslint-disable-next-line
    },[message, authenticated, props.history, token]);
  

    const [user, setUser] = useState({
        name:'', 
        email:'',
        password:'',
        confirm: '',
    });

    const { name, email, password, confirm } = user;

    const onchange = e =>{
            setUser({
                ...user,
                [e.target.name] : e.target.value
            });
    };

    const onSubmit = e =>{
        e.preventDefault();
    
        if (
            name.trim() === ''|| 
            email.trim() === ''||
            password.trim() === ''||
            confirm.trim() === '') {
                showAlert('Todos los campos son obligatorios','alerta-error');
                return;
        }
        
        if (password.length < 6) {
            showAlert('el password debe ser de al menos 6 caracteres','alerta-error');
            return;
        }
        
        if (password !== confirm) {
            showAlert('Las contraseñas no son iguales','alerta-error');
            return; 
        }
        
        registerUser({
            name,
            email,
            password
        });
    };

    return (  
        <div className="form-usuario">
           {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>): null}   
       <div className="contenedor-form sombra-dark">
            <h1>Obtener una Cuenta</h1>
            <form 
            onSubmit={onSubmit}
            >
                <div className="campo-form">
                     <label htmlFor="nombre">Nombre</label>
                     <input 
                     type="text"
                     id="name"
                     name="name"
                     placeholder="Tu Nombre"
                     value={name}
                     onChange={onchange}
                     />
                 </div>

                 <div className="campo-form">
                     <label htmlFor="email">Email</label>
                     <input 
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Tu Email"
                     value={email}
                     onChange={onchange}
                     />
                 </div>
                 <div className="campo-form">
                     <label htmlFor="password">Password</label>
                     <input 
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Tu Password"                    
                     value={password}
                     onChange={onchange}
                     />
                 </div>
                 <div className="campo-form">
                     <label htmlFor="confirm">Confirmar Password</label>
                     <input 
                     type="password"
                     id="confirm"
                     name="confirm"
                     placeholder="Repite tu Password"                    
                     value={confirm}
                     onChange={onchange}
                     />
                 </div>
                 <div className="campo-form">
                     <input type="submit" className="btn btn-primario btn-block"
                     value="Registrarme"/>
                 </div>
            </form>
            <Link to={'/login'} className="enlace-cuenta">
                Iniciar sesión
            </Link>
       </div>
   </div>
    );
}
 
export default NewAccount;