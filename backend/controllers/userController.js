import User from "../model/User.js"

export const getUserDetails = async(req,res,next)=>{
    const data = await User.find();

    res.json({
        data : data
    })
}