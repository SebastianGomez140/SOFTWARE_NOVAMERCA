const Producto = require("../models/producto.model");

// Obtener todos los productos
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

// Crear producto
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

// Obtener por ID
exports.obtenerProductoPorId = (req, res) => {

    const id = req.params.id;

    Producto.obtenerPorId(id, (error, resultados) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al consultar el producto",
                error
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json(resultados[0]);

    });

};

// Actualizar
exports.actualizarProducto = (req, res) => {

    const id = req.params.id;

    Producto.actualizar(id, req.body, (error, resultado) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al actualizar el producto",
                error
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json({
            mensaje: "Producto actualizado correctamente"
        });

    });

};

// Eliminar producto
exports.eliminarProducto = (req, res) => {

    const id = req.params.id;

    Producto.eliminar(id, (error, resultado) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al eliminar el producto",
                error
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json({
            mensaje: "Producto eliminado correctamente"
        });

    });

};