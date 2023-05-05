import { categoriasController } from "../controller/categories.controller";
import express from "express";

const routerCategoria = express.Router();

routerCategoria.get("/all", categoriasController.getAllCategorias);
routerCategoria.get(
  "/get/nombre/:name",
  categoriasController.getCategoriaByNombre
);

export default routerCategoria;
module.exports = routerCategoria;
