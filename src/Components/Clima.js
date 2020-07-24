import React from 'react';

const Clima = ({resultado}) => {

    const { name, main, sys, weather} = resultado;

    const kelvin = 273.15;

    if(!name) return null;

    return ( 
        <div>
            <h2 className="name-city">{name}, {sys.country}</h2>
            <p className="temperatura">{parseFloat(main.temp - kelvin, 10).toFixed(1)}°C</p>
            <p className="estado">{weather[0].description}</p>
        </div>
     );
}
 
export default Clima;