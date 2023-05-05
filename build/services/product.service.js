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
exports.ProductServices = void 0;
const product_repository_1 = require("../repositories/product.repository");
const foto_repository_1 = require("../repositories/foto.repository");
const uuid_1 = require("uuid");
class ProductServices {
    constructor() {
        this._productRepository = new product_repository_1.ProductRepository();
        this._imageRepository = new foto_repository_1.ImagenesRepository();
    }
    getAllProductFromCategory(nombre_categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            const productPromise = yield this._productRepository
                .getProductFromCategory(nombre_categoria)
                .then((productPOJO) => {
                if (!!productPOJO) {
                    return this.convertArrayPOJOtoArrayDTO(productPOJO);
                }
                else {
                    return undefined;
                }
            });
            return productPromise;
        });
    }
    getAllProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            const productPromise = yield this._productRepository.getAllProductos().then((productPOJO) => {
                if (!!productPOJO) {
                    return this.convertArrayPOJOtoArrayDTO(productPOJO);
                }
                else {
                    return undefined;
                }
            });
            return productPromise;
        });
    }
    getAllProductosWithImagen() {
        return __awaiter(this, void 0, void 0, function* () {
            const productPromise = yield this._productRepository
                .getAllProductosWithImage()
                .then((productPOJO) => {
                if (!!productPOJO) {
                    return this.convertArrayPOJOtoArrayDTO(productPOJO);
                }
                else {
                    return undefined;
                }
            });
            return productPromise;
        });
    }
    get20ProductosByPrice(limite) {
        return __awaiter(this, void 0, void 0, function* () {
            const productPromise = yield this._productRepository
                .get20ProductosByPrice(limite)
                .then((productPOJO) => {
                if (!!productPOJO) {
                    return this.convertArrayPOJOtoArrayDTO(productPOJO);
                }
                else {
                    return undefined;
                }
            });
            return productPromise;
        });
    }
    get10LastProducto() {
        return __awaiter(this, void 0, void 0, function* () {
            const productPromise = yield this._productRepository.get10LastProductos().then((productPOJO) => {
                if (!!productPOJO) {
                    return this.convertArrayPOJOtoArrayDTO(productPOJO);
                }
                else {
                    return undefined;
                }
            });
            return productPromise;
        });
    }
    addProducto(producto, rutas_imagen) {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: LLamar al repositorio
            const productoPromise = yield this._productRepository
                .addProducto(producto)
                .then((productoPojo) => {
                if (!!productoPojo) {
                    let imagenes = rutas_imagen;
                    console.log("Rutasasasas" + rutas_imagen);
                    imagenes.forEach((element) => {
                        let imagen = {
                            idPhoto: (0, uuid_1.v4)(),
                            ruta_imagen: element,
                            idProducto: productoPojo.idProducto,
                            namePhoto: productoPojo.idProducto,
                        };
                        this._imageRepository.addImagen(imagen);
                    });
                    //this._imageRepository.addImagen()
                    return this.convertPOJOtoDTO(productoPojo).idProducto;
                }
                else {
                    return undefined;
                }
            })
                .catch((error) => {
                console.log(error);
                throw error;
            });
            return productoPromise;
        });
    }
    getProductoByIdUsu(id_usu) {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: LLamar al repositorio
            const productoPromise = yield this._productRepository
                .getProductoByIdUsu(id_usu)
                .then((productAsPojo) => {
                //La doble exclamación indica que es distinto a nulo y a undefined
                if (!!productAsPojo) {
                    return this.convertPOJOtoDTO(productAsPojo);
                }
                else {
                    return undefined;
                }
            })
                .catch((error) => {
                console.log(error);
                throw error;
            });
            return productoPromise;
        });
    }
    convertPOJOtoDTO(productPOJO) {
        let product = productPOJO;
        return product;
    }
    convertArrayPOJOtoArrayDTO(productPOJO) {
        let product = productPOJO;
        return product;
    }
}
exports.ProductServices = ProductServices;
