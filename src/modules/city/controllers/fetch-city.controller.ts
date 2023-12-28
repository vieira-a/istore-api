import { Controller, Get } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';

import { ConflitContentException } from '../../../modules/shared/exceptions';
import { registerSuccess } from '../../../modules/shared/helpers';
import { CityDto } from '../dtos';
import { SaveCityService } from '../services';

@Controller('city/fetch')
@ApiTags('cidades')
export class FetchCityController {
  constructor(private readonly saveCityService: SaveCityService) {}

  @ApiCreatedResponse({
    description: 'Cadastrado com sucesso',
    type: CityDto,
  })
  @ApiConflictResponse({
    description: 'Dados já cadastrados',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get()
  async fetch() {
    const result = await this.saveCityService.save();
    if (!result) {
      throw new ConflitContentException();
    }
    return registerSuccess(result);
  }
}
