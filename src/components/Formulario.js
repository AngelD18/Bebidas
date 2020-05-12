import React, { useContext, useState } from 'react';
import { CategoriasContext } from './context/CategoriasContext';
import { RecetasContext } from './context/RecetasContext';
const Formulario = () => {
    const [stateBusqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });
    const { stateCategoria } = useContext(CategoriasContext);
    const{setBuscarReceta,setConsultar}=useContext(RecetasContext);

    //Funcion para leer contenidos
    const obtenerDatosReceta=e=>{
        setBusqueda({
            ...stateBusqueda,
            [e.target.name]:e.target.value
        })
    }


    return (
        <form
        onSubmit={e=>{
            e.preventDefault();
            setBuscarReceta(stateBusqueda);
            setConsultar(true);
        }}
        className="col-12">
            <fieldset className="text-center">
                <legend>
                    Busqueda por Categoria o Ingrediente
                </legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        className="form-control"
                        name="nombre"
                        type="text"
                        placeholder="Busqueda por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />

                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">--Seleccione Categoria</option>
                        {stateCategoria.map(categoria => (
                            <option
                                key={stateCategoria.strCategory}
                                value={stateCategoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>



                        ))}

                    </select>

                </div>
                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Buscar Bebida"
                    />

                </div>

            </div>

        </form>
    );
}

export default Formulario;