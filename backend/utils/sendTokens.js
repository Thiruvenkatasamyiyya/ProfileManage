import jwt from "jsonwebtoken"

export default function(email){

    const token = jwt.sign(email,process.env.TOKEN,
        
        )

    return token
}