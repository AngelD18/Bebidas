import React, { useContext, useState } from 'react';
import { ModalContext } from '../components/context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        overflow:'scroll',
        width: 400,
        height:'100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display:'block'
    },
}));
const style={
    paddingTop:"2rem",
    paddingBottom:"2rem"
}
const Receta = ({ receta }) => {
    //Configuracion material-ui modal
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const { setIdReceta, stateReceta, setReceta } = useContext(ModalContext);
    //Muestra y formatea los ingredientes
    const mostrarIngredientes=stateReceta=>{
        let ingredientes=[];
        for (let i = 1; i < 16; i++) {
            if(stateReceta[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{stateReceta[`strIngredient${i}`]} {stateReceta[`strMeasure${i}`]}</li>
                );
            }
            
        }
        return ingredientes;
    }     
    return (
 
        <div className="col-md-4 mb-3" >
            <div className="card ">
                <h3 className="card-header justify-content-center align-items-center text-center" style={style}>{receta.strDrink}</h3>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}  height="300"/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => {
                            setIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta

                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            setIdReceta(null);
                            setReceta({});
                            handleClose();
                        }}
                    >
                        <div className={classes.paper} style={modalStyle}>
                            <h2>{stateReceta.strDrink}</h2>
                            <h3 className="mt-4">Intrucciones</h3>
                            <p>
                                {stateReceta.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={stateReceta.strDrinkThumb} alt={stateReceta.strDrink} />
                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                {mostrarIngredientes(stateReceta)}


                            </ul>
                        </div>
                    </Modal>

                </div>
            </div>

        </div>
     
    );
}

export default Receta;