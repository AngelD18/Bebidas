import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
//Crear Context
export const CategoriasContext = createContext();
//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    //crear el state del context
    const [stateCategoria, setCategorias] = useState([])
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias =await axios.get(url);
            setCategorias(categorias.data.drinks);

        }
        obtenerCategorias();
    }, []);
    //Ejecutar el llamado a la API
    return (
        <CategoriasContext.Provider
            value={{
                stateCategoria
            }}
        >
            {props.children}

        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;