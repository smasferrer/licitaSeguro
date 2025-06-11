import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Busqueda from './components/busqueda/Busqueda'
import Contacto from './components/contacto/Contacto'
import Ayuda from './components/ayuda/Ayuda'

function App() {

  return (
    <>
      <Navbar />
      {/* Rutas de navegación */}
      <Routes>
        <Route path="/" element={<Busqueda />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ayuda" element={<Ayuda />} />
      </Routes>
    </>
  )
}

export default App
