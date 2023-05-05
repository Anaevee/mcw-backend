import express from "express";
import { userController } from "../controller/user.controller";

const router = express.Router();

router.post("/registro_usuario", userController.addNewUser);
router.post("/login", userController.login);
router.get("/userId/:id", userController.getUserById);
router.post("/update_user", userController.userUpdate);

export default router;
module.exports = router;
