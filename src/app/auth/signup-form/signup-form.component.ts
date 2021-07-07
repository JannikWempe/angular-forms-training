import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

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

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    // TODO: rewrite this using FormBuilder
    // Note: the form will not work yet, this will be the next task
    this.form = new FormGroup({
      'username': new FormControl(['', Validators.required]),
      'name': new FormGroup({
        'first': new FormControl(['']),
        'last': new FormControl(['', Validators.required])
      }),
      'addresses': new FormArray([])
    })
  }

  onSubmit() {}
}
