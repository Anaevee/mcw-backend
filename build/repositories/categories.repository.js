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
exports.CategoriasRepository = void 0;
const categories_model_1 = require("../models/categories.model");
const db_config_1 = require("../data/config/db.config");
class CategoriasRepository {
    constructor() {
        this._database = {};
        this._database = (0, db_config_1.connect)();
        this._categoriasRepository =
            this._database.sequelize.getRepository(categories_model_1.CategoriasPojo);
    }
    getAllCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Tenemos que tener await porque estamos devolviendo una promesa
                return yield this._categoriasRepository.findAll();
            }
            catch (error) {
                console.log(error);
                return [];
            }
        });
    }
    getCategoriaByNombre(nameCategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._categoriasRepository.findOne({
                    where: {
                        nombre: nameCategoria.toLowerCase(),
                    },
                });
            }
            catch (error) {
                console.log(error);
                return undefined;
            }
        });
    }
}
exports.CategoriasRepository = CategoriasRepository;
