import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({busqueda, guardarBusqueda,guardarConsultar}) => {


    const [error, guardarError] = useState(false)

    const { ciudad, pais } = busqueda;

    //función que coloca los elementos del state
    const handleChange = e => {
        // actualizar el state
       guardarBusqueda({
           ...busqueda,
           [e.target.name] : e.target.value
       })
    }


    // cuando el usuario le da submit al form

    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false)

        //pasarlo al componente principal
        guardarConsultar(true);

    }

    return ( 
       <form
            className="form"
            onSubmit={handleSubmit}
       >
           {error ? <Error className="error" mensaje="Todos los campos son obligatorio"/>: null}
           <div>
               <h2>Busca tu ciudad</h2>
               <label htmlFor="ciudad">Ciudad: </label>
               <input
                    type="text"
                    name="ciudad"
                    className="input"
                    id="ciudad"
                    placeholder="Ejem. Chitré"
                    value={ciudad}
                    onChange={handleChange}
               />
           </div>

           <div>
           <label htmlFor="pais">Pais: </label>
                <select
                    name="pais"
                    id="pais"
                    className="select"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">---Seleccione un país---</option>
                    <option value="PA">Panamá</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                </div>
                <div>
                     <input
                    type="submit"
                    className="input"
                    value="Buscar clima"
                />
                </div>
       </form>
     );
}
 
export default Formulario;