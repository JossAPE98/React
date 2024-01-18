import React from 'react'

const Componete = ({width: inputWidth}) => {
  return (
    <div>
        <div className="container">
            {inputWidth >=0 && inputWidth <=100 ?(
                <div className="innerContainer" style={{width: `${inputWidth}%`}}>
                    {inputWidth}%
                </div>
            ):(alert("por favor ingrese otro valor"))}
        </div>
    </div>
  )
}

export default Componete