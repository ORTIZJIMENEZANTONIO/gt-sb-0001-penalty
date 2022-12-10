import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class ComerPenaltyService {
  constructor(
    @Inject("SERVICE_PENALTY") private readonly proxy: ClientProxy
  ) {}

  async registerPenalty() {}

  async updatePenalty() {}

  async releasePenalty() {}

  async getFinalDate() {}
  
  async penaltyReverse() {}
}
