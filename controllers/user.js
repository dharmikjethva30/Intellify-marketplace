const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const user = require('../models/user')

const signup = async (req, res) => {
    const {name, email, phone, password} = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new user({
            name,
            email,
            phone,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(400).json(error)
    }
}

const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const User = await user.findOne({email})
        if(!User){
            return res.status(404).json('User not found')
        }
        const validPassword = await bcrypt.compare(password, User.password)
        if(!validPassword){
            return res.status(400).json('Wrong password')
        }
        const token = jwt.sign({name : User.name, phone: User.phone, email : User.email }, process.env.JWT_SECRET)
        res.send({ status: "logged in successfully !", access_token : token })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {signup, login}