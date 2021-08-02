import { Header } from "../Header";
import '../../styles/Pages.css';
import { NavLink } from "react-router-dom";
import '../../styles/PostPage.css';

export function PostPage({ user }) {
  return (
    <div className="content-post">
      <Header user="Wellington" />
      <hr />
      <textarea name="comment" id="1" cols="68" rows="5" placeholder="Escreva sua Mensagem" />
      <div className="link">
        <NavLink exact to="/">Submeter</NavLink>
      </div>
    </div>
  )
}