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
exports.CategoriasServices = void 0;
const categories_repository_1 = require("../repositories/categories.repository");
class CategoriasServices {
    constructor() {
        this._categoriasRepository = new categories_repository_1.CategoriasRepository();
    }
    getAllCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaPromise = yield this._categoriasRepository
                .getAllCategorias()
                .then((categoriaPOJO) => {
                if (!!categoriaPOJO) {
                    return this.convertArrayPOJOtoArrayDTO(categoriaPOJO);
                }
                else {
                    return undefined;
                }
            });
            return categoriaPromise;
        });
    }
    getCategoriaByNombre(nameCategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            const productoPromise = yield this._categoriasRepository
                .getCategoriaByNombre(nameCategoria)
                .then((categoriasAsPojo) => {
                //La doble exclamación indica que es distinto a nulo y a undefined
                if (!!categoriasAsPojo) {
                    return this.convertPOJOtoDTO(categoriasAsPojo);
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
        let categorias = productPOJO;
        return categorias;
    }
    convertArrayPOJOtoArrayDTO(productPOJO) {
        let categorias = productPOJO;
        return categorias;
    }
}
exports.CategoriasServices = CategoriasServices;
