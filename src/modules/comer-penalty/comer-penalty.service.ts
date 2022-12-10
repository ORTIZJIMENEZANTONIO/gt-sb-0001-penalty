import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { FinalDate } from "./dto/get-final-date.dto";
import { ReleasePenaltyDto } from "./dto/release-penalty.dto";

@Injectable()
export class ComerPenaltyService {
  constructor(
    @Inject("SERVICE_PENALTY") private readonly proxy: ClientProxy
  ) {}

  async registerPenalty() {}

  async updatePenalty() {}

  async releasePenalty(data: ReleasePenaltyDto) {
    const pattern = { cmd: "releasePenalty" };
    return await this.proxy.send(pattern, data);
  }

  async getFinalDate(data: FinalDate) {
    const pattern = { cmd: "getFinalDate" };
    return await this.proxy.send(pattern, data);
  }
  
  async penaltyReverse() {}
}
