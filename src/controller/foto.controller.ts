import { ImagenesService } from "../services/foto.service";
const imagenesService: ImagenesService = new ImagenesService();
export const imagenesController = {
  getAllImagenesByProdu: (req: any, res: any) => {
    try {
      const idProducto = req.params.id;
      imagenesService.getAllImagenesByProdu(idProducto).then((result) => {
        res.json(result);
        console.log("entrando por controlador all Imagenes by produ");
      });
    } catch (error) {
      console.log(error);
    }
  },
};
