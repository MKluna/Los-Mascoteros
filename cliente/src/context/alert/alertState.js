import React, {useReducer} from 'react';
 import alertReducer from './alertReducer';
 import alertContext from './alertContext';
import { SHOW_ALERT,
         HIDE_ALERT
   }from '../../types';

   const AlertState = props =>{
    const initialState = {
        alert: null
    }
    const [state,dispatch] = useReducer(alertReducer, initialState);
     
    //Funciones 
    const  showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg, 
                category
            }
        });

        //Despues de 5 seguno limpia la alerta
        setTimeout(()=> {
            dispatch({
                type: HIDE_ALERT
            })
        },5000)
    }
    return(
        <alertContext.Provider
        value={{
            alerta: state.alerta,
            showAlert
        }}
        >
            {props.children}

        </alertContext.Provider>
    )
   }

   export default AlertState; 