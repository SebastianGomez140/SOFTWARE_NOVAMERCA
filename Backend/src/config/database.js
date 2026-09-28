const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yahiko0314",
    database: "novamerca"
});

connection.connect((error) => {
    if (error) {
        console.log("Error conectando a la base de datos:", error);
        return;
    }

    console.log("Base de datos conectada correctamente");
});

module.exports = connection;