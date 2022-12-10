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
exports.GoodsSubTypeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class GoodsSubTypeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Id del subtipo de bien' }),
    __metadata("design:type", Number)
], GoodsSubTypeDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Id tipo bien' }),
    __metadata("design:type", Number)
], GoodsSubTypeDTO.prototype, "id_tipo_bien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Detalle del subtipo' }),
    __metadata("design:type", Number)
], GoodsSubTypeDTO.prototype, "nombre_subtipo_bien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], GoodsSubTypeDTO.prototype, "usuario_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Date)
], GoodsSubTypeDTO.prototype, "fecha_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], GoodsSubTypeDTO.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Date)
], GoodsSubTypeDTO.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], GoodsSubTypeDTO.prototype, "no_fotografias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], GoodsSubTypeDTO.prototype, "desc_fotografias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], GoodsSubTypeDTO.prototype, "version", void 0);
exports.GoodsSubTypeDTO = GoodsSubTypeDTO;
//# sourceMappingURL=goods-subtype.dto.js.map