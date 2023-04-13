const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookie = require('cookie-parser')
const cors = require('cors')

const user_router = require('./routes/user')
const product_router = require('./routes/product')
const product = require('./models/product')


const app = express();

app.use(express.json())
app.use(cookie())
app.use(cors())
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to database")
    })
    .catch((err) => {
        console.log("[ERROR]")
        console.log(err)
        throw new Error
    })
}

app.use('/user', user_router)
app.use('/product', product_router)

app.get('/', async(req, res) => {
    const data = await product.find()
    res.status(200).json(data)
})










app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connect()
});