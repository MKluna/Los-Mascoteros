import React, { useState, useContext } from "react";
import AlertContext from '../../context/alert/alertContext';

const NewPet = (props) => {
 
  const alertContext = useContext(AlertContext);
  const { alerta, showAlert} = alertContext;
    
    const [pet, guardarPet] = useState({
        name:'', 
        specie:'',
        birth: new Date()
    })

    const { name, specie, birth } = pet;
   
    const onchange = e =>{
        guardarPet({
            ...pet,
            [e.target.name] : e.target.value
        })
    }
    
    
const onSubmit = e =>{
    e.preventDefault();
//Validar que no haya campos vacios 
if(
name.trim() === ''|| 
specie.trim() === ''||
birth.trim() === ''){
  // console.log('todo los campos son obligatorios')
    showAlert('Todos los campos son obligatorios','alerta-error');
    return;
}

// pasarlo al action 
// guardarPet({
  // name:'', 
  // specie:'',
  // birth: ISODate(""),
// });

}

  return (
    <div className="form-usuario">
       {alerta ? (<div className={`alerta ${alerta.category}`}>{alerta.msg}</div>): null}  
      <div className="contenedor-form sombra-dark">
        <h1>Registrar Mascota</h1>
        <form
        onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text" //tiene que se rigual htmlFor(eso es para que el usuario le de click label se habilite el imput )
              id="name"
              name="name"
              placeholder="Nombre de la mascota"
               value={name}
               onChange={onchange}
            />
          </div>
          <div>
            <label className="mr-4" htmlFor="specie">Especie</label>

            <select
            className="ml-5"
              name="specie"
              id="specie"
            value={specie}
               onChange={onchange}
            >
              <option value="perro" selected>Perro</option>
              <option value="gato">Gato</option>
              <option value="otros">otros</option>
            </select>
          </div>
          <div>
            <label htmlFor="birth" className="mr-5">Fecha de Nacimiento</label>
            <input
              type="date"
              name="birth"
              id="birth"
               value={birth}
               onChange={birth}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrar mi mascota"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPet;
