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
        petEdit: null,
        petLost: null
    };

    const [state, dispatch] = useReducer(PetReducer, initialState);

    const addPet = async (formData) => {
        try {
            
            const result = await clienteAxios.post('api/pet', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            });
            console.log(result.data);
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

    //Obtengo las mascotas que fueron reportadas como perdidas
    const getPetLost = async (id) => {
        try {
            //console.log(id)
            const result = await clienteAxios.get(`/api/pet/lost/${id}`);
            console.log(result);
            dispatch({
                type: GET_PET,
                payload: result.data.petLost
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PetContext.Provider
            value={{
                pets: state.pets,
                petEdit: state.petEdit,
                petLost: state.petLost,
                addPet,
                getPet,
                updatePet,
                deletPet,
                setCurrentPet,
                getPetLost
            }}
        >
            {props.children}
        </PetContext.Provider>
    );
}

export default PetState;