import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const NuevaCuenta = () => {

const [usuario, guardarUsuario] = useState({
    nombre:'', 
    email:'',
    password:'',
    confirmar: '',
})

const{ nombre, email, password, confirmar } = usuario;


    const onchange = e =>{
            guardarUsuario({
                ...usuario,
                [e.target.name] : e.target.value
            })
    }

    const onSubmit = e =>{
        e.preventDefault();

        //validar

        //Password, min 6 character

        //Password, iguales    


        //pasarlo al action(REDUCER)


    }
    return (  
        <div className="form-usuario">
       <div className="contenedor-form sombra-dark">
            <h1>Obtener una Cuenta</h1>
            <form 
            onSubmit={onSubmit}
            >
                <div className="campo-form">
                     <label htmlFor="nombre">Nombre</label>
                     <input 
                     type="text"//tiene que se rigual htmlFor(eso es para que el usuario le de click label se habilite el imput )
                     id="nombre"
                     name="nombre"
                     placeholder="Tu Nombre"
                     value={nombre}
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
                     <label htmlFor="confirmar">Confirmar Password</label>
                     <input 
                     type="password"
                     id="confirmar"
                     name="confirmar"
                     placeholder="Repite tu Password"                    
                     value={confirmar}
                     onChange={onchange}
                     />
                 </div>
                 <div className="campo-form">
                     <input type="submit" className="btn btn-primario btn-block"
                     value="Registrarme"/>
                 </div>
            </form>
            <Link to={'/'} className="enlace-cuenta">
                volver a Iniciar Sesion
            </Link>
       </div>
   </div>
    );
}
 
export default NuevaCuenta;