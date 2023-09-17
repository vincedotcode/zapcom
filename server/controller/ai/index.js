const { listTables } = require('../../service/ai/product');

const getAllTables = async (req, res) => {
    try {
        const products = await listTables();
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
    getAllTables,
};