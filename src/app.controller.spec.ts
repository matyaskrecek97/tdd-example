import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeService } from './employee/employee.service';
import { StatusResponse } from './types';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, EmployeeService],
    })
      .overrideProvider(EmployeeService)
      .useValue(() => {})
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    const mockValue: StatusResponse = { status: 'ok' };

    it('should return status', () => {
      expect(appController.status()).toEqual(mockValue);
    });
  });
});
