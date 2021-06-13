let controller = require("../controllers/post.js")

module.exports = (app) => {
    app.post("/api/post", controller.insertPost)
    app.get("/api/post", controller.listPost)
    app.get("/api/post/:id", controller.findPostById)
    app.delete("/api/post/:id", controller.findPostByIdAndDelete)
    app.get("/api/post/:id/comments", controller.findCommentsByPostId)
}