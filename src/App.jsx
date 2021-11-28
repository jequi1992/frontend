import React, { Fragment } from 'react'
import Datos from './Components/Datos_props';
import { Auto } from './Components/Est_auto';
import { Contar } from './Components/Est_count';
import Func from './Components/Func_props';
import Obj, { Xt } from './Components/Objeto_props';

const App = () => {

    // props por funciones

    const saludar = (nombre) => {
        alert("Hola " + nombre)
    }

    // props por objetos
    const user = {
        nombre: "Luisa Perez",
        edad: 22,
        color: "Azul"

    }

    // props por variables
    const nombre = "Mariana"
    const edad = "21"
    return (
        <>
            <Datos nombre={nombre} edad={edad} />
            <Obj info={user} />
            <Xt />
            <Func saludar = {saludar} info={user} />
            <br/>
            <Contar/>
            <Auto />
        </>

    )

}

export default App;


