let express = require('express')
let userRouter = require("../app/routes/user")
let postRouter = require('../app/routes/post')
let commentsRouter = require('../app/routes/comments')

module.exports = function () {
    let app = express()
    app.set("port", 3000)
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('./public'))
    userRouter(app)
    postRouter(app)
    commentsRouter(app)
    return app
}