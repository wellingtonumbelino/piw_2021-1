const User = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.login = function (req, res) {
  User.findOne({ email: req.body.email })
    .then(
      function (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign({ id: user._id }, "senha_secreta")
          res.status(200).json({ token: token })
        } else {
          res.status(401).send("credenciais erradas")
        }
      }
    )
    .catch(function (error) {
      res.status(401).send("credenciais erradas")
    })
}

module.exports.check = function (req, res, next) {
  let token = req.headers.token
  jwt.verify(token, "senha_secreta", function (err, decoded) {
    if (err) {
      res.status(401).send("Token invalido!")
    } else {
      next()
    }
  })
}