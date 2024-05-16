import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createContext } from 'react'


export const server = 'https://mytodo-bvur.onrender.com'

export const Context = createContext({
  isAuthenticated: false,
  
})
  

const AppWrapper = () => {
  const [authenticated, setisAuthenticated] = useState(false)
  

  return (
    <Context.Provider value={
      {authenticated,
      setisAuthenticated}
    }>
      <App />

    </Context.Provider >
  )
}
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AppWrapper />
    

  </React.StrictMode>,
)
