import jwt from "jsonwebtoken"
import User from "../model/User.js"
import catchAsyncErrors from "./catchAsyncErrors.js"
export const isAuthenticated  = catchAsyncErrors(async(req,res,next)=>{
    const {token} =  req.cookies

    if(!token){
        return next(new Error("Login first to make changes"))
    }

    const data = jwt.verify(token,process.env.TOKEN)

    req.user = await User.findById(data.id);
    console.log(req.user);
    
    next()
})