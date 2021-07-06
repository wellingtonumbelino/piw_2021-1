let controller = require("../controllers/post.js")
let controllerAuth = require("../controllers/auth")

module.exports = (app) => {
    app.use("/api/post", controllerAuth.check)

    app.post("/api/post", controller.insertPost)
    app.get("/api/post", controller.listPost)
    app.get("/api/post/:id", controller.findPostById)
    app.delete("/api/post/:id", controller.findPostByIdAndDelete)
    app.get("/api/post/:id/comments", controller.findCommentsByPostId)
}