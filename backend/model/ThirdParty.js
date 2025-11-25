import mongoose from "mongoose";

const ThirdParty = new mongoose.Schema({
    appName : {
        type : String,
        required : [true,"Mention name of the application"]
    },
    redirectUrl: {
        type : String,
        required : [true, "redirectUrl is mandatory"]
    },
    clientID: String,
    clientSecret : String,
},{timestamps: true})

export default mongoose.model("ThirdParty",ThirdParty)