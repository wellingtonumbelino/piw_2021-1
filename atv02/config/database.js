const mongoose = require('mongoose')

module.exports = function (uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('connected', function () {
        console.log("Mongoose! Connected in " + uri)
    })
    mongoose.connection.on('disconnected', function () {
        console.log("Mongoose! disconnected of " + uri)
    })
    mongoose.connection.on('error', function (error) {
        console.log("Mongoose! connection error " + error)
    })

    mongoose.set('debug', true)

}