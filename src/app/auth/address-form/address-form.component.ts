import {Component, forwardRef, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true
    }
  ]
})
export class AddressFormComponent implements OnInit, ControlValueAccessor, Validator {
  form!: FormGroup

  propagateTouched!: () => void;

  constructor(private fb: FormBuilder) {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : {invalidForm: {valid: false, message: "Address fields are invalid"}};
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      'street': ['', Validators.required],
      'city': ['', Validators.required]
    })
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn)
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn
  }

  writeValue(val: any): void {
    val && this.form.setValue(val, {emitEvent: false})
  }

  setDisabledState(isDisabled: boolean) {
    isDisabled ? this.form.disable() : this.form.enable()
  }
}
