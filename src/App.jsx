
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './components/Contato';

export default function App() {
  return (
    <> 
      <Header >
        <nav>
         <NavLink to="/" >Início</NavLink> |{" "}
         <NavLink to="/sobre">Sobre</NavLink> |{" "}
        </nav>
       </Header>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} /> 
        </Routes>
        <Footer year="2026" companyName="PFE 2026.2-Thiago" />
    </>
  );
}

