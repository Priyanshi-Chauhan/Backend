var express = require("express")
var app = express()

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
const Schema = mongoose.Schema;
const studentSchema = new Schema({
name:String,
age:Number,
present:Boolean});
const studentModel = mongoose.model("student",studentSchema)
app.get('/',(req,res) => {
    var studentInstance = new studentModel()
    studentInstance.name = "A" 
     studentInstance.age = 20
    studentInstance.present = false
    studentInstance.save(function(err){
        if(err){
            console.log(err)
        }
    })
res.send("done")
})


app.listen(3000)