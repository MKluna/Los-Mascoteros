import React,{useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Login = props => {
	const alertContext = useContext(AlertContext);
	const { alert, showAlert } = alertContext;

	const authContext = useContext(AuthContext);
    const { message, authenticated, login } = authContext;
	
    const [user, setUser] = useState({
    	email:'',
       	password:''
   	});

	const {email, password} = user;
	  
	useEffect(() => {
		if(authenticated) {
            props.history.push('/inicio');
        }

        if(message) {
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    }, [message, authenticated, props.history]);
	
  	const handleChange = e => 
  	{
    	setUser({
        	...user,
        	[e.target.name]: e.target.value
    	});
  	};

  	//Cuando el usuario quiere iniciar sesion
  	const handleSubmit = e => {
      	e.preventDefault();

		//Validar Campos vacions
		if(email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
		}
		
		//Pasarlo al Action
		login({ email, password });
	};


	return (
		<div className="form-usuario">
			{ alert ? ( <div className={`alerta ${alert.categoria}`}>{ alert.msg }</div> ) : null }
			<div className="contenedor-form sombra-dark">
				<h1>Iniciar Sesión</h1>
				<form
				onSubmit={handleSubmit}
				>
				<div className="campo-form">
					<label htmlFor="email">Email</label>
					<input
					type="email"
					id="email"
					name="email"
					placeholder="Tu Email"
					value={email}
					onChange={handleChange}
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
					onChange={handleChange}
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
