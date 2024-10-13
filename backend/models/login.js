const mongoose=require('mongoose');
const{Schema}=mongoose;
const bcrypt=require('bcryptjs');
const loginSchema=new Schema({
    email:{
        type:String,
        required:[true,'Email is required']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
})



const Login=mongoose.model('logins',loginSchema);
module.exports=Login;