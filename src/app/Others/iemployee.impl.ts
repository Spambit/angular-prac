import { IEmployee } from './iemployee.interface.model';
export class IEmployeeImpl implements IEmployee {
  constructor(public code, public name, public salary, public birth_day, public gender){
  }

  public static create(plainOldJSObj: any): IEmployeeImpl {
    return plainOldJSObj as IEmployeeImpl;
  }

}
