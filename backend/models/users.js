const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username should be present"]
    },
    password:{
        type:String,
        required:[true,"Password should be present"]
    },
    
})
module.exports=mongoose.model('User',userSchema);