let users = [
  { id: 1, nome: "Victor", email: "victor.aefarias@gmail.com", senha: "123" },
  { id: 2, nome: "Wellington", email: "wellingtons@gmail.com", senha: "321" },
  { id: 3, nome: "Leticia", email: "leticia@gmail.com", senha: "456" },
  { id: 4, nome: "Hugo", email: "hugo@gmail.com", senha: "135" },
  { id: 5, nome: "Hilderjares", email: "hilderjares@gmail.com", senha: "2465" },
  { id: 6, nome: "Jean", email: "jean@gmail.com", senha: "w5f325d" },
  { id: 7, nome: "Eduardo", email: "dudu@gmail.com", senha: "dr311s" }
];

// Insere um User
module.exports.insertUser = function (request, response) {
  let user = request.body;
  users.push(user);
  response.status(201).json(user);
}

// Lista todos so alunos
module.exports.listUsers = function (request, response) {
  let list = users;

  if (request.query.nome) {
    let name = request.query.nome;

    list = list.filter((user) => {
      return user.nome == name;
    });
  }

  response.json(list);
}

// Encontra um User por ID
module.exports.findUserById = function (request, response) {
  let id = request.params.id;

  let user = users.find((user) => {
    return user.id == id;
  });

  if (user) {
    response.json(user);
  } else {
    response.status(404).json({ mensagem: "User Not Found" });
  }
}

// Remove um User
module.exports.removeUser = function (request, response) {
  let id = request.params.id;
  users = users.filter((user) => {
    return user.id != id
  });

  response.json({ mensagem: "User Deleted!" });
}