import "./header.css"
import buscador from "./_buscador"
import logo from "./_logo"
import perfilusuario from "./_perfilusuario"
import React from 'react'

const header = () => {
  return (
    <>
       <header className="header">
        <div className="d-flex justify-contect-between align-items-center">
        <logo />
        <perfilusuario />
        </div>
        <buscador />
       </header>
    </>
  )
}

export default header