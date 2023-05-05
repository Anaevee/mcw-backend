import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { STRING } from "sequelize";
import { CategoriasPojo } from "./categories.model";

@Table({
  freezeTableName: true,
  tableName: "subcategoria",
  schema: "key",
})
export class SubcategoriasPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "idSubcategoria",
  })
  idSubcategoria: string;
  @Column({
    type: STRING,
    field: "nameProducto",
  })
  nameProducto: string;
  @ForeignKey(() => CategoriasPojo) // esto indica que la clave foránea es una referencia al ID de la tabla de productos
  @Column({
    type: STRING,
    field: "idcategoria",
  })
  idCategoria: string;
  @Column({
    type: STRING,
    field: "idProducto",
  })
  idProducto: string;
}
