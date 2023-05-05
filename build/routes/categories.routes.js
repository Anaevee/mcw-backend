"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_controller_1 = require("../controller/categories.controller");
const express_1 = __importDefault(require("express"));
const routerCategoria = express_1.default.Router();
routerCategoria.get("/all", categories_controller_1.categoriasController.getAllCategorias);
routerCategoria.get("/get/nombre/:name", categories_controller_1.categoriasController.getCategoriaByNombre);
exports.default = routerCategoria;
module.exports = routerCategoria;
