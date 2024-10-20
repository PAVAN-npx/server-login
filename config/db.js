// config/db.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // Replace with your MySQL username
    password: 'Pavan@2004', // Replace with your MySQL password
    database: 'pavan'  // Replace with your database name
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = connection;
