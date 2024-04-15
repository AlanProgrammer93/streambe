import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomeScreen from './pages/Home'
import LoginScreen from './pages/Login'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen />
          }
          exact
        />
        <Route
          path="/login"
          element={
            <LoginScreen />
          }
          exact
        />
      </Routes>
    </div>
  )
}

export default App
