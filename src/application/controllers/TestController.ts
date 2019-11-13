import { Controller, Post, Req, Res, HttpStatus, Get, Param, Body } from '@nestjs/common';
import TestService from '../services/TestService';
import { Template } from '../../interfaces/templates.interface';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  listTemplates(): Template[] {
    let listOfTemplates: Template[] = this.testService.listTemplates();
    return listOfTemplates;
  }

  @Get(':propertyID')
  getTemplate(@Param('propertyID') propertyID: string): Template {
    let template: Template = this.testService.getTemplate(propertyID);
    return template;
  }

  @Post()
  createTemplate(@Body() template: Template) {
    return this.testService.createTemplate(template);
  }
}