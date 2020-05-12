import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [stateIdReceta, setIdReceta] = useState(null);
    const [stateReceta, setReceta] = useState({})
    //Consultar ID
    useEffect(() => {
        const obtenetReceta = async () => {
            if (!stateIdReceta) return;
           
            const url = ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${stateIdReceta}`;

            const resultado = await axios.get(url);
            setReceta(resultado.data.drinks[0]);

        }
        obtenetReceta();
    }, [stateIdReceta]);
    return (
        <ModalContext.Provider
            value={{
                stateReceta,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;