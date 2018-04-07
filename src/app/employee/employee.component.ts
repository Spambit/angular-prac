import { IEmployee } from './../Others/iemployee.interface.model';
import { EmployeeService } from './../Others/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'employee',
  templateUrl: 'employee.component.html',
  styleUrls: ['employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name = 'Sambit';
  age = 30;
  gender = 'Male';
  colspan = 2;

  shouldShowDetails = true;

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employeeService.getEmployee(this.activatedRoute.snapshot.params['code'])
      .subscribe({
        next: (employee: IEmployee) => {
          this.name = employee.name;
          this.age = this.getAge(employee.birth_day);
          this.gender = employee.gender;
        },
        error: (err) => { console.log(err); }
      });
  }

  private getAge(birthDay: string): number {
    const date1 = new Date();
    const date2 = new Date(birthDay);
    const timediff = Math.abs(date1.getTime() - date2.getTime());
    const dayDiff = Math.ceil(timediff / (1000 * 3600 * 24));
    const year = Math.ceil(dayDiff / 365);
    return year;
  }

  toggleDetails() {
    this.shouldShowDetails = !this.shouldShowDetails;
  }
}
