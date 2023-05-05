import { Table, Column, Model } from "sequelize-typescript";
import { STRING, BOOLEAN } from "sequelize";

@Table({
  freezeTableName: true,
  schema: "key",
  tableName: "usuarios",
  createdAt: false,
  updatedAt: false,
})
export class UserPojo extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: STRING,
    field: "userId",
  })
  userId: string;

  @Column({
    type: STRING,
    field: "userName",
  })
  userName: string;

  @Column({
    type: STRING,
    field: "password",
  })
  password: string;

  @Column({
    type: STRING,
    field: "email",
  })
  email: string;
  @Column({
    type: STRING,
    field: "direccion",
  })
  direccion: string;
  @Column({
    type: STRING,
    field: "birthdate",
  })
  birthdate: string;
  @Column({
    type: BOOLEAN,
    field: "activo",
  })
  activo: boolean;
}
