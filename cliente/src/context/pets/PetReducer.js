import { 
    ADD_PET,
    PET_ERROR
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
        default:
            return state;
    }
};