import './App.css'
import React from 'react'
import ListaCards from './components/ListaCards';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from './pages/Formulario';
export interface Tarjeta{
  id: number;
  nombre: string;
  potencia: number;
  carga: number;
  velocidad: number;
  foto: string
}

const tarjetas: Tarjeta[] = [
  {
    id: 1,
    nombre: 'GTX 1050',
    potencia: 75,
    carga: 300,
    velocidad: 7,
    foto:"https://www.azurio.com.co/wp-content/uploads/2023/10/Tarjeta-de-video-GEFORCE-GTX-1050-Ti.jpg"
  },
  {
    id: 2,
    nombre: 'RTX 3060',
    potencia: 170,
    carga: 500,
    velocidad: 12,
    foto:"https://m.media-amazon.com/images/I/61XAtpgr1lL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    nombre: 'RTX 3080',
    potencia: 220,
    carga: 750,
    velocidad: 20,
    foto:"https://media.ldlc.com/r374/ld/products/00/05/87/63/LD0005876311_1.jpg"
  },
]

const App: React.FC = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <ListaCards tarjetas={tarjetas}/>
      }/>
      <Route path='/form' element={<Formulario/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
