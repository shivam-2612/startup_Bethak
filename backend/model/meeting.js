const mongoose=require('mongoose');


const Meeting=mongoose.Schema({
    host:{
        type:String,
        require:[true,"email must be provided"]
    },
    password:{
        type:String,
        required:[true,"email must be provieded"]
    },
    participant:{
        type:[String],
        required:[true,"email must be provoed"]
    }
});

const meeting=mongoose.model("Meeting",Meeting);

module.exports=meeting;