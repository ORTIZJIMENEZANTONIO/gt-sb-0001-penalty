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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalAffairController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const legal_affair_service_1 = require("./legal-affair.service");
const legal_affair_dto_1 = require("./dto/legal-affair.dto");
let LegalAffairController = class LegalAffairController {
    constructor(legalAffairService) {
        this.legalAffairService = legalAffairService;
    }
    async createLegalAffair(legalAffairDto) {
        return await this.legalAffairService.createLegalAffair(legalAffairDto);
    }
    async getAllLegalAffairs(pagination) {
        return await this.legalAffairService.getAllLegalAffairs(pagination);
    }
    async getLegalAffairById(id) {
        return await this.legalAffairService.getLegalAffairById(id);
    }
    async updateLegalAffair(idToUpdate, data) {
        return await this.legalAffairService.updateLegalAffair(idToUpdate, data);
    }
    async deleteLegalAffair(id) {
        return await this.legalAffairService.deleteLegalAffair(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar asunto jur??dico' }),
    (0, swagger_1.ApiBody)({
        type: legal_affair_dto_1.LegalAffairDto,
        description: 'Informaci??n de asunto jur??dico a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda asunto jur??dico',
        type: legal_affair_dto_1.LegalAffairDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [legal_affair_dto_1.LegalAffairDto]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "createLegalAffair", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los asuntos jur??dico' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de asuntos jur??dico existentes',
        type: legal_affair_dto_1.LegalAffairDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "getAllLegalAffairs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener asunto jur??dico por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del asunto jur??dico'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Asunto jur??dico obtenido por su identificador',
        type: legal_affair_dto_1.LegalAffairDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "getLegalAffairById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar asunto jur??dico' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador num??rico del tipo de asunto jur??dico'
    }),
    (0, swagger_1.ApiBody)({
        type: legal_affair_dto_1.LegalAffairDto,
        description: 'Objeto del asunto jur??dico a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar asunto jur??dico por su identificador',
        type: legal_affair_dto_1.LegalAffairDto,
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, legal_affair_dto_1.LegalAffairDto]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "updateLegalAffair", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar asunto jur??dico por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador num??rico del tipo de asunto a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar asunto jur??dico por su identificador',
        type: legal_affair_dto_1.LegalAffairDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "deleteLegalAffair", null);
LegalAffairController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('legal-affair'),
    (0, swagger_1.ApiTags)('legal-affair'),
    __metadata("design:paramtypes", [legal_affair_service_1.LegalAffairService])
], LegalAffairController);
exports.LegalAffairController = LegalAffairController;
//# sourceMappingURL=legal-affair.controller.js.map