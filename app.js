const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

let list=[];
let worklist=[];
app.get('/',(req,res)=>{

    
    var today=new Date();
    var options = { weekday: 'long',month: 'long', day: 'numeric' };
    var day=today.toLocaleDateString("en-US", options);
    res.render("list",{listtitle:day,todolist:list});
});

app.post('/',(req,res)=>{
    var item=req.body.newitem;
    console.log(req.body)
    if(req.body.list=="work")
    {
        worklist.push(item);
        res.redirect("/work");
    }
    else{
        list.push(item);
        res.redirect("/");
    }
    
});

app.get("/work",(req,res)=>
{ 
    res.render("list",{listtitle:"work",todolist:worklist})
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})