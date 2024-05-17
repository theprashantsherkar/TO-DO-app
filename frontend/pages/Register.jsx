import React, { useContext, useState } from 'react'
import '../styles/register.css'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { Context, server } from '../src/main'
import toast from 'react-hot-toast'
// import { server } from '../src/main'




function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isAuthenticated, setisAuthenticated } = useContext(Context)


    const submitHandler = async(e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${server}/users/register`, {
                name, email, password
            }, {
                headers: {
                    "Content-Type": 'application-json',

                },
                withCredentials: true,

            })

            toast.success(data.message)
            setisAuthenticated(true)

        } catch (error) {
            toast.error("something went wrong")
            console.log(error)
            setisAuthenticated(false)
        }
    } 

    if(isAuthenticated) return <Navigate to={'/'}/>
  return (
      <div className="login">
          <section>
              <form onSubmit={submitHandler}>


                  <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Name'
                      required />
                  
                  <br />
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder='Email' />
                  <br />
                  <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder='Password' />
                  <br />
                  <div className="btns">
                      <button type="submit">Register</button>
                  </div>
                  <h4>
                      Or
                  </h4>
                  <div className="link">
                      <Link className='signup' to={'/login'}>Login</Link>
                  </div>
              </form>
          </section>
      </div>
  )
}

export default Register