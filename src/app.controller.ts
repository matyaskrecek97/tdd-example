import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee, StatusResponse } from './types';
import { EmployeeService } from './employee/employee.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly employeeService: EmployeeService,
  ) {}

  @Get()
  status(): StatusResponse {
    return this.appService.status();
  }

  @Post('/employee')
  async employee(@Body() data: Employee[]) {
    console.log(data);
    return this.employeeService.handleEmployeeData(data);
  }
}
