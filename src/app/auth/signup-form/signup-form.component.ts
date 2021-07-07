import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

const USERNAME_BLACKLIST = ['mustermann']

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
    this.form = this.fb.group({
      // TODO: create a custom validator "isForbiddenUsername"
      // [ ] username is invalid if name is listed in USERNAME_BLACKLIST
      // [ ] Error "Username xyz is not allowed." is only shown if custom validator is invalid
      'username': ['', Validators.required],
      'name': this.fb.group({
        'first': [''],
        'last': ['', Validators.required]
      }),
      'addresses': this.fb.array([])
    })
  }

  onAddAddress() {
    (this.form.get('addresses') as FormArray).push(this.fb.group({
      'street': ['', Validators.required],
      'city': ['', Validators.required]
    }))
  }

  onRemoveAddress(index: number) {
    (this.form.get('addresses') as FormArray).removeAt(index);
  }

  onSubmit() {}
}
