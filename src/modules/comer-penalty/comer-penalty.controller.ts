import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from "@nestjs/swagger";

import { ComerPenaltyService } from "./comer-penalty.service";

@ApiCreatedResponse()
@Controller('comer-penalty')
@ApiTags("comer-penalty")
export class ComerPenaltyController {
  constructor(private readonly service: ComerPenaltyService) {}

  // @ApiOperation({ summary: "Guardar nueva Direccióne" })
  // @ApiBody({
  //   type: ComerLotDto,
  //   description: "Información de la Dirección a guardar",
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: "Guarda Dirección",
  //   type: ComerLotDto,
  // })
  // @Post()
  async registerPenalty() {}

  async updatePenalty() {}

  async releasePenalty() {}

  async getFinalDate() {}
  
  async penaltyReverse() {}
}
