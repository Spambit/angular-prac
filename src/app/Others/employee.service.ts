import { IEmployee } from './iemployee.interface.model';
import { Injectable } from '@angular/core';
import { IEmployeeImpl } from './iemployee.impl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }
  public getEmployee(code: string): Observable<IEmployee> {
    return this.http.get(`http://localhost:3000/employees/${code}`)
    .map((value: Object, index: number) => {
      return value as IEmployeeImpl;
    }).catch((err) => {
      return Observable.throw(err);
    });
  }
  public getEmployees(): Observable<IEmployee[]> {
      return this.http.get('http://localhost:3000/employees')
      .map((value: Object, index: number) => {
          return value as IEmployeeImpl[];
      }).catch((err) => {
          return Observable.throw(err);
      });
      /*return [
        IEmployeeImpl.create({code : 'emp001' , name : 'Wolverine' , salary : 10056.349 , birth_day : '04/13/1978' , gender : 'Male'}),
        IEmployeeImpl.create({code : 'emp003' , name : 'Bane' , salary : 70078.9 , birth_day : '12/30/1987' , gender : 'Male'}),
        IEmployeeImpl.create({code : 'emp009' , name : 'Tom' , salary : 6565.78 , birth_day : '04/23/1985' , gender : 'Male'}),
        IEmployeeImpl.create({code : 'emp002' , name : 'Hopkins' , salary : 32145.89 , birth_day : '03/13/1985' , gender : 'Female'}),
        IEmployeeImpl.create({code : 'emp004' , name : 'Captain' , salary : 4000.67 , birth_day : '04/15/1998' , gender : 'Female'}),
        IEmployeeImpl.create({code : 'emp007' , name : 'Bane' , salary : 70078.9 , birth_day : '12/30/1987' , gender : 'Male'})
    ];*/
  }

}
