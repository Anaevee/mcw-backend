export class UserDTO {
  userId: string;
  userName: string;
  direccion: string;
  password: string;
  email: string;
  birthdate: string;
  activo: boolean;
}

export type NewUserDTO = Omit<UserDTO, "userId">;

export class CategoriasDTO {
  idCategoria: string;
  nameCategoria: string;
  nameProducto: string;
  idProducto: string;
}

export class SubcategoriasDTO {
  idSubcategoria: string;
  idCategoria: string;
  nameProducto: string;
  idProducto: string;
}

export class ImagesDto {
  idPhoto: string;
  namePhoto: string;
  idProducto: string;
  ruta_imagen: string;
}
export type newImgDto = Omit<ImagesDto, "idPhoto">;

export class ProductDTO {
  idProducto: string;
  descripcion: string;
  namePhoto: string;
  idSubcategoria: string;
  userId: string;
  idCategoria: string;
  precio: number;
  stock: number;
}
