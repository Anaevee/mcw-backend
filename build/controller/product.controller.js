"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("../services/product.service");
const uuid_1 = require("uuid");
const fs = require("fs");
const productService = new product_service_1.ProductServices();
exports.productController = {
    getProductFromCategory: (req, res) => {
        try {
            const nombre_categoria = req.params.nombre_categoria;
            productService
                .getAllProductFromCategory(nombre_categoria)
                .then((products) => {
                res.json(products);
            });
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },
    getAllProductos: (_req, res) => {
        productService.getAllProductos().then((result) => {
            res.json(result);
        });
    },
    getAllProductosWithImagen: (_req, res) => {
        productService.getAllProductosWithImagen().then((result) => {
            res.json(result);
        });
    },
    get20ProductosByPrice: (req, res) => {
        const limiteConsultas = req.body.limite;
        productService.get20ProductosByPrice(limiteConsultas).then((result) => {
            console.log("Se ha enviado desde el body " + result + " / " + limiteConsultas);
            res.json(result);
        });
    },
    get10LastProductos: (_req, res) => {
        productService.get10LastProducto().then((result) => {
            res.json(result);
        });
    },
    addProducto: (req, res) => {
        try {
            console.log(req.body);
            console.log(req.files);
            let arrayImages = [];
            let files = req.files;
            if (!files || files.length === 0) {
                return res.status(400).json({ mensaje: "No se recibieron archivos" });
            }
            // Se crea un nuevo directorio cada vez que el usuario realiza la petición post
            let newDir = `uploads/${(0, uuid_1.v4)()}`;
            fs.mkdirSync(newDir);
            // Se mueven las imágenes subidas al nuevo directorio
            files.forEach((file) => {
                let oldPath = file.path;
                let newPath = `${newDir}/${file.originalname}`;
                fs.renameSync(oldPath, newPath);
                arrayImages.push(newPath);
            });
            console.log("ESTAS SON LAS RUTASSSS" + arrayImages);
            const newProducto = req.body;
            console.log(newProducto);
            productService.addProducto(newProducto, arrayImages).then((result) => {
                console.log(result);
                res.json(arrayImages);
            });
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },
    getProductoByIdUSU: (req, res) => {
        try {
            const id_usu = req.params.idUsu;
            productService.getProductoByIdUsu(id_usu).then((result) => {
                res.json(result);
                console.log("entrando por controlador get PRODUCTO by id usu");
            });
        }
        catch (error) {
            console.log(error);
        }
    },
    getImage: (req, res) => {
        const url = req.body.ruta_imagen;
        console.log("ieieieei" + url);
        res.sendFile(url, { root: "." });
    },
};
