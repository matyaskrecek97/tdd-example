import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ExternalApiModule } from '../external-api/external-api.module';

@Module({
  imports: [ExternalApiModule],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
