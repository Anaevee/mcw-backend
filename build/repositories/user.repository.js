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
exports.UserRepository = void 0;
const user_model_1 = require("../models/user.model");
const db_config_1 = require("../data/config/db.config");
class UserRepository {
    constructor() {
        this._database = {};
        this._database = (0, db_config_1.connect)();
        this._userRepository = this._database.sequelize.getRepository(user_model_1.UserPojo);
    }
    addNewUser(NewUserDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(NewUserDTO);
                return yield this._userRepository.create(NewUserDTO);
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
    login(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            try {
                data = yield this._userRepository.findOne({ where: { email } });
                if (data == null) {
                    Error("The user does not exist.");
                }
                else {
                    console.log("el usuario existe");
                    console.log(data);
                }
            }
            catch (err) {
                Error("An Error occurred when retrieving the user.");
                Error(err);
            }
            return data;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._userRepository.findByPk(userId);
            }
            catch (error) {
                console.error();
                return undefined;
            }
        });
    }
    updateUser(userUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._userRepository.update(userUpdate, {
                    where: { userId: userUpdate.userId },
                });
                return yield this.getUserById(userUpdate.userId);
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
}
exports.UserRepository = UserRepository;
