import React from 'react'
import { useState } from 'react';
const Contenedor = () => {
    const[timer,setTimer] = useState(0);
  return (
    <div>
        <h1>Tiempo</h1>
        <span>{Math.floor(timer / 60)}minutos</span>
        <span>{timer % 60} segundos</span>

    </div>
  )
}

export default Contenedor