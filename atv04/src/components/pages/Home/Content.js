import './Content.css';
import { Button } from 'react-bootstrap';

function Card({ author, description, likes }) {
  return (
    <div className="card-content">
      <h3 className="title">{author}</h3>
      <span className="description">{description}</span>
      <span className="likes">{likes} likes</span>
      <Button variant="outline-light" size="sm">Curtir</Button>
    </div>
  )
}

export function Content() {
  let posts = [
    {
      author: "João",
      description: "Menino, tá quente demais hoje",
      likes: 21,
    },
    {
      author: "Maria",
      description: "Num aguento mais essa quintura",
      likes: 18,
    },
  ];

  let cards = posts.map((posts) => (
    <Card
      author={posts.author}
      description={posts.description}
      likes={posts.likes}
    />
  )
  );

  return (
    <div className="cards">
      {cards}
    </div>
  )
}