"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriasController = void 0;
const categories_service_1 = require("../services/categories.service");
const categoriaService = new categories_service_1.CategoriasServices();
exports.categoriasController = {
    getAllCategorias: (_req, res) => {
        categoriaService.getAllCategorias().then((result) => {
            res.json(result);
        });
    },
    getCategoriaByNombre: (req, res) => {
        try {
            const nameCategoria = req.params.name;
            categoriaService.getCategoriaByNombre(nameCategoria).then((result) => {
                res.json(result);
                console.log("entrando por controlador get categoria by nombre");
            });
        }
        catch (error) {
            console.log(error);
        }
    },
};
