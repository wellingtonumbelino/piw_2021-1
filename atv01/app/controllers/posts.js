let posts = [
  { id: 1, texto: "Hello, how are you?", likes: 6 },
  { id: 2, texto: "I'm fine, and you?", likes: 2 },
  { id: 3, texto: "So-so", likes: 1 }
];

// Insere um User
module.exports.insertPost = function (request, response) {
  let post = request.body;
  posts.push(post);
  response.status(201).json(post);
}

// Lista todos os Posts
module.exports.listPosts = function (request, response) {
  let list = posts;
  response.json(list);
}

// Encontra um User por ID
module.exports.findPostById = function (request, response) {
  let id = request.params.id;

  let post = posts.find((post) => {
    return post.id == id;
  });

  response.json(post);
}

// Remove um User
module.exports.removePost = function (request, response) {
  let id = request.params.id;
  posts = posts.filter((post) => {
    return post.id != id
  });

  response.json({ mensagem: "Post Deleted" });
}