import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();

  const handlerLogin = () => {
    fetch('https://www.mockachino.com/06c67c77-18c4-45/login')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('username', data.name)
        navigate("/");
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='login_container'>
      <h2>Login</h2>
      <input placeholder='Username' />
      <input placeholder='Password' />
      <button onClick={handlerLogin}>Ingresar</button>
    </div>
  )
}

export default LoginScreen