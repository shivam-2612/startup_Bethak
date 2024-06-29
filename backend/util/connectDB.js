const mongoose=require("mongoose");

async function connection(){
    try{
        
        const DB=await mongoose.connect("mongodb://localhost:27017/startupbaithak",{family:4})
        console.log("DB Connected");
    }
    catch(err){
        console.log("Error in DB");
    }
    
};

connection();



