import { 
    REGISTRY_SUCCESSFUL,
    REGISTRY_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
}from '../../types';

export default (state,action) => {
switch(action.type){
    case REGISTRY_SUCCESSFUL:
        localStorage.setItem('token',action.payload.token);
        return{
            ...state,
            authenticated: true,
            message: null
        }
    case REGISTRY_ERROR:
        return{
            ...state,
            token: null,
            message: action.payload
        }
     default:
         return state;

}
}