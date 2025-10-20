import User from "../model/User.js"
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

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