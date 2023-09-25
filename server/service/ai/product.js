const sql = require('mssql');

const config = {
    user: 'zacc_user',
    password: 'Z@ccb0x',
    server: '40.74.71.100',
    port: 5089,
    database: 'Zaccbox_accounting',
    options: {
        trustedConnection: true,
    }
};

const listTables = async () => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("SELECT table_name = t.name FROM sys.tables t INNER JOIN sys.schemas s ON t.schema_id = s.schema_id");
        console.log("List of table names:");
        result.recordset.forEach(record => {
            return record.table_name;
        });
    } catch (err) {
        console.error("Error connecting to the database or fetching data:", err);
    } finally {
        await sql.close();
    }
}

module.exports = {
    listTables,
};

