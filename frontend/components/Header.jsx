import React, { useContext } from 'react'
import '../styles/Headers.css'
import { Link } from 'react-router-dom'
import { Context } from '../src/main'

function Header() {
  const { isAuthenticated, setisAuthenticated } = useContext(Context)

  

  return (
    <nav className='header'>
      <div>
        <h2>
          <Link className='title' to='/'>SHERU'S TO-DO</Link>
        </h2>
      </div>

      <article className=''>
        <Link className='links' to='/' >Home</Link>
        <Link className='links' to='/profile' >Profile</Link>
        {
          isAuthenticated ? <Link className='links' to='/logout' >logout</Link> : <Link className='links' to='/login' >Login</Link>
        }
        <Link className='links' to='/register' >Sign In</Link>
      </article>
    </nav>
  )
}

export default Header