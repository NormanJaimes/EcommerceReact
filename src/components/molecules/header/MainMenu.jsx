import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Inicio</Link>
        </li>
        <li>
          <Link to={'/productos'}>Productos</Link>
        </li>
      </ul>
    </nav>
  );
}
