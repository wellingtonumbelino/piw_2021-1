const Post = require('../models/post')
const view = require('../views/post')
const Comment = require('../models/comments')

module.exports.insertPost = (req, res) => {
    let post = req.body
    let promise = Post.create(post)

    console.log(promise)
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
    let promise = Post.findByIdAndDelete(id).exec()
    promise.then((post) => {
        res.status(200).json(view.render(post))
    }).catch((error) => {
        res.status(400).json({ message: "Post not found", error: error })
    }
    )
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