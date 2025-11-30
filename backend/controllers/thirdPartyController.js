import randomHash from "../utils/randomBytes.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ThirdParty from "../model/ThirdParty.js";
import User from "../model/User.js";
import crypto from "crypto"
import jwt from "jsonwebtoken"
export const createClientUrl = catchAsyncErrors(async(req,res,next)=>{
    const {appName,redirectUrl} = req.body;
    const {id} = req.user
    const data = await ThirdParty.create({
        appName,
        redirectUrl,
        id
    })
    
    data.clientID = appName + randomHash();
    data.clientSecret = randomHash();

    await data.save();
        
    res.json({
        data
    })
})

//find client url

export const findClientID = catchAsyncErrors(async(req,res,next)=>{
    const {id} = req.user;
    const data = await ThirdParty.find({
        id 
    })

    if(!data) return next(new Error("Not yet created"));
    res.status(201).json({
        data
    })
})

export const codeGenerate = catchAsyncErrors(async(req,res,next)=>{
    const {clientID, redirectUrl} = req.query;
    const {email, password} = req.body;
    const client = await ThirdParty.findOne({clientID});
    if(!client) return next(new Error("Make sure to register the application"))

    const user =await User.findOne({email});
    if(!user) return next(new Error("Register before login"));
    
    const check = await user.checkPassword(password)
    if(!check ) return next(new Error("Incorrect password"));

    const code = crypto.randomBytes(10).toString('hex')
    user.oAuthCode = crypto.createHash("sha256").update(code).digest('hex')
    user.oAuthExpires = Date.now() + 2 *60*1000;
    await user.save()

    res.status(302).json({
        url : `${redirectUrl}?code=${code}`
    })
})


export const accessToken = catchAsyncErrors(async(req,res,next)=>{

    const {clientID,clientSecret,code} = req.body;

    const validcode = crypto.createHash('sha256').update(code).digest("hex")
    const data =await ThirdParty.findOne({clientID})

    if(data.clientSecret != clientSecret)  return next(new Error("Not valid client access"));

    const user =await User.findOne({
        oAuthCode : validcode,
        oAuthExpires : { $gt :Date.now()}
    })

    if(!user) return next(new Error("Not valid code"));

    const access_token = jwt.sign({user},"1d2342d")
    
    res.status(201).json({
        access_token
    })
})