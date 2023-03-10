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
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let QuestionService = class QuestionService {
    constructor(questionProxy) {
        this.questionProxy = questionProxy;
    }
    async createQuestion(question) {
        const pattern = { cmd: 'createQuestion' };
        return await this.questionProxy.send(pattern, question);
    }
    async getAllQuestions(pagination) {
        const pattern = { cmd: 'getAllQuestions' };
        return await this.questionProxy.send(pattern, pagination);
    }
    async getQuestionById(id) {
        const pattern = { cmd: 'getQuestionById' };
        return await this.questionProxy.send(pattern, id);
    }
    async updateQuestion(idToUpdate, question) {
        const pattern = { cmd: 'updateQuestion' };
        const body = { idToUpdate, question };
        return await this.questionProxy.send(pattern, body);
    }
    async deleteQuestion(id) {
        const pattern = { cmd: 'deleteQuestion' };
        return await this.questionProxy.send(pattern, id);
    }
};
QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_QUESTION')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map