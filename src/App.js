import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './components/context/CategoriasContext';
import RecetasProvider from './components/context/RecetasContext';
import ListadoRecetas from './components/ListadoRecetas';
import ModalProvider from './components/context/ModalContext';


function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListadoRecetas />
          </div>


        </ModalProvider>
      </RecetasProvider>

    </CategoriasProvider>

  );
}

export default App;
