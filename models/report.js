const mongoose = require('mongoose');

const report = new mongoose.Schema({
    farmer_email : {
        type: String,
        required: true
    },
    Nitrogen : {
        type: Number
    },
    Phosphorus : {
        type: Number
    },
    Potassium : {
        type: Number
    },
    pH : {
        type: Number
    },
    isFulfilled : {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('report', report);
