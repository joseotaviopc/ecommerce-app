import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ description: 'Get the status of the API' })
  @ApiOkResponse({ description: 'API status' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  getStatus(): string {
    return this.appService.getStatus();
  }
}
