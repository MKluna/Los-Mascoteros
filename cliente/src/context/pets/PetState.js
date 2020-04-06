import React, { useReducer } from 'react';
import PetReducer from './PetReducer';
import PetContext from './PetContext';
import clienteAxios from '../../config/axios';
import { 
    ADD_PET,
    PET_ERROR,
    GET_PET
} from '../../types';

const PetState = props => {
    
    const initialState = {
        pets: []
    };

    const [state, dispatch] = useReducer(PetReducer, initialState);

    const addPet = async pet => {
        try {
            const result = await clienteAxios.post('api/pet', pet);
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

    const getPet = async () => {
        try {
            const result = await clienteAxios.get('/api/pet');
            //console.log(result.data.mascotas);
            dispatch({
                type: GET_PET,
                payload:result.data.mascotas
            })
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            };
            dispatch({
                type:PET_ERROR,
                payload: alert
            })
        }
    }

    const updatePet = async pet =>{
        try {
            console.log(pet);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PetContext.Provider
            value={{
                pets: state.pets,
                addPet,
                getPet,
                updatePet
            }}
        >
            {props.children}
        </PetContext.Provider>
    );
}

export default PetState;