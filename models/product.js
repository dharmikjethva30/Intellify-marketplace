const mongoose = require('mongoose');

const product = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    sellerContact : {

        sellerName : {
            type: String,
            required: true
        },
        phone : {
            type: Number,
            required: true
        },
        email : {
            type: String,
            required: true
        }
    },
    category : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('product', product);

