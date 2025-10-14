import express from "express"
import dotenv from "dotenv"
import { dbconnect } from "./config/dbconnect.js"
import errorHandling from "./middlewares/errorHandling.js"
const app = express()

dotenv.config({path : './config/.env'})


dbconnect()

// const check = (gameFun)=>(hell,err)=>{
//   Promise.resolve(gameFun(hell,err)).catch(err)
// }
// check((hell,err)=>{
//   console.log(hell);
  
// })

// const fun =  new Promise((reslove,reject)=>{
//   const val = 1;
//   if(val == 0){
//     reslove("welcome cheif")
//   } 
//   reject("oops who are you?")
// })

// fun
// // .then(resutl => console.log(resutl))
// .catch(err => console.log(err))

app.use("/", (req,res,next)=>{
  console.log("hell");
  res.send("welcome ")
  next()
})

app.use( (req,res,next)=>{
  console.log("hell2");
  
  // next(new Error("je;;"))
})


app.use(errorHandling)


app.listen(process.env.PORT,()=>{
    console.log( `It running on port of : ${process.env.PORT}`);
    
})