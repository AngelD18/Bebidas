import React,{useContext} from 'react';
import {RecetasContext} from './context/RecetasContext';
import Receta from './Receta';
const ListadoRecetas = () => {
    //Extraer Recetas
    const{stateRecetas}=useContext(RecetasContext);
    return (
        <div className="row mt-5 justify-content-center align-items-center  ">
            {stateRecetas.map(receta=>(
                <Receta
                key={receta.idDrink}
                receta={receta}
                />
            ))}

        </div>
    ) ;
}
 
export default ListadoRecetas;