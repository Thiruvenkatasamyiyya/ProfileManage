import express from "express"
import dotenv from "dotenv"
import { dbconnect } from "./config/dbconnect.js"
import errorHandling from "./middlewares/errorHandling.js"
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser"
import thirdPartyRoute from "./routes/thirdParty.js"

const app = express()

dotenv.config({path : './config/.env'})


dbconnect()

app.use(express.json())
app.use(cookieParser())

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

// const karthi = (callback)=>(a)=>{

//     console.log("first");
    
//     callback(a)
// }

// karthi((a)=>{
//     console.log(a);
    
// })


// function hell(a){
//     console.log(a);
    
// }


// const a = new Karthi()
// a.character()

// const data = (name,callback)=>{

//     callback(name)
// }


// data("Thiru",(n)=>{
//     console.log(n);
    
// })



app.use("/",userRoute)
app.use("/",thirdPartyRoute)
app.use(errorHandling)


app.listen(process.env.PORT,()=>{
    console.log( `It running on port of : ${process.env.PORT}`);
    
})