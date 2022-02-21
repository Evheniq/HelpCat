import mongoose from 'mongoose'

const catImg = new mongoose.Schema({
    url: {type: String, required: true}
})

export default mongoose.model('catImg', catImg)