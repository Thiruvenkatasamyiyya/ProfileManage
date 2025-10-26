import User from "../model/User.js"
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import sendTokens from "../utils/sendTokens.js";
import crypto from "crypto"
import nodemailer from "../utils/nodemailer.js";
import { delete_avt, upload_avt } from "../utils/cloudinary.js";
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
    sendTokens(data._id,res)  

    
})

//forget password

export const forgetPassword = catchAsyncErrors(async(req,res,next)=>{
    const {email} = req.body

    const data = await User.findOne({email})
    
    if(!data){
        return next(new Error("Email is not available"))
    }

    const resetToken = await data.getResetToken()

    await data.save()

    const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`

    nodemailer(email,resetUrl); 

    res.status(200).json({
        message : "Mail sent to reset password"
    })
    
})

// reset password

export const resetPassword = catchAsyncErrors(async(req,res,next)=>{
    const resetToken = req.params.token
    
    const hasedToken = crypto.createHash("sha256").update(resetToken).digest('hex')

    const data = await User.findOne({
        resetPasswordToken : hasedToken,
        resetTokenExpires :  {$gt : Date.now()}
    })
    if(!data){
        return next(new Error("Reset Token will expires"));
    }

    const {newPassword, confirmPassword} = req.body;

    if(newPassword !== confirmPassword) return next(new Error("To passwords are different"))

    await data.setNewPassword(confirmPassword)

    data.resetPasswordToken = undefined
    data.resetTokenExpires = undefined

    await data.save()

    res.status(201).json({
        message : "Successfully updated"
    })
})

// uploading profile image

export const uploadPhoto = catchAsyncErrors(async(req,res,next)=>{
    const {file} = req.body

    //delete before avatar
    // const data = await User.findById(req?.user?.avatar?.public_id)
    // if(data){
    //     await delete_avt(data)
    // }

    //upload avator
    const response = await upload_avt(file,"ecom/avatar")
    console.log(req?.user);
    
    const user = await User.findByIdAndUpdate(req?.user?.id,{
        avatar : response
    })

    res.status(200).json({
        user
    })
})