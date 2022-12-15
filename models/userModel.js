import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'guest'
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    image: {
        type: String,
        default: 'https://i.stack.imgur.com/3402.jpg'
    }
}, {timestamps: true})

let Dataset = mongoose.models.users || mongoose.model('users', userSchema)
export default Dataset