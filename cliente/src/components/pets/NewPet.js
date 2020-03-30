import React, { useState, useContext, useEffect } from "react";
import AlertContext from '../../context/alert/alertContext';
import PetContext from '../../context/pets/PetContext';
// import AuthContext from '../../context/authentication/authContext';

const NewPet = () => {
	const initialState = {
		name:'', 
		specie:'',
		birth: new Date()
	};

	const alertContext = useContext(AlertContext);
	const { alerta, showAlert } = alertContext;

	const petContext = useContext(PetContext);
	const { addPet } = petContext;

	// const authContext = useContext(AuthContext);
    // const { userAuthenticate } = authContext;

    // useEffect(() => {
    //     userAuthenticate();
    //     // eslint-disable-next-line
    // }, []);

	const [pet, setPet] = useState(initialState);

	const { name, specie, birth } = pet;

	const onChange = e => {
		setPet({
			...pet,
			[e.target.name] : e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		
		if (name.trim() === ''|| specie.trim() === ''||	birth.trim() === null) {
			showAlert('Todos los campos son obligatorios','alerta-error');
			return;
		}
		
		addPet(pet);

		setPet(initialState);
	};

	return (
		<div className="form-usuario">
			{ alerta ? (<div className={`alerta ${alerta.category}`}>{alerta.msg}</div>) : null }  
			<div className="contenedor-form sombra-dark">
			<h1>Registrar Mascota</h1>
				<form
					onSubmit={onSubmit}
				>
					<div className="campo-form">
						<label htmlFor="nombre">Nombre</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Nombre de la mascota"
							value={name}
							onChange={onChange}
						/>
					</div>
					<div>
						<label className="mr-4" htmlFor="specie">Especie</label>
						<select
							className="ml-5"
							name="specie"
							id="specie"
							value={specie}
							onChange={onChange}
						>
							<option value="">--Seleccione una especie--</option>
							<option value="perro">Perro</option>
							<option value="gato">Gato</option>
							<option value="otros">otros</option>
						</select>
					</div>
					<div>
						<label className="mr-5">Fecha de Nacimiento</label>
						<input
							type="date"
							name="birth"
							id="birth"
							value={birth}
							onChange={onChange}
						/>
					</div>
					<div className="campo-form">
						<input
							type="submit"
							className="btn btn-block btn-primario"
							value="Registrar mi mascota"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewPet;
