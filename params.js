const express = require("express");
const app= express();
const fs = require("fs")

app.get("/products",(req,res)=>{
    fs.readFile("index.json","utf-8",(err,data)=>{
        if(err){
            res.send({
                msg:err.message,
                status:200
            })
        }else{
            res.send({
                data:JSON.parse(data),
                status:400,
                msg:"successful"
            })
        }
    })
})
app.get("/products/:id",(req,res)=>{
    fs.readFile("index.json","utf-8",(err,data)=>{
        
        if(err){
            res.send({
                msg:err.message,
                status:200
            })
        }else{
            var data1=JSON.parse(data)
            var filtered = data1.filter((val)=>{
                return val.id == req.params.id
            })
            res.send({
                data:filtered,
                status:400
                
            })
        }
    })
})


var port=3007
app.listen(port,()=>{
    console.log("Server is running");
    
})
