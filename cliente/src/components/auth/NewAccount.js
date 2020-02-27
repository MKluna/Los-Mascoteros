import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/authentication/authContext';




const NewAccount = (props) => {
    const alertContext = useContext(AlertContext);
    const { alerta, showAlert} = alertContext;
    
    const authContext =useContext(AuthContext);
    const { registerUser}=authContext;
   
  

const [usuario, guardarUsuario] = useState({
    name:'', 
    email:'',
    password:'',
    confirm: '',
})

const{ name, email, password, confirm } = usuario;


    const onchange = e =>{
            guardarUsuario({
                ...usuario,
                [e.target.name] : e.target.value
            })
    }

    const onSubmit = e =>{
        e.preventDefault();
 //Validar que no haya campos vacios 
 if(
    name.trim() === ''|| 
    email.trim() === ''||
    password.trim() === ''||
    confirm.trim() === ''){
        showAlert('Todos los campos son obligatorios','alerta-error');
        return;
    }
    //Y Pasword minimo de 6 caracteres
    if(password.length<6){
        showAlert('el password debe ser de al menos 6 caracteres','alerta-error');
        return;
    }
    //Y que los 2 paswswords son iguales 
    if(password !== confirm){
        showAlert('Los passwords no son iguales','alerta-error')
    }
    //pasarlo al action 
    registerUser({
        name,
        email,
        password
    });

    }
    return (  
        <div className="form-usuario">
           
       <div className="contenedor-form sombra-dark">
            <h1>Obtener una Cuenta</h1>
            <form 
            onSubmit={onSubmit}
            >
                <div className="campo-form">
                     <label htmlFor="name">Nombre</label>
                     <input 
                     type="text"//tiene que se rigual htmlFor(eso es para que el usuario le de click label se habilite el imput )
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
                     type="email"//tiene que se rigual htmlFor(eso es para que el usuario le de click label se habilite el imput )
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
                volver a Iniciar Sesion
            </Link>
       </div>
   </div>
    );
}
 
export default NewAccount;