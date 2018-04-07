import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'interpolation',
    templateUrl: 'interpolation.component.html',
    styleUrls: ['interpolation.component.css']
})
export class InterpolationComponent {
  fakeImgHostUrl = 'http://fakeimg.pl/';
  size = '200x200';
  desc = 'Never use interpolation in case of non-string data. Use property binding.';
  btnTitle = 'Data binding';
  isBtnDisable = false;
  allclasses = 'thick thicker normal decorated italic';
  shouldApplyThickClass = false;
  shouldApplyThickerClass = false;
  shouldApplyDecoratedClass = false;
  shouldApplyNormalClass = false;
  shouldApplyItalicClass = true;

  addClasses() {
      const classes = {
          thick : this.shouldApplyThickClass,
          thicker : this.shouldApplyThickerClass,
          decorated : this.shouldApplyDecoratedClass,
          normal : this.shouldApplyNormalClass,
          italic : this.shouldApplyItalicClass
      };

      return classes;
  }
}
