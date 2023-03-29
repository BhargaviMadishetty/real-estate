const mongoose = require('mongoose')

const signinSchema = mongoose.Schema({
    userID:{type:String , required:true} ,
    password:{type:String , required:true}

})


const signin = mongoose.model("signin",signinSchema)
module.exports = signin