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
exports.SubcategoriasServices = void 0;
const subcategories_repository_1 = require("../repositories/subcategories.repository");
class SubcategoriasServices {
    constructor() {
        this._subcategoriasRepository = new subcategories_repository_1.SubcategoriasRepository();
    }
    getAllSubcategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const subcategoriasPromise = yield this._subcategoriasRepository
                .getAllSubcategorias()
                .then((subcategoriaPOJO) => {
                if (!!subcategoriaPOJO) {
                    return this.convertArrayPOJOtoArrayDTO(subcategoriaPOJO);
                }
                else {
                    return undefined;
                }
            });
            return subcategoriasPromise;
        });
    }
    getSubcategoriaByNombre(nameProducto) {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: LLamar al repositorio
            const subcategoriaPromise = yield this._subcategoriasRepository
                .getSubcategoriaByNombre(nameProducto)
                .then((subcategoriasPojo) => {
                //La doble exclamación indica que es distinto a nulo y a undefined
                if (!!subcategoriasPojo) {
                    return this.convertPOJOtoDTO(subcategoriasPojo);
                }
                else {
                    return undefined;
                }
            })
                .catch((error) => {
                console.log(error);
                throw error;
            });
            return subcategoriaPromise;
        });
    }
    getSubcategoriaByIdCategoria(idCategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: LLamar al repositorio
            const subcategoriaPromise = yield this._subcategoriasRepository
                .getSubcategoriaByIdCategoria(idCategoria)
                .then((subcategoriasPojo) => {
                //La doble exclamación indica que es distinto a nulo y a undefined
                if (!!subcategoriasPojo) {
                    return this.convertPOJOtoDTO(subcategoriasPojo);
                }
                else {
                    return undefined;
                }
            })
                .catch((error) => {
                console.log(error);
                throw error;
            });
            return subcategoriaPromise;
        });
    }
    convertPOJOtoDTO(subcategoriaPojo) {
        let subcategorias = subcategoriaPojo;
        return subcategorias;
    }
    convertArrayPOJOtoArrayDTO(subcategoriaPojo) {
        let subcategorias = subcategoriaPojo;
        return subcategorias;
    }
}
exports.SubcategoriasServices = SubcategoriasServices;
