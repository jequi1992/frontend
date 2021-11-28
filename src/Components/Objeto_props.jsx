import React from 'react'

export default function Obj(props) {
    return (
        <>
            <h1>Presentación Personal</h1>
            <p>
                Hola {props.info.nombre} <br/>
                tu edad es {props.info.edad} años <br/>
                y su color favorito es {props.info.color}
            </p>
        </>
    )
}

export function Xt(){
    return(
        <h1>Soy otra funcion</h1>
    )
}

