import React from 'react'
import { useState } from 'react'
import './login.css'

export default function Formulario() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        setError(false);

        if (!email || !password) {
            setError(true);
            alert('Todos los campos son obligatorios');
            return;
        }

        if (password.length < 6) {
            setError(true);
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        setEmail('');
        setPassword('');
        alert('Datos enviados correctamente');
    }
  return (
    <div className="login-container">
        <div className="login-content">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <form className='formulario' onSubmit={validarDatos}>
                <div className='form__group'>
                    <label>E-mail</label>
                    <input 
                        type="text" 
                        name='email'
                        className='form__control' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='form__group'>
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        name='password'
                        className='form__control' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <button type='submit' className='btn btn-primary w-100'>Enviar</button>
            </form>
        </div>
    </div>
  )
}
