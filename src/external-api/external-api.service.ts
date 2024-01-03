import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { RequestEntities, StatusResponse } from '../types';

@Injectable()
export class ExternalApiService {
  constructor(private readonly httpService: HttpService) {}

  async request(
    entity: RequestEntities,
  ): Promise<Observable<AxiosResponse<StatusResponse>>> {
    return this.httpService
      .post('EXTERNAL_API_URL', {
        entity,
      })
      .pipe(map((response) => response.data));
  }
}
