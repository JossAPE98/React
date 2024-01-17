import React, { useState } from 'react'

const Contenedor = () => {
    const[show, setShow] = useState(true);
  return (
    <div className="container">
        <button onClick={()=> setShow((show)=> !show)}> Mostrar/Ocultal</button>
        {show ? <h1>Este es un titulo</h1> : null}
    </div>
  );
}

export default Contenedor