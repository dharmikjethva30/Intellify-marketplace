const report = require('../models/report');

//get latest report
const getNPKpH = async (req, res) => {
    try {
        const reports = await report.find({ farmer_email : req.query.email, isFulfilled : true }).sort({createdAt: -1}).limit(1);
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json(error);
    }
}

//request report
const requestReport = async (req, res) => {
    try {
        const newReport = new report({
            farmer_email: req.user.email,
            isFulfilled: false,
            Nitrogen: 0,
            Phosphorus: 0,
            Potassium: 0,
            pH: 0
        });
        const savedReport = await newReport.save();
        res.status(201).json(savedReport);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {getNPKpH, requestReport}