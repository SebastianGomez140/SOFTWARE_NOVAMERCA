const db = require("../config/database");

const Cliente = {

    obtenerTodos: (callback) => {

        const sql = `
            SELECT *
            FROM cliente
            ORDER BY id_cliente ASC
        `;

        db.query(sql, callback);

    },

    crear: (datos, callback) => {

        const sql = `
            INSERT INTO cliente
            (nombre, apellido, telefono, correo, estado)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                datos.nombre,
                datos.apellido,
                datos.telefono,
                datos.correo,
                datos.estado
            ],
            callback
        );

    },

    obtenerPorId: (id, callback) => {

        const sql = `
            SELECT *
            FROM cliente
            WHERE id_cliente = ?
        `;

        db.query(sql, [id], callback);

    },

    actualizar: (id, datos, callback) => {

        const sql = `
            UPDATE cliente
            SET
                nombre = ?,
                apellido = ?,
                telefono = ?,
                correo = ?,
                estado = ?
            WHERE id_cliente = ?
        `;

        db.query(
            sql,
            [
                datos.nombre,
                datos.apellido,
                datos.telefono,
                datos.correo,
                datos.estado,
                id
            ],
            callback
        );

    },

    eliminar: (id, callback) => {

        const sql = `
            DELETE FROM cliente
            WHERE id_cliente = ?
        `;

        db.query(sql, [id], callback);

    }

};

module.exports = Cliente; 