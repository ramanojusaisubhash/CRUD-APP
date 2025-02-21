const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        unique:true,
        require:true
    },
    age:{
        type:Number,
    }
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema)

module.exports = User;