"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagenesController = void 0;
const foto_service_1 = require("../services/foto.service");
const imagenesService = new foto_service_1.ImagenesService();
exports.imagenesController = {
    getAllImagenesByProdu: (req, res) => {
        try {
            const idProducto = req.params.id;
            imagenesService.getAllImagenesByProdu(idProducto).then((result) => {
                res.json(result);
                console.log("entrando por controlador all Imagenes by produ");
            });
        }
        catch (error) {
            console.log(error);
        }
    },
};
