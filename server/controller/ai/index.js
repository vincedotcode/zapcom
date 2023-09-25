const { GetAnnualReport, getProforma } = require('../../service/ai/product');

const GetAnnualReportController = async (req, res) => {
    try {
        const products = await GetAnnualReport();
        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getProformaController = async (req, res) => {
    try {
        const products = await getProforma();
        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};




module.exports = {
    GetAnnualReportController,
    getProformaController,
};