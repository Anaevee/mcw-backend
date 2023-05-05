import { Table, Column, Model } from "sequelize-typescript";
import { STRING } from "sequelize";

@Table({
  freezeTableName: true,
  tableName: "categorias",
  schema: "key",
})
export class CategoriasPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "idCategoria",
  })
  idCategoria: string;
  @Column({
    type: STRING,
    field: "nameCategoria",
  })
  nameCategoria: string;
  @Column({
    type: STRING,
    field: "nameProducto",
  })
  nameProducto: string;
  @Column({
    type: STRING,
    field: "idProducto",
  })
  idProducto: string;
}
