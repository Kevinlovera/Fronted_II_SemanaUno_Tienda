import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import './App.css';

function App() {
return ( <BrowserRouter> <div className="app"> <header className="header"> <h1>🛒 FreshMarket</h1> <p>Tu supermercado de confianza</p> </header>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route
        path="/preguntas-frecuentes"
        element={<PreguntasFrecuentes />}
      />
    </Routes>

    <nav className="menu-inferior">
      <Link to="/">Inicio</Link>
      <Link to="/quienes-somos">Quiénes somos</Link>
      <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
    </nav>
  </div>
</BrowserRouter>


);
}

export default App;




