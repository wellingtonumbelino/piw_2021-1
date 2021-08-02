import '../styles/Header.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Header({ user }) {
  return (
    <div className="header-content">
      <header>
        <img src="./facebook-logo.png" alt="logo-facebook" />
      </header>

      <div className="header-right">
        <Button variant="outline-primary" size="sm">Compartilhar</Button>

        <div className="nav-link">
          <NavLink to="/post-page">Postar</NavLink >
        </div>

        <span>{user}</span>
      </div>
    </div>
  )
}