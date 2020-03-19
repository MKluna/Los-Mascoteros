import React, { useReducer } from 'react';
import PetReducer from './PetReducer';
import PetContext from './PetContext';
import clienteAxios from '../../config/axios';
import { 
    ADD_PET,
    PET_ERROR
} from '../../types';

const PetState = props => {
    
    const initialState = {
        pets: []
    };

    const [state, dispatch] = useReducer(PetReducer, initialState);

    const addPet = async pet => {
        try {
            const result = await clienteAxios.post('api/pet', pet);
            console.log(result);
            dispatch({
                type: ADD_PET,
                payload: result.data
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            };
            dispatch({
                type: PET_ERROR,
                payload: alert
            });
        }
    };

    return (
        <PetContext.Provider
            value={{
                pets: state.pets,
                addPet
            }}
        >
            {props.children}
        </PetContext.Provider>
    );
}

export default PetState;