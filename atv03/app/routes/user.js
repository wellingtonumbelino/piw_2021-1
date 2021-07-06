let controller = require("../controllers/user.js")
let controllerAuth = require("../controllers/auth")

module.exports = (app) => {
    app.post("/api/user/signin", controllerAuth.login)
    app.post("/api/user", controller.insertUser)

    app.use("/api/user", controllerAuth.check)

    app.get("/api/user", controller.listUser)
    app.get("/api/user/:id", controller.findUserById)
    app.delete("/api/user/:id", controller.findUserByIdAndDelete)
    app.get("/api/user/:id/post", controller.findPostByUserId)
}