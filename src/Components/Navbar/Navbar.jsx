import './Navbar.css';
import {
  Nav
} from 'react-bootstrap';

export const Navbar = ({ page, changePage }) => {

  return (
    <div className="Navbar">
      <img src="https://picsum.photos/100/100" alt="perfil" />
      <div>
        <div className='NavbarTitle'>
          <h1>TOMAS BENJAMIN VASQUEZ</h1>
          <ul>
            <li>TECNICO EN INFORMATICA</li>
            <li>TECNICO UNIVERSITARIO EN PROGRAMACION</li>
            <li>DESARROLLADOR BACKEND SR</li>
          </ul>
        </div>
        <Nav className='NavbarNav'>
          <Nav.Link
            active={page === "home"}
            onClick={() => changePage('home')}>
            HOME
          </Nav.Link>
          <Nav.Link
            active={page === "experience"}
            onClick={() => changePage('experience')}>
            EXPERIENCIA
          </Nav.Link>
          <Nav.Link
            active={page === "studies"}
            onClick={() => changePage('studies')}>
            ESTUDIOS
          </Nav.Link>
          <Nav.Link
            active={page === "skills"}
            onClick={() => changePage('skills')}>
            HABILIDADES
          </Nav.Link>
          <Nav.Link
            active={page === "histories"}
            onClick={() => changePage('histories')}>
            HISTORIAS
          </Nav.Link>
          <Nav.Link
            active={page === "contact"}
            onClick={() => changePage('contact')}>
            CONTACTO
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default Navbar;
