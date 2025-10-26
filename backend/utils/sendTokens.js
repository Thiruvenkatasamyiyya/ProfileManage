import jwt from "jsonwebtoken"

export default function(id,res){

    const token = jwt.sign({id : id},process.env.TOKEN)


    const options = {
    expires: new Date(Date.now() + 7* 24 * 60 * 60 * 1000),
    httpOnly:true,
    secure:false,
    };

    res.status(200).cookie("token",token,options).json({
        token
    })

}