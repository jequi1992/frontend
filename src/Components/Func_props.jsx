import React from 'react'

const Func =(x)=> {

    const {saludar, info} = x
    const {nombre, edad, color} = info
   
    return(
        <button onClick={()=> x.saludar(nombre)}>Saludar</button>
    )
}

export default Func;