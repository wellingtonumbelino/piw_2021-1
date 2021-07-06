const controller = require("../controllers/comments.js")
const controllerAuth = require("../controllers/auth")

module.exports = (app) => {
    app.use("/api/comments", controllerAuth.check)
    app.post("/api/comments", controller.insertComments)
    app.get("/api/comments", controller.listComments)
    app.delete("/api/comments/:id", controller.FindCommentsByIdAndDelete)
}