const express = require("express");

const app = express();

app.get("/",async(req,res)=>{
    var a = await fetch("https://fakestoreapi.com/products/");
    var data = await a.json()
    
})
app.get("/cat=m",async(req,res)=>{
    var a = await fetch("https://fakestoreapi.com/products/");
    var data = await a.json()
    var filtered=data.filter((val)=>{
        return val.category=="men's clothing"
    })
    res.send(filtered)
   
}

)
app.get("/cat=w",async(req,res)=>{
    var a = await fetch("https://fakestoreapi.com/products/");
    var data = await a.json()
    var filtered=data.filter((val)=>{
        return val.category=="women's clothing"
    })
    res.send(filtered)
   
}

)
app.get("/cat=e",async(req,res)=>{
    var a = await fetch("https://fakestoreapi.com/products/");
    var data = await a.json()
    var filtered=data.filter((val)=>{
        return val.category=="electronics"
    })
    res.send(filtered)
    
   
}

)
app.get("/cat=w",async(req,res)=>{
    var a = await fetch("https://fakestoreapi.com/products/");
    var data = await a.json()
    var filtered=data.filter((val)=>{
        return val.category=="jewelery"
    })
    res.send(filtered)
   
}

)


var port =3003;

app.listen(port,()=>{
    console.log("Server has started");
    
})