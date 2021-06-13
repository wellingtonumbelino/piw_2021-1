let controller = require("../controllers/comments.js")

module.exports = (app) => {
    app.post("/api/comments", controller.insertComments)
    app.get("/api/comments", controller.listComments)
    app.delete("/api/comments/:id", controller.FindCommentsByIdAndDelete)
}