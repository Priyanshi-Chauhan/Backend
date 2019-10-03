var express = require("express")
var app = express()
app.set("view engine",'ejs')
var parser = require("body-parser")
var url =parser.urlencoded({extended:false})
app.get('/',(req,res)=> { 
    let color = req.query.color || "red"
    res.render("fbdd",{color:color})
})
app.listen(3009)