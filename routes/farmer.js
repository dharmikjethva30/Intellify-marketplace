const express = require('express')
const {getNPKpH, requestReport} = require("../controllers/farmer")
const auth = require("../middlewares/auth")

const farmer_route = express.Router()

farmer_route.get('/getNPKpH', getNPKpH)
farmer_route.get('/requestReport',auth, requestReport)

module.exports = farmer_route