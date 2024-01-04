import { Injectable } from '@nestjs/common';
import { Employee } from '../types';

@Injectable()
export class EmployeeService {
  private db: Employee[] = [];

  async handleEmployeeData(data: Employee[]) {
    this.db.push(...data);

    return this.db;
  }
}
