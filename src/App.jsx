import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VistaJuego from './vistas/VistaJuego';
import VistaInstrucciones from './vistas/VistaInstrucciones';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<VistaJuego />} />
          <Route path="/about" element={<VistaInstrucciones />} />
        </Routes>
      </Router>
    </>
  )
}

export default App