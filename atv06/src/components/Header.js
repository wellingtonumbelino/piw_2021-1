import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import '../styles/Header.css';
import { AuthContext } from '../App';

export function Header({ user }) {
  const { setAuth } = useContext(AuthContext);
  return (
    <div className="header-content">
      <header>
        <img src="./facebook-logo.png" alt="logo-facebook" />
      </header>

      <div className="header-right">
        <div className="nav-link-logout" onClick={() => { setAuth({ token: null, name: null }) }}>
          <NavLink to="/login">Logout</NavLink >
        </div>

        <Button variant="outline-primary" size="sm">Compartilhar</Button>

        <div className="nav-link">
          <NavLink to="/post-page">Postar</NavLink >
        </div>

        <span>{user}</span>
      </div>
    </div>
  )
}