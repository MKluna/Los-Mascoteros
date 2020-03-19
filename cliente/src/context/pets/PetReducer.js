import { 
    ADD_PET,
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_PET:
            return {
                ...state,
                // proyectos: [...state.proyectos, action.payload],
                // formulario: false,
                // errorformulario: false
            };
        // case VALIDATE_PET_FORM:
        //     return {
        //         ...state,
        //         errorformulario: true
        //     };
        // case PET_ERROR:
        //     return {
        //         ...state,
        //         mensaje: action.payload
        //     };
        default:
            return state;
    }
}