import { ProductRepository } from "../repositories/product.repository";
import { ImagenesRepository } from "../repositories/foto.repository";
import { ImagesDto, ProductDTO } from "../types";
import { ProductsPOJO } from "../models/product.model";
import { v4 as uuidv4 } from "uuid";

export class ProductServices {
  _productRepository: ProductRepository;
  _imageRepository: ImagenesRepository;

  constructor() {
    this._productRepository = new ProductRepository();
    this._imageRepository = new ImagenesRepository();
  }
  async getAllProductFromCategory(
    nombre_categoria: string
  ): Promise<ProductDTO[] | undefined> {
    const productPromise: ProductDTO[] | undefined =
      await this._productRepository
        .getProductFromCategory(nombre_categoria)
        .then((productPOJO) => {
          if (!!productPOJO) {
            return this.convertArrayPOJOtoArrayDTO(productPOJO);
          } else {
            return undefined;
          }
        });
    return productPromise;
  }
  async getAllProductos(): Promise<ProductDTO[] | undefined> {
    const productPromise: ProductDTO[] | undefined =
      await this._productRepository.getAllProductos().then((productPOJO) => {
        if (!!productPOJO) {
          return this.convertArrayPOJOtoArrayDTO(productPOJO);
        } else {
          return undefined;
        }
      });
    return productPromise;
  }
  async getAllProductosWithImagen(): Promise<ProductDTO[] | undefined> {
    const productPromise: ProductDTO[] | undefined =
      await this._productRepository
        .getAllProductosWithImage()
        .then((productPOJO) => {
          if (!!productPOJO) {
            return this.convertArrayPOJOtoArrayDTO(productPOJO);
          } else {
            return undefined;
          }
        });
    return productPromise;
  }
  async get20ProductosByPrice(
    limite: number
  ): Promise<ProductDTO[] | undefined> {
    const productPromise: ProductDTO[] | undefined =
      await this._productRepository
        .get20ProductosByPrice(limite)
        .then((productPOJO) => {
          if (!!productPOJO) {
            return this.convertArrayPOJOtoArrayDTO(productPOJO);
          } else {
            return undefined;
          }
        });
    return productPromise;
  }
  async get10LastProducto(): Promise<ProductDTO[] | undefined> {
    const productPromise: ProductDTO[] | undefined =
      await this._productRepository.get10LastProductos().then((productPOJO) => {
        if (!!productPOJO) {
          return this.convertArrayPOJOtoArrayDTO(productPOJO);
        } else {
          return undefined;
        }
      });
    return productPromise;
  }
  async addProducto(
    producto: ProductDTO,
    rutas_imagen: string[]
  ): Promise<string | undefined> {
    //TODO: LLamar al repositorio
    const productoPromise = await this._productRepository
      .addProducto(producto)
      .then((productoPojo) => {
        if (!!productoPojo) {
          let imagenes: string[] = rutas_imagen;
          console.log("Rutasasasas" + rutas_imagen);
          imagenes.forEach((element) => {
            let imagen: ImagesDto = {
              idPhoto: uuidv4(),
              ruta_imagen: element,
              idProducto: productoPojo.idProducto,
              namePhoto: productoPojo.idProducto,
            };
            this._imageRepository.addImagen(imagen);
          });
          //this._imageRepository.addImagen()
          return this.convertPOJOtoDTO(productoPojo).idProducto;
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
  async getProductoByIdUsu(id_usu: string): Promise<ProductDTO | undefined> {
    //TODO: LLamar al repositorio
    const productoPromise = await this._productRepository
      .getProductoByIdUsu(id_usu)
      .then((productAsPojo) => {
        //La doble exclamación indica que es distinto a nulo y a undefined
        if (!!productAsPojo) {
          return this.convertPOJOtoDTO(productAsPojo);
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

  convertPOJOtoDTO(productPOJO: ProductsPOJO) {
    let product: ProductDTO = productPOJO;
    return product;
  }
  convertArrayPOJOtoArrayDTO(productPOJO: ProductsPOJO[]) {
    let product: ProductDTO[] = productPOJO;
    return product;
  }
}
