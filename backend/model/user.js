const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    email:{
        type:String,
        require:[true,"email must be provided"]
    },
    password:{
        type:String,
        required:[true,"email must be provieded"]
    },
    fullname:{
        type:String,
        required:[true,"email must be provoed"]
    }
});

const user=mongoose.model("userSchema",userSchema);

module.exports=user;