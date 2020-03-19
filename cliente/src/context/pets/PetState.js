import React, { useReducer } from 'react';
import PetReducer from './PetReducer';
import PetContext from './PetContext';
import clienteAxios from '../../config/axios';
import { 
    ADD_PET,
    PET_ERROR, 
    VALIDATE_PET_FORM
} from '../../types';

const PetState = props => {
    
    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
        mensaje: null
    };

    const [state, dispatch] = useReducer(PetReducer, initialState);

    // Funciones para el CRUD
    // const mostrarFormulario = () => {
    //     dispatch({
    //         type: FORMULARIO_PROYECTO
    //     });
    // };

    // const obtenerProyectos = async () => {
    //     try {

    //         const resultado = await clienteAxios.get('/api/proyectos');

    //         dispatch({
    //             type: OBTENER_PROYECTOS,
    //             payload: resultado.data.proyectos
    //         });
    //     } catch (error) {
    //         const alerta = {
    //             msg: 'Hubo un error',
    //             categoria: 'alerta-error'
    //         };
    //         dispatch({
    //             type: PROYECTO_ERROR,
    //             payload: alerta
    //         });
    //     }
    // };

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

    const showError = () => {
        dispatch({
            type: VALIDATE_PET_FORM
        });
    };

    // // Selecciona el proyecto que el usuario dio click
    // const proyectoActual = proyectoId => {
    //     dispatch({
    //         type: PROYECTO_ACTUAL,
    //         payload: proyectoId
    //     });
    // };

    // const eliminarProyecto = async proyectoId => {
    //     try {
    //         await clienteAxios.delete(`api/proyectos/${proyectoId}`);
    //         dispatch({
    //             type: ELIMINAR_PROYECTO,
    //             payload: proyectoId
    //         });
    //     } catch (error) {
    //         const alerta = {
    //             msg: 'Hubo un error',
    //             categoria: 'alerta-error'
    //         };
    //         dispatch({
    //             type: PROYECTO_ERROR,
    //             payload: alerta
    //         });
    //     }
    // };
    
    return (
        <PetContext.Provider
            value={{
                addPet,
                showError
            }}
        >
            {props.children}
        </PetContext.Provider>
    );
}

export default PetState;