const sql = require('mssql');
const config = {
    user: 'zacc_user',
    password: 'Z@ccb0x',
    server: '40.74.71.100',
    port: 5089,
    database: 'Zaccbox_accounting',
    options: {
        encrypt: true,
        trustServerCertificate: true 
    }
};

const GetAnnualReport = async () => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("SELECT * FROM AnnualReport");
        return result.recordset;
    } catch (err) {
        console.error("Error fetching data from AnnualReport:", err);
    } finally {
        await sql.close();
    }
}

const getProforma = async () => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("SELECT * FROM Proforma");
        return result.recordset;
    } catch (err) {
        console.error("Error fetching data from Proforma:", err);
    } finally {
        await sql.close();
    }
}

module.exports = {
    GetAnnualReport,
    getProforma
};

