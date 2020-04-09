import React, { useReducer } from 'react';
import PetReducer from './PetReducer';
import PetContext from './PetContext';
import clienteAxios from '../../config/axios';
import { 
    ADD_PET,
    PET_ERROR,
    GET_PET,
    GET_PET_Actual, 
    DELET_PET,
    UPDATE_PET,
    CURRENT_PET
} from '../../types';

const PetState = props => {
    
    const initialState = {
        pets: [],
        petEdit: null
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
            // console.log(result);
            dispatch({
                type: GET_PET,
                payload:result.data.mascotas
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            };
            dispatch({
                type:PET_ERROR,
                payload: alert
            });
        }
    };
    
    const deletPet = async petId => {
        try {
            await clienteAxios.delete(`/api/pet/${petId}`);  
    
            dispatch({
                type: DELET_PET,
                payload: petId
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            };
            dispatch({
                type:PET_ERROR,
                payload: alert
            });
        }
    };

    const updatePet = async pet => {
        try {
            const result = await clienteAxios.put(`/api/pet/${pet._id}`, pet);
            console.log(result);
            dispatch({
                type: UPDATE_PET,
                payload: result.data.petExist
            });
        } catch (error) {
            console.log(error);
        }
    };

    // Selecciona una mascota para su edicion
    const setCurrentPet = pet => {
        dispatch({
            type: CURRENT_PET,
            payload: pet
        });
    };

    return (
        <PetContext.Provider
            value={{
                pets: state.pets,
                petEdit: state.petEdit,
                addPet,
                getPet,
                updatePet,
                deletPet,
                setCurrentPet
            }}
        >
            {props.children}
        </PetContext.Provider>
    );
}

export default PetState;