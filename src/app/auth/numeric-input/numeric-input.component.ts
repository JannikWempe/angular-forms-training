import {Component, Input, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent implements ControlValueAccessor {
  @Input() label!: string;

  value: number = 0;

  private propagateChange!: (_: any) => void;
  private propagateTouched!: () => void;

  constructor(
    @Optional() @Self() public ngControl: NgControl
) {
    if (ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      ngControl.valueAccessor = this;
    }

    console.log(ngControl)
  }

  increment() {
    this.value++;
    this.propagateChange(this.value);
    this.propagateTouched();
  }

  decrement() {
    this.value--;
    this.propagateChange(this.value);
    this.propagateTouched();
  }

  // Registers a callback function that is called when the control's value changes in the UI.
  //
  // This method is called by the forms API on initialization to update the form model when values propagate from the view to the model.
  //
  // view -> model
  registerOnChange(fn: (_: any) => void): void {
    this.propagateChange = fn;
  }

  // Registers a callback function that is called by the forms API on initialization to update the form model on blur.
  //
  // view -> model
  // e.g. setting .ng-touched
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  // This method is called by the forms API to write to the view when programmatic changes from model to view are requested.
  //
  // model -> view
  writeValue(newValue: any): void {
    if (!!newValue) {
      this.value = newValue;
    }
  }
}
