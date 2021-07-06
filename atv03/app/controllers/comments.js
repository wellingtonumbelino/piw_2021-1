const Comments = require('../models/comments')
const view = require('../views/comments')
const jwt = require('jsonwebtoken')

module.exports.insertComments = (req, res) => {
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let comment = new Comments({
        text: req.body.text,
        id_post: req.body.id_post,
        id_user: payload.id
    });
    let promise = Comments.create(comment);
    promise.then((comment) => {
        res.status(201).json(view.render(comment));
    }).catch((error) => {
        res.status(404).send("Error")
    })
}

module.exports.listComments = (req, res) => {
    let promise = Comments.find().exec()
    promise.then((comments) => {
        res.status(200).json(view.renderMany(comments))
    }).catch((error) => {
        res.status(404).json({ message: "comments not found" })
    })
}

module.exports.FindCommentsByIdAndDelete = (req, res) => {
    let id = req.params.id
    let token = req.headers.token
    let payload = jwt.decode(token)
    let promise = Comments.findById(id).exec()

    promise.then((comments) => {
        if (comments.id_user == payload.id) {
            let comment_deleted = Comments.findByIdAndDelete(id).exec()
            comment_deleted.then((comment) => {
                res.status(200).json(view.render(comments))
            }).catch((error) => {
                res.status(500).send("Error")
            })
        } else {
            res.status(404).json({ mensagem: "Not Authorized" })
        }
    }
    )
}