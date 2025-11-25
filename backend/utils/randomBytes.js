import crypto from "crypto"
function randomHash(){

    const secret = crypto.randomBytes(20).toString();
    return crypto.createHash('sha256').update(secret).digest('hex')
}

export default randomHash