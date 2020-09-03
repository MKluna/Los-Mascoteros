import { 
    REGISTRY_SUCCESSFUL,
    REGISTRY_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
} from '../../types';

export default (state,action) => {
    switch(action.type) {
        case REGISTRY_SUCCESSFUL:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                authenticated: true,
                message: null
            };
        case LOGIN_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false
            };
        case GET_USER:
            return{
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            };
        case LOGIN_ERROR:
        case LOGOUT:
        case REGISTRY_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                authenticated: null,
                user: null,
                message: action.payload,
                loading: false
            };
        default:
            return state;
    }
};