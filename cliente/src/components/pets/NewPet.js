import React, { useState, useContext } from "react";
import AlertContext from '../../context/alert/alertContext';
import PetContext from '../../context/pets/PetContext';
import {  } from 'react-router-dom';
// import AuthContext from '../../context/authentication/authContext';
// import imagen1 from './fondomascota.jpg'

const NewPet = props => {
	const initialState = {
		name:'', 
		specie:'',
		birth: ''
	};

	const alertContext = useContext(AlertContext);
	const { alert, showAlert } = alertContext;

	const petContext = useContext(PetContext);
	const { addPet } = petContext;

	// const authContext = useContext(AuthContext);
    // const { userAuthenticate } = authContext;

    // useEffect(() => {
    //     userAuthenticate();
    //     // eslint-disable-next-line
    // }, []);

	const [pet, setPet] = useState(initialState);
	const [image,setImage] = useState('');

	const { name, specie, birth } = pet;

	const formData = new FormData();
	formData.append('name', pet.name);
	formData.append('specie',pet.specie);
	formData.append('birth',pet.birth);
	formData.append('image',image);

	const onChange = e => {
		setPet({
			...pet,
			[e.target.name] : e.target.value
		});
	};

	const onChangeImage = e => {
		//console.log(e.target.files);
		setImage(
			e.target.files[0]
		)
	}

	const onSubmit = e => {
		e.preventDefault();
		
		if (name.trim() === ''|| specie.trim() === ''||	birth.trim() === null) {
			showAlert('Todos los campos son obligatorios','alerta-error');
			return;
		}
		
		addPet(formData);

		setPet(initialState);

		showAlert('Su mascota ha sido registrada','alerta-ok');

		return props.history.push('/profile-user');

	};

	return (
		 
		<div className="form-usuario">
			{/* <image src={imagen1}/> */}
			{ alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null }  
			<div className="contenedor-form sombra-dark">
			<h1 className="mb-5">REGISTRAR MASCOTA</h1>
				<form
					onSubmit={onSubmit}
				>
					<div className="campo-form mb-5">
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
						<label className="mr-4 mb-5" htmlFor="specie">Especie</label>
						<select
							className="ml-5 "
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
					<div>
						<label className="mr-5">Agrega una imagen</label>
						<input
							type="file"
							name="image"
							onChange={onChangeImage}
						/>
					</div>
					<div className="campo-form mt-5">
						<input
							type="submit"
							className="btn btn-block btn-primario"
							value="Registrar mi mascota"
						/>
					</div>
				</form>
			</div>
		</div>
		// </image>
	);
};

export default NewPet;
