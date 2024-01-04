import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ExternalApiService } from '../src/external-api/external-api.service';
import { Employee, StatusResponse } from '../src/types';

describe('App', () => {
  let app: INestApplication;
  let externalApiService = {
    request: async () => {
      return { status: 'ok' };
    },
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ExternalApiService)
      .useValue(externalApiService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return status object', () => {
    const mockResponse: StatusResponse = { status: 'ok' };

    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(mockResponse);
  });

  it('Should request employees and accept the data asynchronously', async () => {
    const mockApiResponse: StatusResponse = { status: 'ok' };

    const mockEmployeeResponse: Employee[] = [
      { id: '1', name: 'Employee 1' },
      { id: '2', name: 'Employee 2' },
    ];

    const spy = jest.spyOn(externalApiService, 'request');

    const apiRequest = await externalApiService.request();

    expect(spy).toHaveBeenCalled();

    expect(apiRequest).toEqual(mockApiResponse);

    return request(app.getHttpServer())
      .post('/employee')
      .send(mockEmployeeResponse)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect(mockEmployeeResponse);
  });
});
