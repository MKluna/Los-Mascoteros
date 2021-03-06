import React, {useReducer} from 'react';
import PetLostReducer from './PetLostReducer';
import PetLostContext from './PetLostContext';
import clienteAxios from '../../config/axios';

import {
    ADD_PETLOST,
    GET_PETLOST,
} from '../../types';


const PetLostState = props => {
    
    const InitialState = {
        petLost : []
    } 
 
    const [state, dispatch] = useReducer(PetLostReducer, InitialState);

    //Funcion para agregar un mascota reportada como perdida
    const addPetLost = async petLost => {
        try {
            const result = await clienteAxios.post('api/petlost',petLost);
            dispatch({
                type: ADD_PETLOST,
                payload: result.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    //Funcion para mostrar todas las mascotas notificadas como perdidas
    const getPetLost = async ()=> {
        try {
            const result = await clienteAxios.get('/api/petlost')
            dispatch({
                type: GET_PETLOST,
                payload: result.data.petLost
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <PetLostContext.Provider
            value={{
                petLost : state.petLost,
                addPetLost,
                getPetLost
            }}
        >
            {props.children}
        </PetLostContext.Provider>
    )
}

export default PetLostState;