"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsPOJO = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const user_model_1 = require("../models/user.model");
const foto_model_1 = require("../models/foto.model");
const subcategories_model_1 = require("../models/subcategories.model");
const categories_model_1 = require("../models/categories.model");
let ProductsPOJO = class ProductsPOJO extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.STRING,
        field: "idProducto",
    }),
    __metadata("design:type", String)
], ProductsPOJO.prototype, "idProducto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "descripcion",
    }),
    __metadata("design:type", String)
], ProductsPOJO.prototype, "descripcion", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "nameProducto",
    }),
    __metadata("design:type", String)
], ProductsPOJO.prototype, "nameProducto", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => subcategories_model_1.SubcategoriasPojo),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "idSubcategoria",
    }),
    __metadata("design:type", String)
], ProductsPOJO.prototype, "idSubcategoria", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => subcategories_model_1.SubcategoriasPojo) // Agregar esta línea para establecer la relación con el modelo de subcategorías
    ,
    __metadata("design:type", subcategories_model_1.SubcategoriasPojo)
], ProductsPOJO.prototype, "subcategoria", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "idCategoria",
    }),
    __metadata("design:type", String)
], ProductsPOJO.prototype, "idCategoria", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.INTEGER,
        field: "precio",
    }),
    __metadata("design:type", Number)
], ProductsPOJO.prototype, "precio", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.UserPojo) // especificar la clave primaria de la tabla Usuarios
    ,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "userId",
    }),
    __metadata("design:type", String)
], ProductsPOJO.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.UserPojo) // establecer la relación entre el modelo ProductosPojo y el modelo UsuariosPojo
    ,
    __metadata("design:type", user_model_1.UserPojo)
], ProductsPOJO.prototype, "usuario", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => foto_model_1.ImagenesPojo) // define la relación con el modelo de imágenes
    ,
    __metadata("design:type", Array)
], ProductsPOJO.prototype, "imagen_produ", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => categories_model_1.CategoriasPojo) // especificar la clave primaria de la tabla Usuarios
    ,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "stock",
    }),
    __metadata("design:type", Number)
], ProductsPOJO.prototype, "stock", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.INTEGER,
        field: "namePhoto",
    }),
    __metadata("design:type", String)
], ProductsPOJO.prototype, "namePhoto", void 0);
ProductsPOJO = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        schema: "key",
        tableName: "productos",
    })
], ProductsPOJO);
exports.ProductsPOJO = ProductsPOJO;
