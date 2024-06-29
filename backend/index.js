const express=require('express');
const app=express();
const https=require('https');
const fs=require('fs');
const key=fs.readFileSync(__dirname+"/create-cert-key.pem");
const cert=fs.readFileSync(__dirname+"/create-cert.pem");
const route1=require("./routes");
const DB=require("./util/connectDB");

app.use("/",route1);

const serverComponent=https.createServer({cert,key},app);


// app.listen(8080,()=>{
//     console.log("http://127.0.0.1:8080");
// })

serverComponent.listen(8080,()=>{console.log("https://127.0.0.1:8080")});