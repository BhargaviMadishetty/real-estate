const mongoose = require('mongoose')

const signupSchema = mongoose.Schema({
    MailID:{type:String , required:true} ,
    password:{type:String , required:true}

})


const signup = mongoose.model("signup",signupSchema)
module.exports = signup