import React from 'react'
import { useState } from 'react';
const Botones = () => {
    const[timer,setTimer] = useState(0);
    const tiempoI = () =>{
        window.myTimer = setInterval(()=>{setTimer((timer) => timer + 1);},1000) ;
    };
    const tiempoF = () =>{
        clearInterval(window.myTimer);
    };
    const reinicio = ()=>{
        clearInterval(window.myTimer);
        setTimer(0);
    }
  return (
    <div>
        <button onClick={tiempoI}>Inicio</button>
        <button onClick={tiempoF}>Alto</button>
        <button onClick={reinicio}>Reiniciar</button>
    </div>
  )
}

export default Botones