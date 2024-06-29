const Route=require('express').Router();


Route.get("/",(req,res)=>{
    console.log("hahsha");;
    res.send("connce");
})


Route.get("/fun",(req,res)=>{
    console.log("hasha");
    res.send("Hahh");
});






module.exports=Route;