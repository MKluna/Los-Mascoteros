import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import PetContext from '../../context/pets/PetContext';
import PetLostContext from '../../context/petLost/PetLostContext';

const Form_petLost = (props) => {

    const petContext = useContext(PetContext);
    const { petLost} = petContext;

    const [pet] = useState(petLost);
    const {name,_id} = pet

    const petLostContext = useContext(PetLostContext);
    const {addPetLost} = petLostContext;

  

    const [petLostState, setPetLost ] = useState({
        pet: _id,
        name: name,
        ubication: '',
        reward: '',
        telefon:'',
        dateLost: ''
    })
    
    const {ubication, reward, telefon, dateLost} = petLostState
    //console.log(pet);

    const onChange = e => {
        setPetLost({
            ...petLostState,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addPetLost(petLostState);

        return props.history.push('/profile-user');
    } 

    return ( 
    <div className="form-usuario">
        
        <div className="contenedor-form sombra-dark">
				<h1>Reportar Perdida</h1>
				<form
                onSubmit={handleSubmit}
				>
					<div className="campo-form">
						<label htmlFor="nombre">Nombre</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
                            placeholder="Nombre de la mascota"
                            disabled
						/>
					</div>

                    <div className="campo-form">
						<label className="mr-5">Fecha de Perdida</label>
						<input
							type="date"
							name="dateLost"
                            id="birth"
                            value={dateLost}
                            onChange={onChange}
						/>
                    </div>

                    <div className="campo-form">
						<label htmlFor="ubication">Ubicacion</label>
						<input
							type="text"
							id="ubication"
							name="ubication"
                            placeholder="Ubicacion del dueño"
                            value={ubication}
                            onChange={onChange}
						/>
					</div>

                    <div className="campo-form">
						<label htmlFor="reward">Recompensa</label>
						<input
							type="text"
							id="reward"
							name="reward"
                            placeholder="Recompensa"
                            value={reward}
                            onChange={onChange}
						/>
					</div>

                    <div className="campo-form">
						<label htmlFor="telefon">Telefono de contacto</label>
						<input
							type="text"
							id="telefon"
							name="telefon"
                            placeholder="Escriba su telefono de contacto"
                            value={telefon}
                            onChange={onChange}
						/>
					</div>
				
					<br />
					<div className="campo-form">
						<input
							type="submit"
							className="btn btn-block btn-primario"
							value="Reportar Perdida"
						/>
					</div>
					<div>
						<Link to={"/profile-user"} className="btn-profile btn-agregar">
							Regresar
						</Link>
					</div>
				</form>
			</div>
    </div> 
);
}
 
export default Form_petLost;