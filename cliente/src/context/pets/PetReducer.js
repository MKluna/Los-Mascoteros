import { 
    ADD_PET,
    PET_ERROR,
    GET_PET,
    UPDATE_PET
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_PET:
            return {
                ...state,
                pets: [...state.pets, action.payload],
            };
        case PET_ERROR:
            return {
                ...state,
                mensaje: action.payload
            };
        case GET_PET:
            return{
                ...state,
                pets : action.payload
            }
        default:
            return state;
    }
};