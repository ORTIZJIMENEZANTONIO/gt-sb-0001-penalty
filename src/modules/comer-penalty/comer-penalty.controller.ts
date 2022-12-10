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
import { ReleasePenaltyDto } from './dto/release-penalty.dto';

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

  @ApiOperation({ summary: 'PA_LIBERA_PENALIZACION' })
  @ApiBody({
    type: FinalDate,
  })
  @ApiResponse({
    status: 200,
    description: 'Fecha final',
    type: String,
  })
  @Post("release")
  async releasePenalty(@Body() data: ReleasePenaltyDto) {
    return await this.service.releasePenalty(data);
  }

  @ApiOperation({ summary: 'FN_FECHA_FINAL' })
  @ApiBody({
    type: FinalDate,
  })
  @ApiResponse({
    status: 200,
    description: 'Fecha final',
    type: String,
  })
  @Post("final-date")
  async getFinalDate(@Body() data: FinalDate) {
    return await this.service.getFinalDate(data);
  }

  async penaltyReverse() {}
}
