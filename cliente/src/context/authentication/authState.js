import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
    REGISTRY_SUCCESSFUL,
    REGISTRY_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
} from '../../types';


const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated : null,
        user: null,
        message: null,
        loading: true
    };

    const [state,dispatch] = useReducer(AuthReducer, initialState);
    
    const registerUser = async info => {
        try {
            const response = await clienteAxios.post('/api/users', info);
            dispatch({
                type: REGISTRY_SUCCESSFUL,
                payload: response.data
            });
            userAuthenticate();
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category:'alerta-error'
            };
            dispatch({
                type: REGISTRY_ERROR,
                payload: alert
            });
        }
    };
    
    const userAuthenticate = async () =>{
        const token = localStorage.getItem('token');
        
        if (token) {
            tokenAuth(token);
        }

        try {
            const response = await clienteAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });
            
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            });
        }
    };

    const login = async user => {
        try {
            const response = await clienteAxios.post('/api/auth', user);
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            });
            userAuthenticate();
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            };
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    };
    
    const logout = () => {
        dispatch({
            type: LOGOUT
        });
    };

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                userAuthenticate,
                login,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthState;