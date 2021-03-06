const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    fechaNacimiento:{
        type:Date
    },
    registro:{
        type:Date,
        default:Date.now()
    },
    image:{
        type:String
    }
})

module.exports = mongoose.model('User',UsersSchema);