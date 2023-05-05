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
exports.ImagenesService = void 0;
const foto_repository_1 = require("../repositories/foto.repository");
class ImagenesService {
    constructor() {
        this._imagenesRepository = new foto_repository_1.ImagenesRepository();
    }
    getAllImagenesByProdu(id_produ) {
        return __awaiter(this, void 0, void 0, function* () {
            const productPromise = yield this._imagenesRepository
                .getAllImagesByProdu(id_produ)
                .then((imagenPojo) => {
                if (!!imagenPojo) {
                    return this.convertArrayPOJOtoArrayDTO(imagenPojo);
                }
                else {
                    return undefined;
                }
            });
            return productPromise;
        });
    }
    addImagen(imagenDto) {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: LLamar al repositorio
            const productoPromise = yield this._imagenesRepository
                .addImagen(imagenDto)
                .then((ImagenPojo) => {
                console.log("holaaaaap" + ImagenPojo);
                if (!!ImagenPojo) {
                    return this.convertPOJOtoDTO(ImagenPojo).idProducto;
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
    convertPOJOtoDTO(imagenPojo) {
        let imagenesPruebas = imagenPojo;
        return imagenesPruebas;
    }
    convertArrayPOJOtoArrayDTO(imagenPojo) {
        let imagenes = imagenPojo;
        return imagenes;
    }
}
exports.ImagenesService = ImagenesService;
