import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

// @Controller()
@Controller('cats')
export class CatsController {
  // /cats + /all = /cats/all
  @Get('all')
  // при вызове /cats/all срабатывает метод findAll()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
