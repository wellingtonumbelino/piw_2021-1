const Comments = require('../models/comments')
const view = require('../views/comments')

module.exports.insertComments = (req, res) => {
    let comments = req.body
    let promise = Comments.create(comments)
    promise.then((comments) => {
        res.status(201).json(view.render(comments))
    }).catch((error) => {
        res.status(400).json({ message: "error message" })
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
    let promise = Comments.findByIdAndDelete(id).exec()
    promise.then((comments) => {
        res.status(200).json(view.render(comments))
    }).catch((error) => {
        res.status(404).json({ message: "comments not found", error: error })
    }
    )
}
