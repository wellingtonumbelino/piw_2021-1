const controllerUsers = require('../controllers/users');
const controllerPosts = require('../controllers/posts');

module.exports = function (app) {
  // GET User
  app.get("/users", controllerUsers.listUsers);
  app.get("/users/:id", controllerUsers.findUserById);

  // POST User
  app.post("/users", controllerUsers.insertUser);

  // DELETE User
  app.delete("/users/:id", controllerUsers.removeUser);

  // GET Post
  app.get("/posts", controllerPosts.listPosts);
  app.get("/posts/:id", controllerPosts.findPostById);

  // POST Post
  app.post("/posts", controllerPosts.insertPost);

  // DELETE Post
  app.delete("/posts/:id", controllerPosts.removePost);

}