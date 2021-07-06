const Post = require('../models/post')
const view = require('../views/post')
const Comment = require('../models/comments')
const jwt = require('jsonwebtoken')

module.exports.insertPost = (req, res) => {
    let token = req.headers.token
    let payload = jwt.decode(token)
    let post = new Post({
        text: req.body.text,
        likes: req.body.likes,
        id_user: payload.id
    });

    let promise = Post.create(post)

    promise.then((post) => {
        res.status(201).json(view.render(post))
    }).catch((error) => {
        res.status(400).json({ message: "error message" })
    })

}

module.exports.listPost = (req, res) => {
    let promise = Post.find().exec()
    promise.then((post) => {
        res.status(200).json(view.renderMany(post))
    }).catch((error) => {
        res.status(400).json({ message: "error message" })
    })
}


module.exports.findPostById = (req, res) => {
    let id = req.params.id
    let promise = Post.findById(id).exec()
    promise.then((post) => {
        res.status(200).json(view.render(post))
    }).catch((error) => {
        res.status(404).json({ message: "Post not found", error: error })
    }
    )
}

module.exports.findPostByIdAndDelete = (req, res) => {
    let id = req.params.id
    let token = req.headers.token
    let payload = jwt.decode(token)
    let post = Post.findById(req.params.id).exec()
    post.then((post_user) => {
        if (post_user.id_user == payload.id) {
            let promise = Post.findByIdAndDelete(id).exec()
            promise.then((post_deleted) => {
                res.status(200).json({ mensagem: "Post deleted" })
            }).catch((error) => {
                res.status(500).send("Not Authorized")
            })
        } else {
            res.status(404).json({ mensagem: "Not Authorized" })
        }
    })
}

module.exports.findCommentsByPostId = (req, res) => {
    let id = req.params.id
    let promise = Comment.find({ id_post: id }).exec()
    console.log(promise)
    promise.then((comment) => {
        res.status(200).json(view.renderMany(comment))
    }).catch((error) => {
        console.log(error)
        res.status(404).json({ message: "post not found", error: error })
    }
    )
}