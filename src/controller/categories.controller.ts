import { CategoriasServices } from "../services/categories.service";
const categoriaService: CategoriasServices = new CategoriasServices();
export const categoriasController = {
  getAllCategorias: (_req: any, res: any) => {
    categoriaService.getAllCategorias().then((result) => {
      res.json(result);
    });
  },
  getCategoriaByNombre: (req: any, res: any) => {
    try {
      const nameCategoria = req.params.name;
      categoriaService.getCategoriaByNombre(nameCategoria).then((result) => {
        res.json(result);
        console.log("entrando por controlador get categoria by nombre");
      });
    } catch (error) {
      console.log(error);
    }
  },
};
