const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: ""
    }, 


}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)
