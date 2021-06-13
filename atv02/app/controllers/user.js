const User = require('../models/user')
const view = require('../views/user')
const Post = require('../models/post')
const viewPost = require('../views/post')

module.exports.insertUser = (req, res) => {
    let user = req.body
    let promise = User.create(user)
    
    console.log(promise)
    promise.then((user)=>{
        res.status(201).json(view.render(user))
    }).catch((error)=>{
        res.status(400).json({message: "error message"})
    })

}

module.exports.listUser = (req, res) => {
    let promise = User.find().exec()
    promise.then((user)=>{
        res.status(200).json(view.renderMany(user))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findUserById = (req, res) => {
    let id = req.params.id
    let promise = User.findById(id).exec()
    promise.then((user)=>{
        res.status(200).json(view.render(user))
    }).catch((error)=>{
            res.status(404).json({message: "user not found", error: error})
        }
    )
}


module.exports.findUserByIdAndDelete = (req, res) => {
    let id = req.params.id
    let promise = User.findByIdAndDelete(id).exec()
    promise.then((user)=>{
        res.status(200).json(view.render(user))
    }).catch((error)=>{
            res.status(400).json({message: "user not found", error: error})
        }
    )
}

module.exports.findPostByUserId = (req, res) => {
    let id = req.params.id
    let promise = Post.find({id_user:id}).exec()
    promise.then((post)=>{
        res.status(200).json(viewPost.renderMany(post))
    }).catch((error)=>{
            res.status(400).json({message: "user not found", error: error})
        }
    )
}