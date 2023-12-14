import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"

const Nav = () => {

  const history = useNavigate()

  return (
    <div className='navbar'>

      <div onClick={()=> history("/home")}>
        <img src={logo} alt="imagen" />
      </div>

      <div className='navText'>
        <NavLink className="Nav" to="/home" > home </NavLink>
        <NavLink className="Nav" to="/login" > login </NavLink>
        <NavLink className="Nav" to="/register" > register </NavLink>
      </div>



    </div>
  )
}

export default Nav
