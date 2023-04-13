const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookie = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3000;


const user_router = require('./routes/user')
const product_router = require('./routes/product')
const farmer_router = require('./routes/farmer')
const lab_router = require('./routes/lab')

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
app.use('/farm', farmer_router)
app.use('/lab', lab_router)

app.get('/allProducts', async(req, res) => {
    const data = await product.find()
    res.status(200).json(data)
})



app.listen(PORT, () => {
    console.log('Server Started');
    connect()
});