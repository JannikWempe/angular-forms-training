import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form!: FormGroup;

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    // TODO: connect this form to the actual inputs in the html
    // [ ] a change of the inputs in the UI is reflected in the form
    this.form = this.fb.group({
      'username': ['', Validators.required],
      'name': this.fb.group({
        'first': [''],
        'last': ['', Validators.required]
      }),
      'addresses': this.fb.array([])
    })
  }

  onAddAddress() {
    // TODO: add a form group containing the following form fields to 'addresses'
  }

  onRemoveAddress(index: number) {
    // TODO: remove the form group with the given index from 'addresses'
  }

  onSubmit() {}
}
