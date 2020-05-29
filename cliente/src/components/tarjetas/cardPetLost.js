import React,{useContext, useEffect} from 'react';
import PetContext from '../../context/pets/PetContext';

const CardPetLost = ({pet}) => {

    const petContext = useContext(PetContext);
    const {pets,getPetLost} = petContext;

    const {_id,ubication,reward,telefon,dateLost}= pet

    useEffect(()=> {
        getPetLost(_id);
        //eslint-disable-next-line
    },[])
    
    // console.log(pets)
    //console.log(_id)
    //console.log(pet);
    return (  
        <div className="contedor-app align-top">
            <div className="card modal-sm">
                <img src="https://bucket1.glanacion.com/anexos/fotos/02/2749002w380.jpg" className="card-img-top modal-sm" alt="Se Supone que aca va una imagen" />
                    <div className="card-body">
                        <h5 className="card-title">Nombre : Prueba</h5>

                        <p className="card-text">
                            Ultima ubicacion avistado: {ubication}
                        </p>
                        <p>Fecha de Perdida: {new Date(dateLost).toISOString().slice(0,10)}</p>
                        <p className="card-text">
                            Contacto: {telefon}
                        </p>
                        <p className="card-text">
                            Recompensa: {reward}
                        </p>
                    </div>
            </div>
      </div>
    );
}
 
export default CardPetLost;