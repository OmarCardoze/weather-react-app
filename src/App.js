import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Clima from './Components/Clima';
import Error from './Components/Error';
import './App.css';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false)

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if (consultar) {
        const appId = 'e2170705bd0536ec59d1d8e4b91a904c';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado)
        guardarConsultar(false)
      }

      //Compueba si los resultados son correctos

      if (resultado.cod === "404") {
        guardarError(true)
      } else {
        guardarError(false)
      }

    }
    consultarAPI();
  }, [consultar])

  let componente;

  if (error) {
    componente = <Error mensaje="No se ha encontrado resultados" />
  } else {
    componente = <Clima
      resultado={resultado}
    />
  }


  return (
    <>
      <Header
        titulo="Clima de hoy"
      />

      <div className="App">
        <div>
          <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
          />
        </div>
        <div>
          {componente}
        </div>
      </div>
    </>
  );
}

export default App;
