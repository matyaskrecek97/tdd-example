import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { ExternalApiModule } from './external-api/external-api.module';

@Module({
  imports: [EmployeeModule, ExternalApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
