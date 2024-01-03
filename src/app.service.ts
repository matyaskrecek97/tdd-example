import { Injectable } from '@nestjs/common';
import { StatusResponse } from './types';
@Injectable()
export class AppService {
  status(): StatusResponse {
    return { status: 'ok' };
  }
}
