import React from 'react';
import '../App.css';


const Error = ({mensaje}) => {
    return ( 
    <p className="error">{mensaje}</p>
     );
}
 
export default Error;