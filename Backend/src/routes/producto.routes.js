const express = require("express");
const router = express.Router();

const productoController = require("../controllers/producto.controller");

// Obtener todos los productos
router.get("/", productoController.obtenerProductos);

// Obtener un producto por ID
router.get("/:id", productoController.obtenerProductoPorId);

// Crear un nuevo producto
router.post("/", productoController.crearProducto);

// Actualizar un producto
router.put("/:id", productoController.actualizarProducto);

// Eliminar un producto
router.delete("/:id", productoController.eliminarProducto);

module.exports = router;