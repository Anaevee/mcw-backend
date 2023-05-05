import { CategoriasRepository } from "../repositories/categories.repository";
import { CategoriasDTO } from "./../types";
import { CategoriasPojo } from "../models/categories.model";

export class CategoriasServices {
  _categoriasRepository: CategoriasRepository;

  constructor() {
    this._categoriasRepository = new CategoriasRepository();
  }
  async getAllCategorias(): Promise<CategoriasDTO[] | undefined> {
    const categoriaPromise: CategoriasDTO[] | undefined =
      await this._categoriasRepository
        .getAllCategorias()
        .then((categoriaPOJO) => {
          if (!!categoriaPOJO) {
            return this.convertArrayPOJOtoArrayDTO(categoriaPOJO);
          } else {
            return undefined;
          }
        });
    return categoriaPromise;
  }
  async getCategoriaByNombre(
    nameCategoria: string
  ): Promise<CategoriasDTO | undefined> {
    const productoPromise = await this._categoriasRepository
      .getCategoriaByNombre(nameCategoria)
      .then((categoriasAsPojo) => {
        //La doble exclamación indica que es distinto a nulo y a undefined
        if (!!categoriasAsPojo) {
          return this.convertPOJOtoDTO(categoriasAsPojo);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return productoPromise;
  }
  convertPOJOtoDTO(productPOJO: CategoriasPojo) {
    let categorias: CategoriasDTO = productPOJO;
    return categorias;
  }
  convertArrayPOJOtoArrayDTO(productPOJO: CategoriasPojo[]) {
    let categorias: CategoriasDTO[] = productPOJO;
    return categorias;
  }
}
