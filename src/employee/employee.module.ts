import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { RequestEmployeeTask } from './request-employee.task';

@Module({
  providers: [EmployeeService, RequestEmployeeTask],
  exports: [EmployeeService, RequestEmployeeTask],
})
export class EmployeeModule {}
