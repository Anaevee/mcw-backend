"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const db_config_1 = require("../data/config/db.config");
const product_model_1 = require("../models/product.model");
const foto_model_1 = require("../models/foto.model");
const subcategories_model_1 = require("../models/subcategories.model");
class ProductRepository {
    constructor() {
        this._database = {};
        this._database = (0, db_config_1.connect)();
        this._productRepository =
            this._database.sequelize.getRepository(product_model_1.ProductsPOJO);
        this._imagesRepository =
            this._database.sequelize.getRepository(foto_model_1.ImagenesPojo);
        this._subcategoriaRepository =
            this._database.sequelize.getRepository(subcategories_model_1.SubcategoriasPojo);
    }
    getProductFromCategory(nombre_categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._productRepository.findAll({
                    include: [
                        {
                            model: this._imagesRepository,
                            attributes: ["ruta_imagen"],
                        },
                        this._subcategoriaRepository,
                    ],
                    where: {
                        id_categoria: nombre_categoria,
                    },
                });
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
    getAllProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Tenemos que tener await porque estamos devolviendo una promesa
                return yield this._productRepository.findAll();
            }
            catch (error) {
                console.log(error);
                return [];
            }
        });
    }
    getAllProductosWithImage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Tenemos que tener await porque estamos devolviendo una promesa
                return yield this._productRepository.findAll({
                    include: [
                        {
                            model: this._imagesRepository,
                            attributes: ["ruta_imagen"],
                        },
                        this._subcategoriaRepository,
                    ],
                });
            }
            catch (error) {
                console.log(error);
                return [];
            }
        });
    }
    get20ProductosByPrice(limite) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Tenemos que tener await porque estamos devolviendo una promesa
                return yield this._productRepository.findAll({
                    include: [
                        {
                            model: this._imagesRepository,
                            attributes: ["ruta_imagen"],
                        },
                        this._subcategoriaRepository,
                    ],
                    order: [["precio_producto", "ASC"]],
                    limit: limite,
                });
            }
            catch (error) {
                console.log(error);
                return [];
            }
        });
    }
    get10LastProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Tenemos que tener await porque estamos devolviendo una promesa
                return yield this._productRepository.findAll({
                    include: [
                        {
                            model: this._imagesRepository,
                            attributes: ["ruta_imagen"],
                        },
                        this._subcategoriaRepository,
                    ],
                    order: [["created_at", "DESC"]],
                    limit: 10,
                });
            }
            catch (error) {
                console.log(error);
                return [];
            }
        });
    }
    getProductoByIdUsu(id_usu) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id_usu);
                return yield this._productRepository.findAll({
                    where: {
                        id_usuario: id_usu,
                    },
                });
            }
            catch (error) {
                console.log(error);
                return undefined;
            }
        });
    }
    addProducto(newProducto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(newProducto);
                return yield this._productRepository.create(newProducto);
            }
            catch (error) {
                console.log(error);
                return undefined; //-1 indicamos que ha finalizado con errores
            }
        });
    }
}
exports.ProductRepository = ProductRepository;
