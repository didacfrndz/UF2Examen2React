import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VistaJuego from './vistas/VistaJuego';
import VistaInstrucciones from './vistas/VistaInstrucciones';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Juego</Link>
            </li>
            <li>
              <Link to="/about">Instrucciones</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<VistaJuego />} />
          <Route path="/about" element={<VistaInstrucciones />} />
        </Routes>
      </Router>
    </>
  )
}

export default App