import User from "../model/User.js"
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import sendTokens from "../utils/sendTokens.js";

export const getUserDetails = async(req,res,next)=>{
    const data = await User.find();

    res.json({
        data : data
    })
}

// adding a user 

export const setUserDetails = catchAsyncErrors(async(req,res,next)=>{
    
    const {userName, email, password} = req.body

    const data = await User.insertOne({
        userName,
        email,
        password
    })
    res.json({
        data
    })
    
})

// login user

export const loginUser = catchAsyncErrors(async(req,res,next)=>{
    const {email,password} = req.body

    const data = await User.findOne({email})
    if(!data){

        return next(new Error("Enter the valid email"))
    }
    const pass = await data.checkPassword(password)
    if(!pass){
        return next(new Error("Incorrect password"))
    }
    const token = sendTokens(email)  

    res.json({
        token
    })
    
    
})