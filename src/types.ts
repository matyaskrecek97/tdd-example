export type StatusResponse = {
  status: string;
};

export type Employee = {
  id: string;
  name: string;
};

export enum RequestEntities {
  EMPLOYEES = 'employees',
}
