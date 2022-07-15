var express= require("express");
var app= express();
app.set("json space",5);
dotenv.config({path:"./.env"})
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
app.listen(process.env.PORT || 1000,()=>{
    console.log("port 1000")
})