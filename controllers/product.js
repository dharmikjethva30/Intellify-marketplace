const product = require('../models/product')

const addProduct = async (req, res) => {
    const {name, price, description, image, category} = req.body
    try {
        const newProduct = new product({
            name,
            price,
            description,
            image,
            sellerContact : {
                sellerName: req.user.name,
                phone : req.user.phone,
                email : req.user.email
            },
            category
        })
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(400).json(error)
    }
}

const myProducts = async (req, res) => {
    try {
        const products = await product.find({ 'sellerContact.email' : req.user.email })
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {addProduct, myProducts}