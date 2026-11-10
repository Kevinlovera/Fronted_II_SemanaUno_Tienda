import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import AgregarProducto from './pages/AgregarProducto';
import Inventario from './pages/Inventario';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';

import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/agregar-producto" element={<AgregarProducto />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;