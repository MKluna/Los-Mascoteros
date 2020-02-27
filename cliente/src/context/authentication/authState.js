import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios';


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
            console.log(respuesta);
            dispacth({
                type: REGISTRY_SUCCESSFUL
            })
            
        } catch (error) {
            console.log(error);
            dispacth({
                type: REGISTRY_ERROR
            })
        }
    }
    
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