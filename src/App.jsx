import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomeScreen from './pages/Home'
import LoginScreen from './pages/Login'
import { useEffect } from 'react'
import LoggedInRoutes from './routes/LoggedInRoutes'
import NotLoggedInRoutes from './routes/NotLoggedInRoutes'
import { useDispatch } from 'react-redux'
import { addUser } from './store/userReducer'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const token = localStorage.getItem('token')
    
    if (token) {
      fetch('https://www.mockachino.com/06c67c77-18c4-45/login')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('token', data.access_token)
          dispatch(addUser(data.name));
        })
        .catch(err => {
          localStorage.removeItem('token')
          dispatch(addUser(null));
        })
    } else {
      localStorage.removeItem('token')
      dispatch(addUser(null));
    }
  }

  return (
    <div className='App'>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route
            path="/"
            element={
              <HomeScreen />
            }
            exact
          />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route
            path="/login"
            element={
              <LoginScreen />
            }
            exact
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
