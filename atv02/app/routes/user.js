let controller = require("../controllers/user.js")

module.exports = (app) => {
    app.post("/api/user", controller.insertUser)
    app.get("/api/user", controller.listUser)
    app.get("/api/user/:id", controller.findUserById)
    app.delete("/api/user/:id", controller.findUserByIdAndDelete)
    app.get("/api/user/:id/post", controller.findPostByUserId)

}