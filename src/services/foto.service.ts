import { ImagenesPojo } from "../models/foto.model";
import { ImagesDto } from "../types";
import { ImagenesRepository } from "../repositories/foto.repository";

export class ImagenesService {
  _imagenesRepository: ImagenesRepository;

  constructor() {
    this._imagenesRepository = new ImagenesRepository();
  }
  async getAllImagenesByProdu(
    id_produ: string
  ): Promise<ImagesDto[] | undefined> {
    const productPromise: ImagesDto[] | undefined =
      await this._imagenesRepository
        .getAllImagesByProdu(id_produ)
        .then((imagenPojo) => {
          if (!!imagenPojo) {
            return this.convertArrayPOJOtoArrayDTO(imagenPojo);
          } else {
            return undefined;
          }
        });
    return productPromise;
  }
  async addImagen(imagenDto: ImagesDto): Promise<string | undefined> {
    //TODO: LLamar al repositorio
    const productoPromise = await this._imagenesRepository
      .addImagen(imagenDto)
      .then((ImagenPojo) => {
        console.log("holaaaaap" + ImagenPojo);
        if (!!ImagenPojo) {
          return this.convertPOJOtoDTO(ImagenPojo).idProducto;
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

  convertPOJOtoDTO(imagenPojo: ImagenesPojo) {
    let imagenesPruebas: ImagesDto = imagenPojo;
    return imagenesPruebas;
  }
  convertArrayPOJOtoArrayDTO(imagenPojo: ImagenesPojo[]) {
    let imagenes: ImagesDto[] = imagenPojo;
    return imagenes;
  }
}
