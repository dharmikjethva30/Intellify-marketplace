const  jwt = require('jsonwebtoken')


const auth = (req, res, next) => {

    if ( req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer" ) {
        const token = req.headers.authorization.split(" ")[1];
    }
    else{
        res.status(400).send("Invalid Token!")
        return
    }
    
    if(!token) return res.status(401).json('Access Denied')

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)

        req.user = verified
        next()
    } catch (error) {
        res.status(400).json('Invalid Token')
    }
}

module.exports = auth