const express = require('express')
const {addProduct,myProducts} = require("../controllers/product")
const auth = require('../middlewares/auth')

const product_route = express.Router()

product_route.post('/newProduct',auth, addProduct)
product_route.get('/myProducts',auth, myProducts)

module.exports = product_route