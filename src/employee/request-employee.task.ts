import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ExternalApiService } from '../external-api/external-api.service';
import { RequestEntities } from '../types';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RequestEmployeeTask {
  private readonly logger = new Logger(RequestEmployeeTask.name);

  constructor(private readonly externalApiService: ExternalApiService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async request() {
    this.logger.debug('Requesting employee data...');

    try {
      await lastValueFrom(
        await this.externalApiService.request(RequestEntities.EMPLOYEES),
      );

      this.logger.debug('Request successful');
    } catch (error) {
      this.logger.error(error);
    }
  }
}
