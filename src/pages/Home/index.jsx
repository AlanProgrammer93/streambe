import React, { useEffect, useState } from 'react'
import './styles.css'
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../store/userReducer';
import User from '../../components/User';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => (state.user));
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    fetch('https://www.mockachino.com/06c67c77-18c4-45/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
      })
      .catch(err => console.log(err))
  }

  const handlerLogout = () => {
    localStorage.removeItem('token')
    dispatch(addUser(null));
  }

  return (
    <div className='home_container'>
      <div className='home_header'>
        <h2>Hola {user}</h2>
        <div className='logout' onClick={handlerLogout}>
          <FaUserCircle />
          Logout
        </div>
      </div>
      <div className='home_body'>
        <h2>Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th style={{ width: '45%' }}>Nombre</th>
              <th style={{ width: '45%' }}>Cumpleaños</th>
              <th style={{ width: '10%' }}>Foto</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <User key={user.contactId} user={user} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomeScreen