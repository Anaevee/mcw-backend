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
exports.CategoriasPojo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
let CategoriasPojo = class CategoriasPojo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.STRING,
        field: "idCategoria",
    }),
    __metadata("design:type", String)
], CategoriasPojo.prototype, "idCategoria", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "nameCategoria",
    }),
    __metadata("design:type", String)
], CategoriasPojo.prototype, "nameCategoria", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "nameProducto",
    }),
    __metadata("design:type", String)
], CategoriasPojo.prototype, "nameProducto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: "idProducto",
    }),
    __metadata("design:type", String)
], CategoriasPojo.prototype, "idProducto", void 0);
CategoriasPojo = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        tableName: "categorias",
        schema: "key",
    })
], CategoriasPojo);
exports.CategoriasPojo = CategoriasPojo;
