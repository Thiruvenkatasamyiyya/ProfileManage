import mongoose from "mongoose"

export const dbconnect = async()=>{
    await mongoose.connect('mongodb+srv://thiruvenkatasamyiyya:thiruvenkatam@cluster0.i16j9.mongodb.net/profileManage')
    .then((con)=>{
        console.log(`it is successully connected at ${con.connection.host}`);
        
    })
}