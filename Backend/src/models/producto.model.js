const db = require("../config/database");

const Producto = {

    obtenerTodos: (callback) => {

        const sql = `
            SELECT
                p.id_producto,
                p.nombre,
                p.descripcion,
                p.precio,
                p.stock,
                c.nombre AS categoria,
                pr.nombre AS proveedor
            FROM producto p
            INNER JOIN categoria c
                ON p.id_categoria = c.id_categoria
            INNER JOIN proveedor pr
                ON p.id_proveedor = pr.id_proveedor;
        `;

        db.query(sql, callback);

    },

    crear: (datos, callback) => {

        const sql = `
            INSERT INTO producto
            (nombre, descripcion, precio, stock, id_categoria, id_proveedor)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                datos.nombre,
                datos.descripcion,
                datos.precio,
                datos.stock,
                datos.id_categoria,
                datos.id_proveedor
            ],
            callback
        );

    },

    obtenerPorId: (id, callback) => {

        const sql = `
            SELECT *
            FROM producto
            WHERE id_producto = ?
        `;

        db.query(sql, [id], callback);

    }, 

    actualizar: (id, datos, callback) => {

        const sql = `
            UPDATE producto
            SET
                nombre = ?,
                descripcion = ?,
                precio = ?,
                stock = ?,
                id_categoria = ?,
                id_proveedor = ?
            WHERE id_producto = ?
        `;

        db.query(
            sql,
            [
                datos.nombre,
                datos.descripcion,
                datos.precio,
                datos.stock,
                datos.id_categoria,
                datos.id_proveedor,
                id
            ],
            callback
        );
    },
    // Eliminar un producto
eliminar: (id, callback) => {

    const sql = `
        DELETE FROM producto
        WHERE id_producto = ?
    `;

    db.query(sql, [id], callback);

}

};

module.exports = Producto;