const report = require('../models/report');

//get report which are not fulfilled

const getUnfulfilledReports = async (req, res) => {
    try {
        const reports = await report.find({ isFulfilled :false });
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json(error);
    }
}

//fulfill report

const fulfillReport = async (req, res) => {
    try {
        const {reportId} = req.body;

        const Report = await report.findByIdAndUpdate(reportId, {
            isFulfilled: true,
            Nitrogen: req.body.Nitrogen,
            Phosphorus: req.body.Phosphorus,
            Potassium: req.body.Potassium,
            pH: req.body.pH
        });
        await reportToBeFulfilled.save();

        res.status(200).json({message: "Report fulfilled successfully"});
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {getUnfulfilledReports, fulfillReport}