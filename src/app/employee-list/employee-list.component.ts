import { EmployeeService } from './../Others/employee.service';
import { IEmployeeImpl } from './../Others/iemployee.impl';
import { IEmployee } from './../Others/iemployee.interface.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  name = 'Sam';
  httpClientErrorDesc = '';
  filter = {
      gender : 'All'
  };

  constructor(private employeeService: EmployeeService) {
  }

  employees: IEmployee[];

  ngOnInit(): void {
      // this.employees = this.employeeService.getEmployees();
      this.employeeService.getEmployees().subscribe({
        next : (value: IEmployee[]) => {
          this.employees = value ;
        },
        error : (err: HttpErrorResponse) => {
          console.log(err);
          this.httpClientErrorDesc = err.message ;
        },
        complete : () => {
          console.log('complete') ;
        }
      });
  }

  trackByEmpCode(index: number , employee: IEmployee): string {
      return employee.code;
  }

  onRefreshEmployees(): void {
     this.employees = _.shuffle(this.employees) ;
    // this.employees = [
    //   {code : 'emp001' , name : 'Wolverine' , salary : 10056.349},
    // {code : 'emp004' , name : 'Captain' , salary : 4000.67},
    // {code : 'emp003' , name : 'Bane' , salary : 70078.9},
    // {code : 'emp009' , name : 'Tom' , salary : 6565.78},
    // {code : 'emp002' , name : 'Hopkins' , salary : 32145.89},
    // {code : 'emp008' , name : 'Hopkins' , salary : 32145.89}
    // ];
  }

  private getEmployeesByGender (gender: string): any[] {
      return _.filter(this.employees, employee => {
          if (employee.gender === gender) {
              return employee;
          }
      });
  }

  getMaleEmployeeCount(): number {
      return this.getEmployeesByGender('Male').length;
  }

  getAllEmployeeCount(): number {
      return this.employees && this.employees.length;
  }

  getFemaleEmployeeCount(): number {
      return this.getEmployeesByGender('Female').length;
  }

  onGenderSelectionChange(selection): void {
      this.filter.gender = selection;
  }

}
