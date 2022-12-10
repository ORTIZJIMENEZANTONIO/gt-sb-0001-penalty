import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { FinalDate } from "./dto/get-final-date.dto";

@Injectable()
export class ComerPenaltyService {
  constructor(
    @Inject("SERVICE_PENALTY") private readonly proxy: ClientProxy
  ) {}

  async registerPenalty() {}

  async updatePenalty() {}

  async releasePenalty() {}

  async getFinalDate(data: FinalDate) {
    const pattern = { cmd: "getFinalDate" };
    return await this.proxy.send(pattern, data);
  }
  
  async penaltyReverse() {}
}
