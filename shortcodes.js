var express= require("express")
var app = express();
app.set("view engine",'ejs')
var parser = require("body-parser")
var url = parser.urlencoded({extended:false})
app.get("/",(req,res)=> {
    res.render("codes",{students:['neetu','mahesh','neelima']})

})
app.get('/',(req,res)=> { 
    let color = req.query.color || "red"
    res.render("codes",{color:color})
})
app.get("/",(req,res)=> {
    res.render("codes",{counter:0})
})
app.post('/',url,(req,res)=> {
    let ctr= Number(req.body.previous || -1)
    if(req.body.i= "j"){
        ctr = ctr+1
    }
    else {
        ctr=ctr-1
    }
    res.render("codes",{counter:ctr})

    })
app.listen(3008)