import {
    ADD_PETLOST,
    GET_PETLOST,
    DELETE_PETLOST
} from '../../types/index'

export default (state,action) => {
    switch (action.type) {
        case ADD_PETLOST: 
            return{
                ...state,
                //petLost: [...state.petLost, action.payload]
            };
        case GET_PETLOST:
            return{
                ...state,
                petLost: action.payload
            }
        default: 
            return state;
    }
};