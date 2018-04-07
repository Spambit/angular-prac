import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeePipe'
})
export class EmployeePipePipe implements PipeTransform {

  transform(employeeName: string, gender: string): string {
    if ( gender === 'Male') {
      return 'Mr.' + employeeName;
    } else {
      return 'Miss.' + employeeName;
    }
  }

}
