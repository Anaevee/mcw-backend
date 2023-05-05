import { SubcategoriasPojo } from "../models/subcategories.model";
import { connect } from "../data/config/db.config";

export class SubcategoriasRepository {
  _database: any = {};
  _subcategoriasRepository: any;

  constructor() {
    this._database = connect();
    this._subcategoriasRepository =
      this._database.sequelize.getRepository(SubcategoriasPojo);
  }
  async getAllSubcategorias(): Promise<SubcategoriasPojo[]> {
    try {
      //Tenemos que tener await porque estamos devolviendo una promesa
      return await this._subcategoriasRepository.findAll();
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async getSubcategoriaByNombre(
    nameProducto: string
  ): Promise<SubcategoriasPojo | undefined> {
    try {
      return await this._subcategoriasRepository.findOne({
        where: {
          nameProducto: nameProducto.toLowerCase(),
        },
      });
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async getSubcategoriaByIdCategoria(
    idCategoria: string
  ): Promise<SubcategoriasPojo | undefined> {
    try {
      return await this._subcategoriasRepository.findAll({
        where: {
          idCategoria: idCategoria.toLowerCase(),
        },
      });
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}
