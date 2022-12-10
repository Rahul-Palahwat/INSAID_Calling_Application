const mongoose=require('mongoose');
// for schemas 
const {Schema}=mongoose;

// this is schema to store data in a proper format 
const UserSchema= new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
    },
    mobile:{
        type:String,
        required: true,
        unique: true
    },
    program:{
        type:String,
        required: true,
    },
    date:{
        type:Date,
        default: Date.now
    },
    
});


const User=mongoose.model('user', UserSchema);
module.exports = User;
 
