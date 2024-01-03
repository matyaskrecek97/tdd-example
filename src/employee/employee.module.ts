import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { RequestEmployeeTask } from './request-employee.task';
import { ExternalApiModule } from '../external-api/external-api.module';

@Module({
  imports: [ExternalApiModule],
  providers: [EmployeeService, RequestEmployeeTask],
  exports: [EmployeeService, RequestEmployeeTask],
})
export class EmployeeModule {}
