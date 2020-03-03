import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';


import { 
    REGISTRY_SUCCESSFUL,
    REGISTRY_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
}from '../../types';


const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated : null,
        user: null,
        message: null
    }

    const [state,dispacth] = useReducer(AuthReducer, initialState);
    
    const registerUser = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/users',datos);
            console.log(respuesta.data);
            dispacth({
                type: REGISTRY_SUCCESSFUL,
                payload: respuesta.data
            });
            //obtener usuario
            userAuthenticate();
            
        } catch (error) {
            // console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                category:'alerta-error'
            }
            dispacth({
                type: REGISTRY_ERROR,
                payload: alerta
            })
        }
    }
    
    //retorna el usuario autenticado
    const userAuthenticate = async () =>{
        const token = localStorage.getItem('token');
        if(token){
    //         //TODO: funcion para enviar el token por headers 
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth');/*--------------------------------------problem*/
            // console.log(respuesta)
            dispacth({
                type: GET_USER,
                payload: respuesta.data.user
            });
            
        } catch (error) {
            console.log(error.response);
            dispacth({
                type: LOGIN_ERROR
            })
        }
    } 







//     const iniciarSesion = async datos =>{
//         try {
//             const respuesta=await clienteAxios.post('/api/auth',datos);
//             dispatch({
//                 type: LOGIN_EXITOSO,
//                 payload: respuesta.data
//             });
//             //obtenee el usuario
//             usuarioAutenticado();
//         } catch (error) {
//            // console.log(error.response.data.msg );
//       const alert = {
//           msg: error.response.data.msg,
//           categoria: 'alerta-error'
//       }
//       dispatch({
//           type: LOGIN_ERROR,
//           payload: alert
//       })       
      
//         }
//   }
  //cierrar la sesion del usuario
//   const cerrarSesion = () =>{
//       dispatch({
//           type: CERRAR_SESION
//       })
//   }
    return(
        <AuthContext.Provider
        value={{
            token: state.token,
            authenticated: state.authenticated,
            user: state.user,
            message: state.message,
            registerUser
        }}
        >
            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthState;