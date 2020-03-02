import React,{useState} from 'react';
import { Link } from 'react-router-dom';



const Login = () => {

    //STATE PARA INICIAR SESION

   const [user, setuser] = useState({
       email:'',
       password:''
   });

   //EXTRAER DE USUARIOS

   const {email,password}=user;



  const onChangelogin = e => 
  {

    setuser({
        ...user,
        [e.target.name]: e.target.value
    }) 

  };


  //Cuando el usuario quiere iniciar sesion
  const onSubmit = e =>{
      e.preventDefault();


    //Validar Campos vacions


    //Pasarlo al Action




  }


  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form
        onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChangelogin}
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
              onChange={onChangelogin}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            ></input>
          </div>
        </form>
        <Link to={'/new-account'} className="enlace-cuenta">Obtener Cuenta</Link>
      </div>
    </div>
  );
};
 
export default Login;
