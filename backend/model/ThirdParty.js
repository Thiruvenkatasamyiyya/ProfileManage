import mongoose from "mongoose";

const ThirdParty = new mongoose.Schema({
    appName : {
        type : String,
        required : [true,"Mention name of the application"],
        unique : true,

    },
    redirectUrl: {
        type : String,
        required : [true, "redirectUrl is mandatory"]
    },
    id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" 
    },
    clientID: String,
    clientSecret : String,
},{timestamps: true})

export default mongoose.model("ThirdParty",ThirdParty)