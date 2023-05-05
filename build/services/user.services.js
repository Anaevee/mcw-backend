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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    constructor() {
        this._userRepository = new user_repository_1.UserRepository();
    }
    addNewUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = (0, uuid_1.v4)();
            user.userId = userId;
            let nuevoUserPojo = this.parseDtoIntoPojo(user);
            const userPromise = yield this._userRepository
                .addNewUser(nuevoUserPojo)
                .then((userId) => {
                if (!!userId) {
                    return this.firmarToken(nuevoUserPojo.userId);
                }
                else {
                    return undefined;
                }
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    login(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository
                .login(email)
                .then((userAsPojo) => {
                console.log(userAsPojo);
                if (userAsPojo != null) {
                    return this.parsePojoIntoDto(userAsPojo);
                }
                else {
                    console.log("error aqui");
                    return undefined;
                }
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository
                .getUserById(id)
                .then((newUserPOJO) => {
                if (!!newUserPOJO) {
                    return this.parsePojoIntoDto(newUserPOJO);
                }
                else {
                    return undefined;
                }
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    updateUser(userUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository
                .updateUser(userUpdate)
                .then((user) => {
                if (!!user) {
                    return this.parsePojoIntoDto(user);
                }
                else {
                    return undefined;
                }
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    parsePojoIntoDto(userPojo) {
        const userDto = {
            userId: userPojo.dataValues.userId,
            userName: userPojo.dataValues.userName,
            password: userPojo.dataValues.password,
            email: userPojo.dataValues.email,
            direccion: userPojo.dataValues.direccion,
            birthdate: userPojo.dataValues.birthdate,
            activo: userPojo.dataValues.activo,
        };
        return userDto;
    }
    parseDtoIntoPojo(userDTO) {
        return userDTO;
    }
    firmarToken(userId) {
        let token = jsonwebtoken_1.default.sign({ userId: userId }, process.env.TKN_SECRET, {
            expiresIn: 42300,
        });
        return token;
    }
}
exports.UserService = UserService;
