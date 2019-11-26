var express= require("express")
var app= express()
app.set("view engine",'ejs')
const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true})
var session=require("express-session")
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 1160000 } }))
var bodyParser= require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get("/",(req,res)=> {
    res.render("1")

})
app.get("/p",(req,res)=> {
    res.render("2")
    
})
app.get("/pr",(req,res)=> {
    res.render("3")
    
})
app.get("/pri",(req,res)=> {
    res.render("4")
    
})
app.listen(3000)