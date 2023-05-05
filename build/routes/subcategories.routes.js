"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subcategories_controller_1 = require("../controller/subcategories.controller");
const express_1 = __importDefault(require("express"));
const routerSubcategoria = express_1.default.Router();
routerSubcategoria.get("/all", subcategories_controller_1.SubcategoriasController.getAllSubcategorias);
routerSubcategoria.get("/get/nombre/:name", subcategories_controller_1.SubcategoriasController.getSubcategoriaByNombre);
routerSubcategoria.get("/get/idcategoria/:idCategoria", subcategories_controller_1.SubcategoriasController.getSubcategoriaByIdCategoria);
exports.default = routerSubcategoria;
module.exports = routerSubcategoria;
