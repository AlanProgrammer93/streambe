import React, { useEffect, useState } from 'react'
import './styles.css'
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

const HomeScreen = () => {
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

  return (
    <div className='home_container'>
      <div className='home_header'>
        <h2>Hola {user}</h2>
        <div className='logout'>
          <FaUserCircle />
          logout
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
                <tr key={user.contactId}>
                  <td>{`${user.name} ${user.surnames}`}</td>
                  <td>{user.birthDate}</td>
                  <td>
                    {
                      user.photo ? (
                        <img src={user.photo} />
                      ) : (
                        <FaUserCircle />
                      )
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomeScreen