const db = require("../config/database");

const Categoria = {

    obtenerTodas: (callback) => {

        const sql = "SELECT * FROM categoria";

        db.query(sql, callback);

    }

};

module.exports = Categoria;