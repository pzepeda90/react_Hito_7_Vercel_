import React from 'react'
import { useState } from 'react'
import './register_Page.css'

export default function Formulario() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        setError(false);

        if (!email || !password || !confirmPassword) {
            setError(true);
            alert('Todos los campos son obligatorios');
            return;
        }

        if (password.length < 6) {
            setError(true);
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (password !== confirmPassword) {
            setError(true);
            alert('Las contraseñas no coinciden');
            return;
        }

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert('Datos enviados correctamente');
    }
  return (
    <div className="register-container">
        <div className="register-content">
            <h2 className="text-center mb-4">Registro</h2>
            <form className='formulario' onSubmit={validarDatos}>
                <div className='form__group'>
                    <label>E-mail</label>
                    <input 
                        type="email" 
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

                <div className='form__group'>
                    <label>Confirmar contraseña</label>
                    <input 
                        type="password" 
                        name='confirmPassword'
                        className='form__control' 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                
                <button type='submit' className='btn btn-primary w-100'>Registrarse</button>
            </form>
        </div>
    </div>
  )
}
