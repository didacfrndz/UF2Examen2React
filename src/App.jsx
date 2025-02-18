import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import VistaJuego from './vistas/VistaJuego';
import VistaInstrucciones from './vistas/VistaInstrucciones';

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Comecocos</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Juego</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">Instrucciones</Link>
                </li>
              </ul>
            </div>
          </div>
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