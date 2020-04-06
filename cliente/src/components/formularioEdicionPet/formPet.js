import React from "react";
import { Link } from "react-router-dom";

const formPet = () => {
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Editar Mascota</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre de la mascota"
            />
          </div>
          <div>
            <label className="mr-4" htmlFor="specie">
              Especie
            </label>
            <select className="ml-5" name="specie" id="specie">
              <option value="">--Seleccione una especie--</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="otros">otros</option>
            </select>
          </div>
          <br />
          <div>
            <label className="mr-5">Fecha de Nacimiento</label>
            <input type="date" name="birth" id="birth" />
          </div>
          <br />
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

export default formPet;
