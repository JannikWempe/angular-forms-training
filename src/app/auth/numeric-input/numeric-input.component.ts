import {Component, Input} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

// TODO: This component should be usable within the form
// [ ] value is updated in the form
// [ ] initial value provided by the form is reflected in the UI
// [ ] validators are working
// [ ] class .ng-touched is set after value of this component changes
@Component({
@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent implements ControlValueAccessor {
  @Input() label!: string;

  value: number = 0;

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
