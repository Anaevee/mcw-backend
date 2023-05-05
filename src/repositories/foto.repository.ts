import { ImagenesPojo } from "../models/foto.model";
import { connect } from "../data/config/db.config";
import { ImagesDto } from "../types";

export class ImagenesRepository {
  _database: any = {};
  _userRepository: any;

  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(ImagenesPojo);
  }
  async getAllImagesByProdu(idProducto: string): Promise<ImagenesPojo[]> {
    try {
      //Tenemos que tener await porque estamos devolviendo una promesa
      return await this._userRepository.findAll({
        where: {
          idProducto: idProducto,
        },
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async addImagen(newImagen: ImagesDto): Promise<ImagenesPojo | undefined> {
    try {
      return await this._userRepository.create(newImagen);
    } catch (error) {
      console.log(error);
      return undefined; //undefined indicamos que ha finalizado con errores
    }
  }
}
