var express= require("express")
var app = express();
app.set("view engine",'ejs')
var parser = require("body-parser")
var url = parser.urlencoded({extended:false})
app.get("/",(req,res)=> {
    res.render("code",{students:['neetu','mahesh','neelima']})

})

app.listen(3010)