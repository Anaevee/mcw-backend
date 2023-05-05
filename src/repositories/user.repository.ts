import { UserPojo } from "../models/user.model";
import { connect } from "../data/config/db.config";
import { UserDTO } from "../types";

export class UserRepository {
  _database: any = {};
  _userRepository: any;

  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(UserPojo);
  }
  async addNewUser(NewUserDTO: UserDTO): Promise<UserPojo | undefined> {
    try {
      console.log(NewUserDTO);
      return await this._userRepository.create(NewUserDTO);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  async login(email: string): Promise<UserPojo> {
    let data: UserPojo = {} as UserPojo;
    try {
      data = await this._userRepository.findOne({ where: { email } });
      if (data == null) {
        Error("The user does not exist.");
      } else {
        console.log("el usuario existe");
        console.log(data);
      }
    } catch (err) {
      Error("An Error occurred when retrieving the user.");
      Error(err);
    }
    return data;
  }
  async getUserById(userId: string): Promise<UserPojo | undefined> {
    try {
      return await this._userRepository.findByPk(userId);
    } catch (error) {
      console.error();
      return undefined;
    }
  }
  async updateUser(userUpdate: UserDTO): Promise<UserPojo | undefined> {
    try {
      await this._userRepository.update(userUpdate, {
        where: { userId: userUpdate.userId },
      });
      return await this.getUserById(userUpdate.userId);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
