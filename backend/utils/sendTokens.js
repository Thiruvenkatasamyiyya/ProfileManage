import jwt from "jsonwebtoken"

export default function(email,res){

    const token = jwt.sign({email : email},process.env.TOKEN)


    const options = {
    expires: new Date(Date.now() + 7* 24 * 60 * 60 * 1000),
    httpOnly:true,
    secure:false,
    };

    res.status(201).cookie("token",token,options).json({
        token
    })

}