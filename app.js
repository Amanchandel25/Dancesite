const express =require("express");
const path=require("path");
const fs=require("fs");
const app= express();
const port=process.env.port|| 8001;

//express stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded())
//pug stuff
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
//endpoint 
app.get('/',(req,res)=>{
    const params={"title":"my first pug","content":"my first backend and frontend site"}
    res.status(200).render("index.pug",params);
})
//server 
app.listen(port,()=>{
    console.log(`sucesfully port ${port}`)
})
