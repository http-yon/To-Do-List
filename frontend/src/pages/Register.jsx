import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const history = useNavigate()

    return (
        <div className='register'>
            <div className='registerCont'>
                <div className='registerText'>
                    <h1> TO-DO LIST</h1>
                    <p> https://github.com/http-yon </p>
                    <h5> Registrate aqui</h5>

                    <div>
                        <label htmlFor="nombre"> ingrese nombre </label>
                        <input type="text" id='nombre' placeholder='nombre' />
                    </div>

                    <div>
                        <label htmlFor="apellido"> ingrese apellido </label>
                        <input type="text" id='apellido' placeholder='apellido' />
                    </div>

                    <div>
                        <label htmlFor="correo"> ingrese correo </label>
                        <input type="text" id='correo' placeholder='correo' />
                    </div>

                    <div>
                        <label htmlFor="contraseña"> ingrese contraseña </label>
                        <input type="password" placeholder='contraseña' />
                    </div>

                    <button className='registrar' onClick={()=> history("/home")}> registrarse </button>

                    <div>
                        <button> registrate con google </button>
                    </div>

                    <p onClick={()=> history("/login")}> ya tienes cuenta? <strong>inicia sesion</strong></p>
                </div>



            </div>
        </div>
    )
}

export default Register
