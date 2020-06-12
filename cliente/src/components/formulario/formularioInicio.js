import React,{useContext, useEffect} from 'react';
import CardPetLost from '../tarjetas/cardPetLost';
import PetLostContext from '../../context/petLost/PetLostContext';

const FormularioInicio = () => {

    const petLostContext = useContext(PetLostContext);
    const {petLost,getPetLost} = petLostContext

    useEffect(()=> {
        getPetLost();
    },[])

    //console.log(petLost)
    //console.log(petLost[0]);
    return ( 
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Buscador de Mascotas Seleccione una Categoria</legend>
            </fieldset>
            <div className="row mt-2">
                <div className="col-md-6 mt-2">
                    <select
                        className="form-control form-select form-option"
                        name="categoria"
                    >
                        <option value="" selected>Seleccione un categoria</option>
                        <option value="Perdidos">Mascotas Perdidas</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <input
                        type="Submit"
                        className="btn btn-block btn-primary"
                        value="Buscar"
                    />
                </div>
            </div>

            <div className="container">
                <div className="card-deck">
                {petLost.map(pet =>(
                            <CardPetLost 
                                key={pet._id}
                                pet={pet}
                            /> 
                        ))}
                </div>
            </div>
        </form>
     );
}
 
export default FormularioInicio;