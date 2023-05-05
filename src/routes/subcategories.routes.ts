import { SubcategoriasController } from "../controller/subcategories.controller";
import express from "express";

const routerSubcategoria = express.Router();

routerSubcategoria.get("/all", SubcategoriasController.getAllSubcategorias);
routerSubcategoria.get(
  "/get/nombre/:name",
  SubcategoriasController.getSubcategoriaByNombre
);
routerSubcategoria.get(
  "/get/idcategoria/:idCategoria",
  SubcategoriasController.getSubcategoriaByIdCategoria
);

export default routerSubcategoria;
module.exports = routerSubcategoria;
