const Categoria = require("../models/categoria.model");

exports.obtenerCategorias = (req, res) => {

    Categoria.obtenerTodas((error, resultados) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al consultar categorias",
                error
            });
        }

        res.json(resultados);

    });

};