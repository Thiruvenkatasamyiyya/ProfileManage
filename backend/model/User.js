import mongoose  from "mongoose";
import bcrypt from "bcrypt"
const UserSchema = new mongoose.Schema({

    userName : {
        type : String,
        required : [true,"Please Enter the valid userName"],
        maxLenght: [50,"Username cannot exceed over 50characters"]
    },
    email : {
        type : String,
        required : [ true , "Please Fill the EmailId"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Please Enter the vaild password"],
        maxLenght : [50,"Password cannot over the 50characters"]
    },
    avatar : {
        publicId : String,
        url : String
    }

},{timestamps : true})

UserSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
    }
    next()
})

UserSchema.methods.checkPassword = async function(check){
    return await bcrypt.compare(check,this.password)
    
}

export default mongoose.model("User",UserSchema);