import User from "../model/User.js"
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import sendTokens from "../utils/sendTokens.js";
import nodemailer from "../utils/nodemailer.js";
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
    sendTokens(email,res)  

    
})

//forget password

export const forgetPassword = catchAsyncErrors(async(req,res,next)=>{
    const {email} = req.body

    const data = await User.findOne({email})
    
    if(!data){
        return next(new Error("Email is not available"))
    }

    const resetToken = await data.getResetToken()

    const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`

    nodemailer(email,resetUrl);

    
})