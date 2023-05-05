import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
  BelongsTo,
} from "sequelize-typescript";
import { STRING, INTEGER } from "sequelize";
import { UserPojo } from "../models/user.model";
import { ImagenesPojo } from "../models/foto.model";
import { SubcategoriasPojo } from "../models/subcategories.model";
import { CategoriasPojo } from "../models/categories.model";

@Table({
  freezeTableName: true,
  schema: "key",
  tableName: "productos",
})
export class ProductsPOJO extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "idProducto",
  })
  idProducto: string;

  @Column({
    type: STRING,
    field: "descripcion",
  })
  descripcion: string;

  @Column({
    type: STRING,
    field: "nameProducto",
  })
  nameProducto: string;

  @ForeignKey(() => SubcategoriasPojo)
  @Column({
    type: STRING,
    field: "idSubcategoria",
  })
  idSubcategoria: string;

  @BelongsTo(() => SubcategoriasPojo) // Agregar esta línea para establecer la relación con el modelo de subcategorías
  subcategoria: SubcategoriasPojo; // Agregar esta línea para crear una propiedad "subcategoria" en el modelo de Productos

  @Column({
    type: STRING,
    field: "idCategoria",
  })
  idCategoria: string;

  @Column({
    type: INTEGER,
    field: "precio",
  })
  precio: number;

  @ForeignKey(() => UserPojo) // especificar la clave primaria de la tabla Usuarios
  @Column({
    type: STRING,
    field: "userId",
  })
  userId: string;

  @BelongsTo(() => UserPojo) // establecer la relación entre el modelo ProductosPojo y el modelo UsuariosPojo
  usuario: UserPojo;

  @HasMany(() => ImagenesPojo) // define la relación con el modelo de imágenes
  imagen_produ: ImagenesPojo[];

  @ForeignKey(() => CategoriasPojo) // especificar la clave primaria de la tabla Usuarios
  @Column({
    type: STRING,
    field: "stock",
  })
  stock: number;

  @Column({
    type: INTEGER,
    field: "namePhoto",
  })
  namePhoto: string;
}
