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
exports.ResponseService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ResponseService = class ResponseService {
    constructor(reponseProxy) {
        this.reponseProxy = reponseProxy;
    }
    async createResponse(response) {
        const pattern = { cmd: 'createResponse' };
        return await this.reponseProxy.send(pattern, response);
    }
    async getAllResponses(pagination) {
        const pattern = { cmd: 'getAllResponses' };
        return await this.reponseProxy.send(pattern, pagination);
    }
    async getResponseById(id) {
        const pattern = { cmd: 'getResponseById' };
        return await this.reponseProxy.send(pattern, id);
    }
    async updateResponse(idToUpdate, response) {
        const pattern = { cmd: 'updateResponse' };
        const body = Object.assign({ idToUpdate }, response);
        return await this.reponseProxy.send(pattern, body);
    }
    async deleteResponse(id) {
        const pattern = { cmd: 'deleteResponse' };
        return await this.reponseProxy.send(pattern, id);
    }
};
ResponseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_RESPONSE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ResponseService);
exports.ResponseService = ResponseService;
//# sourceMappingURL=response.service.js.map