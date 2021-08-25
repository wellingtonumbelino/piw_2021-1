import { Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';


import '../styles/Content.css';
import { AuthContext } from '../App';
import { listPosts } from '../api/postsAPI';
import { listComments } from '../api/commentsAPI';

function Card({ idUser, text, likes }) {
  const { auth } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    listComments(auth.token, comments.id_post).then((response) => {
      setComments(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div className="card-content">
      <h3 className="title">{idUser}</h3>
      <span className="description">{text}</span>
      <span className="likes">{likes} likes</span>
      <Button variant="outline-light" size="sm">Curtir</Button>
      <div className="card-comments">
        <h4>{comments.id_user}</h4>
        <span className="description-comments">{comments.text}</span>
      </div>
      <input type="text" placeholder="Escreva sua mensagem" />
    </div>
  )
}

export function Content() {
  const { auth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listPosts(auth.token).then((response) => {
      setPosts(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  let cards = posts.map((posts) => (
    <Card
      idUser={posts.idUser}
      text={posts.text}
      likes={posts.likes}
    />
  ));

  return (
    <div className="cards">
      {cards}
    </div>
  )
}