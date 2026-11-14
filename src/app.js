const express = require("express");
const app = express();

app.use(express.json());

const categoriaRoutes = require("./routes/categoria.routes");

app.use("/api/categorias", categoriaRoutes);

module.exports = app;