const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

function main(){
    mongoose.connect('mongodb+srv://madishetty1999:v6egIdgYf7tskXBj@cluster0.nab0esl.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true ,useUnifiedTopology:true},()=>{
        console.log("Successfully connected to DataBase");
    })
    
}


module.exports = main
