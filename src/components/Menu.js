import React from 'react';
import './styles/Menu.css'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Menu(props){
  return(
   /* <nav className="navbar navbar-expand-lg">
  
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <Link to="/home">
        <li className="nav-item">
          <a className="nav-link" href="#">HOME</a>
        </li>
      </Link>
      <Link to="/sobremí">
        <li className="nav-item">
          <a className="nav-link" href="#">SOBRE MÍ</a>
        </li>
      </Link>
      <Link to="/portfolio">
        <li className="nav-item">
          <a className="nav-link" href="#">PORTFOLIO</a>
        </li>
      </Link>
      <Link to="/contacto">
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACTO</a>
        </li>
      </Link>
    </ul>
  </div>
</nav> */

  <Navbar bg="dark" variant="dark">
    <Link to="/home">
    <Navbar.Brand className="logo" href="#home">Axel Collante</Navbar.Brand>
    </Link>
      <Nav className="mr-auto">
        <Link to="/home">
          <Nav.Link href="#home">HOME</Nav.Link>
        </Link>
        <Link to="/sobremí">
          <Nav.Link href="#features">SOBRE MI</Nav.Link>
        </Link>
        <Link to="/portfolio">
          <Nav.Link href="#pricing">PORTFOLIO</Nav.Link>
        </Link>
        <Link to="/portfolio">
          <Nav.Link href="#pricing">CONTACTO</Nav.Link>
        </Link>
    </Nav>
   
  </Navbar>
  
  


  )
}


export default Menu;