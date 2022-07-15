var express= require("express");
var app= express();

let response={
    framework:"express.js",
    langauges:"javascript"
}
app.get("/",(req,res)=>{

    response.message= "express";
    res.status(200).json(response);
})
app.get("/data",(req,res)=>{

    response.message= [1,2,3,4,5,6];
    res.status(200).json(response);
})
