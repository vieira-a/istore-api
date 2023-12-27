import { Controller, Get } from '@nestjs/common';

import { ConflitContentException } from '../../../modules/shared/exceptions';
import { registerSuccess } from '../../../modules/shared/helpers';
import { SaveCityService } from '../services';

@Controller('city/fetch')
export class FetchCityController {
  constructor(private readonly saveCityService: SaveCityService) {}

  @Get()
  async fetch() {
    const result = await this.saveCityService.save();
    if (!result) {
      throw new ConflitContentException();
    }
    return registerSuccess(result);
  }
}
