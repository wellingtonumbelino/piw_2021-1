import './Header.css';
import { Button } from 'react-bootstrap';

export function Header({ user }) {
  return (
    <div className="header-content">
      <header>
        <img src="./facebook-logo.png" />
      </header>

      <div className="header-right">
        <Button variant="outline-primary" size="sm">Compartilhar</Button>
        <Button variant="outline-secondary" size="sm">Postar</Button>
        <span>{user}</span>
      </div>
    </div>
  )
}