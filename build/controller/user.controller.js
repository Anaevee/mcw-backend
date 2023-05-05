"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const jwt = __importStar(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const userService = new user_service_1.UserService();
exports.userController = {
    addNewUser: (req, res) => {
        try {
            const user = req.body;
            user.userId = (0, uuid_1.v4)();
            userService.addNewUser(user).then((NewUser) => {
                res.json(NewUser);
            });
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },
    login: (req, res) => {
        try {
            const usuarioLogin = req.body;
            userService.login(usuarioLogin.email).then((result) => {
                console.log(result);
                if (result != null && result.password === usuarioLogin.password) {
                    const token = jwt.sign({
                        email: result.email,
                        password: result.password,
                    }, "clave privada");
                    res.json({ token });
                }
                else {
                    res.sendStatus(500);
                }
            });
        }
        catch (_a) {
            res.sendStatus(400);
        }
    },
    getUserById: (req, res) => {
        try {
            const user = req.params.id;
            userService.getUserById(user).then((userId) => {
                res.json(userId);
            });
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },
    userUpdate: (req, res) => {
        try {
            const user = req.body;
            userService.updateUser(user).then((userUpdate) => {
                res.json(userUpdate);
            });
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },
};
