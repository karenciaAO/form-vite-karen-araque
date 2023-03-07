import React from 'react'
import { useState } from 'react';
import './Form.css';

const Form = () => {

    const [user, setUser] = useState(
        {
            name: '',
            age: '',
            pokemon: '',
        })

    const [show, setShow]=useState(false);
    const [err, setErr]=useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.direccion.length>6){
            setShow(true)
            setShow(false)

        }else{
            setErr(true)
        }
        console.log(user)
    }


    const resetValues = () => {
        setUser({
            name: '',
            age: '',
            pokemon: '',
        })
    }

    return (
        
        <div className='formulario'>
            
            <h1>Formulario</h1>
            <img src="public/animal.png" alt="imagenPerfil" />
            

            <form onSubmit={(event) => handleSubmit(event)}>

                <label>Nombre</label>
                <input type="text" value={user.name} onChange={(event) => setUser({ ...user, name: event.target.value })} />

                <label>Edad</label>
                <input type="text" value={user.age} onChange={(event) => setUser({ ...user, age: event.target.value })} />

                <label>Animal</label>
                <input type="text" value={user.pokemon} onChange={(event) => setUser({ ...user, pokemon: event.target.value })} />

                <button>Enviar</button>
                
                <button onClick={resetValues}>Reset</button>
            </form>

            <h2>Información ingresada</h2>
            <h4>Nombre: {user.name}</h4>
            <h4>Apellido: {user.age}</h4>
            <h4>Animal: {user.pokemon}</h4>

        </div>
    )
}

export default Form