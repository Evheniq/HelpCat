const mongoose = require('mongoose')

const catImg = new mongoose.Schema({
    url: {type: String, required: true}
})

module.exports = mongoose.model('catUrls', catImg)