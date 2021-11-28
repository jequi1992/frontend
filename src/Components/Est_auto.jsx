import React, { useState, useEffect } from 'react'

export const Auto = () => {

    const [Estado, setEstado] = useState(false)

    //////////////

    const [contar, setcontar] = useState(0)

    useEffect(() => {
        console.log(contar);
    }, [Estado])

    //////////////

    const encenderApagar = () => {
        setEstado(!Estado)
        setcontar(contar+1)
    }

    return (
        <>
            <button onClick={encenderApagar}>Encender/Apagar</button>
            <p>El auto esta {Estado ? "encendido" : "apagado"}</p>
            <h4>Click</h4>
        </>

    )
}

