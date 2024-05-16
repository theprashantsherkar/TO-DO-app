import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Header from '../components/Header.jsx'
import Login from '../pages/Login.jsx'
import Profile from '../pages/Profile.jsx'
import Register from '../pages/Register.jsx'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <Router>
        <Header/>
      <Routes>

        <Route path='/' element={ <Home/>} />
        <Route path='/profile' element={ <Profile/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/register' element={ <Register/>} />
      </Routes>
      
      <Toaster />
      
    </Router>
  )
}

export default App