import { SubcategoriasRepository } from "../repositories/subcategories.repository";
import { SubcategoriasDTO } from "../types";
import { SubcategoriasPojo } from "../models/subcategories.model";

export class SubcategoriasServices {
  _subcategoriasRepository: SubcategoriasRepository;

  constructor() {
    this._subcategoriasRepository = new SubcategoriasRepository();
  }
  async getAllSubcategorias(): Promise<SubcategoriasDTO[] | undefined> {
    const subcategoriasPromise: SubcategoriasDTO[] | undefined =
      await this._subcategoriasRepository
        .getAllSubcategorias()
        .then((subcategoriaPOJO) => {
          if (!!subcategoriaPOJO) {
            return this.convertArrayPOJOtoArrayDTO(subcategoriaPOJO);
          } else {
            return undefined;
          }
        });
    return subcategoriasPromise;
  }
  async getSubcategoriaByNombre(
    nameProducto: string
  ): Promise<SubcategoriasDTO | undefined> {
    //TODO: LLamar al repositorio
    const subcategoriaPromise = await this._subcategoriasRepository
      .getSubcategoriaByNombre(nameProducto)
      .then((subcategoriasPojo) => {
        //La doble exclamación indica que es distinto a nulo y a undefined
        if (!!subcategoriasPojo) {
          return this.convertPOJOtoDTO(subcategoriasPojo);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return subcategoriaPromise;
  }
  async getSubcategoriaByIdCategoria(
    idCategoria: string
  ): Promise<SubcategoriasDTO | undefined> {
    //TODO: LLamar al repositorio
    const subcategoriaPromise = await this._subcategoriasRepository
      .getSubcategoriaByIdCategoria(idCategoria)
      .then((subcategoriasPojo) => {
        //La doble exclamación indica que es distinto a nulo y a undefined
        if (!!subcategoriasPojo) {
          return this.convertPOJOtoDTO(subcategoriasPojo);
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return subcategoriaPromise;
  }
  convertPOJOtoDTO(subcategoriaPojo: SubcategoriasPojo) {
    let subcategorias: SubcategoriasDTO = subcategoriaPojo;
    return subcategorias;
  }
  convertArrayPOJOtoArrayDTO(subcategoriaPojo: SubcategoriasPojo[]) {
    let subcategorias: SubcategoriasDTO[] = subcategoriaPojo;
    return subcategorias;
  }
}
