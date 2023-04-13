const  jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    const token = req.cookies.access_token;
    
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