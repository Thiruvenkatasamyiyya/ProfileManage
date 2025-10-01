import express from "express"
import dotenv from "dotenv"
import { dbconnect } from "./config/dbconnect.js"
const app = express()

dotenv.config({path : './config/.env'})


dbconnect()

app.listen(process.env.PORT,()=>{
    console.log( `It running on port of : ${process.env.PORT}`);
    
})