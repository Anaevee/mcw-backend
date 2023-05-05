import { SubcategoriasServices } from "../services/subcategories.service";
const subcategoriaService: SubcategoriasServices = new SubcategoriasServices();
export const SubcategoriasController = {
  getAllSubcategorias: (_req: any, res: any) => {
    subcategoriaService.getAllSubcategorias().then((result) => {
      res.json(result);
    });
  },
  getSubcategoriaByNombre: (req: any, res: any) => {
    try {
      const nameProducto = req.params.name;
      subcategoriaService
        .getSubcategoriaByNombre(nameProducto)
        .then((result) => {
          res.json(result);
          console.log("entrando por controlador get subcateogira by nombre");
        });
    } catch (error) {
      console.log(error);
    }
  },
  getSubcategoriaByIdCategoria: (req: any, res: any) => {
    try {
      const idCategoria = req.params.idCategoria;
      subcategoriaService
        .getSubcategoriaByIdCategoria(idCategoria)
        .then((result) => {
          res.json(result);
          console.log("entrando por controlador get subcateogira by nombre");
        });
    } catch (error) {
      console.log(error);
    }
  },
};
