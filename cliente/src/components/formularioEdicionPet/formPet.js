import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PetContext from '../../context/pets/PetContext';
import AlertContext from '../../context/alert/alertContext';

const FormPet = props => {

	const petContext = useContext(PetContext);
	const { petEdit, updatePet } = petContext;

	const alertContext = useContext(AlertContext);
	const { alert, showAlert } = alertContext;

	const [pet, setPet] = useState(petEdit);
	const [image, setImage] = useState('');

	const { name, specie, birth } = pet;

	if (!petEdit) return null;

	const handleChange = e => {
		setPet({
			...pet,
			[e.target.name] : e.target.value
		});
	};

	const handleChangeImage = e => {
		setImage(
			e.target.files[0]
		);
	};

	
	const handleSubmit = e => {
		e.preventDefault();
		
		if (name.trim() === ''|| specie.trim() === ''||	birth.trim() === null) {
			showAlert('Todos los campos son obligatorios','alerta-error');
			return;
		}
		
		updatePet(pet);

		showAlert('Los datos de la mascota fueron actualizados','alerta-ok');

		return props.history.push('/profile-user');
	};

	return (
		<div className="form-usuario">
			{ alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null }
			<div className="contenedor-form sombra-dark">
				<h1>Editar Mascota</h1>
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
							onChange={handleChange}
						/>
					</div>
					<div>
						<label className="mr-4" htmlFor="specie">
							Especie
						</label>
						<select 
							className="ml-5" 
							name="specie" 
							id="specie"
							onChange={handleChange}
						>
							<option value="">--Seleccione una especie--</option>
							{ specie === 'perro' ? 
								(<option value="perro" selected>Perro</option>) :
								(<option value="perro" >Perro</option>)
							}
							{ specie === 'gato' ? 
								(<option value="gato" selected>Gato</option>) :
								(<option value="gato" >Gato</option>)
							}
							{ specie === 'otros' ? 
								(<option value="otros" selected>Otros</option>) :
								(<option value="otros" >Otros</option>)
							}
						</select>
					</div>
					<br />
					<div>
						<label className="mr-5">Fecha de Nacimiento</label>
						<input 
							type="date" 
							name="birth" 
							id="birth" 
							value={new Date(birth).toISOString().slice(0,10)} 
							onChange={handleChange}
						/>
					</div>
					<br />
					<div>
						<label className="mr-5">Agrega una imagen</label>
						<input
							type="file"
							name="image"
							encType="multipart/form-data"
							onChange= {handleChangeImage}
						/>
					</div>
					<div className="campo-form">
						<input
							type="submit"
							className="btn btn-block btn-primario"
							value="Editar mi mascota"
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
};

export default FormPet;
