import '../styles/Content.css';
import { Button } from 'react-bootstrap';

function Card({ author, description, likes }) {
  return (
    <div className="card-content">
      <h3 className="title">{author}</h3>
      <span className="description">{description}</span>
      <span className="likes">{likes} likes</span>
      <Button variant="outline-light" size="sm">Curtir</Button>
      <div className="card-comments">
        <h4>João</h4>
        <span className="description-comments">Num é que tá?!</span>
      </div>
      <div className="card-comments">
        <h4>Laura</h4>
        <span className="description-comments">Armaria! Nem me diga</span>
      </div>

      <input type="text" placeholder="Escreva sua mensagem" />
    </div>
  )
}

export function Content() {
  let posts = [
    {
      author: "João",
      description: "Menino, tá quente demais hoje",
      likes: 21,
      comments: [
        { sub: "teste" }
      ]
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
  ));

  return (
    <div className="cards">
      {cards}
    </div>
  )
}