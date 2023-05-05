import { connect } from "../data/config/db.config";
import { ProductsPOJO } from "../models/product.model";
import { ImagenesPojo } from "../models/foto.model";
import { ProductDTO } from "../types";
import { SubcategoriasPojo } from "../models/subcategories.model";

export class ProductRepository {
  _database: any = {};
  _productRepository: any;
  _subcategoriaRepository: any;
  _imagesRepository: any;

  constructor() {
    this._database = connect();
    this._productRepository =
      this._database.sequelize.getRepository(ProductsPOJO);
    this._imagesRepository =
      this._database.sequelize.getRepository(ImagenesPojo);
    this._subcategoriaRepository =
      this._database.sequelize.getRepository(SubcategoriasPojo);
  }
  async getProductFromCategory(
    nombre_categoria: string
  ): Promise<ProductsPOJO[] | undefined> {
    try {
      return await this._productRepository.findAll({
        include: [
          {
            model: this._imagesRepository,

            attributes: ["ruta_imagen"],
          },

          this._subcategoriaRepository,
        ],
        where: {
          id_categoria: nombre_categoria,
        },
      });
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  async getAllProductos(): Promise<ProductsPOJO[]> {
    try {
      //Tenemos que tener await porque estamos devolviendo una promesa
      return await this._productRepository.findAll();
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async getAllProductosWithImage(): Promise<ProductsPOJO[]> {
    try {
      //Tenemos que tener await porque estamos devolviendo una promesa

      return await this._productRepository.findAll({
        include: [
          {
            model: this._imagesRepository,
            attributes: ["ruta_imagen"],
          },
          this._subcategoriaRepository,
        ],
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async get20ProductosByPrice(limite: number): Promise<ProductsPOJO[]> {
    try {
      //Tenemos que tener await porque estamos devolviendo una promesa

      return await this._productRepository.findAll({
        include: [
          {
            model: this._imagesRepository,
            attributes: ["ruta_imagen"],
          },
          this._subcategoriaRepository,
        ],
        order: [["precio_producto", "ASC"]],
        limit: limite,
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async get10LastProductos(): Promise<ProductsPOJO[]> {
    try {
      //Tenemos que tener await porque estamos devolviendo una promesa

      return await this._productRepository.findAll({
        include: [
          {
            model: this._imagesRepository,
            attributes: ["ruta_imagen"],
          },
          this._subcategoriaRepository,
        ],
        order: [["created_at", "DESC"]],
        limit: 10,
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async getProductoByIdUsu(id_usu: string): Promise<ProductsPOJO | undefined> {
    try {
      console.log(id_usu);
      return await this._productRepository.findAll({
        where: {
          id_usuario: id_usu,
        },
      });
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async addProducto(
    newProducto: ProductDTO
  ): Promise<ProductsPOJO | undefined> {
    try {
      console.log(newProducto);
      return await this._productRepository.create(newProducto);
    } catch (error) {
      console.log(error);
      return undefined; //-1 indicamos que ha finalizado con errores
    }
  }
}
