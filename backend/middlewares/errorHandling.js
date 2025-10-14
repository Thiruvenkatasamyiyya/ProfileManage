export default (err,req,res,next)=>{
    console.log(err.message);
    res.send("something erro")
    
}