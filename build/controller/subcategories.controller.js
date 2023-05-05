"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoriasController = void 0;
const subcategories_service_1 = require("../services/subcategories.service");
const subcategoriaService = new subcategories_service_1.SubcategoriasServices();
exports.SubcategoriasController = {
    getAllSubcategorias: (_req, res) => {
        subcategoriaService.getAllSubcategorias().then((result) => {
            res.json(result);
        });
    },
    getSubcategoriaByNombre: (req, res) => {
        try {
            const nameProducto = req.params.name;
            subcategoriaService
                .getSubcategoriaByNombre(nameProducto)
                .then((result) => {
                res.json(result);
                console.log("entrando por controlador get subcateogira by nombre");
            });
        }
        catch (error) {
            console.log(error);
        }
    },
    getSubcategoriaByIdCategoria: (req, res) => {
        try {
            const idCategoria = req.params.idCategoria;
            subcategoriaService
                .getSubcategoriaByIdCategoria(idCategoria)
                .then((result) => {
                res.json(result);
                console.log("entrando por controlador get subcateogira by nombre");
            });
        }
        catch (error) {
            console.log(error);
        }
    },
};
