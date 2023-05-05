import { UserService } from "../services/user.service";
import * as jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { UserDTO } from "../types";

const userService: UserService = new UserService();

export const userController = {
  addNewUser: (req: any, res: any) => {
    try {
      const user: UserDTO = req.body;
      user.userId = uuidv4();
      userService.addNewUser(user).then((NewUser) => {
        res.json(NewUser);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

  login: (req: any, res: any) => {
    try {
      const usuarioLogin = req.body;
      userService.login(usuarioLogin.email).then((result) => {
        console.log(result);
        if (result != null && result.password === usuarioLogin.password) {
          const token = jwt.sign(
            {
              email: result.email,
              password: result.password,
            },
            "clave privada"
          );
          res.json({ token });
        } else {
          res.sendStatus(500);
        }
      });
    } catch {
      res.sendStatus(400);
    }
  },
  getUserById: (req: any, res: any) => {
    try {
      const user: string = req.params.id;
      userService.getUserById(user).then((userId) => {
        res.json(userId);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  userUpdate: (req: any, res: any) => {
    try {
      const user: UserDTO = req.body;
      userService.updateUser(user).then((userUpdate) => {
        res.json(userUpdate);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
};
