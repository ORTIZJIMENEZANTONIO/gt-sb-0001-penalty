import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';

import { ComerPenaltyService } from './comer-penalty.service';
import { FinalDate } from './dto/get-final-date.dto';

@ApiCreatedResponse()
@Controller('comer-penalty')
@ApiTags('comer-penalty')
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

  @ApiOperation({ summary: 'FN_FECHA_FINAL ' })
  @ApiBody({
    type: FinalDate,
    //description: "Información de la Dirección a guardar",
  })
  @ApiResponse({
    status: 200,
    description: 'Fecha final',
    type: String,
  })
  @Post()
  async getFinalDate(@Body() data: FinalDate) {
    return await this.service.getFinalDate(data);
  }

  async penaltyReverse() {}
}
