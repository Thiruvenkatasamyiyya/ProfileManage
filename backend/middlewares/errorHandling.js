export default (err,req,res,next)=>{
    console.log(err.message);

    if(err.keyValue.email){
        res.status(401).json({
            message : "The Email is already existed"
        })
    }
    res.json({
        err
    })
    
}