const express = require('express');
const {getUnfulfilledReports, fulfillReport} = require('../controllers/lab');
const auth = require('../middlewares/auth');

const lab_router = express.Router();

lab_router.get('/pending',auth, getUnfulfilledReports);
lab_router.post('/fulfill',auth, fulfillReport);

module.exports = lab_router;