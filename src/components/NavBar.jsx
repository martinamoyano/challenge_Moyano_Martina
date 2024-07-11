import React from 'react';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <a href="#users">Empleados</a>
        </li>
        <li className="navbar-item">
          <a href="#agregar empleado">Agregar nuevo empleado</a>
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;