import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'employee-filter',
    templateUrl: 'employee-filter.component.html',
    styleUrls: ['employee-filter.component.css']
})
export class EmployeeFilterComponent implements OnInit, OnChanges{
  @Input() allEmployeeCount;
  @Input() femaleEmployeeCount;
  @Input() maleEmployeeCount;
  @Input() selectedGender;

  @Output() genderSelectionDidChange: EventEmitter<string> = new EventEmitter();
  triggerGenderChangeEvent($event): void {
    this.genderSelectionDidChange.emit(this.selectedGender);
  }

  ngOnInit(): void {
    console.log('ngOnInit.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.');
    for (const propName in changes) {
      if (propName) {
        const change: SimpleChange = changes[propName];
        console.log(`${propName} : Previous value = ${change.previousValue} and Current Value = ${change.currentValue}`);
      }
    }
  }
}
