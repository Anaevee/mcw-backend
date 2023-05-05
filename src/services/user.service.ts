import { UserDTO } from "../types";
import { UserRepository } from "../repositories/user.repository";
import { UserPojo } from "../models/user.model";
import { NewUserDTO } from "../types";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";

export class UserService {
  _userRepository: UserRepository;
  constructor() {
    this._userRepository = new UserRepository();
  }

  async addNewUser(user: UserDTO): Promise<string | undefined> {
    let userId: string = uuid();
    user.userId = userId;
    let nuevoUserPojo: UserPojo = this.parseDtoIntoPojo(user);

    const userPromise: string | undefined = await this._userRepository
      .addNewUser(nuevoUserPojo)
      .then((userId) => {
        if (!!userId) {
          return this.firmarToken(nuevoUserPojo.userId);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }

  async login(email: string): Promise<UserDTO | undefined> {
    const userPromise = await this._userRepository
      .login(email)
      .then((userAsPojo) => {
        console.log(userAsPojo);
        if (userAsPojo != null) {
          return this.parsePojoIntoDto(userAsPojo);
        } else {
          console.log("error aqui");
          return undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }
  async getUserById(id: string): Promise<UserDTO | undefined> {
    const userPromise: UserDTO | undefined = await this._userRepository
      .getUserById(id)
      .then((newUserPOJO) => {
        if (!!newUserPOJO) {
          return this.parsePojoIntoDto(newUserPOJO);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }
  async updateUser(userUpdate: UserDTO): Promise<UserDTO | undefined> {
    const userPromise: UserDTO | undefined = await this._userRepository
      .updateUser(userUpdate)
      .then((user) => {
        if (!!user) {
          return this.parsePojoIntoDto(user);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }

  parsePojoIntoDto(userPojo: UserPojo): UserDTO {
    const userDto: UserDTO = {
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

  parseDtoIntoPojo(userDTO: NewUserDTO): UserPojo {
    return userDTO as unknown as UserPojo;
  }
  firmarToken(userId: string) {
    let token = jwt.sign({ userId: userId }, process.env.TKN_SECRET!, {
      expiresIn: 42300,
    });
    return token;
  }
}
