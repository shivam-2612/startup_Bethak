const express=require('express');
const app=express();
const https=require('https');
const fs=require('fs');
const key=fs.readFileSync(__dirname+"/create-cert-key.pem");
const cert=fs.readFileSync(__dirname+"/create-cert.pem");
const route1=require("./routes");
const cors=require('cors');

app.use(require('morgan')('dev'))
app.use(express.json());

app.use(express.urlencoded({extended:true}));


const DB=require("./util/connectDB");

app.use("/",route1);

const serverComponent=https.createServer({cert,key},app);
const socketIO=require('socket.io');
const morgan = require('morgan');
const io=socketIO (serverComponent);

io.on("connection",(socket)=>{
    socket.on("disconnect",()=>{
        console.log("disconnected");
    })
})
// app.listen(8080,()=>{
//     console.log("http://127.0.0.1:8080");
// })

serverComponent.listen(8080,()=>{console.log("https://127.0.0.1:8080")});