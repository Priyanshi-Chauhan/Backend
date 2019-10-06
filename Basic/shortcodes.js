var express= require("express")
var app = express();
app.set("view engine",'ejs')
var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({extended:false})
app.get("/",(req,res)=> {
    res.render("codes",{counter:0})
})
app.post('/',urlencodedParser,(req,res)=> {
    let ctr= Number(req.body.previous || -1)
    if(req.body.i== "i"){
        ctr = ctr+1
    }
    else {
        ctr=ctr-1
    }
res.render("codes",{counter:ctr})

    })
app.listen(3006
    )