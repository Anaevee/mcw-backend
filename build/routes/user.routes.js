"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
router.post("/registro_usuario", user_controller_1.userController.addNewUser);
router.post("/login", user_controller_1.userController.login);
router.get("/userId/:id", user_controller_1.userController.getUserById);
router.post("/update_user", user_controller_1.userController.userUpdate);
exports.default = router;
module.exports = router;
