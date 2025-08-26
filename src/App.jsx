import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import _header from './Views/Header/_header'
import _logo from './Views/Header/_logo'
import _buscador from './Views/Header/_buscador'
import _perfilusuario from './Views/Header/_perfilusuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <_header></_header>
     <_logo></_logo>
     <_buscador></_buscador>
     <_perfilusuario></_perfilusuario>
    </>
  )
}

export default App
