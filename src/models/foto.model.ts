import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { STRING } from "sequelize";
import { ProductsPOJO } from "./products.model";

/* Esto es el POJO */
@Table({
  freezeTableName: true, //esto hace que la tabla no vaya a cambiar de nombre
  tableName: "fotos",
  schema: "key", //en nuestra bbdd del proyecto esto se llamará como el esquema especificado
})
export class ImagenesPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "idPhoto",
  })
  idPhoto: string;
  @Column({
    type: STRING,
    field: "namePhoto",
  })
  namePhoto: string;
  @ForeignKey(() => ProductsPOJO) // esto indica que la clave foránea es una referencia al ID de la tabla de productos
  @Column({
    type: STRING,
    field: "idProducto",
  })
  idProducto: string;
}
