const express = require("express");
const app = express();

app.use(express.json());

// Rutas de categorías
const categoriaRoutes = require("./routes/categoria.routes");
app.use("/api/categorias", categoriaRoutes);

// Rutas de productos
const productoRoutes = require("./routes/producto.routes");
app.use("/api/productos", productoRoutes);

module.exports = app;