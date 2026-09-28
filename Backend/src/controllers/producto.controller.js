const Producto = require("../models/producto.model");

exports.obtenerProductos = (req, res) => {

    Producto.obtenerTodos((error, resultados) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al consultar los productos",
                error
            });
        }

        res.json(resultados);

    });

};

exports.crearProducto = (req, res) => {

    Producto.crear(req.body, (error, resultado) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al crear el producto",
                error
            });
        }

        res.status(201).json({
            mensaje: "Producto creado correctamente",
            id: resultado.insertId
        });

    });

};