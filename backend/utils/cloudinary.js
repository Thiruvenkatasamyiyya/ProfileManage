import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config({path : '../config/config.env'})
const s =cloudinary.config({ 
  cloud_name: "dp9zvhpji", 
  api_key:  216289368462612, 
  api_secret: "pFHvKRqa4FHZSYFKx699pwQ1r"
});

export const upload_avt =  (file,folder)=>{
console.log(s);

    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload(
            file,
            {
                resource_type : 'auto',
                folder 
            },
            (error,result)=>{
                if(error) return reject(error)
                
                resolve({
                    public_id: result.public_id,
                    url : result.url
                })
            }
        )
    })
}

export const delete_avt = (publicId) =>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.destroy(publicId
            ,(error,result)=>{
                if(error) return reject(error)
                resolve({
                "message ": result
                })
            }
        )
    })
}

