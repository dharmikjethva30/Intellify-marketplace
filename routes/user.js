const express = require('express')
const {login, signup} = require("../controllers/user")

const user_route = express.Router()

user_route.post('/login', login)
user_route.post('/signup', signup)

module.exports = user_route