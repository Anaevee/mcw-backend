import { CategoriasPojo } from "../models/categories.model";
import { connect } from "../data/config/db.config";

export class CategoriasRepository {
  _database: any = {};
  _categoriasRepository: any;

  constructor() {
    this._database = connect();
    this._categoriasRepository =
      this._database.sequelize.getRepository(CategoriasPojo);
  }
  async getAllCategorias(): Promise<CategoriasPojo[]> {
    try {
      //Tenemos que tener await porque estamos devolviendo una promesa
      return await this._categoriasRepository.findAll();
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async getCategoriaByNombre(
    nameCategoria: string
  ): Promise<CategoriasPojo | undefined> {
    try {
      return await this._categoriasRepository.findOne({
        where: {
          nombre: nameCategoria.toLowerCase(),
        },
      });
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}
