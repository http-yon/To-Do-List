import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const history = useNavigate()

  return (
    <div className='login'>
      <div className='loginCont'>

        <div className='loginText'>

          <h1> TO-DO LIST</h1>
          <p> https://github.com/http-yon </p>
          <h5>Inicia Sesion</h5>

          <div>
            <label htmlFor="correo"> ingrese correo </label>
            <input type="text" id='correo' placeholder='correo' />
          </div>

          <div>
            <label htmlFor="contraseña"> ingrese contraseña </label>
            <input type="password" placeholder='contraseña' />
          </div>

          <button className='ingresar'  onClick={()=> history("/home")}> ingresar </button>


          <div>
            <button> ingresa con google </button>
          </div>

          <p onClick={()=> history("/register")}> no tienes cuenta? <strong>registrate aqui</strong></p>

        </div>

      </div>
    </div>
  )
}

export default Login
