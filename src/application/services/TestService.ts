import { Injectable } from '@nestjs/common';
import { Template } from '../../interfaces/templates.interface';

@Injectable()
export default class TestService {
  private readonly templates: Template[] = [
    {
      propertyID: "0",
      data: "Data"
    },
    {
      propertyID: "1",
      data: "Data"
    },
    {
      propertyID: "2",
      data: "Data"
    }
  ];
  
  getTemplate(propertyID: string): Template {
    let template: Template = this.templates.find(function(template) {
      return template.propertyID == propertyID;
    });
    return template;
  }

  listTemplates(): Template[] {
    let listOfTemplates: Template[] = this.templates;
    console.log(listOfTemplates);
    return listOfTemplates;
  }

  createTemplate(template: Template) {
    this.templates.push(template);
    return this.templates;
  }
}
