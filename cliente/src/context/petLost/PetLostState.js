import React, {useReducer} from 'react';
import PetLostReducer from './PetLostReducer';
import PetLostContext from './PetLostContext';
import clienteAxios from '../../config/axios';

import {
    ADD_PETLOST,
    GET_PETLOST,
    DELETE_PETLOST
} from '../../types';


const PetLostState = props => {
    
    const InitialState = {
        petLost : []
    } 

    const [state, dispatch] = useReducer(PetLostReducer, InitialState);

    //Funcion para agregar un mascota reportada como perdida
    const addPetLost = async petLost => {
        console.log(petLost)
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

    return(
        <PetLostContext.Provider
            value={{
                petLostt : state.petLost,
                addPetLost
            }}
        >
            {props.children}
        </PetLostContext.Provider>
    )
}

export default PetLostState;