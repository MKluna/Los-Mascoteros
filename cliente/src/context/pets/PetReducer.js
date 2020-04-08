import { 
    ADD_PET,
    PET_ERROR,
    GET_PET,
    GET_PET_Actual,
    UPDATE_PET,
    DELET_PET
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
            // console.log(action.payload);
            return{
                ...state,
                pets : action.payload
            }
        case DELET_PET:
        return{
            ...state,
            pets: state.pets.filter(pet => pet._id !== action.payload)
        }
        default:
            return state;
    }
};